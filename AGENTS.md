# LLM Wiki Agent Schema (Vault Entry)

## 1. Core Positioning (核心定位)
以 Sources 为证据底座、以 Wiki 为可持续综合层、以 Projects 为实际产出层。知识工作是主体，管理日志是辅助。
**强制要求**：Agent 开始任何任务前，必须首先读取本文件作为唯一核心 Schema。

## 2. Organization & Boundaries (组织架构与边界)
- **Sources (`01_Sources/`)**: 逻辑证据层。原始资料（PDF、论文、书目等）默认由 Zotero 或外部资料库管理。Obsidian 默认保存 Source Summary、citekey、处理范围和定位。Vault 内已存在的原始资料保持只读，不强制迁移。
- **Shared Wiki (`02_Concepts/`, `05_Artists/`等)**: 共享知识。跨项目复用的编译层，持续更新。
- **Projects (`03_Projects/`, `COURSE/`等)**: 真实项目层。保存具体产出，引用Wiki，不冒充通用知识。
- **User Judgment / User Intent**: 知识身份，不再作为物理孤岛。用户的判断、目标和取舍必须保留，严禁被 Agent 改写成来源事实。

## 3. Conventions & Status (规范与状态)
- **默认基础属性**: 所有新建 Wiki 页面默认要求四个基础 YAML 属性：`type`, `status`, `sources`, `related`。除非某页面完成基本职责确实需要额外字段（如 Source Summary 增加 `citekey`），否则不得增加属性。
- **旧笔记触碰迁移**: 遇到旧笔记中带有 `confidence` 等数值置信度，不进行批量替换。仅当发生实质性内容修改时，才将其迁移为文本状态（`stable`, `provisional`, `contested`, `superseded`）。仅修正拼写时不顺手重构。
- **知识身份隔离**: 优先采用段落级声明（如：`## 来源中的主张` | `## 综合理解` | `## 用户当前判断`）。

## 4. Ingestion & Creation (知识摄入与新建)
- **新建条件**: 主题可独立复用；有足够来源支持；边界清楚；不与已有页面重复。新想法先进入 `Inbox.md`。
- **处理冲突**: 仅在两来源对相同问题作出不相容判断时使用 `contradicts`。

## 5. Query & Reference (查询与引用规范)
- 至少记录：文件路径、作者/来源、章节、段落锚点，有页码记录页码。简单查询任务仅读取Wiki，不读STATE，不写回。

## 6. Linting & Maintenance (维护与清理)
- **合并 (Merge)** 与 **拆分 (Split)**: 遇到同义页面、承担过多职责或过长文件，Agent应提出计划并待批准后执行。

## 7. Task Workflows (任务工作流)
1. **普通知识任务**：不读取 `STATE.md`。优先更新Wiki。仅在有持久变更时创建 Git Commit 记录。
2. **结构性任务**：必须读取受影响项目的 `HOME.md`。更新焦点与未决问题。
3. **高风险任务**：必须提出计划并通过用户批准。执行前必须创建快照，验证无误后归档。
- **交接机制**: 废除全局 `08_HANDOFF_BUNDLE.md`。多 Agent 跨会话任务仅在对应 Project 内建立临时 `TASK_HANDOFF.md`。任务完成后，有效决定写回 HOME 并提交 Git，随后删除或归档临时文件。
- **INDEX.md**: Shared Wiki 的 `INDEX.md` 仅收录 Shared Wiki 内容，严禁混入 Inbox 或 Project HOME 的临时问题。
- **Inbox 触发器**: Inbox 不强制零收件箱。Agent 仅在三种情况下审阅 Inbox：(1) 开始处理某 Project 时；(2) 摄入新来源完成时；(3) 用户显式要求整理时。

## 8. Hard Rules (核心红线约束)
- **[绝对禁止]** 严禁擅自批量物理删除历史笔记。
- **[绝对禁止]** 严禁将 Sources 称为“绝对真理”或随意改写原意。
- **[绝对禁止]** 不得把推论写成作者原意；不得用高置信度掩盖跨学科跳跃。
- **[绝对要求]** 所有推论必须与作者原意、用户判断严格隔离。
- **[Git Commit 约束]** 一个 Commit 对应一个“连贯的工作意图”，禁止混入无关任务；提交前必须检查工作区 diff，若有无关修改停止自动提交；提交失败时禁止声称完成。
