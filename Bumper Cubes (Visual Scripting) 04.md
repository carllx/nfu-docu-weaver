## Reference

[[Source-Make a Game with Visual Scripting]]

---


## E03 UI设计基础 - UI 和 关卡 Levels

在这一部分,我们将添加 UI 和 Levels 关卡系统。我们将
- 创建开始场景和UI界面
- 设计多个游戏关卡, 实现关卡之间的转换
- 完善计分系统, 添加一个显示收集硬币数量的UI元素。


(Source:  [aliyun.com: E03_How to Make a Game with Visual Scripting - UI & LEVELS - Unity 2021 Tutorial (Bolt)](https://tingwu.aliyun.com/doc/transcripts/dej8nbxwy6a4qpog))

---


#### 1. 创建开始场景
- 在 Scenes 文件夹创建 Start 场景

---


####  2. 添加UI背景图片
![fit left:50% vertical](https://i.imgur.com/WqlJAsA.webp)
- 选择 `Hierarchy > UI > Image`
- 在 Game 视图中调整
- 使用 Stretch 选项铺满窗口


---


#### 3. 设置Start UI文字


![ fit left:60% vertical](https://i.imgur.com/U6yJqOx.webp)

-  添加UI文本: `Hierarchy > UI > Text`
- 设置尺寸: w800, h100
- size: 80
- Align: 居中

---

导入自定义字体
- 创建 Fonts 文件夹
- 导入 Roboto 字体
- 应用字体设置


推后 [[Unity Fonts(TMP) 中文字体]]

---

#### 4. UI 自适应缩放设置
1. 选择 Canvas 组件
2. 更改 UI Scale Mode 为 Scale with Screen Size
3. 选择 Height 作为参考
![bg fit left:50% vertical](https://i.imgur.com/wKt6FuM.webp)

---


### 场景管理系统


实现点击开始界面跳转到第一关卡

---


1. 设置开始场景的UI
   - 选择并重命名背景图片`Image`为 `UI background`
   - 添加组件 Script Machine
   - 选择 Embedded 选项
   - 打开  Graph

![bg fit left:50% vertical](https://i.imgur.com/wukrpDX.webp)

---


2. 配置鼠标输入响应, 添加点击事件触发场景加载
   - 添加 On Mouse Input 单元
   - 添加 Scene Manager Load Scene 单元
   - 设置 Scene Build Index 为 1
![bg fit left:50% vertical](https://i.imgur.com/apuwVA6.webp)

---


3. 场景文件管理, 设置构建索引顺序
   - 进入 Assets > Scenes 文件夹
   - 将原场景重命名为 Level 1

![bg fit left:50% vertical](https://i.imgur.com/qY0ddMk.webp)


---


4. 构建设置配置
   - 打开 `File > Build Settings`
   - 添加场景到构建列表：
     * Start Scene (Build Index 0)
     * Level 1 (Build Index 1)
![bg fit left:50% vertical](https://i.imgur.com/TXOxwSb.webp)

---



关键技术点：
- Script Machine 组件
- On Mouse Input 单元
- Scene Manager Load Scene 功能
- Build Settings 场景管理
- Scene Build Index 索引系统


---


## 关卡管理
TLDR: 创建多个游戏关卡，使用 Prefabs(预制体)管理重复元素，实现关卡进度系统。


---

### Prefab 管理
- 为游戏对象创建预制体
- 配置预制体属性和行为
- Prefab 使用 Graph(图形化编辑器)管理逻辑, 不用 Embed.

---

在 Script Machine 中编辑器类型选择方式:
### Embed vs Graph
Embed 适用于:
- 简单一次性的场景特定逻辑
- 仅在单个 GameObject 内使用的功能
- 快速原型开发和测试
- 简单的交互行为实现

Graph 适用于:
- Prefab 中需要的可重用逻辑
- 多个对象间共享的复杂功能
- 需要长期维护的系统
- 独立资源形式的模块化功能


---

### 4. 为各个关卡创建 Prefab
1. 创建 Prefab 文件夹
2. 制作以下预制体:
   - **金币 (Coin)**
   - 障碍物 (Obstacle)
   - 终点线 (Finish Line)
   - 玩家 (Player)
   - 地面 (Ground)
   - 关卡基础 (Level Base)

![bg fit left:50% vertical](https://i.imgur.com/D2JbUav.webp)

---

### 5. 设计递进难度的关卡
1. 复制 Level 1 创建更多关卡
2. 使用正交视图设置障碍物和金币位置
4. 调整难度递增

![bg fit left:50% vertical](https://i.imgur.com/UuiHkxp.webp)


---
别忘了
![bg fit left:50% vertical](https://i.imgur.com/bEL4nsj.webp)

---

挑战: 

```
如果赢了, 进入下一关.

```

---

![bg fit left:50% vertical](https://i.imgur.com/kPlMTc6.webp)
`Set Kinematic` ?????
该 GameObject(对象) 受动画(关键帧)控制移动而非物理引擎作用.

---


### Player 停止活动  方法 3 
Player 设置为 "is Kinematic" 
(不用手动勾选, 该图只是示意)
![bg fit left:50% vertical](https://i.imgur.com/OfMpesK.webp)

- 最简单方法停止 Rigidbody (刚体)运动, 只需一行代码
- 可随时切回 Dynamic 模式恢复物理效果

---


### 6. 创建 END 场景转换
1. 设置 END 场景加载逻辑
1. 配置 Build Settings, 添加所有场景到构建列表

![bg fit left:50% vertical](https://i.imgur.com/RsuJAvr.webp)
![bg fit left:50% vertical](https://i.imgur.com/l8jaLLY.webp)


---


## UI 计分系统
1. 在关卡基础预制体中添加计分UI
2. 设置计分显示位置和样式
3. 实现金币计数更新逻辑


---


### 1 修改 Level Base 预制体设置
- `>`进入预制体编辑模式
![bg fit left:50% vertical](https://i.imgur.com/6uK6wn9.webp)


---


### 2. Set Canvas 'Scale With Screen Size'
- 将 UI Scale Mode 设置为 Scale With Screen Size，使用Height(高度)模式
![bg fit left:50% vertical](https://i.imgur.com/EyQYG3x.webp)

---


### 3. Coin's UI
- 添加 `UI > Image` 组件并选择默认图标 `knob`
- 将图像颜色改为黄色
- 将图像定位到左上角，尺寸设为 50x50

![bg fit left:50% vertical](https://i.imgur.com/mNW18TK.webp)


---


### 4. Text's UI
- 在 Image 内添加 UI > Text 组件
- es. 设置文本左对齐，Position X 设为 140
- es. 高度设为 60，并居中
- es. 字体大小设为 30, 字体为 Robot Light


![bg fit left:50% vertical](https://i.imgur.com/em8HZuP.webp)

---

### 5. Text 's counter logic 计数逻辑
- 为 Text 添加 Script Machine 组件
- 切换到 Embedded 模式并添加图表
- 使用 Set Text 节点
- 在 Start 和 Update 中设置文本
- 从 Saved Variables 中获取金币数量
- 使用 Integer to String 单元转换数值


![bg fit left:50% vertical](https://i.imgur.com/rLEQc1s.webp)

---

创建 END 场景

---


别忘了

- 将 End Scene 添加到 Build Settings

![bg fit left:50% vertical](https://i.imgur.com/Su2EEMk.webp)

---


## 优化场景 Lighting 设置


---

- 添加场景雾效
  - 打开 `Window > Rendering > Lighting`
  - 在 Environment 中启用 Fog
  - 将雾色设置为背景色
  - 调整雾密度

![bg fit left:50% vertical](https://i.imgur.com/MxwoadY.webp)

---

- 在所有关卡中同步雾效设置


![bg fit left:50% vertical](https://i.imgur.com/MxwoadY.webp)




---

5 构建游戏
- 打开 Build Settings
- 选择 Windows 平台
- 创建 Builds 文件夹
- 点击 Build and Run

![bg fit left:50% vertical](https://i.imgur.com/LG3StBC.webp)


---



## 思考

如何在不同的Level  中设置不同 Player 的 Forward Speed ??

![bg fit left:50% vertical](https://i.imgur.com/uqu8JWO.webp)


---


END










