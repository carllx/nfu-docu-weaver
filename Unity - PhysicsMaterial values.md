
(Source:  [unity3d.com: Unity - Manual: Physic Material asset reference](https://docs.unity3d.com/2022.3/Documentation/Manual/class-PhysicMaterial.html))

(Source:  [unity.com: Looking for predefined PhysicsMaterial values. - Unity Engine - Unity Discussions](https://discussions.unity.com/t/looking-for-predefined-physicsmaterial-values/827412/6))

Unity的Physics Material中有以下几个主要属性:

1. Dynamic Friction (动态摩擦力)
2. Static Friction (静态摩擦力)
3. Bounciness (弹性)
4. Friction Combine (摩擦力合并)
5. Bounce Combine (弹性合并)

需要注意的是,Unity的物理系统在处理大面积接触时可能会产生不准确的结果。对于特定需求,可能需要通过脚本来动态创建和调整Physics Material。

应该如何设置?
## Friction 

Dynamic Friction和Static Friction: 
   - 范围从0到1。0表示无摩擦(如冰面),1表示高摩擦(如橡胶)。
   - 默认值均为0.6。
   - 具体值取决于材质,例如:
     金属对金属: 0.2
     橡胶对金属: 0.7
     橡胶对混凝土: 0.9
     皮肤对金属: 0.6

摩擦力被分为动态和静态主要是因为物体在不同运动状态下的摩擦特性是不同的。这种区分反映了现实世界中摩擦力的复杂性：

1. 静态摩擦力：
   - 作用于静止不动的物体。
   - 通常大于动态摩擦力。
   - 防止物体开始运动。

2. 动态摩擦力：
   - 作用于已经运动的物体。
   - 通常小于静态摩擦力。
   - 减缓物体的运动。

在Unity的Physics Material中区分这两种摩擦力，可以更准确地模拟现实世界中的物理行为：

- Static Friction决定物体开始滑动需要多大的力。
- Dynamic Friction决定物体滑动时受到多大的阻力。

这种区分使得游戏中的物理模拟更加真实。例如：

- 一个箱子在地面上，开始时可能难以推动（高静态摩擦力）。
- 一旦箱子开始移动，推动它会变得相对容易（较低的动态摩擦力）。


## Bounciness (弹性)

 - 范围从0到1。
- 0表示不弹(如软粘土),
- 1表示完全弹性(如橡胶球)。

## Friction Combine和Bounce Combine

   - 决定如何计算两个碰撞体之间的摩擦力和弹性。
   - 默认均为Average(平均)。
   - 其他选项包括Minimum(最小值)、Maximum(最大值)和Multiply(相乘)。










