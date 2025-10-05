# Docu-Weaver 架构文档索引

**文档版本**: v2.0  
**最后更新**: 2025-10-05  
**状态**: ✅ Current

---

## 📖 文档导航

👉 **推荐从 [README.md](README.md) 开始** - 提供完整的导航和阅读路径

---

## 🎯 核心文档 (v2.0)

### 必读文档

| 序号 | 文档 | 说明 | 状态 |
|------|------|------|------|
| 0 | [README.md](README.md) | 📍 **主入口** - 完整导航和阅读路径 | ✅ v2.0 |
| 1 | [v2.0 架构概览](v2.0-architecture-overview.md) | ⭐ v2.0整体架构设计 | ✅ v2.0 |
| 2 | [Schema-Driven 架构](6-schema-driven-architecture.md) | Schema驱动的设计理念 | ✅ v2.0 |
| 3 | [Agent 架构 v2.0](8-agent-driven-architecture-v2.md) | Agent主动引导机制详解 | ✅ v2.0 |
| 4 | [Lesson-Weaver 集成](7-lesson-weaver-integration.md) | AI Agent使用指南 | ✅ v2.0 |

### 设计决策记录 (ADR)

| ADR | 标题 | 日期 | 状态 |
|-----|------|------|------|
| [ADR-001](ADR-001-clean-architecture-refactoring.md) | 清晰架构重构 | 2025-10-05 | ✅ Accepted |

### 辅助文档

| 文档 | 说明 | 状态 |
|------|------|------|
| [DOCUMENT_STATUS.md](DOCUMENT_STATUS.md) | 文档状态追踪表 | ✅ v2.0 |
| [ARCHITECTURE_DOCS_CLEANUP_PLAN.md](ARCHITECTURE_DOCS_CLEANUP_PLAN.md) | 文档清理执行计划 | ✅ v2.0 |

---

## 📦 历史版本文档 (已归档)

### v1.x 文档归档

存放位置: [archive/v1.x/](archive/v1.x/)

| 文档 | 原标题 | 说明 | 归档日期 |
|------|--------|------|----------|
| [1-introduction-引言.md](archive/v1.x/1-introduction-引言.md) | Introduction | v1.x项目介绍 | 2025-10-05 |
| [2-high-level-architecture-宏观架构.md](archive/v1.x/2-high-level-architecture-宏观架构.md) | High-Level Architecture | v1.x宏观架构图 | 2025-10-05 |
| [3-tech-stack-技术栈.md](archive/v1.x/3-tech-stack-技术栈.md) | Tech Stack | v1.x技术栈（已整合） | 2025-10-05 |
| [4-components-组件详解.md](archive/v1.x/4-components-组件详解.md) | Components | v1.x组件说明 | 2025-10-05 |
| [5-testing-strategy-测试策略.md](archive/v1.x/5-testing-strategy-测试策略.md) | Testing Strategy | v1.x测试策略 | 2025-10-05 |

**注意**: 归档文档仅供参考，内容已过时，请以v2.0文档为准。

---

## 🎓 推荐阅读路径

### 路径1: 快速上手（5分钟）
```
README.md → v2.0-architecture-overview.md → 开始实践
```

### 路径2: 开发者深入（45分钟）
```
1. v2.0-architecture-overview.md      (10分钟)
2. 6-schema-driven-architecture.md    (15分钟)
3. 8-agent-driven-architecture-v2.md  (20分钟)
4. 实践开发
```

### 路径3: AI用户（30分钟）
```
1. v2.0-architecture-overview.md      (10分钟)
2. 7-lesson-weaver-integration.md     (20分钟)
3. 使用Lesson-Weaver Agent
```

### 路径4: 架构师（60分钟）
```
1. ADR-001-clean-architecture-refactoring.md  (15分钟)
2. 8-agent-driven-architecture-v2.md          (20分钟)
3. 6-schema-driven-architecture.md            (15分钟)
4. archive/v1.x/* (了解演进)                  (10分钟)
```

---

## 🔗 相关资源

### 项目核心文档
- [项目简介 (Brief)](../brief.md)
- [产品需求文档 (PRD)](../prd.md)
- [架构重构总结](../../ARCHITECTURE_REFACTORING_SUMMARY.md)
- [v2.0快速上手](../../ARCHITECTURE_V2_QUICK_START.md)

### Schema文档
- [Schema说明文档](../../schemas/README.md)
- [Course Schema](../../schemas/course_schema.yml)
- [Lesson Schema](../../schemas/lesson_schema.yml)
- [Outline Schema](../../schemas/outline_schema.yml)
- [Cover Schema](../../schemas/cover_schema.yml)

### 工具与模板
- [课程管理工具](../../tools/course_manager.py)
- [Lesson-Weaver Agent](../../agents/lesson-weaver.md)
- [模板目录](../../templates/)

### 测试文档
- [测试快速上手](../QA_QUICK_START.md)
- [测试脚本](../../run_tests.sh)

---

## 📁 完整文档结构

```
docs/architecture/
├── README.md                            # 📍 主入口
├── index.md                             # 📍 当前文件 - 详细索引
├── DOCUMENT_STATUS.md                   # 文档状态表
├── ARCHITECTURE_DOCS_CLEANUP_PLAN.md    # 清理计划
│
├── v2.0-architecture-overview.md        # ⭐ v2.0 架构概览
├── 6-schema-driven-architecture.md      # Schema驱动架构
├── 7-lesson-weaver-integration.md       # Lesson-Weaver集成
├── 8-agent-driven-architecture-v2.md    # Agent架构v2.0
│
├── ADR-001-clean-architecture-refactoring.md  # 架构决策记录
│
└── archive/                             # 历史归档
    └── v1.x/                           # v1.x版本文档
        ├── 1-introduction-引言.md
        ├── 2-high-level-architecture-宏观架构.md
        ├── 3-tech-stack-技术栈.md
        ├── 4-components-组件详解.md
        └── 5-testing-strategy-测试策略.md
```

---

## 📊 文档统计

### 当前文档 (v2.0)
- **核心文档**: 4个
- **ADR文档**: 1个
- **辅助文档**: 2个
- **总计**: 7个活跃文档

### 归档文档 (v1.x)
- **归档文档**: 5个
- **归档日期**: 2025-10-05

---

## 🤝 文档维护

### 更新规范
1. **元数据**: 每个文档必须包含版本、日期、状态
2. **状态标识**: ✅ Current / ⚠️ Deprecated / 📦 Archived
3. **链接验证**: 更新后验证所有内部链接
4. **版本标注**: 明确标注适用版本号

### 维护责任
- **架构文档**: @architect.mdc
- **产品文档**: @po.mdc
- **技术文档**: @dev.mdc

---

**文档版本**: v2.0  
**最后更新**: 2025-10-05  
**维护者**: @architect.mdc
