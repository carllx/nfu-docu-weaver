

# 掌握Cursor Rules的权威指南：从核心原则到智能体工作流

#VibeCoding/cursorrules 
  

![](https://lh7-rt.googleusercontent.com/docsz/AD_4nXcpQYS2Ry-mxw7EW1pMRiafDUHHBqeBHonYhTpynuZDBP4obcWHKijTndYBCyGZj6dpW2GY2K9PhkX5xPTLSVWkah4aGy8glkQALsgnGxjnbpQaAAySL62KoNrTEy8YslF602QnrQ?key=bfnZY5wj8dPOZl0OKcoNHA)

[Google Gemini](https://gemini.google.com/u/1/app/231621c9a2ab73a8)

---

  
  
  

## 第一部分：基础篇：理解Cursor Rules的“为何”与“如何”

  

本部分旨在为有效理解和使用Cursor Rules奠定坚实的基础。我们将超越表层描述，深入探讨其底层理念和机制，为后续的高级主题铺平道路。

  

### 1.1 从静态提示到动态护栏：Cursor Rules的设计哲学

  

Cursor Rules代表了一种范式转变，从业界熟知的、在ChatGPT等工具中常见的一次性、短暂的提示（prompt），演变为一套持久的、具备上下文感知能力的指令系统。这些指令如同为AI智能体设置的“护栏”（guardrails），是实现一致、高质量和可预测的AI辅助编程的关键 1。

规则所解决的核心问题

在没有规则的AI编程环境中，开发者普遍面临一系列挑战：需要反复向AI重申指令、产出代码的风格不一致，以及AI对项目特有知识的匮乏 2。Cursor Rules正是为解决这些痛点而生，它允许开发者对AI进行“训练”，使其遵循特定项目的独特约定 3。

官方文档明确指出，规则提供了“系统级指令”并充当“持久化上下文” 4。这意味着，规则不仅仅是提示，更是一种永久性增强AI模型在特定项目或用户环境下的“认知”能力的方式。一个名为

awesome-cursorrules的社区项目总结了采用规则的五大核心价值：实现定制化的AI行为、确保代码一致性、提升开发生产力、促进团队协作以及赋予AI项目专属知识 3。这五点精确地勾勒出了规则的价值主张。

将规则视为“AI的配置即代码”

在传统开发流程中，工程师使用如tsconfig.json或eslintrc.json等配置文件来约束工具和开发者的行为。当Cursor将AI智能体引入工作流时，这个智能体在默认情况下是一个行为不可预测的“黑箱”。

Cursor Rules，特别是当它们以.cursor/rules的形式存储并纳入版本控制系统（如Git）时，其功能就如同这个AI智能体的配置文件 4。因此，掌握规则的本质，等同于掌握一种新型的“配置即代码”（Configuration as Code）实践。它将开发者的心智模型从简单的“提示工程”（prompting）提升到更专业的“AI配置管理”（configuring），这是在专业化、团队化的AI增强开发环境中一项至关重要的技能。

  

### 1.2 现代规则系统：.cursor/rules与.mdc文件剖析

  

Cursor的规则系统已经从早期的单一、庞大的.cursorrules文件，演进为现代化的、模块化的.cursor/rules/目录结构，该目录下包含多个.mdc文件 4。官方文档已明确建议使用新的项目规则（Project Rules）替代旧有的

.cursorrules文件，社区讨论也证实了开发者正普遍转向使用.mdc文件，以获得更好的组织性和更强大的功能 4。因此，强烈建议所有用户采纳这套现代规则系统。

.mdc文件结构

.mdc（Markdown with Components）是规则文件的标准格式，它由两部分组成：元数据（frontmatter）和内容主体（body） 4。

- 元数据 (Metadata)：位于文件顶部的---分隔区域内，用于定义规则的行为。关键字段包括：
    

- description: 规则的功能描述。这对于“智能体请求（Agent Requested）”类型的规则至关重要，AI会根据此描述决定是否加载该规则 4。
    
- globs: 一个文件路径匹配模式数组（例如"**/*.tsx"）。当用户引用的文件与此模式匹配时，规则会被自动附加，这使得规则系统具备了上下文感知能力 4。
    
- alwaysApply: 一个布尔值，设为true时，规则将始终被应用。
    

- 内容主体 (Content)：元数据下方的所有内容，使用Markdown格式编写。这里是提供给AI的具体指令，可以包含文本描述、代码块、示例，甚至通过@符号引用项目中的其他文件 4。
    

嵌套规则 (Nested Rules)

这是一项强大的组织功能。开发者可以在项目的任意子目录中创建.cursor/rules文件夹，其中的规则将仅作用于该子目录及其后代目录中的文件。例如，一条位于frontend/components/.cursor/rules目录下的规则，将只在编辑该目录内的组件时被激活，从而实现了高度精细化的作用域控制 4。

  

### 1.3 规则激活的四大支柱：掌握触发机制

  

规则如何以及何时被加载到AI的上下文中，是有效使用规则的核心。现代Cursor规则系统提供了四种主要的激活机制，每种机制都有其独特的适用场景。

|   |   |   |   |   |
|---|---|---|---|---|
|规则类型 (Rule Type)|触发机制 (Trigger Mechanism)|关键元数据 (Key Metadata)|主要用例 (Primary Use Case)|示例规则 (Example Rule)|
|始终 (Always)|在每次与AI交互时，无条件地包含在模型上下文中。|alwaysApply: true|定义项目基础的、不可协商的原则，如核心技术栈或语言规范。|“始终使用TypeScript的严格模式进行编码。”|
|自动附加 (Auto Attached)|当用户在提示中引用（如使用@）的文件路径与globs模式匹配时，自动附加。|globs: ["**/*.test.ts"]|为特定类型的文件提供上下文相关的指导，如测试文件、配置文件或特定框架的组件。|“为Jest和React Testing Library测试文件提供编码约定。”|
|智能体请求 (Agent Requested)|AI智能体根据用户提示的意图，与规则的description进行语义匹配，自主决定是否需要加载该规则。|description: "..."|封装项目特有的、不常用的工作流或知识，以节省上下文空间，供AI按需调用。|“如何向我们的Express服务器添加一个新的API端点。”|
|手动 (Manual)|仅当用户在聊天或提示中通过@规则名的方式显式引用时，才会被包含。|无（或alwaysApply: false且无globs）|用于精确的、按需执行的任务，如对选定代码应用特定的重构模式。|@refactor-to-hooks|

详细解析：

- 始终 (Always)：这类规则适用于那些需要贯穿整个项目生命周期的全局性指令。例如，强制规定项目的核心编程语言或架构风格 4。
    
- 自动附加 (Auto Attached)：这是实现上下文感知的关键。通过globs元数据，可以将规则与特定的文件类型或目录绑定。一个典型的例子是，为所有匹配"**/*.test.tsx"的测试文件自动附加一条规则，该规则包含项目所用的测试框架（如Jest）和断言库的编码规范 4。
    
- 智能体请求 (Agent Requested)：这是一种高级且高效的机制，它赋予了AI自主决策的能力。开发者可以创建一系列包含清晰description的规则，这些规则如同一个工具库。当AI分析用户请求时，它会判断是否需要某个“工具”来更好地完成任务，如果需要，它就会“请求”并加载该规则的完整内容。这对于管理宝贵的上下文窗口（token limit）至关重要 4。
    
- 手动 (Manual)：提供了最精确的控制。当开发者需要对特定代码片段应用一次性、特定的指令时，可以通过在聊天框中输入@并选择相应的规则来手动加载它。例如，可以创建一个名为@refactor-to-hooks的规则，用于将旧的React类组件重构为现代的函数式组件 4。
    

  

### 1.4 用户规则 vs. 项目规则：分离个人与团队标准

  

Cursor提供了两个层级的规则系统，以区分个人偏好和项目标准 1。

- 用户规则 (User Rules)：也称为全局规则，在Cursor的设置界面中定义，并应用于用户打开的所有项目 4。这非常适合定义个人化的编码或交互偏好。例如，可以设置一条用户规则：“在所有回答的开头使用‘当然，先生’” 12，或者“除非另有说明，否则默认使用Python语言” 13。
    
- 项目规则 (Project Rules)：存储在项目根目录的.cursor/rules文件夹中，与项目代码一同被版本控制系统管理，并与团队共享 4。它们是为项目特定的技术栈、架构模式和团队编码规范而设计的。
    

为了正确使用这两个系统，开发者可以遵循一个简单的决策框架：

1. 思考规则的性质：这条规则是关于“我个人喜欢如何工作”的吗？例如，AI的回复风格、个人常用的代码片段或学习辅助指令。如果是，那么它应该被放在用户规则中。
    
2. 思考规则的范围：这条规则是关于“这个特定项目应该如何工作”的吗？例如，项目使用的React版本、API的命名约定或数据库的交互模式。如果是，那么它必须被放在项目规则中，以确保团队所有成员和CI/CD流程中的AI都能遵循相同的标准。
    

遵循这一框架可以有效避免将项目特有的规范错误地应用到其他项目中，或将个人偏好强加于团队，从而最大化两种规则系统的价值。

---

## 第二部分：工匠手册：编写高影响力规则的原则

  

本部分从理论转向实践，提供一套详细的方法论，用于精心制作有效、可维护且功能强大的规则。

  

### 2.1 请求的艺术：规则中的提示工程

  

编写规则的核心在于向AI清晰地传达指令。这需要借鉴提示工程（Prompt Engineering）的精髓。

- 原则一：明确与直接  
    避免使用“让代码更好”这类模糊的指令 14。应采用强烈的、祈使式的语言。例如，不要写“你应该使用函数式组件”，而应明确指出：“  
    必须使用函数式组件和Hooks。禁止使用基于类的组件。” 2。
    
- 原则二：定义范围与约束  
    清晰地说明AI不应该做什么，这对于防止意外的或破坏性的修改至关重要。一个来自社区的强大示例如下：“绝不要在修改文件时留下‘//... 现有代码...’之类的注释……必须完整地重写整个文件。” 16。另一个关键约束是：“  
    禁止删除或破坏任何现有代码。只允许在最小、安全改动的前提下扩展或添加新代码。” 14。
    
- 原则三：提供高层上下文  
    在规则的开头部分，用一两句话简要介绍项目背景或当前目标 10。这有助于AI理解指令背后的“为什么”。例如：“这是一个用于访问Sharepoint的Python项目，目标是操作文件和文件夹。” 12。
    
- 原则四：像培训初级开发者一样写作  
    最佳的规则读起来就像清晰的内部技术文档 4。将AI视为一个聪明但缺乏项目背景的初级同事，并以此为心智模型来编写指令，可以极大地提高AI解析和遵循规则的准确性。
    

  

### 2.2 为清晰而构建：如何组织与组合规则

  

- 模块化是关键  
    将庞大复杂的规则集拆分成多个小而专注的.mdc文件 4。例如，与其创建一个包罗万象的  
    react.mdc，不如将其分解为react-components.mdc、react-hooks.mdc和react-state-management.mdc。
    
- 逻辑化分组  
    在.cursor/rules/目录下，按功能或特性对规则文件进行逻辑分组（例如，创建api/、tests/、styles/等子目录） 10。这不仅方便人类开发者维护，也有助于AI更精确地定位相关规则。
    
- 保持规则简洁  
    官方文档建议将单个规则文件的长度控制在500行以内 4。这强制开发者保持指令的清晰和模块化，避免创建难以理解和维护的“巨石”规则。
    

将规则视为可组合的系统

单一的规则文件在大型项目中很快会变得难以管理。.cursor/rules/目录结构和规则间的引用机制，为构建一个可组合的规则系统提供了可能。开发者可以创建一条“主”规则，通过Markdown链接（例如 [测试驱动开发规则](mdc:./tdd.mdc)）来引用和组合其他更小的、功能单一的规则 9。

这意味着，开发者应将规则库视为一个由可复用“函数”组成的模块化系统，而非一堆孤立的文档。通过组合这些“函数”，可以构建出复杂的、自动化的工作流。例如，一条new-feature.mdc规则可以同时引用tdd.mdc和api-design.mdc，从而在创建新功能时自动执行一套完整的开发标准。

  

### 2.3 “展示，而非说教”：示例与反模式的力量

  

- 提供具体示例  
    在规则中包含目标模式的代码片段，是指导AI最有效的方法之一 2。这些示例应使用格式清晰的Markdown代码块呈现 10。
    
- 明确标记弃用模式（反模式）  
    仅仅展示正确的做法是不够的。更有效的方法是，明确展示错误或过时的模式，并用强硬的语气指示AI避免使用它们 10。这对于重构遗留代码或推行新团队规范时至关重要。
    
- 引用外部权威文档  
    对于已建立的行业最佳实践，可以在规则中直接包含指向官方文档（如React官方文档、Rails指南）的链接 17。这能将AI的知识体系锚定在最权威的信息源上，避免其依赖过时或不准确的训练数据。
    

  

### 2.4 验证、调试与迭代

  

- 包含验证步骤  
    一个非常强大的技术是在规则的末尾附上一个验证步骤清单，要求AI在完成任务后自行检查其工作成果 10。例如：“生成组件后，请验证以下几点：[ ] 组件包含了符合无障碍（ARIA）标准的属性。 [ ] 组件有对应的单元测试文件。 [ ] 组件已从模块主入口文件导出。”
    
- 规则调试工作流  
    社区提供了一套实用的、分步式的规则调试流程，以验证规则是否生效 19：
    

1. 隔离场景：准备一个能够触发目标规则的简单提示。
    
2. 启用规则并运行：确保规则文件位于正确位置，然后执行提示，观察AI的输出是否符合预期。
    
3. 禁用规则并再次运行：临时禁用该规则（例如，将文件名后缀改为.mdc.off），然后执行完全相同的提示。
    
4. 对比结果：比较两次运行的输出。如果输出存在显著差异，则证明该规则正在生效。
    
5. 调整与重试：如果规则未生效，检查其globs模式是否正确，或指令是否足够清晰，然后进行调整并重复测试。
    

- 迭代式优化  
    将规则文件视为有生命力的文档。当AI犯错时，不要仅仅修正它生成的代码，更应该反思并优化规则，以防止未来再次发生同类错误 20。甚至可以利用AI来改进规则本身：向AI描述它所犯的错误，并要求它生成一条新的规则来纠正这种行为 21。
    

---

## 第三部分：高级战术：将规则融入智能体工作流

  

本部分将详细介绍如何将精心设计的规则与Cursor的其他高级功能及社区方法论相结合，构建强大的半自主开发系统。

  

### 3.1 蓝图驱动工作流：PLANNING.md与TASK.md

  

这是一种在Cursor社区中广为流传并被证明行之有效的工作流。其核心思想是在AI编写任何代码之前，通过高级规划文档为其提供清晰的“蓝图”（Blueprint）和任务清单，从而有效防止AI在处理复杂功能时“偏离轨道” 22。

- PLANNING.md：一份高层级的规划文档，用于概述项目或功能的范围、技术架构、选定的技术栈、数据流以及核心用户流程 23。
    
- TASK.md：一份详细的、分步的任务清单，将PLANNING.md中描述的功能分解为具体的可执行任务 22。
    
- 规则集成：为了将这一工作流自动化，可以创建一条项目规则，强制AI在开始工作前必须阅读这些规划文件，并在完成每个任务后更新TASK.md中的状态 20。例如，可以定义一条规则：“在进行任何代码修改之前，必须解析并理解  
    docs/architecture.mermaid中的系统架构，并从tasks/tasks.md中检视当前任务上下文。” 27。
    

这种工作流的实践，标志着开发者角色的根本性转变。在没有规划的情况下，开发者需要像微观管理者一样，为AI提供详尽的、一步步的实现指令。而借助“蓝图驱动”模式，开发者的主要职责转变为制定高层战略（即撰写规划文档）。AI的角色则变为该战略的执行者，利用文档获取上下文并完成具体实现。开发者的工作重心从“编码”转向了“AI编排”，这是未来软件开发的一项关键技能。

  

### 3.2 使用Cursor Rules实现测试驱动开发（TDD）

  

测试驱动开发（TDD）是一种强调测试先行的开发实践。通过Cursor Rules，可以系统化地强制执行TDD循环：编写一个失败的测试，编写代码使其通过，然后重构 13。

- 工作流：
    

1. 开发者发起提示：“使用TDD实现X功能。”
    
2. 一条名为test_driven_development.mdc的规则被触发。
    
3. 该规则向AI下达明确指令：“必须先检查是否存在测试规范。在实现代码之前创建测试规范。运行测试（此时应失败）。实现功能代码。再次运行测试（此时应通过）。” 28。
    

- 规则模板：一个有效的TDD规则模板应包含核心原则、实现流程以及对AI的强制性要求，确保其严格遵循TDD的每一步 28。
    
- 与YOLO模式的结合：此工作流可以通过启用Cursor的“YOLO模式”得到极大的增强。在该模式下，AI被授权可以自动执行终端命令（如运行测试），并根据测试结果自主迭代修改代码，直到所有测试通过为止，整个过程无需开发者手动干预 29。
    

  

### 3.3 自主智能体：project_config.md与workflow_state.md系统

  

这是在研究中发现的最前沿的工作流，其目标是在Cursor内部构建一个接近完全自主的、“Devin式”的智能体。该系统通过两个核心文件来管理AI的整个操作循环 31。

- project_config.md（项目的“宪法”）：这是一个相对静态的文件，存储了项目的长期上下文，包括：项目的最终目标、技术栈详情、以及必须遵守的关键架构模式和约定 31。
    
- workflow_state.md（AI的“动态大脑”）：这是一个动态文件，AI在执行每一步操作时都会读取并重写它。该文件包含：
    

- 当前状态：例如，Phase: BLUEPRINT（阶段：蓝图设计中），Status: NEEDS_PLAN_APPROVAL（状态：需要计划批准）。
    
- 执行计划：AI在BLUEPRINT阶段生成的详细分步计划。
    
- 当前规则：适用于当前阶段的特定规则。
    
- 运行日志：记录AI的每一步行动、观察和决策。
    

- 自主循环：
    

1. 读取：AI读取workflow_state.md以了解其当前状态和计划。
    
2. 咨询：AI参考project_config.md获取架构层面的上下文。
    
3. 行动：AI执行一个具体动作（如编辑代码、运行终端命令）。
    
4. 更新：AI将行动结果和新的状态写回workflow_state.md。
    
5. 重复：循环继续，直到任务完成。
    

这个系统展示了通过结构化文本文件来编程AI行为的终极潜力，代表了当前利用Cursor实现自动化的最高水平。

  

### 3.4 通过模型上下文协议（MCP）扩展上下文

  

模型上下文协议（Model Context Protocol, MCP）是一项开放标准，旨在将AI智能体连接到外部工具和数据源 33。这使得规则能够赋予AI访问本地代码库之外信息的能力。

- 工作原理：MCP采用客户端-服务器架构。开发者可以在Cursor中配置MCP服务器，使其能够与数据库、API或实时Web服务等进行交互 34。
    
- 规则集成：MCP的威力在于可以和规则结合，创建出能够与外部世界互动的自动化流程。
    

- 示例1：浏览器调试：可以创建一条规则，利用浏览器MCP将浏览器控制台的错误日志直接拉取到Cursor的聊天窗口中进行分析，极大地简化了前端调试流程 38。
    
- 示例2：数据库交互：可以定义一条规则，在生成新的数据模型时，利用数据库MCP自动连接到PostgreSQL数据库，查询最新的表结构信息，以确保生成代码的准确性 34。
    

如果说@符号和代码库索引为AI提供了本地上下文，那么MCP则为其提供了广阔的外部上下文。将这两者结合的规则，是解锁下一代高度智能化、自动化开发工作流的关键。

---

## 第四部分：社区食谱：精选规则模板库

  

本部分提供一个高度实用的.mdc规则模板库，适用于多种流行的技术栈。这些模板源自awesome-cursorrules等社区项目和论坛的真实分享，并经过了结构化和注释，方便读者直接取用 3。

  

### 4.1 React与TypeScript规则集

  

此规则集旨在为现代前端项目提供一套全面的编码和架构标准。

|   |
|---|
|规则文件: react-typescript.mdc|
|description: "强制执行React和TypeScript开发的团队标准，包括函数式组件、Hooks、严格类型和使用Tailwind CSS进行样式设计。"|
|globs: ["**/*.tsx", "**/*.ts"]|
|内容亮点 (带注释):|
|## 核心原则<br><br>ALWAYS use functional components with hooks. DO NOT use class-based components.<br><br>(注释: 确立项目的基础架构选择，强制使用现代React模式。)|
|## 状态管理<br><br>Prefer React Query for server state and Zustand or Jotai for client state. Avoid Redux unless the project already uses it.<br><br>(注释: 提供具体的状态管理库选型指导，避免技术选型混乱。)|
|## 样式方案<br><br>Use Tailwind CSS utility classes for all styling. DO NOT use CSS-in-JS libraries like styled-components.<br><br>(注释: 统一项目的样式实现方法，确保代码风格一致。)|
|## 类型安全<br><br>NO 'any' or 'unknown' types. Define explicit interfaces for all props and API responses. Use Zod for runtime validation.<br><br>(注释: 强制执行最高的类型安全标准，提升代码质量和可维护性。)|

  

### 4.2 Python (Django/FastAPI) 规则集

  

此规则集专注于后端API开发，确保代码的健壮性、可维护性和安全性。

|   |
|---|
|规则文件: python-api.mdc|
|description: "使用FastAPI或Django REST Framework构建健壮且可维护的Python API的指导方针。"|
|globs: ["**/api/**/*.py", "**/views.py", "**/serializers.py"]|
|内容亮点 (带注释):|
|## 代码风格<br><br>Adhere strictly to PEP 8. Use Black for auto-formatting.<br><br>(注释: 强制遵循Python社区的官方代码风格指南，并使用自动化工具保证一致性。)|
|## 类型提示<br><br>All function signatures MUST include type hints. Use Pydantic for data validation and serialization in FastAPI.<br><br>(注释: 提升代码的可读性和健壮性，并利用Pydantic简化数据处理。)|
|## 错误处理<br><br>Implement custom exception handlers to return structured JSON error responses. Do not let raw exceptions leak to the client.<br><br>(注释: 规范API的错误返回格式，提升客户端的开发体验和系统的安全性。)|
|## 测试<br><br>Every API endpoint must have a corresponding integration test that covers success, failure, and authentication cases. Use Pytest as the testing framework.<br><br>(注释: 强制要求编写全面的测试用例，确保API的质量和可靠性。)|

  

### 4.3 通用目的规则集

  

这是一组适用于几乎所有项目的通用规则，旨在提升代码库的整体质量和团队协作效率。

  

|   |
|---|
|通用规则模板|
|git-commits.mdc: "强制使用‘Conventional Commits’标准（例如，feat:、fix:、docs:）。提交信息的主题行必须在60个字符以内，并可选地在正文中解释‘为什么’这么做。" 15|
|documentation.mdc: "为每个新的公共函数生成JSDoc（适用于TS/JS）或docstring（适用于Python），解释其用途、参数和返回值。" 18|
|security.mdc: "始终验证和净化所有用户输入。使用参数化查询以防止SQL注入。在处理身份验证时，使用成熟的库，如Passport.js或Django的内置认证系统。" 15|
|anti-hallucination.mdc: "在修改文件时，绝不留下如//... 现有代码...之类的占位符注释。必须重写完整、可运行的文件。如果不确定某个部分，应请求澄清，而不是留下占位符。" 16|

---

## 第五部分：社区与进阶学习

  

本部分旨在为用户提供持续学习和参与社区的途径，确保本指南的价值能够随着技术的发展而延续。

  

### 官方与社区渠道

  

要获取帮助、分享知识和保持对Cursor最新动态的了解，以下渠道至关重要：

- 官方论坛 (forum.cursor.com): 这是获取Cursor团队官方支持、报告错误和讨论深入技术问题的最佳场所 41。
    
- Discord: 一个更为即时和非正式的交流空间，用户可以在这里讨论日常使用技巧、分享工作流，并了解其他开发者正在构建的项目。社区成员分享了多个有效的邀请链接 43。
    
- Reddit (r/cursor): 适合快速了解最新版本更新、社区情绪和用户成功案例。这里充满了真实的用户体验分享，既有赞誉也有批评，能提供一个全面的视角 43。
    

  

### 精选资源

  

- awesome-cursorrules GitHub仓库: 一个由社区维护的、内容丰富的规则文件集合，涵盖了多种技术栈和用例，是寻找和贡献规则模板的首选之地 3。
    
- dotcursorrules.com: 一个专门收集和展示社区提交的.cursorrules模板的网站，为用户提供了大量即用型规则 20。
    
- YouTube教程与博客文章: 许多经验丰富的开发者通过视频和文章分享了他们的高级工作流，这些内容通常包含详细的演示和解释，是学习高级战术的宝贵资源 22。
    

通过积极参与这些社区并利用相关资源，开发者不仅能解决具体问题，还能不断吸收新的思想和方法，将AI辅助开发的能力提升到新的高度。

#### Works cited

1. The Good and Bad of Cursor AI Code Editor - AltexSoft, accessed July 5, 2025, [https://www.altexsoft.com/blog/cursor-pros-and-cons/](https://www.altexsoft.com/blog/cursor-pros-and-cons/)
    
2. Boost Your Development Productivity with Cursor Rules: A Complete Guide, accessed July 5, 2025, [https://dev.to/blamsa0mine/boost-your-development-productivity-with-cursor-rules-a-complete-guide-3nhm](https://dev.to/blamsa0mine/boost-your-development-productivity-with-cursor-rules-a-complete-guide-3nhm)
    
3. PatrickJS/awesome-cursorrules: Configuration files that ... - GitHub, accessed July 5, 2025, [https://github.com/PatrickJS/awesome-cursorrules](https://github.com/PatrickJS/awesome-cursorrules)
    
4. Rules - Cursor, accessed July 5, 2025, [https://docs.cursor.com/context/rules](https://docs.cursor.com/context/rules)
    
5. Cursor Rules: Enhance Your Development Workflow with AI-Powered Coding | cursor101.com, accessed July 5, 2025, [https://cursor101.com/cursor/rules](https://cursor101.com/cursor/rules)
    
6. A Guide to understand new .cursor/rules in 0.45 (.cursorrules) : r/cursor - Reddit, accessed July 5, 2025, [https://www.reddit.com/r/cursor/comments/1ik06ol/a_guide_to_understand_new_cursorrules_in_045/](https://www.reddit.com/r/cursor/comments/1ik06ol/a_guide_to_understand_new_cursorrules_in_045/)
    
7. Cursorrules, Rules for AI, or Project Rules : r/cursor - Reddit, accessed July 5, 2025, [https://www.reddit.com/r/cursor/comments/1icmmb0/cursorrules_rules_for_ai_or_project_rules/](https://www.reddit.com/r/cursor/comments/1icmmb0/cursorrules_rules_for_ai_or_project_rules/)
    
8. I read .cursorrules will be deprecated! Please don't! - Cursor Forum, accessed July 5, 2025, [https://forum.cursor.com/t/i-read-cursorrules-will-be-deprecated-please-dont/51779](https://forum.cursor.com/t/i-read-cursorrules-will-be-deprecated-please-dont/51779)
    
9. My take on Cursor Rules - Discussion, accessed July 5, 2025, [https://forum.cursor.com/t/my-take-on-cursor-rules/67535](https://forum.cursor.com/t/my-take-on-cursor-rules/67535)
    
10. How to write great Cursor Rules | Trigger.dev, accessed July 5, 2025, [https://trigger.dev/blog/cursor-rules](https://trigger.dev/blog/cursor-rules)
    
11. Cursor Rules, accessed July 5, 2025, [https://docs.cursor.com/context/@-symbols/@-cursor-rules](https://docs.cursor.com/context/@-symbols/@-cursor-rules)
    
12. Best Practices: .cursorrules - How To - Cursor - Community Forum, accessed July 5, 2025, [https://forum.cursor.com/t/best-practices-cursorrules/41775](https://forum.cursor.com/t/best-practices-cursorrules/41775)
    
13. My experience with Cursor + attached .cursorrules - Reddit, accessed July 5, 2025, [https://www.reddit.com/r/cursor/comments/1hgzk5e/my_experience_with_cursor_attached_cursorrules/](https://www.reddit.com/r/cursor/comments/1hgzk5e/my_experience_with_cursor_attached_cursorrules/)
    
14. # Mastering Cursor AI: The Ultimate Guide for Developers (2025 ..., accessed July 4, 2025, [https://dev.to/mayank_tamrkar/-mastering-cursor-ai-the-ultimate-guide-for-developers-2025-edition-2ihh](https://dev.to/mayank_tamrkar/-mastering-cursor-ai-the-ultimate-guide-for-developers-2025-edition-2ihh)
    
15. Top Cursor Rules for Coding Agents - PromptHub, accessed July 5, 2025, [https://www.prompthub.us/blog/top-cursor-rules-for-coding-agents](https://www.prompthub.us/blog/top-cursor-rules-for-coding-agents)
    
16. Best Practices for Cursor rules - Reddit, accessed July 5, 2025, [https://www.reddit.com/r/cursor/comments/1jhurjt/best_practices_for_cursor_rules/](https://www.reddit.com/r/cursor/comments/1jhurjt/best_practices_for_cursor_rules/)
    
17. cursor_rules/.cursor/rules/documentation-reference.mdc at main · Mawla/cursor_rules · GitHub, accessed July 5, 2025, [https://github.com/Mawla/cursor_rules/blob/main/.cursor/rules/documentation-reference.mdc](https://github.com/Mawla/cursor_rules/blob/main/.cursor/rules/documentation-reference.mdc)
    
18. Working with Documentation - Cursor Docs, accessed July 5, 2025, [https://docs.cursor.com/guides/advanced/working-with-documentation](https://docs.cursor.com/guides/advanced/working-with-documentation)
    
19. dazzaji/Cursor_User_Guide - GitHub, accessed July 5, 2025, [https://github.com/dazzaji/Cursor_User_Guide](https://github.com/dazzaji/Cursor_User_Guide)
    
20. Cursor for complex projects - Discussion, accessed July 5, 2025, [https://forum.cursor.com/t/cursor-for-complex-projects/38911](https://forum.cursor.com/t/cursor-for-complex-projects/38911)
    
21. You're using Cursor rules the wrong way, accessed July 5, 2025, [https://forum.cursor.com/t/you-re-using-cursor-rules-the-wrong-way/62530](https://forum.cursor.com/t/you-re-using-cursor-rules-the-wrong-way/62530)
    
22. Video watch page: Top Cursor Tutorials and Community Tips (April ..., accessed July 4, 2025, [https://www.reddit.com/r/cursor/comments/1jvfu6w/top_cursor_tutorials_and_community_tips_april_2025/](https://www.reddit.com/r/cursor/comments/1jvfu6w/top_cursor_tutorials_and_community_tips_april_2025/)
    
23. Pro Vibe Coding — Windsurf VS Cursor | by Niladri Bose - Medium, accessed July 4, 2025, [https://medium.com/pro-vibe-coding/pro-vibe-coding-windsurf-vs-cursor-d5cbfee5be0f](https://medium.com/pro-vibe-coding/pro-vibe-coding-windsurf-vs-cursor-d5cbfee5be0f)
    
24. Waterfall 2.0: LLM-Driven Workflows in Software Development | by Georgii Starikov | May, 2025 | Medium, accessed July 4, 2025, [https://medium.com/@gstarikov/waterfall-2-0-llm-driven-workflows-in-software-development-701dc8b287ba](https://medium.com/@gstarikov/waterfall-2-0-llm-driven-workflows-in-software-development-701dc8b287ba)
    
25. MVP Development with Cursor - my full setup (TDD, rules, planning ..., accessed July 5, 2025, [https://www.reddit.com/r/ChatGPTCoding/comments/1kl5adu/mvp_development_with_cursor_my_full_setup_tdd/](https://www.reddit.com/r/ChatGPTCoding/comments/1kl5adu/mvp_development_with_cursor_my_full_setup_tdd/)
    
26. Maximizing Your Cursor Use: Advanced Prompting, Cursor Rules, and Tooling Integration, accessed July 5, 2025, [https://medium.com/@extremelysunnyyk/maximizing-your-cursor-use-advanced-prompting-cursor-rules-and-tooling-integration-496181fa919c](https://medium.com/@extremelysunnyyk/maximizing-your-cursor-use-advanced-prompting-cursor-rules-and-tooling-integration-496181fa919c)
    
27. The Ultimate Guide to AI-Powered Development with Cursor: From Chaos to Clean Code, accessed July 4, 2025, [https://medium.com/@vrknetha/the-ultimate-guide-to-ai-powered-development-with-cursor-from-chaos-to-clean-code-fc679973bbc4](https://medium.com/@vrknetha/the-ultimate-guide-to-ai-powered-development-with-cursor-from-chaos-to-clean-code-fc679973bbc4)
    
28. cursor_rules/.cursor/rules/test_driven_development.mdc at main · Mawla/cursor_rules · GitHub, accessed July 5, 2025, [https://github.com/Mawla/cursor_rules/blob/main/.cursor/rules/test_driven_development.mdc](https://github.com/Mawla/cursor_rules/blob/main/.cursor/rules/test_driven_development.mdc)
    
29. How I use Cursor (+ my best tips) - Builder.io, accessed July 5, 2025, [https://www.builder.io/blog/cursor-tips](https://www.builder.io/blog/cursor-tips)
    
30. Cursor AI Tutorial: Build a Full Stack App with AI in 30 Minutes | Nat Eliason - YouTube, accessed July 5, 2025, [https://www.youtube.com/watch?v=QnABGJ8cy_U](https://www.youtube.com/watch?v=QnABGJ8cy_U)
    
31. [Guide] A Simpler, More Autonomous AI Workflow for Cursor [New ..., accessed July 5, 2025, [https://forum.cursor.com/t/guide-a-simpler-more-autonomous-ai-workflow-for-cursor-new-update/70688](https://forum.cursor.com/t/guide-a-simpler-more-autonomous-ai-workflow-for-cursor-new-update/70688)
    
32. [Guide] A Simpler, More Autonomous AI Workflow for Cursor [New Update] - Page 3, accessed July 5, 2025, [https://forum.cursor.com/t/guide-a-simpler-more-autonomous-ai-workflow-for-cursor-new-update/70688?page=3](https://forum.cursor.com/t/guide-a-simpler-more-autonomous-ai-workflow-for-cursor-new-update/70688?page=3)
    
33. en.wikipedia.org, accessed July 4, 2025, [https://en.wikipedia.org/wiki/Model_Context_Protocol#:~:text=The%20Model%20Context%20Protocol%20(MCP,%2C%20systems%2C%20and%20data%20sources.](https://en.wikipedia.org/wiki/Model_Context_Protocol#:~:text=The%20Model%20Context%20Protocol%20\(MCP,%2C%20systems%2C%20and%20data%20sources.)
    
34. Introducing the Model Context Protocol \ Anthropic, accessed July 4, 2025, [https://www.anthropic.com/news/model-context-protocol](https://www.anthropic.com/news/model-context-protocol)
    
35. What Is the Model Context Protocol (MCP) and How It Works - Descope, accessed July 4, 2025, [https://www.descope.com/learn/post/mcp](https://www.descope.com/learn/post/mcp)
    
36. Model Context Protocol - Wikipedia, accessed July 4, 2025, [https://en.wikipedia.org/wiki/Model_Context_Protocol](https://en.wikipedia.org/wiki/Model_Context_Protocol)
    
37. How to connect Cursor to 100+ MCP Servers within minutes - DEV Community, accessed July 4, 2025, [https://dev.to/composiodev/how-to-connect-cursor-to-100-mcp-servers-within-minutes-3h74](https://dev.to/composiodev/how-to-connect-cursor-to-100-mcp-servers-within-minutes-3h74)
    
38. Data Structures Essentials with AI Tutor | AlgoCademy, accessed July 5, 2025, [https://algocademy.com/uses/data-structures-essentials-with-ai-tutor/](https://algocademy.com/uses/data-structures-essentials-with-ai-tutor/)
    
39. Sharing my .cursorrules after several successful projects with thousands of users : r/cursor - Reddit, accessed July 5, 2025, [https://www.reddit.com/r/cursor/comments/1jplf6u/sharing_my_cursorrules_after_several_successful/](https://www.reddit.com/r/cursor/comments/1jplf6u/sharing_my_cursorrules_after_several_successful/)
    
40. Cursor Rules ... Need help please, accessed July 5, 2025, [https://forum.cursor.com/t/cursor-rules-need-help-please/67540](https://forum.cursor.com/t/cursor-rules-need-help-please/67540)
    
41. Is there a discord channel for cursor? - Discussion, accessed July 5, 2025, [https://forum.cursor.com/t/is-there-a-discord-channel-for-cursor/42079](https://forum.cursor.com/t/is-there-a-discord-channel-for-cursor/42079)
    
42. Cursor - Community Forum, accessed July 5, 2025, [https://forum.cursor.com/](https://forum.cursor.com/)
    
43. Cursor Discord/Community? - Reddit, accessed July 5, 2025, [https://www.reddit.com/r/cursor/comments/1j11jnk/cursor_discordcommunity/](https://www.reddit.com/r/cursor/comments/1j11jnk/cursor_discordcommunity/)
    
44. Learn Algorithms with AI Tutor | AlgoCademy, accessed July 5, 2025, [https://algocademy.com/uses/learn-algorithms-with-ai-tutor/](https://algocademy.com/uses/learn-algorithms-with-ai-tutor/)
    
45. How would you go about making an AI Tutor? : r/AI_Agents - Reddit, accessed July 5, 2025, [https://www.reddit.com/r/AI_Agents/comments/1ix4an3/how_would_you_go_about_making_an_ai_tutor/](https://www.reddit.com/r/AI_Agents/comments/1ix4an3/how_would_you_go_about_making_an_ai_tutor/)
    
46. Community | Cursor - The AI Code Editor, accessed July 5, 2025, [https://www.cursor.com/community](https://www.cursor.com/community)
    
47. Cursor - Reddit, accessed July 5, 2025, [https://www.reddit.com/r/cursor/](https://www.reddit.com/r/cursor/)
    
48. CursorRules Blog - Mastering AI-Assisted Coding, accessed July 5, 2025, [https://dotcursorrules.com/blog](https://dotcursorrules.com/blog)
    

