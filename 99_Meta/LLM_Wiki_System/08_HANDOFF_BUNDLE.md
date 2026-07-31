---
type: project-handoff
project: Obsidian LLM Wiki 与《造物与创格》课程知识系统
status: active
version: 1.0
updated: 2026-07-31
language: zh-CN
---

# Obsidian LLM Wiki 项目交接文档

> 本文档用于在新的 ChatGPT 对话、IDE Agent 会话或其他 Agent 环境中恢复项目上下文。  
> 它不是某一次聊天的摘要，而是当前项目的“便携式正式记忆”。

---

## 0. 新对话的启动指令

把本文件交给新的 ChatGPT 或 Agent 后，请先执行以下要求：

1. 阅读全文，复述你对项目目标、当前阶段、已确认决定和开放问题的理解。
2. 不要重新发明架构，也不要把已经否定的方案重新作为默认建议。
3. 明确区分：
   - 已确认决定；
   - 当前工作假设；
   - 尚未确认的建议；
   - Agent 推论；
   - 用户最终判断。
4. 在读取与当前任务直接相关的文件前，不要进行全库扫描。
5. 任何批量移动、重命名、合并、重写、建立 RAG 或正式 Skill 的动作，都必须先提出计划。
6. 当前优先级是推进《造物与创格》八周实践课程，同时验证 LLM Wiki 的真实能力。

---

# 1. 项目一句话定义

在一个已有四五千篇笔记、结构复杂且混有部分 GitHub/代码项目的 Obsidian Vault 上，逐步建立一套：

> **以 Sources 为证据底座、以 Wiki 为可持续综合层、以 Projects 为实际产出层、以 Personal Thinking 保存用户判断、由 Agent 协助维护但由用户掌握最终方向的长期知识系统。**

该系统借鉴 Andrej Karpathy 的 LLM Wiki 思想，但不会机械照搬固定文件夹或插件方案。

---

# 2. 项目初衷

用户希望解决的不是单纯“整理笔记”，而是以下长期问题：

- 四五千篇笔记越来越难以定位、复用和维护；
- 书籍、PDF、EPUB、Markdown 转换文本、艺术家案例、课程资料和项目文档互相混杂；
- 不同课程、创作和研究会重复使用相同理论、艺术家、作品和方法；
- 用户会与 ChatGPT 讨论，再指导 IDE Agent 执行，也可能直接让 Agent 管理；
- 新对话和新 Agent 容易忘记项目初衷、架构决定和历史经验；
- 希望最终让 Agent 承担越来越多维护工作，但现阶段仍需人与 Agent 共同设计、审查和纠偏。

最终目标不是建立一个“自动摘要仓库”，而是建立一个能够：

- 摄入书籍与资料；
- 综合跨来源观点；
- 更新已有知识页面；
- 支持课程、研究、创作和设计项目；
- 保留历史与决策依据；
- 在不同 Agent 和不同对话之间可靠交接；

的长期知识基础设施。

---

# 3. 当前最重要的真实项目

## 3.1 《造物与创格》八周实践课程

- 预计实施时间：2026 年 10 月；
- 当前阶段：暑假备课；
- 课程形式：八周实践课程；
- 需要使用：
  - 艺术家与作品案例；
  - 艺术理论；
  - 现象学、心理学、具身认知等相关知识；
  - 材料、形式、身体、过程、生成、规则、限制、数字工具等主题；
  - 学生想法归纳；
  - Markdown 课程大纲；
  - 思维导图；
  - Agent 协助研究、整理和提出课程建议；
  - 用户完成最终课程判断。

目前尚未正式确定：

- 学生结课最终必须产出什么；
- 是否必须包含实体材料；
- 纯数字作品是否可以作为“造物”；
- 数字工具在课程中主要作为媒介、方法还是研究主题；
- 如何平衡“预设形式”与“过程生成”；
- 八周内理论讨论与实践制作的比例。

## 3.2 游戏与运营探索

用户处于职业转换和失业阶段，正在探索一个可能的新出口：

