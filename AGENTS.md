# Obsidian Vault Agent Entry (多 Agent 协作路由板)

## 1. 项目核心哲学

本项目以 Sources 为证据底座，以 Wiki 为可修订的综合层，以 Projects 为实际产出层，以 Personal Thinking 保存用户判断，由 Agent 协助维护，但用户保留最终决定权。

本项目借鉴 Karpathy LLM Wiki 的“知识编译层”思想，但项目内部架构以 `00_PROJECT_CHARTER.md` 和 `01_ARCHITECTURE_SPEC.md` 为正式依据。

## 2. 强制启动顺序

Agent 开始任何任务前，必须依次读取：

1. `AGENTS.md`
2. `99_Meta/LLM_Wiki_System/00_PROJECT_CHARTER.md`
3. `99_Meta/LLM_Wiki_System/04_CURRENT_STATE.md`
4. `99_Meta/LLM_Wiki_System/01_ARCHITECTURE_SPEC.md`
5. `99_Meta/LLM_Wiki_System/02_EPISTEMIC_RULES.md`
6. 再读取与当前任务直接相关的 Project、Decision 和 Evaluation 文件。

> **注意**：不要每次读取全部 Session Log。

## 3. 当前任务识别与身份检查

Agent 开始工作前必须回答：
- 当前任务属于哪个项目？处于哪个阶段？
- 本次需要读取哪些文件？哪些目录或文件禁止修改？
- 是否存在需要用户决定的问题？是否需要咨询场外调研 Agent？

所有重要陈述必须识别为：
`source-claim`, `secondary-interpretation`, `agent-inference`, `user-judgment`, `project-decision`, `uncertain`, `question`

## 4. 指导文件变更影响表（两级强制更新）

每次重要任务必更新：`Session Log` 和 `04_CURRENT_STATE.md`。

| 本次发生的变化 | 必须检查或更新 |
| --- | --- |
| 项目初衷或长期目标变化 | Charter、Decision Log、Current State、Handoff |
| 系统结构或目录职责变化 | Architecture Spec、Decision Log、Current State、AGENTS |
| 证据或推论规则变化 | Epistemic Rules、Decision Log、AGENTS |
| 正式接受或拒绝方案 | Decision Log、Current State |
| 当前任务完成或阻塞 | Current State、Session Log |
| 下一阶段顺序变化 | Roadmap、Current State、Decision Log |
| Agent 工作流程变化 | AGENTS、Agent Operating Protocol、Decision Log |
| 指导文件联动关系变化 | Guidance Update Map、AGENTS |
| Pilot 或能力测试完成 | Evaluations、Session Log、Current State |
| 即将切换 Agent 或对话 | Handoff Bundle、Current State、Session Log |

## 5. 场外调研 Agent 与后继 Agent 的触发条件

本项目并非只有当前 IDE Agent。工作系统还包括：1. 场外调研／指导 Agent；2. 后继交接 Agent。

### 5.1 什么时候反馈给场外指导 Agent (申请审查)
执行后主动提交审查的情况包括：修改了正式项目或指导文件；完成任务或发现原计划错误；形成可能影响系统的新推论；执行结果与预期不一致等。
**必须提出具体审查对象**，例如：“请审查这次结构变化是否需要写入 Architecture Spec”。

### 5.2 什么时候咨询场外调研 Agent
遇到以下情况应暂停，整理问题交给场外调研 Agent：当前文件不足；需要网络调研、最新资料；多个来源冲突；需要比较方案；Agent 对自己的推论置信度不足等。

### 5.3 什么时候写给后继 Agent 的交接
如果当前 Agent 无法准确复述目标、约束、来源身份和下一步，或上下文过长、存在大量未决问题、即将结束会话时，必须立即交接，生成或更新 `08_HANDOFF_BUNDLE.md`。

## 6. 任务完成检查表 Definition of Done

IDE Agent 只有在以下问题全部打勾后，才能声称任务完成：
- [ ] 原任务是否完成？
- [ ] 是否只读取了必要文件？
- [ ] 是否列出所有修改文件？
- [ ] 是否区分来源事实、二手解释、Agent 推论、用户判断和正式决定？
- [ ] 是否检查了推论过强问题？
- [ ] 是否更新 Session Log？
- [ ] 是否更新 Current State？
- [ ] 是否检查 Decision Log？
- [ ] 是否检查 Architecture Spec 与 Epistemic Rules 是否受影响？
- [ ] 是否检查 AGENTS.md 或指导路径是否受影响？
- [ ] 是否需要场外 Agent 审查？
- [ ] 是否存在需要用户决定的问题？
- [ ] 是否需要更新 Handoff Bundle？
- [ ] 下一步最小任务是否清晰？
