import os
import yaml
import re
import json
import sys
from docx import Document
from docx.shared import RGBColor
from docx.enum.text import WD_COLOR_INDEX
import argparse
from pathlib import Path
from tqdm import tqdm

class DocumentGenerator:
    def __init__(self):
        self.debug = False
    
    def log(self, message):
        """调试日志输出"""
        if self.debug:
            print(f"[DEBUG] {message}")
    
    def copy_paragraph_format(self, source_paragraph, target_paragraph):
        """安全地复制段落格式"""
        try:
            # 复制段落格式
            if source_paragraph.paragraph_format:
                target_format = target_paragraph.paragraph_format
                source_format = source_paragraph.paragraph_format
                
                # 复制对齐方式
                if source_format.alignment is not None:
                    target_format.alignment = source_format.alignment
                
                # 复制缩进
                if source_format.left_indent is not None:
                    target_format.left_indent = source_format.left_indent
                if source_format.right_indent is not None:
                    target_format.right_indent = source_format.right_indent
                if source_format.first_line_indent is not None:
                    target_format.first_line_indent = source_format.first_line_indent
                
                # 复制间距
                if source_format.space_before is not None:
                    target_format.space_before = source_format.space_before
                if source_format.space_after is not None:
                    target_format.space_after = source_format.space_after
                if source_format.line_spacing is not None:
                    target_format.line_spacing = source_format.line_spacing
            
            # 复制样式
            if source_paragraph.style:
                target_paragraph.style = source_paragraph.style
                
            self.log(f"成功复制段落格式")
            
        except Exception as e:
            self.log(f"复制段落格式时出错: {str(e)}")
    
    def get_base_run_format(self, paragraph):
        """获取段落的基础文字格式"""
        base_format = {}
        
        try:
            # 优先从现有run获取格式（更准确）
            if paragraph.runs:
                first_run = paragraph.runs[0]
                
                # 字体名称和大小
                if first_run.font.name:
                    base_format['font_name'] = first_run.font.name
                if first_run.font.size:
                    base_format['font_size'] = first_run.font.size
                
                # 获取颜色（更健壮的方式）
                if first_run.font.color:
                    if first_run.font.color.rgb:
                        base_format['font_color'] = first_run.font.color.rgb
                    elif first_run.font.color.theme_color:
                        # 如果是主题颜色，也尝试获取
                        base_format['font_color_theme'] = first_run.font.color.theme_color
                
                # 保留粗体、斜体、下划线状态（包括 None）
                base_format['font_bold'] = first_run.font.bold
                base_format['font_italic'] = first_run.font.italic
                base_format['font_underline'] = first_run.font.underline
                
                # 保留其他格式
                base_format['font_strike'] = first_run.font.strike
                base_format['font_all_caps'] = first_run.font.all_caps
                base_format['font_small_caps'] = first_run.font.small_caps
            
            # 如果从run获取不到，再从段落样式获取
            if not base_format and paragraph.style and hasattr(paragraph.style, 'font'):
                style_font = paragraph.style.font
                if style_font.name:
                    base_format['font_name'] = style_font.name
                if style_font.size:
                    base_format['font_size'] = style_font.size
                if style_font.color and style_font.color.rgb:
                    base_format['font_color'] = style_font.color.rgb
            
            self.log(f"获取到的基础格式: {base_format}")
        
        except Exception as e:
            self.log(f"获取基础格式时出错: {str(e)}")
        
        return base_format
    
    def apply_run_format(self, run, base_format):
        """应用基础格式到run"""
        try:
            # 字体名称和大小
            if 'font_name' in base_format:
                font_name = base_format['font_name']
                run.font.name = font_name
                
                # 🔑 关键修复：同时设置东亚字体（中文）和复杂脚本字体
                from docx.oxml.shared import OxmlElement
                from docx.oxml.ns import qn
                
                rPr = run._element.get_or_add_rPr()
                rFonts = rPr.find(qn('w:rFonts'))
                if rFonts is None:
                    rFonts = OxmlElement('w:rFonts')
                    rPr.append(rFonts)
                
                # 设置所有字体类型
                rFonts.set(qn('w:ascii'), font_name)
                rFonts.set(qn('w:hAnsi'), font_name)
                rFonts.set(qn('w:eastAsia'), font_name)  # 东亚字体（中文）
                rFonts.set(qn('w:cs'), font_name)        # 复杂脚本字体
            
            if 'font_size' in base_format:
                run.font.size = base_format['font_size']
            
            # 颜色
            if 'font_color' in base_format:
                run.font.color.rgb = base_format['font_color']
            
            # 粗体、斜体、下划线（保留 None 状态）
            if 'font_bold' in base_format:
                run.font.bold = base_format['font_bold']
            if 'font_italic' in base_format:
                run.font.italic = base_format['font_italic']
            if 'font_underline' in base_format:
                run.font.underline = base_format['font_underline']
            
            # 其他格式
            if 'font_strike' in base_format:
                run.font.strike = base_format['font_strike']
            if 'font_all_caps' in base_format:
                run.font.all_caps = base_format['font_all_caps']
            if 'font_small_caps' in base_format:
                run.font.small_caps = base_format['font_small_caps']
                
        except Exception as e:
            self.log(f"应用run格式时出错: {str(e)}")
    
    def parse_markdown_formatting(self, text):
        """解析Markdown格式并返回格式化的片段列表"""
        segments = []
        
        # 处理粗体和斜体的正则表达式
        # 支持 **粗体** 和 *斜体*
        pattern = r'(\*\*[^*]+\*\*|\*[^*]+\*|[^*]+)'
        
        parts = re.findall(pattern, text)
        
        for part in parts:
            if not part:
                continue
                
            if part.startswith('**') and part.endswith('**'):
                # 粗体文本
                segments.append({
                    'text': part[2:-2],  # 去掉 ** 标记
                    'bold': True,
                    'italic': False
                })
            elif part.startswith('*') and part.endswith('*'):
                # 斜体文本
                segments.append({
                    'text': part[1:-1],  # 去掉 * 标记
                    'bold': False,
                    'italic': True
                })
            else:
                # 普通文本
                segments.append({
                    'text': part,
                    'bold': False,
                    'italic': False
                })
        
        return segments
    
    def add_formatted_text_to_paragraph(self, paragraph, text, base_format):
        """向段落添加格式化文本"""
        # 清空现有内容
        paragraph.clear()
        
        # 按行分割文本（保持 \n 作为换行）
        lines = text.split('\n')
        
        for i, line in enumerate(lines):
            if i > 0:
                # 添加换行符，并应用基础格式（保持缩进和字体）
                newline_run = paragraph.add_run('\n')
                self.apply_run_format(newline_run, base_format)
            
            # 解析Markdown格式
            segments = self.parse_markdown_formatting(line)
            
            for segment in segments:
                run = paragraph.add_run(segment['text'])
                
                # 应用基础格式
                self.apply_run_format(run, base_format)
                
                # 应用Markdown格式（只在有 Markdown 标记时覆盖）
                if segment['bold']:
                    run.font.bold = True
                if segment['italic']:
                    run.font.italic = True
    
    def process_template_paragraph(self, paragraph, data):
        """处理单个模板段落"""
        if not paragraph.text.strip():
            return False
        
        original_text = paragraph.text
        self.log(f"处理段落: {original_text[:50]}...")
        
        # ⚠️ 关键：在 clear() 之前获取格式，因为 clear() 会删除所有 runs
        base_format = self.get_base_run_format(paragraph)
        
        # 替换占位符
        processed_text = self.replace_placeholders(original_text, data)
        
        if processed_text != original_text:
            self.log(f"文本已替换: {processed_text[:50]}...")
            
            # 检查是否需要分割段落（\n\n 表示段落分割）
            if '\n\n' in processed_text:
                return self.split_into_multiple_paragraphs(paragraph, processed_text, base_format, data)
            else:
                # 单段落处理
                self.add_formatted_text_to_paragraph(paragraph, processed_text, base_format)
                return True
        
        return False
    
    def split_into_multiple_paragraphs(self, original_paragraph, text, base_format, data):
        """将文本分割成多个段落"""
        # 按 \n\n 分割段落
        paragraphs_text = text.split('\n\n')
        
        # 处理第一个段落（替换原段落）
        if paragraphs_text:
            first_text = paragraphs_text[0].strip()
            if first_text:
                self.add_formatted_text_to_paragraph(original_paragraph, first_text, base_format)
        
        # 检查段落是否在表格单元格中
        parent = original_paragraph._element.getparent()
        
        # 如果段落在表格单元格中（parent 是 tc 元素）
        if parent.tag.endswith('}tc'):
            # 在表格单元格中，直接在当前单元格添加新段落
            from docx.oxml import OxmlElement
            from docx.text.paragraph import Paragraph
            
            for para_text in paragraphs_text[1:]:
                para_text = para_text.strip()
                if para_text:
                    # 在单元格中添加新段落
                    new_p_element = OxmlElement('w:p')
                    parent.append(new_p_element)
                    
                    # 创建 Paragraph 对象
                    new_paragraph = Paragraph(new_p_element, parent)
                    
                    # 复制格式
                    self.copy_paragraph_format(original_paragraph, new_paragraph)
                    
                    # 添加格式化文本
                    self.add_formatted_text_to_paragraph(new_paragraph, para_text, base_format)
        else:
            # 在普通文档流中，按原有逻辑处理
            original_index = list(parent).index(original_paragraph._element)
            
            for i, para_text in enumerate(paragraphs_text[1:], 1):
                para_text = para_text.strip()
                if para_text:
                    # 获取文档对象
                    if hasattr(original_paragraph, '_part'):
                        doc_obj = original_paragraph._part.document
                    else:
                        # 如果无法获取文档对象，跳过
                        self.log("无法获取文档对象，跳过段落创建")
                        continue
                    
                    # 创建新段落
                    new_paragraph = doc_obj.add_paragraph()
                    
                    # 复制格式
                    self.copy_paragraph_format(original_paragraph, new_paragraph)
                    
                    # 添加格式化文本
                    self.add_formatted_text_to_paragraph(new_paragraph, para_text, base_format)
                    
                    # 将新段落插入到正确位置
                    parent.insert(original_index + i, new_paragraph._element)
        
        return True
    
    def replace_placeholders(self, text, data):
        """替换文本中的占位符"""
        def replace_match(match):
            placeholder = match.group(1)
            return self.get_nested_value(data, placeholder)
        
        # 匹配 {{key}} 格式的占位符
        result = re.sub(r'\{\{([^}]+)\}\}', replace_match, text)
        return result
    
    def get_nested_value(self, data, key_path):
        """获取嵌套字典中的值"""
        keys = key_path.strip().split('.')
        value = data
        
        try:
            for key in keys:
                if isinstance(value, dict):
                    value = value.get(key, f'{{{{{key_path}}}}}')
                else:
                    return f'{{{{{key_path}}}}}'
            
            # 如果值是列表，转换为换行分隔的字符串
            if isinstance(value, list):
                return '\n'.join(str(item) for item in value)
            
            return str(value) if value is not None else f'{{{{{key_path}}}}}'
        
        except Exception as e:
            self.log(f"获取值时出错 {key_path}: {str(e)}")
            return f'{{{{{key_path}}}}}'
    
    def analyze_directory(self, directory_path, recursive=False):
        """分析目录中的YAML文件数量"""
        try:
            dir_path = Path(directory_path)
            
            if not dir_path.exists():
                return {
                    "success": False,
                    "error": f"目录不存在: {directory_path}"
                }
            
            if not dir_path.is_dir():
                return {
                    "success": False,
                    "error": f"路径不是目录: {directory_path}"
                }
            
            # 查找YAML文件
            if recursive:
                yaml_files = list(dir_path.rglob('*.yml')) + list(dir_path.rglob('*.yaml'))
            else:
                yaml_files = list(dir_path.glob('*.yml')) + list(dir_path.glob('*.yaml'))
            
            return {
                "success": True,
                "file_count": len(yaml_files),
                "files": [str(f.relative_to(dir_path)) for f in yaml_files]
            }
            
        except Exception as e:
            return {
                "success": False,
                "error": str(e)
            }
    
    def batch_generate(self, data_dir, template_path, output_dir, continue_on_error=False, debug=False, quiet=False, verbose=False):
        """批量生成文档
        
        Args:
            data_dir: 数据文件目录
            template_path: 模板文件路径
            output_dir: 输出目录
            continue_on_error: 遇错继续
            debug: 调试模式
            quiet: 安静模式（仅显示错误）
            verbose: 详细模式（显示详细日志）
        """
        self.debug = debug
        
        # 确保输出目录存在
        os.makedirs(output_dir, exist_ok=True)
        
        # 获取所有YAML文件
        dir_path = Path(data_dir)
        yaml_files = sorted(list(dir_path.glob('*.yml')) + list(dir_path.glob('*.yaml')))
        
        if not yaml_files:
            return {
                "success": False,
                "error": f"未在目录中找到YAML文件: {data_dir}",
                "total": 0,
                "succeeded": 0,
                "failed": 0
            }
        
        # 批量处理
        results = []
        succeeded = 0
        failed = 0
        
        # 进度条设置
        use_progress_bar = not quiet and not verbose
        
        if not quiet:
            print(f"开始批量生成文档...")
            print(f"总共发现 {len(yaml_files)} 个数据文件")
            if not use_progress_bar:
                print("-" * 60)
        
        # 使用 tqdm 进度条或普通循环
        if use_progress_bar:
            pbar = tqdm(yaml_files, desc="批量生成文档", unit="file")
            iterator = pbar
        else:
            iterator = yaml_files
            pbar = None
        
        for idx, data_file in enumerate(iterator, 1):
            file_name = data_file.stem
            output_path = os.path.join(output_dir, f"{file_name}.docx")
            
            if verbose and not use_progress_bar:
                print(f"\n[{idx}/{len(yaml_files)}] 处理: {data_file.name}")
            elif not use_progress_bar and not quiet:
                print(f"\n[{idx}/{len(yaml_files)}] 处理: {data_file.name}")
            
            try:
                success = self.generate_document(
                    template_path,
                    str(data_file),
                    output_path,
                    debug=False  # 批量模式下关闭详细日志
                )
                
                if success:
                    succeeded += 1
                    results.append({
                        "file": data_file.name,
                        "status": "success",
                        "output": output_path
                    })
                    # Only show success message in verbose mode without progress bar
                    if verbose and not use_progress_bar:
                        print(f"  ✅ 成功: {output_path}")
                else:
                    failed += 1
                    results.append({
                        "file": data_file.name,
                        "status": "failed",
                        "error": "生成失败"
                    })
                    if not quiet:
                        print(f"  ❌ 失败: {data_file.name}")
                    if not continue_on_error:
                        break
                        
            except Exception as e:
                failed += 1
                error_msg = str(e)
                if not quiet:
                    print(f"  ❌ 错误: {error_msg}")
                results.append({
                    "file": data_file.name,
                    "status": "failed",
                    "error": error_msg
                })
                
                if not continue_on_error:
                    break
        
        # 生成汇总报告
        if not quiet:
            print("\n" + "=" * 60)
            print("批量生成完成!")
            print(f"  ✅ 成功: {succeeded}")
            print(f"  ❌ 失败: {failed}")
            print(f"  📊 总计: {len(yaml_files)}")
            print("=" * 60)
        
        return {
            "success": failed == 0,
            "total": len(yaml_files),
            "succeeded": succeeded,
            "failed": failed,
            "results": results
        }
    
    def generate_document(self, template_path, data_path, output_path, debug=False):
        """生成文档的主函数"""
        self.debug = debug
        
        try:
            # 加载数据
            self.log(f"加载数据文件: {data_path}")
            with open(data_path, 'r', encoding='utf-8') as f:
                data = yaml.safe_load(f)
            
            # 加载模板
            self.log(f"加载模板文件: {template_path}")
            doc = Document(template_path)
            
            # 处理所有段落
            processed_count = 0
            for i, paragraph in enumerate(doc.paragraphs):
                if self.process_template_paragraph(paragraph, data):
                    processed_count += 1
            
            self.log(f"共处理了 {processed_count} 个段落")
            
            # 处理所有表格
            table_cell_count = 0
            for table_idx, table in enumerate(doc.tables):
                self.log(f"处理表格 {table_idx}")
                for row_idx, row in enumerate(table.rows):
                    for col_idx, cell in enumerate(row.cells):
                        # 处理单元格中的每个段落
                        for paragraph in cell.paragraphs:
                            if self.process_template_paragraph(paragraph, data):
                                table_cell_count += 1
            
            self.log(f"共处理了 {table_cell_count} 个表格单元格")
            
            # 保存文档
            self.log(f"保存文档到: {output_path}")
            doc.save(output_path)
            
            if debug:
                print(f"文档已成功生成: {output_path}")
                print(f"  - 处理段落: {processed_count}")
                print(f"  - 处理表格单元格: {table_cell_count}")
            
            return True
            
        except Exception as e:
            if debug:
                print(f"生成文档时出错: {str(e)}")
            return False

