# w8 Maya Arnold渲染基础 - 颜色系统 Color Systerm

我们前面的课程是针对对 60年代的道具的现场里面的模型，使用 arnold 渲染的三点曝光，我们分别对灯光分类分成三个，一个是主光 key light，一个是辅光 fill light。一个是 rim light 轮廓光。

那么这节课是  maya  材质上色并且渲染的一个课程， 我们这节课上的是使用的是 arnold 渲染器对该场景的所有模型定义材质  , 

从一个色卡在我们的课程里面会对我们的一那个目前我们都是没有上颜色或者材质的，所以我们现在会在场景里面制作三个色卡，

我目前的对于这个课程里面，我觉得在第一部分就是在比较靠前的部分，我要让学生们知道就是我们定义材质的时候，不是说每一个颜色、每一个部件的每一个颜色都上一个材质球，而是用材质球统一管理我们的场景，就像我们的灯光一样。我们仅仅用三个颜色如何去科学的管理整个场景？所以我们才智球是要有一个比较科学的定义的方式。我们会对颜色和材质的进行划分，然后我们会按照类似于可以参考 UIUX 产品设计里面的这种颜色的命名规范来管理我们的场景材质。

也因此我提出了一个60%、30%、10%的这种对比比例的一个系统的尝试实验，作为课程的一个。小技巧，但这个技巧是存在于实在实践以及实验阶段的。日后我会找更多的理论进行修正我的这个想法。总的来说是使得同学们能够结合一些。跨领域的方式去学习颜色系统，因为目前在这个场景设计里面，颜色管理我觉得是比较少参考的。为了这一个目标，我希望能够。得到一些专业的建议和批判性的思考。然后来完善我的这个课程，面向 maya 初学者。

以下是目前课程已准备的内容


**创建校准片与物理反照率设定：**

- **指令：** 在场景中放置三块标准校准片：
    
    - **18% 中灰卡：** 创建 aiStandardSurface 材质，将 Base Color 的 RGB 值设为 0.18 (线性)。Specular Weight=0, Metalness=0, Roughness=0.8。
        
    - **高白卡：** 创建 aiStandardSurface 材质，将 Base Color 的 RGB 值设为 0.8。Specular Weight=0, Metalness=0, Roughness=0.8。
        
    - **低黑卡：** 创建 aiStandardSurface 材质，将 Base Color 的 RGB 值设为 0.03。Specular Weight=0, Metalness=0, Roughness=0.8。

