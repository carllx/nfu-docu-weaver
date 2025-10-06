---
marp: true
theme: NFUPPT
class:
---
.marpit
[ 🔍 google Does Arnold material support games? For example, uploading to Sketchfab Search](@https://www.google.com/search?q=Does+Arnold+material+support+games%3F+For+example%2C+uploading+to+Sketchfab&gs_lcrp=EgZjaHJvbWUyBggAEEUYOdIBCTQxODMzajBqN6gCCLACAfEFhEb-049EAek&sourceid=chrome&ie=UTF-8&udm=50&fbs=AIIjpHxU7SXXniUZfeShr2fp4giZud1z6kQpMfoEdCJxnpm_3W-pLdZZVzNY_L9_ftx08kwv-_tUbRt8pOUS8_MjaceHuSAD6YvWZ0rfFzwmtmaBgLepZn2IJkVH-w3cPU5sPVz9l1Pp06apNShUnFfpGUJOF8p91U6HxH3ukND0OVTTVy0CGuHNdViLZqynGb0mLSRGeGVO46qnJ_2yk3F0uV6R6BW9rQ&ved=2ahUKEwi0p6Ovp-uPAxXps1YBHQV4BpcQ0NsOegQISxAA&aep=10&ntc=1&mtid=gbLQaNqXHe7e2roPtOCf2AI&mstk=AUtExfBz31nTJq36O9ATTdZ6W2Kyb2ndLIFGShm-VE-PmZP7uhEXR1DlHCyJMDqNBv5lqFwOdPX7ig1PyEn3ghVVD0y-UIh0DOectokYECDF3WaTLtUIUBXrh5PHgu6f2RSE4fESX1pHMxTwK5n8EyAcjgPS2gEbepa-9ZhKWxwY-GIh9x4WMnJo3DNBlKa4ypvVWB9heI0kVcJN6MveJ8fpIcP0Vxi7Ppltf5Nz4K91_5W3NAEprtknoXaxztt2vOw3cSnALJzltQv2LZG5d7kgUDDMwMpBF-Mnaj_2-eBlEHKepdmXD4KKYgXBMptTAsnIG_2vG8uPwQPiaQ&csuir=1)
[ 🐧 qq w3 maya-materials-props-map](@https://docs.qq.com/mind/DSUNhUWNRT2FTTEdF?no_promotion=1&subId=BB08J2&mode=mind)

---


## **模块一：核心概念 - “全局设置” vs “像素蓝图”**

模型只是一个看不见的Voxel(素体);

材质 (Material)
- 使我们能够看得见它 _(Material + Light)_。
- 感觉到 “它是什么做的”。


---


### **1. 材质：模型的“属性控制面板”**

  **材质控制面板**，Hypershade 窗口: 
 `Window（窗口）> Rendering Editors（渲染编辑器）> Hypershade（超级着色器）`

**快速查看**
Attribute Editor（属性编辑器）：选中材质后，按快捷键 `Ctrl+A（Windows）/ Cmd+A（Mac）`
![bg fit left:50% vertical](https://i.imgur.com/12bZmoa.webp)


---


以`aiStandardSurface` _(常用  Arnold标准表面材质)_ 为例，它上
面有几个核心的“旋钮”：
- `Base Color`：物体是什么颜色。
- `Roughness`：糙度, 光线漫反射，像磨砂/ 光线镜面反射，像镜子）。
- `Metallic`：金属度, 0=代表绝缘体, 如塑料、木头），1=代表导体,金属


---


### 2. 全局的材质属性
我们来操作这个“控制面板”把一个新建的材质赋予给一个球体。
整个球体，每一个点都严格遵守这三个 “常量” 指令，变成了一个整体统一的、红色的、表面粗糙的塑料球。


![bg fit left:50% vertical](https://i.imgur.com/v18Yeml.webp)


---

**操作步骤：**

1.**准备场景：**
    
- 在Maya场景中，创建一个多边形球体 (`Create > Polygon Primitives > Sphere`)。
- 选中球体，按 `3` 键，使其显示为平滑预览模式。
- 为了能看到渲染效果，创建一个灯光。最简单的方式是：`Arnold > Lights > Skydome Light`。

_[ 🔍 google Google Gemini](https://gemini.google.com/u/2/app/46ad720364748d2b)_


---


2.**创建并赋予新材质：**

- 选中球体模型。
	
- 按住鼠标右键，在弹出的热键菜单中选择 `Assign New Material` (赋予新材质)。
	
- 在弹出的窗口中，点击左侧的 `Arnold` 分类，然后从右侧选择 `aiStandardSurface`。

![bg fit left:50% vertical](https://i.imgur.com/p7qnXHC.webp)
![bg fit left:50% vertical](https://i.imgur.com/4lqDhhf.webp)



---


3.**调节“全局指令”参数：**

- 选中球体，按 `Ctrl + A` 打开 `Attribute Editor` (属性编辑器)。
- 找到名为 `aiStandardSurface1` 的选项卡。为了规范，我们可以把它重命名为 `M_CandyPaint_Red`。
-  `Base Color` 调成 **红色**。
-  `Roughness` 的旋钮拧到 **0.8**
-  `Metallic` 的旋钮拧到 **0** (代表非金属)

![bg fit left:40% vertical](https://i.imgur.com/FWihxgA.webp)

---


3. **渲染结果: 通体均匀的、带有高光的红色小球：**
    
    - 打开Arnold的渲染窗口 (`Arnold > Open Arnold RenderView`)。
        
    - 点击 `RenderView` 窗口中的红色播放按钮 (▶) 开始渲染。


![bg fit left:50% vertical](https://i.imgur.com/v18Yeml.webp)


---


![bg fit left:50% vertical](https://i.imgur.com/FWihxgA.webp)

#### > **核心理解1**：
> 材质的每个属性都是一个使用“常量” 的“全局属性” 。
> 即: 你设定的一个值，会毫无差别(左右上下, 每个角落)地应用到模型上。
*(这里可以配一张纯色的粗糙塑料球渲染图)*



---


### 3. 不规则材质属性


#### 问题来了：

Q:
> 真实世界很少有东西是完全均匀的。
> es. 一个用旧了物体都有使用痕迹锈迹而粗糙。
> “~~全局指令”就没法实现了~~。
> 如何定义模型：“你表面 **A点** 的粗糙度是0.2，但 **B点** 的粗-糙度是0.9。”呢？


---


A: 
> 答案就是使用一张 **纹理/贴图 (Texture)**。

![bg fit left:50% vertical](https://i.imgur.com/U81n7ql.webp)



---


#### **核心理解2**：
> Texture(纹理)，本质上是一张 “属性参数的图”。
这张图上的每一个像素，都存储着一个数值，可以用来控制材质面板上的一个“旋钮”。
![bg fit left:50% vertical](https://i.imgur.com/Kl7kWCo.webp)



---

#### **我们来做一个实验：**
1. 这次我们不直接去拧 `Roughness` 的旋钮，而是在它的 **输入接口** 上，连接一张黑白灰的斑点贴图。
![bg fit left:50% vertical](https://i.imgur.com/Kl7kWCo.webp)


---


- 2. 这张贴图是一张2D图片，上面的像素点有不同的灰度值。
在计算机里，这些值通常用 0 到 255 的数字表示：
    - **纯黑 (Pure Black)** = 数值 0
    - **50% 灰色 (Gray)** = 数值 128
    - **纯白 (Pure White)** = 数值 255
![bg fit left:50% vertical](https://i.imgur.com/Kl7kWCo.webp)

---


3. Arnold渲染器会自动进行一个“翻译”：它把贴图上像素的 0-255 数值，映射到 `Roughness` 属性的 0%-100% (或者说0.0-1.0) 的控制范围上。
- **结果是什么？**
![bg fit left:50% vertical](https://i.imgur.com/Kl7kWCo.webp)

---

#### PBR 素材下载

1. AmbientCG：原名CC0 Textures，以庞大且持续更新的免费PBR素材、HDRIs和模型库闻名。链接：https://ambientcg.com/
2. Quixel Megascans：由Epic Games所有，行业领先高分辨率扫描资产库，Unreal Engine用户免费，游戏开发领域受欢迎。链接：https://quixel.com/megascans/
3. Poliigon：主要是订阅服务，有免费区，提供少量可商业使用的高质量PBR纹理。链接：https://www.poliigon.com/free 

---

Textures.com：领域先行者，有庞大数据库，部分付费，每天提供免费积分下载。链接：https://www.textures.com/

![bg fit left:50% vertical](https://i.imgur.com/I2vwDBG.webp)




---

Poly Haven：社区庞大，资源库受推崇，提供100%免费CC0许可资产。链接：https://polyhaven.com/textures

![bg fit left:50% vertical](https://i.imgur.com/dKoiwJq.webp)

---
#### 设置 贴图

- Color
- Roughness
- Metallic
- Normal

![bg fit left:50% vertical](https://i.imgur.com/ZRIWDns.webp)




---

#### 引用 Normal 到 aiStandardSurface

搜索 normal , 选择 `aiNormalMap1`
![bg fit left:50% vertical](https://i.imgur.com/gSvuxY3.webp)


---

搜索 `file`, 将 normal png 贴图 `通过aiNormalMap1` 传递到 `aiStandardSurface` 的 normal 的输入
![bg fit left:50% vertical](https://i.imgur.com/XSSLL9w.webp)

---

查看渲染效果

![bg fit left:50% vertical](https://i.imgur.com/5h8eTDm.webp)


---


#### **本模块小结**
- **材质 (Material)** 是一个属性**控制面板**，定义了物体有哪些可调节的物理属性。
- **不使用纹理**，意味着你给每个属性下达一个**全局属性 (常量)**，整个物体表现均一。
- **使用纹理 (贴图)**，意味着你为某个属性提供了一张精密的**属性参数分布图**，让物体的表面根据蓝图的指示，呈现出千变万化的细节。



