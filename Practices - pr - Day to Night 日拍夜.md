
![|200](https:////i1.hdslb.com/bfs/archive/e765faed3f9b2f61589f50b0974fae01b8f8bcc0.jpg@100w_100h_1c.png)
(Source:  [bilibili.com: 省下几个亿！电影人们是如何在白天拍出夜晚效果的？](https://www.bilibili.com/video/BV15M41157ag?t=139))


![|200](https://i.ytimg.com/vi/jcjC1KCHb5g/hqdefault.jpg)
(Source:  [youtube.com: Easy Way to turn Day to Night in Video - Adobe Premiere Pro](https://youtu.be/jcjC1KCHb5g?t=90))

---


![|200](https://i.ytimg.com/vi/z3ahGmRovnE/hqdefault.jpg)
(Source:  [youtube.com: How to Make a DAY Shot Look NIGHT in PREMIERE PRO](https://youtu.be/z3ahGmRovnE?t=1))
## 分析结果与实战目标：
视频的主要实践目标是将白天拍摄的视频通过调色技术转换成夜晚拍摄的效果。以下是详细的目标和对应步骤分解：

---

###  1 .将白天镜头的光线暗化，呈现夜晚氛围。

- 在剪辑软件中打开 Lumetri Color 面板。`Window > Lumetri Color` .

- 调整亮度参数，使图像均匀暗化。`Lumetri Color > Basic Correction > Exposure` .
![bg fit left:50% vertical](https://i.imgur.com/Qy8CzMM.webp)


- DropShadows(降低阴影亮度) 光线昏暗时, 阴影不可能出现的细节.
- AddContrast (增加对比)也是删除阴影细节的方式
![bg fit left:50% vertical](https://i.imgur.com/L5rptYO.webp)


---

### 2.调整画面的色温到冷色调，使其呈现夜晚的蓝色月光效果。

- 在 Lumetri Color 面板中，使用色温滑块调整画面色调到冷蓝色。 `Lumetri Color > Basic Correction > Temperature` 
- 通过曲线工具进一步调整冷色调至偏深沉或“暗蓝”效果。`Lumetri Color > Curves > Hue vs Hue`  
![bg fit left:50% vertical](https://i.imgur.com/uTH7atx.webp)

---

### 实战目标 3: **加强画面对比，同时调整阴影和高光部分，突出深夜环境。**
#### 步骤：
1. 降低阴影亮度，使暗部更加深邃。
   - 操作路径：`Lumetri Color > Basic Correction > Shadows` [T5]({}).
2. 加强对比，为画面添加更多层次感。
   - 操作路径：`Lumetri Color > Curves > RGB Curves` [T9]({}).
3. 微调高光部分，避免画面亮点过强。
   - 操作路径：`Lumetri Color > Curves > Highlights` [T8]({}).

---

### 实战目标 4: **削弱画面的饱和度，使画面符合夜晚较暗、低彩度的视觉效果。**
#### 步骤：
1. 降低画面整体饱和度。
   - 操作路径：`Lumetri Color > Basic Correction > Saturation` [T9]({}).
2. 如果需要局部削弱颜色，可使用“色轮和匹配工具”手动调整。
   - 操作路径：`Lumetri Color > Color Wheels & Match` [T13]({}).

---

### 实战目标 5: **通过额外特效或校正，提升画面真实性。**
#### 步骤：
1. 检查视频场景中是否应有夜晚特有的元素（如车灯等），如果缺失可通过视觉效果工具添加动态光影。
   - 示例：为汽车添加车灯效果。
   - 备注：这是一个复杂的步骤，通常需要借助 VFX 技术完成 [T10]({}).
2. 将拍摄的 Log 视频转换为标准 Rec 709 配置，获得良好的色彩起点。
   - 操作路径：`Effects > Input LUT > Rec709` [T12]({}).
3. 在多段镜头之间应用统一的 LUT 进行批量调整，并通过少量参数微调使所有镜头保持一致。
   - 操作路径：`Effects > Apply LUT` [T14]({}).

---

### 结语：
以上过程中涉及的步骤通过降低技术复杂度，逐步完成夜间调色任务，能有效减少学生面对技术挑战的焦虑感。学生对每个操作路径的熟悉能帮助他们完成任务，并在实战中获得成就感。