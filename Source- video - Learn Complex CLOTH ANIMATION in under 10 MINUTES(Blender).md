
![|200](https://i.ytimg.com/vi/NQLdrXndnQU/hqdefault.jpg)
(Source:  [youtube.com: Learn Complex CLOTH ANIMATION in under 10 MINUTES! | Blender 3D Tutorial](https://youtu.be/NQLdrXndnQU?t=22))


Learn Complex CLOTH ANIMATION in under 10 MINUTES! | Blender 3D Tutorial - YouTube
https://www.youtube.com/watch?v=NQLdrXndnQU

Transcript:

DROP or THROW
CATCH a cloth simulation
CATCH cloth simulation QUICK & EASY TIPS


## Set Up 
(00:00) 
In this video I am going to show you how to do complex cloth animation,  including throwing and catching the cloth.   It's easier than you think, could save you a lot of time and it only requires a few modifiers! You'll learn to create one pin,  multiple pins, how to animate them, drop or throw the cloth, and how to catch it again Soon you will have complete control over your cloth simulations! First, set up the cloth by subdividing a plane, I'll do 30 cuts to keep it quick and clear but it's up to your preference,
(00:27) Right Click and Shade Smooth, Add a Cloth Sim, Turn on Self Collision, I leave the quality steps and collisions quality low while working, then I increase them for the final sim, other settings are up to you. Add a subdivision surface modifier to smooth it out, I add a solidify modifier set very thinly just to add a bit more volume And there we are! Any time you want to test the simulation, click bake in the cloth sim settings, Make sure it's in the frame range you want, and to test new changes click Delete Bake and bake again


## 1 - with ONE PIN
(00:53) 
 ADDING ONE PIN The whole set up of animating cloth simulations relies on using the Pin Group, found under Shape in the cloth settings, We put certain vertices of the cloth into this Pin Group  and it tells Blender what vertices not to simulate, Go into Edit Mode and create a new vertex group called 'Pin Group' Select the vertices you want the cloth to hang from, With weight at 1, click Assign to put them in the vertex group These vertices can be in whatever arrangement you want, Now in the 'Pin Group' select this vertex group and the cloth will hang from these vertices!
(01:21) Any vertices you assign to this group with a weight of 1 will now be pinned. A key point to note for later on is the cloth will only hang from vertices  with a weight value of 1 that are inside the pin group,  any vertice with a value of 0 or that are outside the pin group will not pin and will just follow the simulation.
(01:35) Next we need to animate it, this is by using empties and a hook modifier,  which will attatch some of our vertices to the empty so we can move the cloth about Add an empty, and position it where the cloth is pinned,  we are just pinning it in one place for now. Name this 'Pin 1'. We need to add a new vertex group for each pin,  as we don't want to directly attach the 'Pin group' to any controls, this is important for being able to add more than 1 pin point.
(01:55) Add a new vertex group called 'Pin 1', and assign the vertices you want the cloth to be pinned from.  The Pin 1 and Pin Group vertices will be the same when there's only 1 control. Now to attach the control. Select the cloth, and add the modifier 'hook'.  We then select the 'Pin 1' under object, then select the 'Pin 1' under vertex group.
(02:11) This hooks the pin vertices to the empty,  now very important! Move the hook modifier above the cloth simulation,  this means it accounts for the control movement first, and then simulates the cloth accordingly,  rather than simulating first, then only moving the attached vertices. If you've done these stages right, when you animate the empty,  the cloth should now follow it and simulate realistically.
(02:35) 
## 2 - with TWO PINS
 ADD A SECOND PIN Now to add another pin go into edit mode and choose the vertices you want the second pin to control.  Create a new vertex group called Pin 2 and assign these vertices to it. Now, we also need to assign these vertices to the Pin Group to tell Blender to not simulate them so that we can animate them.
(02:51) We have to do this because in the cloth sim settings, there is only room for one vertex group.  There's no room to put all of the control vertex groups directly into the actual Pin Group in the cloth sim,  so we combine them all into one vertex group first, which can then be put into the Pin Group. This is why to begin with we added the seperate vertex groups, one for the pin group, and one to hook to the control, so we could then easily add more controls later on.
(03:13) In summary, the Pin Group is just a combination of all of the control vertex groups,  so any new vertices you assign to either existing or new controls, make sure to also assign them to the Pin Group. A last thing to note, make sure there are no spare vertices in the Pin Group that aren't in any control vertex groups, as these will just stay in place during the simulation.
(03:30) Next place an empty in the area it's controlling, and label it Pin 2.  Add a new hook modifier on the cloth, now selecting Pin 2 for both, and move it above the cloth sim in the stack. Now you can animate the controls seperately and the cloth will follow.  


## 3 - with MULTIPLE PINS
 ADD MULTIPLE PINS If you want to add more pins simply repeat the process of adding the second.
(03:52) Add a new vertex group and assign vertices you want pinning, also add these to the Pin Group.  Add a new empty, attach it to the cloth with a hook modifier selecting the new pin and new vertex group,  move it above the cloth in the stack and you're done! Ready to animate.  Repeat this as many times as you like! 


## 4 - DROP or THROW
 RELEASING PINS Now how do we drop or throw the cloth from a control.
(04:16) I'm going to show you on one pin, then I'll show it on multiple. You may think you can just deactivate the hook modifier,  but the vertices are still pinned in the pin group so it doesn't work. We need to actually adjust the Pin Group vertices during the animation. Remember anything that does not have a weight of 1 in the Pin Group will just follow the simulation.
(04:32) What we do is use a Vertex Weight Mix Modifier on the cloth, with the mix mode set to subtract. In group A we select the Pin Group, and in group B, we select the vertex group of the control we want to seperate the cloth from.  And its very important to move this above the cloth sim in the stack or it won't work! What this modifier does is it takes the pin group vertices, and subtracts the control vertices from it so they no longer have a weight of 1,  and therefore are no longer active in the Pin Group
(04:55) and just follow the simulation, despite still being hooked to the control. Under influence, this creates a toggle of whether the cloth is attached to a control or not.  At 0, it is connected, and at 1 it is not connected. You can animate this toggle whenever you like! So to drop the cloth, go to the frame you want it to drop,  go back 1 frame putting the slider to 0 and pressing 'i' to add a keyframe.
(05:15) Next frame change the slider to 1 and add a keyframe. The cloth will now be released on this frame. To throw the cloth, time the release during an animation of the control  and it will fly however you want it to! To use this with multiple controls, add a new Vertex Weight Mix for each control, set them to subtract,  make Group A the Pin Group, and Group B the specific vertex group you want to subtract from the Pin Group.
(05:40) I'm putting influence to 0 so the cloth stays attached as default.  Remember to put them above the cloth in the stack. You now have switches for each control to release them individually during the animation in whatever way you want to! Same as before, insert keyframes for these influence sliders when you want to release the cloth from a specific point.
(06:01) You should be in a position where on the cloth modifiers,  each control has a hook modifier and a vertex weight mix modifier working with it,  this is the base set up for doing whatever cloth animations you need to,  and repeat this with as many controls as you need. You can combine animating the control and releasing the cloth in whatever way you like to start creating more complex animations.
(06:21) So now we've thrown the cloth, 

## 5 - CATCH a cloth
but how do we catch it again? 
 CATCHING THE CLOTH This is super simple if you've made it this far,  it just requires a little individual tweaking to make it look natural.  All we do is the opposite of dropping the cloth by reattaching it using the Vertex Weight Mix modifier.
(06:35) Here we have 2 pins connected to a cloth using hook and vertex weight mix modifiers like before. Pin 1 is attached and Pin 2 isn't using the influence switches,  so when we run the sim the cloth hangs from only Pin 1.  Our Aim is to drop the cloth from Pin 1 and catch it with Pin 2. At frame 20, we will keyframe the vertex weight influence to detatch Pin 1 and let the cloth fall.
(06:59) Then at frame 60, we will do the opposite with Pin 2 and keyframe the vertex weight influence to attach to the cloth.  Now when we run the simulation, the cloth falls from Pin 1 and flies to Pin 2.  This is the base concept of how we catch the cloth,  all we have to do is animate Pin 2 to a more natural position.
(07:18) Normally I keyframe all controls with the cloth at the simulation start frame  as the vertices get pulled around still from the hook modifier,  but when a baked simulation has started,  you can then move and animate the controls to the right positions without affecting the mesh. I also changed around the timings of the vertex weight keyframes to stop the cloth from swinging and shorten the fall.
(07:38) So, we need to animate Pin 2 to the rough position the cloth is on the frame it reattaches.  I animated this over one frame to keep things simple,  and placed it in the middle away from the frame it reattaches  otherwise the simulation can take its movement into account causing sudden cloth movements. Not great but it's a step in the right direction! Now we make adjustments to find what we like.
(08:01) I tried moving the control to a different part of the cloth and it looks so much smoother! One trick you can try to smooth things out is extending the number of vertex weight mix frames,  so it rejoins the control more gradually over multiple frames. You can also animate the control once the cloth is reattached.
(08:17) I did it here over a few frames to help pull the cloth slightly   so it stopped more suddenly and fell into a more flowing motion.  



## QUICK & EASY TIPS
There are a couple of solutions if you want to create these simulations  a bit quicker and easier! First, I have found the closer to a corner the pin vertex group is  the more often it will flow naturally with very little tweaking as there's less cloth around it to collide and cause issues.
(08:36) But it does often result in a more simplistic simulation  as there's less collisions and folds being created. Secondly, You don't actually have to use 2 pin controls.  You can use one and animate it to drop and catch the same cloth,  but that's as long as you're happy with it being attached to the same vertices.
(08:50) The reason I showed you two controls is there are many scenarios  you'll need to release and catch from two different parts of the cloth.  For example, a flag flying away then being caught requires a long pin group along the edge to release, and a small point to be caught.  This requires two different vertex groups.
(09:04) Here I just used a strong wind force to direct the cloth. You can combine all of these techniques from this video for whatever animation you require! 



