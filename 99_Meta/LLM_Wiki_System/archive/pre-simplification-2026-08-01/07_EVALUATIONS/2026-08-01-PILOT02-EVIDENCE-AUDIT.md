# 2026-08-01-PILOT02-EVIDENCE-AUDIT

## 1. 审计目标
实质审查 Pilot 02 现有三张知识页面中的主张是否忠实于原始来源，是否存在把推论写成来源、程度过度夸大、关系标记错误等违背 Epistemic Rules 的现象，并提出最小修正建议。

## 2. 实际读取文件
- `03_Projects/Pilot_02/Page1_Shared_Concept.md`
- `03_Projects/Pilot_02/Page2_Curriculum_Application.md`
- `03_Projects/Pilot_02/Page3_Teacher_Decision.md`
- `01_Sources/Shape of Things_ A Philosophy of Design - Vilem Flusser.md`
- `Embodied Cognition 具身认知.md`
- `Tim Knowles - 用风作画.md`
- `99_Meta/LLM_Wiki_System/02_EPISTEMIC_RULES.md`

## 3. 未能找到的来源
- 《Unicorn (1970)》（Rebecca Horn）：未在指定阅读清单中深入查阅，但在 Page 1 和 Page 2 中仅作为案例索引出现。

## 4. 主张—证据审计表

| 页面中的说法 | 知识身份 | 当前证据 | 审计状态 |
| :--- | :--- | :--- | :--- |
| Flusser 认为材料只是使形式显现的被动载体 | `agent-inference` | Flusser: "...matter does not appear except... one in-forms it", "deform the idea... distort it" | **Overstated** |
| Knowles 彻底放弃了作为主体的“预设形式” | `agent-inference` | "将绘图笔绑在树枝上记录树木自然运动" | **Overstated** |
| Kirsh 支持形式在实践中动态生成 | `agent-inference` | "we know more by doing than by seeing" | **Partially Supported** |
| Flusser ↔ Tim Knowles 关系为 `contradicts` | `agent-inference` | Flusser 传统设计论与 Knowles 艺术实践的对比 | **Misattributed** |
| 学生会产生“掌控欲困境”和“认知撕裂” | `agent-inference` | 无直接外部证据，为基于教学情境的推导 | **Supported** |

## 5. 已确认问题

### 错误一：把程度说得太绝对（Overstated）
- **Flusser 材料被动论**：原文明确提到木头在被赋予理念时，实际上会扭曲理念 ("not only in-form the wood... but also deform the idea of the table (distort it in the wood)")。这说明 Flusser 并不认为物质是绝对被动、任人打扮的载体。Page 1 中断言“认为材料只是使形式显现的被动载体”夸大了事实，忽略了材料的物理反作用力。
- **Knowles 放弃预设论**：虽然 Knowles 让自然作画，但他依然强预设了装置结构（把笔绑在树枝上）和作画框架。并非“彻底放弃预设形式”，而是放弃了末端的“形态控制”。

### 错误二：跨学科延伸过强（Partially Supported）
- **Kirsh 具身认知**：Kirsh 在引文中的主张是“认知在行动中产生（knowing by doing）”。虽然 Agent 已经标记了这是个延伸推论，但未能清楚说明 Kirsh 原文本不涉及物质层面的“造物形式生成”。该推论在逻辑上是成立的，但在陈述时必须清楚界定界限。

### 错误三：过度使用 `contradicts`
- Flusser 是在定义古典和现代设计的本质（形式的施加），而 Tim Knowles 是在进行刻意反其道而行的当代艺术实验。两者的差异不属于逻辑命题上的互不相容（即不可同时为真的 `contradicts`），而是创作理念和控制权分配上的强烈对比（`contrasts`）。

## 6. Agent 推论审查
Page 2 中的课程痛点（认知撕裂、掌控欲困境）和活动建议，完全是 Agent 基于知识库组合生成的教学推论。页面顶部已经给出了清晰的警告（`⚠️ 以下所有内容均为 Agent 结合知识库生成的【课程推论】`），这符合规范且未把推论包装成客观事实。

## 7. 不确定内容审查
Page 1 提出的问题：“数字工具...究竟是像 Flusser 所说的空形式发生器，还是能像 Knowles 一样提供材料自生成的环境？”——属于合理的 `question` 与 `uncertain` 内容，保留了思考的开放性。

## 8. 建议修改清单

**建议一：修正 Flusser 对材料的看法**
- **原文**：`【Agent推论】Flusser 持有强烈的“形式先验”观，认为材料只是使形式显现的被动载体`
- **问题**：忽略了原文中材料对形式的“扭曲”作用。
- **修改建议**：改为 `【Agent推论】Flusser 揭示了传统设计的“形式先验”观，人类试图将形式强加于物质。但他同时指出，材料并非绝对被动，它会在实践中“扭曲”纯粹的理念。`
- **新身份**：`agent-inference`
- **影响页面**：Page 1

**建议二：修正 Tim Knowles 的绝对化表述**
- **原文**：`【二手资料解释/推论】Knowles 彻底放弃了作为主体的“预设形式”。`
- **问题**：夸大事实，遗漏了环境边界预设。
- **修改建议**：改为 `【Agent推论】Knowles 放弃了对末端形态的微观控制，将具体的线条生成交给了材料和环境，但他依然保留了作为前提条件的装置预设。`
- **新身份**：`agent-inference`
- **影响页面**：Page 1

**建议三：明确 Kirsh 外推的边界**
- **原文**：`【Agent推论】从具身认知的角度延伸，造物中的“形式”不是完全在脑海中预先构建好的蓝图，而是在身体与材料的物理交互（physically performing）过程中动态生成和发现的。`
- **修改建议**：改为 `【Agent推论】Kirsh 的原文聚焦于“认知”。若将其外推至造物领域，可以得出一个强有力的课程假设：即最终的“形式”也并非全知先验，而是必须在身体与材料的物理互动中动态生成。`
- **新身份**：`agent-inference`
- **影响页面**：Page 1

**建议四：修正 Flusser 与 Knowles 的关系标签**
- **原文**：`Flusser ↔ Tim Knowles 关系标签：contradicts (存在直接冲突)`
- **修改建议**：改为 `contrasts (对比/反差)`，并调整说明为 `两者体现了传统赋形论与当代生成艺术在主体控制权上的强烈对比。`
- **影响页面**：Page 1

## 9. 受影响页面
所有修正均集中于 `03_Projects/Pilot_02/Page1_Shared_Concept.md`。Page 2 和 Page 3 暂无因证据扭曲导致的硬性错误。

## 10. 尚未执行的修改
本阶段严格遵守只读规定，未对任何源文件和页面执行实质性修改。

## 11. 是否需要场外调研
当前审计能够在 Vault 现有文件和逻辑下形成闭环，无需发起场外调研。

## 12. 下一步最小任务
等待用户或场外指导 Agent 审查本份审计报告。若批准通过，则进入“第二阶段”，对 `Page1_Shared_Concept.md` 执行上述四项最小修订。
