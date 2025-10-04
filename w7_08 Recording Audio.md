
## 08 Recording Audio(录音)

<!--  
为什么学习 Audition? 
Pr 也可以间接音频, 给音频做 Effects,  
Au 
专业录音, es. 录音棚采访 
专业的修复处理

-->

---


### 42 设置输入设备


---

#### Audio Hardware(硬件设备设置): 

在 Audition 中开始录音前，我们需要检查硬件设置。

- Mac 用户可以通过 `Adobe Audition > Settings > Audio Hardware`
- PC 用户则通过 `Edit > Preferences > Audio Hardware`。
<!--  (Source:  [aliyun.com: 042 Setting up your input device](https://tingwu.aliyun.com/doc/transcripts/klrbn2xryew8q5zy))
-->



---


#### 设备类别

在Audition开始录音前，先检查硬件设置。
- Mac 设备类别: Core Audio
- Windows: Mme/Asio/WasAPI 

<!--  设备类别下，Mac 用户通常只有 Core Audio 选项。PC 用户可能有 Mme、Asio 或 等选项。-->

![bg auto left:50%](https://i.imgur.com/j6xF9KC.webp)

---
#### IO缓冲区
IO缓冲区大小控制声卡每次处理的数据量。
默认512个样本，但需根据系统调整，特别是出现音频问题时(中断或爆音)

![bg fit left:50% vertical](https://i.imgur.com/sCpM4h8.webp)


---

#### 避免重采样


采样率应与音频文件一致 
可勾选选项自动调整, 声卡会选择最接近的速率 不会导致声音失真
```
"尝试强制硬件使用音频文件采样率"
```


这些设置取决于声卡 点击Settings可访问声卡设置


![bg fit left:50% vertical](https://i.imgur.com/Mw413xN.webp)




---
### 43 波形编辑器中录音

<!-- 

波形编辑器适合录制单个音频文件,多轨编辑器适合录制多个音轨并混音。


 (Source:  [aliyun.com: 043 Recording audio in the Waveform Editor](https://tingwu.aliyun.com/doc/transcripts/ro84nrm8avrwqkb3))
-->

1.波形编辑器
2.多轨编辑器

---

测试麦克风Levels(音量): 
- 右击电平表,选择"测量输入信号"
- 避免过高导致削波(红色)或过低。
- 如果过大, 可到硬件设置, 调节麦克风 Levels 音量级别

![150|](https://i.imgur.com/wmFXlWN.webp)


![bg left width:90%](https://i.imgur.com/cpeSo6q.webp)



---



创建新文件:
1. 在Files面板选择"新建音频文件"
2. 设置文件名、采样率、声道和位深度

![bg fit left vertical](https://i.imgur.com/UC3YsHl.webp)



![bg fit left:50% vertical](https://i.imgur.com/7AvGHBa.webp)

---

录音: 
- 点击录音按钮或按Shift+空格键.
- 继续录音时,将播放头移到文件末尾,否则会覆盖已录制内容。

保存:
- 选择 `文件 >  保存` ,选择保存位置



---
### 44 多轨编辑器中录音


<!--  
TLDR: 在多轨编辑器中设置输入轨道，启用录音，可选择监听效果，录制音频，自动保存在会话文件夹中。
(Source:  [aliyun.com: 044 Recording audio in the Multitrack Editor](https://tingwu.aliyun.com/doc/transcripts/g2y8qeak7ye3nbeo))-->

---
![150|](https://i.imgur.com/mhHdGBs.webp)
![bg fit left:50% vertical](https://i.imgur.com/e69OEFw.webp)
在多轨编辑器中选择要录音的轨道,展开轨道并设置正确的输入设备。


---
测试麦克风Levels(音量): 
点击轨道的"录音就绪"按钮,输入电平表就会开始移动。

![bg fit left:50% vertical](https://i.imgur.com/H6OVPgL.webp)




---



![bg fit left:50% vertical](https://i.imgur.com/JAm7xs6.webp)


多轨编辑器可开启效果 Inspector (监听输入)试听效效果.
> 手提电脑录音不适宜, 麦克风与扬声器太近, 可能会循环拾取扬声器发出的声音, 导致噪音不断放大. 


---


如何找到录音文件再电脑的位置?

多轨编辑器自动保存录音 右击片段可在文件面板查看 录音保存在recorded文件夹

![bg fit left:50% vertical](https://i.imgur.com/DW3ZZuG.webp)

![bg fit left:50% vertical](https://i.imgur.com/gaOHFPQ.webp)





---




<!--  
### 45 波形vs多轨编辑器
TLDR: 波形编辑器适合单独录制文件，多轨编辑器适合需要与其他文件混音编辑的录音。
(Source:  [aliyun.com: 045 Using the Essential Sound panel](https://tingwu.aliyun.com/doc/transcripts/2yjoqz28bymyq68l))
-->

---


## 录制系统音频

例如浏览器中录制Shepard Tone 生成器声音.
(Source:  [mynoise.net: Binaural Shepard Tone Generator — The Audio Illusion](https://mynoise.net/NoiseMachines/shepardAudioIllusionToneGenerator.php))

![bg fit left:50% vertical](https://i.imgur.com/sqHJ2jR.webp)

```
https://mynoise.net/NoiseMachines/shepardAudioIllusionToneGenerator.php
```

设置参考教程: 
PC (Source:  [youtube.com: How to Record System Audio in Adobe Audition 2024](https://youtu.be/x-KZ0fRXPgA?t=3))
MAC (Source:  [youtube.com: How to Record Screen Audio in Adobe Audition for MAC -Screen Capture-](https://youtu.be/9ru1uAPHq9E?t=1))


---

1. **设置音频硬件:** Edit > Preferences > Audio Hardware  , 选择Device Class为MME 。
2. **设置声音输出:** 在声音窗口中，确保Playback RealTech Audio output 设置为默认。

![bg fit left:50% vertical](https://i.imgur.com/3B4Muz7.webp)


---


3. **启用立体声混音:** 
- Recording标签页，如果没看到混音设备右键点击空白处，选择Show disabled devices (显示禁用的设备)
- 找到Stereo Mix，右键点击并选择Enable 。

![bg fit left:50% vertical](https://i.imgur.com/4pFlU75.webp)
![bg fit left:50% vertical](https://i.imgur.com/Ut3Fp51.webp)



---



2. **调整立体声混音音量:** 
- 右键点击Stereo Mix，选择Properties(属性)

![bg fit left:50% vertical](https://i.imgur.com/g8hkXxq.webp)


---

3.**调整音量:** 

Levels(音量级别)选项卡中将音量级别设置为80%-90%，媒体播放器(浏览器)声音级别设置为100%.
![bg fit left:50% vertical](https://i.imgur.com/Xf2Jdc2.webp)

---

4. **设置音频输入和输出:** 
在Adobe Audition 的音频设置中，将Audio Input设置为Stereo Mix (RealTech Audio)，Output设置为系统默认。

![bg auto left:50% vertical](https://i.imgur.com/DxAet8x.webp)

---

![bg fit left:50% vertical](https://i.imgur.com/7AvGHBa.webp)

5. **开始录制:** 
播放音乐，在Adobe Audition中点击Record按钮 ，设置采样率、声道和位深，然后点击OK开始录制。



