# Encore-Lite 快速参考卡片
## 课堂速查手册（建议打印）

---

## 🎯 核心概念速查

### 设计代币两级架构

```
┌─────────────────────────────────────────────┐
│  Level 1: Primitives (原始代币)             │
│  ├─ 定义：纯粹的值，不表达用途              │
│  ├─ 示例：green-400: #1ED760                │
│  └─ 类比：超市里的原材料（面粉、鸡蛋）      │
└─────────────────────────────────────────────┘
              ↓ 映射关系
┌─────────────────────────────────────────────┐
│  Level 2: Semantics (语义代币)              │
│  ├─ 定义：表达使用意图                      │
│  ├─ 示例：color-interactive-primary         │
│  └─ 类比：菜单上的菜名（蛋糕、面包）        │
└─────────────────────────────────────────────┘
              ↓ 使用
┌─────────────────────────────────────────────┐
│  组件中只使用语义代币                       │
│  ✅ var(--color-interactive-primary)         │
│  ❌ var(--primitive-green-400)               │
│  ❌ #1ED760                                  │
└─────────────────────────────────────────────┘
```

### 协议契约的版本管理 (SemVer)

| 变更类型 | 版本号变化 | 示例 | 影响 |
|---------|-----------|------|------|
| **PATCH** | v0.1.0 → v0.1.1 | 修复文档错误 | 无影响 |
| **MINOR** | v0.1.0 → v0.2.0 | 新增代币 | 向后兼容 |
| **MAJOR** | v0.1.0 → v1.0.0 | 删除/重命名代币 | 破坏性变更 |

---

## 🎨 Figma 操作速查

### 必备快捷键

| 功能 | macOS | Windows | 说明 |
|------|-------|---------|------|
| 创建 Frame | F | F | 容器 |
| 创建组件 | ⌘⌥K | Ctrl+Alt+K | Component |
| Auto Layout | ⇧A | Shift+A | 自动布局 |
| 复制样式 | ⌥⌘C | Ctrl+Alt+C | 复制 |
| 粘贴样式 | ⌥⌘V | Ctrl+Alt+V | 粘贴 |
| 搜索 | ⌘/ | Ctrl+/ | 搜索面板 |

### 变量创建流程

```
1. 点击 Variables 图标 (右侧面板)
   ↓
2. Create Variable Collection
   ↓
3. 选择类型 (Color / Number / String / Boolean)
   ↓
4. 添加 Variable
   ↓
5. (可选) 添加 Mode (用于主题切换)
```

### 组件变体创建流程

```
1. 创建 Frame + 样式
   ↓
2. 右键 → Create Component (⌘⌥K)
   ↓
3. 右键 → Add Variant
   ↓
4. 添加 Property (如 state: default/hover)
   ↓
5. 为每个变体设置不同样式
```

### 代币应用检查清单

- [ ] 所有颜色都链接到变量（无游离值）
- [ ] 所有间距使用变量（无硬编码数字）
- [ ] 所有文本应用了文本样式
- [ ] 组件支持主题切换（light/dark）

---

## 💻 CSS 代码速查

### CSS 变量语法

```css
/* 1. 定义变量 (在 :root 或选择器中) */
:root {
  --variable-name: value;
}

/* 2. 使用变量 */
.selector {
  property: var(--variable-name);
}

/* 3. 带回退值的使用 */
.selector {
  property: var(--variable-name, fallback-value);
}

/* 4. 主题覆盖 */
[data-theme="dark"] {
  --variable-name: new-value;
}
```

### 代币命名规范

| 层级 | Figma 格式 | CSS 格式 | 示例 |
|------|-----------|---------|------|
| 原始 | `primitive-color-value` | `--primitive-color-value` | `--primitive-green-400` |
| 语义 | `category/subcategory/name` | `--category-subcategory-name` | `--color-text-primary` |

**命名公式：**
```
--[category]-[element]-[property]-[state]
   颜色       文本      主要的     悬停

示例：--color-text-primary-hover
```

### BEM 命名规范

```css
/* Block (组件) */
.button { }

/* Element (子元素) */
.button__icon { }
.button__text { }

/* Modifier (变体) */
.button--large { }
.button--disabled { }

/* 组合使用 */
.button.button--large { }
.button__icon { }
```

**命名规则：**
- Block: 使用小写字母和连字符
- Element: 双下划线分隔 `__`
- Modifier: 双连字符分隔 `--`

### 必备 CSS 代码片段

#### 1. 基础重置

```css
* {
  box-sizing: border-box;
  margin: 0;
  padding: 0;
}

html {
  font-size: 16px; /* 1rem = 16px */
}
```

#### 2. Flexbox 居中

```css
.container {
  display: flex;
  align-items: center;      /* 垂直居中 */
  justify-content: center;  /* 水平居中 */
  gap: 1rem;                /* 子元素间距 */
}
```

#### 3. 文本溢出省略

```css
.text {
  white-space: nowrap;        /* 不换行 */
  overflow: hidden;           /* 隐藏溢出 */
  text-overflow: ellipsis;    /* 显示省略号 */
}
```

