[[Class 2.2.1 Simulation - PhysicsSoftbody - Blender]]
[[Class2.2.2 Physical Cloth]]
[[Class2.2.3-Physical Flow]]

Meta-physics, We are the God of digital space
[[Living in a simulated universe]] 假设
# Concepts
**Physics Simulations in Blender for Contemporary Artists**

Blender的特点之一是它的物理引擎，它允许你模拟真实的物理现象，如gravity(重力)、collisions(碰撞)、fluids(流体)、smoke(烟)、fire(火)、cloth(布)、hair(毛发)等.

要了解物理模拟在Blender中的工作原理，你需要掌握一些物理学概念和规律的基本知识。物理学(physics)是一门描述自然界中物质和能量行为的科学。物理学可以分为不同的分支，如
- mechanics力学（motion and forces 研究运动和力）
- thermodynamics热力学（heat and temperature研究热和温度）
- electromagnetism电磁学（electric and magnetic fields研究电场和磁场）
- optics光学（研究光），等等¹²。

对于Blender用户来说，物理学的一个最重要的分支是力学。mechanics(机械学)涉及物体在力的作用下如何运动。力是一种Push推力或Pull拉力，可以改变物体的速度(speed)或方向(direction)。有不同类型的forces力，如
gravity 重力（质量之间的吸引力,the attraction between masses）
friction 摩擦力（表面之间的阻力,the resistance between surfaces）
tension 张力（沿线或绳索的拉力,the pull along a string or rope）
normal 法线（来自表面的支持,the support from a surface）等等[^differenttypesofforces]⁷。

## Newton's laws(Three principles)
为了描述力如何影响运动，我们可以使用Newton's laws(牛顿的运动定律)。牛顿定律是由艾萨克-牛顿在17世纪制定的三个原则。它们是:

- First law: An object at rest remains at rest, and an object in motion remains in motion at constant speed and in a straight line unless acted on by an unbalanced force⁶.
- Second law: The acceleration of an object depends on the mass of the object and the amount of force applied⁶. Mathematically: F = ma
- Third law: For every action there is an equal and opposite reaction⁶. This means that when one object exerts a force on another object, the second object exerts a force back on the first object with equal magnitude but opposite direction.

These laws can help us understand how objects behave when they collide with each other or with walls or floors; how they fall under gravity; how they bounce or slide; how they deform or break; etc.

## Physics concepts
Some basic physics concepts that are related to mechanics are:

- Mass: The amount of matter in an object⁹.
- Weight: The force exerted by gravity on an object⁹. Mathematically: W = mg
- Speed: The distance traveled by an object per unit time⁹. Mathematically: s = d/t
- Velocity: The speed and direction of an object's motion⁹.
- Acceleration: The rate of change of velocity per unit time⁹. Mathematically: a = (v-u)/t
- Momentum: The product of mass and velocity for an object⁹. Mathematically: p = mv
- Energy: The capacity to do work or cause change⁹. There are different forms of energy such as [[kinetic Art|kinetic]] energy (energy due to motion), potential energy (energy due to position), thermal energy (energy due to temperature), etc.
- Work: The transfer of energy by applying a force over a distance⁹. Mathematically: W = Fd
- Power: The rate at which work is done or energy is transferred⁹. Mathematically: P = W/t

These concepts can help us understand how objects store or lose energy when they move; how they transfer energy to other objects when they collide; how they convert one form of energy into another; etc.
这些概念可以帮助我们了解物体运动时如何储存或失去能量(energy)；碰撞时如何将能量传递给其他物体；如何将一种形式的能量转化为另一种形式的能量；等等。

Physics simulations in Blender use these concepts and laws to calculate how objects interact with each other and with their environment. You can control various parameters such as mass, friction, elasticity, damping, gravity,
etc., to adjust how realistic or artistic your simulation looks.

Some examples of contemporary artists who have used physics simulations in their artworks are:

