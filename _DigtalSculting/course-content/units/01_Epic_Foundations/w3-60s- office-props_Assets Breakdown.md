---
theme: NFUPPT
marp: true
---
# 60s- office-props_Assets Breakdown

```
Generate independent close-up images for each asset, along with the standard Maya project names designed for them.
```
[ 🌐 sketchfab 60's Office Props - Download Free 3D model by SeanNicolas (@SeanNicolas) ](@https://sketchfab.com/3d-models/60s-office-props-dc00ea320cfa4aad90811080270672db)


![bg fit left:50% vertical](https://i.imgur.com/jqgx0aV.webp)


---

## Assets 命名规范架构


对资产的具体描述，驼峰式命名法 (camelCase) 或下划线分隔，

- 驼峰式命名法:  officeChair, tapeDrive
- 下划线分隔: camel_case

---


> 类型+描述+编号(或变体)+后缀
> 例如: 
> `prp_paperTray_desk_01_grp`  纸盘
> `prp_paperStack_small_01_grp` 纸堆
> `set_bulletinBoard_cork_01_grp` 场景部件_布告栏_软木



---


### 类型 (Type)

资产的大分类，例如

- prp (Prop/道具), 
- set (Set/场景部件), 
- chr (Character/角色), 
- env (Environment/环境)

![bg fit left:50% vertical](https://i.imgur.com/XhYMAzw.webp)


---




### 后缀 (Suffix)

描述 Maya 节点的类型。
    
- _grp: 组合 (Group) - 用于组织资产的最高层级。
	
- _geo: 几何体 (Geometry) - 实际的模型。
	
- _ctrl: 控制器 (Control) - 用于动画的 NURBS 曲线。
	
- _jnt: 骨骼 (Joint)。
	
- _loc: 定位器 (Locator)。


---


## 模型

<!--  _class: lead-->

// Warning: file: /Volumes/T7-carllx2T/Applications/Autodesk/maya2024/Maya.app/Contents/scripts/startup/cutCopyPaste.mel line 223: Nothing is selected.

---


### 1. Desk
The main desk on the left side.

Top-level group: `prp_desk_office_01_grp`
Geometry: `prp_desk_office_01_geo`

![bg fit left:50% vertical](https://i.imgur.com/ecHXy5t.webp)




---



### 2. Paper Tray

A black paper tray placed on the left desk.

Top-level group: `prp_paperTray_desk_01_grp`
Geometry: `prp_paperTray_desk_01_geo`

![bg fit left:50% vertical](https://i.imgur.com/5t3oefp.webp)

---


### 3. Paper Stack

A small stack of papers next to the paper tray.

Top-level group: `prp_paperStack_small_01_grp`
Geometry: `prp_paperStack_small_01_geo`
![bg fit left:50% vertical](https://i.imgur.com/gI56zXI.webp)

---


### 4. Teletype

A terminal-type typewriter embedded under the wall bulletin board.

Top-level group: `prp_teletype_terminal_01_grp`
Geometry: `prp_teletype_terminal_01_geo`

![bg fit left:50% vertical](https://i.imgur.com/XmO4HFK.webp)




---


### 5. Bulletin Board

A cork bulletin board on the wall with papers on it.

Top-level group: `set_bulletinBoard_cork_01_grp`
Geometry: `set_bulletinBoard_cork_01_geo`
![bg fit left:50% vertical](https://i.imgur.com/7nk66Ys.webp)


---


### 6 Low-back Office Chair

A brown low-back chair in front of the left desk.

Top-level group: `prp_chair_office_lowback_01_grp`
Geometry: `prp_chair_office_lowback_01_geo`


![bg fit left:50% vertical](https://i.imgur.com/U2Z1AK2.webp)


---


### 7. Coffee Maker

A drip coffee maker placed on the floor.

Top-level group: `prp_coffeeMaker_drip_01_grp`
Geometry: `prp_coffeeMaker_drip_01_geo`


![bg fit left:50% vertical](https://i.imgur.com/xG0Xdzf.webp)

---


### 8. Portable Typewriter

A white portable typewriter placed on the floor.

Top-level group: `prp_typewriter_portable_01_grp`
Geometry: `prp_typewriter_portable_01_geo`



![bg fit left:50% vertical](https://i.imgur.com/vCKrAqz.webp)


---


### 9. High-back Office Chair

A brown high-back executive chair in the middle area.

Top-level group: `prp_chair_office_highback_01_grp`
Geometry: `prp_chair_office_highback_01_geo`


![bg fit left:50% vertical](https://i.imgur.com/Eup3z94.webp)


---


### 10. Water Cooler

A standing water cooler with a large blue water bucket.

Top-level group: `prp_waterCooler_retro_01_grp`
Geometry: `prp_waterCooler_retro_01_geo`

![bg fit left:50% vertical](https://i.imgur.com/hakvA3F.webp)



---


### 11. Tape Drive - Yellow/Blue

A mainframe computer tape drive with a yellow/ Blue panel.

Top-level group: `prp_mainframe_tapeDrive_yellow_01_grp`
 `prp_mainframe_tapeDrive_blue_01_grp`
Geometry: `prp_mainframe_tapeDrive_yellow_01_geo`
`prp_mainframe_tapeDrive_blue_01_geo

![bg fit left:50% vertical](https://i.imgur.com/I7kb60r.webp)



---


### 12. Long Table

A long wooden table placed in front of the two tape drives.

Top-level group: `prp_table_long_wood_01_grp`
Geometry: `prp_table_long_wood_01_geo`


![bg fit left:50% vertical](https://i.imgur.com/TyaQTe6.webp)




---


### 13. Mug 马克杯

There are two in the scene, one on the desk and one on the floor.

Instance 1: `prp_mug_ceramic_white_01_grp`
Instance 2: `prp_mug_ceramic_white_02_grp`


![bg fit left:50% vertical](https://i.imgur.com/pOZfKr0.webp)

---


### 14. Tape Dispenser

放在长桌上的胶带座。

- 顶级组: `prp_tapeDispenser_desk_01_grp`
- 几何体: `prp_tapeDispenser_desk_01_geo`


![bg fit left:50% vertical](https://i.imgur.com/3ReKazN.webp)




---


### 15. Filing Cabinet

A gray three-drawer metal filing cabinet.

Top-level group: `prp_filingCabinet_metal_threeDrawer_01_grp`
Geometry: `prp_filingCabinet_metal_threeDrawer_01_geo`
![bg fit left:50% vertical](https://i.imgur.com/V20iUS2.webp)

---


### 16. Binder Stack(活页夹堆叠)

Binders or books placed on top of the filing cabinet.

Top-level group: `prp_binderStack_office_01_grp`
Geometry: `prp_binderStack_office_01_geo`


![bg fit left:50% vertical](https://i.imgur.com/MARbtzp.webp)


---


### 17. Potted Plant

An indoor green potted plant next to the filing cabinet.

Top-level group: `prp_plant_potted_office_01_grp`
Geometry: `prp_plant_potted_office_01_geo, prp_plantPot_ceramic_01_geo`


![bg fit left:50% vertical](https://i.imgur.com/YQ6tFFf.webp)

---


### 18. Wall Clock

A round analog clock hanging on the wall.

Top-level group: `set_wallClock_analog_01_grp`
Geometry: `set_wallClock_analog_01_geo`


![bg fit left:50% vertical](https://i.imgur.com/Lej0S4s.webp)



---


### 19. Exit Sign

An "EXIT" sign hanging on the wall.

Top-level group: `set_exitSign_wall_01_grp`
Geometry: `set_exitSign_wall_01_geo`



![bg fit left:50% vertical](https://i.imgur.com/VQ0yadt.webp)


---


### 20. **磁带盘(Tape Dispenser)**

Top-level group: `prp_tapeDrive_reel_white_01_grp`
Geometry: `prp_tapeDrive_reel_white_01_geo`

![bg fit left:50% vertical](https://i.imgur.com/0Q7S0qv.webp)


---


## Best Practices (最佳实践 )

- 项目文件夹
- 定义单位 


---



### 定义单位




![bg fit left:50% vertical](https://i.imgur.com/a4A34UV.webp)


---

尺寸

![bg fit left:50% vertical](https://i.imgur.com/mNa0a9e.webp)


---



### Mug 马克杯


---

显示结构线卡边
![bg fit left:50% vertical](https://i.imgur.com/XdevORV.webp)


---

劈线 
并重复

![bg fit left:50% vertical](https://i.imgur.com/bu83ffU.webp)


![bg fit left:50% vertical](https://i.imgur.com/RBsvP6P.webp)




---

晶格变形 
![bg fit left:50% vertical](https://i.imgur.com/nEZrqqX.webp)




---

8?
![bg fit left:50% vertical](https://i.imgur.com/qkOaK5X.webp)

---

### TapeDrive Reel

步骤: 

![bg fit left:50% vertical](https://i.imgur.com/lUYo1lZ.webp)

---


![bg fit left:50% vertical](https://i.imgur.com/U5cbzYS.webp)

---


![bg fit left:50% vertical](https://i.imgur.com/TTafyFV.webp)

---


![bg fit left:50% vertical](https://i.imgur.com/UFortyP.webp)

---


![bg fit left:50% vertical](https://i.imgur.com/74uTUu3.webp)

---


![bg fit left:50% vertical](https://i.imgur.com/yCiEwUO.webp)

