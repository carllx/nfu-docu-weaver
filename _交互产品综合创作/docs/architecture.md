# 架构文档：《交互产品综合创作》课程知识库

**版本: 4.4 (流程对齐最终版)**

**日期: 2025-09-02**

**架构师 (Architect): Winston**

## **1. 简介 (Introduction)**

本架构文档依据产品需求文档 `prd_v3.2.md` 进行设计，旨在为《交互产品综合创作》课程构建一个专供教师使用的、基于Obsidian的、支持V10版自动化工作流的知识库系统。

此架构的核心设计哲学是**“动态策展”**与**“人机分离”**：

- **人类友好**: 为教师提供一个直观、低维护、高自由度的教学资源管理环境。
    
- **AI友好**: 为BMAD智能体提供清晰、结构化、普遍兼容的数据输入，以确保自动化流程的可靠性和产出质量。
    

本文档将定义知识库的目录结构、核心数据模板、以及关键文件的技术规范。

## **2. 高层架构 (High-Level Architecture)**

系统整体架构由以下几个核心部分构成，确保了职责分离和流程顺畅：

1. **分片式核心文档层 (`/docs/prd/`, `/docs/architecture/`)**: [**核心升级**] 将原有的单体`prd.md`和`architecture.md`拆分为独立的、可被AI精确引用的内容片段。

2. **模板与规范层 (`/templates/`)**: [**核心升级**] 成为所有模板的 **唯一事实来源 (Single Source of Truth)**，确保了模板的权威性和易维护性。

3. **敏捷执行层 (`/docs/stories/`)**: (维持不变) 以 **上下文自包含的Story文档** 为核心，将每周的生产任务具体化为可独立执行的“任务契约”。

4. **原始素材层 (`/src/`)**: (维持不变) 所有教学素材的唯一入口和存储区。

5. **动态管理层 (`00_RESOURCE_DASHBOARD.md`)**: (维持不变) 教师的可视化资源管理仪表盘。

6. **数据交换层 (`/export/`)**: (维持不变) 通过导出的`.csv`文件，为AI代理提供标准化的任务指令。

7. **内容生产层 (`/content/`)**: (维持不变) 存放由AI生成的教学单元草稿和最终幻灯片。

## **3. 详细架构设计 (Detailed Architecture)**

### **3.1 Obsidian Vault 目录结构**

本结构采纳了**以课程章节（Epic）为核心** 的组织方式，以确保目录结构直接反映教学逻辑，同时为AI代理提供清晰的扫描边界。采纳了 **分片式** 的组织方式，以实现内容的原子化管理和AI任务的精确聚焦。

```
/课程知识库/
├── 00_RESOURCE_DASHBOARD.md      # [核心] 教师的动态管理仪表盘
├── docs/                         # 核心项目文档
│   ├── prd/
│   │   ├── epic_01_2d_plane/
│   │   │   ├── week_01_ac.md
│   │   │   └── ...
│   │   ├── prd_overview.md
│   │   └── ...
│   ├── architecture/
│   │   ├── 01_overview.md
│   │   ├── 02_directory_structure.md
│   │   ├── 03_data_specs.md
│   │   └── ...
│   ├── prd.md                    # 产品需求文档 v3.2
│   ├── architecture.md           # 本架构文档 v3.3
│   └── sop.md                    # [核心] 工作流操作手册 v10.1
├── src/                          # 原始素材层
│   ├── 00_INBOX/                 # [缓冲区] 所有新笔记的唯一入口
│   ├── epic_01_2d_plane/         # Epic 1: 对应第1-7周Figma内容
│   │   ├── week_01_figma_basics/
│   │   └── ... 
│   ├── epic_02_3d_space/         # Epic 2: 对应第8-10周Spline内容
│   │   └── ...
│   ├── epic_03_webxr/            # Epic 3: 对应第11-15周WebXR内容
│   │   └── ...
│   ├── shared_assets/            # 跨章节、周次的通用资源 (如图标)
│   └── _IGNORE_DO_NOT_PROCESS/   # [AI禁区] AI代理禁止读取或操作此目录
├── content/                      # 内容生产层
│   ├── weekly-units/             # AI生成的周度教学单元
│   └── slides/                   # AI生成的最终幻灯片
├── stories/                      # 敏捷执行层 - 存放所有Story文档
├── templates/                    # 模板与规范层
│   ├── TPL_Weekly_Unit.md
│   ├── TPL_Marpit_Slide.md
│   └── TPL_Story.md              # 标准Story模板
└── tools/                          # [新增] 核心工具集目录
    └── frontmatter_tool.py         # [新增] 标准化YAML属性处理工具

```

