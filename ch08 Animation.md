## 8. Creating and Implementing Animation

`create > Animator`
![150|](https://i.imgur.com/fAhQbpp.webp)

---


以下是该课程章节的概括和次章节，使用 Markdown 格式输出：

### 08-01 - Unity 中的动画基础和编辑器

> TLDR: 介绍 Unity 中的动画基础，重点讲解使用 Animation Window 创建简单动画的方法。

---

#### Animation Window

 `Window > Animation > Animation` 

---

#### 创建动画文件

1. 选择场景中的GameObject
2. 在 Animation Window 中`Create`创建新动画文件.
3. 存储在专门的动画文件夹中。
4. `Add Property`选择要动画的对象属性，如 Transform 组件的 Position。


---


#### 设置关键帧

调整动画的总时长，`5*60` == 5s
![150|](https://i.imgur.com/dwAQ4VC.webp)

帧率 == 60
`「⋮」> Set Sample Rate ` (60fps)

---
#### 编辑动画曲线
曲线参考 [[Animation curve]] 缓动函数
(-- `Easing Functions Cheat Sheet` [easings](https://easings.net/))
![150|](https://i.imgur.com/CK7uFEM.png)


---
#### Animator Controller

![150|](https://i.imgur.com/1klsOFj.webp)



---


## 8. 创建和实现动画

TLDR: 本章介绍Unity中的动画基础、动画控制器和物理系统，包括创建简单动画、使用动画控制器管理多个动画片段，以及为游戏对象添加物理特性。

---

### 08-01 - Unity中的动画基础和编辑器

TLDR: 介绍了Unity中创建动画的基本方法，重点讲解了使用Animation窗口创建简单动画。

- Unity提供多种创建动画的方式
- Animation窗口是最简单的动画创建工具
- 演示了如何为场景中的椅子对象创建简单的移动动画
- 解释了如何添加动画属性、设置关键帧和调整动画时间线

---

### 08-02 - Animation Controller 动画控制器

TLDR: 讲解了动画控制器的作用和基本使用方法，演示了如何为多个对象创建动画并在一个控制器中管理。

- 动画控制器允许为一个游戏对象添加多个动画并基于状态进行切换
- 演示了如何创建多个椅子的动画并添加到同一个控制器中
- 解释了如何在动画状态机中连接不同的动画状态
- 介绍了如何设置摄像机以正确查看动画效果

---

在 Unity 中实现动画循环有以下几种方法:

1. 在动画导入设置中设置循环模式(Wrap Mode)为"Loop"。[[015 Understanding frequency]](https://discussions.unity.com/t/animation-loop/34663)[[02-04 时间轴进阶]](https://stackoverflow.com/questions/22809514/how-to-make-an-animation-clip-on-unity-to-loop)[[2016 奥巴马 3D Scan]](https://docs.unity3d.com/540/Documentation/Manual/LoopingAnimationClips.html)

2. 在动画窗口中找到动画剪辑,并将默认选项(Default)设置为循环。[[02-04 时间轴进阶]](https://stackoverflow.com/questions/22809514/how-to-make-an-animation-clip-on-unity-to-loop)

3. 如果无法直接编辑动画的循环属性,可以在项目窗口中找到该动画文件,并在检查器窗口中进行设置。[[02-04 时间轴进阶]](https://discussions.unity.com/t/how-do-i-stop-an-animation-looping/90663)[[015 Understanding frequency]](https://www.reddit.com/r/gamedev/comments/wreuwy/trying_to_stop_my_animation_from_looping_unity/)[[1956  Dartmouth workshop (达特矛斯会议)- 人工智能概念的诞生]](https://discussions.unity.com/t/animation-keeps-repeating/231243)

4. Unity 还提供了一些高级的循环优化工具,可以帮助确保动画循环的平滑过渡。[[2000_Thrift_Still Life in Nearly_KEY-W8S2HJ87]](https://docs.unity3d.com/540/Documentation/Manual/LoopingAnimationClips.html)[[1899 Nikola Tesla - Everything Is Light]](https://www.youtube.com/watch?v=WwCPOt0gMMw)[[1899 Nikola Tesla - Everything Is Light]](https://discussions.unity.com/t/how-to-make-an-loop-animation/793442)[[10000hour 定律(刻意练习) 的质疑]](https://docs.unity3d.com/Manual/LoopingAnimationClips.html)

总之,Unity 提供了多种方法来实现动画循环,开发者可以根据具体需求选择合适的方法。


---
Wrap Mode 是一个 Unity 动画系统中的属性，它决定了动画片段在播放结束后如何继续处理。  它可以设置为 Loop（循环）、PingPong（来回播放）、Clamp Forever（固定在最后一帧）等模式。  例如，如果您将一个动画片段的 Wrap Mode 设置为 Loop，那么该动画片段会在播放结束后再次从头开始播放。  

在较旧的 Unity 版本中，您可以在 Animation 窗口中直接设置 Wrap Mode。  然而，在较新的 Unity 版本中，您需要在 Inspector 中将 Animation Clip 设置为 Debug 模式才能访问 Wrap Mode 的设置。  此外，您也可以通过 Animation Import Settings 中的 Wrap Mode 属性来设置动画片段的循环模式。 

(Source:  [unity.com: Animation Loop - Questions & Answers - Unity Discussions](https://discussions.unity.com/t/animation-loop/34663/2))