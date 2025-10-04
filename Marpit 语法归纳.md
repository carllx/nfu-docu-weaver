# Marpit 语法归纳

Marpit 是一个用于将 Markdown 转换为幻灯片（Slide Deck）的轻量级框架。它扩展了标准的 Markdown 语法，使其更适合创建演示文稿。以下是 Marpit 的核心语法和特性归纳。

## 1. 基本用法

Marpit 的核心功能是将 Markdown 和 CSS 主题转换为 HTML 和 CSS。 <mcreference link="https://marpit.marp.app/usage" index="1">1</mcreference>

- **分页**: 使用水平分割线 `---` 来分隔每一页幻灯片。 <mcreference link="https://gist.github.com/yhatt/a7d33a306a87ff634df7bb96aab058b5" index="3">3</mcreference>

```markdown
# 第一页

这是第一页的内容。

---

# 第二页

这是第二页的内容。
```

## 2. 指令 (Directives)

指令用于控制幻灯片的样式和行为，可以作为 Front-matter 写在 Markdown 文件开头，也可以作为 HTML 注释写在任何地方。 <mcreference link="https://gist.github.com/yhatt/a7d33a306a87ff634df7bb96aab058b5" index="3">3</mcreference>

### 全局指令 (Global Directives)

应用于整个演示文稿。

- `theme`: 选择主题 (e.g., `default`, `gaia`, `uncover`)。
- `size`: 设置幻灯片尺寸 (e.g., `16:9`, `4:3`)。
- `headingDivider`: 根据标题级别自动分页。

**示例:**
```yaml
---
theme: gaia
size: 16:9
---
```

### 局部指令 (Local Directives)

应用于当前页及之后的所有页面。在指令前加上下划线 `_` (e.g., `_class`) 可以使其只应用于当前页。

- `paginate`: `true` 显示页码。
- `header`: 定义页眉内容。
- `footer`: 定义页脚内容。
- `class`: 为当前幻灯片设置 HTML class。
- `color`: 设置文字颜色。
- `backgroundColor`: 设置背景颜色。

**示例:**
```html
<!-- _class: invert -->
<!-- paginate: true -->
```

## 3. 图片语法

Marpit 扩展了标准的图片语法，以支持调整大小、应用滤镜和设置背景。 <mcreference link="https://github.com/marp-team/marpit/blob/main/docs/image-syntax.md" index="5">5</mcreference>

### 调整大小

使用 `width` (或 `w`) 和 `height` (或 `h`) 关键字。

```markdown
![width:200px height:100px](image.png)
![w:32 h:32](image.jpg)
```

### 图片滤镜

可以直接在 alt 文本中使用 CSS 滤镜函数。

```markdown
![blur sepia:50%](filters.png)
![brightness:.8](image.jpg)
```

### 背景图片

使用 `bg` 关键字将图片设置为幻灯片背景。

```markdown
![bg](background.jpg)
```

#### 背景尺寸

可以指定背景图片的尺寸，如 `cover` (默认), `contain`, `fit`, `auto` 或百分比。

```markdown
![bg contain](background.jpg)
![bg 50%](background.jpg)
```

#### 高级背景 (Advanced Backgrounds)

需要开启 `inlineSVG` 实验性功能。支持多背景、分割背景和背景滤镜。

- **多背景**: 在一页中定义多个 `![bg]` 图片。
- **分割背景**: 使用 `left` 或 `right` 关键字，将背景放置在幻灯片的一侧。

```markdown
![bg left:33%](image.jpg)

# 这是一个分割背景
```

## 4. 列表

- 使用 `*` 标记的列表会被解析为分步显示的列表（Fragmented List），内容会逐条出现。 <mcreference link="https://gist.github.com/yhatt/a7d33a306a87ff634df7bb96aab058b5" index="3">3</mcreference>

```markdown
* One
* Two
* Three
```

## 5. 样式定制

### 主题 CSS

可以创建自定义的 CSS 主题文件，并在 `theme` 指令中引用。 <mcreference link="https://gist.github.com/yhatt/a7d33a306a87ff634df7bb96aab058b5" index="3">3</mcreference>

```css
/* @theme my-theme */

section {
  background-color: #f0f0f0;
  color: #333;
}
```

### 内联样式

- `<style>` 标签: 可以在 Markdown 文件中直接使用 `<style>` 标签来覆盖或添加样式。 <mcreference link="https://gist.github.com/yhatt/a7d33a306a87ff634df7bb96aab058b5" index="3">3</mcreference>
- `<style scoped>`: 仅对当前页生效。 <mcreference link="https://gist.github.com/yhatt/a7d33a306a87ff634df7bb96aab058b5" index="3">3</mcreference>

```html
<style scoped>
h1 {
  color: red;
}
</style>

# 这个标题是红色的
```

## 6. 其他特性

- **数学公式**: 支持 KaTeX 数学公式排版。 <mcreference link="https://gist.github.com/yhatt/a7d33a306a87ff634df7bb96aab058b5" index="3">3</mcreference>
- **自动缩放**: 对于过长的代码块和数学公式，某些主题支持自动缩放。 <mcreference link="https://gist.github.com/yhatt/a7d33a306a87ff634df7bb96aab058b5" index="3">3</mcreference>
- **Presenter Notes**: HTML 注释会被收集为演讲者备注。 <mcreference link="https://marpit.marp.app/usage" index="1">1</mcreference>

---

*参考资料:*
1.  [Marpit Official Usage Guide](https://marpit.marp.app/usage)
2.  [Marpit GitHub Repository](https://github.com/marp-team/marpit)
3.  [Marp Next Example Gist](https://gist.github.com/yhatt/a7d33a306a87ff634df7bb96aab058b5)
4.  [Marpit Image Syntax Documentation](https://github.com/marp-team/marpit/blob/main/docs/image-syntax.md)