# Obsidian Vault Agent Entry (多 Agent 协作路由板)

## 1. 项目核心哲学

本路由入口作为整个 Obsidian Vault 知识系统的长期 Agent 入口，只负责 Agent 状态流转与入口导向。
- 有关项目架构与长期目标，请**严格参考** `00_PROJECT_CHARTER.md` 和 `01_ARCHITECTURE_SPEC.md`，本路由不重复架构定义。

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

**【核心红线】**：修改 `01_ARCHITECTURE_SPEC.md` 前，必须先提出计划并获得用户批准。`08_HANDOFF_BUNDLE.md` 仅允许在交接时更新状态与未决问题，任何对系统架构、交接模板的改变，或擅加正式决定，都必须先提出计划并获得用户批准。

Agent 开始工作前必须回答：
- 当前任务属于哪个项目？处于哪个阶段？
- 本次需要读取哪些文件？哪些目录或文件禁止修改？
- 是否存在需要用户决定的问题？是否需要咨询场外调研 Agent？

所有重要陈述必须遵守 `[[99_Meta/LLM_Wiki_System/02_EPISTEMIC_RULES.md]]` 中的知识身份与证据规则。**不得把 Agent 推论、用户判断和正式决定混为一类。**

## 4. 指导文件变更影响表（两级强制更新）

每次重要任务必更新 Session Log；只有项目阶段、完成状态、主要问题或下一步发生变化时才更新 `04_CURRENT_STATE.md`。

| 本次发生的变化 | 必须检查或更新 |
| --- | --- |
| 项目初衷或长期目标变化 | Charter、Decision Log、Current State、Handoff |
| 系统结构或目录职责变化 | Architecture Spec、Decision Log、Current State、AGENTS |
| 证据或推论规则变化 | Epistemic Rules、Decision Log、AGENTS |
| 正式接受或拒绝方案 | Decision Log、Current State |
| 当前任务完成或阻塞 | Current State、Session Log |
| 下一阶段顺序变化 | Roadmap、Current State、Decision Log |
| Agent 工作流程变化 | AGENTS、Decision Log (规则复杂时可提拆分建议，但不得自行创建新协议文件) |
| 指导文件联动关系变化 | AGENTS (规则复杂时可提拆分建议，但不得自行创建新映射文件) |
| Pilot 或能力测试完成 | Evaluations、Session Log、Current State |
| 即将切换 Agent 或对话 | Handoff Bundle、Current State、Session Log |

## 5. 多 Agent 路由状态与触发条件

本项目包含 3 类操作角色：IDE 执行 Agent、场外调研／指导 Agent、后继交接 Agent。
IDE Agent 必须在工作流中识别并进入以下 4 种路由状态：

### 5.1 NEED_RESEARCH (咨询场外调研)
- **触发条件**：当前文件不足；需要外部资料、网络调研、最新资料或外部案例；多个来源冲突；Agent 对自身推论置信度不足。
- **输出要求**：暂停执行，整理《场外调研请求》（包括当前问题、已知事实、已有文件、希望返回的结果）。
- **停止条件**：等待场外 Agent 或用户返回调研结果，结果被用户接受前仅作为辅助事实或推论。

### 5.2 NEED_DECISION (申请决策判断)
- **触发条件**：涉及课程价值判断、正式架构调整、任务优先级变动、或多个方案需要用户取舍。
- **输出要求**：整理《决策申请》（包括背景、可用选项、每个选项的影响范围与利弊）。
- **停止条件**：禁止 Agent 自行代做决定。必须等待用户下达正式指示或接受 Proposed 记录。

### 5.3 READY_FOR_REVIEW (申请场外审查)
- **触发条件**：执行完成已下达任务；修改了指导文件；发现了原计划错误；执行结果与预期不一致等。
- **输出要求**：提交《执行反馈》（包含已完成工作、来源与推论的严格区分、读取与修改的文件列表、**具体需要审查的问题**）。
- **停止条件**：在获得明确审查通过前，禁止将状态标记为“完全闭环”或开始下一优先级的高风险任务。

### 5.4 HANDOFF_REQUIRED (生成跨 Agent 交接)
- **触发条件**：上下文过长不稳、存在大量未决问题、会话切换、或无法准确复述目标与约束时。
- **输出要求**：更新 `08_HANDOFF_BUNDLE.md` 中的当前状态、已完成事项、未解决问题和下一步任务。严禁借此改变交接模板或写入新的正式决定。
- **停止条件**：交接包生成后当前 Agent 结束工作，由后继 Agent 接手。
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
