[[PPT_非线性剪辑_Premiere]]


# Practices


练习素材: 链接: https://pan.baidu.com/s/1lks8JJvST54pqob9O-7AHQ?pwd=tmwv 提取码: tmwv 

---
## 2 Adobe Premiere Pro 入门指南

<!--  

本文介绍了 Adobe Premiere Pro 的基本操作和界面布局。

-->

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

