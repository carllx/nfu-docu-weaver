# Docu-Weaver 架构文档

**文档版本**: v2.0  
**最后更新**: 2025-10-05  
**维护者**: @architect.mdc  
**状态**: ✅ Current

---

## 📖 快速导航

### 🎯 新手入门
1. **[v2.0 架构概览](v2.0-architecture-overview.md)** ⭐ 必读
   - 了解v2.0的三层分离架构
   - 理解Schema-Driven设计理念
   - 掌握核心组件和技术栈

2. **[快速上手指南](../../ARCHITECTURE_V2_QUICK_START.md)**
   - 5分钟了解核心变化
   - 快速上手v2.0开发

### 📚 核心架构文档

| 文档 | 说明 | 受众 | 状态 |
|------|------|------|------|
| [v2.0 架构概览](v2.0-architecture-overview.md) | v2.0整体架构设计 | 全员 | ✅ v2.0 |
| [Schema-Driven 架构](6-schema-driven-architecture.md) | Schema驱动的设计理念 | 开发者 | ✅ v2.0 |
| [Agent 架构 v2.0](8-agent-driven-architecture-v2.md) | Agent主动引导机制 | 开发者 | ✅ v2.0 |
| [Lesson-Weaver 集成](7-lesson-weaver-integration.md) | AI Agent使用指南 | AI用户 | ✅ v2.0 |

### 📋 设计决策记录 (ADR)

| ADR | 标题 | 日期 | 状态 |
|-----|------|------|------|
| [ADR-001](ADR-001-clean-architecture-refactoring.md) | 清晰架构重构 | 2025-10-05 | ✅ Accepted |

### 📊 辅助文档

- **[文档状态表](DOCUMENT_STATUS.md)** - 所有文档的状态追踪
- **[文档清理计划](ARCHITECTURE_DOCS_CLEANUP_PLAN.md)** - 架构文档维护记录

---

## 🏗️ 架构演进

### v2.0 - 三层分离 + Agent升级 (当前版本)
**日期**: 2025-10-05  
**核心变化**:
- ✅ 三层完全分离（Schema / Template / Data）
- ✅ Agent主动引导工作流
- ✅ Course级别配置统一管理
- ✅ 清晰架构重构

**关键文档**:
- [v2.0架构概览](v2.0-architecture-overview.md)
- [Agent架构v2.0](8-agent-driven-architecture-v2.md)
- [ADR-001](ADR-001-clean-architecture-refactoring.md)

### v1.4 - Schema-Driven (2024)
**核心变化**:
- Schema作为单一事实来源
- 数据验证机制
- 工具层完善

**归档**: [v1.x文档归档](archive/v1.x/)

### v1.0-v1.3 - MVP演进 (2023-2024)
**核心功能**:
- 基础文档生成
- 模板系统
- 工具化实现

**归档**: [v1.x文档归档](archive/v1.x/)

---

## 📁 文档结构

```
docs/architecture/
├── README.md                            # 📍 当前文件 - 主入口
├── index.md                             # 详细目录索引
├── DOCUMENT_STATUS.md                   # 文档状态追踪
├── 
├── v2.0-architecture-overview.md        # v2.0 架构概览 ⭐
├── 6-schema-driven-architecture.md      # Schema驱动架构
├── 7-lesson-weaver-integration.md       # Agent使用指南
├── 8-agent-driven-architecture-v2.md    # Agent架构设计
├── 
├── ADR-001-clean-architecture-refactoring.md  # 架构决策记录
├── ARCHITECTURE_DOCS_CLEANUP_PLAN.md    # 文档维护记录
├── 
└── archive/                             # 历史版本归档
    └── v1.x/                           # v1.x版本文档
        ├── 1-introduction-引言.md
        ├── 2-high-level-architecture-宏观架构.md
        ├── 3-tech-stack-技术栈.md
        ├── 4-components-组件详解.md
        └── 5-testing-strategy-测试策略.md
```

---

## 🎓 推荐阅读路径

### 路径1: 开发者（首次接触）
1. [v2.0 架构概览](v2.0-architecture-overview.md) - 10分钟
2. [Schema-Driven 架构](6-schema-driven-architecture.md) - 15分钟
3. [Agent 架构 v2.0](8-agent-driven-architecture-v2.md) - 20分钟
4. 开始实践 🚀

### 路径2: AI用户（使用Lesson-Weaver）
1. [v2.0 架构概览](v2.0-architecture-overview.md) - 快速了解
2. [Lesson-Weaver 集成](7-lesson-weaver-integration.md) - 详细学习
3. 开始使用Agent 🤖

### 路径3: 架构师（深入理解）
1. [ADR-001](ADR-001-clean-architecture-refactoring.md) - 设计决策
2. [Agent 架构 v2.0](8-agent-driven-architecture-v2.md) - 架构设计
3. [Schema-Driven 架构](6-schema-driven-architecture.md) - 数据契约
4. [v1.x归档文档](archive/v1.x/) - 演进历史

---

## 🔗 相关资源

### 项目文档
- [项目简介 (Brief)](../brief.md)
- [产品需求文档 (PRD)](../prd.md)
- [架构重构总结](../../ARCHITECTURE_REFACTORING_SUMMARY.md)
- [快速上手指南](../../ARCHITECTURE_V2_QUICK_START.md)

### Schema文档
- [Schema 说明文档](../../schemas/README.md)
- [Course Schema](../../schemas/course_schema.yml)
- [Lesson Schema](../../schemas/lesson_schema.yml)
- [Outline Schema](../../schemas/outline_schema.yml)

### 工具与模板
- [课程管理工具](../../tools/course_manager.py)
- [Lesson-Weaver Agent](../../agents/lesson-weaver.md)
- [模板目录](../../templates/)

---

## 🤝 贡献指南

### 文档更新规范
1. **元数据必填**: 每个文档必须包含版本、日期、状态
2. **状态标识**: 使用统一的状态标识（✅ Current / ⚠️ Deprecated / 📦 Archived）
3. **链接验证**: 更新后必须验证所有内部链接
4. **版本标注**: 明确标注适用的版本号

### 文档状态定义
- ✅ **Current**: 当前版本，持续维护
- ⚠️ **Deprecated**: 已过时，但未归档
- 📦 **Archived**: 已归档，仅供参考
- 🚧 **Draft**: 草稿状态，未完成

### 更新流程
1. 修改文档内容
2. 更新元数据（版本、日期）
3. 验证所有链接
4. 更新 `DOCUMENT_STATUS.md`
5. 提交PR并请求Review

---

## 📞 联系方式

**架构负责人**: @architect.mdc  
**产品负责人**: @po.mdc  
**技术支持**: 参见项目 [README](../../README.md)

---

**最后更新**: 2025-10-05  
**文档版本**: v2.0  
**维护者**: @architect.mdc