def cmd_analyze(args):
    """analyze 命令处理函数"""
    generator = DocumentGenerator()
    result = generator.analyze_directory(args.directory, recursive=args.recursive)
    
    # 输出JSON格式结果
    print(json.dumps(result, ensure_ascii=False, indent=2))
    
    return 0 if result['success'] else 1

def cmd_generate(args):
    """generate 命令处理函数"""
    generator = DocumentGenerator()
    
    # 确定输出路径
    if args.output:
        output_path = args.output
    else:
        template_path = Path(args.template)
        data_path = Path(args.data)
        output_dir = args.output_dir if args.output_dir else './output'
        os.makedirs(output_dir, exist_ok=True)
        output_path = os.path.join(output_dir, f"{data_path.stem}.docx")
    
    # 生成文档
    success = generator.generate_document(
        args.template, 
        args.data, 
        output_path, 
        debug=args.debug
    )
    
    # 输出结果（非debug模式）
    if success and not args.debug:
        print(f"文档已成功生成: {output_path}")
    elif not success:
        print(f"文档生成失败")
    
    # 输出JSON格式结果
    result = {
        "success": success,
        "output_path": output_path if success else None
    }
    print(json.dumps(result, ensure_ascii=False))
    
    return 0 if success else 1

def cmd_batch(args):
    """batch 命令处理函数"""
    generator = DocumentGenerator()
    
    # 批量生成
    result = generator.batch_generate(
        args.data_dir,
        args.template,
        args.output_dir,
        continue_on_error=args.continue_on_error,
        debug=args.debug,
        quiet=args.quiet,
        verbose=args.verbose
    )
    
    # 输出JSON格式的详细结果
    if not args.quiet:
        print("\n" + "=" * 60)
        print("详细结果 (JSON):")
        print(json.dumps(result, ensure_ascii=False, indent=2))
    
    return 0 if result['success'] else 1

