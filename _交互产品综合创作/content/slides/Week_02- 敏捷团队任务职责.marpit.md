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

## 规划团队

<!-- _class: lead-->


---



![bg left:50% vertical](https://i.imgur.com/HY1tiTA.webp)

### Analyst **城市勘探家**

> “我们要在哪里建设？”
> “为什么建？”


* **核心产出**:
    * `Project Brief (项目简报)`
    * `Market Research (市场研究)`
    * `Competitor Analysis (竞品分析)`

<!--
[FLAG] Analyst是项目的起点，决定了项目的方向是否正确。
-->

---

![bg left:50% vertical](https://i.imgur.com/2vmV50p.webp)

### **PM, 城市总规划师**

> 将梦想蓝图(未落地)，变成具体可执行的城市总规划图。


* **核心产出**:
    * `PRD (产品需求文档)`

<!--
[PT01] PM的核心是将“想法”转化为“需求”。
-->

---

\

![bg left:50% vertical](https://i.imgur.com/hDc7GxY.webp)

### **UX Expert, 城市体验设计师**

> 保最终建成的城市，是好用、舒适且令人愉悦的。

* **核心产出**:
    * `UI/UX Specification (前端规格)`

---

## 技术团队

<!-- _class: lead-->

---



![bg left:50% vertical](https://i.imgur.com/qlMvmtF.webp)

### **Architect, 总建筑工程师**
> 和 PM, 不一样的是, 我绘制精确的施工蓝图，决定技术落地的路径。


* **核心产出**:
    * `Architecture Document (架构文档)`

<!--
[FLAG] 架构师连接了“做什么”(PRD)和“怎么做”(代码)。
-->

---

![bg left:50% vertical](https://i.imgur.com/4aaoO6y.webp)

### **SM (Scrum Master): 施工总管**

> 将蓝图分解成每日的具体任务清单。


* **产出**: `User Story (用户故事)`


![bg right:50% vertical](https://i.imgur.com/QMuwMUR.webp)

### **Dev: 施工队**

>用代码一砖一瓦地将蓝图变为现实。
* **产出**: `Code & Updates`


---

## 验证团队: PO & QA
<!-- _class: lead-->


---

![bg left:50% vertical](https://i.imgur.com/tiSC5ZI.webp)

### **PO: 项目监理**

>在开工前，审查所有规划图纸是否合规、完整。

* **产出**: `Validation Report`


![bg right:50% vertical](https://i.imgur.com/p6P4TGJ.webp)

### **QA: 安全质检员**

> 在建成后，进行全方位的安全和质量检测。


* **产出**: `Test Reports`




---


# 从需求到体验：低保真线框图的深度设计

<!-- _class: lead-->


---



**课程名称**: 从需求到体验：低保真线框图的深度设计 
**案例项目**: Canton 枕头大战俱乐部网站 
**核心工具**: Figma, Talk to Figma (MCP Server) 

**教学目标**:

1. 掌握如何深度解读设计简报 (Brief)，识别显性功能与隐性情感需求。
2. 理解低保真线框图在聚焦结构、规避无效讨论中的核心作用。
3. 学会运用对比分析法 (A/B版本) 来验证和迭代设计思路。
4. 掌握 Task Flow 的创建方法，并用其优化核心用户路径。
5. 初步了解敏捷团队中不同角色的设计关注点。
    

---
## 模块一: 【项目启动 & 初ebut; 初步方案】—— 快速响应需求


**教学目标**:

- 从一个真实的项目简报 (Brief) 中，快速识别并拆解出核心的**功能性需求**。
    
- 理解并绘制出一个基础的、线性的 **Task Flow**。
    
- 创建一个基础的、满足所有功能点的**低保真线框图**。
    
- 识别规划团队 **PM、Analyst 和 UX Expert** 在项目初期的核心职责。

---


### Step1: MVP 阶段的需求界定

📋@John(PM产品经理) : 

- PM 的核心职责是==设定项目边界==: **明确项目目标、范围和约束**. 
- 确保整个团队对“要做什么”有一个统一的认知。PM 是需求的源头和方向的把控者。

---

📋@John(PM产品经理) : 

> @All, "刚从randomprojectgenerator.com 接到一项业务, 为广州枕头大战俱乐部’创建一个网站。我已经把简报贴在这里了。"

(将简报放进 figma )
<!--  
- 向学生说明，这个项目简报来自于一个模拟真实商业需求的网站 `randomprojectgenerator.com`。这强调了项目的实战性。

-->

---

简报(Brief)：
“你受委托为坎顿枕头大战俱乐部设计一个 4 页的网站。他们需要一个简单的网站来发布即将举行的活动、过往活动以及赞助商信息。
该枕头大战俱乐部的理想客户是一位名叫克洛伊的女性。克洛伊 50 岁出头，住在当地，她需要一种无需直接联系俱乐部组织者就能快速查看即将举行的活动的方式。”



<!-- _class: lead-->



<!--  
- 展示完整的英文简报原文，并提供中文翻译，确保所有学生理解无误。
    
    > **Brief**: "You've been asked to design a 4 page website for the canton Pillow Fighting Club. They need a simple website to post their upcoming events, past events and sponsors. The Pillow Fighting Club's ideal customer is a woman named Chloe. Chloe is in their early 50’s. They live locally and need a quick way to see upcoming events without contacting the club organizers directly."
-->
---

**核心观点与目标** 
> 我们首要目标是交付满足所有基本功能的==MVP（最小可行产品）==，要划定清晰界限，==防止“功能蔓延（feature creep）”==。 


**任务安排**
> @Mary，请拆解具体功能需求，为团队==建立一个讨论的基线==。


---



### Step2: 需求拆解与基线建立 (Requirement Breakdown)

**主导角色**: 📊 **@Mary (Analyst / 分析师)**

Analyst 的职责是将模糊的商业需求，转化为清晰、结构化的功能列表。我关注的是 **“做什么”** 和“为什么做”，为后续的设计提供逻辑依据。



---

开始抠字眼: 


Mary 会拿过简报，像剥洋葱一样，一层层把功能点剥离出来。

> “**4 页的网站**” **->** 网站由4个独立的页面/视图构成。

![bg fit left:50% vertical](https://i.imgur.com/iNEDy5E.webp)

---


> **“4 页的网站”** **->** 需要一个区域，按时间顺序展示未来的活动。
    
> **“过往活动”** **->** 需要一个区域，存档并展示已经结束的活动。
![bg fit left:50% vertical](https://i.imgur.com/iNEDy5E.webp)

---


> **“赞助商”** **->** 需要一个专门的页面来鸣谢赞助商。
    
> **“快速查看未来活动”** **->** **核心用户路径**！未来的活动信息必须非常容易被找到，==最好在首页就有入口==。

![bg fit left:50% vertical](https://i.imgur.com/iNEDy5E.webp)

---

#### 2. **建立讨论基线**:

📊 **@Mary (Business Analyst):

> 基于这些最基本的功能点，我再提醒克制任何创意，制作一个最直白的‘**版本A**’。这个版本将成为我们后续所有讨论和优化的**基线 (Baseline)**。它可以帮助我们评估，任何创意的加入，是否真的提升了用户体验。

![bg fit left:50% vertical](https://i.imgur.com/s1D0Zjv.webp)


---


pm 和 analyst 讨论的原则: 
#### 一个核心目标,  MVP 功能界定原则

- **核心目标**：满足用户 “无需联系组织者就能查看活动” 的核心需求。
    
- **必须做的 (Must-have)**: 4个页面、展示未来活动、展示过往活动、展示赞助商。
    
- **不做的 (Out of Scope for now)**: 用户登录、在线报名、支付功能、复杂的后台管理系统等。


---

总结:
**四个核心功能点**：
>1. 未来活动展示；
>2. 过往活动展示
>3. 赞助商展示；
>4. 整体网站结构为4页。
    

>其中，“==快速查看未来活动==”是最高优先级的用户任务。
---


### Step3: 初步设计与流程可视化 (Rapid Prototyping & Flowcharting)


**主导角色**: 🎨 **@Sally (UX Expert)**

UX Expert 的职责是**将功能列表，转化为可视化的界面布局和用户流程**。在这个初步阶段，她关注的是信息架构和操作效率，为用户搭建一个清晰的“骨架”。

---

Sally 基于 Mary 的功能列表，快速构思出4个页面的具体内容。

![bg fit left:50% vertical](https://i.imgur.com/tpZ4ubt.webp)

---


- **首页**: 包含导航，主视觉区，**“未来活动”** 列表的预览。
- **活动页**: “未来活动”, “历史活动”列表。
- **赞助商**: 用于展示赞助商Logo。
- **关于我们**: 一个标准的页面，用于放置俱乐部的基本介绍和联系方式。

---


#### 2. 核心任务流程化 (Task Flow):

- Sally 聚焦于 Mary 强调的最高优先级任务：“查找活动信息”。
    
- 她会画出 **Task Flow A**，将用户的每一步操作都清晰地描绘出来，以此来审视这个基础方案的交互效率。
![bg fit left:50% vertical](https://i.imgur.com/jfUhQ6l.webp)


---


🎨 @Sally (UX Expert)**: 

> "收到。基于 Mary 的分析，我已经快速绘制出了**版本A的线框图和核心Task Flow**。**设计思路是**：Homepage 承担引流和快速信息展示的功能；Events 页是信息中心；Sponsors 和About me是补充信息页。大家可以看到，这个Task Flow清晰地展示了用户需要经过‘首页 -> 点击导航 -> 活动页 -> 扫描列表’才能完成任务。这是一个功能完整但有优化空间的起点。大家可以看一下，这个基线方案是否准确反映了我们对简报的初步理解？"



---

#### 3. 线框图绘制 (Wireframing):

 Sally 会使用最简单的线条和文字，快速绘制出版本 A 的四个页面线框图。

- **CTA, Call to Action 行动召唤**: CTA 常以 “按钮” 为主要呈现形式（即 “CTA 按钮”），但也可通过链接、文案提示、图标等实现（如 “点击此处预约” 的文字链接）。
- 这里通过3 个入口, 并集中再居中位置实现 CTA 策略

![bg fit left:50% vertical](https://i.imgur.com/Y3eOQgg.webp)



---

### 总结


- 从一份 Brief 出发，产出了一套完整的、功能驱动的初步设计方案
- 版本A线框图 + Task Flow 的思路
- 了解 PM、Analyst 和 UX Expert 在项目初期是如何协同工作的

<!--  
到这里，模块一结束。学生们已经跟随团队，从一份真实简报出发，产出了一套完整的、功能驱动的初步设计方案（版本A线框图 + Task Flow）。他们也初步了解了 PM、Analyst 和 UX Expert 在项目初期是如何协同工作的。

这个坚实的“版本A”为我们接下来的创意风暴和深度分析，提供了一个完美的参照物和“靶子”。
-->



---

## 模块二: 【深度洞察 & 发现问题】—— 走进 Chloe 的世界

**教学目标**:

- 理解“用户画像 (Persona)”在设计中的核心价值。
    
- 学习如何基于用户画像进行深度共情分析，==挖掘潜在的情感需求==。
    
- 学会用批判性思维，审视和评估初步设计方案（版本 A）的==体验缺陷==。
    
- 理解 Analyst 和 UX Expert 在“探索用户体验”阶段的协同作用。


---

### Step 1: 聚焦核心用户 (Focus on the Core User)

📊 **@Mary (Business Analyst)**

- Analyst 的职责是**挖掘数据背后的人性**。在初步方案（版本A）建立后，她的任务是引导团队深入思考：“我们==从客户和用户的关系，究竟他们是一个怎样的人？==” 
    
- 她将焦点从“功能列表”转移到“活生生的人”身上。
    

---

📊 **@Mary (Business Analyst):**

> @All，版本A在功能上满足了简报的要求。但在我们继续之前，我想请大家暂停一下，重新聚焦于我们的核心用户：**Chloe，一位50岁出头的本地女性**。

---

📊 **@Mary (Business Analyst):**

> 我们需要问自己一个关键问题：
> 
> > “一个50岁的女性，在她的生活中，‘枕头大战’对她来说，真正意味着什么？她是在寻求一场竞技比赛吗？还是别的什么？”
> 
> 这个问题的答案，将决定我们设计的==最终成败==。@Sally，从用户体验的角度，你怎么看？

---

### Step 2: 用户共情与情感挖掘 (User Empathy & Emotional Insight)

🎨 **@Sally (UX Expert)**

- UX Expert 的职责是将**冰冷的用户画像，转化为有温度的情感洞察**。她需要带领团队进行一次“角色扮演”，真正站到用户的鞋子里去思考。
    
- 她将 Mary 提出的分析问题，转化为具体、生动的设计灵感。
    

---

🎨 **@Sally (UX Expert):**

> 🤔 枕头...
> ...温暖, 柔软, 拥抱....

> 🤔 50 岁的 Chloe...
> ... 职场的冰冷社交., 孙子, 退休, ...


---
🎨 **@Sally (UX Expert):**

> Mary, 我认为 Chloe 参加枕头大战，绝不是为了“赢”。
> 
> 我们可以想象一下她的生活：也许工作繁忙，也许家庭责任重大。对她而言，这更像是一种：
> 
> - **==情感释放==**: 逃离日常的压力和严肃。
>     
> - **==童年怀旧==**: 重温无忧无虑的快乐时光。
>     
> - **==温暖连接==**: 在一个安全、有趣的环境里，与他人==建立轻松的社交==。
>     

---

🎨 **@Sally (UX Expert):**

> 因此，我们设计的核心不应该是 ~~“战斗”~~ 和 ~~“信息”~~，而应该是 **“柔软”、“温暖”、“拥抱”和“乐趣”**。
> 
> > 我们需要创造一个让她感觉到==安全、受欢迎和充满乐趣==的数字空间。

---

### Step 3: 批判性评审初步方案 (Critically Reviewing Version A)

📊 **@Mary (Business Analyst)** & 🎨 **@Sally (UX Expert)**

- 在这个步骤，团队将带着刚刚获得的用户洞察，重新审视版本A。
    
- 这是整个教学的==关键转折点==，我们将在这里学会如何 “发现自己设计中的问题”。
    

---

📊 **@Mary (Business Analyst):**

> 带着对 Chloe 的新理解，我们再来看版本 A的 Task Flow。
> 
> > 它要求 Chloe 自己去**寻找**、去**阅读**、去**匹配**信息。这个过程是==冷冰冰的、事务性的==。它完全没有体现出我们刚才讨论的任何情感价值。

---

🎨 **@Sally (UX Expert):**

> 完全同意。版本A的线框图也暴露了同样的问题：
> 
> 1. **首页没有惊喜**: 它只是一个信息门户，没有传递任何情感，无法在第一时间==抓住用户的心==。
>     
> 2. **命名过于平淡**: “活动”、“赞助商”、“关于我们”... 这些词语==功能性太强==，无法塑造社区的==独特个性==。
>     
> 3. **体验是割裂的**: 用户只是来查信息的，查完就走，我们没有提供任何让他们==愿意停留、愿意探索==的理由。
>     

---

### 总结

- 我们深入分析了核心用户画像，并进行了==共情挖掘==。
    
- 我们识别出了版本A方案在==用户体验和情感连接==上的主要缺陷。
    
- 我们明确了下一步的优化方向：必须围绕“**柔软、温暖、乐趣**”的核心情感进行==设计升华==。


---

好的，收到您的全部指示！这是一个非常棒的优化，能让整个教案更具代入感和专业性。

我将严格遵循以下新规则来构建后续模块：

- **称谓**: 使用 “我们” (we/us) 代替 “学生”，营造一个共同探索的团队氛围。
    
- **内容区分**:
    
    - 🤔 **(思考/分析)**: 用于表示角色的内心思考、分析过程或设计原理的阐述。
        
    - 💬 **(对话)**: 用于表示角色之间的直接对话。
        
- **图片提示**: 插入图片占位符时，会明确说明图片应展示的内容。
    
- **专业术语**: 关键术语将采用 “**英文术语 (中文翻译)**” 的格式，以确保专业性和准确性。
    

现在，让我们以全新的模式，进入最激动人心的 **【模块三】**。

---

## 模块三: 【创意升华 & 方案重构】—— 设计的 “Aha!” 时刻

**教学目标**:

- 我们能够掌握如何将抽象的==情感洞察 (Emotional Insight)==，转化为具体、可执行的设计方案。
    
- 我们能够学习重构==信息架构 (Information Architecture)== 与==用户流程 (User Flow)==，以提升用户体验。
    
- 我们能够理解创意方案不仅要“有创意”，还必须得到==技术可行性 (Technical Feasibility)== 的验证。
    
- 我们能够理解 UX Expert 和 Architect 在方案升华阶段的关键作用。
    

---

### Step 1: 确立创意核心 (Establishing the Creative Core)

🎨 **@Sally (UX Expert)**

- 🤔 **思考**: 在模块二中，我们发现了版本A “冷冰冰”的问题，并挖掘出 Chloe 的核心情感需求是“柔软、温暖、乐趣”。现在，我需要一个强有力的==创意核心 (Creative Core)== 来统领整个新设计，将这些情感价值注入产品。这个核心必须==既能打动 Chloe，也能吸引其他潜在用户==。
    

---

💬 **@Sally (UX Expert):**

> @All，基于对 Chloe 的分析，我提议将版本B的设计主题定为：
> 
> > **“重拾柔软时光
> > (Rediscover Soft Moments)”**
> 
> 这个主题既温馨又充满想象空间，完美地回应了用户的情感需求。
---


#### 重新拟定有温度的主题锚点

> 接下来，所有的设计，从页面命名到交互流程，都将为这个主题服务。
![bg fit left:50% vertical](https://i.imgur.com/BrJYY7x.webp)

---


### Step 2: 重构设计方案 (Reconstructing the Design - Version B)

🎨 **@Sally (UX Expert)**

- 🤔 **思考**: 这是将创意落地的关键一步。我需要逐一重构版本A的每个页面和流程，确保它们都服务于“重拾柔软时光”的新主题。
    
---


**首页 (Homepage)**: 必须在用户进入的第一秒就传递出温暖和惊喜，并==一步到位 (One-click satisfaction)== 解决用户的核心痛点。

我们用一个突出的==行动召唤卡片 (CTA Card)== 直接展示下一次活动，用户无需任何寻找。

![bg fit left:50% vertical](https://i.imgur.com/XfnIXwf.webp)


---


**活动页 (Events Page)**: 

不能只是一个列表，要让它感觉像一个充满==活力和回忆== 的社区空间。

我把它重新命名为“欢乐时光 (Happy Hours)”，并加入了“温暖的回忆”照片墙，以增强==社会认同感 (Social Proof)==。

![bg fit left:50% vertical](https://i.imgur.com/r8R0LYH.webp)


---


**关于我们**: 

必须取代枯燥的 “关于我们”，用它来塑造==品牌个性和文化 (Brand Identity & Culture)==。

新的“柔软的约定 (The Soft Pact)”页面，将帮助我们与用户建立更深的情感连接。

![bg fit left:50% vertical](https://i.imgur.com/O1nYLpY.webp)



---

**赞助商页**: 

重新命名为“温暖伙伴 (Warm Partners)”， 
对赞助商的赞美, 
也成这次活动为大家送温暖的伙伴强调情感连接。

![bg fit left:50% vertical](https://i.imgur.com/dsSfTko.webp)


---

💬 **@Sally (UX Expert):**

> 好了，这是我基于新主题重构的 **版本B线框图**。
> 
![bg fit left:50% vertical](https://i.imgur.com/imv3ZCy.webp)


---

### Step 3: 优化任务流程 (Optimizing the Task Flow)

🎨 **@Sally (UX Expert)**

- 🤔 **思考**: 好的设计必然会带来更高效的用户流程。我需要绘制出版本B的 **Task Flow (任务流程)**，并将其与版本A进行直观对比，以量化我们所做的体验优化。这将是证明我们设计价值的有力证据。
    

---

💬 **@Sally (UX Expert):**

> 为了验证新设计的效率，我绘制了版本B的 **Task Flow (任务流程)**。
> 
> > 大家可以清晰地看到，通过在首页前置核心信息，我们将用户完成核心任务的步骤从6步**缩短到了4步**。更重要的是，用户体验从“主动寻找”变成了“轻松发现”。
![bg fit left:50% vertical](https://i.imgur.com/eLmKRsc.webp)

---

### Step 4: 技术可行性评估 (Technical Feasibility Check)

🏗️ **@Winston (Architect)**

- 🤔 **思考**: 作为 Architect，我的职责是确保设计的“梦想”能够平稳落地。任何设计方案，无论多惊艳，如果技术上难以实现、成本过高或性能低下，都是不可接受的。我需要从==实现成本 (Implementation Cost)==、==性能 (Performance)== 和==可维护性 (Maintainability)== 三个角度来评估版本B。
    

---

💬 **@Winston (Architect):**

> @Sally，这个版本B的设计非常棒，而且从技术角度来看完全可行。
> 
> > 1. **模态窗口 (Modal)**: 在 Task Flow B 中使用的 Modal 弹窗是一个非常==轻量级 (Lightweight)== 的解决方案。它通过一次==异步请求 (Asynchronous Request)== 获取数据，无需刷新整个页面，用户体验流畅，开发成本也很低。
> >     
> > 2. **照片墙**: 实现起来很简单，可以使用现成的==前端库 (Frontend Library)== 来构建，不会带来性能瓶颈。
> >     
> 
> 总体来说，版本B在技术上是**稳健且高效的**。我这边批准通过。

---

### 总结

- 我们确立了“重拾柔软时光”的==创意核心==。
    
- 我们基于创意核心，完成了从线框图到任务流程的==方案重构 (Solution Reconstruction)==。
    
- 我们的新方案（版本B）得到了==技术可行性==的验证。
    
- 我们见证了 Analyst 的洞察力如何被 UX Expert 的创造力所实现，并最终由 Architect 的严谨性所保障。




---
## 模块四: 【低保真评审 & 转向高保真】

**教学目标**:

- 我们能够理解设计方案是如何在团队中进行阶段性评审并达成==共识 (Consensus)== 的。
    
- 我们能够明确从==低保真线框图 (Lo-Fi Wireframe)== 到==高保真原型 (Hi-Fi Prototype)== 的过渡路径。
    
- 我们能够了解在高保真设计阶段，必须建立的关键==规范文档和流程==。
    

---


### Step 1: 低保真方案评审

**主导角色**: 📝 **@Sarah (PO / 产品负责人)**

**思考**: 作为PO，我现在的任务不是批准“最终产品”，而是批准“**正确的设计方向**”。
    

> @All，版本B的线框图和Task Flow清晰地展示了一个以用户情感为中心的设计方向。
> 
> > 我在此批准**版本B的低保真方案**。这意味着我们对产品的**“骨架”**达成了共识。@Sally，你可以基于这个骨架，开始下一阶段的“血肉”填充工作了。

---


### Step 2: 启动高保真设计阶段

**主导角色**: 🥁 **@Bob (SM / Scrum Master)**

- 🤔 **思考**: 既然低保真方案已获批准，我的职责是明确下一阶段的目标，并让团队成员知道“接下来要做什么”。
    

💬 **🥁 @Bob (SM):**

> 好的，Sarah。那么我们正式启动下一个设计阶段：**高保真原型设计**。
> 
> > @Sally (UX Expert)，从现在开始，你的主要任务是将这些线框图转化为精美的、包含所有视觉元素的高保真UI界面。
> 
> > 为了让下游团队提前同步，我也邀请了 @James (Dev) 和 @Quinn (QA) 旁听。你们现在可以开始思考这个设计方向可能的技术点和测试点。

### Step 3: 高保真设计的基础工作

**主导角色**: 🎨 **@Sally (UX Expert)** & 🏗️ **@Winston (Architect)**

- 🤔 **思考**: 在正式开始绘制具体的UI界面之前，我们需要先搭建好设计的“基础设施”。
    

---


💬 **🎨 @Sally (UX Expert):**

> 收到，Bob。在我开始绘制页面前，我会先着手创建项目的 **Style Guide (样式指南)**。我会定义好主色板、字体层级和基础间距。


> 同时，我会开始规划项目的 **Design System (设计系统)** 的基础结构，将常见元素（如按钮、卡片）抽象化，为之后创建可复用的**组件 (Components)** 做准备。这样做，能让未来的开发交接==事半功倍==。

---


**1. 设计系统 (Design System)**:
- **What**: 定义项目中所有可复用组件（按钮、输入框、卡片等）及其不同状态（默认、悬停、禁用等）的库。

- **Why**: 确保整个产品的视觉和交互体验高度统一，并极大提升开发效率。

![bg fit left:50% vertical](https://i.imgur.com/j3HWwsZ.webp)


---

**2. 样式指南 (Style Guide)**:

- **What**: 规定了项目的品牌颜色、字体层级、间距规范、图标库、栅格系统等视觉基础元素。
    
- **Why**: 它是设计系统的基础，确保品牌形象的一致性。


![bg fit left:50% vertical](https://i.imgur.com/vJW3D3V.webp)

---


**3. 组件规范 (Component Specification)**:

- **What**: 针对每一个复杂组件的详细说明文档，标注其尺寸、边距、交互行为、以及各种边缘情况 (Edge Cases) 的处理方式。
    
- **Why**: 这是设计师与开发者之间最直接的沟通桥梁，能最大限度地减少实现过程中的误解和偏差。

![bg fit left:50% vertical](https://i.imgur.com/yvV7uew.webp)


---

### 总结与过渡

- 我们通过 **PO** 的评审，最终确定了版本B为开发蓝本。
    
- 我们通过 **SM** 的总结，明确了下一阶段的任务是==高保真设计==，并认识了开发与测试的新伙伴。
    
- 我们通过 **Architect** 的补充，了解了在高保真设计阶段，为了团队高效协作，必须建立的==设计系统、样式指南==等关键规范。



---

规划类分析图表

Lean Canvas 
[ 🌐 figma Lean Canvas (Copy) – FigJam](@https://www.figma.com/board/RpHVyGJSegnyddf2ht5Zlo/Lean-Canvas--Copy-?node-id=0-1&p=f&t=t9B9T9I0azC1yR0P-0)




---

## B-mad 优化的产品需求流程与 Agent 职责

本文档基于 B-mad (Breakthrough Method of Agile AI-driven Development) 框架，对传统的产品需求文档（PRD）流程进行优化。其核心思想是通过**专职 AI Agent**、**结构化模板**和**明确的工作流**，将产品从概念到交付的整个生命周期进行系统化、自动化和高效化管理。

整个流程分为两个核心阶段：

1. **规划与设计阶段**: 由专职的“规划型” Agent 协作完成，产出所有必需的蓝图文档。
    
2. **开发与交付阶段**: 将规划文档转化为可执行的开发单元，并通过一个结构化的循环进行高效交付。
    

### 阶段一：规划与设计 (The "What" & "How")

此阶段的目标是创建一套完整、一致且可供开发团队直接使用的规划文档。每个步骤都由专门的 Agent 负责，以保证专业性和质量。

#### 步骤 1: 项目启动与市场分析 (Project Kick-off & Market Analysis)

- **负责 Agent**: `analyst` (Business Analyst)
    
- **核心职责**: 定义项目的“Why”，并进行初步的可行性探索。
    
- **关键行动**:
    
    1. **引导 brainstorming**: 与您协作，使用 `facilitate-brainstorming-session` 任务来探索想法。
        
    2. **进行市场研究**: （可选）执行 `perform-market-research` 等任务，分析市场和竞品。
        
- **核心产出**: **`docs/project-brief.md` (项目简介)**
    
    - 这份文档是所有后续工作的基础，清晰地定义了：
        
        - **问题陈述**: 要解决的核心用户痛点。
            
        - **目标用户画像**: 明确为谁构建产品。
            
        - **商业目标与成功指标**: 如何衡量项目的成功。
            
        - **MVP 范围**: 初步界定最小可行产品的核心功能。
            

#### 步骤 2: 产品需求定义 (Product Requirements Definition)

- **负责 Agent**: `pm` (Product Manager)
    
- **核心职责**: 将项目愿景转化为具体、结构化的功能需求。
    
- **关键行动**:
    
    1. **输入**: 接收 `project-brief.md` 作为核心输入。
        
    2. **执行 `create-doc` 任务**: 基于 `prd-tmpl.yaml` 模板，以交互方式生成 PRD。
        
- **核心产出**: **`docs/prd.md` (产品需求文档)**
    
    - 这份文档是项目的“功能蓝图”，其关键部分包括：
        
        - **功能性与非功能性需求**: 详尽的需求列表。
            
        - **技术假设 (Technical Assumptions)**: **关键交接点**。明确所有已知的技术约束和偏好（如技术栈、架构风格），为 `architect` Agent 提供明确的指导。
            
        - **Epic 与 Story 结构**: 将需求分解为逻辑上连续、可交付价值的 `Epics` 和 `Stories`，并为每个 `Story` 定义了明确的**验收标准 (Acceptance Criteria)**。
            

#### 步骤 3: 用户体验与界面设计 (User Experience & Interface Design)

- **负责 Agent**: `ux-expert` (UX Expert)
    
- **核心职责**: 定义产品的“感觉”和“外观”，确保用户体验的一致性。
    
- **关键行动**:
    
    1. **输入**: 接收 `prd.md` 作为功能和用户需求的来源。
        
    2. **生成规格**: 创建详细的用户流程、信息架构和交互说明。
        
- **核心产出**: **`docs/front-end-spec.md` (前端规格文档)**
    
    - 这份文档将 UI/UX 设计与功能需求解耦，专注于用户体验，包含用户流程图、线框图描述、组件库概念和品牌风格指南。
        

#### 步骤 4: 系统架构设计 (System Architecture Design)

- **负责 Agent**: `architect` (Architect)
    
- **核心职责**: 设计系统的“骨架”，将功能和非功能性需求转化为具体的技术实现方案。
    
- **关键行动**:
    
    1. **输入**: 接收 `prd.md` (尤其是“技术假设”) 和 `front-end-spec.md`。
        
    2. **执行 `create-doc` 任务**: 基于 `architecture-tmpl.yaml` 模板创建架构文档。
        
- **核心产出**: **`docs/architecture.md` (架构文档)**
    
    - 这份文档是开发的“技术圣经”，定义了：
        
        - **技术栈**: 明确所有使用的技术、框架和版本。
            
        - **数据模型与 API 规格**: 定义数据如何存储和交互。
            
        - **组件与服务设计**: 系统各部分的职责和关系。
            
        - **源代码树结构**: 规定项目的目录结构。
            
        - **编码与测试标准**: 为开发和质量保证提供统一规范。
            

#### 步骤 5: 规划验证 (Planning Validation)

- **负责 Agent**: `po` (Product Owner)
    
- **核心职责**: 担当“质量守门员”，确保所有规划文档之间不存在冲突和遗漏。
    
- **关键行动**:
    
    1. **执行 `po-master-checklist`**: 对 `project-brief.md`, `prd.md`, `front-end-spec.md`, `architecture.md` 进行全面的一致性和完整性校验。
        
- **核心产出**: **一份验证报告**
    
    - 此步骤是一个**关键质量关口**。任何发现的问题都必须返回给相应的 Agent 进行修复，直到所有文档都通过验证。
        

### 阶段二：开发与交付 (The Execution Loop)

此阶段的目标是将经过验证的规划蓝图，转化为高质量、可工作的软件。B-mad 框架通过一个严谨的、循环的流程来保证开发过程的高效和可预测性。

#### 步骤 6: 文档分片 (Document Sharding)

- **负责 Agent**: `po` 或 `sm` (Scrum Master)
    
- **核心职责**: 将宏观的规划文档转化为敏捷的、可操作的开发单元。
    
- **关键行动**:
    
    1. **执行 `shard-doc` 任务**: 将 `prd.md` 和 `architecture.md` 按二级标题（`##`）拆分成多个小文件。
        
- **核心产出**: **`docs/prd/` 和 `docs/architecture/` 目录**
    
    - 例如，`prd.md` 中的 `## Epic 1: 用户认证` 会被拆分为 `docs/prd/epic-1-user-authentication.md`。这个步骤是**连接规划与开发的关键桥梁**。
        

#### 步骤 7: 故事准备 (Story Preparation)

- **负责 Agent**: `sm` (Scrum Master)
    
- **核心职责**: 为 `dev` Agent 准备一个完全自包含、上下文丰富的“工作包”。
    
- **关键行动**:
    
    1. **执行 `create-next-story` 任务**: 根据项目进度，从分片后的 `epic` 文件中识别出下一个要做的 `Story`。
        
- **核心产出**: **`docs/stories/{epic}.{story}.md` (故事文件)**
    
    - **B-mad 核心优化点**: `sm` Agent 在创建此文件时，会自动从分片后的架构文档中**提取所有相关的技术上下文**（如 API 规格、数据模型、文件路径等），并将其注入到 `Story` 文件的 **`Dev Notes`** 部分。这使得 `dev` Agent 无需再去翻阅庞大的架构文档。
        

#### 步骤 8: 故事实现 (Story Implementation)

- **负责 Agent**: `dev` (Developer)
    
- **核心职责**: 精准地执行 `Story` 文件中定义的任务，编写代码和测试。
    
- **关键行动**:
    
    1. 在一个**全新的、干净的会话**中启动，只加载当前要实现的 `Story` 文件。
        
    2. 严格按照 `Tasks / Subtasks` 和 `Dev Notes` 进行开发。
        
- **核心产出**:
    
    - **实现代码和单元测试**。
        
    - 更新 `Story` 文件中的任务复选框，并填写 `Dev Agent Record`。
        
    - 将 `Story` 状态更新为 **`Review`**。
        

#### 步骤 9: 质量保证 (Quality Assurance)

- **负责 Agent**: `qa` (QA Specialist)
    
- **核心职责**: 作为资深开发者和测试架构师，对实现的代码进行审查和改进。
    
- **关键行动**:
    
    1. **执行 `review-story` 任务**: 进行代码审查、风险评估和测试覆盖率分析。
        
    2. （可选）直接对代码进行重构和优化。
        
- **核心产出**:
    
    - 一份详细的 **QA 结果报告**，追加到 `Story` 文件中。
        
    - 一个最终的 `Story` 状态：**`Done`** (如果通过) 或返回 **`InProgress`** (如果需要 `dev` Agent 修改)。
        

此 `SM -> DEV -> QA` 的循环将持续进行，直到完成一个 `Epic` 中的所有 `Stories`，然后再进入下一个 `Epic`。

#### 总结：B-mad 优化流程的优势

- **清晰的角色分离**: 每个 Agent 都有单一、明确的职责，防止角色混淆和任务遗漏。
    
- **高度一致的产出**: 基于模板和 checklists 的工作流确保了所有文档和代码产出的质量和一致性。
    
- **动态且可操作的文档**: 通过“分片”和“上下文注入”，规划文档不再是静态的参考，而是驱动开发的动态指令。
    
- **极致的开发效率**: 自包含的 `Story` 文件最大程度地减少了开发人员的上下文切换成本，使其能够专注于代码实现。