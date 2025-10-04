---
copilot-command-context-menu-enabled: false
copilot-command-slash-enabled: false
copilot-command-context-menu-order: 40
copilot-command-model-key: ""
copilot-command-last-used: 0
---
# 📝 Obsidian Copilot Custom Prompts

一套精心设计的Obsidian Copilot自定义提示命令集合，提供丰富的文本处理和AI辅助功能。支持动态内容聚合、标签解析和笔记链接等高级特性。

## ✨ 功能特性

### 🎯 文本转换

- **📚 简化解释** - 将复杂内容转换为5岁儿童能理解的简单语言
- **🔍 简化文本** - 转换为6年级阅读水平
- **📈 扩展内容** - 将文本扩展至两倍长度
- **📉 压缩内容** - 将文本压缩至一半长度

### 🔧 内容处理

- **✏️ 语法修正** - 修复语法和拼写错误
- **😊 添加表情** - 为文本添加相关表情符号
- **🔗 移除链接** - 清除文本中的所有URL

### 📊 分析生成

- **📋 创建摘要** - 生成要点式摘要
- **📑 目录生成** - 创建分层目录结构
- **📖 术语表** - 生成重要术语和概念的词汇表

### 🌐 格式转换

- **🐦 推文转换** - 转换为单条推文（280字符内）
- **🧵 推文串** - 转换为推文线程格式
- **🌏 中文翻译** - 翻译为中文并保持语境

## 🚀 快速开始

### 安装要求

