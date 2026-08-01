# START HERE: Obsidian LLM Wiki 用户指南

欢迎进入 Obsidian LLM Wiki 系统。本指南专为人类用户（而非 Agent）编写，旨在帮助你快速理解系统的核心逻辑和日常操作规范。

## 1. 这个系统是用来做什么的？ (What is this system for?)
这是一个由人类与 AI Agent 共同维护的**长期知识系统**。核心目标是解决笔记定位难、复用难以及资料混杂的问题。系统通过建立严格的逻辑层（证据、知识、项目），让 Agent 负责知识的整理与更新，而人类保留对创作、教学与研究的最终决定权。

## 2. 什么是 Sources、Wiki、Projects？ (What are Sources, Wiki, Projects?)
本系统将知识库划分为明确的逻辑层：
- **Sources (证据底座)**：逻辑证据层。原始文献（PDF/快照）默认交由 Zotero 或外部管理。Obsidian 中默认保存 Source Summary。历史遗留的原始笔记保持只读，不强制迁移。
- **Wiki (共享知识)**：如 `02_Concepts/`。跨项目复用的“编译层”。Agent 在这里不断更新跨来源的综合概念。
- **Projects (项目产出)**：如 `03_Projects/`。真实的输出层。直接引用 Wiki 知识用于具体日程安排和交付物。

## 3. 我平时只需要做什么？ (Daily Workflow)
- **遇到一篇新资料**：存入 Zotero，然后呼叫 Agent 在 Vault 中摄入生成 Summary。
- **产生一个新想法**：顺手写进根目录的 `Inbox.md`。
- **继续做某个课程/项目**：打开该项目的 `HOME.md`，并让 Agent 检查相关 Wiki 与 Inbox。
- **想找已有知识**：从 Shared Wiki 的 `INDEX.md` 开始。
- **Agent 做错了事**：查看 Git diff 或直接恢复上一个 commit。

## 4. 有新想法应该放在哪里？ (Where to put a new idea?)
- 请统一将临时灵感放入 **Inbox.md** 中暂存。
- Inbox 不强制“零收件箱”。当你启动某个 Project，或摄入新来源时，Agent 会根据触发器主动帮你检索 Inbox 中的相关想法，并推动它们向 Project (未决问题) 或 Wiki (有效知识) 沉淀。
- **不再设立庞大的 Personal Thinking 孤岛。**但你的 `User Judgment` 会作为知识身份受到严格保护。

## 5. Agent 会做些什么？ (What will Agent do?)
- 当你调用 Agent 处理任务时，它会优先更新 Wiki 页面，并通过**结构化的 Git Commit** 记录变更（一个连贯意图对应一个 Commit），替代手工日记。
- 对于项目进度的流转，它会更新具体项目的 `HOME.md`。
- **请注意**：Agent 是基于事件触发的被动助手，它不会在没有你指令的情况下在后台“偷偷”全自动清理库。

## 6. 哪些规则来自 Karpathy 的原生构想，哪些是我们的扩展？ (Origin of Rules)
- **Karpathy 原始规则**：
  - 资料底座只读、Wiki 作为持续编译层、使用 Index 作为知识地图。
- **本项目的定制扩展**：
  - 引入 `Projects` 独立层保护具体产出；严格隔离用户判断与作者原意。
  - Git Commit 接管日常日志机制；用 `Inbox` 替代沉寂的想法坟场。
- **尚未验证的未来建议 (留待 V2)**：
  - 复杂的属性表查询、全库批量 Lint、自动定时清理、旧笔记自动重构脚本。

## 7. 出现问题时去哪里排查？ (Troubleshooting)
- **历史修改追溯**：使用 `git log` 和 `git show` 检查近期更新。
- **任务与项目卡点**：查看对应 `Projects/某项目/HOME.md` 中的 Next Actions 或跨会话生成的 `TASK_HANDOFF.md`。
- **Agent 越界操作**：检查唯一的规则文件 `AGENTS.md`，高风险事故随时通过 Git 回滚。
