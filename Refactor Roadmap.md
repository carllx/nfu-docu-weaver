# FlexDub 架构重构路线图 (v2 -> Universal Agent)

## 阶段 1: 基础设施搭建 (Infrastructure)

目标：建立 Agent 的认知基础和与 Python 代码交互的标准接口。

- [ ] **1.1 初始化认知文件**
    
    - 创建 `.agent/config.md`。
        
    - 内容：提取 `README.md` 和架构文档的核心信息，定义项目结构、关键目录用途。
        
    - 关键点：明确告诉 Agent "不要直接修改 output 文件，使用工具操作"。
        
- [ ] **1.2 建立 MCP 服务器框架**
    
    - 创建目录 `flexdub/mcp/`。
        
    - 创建 `flexdub/mcp/server.py`。
        
    - 实现基础的 MCP Server 类（使用 `fastmcp` 或标准 `stdio` 通信模式）。
        
    - 依赖：确保 `requirements.txt` 支持 MCP 相关库（如需）。
        
- [ ] **1.3 实现核心工具: `ProjectAnalyzer`**
    
    - **迁移逻辑**: 从 `agent_manual_v2.md` 的 "2. 决策矩阵" 中提取逻辑。
        
    - **新建代码**: `flexdub/core/analyzer.py`。
        
    - **功能**:
        
        - `get_video_metrics(path)`: 返回时长、音频密度(CPM)。
            
        - `recommend_mode(metrics)`: 包含原文档中 "CPM > 300 -> Mode B" 的硬逻辑。
            
    - **MCP 暴露**: 在 `server.py` 中注册 `analyze_project` 工具。
        

## 阶段 2: 技能层迁移 (Skill Migration)

目标：将 Markdown 中的伪代码转化为确定性的 Python 技能包。

- [ ] **2.1 技能: 语义精炼 (Semantic Refinement)**
    
    - 创建目录 `.agent/skills/semantic_refine/`。
        
    - 创建 `SKILL.md`: 描述何时使用（"翻译生硬"、"需要断句优化"）。
        
    - **迁移逻辑**:
        
        - 从 v2 手册提取 "术语保留规则" 到 `.agent/skills/semantic_refine/rules.json` (或 `.py` 常量)。
            
        - 编写 `refine.py`: 封装调用 LLM 进行文本优化的逻辑（如果原逻辑在 core 中，则在此引用）。
            
- [ ] **2.2 技能: 自动化配音闭环 (Auto-Dub Workflow)**
    
    - 创建目录 `.agent/skills/auto_dub/`。
        
    - **迁移逻辑**: 从 v2 手册提取 "3.1.2 强制 QA 环节" 和 "8. 故障排除"。
        
    - **核心代码**: 在 `flexdub/pipelines/workflow.py` 中实现 `run_dubbing_loop()`。
        
        - 必须包含 `try...except` 块。
            
        - 必须包含 `while not qa_passed` 循环。
            
    - **MCP 暴露**: 注册 `run_auto_dub` 工具。
        
- [ ] **2.3 技能: 故障诊断 (Troubleshooting)**
    
    - 创建目录 `.agent/skills/diagnosis/`。
        
    - **迁移逻辑**: 将 `agent_manual_v2.md` 中所有的错误码对照表移动到此目录。
        
    - 创建 `diagnose.py`: 解析 `error_report.json`，返回人类可读的修复建议。
        

## 阶段 3: 清理与集成 (Cleanup & Integration)

目标：移除旧架构的脚手架，验证新架构。

- [ ] **3.1 验证 MCP 工具链**
    
    - 编写脚本 `scripts/test_mcp_tools.py`，模拟 Agent 调用 `analyze_project` 和 `run_auto_dub`。
        
    - 确保返回的是结构化 JSON 数据。
        
- [ ] **3.2 瘦身 Agent Manual**
    
    - 将 `agent_manual_v2.md` 重命名为 `agent_manual_legacy.md` (备份)。
        
    - 创建新的 `agent_manual_v3.md` (即 Prompt 中提到的 Thin Prompt)。
        
    - 内容仅包含：Role 定义、引用 `.agent/config.md`、以及简单的工具调用指引。
        
- [ ] **3.3 最终验收**
    
    - 模拟一个新项目路径。
        
    - 让 Agent 仅通过新的 `agent_manual_v3.md` 和 MCP 工具完成一次完整的 Mode A/B 决策和配音流程。
        

## 附录：迁移对照表

|                   |                                          |                |
| ----------------- | ---------------------------------------- | -------------- |
| **原 Markdown 章节** | **新架构位置**                                | **形式**         |
| 2. 决策矩阵           | `flexdub/core/analyzer.py`               | Python Code    |
| 3.1 标准工作流         | `flexdub/pipelines/workflow.py`          | Python Code    |
| 3.1.1 语义重构规范      | `.agent/skills/semantic_refine/SKILL.md` | Context/Prompt |
| 4.2 说话人标记         | `.agent/skills/semantic_refine/SKILL.md` | Context/Prompt |
| 7. 参数标准           | 工具 Docstrings / `pydantic` Models        | Code Schema    |
| 8. 故障排除           | `.agent/skills/diagnosis/`               | Knowledge Base |