[[How to Convert VR Video from Fish eyes Video]]
### 编码器性能和特点比较

(Source:  [reddit.com: When is AV1 More Efficient Than HEVC? : r/AV1](https://www.reddit.com/r/AV1/comments/11ptmnc/when_is_av1_more_efficient_than_hevc/))
(Source:  [youtube.com: AMD AVC vs HEVC vs AV1 - Which Recording/Streaming Codec should you use?](https://youtu.be/FzZKyXHP_d0?t=2))
(Source:  [mozilla.org: Codecs in common media types - Web media technologies | MDN](https://developer.mozilla.org/en-US/docs/Web/Media/Formats/codecs_parameter))



![|200](https://i.ytimg.com/vi/FzZKyXHP_d0/hqdefault.jpg)


## Report 
根据 (Source:  **[google.com: VR_Format_Report - Google Sheets](https://docs.google.com/spreadsheets/d/12_jozCnkTlLYdAb5_8IUpMzQaQvdJvQg9KkbwCa6xNk/edit#gid=317429319)**)显示, 以及rplayer 实测:

- 暂不支持 AV1
- AVC Progressive High@L5.2 表现良好, 文件小

- [x] [[VR🥽]]  获取 crf 参数再转换, 缩短转换时间 🛫 2024-06-01 ✅ 2025-02-20



### 根据源文件的 CRF 再转换


#### get CRF 参数 via mediainfo

```shell
mediainfo --Output="Video;%Encoded_Library_Settings%" "/Volumes/198.168.10.5/Media/VR/Batch/test av1 avc hevc/Murakami Yuuka - SIVR334 - HEVC.mp4"


CRF=$(mediainfo --Output="Video;%Encoded_Library_Settings%" "/Volumes/198.168.10.5/Media/VR/Batch/test av1 avc hevc/Murakami Yuuka - SIVR334 - HEVC.mp4" | perl -ne 'print $1 if /crf=(\d+(.\d+)?)/')

echo $CRF

& "E:\Program Files\MediaInfo_CLI_24.04_Windows_x64\MediaInfo.exe" 'G:\Media\VR\Batch\MINAMO - 3DSVR1528(p2).mp4'


## Define the path to the media file

# Use mediainfo to get the video encoding settings and then use Select-String to find the CRF value

# Output the CRF value

$mediaFilePath = "G:\Media\VR\Batch\MINAMO - 3DSVR1528(p2).mp4"

$crfValue = mediainfo --Output="Video;%Encoded_Library_Settings%" $mediaFilePath | Select-String -Pattern 'crf=(\d+(\.\d+)?)' -AllMatches | ForEach-Object { $_.Matches.Groups[1].Value }

echo $crfValue

```

#### AVC (高级视频编码, H.264)
- **性能表现**：
  - 在低比特率下画质模糊，信息丢失明显。
  - 对细节保留不佳，容易出现像素化。
- **特点**：
  - 兼容性好，适合低要求应用或旧设备。
  - 编码速度较快，但文件大小相对较大。

#### HEVC (高效视频编码, H.265)
- **性能表现**：
  - 相比AVC，在相同比特率下提供更好的画质。
  - 更好的压缩效率，文件大小更小。
- **特点**：
  - 适合高清和4K视频，节省存储空间。
  - 编码和解码需要更强的计算能力。

#### AV1 (AOMedia视频1)
- **性能表现**：
  - 在同等比特率下显示更清晰的细节和更少的像素化。
  - 在低比特率下表现稳定，保留更多信息。
- **特点**：
  - 提供比HEVC更高的压缩效率。
  - 适合用于高质量视频串流和录制。
  - 开源、免版税，适合未来的视频编码需求。
  - 编码速度较慢，但解码速度快，适合流媒体。
  - 浏览器支持良好，适合网络视频播放。

#### 讨论结果补充
- **SVT-AV1**:
  - 由Intel与Netflix合作开发，已被AOMedia采纳用于AV1及其他编解码器的未来发展。
  - 支持多种速度和效率的权衡，多核CPU扩展性好。
  - FFmpeg需编译`--enable-libsvtav1`来支持。
  - 提供CRF、VBR和CBR等多种码率控制方式。
  - 支持Film Grain Synthesis，保留视频颗粒感同时节省码率。
- **AMD AMF AV1**:
  - 为AMD GPU优化的视频编码器，提供专业级编码能力和丰富的定制选项。
  - 支持不同的使用场景预设，如转码和低延迟直播。
  - 可以调整参数以满足不同编码需求，如分辨率、比特率、帧率和编码质量。

以下是Reddit用户Agling建议的使用FFmpeg和SVT-AV1将VR左右MP4转换为AV1的一般方法：

1. **获取SVT-AV1**：首先，您需要在系统上安装SVT-AV1编码器。您可能需要从源代码编译。
    
2. **使用SVT-AV1解码和编码**：使用FFmpeg解码输入的MP4文件，然后将输出传输到SVT-AV1编码器，将其编码为AV1格式。
    
3. **重新复用音频**：视频编码完成后，您可能需要将原始MP4文件中的音轨重新复用到新编码的AV1视频流中。
    

以下是一个基于讨论的示例命令行过程：

(Source:  [marksblogg.com: Minimalist Guide to AV1 Video Encoding](https://tech.marksblogg.com/av1-video-encoding.html)) 

```shell
ffmpeg -i input.mp4 -c:v copy -c:a copy -map 0:v:0 -map 0:a:0 -f nut pipe:0 | \ svt-av1enc -i pipe:0 --crf <crf_value> --preset <preset_value> --map 0:v:0 -o /dev/stdout | \ ffmpeg -i /dev/stdin -c:v av1 -map 0:v:0 -c:a copy -f mp4 output.av1
```

```shell
$INPUT_FILE="G:\Media\VR\Batch\Murakami Yuuka - SIVR334 - AVC.mp4"

$OUTPUT_FILE="G:\Media\VR\Batch\Murakami Yuuka - SIVR334 - AV1.mp4"

ffmpeg -i $INPUT_FILE -c:v libsvtav1 -preset 8 -crf 0 -c:a copy $OUTPUT_FILE
```
在这个示例中：

- 将`<crf_value>`替换为所需的常量速率因子值（例如35），它控制输出视频的质量和文件大小。
- 将`<preset_value>`替换为平衡编码速度和压缩效率的预设值（例如4表示高质量或6表示良好的平衡）。

请注意，您实际使用的命令和参数可能会根据您的具体需求和安装的工具版本而有所不同。

请记住，这是一个复杂的过程，可能需要一些实验才能获得最佳结果。此外，FFmpeg社区和AV1支持的发展正在不断演进，因此值得查看最新的文档和社区讨论以获取更新和简化的方法。



# to AVC 
AVC
(Source:  [wikipedia.org: Advanced Video Coding ](https://en.wikipedia.org/wiki/Advanced_Video_Coding#Feature_support_in_particular_profiles))
(Source:  [ffmpeg.org: Encode/H.264 – FFmpeg](https://trac.ffmpeg.org/wiki/Encode/H.264))


```shell
ffmpeg  \
 -i "/Volumes/198.168.10.5/Media/VR/Batch/_MacOS Batch/Satsuki Ena -AJVR-162_merged.mp4" -c:v libx264 \
 -profile:v high \
 -bf 2 -flags +cgop -g 30 \
 -crf 28.0 \
 -movflags +faststart  \
 -metadata "stereo_mode=left_right" \
 -c:a copy -f mp4 -y "/Volumes/198.168.10.5/Media/VR/Batch/_MacOS Batch/Satsuki Ena -AJVR-162-AVC(5.2crf28).mp4"
```

说明: 
- `-c:v libx264`：设置视频编解码器为 `libx264`，这是一个开源的 H.264 视频编解码器。    
- `-profile:v high`：设置视频编码的 H.264 配置文件为 `high`，这通常意味着更好的压缩和质量。    
- `-bf 2`：设置 B 帧的数量为 2。B 帧是一种双向预测的帧，可以提高压缩效率。    
- `-flags +cgop`：设置 GOP（Group of Pictures）中的帧都为闭环帧，这有助于提高编码效率。    
- `-g 30`：设置 GOP 大小为 30 帧，即每 30 帧一个关键帧。    
- `-crf 28.0`：设置常量速率因子（Constant Rate Factor）为 28.0，CRF 值越低，视频质量越高，但文件大小也会增大。    
- `-movflags +faststart`：允许视频文件在下载时可以快速开始播放，即元数据和关键帧会被放在文件的开始部分。    
- `-metadata "stereo_mode=left_right"`：添加元数据，指定立体声模式为左右声道。    
- `-c:a copy`：音频编解码器设置为复制，即不重新编码音频，直接复制原始音频流。    
- `-f mp4`：指定输出文件的格式为 MP4。    
- `-y`：如果输出文件已存在，覆盖它而不询问。    
- `"G:\Media\VR\Batch\_MacOS Batch/Satsuki Ena -AJVR-162-AVC(crf28).mp4"`：指定输出文件的路径和文件名



# to AV1


There are currently three AV1 encoders supported by FFmpeg: 
- libaom (invoked with `libaom-av1` in FFmpeg)
- SVT-AV1 (`libsvtav1`)
- rav1e (`librav1e`). 

This guide (Source:  [ffmpeg.org: Encode/AV1 – FFmpeg](https://trac.ffmpeg.org/wiki/Encode/AV1))  focuses on libaom and SVT-AV1.


SVT-AV1 (`libsvtav1`)
rav1e (`librav1e`)
```shell
ffmpeg -i "/Volumes/198.168.10.5/Media/VR/Batch/_MacOS Batch/Miyazawa Chiharu - DSVR857_merged.mp4" -c:v libsvtav1 -preset 6 -crf 28 -c:a copy "/Volumes/198.168.10.5/Media/VR/Batch/_MacOS Batch/Miyazawa Chiharu - DSVR857_(av1).mp4"
ffmpeg -i "/Volumes/198.168.10.5/Media/VR/Batch/_MacOS Batch/Miyazawa Chiharu - DSVR857_merged.mp4" -c:v libaom-av1 -preset 8 -crf 40 -c:a copy "/Volumes/198.168.10.5/Media/VR/Batch/_MacOS Batch/Miyazawa Chiharu - DSVR857_(av1).mp4"

```



AV1是由开放媒体联盟(Alliance for Open Media, AOMedia)开发的开源且免版税的视频编码，相较于VP9和H.264，AV1在压缩效率上分别能提高约30%和50%。目前，在FFmpeg中支持的AV1编码器主要有三种：libaom（在FFmpeg中以`libaom-av1`调用）、SVT-AV1（`libsvtav1`）、以及rav1e（`librav1e`）。

## AV1

如何将原视频压缩成 av1 格式,  确保与原视频的相似质量, 两者之间找到质量和文件大小之间的最佳平衡, 而不会变得反而更大?

### libaom
libaom是AV1格式的参考编码器，也是AV1开发过程中用于研究的工具。基于libvpx，libaom在功能、性能和使用上与libvpx有许多共同点。

#### 优点：
- 提供多种码率控制模式，包括恒定质量、受限质量、两遍平均码率等，以优化质量和文件大小。
- 支持高动态范围（HDR）和高位深度视频的编码。
- 支持无损编码。

#### 缺点：
- 相对较慢，尤其是在高质量编码时。
- 使用和调优可能相对复杂。

### SVT-AV1
SVT-AV1是英特尔与Netflix合作开发的编码器，后来被AOMedia采用作为AV1以及未来编解码工作的基础框架。

#### 优点：
- 能够在多个CPU核心上良好扩展，适合于需要大规模视频编码的应用场景。
- 支持包括CRF、预设和调优在内的多种编码选项。

#### 缺点：
- 虽然设计初衷是为了高效利用硬件资源，但在单核或低核心计数的环境中速度可能不如其他编码器。
- 高级特性如片段合成可能需要额外配置。

### rav1e
rav1e是Xiph.org开发的AV1编码器，旨在提供一个高效的AV1编码解决方案。

#### 优点：
- 在某些配置下可能是目前最快的软件AV1编码器。
- 支持各种编码细节调整，灵活性高。

#### 缺点：
- 由于是相对较新的项目，可能在某些特性支持上不如其他成熟的编码器。
- 高质量编码的速度可能较慢。

### AMD AMF AV1
AMD AMF AV1是针对AMD GPU优化的专业视频编码器，提供了丰富的视频编码能力和广泛的自定义选项。

#### 优点：
- 提供多种预设以优化特定的使用场景，如转码、低延迟。
- 支持高质量和实时视频编码的平衡。

#### 缺点：
- 专为AMD硬件优化，不适用于其他类型的GPU。
- 在特定场景下，开启HRD约束可能会牺牲一定的图片质量。

总体来讲，每个编码器都有其独特的优点和适用场景。选择哪一个主要取决于你的具体需求，包括编码速度、质量、硬件支持等因素。

## GPU
## M4000 显卡加速问题

```bash
PS C:\Users\carll> nvidia-smi

Mon Feb 10 00:24:58 2025
+-----------------------------------------------------------------------------------------+
| NVIDIA-SMI 552.55                 Driver Version: 552.55         CUDA Version: 12.4     |
|-----------------------------------------+------------------------+----------------------+
| GPU  Name                     TCC/WDDM  | Bus-Id          Disp.A | Volatile Uncorr. ECC |
| Fan  Temp   Perf          Pwr:Usage/Cap |           Memory-Usage | GPU-Util  Compute M. |
|                                         |                        |               MIG M. |
|=========================================+========================+======================|
|   0  Quadro M4000                 WDDM  |   00000000:03:00.0  On |                  N/A |
| 46%   38C    P8             13W /  120W |    1007MiB /   8192MiB |      1%      Default |
|                                         |                        |                  N/A |
+-----------------------------------------+------------------------+----------------------+

+-----------------------------------------------------------------------------------------+
| Processes:                                                                              |
|  GPU   GI   CI        PID   Type   Process name                              GPU Memory |
|        ID   ID                                                               Usage      |
|=========================================================================================|
|    0   N/A  N/A      4232    C+G   ...s\System32\Kinect\KinectService.exe      N/A      |
|    0   N/A  N/A      4808    C+G   ...werToys\PowerToys.PowerLauncher.exe      N/A      |
|    0   N/A  N/A      5512    C+G   ...ekyb3d8bbwe\PhoneExperienceHost.exe      N/A      |
|    0   N/A  N/A      7316    C+G   C:\Windows\explorer.exe                     N/A      |
|    0   N/A  N/A      8116    C+G   ...ejd91yc\AdobeNotificationClient.exe      N/A      |
|    0   N/A  N/A      9116    C+G   ...nt.CBS_cw5n1h2txyewy\SearchHost.exe      N/A      |
|    0   N/A  N/A      9124    C+G   ...2txyewy\StartMenuExperienceHost.exe      N/A      |
|    0   N/A  N/A      9672    C+G   ...n\132.0.2957.140\msedgewebview2.exe      N/A      |
|    0   N/A  N/A     10856    C+G   ...CBS_cw5n1h2txyewy\TextInputHost.exe      N/A      |
|    0   N/A  N/A     11412    C+G   ...n\132.0.2957.140\msedgewebview2.exe      N/A      |
|    0   N/A  N/A     11636    C+G   ...ys\WinUI3Apps\PowerToys.Peek.UI.exe      N/A      |
|    0   N/A  N/A     12484    C+G   ...5n1h2txyewy\ShellExperienceHost.exe      N/A      |
|    0   N/A  N/A     18532      C   ...pData\Local\sogoupdf\pdfpreview.exe      N/A      |
|    0   N/A  N/A     18680    C+G   ...Programs\Microsoft VS Code\Code.exe      N/A      |
|    0   N/A  N/A     21616    C+G   ...9739_x64__8wekyb3d8bbwe\msteams.exe      N/A      |
|    0   N/A  N/A     21692    C+G   ...__8wekyb3d8bbwe\WindowsTerminal.exe      N/A      |
|    0   N/A  N/A     22228    C+G   ...6\Updater\EtwHostServiceUpdater.exe      N/A      |
|    0   N/A  N/A     22408    C+G   C:\Program Files\Motrix\Motrix.exe          N/A      |
|    0   N/A  N/A     23868    C+G   ...n\132.0.2957.140\msedgewebview2.exe      N/A      |
|    0   N/A  N/A     26372    C+G   ...oogle\Chrome\Application\chrome.exe      N/A      |
+-----------------------------------------------------------------------------------------+

```

参考1:

针对M4000显卡在FFmpeg任务中的配置建议：

1. 硬件编解码设置
- 使用 `-hwaccel cuda` 启用CUDA硬件加速
- 使用 `-c:v h264_nvenc` 启用NVENC编码器
- 使用 `-c:v h264_cuvid` 启用CUVID解码器

2. 编码参数优化
- 设置合适的预设值：-preset p4
- 调整比特率控制：-b:v 和 -maxrate 参数
- 设置GOP大小：-g 参数
- 设置参考帧数：-refs 参数

1. 性能调优
- 使用 -thread_queue_size 调整缓冲区大小
- 合理设置 -gpu 参数选择GPU设备
- 调整 -rc-lookahead 值优化编码质量

2. 系统配置
- 关闭其他GPU密集型应用
- 确保CUDA工具包正确安装
- 监控GPU使用率和温度

3. 实例命令：
```bash
ffmpeg -hwaccel cuda -hwaccel_output_format cuda -i input.mp4 \
-c:v h264_nvenc -preset p4 -b:v 5M -maxrate 8M \
-g 30 -rc-lookahead 20 output.mp4
```

4. 注意事项
- 定期更新NVIDIA驱动和FFmpeg版本
- 避免同时运行多个重负载编码任务
- 建议在测试后再应用于生产环境

如需更具体的配置建议，请提供您的具体使用场景和需求。


---

参考2:
基于提供的资料，对于M4000显卡使用FFmpeg时，需要进行以下配置：

5. 系统要求：
- 确保系统安装了支持的NVIDIA驱动程序 
- 支持Windows或Linux操作系统 

6. 编译配置：
- 需要安装CUDA工具包 
- Linux系统编译时使用以下配置命令：
```
./configure --enable-nonfree --enable-cuda-nvcc --enable-libnpp --extra-cflags=-I/usr/local/cuda/include --extra-ldflags=-L/usr/local/cuda/lib64 --disable-static --enable-shared
```


7. 运行时配置：
- 使用"-hwaccel cuda -hwaccel_output_format cuda"选项来启用NVIDIA硬件加速 
- 支持的编码器包括：
  - h264_nvenc (H264编码)
  - hevc_nvenc (HEVC编码)
  - av1_nvenc (AV1编码) 

8. 性能优化建议：
- 使用-vsync 0参数防止输出重复帧 
- 对于YUV或RAW文件的编码，建议使用SSD以获得最佳性能 

注意：M4000作为Kepler后代的NVIDIA GPU，支持完整的硬件视频编解码加速功能 。

Sources:
https://docs.nvidia.com/video-technologies/video-codec-sdk/12.0/ffmpeg-with-nvidia-gpu/index.html




---





### APPLE M1

```bash
(base) yamlam@yams-Air-m1 ~ % system_profiler SPDisplaysDataType


Graphics/Displays:

    Apple M1:

      Chipset Model: Apple M1
      Type: GPU
      Bus: Built-In
      Total Number of Cores: 7
      Vendor: Apple (0x106b)
      Metal Support: Metal 3
      Displays:
        Color LCD:
          Display Type: Built-In Retina LCD
          Resolution: 2560 x 1600 Retina
          Main Display: Yes
          Mirror: Off
          Online: Yes
          Automatically Adjust Brightness: Yes
          Connection Type: Internal
```



## to_HEVC

Sources:
https://unix.stackexchange.com/questions/677314/ffmpeg-libx265-vs-hevc-nvenc
### 为什么不选择 hevc_nvenc 或其他GPU 加速
以下是提取自文本内容的主要知识点及其详细信息：

1. ffmpeg编码命令与输出对比  
   - 使用ffmpeg分别调用软件编码器（libx265）和硬件加速编码器（hevc_nvenc）时，输出的文件大小有明显不同：使用libx265编码输出文件约为134M，而使用hevc_nvenc输出文件约为360M，输入文件（H264编码）为351M。

2. 硬件加速编码器的质量与速度特点  
   - 硬件加速编码器（例如hevc_nvenc）利用GPU进行视频压缩，虽然编码速度更快，但在同等压缩参数下生成的文件质量较低（相同感知质量需要更高的比特率）。

3. CRF与CQP（常量量化参数）的区别与限制  
   - 软件编码器中的CRF模式（Constant Rate Factor）可以自适应调整每一帧的量化参数以保持目标质量，因而在图像内容复杂性上更具适应性；而硬件编码器由于架构限制，不支持CRF模式，而是采用固定量化（CQP）方式，通过参数-cq:v来实现近似恒定质量编码，但这种编码方式的压缩效率一般低于CRF编码。

4. 常用参数及预设设置  
   - 可通过命令“ffmpeg -h encoder=hevc_nvenc -hide_banner”获取硬件编码器支持的预设参数列表，不同预设（例如ultrafast、fast、medium、slow等）对应不同的编码质量与速度权衡。

5. CPU编码器与GPU编码器的比较  
   - ==CPU编码器（如x264或x265）在压缩质量、率失真效率上通常优于GPU硬件加速编码器，但消耗更多的计算资源和时间。对于需要高质量或存档用途，建议使用x264/x265 -preset medium或更慢的设置==；而GPU编码器则适合对速度有严格要求的场合，例如预览或实时传输。

### libx265 

```shell
ffmpeg -h encoder=libx265  -hide_banner                                                                                           
Encoder libx265 [libx265 H.265 / HEVC]:
    General capabilities: dr1 delay threads
    Threading capabilities: other
    Supported pixel formats: yuv420p yuvj420p yuv422p yuvj422p yuv444p yuvj444p gbrp yuv420p10le yuv422p10le yuv444p10le gbrp10le yuv420p12le yuv422p12le yuv444p12le gbrp12le gray gray10le gray12le
libx265 AVOptions:
  -crf               <float>      E..V....... set the x265 crf (from -1 to FLT_MAX) (default -1)
  -qp                <int>        E..V....... set the x265 qp (from -1 to INT_MAX) (default -1)
  -forced-idr        <boolean>    E..V....... if forcing keyframes, force them as IDR frames (default false)
  -preset            <string>     E..V....... set the x265 preset
  -tune              <string>     E..V....... set the x265 tune parameter
  -profile           <string>     E..V....... set the x265 profile
  -udu_sei           <boolean>    E..V....... Use user data unregistered SEI if available (default false)
  -a53cc             <boolean>    E..V....... Use A53 Closed Captions (if available) (default true)
  -x265-params       <dictionary> E..V....... set the x265 configuration using a :-separated list of key=value parameters

```