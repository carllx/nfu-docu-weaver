# **3. 详细架构设计 (Detailed Architecture)**

## **3.1 Obsidian Vault 目录结构**

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
│   ├── architecture.md           # 本架构文档 v3.4
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

## **3.2 核心数据与文件规范**

### **A. 标准化笔记属性 (YAML Frontmatter)**

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

### **B. `00_RESOURCE_DASHBOARD.md` (教师仪表盘)**

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
        

## **3.3 核心内容模板 (附完整初始代码)**

### **A. `TPL_Weekly_Unit.md` (周度单元模板)**

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

### **B. `TPL_Marpit_Slide.md` (幻灯片模板)**

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

### **C. `TPL_Story.md` (敏捷故事模板)**

由SM代理使用的、用于创建每周生产任务的标准化模板。**必须**从`prd.md`和本`architecture.md`中提取相关上下文。

## **3.4 教学内容整合规范**

### **A. 资源分类与整合策略**

所有教学内容必须按照以下四层结构进行整合：

1. **理论基础层 (Foundation Layer)**
   - 课程理念与定位
   - UI/UX核心概念
   - 设计理论基础
   - 工具功能定位

2. **技术操作层 (Technical Layer)**
   - 工具界面操作
   - 基本功能使用
   - 画框与组区别
   - 字体、形状等具体技巧

3. **实践应用层 (Practice Layer)**
   - 项目案例分析
   - 操作步骤指导
   - 用户画像应用
   - 实际项目制作

4. **进阶拓展层 (Advanced Layer)**
   - 版本差异说明
   - 认证信息获取
   - 行业发展趋势
   - 最佳实践分享

### **B. 资源引用标准化格式**

教学内容中必须使用以下标准化引用格式：

```markdown
- **核心概念引用**: `(来源: [[文件名]])`
- **技术细节引用**: `(参考: [[文件名#章节]])`
- **实践步骤引用**: `(操作指南: [[文件名]])`
- **理论基础引用**: `(理论依据: [[文件名]])`
- **扩展知识引用**: `(拓展阅读: [[文件名]])`
```

### **C. 质量控制标准**

1. **完整性要求**
   - 每个CSV列出的资源至少被引用1次
   - 核心资源需深度整合，提取关键价值
   - 教学逻辑连贯，从理论到实践

2. **准确性要求**
   - 所有引用指向正确的源文件和章节
   - 技术细节准确无误
   - 概念解释符合专业标准

3. **实用性要求**
   - 教学内容可直接用于备课
   - 操作步骤具体可行
   - 包含常见问题和解决方案

### **D. 内容组织框架**

```markdown
# Week XX: 主题名称

## 1. 本周目标与验收标准
[基于PRD定义的清晰目标]

## 2. 理论基础
[整合课程理念、设计理论、UI/UX概念]

## 3. 核心概念详解
[整合工具功能、技术操作、具体技巧]

## 4. 实践环节指引
[整合项目案例、操作步骤、实际应用]

## 5. 学习资源与参考
[整合扩展知识、版本差异、认证信息]

## 6. 常见问题与解决方案
[基于教学经验整理的问题解答]
```

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
