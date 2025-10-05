# Developer 任务清单 - Story 2.7

**Story**: Schema 验证器集成  
**角色**: Developer  
**优先级**: 🔴 P0 - 最高优先级  
**预计时间**: 7-12 小时（2-3 工作日）  
**状态**: ⏳ Ready to Start  
**开始日期**: 2025-10-04

---

## 📋 任务概览

你的任务是实施 `SchemaValidator` 类，这是 Story 2.7 的核心组件。Architect 已经完成完整的技术设计，并提供了 500+ 行的实现示例代码供你参考。

### 🎯 目标
实现基于 Schema 的数据验证系统，取代硬编码的验证规则，使 `lesson_data_schema.yml` 成为唯一真实来源。

### 📚 必读文档
1. ⭐ [技术设计文档](architecture/schema-validator-design.md) - **30分钟必读**
2. ⭐ [实现示例代码](architecture/schema-validator-implementation-example.py) - **参考实现**
3. [文档索引](architecture/README_STORY_2.7.md) - 快速查找

---

## ✅ 任务清单

### Phase 0: 准备工作（30分钟）

#### Task 0.1: 阅读技术文档 ⏳
- [ ] 阅读技术设计文档（重点：第2-4章）
- [ ] 阅读实现示例代码
- [ ] 理解 SchemaValidator 的职责和接口
- [ ] 理解验证规则提取算法

#### Task 0.2: 环境准备 ⏳
- [ ] 创建开发分支：`feature/schema-validator`
  ```bash
  git checkout -b feature/schema-validator
  ```
- [ ] 确认开发环境就绪
  ```bash
  python --version  # 应为 Python 3.8+
  pip install -r requirements.txt
  pytest --version
  ```
- [ ] 运行现有测试，确保基准通过
  ```bash
  pytest tests/ -v
  ```

#### Task 0.3: 代码结构规划 ⏳
- [ ] 确认在 `generate_docs.py` 中实现（已有 SchemaValidator 雏形）
- [ ] 检查现有代码：第14-200行已有基础实现
- [ ] 理解现有代码与设计文档的关系

---

### Phase 1: 核心类实现（2-3小时）

#### Task 1.1: 数据类定义 ⏳
**文件**: `generate_docs.py`（或单独文件）

实现以下数据类：

```python
from dataclasses import dataclass, field
from typing import List, Dict, Set, Any
from datetime import datetime
from enum import Enum

# 1. FieldType 枚举
class FieldType(Enum):
    STRING = "string"
    INTEGER = "integer"
    LIST = "list"
    DICT = "dict"
    UNKNOWN = "unknown"

# 2. ValidationRules 数据类
@dataclass
class ValidationRules:
    required_fields: Set[str] = field(default_factory=set)
    optional_fields: Set[str] = field(default_factory=set)
    field_types: Dict[str, FieldType] = field(default_factory=dict)
    nested_structures: Dict[str, 'ValidationRules'] = field(default_factory=dict)
    list_fields: Set[str] = field(default_factory=set)

# 3. ValidationError 数据类
@dataclass
class ValidationError:
    field_path: str
    error_type: str
    message: str
    severity: str = "error"

# 4. ValidationResult 数据类
@dataclass
class ValidationResult:
    file_path: str
    is_valid: bool
    errors: List[ValidationError] = field(default_factory=list)
    warnings: List[ValidationError] = field(default_factory=list)
    timestamp: datetime = field(default_factory=datetime.now)
    schema_version: str = "1.0.0"
```

**检查点**:
- [ ] 所有数据类定义完成
- [ ] 类型注解正确
- [ ] dataclass 装饰器正确使用

---

#### Task 1.2: 异常类定义 ⏳

```python
class SchemaValidationError(Exception):
    """Schema 验证相关异常基类"""
    pass

class SchemaLoadError(SchemaValidationError):
    """Schema 加载失败"""
    pass

class SchemaVersionError(SchemaValidationError):
    """Schema 版本不兼容"""
    pass

class SchemaNotLoadedError(SchemaValidationError):
    """Schema 未加载就尝试验证"""
    pass

class DataParseError(SchemaValidationError):
    """数据解析失败"""
    pass
```

