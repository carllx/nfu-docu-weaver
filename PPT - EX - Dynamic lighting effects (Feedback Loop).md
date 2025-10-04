
[[Source - TouchDesigner全新交互设计及开发平台-318]] 2.2 Feedback Loop 反馈循环

---
## 实验1：Feedback Loop 反馈循环
### Feedback TOP(反馈循环)是

* 无限循环的“复印”过程。
* 创造**拖尾、缓动、无限循环**等视觉效果的核心。

![bg fit left:50% vertical](https://i.imgur.com/aWj4T1e.webp)

![bg fit left:50% vertical](https://i.imgur.com/u3c9Xd4.webp) 



---

ES:  类似烟雾、水流等效果的基础（粒子系统 + Feedback Loop）。

![bg fit left:50% vertical](https://i.imgur.com/XI7ub99.webp)

(Source: [youtube.com: (7) Generative Art with TouchDesigner: Feedback - TouchDesigner Tutorial 186 - YouTube](https://youtu.be/0o_NoWTi6oo?t=6))

![|200](https://i.ytimg.com/vi/3pAcTayMloo/hqdefault.jpg)
(Source: [youtube.com: (7) melty UV in Touchdesigner - YouTube](https://youtu.be/3pAcTayMloo?t=1))

---
### 1.导入素材 & 旋转

 - 用 `Movie File In TOP` 导入一张图片（或者视频）。
- 用 `Transform TOP` 让图片旋转起来。 
	- `Rotate` 参数：使用表达式 `absTime.frame` (动态旋转)。
		- `absTime.frame` 的值表示工程文件到当下所经过的帧数，
		* `absTime.seconds` 的值表示工程文件到当下所经过的秒数。


![images/1007f7dbffe0cd4b987318069f9eda4c055a2650e66360d0f64cbb886be9f0bb.jpg](https://i.imgur.com/RZN1zfj.webp) 

---

### 2.AChrome

- 用 `Monochrome TOP` 把图片变成黑白的。
![bg fit left:50% vertical](https://i.imgur.com/V2pLRmN.webp)

---

### 3.提取差异

`Difference TOP` 
* 颜色相同的部分显示为黑色
- 颜色不同的区域会显示白色；
* 颜色差距越大，输出的白色区域越亮。

![bg fit left:50% vertical](https://i.imgur.com/xWNY8Fl.webp)


---


* 方法1`Difference TOP` 的 `Rotate` 偏移参数设置为 3。
* 方法2 输入两个素材, 在其中一个素材es: `Transform TOP2` 的`Rotation` 增加延迟

![bg fit left:50% vertical](https://i.imgur.com/Cxmh4dc.webp) 

![bg fit left:50% vertical](https://i.imgur.com/B0KSO1j.webp)


---


### 4.开始“复印”(Feedback TOP)


**概括理解 Feedback Loop**
循环“复印 -> 储存/叠加”的过程

```
一般的处理方式
原料 -> 特殊加工 -> 结果

Feedback Loop 处理方式: 
原料 -> 特殊加工 -> 结果(参数说明叠加方式)
```

![bg fit left:50% vertical](https://i.imgur.com/fCsjBDj.webp)

---

Feedback Loop 常用搭配:

1. **`Composite TOP`** 的  `Operation`参数设置为 Add (叠加模式, 图像一直积累在结果的画布上)。

2. **`Feedback TOP`** : 的`Target TOP` 参数指向 `Composite TOP` (建立反馈连接)


![bg fit left:50% vertical](https://i.imgur.com/IdFnJl3.webp)



---



### 5.让“复印件”的特殊加工

在 `Feedback` 循环里加入 `Level TOP`，
 - `Opacity`(不透明度): 调低一点点。

```
每次“复印”的图像都会比上一次更透明，就能做出拖尾的效果。
```


---

加入 `Blur TOP
 - `Filter Size`：模糊的程度。数值越大，图像越模糊。
 - `Sample Step`：模糊拉伸的程度。

```
每次“复印”的图像更模糊一点，拖尾效果会更柔和。
```

---


回顾Feedback

![bg fit left:50% vertical](https://i.imgur.com/fCsjBDj.webp)

![bg fit left:50% vertical](https://i.imgur.com/91ddafi.webp)

---

### 6.上色(霓虹灯效果)

 - 用 `Lookup TOP` 和 `Ramp TOP` 给图像上色。
 - `Ramp TOP` 可以创建漂亮的渐变色.
 - `Lookup TOP` 则根据图像的亮度把渐变色“贴”上去。


![bg fit left:50% vertical](https://i.imgur.com/6qN3Ua0.webp)
![bg fit left:50% vertical](https://i.imgur.com/Yxsrsjk.webp)

---

[[More Than Meets the Eye - Maurizio Nannucci 1980]]

![bg fit left:50% vertical](https://i.imgur.com/3zog4fn.webp)

《More than Meets the Eye》是意大利艺术家 Maurizio Nannucci 创作的一件引人注目的霓虹灯装置作品。


---


## 实验2

[[PPT - EX - Dynamic lighting effects (Feedback Loop)_2_Video]]
Difference TOP 通过视频帧率检测差异获取信号
不再使用Transform 动画制作动效, 而是使用视频中的活动的像素

---

### 1. 视频素材准备

- 使用 `Movie File In TOP` 导入动态视频
- 通过 `Video Device In TOP` 连接实时摄像头（可选）
- 设置分辨率匹配源素材（建议1080p或4K）

---


### 2. 创建视频流缓存
1. 添加 `Cache TOP` 节点
2. 配置缓存参数：
- **Cache Size**：30（保留最近30帧）
- ~~**Index Method**：Frame Offset（帧偏移模式）~~

---
3. 创建两条视频流：
- `Cache Select1`, `Index` = 0（实时帧）
- `Cache Select2`, `Index` = -10（10帧前历史）

![bg fit left:50% vertical](https://i.imgur.com/cGamyJZ.webp)

---


```python
# TD表达式实现动态偏移
op('cacheselect1').par.index = 0
op('cacheselect2').par.index = -absTime.frame % 30
```

---

### 3. 动态差异检测

1. 连接 `Difference TOP `：
   - Input0 → `Cache Select1`
   - Input1 → `Cache Select2`

![bg fit left:50% vertical](https://i.imgur.com/Nxfhtz2.webp)

---

### 4. 构建视频反馈系统(闪烁效果)

1. 创建 `Composite TOP` 设置为 Add 模式
2. 添加 `Feedback TOP` 连接至 Composite
3. 使用 `Level TOP` 提亮差异区域：Post > Opacity ：0.9
4. 使用`Blur` , Filter Size: 5
![bg fit left:50% vertical](https://i.imgur.com/lsmlyvh.webp)


---

### 5. 合成最终效果

将实时视频流与反馈特效结合，创造动态叠影

1. 创建 `Composite TOP2` 作为最终输出节点
2. 参数设置：
   - **Background** → `cacheselect1`（原始视频流）
   - **Operation** → Add（叠加模式）
3. 连接反馈特效到 `Composite TOP2` 的**Foreground**输入
   - `Difference TOP` → `Level TOP` → `Blur TOP` → `Composite TOP2`


![](https://i.imgur.com/7CtMrnX.webp)

---

Blending modes 

![bg fit left:50% vertical](https://i.imgur.com/EAbmTVd.webp)
![bg fit left:50% vertical](https://i.imgur.com/TrGQg8n.webp)

(Source: [adobe.com: Blending modes in Adobe Photoshop](https://helpx.adobe.com/photoshop/using/blending-modes.html))

---


Wolla!!
![bg fit left:50% vertical](https://i.imgur.com/LQsqIxf.webp)


---


### 6. 动态参数优化（进阶）

```python
# 添加随机动态变化
op('blur1').par.filter = absTime.seconds % 5 + 2  # 模糊强度2-7之间循环
op('level1').par.opacity = abs(math.sin(absTime.seconds)) * 0.5 + 0.3  # 透明度波动
```


---




