#!/usr/bin/env python3
"""
快速测试脚本 - 测试 SchemaValidator 的基本功能
"""

import sys
from pathlib import Path

# 添加项目根目录到 Python 路径
sys.path.insert(0, str(Path(__file__).parent))

from generate_docs import SchemaValidator, SchemaLoadError, ValidationResult

def test_load_schema():
    """测试 Schema 加载"""
    print("🧪 测试 1: Schema 加载...")
    try:
        validator = SchemaValidator("schemas/lesson_data_schema.yml")
        assert validator.schema is not None, "Schema 应该被加载"
        assert validator.validation_rules is not None, "验证规则应该被提取"
        print("✅ 测试 1 通过: Schema 加载成功")
        return True
    except Exception as e:
        print(f"❌ 测试 1 失败: {e}")
        return False


def test_extract_rules():
    """测试规则提取"""
    print("\n🧪 测试 2: 规则提取...")
    try:
        validator = SchemaValidator("schemas/lesson_data_schema.yml")
        rules = validator.validation_rules
        
        # 检查是否提取到了必需字段
        assert len(rules.required_fields) > 0, "应该提取到必需字段"
        assert "lesson_number" in rules.required_fields, "应该包含 lesson_number"
        assert "course_name" in rules.required_fields, "应该包含 course_name"
        
        # 检查字段类型
        assert len(rules.field_types) > 0, "应该提取到字段类型"
        
        # 检查嵌套结构
        assert len(rules.nested_structures) > 0, "应该提取到嵌套结构"
        
        # 检查列表字段
        assert len(rules.list_fields) > 0, "应该提取到列表字段"
        
        print(f"✅ 测试 2 通过:")
        print(f"   - 必需字段数: {len(rules.required_fields)}")
        print(f"   - 字段类型数: {len(rules.field_types)}")
        print(f"   - 嵌套结构数: {len(rules.nested_structures)}")
        print(f"   - 列表字段数: {len(rules.list_fields)}")
        return True
    except Exception as e:
        print(f"❌ 测试 2 失败: {e}")
        import traceback
        traceback.print_exc()
        return False


def test_validate_valid_data():
    """测试验证有效数据"""
    print("\n🧪 测试 3: 验证有效数据...")
    try:
        validator = SchemaValidator("schemas/lesson_data_schema.yml")
        
        # 加载测试数据
        import yaml
        with open("test_data/lesson1.yml", "r", encoding="utf-8") as f:
            data = yaml.safe_load(f)
        
        # 验证数据
        result = validator.validate_against_schema(data, "test_data/lesson1.yml")
        
        assert isinstance(result, ValidationResult), "应该返回 ValidationResult 对象"
        print(f"✅ 测试 3 通过:")
        print(f"   - 验证结果: {'通过' if result.is_valid else '失败'}")
        print(f"   - 错误数: {len(result.errors)}")
        print(f"   - 警告数: {len(result.warnings)}")
        print(f"   - 已检查字段数: {result.checked_fields}")
        
        if not result.is_valid:
            print("\n   错误详情:")
            for error in result.errors[:5]:  # 只显示前5个错误
                print(f"     - {error.field_path}: {error.message}")
        
        if result.warnings:
            print("\n   警告详情:")
            for warning in result.warnings[:5]:  # 只显示前5个警告
                print(f"     - {warning.field_path}: {warning.message}")
        
        return True
    except Exception as e:
        print(f"❌ 测试 3 失败: {e}")
        import traceback
        traceback.print_exc()
        return False


def test_validate_invalid_data():
    """测试验证无效数据"""
    print("\n🧪 测试 4: 验证无效数据（缺少必需字段）...")
    try:
        validator = SchemaValidator("schemas/lesson_data_schema.yml")
        
        # 创建不完整的测试数据
        incomplete_data = {
            "lesson_number": 1,
            # 缺少其他必需字段
        }
        
        result = validator.validate_against_schema(incomplete_data, "test_incomplete.yml")
        
        assert isinstance(result, ValidationResult), "应该返回 ValidationResult 对象"
        assert not result.is_valid, "不完整的数据应该验证失败"
        assert len(result.errors) > 0, "应该有错误"
        
        print(f"✅ 测试 4 通过:")
        print(f"   - 验证结果: {'通过' if result.is_valid else '失败'} (预期失败)")
        print(f"   - 错误数: {len(result.errors)}")
        return True
    except Exception as e:
        print(f"❌ 测试 4 失败: {e}")
        import traceback
        traceback.print_exc()
        return False


def test_to_dict():
    """测试 to_dict 方法"""
    print("\n🧪 测试 5: ValidationResult.to_dict()...")
    try:
        validator = SchemaValidator("schemas/lesson_data_schema.yml")
        
        incomplete_data = {"lesson_number": 1}
        result = validator.validate_against_schema(incomplete_data, "test.yml")
        
        # 转换为字典
        result_dict = result.to_dict()
        
        assert isinstance(result_dict, dict), "应该返回字典"
        assert "file" in result_dict, "应该包含 file 字段"
        assert "valid" in result_dict, "应该包含 valid 字段"
        assert "errors" in result_dict, "应该包含 errors 字段"
        assert "warnings" in result_dict, "应该包含 warnings 字段"
        
        print(f"✅ 测试 5 通过:")
        print(f"   - 字典键: {list(result_dict.keys())}")
        return True
    except Exception as e:
        print(f"❌ 测试 5 失败: {e}")
        import traceback
        traceback.print_exc()
        return False


def main():
    """运行所有测试"""
    print("=" * 60)
    print("🚀 SchemaValidator 基本功能测试")
    print("=" * 60)
    
    tests = [
        test_load_schema,
        test_extract_rules,
        test_validate_valid_data,
        test_validate_invalid_data,
        test_to_dict,
    ]
    
    results = []
    for test in tests:
        results.append(test())
    
    print("\n" + "=" * 60)
    print(f"📊 测试总结: {sum(results)}/{len(results)} 通过")
    print("=" * 60)
    
    if all(results):
        print("✅ 所有测试通过！Phase 1 实现成功！")
        return 0
    else:
        print("❌ 部分测试失败，需要修复")
        return 1


if __name__ == "__main__":
    sys.exit(main())