- 可能制作游戏；
- 也可能先通过游戏推广和运营来理解游戏行业；
- 当前仍是概念孵化阶段；
- 需要书籍、案例、市场观察、小实验和现实数据支持；
- 暂时不应与《造物与创格》混为一个项目。

建议作为独立孵化项目保存，例如：

```text
03_Projects/
└── 游戏与运营探索/
    ├── QUESTION.md
    ├── Research/
    ├── Market-Observations/
    ├── Game-Design/
    ├── Operations/
    ├── Experiments/
    └── Decisions/
```

---

# 4. 用户的长期领域

用户关注的方向包括：

1. 当代艺术；
2. 数字媒体艺术；
3. 游戏设计；
4. 数字媒体剪辑；
5. 建模与数字雕刻；
6. 网页交互产品和交互装置。

这些项目不能被简单当成六个同级文件夹，因为它们位于不同层级：

- 当代艺术、数字媒体艺术、游戏设计：研究或实践领域；
- 剪辑、建模、数字雕刻：方法与制作能力；
- 网页交互、交互装置、游戏、课程：常常表现为具体项目和产出。

正确思路是建立跨项目共享的概念、人物、作品、方法和媒介页面，而不是强迫每篇笔记只属于一个学科分类。

---

# 5. 对 Karpathy LLM Wiki 方法的当前理解

## 5.1 核心不是目录，而是“编译层”

早期曾把 Wiki 类比为 TOC、Index 或术语表。后来已校正：

- TOC、Index、MOC、Hub 是导航入口；
- Wiki 页面是已经综合过的知识节点；
- Wiki 不只是告诉 Agent “去哪里找”，还保存跨来源形成的当前理解；
- 查询优先读 Wiki，证据不足或需要核实时再回到 Sources。

可以类比为：

```text
Sources = 源代码 / 证据材料
Wiki = 编译后的知识
Obsidian = 人与 Agent 浏览知识结构的界面
Agent = 负责摄入、综合、更新、检查的维护者
```

## 5.2 核心操作

- Ingest：摄入新资料；
- Query：查询并综合已有知识；
- Lint：检查重复、孤岛、冲突、缺失引用和过度膨胀页面。

## 5.3 不等于 RAG

已确认的工作假设：

- 初期不需要搭建复杂 RAG；
- Agent 可以直接通过 Markdown、目录、全文搜索、双链和局部读取工作；
- 如果未来出现同义词遗漏、模糊查询困难、搜索噪音过大，再考虑轻量机器索引或 Embedding；
- RAG 是可能的检索辅助，不是 LLM Wiki 的核心。

## 5.4 书籍不是 Skill

已明确否定：

> 一本书本身不应被直接理解成 Skill。

更合理的关系是：

```text
书籍 / PDF / EPUB / Markdown 转换文本 = 知识输入
Skill = 处理这些输入的可重复流程
```

未来可能形成的 Skill：

- `ingest-book`
- `compile-author-view`
- `compare-authors`
- `author-panel`
- `course-synthesis`
- `evidence-audit`
- `wiki-lint`

可以建立“作者观点页”并让不同作者围绕问题进行讨论，但必须基于实际来源，并区分作者明确观点、Agent 推论和课程启示。不能只依赖模型记忆进行角色扮演。

---

# 6. 已确认的逻辑架构

## 6.1 五个逻辑层

### A. Sources：证据材料

包括：

- PDF、EPUB 及其 Markdown 转换文本；
- 书籍与章节；
- 论文；
- 网页；
- 访谈；
- 字幕；
- 原始摘录；
- 原始观察记录。

原则：

- 默认只读；
- 不是“绝对真理”，而是可追溯证据；
- 不允许 Agent 随意改写；
- 应尽可能保留版本、作者、章节、页码或定位信息。

### B. Shared Wiki：共享知识

包括：

- Concepts；
- Authors；
- Artists；
- Artworks；
- Methods；
- Media；
- Comparisons；
- Indexes。

原则：

- 可跨项目复用；
- 由多个来源持续更新；
- 以概括为主体、短引文为证据；
- 必须区分来源主张、二手解释和 Agent 推论；
- 不保存具体课程时间表、评分标准和项目管理信息。

