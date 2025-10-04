### 操作界面

构建3D数字对象界面的三个主要板块正是 [[Baruch Spinoza]] 用Substance, attributes, and modes 对"What is?" 的回答.


### 更改背景
![](https://i.imgur.com/oTjfx70.png)

更改渲染背景
Locate the **"Hierarchy" window** then click on **"My Camera"** then in the **"Inspector" window**, under the **"Camera"** section, you have the **"Background"** field. Click on the color rectangle to the right (it's default color is blue) to change the color.

### Game's Camera 对齐 Scene's Camera
`Ctrl + Shit + F`
GameObject > Align with View 


### Kinematic vs Dynamic (Ridgbody)
如果 `isKinematic`, unity将不会处理动力问题, 通过更改 transform.position, rigidbody 将受到动画或脚本控制的完全控制。 -- [unity3d](https://docs.unity3d.com/ScriptReference/Rigidbody-isKinematic.html)
![](https://i.imgur.com/XqPrcxP.png)
--`|Basic Differences in Script/ Dynamic vs [[kinetic Art|Kinematic]] vs Static Rigidbody 2D in Unity Game Engine` [youtube](https://www.youtube.com/watch?v=xHvurJicxfs?t=411)

学术中: [[kinetic Art]]




## Visual Script



### 打组快捷键
将之前的代打组. Ctrl(CMD) 框选nodes

###  Change Human Naming to Programmer Naming
> Preference > Visual Script > Core > Human Naming


### Find inactive GameObject
Unity cannot find inactive GameObjects. [stackoverflow](https://stackoverflow.com/questions/44456133/find-inactive-gameobject-by-name-tag-or-layer/44456334#44456334) .因此, IF GameObject m_IsActive == False;  `FindObjectWithTag`  和  `GameObject.Find("name")` get `null`  .
解决办法:
- 将 inactive 的 object 存入root object 的 variable 内. ![](https://i.imgur.com/iIQcWv0.png)
- 通过 GameObject(root) 访问Variable.  ![](https://i.imgur.com/51x6K5C.png)


### Lighting
[[(Tips)Lighting 没有保留, when Reload Scene]]


### 更改 Alpha
通过 Material 
通过Instance. 
通过Controler(UI Slider)
--[youtube](https://www.youtube.com/watch?v=IpdgeNbXN5o?t=320)[youtube playlist](https://www.youtube.com/playlist?list=PLb34wPRpZdVeoBHH-WWRzGT7J6d32mEww)
--`|Random Color/ Beginner Bolt Tutorial: How to Change Colors on Materials with Visual Scripting` [youtube](https://www.youtube.com/watch?v=1V8TZNMqfKY?t=166)[youtube playlist](https://www.youtube.com/playlist?list=PL8b0pe7-Fe_j4O5Gamq2kcXC6FVUww1SY)
