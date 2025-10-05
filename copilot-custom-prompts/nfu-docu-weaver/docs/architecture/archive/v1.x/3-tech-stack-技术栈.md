# 3. Tech Stack (“技术栈”)

| 类别 (Category) | “技术” (“Technology”) | 版本/标准 (Version/Standard) | 用途与理由 (Purpose & Rationale) |

| 运行环境 | 大语言模型 (LLM) | GPT-4, Gemini Pro 或同等级别 | 作为指令集的执行引擎和用户交互的前端。 |

| 指令格式 | Markdown | CommonMark Spec | 采用 Markdown 编写指令集，结构清晰、易于读写。 |

| 版本控制 | Git | 最新稳定版 | 用于管理和追踪指令集和脚本的版本迭代。 |

| 后端语言 | Python | 3.9+ | 拥有强大的文件处理库，生态成熟，适合快速开发。 |

| 核心库 | PyYAML, python-docx | 最新稳定版 | 分别用于解析 YAML 数据和处理 Word 文档，是 MVP 的核心依赖。 |
