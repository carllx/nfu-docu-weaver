# Docu-Weaver 项目文档

**文档规范**: B-MAD (Build-Measure-Analyze-Decide) 方法论  
**最后更新**: 2025-10-04  
**维护团队**: Product Owner, PM, Architect, SM

---

## 📚 文档导航

### 🎯 核心文档（必读）

#### 1. [PRD - 产品需求文档](prd.md)
**目的**: 定义产品目标、需求和功能规格  
**维护者**: PM (John)  
**何时使用**: 
- 理解项目目标和背景
- 查看功能需求和用户故事结构
- 了解产品愿景和成功指标

**关键章节**:
- Goals and Background Context
- Requirements (功能性 & 非功能性)
- User Interface Design Goals
- Epic and Story Structure

---

#### 2. [Architecture - 架构文档](architecture/index.md)
**目的**: 定义系统技术架构和组件设计  
**维护者**: Architect  
**何时使用**:
- 理解系统整体架构
- 查看技术栈和设计模式
- 了解组件职责和交互

**模块结构**:
```
architecture/
├── index.md                    # 架构文档导航
├── 1-introduction-引言.md      # 架构文档目的和变更历史
├── 2-high-level-architecture-宏观架构.md  # 系统整体架构和设计模式
├── 3-tech-stack-技术栈.md      # 技术选型
├── 4-components-组件详解.md     # 各组件详细设计
└── 5-testing-strategy-测试策略.md  # 测试方法和策略
```

**架构原则**:
- 脚本驱动（Python Core）
- LLM 协作（Agent Workflow）
- 模板化设计（Template Engine）

---

#### 3. [Sprint Progress - 敏捷进度跟踪](SPRINT_PROGRESS.md)
**目的**: 跟踪 Sprint 进度、Story 状态和项目度量  
**维护者**: SM (Scrum Master) + PO  
**何时使用**:
- 查看当前 Sprint 状态
- 了解 Story 完成情况
- 查看 Velocity 和质量指标
- 回顾 Retrospective 洞察

**关键内容**:
- Epic & Story 详细跟踪
- Velocity & Burn-Down Chart
- Quality Metrics
- Known Issues & Tech Debt
- Release History
- Retrospective Insights

**更新频率**: 每个 Story 完成时 + Sprint 结束时

---

#### 4. [CHANGELOG - 版本变更历史](../CHANGELOG.md)
**目的**: 记录每个版本的变更、决策和度量  
**维护者**: Tech Writer + SM  
**何时使用**:
- 查看版本历史
- 了解功能演进
- 查看技术决策记录

**格式规范** (B-MAD):
- 🔨 BUILD - 新增功能和改进
- 📊 MEASURE - 质量指标和性能数据
- 🔍 ANALYZE - 关键洞察和经验总结
- ✅ DECIDE - 决策记录和理由

---

### 📋 辅助文档

#### [Brief - 项目简报](brief.md)
**目的**: 快速概览项目背景和核心价值  
**适合**: 新成员入职、快速介绍

#### [Release Notes](../RELEASE_NOTES_v1.2.0.md)
**目的**: 详细的发布说明和升级指南  
**适合**: 用户升级、功能介绍

#### [Release Checklist](../RELEASE_CHECKLIST_v1.2.0.md)
**目的**: 发布流程检查清单  
**适合**: Release Manager、发布操作

---

## 🔄 文档更新流程

### 何时更新文档

| 事件 | 需要更新的文档 | 负责人 |
|-----|---------------|--------|
| Sprint 开始 | SPRINT_PROGRESS.md (新建 Epic/Stories) | SM + PO |
| Story 完成 | SPRINT_PROGRESS.md (更新状态) | SM |
| Sprint 结束 | SPRINT_PROGRESS.md (Retrospective), CHANGELOG.md | SM + Tech Writer |
| 版本发布 | CHANGELOG.md, Release Notes | Tech Writer + Release Manager |
| 架构变更 | architecture/ 相关文档 | Architect |
| 需求变更 | prd.md | PM |