### C. Projects：项目

包括：

- 课程；
- 作品；
- 游戏；
- 网页交互；
- 交互装置；
- 展览；
- 运营实验。

原则：

- Project 页面引用 Wiki；
- 项目保存具体目标、进度、任务和产出；
- 不把一次项目的安排冒充为通用知识。

### D. Personal Thinking：用户判断

包括：

- 研究判断；
- 教学取舍；
- 创作意图；
- 未验证假设；
- 个人解释；
- 对 Agent 建议的接受或拒绝。

原则：

- 不得被 Agent 自动覆盖；
- 用户拥有最终决定权；
- 必须与来源和 Agent 推论分离。

### E. Agent System：系统规则

包括：

- AGENTS.md；
- 项目 Charter；
- 架构规范；
- 知识与证据规则；
- Decision Log；
- Current State；
- Roadmap；
- Session Log；
- Pilot 与评估；
- Skill 设计；
- Handoff Bundle。

---

# 7. 实施原则：覆盖层，而不是全库搬家

当前 Vault 复杂，已有约四五千篇笔记，并混有代码项目、课程文档、根目录零散笔记和结构化数据。

已确认：

- 暂不重构整个 Vault；
- 暂不批量移动根目录笔记；
- 暂不把旧笔记强行塞入新分类；
- 先建立一个新的共享知识覆盖层；
- 通过链接引用旧 Sources、旧 Concepts、艺术家页和项目文档；
- 在真实项目中验证架构，再逐渐扩大。

建议逻辑路径：

```text
现有复杂 Vault
→ Agent 目录地图与排除规则
→ 少量共享 Wiki / 主题入口
→ 具体 Projects 引用 Wiki
→ 必要时回查 Sources
```

---

# 8. Vault 调查结果与能力判断

## 8.1 已知规模

Agent 的两次统计口径曾不一致，因此以下数字应视为近似：

- 总文件数约 8000；
- Markdown 约 2100 至 2460；
- 直接位于根目录的 Markdown 约 1085；
- Vault 中含部分 GitHub、课程和代码项目；
- 已有目录包括：
  - `01_Sources`
  - `02_Concepts`
  - `03_Projects`
  - `04_Fleeting`
  - `99_Meta`
  - `Inbox`
  - `Artisti`
  - `COURSE`
  - `Scripts`
  - 若干课程与开发项目目录。

需要注意：

- 早期“根目录 4600+ 文件”的判断是递归统计误读；
- 后来修正为根目录直接文件约 1132；
- Markdown 总数在不同命令中出现 2462 与 2099，统计口径仍需统一；
- YAML、标签等覆盖率的早期命令也可能存在统计缺陷，不宜作为最终事实。

## 8.2 当前 Agent 能力等级

当前较合理的判断：

> Agent 已达到 Level 2：结构化渐进检索，并开始向 Level 3：跨来源综合过渡。

已展示的能力：

- 通过路径、文件名、全文搜索和双链找到候选材料；
- 初步区分 Source、Project、Wiki-like、Method、Code Asset；
- 在不全文读取全库的情况下缩小范围；
- 在限定目录内创建 Pilot；
- 基础地隔离来源、Agent 推论和用户判断。

尚未充分证明的能力：

- 长期更新已有 Wiki；
- 正确判断新建、合并或拆分；
- 稳定处理来源冲突；
- 高质量的跨学科推论；
- 精确引用和页码追溯；
- 批量处理后保持一致性；
- 无监督长期维护。

## 8.3 当前 RAG 决定

当前决定：

> 暂不建立全库 RAG。

理由：

- 明确术语可以通过全文搜索、目录和链接定位；
- 现有路径结构仍能过滤大量噪音；
- 当前真正风险不是“完全搜不到”，而是 Agent 对搜索结果做出过强解释；
- 应先完善知识规则和证据审计。

这只是当前工作结论，不是永久否定。未来需要用模糊查询、跨语言同义词和“用户记不起关键词”的测试重新评估。

---

# 9. 两次 Pilot 的历史与结论

