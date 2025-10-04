
## 数据类型

---


### Color 区分的数据类型 

1. **Geometry**(几何): 包含网格、曲线、点云、体积和实例
2. **Float**(浮点数): 带小数点数字
3. **Integer**(整数): 单个整数
4. **Boolean**(布尔值): `1` 或 `True`(真)，`0` 或 `False`(假)
5. **Vector**(向量): 通常由表示 X、Y、Z的三个数字组成
6. **Color**(颜色): 通常由表示 R、G、B的三个数字组成
7. **String**(字符串): 文字字符的组合

![bg fit left:30% vertical](https://i.imgur.com/r4STJLC.webp)

---
### 形状(Shapes）区分的接口特征

1. **Circle**(圆形): 可输入输出任何类型的数据的接口
2. **Diamond**(菱形): Field(字段)的 I/O接口，这些字段是返回每个几何组件属性数据的函数
3. **Diamond Dot**(带点菱形): 可以输入输出Field(字段)，但当前使用的数据对所有几何组件都返回相同的结果
4. **Solid Lines**(实线): 表示数据正在传递
5. **Dashed Lines**(虚线): 表示字段正在传递

![bg fit left:40% vertical](https://i.imgur.com/dElyeHD.webp)



---
### Field (字段)的 IO接口

**Diamond**(菱形)：表示动态字段

- (无点)菱形接口用于动态变化值, 这些字段是返回每个几何组件属性数据的函数
- 菱形接口处理动态字段，可以让几何体的每个部分拥有不同的属性值，如每个点的具体位置、大小或颜色。

es. 菱形接口可以处理“字段”，即一个动态的数据集合。字段的值会根据几何体的不同部分而变化。例如，“位置节点”会输出每个几何点的具体位置，这些值都是动态的。简单来说，菱形接口让每个几何点能拥有不同的属性，比如大小、颜色等。


**Diamond Dot**(带点菱形)：表示单一固定值

- (带点)菱形接口用于静态固定值, 但当前使用的数据对所有几何组件都返回相同的结果
- 带点菱形接口表示单一固定值，将相同的数值应用到几何体的所有部分。

es. 带点的菱形接口表示字段已被简化为一个固定值，这个值会作用于所有几何体部分。例如，“数值节点”设置为5时，它会将值均匀应用到几何体的每个点上，是静态不变的。

---

[[imgur mp4 to gif ]]

---



## 案例2

### 分析

### 1. Instance
实例对象：空心半球体

![bg fit right:50% vertical](https://imgur.com/9yMakyF.gif)

---


### 2. Count
数量大于1（例如16个）

![bg fit right:50% vertical](https://imgur.com/9yMakyF.gif)

---


### 3. Size 半径设置
- 所有半球体共用同一个中心点
- 半径大小与半球体的索引 n 成反比
- 第一个半球体（index: 0）最大
- 第二个、第三个等依次向内均匀缩小

![bg fit right:50% vertical](https://imgur.com/9yMakyF.gif)

---


### 4. Rotation 旋转特性：
- 所有半球体围绕同一中心点的Z轴旋转
- 每个半球体都有其最大旋转角度和最小旋转角度
- 旋转角度范围与半球体的index成正比
- 到达最大值或最小值时改变旋转方向
- 旋转运动采用时间轴与正弦波驱动

![bg fit right:50% vertical](https://imgur.com/9yMakyF.gif)

---


### 5. Position 位置特性：
- 所有半球体在同一中心点的Z轴上进行垂直位移
- 每个半球体的上下位移幅度与其index相关
- 位移最小值为0
- 位移最大值与半球体的index成正比
- 最大位移值（最小半球体，最后一个index）小于第0个半球体的直径
- 位移运动采用时间轴与正弦波驱动

![bg fit right:50% vertical](https://imgur.com/9yMakyF.gif)

---


## Practices
### 1. Instance on Points 创建半球体

- 使用 `UV Sphere` 删除一半 Faces 实现SemiSphere(半球体)。
- 将SemiSphere(半球体)拖入Editor,  (Object Info节点)
![bg fit left:50% vertical](https://i.imgur.com/3cPfCik.webp)

---

###  2. Count, N个实例

- 使用 `Integer(整数)` 节点, 决定最终创建的实例数量.
- 利用 `MeshLine` 生成的Points(顶点).
- `Instance on Points`,  结合Points 和 Mesh

![bg fit left:50% vertical](https://i.imgur.com/sRMcWdj.webp)


---



```
所有半球体共用同一个中心点
```

- 通过 `MeshLine` 的 Offset 为0, 将所有半球体Position 矫正为 `(0, 0, 0)`

![bg fit left:50% vertical](https://i.imgur.com/GfWmBOM.webp)


---

#### MeshLine伪代码
```python 

# 创建网格线
mesh_line = MeshLine(
	count=10,
	start_location=(0, 0, 0),
	offset=(0, 0, 0)
)
```

![bg fit left:50% vertical](https://i.imgur.com/GfWmBOM.webp)


---

### 3. Size

- 半径大小与半球体的Index(索引 ) n 成反比, 
- 第 1 个半球体（index: 0）最大
- 第2个, 第3个等依次向内均匀缩小

0.2m(Index:n, 最小值)  <= R  <=  1m (Index:0, 最大值)



---

#### 获得 index序列

使用` Index (索引)`节点与 `CaptureAttribute` 节点, 获取每个Instance(实例)的索引。
```python

import bpy

nodes = bpy.context.active_object.modifiers[0].node_group.nodes

geometry = nodes.new(type=Geometry)
index = nodes.new(type=Index)
capture = nodes.new(type=CaptureAttribute)

capture.data_type = INTEGER
capture.domain = INSTANCES

geometry.outputs[0].links.new(capture.inputs[0])
index.outputs[0].links.new(capture.inputs[2])

```

![bg fit left:50% vertical](https://i.imgur.com/o1nwegf.webp)


---

#### Map Range 重新映射半径值

使用“映射范围”节点将索引映射到所需的半径范围。

![bg fit left:50% vertical](https://i.imgur.com/56KQ1Ek.webp)


---


```python

# 通过 MapRange 将 index 映射为
# [0.2, ...., 1]

Value = [0,1,2,3,4,5,6,7,8,9,10,...15] # index

fromMini = 0
fromMax = 15
toMini = 0.2 # 最小值 0.2m
toMax = 1 # 直径 1m 

Result = MapRange(value, 
				  fromMini, toMini,
				  toMini, toMax )

```

![bg fit left:60% vertical](https://i.imgur.com/KDGzX6m.webp)


---


### 4. Rotation

![bg fit left:50% vertical](https://i.imgur.com/AiXbEjx.webp)


---

![bg fit left:50% vertical](https://i.imgur.com/As5fZrq.webp)

```python
# 0.2m(Index:n, 最小值)  <= R  <=  1m (Index:0, 最大值)

Value = [0, 1,2,3,4,5,6,7,8,9,10,...15]

# output = [0°,.......90°]
fromMini = 0
fromMax = 15
toMini = 0 # 0°
degree = 90
toMax =  math.radians(degrees) # 90°, 

# 将弧度转换为度 
# degrees = math.degrees(radians) 
# 将度转换为弧度 
# radians = math.radians(degrees)

Result = MapRange(value, 
				  fromMini, toMini,
				  toMini, toMax )
```


---


- 使用 `Sine(正弦)` 和“时间”节点创建随时间变化的正弦波。将此正弦波乘以映射的旋转角度范围，以获得最终的旋转角度。

#### 时间节点



![bg fit left:50% vertical](https://i.imgur.com/XTR23yX.webp)
![bg fit left:50% vertical](https://i.imgur.com/Wui9vN1.webp)


---



### 5. Position (实践)

**垂直位移实例：**
- 使用与旋转类似的方法
- 通过 `index(索引) `, `MapRange(映射范围)`、`Sine(正弦)` 节点和“时间”节点计算每个实例的垂直位移。
- 将最大位移限制为小于第一个半球体的直径。可以使用 最小值”节点来实现。
- 使用“实例化位移”节点将计算出的位移应用于实例，并确保位移方向为 Z 轴。



**更详细的节点连接:**

- **半径大小：** “整数” -> “范围浮点数” -> “反转” -> “乘法”（与最大半径相乘）-> “曲线圆”的“半径”
    
- **旋转角度：** “索引” -> “映射范围”（到最大旋转角度）-> “乘法”（与正弦波相乘） -> “实例化旋转”的“旋转”
    
- **垂直位移：** “索引” -> “映射范围”（到最大位移）-> “最小值”（限制最大位移）-> “乘法”（与正弦波相乘）-> “实例化位移”的“位移”
    

**关键改进:**

- 使用“集合实例”节点更有效地管理多个实例。
    
- 使用“映射范围”节点精确控制旋转和位移范围。
    
- 使用“最小值”节点限制最大位移。



---

### 6. 线性驱动



![bg fit left:50% vertical](https://i.imgur.com/XxppRUI.webp)



---

