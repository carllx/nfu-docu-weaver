# ADR-001: 清理架构混乱 - Schema/Template/Data 分离

**状态**: ✅ 已实施  
**日期**: 2025-10-05  
**决策者**: @architect.mdc, @po.mdc  
**影响范围**: 项目架构、课程管理、文档生成流程

---

## 📋 背景 (Context)

### 问题描述

在 v1.4.0 之前，项目存在以下架构混乱问题：

1. **模板路径混乱**
   - 项目根目录有 `/templates/` (全局模板)
   - 课程目录内也有 `templates/` 子目录 (空目录)
   - `course.yml` 中引用路径不明确 (`templates/lesson/default-lesson.docx` 相对于哪里？)

2. **Schema 缺失引用**
   - 课程元数据没有引用 Schema
   - 无法通过 `course.yml` 知道应该使用哪个 Schema
   - Schema-Driven Architecture 未完全实施

3. **职责不清**
   - 不清楚哪些是数据文件 (YAML)
   - 不清楚哪些是模板文件 (DOCX)
   - 不清楚哪些是 Schema 文件 (YML)

4. **冗余目录结构**
   - `.course-template/templates/` 存在但为空
   - 每个课程的 `templates/` 目录也为空
   - 造成困惑：为什么需要这些空目录？

### 架构债务影响

- ❌ 开发人员困惑：不知道文件应该放在哪里
- ❌ 维护困难：路径引用不明确
- ❌ 扩展性差：添加新模板或 Schema 时不知道如何组织
- ❌ Schema-Driven 不完整：缺少从 course.yml 到 Schema 的连接

---

## 🎯 决策 (Decision)

### 核心决策

我们决定实施 **清晰的三层架构分离**：

```
┌─────────────────────────────────────────────────────┐
│ 项目级资源 (全局共享)                                │
│ - schemas/     ← Schema 定义 (数据契约)             │
│ - templates/   ← Word 模板 (格式定义)               │
└─────────────────────────────────────────────────────┘
                       ↓ 引用
┌─────────────────────────────────────────────────────┐
│ 课程级资源 (工作空间)                                │
│ - course.yml   ← 配置 (引用项目级资源)              │
│ - lessons/     ← 数据文件 (YAML)                    │
│ - cover/       ← 数据文件 (YAML)                    │
│ - outline/     ← 数据文件 (YAML)                    │
│ - output/      ← 生成文档 (DOCX)                    │
└─────────────────────────────────────────────────────┘
```

### 具体决策点

#### 决策 1: 移除课程级 `templates/` 目录

**决策**: 不在课程目录内保留 `templates/` 目录

