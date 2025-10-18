# Encore-Lite 教学实践指南 (v1.1 协议增强版)

**目标学员:** 数字媒体艺术专业学生，具备 Figma 基础操作能力，对 HTML/CSS 有初步了解。

**课程目标:** 在 3-4 小时内，掌握以“协议化”的设计代币为核心，将 Figma 设计稿转化为一个健壮、响应式、具备主题切换能力的 H5 页面的基础工作流。

### **第一部分：最小协议化真源 (The Minimum Viable Protocol)**

**核心理念:** 我们的“唯一真源”不能只是一句口号，它必须是一份被遵守的**协议 (Protocol)**。这份协议规定了我们的样式语言（设计代币）如何被定义、命名、使用和变更。

#### **“设计代币契约 v0.1” (Design Token Contract v0.1)**

- **版本策略:** v0.1.0 (major.minor.patch)。每次修改代币，我们都应思考其影响。
    
- **代币分层:**
    
    - **Primitives (原始值):** 纯粹的值，如 `#1ED760`。
        
    - **Semantics (语义):** 表达意图的值，如 `color-interactive-primary`。这是我们主要使用的层。
        
    - **Component (组件级):** (本次简化，暂不深入)
        
- **作用域与主题:** 所有语义代币必须支持亮色(`light`)和暗色(`dark`)主题。
    
- **命名映射:** Figma 使用斜杠 (`/`) 分隔，CSS 使用连字符 (`-`)。`color/text/primary` 必须映射到 `--color-text-primary`。
    
- **变更类型:**
    
    - **Non-Breaking:** 新增代币，或修改非核心 Primitives。
        
    - **Breaking:** 删除或重命名一个语义代币。需要通知所有“消费者”（开发者）。
        

### **第二部分：Figma 中的原子设计 (Atomic Design in Figma)**

**核心理念:** 我们将遵循“原子设计”思想，从最小的单元（原子）开始，逐步构建更复杂的组件。

#### **步骤 1: 设计“原子” (Atoms - The Design Tokens)**

1. **颜色 (Color):**
    
    - **Primitives:** `green/400: #1ED760`, `black: #000000`, `white: #FFFFFF`, `gray/800: #121212`, `gray/300: #B3B3B3`。
        
    - **Semantics (支持多主题):**
        
        - `color/background/base`: `white` (light), `#121212` (dark)
            
        - `color/text/primary`: `black` (light), `white` (dark)
            
        - `color/text/secondary`: `gray/300` (light & dark)
            
        - `color/interactive/primary`: `green/400` (light & dark)
            
        - **状态代币:** `color/interactive/primary-hover`: (一个比 `green/400` 稍深的颜色)
            
        - **可访问性代币:** `color/border/focus`: (一个高对比度的蓝色，如 `#2D72D9`)
            
2. **排版 (Typography):**
    
    - **基线:** `1rem = 16px`。所有字体大小使用 `rem`。
        
    - **字体样式:**
        
        - `heading/l`: `3rem` (48px), Bold
            
        - `body/m`: `1rem` (16px), Regular (流式字号，后面 CSS 实现)
            
        - `caption/s`: `0.75rem` (12px), Regular
            
3. **间距与尺寸 (Spacing & Sizing):**
    
    - **基线:** `1rem = 16px`。所有间距使用 `rem`。
        
    - `spacing/xs`: `0.25rem` (4px)
        
    - `spacing/s`: `0.5rem` (8px)
        
    - `spacing/m`: `1rem` (16px)
        
    - `spacing/l`: `1.5rem` (24px)
        
    - `spacing/xl`: `2rem` (32px)
        
    - `radius/s`: `0.25rem` (4px)
        
    - `radius/full`: `9999px`
        
4. **动效 (Motion):**
    
    - `motion/duration/fast`: `120ms`
        
    - `motion/easing/standard`: `ease-in-out`
        

#### **步骤 2: 设计“分子” (Molecules - Simple Components)**

1. **组件: `Button`**
    
    - 创建一个 Auto Layout 框架，文本为 "Play"。
        
    - **样式应用:**
        
        - 背景色: `color/interactive/primary`
            
        - 内边距: `spacing/m`
            
        - 圆角: `radius/full`
            
        - 字体: `body/m`
            
    - **定义变体 (Variants):**
        
        - 创建一个 `hover` 状态的变体，背景色使用 `color/interactive/primary-hover`。
            

#### **步骤 3: 设计“有机体” (Organisms - Complex Components)**

