# 文档清理执行计划

**日期**: 2025-10-05  
**目标**: 清理过时、冗余、临时性文档，保持项目清洁

---

## 🗑️ 需要删除的文档

### 临时性文档（已完成任务）

1. ✅ **BMAD_COMPLIANCE_REPORT.md** - 临时合规报告
2. ✅ **CLEANUP_CHECKLIST.md** - 旧的清理检查清单
3. ✅ **GIT_COMMIT_CHECKLIST.md** - 临时提交检查清单
4. ✅ **PHASE_1_TO_4_COMPLETION_REPORT.md** - Phase 1-4 完成报告（已归档到 STORY）
5. ✅ **PHASE_5_TEST_COMPLETION_REPORT.md** - Phase 5 测试报告（已归档到 STORY）
6. ✅ **STORY_2.7_PHASE_0-5_SUMMARY.md** - Story 2.7 总结（内容已整合）
7. ✅ **PROJECT_COMPLETION_SUMMARY_v1.4.0.md** - v1.4.0 完成总结（已有新版本）

### Story 2.7 临时文档（内容已整合到最终文档）

8. ✅ **docs/ARCHITECT_DELIVERABLES_STORY_2.7.md** - 架构师交付清单
9. ✅ **docs/DEV_NOTIFICATION_STORY_2.7.md** - 开发者通知
10. ✅ **docs/DEV_TASK_STORY_2.7.md** - 开发者任务清单
11. ✅ **docs/EXECUTIVE_SUMMARY_STORY_2.7.md** - 执行摘要
12. ✅ **docs/QA_DELIVERABLES_STORY_2.7.md** - QA 交付清单
13. ✅ **docs/QA_TEST_PREP_STORY_2.7.md** - QA 测试准备
14. ✅ **docs/architecture/README_STORY_2.7.md** - Story 2.7 架构文档索引

### 过时的日期版本文档（已有新版本）

15. ✅ **docs/PO_ACTION_SUMMARY_2025-10-04.md** - 10-04 行动总结（已有 10-05）
16. ✅ **docs/PO_EXECUTIVE_SUMMARY_2025-10-05.md** - 执行摘要（内容已整合）
17. ✅ **docs/PO_TASK_PLAN_2025-10-05.md** - 任务计划（已执行完毕）
18. ✅ **PROJECT_STATUS_SUMMARY_2025-10-05.md** - 状态总结（内容已过时）

### 旧版本发布文档（归档）

19. ✅ **RELEASE_CHECKLIST_v1.2.0.md** - v1.2.0 发布检查清单
20. ✅ **RELEASE_NOTES_v1.2.0.md** - v1.2.0 发布说明
21. ✅ **RELEASE_NOTES_v1.3.0.md** - v1.3.0 发布说明

### 重复或冗余文档

22. ✅ **docs/DOCUMENTATION_UPDATE_SUMMARY.md** - 文档更新总结（已有新版本）
23. ✅ **docs/SPRINT3_PLAN.md** - Sprint 3 计划（已完成，内容在 SPRINT_PROGRESS）

---

## 📦 需要归档的文档（移动到 archive/）

### v1.4.0 相关文档

1. **docs/ARCHITECT_REVIEW_v1.4.0.md**
2. **docs/PO_ACCEPTANCE_v1.4.0.md**
3. **docs/QA_SIGNOFF_v1.4.0.md**
4. **docs/RELEASE_APPROVAL_v1.4.0.md**
5. **docs/TECH_REVIEW_SCHEMA_VALIDATOR.md**

### Schema Validator 设计文档（移到 archive/schema-validator/）

6. **docs/architecture/schema-validator-design.md**
7. **docs/architecture/schema-validator-implementation-example.py**

---

## ✅ 需要保留的重要文档

### 核心文档
- ✅ README.md (根目录) - 项目主入口
- ✅ CHANGELOG.md - 版本历史
- ✅ requirements.txt - 依赖管理

