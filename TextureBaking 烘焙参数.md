## Baking 烘焙参数
![](https://i.imgur.com/MbkLtbY.png)
图片来源 --  --`| Blender 示范将已做好的图连接节点 - How to Make Skin Shader` [youtube](https://youtu.be/B3TnEMoNIr4?t=401)
--[Chris Jones](https://www.youtube.com/@chrisjonestube)'s Universal Human 使用贴图的种类 `| - Creating Textures` [google](https://sites.google.com/view/universalhuman/documentation/creating-textures?authuser=0)


### Bake 123

**Shader Editor**
new a `Image texture`, and rename, es: `head_ao`
指定贴图尺寸 `width` and `height`
uncheck `Alpha`, 不需要Alpha 通道(rgb, not rgba)
![](https://i.imgur.com/bBqsNyc.png)
**3D Viewport**
选择高模... 最后到低模


**渲染属性**
![](https://i.imgur.com/IUEONlU.png)


选择 Cycles 引擎 ; 
Sample 用1, 烘焙没有太多的环境反射.
```
Sample> Render (不是Viewport)MaxSamples: 1 
```

Bake, `Bake Type` 选择烘培类型
Selected to Active
Extrusion用测量工具测量穿透低模的距离，输入数值

激活所选物体 -> 活动

performance > Tiles xy 与渲染尺寸相等


### Bake Normal
参考教程: --`|Introduction/ Axe - Detailed Game Objects -  P17 - Normal Maps in Detail` [youtube](https://youtu.be/mZqdDwyN2Xo?t=1)
![|200](https://i.ytimg.com/vi/mZqdDwyN2Xo/hqdefault.jpg)[youtube playlist](https://www.youtube.com/playlist?list=PLn3ukorJv4vvDHfsQCACI3qVgdAMfP3-7)



### Bake AO
AO --`| How to easily add ambient occlusion to models in Blender 2.8` [youtube](https://youtu.be/Zum2jlruecw?t=187)
--`| Axe - Detailed Game Objects -- P18 - Ambient Occlusion Maps in Detail` [youtube](https://youtu.be/ZVxBqYbYcPs?t=251)
![|200](https://i.ytimg.com/vi/ZVxBqYbYcPs/hqdefault.jpg)[youtube playlist](https://www.youtube.com/playlist?list=PLn3ukorJv4vsa02LIuM_IQF-SASAZBnyi)





--`| Blender how to Reduce Poly Count and Bake Textures` [youtube](https://youtu.be/Yx9TvvnxCAM?t=101)
--`| How to Bake Perfect Normal and  Ambient occlusion in Blender - Tutorial` [youtube](https://youtu.be/mH_3xM1BeLo?t=280)

### Bake Procedural Materials
--`|Introduction/ Export Procedural Texture or Material | Learn How To Bake Any Texture In Blender & Import Elsewhere` [youtube](https://youtu.be/qHBz6UTZehs?t=2)[youtube playlist](https://www.youtube.com/playlist?list=PLtV6EPHDRNQJG_Dp8AgipRizpi6nEk97G)

--`|Intro/ How to Texture Bake Procedural Materials (Blender Tutorial)` [youtube](https://youtu.be/AioskAgcU2U?t=2)
![|200](https://i.ytimg.com/vi/AioskAgcU2U/hqdefault.jpg)[youtube playlist](https://www.youtube.com/playlist?list=PLsGl9GczcgBv6Y6zhWqbj2GvivukcekYq)
--`|Intro/ How to Bake Metallic Maps (Blender Tutorial)` [youtube](https://youtu.be/sOvRr_D8ZpU?t=1)
![|200](https://i.ytimg.com/vi/sOvRr_D8ZpU/hqdefault.jpg)[youtube playlist](https://www.youtube.com/playlist?list=PLsGl9GczcgBv6Y6zhWqbj2GvivukcekYq)
--`|Color Space - Non Color/ How to Bake Roughness Maps (Blender Tutorial)` [youtube](https://youtu.be/SmyF6d5Wync?t=240)
![|200](https://i.ytimg.com/vi/SmyF6d5Wync/hqdefault.jpg)[youtube playlist](https://www.youtube.com/playlist?list=PLsGl9GczcgBv6Y6zhWqbj2GvivukcekYq)
--`| Procedural Plaster Material (Blender Tutorial)` [youtube](https://youtu.be/EwB3HWcUdEk?t=106)
![|200](https://i.ytimg.com/vi/EwB3HWcUdEk/hqdefault.jpg)[youtube playlist](https://www.youtube.com/playlist?list=PLsGl9GczcgBv6Y6zhWqbj2GvivukcekYq)
