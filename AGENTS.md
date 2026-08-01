# LLM Wiki Agent Schema (Vault Entry)

## 1. Core Positioning (核心定位)
以 Sources 为证据底座、以 Wiki 为可持续综合层、以 Projects 为实际产出层。知识工作是主体，管理日志是辅助。
**强制要求**：Agent 开始任何任务前，必须首先读取本文件作为唯一核心 Schema。

## 2. Organization & Boundaries (组织架构与边界)
- **Sources (`Source_Summaries/`)**: 逻辑证据层。书目型来源（PDF、论文、图书等）继续默认由 Zotero 或外部资料库管理，Obsidian 保存 Source Summary、citekey、处理范围和定位；对话型及用户输入来源（对话、录音、Markdown 等）的 Source Summary 不得替代原始文本。原始文本是否复制进 Vault 需用户授权（复制则保留外部原件）。当用户已经授权创建或更新 Source Summary 时，若原始文本未复制进 Vault，Source Summary 应记录原始文件路径及可用状态；找不到原文时只能标记“当前未找到，溯源暂时中断”，不得声称已丢失。Vault 内原始资料的原文内容不得被静默重写、总结替换或删除；元数据可授权追加；覆盖原文属于 DESTRUCTIVE_CHANGE。
- **Shared Wiki (`Wiki/`)**: 共享知识。跨项目复用的编译层（如 `Wiki/Concepts/`, `Wiki/Artists/`等），持续更新。
- **Projects (`Projects/`)**: 真实项目层。Project 首先是帮助用户继续判断和行动的工作界面，不是 Agent 展示整理能力的归档系统。保存具体产出（如 `Projects/造物与创格/HOME.md`），引用Wiki，必要时可直接引用Source，不冒充通用知识。
- **User Judgment / User Intent**: 知识身份，不再作为物理孤岛。用户的判断、目标和取舍必须保留，严禁被 Agent 改写成来源事实。
- **工具目录排除**: `📜 Templates/`、`👾classFiles/`、`🧪 Script Labs/` 及 `99_Meta/MarpThemes/` 属工具目录。普通 Wiki 查询和摄入不应把它们当成知识页面处理。

## 3. Conventions & Status (规范与状态)
- **默认基础属性**: 所有新建 Wiki 页面默认要求四个基础 YAML 属性：`type`, `status`, `sources`, `related`。除非某页面完成基本职责确实需要额外字段（如 Source Summary 增加 `citekey`），否则不得增加属性。
- **旧笔记触碰迁移**: 遇到旧笔记中带有 `confidence` 等数值置信度，不进行批量替换。仅当发生实质性内容修改时，才将其迁移为文本状态（`stable`, `provisional`, `contested`, `superseded`）。仅修正拼写时不顺手重构。
- **知识身份隔离**: 优先采用段落级声明，且必须在正文句子中保留主语（如：“`Ingold 主张...`”、“`Agent 解释为...`”、“`用户当前确认...`”）。标题不能替代句子中的知识身份。

## 4. Ingestion & Creation (知识摄入与新建)
- **待分类输入**: 用户提供的未经处理材料（对话、录音、文献等）默认属于“待分类输入”，Agent 须先识别其身份。外部文件复制属写入，需展示来源、目标、同名检查，获批后执行，默认保留原件。
- **Wiki 候选例外**: 默认只列出 Wiki 候选（条件：跨项目复用、有明确来源，或明确标注为 Agent 综合、职责独立），获批后建立。当用户在初始指令中明确要求创建指定 Wiki 页面且名称/职责/来源/路径已明确时，可直接归入写入权限无需重复批准，但这不扩展为批量建页。
- **新建条件**: 主题可独立复用；有足够来源支持；边界清楚；不与已有页面重复。新想法先进入 `Inbox.md`。
- **处理冲突**: 仅在两来源对相同问题作出不相容判断时使用 `contradicts`。

## 5. Query & Reference (查询与引用规范)
- 至少记录：文件路径、作者/来源、章节、段落锚点，有页码记录页码。简单查询任务仅读取Wiki，不读STATE，不写回。

## 6. Linting & Maintenance (维护与清理)
- **合并 (Merge)** 与 **拆分 (Split)**: 遇到同义页面、承担过多职责或过长文件，Agent应提出计划并待批准后执行。
- **Legacy Notes (旧笔记触碰迁移)**: 根目录现有的大量 Markdown 文件视为 Legacy Notes。不得批量移动或重新分类。新的长期知识页面不得继续放在根目录。旧笔记只有在当前任务实际使用且边界明确时，才将其迁移到新结构（移动前需检查链接和同名文件）。

## 7. Task Workflows (任务工作流)
**Vault 启动检查**: 任何涉及 Vault 内容、结构或知识身份的任务，在进行实质性分析、提出结构方案或执行写入前，必须先定位并读取 Vault 根目录的 `AGENTS.md`；再检查并读取从 Vault 根目录到目标文件所在目录之间全部适用的局部 `AGENTS.md`；局部规则可以补充或收紧根规则，不得静默取消根规则；发生冲突时停止写入并报告；首次实质性回复中说明实际读取的规则路径、当前权限类型及是否发现局部规则。仅仅依赖旧对话记忆，不算完成规则检查。

**执行权限闸门**: 当没有明确写入授权时，当前任务默认属于 READ_ONLY。分析/规划不构成写入授权；一次批准不延伸至后续。任何获批写入完成后，Agent 必须报告实际修改的文件、执行的操作、未执行的计划操作及验证结果。完成报告后，权限恢复为 READ_ONLY。

### 7.1 执行权限
- **READ_ONLY**: 仅读取分析。不得创建计划、日志、Artifact。
- **SINGLE_SAFE_WRITE**: 写入已知文件，不改结构。
- **STRUCTURAL_CHANGE**: 创建目录、拆分、合并、重命名、移动、迁移、归档或批量修改。必须先展示 Dry Run 并获得明确批准。
- **DESTRUCTIVE_CHANGE**: 覆盖/删除/转移，须对具体文件获批。
- **GOVERNANCE_CHANGE**: 修改全局规则。须展示补丁获批，写后验证。

### 7.2 任务类型
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
