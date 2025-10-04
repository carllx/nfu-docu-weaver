
### 12 导入 Audio

在Audition中导入和管理音频文件的 4 种方法: 
1. Open
2. Import 按钮
3. 拖放操作
4. Media Browser面板(推荐 )

![150|](https://i.imgur.com/Htt4BZm.webp)

---

#### 4. 使用Media Browser面板
   - 通过 `Window > Media Browser` 打开Media Browser面板

   - **预览**音频文件：选择文件并点击播放按钮
   - 启用**循环**功能或自动播放功能
   - 将文件拖放到**Files面板**中导入

---
![150|](https://i.imgur.com/tvJkiXN.webp)

---


#### 5. 关闭/移除文件
   - 在Files面板中选择文件
   - 点击顶部的垃圾桶图标或按 `Delete` 键
   - 注意：这只是从面板中移除文件，不会删除原始文件

![150|](https://i.imgur.com/7B3ye8h.webp)


---

#### 复习
- Audition不会移动或更改原始文件，只是链接到原始媒体
- Media Browser 显示了更多Meta文件信息，如时长、采样率、声道数和位深度
- 使用重音符号 `~` 键, 可以全屏显示Media Browser面板

---


### 13 导入Video

1. 导入视频文件： `Files(Pannel) / Open File` 

- 如何在Audition中导入视频文件作为音频编辑的参考.
> Audition 支持的文件格式
>   - QuickTime、MP4、AVI
 >  - ARRIRaw 和 Red's R3D Raw
---

2. Audition 会将视频文件分为两个部分：
- 原始视频
- 音频文件

![150|](https://i.imgur.com/0HleOmf.webp)

---

3. 创建多轨会话：
4. 调整工作区： 将工作区更改为 `Edit audio to video`，以便同时查看视频和音频
![150|](https://i.imgur.com/voAcNFh.webp)


---


6. 导出处理后的文件：

   - `File > Export > Multitrack Mixdown`：导出多轨混音，可以再导入 Premiere Pro(多几位摄/录制)
   - `File > Export > To Adobe Premiere Pro`：直接导出到 Premiere Pro
   - `File > Export > With Adobe Media Encoder`：使用 Media Encoder 直接创建新的视频文件


---

Note：
- 不能编辑视频, 视频仅仅用于参考
- 在多轨会话中才能查看视频文件
- 可以从Adobe Premiere Pro直接发送序列到Audition进行处理


---

#### 从Premiere发送序列以及Dynamic Link选项 (独立实践) 

(由于实验室Audition 版本不支持, 在家实践) 
将Premiere Pro中的序列导入到Audition中进行音频编辑

---


1. 在Premiere Pro中打开项目文件
   - 确保要导出的序列处于激活状态（序列周围有蓝色边框）

---

2. 导出序列到Audition
   - 点击 `Edit > Edit in Adobe Audition > Sequence`
   - 在弹出的对话框中设置以下选项：
     a. 选择导出整个序列或仅导出入点和出点之间的部分
     b. 选择视频传输方式（推荐使用Dynamic Link）
     c. 设置音频文件和Audition项目文件的保存路径
     d. 可选：添加音频文件handles（额外的前后时间）
     e. 可选：渲染音频片段效果
     f. 选择发送音量关键帧元数据
     g. 勾选"完成后在Audition中打开"
---

3. 点击"确定"完成导出

---

4. 在Audition中查看导入的项目
   - 检查Files面板中的新音频文件和XML文件
   - 确认轨道名称、标签颜色和音量关键帧已正确导入
   - 查看动态链接的视频参考

---

5. 利用Dynamic Link进行Premiere Pro和Audition之间的协作
   - 在Premiere Pro中对视频进行修改（如添加效果）
   - 修改会自动更新Audition中的视频预览
---

注意事项：
- 仅视频是动态链接的，音频更改不会在两个软件之间同步
- 选择Dynamic Link可避免每次修改后都需要重新渲染视频

---

常见问题问题:  不支持 Video 
例如 VP9 等非H264 编码视频, 需要转换才能导入.

---

#### 当导入 Video 只有音频时. (FFmpeg 视频转码).

What is FFmpeg? 
##### FFmpeg 简单的例子: 将视频转换为 MP3 格式：

```powershell
ffmpeg -i "Ouput_264.MP4" "Ouput_264.mp3"
```

---


#### Prompt

```Prompt

在 [PowerShell] 中 , 用FFmpeg 命令将视频 [输入原视频路径] ,  
转换为  H.264 视频编码的MP4. 
输出视频与原视频在同一文件夹, 
视频名称加上后缀 "_h264".
```

---


```powershell
ffmpeg `
-i "C:\input.mp4" `
-c:v libx264 `
-crf 25 `
"C:\Ouput_264.mp4"
```


---

```prompt
加入注释, 帮助学习以上代码
```

```powershell
ffmpeg ` # 使用 ffmpeg 工具
-i "C:\input.mp4" ` # 输入文件是 `.../input.mp4`
-c:v libx264 ` # 设置视频编码为 `libx264`
-crf 25 ` # 设置CRF（恒定速率因子）为18-30
"C:\Ouput_264.mp4" # 输出文件为 `... /Ouput264.mp4`

```
---

#### Mac 版本

```zsh
ffmpeg -i "/Users/yamlam/Downloads/20200807_Premiere Composer - Quick Start Tutorial.mp4" \
-c:v libx264 \
-crf 25 \
"/Users/yamlam/Downloads/20200807_Premiere Composer - Quick Start Tutorial_264.mp4"
```