- [Obsidian](https://obsidian.md/)
- [Copilot插件](https://github.com/logancyang/obsidian-copilot)

### 安装步骤

1. 在你的Obsidian vault根目录创建 `.copilot-prompts` 目录
2. 将所有`.md`文件复制到 `.copilot-prompts` 目录中
3. 确保Copilot插件已安装并启用
4. 重启Obsidian或重新加载Copilot插件

### 使用方法

1. **选择文本** - 在笔记中选择要处理的文本
2. **调用命令** - 通过以下方式之一：
   - 右键菜单选择对应命令（如果启用）
   - 使用斜杠命令 `/` （如果启用）
   - 通过命令面板搜索

## 📁 文件结构

```text
your-vault/
├── .copilot-prompts/                   # 自定义命令目录
│   ├── Emojify.md                      # 添加表情符号
│   ├── Explain like I am 5.md          # 5岁儿童解释 ⭐
│   ├── Fix grammar and spelling.md     # 语法拼写修正
│   ├── Generate glossary.md            # 生成术语表
│   ├── Generate table of contents.md   # 生成目录
│   ├── Make longer.md                  # 扩展文本
│   ├── Make shorter.md                 # 压缩文本 ⭐
│   ├── Remove URLs.md                  # 移除链接
│   ├── Rewrite as tweet thread.md      # 推文串转换
│   ├── Rewrite as tweet.md             # 推文转换
│   ├── Simplify.md                     # 简化文本 ⭐
│   ├── Summarize.md                    # 创建摘要
│   └── Translate to Chinese.md         # 中文翻译
└── README.md                           # 项目说明文档
```

> ⭐ 标记的命令同时启用了右键菜单和斜杠命令

## 🔧 Copilot Command 机制

### 变量与内容提取

Obsidian Copilot支持多种变量类型，可以动态提取和聚合内容：

#### 1. 选中文本变量

- `{}` 或 `{selected_text}` - 获取当前选中的文本

#### 2. 笔记链接变量

- `[[笔记名]]` - 自动读取指定笔记的完整内容

#### 3. 标签聚合变量

- `{#tag1}` - 聚合所有包含该标签的笔记内容
- `{#tag1,#tag2}` - 聚合包含多个标签的笔记内容

#### 4. 上下文变量

- `{activeNote}` - 当前打开的笔记内容
- `{folder}` - 当前笔记所在的目录
- `{variable}` - 自定义变量（通过脚本传递）

### 使用示例

#### 基础文本处理

```markdown
请帮我总结下面的内容：
{}
```

#### 标签聚合分析

```markdown
请梳理本周所有会议纪要的要点：
{#meeting}
```

#### 多笔记综合

```markdown
请综合分析以下项目信息：
[[项目A目标]]
[[项目A进展]]
[[项目A问题]]

基于以上信息，给出项目建议。
```

#### 混合变量使用

```markdown
基于当前笔记内容：
{activeNote}

以及相关的研究资料：
{#research}

请对选中的内容进行深度分析：
{}
```

## ⚙️ 配置说明

### YAML Frontmatter 配置

每个自定义提示文件都包含完整的配置头：

```yaml
---
copilot-command-context-menu-enabled: true/false  # 右键菜单启用
copilot-command-slash-enabled: true/false         # 斜杠命令启用
copilot-command-context-menu-order: 数字          # 菜单排序（0-120）
copilot-command-model-key: ""                     # 指定AI模型（如"gpt-4"）
copilot-command-last-used: 0                      # 使用时间戳
---
```

### 菜单优先级

命令按以下优先级排序（数字越小优先级越高）：

| 优先级 | 命令 | 说明 |
|--------|------|------|
| 0 | Summarize | 创建摘要 |
| 10 | Explain like I am 5 | 5岁儿童解释 |
| 20 | Simplify | 简化文本 |
| 30 | Make shorter | 压缩文本 |
| 40 | Emojify | 添加表情 |
| 50 | Translate to Chinese | 中文翻译 |
| 60 | Fix grammar and spelling | 语法修正 |
| 70 | Make longer | 扩展文本 |
| 80 | Generate table of contents | 生成目录 |
| 90 | Generate glossary | 生成术语表 |
| 100 | Remove URLs | 移除链接 |
| 110 | Rewrite as tweet | 推文转换 |
| 120 | Rewrite as tweet thread | 推文串转换 |

## 🎨 自定义开发

### 创建新命令

1. 在 `.copilot-prompts` 目录创建新的`.md`文件
2. 添加完整的YAML配置头
3. 编写提示内容，灵活使用各种变量
4. 测试命令确保变量正确提取

### 命令编写规范

```markdown
---
copilot-command-context-menu-enabled: true
copilot-command-slash-enabled: true
copilot-command-context-menu-order: 15
copilot-command-model-key: ""
copilot-command-last-used: 0
---
你的自定义指令描述 {}：
    1. 规则一
    2. 规则二
    3. 规则三
    Return only the processed text.
```

### 高级用法示例

#### 会议纪要整理

```markdown
---
copilot-command-context-menu-enabled: true
copilot-command-slash-enabled: true
copilot-command-context-menu-order: 25
---
请整理以下会议内容，提取关键决策和行动项：

会议记录：
{}

相关背景资料：
{#meeting-background}

输出格式：
1. 会议摘要
2. 关键决策
3. 行动项清单
4. 下次会议议题
```

#### 知识库问答

```markdown
---
copilot-command-context-menu-enabled: false
copilot-command-slash-enabled: true
copilot-command-context-menu-order: 35
---
基于我的知识库内容回答问题。

问题：{}

相关知识：
{#knowledge}

请提供准确、详细的回答，并引用相关资料。
```

### 最佳实践

- **变量命名**：确保标签名、笔记名与vault中实际内容一致
- **内容聚合**：注意token限制，避免聚合过多内容
- **调试测试**：先在小量内容上测试，确保变量正确提取
- **格式化**：使用markdown格式美化prompt，但变量需要独立行或明确分隔
- **命名规范**：避免特殊字符，使用有意义的英文或拼音命名

### 注意事项

1. **文件位置**：命令文件必须直接放在 `.copilot-prompts` 目录下，不支持子目录
2. **命名冲突**：避免与已有命令重名，后加载的会覆盖先加载的
3. **变量检查**：确保引用的笔记和标签真实存在
4. **Token管理**：大量内容聚合时注意AI模型的token限制
5. **实时更新**：插件会自动监听文件变动，无需手动重启

### 调试建议

- 查看Copilot插件日志了解命令执行情况
- 先用简单变量测试，逐步增加复杂度
- 检查变量拼写和格式是否正确
- 确认vault中存在对应的笔记和标签

## 🤝 贡献

欢迎提交Issues和Pull Requests来改进这个项目！

### 贡献指南

1. Fork 这个项目
2. 创建你的功能分支
3. 添加新的提示文件或改进现有文件
4. 提交Pull Request

## 📄 许可证

此项目使用 [MIT License](LICENSE)

## 🙏 致谢

感谢Obsidian和Copilot插件开发者为我们提供了这个强大的平台。

---

**💡 提示**：Copilot命令的强大之处在于**自动内容聚合**，你只需专注于prompt设计，插件会自动提取和拼接所需内容。通过合理利用变量和标签，可以实现复杂的信息聚合和AI智能处理场景。
