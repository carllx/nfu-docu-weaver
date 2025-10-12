# Figma 自动化实现指南：TalkToFigma MCP Server

版本: 2.0  
更新日期: 2025-10-12  
状态: **半自动化流程（自动创建 + 手动完善）**

---

## 概述 (Overview)

本文档提供使用 **TalkToFigma MCP Server** 创建"个人资料卡"组件的完整操作指南。由于工具能力限制，实施过程分为：

1. **🤖 自动化阶段** - 使用 TalkToFigma 创建基础布局结构
2. **✋ 手动阶段** - 用户完成样式库、组件化、变体等操作

这种半自动化方式具有**教学价值**，能让学生清楚地理解哪些设计操作可以编程化，哪些需要设计师的判断。

---

## ⚠️ TalkToFigma MCP 能力局限 (Tool Limitations)

在开始实施前，必须了解工具的能力边界：

### ✅ **可以自动化的操作**
- 创建 Frame（自动布局）
- 创建矩形和文本元素
- 设置尺寸、位置、颜色、圆角
- 配置 Auto Layout 参数（方向、间距、padding、对齐）
- 设置布局约束（FILL、HUG、FIXED）

### ❌ **无法自动化的操作（需手动完成）**
- **创建 Component 和 Variants** - 只能创建 Frame，无法转换为组件
- **创建 Styles** - 无法创建颜色、文本、效果样式库
- **设置文本对齐** - 无法设置文本的水平对齐方式（居中、左对齐等）
- **应用阴影效果** - 无法为元素添加 box-shadow 或效果样式
- **设置文本透明度** - 只能通过颜色的 alpha 通道设置

---

## 第一阶段：设计规范解析 (Design Spec Parsing)

从 `ui_ux_spec.md` 中提取的结构化设计数据（唯一事实来源）：

### **设计原子 (Design Tokens)**

```javascript
// 颜色值（RGB 0-1 范围用于 TalkToFigma）
const COLORS = {
  primaryBrand: { r: 0.54, g: 0.17, b: 0.89, a: 1 },     // #8A2BE2
  textWhite: { r: 1, g: 1, b: 1, a: 1 },                  // #FFFFFF
  textWhite80: { r: 1, g: 1, b: 1, a: 0.8 },              // #FFFFFF 80%
  avatarPlaceholder: { r: 0.83, g: 0.83, b: 0.83, a: 1 }  // #D3D3D3
};

// 尺寸与间距
const DIMENSIONS = {
  cardWidth: 320,
  cardPadding: 24,
  cardRadius: 12,
  avatarSize: 80,
  avatarRadius: 40,  // 50% = 圆形
  spacingLarge: 16,  // 头像与文本组
  spacingSmall: 8    // 姓名与简介
};

// 文本样式
const TEXT_STYLES = {
  name: { size: 24, weight: 700 },
  bio: { size: 16, weight: 400 }
};
```

### **组件结构树**

```
Profile Card (Frame) - 320px 宽，垂直布局
├─ Padding: 24px (all sides)
├─ Item Spacing: 16px
├─ Counter Axis Align: CENTER
│
├── Avatar (Rectangle) - 80x80px, 圆角 40px
│   └─ Fill: #D3D3D3
│
└── Text Group (Frame) - 透明嵌套容器 ⚠️ 用于实现 8px 间距
    ├─ Layout: Vertical
    ├─ Item Spacing: 8px
    ├─ Width: FILL
    │
    ├── Name (Text) - "Analyst Mary"
    │   ├─ Size: 24px, Weight: 700
    │   └─ Color: #FFFFFF
    │
    └── Bio (Text) - "Insightful Analyst..."
        ├─ Size: 16px, Weight: 400
        └─ Color: #FFFFFF (80% opacity)
```
        

---

## 第二阶段：🤖 自动化创建步骤 (Automated Creation)

以下是使用 TalkToFigma MCP 自动创建基础结构的详细步骤。

### **步骤 1: 创建主卡片容器**

```javascript
// 创建主 Frame（将成为未来的 Component）
const cardFrame = await TalkToFigma.create_frame({
    name: "Profile Card",
    x: 100,                          // 画布位置
    y: 100,
    width: 320,                      // 固定宽度
    height: 300,                     // 初始高度，后续自动调整
    fillColor: { r: 0.54, g: 0.17, b: 0.89, a: 1 },  // #8A2BE2
    layoutMode: "VERTICAL",          // 垂直自动布局
    paddingTop: 24,
    paddingRight: 24,
    paddingBottom: 24,
    paddingLeft: 24,
    itemSpacing: 16,                 // 子元素默认间距
    counterAxisAlignItems: "CENTER", // 水平居中所有子元素
    layoutSizingVertical: "HUG"      // 高度由内容撑开
});

// 设置圆角
await TalkToFigma.set_corner_radius({ 
    nodeId: cardFrame.id, 
    radius: 12 
});
```

