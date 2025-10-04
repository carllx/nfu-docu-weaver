
## Premiere  2017 发布到YouTube
[[Source video - Ambisonic Audio with 360 Video in Premiere 2017]]

![|200](https://i.ytimg.com/vi/MqBDQLV7xZI/hqdefault.jpg)
(Source:  [youtube.com: Ambisonic Audio with 360 Video in Premiere Pro CC 2017](https://youtu.be/MqBDQLV7xZI?t=1156))


如何在Premiere Pro CC 2017 中处理360视频的环绕音频并发布到YouTube

首先 在 Premiere Pro中设置VR视频有一个四声道的环绕音频文件 amb x3.wve 接下来介绍YouTube 所需的音频规格:
- 第一序环绕音频通道布局(FOA)
- ACN通道排序
- SN3D标准化
- 四声道AAC或PCM编码

## 正确处理环绕音频
在Premiere Pro中创建序列时 需要在音频`首选项`中将多声道单声道媒体的`默认`音频轨道设置为`自适应模式`

预览时 需要使用耳机并在主音轨上添加 binaural lier 效果 这仅用于预览 导出时需要移除此效果 如需调整音频方位 可以使用环绕声音频平移器效果

导出时选择YouTube预设或VR预设 确保:
- 视频自动检测为VR格式
- 音频设置为AAC 4.0声道 512kbps比特率
- 勾选"音频为环绕声"选项
