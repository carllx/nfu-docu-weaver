
扫描Slit(狭缝)效果的项目

![|200](https://i.ytimg.com/vi/jOcMCGtclBs/hqdefault.jpg)
(Source: [youtube.com: Intro / Overview/ (3) Slitscan  – TouchDesigner Tutorial 21 - YouTube](https://youtu.be/jOcMCGtclBs?t=11))

![|200](https://i.ytimg.com/vi/jEh2fCXFN6c/hqdefault.jpg)
(Source: [youtube.com:  (7) Slit Scan with Feedback TOP in TouchDesigner - YouTube](https://youtu.be/jEh2fCXFN6c?t=668))

[[Source - IntroOverviewSlitscan  – TouchDesigner Tutorial 21]]



---

![bg fit left:50% vertical](https://i.imgur.com/YIqkLmH.webp)

![|200](https://scontent.cdninstagram.com/v/t51.2885-19/64392580_675535579552151_8539874441767682048_n.jpg?stp=dst-jpg_s100x100_tt6&_nc_cat=101&ccb=1-7&_nc_sid=bf7eb4&_nc_ohc=MGU2VkGYHAIQ7kNvgF5JZr1&_nc_oc=Adh2S5BYP55wfMeKaop3Ri8nkSIcNc6MoBI6PsHaLqjUOScuf9u_EAdBzTwsYFcMsMY&_nc_zt=24&_nc_ht=scontent.cdninstagram.com&oh=00_AYBXh6Y1I3Cf6CK4_cfD1SmHhNBxbnTbGj3VEqNJFTxZXw&oe=67CA35F7)
(Source: [instagram.com: Francois Vogel (@francois.vogel) • Instagram photos and videos](https://www.instagram.com/francois.vogel/))

---




这个Slit扫描项目需要以下TouchDesigner元件：

*   **Movie File In TOP:** 用于导入视频文件作为输入 .
*   **Fit TOP:** 用于调整视频的尺寸，确保其符合目标分辨率，例如1280x720 .
*   **Null TOP:**  用作节点之间的连接点，方便管理和调整 .
*   **Composite TOP:** 用于将多个图像合成在一起，本例中用于反馈循环中的图像叠加，操作设置为"Over" .
*   **Rectangle TOP:**  创建一个矩形，用作“Slit”，控制可见图像的区域 . 教程中建议将Y设置为1，大小设置为0.03，并复制Fit TOP的分辨率参数。
*   **Multiply TOP:** 用于将矩形和视频帧相乘，实现Slit效果 .
*   **Feedback TOP:**  创建一个反馈循环，将先前的帧与当前帧组合，产生时间上的连续效果 .
*   **Transform TOP:** 用于平移图像，是实现Slit扫描效果的关键，通过轻微的X轴平移，使“Slit”移动  [T-MORE]().
*   **Flip TOP (可选):** 用于翻转图像，以调整镜像效果 .
*   **Displace TOP (可选):** 用于创建图像扭曲效果 . 将Y设为0，X设为0.03或0.02可以产生有趣的视觉效果 .
*   **Texture 3D TOP 和 Time Machine TOP (可选):** 结合 Ramp TOP，用于创建时间扭曲效果 . Texture 3D用于存储过去帧的信息, Time Machine修改帧播放顺序. 
*   **Ramp TOP (可选):**  为Time Machine TOP提供输入，控制时间扭曲的方式 .
*   **Level TOP (可选):** 用于调整图像的亮度、对比度等后期效果 .
*   **BG Null TOP (可选):** 创建背景颜色 .



该 YouTube 视频项目（[https://www.youtube.com/watch?v=jOcMCGtclBs](https://www.youtube.com/watch?v=jOcMCGtclBs)）是一个使用 TouchDesigner 软件创建扫描Slit效果的项目。以下是该项目所涉及的组件及其解释：
通过在 TouchDesigner 中组合这些组件，艺术家可以创建一个装置，该装置捕获视频，隔离其垂直切片，然后通过反馈和变换，随时间拉伸和位移此切片，以实现扫描Slit效果。


---

### Movie File In TOP [01:52](https://www.youtube.com/watch?v=jOcMCGtclBs&t=112)
用于将电影文件导入到项目中。 它可以替换为其他视频源，例如网络摄像头或噪点。



---

### Fit TOP [02:16](https://www.youtube.com/watch?v=jOcMCGtclBs&t=136)
用于将输入视频的分辨率调整为特定尺寸（在本例中为 1280x720），同时保持其纵横比。 确保后续处理的分辨率一致。


---

### Null TOP (BG) [03:20](https://www.youtube.com/watch?v=jOcMCGtclBs&t=200)
充当背景，有助于组织网络。 它设置为显示，其 Alpha 值调整为 1，并启用了“comp over background color”颜色。


---

### Composite TOP [02:42](https://www.youtube.com/watch?v=jOcMCGtclBs&t=162)
设置为“Over”操作，用于将多个输入混合在一起。 在此设置中，它用于将原始视频源与反馈循环结合起来，以创建扫描Slit效果。


---

### Rectangle TOP [03:40](https://www.youtube.com/watch?v=jOcMCGtclBs&t=220)
充当“Slit”或遮罩，其高度设置为 1 像素。 只有通过此Slit的视频部分是可见的，从而产生扫描效果。


---

### Multiply TOP [04:13](https://www.youtube.com/watch?v=jOcMCGtclBs&t=253)
用于将矩形遮罩应用于视频源。 它将视频与矩形的黑白图像相乘，有效地从视频中切出一个Slit。


---

### Feedback TOP [05:07](https://www.youtube.com/watch?v=jOcMCGtclBs&t=307)



	对于创建扫描Slit效果至关重要。 它获取网络的输出并将其反馈到输入中，从而创建循环。 此循环允许随时间推移累积和操纵帧，这对于扫描Slit外观至关重要。
![bg fit left:50% vertical](https://i.imgur.com/o6hIUmM.webp)

![bg fit left:50% vertical](https://i.imgur.com/t9RrVDC.webp)

#### Pulse
![bg fit left:50% vertical](https://i.imgur.com/YUI1Kip.webp)


---

### Transform TOP [05:14](https://www.youtube.com/watch?v=jOcMCGtclBs&t=314)
在反馈循环中使用，以在每次迭代时稍微移动图像。 这种移动与Slit相结合，在位移方向上拉伸或压缩视频，从而产生扫描Slit的时间位移效果。


---

### Level TOP [03:06](https://www.youtube.com/watch?v=jOcMCGtclBs&t=186)
用于后期处理调整，如亮度和对比度。 它可以微调最终输出的视觉特征。


---

### Flip TOP [07:07](https://www.youtube.com/watch?v=jOcMCGtclBs&t=427)
引入用于翻转视频源，这对于纠正镜像问题或出于对扫描Slit效果方向的美学偏好非常有用。


---

### Displace TOP [11:11](https://www.youtube.com/watch?v=jOcMCGtclBs&t=671)
为扫描Slit输出添加位移效果，从而产生迷幻和扭曲的外观。 它根据位移图移动像素，在本例中，使用视频本身来创建自位移。


---

### Texture 3D TOP [12:12](https://www.youtube.com/watch?v=jOcMCGtclBs&t=732)
与 Time Machine TOP 结合使用，以引入基于时间的效果。 它将视频的先前帧存储在 3D 纹理中，从而可以访问历史视频数据。


---

### Time Machine TOP [12:25](https://www.youtube.com/watch?v=jOcMCGtclBs&t=745)
利用 Texture 3D TOP 基于时间扭曲视频。 它需要第二个输入，通常是 Ramp TOP，以定义时间扭曲如何在视频中应用。


---

### Ramp TOP [12:41](https://www.youtube.com/watch?v=jOcMCGtclBs&t=761)
提供渐变纹理，Time Machine TOP 使用该纹理来控制时间扭曲效果。 不同的渐变方向和图案可以产生不同的扭曲效果。


---



# TouchDesigner 中实现 Slitscan 效果的步骤

欢迎来到这个 TouchDesigner 教程！今天我将为您介绍如何实现 Slitscan 效果，这是一种非常有趣的视觉时间扭曲技术。根据教程的内容，我为您整理了详细的实现步骤。

## 基础设置

1. **准备输入源**
   - 添加一个 `Movie In` 或 `Video Device In`（可以使用网络摄像头或视频文件）
   - 添加 Fit TOP 并设置为 1280×720 分辨率
   - 将 Fit 模式设置为 "Fit Outside"
   - 添加一个 Null 节点作为基础输入源



---


1. **创建基本显示结构**
   - 添加一个 Composite TOP（设置为允许多于两个输入）
   - 在网络末端添加 Level、Transform 和 Null 节点作为 BG
   - 在 BG 中将 Alpha 设置为 1，并开启 "Comp Over Background Color"

## 创建 Slitscan 效果

1. **设置扫描缝隙**
   - 添加一个 Rectangle TOP
   - 将 Y 值设置为 1
   - 将尺寸设置为 0.03
   - 复制 Fit TOP 的分辨率到 Rectangle TOP

2. **合并图像**
   - 添加 Multiply TOP
   - 连接 Rectangle 和输入源到 Multiply

3. **创建反馈循环**
   - 添加 Composite TOP（操作设为 Over）
   - 添加 Feedback TOP
   - 添加 Transform TOP 并连接到 Feedback
   - 将 Transform 连接到 Composite
   - 将 Composite 连接到 Feedback
   - 在 Transform 中设置 X 偏移为 -0.001（控制速度）

4. **优化图像质量**
   - 在 Transform 和 Feedback 中将插值模式设置为 "Nearest Pixel"
   - 可选：添加 Flip TOP 并开启 X 翻转以修正镜像问题

## 双向 Slitscan 效果

1. **创建左侧扫描**
   - 添加 Transform TOP 到原始设置中
   - 设置 X 偏移为约 0.03（将缝隙移到左侧）

2. **创建右侧扫描**
   - 复制整个左侧扫描的五个操作符（Rectangle、Multiply、Composite、Feedback、Transform）
   - 在右侧的 Transform 中使用与左侧相同但取反的 X 偏移值

3. **合并两侧效果**
   - 将两个反馈循环都连接到主 Composite
   - 调整合成顺序

## 高级效果

1. **添加位移效果**
    - 添加 Displace TOP
    - 设置 Y 为 0，X 为约 0.02-0.03
    - 将输入源连接到 Displace 的两个输入端

2. **时间机器效果**
    - 添加 Texture 3D TOP
    - 添加 Time Machine TOP
    - 添加与源相同分辨率的垂直 Ramp TOP
    - 将 Ramp 连接到 Time Machine 的第二个输入
    - 调整 Ramp 参数来改变时间扭曲效果

3. **最终调整**
    - 使用 Level TOP 调整亮度和对比度
    - 尝试不同的组合和参数设置，创造独特效果

这个 Slitscan 效果可以创造出非常有趣的视觉体验，特别适合处理包含动作的视频。记得调整参数来获得最佳效果，比如降低速度可以得到更平滑的结果，或者调整矩形大小来改变扫描线的宽度。