**⚠️ 自动化限制**: 无法设置阴影，需稍后手动添加。

---

### **步骤 2: 创建头像占位符（圆形）**

```javascript
// 创建矩形作为头像
const avatar = await TalkToFigma.create_rectangle({
    name: "Avatar",
    parentId: cardFrame.id,  // 作为 cardFrame 的子元素
    x: 0, y: 0,              // 在 Auto Layout 中会被忽略
    width: 80,
    height: 80
});

// 关键技巧：将矩形变为圆形（设置圆角为宽度的 50%）
await TalkToFigma.set_corner_radius({ 
    nodeId: avatar.id, 
    radius: 40  // 80 / 2 = 40
});

// 设置占位符颜色
await TalkToFigma.set_fill_color({ 
    nodeId: avatar.id, 
    r: 0.83, g: 0.83, b: 0.83, a: 1  // #D3D3D3
});
```

**💡 设计模式**: `圆形 = Rectangle + cornerRadius(width/2)`

---

### **步骤 3: 创建嵌套文本组容器**

```javascript
// 创建透明 Frame 用于包裹姓名和简介
// 目的：实现 8px 的特殊间距（不同于主容器的 16px）
const textGroup = await TalkToFigma.create_frame({
    name: "Text Group",
    parentId: cardFrame.id,
    x: 0, y: 0,
    width: 272,                      // 320 - 24*2 = 272
    height: 100,                     // 初始值
    fillColor: { r: 0, g: 0, b: 0, a: 0 },  // 透明背景
    layoutMode: "VERTICAL",
    itemSpacing: 8,                  // 姓名和简介之间的间距
    counterAxisAlignItems: "CENTER",
    layoutSizingHorizontal: "FILL", // 填充父容器宽度
    layoutSizingVertical: "HUG"      // 高度由内容撑开
});
```

**💡 布局嵌套策略**: 当需要不同间距时，使用透明嵌套容器。

---

### **步骤 4: 创建姓名文本**

```javascript
const nameText = await TalkToFigma.create_text({
    name: "Name",
    parentId: textGroup.id,  // 注意：父元素是 textGroup
    text: "Analyst Mary",
    x: 0, y: 0,
    fontSize: 24,
    fontWeight: 700,
    fontColor: { r: 1, g: 1, b: 1, a: 1 }  // #FFFFFF
});

// 设置文本布局约束
await TalkToFigma.set_layout_sizing({
    nodeId: nameText.id,
    layoutSizingHorizontal: "FILL",  // 宽度填充以实现居中
    layoutSizingVertical: "HUG"
});
```

**⚠️ 自动化限制**: 无法设置文本水平对齐，需稍后手动设置为"居中"。

---

### **步骤 5: 创建简介文本**

```javascript
const bioText = await TalkToFigma.create_text({
    name: "Bio",
    parentId: textGroup.id,  // 同样在 textGroup 内
    text: "Insightful Analyst exploring data patterns and narratives.",
    x: 0, y: 0,
    fontSize: 16,
    fontWeight: 400,
    fontColor: { r: 1, g: 1, b: 1, a: 0.8 }  // #FFFFFF 80% 透明度
});

// 设置文本布局约束
await TalkToFigma.set_layout_sizing({
    nodeId: bioText.id,
    layoutSizingHorizontal: "FILL",
    layoutSizingVertical: "HUG"
});
```

---

### **🎉 自动化阶段完成**

此时，Figma 中应该出现一个基础的卡片结构：
- ✅ 紫色背景的卡片 Frame
- ✅ 圆形灰色头像
- ✅ 白色文本（姓名和简介）
- ✅ 正确的间距和对齐

**⏸️ 暂停点**: 现在需要用户手动完成以下操作。

---

## 第三阶段：✋ 手动操作指南 (Manual Operations)

以下操作无法自动化，需要用户在 Figma 中手动完成。

### **📋 手动操作检查清单**

#### **A. 创建样式库 (Styles)**

TalkToFigma 无法创建样式，需手动建立设计系统。

**1. 创建颜色样式**

在 Figma 右侧面板：
- [ ] 选择卡片 Frame → Fill → 点击样式图标 → "+" 创建样式
  - 命名: `Color / Primary-Brand`
  - 颜色: `#8A2BE2`
  
