## 4. 核心工作流 (Core Workflows)

本节定义了系统中最重要的自动化工作流。

### 4.1 师生反馈与指导循环 (Feedback & Guidance Loop)

这是系统最核心的日常工作流，它将一次完整的师生反馈过程自动化和结构化。

```
sequenceDiagram
    participant T as 导师 (Teacher)
    participant A as Analyst Agent
    participant P as PM Agent
    participant PO as PO Agent
    participant FS as 文件系统 (File System)

    T->>A: 1. 执行 `*analyst brainstorm` (提供上下文)
    activate A
    A-->>T: 2. 进行引导式讨论
    deactivate A

    T->>P: 3. 执行 `*pm create-doc student-feedback --entity-id [ID]`
    activate P
    P->>FS: 4. 读取 `templates/feedback-report.md`
    FS-->>P: 返回模板内容
    P->>P: 5. 结合讨论结果生成反馈报告
    P->>FS: 6. **写入**反馈到 `cohort_data/.../[ID_Name].md` 的反馈日志中
    FS-->>P: 确认写入成功
    P-->>T: 7. 通知报告已生成并归档
    deactivate P

    T->>PO: 8. 执行 `*po update-status --entity-id [ID] --status [NewStatus]`
    activate PO
    PO->>FS: 9. **读取并修改** `docs/cohort_registry.md`
    FS-->>PO: 确认更新成功
    PO-->>T: 10. 通知状态已在中央索引中更新
    deactivate PO
```

### 4.2 开发与故事生成工作流 (Development & Story Generation Workflow)

此工作流定义了从宏观需求到微观实现的核心开发流程，是系统价值创造的主线。

```
sequenceDiagram
    participant T as 导师
    participant PO as PO Agent
    participant SM as SM Agent
    participant DEV as DEV Agent
    participant FS as 文件系统

    T->>PO: 1. 执行 `*po shard-doc docs/prd.md prd`
    activate PO
    PO->>FS: 2. 读取 prd.md 并创建 `docs/prd/` 目录及分片文件
    deactivate PO

    T->>SM: 3. (新会话) 执行 `*sm create`
    activate SM
    SM->>FS: 4. 读取 `docs/prd/` 中下一个未完成的Story需求
    SM->>FS: 5. 在 `docs/stories/` 目录下创建新的Story文件 (e.g., 1.1.story.md)
    deactivate SM
    
    T->>T: 6. (手动) 评审Story文件, 将状态从 `Draft` 改为 `Approved`

    T->>DEV: 7. (新会话) 执行 `*dev` 并提供已批准的Story内容
    activate DEV
    DEV->>FS: 8. 根据Story指令创建/修改 `config/` 或 `cohort_data/` 中的文件
    DEV->>FS: 9. 更新Story文件状态为 `Review`
    deactivate DEV
```