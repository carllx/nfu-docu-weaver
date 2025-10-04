
## 05 清理和修复音频
音频清理与修复
audio-cleaning-repair-course-summary
本章介绍了使用Adobe Audition进行音频清理和修复的各种技术，包括频谱显示、去除噪音、修复音频剪切等。


---

### 025 `Healing Brush`, `Auto Heal`移除爆音和点击声

> 课件: 06_Repairing/06_02_RemovePops.wav

TLDR："Photoshop中的修复画笔", 修复如爆音和点击声. 
1. `Spot Healing Brush`工具快速移除音频中的短暂噪音
2. `PaintBrush` + `Auto Heal`


---
Tips: 
   - **Time Selection Tool**：`Ctrl` + Drag 放大选择时间范围。

![150|](https://i.imgur.com/pa4dLUj.webp)

---

#### 1. Spot Healing Brush 
![150|](https://i.imgur.com/0mZvph4.webp)


---

#### 2.Paintbrush Selection Tool + 

 按住 `Shift` 键，可以添加更多区域到当前选择。
 
![150|](https://i.imgur.com/4gHmuD7.webp)

---

#### 2-2. 播放和验证 Noise 选区
   - 确保启用了循环播放，点击 `Loop` 按钮。
   - 播放选定的区域，确认所选频率是否包含目标声音。


---

#### 2-3.   Marquee Selection Tool  + Favorites > Auto Heal

![150|](https://i.imgur.com/dyxxWUh.webp)



---

### 026 Noise Reduction 移除背景噪音

> ../06_Repairing/06_03_RemoveNoise.wav

TLDR：使用`Noise Reduction`效果，通过采样背景噪音来有效地移除持续的噪音，如空调声、电流声等。


---

应用噪音降低效果 `Effects > Noise Reduction/Restoration > Noise Reduction (process)`

![150|](https://i.imgur.com/b0sL7s4.webp)


---

![150|](https://i.imgur.com/tG7a1pX.webp)



---

#### 1. 识别声音指纹(选择的噪音样本)
- 选择纯噪音区域, 预览选择的噪音样本
- 点击"Capture Noise Print"按钮捕获噪音样本

#### 2. 预览噪音部分
- 启用"Output noise only"选项以预览要移除的噪音, 可以帮助判断是否过度去除了有用的音频信息
- 播放处理后的音频以确认噪音已被有效去除

#### 3. 微调参数
- 将"Reduce by"滑块调回1 dB，然后逐渐增加直到噪音消失
- 将"Noise Reduction"滑块调回最低0，然后逐渐增加直到噪音消失

#### 4. 应用效果
- 点击"Apply"按钮应用噪音降低效果前, 取消 "Output noise only"选项


---

### 027 Sound Remover 移除特定声音

TLDR：**使用`Sound Remover` 移除录音中的特定声音（如蟋蟀或鸟叫声）**

> ../06_Repairing/06_04_RemoveSound.wav


![150|](https://i.imgur.com/2VPmYW5.webp)

---

#### 1.  Sound Remover 预览效果
   - 导航至`Effects > Noise Reduction/Restoration > Sound Remover Process`
   - 点击"Learn Sound Model"按钮，让Audition学习需要移除的声音模型
   - 取消选择原始声音区域

---


![150|](https://i.imgur.com/rEwhvRF.webp)



---


#### 2. 调整Sound Remover设置

---

a. Sound Model Complexity (声音模型复杂度):
这个参数用于处理频率变化较大的声音, 例如在大型音乐厅或教堂声音有复杂的反射和折射，产生复杂的回声和混响效果。 复杂度越高,可以更好地处理频率变化的声音,但也需要更多的处理时间。

---

b. Sound Refinement Passes (声音精炼次数):
这表示音频处理的次数。声音越复杂,需要的优化通道数就越多。增加通道数可以提高处理效果,但也会延长处理时间。

---

c. Content Complexity (内容复杂度):
这个参数针对的是你想保留的声音,在这个例子中是受访者的说话声。如果要保留的内容较为复杂,可以提高这个参数。

---

d. Content Refinement Passes (内容精炼次数):
类似于声音优化通道数,这个参数决定了对要保留内容的处理次数。内容越复杂,可能需要更多的优化通道。

---

e. Enhance for Speech（语音增强）

f. FFT大小：可以更精确地移除噪音，但也可能产生音频瑕疵，例如出现一些“嗡嗡”或回响的声音。


---

### 028 修复被削波的音频文件
> 
> .../06_Repairing/06_05_RepairClipped.wav


TLDR：使用`DeClipper`效果主要用于修复录音Level(电平) 过高导致的音频削波问题，恢复音频的原始峰值，减少失真。
例如:如果音频因录制时音量过高而出现削波，可以使用`DeClipper`效果进行修复。

![150|](https://i.imgur.com/O8kZIOb.webp)

---
#### 1. Scan
打开`Effects > Diagnostics(诊断) > DeClipper`, 点击`Scan`扫描音频中的削波峰值。

---

#### 2. 削波定位
取消勾选 "Settings" 按钮可查看所有检测到的削波峰值列表在波形中的定位.

![bg left](https://i.imgur.com/sAlq1dh.webp)



---

#### 3. De-Clipper 设置（如有必要）

可以调整`Tolerance`、`Gain`和`Interpolation`等参数，进一步优化修复效果。

a. 调整 Tolerance（容差）
  - 控制识别削波音频时的幅度变化范围
  - 默认设置为 1%, 建议保持较低的数值，避免误判正常峰值
b. 设置 Gain（增益）
  - 用于处理接近 0 dB 的音频文件
  - 调整整体音频电平，为重建峰值创造空间
c. 选择 Interpolation（插值）方法
  - 默认使用 Cubic（三次方）插值，适用于大多数情况
  - 对于严重削波或短音频文件，建议使用 FFT 设置并选择高 FFT 大小

---


![150|](https://i.imgur.com/Z9gpl8b.webp)


---
#### 4. Repair All
扫描完成后，点击`Repair All`修复所有检测到的问题。











