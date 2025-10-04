每个角色以 annotation categories 分别表示角色身份:敏捷团队例如:


| role            | categoryId | label                    | color  |
| --------------- | ---------- | ------------------------ | ------ |
| Analyst         | 43:6       | 📊 @Mary (Analyst)       | Green  |
| Architect       | 44:0       | 🏗️ @Winston (Architect) | Yellow |
| Developer       | 44:1       | 💻  @James (Dev)         | Orange |
| Project Manager | 44:2       | 📋 @John (PM)            | Red    |
| Product Owner   | 44:3       | 📝 @Sarah (PO)           | Pink   |
| QA Tester       | 44:4       | 🧪 @Quinn (QA)           | Violet |
| Scrum Master    | 44:5       | 🥁  @Bob (SM)            | Blue   |
| UX Expert       | 44:6       | 🎨 @Sally (UX Expert)    | Teal   |


需要使用 set_multiple_annotations 工具来一次性添加多个注释到同一节点，并确保设置不同的 node_id 避免覆盖问题。

考虑添加评论序号,  例如涉及进展顺序的相关的评论, 需要每个评论文本开头 [01/99]

设计 prompt 通过 talk to figma  mcp serve 制定计划实现逐步
请根据以上初步的脚本需优化, 重新设计, 这些 annotation 必须指定 Figma Design 中的特定元素通过 annotation 的方式加入"评论", 以下是 Design 中的架构



## Design 架构树

```
Brief and Taskflow (页面)
├── 📋 Breif (项目简介框架)
│   ├── 项目概述文本 (Canton Pillow Fighting Club)
│   └── 需求说明文本 (目标、用户画像、痛点)
│
├── 🎨 设计方案 A: 理性风格 (Rational Design)
│   ├── A-Homepage (首页)
│   │   ├── Header Navigation (logo-text, nav-home, nav-events, nav-sponsors, nav-about)
│   │   ├── Hero Section (hero-image-placeholder, hero-cross-1)
│   │   ├── Upcoming Events (upcoming-events-title, event-1/2/3)
│   │   └── Footer (footer-separator, footer-text)
│   │
│   ├── A-Events (活动页面)
│   │   ├── Header Navigation
│   │   ├── Future Events Section (future-events-subtitle, future-event-1~5)
│   │   ├── Past Events Section (past-events-subtitle, past-event-1~5)
│   │   └── Footer
│   │
│   ├── A-Sponsors (赞助商页面)
│   │   ├── Header Navigation
│   │   ├── Sponsor Grid (sponsor-logo-1~9, sponsor-cross-1~9)
│   │   └── Footer
│   │
│   └── A-About-Us (关于我们页面)
│       ├── Header Navigation
│       ├── Content Section (content-text)
│       └── Footer
│
├── 🎭 设计方案 B: 创意风格 (Creative Design)
│   ├── B-Homepage (首页)
│   │   ├── Header Navigation (nav-soft-parties, nav-warm-partners, nav-our-agreement)
│   │   ├── Hero Section (hero-title, hero-subtitle)
│   │   ├── Featured Event Card (card-image-placeholder, card-title, cta-button)
│   │   └── Social Footer
│   │
│   ├── B-Soft-Parties (柔软派对页面)
│   │   ├── Header Navigation
│   │   ├── Tab Navigation (tab-upcoming, tab-memories)
│   │   ├── Event Cards Grid (event-card-1~3)
│   │   └── Social Footer
│   │
│   ├── B-Warm-Partners (温暖伙伴页面)
│   │   ├── Header Navigation
│   │   ├── Partner Cards (partner-card-1~2)
│   │   └── Social Footer
│   │
│   └── B-Our-Agreement (我们的约定页面)
│       ├── Header Navigation
│       ├── Rules Section (section1-subtitle, section1-content)
│       ├── Philosophy Section (section2-subtitle, section2-content)
│       ├── Contact Form (contact-form, form fields, submit-button)
│       └── Social Footer
│
└── 📊 Task Flow (任务流程图)
    ├── Task Flow A: Rational (理性用户流程)
    │   └── 流程步骤: 开始 → 首页 → 导航 → 点击活动 → 系统跳转 → 阅读列表 → 结束
    │
    └── Task Flow B: Creative (创意用户流程)
        └── 流程步骤: 开始 → 首页 → 特色活动卡片 → 了解更多 → 详情弹窗 → 结束
```