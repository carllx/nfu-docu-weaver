---
marp: true
theme: NFUPPT
class:
---

## 施工蓝图: 认识敏捷开发流程

引用 [[dev - 敏捷形开发团队工作流程]]

用蓝图, 启动一个创意项目。

![bg fit left:50% vertical](https://i.imgur.com/uWznlSs.webp)

<!--
[LINK] 从工具转向流程，引出BMAD框架的核心——团队协作。
-->

---

## 规划层 (WHY & WHAT)

<!-- _class: lead-->

---

![bg left:50% vertical](https://i.imgur.com/HY1tiTA.webp)

### **Analyst (Mary)**

> “我们要在哪里建设？”
> “为什么建？”

* **核心产出**:
    * `Project Brief (项目简报)`
    * `Market Research (市场研究)`
    * `Competitor Analysis (竞品分析)`

<!--
[FLAG] Analyst是项目的起点，决定了项目的方向是否正确。
建议将JTBD用户访谈的结果作为Analyst的输入。
-->

---

![bg left:50% vertical](https://i.imgur.com/2vmV50p.webp)

### **PM (John)**

> 设定项目边界，将想法转化为具体可执行的规划。

* **核心产出**:
    * `PRD (产品需求文档)`

<!--
[PT01] PM的核心是将“想法”转化为“需求”。
-->

---

## 实施层 (HOW)

<!-- _class: lead-->

---

![bg left:50% vertical](https://i.imgur.com/hDc7GxY.webp)

### **UX Expert (Sally)**

> 确保最终产品是好用、舒适且令人愉悦的。主导用户画像与共情挖掘。

* **核心产出**:
    * `front-end-spec.md (前端规格/Design Tokens)`

---

![bg left:50% vertical](https://i.imgur.com/qlMvmtF.webp)

### **Architect (Winston)**

> 绘制精确的施工蓝图，决定技术落地的路径。

* **核心产出**:
    * `architecture.md (架构文档)`

* **执行支持角色 (下游执行)**:
    * **SM (Bob)**: 准备 User Story
    * **Dev (James)**: 编写代码
    * *(SM 和 Dev 在 Architect 下执行，完成最终交付)*

<!--
[FLAG] 架构师连接了“做什么”(PRD)和“怎么做”(代码)。
-->

---

## 项目的主人翁

<!-- _class: lead-->

---

![bg left:50% vertical](https://i.imgur.com/tiSC5ZI.webp)

### **PO (你自己)**

> 审查规划图纸是否合规、完整。决定产品方向。

* **角色说明**:
    * 在本项目中，你（学生）就是 Product Owner。
    * 你负责与各位 AI Agent 协作，验证产出是否符合你的战略目标。

---

## 从功能到任务：JTBD (Jobs to be Done) 理论

<!-- _class: lead-->

---

### 案例：常见的功能内卷

假设你要设计一款 “大学生期末复习 APP”。 传统做法：
你会去研究竞品:
- 发现“学霸APP”有倒计时，你就加上番茄钟；
- “考神APP”有笔记功能，你就开发思维导图。

最后，你的产品功能齐全，却毫无亮点，因为你并未触及用户的根本痛点。

---

### JTBD 用户访谈模拟：五问法 (5 Whys)

**核心**：不问“你想要什么功能？”，而是深入理解用户的**场景 (Situation)、动机 (Motivation) 和期望成果 (Expected Outcome)**。

![bg fit left:50% vertical](https://i.imgur.com/fyf7YXH.webp)

---

> “你为什么需要一款复习APP？”
> ——“为了提高学习效率。”

> “为什么提高效率对你很重要？”
> ——“因为时间不够，知识点太多，感觉很乱。”

> “为什么会感觉很乱？”
> ——“因为我总是在不同章节之间来回翻书找关联的知识点，效率很低。”

---

> “为什么找关联知识点对你来说这么重要？”
> ——“因为老师说考试会考跨章节的综合题，但我自己很难把它们串起来。”

> “为什么把知识点串起来这么困难？”
> ——“因为我缺乏一个清晰的知识框架。 我感觉自己看到的都是零散的树木，而不是整片森林。这种对整体知识结构不确定的感觉，让我非常焦虑，害怕自己花了大量时间，却仍在做无用功。”

> ... 以此深挖，直到触及 **“对知识整体框架不确定的焦虑感”** 这个核心痛点。

---

### Brief 产出示范(功能,情感,社交)

JTBD 访谈的结果将作为 Analyst (Mary) 的建议性输入。我们需要提炼出核心的 **Jobs to Be Done**，撰写《项目简报 (Project Brief)》。

**核心待办任务示范:**

1. **功能层面 (Functional):** **帮我快速构建起这门课程的宏观知识地图**，让我能清晰地看到逻辑联系。
2. **情感层面 (Emotional):** **消除我对知识整体框架不确定的焦虑感**，给我信心。
3. **社交层面 (Social):** **让我能自信地从更高维度阐述观点**，而不是孤立的知识点。

---

**《项目简报 (Project Brief)》完整版本示范:**

![bg fit left:50% vertical](https://i.imgur.com/wCigAvl.webp)

---

## 阶段过渡：Why - What - How (WWH) 框架

本课程的所有阶段将围绕经典的 **"Why-What-How" (WWH)** 框架展开。

![bg fit left:50% vertical](https://i.imgur.com/ey9bup4.webp)

---

继“敏捷团队角色”之后，一个更抽象的思考维度，帮助我们理清从想法到产品的完整路径。

- **阶段一 ( "Why")**: 探索其核心价值与用户需求。(Analyst)
- **阶段二 ( "What")**: 定义我们具体要**做什么**，产出产品蓝图。(PM)
- **阶段三与四 ("How")**: 规划**如何**实现蓝图，从设计规范到技术架构。(UX Expert, Architect)

![bg fit left:50% vertical](https://i.imgur.com/Cgi93Rs.webp)

---

# 从需求到体验：低保真线框图的深度设计

<!-- _class: lead-->

---

**案例项目**: Canton 枕头大战俱乐部网站
**核心工具**: Figma, Talk to Figma (MCP Server)

**教学目标**:
1. 深度解读设计简报 (Brief)，识别显性功能与隐性情感需求。
2. 学会运用对比分析法 (A/B版本) 验证和迭代设计思路。展示前后截然不同的结论。
3. 掌握 Task Flow 的创建方法，优化核心用户路径。
4. 明确敏捷团队中不同角色的协作。

---

## 模块一: 【项目启动 & 初步方案】

### Step1: MVP 阶段的需求界定

📋**@John(PM)** :
- 设定项目边界: **明确项目目标、范围和约束**.
- 确保团队统一认知。划定清晰界限，防止“功能蔓延（feature creep）”。

> @All, "刚接到一项业务, 为广州枕头大战俱乐部’创建一个网站。我已经把简报贴在这里了。"

---

简报(Brief)：
“你受委托为坎顿枕头大战俱乐部设计一个 4 页的网站。他们需要一个简单的网站来发布即将举行的活动、过往活动以及赞助商信息。
该枕头大战俱乐部的理想客户是一位名叫克洛伊的女性。克洛伊 50 岁出头，住在当地，她需要一种无需直接联系俱乐部组织者就能快速查看即将举行的活动的方式。”

<!-- _class: lead-->

---

### Step2: 需求拆解与基线建立

📊 **@Mary (Analyst)** 开始抠字眼，剥离功能点：

> “**4 页的网站**” **->** 网站由4个独立的页面/视图构成。
![bg fit left:50% vertical](https://i.imgur.com/iNEDy5E.webp)

---

> **“4 页的网站”** **->** 需要一个区域，展示未来的活动。
> **“过往活动”** **->** 需要一个区域，展示已经结束的活动。
![bg fit left:50% vertical](https://i.imgur.com/iNEDy5E.webp)

---

> **“赞助商”** **->** 需要专门的页面鸣谢赞助商。
> **“快速查看未来活动”** **->** **核心用户路径**！未来活动必须容易被找到，最好在首页有入口。
![bg fit left:50% vertical](https://i.imgur.com/iNEDy5E.webp)

---

**建立讨论基线 (版本A)**:

📊 **@Mary (Analyst):**
> 基于基本功能点，我们先制作一个最直白的‘**版本A**’。这将成为我们讨论和优化的**基线 (Baseline)**。

**必须做的 (Must-have)**: 4个页面、展示未来活动、过往活动、赞助商。
**不做的 (Out of Scope)**: 用户登录、在线报名、支付功能。

![bg fit left:50% vertical](https://i.imgur.com/s1D0Zjv.webp)

---

### Step3: 初步设计与流程可视化

🎨 **@Sally (UX Expert)** 快速构思 4 个页面的内容布局。

- **首页**: 导航，主视觉，未来活动预览。
- **活动页**: 未来/历史活动列表。
- **赞助商**: 赞助商Logo。
- **关于我们**: 俱乐部介绍。

![bg fit left:50% vertical](https://i.imgur.com/tpZ4ubt.webp)

---

**任务流程化 (Task Flow A)**

Sally 画出 Task Flow A，审视基础方案的交互效率。用户需要经过‘首页 -> 点击导航 -> 活动页 -> 扫描列表’完成任务。

![bg fit left:50% vertical](https://i.imgur.com/jfUhQ6l.webp)

---

**线框图绘制 (Wireframing)**

使用最简单的线条绘制版本 A (基准版本)。

![bg fit left:50% vertical](https://i.imgur.com/Y3eOQgg.webp)

---

## 模块二: 【深度洞察 & 发现问题】—— 走进 Chloe 的世界

### Step 1: 聚焦核心用户与共情挖掘

🎨 **@Sally (UX Expert)** 主导用户洞察：

> 我们需要问自己：
> “50岁的女性，‘枕头大战’对她来说意味着什么？是竞技比赛吗？”
> 这将决定设计的成败。

---

🎨 **@Sally (UX Expert)**:

> 🤔 枕头... 温暖, 柔软, 拥抱....
> 🤔 50 岁的 Chloe... 职场的冰冷社交., 孙子, 退休...
>
> 参加枕头大战更像是一种：
> - **情感释放**: 逃离日常压力。
> - **童年怀旧**: 重温快乐时光。
> - **温暖连接**: 建立轻松的社交。

---

🎨 **@Sally (UX Expert)**:

> 设计的核心不应是 ~~“战斗”~~ 和 ~~“信息”~~，而应是 **“柔软”、“温暖”、“拥抱”和“乐趣”**。我们需要创造一个让她感觉到安全、受欢迎的数字空间。

---

### Step 2: 批判性评审初步方案

📊 **@Mary (Analyst)**:
> 从效率角度看版本 A 的 Task Flow：用户需要经过多个步骤完成核心任务，首页没有活动信息的直接入口，**信息可达性 (Findability) 偏低**。

🎨 **@Sally (UX Expert)**:
> 版本 A 的线框图：
> 1. 首页没有惊喜，无法抓住用户的心。
> 2. 命名平淡功能性强，无法塑造独特个性。
> 3. 体验割裂，没有提供探索的理由。

---

## 模块三: 【创意升华 & 方案重构】

### Step 1: 确立创意核心

🎨 **@Sally (UX Expert)** 确立新的设计主题：

> **“重拾柔软时光 (Rediscover Soft Moments)”**
> 所有设计，从命名到流程，都将为这个主题服务。

![bg fit left:50% vertical](https://i.imgur.com/BrJYY7x.webp)

---

### Step 2: 重构设计方案 (版本 B)

**首页**: 突出的行动召唤卡片直接展示下一次活动，一步到位。
![bg fit left:50% vertical](https://i.imgur.com/XfnIXwf.webp)

**活动页**: 命名为“欢乐时光”，加入照片墙。
![bg fit left:50% vertical](https://i.imgur.com/r8R0LYH.webp)

---

**关于我们**: “柔软的约定”，塑造品牌个性和文化。
![bg fit left:50% vertical](https://i.imgur.com/O1nYLpY.webp)

**赞助商页**: 命名为“温暖伙伴”。
![bg fit left:50% vertical](https://i.imgur.com/dsSfTko.webp)

---

🎨 **@Sally (UX Expert)** 展示版本B线框图：

![bg fit left:50% vertical](https://i.imgur.com/imv3ZCy.webp)

---

### Step 3: 优化任务流程

🎨 **@Sally (UX Expert)** 对比 Task Flow B 与 A：

> 核心信息前置，完成任务步骤从 6 步**缩短到 4 步**。体验从“主动寻找”变成“轻松发现”。

![bg fit left:50% vertical](https://i.imgur.com/eLmKRsc.webp)

---

### Step 4: 技术可行性评估

🏗️ **@Winston (Architect)** 评估版本 B：

> - **模态窗口**: 轻量级解决方案，体验流畅，开发成本低。
> - **照片墙**: 使用现成前端库构建，无性能瓶颈。
> 总体稳健高效，批准通过。

---

## 模块四: 【低保真评审 & 设计系统基础】

### Step 1: 方案确认

👨‍🎓 **PO (你自己)** 确认设计方向：
- 确认版本 B 的“骨架”，授权 UX Expert 进行后续的高保真规范产出。

---

### Step 2: 建立规范 (Design System & Style Guide)

🎨 **@Sally (UX Expert)** 规划设计基础设施：

1. **设计系统 (Design System)**: 定义可复用组件及状态。确保体验统一，提升开发效率。
![bg fit left:50% vertical](https://i.imgur.com/j3HWwsZ.webp)

---

2. **样式指南 (Style Guide)**: 规定品牌颜色、字体、间距等视觉基础。
![bg fit left:50% vertical](https://i.imgur.com/vJW3D3V.webp)

3. **组件规范 (Component Specification)**: 组件详细说明文档，标注尺寸、交互及边缘情况。
![bg fit left:50% vertical](https://i.imgur.com/yvV7uew.webp)

---

## PRD 撰写核心：从战略到执行

PRD (产品需求文档) 是驱动开发的动态“功能蓝图”。

**Part 1: The "What" - 目标与需求**
- **目标与背景**: 由 PM(John) 定义，对齐愿景。
- **功能与非功能需求 (FR/NFR)**: 技术设计的直接输入。

**Part 2: The "How" - 实现路径**
- **UI设计目标**: 指导 UX Expert(Sally) 的设计。
- **技术假设**: 记录关键技术决策，是 Architect(Winston) 设计的边界。
- **Epic 与 Story**: 将需求分解为可交付的单元。

---

## 🃏 聊天卡片：与 Mary (Analyst) 对话

**目标产出：** `docs/brief.md`

**关键指令要点：**
1. 说明项目身份和风格（如「1930年代橡皮管动画风格」）
2. 声明技术约束（纯 HTML/CSS/JS，禁止框架）
3. 明确页面数量和用途
4. 请求「头脑风暴」深入探索
5. 最终指令：「创建 brief.md」

**🚨 绝对不能忽略：**
- [ ] `brief.md` 包含技术约束声明
- [ ] 项目范围合理（MVO原则）

---

## 🃏 聊天卡片：与 John (PM) 对话

**目标产出：** `docs/prd.md`

**关键指令要点：**
1. 上传 `brief.md` 作为上下文
2. 写入 4 条强制 NFR（技术栈/Design Tokens/法务素材/设计原则）
3. 定义品牌文法，包含具体可量化参数（如「16px圆角」）
4. 当 PM 生成 Epic 列表时可终止，直接要求输出 `prd.md`

**🚨 绝对不能忽略：**
- [ ] 4 条 NFR 用「禁止」「强制」等肯定措辞写入
- [ ] 品牌文法含可量化参数，而非模糊形容词

---

## 🃏 聊天卡片：与 Sally (UX Expert) 对话

**目标产出：** `docs/front-end-spec.md`

**关键指令要点：**
1. 上传 `prd.md` + `brief.md`
2. 强制 Token 本体论：明确区分 `primitive` 与 `semantic`
3. 采用全小写+点号分隔命名法（如 `color.primitive.red.500`）
4. 每个 Token 必须包含绝对精确的数值
5. Semantic Token 必须通过 `'{token.name}'` 格式引用 Primitive

**🚨 绝对不能忽略：**
- [ ] 文档中绝无模糊描述（如 "large"）
- [ ] Token 命名 100% 一致规范

---

## 🃏 聊天卡片：与 Winston (Architect) 对话

**目标产出：** `docs/architecture.md`

**关键指令要点：**
1. 上传所有前序文档
2. 明确 Token 名到 CSS Variable 的映射规则（点号转连字符）
3. Primitive Token 直接赋具体值，Semantic Token 使用 `var(--...)` 引用
4. 再次强调技术栈限制，禁止任何前端框架或打包工具

**🚨 绝对不能忽略：**
- [ ] 所有 Token 均有正确映射的 CSS Variable
- [ ] 引用关系在 CSS 层级通过 `var()` 完美实现

---

## 总结：从文档到 Vibe Coding 的全链路

**B-mad 执行循环：**
1. **规划层 (Why & What)**: Analyst -> `brief.md`; PM -> `prd.md`
2. **实施层 (How)**: UX Expert -> `front-end-spec.md`; Architect -> `architecture.md`
3. **交付层 (Execution)**: 将 4 份文档作为上下文输入给 Dev，通过 Vibe Coding (IDE AI) 生成最终的网站代码。

**这就是从零到一构建交互式产品的完整工作流！**
