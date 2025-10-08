# Figma 按钮生成器 - 速查表 🚀

## ⚡ 5 秒快速启动

```markdown
请用 TalkToFigma 创建按钮变体系统：20个按钮(Primary/Secondary/Destructive × Large/Medium × 4状态)，紫色主题#7B61FF，8点网格，包含教学说明。
```

---

## 🎨 颜色速查（API 格式）

```javascript
// Primary 紫色系
{"r": 0.482, "g": 0.38, "b": 1}     // #7B61FF Default
{"r": 0.42, "g": 0.32, "b": 0.9}    // #6B52E6 Hover
{"r": 0.35, "g": 0.25, "b": 0.8}    // #594099 Pressed

// Destructive 红色系
{"r": 0.9, "g": 0.26, "b": 0.26}    // #E64242 Default
{"r": 0.8, "g": 0.2, "b": 0.2}      // #CC3333 Hover

// Disabled 灰色
{"r": 0.78, "g": 0.78, "b": 0.78}   // #C7C7C7
```

---

## 📐 尺寸速查（8点网格）

| 尺寸 | 高度 | X内边距 | Y内边距 | 字号 | 图标 |
|-----|------|--------|--------|------|-----|
| L   | 48px | 24px   | 12px   | 16pt | 20px |
| M   | 40px | 16px   | 10px   | 14pt | 18px |
| S   | 32px | 16px   | 6px    | 12pt | 16px |

---

## 🏷️ 命名公式

```
Button / {Type} / {Size} / {State} / {Icon}
```

**示例**:
- `Button/Primary/Large/Default/no-icon`
- `Button/Secondary/Medium/Hover/with-icon`

---

## 📦 核心清单（20 个）

```
✅ Primary/Large × 4 状态 × 2 图标 = 8
✅ Primary/Medium × 4 状态 = 4
✅ Secondary/Large × 4 状态 = 4
✅ Destructive/Large × 4 状态 = 4
```

---

## 🔧 关键参数

```javascript
// Auto Layout 必备
layoutMode: "HORIZONTAL"
primaryAxisAlignItems: "CENTER"
counterAxisAlignItems: "CENTER"
itemSpacing: 8
cornerRadius: 8

// 文本
fontWeight: 600
```

---

## 🎯 3 步合并变体

1. **选中** 所有按钮（已自动选中）
2. **右键** → "合并为变体"
3. **重命名** 属性（Property 1 → Type）

---

## 📚 文档导航

| 文件 | 用途 | 时长 |
|------|------|------|
| `figma-quick-prompt.md` | 快速生成 | 1分钟 |
| `figma-button-variants-generator.md` | 完整规格 | 10分钟 |
| `figma-button-config.json` | JSON配置 | 查询用 |
| `figma-usage-examples.md` | 10种场景 | 30分钟 |
| `README-FIGMA-BUTTONS.md` | 完整指南 | 60分钟 |

---

## 🐛 常见错误速查

| 问题 | 原因 | 解决 |
|------|------|------|
| 颜色不对 | RGB范围错误 | 用0-1而非0-255 |
| 无法合并 | 命名格式错 | 检查斜杠分隔 |
| 布局混乱 | 未用AutoLayout | 检查layoutMode |
| 文本溢出 | 固定宽度 | 改用HUG模式 |

---

## 🎓 教学时间表

| 时长 | 内容 | 文件 |
|------|------|------|
| 30分钟 | 基础入门 | 3个按钮简化版 |
| 45分钟 | 标准演示 | 20个按钮核心版 |
| 90分钟 | 完整实战 | 72个按钮完整版 |

---

## 🔄 自定义模板

### 更改颜色
```
使用蓝色主题：Primary #2563EB, Hover #1D4ED8
```

### 更改尺寸
```
添加 Small: 32px高, 16px内边距, 12pt字号
```

### 更改圆角
```
圆角改为 12px (更圆润) 或 4px (更方正)
```

---

## 📊 HEX ↔ Figma RGB 转换器

```javascript
// 快速转换公式
function hex2figma(hex) {
  return {
    r: parseInt(hex.slice(1,3), 16) / 255,
    g: parseInt(hex.slice(3,5), 16) / 255,
    b: parseInt(hex.slice(5,7), 16) / 255
  }
}

// 示例
hex2figma('#7B61FF')
// → {r: 0.482, g: 0.38, b: 1}
```

---

## 🚀 工具链

```bash
# Figma Tokens (设计令牌)
npm install figma-tokens

# Style Dictionary (代码生成)
npm install style-dictionary

# Figma API (自动化)
npm install figma-api
```

---

## ⌨️ Figma 快捷键

| 操作 | Mac | Windows |
|------|-----|---------|
| 创建Frame | Cmd+Opt+G | Ctrl+Alt+G |
| 自动布局 | Shift+A | Shift+A |
| 合并变体 | 右键菜单 | 右键菜单 |
| 创建组件 | Cmd+Opt+K | Ctrl+Alt+K |

---

## 📱 移动端优化要点

```markdown
✅ 最小触控区域: 44×44px (WCAG)
✅ 拇指友好高度: 56px
✅ 增大图标: 24×24px
✅ 增大圆角: 12px
✅ 增大间距: +4px
```

---

## ♿ 无障碍检查清单

```markdown
✅ 对比度 ≥ 4.5:1 (普通文字)
✅ 对比度 ≥ 3:1 (大文字)
✅ 添加 Focus 焦点状态
✅ 键盘导航支持
✅ 屏幕阅读器友好
```

---

## 🌐 国际化要点

```markdown
✅ 使用 HUG 自适应宽度
✅ 设置最小宽度 120px
✅ 设置最大宽度 320px
✅ 测试长文本换行
✅ 支持 RTL (阿拉伯语/希伯来语)
```

---

## 📈 性能基准

| 变体数 | 文件大小 | 加载速度 | 推荐场景 |
|--------|---------|---------|---------|
| 20个 | ~2MB | 快速⚡ | 教学演示 |
| 50个 | ~4MB | 良好✅ | 中型项目 |
| 100个 | ~8MB | 中等⚠️ | 大型系统 |
| 200+个 | ~15MB | 较慢❌ | 需分库 |

---

## 🎯 记住这 5 个核心

1. **斜杠命名法** = 自动识别层级
2. **Auto Layout** = 灵活响应式
3. **8点网格** = 视觉一致性
4. **变体系统** = N→1 的转变
5. **语义化** = 团队协作效率

---

## 🔗 快速链接

- [完整文档](./README-FIGMA-BUTTONS.md)
- [快速Prompt](./figma-quick-prompt.md)
- [JSON配置](./figma-button-config.json)
- [使用示例](./figma-usage-examples.md)
- [Figma官方文档](https://help.figma.com/hc/en-us/articles/360056440594)

---

## 💡 一句话提示

> **"斜杠命名 + Auto Layout + 选中合并 = 专业变体系统"**

---

**打印此页，贴在显示器旁边！** 📌

