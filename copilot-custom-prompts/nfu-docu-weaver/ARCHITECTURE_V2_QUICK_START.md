# 🚀 架构 v2.0 快速上手指南

**版本**: v2.0.0  
**日期**: 2025-10-05  
**状态**: ✅ 生产就绪

---

## 🎯 一句话总结

**v2.0 实现了清晰的三层架构**: Schema (契约) → Template (格式) → Data (内容)

---

## 📐 架构速览

```
项目根目录/
│
├── schemas/                    ← 📋 第 1 层: Schema 定义 (数据契约)
│   ├── course_schema.yml       ← 课程元数据结构
│   ├── lesson_schema.yml       ← 教案数据结构
│   ├── cover_schema.yml        ← 首页数据结构
│   └── outline_schema.yml      ← 大纲数据结构
│
├── templates/                  ← 📄 第 2 层: Word 模板 (格式定义)
│   ├── lesson/lesson.docx
│   ├── cover/cover.docx
│   └── outline/outline.docx
│
└── courses/                    ← 📚 第 3 层: 课程工作空间
    └── course-001-xxx/
        ├── course.yml          ← 元数据 + 配置 (v2.0)
        ├── lessons/            ← 教案数据 (YAML)
        ├── cover/              ← 首页数据 (YAML)
        ├── outline/            ← 大纲数据 (YAML)
        └── output/             ← 生成文档 (DOCX)
```

---

## 🔑 核心概念

### 1. course.yml v2.0 格式

```yaml
# ===================================================================
# 课程元数据 (v2.0)
# ===================================================================
# Schema: ../../schemas/course_schema.yml

# 基本信息
course_id: course-001
course_name: 字体设计基础
course_code: ART-101
instructor: 张三
semester: 2025-2026 第一学期
total_weeks: 16

# 配置 (新增) ← 这是 v2.0 的核心！
config:
  # Schema 路径 (相对于项目根目录)
  schemas:
    lesson: schemas/lesson_schema.yml
    cover: schemas/cover_schema.yml
    outline: schemas/outline_schema.yml
  
  # Template 路径 (相对于项目根目录)
  templates:
    lesson: templates/lesson/lesson.docx
    cover: templates/cover/cover.docx
    outline: templates/outline/outline.docx
  
  # 数据目录 (相对于课程目录)
  data_dirs:
    lessons: lessons/
    cover: cover/
    outline: outline/
    output: output/

# 其他配置...
```

### 2. 路径规则

| 资源类型 | 路径基准 | 示例 | 位置 |
|---------|---------|------|------|
| **Schema** | 项目根 | `schemas/lesson_schema.yml` | `course.yml` 中的 `config.schemas` |
| **Template** | 项目根 | `templates/lesson/lesson.docx` | `course.yml` 中的 `config.templates` |
| **Data** | 课程目录 | `lessons/lesson-01.yml` | 课程内的 `data_dirs` |

### 3. 数据流向

```
1️⃣ Schema 定义数据结构
       ↓
2️⃣ YAML 数据遵循 Schema
       ↓
3️⃣ Template 定义文档格式
       ↓
4️⃣ 生成最终 Word 文档
```

---

## 📝 常见任务

### 创建新课程

```bash
python tools/course_manager.py create \
  --name "课程名称" \
  --code "课程代码" \
  --instructor "教师姓名" \
  --weeks 16
```

✅ 自动创建 v2.0 格式的课程工作空间

### 查看课程信息

```bash
python tools/course_manager.py info course-001
```

### 添加教案数据

1. 在 `lessons/` 创建 YAML 文件
   ```bash
   cp schemas/lesson_schema.yml courses/course-001-xxx/lessons/lesson-01.yml
   # 编辑 lesson-01.yml，填入实际数据
   ```

2. 验证数据（可选）
   ```bash
   python generate_docs.py validate \
     courses/course-001-xxx/lessons/lesson-01.yml \
     templates/lesson/lesson.docx \
     --schema schemas/lesson_schema.yml
   ```

3. 生成文档
   ```bash
   python generate_docs.py generate \
     courses/course-001-xxx/lessons/lesson-01.yml \
     templates/lesson/lesson.docx \
     courses/course-001-xxx/output/lesson-01.docx
   ```

### 批量生成

```bash
python generate_docs.py batch \
  courses/course-001-xxx/lessons/ \
  templates/lesson/lesson.docx \
  courses/course-001-xxx/output/
```

---

## 🆚 v1.x vs v2.0

| 特性 | v1.x | v2.0 |
|------|------|------|
| **templates/ 目录** | 课程内有 | ❌ 已移除 |
| **Schema 引用** | 无 | ✅ course.yml 中明确引用 |
| **路径规则** | 混乱 | ✅ 清晰明确 |
| **course_schema.yml** | 无 | ✅ 新增 |
| **config 配置节** | 无 | ✅ 新增 |
| **版本号** | "1.0" | "2.0" |

---

## ❓ 常见问题

### Q1: 为什么删除了 `templates/` 目录？

**A**: 模板是格式定义，应该全局共享。每个课程都有自己的模板会导致：
- 不一致
- 重复
- 维护困难

如果确实需要课程特定模板，可以在 `course.yml` 的 `config.templates` 中覆盖路径。

### Q2: Schema 路径为什么相对于项目根目录？

**A**: 避免混乱：
- ❌ `../../schemas/lesson_schema.yml` (相对路径，向上几层？)
- ✅ `schemas/lesson_schema.yml` (从项目根开始，清晰明确)

### Q3: 如何迁移旧课程到 v2.0？

**A**: 手动或自动迁移：

**手动**:
1. 删除 `templates/` 目录
2. 在 `course.yml` 添加 `config` 配置节
3. 更新 `metadata.version` 为 "2.0"

**自动** (推荐):
```bash
# 未来提供迁移脚本
python tools/migrate_to_v2.py course-001
```

### Q4: course_schema.yml 是什么？

**A**: Meta-Schema，定义 `course.yml` 本身的数据结构，确保所有课程元数据格式一致。

---

## 📚 深入阅读

1. **ADR-001**: [架构决策记录](docs/architecture/ADR-001-clean-architecture-refactoring.md)
   - 为什么做这些改变
   - 详细的设计理由

2. **重构总结**: [ARCHITECTURE_REFACTORING_SUMMARY.md](ARCHITECTURE_REFACTORING_SUMMARY.md)
   - 完整的重构过程
   - 对比分析

3. **Schema README**: [schemas/README.md](schemas/README.md)
   - Schema 的三大作用
   - 使用最佳实践

4. **Course Template**: [courses/.course-template/README.md](courses/.course-template/README.md)
   - 课程目录结构说明
   - v2.0 新特性

---

## ✅ 快速检查清单

使用 v2.0 之前，请确保：

- [ ] 理解三层架构: Schema → Template → Data
- [ ] 知道路径规则: 项目级相对于根目录，课程级相对于课程目录
- [ ] 了解 `course.yml` v2.0 格式中的 `config` 配置节
- [ ] 知道 `templates/` 目录已被移除
- [ ] 能够使用 `course_manager.py` 创建新课程

---

## 🎉 开始使用

```bash
# 1. 创建新课程
python tools/course_manager.py create \
  --name "我的课程" \
  --code "MY-101" \
  --instructor "我" \
  --weeks 16

# 2. 查看创建的课程
python tools/course_manager.py list

# 3. 查看课程详情
python tools/course_manager.py info course-002

# 4. 开始添加教案数据！
```

---

**最后更新**: 2025-10-05  
**维护者**: @architect.mdc  
**反馈**: 欢迎提供使用反馈和改进建议

