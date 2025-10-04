
#VibeCoding/cursorrules 
# 开发者精通指南：深入实践 Cursor 的“规则”与“记忆”功能

  
  

![|200](https://www.gstatic.com/lamda/images/gemini_thumbnail_v2_55a4e3be7b83404a620e5.jpg)

(Source: [google.com: Google Gemini](https://gemini.google.com/u/1/app/231621c9a2ab73a8))

  
  (Source: [google.com: Cursor 记忆规则实践指南 - Google Docs](https://docs.google.com/document/d/1VXMVWHvWNuFvFPHfk7I7UKTxKJxYoKtbWge8EFZHRyM/edit?tab=t.0))

## 第一部分：奠定基础 - 为 AI 构建持久化上下文

  
  

### 引言：超越聊天框——为何持久化上下文是 AI 辅助开发的范式革命

  

在当今的软件开发领域，大型语言模型（LLM）已从新奇工具转变为日常的编程伙伴。然而，标准 LLM 交互的一个根本性限制在于其无状态（stateless）的本质。每一次对话都是一次新的开始，模型无法记忆之前的项目细节、架构决策或编码规范。这种“失忆症”导致开发者不得不反复提供相同的背景信息，极大地限制了协作效率 1。

Cursor，作为一款专为 AI 打造的代码编辑器，其核心设计理念正是为了突破这一局限 3。它旨在将通用型 AI 转变为一个具备“项目感知力”的专业助手。实现这一目标的关键在于区分两种上下文类型：

瞬时上下文（transient context）和持久化上下文（persistent context）。前者包括当前打开的文件、终端输出和即时聊天历史；而后者，即本指南的核心——**“规则”（Rules）与“记忆”（Memories）**功能，则为 AI 提供了跨会话的、稳定的知识库和行为准则。

掌握持久化上下文的构建，意味着开发者与 AI 的协作模式发生了质的飞跃。AI 不再是一个被动回答问题的通用工具，而是演变成一个深刻理解项目背景、遵循团队规范、并能主动维护自身知识体系的专业团队成员 2。这一转变的背后，是开发范式从“提示工程”（prompt engineering）向“环境工程”（environment engineering）的演进。开发者工作的重心，从优化单个问题，转向精心设计和维护 AI 的长期知识结构与行为模式。

这种演进并非一蹴而就。Cursor 的功能在飞速迭代，而充满活力的开发者社区在实践中探索出的最佳实践和高级模式，其发展速度往往超越了官方文档的更新 5。因此，本指南不仅涵盖官方功能，更深度融合了社区的集体智慧，旨在提供一条从入门到精通的完整路径，帮助开发者将 AI 辅助开发的潜力发挥到极致。

  

### 第二部分：精通“规则”——为 AI 编写开发者说明书

  

“规则”功能是开发者向 Cursor AI 灌输项目特定指令、编码规范和架构决策的主要工具。它如同一本为 AI 量身定制的说明书，确保其生成的代码、提出的建议始终与项目目标保持一致。

  

#### 2.1 规则的剖析：项目作用域与用户作用域

  

Cursor 的规则体系被清晰地划分为两个作用域：用户规则（全局）和项目规则（仓库特定）。理解二者的区别，是高效运用规则功能的第一步 2。

  

##### 用户规则（全局）

  

- 目的：定义开发者个人的、全局性的偏好。这些规则会跟随开发者，应用于其在 Cursor 中打开的所有项目 4。
    
- 位置与格式：在 Cursor Settings > Rules 中设置。其格式为纯文本，不支持 .mdc 文件所特有的元数据（如 globs 或 alwaysApply）8。
    
- 使用场景：非常适合设定与具体项目无关的个人习惯。例如，定义 AI 的回应风格（“回答务必简洁，避免冗余”）、统一的编码风格（“总是使用 async/await 而非 .then() 链式调用”），或者高层次的编程哲学（“优先保证代码的可读性”）2。
    

  

##### 项目规则（仓库特定）

  

- 目的：定义特定于某个代码仓库的规范、架构模式和领域知识。这些规则被存储在项目目录中，通过版本控制系统（如 Git）与整个团队共享，从而确保所有成员与 AI 的协作都遵循统一标准 7。
    
- 位置与格式：存储在项目根目录下的 .cursor/rules/ 文件夹中，每个规则都是一个独立的 .mdc（Markdown with Components）文件 5。这是 Cursor 推荐的现代化标准，用以取代旧版的单一  
    .cursorrules 文件 7。
    
- 结构：.mdc 文件由两部分组成：顶部的 YAML frontmatter（元数据块）和下方的 Markdown 内容（规则主体）。元数据块通过 --- 分隔，包含用于控制规则行为的关键字段，如 description（描述）、globs（文件匹配模式）和 alwaysApply（是否总是应用）5。
    

为了更直观地区分这两种规则，下表提供了一个快速参考。

表1：规则作用域对比：用户规则 vs. 项目规则

|   |   |   |
|---|---|---|
|特性|用户规则 (Global)|项目规则 (Project)|
|作用域|全局，应用于所有项目|仓库级别，仅对当前项目生效|
|存储位置|Cursor 设置 (Settings > Rules)|项目目录 (.cursor/rules/)|
|文件格式|纯文本|.mdc (Markdown with Components)|
|主要用途|定义个人编码偏好、回应风格、通用原则|定义项目架构、编码标准、领域知识、团队规范|
|版本控制|不支持|支持 (可提交至 Git)|
|团队共享|不支持|支持 (通过版本控制共享)|

  

#### 2.2 激活的逻辑：Cursor 如何应用规则

  

要真正掌握规则，就必须理解其背后的激活机制。这并非一个简单的“读取并执行”过程，而是涉及到一个更精妙的两阶段模型。社区用户的深度探索揭示了官方文档之外的关键细节，理解这一模型是解决“规则为何有时会失效”这一常见困惑的钥匙 5。

  

##### 两阶段激活模型

  

规则的应用分为两个截然不同的阶段：注入（Injection）和激活（Activation）。

1. 注入阶段：在此阶段，规则文件的内容被加载并提供给 AI 的上下文窗口，使其“可用”。但仅仅可用，不代表它会被执行。一个规则是否被注入，主要由其元数据中的 alwaysApply: true 设置或匹配的 globs 文件模式决定。
    
2. 激活阶段：在规则被注入后，AI 会根据当前用户的查询意图和规则元数据中的 description 字段，来最终决定是否在本次交互中实际“采纳”并遵循该规则。
    

这一机制意味着，开发者不仅要编写规则内容，更要为规则撰写一个有说服力的“广告词”（即 description），以引导 AI 在恰当的时机选择使用它。

  

##### 规则类型及其触发机制

  

Cursor 提供了四种规则类型，它们的行为与上述两阶段模型紧密相关 2。

- Always (总是)
    

- 注入逻辑：无条件注入。这类规则始终存在于 AI 的“脑海”中。
    
- 激活逻辑：虽然总是被注入，但其最终是否被严格遵循，仍取决于与当前任务的相关性。适合定义项目中最核心、最不容置疑的原则，例如“本项目使用 TypeScript v5.0”。
    

- Auto Attached (自动附加)
    

- 注入逻辑：当用户在聊天中通过 @ 引用或编辑器上下文涉及到与 globs 模式匹配的文件时，该规则被注入。例如，globs: ["frontend/**/*.tsx"] 会在处理任何 React 前端组件时注入规则。
    
- 激活逻辑：注入后，AI 会评估其内容与当前任务的匹配度来决定是否激活。
    

- Agent Requested (智能体请求)
    

- 注入逻辑：默认不注入。相反，AI 会看到一个“可用规则列表”，这个列表只包含规则的名称和 description。
    
- 激活逻辑：AI 会分析用户的请求，并根据每个规则的 description 判断哪个规则可能有用。如果它认为某个规则相关，它会使用内部工具（如 fetch_rules）去获取该规则的完整内容，然后注入并激活它 5。这使得  
    description 字段对于此类规则至关重要。一个好的 description 不是简单的“测试规则”，而应该是“USE WHEN: 编写或修改单元测试和集成测试时，特别是关于 Mocking 和断言库的使用”。
    

- Manual (手动)
    

- 注入与激活逻辑：只有当用户在聊天中通过 @ruleName 语法显式调用时，该规则才会被注入和激活 7。这为执行特定、一次性的工作流提供了极大的灵活性。
    

这种复杂的激活机制揭示了一个更深层次的交互模式：有效的规则管理，需要开发者对 AI 的“认知过程”具备同理心。仅仅在规则文件中写入指令是不够的，必须通过精心设计的 description 和恰当的规则类型，为 AI 提供清晰的、有吸引力的触发条件，才能确保这些规则在复杂的项目中被可靠地应用。这是一种比单纯编写指令更高阶的技能。

  

#### 2.3 规则的实用技巧：一本开发者的“食谱”

  

本章将提供一系列即用型规则模板和实例，这些内容综合了社区的最佳实践，旨在帮助开发者快速上手，解决常见的开发场景 8。

  

##### 强制执行编码标准

  

确保代码库风格统一是规则最常见的用途之一。

- 示例：TypeScript 严格模式  
Code snippet  
    
```markdown
---  
description: Enforces strict TypeScript standards for the project.  
globs: ["**/*.ts", "**/*.tsx"]  
alwaysApply: false  
---  
# TypeScript Project Rules  
  
1.  **Strict Typing**: Always use TypeScript for all new code. The `any` type is strictly forbidden. If a type is unknown, use `unknown` and perform necessary type checks.  
2.  **Interfaces over Types**: Prefer `interface` for defining object shapes and public APIs. Use `type` for unions, intersections, or primitives.  
3.  **Avoid Enums**: Do not use `enum`. Instead, use string literal unions or `as const` objects for constant collections.  

```
	
这个规则利用 globs 自动应用于所有 TypeScript 文件，明确禁止了 any 类型，并推荐了接口和类型的最佳实践 9。
    

  

##### 定义架构模式

  

规则可以成为架构决策的“守护者”，确保新代码遵循既定模式。

- 示例：强制使用 Repository 模式  
    Code snippet  
```markdown
---  
description: Rule for creating new services that use the Repository pattern for database access.  
agentRequested: true  
---  
# Service and Repository Pattern  
  
When asked to create a new feature that requires database interaction, you must follow the Repository Pattern.  
  
1.  **Service Layer**: Contains business logic. It should not directly access the database.  
2.  **Repository Layer**: Handles all data access logic (CRUD operations). It is injected into the service layer.  
3.  **Reference Template**: Use the structure defined in `@/src/core/templates/service-template.ts` as a blueprint for new services.  
  
Do not write raw database queries inside service files. All data access must be delegated to a corresponding repository method.  
```
      
此规则不仅描述了模式，还通过 @ 语法引用了一个模板文件，为 AI 提供了具体的代码结构参考，这是一种非常强大的技术 7。


  

##### 脚手架与模板代码

  

使用规则可以自动化生成新模块或组件，减少重复性工作。

- 示例：生成新的 React 组件  
    Code snippet  

```markdown
    
---  
description: Scaffolds a new React functional component with TypeScript, styles, and tests.  
manual: true  
---  
# New React Component Generator  
  
When invoked with `@new-react-component`, generate the following file structure and content for a component named `{componentName}`:  
  
-   `src/components/{componentName}/{componentName}.tsx`: A functional component with props typed via a TypeScript interface.  
-   `src/components/{componentName}/{componentName}.module.css`: A CSS module for styling.  
-   `src/components/{componentName}/{componentName}.test.tsx`: A basic test file using React Testing Library.  
  
Ensure all necessary imports (React, styles, etc.) are included.  

```

  
作为一个手动规则，开发者可以在需要时通过 @new-react-component 精准地触发它 2。
    

  

##### 弃用与反模式

  

明确告知 AI 不应该做什么，和告诉它应该做什么同样重要。

- 示例：弃用旧版 API  
    Code snippet  
```
---  
description: Prevents the use of the deprecated v1 API and guides towards the v2 API.  
always: true  
---  

# API Usage Guidelines  
  
**DEPRECATED**: The `legacyApi.fetch()` function is deprecated and must not be used in new code. It will be removed in the next quarter.  
  
**CORRECT PATTERN**: Always use the `apiV2.get()` client for all data fetching. It provides better error handling and type safety.  
  
Example of correct usage:  
"""typescript  
import { apiV2 } from '@/api/client';  
  
const data = await apiV2.get('/users');  
```
    
    通过强烈的指令性语言（如 must not be used）和清晰的“正确模式”示例，可以有效地引导 AI 避免使用过时的代码 15。
    

  

#### 2.4 规则管理的高级策略

  

当项目规模扩大，规则数量增多时，有效的管理策略变得至关重要。

  

##### 组织与组合

  

- 按领域组织：在 .cursor/rules/ 目录下，根据功能或领域创建不同的 .mdc 文件，例如 frontend.mdc、backend.mdc、testing.mdc。这使得规则集更易于维护和理解 8。
    
- 嵌套规则：对于大型单体仓库（monorepo），可以在子目录中创建各自的 .cursor/rules/ 文件夹。这些嵌套的规则会自动应用于其所在目录及子目录中的文件，实现了更细粒度的作用域控制 7。
    
- 保持简洁：遵循最佳实践，将每个规则文件的长度控制在 500 行以内。对于复杂的逻辑，应将其拆分为多个更小、更专注、可组合的规则 7。
    

  

##### 团队协作

  

- 版本控制：将整个 .cursor 目录提交到 Git 是实现团队协作的基石。这确保了团队中的每位成员（以及他们的 AI 助手）都使用同一套标准，从而保证了代码库的一致性 5。
    
- 活文档：项目规则本身就是一种“活文档”（living documentation）。它们不仅指导 AI，也向新加入的团队成员清晰地传达了项目的架构决策和编码规范 11。
    

  

##### 常见问题排查

- AI 行为异常：当 AI 表现出困惑、丢失上下文或无视规则时，首先尝试使用 Ctrl+Shift+P 打开命令面板，执行 Developer: Reload Window（重载窗口）和 Cursor: Resync Index（重新同步索引）。这通常能解决大部分由缓存或索引问题引起的异常 16。
    
- 保持规则文件打开：一个社区发现的技巧是，在工作时保持一个关键的规则文件（例如 core.mdc）在编辑器中处于打开状态。这似乎有助于 Cursor 更可靠地加载和应用规则，可能是因为它能触发更频繁的上下文刷新 16。
    

  

### 第三部分：驾驭“记忆”——为你的 AI 安装持久大脑

  

如果说“规则”是给 AI 的一本静态说明书，那么“记忆”功能则赋予了它学习和成长的能力。它让 AI 能够记住对话中的关键信息、项目的演进和开发者的偏好，从而在持续的协作中变得越来越智能。然而，Cursor 中的“记忆”概念存在一定的模糊性，它实际上涵盖了两种截然不同的机制：官方的自动“记忆”功能和社区驱动的结构化“记忆库”模式。

  

#### 3.1 记忆的两种面孔：自动生成与结构化构建

  

清晰地区分这两种“记忆”系统，是有效利用它们的前提。

  

##### 自动“记忆”（官方功能）

  

- 机制：这是 Cursor 内置的一项功能。它通过一个“旁观者”（sidecar）AI 模型，在后台被动地观察开发者与 AI 的对话，并自动提取它认为重要的事实进行记录 17。此外，开发者也可以通过明确的指令，如“记住，我们项目使用 pnpm 作为包管理器”，来主动触发记忆的生成 1。
    
- 存储：这些被提取的事实通常以类似键值对的形式，保存在项目特定的一个文件中，常见的文件名为 learned-memories.mdc，位于 .cursor/rules 目录下 1。
    

  

##### 结构化“记忆库”（社区模式）

  

- 机制：这并非一项官方内置功能，而是一套由社区创造和推广的、功能强大的工作流模式 6。它是一种主动的、结构化的知识管理体系。
    
- 存储：该模式的核心是在项目中创建一个专用的目录（例如 /memory_bank/ 或 /memory/），并在其中维护一系列分工明确的 Markdown 文件，如 techContext.md（技术栈）、systemPatterns.md（系统模式）、tasks_plan.md（任务计划）等。这些文件共同构成了项目的“长期记忆”6。
    

下表清晰地对比了这两种记忆系统，以帮助开发者根据需求选择合适的工具。

表2：记忆系统对比：自动“记忆” vs. 结构化“记忆库”

|   |   |   |
|---|---|---|
|特性|自动“记忆” (Automatic "Memories")|结构化“记忆库” (Structured "Memory Bank")|
|机制|AI 被动观察或被动指令触发，自动提取事实|开发者主动创建和维护的一套结构化文档|
|用户投入|低，主要是对话和偶尔的纠正|高，需要主动规划、撰写和维护文档|
|结构|扁平的、类似键值对的事实列表|高度结构化，按领域划分的多个 Markdown 文件|
|存储位置|通常是 .cursor/rules/ 下的单个文件|项目根目录下的专用文件夹 (如 /memory/)|
|主要用途|记录零散、具体的事实（如版本号、库选择）|存储全面的项目知识（架构、业务逻辑、任务）|
|控制级别|较低，依赖 AI 的提取能力，可手动编辑|非常高，开发者完全控制记忆的内容和结构|

  

#### 3.2 使用自动“记忆”

  

对于日常开发中的零散信息记录，自动“记忆”功能是一个轻便而有效的工具。

- 启用与触发：在 Cursor > Settings > Rules 中，可以找到并启用“Generate Memories”选项 19。启用后，AI 会开始自动学习。若要主动记录，只需在对话中直接下达指令，例如：“记住，这个项目的所有 API 响应都必须遵循 JSend 格式”1。
    
- 审查与纠正：AI 的理解并非总是完美。因此，定期审查其生成的记忆至关重要。开发者可以在 Settings > Rules 界面中查看、编辑或删除已生成的记忆条目 19。也可以直接打开  
    .cursor/rules/learned-memories.mdc 文件进行修改 1。这一步骤是防止“记忆污染”（即 AI 记住了错误信息并反复使用）的关键环节 6。
    
- 局限性：自动记忆功能非常适合记录简单的、原子化的事实。但当需要存储复杂的、相互关联的系统知识时（如整个认证流程的数据流），它的扁平结构就显得力不从心。这正是引入结构化“记忆库”的契机。
    

  

#### 3.3 构建项目的“记忆库”

  

构建一个结构化的“记忆库”是对项目知识进行系统化管理的终极解决方案。这套由社区驱动的模式，能够将项目的核心知识沉淀下来，供 AI 和团队成员随时取用。

  

##### 搭建与结构

  

1. 创建目录结构：在项目根目录下创建一个名为 memory 或 memory_bank 的文件夹。在其内部，可以根据需要创建子目录，如 docs 用于存放静态文档，tasks 用于任务管理 6。
    
2. 定义核心文档：初始化一系列核心 Markdown 文件，每个文件承载不同的知识领域 6：
    

- product_requirement_docs.md：产品需求文档，描述项目目标和功能。
    
- architecture.md：架构文档，可以使用 Mermaid.js 等工具描绘系统图、数据流和组件关系。
    
- techContext.md：技术栈上下文，详细列出所用的框架、库、版本号及配置。
    
- tasks_plan.md：任务计划，记录待办、进行中和已完成的任务列表。
    
- active_context.md：当前活动上下文，用于记录当前正在开发的具体任务的细节和临时笔记。
    

  

##### “计划/执行”（Plan/Act）工作流

  

这是使用“记忆库”时一个至关重要的安全模式，旨在防止 AI 在没有得到明确批准的情况下对代码库进行大规模或意外的修改 6。

- 计划模式（Plan Mode）：当接到一个开发任务时，首先要求 AI 进入“计划模式”。在此模式下，AI 不会修改任何代码文件，而是会分析任务需求，并将其对“记忆库”中的相关文件（如 tasks_plan.md 或 architecture.md）的修改计划呈现给开发者。
    

- 示例：
    

- 开发者：“Plan: Add a new user authentication system.”
    
- AI：“[AI provides a detailed plan, including changes to architecture.md to add the auth service, and new tasks in tasks_plan.md. No code is written.]”
    

- 执行模式（Act Mode）：开发者审查 AI 提出的计划。在确认无误后，下达“执行”指令。此时，AI 才会根据已经批准的计划，开始进行实际的代码编写和文件修改。
    

- 示例：
    

- 开发者：“Looks good, act.”
    
- AI：“[AI proceeds to implement the authentication system based on the approved plan.]”
    

  

##### 维护与更新

  

“记忆库”的价值在于其“鲜活”。过时的信息比没有信息更糟糕。

- 定期更新：在完成一个功能或做出重要技术决策后，应立即更新“记忆库”。可以手动更新，更高效的方式是利用 AI 自身的能力。
    
- AI 自我维护：使用类似“Update memory bank”的指令，要求 AI 回顾最近的对话和代码变更，并自动更新“记忆库”中的相关文档 6。这形成了一个强大的闭环：开发活动产生新的知识，AI 负责将这些知识沉淀到长期记忆中，从而将繁琐的文档维护工作转变为一个轻松的交互过程。
    

  

### 第四部分：融会贯通——高级编排与生态系统集成

  

当开发者分别掌握了“规则”和“记忆”之后，真正的威力来自于将二者结合，并将其与外部知识生态系统连接起来。这标志着从被动使用者到主动“AI 编排者”的转变。

  

#### 4.1 规则与记忆的和谐共鸣

  

“规则”和“记忆”并非孤立的系统，它们可以相互协作，形成一个强大的、自洽的认知框架。

- 利用记忆的规则：可以编写规则，明确指示 AI 在执行特定任务前必须查阅“记忆库”。这种方式将静态的指令与动态的知识背景联系起来。
    

- 示例规则：“在实现任何新的 API 端点之前，你必须阅读 @/memory/docs/architecture.md 文件，以确保你遵循现有的数据流和错误处理模式。”20。这条规则强制 AI 的行为必须基于项目的宏观架构，而非凭空创造。
    

- 从记忆中提炼规则：一次开发会话（一种临时的“记忆”）结束后，其中可能蕴含着可以泛化的、持久的教训。将这些教训“提炼”成通用的规则，是一个强大的自学习和改进循环。
    

- 示例流程：在一个会话中，开发者多次纠正 AI 使用了某个库的错误方法。会话结束后，开发者可以启动一个“复盘”（retrospective）过程，要求 AI：“总结本次对话中学到的关于 some-library 的最佳实践，并将其抽象成一条新的、通用的项目规则。” 23。这个过程可以将一次性的纠正成本，转化为永久性的能力提升。
    

- 多智能体架构：对于极其复杂的项目，可以借鉴微服务的思想，创建多个专门的规则文件，将 AI “扮演”成不同的角色。例如，architect.mdc 规则定义了负责系统级规划的“架构师 AI”，而 service-specialist.mdc 则定义了专注于特定微服务实现的“服务专家 AI”。通过 globs 模式，可以在处理不同目录下的代码时自动切换 AI 的“角色”，实现多智能体协作 25。
    

  

#### 4.2 驾驭冲突与优先级

  

随着规则和记忆的增多，指令间的潜在冲突成为一个现实问题。开发者需要理解 Cursor 处理这些冲突的机制，并学会如何引导 AI。

- “无固定优先级”的现实：根据社区的深入探讨和共识，Cursor 内部并没有一个硬编码的、固定的优先级层次结构来裁决用户规则、项目规则和即时指令之间的冲突 26。AI 的最终行为是多种因素综合作用的结果。
    
- 影响行为的关键因素：
    

- 提示词位置：在最终组合成的完整提示词（prompt）中，越靠后的信息往往对 LLM 的影响权重越大。这意味着，虽然规则在提示词的开头设定了基本框架，但用户在聊天中输入的最新指令，很可能会覆盖或改变先前的规则 26。
    
- 规则的长度与数量：过长或过多的规则会增加 AI 的“认知负荷”，可能导致它在处理时感到困惑，从而忽略掉部分指令。因此，保持规则的简洁和专注至关重要 7。
    

- 社区驱动的优先级管理策略：
    

- 命名约定：通过为规则文件添加数字前缀（如 001-core.mdc, 101-frontend.mdc, 201-testing.mdc）来进行组织。虽然这不直接影响 AI 的处理逻辑，但它为开发者提供了一种管理和理解规则加载顺序的手段 26。
    
- 明确的优先级提示：在规则文件的内容中，直接加入自然语言提示，如 Priority: High 或 CRITICAL RULE。足够先进的 AI 模型可能会理解并尊重这些元指令 26。
    
- 在规则中定义冲突解决方案：可以在核心规则中加入一条元规则，指导 AI 如何处理冲突。例如：“如果用户的即时指令与项目规则存在明显冲突，在执行前必须向用户请求澄清。” 23。
    

  

#### 4.3 超越代码库：扩展上下文的边界

  

要让 AI 成为真正的全能助手，就必须让它能够访问和利用代码库之外的知识。Cursor 提供了多种机制，将内部开发环境与广阔的外部信息世界连接起来。

- 访问公共知识：
    

- @Docs：此命令允许 AI 直接查询和引用来自流行框架和库的官方文档。当需要获取最新、最权威的 API 参考、配置指南或最佳实践时，这是一个极其有用的工具 27。例如：  
    @Docs React-Router v6 explain the difference between <Link> and <Navigate>.
    
- @Web：此命令赋予 AI 进行实时互联网搜索的能力。当需要查找最新的社区教程、技术博客文章、性能比较或刚刚发布的新闻时，@Web 可以提供官方文档之外的广阔视角 27。
    

- 集成私有与企业知识：模型上下文协议（MCP）
    

- 什么是 MCP？：模型上下文协议（Model Context Protocol）是一种标准化的方式，用于将 Cursor 与企业内部的、私有的知识库和系统连接起来 27。
    
- 为何至关重要？：AI 模型在训练时无法接触到你公司的内部 API、专有系统或特定的合规要求。MCP 正是弥合这一信息鸿沟的桥梁 27。
    
- 应用场景：通过 MCP，可以实现对内部 Confluence 空间、Notion 数据库、Google Drive 文档，甚至是自定义 API 和数据库的连接 27。
    
- 高级应用：开发者可以构建自定义的 MCP 服务器，不仅允许 AI 读取内部系统的数据，还能赋予它写入的权限。例如，让 AI 在完成一个功能后，自动去更新 Jira 上的任务状态，或是在 Confluence 上更新相关的 API 文档 27。
    

这一系列功能的组合，尤其是结构化“记忆库”与 MCP 的集成，为实现一个真正“自我记录”和“自我管理”的代码库铺平了道路。设想一个完整的工作流：

1. 开发者在一个结构化的“记忆库”中维护着项目的状态和历史 6。
    
2. 通过 MCP，这个内部“记忆库”与外部的企业系统（如 Jira、Confluence）实现了双向连接 27。
    
3. 开发者可以创建一个高级规则：“当一个功能分支被合并到主干后，自动更新‘记忆库’中的 progress.md 文件，然后调用 Jira MCP 工具关闭对应的任务，最后调用 Confluence MCP 工具更新该功能的 API 文档页面。”22。
    

这个工作流将编码、文档撰写和项目管理这三个传统上相互分离的活动，融合成了一个由 AI 驱动的、统一的、自动化的过程。它极大地减少了开发者的行政负担，从根本上解决了文档与代码不同步的问题，并创造了一个良性循环：代码库及其相关知识始终保持同步，并由同一个智能代理进行管理。

  

### 结论：从工具使用者到 AI 编排者

  

本指南引领的旅程，始于克服 AI 的“失忆症”，终于构建一个高度智能、深度定制化的开发伙伴。我们从基础的“规则”和“记忆”概念出发，逐步深入到它们的内部机制、高级策略和生态集成。

回顾整个过程，一条清晰的路径浮现出来：

- 起步：通过简单的用户规则和项目规则，为 AI 设定基本的行为准则和项目规范。
    
- 进阶：利用自动“记忆”功能捕捉零散信息，并着手构建一个结构化的“记忆库”，为项目沉淀核心知识。
    
- 精通：将“规则”与“记忆”和谐地编排在一起，让规则能够利用记忆，让记忆能够提炼出新的规则，形成一个自学习的闭环。
    
- 超越：通过 @Docs, @Web 和 MCP，打破代码库的壁垒，将 AI 与海量的公共知识和私有的企业生态系统连接起来，实现前所未有的自动化工作流。
    

最终，掌握这些功能的核心，不仅仅是学会了如何使用一个工具，更是掌握了一套全新的工作哲学。开发者不再仅仅是 AI 建议的被动接收者，而是其“心智模型”的主动设计者和“认知环境”的积极构建者。通过精心编排 AI 的知识、行为和连接，我们正在将一个通用的语言模型，塑造成为一个专属于我们自己和团队的、无可替代的、高效的编程伙伴。这正是 AI 辅助开发时代，赋予开发者的最大潜能。

#### Works cited

1. Cursor rule for adding memory - Playbooks, accessed July 5, 2025, [https://playbooks.com/rules/memory](https://playbooks.com/rules/memory)
    
2. Guiding AI with Rules: How Cursor v 1.0.0 Makes LLM Coding Smarter and More Consistent | by Deepak Agarwal | Jun, 2025 | Medium, accessed July 5, 2025, [https://medium.com/@deepakagarwalofficial/guiding-ai-with-rules-how-cursor-v-1-0-0-makes-llm-coding-smarter-and-more-consistent-20d1a32cc180](https://medium.com/@deepakagarwalofficial/guiding-ai-with-rules-how-cursor-v-1-0-0-makes-llm-coding-smarter-and-more-consistent-20d1a32cc180)
    
3. Cursor Docs, accessed July 5, 2025, [https://docs.cursor.com/welcome](https://docs.cursor.com/welcome)
    
4. Cursor AI for Software Development: A Beginner's Guide | Pragmatic Coders, accessed July 5, 2025, [https://www.pragmaticcoders.com/blog/cursor-ai-for-software-development](https://www.pragmaticcoders.com/blog/cursor-ai-for-software-development)
    
5. A Deep Dive into Cursor Rules (> 0.45) - Discussions - Cursor Forum, accessed July 5, 2025, [https://forum.cursor.com/t/a-deep-dive-into-cursor-rules-0-45/60721](https://forum.cursor.com/t/a-deep-dive-into-cursor-rules-0-45/60721)
    
6. How to Supercharge AI Coding with Cursor Rules and Memory ..., accessed July 5, 2025, [https://www.lullabot.com/articles/supercharge-your-ai-coding-cursor-rules-and-memory-banks](https://www.lullabot.com/articles/supercharge-your-ai-coding-cursor-rules-and-memory-banks)
    
7. Rules - Cursor, accessed July 5, 2025, [https://docs.cursor.com/context/rules](https://docs.cursor.com/context/rules)
    
8. Mastering Cursor Rules: A Developer's Guide to Smart AI Integration - DEV Community, accessed July 5, 2025, [https://dev.to/dpaluy/mastering-cursor-rules-a-developers-guide-to-smart-ai-integration-1k65](https://dev.to/dpaluy/mastering-cursor-rules-a-developers-guide-to-smart-ai-integration-1k65)
    
9. Cursor Rules: Customizing AI Behavior for Personalized Coding. | cursor101.com, accessed July 5, 2025, [https://cursor101.com/article/cursor-rules-customizing-ai-behavior](https://cursor101.com/article/cursor-rules-customizing-ai-behavior)
    
10. Best practices when using Cursor the AI editor. - GitHub, accessed July 5, 2025, [https://github.com/digitalchild/cursor-best-practices](https://github.com/digitalchild/cursor-best-practices)
    
11. Mastering Cursor IDE: 10 Best Practices (Building a Daily Task Manager App) - Medium, accessed July 5, 2025, [https://medium.com/@roberto.g.infante/mastering-cursor-ide-10-best-practices-building-a-daily-task-manager-app-0b26524411c1](https://medium.com/@roberto.g.infante/mastering-cursor-ide-10-best-practices-building-a-daily-task-manager-app-0b26524411c1)
    
12. PatrickJS/awesome-cursorrules: Configuration files that enhance Cursor AI editor experience with custom rules and behaviors - GitHub, accessed July 5, 2025, [https://github.com/PatrickJS/awesome-cursorrules](https://github.com/PatrickJS/awesome-cursorrules)
    
13. Can anyone help me use this new .cursor/rules functionality? - Discussions - Cursor - Community Forum, accessed July 5, 2025, [https://forum.cursor.com/t/can-anyone-help-me-use-this-new-cursor-rules-functionality/45692](https://forum.cursor.com/t/can-anyone-help-me-use-this-new-cursor-rules-functionality/45692)
    
14. Definitive Rules - Discussions - Cursor - Community Forum, accessed July 5, 2025, [https://forum.cursor.com/t/definitive-rules/45282](https://forum.cursor.com/t/definitive-rules/45282)
    
15. How to write great Cursor Rules - Trigger.dev, accessed July 5, 2025, [https://trigger.dev/blog/cursor-rules](https://trigger.dev/blog/cursor-rules)
    
16. Rules for ultra context, memories, lessons, scratchpad with plan and act modes - Page 2, accessed July 5, 2025, [https://forum.cursor.com/t/rules-for-ultra-context-memories-lessons-scratchpad-with-plan-and-act-modes/48792?page=2](https://forum.cursor.com/t/rules-for-ultra-context-memories-lessons-scratchpad-with-plan-and-act-modes/48792?page=2)
    
17. Memories - Cursor, accessed July 5, 2025, [https://docs.cursor.com/context/memories](https://docs.cursor.com/context/memories)
    
18. The Good and Bad of Cursor AI Code Editor - AltexSoft, accessed July 5, 2025, [https://www.altexsoft.com/blog/cursor-pros-and-cons/](https://www.altexsoft.com/blog/cursor-pros-and-cons/)
    
19. About cursor's memory record feature? - Discussions - Cursor - Community Forum, accessed July 5, 2025, [https://forum.cursor.com/t/about-cursors-memory-record-feature/107355](https://forum.cursor.com/t/about-cursors-memory-record-feature/107355)
    
20. One shared rules + memory bank for every AI coding IDE. : r/cursor - Reddit, accessed July 5, 2025, [https://www.reddit.com/r/cursor/comments/1koj6vx/one_shared_rules_memory_bank_for_every_ai_coding/](https://www.reddit.com/r/cursor/comments/1koj6vx/one_shared_rules_memory_bank_for_every_ai_coding/)
    
21. Cursor 1.0 is here! - Reddit, accessed July 5, 2025, [https://www.reddit.com/r/cursor/comments/1l3gdma/cursor_10_is_here/](https://www.reddit.com/r/cursor/comments/1l3gdma/cursor_10_is_here/)
    
22. The Ultimate Guide to AI-Powered Development with Cursor: From Chaos to Clean Code, accessed July 5, 2025, [https://medium.com/@vrknetha/the-ultimate-guide-to-ai-powered-development-with-cursor-from-chaos-to-clean-code-fc679973bbc4](https://medium.com/@vrknetha/the-ultimate-guide-to-ai-powered-development-with-cursor-from-chaos-to-clean-code-fc679973bbc4)
    
23. This gist provides structured prompting rules for optimizing Cursor AI interactions. It includes three key files to streamline AI behavior for different tasks. · GitHub, accessed July 5, 2025, [https://gist.github.com/aashari/07cc9c1b6c0debbeb4f4d94a3a81339e](https://gist.github.com/aashari/07cc9c1b6c0debbeb4f4d94a3a81339e)
    
24. Cursor Rules ... Need help please, accessed July 5, 2025, [https://forum.cursor.com/t/cursor-rules-need-help-please/67540](https://forum.cursor.com/t/cursor-rules-need-help-please/67540)
    
25. AI That Can Truly Learn and Retain My Codebase - Discussion - Cursor - Community Forum, accessed July 5, 2025, [https://forum.cursor.com/t/ai-that-can-truly-learn-and-retain-my-codebase/67404](https://forum.cursor.com/t/ai-that-can-truly-learn-and-retain-my-codebase/67404)
    
26. Rules Hierarchy in Cursor - Discussions - Cursor - Community Forum, accessed July 5, 2025, [https://forum.cursor.com/t/rules-hierarchy-in-cursor/108589](https://forum.cursor.com/t/rules-hierarchy-in-cursor/108589)
    
27. Working with Documentation - Cursor, accessed July 5, 2025, [https://docs.cursor.com/guides/advanced/working-with-documentation](https://docs.cursor.com/guides/advanced/working-with-documentation)
    
28. How to Use Cursor AI - Alexander Young, accessed July 5, 2025, [https://blog.alexanderfyoung.com/how-to-use-cursor-ai/](https://blog.alexanderfyoung.com/how-to-use-cursor-ai/)
    
