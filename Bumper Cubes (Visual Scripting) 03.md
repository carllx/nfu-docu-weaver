## Reference

[[Source-Make a Game with Visual Scripting]]


#####  Debug - 用户体验
 加 2-3 秒Delay(缓冲时间)
2. 可以添加动画过渡效果, 控制游戏节奏
1. 重新挑战的准备时间
3. 消除用户挫折感


---

```
如果挑战失败, 等待 2 秒, 重新开始游戏
```

- IF True(如果是), 添加 `Timer` 单元延迟2秒, ....

---

### Timer 节点

**输入端口**
- Start：开始计时器
- Pause：暂停计时器
- Resume：恢复已暂停的计时器
- Toggle：切换计时器的运行/暂停状态
- Duration：计时器持续时间(秒)
- Unscaled：是否使用不受时间缩放影响的时间

**输出端口**
- Started：计时器开始时触发
- Tick：每帧更新时触发
- Completed：计时结束时触发
- Elapsed：已经过的时间/ Remaining：剩余时间
- Elapsed %：完成百分比(0-1) / Remaining %：剩余百分比(0-1)

![bg fit left:30% vertical](https://i.imgur.com/gFAIedv.webp)


---

#### Issue - 陷入避免死循环 (重复的缓冲叠加)

**Issue:**  `Player` 可能会连续碰到多个 `Obstacle` , 反复触发失败条件(延迟 2 秒) ... 

**Solution:**  失败条件只触发一次.


---

```
如果挑战失败, (触发一次) , 等待 2 秒, 重新开始游戏
```

- 使用 `Control > Once` 节点, 确保只触发一次
 

![bg fit left:50% vertical](https://i.imgur.com/DnmfUX6.png)


---


### Once 节点

**Input 端口**
- 触发箭头：触发节点执行
- Reset：重置节点状态，允许再次执行

**output端口**
- Once：首次触发时执行一次
- After：首次触发后的所有后续触发都从这里输出

![bg fit left:50% vertical](https://i.imgur.com/OT2JPsf.webp)

---



### Player 如何与 Obstacle 相撞后, 停止运动? 

**方法1:** 终止驱动力, 以及后面的运算

用 `Toggle`, 终止 `Set Velocity` 的**Flow(流)** 

![bg  left:65% vertical](https://i.imgur.com/TEXOrix.webp)


---


### Toggle(Flow)节点

输入端口：

- 输入触发器(顶部箭头)：激活节点的主要触发输入
- On(Off)：当需要将状态设置为开启(关闭)时触发
- Toggle：切换当前状态(开→关 或 关→开)时触发

输出端口：

- On(Off)：当状态变为开启(关闭)时触发此输出
- Turned On(Off)：仅在状态从关(开)变为开时触发
- Is On：布尔值输出，表示当前是否处于开启状态



![bg left:35% vertical](https://i.imgur.com/a9Aklzm.webp)

---

参数设置：

- Start On：如果勾选，则节点初始状态为开启；否则为关闭

这个节点主要用于控制游戏中的开关状态，比如：

- 控制灯光的开关
- 切换游戏功能的启用/禁用
- 控制UI元素的显示/隐藏
- 管理游戏系统的激活状态
![bg left:35% vertical](https://i.imgur.com/a9Aklzm.webp)

---


#### 回顾 - 什么是Flow? 

- 触发箭头, 处理事件响应链
- 电池之间串联(并发)各功能模块, 一个节点执行完毕后，会通过Flow端口触发下一个节点
- 指导游戏逻辑的执行顺序, 实现条件分支和循环
- 管理游戏状态转换

---

Flow 类似推动生命的形式运行的能量.
Flow 类似 给"抽象素材", 引导, 串联拼凑成形式.(思维导图)


![bg fit left:50% vertical](https://i.imgur.com/VgLhSXB.webp)

---


**方法2:**  将推动速度 `Velocity`  设置为 0,  
将 `forwardSpeed` (Object Variable对象变量 ) 设置为 0.


![bg fit left:50% vertical](https://i.imgur.com/8XyOG3F.webp)

---
![bg fit](https://i.imgur.com/9ZE28u1.webp)

---
### 2. 添加胜利条件

(挑战)
```
如果, Player 碰到 Destination(终点) , 通往本关(暂时)
```

---

- 将 `Destination(终点)` 对象, tag(标记)为 "finish".
- Player 中添加碰撞检测
- 触发重启本关(后续会改为加载下一关)
![bg fit left:50% vertical](https://i.imgur.com/6duE5jh.webp)

---
### 答案 1


![bg fit left:85% vertical](https://i.imgur.com/qF9ttQm.webp)

---

### 答案 2

![bg fit left:50% vertical](https://i.imgur.com/89hPjeE.webp)



---

W1  _ END

