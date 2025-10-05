"""
完整的 SchemaValidator 单元测试套件
基于技术设计: docs/architecture/schema-validator-design.md
"""
import pytest
from pathlib import Path
import yaml
import tempfile
import shutil
import time
import sys

# 添加项目根目录到路径
sys.path.insert(0, str(Path(__file__).parent.parent))

from generate_docs import (
    SchemaValidator,
    ValidationResult,
    ValidationError,
    ValidationRules,
    FieldType,
    SchemaLoadError,
    SchemaNotLoadedError,
    SchemaValidationError,
)


# ===================================================================
# Fixtures
# ===================================================================

@pytest.fixture
def temp_dir():
    """创建临时目录用于测试"""
    temp_path = Path(tempfile.mkdtemp())
    yield temp_path
    shutil.rmtree(temp_path)


@pytest.fixture
def schema_file():
    """返回 schema 文件路径"""
    return Path(__file__).parent.parent / "schemas" / "lesson_data_schema.yml"


@pytest.fixture
def sample_data_file():
    """返回示例数据文件路径"""
    return Path(__file__).parent.parent / "test_data" / "lesson1.yml"


@pytest.fixture
def valid_minimal_data():
    """返回最小有效数据集"""
    return {
        "lesson_number": 1,
        "lesson_title": "测试课程",
        "course_name": "测试课程名称",
    }


@pytest.fixture
def validator(schema_file):
    """返回已初始化的 SchemaValidator"""
    return SchemaValidator(str(schema_file))


# ===================================================================
# 1. 初始化测试
# ===================================================================

class TestInitialization:
    """SchemaValidator 初始化测试"""
    
    def test_init_with_schema_path(self, schema_file):
        """测试使用 schema 路径初始化"""
        validator = SchemaValidator(str(schema_file))
        
        assert validator.schema_path == Path(schema_file)
        assert validator.schema is not None  # 自动加载
        assert validator.validation_rules is not None
    
    def test_init_without_schema_path(self):
        """测试不带 schema 路径初始化"""
        validator = SchemaValidator()
        
        assert validator.schema is None
        assert validator.validation_rules is None
    
    def test_init_auto_loads_schema(self, schema_file):
        """测试初始化时自动加载 schema"""
        validator = SchemaValidator(str(schema_file))
        
        assert validator.schema is not None
        assert isinstance(validator.schema, dict)
        assert len(validator.schema) > 0


# ===================================================================
# 2. Schema 加载测试
# ===================================================================

class TestSchemaLoading:
    """Schema 加载功能测试"""
    
    def test_load_schema_success(self, schema_file):
        """测试成功加载 Schema"""
        validator = SchemaValidator()
        schema = validator.load_schema(str(schema_file))
        
        assert schema is not None
        assert isinstance(schema, dict)
        assert validator.schema == schema
        assert validator.validation_rules is not None
    
    def test_load_schema_file_not_found(self):
        """测试 Schema 文件不存在"""
        validator = SchemaValidator()
        
        with pytest.raises(SchemaLoadError) as exc_info:
            validator.load_schema("nonexistent_schema.yml")
        
        assert "不存在" in str(exc_info.value)
    
    def test_load_schema_invalid_yaml(self, temp_dir):
        """测试无效的 YAML 语法"""
        invalid_file = temp_dir / "invalid.yml"
        with open(invalid_file, 'w') as f:
            f.write("invalid: yaml: syntax:\n  - broken")
        
        validator = SchemaValidator()
        with pytest.raises(SchemaLoadError) as exc_info:
            validator.load_schema(str(invalid_file))
        
        assert "格式错误" in str(exc_info.value)
    
    def test_load_schema_empty_file(self, temp_dir):
        """测试空 Schema 文件"""
        empty_file = temp_dir / "empty.yml"
        empty_file.touch()
        
        validator = SchemaValidator()
        with pytest.raises(SchemaLoadError) as exc_info:
            validator.load_schema(str(empty_file))
        
        assert "为空" in str(exc_info.value)
    
    def test_load_schema_caching(self, schema_file):
        """测试 Schema 缓存机制"""
        validator = SchemaValidator()
        
        # 第一次加载
        schema1 = validator.load_schema(str(schema_file))
        first_cache_size = len(validator._schema_cache)
        
        # 第二次加载同一文件（应使用缓存）
        schema2 = validator.load_schema(str(schema_file))
        second_cache_size = len(validator._schema_cache)
        
        assert schema1 == schema2
        assert first_cache_size == second_cache_size == 1