**检查点**:
- [ ] 异常层次结构正确
- [ ] 所有异常继承自 SchemaValidationError

---

#### Task 1.3: SchemaValidator 核心结构 ⏳

**注意**：`generate_docs.py` 第14行已有 SchemaValidator 类的雏形，你需要**完善和扩展**它。

```python
class SchemaValidator:
    """基于 Schema 的验证器 - 从 Schema 文件提取规则并验证数据"""
    
    def __init__(self, schema_path=None):
        """初始化 Schema 验证器"""
        self.schema_path = schema_path
        self.schema = None
        self.validation_rules = None
        self._schema_cache = {}  # 缓存
        
        if schema_path:
            self.load_schema(schema_path)
    
    # 核心公共方法（需要实现）
    def load_schema(self, schema_path: str) -> dict:
        """加载 Schema 定义"""
        pass  # 见 Task 1.4
    
    def validate(self, data: dict, file_path: str = "") -> ValidationResult:
        """验证数据是否符合 Schema"""
        pass  # 见 Task 3.1
    
    def extract_rules(self, schema: dict) -> ValidationRules:
        """从 Schema 提取验证规则"""
        pass  # 见 Task 2.1
```

**检查点**:
- [ ] 类结构完整
- [ ] 初始化方法正确
- [ ] 公共接口定义清晰

---

#### Task 1.4: 实现 load_schema 方法 ⏳

参考设计文档第3章和实现示例。

```python
def load_schema(self, schema_path: str) -> dict:
    """加载 Schema 定义
    
    Args:
        schema_path: Schema YAML 文件路径
        
    Returns:
        dict: 解析后的 Schema 数据
        
    Raises:
        SchemaLoadError: Schema 加载失败
    """
    schema_path = Path(schema_path)
    
    # 检查缓存
    if str(schema_path) in self._schema_cache:
        return self._schema_cache[str(schema_path)]
    
    # 检查文件存在
    if not schema_path.exists():
        raise SchemaLoadError(f"Schema 文件不存在: {schema_path}")
    
    # 加载 YAML
    try:
        with open(schema_path, 'r', encoding='utf-8') as f:
            self.schema = yaml.safe_load(f)
    except yaml.YAMLError as e:
        raise SchemaLoadError(f"Schema 文件格式错误: {str(e)}")
    
    # 验证 Schema 基本结构
    if self.schema is None:
        raise SchemaLoadError("Schema 文件为空")
    
    if not isinstance(self.schema, dict):
        raise SchemaLoadError("Schema 根节点必须是字典类型")
    
    # 缓存
    self._schema_cache[str(schema_path)] = self.schema
    self.schema_path = schema_path
    
    # 提取规则
    self.validation_rules = self.extract_rules(self.schema)
    
    return self.schema
```

**检查点**:
- [ ] 文件存在性检查
- [ ] YAML 解析错误处理
- [ ] Schema 基本验证
- [ ] 缓存机制实现
- [ ] 自动调用 extract_rules

---

### Phase 2: 规则提取算法（2-3小时）

#### Task 2.1: 实现 extract_rules 方法 ⏳

这是**核心算法**，参考设计文档第4章。

```python
def extract_rules(self, schema: dict) -> ValidationRules:
    """从 Schema 提取验证规则
    
    Args:
        schema: Schema 字典
        
    Returns:
        ValidationRules: 验证规则对象
    """
    rules = ValidationRules()
    
    # 递归提取所有字段和类型信息
    self._extract_fields_recursive(schema, "", rules)
    
    return rules
```

**检查点**:
- [ ] 创建 ValidationRules 对象
- [ ] 调用递归解析方法
- [ ] 返回完整规则

---

