
在本章中，我先走进 Graph Editor，动手体验了 Bézier 手柄的四种类型，并学会通过快捷键 V 在 Auto Clamp、Aligned、Free 与 Vector 之间切换，从而精确地塑造曲线形状。  
接着，我切换到 Timeline，使用 I 键为位置、旋转和缩放打关键帧，并借助自动记录按钮加速流程，同时用 Home、NumPad . 等快捷键管理播放范围 。

为了让动作真正“活”起来，我深入讨论了插值、时间控制与间距：通过在 T 菜单里切换 Bézier、Linear 与 Constant，我比较了加速减速、匀速与阶跃效果，并用运动路径直观地检查球体在空中和落地时的速度变化 。  
在阻塞阶段，我先用 Constant 插值锁定极端姿势，再加入 squash & stretch，利用缩放键 Alt + S 体现材料弹性，最终得到一个节奏清晰的 24 帧循环 。

随后，我进入曲线细化（splining）：隐藏无关通道，只保留 Z 位置与缩放曲线，借助向量手柄消除错误的 S 形缓动，让球在落地前始终加速；再通过轻微的关键帧错位和放大-缩小，增加节奏对比与吸引力 。  
我还探索了 Curve Modifier：Cycle 让动画无限循环，Noise 能快速做出相机抖动，而 Step 则带来定格动画般的风格 。

最后，我打开 Dope Sheet 与 Action Editor，认识到动作（Action）也是一种可在多个对象间共享的数据；通过复制、重命名或打假用户标记，我安全地管理了动画资产 。  
总之，本章从“如何记录一个点”到“如何用曲线塑造生命”，系统展示了 Blender 中物体动画的完整流水线，也为后续角色表演打下了坚实基础。

![bg fit left:50% vertical](https://i.imgur.com/tIQZfpA.webp)

