[[PPT_非线性剪辑_Premiere]]
[[Source - Complete Adobe Premiere Pro Megacourse Beginner to Expert (01-10)]]
\

---

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





