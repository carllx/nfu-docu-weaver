
# Audio Histogram  


Tshirt JOY DIVSION  
Joy Division 是英国后朋克乐队，活跃于 1976 - 1980
![bg fit left:50% vertical](https://i.imgur.com/mGx7sMh.webp)


---

## Audio Histogram

音频信号数据的直方图。
一种用**矩形**展示**数据分布**的**统计图表**, 有助理解音频数据的**特征** 
如：
- 不同**频率段**的音频**能量分布**
- 音频**信号强度**在不同**区间**的分布

![bg fit left:50% vertical](https://i.imgur.com/QmV1iAZ.webp)



---


![|200](https://i.ytimg.com/vi/ua4zKWJg22g/hqdefault.jpg)
(Source: [youtube.com: Explanation on why/ (50) 2022 Audio histogram - TouchDesigner Tutorial - YouTube](https://youtu.be/ua4zKWJg22g?t=1078))


---

任何音乐构建音频直方图

- 教程采用“先混乱构建，后结构化讲解”的方式，便于理解
## 参考资料
- [2022 Audio histogram - TouchDesigner Tutorial - YouTube](https://www.youtube.com/watch?v=ua4zKWJg22g)
![bg fit left:50% vertical](https://i.imgur.com/n3RVjL9.webp)
![bg fit left:50% vertical](https://i.imgur.com/XipnIrg.webp)

---

## 1. SOPtoCHOP(原理/占位)



---

### LINE 创建基础线条

1. 新建 `LineSOP`
2. 将 `PointB` 延伸到 Z 轴 `-5`.
3. 设置Pts(点数) ， (如 99+ 点提升细节)

_next: 绑定到constant's Rows_

![bg fit left:50% vertical](https://i.imgur.com/Jmvc9a5.webp)


---

### COPY 复制与分布

- 使用 `CopySOP` 复制 LINE
- NumberOfCopy: （如复制 `50` 条）
- Tx  (如沿 X 轴偏移 `0.7`)使线条均匀分布

_next: 绑定到 constant_

```json
{
	NumberOfCopy: _op('constant1')['Col']_
	Tx: _op('constant1')['Interval']_
}
```

![bg fit left:50% vertical](https://i.imgur.com/LKrNl5A.webp)
![bg fit left:50% vertical](https://i.imgur.com/gTavLSY.webp)




---

### Project'sParameters 项目基础参数

 Layout 预留一个Parameters 窗口控制参数 
![bg fit left:50% vertical](https://i.imgur.com/5R2cN3B.webp)


---


#### CustomizerOpParameters(自定义参数面板)

(方便参数管理)
![bg fit left:50% vertical](https://i.imgur.com/ohx4SyE.webp)



---

(类型, 最小值, 最大值)
**Rows**:  ('Int', 20, 2,999)
行数, Line的 pts的数量 
**Cols**:  ('Int',50, 1, 999)
行数, 这里指多少条LINE;  
**Interval**: ('Float', 0.1, 0.0, 1.0 )
每条线段之间的间隔; 

___仅提供计算结果___

**Width**:  
Lines 线段阵列的总宽度; (仅提供计算结果)
**Length**:  
所有的点的总数; (仅提供计算结果)



![bg fit left:50% vertical](https://i.imgur.com/pCOeHb5.webp)

![bg fit left:50% vertical](https://i.imgur.com/0iii1Jv.webp)



---

####  Constants 公共变量设置
(方便引用, 复用)

Cols(列数)
`parent.Project.par.Cols`

Rows(行数)
`parent.Project.par.Rows`

Interval(间隔)
`parent.Project.par.Interval`



![bg fit left:50% vertical](https://i.imgur.com/43iT9oY.webp)




---
Width(宽度, 供自动居中功能):
`parent.Project.par.Interval*parent.Project.par.Cols`
Length (点总数):  `parent.Project.par.Rows*parent.Project.par.Cols`



---


#### 1.1 Length 解释

计算机语言中用 `length`  (长度)来表示数组元素的个数. 
伪代码: 
```java

str[] tx = {'pt1', 'pt2', 'pt3', 'pt4', 'pt5'};
str length = tx.length; 

// 5
```


---

#### 1.2 Length 获取方式1

`parent.Project.par.Row * parent.Project.par.Col`



---

### Parameters 实现自动居中分布

TransformSOP. tx: 
`op('constant1')['Width']/2*-1`
![bg fit left:50% vertical](https://i.imgur.com/zfk12IV.webp)


---

## 2. CHOP(占位数据)






---
### SOPtoCHOP
- SOP转换为**通道数据**
- **Ty** 将用于存储Spectrum 频率数据

![bg fit left:50% vertical](https://i.imgur.com/Rr1ISHk.webp)



---


### Pattern 模拟 Ty 数据(占位)

Pattern 4个参数: 

1. **length**, 对应pts数量
2. **NumberOfCycles** 对用多少条线段
3. **Phase** , 驱动Pattern(模板) 
4. **ChannelName** , 通道命名
![bg fit left:50% vertical](https://i.imgur.com/HN4fTpa.webp)



---

 **Pattern CHOP** 生成占位数据
1. **length**, bind公共变量Length, 对应pts数量
2. **NumberOfCycles** bind公共变量Cols, 对用多少条线段
3. **Phase** , absTime.seconds, 驱动Pattern(模板) 
4. **ChannelName** , 通道命名, 用于替换`ReplaceCHOP`
![bg fit left:50% vertical](https://i.imgur.com/2swEQXi.webp)

---

#### **Replace CHOP** 替换 Ty 通道，实现动态效果
![bg fit left:50% vertical](https://i.imgur.com/DLW1DcS.webp)



---

#### 2. Parttern.NumberOfCircles
NumberOfCircles: `op('constant1')['Col'] * 2`
![bg fit left:50% vertical](https://i.imgur.com/Nehwzba.webp)
![bg fit left:50% vertical](https://i.imgur.com/ucriWds.webp)


---

## 3. 导入音频并分析

1. **Audio File In CHOP**：导入音频
2. **Audio Device Out CHOP**：监听音频
3. **Select CHOP**：选择单声道
4. **Audio Spectrum CHOP**：获取频谱

![bg fit left:50% vertical](https://i.imgur.com/eDt3ZSc.webp)


---

### Audio Spectrum CHOP

FFTs 算法
- _Fast Fourier Transforms (FFTs - 快速傅里叶变换 )_
- 实现将音频信号**从时域 转换到频域**以得到频谱 (Spectrum)
- 是 `Audio Spectrum CHOP` 用于计算频谱的核心算法





![bg fit left:50% vertical](https://i.imgur.com/91NfxWG.webp)

---

FFTs 傅里叶变换 的应用场景
	
- 声音降噪, 把各种类型声音分开, 过滤掉非音乐的环境音. 
- 医院的磁共振, 脑电波分析....
- 图片压缩, 去掉眼睛不可感知的像素, 照片变小.
- 天文分析,“拆开”星星发出的光谱，, 分析星星多远?多热? 
![bg fit left:50% vertical](https://i.imgur.com/Veqr4Aj.webp)



---

`Audio Spectrum CHOP` 的输出是多个通道，
- 每个通道代表一个特定的频率范围（称为“频段”或“bin”），
- 通道内的值表示该频段在当前音频片段中的能量或振幅大小。
- 告诉我们声音在不同频率（从低音到高音）上的强度分布。

![bg fit left:50% vertical](https://i.imgur.com/gPZiltu.webp)


---

### 决定怎么画？—— 用织锦比喻理解数据流

![bg fit left:50% vertical](https://i.imgur.com/qIuSuQg.webp)



---

![bg fit left:50% vertical](https://i.imgur.com/L1iyl5b.webp)


---

**(Row)  呈现 Spectrum?**

- `Rows` 参数(点的数量)决定每个完整Spectrum切片的分辨率
- `Cols` 参数(线的数量)决定 Time

**Cols 呈现 Spectrum?**
- `Rows` 参数(点的数量)决定 Time  
- `Cols` 参数(线的数量)决定 Spectrum切片的分辨率
![bg fit left:50% vertical](https://i.imgur.com/7S9IsJZ.webp)
![bg fit left:50% vertical](https://i.imgur.com/18ydmtl.webp)


---
### If, Rows 呈现 Spectrum

确保 Rows 与Spectrum 通道(pts点) 一致

![bg fit left:50% vertical](https://i.imgur.com/XEPCu8j.webp)

---

### If, Cols 呈现 Spectrum

确保 Cols 与Spectrum 通道(pts点) 一致

![bg fit left:50% vertical](https://i.imgur.com/TpHGhwA.webp)


---

### Resample CHOP 
#### 关闭 Time Slice 

关闭时间切片

![bg fit left:50% vertical](https://i.imgur.com/iqdvMcU.webp)




---


- Same Rate, New Interval（相同采样率，新间隔 ） 
- New Rate, Same Time Range（新采样率，相同时间范围 ）
- New Rate, Same Index Range（新采样率，相同索引范围 ）
- **New Rate, New Interval**（新采样率，新间隔 ）

![bg fit left:50% vertical](https://i.imgur.com/x1kwBQ6.webp)


---


  - 将 **Unit** 设置为 `Absolute`
  - 将 **Start** 设置为 `1`
  - 将 **End** 设置为 `op('constant1')['Row']`
  - (endUnit `0`)


_看看 END 设置为更低的值_

![bg fit left:50% vertical](https://i.imgur.com/SduqiFs.webp)




---
#### 采值的单位

Samples（采样）: 每秒 44100 个采样点
Frames（帧）：每秒播放 24~60  帧
Seconds（秒）: 1 秒
Fraction（分数）0.0~1.0 例如: Start 设为 0.2、End 设为 0.8 (20% 到 80%)


![bg fit left:50% vertical](https://i.imgur.com/yCtHUH9.webp)



---

### Shuffle CHOP (打乱)

把一大堆数据，按你想要的新顺序重新整理。

选择 `Swap Channels and Samples`

- Rows tranform to Cols, 
- 实现将单通道转换为多通道


---

### ShuffleCHOP's Method 解释(1/3)

#### 1. Swap Channels and Samples（交换通道和采样）

`[通道, 采样] ⟶ [采样, 通道]`  
常见于对向量矩阵的转置处理。

#### 2. Sequence Channels by Name（按名称排序通道） 
依据通道的名字（例如“红”、“绿”、“蓝”）给所有通道排序，调整它们在数据中的顺序。

#### 3. Sequence All Channels（顺序遍历所有通道）

不区分名称或者标签，直接按原始顺序操作全部通道。

#### 4. Sequence N Channels（按顺序遍历N个通道）

从所有通道中，取前N个通道参与后续操作。

---
### ShuffleCHOP's Method 解释(2/3)
#### 5. Sequence Every Nth Channel（每隔N个通道遍历一次）

每隔N个通道取一个（即跳采样型遍历），  
**例子：**  
通道总数=8，N=2 ⇒ 选择第1、第3、第5、第7个通道（从0计数）。

#### 6. Sequence All Samples（顺序遍历所有采样）

依次处理所有采样点，常见于音频、视频逐帧或逐点处理。

#### 7. Sequence All Samples By Name（按名称遍历所有采样）

如果采样点有标签或名称，则按照名称顺序依次操作。

---

### ShuffleCHOP's Method 解释(2/3)
#### 8. Sequence All Samples Every Nth Channel（在每N个通道上遍历所有采样）

可能是指，每隔N个通道，对对应的采样做遍历。

#### 9. Split All Samples（分割所有采样）

把整个数据集切割为多个采样段（常用于小批量处理或分批训练等）。

#### 10. Split N Samples（分割N个采样）

只分割前N个采样，其余保持原样。

#### 11. Split Every Nth Sample（每N个采样分割一次）

每处理N个采样就切分一次，类似分组操作。



---


### TrailCHOP 记录时间序列的数据
- 记录一段时间的频率变化，可通过调整窗口长度参数（Length）控制显示的历史时间范围

WindowLength:  
- if Cols作为始点, `op('constant1')['Row']`
- if Rows作为始, `op('constant1')['Col']`

![bg fit left:50% vertical](https://i.imgur.com/aYv6KX6.webp)


---


### 合并数据


- **Shuffle CHOP** > Method > Sequence All Sample;


![bg fit left:50% vertical](https://i.imgur.com/nVBBQXf.webp)

![bg fit left:50% vertical](https://i.imgur.com/kUIICY3.webp)


---

### 命名Channel 为 ty

![bg fit left:50% vertical](https://i.imgur.com/S4RHuam.webp)


---


排查问题清单: 

1. `Interval` 参数是否捆绑到 Copy 上? 
2. `ResampleCHOP` 与 `TrailCHOP` 单位是否为 `Sample`?
3. Resample **Start** `1`, **End** 绑定 `Rows` / `Cols`
4. `ShuffleCHOP` 拼接序列使用`Sequence ALL Sample`

---




## 渲染与优化

- 添加 **Geometry、Camera Viewport、Render TOP**
- 应用 **Line Material**，设置为白色
- 启用“Discard Pixels Based on Alpha”，消除多余线段


![bg fit left:50% vertical](https://i.imgur.com/WAzWy6c.webp)


---




## Render: 去伪影的原理


 > 当 Alpha 通道为0 时，`LineMat` 的 `Common` > `Discard Pixels Based on Alpha` 会自动去除对应线段，实现回扫伪影的消除




![bg fit left:50% vertical](https://i.imgur.com/EkYPq3E.webp)


---

## RGBA 处理

- **RGB**  通道 -  `Pattern CHOP`  类型设置为 `Constant`(常数), 数值设为1，使线条变为白色
- **Alpha** 通道 - `Pattern CHOP`  类型需设为 `Square`“方波（Square）”，长度需与主数据一致，用于消除回扫伪影



![bg fit left:50% vertical](https://i.imgur.com/TxXZBou.webp)


---


### Alpha 擦除原理演示 

Parttern Square  

![bg fit left:50% vertical](https://i.imgur.com/b0kaHNl.webp)



---


- **Merge CHOP** 合并`[ XYZ、RGB、Alpha]`

![bg fit left:50% vertical](https://i.imgur.com/7gs5iut.webp)


---


### `CHOPtoSOP `声明数据对应的每个点


![bg fit left:50% vertical](https://i.imgur.com/bPGwwF3.webp)

- **P**：点位置（X,Y,Z），定义三维坐标，如立方体顶点定位  
- **Pw**：点权重（单值），影响蒙皮动画骨骼作用效果  
- **Cd**：点颜色（R,G,B,α），（ColorData 颜色数据）赋予模型颜色  
- **N**：点法线（X,Y,Z），关键于光照渲染，如球体自然光影  
- **uv**：点纹理坐标（U,V,W），映射纹理到模型，控制贴图显示

---

**Cd（ColorData 颜色数据）**


![bg fit left:50% vertical](https://i.imgur.com/3bSsI3o.webp)





---

## 交互与扩展

- 可通过参数调整**行间距、长度、颜色**
- 支持旋转、拉伸、反向等多种视觉效果
- 可将参数映射到父组件，便于交互控制



---


#### (可选: 可调节造型参数)

- IF 要设置高度(Height), 用 **Math CHOP** `Range` 映射高度. 
- IF 要反转方向,  可设置**Stretch CHOP**  `Reverse` 参数

![bg fit left:50% vertical](https://i.imgur.com/Woz2O03.webp)


---




## 术语解释

- **SOP**：Surface Operator，几何对象操作节点
- **CHOP**：Channel Operator，信号/数据流节点
- **TOP**：Texture Operator，图像/纹理处理节点
- **Ty 通道**：Y 轴方向的数值通道，常用于音频可视化
- **Trail CHOP**：用于记录和显示信号在一段时间内的变化，常用于制作历史轨迹或时间流动效果
- **Stretch CHOP**：可对信号进行拉伸、缩放或反转，常用于调整数据的方向或长度


---