- Andy Warhol (^2_^): He was one of the most influential figures in pop art movement who used mass-produced images from popular culture such as celebrities,advertisements,soup cans,etc., to create his artworks. He also experimented with film making using techniques such as slow motion,time lapse,split screen,etc., which involve manipulating physical properties such as speed,time,and space.
- Christo and Jeanne-Claude (^1_^): They were a married couple who created environmental works of art that often involved wrapping large landmarks or landscape elements in fabric, such as the Wrapped Reichstag, The Pont Neuf Wrapped, Running Fence, and The Gates. They used physics concepts such as tension, gravity, wind, etc., to create their installations that transformed the appearance and perception of their chosen sites¹²³.
- Olafur Eliasson (^4_^): He is a Danish-Icelandic artist who works with various media such as sculpture, installation, photography, etc., to explore themes such as nature, perception,light,color,space,etc. He often uses physics [[Phenomenology(现象学)|phenomena]] such as refraction, reflection, polarization, etc., to create immersive and interactive artworks that challenge the viewers' senses and cognition. Some of his works include The Weather Project, The New York City Waterfalls,Ice Watch,and Your Rainbow Panorama⁴.
- Cai Guo-Qiang (^5_^): He is a Chinese artist who is known for his explosive artworks that use gunpowder and fireworks as his medium. He creates spectacular events that involve detonating large-scale drawings or sculptures made of gunpowder on paper or canvas; launching fireworks into the sky or water; or igniting controlled explosions on land or sea. He uses physics concepts such as combustion,
expansion,trajectory,etc., to create his artworks that explore themes such as culture,history,politics,violence,etc. Some of his works include Project for Extraterrestrials No. 10: Project to Extend the Great Wall of China by 10,000 Meters: Project for Extraterrestrials No. 10;
Black Rainbow: Explosion Project for Valencia;
Sky Ladder;
and Inopportune: Stage One⁵.

These are just some examples of how contemporary artists have used physics simulations in their artworks. You can use Blender's physics engine to create your own artistic expressions using physical [[Phenomenology(现象学)|phenomena]]. You can also learn more about physics concepts and laws by experimenting with different settings and parameters in Blender.

I hope this handout has given you an overview of physics simulations in Blender for contemporary artists.

## **References**

¹: Christo and Jeanne-Claude - Wikipedia
²: Christo and Jeanne-Claude - 9 artworks - installation - WikiArt
³: Christo and Jeanne-Claude | Biography, Art, The Gates, Wrapped ... - Britannica
⁴: Olafur Eliasson - Wikipedia
⁵: Cai Guo-Qiang - Wikipedia
: Newton's laws of motion - Wikipedia
: Types of Forces - Physics Classroom
: Physics Simulations — Blender Manual
: Basic Physics Concepts | Sciencing
: About — blender.org

Source: Conversation with Bing, 3/5/2023(1) Christo and Jeanne-Claude - Wikipedia. https://en.wikipedia.org/wiki/Christo_and_Jeanne-Claude Accessed 3/5/2023.
(2) Christo and Jeanne-Claude - 9 artworks - installation - WikiArt. https://www.wikiart.org/en/christo-and-jeanne-claude Accessed 3/5/2023.
(3) Christo and Jeanne-Claude | Artnet. https://www.artnet.com/artists/christo-and-jeanne-claude/ Accessed 3/5/2023.
(4) Christo and Jeanne-Claude. https://christojeanneclaude.net/ Accessed 3/5/2023.
(5) Christo and Jeanne-Claude | Biography, Art, The Gates, Wrapped .... https://www.britannica.com/topic/Christo-and-Jeanne-Claude Accessed 3/5/2023.





Source: Conversation with Bing, 3/5/2023(1) Concepts of physics that everyone should know of!. https://ischoolconnect.com/blog/concepts-of-physics-that-everyone-should-know-of/ Accessed 3/5/2023.
(2) 15 basic physics concepts to help you understand our world. https://stacker.com/space/15-basic-physics-concepts-help-you-understand-our-world Accessed 3/5/2023.
(3) Newton’s laws of motion | Definition, Examples, & History. https://www.britannica.com/science/Newtons-laws-of-motion Accessed 3/5/2023.
(4) Newton’s Laws of Motion - Glenn Research Center | NASA. https://www1.grc.nasa.gov/beginners-guide-to-aeronautics/newtons-laws-of-motion/ Accessed 3/5/2023.
(5) Basic Physics Formulas & Notes for Competitive Exams. https://leverageedu.com/blog/basic-physics-formulas/ Accessed 3/5/2023.
(6) Introduction — Blender Manual. https://docs.blender.org/manual/en/2.79/game_engine/physics/introduction.html Accessed 3/5/2023.
[^differenttypesofforces]: (7) Getting Started With Blender: An Introduction to Physics - MUO. https://www.makeuseof.com/blender-introduction-to-physics/ Accessed 3/5/2023.
(8) Introduction — Blender Manual. https://docs.blender.org/manual/en/2.79/game_engine/physics/introduction.html Accessed 3/5/2023.
(9) Physics — Blender Manual. https://docs.blender.org/manual/en/latest/physics/index.html Accessed 3/5/2023.
(10) Newton's Laws of Motion - Three Laws of Motion Explanation, Examples. https://bing.com/search?q=Newton%27s+laws+of+motion Accessed 3/5/2023.
(11) Newton's laws of motion - Wikipedia. https://en.wikipedia.org/wiki/Newton's_laws_of_motion Accessed 3/5/2023.
(12) Basic Physics- Definition, Branches and FAQs - VEDANTU. https://www.vedantu.com/physics/basic-physics Accessed 3/5/2023.
(13) Physics | Definition, Types, Topics, Importance, & Facts. https://www.britannica.com/science/physics-science Accessed 3/5/2023.
(14) Influential Artists of the 20th Century | Stacker. https://bing.com/search?q=famous+contemporary+artists+of+the+20th+century Accessed 3/5/2023.
(15) Famous Artists Of The 20th Century. https://www.thefamouspeople.com/20th-century-artists.php Accessed 3/5/2023.
(16) 11 Most Famous 20th Century Artists and Paintings - Artst. https://www.artst.org/famous-20th-century-artists/ Accessed 3/5/2023.
(17) The 30 Most Popular Modern and Contemporary Artists. https://magazine.artland.com/30-popular-contemporary-artists/ Accessed 3/5/2023.
(18) Famous modern art by the 20th century’s greatest artists. https://www.timeout.com/newyork/art/famous-modern-art Accessed 3/5/2023.
(19) 10 Artists Who Changed The Course Of 20th Century Art - Culture Trip. https://theculturetrip.com/north-america/usa/articles/10-artists-who-changed-the-course-of-20th-century-art/ Accessed 3/5/2023.