### **3.2 核心数据与文件规范**

#### **A. 标准化笔记属性 (YAML Frontmatter)**

所有位于`/src/`目录下的`.md`文件**必须**包含以下YAML属性头。此规范由**策展分析师(Mary)**在“资源策展”流程中强制执行。

```
---
course_name: "交互产品综合创作" # [新增] 用于区分不同课程的笔记
week_num: 1
epic_num: 1
sequence: 1
type: "理论视频"
status: "ready"
tldr: "本笔记的核心摘要，由策展分析师生成。"
---
```

#### **B. `00_RESOURCE_DASHBOARD.md` (教师仪表盘)**

该文件是教师与知识库交互的核心界面。它**必须**包含一个**可复制粘贴的完整代码实现**，使用Obsidian Base插件来管理和展示课程资源，以确保开箱即用。

- **功能**:
    1.  **策展收件箱**: 自动列出`src`目录中所有尚未分配`course_name`的待处理新笔记。
    2.  **按周次筛选**: 为特定周次（如第一周）生成一个包含所有资源的表格视图。
    3.  **课程资源库**: 以卡片形式展示所有已分类的课程资源。

- **代码实现 (Obsidian Base)**:
    
    ```yaml
    formulas:
      simplified_path: file.path.replace("_交互产品综合创作", "")
    properties:
      note.course_name:
        displayName: 课程
      note.week_num:
        displayName: 周次
      note.epic_num:
        displayName: 章节
      note.status:
        displayName: 状态
      file.name:
        displayName: 文件名
      file.mtime:
        displayName: 修改时间
      formula.simplified_path:
        displayName: 简化路径
    views:
      - type: table
        name: 🗂️ 按课程筛选
        filters:
          and:
            - file.inFolder("_交互产品综合创作/src/")
            - course_name == "交互产品综合创作"
            - week_num == 1
        order:
          - epic_num
          - week_num
          - sequence
          - file.name
          - TLDR
          - formula.simplified_path
        sort:
          - property: sequence
            direction: ASC
          - property: simplified_path
            direction: DESC
          - property: file.path
            direction: DESC
        columnSize:
          note.epic_num: 46
          note.week_num: 38
          note.sequence: 37
          file.name: 167
          note.TLDR: 206
      - type: table
        name: 📋 待处理文件
        filters:
          and:
            - file.inFolder("_交互产品综合创作/src/")
            - not:
                - course_name != null
        order:
          - file.mtime
          - file.name
        sort:
          - property: file.mtime
            direction: ASC
        limit: 50
      - type: cards
        name: 📚 课程资源库
        filters:
          and:
            - file.inFolder("_交互产品综合创作/src/")
            - course_name != null
        order:
          - course_name
          - epic_num
          - week_num
          - file.name
        sort:
          - property: course_name
            direction: ASC
          - property: epic_num
            direction: ASC
          - property: week_num
            direction: ASC
    ```
        

### **3.3 核心内容模板 (附完整初始代码)**

#### **A. `TPL_Weekly_Unit.md` (周度单元模板)**

由“内容生产分析师”填充的结构化草稿模板。

```markdown
---
week_num: {{week_num}}
epic_num: {{epic_num}}
title: "{{week_title}}"
prd_version: {{prd_version}}
status: "draft" 
context_checksum: "{{csv_file_version}}"
---
原始格式说明：此YAML模板代表一个Markdown文档结构
document_type: "markdown_template"
original_format: "markdown"

文档模板内容
template:
  title: 
    level: 1
    content: "Week {{week_num}}: {{week_title}}"
  
  sections:
    - title:
        level: 2
        content: "1. 本周目标与验收标准"
      content: "[由分析师根据Story中注入的AC进行转述和整理]"
    
    - title:
        level: 2
        content: "2. 核心概念详解"
      content: "[由分析师根据所有源文件全文综合撰写，并满足Story中定义的【强制引用AC】、【精华摘录AC】等标准]"
    
    - title:
        level: 2
        content: "3. 实践环节指引"
      content: "[由分析师根据所有源文件全文综合撰写，并满足Story中定义的【强制引用AC】等标准]"
  
  separator:
    type: "horizontal_rule"
    content: "---"
  
  handoff_protocol:
    title:
      level: 3
      style: "bold"
      content: "Handoff Protocol v1.0"
    
    items:
      - type: "list_item"
        content: "**本阶段任务已完成**: `Week_XX.md` 草稿已生成。"
      - type: "list_item"
        content: "**下一步状态**: **等待PO审核**"
      - type: "list_item"
        content: "**下一步执行者**: **Sarah (Product Owner)**"
      - type: "list_item"
        content: "**教师指令**: > ..."

元数据信息
metadata:
  template_version: "1.0"
  purpose: "避免md-tree解析markdown代码块中标题的混乱"
  usage_note: "agents处理此YAML时应理解其代表的是Markdown文档结构"

```

