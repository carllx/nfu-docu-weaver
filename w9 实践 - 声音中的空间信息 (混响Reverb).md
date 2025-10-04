
![bg fit left:50% vertical](https://i.imgur.com/yMECdxs.webp)
![|200](https://i.ytimg.com/vi/4TGTfoTZ3ek/hqdefault.jpg)
(Source:  [youtube.com: When a Director Understands Sound](https://youtu.be/4TGTfoTZ3ek?t=10))



参考
(Source:  [aliyun.com: 055 Using Reverb Effects](https://tingwu.aliyun.com/doc/transcripts/dej8nbxkyombqpog))
(Source:  [adobe.com: How to apply reverb effects with Adobe audition ](https://helpx.adobe.com/audition/using/reverb-effects.html?mv=product&mv2=au#studio_reverb_effect))
(Source:  [practical-music-production.com: What Reverb Is And How It Works](https://www.practical-music-production.com/reverb/))


---

## 声音如何储存空间信息

好比海绵球在潮湿的空间中反弹, 粘取空间信息. 
混合后的声音(Reverb), 能让我们感知深度和氛围。
![bg fit left:50% vertical](https://i.imgur.com/wLc5OZd.webp)

---

### 分解 Reverb 声音

![bg fit left:50% vertical](https://i.imgur.com/J15QRxg.webp)

Direct Sound(声源)  === Dry(干音)
Early Reflections + Reverb === Wet(湿音, "空间信息")
- $1000ms \approx 音乐厅$

---


![bg fit left:50% vertical](https://i.imgur.com/KGYOtxK.webp)


> 在录音时，为了获得清晰的音轨，通常会近距离拾音，导致声音听起来比较“干”、缺乏空间感



---
## 55. Reverb(混响)效果

### Studio Reverb
Studio Reverb 是最简单直接的混响效果。
主要调节时间参数生成 Reverb 效果

---

![bg fit left:50% vertical](https://i.imgur.com/AS2BYT2.webp)

**Decay(衰退)**: 衰减时长，影响声音的清晰度。
Early reflections(早期反射): 声音首次声音碰到物体后反射到达耳朵的时间, 反映了空间的大小。
 Width: Stereo 声道宽度 0为单声道。
High /(Low )Frequency Cut: 混响的最高和最低频率。
Diffusion(扩散): 效果在立体声中的分布，模拟空间的形状。
**Damping(阻尼)**: 调整高频混响信号随时间衰减量。
Diffusion: 模拟声音在各种表面的吸收情况（如地毯和窗帘）。


---


### Convolution Reverb(卷积混响)

Convolution Reverb  加载特定房间的爆破声(IR脉冲文件), 模拟声学空间。

制作脉冲响应(户外冲激响应)
![|200](https://i.ytimg.com/vi/dHYI_gdpz-4/hqdefault.jpg)
(Source:  [youtube.com: How to Easily make Reverb Impulse Responses](https://youtu.be/dHYI_gdpz-4?t=668))


---

**脉冲(Impulse)**: 导入WAV或AIFF格式
混合(Mix): 调干声（直接声音）与湿声（混响后的声音）的比例
房间大小(Room Size): 模拟的空间大小, 越大，混响效果越长
低频衰减(Damping LF): 减弱低频混响，提高声音锐度
高频衰减(Damping HF): 减弱高频混响，使声音更温和
前延迟(Pre-Delay): 直接声音和早期反射之间的时间差，一般0-10毫秒
宽度(Width): 调整立体声效果，0为单声道
增益(Gain): 调节最终输出音量(Volume)

![bg fit left:50% vertical](https://i.imgur.com/WGfIH0G.webp)

---
![bg auto left:50% vertical](https://i.imgur.com/EzYiJEl.webp)


BOOM Library户外脉冲响应库，包含68种优秀的户外脉冲响应将声音置于特定地点，使其听起来逼真和可信:

户外，响应，田野，峡谷，树木，回声，陨石坑，森林，平原，山坡，山谷，小溪，房屋，山脉，...

![150|](https://i.imgur.com/SAP09Al.webp)


---


![bg fit left:50% vertical](https://i.imgur.com/adjLdux.webp)

![bg fit left:50% vertical](https://i.imgur.com/XtGvsKX.webp)

"Fields & Spaces" 系列中的户外冲激响应, 包含三种深度音频格式: 

1. **Ambisonic格式** 提供360度环绕音效，适合虚拟现实和沉浸式音频体验。
2. **立体声（Stereo）格式** 标准的立体声音频制作，适合于大多数通用音频应用。
3. **环绕声（Surround）格式**：5.1环绕声格式适用于影院和高级音响系统，增强声音的立体感和深度。

---
Mountains, Field, Few Houses 50m.wav
山脉 田野 零星房屋分布在 50 米范围内

![bg fit left:50% vertical](https://i.imgur.com/u2Ewm62.webp)

---

### Surround Reverb

`Reverb > Surround Reverb` 效果主要用于5.1声道的音频源. 

---


重要参数：
输入中心：调节中心声道音频的比例。
低频增强：影响低频音效，但不会直接增加低频的混响。
房间大小：设置房间大小的百分比，数值越大，混响时间越长。
预延迟：设置混响达到最大音量所需的时间，较短的时间听起来更自然，较长的时间则可用于特别效果。
湿干比混合：控制原声音与混响声的比例。



---

END 