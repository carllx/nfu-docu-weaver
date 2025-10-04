

## Golconda 


是印度安得拉邦的一座荒废城市.

财富之矿, 财富宝库
14 s ~ 17 s，是两个王国的首都
是该地区负有盛名的钻石产业的中心。


命名 Magritte 本人直接想出，而是由他的一位诗人朋友 Louis Scutenaire 提供的。有趣的是，Magritte 还将斯库特内尔的肖像画在了画中，作为右侧靠近烟囱的那个较大的男人。

![bg fit left:50% vertical](https://i.imgur.com/JoV3UQm.webp)


---
## Tripo3D

- ImageTO3D
- TextTo3D
![](https://i.imgur.com/0Plrug9.webp)



---

### 方式 1: ImageTO3D


"""根据提供图像, 生成这个男人的多角度全身图像。"""

![bg fit left:50% vertical](https://i.imgur.com/0a4Siib.webp)


---

 分别将不同角度图片上传 Trip3D 
 
![bg fit left:50% vertical](https://i.imgur.com/0Plrug9.webp)

![bg fit left:50% vertical](https://i.imgur.com/3qJfQMo.webp)

 
---

### 方式 2: TextTO3D

- 直接生成 Prompt(著名画作模型已经掌握画面细节)
- 上传图像, 让模型生成 prompt 

>[info] 生成一个 英文 prompt 作为 tripod3d 这样的文生模型生成 3D 模型, 让 tripod3d 将玛格丽特的The Son of Man, 中的男士形象生成全身 3D 模型 , 注意: 该男士双手插口袋和立正双脚紧贴立正姿态，确保生成建模面数和贴图都要简单, 模仿原作的油画风格而不是写实的作品风格.

![bg fit left:50% vertical](https://i.imgur.com/MXWVBNH.webp)


---
### TextTo3D - 英文 Prompt

Generate a stylized 3D model of a male figure inspired by René Magritte's painting 'Golconda,'. The model should capture the essential characteristics of Magritte's painting in a simplified, non-photorealistic style. The figure should be dressed in a dark, knee-length overcoat (similar to a suit coat), a simple white collared shirt, and a subtly patterned red tie. He should be wearing a black bowler hat. The hands should be suggested subtly inside the pockets of the overcoat, indicating a relaxed yet composed posture. The figure's stance must be upright and formal, with his heels directly touching each other, with absolutely no visible gap between his feet at the heels. The shoes should be simple, flat, black dress shoes (such as Oxfords or similar), without any heel or platform. Model the shoes as a single. Key Stylization Elements: Geometric Simplification: Redu


---

### TextTo3D - 英文 Prompt(中文)

_生成一个受勒内·马格利特的画作《戈尔孔达》启发的风格化的男性人物 3D 模型。该模型应在简化的、非写实风格中捕捉马格利特画作的基本特征。人物应身着**深色及膝大衣**（类似西装外套）、简单的白色有领衬衫和带有微妙图案的红色领带。他应戴着一顶**黑色圆顶硬礼帽**。双手应巧妙地暗示在大衣口袋内，呈现出放松而又沉着的姿势。人物的站姿必须笔直而正式，脚跟直接相触，双脚脚跟之间绝对没有可见的间隙。鞋子应为简单的平底黑色正装鞋（如**牛津鞋或类似款式**），没有任何鞋跟或增高底。将鞋子与腿部建模为一个单独的合并单元，以简化打印过程。关键风格化元素：几何简化：减少。_




---

### Trip3D  生成角色模型
![](https://i.imgur.com/3fnsp1b.webp)


---

### Trip3D  生成角色模型


![](https://i.imgur.com/nuDqsSK.webp)
提示：生成一幅勒内·马格利特画作《戈尔孔达》中突出呈现的建筑的低多边形3D模型。重点捕捉其基本建筑形式：一座多层结构建筑，墙壁为米色/浅棕褐色，有独特的红色瓦片屋顶，带老虎窗和烟囱。纳入多个白色窗框的简化呈现。该模型必须具备。 

---

# 2.4 Particle Effect 粒子效果


## 本章目标

* 学习 **Particle SOP** 元件。
* 掌握粒子特效在三维场景中的 **渲染** 和 **使用**。

---


## 实战案例: 制作飘逸的粒子效果

![bg fit right:50% vertical](https://i.imgur.com/KzH8E0Q.webp)
*图 2-4-01: 最终效果预览*

---

## 什么是粒子效果?

1. 由 Emitter(粒子发射器) 发射一系列点状物。

2. 具有 *物理模拟* 特性 
* 虚拟空间中的 *力* (如引力、旋转力) 控制飞行方向。
* 常用于制作水、火、烟雾、发光轨迹等 *抽象视觉效果*。

![bg fit left:50% vertical](https://i.imgur.com/YUnXau0.webp)


---


## Step 1: 项目设置

1.  新建 TouchDesigner 工程文件, 删除默认元件。
2.  新建 **Container COMP** `container1`。
3.  进入 `container1` 内部进行制作。

    * **Container COMP**: 一个容器元件，用于组织项目、构建界面和交互逻辑 (详见后页)。

![bg fit right:50% vertical](https://i.imgur.com/mT6b9sB.webp)
*图 2-4-02: 新建 Container COMP*

---

## Step 2: 创建粒子发射源

1.  在 `container1` 中新建 **Sphere SOP** `sphere1`。
    * **SOP**: Surface Operator, 用于创建和修改几何体。
2.  设置几何细节:
    * Detail 参数页 -> Rows: `$40$`
    * Detail 参数页 -> Columns:  `$40$`


![bg fit right:50% vertical](https://i.imgur.com/b51nWBX.webp)
*图 2-4-03: 新建 Sphere SOP*

---

## TIPS: 查看 SOP 参数

* 右击 SOP 元件 -> **Display Options**
* 在 Guides & Markers 窗口中勾选需要显示的参数 (如顶点 Points, 法线 Normals)。
* 勾选黄框选项可显示 *顶点序号* (Point Numbers)。

![bg fit right:50% vertical](https://i.imgur.com/LWGzjFZ.jpeg)

---

## Step 3: 添加噪波变形

1.  在 `sphere1` 后添加 **Noise SOP** `noise1`。
    * **Noise SOP**: 对几何体属性 (位置、颜色等) 添加噪波效果。
2.  效果: 几何形态开始随时间 *不规则形变*。

![bg fit right:50% vertical](https://i.imgur.com/KZadHnw.jpeg)
*图 2-4-04: 添加 Noise SOP*

---

## Step 4: 添加旋转动画

1.  在 `noise1` 后添加 **Transform SOP** `transform1`。
    * **Transform SOP**: 对几何体进行移动、旋转、缩放。
2.  设置旋转:
    * Transform 页 -> Rotate `rx`: `absTime.seconds`
    * Transform 页 -> Rotate `ry`: `absTime.seconds`
    * *效果*: 几何体 (粒子发射源) 将围绕 $x$ 轴、$y$ 轴持续旋转。

![bg fit right:50% vertical](https://i.imgur.com/AkigTDH.jpeg)
*图 2-4-05: 添加 Transform SOP*

---

## Noise SOP 参数

![bg fit right:50% vertical](https://i.imgur.com/TUQoVxT.jpeg)

* **Attribute**: 作用的几何属性 (Position, Normal, Color, Alpha, Texture UV)。
* **Type**: 六种随机噪波类型。
* **Harmonics**: 谐波，数值越高，噪声越复杂。
* **Roughness**: 粗糙度，控制高频噪声影响。
* **Exponent**: 指数，控制噪波最大/小值间过渡平滑度。
* **Amplitude**: 振幅，定义噪波值幅度。

---

## Step 5: 随机化发射顺序 (Why?)

* **问题**: 粒子默认按 *顶点序号* 发射。球体顶点排列规则，导致发射形态 *规则*。
* **目标**: 让粒子发射更 *自然、随机*。
* **方法**: 打乱顶点顺序。

![bg fit right:50% vertical](https://i.imgur.com/S2Q6n59.jpeg)
*默认顶点顺序*

![bg fit right:50% vertical](https://i.imgur.com/WoUsjNN.jpeg)
*(左) Sort SOP 前 (右) Sort SOP 后 (Random)*

---

## Step 5: 随机化发射顺序 (How?)

1.  在 `transform1` 后添加 **Sort SOP** `sort1`。
    * **Sort SOP**: 用于重新排序点、顶点、图元。
2.  设置参数:
    * Point Sort -> **Random**
    * *效果*: 所有顶点顺序被 *随机重置*，粒子发射顺序被打乱。
![bg fit left:50% vertical](https://i.imgur.com/8dwQ2Qh.webp)

图 2-4-06: 使用 Sort SOP 重置顶点序号*

---

## Step 6: 创建粒子系统

1.  在 `sort1` 后添加 **Particle SOP** `particle1`。
    * **Particle SOP**: 模拟动态粒子系统的核心元件。
2.  效果: `particle1` 以 `sort1` 输出的几何体顶点为发射源，开始发射粒子 (默认设置)。

![bg fit right:50% vertical](https://i.imgur.com/zTyu96G.jpeg)
*图 2-4-07: 添加 Particle SOP*

---

## Step 7: 调整粒子参数

定制理想的粒子动态效果。

---


### Forces 页 
* `Wind`: $(x, y, z)$ 方向的风力。
* `Turbulence`: 扰动强度。
* `Turb Period`: 扰动力的周期。

---


### Particles 页
* `Mass`: 粒子质量 (影响受力)。
* `Drag`: 阻力。
* `Birth`: 每秒产生数量。
* `Life Expect`: 生存周期 (秒)。
* `Life Variance`: 生存周期差异。

![bg fit right:50% vertical](https://i.imgur.com/DdFJKH0.jpeg)
*图 2-4-08: 调整粒子参数 (仅显示变化参数)*

---

## Deep Dive: Particle SOP - Forces & State

![bg fit right:50% vertical](https://i.imgur.com/LqIDyXz.jpeg)

* **External Force**: (Input) 可连接外部力场。
* **Wind**: 施加持续风力。
* **Turbulence**: 添加随机扰动力。
* **Turb Period**: 扰动力的变化周期。
* **(State Page - Not shown)**:
    * `Time Inc`: 时间增量 (通常保持默认)。

---

## Deep Dive: Particle SOP - Particles & Attributes

![bg fit right:50% vertical](https://i.imgur.com/zrztTxW.jpeg) ![bg fit right:50% vertical](https://i.imgur.com/yDpPbx8.jpeg)

* **Add Particle ID**: 为每个粒子添加唯一 ID。
* **Add Mass Attribute**: 按 `Mass` 参数计算粒子质量 (需勾选)。
* **Drag**: 添加空气阻力效果。
* **Birth**: 每秒诞生粒子数。
* **Life Expect**: 平均生存时间 (秒)。
* **Life Variance(方差；偏差)**: 生存时间随机范围 (秒)。
* **Alpha Speed**: 速度越快，透明度越高 (需配合材质)。
* **(Input 2 - Collision)**: 可连接碰撞几何体。

---

## Step 8: 准备渲染 - Null SOP

1.  在 `particle1` 后添加 **Null SOP** `null1`。
    * **Null SOP**: 用作流程的 *终点* 或 *输出点*，方便引用和管理。
    * 此时 `null1` 传递`particle1`的几何信息。

---

## Step 9: 设置渲染器

1.  右键 `null1` 输出端 -> 选择 **Geometry COMP** `geo1`。
    * **Geometry COMP**: 容纳几何体 (SOP) 并准备渲染。
2.  添加渲染基础元件:
    * **Light COMP** `light1` (光源)
    * **Camera COMP** `cam1` (摄像机)
    * **Render TOP** `render1` (渲染器)
    * **TOP**: Texture Operator, 处理图像。
3.  连接: `geo1`, `light1`, `cam1` 连接到 `render1`。
    * *效果*: `render1` 开始渲染图像 (此时为默认白色粒子)。

![bg fit right:50% vertical](https://i.imgur.com/gC6hBl5.jpeg)
*图 2-4-09: 基础渲染设置*

---

## Step 10: 添加材质

1.  新建 **Constant MAT** `constant1`。
    * **MAT**: Material, 定义物体表面外观。
    * **Constant MAT**: 基础材质，不受光照影响，颜色恒定。
2.  将 `constant1` 拖拽到 `geo1` 的 `Material` 参数上。
3.  设置 `constant1` 颜色为 *白色* (或稍后调整为灰色)。
    * *效果*: 粒子显示为指定颜色。

![bg fit right:50% vertical](https://i.imgur.com/Mah9IQm.jpeg)
*图 2-4-10: 为 geo1 添加材质*

---

## Step 11: 构建 Feedback Loop (拖尾效果)

1.  新建以下 **TOP** 元件:
    * **Feedback TOP** `feedback1`
    * **Level TOP** `level1`
    * **Composite TOP** `comp1`
2.  连接:
    * `render1` -> `comp1` (Input 1)
    * `comp1` -> `level1` -> `feedback1` -> `comp1` (Input 2)
3.  设置:
    * `feedback1` -> Target TOP: `comp1`
    * `comp1` -> Operation: **Add**
    * *原理*: 将上一帧图像叠加到当前帧，产生拖尾。

![bg fit right:50% vertical](https://i.imgur.com/Kzehg7E.jpeg)
*图 2-4-11: 构建 Feedback Loop*

---

## Step 12: 调整 Feedback 效果

1.  选中 `level1`。
2.  调整 **Post** 参数页:
    * `Opacity`: 减小至约 **0.965**。
    * *效果*: 每次叠加时，上一帧图像稍微变暗，使拖尾 *逐渐消失* 而不是无限叠加。

![bg fit right:50% vertical](https://i.imgur.com/obtFwoS.jpeg)
*图 2-4-12: 调节 Level Opacity*

---

## Step 13: 调整视角与构图

1.  调整 **Camera COMP** `cam1` 的 **Translate** 参数 (`tx`, `ty`, `tz`) 来改变视角。
2.  **技巧**:
    * 分割窗格 (Split Left/Right)。
    * 一个窗格设为 **Geometry Viewer** (Alt+3 或右键菜单)，可直观看到 `geo1`, `light1`, `cam1` 的相对位置。

![bg fit right:50% vertical](https://i.imgur.com/bVuTKPX.jpeg)
*图 2-4-13: 使用 Geometry Viewer 辅助调整*

---

## Step 14: 画面微调

1.  **降低粒子亮度**:
    * 设置 `constant1` 材质的 `Color` 为 *深灰色*。
    * ![bg fit right:50% vertical](https://i.imgur.com/IntNmqZ.jpeg)
    * *图 2-4-14: 调节材质颜色*
2.  **增强背景纯净度**:
    * 在 `comp1` 后添加 **Level TOP** `level2`。
    * 调整 **Pre** 参数页 -> `In Low`: 设为约 **0.046**。
    * *效果*: 低于此亮度的像素变为纯黑。
    * ![bg fit right:50% vertical](https://i.imgur.com/AqswFzP.jpeg)
    * *图 2-4-15: 添加 Level TOP 调整黑场*

---

## TIPS: 预览节点输出

* 右键点击任何元件 -> 选择 **View...**
* 或将鼠标悬停在元件上，按下 **`v`** 键。
* 或点击节点右下角的 **Display Flag** (蓝色)。
* 可以快速查看当前节点的输出图像/数据。

![bg fit right:50% vertical](https://i.imgur.com/XYSuafu.jpeg)

---

## Step 15: 最终输出节点

1.  在处理流程末端 (如 `level2` 之后) 添加 **Null TOP**。
2.  重命名为 `bg`。
    * *习惯*: 使用 Null 作为最终输出，并命名为 `bg` 或 `out1`，方便后续引用。

![bg fit right:50% vertical](https://i.imgur.com/Kb942La.jpeg)
*图 2-4-16: 新建 Null TOP 并重命名为 bg*

---

## Step 16: 设置 Container 显示

1.  返回 `/project1` 层级 (或 `container1` 所在的层级)。
2.  选中 `container1`。
3.  设置 **Layout** 参数页:
    * `Width`: `op('./bg').width`
    * `Height`: `op('./bg').height`
    * *表达式*: 获取 `container1` 内部名为 `bg` 的 TOP 元件的宽度和高度。
    * `./bg`: 表示当前路径下的 `bg` 元件。
4.  设置 **Look** 参数页:
    * `Background TOP`: `./bg`
    * *效果*: `container1` 的背景将直接显示 `bg` 的图像。

![bg fit right:50% vertical](https://i.imgur.com/JTU7bzk.jpeg)
*图 2-4-17 & 2-4-18: 设置 Container 尺寸和背景*

---

## Deep Dive: Container COMP

![bg fit right:50% vertical](https://i.imgur.com/RW159Db.jpeg)

* **用途**: 组合元件、设计界面、编辑交互逻辑。
* **Layout 页**:
    * `X`, `Y`: 在父容器中的位置 (像素)。
    * `Width`, `Height`: 面板宽高 (像素)。
* **Look 页**:
    * `Background TOP`: 指定背景显示的 TOP。
* **Children 页**:
    * `Align`: 子元件排列规则。
    * `Depth Layer`: 图层深度 (类似 PS 图层)。

---

## Step 17: 设置全屏输出窗口

1.  新建 **Window COMP** `window1`。
2.  设置参数:
    * `Opening Size`: **Fill** (填充屏幕)
    * `Borders`: **Off** (关闭边框)
    * `Always on Top`: **On** (窗口置顶)
    * 点击 **Set as Perform Window**
    * *效果*: 设置 `window1` 为按 F1 时打开的表演窗口。

![bg fit right:50% vertical](https://i.imgur.com/7ZXphXj.jpeg)
*图 2-4-19: 全屏播放设置*

---

## Final Result & Experiment!

* 按下 **F1** 键，打开 Perform Window 查看全屏效果。
* **恭喜!** 你完成了飘逸粒子效果的制作。
* **尝试**: 回去调整 `Noise SOP`, `Transform SOP`, `Particle SOP`, `Level TOP` 等元件的参数，探索不同的视觉效果！

![bg fit right:50% vertical](https://i.imgur.com/U7TQ4Ys.jpeg)
*图 2-4-20: 最终效果*

---



## Golconda 


是印度安得拉邦的一座荒废城市.

财富之矿, 财富宝库
14 s ~ 17 s，是两个王国的首都
是该地区负有盛名的钻石产业的中心。


命名 Magritte 本人直接想出，而是由他的一位诗人朋友 Louis Scutenaire 提供的。有趣的是，Magritte 还将斯库特内尔的肖像画在了画中，作为右侧靠近烟囱的那个较大的男人。

![bg fit left:50% vertical](https://i.imgur.com/JoV3UQm.webp)


---
## Tripo3D

- ImageTO3D
- TextTo3D
![](https://i.imgur.com/0Plrug9.webp)



---

### 方式 1: ImageTO3D


"""根据提供图像, 生成这个男人的多角度全身图像。"""

![bg fit left:50% vertical](https://i.imgur.com/0a4Siib.webp)


---

 分别将不同角度图片上传 Trip3D 
 
![bg fit left:50% vertical](https://i.imgur.com/0Plrug9.webp)

![bg fit left:50% vertical](https://i.imgur.com/3qJfQMo.webp)

 
---

### 方式 2: TextTO3D

- 直接生成 Prompt(著名画作模型已经掌握画面细节)
- 上传图像, 让模型生成 prompt 

>[info] 生成一个 英文 prompt 作为 tripod3d 这样的文生模型生成 3D 模型, 让 tripod3d 将玛格丽特的The Son of Man, 中的男士形象生成全身 3D 模型 , 注意: 该男士双手插口袋和立正双脚紧贴立正姿态，确保生成建模面数和贴图都要简单, 模仿原作的油画风格而不是写实的作品风格.

![bg fit left:50% vertical](https://i.imgur.com/MXWVBNH.webp)


---
### TextTo3D - 英文 Prompt

Generate a stylized 3D model of a male figure inspired by René Magritte's painting 'Golconda,'. The model should capture the essential characteristics of Magritte's painting in a simplified, non-photorealistic style. The figure should be dressed in a dark, knee-length overcoat (similar to a suit coat), a simple white collared shirt, and a subtly patterned red tie. He should be wearing a black bowler hat. The hands should be suggested subtly inside the pockets of the overcoat, indicating a relaxed yet composed posture. The figure's stance must be upright and formal, with his heels directly touching each other, with absolutely no visible gap between his feet at the heels. The shoes should be simple, flat, black dress shoes (such as Oxfords or similar), without any heel or platform. Model the shoes as a single. Key Stylization Elements: Geometric Simplification: Redu


---

### TextTo3D - 英文 Prompt(中文)

_生成一个受勒内·马格利特的画作《戈尔孔达》启发的风格化的男性人物 3D 模型。该模型应在简化的、非写实风格中捕捉马格利特画作的基本特征。人物应身着**深色及膝大衣**（类似西装外套）、简单的白色有领衬衫和带有微妙图案的红色领带。他应戴着一顶**黑色圆顶硬礼帽**。双手应巧妙地暗示在大衣口袋内，呈现出放松而又沉着的姿势。人物的站姿必须笔直而正式，脚跟直接相触，双脚脚跟之间绝对没有可见的间隙。鞋子应为简单的平底黑色正装鞋（如**牛津鞋或类似款式**），没有任何鞋跟或增高底。将鞋子与腿部建模为一个单独的合并单元，以简化打印过程。关键风格化元素：几何简化：减少。_




---

### Trip3D  生成角色模型
![](https://i.imgur.com/3fnsp1b.webp)


---

### Trip3D  生成角色模型


![](https://i.imgur.com/nuDqsSK.webp)
提示：生成一幅勒内·马格利特画作《戈尔孔达》中突出呈现的建筑的低多边形3D模型。重点捕捉其基本建筑形式：一座多层结构建筑，墙壁为米色/浅棕褐色，有独特的红色瓦片屋顶，带老虎窗和烟囱。纳入多个白色窗框的简化呈现。该模型必须具备。 

---

# 2.4 Particle Effect 粒子效果


## 本章目标

* 学习 **Particle SOP** 元件。
* 掌握粒子特效在三维场景中的 **渲染** 和 **使用**。

---


## 实战案例: 制作飘逸的粒子效果

![bg fit right:50% vertical](https://i.imgur.com/KzH8E0Q.webp)
*图 2-4-01: 最终效果预览*

---

## 什么是粒子效果?

1. 由 Emitter(粒子发射器) 发射一系列点状物。

2. 具有 *物理模拟* 特性 
* 虚拟空间中的 *力* (如引力、旋转力) 控制飞行方向。
* 常用于制作水、火、烟雾、发光轨迹等 *抽象视觉效果*。

![bg fit left:50% vertical](https://i.imgur.com/YUnXau0.webp)


---


## Step 1: 项目设置

1.  新建 TouchDesigner 工程文件, 删除默认元件。
2.  新建 **Container COMP** `container1`。
3.  进入 `container1` 内部进行制作。

    * **Container COMP**: 一个容器元件，用于组织项目、构建界面和交互逻辑 (详见后页)。

![bg fit right:50% vertical](https://i.imgur.com/mT6b9sB.webp)
*图 2-4-02: 新建 Container COMP*

---

## Step 2: 创建粒子发射源

1.  在 `container1` 中新建 **Sphere SOP** `sphere1`。
    * **SOP**: Surface Operator, 用于创建和修改几何体。
2.  设置几何细节:
    * Detail 参数页 -> Rows: `$40$`
    * Detail 参数页 -> Columns:  `$40$`


![bg fit right:50% vertical](https://i.imgur.com/b51nWBX.webp)
*图 2-4-03: 新建 Sphere SOP*

---

## TIPS: 查看 SOP 参数

* 右击 SOP 元件 -> **Display Options**
* 在 Guides & Markers 窗口中勾选需要显示的参数 (如顶点 Points, 法线 Normals)。
* 勾选黄框选项可显示 *顶点序号* (Point Numbers)。

![bg fit right:50% vertical](https://i.imgur.com/LWGzjFZ.jpeg)

---

## Step 3: 添加噪波变形

1.  在 `sphere1` 后添加 **Noise SOP** `noise1`。
    * **Noise SOP**: 对几何体属性 (位置、颜色等) 添加噪波效果。
2.  效果: 几何形态开始随时间 *不规则形变*。

![bg fit right:50% vertical](https://i.imgur.com/KZadHnw.jpeg)
*图 2-4-04: 添加 Noise SOP*

---

## Step 4: 添加旋转动画

1.  在 `noise1` 后添加 **Transform SOP** `transform1`。
    * **Transform SOP**: 对几何体进行移动、旋转、缩放。
2.  设置旋转:
    * Transform 页 -> Rotate `rx`: `absTime.seconds`
    * Transform 页 -> Rotate `ry`: `absTime.seconds`
    * *效果*: 几何体 (粒子发射源) 将围绕 $x$ 轴、$y$ 轴持续旋转。

![bg fit right:50% vertical](https://i.imgur.com/AkigTDH.jpeg)
*图 2-4-05: 添加 Transform SOP*

---

## Noise SOP 参数

![bg fit right:50% vertical](https://i.imgur.com/TUQoVxT.jpeg)

* **Attribute**: 作用的几何属性 (Position, Normal, Color, Alpha, Texture UV)。
* **Type**: 六种随机噪波类型。
* **Harmonics**: 谐波，数值越高，噪声越复杂。
* **Roughness**: 粗糙度，控制高频噪声影响。
* **Exponent**: 指数，控制噪波最大/小值间过渡平滑度。
* **Amplitude**: 振幅，定义噪波值幅度。

---

## Step 5: 随机化发射顺序 (Why?)

* **问题**: 粒子默认按 *顶点序号* 发射。球体顶点排列规则，导致发射形态 *规则*。
* **目标**: 让粒子发射更 *自然、随机*。
* **方法**: 打乱顶点顺序。

![bg fit right:50% vertical](https://i.imgur.com/S2Q6n59.jpeg)
*默认顶点顺序*

![bg fit right:50% vertical](https://i.imgur.com/WoUsjNN.jpeg)
*(左) Sort SOP 前 (右) Sort SOP 后 (Random)*

---

## Step 5: 随机化发射顺序 (How?)

1.  在 `transform1` 后添加 **Sort SOP** `sort1`。
    * **Sort SOP**: 用于重新排序点、顶点、图元。
2.  设置参数:
    * Point Sort -> **Random**
    * *效果*: 所有顶点顺序被 *随机重置*，粒子发射顺序被打乱。
![bg fit left:50% vertical](https://i.imgur.com/8dwQ2Qh.webp)

图 2-4-06: 使用 Sort SOP 重置顶点序号*

---

## Step 6: 创建粒子系统

1.  在 `sort1` 后添加 **Particle SOP** `particle1`。
    * **Particle SOP**: 模拟动态粒子系统的核心元件。
2.  效果: `particle1` 以 `sort1` 输出的几何体顶点为发射源，开始发射粒子 (默认设置)。

![bg fit right:50% vertical](https://i.imgur.com/zTyu96G.jpeg)
*图 2-4-07: 添加 Particle SOP*

---

## Step 7: 调整粒子参数

定制理想的粒子动态效果。

---


### Forces 页 
* `Wind`: $(x, y, z)$ 方向的风力。
* `Turbulence`: 扰动强度。
* `Turb Period`: 扰动力的周期。

---


### Particles 页
* `Mass`: 粒子质量 (影响受力)。
* `Drag`: 阻力。
* `Birth`: 每秒产生数量。
* `Life Expect`: 生存周期 (秒)。
* `Life Variance`: 生存周期差异。

![bg fit right:50% vertical](https://i.imgur.com/DdFJKH0.jpeg)
*图 2-4-08: 调整粒子参数 (仅显示变化参数)*

---

## Deep Dive: Particle SOP - Forces & State

![bg fit right:50% vertical](https://i.imgur.com/LqIDyXz.jpeg)

* **External Force**: (Input) 可连接外部力场。
* **Wind**: 施加持续风力。
* **Turbulence**: 添加随机扰动力。
* **Turb Period**: 扰动力的变化周期。
* **(State Page - Not shown)**:
    * `Time Inc`: 时间增量 (通常保持默认)。

---

## Deep Dive: Particle SOP - Particles & Attributes

![bg fit right:50% vertical](https://i.imgur.com/zrztTxW.jpeg) ![bg fit right:50% vertical](https://i.imgur.com/yDpPbx8.jpeg)

* **Add Particle ID**: 为每个粒子添加唯一 ID。
* **Add Mass Attribute**: 按 `Mass` 参数计算粒子质量 (需勾选)。
* **Drag**: 添加空气阻力效果。
* **Birth**: 每秒诞生粒子数。
* **Life Expect**: 平均生存时间 (秒)。
* **Life Variance(方差；偏差)**: 生存时间随机范围 (秒)。
* **Alpha Speed**: 速度越快，透明度越高 (需配合材质)。
* **(Input 2 - Collision)**: 可连接碰撞几何体。

---

## Step 8: 准备渲染 - Null SOP

1.  在 `particle1` 后添加 **Null SOP** `null1`。
    * **Null SOP**: 用作流程的 *终点* 或 *输出点*，方便引用和管理。
    * 此时 `null1` 传递`particle1`的几何信息。

---

## Step 9: 设置渲染器

1.  右键 `null1` 输出端 -> 选择 **Geometry COMP** `geo1`。
    * **Geometry COMP**: 容纳几何体 (SOP) 并准备渲染。
2.  添加渲染基础元件:
    * **Light COMP** `light1` (光源)
    * **Camera COMP** `cam1` (摄像机)
    * **Render TOP** `render1` (渲染器)
    * **TOP**: Texture Operator, 处理图像。
3.  连接: `geo1`, `light1`, `cam1` 连接到 `render1`。
    * *效果*: `render1` 开始渲染图像 (此时为默认白色粒子)。

![bg fit right:50% vertical](https://i.imgur.com/gC6hBl5.jpeg)
*图 2-4-09: 基础渲染设置*

---

## Step 10: 添加材质

1.  新建 **Constant MAT** `constant1`。
    * **MAT**: Material, 定义物体表面外观。
    * **Constant MAT**: 基础材质，不受光照影响，颜色恒定。
2.  将 `constant1` 拖拽到 `geo1` 的 `Material` 参数上。
3.  设置 `constant1` 颜色为 *白色* (或稍后调整为灰色)。
    * *效果*: 粒子显示为指定颜色。

![bg fit right:50% vertical](https://i.imgur.com/Mah9IQm.jpeg)
*图 2-4-10: 为 geo1 添加材质*

---

## Step 11: 构建 Feedback Loop (拖尾效果)

1.  新建以下 **TOP** 元件:
    * **Feedback TOP** `feedback1`
    * **Level TOP** `level1`
    * **Composite TOP** `comp1`
2.  连接:
    * `render1` -> `comp1` (Input 1)
    * `comp1` -> `level1` -> `feedback1` -> `comp1` (Input 2)
3.  设置:
    * `feedback1` -> Target TOP: `comp1`
    * `comp1` -> Operation: **Add**
    * *原理*: 将上一帧图像叠加到当前帧，产生拖尾。

![bg fit right:50% vertical](https://i.imgur.com/Kzehg7E.jpeg)
*图 2-4-11: 构建 Feedback Loop*

---

## Step 12: 调整 Feedback 效果

1.  选中 `level1`。
2.  调整 **Post** 参数页:
    * `Opacity`: 减小至约 **0.965**。
    * *效果*: 每次叠加时，上一帧图像稍微变暗，使拖尾 *逐渐消失* 而不是无限叠加。

![bg fit right:50% vertical](https://i.imgur.com/obtFwoS.jpeg)
*图 2-4-12: 调节 Level Opacity*

---

## Step 13: 调整视角与构图

1.  调整 **Camera COMP** `cam1` 的 **Translate** 参数 (`tx`, `ty`, `tz`) 来改变视角。
2.  **技巧**:
    * 分割窗格 (Split Left/Right)。
    * 一个窗格设为 **Geometry Viewer** (Alt+3 或右键菜单)，可直观看到 `geo1`, `light1`, `cam1` 的相对位置。

![bg fit right:50% vertical](https://i.imgur.com/bVuTKPX.jpeg)
*图 2-4-13: 使用 Geometry Viewer 辅助调整*

---

## Step 14: 画面微调

1.  **降低粒子亮度**:
    * 设置 `constant1` 材质的 `Color` 为 *深灰色*。
    * ![bg fit right:50% vertical](https://i.imgur.com/IntNmqZ.jpeg)
    * *图 2-4-14: 调节材质颜色*
2.  **增强背景纯净度**:
    * 在 `comp1` 后添加 **Level TOP** `level2`。
    * 调整 **Pre** 参数页 -> `In Low`: 设为约 **0.046**。
    * *效果*: 低于此亮度的像素变为纯黑。
    * ![bg fit right:50% vertical](https://i.imgur.com/AqswFzP.jpeg)
    * *图 2-4-15: 添加 Level TOP 调整黑场*

---

## TIPS: 预览节点输出

* 右键点击任何元件 -> 选择 **View...**
* 或将鼠标悬停在元件上，按下 **`v`** 键。
* 或点击节点右下角的 **Display Flag** (蓝色)。
* 可以快速查看当前节点的输出图像/数据。

![bg fit right:50% vertical](https://i.imgur.com/XYSuafu.jpeg)

---

## Step 15: 最终输出节点

1.  在处理流程末端 (如 `level2` 之后) 添加 **Null TOP**。
2.  重命名为 `bg`。
    * *习惯*: 使用 Null 作为最终输出，并命名为 `bg` 或 `out1`，方便后续引用。

![bg fit right:50% vertical](https://i.imgur.com/Kb942La.jpeg)
*图 2-4-16: 新建 Null TOP 并重命名为 bg*

---

## Step 16: 设置 Container 显示

1.  返回 `/project1` 层级 (或 `container1` 所在的层级)。
2.  选中 `container1`。
3.  设置 **Layout** 参数页:
    * `Width`: `op('./bg').width`
    * `Height`: `op('./bg').height`
    * *表达式*: 获取 `container1` 内部名为 `bg` 的 TOP 元件的宽度和高度。
    * `./bg`: 表示当前路径下的 `bg` 元件。
4.  设置 **Look** 参数页:
    * `Background TOP`: `./bg`
    * *效果*: `container1` 的背景将直接显示 `bg` 的图像。

![bg fit right:50% vertical](https://i.imgur.com/JTU7bzk.jpeg)
*图 2-4-17 & 2-4-18: 设置 Container 尺寸和背景*

---

## Deep Dive: Container COMP

![bg fit right:50% vertical](https://i.imgur.com/RW159Db.jpeg)

* **用途**: 组合元件、设计界面、编辑交互逻辑。
* **Layout 页**:
    * `X`, `Y`: 在父容器中的位置 (像素)。
    * `Width`, `Height`: 面板宽高 (像素)。
* **Look 页**:
    * `Background TOP`: 指定背景显示的 TOP。
* **Children 页**:
    * `Align`: 子元件排列规则。
    * `Depth Layer`: 图层深度 (类似 PS 图层)。

---

## Step 17: 设置全屏输出窗口

1.  新建 **Window COMP** `window1`。
2.  设置参数:
    * `Opening Size`: **Fill** (填充屏幕)
    * `Borders`: **Off** (关闭边框)
    * `Always on Top`: **On** (窗口置顶)
    * 点击 **Set as Perform Window**
    * *效果*: 设置 `window1` 为按 F1 时打开的表演窗口。

![bg fit right:50% vertical](https://i.imgur.com/7ZXphXj.jpeg)
*图 2-4-19: 全屏播放设置*

---

## Final Result & Experiment!

* 按下 **F1** 键，打开 Perform Window 查看全屏效果。
* **恭喜!** 你完成了飘逸粒子效果的制作。
* **尝试**: 回去调整 `Noise SOP`, `Transform SOP`, `Particle SOP`, `Level TOP` 等元件的参数，探索不同的视觉效果！

![bg fit right:50% vertical](https://i.imgur.com/U7TQ4Ys.jpeg)
*图 2-4-20: 最终效果*

---



---



## Fog Efffects

![|200](https://i.ytimg.com/vi/Rt_2yjCSAyc/hqdefault.jpg)
(Source: [youtube.com:  (33) Smoke and Liquid Displacement Effects - TouchDesigner Tutorial 165 - YouTube](https://youtu.be/Rt_2yjCSAyc?t=181))

---


