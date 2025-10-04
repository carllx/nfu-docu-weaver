
- [ ] [[VR🥽]]  [[Projects]]  AVR_Bella.dev 🆔 mc1g8n  📅 2025-09-03
- [ ] [[VR🥽]] Create player platform on ThinkStation ⛔ mc1g8n 📅 2025-09-03

[[How to Convert VR Video from Fish eyes Video]]
[[AVC HEVC AV1 编码器性能和特点比较]]

(Source:  [deovr.com: Guide: iPhone15 stereo camera - how to record spatial & stereoscopic video | DeoVR](https://deovr.com/blog/90-iphone15-stereo-camera))
![|200](https://cdn-vr.deovr.com/blog/images/15950-blobid0.jpg)



## VR_Video_Processing 文件夹说明

文件夹结构反映了一个完整的VR视频处理工作流程，从下载、原始存储、编辑准备、格式转换到最终的移动设备优化版本。

```
VR_Video_Processing/
├── 01_Download_Completed/
├── 02_8K_Raw/
├── 03_4K_Edit_Ready/
├── 04_HEVC_Conversion_Queue/
Render/
```

1. "01_Download_Completed" 文件夹：
   - 用途：存储已完成下载的VR视频文件
   - 说明：这里的文件会通过脚本进行分类，8K视频会被移至"02_8K_Raw"文件夹，低于8K的视频则移至"03_4K_Edit_Ready"文件夹。

2. "02_8K_Raw" 文件夹：
   - 用途：存储原始8K视频素材
   - 说明：保存最高分辨率和质量的视频文件，未经压缩或处理，作为原始素材供后续编辑使用。

3. "03_4K_Edit_Ready" 文件夹：
   - 用途：存储降低分辨率后的视频文件
   - 说明：包含从8K降至较低分辨率（如4K或1080p）的视频，便于编辑和后期制作。

4. "04_HEVC_Conversion_Queue" 文件夹：
   - 用途：存储等待转换为HEVC格式的视频文件
   - 说明：作为视频转码的中转站，这里的文件将通过FFMPEG工具批量转换为HEVC格式。

5. "Render(Mobile_Ready_HEVC)" 文件夹：
   - 用途：存储已完成HEVC编码的最终视频文件
   - 说明：这里的视频经过优化，文件体积小，适合移动设备播放，并可通过局域网访问。
