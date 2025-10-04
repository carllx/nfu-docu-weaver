
## Collider 


参考教程
![|200](https://i.ytimg.com/vi/S0MXZ6AXzTE/hqdefault.jpg)
(Source:  [youtube.com: Unity Explained - Colliders - Beginner Tutorial](https://youtu.be/S0MXZ6AXzTE?t=1))



---

## 08-03 - RidgeBody (物理和刚体)

RidgeBody 是一个让 GameObject 拥有物理特性的 Component(组件)。

---

### 质量(Mass)

定义 GameObject 的质量(以千克为单位)

> **真空环境**中,Mass 不会影响物体在重力作用下的下落速度.
> **空气环境**中,更重的物体由于受到更大的空气阻力.

---

### 阻力(Drag)

阻力是物体速度减慢的程度。这个设置可以模拟空气阻力或摩擦力的影响。
> **低值**表示缓慢衰减,适合**模拟重物**.
> **高值**表示快速衰减,适合**模拟轻物**.

---

真空实验
[[Aristotle Galileo and Newton's Laws]]

![150|](https://i.imgur.com/MYeELqz.webp)

---

## 9. Collider(碰撞器)
Collider(碰撞器)是GameObject 的一个Component (组件)。


---

### 设计触发事件
Collider 不仅可以让物体相撞弹开。我们还能用触发事件, 设计物体触发后的反应。比如，当玩家碰到一个宝箱时，宝箱就会打开。



![150|](https://i.imgur.com/F9zFvcx.webp)

---

### 09-01 - Unity Collider components 设计感知环境的外衣
它就像是给游戏物体穿上了一件看不见的衣服. 有不同的形状，比如方形、圆形或者更复杂的形状。这件衣服可以让物体感知到周围的其他物体，并且在碰到时产生反应。

![150|](https://i.imgur.com/PC2jnrZ.webp)

---

- Box Collider: 最常用，适用于大多数对象
- Mesh Collider: 适用于不规则形状
- Sphere Collider: 适用于圆形对象
- Capsule Collider: 适用于无肢体动作的角色


---


### 09-02 - Applying Colliders

为场景中复杂的对象添加适当的碰撞体, 例如

- 为地板、墙壁、天花板等添加Box Collider
- 为不规则形状的物体添加Mesh Collider
- 为椅子添加Capsule Collider

---

### 09-03 - Optimizing Collisions

优化和调整碰撞体以获得更 realistic 的效果。

- 使用 Edit Collider工具调整碰撞体大小和形状
- 为不同对象选择最合适的碰撞体类型
- 添加Physics Material来控制物体的弹性和摩擦力
- 通过调整参数来实现所需的物理效果

---


Animation + Physics 实验

右键 `Project/Assets` , `Create > Physical Material`

![150|](https://i.imgur.com/o5xOqAA.webp)

![150|](https://i.imgur.com/m6Pe11z.webp)


---

#### Friction
- Static Friction(静摩擦力):  决定**推动物体所需的力**
- Dynamic Friction(动摩擦力): 决定物体**滑动时的阻力**


---

   - 范围从0到1。
   - 0表示无摩擦(如冰面),1表示高摩擦(如橡胶)。
   - 具体值取决于材质,例如:
     金属对金属: 0.2
     橡胶对金属: 0.7
     橡胶对混凝土: 0.9
     皮肤对金属: 0.6(默认值)

---
将在以下章节学习`NoFriction`:
> [[Bumper Cubes (Visual Scripting) 01]] 中会使用 NoFriction 滑动的方块
---

#### Bounciness (弹性)

   - 范围从0到1。
   - 0表示不弹(如软粘土),
   - 1表示完全弹性(如橡胶球)。


---

#### Friction Combine和Bounce Combine

   - 决定如何计算两个碰撞体之间的摩擦力和弹性。
   - 默认均为Average(平均)。
   - 其他选项包括Minimum(最小值)、Maximum(最大值)和Multiply(相乘)。

---

[[Unity - PhysicsMaterial values]]