#### Task 2.2: 实现递归解析算法 ⏳

**这是最复杂的部分**，参考实现示例代码。

```python
def _extract_fields_recursive(self, data: Any, prefix: str, rules: ValidationRules):
    """递归提取字段信息
    
    Args:
        data: 当前层级的数据
        prefix: 字段路径前缀（如 "class_hours" 或 "design_details"）
        rules: 规则字典（会被修改）
    """
    if not isinstance(data, dict):
        return
    
    for key, value in data.items():
        # 构建字段路径
        field_path = f"{prefix}.{key}" if prefix else key
        
        # 检测字段类型
        field_type = self._detect_type(value)
        rules.field_types[field_path] = field_type
        
        # 判断必需/可选
        if self._is_required(key, value):
            rules.required_fields.add(field_path)
        else:
            rules.optional_fields.add(field_path)
        
        # 处理嵌套结构
        if field_type == FieldType.DICT:
            # 递归处理字典
            nested_rules = ValidationRules()
            self._extract_fields_recursive(value, "", nested_rules)
            rules.nested_structures[field_path] = nested_rules
            
            # 也递归处理当前层级的子字段
            self._extract_fields_recursive(value, field_path, rules)
        
        elif field_type == FieldType.LIST:
            rules.list_fields.add(field_path)
            
            # 如果列表包含字典，递归处理第一个元素
            if value and isinstance(value, list) and len(value) > 0:
                first_item = value[0]
                if isinstance(first_item, dict):
                    nested_rules = ValidationRules()
                    self._extract_fields_recursive(first_item, "", nested_rules)
                    rules.nested_structures[field_path] = nested_rules
```

**检查点**:
- [ ] 正确构建字段路径
- [ ] 类型检测正确
- [ ] 必需/可选判断正确
- [ ] 嵌套结构正确处理
- [ ] 列表字段正确处理

---

#### Task 2.3: 实现类型检测方法 ⏳

```python
def _detect_type(self, value: Any) -> FieldType:
    """检测字段类型（从示例值推断）
    
    Args:
        value: 字段的示例值
        
    Returns:
        FieldType: 推断的类型
    """
    if isinstance(value, str):
        return FieldType.STRING
    elif isinstance(value, int):
        return FieldType.INTEGER
    elif isinstance(value, list):
        return FieldType.LIST
    elif isinstance(value, dict):
        return FieldType.DICT
    else:
        return FieldType.UNKNOWN
```

**检查点**:
- [ ] 所有基本类型覆盖
- [ ] 未知类型处理

---

#### Task 2.4: 实现必需字段判断方法 ⏳

参考设计文档第4.3节的多策略判断。

```python
def _is_required(self, key: str, value: Any) -> bool:
    """判断字段是否必需
    
    多策略判断：
    1. 如果值为空字符串/空列表/None → 可选
    2. 如果键名包含 "optional" → 可选
    3. 其他 → 必需（保守策略）
    
    Args:
        key: 字段名
        value: 字段值
        
    Returns:
        bool: True = 必需, False = 可选
    """
    # 策略 1: 空值判断
    if value == "" or value == [] or value is None:
        return False
    
    # 策略 2: 键名判断
    if "optional" in key.lower():
        return False
    
    # 策略 3: 默认必需（保守）
    return True
```

**检查点**:
- [ ] 空值策略实现
- [ ] 键名策略实现
- [ ] 默认策略正确

---

### Phase 3: 验证逻辑（2-3小时）

#### Task 3.1: 实现 validate 方法 ⏳

这是对外的主要接口。

