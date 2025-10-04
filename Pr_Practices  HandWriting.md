
![|200](https://i.ytimg.com/vi/RPZnLszfJEM/hqdefault.jpg)
(Source:  [youtube.com: Handwriting WRITE ON Effect Tutorial In Premiere Pro](https://youtu.be/RPZnLszfJEM?t=2))

[[source_video_HandwritingEffectInPr]]


---




## 手写显现文字效果
### 1.创建基础文字层
TLDR: 添加文本图层并在Essential Graphics面板中调整，将持续时间设为5秒。
- 使用Type Tool 工具添加文本
- 在Essential Graphics中调整文本属性
- 延长文本图层至5秒


---

### 2.创建透明视频层

- 在 Project Panel(项目面板) 中新建 `Transparent Video layer`(透明视频层)
- 将透明层放置在文字层上方
- 确保透明层时长与文字层一致
![bg fit left:50% vertical](https://i.imgur.com/mvIsgUP.webp)

---

---

## 特效参数调整
### 3. Write-on效果

- 在 Effects 中搜索 Write On
- 将效果拖放到透明视频层


![bg fit left:50% vertical](https://i.imgur.com/H9jIdFF.webp)



---


- Write-on 在 Effect Controls 中参考设置：
  * 将颜色改为红色
  * 调整笔刷大小略大于文字
  * 设置描边长度为5秒
  * 将笔刷间距设为0.001



---

### 4. 创建手写动画路径

- 选择 Write On
- 点击 Brush Position 旁的秒表图标
- 在预览窗口拖动红点设置起始位置
- 使用右方向键前进一帧
- 继续拖动红点描绘整个单词

![bg fit left:50% vertical](https://i.imgur.com/g4CeR2a.webp)


---

## 5 设置遮罩效果

- Effect > Track Matte Key 效果添加到文本层
- 选择透明视频层作为遮罩
- 完成手写特效制作



> Track Matte Key(轨道遮罩键)



![bg fit left:50% vertical](https://i.imgur.com/jLQFiNn.webp)
