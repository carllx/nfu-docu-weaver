# Encore-Lite 设计系统实践教学讲义
## 从 Figma 到 H5：协议驱动的组件化开发完整工作流

---

**课程信息**
- **课程时长：** 3-4 小时（含休息）
- **目标学员：** 数字媒体艺术专业学生
- **先修要求：** Figma 基础操作 + HTML/CSS 初步了解
- **教学模式：** 讲师演示 + 学生同步实践

---

## 📚 课程大纲

| 时间段 | 模块 | 内容 | 产出物 |
|--------|------|------|--------|
| 00:00-00:30 | 导入 | 设计系统概念 + 协议思维 | 认知框架 |
| 00:30-01:30 | Figma 设计 | 代币定义 + 组件构建 | Figma 组件库 |
| 01:30-01:45 | 休息 | - | - |
| 01:45-02:45 | H5 实现 | CSS 变量 + BEM 结构 | 静态页面 |
| 02:45-03:30 | 增强 | 主题切换 + 响应式 | 完整系统 |
| 03:30-04:00 | 验证 | 测试矩阵 + 协议演练 | 质量保证 |

---

## 第一部分：理论导入 (30分钟)

### 1.1 案例导入：Spotify 的设计困境

**讲师演示材料准备：**
- 展示 3-5 张 Spotify 不同版本的界面截图（Web、移动端、桌面端）
- 指出其中的细微不一致（按钮颜色、间距差异）

**引导问题：**
> "大家看，这是 Spotify 在 2020 年的三个不同平台的界面。谁能找出这些界面中的不一致之处？"

**核心观点：**
- 设计系统不是"做一套组件"，而是"建立一套协议"
- Spotify 的 Encore 设计系统解决的核心问题：**跨团队、跨平台的一致性**

### 1.2 核心概念讲解 (15分钟)

#### 概念 1：设计代币 (Design Tokens)
```
传统做法：设计师标注 "背景色 #1ED760"
问题：100 个组件就有 100 个地方写 #1ED760，修改时容易遗漏

协议做法：定义代币 "color-interactive-primary = #1ED760"
优势：修改 1 次，全局更新
```

**课堂演示：**
1. 打开一个没有使用代币的 Figma 文件
2. 展示如何手动修改 20 个组件的颜色（费时费力）
3. 再展示使用变量的版本，一键全局更新

#### 概念 2：两级代币架构

```
原始代币 (Primitives)     →    语义代币 (Semantics)
green-400: #1ED760         →    color-interactive-primary: green-400
                                (用于：按钮、链接、进度条)

gray-800: #121212          →    color-background-base-dark: gray-800
                                (用于：暗色模式背景)
```

**类比教学：**
> "原始代币就像'颜料管'，语义代币就像'这是天空色'。我们不直接用颜料管画画，而是先定义'天空应该用哪支颜料'。"

#### 概念 3：协议契约 (Contract)

**展示：设计代币契约 v0.1**
```yaml
版本: v0.1.0
命名规则: 使用 / 分隔层级 (Figma) 或 - 分隔 (CSS)
主题支持: 必须定义 light 和 dark 两种模式
变更类型:
  - 新增代币: MINOR (v0.2.0)
  - 修改原始代币映射: MAJOR (v1.0.0)
  - 删除代币: MAJOR + 废弃公告
```

---

## 第二部分：Figma 实战 - 构建 Encore-Lite 组件库 (60分钟)

### 2.1 项目设置 (5分钟)

**学生操作步骤：**
1. 打开 Figma，创建新文件，命名为 `Encore-Lite-[你的名字]`
2. 创建 3 个页面：
   - `📦 Design Tokens` (代币定义页)
   - `🧩 Components` (组件库页)
   - `🎨 Demo Page` (演示页面)

### 2.2 定义设计代币 (20分钟)

#### 步骤 1：创建颜色变量 (Color Tokens)

**讲师边演示边讲解：**

1. **点击右侧面板的 "Local variables" 图标**
2. **创建集合 "Primitives/Color"**

```
新建变量：
├─ green-400    #1ED760
├─ gray-800     #121212
├─ gray-300     #B3B3B3
├─ white        #FFFFFF
└─ black        #000000
```

3. **创建集合 "Semantic/Color"，启用模式 (Modes)**

**重要操作：**
- 点击 "+" 添加模式，创建 `light` 和 `dark` 两个模式
- 设置 `light` 为默认模式

```
语义变量配置：

color/background/base
  - light 模式: white
  - dark 模式: gray-800

color/text/primary
  - light 模式: black
  - dark 模式: white

color/text/secondary
  - light 模式: gray-300
  - dark 模式: gray-300

color/interactive/primary
  - light 模式: green-400
  - dark 模式: green-400

color/interactive/primary-hover
  - light 模式: #1AAE4E (手动输入深绿色)
  - dark 模式: #1AAE4E

color/border/focus
  - light 模式: #2D72D9
  - dark 模式: #2D72D9
```

**💡 教学要点：**
> "注意看，`color/text/primary` 在两个模式下指向了不同的原始代币。这就是语义的力量——同一个'意图'在不同环境下有不同的'实现'。"

#### 步骤 2：创建间距变量 (Spacing Tokens)

**学生操作（讲师巡视指导）：**

