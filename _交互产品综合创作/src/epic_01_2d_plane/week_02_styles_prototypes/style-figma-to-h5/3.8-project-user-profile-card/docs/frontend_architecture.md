# 前端架构：个人资料卡项目

版本: 1.0

创建日期: 2025-10-12

作者: Architect Winston

### 1. **技术栈 (Frontend Tech Stack)**

为保持案例的纯粹性和易于理解，技术栈将限定为最基础、最核心的前端技术。

- **结构 (Structure)**: HTML5
    
- **样式 (Styling)**: CSS3
    
- **图片资源**: PNG 或 JPG
    

### 2. **项目文件结构 (Project Structure)**

为了培养学生模块化和关注点分离的意识，我们采用以下标准文件结构：

```
/user-profile-card-project
├── index.html              // 主 HTML 文件，负责内容结构
|
├── /css
│   └── style.css           // 唯一的样式文件，负责所有视觉表现
|
└── /images
    └── avatar.png          // 用户头像图片资源
```

**规范说明**:

- 所有样式代码 **必须** 存放于 `style.css` 文件中，并通过 `<link>` 标签在 `index.html` 中引入。
    
- **禁止** 使用内联样式 (`style` 属性) 或内部样式表 (`<style>` 标签)。
    

### 3. **样式与命名约定 (Styling & Naming Conventions)**

#### **3.1. CSS 命名规范：BEM**

为确保 CSS 的可读性、可维护性和可扩展性，本项目 **强制** 使用 **BEM (Block, Element, Modifier)** 命名约定。

- **块 (Block)**: 代表一个独立的、可复用的组件。在本项目中，唯一的块是 `.card`。
    
- **元素 (Element)**: 代表块的一部分，它在语义上依赖于块。元素使用双下划线 `__` 连接。
    
- **修饰符 (Modifier)**: 代表块或元素的不同状态或版本。修饰符使用双连字符 `--` 连接。
    

#### **3.2. 本项目 BEM 示例**

根据 UI/UX 规范，我们的组件将使用以下类名：

- **Block**:
    
    - `.card` (整个个人资料卡的容器)
        
- **Elements**:
    
    - `.card__avatar` (用户头像 `<img>` 标签)
        
    - `.card__name` (用户姓名 `<h3>` 标签)
        
    - `.card__bio` (用户简介 `<p>` 标签)
        

_教学提示: 虽然 `hover` 状态可以通过 `:hover` 伪类实现，无需修饰符，但可以向学生介绍修饰符的概念，例如，如果未来有一个“高亮”状态的卡片，可以命名为 `.card--highlighted`。_

#### **3.3. CSS 变量 (CSS Variables)**

为了更好地映射 Figma 中的"设计变量 (Styles)"，我们推荐使用 CSS 变量来定义核心的设计令牌。

在 `:root` 选择器中定义：

```css
:root {
  /* 颜色系统 - 对应 Figma Color Styles */
  --color-primary-brand: #8A2BE2;
  --color-text-primary: #FFFFFF;
  --color-avatar-placeholder: #D3D3D3;
  
  /* 字体系统 - 跨平台通用字体栈 (支持中文) */
  --font-family-base: -apple-system, BlinkMacSystemFont, "Segoe UI", 
                      "Microsoft YaHei", "PingFang SC", "Hiragino Sans GB",
                      Arial, sans-serif;
  
  /* 阴影系统 - 对应 Figma Effect Styles */
  --shadow-default: 0px 4px 8px rgba(0, 0, 0, 0.1);
  --shadow-hover: 0px 8px 16px rgba(0, 0, 0, 0.2);
  
  /* 动画系统 */
  --transition-speed: 0.3s;
  --transition-easing: ease-in-out;
  
  /* 尺寸系统 */
  --card-width: 320px;
  --card-padding: 24px;
  --card-radius: 12px;
  --avatar-size: 80px;
  
  /* 间距系统 */
  --spacing-large: 16px;
  --spacing-small: 8px;
}
```

**CSS 变量命名规则 (Figma → CSS 映射)**:
- Figma: `Color / Primary-Brand` → CSS: `--color-primary-brand`
- Figma: `Effect / Card-Shadow-Default` → CSS: `--shadow-default`
- Figma: `Text / Heading-Name` → CSS 多个变量组合使用

**字体栈说明**:
- 使用系统字体栈避免网络加载延迟
- 支持 Windows (`Segoe UI`, `Microsoft YaHei`) 和 macOS (`-apple-system`, `PingFang SC`)
- 自动支持中英文混排
- 无需额外引入 Google Fonts 或其他 CDN 资源

### 4. **前端开发标准 (Frontend Developer Standards)**

#### **4.1 HTML 标准**

