# 项目需求文档 (PRD): 教育家工具箱 (Educator's Toolkit)

**版本:** 1.2

**关联Brief版本:** 1.2

**制定方:** 课程规划师 (Course Planner - PM)

**RooCode集成版本:** 1.0

### **1. 目标与背景上下文**

#### **1.1. 目标**

- **核心目标:** 构建一个基于 B-mad 框架的智能化教育工具，通过智能体协同，自动化处理从课程规划到教学评估的全流程，显著提升备课效率与教学质量。
    
- **用户价值:** 解放教师生产力，使其能将更多精力投入到教学创新和与学生的互动中，而非耗费在繁琐的文档工作中。
    
- **产品价值:** 成为教育领域首个基于 B-mad 理念的、以结构化文档和教育理论为驱动的智能化教学辅助系统。
    

#### **1.2. 背景上下文**

本项目旨在解决数字媒体、公共艺术等领域教师在备课过程中面临的核心痛点：流程繁琐、内容一致性难以保证、以及创新瓶颈。通过引入一套遵循成熟教育理论（如OBE、布鲁姆分类学）的智能体团队，我们将复杂的备课过程拆解为标准化的工作流，确保每一份产出物（大纲、教案、课件）都逻辑严密、目标明确且高度一致。

### **2. 功能性需求 (Functional Requirements)**

- **FR1:** 系统应提供一个 `课程规划师 (PM)` 智能体，能够基于用户提供的 `brief.md` 生成结构化的 `syllabus.md` 和 `prd.md`。
    
- **FR2:** 系统应提供一个 `教学设计师 (Architect)` 智能体，能够将 `prd.md` 中的规划分解为每周的教学任务 (`story.md`)，并为每个任务生成详细的 `lesson-plan.md` 和 `rubrics.md`。
    
- **FR3:** `教学设计师` 在设计作业 (`assignments.md`) 时，必须提供“可扩展评估设计”选项，包括对大型作业（如游戏、影像）的降维提交建议。
    
- **FR4:** 系统应提供一个 `内容创作者 (Dev)` 智能体，能够根据 `lesson-plan.md` 和用户提供的素材（完整或零散），生成符合 `Marpit` 规范的 `slides.md`。
    
- **FR5:** `内容创作者` 能够根据 `lesson-plan.md` 生成配套的作业 (`assignments.md`) 和试卷 (`exams.md`)，并支持A/B卷模式。
    
- **FR6:** 系统应提供一个 `Project Migrator` 智能体，用于识别并引导用户将非规范的旧项目升级到 B-mad for Education 的标准目录结构。
    
- **FR7:** 所有智能体在执行任务前，必须进行“防御性信息索取”，检查所需上游文档是否存在，若不存在则暂停并提示用户。
    
- **FR8:** 所有智能体在修改或生成内容时，必须执行“冲突检测”，当发现与上游文档（如`prd.md`的目标）不一致时，需暂停并向用户请求决策。
    
- **FR9:** 系统必须提供清晰的"任务交接"指引，在每个智能体完成任务后，明确告知用户下一步建议调用的角色和任务。
    
- **FR10:** 系统应支持 RooCode 集成，提供教育专用智能体角色选择器，允许用户根据具体任务需求选择合适的智能体角色。
    
- **FR11:** RooCode 教育智能体应与现有 BMad 框架智能体协同工作，支持角色切换和任务交接，确保工作流程的无缝衔接。
    
- **FR12:** 系统应提供角色引入向导，帮助用户理解不同教育智能体的职责范围、理论框架和最佳使用场景。
    
- **FR13:** RooCode 集成应支持教育理论框架的配置管理，确保智能体行为符合特定的教育理论要求（OBE、布鲁姆分类学等）。
    

### **3. 非功能性需求 (Non-Functional Requirements)**

- **NFR1 (性能):** 智能体响应时间应在可接受范围内，大型文档（如50页PPT）的生成时间不应超过5分钟。
    
- **NFR2 (易用性):** CLI 版本应提供清晰的命令和帮助文档，支持常见的命令行操作。
    
- **NFR3 (兼容性):** 工具应兼容主流操作系统（Windows、macOS、Linux），生成的 Markdown 文件应具备良好的跨平台兼容性。
    
- **NFR4 (安全性):** 用户的所有课程资料和输入内容仅在本地处理，不上传至任何云端服务器。
    
- **NFR5 (可维护性):** 核心引擎与界面分离，便于未来功能扩展和维护。
    
- **NFR6 (兼容性):** RooCode 集成应保持与现有 BMad 框架的兼容性，支持混合使用模式。
    
- **NFR7 (可扩展性):** 角色选择器应支持动态添加新的教育智能体角色，适应不同的教育场景需求。
    
- **NFR8 (用户体验):** RooCode 角色切换应提供直观的用户界面和清晰的角色能力说明。
    

### **4. Epic 列表与规划**

#### **Epic 1: 基础框架与核心交互搭建**

