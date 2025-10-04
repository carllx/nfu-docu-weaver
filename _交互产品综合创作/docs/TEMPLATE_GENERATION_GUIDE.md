# 🎯 BMAD模板生成指南

## 📋 问题背景

在项目执行过程中，我们发现没有触发生成以下标准模板：
- `[[TPL_Marpit_Slide]]` - Marpit幻灯片模板
- `[[TPL_Story]]` - 敏捷故事模板
- `[[TPL_Weekly_Unit]]` - 周度单元模板

## 🔍 问题根源分析

### 1. 模板文件状态
- ✅ **模板文件存在**：位于 `templates/legacy/` 目录
- ❌ **位置不正确**：应该在 `templates/` 根目录
- ❌ **缺少生成工具**：没有自动化生成流程

### 2. 触发生成条件缺失
项目缺少以下关键组件：
- 模板生成工具
- 初始化脚本
- 自动化工作流

## 🛠️ 解决方案

### 方案一：使用模板生成工具（推荐）

我们已创建了 `tools/template_generator.py` 工具来解决此问题。

#### 初始化项目模板
```bash
cd /path/to/project
python tools/template_generator.py --init
```

#### 查看可用模板
```bash
python tools/template_generator.py --list
```

#### 生成具体模板
```bash
# 生成Story模板
python tools/template_generator.py --generate TPL_Story --week 2 --epic 1 --type content_production

# 生成周度单元模板
python tools/template_generator.py --generate TPL_Weekly_Unit --week 2 --epic 1

# 生成幻灯片模板
python tools/template_generator.py --generate TPL_Marpit_Slide --week 2 --epic 1
```

### 方案二：手动模板管理

#### 1. 模板位置确认
模板文件现在位于：
```
/templates/
├── TPL_Marpit_Slide.md
├── TPL_Story.md
└── TPL_Weekly_Unit.md
```

#### 2. 手动生成流程
```bash
# 1. 复制模板
cp templates/TPL_Story.md docs/stories/2.1.story.md

# 2. 编辑变量替换
# 使用编辑器替换 {{week_num}}, {{epic_num}} 等变量

# 3. 生成其他文件
cp templates/TPL_Weekly_Unit.md content/weekly-units/Week_02.md
cp templates/TPL_Marpit_Slide.md content/slides/Week_02.marpit.md
```

## 📋 模板使用规范

### 变量替换规则

| 变量 | 说明 | 示例 |
|------|------|------|
| `{{week_num}}` | 周次编号 | 1, 2, 3... |
| `{{week_num_padded}}` | 补零周次 | 01, 02, 03... |
| `{{epic_num}}` | 章节编号 | 1, 2, 3... |
| `{{assignee_name}}` | 负责人名称 | Mary, Developer |
| `{{story_type}}` | Story类型 | content_production, slide_production |

### 文件命名规范

- **Story文件**: `{epic_num}.{story_num}.story.md`
- **周度单元**: `Week_{week_num_padded}.md`
- **幻灯片**: `Week_{week_num_padded}.marpit.md`

## 🚀 最佳实践

### 1. 项目初始化
```bash
# 新项目开始时执行
python tools/template_generator.py --init
```

### 2. 批量生成
```bash
# 为第二周生成所有必要文件
python tools/template_generator.py --generate TPL_Story --week 2 --epic 1
python tools/template_generator.py --generate TPL_Weekly_Unit --week 2 --epic 1
python tools/template_generator.py --generate TPL_Marpit_Slide --week 2 --epic 1
```

### 3. 质量检查
- 确认所有变量已正确替换
- 验证文件路径和命名规范
- 检查模板内容的完整性

## 🔧 高级配置

### 自定义模板
在 `templates/` 目录下添加新的 `.md` 模板文件，工具会自动识别。

### 批处理脚本
创建批处理脚本自动化生成流程：
```bash
#!/bin/bash
# generate_week.sh
WEEK=$1
EPIC=$2

python tools/template_generator.py --generate TPL_Story --week $WEEK --epic $EPIC
python tools/template_generator.py --generate TPL_Weekly_Unit --week $WEEK --epic $EPIC
python tools/template_generator.py --generate TPL_Marpit_Slide --week $WEEK --epic $EPIC

echo "Week $WEEK templates generated successfully!"
```

## 📚 相关文档

- [SOP v10.2 - 工作流操作手册](../docs/sop.md)
- [架构设计文档](../docs/architecture/3-详细架构设计-detailed-architecture.md)
- [BMAD模板规范](../.bmad-core/utils/bmad-doc-template.md)

## 🎯 总结

**触发生成模板的关键条件**：

1. ✅ **模板文件存在**：现在位于正确位置
2. ✅ **生成工具可用**：`tools/template_generator.py`
3. ✅ **初始化流程**：`--init` 命令
4. ✅ **变量替换机制**：自动替换 `{{variable}}` 占位符

**使用建议**：
- 新项目开始时先执行 `--init`
- 每周开始前使用 `--generate` 生成所需模板
- 定期检查模板文件的完整性和正确性

---

*最后更新: 2025-01-XX | 作者: BMAD团队*



