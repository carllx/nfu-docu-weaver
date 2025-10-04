# _CourseCrafter Agent 项目

## 项目简介

本项目旨在设计、开发并迭代一个名为 "课程设计师 (_CourseCrafter)" 的高级 AI 代理 (Agent)。该代理的核心任务是扮演一名**大学数字媒体导师**，接收教师提供的课程讲义，并利用公认的教育学和创意理论，设计出富有深度、趣味性和创造性的课堂实践活动。

## 核心设计理念

_CourseCrafter Agent 并非简单的内容生成器，它的设计基于一套严谨的工作流和可扩展的知识库体系：

- **专家身份 (Persona)**: 代理以一位经验丰富的大学导师身份进行思考和互动。
    
- **理论驱动 (Theory-Driven)**: 它的所有创意都植根于四大核心理论，确保了活动的教学有效性和科学性：
    
    - `[[Bloom's Taxonomy of Educational Objectives]]`
        
    - `[[Kolb's experiential learning cycle]]`
        
    - `[[Gamification in Learning]]`
        
    - `[[The SCAMPER creative thinking model]]`
        
- **动态知识库 (RAG)**: 代理通过 `[[笔记名称]]` 的方式主动引用和学习一个外部知识库（由您维护），确保其专业知识的准确性和可更新性。
    
- **结构化输出**: 代理最终交付的是一份格式统一、内容全面的《课堂实践活动方案》，便于教师直接使用。

## 项目架构

```
_CourseCrafter_Agent_Project/
├── _CourseCrafter.md                  # v1.1版核心指令
├── data/
│   ├── Bloom's Taxonomy of Educational Objectives.md
│   ├── Kolb's experiential learning cycle.md
│   ├── Gamification in Learning.md
│   └── The SCAMPER creative thinking model.md
│
├── docs/
│   ├── prd.md                        # 项目需求文档 (PRD)
│   ├── architecture.md               # 项目架构文档
│   └── stories/
│       └── 01-initial-setup.md       # 开发故事记录
│
├── test-cases/
│   ├── case-01_concept-focused.md    # 测试用例1: 侧重概念的讲义
│   └── case-02_process-focused.md    # 测试用例2: 侧重流程的讲义
│
└── README.md                         # 本文件
```

### 目录说明

- **`_CourseCrafter.md`**: AI代理的核心指令文件（v1.1版）
- **`data/`**: 理论知识库，包含四大核心教育理论文档
    
- **`docs/`**: 项目文档系统
    - 项目需求文档 (PRD) 和架构文档
    - `stories/`: 敏捷开发故事记录，用于版本迭代管理
    
- **`test-cases/`**: 测试用例库
    - 包含不同类型的讲义样本，用于验证代理性能
    - 概念聚焦型和流程聚焦型测试用例

## 核心特性

### 1. 智能框架推荐
- 自动分析讲义内容特点
- 智能推荐适合的创意框架 (SCAMPER 或 游戏化设计)
- 采用"推荐+确认"机制，确保用户参与决策

### 2. 理论驱动设计
- 基于布鲁姆分类学确保学习目标达到"创造"层级
- 运用柯尔布体验学习循环设计完整学习闭环
- 整合游戏化元素和SCAMPER创意思维模型

### 3. 结构化输出
- 8节格式的标准化活动方案
- 包含学习目标、理论基础、实施步骤等完整信息
- 便于教师直接使用和实施

## 如何使用与测试

### 1. 搭建知识库
在 `data/` 文件夹下，确保四大理论的 Markdown 笔记完整且准确。

### 2. 部署代理
将根目录 `_CourseCrafter.md` 中的核心指令部署到您选择的 AI 平台（如 Custom GPT、Claude Projects 等）。

### 3. 测试验证
使用 `test-cases/` 中的测试用例验证代理性能：
- **概念聚焦型测试**: 使用 `case-01_concept-focused.md`，验证是否推荐SCAMPER框架
- **流程聚焦型测试**: 使用 `case-02_process-focused.md`，验证是否推荐游戏化设计框架

### 4. 实际应用
向代理提供您的真实课程讲义，体验完整的活动设计流程。

## 版本信息

- **当前版本**: v1.1
- **核心指令**: `_CourseCrafter.md`
- **知识库版本**: 稳定版 (包含四大核心理论)

## 项目开发

### 开发模式
本项目遵循敏捷迭代的开发模式。所有新功能的构想、bug修复和优化都将作为新的"故事"记录在 `docs/stories/` 文件夹下进行规划和追踪。

### 贡献指南
1. 新功能开发前，请先在 `docs/stories/` 中创建开发故事
2. 知识库更新请直接修改 `data/` 中的相关文档
3. 核心指令修改请更新 `_CourseCrafter.md` 并更新版本号
4. 添加新测试用例请在 `test-cases/` 目录下创建对应文件

### 质量保证
- 使用测试用例验证代理性能
- 定期审查和更新理论知识库
- 收集用户反馈，持续优化指令逻辑

## 技术架构

基于 **RAG (Retrieval-Augmented Generation)** 架构：
- **核心指令**: 定义代理行为逻辑和工作流程
- **知识库**: 可检索的理论文档，支持动态引用
- **分离设计**: 逻辑与知识分离，便于维护和扩展

## 联系与支持

如有问题或建议，请通过以下方式联系：
- 项目文档: 查阅 `docs/` 目录下的相关文档
- 问题反馈: 创建新的开发故事记录
- 功能建议: 在 `docs/stories/` 中提交新故事提案

---

**让我们一起打造更好的创意教学工具！** 🎓✨