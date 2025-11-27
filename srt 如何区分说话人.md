
从system-prompts-and-models-of-ai-tools 等顶尖 AI 编程工具的架构设计经验看, 我们应该如何优雅地架构一套**分层明确的认知架构（Cognitive Architecture）** 一个agent项目? 
用户完全通过 agent 交流, 由 agent 思考并执行特定的项目任务和功能, 里面应该有不同的脚本(封装成 API 风格的工具), 一些不同的 SOP工作任务流程经验流程或知识; 

  
## TASKs/Workflow
### 如何规划封装任务(或工作流) 以及子任务?

Structured Task State Management(结构化任务状态管理) 不要仅依赖对话历史（Context Window），而是维护一个独立的、结构化的**任务状态对象**。

**动态 Todo 列表 (Living Checklist):**
- **设计原则:** Agent 不应只在脑海中规划，而应使用工具显式地维护一个任务列表。这解决了 Agent 在长对话中“迷失方向”的问题。
- **案例参考 (Cursor):** 极其强调 `todo_write` 工具。Cursor 要求将隐性需求转化为结构化的 Todo 列表，并在每一步操作后更新状态（pending -> in_progress -> completed）。
- **案例参考 (Same.dev):** 使用 `.same/todos.md` 文件持久化跟踪进度，每次响应的开头和结尾都要更新它 。

### 明确“大脑”与“手”的分工（防止“假装执行”）

这是 Agent 最容易犯的错误（Hallucinated Execution）。**Bolt** 和 **Codex CLI** 的 Prompt 提供了极其严格的界限。

#### 1. 职责边界定义

- **大脑 (LLM)**：负责**意图识别、参数构造、流程编排、错误分析**。
    
    - _原则_：LLM 只能生成 JSON/XML 格式的工具调用请求，决不能自己在对话框里打印“Result: 42” (除非它是纯闲聊) 。
        
- **手 (Script/Tool)**：负责**确定性计算、副作用操作、数据处理**。
    
    - _原则_：凡是涉及正则匹配、数学运算 (>3位数)、文件修改、外部 API 请求，**必须**调用工具。
        

#### 2. 强制约束机制（Anti-Laziness Rules）

参考 **Bolt** 和 **Gemini CLI** 的防御性 Prompt 设计：

- **禁止手动计算**：明确指示“Do NOT use mental calculation. Use the `execute_python` tool” 。
    
- **禁止伪代码**：在修改文件时，必须提供完整内容或精确的搜索/替换块，禁止使用 `// ... rest of code` 占位符（除非工具支持 Lazy Apply） 。
    
- **验证闭环**：参考 **Qoder**，在每次修改代码后，**强制**自动调用 `get_problems` (Linter) 或测试工具进行验证，而不是假设修改成功 。
    

#### 3. 混合任务处理 (Hybrid Tasks)

- **Routing (路由模式)**：参考 **Kiro** 的 `Mode_Classifier` 。
    
    - 当用户输入进来时，先经过一个轻量级分类器：
        
        - **Chat Mode**: 纯语义任务（改写邮件、解释概念） -> 直接由 LLM 处理。
            
        - **Do/Act Mode**: 需要执行任务 -> 路由给 Tool-Use Agent。
            
        - **Plan Mode**: 复杂需求 -> 路由给 Architect Agent 生成 SOP。


### 分离创造与执行
如何明确“脑”与“手”的分工?

界定 LLM 和 脚本的职责边界，防止 Agent 试图用正则或数学公式去解决语义理解问题。有些确定性任务需要逻辑严密、数学计算或数据处理, 需要 agent 根据流程调用合适的脚本完成, 防止Agent 在对话框里“假装执行” ; 有些语义任务 (Semantic Task)：需要 LLM 的创造力, 例如改写或写作任务是由一个agent 不通过脚本完成的; 混合任务 (Hybrid Task)：以上两者的组合。 
  
## Tool - 手（工具）
工具不是散乱的文件的文件?

负责**确定性计算、副作用操作、数据处理**。_原则_：凡是涉及正则匹配、数学运算 (>3位数)、文件修改、外部 API 请求，**必须**调用工具。
参考 **Bolt** 和 **Gemini CLI** 的防御性 Prompt 设计：
- **禁止手动计算**, 明确指示“Do NOT use mental calculation. Use the `execute_python` tool” 。
- **禁止伪代码**：在修改文件时，必须提供完整内容或精确的搜索/替换块，禁止使用 `// ... rest of code` 占位符（除非工具支持 Lazy Apply） 。
- **验证闭环**：参考 **Qoder**，在每次修改代码后，**强制**自动调用 `get_problems` (Linter) 或测试工具进行验证，而不是假设修改成功 。
### Server
不要把脚本看作文件，而要看作**Server（服务）**
例如使用 MCP (Model Context Protocol) 思想，将脚本包装成标准服务 可以 让Agent 查询 list_tools 获得能力. 
 **MCP 的优势**：它解耦了“实现”与“调用”。Agent 不需要知道脚本是 Python 还是 Bash 写的，只需要知道 `inputSchema`（输入格式）。Windsurf 明确指出，当 Server 连接时，Agent 可以通过 `use_mcp_tool` 调用工具，通过 `access_mcp_resource` 读取数据 。

### Local Function

**更轻量的方案**：如果觉得标准 MCP Server（基于 SSE/Stdio）太重，可以采用 **“本地函数注册模式” (Local Function Registry)**。

- 参考 **Bolt** 或 **Replit** 的设计：它们直接将核心能力（如 `run_shell`, `edit_file`）定义为系统级 Prompt 中的 `namespace functions` 。
    
- **建议**：对于核心、高频、确定性的原子操作（读写文件、运行 shell），直接注入 System Prompt；对于业务级、复杂的脚本（如“生成周报”、“数据库迁移”），封装为 MCP Server。

## Reflect
同时这些都不是静态的, 是一套闭环的元认知架构（Meta-Cognitive Architecture）, 会在边执行任务过程中总结经验修复优化. 当前不同 解决方案中 有Knowledge, memory, experience 这些概念, 如何区分或应该更优雅地整合这些 , 有可维护的可迭代的科学规范, 允许持续地 create 或 update但不会出现不定式更新导致注意力分散. 

如果从大脑（规划与反思）+ 手（封装好的脚本）+ 记事本（动态 SOP） 的架构思考, SOP 是否就是 整合Knowledge, memory, experience 的最优概念?

  

