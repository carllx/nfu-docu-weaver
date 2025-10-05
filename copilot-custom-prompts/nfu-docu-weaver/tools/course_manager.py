#!/usr/bin/env python3
"""
课程管理工具 (Course Manager)

功能:
- 创建新课程工作空间
- 列出所有课程
- 获取课程信息
- 更新课程元数据

架构:
- Schema-Driven: 基于 course_schema.yml 的课程元数据管理
- v2.0 格式: 包含 config 配置节，明确 Schema 和 Template 路径
- 路径规范: 所有项目级资源路径相对于项目根目录

版本: v2.0.0
作者: Lesson-Weaver Team
日期: 2025-10-05
"""

import os
import sys
import yaml
import json
import argparse
import shutil
from pathlib import Path
from datetime import datetime
from typing import Dict, List, Optional


class CourseManager:
    """课程管理器"""
    
    def __init__(self, base_dir: Optional[str] = None):
        """初始化课程管理器
        
        Args:
            base_dir: 项目根目录，默认为脚本所在目录的父目录
        """
        if base_dir is None:
            # 获取脚本所在目录的父目录
            self.base_dir = Path(__file__).parent.parent
        else:
            self.base_dir = Path(base_dir)
        
        self.courses_dir = self.base_dir / "courses"
        self.template_dir = self.courses_dir / ".course-template"
        
        # 确保目录存在
        self.courses_dir.mkdir(exist_ok=True)
    
    def _generate_course_id(self) -> str:
        """生成新的课程 ID
        
        Returns:
            str: 课程 ID，格式为 course-001, course-002, ...
        """
        existing_courses = self.list_courses()
        
        if not existing_courses:
            return "course-001"
        
        # 提取所有课程 ID 的数字部分
        max_num = 0
        for course in existing_courses:
            course_id = course.get("course_id", "")
            if course_id.startswith("course-"):
                try:
                    num = int(course_id.split("-")[1])
                    max_num = max(max_num, num)
                except (IndexError, ValueError):
                    continue
        
        # 生成新的 ID
        new_num = max_num + 1
        return f"course-{new_num:03d}"
    
    def _slugify(self, text: str) -> str:
        """将文本转换为 slug 格式
        
        Args:
            text: 原始文本
            
        Returns:
            str: slug 格式的文本
        """
        # 简单实现：转小写，替换空格为连字符
        # 对于中文，保持原样
        slug = text.strip().lower()
        slug = slug.replace(" ", "-")
        slug = slug.replace("_", "-")
        return slug
    
    def create_course(
        self,
        course_name: str,
        course_code: Optional[str] = None,
        instructor: Optional[str] = None,
        total_weeks: int = 16,
        semester: Optional[str] = None
    ) -> Dict:
        """创建新课程
        
        Args:
            course_name: 课程名称
            course_code: 课程代码
            instructor: 授课教师
            total_weeks: 总周次
            semester: 学期
            
        Returns:
            dict: 创建结果
        """
        # 生成课程 ID
        course_id = self._generate_course_id()
        
        # 生成课程目录名
        name_slug = self._slugify(course_name)
        course_dir_name = f"{course_id}-{name_slug}"
        course_path = self.courses_dir / course_dir_name
        
        # 检查目录是否已存在
        if course_path.exists():
            return {
                "success": False,
                "error": f"课程目录已存在: {course_path}"
            }
        
        # 检查模板目录是否存在
        if not self.template_dir.exists():
            return {
                "success": False,
                "error": f"课程模板目录不存在: {self.template_dir}"
            }
        
        try:
            # 复制模板目录
            shutil.copytree(self.template_dir, course_path)
            
            # 删除模板目录中的 README.md
            readme_path = course_path / "README.md"
            if readme_path.exists():
                readme_path.unlink()
            
            # 读取 course.yml 模板
            course_yml_path = course_path / "course.yml"
            with open(course_yml_path, 'r', encoding='utf-8') as f:
                course_data = yaml.safe_load(f)
            
            # 填充实际数据 (v2.0 格式)
            current_time = datetime.now().strftime("%Y-%m-%d")
            
            course_data["course_id"] = course_id
            course_data["course_name"] = course_name
            course_data["course_code"] = course_code or ""
            course_data["instructor"] = instructor or ""
            course_data["semester"] = semester or f"{datetime.now().year}-{datetime.now().year+1} 第一学期"
            course_data["total_weeks"] = total_weeks
            course_data["status"]["lessons_total"] = total_weeks
            course_data["status"]["last_updated"] = current_time
            course_data["metadata"]["created_at"] = current_time
            course_data["metadata"]["updated_at"] = current_time
            course_data["metadata"]["version"] = "2.0"
            
            # 写回 course.yml
            with open(course_yml_path, 'w', encoding='utf-8') as f:
                yaml.dump(course_data, f, allow_unicode=True, sort_keys=False)
            
            return {
                "success": True,
                "course_id": course_id,
                "course_path": str(course_path),
                "course_name": course_name,
                "message": f"课程创建成功: {course_dir_name}"
            }
            
        except Exception as e:
            # 如果创建失败，清理已创建的目录
            if course_path.exists():
                shutil.rmtree(course_path)
            
            return {
                "success": False,
                "error": f"创建课程失败: {str(e)}"
            }
    
    def list_courses(self) -> List[Dict]:
        """列出所有课程
        
        Returns:
            list: 课程列表
        """
        courses = []
        
        if not self.courses_dir.exists():
            return courses
        
        for item in self.courses_dir.iterdir():
            # 跳过模板目录和非目录项
            if not item.is_dir() or item.name.startswith('.'):
                continue
            
            # 读取 course.yml
            course_yml_path = item / "course.yml"
            if not course_yml_path.exists():
                continue
            
            try:
                with open(course_yml_path, 'r', encoding='utf-8') as f:
                    course_data = yaml.safe_load(f)
                
                courses.append({
                    "course_id": course_data.get("course_id", ""),
                    "course_name": course_data.get("course_name", ""),
                    "course_code": course_data.get("course_code", ""),
                    "instructor": course_data.get("instructor", ""),
                    "path": str(item),
                    "status": course_data.get("status", {})
                })
            except Exception as e:
                print(f"警告: 无法读取课程信息 {item}: {str(e)}", file=sys.stderr)
                continue
        
        return courses
    
    def get_course_info(self, course_id: str) -> Optional[Dict]:
        """获取课程信息
        
        Args:
            course_id: 课程 ID
            
        Returns:
            dict: 课程信息，如果不存在返回 None
        """
        courses = self.list_courses()
        
        for course in courses:
            if course["course_id"] == course_id:
                # 读取完整的 course.yml
                course_path = Path(course["path"])
                course_yml_path = course_path / "course.yml"
                
                try:
                    with open(course_yml_path, 'r', encoding='utf-8') as f:
                        return yaml.safe_load(f)
                except Exception as e:
                    return {
                        "error": f"读取课程信息失败: {str(e)}"
                    }
        
        return None
    
    def update_course(self, course_id: str, updates: Dict) -> Dict:
        """更新课程元数据
        
        Args:
            course_id: 课程 ID
            updates: 要更新的字段
            
        Returns:
            dict: 更新结果
        """
        course_info = self.get_course_info(course_id)
        
        if course_info is None:
            return {
                "success": False,
                "error": f"课程不存在: {course_id}"
            }
        
        if "error" in course_info:
            return {
                "success": False,
                "error": course_info["error"]
            }
        
        # 查找课程路径
        courses = self.list_courses()
        course_path = None
        for course in courses:
            if course["course_id"] == course_id:
                course_path = Path(course["path"])
                break
        
        if course_path is None:
            return {
                "success": False,
                "error": f"无法找到课程路径: {course_id}"
            }
        
        try:
            # 更新数据
            for key, value in updates.items():
                if key in course_info:
                    course_info[key] = value
            
            # 更新时间戳
            course_info["metadata"]["updated_at"] = datetime.now().strftime("%Y-%m-%d")
            
            # 写回文件
            course_yml_path = course_path / "course.yml"
            with open(course_yml_path, 'w', encoding='utf-8') as f:
                yaml.dump(course_info, f, allow_unicode=True, sort_keys=False)
            
            return {
                "success": True,
                "message": f"课程信息已更新: {course_id}"
            }
            
        except Exception as e:
            return {
                "success": False,
                "error": f"更新课程信息失败: {str(e)}"
            }


