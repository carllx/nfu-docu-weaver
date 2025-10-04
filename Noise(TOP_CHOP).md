
### Chladni plate 实验
研究展示了如何使用单个声学致动器同时独立地控制 Chladni 板上多个物体的运动，通过统计建模预测和控制非节点线区域的运动，实现了高精度多物体操作，并具有在多个领域的应用潜力. 
这个实验证明了==看似随机的运动实际上是可以预测和控制的==。研究人员通过统计建模和声学致动器，成功预测和控制了Chladni板上多个物体的运动，尽管这些运动看似随机，但实际上具有足够的规律性，可以通过选择特定的音符来实现精确控制

![bg fit left:50% vertical](https://i.imgur.com/AzW47lZ.webp)


![|200](https://media.springernature.com/m685/springer-static/image/art%3A10.1038%2Fncomms12764/MediaObjects/41467_2016_Article_BFncomms12764_Fig1_HTML.jpg)
(Source: [nature.com: Controlling the motion of multiple objects on a Chladni plate | Nature Communications](https://www.nature.com/articles/ncomms12764))

---


![bg fit left:50% vertical](https://i.imgur.com/Pxl9zFo.webp)

“Figure 4：理论与实验观察到的位移场的比较。第一行展示了理论计算的 Chladni plate 图形，第二行展示了绝对位移，第三行展示了剩余量 ξn。比例尺（左上角），1 厘米。”

---


## Type_Harmomic Summation

![bg fit left:50% vertical](https://i.imgur.com/uyxSHZt.webp)

---

## Type_Perlin 系列噪声

计算性要求较高，追求高质量噪声效果的场景，如电影动画制作 ；
![bg fit left:50% vertical](https://i.imgur.com/aOtpvpN.webp)

---


## Type_Simplex 系列噪声

计算效率高. 适合对实时性要求高的场景，比如实时游戏。
![bg fit left:50% vertical](https://i.imgur.com/fjiVcsd.webp)

---



## Type_Random（GPU随机噪波)

- 表现：完全无规律的随机点，无周期性和连贯性
- 特点：计算最简单，控制参数少
- 适用场景：需要完全随机效果的基础纹理（如星空、沙粒）

![bg fit left:50% vertical](https://i.imgur.com/KCNdpfY.webp)

![bg fit left:50% vertical](https://i.imgur.com/ABzjtIU.webp)


---

## Type_Sparse（稀疏噪波）

- 表现：离散的噪波点，颗粒感强
- 特点：计算效率高，适合快速生成
- 适用场景：实时渲染中的破碎效果（如岩石表面、噪点贴图）
![bg fit left:50% vertical](https://i.imgur.com/gJCmKjY.webp)

---

## Type_Hermite（埃尔米特噪波）


- 表现：平滑过渡的噪波，类似 Perlin 噪波
- 特点：三次多项式插值，高质量但计算成本较高
- 适用场景：自然地形、流体模拟等需要平滑过渡的场景
![bg fit left:50% vertical](https://i.imgur.com/P1xiPi4.webp)

---


**Harmonic Summation（谐波叠加噪波）**

结构化和有规律的纹理
这种结构感来自于谐波的叠加，类似于音乐中的谐波成分。

- 表现：多层频率叠加的复杂纹理，层次感强
- 特点：通过调整谐波参数可控制细节丰富度
- 适用场景：复杂地形、云层、织物纹理等需要多尺度细节的场景

不像 Gaussian noise 噪波那样随机和均匀分布
不像 Perlin 噪波那样具有连续的、有机起伏的纹理。
Harmonic Summation 产生更 结构化、有规律 的图案，通常表现为一系列 重复的、有方向性的线条或波纹。

![bg fit left:50% vertical](https://i.imgur.com/YbtBxhh.webp)
![bg fit left:50% vertical](https://i.imgur.com/d0mvJ2i.webp)
![bg fit left:50% vertical](https://i.imgur.com/uyxSHZt.webp)

---

**Alligator（鳄鱼噪波）**

- 表现：尖锐边缘的破碎噪波，对比度极高
- 特点：类似分形噪波的变异，强调边缘细节
- 适用场景：模拟 皮革、爬行动物皮肤、岩石 等特殊纹理、需要高对比度的抽象场景
![bg fit left:50% vertical](https://i.imgur.com/2upcIWL.webp)

---