#### 4. 响应式媒体查询

```css
/* 移动端优先 */
.element {
  /* 默认样式 (移动端) */
}

/* 平板 */
@media (min-width: 768px) {
  .element { /* 平板样式 */ }
}

/* 桌面 */
@media (min-width: 1024px) {
  .element { /* 桌面样式 */ }
}
```

#### 5. 可访问性焦点

```css
.interactive:focus-visible {
  outline: 2px solid var(--color-border-focus);
  outline-offset: 2px;
}

/* 移除默认焦点样式（仅在提供自定义样式时） */
.interactive:focus {
  outline: none;
}
```

#### 6. 主题切换过渡

```css
body {
  transition: background-color 120ms ease-in-out,
              color 120ms ease-in-out;
}
```

---

## 🧪 测试检查清单

### 多样性测试矩阵

| 维度 | 测试方法 | 预期结果 |
|------|---------|---------|
| **主题切换** | 点击主题按钮 | 颜色平滑过渡，无闪烁 |
| **响应式** | F12 → 设备工具栏 → iPhone SE | 布局适配，无横向滚动条 |
| **长文本** | 修改文本为100字 | 显示省略号，不破坏布局 |
| **键盘导航** | Tab 键遍历 | 所有交互元素可聚焦，焦点可见 |
| **200% 缩放** | Ctrl/Cmd + 放大 | 文本可读，布局不破损 |
| **对比度** | WAVE 工具检测 | 无对比度错误 (≥4.5:1) |
| **减弱动效** | 系统设置开启 | 过渡动画消失或极短 |

### 可访问性检查清单

- [ ] 所有图片有 `alt` 属性
- [ ] 所有按钮有 `aria-label` 或可见文本
- [ ] 颜色对比度 ≥ 4.5:1 (WCAG AA)
- [ ] 触控目标 ≥ 44×44px
- [ ] 焦点样式清晰可见
- [ ] 键盘可以访问所有功能
- [ ] 使用语义化 HTML (header, main, nav)
- [ ] 表单有 label 关联

### 代码质量检查清单

- [ ] CSS 中无硬编码颜色/尺寸（除根级代币定义）
- [ ] 所有 CSS 变量都有回退值
- [ ] BEM 命名规范一致
- [ ] 无 CSS 选择器优先级冲突
- [ ] 无未使用的 CSS 规则
- [ ] HTML 结构语义化
- [ ] JavaScript 无控制台错误

---

## 🔧 常见问题快速修复

### Figma 问题

| 问题 | 可能原因 | 解决方案 |
|------|---------|---------|
| 变量不显示 | Collection 未创建 | 先创建 Collection |
| 无法引用变量 | 类型不匹配 | 确保 Color → Color, Number → Number |
| 主题切换无效 | 未启用 Modes | Collection → 添加 Mode |
| 组件未更新 | 实例未刷新 | 右键 → Update main component |

### CSS 问题

| 问题 | 可能原因 | 解决方案 |
|------|---------|---------|
| 变量不生效 | 拼写错误 | DevTools → Computed 检查 |
| 样式不显示 | CSS 未加载 | 检查 `<link>` 标签 |
| 布局错乱 | Flexbox 属性错误 | 检查 `display: flex` |
| 响应式无效 | 缺少 viewport meta | 添加 `<meta name="viewport">` |

### JavaScript 问题

| 问题 | 可能原因 | 解决方案 |
|------|---------|---------|
| 主题切换无效 | 选择器错误 | Console 检查错误信息 |
| 事件不触发 | 元素未加载 | 将 script 放在 body 底部 |
| 变量未定义 | 拼写错误 | 使用 `console.log()` 调试 |

---

## 📐 设计代币完整清单

### 颜色代币

```css
/* Primitives */
--primitive-green-400: #1ED760;
--primitive-green-500: #1AAE4E;
--primitive-gray-800: #121212;
--primitive-gray-300: #B3B3B3;
--primitive-white: #FFFFFF;
--primitive-black: #000000;
--primitive-blue-500: #2D72D9;

/* Semantics */
--color-background-base: var(--primitive-white);
--color-text-primary: var(--primitive-black);
--color-text-secondary: var(--primitive-gray-300);
--color-interactive-primary: var(--primitive-green-400);
--color-interactive-primary-hover: var(--primitive-green-500);
--color-border-focus: var(--primitive-blue-500);
```

### 间距代币

```css
--spacing-xs: 0.25rem;  /* 4px */
--spacing-s: 0.5rem;    /* 8px */
--spacing-m: 1rem;      /* 16px */
--spacing-l: 1.5rem;    /* 24px */
--spacing-xl: 2rem;     /* 32px */
```

### 圆角代币

```css
--radius-s: 0.25rem;    /* 4px */
--radius-m: 0.5rem;     /* 8px */
--radius-full: 9999px;  /* 完全圆角 */
```

### 排版代币

