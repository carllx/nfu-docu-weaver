[[Outline - Alive_Animation course in Blender]]
[[Source - Alive! Animation course in Blender]]


---



![|200](https://i.ytimg.com/vi/VTNmLt7QX8E/hqdefault.jpg)
(Source:  [youtube.com: Heider and Simmel (1944) animation](https://youtu.be/VTNmLt7QX8E?t=5))

---


## 02-01 理解 Objects 变换的基础概念

---
### Object(对象)的本质

- 对象是一个 Container(容器)
- 容纳不同数据类型(Mesh, Camera, Empty对象数据等)
- 不同数据类型可在对象间转移

![bg fit left:50% vertical](https://i.imgur.com/MvHKwqa.webp)

---

### Object(对象)由两个主要部分组成

1. 容器部分存储对象数据
2. 变换原点控制位置和动画 
![bg fit left:50% vertical](https://i.imgur.com/MvHKwqa.webp)

---
### 动画制作的本质

无论对象多么复杂 
是操控对象原点的Transform(变换) 
制作动画时都是通过控制这个原点来实现的
而不是直接改变对象数据


![bg fit left:50% vertical](https://i.imgur.com/sEppV87.webp)


---


###  Transform(变换)快捷键操作：
- G：移动对象
- S：缩放对象
- R：旋转对象
- X/Y/Z：指定轴向
- Shift + 轴向：约束特定轴向

---

### Offset Origin (3step)

1. ObjectMode

- 激活 snap > Vertex (点)
- Option > Origin
![bg fit left:50% vertical](https://i.imgur.com/1HjsfSo.webp)


---

2. EditMode(Tab)

- 选择物体的一部分顶点、边或面。
- F3 ,  `Cursor to selected` (光标移到选择的点,线或面)

3. Object模式
- F3 ,  `Origin to 3D Cursor` (原点移动到光标)

![bg fit left:50% vertical](https://i.imgur.com/1Mwpr8Y.webp)


---

### 恢复 Orign
(Object模式)

使用Set Origin菜单下的不同选项来移动原点，例如Origin to Geometry(重置)、Origin to 3D Cursor等。

![bg fit left:50% vertical](https://i.imgur.com/biP24fr.webp)

![bg fit left:50% vertical](https://i.imgur.com/vjuo4CB.webp)


---



## 02-02 物体变换通道(Quick)

### 位移变换

### 旋转变换

### 缩放变换
快捷键S加上轴向键(X/Y/Z)可以实现单轴缩放。

---


### Delta变换
用于对现有动画进行位置偏移，但使用频率较低。

![](https://i.imgur.com/7wL9ilJ.webp)


---

## 02-03 弹跳球动画的第一个帧


---




### 设置原点(另一种方法)
TLDR: 调整弹跳球的原点位置到底部，为制作动画做准备
- `Tab` 进入 Edit Mode
- `A` 选择所有顶点 
-  `G Z 1` 将球体在 Z 轴上移动 1 m
- `Tab`  返回 Object Mode

---

### 动画时间线

- 将 Start (起始帧)设为 0
- 将 End (结束帧)设为 24
- Play (播放)头指示当前帧
![bg fit left:50% vertical](https://i.imgur.com/ctuXqVl.webp)

---

### 插入关键帧

- 选择 Object 按` I `键插入关键帧
- Frame 0: 设置球体初始位置并添加位置关键帧
- Frame 12: 在 Z 轴上移动球体 8 m 并添加位置关键帧
- Frame 24: 复制第一帧关键帧以创建循环动画
---

### 关键帧编辑
TLDR: 掌握关键帧的移动、复制、删除等基本操作
![bg fit left:50% vertical](https://i.imgur.com/kUxVxkF.webp)


---

### 变换通道颜色含义

状态指示
- 黄色: 关键帧值
- 橙色: 未记录的更改
- 灰色: 未动画的值
- 绿色: 动画Interpolation(插值)
![bg fit left:50% vertical](https://i.imgur.com/qaRt3XA.webp)


Interpolation(插值)是 Blender 在两个关键帧间自动生成的过渡动画。
![bg fit left:50% vertical](https://i.imgur.com/329rRWY.webp)



---



实践: 关键帧操作技巧
- G 移动关键帧
- S 向未来方向缩放
- Shift D 复制关键帧
- X 删除关键帧

![bg fit left:50% vertical](https://i.imgur.com/WV7n19Z.webp)

---

### 时间轴导航

- 使用左右箭头在帧间移动
- 使用上下箭头在关键帧间跳转
- 使用 Shift 左右箭头跳转到首末关键帧


---


### 自动关键帧

- 启用时间线中的记录按钮
- 移动物体时自动创建关键帧

![bg fit left:50% vertical](https://i.imgur.com/oEvMI0z.webp)


---

### 材质动画

- 选择材质预览
- 点击圆形图标添加颜色关键帧
- 在不同帧上更改颜色值
- 查看颜色过渡效果
![bg fit left:50% vertical](https://i.imgur.com/AbQUrJN.webp)


---

(跳过)
## [[02-04 时间轴进阶]]
时间轴的高级功能，包括导航、标记、预览范围设置和性能优化选项。

---

## 02-05 理解 Interpolation(插值)

> TLDR: 插值是计算机动画中关键帧之间的过渡计算方式，描述动画的时间和间距。

---



### 时间与间距
> TLDR: 时间控制动画的节奏，间距决定物体在相邻帧之间的位置变化。
![bg fit left:50% vertical](https://i.imgur.com/oDLSoFT.webp)

---

设置动作路径
- 选择物体进入 Motion Path 面板
- 设置动画范围 0-24帧
- 右键点击 Calculate 按钮添加到快速收藏
- 使用 Q 键快速访问 Calculate 功能
![bg fit left:50% vertical](https://i.imgur.com/apHkOIZ.webp)

---

### 插值类型

![bg fit left:50% vertical](https://i.imgur.com/Qvma9Gb.webp)

---


![](https://i.imgur.com/oxtG6DV.webp)



---

Blender 提供三种主要 Interpolation(插值)方式：
- Bezier(贝塞尔插值)：默认设置，提供渐入渐出效果
- Linear(线性插值)：匀速运动，适合机械动作
- Constant(恒定插值)：无过渡效果，适合动画分块和定格动画
![bg fit left:50% vertical](https://i.imgur.com/aDsq9Q9.webp)


---

### Interpolation 是计算物体运动中时间和空间的关系.

Linear:  $v速度 = \frac{s距离}{t时间}$, 空间的尺是恒定的
Bezier:  空间的尺是变化量

![bg fit left:50% vertical](https://i.imgur.com/Y9lpjfq.webp)



---



```
## 动画基础概念导论

插值、时间和间距是动画制作中的重要概念，它们与动画12原则有着密切关系：

### 时间与节奏控制
时间和间距是动画12原则中的 2 个基本原则。时间控制动作的节奏，决定物体运动的关键时刻。例如，球从地面弹起、达到最高点，再落回地面的时间点。

第6原则 Slow in and slow out - 描述了运动如何开始缓慢、逐渐加速、最后又缓慢结束的过程，这与插值相关
第9原则 Timing - 讨论了在关键帧之间插入多少帧来控制动作速度和特性

```

---


操作路径记录：
- 显示运动路径：Object Options > Motion Path
- 设置帧范围：Frame Range (0-24)
- 计算路径：Calculate
- 更新路径：Update Path
- 插值模式切换：Select all (A) > Interpolation Panel (T)

---



## 02-06 弹跳球动画规划(Blocking )

**TLDR**: 制作弹跳球动画时应注重时间安排和关键造型

---



### 弹跳球动画准备


创建光滑球体

- 使用 Subdivision 细分
- 启用 Shade Smooth 平滑着色
---

- shade smooth
![bg fit left:50% vertical](https://i.imgur.com/EDKKY5Z.webp)


![bg fit left:50% vertical](https://i.imgur.com/saE3K2D.webp)

---

细分后会小一圈
![bg fit left:50% vertical](https://i.imgur.com/jb7gefa.webp)


---

### 1. Start, 地面接触阶段

- 在第0帧设置地面接触点



---


### 2. End, 设置24帧循环动画

- 修改动画长度为 23 帧（0-23）
- 复制第 0 帧到第 24 帧
> 循环动画, 这样能避免首尾(第0帧和第24帧)重复, 保证循环播放时的流畅性
![bg fit left:50% vertical](https://i.imgur.com/E8hIrjA.webp)

---
- 使用Constant(恒定插值) 
按 T 键 > 选择 Constant

![bg fit left:50% vertical](https://i.imgur.com/dDLB2Go.webp)


---
### 3. Highest , 空中运动阶段


计划 12 帧上升和12帧下降的均匀时间分配

---


### 物理变形原理(挤压与拉伸)


形态适应（[[morphological adaptation]]）是指生物在特定环境中，为了生存和繁衍而发生的形态或结构上的变化。
![bg fit left:50% vertical](https://i.imgur.com/YjliN36.webp)


---


物体运动时会因外力产生形变, 包括空气阻力和反作用力.
**Stretch(拉伸)** 时球体高速运动产生垂直方向压缩以适应气流 
**Squash(挤压)** 时球体撞击表面时发生挤压并在其他方向膨胀

![bg fit left:50% vertical](https://i.imgur.com/TfVu5oM.webp)


[[The 12 Principles of Animation#1. Squash and Stretch (挤压与拉伸)]]

---

动画时, 事实在通过动画曲线塑造对象的物理信息(物体材质特性). 

---

### 4. Squash(UP),  蹲下预备起跳

![bg fit left:50% vertical](https://i.imgur.com/UMzGX7I.webp)

- 在第 2 帧添加挤压效果
操作：缩放 Z 轴向下，同时扩大 X 和 Y 轴

---

### 5. Strecth(UP), 起跳时拉伸

![bg fit left:50% vertical](https://i.imgur.com/3QrtsgT.webp)



---

### 6.  Heighst 在最高点添加轻微挤压表现惯性

![bg fit left:50% vertical](https://i.imgur.com/yv5yia8.webp)

### 节奏优化, 起跳相对着地时间更长.

- 设置UP(上升) 最高点延长第 14 帧, 
![bg fit left:50% vertical](https://i.imgur.com/emEyRyu.webp)

---

### 节奏优化, Intermediate Poses(过渡姿势) 中间帧处理

实现球体在离地运动, 时速度变化：起跳快 上升慢 

A. 插入中间帧将离地细分为起跳和上升
- 在 4 米高度添加中间关键帧(约第 9 帧)

B. 压缩起跳时间. 
-  es.从第 9 帧推到第 7 帧


> 相同spacing(间距), 不同 speed(速度)



![bg fit left:50% vertical](https://i.imgur.com/bWD3ECf.webp)


---

![](https://i.imgur.com/lmfo3vi.webp)


关键技术要点：
- 使用挤压和拉伸表现速度和物理特性
- 通过关键帧间距控制速度变化
- 保持物体体积一致性


---

## 02-07 动画曲线

TLDR: 动画曲线是控制动画运动的关键工具，通过图形化方式展示数值随时间的变化。
‌⁠​‍‌

---

### 图形编辑器基础操作


---



1. 打开动画曲线编辑器
   - 进入 Graph Editor 界面
   - 查看默认的 Constant interpolation 模式下的曲线

![bg fit left:50% vertical](https://i.imgur.com/yHtKXxs.webp)

---




2. 理解基础曲线显示
![bg fit left:50% vertical](https://i.imgur.com/60FYUR3.webp)

- 观察控制点代表的关键帧
- 查看 Z 轴位置值（示例：第7帧数值为4）
- 显示所有对象变换通道

---

4. 曲线编辑基础操作
- 选择/隐藏曲线：
 
 * Shift + H 隐藏未选中曲线
 * 点击眼睛图标显示/隐藏曲线
![bg fit left:50% vertical](https://i.imgur.com/6gzI6ty.webp)

---


   - 移动曲线：
	- 双击通道名称选择整条曲线
	* G 键自由移动
	* G + Y 在Y轴移动
	* G + X 在X轴移动

---


5. 优化工作区
   - 删除不需要的曲线（旋转和X、Y位置）
   - 使用 X 键删除不需要的通道
   - N 键打开 F-curve 面板


---

### 曲线插值模式

从阶梯式插值切换到贝塞尔插值可以创造更流畅的动画效果。

   - 选择所有关键帧
   - 按 T 键
   - 切换到 Bezier interpolation 模式


---

### 理解曲线形状与动画关系

理解曲线形状与动画效果关系
   - 垂直曲线段 = 快速运动/大间距
   - 水平曲线段 = 缓慢运动/小间距
   - 平坦曲线 = 无变化/静止
   - S形曲线 = 缓入缓出效果

---

### 实际应用示例
TLDR: 通过旋转箭头和球体运动的具体示例，展示如何使用曲线控制动画节奏和速度。

7. 实践练习
   - 观察旋转动画示例（-90度到+90度）
   - 分析位置动画示例（X轴线性运动）
   - 测试不同曲线形状对应的运动效果


---

### 动画原理总结
TLDR: 曲线本质是数值随时间的变化表现，其形状直接影响动画的速度和间距变化。

关键技巧：
- 保持工作区整洁，删除无用通道
- 使用小数点键放大查看选中点
- 通过曲线形状预判动画效果
- 结合运动路径可视化验证动画效果

---


## 02-08 图形编辑器
**TLDR**: 详细介绍图形编辑器的功能，包括手柄类型、归一化选项、曲线修改器等工具的使用。

---


## 02-09 完善弹跳球动画效果


---



### 1. 帧率调试


-  Properties >  Output > Format > Frame Rate
- 可定义帧率为5帧每秒用于调试
![bg fit left:50% vertical](https://i.imgur.com/xMtNgqy.webp)


---


### 2.下落物理规律, 优化下落曲线

- 检查间距是否随下落加速增大
![bg fit left:50% vertical](https://i.imgur.com/mx3SdVh.webp)

---


### 3. 曲线编辑优化
- 在 Graph Editor 中修改曲线形状
- 按 V 键将手柄类型改为 Vector
- 删除中间关键帧获得更清晰的曲线

![bg fit left:50% vertical](https://i.imgur.com/IqeOC0i.webp)


---

### 挤压与拉伸效果

- 使用 Alt+H 显示 Graph Editor 中所有曲线
- 隐藏 Z 轴位置曲线专注于缩放曲线
- 将关键帧切换为 Vector 类型
- 调整挤压和拉伸的时间偏移
![bg fit left:50% vertical](https://i.imgur.com/OHuPIKl.webp)


---
4 调整弹跳节奏
- 向外移动 Vector 手柄增加曲线高度
- 缩放上方关键帧使球上升更快
- 偏移上方关键帧一帧创造不对称时间
- 使用 Update Path 按钮重新计算路径

6 界面优化技巧
- 使用 Overlay 开关隐藏网格
- 右键点击功能选择 Assign Shortcut 设置快捷键
- 为常用功能设置个性化快捷键

关键操作要点：
- 使用矢量手柄打破曲线平滑
- 通过一帧的偏移优化动画效果
- 注重细节调整提升动画品质
- 合理使用关键帧阻塞提升样条效果
### 空中变形调整
TLDR: 微调空中阶段的变形时间，确保球体在最高点的挤压效果自然，优化上升和下落阶段的过渡。

---

### 最终完善
TLDR: 通过细节调整提升动画质感，包括移除网格显示，设置快捷键，确保动画整体节奏和细节的和谐统一。



## 02-10 向前推进
**TLDR**: 为弹跳球添加前进运动，学习循环动画和复杂运动的制作技巧。