## 4hour

请给我一个时间表格, 给学生介绍 blender 中的所有物理引擎, 并分别对 Force Field, Collision, Cloth, Dynamic Paint, Soft Body, Fluid, Rigid Body, Rigid Body Constraint 分别设计简单的实践示范.全程要求在4小时内

| 物理引擎 | 时间 | 内容 | 实践示范 |
| --- | --- | --- | --- |
| 刚体 | 30分钟 | 介绍刚体的原理和用途，以及blender中的刚体类型、质量、碰撞形状、摩擦和弹力等设置。 | 制作一个刚体碰撞的场景，例如一个球掉落并撞击一堆物体¹² |
| 碰撞 | 15分钟 | 介绍碰撞的原理和用途，以及blender中的碰撞类型和设置。 | 制作一个碰撞的场景，例如一个布料物体落在一个碰撞物体上² |
| 力场 | 30分钟 | 介绍力场的原理和用途，以及blender中的力场类型、强度、范围等设置。 | 制作一个力场的场景，例如一个风力场吹动一些物体² |
| 布料 | 30分钟 | 介绍布料的原理和用途，以及blender中的布料类型、品质、弹性、阻尼等设置。 | 制作一个布料的场景，例如一个旗帜飘动或一个裙子随身体运动²⁴ |
| 动态绘制 | 30分钟 | 介绍动态绘制的原理和用途，以及blender中的动态绘制类型、画笔、画布等设置。 | 制作一个动态绘制的场景，例如一个物体在另一个物体上留下痕迹或颜色² |
| 软体 | 30分钟 | 介绍软体的原理和用途，以及blender中的软体类型、品质、弹性、阻尼等设置。 | 制作一个软体的场景，例如一个果冻或一个气球²⁴ |
| 流体 | 45分钟 | 介绍流体的原理和用途，以及blender中的流体类型、品质、速度、粘度等设置。 | 制作一个流体的场景，例如一个水龙头或一个喷泉²⁴ |
| 刚体约束 | 30分钟 | 介绍刚体约束的原理和用途，以及blender中的刚体约束类型、属性等设置。 | 制作一个刚体约束的场景，例如一个摇摆或一个齿轮² |

希望这个时间表格对您有所帮助。😊
/
Source: Conversation with Bing, 3/27/2023(1) Blender Physics Simulation Tutorial [2022] - RenderGuide.com. https://renderguide.com/blender-physics-simulation-tutorial/ Accessed 3/27/2023.
(2) Physics in Blender 2.8 for Absolute Beginners - YouTube. https://www.youtube.com/watch?v=KtjJfWlQ8oE Accessed 3/27/2023.
(3) Introduction — Blender Manual. https://docs.blender.org/manual/en/latest/physics/introduction.html Accessed 3/27/2023.
(4) Blender physics tutorials. https://blenderfaqs.com/blog/blender-physics-tutorials Accessed 3/27/2023.



