# Figma 按钮变体系统生成器 Prompt

## 使用说明
将以下 prompt 复制到 AI 助手中，即可自动生成完整的 Figma 按钮组件系统。

---

## 🎯 主 Prompt

```
你是一个 Figma 自动化专家。请使用 TalkToFigma 工具为我创建一个完整的按钮变体系统教学案例。

## 需求规格

### 1. 按钮组件规格

#### 类型维度（Type）
- **Primary**: 紫色实心背景 (#7B61FF)
  - Default: #7B61FF
  - Hover: #6B52E6 (略深)
  - Pressed: #594099 (更深)
  - Disabled: #C7C7C7 (灰色)

- **Secondary**: 白色背景 + 紫色描边
  - Default: 白色背景 + #7B61FF 描边 2px
  - Hover: 浅紫色背景 #F2EEFF + #6B52E6 描边
  - Pressed: 更深浅紫色背景 #E5DDFF + #594099 描边
  - Disabled: 浅灰背景 #F5F5F5 + 浅灰描边 #D9D9D9

- **Destructive**: 红色实心背景
  - Default: #E64242
  - Hover: #CC3333
  - Pressed: #B32626
  - Disabled: #C7C7C7

#### 尺寸维度（Size）- 遵循 8 点网格
- **Large**: 高度 48px, 左右内边距 24px, 上下内边距 12px, 字号 16pt
- **Medium**: 高度 40px, 左右内边距 16px, 上下内边距 10px, 字号 14pt
- **Small**: 高度 32px, 左右内边距 16px, 上下内边距 6px, 字号 12pt

#### 状态维度（State）
- Default (默认)
- Hover (悬停)
- Pressed (按下)
- Disabled (禁用)

#### 图标配置（Icon）
- **no-icon**: 仅文本
- **with-icon**: 文本 + 20×20px 图标占位符（间距 8px）

### 2. 命名规范
使用斜杠命名法：`Button/Type/Size/State/Icon`

示例：
- `Button/Primary/Large/Default/no-icon`
- `Button/Secondary/Medium/Hover/with-icon`
- `Button/Destructive/Large/Disabled/no-icon`

### 3. 创建顺序（优先级）

#### 第一批：Primary/Large（8 个）
1. Button/Primary/Large/Default/no-icon
2. Button/Primary/Large/Hover/no-icon
3. Button/Primary/Large/Pressed/no-icon
4. Button/Primary/Large/Disabled/no-icon
5. Button/Primary/Large/Default/with-icon
6. Button/Primary/Large/Hover/with-icon
7. Button/Primary/Large/Pressed/with-icon
8. Button/Primary/Large/Disabled/with-icon

#### 第二批：Primary/Medium（4 个 no-icon）
9-12. Medium 尺寸的 4 个状态

#### 第三批：Secondary/Large（4 个 no-icon）
13-16. Secondary 类型的 4 个状态

#### 第四批：Destructive/Large（4 个 no-icon）
17-20. Destructive 类型的 4 个状态

### 4. 技术要求

- ✅ 所有按钮使用 **Auto Layout（自动布局）**
- ✅ 圆角半径统一为 **8px**
- ✅ 文本标签默认为 "Button Label"，Destructive 用 "Delete"
- ✅ 图标用白色/紫色/灰色矩形占位符（20×20px）
- ✅ 文本字重：600 (Semi Bold)

### 5. 布局要求

**画布布局：**
- Primary/Large (no-icon): 从 (100, 100) 开始，横向间距 220px
- Primary/Large (with-icon): Y=170
- Primary/Medium: Y=240，宽度 180px
- Secondary/Large: Y=300
- Destructive/Large: Y=370

### 6. 教学辅助组件

请创建以下教学说明框：

1. **页面标题** (100, 20, 1250×60)
   - 紫色背景 #7B61FF
   - 白色标题："🎯 Figma 变体系统完整教学案例"

2. **合并为变体的步骤** (100, 450, 860×200)
   - 浅紫色背景 #F2EEFF
   - 紫色描边 2px
   - 内容：
     ```
     1️⃣ 使用斜杠命名法：所有按钮已按 Button/Type/Size/State/Icon 格式命名
     2️⃣ 选中所有按钮：使用 Shift 或框选
     3️⃣ 右键点击 → 选择"合并为变体"
     4️⃣ Figma 会自动识别斜杠结构
     5️⃣ 重命名属性名称
     ```

3. **颜色样式参考** (1000, 100, 350×550)
   - 白色背景
   - 灰色描边 1px
   - 列出所有颜色的 HEX 值

4. **变体系统的核心优势** (100, 670, 860×180)
   - 浅黄色背景 #FFF9E5
   - 黄色描边 2px
   - 对比传统方式 vs 变体方式

5. **实际应用示例** (100, 870, 500×300)
   - 白色对话框
   - 包含标题、消息、两个按钮（Secondary + Destructive）

6. **教学总结与下一步** (620, 870, 730×300)
   - 浅绿色背景 #F2FFF2
   - 绿色描边 2px
   - 学习检查清单 + 下一步实践任务

7. **重要注意事项** (1000, 670, 350×180)
   - 浅红色背景 #FFF2F2
   - 红色描边 2px
   - 工具限制说明

8. **项目统计与成果** (100, 1190, 1250×120)
   - 浅紫色背景
   - 紫色描边 3px
   - 成果统计

### 7. 最后步骤

创建完成后，**自动选中所有 20 个按钮组件**，使用 `set_selections` 工具，方便用户立即执行"合并为变体"操作。

---

## 执行流程

1. 连接 Figma 频道
2. 查询现有样式和组件
3. 按顺序创建 20 个按钮组件
4. 创建 8 个教学辅助框架
5. 添加视觉标注（步骤编号）
6. 自动选中所有按钮组件
7. 生成完成报告

请开始执行！
```

