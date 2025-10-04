# 系统重构与再生指南 (Architect's Edition, V3.1)

**撰写者**: architect (架构师)

**核心理念**: "只修复根源，然后再生一切 (Fix the Root, then Regenerate Everything)"。

**触发时机**: 当 `docs/system_integrity_checklist.md` 的校验结论为 `FAIL` 时。

## 工作流：诊断 -> 修复 -> 再生 (Diagnose -> Fix -> Regenerate)

### 第1步：架构师主导的诊断 (Architect-led Diagnosis)

**操作**: `architect` 与 `po` 共同启动一次“架构会诊”，根据 `system_integrity_checklist.md` 的失败项，从**架构层面**定位问题根源。

- **若失败在 1. 配置完整性**:
    
    - **架构师解读**: 这是系统的“大脑”配置错误。
        
    - **指令**: 命令 `analyst` 或您（导师）修复 `config/system_config.md` 中的逻辑或内容错误。
        
- **若失败在 2. 数据模型与驱动链**:
    
    - **架构师解读**: 这是系统的“链接层”故障，表明实体索引与实体数据之间失去了同步。这是**严重问题**。
        
    - **指令**: 命令 `po` 根据失败的具体子项，精确修复 `docs/cohort_registry.md` 或 `cohort_data/` 目录中的不一致之处。
        
- **若失败在 3. 工作流完整性**:
    
    - **架构师解读**: 这是系统的“行为”定义出现了问题，命令手册或工作流设计已与当前架构脱节。
        
    - **指令**: 命令 `architect` 或 `pm` 修复 `docs/architecture.md` 中的工作流图或 `GUIDE_TEACHER.md` 中的命令。
        
- **若失败在 4. 故事与开发流程完整性 [新增]**:
    
    - **架构师解读**: 这是系统的“**执行层**”故障。表明从需求到开发执行的链条断裂，或开发单元自身状态不合法。
        
    - **指令**: 命令 `sm` (Scrum Master) 重新生成有问题的 `docs/stories/` 文件，或手动修复故事的状态/关联错误。
        
- **若失败在 5. 新需求影响评估**:
    
    - **架构师解读**: 这是系统的**“设计原则”层面的根本性失败**。
        
    - **指令**: **必须立即停止所有其他修复工作**。`architect` 必须与您（导师）共同召开一次紧急设计会议，从战略层面重新审视并修改 `docs/prd.md` 和 `docs/architecture.md` 的核心设计。
        

### 第2步：根源修复与验证 (Root Fix & Validation)

**操作**: 根据诊断结果，由指定的角色**只修改最根源的文件**。

**验证循环**: `po` **反复执行** `system_integrity_checklist.md`，直到所有检查项 **全部通过 (PASS)**。`architect` 负责监督此过程。

### 第3步：一键再生 (One-Click Regeneration)

> **[!] 架构师协议**: 一旦核心蓝图通过了健康检查，为了保证系统的绝对纯净和一致性，我们必须废弃所有旧的派生文档，并执行一次完整的“系统再生”。

请按顺序执行再生命令，重建一个100%健康的系统。