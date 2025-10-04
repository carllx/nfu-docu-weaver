
![|200](https://i.ytimg.com/vi/F7LJKnDqopk/hqdefault.jpg)
(Source:  [youtube.com: Packaging and Testing ARFoundation Examples - Unity Augmented Reality/AR](https://youtu.be/F7LJKnDqopk?t=139))
[[Source - ARFoundation02 - Packaging and Testing ARFoundation Examples - Unity]]



## Github下载 AR Foundation 示例项目



1 获取项目文件
- 访问 Unity AR Foundation GitHub 仓库
- 选择下载方式
  * 使用 Clone 功能克隆仓库
  * 或下载 ZIP 文件并解压
(Source:  [github.com: GitHub - Unity-Technologies/arfoundation-samples: Example content for Unity projects based on AR Foundation](https://github.com/Unity-Technologies/arfoundation-samples))


![bg fit left:50% vertical](https://i.imgur.com/PGR4NTV.webp)

---


2 项目版本确认
- 确认使用 Unity 2019 或更新版本
- 如使用 Unity 2018 需查看 preview 分支
![bg fit left:50% vertical](https://i.imgur.com/EbPeXzX.webp)
---


3 浏览项目文档
- 查看项目主页的兼容性说明
- 阅读设备限制说明
- 查看示例场景文档
![bg fit left:50% vertical](https://i.imgur.com/PEMxOKG.webp)


---


4 导航项目结构
- 打开解压后的项目文件夹
- 进入 Assets 文件夹
- 找到 Scenes 文件夹
- 选择要测试的示例场景


## AR 项目的预装包



1 打开 Package Manager
- 通过 `Window > Package Manager` 进入包管理器界面

---


2 确认预装包状态
- 查找并确认 AR Foundation 包
  * 在包列表中找到 AR Foundation
  * 检查状态是否显示 Remove 选项（表示已安装）

- 查找并确认 AR Subsystems 包
  * 在包列表中找到 AR Subsystems
  * 检查状态是否显示 Remove 选项（表示已安装）

- 查找并确认 ARCore Plugin 包
  * 在包列表中找到 ARCore Plugin
  * 检查状态是否显示 Remove 选项（表示已安装）

![bg fit left:50% vertical](https://i.imgur.com/0VekdGT.webp)

---

3 理解包的用途
- 识别这些预装包与标准新项目的区别
- 了解这些包在 AR 项目中的基础作用
- 注意项目中可能包含不需要使用的功能组件

---

## Simple AR 平面检测


1. 场景设置
- 打开 Scenes 文件夹
- 选择 Simple AR 场景
- 检查场景中的基础 UI 按钮功能：
  * Pause：暂停操作
  * Reload：重置平面
  * Reset：重新加载整个场景
  * Resume：继续操作

![bg fit left:50% vertical](https://i.imgur.com/K9C1LyU.webp)

---

2. AR 组件配置
- 添加必要的 AR Foundation 组件：
  * AR Session
  * AR Session Origin
  * AR Plane Manager

---


3. 物体放置设置
- 确认默认放置物体：AR Placed Cube（红色立方体）
- 检查平面检测脚本
- 验证物体放置触发条件：
  * 检测到有效平面
  * 平面被 AR 系统追踪
  * 用户选择放置位置

---


4. 项目结构识别
- 区分 AR Foundation 内置脚本（Google Cardboard 图标）
- 识别模板特定脚本
- 确认场景依赖组件

---


注意事项：
- 所有 AR Foundation 脚本都包含在项目中
- 需要确保 AR Session 和 AR Session Origin 的正确配置
- 平面检测是大多数 AR 项目的基础功能
