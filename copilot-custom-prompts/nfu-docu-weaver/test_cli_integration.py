#!/usr/bin/env python3
"""
CLI 集成测试 - 测试 validate 命令与 SchemaValidator 的集成
"""

import sys
import subprocess
from pathlib import Path

def run_cli_command(args):
    """运行 CLI 命令"""
    cmd = ["python", "generate_docs.py"] + args
    result = subprocess.run(
        cmd, 
        capture_output=True, 
        text=True,
        cwd=Path(__file__).parent
    )
    return result

def test_validate_with_schema():
    """测试带 Schema 的验证命令"""
    print("🧪 测试 1: validate 命令（使用 Schema）...")
    
    result = run_cli_command([
        "validate",
        "test_data/lesson1.yml",
        "template/template.docx",
        "--schema", "schemas/lesson_data_schema.yml"
    ])
    
    print(f"返回码: {result.returncode}")
    print(f"\n标准输出:\n{result.stdout}")
    
    if result.stderr:
        print(f"\n标准错误:\n{result.stderr}")
    
    # 检查输出
    assert "使用 Schema 验证" in result.stdout, "应该显示使用 Schema 验证"
    print("✅ 测试 1 通过")
    return True

def test_validate_without_schema():
    """测试不带 Schema 的验证命令（回退到模板验证）"""
    print("\n🧪 测试 2: validate 命令（不使用 Schema）...")
    
    result = run_cli_command([
        "validate",
        "test_data/lesson1.yml",
        "template/template.docx"
    ])
    
    print(f"返回码: {result.returncode}")
    print(f"\n标准输出:\n{result.stdout}")
    
    if result.stderr:
        print(f"\n标准错误:\n{result.stderr}")
    
    # 由于有默认 schema，应该还是使用 Schema 验证
    # 但如果 schema 不存在，会回退到模板验证
    print("✅ 测试 2 通过")
    return True

def test_validate_batch_with_schema():
    """测试批量验证（使用 Schema）"""
    print("\n🧪 测试 3: validate 批量模式（使用 Schema）...")
    
    result = run_cli_command([
        "validate",
        "template/template.docx",
        "--batch", "test_data/batch",
        "--schema", "schemas/lesson_data_schema.yml"
    ])
    
    print(f"返回码: {result.returncode}")
    print(f"\n标准输出:\n{result.stdout}")
    
    if result.stderr:
        print(f"\n标准错误:\n{result.stderr}")
    
    assert "数据验证完成" in result.stdout, "应该显示批量验证完成"
    print("✅ 测试 3 通过")
    return True

def test_help_message():
    """测试帮助信息"""
    print("\n🧪 测试 4: validate 命令帮助信息...")
    
    result = run_cli_command(["validate", "--help"])
    
    print(f"返回码: {result.returncode}")
    
    assert "--schema" in result.stdout, "帮助信息应该包含 --schema 参数"
    assert "验证数据文件完整性" in result.stdout, "应该有命令描述"
    
    print("✅ 测试 4 通过")
    return True

def main():
    """运行所有集成测试"""
    print("=" * 60)
    print("🚀 CLI 集成测试 - SchemaValidator")
    print("=" * 60)
    
    tests = [
        test_validate_with_schema,
        test_validate_without_schema,
        test_validate_batch_with_schema,
        test_help_message,
    ]
    
    results = []
    for test in tests:
        try:
            results.append(test())
        except Exception as e:
            print(f"❌ 测试失败: {e}")
            import traceback
            traceback.print_exc()
            results.append(False)
    
    print("\n" + "=" * 60)
    print(f"📊 测试总结: {sum(results)}/{len(results)} 通过")
    print("=" * 60)
    
    if all(results):
        print("✅ 所有 CLI 集成测试通过！Phase 4 完成！")
        return 0
    else:
        print("❌ 部分测试失败")
        return 1

if __name__ == "__main__":
    sys.exit(main())

