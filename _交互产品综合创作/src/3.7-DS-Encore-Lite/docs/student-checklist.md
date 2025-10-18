# Encore-Lite 学生实践检查清单

## 📋 课前准备 (提前完成)

- [ ] 安装 Figma 桌面端 或 确认浏览器版本 (Chrome/Edge 最新版)
- [ ] 安装 VS Code
- [ ] 安装 VS Code 插件: Live Server
- [ ] 注册 Figma 账号并登录
- [ ] 准备笔记本，可以记录关键概念
- [ ] 确保网络连接稳定

---

## ⏱️ 第一部分：Figma 设计 (60分钟)

### 步骤 1: 项目设置 (5分钟)
- [ ] 创建新 Figma 文件，命名为 `Encore-Lite-[你的名字]`
- [ ] 创建 3 个页面：`📦 Design Tokens`, `🧩 Components`, `🎨 Demo Page`

### 步骤 2: 定义颜色代币 (8分钟)
- [ ] 创建集合 `Primitives/Color`
- [ ] 添加 5 个原始颜色变量
  - [ ] green-400: #1ED760
  - [ ] gray-800: #121212
  - [ ] gray-300: #B3B3B3
  - [ ] white: #FFFFFF
  - [ ] black: #000000
- [ ] 创建集合 `Semantic/Color` (启用 Modes)
- [ ] 添加 light 和 dark 两个模式
- [ ] 配置 6 个语义颜色变量（每个都有 light/dark 值）
  - [ ] color/background/base
  - [ ] color/text/primary
  - [ ] color/text/secondary
  - [ ] color/interactive/primary
  - [ ] color/interactive/primary-hover
  - [ ] color/border/focus

### 步骤 3: 定义间距代币 (4分钟)
- [ ] 创建集合 `Primitives/Spacing`
- [ ] 添加 5 个间距变量
  - [ ] spacing/xs: 4px
  - [ ] spacing/s: 8px
  - [ ] spacing/m: 16px
  - [ ] spacing/l: 24px
  - [ ] spacing/xl: 32px

### 步骤 4: 定义圆角代币 (3分钟)
- [ ] 创建集合 `Primitives/Radius`
- [ ] 添加 3 个圆角变量
  - [ ] radius/s: 4px
  - [ ] radius/m: 8px
  - [ ] radius/full: 999px

### 步骤 5: 定义文本样式 (5分钟)
- [ ] 创建文本样式 `heading/large` (48px, Bold)
- [ ] 创建文本样式 `body/medium` (16px, Regular)
- [ ] 创建文本样式 `caption/small` (12px, Regular)

**✅ 检查点 1:** 现在应该有 16个变量 + 3个文本样式

### 步骤 6: 创建 Button 组件 (10分钟)
- [ ] 创建 Auto Layout Frame，命名 `.button`
- [ ] 添加文本 "Play"，应用 `body/medium`
- [ ] 设置内边距为 `{spacing/m}`
- [ ] 设置背景色为 `{color/interactive/primary}`
- [ ] 设置圆角为 `{radius/full}`
- [ ] 转为组件 (Ctrl/Cmd + Alt + K)
- [ ] 添加变体，创建 `state` 属性 (default, hover)
- [ ] 在 hover 变体中，背景色改为 `{color/interactive/primary-hover}`

### 步骤 7: 创建 SongRow 组件 (10分钟)
- [ ] 创建 Auto Layout Frame，命名 `.song-row`
- [ ] 设置方向为 Horizontal，gap 为 `{spacing/m}`
- [ ] 添加封面图 (40×40px, 圆角 `{radius/s}`)
- [ ] 添加信息组 (Vertical Frame)
  - [ ] 歌曲名 (样式: `body/medium`, 颜色: `{color/text/primary}`)
  - [ ] 歌手名 (样式: `caption/small`, 颜色: `{color/text/secondary}`)
- [ ] 添加时长文本 (样式: `caption/small`, 颜色: `{color/text/secondary}`)
- [ ] 设置信息组为 Fill container
- [ ] 转为组件

