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

卡片的创建分为 **自动化阶段** 和 **手动阶段**：

- **自动化阶段（TalkToFigma）- 创建基础结构**:
    
    - 使用 **Auto Layout** 进行构建，垂直方向布局。
        
    - 整体 `padding` (内边距) 设置为 `24px`。
        
    - 圆角 (Corner Radius) 设置为 `12px`。
        
    - 背景颜色设置为 `#8A2BE2`。
        
- **⚠️ 手动阶段（用户操作）- 提升为组件**:
    
    - **创建样式库** (TalkToFigma 无法自动创建):
        - 创建颜色样式、文本样式、效果样式（见 2.2 节）
        - 将样式应用到已创建的 Frame 和文本元素
        
    - **组件化** (TalkToFigma 无法自动执行):
        1. 选中整个 Frame，右键 → "Create Component"
        2. 重命名为 "Profile Card"
        
    - **创建变体** (TalkToFigma 无法自动执行):
        1. 选中组件，右键 → "Add Variant"
        2. 创建属性 `State`，包含 `Default` 和 `Hover` 两个值
        3. 为 `Hover` 变体手动调整阴影效果
        
    - **文本对齐** (TalkToFigma 无法自动设置):
        - 选中所有文本元素，在右侧面板设置"水平居中对齐"

#### **2.1.1 间距规范说明**

- **头像与姓名之间**: `16px`（使用父容器的 `itemSpacing`）
- **姓名与简介之间**: `8px`（特殊处理）

**实现方法**: 创建一个嵌套的透明 Frame 包裹姓名和简介，该 Frame 的 `itemSpacing` 设为 `8px`，整体作为一个元素与头像保持 `16px` 间距。
        

#### **2.2. 样式定义 (Styles)**

⚠️ **重要**: 这些样式需要在 Figma 中**手动创建**，TalkToFigma 无法自动创建样式库。

- **颜色样式 (Color Styles)** - 手动创建步骤：
    
    - `Color / Primary-Brand`: `#8A2BE2` (RGB: 138, 43, 226)
        - 用于卡片背景
        - _颜色对比度验证_: 与白色文字对比度为 5.24:1，符合 WCAG AA 标准
        
    - `Color / Text-Primary`: `#FFFFFF` (RGB: 255, 255, 255)
        - 用于姓名和简介文本
        
    - `Color / Avatar-Placeholder`: `#D3D3D3` (RGB: 211, 211, 211)
        - 用于头像占位符背景
        
- **文本样式 (Text Styles)** - 手动创建步骤：
    
    - `Text / Heading-Name`: 
        - Font Family: 系统字体栈（见 2.3 节）
        - Weight: Bold (700)
        - Size: 24px
        - Color: `#FFFFFF`
        - Align: Center
        
    - `Text / Body-Bio`: 
        - Font Family: 系统字体栈（见 2.3 节）
        - Weight: Regular (400)
        - Size: 16px
        - Color: `#FFFFFF`
        - Opacity: 80%
        - Align: Center
        
- **效果样式 (Effect Styles)** - 手动创建步骤：
    
    - `Effect / Card-Shadow-Default`: 
        - Type: Drop Shadow
        - X: 0px, Y: 4px
        - Blur: 8px, Spread: 0px
        - Color: `rgba(0, 0, 0, 0.1)`
        
    - `Effect / Card-Shadow-Hover`: 
        - Type: Drop Shadow
        - X: 0px, Y: 8px
        - Blur: 16px, Spread: 0px
        - Color: `rgba(0, 0, 0, 0.2)`

#### **2.3. 字体方案 (Font Strategy)**

为避免字体加载问题，使用**跨平台系统字体栈**（支持 Windows、macOS 和中文）：

```
Font Family: -apple-system, BlinkMacSystemFont, "Segoe UI", 
             "Microsoft YaHei", "PingFang SC", "Hiragino Sans GB",
             Arial, sans-serif
```

**字体回退逻辑**:
- macOS: `-apple-system` (San Francisco) 或 `PingFang SC`（中文）
- Windows: `Segoe UI` 或 `Microsoft YaHei`（中文）
- 通用回退: `Arial` → `sans-serif`

_注: 在 Figma 中可以简化为 "Inter"（仅用于设计稿），但在 CSS 实现时必须使用上述字体栈。_
        

### 3. **动画与微交互 (Animation & Micro-interactions)**

为了提供更丰富的用户体验，我们将为卡片添加悬停微交互。

