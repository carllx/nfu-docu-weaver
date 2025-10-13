# 📐 Figma 到 CSS 完整映射指南

**目标读者**: 需要将 Figma 设计转换为 HTML/CSS 代码的学生  
**学习目标**: 理解 Figma 中每个属性设置如何对应到 CSS 代码

---

## 📋 目录

1. [Figma 基础概念](#figma-基础概念)
2. [Frame 属性映射](#frame-属性映射)
3. [Auto Layout 映射](#auto-layout-映射)
4. [视觉属性映射](#视觉属性映射)
5. [文本属性映射](#文本属性映射)
6. [完整示例对照](#完整示例对照)
7. [常见问题](#常见问题)

---

## Figma 基础概念

### Figma 中的核心元素

| Figma 元素 | HTML 对应 | 说明 |
|-----------|----------|------|
| **Frame** | `<div>` | 容器元素，可以包含其他元素 |
| **Rectangle** | `<div>` 或 `<img>` | 矩形，可以作为背景或图片 |
| **Text** | `<p>`, `<h1>`-`<h6>`, `<span>` | 文本元素 |
| **Component** | 自定义类（如 `.card`） | 可复用的组件 |

---

## Frame 属性映射

### 1. Frame 基础属性

| Figma 属性 | Figma 设置 | CSS 对应 | 说明 |
|-----------|-----------|---------|------|
| **Width** | 320px (Fixed) | `width: 320px;` | 固定宽度 |
| **Height** | 220px (Fixed) | `height: 220px;` | 固定高度 |
| **Width** | HUG | `width: auto;` | 由内容决定宽度 |
| **Height** | HUG | `height: auto;` | 由内容决定高度 |
| **Width** | FILL | `width: 100%;` | 填充父容器宽度 |
| **Height** | FILL | `height: 100%;` | 填充父容器高度 |

#### 实例：Profile Card Frame

```
📐 Figma 设置:
├─ Width: 320px (Fixed)
├─ Height: HUG (由内容决定)
└─ Padding: 24px

💻 CSS 代码:
.card {
  width: 320px;      /* Width = 320px */
  height: auto;      /* Height = HUG */
  padding: 24px;     /* Padding = 24px */
}
```

---

### 2. Padding（内边距）

| Figma 属性 | Figma 设置 | CSS 对应 |
|-----------|-----------|---------|
| **Padding** | 24px (all sides) | `padding: 24px;` |
| **Padding** | Top: 24px, Right: 16px, Bottom: 24px, Left: 16px | `padding: 24px 16px;` |
| **Padding** | 各边不同 | `padding: 24px 16px 20px 16px;` |

#### 实例：

```
📐 Figma: Padding = 24px (all sides)

💻 CSS:
padding: 24px;

🔍 详解:
padding: 24px;           /* 四边都是 24px */
padding: 24px 16px;      /* 上下 24px, 左右 16px */
padding: 10px 20px 30px 40px;  /* 上 右 下 左（顺时针）*/
```

---

## Auto Layout 映射

### 1. Layout Direction（布局方向）

| Figma 设置 | CSS 对应 | 效果 |
|-----------|---------|------|
| **Vertical** ↓ | `display: flex;`<br>`flex-direction: column;` | 子元素垂直排列 |
| **Horizontal** → | `display: flex;`<br>`flex-direction: row;` | 子元素水平排列 |

#### 实例：Vertical Layout

```
📐 Figma 设置:
├─ Auto Layout: ON
├─ Direction: Vertical ↓
└─ Item Spacing: 16px

💻 CSS 代码:
.card {
  display: flex;           /* 启用 Flexbox */
  flex-direction: column;  /* 垂直方向 = Vertical */
  gap: 16px;              /* Item Spacing = 16px */
}
```

---

### 2. Item Spacing（元素间距）

| Figma 属性 | Figma 设置 | CSS 对应 |
|-----------|-----------|---------|
| **Item Spacing** | 16px | `gap: 16px;` |
| **Item Spacing** | 8px | `gap: 8px;` |

#### 实例：不同的间距

```
📐 Figma 结构:
Profile Card (Item Spacing: 16px)
├─ Avatar
├─ [16px 间距]
└─ Text Group (Item Spacing: 8px)
    ├─ Name
    ├─ [8px 间距]
    └─ Bio

💻 CSS 代码:
.card {
  gap: 16px;  /* 主容器间距 16px */
}

.card__text-group {
  gap: 8px;   /* 嵌套容器间距 8px */
}
```

---

### 3. Alignment（对齐方式）

#### Counter Axis Align（交叉轴对齐）

| Figma 设置 | CSS 对应 | 效果（Vertical 布局） |
|-----------|---------|---------------------|
| **MIN** ⬅️ | `align-items: flex-start;` | 子元素左对齐 |
| **CENTER** ↔️ | `align-items: center;` | 子元素水平居中 |
| **MAX** ➡️ | `align-items: flex-end;` | 子元素右对齐 |

#### Primary Axis Align（主轴对齐）

| Figma 设置 | CSS 对应 | 效果（Vertical 布局） |
|-----------|---------|---------------------|
| **MIN** ⬆️ | `justify-content: flex-start;` | 子元素顶部对齐 |
| **CENTER** ↕️ | `justify-content: center;` | 子元素垂直居中 |
| **MAX** ⬇️ | `justify-content: flex-end;` | 子元素底部对齐 |
| **SPACE_BETWEEN** | `justify-content: space-between;` | 子元素均匀分布 |

#### 实例：居中对齐

```
📐 Figma 设置:
├─ Auto Layout: Vertical
├─ Counter Axis Align: CENTER ↔️
└─ Primary Axis Align: MIN ⬆️

💻 CSS 代码:
.card {
  display: flex;
  flex-direction: column;
  align-items: center;        /* Counter Axis = CENTER */
  justify-content: flex-start; /* Primary Axis = MIN */
}

🎯 效果:
子元素水平居中，从顶部开始排列
```

---

## 视觉属性映射

### 1. Fill（填充/背景）

| Figma 属性 | Figma 设置 | CSS 对应 |
|-----------|-----------|---------|
| **Fill (Solid)** | #8A2BE2 | `background: #8A2BE2;` |
| **Fill (Transparent)** | 无填充 | `background: transparent;` |
| **Fill with Opacity** | #FFFFFF, 80% | `background: rgba(255, 255, 255, 0.8);` |

#### 实例：紫色背景

```
📐 Figma 设置:
└─ Fill: Solid Color
   └─ Color: #8A2BE2
   └─ Opacity: 100%

💻 CSS 代码:
background: #8A2BE2;

🎨 颜色格式转换:
Figma: #8A2BE2
CSS (Hex): #8A2BE2
CSS (RGB): rgb(138, 43, 226)
CSS (RGBA): rgba(138, 43, 226, 1)
```

---

### 2. Corner Radius（圆角）

| Figma 属性 | Figma 设置 | CSS 对应 | 效果 |
|-----------|-----------|---------|------|
| **Corner Radius** | 12px | `border-radius: 12px;` | 四角圆角 |
| **Corner Radius** | 40px (80px 正方形) | `border-radius: 50%;` | 圆形 |
| **Individual Corners** | 各角不同 | `border-radius: 12px 8px 12px 8px;` | 不同圆角 |

#### 实例：圆形头像

```
📐 Figma 设置:
Avatar (80x80px 正方形)
└─ Corner Radius: 40px (50%)

💻 CSS 代码:
.card__avatar {
  width: 80px;
  height: 80px;
  border-radius: 50%;  /* 50% = 圆形 */
}

💡 提示:
当元素是正方形时，border-radius: 50% 会创建完美的圆形
40px / 80px = 50%
```

---

### 3. Effects（效果/阴影）

| Figma 效果类型 | Figma 设置 | CSS 对应 |
|--------------|-----------|---------|
| **Drop Shadow** | X:0 Y:4 Blur:8 Spread:0<br>Color: rgba(0,0,0,0.1) | `box-shadow: 0px 4px 8px rgba(0, 0, 0, 0.1);` |
| **Inner Shadow** | X:0 Y:2 Blur:4<br>Color: rgba(0,0,0,0.2) | `box-shadow: inset 0px 2px 4px rgba(0, 0, 0, 0.2);` |

#### 实例：卡片阴影

```
📐 Figma 设置:
Effect: Drop Shadow
├─ X: 0px
├─ Y: 4px
├─ Blur: 8px
├─ Spread: 0px
└─ Color: rgba(0, 0, 0, 0.1)

💻 CSS 代码:
box-shadow: 0px 4px 8px rgba(0, 0, 0, 0.1);

🔍 格式说明:
box-shadow: [X偏移] [Y偏移] [模糊半径] [扩散半径] [颜色];
            0px     4px     8px        0px         rgba(0,0,0,0.1)
```

---

### 4. Opacity（透明度）

| Figma 设置 | CSS 对应 |
|-----------|---------|
| 100% | `opacity: 1;` 或省略 |
| 80% | `opacity: 0.8;` |
| 50% | `opacity: 0.5;` |
| 0% | `opacity: 0;` |

#### 实例：80% 透明度文本

```
📐 Figma 设置:
Bio Text
├─ Fill: #FFFFFF
└─ Layer Opacity: 80%

💻 CSS 代码:
.card__bio {
  color: #FFFFFF;
  opacity: 0.8;  /* 80% = 0.8 */
}

💡 计算公式:
Figma 百分比 ÷ 100 = CSS 小数
80% ÷ 100 = 0.8
```

---

## 文本属性映射

### 1. Font（字体）

| Figma 属性 | Figma 设置 | CSS 对应 |
|-----------|-----------|---------|
| **Font Family** | Inter | `font-family: Inter;` |
| **Font Size** | 24px | `font-size: 24px;` |
| **Font Weight** | Bold | `font-weight: 700;` |
| **Font Weight** | Regular | `font-weight: 400;` |

#### 字重对照表

| Figma 名称 | CSS 数值 |
|-----------|---------|
| Thin | 100 |
| Extra Light | 200 |
| Light | 300 |
| **Regular** | **400** |
| Medium | 500 |
| Semibold | 600 |
| **Bold** | **700** |
| Extra Bold | 800 |
| Black | 900 |

#### 实例：标题文本

```
📐 Figma 设置:
Text Style: Heading-Name
├─ Font: Inter
├─ Size: 24px
├─ Weight: Bold
└─ Fill: #FFFFFF

💻 CSS 代码:
.card__name {
  font-family: Inter;
  font-size: 24px;
  font-weight: 700;  /* Bold = 700 */
  color: #FFFFFF;
}
```

---

### 2. Text Alignment（文本对齐）

| Figma 设置 | CSS 对应 | 效果 |
|-----------|---------|------|
| **Left** ⬅️ | `text-align: left;` | 左对齐 |
| **Center** ↔️ | `text-align: center;` | 居中对齐 |
| **Right** ➡️ | `text-align: right;` | 右对齐 |
| **Justified** | `text-align: justify;` | 两端对齐 |

#### 实例：居中文本

```
📐 Figma 设置:
Name Text
└─ Text Align: Center ↔️

💻 CSS 代码:
.card__name {
  text-align: center;
}
```

---

### 3. Line Height（行高）

| Figma 设置 | CSS 对应 | 说明 |
|-----------|---------|------|
| **Auto** | `line-height: 1.2;` (标题)<br>`line-height: 1.5;` (正文) | 自动行高 |
| **29px** | `line-height: 29px;` | 固定像素值 |
| **120%** | `line-height: 1.2;` | 相对字号的倍数 |

#### 实例：行高设置

```
📐 Figma 设置:
Name Text
├─ Font Size: 24px
└─ Line Height: Auto (约 29px)

💻 CSS 代码:
.card__name {
  font-size: 24px;
  line-height: 1.2;  /* 24px × 1.2 = 28.8px ≈ 29px */
}

💡 提示:
使用相对值（如 1.2）比固定值（如 29px）更灵活
当字号改变时，行高会自动调整
```

---

## 完整示例对照

### Profile Card 完整映射

#### Figma 层级结构

```
Profile Card (Frame)
├─ Properties:
│  ├─ Auto Layout: Vertical
│  ├─ Width: 320px (Fixed)
│  ├─ Height: HUG
│  ├─ Padding: 24px
│  ├─ Item Spacing: 16px
│  ├─ Counter Axis Align: CENTER
│  ├─ Fill: #8A2BE2
│  ├─ Corner Radius: 12px
│  └─ Effect: Card-Shadow-Default
│
├─ Avatar (Rectangle)
│  ├─ Width: 80px
│  ├─ Height: 80px
│  ├─ Corner Radius: 40px
│  └─ Fill: #D3D3D3
│
└─ Text Group (Frame)
   ├─ Auto Layout: Vertical
   ├─ Item Spacing: 8px
   ├─ Width: FILL
   ├─ Counter Axis Align: CENTER
   │
   ├─ Name (Text)
   │  ├─ Content: "Analyst Mary"
   │  ├─ Style: Text/Heading-Name
   │  ├─ Font Size: 24px
   │  ├─ Weight: Bold (700)
   │  ├─ Fill: #FFFFFF
   │  └─ Align: Center
   │
   └─ Bio (Text)
      ├─ Content: "Insightful Analyst..."
      ├─ Style: Text/Body-Bio
      ├─ Font Size: 16px
      ├─ Weight: Regular (400)
      ├─ Fill: #FFFFFF
      ├─ Opacity: 80%
      └─ Align: Center
```

---

#### 对应的 CSS 代码

```css
/* Profile Card Frame → .card */
.card {
  /* Auto Layout: Vertical */
  display: flex;
  flex-direction: column;
  
  /* Width: 320px, Height: HUG */
  width: 320px;
  height: auto;
  
  /* Padding: 24px */
  padding: 24px;
  
  /* Item Spacing: 16px */
  gap: 16px;
  
  /* Counter Axis Align: CENTER */
  align-items: center;
  
  /* Fill: #8A2BE2 */
  background: #8A2BE2;
  
  /* Corner Radius: 12px */
  border-radius: 12px;
  
  /* Effect: Drop Shadow */
  box-shadow: 0px 4px 8px rgba(0, 0, 0, 0.1);
}

/* Avatar Rectangle → .card__avatar */
.card__avatar {
  /* Width: 80px, Height: 80px */
  width: 80px;
  height: 80px;
  
  /* Corner Radius: 40px (50%) */
  border-radius: 50%;
  
  /* Fill: #D3D3D3 */
  background: #D3D3D3;
}

/* Text Group Frame → .card__text-group */
.card__text-group {
  /* Auto Layout: Vertical */
  display: flex;
  flex-direction: column;
  
  /* Item Spacing: 8px */
  gap: 8px;
  
  /* Width: FILL */
  width: 100%;
  
  /* Counter Axis Align: CENTER */
  align-items: center;
}

/* Name Text → .card__name */
.card__name {
  /* Font Size: 24px */
  font-size: 24px;
  
  /* Weight: Bold */
  font-weight: 700;
  
  /* Fill: #FFFFFF */
  color: #FFFFFF;
  
  /* Align: Center */
  text-align: center;
  
  /* Line Height: Auto */
  line-height: 1.2;
}

/* Bio Text → .card__bio */
.card__bio {
  /* Font Size: 16px */
  font-size: 16px;
  
  /* Weight: Regular */
  font-weight: 400;
  
  /* Fill: #FFFFFF */
  color: #FFFFFF;
  
  /* Opacity: 80% */
  opacity: 0.8;
  
  /* Align: Center */
  text-align: center;
  
  /* Line Height: Auto */
  line-height: 1.5;
}
```

---

## 常见问题

### Q1: Figma 的 HUG 和 FILL 是什么意思？

**A**: 这是 Figma Auto Layout 的尺寸模式：

- **HUG（拥抱）**: 容器大小由内容决定
  ```css
  width: auto;  /* 或 */
  height: auto;
  ```

- **FILL（填充）**: 填充父容器
  ```css
  width: 100%;  /* 或 */
  height: 100%;
  ```

- **FIXED（固定）**: 固定尺寸
  ```css
  width: 320px;  /* 或 */
  height: 200px;
  ```

---

### Q2: Figma 中的 Item Spacing 为什么用 gap？

**A**: 
- **Figma**: `Item Spacing` 设置 Auto Layout 子元素之间的间距
- **CSS**: `gap` 是 Flexbox 的属性，功能完全一致

```css
/* Figma: Item Spacing = 16px */
gap: 16px;

/* 等同于旧的写法（不推荐）*/
.card > * + * {
  margin-top: 16px;
}
```

---

### Q3: Corner Radius 什么时候用 px，什么时候用 %？

**A**:
- **固定圆角**: 使用 `px`
  ```css
  border-radius: 12px;  /* Figma: 12px */
  ```

- **圆形**: 使用 `50%`
  ```css
  border-radius: 50%;  /* Figma: 宽度的 50% */
  ```

- **半圆**: 使用混合值
  ```css
  border-radius: 12px 12px 0 0;  /* 上方圆角，下方直角 */
  ```

---

### Q4: Figma 的透明度和 CSS 的 opacity 有什么区别？

**A**: 本质相同，只是表示方式不同：

```
Figma: 0% ~ 100%
CSS:   0 ~ 1

转换公式: CSS值 = Figma值 ÷ 100

示例:
Figma: 80%  → CSS: opacity: 0.8;
Figma: 50%  → CSS: opacity: 0.5;
Figma: 100% → CSS: opacity: 1; (可省略)
```

---

### Q5: 为什么需要嵌套的 Text Group？

**A**: 为了实现不同的间距：

```
Profile Card (gap: 16px)
├─ Avatar
├─ [16px 间距] ← 这里是 16px
└─ Text Group (gap: 8px)
    ├─ Name
    ├─ [8px 间距] ← 这里是 8px
    └─ Bio
```

如果不用嵌套容器，所有间距都会是 16px。

---

## 📚 快速参考表

### Auto Layout 速查

| Figma | CSS |
|-------|-----|
| Vertical | `flex-direction: column;` |
| Horizontal | `flex-direction: row;` |
| Item Spacing | `gap` |
| Counter Axis: CENTER | `align-items: center;` |
| Primary Axis: CENTER | `justify-content: center;` |

### 尺寸模式速查

| Figma | CSS |
|-------|-----|
| Fixed (320px) | `width: 320px;` |
| HUG | `width: auto;` |
| FILL | `width: 100%;` |

### 字重速查

| Figma | CSS |
|-------|-----|
| Regular | `font-weight: 400;` |
| Bold | `font-weight: 700;` |

---

**🎓 学习建议**: 

1. 打开 Figma 和代码编辑器，对照学习
2. 修改 Figma 中的参数，观察需要改哪些 CSS
3. 从简单属性开始，逐步理解复杂布局
4. 多动手实践，建立直觉

**💡 记住**: Figma 和 CSS 只是表达方式不同，背后的设计概念是相通的！

