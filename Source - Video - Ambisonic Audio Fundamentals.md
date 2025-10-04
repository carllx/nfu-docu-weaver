  
![|200](https://i.ytimg.com/vi/9m4VxFSYSEA/hqdefault.jpg)
(Source:  [youtube.com: Ambisonic Audio Fundamentals (2020) | Simon Hutchinson](https://youtu.be/9m4VxFSYSEA?t=323))
Have you seen these mics around? Have you heard  the term ambisonics and you're wondering what   it's all about? Well, hi, this is Simon, and this  video is a quick introduction to ambisonic audio.   Ambisonic audio was actually  first developed in the 1970s,   but it's enjoying a recent resurgence because  of the possibilities it offers in immersive   audio for virtual reality and 360-degree video.

[00:26](https://www.youtube.com/watch?v=undefined&t=26s)

  Similar to 360 video, ambisonics allows us to   create a 360-degree sound field that can  then be decoded into a number of formats.   Here in YouTube, for example, if you upload a 360  video with ambisonic audio, it's decoded into a   stereo binaural file when the viewer watches it.  What's neat about that, though, is the stereo file   the viewer hears will correspond to the direction  that they're looking.

[00:49](https://www.youtube.com/watch?v=undefined&t=49s)

So, just like a 360 video   viewers can interact and choose where they want  to spend their attention. This is great! But how   does it work? In order to understand what's going  on, it's helpful to start by thinking about stereo.   Most of the time, when we record stereo, we use two  microphones set up like this.

[01:05](https://www.youtube.com/watch?v=undefined&t=65s)

When we play this   back, one microphone goes to the left speaker, and  one to the right, and we get a stereo recreation of   the sound. But did you know you can make a stereo  recording with mic setup like this? This is called   "mid-side recording".

[01:21](https://www.youtube.com/watch?v=undefined&t=81s)

What's going on here is one  microphone, the cardioid, is recording the middle   sound, and the other microphone, a bi-directional  microphone, records both of the sides in a figure   eight pattern. Since one microphone is the middle,  and the other the sides, we can't just put these in   the left and right speaker.

[01:37](https://www.youtube.com/watch?v=undefined&t=97s)

We need to do a little  math, adding together these signals in order to   decode the signal into the left and right speakers.  So, with the mid side technique, two microphones   create one dimension of audio--left to right. For a  3D, ambisonic recording, all we need now, in addition   to left and right, is another bi-directional  microphone for up and down, and one more for   front and back. Now most ambisonic microphones  you can buy, don't use bi-directional microphones.  

[01:58](https://www.youtube.com/watch?v=undefined&t=118s)

![150|](https://i.imgur.com/wGUI0F7.webp)
![150|](https://i.imgur.com/KsExDzn.webp)

Instead they have four cardiod microphones  set up in a tetrahedral microphone array. The math of combining the four microphones is  different, but the concept is the same. 
We'll   have four audio tracks that we combine together  to create a 3D image. When we're working with   ambisonics, it's important to know a few terms  to understand what format your audio file is   currently in, and what kind of conversions it needs  to go through before distribution and playback.  

[02:25](https://www.youtube.com/watch?v=undefined&t=145s)

The raw recording from one of these tetrahedral  microphones is called "A-format". A-format files   are four channel audio files that simply have the  input of each microphone in the tetrahedral array.   B-format ambisonic files have gone  through one stage of conversion,   and the signals have been combined to create  something akin to the mid-side recording.  

[02:45](https://www.youtube.com/watch?v=undefined&t=165s)

Only with the ambisonics, it's mid, side, up-down,  front-back. These are actually given the names   W for the center, omnidirectional channel. X for the  bi-directional front and back. Y for the left right.   And Z for the up down.

[03:07](https://www.youtube.com/watch?v=undefined&t=187s)

We also need to know that  there are two kinds of B-forman, Ambix and FuMa, which order these channels in different  ways, and have different relative amplitudes.   You can look these both up for more information,  but what's most important is you understand what   format you need to deliver in and make sure your  files are in the appropriate format. YouTube and   Unity3d, for example, currently both want Ambix  files, not FuMa files.

[03:27](https://www.youtube.com/watch?v=undefined&t=207s)

In most any software that's   used to convert your A-format files into B- format, you should be able to select either   Ambix or FuMa, and you can also convert  in between these two formats with ease.   A warning: Ambix, FuMa, and A-format will all  just appear on your computer as 4-channel audio   files. So it's very important that you label  them to avoid confusion and headaches later.  

[03:49](https://www.youtube.com/watch?v=undefined&t=229s)

Everything we've been talking about so far has  been first-order ambisonics. You can use more than   four microphones, more than four audio tracks, to  create higher-order ambisonics. These additional   tracks help create a more full 360 degree sphere,  filling in the diagonal dead spots between the   microphones. Here's the waveform of a third-order  ambisonic file, which contains 16 audio tracks.

[04:14](https://www.youtube.com/watch?v=undefined&t=254s)

Now,   for playback, all of these ambisonic files must be  decoded. This is actually one of the great things   about ambisonic files: the fact that they are  not channel-dependent. What this means is that   an ambisonic file can be decoded into stereo,  quad, or any number of speaker configurations.   For many people, though, the most convenient way  is to listen to a binaural mix on headphones.  

[04:37](https://www.youtube.com/watch?v=undefined&t=277s)

As I mentioned, in the case of ambisonic audio  on a 360 YouTube video, you're also interactively   creating the stereo output in real time, based  on the viewing angle within the 360 degree audio   sphere. This means that each time someone watches  the video, they'll have a unique sonic experience.  

[04:56](https://www.youtube.com/watch?v=undefined&t=296s)

This real-time decoding was perhaps  not what engineers had in mind when   developing this technology in the 70s, but it  certainly helps the resurgence of interest   in this 40-year-old technology for use  in immersive and virtual environments.   I don't claim to see the future, but I do encourage  emerging artists and engineers to understand this   technology, because it might hold some answers  to contemporary and future audio challenges.  

[05:22](https://www.youtube.com/watch?v=undefined&t=322s)

This video is part of a series on immersive audio,  created in collaboration with SpectralEvolver.   Go check out his channel, and, if  you're interested in immersive   audio, please check out the rest of our playlist.



环绕音频技术（ambisonics）最早出现于1970年代，现在因为虚拟现实和360度视频的发展而重新受到关注。这项技术可以创建360度的声场，并可以转换为多种音频格式。
![150|](https://i.imgur.com/6OqaFdA.webp)

在YouTube上，当用户观看带有环绕音频的360度视频时，声音会根据观看方向相应变化。环绕音频使用四个心形麦克风组成四面体阵列来录制声音。这种录制被称为A格式，包含四个声道。

经过转换后的B格式包括四个通道：W（中心全向通道）、X（前后双向）、Y（左右）和Z（上下）。B格式有两种类型：Ambix和FuMa，它们对声道的排列方式不同。YouTube和Unity3d目前使用Ambix格式。

环绕音频的一大优势是它不依赖于特定声道配置，可以解码为立体声、四声道或其他扬声器配置。在虚拟现实环境中，这种技术能让每个观众获得独特的听觉体验。虽然这项技术已有40多年历史，但在当今沉浸式媒体中仍然发挥着重要作用。



## A B
A 格式是指从环绕声麦克风阵列中获得的原始四声道音频信号 每个声道对应四面体阵列中的一个麦克风的输入

B 格式是将 A 格式经过转换后得到的信号 包含以下四个声道
W 通道 全向中心声道
X 通道 前后双向声道
Y 通道 左右声道 
Z 通道 上下声道

B 格式有两种类型 Ambix 和 FuMa 它们对这些声道的排列顺序和相对振幅有不同的处理方式 YouTube 和 Unity3D 目前要求使用 Ambix 格式

需要注意的是 Ambix FuMa 和 A 格式在计算机中都显示为四声道音频文件 因此准确标记非常重要 以避免后期处理时产生混淆




---


# Premiere VR
使用Adobe Audition进行空间音频混音，用户寻求将多个wav文件混音到4通道 Ambisonics 文件中，并最终使用Matthias Kronlachner的Ambix编码器和Binauralizer Ambisonics效果实现了目标。
- 用户寻求将多个wav文件混音到4通道Ambisonics文件中。 2
- 需要插件将单声道和立体声文件上混到B格式。 3
- 工作流程通常包括将单声道和立体声效果添加到轨道中，通过插件上混到B格式，然后使用方向插件进行定向。 4
- 使用B格式到双声道转换器进行监听，通常带有头部追踪功能。 4
- Matthias Kronlachner的Ambix编码器被用于定位立体声。 
(Source:  [adobe.com: Learn about VR editing in Premiere Pro](https://helpx.adobe.com/in/premiere-pro/using/VRSupport.html#AssemblingAmbisonicsAudio))

- Binauralizer Ambisonics效果被用于预览输出。 1
- Adobe Premiere Pro CC也被提及。

(Source:  [stackexchange.com: mixer - How do I use Adobe Audition for Spatial Audio Mixing? - Sound Design Stack Exchange](https://sound.stackexchange.com/questions/45149/how-do-i-use-adobe-audition-for-spatial-audio-mixing?newreg=e01ad68cbac944caadafbb1aa27cdb3a))



---


![bg fit left:50% vertical](https://media.wavescdn.com/images/products/plugins/max/b360-ambisonics-encoder.png?auto=format,compress&fit=max&ixlib=imgixjs-3.6.1&w=1678)
立体声（Stereo）系统，这种系统将音频信号发送到两个扬声器，通常是一个左声道和一个右声道。接着，它提到了5.1环绕声系统，这种系统将音频信号发送到六个扬声器，包括五个全频带扬声器和一个低音炮。然后是7.1环绕声系统，它发送信号到八个扬声器，增加了后环绕声道。

与这些系统形成对比的是Ambisonics系统。Ambisonics并不将音频信号发送到特定数量的扬声器；它是“扬声器不可知”的，意味着它不依赖于特定的扬声器数量或布局。相反，Ambisonics可以被解码到任何扬声器阵列中，这提供了更大的灵活性。这句话的最后部分提到了“more on which below”，暗示着在接下来的内容中会进一步解释Ambisonics如何被解码到不同的扬声器阵列中。(Source:  [waves.com: Ambisonics Explained: A Guide for Sound Engineers - Waves Audio](https://www.waves.com/ambisonics-explained-guide-for-sound-engineers))