```python
def validate(self, data: dict, file_path: str = "") -> ValidationResult:
    """验证数据是否符合 Schema
    
    Args:
        data: 待验证的数据
        file_path: 文件路径（用于错误报告）
        
    Returns:
        ValidationResult: 验证结果
        
    Raises:
        SchemaNotLoadedError: Schema 未加载
        DataParseError: 数据格式错误
    """
    # 检查 Schema 是否已加载
    if self.schema is None or self.validation_rules is None:
        raise SchemaNotLoadedError("Schema 未加载，请先调用 load_schema()")
    
    # 初始化结果
    result = ValidationResult(
        file_path=file_path,
        is_valid=True,
        errors=[],
        warnings=[],
        timestamp=datetime.now(),
        schema_version=self._get_schema_version()
    )
    
    # 执行验证
    self._validate_required_fields(data, self.validation_rules, result)
    self._validate_field_types(data, self.validation_rules, result)
    self._validate_nested_structures(data, self.validation_rules, result)
    
    # 更新 is_valid
    result.is_valid = len(result.errors) == 0
    
    return result
```

**检查点**:
- [ ] Schema 加载检查
- [ ] ValidationResult 初始化
- [ ] 调用各验证子方法
- [ ] is_valid 正确设置

---

#### Task 3.2: 实现必需字段验证 ⏳

```python
def _validate_required_fields(self, data: dict, rules: ValidationRules, result: ValidationResult):
    """验证必需字段是否存在
    
    Args:
        data: 待验证数据
        rules: 验证规则
        result: 验证结果（会被修改）
    """
    for field_path in rules.required_fields:
        # 解析字段路径（如 "class_hours.theory"）
        value = self._get_nested_value(data, field_path)
        
        if value is None:
            result.errors.append(ValidationError(
                field_path=field_path,
                error_type="missing_field",
                message=f"必需字段缺失: {field_path}",
                severity="error"
            ))
```

**检查点**:
- [ ] 遍历所有必需字段
- [ ] 正确解析嵌套路径
- [ ] 缺失字段添加错误

---

#### Task 3.3: 实现类型验证 ⏳

```python
def _validate_field_types(self, data: dict, rules: ValidationRules, result: ValidationResult):
    """验证字段类型是否匹配
    
    Args:
        data: 待验证数据
        rules: 验证规则
        result: 验证结果（会被修改）
    """
    for field_path, expected_type in rules.field_types.items():
        value = self._get_nested_value(data, field_path)
        
        if value is None:
            continue  # 缺失字段由 _validate_required_fields 处理
        
        actual_type = self._detect_type(value)
        
        if actual_type != expected_type:
            # 类型不匹配 → 警告（不是错误）
            result.warnings.append(ValidationError(
                field_path=field_path,
                error_type="type_mismatch",
                message=f"类型不匹配: 期望 {expected_type.value}, 实际 {actual_type.value}",
                severity="warning"
            ))
```

**检查点**:
- [ ] 类型匹配检查
- [ ] 类型不匹配添加警告（不是错误）
- [ ] None 值跳过

---

#### Task 3.4: 实现嵌套结构验证 ⏳

```python
def _validate_nested_structures(self, data: dict, rules: ValidationRules, result: ValidationResult):
    """验证嵌套结构
    
    Args:
        data: 待验证数据
        rules: 验证规则
        result: 验证结果（会被修改）
    """
    for field_path, nested_rules in rules.nested_structures.items():
        value = self._get_nested_value(data, field_path)
        
        if value is None:
            continue  # 缺失字段由其他方法处理
        
        if isinstance(value, dict):
            # 递归验证嵌套字典
            self._validate_required_fields(value, nested_rules, result)
            self._validate_field_types(value, nested_rules, result)
        
        elif isinstance(value, list):
            # 验证列表中的每个元素
            for i, item in enumerate(value):
                if isinstance(item, dict):
                    self._validate_required_fields(item, nested_rules, result)
                    self._validate_field_types(item, nested_rules, result)
```

**检查点**:
- [ ] 嵌套字典递归验证
- [ ] 列表元素逐个验证
- [ ] 错误路径正确

---

#### Task 3.5: 实现辅助方法 ⏳

