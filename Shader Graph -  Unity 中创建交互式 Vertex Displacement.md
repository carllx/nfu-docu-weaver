
## 介绍

Creating Interactive Vertex Displacement Shader Effects in Unity
使用[[Shader Graph]] 制作按键交互的定点移动效果

![r2gr.gif](https://i.imgur.com/y29r2gr.gif)

![[https://i.imgur.com/y29r2gr.gif]]
## Source

[[Source - Creating an Interactive Vertex Effect using Shader Graph]]

---

## Shader Graph 环境搭建

### 安装Shader Graph包

如果 `Create > ShaderGraph` 不存在.
打开 `Package Manager` 安装必需包:

<!-- 
~~- Lightweight Render Pipeline 包~~
![bg fit left:50% vertical](https://i.imgur.com/CtXr0l8.webp)
-->

![bg fit left:50% vertical](https://i.imgur.com/Iy3oRNI.webp)



---


<!--  

### 创建并设置Render Pipeline(渲染管线)
  - 路径: `Create > Rendering > Lightweight Render Pipeline Asset`

![bg fit left:50% vertical](https://i.imgur.com/Dt2wVmR.webp)
![bg fit left:50% vertical](https://i.imgur.com/8TzCLqu.webp)

---

### 让创建的管线 Assets 成为可编程渲染管线设置
  - 激活路径: `Edit > Project Settings > Graphics` 
  - 将`Lightweight Render Pipeline Asset` 拖入 `Scriptable Render Pipeline Settings` 

![bg fit left:50% vertical](https://i.imgur.com/I1Xu0lT.webp)


-->


---
### 创建 PBR Graph(着色器图)


- `Create > Shader Graph > Lit Shader`
- 重命名为 `VertDispShader`(自定义Shader名称)

(在较新的 Unity 版本中，PBR Shader 图已被重命名或整合到 `Lit Shader ` Graph中)

![bg fit left:50% vertical](https://i.imgur.com/NL1VegI.webp)

---

### [[Switching render pipelines in Unity]]

---


### 应用Shader 到 Material 
- 在场景中添加球体, 名为 `VSphere`(名称自定义)
- 创建新 `Material` (材质), 自定义命名如`vMat`
- 并应用 Lit Graph 着色器

![bg fit left:50% vertical](https://i.imgur.com/FKfTeH8.webp)


---

### 初始化顶点位移

  -  对象的 `Position` , `Add`  , `Normal Vector` 
  - 所有 Vertex (顶点) 沿着Normal 的方形位移


![bg fit left:50% vertical](https://i.imgur.com/qGyTyh4.webp)

---

### 添加Amount 变量, 作为控制变形的幅度

![bg fit left:50% vertical](https://i.imgur.com/iVuGyo6.webp)

3 添加着色器属性控制
- 创建 Float(Vector1) 类型的 `Amount` 属性变量
- 引用名为 `_Amount`, (可自定义)
- 使用 `Multiply` 节点连接 `Simple Noise` 和法线位移

---

### 创建 Noise



Create a 3D Noise贴图,  注意2D 贴图和3D 贴图的区别.
![](https://i.imgur.com/pqW7SwW.png)


---


![bg fit left:50% vertical](https://i.imgur.com/RaYRqMD.webp)

  - 添加 Simple Noise 节点控制位移
  - 使用 Position 节点设为 Object 空间修复接缝
  - 添加 Time 节点创建脉动效果



---


4 添加发光效果
- 设置 Emission 输出
- ~~使用 Voronoi Noise 节点创建发光纹理~~
- 添加 Color 节点控制发光颜色
- ~~使用 Lerp 节点混合基础颜色~~
- ~~添加第二层 Simple Noise 增加视觉细节~~

![bg fit left:50% vertical](https://i.imgur.com/3ns9mxU.webp)


---
## Visual Scripting 与 Shader scripting 的交互


![bg fit left:50% vertical](https://i.imgur.com/UTBY8H8.webp)



---


### 1 Event 是逻辑的起点 
 ☑
Visual Scripting通过 Event 节点来触发逻辑。通常使用
- `On Start` 进行初始化.
- `On Update` 进行动态更新.

![bg fit left:50% vertical](https://i.imgur.com/m8975NH.webp)


---

### 获取ShaderGraph中的变量 `_Amount `

- 使用 `Get Material`节点获取材质**引用**`_Amount`
- 获取目标对象的材质上的属性变量引用 `Amount`
- (确保材质已正确赋值到对象上)

![bg fit left:50% vertical](https://i.imgur.com/UqHgBKW.webp)


---

### 关键的最后一步

控制参数的核心在于 `Set Float (Material)`  节点,
将处理后的值应用到 Shader 中

![bg fit left:50% vertical](https://i.imgur.com/DWL10ag.webp)

---

☑

### 2 数学节点处理数据:
    
- 通过按键更改 `Amount`
- 用 `Lerp` 函数 , 插入`Amount` 在更改过程的动态效果


---



### 2.1 通过按键更改 `Amount`

- 检测 `Jump` 按键，如果被按下，则将 Amount 增加 1。

![bg fit left:50% vertical](https://i.imgur.com/kDgwEIV.webp)

---


### 2.2 Lerp 插入变量更改过程的动态效果

Lerp 用于在两个值(A,B)之间进行线性插值
-  Lerp 将 Amount  的值平滑过渡到 0。
- 这表明每次按下按键都会产生一个“冲击”或“激增”效果，之后再缓慢平滑回落到 0。 

![bg fit left:50% vertical](https://i.imgur.com/7MqnHOv.webp)

---


### 2.3 Time.deltaTime  
- 确保动画不受设备性能对帧率的影响, 保持动画的速度一致的流畅度
- 例如通过`速度值`乘以 `Time.deltaTime` 可控制恒定速度, 
- 通常用于 Update() 而非 FixedUpdate()  

![bg fit left:50% vertical](https://i.imgur.com/9LRmxqK.webp)

---

### 最终 Visual Scripting

![](https://i.imgur.com/UTBY8H8.webp)


---


### VisuualScripting 的 C# 
```C#
// DisplacementControl
using System.Collections;
using System.Collections.Generic;
using UnityEngine;

public class DisplacementControl:MonoBehaviour{

    public float displacementAmount;
    // public ParticleSystem explosionParticles;
    MeshRenderer meshRender;
    
    // Start is called before the first frame update
    void Start(){
        meshRender = GetComponent<MeshRenderer>();
    }
    
    // Update is called once per frame
    void Update(){

        displacementAmount = Mathf.Lerp(displacementAmount, 0, Time.deltaTime);
        // lerpValue = Mathf.Lerp(minValue, maxValue, interpolationPoint);
        meshRender.material.SetFloat("_Amount", displacementAmount);
        if (Input.GetButtonDown ("Jump")) {
            displacementAmount += 1f;
            // explosionParticles.Play();
        }
    }
}
// 速度10 * Time.deltaTime 表示每秒移动的距离为10m而不是每帧10m


```


---
### 其他差值方式

![bg fit left:50% vertical](https://i.imgur.com/ahC3pCv.webp)

(Source:  [youtube.com: Making a Vertex Displacement Shader in Unity 2018.3! | Shader Graph](https://youtu.be/wOne2ba8h3o?t=111))

![bg fit left:50% vertical](https://i.imgur.com/m8975NH.webp)

```


Unity, Mathf.Lerp, Mathf.SmoothStep, Mathf.MoveTowards, Mathf.SmoothDamp, Mathf.SLerp

Mathf.Lerp 是一种线性插值函数 其他常见的插值函数包括 
Mathf.SmoothStep 平滑插值 
Mathf.MoveTowards 匀速插值 以及 
Mathf.SmoothDamp 平滑阻尼插值
Mathf.SLerp 球形插值
根据你提供的函数列表，与 **插值** （Interpolation）相关的函数包括以下内容：

1. **Lerp**  
   Linearly interpolates between `a` and `b` by `t`。（线性插值）

2. **LerpAngle**  
   Same as `Lerp` but makes sure the values interpolate correctly when they wrap around 360 degrees.（考虑角度进行插值，处理环绕 360 度的情况）

3. **LerpUnclamped**  
   Linearly interpolates between `a` and `b` by `t` with no limit to `t`。（没有范围限制的线性插值）

4. **SmoothStep**  
   Interpolates between `from` and `to` with smoothing at the limits.（带平滑效果的插值）

5. **MoveTowards**  
   Moves a value `current` towards `target`.（将一个值朝目标值插值移动）

6. **MoveTowardsAngle**  
   Same as `MoveTowards` but makes sure the values interpolate correctly when they wrap around 360 degrees.（同样用于角度处理，带插值移动）

7. **DeltaAngle**  
   Calculates the shortest difference between two angles.（可以辅助用在角度差的插值）

8. **InverseLerp**  
   Determines where a value lies between two points.（逆插值，用作计算 t 的值）

9. **SmoothDamp**  
   Gradually moves the current value towards a target value, over a specified time and at a specified velocity.（平滑阻尼插值）

10. **SmoothDampAngle**  
    Gradually changes an angle given in degrees towards a desired goal angle over time.（对角度进行平滑阻尼插值）

(Source:  [unity3d.com: Unity - Scripting API: Mathf](https://docs.unity3d.com/6000.0/Documentation/ScriptReference/Mathf.html))

这些函数以不同形式实现了线性插值、平滑插值、角度插值和阻尼插值的功能，是常用的插值函数。
```


---


``
## Notes
--`Intro|Ripple Wave Vertex Shader Graph - Easy Unity Tutorial - YouTube` [youtube](https://www.youtube.com/watch?v=QsLkb1aOkb8?t=0)
--`(67) How To Use All 200+ Nodes in Unity Shader Graph - YouTube` [youtube](https://www.youtube.com/watch?v=84A1FcQt9v4?t=0)
[[unity - Lerp(Csharp, scripting)]]
--`|Unity 中 Lerp 的正确方法（附示例） - 游戏开发初学者` [gamedevbeginner](https://gamedevbeginner.com/the-right-way-to-lerp-in-unity-with-examples/)
--2D rigdbody 交互 with  2D elements `Prevent player double jumping.|(1) 2D CHARACTER MOVEMENT IN UNITY 🎮 | Rigidbody2D Movement And Jumping In Unity | | Unity Tutorial - YouTube` [youtube](https://www.youtube.com/watch?v=w9NmPShzPpE?t=1917)
--COLLISIONS AND TRIGGERS IN UNITY ` 🎮 | Unity For Beginners | Unity Tutorial - YouTube` [youtube](https://www.youtube.com/watch?v=MfKyUkZb1V4&list=PL0eyrZgxdwhwQZ9zPUC7TnJ-S0KxqGlrN&index=14?t=340)


![|200](https://i.ytimg.com/vi/QsLkb1aOkb8/maxresdefault.jpg)
- [ ]  [[Unity - Particle System]] 探索 GlowExplosionParticle 制作的方法. 如何 linked up a simple particle system in the displacement control script?  // explosionParticles.Play(); --`| Everything to know about the PARTICLE SYSTEM` [youtube](https://www.youtube.com/watch?v=FEA1wTMJAR0?t=558)[youtube playlist](https://www.youtube.com/playlist?list=PLPV2KyIb3jR4GH32npxmkXE-AHnlamcdG)

-- 雪地交互与VFX Graph`(65) Unity Shader Graph - Snow Interactive Effect Tutorial - YouTube` [youtube](https://www.youtube.com/watch?v=ftCyZ7F5q9E?t=1)
--草地交互 (代码量比较多)`(65) Trampled Grass! Add Simple Interaction to Unity v Graph Grass 2020.3` [youtube](https://www.youtube.com/watch?v=AmO7k-Lr0XM?t=678)




---



教学工作（2024年9月—2025年1月初，220课时）：

- 非线性剪辑
- 数字音频处理
- 数字游戏设计基础

校企合作及学生实践(2024年9—12月)：

- 参加广州设计周联系工作坊，带领学生实践并拓展行业视野

教务辅助及培训：

- 参加艺创系新入职教师培训，了解课程结构设计以及高校青年教师教科研项目申报要点
- 积极协助日常校正、听课反馈、修订教学文件

后续教研与科研计划：

- 聚焦数字媒介与艺术设计课程的交叉教学模式，收集相关文献与案例
- 完善教学大纲、考核方式，持续关注数字艺术与创意产业动向，深化教学与科研结合


