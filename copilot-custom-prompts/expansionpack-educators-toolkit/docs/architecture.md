# 架构文档: 教育家工具箱 (Educator's Toolkit)

版本: 1.2

关联 PRD 版本: 1.2

RooCode 集成版本: 1.0

### **1. 架构概览**

本架构遵循 B-mad 核心原则，通过定义模块化的智能体 (`agents`)、可执行的任务 (`tasks`)、标准化的模板 (`templates`) 和质量保证的检查清单 (`checklists`)，来构建一个专为教育场景设计的 CLI 工具。

- **核心设计:** 一个由三名核心智能体组成的团队 (`team-education`)，通过结构化的工作流，协同完成从课程规划到内容生成的全过程。工具以 CLI 形式提供，确保在任何开发环境中都能使用。
    
- **交互模型:** 所有智能体都遵循"主动沟通、任务交接、防御性信息索取、冲突检测"的核心交互原则，确保用户始终处于主导地位。通过命令行界面提供清晰的操作指引。
    
- **RooCode 集成:** 基于现有的 `.roomodes` 配置模式，创建 `.roomodes-education` 教育角色选择器，实现教育智能体与 BMad 框架的协同工作支持。
    

### **2. 智能体 (Agents) 核心定义**

#### **2.1. 课程规划师 (Course Planner - PM 角色)**

- **`agent-file:`** `course-planner.md`
    
