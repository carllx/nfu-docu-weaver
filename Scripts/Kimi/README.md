# Kimi - 学术论文智能分析工具

Kimi是一个基于Moonshot Kimi API的学术论文智能分析工具，专门为研究人员和学者设计。该工具可以上传PDF论文，进行智能分析，并生成结构化的学术讨论。

## 🚀 主要功能

### 核心功能
- **PDF论文上传**: 支持批量上传PDF格式的学术论文
- **智能分析**: 基于Kimi API进行论文内容分析和理解
- **结构化对话**: 支持多轮对话，进行深入的学术讨论
- **引用管理**: 与Zotero集成，支持学术引用管理
- **会话管理**: 自动管理对话会话，支持历史记录

### 高级功能
- **批量处理**: 支持多篇论文的批量分析
- **模板系统**: 提供可定制的对话模板
- **多语言支持**: 支持中英文对话和分析
- **文件管理**: 自动管理上传的文件和附件

## 📁 项目结构

```
Kimi/
├── chat.py                    # 核心聊天功能模块
├── refresh_token.py           # 令牌刷新管理
├── new_conversation.py        # 新建对话会话
├── upload_file.py             # 文件上传主程序
├── defineConversation.py      # 对话定义和管理
├── kimi_chat_papers.py       # 论文聊天主程序
├── config.json               # 配置文件
├── attachments.json          # 附件信息存储
├── conversations/            # 对话历史记录
│   ├── _template.json       # 对话模板
│   └── *.json              # 具体对话记录
├── zotero/                  # Zotero集成模块
│   ├── functions.js         # Zotero功能函数
│   ├── chart/              # 图表相关功能
│   └── uploadToKimi/       # 上传到Kimi的功能
└── upload_file_*.py         # 文件上传相关模块
```

## 🛠️ 安装和配置

### 环境要求
- Python 3.7+
- 网络连接（访问Kimi API）
- Zotero（可选，用于引用管理）

### 安装步骤

1. **克隆项目**
```bash
git clone <repository-url>
cd Kimi
```

2. **安装依赖**
```bash
pip install requests
```

3. **配置认证**
编辑 `config.json` 文件，添加你的Kimi API认证信息：
```json
{
    "access_token": "your_access_token",
    "refresh_token": "your_refresh_token",
    "refresh_time": "2025-01-17 00:51:32"
}
```

## 📖 使用方法

### 1. 上传论文文件

```bash
python upload_file.py --file /path/to/paper.pdf --itemID "zotero_item_id" --contentType "application/pdf"
```

参数说明：
- `--file`: PDF文件路径
- `--itemID`: Zotero中的项目ID
- `--contentType`: 文件类型（通常为application/pdf）
- `--conversation`: 可选的对话ID

### 2. 创建新的对话会话

```python
from new_conversation import NewConversation

# 创建新会话
conversation = NewConversation("论文分析会话")
print(f"新会话ID: {conversation['id']}")
```

### 3. 发送消息进行论文分析

```python
from chat import Chat

# 发送消息
response = Chat(
    conversation="conversation_id",
    content="请分析这篇论文的主要观点",
    refs=["file_id_1", "file_id_2"],
    use_search=False
)

print(response["paragraph"])
```

### 4. 使用对话模板

```bash
python defineConversation.py --conversation "template_name"
```

### 5. 批量处理论文

```python
from upload_file import main

# 批量上传论文
papers = [
    {"file": "/path/to/paper1.pdf", "itemID": "zotero_id_1"},
    {"file": "/path/to/paper2.pdf", "itemID": "zotero_id_2"}
]

for paper in papers:
    result = main(
        zoteroID=paper["itemID"],
        file_path=paper["file"],
        contentType="application/pdf"
    )
    print(f"上传结果: {result}")
```

## 🔧 配置说明

### config.json
主要配置文件，包含：
- `access_token`: Kimi API访问令牌
- `refresh_token`: 刷新令牌
- `refresh_time`: 令牌刷新时间
- `conversations`: 对话会话列表
- `attachments`: 附件信息

### attachments.json
存储所有上传文件的信息：
```json
{
    "id": "file_id",
    "name": "文件名.pdf",
    "type": "file",
    "content_type": "pdf",
    "status": "parsed",
    "size": 文件大小,
    "token_size": 令牌大小,
    "zoteroID": "zotero项目ID"
}
```

## 🔌 Zotero集成

项目包含Zotero插件，支持：
- 自动上传论文到Kimi
- 管理论文引用信息
- 同步论文元数据

### Zotero插件安装
1. 将 `zotero/` 目录下的文件复制到Zotero插件目录
2. 在Zotero中启用插件
3. 配置Kimi API认证信息

## 📝 对话模板

项目使用JSON模板来定义对话结构：

```json
{
    "conversation_id": "",
    "attachments": [
        {
            "date": null,
            "title": "",
            "fileID": "",
            "itemID": null,
            "citation": "",
            "citationShort": "",
            "tags": []
        }
    ],
    "prompt": "",
    "response": "",
    "refs": [],
    "title": null,
    "group_id": "",
    "req_id": "",
    "resp_id": ""
}
```

## 🔄 API接口

### 主要API端点
- **聊天接口**: `POST /api/chat/{conversation}/completion/stream`
- **文件上传**: `POST /api/chat/{conversation}/file/upload`
- **令牌刷新**: `GET /api/auth/token/refresh`
- **新建会话**: `POST /api/chat`

## 🚨 注意事项

1. **API限制**: 注意Kimi API的调用频率限制
2. **文件大小**: 单个PDF文件大小限制
3. **令牌过期**: 定期刷新访问令牌
4. **数据备份**: 定期备份对话历史和附件信息

## 🤝 贡献

欢迎提交Issue和Pull Request来改进项目。

## 📄 许可证

本项目采用MIT许可证。

## 📞 支持

如有问题，请通过以下方式联系：
- 提交GitHub Issue
- 发送邮件至项目维护者

---

**注意**: 使用前请确保已获得Kimi API的访问权限，并遵守相关使用条款。 