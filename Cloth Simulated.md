## Comprehensive Cloth Simulation Experiment in Blender

[[Class2.2.2 Physical Cloth]]
[[Turbulence湍流]]

任务:  拓展素材(生命), 构建**有意义的**场景(容器), 故事(规则) , 

## 创作概念

1. 数字生命: Button(按钮), GameObject(元素,按钮)
2. 数字空间: Container(容器), Scene(场景), Platform(数字广场) . 
3. 现实空间: Reality, Physical(物理空间), 了解用户与设备, 人民与广场的关系

![bg left](https://i.imgur.com/WxGcY7Q.webp)

领略方法的同学们,  继续深入, 不要每周才一两个"素材". 



---


## 让你的素材能思考 
参考方法1: 附体, 我是谁, 长什么样? 我的工作是什么?  朋友是谁, 他又做什么?  
相似意义的可以合并的"素材"

参考方法2: 为"素材"设置颜色.

<!-- 

电灯, 假如我是电灯, (长?圆?白?黄),  我和谁打交道?(人? 萤火虫?)  我的烦恼是什么? 我得朋友是谁?(交通灯, 他有三个颜色) 他命令人, 而我却被命令. 
-->

---


目标: 一个低成本的(Assets Store), 关于未来生活方式的, 游戏(玩法).



![bg fit left:50% vertical](https://i.imgur.com/lSca2JV.webp)

---



在Blender中创建一个视觉效果有趣的布料模拟，重点关注实用性和互动性。

**Objectives**

- **掌握基础 cloth simulation：** 了解如何设置简单的布料模拟，控制其属性，并添加碰撞体进行交互。
- **提升真实感：** 探索创建folds(褶皱)和叠加多个布料对象以获得更自然外观的技术。
- **优化性能：** 学习使用 Cach(缓存)来管理复杂几何体的模拟。
- **应用环境效果：** 使用 wind and turbulence(风力和湍流)等force fields(力场)来创建动态布料运动。
- **整合HDRI背景：** 了解如何使用高质量HDRI图像实现逼真的场景照明。
- **掌握材质：** 学习在着色器编辑器中创建和组合材质，包括混合着色器和创建纹理的技术。
- **完善和优化：** 学习调整灯光、相机角度和构图以获得精致的最终渲染效果。

<!--  
```

- **Master basic cloth simulation:** Understand how to set up a simple cloth simulation, control its properties, and add colliders for interaction.
- **Enhance realism:** Explore techniques to create folds and stack multiple cloth objects for a more natural appearance.
- **Optimise performance:** Learn to use caching to manage simulations with complex geometry.
- **Apply environmental effects:** Use force fields like wind and turbulence to create dynamic cloth movements.
- **Integrate HDRI backgrounds:** Understand how to incorporate high-quality HDRI images for realistic scene lighting.
- **Master materials:** Learn to create and combine materials using nodes in the Shader editor, including techniques for mixing shaders and creating textures.
- **Finalise and refine:** Learn to adjust lighting, camera angles, and composition for a polished final render.

```
-->
---


## 1. **Basic Cloth Setup**

### Plane

- Add a Plane: `Shift + A > Mesh > Plane`
- Scale the plane: `S > 4`
- Subdivide the plane for higher resolution: `Tab (Edit Mode) > Right Click > Subdivide > 40`
- Apply Smooth Shade to Plane: `F3` Search  `Smooth Shade` 

---


### Sphere

- Add a Sphere: `Shift + A > Mesh > UV Sphere`
- Apply Smooth Shade to Sphere: `F3` Search  `Smooth Shade` 


---


### 物理模拟

- Sphere: Make the Sphere a collider: `Physics Properties Tab > Collision`
- Plane: Select the Plane and apply the cloth physics: `Physics Properties Tab > Cloth`
- Play the animation to observe the basic cloth simulation: `Spacebar`


---

### 渲染 

- Add a Subdivision Surface Modifier: `Modifiers Tab > Add Modifier > Subdivision Surface > Levels: 2`


---


### 动力学材质 - Preset

- Cotton(棉布)
- Denim(牛仔布)
- Leather(皮革)
- Rubber(橡胶)
- Silk(丝绸)


![bg fit left:50% vertical](https://i.imgur.com/h8JEOVy.webp)


---


增距离

Add Friction
Add Distance

![bg fit left:50% vertical](https://i.imgur.com/rIMOdPu.webp)






---

烘培

1. **Optimising Performance with Caching**
    
    - Navigate to the physics tab of the cloth object.
    - Enable caching: `Cache > Type: Modular > End Frame: 70`
    - Bake the simulation: `Bake`

---

## Ribbon

1. **Advanced Cloth Simulations (Ribbon)**
    
    - Add a plane: `Shift + A > Mesh > Plane`
    - Rotate the plane: `R > X > 90`
    - Scale the plane: `S > Z > 30`
    - Subdivide the plane: `Tab > Right Click > Subdivide > 100`
    
    - Apply cloth physics to the plane: `Physics Properties Tab > Cloth`
    - Adjust friction,
    - quality steps, 
    - tension,
    - compression and bending parameters within the cloth physics settings.


在布料物理设置中调整摩擦力、质量步长、张力、压缩和弯曲参数。

- Enable self-collision: `Collision > Self Collision`
- Play the animation and observe the ribbon simulation.

- Add a Solidify Modifier: `Modifiers Tab > Add Modifier > Solidify > Increase Thickness`



![bg fit left:50% vertical](https://i.imgur.com/Vo8KDG6.webp)

[[Susan Hewitt & Penelope Lee, The Great Petition, steel, bluestone, 2008]]
请愿书与丝带的类比

符号盛双重意义, 
- 丝带与女性身份自然连接
- 丝带常用作纪念和记忆的符号
材质特性, 纯洁和正义的白色
物理材质特性, 丝带柔软的质地与坚韧的特性

---


## [[Turbulence湍流]]

SETUP

- Duplicate the plane: `Select Plane > Shift + D`
- Repeat duplication to create several layers of cloth.
- Scale and position the planes to create a stack.
- Duplicate the sphere collider and position it appropriately.


JOIN

- Join all the planes: `Select all planes > Ctrl + J`
- Join all the spheres: `Select all spheres > Ctrl + J`


增厚度

- Add a Solidify modifier to the joined planes for thickness: `Modifiers Tab > Add Modifier > Solidify > Increase Thickness`



---

## Language - Bake to ShapeKey

~~File ‣ Import/Export ‣ Lightwave Point Cache (.mdd)~~


Save as Alembic

```python

import bpy

ob = bpy.context
obAc = ob.active_object
mesh_data = obAc.data

start_frame = bpy.context.scene.frame_start
end_frame = bpy.context.scene.frame_end

if not obAc.data.shape_keys:
    obAc.shape_key_add(name="Basis")

# Create shape keys for each frame
for frame in range(start_frame, end_frame + 1):
    bpy.context.scene.frame_set(frame)
    
    # Evaluate the mesh with modifiers
    depsgraph = bpy.context.evaluated_depsgraph_get()
    object_eval = obAc.evaluated_get(depsgraph)
    mesh_eval = object_eval.data
    
    # Create a new shape key and set its points based on the current frame
    shape_key = obAc.shape_key_add(name=str(frame))
    
    # Collect vertex positions for the current frame
    vertices = [vertex.co for vertex in mesh_eval.vertices]
    
    # Set shape key data
    shape_key.data.foreach_set('co', [c for v in vertices for c in v])


if obAc.data.shape_keys:
    shape_keys = obAc.data.shape_keys.key_blocks
    
    # Iterate through shape keys and set keyframes
    for frame in range(start_frame, end_frame + 1):
        ob.scene.frame_set(frame)
        
        for shape_key in shape_keys:
            if shape_key.name.isdigit(): 
                value = 1.0 if int(shape_key.name) == frame else 0.0
                shape_key.value = value
                shape_key.keyframe_insert(data_path='value', index=-1)

```



```python



import bpy

obj = bpy.context.active_object
start = bpy.context.scene.frame_start
end = bpy.context.scene.frame_end

if not obj.data.shape_keys:
    obj.shape_key_add(name="Basis")

for frame in range(start, end + 1):
    bpy.context.scene.frame_set(frame)
    depsgraph = bpy.context.evaluated_depsgraph_get()
    eval_obj = obj.evaluated_get(depsgraph)
    
    shape_key = obj.shape_key_add(name=str(frame))
    vertices = [v.co for v in eval_obj.data.vertices]
    shape_key.data.foreach_set('co', [c for v in vertices for c in v])

if obj.data.shape_keys:
    for frame in range(start, end + 1):
        bpy.context.scene.frame_set(frame)
        for key in obj.data.shape_keys.key_blocks:
            if key.name.isdigit():
                key.value = 1.0 if int(key.name) == frame else 0.0
                key.keyframe_insert('value')

```


(Source:  [blender.community: Bake Modifiers Into Shapekeys ⁠— Right-Click Select](https://blender.community/c/rightclickselect/PQo2/?sorting=hot))

(Source:  [blender.org: NewTek MDD format Version History — Blender Extensions](https://extensions.blender.org/add-ons/newtek-mdd-format/versions/))



![|200](https://i.ytimg.com/vi/9m1RcagR9sw/hqdefault.jpg)
(Source:  [youtube.com: Rigid Body Objects Falling On Cloth | Create A Realistic Collision With Cloth Physics & Soft Body](https://youtu.be/9m1RcagR9sw?t=0)[youtube playlist](https://www.youtube.com/watch?v=ddlFVxl8ICM&list=PLtV6EPHDRNQKrSgvtT_geTuqPUFbSab0u))
