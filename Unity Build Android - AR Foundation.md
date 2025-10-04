#  部署 Android, AR Foundation

---

### 1. 构建设置配置 Build Setting

- 进入 `File > Build Settings`
- 选择 Android 选项卡
- 点击 Add Open Scenes
- 切换Platform(平台)至 Android

![bg fit left:50% vertical](https://i.imgur.com/ZGDk9xe.webp)

---


### 2. Run Device 设备选择
- 从下拉菜单选择已连接的 Android 设备
- 如无设备可选择默认设备

![bg fit left:50% vertical](https://i.imgur.com/az9FI6c.webp)


---


### 3. Player 设置调整
- 点击 Player Settings

![bg fit left:50% vertical](https://i.imgur.com/I9st7Rb.webp)

---

开发 AR 应用时
- 关闭 Auto Graphics API 
- 移除 Vulkan

由于 Android 不支持 Multi-threaded Rendering(多线程渲染)，使用 Vulkan 可能导致运行问题，建议禁用它
(Source:  [youtube.com: AR Foundation & Unity 01: Setup for Android](https://youtu.be/0mpsiO2lCx0?t=135)[youtube playlist](https://www.youtube.com/watch?v=DxH9CTzp6jI&list=PL6VJLOFcTt7b9h_1ECoTW5y-NILe001kJ))


![bg fit left:50% vertical](https://i.imgur.com/wTBtQ5K.png)


---


   - 在 XR Plugin Management 中：
     - 选择 Android 选项卡
     - 勾选 Initialize XR on Startup
     - 勾选 AR core

![bg fit left:50% vertical](https://i.imgur.com/zPT9h3j.webp)


---

![](https://i.imgur.com/7PpP3Lw.png)

#### 启用ARM64支持并重新构建项目

- 在 `Project Settings > Player > Android > Other Settings`。
- 将 `Scripting Backend` 更改为 **IL2CPP**（因ARM64仅支持IL2CPP）。
- 在 `Target Architectures` 中勾选 **ARM64**（同时可以保持ARMv7以支持32设备，具体需求请视目标设备决定）。

---

#### Minimun API Level. 

`Minimum API Level` Android 8.0(API级别26)是一个相对稳定的最低版本。
较高的 `Minimum API Level` 可以减小安装包体积，但会降低应用的用户覆盖范围。
建议将 `Minimum API Level` 设置为 11.0。
(Source:  [google.com: ARCore supported devices  |  Google for Developers](https://developers.google.com/ar/devices))


![bg fit left:50% vertical](https://i.imgur.com/qP3PG8f.webp)


---


### 4. Android 开启 USB 调试

根据自己的手机型号, 查询如何开启USB 调试模式


---



如何显示隐藏的开发者模式

   - 进入手机设置 > 关于手机
   - 点击版本号7次启用开发者选项

![bg fit left:50% vertical](https://i.imgur.com/MCmIIXa.webp)


---

开启 USB 调试

   - 进入设置 > 系统 > 开发者选项
   - 开启 USB 调试
   - 用USB数据线将安卓设备连接到电脑。
![bg fit left:50% vertical](https://i.imgur.com/q3W0yJB.webp)

---




### 5. 应用构建与部署
   - 为应用命名并保存
   - USB 连接 PC
   - 点击 Build and Run
   - 等待构建完成自动在手机上启动

![bg fit left:50% vertical](https://i.imgur.com/KsPEzfs.webp)


---



课上可能遇到的问题参见PPT :

[[Unity AR Android Issue]]
