# UI/UX 规范：增强版个人资料卡

版本: 1.0

创建日期: 2025-10-12

作者: UX Expert Sally

### 1. **UX 目标与原则 (UX Goals & Principles)**

- **目标**: 设计一个视觉上现代、精致且具有轻度交互性的个人资料卡，激发学生的学习兴趣和成就感。
    
- **原则**:
    
    - **清晰直观**: 卡片信息层级分明，一目了然。
        
    - **即时反馈**: 用户的交互（如鼠标悬停）应立即得到视觉反馈。
        
    - **细节之美**: 通过平滑的动效和精致的阴影提升整体质感。
        

### 2. **组件库 / 设计系统 (Component Library / Design System)**

#### **2.1. 核心组件：Profile Card**

卡片将被创建为一个统一的 Figma `Component`，以确保设计的一致性和可复用性。

- **结构**:
    
    - 使用 **Auto Layout** 进行构建，垂直方向布局，元素间距 `16px`。
        
    - 整体 `padding` (内边距) 设置为 `24px`。
        
    - 圆角 (Corner Radius) 设置为 `12px`。
        
- **组件属性与变体 (Properties & Variants)**:
    
    - 创建一个名为 `State` 的属性。
        
    - 包含两个变体: `State=Default` 和 `State=Hover`。
        

#### **2.2. 样式定义 (Styles)**

- **颜色样式 (Color Styles)**:
    
    - `Color / Primary-Brand`: `#8A2BE2` (用于卡片背景)
        
    - `Color / Text-Primary`: `#FFFFFF` (用于姓名和简介文本)
        
- **文本样式 (Text Styles)**:
    
    - `Text / Heading-Name`: Font: Inter, Weight: Bold, Size: 24px
        
    - `Text / Body-Bio`: Font: Inter, Weight: Regular, Size: 16px, Opacity: 80%
        
- **效果样式 (Effect Styles)**:
    
    - `Effect / Card-Shadow-Default`: `0px 4px 8px rgba(0, 0, 0, 0.1)`
        
    - `Effect / Card-Shadow-Hover`: `0px 8px 16px rgba(0, 0, 0, 0.2)`
        

### 3. **动画与微交互 (Animation & Micro-interactions)**

为了提供更丰富的用户体验，我们将为卡片添加悬停微交互。

- **触发**: 当用户的鼠标指针悬停在卡片上时。
    
- **动效**:
    
    1. **放大**: 卡片整体从 `scale(1)` 变为 `scale(1.03)`。
        
    2. **阴影加深**: 卡片的 `box-shadow` 从 `Card-Shadow-Default` 变为 `Card-Shadow-Hover`。
        
- **动画参数**:
    
    - **属性 (Property)**: `transform`, `box-shadow`
        
    - **时长 (Duration)**: `0.3s`
        
    - **缓动函数 (Easing)**: `ease-in-out`
        
    
    _教学提示: 这将直接对应 CSS 的 `transition` 属性，是展示动态效果的绝佳案例。_
    

### 4. **布局与规格 (Layout & Specs)**

以下是 `State=Default` 状态下的详细规格：

```
+------------------------------------------+
|                                          |
| (Image: Avatar, 80x80px, Circle)         |  <-- 垂直居中
|                                          |
| (Text: "Analyst Mary", Heading-Name)     |  <-- 垂直居中, 间距 16px
|                                          |
| (Text: "Insightful Analyst...", Body-Bio)|  <-- 垂直居中, 间距 8px
|                                          |
+------------------------------------------+
- Card Width: 320px
- Padding: 24px
- Corner Radius: 12px
- Background: #8A2BE2
- Box Shadow: 0px 4px 8px rgba(0, 0, 0, 0.1)
```

### 5. **下一步 (Next Steps)**

- **移交给 `architect` (Winston)**: 制定实现此设计所需的前端代码规范，包括文件结构和 CSS 命名约定。