## 4. 技术假设 (Technical Assumptions)

- **仓库结构**: **Monorepo**。所有系统文件都将存储在一个统一的Git仓库中。
    
- **服务架构**: **文档即数据库 (Docs-as-Database)**。无传统后端服务或数据库，所有状态和数据都通过AI代理直接读写Markdown文件。
    
- **测试要求**: **清单驱动的完整性校验**。系统的核心回归测试依赖于 `docs/system_integrity_checklist.md`。