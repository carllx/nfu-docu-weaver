

## w1 Practices


练习素材: 链接: https://pan.baidu.com/s/1lks8JJvST54pqob9O-7AHQ?pwd=tmwv 提取码: tmwv 

---
## 2 Adobe Premiere Pro 入门指南

---

### 2-2 项目设置

介绍如何在Premiere Pro中
- 创建新项目, 设置项目保存位置
- 项目设置中, 配置GPU
- 项目设置中, 设置临时文件(Scratch Disks)

---

#### 新建或打开项目

`File > Open Project...`

`File > New > Project...`

![](https://tingwu.aliyun.com/api/editor/get/v2/524379/0/7559997a95724b46a81e24419bd75539/ad19f72c99e74ef48b3ce31be8aaeece.png)

位置 (Location): 设置项目位置
![](https://tingwu.aliyun.com/api/editor/get/v2/524379/0/d6a4109f5abf459088af9db825ad3cb5/ba54516c26494b629572705aa3fbf284.png)



---

#### 设置显卡(GPU)

**加速渲染**: `File > Project setting > General`视频渲染选择正确的显卡类型
> 前提: 如果您的计算机有独立显卡，请确保在“渲染器”选项中选择"Mercury Playback Engine GPU 加速 (CUDA)"

---

#### 设置Scratch Disks(暂存盘): 

`File > Project setting > General > Scratch Disks` 设置**临时文件缓存**在其他硬盘驱动器上。

> 前提: 如果你的第二硬盘闲置空间比默认 (C 盘)缓存大

---

### 2-3 理解Premiere Pro布局并设置工作空间

---

##### 工作区(桌子), 预设的选项卡

![](https://tingwu.aliyun.com/api/editor/get/v2/524379/0/0e5972d6a49442bf855be998cbeccfbb/34917a442ffd4f58b7b86b4066a26bb4.png)


---
#### 自定义工作区

关闭 , 拖放, (恢复),  保存面板

---

##### 关闭一些不常用的窗口

![](https://tingwu.aliyun.com/api/editor/get/v2/524379/0/07098a0e66334aa799e44417d123eea5/fa70a123e3f345c68479787ae509dd01.png)


---

##### 拖动面板

---

##### 复原预设

`Windows > Workspace`
![](https://tingwu.aliyun.com/api/editor/get/v2/524379/0/b7b2c2b889a740a4bb1e28f44ac3f399/739e72f659bf44e2ae89a2b761b2772f.png)


---

### 3-1  Save as new Workspace

`Window > Workspace`

![](https://tingwu.aliyun.com/api/editor/get/v2/524379/0/8127f7ccb69e41b381de0a9db30cf14a/5cbd7fb6e3e347bd93d741f9697d3dc3.png)

---

#### Edit Workspaces..

`Window > Workspace > Edit Workspaces..` 

重新排序,  删除 或者隐藏

![](https://tingwu.aliyun.com/api/editor/get/v2/524379/0/a3606945350b4c8f8203dedcacab8a5c/451236c570fa479a9a59594c87402871.png)


---

## 3 偏好设置

复习

项目的设置
`File > Project Setting`  

- [x] `File > Project setting > General > Rendere`
- [x] `File > Project setting > Scratch Disks`


偏好设置

`Preferences > Setting` 操作环境(Premiere )的设置

- [ ] `Preferences > Setting > Auto Save`
- [ ] `Preferences > Setting > Media`
- [ ] `Preferences > Setting > Memory`
- [ ] `Preferences > Setting > Media Cache`



---
### 3-2  Auto Save`


> 编辑了两个小时的视频，
> 还没来得及保存，
> Premiere Pro 突然崩溃了！

必须做到:
1. 养成手动保存`Ctrl S` 的好习惯.
2. 设置自动保存.

<!--  
不要说: "作业迟交, 是因为"
不要拖累团队

-->


---

![](https://tingwu.aliyun.com/api/editor/get/v2/524379/0/f7cea12ad1454876a8d12ec37164ba66/6fe392077cf242a7b20a35c5eab29b48.png)

自动保存功能的重要性，建议每6-7分钟进行一次自动保存

---


#### Media(媒体)

`Preferences > Setting > Media`

问： 为什么选择 25 fps 作为输出帧率？

答： 25 fps 是英国电视广播的标准帧率（4:54）， 也是许多视频制作软件的默认输出帧率。 它可以提供自然流畅的视觉效果，适合大多数视频制作场景(YouTube、Facebook和Instagram等平台)。



---

#### Media Cache(媒体缓存)

`Preferences > Setting > Media Cache ` 设置**媒体缓存**在其他硬盘驱动器上。
> 前提: 如果你的第二硬盘闲置空间比默认 (C 盘)缓存大

自动清理功能

定期删除旧的媒体缓存文件，释放硬盘空间。

例如: 
将清理时间间隔设为 45 天。(项目周期)
如果硬盘紧张, 选自动删除当超过 XX GB 缓存


---

注意`暂存盘`和 `媒体缓存`的区别


| 功能                  | 用途           | 设置路径                                               |
| ------------------- | ------------ | -------------------------------------------------- |
| Scratch Disks (暂存盘) | 用于处理临时文件的存储  | `File > Project Setting > General > Scratch Disks` |
| Media Cache (媒体缓存)  | 用于优化媒体文件访问性能 | `Preferences > Setting > Media Cache`              |


---

#### Memory (内存分配)

多个 Adobe 应用同时在后台运行时, 设置内存分配比例

![](https://tingwu.aliyun.com/api/editor/get/v2/524379/0/672bbef2dcac4c10a9a2d0d5bc073f67/c1336aac6f8a416195ed6752c56bd2c2.png)

---


## 4 导入媒体

### 4-1. 导入素材的多种方式

方法一：使用 "文件" 菜单导入(Import)

方法二：直接拖放文件夹

---


#### 保持素材文件结构清晰.

建议使用文件夹分类素材, 尤其是在团队协助的时候

例如
按媒体类型分类: "Videos",  "Images", "Audio"
按人的维度分类: 甲乙丙丁
按时间的顺序分类: 1990, 1991

---

### 4-2. 了解帧率(PAL vs NTSC)

当你的素材面向海外, 需要了解视频制式标准.

![](https://tingwu.aliyun.com/api/editor/get/v2/524379/0/b28cd0c6c2b14ae9a37522d5cded4f64/1203f911e48d4544b29eeda19f54d848.png)

<!--  
PAL: 欧洲、亚洲、澳洲等
NTSC:北美、日本等
-->



---

注：不同电视制式的存在是由于各国和地区使用的电力系统不同，导致灯光闪烁频率不同。


| 电视制式 | 使用地区      | 电压        | 灯光闪烁频率        | 对应帧率         |
| ---- | --------- | --------- | ------------- | ------------ |
| PAL  | 欧洲、亚洲、澳洲等 | 220-230伏特 | 50赫兹（每秒闪烁50次） | 25帧/秒        |
| NTSC | 北美、日本等    | 110-120伏特 | 60赫兹（每秒闪烁60次） | 29.97帧/秒(30) |


---
不同帧率的区别：

| 帧率                         | 说明                                                                         |
| -------------------------- | -------------------------------------------------------------------------- |
| 24.00 fps                  | - 标准电影帧率<br>- **电影胶片**每秒拍摄24个画面                                            |
| 25.00 fps                  | - PAL视频制式的标准帧率<br>- 欧洲和大部分亚洲国家采用                                           |
| 29.97 fps Drop-Frame       | - NTSC视频制式的标准帧率之一<br>- 美国和加拿大等国家采用<br>- 每分钟丢弃2帧以同步音频和视频<br>- 保证视频时长和实际时间一致 |
| 29.97 fps (Non-Drop-Frame) | - NTSC视频制式的另一种标准帧率<br>- 不丢弃帧，保留完整视频信息<br>- 时长会和实际时间产生偏差                    |


---

## w2 


## 4 Importing Media(2)


- 分发素材
- 将素材拖进 Project 目录
- 将 Project 目录


---

#### 快速查看视频素材的详细信息(Metadata)

1. 在软件左下角点击 “切换列表视图/图标视图” 按钮切换至列表视图。
2. 在列表视图中，鼠标悬停在任意素材上，即可查看详细信息。
3. 或者, 图标视图, 鼠标悬停任意 footage 素材的 title 上.
    
---

![](https://tingwu.aliyun.com/api/editor/get/v2/524379/0/6f415917ddf949ecb22c54ca57cf7fe1/b80ed26c890b48cbbf09010f62e39bd0.png)


---

#### 如何自定义 Premiere Pro 软件中素材列表视图显示的项目？


1. 在素材列表视图中，右键点击任意空白处。 (17:56)
2. 选择 “元数据显示”。 (17:57)

![](https://tingwu.aliyun.com/api/editor/get/v2/524379/0/a378d9bba0054d4b9e662436a12a158c/efbaa846b2164c58acd1ec7386b1e0b7.png)

---
#### Tips: 🔑  tilde键(~)来最大化面板。

![](https://tingwu.aliyun.com/api/editor/get/v2/524379/0/4519f52089a64f1caecc8901a0af9702/cfc97c7ef2494bb6aacff008a2d020b1.png)


---

1. 在弹出的窗口中勾选你想要显示的项目，取消勾选你不想显示的项目。 (17:58-19:51)
    
4. 点击 “确定” 按钮。 (19:52)


![](https://tingwu.aliyun.com/api/editor/get/v2/524379/0/9d53fc7fee244322b54488c8f7fcee91/02752625527941c08dac434f627cc466.png)

---

#### 保存自定义的素材列表视图设置

1. 在弹出的窗口中输入自定义设置的名称，然后点击 “确定” 按钮。 (20:23-20:27)
    

![](https://tingwu.aliyun.com/api/editor/get/v2/524379/0/77519c051cd24a38b9f0421baf71c1ba/55beb099ff5c4569ab623b10dc1fd08a.png)

---

### 4-3. 管理素材的最佳实践

- 如何创建和使用文件夹模板来组织项目文件
- 为不同类型的媒体(如音频、图像、渲染等)创建子文件夹。
- 如何处理离线媒体的问题。

---

#### 🗂️ 创建文件夹模板

团队如何更好管理项目素材?

注意, 系统文件夹和Premiere项目文件夹不完全对应。

**Production文件夹**(系统文件夹)是由项目负责人决定的系统文件夹，包括各部门共享的文件夹结构，通常存储在云盘上。

**Edit Project文件夹** (是Premiere项目面板内的剪辑文件夹)，剪辑师可根据需求重新组织文件结构, 管理素材。


---
Production 文件夹参考: 
```
Folder Template/
├── Animations/
├── Audio/
│   ├── Music/
│   ├── SFX/
│   └── Spoken/
├── Images/
├── Renders/
├── Script/
└── Video/
    ├── B-roll/
    └── To Cam/
```


---

每个文件夹的作用进行解释:

1. Animations: 用于存储After Effects项目文件。

2. Audio/ 存储所有音频文件
   - Music: 存储背景音乐
   - SFX: 存储音效
   - Spoken: 存储语音文件

---

3. Images: 存储在Premiere Pro中创建或使用的图片文件
4. Renders: 存储最终渲染输出的视频文件
5. Script: 存储视频脚本和相关工作文档

---

6. Video: 存储视频素材
   - A-Roll(lTo Cam): 存储主要镜头,包含了主要动作和叙述。它是视频的主线内容,承载了故事情节的发展。
   - B 镜头 (B-Roll) 是补充性的镜头,用于增加视觉效果和细节。它可以包括景观、背景、特写镜头等,用于帮助解释或进一步说明 A 镜头的内容。


---

```
用 mac terminal 脚本在 "..." 创建文件夹:
Folder Template/
├── Animations/
├── Audio/
│   ├── Music/
│   ├── SFX/
│   └── Spoken/
├── Images/
├── Renders/
├── Script/
└── Video/
    ├── B-roll/
    └── To Cam/
```

---

```
用 PC powerShell 脚本在 "D:/..." 创建文件夹:
Folder Template/
├── Animations/
├── Audio/
│   ├── Music/
│   ├── SFX/
│   └── Spoken/
├── Images/
├── Renders/
├── Script/
└── Video/
    ├── B-roll/
    └── To Cam/
```

---

• 📁 在项目开始前将所有素材整理到相应的文件夹中
![](https://tingwu.aliyun.com/api/editor/get/v2/524379/0/6e34c2de1d644b54a26ebba85b743fc9/04a895fa8aed458391e9c2fd3d73699c.png)

---


[可选]
• 🔄 更改Premiere Pro的偏好设置,使双击打开bin时在原位置打开
• 💾 定期同步Premiere Pro设置(每周或每天)
• 🎨 为不同类型的视频片段设置颜色标签
• 🏷️ 根据需要在偏好设置中自定义颜色标签的名称

---

#### 移动和重新链接媒体文件
TLDR: 学习如何在移动文件后重新链接媒体,避免丢失素材。


如果项目中出现离线媒体,使用软件的"重新链接"或"重新连接"功能。

---



### 4-4. 代理文件

TLDR: 代理文件可以让你在低配置电脑上流畅编辑4K 视频,编辑完成后再切回原始高清文件渲染。

---
#### 创建代理文件
TLDR: 选择视频文件,右键创建代理,设置格式和存储位置,Premiere Pro会自动用Media Encoder创建代理文件。

- 选择需要创建代理的视频文件
- 右键选择`Proxy > Create Proxies`
- 设置代理文件格式(如H.264)和存储位置
- Premiere Pro会自动在Media Encoder中创建代理文件
---

custom 选项
1920 / 8 , 1080/ 8

![](https://tingwu.aliyun.com/api/editor/get/v2/524379/0/50749ec0861d41efac455815e305ed3a/108d553cc93a48869f0185142c6b7f74.png)



---

#### 使用代理文件
TLDR: 添加"Toggle Proxies"按钮到界面,可以方便地切换代理文件和原始文件。

- 点击"Button Editor"
- 将"Toggle Proxies"按钮拖到界面上
- 使用该按钮切换代理文件和原始文件

![](https://tingwu.aliyun.com/api/editor/get/v2/524379/0/117a87c2d69d4463a114df97769e4580/11a2266b71cd4865a6c5793f25c493e2.png)

---
![](https://tingwu.aliyun.com/api/editor/get/v2/524379/0/e48b3bb429214da48d466bf504d17ff1/4cc38fae07734f41a0b2da4c2b04f19b.png)
代理缺换按钮, 对应 Clip 处提示代理与否
![](https://tingwu.aliyun.com/api/editor/get/v2/524379/0/39266fbbec444c368ae1b55850408980/b7ecc42d333f4346b07f09050f31e7a8.png)

> 注意:本课程提供的样例视频已经很小,创建的代理文件反而更大。但对于4K等大文件,代理文件会显著减小文件大小。

---


### 4-5. Monitor (监视器)按钮布局

这些按钮被保留是因为它们在编辑过程中确实有用，而且不是可以轻易用键盘快捷键替代的功能。

![](https://tingwu.aliyun.com/api/editor/get/v2/524379/0/0c9bc21391914ce0867993406048056c/dbc11d8dd738405280c28e5f24d5d2a8.png)

---

1. Toggle Proxies (切换代理): 虽然不常用，但在大项目时如 4K 视频时或电脑配置不佳时很有用。

2. Effects (效果): 可以开关效果，对于性能较低的电脑很有帮助。
---

3. Safe Margins (安全边距): 
   - 「标题安全区」:内部区域,确保文字和重要元素不会被裁剪。
   - 「动作安全区」:外部区域,确保动作和视觉元素不会被裁剪。
![150|](https://i.imgur.com/2uQfIhh.webp)

---

4. 使用Rulers (标尺) 和Guides (参考线)Rulers和Guides可以帮助您更准确地对齐视觉元素,如标题和图形。
![150|](https://i.imgur.com/3Yqw7Aa.webp)

---



5. Export Frame (导出帧): 保留了这个按钮，以便later展示其功能。

6. Comparison View (对比视图): 是近期更新的功能。在颜色分级时, 进行颜色匹配、特效融合等编辑工作时非常有用


---


## 5 解读媒体

### 5-1. 理解高帧率

本节讲解了高帧率的概念及其在视频编辑中的重要性。主要内容包括:
- 在Adobe Premiere Pro中查看视频帧率信息
- 100fps和25fps视频在25fps时间线上的播放效果
- 高帧率视频提供更多编辑可能性

---


### 5-2. 转换帧率以获得最佳使用效果


---


### 2. 转换帧率以达到最佳使用效果

TLDR: 本章介绍如何在Premiere Pro中解释和转换高帧率视频素材，以实现慢动作效果和更好的编辑灵活性。

#### 2.1 在源监视器中预览素材

如何在Premiere Pro中转换视频帧率?

• 🖱️ 双击视频片段以在Monitor(源监视器)中打开预览
• 🔧 右键单击视频片段, 选择"Interpret Footage"选项
• ⌨️ 在"Interpret Footage"面板中,将帧率从100fps更改为25fps
• ▶️ 使用空格键播放修改后的慢动作视频片段
• 🎬 素材可以拖入序列并开始编辑视频

---

#### 2.2 音频处理注意事项
转换帧率的好处

TLDR: 高帧率转低帧率可保留画质，实现流畅的慢动作效果，适合制作电影感B-roll。
TLDR: 帧率转换会影响音频速度，B-roll通常不使用原音，而是配合背景音乐。

---

#### 2.3 不同地区的帧率差异

不同地区视频标准(PAL/NTSC)对帧率的影响
在项目开始时设置正确帧率. 例如 NTSC地区（如美国、加拿大）可能使用120fps或29.97fps，而PAL地区使用25fps。


---



New Sequences >
Sequences Presets >
Setting

---


![150|](https://i.imgur.com/sGnxRON.webp)


---

## 6 理解视频轨道和图层

### 6-1. 创建序列

- 🚫 避免直接将媒体添加到时间轴.
- 🆕  从这些 Bin 中生成序列 New Sequence , 
-  🗂️ 创建专门用于存放`Sequences`的文件夹(Bin) 
-  ✅ 在序列设置中启用"Maximum Render Quality"选项
- ⚙️ 有针对性地设置帧速率和分辨率( 例如YouTube和社交媒体）相匹配

---

### 6-2. 理解宽高比及其在视频中的应用


社交媒体视频的尺寸和比例 

![150|](https://i.imgur.com/GvxkvzP.webp)

(Source:  [70apps.com: 2023最全社交媒体发布图片尺寸大全](https://www.70apps.com/blog/code/2023/08/22/Social_Media_Image_Size_2023.html))


---

### 6-3. 源监视器(入点和出点,仅视频)

使用源监视器来预览和选择视频片段:
![150|](https://i.imgur.com/RGvoOHI.webp)


---

操作要点: 
- 双击素材可在源监视器中打开
- 使用`I`和`O`键设置入点和出点  
- 拖放或使用`逗号键`将选择的部分插入到时间线
- 只插入视频或音频轨道

---

### 6-4. 理解视频轨道(分层)

[简单]
视频轨道的概念及其工作原理:
- 上层轨道会覆盖下层轨道
- B-roll 通常放在上层轨道


---

## 8 键盘快捷键 (课外仅供参考)

### 1. 使用快捷键

🔧 (可选)创建自定义键盘快捷键,以提高编辑效率, 包括切割、链接、启用/禁用、导出帧等常用操作。 `PremierePro > ShortCut Keyboard`

![150|](https://i.imgur.com/kCHIbot.webp)

---

**Tips**


• 🖱️ 使用 Alt 键(Mac 上为 Option 键)和鼠标滚轮来放大和缩小时间线
• 👆 如果使用触控板,学习使用 Alt 键和双指上下滑动来放大缩小
• ✂️ 学习使用 `Ctrl+K `快捷键进行分割,但准备好设置更方便的自定义快捷键



---

#### 自定义快捷键**建议**


⌨️ 设置以下键盘快捷键:
- 将"L"设为"链接" (Link)
- 将""设为"添加编辑" (Add Edit)
- 将"0"设为"启用" (Enable)
- 将"C"设为"导出帧" (Export Frame)
- 将"P"设为"粘贴属性" (Paste Attributes)

---

🔍 熟悉并练习使用以下快捷键:
- ""进行剪切
- "Q"和"W"进行波纹删除
- Alt键复制和覆盖剪辑
- Shift+D应用默认转场

---


## 9 Manipulating Media(操作媒体)

#### Manipulating Media
- 旨在调整单个视频片段的外观。
- 主要使用Effects Controls面板中的基本工具

#### Transitions
- "Transitions"目的是连接不同视频片段,视频之间的衔接效果。
- 主要使用Effects面板中的过渡效果,以及相关的设置选项。

---

### 9-1. Effects Control (位置、缩放、旋转)

练习 1: 
![150|](https://i.imgur.com/u11KpCI.webp)

---


- 🖱️ 使用 `Effects Control 面板`中的 `Position、Scale 和 Rotation` 控制.
- 🔍 使用 `Safe Margins` 和 `Show Guides`功能来精确定位和对齐视频元素.
- ⚓ 学习如何调整 `Anchor Point` 来改变缩放和旋转的参考点

---
练习2: 
搜索"Transform": `Video Effects > Distort > Transform`(视频效果 > 变形 > 变换)

![150|](https://i.imgur.com/pvHZeHY.webp)

---


曲线参考 [[Animation curve]] 缓动函数
(-- `Easing Functions Cheat Sheet` [easings](https://easings.net/))
![150|](https://i.imgur.com/CK7uFEM.png)

---

#### Shutter Angle

`Effects Control > Transform > Shutter Angle` 

Shutter Angle(快门角) 是用角度表示的快门速度。
增大快门角可产生更多运动模糊效果: 
- 180度,相当于1/48秒快门速度。(默认)
- 360度可创造更柔和模糊的效果。

> Note: 调整时需谨慎,可能影响画面位置和锚点。
---
可选练习: 
结合模糊:  `Motion Effects` + `Gassian Blur`
![|200](https://i.ytimg.com/vi/ub7_Ga0xMTM/hqdefault.jpg)
(Source:  [youtube.com: How To Make BLUR Zoom In Premiere Pro](https://youtu.be/ub7_Ga0xMTM?t=26))

---


![150|](https://i.imgur.com/B7j6ASN.webp)


---

#### 可选练习:  Corner Pin

![|200](https://i.ytimg.com/vi/syOuWwx_CJg/hqdefault.jpg)
(Source:  [youtube.com: 1 Motion Effect That'll Improve Your Videos | Premiere Pro 2023](https://youtu.be/syOuWwx_CJg?t=67))
![150|](https://i.imgur.com/G6lyKou.webp)



---

### 9-2. 画中画(包括裁剪、阴影和颜色遮罩)

创建Picture in Picture(画中画)效果,
- 练习 1: 使用`Nest`嵌套序列
- 练习 2: `Effects/Transform/Crop`  裁剪
- 练习 3: 添加背景颜色遮罩。

---

练习 1: 
![](https://tingwu.aliyun.com/api/editor/get/v2/524379/0/d94f3a2217e84f15a2e155f0a8b8763d/6d3fe6aba90949f3b8dd172cd58f2d70.png)



---


• 🎞️ 使用嵌套功能将剪辑组合到一个序列中

`Right Click(Clip) > Nest...` 

![150|](https://i.imgur.com/KKOcq8F.webp)




---
练习 2: 
![150|](https://i.imgur.com/4J4xI6B.webp)


• 🔍 在Effects 面板中搜索并应用"Crop"效果

---

练习 3: 
•创建 Color Matter,  🎨  `Project > RightClick > New item > Color item`创建颜色遮罩作为背景

![150|](https://i.imgur.com/xWib7hk.webp)



---
## 10 转场

提升观感 

---
### 10-1. 应用转场效果

### 了解和应用转场效果
- 🔍 在 `Effects` 面板, 搜索 `Video Transitions` (视频过渡)"
- 🖱️ 在片段之间拖放转场效果
- 🔧 熟悉在`Effects Controls`面板中调整转场效果参数

### 探索不同类型的转场和适用场景
- 🔄 尝试使用各种溶解效果(如Cross Dissolve, Film Dissolve等)
- 🌈 体验不同风格的转场(如Flip Over, Morph Cut等)

---

![150|](https://i.imgur.com/bchkeXu.webp)


---
缓冲区由 Clip 互相叠成, 足够的缓冲区可以得到更平滑的专场效果

| 插图                                                                         | 描述                  | 结果                                                           |
| -------------------------------------------------------------------------- | ------------------- | ------------------------------------------------------------ |
| ![](https://helpx.adobe.com/content/dam/help/en/media-encoder/using/1.png) | 足够的出场(蓝色)和入场缓冲区(粉色) | 你可以添加过渡效果。这里你可以添加一个标准的1:00过渡。                                |
| ![](https://helpx.adobe.com/content/dam/help/en/media-encoder/using/2.png) | 不足的出场和入场缓冲区         | 你可以添加一个短暂的过渡效果。这里你可以添加一个居中的:15持续时间的过渡。                       |
| ![](https://helpx.adobe.com/content/dam/help/en/media-encoder/using/3.png) | 没有缓冲区               | 你无法添加过渡效果。你会看到"内容不足"错误消息或Selection工具旁边的"X"。波纹修剪编辑点两侧来修复这个问题。 |
| ![](https://helpx.adobe.com/content/dam/help/en/media-encoder/using/4.png) | 不足的出场缓冲区            | 你可以添加一个短暂的过渡效果。向左滚动编辑点以恢复缓冲区。                                |
| ![](https://helpx.adobe.com/content/dam/help/en/media-encoder/using/5.png) | 没有出场缓冲区             | 这里最好的选择是从剪切点开始的过渡效果。对于居中过渡，你需要波纹修剪出场片段。                      |
| ![](https://helpx.adobe.com/content/dam/help/en/media-encoder/using/6.png) | 不足的入场缓冲区            | 你可以添加一个短暂的过渡效果。向右滚动编辑点以恢复缓冲区。                                |
| ![](https://helpx.adobe.com/content/dam/help/en/media-encoder/using/7.png) | 没有入场缓冲区             | 这里最好的选择是在剪切点结束的过渡效果。对于1:00的居中过渡，向右滚动编辑点。                     |


---


### 使用高级转场插件
- 📥 下载并安装Premiere Composer插件
- 🚀 尝试Premiere Composer中的高级转场效果(如Camera Zoom, Pan等)
- 🔊 学习如何在转场中添加音效

(Source:  [misterhorse.com: Premiere Composer Mister Horse](https://misterhorse.com/premiere-composer))

---

![150|](https://i.imgur.com/u6CuWqn.webp)


---

### 10-2. 了解默认转场效果

 设置默认转场效果就像给自己准备一个随时可用的视频魔法棒,可以快速应用于多个片段。

### 理解默认转场
- 🖱️ 右键点击所需转场效果，选择 "Set selected as default transition" 来设置默认转场
- 🎞️ 按住 Ctrl 键并拖动鼠标选择多个片段结尾，然后按 `Shift + D` 批量应用默认转场
- ⚙️ 通过 `Edit > Preferences > Timeline` 调整默认转场和静态图像的持续时间(将默认视频转场时长设为10帧)


---



## Enhancing Colors in Videos

实践目标：
1. 增强风景视频的颜色
2. 削弱空间感, 增强装饰性
3. 提高视频的对比度和色彩鲜艳度

![150|](https://i.imgur.com/tEGIVjR.webp)

---


### 1. 准备...
   a. 将视频素材导入项目`.../7 - enhancing colors`
   b. 切换到`Color`(颜色)工作区
   c. 复制视频片段 (在顶层视频上进行编辑，保留底层视频作为参考)
   
---

### 2.   `Lumetri Color`面板

a. 调整 `Basic Correction(基本校正)`

  - 降低`Exposure(曝光度)`
  - 增加`Contrast(对比度)`
  - 降低`Highlights(高光)`
  - 调暗`Shadows(阴影)`
  - 降低`Whites(白色调)`
  - 调暗`Blacks(黑色调)`
---

b. 调整`Creative (创意颜色区)`
  - 增加鲜艳度（Vibrance）
  - 增加饱和度（Saturation）
  - 增加锐度（Sharpness）

---


c. 使用 Curve (曲线)调整

![150|](https://i.imgur.com/CNiZIMS.webp)

---


使用HSL Secondary工具(二级颜色校正 )


![150|](https://i.imgur.com/WvLfPUT.webp)


---
 d. 选择颜色区域
 - 使用吸管工具选择颜色, 隔离所选颜色
  - 调整所选颜色的色相和亮度

e. 微调基本校正
  - 调整色温（添加蓝色）
  - 调整色调（添加绿色）

---

## Skin Retouching

实践目标：
1. 修饰皮肤，去除瑕疵，使皮肤整体平滑
2. 去除特定的痘痘
---



   a. (`Assembly Mode`) 导入(拖入)素材文件夹, `/Resource Files/22. Colors and Corrections/2 - skin retouching/ `

![150|](https://i.imgur.com/Viyvc2v.webp)

---

b. 切换到颜色工作区： `workspace > color`

---

e. 在Lumetri Color面板中，使用HSL Secondary工具：
- 使用吸管工具选择皮肤色调
- 调整 `Hue`、`Saturation` 和 `Luminance` 滑块以精确选择皮肤区域
- 使用 `Blur` 滑块柔化边缘

![150|](https://i.imgur.com/5WuECME.webp)

---



- 减少Sharpness以平滑皮肤
- 调整Saturation和Contrast以优化效果

---



2. 去除特定的痘痘
   a. 创建新的调整层，命名为"spot"
   b. 应用`Gaussian Blur`效果
   c. 使用圆形蒙版工具围绕痘痘
   d. 跟踪痘痘的移动
   e. 增加模糊度和蒙版羽化以混合效果

![150|](https://i.imgur.com/eJue462.webp)

---


实践目标：在Premiere Pro中实现牙齿美白效果

实现目标的步骤：

1. 准备工作：
   - 从初始选择中选择一个视频片段
   - 右键点击片段，选择`New Sequence from Clip`
   - 将新序列命名为"teeth"


---

2. 设置工作空间：
   - 选择`Color`工作空间 `workspace > color`
   - 打开Lumetri Color面板

---


3. 选择牙齿区域：
   - 找到能清晰看到牙齿的帧
   - 使用吸管工具选择牙齿的平均颜色
   - 勾选`Color Gray`选项
   - 使用滑块调整以隔离牙齿区域
   - 使用加号和减号工具微调选区
   - 增加模糊度和噪点以使过渡更自然

---
![150|](https://i.imgur.com/BjmUKNH.webp)

---


4. 调整颜色：
   - 取消勾选`Color Gray`
   - 降低饱和度以减少黄色
   - 使用`Temperature`滑块引入蓝色以抵消黄色
   - 增加`Correction`滑块使牙齿更亮

---



5. 创建蒙版：
   - 在效果控制面板中，为当前帧添加关键帧
   - 使用钢笔工具在Lumetri Color效果上绘制蒙版，围绕牙齿区域
   - 增加蒙版羽化值（约10-15）

---

6. 跟踪蒙版(GPU不好的话大关键帧)：
   - 向前跟踪
   - 返回起始关键帧
   - 向后跟踪

---

![150|](https://i.imgur.com/aGvK31N.webp)

![150|](https://i.imgur.com/NvTmv4o.webp)

---


7. 微调效果：
   - 比较前后效果
   - 根据需要调整`Amount`滑块
   - 确保蒙版和跟踪准确，避免效果影响到嘴唇和皮肤

---

注意事项：
- 选择牙齿颜色时，避免选择最亮或最暗的部分，而是选择平均颜色
- 主要关注前排牙齿，不必过于关注下排牙齿
- 如果出现色块，可以返回调整选区
- 保持效果自然，避免过度美白

---


中期个人实践 - 我的中国梦 
以视频的形式, 把作品粘贴到此处. 



以“我的中国梦”为题创作短视频作品时，可以提供以下思路建议：

---

拆分
我的梦 - 人的梦
我的中国梦 - 人民的梦

---

国, 城市, 家的发展
历史的对比,  影响力, 生产力, 消费力, 科技(四大发明), 文化传承
人: 家人, 英雄, 科学家, 教育家, 医生.

---

思考如何在现实中追求和实现梦想 

---

### 思维导图模板

【腾讯文档】未来设计 - 思维导图参考 https://docs.qq.com/mind/DSXJCVFVWdmxuRVVY?mode=mind

---

![150|](https://i.imgur.com/lQhqHNc.webp)

---

![150|](https://i.imgur.com/p46FBnj.webp)



----



素材收集.



---


## 1. 什么是音效设计

(Source:  [aliyun.com: 24. Audio - 1. What is Sound Design](https://tingwu.aliyun.com/doc/transcripts/58gmq65rxmw5nzwo))

音效设计是平衡不同音轨,虚拟逼真的环境氛围。让观众感觉身临其境。例如,在海滩视频中添加海鸥声和人声,会让观众感觉置身其中。

音效设计通过在时间线上放置相应的音频轨道来匹配视频元素。提升视频质量。



---


> Hollywood film audio timeline.
![bg left:50%](https://external-preview.redd.it/8jAG_f4Pybmk4WT4_y93o2_9lf-IlMZVeGKZUaQFhh8.jpg?auto=webp&s=30464d64635b1b945159eae6ba17bc94e6343fef)

专业时间线可能包含多达64个视频轨道,每个都有音频,以及额外的音频轨道。


---
![bg left:50%](https://i.imgur.com/LxkRGyj.webp)
> Audition EssentialSound Pannel

声音设计使用时间线中的音频轨道。你需要添加音效、配乐、旁白等, 并与视频轨道匹配。

声音类型包括:
1. Music(配乐): 器乐、人声(唱)或两者结合
2. Dialogue(旁白): 诗歌、演讲或对话等
3. SFX(音效): 人(动物)行为或事件产生声音. 短促的日常声音(,如鸟鸣.)
4. Ambience(环境音): 持续的背景声音,如风声或人群嘈杂声

---

> 播放 《Dunkirk》开片段., 用笔记录音效清单.

![bg left:50%](https://live.staticflickr.com/7844/46880572174_e48764d92b_c.jpg)
Richard King 及其团队大量使用了真实的录音，例如搜集欧洲不同地区的船只、飞机和水声等，力求还原历史真实感。

---

互动 - 《Dunkirk》开片段声音清单
提示: 
1. Music(配乐): 器乐、人声(唱)或两者结合
2. Dialogue(旁白): 诗歌、演讲或对话等
3. SFX(音效): 人(动物)行为或事件产生声音. 短促的日常声音(,如鸟鸣.)
4. Ambience(环境音): 持续的背景声音,如风声或人群嘈杂声



---

Richard King 精心设计的音效元素:

1. Music(配乐): 有, 塑造令人不安的气氛,暗示即将发生的危险
2. Dialogue(旁白): 无
3. SFX(音效): 
- 枪声 - 反应(**不在场的**)敌人大约的数量,  回声丈量了空间
- 脚步声 - 通过脚步(闲逛与奔跑声)的对比推动紧张感
- 人物喘息声 - 将观众从多人投入到单人角色的处境中
5. Ambience(环境音): 持续的背景声音,如风声或人群嘈杂声






---

### **ShepardTone**(感知心理学)

电影中运用了 Hans Zimmer 的Shepard音效，通过无限上升的音调制造, 紧张, 沉浸的错觉. 

> ShepardTone 的讲解视频
![|200](https://i.ytimg.com/vi/LVWTQcZbLgY/hqdefault.jpg)
(Source:  [youtube.com: The sound illusion that makes Dunkirk so intense](https://youtu.be/LVWTQcZbLgY?t=171))



---

### Shepard Tone 解释

Video: [[Shepard tone (谢泼德音) 给 Dunkirk(敦刻尔克) 焦虑的幻觉]]

Shepard Tone 的听觉错觉是由几个相隔八度的音调叠加而成。当音调上升时，最高音变弱，中音保持响亮，最低音开始变得可听。这让大脑误以为听到持续上升的音调。


 如游戏纹理 Seamless Mapping 技术, 首位相接是纹理构成无限连续图案 (Pattern)
![bg auto left vertical](https://i.imgur.com/uDE1meP.webp)
![bg audio left](https://i.imgur.com/FP9GaqW.webp)


---

## 2. 音频设计实践
<!--  (Source:  [aliyun.com: 24. Audio - 2. Nature Audio Design Example Pt. 1](https://tingwu.aliyun.com/doc/transcripts/372e9o3gkaw39xb6)) -->
### 1. 下载, 分析视频素材

- "沙滩漫步" (Bing Translator)
- 视频素材, 在 Pexels.com, 搜索 "沙滩漫步"  
<!--  Beach Walk -->

---


分析视频内容,列出所需声音清单:
包括: 看到的声音.... (联想看不到的声音...)

1. Music(配乐): 放松氛围的环境配乐
2. ~~Dialogue(旁白): ~~
3. SFX(音效): 浪声; 涉水(水花); 沙上步行
4. Ambience(环境音): 海鸥; 柔和的风; 

<!--  

1. Music(配乐): 

Pixabay.com上过滤, 获取配乐, 在Pixabay音乐区搜索合适的背景音乐,选择放松氛围的配乐。`#Ambient#Floating#Peaceful#Relaxing#Smooth#Instruments` 

2.. Dialogue(旁白): 无
2. SFX(音效): 
3. Ambience(环境音): 
- 视频1: 水花声 (海鸥叫声、风声,  轻柔水声)
- 视频2: 沙滩脚步声、远处浪声、(海鸥叫声、风声)

-->


---


### 2. 收集音频素材


声音下载资源平台:

(Source:  [freesound.org: Freesound](https://freesound.org/))
(Source:  [pixabay.com: Royalty Free Music Download - Pixabay](https://pixabay.com/music/))


---

配乐
-   pixabay.com, 过滤标签

音效
- freesound.org , 海鸥 seagull; 涉水 wade water ;  柔和的风,  soft wind; 沙上散步 walk sand



---

### Effects

视频转场
Effects/ Video Transitions/ Dissolve/  Cross Dissolve
效果/ 视频转场/ 溶解/ 交叉溶解


音频转场
Effects/ Audio Transitions/ Cross Fade/ Exponential Fade
效果/ 音频转场/ 交叉淡入淡出/ 指数淡入淡出



---
END

<!--  在Premiere Pro中导入素材:
1. 导入视频并创建序列
2. 添加背景音乐, 调整音量和淡入淡出
3. 添加交叉溶解过渡
4. 逐一添加音效,调整音量和时间
5. 使用指数淡入淡出过渡
6. 根据需要调整音效的开始和结束时间
7. 对音轨进行颜色标记,便于管理



步骤2：在Premiere Pro中组织素材
- 将第一个视频片段导入时间轴并创建序列
- 在视频下方放置背景音乐
- 调整音乐长度并添加音频淡入淡出效果
- 添加第二个视频片段并调整大小

步骤3：添加音效
- 将海鸥叫声音效添加到第二个视频片段下
- 调整音量并添加淡入淡出效果
- 添加风声音效到第一个视频片段
- 添加鸟叫声音效到第一个视频片段
- 为第一个视频添加水中脚步声音效
- 为第二个视频添加岩石上海浪声音效
- 为第一个视频添加柔和海浪声音效
- 为第二个视频添加沙滩上脚步声音效

步骤4：调整和平衡音轨
- 使用Audio Workspace调整各音轨的音量
- 为不同的音轨添加颜色标签以便于识别
- 微调各音效的开始和结束时间，确保与视觉内容同步

步骤5：最终调整
- 回到Audio Workspace平衡所有音轨的音量
- 添加视觉叠加层和文字（如有需要）
- 应用其他效果完善作品-->




<!--  

(Source:  [aliyun.com: 24. Audio - 3. Nature Audio Design Example Pt. 2](https://tingwu.aliyun.com/doc/transcripts/2yjoqz287o8jq68l))

我们已经组合了音效、音乐和主要片段,并淡出处理。现在添加叠加层和文字。

进入音频工作区,调整音量滑块。向上提高音量,向下降低音量。音轨1到6分别包含不同音频。按住Shift键可以移动轨道而不改变位置。

调整好音量后,进入字幕和图形工作区添加文字。选择文本工具,输入文字并调整。使用移动工具定位,添加简单的溶解转场。

在音乐第二个高潮处添加新文字,并设置关键帧实现文字过渡效果。为第二段视频制作文字,添加位置动画。

继续添加更多文字,调整位置和动画效果。最后添加公司logo,使用模糊效果和阴影完成广告效果。

为文字添加遮罩过渡,使其与脚部动作配合。调整关键帧实现平滑效果。

完成后回到编辑面板预览。如有需要可以进行颜色分级,但视频本身已经很好了。

这就是我们第一个示例的全部内容。让我们最后看一遍,然后进入下一课。

-->




(Source:  [aliyun.com: 24. Audio - 4. Action Audio Design Example Pt. 1](https://tingwu.aliyun.com/doc/transcripts/kvjonyp84grenlx3))
(Source:  [aliyun.com: 24. Audio - 5. Action Audio Design Example Pt. 2](https://tingwu.aliyun.com/doc/transcripts/mloynm6o5v539agp))
(Source:  [aliyun.com: 24. Audio - 6. Action Audio Design Example Pt. 3](https://tingwu.aliyun.com/doc/transcripts/mloynm6o5vze9agp))

(Source:  [aliyun.com: 24. Audio - 7. Cleaning Audios](https://tingwu.aliyun.com/doc/transcripts/klrbn2xrvj43q5zy))
(Source:  [aliyun.com: 24. Audio - 8. Vocals Audio Design Example Pt. 1](https://tingwu.aliyun.com/doc/transcripts/r28pn74w3ggxn5mz))
(Source:  [aliyun.com: 24. Audio - 9. Vocals Audio Design Example Pt. 2](https://tingwu.aliyun.com/doc/transcripts/3kprqldj5emy9xgd))

## Dialogue

```
我对我的身份感到迷茫，我渴望马上找到自己的位置, 又不想仓促下定义。我的话可能自相矛盾，但他们塑造了我是谁。

我学习微笑，保持好奇心，渴望帮助他人, 却又顾虑这让我看起来爱管闲事。
我, 就是我所说的那个人。

```


### Record



## Video

一个背着背包奔跑的人 A Person Running while Carrying His Backpack

Man Walking on Road Among Pine Trees (pexels-pat-whelen-5738706)
Aerial Shot of a Bridge
Man Sitting on the Rocks (man-sitting-on-the-rocks-4436087)


(Source:  [aliyun.com: 24. Audio - 11. Audio Effects Pt. 1](https://tingwu.aliyun.com/doc/transcripts/g2y8qeakrbggnbeo))
(Source:  [aliyun.com: 24. Audio - 12. Audio Effects Pt. 2](https://tingwu.aliyun.com/doc/transcripts/mloynm6o5y839agp))
(Source:  [aliyun.com: 24. Audio - 13. Audio Effects Pt. 3](https://tingwu.aliyun.com/doc/transcripts/ro84nrm8548zqkb3))



---


![bg fit left:50% vertical](https://i.imgur.com/yMECdxs.webp)
![|200](https://i.ytimg.com/vi/4TGTfoTZ3ek/hqdefault.jpg)
(Source:  [youtube.com: When a Director Understands Sound](https://youtu.be/4TGTfoTZ3ek?t=10))



参考
(Source:  [aliyun.com: 055 Using Reverb Effects](https://tingwu.aliyun.com/doc/transcripts/dej8nbxkyombqpog))
(Source:  [adobe.com: How to apply reverb effects with Adobe audition ](https://helpx.adobe.com/audition/using/reverb-effects.html?mv=product&mv2=au#studio_reverb_effect))
(Source:  [practical-music-production.com: What Reverb Is And How It Works](https://www.practical-music-production.com/reverb/))


---

## 声音如何储存空间信息

好比海绵球在潮湿的空间中反弹, 粘取空间信息. 
混合后的声音(Reverb), 能让我们感知深度和氛围。
![bg fit left:50% vertical](https://i.imgur.com/wLc5OZd.webp)

---

### 分解 Reverb 声音

![bg fit left:50% vertical](https://i.imgur.com/J15QRxg.webp)

Direct Sound(声源)  === Dry(干音)
Early Reflections + Reverb === Wet(湿音, "空间信息")
- $1000ms \approx 音乐厅$

---


![bg fit left:50% vertical](https://i.imgur.com/KGYOtxK.webp)


> 在录音时，为了获得清晰的音轨，通常会近距离拾音，导致声音听起来比较“干”、缺乏空间感



---
## 55. Reverb(混响)效果

### Studio Reverb
Studio Reverb 是最简单直接的混响效果。
主要调节时间参数生成 Reverb 效果

---

![bg fit left:50% vertical](https://i.imgur.com/AS2BYT2.webp)

**Decay(衰退)**: 衰减时长，影响声音的清晰度。
Early reflections(早期反射): 声音首次声音碰到物体后反射到达耳朵的时间, 反映了空间的大小。
 Width: Stereo 声道宽度 0为单声道。
High /(Low )Frequency Cut: 混响的最高和最低频率。
Diffusion(扩散): 效果在立体声中的分布，模拟空间的形状。
**Damping(阻尼)**: 调整高频混响信号随时间衰减量。
Diffusion: 模拟声音在各种表面的吸收情况（如地毯和窗帘）。


---


### Convolution Reverb(卷积混响)

Convolution Reverb  加载特定房间的爆破声(IR脉冲文件), 模拟声学空间。

制作脉冲响应(户外冲激响应)
![|200](https://i.ytimg.com/vi/dHYI_gdpz-4/hqdefault.jpg)
(Source:  [youtube.com: How to Easily make Reverb Impulse Responses](https://youtu.be/dHYI_gdpz-4?t=668))


---

**脉冲(Impulse)**: 导入WAV或AIFF格式
混合(Mix): 调干声（直接声音）与湿声（混响后的声音）的比例
房间大小(Room Size): 模拟的空间大小, 越大，混响效果越长
低频衰减(Damping LF): 减弱低频混响，提高声音锐度
高频衰减(Damping HF): 减弱高频混响，使声音更温和
前延迟(Pre-Delay): 直接声音和早期反射之间的时间差，一般0-10毫秒
宽度(Width): 调整立体声效果，0为单声道
增益(Gain): 调节最终输出音量(Volume)

![bg fit left:50% vertical](https://i.imgur.com/WGfIH0G.webp)

---
![bg auto left:50% vertical](https://i.imgur.com/EzYiJEl.webp)


BOOM Library户外脉冲响应库，包含68种优秀的户外脉冲响应将声音置于特定地点，使其听起来逼真和可信:

户外，响应，田野，峡谷，树木，回声，陨石坑，森林，平原，山坡，山谷，小溪，房屋，山脉，...

![150|](https://i.imgur.com/SAP09Al.webp)


---


![bg fit left:50% vertical](https://i.imgur.com/adjLdux.webp)

![bg fit left:50% vertical](https://i.imgur.com/XtGvsKX.webp)

"Fields & Spaces" 系列中的户外冲激响应, 包含三种深度音频格式: 

1. **Ambisonic格式** 提供360度环绕音效，适合虚拟现实和沉浸式音频体验。
2. **立体声（Stereo）格式** 标准的立体声音频制作，适合于大多数通用音频应用。
3. **环绕声（Surround）格式**：5.1环绕声格式适用于影院和高级音响系统，增强声音的立体感和深度。

---
Mountains, Field, Few Houses 50m.wav
山脉 田野 零星房屋分布在 50 米范围内

![bg fit left:50% vertical](https://i.imgur.com/u2Ewm62.webp)

---

### Surround Reverb

`Reverb > Surround Reverb` 效果主要用于5.1声道的音频源. 

---


重要参数：
输入中心：调节中心声道音频的比例。
低频增强：影响低频音效，但不会直接增加低频的混响。
房间大小：设置房间大小的百分比，数值越大，混响时间越长。
预延迟：设置混响达到最大音量所需的时间，较短的时间听起来更自然，较长的时间则可用于特别效果。
湿干比混合：控制原声音与混响声的比例。



---


## 实践2  实践 - Surround 音效动画

Video: Mr Bean PICNIC Time
节选: Mr Bean PICNIC Time视频, 用 Audition 5.1 Surround 制作音效动画
![bg fit left:50% vertical](https://i.imgur.com/LYuyYYi.webp)

---
流程: 
- Premiere 创建序列 
- 将片段导出到 Audition
- Audition 创建的5.1 环绕轨道
- 编辑音效动画
- 导出到 Premiere (立体声轨道)
- Preimere 输出 MP4(H.264), 检查立体声是否有效

---
### Premiere 创建序列 
截取 1分钟左右片段

```
Video Settings
 Frame size: 1920h 1080v (1.0000)
 Frame rate: 25.00  frames/second
```
![bg fit left:50% vertical](https://i.imgur.com/U2RhM1V.webp)

---

### 将片段导出到 Audition
![bg fit left:50% vertical](https://i.imgur.com/CRqqJFP.webp)


---
### Audition 创建的5.1 环绕轨道
![bg fit left:50% vertical](https://i.imgur.com/uigtbOb.webp)

---

### 将SFX 文件夹的 蜜蜂声音拖进 5.1 音轨编辑
![bg fit left:50% vertical](https://i.imgur.com/p6NlTtB.webp)


---

### 制作音效动画

![bg fit left:50% vertical](https://i.imgur.com/qcpoU8R.webp)

---
方法1: 记录手动操作关键帧
![bg fit left:50% vertical](https://i.imgur.com/QLmAfuL.webp)



---


调整记录间隔

![bg fit left:50% vertical](https://i.imgur.com/QLmAfuL.webp)

---


### 导出到Premiere

![bg fit left:50% vertical](https://i.imgur.com/hiTqk8R.webp)

![bg fit left:50% vertical](https://i.imgur.com/XidnfHp.webp)

---

## END

---


### 其他可能使用的命令: 

####  Convert Sample (采样类型转换)

![150|](https://i.imgur.com/GvtYGEq.webp)



---


#### 创建 5.1 Track(轨道) 

![150|](https://i.imgur.com/GUltKsR.webp)



---
#### Export Stereo

![150|](https://i.imgur.com/nfj4hXR.webp)


---
### 拓展空间内的声音(可选)

(可选)
- 口内的蜜蜂
- 裤子内的蜜蜂
![bg fit left:50% vertical](https://i.imgur.com/aCPFnFx.webp)


---


![](https://i.imgur.com/90I8oqO.webp)




---


参考: 

![|200](https:////i2.hdslb.com/bfs/archive/19a49754fd3faa69426c259badd2b23b3d64fede.jpg@100w_100h_1c.png)
(Source:  [bilibili.com: 如何制作5.1环绕立体声|全息音效|VR音效|Adobe Audition CC基础教程](https://www.bilibili.com/video/BV1Xv411z7rL/?t=2089))


---



![bg fit left:50% vertical](https://i.imgur.com/fNEr4Uq.webp)


(Source:  [aliyun.com: Complete Adobe Premiere Pro Megacourse Beginner to Expert - 通义听悟](https://tingwu.aliyun.com/folders/66103))

---



### 类似插件: Spatial Audio Designer

![bg fit left:50% vertical](https://i.imgur.com/mWJxFTk.webp)
(Source:  [newaudiotechnology.com: Spatial Audio Designer In-One Plug-in - New Audio Technology | Next Generation Audio](https://www.newaudiotechnology.com/products/spatial-audio-designer-plug-in-in-one/))(€89插件)

参考 (Source:  [youtube.com: 11.1 Spatial Audio Designer Demo in Adobe Audition! Wait Until the End!](https://youtu.be/O1GskPfyJ8c?t=213))




---

```


作业要求

基于 Mr Bean PICNIC Time 视频片段制作 Surround 音效动画

1 使用 Premiere 和 Audition 完成以下步骤
- 在 Premiere 中创建 1分钟左右的视频序列
- 将序列导出到 Audition
- 在 Audition 中创建 5.1 环绕轨道
- 添加蜜蜂音效并制作动画效果
- 将编辑好的音频导回 Premiere
- 从 Premiere 输出最终的 MP4 文件

2 具体要求
- 视频设置: 1920x1080 分辨率 25fps
- 使用 Audition 的 5.1 环绕声道功能
- 为蜜蜂声音制作空间移动效果
- 确保最终输出的立体声效果正常

3 提交内容
- 最终输出的 MP4(H.264) 成品

4 可选细节内容
- 添加口腔内或裤子里的蜜蜂音效
- 尝试使用不同的音效制作方法

截止日期: 下次课前
```



---

## How do we use titles and graphics?

参考: [[Adobe Learn - Graphics - Add impact with graphics]]

---

es. 新闻采访时的 Lower thirds(下屏三分之一字幕 )

Text(标题) 
- 它能强调视频中提到的重要信息要点。
- 让观众随时进入内容的背景。
- 标注采访者身份

图像元素(Graphics)
-  Logo 能让观众立即识别内容来源
- 建立品牌系统


![bg fit left:50% vertical](https://i.imgur.com/maKIrAQ.webp)


---

es. 视频封面或者片头. 
![bg fit left:50% vertical](https://i.imgur.com/fXdu4cM.webp)




---

## 图形与文字在视频的作用是什么?

<!--让观众在任何时间, 最短时间, 吸引观众, 传达更多信息  -->

---
## 如何最短时间了解一个人? 

意大利奢侈品店, 拍卖行, 画廊, 亲耐服装设计的毕业生 
通过你的衣着, 快速给你"定价", 判断是否把限量款的包卖给你

---

## 如何在视频中传达更多信息并吸引观众注意力

最好的方法就是使用图形和标题。这就像是给视频加上了醒目的标签和装饰。

![bg fit left:50% vertical](https://i.ytimg.com/vi/z9mQoJU-6I0/hqdefault.jpg)
(Source:  [youtube.com: The Emperor’s New Clothes | Full Movie | Fairy Tales For Children](https://youtu.be/z9mQoJU-6I0?t=1))

---


## Work your fonts

不同款式的"耳环"能传达不同的感觉和情绪, 我们会根据不同场合选择不一样的服装, 文字也需求挑选最合适的"文字装扮" 




---
## 为你的 Video 挑一对"耳环" (Work your fonts) 

![bg fit left:50% vertical](https://i.imgur.com/YZ2EaNH.webp)

<!--  

### es. 不同字体风格的气质分析

1. 简约无衬线体
- 特点：直线条、现代感强
- 气质：简洁、专业、现代化
- 适合：现代简约风格、快餐连锁店

2. 手写草书风格
- 特点：流畅自然、带有艺术气息
- 气质：温暖、亲切、休闲
- 适合：休闲咖啡厅、家庭餐厅

3. 粗体大写字母
- 特点：醒目、力量感强
- 气质：稳重、可靠、正式
- 适合：高端餐厅、正式用餐场所

4. 装饰艺术风格
- 特点：优雅曲线、复古元素
- 气质：典雅、浪漫、艺术感
- 适合：法式餐厅、精品餐厅

5. 衬线体
- 特点：端庄大气、结构完整
- 气质：传统、专业、高档
- 适合：传统西餐厅、高级餐厅

-->

---

## 找到 Premiere 的衣橱 Essential Graphics panel 

Graph Workspace(图形工作区) 中`Essential Graphics panel (基本图形面板) `, 就像一个装满动画贴纸的衣橱。但是这些贴纸是会动的。为视频装扮"排版"的地方。

- 添加和编辑. Title, Text, Caption (文本、标题和字幕)
- 如何创建各种 Graph(图形) 

> 不同版本Premiere Pro  命名可能不同例如 "字幕和图形工作区"

![bg fit left:50% vertical](https://i.imgur.com/Oqpmt3w.webp)


---

## Essential graphics

(Source:  [aliyun.com: 20. Advanced Techniques - 30. Title Blur Effect](https://tingwu.aliyun.com/doc/transcripts/dej8nbxkb6j4qpog))

### Graphic Templates - Create title in Essential Graphics(2025)

Easily create titles directly on your video using the Type tool in the Essential Graphics panel in Adobe Premiere Pro.
(Source:  [adobe.com: Adobe Learn](https://www.adobe.com/learn/premiere-pro/web/essential-graphics-panel?learnIn=1))

![bg fit left:50% vertical](https://i.imgur.com/iGNlfpn.webp)


---

### Motion Graphics Templates(.MOGRT)

#### Browse and Edit

- 在`Essential Graphics panel  (基本图形)`可以应用 Adobe Stock(素材库) 提供的  `.mogrt文件`(Motion Graphics template动态图形模板）



![bg fit left:50% vertical](https://i.imgur.com/fSbXBFQ.webp)


---


- 下载 "基础图形模板"资源。


![bg fit left:50% vertical](https://i.imgur.com/prJEcy5.webp)



---


### 挑选定制你的服饰 

#### Example - `Browser` and `Edit` Template (mogrt )'s Style

![bg fit left:50% vertical](https://i.imgur.com/GmHXmqm.webp)


例如: 
- 对图层进行对齐和变换，改变外观属性，编辑文本属性等。
- 修改你的Premiere Graphics（prgraphics）添加关键帧。
- 修改After Effects Graphics（aegraphics）的暴露属性。

(Source:  [adobe.com: Adobe Learn](https://www.adobe.com/learn/premiere-pro/web/add-image-text-adjust-size?learnIn=1))


---


参考 (Source:  [aliyun.com: 20. Advanced Techniques - 31. Converting Text Animation to MOGRT (Motion Graphics Template)](https://tingwu.aliyun.com/doc/transcripts/4l6xqabk5d249m2y)) 

![bg fit left:50% vertical](https://i.imgur.com/tWNYepN.webp)

---

## Text / Titles(标题)

3种打开方式: 
1. 打开  `Essential Graphics panel (基本图形 )`面板，单击`New Layer,(新建图层)`，然后选择`Text(文本)`。
1. 在`工具面板`中使用 `Type tool (文字工具)`。
1. `Ctrl+T`（Windows）/ `Cmd+T`（Mac）

![bg fit left:50% vertical](https://i.imgur.com/mWEa4cp.webp)
![bg fit left:50% vertical](https://i.imgur.com/lWzh34i.webp)


Export As Motion Graphics Template

![bg fit left:50% vertical](https://i.imgur.com/coSc18a.webp)


---

### 创建文字(2023)  

从Premiere Pro 2023开始，Adobe取消了~~`Legacy Title(传统标题)`功能~~，集中在新的`Essential Graphics面板`替代。

- 新 Essential Graphics 保留了原有功能
- 增添了模板共享
- 添加了文本搜索
- 添加了Adobe Fonts 等新特性。
- 右键菜单快速编辑文本和图形，更高效。

![bg  left:30% vertical](https://blog.adobe.com/en/publish/2022/09/27/media_178ede7092a39c3302b578669d9db7ab352864305.jpeg?width=1200&format=pjpg&optimize=medium)
(Source:  [adobe.com: Modernize your titles workflow in Premiere Pro | Adobe Blog](https://blog.adobe.com/en/publish/2022/09/27/modernize-your-titles-workflow-in-premiere-pro))


---
### 创建文字(2018) 
~~`File > New > Legacy Title` ~~
(Source:  [aliyun.com: 3. Premiere Pro - 12. Creative Titles](https://tingwu.aliyun.com/doc/transcripts/3kprqldjbe6j9xgd))



---

### Practices -  Photoshop 联动

[[Source - Legacy Titler - between Premiere Pro and PhotoShop(2017)]]

实战目标：在 Premiere Pro 中创建和编辑标题动画

---


主要目标 1：使用 Premiere Pro 内置标题工具创建标题
步骤：
1. 创建新标题
- 选择 `File > New > Title`, 为标题命名并点击 OK


![bg fit left:50% vertical](https://i.imgur.com/nHwK0rY.webp)


---



2. 设置标题内容和样式
- 使用左侧工具栏的文字和绘图工具
- 利用顶部预览区域的热滚动功能预览视频
![bg fit left:50% vertical](https://i.imgur.com/flaFxqc.webp)

- 使用箭头工具调整文字位置
- 从底部标题面板选择预设样式
![bg fit left:50% vertical](https://i.imgur.com/wTjs3SU.webp)

---


3. 调整标题属性
- 在 Title Properties 区域修改字体Size 和Ratio(比例)
- 使用 Color 采样器设置文字颜色
![bg fit left:50% vertical](https://i.imgur.com/eAHDGD9.webp)

---


4. 保存自定义样式
- 选择 Menu > New Style(2018)
- 命名新样式并确认
![bg fit left:50% vertical](https://i.imgur.com/wDXPDTY.webp)

![bg fit left:50% vertical](https://i.imgur.com/U2XGbhg.webp)


---


主要目标 2：使用 Photoshop 创建标题
步骤：
1. 创建 Photoshop 文件
- 选择 File > New > Photoshop File
- 设置文件参数并命名



---


2. 导入和编辑图形
- 使用 File > Place Embedded 导入素材
- 编辑图层样式添加效果


---


3. 添加动画效果
- 调整图形初始位置
- 设置 Motion Control 关键帧, 创建位置动画
- 完善过渡效果, 从 Effects Panel 添加 Cross Dissolve

---

### [[Practice - Lower Third Title - Interviewed animals with a tiny mic]]



---



## Title Design 电影片头设计的革新

![|200](https://miro.medium.com/v2/resize:fit:515/1*ZVS1HGGC4wauvQ-7P3K5Rg.jpeg)

(Source:  [medium.com: Film Title Sequence‘Symbolize and Summarize’ (Saul Bass) | by George Pefanis | Medium](https://medium.com/@georgepef/film-title-sequence-symbolize-and-summarize-saul-bass-19d74f434ef5))


(Source:  [bilibili.com: 出场几秒，却值几个亿！？电影片名里藏了多少奥秘？](https://www.bilibili.com/video/BV17h411G743?t=482))

---


##  1916 Title Sequence 
![bg fit left:30% vertical](https://i.imgur.com/NKXCZcX.webp)
> Intolerance (1916) Title Sequence

### 布局分析
黑白背景标题卡

- 优雅的艺术nouveau风格边框装饰
- 中心对称的构图方式
- 黑白对比鲜明的字体设计


---


###  信息分析

- 导演名："D. W. GRIFFITH Presents"
- 主标题："INTOLERANCE"
- 副标题："Love's Struggle Throughout the Ages"
- 结构说明："In a prologue and two acts"
- 版权信息："COPYRIGHT 1916"
- 出品方："WARK PRODUCING CORP DAVID WARK GRIFFITH"
- 制片公司标志: "DG"


![bg fit left:30% vertical](https://i.imgur.com/NKXCZcX.webp)


---

## 1950 Saul Bass的概括与象征


Saul Bass, 电影片头设计的革新者


- 建立了象征性概括的设计语言
- 将字幕阅读变成可**享受的视觉艺术**
- 影响力持续至今.

<!--  
## 1950 象征和概括, Saul Bass
电影片头序列经历了从简单的字幕卡, 一串枯燥的演职员表。Saul Bass 时代是重要转折点。在20世纪50年代彻底改变了电影片头的设计方式。他的影响一直延续到今天。虽然现在很多电影不再有传统意义上的片头设计，但那些仍然保留片头的电影，几乎都能看到 Bass 风格的影子。
-->

![bg fit left:50% vertical](https://i.imgur.com/qym5wMp.webp)

---
### 1.片头是注意力的入口

Bass 认为，"观众对电影的投入应该从第一帧画面就开始。"

<!--  
Bass 认为，观众对电影的投入应该从第一帧画面就开始。
-->

---



### 2. Style(风格) 就是Substance(内容本身)

> Style is Substance -- Saul Bass


- 用 Style(风格) **概括**主题内容 
- 用**象征**的手法传达情感.

<!--  

他的设计风格具有以下特点:
- 将复杂故事简化为一两个核心视觉**主题**概念(简单而有力的视觉元素)
- 运用抽象元素传达纯粹的**情感

-->

![bg fit left:50% vertical](https://i.imgur.com/Lile3Kv.webp)




---
###  1955 金手臂


---


![bg left:50% vertical](https://i.imgur.com/rQTeDQO.webp)

1 "黑白对比"
- 呈现人物内心的挣扎与混乱
- 指向核心视觉元素扭"曲变形的金色手臂"

2  "扭曲的手"
- 象征毒瘾对生命的扭曲与破坏


3 巧妙规避审查制度限制, 成功传达影片核心主题

(Source:  [youtube.com: The Man with the Golden Arm (1955) title sequence](https://youtu.be/PhwsLS1XolU?t=2))


<!--  

片头采用扭曲变形的金色手臂作为主要视觉符号，象征着主角被毒瘾扭曲的生命。

片头使用了黑白对比的抽象动画，展现了主角内心世界的挣扎和混乱。

该片头设计巧妙地避开了当时的审查制度，并成功地传达了电影的主题。(美国中期审查制度对毒品成瘾这一禁忌话题的限制) 

-->


---

### 1955年 七年之痒 


---



片头通过简单的形状和运动象征了影片的主题，如诱惑和内心挣扎。
![bg left:50% vertical](https://i.imgur.com/SLlrAu6.webp)
(Source:  [youtube.com: Saul Bass: The Seven Year Itch (1955) title sequence](https://youtu.be/Gg1MA03VZB4?t=3)[youtube playlist](https://www.youtube.comhttps://www.youtube.com/redirect?event=infocard&redir_token=QUFFLUhqbkJZZFMxVnZuTTNFVzliY0piU19yTGFtd3Jhd3xBQ3Jtc0trREVIVWNLai01R25Cb3RGaVdiLXAzMnRDdVBGdTZhNENVbWR5d3M4U1pvSFExMVF4cUtUUzRUUHhWWFdXVUZzR240cGg4ZXJYZGdfbnd1TjZiMjZyQVlWWHdJMGhEUGN3c240T3NHUEF6SjlaYXA5OA&q=https%3A%2F%2Fwww.patreon.com%2FMovieTitles))


---

### 1963 疯狂世界


---



![bg fit left:50% vertical](https://i.imgur.com/FkHFkvX.webp)


- 首次将迪士尼动画技术融入个人设计风格
- 采用强烈色彩对比以及探戈基调营造疯狂情绪
- 一个地球仪象征世界
- 地球仪变弹跳球的视觉转变暗示剧情走向
- 寓意疯狂源于人类对地球的蔑视与贪婪本性

(Source:  [youtube.com: It's a Mad Mad Mad Mad World - title sequence by Saul Bass](https://youtu.be/s1A7bJD3atk?t=1))



---

Saul Bass 影响很大, 但没有成为主流片头
- 时长
- 成本
- 喧宾夺主



---
## 主流: 为情绪上色 Musics + 

合理运用设计元素就能有效地传递影片的氛围和风格。

<!--  
成功的片头不一定要依赖象征和概括，还有音乐、字体和创新手法等。


-->

---

### Musics + Color 情绪氛围

#### 1973《ALIEN (1979) 极简主义风格


1 单镜头效果
• 昏暗色彩 缓慢移动, 制造催眠氛围
• 制造心理落差, 获得更大的惊悚体验

2 音乐设计 by Jerry Goldsmith
• 模糊音乐与音效界限
• 低沉回响的音效
• 心跳与蠕动的有机声效

3 暗示威胁临近
• 标题逐步显现
• 音乐渐进变化


<!--  - 影片片头字幕的单镜头画面利用昏暗的色彩和缓慢的移动营造出一种催眠效果, 观众在半催眠状态放松的状态下更容易受到惊吓
- Jerry Goldsmith 的诡异音乐极其巧妙，它模糊了音乐和音效的界限，利用低沉、回响的音效和类似心跳、肠胃蠕动的有机声效营造出一种催眠和不安的氛围。
- 标题的出现方式也极具象征意义，字母的逐渐显现和音乐的变化相呼应，暗示了异形的逐渐显露和威胁的临近。-->

![bg fit left:50% vertical](https://i.ytimg.com/vi/amiU5ynneds/hqdefault.jpg)
(Source:  [youtube.com: Jerry Goldsmith  Main Title (film version)](https://youtu.be/amiU5ynneds?t=3))


---

### 2012 爱在罗马 Musics = title; Fonts = Director


- 使用 EF Windsor 白色字体配黑色背景，
- 搭配 Paolo Conte 的音乐，展现轻松浪漫的氛围。


Woody Allen(伍迪·艾伦) 的电影标题多用 Windsor 白字配黑底, 成为导演的品牌标签.


![bg fit left:50% vertical](https://i.imgur.com/UHhDTRY.webp)

![bg fit left:50% vertical](https://i.ytimg.com/vi/DJjnUCgSuZs/hqdefault.jpg)
To Rome with Love (2012) Title Sequence
(Source:  [youtube.com: To Rome With Love Opening Credits](https://youtu.be/DJjnUCgSuZs?t=129))






---

## 1995 Se7en七宗罪, 悬疑片头典范



![bg fit left:50% vertical](https://i.ytimg.com/vi/-BJkDyCdw0c/hqdefault.jpg)


关键特征
• 血腥影像与扭曲文字, 象征罪犯内心扭曲
• 工业风格配乐,  不安氛围营造
• 快速剪辑与压迫感, 将核心信息变为为观众**思考的谜题**


(Source:  [youtube.com: Se7en (1995) title sequence](https://youtu.be/-BJkDyCdw0c?t=137))


<!-- Se7en七宗罪 (1995) ，属于进一步发展阶段，代表了当代片头设计的里程碑 。Kyle Cooper设计的片头序列通过血腥的影像、扭曲的文字和工业风格的音乐，象征了罪犯的邪恶和扭曲 。它更侧重于通过快速剪辑和不安的音效，体现了心理上的变态与紧迫感，使观众对即将展开的故事感到不安心理氛围
Kyle Cooper 将设计片头比作解谜，旨在通过视觉元素传达故事的核心信息，并引发观众的思考。成为悬疑电影片头典范.
  -->





---


## 2002 Kuntzel 和 Deygas - 象征

Kuntzel & Deygas(昆切尔和德加斯) 

- 采用 60年代动画设计片头Saul Bass 的象征风格 
- 观众体验一场身份变换与躲避游戏 



![bg fit left:50% vertical](https://i.imgur.com/NqhCxMN.webp)
(Source:  [youtube.com: Catch Me If You Can (2002) title sequence](https://youtu.be/aN715Rp4L74?t=18))



---

![bg fit left:50% vertical](https://i.imgur.com/PGQDyNf.webp)
法国设计师组合
- Olivier Kuntzel
- Florence Deygas

专业领域
- 视觉创作与设计
- 角色创作
- 动画制作
- 电影
- 品牌
- 广告

---

  MiCha灯具系列
  - 赋予产品生命力
  - 将工作室转化为趣味游乐场

![bg left:50% vertical](https://i.ytimg.com/vi/NujTAzYMoUM/hqdefault.jpg)
(Source:  [youtube.com: MiCha Makes A Playground Of Our Atelier.](https://youtu.be/NujTAzYMoUM?t=2))


---
## 为了让观众投入更大的期待值

> HBO 通过延长片头至60-90秒, 让片头设计师发挥创意 

- 适应短视频时代
- 提升观众期待感. 

es《真探》90 sec

![bg fit left:50% vertical](https://i.ytimg.com/vi/FxXRkqXfhYM/hqdefault.jpg)
(Source:  [youtube.com: True Detective - Intro / Opening Scene HD](https://youtu.be/FxXRkqXfhYM?t=94))

(Source:  [youtube.com: Opening Credits: How TV's Title Sequences Grew Up | WIRED](https://youtu.be/rdtmaqVvWlA?t=289))

---
### 2021 Severance(离职)

Oliver Latta (Extraweg) 设计

深刻视觉隐喻陈述核心**主题**
- 职场与个人生活的割裂
- 内外分裂的心理困境
- 人性与工作平衡的思考

冷色调氛围营造**情绪**
- 引发不安感
- 促进自我反思

![bg fit left:50% vertical](https://i.ytimg.com/vi/NmS3m0OG-Ug/hqdefault.jpg)
(Source:  [youtube.com: Severance - Official Intro Title Sequence  2022 / Credits / Opening 4K  ( Apple TV+ )  | extraweg](https://youtu.be/NmS3m0OG-Ug?t=9))


---

### 2022 Candy

![bg left:40% vertical](https://i.ytimg.com/vi/Kwl7HwbCOEE/hqdefault.jpg)

  - 艾美奖提名作品

设计灵感
  - 取材80年代 "完美主妇手册"
  - 将文字视为图形一样的核心视觉元素


---

![bg fit left:50% vertical](https://i.imgur.com/iwLkBMW.webp)
创意亮点
  - Rube Goldberg's machines (鲁布·戈德堡装置) 形式
  - 暗喻Candy世界的崩塌, 是层层递进的结果



  (Source:  [youtube.com: Candy (2022) title sequence](https://youtu.be/Kwl7HwbCOEE?t=56))

<!--  Candy （2022）的片头序列由Imaginary Forces设计，为Hulu电视剧获得艾美奖提名的片头动画。

参考80年代的“完美主妇”手册，简化了传统的标题序列技巧，使字体成为视觉焦点。

Rube Goldberg’s machines 层层递进，最终导致“Candy的世界崩塌”, 与鲁布·戈德堡机器的复杂性和出人意料的最终结果相呼应-->

---



## END


---


### Opening Credits
what difference between Opening Credits and Title Sequences
![|200](https://i.ytimg.com/vi/gFUtF0gNocM/hqdefault.jpg)
(Source:  [youtube.com: Reacting to Opening Credits — What Makes a Great Title Sequence?](https://youtu.be/gFUtF0gNocM?t=1)[youtube playlist](https://www.youtube.com/watch?v=MwNc9Hittqg&list=PLEzQZpmbzckUl3P1gqpM5Awa9U-CxdhVy))


## Film Credits
![|200](https://i.ytimg.com/vi/lAjoUfSC1zI/hqdefault.jpg)
(Source:  [youtube.com: Film Credits, Explained](https://youtu.be/lAjoUfSC1zI?t=100))



## Collage Animation

![|200](https://i.ytimg.com/vi/CMqw9usH8-8/hqdefault.jpg)
(Source:  [youtube.com: Motion Graphic | Collage](https://youtu.be/CMqw9usH8-8?t=8))




---

## References


![|200](https://i.ytimg.com/vi/PdMgtHXwZ_U/hqdefault.jpg)
(Source:  [youtube.com: The History of Movie Title Sequences](https://youtu.be/PdMgtHXwZ_U?t=2))


![|200](https://i.ytimg.com/vi/2IoVLB1shwI/hqdefault.jpg)
(Source:  [youtube.com: Saul Bass: The Art Of The Title Sequence](https://youtu.be/2IoVLB1shwI?t=2))



[[Source - Start Making Better Titles with a few Basic Tips]]




![|200](https://cc-prod.scene7.com/is/image/CCProdAuthor/title-sequence_P3d_720x400?$pjpeg$&jpegSize=200&wid=727)
(Source:  [adobe.com: Create great title sequences - Adobe](https://www.adobe.com/creativecloud/video/discover/title-sequence.html))
优秀的片头序列案例包括《七宗罪》、《猫鼠游戏》、《甲壳虫汁》等电影的片头




[[How Saul Bass and the art of movie title design(youtube)]]


---

![|200](https://i.ytimg.com/vi/frWLpyI3lXY/hqdefault.jpg)
(Source:  [youtube.com: Saul Bass- Style is Substance](https://youtu.be/frWLpyI3lXY?t=2))
[[source-video-Saul Bass- Style is Substance]]
[[Saul Bass- Style is Substance]]



![|200](https://i.ytimg.com/vi/xKu2de0yCJI/hqdefault.jpg)
(Source:  [youtube.com: AT&T Archives: Saul Bass Pitch Video for Bell System Logo Redesign](https://youtu.be/xKu2de0yCJI?t=1458))




## Title Design 电影片头设计的革新

![|200](https://miro.medium.com/v2/resize:fit:515/1*ZVS1HGGC4wauvQ-7P3K5Rg.jpeg)

(Source:  [medium.com: Film Title Sequence‘Symbolize and Summarize’ (Saul Bass) | by George Pefanis | Medium](https://medium.com/@georgepef/film-title-sequence-symbolize-and-summarize-saul-bass-19d74f434ef5))


(Source:  [bilibili.com: 出场几秒，却值几个亿！？电影片名里藏了多少奥秘？](https://www.bilibili.com/video/BV17h411G743?t=482))

---


##  1916 Title Sequence 
![bg fit left:30% vertical](https://i.imgur.com/NKXCZcX.webp)
> Intolerance (1916) Title Sequence

### 布局分析
黑白背景标题卡

- 优雅的艺术nouveau风格边框装饰
- 中心对称的构图方式
- 黑白对比鲜明的字体设计


---


###  信息分析

- 导演名："D. W. GRIFFITH Presents"
- 主标题："INTOLERANCE"
- 副标题："Love's Struggle Throughout the Ages"
- 结构说明："In a prologue and two acts"
- 版权信息："COPYRIGHT 1916"
- 出品方："WARK PRODUCING CORP DAVID WARK GRIFFITH"
- 制片公司标志: "DG"


![bg fit left:30% vertical](https://i.imgur.com/NKXCZcX.webp)


---

## 1950 Saul Bass的概括与象征


Saul Bass, 电影片头设计的革新者


- 建立了象征性概括的设计语言
- 将字幕阅读变成可**享受的视觉艺术**
- 影响力持续至今.

<!--  
## 1950 象征和概括, Saul Bass
电影片头序列经历了从简单的字幕卡, 一串枯燥的演职员表。Saul Bass 时代是重要转折点。在20世纪50年代彻底改变了电影片头的设计方式。他的影响一直延续到今天。虽然现在很多电影不再有传统意义上的片头设计，但那些仍然保留片头的电影，几乎都能看到 Bass 风格的影子。
-->

![bg fit left:50% vertical](https://i.imgur.com/qym5wMp.webp)

---
### 1.片头是注意力的入口

Bass 认为，"观众对电影的投入应该从第一帧画面就开始。"

<!--  
Bass 认为，观众对电影的投入应该从第一帧画面就开始。
-->

---



### 2. Style(风格) 就是Substance(内容本身)

> Style is Substance -- Saul Bass


- 用 Style(风格) **概括**主题内容 
- 用**象征**的手法传达情感.

<!--  

他的设计风格具有以下特点:
- 将复杂故事简化为一两个核心视觉**主题**概念(简单而有力的视觉元素)
- 运用抽象元素传达纯粹的**情感

-->

![bg fit left:50% vertical](https://i.imgur.com/Lile3Kv.webp)




---
###  1955 金手臂


---


![bg left:50% vertical](https://i.imgur.com/rQTeDQO.webp)

1 "黑白对比"
- 呈现人物内心的挣扎与混乱
- 指向核心视觉元素扭"曲变形的金色手臂"

2  "扭曲的手"
- 象征毒瘾对生命的扭曲与破坏


3 巧妙规避审查制度限制, 成功传达影片核心主题

(Source:  [youtube.com: The Man with the Golden Arm (1955) title sequence](https://youtu.be/PhwsLS1XolU?t=2))


<!--  

片头采用扭曲变形的金色手臂作为主要视觉符号，象征着主角被毒瘾扭曲的生命。

片头使用了黑白对比的抽象动画，展现了主角内心世界的挣扎和混乱。

该片头设计巧妙地避开了当时的审查制度，并成功地传达了电影的主题。(美国中期审查制度对毒品成瘾这一禁忌话题的限制) 

-->


---

### 1955年 七年之痒 


---



片头通过简单的形状和运动象征了影片的主题，如诱惑和内心挣扎。
![bg left:50% vertical](https://i.imgur.com/SLlrAu6.webp)
(Source:  [youtube.com: Saul Bass: The Seven Year Itch (1955) title sequence](https://youtu.be/Gg1MA03VZB4?t=3)[youtube playlist](https://www.youtube.comhttps://www.youtube.com/redirect?event=infocard&redir_token=QUFFLUhqbkJZZFMxVnZuTTNFVzliY0piU19yTGFtd3Jhd3xBQ3Jtc0trREVIVWNLai01R25Cb3RGaVdiLXAzMnRDdVBGdTZhNENVbWR5d3M4U1pvSFExMVF4cUtUUzRUUHhWWFdXVUZzR240cGg4ZXJYZGdfbnd1TjZiMjZyQVlWWHdJMGhEUGN3c240T3NHUEF6SjlaYXA5OA&q=https%3A%2F%2Fwww.patreon.com%2FMovieTitles))


---

### 1963 疯狂世界


---



![bg fit left:50% vertical](https://i.imgur.com/FkHFkvX.webp)


- 首次将迪士尼动画技术融入个人设计风格
- 采用强烈色彩对比以及探戈基调营造疯狂情绪
- 一个地球仪象征世界
- 地球仪变弹跳球的视觉转变暗示剧情走向
- 寓意疯狂源于人类对地球的蔑视与贪婪本性

(Source:  [youtube.com: It's a Mad Mad Mad Mad World - title sequence by Saul Bass](https://youtu.be/s1A7bJD3atk?t=1))



---

Saul Bass 影响很大, 但没有成为主流片头
- 时长
- 成本
- 喧宾夺主



---
## 主流: 为情绪上色 Musics + 

合理运用设计元素就能有效地传递影片的氛围和风格。

<!--  
成功的片头不一定要依赖象征和概括，还有音乐、字体和创新手法等。


-->

---

### Musics + Color 情绪氛围

#### 1973《ALIEN (1979) 极简主义风格


1 单镜头效果
• 昏暗色彩 缓慢移动, 制造催眠氛围
• 制造心理落差, 获得更大的惊悚体验

2 音乐设计 by Jerry Goldsmith
• 模糊音乐与音效界限
• 低沉回响的音效
• 心跳与蠕动的有机声效

3 暗示威胁临近
• 标题逐步显现
• 音乐渐进变化


<!--  - 影片片头字幕的单镜头画面利用昏暗的色彩和缓慢的移动营造出一种催眠效果, 观众在半催眠状态放松的状态下更容易受到惊吓
- Jerry Goldsmith 的诡异音乐极其巧妙，它模糊了音乐和音效的界限，利用低沉、回响的音效和类似心跳、肠胃蠕动的有机声效营造出一种催眠和不安的氛围。
- 标题的出现方式也极具象征意义，字母的逐渐显现和音乐的变化相呼应，暗示了异形的逐渐显露和威胁的临近。-->

![bg fit left:50% vertical](https://i.ytimg.com/vi/amiU5ynneds/hqdefault.jpg)
(Source:  [youtube.com: Jerry Goldsmith  Main Title (film version)](https://youtu.be/amiU5ynneds?t=3))


---

### 2012 爱在罗马 Musics = title; Fonts = Director


- 使用 EF Windsor 白色字体配黑色背景，
- 搭配 Paolo Conte 的音乐，展现轻松浪漫的氛围。


Woody Allen(伍迪·艾伦) 的电影标题多用 Windsor 白字配黑底, 成为导演的品牌标签.


![bg fit left:50% vertical](https://i.imgur.com/UHhDTRY.webp)

![bg fit left:50% vertical](https://i.ytimg.com/vi/DJjnUCgSuZs/hqdefault.jpg)
To Rome with Love (2012) Title Sequence
(Source:  [youtube.com: To Rome With Love Opening Credits](https://youtu.be/DJjnUCgSuZs?t=129))






---

## 1995 Se7en七宗罪, 悬疑片头典范



![bg fit left:50% vertical](https://i.ytimg.com/vi/-BJkDyCdw0c/hqdefault.jpg)


关键特征
• 血腥影像与扭曲文字, 象征罪犯内心扭曲
• 工业风格配乐,  不安氛围营造
• 快速剪辑与压迫感, 将核心信息变为为观众**思考的谜题**


(Source:  [youtube.com: Se7en (1995) title sequence](https://youtu.be/-BJkDyCdw0c?t=137))


<!-- Se7en七宗罪 (1995) ，属于进一步发展阶段，代表了当代片头设计的里程碑 。Kyle Cooper设计的片头序列通过血腥的影像、扭曲的文字和工业风格的音乐，象征了罪犯的邪恶和扭曲 。它更侧重于通过快速剪辑和不安的音效，体现了心理上的变态与紧迫感，使观众对即将展开的故事感到不安心理氛围
Kyle Cooper 将设计片头比作解谜，旨在通过视觉元素传达故事的核心信息，并引发观众的思考。成为悬疑电影片头典范.
  -->





---


## 2002 Kuntzel 和 Deygas - 象征

Kuntzel & Deygas(昆切尔和德加斯) 

- 采用 60年代动画设计片头Saul Bass 的象征风格 
- 观众体验一场身份变换与躲避游戏 



![bg fit left:50% vertical](https://i.imgur.com/NqhCxMN.webp)
(Source:  [youtube.com: Catch Me If You Can (2002) title sequence](https://youtu.be/aN715Rp4L74?t=18))



---

![bg fit left:50% vertical](https://i.imgur.com/PGQDyNf.webp)
法国设计师组合
- Olivier Kuntzel
- Florence Deygas

专业领域
- 视觉创作与设计
- 角色创作
- 动画制作
- 电影
- 品牌
- 广告

---

  MiCha灯具系列
  - 赋予产品生命力
  - 将工作室转化为趣味游乐场

![bg left:50% vertical](https://i.ytimg.com/vi/NujTAzYMoUM/hqdefault.jpg)
(Source:  [youtube.com: MiCha Makes A Playground Of Our Atelier.](https://youtu.be/NujTAzYMoUM?t=2))


---
## 为了让观众投入更大的期待值

> HBO 通过延长片头至60-90秒, 让片头设计师发挥创意 

- 适应短视频时代
- 提升观众期待感. 

es《真探》90 sec

![bg fit left:50% vertical](https://i.ytimg.com/vi/FxXRkqXfhYM/hqdefault.jpg)
(Source:  [youtube.com: True Detective - Intro / Opening Scene HD](https://youtu.be/FxXRkqXfhYM?t=94))

(Source:  [youtube.com: Opening Credits: How TV's Title Sequences Grew Up | WIRED](https://youtu.be/rdtmaqVvWlA?t=289))

---
### 2021 Severance(离职)

Oliver Latta (Extraweg) 设计

深刻视觉隐喻陈述核心**主题**
- 职场与个人生活的割裂
- 内外分裂的心理困境
- 人性与工作平衡的思考

冷色调氛围营造**情绪**
- 引发不安感
- 促进自我反思

![bg fit left:50% vertical](https://i.ytimg.com/vi/NmS3m0OG-Ug/hqdefault.jpg)
(Source:  [youtube.com: Severance - Official Intro Title Sequence  2022 / Credits / Opening 4K  ( Apple TV+ )  | extraweg](https://youtu.be/NmS3m0OG-Ug?t=9))


---

### 2022 Candy

![bg left:40% vertical](https://i.ytimg.com/vi/Kwl7HwbCOEE/hqdefault.jpg)

  - 艾美奖提名作品

设计灵感
  - 取材80年代 "完美主妇手册"
  - 将文字视为图形一样的核心视觉元素


---

![bg fit left:50% vertical](https://i.imgur.com/iwLkBMW.webp)
创意亮点
  - Rube Goldberg's machines (鲁布·戈德堡装置) 形式
  - 暗喻Candy世界的崩塌, 是层层递进的结果



  (Source:  [youtube.com: Candy (2022) title sequence](https://youtu.be/Kwl7HwbCOEE?t=56))

<!--  Candy （2022）的片头序列由Imaginary Forces设计，为Hulu电视剧获得艾美奖提名的片头动画。

参考80年代的“完美主妇”手册，简化了传统的标题序列技巧，使字体成为视觉焦点。

Rube Goldberg’s machines 层层递进，最终导致“Candy的世界崩塌”, 与鲁布·戈德堡机器的复杂性和出人意料的最终结果相呼应-->

---



## END


---


### Opening Credits
what difference between Opening Credits and Title Sequences
![|200](https://i.ytimg.com/vi/gFUtF0gNocM/hqdefault.jpg)
(Source:  [youtube.com: Reacting to Opening Credits — What Makes a Great Title Sequence?](https://youtu.be/gFUtF0gNocM?t=1)[youtube playlist](https://www.youtube.com/watch?v=MwNc9Hittqg&list=PLEzQZpmbzckUl3P1gqpM5Awa9U-CxdhVy))


## Film Credits
![|200](https://i.ytimg.com/vi/lAjoUfSC1zI/hqdefault.jpg)
(Source:  [youtube.com: Film Credits, Explained](https://youtu.be/lAjoUfSC1zI?t=100))



## Collage Animation

![|200](https://i.ytimg.com/vi/CMqw9usH8-8/hqdefault.jpg)
(Source:  [youtube.com: Motion Graphic | Collage](https://youtu.be/CMqw9usH8-8?t=8))




---

## References


![|200](https://i.ytimg.com/vi/PdMgtHXwZ_U/hqdefault.jpg)
(Source:  [youtube.com: The History of Movie Title Sequences](https://youtu.be/PdMgtHXwZ_U?t=2))


![|200](https://i.ytimg.com/vi/2IoVLB1shwI/hqdefault.jpg)
(Source:  [youtube.com: Saul Bass: The Art Of The Title Sequence](https://youtu.be/2IoVLB1shwI?t=2))



[[Source - Start Making Better Titles with a few Basic Tips]]




![|200](https://cc-prod.scene7.com/is/image/CCProdAuthor/title-sequence_P3d_720x400?$pjpeg$&jpegSize=200&wid=727)
(Source:  [adobe.com: Create great title sequences - Adobe](https://www.adobe.com/creativecloud/video/discover/title-sequence.html))
优秀的片头序列案例包括《七宗罪》、《猫鼠游戏》、《甲壳虫汁》等电影的片头




[[How Saul Bass and the art of movie title design(youtube)]]


---

![|200](https://i.ytimg.com/vi/frWLpyI3lXY/hqdefault.jpg)
(Source:  [youtube.com: Saul Bass- Style is Substance](https://youtu.be/frWLpyI3lXY?t=2))
[[source-video-Saul Bass- Style is Substance]]
[[Saul Bass- Style is Substance]]



![|200](https://i.ytimg.com/vi/xKu2de0yCJI/hqdefault.jpg)
(Source:  [youtube.com: AT&T Archives: Saul Bass Pitch Video for Bell System Logo Redesign](https://youtu.be/xKu2de0yCJI?t=1458))


# Premiere视频导出 

将项目导出为视频文件，重点掌握导出设置的关键参数和最佳实践。

参考
![|200](https://i.ytimg.com/vi/IoH3aJzvc4k/hqdefault.jpg)
(Source:  [youtube.com: How to Export Videos in Premiere Pro | Export MP4 (H.264)](https://youtu.be/IoH3aJzvc4k?t=1))


---


### 1. 选项:  选择导出范围
- 选项A：导出特定区域
  1. 使用键盘按键 `I` 设置入点
  2. 使用键盘按键 `O` 设置出点 
- 取消范围, 导出整个序列
  1. 右键点击
  2. 选择 `Clear In and Out` [T1]({})
![bg fit left:50% vertical](https://i.imgur.com/ks1cGbk.webp)

---


### 2. 启动导出流程
- 方式一：通过菜单 `File > Export > Media`
- 方式二：使用快捷键
  - Windows: `Ctrl + M`
  - Mac: `Command + M` 
![bg fit left:50% vertical](https://i.imgur.com/rV4pAcu.webp)



---


### 3. 配置导出设置
1. 基础设置：
   - 设置文件名称
   - 选择输出文件夹位置  
   - 预设选择：`Match Source - Adaptive High Bitrate`
   - 格式选择：`H.264`（MP4格式） 

![bg fit left:50% vertical](https://i.imgur.com/Ge47Hsg.webp)



---


3. 视频质量设置：
   - 进入 `Video Settings`
   - 启用高级选项：
     - 勾选 `Render at Maximum Depth`
     - 勾选 `Use Maximum Render Quality` 
![bg fit left:50% vertical](https://i.imgur.com/XGkKjnx.webp)


---



4. 比特率设置：
   - 选择 `VBR 1 Pass`（可变比特率）
   - 设置目标比特率（推荐设置为24） 

- 直播/实时编码：选择 `CBR`
- 一般视频输出：选择 `VBR, 1 pass`
- 高质量作品：选择 `VBR, 2 pass`

- 直播/实时编码：选择 CBR
- 一般视频输出：选择 VBR, 1 pass
- 高质量作品：选择 VBR, 2 pass
![bg fit left:50% vertical](https://i.imgur.com/9oBr6qL.webp)


---


5. 音频设置：
   - 保持默认设置即可 

---

### 6. 完成导出
- 点击 `Export` 按钮开始导出
- 在指定的输出文件夹中查找导出的视频文件 
![bg fit left:50% vertical](https://i.imgur.com/ILbmlSL.webp)

---
## Reference

[[25 Premiere_Transitions]]


---

![bg fit left:50% vertical](https://i.imgur.com/d1Xq0La.webp)


![|200](https:////i0.hdslb.com/bfs/archive/ea92d4cca7ac5373402c796f2c65e5847dc39623.jpg@100w_100h_1c.png)
(Source:  [bilibili.com: 靠剪接就能颠覆电影行业？！蒙太奇到底有啥魔力](https://www.bilibili.com/video/BV1xv4y1J7z4/?t=2))


---


## 走向蒙太奇理论

- 成本高
- 剪辑技巧的创新

![bg fit left:50% vertical](https://i.imgur.com/yau6Huc.webp)
Eisenstein, S., Glenny, M., & Taylor, R.L. (1994). Towards a theory of montage.


---
## 剪辑思维 VS 剪辑技巧


> 重构时空, **调度情绪, 传达信息**

- **剪辑思维**基于爱森斯坦的蒙太奇理论，帮助理解镜头间关系及其对观众的影响。
- **剪辑技巧**是实现这些关系的具体技术手段。

---
1、以“大湾区”、“我的青春”为主题进行拍摄+剪辑的创作；
2、1~4人为小组，时间为3-5分钟左右。
3、主题鲜明：主题有创意，鲜明；剪辑流畅，音视频剪辑节奏合理；
总体技术与难度效果：字幕文字及字幕动画、视频转场和视频特效、调色、片头片尾的设计等
4、上交内容：作品总结PPT（于最后一节课讲解并展示），作品成品（所学成员学号+姓名）
5、所有作品保留源文件至下学期开学前第一周。

---


## 剪辑技巧

- 不同的剪辑桥传达不同能量
- 了解编辑中使用的各种剪切类型
- 根据视频内容选择合适的剪切方式

![bg fit left:50% vertical](https://i.imgur.com/4IpEiL7.webp)



---

仔细听讲

[[w12_pr_ practices_剪辑分析作业要求]]


---
	

### 1. Cut 

直切是最基本的剪辑方式 从A镜头切换到B镜头一个直接切到另一个 , 几乎所有类型的视频都会使用。
打破时空

---


### 2. Dissolve (溶解)


参考 [[Source - youtube Ultimate Guide to Scene Transitions – Every Editing Transition Explained - The Shot List, Ep 9]]


---


通过将 B 镜头渐渐叠加到 A 镜头上实现转换 

- 流逝的回忆或梦境中的运用。
- 在保持时间推进的同时创造有意义的联系


![bg fit left:50% vertical](https://i.imgur.com/htBVJeP.webp)

---


### 3. 跳切 (Jump Cut)

![|200](https://i.ytimg.com/vi/03zw4RNv0gE/hqdefault.jpg)
(Source:  [youtube.com: What is a Jump Cut & When to Use It — 5 Essential Jump Cut Editing Techniques Explained](https://youtu.be/03zw4RNv0gE?t=50)[youtube playlist](https://www.youtube.com/watch?v=UPy375ZEp-c&list=PLEzQZpmbzckW-Wq_laIaQuMbGl2bKeYab))

---


通过在同一场景内移除部分时间段，造成**时间和空间**的跳跃。

1. 时间跳跃
2. 空间跳跃

---


#### 1. 时间跳跃

时间之间的推进, 推进叙事剧情 

![bg fit left:50% vertical](https://i.imgur.com/eVPqUG1.webp)

---

##### ES. 幽默的时间跳跃
_辛特拉的名单_
![bg fit left:50% vertical](https://i.imgur.com/IVlM7ee.webp)


---


#### 2. 空间跳跃

**前后空间的推进**
推进情绪氛围 (es. 逼近, 传达角色的压力)

![bg fit left:50% vertical](https://i.imgur.com/whVJqZp.webp)




---

**分布空间的位移** 
- 感知不同人物的情绪
- 增强环境空间立体感

(两个机位, 建议 >=30)
![bg fit left:50% vertical](https://i.imgur.com/kFoYFVR.webp)
![bg fit left:50% vertical](https://i.imgur.com/ibF7M6G.webp)



---


### 4. 动作切 (Action Cut)

TLDR: 在动作的高潮点切换镜头，保持动作的连续性。
在动作发生时进行切换，利用动作模糊实现流畅过渡。适用于运动、手势等场景。

![bg fit left:50% vertical](https://i.imgur.com/gK6cmav.webp)


---


### 5. J CUT & L CUT  

参考
![|200](https://i.ytimg.com/vi/eyH-a964kAs/hqdefault.jpg)
(Source:  [youtube.com: SFX Secrets: The J Cut & The L Cut](https://youtu.be/eyH-a964kAs?t=17))


---
#### WHAT J CUT & L CUT  

后续或前置镜头的音频与视频重叠，形成编辑时间线中的J或L形状。
J型切换：在画面切换前先引入第二个画面的音频
L型切换：第一个画面的音频延续到第二个画面中

![bg fit left:50% vertical](https://i.imgur.com/nZzuTuW.webp)
![bg fit left:50% vertical](https://i.imgur.com/DAajz24.webp)



---

#### WHY J CUT & L CUT  

J切和L切是很微妙的时空互相访问交叠

这些技术的应用场景多样，包括场景之间的过渡、梦境序列、闪回以及强调特定对话或时刻。
可用于为电影创造强烈的开场和结尾。


---

#### ES. J CUT 

J切通常通过在视觉出现之前引入下一场景的音频，营造紧迫感或增加悬念和期待感。
![bg fit left:50% vertical](https://i.imgur.com/8FHU5h7.webp)



---
#### ES. L CUT 

L切则能够在对话中创造更流畅、自然的过程，并延续场景的情感影响。
![bg fit left:50% vertical](https://i.imgur.com/yxXDX7s.webp)



---

### 6. 匹配切 (Match Cut)

![|200](https://i.ytimg.com/vi/ptXlYulVAsM/hqdefault.jpg)
(Source:  [youtube.com: Creative Match Cut Examples & Editing Techniques for Your Next Shoot](https://youtu.be/ptXlYulVAsM?t=280)[youtube playlist](https://www.youtube.com/watch?v=cztKU_N3dy0&list=PLEzQZpmbzckWaFEvqma1sAppW8sF1OVjo))

---

- **匹配切换的本质**：通过连接前后场景中的共同元素实现平滑过渡，暗示场景间的深层联系 

---

三大元素：
    
- 图形匹配：利用相似形状和视觉元素
- 动作匹配：连接相近动作
- 音频匹配：运用声音元素  


---

#### 1. 图形匹配 (Graphic Match Cut)：

- 通过相似对象符号作为视觉连接线贯穿场景. 
- 迫使观众思考其中内涵可能的联系 
![bg fit left:50% vertical](https://i.imgur.com/EqmGSug.webp)
![bg fit left:50% vertical](https://i.imgur.com/OX896se.webp)

---


#### 2. 动作匹配 (Movement Match Cut)：

- 在两个场景的动作之间建立直接联系 02:18
- 生成叙事动力，思考两个事件的联系
![bg fit left:50% vertical](https://i.imgur.com/imr2cIB.webp)

![bg fit left:50% vertical](https://i.imgur.com/uY5SkgD.webp)

---

#### 3. 音频匹配 (Audio Match Cut)：

- 通过相似的声音进行场景转换
- 用情绪联将两个空间连在一起
- 可以与图形和动作匹配剪辑结合使用，增强整体效果

![bg fit left:50% vertical](https://i.imgur.com/vd8m5IX.webp)


---


![|200](https://i.ytimg.com/vi/L2ixDyItm04/hqdefault.jpg)
(Source:  [youtube.com: SFX Secrets: The Graphic Match Cut](https://youtu.be/L2ixDyItm04?t=171))

---


### 7. 交叉 (Cross )

![bg fit left:50% vertical](https://i.imgur.com/BCQDN6F.webp)

不同空间之间打电话, 约会并见面
甚至是幻想和现实之间切换，就像是一场现场的、连贯的对话。

---

![bg fit left:50% vertical](https://i.imgur.com/6BmVd8i.webp)
Hitchcock Strangers On A Train Opening Sequence


---


### 8. 平行剪辑 (Parallel Cutting)

不同空间之间打电话, 暗示这些场景正在同时发生.

1. 突出差异
2. 突出联系

#### ES. The Godfather

![bg fit left:50% vertical](https://i.imgur.com/QAGliIZ.webp)

---
#### Cross Cutting VS Parallel Cutting

交叉剪辑(Cross Cutting)和并行剪辑(Parallel Cutting)是两种不同的电影编辑技术:

1. 交叉剪辑(Cross Cutting)是在不同地点发生的动作序列之间来回切换。胃痛一件事增加紧张感,强化氛围,突出冲突。
    
2. 并行剪辑(Parallel Editing)是一种特定的交叉剪辑技巧。它通过在不同情节线之间交替切换来创造一种并行的叙事结构,让观众进行比较和对比。



---

### 9. 遮挡切 (Wipe Cut)

wipe cut 的优势

- **无缝**衔接时空
- 增加动感
- 常用于动态图形(字幕制作)
![bg fit left:50% vertical](https://i.imgur.com/xGS3y62.webp)


---
[[w12_pr_ practices_剪辑分析作业要求]]

<!--

### 6. 切出 (Cutaway)

从A-roll 切换到相关的B-roll作为符号，增加视觉多样性。



### (硬切 Hard Cut)
### 8. 对比切 (Contrast Cut)

TLDR: 在强烈对比的场景间切换，制造戏剧效果。
情绪对比切换
在紧张和平静场景间切换，制造情绪反差。


-->
