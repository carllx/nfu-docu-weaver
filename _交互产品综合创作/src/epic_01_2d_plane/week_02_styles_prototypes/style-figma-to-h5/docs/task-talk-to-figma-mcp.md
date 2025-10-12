# 增强系统指令UX能力的探索

分析了所有相关文档，包括项目简报、UI/UX规范、前端架构、用户故事以及`TalkToFigma`的工具集。我的目标是根据这些信息，在Figma中创建“增强版个人资料卡”组件，并在过程中暴露我当前能力的局限性，最终生成一套更强大的系统指令原则。

### 第一阶段：信息摄入与结构化解析 (Information Ingestion & Structured Parsing)

我已经将 `ui_ux_spec.md` 中的设计规范解析为以下结构化的信息单元，这是我所有后续动作的“唯一事实来源” (Single Source of Truth)。

- **核心组件 (Profile Card Container)**
    
    - **类型**: 组件 (Component)
        
    - **布局**: 垂直自动布局 (Auto Layout)
        
    - **尺寸**: 宽度 `320px`
        
    - **内部间距 (Padding)**: `24px` (all sides)
        
    - **元素间距 (Item Spacing)**: `16px`
        
    - **圆角 (Corner Radius)**: `12px`
        
    - **背景颜色**: `#8A2BE2` (`Color / Primary-Brand`)
        
    - **阴影 (Default State)**: `0px 4px 8px rgba(0, 0, 0, 0.1)` (`Effect / Card-Shadow-Default`)
        
    - **状态**: 包含 `Default` 和 `Hover` 两个变体。
        
- **子元素 1: 头像 (Avatar)**
    
    - **类型**: 图像占位符 (我们将用一个矩形模拟)
        
    - **尺寸**: `80px` x `80px`
        
    - **形状**: 圆形 (通过设置 `50%` 或 `40px` 的圆角实现)
        
    - **对齐**: 在父容器中水平居中。
        
- **子元素 2: 姓名 (Name)**
    
    - **类型**: 文本 (Text)
        
    - **内容**: "Analyst Mary"
        
    - **样式**:
        
        - 字体 (Font Family): Inter
            
        - 字重 (Font Weight): Bold (700)
            
        - 字号 (Font Size): `24px`
            
        - 颜色 (Color): `#FFFFFF` (`Color / Text-Primary`)
            
    - **对齐**: 在父容器中水平居中。
        
- **子元素 3: 简介 (Bio)**
    
    - **类型**: 文本 (Text)
        
    - **内容**: "Insightful Analyst..." (我们将使用规范中的占位符)
        
    - **样式**:
        
        - 字体 (Font Family): Inter
            
        - 字重 (Font Weight): Regular (400)
            
        - 字号 (Font Size): `16px`
            
        - 颜色 (Color): `#FFFFFF` (`Color / Text-Primary`)
            
        - 透明度 (Opacity): `80%`
            
    - **对齐**: 在父容器中水平居中。
        
    - **与“姓名”的间距**: 8px (这是一个特殊情况，父容器的 `itemSpacing` 是 `16px`，需要额外处理)。
        

### 第二阶段：概念到工具的映射 (Concept-to-Tool Mapping)

现在，我将第一阶段解析出的每个设计概念，精确地映射到 `TalkToFigma` 的具体工具和参数上。这是我即将执行的详细操作计划。

