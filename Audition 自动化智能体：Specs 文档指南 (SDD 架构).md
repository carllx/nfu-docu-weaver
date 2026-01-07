# Audition 自动化智能体：Kiro SDD 指南 (v4.0 - Kiro 集成增强版)

## 0. Kiro 核心哲学：架构级确定性

在 Kiro IDE 中，严禁“Vibe Coding”。本项目采用 **Spec-Driven Development (SDD)** 模式。智能体在执行任何 JSX 前，必须通过 Kiro 的 **Steering (导向文件)** 获得 Audition 的物理规律约束。

## 1. Kiro 工作空间配置 (Workspace Config)

### 1.1 目录结构 (Strict Alignment)

项目必须严格遵循以下 Kiro 约定，以便触发 Kiro 的自动上下文关联：

```
[项目根目录]/
├── .kiro/
│   ├── steering/        # 全局导向：定义 Audition 的物理法则（长期生效）
│   │   ├── host-rules.md     # 宿主约束 (ES3, Duck Typing)
│   │   └── safety-guards.md  # 安全准则 (Backup, Confirm)
│   ├── specs/           # 任务定义：针对具体功能的 SDD 文档（按需激活）
│   │   └── silence-sweeper.md
│   ├── typings/         # 世界模型 (audition.d.ts)
│   └── hooks/           # Kiro Hooks：触发自动化逻辑
└── backups/             # 容灾目录
```

## 2. Steering：建立“宿主导向”系统

为了防止智能体在每个对话中重复犯错，必须在 `.kiro/steering/host-rules.md` 中固化以下准则。Kiro 会在每次推理前将其作为静态上下文加载。

### 2.1 强制性的 Duck Typing 准则

智能体生成的检测函数必须符合 Kiro 的“防御性探测”标准，以对抗 Audition 的 Native Proxy：

```
// ✅ Kiro 推荐的宿主对象校验模式
function validateHostObject(obj, requiredProps) {
    if (!obj) return false;
    for (var i = 0; i < requiredProps.length; i++) {
        if (!obj.hasOwnProperty(requiredProps[i])) return false;
    }
    return true;
}
```

## 3. Kiro SDD 任务定义 (Spec Structure)

每一份 `.kiro/specs/*.md` 必须遵循 Kiro 的三段式交付逻辑：

### 第一阶段：需求分析 (Demand Analysis)

- **状态检查**：明确 `activeDocument.path` 必须为非空。
    
- **模式确认**：明确是在波形模式还是多轨模式。
    

### 第二阶段：系统设计 (System Design)

- **路径解析逻辑**：强制要求使用 `Folder(path).fsName` 进行绝对路径计算。
    
- **库依赖声明**：若涉及 JSON，强制声明 `// @include "../.kiro/vendor/json2.js"`。
    

### 第三阶段：任务拆解 (Task Decomposition)

- **备份子任务**：调用 `backupAndVerify()` 逻辑。
    
- **遍历子任务**：使用 `selectedTracks[0]` 降级策略。
    
- **回滚子任务**：定义 `app.beginUndoGroup()` 标签名。
    

## 4. Kiro Hooks：自动化安全闸门

在 Kiro 的 `Agent Hooks` 面板中配置以下自动化，以弥补 ExtendScript 的原生缺陷：

|   |   |   |
|---|---|---|
|**触发器 (Trigger)**|**动作类型 (Action)**|**提示词/脚本指令 (Instructions)**|
|**On Agent Stop**|Agent Prompt|"审查生成的 JSX 是否含有 `let/const`。若有，强制改为 `var` 并重新生成。"|
|**On File Save**|Shell Command|`node ./tools/lint_extendscript.js ${FILE_PATH}` (外部 Linter 校验)|
|**On Prompt Submit**|Add to Prompt|"在执行任何删除或重命名操作前，自动插入 `confirm()` 代码块。"|

## 5. 灾难恢复机制 (Kiro Restore Tool)

当 Kiro 驱动的脚本导致宿主假死或工程损坏时，执行以下“Kiro 确定性恢复”命令。Specs 应包含此工具的说明：

```
// .kiro/scripts/disaster_recovery.jsx
function kiroHardRestore(damagedPath, backupPath) {
    var backup = new File(backupPath);
    if (backup.exists) {
        app.activeDocument.close(SaveOptions.NOSAVECHANGES);
        backup.copy(new File(damagedPath));
        alert("[KIRO] 工程已从最近的验证备份中强制恢复。");
    }
}
```

## 6. 定义完成 (DoD Checklist for Kiro)

- [ ] **Steering 校验**：代码不含幻觉 API，符合 `host-rules.md`。
    
- [ ] **路径校验**：所有文件操作均基于绝对路径，支持未保存工程报警。
    
- [ ] **备份强度**：`backups/` 目录下已生成同名文件，且大小偏差 < 1KB。
    
- [ ] **UI 阻断**：复杂操作前存在 `confirm()` 调用。
    

## 7. 给 Kiro 的初始化提示词 (Bootstrapping)

> “你现在是一个运行在 Kiro IDE 中的 Audition 专家。请首先解析 `.kiro/steering/` 目录下的所有准则。这些文件构成了你在本项目中的物理规律。当你准备编写脚本时，请遵循 `.kiro/specs/` 中特定任务的 SDD 定义。**严禁**跳过 `backupAndVerify` 步骤。生成的每一段 JSX 必须自包含错误捕获并符合 ES3 规范。”