- **目标:** 建立 `expansion pack` 的核心引擎，实现智能体调用、标准化文档结构创建，并定义核心的 `team-education.yaml` 配置文件和交互原则。
    
- **关键交付成果 (Key Deliverables):**
    
    - 一个可以初始化标准课程项目目录结构的命令。
        
    - 智能体之间具备清晰的任务交接、冲突检测和信息索取能力。
        
    - `team-education.yaml` 原型，定义了三大核心智能体角色的职责与协作流程。
        

#### **Epic 2: 课程规划 (PM) 能力实现**

- **目标:** 完整实现 `课程规划师 (PM)` 的核心功能，使其能够根据 `brief` 稳定地生成高质量的 `prd.md` 和 `syllabus.md`。
    
- **关键交付成果 (Key Deliverables):**
    
    - **MVP 功能:** "根据 brief 优化 syllabus" 的能力。
        
    - 能够将用户的初步想法转化为结构化的 `prd.md`。
        

#### **Epic 3: 教学设计 (Architect) 能力实现**

- **目标:** 完整实现 `教学设计师 (Architect)` 的核心功能，包括 `story` 分解、`lesson-plan` 生成，以及具备“可扩展评估设计”能力的 `rubrics` 和 `assignments` 规范创建。
    
- **关键交付成果 (Key Deliverables):**
    
    - 能够将 `prd.md` 分解为每周的 `story.md`。
        
    - 能够为每个 `story` 生成详细的 `lesson-plan.md`。
        
    - 能够设计出具备“可扩展评估设计”策略的 `assignments.md` 和 `rubrics.md` 规范。
        

#### **Epic 4: 内容创作 (Dev) 能力实现**

- **目标:** 完整实现 `内容创作者 (Dev)` 的核心功能，专注于 `Marpit` 幻灯片、作业和试卷的高效、准确生成。
    
- **关键交付成果 (Key Deliverables):**
    
    - **MVP 功能:** "根据 lesson-plan 和文字稿生成 Marpit 幻灯片" 的能力。
        
    - 能够生成配套的作业和试卷。
        

#### **Epic 5: 项目管理与集成能力**

- **目标:** 开发 `Project Migrator` 智能体以支持旧项目升级，并完善 CLI 版本，为未来自动化集成（如超星）奠定基础。
    
- **关键交付成果 (Key Deliverables):**
    
    - 能够识别并引导用户升级不符合 B-mad 规范的旧项目。
        
    - 提供一个功能完备的 CLI 版本，为后续自动化集成奠定基础。
        

### **5. Epic 详细分解**

#### **Epic 1: 基础框架与核心交互搭建**

- **Story 1.1: Expansion Pack 初始化**
    
    - **As a** 教师, **I want** to initialize the "Educator's Toolkit" in a new course folder, **so that** the standard B-mad for Education directory structure is automatically created.
        
    - **Acceptance Criteria:**
        
        1. 在命令行提供 "educators-toolkit init" 命令。
            
        2. 执行后，在当前目录创建 `docs/`, `lessons/`, `assignments/`, `exams/` 文件夹。
            
        3. 自动在 `/docs` 中生成一个空的 `brief.md` 模板文件。
            
- **Story 1.2: 智能体调用与交接**
    
    - **As a** 教师, **I want** the agents to provide clear handoffs after completing a task, **so that** I always know what the next step in the workflow is.
        
    - **Acceptance Criteria:**
        
        1. 每个智能体完成任务后，必须在输出末尾提供下一步的行动建议。
            
        2. 建议中必须明确指出下一个推荐调用的智能体角色和任务。
            
- **Story 1.3: 冲突检测与信息索取**
    
    - **As a** 教师, **I want** agents to proactively ask for missing information and warn me about inconsistencies, **so that** I can ensure the quality and coherence of my course materials.
        
    - **Acceptance Criteria:**
        
        1. 当智能体执行任务缺少上游文档时，必须暂停并向用户发出明确提示。
            
        2. 当智能体的操作与 `prd.md` 或 `story.md` 的目标冲突时，必须暂停并向用户提供决策选项。
            
- **Story 1.4: 定义智能体团队配置文件 (`team-education.yaml`)**
    
    - **As a** 开发者, **I want** to create the `team-education.yaml` configuration file, **so that** the roles of `课程规划师`, `教学设计师`, and `内容创作者` and their handoff prompts are formally defined within the B-mad framework.
        
    - **Acceptance Criteria:**
        
        1. 创建一个名为 `team-education.yaml` 的文件。
            
        2. 文件中需定义课程规划师、教学设计师、内容创作者三个核心角色。
            
        3. 每个角色需包含其职责、理论框架和协同流程的初步定义。
            
        4. 定义角色之间的 `handoff_prompts`，确保工作流可以顺畅衔接。
            

#### **Epic 2: 课程规划 (PM) 能力实现**

- **Story 2.1: ...**
    
- **Story 2.2: ...**
    

_(后续 Epics 的 Stories 将在架构设计阶段进一步细化)_