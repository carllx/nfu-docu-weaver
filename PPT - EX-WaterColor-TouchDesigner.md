# EX-Watercolor Effect(TouchDesigner)

[[Source-ex-WaterColor(TouchDesigner)]](Source: [youtube.com:  (7) TOUCHDESIGNER TUTORIAL - TURN ANY IMAGE INTO WATERCOLOR PAINTING - YouTube](https://youtu.be/9ynL-JckDkY?t=809)[youtube playlist](https://www.youtube.com/watch?v=XpvKQmQt6Tg&list=PLSovrPWjLMt7TBkWl2cNhONrnYF9qkM2v))

[aliyun.com: 06、第5节 晕染交互效果原理-效果与图片素材和摄像头的应用 - 通义听悟](https://tingwu.aliyun.com/doc/transcripts/gpjbqkgd4p3gnk2a)
(Source: [baidu.com: 百度网盘 - 视频播放](https://pan.baidu.com/pfile/video?path=%2F%E6%88%91%E7%9A%84%E6%95%99%E7%A8%8B%2F%E5%8D%97%E6%96%B9%E5%AD%A6%E9%99%A2%E8%AF%BE%E7%A8%8B%2F%E4%BA%A4%E4%BA%92%E5%BD%B1%E5%83%8F%E8%AE%BE%E8%AE%A1%2F1%E3%80%81%E3%80%90%E5%BC%95%E7%8E%89%E8%AF%BE%E5%A0%82%E3%80%91Touchdesigner%E7%B3%BB%E7%BB%9F%E8%AF%BE%E7%A8%8B%C2%A5529%2F06%E3%80%81%E7%AC%AC5%E8%8A%82%20%E6%99%95%E6%9F%93%E4%BA%A4%E4%BA%92%E6%95%88%E6%9E%9C%E5%8E%9F%E7%90%86-%E6%95%88%E6%9E%9C%E4%B8%8E%E5%9B%BE%E7%89%87%E7%B4%A0%E6%9D%90%E5%92%8C%E6%91%84%E5%83%8F%E5%A4%B4%E7%9A%84%E5%BA%94%E7%94%A8.mp4&theme=light&view_from=personal_file&from=home)) 

---

> 本课程将展示如何将任意图像转换为水彩画效果，包括高水稀释版本、细节保留版本以及带结构感的类油画效果。


![bg fit left:50% vertical](https://i.ytimg.com/vi/9ynL-JckDkY/hqdefault.jpg)


---
## 1. 准备项目素材

导入目标图像（风景或人像均可）

---

> [!tip]- 视频选择要点
> - 选择有明显运动变化的视频（如舞蹈、交通流）
> - 避免纯色背景或静态场景
> - 测试素材：[Pexels](https://www.pexels.com/) [Pixabay](https://pixabay.com/music/) 提供免费动态视频


![bg fit left:50% vertical](https://i.imgur.com/eQvlDIC.webp)

(Source: [freesound.org: Freesound](https://freesound.org/))  
![bg fit left:50% vertical](https://i.imgur.com/CgPO73s.webp)

(Source: [pixabay.com: Royalty Free Media Download - Pixabay](https://pixabay.com/music/))
![bg fit left:50% vertical](https://www.pexels.com/assets/static/images/meta/pexels-stock-photos.jpg)
(Source: [pexels.com: Free Stock Photos, Royalty Free Stock Images & Copyright Free Pictures · Pexels](https://www.pexels.com/))


---

## 1.2 工程规范管理

注意: 创作, 团队任务时, 大作业时(扣分项)
创建项目文件夹, 
![bg fit left:50% vertical](https://i.imgur.com/rpzw95v.webp)


---


工程目录架构
![bg fit left:50% vertical](https://i.imgur.com/3rg4xzK.webp)


---


按照规范放入素材

![bg fit left:50% vertical](https://i.imgur.com/pJ5d9tG.webp)

---

`FitTOP` 设置画布参数

- `Output Resolution`: Custom Resolution
- `Resolution`:
	- 720x1280 (社交媒体, 朋友圈, 小红书)
	- 1280x720+ (展览投影)

![bg fit left:50% vertical](https://i.imgur.com/wU0yQwe.webp)
![bg fit left:50% vertical](https://i.imgur.com/uQghO3X.webp)

---

 [Tips]  OP 中 Display 按钮
可将图像连接到背景以便观察效果变化
![bg fit left:50% vertical](https://i.imgur.com/Tvp6yZT.webp)


---


## 2. 基础纹理处理

### 添加 Noise Structure(噪点结构)

1. 添加 Comp TOP
2. 插入Noise TOP
3. 修改参数类型更改为Random GPU
4. 将噪点连接到Comp以生成基础纹理

![bg fit left:50% vertical](https://i.imgur.com/rTohoMv.webp)

---


### [[Noise(TOP_CHOP)]] 

![bg fit left:50% vertical](https://i.imgur.com/ABzjtIU.webp)

---

## 3. 添加Displace(位移效果)

### Displace 的第二个输入端(通道)

`Horizontal Source` 指定 Red 通道控制
`Vertical Source` 指定 Blue 通道控制

![bg fit left:50% vertical](https://i.imgur.com/aHbX1A0.webp)


---

#### Snippets 案例1 - 默认通道Red Blue

打开 `Operator Snippets` > Displace TOP 案例

- 调节 Red & Blue 观察
- 添加 `Blur` 理解, 连接扭曲与未扭曲像素

![bg fit left:50% vertical](https://i.imgur.com/4sNs3CZ.webp)


---

Model Coordinate (3D,xyz)
Texture Coordinate（2D, uv纹理坐标）
UV == xy 
![bg fit left:50% vertical](https://i.imgur.com/1qN32md.webp)


---

#### Snippets 案例2  - Displace -  Noise驱动解释

当输入Noise, 单色图时, 所有通道相同值,  
通过通道值(**R**,~~G~~,**B**,~~A~~ )控制源图像采样位置实现变形。 
- 黑: (**0**, ~~0~~ , **0**, ~~1~~) 驱动图像 **↙︎**(左下) 偏移；
- 灰: (**0.5,** ~~0.5~~, **0.5**, ~~1~~) 是位移基准，无变形；
- 白: (**1**, ~~1~~, **1**, ~~1~~)  驱动**↗︎**(右上)偏移；

![bg fit left:50% vertical](https://i.imgur.com/CpqPDeI.webp)


---

### 水纹动态运动(Noise + Displace )

1. Noise 连接 DisplaceTOP 
2. 确保输出分辨率与素材一致, 但不需要INPUT0(合成输入)的参与:
	- RGB = `Noise` (~~Inout+Noise~~)


![bg fit left:50% vertical](https://i.imgur.com/KuKpGPI.webp)

---

3. 缓慢的水纹动态运动
   - Noise Translate Z = `absTime.seconds * 0.01` 

![bg fit left:50% vertical](https://i.imgur.com/K7VcxT9.webp)

---

### 构建 Feedback 循环系统

#### 打印机: FeedbackTOP

#### 原材料: CompositeTOP(Null)

#### 结果: CompositeTOP

设置 Operation(操作模式)为 `Maximum`, 保留每帧最亮像素，形成水彩扩散效果

#### 处理加工: DisplaceTOP + NoiseTOP

`Displace TOP`的Displace Weight (位移权重) 为 0.001 


![bg fit left:50% vertical](https://i.imgur.com/g0TZ8Zl.webp)

![bg fit left:50% vertical](https://i.imgur.com/fCsjBDj.webp)

---

#### Composite - **Maximum** vs Minimum

数值场景：在一组数字中找出最大数。

> [!info]
> 例如，对于数字 3 和 5，“Maximum” 操作会选出 5。


![bg fit left:50% vertical](https://i.imgur.com/0TY9qLS.webp)

---

**Maximum**  图片处理

颜色信息处理：处理图片时，“Maximum” 操作读取选择颜色更亮或数值更大的信息显示。
例如，两张图片，一处亮色、一处暗色，“Maximum” 操作保留亮色，为图片增添特殊效果。
![bg fit left:50% vertical](https://i.imgur.com/1JfcFc6.webp)

---

### 像素溶解运动(Displace Weight )

Displace Weight: 吹动像素的力, 随时间推进自然扩散的水彩特征

**数值小（如 0.0001）**：
- 像微风轻轻吹过水面，
- 像素逐渐沿着波纹游走。

**数值大（如 0.001）**：
- 瞬间显示波纹变形结果。


![bg fit left:50% vertical](https://i.imgur.com/t8tE5Vk.webp)


---


### 数据映射1 -  Keyboard CHOP 绑定 Pulse

- 添加 Keyboard CHOP连接到Key 1
- 设置重置反馈循环功能便于重新生成效果

![bg fit left:50% vertical](https://i.imgur.com/C4XOGwG.webp)



---


### 数据映射2 -  SliderCOMP + MathCHOP(Range) 绑定DisplaceWeight

![bg fit left:50% vertical](https://i.imgur.com/YWI9opz.webp)



---

## 4. 使用Noise 嵌套结构实现水的复合纹理

- Input 0 : Composite Input（1st合成输入, 传递贴图尺寸）
- **Input 1 : Noise Coordinate Map** （2nd噪点坐标图Noise 每个像素的落脚点由地图（Input 1）决定）


![bg fit left:45% vertical](https://i.imgur.com/oOyvCgF.webp)
![bg fit left:50% vertical](https://i.imgur.com/va1d4qj.webp)

---

### 创建复合噪点


两个Noise 第二个Noise TOP
1. RGB 过滤 不需要INPUT0(合成输入)的参与
2. 可以修改 Seed 值以创建差异
3. ~~可以增加两个噪点的 Harmonics 值至10以增加细节~~

![bg fit left:50% vertical](https://i.imgur.com/KuKpGPI.webp)

---

### 使用 `ReorderTOP`

为`DisplaceTOP`重新排列 Red & Blue
   - 第一个Noise作为 Red 通道（水平位移）
   - 第二个Noise作为Blue 通道（垂直位移）
   - Green绿色通道设为零


![bg fit left:50% vertical](https://i.imgur.com/Kx43yvJ.webp)

![bg fit left:50% vertical](https://i.imgur.com/rO39CtY.webp)

---
### 观察 

```
如果 Reorder OutputBlue 分别为 0 和 1，会产生什么效果？  

Tip：改变了 Displace 的 Vertical Source
```



![bg fit left:50% vertical](https://i.imgur.com/ubKOXsj.webp)

---

### 答案: 

Displace 的 Vertical Source = One 时，所有像素瞬间向下沉。  

Displace 的 Vertical Source = Zero 时，所有像素瞬间向上升。


![bg fit left:50% vertical](https://i.imgur.com/inmfXQd.webp)

---
### 解释 Harmonics

可以从乐器(声音)和波浪(影像)的角度解释谐波。

---

#### 参考
相关: [[Noise(TOP_CHOP)]]



---

### **Harmonics (谐波数量)**  

弹吉他时，除了拨动的弦发出的基本声音（基频）外，还会产生许多更高频率的声音（高频分量）。  


#### 图示: A2 (110Hz) 基频
![bg fit left:50% vertical](https://i.imgur.com/AFzzRBZ.webp)  

---


#### 图示: A2 (110Hz)钢琴 + 其他高频  
![bg fit left:50% vertical](https://i.imgur.com/vMeqTyf.webp)  

---

#### 图示: A2 (110Hz)吉他 + 其他高频  
![bg fit left:50% vertical](https://i.imgur.com/efcYg0w.webp)  

---


### Video - Harmonics案例

![bg fit left:50% vertical](https://i.ytimg.com/vi/FzeZbJceKZE/hqdefault.jpg)
*(Source: [youtube.com: Frequencies & Sound explained #4 : Harmonics & Harmonic distortion - YouTube](https://youtu.be/FzeZbJceKZE?t=117))*  

![bg fit left:50% vertical](https://i.ytimg.com/vi/GLnrysQ1Erg/hqdefault.jpg)  
*(Source: [youtube.com: Why Do Instruments Sound Different? (w/ Visual Demonstrations!) - YouTube](https://youtu.be/GLnrysQ1Erg?t=161))*  

![bg fit left:50% vertical](https://i.ytimg.com/vi/znbfY-tXROk/hqdefault.jpg)  
*(Source: [youtube.com: What are harmonics? - YouTube](https://youtu.be/znbfY-tXROk?t=13))*  

---

### 谐波数量

高频分量的数量。  
谐波数量越大，声音越“粗糙”，波浪越不平滑（前提是“粗糙度”不为零）。  

![bg fit left:50% vertical](https://i.imgur.com/nlBA8g5.webp)


![bg fit left:50% vertical](https://i.imgur.com/efcYg0w.webp)  




---

### **Harmonic Spread (谐波扩展)**  


决定高频分量的频率增加量。

例如，谐波扩展越高，墨水边缘越不规则。


1. Harmonic Spread == 10;
2. Harmonic Spread == 0;

![bg fit left:50% vertical](https://i.imgur.com/8vxUT4o.webp)  

![bg fit left:50% vertical](https://i.imgur.com/FF60spK.webp)  

---

### **Harmonic Gain (谐波增益)**  

- 定义：在基本频率上叠加的谐波数量。
- 可理解为谐波的 “音量” 大小。如图，能看到 noise ("墨水") 会因抖动而独立分裂出来。

![bg fit left:50% vertical](https://i.imgur.com/hJobFi4.webp)  



---

### Harmonics实践


![bg fit left:50% vertical](https://i.imgur.com/BYS0eau.webp)


---



## 6. 可视交互参数调节


核心逻辑是 **线性数学转换** + **参数驱动**，
Math CHOP: “数学计算器”➕➖✖️➗.
通过 `Math` 节点实现 **参数范围映射**，将 Slider 的 `0~1` 输入转换为目标参数所需区间，最终驱动对应 Operator（如 `level1`、`displace1`、`NoiseTOP`）的属性，实现效果控制。

![](https://i.imgur.com/O59TElH.webp)


---

### 1. 水纹大小（`NoiseTOP.Periods`）

- **逻辑核心**：线性放大参数范围。
- **处理流程**：
    1. Slider 输入 `0~1`，直接映射到 `0~2`。
    2. `math2` 执行 `输入值 × 2`，驱动 `NoiseTOP` 的 `periodes`（周期）参数，控制水纹图案的尺寸大小。
![bg fit left:50% vertical](https://i.imgur.com/bg30skp.webp)


---

### 2. 水纹变形速度（`NoiseTOP.tz`）

- **逻辑核心**：结合时间与参数驱动动态变形。
- **处理流程**：
    1. Slider 输入 `0~1`，映射到 `0.00005~0.01`，`math3` 生成速度系数。
    2. 通过表达式 `absTime.seconds × math3 输出值`，将时间（秒）与速度系数相乘，驱动 `NoiseTOP` 的 `tz`（Z 轴位移），实现水纹随时间变形的速度控制。
![bg fit left:50% vertical](https://i.imgur.com/xSmxhFd.webp)

---


### 3. 水纹溶解力（`displaceweight` 清晰度）

- **逻辑核心**：精细控制位移权重参数。
- **处理流程**：
    1. Slider 输入 `0~1`，映射到 `0.0005~0.005`。
    2. `math1` 计算：`0.0005 + (输入值 × 0.0045)`，放大微小参数变化，驱动 `displace1` 的 `displaceweightx`，调整水纹溶解清晰度。
![bg fit left:50% vertical](https://i.imgur.com/SPhba5A.webp)

---


### 4. 色彩混合（`op('level1').par.opacity`）

- **逻辑核心**：通过数学映射调整透明度参数范围。
- **处理流程**：
    1. Slider 输入范围 `0~1`，需映射到 `0.96~1`。
    2. `math4` 执行线性转换：`0.96 + (输入值 × 0.04)`，将原始范围压缩到目标区间，最终驱动 `level1` 的 `opacity` 参数，控制背景融合与色彩纯度。

![bg fit left:50% vertical](https://i.imgur.com/c8n9qMv.webp)



---

## 7. `Collapse Selected` 封装 Component 

`Collapse Selected`  将逻辑上相关的Operator (操作符)组合并封装成一个单独的 **Container COMP (Component Operator)** , 使 Network(网络) 更清晰、更易于管理
![bg fit left:50% vertical](https://i.imgur.com/GIkjJVY.webp)



---

**右键菜单:** 在选定的操作符上单击鼠标右键，然后在弹出的菜单中选择 **"Collapse Selected"**。

![bg fit left:50% vertical](https://i.imgur.com/7THEpP1.webp)


---

当您使用 "Collapse Selected" 功能将多个选定的操作符组合成一个 Container COMP 时，TouchDesigner 会自动在新的 Container COMP 内部创建相应的 **In** 和 **Out** 操作符。

- InTOP 操作符 (Input Operator)
- OutTOP 操作符 (Output Operator)

![bg fit left:50% vertical](https://i.imgur.com/EkINNFT.webp)

---
### **不同类型的 In 操作符:** 

TouchDesigner 提供了不同类型的 In 操作符，对应不同的数据类型：

- **DAT In:** 接收表格或文本数据。
- **CHOP In:** 接收通道数据（例如音频、运动数据）。
- **SOP In:** 接收几何体数据（3D 模型）。
- **TOP In:** 接收图像或视频数据。
- **MAT In:** 接收材质数据。
- **COMP In:** 接收其他组件的数据。
![bg fit left:50% vertical](https://i.imgur.com/hV5f24C.webp)

---
### 不同类型的 Out 操作符

同样，TouchDesigner 也提供了与 In 操作符对应的不同类型的 Out 操作符：

- **DAT Out:** 输出表格或文本数据。
- **CHOP Out:** 输出通道数据。
- **SOP Out:** 输出几何体数据。
- **TOP Out:** 输出图像或视频数据。
- **MAT Out:** 输出材质数据。
- **COMP Out:** 输出组件的数据。

![bg fit left:50% vertical](https://i.imgur.com/6mvoavb.webp)




---
输出分享你的组件

![bg fit left:50% vertical](https://i.imgur.com/wLL6w0C.webp)



---
## 实验2 - 视频应用 Watercolor Effect


![bg fit left:50% vertical](https://i.imgur.com/tuLB5Dn.webp)


---

- [[NDI 连接方式解析]]
- VideoDeviceInTop
![bg fit left:50% vertical](https://i.imgur.com/XJzbiIz.webp)



---





添加自定义处理 

LevelTOP + BlurTOP(可选)

![bg fit left:50% vertical](https://i.imgur.com/sVwleCE.webp)




---


## 8. `MovieFileOut`视频输出

![bg fit left:50% vertical](https://i.imgur.com/5brXLk5.webp)


---

```bash
ffmpeg -i /Users/yamlam/Downloads/EX-TouchDesigner/Ex-DisplaceTOP_WaterColor/Render/TDMovieOut.0.mov -c:v libx264 -crf 23 -c:a aac output.mp4
```


---


[[Nature as Brush - 借自然之力]]


END 




---


## ~~5. 偏好控制(拓展版本)~~

---


### 混合增强（拓展版本）

1. 插入第二个Displace TOP
![bg fit left:50% vertical](https://i.imgur.com/wuWZw94.webp)
![bg fit left:50% vertical](https://i.imgur.com/Cn02CIM.webp)

---

1. 添加Composite TOP设置为Soft Light模式
2. 使用原始图像作为第二输入
3. 后接 Slope TOP：
   - 强度设为5
   - 采样步长设为5

---


### ~~选择性模糊（拓展版本）~~
1. 在反馈循环中添加 Luma Blur
2. 使用噪点作为模糊蒙版：
   - 从Displace后创建Noise TOP
   - 调整Black Filter Width控制模糊区域
   - 设置Exponent为0获得更清晰的边缘

---


### ~~厚度结构感增强（拓展版本油画效果）~~

1. 插入Emboss TOP
2. 设置强度为12
3. 调整Midpoint参数控制结构感
4. 修改Direction参数调整光照方向

---

### 效果版本与输出

### 创建多种风格
- **高水稀释版本**：增加Luma Blur强度
- **细节保留版本**：减少模糊，保持Displace效果
- **结构感版本**：添加Emboss效果



---
