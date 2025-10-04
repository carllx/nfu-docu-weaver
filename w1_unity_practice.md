---
marp: true
---

[[Source-Unity 2023 Essential Training]]


---
### 评分体系与标准

1. 成绩登记方式：百分制
2. 评分体系与标准（总计100%）

---

###### A. 平时成绩（50%）

- 出勤率（15%）：全勤15分，每次无故缺席扣2分。
- 课堂参与度（15%）：根据学生在课堂上的表现评分，包括主动回答问题、参与讨论的频率和质量。
- 作业（20%）：每次作业按指定时间递交，根据完成质量给分。

---
#### B. 过程性考核（20%）

考核课程前半部分的理解和展示创作思路包括以下三部分：
  - 课程理论应用 （8分）
  - 课程作品 （6分）
  - 构思展示: 排版,  创新性, 主题相关性. （6分）

---

#### C. 期末考核（30%）

期末作业, 评分标准包括：
  - 选题创新性（10分）
  - 主题背景分析（5分）
  - 用户体验（5分）
  - 最终渲染效果（10分）

---
## Unity3D 介绍

<!-- 
Unity是实时3D开发的一站式解决方案,本课程将带领学习者从零开始掌握Unity。-->


---

### 01-01 - Visualize a house project with Unity 2023

1. 安装与设置
2. 搭建场景
3. 添加材质
4. 制作特效
5. 渲染

<!--

1. **安装与设置**: 如何下载、安装Unity软件，并进行一些基础的设置。

2. **搭建场景**: 接下来，使用Unity的各种工具和资源，搭建出你想要的3D场景，比如森林、城市、房间等等。

3. **添加材质**: 场景搭建好后，为场景中的物体添加不同的材质，比如木头、金属、玻璃等等，让你的场景更加逼真。

4. **制作特效**: (0:32-0:33) 添加灯光、粒子特效等等，让你的场景充满活力！

5. **渲染**: (0:33-0:35) 最后，制作的场景渲染成图片或者视频，分享你的方案

-->


---

### 01-02 - 为什么选择 Unity

- 社区庞大且活跃
- 创作形式多样 (跨平台, VR, AR   )



---

### 01-03 - 如何使用 Exercise files

