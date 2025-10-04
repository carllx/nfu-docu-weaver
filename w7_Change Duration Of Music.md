
## Remix(混音) 和 Stretch(延伸) 工具



![bg fit left:50%](https://i.imgur.com/VMQibRz.webp)

Remix 和 Stretch 工具用于调整音频长度以匹配视频时长.

---


- **Stretch** 适合微调, 因为会导致音调变化
- **Remix** 识别循环和重要片段快速重新混音, 适合大幅调整音频长度且保持质量


---



## 39 Stretch(拉伸剪辑)
<!--  (Source:  [aliyun.com: 039 Stretching clips](https://tingwu.aliyun.com/doc/transcripts/ro84nrm8av7wqkb3))-->

注意事项：
- 保持对话的自然音调(Pitch)
- 避免产生音频失真

---


优化拉伸质量
   - 打开 Properties 面板
   - 展开 stretch settings 部分
   - 设置 Types && Modes 


![bg fit left:50%](https://i.imgur.com/VMQibRz.webp)


---

### Types 

修复音高的两种处理类型:  

1. monophonic (单声道) 录音通过单一声道进行，适合简单音频内容。

2. Polyphonic（多声道） 处理和声或伴奏音频时，多声道模式更合适。 

3. Varispeed (非常速度) 改变声音持续时间和音高，类似模拟磁带机速度变化效果。此功能用于音乐制作和声音设计，可创造特效或调整音乐速度而不影响音高。


---

### Modes

音频片段的拉伸有两种模式：

1. 实时（Real-time）模式提供即时的拉伸效果，但质量可能较低，并可能出现失真 。

2. 渲染（Rendered，High Quality）模式则会先渲染， 并提供更高的质量 ，更好避免出现失真 。 

---

Practice 

![150|](https://i.imgur.com/SWAQE35.webp)





<!--


高级设置

1. **瞬态敏感度（在多声部模式下可用）**：这个设置调整对瞬态（如鼓击和音符开始部分）的敏感性，这些瞬态被用作拉伸音频时的锚点。如果瞬态听起来不自然，可以增加这个设置的值。
    
2. **窗口大小**：这个设置定义了处理音频时每个音频块的大小，单位是毫秒。如果出现回声或颤音等声音失真，才需要调整这个设置。
    
3. **精度设置（在渲染模式下可用）**：这个设置提高精度可以提升音频质量，但可能会降低处理速度。
    
4. **保持共振峰（在渲染和单声部模式下可用）**：这个设置调整乐器和人声的音色，确保在音高变化时保持真实感。共振峰是影响声音特征的重要因素，通过调整它们，可以在改变音高的同时保持原始声音的质感。


-->





---

## 40 Remix(重新编辑音乐)
<!-- (Source:  [aliyun.com: 040 Re-editing music with Remix](https://tingwu.aliyun.com/doc/transcripts/3vl8qgao4l6oqpr2))
 -->
自动重新编辑音乐轨道以适应特定时长。

1. 选择需要编辑的音乐轨道
 -  `Clip > Remix > Enable Remix`
 - `Window > properties(pannel)`

 

---


2. 分析音乐轨道结构
   等待 Audition 自动分析完成, Clip 两侧的变成"梯级"

![bg fit left:50%](https://i.imgur.com/S7q4bGm.webp)



---


微调 Remix 设置
   打开属性面板 `Window > Properties`
  
   
重编辑长度（Edit Length）

![150|](https://i.imgur.com/2hPCvcW.webp)

![150|](https://i.imgur.com/MBuuMJR.webp)



---

### 特征（Features）

**音色（Timbre）**：
- 强调音频的声音特质，适用于需要细微变化和丰富细节的片段。


**和声（Harmonics）**：
- 更注重旋律和和声结构，适用于想突出旋律部分。

Dance music( 舞曲) 有一致的节拍
Classical Music (古典音乐)具有复杂的旋律。

---


精确调整音乐长度（可选）
   在属性面板中勾选"精确拉伸到指定长度"（Stretch to Exact Duration）


---

END

<!--  
## 41 创建计算机生成的语音

### TLDR
学习如何使用Audition的语音生成功能创建临时旁白，加快编辑流程。

(Source:  [aliyun.com: 041 Creating computer-generated speech](https://tingwu.aliyun.com/doc/transcripts/58gmq65ralv2nzwo))

-->