- [ ] 重复创建其他颜色样式:
  - `Color / Text-Primary` → `#FFFFFF`
  - `Color / Avatar-Placeholder` → `#D3D3D3`

**2. 创建文本样式**

- [ ] 选择 "Name" 文本 → 右侧 Type Settings → "+" 创建样式
  - 命名: `Text / Heading-Name`
  - 参数: 24px, Bold (700), Center Align, White
  
- [ ] 选择 "Bio" 文本 → 创建样式
  - 命名: `Text / Body-Bio`
  - 参数: 16px, Regular (400), Center Align, White 80%

**3. 创建效果样式（阴影）**

- [ ] 选择卡片 Frame → Effects → "+" → Drop Shadow
  - X: 0, Y: 4, Blur: 8, Spread: 0
  - Color: `rgba(0, 0, 0, 0.1)`
  - 保存为样式: `Effect / Card-Shadow-Default`
  
- [ ] 创建第二个阴影样式（用于 Hover 变体）:
  - X: 0, Y: 8, Blur: 16, Spread: 0
  - Color: `rgba(0, 0, 0, 0.2)`
  - 保存为样式: `Effect / Card-Shadow-Hover`

---

#### **B. 设置文本对齐**

TalkToFigma 无法设置文本对齐，需手动调整。

- [ ] 选中 "Name" 文本 → 右侧 Type Settings → Align: **Center**
- [ ] 选中 "Bio" 文本 → 右侧 Type Settings → Align: **Center**

---

#### **C. 转换为组件并创建变体**

TalkToFigma 只能创建 Frame，无法创建 Component。

**1. 创建组件**

- [ ] 选中整个 "Profile Card" Frame
- [ ] 右键 → **Create Component** (或快捷键 `Ctrl+Alt+K` / `Cmd+Option+K`)
- [ ] 确认名称为 "Profile Card"

**2. 添加变体**

- [ ] 选中组件 → 右键 → **Add Variant**
- [ ] 在右侧面板，点击 "Properties" → 添加属性:
  - 属性名: `State`
  - 类型: Variant
  - 值: `Default`, `Hover`

**3. 配置 Hover 变体**

- [ ] 切换到 `State=Hover` 变体
- [ ] 更改阴影: Effects → 删除 `Card-Shadow-Default` → 应用 `Card-Shadow-Hover`
- [ ] （可选）轻微调整透明度或颜色以区分状态

_注: 在 CSS 实现中，hover 效果通过 `transform: scale(1.03)` 和阴影变化实现，但 Figma 变体主要用于展示设计意图。_

---

#### **D. 应用样式到元素（推荐）**

虽然颜色已直接设置，但建议重新应用样式以保持一致性：

- [ ] 选择卡片背景 → Fill → 选择 `Color / Primary-Brand` 样式
- [ ] 选择 Name 文本 → 应用 `Text / Heading-Name` 样式
- [ ] 选择 Bio 文本 → 应用 `Text / Body-Bio` 样式
- [ ] 选择头像 → Fill → 选择 `Color / Avatar-Placeholder` 样式

---

### **✅ 完成验证**

手动操作完成后，应该满足以下条件：

- [ ] 所有颜色、文本、效果样式已创建并显示在 Styles 面板
- [ ] 文本已设置为水平居中对齐
- [ ] Frame 已转换为 Component，包含 `Default` 和 `Hover` 两个变体
- [ ] 组件结构清晰，层级正确
- [ ] 所有元素已应用对应的样式（而非硬编码值）

**🎉 恭喜！** Figma 设计稿已完成，可以开始 HTML/CSS 实现阶段。
        

---

## 第四阶段：🧠 设计原则与启发式规则 (Design Principles & Heuristics)

通过本项目的实践，总结出以下核心原则，用于指导未来的 UI/UX 自动化设计工作。

---

### **原则 1: 语义到几何的转换 (Semantic-to-Geometric Translation)**

**核心思想**: 将设计语言中的语义化描述转换为具体的 API 调用组合。

**转换库 (Translation Library)**:

| 语义描述 | API 实现 |
|---------|----------|
| **圆形** (Circle) | `create_rectangle(w, h)` + `set_corner_radius(r = w/2)` |
| **分割线** (Divider) | `create_rectangle(w=FILL, h=1)` + `set_fill_color(gray)` |
| **卡片** (Card) | `create_frame()` + `layoutMode=VERTICAL` + `padding` + `cornerRadius` |
| **透明容器** (Spacer) | `create_frame()` + `fillColor={a:0}` + `layoutMode` |
| **头像占位符** (Avatar Placeholder) | `create_rectangle()` + `cornerRadius=50%` + `fill=gray` |

