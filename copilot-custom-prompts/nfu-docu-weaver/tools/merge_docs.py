#!/usr/bin/env python3
# -*- coding: utf-8 -*-
"""
文档合并工具
用于合并课程输出目录中的多个 Word 文档
"""

import os
import sys
from pathlib import Path
from docx import Document


def add_page_break(doc):
    """在文档末尾添加分页符"""
    doc.add_page_break()


def merge_documents(input_files, output_file):
    """
    合并多个 Word 文档
    
    Args:
        input_files: 输入文件路径列表
        output_file: 输出文件路径
    """
    if not input_files:
        print("错误：没有找到需要合并的文件")
        return False
    
    print(f"开始合并 {len(input_files)} 个文档...")
    
    # 创建主文档，使用第一个文件作为基础
    merged_doc = Document(input_files[0])
    print(f"✓ 已加载基础文档: {os.path.basename(input_files[0])}")
    
    # 合并其余文档
    for i, file_path in enumerate(input_files[1:], start=2):
        print(f"正在合并 ({i}/{len(input_files)}): {os.path.basename(file_path)}")
        
        # 添加分页符
        add_page_break(merged_doc)
        
        # 读取要合并的文档
        sub_doc = Document(file_path)
        
        # 复制所有段落
        for element in sub_doc.element.body:
            merged_doc.element.body.append(element)
    
    # 保存合并后的文档
    output_path = Path(output_file)
    output_path.parent.mkdir(parents=True, exist_ok=True)
    merged_doc.save(output_file)
    
    print(f"\n✓ 合并完成！")
    print(f"输出文件: {output_file}")
    print(f"文件大小: {os.path.getsize(output_file) / 1024:.1f} KB")
    
    return True


def get_lesson_files(directory, pattern="lesson-*.docx"):
    """
    获取目录中的课程文档文件列表（按编号排序）
    
    Args:
        directory: 目录路径
        pattern: 文件名模式
    
    Returns:
        排序后的文件路径列表
    """
    dir_path = Path(directory)
    
    if not dir_path.exists():
        print(f"错误：目录不存在: {directory}")
        return []
    
    # 获取所有匹配的文件
    files = list(dir_path.glob(pattern))
    
    if not files:
        print(f"警告：在 {directory} 中没有找到匹配 '{pattern}' 的文件")
        return []
    
    # 按文件名排序（这样 lesson-08, lesson-09, ... 会按正确顺序排列）
    files.sort(key=lambda x: x.name)
    
    return [str(f) for f in files]


def main():
    """主函数"""
    import argparse
    
    parser = argparse.ArgumentParser(
        description="合并课程输出目录中的 Word 文档",
        formatter_class=argparse.RawDescriptionHelpFormatter,
        epilog="""
示例:
  # 合并指定目录中的所有 lesson-*.docx 文件
  python merge_docs.py courses/course-002-三维动画基础-数字建模/output
  
  # 指定输出文件名
  python merge_docs.py courses/course-002-三维动画基础-数字建模/output -o merged.docx
  
  # 指定文件模式
  python merge_docs.py courses/course-002-三维动画基础-数字建模/output -p "lesson-1*.docx"
        """
    )
    
    parser.add_argument(
        'input_dir',
        help='输入目录路径（包含要合并的 docx 文件）'
    )
    
    parser.add_argument(
        '-o', '--output',
        default=None,
        help='输出文件路径（默认：输入目录/merged-lessons.docx）'
    )
    
    parser.add_argument(
        '-p', '--pattern',
        default='lesson-*.docx',
        help='文件名模式（默认：lesson-*.docx）'
    )
    
    args = parser.parse_args()
    
    # 获取输入目录的绝对路径
    input_dir = Path(args.input_dir).resolve()
    
    # 设置默认输出路径
    if args.output:
        output_file = args.output
    else:
        output_file = str(input_dir / 'merged-lessons.docx')
    
    print("=" * 60)
    print("文档合并工具")
    print("=" * 60)
    print(f"输入目录: {input_dir}")
    print(f"文件模式: {args.pattern}")
    print(f"输出文件: {output_file}")
    print("=" * 60)
    print()
    
    # 获取要合并的文件列表
    input_files = get_lesson_files(input_dir, args.pattern)
    
    if not input_files:
        print("\n没有找到需要合并的文件。")
        return 1
    
    print(f"找到 {len(input_files)} 个文件:")
    for i, f in enumerate(input_files, start=1):
        print(f"  {i}. {os.path.basename(f)}")
    print()
    
    # 执行合并
    success = merge_documents(input_files, output_file)
    
    return 0 if success else 1


if __name__ == '__main__':
    sys.exit(main())
