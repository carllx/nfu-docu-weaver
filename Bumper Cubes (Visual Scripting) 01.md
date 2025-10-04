# Bumper Cubes (Visual Scripting)


使用 Visual Scripting(可视化脚本编程) 创建一个无需编码的简单3D游戏
![bg blur](https://i.imgur.com/AulZlPl.png)


> 该实践最终效果 Video


---
## Reference

[[Source-Make a Game with Visual Scripting]]
实践参考:  How to Make a Game with Visual Scripting (E01) - Getting Started - Unity 2021 Tutorial (Bolt [youtube playlist](https://www.youtube.com/playlist?list=PLrw9uFU6NhfPCiMfDLsL-ccDMCMJ0bMJk)
笔记:  [[UnityScript - (CSharp && Visual Scripting && Bolt)]]


---

## E01 Scene setup(创建场景)

TLDR: 主要实践目标:
1. 设置游戏场景
2. 添加玩家移动功能


---

### 1. Props 设置游戏场景


在层级(Hierarchy) 中创建
-  Cube as`Ground` with cube(Cube); 调整地面的比例(Scale)为 `X` == 15, `Z` == 1000
-  Cube as`Player`(玩家), assign `PlayerMat` in Red;
-  Cube as`Obstacle`(障碍物), `ObstacleMat` in Grey(灰色).
-  Cube as`Destination` (🏁) 

- [[Basic Tips#更改背景]]


---

![bg auto left:50%](https://i.imgur.com/DtjSyhN.webp)


### 2. Player  前进动力(物理引擎)

- ADD Component `Rigidbody` to `Player`;
- ADD Component`Script Machine` Component(组件)
- Create  Visual Script Graph(视觉脚本图表)

---

#### Events 
当游戏对象处于活动状态时，
 - `Start event`  只会触发一次.
- `Update event`  每帧都会触发更新.
- `FixUpdate event`每0.02秒（即50帧每秒）执行一次 与物理系统同步更新

---

在Unity中脚本编写使用的是C#编程语言，而可视化脚本是一种图形化的“语言”，可以让你以图示方式编写指令。例如，这两个脚本实现了相同的功能——它们只是用两种不同的语言编写的。
![bg fit left:50% vertical](https://i.imgur.com/7Oj4mNB.webp)

---




![bg fit left](https://i.imgur.com/sbtqG2g.webp)

---
![bg fit left:50% vertical](https://i.imgur.com/VgLhSXB.webp)
### 为什么使用图形界面
- 让视觉思维的人(艺术生)更容易理解和学习编程概念. 
- 你还能实时看到脚本的运行过程。
- 像思维导图把拼接生命与(世界)的形式。



---

### Visual "language" 的局限


- **表达能力有限：** 表达能力可能不如文本编程语言C或Python [50:33]、[50:40]，在处理复杂算法或大型项目时可能显得力不从心, (例如图形的占用我们的创作空间)。
- **可扩展性不足：** 虽然 Visual language 允许创建自定义模块 [56:52]，[1:10:42]，但这可能无法满足所有编程需求，尤其是在需要使用特定库或外部工具时。例如对底层硬件的控制能力有限

参考 (Source:  [youtube.com: CS50 2021 in HDR - Lecture 0 - Scratch](https://youtu.be/1tnj3UCkuxU?t=121)[youtube playlist](https://www.youtube.com/playlist?list=PLhQjrBD2T383f9scHRNYJkior2VvYjpSL))

参考意义:  Scratch 课程, 关于学习可视化编程语言（如Scratch），以直观的方式掌握基本概念，如循环和函数。降低学习编程的门槛，让概念更易于理解。
![bg fit left:50% vertical](https://i.imgur.com/QiVTAxx.webp)




---



![bg left:50%](https://i.imgur.com/kGCdtSY.webp)

- ADD  `Rigidbody: Add Force (Force, Mode)`( z:10;Mode: Acceleration)
- CONN `FixUpdate`

---

![150|](https://i.imgur.com/9jyMMQr.webp)


---
![bg auto left](https://i.imgur.com/wWjnyT4.webp)
![bg fit vertical](https://i.imgur.com/TgZInUK.webp)


去除因 Friction 造成的滚动, 
- Create  `Physical Material` reName to "NoFriction"`  
- Drag NoFriction  into Player's Box Collision > Material
- Dynamic&&Satatic Friction : 0 
- Friction Combine:  average> Minimum(两个平面之间的平均值作为 Friction)
- Bounce Combine: average > Minimum



---
### 3. Player  前进动力(键盘)

![bg auto left](https://i.imgur.com/4JCANyI.webp)

自定义动力, 取代 ~~物理动力~~:  用 `Rigidbody: Set Velocity`节点取代 ~~`Add Force`~~

BUT, Player 只能按设定的固定速度值(x,y,z) 移动.

---

### 4. Create Controller


- 创建`Vector3`节点组合X、Y、Z轴速度
- 添加 `Input: Axis Name`, Axis Name:  "Horizontal" 获取键盘的水平输入 (Axis Name 可以查看`Edit > Project Setting > Input Manager`)  

![bg auto left](https://i.imgur.com/TL1haZM.webp)


---



![150|](https://i.imgur.com/bDc1Nok.webp)

- 使用`Multiply`节点调整水平移动速度
- 创建变量控制前进和侧向速度



---
### 5. 使用变量控制玩家速度



![150|](https://i.imgur.com/LrCozSc.webp)

用变量替代数值, 好处是在脚本外可以调节或被调用
![150|](https://i.imgur.com/314ONp2.webp)



---


![bg fit left:50% vertical](https://i.imgur.com/x90NnP2.webp)



数据支持程序的操作和传递, 常用的数据类型包括:
- **Integer (整数)** 用于计数或排序，可以表示正负数。
- **Float(浮点数)** 用于测量，可以表示正负数。
- **Boolean(布尔值)** 只有真假两种值，用于表示对象状态或控制脚本流程。
- **String(字符串)** 是可变长度的文本，用于显示消息或动态文本。
- **Enum(枚举)** 是一组预定义值的类型，用于指定单一值。
- **Vector(向量)** 是2、3或4个浮点值的组合，用于表示位置、速度等。



---

![150|](https://i.imgur.com/JomtSEU.webp)


---



在Unity中，变量的范围（Scope）包括以下几种：

1. **Graph**：图形脚本变量，仅在这个的图形脚本有效。
2. **Object**：对象变量，属于特定的 GameObject。
3. **Scene**：场景(关卡)变量，可以在同一场景(关卡)中共享。
4. **App**：应用程序变量，整个应用程序可用。
5. **Saved**：保存变量，这些变量使用 Unity的PlayerPrefs系统，能够在应用程序关闭后持久保存数据


---


Unity中不同范围变量(Scope)的特点和用途:

Graph变量 : 日记本，只有你自己能看到.
Object变量: 课室黑板，只有本班同学看到
Scene变量: 学院的公告栏，本院所有班级可以看到.
App变量: 相当于学校的广播系统，整个学校的师生都能听到
Saved变量: 就像是学校的档案室，N 年之后，你的孩子上这所学校也能看到这个消息


---

> Question: 为什么不用 Add Force?  

`Set Velocity` 更适合控制. 

![bg left:50%](https://i.imgur.com/4aiwJKW.webp)


---



![bg left:50%](https://i.imgur.com/2utOolH.webp)

施加力的物理计算几种方式:

- `AddForce`   适用于需要**持续施加力**的对象，例如火箭；(会考虑阻力等因素)
- `rigidbody.velocity`适用于具有干扰物理引擎的方式定义推动力。 
- `AddRelativeForce`在局部空间添加力 ... 


---
### Camera Follow 设置相机跟随

- 在 package manager(包管理器) `Window > PPackage Manager / Unity Registry > 搜索Cinemachine > Install`, 安装 `Cinemachine` 包. 
- 添加虚拟相机：`Hierarchy > Cinemachine > Virtual Camera` (添加 2d camera(虚拟摄像机) in `hierarchy` )

![bg fit left vertical](https://i.imgur.com/bYeZpcS.webp)

![bg  fit vertical](https://i.imgur.com/0jXc90F.webp)

---


- 调整主摄像机的位置和角度
- 添加虚拟相机并设置跟随目标为玩家 follow: `player`
- (将主摄像机背景改为纯色)

![150|](https://i.imgur.com/DJy7jW7.webp)


\

---


- 使用`Rigidbody: Get Velocity`获取Y轴速度(完整获得重力效果, 包括Drag,  ~~-9.8~~)
![](https://i.imgur.com/YIzsZBe.png)



