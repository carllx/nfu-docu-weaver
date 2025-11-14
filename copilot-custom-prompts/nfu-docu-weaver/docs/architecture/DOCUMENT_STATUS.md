# 架构文档状态表

**最后更新**: 2025-10-05  
**维护者**: @architect.mdc  
**版本**: v2.0

---

## 📊 文档状态概览

### 统计数据

| 类别 | 数量 | 说明 |
|------|------|------|
| ✅ **当前文档** | 8 | v2.0正在维护的文档 |
| 📦 **归档文档** | 5 | v1.x历史文档 |
| **总计** | 13 | 全部架构文档 |

---

## ✅ 当前文档 (v2.0)

### 核心架构文档

| 文档 | 说明 | 受众 | 最后更新 | 维护者 | 优先级 |
|------|------|------|---------|--------|--------|
| [README.md](copilot-custom-prompts/nfu-docu-weaver/docs/architecture/README.md) | 📍 主入口和导航 | 全员 | 2025-10-05 | @architect | P0 |
| [index.md](index.md) | 详细目录索引 | 全员 | 2025-10-05 | @architect | P0 |
| [v2.0-architecture-overview.md](v2.0-architecture-overview.md) | ⭐ v2.0架构概览 | 技术团队 | 2025-10-05 | @architect | P0 |
| [6-schema-driven-architecture.md](6-schema-driven-architecture.md) | Schema驱动架构详解 | 开发者 | 2025-10-05 | @architect | P1 |
| [7-lesson-weaver-integration.md](7-lesson-weaver-integration.md) | Lesson-Weaver使用指南 | AI用户/开发者 | 2025-10-05 | @architect | P1 |
| [8-agent-driven-architecture-v2.md](8-agent-driven-architecture-v2.md) | Agent架构设计v2.0 | 架构师/开发者 | 2025-10-05 | @architect | P0 |

### 设计决策记录 (ADR)

| 文档 | 标题 | 日期 | 状态 | 维护者 |
|------|------|------|------|--------|
| [ADR-001-clean-architecture-refactoring.md](ADR-001-clean-architecture-refactoring.md) | 清晰架构重构 | 2025-10-05 | ✅ Accepted | @architect |

### 辅助文档

| 文档 | 说明 | 受众 | 最后更新 | 维护者 |
|------|------|------|---------|--------|
| [DOCUMENT_STATUS.md](DOCUMENT_STATUS.md) | 📍 当前文件 - 文档状态追踪 | 维护者 | 2025-10-05 | @architect |
| [ARCHITECTURE_DOCS_CLEANUP_PLAN.md](ARCHITECTURE_DOCS_CLEANUP_PLAN.md) | 文档清理执行计划 | 维护者 | 2025-10-05 | @architect |

---

## 📦 归档文档 (v1.x)

### 存放位置
`archive/v1.x/`

### 归档清单

| 文档 | 原标题 | 说明 | 归档日期 | 归档原因 |
|------|--------|------|----------|----------|
| [1-introduction-引言.md](archive/v1.x/1-introduction-引言.md) | Introduction | v1.x项目介绍 | 2025-10-05 | 已被v2.0-architecture-overview.md替代 |
| [2-high-level-architecture-宏观架构.md](archive/v1.x/2-high-level-architecture-宏观架构.md) | High-Level Architecture | v1.x宏观架构图 | 2025-10-05 | 架构已重构为v2.0 |
| [3-tech-stack-技术栈.md](archive/v1.x/3-tech-stack-技术栈.md) | Tech Stack | v1.x技术栈 | 2025-10-05 | 内容已整合到v2.0-architecture-overview.md |
| [4-components-组件详解.md](archive/v1.x/4-components-组件详解.md) | Components | v1.x组件说明 | 2025-10-05 | 组件已重构，由新文档替代 |
| [5-testing-strategy-测试策略.md](archive/v1.x/5-testing-strategy-测试策略.md) | Testing Strategy | v1.x测试策略 | 2025-10-05 | 测试策略需要重新规划 |

**注意**: 归档文档仅供参考，内容已过时，请以v2.0文档为准。

---

## 📋 文档详细信息

### v2.0-architecture-overview.md
**路径**: `docs/architecture/v2.0-architecture-overview.md`  
**版本**: v2.0  
**状态**: ✅ Current  
**行数**: ~400行  
**说明**: v2.0架构的核心概览文档，涵盖三层分离、核心组件、技术栈、工作流程等。新手必读。

**内容覆盖**:
- 架构愿景和核心设计原则
- 系统架构图和数据流向
- 三层分离架构详解（Schema / Template / Data）
- 核心组件介绍（Agent、Validator、Generator等）
- 技术栈和工作流程
- 版本演进历史

**推荐受众**: 全员（特别是新加入成员）

