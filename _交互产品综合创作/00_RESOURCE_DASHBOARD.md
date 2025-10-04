# 教师资源管理仪表盘 (Resource Management Dashboard)

**版本**: 1.0 | **最后更新**: 2025-08-31 | **用途**: 教师与知识库交互的核心界面

## 📋 工作流程状态

### 当前状态: **准备就绪 (Ready for Execution)**
- ✅ 核心文档已对齐 (PRD v4.0, Architecture v3.3, SOP v10.1)
- ✅ Vault结构已初始化
- ✅ 工具链已部署
- ⏳ 等待第一周内容生产启动

## 🎯 快速操作指南

1. **添加新素材**: 将笔记放入 `/src/00_INBOX/`
2. **资源策展**: 调用 `@analyst Mary` 执行策展任务
3. **启动周生产**: 导出CSV → 调用 `@sm` 创建Story
4. **监控进度**: 使用下方仪表盘视图

---

## 📊 资源管理仪表盘

```base
formulas:
  simplified_path: file.path.replace("_交互产品综合创作", "")
properties:
  note.course_name:
    displayName: 课程
  note.week_num:
    displayName: 周次
  note.epic_num:
    displayName: 章节
  note.sequence:
    displayName: 处理顺序
  note.type:
    displayName: 素材类型
  note.status:
    displayName: 策展状态
  note.tldr:
    displayName: 核心摘要
  file.name:
    displayName: 文件名
  file.mtime:
    displayName: 修改时间
  formula.simplified_path:
    displayName: 简化路径

views:
  # 策展收件箱 - 显示待处理的INBOX文件
  - type: table
    name: 📥 策展收件箱 (Curation INBOX)
    filters:
      and:
        - file.inFolder("_交互产品综合创作/src/")
        - not:
            - course_name != null
    order:
      - file.mtime
      - file.name
    sort:
      - property: file.mtime
        direction: ASC
    limit: 20
    columnSize:
      file.name: 200
      file.mtime: 120
      formula.simplified_path: 250

  # 按周次筛选 - 第一周资源视图
  - type: table
    name: 🗂️ 第一周资源 (Week 1 Resources)
    filters:
      and:
        - file.inFolder("_交互产品综合创作/src/")
        - course_name == "交互产品综合创作"
        - week_num == 1
    order:
      - epic_num
      - sequence
      - file.name
      - tldr
    sort:
      - property: sequence
        direction: ASC
      - property: file.name
        direction: ASC
    columnSize:
      note.epic_num: 50
      note.sequence: 60
      file.name: 180
      note.type: 100
      note.tldr: 200
      formula.simplified_path: 200

  # 课程资源库总览
  - type: cards
    name: 📚 课程资源库 (Course Library)
    filters:
      and:
        - file.inFolder("_交互产品综合创作/src/")
        - course_name != null
    order:
      - course_name
      - epic_num
      - week_num
      - sequence
    sort:
      - property: epic_num
        direction: ASC
      - property: week_num
        direction: ASC
      - property: sequence
        direction: ASC
```

## 📈 资源统计

- **总文件数**: `= length(file.inFolder("_交互产品综合创作/src/"))`
- **已策展文件**: `= length(and(file.inFolder("_交互产品综合创作/src/"), course_name != null))`
- **待处理文件**: `= length(and(file.inFolder("_交互产品综合创作/src/"), not(course_name != null)))`

## 🚀 下一步行动

根据SOP v10.1的指导，建议按以下顺序执行：

1. **立即可执行**: 启动第一周内容生产流程
2. **中期目标**: 完善所有模板文件
3. **长期目标**: 建立完整的自动化工作流

---

*此仪表盘由BMAD系统自动维护，最后同步时间: 2025-08-31*

