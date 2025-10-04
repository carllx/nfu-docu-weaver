
$m_i \frac{d^2 x_i}{dt^2} = -k (x_i - x_g) - b \left(\frac{dx_i}{dt} - \frac{dx_g}{dt}\right) + F_e$

m_i 是mass (质量) of the vertex，
x_i 是position (位置) of the vertex，
x_g 是goal position (目标位置) of the vertex，
k 是stiffness (刚度) of the spring，
b 是damping (阻尼) of the spring，
F_e 是external force (外力) (如gravity (重力)或wind (风力))。

这个equation (方程)可以用各种method (方法)数值求解，如Euler method (欧拉法)或Runge-Kutta method (龙格-库塔法)


# Blender Softbody Physics Tutorial
(-- `Intro/ Blender softbody physics tutorial | How to make 0 gravity softbody in blender` [youtube](https://youtu.be/RxDkQbbfPYc?t=2))
![|200](https://i.ytimg.com/vi/RxDkQbbfPYc/hqdefault.jpg)

This tutorial will show you how to create a cool soft body physics animation in Blender.
## Step 1: Set up the Scene
1.  Delete all default objects in the scene.
2.  Add an HDRI from HDRI Haven for lighting.
![150|](https://i.imgur.com/qi2ljmm.png)
3.  Change the render engine to Cycles and turn on GPU compute and denoising.
![150|](https://i.imgur.com/QiJEuA8.png)


4.  Add a backdrop to the scene by adding a plane, scaling it up, going into edit mode, extruding one of the edges up, and then beveling it.
5.  Shade smooth and enable auto smooth.
6.  Add a camera and position it roughly.
7.  Add extra objects into the scene for the soft bodies to collide with.

## Step 2: Add Physics to the Scene

1.  Select the objects that the ico spheres will collide with and add collision to all of them.
2.  Add a solidify modifier to the backdrop and then add collision after adding the modifier.
3.  Add an ico sphere and scale it down.
4.  Select the ico sphere and add `soft body` and then `collision` in that order. [youtube](https://youtu.be/RxDkQbbfPYc?t=192)
5.  Turn off goal %%ico球体不会试图保持其形状，允许它更容易变形。%%and turn  Edges bending to 0.8. %%可以调整软体的硬度，使其更加灵活和有弹性%%
6.  Add a `force field` to the scene and change the strength to -0.2.
7.  Select the ico sphere and turn gravity off in field weights.
8.  Keyframe gravity and force at frame 0 and duplicate that keyframe to about frame 200.
9.  Extend the timeline to frame 350 and change the end frame to 350 in the cache setting for the ico sphere's physics.
10.  Turn gravity on and turn the force field's effects off at frame 205 and keyframe that.
11.  Duplicate the ico sphere a few times.

## Step 3: Bake the Physics

1.  Select one of the ico spheres and click bake all dynamics in the cache setting in the soft body settings.

## Step 4: Add Depth to the Animation

1.  Animate the camera zooming in and out.

## Step 5: Add Shaders and Render Settings

1.  Create a gold material and assign it to each ico sphere.
2.  Make the material metallic and turn the roughness down.
3.  Create a light blue material for the backdrop.
4.  Set the render settings to 40 samples, turn on optics denoising and adaptive sampling.
5.  Change the output properties to ffmpeg video