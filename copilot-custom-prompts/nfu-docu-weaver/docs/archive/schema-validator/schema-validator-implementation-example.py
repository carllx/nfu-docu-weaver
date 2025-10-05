"""
SchemaValidator 实施示例代码
============================

这是一个完整的实现示例，展示核心算法的实际代码。
开发者可以直接参考此实现进行开发。

作者: Architect
日期: 2025-10-04
状态: Reference Implementation
"""

from dataclasses import dataclass, field
from typing import Dict, Set, List, Optional, Any
from enum import Enum
from pathlib import Path
from datetime import datetime
import yaml


# ============================================================================
# 数据类型定义
# ============================================================================

class DataType(Enum):
    """数据类型枚举"""
    STRING = "string"
    INTEGER = "integer"
    FLOAT = "float"
    BOOLEAN = "boolean"
    LIST = "list"
    OBJECT = "object"
    ANY = "any"


@dataclass
class FieldRule:
    """单个字段的验证规则"""
    name: str
    path: str
    data_type: DataType
    required: bool
    description: Optional[str] = None
    nested_rules: Optional[Dict[str, 'FieldRule']] = None
    list_item_type: Optional[DataType] = None


@dataclass
class ValidationRules:
    """完整的验证规则集"""
    schema_version: str
    required_fields: Set[str]
    field_rules: Dict[str, FieldRule]
    optional_fields: Set[str]
    
    def get_rule(self, path: str) -> Optional[FieldRule]:
        """根据路径获取字段规则"""
        return self.field_rules.get(path)
    
    def is_required(self, path: str) -> bool:
        """检查字段是否必需"""
        return path in self.required_fields


@dataclass
class ValidationError:
    """单个验证错误"""
    type: str
    path: str
    message: str
    severity: str
    expected: Optional[str] = None
    actual: Optional[str] = None


@dataclass
class ValidationResult:
    """单个文件的验证结果"""
    file_path: str
    is_valid: bool
    errors: List[ValidationError]
    warnings: List[ValidationError]
    timestamp: datetime
    schema_version: str
    
    def to_dict(self) -> dict:
        """转换为字典格式（用于 JSON 输出）"""
        return {
            "file": self.file_path,
            "valid": self.is_valid,
            "errors": [self._error_to_dict(e) for e in self.errors],
            "warnings": [self._error_to_dict(w) for w in self.warnings],
            "timestamp": self.timestamp.isoformat(),
            "schema_version": self.schema_version
        }
    
    @staticmethod
    def _error_to_dict(error: ValidationError) -> dict:
        return {
            "type": error.type,
            "path": error.path,
            "message": error.message,
            "severity": error.severity,
            "expected": error.expected,
            "actual": error.actual
        }


@dataclass
class BatchValidationResult:
    """批量验证结果"""
    total: int
    valid_count: int
    invalid_count: int
    results: List[ValidationResult]
    
    @property
    def success(self) -> bool:
        return self.invalid_count == 0
    
    def to_dict(self) -> dict:
        return {
            "success": self.success,
            "total": self.total,
            "valid": self.valid_count,
            "invalid": self.invalid_count,
            "results": [r.to_dict() for r in self.results]
        }


# ============================================================================
# 异常定义
# ============================================================================

class SchemaValidationError(Exception):
    """Schema 验证相关的基础异常"""
    pass


class SchemaLoadError(SchemaValidationError):
    """Schema 加载失败"""
    pass


class SchemaVersionError(SchemaValidationError):
    """Schema 版本不兼容"""
    pass


class SchemaNotLoadedError(SchemaValidationError):
    """尝试使用未加载的 Schema"""
    pass


class DataParseError(SchemaValidationError):
    """数据解析失败"""
    pass


# ============================================================================
# SchemaValidator 核心类
# ============================================================================

