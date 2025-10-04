
[[Course - 交互产品综合创作]]
[[交互产品综合创作工具链]]
我们已经完成了所有核心的“**规划与设计**”工作：

1. **项目简介** (Analyst Mary) - 定义了“为什么”。
2. **需求文档** (PM John) - 定义了“做什么”。
3. **架构文档** (Architect Winston) - 定义了“怎么建”。
4. **体验设计** (UX Expert Sally) - 定义了“感觉如何”。
5. 最终验证 (PO Sarah) 全面的、交叉的审核矛盾


从“规划 (Planning)”阶段进入“开发 (Development)”阶段


[[BMAD]]
[[课程设计报告|课程设计报告]]
通过gitingest 了解 BMad怎么使用
[ 🌐 gitingest Gitingest](@https://gitingest.com/)
[[BMAD]]
[[BMad-Method 多智能体协作框架轻松打造敏捷AI驱动开发工作流]]
- 复制GitHub仓库链接
- 粘贴到ingest平台输入框
- 点击"ingest"按钮生成文档
- 将文档导入GPT模型


<!-- 
[NOTE] 整个流程非常直观，只需四个简单步骤...
[SD] 这四个步骤形成了完整的知识传递链条，从原始仓库到可交互的AI理解
[D&F] 实际测试显示，该方法比传统阅读文档方式节省约65%的时间
-->

**ingest平台**（仓库解析工具）
- 自动分析仓库结构
- 生成易懂的说明文档

**GPT模型**（智能解读）
- 解释技术细节
- 回答使用问题

<!-- 
[NOTE] 这两个工具各有侧重，协同工作效果最佳...
[SD] ingest负责结构化解析，GPT负责自然语言解释，形成技术理解闭环
[D&F] 超过80%的开发者表示，结合使用这两种工具能显著提升学习新技术的效率
-->

https://github.com/bmad-code-org/BMAD-METHOD/tree/main
![bg fit left:50% vertical](https://i.imgur.com/DgBaD7Y.webp)


![bg fit left:50% vertical](https://i.imgur.com/E4oTbug.webp)

[ 💻 github BMAD-METHOD/dist/teams/team-fullstack.txt at main · bmad-code-org/BMAD-METHOD](@https://github.com/bmad-code-org/BMAD-METHOD/blob/main/dist/teams/team-fullstack.txt)



## 敏捷开发。 -  文档与角色
### 文档

Product requirements document
prd.md


[ 🔍 google Google Gemini](@https://gemini.google.com/u/1/app/97558954727940ea)
avatar 讨论
[ 🔍 google Gemini](@https://gemini.google.com/u/1/gem/a3118b16246e/08c7edc265b2ec20)

### BMAD核心流程中的文档创建角色

#### **Analyst (业务分析师)** 负责项目初期的探索和定义。

该角色创建 `brief.md (Project Brief / 项目简报)` 来捕获项目核心理念、目标用户和 `MVP` 范围，同时负责撰写 `market-research.md (Market Research Report / 市场研究报告)` 和 `competitor-analysis.md (Competitive Analysis Report / 竞争对手分析报告)`。
![bg fit left:50% vertical](https://i.imgur.com/HY1tiTA.webp)

#### **PM (Product Manager / 产品经理)** 

负责将愿景转化为具体需求，其核心产出是 `prd.md (Product Requirements Document / 产品需求文档)`，其中定义了功能性与非功能性需求、`Epics (史诗)` 和 `Stories (用户故事)`。
![bg fit left:50% vertical](https://i.imgur.com/2vmV50p.webp)

#### **UX Expert (用户体验专家)** 

负责定义产品的用户界面和交互，并创建 `front-end-spec.md (UI/UX Specification / 前端规格说明书)`，详细说明用户流程和视觉规范。
![bg fit left:50% vertical](https://i.imgur.com/hDc7GxY.webp)


### BMAD核心流程中的技术与执行角色

#### **Architect (架构师)** 

负责设计项目的技术蓝图，并编写核心的 `architecture.md (Architecture Document / 架构文档)`，内容涵盖技术选型、数据模型和部署策略。对于 `Brownfield (旧系统改造)` 项目，此文档会侧重于集成方案。当项目前端复杂时，架构师还会创建 `ui-architecture.md (Frontend Architecture Document / 前端架构文档)`。

![bg fit left:50% vertical](https://i.imgur.com/qlMvmtF.webp)




####  **SM (Scrum Master)** 
负责将规划转化为可执行任务，他会从 `prd.md` 中提取需求，使用 `story-tmpl.yaml` 模板创建一系列遵循 `[epic_num].[story_num].[story_title_short].md` 命名模式的 `User Story Document (用户故事文档)`。
![bg fit left:50% vertical](https://i.imgur.com/4aaoO6y.webp)

### BMAD核心流程中的支持与验证角色

**PO (Product Owner / 产品负责人)** 

作为验证者和管理者，负责使用 `po-master-checklist.md` 来审查所有规划文档的一致性与完整性，并执行 `shard-doc` 任务来拆分文档以支持开发。
![bg fit left:50% vertical](https://i.imgur.com/tiSC5ZI.webp)

#### **QA (Test Architect & Quality Advisor / 测试架构师)** 

负责创建质量评估报告和门禁文件，这些文档通常存储在 `docs/qa/` 目录下，并遵循特定命名模式，例如 `...-risk-{YYYYMMDD}.md (风险评估报告)`、`...-test-design-{YYYYMMDD}.md (测试设计文档)` 和 `...-{slug}.yml (质量门禁文件)`。
![bg fit left:50% vertical](https://i.imgur.com/p6P4TGJ.webp)

#### **Dev (Full Stack Developer / 开发者)** 

在实现过程中负责更新对应的用户故事文档，具体是在文件内的 `Dev Agent Record` 部分记录实现细节、文件变更和调试日志。

![bg fit left:50% vertical](https://i.imgur.com/QMuwMUR.webp)


### 基础设施与运维扩展包

**@infra-devops-platform (DevOps Infrastructure Specialist / DevOps 基础设施专家)** 负责设计和记录云原生系统的架构。该角色使用 `infrastructure-architecture-tmpl.yaml` 模板来创建 `infrastructure-architecture.md (Infrastructure Architecture / 基础设施架构文档)`，并基于此文档使用 `infrastructure-platform-from-arch-tmpl.yaml` 模板来规划具体的 `platform-implementation.md (Platform Infrastructure Implementation / 平台基础设施实现方案)`。

### 创意写作扩展包

该扩展包由多个专职作家代理协同工作。

**@plot-architect (Story Structure Specialist / 情节架构师)** 负责创建 `premise.md (Premise Brief / 故事前提简报)`、`story-outline.md (Story Outline / 故事大纲)` 和 `scene-list.md (Scene List / 场景列表)`。

**@character-psychologist (Character Development Expert / 角色心理学家)** 负责撰写 `character-profile.md (Character Profile / 角色简介)`。

**@world-builder (Setting & Universe Designer / 世界构建师)** 负责构建 `world-guide.md (World Guide / 世界指南)`。

**@cover-designer (Book Cover Designer / 封面设计师)** 则负责创建 `cover-brief.md (Cover Design Brief / 封面设计简报)`。

### 2D游戏开发扩展包

该扩展包涵盖了游戏设计与架构的核心文档。

**@game-designer (Game Design Specialist / 游戏设计师)** 负责创建项目的初始蓝图，包括 `game-brief.md (Game Brief / 游戏简报)`、`game-design-document.md (Game Design Document / 游戏设计文档)` 和 `level-design-document.md (Level Design Document / 关卡设计文档)`。

**@game-architect (Game Architect / 游戏架构师)** 则负责技术层面的设计，其核心产出是 `game-architecture.md (Game Architecture Document / 游戏架构文档)`。



## 1 无脑风暴

 [ 🔍 google Google Gemini](@https://gemini.google.com/u/1/app/9b9b094a35d75c00)

![bg fit left:50% vertical](https://i.imgur.com/4vs01ew.webp)




Your critical operating instructions are attached, do not break character as directed

随附您的关键操作说明，请按指示不要违反规定 


BMad 流程的**第一阶段：规划 (Planning)**。我们共同创建了：

1. **Project Brief** (项目简报 - 定义“为什么”)
2. **Product Requirements Document (PRD)** (产品需求文档 - 定义“是什么”)
3. **Architecture Document** (架构文档 - 定义“如何做”)



## 2 Brief 

[ 🔍 google Google Gemini](@https://gemini.google.com/u/1/gem/b2e750ee4611/30aba3d54c1f6356)



## 说中文

- **修改YAML配置块**： 在文件顶部，您会看到一个被 ` ```yaml ` 和 ` ``` ` 包围的代码块。这是该代理的配置区域。找到 `agent:` 部分下的 `customization:` 字段。
    
- **添加中文指令**： 将 `customization:` 字段的值从 `null` 修改为一条明确的中文交流指令。
```ini
CRITICAL: "You MUST communicate exclusively in Chinese unless otherwise instructed by the user. Respond to all prompts in Chinese."
```
![bg fit left:50% vertical](https://i.imgur.com/wfrGV0I.webp)







## “回归”流程笔记（基于BMAD-METHOD™）

### 一、核心角色：BMAD Orchestrator
- **执行名**：@bmad-orchestrator  
- **功能定位**：项目协调员和BMad方法专家，负责工作流协调、多代理任务管理及角色切换指导。  
- **核心作用**：当不确定该联系哪个专家时，是最佳对接人选。

### 二、回归流程步骤
1. **激活总指挥官：BMAD Orchestrator**  
   - 操作方式：在IDE（如Cursor）中输入指令 `@bmad-orchestrator`  
   - 激活后：Orchestrator会主动问好，并提示可通过 `*help` 命令查看所有可用指令。  

2. **回顾项目状态：使用status命令**  
   - 操作方式：运行指令 `*status`  
   - 功能效果：Orchestrator会展示项目当前上下文、活动的代理及进度情况，帮助快速回溯项目进度。  

3. **获取下一步指导：使用workflow-guidance命令**  
   - 适用场景：对下一步行动感到困惑时  
   - 操作方式：运行指令 `*workflow-guidance`  
   - 功能效果：Orchestrator会评估项目可用工作流，并通过提问协助选择最合适的下一步行动。  

4. **指派合适的代理：使用agent命令**  
   - 操作逻辑：根据workflow-guidance的结果或项目需求，通过 `*agent` 命令指派对应代理  
   - 最终目标：像项目主管一样重新掌控项目节奏，确保开发工作沿正确轨道推进。

## 代码与文档规范管理笔记

### 一、清理和修正不规范的脚本与文档
通过内置工具自动修正代理生成的不规范内容，步骤如下：
1. **自动格式化YAML和Markdown**
   - 核心工具：`yaml-format.js` 脚本（修正YAML配置格式）、ESLint（依据`eslint.config.mjs`规则）
   - 操作命令：在项目根目录终端运行 `npm run lint:fix`
   - 作用：修复`.js`、`.mjs`、`.yaml`文件的语法、缩进、引号等格式问题，使其符合项目规范
2. **统一代码风格**
   - 核心工具：`prettier`
   - 操作命令：运行 `npm run format`
   - 作用：统一格式化整个代码库（包括Markdown文档、JSON文件），确保风格一致

### 二、管理和清理废弃的文档
通过`index-docs`任务系统化处理，推荐借助BMAD Master代理执行：
1. **激活代理**：在IDE中输入 `@bmad-master`
2. **启动任务**：向代理发送指令（如“请运行`index-docs`任务整理`docs/`目录”）
3. **执行流程**
   - 扫描：遍历`docs/`目录及子目录
   - 比对：检查`docs/index.md`，识别索引中不存在的文件条目和未被索引的“孤儿”文件
   - 交互式清理：针对问题文件，询问是否移除条目、更新路径或保留记录
   - 生成新索引：最终产出干净准确的`docs/index.md`，作为文档“单一事实来源”




## 交接HandOver

我需要建立一套Agent间高效交接的标准化规范，让我在任务暂停或完成时能自动输出紧凑的JSON状态快照。这份文档必须包含任务进展、架构设计、关键决策、问题记录、个人习惯偏好，以及完整的文件状态管理和依赖关系树。我要求下一个接手的Agent能在零上下文情况下立即理解当前状况，通过成功文件依赖链找到正确入口点，或通过失败清理清单快速处理问题文件，实现真正的无缝工作交接，避免重复劳动，最大化AI协作的连续性和效率。


```markdown
Agent Handover Document Generator 任务完成时输出紧凑JSON交接文档，确保下一Agent零上下文达到等效状态。 输出要求：短键名，未知填"NA"，保留所有字段。 核心字段： { "id": "任务标识", "g": "目标描述", "st": "状态(NS/IP/BL/DN)", "prog": ["关键进展"], "mem": ["重要记忆"], "hab": { "comm": "沟通偏好", "code": "编码风格", "tools": "常用工具", "pace": "工作节奏", "taboos": "禁忌事项" }, "arch": { "mods": ["核心模块"], "flow": "数据流", "deps": ["关键依赖"], "deploy": "部署状态", "perm": "权限边界" }, "retro": { "good": ["优点"], "issues": ["问题"], "better": ["改进建议"] }, "dec": [{"what":"决策","why":"理由","impact":"影响","rollback":"回滚点"}], "iss": [{"symptom":"现象","impact":"影响","repro":"复现","workaround":"临时方案","priority":"H/M/L","deadline":"时限"}], "next": [{"action":"动作","req_cap":["所需能力"],"priority":"H/M/L","est_time":"预估时间"}], "sec": { "vault_ref": "密钥库引用", "scope": "权限范围", "ttl": "有效期", "enc": "加密信息" } } 可选字段：ctx,cons,blk,evd,tools,env,oq,ts,ver,model,cost,files,perf,tests files字段（核心优化）： "files": { "success_tree": { "root_entries": ["主入口"], "working_chain": [{"file":"路径","depends_on":["依赖"],"used_by":["使用者"],"status":"valid"}], "module_map": [{"name":"模块","entry":"入口","files":["文件列表"],"role_match":"适合角色"}] }, "failure_cleanup": { "invalid_files": [{"path":"路径","reason":"原因","safe_remove":true,"cleanup_cmd":"清理命令"}], "broken_deps": [{"file":"文件","issue":"问题","impact":["影响"],"fix_action":"修复动作"}] }, "change_log": { "created": [{"path":"路径","purpose":"用途","agent":"创建者"}], "modified": [{"path":"路径","reason":"原因","changes":"变更","agent":"修改者"}], "deleted": [{"path":"路径","reason":"原因","recoverable":true}] }, "quick_access": { "start_here": "推荐起始文件", "key_configs": ["关键配置"], "rollback_points": [{"version":"版本","path":"路径","desc":"描述"}] } } 安全原则：敏感信息仅放sec字段，其他位置用[REDACTED]。 Agent效率策略： - 失败：查failure_cleanup获取清理清单 - 成功：通过success_tree找入口沿working_chain理解依赖 - 启动：使用quick_access.start_here作起点 状态码：NS未开始/IP进行中/BL阻塞/DN已完成 优先级保留顺序：g→st→prog→files.success_tree→files.failure_cleanup→hab→arch→retro→iss→next→dec→sec 输出：紧凑JSON，无换行。
```



## 清理流程冗余

### 项目文件系统整洁的重要性
在项目迁移或长期开发过程中，保持文件系统整洁、避免“孤儿文件”是确保项目健康和可维护性的关键。**BMAD-METHOD** 提供了专门的工具和流程来解决这一问题。

### BMAD-METHOD™ 的核心理念
其核心原则之一是**结构化优于随意创建**。文档并非随意创建，而是通过特定模板和流程生成在固定目录（如 docs/prd、docs/architecture、docs/stories），从源头上减少“孤儿文件”的产生。

### 混乱产生后的清理策略一：使用代码库“压平器”（flattener）
**flattener（代码库压平工具）** 主要功能是将项目文件打包成XML文件供AI分析，虽非专为清理设计，但其内置智能过滤功能可识别项目核心外的“噪音”。工作原理包括：自动读取项目的.gitignore文件；应用默认忽略规则，涵盖多数应被忽略的文件和目录，如node_modules、build、dist等构建产物目录，*.log等日志文件和.cache等缓存目录，.vscode、.idea等IDE配置文件，.env*等环境变量文件，以及大型媒体文件和二进制文件。利用其识别混乱的步骤为：在项目根目录运行`npx bmad-method flatten`；将项目实际文件列表与工具生成的不含被忽略文件的摘要报告比对，快速识别可能不需要的被忽略文件。

### 混乱产生后的清理策略二：使用文档索引任务（index-docs）
**index-docs（文档索引任务）** 是解决docs/目录文档混乱的直接且有力工具。推荐使用**BMAD Master（@bmad-master）** 代理执行，因其具备管理所有文档资源的能力，且能力清单（dependencies）中明确包含index-docs.md任务。操作步骤为：激活代理，在IDE中输入@bmad-master；启动任务，向代理发出如“请运行index-docs任务来整理我的docs/目录”的指令；遵循代理引导清理，代理会执行交互式流程，包括全面扫描docs/目录及其子目录、识别实际存在但未在docs/index.md记录的“孤儿文件”、识别docs/index.md有记录但实际不存在的“断链”条目、就每个问题文件向用户确认（询问添加到索引、移除索引条目、更新文件路径还是彻底忽略）、在用户指导下生成干净准确的docs/index.md文件（作为项目所有文档的“单一事实来源”）。

### 清理流程的效果
通过上述流程，可使混乱的项目目录重新规整，确保每份文档都有明确价值和归属，在项目迁移和后续开发中保持清晰高效。