- **语义化标签**:
    
    - `<div class="card">` - 作为主容器（语义上代表一个独立的卡片组件）
    - `<img class="card__avatar">` - 头像图片，**必须** 包含 `alt` 属性
    - `<h3 class="card__name">` - 姓名标题（语义上代表卡片的主标题）
    - `<p class="card__bio">` - 简介段落
        
- **可访问性要求**:
    
    - 头像 `alt` 属性示例: `alt="Analyst Mary 的头像"`
    - 确保颜色对比度符合 WCAG AA 标准（已验证: 5.24:1）
        
- **文档结构**:
    
    ```html
    <!DOCTYPE html>
    <html lang="zh-CN">
    <head>
      <meta charset="UTF-8">
      <meta name="viewport" content="width=device-width, initial-scale=1.0">
      <title>个人资料卡</title>
      <link rel="stylesheet" href="css/style.css">
    </head>
    <body>
      <div class="card">
        <img class="card__avatar" src="images/avatar.png" alt="用户头像">
        <h3 class="card__name">Analyst Mary</h3>
        <p class="card__bio">Insightful Analyst...</p>
      </div>
    </body>
    </html>
    ```

#### **4.2 CSS 标准**

- **盒模型**:
    
    ```css
    * {
      box-sizing: border-box;
      margin: 0;
      padding: 0;
    }
    ```
        
- **变量使用**:
    
    - **必须** 使用 `:root` 中定义的 CSS 变量
    - **禁止** 硬编码颜色值、尺寸等设计令牌
        
- **布局实现**:
    
    ```css
    .card {
      display: flex;
      flex-direction: column;
      align-items: center;
      gap: var(--spacing-large); /* 替代 margin */
      width: var(--card-width);
      padding: var(--card-padding);
      background: var(--color-primary-brand);
      border-radius: var(--card-radius);
      box-shadow: var(--shadow-default);
      transition: transform var(--transition-speed) var(--transition-easing),
                  box-shadow var(--transition-speed) var(--transition-easing);
    }
    ```
        
- **悬停交互**:
    
    ```css
    .card:hover {
      transform: scale(1.03);
      box-shadow: var(--shadow-hover);
    }
    ```

#### **4.3 间距实现策略**

根据 `ui_ux_spec.md` 的要求，姓名和简介之间的间距是 `8px`，而头像与文本组之间是 `16px`。

**方案一：简化实现（推荐用于教学）**
```css
.card {
  gap: var(--spacing-large); /* 16px - 默认间距 */
}

.card__name {
  margin-bottom: calc(var(--spacing-small) - var(--spacing-large)); 
  /* 8px - 16px = -8px，使姓名和简介之间实际为 8px */
}
```

**方案二：嵌套容器（与 Figma 结构一致）**
```html
<div class="card">
  <img class="card__avatar" src="images/avatar.png" alt="用户头像">
  <div class="card__text-group">
    <h3 class="card__name">Analyst Mary</h3>
    <p class="card__bio">Insightful Analyst...</p>
  </div>
</div>
```

```css
.card__text-group {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: var(--spacing-small); /* 8px */
}
```

_教学建议: 使用方案二，因为它与 Figma 的嵌套结构完全一致。_

### 5. **视觉还原度验证方法 (Visual Accuracy Verification)**

学生可以使用以下方法验证实现效果：

1. **Figma Overlay 对比法**:
   - 在 Figma 中导出设计稿为 PNG (Scale: 1x)
   - 在浏览器中打开 `index.html`，使用浏览器插件（如 PerfectPixel）叠加对比

2. **关键参数检查清单**:
   - [ ] 卡片宽度: 320px
   - [ ] 卡片内边距: 24px
   - [ ] 卡片圆角: 12px
   - [ ] 头像尺寸: 80x80px（圆形）
   - [ ] 姓名字号: 24px (粗体)
   - [ ] 简介字号: 16px (常规)
   - [ ] 默认阴影: 0px 4px 8px rgba(0,0,0,0.1)
   - [ ] 悬停阴影: 0px 8px 16px rgba(0,0,0,0.2)
   - [ ] 悬停缩放: scale(1.03)

3. **浏览器开发者工具验证**:
   - 使用 Chrome DevTools 的 "Computed" 面板检查实际应用的样式值
   - 确认所有颜色、尺寸都来自 CSS 变量

### 6. **移交说明 (Handoff)**

- **移交给"开发者"(学生)**:
    
    - 请根据 `brief.md` 的目标、`ui_ux_spec.md` 的视觉和交互规范，以及本架构文档定义的代码标准，开始 `index.html` 和 `style.css` 的编写工作。
    - 重点理解 Figma 设计系统（样式、组件、变体）如何映射到 CSS 变量和 BEM 命名。
    - 注意：字体使用系统字体栈，无需额外加载。