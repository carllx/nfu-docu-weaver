# Agile Mentorship System Architecture

版本: 2.3

状态: ACTIVE

负责人: architect (架构师)

语言: 标题 (en), 内容 (zh-CN)

## 1. 简介 (Introduction)

本架构文档基于《敏捷指导管理系统 PRD V2.1》进行设计，旨在为系统的实现提供一个清晰、稳健且可执行的技术蓝图。本文档定义了系统的核心设计原则、数据模型、工作流以及目录结构，作为所有AI代理进行开发和操作的最高准则。

### 1.1 变更日志 (Change Log)

|   |   |   |   |
|---|---|---|---|
|**日期**|**版本**|**描述**|**作者**|
|2025-09-01|2.0|基于PRD V2.0创建的初始版本|architect|
|2025-09-01|2.1|强化“配置驱动”机制，明确`system_config.md`的核心引擎地位|architect|
|2025-09-01|2.2|新增“双层知识库”模型，定义实体素材库架构|architect|
|2025-09-01|2.3|新增`docs/stories`目录定义与开发工作流，补全架构闭环|architect|

## 2. 高级架构 (High-Level Architecture)

### 2.1 技术摘要 (Technical Summary)

本系统采用一种创新的“**文档即数据库 (Docs-as-Database)**”架构。它是一个无传统后端、无数据库的服务模式，所有的数据和状态都通过AI代理直接读写项目仓库中的Markdown文件来维护。系统的核心是一个中央索引文件，它像数据库的索引一样工作，为AI代理提供所有数据实体的关系图谱。**整个系统的动态行为由一个外部配置文件 (`config/system_config.md`) 驱动，这是实现系统高度可复用性和易于维护性的关键机制。**

### 2.2 核心设计原则 (Core Design Principles)

本系统严格遵循以下四个核心设计原则，以满足PRD中定义的目标：

1. **配置驱动 (Configuration-Driven)**
    
2. **实体关系化 (Entity-Relationship Model)**
    
3. **中央索引 (Single Source of Truth)**
    
4. **命令驱动接口 (Command-Driven Interface)**
    

### 2.3 系统架构图 (System Architecture Diagram)

```
graph TD
    subgraph "用户层 (User Layer)"
        A["导师 (AI IDE)"]
    end

    subgraph "交互层 (Interaction Layer)"
        B["TEACHER_GUIDE.md (命令手册)"] -- "提供可用命令" --> A
    end
    
    subgraph "驱动层 (Driving Layer)"
        D1["config/system_config.md<br><b>[系统引擎]</b>"]
    end

    subgraph "代理层 (Agent Layer)"
        C["BMAD Agents (pm, po, sm, dev, etc.)"]
    end

    subgraph "数据与文档层 (Data & Docs Layer)"
        D["项目仓库 (Project Repository)"]
        D2["docs/ (核心文档, 如prd.md)"]
        D3["docs/cohort_registry.md (中央索引)"]
        D4["cohort_data/ (实体数据与素材库)"]
        D5["templates/ (模板)"]
        D6["docs/stories/ (执行单元)"]
    end

    A -- "执行命令" --> C
    D1 -- "<b>==> 驱动/提供规则 ==></b>" --> C
    C -- "读取/写入" --> D
    D2 -.-> C
    C -- "查询/更新" --> D3
    D3 -- "链接到" --> D4
    C -- "生成/管理素材" --> D4
    D5 -- "用于生成文档" --> C
    C -- "生成/读取" --> D6
```

### 2.4 配置驱动机制 (Configuration-Driven Mechanism)

`config/system_config.md` 是本架构的**核心引擎**。它将易变的业务规则（每年都不同的日期、要求）与稳定的系统逻辑（如何读写文件、如何建立关系）彻底解耦，是系统长期可维护性的基石。

## 3. 数据模型与实体定义 (Data Model & Entities)

### 3.1 核心实体 (Core Entities)

系统定义了三个核心实体，每个实体实例都作为一个独立的**目录**存在。

- **学生 (Student)**
    
    - **ID 格式**: `S_YYYY_##`
        
    - **目录路径**: `cohort_data/students/[ID_Name]/`
        
- **毕业创作 (Creative Project)**
    
    - **ID 格式**: `CP_YYYY_A##`
        
    - **目录路径**: `cohort_data/creative_projects/[ID_Name]/`
        
- **毕业论文 (Thesis)**
    
    - **ID 格式**: `T_YYYY_##`
        
    - **目录路径**: `cohort_data/theses/[ID_Name]/`
        

### 3.2 中央索引 (The Central Index)

- **文件**: `docs/cohort_registry.md`
    
- **作用**: 系统的“数据库索引”，维护所有实体的注册、核心元数据和关系链接。
    

### 3.3 实体关系图 (Entity-Relationship Diagram)

```
erDiagram
    STUDENT {
        string student_id PK
        string name
        string status
    }
    CREATIVE_PROJECT {
        string project_id PK
        string title
        string status
    }
    THESIS {
        string thesis_id PK
        string title
        string status
    }

    STUDENT ||--o{ CREATIVE_PROJECT : "is member of"
    STUDENT ||--|{ THESIS : "authors"
```