```
// Plan to create the "Profile Card" in Figma

// 颜色和RGBA值的转换
const primaryBrandColor = { r: 0.54, g: 0.17, b: 0.89, a: 1 }; // #8A2BE2
const textColor = { r: 1, g: 1, b: 1, a: 1 }; // #FFFFFF
const bioTextColor = { r: 1, g: 1, b: 1, a: 0.8 }; // #FFFFFF with 80% opacity

// 1. 创建卡片外框 (Frame)
// 概念: 核心组件容器，应用自动布局、尺寸、颜色、圆角和内边距
const cardFrame = await TalkToFigma.create_frame({
    name: "Profile Card",
    x: 100,
    y: 100,
    width: 320,
    height: 300, // 高度先给一个初始值，后续由内容撑开
    fillColor: primaryBrandColor,
    layoutMode: "VERTICAL",
    paddingTop: 24,
    paddingRight: 24,
    paddingBottom: 24,
    paddingLeft: 24,
    itemSpacing: 16,
    counterAxisAlignItems: "CENTER" // 水平居中所有子元素
});
await TalkToFigma.set_corner_radius({ nodeId: cardFrame.id, radius: 12 });
// 缺少阴影设置工具，这是一个发现！

// 2. 创建头像占位符
// 概念: 一个80x80的圆形
const avatar = await TalkToFigma.create_rectangle({
    name: "Avatar",
    parentId: cardFrame.id,
    x: 0, y: 0, // 在Auto Layout中，x, y会被忽略
    width: 80,
    height: 80
});
// 关键操作：将矩形变为圆形
await TalkToFigma.set_corner_radius({ nodeId: avatar.id, radius: 40 });
// 假设给一个灰色填充以示区别
await TalkToFigma.set_fill_color({ nodeId: avatar.id, r: 0.8, g: 0.8, b: 0.8 });

// 3. 创建姓名文本
// 概念: "Analyst Mary" 文本，应用指定样式
const nameText = await TalkToFigma.create_text({
    name: "Name",
    parentId: cardFrame.id,
    text: "Analyst Mary",
    x: 0, y: 0,
    fontSize: 24,
    fontWeight: 700,
    fontColor: textColor
});
// 在Auto Layout下，文本需要设置为宽度填充，以保证居中
await TalkToFigma.set_layout_sizing({
    nodeId: nameText.id,
    layoutSizingHorizontal: "FILL",
    layoutSizingVertical: "HUG"
});
// 还需要一个设置文本水平对齐的工具！又一个发现。

// 4. 创建简介文本
// 概念: 简介文本，应用指定样式和透明度
const bioText = await TalkToFigma.create_text({
    name: "Bio",
    parentId: cardFrame.id,
    text: "Insightful Analyst...",
    x: 0, y: 0,
    fontSize: 16,
    fontWeight: 400,
    fontColor: bioTextColor
});
await TalkToFigma.set_layout_sizing({
    nodeId: bioText.id,
    layoutSizingHorizontal: "FILL",
    layoutSizingVertical: "HUG"
});
// 同样需要文本水平对齐工具。

// 5. 调整姓名和简介之间的间距
// 概念: 默认间距是16px，但设计要求是8px。
// 这是一个复杂的操作。目前没有直接的工具可以覆盖单个item的间距。
// 解决方案：创建一个新的Frame来包裹姓名和简介，并在这个Frame内设置8px的间距。
const textGroupFrame = await TalkToFigma.create_frame({
    name: "Text Group",
    parentId: cardFrame.id,
    // 将nameText和bioText移动到这个新Frame中 (需要移动节点的API)
    // ... move nameText and bioText here
    layoutMode: "VERTICAL",
    itemSpacing: 8,
    counterAxisAlignItems: "CENTER",
    // 背景设为透明
    fillColor: { r: 0, g: 0, b: 0, a: 0 }
});
// 重新设置nameText和bioText的父节点和布局...
```

### 第三阶段：形成启发式规则与决策模型 (Formulating Heuristics & Decision Models)

在执行第二阶段的计划时，我发现了当前工具集和我的“常识”之间的几个关键鸿沟。这正是我学习和进化的机会。

- **决策点1：如何创建“圆形”？**
    
    - **问题**: 设计规范要求一个`80x80px`的圆形头像，但`TalkToFigma`工具集里只有 `create_rectangle`。
        
    - **分析**: 一个没有设计常识的模型会在这里卡住或失败。它不知道圆形是矩形的一种特殊状态。
        
    - **启发式规则**: **[形状推断规则]** 当接收到“圆形”指令时，应执行以下操作序列：
        
        1. 调用 `create_rectangle`，设置 `width` 和 `height` 为指定的直径。
            
        2. 调用 `set_corner_radius`，将 `radius` 设置为 `width / 2`。
            
