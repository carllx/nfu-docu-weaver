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

```mermaid
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