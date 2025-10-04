# TouchDesigner 三维渲染与交互设计

[[Source - TouchDesigner全新交互设计及开发平台-318]]

![|200](https://i.ytimg.com/vi/JfBNyy47YU8/hqdefault.jpg)

(Source: [youtube.com: USD Files/ (8) 10 – SOPs – TouchDesigner Beginner Course - YouTube](https://youtu.be/JfBNyy47YU8?t=1575))


---

## 2.3 数字信息第三维度的拓展趋势

- 使信息更易吸收，人类无需降维吸收信息。
- 数字信息替代更多物理资源.
- 第三个生存空间(元宇宙, 月球)

![bg fit left:50% vertical](https://i.imgur.com/uAgrifz.webp)

![bg fit left:50% vertical](https://i.imgur.com/RxDaN0p.webp)


---

### 实战案例：从 3D 模型到 2D 图像

在 TouchDesigner 中，我们通过以下组件实现渲染：
- **GeometryCOMP**：容纳 SOP 模型
- **CameraCOMP**：定义相机视角
- **LightCOMP**：添加灯光效果
- **RenderTOP**：2D渲染最终图像

![bg fit right:50% vertical](https://i.imgur.com/h0yyYoo.webp)

---

#### 渲染流程

1. **添加组件**  
   - 新建 `GeometryCOMP`、`CameraCOMP` , `LightCOMP` 和 `RenderTOP`
   - Geometry COMP 默认包含 `TorusSOP` 模型



---



---
![bg fit left:50% vertical](https://i.imgur.com/bZ4Zxo3.webp)
![bg fit left:50% vertical](https://i.imgur.com/gvCsmgO.webp)
在TouchDesigner的SOP（Surface Operator）节点系统中，节点的分类体现了模块化与流程化的3D几何处理逻辑。以下是对图示节点的宏观理解：

---
![bg fit left:50% vertical](https://i.imgur.com/bZ4Zxo3.webp)

### **一、核心功能模块**

 **Generators（生成器）**: 创建基础3D几何体或原始结构（如Box、Sphere、Text、Grid、Line）。

**Modeling(建模)**：拓扑操作（Extrude、Boolean）和表面细化（Subdivide）。

**Deformations(变形)**：基于视觉效果调整形状（Noise添加噪波、Twist螺旋扭曲）。

**Attributes（属性管理）：** 定义几何体的元数据（颜色、法线、纹理坐标）或绑定动态数据。为材质、动画或物理模拟提供数据基础。

**IO（输入输出）：**  如Kinect、OpenVR，实时捕捉传感器数据。多数据源融合与跨平台协作, 文件交互(Alembic支持复杂动画导入导出，File In读取外部模型。)。

---

![bg fit left:50% vertical](https://i.imgur.com/gvCsmgO.webp)

### **二、扩展与专业化模块**

Character Rigging：创建骨骼系统、群组，实现角色蒙皮、变形控制，捕捉动作，基于曲线反向控制，为角色动画制作创建可动画骨架结构。  

Spline：构建、连接、变形曲线，处理曲线交互，创建圆角、拟合、填补空洞、合并等，精确创建和编辑曲线形状。  

Polygon：通过放样创建对象，修补表面，减少面数，基于曲线创建、缝合多边形，用于模型创建、优化和编辑。  

Dynamics：模拟粒子、弹簧，施加力场，创建拖尾效果，模拟物理动态，为场景添加自然运动和交互。  

Workflow：缓存数据、转换格式、复制删除对象、群组管理、控制输入输出、操作材质等，优化 3D 创作数据处理和操作流程。

---



### Render TOP

Render TOP 是三维渲染器，主要参数包括：
- **Camera**：指定渲染时使用的相机
- **Geometry**：指定渲染的几何模型
- **Lights**：指定渲染时使用的灯光
- **Anti-Alias**：反锯齿效果

![图片](https://i.imgur.com/7fjbi5x.webp)

---

### GeometryCOMP

Geometry COMP 用于容纳和管理 3D 模型：
- **Instancing**：开启实例化功能
- **Instance Count**：通过 CHOP、DAT 或 SOP 元件控制实例数量
- **Instance CHOP/DAT/SOP**：指定实例化依据

![图片](https://i.imgur.com/2au9T1o.webp)




---


**替换模型**  

可替换的 SOP（Surface Operator，表面操作符 ）有：
2. sphere（球体）
3. box（立方体）
4. tube（圆柱体）
5. torus（圆环体）
6. line（线）
7. rectangle（矩形）
8. circle（圆形）
9. grid（网格）

![bg fit left:50% vertical](https://i.imgur.com/D5yki9w.webp)

![图片](https://i.imgur.com/lB1nI0H.webp)


---


可以激活 `Displace`  操作Surface Operator
![bg fit left:50% vertical](https://i.imgur.com/4PJ3kwz.webp)





---

检查网格
按下`W`, 切换显示Wireframe(线框图), 
![bg fit left:50% vertical](https://i.imgur.com/Qoy8ui9.webp)



---


Display Options
快捷键 按`P` 

![bg fit left:50% vertical](https://i.imgur.com/hd73BLF.webp)

![bg fit left:50% vertical](https://i.imgur.com/lZD2Gap.webp)


---




### Light COMP


---


没有 LightCOMP 情况下, 
显示Default Light, (由Compute Normal 启用)

![bg fit left:50% vertical](https://i.imgur.com/Kg2B8UQ.webp)




---


LightCOMP 用于添加灯光效果：
- **Light Color**：定义灯光颜色
- **Dimmer**：调整光照强度
- **Light Type**：支持点光源、锥形光和远光

![图片](https://i.imgur.com/UesfnnQ.webp)

---

### CameraCOMP

Camera COMP 用于定义相机属性：
- **Uniform Scale**：按比例缩放相机
- **Constrain To**：让相机附属到指定元件
- **Look At**：让相机始终面对指定元件
- **Path SOP**：为相机指定移动路径

![图片](https://i.imgur.com/bqRqH1O.webp)



---

### MAT (Materials)

#### 物理材质
**PhongMAT**  
   - Diffuse 支持漫反射、Environment 环境光、Specular 高光反射等效果
   - 可加载贴图（如漫反射贴图、法线贴图）

**PBRMAT**


---

#### 抽象材质
**ConstantMAT**  
   - 不受光线影响的恒定颜色材质, 例如卡通材质

**WireframeMAT**  
   - 生成线框效果


![bg fit right:50% vertical](https://i.imgur.com/wBzDqNO.webp)


---



**LineMAT**

- 调试并示范, Setup 的属性
- Line/ Point页面的参数


![bg fit left:50% vertical](https://i.imgur.com/844Bzzr.webp)

![bg fit left:50% vertical](https://i.imgur.com/rtuUpGM.webp)



---

### 动画与调整

1. **添加动画**  
   - `SphereSOP` 模型参数（如 Primitive Type 设置为 NURBS）
   - 使用 `NoiseSOP` 创建不规则形变, `NoiseSOP` > Transform.Tz = `absTime.seconds* 0.5`

![bg fit left:50% vertical](https://i.imgur.com/id6PGmA.webp)

---



2. **相机调整**  


---
通过 Geometry Viewer 调整视图

![bg fit left:50% vertical](https://i.imgur.com/0l7WNBC.webp)

![bg fit left:50% vertical](https://i.imgur.com/5mWeT9O.webp)





---
**可选**
使用 `Look At`  功能让相机始终面对模型.
调节 Camera 的 Translate(位移) 任意一个轴进行测试
![bg fit left:50% vertical](https://i.imgur.com/S7ZyGBf.webp)

![bg fit left:50% vertical](https://i.imgur.com/mUEEnwf.webp)

---


拓展FOV 设置

![bg fit left:50% vertical](https://i.imgur.com/HatxYbD.webp)


---

### 摄像机轨道
Camera > PathSOP = `PathCircle(Null)`
可以增加一些偏移(Offset)

![](https://i.imgur.com/gJrXgFr.webp)

---



Circle 的 Transform 决定构图

![bg fit left:50% vertical](https://i.imgur.com/wMVBLl7.webp)

---


右上角,  `PaneOption >  Split Top/Button > Panel `显示项目  Out 节点 输出的画面
![bg fit left:50% vertical](https://i.imgur.com/i2xKQjF.webp)




---

合成文字, 背景

![bg fit left:50% vertical](https://i.imgur.com/XXQElWa.webp)

---


### 最终效果

![bg fit left:50% vertical](https://i.imgur.com/8woXKPR.webp)



使用Bloom 效果: 
![bg fit left:50% vertical](https://i.imgur.com/utX1ZUA.webp)