class SchemaValidator:
    """
    基于 Schema 的数据验证器
    
    职责:
    - 加载并解析 Schema 定义
    - 从 Schema 提取验证规则
    - 执行数据验证
    - 生成详细的验证报告
    """
    
    def __init__(self, schema_path: Optional[Path] = None):
        """
        初始化验证器
        
        Args:
            schema_path: Schema 文件路径，如果为 None 则使用默认路径
        """
        self.schema_path = schema_path or self._get_default_schema_path()
        self.schema: Optional[dict] = None
        self.rules: Optional[ValidationRules] = None
        self._cache: dict = {}
    
    # ========================================================================
    # 公共接口
    # ========================================================================
    
    def validate_file(self, data_path: Path) -> ValidationResult:
        """
        验证单个数据文件
        
        Args:
            data_path: 数据文件路径
            
        Returns:
            ValidationResult 对象
        """
        result = ValidationResult(
            file_path=str(data_path),
            is_valid=True,
            errors=[],
            warnings=[],
            timestamp=datetime.now(),
            schema_version=""
        )
        
        try:
            # 1. 加载 Schema（如果未加载）
            if not self.schema:
                self.load_schema()
            
            # 2. 提取验证规则（如果未提取）
            if not self.rules:
                self.rules = self.extract_rules()
            
            result.schema_version = self.rules.schema_version
            
            # 3. 解析数据文件
            data = self._parse_yaml(data_path)
            
            # 4. 执行验证
            errors = []
            errors.extend(self._validate_required_fields(data, self.rules))
            errors.extend(self._validate_types(data, self.rules))
            errors.extend(self._validate_nested_structure(data, "", self.schema))
            
            # 5. 分类错误和警告
            for error in errors:
                if error.severity == "error":
                    result.errors.append(error)
                else:
                    result.warnings.append(error)
            
            # 6. 确定验证结果
            result.is_valid = len(result.errors) == 0
            
        except Exception as e:
            result.is_valid = False
            result.errors.append(ValidationError(
                type="validation_error",
                path="",
                message=f"验证过程出错: {str(e)}",
                severity="error"
            ))
        
        return result
    
    def validate_batch(self, data_dir: Path) -> BatchValidationResult:
        """
        批量验证目录中的所有数据文件
        
        Args:
            data_dir: 数据文件目录
            
        Returns:
            BatchValidationResult 对象
        """
        # 查找所有 YAML 文件
        yaml_files = sorted(
            list(data_dir.glob('*.yml')) + 
            list(data_dir.glob('*.yaml'))
        )
        
        results = []
        valid_count = 0
        invalid_count = 0
        
        # 验证每个文件
        for data_file in yaml_files:
            result = self.validate_file(data_file)
            results.append(result)
            
            if result.is_valid:
                valid_count += 1
            else:
                invalid_count += 1
        
        return BatchValidationResult(
            total=len(yaml_files),
            valid_count=valid_count,
            invalid_count=invalid_count,
            results=results
        )
    
    def load_schema(self, schema_path: Optional[Path] = None) -> dict:
        """
        加载 Schema 定义
        
        Args:
            schema_path: Schema 文件路径，如果为 None 则使用默认路径
            
        Returns:
            Schema 字典
            
        Raises:
            SchemaLoadError: Schema 加载失败
            SchemaVersionError: Schema 版本不兼容
        """
        if schema_path:
            self.schema_path = schema_path
        
        try:
            with open(self.schema_path, 'r', encoding='utf-8') as f:
                self.schema = yaml.safe_load(f)
            
            if not self.schema or not isinstance(self.schema, dict):
                raise SchemaLoadError("Schema 文件为空或格式不正确")
            
            # 检测并验证版本
            version = self._detect_version(self.schema)
            if not self._check_version_compatibility(version):
                raise SchemaVersionError(f"不支持的 Schema 版本: {version}")
            
            return self.schema
            
        except FileNotFoundError:
            raise SchemaLoadError(f"Schema 文件不存在: {self.schema_path}")
        except yaml.YAMLError as e:
            raise SchemaLoadError(f"Schema YAML 语法错误: {str(e)}")
        except Exception as e:
            raise SchemaLoadError(f"加载 Schema 失败: {str(e)}")
    
    def extract_rules(self) -> ValidationRules:
        """
        从 Schema 中提取验证规则
        
        Returns:
            ValidationRules 对象
            
        Raises:
            SchemaNotLoadedError: Schema 未加载
        """
        if not self.schema:
            raise SchemaNotLoadedError("Schema 未加载，请先调用 load_schema()")
        
        rules = ValidationRules(
            schema_version=self._detect_version(self.schema),
            required_fields=set(),
            field_rules={},
            optional_fields=set()
        )
        
        # 递归解析 Schema
        self._parse_schema_node(
            node=self.schema,
            path="",
            rules=rules,
            parent_required=True
        )
        
        return rules
    
    # ========================================================================
    # 私有方法 - Schema 处理
    # ========================================================================
    
    def _get_default_schema_path(self) -> Path:
        """获取默认的 Schema 文件路径"""
        # 假设当前文件在项目根目录
        return Path(__file__).parent.parent.parent / 'schemas' / 'lesson_data_schema.yml'
    
    def _detect_version(self, schema: dict) -> str:
        """
        检测 Schema 版本
        
        策略:
        1. 读取 _schema_version 字段
        2. 检查是否有 v2 特有的字段
        3. 默认为 "v1"
        """
        # 策略 1: 显式版本字段
        if '_schema_version' in schema:
            return schema['_schema_version']
        
        # 策略 2: 特征检测
        v2_features = ['signature_info', 'segment_type']
        for feature in v2_features:
            if self._has_nested_key(schema, feature):
                return "v2"
        
        return "v1"
    
    def _has_nested_key(self, data: Any, key: str) -> bool:
        """递归检查是否存在某个键"""
        if isinstance(data, dict):
            if key in data:
                return True
            for value in data.values():
                if self._has_nested_key(value, key):
                    return True
        elif isinstance(data, list):
            for item in data:
                if self._has_nested_key(item, key):
                    return True
        return False
    
    def _check_version_compatibility(self, version: str) -> bool:
        """检查版本兼容性"""
        supported_versions = ['v1', 'v2']
        return version in supported_versions
    
    def _parse_schema_node(
        self, 
        node: Any, 
        path: str, 
        rules: ValidationRules,
        parent_required: bool
    ) -> None:
        """
        递归解析 Schema 节点
        
        Args:
            node: 当前节点
            path: 当前路径
            rules: 验证规则对象（可变）
            parent_required: 父节点是否必需
        """
        if isinstance(node, dict):
            for key, value in node.items():
                # 跳过注释键和元数据键
                if key.startswith('#') or key.startswith('_'):
                    continue
                
                current_path = f"{path}.{key}" if path else key
                
                # 检测是否必需
                is_required = self._is_field_required(key, value, parent_required)
                
                # 检测数据类型
                data_type = self._detect_data_type(value)
                
                # 创建字段规则
                field_rule = FieldRule(
                    name=key,
                    path=current_path,
                    data_type=data_type,
                    required=is_required,
                    description=self._extract_description(key, value)
                )
                
                # 如果是对象类型，递归解析
                if data_type == DataType.OBJECT:
                    field_rule.nested_rules = {}
                    self._parse_schema_node(value, current_path, rules, is_required)
                
                # 如果是列表类型，检测列表项类型
                elif data_type == DataType.LIST:
                    field_rule.list_item_type = self._detect_list_item_type(value)
                    # 如果列表项是对象，也需要递归
                    if isinstance(value, list) and value and isinstance(value[0], dict):
                        self._parse_schema_node(value[0], current_path, rules, is_required)
                
                # 添加到规则集
                rules.field_rules[current_path] = field_rule
                if is_required:
                    rules.required_fields.add(current_path)
                else:
                    rules.optional_fields.add(current_path)
        
        elif isinstance(node, list):
            # 列表示例，提取第一个元素的类型
            if node and isinstance(node[0], dict):
                self._parse_schema_node(node[0], path, rules, parent_required)
    
    def _detect_data_type(self, value: Any) -> DataType:
        """检测字段的数据类型"""
        if isinstance(value, str):
            return DataType.STRING
        elif isinstance(value, bool):
            # 注意：bool 必须在 int 之前检查（bool 是 int 的子类）
            return DataType.BOOLEAN
        elif isinstance(value, int):
            return DataType.INTEGER
        elif isinstance(value, float):
            return DataType.FLOAT
        elif isinstance(value, list):
            return DataType.LIST
        elif isinstance(value, dict):
            # 检查是否是嵌套对象
            if self._is_nested_object(value):
                return DataType.OBJECT
        
        return DataType.ANY
    
    def _is_nested_object(self, value: dict) -> bool:
        """判断字典是否是嵌套对象（而非类型定义）"""
        # 如果字典非空且不是类型定义，则是嵌套对象
        type_keywords = {'type', 'required', 'description', 'example'}
        keys = set(value.keys())
        return len(keys - type_keywords) > 0
    
    def _detect_list_item_type(self, value: Any) -> DataType:
        """检测列表项的类型"""
        if isinstance(value, list) and value:
            return self._detect_data_type(value[0])
        return DataType.ANY
    
    def _is_field_required(self, key: str, value: Any, parent_required: bool) -> bool:
        """
        判断字段是否必需
        
        策略:
        1. 检查注释中是否有标记
        2. 检查字段名
        3. 基于层级和父节点
        """
        # 策略 1: 显式标记
        if isinstance(value, dict) and 'required' in value:
            return value['required']
        
        # 策略 2: 字段名推断
        if 'optional' in key.lower():
            return False
        
        # 策略 3: 顶层字段默认必需
        return parent_required
    
    def _extract_description(self, key: str, value: Any) -> Optional[str]:
        """提取字段描述（从注释或文档字符串）"""
        # 简单实现：未来可以从 Schema 注释中提取
        return None
    
    # ========================================================================
    # 私有方法 - 数据处理
    # ========================================================================
    
    def _parse_yaml(self, file_path: Path) -> dict:
        """解析 YAML 文件"""
        try:
            with open(file_path, 'r', encoding='utf-8') as f:
                data = yaml.safe_load(f)
            
            if data is None:
                raise DataParseError("YAML 文件为空")
            if not isinstance(data, dict):
                raise DataParseError("YAML 根节点必须是字典类型")
            
            return data
            
        except yaml.YAMLError as e:
            raise DataParseError(f"YAML 语法错误: {str(e)}")
        except FileNotFoundError:
            raise DataParseError("文件不存在")
        except Exception as e:
            raise DataParseError(f"读取文件错误: {str(e)}")
    
    # ========================================================================
    # 私有方法 - 验证逻辑
    # ========================================================================
    
    def _validate_required_fields(
        self, 
        data: dict, 
        rules: ValidationRules
    ) -> List[ValidationError]:
        """验证必需字段"""
        errors = []
        data_keys = set(self._get_all_keys(data))
        
        for required_field in rules.required_fields:
            if required_field not in data_keys:
                errors.append(ValidationError(
                    type="missing_field",
                    path=required_field,
                    message=f"缺少必需字段: '{required_field}'",
                    severity="error",
                    expected=f"字段 '{required_field}' 必须存在",
                    actual="字段不存在"
                ))
        
        return errors
    
    def _validate_types(
        self, 
        data: dict, 
        rules: ValidationRules
    ) -> List[ValidationError]:
        """验证数据类型"""
        errors = []
        
        for path, value in self._iter_all_paths(data):
            rule = rules.get_rule(path)
            if rule:
                actual_type = self._detect_data_type(value)
                if actual_type != rule.data_type and rule.data_type != DataType.ANY:
                    errors.append(ValidationError(
                        type="type_mismatch",
                        path=path,
                        message=f"字段 '{path}' 类型不匹配",
                        severity="warning",
                        expected=rule.data_type.value,
                        actual=actual_type.value
                    ))
        
        return errors
    
    def _validate_nested_structure(
        self, 
        data: dict, 
        path: str, 
        schema_node: dict
    ) -> List[ValidationError]:
        """递归验证嵌套结构"""
        errors = []
        
        # 简化实现：检查嵌套对象的完整性
        # 完整实现需要递归遍历并验证每个嵌套层级
        
        return errors
    
    def _get_all_keys(self, data: dict, prefix: str = '') -> List[str]:
        """递归获取所有键（扁平化路径）"""
        keys = []
        if isinstance(data, dict):
            for key, value in data.items():
                full_key = f"{prefix}.{key}" if prefix else key
                keys.append(full_key)
                if isinstance(value, dict):
                    keys.extend(self._get_all_keys(value, full_key))
        return keys
    
    def _iter_all_paths(self, data: dict, prefix: str = ''):
        """递归迭代所有路径和值"""
        if isinstance(data, dict):
            for key, value in data.items():
                full_path = f"{prefix}.{key}" if prefix else key
                yield (full_path, value)
                if isinstance(value, dict):
                    yield from self._iter_all_paths(value, full_path)