```css
/* 字号 */
--font-size-l: 3rem;      /* 48px - Heading */
--font-size-m: 1rem;      /* 16px - Body */
--font-size-s: 0.75rem;   /* 12px - Caption */

/* 行高 */
--line-height-tight: 1.2;
--line-height-base: 1.5;

/* 字重 */
--font-weight-regular: 400;
--font-weight-bold: 700;
```

### 动效代币

```css
--motion-duration-fast: 120ms;
--motion-easing-standard: ease-in-out;
```

---

## 🎨 组件样式模板

### Button 组件

```css
.button {
  /* 布局 */
  display: inline-flex;
  align-items: center;
  justify-content: center;
  padding: var(--spacing-m);
  
  /* 视觉 */
  background-color: var(--color-interactive-primary);
  color: var(--primitive-white);
  border: none;
  border-radius: var(--radius-full);
  
  /* 交互 */
  cursor: pointer;
  transition: background-color var(--motion-duration-fast);
}

.button:hover {
  background-color: var(--color-interactive-primary-hover);
}

.button:focus-visible {
  outline: 2px solid var(--color-border-focus);
  outline-offset: 2px;
}
```

### Card 组件

```css
.card {
  /* 布局 */
  display: flex;
  flex-direction: column;
  gap: var(--spacing-m);
  padding: var(--spacing-l);
  
  /* 视觉 */
  background-color: var(--color-background-base);
  border-radius: var(--radius-m);
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
}
```

---

## 📱 HTML 模板片段

### 基础骨架

```html
<!DOCTYPE html>
<html lang="zh-CN">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta name="description" content="页面描述">
    <title>页面标题</title>
    <link rel="stylesheet" href="style.css">
</head>
<body data-theme="light">
    
    <!-- 内容区域 -->
    
    <script src="script.js"></script>
</body>
</html>
```

### 主题切换器

```html
<button id="theme-switcher" aria-label="切换主题">
    🌓 切换主题
</button>

<script>
const switcher = document.getElementById('theme-switcher');
const body = document.body;

// 恢复保存的主题
const saved = localStorage.getItem('theme') || 'light';
body.setAttribute('data-theme', saved);

// 切换事件
switcher.addEventListener('click', () => {
    const current = body.getAttribute('data-theme');
    const newTheme = current === 'light' ? 'dark' : 'light';
    body.setAttribute('data-theme', newTheme);
    localStorage.setItem('theme', newTheme);
});
</script>
```

---

## 🔍 调试技巧

### Chrome DevTools 快捷键

| 功能 | macOS | Windows |
|------|-------|---------|
| 打开 DevTools | ⌘⌥I | F12 |
| 元素选择器 | ⌘⇧C | Ctrl+Shift+C |
| 控制台 | ⌘⌥J | Ctrl+Shift+J |
| 设备模拟器 | ⌘⇧M | Ctrl+Shift+M |

### 检查 CSS 变量值

```javascript
// 在 Console 中运行
getComputedStyle(document.documentElement)
  .getPropertyValue('--color-text-primary')
```

### 查看所有 CSS 变量

```javascript
// 在 Console 中运行
const styles = getComputedStyle(document.documentElement);
const variables = Array.from(styles)
  .filter(prop => prop.startsWith('--'));
console.table(variables);
```

---

## 📚 学习资源

### 官方文档
- **Figma Variables:** https://help.figma.com/hc/en-us/articles/15339657135383
- **CSS Variables (MDN):** https://developer.mozilla.org/en-US/docs/Web/CSS/Using_CSS_custom_properties
- **BEM Methodology:** https://getbem.com/

### 工具推荐
- **WAVE (可访问性):** https://wave.webaim.org/extension/
- **Contrast Checker:** https://webaim.org/resources/contrastchecker/
- **Can I Use:** https://caniuse.com/

### 灵感来源
- **Spotify Design:** https://spotify.design/
- **Material Design:** https://m3.material.io/
- **GOV.UK Design System:** https://design-system.service.gov.uk/

---

## 💡 关键记忆点

### 设计系统的3个核心原则
1. **唯一真源** - 所有样式值来自代币，零硬编码
2. **分层架构** - 原始代币 → 语义代币 → 组件
3. **协议优先** - 有明确的命名、版本、变更规则

### 质量保证的3个维度
1. **功能正确** - 能实现设计稿的视觉效果
2. **内在韧性** - 能应对长文本、小屏幕等极端情况
3. **可访问性** - 符合 WCAG 标准，键盘可操作

### 协作成功的3个要素
1. **文档化** - 契约文档是团队的"宪法"
2. **自动化** - 用测试代替人工检查
3. **沟通透明** - 变更要有 RFC，影响要提前通知

---

**🎯 记住：设计系统不是工具，不是代码，而是协议——一份团队共同遵守、不断演化的契约。**

---

**打印提示：** 建议双面打印，正面为概念+速查，反面为代码片段+问题修复

**文档版本:** v1.0  
**配套讲义:** teaching-manual.md  
**最后更新:** 2025年10月18日

