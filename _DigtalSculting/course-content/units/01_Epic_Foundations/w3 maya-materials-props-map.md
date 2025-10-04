---
marp: true
theme: NFUPPT
class:
---

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




## 4. Maya 风格化渲染-60s 复古办公室低多边形场景

![bg fit left:50% vertical](https://i.imgur.com/cxuHNwR.webp)



参考 [ 🔍 google Google Gemini](@https://gemini.google.com/u/2/app/9badde305ee0410b)


---


**参考案例：** [60's Office Props by G.G.](https://sketchfab.com/3d-models/60s-office-props-dc00ea320cfa4aad90811080270672db "null")

### **一、 课程目标与概述**

本课程旨在通过解构一个高质量的低多边形（Low-Poly）风格化场景，教会学生如何分析其核心艺术特征，并在 Autodesk Maya 中运用 Arnold 渲染器，系统性地复现这种“简化PBR与玩具模型感”的视觉效果。

- **核心理念：** “先拆解，后重建”。
    
- **学习目标：**
    
    1. 准确分析低多边形风格化场景的建模、材质和灯光特征。
        
    2. 掌握在 Maya 中创建哑光、涂漆、皮革和半透明塑料等风格化材质的PBR参数设置。
        
    3. 学会使用简洁的灯光组合（区域光+天光）营造柔和、干净的商业级渲染氛围。
        
    4. 理解如何通过摄像机设置强化场景的“模型感”和“微缩景观感”。
        

---


### **二、 理论篇：艺术风格深度解构**

在开始制作前，我们必须精准地定义目标。该场景的核心风格可以概括为：**“低多边形、复古道具的卡通写实风格”**。

#### **1. 建模特征 (Modeling)**

- **低多边形 (Low-Poly)：** 模型由数量有限的面构成，刻意保留了简洁的几何轮廓。
    
- **硬边与倒角 (Hard Edges & Bevels)：** 大量使用硬边来强调几何体的块状结构。在关键的边缘处有细微的倒角，用于捕捉高光，避免模型过于锐利。
    
- **简化的形态 (Simplified Forms)：** 所有物件都经过了外形简化，省略了复杂的细节，只保留了最具辨识度的核心特征，呈现出玩具或模型般的质感。
    

---


#### **2. 材质与纹理特征 (Material & Texture)**

材质是该风格的灵魂，它遵循“简化PBR”原则，即物理上可信，但视觉上简化。

- **主体质感：哑光/磨砂 (Matte Finish)**
    
    - **主导通道：** 材质主要由 **基础颜色 (Base Color)** 决定，几乎没有复杂的纹理贴图。
        
    - ~~**高光表现：** 高光非常微弱且柔和。这通过 **低镜面反射权重 (Specular Weight)** 和 **高粗糙度 (Specular Roughness)** 来实现。~~
        
- **关键材质分析：**
    
    - **涂漆金属/塑料 (文件柜, 打印机外壳)：**
        
        - **物理属性：** 这是非金属材质（电介质）。光线与外层的油漆或塑料交互，而非内部的金属。
            
        - **PBR设置：** **金属度 (Metalness) 应为 0**。其质感完全由基础颜色、镜面反射和粗糙度控制。
  
---


- **皮革 (椅子)：**
	
	- 相比其他物体，皮革有略强一点的光泽感。
		
	- **PBR设置：** 粗糙度（Roughness）会比塑料稍低，使其高光更收敛一些。
		
- **半透明塑料 (饮水机桶)：**
	
	- **视觉特征：** 不是完全透明，也无明显折射。光线可以在其内部发生散射，呈现柔和的半透明效果。
		
	- **PBR设置：** 不应使用高 **透射 (Transmission)**，而应使用 **次表面散射 (Subsurface Scattering, SSS)** 来模拟光线在蓝色塑料内部的散射效果。



#### **3. 灯光与氛围特征 (Lighting & Atmosphere)**

灯光简洁、明确，旨在清晰地展示模型，并营造柔和、温暖的氛围。

- **主光源 (Key Light)：**
    
    - **类型：** 单一、柔和的定向光源，极有可能是 **区域光 (Area Light)**。
        
    - **特征：** 从斜上方（如左前或右前）照射，投射出方向统一且边缘 **极其柔和** 的阴影。阴影的柔和度是实现“模型感”的关键。
        
- **环境光/补光 (Fill/Ambient Light)：**
    
    - **作用：** 均匀地提亮场景的暗部和阴影区域，确保没有“死黑”的角落。
        
    - **特征：** 反射中没有复杂的环境细节，说明未使用高清的HDRI贴图。更可能是一个纯色的 **天光 (Skydome Light)** 或一个巨大的低强度补光。
        
- **色彩与背景 (Color & Background)：**
    
    - **灯光色温：** 偏中性或微暖，与背景色调相匹配。
        
    - **背景：** 干净的纯色背景（暖棕色），将观众的注意力完全集中在模型上。
        

### **三、 实践篇：Maya (Arnold) 实现最佳路径**

#### **Step 1: 基础设置 (Renderer & Project Setup)**

1. **设置项目：** `File > Set Project...` 确保所有文件管理有序。
    
2. **选择渲染器：** `Windows > Rendering Editors > Render Settings`，在 `Render Using` 下拉菜单中选择 `Arnold Renderer`。
    

#### **Step 2: 材质创建 (Material Creation)**

为不同类型的物体创建对应的 `aiStandardSurface` 材质。以下是核心参数建议：

|   |   |   |   |   |   |   |
|---|---|---|---|---|---|---|
|**材质类型**|**Base Color**|**Metalness**|**Specular Weight**|**Specular Roughness**|**Transmission Weight**|**Subsurface Weight**|
|**通用哑光塑料**|目标颜色|0.0|~0.2|~0.6 - 0.8|0.0|0.0|
|**涂漆金属**|目标颜色 (如深灰)|**0.0**|~0.3|~0.5 - 0.7|0.0|0.0|
|**皮革**|棕色/黑色|0.0|~0.35|~0.4 - 0.5|0.0|0.0|
|**半透明水桶**|浅蓝色|0.0|~0.3|~0.4|**0.0**|**~0.3 - 0.5**|

- **水桶材质补充：** 在 `Subsurface` 卷展栏下，将 `SSS Color` 设置为明亮的蓝色，并适当调整 `Radius`（半径）来控制光线散射的深度。
    

#### **Step 3: 灯光布置 (Lighting Setup)**

1. **创建主光源 (Key Light):**
    
    - `Arnold > Lights > Area Light`。
        
    - 将其放置在场景的斜上方45度角位置。
        
    - **关键步骤：** **显著增大 Area Light 的尺寸**。光源越大，阴影边缘越柔和。
        
    - 调整 `Intensity` (强度) 和 `Exposure` (曝光) 直到获得理想的亮度。
        
2. **创建环境光 (Ambient Light):**
    
    - `Arnold > Lights > Skydome Light`。
        
    - **关键步骤：** 在 `Skydome Light` 的 `Color` 属性上，连接一个 `aiColorCorrect` 节点，或者直接选择一个与背景匹配的 **纯色** (如暖棕色)。**不要使用HDRI贴图**。
        
    - 将 `Intensity` (强度) 设置为一个很低的值（例如 0.1 - 0.3），它的唯一作用是照亮阴影。
        

#### **Step 4: 摄像机与渲染 (Camera & Render Settings)**

1. **设置摄像机 (Camera):**
    
    - 创建一个新的透视摄像机 `Create > Cameras > Camera`。
        
    - **关键步骤：** 为了模拟参考图的弱透视/正交感，选中摄像机，在属性编辑器中找到 `Focal Length` (焦距)，将其设置为一个较高的值，如 **85mm** 或 **100mm**。然后将摄像机拉远，直到构图合适。高焦距会压缩空间，产生“微缩模型”的视觉效果。
        
2. **设置背景颜色 (Background):**
    
    - 打开渲染设置 (`Render Settings`)。
        
    - 在 `Arnold Renderer` 标签页下，找到 `Environment > Background`，创建一个 `aiRaySwitch` 节点。
        
    - 将 `aiRaySwitch` 的 `Camera` 输入端口连接上一个 `aiStandardSurface` 材质，并将该材质的 `Base Color` 设为最终的背景色。
        
3. **最终渲染设置 (Final Render):**
    
    - 在 `Arnold Renderer` 标签页下，提高 `Camera (AA)` 的采样值（例如 4 或 5）以获得平滑的抗锯齿效果。
        
    - 根据需要适当提高 `Specular` 和 `Subsurface` 的采样值，以减少材质噪点。
        

### **四、 课后练习与总结**

- **练习任务：** 从参考场景中挑选 2-3 个不同材质的物件（例如打字机、椅子、文件柜），独立完成建模、材质、灯光和渲染的全过程。
    
- **核心要点回顾：**
    
    - **风格是选择的结果：** 刻意简化的模型、哑光的材质、柔和的光影共同构成了最终风格。
        
    - **PBR不是绝对照片写实：** 理解PBR参数的物理意义，才能灵活地用它来创造非写实的风格化效果。
        
    - **灯光决定氛围：** 简单的灯光设置往往能产生最干净、最高级的结果。柔和的阴影是卡通/模型感的关键。
        
    - **相机也是画笔：** 利用高焦距镜头可以有效地控制画面的透视感，强化艺术风格。