---

### 6-schema-driven-architecture.md
**路径**: `docs/architecture/6-schema-driven-architecture.md`  
**版本**: v2.0  
**状态**: ✅ Current  
**行数**: ~375行  
**说明**: 深入讲解Schema-Driven架构设计理念、Schema的三大核心作用、版本管理、设计模式等。

**内容覆盖**:
- Schema-Driven架构概述
- 架构演进（v1.0-v1.3 → v1.4-v2.0）
- Schema在架构中的位置
- Schema的三大核心作用（AI指令、数据验证、文档生成）
- Schema版本管理策略
- 设计模式和最佳实践

**推荐受众**: 开发者、架构师

---

### 7-lesson-weaver-integration.md
**路径**: `docs/architecture/7-lesson-weaver-integration.md`  
**版本**: v2.0  
**状态**: ✅ Current  
**行数**: ~775行  
**说明**: Lesson-Weaver Agent的架构设计和使用指南，包含v2.0的主动引导机制。

**内容覆盖**:
- Agent v2.0概述和核心升级
- 当前架构分析（v1.0 vs v2.0）
- Agent工作流和状态机
- Schema集成方案
- 使用场景和示例
- 最佳实践

**推荐受众**: AI用户、开发者

---

### 8-agent-driven-architecture-v2.md
**路径**: `docs/architecture/8-agent-driven-architecture-v2.md`  
**版本**: v2.0  
**状态**: ✅ Current  
**行数**: ~933行  
**说明**: Agent架构v2.0的完整设计文档，详细描述Agent的主动引导机制、状态感知、工作流引擎等。

**内容覆盖**:
- Agent v2.0设计哲学
- 主动引导机制（Guide Role）
- 状态感知系统
- 工作流引擎和决策树
- 技术实现细节
- 测试策略

**推荐受众**: 架构师、高级开发者

---

### ADR-001-clean-architecture-refactoring.md
**路径**: `docs/architecture/ADR-001-clean-architecture-refactoring.md`  
**版本**: v2.0  
**状态**: ✅ Accepted  
**行数**: ~366行  
**说明**: 记录了v2.0清晰架构重构的设计决策、背景、影响、风险和实施计划。

**内容覆盖**:
- 决策背景和上下文
- 设计决策内容
- 影响分析（技术、业务、团队）
- 风险评估和缓解措施
- 实施计划和验收标准
- 后续行动

**推荐受众**: 架构师、PM、PO

---

## 🔄 文档更新流程

### 1. 更新文档内容
- 修改文档内容
- 更新文档头部元数据（版本、日期、状态）
- 验证所有内部链接

### 2. 更新本状态表
- 更新"最后更新"日期
- 更新相关统计数据
- 添加变更说明（如有必要）

### 3. Git提交
```bash
git add docs/architecture/
git commit -m "docs: 更新架构文档 - [具体变更]"
```

### 4. 通知相关人员
- 架构变更通知 @dev.mdc
- 重大更新通知 @po.mdc

---

## 📅 维护计划

### 定期审查
- **每月审查**: 检查文档是否需要更新
- **版本发布**: 每次版本发布后更新相关文档
- **季度总结**: 评估文档质量和完整性

### 下次审查日期
**2025-11-05** - 1个月后例行审查

### 审查清单
- [ ] 检查所有链接有效性
- [ ] 验证版本号准确性
- [ ] 确认元数据完整性
- [ ] 评估是否需要新增文档
- [ ] 识别需要归档的文档

---

## 🤝 贡献指南

### 文档规范
1. **元数据必填**: 版本、日期、状态、维护者
2. **状态标识**: ✅ Current / ⚠️ Deprecated / 📦 Archived / 🚧 Draft
3. **链接规范**: 使用相对路径
4. **术语统一**: 参考[术语表](#术语表)

### 状态定义
- ✅ **Current**: 当前版本，持续维护
- ⚠️ **Deprecated**: 已过时，计划归档
- 📦 **Archived**: 已归档，仅供参考
- 🚧 **Draft**: 草稿状态，未完成

### 术语表

| 术语 | 标准写法 | 说明 |
|------|---------|------|
| Schema | Schema（首字母大写） | 数据契约 |
| Template | Template（首字母大写） | 模板 |
| Course配置 | course.yml | v2.0新增的Course级别配置文件 |
| 三层分离 | Schema / Template / Data | v2.0核心架构特性 |
| Agent | Lesson-Weaver Agent | 统一使用全称 |

---

## 📞 联系方式

**架构负责人**: @architect.mdc  
**文档维护**: @architect.mdc  
**问题反馈**: 参见项目 [README](../../README.md)

---

**最后更新**: 2025-10-05  
**维护者**: @architect.mdc  
**下次审查**: 2025-11-05