### 架构文档
- ✅ ARCHITECTURE_REFACTORING_SUMMARY.md - 重构总结
- ✅ ARCHITECTURE_V2_QUICK_START.md - 快速上手
- ✅ docs/AGENT_ARCHITECTURE_SUMMARY.md - Agent 架构
- ✅ docs/ARCHITECTURE_REFACTORING_REPORT.md - 重构报告
- ✅ docs/architecture/* (除需归档的外)

### 流程文档
- ✅ docs/README.md - 文档导航
- ✅ docs/prd.md - 产品需求
- ✅ docs/brief.md - 项目简报
- ✅ docs/SPRINT_PROGRESS.md - Sprint 进度
- ✅ docs/QA_QUICK_START.md - QA 快速上手
- ✅ docs/DOCUMENTATION_UPDATE_CHECKLIST_2025-10-05.md - 更新检查清单

### Agent 和工具
- ✅ agents/lesson-weaver.md - Agent 指令
- ✅ tools/* - 工具脚本
- ✅ schemas/* - Schema 文件
- ✅ templates/* - 模板文件

---

## 🎯 执行步骤

### Step 1: 创建归档目录
```bash
mkdir -p docs/archive/v1.4.0
mkdir -p docs/archive/schema-validator
mkdir -p docs/archive/story-2.7
mkdir -p docs/archive/release-notes
```

### Step 2: 归档文档（23个保留但归档）
```bash
# v1.4.0 相关
mv docs/ARCHITECT_REVIEW_v1.4.0.md docs/archive/v1.4.0/
mv docs/PO_ACCEPTANCE_v1.4.0.md docs/archive/v1.4.0/
mv docs/QA_SIGNOFF_v1.4.0.md docs/archive/v1.4.0/
mv docs/RELEASE_APPROVAL_v1.4.0.md docs/archive/v1.4.0/
mv docs/TECH_REVIEW_SCHEMA_VALIDATOR.md docs/archive/v1.4.0/

# Schema Validator 设计
mv docs/architecture/schema-validator-design.md docs/archive/schema-validator/
mv docs/architecture/schema-validator-implementation-example.py docs/archive/schema-validator/

# 旧版本发布说明
mv RELEASE_CHECKLIST_v1.2.0.md docs/archive/release-notes/
mv RELEASE_NOTES_v1.2.0.md docs/archive/release-notes/
mv RELEASE_NOTES_v1.3.0.md docs/archive/release-notes/
```

### Step 3: 删除临时文档（23个删除）
```bash
# 根目录临时文档
rm BMAD_COMPLIANCE_REPORT.md
rm CLEANUP_CHECKLIST.md
rm GIT_COMMIT_CHECKLIST.md
rm PHASE_1_TO_4_COMPLETION_REPORT.md
rm PHASE_5_TEST_COMPLETION_REPORT.md
rm STORY_2.7_PHASE_0-5_SUMMARY.md
rm PROJECT_COMPLETION_SUMMARY_v1.4.0.md
rm PROJECT_STATUS_SUMMARY_2025-10-05.md

# Story 2.7 临时文档
rm docs/ARCHITECT_DELIVERABLES_STORY_2.7.md
rm docs/DEV_NOTIFICATION_STORY_2.7.md
rm docs/DEV_TASK_STORY_2.7.md
rm docs/EXECUTIVE_SUMMARY_STORY_2.7.md
rm docs/QA_DELIVERABLES_STORY_2.7.md
rm docs/QA_TEST_PREP_STORY_2.7.md
rm docs/architecture/README_STORY_2.7.md

# 过时的日期版本文档
rm docs/PO_ACTION_SUMMARY_2025-10-04.md
rm docs/PO_EXECUTIVE_SUMMARY_2025-10-05.md
rm docs/PO_TASK_PLAN_2025-10-05.md

# 重复文档
rm docs/DOCUMENTATION_UPDATE_SUMMARY.md
rm docs/SPRINT3_PLAN.md
```

### Step 4: 清理输出目录
```bash
# 清理测试输出
rm -rf output/test_progress/
rm output/final_test.docx
rm output/FINAL.docx
rm output/fixed.docx
```

---

## 📊 清理效果

### 删除统计
- 🗑️ 删除临时文档: 23 个
- 📦 归档历史文档: 10 个
- 🧹 清理输出文件: 7 个
- **总计**: 40 个文件/目录

### 保留统计
- ✅ 核心文档: 3 个
- ✅ 架构文档: 4 个 (+ architecture/ 目录)
- ✅ 流程文档: 7 个
- ✅ 代码和配置: agents/, tools/, schemas/, templates/

### 清理后的项目结构
```
nfu-docu-weaver/
├── README.md                          # 主入口
├── CHANGELOG.md                       # 版本历史
├── ARCHITECTURE_V2_QUICK_START.md     # 快速上手
├── ARCHITECTURE_REFACTORING_SUMMARY.md # 重构总结
├── requirements.txt
├── pytest.ini
├── run_tests.sh
├── run_schema_tests.sh
├── agents/
│   └── lesson-weaver.md               # Agent 指令
├── courses/
│   └── course-001-字体设计基础/
├── docs/
│   ├── README.md                      # 文档导航
│   ├── prd.md
│   ├── brief.md
│   ├── SPRINT_PROGRESS.md
│   ├── QA_QUICK_START.md
│   ├── AGENT_ARCHITECTURE_SUMMARY.md
│   ├── ARCHITECTURE_REFACTORING_REPORT.md
│   ├── DOCUMENTATION_UPDATE_CHECKLIST_2025-10-05.md
│   ├── architecture/
│   │   ├── index.md
│   │   ├── 1-introduction-引言.md
│   │   ├── 2-high-level-architecture-宏观架构.md
│   │   ├── 3-tech-stack-技术栈.md
│   │   ├── 4-components-组件详解.md
│   │   ├── 5-testing-strategy-测试策略.md
│   │   ├── 6-schema-driven-architecture.md
│   │   ├── 7-lesson-weaver-integration.md
│   │   ├── 8-agent-driven-architecture-v2.md
│   │   └── ADR-001-clean-architecture-refactoring.md
│   └── archive/                       # 新增归档目录
│       ├── v1.4.0/
│       ├── schema-validator/
│       └── release-notes/
├── output/
│   ├── batch/
│   └── lesson1.docx
├── schemas/
├── templates/
└── tools/
```

---

## ⚠️ 注意事项

1. **备份确认**: 在执行删除前，确认已有 Git 备份
2. **归档目录**: 创建 `docs/archive/` 保存历史文档，便于未来参考
3. **测试验证**: 清理后运行测试，确保无影响
4. **文档更新**: 更新 `docs/README.md` 移除已删除文档的链接

---

## ✅ 验证清单

清理完成后检查：

- [ ] Git status 确认所有删除的文件
- [ ] 运行测试套件（`./run_tests.sh`）
- [ ] 检查 docs/README.md 中的链接
- [ ] 确认归档目录结构正确
- [ ] 验证核心文档完整性

---

**预计时间**: 15 分钟  
**风险**: 低（所有删除的文档都在 Git 历史中）  
**建议**: 先执行归档，再执行删除

