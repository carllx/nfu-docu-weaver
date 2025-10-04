
## 5. 应用材质

介绍 Unity中材质的基本概念、创建和组织方法,以及材质和纹理属性的说明。

>克隆练习项目文件::
> `Ex_Files_Unity_2023_EssT_1/Ex_Files_Unity_2023_EssT_1`


> Material package: 
>`Ex_Files_Unity_2023_EssT_5/Resources/materials.unitypackage`


---

#### 1.打开练习文件

- 关闭 Unity Editor, 回到 Hub
- 打开(Reveal) Project 文件夹, 
- 用练习文件覆盖Project 文件夹. 
> 练习项目文件: `Ex_Files_Unity_2023_EssT_1/Ex_Files_Unity_2023_EssT_1` 

---

#### 2.导入材质包 (Material Package) 
> Ex_Files_Unity_2023_EssT_5/Resources/materials.unitypackage


- 进入 `Assets > Import Package > Custom Package`
- 导入`exercise_files > resources > materials Unity.package`

![](https://tingwu.aliyun.com/api/editor/get/v2/524379/0/7d8de97ca81c4f37abbf0b59a5f9719a/0e09fb5b67e54123ac1eb65375eb3230.png)

---
### 05-01 - 材质简介

---

构成材质(Material)的基本元素:
- 着色器 (Shader)
- 纹理文件 (Texture)
- 属性参数

---


着色器(Shader): 

Shader 是一种计算机程序,用于在 3D 渲染过程中计算光照、阴影和颜色。
定义了物体表面如何与光线交互的程序。(**整体信息**)
![](https://tingwu.aliyun.com/api/editor/get/v2/524379/0/c95347c793724f17b4955ce127d6497f/fe2f89f165bf4d758d8ec65433d21771.png)


---

Unity Shader Graph 创建一个交互的shader 
[[Shader Graph -  Unity 中创建交互式 Vertex Displacement]]

![](https://imgur.com/y29r2gr.gif)


---


纹理(Texture):

图像文件,用于为 Materials 控制**细节信息**,如颜色、凹凸等。(Substance Painter)

![](https://tingwu.aliyun.com/api/editor/get/v2/524379/0/085d4887f2be49738c1b0924ef5f82b8/a595312b4719450bb643bca139ba2e8e.png)

---

材质(Materials): 

通常引用`Shader`和`Texture`, 以及相关`属性值` 来定义物体的最终渲染效果。
![](https://tingwu.aliyun.com/api/editor/get/v2/524379/0/0349f86d9f844f84ac6e91f30f6afbc3/486888d7db804772a04470c74f6125d8.png)

---

### 05-02 - 创建和组织新材质

TLDR: 演示了如何在Unity中创建新材质,选择合适的着色器,并简要介绍了不同类型着色器的用途。


---

### 构建 Materials 

• 📁 如果还没有,创建一个 Materials 文件夹
• 🖱️ 在 Materials 文件夹中右击,创建一个新材质并 Rename  "TestMat"

---

• 🔍 探索典型的着色器(shaders)及其效果
- `Particles > ...`
- `HDRP > Eyes`


---
### Autodesk Interactive 介绍


🎨 选择 `HDRP / Autodesk interactive` 着色器

Autodesk Interactive 着色器是一种用于3D建模和渲染软件中的材质着色器。它的主要作用包括:

1. 在Autodesk的多个软件中保持一致的材质外观。(如Maya、3dsMax, Blender等)

2. PBR支持 - 遵循基于物理的渲染(Physically Based Rendering)原则,产生更真实的视觉效果。


---

### 05-03 - 材质和纹理属性

---

材质编辑器添加纹理方法

• 📁 `Assets/Materials/Texture/steel glossy` 为例, 将纹理文件导入到项目的纹理文件夹中。

• 将base color map 拖进材质的base color设置中. `TestMat > Exposed Properties > base color`。

• 勾选启用。


---


Sketchfab, 了解各种贴图的作用及调整方法。

**Base color 基础颜色贴图:** 决定材质基本颜色,拖放到Base Color栏。
**Metallic map 金属度贴图** : 控制反射度(有时是Specular map)。
**Roughness 粗糙度贴图** : 调节表面光滑度,值越高越粗糙,可用贴图或滑块调整。
**Normal map(法线贴图)**: 增加几何细节,不改变实际几何形状。
**Emission map发光贴图**: 用于发光物体,添加光源颜色。
**AO map 环境光遮蔽贴图** : 增加真实感,定义间接光照。
**UVoffset (UV 偏移设置):** 解决贴图显示问题,调整缩放和位置。

---

![PBR material|200](https://media.sketchfab.com/models/4b4c92c011bf4a2390cb50d44b8f561c/thumbnails/ca423af7658a4271b5f82f4a603e71b3/13322c5c78154141a1c9c2a5a1383795.jpeg)
(Source:  [sketchfab.com: William - 3D model by DarkNik (@DarkNik) [4b4c92c]](https://sketchfab.com/3d-models/william-4b4c92c011bf4a2390cb50d44b8f561c))