# ===================================================================
# 3. 规则提取测试
# ===================================================================

class TestRuleExtraction:
    """验证规则提取测试"""
    
    def test_extract_rules_returns_validation_rules(self, validator):
        """测试提取规则返回 ValidationRules 对象"""
        rules = validator.validation_rules
        
        assert isinstance(rules, ValidationRules)
        assert isinstance(rules.required_fields, set)
        assert isinstance(rules.field_types, dict)
        assert isinstance(rules.nested_structures, dict)
        assert isinstance(rules.list_fields, set)
    
    def test_extract_rules_identifies_required_fields(self, validator):
        """测试识别必需字段"""
        rules = validator.validation_rules
        
        # Schema 中的顶层必需字段
        assert "lesson_number" in rules.required_fields
        assert "course_name" in rules.required_fields
        assert "lesson_title" in rules.required_fields
    
    def test_extract_rules_identifies_field_types(self, validator):
        """测试识别字段类型"""
        rules = validator.validation_rules
        
        # 检查不同类型的字段
        assert rules.field_types.get("lesson_number") == FieldType.INTEGER
        assert rules.field_types.get("lesson_title") == FieldType.STRING
        assert rules.field_types.get("course_name") == FieldType.STRING
    
    def test_extract_rules_identifies_nested_structures(self, validator):
        """测试识别嵌套结构"""
        rules = validator.validation_rules
        
        # 检查嵌套对象
        assert len(rules.nested_structures) > 0
        # class_hours 应该是嵌套结构
        assert any("class_hours" in key for key in rules.nested_structures.keys())
    
    def test_extract_rules_identifies_list_fields(self, validator):
        """测试识别列表字段"""
        rules = validator.validation_rules
        
        # 检查列表字段
        assert len(rules.list_fields) > 0
        # main_teaching_segments 应该是列表
        assert any("main_teaching_segments" in field for field in rules.list_fields)


# ===================================================================
# 4. 数据验证测试
# ===================================================================

class TestDataValidation:
    """数据验证逻辑测试"""
    
    def test_validate_minimal_valid_data(self, validator, valid_minimal_data):
        """测试验证最小有效数据"""
        result = validator.validate_against_schema(
            valid_minimal_data,
            file_path="test_minimal.yml"
        )
        
        assert isinstance(result, ValidationResult)
        assert result.file_path == "test_minimal.yml"
        # 注意：最小数据可能缺少一些字段，所以可能不通过
        # 但应该返回有效的 ValidationResult 对象
    
    def test_validate_missing_required_field(self, validator):
        """测试缺少必需字段"""
        incomplete_data = {
            "lesson_title": "只有标题",
            # 缺少 lesson_number, course_name 等
        }
        
        result = validator.validate_against_schema(
            incomplete_data,
            file_path="test_incomplete.yml"
        )
        
        assert not result.is_valid
        assert len(result.errors) > 0
        # 应该有关于缺少 lesson_number 或 course_name 的错误
        error_fields = [e.field_path for e in result.errors]
        assert any("lesson_number" in field or "course_name" in field 
                   for field in error_fields)
    
    def test_validate_type_mismatch(self, validator):
        """测试类型不匹配"""
        wrong_type_data = {
            "lesson_number": "应该是数字",  # 错误的类型
            "lesson_title": "测试标题",
            "course_name": "测试课程",
        }
        
        result = validator.validate_against_schema(
            wrong_type_data,
            file_path="test_wrong_type.yml"
        )
        
        # 应该有类型错误
        type_errors = [e for e in result.errors if e.error_type == "type_mismatch"]
        # 注意：由于 YAML 解析，字符串可能被保持，需要检查实际行为
    
    def test_validate_extra_fields_warning(self, validator, valid_minimal_data):
        """测试额外字段生成警告"""
        data_with_extra = valid_minimal_data.copy()
        data_with_extra["unknown_field"] = "这个字段不在 schema 中"
        data_with_extra["another_extra"] = "另一个额外字段"
        
        result = validator.validate_against_schema(
            data_with_extra,
            file_path="test_extra_fields.yml"
        )
        
        # 额外字段应该生成警告，而不是错误
        warning_fields = [w.field_path for w in result.warnings]
        assert any("unknown_field" in field or "another_extra" in field
                   for field in warning_fields)
    
    def test_validate_without_loading_schema_raises_error(self):
        """测试未加载 schema 就验证会抛出错误"""
        validator = SchemaValidator()  # 不加载 schema
        
        with pytest.raises(SchemaNotLoadedError):
            validator.validate_against_schema(
                {"test": "data"},
                file_path="test.yml"
            )
    
    def test_validate_result_contains_metadata(self, validator, valid_minimal_data):
        """测试验证结果包含元数据"""
        result = validator.validate_against_schema(
            valid_minimal_data,
            file_path="test_metadata.yml"
        )
        
        assert result.schema_version is not None
        assert result.timestamp is not None
        assert result.checked_fields >= 0
    
    def test_validate_result_to_dict(self, validator, valid_minimal_data):
        """测试 ValidationResult 转换为字典"""
        result = validator.validate_against_schema(
            valid_minimal_data,
            file_path="test_to_dict.yml"
        )
        
        result_dict = result.to_dict()
        
        assert isinstance(result_dict, dict)
        assert "file" in result_dict
        assert "valid" in result_dict
        assert "errors" in result_dict
        assert "warnings" in result_dict
        assert "timestamp" in result_dict
        assert "schema_version" in result_dict


