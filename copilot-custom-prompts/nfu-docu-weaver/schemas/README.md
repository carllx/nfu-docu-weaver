# Schemas 目录 - 数据契约层

## 📋 概述

`schemas/` 目录是 **Docu-Weaver** 采用 **Schema-Driven Architecture**（模式驱动架构）的核心组成部分。这里存放的数据契约文件定义了整个系统的数据结构规范，是连接 AI 内容生成、数据验证和文档生成三个环节的桥梁。

---

## 🎯 Schema 的三大作用

### 1. 🤖 AI Agent 指令核心

Schema 文件是提供给 AI Agent 的**最精确、最严格的数据生成指令**。

**使用场景**：当您使用 AI（如 GPT-4、Claude）根据课程大纲生成教案数据时，将 schema 文件嵌入到 prompt 中：

```markdown
**System Prompt**:
你是课程设计专家，请根据以下 YAML Schema 严格生成结构化数据：

[嵌入 lesson_data_schema.yml 的完整内容]

现在请为"第二章 认知字体（上）"生成对应的数据。
```

**效果**：
- ✅ 确保 AI 输出结构化、规范化的数据
- ✅ 减少人工校正工作量
- ✅ 提升数据质量和一致性

---

### 2. ✅ 数据验证标准

Schema 定义了数据验证的标准规范，在文档生成前自动检查数据完整性。

**验证流程**：

```bash
# 1. 根据 schema 验证单个数据文件
python generate_docs.py validate data/lesson1.yml template.docx

# 2. 批量验证所有数据
python generate_docs.py validate --batch data/ template.docx
```

**验证项目**：
- ✅ YAML 语法正确性
- ✅ 必需字段完整性（基于 schema 定义）
- ✅ 数据类型匹配
- ✅ 嵌套结构正确性

---

### 3. 📖 文档生成参考

Schema 为开发人员和用户提供了清晰的字段映射参考。

**用途**：
- 理解模板中 `{{key}}` 占位符的含义
- 了解数据的完整结构
- 作为数据填写指南

---

## 📄 当前 Schema 文件

### `lesson_data_schema.yml` (v2)

**描述**: 课程教案结构化数据契约与模板  
**版本**: v2.0  
**更新日期**: 2025-10-04

**主要特性**：
- ✅ 完整的课程教案数据结构定义
- ✅ 详细的字段说明和注释
- ✅ 支持嵌套结构（如 `class_hours.total`）
- ✅ 支持列表数据（如 `supported_course_objectives`）
- ✅ v2 新增：`segment_type` 环节类型字段
- ✅ v2 新增：`signature_info` 页脚签名信息

**数据结构层级**：
```yaml
# 1. 课程基本信息
lesson_number, lesson_title, course_name

# 2. 核心内容定义
chapter_info, lesson_content, class_schedule
class_hours: {total, breakdown}
supported_course_objectives: [...]
teaching_aims: {knowledge_aim, ability_aim, quality_aim, ...}

# 3. 教学环节设计
main_teaching_segments:
  - segment_title
    segment_type (v2 新增)
    process_description
    design_details: {...}

# 4. 课后作业与签名 (v2 新增)
after_class_assignments: [...]
signature_info: {author_name, author_date, approver_name, approver_date}
```

---

## 🔧 Schema 使用最佳实践

### 1. Schema 作为"单一事实来源" (Single Source of Truth)

**原则**: Schema 是数据结构的唯一权威定义，所有数据生成、验证和文档生成都应以 Schema 为准。

**实践**:
- ✅ 修改数据结构时，先更新 Schema
- ✅ 所有数据文件必须符合 Schema 规范
- ✅ 验证器自动从 Schema 提取规则

---

### 2. Schema 版本管理

**版本命名**：
```
lesson_data_schema_v1.yml  # 初始版本
lesson_data_schema_v2.yml  # 当前版本（默认）
lesson_data_schema_v3.yml  # 未来版本
```

**兼容性**：
- 向后兼容：新字段添加应设为可选
- 破坏性变更：创建新版本文件
- 版本说明：在 Schema 文件头部注释说明变更

---

### 3. Schema 文档化

**必需元素**：
- ✅ 文件头部的版本说明
- ✅ 每个字段的注释说明
- ✅ 数据类型和格式要求
- ✅ 必需 vs 可选字段标识
- ✅ 示例数据

---

## 🚀 未来扩展

### v1.4.0 规划
- [ ] 实现基于 Schema 的自动验证器
- [ ] Schema 规则提取引擎
- [ ] 类型检查和格式验证
- [ ] Schema 可视化工具

### v2.0.0 规划
- [ ] 多 Schema 支持（不同文档类型）
- [ ] Schema 合并和继承
- [ ] JSON Schema 标准兼容
- [ ] Schema 自动生成工具

---

## 📚 相关文档

- [项目架构文档](../docs/architecture/index.md)
- [PRD - 产品需求](../docs/prd.md)
- [Sprint Progress](../docs/SPRINT_PROGRESS.md)
- [CHANGELOG](../CHANGELOG.md)

---

## 📞 问题与反馈

如果您对 Schema 设计有任何疑问或建议，请通过以下方式联系：

- 📧 提交 GitHub Issue
- 📝 查看项目文档
- 💬 参与项目讨论

---

**最后更新**: 2025-10-04  
**维护者**: Product Owner  
**状态**: ✅ Active

