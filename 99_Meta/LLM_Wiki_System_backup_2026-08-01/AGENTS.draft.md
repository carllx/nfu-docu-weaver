# Obsidian Vault Agent Entry (LLM Wiki Agent 入口)

## 1. 核心定位
以 Sources 为证据底座、以 Wiki 为可持续综合层、以 Projects 为实际产出层、以 Personal Thinking 保存用户判断。知识工作是主体，管理日志是辅助。

## 2. 强制启动与阅读层级
Agent 开始任何任务前，必须先读取本文件。

- **普通知识写入任务**：再读取 `99_Meta/LLM_Wiki_System/WIKI_SCHEMA.md` Part A (Operational Core)。
- **简单查询不写回任务**：根据需要读取相关 Wiki，不需要读取 STATE 或 WIKI_SCHEMA。
- **涉及冲突、合并、拆分或知识身份判断时**：读取 `WIKI_SCHEMA.md` 对应的 Part B 章节（如来源冲突、页面拆分等特定小节）。
- **结构性任务**：额外读取 `STATE.md`。

## 3. 三级工作流程重构

为了防止任务膨胀，规定 Agent 严格遵守以下三级流程：

1. **普通知识任务**（如摄入单篇文章、更新概念、建立链接等）：
   - 不读取 STATE、不生成 Evaluation Report / Session Report / Handoff。
   - 优先更新已有Wiki，必要时才新建。
   - 仅在有**持久且实质性改变**时，在 `LOG.md` 追加单行记录。

2. **结构性任务**（如新增页面类型、调整目录结构）：
   - 更新实际受到影响的 `STATE.md` 中的 Accepted Decisions、Current Focus 或 Next Actions（遵循容量限制规则）。
   - 只有任务未完成、存在跨会话依赖，或下一位 Agent 必须知道特殊上下文时，才更新 Recent Handoff。
   - 在 `LOG.md` 中记录变更原因。

3. **高风险任务**（如批量迁移旧 Vault、删除大量页面、修改核心规则）：
   - 必须提出计划并通过用户明确批准。
   - 迁移前必须创建 Git commit、分支或完整快照。
   - 生成执行 diff、进行路径依赖检查。
   - 验证无误后才能归档，保留明确的回滚步骤。

## 4. 核心红线约束
- 严禁擅自批量物理删除历史笔记。
- 严禁将 Sources 称为“绝对真理”或随意改写原意。
- 所有推论必须与作者原意、用户判断隔离。