1. 创建新集合 "Primitives/Spacing"
2. 类型选择 "Number"
3. 添加以下变量：

```
spacing/xs    4   (px)
spacing/s     8
spacing/m     16
spacing/l     24
spacing/xl    32
```

#### 步骤 3：创建圆角变量 (Radius Tokens)

```
新建集合 "Primitives/Radius"

radius/s      4   (px)
radius/m      8
radius/full   999  (用于完全圆角)
```

#### 步骤 4：创建文本样式 (Typography Tokens)

**切换到 "Text styles" 面板：**

```
创建 3 个文本样式：

heading/large
  - 字体: Inter (或系统 Sans-serif)
  - 大小: 48px
  - 粗细: Bold (700)
  - 行高: Auto

body/medium
  - 字体: Inter
  - 大小: 16px
  - 粗细: Regular (400)
  - 行高: 1.5

caption/small
  - 字体: Inter
  - 大小: 12px
  - 粗细: Regular
  - 行高: 1.4
```

**💡 检查点 1 (20分钟时)：**
> "现在每位同学应该有 16 个变量 + 3 个文本样式。请举手示意完成情况。"

---

### 2.3 构建原子组件 (15分钟)

#### 组件 1：Button (按钮分子)

**讲师演示关键操作：**

1. **创建基础框架：**
   - 按 `F` 创建 Frame
   - 命名 `.button`
   - 设置 Auto Layout (Shift + A)
   - 内边距设置为 `{spacing/m}` (16px)

2. **添加文本：**
   - 按 `T` 添加文本层 "Play"
   - 应用文本样式 `body/medium`

3. **应用代币样式：**
   ```
   填充色: {color/interactive/primary}
   文本颜色: {white}
   圆角: {radius/full}
   ```

4. **创建组件变体：**
   - 选中 `.button`，右键 → "Create component"
   - 右键组件 → "Add variant"
   - 添加属性 `state` with values: `default`, `hover`
   - 在 `hover` 变体中：
     - 填充色改为 `{color/interactive/primary-hover}`

**学生练习时间：** 5分钟，讲师巡视辅导

---

### 2.4 构建分子组件 (20分钟)

#### 组件 2：SongRow (歌曲行)

**学生跟随讲师操作：**

1. **创建容器：**
   ```
   Frame 命名: .song-row
   Auto Layout: 
     - Direction: Horizontal
     - Gap: {spacing/m} (16px)
     - Padding: {spacing/s} {spacing/xl} (8px 32px)
     - Alignment: Center
   ```

2. **添加子元素：**
   
   **A. 封面图**
   ```
   Rectangle 命名: cover
   尺寸: 40px × 40px
   圆角: {radius/s}
   填充: 占位图或渐变色
   ```

   **B. 歌曲信息组**
   ```
   Frame 命名: info
   Auto Layout: Vertical, Gap 4px
   
   内部文本层 1 (歌曲名):
     - 文本: "Song Title"
     - 样式: {body/medium}
     - 颜色: {color/text/primary}
   
   内部文本层 2 (歌手名):
     - 文本: "Artist Name"
     - 样式: {caption/small}
     - 颜色: {color/text/secondary}
   ```

   **C. 时长**
   ```
   Text 命名: duration
   文本: "3:45"
   样式: {caption/small}
   颜色: {color/text/secondary}
   ```

3. **设置布局权重：**
   - 选中 `info` 层
   - 在右侧面板设置 "Horizontal resizing" → "Fill container"
   - 这样 `info` 会自动撑满剩余空间

4. **转为组件：**
   - 选中 `.song-row`
   - Ctrl/Cmd + Alt + K 创建组件

**💡 教学要点：**
> "注意看 `info` 层的设置。我们使用了 'Fill container'，这意味着无论歌曲名多长，都会自动适应容器宽度。这就是'内在韧性'设计的开始。"

---

#### 组件 3：PlaylistHeader (播放列表头部)

**学生独立完成（讲师提供结构参考）：**

```
Frame: .playlist-header
├─ Auto Layout: Horizontal
├─ Gap: {spacing/l} (24px)
├─ Padding: {spacing/xl} (32px)
│
├─ 子元素 1: cover (Rectangle)
│   ├─ 尺寸: 160px × 160px
│   ├─ 圆角: {radius/s}
│   └─ 填充: 占位图
│
├─ 子元素 2: info (Frame, Vertical)
│   ├─ Gap: {spacing/s}
│   ├─ Horizontal resizing: Fill
│   │
│   ├─ title (Text)
│   │   ├─ 文本: "My Favorite Songs"
│   │   ├─ 样式: {heading/large}
│   │   └─ 颜色: {color/text/primary}
│   │
│   └─ description (Text)
│       ├─ 文本: "A collection of awesome tracks"
│       ├─ 样式: {body/medium}
│       └─ 颜色: {color/text/secondary}
│
└─ 子元素 3: play-button (Component Instance)
    └─ 使用之前创建的 .button 组件实例
```

**独立操作时间：** 10分钟

**💡 检查点 2 (60分钟时)：**
> "现在我们应该有 3 个组件：Button, SongRow, PlaylistHeader。请打开 Assets 面板确认。"

---

### 2.5 构建演示页面 (5分钟)

**快速操作：**

