# Story 1.1: 实现个人资料卡 UI

**状态 (Status):** **待办 (To Do)**

### **用户故事 (User Story)**

作为一名 课程学生,

我想要 使用 HTML 和 CSS 创建一个视觉上与 Figma 设计稿完全一致的个人资料卡,

以便 我能掌握从设计到代码的转换技能，并理解设计系统在前端开发中的应用。

### **验收标准 (Acceptance Criteria)**

1. **[结构一致]** `index.html` 文件必须使用语义化标签 (`<div>`, `<img>`, `<h3>`, `<p>`) 来构建与 Figma 设计稿完全对应的 DOM 结构。
    
2. **[样式还原]** `style.css` 文件必须精确实现 Figma 规范中的所有视觉样式，包括背景颜色、文本样式、圆角和阴影。
    
3. **[BEM 规范]** CSS 类名必须严格遵循 `frontend_architecture.md` 中定义的 BEM 命名约定。
    
4. **[CSS 变量]** 所有颜色、字体和阴影值必须通过 `:root` 中定义的 CSS 变量来应用。
    
5. **[交互效果]** 当鼠标悬停在卡片上时，必须触发一个平滑的过渡动画，使卡片轻微放大 (`scale(1.03)`) 并且阴影加深，动画时长为 `0.3s`。
    
6. **[代码分离]** 所有 CSS 代码必须存放在外部 `style.css` 文件中，HTML 文件中不允许出现 `<style>` 标签或 `style` 属性。
    
7. **[可访问性]** 头像的 `<img>` 标签必须包含一个描述性的 `alt` 属性。
    

### **开发任务清单 (Tasks / Subtasks)**

- [ ] **任务 1: 设置项目结构 (AC: #6)**
    
    - [ ] 创建一个名为 `user-profile-card-project` 的根文件夹。
        
    - [ ] 在根目录下创建 `index.html` 文件。
        
    - [ ] 在根目录下创建一个 `css` 文件夹，并在其中创建 `style.css` 文件。
        
    - [ ] 在根目录下创建一个 `images` 文件夹，并放入 `avatar.png` 图片。
        
- [ ] **任务 2: 搭建 HTML 骨架 (AC: #1, #7)**
    
    - [ ] 在 `index.html` 中，创建一个带有 `.card` 类的 `div` 作为主容器。
        
    - [ ] 在 `.card` 内部，添加一个带有 `.card__avatar` 类的 `<img>` 标签，并设置 `src` 和 `alt` 属性。
        
    - [ ] 添加一个带有 `.card__name` 类的 `<h3>` 标签，并填入姓名文本。
        
    - [ ] 添加一个带有 `.card__bio` 类的 `<p>` 标签，并填入简介文本。
        
    - [ ] 在 `<head>` 中使用 `<link>` 标签正确引入 `style.css` 文件。
        
- [ ] **任务 3: 编写 CSS 样式 (AC: #2, #3, #4)**
    
    - [ ] 在 `style.css` 的 `:root` 中定义所有需要的 CSS 变量（颜色、字体、阴影、过渡速度）。
        
    - [ ] 为 `.card` 类编写样式，应用背景颜色、内边距、圆角、默认阴影和布局属性（如 `display: flex`, `flex-direction: column`, `align-items: center`）。
        
    - [ ] 为 `.card__avatar` 类编写样式，设置其宽度、高度和圆角（使其成为圆形）。
        
    - [ ] 为 `.card__name` 和 `.card__bio` 类编写样式，应用正确的字体、字号、颜色和间距。
        
    - [ ] （推荐）添加 `* { box-sizing: border-box; }` 以简化布局。
        
- [ ] **任务 4: 实现悬停微交互 (AC: #5)**
    
    - [ ] 在 `.card` 的基础样式中添加 `transition` 属性，监听 `transform` 和 `box-shadow` 的变化。
        
    - [ ] 编写 `.card:hover` 伪类选择器。
        
    - [ ] 在 `:hover` 状态下，更新 `transform` 属性为 `scale(1.03)`。
        
    - [ ] 在 `:hover` 状态下，更新 `box-shadow` 属性为 `--shadow-hover` 变量的值。
        
- [ ] **任务 5: 最终审查**
    
    - [ ] 在浏览器中打开 `index.html`，与 Figma 设计稿进行像素级对比。
        
    - [ ] 检查所有验收标准是否都已满足。
        

### **开发者笔记 (Dev Notes)**

- **设计稿源**: `ui_ux_spec.md`
    
- **代码规范**: `frontend_architecture.md`
    
- **关键视觉参数**:
    
    - **卡片宽度**: `320px`
        
    - **内边距**: `24px`
        
    - **圆角**: `12px`
        
    - **头像尺寸**: `80px x 80px`
        
    - **元素间距**: `16px` (头像与姓名之间), `8px` (姓名与简介之间)
        
- **字体**: 请确保已安装或通过网络字体（如 Google Fonts）引入了 "Inter" 字体，以便在本地正确显示。
    
    ```
    <!-- 可以在 index.html 的 <head> 中添加此行来引入字体 -->
    <link rel="stylesheet" href="[https://fonts.googleapis.com/css2?family=Inter:wght@400;700&display=swap](https://fonts.googleapis.com/css2?family=Inter:wght@400;700&display=swap)">
    ```
    
- **提醒**: 这是一个纯粹的 HTML/CSS 练习。请专注于视觉还原，不要添加任何 JavaScript。