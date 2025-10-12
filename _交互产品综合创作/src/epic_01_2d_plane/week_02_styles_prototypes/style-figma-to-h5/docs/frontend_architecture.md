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

为了更好地映射 Figma 中的“设计变量 (Styles)”，我们推荐使用 CSS 变量来定义核心的设计令牌。

在 `:root` 选择器中定义：

```
:root {
  --color-primary-brand: #8A2BE2;
  --color-text-primary: #FFFFFF;
  --font-family-base: 'Inter', sans-serif;
  --shadow-default: 0px 4px 8px rgba(0, 0, 0, 0.1);
  --shadow-hover: 0px 8px 16px rgba(0, 0, 0, 0.2);
  --transition-speed: 0.3s;
}
```

### 4. **前端开发标准 (Frontend Developer Standards)**

- **HTML**:
    
    - **必须** 使用语义化标签，例如 `<h3>` 用于姓名，`<p>` 用于简介。
        
    - `<img>` 标签 **必须** 包含 `alt` 属性，以符合可访问性要求。
        
- **CSS**:
    
    - **必须** 使用 `box-sizing: border-box;` 来简化布局计算。
        
    - **必须** 使用在 `style.css` 中定义的 CSS 变量来应用颜色、字体和阴影。
        
    - **必须** 使用 `:hover` 伪类和 `transition` 属性来实现平滑的悬停动效。
        

### 5. **移交说明 (Handoff)**

- **移交给“开发者”(学生)**:
    
    - 请根据 `project_brief.md` 的目标、`ui_ux_spec.md` 的视觉和交互规范，以及本架构文档定义的代码标准，开始 `index.html` 和 `style.css` 的编写工作。