1. 切换到 `🎨 Demo Page`
2. 创建 Frame，尺寸 1440×900，命名 "Desktop View"
3. 设置背景色为 `{color/background/base}`
4. 从 Assets 拖入组件：
   - 1 个 PlaylistHeader (放在顶部)
   - 3-4 个 SongRow (垂直排列)

5. **测试主题切换：**
   - 选中整个 "Desktop View" Frame
   - 在右侧面板找到 "Mode" 下拉菜单
   - 切换 `light` ↔ `dark`
   - **观察颜色自动变化！**

**🎉 里程碑：Figma 部分完成！**

---

## 第三部分：休息 (15分钟)

**讲师布置预习任务：**
- 在休息期间，学生可以预先准备开发环境
- 安装 VS Code + Live Server 插件
- 创建项目文件夹 `encore-lite-project`

---

## 第四部分：H5 实现 - 代币驱动的代码 (60分钟)

### 4.1 环境准备 (5分钟)

**学生操作清单：**

```bash
# 创建项目结构
encore-lite-project/
├── index.html
├── style.css
└── assets/
    └── (占位图片，可选)
```

**VS Code 插件确认：**
- ✅ Live Server (必需)
- ✅ HTML CSS Support (推荐)
- ✅ Prettier (推荐)

---

### 4.2 构建 CSS 代币系统 (20分钟)

**讲师边写边讲解，学生跟随：**

#### 文件：`style.css`

```css
/* ============================================
   Encore-Lite v0.1.0 - Design Token Contract
   ============================================ */

/* --- CSS Reset (必要性讲解) --- */
* {
  box-sizing: border-box;
  margin: 0;
  padding: 0;
}

/* --- Token Layer 1: Primitives --- */
:root {
  /* Color Primitives */
  --primitive-green-400: #1ED760;
  --primitive-gray-800: #121212;
  --primitive-gray-300: #B3B3B3;
  --primitive-white: #FFFFFF;
  --primitive-black: #000000;
  
  /* 状态色 (扩展原始代币) */
  --primitive-green-500: #1AAE4E; /* hover state */
  --primitive-blue-500: #2D72D9;  /* focus state */
}

/* --- Token Layer 2: Semantic Tokens (Light Theme Default) --- */
:root {
  /* 背景 */
  --color-background-base: var(--primitive-white);
  
  /* 文本 */
  --color-text-primary: var(--primitive-black);
  --color-text-secondary: var(--primitive-gray-300);
  
  /* 交互元素 */
  --color-interactive-primary: var(--primitive-green-400);
  --color-interactive-primary-hover: var(--primitive-green-500);
  --color-border-focus: var(--primitive-blue-500);
  
  /* 间距 (基于 16px 基准) */
  --spacing-xs: 0.25rem;  /* 4px */
  --spacing-s: 0.5rem;    /* 8px */
  --spacing-m: 1rem;      /* 16px */
  --spacing-l: 1.5rem;    /* 24px */
  --spacing-xl: 2rem;     /* 32px */
  
  /* 圆角 */
  --radius-s: 0.25rem;    /* 4px */
  --radius-m: 0.5rem;     /* 8px */
  --radius-full: 9999px;
  
  /* 排版 */
  --font-size-l: 3rem;        /* 48px - Heading Large */
  --font-size-m: 1rem;        /* 16px - Body Medium */
  --font-size-s: 0.75rem;     /* 12px - Caption Small */
  --line-height-tight: 1.2;
  --line-height-base: 1.5;
  --font-weight-regular: 400;
  --font-weight-bold: 700;
  
  /* 动效 */
  --motion-duration-fast: 120ms;
  --motion-easing-standard: ease-in-out;
}

/* --- Theme Override: Dark Mode --- */
[data-theme="dark"] {
  --color-background-base: var(--primitive-gray-800);
  --color-text-primary: var(--primitive-white);
  /* 其他语义代币保持不变，自动继承 */
}

/* --- 可访问性增强 --- */
@media (prefers-reduced-motion: reduce) {
  *, *::before, *::after {
    animation-duration: 1ms !important;
    transition-duration: 1ms !important;
  }
}

/* ============================================
   Base Styles
   ============================================ */
html {
  font-size: 16px; /* 1rem = 16px 基准 */
}

body {
  font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif;
  background-color: var(--color-background-base);
  color: var(--color-text-primary);
  font-size: var(--font-size-m);
  line-height: var(--line-height-base);
  transition: background-color var(--motion-duration-fast) var(--motion-easing-standard),
              color var(--motion-duration-fast) var(--motion-easing-standard);
}
```

**💡 教学暂停点 (15分钟时)：**
> "大家注意看这里的架构。我们有两层代币：
> 1. Primitives 是'颜料'
> 2. Semantics 是'用途'
> 
> 当我们切换到 dark 模式时，只需要覆盖少数几个语义代币，所有组件就会自动适配。这就是'唯一真源'的威力。"

---

### 4.3 构建 BEM 组件样式 (20分钟)

**继续在 `style.css` 中添加：**