## 9.1 Pilot 01：Flusser 单来源原型

相关文件：

- `[[TEST_Flusser_Materiality]]`
- Source：`[[01_Sources/Shape of Things_ A Philosophy of Design - Vilem Flusser]]`

目标：

- 测试是否能隔离原书观点、Agent 课程推论和用户教学判断。

成果：

- 原书观点单独呈现；
- Agent 推论有警告标记；
- 用户判断区保持留白；
- 未修改 Source。

结论：

- “模板隔离能力”通过；
- 不能据此证明完整 LLM Wiki 能力。

发现的问题：

1. 一个文件同时承担：
   - 作者观点；
   - 共享概念；
   - 课程应用；
   - 用户决定。
2. 主体以长引文为主，更像摘录页，不是综合 Wiki；
3. 引用只有文件名和章节名，缺少页码或稳定锚点；
4. Walkthrough 过早宣称 Agent “完全具备”能力；
5. 原型被创建在 Vault 根目录，不适合长期保留。

## 9.2 Pilot 02：跨来源三页原型

相关目录：

`03_Projects/Pilot_02/`

相关文件：

- `[[03_Projects/Pilot_02/Page1_Shared_Concept]]`
- `[[03_Projects/Pilot_02/Page2_Curriculum_Application]]`
- `[[03_Projects/Pilot_02/Page3_Teacher_Decision]]`

核心问题：

> 造物中的“形式”，是预先施加给材料的结构，还是在材料、身体与实践过程中逐步生成的？

使用的候选材料包括：

- Flusser：《The Shape of Things》；
- David Kirsh：具身认知；
- Tim Knowles；
- Rebecca Horn；
- Quayola；
- 曾读取但未采用：Sruti Bala 的参与式艺术资料。

结构成果：

- 页面一：共享概念；
- 页面二：课程应用；
- 页面三：教师决定；
- 没有修改原始文件；
- 没有在根目录创建新文件。

结论：

- “共享知识 / 课程应用 / 用户决定”的三页分离方向正确；
- 比 Pilot 01 更接近未来架构；
- 仍未达到正式 Wiki 标准。

主要问题：

1. 将 Flusser 解释为“材料只是被动载体”，并标为高置信度，推论过强；
2. 将 Tim Knowles 定义为“彻底放弃预设形式”，忽视艺术家对系统、材料和装置的预设；
3. 把 Flusser 与 Tim Knowles 标成 `contradicts`，证据不足，更适合 `contrasts` 或 `uncertain`；
4. Kirsh 的具身认知被跨学科延伸为“形式生成论”，应保持中低置信度；
5. Agent 已能主动指出自己的三个不确定判断，这是正向能力；
6. 下一阶段重点不应是扩大规模，而应建立 Epistemic Rules 和 Evidence Audit。

---

# 10. 已证实的经验教训与禁止事项

## 10.1 禁止把 Sources 称为“真理”

正确表述：

- Sources 是不可随意改写的证据材料；
- 来源也可能错误、片面或互相冲突；
- Wiki 是当前可修订的综合理解。

## 10.2 禁止只凭文件名和目录断定内容

文件名和路径可用于第一轮筛选，但：

- 重要判断必须阅读必要上下文；
- `Living in a simulated universe.md` 之类标题不能直接判定为个人思考；
- 艺术家页也可能包含二手摘要、AI 内容或用户判断。

## 10.3 禁止从一次测试宣称“能力完全验证”

一次单来源测试只能证明模板遵循。

能力必须分别测试：

- 单来源摄入；
- 跨来源综合；
- 来源冲突；
- 更新已有页面；
- 新建 / 合并 / 拆分判断；
- 引用追踪；
- 长期一致性；
- Lint 与回滚。

## 10.4 禁止让一个 Wiki 文件承担所有责任

共享知识、课程应用和用户决定应分开。

错误：

```text
一个文件 = 原文摘录 + 概念综合 + 课程安排 + 用户决定
```

正确：

```text
Source
↕
Shared Wiki
↕
Project Research / Curriculum Application
↕
User Decision
```

## 10.5 禁止用长引文替代 Wiki

