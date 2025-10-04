## Unity粒子系统基础
[[Source - Everything to know about the PARTICLE SYSTEM]]
(Source:  [youtube.com: Everything to know about the PARTICLE SYSTEM](https://youtu.be/FEA1wTMJAR0?t=2))


![|200](https://i.ytimg.com/vi/FEA1wTMJAR0/hqdefault.jpg)


---



### 创建粒子系统

- 创建一个载体，例如 Empty（空对象）  
- 为其添加一个 Particle System（粒子系统）组件  

![bg fit left:50% vertical](https://i.imgur.com/PAu2L7H.webp)



---

### 系统概述

Unity粒子系统由多个模块组成，默认启用了以下三个模块：

- Emitter（发射器）  
- Shape（形状）  
- Renderer（渲染器）  

![bg fit left:50% vertical](https://i.imgur.com/8veeY9S.webp)



---

## 基础功能及模块

- 设置持续时间 , 自动播放, 控制循环  
- 设置粒子寿命、速度、大小、旋转、颜色  
- Gravity Sources,Modifier (添加重力)
- Simulation Space(选择模拟空间)


![bg fit left:50% vertical](https://i.imgur.com/6CHWQae.webp)




---


- **Duration（持续时间）** 粒子系统发射持续的时间（单位：秒）。

- **Looping（循环）** 让粒子系统循环 Play(播放) , 或结束后粒子系统会停止  

- Prewarm（预热）Looping(循环)时粒子系统从初始完整状态开始而非零发射  , 适用于持续效果如烟雾  



![bg fit left:50% vertical](https://i.imgur.com/6CHWQae.webp)


---

- Start Delay（开始延迟） 定义粒子系统的延迟启动时间。
- **Start Lifetime（初始生命周期）** 每个粒子的存活时间（秒）。
- **Start Speed（初始速度）** 粒子发射的速度（单位/秒）。
- **Start Size（初始大小2D/3D）** 所有轴的初始大小(尝试使用Curve控制)。
- **Start Rotation（初始旋转2D/3D）** 粒子发射时的旋转角度。

![bg fit left:50% vertical](https://i.imgur.com/6CHWQae.webp)

---


 - Flip Rotation（翻转旋转） 随机翻转某些粒子的初始旋转。

---


 - **Start Color** 设置粒子的初始颜色，可以是固定值或渐变颜色。
 - 需要提前在 **Renderer** 设置好 Material(材质). 
![bg fit left:50% vertical](https://i.imgur.com/oiXZ5yJ.webp)

![bg fit left:50% vertical](https://i.imgur.com/ueYcgvD.webp)

![bg fit left:50% vertical](https://i.imgur.com/pPgMMcT.webp)

![bg fit left:50% vertical](https://i.imgur.com/thFRjHS.webp)

---
设置 贴图
![bg fit left:50% vertical](https://i.imgur.com/mUexfDR.webp)

---



## 核心模块功能


---

### 2 Emission发射器模块


三种发射类型

-  `rate over time`:按时间连续发射，适合持续效果。 
- `rate by distance` : 按距离发射，适合动态移动效果。
- `bursts`  按时间点爆发发射，适合瞬间效果。


---


### 3 Shape 形状模块

- 定义发射器形状 球体、半球、圆锥、圆环或自定义网格  
- 设置发射方向、位置和区域  

---


### 4 Renderer渲染器模块

Renderer 模块 决定粒子的视觉效果，
- 选择2D billboard(广告牌)
- **3D网格显示**  
- 分配材质  
- 选择Shader additive、multiply或standard  
- 开启投射或接收阴影  

![bg fit left:50% vertical](https://i.imgur.com/yKRe46c.webp)

---

## 高级特效控制




<!--  

### 5 Over lifetime生命周期控制

通过`over lifetime`模块控制粒子随时间变化的属性，如大小、颜色和速度。


- 设置粒子的size、颜色随时间变化  
- 使用gradient渐变控制颜色和 alpha 值  
- velocity over lifetime模块 控制速度方向和大小  
- limit velocity over lifetime模块 限速和添加阻力  

-->


---


### 6 Noise 噪声效果
TLDR: 使用噪声模块添加湍流效果，控制强度、频率和滚动速度。

![bg fit left:50% vertical](https://i.imgur.com/5vqPf4E.webp)


---

### Trail

![bg fit left:50% vertical](https://i.imgur.com/z1WdWLD.webp)

![bg fit left:50% vertical](https://i.imgur.com/41K9TXf.webp)

![bg fit left:50% vertical](https://i.imgur.com/5Parbrg.webp)


---

![bg fit left:50% vertical](https://i.imgur.com/1p4LzaK.webp)

---


### VisuualScripting 的 C# 
```C#
public ParticleSystem explosionParticles;
if (Input.GetButtonDown ("space")) {
    explosionParticles.Play();
}
```


---



Size over lifetime

Color over lifetime


<!--  


### 碰撞系统
TLDR: 设置粒子与场景物体的碰撞交互，可使用世界碰撞或自定义平面。

---

## 特殊效果与优化
### 子发射器
TLDR: 允许粒子产生新的粒子系统，适用于创建烟花等复杂效果。

### 灯光效果
TLDR: 使粒子发出动态光源，适用于火焰、闪电等效果。

---


### 性能优化
TLDR: 通过调整碰撞质量、粒子数量和更新频率来优化系统性能。

1 识别教学内容提出的所有实战目标及步骤  
2 对于每个实践目标 详细列出实现该目标所需的所有步骤  
3 在描述步骤时 保持软件界面中的命令名称为原始英文  
4 尽可能提取并记录完整的命令路径  
5 使用重音符号(`)`来标注界面操作路径 例如 `File > Save All`


---



6 By Speed模块  
- 根据速度调整粒子大小、颜色或旋转  

---



7 Noise模块  
- 添加噪音影响  
- 调整strength、frequency、scroll speed和octaves  
- 选择噪音影响的位置、旋转或大小  

---


8 Collision模块  
- 开启粒子碰撞 模式设置为world或planes  
- 自定义碰撞平面  
- 调整bounce和dampen参数  
---
9 Sub Emitters模块  
- 添加子粒子系统  
- 用于创建复杂粒子效果如爆炸或烟火  

---


10 Texture Sheet Animation模块  
- 使用纹理表控制动画  
- 一般用于2D游戏粒子或特效  

---


11 Lights模块  
- 添加灯光影响周围环境  
- 设置light ratio 根据粒子颜色调整灯光外观  

---


12 Trails模块  
- 为粒子添加轨迹  
- 创建轨迹材质并分配到Render模块  
- 调整轨迹宽度和颜色  

---


13 Triggers模块  
- 设置粒子与碰撞体的触发逻辑  
- 支持enter、exit、inside或outside事件  

---


14 Inherit Velocity模块  
- 将发射器速度传递给粒子  

---


15 External Forces模块  
- 启用外部力场（如风）对粒子的影响  

---


16 Custom Data模块  
- 为高级用户设计  
- 附加自定义数据到粒子  
- 在Shader中使用这些数据  



-->





---


拼接被夺走的光
大学生张小帅喜爱拍摄，在一次参加校园摄影比赛中，发现自己的摄影作品被自己的舍友大壮盗用。而自己不断通过寻找证据与人证，将证据提交给举办方。最终举办方做出了公正的判断，将摄影奖归还给张小帅
搜寻碎片般的证据, 展开一场关于真实与虚假的较量, 不懈的努力最终他夺回了属于自己的光茫, 呼吁人们重新思考真相在数字时代的意义与光芒



拼接被夺走的光  
在数字洪流中真实与虚假交织大学生张小帅的摄影作品被舍友大壮盗用精心搜寻支离破碎的证据他展开了一场关于真相的追寻和较量最终追回属于自己的光芒  
这一故事探讨了数字时代真相的脆弱与珍贵光的象征不仅仅是作品的归还更是个体努力捍卫自我价值的见证  
作品以碎片化多媒体形式呈现通过模糊的影像被篡改的关键词残缺的信息流重建属于张小帅的光芒呼吁观者反思数字时代的伦理困境以科技割裂的碎片重塑属于自己的真实

失落的光重建计划  
在信息爆炸和模糊边界的时代 张小帅的经历揭示了真相与伪装之间微妙的平衡 他以碎片般的证据编织出真实的脉络 将自己被剥夺的创造力与价值重新拼接成一幅完整的画卷 这不仅是一场对个人尊严的捍卫 更是对权利与公平的重新定义 作品呈现一种将破碎重组的动态过程 呼吁人们重新思考真相在数字时代的意义与光芒
