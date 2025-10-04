# 讨论摘要：大型语言模型 (LLMs)

## 概述

(-- `Running the code with MemGPT/ AutoGEN + MemGPT + Local LLM (Complete Tutorial) 😍` [youtube](https://youtu.be/bMWXXPoDnDs?t=1346))

该笔记总结了有关集成 AutoGEN、MemGPT 和本地大型语言模型 (LLMs) 的讨论，包括潜在成本、可用的免费 LLM 和教程中使用的特定 LLM。

## 教程摘要

- 提到了一个涵盖使用 runp pod 集成 AutoGEN、MemGPT 和本地 LLM 的教程。
- 教程详细介绍了在无需外部 API 的情况下将 AutoGEN 和 MemGPT 与本地 LLM 连接的过程。
- 它包括设置虚拟环境、安装程序包和配置代理以进行集成任务。

## 本地大型语言模型 (LLMs)

### 此方法可以做什么？

- 为复杂交互（例如客户服务系统）实施多代理框架。
- 本地部署确保数据隐私并减少对外部 API 的依赖。
- 在高流量事件等场景中频繁使用时具有成本效益。

### 潜在成本

- 如果本地服务器或个人计算机不足，则需要硬件。
- 运行复杂模型的电力。
- 模型和数据的存储。
- 技术人员的开发和维护。
- 如果适用，软件许可证。
- 如果选择在 runp pod 等平台上运行模型，则使用云服务。

### 用于理解 LLM 的类比

- **AutoGEN**：指挥一支乐队的指挥，协调多个智能代理（乐器）。
- **MemGPT**：拥有图书馆的学者，能够记住对话（书籍）。
- **本地 LLM**：无需连接到外部专家即可提供专家意见的私人顾问。

### 免费本地 LLM

- **Hermes GPTQ**：基于 Meta 的 LlaMA2 LLM，并使用 GPT-4 输出进行微调&#8203;`【oaicite:2】`&#8203;。
- **Llama 2**：由 Meta 优化用于对话的预训练和微调模型集合&#8203;`【oaicite:1】`&#8203;。
- **GPT-NeoX-20B**：由 EleutherAI 开发，具有 200 亿个参数&#8203;`【oaicite:0】`&#8203;。

## 教程中的特定 LLM

- 教程使用了 Dolphin 2.0 和 Arob Boros 等模型，但尚不清楚这些模型是免费的还是专有的。