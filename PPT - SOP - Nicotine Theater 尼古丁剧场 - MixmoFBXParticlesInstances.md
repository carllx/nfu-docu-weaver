
# Nicotine Theater 尼古丁剧场

![](https://i.imgur.com/DhW3JBN.webp)

---
## 基础模型

---


### Shooting Stage 舞台


#### Stage Size
设置为 3 米

![bg fit left:50% vertical](https://i.imgur.com/9wYGFxn.webp)



---


#### Stage Material
设置为 PBR 材质

![bg fit left:50% vertical](https://i.imgur.com/OZ9JEKF.webp)


---


### Camera

![bg fit left:50% vertical](https://i.imgur.com/NfH8Hn3.webp)



---


## Particles 
### Sphere(Emitter)

- SphereSOP (Emitter 发射器)
- ParticlesSOP
- GridSOP > GeoCOMP
- RenderTOP


![bg fit left:50% vertical](https://i.imgur.com/kRfFUjK.webp)




---

### ParticlesSOP


---


#### State

**Behavior behave** (行为表现 )
- 从几何体的点发射粒子
- 使用粒子 SOP 的行为来变形原始几何体

**Compute Normals**  - Creates normals on the geometry. **Only** used when Behaviour is set to **Modify Source Geometry**.
![bg fit left:50% vertical](https://i.imgur.com/BA3dzRL.webp)


**Reset (reset)**  && **Reset Pulse (resetpulse)**： “重新开始” 按钮，能让粒子系统把所有的东西都 “归零”。


---


#### Force

![bg fit left:50% vertical](https://i.imgur.com/1mzFjN5.webp)




---

5. SortSOP,  设置粒子发射序列
![bg fit left:50% vertical](https://i.imgur.com/mKAz0Nr.webp)


---

5. 快捷键, 清空粒子

![bg fit left:50% vertical](https://i.imgur.com/t3aZ31c.webp)



---
6. TrailsSOP , 演示粒子拖尾效果


**Trail Length（2）**：决定尾巴保留多长
**Trail Increment（1）**：尾巴有多少个点
**Cache Size（2）**：记住更多粒子的轨迹，太少就记不住啦

![bg fit left:50% vertical](https://i.imgur.com/Zq7tkOP.webp)

---


## 导入 BOSS


### Mixmo 下载模型

![bg fit left:50% vertical](https://i.imgur.com/uWO70Xh.webp)


---

### 导入FBX 

- 将 FBX 文件 拖入 TouchDesigner（TD），
- 自动创建带动画 GEO；
- GEO 内部 SOP 节点层面，非动画模型呈 A /  T 姿势。 


![bg fit left:50% vertical](https://i.imgur.com/CMjnjtn.webp)


---

Flair.fbx 查找 Mesh

![](https://i.imgur.com/CkqNyMo.webp)


---
手臂 mixamorig_Arms_Geo
夹克 mixamorig_Jacket_Geo
鞋子 mixamorig_Shoes_Geo
下牙 mixamorig_Teeth_Down_Geo
左眼 mixamorig_L_Eye_Geo
雪茄 mixamorig_Cigar_Geo
帽子 mixamorig_Hat_Geo
裤子 mixamorig_Pants_Geo
上牙 mixamorig_Teeth_Up_Geo
右眼 mixamorig_R_Eye_Geo
头部 mixamorig_Head_Geo

![bg fit left:50% vertical](https://i.imgur.com/FlxblPg.webp)

![bg fit left:50% vertical](https://i.imgur.com/6KPbULY.webp)

---
### 统一单位和尺度

检查是否有 scale, 如果有设为 1

---
### 重新调整模型大小
调整 Model 站立约1.5米
`FBXOP` > `Xfrom` > `scale`  , 
![bg fit left:50% vertical](https://i.imgur.com/ZZOLBX0.webp)
![bg fit left:50% vertical](https://i.imgur.com/ULylCet.webp)


---

## Particles 设置


### Emitter 发射器

球体半径(radius:0.1~0.5)


![bg fit left:50% vertical](https://i.imgur.com/Gr2zLdB.webp)

---

### Geo 设置 Instance 实例

![bg fit left:50% vertical](https://i.imgur.com/W93UWdh.webp)

---

### Geometry 

![bg fit left:50% vertical](https://i.imgur.com/IAZo89y.webp)


---



###  Emitter 绑定动画

#### 查找包含所有骨骼数据的 CHOP

![bg fit left:50% vertical](https://i.imgur.com/xRdtf3C.webp)

---

#### 获得引用骨骼数据命名

复制所有骨骼属性数据,
通过豆包提取指定骨骼的动画数据

![bg fit left:50% vertical](https://i.imgur.com/X0AWhv4.webp)

![bg fit left:50% vertical](https://i.imgur.com/lu6thIF.webp)

---



![bg fit left:50% vertical](https://i.imgur.com/Hx753vG.webp)


---

#### Select 引用Rotation XYZ 参数

- CHOPs 路径:  `Flair/exportAnim`


![bg fit left:50% vertical](https://i.imgur.com/atwX5lG.webp)


---

- 查询表达式: `mixamorig_Hips:r*`

![bg fit left:50% vertical](https://i.imgur.com/6p1VmJp.webp)


---

#### 绑定 Emitter 

以`SphereSOP` 作为 Particles 粒子发射器

![bg fit left:50% vertical](https://i.imgur.com/IysUbmf.webp)


---




显示 `Points`   确定发射数量

![bg fit left:50% vertical](https://i.imgur.com/XpOgT51.webp)



---
### 偏移原点摆动发射器


![bg fit left:50% vertical](https://i.imgur.com/H392qEZ.webp)


---

## Camera

调整机位, 注意构图, 地面保留适当的空间

![bg fit left:50% vertical](https://i.imgur.com/5XjQZSS.webp)






---



## Lighting 三点照明体系

![bg fit left:50% vertical](https://i.imgur.com/l46aXcA.webp)

- `light_main` 主光 
- `light_b_red`, `light_b_blue` 轮廓光
---

#### 辅光（Fill Light）

位于相机另一侧. 

填充阴影，突出暗部细节。
控制对比, 立体(弱) vs 装饰(强)
不一定是真正的灯光，也可以是反光板


![bg fit left:50% vertical](https://i.imgur.com/e0mufTX.webp)


---
#### 背光（Backlight）

位于拍摄对象后方

增强画面层次感,  分离对象与背景，
控制场景深度。
强调对象 POSE 造型轮廓


![bg fit left:50% vertical](https://i.imgur.com/e0mufTX.webp)

---

#### 主光（Key Light）

最亮的光源，决定场景的整体曝光和氛围。
![bg fit left:50% vertical](https://i.imgur.com/e0mufTX.webp)



---

## Lighting 设置
### Backlight/Rim Light 轮廓光


1. 是否照亮背景固有色, 
2. 是否勾勒出全身轮廓
3. 边缘光的阴影是否必要? (一般不要)

---


![](https://i.imgur.com/ECXm3Tz.webp)


---



### 主光, 舞台锥光参数



立体感, 喜剧感


锥角（Cone Angle）30°，主光照范围核心角度；
锥角公差（Cone Delta）10°，边缘过渡区角度范围，让边缘柔和。
颜色（Light Color）(1, 1, 0.8)，近白色，略带淡黄；
亮度（Dimmer）1.5，高于默认，增强光照强度.
![bg fit left:50% vertical](https://i.imgur.com/p82KNpH.webp)


---

## Fog 雾

灯光着色气氛
烘托神秘感

![bg fit left:50% vertical](https://i.imgur.com/CY6c5Xt.webp)


---

#### Noise Map
Noise Map 参考
![bg fit left:50% vertical](https://i.imgur.com/X09bHY8.webp)




---
## PostProcessing - Bloom辉光

![bg fit left:50% vertical](https://i.imgur.com/Jb9Y9NB.webp)

---


## **四、**探索实验性节点**

如 Metaball（代谢球）、LSyste（L系统分形）, Alembic可实现艺术化形态。

![|200](https://i.ytimg.com/vi/SpCX2_-SDjw/hqdefault.jpg)


(Source: [youtube.com: Switch/ (24) Metaball Tutorial TouchDesigner | Step by Step - YouTube](https://youtu.be/SpCX2_-SDjw?t=592))


![|200](https://i.ytimg.com/vi/LuLpaUpCaek/hqdefault.jpg)
(Source: [youtube.com: Intro/ (24) L-Systems & Particles | TouchDesigner Tutorial - YouTube](https://youtu.be/LuLpaUpCaek?t=0))