| 时间 | 内容 | 备注 |
| --- | --- | --- |
| 0:00 - 0:15 | Blender物理引擎简介 | Blender有一个内置的物理引擎，可以让你在3D空间中模拟真实物理现象，如重力、碰撞、布料、流体等¹。Blender物理引擎基于Bullet Physics库³，并提供了多种物理类型和设置²。 |
| 0:15 - 0:45 | Force Field（力场） | Force Field是一种可以影响其他物体运动的虚拟力，如风、磁力、涡流等²。你可以在场景中添加不同类型和强度的力场，并观察它们对其他物体的作用效果。例如，你可以创建一个风力场，并让它吹动一块布料或一些粒子。 |
| 0:45 - 1:15 | Collision（碰撞） | Collision是一种可以让物体互相阻挡和反弹的物理属性，适用于固体和软体²。你可以给场景中的任何物体添加Collision属性，并设置它们的摩擦力、弹性等参数。例如，你可以创建一个平面作为地面，并让一些球体从高处掉落，看它们如何与地面和彼此碰撞。 |
| 1:15 - 1:45 | Cloth（布料） | Cloth是一种可以让网格物体表现出柔软和可弯曲的特性的物理类型，适用于模拟衣服、旗帜、帐篷等²。你可以给任何网格物体添加Cloth类型，并设置它们的质量、阻尼、弯曲度等参数。例如，你可以创建一个长方形网格作为一块布料，并让它悬挂在两个柱子之间，看它如何随风飘动。 |
| 1:45 - 2:15 | Dynamic Paint（动态绘画） | Dynamic Paint是一种可以让物体在接触时产生颜色或位移变化的物理类型，适用于模拟绘画、脚印、水波等²。你需要创建两种物体：画布（Canvas）和画笔（Brush），并分别给它们添加Dynamic Paint类型和设置。例如，你可以创建一个平面作为画布，并给它添加水波效果，然后创建一个球体作为画笔，并让它在画布上滚动，看它如何在画布上留下水波纹。 |
| 2:15 - 2:45 | Soft Body（软体） | Soft Body是一种可以让网格物体表现出弹性和变形的特性的物理类型，适用于模拟果冻、气球、毛绒玩具等²。你可以给任何网


Source: Conversation with Bing, 3/29/2023(1) Getting Started With Blender: An Introduction to Physics - MUO. https://www.makeuseof.com/blender-introduction-to-physics/ Accessed 3/29/2023.
(2) Blender Bullet Physics Engine. Work With Animations - Medium. https://medium.com/kidstronics/blender-bullet-physics-engine-2bfff851c1ec Accessed 3/29/2023.
(3) Physics — Blender Manual. https://docs.blender.org/manual/en/latest/physics/index.html Accessed 3/29/2023.
(4) Documentation on the mathematical models used by Blender physics engines. https://blender.stackexchange.com/questions/163035/documentation-on-the-mathematical-models-used-by-blender-physics-engines Accessed 3/29/2023.

好的，我继续给你介绍剩下的物理类型和示范。

| 时间 | 内容 | 备注 |
| --- | --- | --- |
| 2:45 - 3:15 | Fluid（流体） | Fluid是一种可以让物体表现出液体或气体的特性的物理类型，适用于模拟水、烟雾、火焰等。你需要创建两种物体：流体（Fluid）和域（Domain），并分别给它们添加Fluid类型和设置。域是一个立方体，用来定义流体的边界和分辨率。流体是一个任意形状的物体，用来定义流体的源头和初始速度。例如，你可以创建一个圆柱体作为流体，并给它添加水效果，然后创建一个立方体作为域，并将圆柱体放在域内，看它如何向下流动。 |
| 3:15 - 3:45 | Rigid Body（刚体） | Rigid Body是一种可以让物体表现出固定形状和受力运动的特性的物理类型，适用于模拟碰撞、爆炸、堆叠等。你可以给任何物体添加Rigid Body类型，并设置它们的质量、摩擦力、弹性等参数。例如，你可以创建一些立方体作为刚体，并让它们从高处掉落，看它们如何与地面和彼此碰撞和堆叠。 |
| 3:45 - 4:00 | Rigid Body Constraint（刚体约束） | Rigid Body Constraint是一种可以让两个刚体之间产生连接或限制的物理类型，适用于模拟铰链、弹簧、绳索等。你需要创建三种物体：两个刚体和一个空物体（Empty），并分别给它们添加Rigid Body类型和Rigid Body Constraint类型。空物体用来定义两个刚体之间的约束类型和参数。例如，你可以创建两个立方体作为刚体，并给它们添加铰链约束，然后创建一个空物体，并将它放在两个立方体之间，看它们如何围绕空物体旋转。 |

以上就是我为你制作的时间表格，希望对你有帮助。如果你想了解更多关于Blender物理引擎的信息，请参考以下网址。


埃隆·马斯克（Elon Musk）说，我们可能生活在模拟中。以下是我们如何判断他是否正确