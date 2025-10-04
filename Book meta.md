
(Source: [maxai.co: 与任何内容聊天 | MaxAI](https://www.maxai.co/app/?id=0c270736-9283-4304-a6f1-ccda19eb48e7))
我将为您设计一套完整的 Markdown 书籍元数据结构，专门针对 Obsidian 和 Zettelkasten 方法论优化。这套方案将帮助您建立高效的知识管理系统。

```markdown
# Obsidian 书籍元数据完整模板与使用指南

## 1. 标准元数据模板

```yaml
---
# === 基础信息 ===
type: book
title: "《认知觉醒》"
subtitle: "开启自我改变的原动力"
author: 
  - "周岭"
translator: []
publisher: "人民邮电出版社"
publish_date: "2020-10-01"
isbn: "9787115545909"
pages: 256
language: "zh-CN"

# === 分类标签 ===
category: 
  - "个人成长"
  - "心理学"
tags: 
  - "#认知科学"
  - "#自我提升"
  - "#思维模式"
  - "#行为改变"
difficulty: "中级"  # 初级/中级/高级
genre: "非虚构"     # 虚构/非虚构/学术/工具书

# === 阅读状态 ===
status: "已完成"    # 待读/阅读中/已完成/暂停/放弃
start_date: "2024-01-15"
finish_date: "2024-02-10"
reading_progress: 100
reread_count: 1
priority: "高"      # 高/中/低

# === 评价与推荐 ===
rating: 4.5         # 1-5 分
recommendation: 9   # 1-10 分推荐度
target_audience: 
  - "职场新人"
  - "自我提升爱好者"
  - "认知科学初学者"

# === 核心内容 ===
core_concepts:
  - "元认知"
  - "刻意练习"
  - "认知偏差"
  - "系统思维"
key_insights:
  - "认知觉醒是自我改变的起点"
  - "元认知能力决定学习效率"
  - "刻意练习胜过天赋"
main_arguments:
  - "大脑的三层结构影响行为模式"
  - "认知升级需要系统性方法"
  - "情绪管理是认知觉醒的基础"

# === 关联信息 ===
related_books:
  - "[[思考，快与慢]]"
  - "[[刻意练习]]"
  - "[[认知天性]]"
influenced_by: 
  - "[[丹尼尔·卡尼曼]]"
  - "[[安德斯·艾利克森]]"
influences: []
references: 15      # 参考文献数量

# === 个人笔记 ===
personal_notes: |
  这本书系统性地介绍了认知科学的基础概念，
  特别是元认知的重要性。作者的写作风格通俗易懂，
  适合作为认知科学的入门读物。

practical_applications:
  - "建立每日反思习惯"
  - "使用番茄工作法提高专注力"
  - "制定系统性学习计划"

questions_raised:
  - "如何在日常生活中培养元认知能力？"
  - "认知偏差如何影响决策质量？"
  - "情绪调节与理性思考的平衡点在哪里？"

# === 技术元数据 ===
created: "2024-01-15"
modified: "2024-02-10"
source: "购买"      # 购买/借阅/赠送/电子版
format: "纸质书"    # 纸质书/电子书/有声书
location: "书房A架第3层"

# === LLM 优化字段 ===
summary: |
  《认知觉醒》是一本关于个人认知升级的实用指南。
  作者周岭从认知科学角度出发，系统阐述了大脑的工作机制、
  认知偏差的成因以及如何通过刻意练习实现认知觉醒。
  本书适合希望提升思维能力和自我管理水平的读者。

context: "个人成长类畅销书，在认知科学普及方面具有重要价值"
methodology: "理论结合实践，案例丰富，操作性强"
---
```

## 2. 字段说明与填写规范

### 基础信息字段

- **type**: 固定值 "book"，便于 Dataview 筛选
- **title**: 书籍完整标题，使用双引号包围
- **author**: 数组格式，支持多作者
- **isbn**: 国际标准书号，便于唯一标识
- **language**: 使用 ISO 639-1 语言代码

### 分类标签字段

- **category**: 主要分类，使用数组格式
- **tags**: 详细标签，以 # 开头，便于链接
- **difficulty**: 阅读难度等级
- **genre**: 书籍类型分类

### 阅读状态字段

- **status**: 当前阅读状态
- **reading_progress**: 百分比进度
- **priority**: 阅读优先级

### LLM 优化字段

- **summary**: 简洁的内容摘要
- **core_concepts**: 核心概念列表
- **context**: 背景信息和重要性

## 3. Dataview 查询示例

### 3.1 按状态查询正在阅读的书籍

dataview<button><svg><path></path></svg><span>Copy code</span><span></span></button>

```
TABLE title, author, reading_progress, start_date
FROM #book
WHERE status = "阅读中"
SORT reading_progress DESC
```

### 3.2 高评分推荐书单

dataview<button><svg><path></path></svg><span>Copy code</span><span></span></button>

```
TABLE title, author, rating, recommendation
FROM #book
WHERE rating >= 4 AND recommendation >= 8
SORT rating DESC, recommendation DESC
```

### 3.3 按分类统计书籍数量

dataview<button><svg><path></path></svg><span>Copy code</span><span></span></button>

```
TABLE rows.file.link AS "书籍", length(rows) AS "数量"
FROM #book
FLATTEN category AS cat
GROUP BY cat
SORT length(rows) DESC
```

### 3.4 查找相关主题书籍

dataview<button><svg><path></path></svg><span>Copy code</span><span></span></button>

```
LIST
FROM #book
WHERE contains(tags, "#认知科学") OR contains(tags, "#心理学")
SORT rating DESC
```

### 3.5 年度阅读统计

dataview<button><svg><path></path></svg><span>Copy code</span><span></span></button>

```
TABLE title, finish_date, rating
FROM #book
WHERE status = "已完成" AND finish_date >= date("2024-01-01")
SORT finish_date DESC
```

## 4. LLM 优化建议

### 4.1 关键优化字段

**最重要的 LLM 友好字段：**

1. **summary**: 提供快速理解的内容概览
2. **core_concepts**: 结构化的核心概念列表
3. **key_insights**: 主要观点和洞察
4. **context**: 背景信息和重要性说明

### 4.2 语义增强策略

- 使用标准化的分类词汇
- 保持标签的一致性和层次性
- 在 summary 中包含关键词和主题
- 使用结构化的列表格式

### 4.3 关联性优化

- **related_books**: 建立书籍间的关联网络
- **influenced_by**: 追溯思想源流
- **practical_applications**: 明确实用价值

## 5. 最佳实践建议

### 5.1 模板使用规范

1. **保持一致性**: 所有书籍使用相同的元数据结构
2. **及时更新**: 阅读过程中及时更新进度和笔记
3. **标签规范**: 建立统一的标签体系，避免重复和混乱

### 5.2 Zettelkasten 集成

1. **原子化笔记**: 每个核心概念创建独立笔记
2. **双向链接**: 充分利用 [[]] 语法建立概念关联
3. **渐进式总结**: 从书籍→章节→概念→个人思考

### 5.3 工作流优化

1. **阅读前**: 设置基础元数据和阅读目标
2. **阅读中**: 及时记录 key_insights 和 questions_raised
3. **阅读后**: 完善 summary 和 practical_applications

### 5.4 维护建议

- 定期回顾和更新元数据
- 建立标签词典，确保一致性
- 使用模板快速创建新的书籍笔记
- 定期备份和同步数据

这套元数据结构既满足了 Zettelkasten 的科学整理原则，又优化了 Dataview 查询效率，同时为 LLM 提供了丰富的上下文信息，是一个完整而实用的知识管理解决方案。

code<button><svg><path></path></svg><span>Copy code</span><span></span></button>

```

这套完整的书籍元数据模板具有以下核心优势：

**🎯 Zettelkasten 友好**
- 支持原子化概念提取（core_concepts）
- 建立书籍间的关联网络（related_books）
- 促进渐进式知识积累（key_insights）

**⚡ Dataview 高效查询**
- 标准化的字段结构便于批量操作
- 丰富的筛选维度（状态、评分、分类等）
- 支持复杂的统计和分析查询

**🤖 LLM 优化设计**
- summary 字段提供快速上下文理解
- 结构化的概念列表便于 AI 解析
- 丰富的语义标签增强检索准确性

您可以直接复制使用这个模板，并根据个人需求调整字段。建议先用几本书测试这套结构，然后根据实际使用体验进行微调优化。
```