# 《交互产品综合创作》课程 - Brownfield Architecture Document

**版本: 1.0 (初始版本)**

**分析日期: 2025-09-01**

**创立者: Mary (Business Analyst)**

## Introduction

这份Brownfield Architecture Documentcaptures了《交互产品综合创作》Obsidian知识库的 CURRENT STATE，包括实际项目结构、文档模式和技术债务。它作为未来AI智能体增强项目的参考文档。

### Document Scope

这份文档专注于Obsidian知识库的实际状态，为AI智能体提供了导航和理解项目的完整参考。文档含有技术债务、现有模式和真实约束条件。

### Change Log

| Date       | Version | Description                 | Author    |
| ---------- | ------- | --------------------------- | --------- |
| 2025-09-01 | 1.0     | Initial brownfield analysis | Mary     |

## Quick Reference - Key Files and Entry Points

### 关键文件用于理解系统

- **Main Entry**: `00_RESOURCE_DASHBOARD.md` (教师的主要管理界面)
- **Configuration**: `.bmad-core/core-config.yaml` (项目配置)
- **Core Business Logic**: `docs/prd.md`, `docs/architecture.md`, `docs/sop.md` (核心业务文档)
- **Template Definitions**: `templates/TPL_Story.md` (Story模板)
- **Key Production Assets**: `src/` 目录中的所有教学资料
- **Integration Scripts**: `tools/frontmatter_tool.py` (YAML属性处理工具)

## High Level Architecture

### Technical Summary

这是一个基于Obsidian的数字化教育内容管理系统，采用BMAD方法论进行AI智能体协作。主要用于管理和自动化生成《交互产品综合创作》课程的教学资料。

### Actual Tech Stack (from project structure)

| Category  | Technology | Version | Notes                      |
| --------- | ---------- | ------- | -------------------------- |
| Markdown Editor | Obsidian | Latest | 核心管理界面和文档编辑 |
| AI Framework | BMAD | Custom | 智能体协作框架 |
| Programming | Python & Shell | 3.x | 工具链脚本 |
| Documentation | Markdown | Standard | 所有文档格式 |
| Database | File System | N/A | 基于文件系统的存储 |

### Repository Structure Reality Check

- **Type**: Monorepo (单一仓库)
- **Package Manager**: 手动管理 (无标准包管理器)
- **Notable**: 混合使用中文和英文文件名，目录结构基于教学章节组织

## Source Tree and Module Organization

### Project Structure (Actual)

```text
项目的根目录/
├── 00_RESOURCE_DASHBOARD.md      # [核心] 教师动态管理仪表盘
├── docs/                         # 核心项目文档层
│   ├── prd.md                    # 产品需求文档 v3.2
│   ├── architecture.md           # 架构文档 v3.3
│   ├── sop.md                    # 工作流操作手册 v10.1
│   ├── COURSE_SYLLABUS.md        # 课程大纲
│   └── brownfield-architecture.md # [新建] 本文档
├── src/                          # 原始素材层
│   ├── 00_INBOX/                 # [缓冲区] 新笔记的唯一入口
│   ├── _IGNORE_DO_NOT_PROCESS/   # [AI禁区] 禁止AI读取
│   ├── epic_01_2d_plane/         # Epic 1: 2D平面设计章节
│   ├── epic_02_3d_space/         # Epic 2: 3D空间章节
│   ├── epic_03_webxr/            # Epic 3: WebXR章节
│   └── shared_assets/            # 跨章节通用资源 (缺失)
├── content/                      # 内容生产层
│   └── weekly-units/             # 生成的周度教学单元
├── stories/                      # 敏捷执行层
├── templates/                    # 模板与规范层
├── tools/                        # 工具集
├── export/                       # 数据交换层 CSV输出
└── .bmad-core/                   # BMAD核心配置 (隐藏目录)
    ├── core-config.yaml          # 项目配置
    └── agents/                   # 智能体定义
```

### Key Modules and Their Purpose

- **00_RESOURCE_DASHBOARD.md**: 教师的主要管理界面，使用Obsidian Base插件动态展示资源
- **docs/ Directory**: 核心规范文档集合，版本化管理
- **src/ Directory**: 教学资料源文件，按章节和周次组织，非常庞大 (数百个文件)
- **stories/ Directory**: 敏捷Story文档存放点，用于任务执行
- **templates/ Directory**: 标准化模板集合
- **tools/ Directory**: Python脚本工具集，自动化处理
- **.bmad-core/ Directory**: BMAD框架的核心配置和智能体定义

## Data Models and APIs

### Data Models

#### YAML Frontmatter Schema
所有的 `src/` 目录下的 `.md` 文件必须包含标准化属性头：

```yaml
---
course_name: "交互产品综合创作"
week_num: 1-15
epic_num: 1-3
sequence: 1-N
type: "理论视频|实践笔记|代码示例|参考资料"
status: "draft|ready|archived"
tldr: "由策展分析师生成的笔记核心摘要"
---
```

#### Story Model Structure
Story文档遵循固定的模式招聘：

