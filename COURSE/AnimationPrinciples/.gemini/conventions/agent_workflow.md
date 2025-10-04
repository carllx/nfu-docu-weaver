# Agent 调用工作流

这是一个完整的智能体调用流程：

**1. 查看可用 Agent (可选):**
   - 在终端中运行 `./agents.sh` 脚本。
   - 这个脚本会列出 `Agents/` 目录中所有可用的智能体名称。

**2. 调用 Agent:**
   - 在与 AI 的对话中使用以下命令格式：
     `use agent <agent_name>`

**3. 执行机制:**
   - AI 识别此命令。
   - AI 将从 `Agents/` 目录中查找并加载名为 `<agent_name>.md` 的文件内容作为其核心角色定义。
   - AI 将以该角色身份进行回应。

**示例:**
`use agent lyra` 会触发 AI 加载 `Agents/Lyra.md` 文件。
