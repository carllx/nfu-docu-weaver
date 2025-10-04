

A sample app showing off how to use Image Tracking to track multiple unique images and spawn unique prefabs for each image.

The script [`ImageTrackingObjectManager.cs`](https://github.com/Unity-Technologies/arfoundation-demos/blob/master/Assets/ImageTracking/Scripts/ImageTrackingObjectManager.cs). handles storing prefabs and updating them based on found images. It links into the `ARTrackedImageManager.trackedImagesChanged` callback to spawn prefabs for each tracked image, update their position, show a visual on the prefab depending on it's tracked state and destroy it if removed.

The project contains two unique images [one.png](https://github.com/Unity-Technologies/arfoundation-demos/blob/master/Assets/ImageTracking/TrackedImages/one.png) [two.png](https://github.com/Unity-Technologies/arfoundation-demos/blob/master/Assets/ImageTracking/TrackedImages/two.png) which can be printed out or displayed on digital devices. The images are 2048x2048 pixels with a real world size of 0.2159 x 0.2159 meters.

The Prefabs for each number are prefab variants derived from [`OnePrefab.prefab`](https://github.com/Unity-Technologies/arfoundation-demos/blob/master/Assets/ImageTracking/Art/One/OnePrefab.prefab). They use a small quad that uses the [`MobileARShadow.shader`](https://github.com/Unity-Technologies/arfoundation-demos/blob/master/Assets/Common/Shaders/MobileARShadow.shader) in order to accurately show a shadow of the 3D number.

The script [`DistanceManager.cs`](https://github.com/Unity-Technologies/arfoundation-demos/blob/master/Assets/ImageTracking/Scripts/DistanceManager.cs) checks the distances between the tracked images and displays an additional 3D model between them when they reach a [certain proximity.](https://github.com/Unity-Technologies/arfoundation-demos/blob/master/Assets/ImageTracking/Scripts/DistanceManager.cs#L40)

the script [`NumberManager.cs`](https://github.com/Unity-Technologies/arfoundation-demos/blob/master/Assets/ImageTracking/Scripts/NumberManager.cs) handles setting up a [`contraint`](https://docs.unity3d.com/Manual/Constraints.html) (in this case used to billboard the model) on the 3D number objects and provides a function to enable and disabling the rendering of the 3D model.


这个应用程序可以识别和追踪特定的图片，并在这些图片上显示3D模型。

---



ImageTrackingObjectManager.cs 脚本负责存储和更新基于已识别图像的预制件。

1.通过 `ARTrackedImageManager.trackedImagesChanged` 回调来为每个跟踪的图像生成预制件，更新位置，
2.根据跟踪状态显示预制件的视觉效果，
3.并在需要时删除它们。

---


项目包含 one.png 和 two.png 两张图片，可打印或在电子设备上显示。图片分辨率为 2048x2048 像素，实际尺寸为 0.2159 x 0.2159 米。

---


Prefabs的每个数字都是从OnePrefab.prefab生成的变体，
使用带有MobileARShadow.shader的小四边形来精确显示3D数字的阴影效果

DistanceManager.cs
当追踪的图像之间距离达到指定范围时，脚本会测量它们的间距并在其中显示一个3D模型


## Script NumberManager.cs

这段C#脚本用于通过`AimConstraint`控制3D数字对象显示和朝向 
让数字始终面向 Player 并可开关显示功能. 

```csharp
	using System;
	using UnityEngine;
	using UnityEngine.Animations;
	
	public class NumberManager : MonoBehaviour
	{
	    /*
	    1. **模型对象(数字)的管理**：
		- 创建 `m_NumberObject` 的变量，用来存储一个数字对象（es.一个3D的数字模型）
		*/
	    [SerializeField]
	    [Tooltip("Number Object in the prefab")]
	    GameObject m_NumberObject;
	
		
	    public GameObject numberObject
		/*
		通过numberObject这个 get 和 set,
		可以让其他地方访问或修改这个数字对象.
	    */
	    {
	        get => m_NumberObject;
	        set => m_NumberObject = value;
	    }
	
	    AimConstraint m_Constraint;
	
	    void OnEnable()
	    {
	        ConstraintSource m_Source = new ConstraintSource();
	        m_Source.sourceTransform = Camera.main.transform;
	        m_Source.weight = 1.0f;
	        
	        m_Constraint = GetComponentInChildren<AimConstraint>();
	        m_Constraint.AddSource(m_Source);
	    }
		/*
		让某个物体始终朝向相机的功能
		
		
		
		代码主要做了这几件事
		- 创建了一个叫 AimConstraint 的组件 它就像是控制物体朝向的指挥官
		- 设置了一个Transform(变换) 也就是主相机的位置
		- 给这个源点设置了权重值 1.0 表示完全跟随
		- 最后把这些设置应用到物体上
		
		这种功能在游戏中很常见 比如 NPC 会一直盯着玩家看 或者武器始终对准目标 都是用类似的方式实现的
		*/
	
	    public void Enable3DNumber(bool enable)
	    {
	        m_NumberObject.SetActive(enable);
    }
}
```






1. **对象的朝向设置**：

- 当这个脚本启用时（OnEnable方法），系统会自动设置数字对象的朝向。
- 它使用了一个叫AimConstraint的组件，这个组件可以让数字对象始终朝向相机的位置（玩家的视角）。

1. **控制数字的显示**：

- 方法Enable3DNumber(bool enable)可以简单地打开或关闭这个数字对象的显示。例如，如果enable是true，数字会显示；如果是false，数字会隐藏。





---


这个程序有几个特别的功能：
- 可以同时追踪多个图片
- 3D模型会跟随图片移动
- 模型下方会显示逼真的阴影效果
- 当两个图片靠得足够近时，会触发特殊的3D效果
- 3D数字会始终面向相机，让你从任何角度都能看清

整个系统使用了多个脚本来控制这些功能，比如ImageTrackingObjectManager负责创建和更新3D模型，DistanceManager负责检测图片之间的距离，NumberManager则负责控制3D数字的显示方向。


---


Reference Image Library
	- Assets - create > XR > `Reference Image Library`
	- > Reference Object Library 是否识别物体 ?? `|XR Object Tracking Subsystem` [unity3d](https://docs.unity3d.com/Packages/com.unity.xr.arsubsystems@2.2/manual/object-tracking.html))
	- 进入`Reference Image Library` 内(点击) ,> Add Image
		- (矫正尺寸)  Specific Size : `true`
		- (矫正尺寸) Physical Size(m)
		- Keep Texture RunTime: `true`
		- Unity 支持上千张图片, Android 每次支持20

Ar Session Origin
- add Component `AR Tracked Manager(Script)`
	-  `AR Tracked Manager(Script)` 
		- Serialized Liberay: 拖入 Assets 的 `Reference Image Library`  以能查找这些图
		- Max Number Moving Image: 4
		- Track Image Perfab: 放入3DObject (如果scene  内有删除掉) -- [youtube](https://www.youtube.com/watch?v=CrG8GkeFCog?t=1419)
效果演示-- [youtube](https://www.youtube.com/watch?v=CrG8GkeFCog?t=1456)


## Trask 3 : Multiple Markers Multuple Objects
--`|2D Image Tracking with AR Foundation (Part 4) – andreasjakl.com` [andreasjakl](https://www.andreasjakl.com/2d-image-tracking-with-ar-foundation-part-4/)
![|200](https://www.andreasjakl.com/wp-content/uploads/2021/08/augmented-images-example.webp)


## Trask 4 :  Object on Marker 的指定位置
how place object in specific position



![](https://i.imgur.com/sNA46rC.png)


![](https://imgur.com/download/1Kefxvr)




## 5. 图像追踪设置
1. 添加图像追踪管理器
- 选择 AR Session Origin
- 添加组件 AR Tracked Image Manager
2. 创建参考图像库
- 右键项目窗口 > Create > XR > Reference Image Library
3. 配置图像设置
- 添加参考图像
- 设置图像尺寸
- 启用 Keep Texture at Runtime

