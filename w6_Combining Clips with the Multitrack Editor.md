# 06 Combining Clips with the Multitrack Editor 多轨编辑器




---

## 29. Multitrack(多轨编辑器)界面
TLDR: 熟悉轨道控制、缩放、音量和声像调节等基本功能。

---

1. 介绍多轨编辑器界面
   a. 水平和垂直缩放方法：
      - 使用`+`号和`-`键进行水平缩放
      - 在音轨标题上使用`Mouse wheel(鼠标滚轮 )`进行垂直缩放.
   d. 使用 `Zoom selected track` 按钮（快捷键：`shift + / `）


---

2. 音轨标题区域的功能
   a. Rename 音轨
   b. 拖动改变音轨顺序


---

3. 音轨控制按钮 M,S,R 
- `M`（Mute）：静音按钮
- `S`（Solo）：独奏按钮
- `R`（Record）和 `I`（Monitor Input）：用于多轨编辑器中的录音


---

4. 音量和声向控制

![150|](https://i.imgur.com/ATQE3Jw.webp)

   a. `音量`旋钮, 调整或直接输入数值
   b. `左右声道`旋钮, 控制平衡调整声道


---

5. 输入和输出选择
   a. Input (输入) 与多轨编辑器录音有关.
   b. Output(输出) 当前设置为Master (主音轨), 之后会涉及其他选项.
![150|](https://i.imgur.com/DVhBljD.webp)

---

6. Master Track(主音轨) 的功能

-  汇总/统一控制/调整多个音轨的音量
-  不能添加片段或直接录音


---

## 30. Session
### 1. `New Multitrack Session`(新建多轨会话 ) 

TLDR: 学习如何创建新的多轨会话,设置采样率和位深度。

1) 在Files面板中点击新建文件按钮
2) 选择 `New Multitrack Session`
3) 填写会话详细信息：
   - Session 名称（即文件名）
   - 文件夹位置（用于保存会话文件和自动保存文件）
4) 选择模板或自定义设置：
   - 采样率（视频项目推荐48000 Hz）
   - 位深（推荐32位浮点）
   - 主通道数（选择立体声）
5) 点击确定创建会话


---
### 2.添加音频文件
TLDR: 将音频文件添加到多轨会话中,了解不同的添加方法。


#### 2.1. 向多轨会话添加音频文件

1) 从Media Browser到Files面板
2) 从Files面板到多轨会话的轨道上

---

#### 2.2. 一次添加多个音频文件
![150|](https://i.imgur.com/x100Mlm.webp)
步骤：
1) 将选中的文件s 拖动到多轨会话中
2) (可能需要) 选择默认行为：
   - 所有文件添加到同一轨道
   - 每个文件添加到单独的轨道

注意：按住Option键（PC上为Alt键）可以临时改变默认行为。


---

### 3. 定义 Track (轨道)

![150|](https://i.imgur.com/VtvByli.webp)


- 添加新轨道：
  1) 选择 `Multitrack > Track > Add Stereo Track`
- 删除轨道：
  1) 选中要删除的轨道
  2) 选择 `Multitrack > Track > Delete Selected Track`



---

## 31. 编辑片段

### 1.基本编辑技巧
TLDR: 学习使用剃刀工具、移动工具等进行基本的片段编辑。

---

### 2.高级编辑技巧
TLDR: 掌握滑移工具、交叉淡入淡出等高级编辑技巧。
> '... /Ex_Files_AuditionCC2017_EssT/07_Multitrack/07_03_EditClips.sesx'



![150|](https://i.imgur.com/wpnnKiR.webp)

---

删除 ~~In~~ .. individual....
1. 在多轨编辑器中打开音频文件
2. 使用 `+` 放大工具放大波形查看细节
3. 选择 Razor 工具 (快捷键 `R`) 切割音频片段
4. 使用边缘拖动工具修剪音频片段 `<-[`
5. 开启吸附功能对齐音频片段


缩短` ____` and... 前的停顿
1. 同样 `R` + `<-[` 去掉 space(间隔)
8. 使用 Slip 工具 (快捷键 `Y`) 微调补充一点 space(间隔)更自然

删除 ~~Next one...~~Next one...
1. 使用时间选择工具选择要删除的部分, `delete`键
2. 右键选择 `Ripple Delete` 或 `Edit > Ripple Delete > Gap` 删除选中部分并关闭空隙




---
## 32. 淡入淡出和音量调节
![150|](https://i.imgur.com/SVjCSWH.webp)

---


## 33. 匹配剪辑音量

TLDR: 使用剪辑增益和音量包络可以平衡不同音频源的音量。

---

### 1. 调整Clip Gain(剪辑增益)

同时调整多个剪辑的增益(Clip Gain)

- 在属性面板（Properties panel）中设置剪辑增益, 如果看不到属性面板，通过 `Window > Properties` 打开
- 选择音频片段
- 展开增益选项`Basic Settings > Clip Gain`
- 拖动或直接输入数值来调整增益

![150|](https://i.imgur.com/TRLq1ZX.webp)


---

### 2. Match Clip Loudness`(匹配剪辑音量)

![150|](https://i.imgur.com/dl01YZF.webp)


   - 选择所有需要调整的片段
   - 点击 `Clip > Match Clip Loudness`
   - 在弹出的对话框中选择音量匹配方式：
     - Peak Amplitude（峰值幅度）
     - LUFS（感知响度单位）
   - 设置目标响度值（如 -24 LUFS）
   - 点击确定，软件会自动分析并调整每个片段的增益

---

## 34. 调整剪辑电平

(Source:  [aliyun.com: 034 Adjusting clip levels](https://tingwu.aliyun.com/doc/transcripts/4l6xqabkvgvd9m2y))
缺乏案例, 实践的目标

TLDR: 音量包络允许对剪辑内的特定部分进行精细的音量调整。

---

![150|](https://i.imgur.com/ISShepY.webp)


### 1.使用 volume envelopes(音量包络)
1. 确保可以看到音量包络线 ` View > Show clip volume envelopes`
2. 启用关键帧编辑  `Multi-track > Enable clip keyframe editing`
---

### 2.平滑过渡音效和对话音量
- 使用样条曲线创建平滑过渡
- 同时移动多个关键帧

---

### 3. 调整过渡曲线
   - 右击曲线  Spline curves 选项使过渡更平滑
![bg left](https://i.imgur.com/MkJmhxu.webp)

![150|](https://i.imgur.com/mT9nY5q.webp)




---

## 35 调整轨道电平

TLDR: 轨道音量控制允许调整整个轨道的音量,适用于包含多个相关剪辑的轨道。


### 设置轨道音量
- 使用轨道音量旋钮
- 实时调整以找到合适的混音

### 关键帧轨道音量
- 展开轨道以显示音量包络
- 添加关键帧以创建动态音量变化


---

![150|](https://i.imgur.com/fPrGXal.webp)




