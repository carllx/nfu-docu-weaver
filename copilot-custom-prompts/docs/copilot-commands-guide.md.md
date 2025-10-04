---
copilot-command-context-menu-enabled: false
copilot-command-slash-enabled: false
copilot-command-context-menu-order: 50
copilot-command-model-key: ""
copilot-command-last-used: 0
---
### 一、Obsidian Copilot `command` 机制概述

Obsidian Copilot 的自定义 command 机制允许用户在 Obsidian 内通过命令（command）快速调用 AI 助手，处理选中文本、笔记内容、标签聚合等复杂场景。核心机制如下：

#### 1. command 的定义与存储
- **每个 command 是一个 markdown 文件**，位于指定的 `.copilot-prompts` 等自定义命令目录。
- 文件内包含 YAML frontmatter（存储元数据，如入口、排序、模型等）和正文（AI prompt 模板）。
- 支持变量、标签、笔记链接等动态内容。

#### 2. command 的注册与触发
- 插件会自动监听该目录下的命令文件变动，自动注册/注销命令。
- 命令可通过快捷键、slash 命令、右键菜单等入口触发。

---

### 二、变量与内容提取机制

#### 1. 提取选中文本 `{}` 或 `{selected_text}`

- 在命令正文中放置 `{}` 或 `{selected_text}` 占位符，执行命令时会自动把当前编辑器选中文本填入该处。

#### 2. 提取笔记链接 `[[笔记名]]`

- 在命令正文中写入 `[[笔记名]]`，插件会解析该链接，自动查找对应笔记文件，并将其内容读取后插入到 prompt 中的该位置。

#### 3. 提取标签内容 `{#tag1,#tag2}`

- 在命令正文写入 `{#tag1}`, `{#tag1, #tag2}` 等，插件会查找 vault 内所有带有这些标签的笔记，自动读取这些笔记内容，并聚合填充到 prompt 指定位置。

#### 4. 其它变量
- `{activeNote}`：当前打开的笔记内容
- `{folder}`：当前笔记所在的目录
- `{variable}`：自定义变量名，通常可以通过脚本或 context 传递特定值

---

### 三、用户自定义 command 制作指南与注意事项

#### 1. 命名与存储
- 命令名应唯一且避免特殊字符（如 `/\:*?"<>|^[]`），建议用有意义的英文或拼音。
- 文件必须直接放在自定义命令目录下，不能有子目录。

#### 2. Frontmatter 设置
- 建议设置如下 frontmatter 字段：
  - `copilot-command-context-menu-enabled`（是否在右键菜单显示）
  - `copilot-command-slash-enabled`（是否在斜杠命令显示）
  - `copilot-command-context-menu-order`（排序）
  - `copilot-command-model-key`（指定大模型）
- 示例：
  ```markdown
  ---
  copilot-command-context-menu-enabled: true
  copilot-command-slash-enabled: true
  copilot-command-context-menu-order: 10
  copilot-command-model-key: gpt-4
  ---
  ```

#### 3. 正文（Prompt）编写建议
- 灵活使用 `{}`、`{selected_text}`、`[[笔记名]]`、`{#标签}` 等变量实现自动内容聚合。
- 避免变量名拼写错误，变量无对应内容时插件会警告或忽略。
- 支持 markdown 格式、代码块、引用等格式化内容。

#### 4. 典型用法示例

**示例 1：总结选中文本**
```
请帮我总结下面的内容：
{}
```

**示例 2：分析本周会议纪要**
```
请帮我梳理本周所有 #meeting 标签下的要点：
{#meeting}
```

**示例 3：汇总指定笔记内容**
```
请综合下面三份笔记的信息：
[[项目A目标]]
[[项目A进展]]
[[项目A问题]]
```

#### 5. 注意事项
- 避免与已有 command 重名，否则后者会覆盖前者。
- 变量名、标签、笔记名必须和实际 vault 内一致，否则内容提取失败。
- 如果要聚合大量标签笔记，建议注意 token 数量限制，避免 prompt 超长。
- 命令 prompt 可用 markdown 格式美化，但变量必须放在独立行或与正文有清晰分隔。

#### 6. 调试建议
- 制作命令后，建议先在少量文本或测试笔记下试用，确保变量正确提取。
- 可通过插件日志/通知查看命令提取和执行情况。
- 若发现内容未提取，检查变量名拼写、标签、笔记是否存在。

---

#### 总结

自定义 command 的强大之处在于：**用户只需专注于 prompt 设计，插件帮你自动调度、提取和拼接所需内容**。通过合理利用变量和标签，可以实现复杂的信息聚合、AI 智能处理等自动化场景，大幅提升 Obsidian AI 助手的实用性和个性化。

如需具体模板或遇到变量提取异常，欢迎进一步提问！