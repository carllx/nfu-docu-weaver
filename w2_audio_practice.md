
### 006 谁应该观看本快速导读章节

本章适合有其他数字音频工作站或视频后期经验的人学习.
> 使用 (02 Fast Track 文件)
> .../ Media
---


#### 在 Premiere Pro 中打开项目

### 007 导入 Premiere 项目

将 Premiere 中的的序列导入 Audition. 

#### Action

🖱️ 在Premiere Pro中打开 `02 fast track exercise files/02_02_ProjectRELO_short.prproj`
> 双击, 或
> 在 Adobe Premiere Pro, `Open Project`按钮。
> 选择`Exercise Files / 02 Fast Track`文件夹，选择一个 Premiere Pro 项目并点击“打开”。 


---

#### PR 版本与项目版本不同时


![](https://tingwu.aliyun.com/api/editor/get/v2/524379/0/fea771186ab540eca9f7ec7a96c5d09c/2d4529f3e32c4e5fb948b3d2f3a661fd.png)

---

#### PR 媒体链接不匹配时
> 所有媒体应该会自动重新链接，如果没有，请点击 `File>LinkMedia`。 

![](https://tingwu.aliyun.com/api/editor/get/v2/524379/0/8420473891a94d929bab75e5d2bbfba1/d3331682158b4377a181674a11e60e73.png)


---

02 找到与原项目 Media(媒体) 路径匹配的文件目录.

![](https://tingwu.aliyun.com/api/editor/get/v2/524379/0/83f5bbf5b6a34e569bca070ec2c6f30c/ed1cc26ff7a44859beb47cb8fe5025ed.png)

---


Premiere 中.

• 🎞️ 在时间轴中选中要导入Audition的序列(sequence)
![](https://tingwu.aliyun.com/api/editor/get/v2/524379/0/55e384d0e43e4a34b2963683459cb305/fd4c55f8881b4ea99d96f13596fa34c3.png)

---

• 📋 从 Edit > Edit in Adobe Audition

![](https://tingwu.aliyun.com/api/editor/get/v2/524379/0/447db5546f80409280d67eae769b88ed/9be4877c4e494965b25215eca71fde93.png)

---

• 💾 选择将整个序列发送到Audition
![](https://tingwu.aliyun.com/api/editor/get/v2/524379/0/808ff1fd678f4243bfe68e3d5376e95c/b2c8e914df064b1e975e5c3d400f5ffc.png)


> Premiere Pro提供了“序列入点”和“序列出点”选项，`equence In/Out`, 根据具体需求裁剪序列，只导入和处理所需的特定部分，这对于高效管理和编辑大型项目特别有利。

---


• 🎥 选择"send through dynamic link"作为视频参考选项
![](https://tingwu.aliyun.com/api/editor/get/v2/524379/0/2375de203c1a47c68fb330a1c32ce987/6c6ca088a20047f6911791849def3873.png)

---


• ⏱️ 将音频handles设置为9.99秒(最大值)
![](https://tingwu.aliyun.com/api/editor/get/v2/524379/0/e6092e38baae436daf21a636c9e241b5/f6b697a7003c4067b26dd26af5811db4.png)

减少了在 Premiere Pro 中编辑点与 Audition 中的音频编辑之间出现空白的可能性。

---

• ✅ 勾选"send clip volume keyframe metadata"选项


![](https://tingwu.aliyun.com/api/editor/get/v2/524379/0/b251f622feec4f12b65c0d26f2487c65/f44525c13a764020a690171d5fb6007b.png)


• 👆 点击OK开始导出

(2024 版本 Premiere)
![](https://tingwu.aliyun.com/api/editor/get/v2/524379/0/aeb76f28ad6c49a1a6446049dacebb95/6fa386c0536f4aa6ab5788ea92e3e9ee.png)


旧版本 Audition 可能会有 XML 后缀.

XML files in Audition

![](https://tingwu.aliyun.com/api/editor/get/v2/524379/0/b73c4c7d9f654a378bbf4fd034196c4e/63c35d667ff3467da6eeb6c20375d4d8.png)
• 💿 在Audition中,将项目保存为.SESX格式
• 🗂️ 重命名项目文件,删除文件名中的"XML"


---
**XML 文件 == SESX格式**

XML (Extensible Markup Language) 是一种标记语言，用于以结构化的方式存储数据。它就像一个数据容器，用标签来定义数据的类型和组织方式。

> prproj 实质是 zip 压缩的 xml. 
> 了解这些对批量编辑工作流有用. 

---

### 008 添加和编辑音频片段

> 02_03_AddingEditing.sesx




---

#### 导入序列和准备工作
TLDR: 从Premiere Pro导入序列,添加新音轨,重命名和重排音轨,暂时静音音乐轨道。

实践: 
• 🖱️ **重命名新添加的音轨**为更具描述性的名称(如"SFX02") `MultiTrack > Add stereo Track`
• 🔊 调整**音轨顺序**,将音效轨道移到合适位置
• 🔇 **暂时静音**音乐轨道,以便更好地专注于音效编辑

---


#### 添加环境音效
从媒体浏览器中预览和添加鸟鸣和昆虫声音效,调整音量和长度以匹配视频。

• 🎵 从媒体浏览器中拖放适当的音效到多轨会话中
• ✂️ 修剪音效片段的长度,使其与视频画面匹配

---


#### 编辑音频片段
TLDR: 使用修剪工具、剃刀工具和快捷键剪切音频,使用滑动工具调整音频内容。
• ⌨️ 使用快捷键(如Command+K)在播放头位置切割音频片段

---

#### 对齐和调整音频
TLDR: 打开吸附功能以精确对齐音频片段,使用缩放工具聚焦特定轨道。

• 🔗 使用吸附功能将音效片段精确对齐
• 🔍 使用缩放工具放大查看特定音轨
• 🎚️ 使用滑动工具调整音频片段内容的起始点,以选择最佳音效部分


---

### 009 调整和匹配音量
> 02_04_ClipVolume.sesx

Tips:
- Channel 的 Volume 

![150|](https://i.imgur.com/6QPSAN2.webp)



🔊 在 Multi Track 中,通过点击和拖动 Volume 曲线(黄线)来调整片段的音量
![](https://tingwu.aliyun.com/api/editor/get/v2/524379/0/259271eec6f74f9bbe1ce70c7961be83/77d2d7359fa245b79a6901aeb62db6fd.png)


TLDR: 调整音频片段音量,统一整体音质。学习匹配音量,创造平衡专业的混音效果。

---


#### 1. 使用Match Clip Loudness功能

TLDR: 快速统一多个片段的音量。
- 双击 Channel 
- `Clip > Match Clip Loudness...`
- ---


![](https://tingwu.aliyun.com/api/editor/get/v2/524379/0/c01a224d44f4488b89fb4301bb70b2f9/9cb6f540bf574286a7fa7d7f35ec6f7f.png)


---
ITU-R BS.1770-3 Loudness：这是国际电信联盟（ITU）制定的标准，用于测量节目音量，考虑了听觉感知的因素，广泛用于广播和媒体制作。

ATSC A/85 Loudness：由美国电视系统委员会（ATSC）定义的标准，适用于电视音频的响度测量，旨在保证一致的音量水平，以提升观众体验。

EBU R128 Loudness：欧洲广播联盟（EBU）实施的响度标准，强调使用“平均响度”作为重要的音频标志，适用于音乐和广播行业。

---

#### 2. 手动调整片段 Gain(增益)

`Clip > Clip Gain`
使用 Match Clip Loudness 功能后, 有些片段可能会变得过于响亮, 还要手动调整片段 Gain(增益) 


![](https://tingwu.aliyun.com/api/editor/get/v2/524379/0/4f3f09c873614852a7dcbd612e24fa03/a347ce08e43d4abd815f457e4ddb8d24.png)


<!-- 
为什么不直接调 Volume, 或者Volume Envelope?
"Clip Gain 和调节 Volume 以及Volume Envelope(黄色线) 的主要区别如下：

   - Volume 调节通常在混音通道或轨道上进行
   - Clip Gain 直接应用于音频片段本身
   - Volume Envelope(黄色线) 调节通常是混音处理链中的最后一个环节, (包含混音处理)
-->

---

#### 3. 使用音量包络线
 Using the Volume Envelope(黄色线)
TLDR:  在单个片段内创建动态音量变化。

🎵 使用音量包络和关键帧为音乐轨道创建动态音量变化。
![](https://tingwu.aliyun.com/api/editor/get/v2/524379/0/00db3a6e62b04d2ca312a51e890857c5/9ed9860f7624434fa760fdf612794eff.png)

---


#### 4. 添加音频淡入淡出

TLDR: 平滑片段的开始和结束,消除突兀的声音切换。
![](https://tingwu.aliyun.com/api/editor/get/v2/524379/0/be291645d29946cfaff661bbe37b2944/9f77bede57ce434d86f45574ae27da7b.png)

![](https://tingwu.aliyun.com/api/editor/get/v2/524379/0/13d81f4d5ce24b3bb4548ba80ffd3124/9303871a4c614ced8ee6689402413376.png)

---

#### 5. 音乐与对话的混音技巧

让背景音乐恰当地衬托对话,不遮盖主要内容。


---
### 010 去除不需要的声音

> 02_05_RemoveSound.sesx

TLDR: 学习如何使用Adobe Audition的波形编辑器和频谱显示来识别和移除录音中的不需要声音,如电话铃声。

---

#### 1. 识别问题声音
   TLDR: 使用频谱显示来可视化音频文件,轻松找出需要移除的声音。
   
• 🖱️ 双击文件以切换到波形编辑器
• 🔍 使用频谱频率显示来更好地可视化声音

---

![](https://tingwu.aliyun.com/api/editor/get/v2/524379/0/95a65afc95b5498faee5c4c89430d0fe/fe3ea2785392438e89301419e6859e3a.png)

---

频谱图会显示音频的频率和强度信息:
   - 纵轴表示频率,从低到高
   - 颜色表示强度:黄色最强,紫色较弱,黑色几乎无声
   - 人声通常在中低频率范围内有较宽的频带
   - 查找特定声音的特征模式,如电话铃声的规律线条

---

#### 2. 选择目标声音
 
 使用画笔选择工具精确选择需要移除的频率范围。

![](https://tingwu.aliyun.com/api/editor/get/v2/524379/0/7bda92d9160b4cfd927c8f6e238a7642/20dc5dbd03d44ec3b75b75c46e817e53.png)

---
• 🖌️ 使用画笔选择工具隔离铃声
- change brush size press `[` or `]`  key
- `Play` 
---

#### 3. 应用噪音减少效果
   TLDR: 使用"噪音减少/声音移除"效果学习并移除选定的声音。

• 🎛️ 应用噪音减少/声音移除效果

`Effects > Noise Reduction / Restoration > Sound Remover (process)...`

---

![](https://tingwu.aliyun.com/api/editor/get/v2/524379/0/02604d25cc4a4f7e9030a0d53c49b7bd/9dc4c7dc15a24173a11131843cc83fce.png)

---

Enhance for Speech（增强语音）：勾选此项可以优化设置以提高人声的清晰度和可懂度，适合处理语音相关的音频。

Enhanced Suppression Strength（增强抑制强度）：这个选项用于控制去噪效果的强度。增大这个值可以**增强对噪声的抑制效果**，但也可能影响音频的自然性。

---

Learn Sound Model（学习声音模型）：此按钮用于分析选择的声音特征，创建一个适合的声音模型，从而更有效地去除不需要的声音。

Sound Model Complexity（声音模型复杂度）：该滑块控制声音模型的复杂度。较高的值将使模型更加复杂，有助于更精确地识别并去除不必要的声音，但可能会增加处理时间。

Sound Refinement Passes（声音精细化通道）：此滑块设置音频处理的精细化通道次数。更多的通道可以提高去噪效果，但也可能导致处理时间更长。

Content Complexity（内容复杂度）：该滑块调整内容的复杂度。在内容复杂时，更高的值可以帮助保留重要的音频信息。

Content Refinement Passes（内容精细化通道）：类似于声音精细化通道的设置，但这是针对内容本身的精细化处理。

FFT Size（FFT大小）：此下拉菜单用于选择快速傅里叶变换的大小。较大的FFT大小可以提供更高的频率分辨率，有助于准确捕捉音频特征，但也会增加计算负担。

---

#### 4. 预览和应用更改
   TLDR: 在预览窗口中确认效果,然后将其应用到整个文件。

---

#### 5. 保存和替换
   TLDR: 将编辑后的文件另存为新文件,并在多轨会话中自动替换原始文件。
   
• 💾 使用"另存为"功能保存修改后的文件
• 🔄 返回多轨会话并检查效果
![](https://tingwu.aliyun.com/api/editor/get/v2/524379/0/353db0e10dc64648b7716073aa28839e/4941a5e6ba2e458c8d042ee5b6f61343.png)


   
---

### 011 导出回 Premiere

TLDR: 学习如何将Audition中编辑好的音频项目导出并重新导入Premiere,保持灵活性的同时确保音频与视频同步。


#### 1. 准备工作
   TLDR: 打开Premiere并加载目标序列。

> Exercise Files > 02_FastTrack > 02_06_ProjectRELO_short.prproj
> Exercise Files > 02_FastTrack > 02_06_ExportPremiere.sesx

---

#### 2. 从Audition导出
   TLDR: 选择"多轨导出到Adobe Premiere Pro",将每个轨道导出为单独的音频文件(stem)。`Multitrack > Export Adobe Premiere Pro…`

---

#### 3. 导入Premiere
   TLDR: 选择将stems导入新音轨,保留原始编辑的灵活性。
   ![](https://tingwu.aliyun.com/api/editor/get/v2/524379/0/4289128c8af74ac0a30a2207c4daadc4/12066722d5874c83b5f853e4c2180ef6.png)


---

####  4. 后续编辑
   TLDR: 利用分离的stems灵活调整对话、音乐等单独元素,或直接导出最终成品。

![](https://tingwu.aliyun.com/api/editor/get/v2/524379/0/5ed70cc2b7514138bdad633049796862/d2ca98edcb614d1995bc528efa6832ed.png)

---
#### 5. 显示通道命名
![](https://tingwu.aliyun.com/api/editor/get/v2/524379/0/f310ecebd1594510b91ef83858c3f50e/e8e8b8799ab841479a10969f8664fb7d.png)



---


