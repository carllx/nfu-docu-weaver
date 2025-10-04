Making a Vertex Displacement Shader in Unity 2018.3! | Shader Graph - YouTube


 
  `Creating an Interactive Vertex Effect using Shader Graph | Unity Blog` [unity](https://blog.unity.com/technology/creating-an-interactive-vertex-effect-using-shader-graph)[youtube](https://www.youtube.com/watch?v=vh85pzT959M?t=174)
### Blog
![|200](https://cdn.sanity.io/images/fuvbjjlp/production/6057de4957520fdcde9cbf64978332084f6f99ff-1600x892.png)
(Source:  [unity.com: Creating an Interactive Vertex Effect using Shader Graph](https://unity.com/blog/engine-platform/creating-an-interactive-vertex-effect-using-shader-graph))
### Video
![|200](https://i.ytimg.com/vi/vh85pzT959M/hqdefault.jpg)
(Source:  [youtube.com: Making a Vertex Displacement Shader in Unity 2018.3! | Shader Graph](https://youtu.be/vh85pzT959M?t=1))

Transcript:
```
(00:00) in this video we'll make an interactive vertex displacement effect using unities shader graph tool we have a demo project here of the shader graph shader and some example game assets from the 3d game kit if we enter play mode we can see a sphere which we will apply a shader based displacement effect when we hit the spacebar of course in your game you would assign this to some relevant game play event in this video we'll look at how to create this shader using the shader graph package and integrate the spacebar key press trigger the goal is
(00:38) to help you understand how to design effects and shader graph and interact with them with your other c-sharp scripts these assets are available for free download at the link in the description below the project contains two shader the script that controls the shader an example level a pre-configured lightweight scriptable render pipeline and an example scene for you to get started with first let's look at how to set up shader graph and create the shader we first opened the package manager and install both the lightweight
(01:15) render pipeline package and the shader graph package to setup the lightweight render pipeline we need to create a new pipeline asset in the project to create the pipeline select create rendering lightweight render pipeline asset we can then activate this pipeline by going to edit project settings graphics and dragging the lightweight render pipeline asset into the scriptable render pipeline settings field if you're following along with the downloaded assets this step has already been completed for you now that the
(01:58) lightweight render pipeline is installed we can look at creating a new shader graph let's create a new graph in our project by selecting create shader PBR graph the PBR graph allows us to create a new material that interacts of lighting including shadows and reflections and has physically-based inputs once we have created this shader we add it to a new material and attached a material to a sphere in our example scene to achieve this effect we will displace the vertices in our mesh along its normals by changing the output position in the
(02:38) PBR master output node we will displace by using an add node on the base object position of each vertex by adding the normal vector to the base object position we can see all the vertices become extruded making the sphere appear bigger to vary this displacement we will multiply this normal vector displacement semi randomly by using a simple noise node when we click Save asset we can see in the scene view that the sphere is now displaced based on that simple noise next we will fix the seams by using object space for this simple noise
(03:23) instead of using UV space and then scroll the displacement map to create a pulsation effect we simply add a position node set to object to a time node and send it to the UV input of the simple noise node we can also use a multiply node with the time node to vary the speed of the scroll to control our displacement we expose a new shader property in our shader graph shader properties allow us to provide inputs to our shader via values entered in the inspector or via our own c-sharp scripts we will create a new vector one property
(04:08) named amount and changed a reference to underscore amount the reference field is a string name by which we will access and change the displacement via script if we do not change this it will use an auto-generated value if the string does not match exactly will not be able to address our property via script we use this amount shader property in a multiply node with the simple noise node before it gets multiplied with the normal vector this allows us to scale the noise before it's applied to the vertex positions now we can see that the
(04:51) amount variable controls how much we displace each vertex in the mesh to control this amount variable we have created a c-sharp script called displacement control and attached it to the sphere this script controls the underscore amount variable by interacting with the property we created in our material which is assigned to the mesh renderer component we store a reference to the mesh renderer component in the variable mesh render and declare new float variable displacement amount we use a simple lerp and update function
(05:27) to interpolate the displacement amount variable to the value of 0 we then set the shader variable underscore amount to displacement amount this will update the shader graphs underscore mount variable smoothing it over time to zero we're using unities default jump input access which is assigned to the spacebar to set the value of displacement amount to 1 when pressed now when we enter play mode in the scene we can see that by pressing the spacebar displacement amount gets set to the value of 1 and then slowly
(06:08) interpolates back to 0 to create the adjustable glow effect you will output to the emission in the PVR master node let's use a Voronoi noise and multiply it to a color node this will create a little modulation in the glow effect with some dark spots then we use alert node with another color node as the base color and use the amount variable in the T input this will allow us to blend between a base color node and the Voronoi color node using the amount variable then we will scroll the Clos by using a similar setup as before
(06:59) we can also add a second layer of glow for additional variation by using a simple noise node scrolled by an additional layer of time and multiplying the two noise outputs together this gives us a second layer of noise which adds visual interest because this glow effect is adjusted by the amount variable in the lerp node we could see in play mode that when we press the spacebar the sphere will activate both effects vertex displacement and glow and then slowly go back to its normal state to add a little extra touch we've also
(07:40) linked up a simple particle system in the displacement control script if you like to experiment with these features yourself we have provided the complete project with all assets meshes shader an example scene for you to download add a link in the description below we look forward to seeing what cool stuff you create with it thanks for watching you
```





Feb 12, 2019|6 MinDemoEditor

![Creating an Interactive Vertex Effect using Shader Graph](https://unity.com/_next/image?url=https%3A%2F%2Fcdn.sanity.io%2Fimages%2Ffuvbjjlp%2Fproduction%2F6057de4957520fdcde9cbf64978332084f6f99ff-1600x892.png&w=3840&q=75&dpl=dpl_6Bet6YQDdgN6pw8cmThjFZFtKKWC)

We created an example interactive vertex displacement effect with [Shader Graph](https://unity3d.com/shader-graph) and the [Lightweight Render Pipeline](https://docs.unity3d.com/Manual/ScriptableRenderPipeline.html) to help you use these features to design effects. This post will walk you through our process. Get the [demo project](https://ole.unity.com/sgvertex) with the Shader Graph shader, example scene, and some example game assets from the 3D Game Kit, and follow along!

The sphere in the video example below has a shader-based displacement effect that activates when we hit the space bar. In your game, you would assign this to some relevant gameplay event. In this article, we will look at how to create this shader using the Shader Graph package, and integrate the spacebar keypress trigger. The goal is to help you understand how to design effects in Shader Graph, and interact with them from your other C# scripts. The demo project contains the shader, the script that controls the shader, a preconfigured Lightweight Scriptable Render Pipeline (LWRP) Asset, and an example scene for you to get started with. If you prefer to view this tutorial as a video instead of text you can find it on the [Unity YouTube channel](https://youtu.be/vh85pzT959M).

Installing Shader Graph and LWRP Packages

First, let’s look at how to set up Shader Graph and the Lightweight Render Pipeline. Open the Package Manager and select install on the Lightweight RP package. This will automatically install the correct version of Shader Graph.

![Image](https://unity.com/_next/image?url=https%3A%2F%2Fcdn.sanity.io%2Fimages%2Ffuvbjjlp%2Fproduction%2F8587021908bc2897ff2bc23e2314cc625e68226d-1862x914.png&w=3840&q=75&dpl=dpl_6Bet6YQDdgN6pw8cmThjFZFtKKWC)

Once we’ve installed the Lightweight RP, we need to create a new Pipeline asset in the Project. Select Create->Rendering->Lightweight Render Pipeline asset.

We can then activate this pipeline asset by going to Edit->Project Settings->Graphics, and dragging the LightweightRenderPipelineAsset into the Scriptable Render Pipeline Settings field. If you are following along with the downloaded assets, this step has already been completed for you.

![Image](https://unity.com/_next/image?url=https%3A%2F%2Fcdn.sanity.io%2Fimages%2Ffuvbjjlp%2Fproduction%2Fe798e59e67227a2419b221e58239ef80685134ae-1702x742.png&w=3840&q=75&dpl=dpl_6Bet6YQDdgN6pw8cmThjFZFtKKWC)

Now that the Lightweight Render Pipeline is installed, we can look at creating a new Shader Graph. Let’s create a new Graph in our project by selecting Create->Shader->PBR Graph. The PBR Graph allows us to create a new shader that takes inputs from Unity’s Physically Based Rendering system,so that our shader can use features such as shadows and reflections. Once we have created this shader, we add it to a new Material and attach the Material to a Sphere in our example scene by dragging and dropping the Material onto the Sphere.

Vertex Displacement with Shader Graph

To achieve the effect, we will displace the vertices in our mesh along its normals by changing the output Position in the PBR Master output node. We will displace by using an Add node on the base Object Position of each vertex. By adding the Normal Vector to the base Object Position, we can see all the vertices become extruded, making the sphere appear bigger. To vary this displacement, we will multiply this normal vector displacement semi-randomly by using a Simple Noise node.

![Image](https://unity.com/_next/image?url=https%3A%2F%2Fcdn.sanity.io%2Fimages%2Ffuvbjjlp%2Fproduction%2F123bd3c2bfea8d1ea18e583af003cdbe0167f4f9-1160x692.png&w=3840&q=75&dpl=dpl_6Bet6YQDdgN6pw8cmThjFZFtKKWC)

When we click Save Asset, we can see in the Scene View that the sphere is now displaced based on Simple Noise.

![Image](https://unity.com/_next/image?url=https%3A%2F%2Fcdn.sanity.io%2Fimages%2Ffuvbjjlp%2Fproduction%2F476bfc168fa53d0ef0f6485c87e5cf1a2d8d389c-1900x960.png&w=3840&q=75&dpl=dpl_6Bet6YQDdgN6pw8cmThjFZFtKKWC)

Unfortunately, there are seams in the displacement because the Simple Noise is being sampled based on UV space. To fix the seams by using Object Space for the Simple Noise instead of UV Space, we can simply add a Position node set to Object.

![Image](https://unity.com/_next/image?url=https%3A%2F%2Fcdn.sanity.io%2Fimages%2Ffuvbjjlp%2Fproduction%2F28ca796db0c260585ca70ce12845b27e505d43a3-954x548.png&w=3840&q=75&dpl=dpl_6Bet6YQDdgN6pw8cmThjFZFtKKWC)

To create the pulsation effect, we will scroll this Position output by adding it to a Time node, before sending it to the Simple Noise node. We can also use a Multiply with the Time node to vary the speed of the scroll.

![image](https://unity.com/_next/image?url=https%3A%2F%2Fcdn.sanity.io%2Fimages%2Ffuvbjjlp%2Fproduction%2F0a7f1acfefa75d23d1139849c7270662751de623-992x738.png&w=3840&q=75&dpl=dpl_6Bet6YQDdgN6pw8cmThjFZFtKKWC)

Controlling Shader Graph Properties in C#

To control our displacement, we expose a new Shader Property in our Shader Graph. Shader Properties allow us to provide inputs to our shader via values entered in the Inspector, or via our own C# scripts as in this case. We will create a new Vector1 Property named Amount and changed the Reference to _Amount. The reference field is the string name by which we will access and change the displacement via script. If we do not change this, it will use an auto-generated value. If the string does not match exactly, we will not be able to address our Property via script so double check that both match, including capitalization.

![Image](https://unity.com/_next/image?url=https%3A%2F%2Fcdn.sanity.io%2Fimages%2Ffuvbjjlp%2Fproduction%2Fa0751bc4c3921fd06f929bb4af954ff1be1fe676-854x548.png&w=3840&q=75&dpl=dpl_6Bet6YQDdgN6pw8cmThjFZFtKKWC)

We use this Amount shader property in a Multiply node with the Simple Noise before it gets multiplied with the normal vector. This allows us to scale the noise before it’s applied to the vertex positions. Now, the Amount variable controls how much we displace each vertex in the mesh.

![Image](https://unity.com/_next/image?url=https%3A%2F%2Fcdn.sanity.io%2Fimages%2Ffuvbjjlp%2Fproduction%2F39f7e924c39fb200410c437d573abb2394ba6c99-1999x879.png&w=3840&q=75&dpl=dpl_6Bet6YQDdgN6pw8cmThjFZFtKKWC)

To control this Amount variable, we have created a C# script called DisplacementControl and attached it to the DisplacementSphere GameObject. This script controls the _Amount variable by interacting with the property we created in our material which is assigned to the MeshRenderer component. We store a reference to the MeshRenderer component in the variable meshRender, and declare a new float variable displacementAmount.

We use a simple lerp in the Update function to interpolate the displacementAmount variable to the value of 0. We then set the shader variable _Amount to the value stored in displacementAmount variable. This will update the Shader Graph’s _Amount variable, smoothing it over time to 0.

![Image](https://unity.com/_next/image?url=https%3A%2F%2Fcdn.sanity.io%2Fimages%2Ffuvbjjlp%2Fproduction%2Ffd207eb32e3a60b1b703712f2bdbdbb56f2dee94-1362x138.png&w=3840&q=75&dpl=dpl_6Bet6YQDdgN6pw8cmThjFZFtKKWC)

We are using Unity’s default “Jump” Input Axis (which is assigned to the space bar by default) to set the value of displacementAmount to 1 when pressed.

![Image](https://unity.com/_next/image?url=https%3A%2F%2Fcdn.sanity.io%2Fimages%2Ffuvbjjlp%2Fproduction%2Fe2bfc2740327cc479b93ebe903a673cc80e4c8ca-1098x112.png&w=3840&q=75&dpl=dpl_6Bet6YQDdgN6pw8cmThjFZFtKKWC)

Now, when we enter Play Mode in the scene, we can see that by pressing the spacebar, displacementAmount gets set to the value of 1, and then slowly interpolates back to 0.

Creating the Voronoi Glow Effect with Shader Graph

To create the adjustable glow effect, we will output to the Emission in the PBR Master node. We use a Voronoi Noise node and Multiply it to a Color node. This will create a little modulation in the glow effect with some dark spots. Then, we use a Lerp node with another Color node as the base color, and use the Amount variable in the T input. This will allow us to blend between a base Color node and the Voronoi Noise color node using the Amount variable.

![image](https://unity.com/_next/image?url=https%3A%2F%2Fcdn.sanity.io%2Fimages%2Ffuvbjjlp%2Fproduction%2Fa3ea3607711740450771416b52e0a6556c322fde-1268x600.png&w=3840&q=75&dpl=dpl_6Bet6YQDdgN6pw8cmThjFZFtKKWC)

Then, we will scroll the glow by using a similar setup as before. We use a Position node set to Object and add it to a Time node, and connect the output into the UV slot of our Voronoi Noise node.

![Image](https://unity.com/_next/image?url=https%3A%2F%2Fcdn.sanity.io%2Fimages%2Ffuvbjjlp%2Fproduction%2F0a7f1acfefa75d23d1139849c7270662751de623-992x738.png&w=3840&q=75&dpl=dpl_6Bet6YQDdgN6pw8cmThjFZFtKKWC)

![image](https://unity.com/_next/image?url=https%3A%2F%2Fcdn.sanity.io%2Fimages%2Ffuvbjjlp%2Fproduction%2Fa184d52deebac099d7a234f42856a8a61f0297a0-1600x660.png&w=3840&q=75&dpl=dpl_6Bet6YQDdgN6pw8cmThjFZFtKKWC)

![image](https://unity.com/_next/image?url=https%3A%2F%2Fcdn.sanity.io%2Fimages%2Ffuvbjjlp%2Fproduction%2F6df81bc5b0bbac59ed92d8b4cfc271a2ef42544a-1999x1342.png&w=3840&q=75&dpl=dpl_6Bet6YQDdgN6pw8cmThjFZFtKKWC)






---




```maxai__artifact

  ## 顶点位移效果实现
  ### 基础位移 
  使用 PBR Graph 创建着色器，通过法线向量和噪声节点实现网格顶点的位移效果。

  ### 优化处理
  修复 UV 空间采样导致的接缝问题，使用对象空间和时间节点创建脉动效果。

  ---

  ## C# 脚本控制
  ### 着色器属性设置
  创建 Amount 着色器属性，通过 C# 脚本控制位移效果的强度和动画。

  ### 交互实现
  编写 DisplacementControl 脚本，通过空格键触发位移效果，实现平滑的数值插值。

  ---

  ## Voronoi 发光效果
  ### 基础发光
  使用 Voronoi 噪声和颜色节点创建可调节的发光效果，实现动态颜色混合。

  ### 效果增强
  添加滚动效果和多层噪声，提升视觉表现力，与位移效果协同工作。


```