#### **B. `TPL_Marpit_Slide.md` (幻灯片模板)**

由“开发者”使用的最终产出物模板。

```markdown
---
marp: true
theme: NFUPPT
---
	
**Week {{week_num}}: {{week_title}}**

---

本周目标
> 根据 `Week_XX.md` 的内容生成

---

<!-- 更多幻灯片页面 -->
```

#### **C. `TPL_Story.md` (敏捷故事模板)**

由SM代理使用的、用于创建每周生产任务的标准化模板。**必须**从`prd.md`和本`architecture.md`中提取相关上下文。

```markdown
---
status: "Draft"
assignee: "{{assignee_name}}"
epic: "{{epic_num}}"
week: "{{week_num}}"
---

原始格式说明：此YAML模板代表一个Markdown Story文档结构
document_type: "story_template"
original_format: "markdown"

Story文档模板内容
template:
  title:
    level: 1
    content: "Story: Week {{week_num}} - 内容生产Story"
  
  sections:
    - title:
        level: 2
        content: "1. 用户故事 (User Story)"
      content: |
        **作为** 内容生产分析师(Mary)，
        **我希望** 深度整合Week {{week_num}}的所有教学资源，
        **以便** 创建一份 **内容详尽、包含引用** 的`Week_{{week_num_padded}}.md`教学单元草稿。

    - title:
        level: 2
        content: "2. 验收标准 (Acceptance Criteria)"
      subsections:
        - title:
            level: 3
            content: "A. PRD验收标准"
          content: |
            > **[SOP v12.0 核心要求]**: 此处由SM代理**注入**对应周次AC分片文件 (`week_XX_ac.md`) 的**完整文本内容**，而非链接。

        - title:
            level: 3
            content: "B. 内容深度与引用验收标准"
          items:
            - number: 4
              type: "acceptance_criteria"
              label: "【强制引用AC】"
              content: "在生成的`Week_XX.md`中，每一个独立知识点（如定义、步骤、关键解释）的结尾，**必须**附带 `(来源: [[源文件名]])` 格式的引用。"
            
            - number: 5
              type: "acceptance_criteria"
              label: "【精华摘录AC】"
              content: "必须从指定的关键源文件中，**直接引用**原文中的关键段落，以保证核心细节不丢失。"
            
            - number: 6
              type: "acceptance_criteria"
              label: "【内容完整性AC】"
              content: "`Week_XX.md` 的内容必须覆盖PRD中提到的所有"关键概念"，并为每个概念提供**定义、操作步骤和常见陷阱**。"

    - title:
        level: 2
        content: "3. 开发者笔记 (Developer Notes)"
      content:
        core_instruction: |
          **核心指令**: 您的任务不仅仅是生成大纲。请将自己定位为一名教学设计师的助手，目标是创建一份**可以直接用于备课的、信息丰富的底稿**。请严格遵循上述所有验收标准，特别是关于**内容深度和引用**的要求。
        
        architecture_specs:
          title: "**相关架构规范**:"
          items:
            - label: "**目录结构**"
              content: "新产出物必须遵循 `/content/` 下的分类结构。"
            - label: "**数据规范**"
              content: "笔记处理必须遵循 `course_name` 等YAML属性标准。"
        
        sop_processes:
          title: "**相关SOP流程**:"
          items:
            - label: "**Handoff协议**"
              content: "所有产出物末尾必须包含标准Handoff协议。"

    - title:
        level: 2
        content: "4. 任务清单 (Tasks / Subtasks)"
      tasks:
        - status: "unchecked"
          content: "任务一：阅读并分析所有源文件"
        - status: "unchecked"
          content: "任务二：根据模板撰写Week_{{week_num_padded}}.md草稿"
        - status: "unchecked"
          content: "任务三：在草稿中包含本周所有核心概念和实践指引"
        - status: "unchecked"
          content: "任务四：更新Story状态和Handoff协议"

    - title:
        level: 2
        content: "5. 执行记录 (Execution Record)"
      note: "本部分由执行者在任务完成后填写。"
      fields:
        - label: "**执行者**"
          content: ""
        - label: "**产出物链接**"
          content: ""
        - label: "**完成时间**"
          content: ""

    - title:
        level: 2
        content: "6. QA结果 (QA Results)"
      note: "本部分由PO (Sarah)在审核后填写。"
      fields:
        - label: "**审核结果**"
          content: "(通过/打回)"
        - label: "**审核意见**"
          content: ""

  separator:
    type: "horizontal_rule"
    content: "---"

  handoff_protocol:
    title:
      level: 3
      style: "bold"
      content: "Handoff Protocol v1.0"
    items:
      - type: "list_item"
        content: "**本阶段任务已完成**: Story已创建/执行/审核"
      - type: "list_item"
        content: "**下一步状态**: "
      - type: "list_item"
        content: "**下一步执行者**: "
      - type: "list_item"
        content: "**教师指令**: > ..."

模板变量定义
variables:
  week_num: "周次编号 (如: 1)"
  week_num_padded: "补零的周次编号 (如: 01)"

元数据信息
metadata:
  template_version: "1.0"
  template_type: "story_template"
  purpose: "内容生产Story模板，避免md-tree解析markdown代码块中标题的混乱"
  usage_note: "agents处理此YAML时应理解其代表的是Markdown Story文档结构"
  related_templates:
    - "week_content_template.yaml"


```

