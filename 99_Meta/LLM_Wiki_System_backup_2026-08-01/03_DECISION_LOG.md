# Decision Log

本文件只追加正式决定，不记录全部讨论。

## 决定记录格式

### DEC-YYYY-MM-DD-编号：决定名称

- 状态：Proposed / Accepted / Rejected / Superseded
- 日期：
- 决定者：
- 背景：
- 决定：
- 理由：
- 被拒绝方案：
- 影响范围：
- 后续动作：

---

## 已接受决定

### DEC-001：采用项目驱动、知识共享的覆盖层架构

- 状态：Accepted
- 决定：暂不重构整个 Vault；先围绕《造物与创格》进行真实项目测试。
- 理由：现有 Vault 复杂，直接全库迁移风险过高。
- 影响：Wiki 作为共享知识层，课程文件留在 Project。

---

## 待审查决定 (Proposed)

### DEC-002：采用多 Agent 审查与交接工作方式

- 状态：Proposed
- 日期：2026-07-31
- 决定者：待用户确认
- 背景：IDE Agent 负责执行，但复杂调研、价值判断与长上下文交接需要其他 Agent 参与。
- 决定：
  - 区分 IDE 执行 Agent、场外调研／指导 Agent和后继接手 Agent；
  - 重要执行完成后提交审查包；
  - 遇到外部调研、证据冲突或项目边界不清时向场外 Agent 咨询；
  - 上下文失稳或会话切换前更新 Handoff。
- 理由：需要一个持续清醒的架构，防止单一 Agent 过度推论或上下文遗失。
- 影响范围：AGENTS.md、Current State、Session Log、Handoff Bundle。
- 后续动作：完成 MVT-01 评估后，由用户决定 Accepted、Rejected 或继续修订。
