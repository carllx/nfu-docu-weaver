# TouchDesigner PBR材质入门教程

本课作为渲染品质参考标准

![bg fit left:50% vertical](https://i.imgur.com/zZS0n0F.webp)

(Source: [youtube.com:  (21) Getting Started with TouchDesigner PBRs - TouchDesigner Tutorial 198 - YouTube](https://youtu.be/t37FD0fyIEA?t=2))


---

## 项目介绍
TouchDesigner 支持多种模型文件格式，如 `.usd`、`.fbx`、`.obj` 等，并提供了完整的渲染流程。

![bg fit left:50% vertical](https://i.imgur.com/qvap5nA.webp)


---


## 1.创建 Lighting

### 1.1 三点照明体系(案例2)

- 用 LightCOMP实现三点照明

![bg fit left:50% vertical](https://i.imgur.com/l46aXcA.webp)



---


### 1.2 配置 Environment Light 

环境光组件（EnvironmentLightCOMP）

- 基于图像的照明（IBL, Image Based Lighting）
- 用于增强材质真实感.
![bg fit left:50% vertical](https://i.imgur.com/0HHZmnA.webp)
![bg fit left:50% vertical](https://i.imgur.com/5fwFhD7.webp)



---


### 1.3 HDR材质 下载


Sources: https://polyhaven.com/a/brown_photostudio_02
![bg fit left:50% vertical](https://i.imgur.com/hvR7kMH.webp)
![bg fit left:50% vertical](https://i.imgur.com/7i2h5dV.webp)


---


- 使用 `Environment Light` 环境光照亮场景

![bg fit left:50% vertical](https://i.imgur.com/FdPCyyi.webp)

---


注意关于**阴影投射**: 
- **阴影投射**通过其他光组件`LightCOMP`实现
- 以模型模拟阴影

---

## 2 创建模拟SKY 

![bg fit left:50% vertical](https://i.imgur.com/GRaM68x.webp)

sphereSOP, Geo模拟场景
`constantMAT` , 卡通/自发光不受光源影响
`blurTOP`处理, 简单模拟景深

---




## 3 创建 Sphere 模型(PBR材质参数)

1. `SphereSOP` →  `GeoCOMP` 
2. :`pbrMAT` (Materials) → `GeoCOMP`
3. `CamCOMP`
4. `RenderTOP`

![bg fit left:50% vertical](https://i.imgur.com/eb6aJAK.webp)
![bg fit left:50% vertical](https://i.imgur.com/ovZrwtE.webp)

---
### PBR材质参数(物理特性交互)

- `BaseColor`, 固有色(Albedo/Diffuse 等同性)
- `Specular`, 高光反射
- `Metallic`, 导电性材质特性, 金属度与反射关系,  全金属镜面效果
- `Roughness`, 粗糙度与光泽控制, 表面磨砂模糊效果
- `AmbientOcclusion`, 环境光遮蔽 (AO), 提升材质深度


![bg fit left:50% vertical](https://i.imgur.com/NElxhBU.webp)

![bg fit left:50% vertical](https://i.imgur.com/HtzJM3D.webp)



---



## 4.1 导入 Car 模型



在 sketchfab 下载, 导入汽车模型 

![bg fit left:50% vertical](https://i.imgur.com/tipNlpm.webp)

![bg fit left:50% vertical](https://i.imgur.com/sHfh2oW.webp)



---

- 规范模型 Size  
- USD 内部统一归1 处理 
![bg fit left:50% vertical](https://i.imgur.com/taEJFMU.webp)
![bg fit left:50% vertical](https://i.imgur.com/U3PDsjy.webp)

---


## 4.2 PBR 实践

![bg fit left:50% vertical](https://i.imgur.com/Es7uc0B.webp)

---


![bg fit left:50% vertical](https://i.imgur.com/MEOZSHx.webp)

---


![bg fit left:50% vertical](https://i.imgur.com/6wTGYcB.webp)


---

## 5.1 Instances (Geo )什么是实例化？(拼装地面)

- **定义**：Geo 的 instance（实例化）是创建几何图形硬件实例的技术。
- **特点**：
  - 每个实例拥有唯一的 **实例 ID**。
  - 属性可通过 **统一值** 传递到 Shader 材质着色器中。
  - 支持 GLSL 个性化定制和高效渲染。

![bg fit left:50% vertical](https://i.imgur.com/0auavaX.webp)

(Source: [derivative.ca: TouchDesigner | Instancing Examples | Derivative](https://derivative.ca/community-post/asset/touchdesigner-instancing-examples))

---

### 使用 Geo 实例化的好处

- **高效渲染**：通过批量处理减少渲染开销。
- **个性化定制**：支持对每个实例的属性进行独立控制。
- **灵活性**：适用于多种场景，如植被、建筑物等。
![bg fit left:50% vertical](https://i.imgur.com/akWNtUm.webp)


![bg fit left:50% vertical](https://i.imgur.com/eI5qYRD.webp)


---

### 如何使用 Geo 实例化？

1. **开启实例化功能**：
   - 在 **GeoCOMP** 中启用 **instancing**。

2. **设置实例数量模式**：
   - **手动模式**：手动指定实例数量。
   - **自动模式**：根据 **CHOP 长度** 或 **DAT 行数** 自动计算。

3. **配置实例属性**：
   - **平移、旋转、缩放**：为每个实例选择特定操作器。
   - **轴心**：设置实例的旋转中心。
   - **纹理模式**：指定实例纹理和纹理索引。

![bg fit left:50% vertical](https://i.imgur.com/LeJaztp.webp)


---
#### 设置Ramp 背景
![bg fit left:50% vertical](https://i.imgur.com/HkRcHf5.webp)


---



### PBR材质贴图

![bg fit left:50% vertical](https://i.imgur.com/Z8kop82.webp)

材质贴图应用

颜色贴图 → Base Color
金属度贴图 → Metallic
粗糙度贴图 → Roughness
法线贴图 →  Normal

![](https://i.imgur.com/mDYzvXh.webp)


---

## 5.2 导入 Floor 模型

下载并导入地面模型

![|200](https://media.sketchfab.com/models/4e85c89672834125998990ec4688e9cf/thumbnails/2041542844484b49a3f45c323c1c7855/28af9a7952374b2c84ebcdd89e4766b2.jpeg)
(Source: [sketchfab.com: Bathroom Floor - Download Free 3D model by RubaQewar (@RubaQewar) [4e85c89]](https://sketchfab.com/3d-models/bathroom-floor-4e85c89672834125998990ec4688e9cf))
![bg fit left:50% vertical](https://i.imgur.com/BeCrRmv.webp)
![bg fit left:50% vertical](https://i.imgur.com/vPyKk1U.webp)

![bg fit left:50% vertical](https://i.imgur.com/J2Cb9I6.webp)

---

### 统一模型尺寸单位




![bg fit left:50% vertical](https://i.imgur.com/wIIR57e.webp)

---

### 用 Geo Instance 拓展 USD 地面模型

方法1: 
实例化的GEO 位于: 
 `/ project1 / Bathroom_Floor / bathroomFloor_lambert2_0 / bathroomFloor_lambert2_1`



---

1. 设置迭代形式 (建议使用slider 控制元素缩放)
![bg fit left:50% vertical](https://i.imgur.com/gsGxdUg.webp)

![bg fit left:50% vertical](https://i.imgur.com/q23dZsN.webp)

---


1. 缩放实例模型 
![bg fit left:50% vertical](https://i.imgur.com/AKtNjbi.webp)


---

方法2: 

或重建一个GEO
注意引用 USD 文件的 Material 材质
```python
parent.USD.op('Materials/lambert2')
```

![bg fit left:50% vertical](https://i.imgur.com/jY1ExNw.webp)




---


### 高级资源整合

Ambient CG/纹理库应用
免费PBR资源特征
![bg fit left:50% vertical](https://i.imgur.com/rYFVLLj.webp)


---



## 6 Post Rendering
### Bloom后期处理增强

后期辉光特效 (Bloom)
光晕参数调试


![bg fit left:50% vertical](https://i.imgur.com/d5GAYXY.webp)



---

### LightCOMP 模拟阴影

注意关于**阴影投射**: 
- **阴影投射**通过其他光组件`LightCOMP`实现
- 以模型模拟阴影