```python
def _get_nested_value(self, data: dict, field_path: str) -> Any:
    """获取嵌套字段值
    
    Args:
        data: 数据字典
        field_path: 字段路径（如 "class_hours.theory"）
        
    Returns:
        Any: 字段值，如果不存在返回 None
    """
    keys = field_path.split('.')
    value = data
    
    for key in keys:
        if isinstance(value, dict) and key in value:
            value = value[key]
        else:
            return None
    
    return value

def _get_schema_version(self) -> str:
    """获取 Schema 版本号
    
    Returns:
        str: 版本号，默认 "1.0.0"
    """
    if self.schema and isinstance(self.schema, dict):
        return self.schema.get('version', '1.0.0')
    return "1.0.0"
```

**检查点**:
- [ ] 嵌套路径解析正确
- [ ] 版本号获取正确

---

### Phase 4: CLI 集成（0.5-1小时）

#### Task 4.1: 修改 validate 命令 ⏳

修改 `generate_docs.py` 中的 CLI 命令（约第1200+行附近）。

**现状分析**：
你需要找到现有的 `validate` 命令实现，并集成 SchemaValidator。

**实施步骤**：
1. 找到 `validate` 命令的 argparse 定义
2. 在验证逻辑中，优先使用 SchemaValidator
3. 如果 Schema 不可用，降级到 DataValidator（保持向后兼容）

**伪代码**：
```python
def validate_command(args):
    """处理 validate 命令"""
    schema_path = Path("schemas/lesson_data_schema.yml")
    
    # 优先使用 SchemaValidator
    if schema_path.exists():
        try:
            validator = SchemaValidator(str(schema_path))
            
            # 单文件验证
            if args.file:
                with open(args.file, 'r', encoding='utf-8') as f:
                    data = yaml.safe_load(f)
                
                result = validator.validate(data, str(args.file))
                print_validation_result(result)
            
            # 批量验证
            elif args.batch:
                for yaml_file in args.batch_dir.glob("*.yml"):
                    with open(yaml_file, 'r', encoding='utf-8') as f:
                        data = yaml.safe_load(f)
                    
                    result = validator.validate(data, str(yaml_file))
                    print_validation_result(result)
        
        except SchemaValidationError as e:
            print(f"⚠️  Schema 验证失败，降级到传统验证: {e}")
            # 降级到 DataValidator
            # ...（现有逻辑）
    else:
        # Schema 不存在，使用传统验证
        print("ℹ️  Schema 文件不存在，使用传统验证")
        # ...（现有逻辑）
```

**检查点**:
- [ ] CLI 参数正确解析
- [ ] SchemaValidator 集成
- [ ] 降级机制实现
- [ ] 错误处理完善

---

#### Task 4.2: 实现结果输出方法 ⏳

```python
def print_validation_result(result: ValidationResult):
    """打印验证结果（美化输出）
    
    Args:
        result: ValidationResult 对象
    """
    if result.is_valid:
        print(f"✅ {result.file_path} - 验证通过")
    else:
        print(f"❌ {result.file_path} - 验证失败")
        
        # 打印错误
        if result.errors:
            print("\n错误:")
            for error in result.errors:
                print(f"  🔴 [{error.field_path}] {error.message}")
        
        # 打印警告
        if result.warnings:
            print("\n警告:")
            for warning in result.warnings:
                print(f"  🟡 [{warning.field_path}] {warning.message}")
    
    print()  # 空行
```

**检查点**:
- [ ] 成功/失败状态清晰
- [ ] 错误信息详细
- [ ] 格式美观

---

### Phase 5: 测试（2-3小时）

#### Task 5.1: 单元测试 - 基础功能 ⏳

**文件**: `tests/test_schema_validator.py`（新建）

