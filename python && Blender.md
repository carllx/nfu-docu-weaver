
## Handout(大纲)
This course is designed for beginners who have no prior experience with Blender or Python. You will learn everything from scratch, with clear explanations and practical examples. You will also get access to the source code and blend files for each lesson, so you can follow along and practice on your own.

The course consists of 23 lectures, divided into 5 sections:

- Section 1: Introduction
  - Welcome and course overview
  - Getting familiar with Blender's interface and Python's syntax
- Section 2: Python Basics
  - Variables, data types, and operators
  - Control structures, such as if, for, and while
  - Functions, arguments, and return values
  - Lists, tuples, and dictionaries
- Section 3: Blender's API
  - What is an API and how to use it
  - Accessing and modifying Blender's data with bpy
  - Using context, operators, and properties
  - Working with objects, meshes, materials, and scenes
%%- Section 4: Custom UI Elements
  - Creating custom operators, panels, and menus
  - Registering and unregistering your code
  - Adding icons, labels, and tooltips
  - Using layout, row, column, and box
- Section 5: Python Modules and Libraries
  - What are modules and libraries and how to import them
  - Using built-in modules, such as math, random, and os
  - Using external libraries, such as numpy, scipy, and pillow
  - Installing and managing libraries with pip%%

By completing this course, you will gain a solid foundation in Python and Blender, and be able to create your own scripts and tools to enhance your 3D projects. You will also develop your logical thinking and problem-solving skills, which are essential for any programmer.

To enroll in this course, please visit the following link: ¹

I hope this handout was helpful.😊

Source: Conversation with Bing, 3/7/2023(1) Python Scripting for Blender Introduction | Udemy. https://www.udemy.com/course/blender-python-scripting-fundamentals-u/ Accessed 3/7/2023.
(2) Python Scripting in Blender 3x with Practical Projects | Udemy. https://www.udemy.com/course/python-scripting-in-blender-with-practical-projects/ Accessed 3/7/2023.
(3) Python Crash Course for Blender! - YouTube. https://www.youtube.com/watch?v=XqX5wh4YeRw Accessed 3/7/2023.


**Python Scripting for Blender**

Python 是一种强大而通用的编程语言。访问Blender的API，将使您将拥有巨大的生产力。您可以使用Python替代繁琐耗时的任务。此外，您还可以通过它创建定制工具和插件，就像雕刻家拥有一件秘密武器一样。访问Blender的API，也意味着您将成为一名创造者。因为您将深入了解Blender的内部工作原理，并关注在创建背后更加本质的东西。


By the end of this course, you will be able to:

- 在Blender 的 Text editor 和 console 中编写和运行Python脚本.
- 访问和操作Blender的 data, such as objects, meshes, materials, 和 scenes
- 创建自定义 operators(操作符)、panels(面板)和menus(菜单)来扩展Blender的用户界面
- 使用Python模块和库来增加功能和简化你的代码
- 用Python实现Blender中常见任务和工作流程的自动化



## Debugger(无作用)
安装 pip , debugpy
```Shell
python.exe -m pip --upgraade pip
python3.exe -m ensurepip
python.exe -m pip install debugpy

```

import debugpy
debugpy.listen(5678)
debugpy.wait_for_client()

relative:
[[3DReferenceMedia (video)参考工具开发]]
[[数字雕刻]]





## ChatGPT 01
(-- `Scattering objects randomly/ This AI changes EVERYTHING (ChatGPT x Blender)` [youtube](https://youtu.be/wU1cQcQFimw?t=78))

> [!info] 为blender编写一个python脚本，生成10个立方体，并将它们随机散布在场景中，与世界原点的最大距离为10, 并随机飞行10秒

```python
import bpy
import random
from mathutils import Vector

# 创建10个立方体
for i in range(10):
    bpy.ops.mesh.primitive_cube_add(location=(random.uniform(-10, 10), random.uniform(-10, 10), random.uniform(-10, 10)))

# 让每个立方体随机运动24秒
for obj in bpy.data.objects:
    if obj.type == 'MESH' and obj.name.startswith('Cube'):
        start_pos = obj.location
        end_pos = Vector((random.uniform(-10, 10), random.uniform(-10, 10), random.uniform(-10, 10)))
        obj.keyframe_insert(data_path="location", frame=1)
        obj.location = end_pos
        obj.keyframe_insert(data_path="location", frame=24*60)
        obj.animation_data.action.fcurves[0].keyframe_points[0].interpolation = 'LINEAR'
        obj.animation_data.action.fcurves[1].keyframe_points[0].interpolation = 'LINEAR'
        obj.animation_data.action.fcurves[2].keyframe_points[0].interpolation = 'LINEAR'
```

## ChatGPT 02
> [!info] 为blender编写一个python脚本，生成10个立方体，并将它们随机散布在场景中，与世界原点的最大距离为10, 并通过关键帧让他们像苍蝇一样随机飞行10秒


下面是一个可以在 Blender 中生成10个随机位置和随机大小的立方体，并将它们在场景中随机移动10秒钟的脚本，使用关键帧动画使其飞行。

```python
import bpy
import random
from mathutils import Vector

# 设置场景的最大距离
MAX_DISTANCE = 10

# 生成10个立方体
for i in range(10):
    # 随机生成立方体的位置和大小
    location = Vector((random.uniform(-MAX_DISTANCE, MAX_DISTANCE),
                        random.uniform(-MAX_DISTANCE, MAX_DISTANCE),
                        random.uniform(-MAX_DISTANCE, MAX_DISTANCE)))
    scale = Vector((random.uniform(0.5, 2.0),
                    random.uniform(0.5, 2.0),
                    random.uniform(0.5, 2.0)))

    # 创建立方体对象
    bpy.ops.mesh.primitive_cube_add(location=location, scale=scale)

# 设置场景渲染引擎
bpy.context.scene.render.engine = 'CYCLES'

# 运动立方体
for obj in bpy.data.objects:
    # 设置动画关键帧
    obj.location = Vector((random.uniform(-MAX_DISTANCE, MAX_DISTANCE),
                           random.uniform(-MAX_DISTANCE, MAX_DISTANCE),
                           random.uniform(-MAX_DISTANCE, MAX_DISTANCE)))
    obj.keyframe_insert(data_path="location", frame=0)
    for i in range(250):  # 10秒钟内运动
        # 随机移动立方体
        obj.location += Vector((random.uniform(-0.1, 0.1),
                                random.uniform(-0.1, 0.1),
                                random.uniform(-0.1, 0.1)))
        obj.keyframe_insert(data_path="location", frame=i+1)

```

这个脚本将生成10个立方体，并将它们随机分布在场景中，与世界原点的最大距离为10。然后，脚本会将立方体在场景中随机移动10秒钟，并使用关键帧动画记录它们的运动。

运行脚本后，可以在 Blender 中查看生成的立方体，并观察它们的运动。要查看动画，请在 Blender 的时间轴底部拖动时间轴，或按下空格键播放动画。