### 步骤 8: 创建 PlaylistHeader 组件 (15分钟)
- [ ] 创建 Auto Layout Frame，命名 `.playlist-header`
- [ ] 设置 gap 为 `{spacing/l}`, padding 为 `{spacing/xl}`
- [ ] 添加封面图 (160×160px)
- [ ] 添加信息组
  - [ ] 标题 (样式: `heading/large`)
  - [ ] 描述 (样式: `body/medium`)
- [ ] 从 Assets 拖入 Button 组件实例
- [ ] 调整 Button 实例为大尺寸 (56×56px)
- [ ] 转为组件

### 步骤 9: 创建演示页面 (5分钟)
- [ ] 切换到 `🎨 Demo Page`
- [ ] 创建 Frame (1440×900), 命名 "Desktop View"
- [ ] 设置背景色为 `{color/background/base}`
- [ ] 拖入 1 个 PlaylistHeader
- [ ] 拖入 3-4 个 SongRow
- [ ] 测试主题切换 (切换 Mode: light ↔ dark)

**✅ 检查点 2:** Figma 部分完成，所有组件使用代币

---

## 💻 第二部分：H5 实现 (60分钟)

### 步骤 10: 创建项目文件 (3分钟)
- [ ] 创建文件夹 `encore-lite-project`
- [ ] 创建 `index.html`
- [ ] 创建 `style.css`

### 步骤 11: 构建 CSS 代币系统 (20分钟)
- [ ] 复制讲义中的 CSS Reset 代码
- [ ] 定义 Primitives 层代币 (`:root` 中)
- [ ] 定义 Semantic 层代币 (`:root` 中)
- [ ] 定义 Dark 主题覆盖 (`[data-theme="dark"]`)
- [ ] 添加 `prefers-reduced-motion` 媒体查询
- [ ] 设置 `body` 基础样式

**✅ 检查点 3:** 所有代币使用 `var()` 引用，零硬编码

### 步骤 12: 构建组件样式 (20分钟)
- [ ] 编写 `.button` 组件样式
  - [ ] 基础样式
  - [ ] :hover 状态
  - [ ] :focus-visible 状态
  - [ ] .button--large 变体
- [ ] 编写 `.song-row` 组件样式
  - [ ] Flexbox 布局
  - [ ] 子元素样式 (cover, info, title, artist, duration)
  - [ ] 文本溢出处理 (ellipsis)
- [ ] 编写 `.playlist-header` 组件样式
  - [ ] Flexbox 布局
  - [ ] 子元素样式
  - [ ] 响应式媒体查询 (@media max-width: 768px)

### 步骤 13: 构建 HTML 结构 (15分钟)
- [ ] 设置 HTML 骨架（doctype, meta, title）
- [ ] 添加 `<body data-theme="light">`
- [ ] 添加主题切换按钮 `#theme-switcher`
- [ ] 构建 `.playlist-header` 结构
- [ ] 构建 `.song-list` 和 3-4 个 `.song-row`
- [ ] 添加主题切换 JavaScript

### 步骤 14: 运行与测试 (2分钟)
- [ ] 在 VS Code 中右键 `index.html` → Open with Live Server
- [ ] 验证页面正常显示
- [ ] 测试主题切换功能

**✅ 检查点 4:** 页面可运行，主题切换正常

---

## 🚀 第三部分：增强与优化 (45分钟)

### 步骤 15: 响应式优化 (10分钟)
- [ ] 添加小屏幕媒体查询 (@media max-width: 480px)
- [ ] 调整标题字号
- [ ] 调整组件内边距
- [ ] 添加极小屏幕优化 (@media max-width: 320px)
- [ ] 在移动端模拟器中测试

### 步骤 16: 交互效果增强 (10分钟)
- [ ] 添加 `.song-row:focus-within` 样式
- [ ] 添加 `.song-row.is-playing` 状态样式
- [ ] 添加点击播放的 JavaScript 逻辑
- [ ] 添加键盘导航支持 (tabindex, role, keydown)

### 步骤 17: 性能优化 (10分钟)
- [ ] 为 `.song-row` 添加 `contain: layout style paint`
- [ ] 为图片添加 `loading="lazy"` 属性
- [ ] 为关键 CSS 属性添加回退值