1. **组件: `SongRow`**
    
    - 结构: `[封面图]` `[歌曲名 + 歌手]` `[时长]`
        
    - 样式应用: (全部使用上面定义的 rem 单位代币)
        
    - 封面图: `2.5rem` x `2.5rem` (`40px`)
        
    - 歌曲名: `body/m`, `color/text/primary`
        
    - 歌手名: `caption/s`, `color/text/secondary`
        
2. **组件: `PlaylistHeader`**
    
    - 结构: `[封面]` `[标题]` `[描述]` `[播放按钮]`
        
    - 样式应用: (全部使用上面定义的 rem 单位代币)
        
    - 封面: `10rem` x `10rem` (`160px`)
        
    - 标题: `heading/l`, `color/text/primary`
        
    - 描述: `body/m`, `color/text/secondary`
        
    - **嵌套分子:** 将之前创建的 `Button` 分子拖入。
        

### **第三部分：H5 页面的协议化构建**

#### **步骤 1: 准备开发环境 (同 v1.0)**

- 创建 `index.html` 和 `style.css`，安装 `Live Server`。
    

#### **步骤 2: 将“协议”翻译成 CSS**

- 在 `style.css` 中，我们现在构建一个支持主题和响应式的代币系统。
    

```
/* style.css */
:root {
  /* --- Light Theme (Default) --- */
  --color-background-base: #FFFFFF;
  --color-text-primary: #000000;
  --color-text-secondary: #B3B3B3;
  --color-interactive-primary: #1ED760;
  --color-interactive-primary-hover: #1AAE4E; /* Darker green */
  --color-border-focus: #2D72D9;

  /* --- Sizing (rem-based) --- */
  font-size: 16px; /* Set root font size for rem calculation */
  --spacing-xs: 0.25rem;
  --spacing-s: 0.5rem;
  --spacing-m: 1rem;
  --spacing-l: 1.5rem;
  --spacing-xl: 2rem;

  /* --- Radius --- */
  --radius-s: 0.25rem;
  --radius-full: 9999px;

  /* --- Typography --- */
  --font-size-l: 3rem;
  --font-size-s: 0.75rem;
  /* Fluid typography for body */
  --font-size-m: clamp(1rem, 1.8vw, 1.125rem);

  /* --- Motion --- */
  --motion-duration-fast: 120ms;
  --motion-easing-standard: ease-in-out;
}

/* --- Dark Theme --- */
[data-theme="dark"] {
  --color-background-base: #121212;
  --color-text-primary: #FFFFFF;
}

/* --- Accessibility: Respect user motion preference --- */
@media (prefers-reduced-motion: reduce) {
  *, *::before, *::after {
    animation-duration: 1ms !important;
    transition-duration: 1ms !important;
  }
}

/* Base styles */
body {
  font-family: sans-serif;
  background-color: var(--color-background-base);
  color: var(--color-text-primary);
  font-size: var(--font-size-m);
  transition: background-color var(--motion-duration-fast) var(--motion-easing-standard);
}
```

#### **步骤 3: 构建 HTML 结构 (增加状态与主题切换)**

- 在 `index.html` 中，我们为 `<body>` 添加 `data-theme` 属性，并为可交互元素添加 `:hover` 和 `:focus` 状态的 CSS。
    

```
<!-- index.html -->
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Encore-Lite v1.1</title>
    <link rel="stylesheet" href="style.css">
</head>
<body data-theme="light"> <!-- 主题切换器 -->
    <button id="theme-switcher">Toggle Dark Mode</button>
    
    <header class="playlist-header">
        <img class="playlist-header__cover" src="[https://placehold.co/160x160/282828/FFFFFF?text=Album](https://placehold.co/160x160/282828/FFFFFF?text=Album)" alt="Playlist Cover">
        <div class="playlist-header__info">
            <h1 class="playlist-header__title">My Favorite Songs</h1>
            <p class="playlist-header__description">A collection of awesome tracks.</p>
        </div>
        <button class="button playlist-header__play-button">▶</button>
    </header>

    <main class="song-list">
        <div class="song-row">
            <img class="song-row__cover" src="[https://placehold.co/40x40/282828/FFFFFF?text=S1](https://placehold.co/40x40/282828/FFFFFF?text=S1)" alt="Song Cover">
            <div class="song-row__info">
                <div class="song-row__title">Song Title One</div>
                <div class="song-row__artist">Artist Name</div>
            </div>
            <div class="song-row__duration">3:45</div>
        </div>
        <div class="song-row">
            <img class="song-row__cover" src="[https://placehold.co/40x40/282828/FFFFFF?text=S2](https://placehold.co/40x40/282828/FFFFFF?text=S2)" alt="Song Cover">
            <div class="song-row__info">
                <div class="song-row__title">Another Great Song</div>
                <div class="song-row__artist">Another Artist</div>
            </div>
            <div class="song-row__duration">4:12</div>
        </div>
    </main>

    <script>
        // Simple theme switcher
        const themeSwitcher = document.getElementById('theme-switcher');
        const body = document.body;
        themeSwitcher.addEventListener('click', () => {
            const currentTheme = body.getAttribute('data-theme');
            const newTheme = currentTheme === 'light' ? 'dark' : 'light';
            body.setAttribute('data-theme', newTheme);
        });
    </script>
</body>
</html>
```

