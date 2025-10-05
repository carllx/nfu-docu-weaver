# SchemaValidator 技术设计文档

**Story**: 2.7 - Schema 验证器集成  
**版本**: v1.0  
**作者**: Architect  
**日期**: 2025-10-04  
**状态**: 🔍 Ready for Review

---

## 📋 目录

1. [设计概述](#1-设计概述)
2. [架构设计](#2-架构设计)
3. [类设计](#3-类设计)
4. [验证规则提取算法](#4-验证规则提取算法)
5. [Schema 版本兼容机制](#5-schema-版本兼容机制)
6. [数据流设计](#6-数据流设计)
7. [错误处理策略](#7-错误处理策略)
8. [性能考量](#8-性能考量)
9. [测试策略](#9-测试策略)
10. [实施计划](#10-实施计划)

---

## 1. 设计概述

### 1.1 目标

实现基于 Schema 的自动数据验证系统，替代现有的模板驱动验证方法，使数据契约成为验证的唯一真实来源。

### 1.2 设计原则

1. **Single Source of Truth (SSOT)**: Schema 是数据结构的唯一权威定义
2. **Fail-Fast**: 在流程早期发现并阻止错误数据
3. **契约优先 (Contract-First)**: Schema 先于实现定义
4. **向后兼容**: 支持现有的 DataValidator，平滑迁移
5. **可扩展性**: 易于添加新的验证规则和 Schema 版本

### 1.3 核心价值

- ✅ **标准化验证**: 基于 Schema 而非模板，更精确
- ✅ **类型安全**: 支持数据类型验证（string, int, list, object）
- ✅ **结构验证**: 验证嵌套结构完整性
- ✅ **AI 友好**: 为 AI 生成的数据提供自动化验证

---

## 2. 架构设计

### 2.1 整体架构

```
┌─────────────────────────────────────────────────────────┐
│                  CLI Layer (validate 命令)               │
└───────────────────┬─────────────────────────────────────┘
                    │
                    ▼
┌─────────────────────────────────────────────────────────┐
│              ValidationOrchestrator                      │
│  - 协调验证流程                                           │
│  - 选择验证器（Template-based vs Schema-based）          │
│  - 格式化输出结果                                         │
└───────────┬────────────────────┬────────────────────────┘
            │                    │
            ▼                    ▼
┌──────────────────┐    ┌──────────────────────────────┐
│  DataValidator   │    │    SchemaValidator           │
│  (现有实现)       │    │    (新增实现)                 │
│                  │    │                              │
│ - 模板驱动验证    │    │  - Schema 驱动验证            │
│ - 占位符提取      │    │  - 规则提取                   │
│ - 基础键检查      │    │  - 类型验证                   │
│                  │    │  - 结构验证                   │
└──────────────────┘    └───────────┬──────────────────┘
                                    │
                                    ▼
                        ┌──────────────────────┐
                        │   Schema Loader      │
                        │  - 加载 Schema 文件   │
                        │  - 版本检测           │
                        │  - 缓存管理           │
                        └──────────────────────┘
```

### 2.2 组件职责

| 组件 | 职责 | 依赖 |
|------|------|------|
| **ValidationOrchestrator** | 验证流程编排，验证器选择 | DataValidator, SchemaValidator |
| **SchemaValidator** | Schema 驱动的验证逻辑 | SchemaLoader, ValidationRules |
| **SchemaLoader** | Schema 文件加载和解析 | PyYAML |
| **ValidationRules** | 验证规则的数据结构 | - |
| **ValidationResult** | 验证结果的数据结构 | - |

---

## 3. 类设计

### 3.1 SchemaValidator 类

```python
class SchemaValidator:
    """
    基于 Schema 的数据验证器
    
    职责:
    - 加载并解析 Schema 定义
    - 从 Schema 提取验证规则
    - 执行数据验证
    - 生成详细的验证报告
    
    设计模式:
    - Strategy Pattern: 不同的验证策略
    - Builder Pattern: 构建验证规则
    - Factory Pattern: 创建验证器实例
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
    
    # ===== 公共接口 =====
    
    def validate_file(self, data_path: Path) -> ValidationResult:
        """
        验证单个数据文件
        
        流程:
        1. 加载 Schema（如果未加载）
        2. 提取验证规则
        3. 解析数据文件
        4. 执行验证
        5. 返回结果
        
        Args:
            data_path: 数据文件路径
            
        Returns:
            ValidationResult 对象
        """
    
    def validate_batch(self, data_dir: Path) -> BatchValidationResult:
        """
        批量验证目录中的所有数据文件
        
        Args:
            data_dir: 数据文件目录
            
        Returns:
            BatchValidationResult 对象
        """
    
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
    
    def extract_rules(self) -> ValidationRules:
        """
        从 Schema 中提取验证规则
        
        Returns:
            ValidationRules 对象
            
        Raises:
            SchemaNotLoadedError: Schema 未加载
        """
    
    # ===== 私有方法 =====
    
    def _get_default_schema_path(self) -> Path:
        """获取默认的 Schema 文件路径"""
    
    def _parse_yaml(self, file_path: Path) -> dict:
        """解析 YAML 文件"""
    
    def _validate_structure(self, data: dict, rules: ValidationRules) -> List[ValidationError]:
        """验证数据结构完整性"""
    
    def _validate_types(self, data: dict, rules: ValidationRules) -> List[ValidationError]:
        """验证数据类型"""
    
    def _validate_required_fields(self, data: dict, rules: ValidationRules) -> List[ValidationError]:
        """验证必需字段"""
    
    def _validate_nested_structure(self, data: dict, path: str, schema_node: dict) -> List[ValidationError]:
        """递归验证嵌套结构"""
```

### 3.2 ValidationRules 数据类

```python
from dataclasses import dataclass
from typing import Dict, Set, List, Optional
from enum import Enum

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
    name: str                           # 字段名
    path: str                           # 完整路径（如 "class_hours.total"）
    data_type: DataType                 # 数据类型
    required: bool                      # 是否必需
    description: Optional[str] = None   # 字段描述
    nested_rules: Optional[Dict[str, 'FieldRule']] = None  # 嵌套字段规则
    list_item_type: Optional[DataType] = None  # 列表项类型

@dataclass
class ValidationRules:
    """完整的验证规则集"""
    schema_version: str                 # Schema 版本
    required_fields: Set[str]           # 必需字段集合（扁平化路径）
    field_rules: Dict[str, FieldRule]   # 字段规则映射
    optional_fields: Set[str]           # 可选字段集合
    
    def get_rule(self, path: str) -> Optional[FieldRule]:
        """根据路径获取字段规则"""
        return self.field_rules.get(path)
    
    def is_required(self, path: str) -> bool:
        """检查字段是否必需"""
        return path in self.required_fields
```

### 3.3 ValidationResult 数据类

```python
from datetime import datetime

@dataclass
class ValidationError:
    """单个验证错误"""
    type: str           # 错误类型: "missing_field", "type_mismatch", "structure_error"
    path: str           # 字段路径
    message: str        # 错误消息
    severity: str       # 严重程度: "error", "warning"
    expected: Optional[str] = None  # 期望值
    actual: Optional[str] = None    # 实际值

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
```

---

## 4. 验证规则提取算法

### 4.1 Schema 解析策略

```python
def extract_rules(self) -> ValidationRules:
    """
    从 Schema 中提取验证规则
    
    算法:
    1. 检测 Schema 版本
    2. 递归遍历 Schema 结构
    3. 识别字段类型（通过注释或示例值）
    4. 区分必需字段和可选字段
    5. 构建验证规则树
    
    识别策略:
    - 字符串类型: 示例值为 "..." 或注释中包含 "string"
    - 整数类型: 示例值为数字
    - 列表类型: 示例值以 "-" 开头或为列表
    - 对象类型: 包含嵌套的键值对
    - 必需字段: 注释中包含 "必需" 或在顶层
    - 可选字段: 注释中包含 "可选" 或在深层
    """
    
    if not self.schema:
        raise SchemaNotLoadedError("Schema 未加载")
    
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
        node: 当前节点（可以是 dict, list, 或基础类型）
        path: 当前路径
        rules: 验证规则对象（可变）
        parent_required: 父节点是否必需
    """
    
    if isinstance(node, dict):
        for key, value in node.items():
            # 跳过注释键
            if key.startswith('#') or key.startswith('_'):
                continue
            
            current_path = f"{path}.{key}" if path else key
            
            # 检测是否必需（基于注释或位置）
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
            
            # 添加到规则集
            rules.field_rules[current_path] = field_rule
            if is_required:
                rules.required_fields.add(current_path)
            else:
                rules.optional_fields.add(current_path)
    
    elif isinstance(node, list):
        # 列表示例，提取第一个元素的类型
        if node:
            self._parse_schema_node(node[0], path, rules, parent_required)
```

### 4.2 类型检测算法

```python
def _detect_data_type(self, value: Any) -> DataType:
    """
    检测字段的数据类型
    
    策略:
    1. 直接类型检查（如果是示例值）
    2. 结构分析（如果是复杂对象）
    3. 注释解析（如果有类型注释）
    """
    
    # 策略 1: 直接类型检查
    if isinstance(value, str):
        return DataType.STRING
    elif isinstance(value, int):
        return DataType.INTEGER
    elif isinstance(value, float):
        return DataType.FLOAT
    elif isinstance(value, bool):
        return DataType.BOOLEAN
    elif isinstance(value, list):
        return DataType.LIST
    elif isinstance(value, dict):
        # 检查是否是嵌套对象
        if self._is_nested_object(value):
            return DataType.OBJECT
        else:
            # 可能是类型定义字典
            return self._parse_type_definition(value)
    
    return DataType.ANY

def _is_nested_object(self, value: dict) -> bool:
    """判断字典是否是嵌套对象（而非类型定义）"""
    # 如果包含多个键且不是类型定义关键字，则是嵌套对象
    type_keywords = {'type', 'required', 'description', 'example'}
    keys = set(value.keys())
    return len(keys - type_keywords) > 0

def _is_field_required(self, key: str, value: Any, parent_required: bool) -> bool:
    """
    判断字段是否必需
    
    策略:
    1. 检查注释中是否有 "必需" 或 "可选" 标记
    2. 检查字段名是否包含 "optional"
    3. 顶层字段默认必需，深层字段默认可选
    """
    
    # 策略 1: 检查注释
    if isinstance(value, dict) and 'required' in value:
        return value['required']
    
    # 策略 2: 检查字段名
    if 'optional' in key.lower():
        return False
    
    # 策略 3: 基于层级和父节点
    return parent_required
```

---

## 5. Schema 版本兼容机制

### 5.1 版本检测

```python
def _detect_version(self, schema: dict) -> str:
    """
    检测 Schema 版本
    
    策略:
    1. 读取顶部注释中的版本信息
    2. 检查是否有 schema_version 字段
    3. 默认为 "v1"
    
    Returns:
        版本字符串（如 "v2", "v1"）
    """
    
    # 策略 1: 从注释中提取
    if '_schema_version' in schema:
        return schema['_schema_version']
    
    # 策略 2: 从文件内容推断
    # 检查是否有 v2 特有的字段（如 segment_type, signature_info）
    if 'signature_info' in schema:
        return "v2"
    
    return "v1"

def _check_version_compatibility(self, version: str) -> bool:
    """
    检查版本兼容性
    
    支持的版本:
    - v1: 基础版本
    - v2: 当前版本
    
    Returns:
        是否兼容
    """
    supported_versions = ['v1', 'v2']
    return version in supported_versions
```

### 5.2 版本迁移支持（未来扩展）

```python
class SchemaVersionMigrator:
    """Schema 版本迁移工具（v2.0 功能）"""
    
    def migrate(self, data: dict, from_version: str, to_version: str) -> dict:
        """
        迁移数据从一个版本到另一个版本
        
        Args:
            data: 原始数据
            from_version: 源版本
            to_version: 目标版本
            
        Returns:
            迁移后的数据
        """
        pass  # 未来实现
```

---

## 6. 数据流设计

### 6.1 验证流程

```
┌─────────────────────────────────────────────────────────────┐
│  1. CLI 接收命令                                             │
│     python generate_docs.py validate data.yml               │
└────────────────────┬────────────────────────────────────────┘
                     │
                     ▼
┌─────────────────────────────────────────────────────────────┐
│  2. SchemaValidator.validate_file(data.yml)                 │
│     - 初始化验证器                                            │
│     - 加载 Schema (如果未加载)                               │
└────────────────────┬────────────────────────────────────────┘
                     │
                     ▼
┌─────────────────────────────────────────────────────────────┐
│  3. load_schema()                                            │
│     - 读取 schemas/lesson_data_schema.yml                   │
│     - 解析 YAML                                              │
│     - 检测版本                                                │
│     - 缓存 Schema                                            │
└────────────────────┬────────────────────────────────────────┘
                     │
                     ▼
┌─────────────────────────────────────────────────────────────┐
│  4. extract_rules()                                          │
│     - 递归遍历 Schema                                         │
│     - 识别字段类型                                            │
│     - 区分必需/可选字段                                       │
│     - 构建 ValidationRules 对象                              │
└────────────────────┬────────────────────────────────────────┘
                     │
                     ▼
┌─────────────────────────────────────────────────────────────┐
│  5. _parse_yaml(data.yml)                                    │
│     - 读取数据文件                                            │
│     - 解析 YAML                                              │
│     - 语法检查                                                │
└────────────────────┬────────────────────────────────────────┘
                     │
                     ▼
┌─────────────────────────────────────────────────────────────┐
│  6. 执行验证                                                  │
│     ├─ _validate_required_fields()  → 检查必需字段           │
│     ├─ _validate_types()            → 检查数据类型           │
│     ├─ _validate_nested_structure() → 检查嵌套结构           │
│     └─ 收集错误和警告                                         │
└────────────────────┬────────────────────────────────────────┘
                     │
                     ▼
┌─────────────────────────────────────────────────────────────┐
│  7. 构建 ValidationResult                                    │
│     - is_valid = len(errors) == 0                           │
│     - errors: List[ValidationError]                         │
│     - warnings: List[ValidationError]                       │
│     - metadata (timestamp, schema_version)                  │
└────────────────────┬────────────────────────────────────────┘
                     │
                     ▼
┌─────────────────────────────────────────────────────────────┐
│  8. 格式化输出                                                │
│     - 友好的终端输出（✅/❌ 符号）                             │
│     - JSON 格式输出                                           │
│     - 详细错误信息                                            │
└─────────────────────────────────────────────────────────────┘
```

---

## 7. 错误处理策略

### 7.1 异常层次结构

```python
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
```

### 7.2 错误恢复策略

| 错误类型 | 处理策略 | 用户体验 |
|---------|---------|---------|
| Schema 文件不存在 | 降级到 DataValidator | 警告信息 + 继续验证 |
| Schema 语法错误 | 终止验证 | 错误信息 + 建议修复 |
| 数据文件不存在 | 跳过该文件 | 错误信息 + 继续下一个 |
| 数据语法错误 | 记录错误 | 详细错误位置 + 继续 |
| 类型不匹配 | 记录警告 | 警告信息 + 继续验证 |

---

## 8. 性能考量

### 8.1 优化策略

1. **Schema 缓存**
   - Schema 加载后缓存在内存
   - 批量验证时复用 Schema
   - 减少文件 I/O

2. **规则提取缓存**
   - 规则提取结果缓存
   - 同一 Schema 版本复用规则
   - 避免重复解析

3. **并行验证（未来）**
   - 批量验证时使用多进程
   - 独立文件并行处理
   - 提升大规模验证速度

### 8.2 性能指标

| 操作 | 目标性能 | 测量方法 |
|------|---------|---------|
| Schema 加载 | < 100ms | pytest benchmark |
| 规则提取 | < 50ms | pytest benchmark |
| 单文件验证 | < 200ms | pytest benchmark |
| 100 文件批量验证 | < 5s | integration test |

---

## 9. 测试策略

### 9.1 单元测试

**测试文件**: `tests/test_schema_validator.py`

```python
class TestSchemaValidator:
    """SchemaValidator 单元测试"""
    
    # === 初始化测试 ===
    def test_init_with_default_path(self):
        """测试默认路径初始化"""
    
    def test_init_with_custom_path(self):
        """测试自定义路径初始化"""
    
    # === Schema 加载测试 ===
    def test_load_schema_success(self):
        """测试成功加载 Schema"""
    
    def test_load_schema_file_not_found(self):
        """测试 Schema 文件不存在"""
    
    def test_load_schema_invalid_yaml(self):
        """测试无效的 YAML 语法"""
    
    def test_detect_schema_version_v2(self):
        """测试检测 v2 版本"""
    
    # === 规则提取测试 ===
    def test_extract_rules_top_level_fields(self):
        """测试提取顶层字段规则"""
    
    def test_extract_rules_nested_fields(self):
        """测试提取嵌套字段规则"""
    
    def test_extract_rules_list_fields(self):
        """测试提取列表字段规则"""
    
    def test_extract_rules_required_vs_optional(self):
        """测试区分必需和可选字段"""
    
    # === 类型检测测试 ===
    def test_detect_type_string(self):
        """测试检测字符串类型"""
    
    def test_detect_type_integer(self):
        """测试检测整数类型"""
    
    def test_detect_type_list(self):
        """测试检测列表类型"""
    
    def test_detect_type_object(self):
        """测试检测对象类型"""
    
    # === 验证逻辑测试 ===
    def test_validate_file_success(self):
        """测试验证通过的情况"""
    
    def test_validate_file_missing_required_field(self):
        """测试缺少必需字段"""
    
    def test_validate_file_type_mismatch(self):
        """测试类型不匹配"""
    
    def test_validate_file_invalid_nested_structure(self):
        """测试无效的嵌套结构"""
    
    def test_validate_file_extra_fields(self):
        """测试额外字段（警告）"""
    
    # === 批量验证测试 ===
    def test_validate_batch_all_valid(self):
        """测试批量验证全部通过"""
    
    def test_validate_batch_partial_valid(self):
        """测试批量验证部分失败"""
    
    def test_validate_batch_empty_directory(self):
        """测试空目录"""
```

### 9.2 集成测试

**测试文件**: `tests/integration/test_schema_validation_flow.py`

```python
class TestSchemaValidationFlow:
    """端到端验证流程测试"""
    
    def test_full_validation_flow_with_schema(self):
        """
        完整流程测试:
        1. 加载真实的 lesson_data_schema.yml
        2. 验证真实的 lesson1.yml
        3. 检查结果准确性
        """
    
    def test_cli_integration(self):
        """
        CLI 集成测试:
        1. 执行 validate 命令
        2. 检查输出格式
        3. 检查退出码
        """
    
    def test_backward_compatibility(self):
        """
        向后兼容性测试:
        1. 确保 DataValidator 仍然可用
        2. 测试降级机制
        """
```

### 9.3 覆盖率目标

- **目标覆盖率**: > 85%
- **关键路径覆盖**: 100%
- **边界情况覆盖**: > 90%

---

## 10. 实施计划

### 10.1 实施阶段

**Phase 1: 核心类实现** (2-3 小时)
- [ ] 实现 `SchemaValidator` 类基础结构
- [ ] 实现 `load_schema()` 方法
- [ ] 实现 Schema 版本检测
- [ ] 实现数据类 (ValidationRules, ValidationResult)

**Phase 2: 规则提取** (1-2 小时)
- [ ] 实现 `extract_rules()` 方法
- [ ] 实现 `_parse_schema_node()` 递归算法
- [ ] 实现类型检测逻辑
- [ ] 实现必需/可选字段判断

**Phase 3: 验证逻辑** (1-2 小时)
- [ ] 实现 `validate_file()` 方法
- [ ] 实现 `_validate_required_fields()`
- [ ] 实现 `_validate_types()`
- [ ] 实现 `_validate_nested_structure()`
- [ ] 实现 `validate_batch()`

**Phase 4: CLI 集成** (0.5-1 小时)
- [ ] 更新 `validate` 命令支持 Schema 验证
- [ ] 实现验证器选择逻辑
- [ ] 格式化输出

**Phase 5: 测试** (2-3 小时)
- [ ] 编写单元测试（20+ 测试用例）
- [ ] 编写集成测试
- [ ] 达到 85%+ 覆盖率
- [ ] 性能测试

**Phase 6: 文档** (0.5-1 小时)
- [ ] 更新 README.md
- [ ] 更新 CHANGELOG.md
- [ ] 更新架构文档
- [ ] 编写使用示例

### 10.2 总预计时间

- **开发时间**: 7-11 小时
- **建议时间**: 4-5 小时（核心功能）+ 2-3 小时（测试）+ 1 小时（文档）
- **风险缓冲**: +20%

---

## 11. 风险评估

### 11.1 技术风险

| 风险 | 概率 | 影响 | 缓解措施 |
|------|------|------|---------|
| Schema 解析复杂度高于预期 | 中 | 中 | 简化规则提取算法，支持渐进式增强 |
| 类型推断不准确 | 中 | 低 | 提供手动类型标注机制 |
| 性能不满足要求 | 低 | 低 | 实施缓存策略 |
| 向后兼容性问题 | 低 | 中 | 保留 DataValidator，平滑迁移 |

### 11.2 实施风险

| 风险 | 概率 | 影响 | 缓解措施 |
|------|------|------|---------|
| 开发时间超预期 | 中 | 中 | 分阶段交付，优先核心功能 |
| 测试覆盖率不足 | 低 | 中 | 预留充足测试时间 |
| Schema 版本演进困难 | 低 | 低 | 设计灵活的版本机制 |

---

## 12. 决策记录

### Decision 1: 保留 DataValidator 而非替换

**决策**: 保留现有的 DataValidator，添加 SchemaValidator 作为增强

**理由**:
- 向后兼容性：不破坏现有功能
- 降级机制：Schema 不可用时使用 DataValidator
- 平滑迁移：用户可以逐步采用新验证器
- 风险控制：新实现出问题时有备用方案

**影响**: 增加少量代码维护成本，但提升系统稳定性

---

### Decision 2: 类型推断而非显式类型定义

**决策**: 从 Schema 示例值推断类型，而非要求显式类型定义

**理由**:
- Schema 文件更简洁（保持 YAML 原生风格）
- 与现有 lesson_data_schema.yml 兼容
- 降低用户学习成本
- 未来可扩展支持显式类型标注

**影响**: 类型推断可能不够精确，需要完善推断算法

---

### Decision 3: 缓存 Schema 而非每次加载

**决策**: Schema 加载后缓存在内存，批量验证时复用

**理由**:
- 性能优化：减少文件 I/O
- 一致性：同一批次使用相同 Schema
- 资源效率：减少重复解析

**影响**: 内存占用略微增加（可忽略），需要处理缓存失效

---

## 13. 附录

### 13.1 参考资料

- [PRD - Story 2.7](../prd.md#story-27)
- [Schema-Driven Architecture](6-schema-driven-architecture.md)
- [现有 DataValidator 实现](../../generate_docs.py)
- [lesson_data_schema.yml](../../schemas/lesson_data_schema.yml)

### 13.2 相关文档

- [SPRINT_PROGRESS.md](../SPRINT_PROGRESS.md)
- [CHANGELOG.md](../../CHANGELOG.md)
- [README.md](../../README.md)

---

## 评审检查清单

### 架构评审
- [ ] 类职责清晰，符合单一职责原则
- [ ] 接口设计合理，易于扩展
- [ ] 数据流清晰，无循环依赖
- [ ] 错误处理完善

### 实施评审
- [ ] 实施计划可行，时间估算合理
- [ ] 测试策略完整，覆盖率目标明确
- [ ] 风险评估充分，缓解措施到位
- [ ] 向后兼容性保证

### 文档评审
- [ ] 技术细节完整
- [ ] 代码示例正确
- [ ] 决策记录清晰
- [ ] 评审标准明确

---

**文档状态**: ✅ Ready for Team Review  
**下一步**: 团队技术评审会议

---

**变更历史**:
- 2025-10-04: v1.0 - 初始版本（Architect）

