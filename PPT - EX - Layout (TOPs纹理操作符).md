## 使用TOPs（纹理操作符）

![bg blur](https://i.imgur.com/wxuGyaX.webp)

---

![bg fit ](https://i.imgur.com/wxuGyaX.webp)

---

Sources:

[[ source- Working with TOPs (Texture Operators)]]

https://www.youtube.com/watch?v=xsXBO6JQVWU&list=PLpuCjVEMQha9rjhDET3uuE0T3UeIcROJu&index=11
![TOP操作符示意图](https://i.ytimg.com/vi/xsXBO6JQVWU/hqdefault.jpg)

---

## 实践目的

- 链式合成方法, 逐步构建复杂的排版能力
- 同时保持网络的清晰和可控性。
- 应用场景,例如**动态海报**

---


## 图像处理流程

![bg fit left:50% vertical](https://i.imgur.com/0JK4Etz.webp)

---


### 1. Movie File IN TOP
- **功能**：图像加载与预处理
- **创建方式**：
  1. `双击`网格 → 选择操作符
  2. `Tab`键 → 输入"movie" → 选择类型
![bg fit left:50% vertical](https://i.imgur.com/DZqgxxU.webp)
![bg fit left:50% vertical](https://i.imgur.com/rZzeow2.webp)


---

- **参数优化**：
  - 检查分辨率（中键点击查看）


![bg fit left:50% vertical](https://i.imgur.com/5JmfSO9.webp)


---


  - 调整查看器尺寸匹配图像比例

![bg fit left:50% vertical](https://i.imgur.com/LeqCYMq.webp)


---


  - 使用`Null TOP`作为流程检查点


---


- 合理设置显示标志(Display Flag)

![bg fit left:50% vertical](https://i.imgur.com/QMv2uyn.webp)


---
### 2. Text TOP
- **创建方式**：
  - `Tab` → 输入"text" → 回车

---


- **分辨率设置**：
  - 默认 256×256 → 修改为实际需求尺寸
  - 使用`Value Ladder`快速调整（中键拖拽Y轴参数）

![bg fit left:50% vertical](https://i.imgur.com/RoCMDEB.webp)

---


- **批量编辑**：
  1. `Shift`+点击选择多个Text TOP
  2. 修改任一颜色/字体参数 → 同步更新
---


#### 创建文本

在 TouchDesigner 中创建文本非常简单：
1. 双击空白区域打开操作符创建对话框选择 Text TOP
2. 或者更快的方式：按 Tab 键，输入 "text"，然后按 Enter


---

#### 调整文本分辨率

1. 找到 Common 参数页面
2. 默认情况下，Text TOP 的分辨率是 `256×256`
3. 可以修改分辨率为更适合的值
   - 例如，对于横幅文本，512×100 可能更合适
![bg fit left:50% vertical](https://i.imgur.com/dUqw3OX.webp)


---
#### 批量修改多个文本

当你需要同时修改多个 Text TOP 的属性时：

1. 选择第一个 Text TOP
2. 按住 Shift 键并点击其他 Text TOP
3. 修改其中一个的参数（如颜色）
4. 所有选中的 Text TOP 都会同时更新

例如，如果你想将所有文本颜色改为红色，只需在其中一个的颜色选择器中点击红色，所有选中的文本都会变成红色！
![bg fit left:50% vertical](https://i.imgur.com/Ac6UWZB.webp)
![bg fit left:45%](https://i.imgur.com/dUqw3OX.webp)

---

### 合成工作流(Constant, Over)


- 使用 **Constant TOP** 创建特定分辨率的画布，
- 并使用 **Over TOP** 进行简单合成，
- 通过调整 `pre-fit overlay` 和 `justify` 参数进行精确定位 。

---
#### 使用Constant TOP创建画布

Constant TOP:
- 作为其他图像处理的基础图层, 提供了一个"干净的画布"(纯红色的背景)进行合成
- 可以精确设置任何分辨率的画布
- 能够控制背景颜色和透明度

![bg fit left:50% vertical](https://i.imgur.com/59BfLdf.webp)


![bg fit left:50% vertical](https://i.imgur.com/Th6FmTj.webp)

---

#### 使用Over TOP进行简单合成

Over TOP是TouchDesigner中最常用的合成操作符之一，它允许你将一个纹理叠加到另一个上面。

![bg fit left:50% vertical](https://i.imgur.com/oUfEIIj.webp)
![bg fit left:50% vertical](https://i.imgur.com/U5FmG4t.webp)

---


关键参数设置:

- **Fixed Layer**: 决定哪个input (输入)将提供基础分辨率（通常设为input 2）

---

**Pre-fit Overlay**: 控制如何处理不同分辨率(长高比)的纹理

- `Native Resolution`: 保持原始分辨率，不拉伸
- `Fill`: 拉伸填满整个画布（默认值）
- `Fit Horizontal`（水平适配）
- `Fit Vertical`（垂直适配）
- `Fit Best`（最佳适配）
- `Fit Outside`（外部适配）
 
---



- **Justify**: 控制Texture(纹理)在画布上的对齐方式
  - 水平: Left, Center, Right
  - 垂直: Top, Center, Bottom

- **Translate**: 在对齐后进行精确位置调整（可以设置为像素或小数单位）

![bg left:35% vertical](https://i.imgur.com/Z8urKpZ.webp)

---

### Composite TOP 合成技巧
- 处理多个图层合成
- 并通过调整 `fixed layer`和 `pre-fit overlay` 参数来控制图层位置与大小。
- [记住]将合成输出用作后续合成的基础层 。

---
#### 创建背景 

![bg fit left:50% vertical](https://i.imgur.com/dc6TVg1.webp)

---

允许多个输入 
![bg fit left:50% vertical](https://i.imgur.com/Fcxz3Ei.webp)
![bg fit left:45%](https://i.imgur.com/oUfEIIj.webp)
![bg fit left:45%](https://i.imgur.com/Z8urKpZ.webp)

#### 从"multiply"切换到"over"操作

- 默认的合成操作是"multiply"（乘法/叠加）。
- 乘法操作会导致所有内容都变成黑色。

---

要解决这个问题：
1. 在Composite TOP的参数面板中找到"operation"选项
2. 将其从默认的"multiply"更改为"over"
3. 这样你的图层就会按照正常的叠加方式显示


![bg fit left:50% vertical](https://i.imgur.com/QlO1dEv.webp)

---


#### Fixed Layer（固定图层）

Fixed Layer 参数决定了哪一个输入将作为基础层，并且决定最终输出的分辨率：

- 通常你会希望将背景画布设为固定图层
- 在Composite TOP中，可以通过"Transform"页面中的"Fixed Layer"选项来设置
- 也可以通过重新排列输入的顺序来调整（使用参数底部的Input OP区域中的箭头按钮）
	
![bg fit left:50% vertical](https://i.imgur.com/pGjd0OW.webp)
![bg fit left:50% vertical](https://i.imgur.com/wMwUzjA.webp)


---
### Pre-fit Overlay（预适配叠加层）

这个参数控制非固定图层如何适应固定图层的大小：

- "Fill"（填充）：会拉伸图像以填满整个画布（通常不是我们想要的）
- **"Native Resolution"（原生分辨率）：保持图像原始大小，不进行拉伸**
- 还有其他选项如"Fit Horizontally"（水平适配）、"Fit Vertically"（垂直适配）等

![bg fit left:50% vertical](https://i.imgur.com/AJysTps.webp)


---
## 实用定位技巧

设置好合成操作和预适配后，你可以使用以下方法精确控制图层位置：

**"Justify"（对齐）** 选项控制图层的基本位置：
   - 可以设置水平对齐（左、中、右）
   - 可以设置垂直对齐（上、中、下）

**"Translate"（平移）** 参数进行微调：
   - 记得将单位从默认的"F"（分数，0-1范围）改为"pixels"（像素）
   - 这样可以更直观地控制位置偏移
![bg fit left:40% vertical](https://i.imgur.com/Si6iQd3.webp)


---


## 构建复杂合成的工作流程

当处理多图层合成时，记住这个重要原则：**将前一个合成的输出用作下一个合成的基础层**。

例如，如果你要叠加三个元素：
1. 首先将元素1合成到背景上
2. 然后将元素2合成到"元素1+背景"的结果上
3. 最后将元素3合成到"元素1+元素2+背景"的结果上


---


### TIPs: Null操作符的重要性
在复杂Network(网络)中使用 **Null TOP**操作符作为检查点，
- 作为重要工作流最后的总结
- 作为后续工作流的引用

![bg fit left:50% vertical](https://i.imgur.com/0YPIcU3.webp)
![bg fit left:45%](https://i.imgur.com/QlO1dEv.webp)
![bg fit left:45%](https://i.imgur.com/pGjd0OW.webp)



### 利用显示标记
使用 TOPs 上的 "display flag"（显示标记）功能，使操作符的纹理作为网络背景显示，以便在调整过程中获得即时视觉反馈 。
![bg fit left:50% vertical](https://i.imgur.com/WlCNmUM.webp)

---


### Alpha通道处理
在使用 Constant TOP 创建画布时，将 alpha 通道设置为零，以避免合成过程中出现黑色背景 。
![bg fit left:50% vertical](https://i.imgur.com/Tq2BlfO.webp)

![bg fit left:50% vertical](https://i.imgur.com/11uA46w.webp)

---


## 总结

![TOP操作符示意图](https://i.ytimg.com/vi/xsXBO6JQVWU/hqdefault.jpg)

### 本节学习的核心操作符

- **Movie File In TOP** - 导入图像文件
- **Text TOP** - 创建和编辑文本
- **Constant TOP** - 创建纯色背景画布
- **Over TOP** - 基础图层叠加合成
- **Composite TOP** - 多输入高级合成
- **Null TOP** - 创建网络检查点

---


### 重要技巧

- 使用操作符优化视图尺寸
- 调整分辨率和对齐方式
- 多元件同时编辑参数
- 使用像素单位进行精确定位
- Display Flag显示标志的应用

---


## 工作流程

1. 导入素材和创建文本
2. 使用Constant TOP创建画布
3. 通过Over TOP和Composite TOP合成图层
4. 添加Null TOP作为网络检查点
5. 使用Display Flag预览结果

---

END

![bg fit](https://i.imgur.com/0YPIcU3.webp)