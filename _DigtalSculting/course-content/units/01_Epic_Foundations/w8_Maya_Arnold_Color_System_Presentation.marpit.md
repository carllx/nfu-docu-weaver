---
marp: true
theme: NFUPPT
footer: 'Maya Arnold 渲染基础 - 颜色系统 | Week 8'
paginate: true
header: 'Color System & Material Workflow'
---

## 为什么我们需要一个科学的颜色系统？

- 从"打补丁"到"可预测"
- 系统化思维
- 数字资产的可互换性

![bg fit left:50% vertical](https://i.imgur.com/ywJTHRB.webp)


<!-- 
[Opener] 欢迎来到 Maya Arnold 渲染基础课程的第八周。今天我们不是在学习"如何调整滑块"，而是在构建一个完整的思维体系。

[Expansion]
从"打补丁"到"可预测": 过去我们遇到问题的方式是"这个椅子看不清楚，加个灯光吧"——这是没有原则的打补丁式解决问题，我们今天要改变这种思维。
系统化思维: 我们要建立一套科学的工作流程，让每一个决策都基于原则，而不是凭感觉。
数字资产的可互换性: 最终目标是构建可预测、可量化、可在不同项目间互换的专业数字资产。

[Evidence] "当你确定色卡验证了布光的合理性，遇到椅子看不清楚的时候，就能排除灯光，聚焦于材质属性上找问题。"

[Action: 提问] 问学生："你们在之前的项目中，是否遇到过反复调整灯光和材质，却不知道问题出在哪里的情况？"

[V-Prompt] A line drawing illustration of a chaotic workshop on the left transforming into an organized modern factory assembly line on the right, in the iconic 1930s rubber hose animation style. The left side shows scattered tools and confused characters with simple round forms and pie-cut eyes, while the right side displays orderly workflow with confident characters wearing classic white gloves. Bold inkblot style black lines on stark white background. The composition conveys a sense of breakthrough from chaos to systematic order. Playful yet instructional atmosphere. Square aspect ratio.
-->

---

## 光影的"试衣镜"：三色卡系统是什么？

- 18% 中灰卡
- 高白卡
- 低黑卡

![bg fit left:50% vertical](https://i.imgur.com/pXIkBMt.webp)


<!-- 
[Opener] 在你设置好三点布光之后，在给任何模型上色之前，我们要做一个极其专业且关键的步骤。

[Expansion]
18% 中灰卡: 这是我们整个场景的"锚"和"色彩诊断员"，是专业摄影和电影行业的测光标准，RGB值为0.18（线性空间）。
高白卡: 这是"高光诊断员"，检查灯光是否过曝，RGB值为0.8。
低黑卡: 这是"阴影诊断员"，检查阴影是否太黑失去细节，RGB值为0.03。

[Evidence] 这三个色卡是我们光影的"试衣镜"，是场景的"真相探测器"——它们用最简单、最诚实的方式告诉我们灯光的真相。

[Action: 演示] 打开 Maya，准备在场景中创建这三个标准校准片。

[V-Prompt] A line drawing illustration of three friendly character cards in 1930s rubber hose animation style - a white card, a middle gray card, and a black card, each with expressive pie-cut eyes and classic white gloves. They stand together like a team, built from simple round geometric forms. The middle gray card stands in the center as the leader. Bold inkblot style black lines on white background, conveying a sense of reliability and scientific precision with playful charm. Square aspect ratio.
-->

---

## 如何创建物理精确的三色卡？

- 创建 aiStandardSurface 材质
- 设置精确的 RGB 线性值
- 关闭高光反射（Specular Weight=0）
- 设置 Metalness=0, Roughness=0.8

![bg fit left:50% vertical](https://i.imgur.com/8ilwqZ0.webp)


<!-- 
[Opener] 现在让我们动手创建这三个标准色卡。记住，这不是随意的"好看的灰色"，而是物理精确的数值。

[Expansion]
创建 aiStandardSurface 材质: 在 Maya 中，为每个色卡创建独立的 Arnold Standard Surface 材质球。
设置精确的 RGB 线性值: 中灰卡=0.18，高白卡=0.8，低黑卡=0.03（注意这是线性空间的值）。
关闭高光反射（Specular Weight=0）: 让色卡成为纯粹的哑光材质，不反射环境，只反射光线本身。
设置 Metalness=0, Roughness=0.8: 确保它们是非金属、高粗糙度的漫反射表面。

[Evidence] Kodak Color Separation Guide and Gray Scale 是电影行业的标准参考，我们的设置遵循同样的物理原则。

[Action: 演示] 逐步演示在 Hypershade 中创建材质、设置参数、赋予给场景中的三个平面对象。

[V-Prompt] A line drawing illustration of a Maya software interface with three material spheres displayed in 1930s rubber hose animation style. The spheres show white, gray, and black materials with simple round forms and expressive details. A cartoon character with pie-cut eyes and white gloves points at RGB value sliders showing 0.18, 0.8, and 0.03. Bold inkblot black lines on white background. Technical yet approachable atmosphere. Square aspect ratio.
-->
---


![](https://i.imgur.com/wtKvh91.webp)


---

## 三位"诚实的朋友"各自的使命是什么？

- 高光诊断员（白卡）：检测过曝
- 阴影诊断员（黑卡）：检测死黑
- 色彩照妖镜（灰卡）：曝光基准+色偏检测

![bg fit left:50% vertical](https://i.imgur.com/c5NwwpO.webp)


<!-- 
[Opener] 这三张色卡不是装饰，它们各自有明确的诊断使命。让我们来认识这三位"诚实的朋友"。

[Expansion]
高光诊断员（白卡）：检测过曝: 如果白卡在渲染中变成一片死白没有细节，说明灯光过曝，场景中所有白色物体都会失去细节。
阴影诊断员（黑卡）：检测死黑: 如果黑卡在渲染中变成一坨死黑与背景无法区分，说明阴影太重，所有深色物体都会失去质感。
色彩照妖镜（灰卡）：曝光基准+色偏检测: 灰卡是中性的，如果它在渲染中偏黄、偏蓝或偏绿，那100%是灯光带有颜色——它是最重要的"锚"。

[Evidence] "在专业摄影和电影行业里，18%的中性灰是测光的标准。只要它在灯光下曝光正常，整个场景的曝光就基本准确了。"

[Action: 提问] 问学生："在你当前的场景渲染中，观察这三张卡片，它们告诉你什么信息？"

[V-Prompt] A line drawing illustration of three anthropomorphic cards in 1930s rubber hose animation style, each performing their diagnostic role. The white card holds a magnifying glass examining bright areas, the black card peers into shadows, and the gray card stands with a ruler as the anchor. Simple round geometric forms, pie-cut eyes, classic white gloves. Bold inkblot black lines on white background. Sense of scientific precision with playful detective atmosphere. Square aspect ratio.
-->

---

## 为什么用色卡而不是茶壶？分离变量原则

- 纯粹的哑光材质
- 不反射环境
- 只反射光线本身
- 先锁定灯光变量，再调整材质

![bg fit left:50% vertical](https://i.imgur.com/4uNKa9J.webp)


<!-- 
[Opener] 你可能会问："为什么用这三个朴素的方块，而不是直接用茶壶模型来测试呢？"

[Expansion]
纯粹的哑光材质: 色卡是完全不反光的漫反射表面，没有高光、没有金属反射。
不反射环境: 它们不会像金属那样反射周围环境，也不会像塑料那样有高光点。
只反射光线本身: 它们只做一件事——诚实地反射出光线本身的样子，没有任何干扰因素。
先锁定灯光变量，再调整材质: 这是CG行业的核心工作理念——分离变量，逐个击破！

[Evidence] "物体的最终颜色由两样东西决定：1. 物体本身的颜色（材质）；2. 打在它上面的光（灯光）。如果两者都复杂多变，出了问题你都不知道是灯没打好还是颜色没调对。"

[Action: 演示] 展示一个复杂材质（如金属茶壶）与简单色卡在同一灯光下的对比渲染。

[V-Prompt] A line drawing illustration showing two scenarios side by side in 1930s rubber hose animation style. Left: a confused character juggling multiple complex variables (lights, materials, reflections) with tangled lines. Right: a confident character methodically testing simple matte cards one by one. Simple round forms, pie-cut eyes, white gloves. Bold inkblot black lines on white background. Sense of methodical clarity defeating chaos. Square aspect ratio.
-->

---

## 行动指令：用三色卡验证你的布光

- 白卡过曝了吗？降低主光强度
- 黑卡看不清了吗？提高辅光或环境光
- 灰卡显示什么色调？中性还是艺术色调？
- 达到平衡后，你的光影舞台就准备好了

![bg fit left:50% vertical](https://i.imgur.com/1sNp2eo.webp)


<!-- 
[Opener] 理论讲完了，现在是实践时间。请看着你场景里的三张色卡，进行系统化的诊断。

[Expansion]
白卡过曝了吗？降低主光强度: 如果白卡是一片死白，说明 Key Light 太强，需要降低强度。
黑卡看不清了吗？提高辅光或环境光: 如果黑卡已经与背景融为一体，说明 Fill Light 或 Ambient Light 不足。
灰卡显示什么色调？中性还是艺术色调？: 观察灰卡是否偏色，决定这是你想要的艺术效果还是需要修正的问题。
达到平衡后，你的光影舞台就准备好了: 当三张卡片达到理想平衡状态，你就可以自信地进入上色环节了。

[Evidence] "花几分钟时间调整你的三点布光，直到这三张卡片达到理想平衡：白色不曝、黑色不死、灰色中性（或带有你想要的艺术色调）。"

[Action: 实操] 给学生5-10分钟时间，在自己的场景中调整布光，使用色卡进行验证。巡视并提供个别指导。

[V-Prompt] A line drawing illustration of a character in 1930s rubber hose animation style standing confidently on a stage with three cards, holding a light meter. The stage is well-lit with balanced lighting showing clear separation between highlights, midtones, and shadows. Simple round geometric forms, pie-cut eyes, white gloves. Bold inkblot black lines on white background. Sense of achievement and readiness. Square aspect ratio.
-->

---

Kodak Color Separation Guide and Gray Scale
![bg fit left:50% vertical](https://i.imgur.com/7vDNUmT.webp)

---

## Munsell 颜色系统：科学的色彩维度

- 色相（Hue）：颜色的种类
- 明度（Value）：颜色的明暗
- 饱和度（Chroma）：颜色的纯度
- 三维色彩空间的基础

![bg fit left:50% vertical](https://i.imgur.com/6db8uEr.webp)


<!-- 
[Opener] 现在我们的灯光已经校准完成，接下来进入配色阶段。但在随意选颜色之前，我们需要理解色彩的科学结构。

[Expansion]
色相（Hue）：颜色的种类: 红、橙、黄、绿、蓝、紫等基本颜色家族，这是色彩的"身份证"。
明度（Value）：颜色的明暗: 从黑到白的亮度层级，Value 5 是中间调，这是色彩的"高度"维度。
饱和度（Chroma）：颜色的纯度: 从灰色到纯色的距离，高饱和度鲜艳，低饱和度灰暗，这是色彩的"强度"维度。
三维色彩空间的基础: Munsell 系统将色彩组织成一个可量化的三维空间，而不是凭感觉选色。

[Evidence] Munsell 系统是艺术教育和工业设计的标准色彩理论基础，它让"这个颜色好看"变成"这个颜色在 Hue 5R Value 6 Chroma 8"。

[Action: 展示] 展示 Munsell 色彩空间的三维模型或交互工具（如 andrewwerth.com/color）。

[V-Prompt] A line drawing illustration of a three-dimensional color space in 1930s rubber hose animation style. A character with pie-cut eyes and white gloves explores a circular structure with vertical layers, pointing at different positions representing hue, value, and chroma. Simple round geometric forms. Bold inkblot black lines on white background. Sense of scientific discovery and spatial understanding. Square aspect ratio.
-->

---

## 结构化配色：Munsell 明度 + Itten 对比

- 主色（Primary）：中间调区域（Value 5-6）
- 辅色（Secondary）：暗部或亮部（Value 3-4 或 7-8）
- 点缀色（Accent）：最亮或最暗（对比焦点）
- 用理论指导配色，而非随机跳色

![bg fit left:50% vertical](https://i.imgur.com/1OhtRBt.webp)


<!-- 
[Opener] 有了 Munsell 的明度层级，我们可以开始构建结构化的配色方案，而不是凭感觉随机选色。

[Expansion]
主色（Primary）：中间调区域（Value 5-6）: 场景中占比最大的颜色应该控制在中间明度，既不太亮也不太暗，视觉舒适。
辅色（Secondary）：暗部或亮部（Value 3-4 或 7-8）: 第二层颜色通过明度对比来建立层次感。
点缀色（Accent）：最亮或最暗（对比焦点）: 最小比例的颜色拥有最极端的明度，形成视觉焦点，吸引注意力。
用理论指导配色，而非随机跳色: 结合 Itten 的互补色对比或冷暖对比，让点缀色的选择具有结构意义。

[Evidence] "用专业的色彩理论指导'点缀色'的选择，而不是随机跳色。例如，使用互补色对比或冷暖对比。"

[Action: 展示] 展示一个实际场景的配色分解，标注出主色、辅色、点缀色各自的 Munsell Value 层级。

[V-Prompt] A line drawing illustration of a layered pyramid structure in 1930s rubber hose animation style. The base is largest (labeled 60% Primary in middle value), middle layer is medium (30% Secondary in contrasting value), and top is smallest (10% Accent in extreme value). A character with pie-cut eyes and white gloves stands beside pointing upward. Bold inkblot black lines on white background. Sense of structural hierarchy and balance. Square aspect ratio.
-->

---

## 60-30-10 配色法则：平衡与和谐的黄金比例

- 60% 主色：占据主导地位
- 30% 辅色：建立对比与层次
- 10% 点缀色：创造视觉焦点
- 广泛应用于设计各领域

![bg fit left:50% vertical](https://i.imgur.com/Z2jWF0m.webp)


<!-- 
[Opener] 现在我们引入一个跨领域的实用法则——60-30-10 配色法则，它是平衡与和谐的黄金比例。

[Expansion]
60% 主色：占据主导地位: 场景中占比最大的颜色，定义整体氛围和基调，通常是中性或低饱和度的颜色。
30% 辅色：建立对比与层次: 第二层颜色通过与主色形成对比来创造视觉兴趣，占据中等比例。
10% 点缀色：创造视觉焦点: 最小比例但最抢眼的颜色，通常是高饱和度或极端明度，引导观众视线。
广泛应用于设计各领域: 这个法则被用于室内设计、时尚搭配、UI设计、场景设计等各个领域。

[Evidence] "60-30-10 法则是一项设计原则，旨在创造平衡、和谐且视觉上令人愉悦的调色板。"

[Action: 预告] 接下来我们将通过多个跨领域的实际案例，来理解这个法则的威力。

[V-Prompt] A line drawing illustration of three paint buckets in 1930s rubber hose animation style, showing size ratio of 60-30-10. The largest bucket is calm and stable, medium bucket is supportive, smallest bucket is vibrant and energetic. Each bucket has pie-cut eyes and the character is carefully balancing them. Simple round forms, white gloves. Bold inkblot black lines on white background. Sense of proportion and harmony. Square aspect ratio.
-->

---

## 案例：职场着装的 60-30-10

- 60% 米色风衣（主色，建立基调）
- 30% 黑色西装裤套装（辅色，层次对比）
- 10% 蓝色条纹衬衫（点缀，细节精致）
- 专业干练形象

![bg fit left:50% vertical](https://i.imgur.com/3mgJtkr.webp)


<!-- 
[Opener] 让我们从时尚领域开始。看这套职场着装，它完美演示了 60-30-10 的威力。

[Expansion]
60% 米色风衣（主色，建立基调）: 米色风衣占据视觉主导，定义了整体的"优雅、专业、温和"的基调。
30% 黑色西装裤套装（辅色，层次对比）: 黑色占据中等比例，与米色形成明暗对比，构建层次感和正式感。
10% 蓝色条纹衬衫（点缀，细节精致）: 蓝色只占10%，但作为内搭细节，让整体不单调，展现品味。
专业干练形象: 这个比例让整体既统一又有重点，既专业又不呆板。

[Evidence] 时尚设计师使用这个法则来避免"颜色太多太乱"或"颜色太少太平淡"的问题。

[Action: 提问] 问学生："如果这套搭配把蓝色衬衫换成红色西装，还符合60-30-10法则吗？效果会如何？"

[V-Prompt] A line drawing illustration of a professional businessperson in 1930s rubber hose animation style, wearing a beige trench coat (60%), black suit pants (30%), and a blue striped shirt detail (10%). Simple round body form, pie-cut eyes, classic white gloves holding a briefcase. Bold inkblot black lines on white background. Sense of professionalism and balanced elegance. Square aspect ratio.
-->

---

## 案例：晚装搭配的 60-30-10

- 60% 黑色上衣与外套（主色，优雅基底）
- 30% 酒红色半身裙（辅色，增添魅力）
- 10% 金属金色手包（点缀，提升精致）
- 优雅高级形象

![bg fit left:50% vertical](https://i.imgur.com/7vMxczB.webp)


<!-- 
[Opener] 再看这套晚装搭配，同样的法则，完全不同的氛围——从职业转向优雅晚宴。

[Expansion]
60% 黑色上衣与外套（主色，优雅基底）: 黑色占据主导，营造沉稳、优雅、高级的基调，这是晚装的经典选择。
30% 酒红色半身裙（辅色，增添魅力）: 酒红色占30%，与黑色形成冷暖对比和色相对比，增添女性魅力和视觉兴趣。
10% 金属金色手包（点缀，提升精致）: 金色手包虽小，但作为金属质感的高光点，瞬间提升整体的精致度和档次感。
优雅高级形象: 注意这里的点缀色不仅是色相的选择，还包括了材质（金属）的对比。

[Evidence] 这个案例展示了60-30-10法则在不同场合的灵活应用——法则不变，但颜色选择可以完全不同。

[Action: 对比] 将这套晚装与上一页的职场装对比，让学生理解"同一法则，不同情绪"的设计思维。

[V-Prompt] A line drawing illustration of an elegant evening wear character in 1930s rubber hose animation style. Black top and jacket (60%), burgundy skirt (30%), and a small golden metallic clutch (10%). Simple round feminine form, pie-cut eyes, classic white gloves. Bold inkblot black lines on white background. Sense of sophisticated elegance and glamour. Square aspect ratio.
-->

---

## 案例：浅色模式 UI 的 60-30-10

- 60% 纯白色背景（主色，视觉呼吸）
- 30% 品牌淡色卡片（辅色，内容承载）
- 10% 亮色按钮（点缀，交互引导）
- 清晰舒适界面

![bg fit left:50% vertical](https://i.imgur.com/3PAnB2C.webp)

<!-- 
[Opener] 现在我们跳到数字产品设计领域。浅色模式的 UI 界面如何使用 60-30-10？

[Expansion]
60% 纯白色背景（主色，视觉呼吸）: 白色背景占据绝大部分空间，提供视觉呼吸感和清晰度，减少认知负担。
30% 品牌淡色卡片（辅色，内容承载）: 淡色（如浅灰、浅蓝）的卡片或区块占30%，用于承载内容和构建信息层次。
10% 亮色按钮（点缀，交互引导）: 高饱和度的按钮（如蓝色、绿色）占10%，明确指示交互功能，引导用户操作。
清晰舒适界面: 这个比例确保界面既不单调也不花哨，信息清晰且交互明确。

[Evidence] 主流 UI 设计系统（如 Material Design、Apple HIG）都隐含使用这个比例原则。

[Action: 展示] 展示一个实际的 App 界面（如移动应用首页），用标注工具圈出 60%、30%、10% 各自对应的区域。

[V-Prompt] A line drawing illustration of a smartphone interface in 1930s rubber hose animation style. Large white background (60%), medium-sized content cards in light gray (30%), and small bright blue buttons (10%). A tiny character with pie-cut eyes and white gloves interacts with the interface. Bold inkblot black lines on white background. Sense of clarity and user-friendly design. Square aspect ratio.
-->

---

## 案例：深色模式 UI（Spotify 风格）

- 60% 黑色主背景（主色，沉浸氛围）
- 30% 深灰色元素（辅色，层次构建）
- 10% 亮绿色交互（点缀，品牌辨识）
- 专注沉浸体验


![bg fit left:50% vertical](https://i.imgur.com/Co428Jl.webp)



<!-- 
[Opener] 深色模式是另一个经典案例。以 Spotify 为代表的深色界面，如何用 60-30-10 营造沉浸感？

[Expansion]
60% 黑色主背景（主色，沉浸氛围）: 黑色背景占据主导，营造沉浸式的专注氛围，减少眼睛疲劳（尤其在夜间）。
30% 深灰色元素（辅色，层次构建）: 深灰色的卡片、列表、分割线占30%，与黑色背景形成微妙层次，构建信息架构。
10% 亮绿色交互（点缀，品牌辨识）: Spotify 标志性的亮绿色按钮和图标占10%，既是交互引导，也是强烈的品牌标识。
专注沉浸体验: 深色模式的60-30-10让用户在低光环境下聚焦内容，减少干扰。

[Evidence] Spotify、YouTube、Twitter 等平台的深色模式都遵循这个比例原则，只是点缀色根据品牌而不同。

[Action: 对比] 将深色模式与浅色模式并排对比，让学生理解"同一法则在不同色调下的应用"。

[V-Prompt] A line drawing illustration of a music streaming interface in 1930s rubber hose animation style. Black background (60%), dark gray content cards (30%), and bright green play buttons (10%). A character with headphones, pie-cut eyes, and white gloves enjoys music. Bold inkblot black lines on white background. Sense of immersive focus and brand identity. Square aspect ratio.
-->

---

## 案例：柔和宁静风客厅

- 60% 柔和灰色墙面（主色，舒适基调）
- 30% 白色家具（辅色，清爽对比）
- 10% 蓝色软装点缀（点缀，视觉焦点）
- 温馨居住氛围


![bg fit left:50% vertical](https://i.imgur.com/zTN3rII.webp)



<!-- 
[Opener] 回到物理空间。室内设计领域的 60-30-10 如何创造居住氛围？

[Expansion]
60% 柔和灰色墙面（主色，舒适基调）: 墙面、地板等大面积空间使用柔和灰色，定义整体的"宁静、温和、舒适"基调。
30% 白色家具（辅色，清爽对比）: 沙发、桌子等家具使用白色，与灰色墙面形成明度对比，增加清爽感和层次。
10% 蓝色软装点缀（点缀，视觉焦点）: 抱枕、装饰画、花瓶等小面积蓝色软装，成为视觉焦点，打破单调，引导视线流动。
温馨居住氛围: 这个比例让空间既统一和谐，又有视觉兴趣点，适合长时间居住。

[Evidence] 室内设计师使用这个法则来平衡"大面积冷静"与"小面积活跃"，避免空间过于刺激或过于乏味。

[Action: 思考] 问学生："如果把这个客厅的10%点缀色从蓝色换成橙色，氛围会如何改变？"

[V-Prompt] A line drawing illustration of a cozy living room in 1930s rubber hose animation style. Soft gray walls (60%), white furniture including sofa and table (30%), and blue cushions and decor (10%). A relaxed character with pie-cut eyes and white gloves sits comfortably. Bold inkblot black lines on white background. Sense of calm serenity and comfortable living. Square aspect ratio.
-->

---

## 案例：大胆现代风厨房

- 60% 米色橱柜（主色，温暖基底）
- 30% 黑色台面（辅色，质感提升）
- 10% 金色五金件（点缀，精致细节）
- 现代高级质感


![bg fit left:50% vertical](https://i.imgur.com/vPbEc8p.webp)


<!-- 
[Opener] 再看一个更大胆的室内案例——现代厨房设计，如何用 60-30-10 营造高级感？

[Expansion]
60% 米色橱柜（主色，温暖基底）: 大面积的米色橱柜占主导，营造温暖、自然、高级的基调，避免厨房过于冷硬。
30% 黑色台面（辅色，质感提升）: 黑色大理石或石英石台面占30%，与米色形成明暗对比，瞬间提升质感和现代感。
10% 金色五金件（点缀，精致细节）: 金色的把手、水龙头、灯具占10%，作为金属光泽的点缀，增添精致度和奢华感。
现代高级质感: 注意这里同时运用了色相对比、明度对比和材质对比（哑光、亮光、金属）。

[Evidence] 高端厨房设计常用这个法则，因为厨房需要"实用且美观"——大面积耐看，小面积出彩。

[Action: 拓展] 引导学生思考："这个法则是否也适用于我们的 3D 场景设计？如何应用？"

[V-Prompt] A line drawing illustration of a modern kitchen in 1930s rubber hose animation style. Beige cabinets dominate (60%), black countertop in middle layer (30%), and golden hardware details like handles and faucet (10%). A chef character with pie-cut eyes and white gloves prepares food happily. Bold inkblot black lines on white background. Sense of modern sophistication and quality. Square aspect ratio.
-->

---

## 拓展：纹理与质感的 60-30-10

- 60% 大面积花纹（视觉焦点）
- 30% 小面积花纹（层次呼应）
- 10% 单一质感元素（平衡整体）
- 不仅是颜色，也是视觉密度

![bg fit left:50% vertical](https://i.imgur.com/bWzPv4h.webp)




<!-- 
[Opener] 60-30-10 法则不仅适用于颜色比例，也适用于纹理和视觉密度的分配。

[Expansion]
60% 大面积花纹（视觉焦点）: 如果一个元素（如墙纸、地毯）带有复杂花纹，让它占据60%，成为视觉主导。
30% 小面积花纹（层次呼应）: 第二层使用更小或更简单的花纹，与主花纹形成呼应和层次对比。
10% 单一质感元素（平衡整体）: 最后用10%的纯色或单一质感（如纯色抱枕、金属摆件）来平衡，避免过于繁复。
不仅是颜色，也是视觉密度: 这个法则的本质是"视觉重量"的平衡，可以应用于任何具有对比属性的元素。

[Evidence] "纹理延伸应用：大面积花纹为视觉焦点，小面积花纹呼应层次，单一质感元素平衡整体。"

[Action: 启发] 启发学生思考："在 3D 场景中，除了颜色，我们还能用这个法则分配什么？（材质、粗糙度、几何复杂度？）"

[V-Prompt] A line drawing illustration showing three fabric swatches in 1930s rubber hose animation style. Largest swatch has bold floral pattern (60%), medium swatch has small dots (30%), smallest swatch is solid texture (10%). A character with pie-cut eyes and white gloves examines them with a magnifying glass. Bold inkblot black lines on white background. Sense of layered texture and visual balance. Square aspect ratio.
-->
---

![](https://i.imgur.com/m2oWiwA.webp)

---

## Johannes Itten 色彩对比理论：超越比例的结构美学

- 七种色彩对比策略
- 从随机跳色到结构化配色
- 为"点缀色"提供科学依据
- 明度层级的对比深化

![bg fit left:50% vertical](https://i.imgur.com/HkWpz4w.webp)


<!-- 
[Opener] 60-30-10 告诉我们"比例"，但没有告诉我们"如何选色"。现在我们引入 Johannes Itten 的色彩对比理论。

[Expansion]
七种色彩对比策略: Itten 通过研究，提出了七种（后扩展为八种）利用色相、明度、饱和度属性进行色彩协调的科学方法。
从随机跳色到结构化配色: 不再是"我觉得这个颜色好看"，而是"我使用互补色对比来创造张力"或"我使用冷暖对比来营造氛围"。
为"点缀色"提供科学依据: 当你确定了60%主色和30%辅色后，Itten理论帮你科学地选择那10%的点缀色。
明度层级的对比深化: 结合 Munsell 的明度层级，Itten 的对比策略可以在浅、中、深三种明度下产生不同强度的效果。

[Evidence] "Johannes Itten 是最早定义并确立成功色彩组合策略的学者之一，他的理论至今仍是艺术教育的基石。"

[Action: 预告] 接下来我们将逐一学习这八种对比策略，每一种都能为你的配色提供明确的设计意图。

[V-Prompt] A line drawing illustration of a wise professor character in 1930s rubber hose animation style, standing before a large color wheel. The character has pie-cut eyes, classic white gloves, and holds a pointer. Seven radiating sections around the wheel represent different contrast types. Bold inkblot black lines on white background. Sense of scholarly wisdom and structured color theory. Square aspect ratio.
-->

---

## Itten 对比 1：饱和度对比

- 高饱和度 vs. 低饱和度
- 鲜艳与灰暗的并置
- 创造视觉强度差异
- 用于突出焦点或营造氛围

![bg fit left:50% vertical]()

<!-- 
[Opener] 第一种对比：饱和度对比。这是通过颜色的"纯度"差异来创造视觉兴趣。

[Expansion]
高饱和度 vs. 低饱和度: 将鲜艳的纯色与灰暗的低饱和度颜色并置，形成"强烈"与"平静"的对比。
鲜艳与灰暗的并置: 例如，一个鲜艳的红色按钮放在灰色背景上，瞬间成为视觉焦点。
创造视觉强度差异: 高饱和度吸引注意力，低饱和度作为背景退后，创造前后层次感。
用于突出焦点或营造氛围: 当你想让某个元素"跳出来"，使用饱和度对比是最直接的方法。

[Evidence] "饱和度对比由浅色度与深色度的并置，及其相对饱和度共同构成。"

[Action: 示例] 展示一个场景案例：灰色调的房间中，一个鲜红色的椅子——这就是饱和度对比的威力。

[V-Prompt] A line drawing illustration showing two color swatches side by side in 1930s rubber hose animation style. Left swatch is vibrant and energetic with radiating lines, right swatch is muted and calm. A character with pie-cut eyes and white gloves points to emphasize the contrast. Bold inkblot black lines on white background. Sense of intensity versus subtlety. Square aspect ratio.
-->

---

## Itten 对比 2：明暗对比

- 浅色度 vs. 深色度
- 黑白灰的力量
- 可应用于单色构图
- 最基础且最有力的对比


![bg fit left:50% vertical](https://i.imgur.com/L3B2ZWH.webp)







<!-- 
[Opener] 第二种对比：明暗对比。这是最古老、最基础、也最有力的对比方式。

[Expansion]
浅色度 vs. 深色度: 通过明度（Value）的差异——从亮到暗的并置——创造视觉张力。
黑白灰的力量: 即使完全不使用色相，仅用黑白灰，也能创造出强烈的视觉冲击和清晰的层次。
可应用于单色构图: 这种对比在单色（monochromatic）设计中特别重要，因为你只能依靠明度来构建层次。
最基础且最有力的对比: 人眼对明度差异的敏感度远高于色相差异，所以这是视觉清晰度的基础。

[Evidence] "明暗对比由浅色度与深色度的并置构成，可应用于单色构图中。"

[Action: 提醒] 提醒学生："在我们的三色卡系统中，白卡、灰卡、黑卡就是明暗对比的直接应用！"

[V-Prompt] A line drawing illustration showing a gradient from pure white to pure black in 1930s rubber hose animation style. A character with pie-cut eyes and white gloves stands at the transition point, one hand in light and one in shadow, emphasizing the dramatic contrast. Bold inkblot black lines. Sense of fundamental power and clarity. Square aspect ratio.
-->

---

## Itten 对比 3：面积对比（比例对比）

- 根据视觉重量分配面积
- 小面积高饱和，大面积低饱和
- 平衡视觉能量
- 60-30-10 的理论基础

![bg fit left:50% vertical](https://i.imgur.com/pHxtwGt.webp)




<!-- 
[Opener] 第三种对比：面积对比，也叫比例对比。这正是 60-30-10 法则的色彩理论基础！

[Expansion]
根据视觉重量分配面积: 不同颜色具有不同的"视觉重量"——黄色轻，紫色重；高饱和重，低饱和轻。
小面积高饱和，大面积低饱和: 如果一个颜色"很重"（如鲜红色），给它小面积；如果"很轻"（如浅灰色），给它大面积。
平衡视觉能量: 通过调整不同颜色的面积比例，让整体画面达到视觉平衡，而不是"头重脚轻"或"喧宾夺主"。
60-30-10 的理论基础: 这就是为什么点缀色通常是高饱和度——因为它的视觉重量大，只需要10%就能产生强烈存在感。

[Evidence] "面积对比的核心是根据色彩的视觉重量，为色彩分配成比例的区域大小，通过这种分配形成对比。"

[Action: 练习] 让学生尝试：如果场景中有一个鲜黄色的物体，它应该占多大面积才不会"过于刺眼"？

[V-Prompt] A line drawing illustration of a balance scale in 1930s rubber hose animation style. One side has a large pale shape (60%), the other has a tiny but vibrant shape (10%) that perfectly balances it. A character with pie-cut eyes and white gloves adjusts the scale carefully. Bold inkblot black lines on white background. Sense of proportional harmony and visual weight. Square aspect ratio.
-->

---

## Itten 对比 4：补色对比

- 色轮上的对立色
- 最强烈的色相对比
- 红-绿、蓝-橙、黄-紫
- 创造视觉张力与活力


![bg fit left:50% vertical](https://i.imgur.com/lGIm6Jl.webp)





<!-- 
[Opener] 第四种对比：补色对比。这是最经典、最强烈的色相对比策略。

[Expansion]
色轮上的对立色: 补色是色轮上位置相对的两种颜色，它们在色相上形成180度的对立关系。
最强烈的色相对比: 当补色并置时，会产生最强烈的视觉振动和对比效果，互相"激活"对方。
红-绿、蓝-橙、黄-紫: 经典的三对补色——它们在一起时会产生最大的视觉张力和能量。
创造视觉张力与活力: 适用于需要强烈视觉冲击、活力四射的设计，但需要谨慎使用面积比例（面积对比！）。

[Evidence] "补色对比由色轮上的对立色，或视觉感知上的对立色并置构成。"

[Action: 警告] 提醒学生："补色对比非常强烈，如果大面积使用会让人眼睛疲劳。通常用于小面积点缀色。"

[V-Prompt] A line drawing illustration of a color wheel in 1930s rubber hose animation style. Two characters with pie-cut eyes and white gloves stand on opposite sides of the wheel (red vs green position), pulling on a rope in a playful tug-of-war. Bold inkblot black lines on white background. Sense of opposing forces and vibrant energy. Square aspect ratio.
-->

---

## Itten 对比 5：同时对比（视场对比）

- 色彩边界的视觉振动
- 感知上的颜色变化
- 视觉错觉现象
- 用于创造动态感

![bg fit left:50% vertical](https://i.imgur.com/AkUxkl3.webp)

<!-- 
[Opener] 第五种对比：同时对比，也叫视场对比。这涉及一个有趣的视觉感知现象。

[Expansion]
色彩边界的视觉振动: 当某些颜色并置时，它们的边界会产生视觉上的"振动"或"闪烁"效果。
感知上的颜色变化: 同一个颜色在不同背景色下，会被感知为略有不同的颜色——这是人眼的适应性机制。
视觉错觉现象: 例如，灰色在白色背景上看起来更深，在黑色背景上看起来更浅——虽然它本身没有变化。
用于创造动态感: 设计师可以利用这个效应创造视觉上的动态感和不稳定感，或者避免这个效应以保持稳定。

[Evidence] "同时对比在色彩边界产生视觉上的振动时形成，利用这种对比可以实现一些有趣的视觉错觉。"

[Action: 演示] 展示经典的同时对比视觉错觉图（如同一灰色在不同背景下的感知差异）。

[V-Prompt] A line drawing illustration showing two identical gray squares on different backgrounds (one on white, one on black) in 1930s rubber hose animation style. A confused character with pie-cut eyes and white gloves looks back and forth between them with a magnifying glass. Wavy lines around the boundaries suggest visual vibration. Bold inkblot black lines. Sense of perceptual illusion and curiosity. Square aspect ratio.
-->

---

## Itten 对比 6：色相对比

- 不同色相的并置
- 色轮距离越远，对比越强
- 红-黄-蓝 vs. 红-橙-黄
- 控制对比强度


![bg fit left:50% vertical](https://i.imgur.com/0s1O2vX.webp)







<!-- 
[Opener] 第六种对比：色相对比。这是最直观的"不同颜色放在一起"的对比。

[Expansion]
不同色相的并置: 将不同的颜色家族（如红色、蓝色、黄色）放在一起，形成色相层面的对比。
色轮距离越远，对比越强: 两个颜色在色轮上的距离越远（如红色和蓝色），它们的对比就越强烈；距离越近（如红色和橙色），对比就越温和。
红-黄-蓝 vs. 红-橙-黄: 前者是跨越色轮的强烈对比，后者是相邻色相的柔和对比——不同强度服务不同设计意图。
控制对比强度: 你可以通过调整色相之间的"距离"来精确控制画面的视觉张力——从和谐到冲突。

[Evidence] "色相对比由不同色相的并置构成，色相在色轮上的距离越远，形成的对比效果就越强。"

[Action: 练习] 让学生在色轮上选择三个颜色：一组相邻（弱对比），一组对立（强对比），对比两者的视觉效果。

[V-Prompt] A line drawing illustration of a color wheel with radiating spokes in 1930s rubber hose animation style. Two characters with pie-cut eyes and white gloves stand at different positions - one pair close together (weak contrast), one pair far apart (strong contrast). Arrows show the distance between them. Bold inkblot black lines on white background. Sense of measurable contrast intensity. Square aspect ratio.
-->

---

## Itten 对比 7：原色对比

- 红、黄、蓝的并置
- 最基础的色相组合
- 儿童化、纯粹感
- 强烈的视觉冲击

![bg fit left:50% vertical](https://i.imgur.com/R7WffPE.webp)





<!-- 
[Opener] 第七种对比：原色对比。这是色相对比的一个特殊案例——使用最基础的三原色。

[Expansion]
红、黄、蓝的并置: 将红色、黄色、蓝色这三种原色（无法通过其他颜色混合得到的颜色）放在一起。
最基础的色相组合: 这是色彩理论中最"纯粹"的组合，因为所有其他颜色都可以由它们混合而成。
儿童化、纯粹感: 原色组合常给人"明亮、欢快、简单、直接"的感觉，常用于儿童产品或需要高辨识度的设计。
强烈的视觉冲击: 三种原色同时出现时，会产生非常强烈的视觉冲击——想想乐高的品牌色、超人的服装。

[Evidence] "原色对比由原色色相的并置构成。"

[Action: 品牌案例] 展示使用原色对比的经典品牌（如 Google、LEGO、Superman），让学生理解这种对比的视觉特征。

[V-Prompt] A line drawing illustration of three primary color paint buckets (red, yellow, blue) in 1930s rubber hose animation style. Each bucket is a cheerful character with pie-cut eyes and white gloves, holding hands in a circle. Bold inkblot black lines on white background. Sense of fundamental purity and vibrant cheerfulness. Square aspect ratio.
-->

---

## Itten 对比 8：冷暖对比

- 暖色调 vs. 冷色调
- 红橙黄 vs. 蓝绿紫
- 创造情绪与氛围
- 空间感与距离感

![bg fit left:50% vertical](https://i.imgur.com/NBq1m7d.webp)

<!-- 
[Opener] 第八种对比：冷暖对比。这是最具"情绪性"和"空间性"的色彩对比。

[Expansion]
暖色调 vs. 冷色调: 将被感知为"温暖"的颜色（红、橙、黄）与被感知为"寒冷"的颜色（蓝、绿、紫）并置。
红橙黄 vs. 蓝绿紫: 暖色让人联想到火、阳光、温暖；冷色让人联想到水、冰、阴影——它们传递完全不同的情绪。
创造情绪与氛围: 暖色激发活力、热情、兴奋；冷色营造平静、专业、距离感——冷暖对比可以在画面中同时创造这两种情绪。
空间感与距离感: 暖色在视觉上"前进"（显得更近），冷色"后退"（显得更远）——可以用来创造空间深度。

[Evidence] "冷暖对比由被认定为'暖色调'或'冷色调'的色相并置构成。"

[Action: 场景应用] 问学生："在你的 3D 场景中，如何用冷暖对比来引导观众的视线？让焦点物体用暖色，背景用冷色？"

[V-Prompt] A line drawing illustration showing two characters in 1930s rubber hose animation style. One warm character (red-orange tones) radiates heat waves and energy, while one cool character (blue tones) emanates calm and icy clarity. They stand side by side in contrast. Bold inkblot black lines on white background. Sense of emotional and spatial contrast. Square aspect ratio.
-->

---

## PBR 材质分类：与物理对话

- 电介质（Dielectric）：非金属
- 导体（Conductor）：金属
- 物理参数定义，而非描述标签
- Standard Surface 材质的核心

![bg fit left:50% vertical](https://i.imgur.com/Vf4YghU.webp)


<!-- 
[Opener] 现在我们从色彩理论转向技术实践。当你为场景中的物体赋予材质时，不要说"这是塑料"，而要说"这是 IOR 1.5 的电介质"。

[Expansion]
电介质（Dielectric）：非金属: 世界上绝大多数物体——塑料、木头、皮肤、水、玻璃——它们的核心物理属性是折射率（IOR）。
导体（Conductor）：金属: 金属的物理特性是吸收光线并产生带颜色的反射，它们不使用 IOR，而是用 Metalness 开关来定义。
物理参数定义，而非描述标签: 从"这看起来像塑料"转变为"这是 IOR 1.5、Roughness 0.3、Base Color sRGB 的电介质"。
Standard Surface 材质的核心: Maya Arnold 的 Standard Surface 材质基于 PBR 原理，把世界分成这两大物理家族。

[Evidence] "在现代 PBR（Physically Based Rendering）流程中，描述性的'标签'是不够的，我们要用物理参数来定义材质。"

[Action: 演示] 打开 Maya，创建一个 Standard Surface 材质球，展示 Specular IOR 和 Metalness 两个关键参数。

[V-Prompt] A line drawing illustration showing a split scene in 1930s rubber hose animation style. Left side shows various dielectric objects (plastic, wood, glass) with light refracting through them. Right side shows metallic objects (gold, copper, steel) with colored reflections. A scientist character with pie-cut eyes, white gloves, and a lab coat examines them. Bold inkblot black lines on white background. Sense of scientific classification and physical accuracy. Square aspect ratio.
-->

---

## 白熔炉测试：验证物理准确性

- 思想实验：纯白恒定环境
- 能量守恒定律
- 材质不应比环境更亮或更暗
- PBR 材质的验证标准

![bg fit left:50% vertical](https://i.imgur.com/Ns9zUxr.webp)


<!-- 
[Opener] 我们怎么知道一个材质设置是"物理准确"的？行业里有一个经典的验证方法——白熔炉测试。

[Expansion]
思想实验：纯白恒定环境: 想象把你的材质球放进一个内部完全纯白、亮度恒定的球体环境中（就像一个白色的熔炉）。
能量守恒定律: 根据物理学的能量守恒定律，这个材质球接收的光能应该等于它反射和吸收的光能总和。
材质不应比环境更亮或更暗: 如果材质看起来比白色环境更亮，说明它"凭空产生"了能量（违反物理）；如果太暗，说明它"吞噬"了过多能量（也不符合真实材质）。
PBR 材质的验证标准: 一个好的 PBR 材质在任何粗糙度下都应该通过这个测试——这提醒我们不要凭感觉乱调参数。

[Evidence] "这提醒我们，不要凭感觉乱调参数，而要遵循物理规律。"

[Action: 演示] 在 Maya 中创建一个 HDR 白色环境，放置一个测试球体，展示符合和不符合能量守恒的材质对比。

[V-Prompt] A line drawing illustration of a material sphere inside a pure white spherical furnace in 1930s rubber hose animation style. A character with pie-cut eyes, white gloves, and safety goggles observes through a viewing window, holding an energy meter. The sphere should appear balanced, neither glowing nor absorbing excessively. Bold inkblot black lines on white background. Sense of scientific rigor and energy conservation. Square aspect ratio.
-->

---

## OCIO 色彩管理：数字世界的翻译器

- 场景参考（Scene-Referred）：ACEScg
- 显示参考（Display-Referred）：sRGB
- 两个世界的准确翻译
- 解决"导入就变色"问题

![bg fit left:50% vertical]()

<!-- 
[Opener] 你是否遇到过：贴图在 Photoshop 里正常，导入 Maya 就变暗了？这不是软件的 bug，而是你缺少色彩管理策略。

[Expansion]
场景参考（Scene-Referred）：ACEScg: 这是我们的工作空间，一个无限的、线性的物理世界，光照强度可以非常高（如太阳），所有计算在真实物理环境下进行。
显示参考（Display-Referred）：sRGB: 这是显示器能看到的有限世界，你的屏幕只能显示有限范围的颜色和亮度。
两个世界的准确翻译: 色彩管理（OCIO/ACES）的核心任务就是在这两个世界之间进行准确的"翻译"，确保数据不失真。
解决"导入就变色"问题: 当你理解了这两个世界，就能解决为什么贴图"变色"——因为缺少正确的输入色彩空间设置。

[Evidence] "现代流程使用 OCIO（OpenColorIO）和 ACES 标准。核心思想很简单：我们要把色彩处理分成两个世界。"

[Action: 类比] 用"翻译官"的类比帮助学生理解：ACEScg是"物理语言"，sRGB是"显示器语言"，OCIO是"翻译官"。

[V-Prompt] A line drawing illustration showing two worlds connected by a bridge in 1930s rubber hose animation style. Left world is infinite and radiating intense light rays (Scene-Referred ACEScg), right world is a contained monitor display (Display-Referred sRGB). A translator character with pie-cut eyes and white gloves stands on the bridge holding documents. Bold inkblot black lines on white background. Sense of connection between infinite and finite realms. Square aspect ratio.
-->

---

## IDT 与 ODT：输入输出翻译官

- IDT（Input Device Transform）：输入翻译
- ODT（Output Device Transform）：输出翻译
- sRGB 贴图 → ACEScg 工作空间 → sRGB 显示
- 完整的色彩管理流程

![bg fit left:50% vertical]()

<!-- 
[Opener] 色彩管理的核心机制是两个"翻译官"：IDT 和 ODT。理解它们，你就掌握了色彩管理的精髓。

[Expansion]
IDT（Input Device Transform）：输入翻译: 当你导入一张 sRGB 贴图时，IDT 将它从"显示参考"准确地翻译回"场景参考"的 ACEScg 线性空间，才能参与物理光照计算。
ODT（Output Device Transform）：输出翻译: 渲染完成后，ODT 将场景中无限的光照信息翻译成你的 sRGB 显示器能看懂的有限图像，这个过程叫色调映射（Tone Mapping）。
sRGB 贴图 → ACEScg 工作空间 → sRGB 显示: 这是完整的流程：输入时用 IDT"解码"，工作时在 ACEScg 线性空间计算，输出时用 ODT"编码"。
完整的色彩管理流程: 只有当这三个环节都正确设置，你的颜色才是准确的、可预测的、跨软件一致的。

[Evidence] 流程图展示：贴图文件 → IDT → ACEScg 工作空间 → ODT → 显示器。

[Action: 演示] 打开 Maya 的色彩管理设置（Preferences → Color Management），展示如何设置 Rendering Space 为 ACEScg，View Transform 为 sRGB。

[V-Prompt] A line drawing illustration showing a production pipeline in 1930s rubber hose animation style. Left: a file icon enters through "IDT Gate" operated by a character. Middle: the file travels through "ACEScg Workspace" (a factory with gears). Right: it exits through "ODT Gate" to a monitor. Characters with pie-cut eyes and white gloves manage each stage. Bold inkblot black lines on white background. Sense of systematic workflow. Square aspect ratio.
-->

---

## 数据不是颜色：RAW 空间的关键规则

- Roughness、Normal、Metalness 是数学数据
- 不是颜色信息
- 必须设置为 RAW 或 Utility - Raw
- 错误设置导致物理错误渲染

![bg fit left:50% vertical]()

<!-- 
[Opener] 这是新手最容易犯的致命错误！请记住这条铁律：数据贴图不是颜色贴图！

[Expansion]
Roughness、Normal、Metalness 是数学数据: 这些贴图包含的是数学数值——0.8 的粗糙度就是 0.8，它不是"灰色"，它是数据。
不是颜色信息: 它们不需要被"感知"，不需要被"显示"，它们只需要被"计算"——所以不能经过任何色彩空间转换。
必须设置为 RAW 或 Utility - Raw: 当导入这类贴图时，必须在文件节点的 Color Space 属性中设置为 RAW，告诉 Maya"别碰它"。
错误设置导致物理错误渲染: 如果 Roughness 贴图被当成 sRGB 处理，它会被伽马校正，0.8 变成 0.64——你的材质在物理上就错了。

[Evidence] "一个 0.8 的粗糙度值就是 0.8，我们绝不希望它被色彩管理系统进行任何伽马校正或色调映射。"

[Action: 演示] 在 Maya 中导入一张 Roughness 贴图，展示正确设置（RAW）和错误设置（sRGB）的渲染差异对比。

[V-Prompt] A line drawing illustration showing two pipelines in 1930s rubber hose animation style. Top pipeline: data files (labeled 0.8) pass through a "DO NOT TOUCH - RAW" zone safely. Bottom pipeline: same files pass through a "Color Transform" machine and get distorted to 0.64, causing a character to panic. Bold inkblot black lines on white background. Sense of critical warning and data integrity. Square aspect ratio.
-->

---

## 命名规范：令牌化系统

- props_veh_ambulance_body_paint_MAT_v001
- 每个部分是一个"令牌"（Token）
- 可被机器读取和自动化处理
- 驱动大型项目的资产管理

![bg fit left:50% vertical]()

<!-- 
[Opener] 最后一个支柱：命名规范。这不是"习惯"，而是一种可被机器读取的"语法"。

[Expansion]
props_veh_ambulance_body_paint_MAT_v001: 这是一个完整的、结构化的命名示例——每个部分传递明确的信息。
每个部分是一个"令牌"（Token）: props（资产大类）、veh_ambulance（资产名）、body（组件）、paint（材质描述）、MAT（节点类型）、v001（版本号）。
可被机器读取和自动化处理: 有了这样的命名，脚本可以在一秒钟内找到所有"车辆"的"材质"节点，或自动替换所有 v001 为 v002。
驱动大型项目的资产管理: 在大型项目中，这能节省海量时间并减少人为错误——这是工业级管线的基础。

[Evidence] "一个好的命名，本身就是一段信息。我们把它拆分成不同的'令牌'。"

[Action: 练习] 让学生为自己场景中的一个材质写一个完整的令牌化命名，然后互相检查是否符合逻辑。

[V-Prompt] A line drawing illustration of a filing system in 1930s rubber hose animation style. A character with pie-cut eyes and white gloves organizes labeled folders on shelves. Each folder has clear token labels (props, veh, MAT, v001). A robot assistant scans and retrieves files automatically. Bold inkblot black lines on white background. Sense of systematic organization and automation. Square aspect ratio.
-->

---

## 三大支柱的融合：可预测的数字资产

- PBR 材质 → 物理身份
- OCIO 色彩管理 → 准确感知
- 命名规范 → 唯一 ID 与管线位置
- 从艺术家到架构师的思维转变

![bg fit left:50% vertical]()

<!-- 
[Opener] 现在，让我们回到最初的问题。大家看到了吗？这三个支柱不是孤立的，它们共同构建了一个完整的系统。

[Expansion]
PBR 材质 → 物理身份: Standard Surface 的物理参数定义了资产"是什么"——它的材料属性、光学行为、物理真实性。
OCIO 色彩管理 → 准确感知: 色彩空间管理确保这个资产在不同软件、不同显示器、不同渲染器下被"准确感知"，颜色不失真。
命名规范 → 唯一 ID 与管线位置: 令牌化命名赋予资产一个"身份证"和"在管线中的坐标"，让它可被追踪、版本控制、自动化管理。
从艺术家到架构师的思维转变: 这就是本课程的核心——从"我会画画"到"我会构建系统"，从感性创作到理性架构。

[Evidence] "三者合一，才构成了一个真正专业、健壮、可预测的数字资产。"

[Action: 思考题] "今天我们学习了一整套严格的'规则'。那么，艺术的创新在哪里？记住，大师之所以能打破规则，是因为他们首先深刻地理解了规则。"

[V-Prompt] A line drawing illustration showing three interlocking gears in 1930s rubber hose animation style, labeled PBR, OCIO, and Naming. At the center where they connect, a glowing digital asset emerges (a 3D object). Three characters with pie-cut eyes and white gloves each turn one gear collaboratively. Bold inkblot black lines on white background. Sense of systematic integration and professional craftsmanship. Square aspect ratio.
-->