```python
import pytest
from pathlib import Path
from generate_docs import (
    SchemaValidator, ValidationResult, ValidationError,
    SchemaLoadError, SchemaNotLoadedError
)

def test_schema_loading():
    """测试 Schema 加载"""
    validator = SchemaValidator()
    schema_path = "schemas/lesson_data_schema.yml"
    
    schema = validator.load_schema(schema_path)
    
    assert schema is not None
    assert validator.schema_path == Path(schema_path)
    assert validator.validation_rules is not None

def test_schema_not_found():
    """测试 Schema 文件不存在"""
    validator = SchemaValidator()
    
    with pytest.raises(SchemaLoadError):
        validator.load_schema("nonexistent.yml")

def test_validate_without_schema():
    """测试未加载 Schema 就验证"""
    validator = SchemaValidator()
    
    with pytest.raises(SchemaNotLoadedError):
        validator.validate({})
```

**检查点**:
- [ ] Schema 加载测试
- [ ] 文件不存在测试
- [ ] 未加载 Schema 测试

---

#### Task 5.2: 单元测试 - 验证逻辑 ⏳

```python
def test_validate_valid_data(tmp_path):
    """测试验证正确数据"""
    # 准备 Schema
    schema_content = """
class_hours:
  theory: 1
  practice: 1
teaching_objectives:
  - "目标1"
"""
    schema_file = tmp_path / "test_schema.yml"
    schema_file.write_text(schema_content, encoding='utf-8')
    
    # 准备数据
    data = {
        "class_hours": {"theory": 2, "practice": 2},
        "teaching_objectives": ["学习Python", "掌握数据结构"]
    }
    
    # 验证
    validator = SchemaValidator(str(schema_file))
    result = validator.validate(data, "test.yml")
    
    assert result.is_valid == True
    assert len(result.errors) == 0

def test_validate_missing_required_field(tmp_path):
    """测试缺失必需字段"""
    schema_content = """
class_hours:
  theory: 1
  practice: 1
"""
    schema_file = tmp_path / "test_schema.yml"
    schema_file.write_text(schema_content, encoding='utf-8')
    
    # 数据缺失 class_hours
    data = {}
    
    validator = SchemaValidator(str(schema_file))
    result = validator.validate(data, "test.yml")
    
    assert result.is_valid == False
    assert len(result.errors) > 0
    assert any("class_hours" in err.field_path for err in result.errors)

def test_validate_type_mismatch(tmp_path):
    """测试类型不匹配"""
    schema_content = """
class_hours:
  theory: 1
"""
    schema_file = tmp_path / "test_schema.yml"
    schema_file.write_text(schema_content, encoding='utf-8')
    
    # theory 应为整数，但提供字符串
    data = {
        "class_hours": {"theory": "not a number"}
    }
    
    validator = SchemaValidator(str(schema_file))
    result = validator.validate(data, "test.yml")
    
    # 类型不匹配应为警告，不是错误
    assert len(result.warnings) > 0
```

**检查点**:
- [ ] 正确数据验证通过
- [ ] 缺失字段检测正确
- [ ] 类型不匹配检测正确

---

#### Task 5.3: 集成测试 ⏳

**文件**: `tests/integration/test_schema_validator_integration.py`（新建）

```python
def test_validate_lesson1_yml():
    """测试验证真实的 lesson1.yml"""
    validator = SchemaValidator("schemas/lesson_data_schema.yml")
    
    with open("test_data/lesson1.yml", 'r', encoding='utf-8') as f:
        data = yaml.safe_load(f)
    
    result = validator.validate(data, "test_data/lesson1.yml")
    
    # 真实数据应该通过验证
    assert result.is_valid == True

def test_cli_validate_command():
    """测试 CLI validate 命令"""
    import subprocess
    
    result = subprocess.run(
        ["python", "generate_docs.py", "validate", "--file", "test_data/lesson1.yml"],
        capture_output=True,
        text=True
    )
    
    assert result.returncode == 0
    assert "✅" in result.stdout or "验证通过" in result.stdout
```

**检查点**:
- [ ] 真实数据验证
- [ ] CLI 命令测试

---

#### Task 5.4: 性能测试 ⏳

