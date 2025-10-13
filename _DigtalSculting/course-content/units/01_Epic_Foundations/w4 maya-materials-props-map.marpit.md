---
marp: true
theme: NFUPPT
class:
header: 核心原则与艺术解构
footer: Maya 风格化渲染
---

## 4. Maya Low-Poly 风格化渲 染-60s 古办公室

![bg fit left:50% vertical](https://i.imgur.com/cxuHNwR.webp)



参考 [ 🔍 google Google Gemini](https://gemini.google.com/u/2/app/9badde305ee0410b)
**参考案例：** [60's Office Props by G.G.](https://sketchfab.com/3d-models/60s-office-props-dc00ea320cfa4aad90811080270672db "null")


---



## 渲染的第一条铁律是什么？


**世界尺度与物理参数**
(灯光、阴影等都依赖于场景的真实单位,
模型尺寸错误会导致灯光、透射深度等一切物理效果失真)

- 单位 厘米-> 米

- 测量工具

<!--

[Opener]: 在我们调整任何炫酷的参数之前，必须先打好地基。成功的渲染始于一个最基本却也最关键的原则。

[Expansion]:

- 真实世界尺度: Arnold的灯光、阴影等所有物理计算都依赖于场景的真实单位。

- Arnold物理参数: 模型尺寸错误会导致灯光、透射深度等一切物理效果失真。

- 厘米单位: 在Maya的偏好设置中，务必将工作单位的线性单位设置为厘米。

- 测量工具: 使用距离工具或参考立方体，确保模型尺寸符合现实，比如椅子大约80-90cm高。

[Evidence]: 案例中的椅子高85cm，桌面高75cm，完全符合真实世界尺度。

[Action]: [行动：提问] 为什么说，如果一个茶杯模型有10米高，即使用了正确的灯光参数，渲染效果也一定会是错的？

[V-Prompt]: A line drawing illustration of a giant teacup towering over a tiny cartoon character with pie-cut eyes, measuring it with a huge ruler. The scene demonstrates the concept of 'Real-World Scale'. Rendered in the iconic 1930s rubber hose animation style, with bold black lines on a white background. The atmosphere is comedic and educational. Square aspect ratio.

-->
![bg fit left:50% vertical](https://i.imgur.com/liBcVQM.webp)


---


## 如何避免渲染画面“发灰”？

线性工作流
色彩管理
ACEScg
sRGB 与 Raw

<!--

[Opener]: 解决了物理尺寸，我们接着来统一视觉语言——色彩。这能从根本上保证色彩的准确性。

[Expansion]:

- 线性工作流: 保证从贴图到最终输出的色彩信息在传递过程中不失真。

- 色彩管理: 在Preferences中启用，是实现线性工作流的第一步。

- ACEScg: 行业标准的渲染色彩空间，提供更广的色域和动态范围。

- sRGB 与 Raw: 颜色贴图（如Base Color）使用sRGB，数据贴图（如Roughness）必须使用Raw。

[Evidence]: 案例中所有木纹、塑料颜色贴图都使用了sRGB，而粗糙度和金属度贴图都标记为Raw。

[Action]: [行动：演示] 打开 Preferences > Color Management，现场演示一遍色彩管理的正确设置流程。

[V--Prompt]: A line drawing illustration of a cartoon artist character looking at two screens. One screen shows a vibrant, correctly colored image labeled 'ACEScg'. The other shows a dull, washed-out image labeled 'Incorrect'. The style is 1930s rubber hose animation, emphasizing the contrast with simple, bold lines. The atmosphere is clear and comparative. Square aspect ratio.

-->


## 如何用最少的面塑造出“玩具感”？

低多边形

简化形态

核心特征

玩具模型感

<!--

[Opener]: 现在基础打好了，我们进入艺术风格的第一步：建模。这种风格的精髓在于“少即是多”。

[Expansion]:

- 低多边形: 使用尽可能少的面数来构建模型，易于控制。

- 简化形态: 忽略微小的细节，抓住物体最主要的形状特征。

- 核心特征: 比如电话，保留听筒、拨盘和机身的经典外形就足够了。

- 玩具模型感: 最终目标是让模型看起来像一个精致、可爱的玩具。

[Evidence]: 案例中的电话模型，机身非常平滑，按钮被简化成了圆柱体，这就是典型的简化形态。

[Action]: [行动：提问] 如果要用这种风格做一个订书机，你会省略掉哪些细节？

[V-Prompt]: A line drawing illustration of a simple, charming low-poly car next to a highly detailed, realistic car. The low-poly car has a friendly, toy-like appearance. The style is 1930s rubber hose animation, using minimal lines to convey the 'less is more' concept. The atmosphere is playful and comparative. Square aspect ratio.

-->


## 低多边形模型的“生命线”是什么？

法线与边缘

硬边

软边

轮廓清晰

<!--

[Opener]: 模型建好了，但为什么看起来还是软绵绵、一坨坨的？因为我们还没给它“画骨骼”。

[Expansion]:

- 法线与边缘: 它们决定了光在模型表面的反射方式，定义了模型的形状感。

- 硬边: 在锐利的边缘，比如盒子边缘，设置硬边，形成清晰的转折。

- 软边: 在平滑的曲面，比如球面，设置软边，让光照过渡平滑。

- 轮廓清晰: 正确设置硬软边，是确保模型在任何角度下都有清晰轮廓的关键。

[Evidence]: 案例中的文件柜，柜体边缘是硬边，而圆形拉环则是软边，形成了明确的对比。

[Action]: [行动：演示] 选中一个立方体，展示在 Mesh Display 菜单中反复切换硬边和软边的视觉差异。

[V-Prompt]: A line drawing illustration showing two cubes in the 1930s rubber hose style. One cube has defined, sharp corners labeled 'Hard Edge', looking crisp. The other has mushy, rounded corners labeled 'Soft Edge', looking undefined. The illustration clearly contrasts the two concepts. The atmosphere is educational and visually direct. Square aspect ratio.

-->


## 如何让边缘“捕捉”高光以提升质感？

倒角 (Bevels)

捕捉高光

提升质感

细小倒角

<!--

[Opener]: 模型轮廓清晰了，但看起来还是有点“CG”，有点假。现实世界中，不存在绝对锋利的边缘。

[Expansion]:

- 倒角 (Bevels): 为模型的关键边缘添加非常细小的斜面。

- 捕捉高光: 这个小小的斜面能够接收到灯光，形成一条漂亮的高光线。

- 提升质感: 高光的存在极大地提升了模型的真实感和质感。

- 细小倒角: 倒角不需要很大，一个非常小的数值就足以产生效果。

[Evidence]: 放大案例中的桌面边缘，可以看到一条非常细微但明确的高光，这就是倒角在起作用。

[Action]: [行动：提问] 为什么说即使是做一张纸，也要给它的边缘添加极其微小的倒角？

[V-Prompt]: A line drawing illustration in the 1930s rubber hose style, showing a close-up of a cartoon light bulb shining on the edge of a cube. One edge is perfectly sharp and dark, while the other has a tiny bevel that catches the light, creating a bright highlight. The concept 'Bevels Catch Highlights' is visualized. The atmosphere is focused and illustrative. Square aspect ratio.

-->


## 如何避免材质出现“纯色塑料感”？

简化PBR原则

哑光/磨砂质感

微观细节

aiNoise纹理

<!--

[Opener]: 模型OK了，现在我们来给它穿上“衣服”——材质。风格化的核心是简化，但不是简单。

[Expansion]:

- 简化PBR原则: 遵循PBR的大逻辑，但参数上追求风格化，而非绝对写实。

- 哑光/磨砂质感: 这是该风格的主体质感，通过较高的粗糙度实现。

- 微观细节: 即使是哑光表面，也需要有细微的粗糙度变化来打破纯色。

- aiNoise纹理: 将噪点纹理以极低的强度连接到高光粗糙度通道，是模拟微观细节的绝佳方法。

[Evidence]: 案例中所有塑料和漆面材质的Specular Roughness都连接了一个幅度(Amplitude)仅为0.02的aiNoise节点。

[Action]: [行动：演示] 展示将aiNoise连接到Specular Roughness通道前后，材质高光变化的细微差异。

[V-Prompt]: A line drawing illustration comparing two plastic toy ducks in the 1930s rubber hose style. One is a flat, plain color labeled 'Pure Plastic Feel'. The other has subtle, fine speckles on its surface labeled 'Micro-details', giving it more texture. The atmosphere is subtle and comparative. Square aspect ratio.

-->


## 风格化哑光塑料的关键参数是什么？

Base Color

Metalness: 0.0

Specular Weight: 1.0

Specular Roughness: ~0.6-0.8

<!--

[Opener]: 理论讲完了，我们来看最常用的哑光塑料材质，它的参数应该如何设置？

[Expansion]:

- Base Color: 设定物体的固有颜色。

- Metalness: 0.0: 因为它是塑料，是非金属，所以金属度为0。

- Specular Weight: 1.0: 这是物理正确的设定，非金属材质的高光权重应为1.0。

- Specular Roughness: ~0.6-0.8: 这是关键参数，较高的值会使高光模糊，形成哑光/磨砂效果。

[Evidence]: 案例中的电话机、台灯灯罩都遵循了这个参数设置。

[Action]: [行动：提问] 如果想让这个塑料看起来稍微“新”一点，有光泽一点，应该调整哪个参数，是调高还是调低？ (答案：调低Specular Roughness)

[V--Prompt]: A line drawing illustration of a cartoon character adjusting a slider labeled 'Specular Roughness' on a control panel. An arrow points from the slider to a sphere, showing its surface changing from glossy to matte. The style is 1930s rubber hose animation, making the technical concept playful and easy to understand. The atmosphere is interactive and educational. Square aspect ratio.

-->


## 如何制作磨砂感的半透明塑料？

Thin Walled

Transmission Weight: ~0.8

Transmission Color

高Specular Roughness

<!--

[Opener]: 接下来我们处理一个特殊但很出效果的材质——比如案例中的蓝色水桶。

[Expansion]:

- Thin Walled: 在Geometry卷展栏下勾选，告诉Arnold这是一个薄壁物体，用更高效的方式计算透射。

- Transmission Weight: ~0.8: 提高透射权重，让光线可以穿透物体。

- Transmission Color: 设定光线穿透后呈现的颜色，也就是这个半透明物体的颜色。

- 高Specular Roughness: 保持较高的粗糙度（如0.4），让高光模糊，从而制造出磨砂感。

[Evidence]: 案例中的蓝色水桶精确地使用了这些参数，实现了轻盈的半透明磨砂效果。

[Action]: [行动：演示] 现场创建一个球体，并逐步应用这些参数，展示从不透明到半透明磨砂质感的全过程。

[V-Prompt]: A line drawing illustration of light rays passing through a translucent bucket. The rays are colored blue after passing through, demonstrating 'Transmission Color'. The bucket has a frosted texture. The style is 1930s rubber hose animation. The atmosphere is scientific and clear. Square aspect ratio.

-->


## 风格化场景的主光源该如何设置？

Area Light

柔和阴影

灯光尺寸

Normalize选项

<!--

[Opener]: 材质完成，现在是注入灵魂的时刻——灯光。我们先从主光源开始。

[Expansion]:

- Area Light: 区域光是模拟柔和光源（如窗户、柔光箱）的最佳选择。

- 柔和阴影: 风格化场景通常需要柔和、不突兀的阴影。

- 灯光尺寸: 区域光的尺寸越大，产生的阴影就越柔和。

- Normalize选项: 开启后，在缩放灯光调整阴影软硬时，亮度会保持不变，极大方便了调整。

[Evidence]: 案例的主光源是一个尺寸较大的Area Light，从斜上方45度角照射，制造了柔和的方向性阴影。

[Action]: [行动：提问] 想要模拟正午刺眼的阳光，应该把Area Light的尺寸调大还是调小？ (答案：调小)

[V-Prompt]: A line drawing illustration showing a large, soft Area Light casting a gentle, fuzzy shadow from a sphere, and a small, point-like light casting a sharp, hard shadow. The concepts 'Soft Shadow' and 'Hard Shadow' are contrasted. The style is 1930s rubber hose animation. The atmosphere is comparative and illustrative. Square aspect ratio.

-->


## 如何为场景添加自然的环境补光？

Skydome Light

低对比度HDRI

低强度

控制反射

<!--

[Opener]: 有了主光源，场景的暗部还是死黑一片。我们需要一些环境光来提亮它们。

[Expansion]:

- Skydome Light: 天穹灯光可以从四面八方为场景提供均匀的光照。

- 低对比度HDRI: 在天穹灯的Color属性上连接一张模糊、低对比度的工作室HDRI，会比纯色提供更自然的环境光。

- 低强度: 环境光的强度不宜过高（如0.1-0.2），否则会削弱主光源造成的立体感。

- 控制反射: 如果HDRI在物体上造成了不必要的杂乱反射，可以在Visibility中将Specular降为0。

[Evidence]: 案例中使用了Skydome Light并连接了Uffizi Gallery的HDRI，强度设为0.15，为阴影提供了丰富的冷色调补光。

[Action]: [行动：演示] 对比只用Area Light和增加了Skydome Light之后，场景暗部细节的巨大差异。

[V-Prompt]: A line drawing illustration of a cartoon character holding a sphere. On the left, only one light shines, leaving half the sphere in pure blackness. On the right, a large dome light surrounds the sphere, gently illuminating the dark side. The concept 'Fill Light' is clearly shown. The style is 1930s rubber hose animation. The atmosphere is educational. Square aspect ratio.

-->


## 如何创建简洁的纯色背景？

巨型平面

aiStandardSurface

Imager Background

AOV Browser

<!--

[Opener]: 场景主体都完成了，我们还需要一个干净的背景来衬托它们。

[Expansion]:

- 巨型平面: 最简单的方法，创建一个巨大的平面或曲面放在模型后面。

- aiStandardSurface: 为背景平面指定一个普通的、无高光的材质即可。

- Imager Background: 更专业的方法，在渲染设置的Imagers中添加，不依赖场景模型。

- AOV Browser: 添加Imager后，可以在AOV Browser中直接设置背景颜色。

[Evidence]: 案例使用的是巨型平面的方法，赋予了一个Lambert材质，颜色为淡灰色。

[Action]: [行动：提问] 使用Imager Background方法设置背景，相比物理平面，最大的优点是什么？ (答案：不受场景灯光影响，永远是纯色)

[V-Prompt]: A line drawing illustration of a cartoon character choosing between two options. Option A is placing a large physical plane behind a model. Option B is clicking a color swatch on a UI panel labeled 'Imager Background'. The style is 1930s rubber hose animation. The atmosphere is about choices and methods. Square aspect ratio.

-->


## 不想建模倒角，有快速的替代方案吗？

aiRoundCorners

Bump Mapping

材质通道

Radius参数

<!--

[Opener]: 我们前面提到倒角对质感很重要，但如果模型很复杂，手动倒角很麻烦，有没有“作弊”的方法？

[Expansion]:

- aiRoundCorners: 这是一个特殊的Arnold节点，可以在渲染时程序化地模拟边缘倒角。

- Bump Mapping: 将aiRoundCorners节点连接到材质的凹凸贴图通道上。

- 材质通道: 这个方法作用于材质，而不是模型几何体，所以非常灵活。

- Radius参数: 通过设置一个非常小的半径（如0.1cm），就可以快速模拟出边缘高光。

[Evidence]: 案例中的一些小道具，如笔筒，就是使用aiRoundCorners来快速获得边缘细节的。

[Action]: [行动：演示] 对一个标准的立方体，演示如何连接aiRoundCorners节点，并实时在IPR中观察边缘高光出现的效果。

[V-Prompt]: A line drawing illustration of a magic wand tapping a sharp-edged cube. Sparks fly, and the cube's edges magically become slightly rounded with highlights, labeled 'aiRoundCorners'. The style is 1930s rubber hose animation. The atmosphere is magical and efficient. Square aspect ratio.

-->


## 如何设置渲染采样以平衡速度与质量？

Camera (AA): 4

Adaptive Sampling

Max. Camera (AA): 8

Adaptive Threshold: 0.02

<!--

[Opener]: 一切就绪，终于到了渲染输出的环节。这里的参数决定了最终画面的清晰度和噪点情况。

[Expansion]:

- Camera (AA): 4: 这是基础采样值，对于风格化场景，4是一个很好的起始值。

- Adaptive Sampling: 启用自适应采样，让Arnold智能地在平滑区域减少采样，在复杂区域增加采样。

- Max. Camera (AA): 8: 设定自适应采样的上限，避免无止境的计算。

- Adaptive Threshold: 0.02: 噪点阈值，数值越高，噪点容忍度越高，渲染越快。风格化场景可以容忍稍高的值。

[Evidence]: 这些是本案例最终出图使用的核心采样参数。

[Action]: [行动：提问] 如果画面中出现了大量动态模糊或景深，首先应该提高哪个采样参数？ (答案：Camera (AA))

[V-Prompt]: A line drawing illustration of a cartoon character looking at a noisy, pixelated image. The character then adjusts a slider labeled 'Adaptive Sampling', and the image becomes clean and smooth. The concept of sampling and denoising is visualized simply. The style is 1930s rubber hose animation. The atmosphere is problem-solving. Square aspect ratio.

-->


## 最终出图前，如何快速消除噪点？

OptiX Denoiser

Arnold Denoiser (noice)

Imagers

快速预览 vs 最终出图

<!--

[Opener]: 即使采样设置好了，为了追求极致的画面纯净度或更快的渲染速度，我们还可以使用降噪器。

[Expansion]:

- OptiX Denoiser: 基于NVIDIA GPU的降噪器，速度极快，非常适合在IPR中实时预览降噪效果。

- Arnold Denoiser (noice): Arnold自带的CPU降噪器，效果通常比OptiX更稳定、细节保留更好，推荐用于最终出图。

- Imagers: 降噪器需要在渲染设置的Imagers列表中添加才能生效。

- 快速预览 vs 最终出图: IPR用OptiX，最终序列帧用Arnold Denoiser，是效率和质量兼顾的工作流。

[Evidence]: 案例的IPR预览全程开启了OptiX Denoiser，最终出图时则切换为Arnold Denoiser。

[Action]: [行动：演示] 在IPR窗口中，反复开关OptiX Denoiser，让学生直观感受降噪前后的巨大差异。

[V-Prompt]: A line drawing illustration of a "magic eraser" tool cleaning up a noisy, grainy image, leaving a perfectly smooth result behind. The eraser is labeled 'Denoiser'. The style is 1930s rubber hose animation. The atmosphere is satisfying and effective. Square aspect ratio.

-->


## 如何让物体投射阴影，但地面隐形？

aiShadowMatte

接收阴影

接收反射

背景纯净

<!--

[Opener]: 有时候我们想要一个物体和它的阴影，但又不想要它所在的地面，这该怎么实现？

[Expansion]:

- aiShadowMatte: 这是Arnold中一个特殊的材质，专门用于创建“影子捕捉”平面。

- 接收阴影: 将aiShadowMatte材质赋予一个平面，这个平面在渲染中会变得透明。

- 接收反射: 这个透明的平面唯一的作用就是接收场景中其他物体投射过来的阴影和反射。

- 背景纯净: 最终可以得到一个只带有阴影的物体，可以轻松地合成到任意纯色或图片背景上。

[Evidence]: 案例的AOV输出中，有一个单独的shadow pass，就是通过aiShadowMatte材质生成的。

[Action]: [行动：提问] 这种技术在哪个行业应用最广泛？ (答案：产品可视化、汽车广告等)

[V-Prompt]: A line drawing illustration of a sphere floating in mid-air with a perfect shadow cast beneath it on an invisible surface. An arrow points to the shadow, labeled 'aiShadowMatte'. The style is 1930s rubber hose animation. The atmosphere is clean and professional. Square aspect ratio.

-->


## 如何获得弱透视的“模型感”？

高焦距

85mm / 100mm

拉远相机

构图

<!--

[Opener]: 最后，我们来谈谈相机。不同的镜头会带来完全不同的感觉。

[Expansion]:

- 高焦距: 使用较高的相机焦距（Focal Length），可以压缩空间，减少透视畸变。

- 85mm / 100mm: 85mm或100mm是常用于人像和静物的焦段，能产生非常舒服的弱透视效果。

- 拉远相机: 使用高焦距时，需要将相机向后拉远，才能将整个场景收入画面。

- 构图: 最后再通过移动相机位置来完成最终的构图。

[Evidence]: 本案例最终渲染使用的就是一台焦距为100mm的相机。

[Action]: [行动：演示] 创建一个相机，分别在24mm、50mm、100mm焦距下观察同一个立方体，直观感受透视变化。

[V-Prompt]: A line drawing illustration comparing two views of a row of telephone poles. One view, labeled 'Wide Angle (35mm)', shows strong perspective convergence. The other, labeled 'Telephoto (100mm)', shows the poles looking flatter and more compressed. The concept of focal length and perspective is visualized. The style is 1930s rubber hose animation. The atmosphere is comparative. Square aspect ratio.

-->


## 如何创建一个高效的模板场景？

单位与尺度

预设灯光

预设相机

材质库与渲染设置

<!--

[Opener]: 每次都从零开始设置很浪费时间。一个好的模板文件能极大提升我们的工作效率。

[Expansion]:

- 单位与尺度: 模板中已设好厘米单位，并放置好参考立方体。

- 预设灯光: 一个Area Light和一个连接了HDRI的Skydome Light已就位。

- 预设相机: 一台85mm焦距的相机已创建好。

- 材质库与渲染设置: 预设好常用材质球，色彩管理、基础采样和降噪器也已设置完毕。

[Evidence]: 课程提供的template.ma文件就包含了以上所有内容。

[Action]: [行动：指令] “请大家现在就动手，根据这份清单，创建一个属于自己的template.ma文件并保存。”

[V-Prompt]: A line drawing illustration of a cartoon character standing in front of a neatly organized toolbox labeled 'Template Scene'. Inside are tools labeled 'Lights', 'Camera', 'Materials', and 'Settings'. The character looks happy and prepared. The style is 1930s rubber hose animation. The atmosphere is about efficiency and organization. Square aspect ratio.

-->


---



## 一、 课程目标与概述

- 先拆解后重建

- 简化PBR

- 玩具模型感

- Arnold渲染器



<!-- [Opener]: 大家好，欢迎来到今天的课程。在我们开始动手制作之前，我们首先要思考一个问题：一个看似简单的Low-Poly场景，它的魅力究竟从何而来？

[Expansion]:

- 先拆解后重建: 这是我们整个课程的核心方法论。我们不是盲目模仿，而是先成为分析师，再去当艺术家。

- 简化PBR: 我们会用到PBR（基于物理的渲染）的工具，但目标不是照片级真实，而是创造一种可信但又风格化的质感。

- 玩具模型感: 这是我们追求的最终视觉目标——一种精致的、微缩的、让人想拿在手里的感觉。

- Arnold渲染器: 这是我们实现这一切的强大工具，我们会深入了解它如何帮助我们达成目标。


[V-Prompt]: A minimalist line drawing illustration on a white background of a disassembled vintage toy car, with its parts neatly arranged, conveying a sense of analytical precision and creative potential. square aspect ratio. -->
---

### 这门课我们解锁哪些核心技能？

- **风格特征分析**

- 用 PBR 着色模型

- 灯光组合创造 **氛围**

- 用摄像机强化**形式感**

![bg fit left:50% vertical](https://i.imgur.com/5IkNsdG.webp)

<!-- [Opener]: 明确了我们的大目标后，具体来说，这趟旅程会带我们抵达哪些站点呢？

[Expansion]:

- 风格特征分析: 你将学会如何用专业的眼光去看待一个作品，能准确说出它的建模、材质和灯光好在哪里。

- 风格化材质创建: 你会掌握在Maya中，用PBR参数调出哑光、涂漆、皮革甚至半透明塑料这些非写实质感的方法。

- 商业级布光: 我们将学习如何用最简单的灯光组合，创造出柔和、干净、能突出主体的高级感光照。

- 强化模型感: 通过调整摄像机，让你的场景看起来更像一个精致的微缩景观。


[V-Prompt]: A line drawing illustration on a white background, depicting four interconnected icons: a magnifying glass over a 3D cube, a painter's palette, a studio light, and a camera lens, symbolizing the four learning objectives. The style is clean and informative. square aspect ratio. -->


---


### **二、 理论篇：艺术风格深度解构**

在开始制作前，我们必须精准地定义目标。该场景的核心风格可以概括为：**“低多边形、复古道具的卡通写实风格”**。

#### **1. 建模特征 (Modeling)**

- **低多边形 (Low-Poly)：** 模型由数量有限的面构成，刻意保留了简洁的几何轮廓。大量使用硬边来强调几何体的块状结构。省略了复杂的细节，只**保留了最具辨识度的核心**特征，




---


#### **2. 材质与纹理特征 (Material & Texture)**

材质是该风格的灵魂，它遵循“简化PBR”原则，即物理上可信，但视觉上简化。

- **主体质感：哑光/磨砂 (Matte Finish)**

- **主导通道：** 材质主要由 **基础颜色 (Base Color)** 决定，几乎没有复杂的纹理贴图。
    
- ~~**高光表现：** 高光非常微弱且柔和。这通过 **低镜面反射权重 (Specular Weight)** 和 **高粗糙度 (Specular Roughness)** 来实现。~~
    
- **关键材质分析：**

- **涂漆金属/塑料 (文件柜, 打印机外壳)：**
    
    - **物理属性：** 这是非金属材质（电介质）。光线与外层的油漆或塑料交互，而非内部的金属。
        
    - **PBR设置：** **金属度 (Metalness) 应为 0**。其质感完全由基础颜色、镜面反射和粗糙度控制。

---


- **皮革 (椅子)：**

- 相比其他物体，皮革有略强一点的光泽感。
    
- **PBR设置：** 粗糙度（Roughness）会比塑料稍低，使其高光更收敛一些。
    
- **半透明塑料 (饮水机桶)：**

- **视觉特征：** 不是完全透明，也无明显折射。光线可以在其内部发生散射，呈现柔和的半透明效果。
    
- **PBR设置：** 不应使用高 **透射 (Transmission)**，而应使用 **次表面散射 (Subsurface Scattering, SSS)** 来模拟光线在蓝色塑料内部的散射效果。



#### **3. 灯光与氛围特征 (Lighting & Atmosphere)**

灯光简洁、明确，旨在清晰地展示模型，并营造柔和、温暖的氛围。

- **主光源 (Key Light)：**

- **类型：** 单一、柔和的定向光源，极有可能是 **区域光 (Area Light)**。
    
- **特征：** 从斜上方（如左前或右前）照射，投射出方向统一且边缘 **极其柔和** 的阴影。阴影的柔和度是实现“模型感”的关键。
    
- **环境光/补光 (Fill/Ambient Light)：**

- **作用：** 均匀地提亮场景的暗部和阴影区域，确保没有“死黑”的角落。
    
- **特征：** 反射中没有复杂的环境细节，说明未使用高清的HDRI贴图。更可能是一个纯色的 **天光 (Skydome Light)** 或一个巨大的低强度补光。
    
- **色彩与背景 (Color & Background)：**

- **灯光色温：** 偏中性或微暖，与背景色调相匹配。
    
- **背景：** 干净的纯色背景（暖棕色），将观众的注意力完全集中在模型上。
    

### **三、 实践篇：Maya (Arnold) 实现最佳路径**

#### **Step 1: 基础设置 (Renderer & Project Setup)**

1. **设置项目：** `File > Set Project...` 确保所有文件管理有序。

2. **选择渲染器：** `Windows > Rendering Editors > Render Settings`，在 `Render Using` 下拉菜单中选择 `Arnold Renderer`。


#### **Step 2: 材质创建 (Material Creation)**

为不同类型的物体创建对应的 `aiStandardSurface` 材质。以下是核心参数建议：

|            |                |               |                     |                        |                         |                       |
| ---------- | -------------- | ------------- | ------------------- | ---------------------- | ----------------------- | --------------------- |
| **材质类型**   | **Base Color** | **Metalness** | **Specular Weight** | **Specular Roughness** | **Transmission Weight** | **Subsurface Weight** |
| **通用哑光塑料** | 目标颜色           | 0.0           | ~0.2                | ~0.6 - 0.8             | 0.0                     | 0.0                   |
| **涂漆金属**   | 目标颜色 (如深灰)     | **0.0**       | ~0.3                | ~0.5 - 0.7             | 0.0                     | 0.0                   |
| **皮革**     | 棕色/黑色          | 0.0           | ~0.35               | ~0.4 - 0.5             | 0.0                     | 0.0                   |
| **半透明水桶**  | 浅蓝色            | 0.0           | ~0.3                | ~0.4                   | **0.0**                 | **~0.3 - 0.5**        |

- **水桶材质补充：** 在 `Subsurface` 卷展栏下，将 `SSS Color` 设置为明亮的蓝色，并适当调整 `Radius`（半径）来控制光线散射的深度。


#### **Step 3: 灯光布置 (Lighting Setup)**

1. **创建主光源 (Key Light):**

- `Arnold > Lights > Area Light`。
    
- 将其放置在场景的斜上方45度角位置。
    
- **关键步骤：** **显著增大 Area Light 的尺寸**。光源越大，阴影边缘越柔和。
    
- 调整 `Intensity` (强度) 和 `Exposure` (曝光) 直到获得理想的亮度。
    
2. **创建环境光 (Ambient Light):**

- `Arnold > Lights > Skydome Light`。
    
- **关键步骤：** 在 `Skydome Light` 的 `Color` 属性上，连接一个 `aiColorCorrect` 节点，或者直接选择一个与背景匹配的 **纯色** (如暖棕色)。**不要使用HDRI贴图**。
    
- 将 `Intensity` (强度) 设置为一个很低的值（例如 0.1 - 0.3），它的唯一作用是照亮阴影。
    

#### **Step 4: 摄像机与渲染 (Camera & Render Settings)**

1. **设置摄像机 (Camera):**

- 创建一个新的透视摄像机 `Create > Cameras > Camera`。
    
- **关键步骤：** 为了模拟参考图的弱透视/正交感，选中摄像机，在属性编辑器中找到 `Focal Length` (焦距)，将其设置为一个较高的值，如 **85mm** 或 **100mm**。然后将摄像机拉远，直到构图合适。高焦距会压缩空间，产生“微缩模型”的视觉效果。
    
2. **设置背景颜色 (Background):**

- 打开渲染设置 (`Render Settings`)。
    
- 在 `Arnold Renderer` 标签页下，找到 `Environment > Background`，创建一个 `aiRaySwitch` 节点。
    
- 将 `aiRaySwitch` 的 `Camera` 输入端口连接上一个 `aiStandardSurface` 材质，并将该材质的 `Base Color` 设为最终的背景色。
    
3. **最终渲染设置 (Final Render):**

- 在 `Arnold Renderer` 标签页下，提高 `Camera (AA)` 的采样值（例如 4 或 5）以获得平滑的抗锯齿效果。
    
- 根据需要适当提高 `Specular` 和 `Subsurface` 的采样值，以减少材质噪点。
    

### **四、 课后练习与总结**

- **练习任务：** 从参考场景中挑选 2-3 个不同材质的物件（例如打字机、椅子、文件柜），独立完成建模、材质、灯光和渲染的全过程。

- **核心要点回顾：**

- **风格是选择的结果：** 刻意简化的模型、哑光的材质、柔和的光影共同构成了最终风格。
    
- **PBR不是绝对照片写实：** 理解PBR参数的物理意义，才能灵活地用它来创造非写实的风格化效果。
    
- **灯光决定氛围：** 简单的灯光设置往往能产生最干净、最高级的结果。柔和的阴影是卡通/模型感的关键。
    
- **相机也是画笔：** 利用高焦距镜头可以有效地控制画面的透视感，强化艺术风格。