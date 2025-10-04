
# Reference

[[Source-Changing the world with AR -  Unity for Humanity]]

![bg fit left:50% vertical](https://i.imgur.com/J8WNNUE.png)

---





## Task 1:  Simple 🍉

创建第一个AR应用程序

在移动设备上创建并运行一个简单的AR应用，展示3D 模型
![bg fit left:50% vertical](https://assetstorev1-prd-cdn.unity3d.com/key-image/10f5d56b-8578-4f0d-b8a3-d1bc17fa153e.png?v=1)


---


### 1. 环境准备

安装所需的 Build Modules(构建模块)

  * Android build support（安卓设备）
  * iOS build support（苹果设备，需要Mac电脑）
![bg fit left:50% vertical](https://i.imgur.com/MjoXVcb.webp)


---

###  (暂时不建议)独立下载版
```
安装包以及模块的本地下载安装方式: 
https://unity.com/releases/editor/archive

```
![bg fit left:50% vertical](https://i.imgur.com/ZieJaP6.webp)

---

 (暂时不建议)
![bg fit left:50% vertical](https://i.imgur.com/a2P6dvW.webp)
![bg fit left:50% vertical](https://i.imgur.com/Enu3IjV.webp)

(Source:  [unity.com: Download Archive](https://unity.com/releases/editor/archive))


---

### 2 创建新项目
- 在 Unity Hub 中选择 `New > Unity 202x`
- 设置项目名称和位置

---

安装必要包,  `Window > Package Manager` 
  * AR Foundation
  * XR Plugin Management
	  * AR Core（安卓设备）
	  * AR Kit（苹果设备）
![bg fit left:50% vertical](https://i.imgur.com/pz0Qscp.webp)
---

### 3 设置AR环境
- 在 Hierarchy(层级窗口)创建会话 `XR > AR Session`
- 创建 AR 中心原点 ` XR > AR Session Origin` 
![bg fit left:50% vertical](https://i.imgur.com/nDtTEwO.webp)

---

- 删除 Main Camera(主摄像机)
- 设置 AR 相机 Tag(标签为) Main Camera

(相机标记为MainCamera后可通过Camera.main直接访问)

![bg fit left:50% vertical](https://i.imgur.com/RGZ14m7.webp)

---


### 4 添加3D模型
- 通过 `Window > Asset Store` 访问资源商店
- 搜索并下载 Food Pack
[unity](https://assetstore.unity.com/packages/3d/food-pack-3d-microgames-add-ons-163295)

![bg fit left:50% vertical](https://assetstorev1-prd-cdn.unity3d.com/key-image/10f5d56b-8578-4f0d-b8a3-d1bc17fa153e.png?v=1)


---


- 在项目窗口中找到模型
- 将模型拖放到 Hierarchy(层级窗口)
- 调整模型为物理比例, es:  0.1m(10厘米)
![bg fit left:50% vertical](https://i.imgur.com/z0Vjupd.webp)


---


5 场景控制技巧

- 使用 Gizmo 按钮切换是否显示符号
![bg fit left:50% vertical](https://i.imgur.com/45xygL0.webp)


---


## 部署游戏至 Android 设备

相关资料：
- PPT：[[Unity Build Android - AR Foundation]]
- PPT：[[Unity 构建 APK 时卡在 IPostGenerateGradleAndroidProject]]
- PPT：[[手机缺乏 ARCore 集成]]

如需了解所有问题及解决方案，请参阅：
PPT：[[Unity AR Android Issue]]


---


## 部署游戏到 IOS 设备

PPT: [[Unity Build IOS - AR Foundation]]