![bg fit left:50% vertical](https://i.imgur.com/b3YIzUi.webp)




---

![bg fit left:50% vertical](https://i.imgur.com/wtKvh91.webp)

**创建校准片与物理反照率设定：**

- **指令：** 在场景中放置三块标准校准片：
    
    - **18% 中灰卡：** 创建 aiStandardSurface 材质，将 Base Color 的 RGB 值设为 0.18 (线性)。Specular Weight=0, Metalness=0, Roughness=0.8。
        
    - **高白卡：** 创建 aiStandardSurface 材质，将 Base Color 的 RGB 值设为 0.8。Specular Weight=0, Metalness=0, Roughness=0.8。
        
    - **低黑卡：** 创建 aiStandardSurface 材质，将 Base Color 的 RGB 值设为 0.03。Specular Weight=0, Metalness=0, Roughness=0.8。

## Munsell 颜色系统的理论基础

![bg fit left:50% vertical](https://i.imgur.com/xR5vyJQ.webp)

---



### 结构化配色：结合Munsell明度与Itten对比
 
- **Munsell 明度层级：** 将色彩规划到不同的明度区间。例如：
	
	- **主色(Primary)** 控制在 **中间调区域** (Munsell Value 5-6)。
		
	- **辅色(Secondary)** 在**暗部或亮部** (Value 3-4 或 7-8)，以建立对比。
		
	- **点缀色(Accent)** 则可以拥有**最亮或最暗**的明度，形成视觉焦点。
		
(_**Itten色彩对比：** 用专业的色彩理论指导“点缀色”的选择，而不是随机跳色。例如，使用**互补色对比**或**冷暖对比**来让点缀色更具结构意义。_)


---


## 指导法则
### 60-30-10 配色法则的核心定义

60-30-10 法则是一项设计原则，旨在创造平衡、和谐且视觉上令人愉悦的调色板。  
它通过使用 60%、30% 和 10% 的色彩比例来实现这一目标。  
该法则被广泛应用于室内设计、平面设计和用户界面 (UI) 设计等领域。

---

职场着装：以米色风衣为主体，内搭黑色西装裤套装，蓝色条纹衬衫作为细节点缀，展现专业干练形象。

![bg fit left:50% vertical](https://i.imgur.com/6vYJKQb.webp)

---

晚装搭配：黑色上衣与西装外套作为基底，酒红色半身裙增添优雅，金属金色手包提升整体精致感。

![bg fit left:50% vertical](https://i.imgur.com/gRuqVKa.webp)

---



职场着装：以米色风衣为主体，内搭黑色西装裤套装，蓝色条纹衬衫作为细节点缀，展现专业干练形象。

![bg fit left:50% vertical](https://i.imgur.com/6vYJKQb.webp)

---

浅色模式 UI：以纯白色为背景基调，搭配品牌淡色卡片承载内容，亮色按钮突出交互功能。
![bg fit left:50% vertical](https://i.imgur.com/3PAnB2C.webp)

---
深色模式 UI（Spotify 风格）：黑色主背景奠定氛围，深灰色元素构建层次，亮绿色交互元素提升辨识度。
![bg fit left:50% vertical](https://i.imgur.com/Co428Jl.webp)




---


柔和宁静风客厅：以柔和灰色墙面为主体，搭配白色家具与蓝色软装点缀，营造舒适氛围。
![bg fit left:50% vertical](https://i.imgur.com/zTN3rII.webp)


---

大胆现代风厨房：米色橱柜作为基底，黑色台面提升质感，金色五金件增添精致细节。
![bg fit left:50% vertical](https://i.imgur.com/vPbEc8p.webp)


---

纹理延伸应用：大面积花纹为视觉焦点，小面积花纹呼应层次，单一质感元素平衡整体。

![bg fit left:50% vertical](https://i.imgur.com/m2oWiwA.webp)



---


## 拓展法则
### Johannes Itten (约翰内斯·伊顿) 色彩对比理论

约翰内斯·伊顿（Johannes Itten）是最早定义并确立成功色彩组合策略的学者之一。
他通过研究，提出了七种利用色相对比属性进行色彩协调的方法，即七种。 这些色彩对比会根据各自信度的强度产生其他变化；具体而言，可通过浅（light）、中（moderate）、深（dark）三种明度（value）获得对比效果。
[ 🐦 twitter Johannes Itten's Color Contrasts](@https://www.worqx.com/color/itten.htm#:~:text=Johannes%20Itten%20was%20one%20of,the%20juxtaposition%20of%20different%20hues.)

---

### 1 饱和度对比（The Contrast of Saturation）
饱和度对比由浅色度与深色度的并置，及其相对饱和度共同构成。
![bg fit left:50% vertical](https://i.imgur.com/Mo2xTDr.webp)


---


### 2 明暗对比（The Contrast of Light and Dark）
明暗对比由浅色度与深色度的并置构成。
这种对比形式可应用于单色（monochromatic）构图中。
![bg fit left:50% vertical](https://i.imgur.com/L3B2ZWH.webp)

---

### 3 面积对比（The Contrast of Extension）
面积对比也被称为比例对比（The Contrast of Proportion）。
其核心是根据色彩的视觉重量（visual weight），为色彩分配成比例的区域大小（field sizes），通过这种分配形成对比。

![bg fit left:50% vertical](https://i.imgur.com/pHxtwGt.webp)


---


### 4 补色对比（The Contrast of Complements）
补色对比由色轮（color wheel）上的对立色，或视觉感知（perceptual）上的对立色并置构成。

![bg fit left:50% vertical](https://i.imgur.com/lGIm6Jl.webp)


---


### 5 同时对比/視場對比（Simultaneous Contrast）
同时对比在色彩边界（boundaries between colors）产生视觉上的振动（perceptually vibrate）时形成。
利用这种对比可以实现一些有趣的视觉错觉（illusions）。
![bg fit left:50% vertical](https://i.imgur.com/AkUxkl3.webp)



---


### 6 色相对比（The Contrast of Hue）
色相对比由不同色相（different hues）的并置构成。
色相在色轮上的距离越远，形成的对比效果就越强。

![bg fit left:50% vertical](https://i.imgur.com/0s1O2vX.webp)




---


### 7 原色对比（The Contrast of Hue - Primaries）
原色对比由原色（primary hues）的并置构成。

![bg fit left:50% vertical](https://i.imgur.com/R7WffPE.webp)

---


### 8 冷暖对比（The Contrast of Warm and Cool）
冷暖对比由被认定为“暖色调”（warm）或“冷色调”（cool）的色相并置构成。

![bg fit left:50% vertical](https://i.imgur.com/NBq1m7d.webp)