- **`core_principles:`**
    
    - **目标驱动:** 所有规划必须围绕 `brief.md` 中定义的课程目标和学生能力达成。
        
    - **理论约束:** 严格遵循**成果导向教育 (OBE)** 和**布鲁姆认知目标分类学 (Bloom's Taxonomy)** 原则。
        
    - **结构化输出:** 产出的 `prd.md` 和 `syllabus.md` 必须结构清晰，逻辑严密。
        
    - **用户确认:** 在最终确定 `prd.md` 前，必须向用户总结规划并请求确认。
        
- **`commands:`**
    
    - `*create-prd`: 基于 `brief.md` 生成 `prd.md`。
        
    - `*create-syllabus`: 基于 `prd.md` 生成 `syllabus.md`。
        

#### **2.2. 教学设计师 (Instructional Designer - Architect 角色)**

- **`agent-file:`** `instructional-designer.md`
    
- **`core_principles:`**
    
    - **设计一致性:** `lesson-plan.md` 和 `story.md` 的设计必须严格对齐 `prd.md` 的 Epic 规划。
        
    - **理论约束:** 教学活动设计需运用**加涅九段教学法**和**建构主义学习理论**。
        
    - **可评估性优先:** 所有作业和评分标准的设计，必须优先考虑评估的客观性和评分效率。
        
    - **质量保证:** 在完成 `story` 和 `lesson-plan` 设计后，**必须**自动执行 `consistency-check.yaml` 检查清单。
        
- **`commands:`**
    
    - `*create-stories`: 将 `prd.md` 中的 Epics 分解为每周的 `story.md` 文件。
        
    - `*create-lesson-plan`: 为指定的 `story.md` 生成详细的 `lesson-plan.md`。
        
    - `*design-assignment`: 设计作业规范 (`assignments.md`) 和评分标准 (`rubrics.md`)。
        

#### **2.3. 内容创作者 (Content Creator - Dev 角色)**

- **`agent-file:`** `content-creator.md`
    
- **`core_principles:`**
    
    - **忠实执行:** 严格按照 `lesson-plan.md` 和 `assignments.md` 的规范生成内容，不进行创造性发挥。
        
    - **理论约束:** 课件生成遵循**多媒体学习的认知理论**，优化信息呈现。
        
    - **素材依赖:** 在生成内容前，必须检查所需素材是否齐全，否则向用户发起请求。
        
    - **格式精确:** 生成的 `Marpit` 幻灯片必须符合标准，无渲染错误。
        
- **`commands:`**
    
    - `*create-slides`: 根据 `lesson-plan.md` 和素材生成 `slides.md`。
        
    - `*create-exam-papers`: 根据 `lesson-plan.md` 生成 A/B 试卷。
        

### **3. 标准化项目结构 (Standardized Project Structure)**

为确保所有智能体和用户对课程资料的组织有统一的认知，每个课程项目都将遵循以下文件夹结构。`expansion pack` 的初始化命令 (`Story 1.1`) 将自动创建此结构。

```
/课程名称/
├── docs/              # 核心规划与设计文档 (顶层设计)
│   ├── brief.md       # (用户输入) 课程简介与原始需求
│   ├── prd.md         # (PM 输出) 课程规划，包含Epics和高层级Stories
│   ├── syllabus.md    # (PM 输出) 面向学生的教学大纲
│   └── architecture.md# (Architect 输出) 整体教学设计蓝图
│
├── lessons/           # 每周/每单元的教学内容 (战术执行)
│   └── week-01/
│       ├── story.md     # (Architect/用户维护) 本周教学任务与目标
│       ├── lesson-plan.md # (Architect 维护) 详细教案
│       └── slides.md      # (Dev 输出) Marpit 幻灯片
│
├── assignments/       # 作业产出物
│   └── homework-01.md
│
├── exams/             # 试卷产出物
│   └── midterm-a.md
│
└── assets/            # (用户输入) 教师提供的原始素材
    └── week-01/
        ├── video-transcript.txt
        └── reference-images/
```

### **4. 核心任务 (Tasks) 与机制**

#### **4.1. 旧项目升级任务**

- **`task-file:`** `upgrade-legacy-project.md`
    
- **`owner:`** `Project Migrator` (一个特殊的、在检测到旧项目时激活的智能体)
    
- **`process:`**
    
    1. 扫描当前项目文件夹结构。
        
    2. 若未发现 `/docs/brief.md` 等标志性文件，则激活。
        
    3. 分析现有 `.md` 文件，向用户提出一个重组和重命名的建议计划。
        
    4. 在用户确认后，创建备份文件夹并执行迁移。
        

#### **4.2. 可扩展评估设计任务**

- **`task-file:`** `design-scalable-assignment.md`
    
- **`owner:`** `教学设计师 (Architect)`
    
- **`process:`**
    
    1. 接收作业主题和 GDD/PRD 中的相关要求。
        
    2. 分析作业类型（如：影像、游戏、设计稿）。
        
    3. **为复杂作业提供“降维提交”选项**，并生成明确的提交内容要求（如截图数量、视频时长、关键元素）。
        
    4. 生成结构化的、易于批量评分的 `rubrics.md`。
        

### **5. 检查清单 (Checklists)**

#### **5.1. 教学一致性检查清单**

- **`checklist-file:`** `consistency-check.yaml`
    
- **`trigger:`** 由 `教学设计师` 在完成 `lesson-plan.md` 后自动执行。
    
- **`items:`**
    
    - `[ ]` `lesson-plan` 中的所有教学活动是否都直接服务于 `story.md` 的教学目标？
        
    - `[ ]` `lesson-plan` 中规划的时间分配是否合理？
        
    - `[ ]` 关联的 `rubrics.md` 中的评分项是否能有效衡量 `story.md` 中定义的学生能力？
        
    - `[ ]` 是否存在与上游 `prd.md` 或 `syllabus.md` 的明显冲突？
        
- **`result:`** 如有任何一项检查不通过，必须向用户报告并请求决策。
    

### **6. 团队配置与工作流**

- **`team-config-file:`** `team-education.yaml`
    
- **`description:`** 定义了“教育家工具箱”团队的构成和协作流程。
    
- **`workflow:`**
    
    1. **Handoff: User -> PM:** 用户完成 `brief.md` 后，`pm` 接收并开始规划。
        
    2. **Handoff: PM -> Architect:** `pm` 完成 `prd.md` 后，`architect` 接收并开始教学设计。
        
    3. **Handoff: Architect -> Dev:** `architect` 完成 `lesson-plan.md` 后，`dev` 接收并开始内容创作。
  
  ### **7. RooCode 集成架构**
  
  #### **7.1 教育角色选择器设计**
  
  基于项目现有的 `.roomodes` 配置模式，我们创建了 `.roomodes-education` 配置文件，专门用于教育智能体角色管理：
  
  **配置文件结构:**
  ```
  .roocode-education
  ├── customModes (教育智能体角色定义)
  ├── roleSelector (角色选择器配置)
  ├── workflows (教育工作流定义)
  ├── educationalFrameworks (教育理论框架)
  ├── integration (与BMad集成配置)
  └── ui (用户界面配置)
  ```
  
  **角色映射机制:**
  - **教育规划师 (edu-planner)** → 对应 BMad PM 角色，专注于教育理论应用
  - **教学设计师 (edu-designer)** → 对应 BMad Architect 角色，运用教学设计理论
  - **内容创作者 (edu-creator)** → 对应 BMad Dev 角色，遵循多媒体学习理论
  - **教育分析师 (edu-analyst)** → 对应 BMad Analyst 角色，专注教育数据分析
  - **教育技术专家 (edu-tech)** → 对应 BMad Dev 角色，解决教育技术问题
  - **教育项目经理 (edu-pm)** → 对应 BMad PM 角色，管理教育项目协调
  
  #### **7.2 与现有 BMad 框架集成**
  
  **兼容性设计原则:**
  1. **非侵入式集成:** 保持现有 `.roomodes` 和 `.bmad-core` 配置不变
  2. **扩展性支持:** 通过 `.roomodes-education` 提供额外的教育角色选项
  3. **工作流衔接:** 教育角色与 BMad 角色可以协同完成教育工作流
  4. **配置共享:** 共享 `team-education.yaml` 中的项目配置和理论框架
  
  **集成实现方式:**
  - **角色选择:** 用户可通过 CLI 或 RooCode 界面选择教育角色
  - **上下文保持:** 切换角色时保持项目上下文和文档状态
  - **任务交接:** 支持教育角色与 BMad 角色间的任务交接
  - **质量保证:** 继承现有的冲突检测和质量检查机制
  
  #### **7.3 教育理论框架支持**
  
  基于项目中已有的教育理论应用，RooCode 集成将强化以下理论框架的支持：
  
  **已集成的理论框架:**
  - **成果导向教育 (OBE):** 通过 `course-planner.md` 实现，确保学习目标的具体性和可衡量性
  - **布鲁姆认知分类学:** 在 `prd.md` 生成过程中应用，构建分层认知目标
  - **加涅九段教学法:** 在 `instructional-designer.md` 中体现，指导教学流程设计
  - **建构主义学习理论:** 融入教学活动和评估设计中
  - **多媒体学习认知理论:** 由 `content-creator.md` 遵循，优化课件信息呈现
  
  **理论应用验证:**
  - **自动检查:** 基于 `consistency-check.yaml` 验证理论应用正确性
  - **冲突识别:** 检测不同理论间的潜在冲突
  - **建议提供:** 基于理论框架提供优化建议
  
  #### **7.4 CLI 工具扩展**
  
  基于现有的 `educators-toolkit.js` CLI 实现，添加 RooCode 集成功能：
  
  **新增命令支持:**
  ```bash
  # 角色选择与管理
  educators-toolkit select-role          # 交互式角色选择
  educators-toolkit show-roles           # 显示可用教育角色
  educators-toolkit switch-role <role>   # 切换到指定角色
  
  # 工作流集成
  educators-toolkit show-workflows       # 显示教育工作流选项
  educators-toolkit run-workflow <name>  # 执行指定工作流
  
  # RooCode 集成状态
  educators-toolkit roocode-status       # 显示 RooCode 集成状态
  educators-toolkit validate-integration # 验证集成配置正确性
  ```
  
  **集成实现特点:**
  - **向后兼容:** 保持所有现有 CLI 命令功能不变
  - **渐进增强:** 通过额外命令提供 RooCode 集成功能
  - **配置灵活:** 支持通过配置文件启用/禁用 RooCode 功能
  - **错误处理:** 提供详细的错误信息和解决建议
  
  ### **8. 部署与配置**
  
  #### **8.1 安装与设置**
  
  **自动配置流程:**
  1. **项目初始化:** `educators-toolkit init` 自动创建基础结构
  2. **角色配置:** 可选择性创建 `.roomodes-education` 配置文件
  3. **BMad 集成:** 检测并适配现有的 `.bmad-core` 配置
  4. **验证检查:** 自动验证集成配置的正确性和完整性
  
  **手动配置选项:**
  - **角色定制:** 用户可自定义教育角色的具体行为
  - **理论偏好:** 选择偏好的教育理论框架组合
  - **工作流调整:** 根据具体需求调整工作流程
  - **界面配置:** 个性化角色选择器的外观和行为
  
  #### **8.2 使用模式**
  
  **独立使用模式:**
  - 仅使用教育角色完成教育特定任务
  - 适合专注于教学设计的教育工作者
  
  **混合使用模式:**
  - 结合使用教育角色和 BMad 角色
  - 适合需要全面项目管理的教育技术项目
  
  **团队协作模式:**
  - 多用户协同，各自使用适合的专业角色
  - 支持角色间的任务分配和进度跟踪
  
  ### **9. 质量保证**
  
  #### **9.1 测试策略**
  
  **集成测试:**
  - 验证教育角色与 BMad 角色的协同工作
  - 测试角色切换的上下文保持能力
  - 验证理论框架应用的正确性
  
  **性能测试:**
  - 测试角色切换的响应时间
  - 验证大项目下的系统性能
  - 测试多角色协作的效率
  
  **用户体验测试:**
  - 评估角色选择的易用性
  - 测试工作流引导的清晰度
  - 收集用户满意度反馈
  
  #### **9.2 监控与维护**
  
  **运行监控:**
  - 跟踪角色使用频率和模式
  - 监控集成点的性能和稳定性
  - 记录用户行为和偏好数据
  
  **持续优化:**
  - 基于使用数据优化角色推荐算法
  - 根据用户反馈改进界面设计
  - 持续更新教育理论框架支持
  
  ### **10. 总结**
  
  RooCode 集成架构基于现有的 `.roomodes` 配置模式和 BMad 框架，通过 `.roomodes-education` 配置文件为教育家工具箱提供了专业的教育智能体角色选择功能。这一设计保持了与现有系统的完全兼容性，同时扩展了教育专业化的能力，为教育工作者提供了更加精准和高效的智能化支持。
  
  通过角色映射、理论框架集成和 CLI 扩展，系统实现了教育角色与 BMad 角色的无缝协作，支持从课程规划到内容生成的完整教育工作流。这一架构不仅提升了教育工作的专业性和效率，还为教育技术的创新发展提供了坚实的技术基础。
        

这份架构文档为我们的 `expansion pack` 提供了坚实的技术和理论基础。它确保了智能体不仅功能强大，而且其行为有据可循、流程清晰、质量可控。