Wiki 应以概括、关系和当前理解为主体。

短引文只用于：

- 提供证据；
- 保留关键措辞；
- 支持可追溯性。

## 10.6 禁止过度使用 `contradicts`

只有两个来源对同一个问题提出不相容主张时，才使用 `contradicts`。

其他情况优先：

- `supports`
- `extends`
- `contrasts`
- `uncertain`

## 10.7 禁止把书籍直接包装成 Skill

书籍是知识资产；Skill 是处理资产的方法。

## 10.8 禁止一开始全库 RAG、全库迁移或全自动整理

当前阶段不做：

- 全库向量化；
- 批量移动根目录笔记；
- 自动重命名；
- 自动合并同名概念；
- 自动重写旧笔记；
- Agent 无审核长期运行；
- 一次性生成数百个 Wiki；
- 把代码、缓存和结构化数据全部送入知识检索。

## 10.9 禁止把聊天当作唯一项目记忆

聊天只是临时工作空间。

正式记忆应写入 Obsidian：

- Charter；
- Architecture Spec；
- Epistemic Rules；
- Decision Log；
- Current State；
- Session Log；
- Handoff Bundle。

---

# 11. 知识与证据规范

未来重要陈述应尽可能标记为：

- `source-claim`：来源明确表达；
- `secondary-interpretation`：二手解释；
- `agent-inference`：Agent 推论；
- `user-judgment`：用户判断；
- `project-decision`：已确认项目决定；
- `uncertain`：证据不足；
- `question`：开放问题。

Agent 不得：

- 把推论写成作者原意；
- 把作品效果写成艺术家明确意图；
- 把模板中的空白当成用户决定；
- 用模型记忆补出 Vault 中不存在的出处；
- 用高置信度掩盖跨学科跳跃；
- 将“视角不同”轻率标成“直接矛盾”。

引用至少应记录：

- 文件路径；
- 作者或来源；
- 章节或标题；
- 段落锚点；
- 有页码则记录页码；
- 无页码则明确说明转换文本未保留页码。

---

# 12. 项目记忆系统

建议在现有 `99_Meta` 下建立：

```text
99_Meta/
└── LLM_Wiki_System/
    ├── 00_PROJECT_CHARTER.md
    ├── 01_ARCHITECTURE_SPEC.md
    ├── 02_EPISTEMIC_RULES.md
    ├── 03_DECISION_LOG.md
    ├── 04_CURRENT_STATE.md
    ├── 05_ROADMAP.md
    ├── 06_SESSION_LOG/
    ├── 07_EVALUATIONS/
    ├── 08_HANDOFF_BUNDLE.md
    └── 09_GLOSSARY.md
```

Vault 根目录：

```text
AGENTS.md
```

## 12.1 文件责任

### `AGENTS.md`

Agent 入口，只说明：

- 开始前必须读哪些文件；
- 哪些目录只读；
- 哪些行为必须先提出计划；
- 完成后要更新哪些状态文件。

### `00_PROJECT_CHARTER.md`

保存：

- 项目初衷；
- 长期目标；
- 当前真实项目；
- 核心原则；
- 当前非目标。

该文件很少修改。

### `01_ARCHITECTURE_SPEC.md`

保存：

- Sources / Wiki / Projects / Thinking / Agent System 的结构；
- 页面职责；
- 新建、合并、拆分规则；
- 目录和命名规范。

### `02_EPISTEMIC_RULES.md`

保存：

- 内容身份；
- 证据等级；
- 引用要求；
- 关系标签；
- Agent 不得越界的事项；
- 用户与 Agent 的决定权限。

### `03_DECISION_LOG.md`

只记录正式决定，不记录所有聊天。

建议格式：

```markdown
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
```

### `04_CURRENT_STATE.md`

保存：

- 当前阶段；
- 已完成；
- 当前结论；
- 当前问题；
- 下一步。

每次重要执行后更新。

### `05_ROADMAP.md`

保存阶段计划：

1. Vault 调查；
2. 能力验证；
3. 《造物与创格》课程系统；
4. 共享 Wiki；
5. Skill 化；
6. 检索增强与自动维护。

