## 什么是 PBR?
PBR(Physically Based Rendering) 
(PBR)基于物理的渲染方法.
是目前实时Real-Time中更准确地表示[[Class1.4-Rendering - 光与表面的交互]]方式。
应用于如基于迪士尼渲染模型PBR, 如 Pixar’s Renderman® and Unreal Engine®
如 blender 将多个参数 Layers 组成一个 Principled BSDF 节点, .  --`|Principled BSDF(双向散射分布函数) — Blender Manual` [blender](https://docs.blender.org/manual/en/3.3/render/shader_nodes/shader/principled.html)
开发过程需要处处为性能考虑.

Principled BSDF 基本囊括Sharder node 内的材质node 
--`|Blender 究极新手全部渲染节点教程，20分钟就会` [bilibili](https://www.bilibili.com/video/BV1he411x7eK/?t=95)
推荐小昕讲堂 --`|023 blender着色器节点详解（一）` [bilibili](https://www.bilibili.com/video/BV1Fv4y1w7nT/?t=944)



PBR 渲染 
参考 --`|Materials and Textures – Sketchfab Help Center` [sketchfab](https://help.sketchfab.com/hc/en-us/articles/202600873-Materials-and-Textures)

贴图或参数构成的材质
以 blender 为例
以 Sketchfab为例I
--`|原理化BSDF — Blender Manual` [blender](https://docs.blender.org/manual/zh-hans/3.3/render/shader_nodes/shader/principled.html)
![](https://docs.blender.org/manual/zh-hans/3.3/_images/render_shader-nodes_shader_principled_example-1a.jpg)
**Albedo**: DiffusePBR | diffuse | Albedo | Base Color: 基础色, 漫反射
**Metalness**: 金属性
**Specular** | ~~SpecularPBR~~  : 镜面发射(高光?)
**Specular** F0: 同上,但可以控制不同级别的 IOR in  Fresnel --`|What is "specular FO"?  Sketchfab Forum` [sketchfab](https://forum.sketchfab.com/t/what-is-specular-fo/22752/5) 
**Roughness**: 粗糙度
**Glossiness**: | ~~GlossinessPBR~~ | ~~roughness~~ : 光泽度
**AO**: | ~~AOPBR~~ | AO map: 环境遮挡, 光照强度贴图
**Cavity**: | ~~~CavityPBR~~~ | AO | 使用灰度纹理来定义遮挡光的小区域, 用得不多, 叠加在 diffuse map 里 ，增加细节 使贴图更加丰富 ，如果是机械类的贴图 ，在高光的地方 会有更多的变化。
**Normal** | normal-map | nrm | 法线
**BumpMap** | heightmap | Bump Map | 凹凸
**Emission**: 'emission', 'emit', 'emissive' : 发光
**Opacity** | transparency | Opacity |  'mask', 'alpha': 透明度
**SubsurfaceScattering** | subsurface | Scattering | 次表面散射, (简称SSS) 光穿透物体表面并在材料内部以不规则的角度进行多次反射. 例如光穿透手掌的红色..--`|SSS | SubSurface-Scattering 次表面散射 | 3S材质知多少 - 知识分享 - 饼干教育 - 新软件，新趋势；新人才，新未来！学习软件、设计、游戏、动画的好地方！` [bgteach](https://www.bgteach.com/article/206)
--`|快速实现低性能次表面散射(转载翻译) - 知乎` [zhihu](https://zhuanlan.zhihu.com/p/343303096)
 --`|次表面散射/蒙皮 (SSS) – Sketchfab 帮助中心` [sketchfab](https://help.sketchfab.com/hc/en-us/articles/4402386565777-Subsurface-Scattering-Skin-SSS-)
**Clear Coat**:  'clearcoat', 涂层法线, 对光反射更多的细节.例如透明涂层以下的表面添加第二法线贴图;又如如碳纤维, 表面与透明涂层存在几何差异
Clear Coat Roughness: 'clearcoat roughness'
Clear Coat Normal Map: 'clearcoat normal map'
Sheen :光泽层, 对密集的镜面反射使用, 例如毛发和布料上. --`|C4D+Vray-布料皮革毛发sheen材质详解图文教程- 虎课网` [huke88](https://huke88.com/baike/a54949/)
Anisotropy | normal-map | Anisotropy | 发现各向异性, 不同方向上的不同属性, 常见: 拉丝钢、头发和光盘
**SubsurfaceTranslucency** | subsurface | Translucency | 次表面透明度, 模拟对象内部的光散射效果。它适用于皮肤、蜡和冰等半透明材料。



Clear Coat Shading
The Second Normal Does --`|Using Dual Normals with Clear Coat` [unrealengine](https://docs.unrealengine.com/5.0/en-US/using-dual-normals-with-clear-coat-in-unreal-engine/)
![](https://i.imgur.com/EnjI4CH.png)

 
dssdssdfsadfsSDD.dsdfadsdfsdfdsdfdsdfdsfd

SSS 
![](https://i.imgur.com/AR4zvHQ.png)

![](https://i.imgur.com/mtB9Tei.png)
![](https://i.imgur.com/GFERqev.png)
2 (below surface)  Subdermal
1 (surface)
3 (deepest) 
--`| C03L04 skin color overview` [youtube](https://youtu.be/18R-vjW1Gio?t=207)

![](https://i.imgur.com/07YmVD4.png)
--`| Subsurface Scattering in Blender` [youtube](https://youtu.be/iLYkTBz9_do?t=522)

Subdermal, Epidermal, Back Scatter, Diffuse, Specular
皮下、表皮、后向散射、漫反射、镜面反射
--`| C03L04 skin color overview` [youtube](https://youtu.be/18R-vjW1Gio?t=262)

参考底层皮肤效果--`| Subsurface Scattering in Blender` [youtube](https://youtu.be/iLYkTBz9_do?t=462)
![|200](https://i.ytimg.com/vi/iLYkTBz9_do/hqdefault.jpg)

cycles 下的皮肤参数参考--`| Blender tutorial - How to Make Skin Shader` [youtube](https://youtu.be/B3TnEMoNIr4?t=722)

![](https://i.imgur.com/XZJNb0B.png)

--`|Achieving Photorealism with 3D Characters` [80](https://80.lv/articles/004adk-tips-for-creating-photorealistic-3d-characters/?sfns=mo%27)
![|200](https://cdn.80.lv/api/upload/post/376/images/5d28781c59cc2/contain_1200x630.jpg)