- **触发**: 当用户的鼠标指针悬停在卡片上时。
    
- **动效**:
    
    1. **放大**: 卡片整体从 `scale(1)` 变为 `scale(1.03)`。
        
    2. **阴影加深**: 卡片的 `box-shadow` 从 `Card-Shadow-Default` 变为 `Card-Shadow-Hover`。
        
- **动画参数**:
    
    - **属性 (Properties)**: `transform`, `box-shadow`
        
    - **时长 (Duration)**: `0.3s`
        
    - **缓动函数 (Easing)**: `ease-in-out`
        
    - **变换原点 (Transform Origin)**: `center center`（默认值，卡片从中心缩放）
        
    
    _教学提示: 这将直接对应 CSS 的 `transition` 属性，是展示动态效果的绝佳案例。_
    

### 4. **布局与规格 (Layout & Specs)**

以下是 `State=Default` 状态下的详细规格：

```
+------------------------------------------+
|            [24px padding]                |
|                                          |
|     (Avatar, 80x80px, Circle)            |  <-- 水平居中
|                                          |
|          ↓ 16px spacing ↓               |
|                                          |
|    +-- Text Group Frame (透明) --+       |  <-- 嵌套 Frame
|    |  "Analyst Mary"              |      |  <-- 水平居中
|    |     ↓ 8px spacing ↓          |      |
|    |  "Insightful Analyst..."     |      |  <-- 水平居中
|    +------------------------------+      |
|                                          |
|            [24px padding]                |
+------------------------------------------+

**详细规格**:
- Card Width: 320px (固定)
- Card Height: 由内容自动撑开 (Auto Layout HUG)
- Padding: 24px (all sides)
- Corner Radius: 12px
- Background: #8A2BE2
- Box Shadow: 0px 4px 8px rgba(0, 0, 0, 0.1)
- Layout Mode: Vertical
- Primary Axis Align: MIN (顶部对齐)
- Counter Axis Align: CENTER (水平居中所有子元素)
- Item Spacing: 16px (主容器)

**头像规格**:
- Size: 80x80px
- Corner Radius: 40px (50% = 圆形)
- Fill: #D3D3D3 (占位符颜色)

**文本组 Frame 规格**:
- Layout Mode: Vertical
- Item Spacing: 8px
- Background: Transparent (rgba(0,0,0,0))
- Width: FILL (填充父容器)
- Height: HUG (由内容撑开)
- Counter Axis Align: CENTER
```

### 5. **Figma 操作检查清单 (Figma Manual Checklist)**

完成 TalkToFigma 自动化创建后，请按以下步骤手动完成：

- [ ] **创建颜色样式** (Styles → + → Color)
  - [ ] `Color / Primary-Brand` → #8A2BE2
  - [ ] `Color / Text-Primary` → #FFFFFF
  - [ ] `Color / Avatar-Placeholder` → #D3D3D3

- [ ] **创建文本样式** (Styles → + → Text)
  - [ ] `Text / Heading-Name` (24px, Bold, Center, White)
  - [ ] `Text / Body-Bio` (16px, Regular, Center, White 80%)

- [ ] **创建效果样式** (Styles → + → Effect)
  - [ ] `Effect / Card-Shadow-Default` (0px 4px 8px rgba(0,0,0,0.1))
  - [ ] `Effect / Card-Shadow-Hover` (0px 8px 16px rgba(0,0,0,0.2))

- [ ] **应用样式到元素**
  - [ ] 卡片背景 → 应用 `Color / Primary-Brand`
  - [ ] 姓名文本 → 应用 `Text / Heading-Name`
  - [ ] 简介文本 → 应用 `Text / Body-Bio`
  - [ ] 卡片阴影 → 应用 `Effect / Card-Shadow-Default`

- [ ] **设置文本对齐**
  - [ ] 选中姓名和简介文本，设置为"水平居中对齐"

- [ ] **创建组件与变体**
  - [ ] 选中整个 Frame → 右键 → "Create Component"
  - [ ] 重命名为 "Profile Card"
  - [ ] 右键 → "Add Variant"
  - [ ] 创建 `State` 属性，值为 `Default` 和 `Hover`
  - [ ] 在 `Hover` 变体中，更改阴影为 `Effect / Card-Shadow-Hover`

### 6. **下一步 (Next Steps)**

- **移交给 `architect` (Winston)**: 制定实现此设计所需的前端代码规范，包括文件结构和 CSS 命名约定，并确保使用跨平台通用字体。