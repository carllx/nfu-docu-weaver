


## Enhancing Colors in Videos

实践目标：
1. 增强风景视频的颜色
2. 削弱空间感, 增强装饰性
3. 提高视频的对比度和色彩鲜艳度

![150|](https://i.imgur.com/tEGIVjR.webp)

---


### 1. 准备...
   a. 将视频素材导入项目`.../7 - enhancing colors`
   b. 切换到`Color`(颜色)工作区
   c. 复制视频片段 (在顶层视频上进行编辑，保留底层视频作为参考)
   
---

### 2.   `Lumetri Color`面板

a. 调整 `Basic Correction(基本校正)`

  - 降低`Exposure(曝光度)`
  - 增加`Contrast(对比度)`
  - 降低`Highlights(高光)`
  - 调暗`Shadows(阴影)`
  - 降低`Whites(白色调)`
  - 调暗`Blacks(黑色调)`
---

b. 调整`Creative (创意颜色区)`
  - 增加鲜艳度（Vibrance）
  - 增加饱和度（Saturation）
  - 增加锐度（Sharpness）

---


c. 使用 Curve (曲线)调整

![150|](https://i.imgur.com/CNiZIMS.webp)

---


使用HSL Secondary工具(二级颜色校正 )


![150|](https://i.imgur.com/WvLfPUT.webp)


---
 d. 选择颜色区域
 - 使用吸管工具选择颜色, 隔离所选颜色
  - 调整所选颜色的色相和亮度

e. 微调基本校正
  - 调整色温（添加蓝色）
  - 调整色调（添加绿色）

---

## Skin Retouching

实践目标：
1. 修饰皮肤，去除瑕疵，使皮肤整体平滑
2. 去除特定的痘痘
---



   a. (`Assembly Mode`) 导入(拖入)素材文件夹, `/Resource Files/22. Colors and Corrections/2 - skin retouching/ `

![150|](https://i.imgur.com/Viyvc2v.webp)

---

b. 切换到颜色工作区： `workspace > color`

---

e. 在Lumetri Color面板中，使用HSL Secondary工具：
- 使用吸管工具选择皮肤色调
- 调整 `Hue`、`Saturation` 和 `Luminance` 滑块以精确选择皮肤区域
- 使用 `Blur` 滑块柔化边缘

![150|](https://i.imgur.com/5WuECME.webp)

---



- 减少Sharpness以平滑皮肤
- 调整Saturation和Contrast以优化效果

---



2. 去除特定的痘痘
   a. 创建新的调整层，命名为"spot"
   b. 应用`Gaussian Blur`效果
   c. 使用圆形蒙版工具围绕痘痘
   d. 跟踪痘痘的移动
   e. 增加模糊度和蒙版羽化以混合效果

![150|](https://i.imgur.com/eJue462.webp)

---


实践目标：在Premiere Pro中实现牙齿美白效果

实现目标的步骤：

1. 准备工作：
   - 从初始选择中选择一个视频片段
   - 右键点击片段，选择`New Sequence from Clip`
   - 将新序列命名为"teeth"


---

2. 设置工作空间：
   - 选择`Color`工作空间 `workspace > color`
   - 打开Lumetri Color面板

---


3. 选择牙齿区域：
   - 找到能清晰看到牙齿的帧
   - 使用吸管工具选择牙齿的平均颜色
   - 勾选`Color Gray`选项
   - 使用滑块调整以隔离牙齿区域
   - 使用加号和减号工具微调选区
   - 增加模糊度和噪点以使过渡更自然

---
![150|](https://i.imgur.com/BjmUKNH.webp)

---


4. 调整颜色：
   - 取消勾选`Color Gray`
   - 降低饱和度以减少黄色
   - 使用`Temperature`滑块引入蓝色以抵消黄色
   - 增加`Correction`滑块使牙齿更亮

---



5. 创建蒙版：
   - 在效果控制面板中，为当前帧添加关键帧
   - 使用钢笔工具在Lumetri Color效果上绘制蒙版，围绕牙齿区域
   - 增加蒙版羽化值（约10-15）

---

6. 跟踪蒙版(GPU不好的话大关键帧)：
   - 向前跟踪
   - 返回起始关键帧
   - 向后跟踪

---

![150|](https://i.imgur.com/aGvK31N.webp)

![150|](https://i.imgur.com/NvTmv4o.webp)

---


7. 微调效果：
   - 比较前后效果
   - 根据需要调整`Amount`滑块
   - 确保蒙版和跟踪准确，避免效果影响到嘴唇和皮肤

---

注意事项：
- 选择牙齿颜色时，避免选择最亮或最暗的部分，而是选择平均颜色
- 主要关注前排牙齿，不必过于关注下排牙齿
- 如果出现色块，可以返回调整选区
- 保持效果自然，避免过度美白

---



[[Source - Complete Adobe Premiere Pro Megacourse Beginner to Expert (20)]]
(Source:  [aliyun.com: 20. Advanced Techniques - 19. Introduction to Greenscreen](https://tingwu.aliyun.com/doc/transcripts/r28pn74z8avwn5mz))


---

![150|](https://i.imgur.com/hJeVLrd.webp)

---

![150|](https://i.imgur.com/Vz4Zfj1.webp)

---
Track Matte key (轨道遮罩键)
(Source:  [adobe.com: Learn how to add a Track Matte key](https://helpx.adobe.com/ph_fil/premiere-pro/how-to/add-track-matte-key.html))
![150|](https://i.imgur.com/OlewrXX.webp)



