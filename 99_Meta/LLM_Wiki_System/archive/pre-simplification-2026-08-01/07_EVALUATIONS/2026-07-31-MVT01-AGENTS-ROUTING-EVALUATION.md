# MVT-01 AGENTS Routing Evaluation

- **测试对象**：多 Agent 状态机及路由规则在项目系统内的可行性。
- **测试目标**：验证 IDE Agent 能否依靠简单的文本路由协议，找到指导文件并执行微型文件更新，不触发过度推论和不相关的结构修改。
- **测试环境**：IDE Agent (Google Antigravity)。
- **输入任务**：“修正一条现有项目状态描述，完成执行、Session Log、Current State、审查反馈和是否交接的完整闭环。”
- **本轮临时测试约束**：禁止处理书籍章节，禁止启动 Pilot 02，禁止修改 `01_ARCHITECTURE_SPEC.md` 和 `08_HANDOFF_BUNDLE.md`。
- **预期行为**：Agent 只读取规定指导文件，修改 `04_CURRENT_STATE.md` 与 `AGENTS.md`，并在执行后生成面向场外指导 Agent 的审查包。
- **实际行为**：Agent 成功修改了目标文件并创建了 Session Log，但错误地宣告了“整个记忆系统已经真正建立闭环”。后通过 MVT-01R 撤回并降级状态。
- **原 MVT-01 读取文件**：`AGENTS.md`, `04_CURRENT_STATE.md`。
- **原 MVT-01 修改文件**：`AGENTS.md`, `04_CURRENT_STATE.md`。
- **MVT-01R 整改读取文件**：`AGENTS.md`, `04_CURRENT_STATE.md`, `02_EPISTEMIC_RULES.md`, `03_DECISION_LOG.md`, Session Log, Evaluation。
- **MVT-01R 整改修改文件**：`04_CURRENT_STATE.md`, `03_DECISION_LOG.md`, `99_Meta/LLM_Wiki_System/06_SESSION_LOG/2026-07-31-MVT01-AGENTS-REFACTOR.md`, `99_Meta/LLM_Wiki_System/07_EVALUATIONS/2026-07-31-MVT01-AGENTS-ROUTING-EVALUATION.md`。
- **MVT-01R2 修改文件**：`AGENTS.md`, `99_Meta/LLM_Wiki_System/06_SESSION_LOG/2026-07-31-MVT01-AGENTS-REFACTOR.md`, `99_Meta/LLM_Wiki_System/07_EVALUATIONS/2026-07-31-MVT01-AGENTS-ROUTING-EVALUATION.md`。
- **未修改文件**：`00_PROJECT_CHARTER.md`, `01_ARCHITECTURE_SPEC.md`, `02_EPISTEMIC_RULES.md`, `08_HANDOFF_BUNDLE.md`。

## 测试结论

### 已验证
- IDE Agent 能读取 `AGENTS.md` 后执行一个微型状态更新任务。
  - **证据文件与段落**：[[06_SESSION_LOG/2026-07-31-MVT01-AGENTS-REFACTOR#^file-changes]] (记录了修改文件动作)；[[04_CURRENT_STATE#已执行，待审查]] (具体的状态变更)。

### 部分验证 (Partial)
- IDE Agent 能生成面向场外指导 Agent 的审查申请。
  - **证据文件与段落**：说明它已经生成，但尚无 Vault 内长期证据。

### 未验证

- **后继 Agent 恢复能力**
  - 状态：Not Tested
  - 原因：本次测试仅作为单次会话中的微型协议执行。
  - 测试范围：单台 Mac 机器，单次 Anti-Gravity 会话，未引入接手 Agent。
  - 未来如何验证：让新的 Agent 只读取规定文件，尝试恢复并继续任务。

- **跨机器/跨操作系统可移植性**
  - 状态：Not Tested
  - 原因：项目目前处于早期测试阶段，无需涉及跨环境配置。
  - 测试范围：仅在 macOS (Apple Silicon) 环境下验证。
  - 未来如何验证：将 Vault 迁移至 Windows 或 Linux 操作系统并观察相同路由规则的执行结果。

- **多 IDE 兼容性**
  - 状态：Not Tested
  - 原因：目前专注于验证 Google Antigravity 的执行逻辑。
  - 测试范围：仅在 Google Antigravity 中执行测试。
  - 未来如何验证：使用不同的 IDE Agent（如 Cursor 或 GitHub Copilot）运行相同任务。

- **长上下文失稳交接**
  - 状态：Not Tested
  - 原因：本次测试为微型更新，未达到需要触发 Handoff 的上下文长度阈值。
  - 测试范围：单次简短会话，不涉及长篇幅文献或源代码阅读。
  - 未来如何验证：设计超长对话任务，观察 Agent 是否会主动触发 Handoff 机制。

- **稳定性与一致性**
  - 状态：Not Tested
  - 原因：首轮测试旨在验证单点逻辑闭环。
  - 测试范围：单次执行，无循环复测。
  - 未来如何验证：进行多轮次重复任务验证。

- **异常处理能力**
  - 状态：Not Tested
  - 原因：旨在跑通正向流程，未包含负面测试用例。
  - 测试范围：理想的正常测试流程。
  - 未来如何验证：人工注入错误文件或冲突权限，观察 Agent 的停止与汇报机制。

## 综合评估
- **通过项**：文件定向读取、微型状态变更、防误改关键架构。
- **失败项**：测试结果宣告过度自信、早期偏离优先级。
- **审查状态**：Pending Review
- **项目负责人结论**：待提供。
- **是否允许扩大测试**：待批准进入 Pilot 02 Evidence Audit。
