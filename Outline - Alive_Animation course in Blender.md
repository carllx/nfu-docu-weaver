## Reference

[[Source -Alive_Animation course in Blender]]


![|200](https://i.ytimg.com/vi/Pblb2vCsBKs/hqdefault.jpg)
(Source:  [youtube.com: Blender animation course Alive! chapter 9 released](https://youtu.be/Pblb2vCsBKs?t=1)[youtube playlist](https://www.youtube.comhttps://www.youtube.com/redirect?event=infocard&redir_token=QUFFLUhqbkNkYjBtVThYMGJVN3lVSGptTlZuTWVTOV9iZ3xBQ3Jtc0tsR25fUk9TQkRnOVlqdjZDNF9faE9LVm40X2o4OTdCUTdyU2ZZUzlSQ19ZR29fWXhRSEQzMXNzV3FrQ3VkTU1saUw1M0F3VlRRVVpUczJoa2NhWmFlVG9fbFhpUnNNLXFaZXNYd1hqbGFLUU13UHEyUQ&q=https%3A%2F%2Fwww.p2design-academy.com%2Fp%2Falive-animation-course-in-blender))

## Chapter 01 - Introduction
[[Sources_Alive_Animation_Blender_Chapter 01]]

### 1.1 Course introduction 介绍
建议先完整看一遍视频，再重看并实践。课程按主题和难度划分，推荐从基础开始学习。我们提供球体、警察松鼠、机甲和 Trident 等模型供练习，可用于非商业项目和作品展示。

### 1.2 Course content 内容导读

第2章介绍 Blender 数据处理和动画工具基础。
第3章是最重要的部分，教授如何使用骨骼绑定制作简单动画。
第4章介绍其他动画技术，包括约束和空间切换。
第5,6章专注于角色运动和身体力学，详细讲解跑步和行走循环。
第7章教授姿势技巧，
第8章是高级章节，将综合运用所学知识。
每节课都提供了 Blender 文件

---


### 1.3 Advised ressources 
[[动画学习资源]]



---


## Chapter 02 - Introduction to motion in Blender
[[Sources_Alive_Animation_Blender_Chapter 02]]

1.1 Object transformation
1.2 Object transfrom channels
1.3 First keyframe, first motion
2.4 More about the timeline
2.5 Understanding interpolation modes
2.6 Blocking the bouncing ball
Source:
- https://www.youtube.com/watch?v=1yT0hxplVBg by ScienceLuxembourg
2.7 Understanding animation curves
2.8 More about the graph editor
2.9 Polishing the bouncing ball
2.10 Moving forward
Source:
- https://youtu.be/OX9GTi-wQ6I by BAMBI
### 2.11 Curve modifiers


(Source:  [baidu.com: 百度网盘 - 视频播放](https://pan.baidu.com/pfile/video?path=%2F%E6%88%91%E7%9A%84%E6%95%99%E7%A8%8B%2FBlender%2FAnimation%2FAlive!%20Animation%20course%20in%20Blender%2Fchapter-02%2F02-11-Curve%20modifiers.mp4&theme=light&from=home))

### 2.12 The dope sheet

(Source:  [baidu.com: 百度网盘 - 视频播放](https://pan.baidu.com/pfile/video?path=%2F%E6%88%91%E7%9A%84%E6%95%99%E7%A8%8B%2FBlender%2FAnimation%2FAlive!%20Animation%20course%20in%20Blender%2Fchapter-02%2F02-12-Dope%20sheet.mp4&theme=light&from=home))


```

数据处理在 Blender 中非常重要。几乎所有输入都可以被制作成动画,包括物体位置、骨骼装配或角色,甚至物体的颜色。

对象转换是最基本的数据处理方式。在 Blender 中,对象是一个简单的容器,可以包含不同类型的数据,如网格数据、摄像机数据或空数据。这些数据可以在对象之间传递。对象动画最重要的是变换数据,包括位置、旋转和缩放。

对象的位置是基于其原点来测量的。无论对象的几何形状如何,变换都是围绕原点进行的。可以使用工具面板中的不同控件来变换对象,也可以使用快捷键(G 移动、S 缩放、R 旋转)。

动画曲线是重要的数据处理工具。可以通过图形编辑器查看和编辑曲线。曲线显示了值随时间的变化。通过修改曲线的控制点和手柄,可以调整动画的时间和空间变化。

修改器可以用来改变曲线的行为。常用的修改器包括:
- 循环修改器:重复动画
- 包络修改器:控制曲线的整体形状
- 噪波修改器:添加随机变化
- 限制修改器:限制值的范围
- 步进修改器:创建分步动画效果

Dope Sheet 提供了动画数据的概览。可以查看场景中使用的所有动作,并通过 Action Editor 编辑特定动作。动作是动画数据的容器,可以在不同对象之间共享。

通过合理运用这些数据处理工具,可以创建流畅自然的动画效果。掌握这些基础知识对于 Blender 动画制作至关重要。
```

## Chapter 03 - First character animation

3.1 Chapter intro
3.2 Understanding world space and local space
3.3 What is an armature
3.4 Advanced bouncing ball
3.5 Polishing the bouncing ball
3.6 More bouncing ball
3.7 Overlapping, follow through and overshoot
3.8 Squirrel rig presentation
3.9 Blocking the cycle
Source:
- https://youtu.be/X1nAJmIRwew by SloMo Ref
- https://www.youtube.com/watch?v=l5Bdid3Bxt4 by Per-Fin Nielsen
3.10 Breakdowns
3.11 Arcs
3.12 Polishing
3.12.1 Body
3.12.2 Torso
3.12.3 Legs
Source:
- https://youtu.be/JRXsgjCO71M
3.12..4 Tail
Source:
- https://youtu.be/cJTSIYmROBI
3.12.5 Details
3.13 Idle animation
Source:
- https://youtu.be/RnTWlY29X-A Video Produced by Paul Dinning - Wildlife in Cornwall
- https://youtu.be/Vk5z3C8MyZ0 by Garrett Born for The Dodo
3.14 Anticipation
Source:
- Malakaye gameplay animation – from Noara by Atypique Studio -: https://atypique-studio.fr/
3.15 Idle breakdowns
3.15.1 breakdowns
3.15.2 idle detail blocking (timelapse)
3.16 Idle Polishing
3.16.1 part 1
3.16.2 part 2
3.16.3 part 3
3.16.4 part 4
3.16.5 part 5
3.17 Tree climbing analysis
- https://youtu.be/2vh8XQ3nD6U by Being the best You can be
- https://youtu.be/8N4n_mhyOok by Gary Crowder
3.18 Tree climbing blocking
3.19 Tree climbing in-betweens
3.20 Timing pass
3.21 Climbing cycle polish
3.21.1 Climb cycle – body polish
3.21.2 Climb cycle – body polish (timelapse)
3.21.3 Climb cycle – feet polish
3.21.4 Climb cycle – feet polish (timelapse)
3.21.5 Climb cycle – Re-timing
3.21.6 Climb cycle – Re-timing (timelapse)
3.21.7 Climb cycle – Tail and details
3.21.8 Climb cycle – Tail and details (timelapse)
3.22 The NLA editor
3.23 Preproduction and staging
3.24 Blender camera
3.25 Appending and linking
3.26 First Scene
3.27 Editing Sequences
3.28 Animated curve path 

## Chapter 04 - Layered animation and Space switching

4.1 Chapter introduction
4.2 Robot rig presentation
4.3 Torso root motion
4.4 Leg motion
4.4.1 Foot Roll
4.4.2 Toes motion
4.4.3 Toes timelapse
4.5 Torso side motion and hips motion
4.5.1 Torso side motion and hips motion (timelapse)
4.6 Constraints
4.7 Space switching fundamentals
Ric Lico’s course: https://www.animationsherpa.com/
4.8 Mech space switching
4.8.1 Mech space switching – Body
4.8.2 Mech space switching - Secondary
4.9 Rocket shot
4.10 Artillery Shot
4.11 Wiggle bone addon
- https://blenderartists.org/t/wiggle-bones-a-jiggle-bone-implementation-for-2-8/1154726

## Chapter 05 - Human locomotion Run

5.1 ntroduction
5.2 Rig presentation
5.3 Quaternion and Euler rotation
5.4 Reference Study
- https://youtu.be/7rZQZBS224U
- https://youtu.be/PH-3cHxXAK0?t=48
- https://youtu.be/1dKd-b31mck?t=121
- https://youtu.be/8f_quGISkAM
- https://youtu.be/bc4-3dCPwqI
5.5Run cycle, blocking stage
5.6 Run cycle, blocking stage 02
5.7 Polishing the feet
5.8 Polishing the Torso
5.9 Polishing the Torso 02
5.10 Polishing the arms
5.11 Polishing forearms and hands
5.12 Changing attitude with curve offset

## Chapter 06 - Human locomotion Walk

6.1 walk cycle, blocking 01
- https://youtu.be/HEoUhlesN9E
- https://www.youtube.com/watch?v=vq9A5FD8G5w
6.2 Walk cycle, blocking 02
6.3 Polishing the COG (torso root)
6.4 Polishing the feet
6.5 Polishing the spine
6.6 Polishing the arms

## Chapter 07- Mastering Posing

7.1 Introduction
7.2 Line of action and exageration
7.3 Rules of good posing
7.4 First pose
7.4.1 Exercises 5 action poses – pose1
- https://www.pinterest.fr/pierrickpicaut/poses/
- https://www.pinterest.fr/pin/476114991865577418/
7.5 Pushing the pose
7.6 Motion pose
- https://www.pinterest.fr/pin/476114991865577436/
7.7 Smears and rubber limbs
7.8 Posing hands
The hand of animation, by Hjalti Hjalmarsso: https://youtu.be/3qj0ZAX61Ho
7.9 Fighting weight
7.10 More poses
7.11 Katana pose (timelapse)
7.12 Flying knee (timelapse)

## Chapter 08 - Combo animation

8.1 Introduction
8.2 References
Rory McDonald - Jab cross: https://youtu.be/04qntrIeBGg
Sean Fagan – Switch kick: https://youtu.be/eziZcWnjP2s
Throw the shoulder
Joe Valtellini – Switch kick: https://youtu.be/YZJJCtuyqYg
Joe Valtellini – Lead Hook: https://youtu.be/rZ0uzTlE1pE
HowcastSportsFitness - Jab cross: https://youtu.be/hWI6ojJzBww
Liam Harrison good cross: https://youtu.be/ahSbkncXEvQ
Liam Harrison: https://youtu.be/saN1yQqFdx8
Haggerty switch kick: https://youtu.be/nAh1on2ftZ4
8.3 Scene setup
8.4 Blocking
8.4.1 Blocking part 2
8.4.2 Blocking part 3
8.4.4 Blocking (timelapse)
8.5.1 Blocking breakdowns part01
8.5.2 Blocking breakdowns part02
8.5.3 Blocking breakdowns part03
8.5.4 Timing pass
8.5.5 Full process (timelapse)
8.6 Breakdowner tool
8.7 Detailed Blocking
8.7.1 Detailed Blocking part 01
8.7.2 Detailed Blocking part 02
8.7.3 Detailed Blocking part 03
8.7.4 Detailed Blocking part 04
8.7.5 Timing pass
8.7.6 Full process (timelapse)
8.8 Camera
8.9 Polishing first 2 punches
8.9.1 Polishing part 01
8.9.2 Polishing part 02
8.9.3 Polishing part 03
8.9.4 first chunk (timelapse)
8.9.5 Fixing knee pop
8.10 Polishing the hook
8.10.1 Polishing hook part 01
8.10.2 Polishing hook part 02
8.10.3 Polishing hook part 03
8.10.4 Polishing hook part 04
8.10.5 Polishing hook (timelapse)
8.11 Polishing the kick
8.11.1 Polishing kick part 01
8.11.2 Polishing kick part 02
8.11.3 Polishing kick part 03
8.11.4 Polishing kick part 04
8.11.5 Polishing kick (timelapse)
8.12 Polishing the bag
8.12.1 Polishing the bag
8.12.2 Bag finals details
8.12.3 Polishing the bag process (timelapse)
8.13 Using shapekeys for stylised animation
Link to FX youtube video: https://youtu.be/zicdjq3g4gk