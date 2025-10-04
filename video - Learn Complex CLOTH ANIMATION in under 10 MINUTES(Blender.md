[[Source- video - Learn Complex CLOTH ANIMATION in under 10 MINUTES(Blender)]]

![|200](https://i.ytimg.com/vi/NQLdrXndnQU/hqdefault.jpg)
(Source:  [youtube.com: Learn Complex CLOTH ANIMATION in under 10 MINUTES! | Blender 3D Tutorial](https://youtu.be/NQLdrXndnQU?t=22))

## 0. Set Up基础设置

创建复杂的布料动画模拟，包括投掷和接住布料

1 基础布料设置
- 创建一个平面网格
- 使用 Subdivide 细分平面（30次）
- 右键选择 Shade Smooth 平滑着色


`Add > Mesh > Plane`
`Right Click > Shade Smooth`

![bg fit left:50% vertical](https://i.imgur.com/vXq9ldY.webp)
![bg fit left:50% vertical](https://i.imgur.com/02iZ0NN.webp)


---


- 添加 Cloth Simulation 修改器
- 启用 Self Collision 自碰撞选项

`Cloth Settings > Self Collisions`




---


- 保持较低的 Quality Steps 和 Collision Quality 设置用于测试



---



- 添加 Subdivision Surface 修改器实现平滑效果
![bg fit left:50% vertical](https://i.imgur.com/0RYLhMw.webp)


---


- 添加极薄的 Solidify 修改器增加体积感
![bg fit left:50% vertical](https://i.imgur.com/Y58Eu2I.webp)


- Modifier Properties > Add Modifier > Cloth
- 
- Modifier Properties > Add Modifier > Subdivision Surface
- Modifier Properties > Add Modifier > Solidify

---

Wolla!!
![bg fit left:50% vertical](https://i.imgur.com/UDCtgR1.webp)


---



2 Bake 模拟测试流程
- 在 Cloth Simulation 设置面板中点击 Bake
- 测试新更改时，务必 Delete Bake 删除 Cache(缓存)
- 重新 Bake 进行模拟


`Physics Properties > Cloth > Cache > Bake`
`Physics Properties > Cloth > Cache > Delete Bake`

![bg fit left:50% vertical](https://i.imgur.com/YBFB0QV.webp)



---


Bake(烘焙)布料模拟：
1. 提升性能：在确认运动后, 可减少实时计算次数
2. 稳定动画：确保帧间一致性
3. 优化渲染：提高Render Farm(渲染农场)效率
4. 保存状态：可储存布料状态.


<!-- 
Render Farm 大型的3D动画项目

Render Farm是由多台高性能电脑组成的集群系统，主要用于解决大型3D动画渲染耗时的问题。它能将渲染任务分配给多台电脑同时处理，显著提高效率。在使用前需要进行烘焙处理以优化渲染速度。
-->

---





---

## 1. One Pin(单点固定)

使一些点不参加物理模拟 /
/ 使用顶点组和Pin组来固定布料的单个点。

![bg fit left:50% vertical](https://i.imgur.com/14d2zqb.webp)


---




### 创建Pin组


1. 设置 Pin Group
- 进入 Edit Mode(编辑模式)
- 创建新的顶点组 es.命名为 Pin Group
- 选择需要固定的顶点
- 设置Weight(权重)值为 1
- 点击 Assign 将顶点添加到顶点组
- 在 Shape > Pin Group 中选择该顶点组

![bg fit left:50% vertical](https://i.imgur.com/DLdOzZA.webp)
![bg fit left:50% vertical](https://i.imgur.com/KPTCyNO.webp)

---
Ecco! 

![bg fit left:50% vertical](https://i.imgur.com/RqhjDdE.webp)

---

![bg fit left:50% vertical](https://i.imgur.com/rqzg5OT.webp)

---


### 添加控制
- 添加空物体作为控制器
- 使用钩子修改器连接顶点
- 确保修改器顺序正确

![bg fit left:50% vertical](https://i.imgur.com/XjkrnOu.webp)



---



2. 创建控制点
- 添加一个 Empty 对象
- 将 Empty 放置在布料固定点位置
- 命名为 Pin 1
- 创建新顶点组命名为 Pin 1
- 将相同的固定顶点分配给 Pin 1 顶点组


![bg fit left:50% vertical](https://i.imgur.com/D9cjLyZ.webp)
![bg fit left:50% vertical](https://i.imgur.com/bxN2XQN.webp)

---


3. 设置 Hook 修改器
- 选择布料对象
- 添加 Hook 修改器
- 在 Object 下选择 Pin 1
- 在 Vertex Group 下选择 Pin 1

---




![bg fit left:50% vertical](https://i.imgur.com/Eab4YGJ.webp)

---
- 将 Hook 修改器移动到 Cloth 修改器之上
Mean: 首先考虑控制运动，然后相应地模拟布料

![bg fit left:50% vertical](https://i.imgur.com/jlLoovw.webp)


---

4. 测试动画效果
- 移动 Empty 对象
- 确认布料跟随控制点移动
- 验证布料模拟效果是否自然

注意事项：
- Pin Group 中权重值必须为 1 才能固定顶点
- 权重值为 0 或未在 Pin Group 中的顶点将随模拟自由运动
- Hook 修改器必须位于 Cloth 修改器上方以确保正确的模拟顺序


---
## 2.  Two Pin

创建带双控制点的布料模拟

![bg fit left:50% vertical](https://i.imgur.com/7O1jn8R.webp)


---

1. 创建第二个控制点
   - 进入Edit Mode(编辑模式)
   - 选择需要被第二个控制点控制的顶点
   - 创建新的顶点组命名为 Pin 2
   - 将选中的顶点分配给 Pin 2 组
   - 将这些顶点同时分配给主 Pin Group


> 顶点组: Properties > Object Data > Vertex Groups

---


2. 设置控制对象
   - 在控制区域放置一个 Empty 对象
   - 将 Empty 命名为 Pin 2
   - 在布料对象上添加新的 Hook 修改器
   - 在 Hook 修改器中选择 Pin 2
   - 将 Hook 修改器移动到布料模拟修改器之上

- 
- 修改器设置: Properties > Modifiers
- Hook 修改器: Add Modifier > Hook
- 布料模拟: Add Modifier > Cloth
![bg fit left:50% vertical](https://i.imgur.com/kxG6F6N.webp)

---

重要注意事项:
- 布料模拟设置中只能放置一个顶点组(Group)
- `Pin Group` 是所有控制 `Pin1,2,3..` 的组合
- 新增控制点时需同时添加到 Pin Group
- 确保 Pin Group 中没有未分配给任何控制组的顶点

![bg fit left:50% vertical](https://i.imgur.com/iCnOsvX.webp)
![bg fit left:50% vertical](https://i.imgur.com/kZdZ1Az.webp)



---


最终效果:
两个控制点可以独立动画控制，布料会跟随运动
![bg fit left:50% vertical](https://i.imgur.com/WnoDruu.webp)

---



## 3. 多点固定技术

多个固定点到布料模拟


1 创建新的顶点组
- 进入 Edit Mode 模式
- 选择 Vertex Selection 工具
- 选中需要固定的顶点
- 点击 Object Data Properties > Vertex Groups > + 创建新顶点组
- 点击 Assign 将选中顶点分配到顶点组

2 添加到布料固定组
- 进入 Physics Properties 面板
- 找到 Cloth 设置区域
- 展开 Shape 选项
- 在 Pin Group 下拉菜单中选择新建的顶点组

3 创建空物体并设置钩子修改器
- 点击 Add > Empty > Plain Axes 添加空物体
- 选择布料物体
- 添加 Hook 修改器
  - 点击 Modifiers Properties > Add Modifier > Hook
  - 在 Object 字段选择新建的空物体
  - 在 Vertex Group 字段选择对应的顶点组

4 调整修改器顺序
- 在修改器栈中将 Hook 修改器拖动到 Cloth 修改器上方

5 重复以上步骤添加更多固定点
- 对每个需要固定的点重复步骤 1-4

完成后即可通过移动空物体来控制布料的固定点位置进行动画制作


---

## 4. 释放与投掷
TLDR: 学习如何让布料从固定点脱离并产生自然的投掷效果。

### 顶点权重混合
- 添加顶点权重混合修改器
- 设置混合模式为减法
- 通过影响值控制固定点的释放


1 创建布料释放效果
- 在布料物体上添加 Vertex Weight Mix Modifier
- 设置 Mix Mode 为 subtract
- Group A 选择 Pin Group
- Group B 选择要分离的控制点顶点组
- 将修改器移至 Cloth Simulator 上方
- 设置 Influence 值控制布料连接状态：
  * 0 = 连接状态
  * 1 = 释放状态

2 制作布料释放动画
- 定位到释放帧的前一帧
- 设置 Influence = 0 并添加关键帧
- 前进到释放帧
- 设置 Influence = 1 并添加关键帧

3 设置多点释放控制
- 为每个控制点添加独立的 Vertex Weight Mix Modifier
- 设置参数：
  * Mix Mode = subtract
  * Group A = Pin Group
  * Group B = 对应控制点的顶点组
- 确保所有修改器位于 Cloth Simulator 上方
- 默认 Influence = 0

4 修改器排序要求
- Hook Modifier
- Vertex Weight Mix Modifier
- Cloth Simulator

5 创建复杂动画
- 结合控制点动画和布料释放
- 通过调整释放时机实现抛出效果
- 可独立控制多个连接点的释放时间
---

## 5. 布料捕捉技术
TLDR: 掌握如何在布料下落后重新捕捉它。

### 实现捕捉
- 使用顶点权重混合修改器反向操作
- 调整控制点位置
- 优化捕捉时间和位置
- 使用渐进式重新连接提升自然度

