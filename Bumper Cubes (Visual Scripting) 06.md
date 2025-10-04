# Reference

[[Source-Make a Game with Visual Scripting]]



---


# E05 商店系统


![bg fit left:50% vertical](https://i.imgur.com/jQPTIvZ.webp)

在这一部分, 我们将创建一个商店系统, 玩家可以在其中使用收集的硬币购买不同的皮肤。我们还将实现观看奖励视频广告来解锁新皮肤的功能。


主要目标：
1. 创建可购买皮肤的商店界面
2. 实现皮肤购买和保存系统
3. Player 皮肤切换功能


---

## 1. 创建商店Scene(场景) 
- 复制 start scene：`Control + D`
- 重命名为 "Store"
- 打开新场景
![bg fit left:50% vertical](https://i.imgur.com/DFGBKoH.webp)

---


## 2. 设置商店Title(标题)
Canvas/Text 重命名为 'Store'
- 修改顶部Text(文本)为 'Store'
- 调整锚点位置至顶部
- 向下微调位置

![bg fit left:50% vertical](https://i.imgur.com/vx85dqK.webp)


---



## 3. 创建商品列表
- 新建 `GameObject > Empty`(空)  作为`List` Container(列表容器)
- 添加布局组件选择
- 选择 Horizontal Layout 组件

![bg fit left:50% vertical](https://i.imgur.com/iXOp3IZ.webp)


---

### 说明: Layout Component (布局组件)
 * Horizontal Layout：单行布局
  * Vertical Layout：垂直布局
  * **Grid Layout：多行布局**
![bg fit left:50% vertical](https://i.imgur.com/0KXRNrc.webp)



---

## 4. 创建商品项
- 创建 UI Image 对象
- 设置 Color 蓝色皮肤
- 重命名为 'blue,' 或其他
- (阵列3 个作为布局参考,稍后删除)
![bg fit left:50% vertical](https://i.imgur.com/Q1LFubN.webp)

---


## 5. 调整布局设置
- 设置间距为 20
- 选择 Upper Center 对齐方式
- 设置 Rectangular Transform 尺寸为 100x100
- 关闭 Child Force Expand 选项 中的 `Width`
![bg fit left:50% vertical](https://i.imgur.com/u9SjWre.webp)

---


- Anchor(锚点) 居中平铺
(Alt 键 可同时设置位置)
(删除其余三个Blue)
![bg fit left:50% vertical](https://i.imgur.com/qEyd8s6.webp)

---

## 6. 添加价格显示

### 复用 UI Coin 
- 从 level 1 Scene(场景)复用 UI coin 对象
- 粘贴到 coin shop 场景的 UI background 中
- 并内嵌在 Blue 对象容器中.

![bg fit left:50% vertical](https://i.imgur.com/VumYItP.webp)

---


### 修改UI Coin 
- 在 blue 商品中添加价格显示
  * 设置位置为右下角
  * 缩放比例设为 0.7
  * 修改文本显示为 10 coins


![bg fit left:50% vertical](https://i.imgur.com/hivSiki.webp)


---
### Script(Graph) 处理商店系统


* 移除原有的脚本(Start Scene)

![bg fit left:50% vertical](https://i.imgur.com/whYmEfP.webp)




---

商品添加 Graph 脚本

![bg fit left:50% vertical](https://i.imgur.com/exKzJXj.webp)

---

- 暂在Blue商品(GameObject)添加初始变量, 供脚本调用：
  - ID 
  - Color (Color, 任意)
  - Price (float, 1)
  - priceTextObject (GameObject, 拖入Text对象)


---


![bg fit left:50% vertical](https://i.imgur.com/QitaHoa.webp)



---



![](https://i.imgur.com/YfKJksI.webp)



---

### Text's Graph script

1.`on Start Event`, 当游戏开始, 触发以下逻辑...

2.`Set Color `节点设置 Color 
- 使用Get/Set Color节点设置颜色

3.`Set Text(TMP)`节点显示价格
- 通过Get Variable节点获取Prices变量;
- (必须将数值到字符串的转换逻辑)
- Get Variable节点获取Text(GameObject)



---


![](https://i.imgur.com/JXpBv1g.webp)


---


1 初始化商品配置
- 创建其他 Item(商品), 通过复制
- 重命名游戏对象以便管理
![bg fit left:50% vertical](https://i.imgur.com/2GBrEdU.webp)

---

2 为每个商品对象设置唯一 ID

- skin01, ID = `sk1`
- skin02, ID = `sk2`
- skin03, ID = `sk3`
- skin04, ID = `sk4`




---



### ID 让世界井然有序

对象(GameObject)的唯一标识
  - 每个人都有独特的身份证号码
  - 图书馆中每本书都有特定编号
  - 某地的邮政编码

---

```bash
# 互联网世界的应用, 以YouTube视频ID示例:
https://www.youtube.com/watch?
v=5XVvwPYuUCc
&list=PLrw9uFU6NhfPCiMfDLsL-ccDMCMJ0bMJk
&index=5
```

URL中的信息解析
  - **v=** : 视频唯一标识符
  - **list=** : 播放列表标识
  - **index=** : 视频在列表中的位置
  

---

2 设置商品颜色
- 为不同商品配置颜色值

---


3 配置各商品价格：
- skin01,  Price = 0
- skin02,  Price = 10
- skin03,  Price = 20
- skin04,  Price = 25


---

4 测试验证
- 进入播放模式
- 确认每个商品显示正确的颜色
- 验证价格文本正确显示
- 检查所有商品 ID 是否正确关联

![bg fit left:50% vertical](https://i.imgur.com/zepj4nx.webp)



---


## 7. 实现皮肤购买逻辑

### 监听Click Event(点击事件)
- 在图形界面中添加 `On Pointer Click` 事件监听器
![bg fit left:50% vertical](https://i.imgur.com/khsswcw.webp)

---


### 判断购买力

- `If` 单元对比`Saved/Score` 和`Object/Price`(商品价格)
 ( `Saved/Score` 已保存的变量 `Score` )

![bg fit left:50% vertical](https://i.imgur.com/h8QBQSW.webp)


---
### 3. 如果金额足够, 更新购后余额

- 使用 `Set Variable` 更新金币数量 (Score - Price)
![bg fit left:50% vertical](https://i.imgur.com/beJVkPZ.webp)

---

### 4. 在皮肤选择后添加 `Load Scene` 单元
- `Save` 创建颜色变量储存皮肤 `playerSkin`
- 设置类型为 Color
- 加载第一关
![bg fit left:50% vertical](https://i.imgur.com/6wGx2bK.webp)



---

## 6. 用Saved(存档) 的 Color 驱动 Player 的材质

- 进入Player 预制体图形界面
- 添加 `On Start` 事件
- 使用 `Get Material` 获取网格渲染器材质
- 使用 `Set Color` 应用保存的皮肤颜色

![bg fit left:50% vertical](https://i.imgur.com/JLH4pOm.webp)


---

理解 Color 的驱动过程

1. 商店系统的颜色若改变后
2. 存档颜色(保存当前Player的颜色状态)
3. Player 的Material (材质) 改变


---


### 5. Item 记录已购 ID

![bg fit left:50% vertical](https://i.imgur.com/4eHYNEe.webp)


---

### 6. Item 判断已购

![bg fit left:50% vertical](https://i.imgur.com/tOKoc5H.webp)


---



## END

设计商店如何访问.

- 创建按钮访问
- 完成后访问


---

参考 As Level Complete

![](https://i.imgur.com/LO9ZjXa.webp)


---


![](https://i.imgur.com/WNW8lYv.webp)


---


![](https://i.imgur.com/aWFggZI.webp)




---



Next, 理解 List 
- List是有序的集合(es.书柜)
- 可以存储多个相同或不同类型的元素
- 使用索引(从0开始)访问元素

```c#
List<string> mySkins = ['skin1', 'skin2','skin3']
```
![bg fit left:50% vertical](https://i.imgur.com/F0gmyxT.webp)


---


- List是可变的,可以随时添加、删除、修改元素