```css
/* ============================================
   Components - BEM Methodology
   ============================================ */

/* --- Button Component (Atom) --- */
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
  
  /* 排版 */
  font-size: var(--font-size-m);
  font-weight: var(--font-weight-regular);
  text-decoration: none;
  
  /* 交互 */
  cursor: pointer;
  transition: background-color var(--motion-duration-fast) var(--motion-easing-standard);
}

/* Button States */
.button:hover {
  background-color: var(--color-interactive-primary-hover);
}

.button:focus-visible {
  outline: 2px solid var(--color-border-focus);
  outline-offset: 2px;
}

.button:active {
  transform: scale(0.98);
}

/* Button Variant: Large (for PlaylistHeader) */
.button--large {
  width: 3.5rem;   /* 56px */
  height: 3.5rem;
  font-size: 1.5rem;
}

/* --- SongRow Component (Molecule) --- */
.song-row {
  display: flex;
  align-items: center;
  gap: var(--spacing-m);
  padding: var(--spacing-s) var(--spacing-xl);
  transition: background-color var(--motion-duration-fast);
}

.song-row:hover {
  background-color: rgba(255, 255, 255, 0.05); /* 微妙的悬停效果 */
}

.song-row__cover {
  width: 2.5rem;   /* 40px */
  height: 2.5rem;
  border-radius: var(--radius-s);
  object-fit: cover;
  flex-shrink: 0;  /* 防止图片被压缩 */
}

.song-row__info {
  flex: 1;         /* 占据剩余空间 */
  min-width: 0;    /* 允许文本截断 */
}

.song-row__title {
  font-size: var(--font-size-m);
  color: var(--color-text-primary);
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
}

.song-row__artist {
  font-size: var(--font-size-s);
  color: var(--color-text-secondary);
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
}

.song-row__duration {
  font-size: var(--font-size-s);
  color: var(--color-text-secondary);
  flex-shrink: 0;
}

/* --- PlaylistHeader Component (Organism) --- */
.playlist-header {
  display: flex;
  align-items: center;
  gap: var(--spacing-l);
  padding: var(--spacing-xl);
  flex-wrap: wrap; /* 响应式基础 */
}

.playlist-header__cover {
  width: 10rem;    /* 160px */
  height: 10rem;
  border-radius: var(--radius-s);
  object-fit: cover;
  flex-shrink: 0;
}

.playlist-header__info {
  flex: 1;
  min-width: 200px; /* 确保最小可读宽度 */
}

.playlist-header__title {
  font-size: var(--font-size-l);
  font-weight: var(--font-weight-bold);
  line-height: var(--line-height-tight);
  color: var(--color-text-primary);
  margin-bottom: var(--spacing-s);
}

.playlist-header__description {
  font-size: var(--font-size-m);
  color: var(--color-text-secondary);
  line-height: var(--line-height-base);
}

.playlist-header__play-button {
  margin-left: auto; /* 推到右侧 */
}

/* 响应式：小屏幕优化 */
@media (max-width: 768px) {
  .playlist-header {
    flex-direction: column;
    text-align: center;
  }
  
  .playlist-header__play-button {
    margin-left: 0;
    margin-top: var(--spacing-m);
  }
}

/* --- Utility: Theme Switcher Button --- */
#theme-switcher {
  position: fixed;
  top: var(--spacing-m);
  right: var(--spacing-m);
  padding: var(--spacing-s) var(--spacing-m);
  background: var(--color-interactive-primary);
  color: white;
  border: none;
  border-radius: var(--radius-m);
  cursor: pointer;
  font-size: var(--font-size-s);
  z-index: 1000;
  transition: background-color var(--motion-duration-fast);
}

#theme-switcher:hover {
  background-color: var(--color-interactive-primary-hover);
}
```

**💡 代码讲解要点：**
1. **BEM 命名：** `.block__element--modifier` 清晰的层级关系
2. **零硬编码：** 所有值都通过 `var()` 引用代币
3. **内在韧性：** 使用 `flex`, `min-width`, `text-overflow` 处理极端情况

---

### 4.4 构建 HTML 结构 (15分钟)

**讲师演示框架，学生填充内容：**

#### 文件：`index.html`