#### **步骤 4: 应用协议化的样式**

- 在 `style.css` 中添加组件样式，这次特别注意**状态**和**响应式**。
    

```
/* style.css (续) */

/* Button Molecule */
.button {
  background-color: var(--color-interactive-primary);
  border: none;
  border-radius: var(--radius-full);
  color: white;
  cursor: pointer;
  padding: var(--spacing-m);
  transition: background-color var(--motion-duration-fast) var(--motion-easing-standard);
}
.button:hover {
  background-color: var(--color-interactive-primary-hover);
}
.button:focus-visible { /* 可访问性：清晰的焦点状态 */
  outline: 2px solid var(--color-border-focus);
  outline-offset: 2px;
}

/* PlaylistHeader Organism */
.playlist-header {
    display: flex;
    flex-wrap: wrap; /* 允许换行以实现响应式 */
    align-items: center;
    gap: var(--spacing-l);
    padding: var(--spacing-xl);
    container-type: inline-size; /* 启用容器查询 */
}
.playlist-header__cover {
    width: 10rem;
    height: 10rem;
    border-radius: var(--radius-s);
}
.playlist-header__title {
    font-size: var(--font-size-l);
    font-weight: 700;
    margin: 0;
}
.playlist-header__play-button {
    width: 3.5rem; /* 56px */
    height: 3.5rem;
    font-size: 1.5rem;
    margin-left: auto;
}
/* 响应式：当容器宽度小于 600px 时，使用紧凑布局 */
@container (max-width: 600px) {
    .playlist-header {
        flex-direction: column;
        text-align: center;
    }
    .playlist-header__play-button {
        margin: var(--spacing-m) auto 0;
    }
}


/* SongRow Organism */
.song-row {
    display: flex;
    align-items: center;
    gap: var(--spacing-m);
    padding: var(--spacing-s) var(--spacing-xl);
}
.song-row__cover {
    width: 2.5rem;
    height: 2.5rem;
    border-radius: var(--radius-s);
}
.song-row__title {
    font-size: var(--font-size-m);
}
.song-row__artist {
    font-size: var(--font-size-s);
    color: var(--color-text-secondary);
}
.song-row__duration {
    margin-left: auto;
    font-size: var(--font-size-s);
    color: var(--color-text-secondary);
}
#theme-switcher { margin: 1rem; }
```

### **第四部分：验证与演化 (Validation & Evolution)**

#### **验证性练习清单**

- [ ] **主题切换:** 点击 "Toggle Dark Mode" 按钮，页面应在亮色和暗色主题间平滑切换。
    
- [ ] **状态反馈:** 鼠标悬停在播放按钮上，颜色是否变为 `primary-hover`？使用键盘 `Tab` 键聚焦到按钮上，是否出现蓝色的 `focus` 边框？
    
- [ ] **响应式布局:** 调整浏览器窗口宽度，当 `PlaylistHeader` 宽度变窄时，其内部元素是否会变成垂直居中排列？
    
- [ ] **流式排版:** 慢慢缩放浏览器窗口，`body/m` 的文字大小是否会平滑地变化？
    
- [ ] **动效偏好:** 在操作系统中开启“减弱动态效果”，刷新页面并切换主题，过渡动画是否消失了？
    

#### **变更演练：一次模拟的“破坏性变更”**

1. **场景:** 假设我们要将 `color/interactive/primary` 重命名为 `color/interactive/accent`。这是一个 Breaking Change。
    
2. **更新协议:** 在你的“契约”文档中，将版本号从 `v0.1.0` 更新到 `v1.0.0`。
    
3. **执行变更:** 在 Figma 和 CSS 中，全局搜索并替换 `color/interactive/primary` 为 `color/interactive/accent`。
    
4. **验证:** 检查所有按钮是否仍然正常工作。
    

通过这个增强版指南，学生不仅学会了如何操作，更重要的是，他们建立了一套关于**协议、层级、状态、响应式和可访问性**的心智模型，为未来构建真正复杂和健壮的设计系统奠定了坚实的基础。