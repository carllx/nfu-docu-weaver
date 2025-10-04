#!/usr/bin/env python3
"""
BMAD Template Generator
用于生成和管理项目模板文件的工具

使用方法:
python template_generator.py --init    # 初始化项目模板
python template_generator.py --list    # 列出所有可用模板
python template_generator.py --generate TPL_Story --week 1 --epic 1  # 生成具体模板
"""

import argparse
import os
import shutil
from pathlib import Path
from datetime import datetime

class TemplateGenerator:
    def __init__(self, project_root):
        self.project_root = Path(project_root)
        self.templates_dir = self.project_root / "templates"
        self.stories_dir = self.project_root / "docs" / "stories"
        self.content_dir = self.project_root / "content"

    def init_templates(self):
        """初始化项目模板"""
        print("🔧 初始化BMAD项目模板...")

        # 确保目录存在
        self.templates_dir.mkdir(exist_ok=True)
        self.stories_dir.mkdir(exist_ok=True)
        self.content_dir.mkdir(exist_ok=True)

        # 移动legacy模板到正确位置
        legacy_dir = self.templates_dir / "legacy"
        if legacy_dir.exists():
            for file in legacy_dir.glob("*.md"):
                shutil.copy2(file, self.templates_dir / file.name)
            print(f"✅ 已从 {legacy_dir} 迁移模板文件")

        # 创建基础目录结构
        (self.content_dir / "weekly-units").mkdir(exist_ok=True)
        (self.content_dir / "slides").mkdir(exist_ok=True)

        print("🎉 模板初始化完成！")

    def list_templates(self):
        """列出所有可用模板"""
        if not self.templates_dir.exists():
            print("❌ 模板目录不存在，请先运行 --init")
            return

        templates = list(self.templates_dir.glob("*.md"))
        if not templates:
            print("📭 没有找到模板文件")
            return

        print("📋 可用模板:")
        for template in templates:
            print(f"  • {template.name}")

    def generate_from_template(self, template_name, variables):
        """从模板生成文件"""
        template_path = self.templates_dir / f"{template_name}.md"

        if not template_path.exists():
            print(f"❌ 模板文件不存在: {template_path}")
            return None

        # 读取模板内容
        with open(template_path, 'r', encoding='utf-8') as f:
            content = f.read()

        # 替换变量
        for key, value in variables.items():
            content = content.replace("{{" + key + "}}", str(value))

        # 特殊处理 week_num_padded
        content = content.replace("{{week_num_padded}}", f"{variables.get('week_num', 1):02d}")

        # 处理其他可能遗漏的变量
        content = content.replace("{{week_num}}", str(variables.get('week_num', 1)))
        content = content.replace("{{epic_num}}", str(variables.get('epic_num', 1)))

        # 添加生成时间
        content = content.replace("{{generation_date}}", datetime.now().strftime("%Y-%m-%d"))

        return content

    def generate_story(self, week_num, epic_num, story_type="content_production"):
        """生成Story文件"""
        variables = {
            "week_num": week_num,
            "week_num_padded": f"{week_num:02d}",
            "epic_num": epic_num,
            "assignee_name": "Mary" if "content" in story_type else "Developer",
            "story_type": story_type
        }

        if story_type == "content_production":
            variables.update({
                "story_title": "内容生产Story",
                "user_role": "内容生产分析师(Mary)",
                "goal": "深度整合Week {{week_num}}的所有教学资源",
                "outcome": "创建一份内容详尽、包含引用的Week_{{week_num_padded}}.md教学单元草稿"
            })
        elif story_type == "slide_production":
            variables.update({
                "story_title": "幻灯片制作Story",
                "user_role": "Developer",
                "goal": "将审核通过的Week_{{week_num}}.md教学内容",
                "outcome": "创建一份结构化的.marpit.md幻灯片"
            })

        content = self.generate_from_template("TPL_Story", variables)

        if content:
            story_filename = f"{epic_num}.{len(list(self.stories_dir.glob(f'{epic_num}.*.story.md'))) + 1}.story.md"
            story_path = self.stories_dir / story_filename

            with open(story_path, 'w', encoding='utf-8') as f:
                f.write(content)

            print(f"✅ Story文件已生成: {story_path}")
            return story_path

        return None

    def generate_weekly_unit(self, week_num, epic_num):
        """生成周度单元模板"""
        variables = {
            "week_num": week_num,
            "epic_num": epic_num,
            "week_title": f"Week {week_num}",
            "prd_version": "v4.1",
            "csv_file_version": f"W{week_num:02d}_resources.csv"
        }

        content = self.generate_from_template("TPL_Weekly_Unit", variables)

        if content:
            unit_path = self.content_dir / "weekly-units" / f"Week_{week_num:02d}.md"

            with open(unit_path, 'w', encoding='utf-8') as f:
                f.write(content)

            print(f"✅ 周度单元文件已生成: {unit_path}")
            return unit_path

        return None

    def generate_slide(self, week_num, epic_num):
        """生成幻灯片模板"""
        variables = {
            "week_num": week_num,
            "week_title": f"Week {week_num}",
            "weekly_objectives": "本周学习目标",
            "core_concepts": "核心概念内容",
            "practice_steps": "实践步骤",
            "common_issues": "常见问题解答"
        }

        content = self.generate_from_template("TPL_Marpit_Slide", variables)

        if content:
            slide_path = self.content_dir / "slides" / f"Week_{week_num:02d}.marpit.md"

            with open(slide_path, 'w', encoding='utf-8') as f:
                f.write(content)

            print(f"✅ 幻灯片文件已生成: {slide_path}")
            return slide_path

        return None

def main():
    parser = argparse.ArgumentParser(description="BMAD模板生成工具")
    parser.add_argument("--init", action="store_true", help="初始化项目模板")
    parser.add_argument("--list", action="store_true", help="列出所有可用模板")
    parser.add_argument("--generate", help="生成指定模板")
    parser.add_argument("--week", type=int, help="周次编号")
    parser.add_argument("--epic", type=int, help="章节编号")
    parser.add_argument("--type", default="content_production", help="Story类型")

    args = parser.parse_args()

    # 获取项目根目录
    script_dir = Path(__file__).parent.parent
    generator = TemplateGenerator(script_dir)

    if args.init:
        generator.init_templates()
    elif args.list:
        generator.list_templates()
    elif args.generate:
        if not args.week or not args.epic:
            print("❌ 生成模板需要指定 --week 和 --epic 参数")
            return

        if args.generate == "TPL_Story":
            generator.generate_story(args.week, args.epic, args.type)
        elif args.generate == "TPL_Weekly_Unit":
            generator.generate_weekly_unit(args.week, args.epic)
        elif args.generate == "TPL_Marpit_Slide":
            generator.generate_slide(args.week, args.epic)
        else:
            print(f"❌ 不支持的模板类型: {args.generate}")
    else:
        parser.print_help()

if __name__ == "__main__":
    main()
