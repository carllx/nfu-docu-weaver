## Reference

[[Source-Make a Game with Visual Scripting]]
w1 begin

---


### 3. 实现收集硬币功能
- 创建硬币对象
- Player 与 Coin 之间触发关系设为`Is Trigger` ，而不是碰撞效果. 
- 将 Player Tag 为"Player" 

![150|](https://i.imgur.com/p7ICKDW.webp)


---


#### 在Coin(硬币)对象上添加 Visual Scripting 
(暂时)
**Embedded Graph(嵌入式图) ：** 快速直接嵌入在特定的脚本机器（Script Machine），但无法在其他 GameObject (对象)中重用。
**Graph File(图形文件) ：** 图形作为独立的资产存在，可以在多个对象间共享和重用。


---


1. 使用 `On Trigger Enter` 检测玩家碰触
2. 增加保存的硬币计数
3. 销毁硬币对象

---

#### Rewarding 定义奖励
Script Inspector > BlackBoard 创建 Save 公共变量 `score` 
![](https://i.imgur.com/ql4XeqC.png)


---



![](https://i.imgur.com/7eAb18A.png)

---


Option, 或者, 仍然在 Player 中定义 Coin

![](https://i.imgur.com/jux8IJB.png)



---
W3 _ END
