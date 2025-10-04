

## Handout
blender geometry nodes 3小时的课程大纲及讲义。以下是一个可能的课程大纲及讲义：

- 介绍：什么是 geometry nodes，它们可以用来做什么，如何在 blender 中启用和使用它们¹²³ （30分钟）
  - 讲义：geometry nodes 是一种节点系统，可以用来对几何数据进行程序化的控制和修改。它们可以用来创建和变形物体、散布物体或集合、生成曲线或网格、创建有机形状等等。要使用 geometry nodes，你需要在 blender 中添加一个 geometry nodes modifier，并在 modifier 的属性面板中打开节点编辑器。
- 基础：geometry nodes 的基本概念和组件，如何创建和连接节点，如何控制和修改几何数据²⁴ （60分钟）
  - 讲义：geometry nodes 的核心组件是节点、套接字和链接。节点是一种功能单元，可以接收和输出几何数据或其他类型的数据。套接字是节点上的小圆点，表示输入或输出端口。链接是连接两个套接字的线条，表示数据流向。要创建一个节点，你可以按 Shift + A 在节点编辑器中打开添加菜单，并选择你想要的节点类型。要连接两个套接字，你可以拖动一个套接字到另一个套接字上，并释放鼠标。要删除一个节点或链接，你可以按 X 键。
  - geometry nodes 中有不同类型的数据，如几何、属性、向量、数值等等。不同类型的数据有不同颜色的套接字，并且只能连接相同类型的套接字。几何数据包含了物体的顶点、边、面等信息，并且可以通过属性来访问或修改。属性是一种附加在几何元素上的数据，如位置、法线、颜色等等。要访问或修改属性，你可以使用 attribute 节点，并输入属性名。
- 实例：使用 geometry nodes 来实现一些常见的效果，如散布物体或集合，创建变形动画，生成曲线或网格¹²⁴ （60分钟）
  - 讲义：要散布物体或集合到另一个物体上，你可以使用 point distribute 和 point instance 节点，并将它们连接到原始物体的几何输出上。point distribute 节点会在原始物体表面生成随机分布的点；point instance 节点会将指定的物体或集合实例化到每个点上。
  - 要创建变形动画，你可以使用 transform 节点，并将它连接到原始物体或实例化后的几何输出上。transform 节点会对几何进行平移、旋转和缩放操作，并且可以通过数值输入或驱动器来控制动画参数。
  - 要生成曲线或网格，你可以使用 curve primitives 或 mesh primitives 节点，并将它们连接到空白的几何输入上。curve primitives 或 mesh primitives 节点会生成基本形状的曲线或网格，并且可以通过数值输入来调整参数。
