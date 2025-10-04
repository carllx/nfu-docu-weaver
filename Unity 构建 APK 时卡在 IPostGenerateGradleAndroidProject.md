## 卡在 IPostGenerateGradleAndroidProject 阶段
是因为无法访问 Google 服务

<!--  `Unity building APK is stuck at the "Calling IPostGenerateGradleAndroidProject callbacks" stage.`
-->

![bg fit left:50% vertical](https://i.imgur.com/6Y6gsnQ.webp)

![bg fit left:50% vertical](https://i.imgur.com/6YMYxUU.webp)

![bg fit left:50% vertical](https://i.imgur.com/iLpouPX.webp)

---




## 1. Clear Cache and Rebuild 


删除用户目录下的` .gradle `文件夹, 清除残留的 Gradle 缓存文件.

Windows系统, 该文件夹位于：` C:\Users\<用户名>\.gradle`

或终端控制台
```bash 
# Windows系统: 
rm %USERPROFILE%\.gradle\caches

# Mac / UNIX系统: 
rm ~/.gradle/caches/
```
(base) yamlam@yams-Air-m1 ~ % rm ~/.gradle/caches/



rm -r ~/.gradle/caches/

---



## 2.Unity配置Gradle国内镜像源

1. 定位Unity安装目录中的`settingsTemplate.gradle`文件：

MacOS系统路径：
`/Applications/Unity/Hub/Editor/[版本号]/PlaybackEngines/AndroidPlayer/Tools/GradleTemplates`

Windows系统路径(例如)：
`D:\UnityEditor\[版本号]\Editor\Data\PlaybackEngines\AndroidPlayer\Tools\GradleTemplates`



---


2 打开settingsTemplate.gradle, 将所有google()替换为:

```Groovy
maven {url "https://maven.aliyun.com/repository/google"}
maven {url "https://maven.aliyun.com/repository/jcenter"}
```

![bg fit left:50% vertical](https://i.imgur.com/QH6HFTa.webp)


---
修改配置示例:
![bg fit left:50% vertical](https://i.imgur.com/2Am5b2d.webp)

---

完成配置后重新构建项目即可使用国内镜像源加速下载依赖


---

`**ARTIFACTORYREPOSITORY**`
 是占位符模板，它们的值可能会在构建时或某些导出过程中由工具（如 Unity 或自定义脚本）动态替换为实际值。

