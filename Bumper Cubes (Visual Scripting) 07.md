

# E06 触摸控制
------------------------

在这一部分,我们将实现三种不同的触摸/移动控制方式:UI按钮、虚拟摇杆和拖拽/滑动。这将使我们的游戏能够在移动设备上正常运行。

# E07 Unity广告集成
------------------------

在这一部分,我们将集成Unity广告SDK,以便在游戏中显示横幅广告、插屏广告和奖励视频广告。我们将创建一个可重用的广告管理系统。

# E08 广告投放策略
------------------------

在这一部分,我们将讨论如何在游戏中有效地投放广告,以实现最佳的玩家体验和盈利。我们将实现一些策略,如限制插屏广告的频率,以及如何将奖励视频广告与游戏内购买相结合。







---









#### Coins Counter(UI)
#### Scene - Next
Animating UI -- [youtube](https://www.youtube.com/watch?v=c9B5W2heiWE&list=PLrw9uFU6NhfPCiMfDLsL-ccDMCMJ0bMJk&index=4?t=41)[youtube playlist](https://www.youtube.com/playlist?list=PLrw9uFU6NhfPCiMfDLsL-ccDMCMJ0bMJk)
通过setActive 启动动画 [[Basic Tips#Find inactive GameObject]]
![](https://i.imgur.com/0kZhaNi.png)


## Script Variable

![bg fit left:50% vertical](https://i.imgur.com/qaF21WC.webp)

从 Player 的 Variable (Component组件) 中获取` forwardSpeed` 和 `sideSpeed` 变量，并将其用于 FixedUpdate 事件函数中计算 Player 的移动。


---

或者, C# 脚本也可以自定义变量, 不需要通过  Variable (Component组件) 获取` forwardSpeed` 和 `sideSpeed` 变量. 

![bg fit left:50% vertical](https://i.imgur.com/TqAuhtr.webp)

