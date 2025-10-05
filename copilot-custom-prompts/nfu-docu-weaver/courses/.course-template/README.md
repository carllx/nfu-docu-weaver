# 课程模板目录 (v2.0)

本目录是创建新课程的模板。当使用 `course_manager.py create` 创建新课程时，会复制此目录结构。

**版本**: v2.0  
**更新日期**: 2025-10-05  
**Schema**: `../../schemas/course_schema.yml`

---

## 📋 目录结构 (v2.0)

```
.course-template/
├── README.md                  # 本文件
├── course.yml                 # 课程元数据模板 (v2.0 格式)
├── outline/                   # 课程大纲数据目录
│   └── .gitkeep
├── cover/                     # 教案首页数据目录
│   └── .gitkeep
├── lessons/                   # 教案数据目录
│   └── .gitkeep
└── output/                    # 生成的 Word 文档目录
    └── .gitkeep

注意: v2.0 中移除了 templates/ 目录
      模板文件统一使用项目级 /templates/ 目录
```

---

## 🆕 v2.0 新特性

### 1. Schema-Driven 配置

`course.yml` 现在包含 `config` 配置节，明确引用：
- **Schema 文件**: 数据结构定义
- **Template 文件**: Word 模板
- **数据目录**: 课程内容存放位置

```yaml
config:
  schemas:
    lesson: schemas/lesson_schema.yml
  templates:
    lesson: templates/lesson/lesson.docx
  data_dirs:
    lessons: lessons/
```

### 2. 清晰的路径规则

- **项目级资源**: 路径相对于项目根目录
  - `schemas/` - Schema 定义
  - `templates/` - Word 模板
  
- **课程级数据**: 路径相对于课程目录
  - `lessons/` - 教案数据 YAML
  - `outline/` - 大纲数据 YAML
  - `cover/` - 首页数据 YAML
  - `output/` - 生成的文档

### 3. 移除冗余 templates/ 目录

**理由**: 模板是格式定义，应全局共享，避免不一致和重复。

**特殊需求**: 如需课程特定模板，可在 `course.yml` 中覆盖路径。

## 使用方法

### 创建新课程

```bash
python tools/course_manager.py create \
  --name "课程名称" \
  --code "课程代码" \
  --instructor "授课教师" \
  --weeks 16
```

这将创建一个新的课程目录，例如 `courses/course-001-course-name/`

### 📁 课程目录说明

#### `outline/` - 课程大纲数据
- 存放课程大纲的 YAML 数据文件
- 文件遵循 `schemas/outline_schema.yml`
- 示例: `outline.yml`

#### `cover/` - 教案首页数据
- 存放教案首页的 YAML 数据文件
- 文件遵循 `schemas/cover_schema.yml`
- 示例: `cover.yml`

#### `lessons/` - 教案数据
- 存放各课次的教案 YAML 数据文件
- 每个文件遵循 `schemas/lesson_schema.yml`
- 命名建议: `lesson-01.yml`, `lesson-02.yml`, ...

#### `output/` - 生成的文档
- 存放所有生成的 Word 文档
- 由 `generate_docs.py` 自动生成
- 包含: 大纲、首页、各课次教案

---

## 🚀 架构优势

### Schema-Driven Architecture

```
course.yml → 引用 → schemas/*.yml (数据结构)
                   ↓
            lessons/*.yml (实际数据)
                   ↓
            templates/*.docx (文档格式)
                   ↓
            output/*.docx (最终文档)
```

### 清晰的关注点分离

| 层级 | 职责 | 位置 |
|------|------|------|
| **Schema** | 数据结构定义 | `/schemas/` |
| **Template** | 文档格式定义 | `/templates/` |
| **Data** | 课程内容数据 | 课程目录内 |
| **Output** | 生成的文档 | `output/` |

## 注意事项

1. 不要直接修改 `.course-template/` 目录
2. 每个课程都是独立的工作空间
3. 课程 ID 会自动生成（如 `course-001`, `course-002`）
4. 课程目录名格式: `course-{id}-{name-slug}`