```html
<!DOCTYPE html>
<html lang="zh-CN">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta name="description" content="Encore-Lite 设计系统演示页面">
    <title>Encore-Lite - My Favorite Songs</title>
    <link rel="stylesheet" href="style.css">
</head>
<body data-theme="light">
    
    <!-- 主题切换器 -->
    <button id="theme-switcher" aria-label="切换主题">🌓 切换主题</button>
    
    <!-- 播放列表头部 -->
    <header class="playlist-header">
        <img 
            class="playlist-header__cover" 
            src="https://placehold.co/160x160/282828/FFFFFF?text=Playlist" 
            alt="播放列表封面"
        >
        <div class="playlist-header__info">
            <h1 class="playlist-header__title">我最喜欢的歌曲</h1>
            <p class="playlist-header__description">精选的优质音乐合集，适合工作和学习时聆听。</p>
        </div>
        <button class="button button--large playlist-header__play-button" aria-label="播放全部">
            ▶
        </button>
    </header>
    
    <!-- 歌曲列表 -->
    <main class="song-list">
        <!-- 歌曲行 1 -->
        <article class="song-row">
            <img 
                class="song-row__cover" 
                src="https://placehold.co/40x40/1ED760/FFFFFF?text=S1" 
                alt="歌曲封面"
            >
            <div class="song-row__info">
                <div class="song-row__title">夜空中最亮的星</div>
                <div class="song-row__artist">逃跑计划</div>
            </div>
            <div class="song-row__duration">4:35</div>
        </article>
        
        <!-- 歌曲行 2 -->
        <article class="song-row">
            <img 
                class="song-row__cover" 
                src="https://placehold.co/40x40/1ED760/FFFFFF?text=S2" 
                alt="歌曲封面"
            >
            <div class="song-row__info">
                <div class="song-row__title">起风了</div>
                <div class="song-row__artist">买辣椒也用券</div>
            </div>
            <div class="song-row__duration">5:12</div>
        </article>
        
        <!-- 歌曲行 3 -->
        <article class="song-row">
            <img 
                class="song-row__cover" 
                src="https://placehold.co/40x40/1ED760/FFFFFF?text=S3" 
                alt="歌曲封面"
            >
            <div class="song-row__info">
                <div class="song-row__title">青花瓷</div>
                <div class="song-row__artist">周杰伦</div>
            </div>
            <div class="song-row__duration">3:58</div>
        </article>
        
        <!-- 歌曲行 4 -->
        <article class="song-row">
            <img 
                class="song-row__cover" 
                src="https://placehold.co/40x40/1ED760/FFFFFF?text=S4" 
                alt="歌曲封面"
            >
            <div class="song-row__info">
                <div class="song-row__title">成都</div>
                <div class="song-row__artist">赵雷</div>
            </div>
            <div class="song-row__duration">5:28</div>
        </article>
    </main>
    
    <!-- 主题切换逻辑 -->
    <script>
        // 主题切换功能
        const themeSwitcher = document.getElementById('theme-switcher');
        const body = document.body;
        
        // 从 localStorage 恢复主题偏好
        const savedTheme = localStorage.getItem('theme') || 'light';
        body.setAttribute('data-theme', savedTheme);
        
        // 主题切换事件
        themeSwitcher.addEventListener('click', () => {
            const currentTheme = body.getAttribute('data-theme');
            const newTheme = currentTheme === 'light' ? 'dark' : 'light';
            
            body.setAttribute('data-theme', newTheme);
            localStorage.setItem('theme', newTheme);
            
            // 可访问性公告
            themeSwitcher.textContent = newTheme === 'dark' ? '☀️ 亮色模式' : '🌙 暗色模式';
        });
        
        // 初始化按钮文本
        themeSwitcher.textContent = savedTheme === 'dark' ? '☀️ 亮色模式' : '🌙 暗色模式';
    </script>
</body>
</html>
```

**💡 HTML 教学要点：**
1. **语义化标签：** 使用 `<header>`, `<main>`, `<article>` 而非全是 `<div>`
2. **可访问性：** 所有图片都有 `alt`，按钮有 `aria-label`
3. **渐进增强：** JavaScript 失效时，页面仍可查看（只是无法切换主题）

---

### 4.5 运行与测试 (5分钟)

**学生操作：**

1. 在 VS Code 中右键 `index.html` → "Open with Live Server"
2. 浏览器自动打开页面
3. 点击右上角主题切换按钮，观察颜色变化
4. 打开开发者工具 (F12) → Elements 面板
5. 查看 `<body>` 标签的 `data-theme` 属性变化

**💡 检查点 3 (完成 H5 基础实现)：**
> "现在每个人都应该看到一个可以切换主题的播放列表页面。"

---

## 第五部分：增强与优化 (45分钟)

### 5.1 响应式增强 (15分钟)

**讲师提问：**
> "现在请大家用手机模拟器（F12 → 切换设备工具栏）查看页面。发现什么问题了吗？"

**学生可能发现的问题：**
- 头部封面和按钮在小屏上挤在一起
- 歌曲名称过长时被挤压

**解决方案（已在 CSS 中预留）：**

在 `style.css` 中添加更多响应式规则：

```css
/* 在现有代码后追加 */

/* --- 增强的响应式规则 --- */
@media (max-width: 480px) {
  .playlist-header__title {
    font-size: 2rem; /* 从 3rem 降到 2rem */
  }
  
  .song-row {
    padding: var(--spacing-s) var(--spacing-m); /* 减少左右内边距 */
  }
  
  .song-row__duration {
    font-size: 0.625rem; /* 10px，更紧凑 */
  }
}

/* 极小屏幕优化 */
@media (max-width: 320px) {
  .playlist-header__cover {
    width: 6rem;  /* 从 10rem 降到 6rem */
    height: 6rem;
  }
}
```

---

### 5.2 高级交互效果 (15分钟)

**添加长按效果和焦点管理：**

```css
/* 在 style.css 的 .song-row 部分追加 */

.song-row {
  /* ... 现有样式 ... */
  cursor: pointer;
  position: relative;
}

/* 键盘导航支持 */
.song-row:focus-within {
  outline: 2px solid var(--color-border-focus);
  outline-offset: -2px;
}

/* 选中状态 */
.song-row.is-playing {
  background-color: rgba(30, 215, 96, 0.1); /* 绿色高亮 */
}

.song-row.is-playing .song-row__title {
  color: var(--color-interactive-primary);
}
```

**在 HTML 的 `<script>` 中添加交互逻辑：**