### `06_SESSION_LOG/`

每次重要对话或 Agent 执行创建：

```text
YYYY-MM-DD-任务名称.md
```

记录：

- 本次目标；
- 读取文件；
- 创建或修改文件；
- 主要发现；
- Agent 推论；
- 用户接受决定；
- 未解决问题；
- 下一步；
- 对话或执行 ID；
- 已知错误与不确定性。

### `07_EVALUATIONS/`

保存：

- Pilot；
- 能力测试；
- 失败案例；
- Evidence Audit；
- Lint 结果。

### `08_HANDOFF_BUNDLE.md`

提供给新 ChatGPT 对话或新 Agent 的精简交接包。

本文件可以作为其初始版本。

### `09_GLOSSARY.md`

保存项目中特殊术语的统一定义，例如：

- Source；
- Wiki；
- Project；
- Personal Thinking；
- Agent Inference；
- Decision；
- Pilot；
- RAG；
- Skill；
- Compilation；
- Lint。

---

# 13. Agent 的读取顺序

开始全库、课程、Wiki、书籍摄入或架构任务前：

```text
AGENTS.md
→ 00_PROJECT_CHARTER.md
→ 04_CURRENT_STATE.md
→ 01_ARCHITECTURE_SPEC.md
→ 02_EPISTEMIC_RULES.md
→ 与当前任务直接相关的 Project / Decision / Evaluation
```

不要每次读取全部 Session Log。

---

# 14. 新 ChatGPT 对话的交接方式

在新的对话中优先上传：

1. 本交接文档；
2. `04_CURRENT_STATE.md`；
3. 与当前任务相关的 Project 文件；
4. 需要审查的 Pilot 或 Source。

复杂架构任务再增加：

- `01_ARCHITECTURE_SPEC.md`
- `02_EPISTEMIC_RULES.md`
- `03_DECISION_LOG.md`

新对话不需要阅读全文库，也不需要重新讲述全部历史。

---

# 15. 当前建议目录

## 15.1 共享 Wiki 试验层

尚未确认正式创建，但建议结构为：

```text
05_LLM_Wiki/
├── Concepts/
├── Authors/
├── Artists/
├── Artworks/
├── Methods/
├── Media/
├── Comparisons/
└── Indexes/
```

## 15.2 《造物与创格》项目

尚未确认正式创建完整结构，但建议为：

```text
03_Projects/
└── 造物与创格/
    ├── PROJECT.md
    ├── 00_Brief/
    ├── 01_Research/
    ├── 02_Curriculum/
    ├── 03_Weekly/
    ├── 04_Artists-and-Cases/
    ├── 05_Assignments/
    ├── 06_Student-Ideas/
    ├── 07_Decisions/
    ├── 08_Exports/
    └── _Agent/
```

注意：

- 这是建议架构，不代表已经创建；
- 不应移动旧文件以强行适配；
- 先通过链接和新产物使用该结构。

---

# 16. 当前阶段与下一步

## 16.1 当前阶段

项目处于：

> **跨来源综合能力验证 + 项目记忆系统建立阶段**

尚未进入：

- 全面 Wiki 建设；
- Skill 正式化；
- 全库重构；
- RAG；
- 无监督维护。

## 16.2 下一步优先级

### 第一优先：建立项目记忆系统

创建或确认：

- AGENTS.md；
- Charter；
- Architecture Spec；
- Epistemic Rules；
- Decision Log；
- Current State；
- Roadmap；
- Session Log；
- Evaluations；
- Handoff Bundle。

### 第二优先：对 Pilot 02 做 Evidence Audit

重点检查：

- Flusser 是否真的主张材料是被动载体；
- Kirsh 的认知论能否合理延伸到形式生成；
- Tim Knowles 是否真是“彻底非预设”；
- `contradicts` 是否应改为 `contrasts` 或 `uncertain`；
- 每个主张是否有足够定位信息。

### 第三优先：明确《造物与创格》的课程边界

需要用户决定：

