# 构建面向 RAG 的科研知识库：Zotero 与 Obsidian 的高效分类管理策略

[[old-test-api]]
![|200](https://www.gstatic.com/lamda/images/gemini_thumbnail_v2_55a4e3be7b83404a620e5.jpg)
(Source: [google.com: Google Gemini](https://gemini.google.com/u/1/app/85c06afbb89351a1))


(Source: [google.com: Obsidian科研知识库构建方案 - Google Docs](https://docs.google.com/document/d/10p7AMYA4qu-BnSKKdjCUgf5yTRmAj2lQfg448afFifs/edit?tab=t.0))

  
[[ANOTE]]
## 第 1 章：构建以 RAG 为核心的科研知识库架构

  

在配置任何工具或插件之前，必须首先设计一个稳健、可扩展且计算友好的知识架构。该架构是实现高效信息管理，特别是构建一个对检索增强生成（Retrieval-Augmented Generation, RAG）模型友好的知识库的基石。本章将阐述构建此架构的核心原则，涵盖笔记的原子性、结构化数据的重要性，以及一种结合了文件夹、标签和链接的混合组织策略。


### 1.1 计算可访问笔记的剖析：原子性与结构化数据原则

  

一个成功的科研知识管理体系，其核心在于将研究人员的思维过程——从初步的灵感到最终的综合洞见——映射到一种数字化的、可计算的结构中。

  

#### 1.1.1 从"闪念笔记"到"原子笔记"的演化路径

  

学术工作流需要对不同阶段的笔记进行明确区分。整个过程始于"闪念笔记"（Fleeting Notes），即在阅读文献时产生的初步高亮和即时想法；随后发展为"文献笔记"（Literature Notes），这是对单一文献来源的结构化总结；最终升华为"永久笔记"（Permanent Notes），即经过提炼和综合、能够独立存在的原子化思想单元 1。这种从原始捕获到结构化洞见的演进路径，是卢曼卡片盒笔记法（Zettelkasten）的核心思想，该方法与 Obsidian 基于链接的特性高度兼容 1。

  

#### 1.1.2 原子性：RAG 的基本前提

  

将宏大的思想分解为小型、自洽且可链接的"原子笔记"至关重要 3。对于 RAG 系统而言，每一则原子笔记都扮演着一个离散的、富含上下文的信息"区块"（chunk）。当用户提出查询时，检索系统能够精准地抓取这些高度相关的信息区块，从而生成更准确、更有依据的回答。与之相反，一篇包含数十个不同观点的长篇笔记，在计算上是"不透明"的，其检索效率低下，无法满足 RAG 的精度要求。

  

#### 1.1.3 结构化数据：将非结构化文本转化为机器可读资产

  

核心任务之一是将非结构化文本（如一篇 PDF 论文）转化为 Obsidian 内部的结构化、机器可读数据。这一转化主要通过两种机制实现：YAML 前置元数据（在 Obsidian 中称为"属性"）和行内键值对 5。正是这种结构化处理，使得知识库变得"可查询"，并最终对 RAG 友好。

  

#### 1.1.4 战略选择：混合式卡片盒模型

  

在实践中，研究人员常常面临两种笔记类型的选择：一种是全面记录单篇文献的"文献笔记" 1，另一种是高度精炼、聚焦单一思想的"原子笔记"或"永久笔记" 1。一个不成熟的工作流可能会将二者视为相互排斥的体系，但最高效的策略是构建一个混合模型。

该模型包含两个相互关联的层级：

1. 源导向层（Source-Oriented Layer）：由"文献笔记"构成。每一篇文献笔记（例如，devocht_conceptualising_2021.md）都是一个稳定的、结构化的容器，它包含了与单一文献来源相关的所有信息：完整的元数据、作者摘要、用户自己的总结，以及所有的高亮和注释 3。这确保了信息的来源和原始上下文始终清晰可追溯。
    
2. 概念导向层（Concept-Oriented Layer）：由"永久笔记"或"原子笔记"构成。每一篇永久笔记（例如，[[概念 - 概念整合]]）都致力于阐述一个单一、独立的思想。它通过链接的方式，引用和综合来自多篇不同"文献笔记"中的具体段落或区块 1。
    

这种双层结构对于 RAG 系统极为有利。当一个查询被提出时，系统可以根据需求，选择检索特定作者对某个问题的完整看法（通过访问文献笔记），或者通过追踪永久笔记中的链接，检索关于某个概念的多方观点综述。因此，本报告强烈推荐采用这种混合模型，它既保留了文献的完整上下文，又促进了跨文献的思想链接与合成。

  

### 1.2 组织三元体系：文件夹、标签与链接的混合策略

  

有效的知识库组织并非依赖单一工具，而是通过文件夹、标签和链接这三种工具的协同作用，为不同范围的组织需求提供解决方案。将这三者视为一个系统，可以避免组织混乱和决策疲劳 9。

  

#### 1.2.1 文件夹：用于宽泛、稳定的分类

  

文件夹提供了一种自上而下的层级结构，符合大多数用户的直觉 5。然而，其主要缺点在于刚性——一篇笔记只能存在于一个文件夹中 5。因此，最佳实践是审慎地使用文件夹，仅将其用于划分非常宽泛且明确的类别。一个推荐的结构是使用数字前缀（一种简化的 Johnny Decimal 系统）来强制维持文件夹的逻辑顺序 5。

推荐的顶层文件夹结构：

- 01_Sources：存放所有从 Zotero 导入的文献笔记。
    
- 02_Concepts：存放所有永久/原子笔记。
    
- 03_Projects：存放与具体研究项目相关的笔记和 MOC。
    
- 04_Fleeting：存放临时的、未处理的快速笔记。
    
- 99_Meta：存放模板、附件、CSS 片段等支持性文件 4。
    

这种策略将文件夹的功能限定在管理文件的"物理和逻辑边界"，区分了根本不同类型的信息，从而建立了一个稳定、清晰的底层结构。

  

#### 1.2.2 标签：用于状态和类型的动态追踪

  

标签比文件夹更灵活，因为一篇笔记可以拥有多个标签 5。它们最适合用于描述笔记的元数据属性，尤其是其"状态"（status）或"类型"（type），而非其"主题"（topic）。

推荐的标签使用策略：

- 状态标签（Status Tags）：用于追踪工作流。例如：`#status/to-read`（待读）、`#status/reading`（在读）、`#status/done`（已读）6。
    
- 类型标签（Type Tags）：用于标识笔记的性质。例如：`#type/lit-note`（文献笔记）、`#type/meeting-note`（会议纪要）、`#type/permanent-note`（永久笔记）6。
    
- 嵌套标签（Nested Tags）：用于创建可查询的层级关系，而无需受限于文件夹。例如，``#project/alpha`/methods` 可以精确地标记出属于 Alpha 项目的方法论部分笔记 4。
    

标签的核心功能是"工作流管理"。它描述了一篇笔记在其生命周期中的位置和作用，而不是其内容本身。

  

#### 1.2.3 链接：作为知识网络的核心组织工具

  

双向链接（Backlinks）是 Obsidian 中最强大、最灵活的组织工具，它能够构建一个真正的知识图谱 3。与其用

#ProjectA 这样的标签来标记一篇笔记，不如在笔记中创建一个指向 [[Project A]] 的链接。

这种做法的优势在于，[[Project A]] 这篇笔记本身变成了一个"内容地图"（Map of Content, MOC）。MOC 是一个中心枢纽，它不仅能自动列出所有链接到它的笔记（通过反向链接面板），还能包含自身的描述性文本、项目目标、任务列表和动态更新的 Dataview 查询 4。这种方法将组织类别从一个简单的标签，提升为一个内容丰富的、可编辑的知识文档。

链接的本质是"知识合成"。它定义了笔记"内容"之间的概念关系，完全不受笔记所在的文件夹或其状态标签的限制。一篇位于 01_Sources 文件夹中的文献笔记，可以同时链接到 03_Projects 中的项目 MOC 和 02_Concepts 中的概念笔记。

  

#### 1.2.4 决策框架："范围系统"

  

为了在实践中清晰地选择使用哪种组织工具，可以采用以下决策框架，即"范围系统"：

1. 我是在管理文件的类别吗？ 如果是，使用文件夹。这关乎文件的物理存储和高层逻辑划分。
    
2. 我是在管理笔记的流程或属性吗？ 如果是，使用标签。这关乎笔记在工作流中的状态和元数据。
    
3. 我是在连接不同笔记中的思想吗？ 如果是，使用链接。这关乎知识的发现、合成与创造。
    

这个框架将一个看似复杂的选择，转化为一个基于意图的逻辑决策过程，从而构建一个清晰、一致且对 RAG 友好的知识库。

表 1：Obsidian 组织方法的比较

|   |   |   |   |   |   |
|---|---|---|---|---|---|
|方法|主要用例|灵活性|可扩展性|RAG 友好度|示例|
|文件夹|静态、高层级的类别划分（如：Sources, Projects, Meta）|低|中|低|01_Sources/hormann_continuous_2003.md|
|标签|动态的状态和类型追踪（如：status, type, project）|中|高|中|`#status/to-read`, `#type/lit-note`|
|链接/MOC|概念连接和思想合成，构建知识网络|高|高|高|[[文献笔记]] 链接到 [[概念A]] 和 ]|

  

### 1.3 设计核心元数据模式：文献笔记的蓝图

  

为了使知识库可查询和计算，必须为每篇文献笔记定义一个一致的元数据模式。Obsidian 的属性（YAML Frontmatter）是实现这一目标的主要机制 5。

  

#### 1.3.1 最少必要元数据原则

  

设计元数据模式时应遵循"最少必要原则"：不要添加没有明确用途的字段。未使用的元数据会增加认知负担和维护成本 6。模式中的每个字段都应旨在回答一个具体问题或驱动一个特定的 Dataview 查询。

  

#### 1.3.2 文献笔记的核心字段

  

综合多个学术工作流的最佳实践，推荐为文献笔记建立以下核心元数据模式 1：

- aliases: 用于笔记的别名，如文章的副标题或常用简称。
    
- citekey: 唯一的 Better BibTeX 引用密钥，是连接 Obsidian 笔记与 Zotero 条目的核心枢纽。
    
- author: 文章作者，推荐使用链接形式 [[Author Name]]，以便构建作者网络。
    
- year: 出版年份。
    
- type: 笔记类型，固定为 lit-note 以便筛选。
    
- tags: 用于工作流和项目分类的标签列表。
    
- related: 指向其他相关笔记（概念、项目或其他文献）的链接列表。
    
- url/doi: 原始文献的直接访问链接。
    
- created: 笔记的创建日期，使用模板自动生成，以避免文件系统日期的不可靠性。
    

表 2：推荐的文献笔记核心元数据模式

|   |   |   |   |
|---|---|---|---|
|属性键|数据类型|描述与目的|示例|
|aliases|列表（List）|提供笔记的替代标题，便于搜索和链接。|``|
|citekey|文本（Text）|唯一的 Zotero 引用标识符，用于确保系统集成。|hormann_continuous_2003|
|author|列表/链接|记录作者，并创建指向作者 MOC 的链接。|[[Hormann, Wolfgang]]|
|year|数字（Number）|记录出版年份，用于按时间排序和筛选。|2003|
|type|文本（Text）|定义笔记类型，用于 Dataview 查询中精确筛选。|lit-note|
|tags|标签列表|用于追踪笔记状态和所属项目。|[status/done, project/alpha]|
|related|链接列表|手动添加与此笔记内容相关的其他笔记链接。|["[[概念 - 逆变换采样]]", "[[项目 - 模拟方法学]]"]|
|url|文本（Text）|存储原始文献的 URL，便于快速访问。|https://doi.org/10.1145/945511.945514|
|created|日期（Date）|记录笔记在 Obsidian 中的创建时间，用于追踪工作。|2024-05-20|

这个标准化的元数据蓝图，将为后续章节中介绍的自动化导入、动态查询和 RAG 优化奠定坚实的基础。

  

## 第 2 章：Zotero-Obsidian 枢纽：深度集成工作流详解

  

本章将详细介绍连接 Zotero 和 Obsidian 的技术实现，重点是创建一个从文献管理到笔记合成的自动化数据管道。我们将配置必要的插件，并构建一个强大的导入模板，以实现无缝集成。

  

### 2.1 配置生态系统：核心插件与设置

  

一个功能完备的集成环境依赖于 Zotero 和 Obsidian 两端特定插件的协同工作。

  

#### 2.1.1 Zotero 端配置

  

在 Zotero 中，需要安装并配置以下关键插件：

- Better BibTeX for Zotero (BBT)：这是强制性的先决条件。BBT 为 Zotero 中的每个条目生成稳定、唯一且可自定义的引用密钥（citekey）3。这个  
    citekey 将作为 Obsidian 笔记的文件名和连接两个应用的核心标识符。
    

- 配置建议：在 BBT 的设置中，将引用密钥格式配置为一种兼具可读性和唯一性的模式。一个广受推荐的格式是 auth.lower + '_' + shorttitle(1,1).lower + '_' + year 3。例如，一篇由 Hörmann 在 2003 年发表的题为 "Continuous random variate generation..." 的论文，其  
    citekey 将是 hormann_continuous_2003。
    

- Zotfile（可选但推荐）：对于需要深度管理 PDF 附件的用户，Zotfile 是一个强大的工具。它可以根据元数据自动重命名和移动 PDF 文件，帮助用户在 Zotero 之外维持一个有组织的本地文件系统 1。
    
- Better Notes（替代工作流）：此插件提供了一种 Zotero 笔记与 Obsidian 文件之间的双向同步机制 19。这与下文将要详述的  
    Zotero Integration 插件的单向推送模式不同。对于那些偏好在 Zotero 的 PDF 阅读器和笔记面板中完成大量写作工作的研究者来说，这是一个值得考虑的替代方案。
    

  

#### 2.1.2 Obsidian 端配置

  

在 Obsidian 中，需要从社区插件市场安装并启用以下插件：

- Zotero Integration (by mgmeyers)：这是实现本报告所述核心工作流的关键插件。它负责从 Zotero 提取元数据和注释，并根据模板在 Obsidian 中创建文献笔记 16。
    
- Templater：虽然 Zotero Integration 插件自带了强大的 Nunjucks 模板引擎，但 Templater 插件提供了更高级的脚本能力和动态内容生成功能，可以与前者协同工作，处理更复杂的模板需求 15。
    
- Dataview：这是激活知识库的引擎。它能够查询在笔记中通过 YAML 和行内字段定义的结构化数据，用于创建动态的目录和仪表盘。本章将介绍其安装，详细用法见第四章 16。
    
- Highlightr（可选）：此插件可以确保从 Zotero 导入的高亮颜色在 Obsidian 中得到正确的视觉呈现，特别是当用户使用的主题本身不支持自定义高亮颜色时 15。
    

  

#### 2.1.3 Zotero Integration 插件的核心配置

  

安装并启用 Zotero Integration 插件后，需要进行以下关键配置：

1. 数据库（Database）：在插件设置中，选择 Zotero 作为数据库 16。
    
2. 笔记导入位置（Note Import Location）：指定一个文件夹用于存放所有新创建的文献笔记，例如，在第一章中建议的 01_Sources/ 3。
    
3. 创建导入格式（Import Formats）：这是配置中最关键的一步。点击 Add Import Format 创建一个新的导入格式，并进行如下设置 3：
    

- 名称（Name）：为该格式指定一个描述性名称，如 Academic Literature Import。
    
- 输出路径（Output Path）：定义新笔记的存放路径和文件名。这里必须使用 {{citekey}} 变量，例如：01_Sources/{{citekey}}.md。
    
- 图片输出路径（Image Output Path）：定义从 PDF 中截取的图片存放的位置，例如 99_Meta/attachments/{{citekey}}。
    
- 模板文件（Template File）：选择一个 Markdown 文件作为导入模板。这个模板将决定从 Zotero 导入的数据如何被组织和格式化。下一节将详细介绍如何创建这个模板。
    

  

#### 2.1.4 战略选择：不同的集成哲学

  

研究资料显示，社区中存在多种连接 Zotero 和 Obsidian 的方法，主要以 Zotero Integration 15 和

Better Notes 19 为代表，这常常让用户感到困惑。正确的选择取决于研究者的核心工作偏好。

- Zotero Integration：单向推送模型。数据流向是从 Zotero 到 Obsidian。它擅长利用强大的 Nunjucks 模板，从 Zotero 的元数据和注释中创建高度结构化、信息丰富的 Obsidian 笔记。这种模式最适合那些将 Obsidian 视为主要思考、写作和知识合成环境的用户。
    
- Better Notes：双向同步模型。它将 Zotero 中的一个特定笔记与 Obsidian 中的一个 Markdown 文件进行双向同步。这种模式最适合那些习惯于在 Zotero 的 PDF 阅读器和笔记面板中撰写大量详细笔记，并希望这些笔记能被实时镜像到 Obsidian 中以便进行链接和发现的用户。
    

本报告将重点阐述基于 Zotero Integration 的工作流，因为它更符合在 Obsidian 中构建一个复杂、可查询的知识图谱的目标。然而，Better Notes 仍然是一个有效的替代方案，用户可根据自身习惯进行选择。

  

### 2.2 打造大师级导入模板：Nunjucks 模板语言分步指南

  

导入模板是整个自动化工作流的心脏。它使用 Nunjucks 模板语言，将 Zotero 的原始数据转化为结构化的 Markdown 笔记 21。

  

#### 2.2.1 Nunjucks 模板语言基础

  

Nunjucks 的基本语法包括：

- {{ variable }}：用于输出变量的值。
    
- {% logic %}：用于控制流，如 if 条件判断和 for 循环。
    

  

#### 2.2.2 探索可用数据：Data Explorer

  

在开始编写模板之前，必须了解 Zotero Integration 插件能提供哪些数据。使用 Obsidian 命令面板 (Ctrl/Cmd + P) 执行 Zotero Integration: Data Explorer 命令，然后选择一个 Zotero 条目，插件就会在一个新标签页中显示所有可用的数据字段及其结构 16。这是开发和调试模板不可或缺的工具。

  

#### 2.2.3 模块化构建模板

  

一个功能完备的导入模板应至少包含以下几个模块：

1. YAML 前置元数据（属性）：  
    模板的起始部分应根据第一章定义的元数据模式生成 YAML Frontmatter。这涉及到从 Zotero 提取核心数据。  
    Code snippet  
    ---  
    aliases: ["{{title}}"]  
    citekey: {{citekey}}  
    author: [{% for creator in creators %}"[[{{creator.firstName}} {{creator.lastName}}]]"{% if not loop.last %}, {% endif %}{% endfor %}]  
    year: {{year}}  
    type: lit-note  
    tags: [status/reading]  
    related:  
    url: {{url}}  
    doi: {{doi}}  
    created: "{{date | format("YYYY-MM-DD")}}"  
    ---  
      
    这段代码利用 for 循环来处理多位作者，并使用 loop.last 来避免在最后一位作者后添加多余的逗号 21。
    
2. 参考文献与快捷链接：  
    在元数据之后，应包含格式化的参考文献条目和几个快捷链接，以便快速返回 Zotero 或访问原文。  
    Code snippet  
    > [!cite]  
    > {{bibliography}}  
      
    **Links:**  
    - Zotero URI: [Open in Zotero]({{desktopURI}})  
    {% if pdfLink %}- PDF:({{pdfLink}}){% endif %}  
      
    {{bibliography}} 会根据 Zotero 中设置的引文格式生成参考文献 21。  
    {{desktopURI}} 则提供了直接在 Zotero 桌面应用中打开该条目的链接 15。
    
3. 摘要（Abstract）：  
    使用 if 条件判断，只有当文献条目包含摘要时才显示该部分。  
    Code snippet  
    {% if abstractNote %}  
    ## Abstract  
    {{abstractNote}}  
    {% endif %}  
      
    
4. 注释处理（Annotations）：  
    这是模板中最复杂也最有价值的部分。它需要遍历 annotations 数组，并根据注释的类型和颜色进行不同处理 21。  
    Code snippet  
    ## Annotations  
      
    {% for annotation in annotations %}  
    {% if annotation.color == "#ffd400" %} {# Yellow for key points #}  
    > [!quote] Key Point (p.{{annotation.page}})  
    > {{annotation.annotatedText | nl2br}}  
    > {% if annotation.comment %}  
    > > [!note] Comment  
    > > {{annotation.comment | nl2br}}  
    > {% endif %}  
    > [Page {{annotation.page}} in Zotero](zotero://open-pdf/library/items/{{annotation.attachment.itemKey}}?page={{annotation.page}}&annotation={{annotation.id}})  
      
    {% elif annotation.color == "#2ea8e5" %} {# Blue for methodology #}  
    > [!info] Methodology (p.{{annotation.page}})  
    >... (similar structure)...  
      
    {% elif annotation.imageRelativePath %} {# Image annotations #}  
    > [!figure] Figure (p.{{annotation.page}})  
    >!]  
    > {% if annotation.comment %}  
    > > [!caption]  
    > > {{annotation.comment | nl2br}}  
    > {% endif %}  
    > [Page {{annotation.page}} in Zotero](zotero://open-pdf/library/items/{{annotation.attachment.itemKey}}?page={{annotation.page}}&annotation={{annotation.id}})  
      
    {% endif %}  
    {% endfor %}  
      
    此模板片段展示了如何根据颜色（annotation.color）将不同类型的高亮分类到不同的 Callout 块中 8。它还处理了图片注释（  
    annotation.imageRelativePath）和附带的评论（annotation.comment）。最重要的是，它为每条注释生成了一个深度链接，点击后可直接跳转到 Zotero 中 PDF 的对应页面和高亮位置 15。  
    nl2br 过滤器用于将评论中的换行符转换成 HTML 的 <br> 标签，以保留格式。
    
5. 持久化笔记区域（Persistent Notes Section）：  
    为了防止在重新导入时覆盖用户手动添加的笔记，模板的末尾必须包含一个持久化区域。  
    Code snippet  
    ## My Synthesis & Notes  
    {% persist "notes" %}  
      
    {% endpersist %}  
      
    所有写在 {% persist "notes" %} 和 {% endpersist %} 标签之间的内容，在后续的导入更新中都会被保留下来，不会被覆盖 8。这是确保工作流可持续性的一个非显而易见但至关重要的特性。
    

表 3：关键的 Zotero Integration 模板变量

|   |   |   |   |
|---|---|---|---|
|变量名|数据类型|描述|示例输出|
|{{citekey}}|文本|Better BibTeX 生成的唯一引用密钥。|hormann_continuous_2003|
|{{title}}|文本|文献标题。|Continuous random variate generation...|
|{{authors}}|列表|作者列表（作为文本）。|Hörmann, Wolfgang and Josef Leydold|
|{{creators}}|对象列表|作者对象列表，包含 firstName 和 lastName。|[{firstName: "Wolfgang", lastName: "Hörmann"},...]|
|{{year}}|数字|出版年份。|2003|
|{{tags}}|对象列表|Zotero 标签列表，每个标签是一个包含 tag 字段的对象。|[{tag: "simulation"}, {tag: "statistics"}]|
|{{annotations}}|对象列表|所有注释的列表。|``|
|{{annotation.annotatedText}}|文本|高亮的文本内容。|"The core idea is..."|
|{{annotation.comment}}|文本|对高亮的评论。|"This connects to Smith (2001)."|
|{{annotation.imageRelativePath}}|文本|截图在 Obsidian vault 中的相对路径。|99_Meta/attachments/hormann.../image.png|
|{{desktopURI}}|URL|打开 Zotero 桌面应用并选中该条目的链接。|zotero://select/library/items/ABCDE123|
|{{pdfLink}}|URL|直接打开 Zotero 中 PDF 附件的链接。|zotero://open-pdf/library/items/FGHIJ456|
|{{bibliography}}|文本|根据 Zotero 设置生成的格式化参考文献条目。|Hörmann, W., & Leydold, J. (2003)...|

  

### 2.3 完整的导入工作流：从 PDF 注释到 Obsidian 笔记

  

现在，我们将整个流程串联起来，形成一个无缝的工作流。

- 步骤 1：阅读与注释阶段（在 Zotero 中）
    

1. 在 Zotero 的内置 PDF 阅读器中打开一篇文献。
    
2. 应用一套一致的高亮颜色编码方案。例如：黄色用于核心论点，蓝色用于研究方法，红色用于局限性，绿色用于关键定义 8。
    
3. 为高亮添加评论，记录初步思考。
    
4. 使用区域选择工具截取图表，作为图片注释保存 13。
    
5. 为文献条目添加高层级的主题标签（Tags）2。
    

- 步骤 2：触发导入（在 Obsidian 中）
    

1. 确保 Zotero 桌面应用正在后台运行。
    
2. 在 Obsidian 中，通过命令面板 (Ctrl/Cmd + P) 或自定义的热键（如 Ctrl + Shift + Z）来调用之前创建的导入格式（例如 Academic Literature Import）3。
    
3. 一个搜索框会弹出，允许用户从 Zotero library 中模糊搜索并选择目标文献。
    

- 步骤 3：结果——结构化的文献笔记
    

1. 选择文献后，Zotero Integration 插件会立即在 Obsidian 中创建一个新的 Markdown 文件。
    
2. 该文件以文献的 citekey 命名，并被放置在预设的 01_Sources/ 文件夹中。
    
3. 文件的内容完全由 Nunjucks 模板自动生成，包含了所有结构化的元数据、快捷链接、按颜色分类的注释，以及一个供用户进一步写作的持久化笔记区域。
    

至此，一篇文献的原始信息已经成功地、结构化地转移到了 Obsidian 中，研究者可以进入下一阶段——精炼与知识合成。

  

## 第 3 章：为高精度检索构建和丰富内容

  

将数据从 Zotero 导入 Obsidian 只是第一步。本章的核心任务是阐述如何对这些导入的笔记进行后期处理和丰富，将其从原始资料转化为高度精炼、对 RAG 友好的知识资产。这需要掌握内容合成、块级元数据标注和 AI 辅助处理等高级技巧。

  

### 3.1 导入后策展：文献笔记与永久笔记的合成艺术

  

导入的文献笔记是知识合成的起点，而非终点。真正的价值产生于研究者对这些原始材料的深度加工。

  

#### 3.1.1 在持久化区域进行综合

  

用户在导入笔记后的首要任务，是在模板中预留的 {% persist "notes" %} 区域内进行工作 8。在这里，研究者可以：

- 撰写综合性总结：用自己的语言概括文章的核心论点、贡献和不足。
    
- 进行批判性分析：提出自己的见解、质疑或对文章观点的评价。
    
- 建立外部连接：明确指出该文献与其他作品（已存在于知识库中）的联系，例如，"该方法与 [[smith_new_technique_2022]] 中提出的方法形成对比"。
    

  

#### 3.1.2 创建原子化的永久笔记

  

在综合过程中，当一个关键概念、理论或方法浮现时，应为其创建一个新的、独立的"永久笔记"（或称原子笔记），例如 [[因果推断方法]]。这遵循了在第一章中提出的混合式卡片盒模型 1。这篇永久笔记将成为该特定概念的知识中心。

  

#### 3.1.3 使用块引用建立精确链接

  

为了最大化知识网络的精度，链接不应仅仅指向整篇文献笔记（如 [[hormann_continuous_2003]]），而应尽可能指向包含具体信息的块（Block）。Obsidian 允许通过 !] 的语法来嵌入（transclude）或链接到特定段落、列表项或标题。

例如，在永久笔记 [[因果推断方法]] 中，可能会包含如下内容：

霍尔曼（Hörmann）等人提出了一种基于快速数值反演的连续随机变量生成方法，其核心思想是...![[hormann_continuous_2003#^d2e8f3]]

这一方法可以看作是史密斯（Smith）早期工作的延伸...![[smith_new_technique_2022#^a9b4c1]]

通过这种方式，永久笔记不仅综合了思想，还精确地追溯到每个思想片段的原始出处。这对于 RAG 系统来说是极其宝贵的，因为它可以在检索时同时获取综合性观点和其具体的文献支持。

  

### 3.2 块级精度：掌握用于 RAG 的行内元数据

  

YAML Frontmatter 的元数据作用于整个笔记。然而，对于 RAG 而言，我们常常需要检索笔记中的特定部分，例如"查找所有关于 Alpha 项目的论文中的'方法论'部分"。为了实现这种粒度的检索，必须采用行内元数据。

  

#### 3.2.1 行内 key:: value 语法的威力

  

Dataview 插件支持在笔记正文中使用 Key:: Value 格式的行内元数据 7。这是将 Obsidian 笔记从纯文本文件提升为半结构化数据库，并使其对 RAG 友好的最强大技术。

  

#### 3.2.2 实施工作流

  

1. 主题化组织注释：在导入文献笔记后，将相关的注释（highlights）组织在描述性的标题下，例如 ### 方法论 或 ### 关键发现。
    
2. 应用行内字段：将简单的标题升级为行内元数据字段。例如，不要只写一个标题 ### 方法论，而是在描述方法论的段落前加上 methodology::。
    

- 示例：methodology:: 本研究采用了一项双盲、随机对照试验来评估 X 对 Y 的影响... 7。
    

3. 实现可查询性：通过这一简单的操作，整个段落现在变成了一个可被 Dataview 查询的数据对象。一个 Dataview 查询现在可以精确地请求所有标记为 `#project/alpha` 的笔记中的 methodology 字段。
    

  

#### 3.2.3 连接人与机器的可读性

  

在知识管理中，一直存在着一个核心矛盾：为人类流畅阅读而写作，还是为机器精确解析而结构化。行内元数据 key:: value 语法巧妙地解决了这个矛盾。

- 对人类友好：它允许研究者像平常一样撰写连贯的段落，前缀 methodology:: 对阅读的干扰极小。
    
- 对机器友好：这个简单的语法前缀在文本之上覆盖了一个"语义层"，使得原本对机器而言不透明的文本块，变成了一个可识别、可提取的数据字段。
    

因此，行内元数据不应被视为一个"小技巧"，而应被理解为构建 RAG 友好知识库的基本设计模式。它解锁了 Dataview 进行细粒度内容聚合的全部潜力，而这种聚合是为 RAG 模型提供干净、相关上下文的必要前提。

  

### 3.3 AI 辅助预处理：简化摘要与分析的生成

  

手动为数百篇论文撰写摘要并应用行内元数据，是此工作流中的一个主要瓶颈 7。利用大型语言模型（LLM）可以极大地提高这一过程的效率。

  

#### 3.3.1 AI 作为"研究助理"

  

27 中描述的工作流展示了一个强大的解决方案：在 Zotero 阶段，使用 LLM（如 GPT-4o 或 Claude 3.5）对 PDF 进行预处理。

  

#### 3.3.2 实用的 AI 工作流

  

1. 选择工具：使用支持与 PDF 内容交互的 AI 阅读器（如 27 中提到的 PDFPals）。
    
2. 设计标准化提示（Prompts）：为 LLM 创建一套标准化的提示，以生成结构化的输出。这些提示应要求模型在回答前加上特定的前缀或标签。
    

- 示例提示 27：
    

- "请总结本文使用的研究方法。在回答前加上 `#Methodology/AI`。"
    
- "本文的关键研究结果是什么？请引用页码。在回答前加上 `#Results/AI`。"
    
- "这项工作的意义是什么？请关注其创新性。在回答前加上 `#Significance/AI`。"
    

3. 生成与整合：
    

- 在 AI 阅读器中对 PDF 执行这些提示，LLM 将生成带有预设标签的结构化摘要。
    
- 将这些生成的文本复制并粘贴到 Zotero 中对应文献条目的一个"笔记"（Note）中。
    

4. 自动化导入：
    

- 修改 Obsidian 的 Nunjucks 导入模板，使其能够识别并处理这些带有特殊标签的 Zotero 笔记。模板可以设计为查找包含 `#Methodology/AI` 的笔记内容，并将其自动填充到 Obsidian 笔记的 methodology:: 行内字段中。
    

  

#### 3.3.3 人在回路（Human-in-the-Loop）

  

必须强调，AI 的输出必须经过研究者的审查和验证 27。AI 的角色是执行初步的、劳动密集型的信息提取和结构化工作，从而将研究者解放出来，专注于更高层次的批判、综合和确认。在标签中使用

/AI 或 /Human 的后缀（如 `#Methodology/AI` vs `#Methodology/Human`）是一个很好的实践，可以清晰地追踪每段摘要的来源，确保知识的可靠性 27。

通过结合人工策展、块级元数据和 AI 辅助处理，原始的文献笔记被转化为一个多维度、高精度、易于检索的知识资产，为下一阶段的知识激活做好了充分准备。

  

## 第 4 章：使用 Dataview 激活和管理知识库

  

在前几章中，我们构建了一个结构化的知识库。现在，是时候激活它了。本章将详细介绍如何使用 Dataview 插件来查询、组织和呈现这些结构化数据，将静态的笔记库转变为一个动态的、可交互的知识管理系统。

  

### 4.1 构建动态仪表盘与内容地图（MOC）

  

一个基础的 MOC 是一个带有手动维护链接列表的笔记 4。而一个由 Dataview 驱动的 MOC 则是一个动态的仪表盘，它能根据知识库的变化自动更新，极大地减少了维护工作。

  

#### 4.1.1 项目 MOC 示例

  

假设我们有一个项目笔记 [[Project Alpha]]。通过嵌入 Dataview 查询，这个笔记可以成为该项目的中央控制室。

- 列出所有相关文献：  
    一个查询可以自动列出所有与该项目相关的文献笔记，并按年份降序排列。  
    Code snippet  
    TABLE author, year, file.link as "Title"  
    FROM `#project/alpha` AND `#type/lit-note`  
    SORT year DESC  
      
    此查询语法改编自 28，它会查找同时具有  
    `#project/alpha` 和 `#type/lit-note` 标签的笔记，并以表格形式显示其作者、年份和标题。
    
- 追踪阅读清单：  
    另一个查询可以显示该项目中所有待读或在读的文献。  
    Code snippet  
    LIST  
    FROM `#project/alpha` AND (`#status/to-read` OR `#status/reading`)  
    SORT file.ctime DESC  
      
    这个查询改编自 29，它会列出所有符合状态条件的笔记。
    
- 管理项目任务：  
    如果用户在项目相关的笔记中使用了 Obsidian 的任务语法（- [ ] Task），以下查询可以汇总所有未完成的任务。  
    Code snippet  
    TASK  
    FROM `#project/alpha`  
    WHERE!completed  
      
    这个查询改编自 28，它会创建一个可交互的任务列表。
    

  

### 4.2 学术管理核心 Dataview 查询库

  

本节提供一个实用的、可直接复制粘贴的 Dataview 查询语言（DQL）查询库，这些查询专为第一章中定义的元数据模式而设计。

表 4：学术管理 Dataview 查询库

  

|   |   |   |   |
|---|---|---|---|
|目标/用例|Dataview 查询 (DQL)|所需元数据|注释/解释|
|按作者列出所有论文|LIST FROM "01_Sources" WHERE contains(author, "[[Author Name]]")|author (链接形式)|使用 contains 来处理 author 字段是列表的情况 28。|
|创建特定主题的文献表格|TABLE year, author FROM `#theme/causal-inference` SORT year DESC|tags, year, author|通过标签筛选特定主题的文献，并按年份排序 29。|
|显示最近添加的文献|LIST FROM "01_Sources" SORT file.ctime DESC LIMIT 10|(无特定元数据)|file.ctime 是文件的创建时间，LIMIT 限制了结果数量 28。|
|显示最近修改的笔记|TABLE file.mtime as "Last Modified" FROM!"99_Meta" WHERE file.mtime >= date(today) - dur(7 days) SORT file.mtime DESC|(无特定元数据)|file.mtime 是文件修改时间，date(today) - dur(7 days) 表示过去7天 28。|
|按状态生成阅读仪表盘|TABLE file.link as "Title", author FROM `#status/to-read`|tags, author|创建一个待读列表，点击标题可直接跳转到笔记 30。|
|按项目分组论文|TABLE rows.file.link as "Title", rows.author as "Author" FROM `#type/lit-note` GROUP BY project|project (YAML字段), author|GROUP BY 可以将笔记按指定的元数据字段（如 project）进行分组 28。|
|聚合特定结论|TABLE conclusion as "Conclusion" FROM "01_Sources" WHERE conclusion|conclusion:: (行内字段)|查找并表格化所有包含 conclusion:: 行内字段的笔记及其内容 7。|

  

### 4.3 呈现细粒度洞见：查询行内元数据

  

这是结构化笔记方法论的最终回报。Dataview 不仅能查询 YAML 元数据，还能查询在第三章中强调的行内 key:: value 字段，从而实现对笔记内容的深度挖掘。

  

#### 4.3.1 聚合所有研究方法

  

假设一位研究者需要撰写一篇关于其领域内研究方法的综述。他们无需手动翻阅上百篇论文，只需在 Obsidian 中创建一个新笔记，并写入以下查询：

  

Code snippet

  
  

TABLE methodology as "Methodology Summary", file.link as "Source"  
FROM "01_Sources"  
WHERE methodology  
SORT file.link ASC  
  

这个查询的逻辑如下 7：

1. TABLE methodology as "Methodology Summary", file.link as "Source"：创建一个包含两列的表格，第一列显示 methodology 字段的内容，并将其标题设为 "Methodology Summary"；第二列显示笔记的链接。
    
2. FROM "01_Sources"：指定查询范围为 01_Sources 文件夹。
    
3. WHERE methodology：这是查询的核心。它会筛选出所有存在 methodology:: 这个行内字段的笔记。
    
4. SORT file.link ASC：按文件名对结果进行排序。
    

执行此查询后，Dataview 会自动扫描所有文献笔记，找到每一个 methodology:: 字段及其后的文本，并将它们汇总到一个清晰的表格中。这个结果几乎是即时生成的，它提供了一份关于研究方法的结构化、可导出的综述，可以直接用于后续的分析，或作为高质量的上下文提供给 RAG 模型。

  

#### 4.3.2 组合筛选以提高精度

  

行内字段查询可以与任何其他筛选条件组合使用，以获得更精确的结果。例如，要查找 Alpha 项目中所有关于局限性的讨论：

  

Code snippet

  
  

LIST limitations  
FROM `#project/alpha`  
WHERE limitations  
  

此查询会列出所有属于 Alpha 项目且包含 limitations:: 行内字段的文本块。

通过这种方式，Dataview 将一个庞大的笔记库变成了一个可按需查询的语义数据库。研究者可以从宏观（项目仪表盘）到微观（特定方法的聚合）的任何层级上与他们的知识进行互动，这极大地提升了研究效率和洞察力。

  

## 第 5 章：高级应用与系统的未来保障

  

在前几章构建了核心工作流之后，本章将探讨一些高级技术，以进一步提升效率、扩展应用场景，并确保知识库能够顺利地转化为最终的学术产出。这包括视觉化思维、批量处理、以及面向出版和演示的导出工作流。

  

### 5.1 使用 Obsidian Canvas 进行视觉化连接与论证构建

  

Obsidian Canvas 是一个内置的无限白板工具，为视觉化思考和知识合成提供了理想的平台 32。在完成了文献的阅读和初步笔记后，Canvas 成为构建复杂论证的下一步。

  

#### 5.1.1 Canvas 的合成工作流

  

1. 聚合元素：将相关的文献笔记、永久笔记，甚至笔记中的特定文本块或图片拖拽到 Canvas 画布上 8。每个元素都成为一个可自由移动和连接的"卡片"。
    
2. 空间布局：通过空间排布这些卡片来勾勒一篇文章或一个章节的论证结构。例如，将支持某一核心论点的所有证据卡片放置在其周围，将相反的观点放置在另一侧。
    
3. 创建连接：使用箭头连接不同的卡片，并可以为连接线添加标签，以表示它们之间的逻辑关系，如"支持"、"反驳"、"引出"等 8。
    
4. 即时创作：在画布上直接创建新的文本卡片，用于记录那些在组织过程中产生的、连接不同思想的"胶水"概念。
    

这种视觉化的思维导图方法，能够帮助研究者围绕核心问题（如"这个问题的难点是什么？"或"有哪些相互竞争的解决方案？"）来组织和聚合笔记，从而在撰写长篇文字之前，清晰地构建出整个论证的逻辑框架 8。

  

### 5.2 自动化与批量处理策略

  

对于拥有大量存量文献库的用户，或在日常工作中需要处理重复性任务时，自动化和批量处理是提升效率的关键。

  

#### 5.2.1 批量导入 Zotero 文献库

  

逐一导入数百甚至数千篇文献是不现实的。42 中提供了一个基于 JavaScript 的批量导入脚本，可以解决这个问题。该脚本利用了 Zotero Integration 插件的 API

runImport。

批量导入流程：

1. 在 Zotero 中，将需要导入的整个文献库或特定收藏夹导出为一个 Better BibTeX 格式的 .bib 文件。
    
2. 在 Obsidian 中，使用一个能够执行 JavaScript 的插件（如 Templater 或 QuickAdd）。
    
3. 将 42 中提供的脚本粘贴到 Templater 模板或 QuickAdd 的宏中。
    
4. 在脚本中，指定 .bib 文件的绝对路径和之前在 Zotero Integration 插件中设置的导入格式名称。
    
5. 执行该脚本。它会自动读取 .bib 文件中的每一个 citekey，并为每个条目调用 runImport 命令，从而自动化地在 Obsidian 中创建对应的文献笔记。
    

这个工作流极大地加速了从现有 Zotero 库到 Obsidian 知识库的初始迁移过程。

  

#### 5.2.2 使用 QuickAdd 插件简化日常操作

  

QuickAdd 插件允许用户创建强大的宏命令，将一系列操作绑定到一个触发器上。这对于简化日常的、重复性的笔记创建任务非常有用 34。例如，可以创建一个名为"新建项目笔记"的 QuickAdd 命令，该命令会自动：

1. 提示用户输入项目名称。
    
2. 在 03_Projects 文件夹下创建一个新笔记。
    
3. 应用一个预设的项目模板。
    
4. 打开新创建的笔记，光标定位到指定位置。
    

通过这种方式，研究者可以省去繁琐的导航和手动操作，专注于内容本身。

  

### 5.3 从知识库到出版物：写作与引用的工作流

  

知识库的最终目的之一是产出学术成果，如论文、报告或演示文稿。Obsidian 配合相关工具，可以提供一个从笔记到最终成品的无缝路径。

  

#### 5.3.1 使用 Pandoc 进行文档转换

  

Pandoc 是一个被誉为"瑞士军刀"的通用文档转换工具，能够将 Markdown 文件转换为几乎任何其他格式，包括 .docx、PDF、HTML 等 1。

写作与导出流程：

1. 插入引文：在 Obsidian 中撰写论文时，使用 Pandoc 风格的引文格式。Zotero Integration 插件可以方便地插入这种格式的引文，例如 [@hormann_continuous_2003] 3。对于需要指定页码的引文，可以使用  
    [@hormann_continuous_2003, p. 348]。
    
2. 准备参考文献：从 Zotero 中将项目的参考文献导出为一个 .bib 文件。
    
3. 命令行转换：使用终端运行 Pandoc 命令，将一个或多个 Markdown 文件转换为最终的 .docx 文稿。一个典型的命令如下：  
    Bash  
    pandoc my_paper.md --bibliography=references.bib --csl=nature.csl -o my_paper.docx  
      
    在这个命令中，--bibliography 指定了 .bib 文件的位置，--csl 指定了引文样式语言（Citation Style Language）文件（例如，Nature、APA、MLA 等样式），-o 指定了输出文件名 1。Pandoc 会自动处理所有的引文标记，生成格式正确的文内引用和文末的参考文献列表。
    

  

#### 5.3.2 使用 Marp 创建学术演示文稿

  

对于学术会议和报告，可以直接在 Obsidian 内部创建演示文稿，而无需切换到 PowerPoint 或 Keynote。这可以通过 Marp Slides 插件实现 36。

Marp 演示文稿工作流：

1. 创建幻灯片：在一个 Markdown 文件中，使用 --- 水平分割线来分隔每一页幻灯片 38。
    
2. 编写内容：在每一页幻灯片内，使用标准的 Markdown 语法来编写内容，包括标题、列表、图片、代码块和 LaTeX 公式。
    
3. 应用主题：通过在文件的 YAML Frontmatter 中添加 theme: gaia 这样的指令来选择 Marp 的内置主题（default, gaia, uncover）38。也可以通过在插件设置中指定一个 CSS 文件路径来使用自定义主题 39。
    
4. 预览与导出：插件提供了实时的幻灯片预览功能。完成编辑后，可以通过命令面板将演示文稿导出为 PDF、PPTX 或 HTML 格式 38。
    

这个工作流使得研究者能够直接复用其知识库中的笔记、图片和公式来快速构建演示文稿，保持了内容和思想的一致性，极大地提高了从研究到展示的转换效率。

  

## 结论：构建可持续与智能化学术系统的核心原则

  

通过对 Zotero 与 Obsidian 的深度集成及其在构建 RAG 友好型科研知识库中的应用进行详尽分析，我们可以总结出四条核心原则。这些原则不仅是技术实施的指导方针，更是构建一个能够长期服务于学术研究、可持续发展的智能知识系统的基石。

1. 结构先行（Structure First）：一个精心设计的知识架构是所有后续工作的前提。在投入大量时间进行内容填充之前，必须优先定义清晰的元数据模式、审慎的文件夹策略以及灵活的链接规范。一个缺乏顶层设计的知识库，无论其内容多么丰富，最终都会因混乱而变得难以检索和利用。结构化的笔记不仅便于人类理解，更是机器（尤其是 RAG 模型）能够高效处理和利用的基础。
    
2. 自动化处理冗余，人工专注于洞见（Automate Tedium, Curate Insight）：学术研究中存在大量重复性的信息处理工作，如数据录入、格式转换和初步归类。利用 Zotero Integration 的模板、Dataview 的动态查询以及 AI 辅助的摘要生成工具，可以将这些劳动密集型任务自动化。这使得研究者能够从繁琐的事务中解放出来，将宝贵的认知资源投入到更高层次的活动中——即批判性思维、知识合成和原创性洞见的产生。
    
3. 拥抱混合性（Embrace Hybridity）：在知识管理领域，不存在唯一的"最佳实践"，任何试图推行单一、僵化方法的尝试都可能导致效率低下。成功的系统往往是混合的。这体现在：
    

- 组织方法的混合：协同使用文件夹（用于物理隔离）、标签（用于状态追踪）和链接（用于概念连接），而不是在它们之间进行非此即彼的选择。
    
- 笔记类型的混合：同时容纳全面的"文献笔记"和原子化的"永久笔记"，前者保证了上下文的完整性，后者促进了思想的重组与创新。
    
- 人机协作的混合：将 AI 视为研究助理而非替代品，利用其计算能力进行信息预处理，同时保留人类研究者在验证、批判和最终决策中的核心地位。
    

4. 为检索而设计（Design for Retrieval）：一个知识管理系统的最终价值，不在于信息输入有多么便捷，而在于知识输出有多么精确和高效。从命名一个文件，到定义一个元数据字段，再到撰写一段笔记，每一个决策都应以"未来的我或机器如何找到它"为准则。通过采用原子化笔记、块级引用和行内元数据等技术，我们构建的不仅是一个数字化的文件柜，更是一个能够主动响应查询、辅助思考、并最终成为研究者智力延伸的合作伙伴。这个以检索为中心的设计理念，是确保知识库在未来数年内保持活力和价值的关键所在。
    

遵循以上原则，研究者可以构建一个不仅能有效管理当前文献，更能适应未来技术发展（如 RAG）的强大知识系统，从而在日益复杂的信息环境中保持领先的研究生产力。

#### Works cited

1. PhD workflow: Obsidian, Zettelkasten, Zotero, Pandoc, and more : r ..., accessed July 4, 2025, [https://www.reddit.com/r/ObsidianMD/comments/m5ou2h/phd_workflow_obsidian_zettelkasten_zotero_pandoc/](https://www.reddit.com/r/ObsidianMD/comments/m5ou2h/phd_workflow_obsidian_zettelkasten_zotero_pandoc/)
    
2. Box117: Obsidian - The Bounding Box – The blog of Tobias Revell, accessed July 4, 2025, [https://blog.tobiasrevell.com/2024/11/21/box117-obsidian/](https://blog.tobiasrevell.com/2024/11/21/box117-obsidian/)
    
3. TIL: Obsidian, and integrating it with Zotero - Arthur Turrell, accessed July 4, 2025, [https://aeturrell.com/blog/posts/til-zotero-and-obsidian/](https://aeturrell.com/blog/posts/til-zotero-and-obsidian/)
    
4. Are you using a folder structure or a flat structure? : r/ObsidianMD - Reddit, accessed July 4, 2025, [https://www.reddit.com/r/ObsidianMD/comments/u79m8v/are_you_using_a_folder_structure_or_a_flat/](https://www.reddit.com/r/ObsidianMD/comments/u79m8v/are_you_using_a_folder_structure_or_a_flat/)
    
5. Organizing Your Notes on Obsidian - Albert's Blog, accessed July 4, 2025, [https://blog.albertkuo.me/post/2023-12-28-organizing-your-notes-on-obsidian/](https://blog.albertkuo.me/post/2023-12-28-organizing-your-notes-on-obsidian/)
    
6. Obsidian Properties: Best Practices and Why? - Knowledge ..., accessed July 4, 2025, [https://forum.obsidian.md/t/obsidian-properties-best-practices-and-why/63891](https://forum.obsidian.md/t/obsidian-properties-best-practices-and-why/63891)
    
7. Obsidian to assist with literature review thesis : r/ObsidianMD - Reddit, accessed July 4, 2025, [https://www.reddit.com/r/ObsidianMD/comments/1f1kodb/obsidian_to_assist_with_literature_review_thesis/](https://www.reddit.com/r/ObsidianMD/comments/1f1kodb/obsidian_to_assist_with_literature_review_thesis/)
    
8. My research workflow using Obsidian, accessed July 4, 2025, [https://www.lucasmercier.me/blog/research_workflow](https://www.lucasmercier.me/blog/research_workflow)
    
9. Organizing Academic Projects with Obsidian Tags and Mind Maps, accessed July 4, 2025, [https://effortlessacademic.com/organizing-academic-projects-with-obsidian-tags-and-mind-maps/](https://effortlessacademic.com/organizing-academic-projects-with-obsidian-tags-and-mind-maps/)
    
10. Workflow/structure for notes and subfolders : r/ObsidianMD - Reddit, accessed July 4, 2025, [https://www.reddit.com/r/ObsidianMD/comments/1e6gf0y/workflowstructure_for_notes_and_subfolders/](https://www.reddit.com/r/ObsidianMD/comments/1e6gf0y/workflowstructure_for_notes_and_subfolders/)
    
11. Increasingly Atomic Folders: A Workflow - Knowledge management - Obsidian Forum, accessed July 4, 2025, [https://forum.obsidian.md/t/increasingly-atomic-folders-a-workflow/14345](https://forum.obsidian.md/t/increasingly-atomic-folders-a-workflow/14345)
    
12. Obsidian folder structures, or: how I locate notes - Hannah Swain Løvik, accessed July 4, 2025, [https://hannahswainlovik.eu/2025/06/02/obsidian-folder-structures-or-how-i-locate-notes/](https://hannahswainlovik.eu/2025/06/02/obsidian-folder-structures-or-how-i-locate-notes/)
    
13. Using Obsidian and Zotero to write more consistently - Eastbourne Trampoline, accessed July 4, 2025, [https://eastbournetrampoline.com/using-obsidian-and-zotero-to-write-more-consistently/](https://eastbournetrampoline.com/using-obsidian-and-zotero-to-write-more-consistently/)
    
14. Organizing Obsidian: 5 Tips - Tech Hub at Porterchester, accessed July 4, 2025, [https://info.porterchester.edu/how-to-organize-obsidian-without-moving-notes-between-folders](https://info.porterchester.edu/how-to-organize-obsidian-without-moving-notes-between-folders)
    
15. How to Connect Zotero and Obsidian for the Ultimate PhD Workflow - Girl in Blue Music, accessed July 4, 2025, [https://girlinbluemusic.com/how-to-connect-zotero-and-obsidian-for-the-ultimate-phd-workflow/](https://girlinbluemusic.com/how-to-connect-zotero-and-obsidian-for-the-ultimate-phd-workflow/)
    
16. A Zotero to Obsidian Workflow | Shuai Computational and Integrated Hydrology Group, accessed July 4, 2025, [https://groundwater.usu.edu/blog/2023/A-Zotero-to-Obsidian-Workflow/](https://groundwater.usu.edu/blog/2023/A-Zotero-to-Obsidian-Workflow/)
    
17. mgmeyers/obsidian-zotero-integration: Insert and import citations, bibliographies, notes, and PDF annotations from Zotero into Obsidian. - GitHub, accessed July 4, 2025, [https://github.com/mgmeyers/obsidian-zotero-integration](https://github.com/mgmeyers/obsidian-zotero-integration)
    
18. Zotero -> zotfile -> mdnotes -> obsidian -> dataview Workflow, accessed July 4, 2025, [https://forum.obsidian.md/t/zotero-zotfile-mdnotes-obsidian-dataview-workflow/15536](https://forum.obsidian.md/t/zotero-zotfile-mdnotes-obsidian-dataview-workflow/15536)
    
19. Zotero Better Notes plugin (syncs notes with Obsidian) - Share & showcase, accessed July 4, 2025, [https://forum.obsidian.md/t/zotero-better-notes-plugin-syncs-notes-with-obsidian/62272](https://forum.obsidian.md/t/zotero-better-notes-plugin-syncs-notes-with-obsidian/62272)
    
20. Zotero integration : r/ObsidianMD - Reddit, accessed July 4, 2025, [https://www.reddit.com/r/ObsidianMD/comments/1j856e1/zotero_integration/](https://www.reddit.com/r/ObsidianMD/comments/1j856e1/zotero_integration/)
    
21. obsidian-zotero-integration/docs/Templating.md at main - GitHub, accessed July 4, 2025, [https://github.com/mgmeyers/obsidian-zotero-integration/blob/main/docs/Templating.md](https://github.com/mgmeyers/obsidian-zotero-integration/blob/main/docs/Templating.md)
    
22. How to connect Zotero with Obsidian : r/ObsidianMD - Reddit, accessed July 4, 2025, [https://www.reddit.com/r/ObsidianMD/comments/10k2pl2/how_to_connect_zotero_with_obsidian/](https://www.reddit.com/r/ObsidianMD/comments/10k2pl2/how_to_connect_zotero_with_obsidian/)
    
23. Template for Zotero Obsidian plugin to import references with highlights - vxlabs, accessed July 4, 2025, [https://vxlabs.com/2024/11/02/template-for-zotero-obsidian-plugin-to-import-references-with-highlights/](https://vxlabs.com/2024/11/02/template-for-zotero-obsidian-plugin-to-import-references-with-highlights/)
    
24. Help with Zotero Integration plugin template. : r/ObsidianMD - Reddit, accessed July 4, 2025, [https://www.reddit.com/r/ObsidianMD/comments/1irvmqx/help_with_zotero_integration_plugin_template/](https://www.reddit.com/r/ObsidianMD/comments/1irvmqx/help_with_zotero_integration_plugin_template/)
    
25. My Zotero annotation template that works - Share & showcase - Obsidian Forum, accessed July 4, 2025, [https://forum.obsidian.md/t/my-zotero-annotation-template-that-works/51662](https://forum.obsidian.md/t/my-zotero-annotation-template-that-works/51662)
    
26. Direct Linking to Zotero Notes from Obsidian : r/ObsidianMD - Reddit, accessed July 4, 2025, [https://www.reddit.com/r/ObsidianMD/comments/w3xfb8/direct_linking_to_zotero_notes_from_obsidian/](https://www.reddit.com/r/ObsidianMD/comments/w3xfb8/direct_linking_to_zotero_notes_from_obsidian/)
    
27. A Zotero / AI / Obsidian workflow : r/ObsidianMD - Reddit, accessed July 4, 2025, [https://www.reddit.com/r/ObsidianMD/comments/1e8cvt4/a_zotero_ai_obsidian_workflow/](https://www.reddit.com/r/ObsidianMD/comments/1e8cvt4/a_zotero_ai_obsidian_workflow/)
    
28. Dataview Examples - Fork My Brain, accessed July 4, 2025, [https://notes.nicolevanderhoeven.com/obsidian-playbook/Obsidian+Plugins/Community+Plugins/dataview/Dataview+Examples](https://notes.nicolevanderhoeven.com/obsidian-playbook/Obsidian+Plugins/Community+Plugins/dataview/Dataview+Examples)
    
29. Structure of a Query - Dataview - GitHub Pages, accessed July 4, 2025, [https://blacksmithgu.github.io/obsidian-dataview/query/queries/](https://blacksmithgu.github.io/obsidian-dataview/query/queries/)
    
30. Dataview for reviewing and processing media - Share & showcase - Obsidian Forum, accessed July 4, 2025, [https://forum.obsidian.md/t/dataview-for-reviewing-and-processing-media/17136](https://forum.obsidian.md/t/dataview-for-reviewing-and-processing-media/17136)
    
31. Dataview to create a roll-up of all literature notes - Help - Obsidian Forum, accessed July 4, 2025, [https://forum.obsidian.md/t/dataview-to-create-a-roll-up-of-all-literature-notes/67081](https://forum.obsidian.md/t/dataview-to-create-a-roll-up-of-all-literature-notes/67081)
    
32. Obsidian - Sharpen your thinking, accessed July 4, 2025, [https://obsidian.md/](https://obsidian.md/)
    
33. Using Obsidian as an Academic - Knowledge management, accessed July 4, 2025, [https://forum.obsidian.md/t/using-obsidian-as-an-academic/59159](https://forum.obsidian.md/t/using-obsidian-as-an-academic/59159)
    
34. What is one plugin or workflow in Obsidian that was EXTREMELY game-changing for you? : r/ObsidianMD - Reddit, accessed July 4, 2025, [https://www.reddit.com/r/ObsidianMD/comments/1lpoe1m/what_is_one_plugin_or_workflow_in_obsidian_that/](https://www.reddit.com/r/ObsidianMD/comments/1lpoe1m/what_is_one_plugin_or_workflow_in_obsidian_that/)
    
35. How to use Zotero in Obsidian - YouTube, accessed July 4, 2025, [https://www.youtube.com/watch?v=8yMko1m8XSQ](https://www.youtube.com/watch?v=8yMko1m8XSQ)
    
36. Marp Slides - Create markdown-based Marp presentations in Obsidian - Obsidian Stats, accessed July 4, 2025, [https://www.obsidianstats.com/plugins/marp-slides](https://www.obsidianstats.com/plugins/marp-slides)
    
37. samuele-cozzi/obsidian-marp-slides - GitHub, accessed July 4, 2025, [https://github.com/samuele-cozzi/obsidian-marp-slides](https://github.com/samuele-cozzi/obsidian-marp-slides)
    
38. Marp: Markdown Presentation Ecosystem, accessed July 4, 2025, [https://marp.app/](https://marp.app/)
    
39. Marp - Plugin to use Marp with Obsidian, accessed July 4, 2025, [https://www.obsidianstats.com/plugins/marp](https://www.obsidianstats.com/plugins/marp)
    
40. Slides Custom Themes | Obsidian Marp, accessed July 4, 2025, [https://samuele-cozzi.github.io/obsidian-marp-slides/23.SlidesCustomTheme.html](https://samuele-cozzi.github.io/obsidian-marp-slides/23.SlidesCustomTheme.html)
    
41. JichouP/obsidian-marp-plugin: Plugin to use Marp with Obsidian - GitHub, accessed July 4, 2025, [https://github.com/JichouP/obsidian-marp-plugin](https://github.com/JichouP/obsidian-marp-plugin)
    
42. Bulk Import Zotero Library Annotations into Obsidian with Zotero Integration plugin - Help, accessed July 4, 2025, [https://forum.obsidian.md/t/bulk-import-zotero-library-annotations-into-obsidian-with-zotero-integration-plugin/76254](https://forum.obsidian.md/t/bulk-import-zotero-library-annotations-into-obsidian-with-zotero-integration-plugin/76254)
    

**