```python
import time

def test_performance_schema_loading():
    """测试 Schema 加载性能"""
    validator = SchemaValidator()
    
    start = time.time()
    validator.load_schema("schemas/lesson_data_schema.yml")
    duration = time.time() - start
    
    # 应 < 100ms
    assert duration < 0.1

def test_performance_single_validation():
    """测试单文件验证性能"""
    validator = SchemaValidator("schemas/lesson_data_schema.yml")
    
    with open("test_data/lesson1.yml", 'r', encoding='utf-8') as f:
        data = yaml.safe_load(f)
    
    start = time.time()
    result = validator.validate(data, "test_data/lesson1.yml")
    duration = time.time() - start
    
    # 应 < 200ms
    assert duration < 0.2

def test_performance_batch_validation():
    """测试批量验证性能"""
    validator = SchemaValidator("schemas/lesson_data_schema.yml")
    
    # 假设有 10 个测试文件
    files = list(Path("test_data").glob("*.yml"))[:10]
    
    start = time.time()
    for file in files:
        with open(file, 'r', encoding='utf-8') as f:
            data = yaml.safe_load(f)
        validator.validate(data, str(file))
    duration = time.time() - start
    
    # 10 文件应 < 2s
    assert duration < 2.0
```

**检查点**:
- [ ] Schema 加载 < 100ms
- [ ] 单文件验证 < 200ms
- [ ] 批量验证性能达标

---

#### Task 5.5: 运行测试并修复 ⏳

```bash
# 运行所有测试
pytest tests/ -v

# 运行单个测试文件
pytest tests/test_schema_validator.py -v

# 运行覆盖率测试
pytest tests/ --cov=generate_docs --cov-report=html
```

**目标**:
- [ ] 所有测试通过（100%）
- [ ] 测试覆盖率 > 85%
- [ ] 性能测试通过

---

### Phase 6: 代码评审和文档（0.5-1小时）

#### Task 6.1: 代码自评审 ⏳
- [ ] 代码符合 PEP 8 规范
- [ ] 类型注解完整
- [ ] 文档字符串完整（docstring）
- [ ] 无明显代码异味
- [ ] 错误处理完善

#### Task 6.2: 更新文档 ⏳
- [ ] 更新 `README.md`（新增 Schema 验证说明）
- [ ] 更新 `CHANGELOG.md`（记录 v1.4.0 新功能）
- [ ] 添加使用示例到文档

#### Task 6.3: 提交 Pull Request ⏳
```bash
# 确保所有测试通过
pytest tests/ -v

# 提交代码
git add .
git commit -m "feat: implement SchemaValidator for Story 2.7

- Add SchemaValidator core class
- Implement rule extraction algorithm
- Integrate with CLI validate command
- Add comprehensive tests (coverage > 85%)
- Update documentation

Closes #Story-2.7"

# 推送到远程
git push origin feature/schema-validator

# 创建 Pull Request（在 GitHub/GitLab）
```

**PR 描述模板**:
```markdown
## Story 2.7: Schema 验证器集成

### 实现内容
✅ SchemaValidator 核心类
✅ 验证规则提取算法（递归解析）
✅ 数据验证逻辑（必需字段 + 类型检查）
✅ CLI 集成（validate 命令）
✅ 完善测试（20+ 用例，覆盖率 > 85%）

### 技术亮点
- 智能类型推断：从示例值自动推断类型
- 性能优化：Schema 缓存机制
- 向后兼容：保留 DataValidator 降级方案
- 完整错误报告：详细的错误和警告信息

### 测试结果
```
pytest tests/ -v
======================== 25 passed in 2.34s ========================
Coverage: 87%
```

### 参考文档
- [技术设计文档](docs/architecture/schema-validator-design.md)
- [实现示例代码](docs/architecture/schema-validator-implementation-example.py)

### Checklist
- [x] 代码实现完整
- [x] 测试覆盖率 > 85%
- [x] 所有测试通过
- [x] 文档更新
- [x] 代码评审就绪

@architect 请评审
```

---

## 📊 进度跟踪