- 最终产出；
- 实体 / 数字材料边界；
- 数字工具定位；
- 理论与实践比例；
- 学生背景；
- 评价方式；
- 八周节奏。

### 第四优先：只处理一本书的一个章节

正式测试：

- 章节来源摘要；
- 概念候选；
- 作者观点片段；
- 课程启示；
- 引用追溯；
- 更新已有 Wiki，而非只新建页面。

---

# 17. 当前开放问题

以下问题仍需用户决定，Agent 不得擅自填写：

1. 《造物与创格》最终要求学生做出什么？
2. 是否必须包含实体材料？
3. 纯数字材料是否可以被视为课程中的“材料”？
4. 数字工具在课程中是媒介、方法还是主题？
5. 课程更强调预设形式、过程生成，还是两者张力？
6. 学生的技术背景和艺术背景如何分布？
7. 课程评价看重结果、过程、反思还是展示？
8. 是否正式建立 `05_LLM_Wiki/`？
9. 是否正式建立 `99_Meta/LLM_Wiki_System/`？
10. 当前 Pilot 文件是否保留、迁移到 Evaluations，或删除？
11. 何时开始测试“更新已有 Wiki”而不是持续新建页面？
12. 游戏与运营探索何时成为第二个正式项目？

---

# 18. 当前已确认与尚未确认的边界

## 已确认

- 采用项目驱动、知识共享的思路；
- Sources 默认只读；
- Wiki 不等于 TOC 或 Index；
- 共享知识、课程应用、用户决定应分开；
- 书籍不是 Skill；
- 暂不进行全库 RAG；
- 暂不全库重构；
- 《造物与创格》是第一个真实项目；
- Agent 当前约为 Level 2，正在向 Level 3 过渡；
- Pilot 02 的三页结构比 Pilot 01 更合理；
- Agent 的主要风险是过度推论，而不是完全无法检索；
- 项目正式记忆应沉淀在 Obsidian，而不是只存在聊天中。

## 建议但尚未确认实施

- `05_LLM_Wiki/` 目录；
- `99_Meta/LLM_Wiki_System/` 完整目录；
- 根目录 `AGENTS.md`；
- 《造物与创格》完整项目目录；
- 游戏与运营探索项目目录；
- Skill 的具体安装位置和执行环境；
- 对 Pilot 02 的正式 Evidence Audit；
- Wiki 正式页面模板；
- 轻量机器索引。

---

# 19. 关键引用关系

## 项目与系统

```text
[[00_PROJECT_CHARTER]]
[[01_ARCHITECTURE_SPEC]]
[[02_EPISTEMIC_RULES]]
[[03_DECISION_LOG]]
[[04_CURRENT_STATE]]
[[05_ROADMAP]]
[[08_HANDOFF_BUNDLE]]
[[09_GLOSSARY]]
```

## Pilot 01

```text
[[TEST_Flusser_Materiality]]
[[01_Sources/Shape of Things_ A Philosophy of Design - Vilem Flusser]]
```

## Pilot 02

```text
[[03_Projects/Pilot_02/Page1_Shared_Concept]]
[[03_Projects/Pilot_02/Page2_Curriculum_Application]]
[[03_Projects/Pilot_02/Page3_Teacher_Decision]]
```

## 课程项目

```text
[[03_Projects/造物与创格/PROJECT]]
```

## 未来共享知识候选

```text
[[形式与物质]]
[[过程生成]]
[[具身认知]]
[[Vilém Flusser]]
[[David Kirsh]]
[[Tim Knowles]]
[[Rebecca Horn]]
[[Quayola]]
```

这些候选链接不代表页面已经正式存在。

---

# 20. 给下一位 Agent 的最后提醒

这个项目当前最容易犯的错误不是“搜不到资料”，而是：

> **把有限来源综合成过强的理论结论，再让这些结论通过 Wiki 的形式显得像已被确认。**

因此，请始终：

- 保留证据；
- 降低过度自信；
- 区分视角差异和直接矛盾；
- 不替用户做最终课程决定；
- 先更新状态文件，再扩大自动化；
- 先完成一个可靠闭环，再谈规模化。
