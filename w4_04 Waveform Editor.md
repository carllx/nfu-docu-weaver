
1. 波形编辑器的基本概念和用途
2. 如何调整音频振幅, 包括 Normallize(标准化) 批量调整
3. Audition独特的剪贴板功能

---

## 1 Waveform 波形编辑器(19 )

---

### 1-1. 理解波形编辑器的功能和适用场景

- 波形编辑器用于直接处理单个音频文件
- 波形编辑器的操作是**破坏性**的，保存后更改将是永久的

---

- 适用场景：
 a. 需要永久更改的操作，如转换采样率或位深度.
 b. 应用某些特定效果，如`Help > 搜索` , "process"显示的效果器.

![](https://tingwu.aliyun.com/api/editor/get/v2/524379/0/f1f998b5c97247ebae9b492f0b61320e/304e18c7220f46e1b8c562263f4d1d52.jpg)

---

### 1-2. Remove(删除)特定音频片段

   - 按`←(delete)`移除所选部分
   - 保存文件以应用更改

![150|](https://i.imgur.com/GUAU6Ie.webp)

---

### 1-3. 建议**保留原始文件**
   - 点击 `File > Save As` , ~~`Ctrl + S`~~
   - 选择保存位置（如exercise files中的media文件夹）
   - 更改文件名（如添加`_edited`后缀）

---


##  2. 调整剪辑 Amplitude 振幅(20)

波形编辑器允许直观地调整音频振幅,可以使用浮动面板(HUD)来可视化调整整个剪辑或特定部分的音量。

---

使用浮动面板（HUD，Heads Up Display）调整整个音频片段的振幅：

---

### 调整整个音频的振幅

![150|](https://i.imgur.com/xiK4ccu.webp)


a. 拖动HUD中的控制旋钮来调整音量。并观察波形的变化和分贝值的实时显示。
c. 注意避免波形超过0分贝刻度，以防止音频失真。
e. 使用撤销功能（`undo amplify`）可以恢复之前的状态。
   
---

### 调整音频片段的特定词汇或句

![150|](https://i.imgur.com/FxWEJ6J.webp)

   a. 在波形编辑器中选择需要调整的特定区域(词组)。
   b. 使用HUD调整所选区域的音量。





---

## 21 使用标准化(Normalization)设置剪辑Level


#### 1. 使用标准化(normalization)调整音频文件的整体增益

![150|](https://i.imgur.com/sUpocSa.webp)

a) 使用 Favorites (收藏夹) 菜单中的标准化选项：
   - 选择 `Favorites > Normalize to -0.1 dB` (或 `Normalize to -3 dB`)
   - 这将提高音频文件的整体音量

---


b) 使用 Effects(效果)菜单中的标准化选项：
   - 导航至 `Effects > Amplitude and Compression > Normalize(process)`
   - 选择百分比或分贝作为单位
   - 设置所需的音量级别（如 -10 dB）
   - 点击"应用"


![150|](https://i.imgur.com/Kaefb5J.webp)

---

#### 2. 使用 Match Loudness 面板批量处理多个文件

![150|](https://i.imgur.com/fTiCHaM.webp)


---

a)  `Window > Match Loudness` 打开"匹配响度"面板. 

---

b) 导入文件：`Exercise Files / 05_Waveform / Media` 到 `Match Loudness` Panel
   - 从媒体文件夹中选择需要处理的文件
   - 将选中的文件拖拽到"匹配响度"面板中
---

c) 分析文件：
   - 点击 `Compute loudness` 按钮分析每个文件的响度信息

---

d) 设置匹配响度参数：
   - 点击`Match Loudness Settings` (匹配响度设置 )按钮
   - 选择所需的标准（如峰值振幅）
   - 设置目标音量级别（如 -6 分贝）

---

e) 执行响度匹配：
   - 选择直接运行或导出新文件
   - 如选择导出，设置新文件的命名`_Normalized`规则和保存位置
   - 点击`Run`(运行) 开始处理

![150|](https://i.imgur.com/SVtFfiw.webp)



---

## 22 Editing with the clipboard (使用剪贴板编辑)

Audition提供多达5个剪贴板, 允许复制到新文件,以及使用"混合粘贴"将复制的音频与现有音频结合。

---

实践目标：
1. 创建一个音乐曲目的缩短版本
2. 使用多个剪贴板功能进行音频编辑
3. 使用混合粘贴功能实现平滑过渡

---


#### 1. 创建音乐曲目的缩短版本
   a. 打开`.../05_Waveform/05_04_Clipboard.wav`
   b. 确保启用 Snapping(吸附功能)
   ![150|](https://i.imgur.com/lvGfdhe.webp)

   c. 选择`Marker 01`区域, 使用 `Edit > Copy to New` 创建`新文件`.
   d. 选择`Marker 02`区域, 使用 `Edit > Copy` , `Past` 到`新文件`
   e. 选择`Marker 03`区域, 使用 `Edit > Copy`  , `Past` 到`新文件`
   f. 在`新文件`中粘贴所有复制的部分

---

#### 2. 使用多个剪贴板功能 Set Current Clipboard

a. 创建一个空音频.
![150|](https://i.imgur.com/PHc94gS.webp)

---

   a. 通过 `Edit > Set Current Clipboard` 选择不同的剪贴板（最多5个）
   b. 使用快捷键在剪贴板之间切换（Mac：Command+1到5，PC：Control+1到5）
   c. 将不同的音频段复制到不同的剪贴板中

![150|](https://i.imgur.com/TkdnW7C.webp)


---
快捷键操作:

- 选择 `Mark01` 区域, `Ctrl + 1` , `Ctrl + C`, 在新文件 `Ctrl + V`
- 选择 `Mark02` 区域, `Ctrl + 2` , `Ctrl + C`, 在新文件 `Ctrl + V`
- 选择 `Mark03 区域, `Ctrl + 3` , `Ctrl + C`, 在新文件 `Ctrl + V`
---

#### 3. Mix Paste 使用混合粘贴功能实现平滑过渡
![150|](https://i.imgur.com/t43rkru.webp)

---

   a. 在原始音频文件中选择稍微超出标记的区域
   b. 将选区复制到相应的剪贴板
   c. 在新文件中，使用 `Edit > Mix Paste` 功能
   d. 在混合粘贴对话框中：
  - 选择"覆盖"（Overwrite）模式
  - 选择正确的剪贴板
  - 设置交叉淡入淡出时间（如2秒）
   e. 对其他部分重复此过程

---

在 MixPaste > OverWrite 时报错: `A severe error was encountered (Code 0000000B). `

原因未明. , 解决方案: 重新调整 Fade Cross, 重新 Copy 解决



