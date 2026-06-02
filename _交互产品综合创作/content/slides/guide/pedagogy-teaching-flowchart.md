# 📊 教师用教学流程图

> 本文件包含多个 Mermaid 流程图，供教师在黑板讲解时使用。
> 每个图后附有讲解提示，帮助教师快速切入核心概念。

---

## 1. 全链路流程图：从规划到交付

```mermaid
flowchart LR
    subgraph planning["🔵 规划层 WHY & WHAT"]
        direction TB
        A["👩 Analyst - Mary"] -->|产出| B["📄 brief.md"]
        B -->|输入| C["👨 PM - John"]
        C -->|产出| D["📄 prd.md"]
    end

    subgraph implementation["🟢 实施层 HOW"]
        direction TB
        E["👩‍🎨 UX Expert - Sally"] -->|产出| F["📄 front-end-spec.md"]
        F -->|输入| G["👨‍💻 Architect - Winston"]
        G -->|产出| H["📄 architecture.md"]
    end

    subgraph delivery["🟠 交付层 BUILD"]
        direction TB
        I["🤖 Dev Agent"] -->|生成| J["🌐 完整网站"]
    end

    planning -->|"brief + prd 交接"| implementation
    implementation -->|"4份文档作为上下文"| delivery

    style planning fill:#e3f2fd,stroke:#1565c0,stroke-width:2px
    style implementation fill:#e8f5e9,stroke:#2e7d32,stroke-width:2px
    style delivery fill:#fff3e0,stroke:#e65100,stroke-width:2px
```

> 🗣️ **教师讲解提示**：强调三层流水线的单向流动——每层产出的文档是下一层的**唯一输入**。学生作为 PO 贯穿全程，但不直接生产文档，而是**监督和验收**。

---

## 2. 文档依赖关系图

```mermaid
flowchart TD
    BRIEF["📄 brief.md<br/>项目愿景 & 约束"]
    PRD["📄 prd.md<br/>需求 & NFR & 品牌文法"]
    FES["📄 front-end-spec.md<br/>Design Tokens & 组件规范<br/>⭐ 最关键文档"]
    ARCH["📄 architecture.md<br/>CSS Variables 映射 & 项目结构"]
    SITE["🌐 网站代码<br/>index / about / illustrations<br/>products / style.css / script.js"]

    BRIEF -->|"Mary 产出 → John 输入"| PRD
    BRIEF -->|"同时提供给 Sally"| FES
    PRD -->|"NFR + 品牌文法 → Sally 输入"| FES
    PRD -->|"技术约束 → Winston 参考"| ARCH
    FES -->|"Token 定义 → Winston 映射为 CSS Var"| ARCH
    BRIEF -->|上下文| ARCH

    FES -.->|"驱动生成"| SITE
    ARCH -.->|"驱动生成"| SITE

    style FES fill:#fff9c4,stroke:#f57f17,stroke-width:3px
    style SITE fill:#f3e5f5,stroke:#7b1fa2,stroke-width:2px
```

> 🗣️ **教师讲解提示**：请学生注意 `front-end-spec.md` 是**依赖最多、被依赖最多**的核心文档（黄色高亮）。它同时接收 brief 和 prd 的输入，又直接驱动 architecture 和最终代码生成。这就是为什么阶段 3 是**最关键**的。

---

## 3. 角色分层图

```mermaid
flowchart TD
    subgraph student["🎓 学生 = PO（Product Owner）"]
        PO["你自己<br/>Vibe CEO<br/>决策 & 验收"]
    end

    subgraph planLayer["🔵 规划层 — WHY & WHAT"]
        MARY["👩 Analyst<br/>Mary<br/>愿景探索"]
        JOHN["👨 PM<br/>John<br/>需求定义"]
    end

    subgraph implLayer["🟢 实施层 — HOW"]
        SALLY["👩‍🎨 UX Expert<br/>Sally<br/>设计规范"]
        WINSTON["👨‍💻 Architect<br/>Winston<br/>技术架构"]
    end

    subgraph execLayer["⚙️ 执行角色（Architect 下属）"]
        SM["📋 Scrum Master<br/>任务拆分"]
        DEV["💻 Developer<br/>代码实现"]
    end

    PO -.->|"对话 & 指令"| MARY
    PO -.->|"对话 & 指令"| JOHN
    PO -.->|"对话 & 指令"| SALLY
    PO -.->|"对话 & 指令"| WINSTON

    MARY --> JOHN
    JOHN --> SALLY
    SALLY --> WINSTON
    WINSTON --> SM
    SM --> DEV

    style student fill:#fce4ec,stroke:#c62828,stroke-width:2px
    style planLayer fill:#e3f2fd,stroke:#1565c0,stroke-width:2px
    style implLayer fill:#e8f5e9,stroke:#2e7d32,stroke-width:2px
    style execLayer fill:#f5f5f5,stroke:#757575,stroke-width:1px,stroke-dasharray: 5 5
```