**实践案例**:
```javascript
// ❌ 错误：寻找不存在的 create_circle() API
// ✅ 正确：理解圆形是矩形 + 特殊圆角
const avatar = create_rectangle(80, 80) + set_corner_radius(40);
```

---

### **原则 2: 自动布局优先与嵌套策略 (Auto-Layout-First & Nesting)**

**核心思想**: 永远优先使用 Auto Layout，通过嵌套容器解决复杂布局需求。

**决策树**:

```
需要布局元素？
├─ 简单的统一间距？ → 使用单层 Frame + itemSpacing
├─ 不同的局部间距？ → 嵌套透明 Frame
├─ 特殊对齐需求？ → 调整 counterAxisAlignItems / primaryAxisAlignItems
└─ 固定尺寸 vs 自适应？ → 使用 FIXED / HUG / FILL
```

**反模式 (Anti-Pattern)**:
```javascript
// ❌ 不要手动计算坐标
element.y = avatar.y + avatar.height + 16;  // 脆弱！

// ✅ 使用 Auto Layout 自动处理
parentFrame.itemSpacing = 16;  // 响应式！
```

---

### **原则 3: 原子化映射与能力审计 (Atomic Mapping & Capability Audit)**

**核心思想**: 将设计规范分解为设计原子，并审计工具能力。

**设计原子分类**:

| 类别 | 设计原子示例 | TalkToFigma 支持 |
|------|-------------|-----------------|
| **颜色** | 填充、描边、文本颜色 | ✅ 支持 |
| **尺寸** | 宽度、高度、圆角 | ✅ 支持 |
| **布局** | Auto Layout、间距、对齐 | ⚠️ 部分支持（无文本对齐）|
| **效果** | 阴影、模糊 | ❌ 不支持 |
| **样式库** | Color/Text/Effect Styles | ❌ 不支持 |
| **组件** | Component、Variant | ❌ 不支持 |

**实施策略**:
1. **规划阶段**: 列出所有设计原子
2. **审计阶段**: 标记哪些可自动化、哪些需手动
3. **执行阶段**: 自动化部分 → 暂停 → 提示手动操作
4. **验证阶段**: 检查清单确认完成度

---

### **原则 4: 样式与内容分离 (Style-Content Separation)**

**核心思想**: 分两步创建元素 - 先内容，后样式。

**标准流程**:

```javascript
// Step 1: 创建内容（结构）
const text = create_text({
    text: "Analyst Mary",  // 内容
    parentId: container.id  // 位置关系
});

// Step 2: 应用样式（视觉）
set_text_size(text.id, 24);
set_text_weight(text.id, 700);
set_fill_color(text.id, white);
set_layout_sizing(text.id, "FILL", "HUG");
```

**优势**:
- 代码结构清晰
- 便于调试和修改
- 与 Figma 样式系统概念一致

---

### **原则 5: 明确的暂停点与用户协作 (Explicit Pause Points)**

**核心思想**: 在无法自动化的地方明确暂停，提供清晰的手动操作指南。

**暂停点标识**:
```
🤖 [自动化阶段] 创建基础结构...
   ✅ 完成！
   
⏸️ [暂停点] 
   ❌ 以下操作无法自动化，需手动完成：
   
✋ [手动操作]
   📋 检查清单：
   - [ ] 创建颜色样式
   - [ ] 设置文本对齐
   - [ ] 转换为组件
   
✅ [继续执行] 手动操作完成后...
```

---

### **📚 设计模式库 (Design Pattern Library)**

**常用模式速查**:

1. **圆形元素**: `Rectangle(n, n) + CornerRadius(n/2)`
2. **透明容器**: `Frame + Fill(a=0) + Layout`
3. **嵌套间距**: `Outer Frame(spacing=16) > Inner Frame(spacing=8)`
4. **居中对齐**: `counterAxisAlignItems="CENTER"`
5. **自适应尺寸**: `layoutSizingVertical="HUG"` + `layoutSizingHorizontal="FILL"`

---

**🎯 总结**: 
- ✅ **可编程化** 的操作 → 全自动执行
- ⚠️ **部分可编程** 的操作 → 自动化 + 手动补充
- ❌ **不可编程** 的操作 → 明确标注，提供详细指南
- 🎓 **教学价值** → 让学生理解设计系统的边界与本质