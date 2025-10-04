# 3D Grease Pencil

<!--

 [[Source - Grease Pencil - 2D to 3D Grease Pencil(Patata School)]]
(Source:  [baidu.com: 百度网盘 - 视频播放](https://pan.baidu.com/pfile/video?path=/%E6%88%91%E7%9A%84%E6%95%99%E7%A8%8B/Blender/Patata+School+-+2D+to+3D+Grease+Pencil+in+Blender/01+Welcome+to+Grease+Pencil+in+Blender/01+Introduction+to+Grease+Pencil.mkv))
-->
[[Annotate - blender]]

---
## Grease Pencil 对象

- 在3D场景创建插图和动画
- 位移, 旋转,缩放和编辑
- 多种笔刷和材质


---


### 工作界面设置


- 配置工作区
- 视图和照明

---


- 在动画标签页添加 2D Animation 工作区

![bg fit left:50% vertical](https://i.imgur.com/HJSMvjB.webp)

---

- 设置灯光

![bg fit left:50% vertical](https://i.imgur.com/o7t5YbT.webp)

---
注意 Mode 已经被切换

![bg fit left:50% vertical](https://i.imgur.com/TZuoP0x.webp)


## 创建 GreasePencil Object


- 添加 Gpencil Object  (选择 Blank 选项)



![bg fit left:50% vertical](https://i.imgur.com/n7geNwX.webp)


---


### 笔刷类型

- airbrush
- ink pen 
- Ink Pen Rough

![bg fit left:50% vertical](https://i.imgur.com/EHPE7ps.webp)


---
### 三个编辑笔触模式

- 绘制模式
- 编辑模式
- 雕刻模式

---



#### 绘制模式

(已知)


---


#### 编辑模式

- 调整顶点大小和形状


![bg fit left:50% vertical](https://i.imgur.com/6nCRKC1.webp)



#### 雕刻模式


- 使用雕刻工具平滑线条

![bg fit left:50% vertical](https://i.imgur.com/L4letsH.webp)

---

Issue: 

Grease Pencil 工具 在绘制线条时出现 :
> No available frame for creating stroke

通过启用`自动关键帧`按钮解决了这个问题。

![bg fit left:50% vertical](https://i.imgur.com/Mxqh90m.webp)

---

### 材质系统

- Stroke（线）
- Fill（ 面）
- 创建(材质)

![bg fit left:50% vertical](https://i.imgur.com/4v355hq.webp)



---
### 画布定位

Drawing Planes 和 Stroke Placement 是两个不同的画布定位的控制选项.

- Drawing Planes - 绘制的平面方向 
- Stroke Placement - 笔画的空间位置



![bg fit left:50% vertical](https://i.imgur.com/oZnnEjH.webp)

![bg fit left:50% vertical](https://i.imgur.com/IFaf4rA.webp)



---

#### Stroke Placement 下笔位置
- Origin 笔画放置在物体原点
- 3D Cursor 笔画放置在 3D 光标位置
- Surface 笔画贴合在网格表面
- Stroke 笔画贴合在其他笔画上
  - All Points 所有点都贴合
  - End Points 仅起点和终点贴合
  - First Point 仅起点贴合

![bg fit left:50% vertical](https://i.imgur.com/DNtsfN0.webp)

![bg fit left:50% vertical](https://i.imgur.com/3juZU4z.webp)


---
#### Drawing Planes 绘制平面
- Front 在 XZ 轴平面绘制
- Side 在 YZ 轴平面绘制  
- Top 在 XY 轴平面绘制
- View 跟随当前视图方向
- Cursor 跟随 3D 光标方向

![bg fit left:50% vertical](https://i.imgur.com/UlJgC7T.webp)

![bg fit left:50% vertical](https://i.imgur.com/VKztRuO.webp)

---


#### Giude 引导线

![bg fit left:50% vertical](https://i.imgur.com/VhO5f4X.webp)

![bg fit left:50% vertical](https://i.imgur.com/Za4yVAz.webp)

引导线类型包括：
圆形 (Circular) ，径向 (Radial) ，平行 (Parallel) ，网格 (Grid) ，等轴测 (Isometric)  

例如圆形引导线约束笔触形成环形，平行引导线约束笔触形成平行线,等等。 平行线和等轴测线还可以通过调整角度参数来控制方向 。


---

### 图层管理
TLDR: 掌握多图层工作流程，包括图层排序、显示控制等。

- 不同图层可以独立控制显示和隐藏
- 图层可以上下调整顺序,控制重叠关系

![bg fit left:50% vertical](https://i.imgur.com/L3Qs6Nl.webp)


---

演示: 
- 创建新图层
- 新建填充画笔Material(材质)
- 设置 fill color(填充颜色)
- 调整图层顺序

---

### 修改器和特效

TLDR:  动态效果的 Grease Pencil 绘画
- 确保 Viewport Shading 位于 Rendered
- 打开 Visual Effect Properties 面板
- 应用 Pixel ,  WaveDistortion, Swirl 效果

![bg fit left:50% vertical](https://i.imgur.com/XZkAQ2q.webp)


---

## 动画技巧

### 使用 Grease Pencil 插值动画
> TLDR: 介绍了在 Blender 中使用 Grease Pencil 进行 2D 动画创作的基础知识和技巧。
- 可以通过关键帧动画或插值动画的方式制作Grease Pencil动画
- 使用Sculpt模式可以对Grease Pencil对象进行变形和编辑
- 可以使用时间偏移修改器让动画循环播放



---
### Onion Skinning(洋葱皮)
创建平滑过渡

---


设置前后帧辅助参考, 检查动作的过渡和连续性.
- Viewport Shading 下, 选择 Grease Pencil 对象
- Properties 面板 Data > Onion Skinning


![bg fit left:50% vertical](https://i.imgur.com/P5vOFtT.webp)



---

### Interpolate 插值动画设置
> TLDR: 探索不同的插值方式（线性、弹性、反弹等），创建流畅的动画效果。


2D Animation 工作区 /  `Draw Mode > Draw  > Interpolate Sequence`

![bg fit left:50% vertical](https://i.imgur.com/eqGeCH0.webp)


---

### Time Offset循环动画制作

Time Offset Modifier(时间偏移修改器) : 根据已有的关键生成循环动画
`Properties > Modifier  > Time Offset Modifier `

循环模式：
- Regular：普通循环重复
- Ping-Pong：来回循环
- Reverse：反向播放
![bg fit left:50% vertical](https://i.imgur.com/Geo2jH8.webp)



---


![bg fit left:50% vertical](https://i.imgur.com/9sanPVk.webp)


# END


---


<!--  


## 象征意义

#### 意外的相似性：自然现象与人类情感的映射

#### 意外的矛盾：自然与人性的辩证

烈日下却落下一滴雨，展现出意外的温柔。

Seneca作为斯多葛派哲学家追求理性克制，却又创作充满情感的悲剧作品。这两种表面的矛盾都反映了生命中理想与现实的微妙平衡。

-->


---



## 3_03 眼睛和嘴巴的动画
TLDR: 学习如何创建和设置基本的眼睛动画组件，包括白色眼球和黑色瞳孔的制作。
- 使用Grease Pencil绘制眼睛和嘴巴,并通过关键帧动画控制其运动
- 可以使用蒙皮技术将Grease Pencil对象绑定到骨骼上
- 使用IK(逆运动学)系统控制腿部和尾巴的运动

---

### 眼睛基本结构绘制
TLDR: 使用绘图工具创建白色眼球和黑色瞳孔，并通过图层管理进行组织。

---

### 遮罩应用技巧
TLDR: 利用白色眼球作为遮罩来限制瞳孔的移动范围，确保动画效果的真实性。

---

### 锚点设置与位置调整
TLDR: 正确设置锚点位置，调整眼睛的旋转和缩放，实现最佳的视觉效果。

---

### 瞳孔动画制作
TLDR: 通过关键帧动画和插值序列创建流畅的瞳孔移动效果，实现角色的生动表现。

---

### 循环动画设置
TLDR: 使用时间偏移修改器创建无缝循环的眼睛动画，增强角色的生命力。

---

<!-- 


## 4_01 Noah Albrecht案例1
- 使用单一颜色材质和置换贴图实现手绘边缘效果
- 使用时间偏移修改器让动画循环播放
- 使用简单的IK系统控制腿部和尾巴的运动

## 4_02 Noah Albrecht案例2
- 使用简单的IK系统控制腿部和尾巴的运动
- 使用Grease Pencil绘制尾巴并将其绑定到骨骼
- 使用波浪修改器制作尾巴的动画

## 4_03 Rose Caille案例
- 保留2D插图的质感和细节,在3D中重新诠释
- 使用Grease Pencil绘制烟雾和飘带效果
- 使用跟随路径修改器制作纸张飞舞的动画

## 4_04 Nathalia Angely Escalona Perez案例
- 从立方体建模,并使用雕刻工具细化造型
- 使用Grease Pencil绘制阴影和电缆效果
- 通过UV展开和纹理绘制实现手绘质感

-->
