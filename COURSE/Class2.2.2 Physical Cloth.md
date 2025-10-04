物理模拟的雕刻

Esample 方体约束



## Sculpt Brush 

--`| SCULPT CLOTH BRUSH: JUST TOO AWESOME` [youtube](https://youtu.be/0ZzQjzgQmEw?t=2)
--`| Blender Secrets - 8 Cloth Brushes Explained` [youtube](https://youtu.be/UskiTAah1-w?t=59)


![|200](https://i.ytimg.com/vi/UskiTAah1-w/hqdefault.jpg)[youtube playlist](https://www.youtube.com/playlist?list=PLrB1kuJIjcg7hWDe8SYTOfZho_xxbWxNJ)
--`|Cloth/ Every Blender Sculpting Brush Explained in 13 Minutes` [youtube](https://youtu.be/eFhXnUoxCjw?t=429)
--`| The Hidden Cloth Simulation Brushes You Don't Use` [youtube](https://youtu.be/SU6XE6WKTBk?t=63)
--`| Blender | Cloth Filter | Tutorial` [youtube](https://youtu.be/GbRKoSC-Z78?t=196)
![|200](https://i.ytimg.com/vi/GbRKoSC-Z78/hqdefault.jpg)

--`|赚小钱赚到没有时间，你就永远也赚不到大钱` [xiaohongshu](https://www.xiaohongshu.com/discovery/item/6391cb440000000019020d92?app_platform=android&app_version=7.53.8&share_from_user_hidden=true&type=video&xhsshare=WeixinSession&appuid=61aa31f5000000000202472e&apptime=1670549510)
![|200](https://ci.xiaohongshu.com/e467c0e8-f491-35fd-83f3-19ca08?imageMogr2/format/jpg/quality/92/auto-orient/strip/crop/450x300/gravity/center)
--`|赚小钱赚到没有时间，你就永远也赚不到大钱` [xiaohongshu](https://www.xiaohongshu.com/discovery/item/6391cb440000000019020d92?app_platform=android&app_version=7.53.8&share_from_user_hidden=true&type=video&xhsshare=WeixinSession&appuid=61aa31f5000000000202472e&apptime=1670549510)
![|200](https://ci.xiaohongshu.com/e467c0e8-f491-35fd-83f3-19ca08?imageMogr2/format/jpg/quality/92/auto-orient/strip/crop/450x300/gravity/center)

```
注意: 有初步折痕的时候使用效果更好
```

Snake Hook (蛇形钩)
Expand (扩展)  增加转折程度, 更加硬朗
Grab (抓起) 比Drag更积极
Inflate (膨胀) 结合反向
Pinch Perpendicular (垂直夹捏,可以结合Stroke> Line做接缝) 
Pinch Point (夹捏点) 
Push (推)
Drag (拖拽) 
Simulation Area: Globle vs Local

## Simulate 
方棍控制器, name: "driverCube"
创建 Grid, name:"colthGrid"

colthGrid
- 细分10, 翻转90 , 
- top 边 Assign Vertices Group;
- Constraint > Copy Scale; Copy Location
- Physical> Cloth 
- Cloth.Shape.pinGroup
- Cloth.Collision.SelfCollision
--`| Learn Complex CLOTH ANIMATION in under 10 MINUTES! | Blender 3D Tutorial` [youtube](https://youtu.be/NQLdrXndnQU?t=26)
![|200](https://i.ytimg.com/vi/NQLdrXndnQU/hqdefault.jpg)
(-- `Basic Curtain using Copy Scale Constraint/ 5 Easy Curtains in 10 minutes - Blender Tutorial` [youtube](https://youtu.be/vtwoLRLw9ow?t=48))
![|200](https://i.ytimg.com/vi/vtwoLRLw9ow/hqdefault.jpg)

--`| Puffy Cloth Tutorial | Blender 2.8 | FREE .blend file` [youtube](https://youtu.be/CtLNsNBW_vE?t=1)[课程工程文件](https://www.lmc4d.cn/7228.html)   
![|200](https://i.ytimg.com/vi/CtLNsNBW_vE/hqdefault.jpg)
--`| 5: Sky Dancer / Practical Cloth Sims in Blender 3D` [youtube](https://youtu.be/d-bCEFgtU0Y?t=670)
![|200](https://i.ytimg.com/vi/d-bCEFgtU0Y/hqdefault.jpg)[youtube playlist](https://www.youtube.com/playlist?list=PLpJWHl1fB7BFo35bJhhZY9nrI8ZvbbP9Q)

## Pattern (Cloth Sewing)



### Pattern Design(纸样设计)

![bg fit left:50% vertical](https://i.imgur.com/4qS8WcO.webp)

纸样下载
- 日本免费 --`|シャツ＆ジャケットの型紙イラスト一覧｜洋服やコスプレ衣装のパターン　でぃあこす` [dr-cos](https://dr-cos.com/freepattern-shirtjacket.html)
- 俄罗斯 (部分免费)  [en-grasser](https://en-grasser.com/)
- 英国, 女装，儿童， 小玩具  www.sewmag.co.uk
- 德国 分类引1导，棒针钩针编结刺绣戳戳绣缝纫 [initiative-handarbeit](https://initiative-handarbeit.de/)



---



### 参考教程
-  流程介绍`| Blender Secrets - Posed Cloth Simulation for Sculpting` [youtube](https://youtu.be/k3hrQuatA78?t=2)
-  `| Blender Secrets - Posed Cloth Simulation for Sculpting` [youtube](https://youtu.be/k3hrQuatA78?t=4)
- [youtube playlist](https://www.youtube.com/playlist?list=PLrB1kuJIjcg7hWDe8SYTOfZho_xxbWxNJ)
- --`|Blender布料解算 个人经验分享` [bilibili](https://www.bilibili.com/video/BV1SU4y1Q7nM/?t=921)
- --`| Female Hoodie Tutorial  Blender 3.2 | Cloth Sewing` [youtube](https://youtu.be/cUBGYtlFne8?t=1403)
![|200](https://i.ytimg.com/vi/cUBGYtlFne8/hqdefault.jpg)
- --`|HUMAN Realistic Portrait Creation With Blender` [baidu](https://pan.baidu.com/disk/main?_at_=1670205253382#/index?category=all&path=%2F%E6%88%91%E7%9A%84%E6%95%99%E7%A8%8B%2FBlender%2FHUMAN%20-%20Realistic%20Portrait%20Creation%20With%20Blender%2FHUMAN_course-videos%2FHUMAN_chapter_02)   C02
- A / L  + M （Merge by distance）,  确保布料运算 的Mesh 的顶点都是连接的

#### BodyObject
Create Collision on Object
Damping(阻尼, ) 高一点, 降低接触碰撞后弹跳程度(参考 [youtube](https://youtu.be/Huos9SsCOj8?t=11))
Thickeness outer object 外层填充厚度，设置非常低
Fricttion(摩擦) 增大, ie.10

#### ColthObject
- Create Coth on Object
- Preset(布料材质预设) Cotton (棉), Denim (牛仔), Leather (皮革), Rubber (橡胶), Silk (丝绸)
- Colth: Quality Steps ( 模拟等级可以高点ie.8)
- Shape:
		- Sewing (Shape)
		- Shrinking Factor(Shape) 一个小的负数修复间隙
- Colisions:
	- Quality(Collsions) 高点 15
	- Self Colision
	- Distance (Self Colisions) 需要测量
	- Distance (Object Colisions) 需要测量

挤出厚度
Alt E Extrude Face along Normal



## Tips:
Mesh 展平 flat surface like UV 
- 使用插件 Import-Export: Scalable Vector Graphics (SVG) 1.1 format --`| Creating MESH from UV Layout in BLENDER (EASY!!!)` [youtube](https://youtu.be/YXHJX0WCoeA?t=11)
- 使用代码 --`|uv - How could one unwrap/morph/project a complex 3D mesh to a flat surface? - Blender Stack Exchange` [stackexchange](https://blender.stackexchange.com/questions/149859/how-could-one-unwrap-morph-project-a-complex-3d-mesh-to-a-flat-surface)