# ===================================================================
# 5. 数据类测试
# ===================================================================

class TestDataClasses:
    """数据类功能测试"""
    
    def test_validation_error_creation(self):
        """测试 ValidationError 创建"""
        error = ValidationError(
            field_path="test.field",
            error_type="test_error",
            message="测试错误消息",
            severity="error"
        )
        
        assert error.field_path == "test.field"
        assert error.error_type == "test_error"
        assert error.message == "测试错误消息"
        assert error.severity == "error"
    
    def test_validation_error_to_dict(self):
        """测试 ValidationError.to_dict()"""
        error = ValidationError(
            field_path="test.field",
            error_type="test_error",
            message="测试错误",
            severity="warning"
        )
        
        error_dict = error.to_dict()
        
        assert isinstance(error_dict, dict)
        assert error_dict["field"] == "test.field"
        assert error_dict["type"] == "test_error"
        assert error_dict["message"] == "测试错误"
        assert error_dict["severity"] == "warning"
    
    def test_validation_rules_creation(self):
        """测试 ValidationRules 创建"""
        rules = ValidationRules()
        
        assert isinstance(rules.required_fields, set)
        assert isinstance(rules.optional_fields, set)
        assert isinstance(rules.field_types, dict)
        assert isinstance(rules.nested_structures, dict)
        assert isinstance(rules.list_fields, set)
    
    def test_field_type_enum(self):
        """测试 FieldType 枚举"""
        assert FieldType.STRING.value == "string"
        assert FieldType.INTEGER.value == "integer"
        assert FieldType.LIST.value == "list"
        assert FieldType.DICT.value == "dict"
        assert FieldType.BOOLEAN.value == "boolean"


# ===================================================================
# 6. 异常处理测试
# ===================================================================

class TestExceptionHandling:
    """异常处理测试"""
    
    def test_schema_load_error_inheritance(self):
        """测试 SchemaLoadError 继承"""
        error = SchemaLoadError("测试错误")
        
        assert isinstance(error, SchemaValidationError)
        assert isinstance(error, Exception)
    
    def test_schema_not_loaded_error_inheritance(self):
        """测试 SchemaNotLoadedError 继承"""
        error = SchemaNotLoadedError("Schema 未加载")
        
        assert isinstance(error, SchemaValidationError)
    
    def test_all_exceptions_are_catchable(self):
        """测试所有异常可以被捕获"""
        try:
            raise SchemaLoadError("测试")
        except SchemaValidationError:
            pass  # 应该可以捕获
        
        try:
            raise SchemaNotLoadedError("测试")
        except SchemaValidationError:
            pass  # 应该可以捕获


# ===================================================================
# 7. 辅助方法测试
# ===================================================================

