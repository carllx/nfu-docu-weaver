
# Reference
[[Unity - AR for Humanity_p1]]
[[Source-Changing the world with AR -  Unity for Humanity]]

---

## Task 2: 增加图片识别

![bg fit left:50% vertical](https://i.imgur.com/iynHOCC.webp)


项目包含两张图片，
- [one.png](https://github.com/Unity-Technologies/arfoundation-demos/blob/master/Assets/ImageTracking/TrackedImages/one.png)
- [two.png](https://github.com/Unity-Technologies/arfoundation-demos/blob/master/Assets/ImageTracking/TrackedImages/two.png)  

可打印或在数字设备上显示。图片尺寸为 2048x2048 像素，实际大小为 0.2159 x 0.2159 米。

---

## 创建AR 图像识别系统

1. 配置 AR 图像追踪系统
- 选择 AR Session Origin
- 点击 Add Component
- 搜索并添加 AR Tracked Image Manager
- 设置 Maximum Number of Moving Images 为 4

![bg fit left:50% vertical](https://i.imgur.com/Lo2iOoG.webp)



---

## AR Tracked Image Manager(追踪图像管理器)

- 检测环境中的图像
- 为其创建GameObject(游戏对象)

使用前需要将目标图像添加到参考图像库中，管理器只能识别库(清单)中预设的图像。

---


### Max Number of Moving Images


- 注意事项：
  - 使用小写字母命名的 JPEG 格式
  - 最多支持 1000 张图片
  - Android 设备可同时追踪 20 个图像



<!--  
`SubsystemDescriptor` `ARTrackedImageManager.descriptor`.


部分系统可以追踪动态图像，但这需要更多 CPU 资源。
C# 中, 可以通过 ARTrackedImageManager.descriptor 设置同时追踪的图像数量。


```csharp
using UnityEngine;
using UnityEngine.XR.ARFoundation;

public class ARImageTrackingExample : MonoBehaviour
{
    private ARTrackedImageManager _arTrackedImageManager;

    private void Awake()
    {
        _arTrackedImageManager = GetComponent<ARTrackedImageManager>();
    }

    private void Start()
    {
        // 设置最大移动图像数量为 10
        _arTrackedImageManager.maxNumberOfMovingImages = 10;
    }
}

```


-->


2. 创建图像标记库
- 将目标图片拖放到 Unity 中

![bg fit left:50% vertical](https://i.imgur.com/fHircRj.webp)

---
### 创建 XR Reference Image Library

- 在项目窗口中右键点击
- 选择 Create > XR Reference Image Library
![bg fit left:50% vertical](https://i.imgur.com/6AUo418.webp)



---

- 在库中添加图片：
  - 选择库文件
  - 点击 Add Image
  - 拖入目标图片
  - 勾选 Specify Size
  - 设置尺寸为 0.2（20厘米）


![bg fit left:50% vertical](https://i.imgur.com/H7w6qnD.webp)


---


### `Keep Texture at Runtime` 选项

- **不勾选**, 可节省空间但无法获取图片。
- **勾选**, 运行时可访问图片数据，用于显示参考图像缩略图或通过 `XRReferenceImage.texture` 获取。

例如:
- 展示可识别图片的缩略图供参考
- 产生于原图一致的颜色粒子



---

3. 准备 AR 内容(模型)
- 将模型调整为合适大小（0.1米）
- 创建预制体变体：
	- 将模型从层级窗口拖入项目窗口
	- (删除场景中原有的机器人对象)


---


4. 连接图像标记和 AR 内容
- 选择 AR Session Origin
- 将创建的图像库拖入 Reference Library 字段

![bg fit left:50% vertical](https://i.imgur.com/44GjUMv.webp)


---


- 将模型预制体变体拖入 Tracked Image Prefab 字段

![bg fit left:50% vertical](https://i.imgur.com/Ne6u6fN.webp)

---


5. 构建和测试
- 点击 Build and Run
- 使用手机摄像头对准图像标记
- 观察 AR 内容在标记上的显示效果

---


可扩展功能建议：
- 添加交互功能
- 实现多图像标记联动效果
- 在照片上显示视频内容
- 创建 AR 艺术展示
- 开发教育应用
- 制作社会活动宣传内容