def main():
    """主函数"""
    parser = argparse.ArgumentParser(
        description='Docu-Weaver: 自动化文档生成工具',
        formatter_class=argparse.RawDescriptionHelpFormatter,
        epilog="""
示例:
  # 分析目录中的YAML文件
  python generate_docs.py analyze ./test_data
  
  # 生成单个文档
  python generate_docs.py generate lesson1.yml template.docx output/
  
  # 批量生成文档
  python generate_docs.py batch ./test_data template.docx ./output
  
  # 批量生成（遇错继续）
  python generate_docs.py batch ./data template.docx ./output --continue-on-error
  
  # 递归分析子目录
  python generate_docs.py analyze ./data --recursive
        """
    )
    
    # 创建子命令
    subparsers = parser.add_subparsers(dest='command', help='可用命令')
    
    # analyze 子命令
    parser_analyze = subparsers.add_parser('analyze', help='分析目录中的YAML文件数量')
    parser_analyze.add_argument('directory', help='要分析的目录路径')
    parser_analyze.add_argument('-r', '--recursive', action='store_true', 
                               help='递归扫描子目录')
    parser_analyze.set_defaults(func=cmd_analyze)
    
    # generate 子命令
    parser_generate = subparsers.add_parser('generate', help='生成单个文档')
    parser_generate.add_argument('data', help='YAML数据文件路径')
    parser_generate.add_argument('template', help='Word模板文件路径')
    parser_generate.add_argument('output_dir', help='输出目录路径')
    parser_generate.add_argument('-o', '--output', help='指定输出文件完整路径（可选）')
    parser_generate.add_argument('--debug', action='store_true', help='启用调试模式')
    parser_generate.set_defaults(func=cmd_generate)
    
    # batch 子命令
    parser_batch = subparsers.add_parser('batch', help='批量生成文档')
    parser_batch.add_argument('data_dir', help='数据文件目录路径')
    parser_batch.add_argument('template', help='Word模板文件路径')
    parser_batch.add_argument('output_dir', help='输出目录路径')
    parser_batch.add_argument('--continue-on-error', action='store_true',
                             help='遇到错误时继续处理其他文件')
    parser_batch.add_argument('--debug', action='store_true', help='启用调试模式')
    parser_batch.add_argument('-q', '--quiet', action='store_true', 
                             help='安静模式（仅显示错误）')
    parser_batch.add_argument('-v', '--verbose', action='store_true', 
                             help='详细模式（显示所有处理信息）')
    parser_batch.set_defaults(func=cmd_batch)
    
    # 解析参数
    args = parser.parse_args()
    
    # 如果没有指定子命令，显示帮助信息
    if not args.command:
        parser.print_help()
        return 1
    
    # 执行对应的命令函数
    return args.func(args)

if __name__ == "__main__":
    exit(main())
