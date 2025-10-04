## 5. 目录结构与完整性 (Directory Structure & Integrity)

### 5.1 源文件树 (Source Tree)

```
/
├── 📄 TEACHER_GUIDE.md         # 导师的命令驱动操作手册
│
├── 📂 config/
│   └── 📄 system_config.md      # [引擎] 学年全局配置文件 (时间节点, 专业要求)
│
├── 📂 docs/
│   ├── 📄 prd.md                 # 原始需求文档 (合并视图)
│   ├── 📂 prd/                   # PRD分片 (工作目录)
│   ├── 📄 architecture.md        # 原始架构文档 (合并视图)
│   ├── 📂 architecture/          # 架构分片 (工作目录)
│   ├── 📄 cohort_registry.md     # [中枢] 所有实体的中央索引
│   ├── 📂 stories/               # [执行单元] 存放由SM代理生成的、可独立执行的用户故事
│   └── 📄 system_integrity_checklist.md
│
├── 📂 cohort_data/
│   ├── 📂 students/
│   │   └── 📂 [Student_ID_Name]/      # [实体知识库]
│   │       ├── 📄 index.md             # 入口：学生仪表盘
│   │       ├── 📂 _research/           # 素材：个人研究、文献
│   │       ├── 📂 _drafts/             # 素材：论文/创作草稿
│   │       └── 📂 _feedback_archive/   # 素材：反馈归档
│   │
│   ├── 📂 creative_projects/
│   │   └── 📂 [Project_ID_Name]/      # [实体知识库]
│   │       ├── 📄 index.md             # 入口：项目仪表盘
│   │       ├── 📂 _research/           # 素材：文献研究
│   │       ├── 📂 _drafts/             # 素材：草稿版本
│   │       ├── 📂 _assets/             # 素材：视觉资产
│   │       └── 📂 _feedback_archive/   # 素材：反馈归档
│   │
│   └── 📂 theses/
│       └── 📂 [Thesis_ID_Name]/       # [实体知识库]
│           ├── 📄 index.md             # 入口：论文仪表盘
│           ├── 📂 _research/           # 素材：文献综述
│           ├── 📂 _drafts/             # 素材：章节草稿
│           └── 📂 _feedback_archive/   # 素材：反馈归档
│
└── 📂 templates/
    └── 📄 feedback-report.md     # 反馈报告模板
```

### 5.2 架构完整性校验 (Architecture Integrity)

本架构的长期稳健性依赖于 `docs/system_integrity_checklist.md`。它不仅仅是一个文档，更是本系统的“单元测试”和“集成测试”。在对任何核心文件进行重大修改后，必须由`po`代理执行此清单，以确保系统的设计完整性未被破坏。

- **触发时机**: 对任何核心文件 (`prd.md`, `architecture.md`, `system_config.md`) 进行重大修改后。
    
- **执行者**: `po` (产品负责人) 代理。
    
- **目的**: 确保任何变更都不会破坏系统的核心设计原则（如配置驱动、实体关系化），保证数据模型和工作流的一致性。通过此机制，我们可以安全地对系统进行迭代，而无需担心引入破坏性的"架构腐化"。