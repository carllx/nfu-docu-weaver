# 架构设计文档: Vault_Refactor_Helper

## 1. 概述

本文档基于 `prd.md` v1.0，旨在为 `Vault_Refactor_Helper` 插件提供一个健壮、可扩展且高性能的技术架构。设计的核心目标是支撑**大规模、高并发的知识库重构操作**，同时确保数据完整性和用户体验的流畅性。

## 2. 设计原则

- **响应性 (Responsiveness):** 任何后台处理都不能阻塞 Obsidian 的 UI 线程。用户界面必须始终保持流畅。
    
- **可靠性 (Reliability):** 在任何批量操作场景下，链接修复必须是完整且无遗漏的。必须防止数据竞争和不一致的状态。
    
- **可维护性 (Maintainability):** 代码结构应清晰，模块职责单一，便于未来迭代和问题排查。
    

## 3. 高层架构

我们将采用一个**事件驱动的、基于异步队列的**处理模型。该模型将事件的“捕获”与“处理”彻底解耦，这是应对批量操作性能挑战的关键。

```
graph TD
    subgraph Obsidian Core
        A[File System Operations \n(e.g., Batch Rename Script)]
    end

    subgraph Vault_Refactor_Helper Plugin
        B(Event Listener \n `app.vault.on('rename', ...)` )
        C{Event Queue \n (In-Memory FIFO)}
        D(Queue Processor \n (Async, Serial Handler))
        E[Link Fixer Module \n (File I/O & Regex)]
        F((Logging Service))
    end

    A -- Triggers --> B
    B -- Pushes Event (oldPath, newPath) --> C
    D -- Pulls Event --> C
    D -- Invokes --> E
    E -- Writes Logs via --> F
    D -- Writes Logs via --> F
```

## 4. 核心组件详解

### 4.1. Event Listener

- **技术实现:** 在插件的 `onload` 方法中，注册 Obsidian 官方的 `app.vault.on('rename', (file, oldPath) => {})` 监听器。
    
- **核心职责:** **仅负责捕获事件**。当 `rename` 事件被触发时，立即将包含 `file` (新文件对象) 和 `oldPath` (旧文件路径) 的事件对象推入**Event Queue**。
    
- **设计约束:** 此组件的逻辑必须极其轻量，以纳秒级速度完成，从而确保即使在瞬间发生数百次文件操作时也不会阻塞 Obsidian 的主流程。
    

### 4.2. Event Queue

- **技术实现:** 一个简单的先进先出 (FIFO) 内存数组。
    
- **核心职责:** 作为事件的缓冲区。它解耦了事件的产生速率和处理速率，有效应对批量操作引发的事件风暴，防止事件丢失。
    

### 4.3. Queue Processor (核心引擎)

- **技术实现:** 一个异步的、基于 `setInterval` 或 `requestAnimationFrame` 的循环处理器。
    
- **核心职责:**
    
    1. **串行处理:** 处理器以固定的时间间隔检查**Event Queue**。如果队列不为空，它**一次只取出一个**事件进行处理。
        
    2. **状态管理:** 维护一个状态锁 (e.g., `isProcessing`)，确保在前一个事件的链接修复任务完成之前，绝不开始下一个事件的处理。**这是解决竞态条件的关键**。
        
    3. **任务分派:** 将取出的事件对象传递给**Link Fixer Module**执行实际的修复工作。
        
    4. **日志记录:** 记录每个事件的处理开始、结束或失败状态。
        

### 4.4. Link Fixer Module

- **技术实现:** 一个包含文件 I/O 和字符串处理逻辑的独立模块。
    
- **核心职责:**
    
    1. 接收一个事件对象（包含新旧路径）。
        
    2. 获取库中所有的 Markdown 文件列表 (`app.vault.getMarkdownFiles()`)。
        
    3. **遍历文件列表**：对每一个文件，读取其内容，使用经过充分测试的正则表达式查找所有指向 `oldPath` 的 Wikilinks。
        
    4. **执行替换**：将找到的链接精确地替换为指向新路径的链接。
        
    5. **写入文件**：仅当文件内容发生实际变化时，才执行写回操作 (`app.vault.modify()`)，以最小化 I/O 开销。
        

### 4.5. Logging Service

- **技术实现:** 一个简单的封装 `console.log` 的工具类。
    
- **核心职责:** 提供带时间戳和上下文的日志记录功能。将记录关键操作（如事件入队、处理开始/结束、文件修改成功/失败），为调试和手动恢复提供依据，直接满足 PRD 中“向前恢复”和“日志记录”的需求。
    

## 5. 关键风险应对策略

此架构直接回应了 PRD 中定义的核心风险：

- **应对性能瓶颈:** **Event Queue** 吸收了批量操作的瞬时压力，而**Queue Processor**的异步执行模式确保了 UI 的流畅性。
    
- **应对竞态条件:** **Queue Processor**的**串行处理模型**和状态锁，从根本上杜绝了多个任务同时修改同一文件的可能性。
    
- **应对操作中断:** **Logging Service** 提供了详细的操作记录。由于事件被持久化在队列中（在插件生命周期内），即使处理过程中出现非致命错误，处理器也可以跳过错误任务继续处理下一个，最大化地保证了“向前恢复”的能力。