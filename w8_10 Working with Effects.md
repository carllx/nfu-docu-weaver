### Effects 组

5 个提升音效 Effects 组
1. **Amplitude and Compression (幅度与压缩)**  平衡音量，控制动态范围，适合录音或音乐混音时避免削顶。 
2. **Filter and EQ (滤波与均衡)**  调整频率响应，去除不必要的背景噪音，提升人声和乐器的清晰度。
3. **Modulation (调制)**  创造动态变化，如和声效果或合唱，活跃音频表现。
4. **Time and Pitch (时间与音高)**  调整音轨节奏和音高，适合音乐混音与修复。
5. **Noise Reduction / Restoration (噪声消除/修复)**  处理录音中的背景噪音，提升音质，适合语音录制。

---

4 个增强空间感 Effects 组
1. **Delay and Echo (延迟与回声)**  增强音频的空间感和深度，常用于音乐制作或声效设计。
2. **Reverb (混响)**  模拟不同的空间声音效果，使音频更自然，常用于音乐与影视后期。
3. **Special (特效)**  创建独特的艺术效果，适合音乐制作或特定声效的需要。
4. **Stereo Imagery (立体声图像)**  增强立体声效果，提升听感，常用于音乐制作。

---
## 49. 在波形编辑器中应用效果

<!--  (Source:  [aliyun.com: 050 Applying effects in the Waveform Editor](https://tingwu.aliyun.com/doc/transcripts/58gmq65ralw5nzwo)) -->



### 波形编辑器和多轨编辑器的区别
- Waveform (波形编辑) 是**破坏性的**,会永久改变文件。
- MultiTrack (多轨编辑) 是非破坏性的,**可以持续调整**。


---

### 为什么使用波形编辑器? 

波形编辑器中的效果处理是破坏性的, 但提供了更多修复功能例如 (Process) 。

![bg fit left:50% vertical](https://i.imgur.com/veiSkWx.webp)



---

### 回顾重要的 Effects

es. `DeClipper` 效果主要用于修复录音Level(电平) 过高导致的音频削波问题
`Effects > Diagnostics(诊断) > DeClipper` 

![150|](https://i.imgur.com/O8kZIOb.webp)

> 参考[[w5_Cleaning and Repairing Audio]] 

---

es. 降噪处理
`Effects > Noise Reduction/Restoration > Noise Reduction (process)`

![bg fit left:50% vertical](https://i.imgur.com/tG7a1pX.webp)


> 参考 [[w5_Cleaning and Repairing Audio]] 



---


### 访问方式 1. Effects菜单

在波形编辑器中应用效果的两种方法
使用效果菜单是最直接的方法。选择Effects菜单,然后选择想要的效果。
![bg fit left:50% vertical](https://i.imgur.com/acicMWb.webp)


---


### 访问方式 2. Effect Rack(效果机架)

- 不包含Process(处理) 标记的效果
- 可实时预览
- 再编辑
- 可调整顺序 
- 删除效果 
- 保存前需点击应用(Apply)按钮将效果永久应用到波形上


![bg fit left:50% vertical](https://i.imgur.com/nshC6Jp.webp)


<!--  另一种方法是使用效果机架  。它有16个Slots(插槽),可以叠加多个效果。效果可以**实时预览**,无需立即应用(Apply)。可以调整效果顺序,删除效果,调节输入输出电平,以及干湿混合比例。

使用效果机架时,效果不会立即应用到文件。保存文件前需要点击应用(Apply)按钮,这会将效果永久应用到波形上。-->

---

## 051 波形编辑器预览功能


<!--  (Source:  [aliyun.com: 051 Previewing effects](https://tingwu.aliyun.com/doc/transcripts/372e9o3gwxym9xb6))
-->


![bg fit left:50% vertical](https://i.imgur.com/hofHOkv.webp)

可在屏幕上下分别显示原音频和预览结果

---

### Independent,  Mirro, Zoom to selection

预览编辑器提供三种缩放选项：独立、同步和选区缩放。这让你可以灵活地比较原始和处理后的音频。

![bg fit left:50% vertical](https://i.imgur.com/DYdxexB.webp)



---

## 52. 多轨编辑器中的效果

<!--  (Source:  [aliyun.com: 052 Effects in the Multitrack Editor](https://tingwu.aliyun.com/doc/transcripts/ro84nrm8avxxqkb3)) -->

好处: 可以灵活叠加, 随时可以继续修改


---
### Clip Effects,  Track Effects

效果可以应用于单个片段或整个轨道。

![150|](https://i.imgur.com/qtdalSo.webp)


<!--  多轨编辑器中没有"应用"按钮,效果可以随时调整。-->

---


当效果堆叠过多影响性能时,可以使用"预渲染轨道"功能来加速播放。这会创建一个临时音频文件,但仍可实时更新效果。

![bg fit left:50% vertical](https://i.imgur.com/a812tIP.webp)


---

## 53. DRC 动态压缩(Using Compression Effects)
<!-- (Source:  [aliyun.com: 053 Using Compression Effects](https://tingwu.aliyun.com/doc/transcripts/g34dn8oge3v3qwjz))  -->
 DRC (动态压缩)技术  -- 减少音频动态范围 
 使弱音更清晰, 广泛用于广告, 公共广播系统.它通过平衡音量提高音频清晰度, 增强语言的叙事性.



---
### High Dynamic Range 高动态范围


神曲:  
- 象声词: “嗯、啊、唉、哟”等。
- 高动态范围的唱法.
充满了情感的层次与想象空间
<!--  生命的力道 -->


![|200](https://i.ytimg.com/vi/oqgUso73HLQ/hqdefault.jpg)
(Source:  [youtube.com: 老锣: 忐忑 Tan Te / 龚琳娜 · 彭家鹏 · 苏州民族管弦乐团 Suzhou Chinese Orchestra](https://youtu.be/oqgUso73HLQ?t=3))

---
### Video素材 -  压缩动态范围对比.

![|200](https://i.ytimg.com/vi/IvePH5zWObI/hqdefault.jpg)
(Source:  [youtube.com: Dynamic Range Compression Demo 2018](https://youtu.be/IvePH5zWObI?t=104))

---
###  压缩 Dynamic range原理

![bg fit left:50% vertical](https://i.imgur.com/dtpSAAv.webp)
动态范围压: 
缩牺牲声音的空间表层次, 换取内容的清晰度, 使得声音更响亮. 

---

低动态: 广告与教育内容, 侧重内容
高动态: 艺术作品, 恐怖片, 电影, 侧重空间表现

---



### 动态压缩实践 Tube-modeled Compressor

![bg fit left:50% vertical](https://i.imgur.com/KewKC2P.webp)

电子管建模压缩器 `Effect >Tube-modeled Compressor`

<!--  
我有过多次这样的奇遇，从天堂到地狱只在瞬息之间。每一朵温柔可爱的浪花，都成了突然崛起、随即倾倒的高山。每一滴海水都变脸变色。刚刚还是那样美丽蔚蓝，骤然间漩涡纠缠着，漩涡把我抛向了高空，又投进了深渊。

```
Scene 1: Close-up of speaker's face, looking thoughtful and reflective
Scene 2: Wide shot of a peaceful beach with gentle waves
Scene 3: Sudden transition to stormy sea with massive waves crashing
Scene 4: Split screen showing contrasting calm and turbulent ocean
Scene 5: POV shot of being tossed high into the air by a wave
Scene 6: Underwater shot of sinking into dark depths
Scene 7: Close-up of speaker's anguished expression
Scene 8: Silhouette of figure standing at cliff edge overlooking rough sea

场景1：特写镜头 讲述者面部表情若有所思 充满反思
场景2：远景镜头 宁静的海滩 波浪轻轻拍打
场景3：突然转场至暴风雨中的海洋 巨浪汹涌
场景4：分屏展示平静与汹涌的海面对比
场景5：主观视角镜头 被巨浪抛向高空
场景6：水下镜头 沉入黑暗深处
场景7：特写镜头 讲述者痛苦的表情
场景8：剪影镜头 人物站在悬崖边俯瞰汹涌的大海

```
当时我甚至想到过轻生。
眼前一片苦海无边啊。放弃希望，那就像放弃剁饼啊。面对暴力，只能沉默和哀叹。今天我才有资格嘲笑昨天的自己，为昨天落叶式的惶恐而感到羞惭。虚度了多少年华，船身多次被礁石撞穿，千万次在大洋里撒网，再捕获到一点点生活的经验，才恍然大悟，道理原来如此的浅显。

你要航行吗？必然会有千妖百怪出来阻拦。暴虐的欺凌是他们的游戏，制造灭亡是他们唯一的才干。命中注定我要常常和他们相逢了，因为我的名字叫做船呢。也许我的样子比他们更可怕，但我以命相拼，一往无前。只要我还有一根完整的龙骨，我绝不许进那避风的港湾。把生命放在征途上，让勇敢来决定道路的宽窄长短。

我完完全全自由了，船头成为埋葬他们的铁铲，在波浪中有节奏的跳跃，就像荡着一个巨大的秋千。即使他们终于把我撕碎，变成一些残破的木片。我不会沉沦，绝不，我会在浪尖上飞旋。后来者还会从残片上认出我来，未来的诗人会喟然长叹。

这里有一个幸福的灵魂，他曾经是前进着的。航船。

-->

---


![150|](https://i.imgur.com/shJQoZY.webp)


---

### 把握压缩率

从1979年到2019年间的音频波形图，
音质并没有提高, 声音的响度和压缩程度在逐年增加。

![bg fit left:50% vertical](https://i.imgur.com/ultr3kS.webp)


---


#### The Loudness War(音量战争)

<!--  音量水平不断增加的趋势被称为 The Loudness War -->

![|200](https://i.ytimg.com/vi/dcKDMBuGodU/hqdefault.jpg)
(Source:  [youtube.com: The Loudness War](https://youtu.be/dcKDMBuGodU?t=194))
(Source:  [aliyun.com: 20110314_The Loudness War](https://tingwu.aliyun.com/doc/transcripts/dej8nbxvre8bqpog))

---

- 对于长期佩戴耳机的用户, 可能会损害用户听力. 
- 利用适当的动态范围, 突出内容重点.


---

艺术作品上传到平台时需要注意: 

消除了不公平的音量竞争, 流媒体平台使用音量标准化(loudness normalization)确保统一音量。

上传后, 可尝试下载分析动态压缩范围的变化. 

(Source:  [threads.net: @xjayrawri • Can we go back to the 70s and 80s mastering? Just because it’s loud doesn’t mean it’s good. • Threads](https://www.threads.net/@xjayrawri/post/C6wdw27xrln))


---


<!-- 

![|200](https://i.ytimg.com/vi/IbIC7B4BU6g/hqdefault.jpg)
(Source:  [youtube.com: What Does Audio Compression Sound Like?](https://youtu.be/IbIC7B4BU6g?t=245)[youtube playlist](https://www.youtube.comhttps://www.youtube.com/redirect?event=infocard&redir_token=QUFFLUhqbjZ6Vmhnc2V6SnhTRmhXLWwyUDdYM19EaDBvQXxBQ3Jtc0ttb1h6bnB6dEtMbkhqN3hHbkF6MlpYelFQQmJjNUgzUTFWeTZKcnBsN3hlV3JJdGItMXlwTE0yandUMmhvcUFfYnhBOEQ0OGwzZ1FKbFQ1QmtlNlZUR0xZZkRoQkxQTXQ0STRfcHJaZEM3LVZ5cmxfdw&q=https%3A%2F%2Fwww.waves.com%2Fplugins%2Frenaissance-compressor%3Futm_source%3Dytc%26utm_medium%3Dreferral%26utm_campaign%3DIbIC7B4BU6g))



 TLDR: 压缩效果用于减少音频的动态范围,使音量更一致。关键参数包括阈值、比率、攻击和释放时间。可以用于平衡对话音量等。

压缩器组件包括：
- 阈值(threshold) 决定压缩开始作用的音量点
- 比率(ratio) 决定压缩的强度。
- 攻击(attack)
- 释放(release)
- 增益(gain) 补偿增益如何避免声音失真？

使用压缩器时，首先设置阈值，决定何时开始压缩。然后设置比率，决定压缩程度。增益减少指示器显示压缩器工作情况。

这段内容是关于Adobe Audition中的一个音频效果——电子管模拟压缩器（Tube-modeled Compressor）的说明。这个效果可以模拟传统硬件压缩器的温暖感，并且可以用来给音频添加一些愉快的色彩，也就是轻微的失真。

以下是对这个效果中各个参数的解释：

- **阈值滑块（Threshold slider）**：这个滑块设定了开始压缩的输入电平。可能的值从-60到0分贝（dB）。最佳的设定取决于音频内容和音乐风格。
- 如果想要只压缩极端的峰值并保留更多的动态范围，可以尝试将阈值设置在峰值输入电平以下5分贝左右；
- 如果想要高度压缩音频并大幅减少动态范围，可以尝试将设置在峰值输入电平以下15分贝左右。


- **输入电平表（Input Level meters）**：在滑块的左侧，这些电平表用来测量输入电平。通过双击电平表可以重置峰值和削波指示器。

- **增益减少表（Gain Reduction meters）**：在滑块的右侧，这些电平表用来测量振幅的减少量，红色条从顶部（最小减少）延伸到底部（最大减少）。

- **增益（Gain）**：在压缩后增加或减少振幅。可能的值从-18到+18分贝，其中0是单位增益。

- **比例（Ratio）**：设置一个压缩比例，从1:1到30:1。例如，设置为3.0时，每超过压缩阈值3分贝的增加，输出1分贝。典型的设置范围从2.0到5.0；更高的设置会产生流行音乐中常见的压缩声音。

- **攻击时间（Attack）**：决定了当音频超过阈值时压缩应用的速度。可能的值从0到500毫秒。默认的10毫秒适用于广泛的音频。对于具有快速瞬态的音频，更快的设置效果更好，但这样的设置对于打击乐以外的音频听起来可能不自然。

- **释放时间（Release）**：决定了当音频下降到阈值以下时压缩停止的速度。可能的值从0到5000毫秒。默认的100毫秒适用于广泛的音频。对于具有快速瞬态的音频，可以尝试更快的设置，而对于打击乐以外的音频，则可以尝试更慢的设置。


![150|](https://i.imgur.com/ktnUARu.webp)

![150|](https://i.imgur.com/gE8OCMm.webp)



攻击和释放设置控制压缩器的反应速度。输出增益可以提高整体音量。

压缩可以平衡对话中的音量起伏。建议从基本比率开始:2:1适度压缩,5:1中等压缩,8:1或9:1强压缩。调整阈值直到指示器只对较大声音亮起。


![150|](https://i.imgur.com/AMzWwHS.webp)


在多轨编辑器中应用压缩效果可以随时调整设置。如需深入了解压缩,推荐Linda的音频压缩基础课程。

-->


---

## 54.  Filters and EQ effects 使用滤波器和均衡器效果


<!--  (Source:  [aliyun.com: 054 Using filters and EQ effects](https://tingwu.aliyun.com/doc/transcripts/dexp9jgo64ak95ol))-->

均衡器效果用于调整特定频率范围的音量（可用于声音变换）






---

### 1.Graphic Equalizer (10 Bands)...

10波段均衡器是最基本的均衡器效果。它有10个旋钮控制不同频率范围的音量。

![150|](https://i.imgur.com/NwD7z2C.webp)


---

1. **1965** - 模拟1965年的音频风格。
2. **1965 - Part 2** - 此预设继续探索1965年的声音特征。
3. **Lo-Fidelity** - 低保真度效果，适合模拟旧录音的音质。
4. **Musical Presence** - 增强音乐的存在感，提升整体音质。
5. **Notch Every Two Octaves** - 每两个八度的狭带滤波器，用于精确调节。
6. **Quick Hi-Pass Filter** - 快速高通滤波器，去除低频噪声。
7. **Quick Low-Pass Filter** - 快速低通滤波器，去除高频噪声。
8. **Rattle The Trunk (Be Careful)** - 检查低频，可能增强混音中低音的即兴感。
9. **Simple Bass Cut** - 简单的低频削减。
10. **Simple Bass Lift** - 简单的低频提升。
11. **Simple High Cut** - 简单的高频削减。
12. **Simple High Lift** - 简单的高频提升。
13. **Vocal Presence - Boost** - 增强人声的存在感。
14. **Vocal Presence - Cut** - 削减人声的频率，适合混音。
---

### 2.parametric EQ (参数均衡器)

parametric EQ (参数均衡器)提供更多控制,可以精确控制,可以增强或减弱特定频率, 改变音色。

![150|](https://i.imgur.com/QXR2XdV.webp)

---



1. **Acoustic Guitar（原声吉他）**：增强吉他的自然音色。
2. **Beefy Snare（厚重小军鼓）**：强化小军鼓的低频，增加力度。
3. **Full Reset（完全重置）**：将所有均衡器设置恢复为默认状态。
4. **Generic Hi-Pass（通用高通滤波器）**：去除低频噪声，保留高频音。
5. **Generic Low-Pass（通用低通滤波器）**：只允许低频信号通过，削弱高频。
6. **Heavy Guitar（重电吉他）**：增强失真吉他的声音厚度。
7. **Kick（低音鼓）**：加强低音鼓的冲击力。
8. **Loudness Maximizer（响度最大化器）**：提升整体音频响度，避免削波。
9. **Old Time Radio（老式广播）**：模拟老式广播效果，增加怀旧感。
10. **Rap Vocals（说唱人声）**：优化人声，适合说唱风格。
11. **Vocal Enhancer（人声增强器）**：提升人声清晰度和存在感。


---

END


---



多轨编辑器的每个轨道都有内置均衡器效果。展开轨道后可以看到均衡器界面,可以调整频率或选择预设。需要注意的是,这个均衡器效果默认是关闭的,需要手动打开。



EQ将始终添加在您的Effects Rack中的所有其他效果之后. 作为最终调整, (例如通常先处理动态和空间效果,最后用EQ微调音色)可减少相位变化对其他 Effect 的影响.

```
为什么 EQ 会导致 phase issues?
```
(Source:  [youtube.com: Understanding Phase Can SAVE Your Mix!](https://youtu.be/WzQuOGuSeEE?t=101))



