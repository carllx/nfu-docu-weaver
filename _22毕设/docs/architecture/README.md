# 架构文档分片索引 (Architecture Document Shards Index)

**原始文档**: `docs/architecure.md`  
**分片日期**: 2025-09-01  
**执行者**: po (产品负责人)  

## 概述

本目录包含 `Agile Mentorship System Architecture` 的分片版本。原始架构文档已被分解为多个逻辑部分，以便于AI代理更好地处理和理解。

## 分片结构

### 1. 核心文档
- **[architecture-header.md](architecture-header.md)** - 文档头部信息
  - 包含标题、版本、状态、负责人和语言设置

### 2. 主要内容部分
- **[architecture-01-introduction.md](architecture-01-introduction.md)** - 简介
  - 系统简介
  - 变更日志

- **[architecture-02-high-level-architecture.md](architecture-02-high-level-architecture.md)** - 高级架构
  - 技术摘要
  - 核心设计原则
  - 系统架构图

- **[architecture-03-data-model-entities.md](architecture-03-data-model-entities.md)** - 数据模型与实体定义
  - 核心实体（学生、毕业创作、毕业论文）
  - 中央索引
  - 实体关系图

- **[architecture-04-core-workflows.md](architecture-04-core-workflows.md)** - 核心工作流
  - 师生反馈与指导循环
  - 工作流描述

- **[architecture-05-directory-structure.md](architecture-05-directory-structure.md)** - 目录结构与完整性
  - 源文件树
  - 架构完整性校验

## 使用说明

AI代理可以根据需要加载特定的分片文件，而不是整个架构文档。这种分片结构有助于：

1. **提高处理效率** - 只加载和处理相关部分
2. **降低上下文复杂性** - 每个分片文件专注于特定主题
3. **便于维护和更新** - 可以独立更新特定部分

## 重新组合

如需将分片重新组合为完整文档，可以按以下顺序连接所有分片文件：

```
architecture-header.md
architecture-01-introduction.md
architecture-02-high-level-architecture.md
architecture-03-data-model-entities.md
architecture-04-core-workflows.md
architecture-05-directory-structure.md