### 文档质量检查清单

- [ ] 遵循 B-MAD 格式规范
- [ ] 包含必要的度量指标
- [ ] 决策有清晰的理由
- [ ] 链接准确无失效
- [ ] 日期和版本号正确
- [ ] 语言清晰简洁

---

## 🗂️ 文档分类体系

### 按角色分类

**Product Owner**:
- PRD (产品需求)
- Sprint Progress (进度监控)
- Brief (项目简报)

**Architect**:
- Architecture (架构设计)
- Tech Stack (技术选型)
- Testing Strategy (测试策略)

**Scrum Master**:
- Sprint Progress (进度跟踪)
- CHANGELOG (版本历史)

**Developer**:
- Architecture/Components (组件实现)
- Tech Stack (技术栈)

**QA**:
- Testing Strategy (测试策略)
- Sprint Progress/Quality Metrics (质量指标)

---

## 📊 B-MAD 方法论指南

### Build-Measure-Analyze-Decide 循环

```
┌─────────────────────────────────────────┐
│  🔨 BUILD                               │
│  - 开发新功能                            │
│  - 实现 Story                           │
│  - 创建交付物                            │
└────────────┬────────────────────────────┘
             ↓
┌─────────────────────────────────────────┐
│  📊 MEASURE                             │
│  - 测试通过率                            │
│  - 性能指标                              │
│  - 代码质量                              │
└────────────┬────────────────────────────┘
             ↓
┌─────────────────────────────────────────┐
│  🔍 ANALYZE                             │
│  - What Worked Well                     │
│  - What Could Improve                   │
│  - Key Insights                         │
└────────────┬────────────────────────────┘
             ↓
┌─────────────────────────────────────────┐
│  ✅ DECIDE                              │
│  - 决策记录                              │
│  - Rationale (理由)                     │
│  - Impact (影响)                        │
└─────────────────────────────────────────┘
```

### 在文档中应用 B-MAD

**CHANGELOG 示例**:
```markdown
## [1.2.0] - 2025-10-04

#### 🔨 BUILD
- 新增 batch 命令
- 新增 analyze 命令

#### 📊 MEASURE
- Test Pass Rate: 100%
- Performance: 10-15 files/sec

#### 🔍 ANALYZE
- 命令行架构重构效果好
- 需要添加单元测试

#### ✅ DECIDE
- 立即发布 v1.2.0
- Story 2.3 & 2.4 推迟到 v1.3.0
```

---

## 🔍 快速查找

### 我想知道...

| 问题 | 查看文档 | 章节 |
|-----|---------|------|
| 项目目标是什么？ | PRD | 1. Goals and Background |
| 有哪些功能？ | PRD | 2. Requirements |
| 系统怎么设计的？ | Architecture | 2. High-Level Architecture |
| 用什么技术栈？ | Architecture | 3. Tech Stack |
| 当前进度如何？ | Sprint Progress | Sprint 概览 |
| 还有什么待做？ | Sprint Progress | Pending Stories |
| 有哪些已知问题？ | Sprint Progress | Known Issues |
| 版本变更历史？ | CHANGELOG | 按版本查看 |

---

## 📝 文档维护承诺

### 文档原则
1. **及时更新** - 变更发生时立即更新
2. **清晰简洁** - 避免冗余和模糊
3. **数据驱动** - 包含度量和证据
4. **决策透明** - 记录决策过程和理由
5. **易于导航** - 清晰的结构和链接

### 文档规范
- 遵循 B-MAD 方法论
- 使用 Markdown 格式
- 包含必要的元数据（日期、版本、维护者）
- 保持链接有效
- 定期审查和更新

---

## 🤝 贡献指南

如需更新文档：
1. 确认负责人和更新范围
2. 遵循文档格式规范
3. 更新相关链接和索引
4. 标注更新日期
5. 通知相关团队成员

---

**文档维护团队**: 如有问题或建议，请联系 Product Owner

**最后审查**: 2025-10-04 by PO

