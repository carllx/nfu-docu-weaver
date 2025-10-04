[ 📹 youtube 【AI論文訂題神器】STORM AI!! #ai #stormAI #ai教學 #論文 #研究 #碩士 #AI論文](@https://www.youtube.com/watch?v=gqM_s44gC_I)


# Stanford OVAL Storm 使用方式经验笔记

## 1. 网页 Demo 方式

可以直接通过官方 Demo 网页访问和体验 Storm 的服务功能，适合无需本地部署、快速体验和演示：

- 访问地址：https://storm.genie.stanford.edu/
- 只需浏览器即可，无需安装和配置。
- 一般用于交互式体验、功能测试或对外演示。

## 2. 命令行（CLI）方式

除了网页方式，也可以通过命令行工具（CLI）来访问和操作 Storm：

- 一般需先安装相应依赖（如 Node.js、Python 等），并 clone 该项目源码。
- 进入项目目录后，根据 README 或文档说明，运行相应的 CLI 命令。
- 适合开发者自定义任务、批量处理、深度集成等场景。

**总结**：  
Storm 支持网页 Demo 和命令行（CLI）两种主要方式，分别适合快速体验与深度开发需求。


# medium 
**参考网址**：https://medium.com/predict/stanford-storm-explained-ai-that-writes-and-curates-smarter-ff39c746e290  

![bg fit left:50% vertical](https://i.imgur.com/bTjiCNT.webp)

## 一、核心功能与原理  
1. **STORM**  
   - 功能：通过互联网搜索生成维基百科风格文章，支持从头创建带引用的完整内容。  
   - 原理：分两阶段工作——预写作阶段（收集资料、起草大纲）、写作阶段（依据大纲和资料撰写文章）；通过“视角引导提问”“模拟对话”提升信息收集质量。  

2. **Co-STORM**  
   - 功能：在STORM基础上增加协作框架，支持LLM专家、主持人与人类用户三方互动，辅助知识协作与讨论。  
   - 原理：引入动态思维导图整理信息，减轻认知负担；由LLM专家提供答案或问题，主持人引导讨论，人类可观察或参与。  


## 二、定制与使用方式  
1. **Python包**  
   - 支持快速安装，也可下载源代码深度定制（如修改STORM的大纲生成模块、Co-STORM的LLM代理规则等）。  

2. **网页版**  
   - 无需编码，操作直观，可直接通过上述参考网址访问使用（具体流程需参考网页指引）。  

1. 其他支持：提供API接口，便于扩展应用场景。

# [ 💻 github stanford-oval/storm: An LLM-powered knowledge curation system that researches a topic and generates a full-length report with citations.](@https://github.com/stanford-oval/storm)

## 1. 项目简介与核心功能

- **STORM AI** 是斯坦福 OVAL 实验室开源的知识整合与信息检索系统。
- 作用：自动为主题生成结构化知识大纲和百科风格文章，支持多视角提问、信息整合和搜索。
- 最大亮点：
  - 支持多种大语言模型（LLM）和主流搜索引擎集成。
  - 可协作（Co-STORM）：人机共同维护知识结构和心智图。
  - 高度模块化，便于二次开发和科研复现。

## 2. 科研使用方法

- 安装：`pip install knowledge-storm` 或源码安装。
- 配置 API Key（如 OpenAI、Bing、Google 等）在 `secrets.toml`。
- 运行方式：
  - 使用官方 example 脚本（如 run_storm_wiki_gpt.py），或在 Python 代码中自定义 Runner。
  - 可灵活选择检索后端与 LLM。

## 3. 检索后端与 API 费用

- 支持多种检索引擎（Bing、Google、DuckDuckGo、SearXNG、Tavily 等）。
- 使用 Google/Bing 等官方 API 时，**第三方 API 可能有免费额度，超额部分需付费**，具体请查阅各自官网定价。
- STORM 本身不收费，只调用你配置的 API。
- 代码库并未直接提醒或文档化各检索引擎的费用问题，需自行关注 API 提供商定价。

## 4. 使用 MCP Server 作为检索后端的方式

- STORM 支持自定义检索模块（Retriever）。
- 若有自己的 MCP Server，可实现 `MCPRetriever` 类，将 STORM 的检索请求转发到 MCP Server（MCP Server 可进一步对接 Google 等）。
- 步骤：
  1. 仿照现有 Retriever 类实现 MCPRetriever，处理与 MCP Server 的 HTTP 请求与结果解析。
  2. 在 `secrets.toml` 配置 LLM 和 MCP Server 的 API Key。
  3. 在 Runner 初始化时用 MCPRetriever 替换原有检索后端。
  4. 运行脚本即可用 MCP Server（如其底层用 Google）进行多源知识整合。

## 5. STORM 是否自带 MCP Server？

- STORM 官方并不内置 MCP Server 服务。
- 支持你自定义扩展 MCP Server 作为检索后端，但需要你自行实现与 MCP Server 的接口适配。
- 官方只内置了常见检索后端的适配器（如 Bing、YouRM 等），如需集成 MCP Server，要扩展 Retriever 部分。

## 6. 其它注意事项

- 官方未直接说明各类 API 的计费，实际费用取决于第三方服务。
- 若需自定义检索引擎适配器，需了解 MCP Server 的 API 规范，可请求适配模板代码。
- 官方数据集（如 FreshWiki、WildSeek）可用于实验复现与研究。