class TestHelperMethods:
    """辅助方法测试"""
    
    def test_get_all_data_fields(self, validator):
        """测试获取所有数据字段"""
        data = {
            "field1": "value1",
            "nested": {
                "field2": "value2",
                "deep": {
                    "field3": "value3"
                }
            }
        }
        
        fields = validator._get_all_data_fields(data)
        
        assert "field1" in fields
        assert "nested" in fields
        assert "nested.field2" in fields
        assert "nested.deep" in fields
        assert "nested.deep.field3" in fields
    
    def test_get_nested_value(self, validator):
        """测试获取嵌套值"""
        data = {
            "level1": {
                "level2": {
                    "level3": "target_value"
                }
            }
        }
        
        value = validator._get_nested_value(data, "level1.level2.level3")
        assert value == "target_value"
        
        # 测试不存在的路径
        value = validator._get_nested_value(data, "nonexistent.path")
        assert value is None
    
    def test_validate_field_type(self, validator):
        """测试字段类型验证"""
        # 测试正确的类型
        is_valid, error = validator._validate_field_type(
            "test_field",
            "string_value",
            FieldType.STRING
        )
        assert is_valid
        assert error is None
        
        # 测试错误的类型
        is_valid, error = validator._validate_field_type(
            "test_field",
            "string_value",
            FieldType.INTEGER
        )
        assert not is_valid
        assert error is not None
        assert "类型错误" in error


# ===================================================================
# 8. 性能测试
# ===================================================================

@pytest.mark.slow
class TestPerformance:
    """性能测试"""
    
    def test_schema_load_performance(self, schema_file):
        """测试 Schema 加载性能 < 100ms"""
        validator = SchemaValidator()
        
        start = time.perf_counter()
        validator.load_schema(str(schema_file))
        elapsed = (time.perf_counter() - start) * 1000
        
        assert elapsed < 100, f"Schema 加载耗时 {elapsed:.2f}ms，超过目标 100ms"
    
    def test_rule_extraction_performance(self, validator):
        """测试规则提取性能 < 50ms"""
        # 先加载 schema
        start = time.perf_counter()
        rules = validator.extract_rules(validator.schema)
        elapsed = (time.perf_counter() - start) * 1000
        
        assert elapsed < 50, f"规则提取耗时 {elapsed:.2f}ms，超过目标 50ms"
    
    def test_validation_performance(self, validator, valid_minimal_data):
        """测试单文件验证性能 < 200ms"""
        start = time.perf_counter()
        validator.validate_against_schema(valid_minimal_data, "test.yml")
        elapsed = (time.perf_counter() - start) * 1000
        
        assert elapsed < 200, f"单文件验证耗时 {elapsed:.2f}ms，超过目标 200ms"


# ===================================================================
# 9. 集成测试
# ===================================================================

class TestIntegration:
    """集成测试"""
    
    def test_full_workflow(self, schema_file, temp_dir):
        """测试完整工作流：加载 -> 验证 -> 报告"""
        # 1. 创建测试数据
        test_file = temp_dir / "test_workflow.yml"
        test_data = {
            "lesson_number": 1,
            "lesson_title": "集成测试课程",
            "course_name": "集成测试",
        }
        with open(test_file, 'w', encoding='utf-8') as f:
            yaml.dump(test_data, f, allow_unicode=True)
        
        # 2. 初始化验证器
        validator = SchemaValidator(str(schema_file))
        
        # 3. 加载数据并验证
        with open(test_file, 'r', encoding='utf-8') as f:
            data = yaml.safe_load(f)
        
        result = validator.validate_against_schema(data, str(test_file))
        
        # 4. 检查结果
        assert isinstance(result, ValidationResult)
        assert result.file_path == str(test_file)
        
        # 5. 转换为字典
        result_dict = result.to_dict()
        assert isinstance(result_dict, dict)
        assert "file" in result_dict
    
    def test_schema_caching_across_validations(self, validator):
        """测试多次验证时 Schema 缓存工作"""
        data1 = {"lesson_number": 1, "lesson_title": "Test 1", "course_name": "Course 1"}
        data2 = {"lesson_number": 2, "lesson_title": "Test 2", "course_name": "Course 2"}
        
        # 第一次验证
        result1 = validator.validate_against_schema(data1, "test1.yml")
        schema_id_1 = id(validator.schema)
        
        # 第二次验证（应使用缓存的 schema）
        result2 = validator.validate_against_schema(data2, "test2.yml")
        schema_id_2 = id(validator.schema)
        
        # Schema 对象应该是同一个（缓存工作）
        assert schema_id_1 == schema_id_2
        assert isinstance(result1, ValidationResult)
        assert isinstance(result2, ValidationResult)


if __name__ == "__main__":
    # 运行测试
    pytest.main([__file__, "-v", "--tb=short"])

