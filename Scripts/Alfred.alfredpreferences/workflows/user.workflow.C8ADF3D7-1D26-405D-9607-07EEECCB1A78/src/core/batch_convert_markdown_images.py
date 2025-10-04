import os
import sys
from pathlib import Path
from convert_local_images import MarkdownImageConverter

def batch_convert(directory: str):
    # 获取目录下的所有 Markdown 文件
    markdown_files = Path(directory).rglob('*.md')
    
    for markdown_file in markdown_files:
        print(f"开始处理文件: {markdown_file}")
        converter = MarkdownImageConverter(str(markdown_file))
        converter.process_file()
        print(f"完成处理文件: {markdown_file}\n")

if __name__ == "__main__":
    if len(sys.argv) != 2:
        print("使用方法: python batch_convert_markdown_images.py <directory>")
        print("说明: 该脚本会递归处理指定目录及其子目录中的所有 Markdown 文件。")
        sys.exit(1)
    
    directory = sys.argv[1]
    if not os.path.isdir(directory):
        print(f"错误: {directory} 不是一个有效的目录")
        sys.exit(1)
    
    batch_convert(directory)