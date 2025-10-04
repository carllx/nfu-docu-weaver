## E02 游戏循环关卡 Level
## Reference

[[Source-Make a Game with Visual Scripting]]


---

![bg fit left:50% vertical](https://i.imgur.com/x90NnP2.webp)

常用数据类型:
- **Integer (整数)** 用于计数或排序，可以表示正负数。
- **Float(浮点数)** 用于测量，可以表示正负数。
- **Boolean(布尔值)** 只有真假两种值，用于表示对象状态或控制脚本流程。
- **String(字符串)** 是可变长度的文本，用于显示消息或动态文本。
- **Enum(枚举)** 是一组预定义值的类型，用于指定单一值。
- **Vector(向量)** 是2、3或4个浮点值的组合，用于表示位置、速度等。




---

![150|](https://i.imgur.com/JomtSEU.webp)


---


15 分钟术语词汇小测
![bg fit left:50% vertical](https://i.imgur.com/COEjLPS.webp)

---
### 1. 添加失败条件

实践目标:
1. 添加失败条件
1. 创建游戏循环
3. 添加胜利条件
4. 实现收集硬币功能

创建伪节点 "Group(组)"
> (Tips) 将现有的移动逻辑分组 `Ctrl + Drag`

![bg fit left:50% vertical](https://i.imgur.com/PqJkXJS.webp)

---
### 人类语言翻译成编程语言

```
"如果 Player 出轨, 游戏重新开始."
```

---


```
如果 Player 越出轨道, 游戏重新开始.
```
或者

```
如果 Player 掉落, 游戏重新开始.
```



---


```
如果
Player 的 Y 轴  
< 0, 

游戏重新开始.
```


---


![bg fit left:50%](https://i.imgur.com/8hulPDh.webp)

#### a) 掉落失败:
- 添加 `if` 判断 Player 的 Y 轴位置
- 使用 `Transform` 组件获取立方体位置
- 用 `Less Than` 单元检查 Y 值是否小于 -1 
- 如果为 True , 重新加载游戏(当前场景)





---

重新加载当前场景
- `Scene Manager / Get Active Scene`, 输出 当前活动的 Scene
- `Scene / name(get)`, 从 scene 对象中获得的名字
- `Scene Manager / Load Scene`, 加载 xxx 名字的 scene
![bg fit left:50% vertical](https://i.imgur.com/KoifuwF.png)
![bg fit left:50%](https://i.imgur.com/68QH1fy.webp)


---

```csharp
// 如果 Player 的 Y 轴  < 0, 
if (transform.position.y < -1) 
{
	// 那么重新加载游戏. 
	ReloadScene();
}
```

---
如果重新加载Scene 后照明不同:

> [[(Tips)Lighting 没有保留, when Reload Scene]]

- 可忽略, 导出游戏没问题. 
- 可以, 创建新光照设置: `Window > Rendering > Lighting`
![bg left:50%](https://i.imgur.com/6Eni0zR.webp)


---
#### b) 碰撞障碍物失败:

```
如果 player 碰到障碍物, 就重启游戏
```



---

```
碰到"障碍物"
```


> Player 在游戏过程都碰到什么? 
- 使用 `On Collision Enter` 函数
- 结果: `Floor` 和 `Obstacle`
![bg fit left:50% vertical](https://i.imgur.com/IUtKulD.webp)


<!-- Console 查找解决问题的线索  -->

---

识别 Obstacle 
![bg fit left:50% vertical](https://i.imgur.com/BEUMPd1.webp)

![bg fit left:50% vertical](https://i.imgur.com/d8dQwMN.webp)



---
![bg fit left:50% vertical](https://i.imgur.com/PQBrnzq.webp)
怎么办?
Obstacle  
Obstacle (1)  
Obstacle (2)
Obstacle (3)
Obstacle (4)

---
🤯🤯🤯🤯🤯🤯🤯

![bg fit left:50% vertical](https://i.imgur.com/GJ6MeEG.webp)







---

- 为 Obstacle(障碍物) 添加 "enemy"(敌人) 身份标签. 
- 使用 `Compare Tag` 检查碰撞对象是否为 "enemy" 身份标签的 GameObject 
- IF True(如果是), 重新加载场景

![bg fit left:50% vertical](https://i.imgur.com/6lCYTK6.png)
![bg fit left:50% vertical](https://i.imgur.com/dElDhoG.webp)





---

END