---

## 🎨 颜色速查表

| 用途 | 颜色名称 | HEX | RGB |
|------|---------|-----|-----|
| Primary Default | brand-primary | #7B61FF | rgb(123, 97, 255) |
| Primary Hover | brand-primary-hover | #6B52E6 | rgb(107, 82, 230) |
| Primary Pressed | brand-primary-pressed | #594099 | rgb(89, 64, 153) |
| Secondary Background | bg-white | #FFFFFF | rgb(255, 255, 255) |
| Secondary Hover BG | bg-light-purple | #F2EEFF | rgb(242, 238, 255) |
| Destructive Default | danger-default | #E64242 | rgb(230, 66, 66) |
| Destructive Hover | danger-hover | #CC3333 | rgb(204, 51, 51) |
| Destructive Pressed | danger-pressed | #B32626 | rgb(179, 38, 38) |
| Disabled | gray-disabled | #C7C7C7 | rgb(199, 199, 199) |

---

## 🔄 变体参数

生成的按钮组件集应包含以下属性：

```yaml
Button Component Set:
  Properties:
    - Name: Type
      Values: [Primary, Secondary, Destructive]
    
    - Name: Size
      Values: [Large, Medium, Small]
    
    - Name: State
      Values: [Default, Hover, Pressed, Disabled]
    
    - Name: Icon
      Values: [no-icon, with-icon]

Total Variants: 3 × 3 × 4 × 2 = 72 (教学版本创建 20 个核心示例)
```

---

## 📐 尺寸规范表

| 尺寸 | 高度 | 内边距（左右） | 内边距（上下） | 字号 | 图标大小 | 间距 |
|------|------|---------------|---------------|------|---------|------|
| Large | 48px | 24px | 12px | 16pt | 20×20px | 8px |
| Medium | 40px | 16px | 10px | 14pt | 18×18px | 8px |
| Small | 32px | 16px | 6px | 12pt | 16×16px | 8px |

*所有数值符合 8 点网格系统*

---

## 🎯 教学要点

生成的案例应清晰展示：

1. ✅ **斜杠命名法的威力** - 自动识别层级结构
2. ✅ **从 N 到 1 的转变** - 20 个独立组件 → 1 个组件集
3. ✅ **属性面板的便利** - 下拉菜单快速切换
4. ✅ **智能交互** - 原型模式下的自动状态切换
5. ✅ **8 点网格系统** - 保持设计一致性
6. ✅ **语义化命名** - 提升团队协作效率

---

## 📝 使用示例

### 基础调用
```
请按照上述规格创建 Figma 按钮变体系统
```

### 自定义调整
```
请按照上述规格创建按钮系统，但使用蓝色主题：
- Primary: #2563EB (蓝色)
- Secondary: 白色 + 蓝色描边
- Destructive: 保持红色
```

### 扩展版本
```
请创建完整的 72 变体版本，包含所有 Size × Type × State × Icon 组合
```

---

## 🔧 故障排查

### 问题：颜色不准确
**解决**：检查 RGB 值是否在 0-1 范围内（Figma API 使用归一化值）
- #7B61FF → rgb(0.482, 0.38, 1.0)

### 问题：布局混乱
**解决**：确保所有按钮使用 Auto Layout，并设置正确的 padding 和 itemSpacing

### 问题：无法合并为变体
**解决**：检查命名是否严格遵循 `Component/Property1/Property2/...` 格式

---

## 🎓 扩展学习

生成后，学生可以练习：

1. **添加新变体**
   - 创建 Tertiary（文本按钮）类型
   - 添加 Small 尺寸

2. **创建变体属性**
   - 手动重命名属性
   - 调整默认值

3. **原型交互**
   - 设置 Hover 交互
   - 创建 Disabled 限制条件

4. **组件实例使用**
   - 在设计中使用组件
   - 通过属性面板切换状态

---

## 📦 输出清单

完成后应包含：

- ✅ 20 个命名正确的按钮组件
- ✅ 8 个教学说明框架
- ✅ 4 个视觉标注（步骤编号）
- ✅ 1 个颜色参考指南
- ✅ 1 个实际应用示例
- ✅ 自动选中所有按钮（ready to combine）

---

## 版本历史

- **v1.0** (2025-01-07): 初始版本，20 个核心按钮 + 完整教学框架
- **v1.1** (待定): 扩展到 72 个完整变体

---

## 许可与使用

此 prompt 可自由用于教学、培训和个人学习。
建议配合 Figma 官方变体文档使用：https://help.figma.com/hc/en-us/articles/360056440594

