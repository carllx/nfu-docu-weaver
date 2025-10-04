# 导师敏捷指导手册 (V3.1)

欢迎使用毕业创作与论文敏捷指导管理系统。请使用以下经过BMAD标准化的命令，来驱动您的指导工作。

## 阶段一：学年初始化 (Phase 1: Academic Year Initialization)

**目标**: 设置新学年的全局配置，为新一届学生的到来做准备。

1. **更新配置文件**:
    
    - **操作**: 打开 `config/system_config.md` 文件。
        
    - **内容**: 粘贴新学年的所有时间节点和各个专业方向（Track）的学术要求。
        
2. **清空并备份注册表**:
    
    - **操作**: 执行以下命令来安全地清空上一届的注册信息。
        

```
*po initialize-new-year --backup-previous
```
    

## 阶段二：学生与项目注册 (Phase 2: Student & Project Registration)

**目标**: 将所有学生、毕业创作和毕业论文信息录入系统，并建立它们之间的关系。

1. **注册一名新学生**:

```
*po add-entity --type student --id S_2026_04 --name "赵四"
```

2. **注册一个新的个人创作项目**:

```
*po add-entity --type creative-project --id CP_2026_A03 --name "交互影像《镜中城》" --track "交互影像" --members "S_2026_04"
```

3. **注册一篇新的个人论文**:

```
*po add-entity --type thesis --id T_2026_04 --name "《<镜中城>的交互叙事研究》" --author "S_2026_04"
```


## 阶段三：日常反馈与指导循环 (Phase 3: Daily Feedback & Guidance Loop)

**目标**: 对学生的提交物进行高效评审，并生成标准化的、可追溯的反馈报告。

1. **启动评审会话**:

```
*analyst brainstorm --context "收到 S_2026_01 提交的《心斋解牛》分镜草稿..."
```

1. **生成并自动归档反馈报告**:

```
# 为创作项目生成反馈
*pm create-doc student-feedback --entity-id CP_2026_A01 --template feedback-report.md

# 为论文生成反馈
*pm create-doc student-feedback --entity-id T_2026_01 --template feedback-report.md
```

1. **更新中央索引中的状态**:

```
*po update-status --entity-id CP_2026_A01 --status "分镜待修改"
```


## 阶段四：全局进度检查 (Phase 4: Global Progress Review)

**目标**: 快速了解所有学生和项目的宏观状态，以便及时发现风险。

1. **一键生成项目总览报告**:

```
*po generate-progress-report --output docs/reports/weekly_report_$(date +%Y-%m-%d).md
```


## **[新]** 阶段五：系统健康检查与重构 (Phase 5: System Health Check & Refactoring)

**目标**: 当系统行为不一致或核心设计变更后，验证系统完整性，并按需进行安全重构。

1. **执行健康检查**:

- **时机**: 当您对 `prd.md`, `architecture.md` 或 `config/system_config.md` 做出重要调整后。
	
- **操作**:
	

```
*po execute-checklist --checklist docs/system_integrity_checklist.md
```

- **说明**: `po` 代理将执行一次完整的系统诊断，包括静态文件检查和动态“驱动链”模拟，并输出 `PASS`, `WARN`, 或 `FAIL` 的结论。
	
1. **启动重构与再生流程**:

- **时机**: 当健康检查结果为 `FAIL` 时。
	
- **操作**:
	
	1. 请立即停止其他操作。
		
	2. 打开 `docs/refactoring_and_regeneration_guide.md` 文档。
		
	3. 严格遵循其中的“诊断 -> 修复 -> 再生”流程，与 `po` 和 `architect` 一起完成系统的安全重构。




---

## 阶段六：开发执行与故事管理 (Development Execution)

**目标**: 将已经规划好的需求 (Epics) 转化为可执行的开发任务 (Stories)，并驱动AI代理完成开发工作。这是将蓝图变为现实的核心阶段。

1. **准备工作区 (分隔文档)**:
    
    - **时机**: 在所有核心文档 (`prd.md`, `architecture.md`) 最终定稿后，开发开始前。
        
    - **说明**: 此操作将宏观的蓝图文件，拆分为AI代理更易于处理的、按Epic和章节划分的“施工指令包”。
        
    - **操作**:
        
        ```
        # 分隔需求文档
        *po shard-doc docs/prd.md prd
        
        # 分隔架构文档
        *po shard-doc docs/architecture.md architecture
        ```
        
2. **生成下一个开发任务 (生成故事)**:
    
    - **时机**: 当您准备启动下一个功能的开发时。
        
    - **说明**: `sm` (Scrum Master) 代理会自动从 `docs/prd/` 目录中找到下一个未完成的故事需求，并生成一个详细的、可执行的故事文件。
        
    - **操作**: **(请在IDE中开启一个新的、干净的聊天会话)**
        
        ```
        *sm create
        ```
        
    - **产出**: 在 `docs/stories/` 目录下生成一个新的故事文件，状态为 `Draft`。
        
3. **评审并批准任务 (批准故事)**:
    
    - **时机**: 故事生成后。
        
    - **说明**: 这是您的决策点。请打开新生成的故事文件，审查其内容。确认无误后，**手动将文件顶部的状态从 `Status: Draft` 修改为 `Status: Approved` 并保存**。AI代理只会执行被批准的故事。
        
4. **启动开发 (执行故事)**:
    
    - **时机**: 故事被批准后。
        
    - **说明**: 将已批准的故事内容交给`dev`代理，它将开始进行实际的开发工作（如创建、修改文件）。
        
    - **操作**: **(请再次开启一个新的、干净的聊天会话)**
        
        ```
        # 将故事文件的全部内容粘贴到命令后
        *dev [粘贴已批准的故事文件内容]
        ```

## 重构文档

### 1. 创建PRD
```
*pm create-doc prd --template system-prd-tmpl.yaml --context "all our conversations about system goals and requirements" --output docs/prd.md --language content:zh-CN,title:en --naming-standard BMAD
```

### 2. 创建系统架构
```
*architect create-doc architecture --template system-architecture-tmpl.yaml --context docs/prd.md --output docs/architecture.md --language content:zh-CN,title:en --naming-standard BMAD
```

### 3. 创建系统配置
```
*analyst create-doc system-config --context "the school requirements document you provided" --output config/system_config.md --language content:zh-CN,title:en --naming-standard BMAD
```

### 4. 创建学生群体注册表
```
*po create-doc cohort-registry --context "list of all students and projects" --output docs/cohort_registry.md --language content:zh-CN,title:en --naming-standard BMAD
```

### 5. 创建教师指导手册
```
*bmad-orchestrator create-doc teacher-guide --context docs/architecture.md --output docs/teacher_guide.md --language content:zh-CN,title:en --naming-standard BMAD
```