```javascript
// 在现有 script 标签内追加

// 歌曲行点击播放效果
const songRows = document.querySelectorAll('.song-row');

songRows.forEach(row => {
    row.addEventListener('click', function() {
        // 移除其他行的播放状态
        songRows.forEach(r => r.classList.remove('is-playing'));
        
        // 添加当前行的播放状态
        this.classList.add('is-playing');
        
        // 模拟播放反馈
        console.log('正在播放:', this.querySelector('.song-row__title').textContent);
    });
    
    // 键盘可访问性
    row.setAttribute('tabindex', '0');
    row.setAttribute('role', 'button');
    
    row.addEventListener('keydown', function(e) {
        if (e.key === 'Enter' || e.key === ' ') {
            e.preventDefault();
            this.click();
        }
    });
});
```

---

### 5.3 性能优化 (10分钟)

**讲师讲解并演示：**

#### 优化 1：使用 CSS `contain` 属性

```css
/* 在 .song-row 中添加 */
.song-row {
  /* ... 现有样式 ... */
  contain: layout style paint; /* 隔离重排/重绘范围 */
}
```

#### 优化 2：图片懒加载

在 HTML 中的 `<img>` 标签添加：

```html
<img 
    loading="lazy"
    class="song-row__cover" 
    src="..." 
    alt="..."
>
```

#### 优化 3：CSS 变量回退值

**讲师提问：**
> "如果浏览器不支持 CSS 变量怎么办？"

**在关键位置添加回退：**

```css
body {
  background-color: #FFFFFF; /* 回退值 */
  background-color: var(--color-background-base);
  
  color: #000000; /* 回退值 */
  color: var(--color-text-primary);
}
```

---

### 5.4 可访问性审计 (5分钟)

**使用浏览器工具检测：**

1. **打开 Chrome DevTools → Lighthouse**
2. **选择 "Accessibility" 类别**
3. **运行审计**

**常见问题修复：**

```html
<!-- 在 <html> 标签添加语言声明 -->
<html lang="zh-CN">

<!-- 为所有交互元素添加 aria 标签 -->
<button aria-label="播放全部歌曲">▶</button>

<!-- 确保颜色对比度 -->
<!-- 使用 WebAIM 对比度检查工具验证 -->
```

---

## 第六部分：契约验证与演化 (30分钟)

### 6.1 创建设计契约文档 (10分钟)

**学生创建新文件：** `DESIGN-CONTRACT.md`

```markdown
# Encore-Lite 设计契约 v0.1.0

## 版本策略
遵循语义化版本控制 (SemVer)：
- **MAJOR** (v1.0.0): 删除/重命名代币，不向后兼容
- **MINOR** (v0.2.0): 新增代币
- **PATCH** (v0.1.1): 修复文档或错误

## 代币架构

### 第一层：原始代币 (Primitives)
纯粹的值，不表达用途。

| 代币名称 | 值 | 说明 |
|---------|---|------|
| `primitive-green-400` | `#1ED760` | 品牌主色 |
| `primitive-gray-800` | `#121212` | 深色背景 |
| `primitive-white` | `#FFFFFF` | 纯白 |
| `primitive-black` | `#000000` | 纯黑 |

### 第二层：语义代币 (Semantics)
表达使用意图，支持多主题。

| 代币名称 | Light 映射 | Dark 映射 | 用途 |
|---------|----------|---------|------|
| `color-background-base` | `primitive-white` | `primitive-gray-800` | 页面背景 |
| `color-text-primary` | `primitive-black` | `primitive-white` | 主要文本 |
| `color-interactive-primary` | `primitive-green-400` | `primitive-green-400` | 主要交互元素 |

## 命名规范

### Figma 命名
使用斜杠分隔：`color/text/primary`

### CSS 命名
使用连字符：`--color-text-primary`

## 变更流程

### 步骤 1: 提案
提交变更请求，说明原因和影响范围。

### 步骤 2: 影响评估
- 列出所有使用该代币的组件
- 评估版本变更类型 (MAJOR/MINOR/PATCH)

### 步骤 3: 实施
1. 更新 Figma 变量
2. 更新 CSS 代币
3. 运行测试矩阵
4. 更新文档版本号

### 步骤 4: 公告
通知所有相关方（设计师、开发者）。

## 不变式 (Invariants)
以下规则必须始终满足：

- ✅ 所有交互元素的对比度 ≥ 4.5:1 (WCAG AA)
- ✅ 所有触控目标尺寸 ≥ 44×44px
- ✅ 所有语义代币必须有明确的使用场景说明
- ✅ 不允许在组件中硬编码原始值
```

---

### 6.2 契约测试演练 (15分钟)

**场景 1：非破坏性变更 (MINOR)**

**讲师引导：**
> "假设我们要添加一个新的代币 `color-border-subtle`，用于表单边框。这是什么类型的变更？"

**学生操作：**

1. **在 CSS 中添加：**
```css
:root {
  --color-border-subtle: rgba(0, 0, 0, 0.1);
}

