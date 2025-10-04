
## 7. Level Building(ProBuilder)

![|200](https://i.ytimg.com/vi/YtzIXCKr8Wo/hqdefault.jpg)
参考:
(Source:  [youtube.com: MAKING YOUR FIRST LEVEL in Unity with ProBuilder!](https://youtu.be/YtzIXCKr8Wo?t=281))
[[source - Making your first level in Unity with Probuilder]]
官网说明 (Source:  [unity.com: Build Virtual Worlds From Scratch | Unity ProBuilder](https://unity.com/features/probuilder))

---

ProBuilder 是 Unity 内置的3D建模工具.

应用场景: 
- 构建游戏场景原型(prototypes), 关卡Level Building
- 创建 Convex 用于 collision(碰撞检测)

---

### 07-01 - Introduction to ProBuilder

实践目标：
1. 安装和使用 ProBuilder 工具
2. 了解 ProBuilder 的基本功能

---

![150|](https://i.imgur.com/kbP8HyO.webp)

实现目标的步骤：

1. 安装 ProBuilder
   a. 打开 `Window > Package Manager`
   b. 在Package Manager顶部，切换  `Packages: in Project -> Unity Registry`
   c. 在搜索栏中输入 "Pro Builder", 并点击安装

---

2. 打开ProBuilder工具
   a. 点击 `Tools > ProBuilder > ProBuilder Window` 打开ProBuilder窗口
   
---

3. 使用ProBuilder创建简单几何体
   a. 在ProBuilder窗口中，点击 "New Shape"
   b. 从弹出的菜单中选择所需的形状（如立方体、球体、圆锥等）
   c. 在场景中创建所选择的几何体

---

补充说明：
- ProBuilder主要用于在Unity中直接构建简单几何体
- 它通常用于在获得详细3D模型之前进行关卡设计和结构搭建
- 大多数情况下，设计师使用ProBuilder创建初步结构，之后会用3D艺术家提供的模型替换这些简单几何体

---

### 07-02 - Exploration of ProBuilder tools

深入探索ProBuilder的各种工具,如创建形状、编辑顶点/边/面、平滑等功能。

实践目标：
1. 探索ProBuilder工具的基本功能
2. 演示如何创建和编辑3D对象
---

![150|](https://i.imgur.com/D10ZYRj.webp)


1. 设置ProBuilder界面
   - 将ProBuilder菜单停靠在Inspector旁边
   - 点击三个点按钮，选择窗口显示模式（可停靠或浮动）
   - 选择文本模式或图标模式显示

---

2. 设置好网格系统
   - 启用Unity的网格系统（非ProBuilder功能）
   - 调整网格透明度
   - 选择网格平面（地板或墙面）

![150|](https://i.imgur.com/CtwSQ1z.webp)

---

3. 创建基本3D形状
   - 在`New Shape`菜单中选择形状（如立方体、圆柱体等）

---
![150|](https://i.imgur.com/Mbdiyt5.webp)

4. 编辑3D对象
   - 选择编辑模式：`Object`、`Vertex`、`Edge`或`Face`
   - 使用移动(W)、旋转(E)和缩放(R)工具修改对象
   - 选择并编辑特定顶点、边或面

---
![150|](https://i.imgur.com/vQv9mb8.webp)

5. 使用Poly Shape工具创建自定义形状
   - 选择`New Poly Shape`工具
   - 在场景中点击创建顶点，形成闭合形状
   - 调整形状高度
   - 完成编辑后，可以像其他对象一样进行修改


---


![150|](https://i.imgur.com/mn0UMQs.webp)

---

Point Mode > Set Pivot

![150|](https://i.imgur.com/InZZANV.webp)

---

Point Mode > Collapse point
焊接点

---
Face Mode Point Mode > Set Pivot

案例, 创建窗口的墙体
- 建立平面 
- extrude face 

![150|](https://i.imgur.com/TB9jP7R.webp)


---
Edge Mode

Insert Edge loop

---