![150|](https://i.imgur.com/KE8FkcN.jpg)

---

🔍 在exercise files文件夹中找到当前章节的 文件夹
`Exercise Files > Resources> Ch*_xxx`

![](https://tingwu.aliyun.com/api/editor/get/v2/524379/0/17597cd25021447294d903054ae565b2/bebe65c19ba44cb2ba4e232c56719769.png)

---
- 安装 Unity Hub, 和Unity编辑器
- 🖥️ 打开Unity项目,显示项目文件夹位置
 
![](https://tingwu.aliyun.com/api/editor/get/v2/524379/0/cbe5a7152f4a4bb0bf4f522126c0e084/bae55edabc6241edba217b8f4064413c.png)

---


• 🔍 在 exercise files 文件夹中找到当前章节的 文件夹
• 📁 复制文件夹中的assets文件
• 📌 将复制的assets文件替换到你的Unity项目文件夹中

![](https://tingwu.aliyun.com/api/editor/get/v2/524379/0/ab3d7a03502b48029fd37043f824bd5b/7db55a45b36c4b5abefa7d3646e3db91.png)

---

## 02 设置Unity项目

了解Unity项目文件结构


---

### 02-01 - 安装Unity

1. unity.com, 下载, 安装Unity Hub 
2. 安装Unity Editor, 选择  LTS (长期支持版) 
3.  硬件要求: GPU性能

> 应用基础部分范例先安装, 2022.3.1f1(LTS)


---


### 02-02 - 项目设置概述

---
#### 通过模板创建新项目

3D 几个管线模板对比

| 渲染管线  | 目标平台                  |
| --------- | ------------------------- |
| 3D (Built-In) | 基础3D项目            |
| Universal 3D  | 2D和3D项目，从移动设备到高端主机和PC |
| 3D HDRP       | PS4, PS5, XBox One, Xbox Series, VR. 包含物理基础光照、高级材质、光照和后期处理、实时光线追踪、离线路径追踪 |


---

选择3D HDRP模板
URP 侧重于跨平台兼容性和性能，HDRP 则专注于高保真视觉效果。
HDRP 适用于需要极致视觉效果的游戏和动画项目,但需要更强大的硬件支持(更好的GPU性能)和更多的开发时间.

---
### 02-03 - 文件管理和项目组织

当我们保存Unity 项目时, 会写入相应的文件到我们的电脑
_Project 目录与 储存文件的对应关系_

![](https://tingwu.aliyun.com/api/editor/get/v2/524379/0/905eedabf33948d6b7f7db0437474019/9db626680b9f426e9218dbf764cf3f33.png)


---

Assets: 存放所有项目资源
- Library: 由 Unity 自动生成，存放项目相关的元数据和缓存文件
- Logs: 存放Unity日志
- Packages: 存放项目所需包
- ProjectSettings: 项目设置
- UserSettings: 用户设置

 ---
 
如果你想让其他人在上面工作, 备份或分享项目时,需要复制以上文件夹

BUT ==**除Library 和 Temp外**==



---


## 3. 了解Unity界面


- [ ] 探索Unity界面的主要部分,
- [ ] 学习如何自定义布局
- [ ] 导航场景,
- [ ] 如何利用Unity文档和路线图。


---


### 03-01 - Unity用户界面介绍

#### Unity 界面介绍

Unity 中有四个主要部分：
  
‒ Hierarchy (层级视图) 
‒ Project (项目视图) 
‒ Inspector (检视器) 
‒ Scene (场景视图) 

---

Project(项目)

-  Assets 小心误删
-  Console 解决问题的线索(不显眼但重要). 
 

---

Scene (场景)

左方工具 - Transform 控制
上方工具 - 视图控制选项

<!--
-  左侧的工具栏 - 的工具，可以对游戏对象进行移动、旋转、缩放等操作。
-  上方的工具栏 - 包含视图控制选项，可以切换不同的视图模式。
-->

---

Inspector(监视器)

-  修改游戏对象的属性。 


---


Hierarchy (层级视图) 

-  Hierarchy 中的对象与 Scene (场景视图) 中的对象是对应的。 

> 演示: 通过 Hierarchy 修改对象属性. 


- [ ] 在 Hierarchy 中选择一个对象，在 Inspector 中修改对象的属性



---

Game

-  窗口顶部的工具栏包含游戏控制、层级控制和布局控制等选项。
-  切换到 "Game" (游戏) 视图点击播放按钮，可以运行游戏场景。

---


### 03-02 - 自定义UI

通过Layout菜单可以自定义Unity界面布局,以适应个人需求。

![](https://tingwu.aliyun.com/api/editor/get/v2/524379/0/b66917515e844dd6a8abc375dc653557/f715d57c8b2e4e10a9b61e49387ec88d.png)

---



### 03-03 - 导航的6个组合键

- 右键 + W/A/S/D 键：控制场景视角的前进、后退、左移和右移 
- 右键 + Q/E 键：控制场景视角的上升和下降


---

### 03-04 - Unity文档

Help > Unity Manual  是查命令和解决问题的重要资源,可通过Help菜单访问

![](https://tingwu.aliyun.com/api/editor/get/v2/524379/0/80a90d95095b4177beb416fc58a90e05/c68505e016014007b9208fd23f8bbc2f.png)


> 使用 AnythingLM 创建导师.


---

### 03-05 - Roadmap (路线图)

🔍 在Google上搜索"Unity Roadmap"
🌐 访问Unity官方Roadmap页面: unity.com/roadmap, 了解Unity未来的开发计划(es AI)


---



## 4. 使用 Asset 

介绍Unity中的 GameObjects 
- GameObjects 创建
- Assets Store [[#04-02 - Asset Store 和 Package Manager]]
- 包管理器,
- 导入资产的最佳实践和方法。

---

### 04-01 - GameObjects 创建

**万物皆对象**


🖱️ 在Hierarchy 场景层级中右击，选择"创建空物体"（Create Empty）来创建一个新的游戏对象。

遵循编程语言面向对象的规范, 属性..

👀   Empty 有Transform 属性.


---

荷兰哲学家 Baruch Spinoza:

> 物质、属性和模式
> Substance, attributes, and modes:


现代哲学的一个检验点，因此可以说：你要么是`Spinozist` (斯宾诺莎主义者)，要么根本就不是哲学家。





---
## 04-02 - Asset Store 和 Package Manager

Unity中有两个重要工具用于获取资源和包：
Asset Store和包管理器

---
### 1. Package Manager

🔍 探索该项目中已安装的包和可安装的包
`Window > Package Manager` 打开包管理器
<!--  包管理器是Unity该项目已有的必要包，也可手动添加或移除。-->

---

### 2. Asset Store

Asset Store是Unity官方的资源商店，提供各种插件、3D模型和材质等，可大大提升开发效率。
`Window > Asset Store` 

> [!info] 
> 第一次打开资源商店时，您会看到此消息：
> 资源商店已移动。您只需单击“始终从菜单中的浏览器中打开”，
> 然后单击“在线搜索”。



---

### 04-03 - 导入"干净的"资产

以保证性能和质量, 在Assets 导入是的检查一下关键要素的规范: 
- 模型多边形点量、2k 以下, 清晰拓扑, 布线合理"整洁"。
- UV映射、坐标, Color, AO, Normal 等一致的正方形 """$>=2^4$ """
- 纹理分辨率
- 动画等简洁("关键"帧, 避免冗余). 
- 对齐原点(0,0,0), 避免导入模型后有偏移.


---
#### Unity支持的文件格式

![](https://tingwu.aliyun.com/api/editor/get/v2/524379/0/de7d6346c452417ab113f62618a45018/ff339f5cc2664d90a50b13df6336159a.png)
   

- FBX: 最常用的格式,支持在同一文件中包含纹理、材质、动画和3D网格。
- 其他格式通常只导入模型本身。




---

#### Unity支持的纹理格式:

![](https://tingwu.aliyun.com/api/editor/get/v2/524379/0/c7049cc551f3418684d0257df10fb954/1c69f89ea51d4f5fb432cc89b8a14308.png)


   - PNG: 压缩无损, 支持alpha通道。(推荐, 适合用于web项目)
   - TGA: 无损, 非压缩, 支持alpha, 适合在运算过程中使用,因为它的保存速度更快,并且可以更方便地处理透明通道。 [7](https://discussions.unity.com/t/tga-vs-png/635055)
   - PSD和TIF: 可以保留图层导入。


---

### 04-04 - 将资产导入Unity

导入资产:
- 可通过拖放
- 菜单或文件夹导入资产,导入后可将其放置到场景中使用。


---
万物皆空




<!--  

➕ Empty 可以添加组件, 点击"添加组件"（Add Component）为游戏对象添加新的功能。

🔍 在组件搜索栏中搜索并添加特定组件，如"光源"（Light）或"网格渲染器"（Mesh Renderer）。

🗑️ 如需要，可以从游戏对象中移除不需要的组件。

我们看到虽然是空对象，它能构成任意实体。因此，从这个例子可以了解, 数字世界的创建, 与禅宗思想的核心 "万物皆空"以及现代宇宙学中"宇宙从无到有"的观点相呼应。

-->
---
