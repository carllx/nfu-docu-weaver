# LLM Wiki Agent Schema (Vault Entry)

## 1. Core Positioning (核心定位)
以 Sources 为证据底座、以 Wiki 为可持续综合层、以 Projects 为实际产出层、以 Personal Thinking 保存用户判断。知识工作是主体，管理日志是辅助。
**强制要求**：Agent 开始任何任务前，必须首先读取本文件作为唯一核心 Schema。

## 2. Organization & Boundaries (组织架构与边界)
- **Sources (`01_Sources/`)**: 
  证据材料。原始输入（PDF、书籍、访谈等），默认只读。不可随意改写。
- **Shared Wiki (`02_Concepts/`, `Artisti/`等)**: 
  共享知识。跨项目复用的编译层，持续更新。
- **Projects (`03_Projects/`, `COURSE/`等)**: 
  真实项目层。保存具体产出（如课程），引用Wiki，不冒充通用知识。Wiki页面不应承担具体课程时间表和项目管理。
- **Personal Thinking**: 
  用户判断。保存用户的研究判断、假设和决定，不得被Agent自动覆盖。

## 3. Conventions & Status (规范与状态)
- **状态 (Status)**: 
  废弃数值置信度，采用明确的文本状态：
  - `stable`（稳定）
  - `provisional`（暂定/工作假设）
  - `contested`（有争议）
  - `superseded`（已被更新/推翻）
- **术语 (Glossary)**:
  - *Agent Inference*: Agent推论，严禁表述为作者原意。
  - *Pilot*: 试验/原型验证。
  - *Lint*: 检查/审计Wiki健康度。
- **知识身份与隔离**:
  - 不强制逐句打微观标签，优先采用段落级或页面级声明（如：`## 来源中的主张` | `## 综合理解` | `## 争议与反例` | `## 用户当前判断`）。
  - 极端争议区允许使用 `source-claim`, `agent-inference`, `user-judgment` 等旧标签辅助隔离，自然重构前不批量删除。

## 4. Ingestion & Creation (知识摄入与新建)
- **新建条件**: 
  主题可独立复用；有足够来源支持；边界清楚；不与已有页面重复。否则保留在项目Research中。
- **多来源综合**: 
  Wiki以概括为主，短引文作为证据。
- **处理冲突**: 
  仅在两来源对相同问题作出不相容判断时使用 `contradicts`；“视角不同”标记为 `contrasts` 或 `uncertain`。

## 5. Query & Reference (查询与引用规范)
- **引用追踪**: 
  至少记录：文件路径、作者/来源、章节、段落锚点，有页码记录页码。
- **简单查询任务**: 
  仅读取相关 Wiki，不读取 STATE，不写回。

## 6. Linting & Maintenance (维护与清理)
- **合并 (Merge)**: 
  同义或高度重叠页面应提出合并建议，验证无误后执行。
- **拆分 (Split)**: 
  当文件同时承担共享知识与项目安排、或包含多个独立概念、或文件过长时，Agent应提出拆分计划，获得批准后执行。

## 7. Task Workflows (任务工作流)
为防止任务膨胀，规定 Agent 必须严格遵守三级流程：
1. **普通知识任务**（摄入单篇文章、更新概念、建立链接等）：
   - 不读取 `STATE.md`、不生成 Evaluation Report / Session Report / Handoff。
   - 优先更新已有Wiki，必要时才新建。
   - 仅在有**持久且实质性改变**时，在 `LOG.md` 追加单行记录。
2. **结构性任务**（新增页面类型、调整目录结构）：
   - 必须读取 `STATE.md`。更新受影响的 Accepted Decisions、Current Focus 或 Next Actions（遵循容量限制规则）。
   - 只有任务未完成、存在跨会话依赖或下一位Agent必须知道特殊上下文时，才更新 Recent Handoff。
   - 在 `LOG.md` 中记录变更原因。
3. **高风险任务**（批量迁移旧Vault、删除大量页面、修改核心规则等）：
   - 必须提出计划并通过用户明确批准。
   - 执行迁移前必须创建 Git commit、分支或完整快照。
   - 生成执行 diff、进行路径依赖检查。
   - 验证无误后才能归档，保留明确的回滚步骤。

## 8. Hard Rules (核心红线约束)
- **[绝对禁止]** 严禁擅自批量物理删除历史笔记。
- **[绝对禁止]** 严禁将 Sources 称为“绝对真理”或随意改写原意。
- **[绝对禁止]** 不得把推论写成作者原意；不得掩盖争议；不得用高置信度掩盖跨学科跳跃。
- **[绝对要求]** 所有推论必须与作者原意、用户判断严格隔离。