### 3.4 知识库架构 (Knowledge Base Architecture)

本系统采用“**双层知识库**”模型，以分离权威的全局知识与动态的个体知识。

- **全局知识库 (Global KB)**: 由 `config/system_config.md` 定义，提供通用的方法论和学术要求。
    
- **实体知识库 (Entity KB)**: 在每个实体目录内部动态生成，存放过程性材料。
    

## 4. 核心工作流 (Core Workflows)

### 4.1 师生反馈与指导循环 (Feedback & Guidance Loop)

此工作流关注于对已存在的实体进行反馈和状态更新。

```
sequenceDiagram
    participant T as 导师
    participant P as PM Agent
    participant PO as PO Agent
    participant FS as 文件系统

    T->>P: 1. 执行 `*pm create-doc student-feedback --entity-id [ID]`
    activate P
    P->>FS: 2. 生成报告并写入 `.../[ID_Name]/_feedback_archive/`
    deactivate P

    T->>PO: 3. 执行 `*po update-status --entity-id [ID] --status [NewStatus]`
    activate PO
    PO->>FS: 4. 修改 `docs/cohort_registry.md`
    deactivate PO
```

### 4.2 开发与故事生成工作流 (Development & Story Generation Workflow)

此工作流定义了从宏观需求到微观实现的核心开发流程，是系统价值创造的主线。

```
sequenceDiagram
    participant T as 导师
    participant PO as PO Agent
    participant SM as SM Agent
    participant DEV as DEV Agent
    participant FS as 文件系统

    T->>PO: 1. 执行 `*po shard-doc docs/prd.md prd`
    activate PO
    PO->>FS: 2. 读取 prd.md 并创建 `docs/prd/` 目录及分片文件
    deactivate PO

    T->>SM: 3. (新会话) 执行 `*sm create`
    activate SM
    SM->>FS: 4. 读取 `docs/prd/` 中下一个未完成的Story需求
    SM->>FS: 5. 在 `docs/stories/` 目录下创建新的Story文件 (e.g., 1.1.story.md)
    deactivate SM
    
    T->>T: 6. (手动) 评审Story文件, 将状态从 `Draft` 改为 `Approved`

    T->>DEV: 7. (新会话) 执行 `*dev` 并提供已批准的Story内容
    activate DEV
    DEV->>FS: 8. 根据Story指令创建/修改 `config/` 或 `cohort_data/` 中的文件
    DEV->>FS: 9. 更新Story文件状态为 `Review`
    deactivate DEV
```

## 5. 目录结构与完整性 (Directory Structure & Integrity)

### 5.1 源文件树 (Source Tree)

```
/
├── 📄 TEACHER_GUIDE.md
│
├── 📂 config/
│   └── 📄 system_config.md      # [核心引擎] 驱动整个系统的动态规则
│
├── 📂 docs/
│   ├── 📄 prd.md                 # 原始需求文档 (合并视图)
│   ├── 📂 prd/                   # PRD分片 (工作目录)
│   ├── 📄 architecture.md        # 原始架构文档 (合并视图)
│   ├── 📂 architecture/          # 架构分片 (工作目录)
│   ├── 📄 cohort_registry.md     # [中枢] 所有实体的中央索引
│   ├── 📂 stories/               # [执行单元] 存放由SM代理生成的、可独立执行的用户故事
│   └── 📄 system_integrity_checklist.md
│
├── 📂 cohort_data/
│   ├── 📂 students/
│   │   └── 📂 [Student_ID_Name]/      # [实体知识库]
│   │       ├── 📄 index.md             # 入口：学生仪表盘
│   │       ├── 📂 _research/           # 素材：个人研究、文献
│   │       ├── 📂 _drafts/             # 素材：论文/创作草稿
│   │       └── 📂 _feedback_archive/   # 素材：反馈归档
│   │
│   ├── 📂 creative_projects/
│   │   └── 📂 [Project_ID_Name]/      # [实体知识库]
│   │       ├── 📄 index.md             # 入口：项目仪表盘
│   │       ├── 📂 _research/           # 素材：文献研究
│   │       ├── 📂 _drafts/             # 素材：草稿版本
│   │       ├── 📂 _assets/             # 素材：视觉资产
│   │       └── 📂 _feedback_archive/   # 素材：反馈归档
│   │
│   └── 📂 theses/
│       └── 📂 [Thesis_ID_Name]/       # [实体知识库]
│           ├── 📄 index.md             # 入口：论文仪表盘
│           ├── 📂 _research/           # 素材：文献综述
│           ├── 📂 _drafts/             # 素材：章节草稿
│           └── 📂 _feedback_archive/   # 素材：反馈归档
│
└── 📂 templates/
    └── 📄 feedback-report.md
```

### 5.2 架构完整性校验 (Architecture Integrity)

本架构的长期稳健性依赖于 `docs/system_integrity_checklist.md`。它不仅仅是一个文档，更是本系统的“单元测试”和“集成测试”。在对任何核心文件进行重大修改后，必须由`po`代理执行此清单，以确保系统的设计完整性未被破坏。