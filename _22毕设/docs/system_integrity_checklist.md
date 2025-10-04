# 指导管理系统完整性校验清单 (Guidance System Integrity Checklist)

**版本**: 1.1

**执行者**: po (产品负责人)

**触发时机**: 当对核心系统文档 `docs/prd.md`, `docs/architecture.md`, 或 `config/system_config.md` 进行任何重大修改后。

**目的**: 确保任何变更都没有破坏系统设计的核心原则和数据完整性，扮演着系统“单元测试”的角色。

## 1. 配置完整性校验 (Configuration Integrity)

- [ ] `config/system_config.md` 是否包含了所有必需的全局信息（时间节点、学术要求）？
    
- [ ] `config/system_config.md` 中的“项目方向(Track)”定义是否清晰，并且包含了所有必需的任务项？
    
- [ ] 系统的核心文档中是否没有任何“硬编码”的年份或特定学生姓名等易变信息？
    

## 2. 数据模型与驱动链完整性校验 (Data Model & Drive Chain Integrity)

- [ ] `docs/cohort_registry.md` 中的所有实体ID是否唯一且遵循标准格式？
    
- [ ] **[驱动链检查]** `docs/cohort_registry.md` 中的所有实体链接是否都能正确指向 `cohort_data/` 目录中一个实际存在的、对应的 `index.md` 文件？
    
- [ ] **[孤儿文件检查]** `cohort_data/` 目录中是否存在任何未在 `docs/cohort_registry.md` 中注册的“孤儿”实体目录？
    
- [ ] 小组项目的成员关系是否在 `docs/cohort_registry.md` 中被清晰、正确地定义，并且所有成员ID都有效？
    

## 3. 工作流完整性校验 (Workflow Integrity)

- [ ] `docs/architecture.md` 中定义的“师生反馈工作流”和“开发与故事生成工作流”是否依然清晰可行？
    
- [ ] `GUIDE_TEACHER.md` 中的操作指令是否与当前系统架构保持一致，没有失效的命令？
    
- [ ] AI代理执行核心任务所需的所有输入（如模板路径）是否存在且路径正确？
    

## 4. 故事与开发流程完整性校验 (Story & Development Workflow Integrity) **[新增]**

- [ ] `docs/stories/` 目录是否存在？
    
- [ ] **[故事状态校验]** `docs/stories/` 目录下的所有故事文件的 `Status` 字段，其值是否为 `prd.md` 中定义的合法状态之一（如 `Draft`, `Approved`, `InProgress`, `Review`, `Done`）？
    
- [ ] **[父级关联校验]** 每个故事文件是否都能追溯到一个存在于 `docs/prd/` 目录下的父级Epic？
    
- [ ] **[“完成”定义校验]** `prd.md` 中定义的系统级“完成的定义 (Definition of "Done")”是否清晰且可被AI代理执行？
    

## 5. 新需求影响评估 (New Requirement Impact Assessment)

> **[!] 核心检查点**: 此部分用于评估新需求是否会破坏系统设计的核心原则。

- [ ] **问题**: 新增的需求，是可以通过修改 `config/system_config.md` 来满足，还是需要修改 `docs/architecture.md` 的核心数据结构？
    
    - **评估**: [ ] 仅需配置 / [ ] 需重构架构
        
- [ ] **问题**: 新增的需求，是否会破坏“实体关系化”的核心原则？
    
    - **评估**: [ ] 是 / [ ] 否
        
- [ ] **问题**: 新增的需求，是否会导致 `GUIDE_TEACHER.md` 中的某个核心命令失效或需要重大修改？
    
    - **评估**: [ ] 是 / [ ] 否
        

### 校验结论:

- [ ] **通过 (PASS)**: 系统设计完整性得以保持。
    
- [ ] **警告 (WARN)**: 发现轻微不一致，建议进行修订。
    
- [ ] **失败 (FAIL)**: 发现重大设计冲突，必须在实施新需求前，启动 `GUIDE_REFACTORING_AND_REGENERATION.md` 中定义的重构流程。