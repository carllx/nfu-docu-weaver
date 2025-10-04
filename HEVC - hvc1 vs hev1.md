[[AVR Bella Player Dev]]
[[AVC HEVC AV1 编码器性能和特点比较]]
## hvc1 vs hev1

根据搜索结果,hvc1和hev1是HEVC(H.265)编码中的两种不同的码流格式, 不同的编码标签(Codec ID):

- hvc1(High-Efficiency Video Coding Version 1):
    
    - 参数集合(parameter sets)存储在MP4容器的sample description boxes中。[1](https://community.bitmovin.com/t/whats-the-difference-between-hvc1-and-hev1-hevc-codec-tags-for-fmp4/101#:~:text=hvc1%20parameter%20sets%20are%20stored,in%20the%20bitstream%2F%20mdat%20box)
    - 这种格式更加适用于QuickTime和Apple设备等。[6](https://forum.selur.net/thread-654.html)

- hev1(High-Efficiency Video Coding Version 1):
    
    - 参数集合存储在HEVC码流中(即样本数据内)。[3](https://stackoverflow.com/questions/63468587/what-hevc-codec-tag-to-use-with-fmp4-hvc1-or-hev1)
    - 这种格式更适用于不太关注兼容性的场景,如在线视频传输。[9](https://emby.media/community/index.php?/topic/119915-direct-stream-hevc-on-apple-devices/)

总的来说,hvc1更适合需要兼容性的场景,而hev1在某些情况下可能会更高效一些。具体选择哪种格式需要根据具体的应用场景来权衡。


## crf 控制 Bit Rate 导致文件大小的差异
(Source:  [moonshot.cn: Kimi.ai - 帮你看更大的世界](https://kimi.moonshot.cn/chat/cpdjhkpkqq4o00iaf5ag))

以下是两个同一视频文件HEVC编码参数的对比表格：

| 参数名称 / Parameter Name    | hvc1      | hev1                   |
| ------------------------ | --------- | ---------------------- |
| 比特率 / Bit Rate           | 22.5 Mbps | 19.1 Mbps              |
| 最大比特率 / Maximum Bit Rate | 23.5 Mbps | 未提供                    |
| 编码库 / Encoding Library   | x265 3.5  | x265 3.5+116-5a6d85d76 |
| 比特深度 / Bit Depth         | 8 bits    | 10 bits                |
| 文件大小 / File Size         | 3.38 GiB  | 2.88 GiB               |


**注意**:
- "最大比特率 / Maximum Bit Rate" 对于 hev1 未在提供的信息中明确列出。
- "编码库 / Encoding Library" 版本号不同，可能影响编码效率和最终文件大小。
- "文件大小 / File Size" 显示了最终生成的视频文件大小，其中 hev1 的文件更小。


期间发现VR 视频转换脚本的问题例如:

```shell
mediaPath="/Volumes/_MacOS Batch"
for f in $mediaPath/*.mp4; do
  name="${f%.mp4}"
  ffmpeg -i "$f"  \
    -c:v libx265 -crf 21 -preset medium \
    # -c:a aac -b:a 128k \
    # 指示ffmpeg复制音频流而不重新编码。
    -c:a copy
    # 省略了-pix_fmt参数，以便ffmpeg自动处理视频的像素格式。
    # -pix_fmt yuv420p10le \ 
    -metadata "stereo_mode=left_right" \
    -movflags +faststart \
    "${name}-HEVC.mp4"
done
```
