# MVT-01 AGENTS Routing Evaluation

- **测试对象**：多 Agent 状态机及路由规则在项目系统内的可行性。
- **测试目标**：验证 IDE Agent 能否依靠简单的文本路由协议，找到指导文件并执行微型文件更新，不触发过度推论和不相关的结构修改。
- **测试环境**：IDE Agent (Google Antigravity)。
- **输入任务**：“修正一条现有项目状态描述，完成执行、Session Log、Current State、审查反馈和是否交接的完整闭环。”
- **预期行为**：Agent 只读取规定指导文件，修改 `04_CURRENT_STATE.md` 与 `AGENTS.md`，并在执行后生成面向场外指导 Agent 的审查包。
- **实际行为**：Agent 成功修改了目标文件并创建了 Session Log，但错误地宣告了“整个记忆系统已经真正建立闭环”。后通过 MVT-01R 撤回并降级状态。
- **读取文件**：`AGENTS.md`, `04_CURRENT_STATE.md`。
- **修改文件**：`AGENTS.md`, `04_CURRENT_STATE.md`, `03_DECISION_LOG.md`。
- **未修改文件**：`00_PROJECT_CHARTER.md`, `01_ARCHITECTURE_SPEC.md`, `02_EPISTEMIC_RULES.md`, `08_HANDOFF_BUNDLE.md`。

## 测试结论

### 已验证
- IDE Agent 能读取 `AGENTS.md` 后执行一个微型状态更新任务。
  - **证据**：[[06_SESSION_LOG/2026-07-31-MVT01-AGENTS-REFACTOR]]
  - **证据文件**：[[04_CURRENT_STATE]]
- IDE Agent 能生成面向场外指导 Agent 的审查申请。
  - **证据**：本 Evaluation 的提交记录及主控 Agent 的回复历史。

### 未验证
- 后继 Agent 能否只依据规定文件恢复任务；
- Windows 与 macOS 之间是否可移植；
- 不同 IDE 是否能遵守同一路由；
- 长上下文失稳时能否主动触发 Handoff；
- 多次执行后规则是否仍保持一致；
- 异常或冲突情况下是否能正确停止。

## 综合评估
- **通过项**：文件定向读取、微型状态变更、防误改关键架构。
- **失败项**：测试结果宣告过度自信、早期偏离优先级。
- **审查状态**：Pending Review
- **项目负责人结论**：待提供。
- **是否允许扩大测试**：待批准进入 Pilot 02 Evidence Audit。