## **4. 架构决策与理由 (Architectural Decisions & Rationale)**

- **决策一：【重构】采纳以教学逻辑（Epic）为核心的目录结构**
    
    - **理由**: 使物理目录结构与 `prd.md` 中的教学大纲完全对齐，极大地提升了人类和AI对知识库内容的可理解性。同时，通过 `shared_assets` 和 `_IGNORE_DO_NOT_PROCESS` 文件夹，实现了关注点分离和安全隔离。
        
- **决策二：保留 `00_INBOX` 作为强制性的唯一入口**
    
    - **理由**: 为AI的“资源策展”任务提供了一个确定的、有限的扫描范围。这保证了策展流程的高性能和100%的可靠性，避免了全局扫描带来的性能瓶颈和漏处理风险。同时，通过优化的SOP，教师在AI完成策展后仍保有对文件位置的完全控制权。
        
- **决策三：在YAML元数据中增加 `course_name` 属性**
    
    - **理由**: 这是一个关键的**未来适应性 (Future-Proofing)**决策。它确保了当前课程的笔记资产可以在未来被轻松地重用、迁移或与其他课程的知识库集成，而不会发生数据混淆。
        
- **决策四：采用Bases/Dataview导出CSV作为人机接口**
    
    - **理由**: (维持不变) 完美解决了“外部AI无法直接与Obsidian插件交互”的技术壁垒。CSV是通用、稳定、Token高效的数据交换格式。
        
- **决策五：在模板和所有交付物中强制嵌入“Handoff协议”**
    
    - **理由**: (维持不变) 将隐性的工作流步骤显性化、标准化，为教师提供清晰的操作指引。
        
- **决策六：引入Story文档作为核心执行单元**
    
    - **理由**: (维持不变) 将高层的产品需求（PRD）与底层的执行任务解耦，提高了AI代理执行任务的精确性和可靠性。
        
- **决策七：【新增】引入标准化工具链 (Standardized Toolchain)**
	- **理由**: 将重复性的、规则明确的任务（如添加YAML frontmatter）封装为独立的、可执行的脚本工具 (`frontmatter_tool.py`)，是提升自动化流程稳定性的关键。它将AI的工作模式从较为模糊的“理解并执行自然语言指令”转变为精确的“调用拥有清晰输入输出的工具”，极大地降低了任务失败率和结果的不可预测性。
## **5. 实施与下一步 (Implementation & Next Steps)**

本架构文档为项目的技术实现提供了明确的蓝图。

1. **产品负责人 (PO) Sarah**: 负责监督本架构的实施，确保所有文件和目录的创建都遵循此规范。
    
2. **移交SOP最终确认**: 本架构文档将作为核心输入，用于对**《工作流操作手册》(SOP)**进行最终的审查和更新，确保SOP中的所有流程细节与本架构完全对齐。
    
3. **初始化Vault**: 根据本架构，在Obsidian中创建所有必要的文件夹和模板文件。
    

### **Handoff Protocol v1.0**

- **本阶段任务已完成**: `architecture.md` v3.3 已更新。
    
- **产出物**: `architecture.md`
    
- **下一步状态**: **等待SOP最终版确认 (Pending Final SOP Confirmation)**
    
- **下一步执行者**: **John (Product Manager)**
    
- **教师指令**:
    
    > 请调用 **PM (John)**，要求他基于本架构文档的最终版 (`v3.3`)，对 `sop.md` 进行最终的审查和更新，确保SOP中的所有流程细节与本架构完全对齐。