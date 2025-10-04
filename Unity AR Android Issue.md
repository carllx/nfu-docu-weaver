

##
This project is using the new input system package but the native platform backends for the new input system are not enabled in the player settings. This means that no input from native devices will come through.

当比较 android 版本时需要注意以下几点

1 检查 Player Settings 中的输入系统配置
2 确保启用新输入系统的原生平台后端支持
3 重启编辑器以使新输入系统设置生效
4 验证设备输入是否正常工作
5 确认 Input System package 的版本兼容性

  

Do you want to enable the backends? Doing so will *RESTART* the editor.

---



## [[手机缺乏 ARCore 集成]]


---

## [[Unity 构建 APK 时卡在 IPostGenerateGradleAndroidProject]]


---

## ERROR: ARFoundation 与 Vuforia Engine 冲突


使用 ARFoundation 的 graphics API图形接口 与 Vulkan 不兼容, 系统就会报错。

> `BuildFailedException:` You have enabled the Vulkan graphics API, which is not supported by ARCore.


---


解决方案:

1. 在Player Settings(玩家设置)中找到Auto Graphics AP(I图形接口)选项
2. 直接删除 Vulkan
3. 改用 OpenGLES3 或 OpenGLES2 这两种兼容的接口 [unity](https://forum.unity.com/threads/you-have-enabled-the-vulkan-graphics-api-which-is-not-supported-by-arcore.896741/#post-5904272)

[stackoverflow](https://stackoverflow.com/questions/63355525/arcore-application-doesnt-work-after-building/63384293#63384293)( [google developers](https://developers.google.com/ar/develop/unity/quickstart-android#configure_project_settings))

![bg fit left:50% vertical](https://i.imgur.com/wTBtQ5K.png)

---

## ERROR: Cant select run device, When Build app

在Unity中构建应用程序时，如果出现"无法选择运行设备"的错误，很可能是因为你还没有安装Android NDK（Native Development Kit）。因此无法为Android设备制作应用。

解决方法很简单 [unity](https://forum.unity.com/threads/cant-select-run-device-oculus.1174349/)：
1. 打开Unity Hub
2. 找到你的Unity版本
3. 点击"Add Module"（添加模块）选项
4. 找到Android开发相关的包并安装

![bg fit left:50% vertical](https://i.imgur.com/hWnzits.png)

![bg fit left:50% vertical](https://i.imgur.com/bMWpwad.png)

---


## ERROR: Failed to call Unity ID to get auth code

在Unity中如果遇到
"Failed to call Unity ID to get auth code"（无法获取Unity身份验证代码）
>UnityEditor.AsyncHTTPClient:Done(UnityEditor.AsyncHTTPClient/State,int)(at/Users/bokken/buildslave/unity/build/Editor/Mono/AsyncHTTPClient.cs:248) Failed to call Unity ID to get auth code.  

通常是由于登录状态出现问题。

---


解决这个问题的方法：

- (不需要关闭Unity程序)
- 直接在Unity Hub中退出账号
- 重新登录账号
- (正在运行的Unity程序会自动更新连接)

(Source:  [unity.com: My Assets error (Failed to call Unity ID to get auth code) - Unity Engine - Unity Discussions](https://discussions.unity.com/t/my-assets-error-failed-to-call-unity-id-to-get-auth-code/794374))


---

Java Development Kit (JDK) directory is not set or invalid. Please, fix it in `Edit / Unity -> Preferences -> External Tools`
Java开发工具包(JDK)目录未设置或无效。请在 编辑/Unity -> 首选项 -> 外部工具 中修复此问题


Failed getting available Android API levels. Could not find Android SDK Tools.
UnityEngine.GUIUtility:ProcessEvent (int,intptr,bool&) (at /Users/bokken/build/output/unity/unity/Modules/IMGUI/GUIUtility.cs:203)


获取可用的Android API级别失败。找不到Android SDK工具。
UnityEngine.GUIUtility:ProcessEvent (int,intptr,bool&) (位于 /Users/bokken/build/output/unity/unity/Modules/IMGUI/GUIUtility.cs:203)

(Source:  [oracle.com: Java Downloads | Oracle Hong Kong SAR, PRC](https://www.oracle.com/hk/java/technologies/downloads/#jdk23-mac))

---
This project is using the new input system package but the native platform backends for the new input system are not enabled in the player settings. This means that no input from native devices will come through.

  

Do you want to enable the backends? Doing so will *RESTART* the editor.


此项目正在使用新的输入系统包，但新输入系统的原生平台后端在播放器设置中未启用。这意味着来自原生设备的输入将无法传递。


是否要启用后端？启用将会使编辑器重新启动。

---


## Unsupported Input Handeling with BOTH

w1_ wuyoulin 同学的问题

(Source:  [stackoverflow.com: Unity: Conflict between new InputSystem and old EventSystem](https://stackoverflow.com/questions/65027247/unity-conflict-between-new-inputsystem-and-old-eventsystem))

![bg fit left:50% vertical](https://i.imgur.com/fVQi5A4.webp)

![bg fit left:50% vertical](https://i.imgur.com/B7aa2VU.webp)
```markdown
**Unsupported Input Handeling**
Player Settings-> Active Input Handling is set to **Both**, this is unsupported on Android and might cause issues with input and application performance. Please choose only one active input handling. Ignore and continue?

(This dialog wort appear again in this Editor session if you'll choose Yes)
```

Player Settings 警告：在 Android 平台上不支持同时使用Both(两种) Active Input Handling(输入系统)，可能影响输入和性能表现。

问题说明：
- Canvas 组件使用新输入系统时与旧系统冲突，导致 InvalidOperationException
- 原因是同时启用了 Input System 包和 UnityEngine.Input

解决方法1：
1. 在项目设置中选择单一输入系统
2. 使用 Inspector 自动更新
3. 确认已安装 com.unity.inputsystem

注意：部分用户反馈以上方法可能无法完全解决问题，因为这是系统兼容性冲突。

解决办法2:

![bg fit left:50% vertical](https://i.imgur.com/EMegXli.webp)


---

## 如何重新安装 Unity 模块

(例如 重新安装 Unity Hub  的 Android Build Support 模块，包括 SDK 和 NDK)

---

在 Unity 的 Editor目录 , 找到 `modules.json` 文件
- PC: `C:\Program Files\Unity\Hub\Editor` 或 
- MacOS: `/Volumes/T7-carllx2T/Applications/Unity/2022.3.xxx`

- 将需要重装的模块的 selected 值改为 false，保存
- 重启 Unity Hub 即可重新安装。
- (非必须)手动删除旧模块文件。

![bg fit left:50% vertical](https://i.imgur.com/LWVkI5K.webp)


---

## 手机打开apk 黑屏现象

调查过程

怀疑是技术堆栈问题：开发者通过日志文件发现可能与Unity的图形处理系统（Graphics Stack）有关。

```
根据提供的崩溃日志以及开发者的描述，问题出在Unity图形处理系统（Graphics Stack）的初始化阶段。具体日志显示关键调用出现在
PlayerInitEngineGraphics
函数中，它负责Unity的图形初始化。堆栈错误通常意味着：


Unity引擎在与设备的GPU和操作系统进行交互时发生了图形内存管理或资源分配的错误（例如
MemoryManager::GetAllocatorContainingPtr
和
transfer_ownership
函数相关问题）。
安卓安全更新可能调整了底层图形API（如Vulkan或OpenGL ES）的权限或使用方式，导致Unity旧版本与新版安卓不兼容。

综上，问题核心在于Unity旧版本的图形处理系统无法正确适配最新安卓系统的图形API行为或安全策略。
```


可能是安卓和Unity的兼容性问题：开发者尝试降级安卓版本，但仍未解决崩溃。
最终查明是Unity构建配置的原因：通过升级Unity到LTS版本（长期支持版），并按照网上的参考修改了构建配置文件（
mainTemplate.gradle
），问题得以解决。