def main():
    """主函数"""
    parser = argparse.ArgumentParser(
        description='课程管理工具 - 创建和管理课程工作空间',
        formatter_class=argparse.RawDescriptionHelpFormatter,
        epilog="""
示例:
  # 创建新课程
  python course_manager.py create --name "字体设计基础" --code "ART-101" --instructor "张三"
  
  # 列出所有课程
  python course_manager.py list
  
  # 获取课程信息
  python course_manager.py info course-001
  
  # 更新课程信息
  python course_manager.py update course-001 --instructor "李四"
        """
    )
    
    subparsers = parser.add_subparsers(dest='command', help='可用命令')
    
    # create 命令
    parser_create = subparsers.add_parser('create', help='创建新课程')
    parser_create.add_argument('--name', required=True, help='课程名称')
    parser_create.add_argument('--code', help='课程代码')
    parser_create.add_argument('--instructor', help='授课教师')
    parser_create.add_argument('--weeks', type=int, default=16, help='总周次（默认16）')
    parser_create.add_argument('--semester', help='学期')
    
    # list 命令
    parser_list = subparsers.add_parser('list', help='列出所有课程')
    
    # info 命令
    parser_info = subparsers.add_parser('info', help='获取课程信息')
    parser_info.add_argument('course_id', help='课程 ID')
    
    # update 命令
    parser_update = subparsers.add_parser('update', help='更新课程信息')
    parser_update.add_argument('course_id', help='课程 ID')
    parser_update.add_argument('--name', help='课程名称')
    parser_update.add_argument('--code', help='课程代码')
    parser_update.add_argument('--instructor', help='授课教师')
    parser_update.add_argument('--semester', help='学期')
    
    args = parser.parse_args()
    
    if not args.command:
        parser.print_help()
        return 1
    
    # 创建管理器
    manager = CourseManager()
    
    # 执行命令
    if args.command == 'create':
        result = manager.create_course(
            course_name=args.name,
            course_code=args.code,
            instructor=args.instructor,
            total_weeks=args.weeks,
            semester=args.semester
        )
        
        if result["success"]:
            print(f"✅ {result['message']}")
            print(f"   课程 ID: {result['course_id']}")
            print(f"   课程路径: {result['course_path']}")
        else:
            print(f"❌ {result['error']}", file=sys.stderr)
            return 1
        
        # 输出 JSON
        print("\n" + json.dumps(result, ensure_ascii=False, indent=2))
    
    elif args.command == 'list':
        courses = manager.list_courses()
        
        if not courses:
            print("未找到任何课程")
            return 0
        
        print(f"共找到 {len(courses)} 个课程:\n")
        print(f"{'课程 ID':<15} {'课程名称':<20} {'课程代码':<10} {'授课教师':<10} {'进度'}")
        print("-" * 80)
        
        for course in courses:
            status = course.get("status", {})
            progress = f"{status.get('lessons_completed', 0)}/{status.get('lessons_total', 0)}"
            
            print(f"{course['course_id']:<15} {course['course_name']:<20} "
                  f"{course['course_code']:<10} {course['instructor']:<10} {progress}")
        
        # 输出 JSON
        print("\n" + json.dumps(courses, ensure_ascii=False, indent=2))
    
    elif args.command == 'info':
        course_info = manager.get_course_info(args.course_id)
        
        if course_info is None:
            print(f"❌ 课程不存在: {args.course_id}", file=sys.stderr)
            return 1
        
        if "error" in course_info:
            print(f"❌ {course_info['error']}", file=sys.stderr)
            return 1
        
        print(f"课程信息: {args.course_id}\n")
        print(yaml.dump(course_info, allow_unicode=True, sort_keys=False))
    
    elif args.command == 'update':
        updates = {}
        if args.name:
            updates["course_name"] = args.name
        if args.code:
            updates["course_code"] = args.code
        if args.instructor:
            updates["instructor"] = args.instructor
        if args.semester:
            updates["semester"] = args.semester
        
        if not updates:
            print("❌ 没有提供要更新的字段", file=sys.stderr)
            return 1
        
        result = manager.update_course(args.course_id, updates)
        
        if result["success"]:
            print(f"✅ {result['message']}")
        else:
            print(f"❌ {result['error']}", file=sys.stderr)
            return 1
        
        # 输出 JSON
        print("\n" + json.dumps(result, ensure_ascii=False, indent=2))
    
    return 0


if __name__ == "__main__":
    sys.exit(main())
