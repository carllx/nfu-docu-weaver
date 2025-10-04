该视频教程介绍了如何使用 TouchDesigner 和 Stable Diffusion 创建身体反应花朵。以下是教程的可操作步骤分解：

![|200](https://i.ytimg.com/vi/4wpn_3JNaIc/hqdefault.jpg)
(Source: [youtube.com: Intro &amp; Overview/ Sonic Flowers – TouchDesigner x StableDiffusion Tutorial 1 - YouTube](https://youtu.be/4wpn_3JNaIc?t=26))

**教程步骤:**

- **设置独立时间线**
    - 添加一个 Base 并命名为 "independent" \[[02:50](https://www.youtube.com/watch?v=4wpn_3JNaIc&t=170)]
    - 右键单击 Base，并添加 Component Time \[[04:43](https://www.youtube.com/watch?v=4wpn_3JNaIc&t=283)]
    - 将速率更改为 `cookrate()`，并启用 "run independently" \[[04:54](https://www.youtube.com/watch?v=4wpn_3JNaIc&t=294)]
    - 添加 Info CHOP，并将时间线的长度设置为文件长度帧 \[[06:04](https://www.youtube.com/watch?v=4wpn_3JNaIc&t=364)]
    - 将播放模式更改为 "lock to timeline" \[[07:03](https://www.youtube.com/watch?v=4wpn_3JNaIc&t=423)]
    - 添加 Audio Device Out、Math、Audio Spectrum 和 Null \[[07:23](https://www.youtube.com/watch?v=4wpn_3JNaIc&t=443)]
    - 折叠选定的 Null，并将其命名为 "circles" \[[07:42](https://www.youtube.com/watch?v=4wpn_3JNaIc&t=462)]
- **创建音乐可视化**
    - 添加 Resample CHOP，并将 Samples 设置为 60 \[[08:07](https://www.youtube.com/watch?v=4wpn_3JNaIc&t=487)]
    - 添加 Noise，并将 Period 更改为 0.2，并关闭 Harmonics 和 Monochrome \[[08:44](https://www.youtube.com/watch?v=4wpn_3JNaIc&t=524)]
    - 添加 Math、第二个 Noise、Lookup 和 Ramp \[[09:16](https://www.youtube.com/watch?v=4wpn_3JNaIc&t=556)]
    - 将 Ramp 颜色更改为红色和黄色 \[[09:47](https://www.youtube.com/watch?v=4wpn_3JNaIc&t=587)]
    - 添加 Circle TOP、Transform、Geometry、Camera 和 Render TOP \[[10:03](https://www.youtube.com/watch?v=4wpn_3JNaIc&t=603)]
    - 将分辨率设置为 576 x 768 \[[11:49](https://www.youtube.com/watch?v=4wpn_3JNaIc&t=709)]
    - 在 Geo 上启用 Instancing，并将 "pause" 用于 Position，"RNG" 用于 X 和 Y \[[12:10](https://www.youtube.com/watch?v=4wpn_3JNaIc&t=730)]
    - 使用 "color" 进行颜色 Instancing \[[12:40](https://www.youtube.com/watch?v=4wpn_3JNaIc&t=760)]
    - 为 Rotation 添加 Math 和 Noise \[[12:55](https://www.youtube.com/watch?v=4wpn_3JNaIc&t=775)]
    - 使用 "rotation" 进行 Rotation Instancing \[[13:28](https://www.youtube.com/watch?v=4wpn_3JNaIc&t=808)]
    - 为 Scale 变化添加 Math 和 Lag \[[13:43](https://www.youtube.com/watch?v=4wpn_3JNaIc&t=823)]
    - 使用 "scale" 进行 Scale Instancing \[[14:19](https://www.youtube.com/watch?v=4wpn_3JNaIc&t=859)]
    - 为动画添加 Analyze、Math、Lag、Speed 和 Null \[[15:13](https://www.youtube.com/watch?v=4wpn_3JNaIc&t=913)]
    - 使用 "atom" 进行 Z 变换 \[[15:48](https://www.youtube.com/watch?v=4wpn_3JNaIc&t=948)]
    - 添加 Displace 和 Noise 使圆圈更具自然感 \[[16:04](https://www.youtube.com/watch?v=4wpn_3JNaIc&t=964)]
    - 添加随机纹理和 Noise 以获得更多动态效果 \[[17:22](https://www.youtube.com/watch?v=4wpn_3JNaIc&t=1042)]
    - 添加 Out Null，并将其命名为 "input" \[[18:08](https://www.youtube.com/watch?v=4wpn_3JNaIc&t=1088)]
- **设置 Stable Diffusion API**
    - 添加 SD API TOX \[[02:42](https://www.youtube.com/watch?v=4wpn_3JNaIc&t=162)]
    - 转到 API 设置，并确保 SD Web UI 文件夹正确 \[[18:35](https://www.youtube.com/watch?v=4wpn_3JNaIc&t=1115)]
    - 启动 Web UI \[[19:22](https://www.youtube.com/watch?v=4wpn_3JNaIc&t=1162)]
    - 设置为 Image to Image，并选择模型 \[[21:08](https://www.youtube.com/watch?v=4wpn_3JNaIc&t=1268)]
    - 添加 Text DAT、Convert DAT，并将其命名为 "prompt" \[[22:28](https://www.youtube.com/watch?v=4wpn_3JNaIc&t=1348)]
    - 添加 Negative Prompt \[[23:28](https://www.youtube.com/watch?v=4wpn_3JNaIc&t=1408)]
    - 将 Denoising Strength 设置为 0.5，Step Count 设置为 15，CFG Scale 设置在 6 到 10 之间，Sampler 设置为 DPM++ 2M Keras \[[24:20](https://www.youtube.com/watch?v=4wpn_3JNaIc&t=1460)]
- **创建反馈循环**
    - 添加 Null，并将其命名为 "endpoint" \[[28:08](https://www.youtube.com/watch?v=4wpn_3JNaIc&t=1688)]
    - 添加 Select TOP，并将 "endpoint" 连接到它 \[[28:15](https://www.youtube.com/watch?v=4wpn_3JNaIc&t=1695)]
    - 添加 Composite TOP，并设置为 Maximum \[[30:17](https://www.youtube.com/watch?v=4wpn_3JNaIc&t=1817)]
    - 将 Opacity 设置为 0.4 \[[30:47](https://www.youtube.com/watch?v=4wpn_3JNaIc&t=1847)]
    - 添加 Sharpen 和 Simple Adjust \[[31:40](https://www.youtube.com/watch?v=4wpn_3JNaIc&t=1900)]
    - 将 Saturation 降低到 0.9 \[[32:13](https://www.youtube.com/watch?v=4wpn_3JNaIc&t=1933)]
    - 添加 Anti-alias、Null，并将其命名为 "PG display" \[[32:36](https://www.youtube.com/watch?v=4wpn_3JNaIc&t=1956)]
- **逐帧动画**
    - 添加 Null、Select TOP、Logic、Delay 和 Job Execute \[[33:24](https://www.youtube.com/watch?v=4wpn_3JNaIc&t=2004)]
    - 将 Logic Convert Input 更改为 "on when value changed" \[[34:41](https://www.youtube.com/watch?v=4wpn_3JNaIc&t=2081)]
    - 延迟一帧 \[[34:47](https://www.youtube.com/watch?v=4wpn_3JNaIc&t=2087)]
    - 添加 Job Execute，并连接到 Null \[[35:02](https://www.youtube.com/watch?v=4wpn_3JNaIc&t=2102)]
    - 将 On Off 设置为 on，将 On to Off Range Functions 设置为 on \[[35:13](https://www.youtube.com/watch?v=4wpn_3JNaIc&t=2113)]
    - 在脚本中键入以控制播放 \[[35:29](https://www.youtube.com/watch?v=4wpn_3JNaIc&t=2129)]
- **录制视频**
    - 将 Movie File Out 更改为 Stop Frame Movie \[[37:12](https://www.youtube.com/watch?v=4wpn_3JNaIc&t=2232)]
    - 打开 Unique Suffix \[[37:24](https://www.youtube.com/watch?v=4wpn_3JNaIc&t=2244)]
    - 将路径设置为导出文件夹 \[[37:32](https://www.youtube.com/watch?v=4wpn_3JNaIc&t=2252)]
    - 将 Movie FPS 设置为 Cook Rate \[[38:15](https://www.youtube.com/watch?v=4wpn_3JNaIc&t=2295)]
    - 将 Record 参数与 Add Frame Pulse 绑定 \[[39:33](https://www.youtube.com/watch?v=4wpn_3JNaIc&t=2373)]
- **导出和提升分辨率**
    - 导出视频和音频 \[[39:56](https://www.youtube.com/watch?v=4wpn_3JNaIc&t=2396)]
    - 使用 DaVinci Resolve 进行 D Flicker \[[41:42](https://www.youtube.com/watch?v=4wpn_3JNaIc&t=2502)]
    - 使用 Topaz Labs 提升视频分辨率 \[[41:49](https://www.youtube.com/watch?v=4wpn_3JNaIc&t=2509)]
- **技巧和窍门**
    - 使用类似于最终输出的纹理 \[[16:42](https://www.youtube.com/watch?v=4wpn_3JNaIc&t=1002)]
    - 向纹理添加 Noise \[[17:22](https://www.youtube.com/watch?v=4wpn_3JNaIc&t=1042)]
    - 每次迭代略微锐化图像 \[[31:40](https://www.youtube.com/watch?v=4wpn_3JNaIc&t=1900)]
    - 每次迭代略微降低饱和度 \[[32:20](https://www.youtube.com/watch?v=4wpn_3JNaIc&t=1940)]
    - 使用随机种子或手动种子 \[[26:03](https://www.youtube.com/watch?v=4wpn_3JNaIc&t=1563)]
    - 测试不同的 Sampler 和 Step Count \[[26:42](https://www.youtube.com/watch?v=4wpn_3JNaIc&t=1602)]
    - 尝试反馈循环 \[[31:34](https://www.youtube.com/watch?v=4wpn_3JNaIc&t=1894)]
    - 检查输出分辨率 \[[42:52](https://www.youtube.com/watch?v=4wpn_3JNaIc&t=2572)]

这些步骤应该可以帮助您在 TouchDesigner 中使用 Stable Diffusion 重现身体反应花朵效果。