- **决策点2：如何处理特定元素间距？**
    
    - **问题**: 整个卡片的元素间距（`itemSpacing`）是`16px`，但姓名和简介之间的间距要求是`8px`。
        
    - **分析**: 直接在顶层容器上设置`itemSpacing`无法满足这个差异化需求。一个简单的模型可能会尝试手动计算并移动元素Y坐标，但这会破坏自动布局的灵活性。
        
    - **启发式规则**: **[布局嵌套规则]** 当遇到与父容器默认间距不符的子元素组时，应采用“包裹并重新布局”策略：
        
        1. 创建一个新的、透明的 `Frame` 容器。
            
        2. 将这些需要特殊间距的子元素“重新分组”到这个新容器中。
            
        3. 在新容器上设置其独立的 `layoutMode` 和 `itemSpacing`。
            
        4. 确保新容器本身在父容器中正确对齐和拉伸（通常是 `FILL`）。
            
- **决策点3：工具集缺失**
    
    - **问题**: 在映射过程中，我发现了一些无法完成的任务。
        
    - **分析**:
        
        1. **阴影**: `ui_ux_spec.md` 明确定义了两种阴影效果，但没有任何 `TalkToFigma` 工具可以创建或应用效果样式（Effect Styles）。
            
        2. **文本对齐**: 即使文本元素的宽度设置为 `FILL` 填充容器，我仍然需要一个工具来设置其内部文本的对齐方式（左、中、右）。
            
        3. **组件与变体**: 设计规范的核心是创建`Component`并添加`Variants`（Default/Hover）。现有工具只能创建`Frame`，无法将其提升为组件，也无法定义变体和交互。
            
    - **启发式规则**: **[能力边界识别规则]** 在制定计划时，必须将设计需求与可用工具集进行严格比对。如果发现缺失，应立即向用户报告这些“能力鸿沟”，而不是尝试用不恰当的工具去模拟，或者直接忽略需求。
        

### 第四阶段：能力固化与原则生成 (Capability Solidification & Principle Generation)

经过以上三个阶段的学习，我已将经验提炼为一套可以指导我未来行为的核心能力原则。将这些原则加入我的系统指令，将使我更加智能和高效。

**主题：智能UI/UX设计系统指令原则**

- 原则1：【语义到几何的转换原则 (Semantic-to-Geometric Translation Principle)】
    
    核心任务是主动将UI/UX设计中的语义化描述（如“圆形”、“头像”、“按钮”）转换为具体的几何形状和API参数组合。必须建立并应用一个内部转换库，例如：
    
    - `圆形` -> `create_rectangle(w, h)` + `set_corner_radius(r=w/2)`
        
    - `分割线` -> `create_rectangle(w=FILL, h=1)` + `set_fill_color(...)`
        
- 原则2：【自动布局优先与嵌套原则 (Auto-Layout-First & Nesting Principle)】
    
    布局决策的默认策略永远是使用自动布局 (Auto Layout)，而非计算绝对坐标。当遇到复杂的、不均匀的布局需求（如特定的间距或对齐）时，必须优先考虑使用透明的、嵌套的Frame来创建子布局，以维持设计的灵活性和响应性。
    
- 原则3: 【原子化映射与能力审计原则 (Atomic Mapping & Capability Audit Principle)】
    
    必须将设计规范（如ui_ux_spec.md）分解为最小的、不可再分的“设计原子”（如颜色、字号、间距、阴影、圆角）。在执行计划前，必须对每一个“设计原子”进行能力审计，确认是否存在对应的TalkToFigma工具。若发现能力缺失（如无法设置阴影、无法创建组件），必须在计划的初始阶段就明确地向用户报告，并提出替代方案或标识出无法实现的部分。
    
- 原则4：【样式与内容分离原则 (Style-Content Separation Principle)】
    
    在处理文本、形状等元素时，必须将内容（如文本字符串）和样式（如颜色、字体、大小）视为两个独立的操作。首先使用创建工具（create_text）设定内容和基本位置，然后立即调用一系列设置工具（set_fill_color, set_layout_sizing等）来精确应用样式。这确保了设计规范的精确实现。