# ============================================================================
# 使用示例
# ============================================================================

if __name__ == "__main__":
    # 示例 1: 验证单个文件
    print("=== 示例 1: 验证单个文件 ===")
    validator = SchemaValidator()
    result = validator.validate_file(Path("test_data/lesson1.yml"))
    
    print(f"文件: {result.file_path}")
    print(f"有效: {result.is_valid}")
    print(f"错误数: {len(result.errors)}")
    print(f"警告数: {len(result.warnings)}")
    
    if result.errors:
        print("\n错误:")
        for error in result.errors:
            print(f"  - [{error.type}] {error.path}: {error.message}")
    
    if result.warnings:
        print("\n警告:")
        for warning in result.warnings:
            print(f"  - [{warning.type}] {warning.path}: {warning.message}")
    
    # 示例 2: 批量验证
    print("\n=== 示例 2: 批量验证 ===")
    batch_result = validator.validate_batch(Path("test_data/"))
    
    print(f"总计: {batch_result.total}")
    print(f"有效: {batch_result.valid_count}")
    print(f"无效: {batch_result.invalid_count}")
    print(f"成功: {batch_result.success}")
    
    # 示例 3: 导出 JSON
    print("\n=== 示例 3: JSON 输出 ===")
    import json
    print(json.dumps(result.to_dict(), indent=2, ensure_ascii=False))