### 步骤 18: 可访问性审计 (15分钟)
- [ ] 打开 Chrome DevTools → Lighthouse
- [ ] 运行 Accessibility 审计
- [ ] 修复发现的问题
- [ ] 确保所有图片有 alt 文本
- [ ] 确保所有按钮有 aria-label

**✅ 检查点 5:** 页面完整，通过可访问性审计

---

## 🧪 第四部分：契约验证 (30分钟)

### 步骤 19: 创建契约文档 (10分钟)
- [ ] 创建 `DESIGN-CONTRACT.md`
- [ ] 填写版本信息 (v0.1.0)
- [ ] 记录所有代币及其映射关系
- [ ] 定义命名规范
- [ ] 定义变更流程
- [ ] 列出不变式 (Invariants)

### 步骤 20: 非破坏性变更演练 (8分钟)
- [ ] 添加新代币 `--color-border-subtle`
- [ ] 在 light 和 dark 主题中定义
- [ ] 更新契约文档版本为 v0.2.0 (MINOR)
- [ ] 记录变更日志

### 步骤 21: 破坏性变更演练 (12分钟)
- [ ] 列出变更影响评估清单
- [ ] 全局搜索替换 `color-interactive-primary` → `color-brand-primary`
- [ ] 更新契约文档版本为 v1.0.0 (MAJOR)
- [ ] 编写迁移指南
- [ ] 测试验证所有功能正常

### 步骤 22: 多样性测试 (10分钟)
完成以下所有测试：

- [ ] ✅ 主题切换测试
- [ ] ✅ 响应式布局测试 (iPhone SE 视图)
- [ ] ✅ 长文本测试 (修改歌曲名为100字)
- [ ] ✅ 键盘导航测试 (Tab 键遍历)
- [ ] ✅ 对比度测试 (使用 WAVE 工具)
- [ ] ✅ 200% 缩放测试
- [ ] ✅ 减弱动效测试 (系统设置)

---

## 📦 成果提交

### 必交文件
- [ ] index.html
- [ ] style.css
- [ ] DESIGN-CONTRACT.md
- [ ] screenshot-light.png (亮色主题截图)
- [ ] screenshot-dark.png (暗色主题截图)
- [ ] README.md (学习反思 300-500字)

### README.md 需包含
- [ ] 项目基本信息
- [ ] 实现功能清单
- [ ] 学习反思（核心概念理解）
- [ ] 遇到的挑战与解决方案
- [ ] 下一步计划

---

## 📊 自我评估

### 理论理解 (5分制)
- [ ] 我理解"两级代币架构"的意义：___/5
- [ ] 我理解"唯一真源"原则：___/5
- [ ] 我理解"契约思维"与版本管理：___/5
- [ ] 我理解"破坏性变更"与"非破坏性变更"的区别：___/5

### 实践能力 (5分制)
- [ ] 我能独立在 Figma 中创建和使用变量：___/5
- [ ] 我能用 CSS 变量构建零硬编码的样式系统：___/5
- [ ] 我能编写符合 BEM 规范的组件：___/5
- [ ] 我能进行基础的可访问性优化：___/5

### 综合评分
总分：___/40

- 35-40分：优秀，已掌握核心概念和技能
- 28-34分：良好，理解主要概念，需加强实践
- 20-27分：及格，需复习关键概念并多练习
- <20分：需重新学习，建议重做练习

---

## 🎯 下一步行动

### 本周内完成
- [ ] 完成基础挑战 1: 添加 AlbumCard 组件
- [ ] 完成基础挑战 2: 实现 High Contrast 主题

### 本月内探索
- [ ] 研究 Figma Variables API
- [ ] 尝试使用 Style Dictionary 工具
- [ ] 学习 Storybook 文档工具

### 长期目标
- [ ] 在个人项目中应用设计系统方法论
- [ ] 为开源项目贡献设计系统文档
- [ ] 深入学习 Design Ops 相关知识

---

**记住核心要点：**
> 设计系统不是工具，不是代码，而是**协议**——一份团队共同遵守、不断演化的契约。

**完成时间记录:**
- 开始时间: ____:____
- 完成时间: ____:____
- 总耗时: ____ 小时 ____ 分钟

---

**文档版本:** v1.0  
**配套讲义:** teaching-manual.md  
**最后更新:** 2025年10月18日

