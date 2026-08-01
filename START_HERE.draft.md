# START HERE: Obsidian LLM Wiki 用户指南

欢迎进入 Obsidian LLM Wiki 系统。本指南专为人类用户（而非 Agent）编写，旨在帮助你快速理解系统的核心逻辑和日常操作规范。

## 1. 这个系统是用来做什么的？ (What is this system for?)
这是一个由人类与 AI Agent 共同维护的**长期知识系统**。它建立在现有的复杂 Obsidian Vault 之上，其核心目标是解决笔记定位难、复用难以及资料混杂的问题。系统通过建立严格的逻辑层（证据、知识、项目），让 Agent 负责知识的整理与更新（整理地图），而人类保留对创作、教学与研究的最终决定权（掌握方向）。

## 2. 什么是 Sources、Wiki、Projects？ (What are Sources, Wiki, Projects?)
本系统将知识库划分为明确的逻辑层：
- **Sources (证据底座)**：如 `01_Sources/`。包含 PDF、书籍转换文本、访谈等原始资料。它们是只读的证据材料，绝非“绝对真理”，不可被 Agent 随意改写。
- **Wiki (共享知识)**：如 `02_Concepts/`、`Artisti/`。这是跨项目复用的“编译层”。Agent 通过阅读 Sources，在这里不断更新跨来源的综合概念、方法和人物卡片。
- **Projects (项目产出)**：如 `03_Projects/`、`COURSE/`。真实的输出层（如《造物与创格》课程）。它直接引用 Wiki 中的知识，用于安排具体的日程、任务和交付物，避免将单次项目的特殊安排混入通用知识。

## 3. 如何添加一个 Source？ (How to add a source?)
当你获得新的资料（书籍、PDF 的 Markdown 转换文本等）时，请直接将其放入 `01_Sources/` 或相应的原始资料目录中。保持其只读状态，不要对其进行二次加工。Agent 会负责读取这些材料，并将其精华提取、编译到 Wiki 页面中。

## 4. 有新想法应该放在哪里？ (Where to put a new idea?)
- 请统一将临时或未成形的灵感放入 **Inbox.md** 中作为暂存。
- 对于后续处理：
  - 有明确产出和目标的想法，转移到对应的 **Project** 中。
  - 针对特定课程的未解决疑问，转移到对应项目 `HOME.md` 的 **Open Questions** 中。
  - 可跨项目复用的理解和概念，由 Agent 整理更新至 **Wiki** 中。
  - 一次性无价值的想法，直接归档。
- **不再设立庞大且孤立的 Personal Thinking 文件夹。**

## 5. Agent 完成任务后会更新什么？ (What will Agent update after tasks?)
- **常规知识任务**（如阅读资料、建立链接）：Agent 优先更新或新建 Wiki 页面。如果有实质性变更，会以规范的 Git commit 形式记录变化（逐步取代 LOG.md）。
- **结构性任务**（如新建目录或大范围重构）：Agent 会更新对应项目目录下的 `HOME.md`。全局 `STATE.md` 将逐渐弃用并归档。

## 6. 哪些规则来自 Karpathy 的原生构想，哪些是我们的扩展？ (Origin of Rules)
- **Karpathy 的原始规则**：
  - “LLM Wiki”核心思想：将 LLM 视为编译器，原始资料 (Sources) 只是代码，Agent 负责将其编译为可持续阅读和更新的知识层 (Wiki)。
  - 架构逻辑：Sources 默认只读，Wiki 是持续更新的编译层，利用 Index 作为知识地图。
- **本项目的定制扩展 (Our Extensions)**：
  - 引入 `Projects` 层，分离客观知识与主观项目输出。
  - 用户判断与作者原意严格隔离，用户判断不可被 Agent 自动覆盖。
  - Git commit 替代 LOG 记录机制（实验中）。
- **尚未验证的未来建议 (Unverified Future Ideas)**：
  - 复杂的 Wiki 页面模板与属性表（暂时仅要求基础属性）。
  - 自动化的全库 Lint（目前仅要求基础的合并/拆分建议）。

## 7. 出现问题时去哪里排查？ (Where to check if something goes wrong?)
- **历史记录与修改追溯**：使用 `git log` 和 `git show` 检查近期更新记录，取代原先手工维护的 LOG。
- **项目进度卡点**：查看对应 `Projects/某项目/HOME.md` 中的状态与 Open Questions。
- **Agent 行为越界（如误删/篡改文件）**：检查根目录唯一的规则文件 `AGENTS.md`，确认红线是否被正确声明。高风险事故随时通过 Git 历史或分支回滚。

---

## 核心设计理念对照表

| 设计机制 | 为什么需要 | 避免了什么 | 来源 | 何时重审 |
| :--- | :--- | :--- | :--- | :--- |
| **Sources 设为只读底座** | 保留可回查的客观证据 | Agent 篡改原始文献与历史事实 | Karpathy | 核实证据真实性或出现来源冲突时 |
| **Shared Wiki 编译层** | 跨项目复用结构化知识 | 知识碎片化和每次重新理解的开销 | Karpathy | 发现孤立知识、需合并或拆分页面时 |
| **Projects 与 Wiki 独立** | 区分通用知识与具体课程的取舍 | 共享Wiki被某单一课程深度绑死 | Project Custom | 规划新课程、新展览或新研究项目时 |
| **取消庞大的 Thinking 层，启用 Inbox** | 促使想法进入实际流转（项目或知识） | 想法被记录后永久遗忘在深坑中 | Project Custom | 发现 Inbox 堆积超过一定数量无法处理时 |
| **下放 State 至项目 HOME** | 让状态跟踪与实际工作脱节，聚焦具体目标 | 维护全局抽象 State 的成本过高 | Project Custom | 项目完结归档或开启大型新架构调整时 |
| **结构化 Git commit 替代日志** | 工具自动保存了快照、修改者、Diff，无需人工造轮子 | 手工维护繁琐冗长且容易脱节的 LOG 文件 | Project Custom | 当 Agent 无法稳定生成语义化 commit 时 |
