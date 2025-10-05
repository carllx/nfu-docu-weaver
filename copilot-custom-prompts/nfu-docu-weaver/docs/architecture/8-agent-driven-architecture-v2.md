# 8. Agent-Driven Architecture v2.0 (Agent 主导架构)

**版本**: v2.0  
**更新日期**: 2025-10-05  
**状态**: 🏗️ Architecture Design  
**架构师**: @architect.mdc

---

## 📋 目录

- [8.1 架构重新设计的动机](#81-架构重新设计的动机)
- [8.2 核心设计理念](#82-核心设计理念)
- [8.3 课程数据组织结构](#83-课程数据组织结构)
- [8.4 Agent 主导的工作流](#84-agent-主导的工作流)
- [8.5 工具注册与发现机制](#85-工具注册与发现机制)
- [8.6 完整架构图](#86-完整架构图)
- [8.7 实施路线图](#87-实施路线图)

---

## 8.1 架构重新设计的动机

### 8.1.1 当前架构的问题

**问题 1: Agent 定位不清晰**
- ❌ 当前 Agent 只是"前端交互层"，缺乏主导权
- ❌ Agent 不知道如何找到和使用工具
- ❌ 工作流程固化在状态机中，缺乏灵活性

**问题 2: 数据组织不合理**
- ❌ 所有课程数据混在一个目录 (`test_data/`)
- ❌ 无法区分不同课程、不同周次的数据
- ❌ 缺少课程元数据和上下文信息

**问题 3: 功能范围受限**
- ❌ 只能生成教案，无法生成课程大纲
- ❌ 无法从用户提供的内容（MD/DOC）生成数据
- ❌ 缺少 AI 数据生成能力

**问题 4: 工具发现困难**
- ❌ Agent 需要硬编码工具调用
- ❌ 新增工具需要修改 Agent 指令
- ❌ 缺少工具元数据和使用说明

### 8.1.2 新架构的目标

✅ **Agent 成为真正的主导者** - 自主决策、自主调用工具  
✅ **以课程为中心的数据组织** - 清晰的目录结构  
✅ **工具自动发现** - Agent 可以自主找到需要的工具  
✅ **完整的功能覆盖** - 从大纲到教案的全流程  
✅ **可扩展性** - 易于添加新工具和新功能

---

## 8.2 核心设计理念

### 8.2.1 Agent-First Design (Agent 优先设计)

```
传统架构:
  用户 → Agent → 固定流程 → 工具

新架构:
  用户 → Agent (智能决策) → 动态选择工具 → 执行任务
```

**核心原则**:
1. **Agent 拥有完整的决策权** - 根据用户需求自主选择工作流
2. **工具是 Agent 的能力扩展** - 不是固定的调用链
3. **Schema 是 Agent 的知识核心** - 理解数据结构和约束

### 8.2.2 Course-Centric Organization (以课程为中心)

```
每个课程是一个独立的工作空间:
  - 有自己的大纲、教案、模板
  - 有清晰的周次组织
  - 有完整的元数据
```

### 8.2.3 Tool Registry Pattern (工具注册模式)

```
工具通过元数据自我描述:
  - 工具名称和用途
  - 输入输出规范
  - 使用示例
  - Agent 可以自动发现和调用
```

---

## 8.3 课程数据组织结构

### 8.3.1 新的目录结构

```
nfu-docu-weaver/
├── courses/                          # 📚 课程工作空间（新增）
│   ├── course-001-typography/        # 课程 1: 字体设计
│   │   ├── course.yml                # 课程元数据
│   │   ├── outline/                  # 课程大纲
│   │   │   ├── outline.md            # 原始大纲（用户提供）
│   │   │   ├── outline.yml           # 结构化大纲数据
│   │   │   └── outline.docx          # 最终大纲文档
│   │   ├── cover/                    # 教案首页
│   │   │   ├── cover.yml             # 首页数据
│   │   │   └── cover.docx            # 首页文档
│   │   ├── lessons/                  # 教案数据（按周次）
│   │   │   ├── week-01.yml           # 第 1 周教案数据
│   │   │   ├── week-02.yml           # 第 2 周教案数据
│   │   │   ├── week-03.yml           # 第 3 周教案数据
│   │   │   └── ...
│   │   ├── output/                   # 生成的文档
│   │   │   ├── outline.docx          # 课程大纲
│   │   │   ├── cover.docx            # 教案首页
│   │   │   ├── week-01.docx          # 第 1 周教案
│   │   │   ├── week-02.docx          # 第 2 周教案
│   │   │   └── ...
│   │   └── templates/                # 课程专用模板（可选）
│   │       ├── outline-template.docx
│   │       ├── cover-template.docx
│   │       └── lesson-template.docx
│   │
│   ├── course-002-color-theory/      # 课程 2: 色彩理论
│   │   └── ...（同上结构）
│   │
│   └── .course-template/             # 课程模板（用于创建新课程）
│       └── ...
│
├── templates/                        # 🎨 全局模板库
│   ├── outline/                      # 大纲模板
│   │   └── default-outline.docx
│   ├── cover/                        # 首页模板
│   │   └── default-cover.docx
│   └── lesson/                       # 教案模板
│       └── default-lesson.docx
│
├── schemas/                          # 📋 数据契约（Schema）
│   ├── course_schema.yml             # 课程元数据 Schema（新增）
│   ├── outline_schema.yml            # 大纲数据 Schema（新增）
│   ├── cover_schema.yml              # 首页数据 Schema（新增）
│   └── lesson_schema.yml             # 教案数据 Schema（重命名）
│
├── tools/                            # 🔧 工具库（新增）
│   ├── registry.yml                  # 工具注册表（新增）
│   ├── doc_generator.py              # 文档生成工具（重构）
│   ├── outline_generator.py          # 大纲生成工具（新增）
│   ├── data_converter.py             # 数据转换工具（新增）
│   ├── course_manager.py             # 课程管理工具（新增）
│   └── validator.py                  # 数据验证工具（重构）
│
├── agents/                           # 🤖 Agent 指令集
│   ├── lesson-weaver-v2.md           # Lesson Weaver Agent v2（重写）
│   └── tool-discovery.md             # 工具发现指令（新增）
│
├── docs/                             # 📚 项目文档
└── tests/                            # 🧪 测试套件
```

### 8.3.2 课程元数据 (course.yml)

每个课程都有一个 `course.yml` 文件，描述课程的基本信息：

```yaml
# courses/course-001-typography/course.yml

course_id: "course-001"
course_name: "字体设计基础"
course_code: "ART-101"
instructor: "张三"
semester: "2024-2025 第一学期"
total_weeks: 16

# 课程状态
status:
  outline_completed: true        # 大纲是否完成
  cover_completed: true          # 首页是否完成
  lessons_completed: 8           # 已完成的教案数
  lessons_total: 16              # 总教案数

# 模板配置
templates:
  outline: "templates/outline/default-outline.docx"
  cover: "templates/cover/default-cover.docx"
  lesson: "templates/lesson/default-lesson.docx"

# 元数据
created_at: "2024-10-01"
updated_at: "2024-10-05"
version: "1.0"
```

### 8.3.3 数据组织的优势

✅ **清晰的课程隔离** - 每个课程独立管理  
✅ **明确的周次组织** - `week-01.yml`, `week-02.yml` 一目了然  
✅ **完整的上下文** - 课程元数据提供全局信息  
✅ **灵活的模板** - 可以使用全局模板或课程专用模板  
✅ **易于扩展** - 新增课程只需复制模板目录

---

## 8.4 Agent 主导的工作流

### 8.4.1 新的工作流设计

**核心理念**: Agent 根据用户意图，自主选择执行路径

```
用户输入
    ↓
Agent 理解意图
    ↓
    ├─→ 场景 1: 创建新课程
    │     ↓
    │   调用 course_manager.create_course()
    │     ↓
    │   创建课程目录结构
    │
    ├─→ 场景 2: 生成课程大纲
    │     ↓
    │   调用 outline_generator.from_content()
    │     ↓
    │   解析用户提供的 MD/DOC → 生成 outline.yml → 生成 outline.docx
    │
    ├─→ 场景 3: 生成教案首页
    │     ↓
    │   读取 outline.yml → 调用 AI 生成 cover.yml → 生成 cover.docx
    │
    ├─→ 场景 4: 生成单次教案
    │     ↓
    │   读取 cover.yml → 调用 AI 生成 week-N.yml → 验证 → 生成 week-N.docx
    │
    └─→ 场景 5: 批量生成教案
          ↓
        循环生成 week-01 到 week-N
          ↓
        汇总报告
```

### 8.4.2 Agent 决策流程

```markdown
## Agent 决策树

**Step 1: 理解用户意图**
- 用户想做什么？
  - 创建新课程？
  - 生成大纲？
  - 生成教案？
  - 验证数据？

**Step 2: 检查前置条件**
- 课程是否存在？
- 大纲是否完成？
- 首页是否完成？
- 需要哪些数据？

**Step 3: 选择工具**
- 查询工具注册表 (tools/registry.yml)
- 找到匹配的工具
- 检查工具的输入要求

**Step 4: 执行任务**
- 调用工具
- 处理结果
- 报告给用户

**Step 5: 后续行动**
- 是否需要继续？
- 是否需要验证？
- 是否需要用户确认？
```

### 8.4.3 示例：生成第 3 周教案

```
用户: "请为字体设计课程生成第 3 周的教案"

Agent 思考:
1. 识别课程: "字体设计" → course-001-typography
2. 检查前置条件:
   - ✅ 课程存在
   - ✅ 大纲已完成
   - ✅ 首页已完成
   - ❌ week-03.yml 不存在
3. 决策: 需要先生成数据，再生成文档
4. 查找工具:
   - AI 数据生成工具: ai_data_generator.py
   - 数据验证工具: validator.py
   - 文档生成工具: doc_generator.py
5. 执行:
   Step 1: 调用 ai_data_generator.generate_lesson_data(
             course_id="course-001",
             week=3,
             context=["outline.yml", "cover.yml", "week-01.yml", "week-02.yml"]
           )
           → 生成 week-03.yml
   
   Step 2: 调用 validator.validate(
             data_file="week-03.yml",
             schema="schemas/lesson_schema.yml"
           )
           → 验证通过 ✅
   
   Step 3: 调用 doc_generator.generate(
             data="week-03.yml",
             template="templates/lesson/default-lesson.docx",
             output="output/week-03.docx"
           )
           → 生成 week-03.docx ✅

6. 报告:
   "✅ 第 3 周教案已生成: courses/course-001-typography/output/week-03.docx"
```

---

## 8.5 工具注册与发现机制

### 8.5.1 工具注册表 (tools/registry.yml)

```yaml
# tools/registry.yml

tools:
  - id: course_manager
    name: "课程管理工具"
    description: "创建、管理课程工作空间"
    script: "tools/course_manager.py"
    capabilities:
      - create_course      # 创建新课程
      - list_courses       # 列出所有课程
      - get_course_info    # 获取课程信息
      - update_course      # 更新课程元数据
    
    functions:
      - name: create_course
        description: "创建新课程工作空间"
        inputs:
          - name: course_name
            type: string
            required: true
            description: "课程名称"
          - name: course_code
            type: string
            required: false
            description: "课程代码"
          - name: instructor
            type: string
            required: false
            description: "授课教师"
        outputs:
          - name: course_id
            type: string
            description: "生成的课程 ID"
          - name: course_path
            type: string
            description: "课程目录路径"
        example: |
          python tools/course_manager.py create \
            --name "字体设计基础" \
            --code "ART-101" \
            --instructor "张三"

  - id: outline_generator
    name: "大纲生成工具"
    description: "从用户提供的内容生成课程大纲"
    script: "tools/outline_generator.py"
    capabilities:
      - from_markdown      # 从 Markdown 生成
      - from_docx          # 从 Word 文档生成
      - from_text          # 从纯文本生成
    
    functions:
      - name: from_markdown
        description: "从 Markdown 文件生成大纲数据"
        inputs:
          - name: source_file
            type: string
            required: true
            description: "Markdown 文件路径"
          - name: course_id
            type: string
            required: true
            description: "课程 ID"
        outputs:
          - name: outline_data
            type: string
            description: "生成的 outline.yml 路径"
          - name: outline_doc
            type: string
            description: "生成的 outline.docx 路径"
        example: |
          python tools/outline_generator.py from-markdown \
            --source user-content.md \
            --course course-001

  - id: doc_generator
    name: "文档生成工具"
    description: "从 YAML 数据生成 Word 文档"
    script: "tools/doc_generator.py"
    capabilities:
      - generate           # 生成单个文档
      - batch_generate     # 批量生成文档
      - validate           # 验证数据
    
    functions:
      - name: generate
        description: "生成单个文档"
        inputs:
          - name: data_file
            type: string
            required: true
            description: "YAML 数据文件"
          - name: template
            type: string
            required: true
            description: "Word 模板文件"
          - name: output
            type: string
            required: true
            description: "输出文件路径"
        outputs:
          - name: success
            type: boolean
            description: "是否成功"
          - name: output_path
            type: string
            description: "生成的文档路径"
        example: |
          python tools/doc_generator.py generate \
            week-01.yml \
            templates/lesson/default-lesson.docx \
            output/week-01.docx

  - id: validator
    name: "数据验证工具"
    description: "基于 Schema 验证 YAML 数据"
    script: "tools/validator.py"
    capabilities:
      - validate_file      # 验证单个文件
      - validate_batch     # 批量验证
    
    functions:
      - name: validate_file
        description: "验证单个数据文件"
        inputs:
          - name: data_file
            type: string
            required: true
            description: "YAML 数据文件"
          - name: schema
            type: string
            required: true
            description: "Schema 文件"
        outputs:
          - name: valid
            type: boolean
            description: "是否通过验证"
          - name: errors
            type: array
            description: "错误列表"
        example: |
          python tools/validator.py validate \
            week-01.yml \
            schemas/lesson_schema.yml

  - id: ai_data_generator
    name: "AI 数据生成工具"
    description: "使用 AI 生成结构化数据"
    script: "tools/ai_data_generator.py"
    capabilities:
      - generate_lesson    # 生成教案数据
      - generate_cover     # 生成首页数据
    
    functions:
      - name: generate_lesson
        description: "生成教案数据"
        inputs:
          - name: course_id
            type: string
            required: true
            description: "课程 ID"
          - name: week
            type: integer
            required: true
            description: "周次"
          - name: context_files
            type: array
            required: false
            description: "上下文文件列表"
        outputs:
          - name: data_file
            type: string
            description: "生成的 YAML 文件路径"
        example: |
          python tools/ai_data_generator.py generate-lesson \
            --course course-001 \
            --week 3 \
            --context outline.yml cover.yml week-01.yml week-02.yml
```

### 8.5.2 Agent 如何发现工具

```markdown
## Agent 工具发现流程

**Step 1: 读取工具注册表**
```python
# Agent 内部逻辑（伪代码）
tools_registry = load_yaml("tools/registry.yml")
```

**Step 2: 根据需求搜索工具**
```python
# 示例：需要创建课程
needed_capability = "create_course"
matching_tools = [
    tool for tool in tools_registry["tools"]
    if needed_capability in tool["capabilities"]
]
# 结果: course_manager
```

**Step 3: 获取工具使用说明**
```python
tool = matching_tools[0]
function = tool["functions"][0]
print(function["description"])
print(function["example"])
```

**Step 4: 构建工具调用命令**
```python
command = f"python {tool['script']} create --name '字体设计' --code 'ART-101'"
```

**Step 5: 执行并处理结果**
```python
result = execute_command(command)
parse_output(result)
```
```

### 8.5.3 工具自我描述的优势

✅ **Agent 无需硬编码** - 动态发现工具  
✅ **易于扩展** - 新增工具只需注册  
✅ **自动生成文档** - 从注册表生成工具手册  
✅ **类型安全** - 输入输出规范明确  
✅ **示例驱动** - 每个工具都有使用示例

---

## 8.6 完整架构图

```
┌─────────────────────────────────────────────────────────────────┐
│                     用户 (User)                                  │
│                                                                   │
│  "请为字体设计课程生成第 3 周的教案"                              │
└────────────────────────────┬────────────────────────────────────┘
                             │
                             ↓
┌─────────────────────────────────────────────────────────────────┐
│              Lesson-Weaver Agent v2.0 (AI Agent)                 │
│                                                                   │
│  ┌──────────────────────────────────────────────────────────┐   │
│  │  核心能力 (Core Capabilities)                             │   │
│  │  1. 意图理解 (Intent Understanding)                       │   │
│  │  2. 工具发现 (Tool Discovery)                             │   │
│  │  3. 决策制定 (Decision Making)                            │   │
│  │  4. 任务编排 (Task Orchestration)                         │   │
│  │  5. 结果验证 (Result Validation)                          │   │
│  └──────────────────────────────────────────────────────────┘   │
│                                                                   │
│  ┌──────────────────────────────────────────────────────────┐   │
│  │  知识库 (Knowledge Base)                                  │   │
│  │  • Schema 定义 (schemas/*.yml)                            │   │
│  │  • 工具注册表 (tools/registry.yml)                        │   │
│  │  • 课程元数据 (courses/*/course.yml)                      │   │
│  └──────────────────────────────────────────────────────────┘   │
└────────────────────────────┬────────────────────────────────────┘
                             │
                             ↓ (查询工具注册表)
┌─────────────────────────────────────────────────────────────────┐
│                  工具注册表 (Tool Registry)                       │
│                    tools/registry.yml                             │
│                                                                   │
│  ┌──────────────┐  ┌──────────────┐  ┌──────────────┐          │
│  │ course_      │  │ outline_     │  │ doc_         │          │
│  │ manager      │  │ generator    │  │ generator    │          │
│  └──────────────┘  └──────────────┘  └──────────────┘          │
│  ┌──────────────┐  ┌──────────────┐                            │
│  │ validator    │  │ ai_data_     │                            │
│  │              │  │ generator    │                            │
│  └──────────────┘  └──────────────┘                            │
└────────────────────────────┬────────────────────────────────────┘
                             │
                             ↓ (调用工具)
┌─────────────────────────────────────────────────────────────────┐
│                      工具层 (Tools Layer)                         │
│                                                                   │
│  ┌──────────────────────────────────────────────────────────┐   │
│  │  course_manager.py                                        │   │
│  │  • create_course()  • list_courses()                      │   │
│  │  • get_course_info()  • update_course()                   │   │
│  └──────────────────────────────────────────────────────────┘   │
│                                                                   │
│  ┌──────────────────────────────────────────────────────────┐   │
│  │  outline_generator.py                                     │   │
│  │  • from_markdown()  • from_docx()  • from_text()          │   │
│  └──────────────────────────────────────────────────────────┘   │
│                                                                   │
│  ┌──────────────────────────────────────────────────────────┐   │
│  │  doc_generator.py (重构自 generate_docs.py)               │   │
│  │  • generate()  • batch_generate()  • validate()           │   │
│  └──────────────────────────────────────────────────────────┘   │
│                                                                   │
│  ┌──────────────────────────────────────────────────────────┐   │
│  │  validator.py                                             │   │
│  │  • validate_file()  • validate_batch()                    │   │
│  └──────────────────────────────────────────────────────────┘   │
│                                                                   │
│  ┌──────────────────────────────────────────────────────────┐   │
│  │  ai_data_generator.py (新增)                              │   │
│  │  • generate_lesson()  • generate_cover()                  │   │
│  └──────────────────────────────────────────────────────────┘   │
└────────────────────────────┬────────────────────────────────────┘
                             │
                             ↓ (读写数据)
┌─────────────────────────────────────────────────────────────────┐
│                    数据层 (Data Layer)                            │
│                                                                   │
│  ┌──────────────────────────────────────────────────────────┐   │
│  │  courses/ (课程工作空间)                                  │   │
│  │    ├── course-001-typography/                             │   │
│  │    │   ├── course.yml          (课程元数据)               │   │
│  │    │   ├── outline/             (大纲)                    │   │
│  │    │   ├── cover/               (首页)                    │   │
│  │    │   ├── lessons/             (教案数据)                │   │
│  │    │   │   ├── week-01.yml                                │   │
│  │    │   │   ├── week-02.yml                                │   │
│  │    │   │   └── week-03.yml      ← 新生成                  │   │
│  │    │   ├── output/              (生成的文档)              │   │
│  │    │   │   └── week-03.docx     ← 最终输出                │   │
│  │    │   └── templates/           (课程专用模板)            │   │
│  │    └── course-002-color-theory/                           │   │
│  └──────────────────────────────────────────────────────────┘   │
│                                                                   │
│  ┌──────────────────────────────────────────────────────────┐   │
│  │  schemas/ (数据契约)                                      │   │
│  │    ├── course_schema.yml                                  │   │
│  │    ├── outline_schema.yml                                 │   │
│  │    ├── cover_schema.yml                                   │   │
│  │    └── lesson_schema.yml                                  │   │
│  └──────────────────────────────────────────────────────────┘   │
│                                                                   │
│  ┌──────────────────────────────────────────────────────────┐   │
│  │  templates/ (全局模板)                                    │   │
│  │    ├── outline/default-outline.docx                       │   │
│  │    ├── cover/default-cover.docx                           │   │
│  │    └── lesson/default-lesson.docx                         │   │
│  └──────────────────────────────────────────────────────────┘   │
└─────────────────────────────────────────────────────────────────┘
```

---

## 8.7 实施路线图

### Phase 1: 基础重构 (1-2 周)

**目标**: 建立新的目录结构和工具框架

**任务**:
1. ✅ 创建新的目录结构
   ```bash
   mkdir -p courses/.course-template/{outline,cover,lessons,output,templates}
   mkdir -p tools
   ```

2. ✅ 创建工具注册表
   - 编写 `tools/registry.yml`
   - 定义工具元数据规范

3. ✅ 重构 `generate_docs.py` → `tools/doc_generator.py`
   - 保持核心功能不变
   - 添加 CLI 接口
   - 支持工具注册表调用

4. ✅ 创建 `tools/course_manager.py`
   - `create_course()` - 创建课程工作空间
   - `list_courses()` - 列出所有课程
   - `get_course_info()` - 获取课程信息

5. ✅ 创建新的 Schema 文件
   - `schemas/course_schema.yml`
   - `schemas/outline_schema.yml`
   - `schemas/cover_schema.yml`
   - 重命名 `lesson_data_schema.yml` → `lesson_schema.yml`

**验收标准**:
- [ ] 新目录结构创建完成
- [ ] 工具注册表可用
- [ ] 可以创建新课程
- [ ] 可以生成文档（使用新工具）

---

### Phase 2: Agent 重写 (1 周)

**目标**: 重写 Lesson-Weaver Agent，实现工具自动发现

**任务**:
1. ✅ 编写 `agents/lesson-weaver-v2.md`
   - 新的 Agent 身份和原则
   - 工具发现机制
   - 决策流程
   - 示例对话

2. ✅ 添加工具发现指令
   - 如何读取 `tools/registry.yml`
   - 如何选择合适的工具
   - 如何构建工具调用命令

3. ✅ 定义新的工作流
   - 场景 1: 创建课程
   - 场景 2: 生成大纲
   - 场景 3: 生成首页
   - 场景 4: 生成教案
   - 场景 5: 批量生成

**验收标准**:
- [ ] Agent 可以自动发现工具
- [ ] Agent 可以根据意图选择工具
- [ ] Agent 可以处理多种场景

---

### Phase 3: 新工具开发 (2-3 周)

**目标**: 开发缺失的工具

**任务**:
1. ✅ `tools/outline_generator.py`
   - 从 Markdown 生成大纲
   - 从 Word 文档生成大纲
   - 生成 `outline.yml` 和 `outline.docx`

2. ✅ `tools/ai_data_generator.py`
   - 集成 AI API (OpenAI/Claude)
   - 根据 Schema 生成数据
   - 上下文感知生成

3. ✅ `tools/validator.py`
   - 重构验证逻辑
   - 支持所有 Schema 类型
   - 详细的错误报告

4. ✅ `tools/data_converter.py`
   - Markdown → YAML
   - Word → YAML
   - JSON → YAML

**验收标准**:
- [ ] 可以从用户内容生成大纲
- [ ] 可以使用 AI 生成教案数据
- [ ] 所有工具都在注册表中

---

### Phase 4: 端到端测试 (1 周)

**目标**: 完整测试新架构

**任务**:
1. ✅ 创建测试课程
   ```bash
   python tools/course_manager.py create \
     --name "字体设计基础" \
     --code "ART-101"
   ```

2. ✅ 测试大纲生成
   - 提供 Markdown 大纲
   - 生成 `outline.yml` 和 `outline.docx`

3. ✅ 测试教案生成
   - 生成第 1 周教案
   - 批量生成 1-16 周教案

4. ✅ 测试 Agent 工作流
   - 完整的对话流程
   - 错误处理
   - 用户确认

**验收标准**:
- [ ] 可以完成完整的课程生成流程
- [ ] Agent 可以自主决策和调用工具
- [ ] 所有生成的文档符合要求

---

### Phase 5: 文档和培训 (1 周)

**目标**: 完善文档，准备发布

**任务**:
1. ✅ 更新 README.md
   - 新的目录结构说明
   - 新的使用流程
   - 工具使用示例

2. ✅ 编写工具文档
   - 每个工具的详细说明
   - 使用示例
   - 常见问题

3. ✅ 编写 Agent 使用指南
   - 如何与 Agent 交互
   - 常见场景示例
   - 最佳实践

4. ✅ 创建迁移指南
   - 如何从旧结构迁移到新结构
   - 数据迁移脚本

**验收标准**:
- [ ] 文档完整且准确
- [ ] 用户可以独立使用系统
- [ ] 有完整的示例和教程

---

## 8.8 关键设计决策

### 决策 1: 为什么采用课程为中心的组织？

**理由**:
- ✅ 符合用户的心智模型（教师按课程组织教学）
- ✅ 清晰的数据隔离（不同课程不会混淆）
- ✅ 易于管理和维护
- ✅ 支持多课程并行开发

### 决策 2: 为什么需要工具注册表？

**理由**:
- ✅ Agent 可以自动发现工具（无需硬编码）
- ✅ 新增工具无需修改 Agent
- ✅ 工具自我描述，易于理解和使用
- ✅ 支持工具版本管理和升级

### 决策 3: 为什么 Agent 需要完整的决策权？

**理由**:
- ✅ 用户意图多样，固定流程无法覆盖
- ✅ AI 的优势在于理解和决策
- ✅ 灵活性和可扩展性
- ✅ 更好的用户体验

### 决策 4: 为什么保留 Schema-Driven Architecture？

**理由**:
- ✅ Schema 是数据质量的保障
- ✅ Schema 是 AI 生成的指南
- ✅ Schema 是系统的契约
- ✅ 已有的投资和成果

---

## 8.9 与 v1.0 的对比

| 维度 | v1.0 (当前) | v2.0 (新架构) |
|------|-------------|---------------|
| **Agent 角色** | 前端交互层 | 智能决策中心 |
| **工作流** | 固定状态机 | 动态决策树 |
| **工具调用** | 硬编码 | 自动发现 |
| **数据组织** | 扁平目录 | 课程为中心 |
| **功能范围** | 仅生成教案 | 大纲+首页+教案 |
| **AI 集成** | 无 | 完整集成 |
| **可扩展性** | 低 | 高 |
| **用户体验** | 固定流程 | 灵活交互 |

---

## 8.10 下一步行动

**立即行动** (由 @architect.mdc 和 @dev.mdc 协作):

1. **创建目录结构**
   ```bash
   cd /Users/yamlam/Documents/obsdiannote/copilot-custom-prompts/nfu-docu-weaver
   mkdir -p courses/.course-template/{outline,cover,lessons,output,templates}
   mkdir -p tools
   mkdir -p templates/{outline,cover,lesson}
   ```

2. **创建工具注册表**
   ```bash
   touch tools/registry.yml
   # 复制上面的注册表内容
   ```

3. **创建新的 Schema 文件**
   ```bash
   touch schemas/course_schema.yml
   touch schemas/outline_schema.yml
   touch schemas/cover_schema.yml
   mv schemas/lesson_data_schema.yml schemas/lesson_schema.yml
   ```

4. **开始重构第一个工具**
   ```bash
   cp generate_docs.py tools/doc_generator.py
   # 添加 CLI 接口
   ```

5. **编写新的 Agent 指令**
   ```bash
   touch agents/lesson-weaver-v2.md
   # 开始编写新的 Agent 指令
   ```

---

**架构师**: @architect.mdc  
**日期**: 2025-10-05  
**状态**: 🏗️ Ready for Implementation  
**版本**: v2.0