[data-theme="dark"] {
  --color-border-subtle: rgba(255, 255, 255, 0.1);
}
```

2. **更新契约文档：**
```markdown
版本: v0.2.0 (MINOR 升级)
变更日志:
- 新增 `color-border-subtle` 用于表单边框
```

3. **无需更新现有组件**（非破坏性）

---

**场景 2：破坏性变更 (MAJOR)**

**讲师引导：**
> "假设我们要将 `color-interactive-primary` 重命名为 `color-brand-primary`。这会影响什么？"

**学生操作：**

1. **影响评估清单：**
```
受影响组件:
- ✅ .button (背景色)
- ✅ .song-row.is-playing (文本色)
- ✅ #theme-switcher (背景色)

需要更新的文件:
- ✅ style.css (3处)
- ✅ index.html (无，使用 class 而非内联样式)
- ✅ DESIGN-CONTRACT.md
```

2. **执行全局替换：**
   - VS Code: Ctrl/Cmd + Shift + H
   - 搜索: `--color-interactive-primary`
   - 替换: `--color-brand-primary`
   - 替换所有

3. **更新契约文档：**
```markdown
版本: v1.0.0 (MAJOR 升级)

⚠️ 破坏性变更:
- 重命名 `color-interactive-primary` → `color-brand-primary`
- 迁移指南: 全局搜索替换所有引用

原因: 更准确地反映代币的语义（品牌色，而非仅限交互元素）
```

4. **测试验证：**
   - 刷新页面
   - 测试所有按钮是否正常显示
   - 切换主题验证一致性

---

### 6.3 多样性测试矩阵 (5分钟)

**讲师演示测试清单：**

**学生跟随操作：**

| 测试维度 | 操作 | 预期结果 | 通过? |
|---------|------|---------|-------|
| **主题切换** | 点击主题按钮 | 颜色平滑过渡 | ☐ |
| **响应式** | F12 → 切换到 iPhone SE | 布局变为垂直 | ☐ |
| **长文本** | 修改歌曲名为100字 | 文本截断显示省略号 | ☐ |
| **键盘导航** | 用 Tab 键遍历 | 所有按钮可聚焦 | ☐ |
| **对比度** | 用 WAVE 工具检测 | 无对比度错误 | ☐ |
| **缩放** | Ctrl/Cmd + 放大到 200% | 布局不破损 | ☐ |
| **减弱动效** | 系统设置开启减弱动效 | 过渡动画消失 | ☐ |

**长文本测试代码：**

```html
<!-- 临时修改一个 song-row 的标题 -->
<div class="song-row__title">
  这是一个非常非常长的歌曲名称用来测试文本溢出处理这是一个非常非常长的歌曲名称用来测试文本溢出处理
</div>
```

**预期结果：** 文本显示为 "这是一个非常非常长的歌曲名称用来测试文本溢出处理这是..."

---

## 第七部分：总结与扩展 (15分钟)

### 7.1 成果回顾

**讲师引导学生反思：**

1. **我们构建了什么？**
   - ✅ 一个两级代币系统（Primitives + Semantics）
   - ✅ 3 个符合 BEM 规范的组件（Button, SongRow, PlaylistHeader）
   - ✅ 一个支持主题切换、响应式、可访问的 H5 页面
   - ✅ 一份可执行的设计契约文档

2. **我们学到了什么核心概念？**
   - 🎯 **协议思维：** 设计系统是一份需要被遵守的契约
   - 🎯 **两级架构：** 原始代币 + 语义代币的分层
   - 🎯 **唯一真源：** CSS 变量作为样式的单一来源
   - 🎯 **内在韧性：** 通过 Flexbox、文本截断、响应式设计应对极端情况
   - 🎯 **版本管理：** 理解破坏性 vs 非破坏性变更

---

### 7.2 与真实世界的对比

**展示：Spotify Encore 的真实代币架构**

```
真实的 Spotify Encore:
├─ 核心代币: 300+ (包含颜色、间距、圆角、阴影、动效)
├─ 语义代币: 150+
├─ 组件代币: 200+
├─ 支持主题: Light, Dark, High Contrast
├─ 支持平台: Web, iOS, Android, Desktop
└─ 治理流程: RFC + 设计审查 + 代码审查 + 自动化测试
```

**我们的 Encore-Lite:**
```
├─ 核心代币: 20+
├─ 语义代币: 15+
├─ 组件: 3
├─ 支持主题: Light, Dark
└─ 治理流程: 简化的契约文档
```

**讲师强调：**
> "我们的案例是'玩具'级别的，但你们学到的**思维方式**是工业级的。这就是本课程的核心价值。"

---

### 7.3 扩展挑战（课后作业）

**⭐ 基础挑战（必做）：**

1. **添加一个新组件：** `AlbumCard`
   - 要求：使用现有代币
   - 结构：封面 + 标题 + 副标题 + 悬停效果
   - 约束：不允许硬编码任何颜色或尺寸

2. **新增一个主题：** High Contrast Mode
   - 要求：在 CSS 中添加 `[data-theme="high-contrast"]`
   - 必须通过 WCAG AAA 对比度标准（7:1）

**⭐⭐ 进阶挑战（选做）：**

3. **实现代币的自动化导出：**
   - 研究 Figma API 或插件
   - 将 Figma 变量导出为 JSON
   - 编写脚本将 JSON 转换为 CSS 变量

4. **构建一个设计系统文档站：**
   - 使用 Storybook 或简单的静态站点
   - 展示所有组件和代币
   - 提供交互式预览

**⭐⭐⭐ 专家挑战（深度探索）：**

5. **实现契约测试自动化：**
   - 使用 Jest + Puppeteer
   - 编写测试验证：
     - 所有 CSS 变量都有回退值
     - 对比度符合 WCAG 标准
     - 响应式布局在不同视口下不破损

---

### 7.4 关键概念卡片

**发放学生总结卡片（可打印）：**

```
┌─────────────────────────────────────────┐
│  Encore-Lite 核心概念速查卡            │
├─────────────────────────────────────────┤
│                                         │
│  🎯 两级代币架构                        │
│  Primitives (颜料) → Semantics (用途)  │
│                                         │
│  🔒 唯一真源原则                        │
│  所有样式值来自 CSS 变量，零硬编码      │
│                                         │
│  📋 BEM 命名法                          │
│  .block__element--modifier              │
│                                         │
│  ♿ 可访问性三要素                       │
│  对比度 + 键盘导航 + 语义化HTML          │
│                                         │
│  📦 契约版本管理                         │
│  MAJOR: 破坏性  MINOR: 新增  PATCH: 修复 │
│                                         │
│  🧪 必要多样性测试                       │
│  主题 + 响应式 + 长文本 + 减弱动效       │
│                                         │
└─────────────────────────────────────────┘
```

---

### 7.5 Q&A 与答疑 (10分钟)

**常见问题预设：**

**Q1: 为什么不直接使用 Tailwind CSS？**
> A: Tailwind 是优秀的工具，但它解决的是"如何快速写样式"。我们这门课解决的是"如何建立一个跨团队、可治理的系统"。Tailwind 可以用我们的代币作为配置源。

**Q2: 真实项目中代币会有多少个？**
> A: 小型项目：50-100个；中型项目：200-400个；大型（如 Spotify）：500-1000个。但核心原则不变：分层、语义化、版本管理。

**Q3: 如果设计师和开发者对"什么是主色"有分歧怎么办？**
> A: 这正是"契约"和"治理"要解决的问题。在我们的架构中，`DESIGN-CONTRACT.md` 就是仲裁文档，任何分歧都应该通过更新契约来解决，而不是口头争论。

---

### 7.6 成果提交清单

**学生需提交的文件：**

```
encore-lite-project/
├── index.html
├── style.css
├── DESIGN-CONTRACT.md
├── screenshot-light.png (亮色主题截图)
├── screenshot-dark.png (暗色主题截图)
└── README.md (包含学习反思，300-500字)
```

**README.md 模板：**

```markdown
# Encore-Lite 学习成果

