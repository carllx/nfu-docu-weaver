--`|(79) Pinterest` [pinterest](https://www.pinterest.it/carllllllllx/zretopology/)
实时反馈,  
赋予贴图材质, 制作动画
使模型可以应用于更广传播途径和场景  VR, AR, 元宇宙


## Type
- 手动 
- 手动增强 (RetopoFlow3)
- 模板 (Softwrap)
- 自动化 (Instant Meshes)

## Addon
reference:
--`| 8 Blender Addons for Retopology` [youtube](https://youtu.be/8v5YBj_9_QU?t=18)


### Softwrap 
布线模板
--`| How To Retopologize ANYTHING in Blender in Less Than 6 Minutes` [youtube](https://youtu.be/sCdhkLUCV8A?t=81) --`|[Blender] Softwrap 2.1.2 - Dynamics For Retopology :: CGPeers Beta 2 Build 723423 32bit` [cgpeers](https://cgpeers.to/torrents.php?id=80497&torrentid=80377#torrent80377)
![](https://i.imgur.com/uLeFiBZ.png)


### Instant Meshes
2015 SIGGRAPH 论文
remesh, 但 custom 布线自由度仍然很低, 不适宜动画 
--`安装文件 |wjakob/instant-meshes：交互式场对齐网格生成器` [github](https://github.com/wjakob/instant-meshes)
![|200](https://raw.githubusercontent.com/wjakob/instant-meshes/master/resources/icon.png)
--`| Instant Mesh is better than blender` [youtube](https://youtu.be/NCdZko2W8CA?t=0)
![|200](https://i.ytimg.com/vi/NCdZko2W8CA/hqdefault.jpg)



### RetopoFlow3($)
--`|Retopology Concepts and Practice/ Learn RetopoFlow3 - Ultimate Retopo Tutorial` [youtube](https://youtu.be/X8kQiccJetw?t=1864)[youtube playlist](https://www.youtube.com/playlist?list=PLBX-X8mPyxIqen7Au2_5h0DkHInN_XoZ1)  `淘宝网` [taobao](https://item.taobao.com/item.htm?spm=a230r.1.14.1.45dd79afBSTQzk&id=642812013858&ns=1&abbucket=6#detail)
![](https://i.imgur.com/eEpAP0r.png)


## 原生方式
![|200](https://i.imgur.com/PIIyC0k.png)

![](https://i.imgur.com/ci0xrUq.png)

![|200](https://i.imgur.com/4MYlkAO.png)


1. 从已经有的的面中, 复制一个点 : 选择一个点 `Shit+ D` ,移动到对应的位置.  `D = Duplicate 复制`
2. 从一个点挤出多个点形成的路径: `E`  , `E= Extrude 挤出`
3. 沿着线挤出一条线形成的面:  `Alt` 点选其中一个点, 
	1. `E`  挤出一圈面 `E= Extrude 挤出`
	2. `S` : 沿着原来的路径缩小 `S=Scale缩放` 

R = Rotate 旋转
G = Grad 位移
S = Scale 缩放
X = 删除
F = Fill 填充 (Alt F, 自动布线)


### Ordering mesh 理线调整
雕刻模式下的显示设置
![](https://i.imgur.com/xl9Yj4F.png)


### 局部过滤显示
Shit - H 隐藏 / Alt - H 回复隐藏 选择的points
结合Vertex Group 使用, 切换到 `Vetext Mode > select >Select Similar > Vertex Groups`
![](https://i.imgur.com/unPXZc7.png)


## 分析
写实人像布线及贴图类型绘制参考 --`|3D Head scan shader testing - 3D model by Ten24 (@ten24) [a93fd43]` [sketchfab](https://sketchfab.com/3d-models/3d-head-scan-shader-testing-a93fd43dd1eb485eb8bcb9f5afae50d8)
![|200](https://media.sketchfab.com/models/a93fd43dd1eb485eb8bcb9f5afae50d8/thumbnails/65c87e099e064413ab1c4eadf0b6de1f/1920x1080.jpeg)