```yaml
---
status: "Draft|In Progress|Ready for Review|Approved"
assignee: "智能体名称"
epic: "章节编号"
week: "周次编号"
---

# Story: Week XX - XX任务

## 用户故事
**作为** 一名 [role],
**我希望** [action],
**以便** [benefit].

## 验收标准
[从PRD中引用]

## 开发者笔记
[技术上下文和指令]

## 任务清单
- [ ] 任务项列表

## 执行记录
[完成后的记录]

## QA结果
[审核结果]
```

### API Specifications

- **Core Workflows**: BMAD方法论定义的标准化工作流
- **Handoff Protocol**: 标准化的移交协议
- **Command Interface**: *前缀命令系统

## Technical Debt and Known Issues

### Critical Technical Debt

1. **文件名混合语言**: 中英文文件名混合，缺乏统一命名规范
2. **版本管理不统一**: 不同文档使用不同的版本管理方法
3. **工具脚本依赖**: Python脚本可能有平台兼容性问题
4. **动态仪表盘依赖**: Obsidian插件可能影响可移植性

### Workarounds and Gotchas

- **文件路径问题**: 中文路径可能在某些工具中造成编码问题
- **插件依赖**: Obsidian Base插件是必须的，缺少时仪表盘不可用
- **工具脚本执行**: Python脚本需要适当权限，路径必须正确

## Integration Points and External Dependencies

### External Services

| Service  | Purpose  | Integration Type | Key Files                      |
| -------- | -------- | ---------------- | ------------------------------ |
| Obsidian | 核心编辑器 | GUI应用 | 所有.md文件 |
| BMAD     | AI智能体框架 | Python模块 | .bmad-core/ |

### Internal Integration Points

- **Base插件通信**: 仪表盘通过Obsidian Base插件与知识库通信
- **YAML属性同步**: 在线前matter必须与知识库结构保持同步
- **CSV数据交换**: 仪表盘导出的CSV用于AI智能体读取

## Development and Deployment

### Local Development Setup

1. 安装Obsidian并打开仓库
2. 安装Base插件 (必须)
3. 配置Dataview插件 (可选)
4. 激活BMAD智能体框架
5. 运行核心配置验证

### Build and Deployment Process

- **Build**: 通过Obsidian自然保存
- **Version Control**: 使用Git管理版本
- **Deployment**: 通过Git同步到远程仓库
- **Backup**: 定期导出Obsidian vault数据

## Testing Reality

### Current Test Coverage

- **Unit Tests**: 无 (脚本级测试缺失)
- **Integration Tests**: 通过智能体执行任务验证
- **Manual Testing**: 主要QA方法
- **End-to-End**: Story执行流程测试

### Running Tests

```bash
# 通过智能体执行Story验证测试
python run_story.sh stories/Story_XX.md
```

## 已有内容分析与课程计划

### 内容覆盖情况

#### 已完整体节
- **Epic 1 - 2D平面 (Weeks 1-7)**: Figma基础、原型设计、响应式布局、组件系统
- **Epic 2 - 3D空间 (Weeks 8-10)**: Spline 3D建模和交互基础
- **Epic 3 - WebXR (Weeks 11-15)**: A-Frame WebXR基础 (内容框架存在但需要填充)

#### 内容质量评估
- **理论内容**: 丰富且结构化
- **实践指导**: 包含项目练习
- **资源组织**: 按章节和周次严格分类
- **跨章节一致性**: 需要进一步统一

### 课程优势与改进机会

#### 优势
1. **内容丰富度**: 涵盖完整的交互产品创作流程
2. **结构系统性**: 基于Epic和Week的统一组织
3. **工具链完整**: 从设计到代码的完整链路
4. **实践取向**: 强调动手能力培养

#### 改进机会
1. **内容密度**: 早期周次内容过于密集
2. **跨媒介连接**: WebXR与前面的内容衔接不够流畅
3. **评估标准**: 需要更详细的学习成果量化
4. **个性化学习**: 缺乏适应性学习路径

## 文件清单与管理

### 关键文件统计
- **总文件数**: src/ 下约 200+ 个 markdown 文件
- **教学视频**: 100+ 个交互教程
- **实践项目**: 每周至少一个项目练习
- **理论笔记**: 包含参考资料和最佳实践

### 文件类型分布
- **理论视频整理**: 以题号命名的0XX格式文件
- **项目练习**: class-project-NNN格式
- **引导内容**: 00 引导格式的目录索引
- **高级专题**: 未编号的专题文件

## 未来发展考虑

### 增强建议
1. **AI智能体更新**: 升级到更新的BMAD版本
2. **自动化优化**: 改善工具脚本的可靠性和平台兼容性
3. **国际化支持**: 改进多语言文件处理
4. **备份策略**: 实施更robust的版本管理

### 技术迁移风险
- 当前的Obsbian+Base插件组合可能有过期风险
- 需要评估向其他文档平台迁移的可行性

---

这份Brownfield Architecture Document反映了项目的真实状态，为未来的增强和优化提供了基础。文档将随着项目的发展逐步完善。
