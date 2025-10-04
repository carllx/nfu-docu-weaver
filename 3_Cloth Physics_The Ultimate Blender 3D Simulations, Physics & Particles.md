[[Source_3_Cloth Physics_The Ultimate Blender 3D Simulations, Physics & Particles]]
(Source:  [baidu.com: 百度网盘](https://pan.baidu.com/disk/main?from=homeFlow#/index?category=all&path=%2F%E6%88%91%E7%9A%84%E6%95%99%E7%A8%8B%2FBlender%2FThe%20Ultimate%20Blender%203D%20Simulations,%20Physics%20%26%20Particles%2F3%20-%20Cloth%20Physics))


[[video - Learn Complex CLOTH ANIMATION in under 10 MINUTES(Blender]]
[[Class2.2.2 Physical Cloth]]
## 1_Cloth Quality Stiffness & More
概括: 
- 介绍了Blender中的cloth物理模拟
- 演示了如何设置cloth物理模拟,包括添加碰撞物体、调整质量步数、张力等参数
- 展示了不同参数设置对cloth模拟的影响


1. 创建基础布料场景


- 删除默认立方体
- 添加平面 `Shift A > Mesh > Plane`
- 启用布料物理 `Physics Properties > Cloth`

![bg fit left:50% vertical](https://i.imgur.com/UnkTs7o.webp)


---


- 添加碰撞物体 `Shift A > Mesh > UV Sphere`
- 为碰撞物体添加碰撞属性 `Physics Properties > Collision`

![bg fit left:50% vertical](https://i.imgur.com/UrWSNMj.webp)



---

### 布料是计算顶点

2. 优化布料网格
- 进入编辑模式 `Tab`
- 细分网格 `Right Click > Subdivide`
- 设置细分次数为10
- 平滑物体 `Right Click > Shade Smooth`

![bg fit left:50% vertical](https://i.imgur.com/vXq9ldY.webp)
![bg fit left:50% vertical](https://i.imgur.com/02iZ0NN.webp)


---

### 物理行为参数

<!--


![bg fit left:50% vertical](https://i.imgur.com/EpblCAh.webp)


-->


---



- Quality Steps：设置模拟精度（推荐值5-30）
- Speed Multiplier：调整布料运动速度

<!-- 

Quality Steps和Speed Multiplier的关系如下：

当Speed Multiplier值较高时，如果Quality Steps值太低，可能会出现明显的抖动问题。这时需要提高Quality Steps来改善模拟效果。

这两个参数需要平衡使用：当提高Speed Multiplier时，通常也需要相应提高Quality Steps以保持模拟的准确性和稳定性。反之，如果降低Speed Multiplier，则可以使用较低的Quality Steps也能获得良好效果。

-->

---


- Vertex Mass：布料质量, 质量(重)越大，布料的惯性越大，需要更多外力改变其运动状态。
- Air Viscosity：控制空气阻力 (厚度会减慢物体下落的速度)。
- Bending Model: 
1. Linear模型(旧版)：弹力与形变成正比
2. Angular模型：弹力由角度决定.

<!--
Vertex Mass 设定布料网格顶点的质量。质量越大,布料受力(如风力)的影响越小。这类似于刚体物理中的质量设置。

Air Viscosity 控制布料在空气中运动时受到的阻力。增大该值会让布料看起来像在更密的介质(如水或油)中运动。减小该值则会降低空气阻力。


-->


---



### Stiffness(刚性)参数
- Tension：控制布料拉伸阻力
- Compression：控制布料压缩阻力
- Shear：控制布料剪切变形阻力
- Bending：控制布料弯曲阻力

5. 调整阻尼参数
- Tension Damping：控制拉伸运动衰减
- Compression Damping：控制压缩运动衰减
- Shear Damping：控制剪切变形衰减
- Bending Damping：控制弯曲运动衰减

关键设置提示：
- 增加 Quality Steps 可提高模拟精度但会增加计算量
- 调整 Vertex Mass 可改变布料对外力的反应
- Bending Model 选择 Angular 可获得更真实的弯曲效果
- 适当调整阻尼参数可以控制布料运动的衰减速度



---


## 2_Internal Springs
概括:
- 介绍了cloth模拟中的内部弹簧
- 演示了如何使用内部弹簧来维持cloth的形状和结构
- 讨论了控制弹簧创建长度和角度的参数

## 3_Cloth Pressure
概括:
- 介绍了cloth模拟中的内部压力效果
- 演示了如何使用压力参数来模拟充气球或帷幕等效果
- 讨论了如何使用自定义体积来控制压力

## 4_Cloth Cache
概括:
- 介绍了cloth模拟的缓存设置
- 演示了如何使用磁盘缓存和库路径来管理大型模拟
- 讨论了如何手动烘焙和更新cloth模拟

## 5_Cloth Pinning & Sewing
概括:
- 介绍了如何使用pin group固定cloth的某些部分
- 演示了如何使用sewing功能将cloth的两个部分缝合在一起
- 讨论了如何根据顶点组控制针脚强度和位置

## 6_Cloth Collision
概括:
- 介绍了cloth模拟中的碰撞设置
- 演示了如何调整碰撞质量、距离和阻尼来优化碰撞行为
- 讨论了如何使用顶点组和集合来限制cloth的碰撞区域

## 7_Property Weights
概括:
- 介绍了如何使用顶点组来控制cloth的不同属性
- 演示了如何分别调整张力、压缩、剪切和弯曲等属性
- 讨论了如何根据需求定制cloth的物理特性

## 8_Cloth Field Weights
概括:
- 介绍了cloth模拟中的力场权重设置
- 演示了如何使用重力、风力等力场来影响cloth的行为
- 讨论了如何通过调整权重来控制力场对cloth的影响程度
