# “Docu-Weaver” Agent 指令集架构文档

## Table of Contents

- [“Docu-Weaver” Agent 指令集架构文档](#table-of-contents)
  - [1. Introduction (引言)](./1-introduction-引言.md)
    - [1.1 Document Purpose (文档目的)](./1-introduction-引言.md#11-document-purpose-文档目的)
    - [1.2 Foundational Framework (基础框架)](./1-introduction-引言.md#12-foundational-framework-基础框架)
    - [1.3 Change Log (变更日志)](./1-introduction-引言.md#13-change-log-变更日志)
  - [2. High-Level Architecture (宏观架构)](./2-high-level-architecture-宏观架构.md)
    - [2.1 Technical Summary (技术摘要)](./2-high-level-architecture-宏观架构.md#21-technical-summary-技术摘要)
    - [2.2 Architectural Style (架构风格)](./2-high-level-architecture-宏观架构.md#22-architectural-style-架构风格)
    - [2.3 High-Level Project Diagram (宏观架构图)](./2-high-level-architecture-宏观架构.md#23-high-level-project-diagram-宏观架构图)
    - [2.4 Architectural and Design Patterns (架构与设计模式)](./2-high-level-architecture-宏观架构.md#24-architectural-and-design-patterns-架构与设计模式)
  - [3. Tech Stack (“技术栈”)](./3-tech-stack-技术栈.md)
  - [4. Components (组件详解)](./4-components-组件详解.md)
    - [4.1 Python 脚本 (Backend)](./4-components-组件详解.md#41-python-脚本-backend)
    - [4.2 工作流引擎 (LLM)](./4-components-组件详解.md#42-工作流引擎-llm)
    - [4.3 状态管理器 (LLM)](./4-components-组件详解.md#43-状态管理器-llm)
    - [4.4 知识库 (LLM)](./4-components-组件详解.md#44-知识库-llm)
    - [4.5 模块3: 文档生成 (Document Generator) (LLM)](./4-components-组件详解.md#45-模块3-文档生成-document-generator-llm)
  - [5. Testing Strategy (测试策略)](./5-testing-strategy-测试策略.md)
