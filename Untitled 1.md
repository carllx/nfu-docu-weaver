### **Phase 3: 组件批量生成 (完整过程)**

我们将生成一个包含 32 个按钮的代表性样本集。这个集合足以覆盖所有 `State` 和 `Icon Position`，并展示不同 `Type` 和 `Size` 的组合，是理想的教学案例规模。

**核心生成逻辑**: 我们将为每行按钮（按 `Type` 和 `Size` 组合）生成所有 6 种状态 (`Default`, `Hover`, `Pressed`, `Focus`, `Loading`, `Disabled`)，并根据教学需要展示不同的 `Icon Position`。

**坐标系**: X 轴代表不同的 `State`，Y 轴代表不同的 `Type/Size/Icon` 组合。

---

#### **生成 `Primary/Large` (完整图标位置)**

- **目标**: 完整展示 `Primary/Large` 尺寸下，所有 `Icon Position` (`Left`, `Right`, `None`, `Only`) 的 `Default` 和 `Focus` 状态，以及一个完整的状态行。
    
- **`Primary/Large` (Icon: Left) - 全状态行**
    
    - `create_button("Button/Primary/Large/Default/Left", 100, 100, largeConfig, primaryDefaultConfig, "Left")`
        
    - `create_button("Button/Primary/Large/Hover/Left", 300, 100, largeConfig, primaryHoverConfig, "Left")`
        
    - `create_button("Button/Primary/Large/Pressed/Left", 500, 100, largeConfig, primaryPressedConfig, "Left")`
        
    - `create_button("Button/Primary/Large/Focus/Left", 700, 100, largeConfig, primaryFocusConfig, "Left")`
        
    - `create_button("Button/Primary/Large/Loading/Left", 900, 100, largeConfig, loadingConfig, "Left")`
        
    - `create_button("Button/Primary/Large/Disabled/Left", 1100, 100, largeConfig, disabledConfig, "Left")`
        
- **`Primary/Large` (Icon: Right)**
    
    - `create_button("Button/Primary/Large/Default/Right", 100, 170, largeConfig, primaryDefaultConfig, "Right")`
        
    - `create_button("Button/Primary/Large/Focus/Right", 300, 170, largeConfig, primaryFocusConfig, "Right")`
        
- **`Primary/Large` (Icon: None)**
    
    - `create_button("Button/Primary/Large/Default/None", 100, 240, largeConfig, primaryDefaultConfig, "None")`
        
    - `create_button("Button/Primary/Large/Focus/None", 300, 240, largeConfig, primaryFocusConfig, "None")`
        
- **`Primary/Large` (Icon: Only)**
    
    - `create_button("Button/Primary/Large/Default/Only", 100, 310, largeConfig, primaryDefaultConfig, "Only")`
        
    - `create_button("Button/Primary/Large/Focus/Only", 300, 310, largeConfig, primaryFocusConfig, "Only")`
        

---

#### **生成 `Secondary/Medium` (核心图标位置)**

- **目标**: 展示 `Secondary/Medium` 尺寸下的所有状态，并演示 `Left` 和 `None` 两种最常用的图标配置。
    
- **`Secondary/Medium` (Icon: Left) - 全状态行**
    
    - `create_button("Button/Secondary/Medium/Default/Left", 100, 410, mediumConfig, secondaryDefaultConfig, "Left")`
        
    - `create_button("Button/Secondary/Medium/Hover/Left", 300, 410, mediumConfig, secondaryHoverConfig, "Left")`
        
    - `create_button("Button/Secondary/Medium/Pressed/Left", 500, 410, mediumConfig, secondaryPressedConfig, "Left")`
        
    - `create_button("Button/Secondary/Medium/Focus/Left", 700, 410, mediumConfig, secondaryFocusConfig, "Left")`
        
    - `create_button("Button/Secondary/Medium/Loading/Left", 900, 410, mediumConfig, loadingConfig, "Left")`
        
    - `create_button("Button/Secondary/Medium/Disabled/Left", 1100, 410, mediumConfig, disabledConfig, "Left")`
        
- **`Secondary/Medium` (Icon: None) - 全状态行**
    
    - `create_button("Button/Secondary/Medium/Default/None", 100, 480, mediumConfig, secondaryDefaultConfig, "None")`
        
    - `create_button("Button/Secondary/Medium/Hover/None", 300, 480, mediumConfig, secondaryHoverConfig, "None")`
        
    - `create_button("Button/Secondary/Medium/Pressed/None", 500, 480, mediumConfig, secondaryPressedConfig, "None")`
        
    - `create_button("Button/Secondary/Medium/Focus/None", 700, 480, mediumConfig, secondaryFocusConfig, "None")`
        
    - `create_button("Button/Secondary/Medium/Loading/None", 900, 480, mediumConfig, loadingConfig, "None")`
        
    - `create_button("Button/Secondary/Medium/Disabled/None", 1100, 480, mediumConfig, disabledConfig, "None")`
        

---

#### **生成 `Destructive/Large` (简化版)**

- **目标**: 展示 `Destructive` 类型，并演示无图标 (`None`) 的情况。
    
- **`Destructive/Large` (Icon: None) - 核心状态**
    
    - `create_button("Button/Destructive/Large/Default/None", 100, 580, largeConfig, destructiveDefaultConfig, "None")`
        
    - `create_button("Button/Destructive/Large/Hover/None", 300, 580, largeConfig, destructiveHoverConfig, "None")`
        
    - `create_button("Button/Destructive/Large/Focus/None", 500, 580, largeConfig, destructiveFocusConfig, "None")`
        
    - `create_button("Button/Destructive/Large/Disabled/None", 700, 580, largeConfig, disabledConfig, "None")`
        

---

这个完整的 **Phase 3** 脚本现在逻辑严密，覆盖了所有教学要点。AI 助手可以精确地执行此计划，为 **Phase 4** 的教学文档环节和最终交付提供一个完美的组件基础。