> 🗣️ **教师讲解提示**：重点说明两件事——① PO 就是学生自己，不需要额外操作，核心职责是「精准传达意图 + 质量验收」；② SM 和 Dev 是 Architect 的下属执行角色，在本实践中由 Vibe Coding Agent 统一承担，学生无需单独与他们交互。

---

## 4. 核心叙事线图（教学时序）

```mermaid
flowchart LR
    S1["1️⃣ 角色介绍<br/>4个AI角色<br/>+ PO=学生"]
    S2["2️⃣ JTBD 理论<br/>Jobs to be Done<br/>用户需求分析"]
    S3["3️⃣ Brief 阶段<br/>与 Mary 对话<br/>→ brief.md"]
    S4["4️⃣ 低保真案例<br/>展示参考网站<br/>激发想象"]
    S5["5️⃣ PRD 阶段<br/>与 John 对话<br/>→ prd.md"]
    S6["6️⃣ Design Tokens<br/>与 Sally 对话<br/>→ front-end-spec.md"]
    S7["7️⃣ Architecture<br/>与 Winston 对话<br/>→ architecture.md"]
    S8["8️⃣ Vibe Coding<br/>4份文档 → Agent<br/>→ 完整网站 🎉"]

    S1 --> S2 --> S3 --> S4 --> S5 --> S6 --> S7 --> S8

    style S1 fill:#e8eaf6,stroke:#283593
    style S2 fill:#e8eaf6,stroke:#283593
    style S3 fill:#e3f2fd,stroke:#1565c0
    style S4 fill:#fff8e1,stroke:#ff8f00
    style S5 fill:#e3f2fd,stroke:#1565c0
    style S6 fill:#fff9c4,stroke:#f57f17,stroke-width:3px
    style S7 fill:#e8f5e9,stroke:#2e7d32
    style S8 fill:#f3e5f5,stroke:#7b1fa2,stroke-width:2px
```

> 🗣️ **教师讲解提示**：这是一节完整课程的推荐教学节奏。步骤 4「低保真案例」是理论与实践之间的桥梁——在学生完成 brief 后、进入 PRD 前，展示一个参考网站帮助他们建立具象预期。步骤 6（Design Tokens，黄色高亮）是**技术难度最高**的环节，建议预留最多时间，并做现场演示。

---

## 5. 补充：Token 本体论映射速查图

```mermaid
flowchart LR
    subgraph primitive["Primitive 层（物理值）"]
        P1["color.primitive.black<br/>#000000"]
        P2["spacing.primitive.md<br/>16px"]
        P3["radius.primitive.lg<br/>24px"]
    end

    subgraph semantic["Semantic 层（语义引用）"]
        S1["color.semantic.background<br/>.button.primary.default<br/>→ 引用 Primitive"]
        S2["spacing.semantic<br/>.card.padding<br/>→ 引用 Primitive"]
    end

    subgraph css["CSS Variables（代码实现）"]
        C1["--color-primitive-black:<br/>#000000"]
        C2["--color-semantic-bg-btn:<br/>var(--color-primitive-black)"]
    end

    P1 -->|"'{color.primitive.black}'"| S1
    P2 -->|"'{spacing.primitive.md}'"| S2
    S1 -->|"点号 → 连字符 + -- 前缀"| C2
    P1 -->|"直接赋值"| C1

    style primitive fill:#e3f2fd,stroke:#1565c0,stroke-width:2px
    style semantic fill:#e8f5e9,stroke:#2e7d32,stroke-width:2px
    style css fill:#fff3e0,stroke:#e65100,stroke-width:2px
```

> 🗣️ **教师讲解提示**：这是帮助学生理解「三层映射」的核心速查图——Primitive（原始值）→ Semantic（语义引用）→ CSS Variable（代码实现）。强调两个关键转换规则：① Semantic 用 `'{token.name}'` 引用 Primitive；② Token 名到 CSS Variable 的转换是「点号 → 连字符 + `--` 前缀」。