**理由**:
1. Templates 是格式定义，应该全局共享
2. 每个课程都修改模板会导致不一致
3. 遵循 DRY (Don't Repeat Yourself) 原则
4. 减少目录混乱

**例外**: 如果确实需要课程特定模板，可以通过 `course.yml` 中的 `config.templates` 覆盖全局路径

#### 决策 2: 所有路径相对于项目根目录

**决策**: `course.yml` 中的 Schema 和 Template 路径都相对于项目根目录

**理由**:
1. 避免相对路径混乱 (`../../` 到底向上几层？)
2. 便于验证和调试
3. 工具脚本更容易处理绝对引用
4. 清晰明确，无歧义

**示例**:
```yaml
config:
  schemas:
    lesson: schemas/lesson_schema.yml    # 从项目根开始
  templates:
    lesson: templates/lesson/lesson.docx # 从项目根开始
  data_dirs:
    lessons: lessons/                     # 相对于课程目录
```

#### 决策 3: Schema 必须在 `course.yml` 中声明

**决策**: 所有课程元数据必须包含 `config.schemas` 配置节

**理由**:
1. 完整实施 Schema-Driven Architecture
2. 明确数据验证标准
3. 便于工具自动发现和使用 Schema
4. 为 AI 工作流提供明确的数据结构指引

#### 决策 4: 创建 `course_schema.yml`

**决策**: 为 `course.yml` 本身创建 Schema 定义

**理由**:
1. Meta-schema: 定义元数据的数据结构
2. 确保所有课程元数据格式一致
3. 便于验证 `course.yml` 的完整性
4. 文档化课程配置规范

---

## 📐 实施方案 (Implementation)

### Phase 1: 清理冗余结构

```bash
# 删除课程内的 templates/ 目录
rm -rf courses/course-*/templates/
rm -rf courses/.course-template/templates/
```

### Phase 2: 创建 `course_schema.yml`

创建 `schemas/course_schema.yml`，定义课程元数据结构。

### Phase 3: 更新 `.course-template/course.yml`

升级到 v2.0 格式，添加 `config` 配置节：
- `config.schemas`: Schema 文件路径
- `config.templates`: Word 模板路径
- `config.data_dirs`: 数据目录路径

### Phase 4: 更新现有课程

迁移所有现有课程到 v2.0 格式。

### Phase 5: 更新 `course_manager.py`

修改课程创建逻辑：
- 生成 v2.0 格式的 `course.yml`
- 更新版本号到 "2.0"
- 添加架构说明注释

### Phase 6: 文档更新

- 创建本 ADR 文档
- 更新 `.course-template/README.md`
- 更新 `schemas/README.md`

---

## 🎨 新架构示意图

### 目录结构

```
nfu-docu-weaver/
├── schemas/                      ← 项目级 Schema 定义
│   ├── course_schema.yml         ← 课程元数据 Schema (NEW)
│   ├── lesson_schema.yml         ← 教案数据 Schema
│   ├── cover_schema.yml          ← 首页数据 Schema
│   ├── outline_schema.yml        ← 大纲数据 Schema
│   └── README.md
│
├── templates/                    ← 项目级 Word 模板
│   ├── lesson/lesson.docx
│   ├── cover/cover.docx
│   └── outline/outline.docx
│
├── courses/
│   ├── .course-template/         ← 课程创建模板
│   │   ├── course.yml            ← v2.0 格式模板
│   │   ├── lessons/              ← 空目录
│   │   ├── cover/                ← 空目录
│   │   ├── outline/              ← 空目录
│   │   └── output/               ← 空目录
│   │   [删除] templates/         ← 已移除
│   │
│   └── course-001-xxx/           ← 实际课程
│       ├── course.yml            ← v2.0 格式，包含 config
│       ├── lessons/              ← 教案数据 YAML 文件
│       ├── cover/                ← 首页数据 YAML 文件
│       ├── outline/              ← 大纲数据 YAML 文件
│       └── output/               ← 生成的 Word 文档
│       [删除] templates/         ← 已移除
│
└── tools/
    └── course_manager.py         ← v2.0，支持新架构
```

### 引用关系

```
course.yml (v2.0)
    ↓ config.schemas.lesson
schemas/lesson_schema.yml
    
course.yml (v2.0)
    ↓ config.templates.lesson
templates/lesson/lesson.docx

course.yml (v2.0)
    ↓ config.data_dirs.lessons
lessons/lesson-01.yml
    ↓ 遵循
schemas/lesson_schema.yml
```

---

## ✅ 优势 (Consequences)

### 正面影响

1. **清晰的职责分离** ✅
   - Schema → 数据契约定义
   - Template → 文档格式定义
   - Data → 实际课程内容

2. **路径引用明确** ✅
   - 所有项目级资源路径相对于项目根
   - 所有课程级数据路径相对于课程目录
   - 无歧义，易于理解

3. **DRY 原则** ✅
   - 全局资源只存在一份
   - 避免重复和不一致

4. **可维护性提升** ✅
   - 更新模板时只需修改一处
   - 更新 Schema 时立即影响所有课程

5. **可扩展性增强** ✅
   - 添加新文档类型：添加 Schema + Template
   - 添加新课程：使用 `course_manager.py create`
   - 覆盖全局模板：修改 `course.yml` 中的路径

6. **Schema-Driven 完整实施** ✅
   - 从 course.yml 到 Schema 的完整链路
   - 所有数据类型都有 Schema 定义
   - 便于自动化验证和 AI 集成

### 负面影响与缓解

1. **现有课程需要迁移** ⚠️
   - 缓解：提供自动迁移脚本
   - 缓解：Phase 4 中已完成迁移

2. **学习曲线** ⚠️
   - 缓解：更新文档和 README
   - 缓解：本 ADR 详细说明设计理由

3. **路径长度增加** ⚠️
   - 问题：`schemas/lesson_schema.yml` vs `lesson_schema.yml`
   - 缓解：明确性比简洁性更重要
   - 缓解：工具可以处理路径解析

---

## 📊 对比分析

| 方面 | 旧架构 (v1.x) | 新架构 (v2.0) |
|------|---------------|---------------|
| **职责分离** | ❌ 混乱 | ✅ 清晰 |
| **路径引用** | ❌ 不明确 | ✅ 明确 |
| **Schema 集成** | ⚠️ 部分 | ✅ 完整 |
| **可维护性** | ❌ 低 | ✅ 高 |
| **可扩展性** | ⚠️ 中等 | ✅ 高 |
| **DRY 原则** | ❌ 有重复 | ✅ 遵循 |
| **文档完整性** | ⚠️ 一般 | ✅ 完整 |
| **学习曲线** | ✅ 低 | ⚠️ 中等 |
| **向后兼容** | N/A | ⚠️ 需迁移 |

---

## 🔄 迁移指南

### 从 v1.x 迁移到 v2.0

#### 自动迁移（推荐）

```bash
# 运行迁移脚本（如果提供）
python tools/migrate_to_v2.py

# 验证迁移结果
python tools/course_manager.py list
```

#### 手动迁移

1. **删除 `templates/` 目录**
   ```bash
   rm -rf courses/course-xxx/templates/
   ```

2. **更新 `course.yml` 格式**
   ```yaml
   # 添加 config 配置节
   config:
     schemas:
       course: schemas/course_schema.yml
       lesson: schemas/lesson_schema.yml
       cover: schemas/cover_schema.yml
       outline: schemas/outline_schema.yml
     
     templates:
       lesson: templates/lesson/lesson.docx
       cover: templates/cover/cover.docx
       outline: templates/outline/outline.docx
     
     data_dirs:
       lessons: lessons/
       cover: cover/
       outline: outline/
       output: output/
   
   # 更新版本号
   metadata:
     version: "2.0"
   ```

3. **验证配置**
   ```bash
   python tools/course_manager.py info course-xxx
   ```

---

## 📚 相关文档

- [Schema README](../../schemas/README.md)
- [Course Template README](../../courses/.course-template/README.md)
- [Architecture Documentation](./index.md)
- [Schema-Driven Architecture](./6-schema-driven-architecture.md)

---

## 📝 变更历史

- **2025-10-05**: ADR 创建，实施架构清理
- **v2.0.0**: 课程元数据格式升级

---

## ✍️ 签名

**架构师**: @architect.mdc  
**Product Owner**: @po.mdc  
**日期**: 2025-10-05  
**状态**: ✅ 已批准并实施

