# 2. High-Level Architecture (宏观架构)

## 2.1 Technical Summary (技术摘要)

`Docu-Weaver` Agent 的技术核心是一套**模块化、状态驱动的指令集架构**，该架构通过一个**后端的 Python 执行脚本**来处理实际的文件操作。指令集将复杂的文档生成任务分解为一系列独立的**指令模块**（如：输入解析、计划制定、内容生成等），并由一个**工作流引擎**根据当前**状态**进行调度。这种设计确保了 Agent 在多轮交互中的稳定性和准确性，同时将语言模型与核心业务逻辑（文件处理）分离开来。

## 2.2 Architectural Style (架构风格)

我们将此架构风格定义为“**LLM 前端 + 脚本后端的模块化状态机指令架构**”。它将 Agent 的对话行为抽象为一个有限状态机，其中每个状态都关联着具体的指令模块。LLM 负责与用户交互和流程控制，而 Python 脚本负责所有的数据读取、模板填充和文件写入。

## 2.3 High-Level Project Diagram (宏观架构图)

```
graph TD
    subgraph Docu-Weaver Agent 指令集 (LLM)
        A[用户输入 User Input] --> B{工作流引擎 Workflow Engine};
        B -- 状态: AWAITING_INPUT --> C[模块1: 输入解析 Input Parser];
        C -- 解析成功 --> B;
        B -- 状态: AWAITING_PLAN_CONFIRM --> D[模块2: 计划制定 Plan Generator];
        D -- 计划生成 --> B;
        B -- 用户确认 --> B;
        B -- 状态: GENERATING --> E[模块3: 文档生成 Document Generator];
        E -- 生成内容 --> B;
        B -- 状态: AWAITING_REVIEW --> F[模块4: 交互与反馈 Interface & Feedback];
        F -- 用户反馈 --> B;
        
        G[知识库 Knowledge Base] -.-> C;
        G -.-> E;
        H[状态管理器 State Manager] <--> B;
    end

    E -- 调用 Call --> J[后端: Python 脚本 Backend: Python Script]
    
    A --> I[用户 User];
    F --> I;

    style J fill:#bbf,stroke:#333,stroke-width:2px;
    style B fill:#f9f,stroke:#333,stroke-width:2px;
    style G fill:#ccf,stroke:#333,stroke-width:2px;
    style H fill:#f96,stroke:#333,stroke-width:2px;

```

- **工作流引擎 (Workflow Engine)**: 指令集的核心调度者。
    
- **指令模块 (Instruction Modules)**: 负责执行具体对话任务的独立 Prompt 单元。
    
- **状态管理器 (State Manager)**: 负责跟踪和更新 Agent 的当前对话状态。
    
- **知识库 (Knowledge Base)**: 存储了关于如何解析数据、如何映射内容的核心规则。
    
- **Python 脚本 (Python Script)**: 后端的核心执行者，负责所有文件 I/O 和文档处理。
    

## 2.4 Architectural and Design Patterns (架构与设计模式)

- **状态机模式 (State Machine Pattern)**: Agent 的整个工作流被建模为一个有限状态机。
    
- **模块化设计 (Modular Design)**: 将庞大的指令集拆分为多个高内聚、低耦合的模块。
    
- **角色扮演模式 (Role-Playing Pattern)**: 指令集的第一部分将始终是定义 `Docu-Weaver` 的角色和原则。
    
- **命令模式 (Command Pattern)**: LLM 向 Python 脚本发出明确的命令（如 `generate(data_file, template_file)`），脚本执行后返回结果。
    