## 项目信息
- 学生姓名: [你的名字]
- 完成日期: [日期]
- 课程版本: v1.1

## 实现的功能
- [ ] 两级代币系统
- [ ] 3个组件（Button, SongRow, PlaylistHeader）
- [ ] 主题切换（亮色/暗色）
- [ ] 响应式布局
- [ ] 键盘可访问性

## 学习反思
[在这里写下你对"设计系统"和"协议思维"的理解，300-500字]

## 遇到的挑战与解决
[描述你遇到的最大困难，以及如何解决的]

## 下一步计划
[你打算如何应用这些知识？有哪些扩展想法？]
```

---

## 附录

### 附录 A：快捷键速查表

| 操作 | Figma | VS Code |
|------|-------|---------|
| 创建 Frame | F | - |
| 创建组件 | Ctrl/Cmd + Alt + K | - |
| Auto Layout | Shift + A | - |
| 全局搜索替换 | - | Ctrl/Cmd + Shift + H |
| 格式化代码 | - | Shift + Alt + F |
| 多光标编辑 | - | Ctrl/Cmd + D |

### 附录 B：资源链接

- **Figma Variables 文档:** [figma.com/best-practices/variables](https://www.figma.com/best-practices/variables/)
- **WCAG 对比度检查器:** [webaim.org/resources/contrastchecker](https://webaim.org/resources/contrastchecker/)
- **BEM 命名规范:** [getbem.com](http://getbem.com/)
- **Spotify Encore:** [spotify.design](https://spotify.design/)

### 附录 C：故障排除

| 问题 | 可能原因 | 解决方案 |
|------|---------|---------|
| 主题切换不生效 | JS 未加载 | 检查控制台错误，确认 script 标签位置 |
| CSS 变量不生效 | 浏览器不支持 | 添加回退值，或升级浏览器 |
| Figma 变量没有同步 | 未刷新组件 | 右键组件 → Update main component |
| 响应式布局错乱 | 忘记设置 viewport | 检查 HTML 中的 meta viewport 标签 |

---

## 结语

**讲师结束语：**

> "今天我们用 3-4 小时，走完了一个微型设计系统从 0 到 1 的完整旅程。你们现在手里的不仅是一个页面，更是一套可以用在真实项目中的方法论。
> 
> 记住：设计系统的核心不是工具，不是代码，而是**协议**——一份团队共同遵守、不断演化的契约。
> 
> 希望在未来的职业生涯中，当你们面对复杂的设计与开发协作问题时，能想起今天学到的'唯一真源'、'两级代币'、'契约思维'。
> 
> Keep building, keep learning. 下课！"

---

**文档版本:** v1.1
**最后更新:** 2025年10月18日
**维护者:** 教学团队
**反馈渠道:** [在此填写反馈表单链接]

