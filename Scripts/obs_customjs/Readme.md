# AI Research and Writing Assistant for macOS

## 概述

本项目旨在开发一款专为 macOS 用户设计的 AI 助手，主要用于研究和写作。目前，该助手仅在 Obsidian 应用中可用，利用了 GPT-4 和 MaxAI 技术，并通过 Obsidian 插件如 CustomJS 和 Commander 实现。该助手具备以下功能：

- 翻译文本
- 解释内容
- 改进写作
- 使用 AI 编辑或生成文本

未来版本将通过Obsidian Plugin实现. 
考虑将功能扩展到系统范围，而不仅限于 Obsidian。这将涉及使用 Osascript 在 Alfred 工作流中监控所有活动应用程序的剪贴板内容，以及调用 macOS 的 Modality 特性。

## 功能特性

- **多模型支持**：提供多种 AI 模型选择，包括 GPT-4o、Claude3.5、Gemini1.5、o1-mini、Gemini-flash、Deepseek-R1 等。
- **多语言支持**：支持简体中文和美式英语的输入和输出。
- **多种语气和格式**：用户可选择不同的语气（如专业、友好、自信等）和格式（如 Markdown、PPT、Mermaid 等）来定制输出内容。
- **自定义提示**：提供 Ask 功能，允许用户输入自定义提示，让 AI 根据提示生成或编辑内容。
- **友好的用户界面**：集成了工具栏，方便用户在不同视图（如 Markdown、Canvas、思维导图）中使用助手功能。

## 安装指南

### 前提条件

- macOS 系统
- [Obsidian](https://obsidian.md/) 应用程序
- 以下 Obsidian 插件已安装并启用：
  - [CustomJS 插件](https://github.com/obsidian-tasks-group/obsidian-customjs)
  - [Commander 插件](https://github.com/phibr0/obsidian-commander)

### 安装步骤

1. **克隆或下载本项目代码**：

   ```bash
   git clone https://github.com/yourusername/yourproject.git
   ```

2. **将脚本添加到 Obsidian**：

   - 将 `app.js` 文件放入 Obsidian 配置的 `CustomJS` 脚本目录中。
   - 在 Obsidian 设置中，确保 `CustomJS` 插件已启用，并已正确指向脚本目录。

3. **配置 Obsidian**：

   - 启用 `Commander` 插件，并根据需要设置自定义命令以调用助手功能。
   - 确保 `app.js` 脚本在 Obsidian 启动时加载。

## 使用说明

### 启动助手

1. **选择文本**：在 Obsidian 中打开一个 Markdown 文档，选中需要处理的文本内容。
2. **调用助手**：使用 `Commander` 插件的快捷方式，或在命令面板中选择相应的命令来启动 AI 助手。

### 工具栏功能

- **翻译**：将选中的文本翻译为目标语言（简体中文或英文）。
- **解释**：对复杂的文本内容进行简明的解释，适合中学生理解。
- **改进**：改进选中文本的语法、措辞和结构，提升可读性。
- **生成创意**：基于选中文本生成新的故事、寓言或学术观点。

### 自定义设置

- **模型选择**：在工具栏中选择不同的 AI 模型，以获得最佳的生成效果。
- **语言设置**：设置生成内容的语言，支持简体中文和英文（美国）。
- **语气和格式**：根据需求选择不同的语气和格式，定制输出内容的风格。
- **Ask 功能**：点击工具栏中的 **Ask** 按钮，输入自定义提示，AI 将根据提示和选中文本生成内容。

## 配置详解

### API 配置

在 `app.js` 中，以下参数用于与 MaxAI API 进行通信：

- `accessToken`：用于身份验证的访问令牌。
- `USER_ID_KEY` 和 `SM3_SIGN_KEY`：用于生成请求签名的密钥。
- `baseUrl`：API 的基础 URL。

**注意**：请确保这些密钥的安全，避免泄露。

### 应用信息

- `APP_VERSION`：应用程序的版本号。
- `APP_ENV`：应用运行的环境信息。
- `DEVICE_ID`：设备唯一标识符。
- `USER_AGENT`：用户代理信息，用于模拟浏览器请求。

### 常量配置

- **模型提供者**：`PROVIDER` 定义了可用的 AI 模型及其参数。
- **语言设置**：`LANGUAGE` 定义了支持的语言及相关参数。
- **格式设置**：`FORMAT` 定义了输出内容的格式选项。
- **语气设置**：`TONE` 定义了可选的语气风格。

## 项目结构

```plaintext
├── app.js          # 核心脚本文件，包含主要逻辑
├── README.md       # 项目说明文档
└── ...             # 其他可能的资源文件
```

## 未来计划

- **系统范围支持**：利用 Alfred 工作流和 Osascript，实现对所有应用程序的剪贴板内容监控和操作。
- **用户界面优化**：改进工具栏的交互体验，增加更多定制选项。
- **功能扩展**：添加更多的 AI 功能，如文本摘要、代码生成等。

## 贡献指南

欢迎对本项目提出建议、报告问题或提交 Pull Request。请遵循以下步骤：

1. Fork 本仓库。
2. 新建一个分支 (`git checkout -b feature/AmazingFeature`)。
3. 提交您的修改 (`git commit -m 'Add some AmazingFeature'`)。
4. 推送到分支 (`git push origin feature/AmazingFeature`)。
5. 打开一个 Pull Request。

## 联系方式

如有任何疑问或建议，请发送邮件至 [your.email@example.com](mailto:your.email@example.com)。

## 许可协议

本项目采用 [MIT 许可证](LICENSE)。

