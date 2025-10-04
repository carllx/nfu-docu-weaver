
# 教育家工具箱架构说明

**版本:** 1.0  
**日期:** 2025年9月10日  
**说明对象:** `team-education.yaml` 与智能体文件的引用关系

## 🏗️ 整体架构概览

```
教育家工具箱项目/
├── team-education.yaml          # 智能体团队配置（核心指挥中枢）
├── .roomodes-education          # RooCode 角色选择器配置
├── agents/                      # 智能体定义文件存储
│   ├── course-planner.md        # 课程规划师详细行为定义
│   ├── instructional-designer.md # 教学设计师详细行为定义
│   ├── content-creator.md       # 内容创作者详细行为定义
│   └── project-migrator.md      # 项目迁移智能体定义
├── agents/                  # 教育专用智能体定义（扩展）
├── docs/                        # 项目文档
├── lessons/                     # 教学内容
├── assignments/                 # 作业产出
└── exams/                       # 考试产出
```

## 📋 核心组件说明

### 1. `team-education.yaml` - 智能体指挥中枢

**功能定位:**
- 定义所有智能体的基本属性和能力范围
- 规定智能体间的协作工作流
- 集成教育理论框架约束
