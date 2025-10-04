## Unity Build IOS - AR Foundation

iOS 部署前提条件：
1. 需要 Mac 电脑
2. 需要通过 App Store 安装 Xcode
![bg fit left:50% vertical](https://i.imgur.com/2oCumuR.webp)

---

1. 环境准备

-  Hub 安装时勾选 iOS Build Support 选项
- Unity 项目中 package manager 安装必要包：
  • AR Foundation
  • XR Plugin Management  
  • AR Kit Package


![bg fit left:50% vertical](https://i.imgur.com/M89bzpe.webp)

---

2. Unity 项目配置
- 进入 `File > Build Settings`
- 选择 iOS 平台选项卡
- 点击 `Add Open Scenes`
- 点击 Switch Platform `Build Setting > switch to IOS. `
![bg fit left:50% vertical](https://i.imgur.com/oMR1He5.webp)

---

- 进入 Player Settings：requires ARKit support ,勾选
  • 勾选 Requires AR Kit Support (滚动到下面找) 
  • 设置 Target Minimum iOS Version 为 11.0

![bg fit left:50% vertical](https://i.imgur.com/j3Sj1KS.webp)

---


- `Project Setting > XR plug-in Management` ：
  • 选择 iOS 选项卡
  • 勾选 Initialize XR on Startup
  • 勾选 AR Kit

![bg fit left:50% vertical](https://i.imgur.com/qRMW60A.webp)


---


3. 构建应用
- 在 Build Settings 中点击 Build and Run
- 选择一个空文件夹保存应用
![bg fit left:50% vertical](https://i.imgur.com/tiOPm1T.webp)

---


- 等待构建完成，Xcode 会自动打开
- 如未自动打开，在 Finder 中双击 .xcodeproj 文件


---



4. Xcode 配置
- 点击左上角 Unity-iPhone
- 配置 Apple ID：
  • 打开 `Xcode > Preferences > Accounts`
  • 使用加号添加 Apple ID

![bg fit left:50% vertical](https://i.imgur.com/wWlXxwy.webp)


---


- 返回项目设置：
  • 选择 Signing & Capabilities
  • 勾选 Automatically Manage Signing
  • 启用 Automatic
  • 选择Team 开发团队


![bg fit left:50% vertical](https://i.imgur.com/SHWIDPk.webp)


---

- 可选：在 General 标签中设置应用显示名称和标识符
![bg fit left:50% vertical](https://i.imgur.com/fGrxC2J.webp)

---
6. 部署运行
- 在 Xcode 顶部选择目标设备



![bg fit left:50% vertical](https://i.imgur.com/mQjsm7E.webp)



---
5. iOS 设备配置
- 连接 iOS 设备到 Mac
- 在设备上进入 `Settings > Device Management > Apple Development`
- 点击 Trust Developer (信任开发者) 并确认

![bg fit left:50% vertical](https://i.imgur.com/TMQFjg9.webp)

---

![bg fit left:50% vertical](https://i.imgur.com/miFH5bk.webp)
- 点击运行按钮开始构建和部署
- (设置好后回到Unity 的Build setting 点击  Build and Run 等待进度完成)
- iphone 或 Ipad 会自动安装好app

