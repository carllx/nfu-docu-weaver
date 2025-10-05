# 课程模板目录

本目录是创建新课程的模板。当使用 `course_manager.py create` 创建新课程时，会复制此目录结构。

## 目录结构

```
.course-template/
├── README.md                  # 本文件
├── course.yml                 # 课程元数据模板
├── outline/                   # 课程大纲目录
│   └── .gitkeep
├── cover/                     # 教案首页目录
│   └── .gitkeep
├── lessons/                   # 教案数据目录
│   └── .gitkeep
├── output/                    # 生成的文档目录
│   └── .gitkeep
└── templates/                 # 课程专用模板目录（可选）
    └── .gitkeep
```

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

### 课程目录说明

- **outline/**: 存放课程大纲相关文件
  - `outline.md` - 用户提供的原始大纲
  - `outline.yml` - 结构化大纲数据
  - `outline.docx` - 生成的大纲文档

- **cover/**: 存放教案首页相关文件
  - `cover.yml` - 首页数据
  - `cover.docx` - 生成的首页文档

- **lessons/**: 存放教案数据文件（按周次）
  - `week-01.yml` - 第 1 周教案数据
  - `week-02.yml` - 第 2 周教案数据
  - ...

- **output/**: 存放所有生成的最终文档
  - `outline.docx` - 课程大纲
  - `cover.docx` - 教案首页
  - `week-01.docx` - 第 1 周教案
  - `week-02.docx` - 第 2 周教案
  - ...

- **templates/**: 存放课程专用模板（可选）
  - 如果某个课程需要特殊的模板，可以放在这里
  - 如果不提供，将使用全局模板 (`templates/`)

## 注意事项

1. 不要直接修改 `.course-template/` 目录
2. 每个课程都是独立的工作空间
3. 课程 ID 会自动生成（如 `course-001`, `course-002`）
4. 课程目录名格式: `course-{id}-{name-slug}`
