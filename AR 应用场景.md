---
aliases:
  - AR
  - Augmented Reality
  - 增强现实
---

![](https://user-images.githubusercontent.com/2120584/86506046-52276b00-bd80-11ea-83de-77ceb634ac8c.gif)

---


## AR 开发环境因素


###  ARFoundation - 目标平台插件

ARFoundation 是Unity的跨平台AR框架, 为ARCore和ARKit等平台提供统一接口 
ARFoundation 的XR插件
- Android设备需要`ARCore` XR插件 
- iOS和visionOS设备则需要 `ARKit` XR插件来实现AR功能


![bg fit left:50% vertical](https://i.imgur.com/8OyJlPD.webp)

---

### ARSubsystems - 目标平台Tracking  方式支持

Subsystems Unity 的 AR Subsystems 包现已废弃，相关功能已集成到 AR Foundation 包中。用户需要在 manifest.json 文件中替换相关依赖项。如果使用的第三方包仍依赖于 AR Subsystems，则可能需要升级该第三方包或降级 AR Foundation 版本

| Feature(功能)           | ARCore Android | ARKit iOS | visionOS | HoloLens | Meta Quest |
| --------------------- | -------------- | --------- | -------- | -------- | ---------- |
| Session(会话)           | Yes            | Yes       | Yes      | Yes      | Yes        |
| Device tracking(设备跟踪) | Yes            | Yes       | Yes      | Yes      | Yes        |
| Camera(相机)            | Yes            | Yes       | -        | -        | Yes        |
| Plane detection(平面检测) | Yes            | Yes       | Yes      | Yes      | Yes        |
| Image tracking(图像跟踪)  | Yes            | Yes       | Yes      | -        | -          |
| Object tracking(物体跟踪) | -              | Yes       | -        | -        | -          |
| Face tracking(人脸跟踪)   | Yes            | Yes       | -        | -        | -          |
| Body tracking(人体跟踪)   | -              | Yes       | -        | -        | -          |
(Hands Tracking.)

---
###  目标平台选择

- Android开发需要PC和Android设备(Android Studio并非必需)
- iOS/visionOS开发则需要Mac和对应设备(**构建是依赖Xcode)**

es. 虽然技术上可以在PC上使用Mac构建服务器等工具开发iOS应用，但这会增加复杂性。


---

## Tracking Features

AR功能的基础
- 会话 (Session)
- 设备追踪 (Device Tracking)
- 摄像头 (Camera)

会话 (Session)是实现AR功能的基础，通过设备追踪 (Device Tracking)来定位设备在现实中的位置和姿态。

---


环境识别:
- 环境平面检测 (Plane Detection)以放置虚拟物体。
- 图像追踪 (Image Tracking)
- 物体追踪 (Object Tracking)

生物识别
- 人脸追踪 (Face Tracking)
- 身体追踪 (Body Tracking)
- ~~Hands Tracking~~


---


### Basic - 会话 (Session)

AR会话的管理，这是所有AR功能的基础。

### Basic - 设备追踪 (Device Tracking)

追踪设备在物理世界中的位置和方向, 它让虚拟内容能稳定地显示在现实环境中
### Basic - 摄像头 (Camera)

能否访问并操作设备的摄像头。系统使用摄像头进行场景渲染和视觉处理 


---

### 平面检测 (Plane Detection)

识别地面、桌面和墙壁等平面区域，可在其上放置虚拟物体，常用于家具摆放效果预览


![bg fit left:50% vertical](https://i.imgur.com/gNkfeHx.gif)


---

#### Case -IKEA Place

IKEA Place 是一款基于 ARKit 的免费应用，适用于 iOS 11 及以上版本的 iPhone 和 iPad。用户可以通过该应用将超过 2,000 件宜家家具虚拟摆放在家中，帮助做出购买决策，同时展现 ARKit 的强大功能。

![bg fit left:50% vertical](https://i.imgur.com/BMahhcA.webp)

---

#### Case -KAWS 第三个空间


街头 -- 衣服 -- 博物馆 -- "第三个空间" ''
KAWS作为街头艺术家，通过捕捉大众情绪来批判流行文化符号米奇。他的艺术作品打破了物理空间的限制，从街头艺术延伸到建筑前，又以商业艺术的形式出现在服装上，体现了消费主义特征。2022年，他更是与游戏平台合作，在美术馆这个"第三空间"展示其作品。

![bg fit left:50% vertical](https://i.imgur.com/Eo4Xnlw.webp)
![bg fit left:50% vertical](https://i.imgur.com/R4xco4Y.webp)

(Source:  [theguardian.com: Kaws: New Fiction review – an art show where you brush shoulders with virtual visitors | Exhibitions | The Guardian](https://www.theguardian.com/artanddesign/2022/feb/05/kaws-new-fiction-review-brian-donnelly-serpentine-gallery-north-london#img-2))

---


### 图像追踪 (Image Tracking)

识别图像并添加 AR 虚拟对象, 可用于追踪海报, 标志, QR 等目标 。

---


#### Case
以包装、标志、名片等各种物体为目标进行追踪, 并以其为锚点显示AR。例. Eyejack--`|AR transparent video playback in Unity – yuuuuu.net` [yuuuuu](https://yuuuuu.net/2018/02/04/ar-transparent-video-playback-based-on-vuforia-in-unity/) 
![|200](https://i0.wp.com/cdn.shopify.com/s/files/1/1502/2530/t/24/assets/eyejack-exhibitions.gif?w=1100&ssl=1)


---

--`|Unity  AR旋转罗盘(Vuforia)` [bilibili](https://www.bilibili.com/video/BV1CJ41177Xy?t=50)
![|200](http://i1.hdslb.com/bfs/archive/8e0e478ff78771beac85eddb2dc8efa319a895ed.jpg)



---

--非常花时间 ,[[Unity Mars]] to speed up the process`|the character interact with the environment in an intelligent way | Unity for Humanity` [youtube](https://www.youtube.com/watch?v=CrG8GkeFCog?t=1505)
![|200](https://i.imgur.com/xQAipBE.png)


---



### 物体追踪 (Object Tracking)

追踪现实世界中的3D物体。


---

#### Case
跟踪具有玩具和文具等特征的物体。 与图像识别相比,需要更多的工时, 例如需要提前扫描目标。 

例.Infiniti QX50 X-Ray --`|AR & VR Experiences for Creative Agencies & Brands | Unity` [unity](https://unity.com/solutions/brands-and-creative-agencies)--`|Visionaries 777 Ltd.` [vz777](https://www.vz777.com/index.html?project=project-infiniti_propilot_ar)
![|200](http://vz777.com/images/detail/infiniti_model_target/infiniti_model_target_slideshow-01.jpg)


---


**当代艺术与数字世界的融合**

(AR)和游戏平台Fortnite相结合,KAWS的"新虚构"展览。

艺术家创造了一个让不同世代、不同文化背景的观众得以对话的平台。展览中漂浮的Companion形象既是数字时代的象征,也是人类情感连接的媒介。

作品通过多维度呈现方式,探讨了在数字化时代艺术的真实性、可及性与永恒性。它提醒我们:艺术的本质不在于载体的形式,而在于其传达的情感与思想。

例. Street artist Kaws`|‘Who’s to say it’s not real?’ Street artist Kaws on creating Fortnite’s first exhibition | Street art | The Guardian` [theguardian](https://www.theguardian.com/artanddesign/2022/jan/18/kaws-fortnite-serpentine-street-art-augmented-reality)
![|200](https://i.guim.co.uk/img/media/b6a413807853326d0878b80880283c3139cd3afe/0_303_3912_2347/master/3912.jpg?width=1200&height=630&quality=85&auto=format&fit=crop&overlay-align=bottom%2Cleft&overlay-width=100p&overlay-base64=L2ltZy9zdGF0aWMvb3ZlcmxheXMvdGctZGVmYXVsdC5wbmc&enable=upscale&s=5a1daf3d9762e5c35c42551cd05bc407)





---


### 人脸追踪 (Face Tracking)

追踪人脸，并可以用于创建面部特效或虚拟试妆等应用。
![bg fit left:50% vertical](https://i.imgur.com/t3ZTRQd.webp)

---
![bg fit left:50% vertical](https://i.imgur.com/bhPGK5j.webp)

Fangli Jun的艺术作品以光头冷漠的人物形象为主要特征 通过夸张的哈欠表情来表达对现代社会的不满和疏离感 这些无表情的人物反映了在社会控制下个人的孤独和无助

---


#### Case
可以识别人脸并显示物体, 它在 Instagram、抖音和美图等相机应用中得到高度开发和广泛使用。
例. Beauty3000 --`|Johanna Jaskowska speaking her creative mind - Forward Festival` [forward-festival](https://forward-festival.com/article/johanna-jaskowska-speaking-her-creative-mind)



---


### 身体追踪 (Body Tracking)
用于全身动作交互控制,  进行人体关键点检测与追踪(Pose Estimation)等功能.

应用: 
- Motion Capture(运动捕捉)
- 全身交互（如虚拟角色驱动）
- 虚拟试衣

姿态估计
![bg fit left:50% vertical](https://i.imgur.com/hXoNEtT.webp)




---
## Further

#### 手势追踪 (Hands Tracking)


---


#### Markless (无标记) 
显示空中物体的 AR。根据周围信息调整显示位置, 但基本上不需要跟踪目标。 除此以外的AR都是基于标记AR(Marker-based)--`|What is Pokémon Go and why is everybody talking about it? - Vox` [vox](https://www.vox.com/2016/7/9/12132748/what-is-pokemon-go-game)
![|200](https://cdn.vox-cdn.com/thumbor/BOekFb2MEYAoVc-kJbvBwsMC2Xc=/0x58:804x479/fit-in/1200x630/cdn.vox-cdn.com/uploads/chorus_asset/file/6765237/20160708-pokemon-go.jpg)




---


### Street Art

可关联艺术家: [[Artisti/Keith Haring]]

![](https://publicdelivery.org/wp-content/uploads/2017/06/Keith-Haring-%E2%80%93-Crack-is-Wack-1986-handball-court-at-128th-Street-and-2nd-Avenue-New-York-1-2-800x600@2x.jpg?ezimgfmt=ng:webp/ngcb36)



---



通过AR为全球有变革意义的贡献.
移动设备上的AR应用在社会影响、教育、意识提升和环境保护方面发挥作用.



![bg fit left:50% vertical](https://lh3.googleusercontent.com/yR8GRREoLJ3cZYT5TgTgW8uLf6zizJdbQfnI9zYcd7q_syRhxGtL6Zmydvx6qQbA9PfzU8HVpycTg8KQqcUed6-3TIZsfLc)



**Just a Line**基于 ARCore,  在AR环境中自由创作简单的绘画，并通过视频分享作品.

在公共空间任意发挥个体情感.
与他人分享情绪或信息.
甚至构建一个全新的空间.

---

--`|Just a Line - Draw anywhere, with AR` [withgoogle](https://justaline.withgoogle.com/)
--`| AR Experiments: Expanding creative possibilities with ARCore` [youtube](https://www.youtube.com/watch?v=7SwZUNDsWaM?t=97)

---



### Story Museum

2016年底 Jack Sachs 在Tate(泰特美术馆) 将马戏团和玩具店的的欢腾气氛, 打破传统的博物馆参观方式，为观众提供了更多维度的心理与感官体验, 激发观众对艺术更特别的思考. 


--`|SHHH! Jack Sachs x Tate Britain | Blink Productions | Tate Collective | D&AD Awards 2017 Pencil Winner | Brand Expression in Moving Image | D&AD` [dandad](https://www.dandad.org/awards/professional/2017/branding/25976/shhh-jack-sachs-x-tate-britain/)
![bg fit left:50% vertical](https://i.imgur.com/LNzQSQ0.png)


---



### Consciousness Elevation
心理健康意识等各个方面: **增强精神健康和内在感知** 

应用如 Helium 可以通过生物反馈(es. Wareable Devices,  ) 让用户“看见”自己的情绪状态和body Physical cue(生理信号esBrainWave)，并用 AR 创造沉浸式的放松体验，从而增强个人对思想和情绪的觉知与控制


![bg fit left:50% vertical](https://i.imgur.com/fl7dmbb.webp)

---





--Sufficient light`|/ Persistent world-scale AR experiences with ARCore - Unite Copenhagen` [youtube](https://www.youtube.com/watch?v=op-zs0mJOH0?t=467)
--Cross Platform shared AR `|Cloud Anchor/ Persistent world-scale AR experiences with ARCore - Unite Copenhagen` [youtube](https://www.youtube.com/watch?v=op-zs0mJOH0?t=341)


![|200](https://i.ytimg.com/vi/op-zs0mJOH0/hqdefault.jpg)
```
Unity 集成了 ARCore Cloud Anchors, 允许多用户在同一地点同时感受到一致的虚拟内容，支持 iOS 和 Android
```
(Source:  [youtube.com: Get off to a great start with handheld AR - Unite LA](https://youtu.be/op-zs0mJOH0?t=106))



![|200](https://i.ytimg.com/vi/rgVm0J3_qGY/hqdefault.jpg)
```
Unite LA 演讲 AR Foundation 
```
(Source:  [youtube.com: Get off to a great start with handheld AR - Unite LA](https://youtu.be/rgVm0J3_qGY?t=377))

---


### 红外线
- **tof ar**(Time-of-Flight时间飞行) 是Sony开发的AR 工具包,。可访问手机上的深度传感器,通过测量光的时间飞行来获取3D深度信息,从而深度信息更稳定精确(VS 光学识别). 工具包支持(带红外线功能的)索尼、三星、华为和苹果的许多设备 (Source:  [tof-ar.com: ToF AR - AR・VRアプリケーション開発のための進化したツールキット](https://tof-ar.com/s/tofaren/))![bg fit left:50% vertical](https://i.imgur.com/ClA6tkP.webp)

---




## Tutorial

[[Unity - AR for Humanity_p1]]
[[Unity - AR for Humanity_p2]]

**AR Foundation Samples**：GitHub 上为初学者提供的一个很棒的资源。这些示例提供了预配置的场景，展示了各种AR功能，可以帮助你快速掌握ARFoundation概念。

![](https://user-images.githubusercontent.com/2120584/86506046-52276b00-bd80-11ea-83de-77ceb634ac8c.gif)
(Source:  [github.com: GitHub - Unity-Technologies/arfoundation-demos: AR Foundation demo projects](https://github.com/Unity-Technologies/arfoundation-demos))


官方范例文档下载 --`|Unity-Technologies/arfoundation-samples: Example content for Unity projects based on AR Foundation` [github](https://github.com/Unity-Technologies/arfoundation-samples)

--(45 分钟)官方AR Foundation 详解`|The speakers/ What’s new in Unity’s AR Foundation | Unite Now 2020` [youtube](https://www.youtube.com/watch?v=jBRxY2KnrUs?t=103)
![|200](https://i.ytimg.com/vi/jBRxY2KnrUs/hqdefault.jpg)


--`| Unity AR Foundation - AR Draw Adding Multi-Touch Support (Part 2)` [youtube](https://www.youtube.com/watch?v=juRvdphom8k?t=479)
![|200](https://i.ytimg.com/vi/juRvdphom8k/hqdefault.jpg)[youtube playlist](https://www.youtube.com/playlist?list=PLQMQNmwN3FvzLN-8moCKmZb00gr7sdcrZ)



--Vuforia`|如何开发增强现实AR程序（Vuforia, 无需编程)` [bilibili](https://www.bilibili.com/video/BV1134y167ik?t=318)
--Vuforia `4.5 Virtual Buttons(Vuforia)|Augmented Reality for Everyone - Full Course` [youtube](https://www.youtube.com/watch?v=WzfDo2Wpxks?t=29279)
--AR Foundation`|Introduction/ Learn AR Development: AR Foundation Face Detection` [youtube](https://www.youtube.com/watch?v=MJ5pd_xDD2A&list=PL4g4CxkYXn3sjtFTSEW0uGv8J9QLsEWm8&index=4?t=14)

--AR Foundation`|Placement Eagle Object Setup/ Getting Started With AR Foundation in Unity 2021 - AR Foundation 101 for Beginners (ARCore, ARKit)` [youtube](https://www.youtube.com/watch?v=lelX8GGh_S8?t=449)
![|200](https://i.ytimg.com/vi/lelX8GGh_S8/hqdefault.jpg)
--AR Foundation`|face Tracking` [youtube](https://www.youtube.com/watch?v=nfZHguNQYLA?t=209) `Channel VionixStudio` [youtube]
![|200](https://i.ytimg.com/vi/nfZHguNQYLA/hqdefault.jpg?sqp=-oaymwEbCKgBEF5IVfKriqkDDggBFQAAiEIYAXABwAEG&rs=AOn4CLB1Xt25iv9NEqbmV_hsu7WzU4ywzw)
--LBS (location-based service) , _LBS_社交 `008GoMap的图块机制` [bilibili](https://www.bilibili.com/video/BV1XJ411y7e7?t=12)
--`Unity定位SDK | 腾讯位置服务` [qq](https://lbs.qq.com/mobile/unityGeo/unityGeoGuide/unityGeoOverview)
--`游戏行业解决方案 | 高德地图API` [amap](https://lbs.amap.com/solution/game)


User interfaces VS interactions
AR 不需要学习 UI--`|Agenda/ 7 things you need to know when creating a mobile AR app | Unite Now 2020` [youtube](https://www.youtube.com/watch?v=Q3smmTWtzng?t=135)