- 进阶：使用 geometry nodes 来实现一些复杂的效果，如使用 SDFs 创建有机形状，
(-- ` SDFs in blender!` [youtube](https://youtu.be/sqDCPW85tuQ?t=1165))
![|200](https://i.ytimg.com/vi/sqDCPW85tuQ/hqdefault.jpg)


Source: Conversation with Bing, 3/6/2023(1) Assemble - Procedural Modeling And Animation With Blender'S Geometry Nodes. https://blendermarket.com/products/assemble---procedural-modeling-and-animation-with-blenders-geometry-nodes Accessed 3/6/2023.
(2) Blender geometry nodes fundamentals guide - Artisticrender.com. https://artisticrender.com/blender-geometry-nodes-fundamentals-guide/ Accessed 3/6/2023.
(3) Intro to Geometry Nodes using Blender 3.3 | Udemy. https://www.udemy.com/course/geonodes-intro-blender-v3point3/ Accessed 3/6/2023.
(4) Blender Geometry Nodes: Dynamic Outlines Part1 - Basics. https://www.youtube.com/watch?v=2dvMyBVRit0 Accessed 3/6/2023.
(5) New Advanced Geometry Nodes Course [$] - BlenderNation. https://www.blendernation.com/2022/10/27/new-advanced-geometry-nodes-course/ Accessed 3/6/2023.



## Concept, Components
60年
Sol LeWitt’s 纯洁的雕塑 (Components)
Sol LeWitt’s Wall Drawing series壁画系列(Form), 
雇佣或培训艺术家或者工匠, 给他们指定绘画规则例如: 如何画, 每笔花多长时间..
- 设计了一组指令，供另一个人遵循
- 想法变成了制造艺术的机器
- 想法成为了核心算法

70年
美学的重点是加强概念艺术强调观念而不是感官知觉
如果艺术品背后的想法比它作为物理[[Nature|事物的本质]]更重要，那么它需要被思考而不是被感知 -- Lucy Lippard (1973)  [[@2010bodenCreativityArtThree]]
一个想法(idea)代表一个粗略的心理结构
一个概念(concept) 是从广泛分析中发展出来的一个精致的概念。
看着鸟儿飞翔，我们有了建造飞机并征服天空的(概念/想法)。
数字雕塑是基于视觉材料..的(概念/想法)

 
[[Blender python animation duplicate]]
(-- `Awesome Procedural Curves Using Geometry Node in Blender – Set 3 (I-R) - skwrites` [skwrites](https://skwrites.in/awesome-procedural-curves-using-geometry-node-in-blender-set-3-i-r/))
![|200](https://i0.wp.com/85.128.224.35.bc.googleusercontent.com/wp-content/uploads/2022/02/image-3.png?fit=1855%2C902&ssl=1)


矢量 - Vector
数列
[1,2,3,4,5...]

## Procedural modeling
这是个非常有趣的问题。Blender的几何节点是一种使用**procedural modeling** (程序化建模)方法创建3D对象和场景的方式¹²。这意味着，你可以使用节点来定义生成几何体的规则和参数，而不是手动雕刻或编辑它。这允许有更多的灵活性、变化和创造性。


give me ten ways to introduce my students to geometry nodes is to show them how they can use them to create Conceptual Art inspired by some of the 20th century artists who experimented with shapless.


- Show them how to use **geometry proximity**⁶, **point distribute**⁶ and **point instance**⁶ nodes to create a Mondrian-like composition of colored squares on a grid⁷.
- Show them how to use **wave texture**⁵, **attribute color ramp**⁵ and **attribute randomize**⁵ nodes to create a Kandinsky-like painting of colorful circles with different sizes and rotations⁷.
- Show them how to use **convex hull**⁶, **join geometry**⁶ and **attribute mix**⁵ nodes to create a Hepworth-like sculpture of organic forms with holes and curves⁷.
- Show them how to use **bounding box**⁶, **duplicate elements**⁶ and **transform node**⁵ nodes to create a Warhol-like pop art image of repeated objects with different colors and orientations⁷.

These are just some examples of how you can use geometry nodes to create art based on 20th century artists. You can also encourage your students to explore other artists and styles, such as cubism, [[surrealism]], expressionism, minimalism, etc., and see what they can come up with using geometry nodes. I hope this helps you get started!

Source: Conversation with Bing, 3/6/2023(1) What Are Geometry Nodes In Blender? – blender base camp. https://www.blenderbasecamp.com/home/what-are-geometry-nodes-in-blender/ Accessed 3/6/2023.
(2) What Are Geometry Nodes In Blender? – blender base camp. https://www.blenderbasecamp.com/home/what-are-geometry-nodes-in-blender/ Accessed 3/6/2023.
(3) Geometry Nodes — Blender Manual. https://docs.blender.org/manual/en/latest/modeling/geometry_nodes/geometry/index.html Accessed 3/6/2023.
(4) Famous Artists Of The 20th Century. https://www.thefamouspeople.com/20th-century-artists.php Accessed 3/6/2023.
(5) Geometry Nodes — Blender Manual. https://docs.blender.org/manual/en/latest/modeling/geometry_nodes/index.html Accessed 3/6/2023.
(6) A Beginners Guide To Using Geometry Nodes In Blender. https://www.blenderbasecamp.com/home/a-beginners-guide-to-using-geometry-nodes-in-blender/ Accessed 3/6/2023.
(7) Geometry Nodes Workshop 2022 — Developer Blog. https://code.blender.org/2022/11/geometry-nodes-workshop-2022/ Accessed 3/6/2023.
(8) 20th Century | Smithsonian American Art Museum. https://americanart.si.edu/art/highlights/20th-century Accessed 3/6/2023.
(9) 20th century artists - WikiArt.org. https://www.wikiart.org/en/artists-by-century/20 Accessed 3/6/2023.
(10) 11 Most Famous 20th Century Artists and Paintings - Artst. https://www.artst.org/famous-20th-century-artists/ Accessed 3/6/2023.


## 随机生成抛物线

(-- `【Blender】随机生成抛物线` [bilibili](https://www.bilibili.com/video/BV1Lr4y147m9/?p=1&t=52))
![|200](http://i0.hdslb.com/bfs/archive/79e08399074ebff5d0fdfe14061da9ff9a67ba18.jpg@100w_100h_1c.png)
(-- `【Blender】准确的拖尾` [bilibili](https://www.bilibili.com/video/BV1Gt4y1J7XM/?t=37))
![|200](https://i0.hdslb.com/bfs/archive/775db62a5d7988c1c55abba01d53106c98da070f.jpg@100w_100h_1c.png)

(-- `Blender粒子拖尾` [bilibili](https://www.bilibili.com/video/BV1vt4y1t7om/?t=597))
(-- `blender制作粒子拖尾特效` [bilibili](https://www.bilibili.com/video/BV1zL4y1q7T3/?t=448))
blender particle along curve (-- `Limitations/ How to Animate Particles Along a Curve in Blender (Without Curve Guide) - Bonus Tutorial` [youtube](https://youtu.be/PYHOV3bVIG0?t=45)[youtube playlist](https://www.youtube.com/playlist?list=PL3GeP3YLZn5hNd8eLSC64RX3Cr2I9xu8o))
![|200](https://i.ytimg.com/vi/PYHOV3bVIG0/hqdefault.jpg)

使用几何节点在blender中生成随机抛物线有几种方法。一种方法是在**Instance on Points**节点之后使用**Translate Instances**节点，并将**Random Value**节点连接到**Translate Instance**节点的**Translation**上。另一种方法是使用一个自定义的节点组，可以根据字段变换对象，然后将**Random Value**节点连接到该节点组的输入上。你也可以在**Instance on Points**节点之前使用**Set Position**节点，并将**Random Value**节点连接到 **Set Position ** 节点的 **Offset ** 上。更多细节，你可以参考这些网页：

-  Randomizing values in Blender 3.0 Geometry Nodes
-  Random Value Node — Blender Manual
-  A Beginners Guide To Using Geometry Nodes In Blender
-  [Blender] Geometry Nodes: How to Create Organic Objects
-  Geometry nodes: how can I get a different random float (or seed) for each object

Source: Conversation with Bing, 3/20/2023(1) Randomizing values in Blender 3.0 Geometry Nodes. https://blender.stackexchange.com/questions/245008/randomizing-values-in-blender-3-0-geometry-nodes Accessed 3/20/2023.
(2) Random Value Node — Blender Manual. https://docs.blender.org/manual/en/latest/modeling/geometry_nodes/utilities/random_value.html Accessed 3/20/2023.
(3) A Beginners Guide To Using Geometry Nodes In Blender. https://www.blenderbasecamp.com/home/a-beginners-guide-to-using-geometry-nodes-in-blender/ Accessed 3/20/2023.
(4) [Blender] Geometry Nodes: How to Create Organic Objects. https://styly.cc/tips/blender-geometrynodes-nyu/ Accessed 3/20/2023.
(5) Geometry nodes: how can I get a different random float (or seed) for .... https://blender.stackexchange.com/questions/227096/geometry-nodes-how-can-i-get-a-different-random-float-or-seed-for-each-object Accessed 3/20/2023.

## 线性驱动

TimeLine 驱动 Node's Value 输入 `frame`
typing  `#frame` 

用时间参数驱动的形体状态, Katarzyna Kijek 和 Przemysław Adamski 为日本创作歌手 Shugo Tokumaru 制作的最新定格动画音乐视频
 [A Layered Papercraft Stop-Motion Music Video for Shugo Tokumaru by Kijek/Adamski](https://www.thisiscolossal.com/2013/01/new-papercraft-stop-motion-music-video-for-shugo-tokumaru-by-animation-masters-kijek-adamski/)
时间参数推理？ time series
time-varying matrices
![150|150](https://i.imgur.com/mfr6WXd.jpeg)



## Python with Geometry Nodes?
Can I interact with Geometrynodes via blender's python?
"blender python  geometry nodes" google in 1 mouth
[访问在Geometry Nodes 内节点的自定义 attributes ](https://b3d.interplanety.org/en/accessing-custom-attributes-created-in-geometry-nodes/)
[stackexchange: python 节点操作- 连接节点 ](https://blender.stackexchange.com/questions/249763/python-geometry-node-trees)
[stackexchange: 节点操作- 创建string 节点](https://blender.stackexchange.com/questions/259984/add-geometry-nodes-string-input-via-python-script)



