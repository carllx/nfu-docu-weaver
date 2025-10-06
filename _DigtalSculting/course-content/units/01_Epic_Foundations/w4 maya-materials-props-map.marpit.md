---
marp: true
theme: NFUPPT
class:
---

# 4. Maya Low-Poly 风格化渲 染-60s 古办公室

![bg fit left:50% vertical](https://i.imgur.com/cxuHNwR.webp)



参考 [ 🔍 google Google Gemini](@https://gemini.google.com/u/2/app/9badde305ee0410b)
**参考案例：** [60's Office Props by G.G.](https://sketchfab.com/3d-models/60s-office-props-dc00ea320cfa4aad90811080270672db "null")


---



## 一、 课程目标与概述

- 先拆解后重建
    
- 简化PBR
    
- 玩具模型感
    
- Arnold渲染器


![bg fit left:50% vertical](https://i.imgur.com/CofTco6.webp)

<!-- [Opener]: 大家好，欢迎来到今天的课程。在我们开始动手制作之前，我们首先要思考一个问题：一个看似简单的Low-Poly场景，它的魅力究竟从何而来？

[Expansion]:

- 先拆解后重建: 这是我们整个课程的核心方法论。我们不是盲目模仿，而是先成为分析师，再去当艺术家。
    
- 简化PBR: 我们会用到PBR（基于物理的渲染）的工具，但目标不是照片级真实，而是创造一种可信但又风格化的质感。
    
- 玩具模型感: 这是我们追求的最终视觉目标——一种精致的、微缩的、让人想拿在手里的感觉。
    
- Arnold渲染器: 这是我们实现这一切的强大工具，我们会深入了解它如何帮助我们达成目标。
    

[V-Prompt]: A minimalist line drawing illustration on a white background of a disassembled vintage toy car, with its parts neatly arranged, conveying a sense of analytical precision and creative potential. square aspect ratio. -->
---

### 通过这门课，你将解锁哪些核心技能？

- **风格特征分析**
    
- 用 PBR 着色模型
    
- 灯光组合创造 **氛围**
    
- 用摄像机强化**形式感**
    
![bg fit left:50% vertical](https://i.imgur.com/5IkNsdG.webp)

<!-- [Opener]: 明确了我们的大目标后，具体来说，这趟旅程会带我们抵达哪些站点呢？

[Expansion]:

- 风格特征分析: 你将学会如何用专业的眼光去看待一个作品，能准确说出它的建模、材质和灯光好在哪里。
    
- 风格化材质创建: 你会掌握在Maya中，用PBR参数调出哑光、涂漆、皮革甚至半透明塑料这些非写实质感的方法。
    
- 商业级布光: 我们将学习如何用最简单的灯光组合，创造出柔和、干净、能突出主体的高级感光照。
    
- 强化模型感: 通过调整摄像机，让你的场景看起来更像一个精致的微缩景观。
    

[V-Prompt]: A line drawing illustration on a white background, depicting four interconnected icons: a magnifying glass over a 3D cube, a painter's palette, a studio light, and a camera lens, symbolizing the four learning objectives. The style is clean and informative. square aspect ratio. -->


---


### **二、 理论篇：艺术风格深度解构**

在开始制作前，我们必须精准地定义目标。该场景的核心风格可以概括为：**“低多边形、复古道具的卡通写实风格”**。

#### **1. 建模特征 (Modeling)**

- **低多边形 (Low-Poly)：** 模型由数量有限的面构成，刻意保留了简洁的几何轮廓。大量使用硬边来强调几何体的块状结构。省略了复杂的细节，只**保留了最具辨识度的核心**特征，


    

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