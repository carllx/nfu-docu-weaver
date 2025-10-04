### 06-01 - 什么是Prefabs(预制件)

---

#### 1. 基本概念

> Templates to create multiple instances of the same  

- Prefabs 相当于 GameObject 的 **模板(分身)**.
- Prefabs 使得'分身'的属性能互相继承, 并同步更新。
![150|](https://i.imgur.com/FMmF29h.webp)

---

#### 2. Prefab的应用场景
> Used for props and NPCs (non-player characters)

- 常用于Props(道具)和NPC(non-player Characters, 群演)。
- 节省大型场景的性能. 

---

#### 3. 嵌套Prefab和变体
> Can be nested and Variations.
> 
例如， 10 棵树 (children)， 一组是🟢  叶， 一组是🔵叶。
```json
[
    [
        ["🌳1", ["🟢1","🟢2",...]],
        ["🌳2", ["🟢1","🟢2",...]],
        ["🌳3", ["🟢1","🟢2",...]],
        ["🌳4", ["🟢1","🟢2",...]],
        ["🌳5", ["🟢1","🟢2",...]],
    ],
    [
        ["🌳6", ["🔵1","🔵2",...]],
        ["🌳7", ["🔵1","🔵2",...]],
        ["🌳8", ["🔵1","🔵2",...]],
        ["🌳9", ["🔵1","🔵2",...]],
        ["🌳10", ["🔵1","🔵2",...]],
    ]
]
```

---


### 06-02 - 创建Prefabs(预制件)


#### 1. 创建Prefab文件夹

- 在 `Project > Assets` 中创建专门的Prefabs文件夹，以便更好地组织管理Prefab。
#### 2. 从场景对象创建Prefab
- 选择场景中的对象,拖放到Prefabs文件夹中即可创建Prefab

![150|](https://i.imgur.com/xuuM9P4.webp)



---

#### Prefab 应用(不同材质)

![150|](https://i.imgur.com/E23djhQ.webp)



---

 

### 06-04 - Prefabs Variants (预制件变体)

Prefabs Variants 是Prefabs 的特殊版本,可作为新的Prefabs(预制件)使用,适用于创建相似但不完全相同的对象。

---

![150|](https://i.imgur.com/K3FVWdB.webp)

![150|](https://i.imgur.com/XyBpPc9.webp)

---

在 Prefabs 原版 增加 Object 会传递到所有 Prefabs 中
![150|](https://i.imgur.com/jRKJFfw.webp)

---

在 Prefabs Variants 添加 Object
![150|](https://i.imgur.com/Ujs7qbp.webp)


---

参考教程
![|200](https://i.ytimg.com/vi/S0cjIhI2fIw/hqdefault.jpg)
(Source:  [youtube.com: Prefabs & Prefab Variants - Unity Tutorial](https://youtu.be/S0cjIhI2fIw?t=464))
[[Prefabs & Prefab Variants - Unity Tutorial]]

---
> 注意: 
> Unity不允许Prefab嵌套
> 在Unity中创建Prefab(Prefab)时, 如果GameObject 是内嵌在一个 Prefab 中会遇到的**嵌套错误**问题。


解决方法, `Prefab> unpack` 创建新的：
- 选择场景中的父级Prefab对象。
- 右键点击，选择"Prefab"选项。
- 选择"Unpack Completely"（拆包）

---
#### Tips: 
Camera 与 ViewPoint 的切换: 
ViewPoint >> Camera:  `GameObject >Align View To Selected`
Camera >> ViewPoint:  `Ctrl` + `shit` + `F` 

---