### 每日站会更新模板
```markdown
### Developer - [日期]

**昨天完成**:
- [ ] Task X.X

**今天计划**:
- [ ] Task Y.Y

**遇到的问题**:
- 无 / [描述问题]

**需要的支持**:
- 无 / [描述需求]
```

---

## 🚨 常见问题和解决方案

### Q1: 如何理解递归解析算法？
**A**: 参考实现示例代码第 XXX 行。关键是：
1. 遍历 Schema 的每个字段
2. 检测字段类型
3. 如果是字典，递归处理
4. 如果是列表，处理第一个元素

### Q2: 类型推断不准确怎么办？
**A**: 当前使用保守策略，从示例值推断。如果不准确：
1. 检查 `_detect_type` 方法逻辑
2. 添加更多类型判断策略
3. 未来可以支持显式类型标注

### Q3: 测试覆盖率如何达到 85%？
**A**: 重点测试：
1. Schema 加载和解析
2. 规则提取算法
3. 验证逻辑（必需字段 + 类型检查）
4. 错误处理（异常情况）
5. 边界情况

### Q4: 如何处理向后兼容？
**A**: 在 CLI 集成时：
1. 优先使用 SchemaValidator
2. 如果 Schema 不存在 → 降级到 DataValidator
3. 如果 SchemaValidator 失败 → 降级并记录警告

---

## 📞 技术支持

### 遇到问题时
1. **查阅文档**: [技术设计文档](architecture/schema-validator-design.md)
2. **参考代码**: [实现示例](architecture/schema-validator-implementation-example.py)
3. **联系 Architect**: 响应时间 < 4 小时

### Architect 联系方式
- **Slack**: @architect
- **Email**: architect@team.com
- **工作时间**: 工作日 9:00-18:00

---

## ✅ Definition of Done（完成定义）

**Task 5.7 完成标准**:
- ✅ 所有 Phase 0-6 任务完成
- ✅ SchemaValidator 核心功能完整实现
- ✅ 所有测试通过（100%）
- ✅ 测试覆盖率 > 85%
- ✅ CLI 集成完成
- ✅ 性能指标达标
- ✅ 代码评审通过
- ✅ 文档更新完成
- ✅ Pull Request 创建

**Story 2.7 完成标准**:
- ✅ Developer 完成开发
- ✅ QA 完成测试验证
- ✅ Architect 代码评审通过
- ✅ PO 验收通过
- ✅ 合并到 main 分支
- ✅ 更新 Sprint Progress

---

## 🎯 预期成果

### 代码质量
- 700-1000 行高质量代码
- 测试覆盖率 > 85%
- 无明显技术债务

### 功能完整性
- Schema 加载和解析 ✅
- 规则提取 ✅
- 数据验证 ✅
- CLI 集成 ✅
- 错误处理 ✅

### 性能指标
- Schema 加载 < 100ms ⚡
- 单文件验证 < 200ms ⚡
- 批量验证高效 ⚡

---

## 📅 时间表

| Phase | 时间估算 | 建议完成日期 |
|-------|---------|------------|
| Phase 0 | 0.5h | 2025-10-04 下午 |
| Phase 1 | 2-3h | 2025-10-04 结束前 |
| Phase 2 | 2-3h | 2025-10-05 上午 |
| Phase 3 | 2-3h | 2025-10-05 下午 |
| Phase 4 | 0.5-1h | 2025-10-06 上午 |
| Phase 5 | 2-3h | 2025-10-06 下午 |
| Phase 6 | 0.5-1h | 2025-10-07 上午 |

**总计**: 7-12 小时（2-3 工作日）  
**目标完成**: 2025-10-07

---

**Developer 签名**: ⏳ _Pending_  
**开始时间**: ⏳ _Pending_  
**状态**: ✅ **Ready to Start**

---

*Good luck! You have a complete design and implementation example to guide you. If you encounter any issues, don't hesitate to reach out to the Architect.* 💪🚀

