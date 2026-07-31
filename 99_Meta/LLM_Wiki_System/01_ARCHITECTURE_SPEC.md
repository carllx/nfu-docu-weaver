# Architecture Specification

## 1. 逻辑层级

### Sources

包含：

- PDF、EPUB 及其 Markdown 转换文本
- 书籍章节
- 论文
- 网页
- 访谈
- 字幕
- 原始摘录

默认只读。

### Shared Wiki

包含可跨项目复用的：

- Concepts
- Authors
- Artists
- Artworks
- Methods
- Media
- Comparisons
- Indexes

Wiki 页面不得承担具体课程的时间表、评分和项目管理。

### Projects

保存：

- 课程
- 作品
- 游戏
- 网页交互
- 交互装置
- 展览
- 运营实验

项目引用 Wiki，而不复制整个 Wiki。

### Personal Thinking

保存：

- 用户观点
- 教学取舍
- 创作意图
- 研究问题
- 尚未验证的假设
- 对 Agent 建议的接受或拒绝

### Agent System

保存：

- 规则
- 架构
- 模板
- Skill 设计
- 日志
- Pilot
- 能力评估
- 交接文件

## 2. 当前实施方式

不移动现有笔记。

采用覆盖层架构：

现有 Vault  
→ Agent 目录地图与排除规则  
→ 少量共享 Wiki  
→ 项目引用 Wiki  
→ 必要时回查 Sources

## 3. Wiki 新建判断

只有以下条件基本满足时才建议新建 Wiki：

- 主题可跨项目复用；
- 已有至少两个有效来源，或一个高质量一手来源；
- 页面范围能够清楚界定；
- 与已有页面不存在明显重复；
- 能保留来源链接；
- 不只是一次性的项目决定。

否则优先保留在项目 Research 或候选笔记中。

## 4. 页面拆分判断

出现以下情况时提出拆分建议：

- 页面同时承担共享知识与项目安排；
- 包含多个可以独立复用的概念；
- 文件过长导致检索困难；
- 不同部分有不同更新周期；
- 来源、Agent 推论和用户决定无法清楚隔离。

Agent只能提出拆分计划，不得自行执行正式拆分。
