# TouchDesigner Introduction to GLSL  

Davide Santini  

# TOUCHDESIGNER INTRODUCTION TO GLSL  

Davide Santini  

# Copyright $\copyright$ 2020 Davide Santini  

TouchDesigner Introduction to GLSL  

$\copyright$ 2020 Davide Santini // Deltacut // www.deltacut.it  

TouchDesigner is a property of Derivative, all rights reserved.  

For any comment, correction, information or just to have a little a chat, please write to me on Instagram $@$ Deltacut (for faster response time) or via email at info@deltacut.it  

# CONTENTS  

Title Page   
Copyright   
About This Book   
About TouchDesigner   
Notes   
Part 1   
01. What Is GLSL?   
02. Why GLSL?   
03. GLSL in TouchDesigner   
04. Setup an External Editor   
Part 2   
05. Colors   
06. Step Function   
07. Draw a Circle   
08. Draw a Rectangle   
09. Custom Functions and GLSL Snippets   
10. PI   
11. Draw a Polygon   
12. Gradients   
13. Translate   
14. Rotate  

15. Scale   
16. Animations   
17. Grids and Patterns   
18. Further Drawings   
Part 3   
19. Project Files   
20. Static Particle Systems   
21. Fixing Normals   
22. Moving the System   
23. Animating Particles   
24. Conclusion  

# ABOUT THIS BOOK  

This book will guide you through an introductory course on programming GLSL shaders inside TouchDesigner.  

We’ll start from the very basic concepts, and we’ll try to explain everything without skipping any intermediate step. No previous coding experience is required, nor particular familiarity with TouchDesigner or with any other software or coding language.  

A minimal set of mathematical skills can help you follow and understand better all of the inner workings of the shaders, but don’t be afraid; we’ll try to explain everything as painlessly as possible. If you know how to add and multiply numbers and have an idea of what a sine function is, you know enough to follow along with the explanations.  

Scrolling through the pages of this book, you will find three main sections:  

at the very beginning there is a short introductory part that will guide you through the setup phase;  

the second section will teach you how to create and manipulate digital images using various GLSL techniques;  

the third part will aim at creating one of the primary examples of GLSL power and flexibility, a particle system. It will also teach you the basics of transforming and animating such systems.  

During our journey together, we’ll also try to give you some general information about GLSL and coding, validating everything we do with simple but complete explanations.  

# ABOUT TOUCHDESIGNER  

Derivative’s TouchDesigner is the leading interactive development platform for visual art.  

Focused on real-time, generative, and interactive experiences, TouchDesigner is now used for installations at museums and institutions, for live events and shows, projection mapping, compositing, custom application building, and many other scenarios.  

Thanks to its excellent interoperability value, it can easily integrate different sensors and hardware into any environment and communicate with almost any other software. Supported protocols are MIDI, NDI, OSC, DMX, ArtNet, Dante, TUIO, MQTT, Siphon/Spout, SocketIO, FBX, USD, and more.  

At its core, TouchDesigner is a node-based graphic programming language.  

Its main elements, called nodes or Operators, can be linked together (or, as they say, wired together) in different combinations, and their parameters can be modified to achieve even very complex results.  

The idea at the foundation of TouchDesigner is not too far from the regulating principles of software such as Max/MSP, Pure Data, or even movie production utilities like Nuke and Houdini. Many of the experienced readers will, therefore, find themselves at home in almost no time, but don’t be scared if you are a complete novice in this kind of development environment: TouchDesigner is very intuitive and extremely user-friendly. As soon as you get in the right perspective, you’ll be able to achieve complete and articulated productions.  

Let’s start from the beginning. What can TouchDesigner do?  

The answer is pretty simple: TouchDesigner is a coding language, so you can use it to build anything.  

But it would be untruthful to say that it is “recommended” for anything.  

TouchDesigner works best when creating and managing graphic content in real-time, with a particular focus on interactivity. It is excellent for driving screens, projectors, lights, LEDs, and similar devices, but it is also capable of controlling web-hosted contents. Moreover, its Python integration easily allows for the implementation of external libraries or the creation of custom scripts and functions, further extending TouchDesigner’s versatility.  

This unique flexibility is its main strength.  

You could probably find individual frameworks that can manage single features of a show or installation. Still, TouchDesigner can efficiently and quickly communicate with all of them, with massive customization options and control.  

To get started, download TouchDesigner from Derivative’s website:   
https://derivative.ca/   
Run the downloaded installer and follow the installation instructions.   
Please remember that TouchDesigner is free for non-commercial projects, while you need to purchase a commercial or professional license from their online shop if you want to use it for paid works.  

# NOTES  

The following projects and examples are tested on TouchDesigner099 build 2020.25380.  

For Mac users:  

on macOS, you can replace the “Ctrl” key with the “Cmd” key and the “Alt” key with the “Option” key.  

For trackpad users:  

on a trackpad or a two-buttons mouse, you can replace the Middle Mouse Button (MMB) using the combination “Alt” $+$ Right Mouse Button (RMB). This method works both for clicking and dragging actions.  

# PART 1  

Getting Things Ready  

# 01. WHAT IS GLSL?  

GLSL, short for OpenGL Shading Language, is a high-level programming language modeled after C and $\mathsf{C}\mathsf{+}\mathsf{+}$ .  

It is mainly used to create snippets of code called shaders that will be executed by the GPU of the system in use. It is especially suitable for providing the programmers with direct and immediate access to the graphic pipeline, without requiring the use of assembly code or super-specific programming languages.  

The shaders thus created can be enormously optimized for making the best out of modern graphic cards, allowing the user to manipulate geometries, generate particle systems or even create post-processing effects with as little impact as possible on system-performance.  

There are different kinds of fragment shaders that are usually involved in the graphic pipeline flow: Vertex shaders, Tessellation shaders, Geometry shaders, Pixel shaders, and Compute shaders.  

In this introductory-level book, we’ll mainly deal with Pixel shaders, the pipeline section responsible for assigning the desired colors and alpha values to each pixel, and with Vertex shaders, when working with 3D geometries.  

GLSL can also easily be integrated into different software used in the graphic industry, as it is widely used in video games programming, cinema video effects and post-production, and various scenarios that need computergenerated images.  

# 02. WHY GLSL?  

There are hundreds of software on the market that allow even inexperienced users to create or process digital images in many different ways. So, why should one spend time and energy trying to learn GLSL, a coding language with the ill-repute of being particularly difficult and painful to master?  

Most of the work done by modern computers nowadays is taken care of by the CPU, the central processing unit. While being particularly powerful on its own, the CPU processes instructions serially, and each core (or each thread) of the processor can run only one task at a time. Each calculation has to be passed entirely through before the system can start working on the next operation. If we think of a “standard” modern display, with a resolution of $1920{\times}1080$ pixels, we quickly conclude that we would need to run $1920\times1080{=}2073600$ operations for each image displayed on our screen. Overall, with a typical refresh rate of 60 frames per second, it would mean 124416000 actions each second.  

While a CPU can be easily overwhelmed by this amount of operations in so short a time, GPUs are the perfect solution for handling them.  

A GPU, graphics processing unit, is a strongly parallelized hardware that is capable of running lots of operations simultaneously. Thanks to its uniquely designed hardware, a GPU can thus “accelerate” processes that would require much more time when handled by the CPU alone. It can even quickly solve in-hardware mathematical operations, such as square matrix multiplications, and perform trigonometrical calculations.  

GLSL is the perfect companion for running commands on GPUs, allowing for excellent programming flexibility while running incredibly fast.  

But GLSL codes have to take into account the limitations of the graphic  

hardware architecture itself.  

Running multiple operations at the same time requires each one of them to be executed independently from the others, making it impossible to crossreference the results from other activities that are running in different “sections” of the GPU. Also, the GPU has no memory of the operations that it has completed, and actions such as building an evolving particle system can, therefore, be quite different from what a typical programmer is used to expect.  

# 03. GLSL IN TOUCHDESIGNER  

TouchDesigner natively has multiple ways of handling GLSL integration, each one with a different purpose: GLSL TOPs, GLSL Multi TOPs, and the GLSL MATs are the Operators that we will encounter.  

Following the TouchDesigner naming convention, a TOP is a Texture Operator, which is a node that acts in the 2D world, creating or processing images and videos; a MAT instead is a Material Operator, which produces materials for 2D or 3D geometries.  

In the first parts of this book, we’ll mainly work in a bi-dimensional world, using the GLSL TOP, which will allow us to render GLSL shaders into TOP images. The GLSL Multi TOP can also be useful, since it replicates the same functionalities of the basic GLSL TOP but allowing for multiple inputs.  

If you want to have a glimpse of some different GLSL implementations, don’t hesitate to explore the pre-built components available in the Palette: lots of them use GLSL scripts to operate. By clicking the Open Palette button on the top-left corner of the screen (shortcut “CTRL $+$ b” on Windows, “Cmd $+\mathrm{\boldmath~b~}^{,}$ on macOS), you can show the Palette.  

This browser contains a collection of many different Operators that you can simply drag and drop inside your Network and play with, to explore their functionality, and peep at their inner working. It’s a good practice to know them pretty well: you never know when they will come in handy, and they can easily give exciting suggestions on how to solve a problem!  

# 04. SETUP AN EXTERNAL EDITOR  

While TouchDesigner can be used as a stand-alone system to edit and create GLSL scripts, an external script editor can make the difference when coding (and even TouchDesigner’s developers themselves strongly recommend to use one).  

If you choose not to install any external editor, you will be able to create or modify existing scripts simply by using Text DATs (data Operators that can contain text) and writing your code inside of them. By default, when you create a text DAT, it will be in kind of a read only-mode; if you wish to edit it, you just need to “activate” it by clicking on the small plus sign on its bottom-right corner (shortcut “a” while selected).  

If, instead, you choose to use an external editor, the easiest way to open the desired Text DAT in your application is right-clicking on the Operator and choosing “Edit contents...” (shortcut $^{\acute{\iota}\acute{\left(\mathrm{{Ctrl}}\right.}}+\mathrm{{\bf~e}}^{{\mathfrak{N}}}$ or $^{\epsilon}\mathrm{Cmd}+\mathrm{\Large~e}^{{\mathfrak{N}}}$ when the Operator is selected).  

In this book, we will use Microsoft Visual Studio Code, one of the most widespread editors freely available, and we will suggest some GLSL integrations for it. You can, however, use some other software as well, following your preferences or habits. The only difference will probably be in the color scheme and in selecting the correct application path during its setup.  

Select the (stable) version for the OS you are working on and launch the download. When the file has finished downloading, simply run it and follow the installation instructions. No particular requirements are needed to work in our environment, so you can configure the software preferences and installation path as you prefer. Once the setup is complete, open Visual Studio Code.  

Since Visual Studio Code does not support GLSL by default, we now need to add an extension that will allow us to edit our code more efficiently. Click on the “Extensions” icon on the left border and search for “Shader languages support for VS Code”, select the first result, and click “Install”. You can now close Visual Studio Code and open TouchDesigner.  

The last step is to tell TouchDesigner what application to use as an external script editor. On the top bar menu, click on “Edit” and select the “Preferences” voice. Now go in the DATs tab and click the folder icon next to “Text Editor”. You can now select the “Code.exe” file from the installation path of Visual Studio Code.  

Default path on Windows should be something like this:  

C:/Users/USERNAME/AppData/Local/Programs/Microsoft VS Code   
If you cannot see the “AppData” folder, you probably must enable “Show hidden folders” in Windows settings.   
Click “Save” and close TouchDesigner’s preferences.   
Everything is now up and running as we need it!  

# PART 2  

Let's Start Drawing  

# 05. COLORS  

Open a new TouchDesigner project.  

Empty the Network by deleting all pre-existing Operators $^{'\epsilon}\mathrm{Ctrl}+\mathrm{a}^{,}$ to select all, “Delete” key to delete selected Operators), and create a “GLSL” TOP (double click on the empty Network and choose “GLSL” from the violet “TOP” section).  

By default this GLSL Operator comes with three “Text” DATs attached: the first one, called “glsl1_pixel”, represents the Pixel shader referenced by our “glsl1” TOP; the other one, called “glsl1_info”, is a debug tool that tells us if the script is working fine and prints out any problem that should arise; the last one is a Compute shader DAT, called “glsl1_compute”, but we won’t need it and we can ignore it at this stage.  

The “GLSL” TOP is already showing something in its output, generating a completely white image.  

![images/b57584ae2a657ef62ca48776a0b33ce85f626a69f3383def968c688f6516062d.jpg](https://i.imgur.com/PQeX3q5.jpeg)  

We can look at the default Pixel shader script and try to understand how this happens.  

Select the “glsl1_pixel” DAT and open it in the code editor $\mathrm{(^{66}C t r l+e^{,99}}$ or right-click on the node and select “Edit Contents...”).  

// Example Pixel Shader   
// uniform float exampleUniform;   
out vec4 fragColor;   
void main()   
{   
// vec4 color $=$ texture(sTD2DInputs[0], vUV.st); vec4 color $=$ vec4(1.0);   
fragColor $=$ TDOutputSwizzle(color); We can immediately notice a couple of things.   
First of all, comments.  

If we want to add a commented line in GLSL, we must prepend a double slash to our text.  

After the preliminary commented lines, at line 6, we are met with the first variable definition, with the script stating which variable represents its output. The name assigned to our output buffer is “fragColor”, and it is a “vec4” kind of variable: this means that it is a vector containing four floating values, that correspond to the colors of our output image. More on this later.  

Some other often used variable types are “vec2” and “vec3” for vectors storing two or three elements, “int” for integer numbers and “float” for decimal numbers.  

In the next line, we can see the opening of the most critical part of our script: the main function.  

This function contains all the commands that our script will execute every frame. Let’s ignore the commented line for the moment and just focus on line 10. Here, we have the definition of a new variable, called “color”: this, too, is a “vec4” variable, and its value is declared after the equal sign. It’s a vector containing four numbers, each one equal to 1.0. We could also have extensively written  

# vec4 color $=$ vec4(1.0, 1.0, 1.0, 1.0);  

As we can guess by the name of the variable, we are storing a color inside of it. The four values represent the red channel, the green channel, the blue channel, and the alpha channel of our image, in a normalized 0 to 1 range. For those who are not familiar with computer graphics, the alpha channel is an auxiliary channel usually employed to define the transparency of our image, where 0 means fully transparent, and 1 means completely opaque. In our default example, we are storing the white color.  

The next and last line of our code is an additional step that we must introduce when working in TouchDesigner to avoid system-dependent errors. We have to pass the final variable representing the colors of our pixels through the “TDOutputSwizzle” function. This function has the purpose of correctly managing colors order on both macOS and Windows since, in some particular scenarios, they could otherwise behave differently. Neglecting it, we could induce some unexpected behaviors when moving a project from an Operative System to the other.  

Also, notice how each line must end with a “;” symbol. Omitting one of these is an incredibly common mistake, so make sure to always check for semicolons.  

This example script is probably the most straightforward code that we can write in GLSL. In fact, apart from “structural” operations, we are using only line 10 to choose what color to output on all of our pixels.  

We can now try and modify this line, writing, for example, something like this:  

$$
v e c4c o l o r=v e c4(1.0,0.0,0.5,1.0);
$$  

Save the script in Visual Studio Code to update it, and look at the way the color in our GLSL TOP has changed to bright pink.  

![images/19306b175e25b8f23665902accd150cf367c84f90dc9b398b3212f29805f1518.jpg](https://i.imgur.com/DTa81dY.jpeg)  

This happens because we are now filling $100\%$ of the red channel, $0\%$ of the green channel, $50\%$ of the blue channel, and $100\%$ of the alpha channel. Freely try other values to get used to the way colors get mixed and, if you occur in some errors, check the “glsl1_info” DAT to help you spot what’s wrong.  

We can also choose to select and modify one single color at a time. We can achieve this easily using swizzling, a technique that allows us to determine which channel of a variable to change.  

After line 10, add a new line writing: color. $r=0.0$ ;  

![images/d6595d0045acc160a4150aefd832fe3919abec221b5b8a29e5f0cbf508f7695c.jpg](https://i.imgur.com/dY9irHH.jpeg)  

Save the script and check the result. We have just overwritten the red value of the “color” variable, thus modifying the final output. We could also have referenced one of the other channels by writing the proper suffix.  

In GLSL codes, the four channels of an image can be referenced using the   
letters r, g, b, a; but we can also use another nomenclature and call for the x,   
y, z, w channels, or finally use the s, t, p, q naming convention. These are just   
different naming systems, freely interchangeable between them, as long as we   
don’t mix them in the same declaration. So, for example, we could write   
color.g,   
to reference the second channel,   
color.x,   
to reference the first channel,   
color.yz,   
to reference the second and third channels,   
color.stq,   
to reference the first, second and fourth channels, color.grba,   
to reference (in this order) the second, first, third and fourth channels; but we cannot mix the different conventions in the same call and write color.rgzw.  

This last line would give us an error.  

Now, let’s try and use some of these expressions to change the output.  

Write the following code:  

out vec4 fragColor;   
void main()   
{   
vec4 color $=$ vec4(1.0);   
color. $\mathrm{r}=0.2$ ;   
color. $\mathrm{{y}=0.8}$ ;   
color.qp $=$ vec2(1.0);   
fragColor $=$ TDOutputSwizzle(color); 9. }  

There should be a light-blue color coming from our GLSL TOP output.  

![images/fee12a724e73ef5d879c0bdc96c4e5a4aaf8b3d4ecca010df56607fef71b4b1d.jpg](https://i.imgur.com/YjMGTY5.jpeg)  

Starting from this example, try and do some experiments changing the values and the channels involved, until you feel confident enough on how channel swizzling works. Then, get ready to start the next chapter.  

# 06. STEP FUNCTION  

Now that we know how to output a single uniform color in GLSL, we can further proceed to learn how to create shapes. This is usually done using one or a combination of more shaping functions, mathematical expressions that allow us to manage color distribution inside of our canvas. The simplest among them is the so-called step function.  

Before we see it in action, we must clarify an essential consideration concerning our coordinate system. When working in GLSL, we want the same code to run with all kinds of image resolution, avoiding the hassle of manually modifying our settings for any different format. To achieve this, we can normalize our image space. This means scaling both the horizontal and vertical coordinate to be contained in a 0.0 to 1.0 range.  

This way, the bottom left corner will always have $\textrm{x}=0.0$ and $\mathrm{~y~}=~0.0$ coordinates; we can express them using the vector notation (0.0, 0.0). Analogously, the bottom right corner will always have (1.0, 0.0) coordinates, the top left (0.0, 1.0) and the top right (1.0, 1.0).  

In GLSL, we would typically need to do this operation manually, by defining a new variable as the ratio between the window relative coordinate values and the resolution of our canvas, something like this:  

vec2 st = glFragCoord.xy / uResolution;  

TouchDesigner, however, automatically does it, and stores the result in a variable named “vUV”. This way, when we need to recall the first two channels of our normalized space, corresponding to the x and y coordinates, we just need to call for “vUV.st”.  

Let’s try to visualize this normalization in action.  

Open a new empty project and create a “GLSL” TOP, then select the “Text DAT” corresponding to the Pixel shader and open it in the external editor. Delete the default example code and write the following:  

1. out vec4 fragColor;   
2. void main()   
3. {   
4. vec4 color $=$ vec4(vUV.s, 0.0, 0.0, 1.0);   
5. fragColor $=$ TDOutputSwizzle(color);   
6. }  

![images/f3e3646c10c88990996133d0255b08bb4fb84d07bc9080c502ae0fded6c3c6a5.jpg](https://i.imgur.com/CJgvDy0.jpeg)  

Since we mapped the x coordinate values to our red channel, we should see a red horizontal gradient, fading from black to full red from left to right.  

We can do something similar for the y coordinate just by substituting vUV.s with vUV.t at line 4.  

![images/35a2e6127bebfd549f7d62ca6e6eb2bebf0b637703f9607beece2fc8179f6f2d.jpg](https://i.imgur.com/w4BhbEb.jpeg)  

Finally, let’s view both normalized coordinates at the same time, by assigning them to different channels:  

1. out vec4 fragColor;   
2. void main()   
3. {   
4. vec4 color $=$ vec4(vUV.s, vUV.t, 0.0, 1.0);   
5. fragColor $=$ TDOutputSwizzle(color);   
6. }  

![images/67e5e3eda7cf5d37cf7e1d8a4475f0a9a56afa635d2f5bf9ae54785059fa57ab.jpg](https://i.imgur.com/NyYkksn.jpeg)  

This way, the red channel represents the x values, and the green channel the y values of our normalized coordinate system.  

Now that we have clarified this fundamental step, we can bring back our step function and see it in action.  

Mathematically, it outputs 0.0 if the input value is less than 0.5, or 1.0 if it is equal or greater than 0.5.  

$$
\begin{array}{r}{\left\{{s t e p(x)}=0.0~i f~x<0.5\right.}\ {\left.{s t e p(x)}=1.0~i f~x\geqslant0.5\right.}\end{array}
$$  

We can, therefore, use it to assign the value 0.0 to some pixels, and 1.0 to all of the others. Try writing this code:  

1. out vec4 fragColor;   
2. void main()   
3. {   
4. vec4 color $=$ vec4(step(0.5, vUV.s), 0.0, 0.0, 1.0);   
5. fragColor $=$ TDOutputSwizzle(color);   
6. }  

![images/6716c25e76d177f5ef5093f7e3388004b065755419d1b8d54763c92214bc0664.jpg](https://i.imgur.com/0WiVUuL.jpeg)  

The result is a black and red square, vertically split in half, at exactly $\mathbf{\Omega}_{\mathrm{X}}=0.5$ . We can also change the threshold value of the step function, and present the code in a more organized way:  

1. out vec4 fragColor;   
2. float threshold $=0.75$ ; float myStep $=$ step(threshold, vUV.s);   
6. void main(){   
7. vec4 color $=$ vec4(myStep, 0.0, 0.0, 1.0);   
8. fragColor $=$ TDOutputSwizzle(color);   
9. }  

![images/66d5925b2ff7bc280671ce5bf342a4a51928b98ddf58696a49d0cbee0d5b8c92.jpg](https://i.imgur.com/gU24N9p.jpeg)  

We can then combine different step functions in different directions:  

1. out vec4 fragColor;   
2.   
3. float threshold $1=0.75$ ;   
4. float myStep1 $=$ step(threshold1, vUV.s);   
5. float threshold2 $:=0.5$ ;   
6. float myStep2 $=$ step(threshold2, vUV.t);   
7.   
8. void main(){   
9. vec4 color $=$ vec4(myStep1, myStep2, 0.0, 1.0);   
10. fragColor $=$ TDOutputSwizzle(color);   
11. }  

![images/17d48b62b4410c99c449914c7ba5161752d36db383b80b439a4c6f6c20e957ac.jpg](https://i.imgur.com/YDbiA5p.jpeg)  

These are the first cases of us actually drawing simple shapes with code, but, as in the top right corner of the last example, we can combine various functions, and this opens the door to many more interesting possibilities.  

Starting from the next chapter, we will see some new applications, creating various figures by manipulating shaping functions.  

# 07. DRAW A CIRCLE  

GLSL has not many pre-built functions and, even to draw something as simple as a circle, we must write our code from scratch. But it's not that hard.  

This time we aim to plot 0.0 if our pixels are comprehended in a chosen distance from a certain point, and 1.0 if they are outside this range. To achieve this, we can once again use the step function, with a slight modification.  

First of all, we must introduce a new useful function: the length function. This is just a trivial mathematical expression that calculates the length of a vector. We could even decide not to use it and manually calculate it, but in this case, we’ll just make our life easier by calling it when needed. Mathematically, for our 2D case, the length function is defined like this:  

$$
l e n g t h(v e c2(x,y))=\sqrt{x^{2}+y^{2}}
$$  

which is simply the Pythagorean Theorem, using vectors.  

Now we can see it in action.  

Write the following code:  

1. out vec4 fragColor;   
2. void main()   
3. {   
4. float myCircle $=$ step(0.2, length(vUV.st));   
5. vec4 color $=$ vec4(myCircle, 0.0, 0.0, 1.0);   
6. fragColor $=$ TDOutputSwizzle(color);   
7. }  

![images/a02a537715293091ce3a7529b1f418e5fc184ee9d2ae755d58f20503366d560c.jpg](https://i.imgur.com/xiebGaf.jpeg)  

We used the step function to draw black pixels where closer than 0.2 to the origin, and red pixel elsewhere.  

As you can see, we are drawing only a quarter of a circle, with its center in the bottom-left corner of our canvas. This is because we are calculating the distance from the point of coordinates (0.0, 0.0). What if we want to move our circle in the center of the image? Well, the central point has coordinates (0.5, 0.5), so we must simply subtract these values from our normalized space.  

1. out vec4 fragColor;   
2. void main()   
3. {   
4. float myCircle $=$ step(0.2, length(vUV.st – 0.5));   
5. vec4 color $=$ vec4(myCircle, 0.0, 0.0, 1.0);   
6. fragColor $=$ TDOutputSwizzle(color);   
7. }  

![images/fedcc49d3ea5d296bd44dfe5fe3d7a14bf244b13d21e51b8f945655eb3c7f6e1.jpg](https://i.imgur.com/QcSrHRS.jpeg)  

We can also decide to independently modify the x and y coordinates of the center of the circle. If we want, for example, to draw a circle centered in (0.3, 0.5), we need to write:  

1. out vec4 fragColor;   
2. void main()   
3. {   
4. float myCircle $=$ step(0.2, length(vec2(vUV.s - 0.3, vUV.t - 0.5)));   
5. vec4 color $=$ vec4(myCircle, 0.0, 0.0, 1.0);   
6. fragColor $=$ TDOutputSwizzle(color);   
7. }  

![images/726f3a851f718ea63890a5299b7b0dcf11dcc72aaed1f3a11b6534d774a34520.jpg](https://i.imgur.com/TXDqaim.jpeg)  

Writing it in a more ordered way:  

1. out vec4 fragColor; 2. 3. float myCircleX $\zeta=0.3$ ; 4. float myCircle $\mathrm{Y}=0.5$ ; 5. float myCircleRadius $=0.2$ ; 6. 7. void main() 8. { 9. float myCircle $=$ step(myCircleRadius,   
length(vec2(vUV.s - myCircleX, vUV.t –   
myCircleY))); 10. 11. vec4 color $=$ vec4(vec3(myCircle), 1.0); 12. fragColor $=$ TDOutputSwizzle(color); 13. }  

![images/9a82fa556255dbbd95ce9aa8c404ee51f3c7ddaa899d35e52096906be84fe912.jpg](https://i.imgur.com/yY25eTm.jpeg)  

Just by changing the values assigned to the variables myCircleX, myCircleY, and myCircleRadius, we can now choose where the circle is centered and how large to draw it. We also assigned the obtained values to all three color channels, to draw a circle on a white background instead of a red one.  

With the last snippet of code of this chapter, we’ll just add a simple example of color manipulation. Let’s say we would like to draw a white circle on a black background, instead of a black circle on a white background. We can do this in many ways, but one of my favorite methods is using only elementary mathematical operations.  

We want to paint the black pixels white, and vice-versa; in other words, we want to remap the interval (0.0, 1.0) to (1.0, 0.0). To do this we can at first multiply our values by -1.0, so that the interval is now (0.0, -1.0).  

Next, we just need to add 1.0 to every value, and it’s done.  

We can perform these operations in a separate line, and write:  

1. out vec4 fragColor;   
2.   
3. float myCircleX $\underline{{\cdot}}=0.3$ ;   
4. float myCircle $\zeta=0.5$ ;   
5. float myCircleRadius $=0.2$ ;   
6.  

7. void main() 8. { 9. float myCircle $=$ step(myCircleRadius,   
length(vec2(vUV.s - myCircleX, vUV.t –   
myCircleY))); 10. myCircle $=$ -1.0 \* myCircle + 1.0; 11. 12. vec4 color $=$ vec4(vec3(myCircle), 1.0); 13. fragColor $=$ TDOutputSwizzle(color); 14. }  

![images/5e63d617e0932fb6ccd05c56015a75352632f7e3db232f019348b88da47d4ebc.jpg](https://i.imgur.com/Sxbfgwg.jpeg)  

We are now able to draw many different circles, of various sizes and in different positions, and color them as we wish.  

Experiment with the code above and, when you feel ready, proceed to the next chapter.  

# 08. DRAW A RECTANGLE  

Drawing a rectangle in GLSL is yet another function we have to build ourselves. There are many ways of achieving our goal, and one of the simplest methods involves combining four different step functions.  

To simplify our problem, we can start thinking in only one dimension: how can we create a limited strip of color?  

Using step functions, we can write something like this in an empty Pixel shader of a new “GLSL” TOP:  

1. out vec4 fragColor;   
2. void main()   
3. {   
4. float myRectX $=$ step(0.2, vUV.s) - step(0.4, vUV.s);   
5. vec4 color $=$ vec4(vec3(myRectX), 1.0);   
6. fragColor $=$ TDOutputSwizzle(color);   
7. }  

![images/da94bbc4dde29c62d2d2a107e6c7bc6007fbb77e388f685ce2f9e6a8645607bc.jpg](https://i.imgur.com/brd2Q1O.jpeg)  

You should see a white vertical stripe, with its left border at 0.2 and its right border at 0.4.  

We can now repeat almost the same thing to obtain a similarly shaped horizontal strip:  

1. out vec4 fragColor;   
2. void main()   
3. {   
4. float myRectY $=$ step(0.3, vUV.t) - step(0.8, vUV.t);   
5. vec4 color $=$ vec4(vec3(myRectY),1.0);   
6. fragColor $=$ TDOutputSwizzle(color);   
7. }  

![images/c410373a74f27b4d6fe31301a163b64bf712860b2d8e2fd6261e6f63a70629c2.jpg](https://i.imgur.com/fO5gRxg.jpeg)  

This strip has its top border at 0.8 and its bottom border at 0.3.  

If we want to draw a rectangle having the same borders of the two strips we just created, we can use a simple multiplication to keep 1.0 where they are both 1.0, and 0.0 everywhere else.  

1. out vec4 fragColor;   
2. void main()   
3. {   
4. float myRectX $=$ step(0.2, vUV.s) - step(0.4, vUV.s);   
5. float myRectY $=$ step(0.3, vUV.t) - step(0.8, vUV.t);   
6. float myRect $=$ myRectX \* myRectY;   
7. vec4 color $=$ vec4(vec3(myRect), 1.0);   
8. fragColor $=$ TDOutputSwizzle(color);   
9. }  

![images/60ff42cda4902e65edb94a58fcbb3eb4559ab94aa08f1eadbf94f3327ed253e6.jpg](https://i.imgur.com/sysXLJ5.jpeg)  

Of course, we can easily generalize our rectangle drawing process, creating some variables for the positions of the borders outside of the main loop.  

In this case, lb, rb, bb, and tb represent respectively the left, right, bottom, and top border of our shape, so that just by modifying these values, we can draw any rectangle we want.  

1. out vec4 fragColor;   
2.   
3. float $\mathrm{lb}=0.2$ ;   
4. float $\mathrm{rb}=0.4$ ;   
5. float $\mathrm{bb}=0.3$ ;   
6. float tb $=0.8$ ;   
7.   
8. void main()   
9. {   
10. float myRectX $=$ step(lb, vUV.s) - step(rb, vUV.s);   
11. float myRectY $=$ step(bb, vUV.t) - step(tb, vUV.t);   
12. float myRect $=$ myRectX \* myRectY;   
13. vec4 color $=$ vec4(vec3(myRect), 1.0);   
14. fragColor $=$ TDOutputSwizzle(color);   
15. }  

![images/d231732856a80293cac0666e878e5e79dacb13c94a445dac59c4589f9e8928f2.jpg](https://i.imgur.com/Eu0abmi.jpeg)  

Similarly to many other coding languages, we can manipulate our code to offer new ways of defining what we are going to draw. One simple example could be the following: what if we want to draw a rectangle specifying where it is centered and how big it is, instead of writing the position of its borders?  

Some simple mathematical manipulations can offer us the solution:  

1. out vec4 fragColor;   
2.   
3. float $\mathbf{CX}=0.3$ ;   
4. float $\mathrm{{cy}=0.55}$ ;   
5. float $\mathbf{s}\mathbf{x}=0.2$ ;   
6. float $\mathrm{sy}=0.5$ ;   
7.   
8. void main()   
9. {   
10. float myRectX $=$ step(cx - sx / 2.0, vUV.s) - step(cx + sx / 2.0,   
vUV.s);   
11. float myRectY $=$ step(cy - sy / 2.0, vUV.t) - step(cy $+$ sy / 2.0,   
vUV.t);   
12. float myRect $=$ myRectX \* myRectY;   
13. vec4 color $=$ vec4(vec3(myRect), 1.0);   
14. fragColor $=$ TDOutputSwizzle(color);  

15. }  

![images/31eeed87c402b52264ea03f997d04397f0603fa80538259d24edbb7f0549fae9.jpg](https://i.imgur.com/1FV4ulX.jpeg)  

In this example, instead of the four border positions, we used cx and cy to declare where the rectangle is centered, both horizontally and vertically, and sx and sy to define the horizontal and vertical size. The result, as you can see, is identical to what we obtained using the previous code.  

We’ll see how to further generalize and easily re-use this in the following chapter.  

# 09. CUSTOM FUNCTIONS AND GLSL SNIPPETS  

GLSL doesn’t have many built-in functions, and we already had to write our code to draw even very simple shapes. But this does not mean that we cannot save custom functions and re-use them when we need them.  

The first step is generalizing our functions as much as we can, writing it outside of the main loop, and checking that it correctly works when called.  

We can use the same function we ended up with in chapter 8, when we learned how to draw a rectangle, and call it myRectShape.  

1. out vec4 fragColor;   
2.   
3. float myRectShape(float cx, float cy, float sx, float sy){   
4. float myRectX $=$ step(cx - sx / 2.0, vUV.s) - step $\mathbf{\chi}^{\prime}\mathbf{C}\mathbf{X}+\mathbf{S}\mathbf{X}\wedge\mathbf{2}.0,$ ,   
vUV.s);   
5. float myRectY $=$ step(cy - sy / 2.0, vUV.t) - step $\mathrm{(cy+sy/2.0}$ ,   
vUV.t);   
6. return myRectX \* myRectY;   
7. }   
8.   
9. void main()   
10. {   
11. float myRect $=$ myRectShape(0.3, 0.55, 0.2, 0.5);   
12. vec4 color $=$ vec4(vec3(myRect), 1.0);   
13. fragColor $=$ TDOutputSwizzle(color);   
14. }  

![images/49b6b5f53fb35f2b4b2029e8a77a1f252fd4342ac1e6373a3c1bf2a33137061e.jpg](https://i.imgur.com/ld0lSpI.jpeg)  

At line 3 we are defining our function: it outputs a float type of value, so we must begin its declaration with float, the function itself is called myRectShape and it needs four input values, corresponding to the x and y positions of the center of the rectangle, and its horizontal and vertical size. Inside of the graph brackets, we are stating what operations this function performs, and, at line 6, what value it outputs. This completes the declaration of our custom function.  

Later on, we call it inside the main function, to check that it correctly works when we feed it with the proper numerical values.  

These steps already allow us to have a section in our code where we declare all of our functions, followed by a much cleaner and readable main function.  

We could stop here, and simply create a separate text file with all the custom functions we have ever written, and keep it at hand when working, ready to copy and paste what we need. But, working with modern code editors, offers us the possibility of making our life even easier. This can be done using snippets.  

To access user-defined snippets in Visual Studio Code, click on “File” in the top bar menu, open the “Preferences” sub-menu and select “User Snippets”. At this point search for GLSL and select the GLSL named file. This will open a new file where we can write a collection of all the functions we want to store. Delete all the text already in there, and paste the following lines: {  

"myRectShape": { "prefix": "myRectShape", "body": [ "float $\$1$ {NAME}(float cx, float cy, float sx, float sy){", "\tfloat myRectX $=$ step(cx - sx / 2.0, vUV.s) - step $\mathbf{\eta}^{\prime}\mathbf{CX}+\mathbf{\eta}\mathbf{SX}\mathbf{\eta}/$ 2.0, vUV.s);", "\tfloat myRectY $=$ step(cy - sy / 2.0, vUV.t) - step $\left(\mathbf{C}\mathbf{y}+\mathbf{s}\mathbf{y}\mathrm{~/~}\right.$ 2.0, vUV.t);", "\treturn myRectX \* myRectY;", “}” ], “description”: “Draw a rectangle from its center position cx and cy, and size sx and sy” }, }  

We just defined a function called “myRectShape” that will quickly autocomplete with what we have written in its “body” section. It will also prompt a brief description containing our explanation. Remember to save this file when satisfied.  

Try opening a Pixel shader DAT and start typing myRectShape. Visual Studio Code will suggest inserting the newly created custom function, also showing its content and description.  

We can add as many functions as we want to the User Snippets, to make them quickly available during coding. Try for example adding the function to draw circles that we created in chapter 7.  

# 10. PI  

Before we can further proceed, we must introduce some mathematical elements that will help us through our coding experiments. The first one is Pi. Pi is usually defined as the ratio of a circle’s circumference to its diameter, and it’s a mathematical constant very useful now that we’ll start working with angles and circles. Pi has an infinite number of decimal digits, but we can say that it is approximately equal to 3.1415926535, and use this value in our codes without any significant precision loss.  

To use the value of Pi when writing our shaders, we just need to write the following line at the beginning of our code:  

# [[define]] PI 3.1415926535  

By doing so, every time we write Pi, our code editor will know what value to use.  

We must also introduce a couple of famous trigonometrical functions, sine and cosine.  

Let us consider a circle, centered in (0.0, 0.0), and of radius 1.0, and let’s draw a line that connects the center of the circle with a chosen point on its edge. Also, let’s call theta $(\theta)$ the angle between this line and the positive half of the x-axis. We can now say that the x coordinate of this point is the cosine of the angle theta, and the y coordinate is the sine of the same angle.  

![images/e761d11571ee37df7690b170bfd0a4cdde4a764c911cc5c69c1211f53e8480ac.jpg](https://i.imgur.com/9KrZiBt.jpeg)  

Usually, when dealing with trigonometrical functions, we use radians instead of degrees. Without diving too deep in mathematical definitions, we can just consider radians as a re-scaling of degrees, ranging from 0 to $\mathrm{Pi}^{*2}$ , instead of from 0 to 360 degrees.  

Any calculator can easily perform these conversions, so don’t be afraid if you are a novice with this kind of math. In the following table we can see a comparison between the most used angles, expressed both in degrees and in radians, and the corresponding sine and cosine values.  

<html><body><table><tr><td>angle (degrees)</td><td>angle (radians)</td><td>sine</td><td>cosine</td></tr><tr><td>0</td><td>0.0</td><td>0.0</td><td>1.0</td></tr><tr><td>30</td><td>Pi*1/6</td><td>0.5</td><td>0.866</td></tr><tr><td>45</td><td>Pi*1/4</td><td>0.707</td><td>0.707</td></tr><tr><td>60</td><td>Pi*1/3</td><td>0.866</td><td>0.5</td></tr><tr><td>90</td><td>Pi*1/2</td><td>1.0</td><td>0.0</td></tr><tr><td>120</td><td>Pi*2/3</td><td>0.866</td><td>-0.5</td></tr><tr><td>135</td><td>Pi*3/4</td><td>0.707</td><td>-0.707</td></tr><tr><td>150</td><td>Pi*5/6</td><td>0.5</td><td>-0.866</td></tr><tr><td>180</td><td>Pi</td><td>0.0</td><td>-1.0</td></tr><tr><td>210</td><td>Pi*7/6</td><td>-0.5</td><td>-0.866</td></tr></table></body></html>  

<html><body><table><tr><td>225</td><td>Pi*5/4</td><td>-0.70-0.707</td><td></td></tr><tr><td>240</td><td>Pi*4/3</td><td>-0.866</td><td>-0.5</td></tr><tr><td>270</td><td>Pi*3/2</td><td>-1.0</td><td>0.0</td></tr><tr><td>300</td><td>Pi*5/3</td><td>-0.866</td><td>0.5</td></tr><tr><td>315</td><td>Pi*7/4</td><td></td><td>-0.70 0.707</td></tr><tr><td>330</td><td>Pi*11/6</td><td>-0.5</td><td>0.866</td></tr><tr><td>360</td><td>Pi*2</td><td>0.0</td><td>1.0</td></tr></table></body></html>  

The last definitions we need are just derived from those of sine and cosine.  

The tangent of an angle is simply the ratio of the sine of that angle to the cosine of that same angle.  

The arctangent, usually noted as atan or arctan, is the operation inverse to the tangent. If, for example,  

$$
y{=}t a n(x),
$$  

then we can say that  

x=atan(y).  

At the moment, and for most of our work, this is all the math that we need.   
Let’s proceed and see it in action.  

# 11. DRAW A POLYGON  

Our next step in learning GLSL is drawing a polygon, with a generic number of sides and centered in any position we may need. As usual, we can proceed step by step.  

The first thing to do is to create a variable stating how many sides we want to draw. We can call it nSides. With this information, we can calculate the angle at which every vertex is located: knowing that a complete circle spans for 360 degrees, we can simply divide 360 by the number of sides. Using radians, we need to swap 360 degrees with $\mathrm{Pi}^{*2}$ and write  

float angles $=$ PI \* 2.0 / nSides;  

Next, we need to define theta, the angle that any point creates with the positive x-axis. In the previous chapter, we learned that we can use the arctangent function:  

float theta $=$ atan(vUV.s, vUV.t);  

The last operation we need to perform is calculating the distance of every point from a vertex, and we can do this with a bit of trigonometry:  

float dist $=$ cos(round(theta / angles) \* angles – theta) \* length(vUV.st);  

In this expression, we used the round function to round every value to the closest integer number, straightening the sides of our shape. Note that in some interpreter the round function can cause errors; to avoid them we can substitute  

round(theta / angles), with the expression floor( $0.5+$ theta / angles), where floor ignores the decimal digits of any number.  

We can now put everything together, creating a new GLSL TOP and writing in its Pixel shader:  

1. [[define]] PI 3.1415926535   
2. float nSides $=5.0$ ;   
3. out vec4 fragColor;   
4. void main(){   
5. float theta $=$ atan(vUV.s, vUV.t);   
6. float angles $=\mathrm{PI}*2.0$ / nSides;   
7. float dist $=$ cos(round(theta / angles) \*angles - theta) \*   
length(vUV.st);   
8. vec4 color $=$ vec4(vec3(dist), 1.0);   
9. fragColor $=$ TDOutputSwizzle(color);   
10. }  

![images/e7dc30e4ca8fd39afcb547d2ad8f4d11287767f7579387b0d397811707929f18.jpg](https://i.imgur.com/mR0RnQS.jpeg)  

Yet, this doesn’t look like a polygon with nSides $=5.0$ . The figure in our GLSL TOP is something like a smooth gradient, quite different from the sharp edges that we were expecting.  

To solve this problem, we can once again use a step function, that will “cut” our gradient at a certain radius. Also, if we want a white polygon on a black background, we will need to invert the result of the step function, writing 1.0 - step().  

This will result in the following code:  

1. [[define]] PI 3.1415926535   
2. float nSides $=5.0$ ;   
3. float radius $=0.3$ ;   
4. out vec4 fragColor;   
5. void main(){   
6. float theta $=$ atan(vUV.s, vUV.t);   
7. float angles $=\mathrm{PI}*2.0$ / nSides;   
8. float dist $=$ cos(round(theta / angles) \* angles - theta) \*   
length(vUV);   
9. vec4 color $=$ vec4(vec3(1.0 - step(radius, dist)), 1.0);   
10. fragColor $=$ TDOutputSwizzle(color);   
11. }  

![images/a0fb911452fad6235970065ed2e8ff67c3b3430cba87f48849926a71e8d931c9.jpg](https://i.imgur.com/WGuUSeZ.jpeg)  

That’s already better, but our pentagon is centered in the bottom-left corner of the canvas. What if we want to place it in another position?  

We can move the plane in which our figure is placed by changing the space coordinates, from vUV.st to our own myUV:  

1. [[define]] PI 3.14159265359   
2. float nSides $=5.0$ ;   
3. float radius $=0.3$ ;   
4. vec2 center $=$ vec2(0.4, 0.6);   
5. out vec4 fragColor;   
6. void main(){   
7. vec2 myUV $=$ vUV.st - center;   
8. float theta $=$ atan(myUV.s, myUV.t);   
9. float angles $=\mathrm{PI}*2.0$ / nSides;   
10. float dist $=$ cos(round(theta / angles) \* angles - theta) \*   
length(myUV);   
11. vec4 color $=$ vec4(vec3(1.0 - step(radius, dist)), 1.0);   
12. fragColor $=$ TDOutputSwizzle(color);   
13. }  

![images/8cfbeb76ebc345451190c9a97c4eac469da5f0c5c41e5e77594ed09b9152883d.jpg](https://i.imgur.com/MdG9scz.jpeg)  

Try changing the values of the variables nSides, radius, and center, to obtain many different polygon variations; we can even assign a floating value to the number of sides of our shape: try and see what happens!  

# 12. GRADIENTS  

New functions, new possibilities!  

As we have already seen, the step function helps us splitting colors at a given threshold; the smoothstep function, instead, as the name suggests, can create smoother transitions, thus drawing gradients and color blends. Mathematically, this works by creating a Hermite interpolation between two values.  

Let’s immediately try a simple example:  

1. out vec4 fragColor;   
2. void main()   
3. {   
4. float myGrad $=$ smoothstep(0.3, 0.7, vUV.s);   
5. vec4 color $=$ vec4(vec3(myGrad), 1.0);   
6. fragColor $=$ TDOutputSwizzle(color);   
7. }  

![images/6e07b583c51642099ba6af1688c64e6c7ef4044824ca90951c1a88b9d3dd276f.jpg](https://i.imgur.com/yRJjZLJ.jpeg)  

The smoothstep function requires three inputs: the first one specifies the first edge, or the starting point of our transition; the second argument represents the endpoint of the interpolation; the last one specifies the source values for the transition. In our example, we have a black and white gradient that, considering the x-axis of our coordinate system, starts at 0.3 and ends at 0.7.  

As usual, we can change the directions of our functions, and combine more of them. For example, just by adding different smoothstep functions together, we can create a new composition:  

1. out vec4 fragColor;   
2. void main()   
3. {   
4. float myGradX $=$ smoothstep(0.2, 0.5, vUV.s) - smoothstep(0.5,   
0.8, vUV.s);   
5. float myGradY $=$ smoothstep(0.2, 0.5, vUV.t);   
6. vec4 color $=$ vec4(myGradX, myGradY, 1.0, 1.0);   
7. fragColor $=$ TDOutputSwizzle(color);   
8. }  

![images/69cb40343bdf7590cd668e2cf3f566cdad7fc1453a71bb965ac5f3413431326a.jpg](https://i.imgur.com/0xlCEfy.jpeg)  

Now that we managed to understand how the smoothstep function works, we can go back to our previous exercises and use it to obtain some different results.  

For example, we can draw a circle with a smooth edge, so that it gradually fades from black to white.  

Remember how we used to draw circles; the code looked like this:  

1. out vec4 fragColor; 2. float myCircleShape(float radius, vec2   
position){ 3. return step(radius, length(vec2(vUV.s –   
position.x, vUV.t - position.y))); 4. } 5. void main(){ 6. float myCircle $=$ myCircleShape(0.2, vec2(0.3,0.5)); 7. $\mathrm{myCircle}=-1.0\mathrm{}^{\ast}\mathrm{myCircle}+1.0;$ 8. vec4 color $=$ vec4(vec3(myCircle), 1.0); 9. fragColor $=$ TDOutputSwizzle(color); 10. }  

![images/521983f77d1af8f717034e135a2dc533825042413a3b57dfc437ccf007807986.jpg](https://i.imgur.com/uyDXgZP.jpeg)  

We can now change the step function with the smoothstep function. Of course, we need to feed it a starting and an ending point for the transition; in this case, we decided to start 0.1 before the radius, and to end 0.1 after the radius:  

1. out vec4 fragColor;   
2. float myCircleSmoothShape(float radius, vec2 position){   
3. return smoothstep(radius - 0.1, radius $+~0.1$ , length(vec2(vUV.s -   
position.x, vUV.t -   
position.y)));   
4. }   
5. void main(){   
6. float myCircle $=$ myCircleSmoothShape(0.2, vec2(0.3,0.5));   
7. myCircle $=-1.0$ \* myCircle $+~1.0$ ;   
8. vec4 color $=$ vec4(vec3(myCircle), 1.0);   
9. fragColor $=$ TDOutputSwizzle(color);   
10. }  

![images/629f7cc9b32b657383b8ea74a61269046a92142b3946d14b927b7bd45670b4ce.jpg](https://i.imgur.com/qv1rrvq.jpeg)  

We can save the myCircleSmoothShape function together with the other user snippets. Also, try to write new smoothed versions of the functions we coded to draw rectangles and polygons, then save them.  

Another way to create color gradients is by using the mix function.  

The mix function also needs three arguments: the first color, the second color, and the values to interpolate them.  

In a simple example, we can choose to start from a full red color, and transition vertically covering the whole canvas, ending in a full green color:  

1. out vec4 fragColor;   
2. vec3 myColor1 $=$ vec3(1.0, 0.0, 0.0);   
3. vec3 myColor2 $=$ vec3(0.0, 1.0, 0.0);   
4. void main()   
5. {   
6. vec3 myGradient $=$ mix(myColor1, myColor2, vUV.t);   
7. vec4 color $=$ vec4(myGradient, 1.0);   
8. fragColor $=$ TDOutputSwizzle(color);   
9. }  

![images/19c4e3f8defde8272ecdcb057b60aaa9eea9979784d5cf4549ba6b737afea861.jpg](https://i.imgur.com/FQg0ThC.jpeg)  

We can now combine these two methods for creating gradients, the first one using smoothstep and the second one using mix:  

1. out vec4 fragColor;   
2.   
3. vec3 myColor1 $=$ vec3(1.0, 0.0, 0.0);   
4. vec3 myColor2 $=$ vec3(0.0, 1.0, 0.0);   
5.   
6. float myCircleSmoothShape(float radius, vec2 position){   
7. return smoothstep(radius-0.1, radius $+0.1$ , length(vec2(vUV.s –   
position.x, vUV.t -   
position.y)));   
8. }   
9.   
10. void main()   
11. {   
12. float myCircle $=$ myCircleSmoothShape(0.2, vec2(0.3,0.5));   
13. myCircle $=$ -1.0 \* myCircle $+~1.0$ ;   
14.   
15. vec3 myGradient $=$ mix(myColor1, myColor2, myCircle);   
16.   
17. vec4 color $=$ vec4(myGradient, 1.0);   
18. fragColor $=$ TDOutputSwizzle(color);   
19. }  

![images/5501edc1c32be1f6d025a514cdb9992a78b9b9bddbb26b29b9612eee841244e2.jpg](https://i.imgur.com/QCgNCqA.jpeg)  

This should return a green circle on a red background, gradually fading between the two colors.  

Before proceeding to the next chapter, have fun experimenting with these functions and all those we already encountered.  

Then we will start moving stuff around.  

# 13. TRANSLATE  

We have already seen how to draw various shapes in different positions, but what if we want to move multiple shapes at the same time?  

Of course, we can individually move each of the figures we are drawing, changing the position where they are drawn, but we can also move the whole space at the same time.  

Let’s say we are creating a picture that contains four circles, with different sizes and in various positions:  

1. out vec4 fragColor;   
2.   
3. float myCircleShape(float radius, vec2 position){   
4. return - $\mathbf{-1.0~^{*}}$ step(radius, length(vec2(vUV.s – position.x, vUV.t -   
position.y))) $+~1.0$ ;   
5. }   
6.   
7. void main(){   
8. float myCircle1 $=$ myCircleShape(0.2, vec2(0.3, 0.5));   
9. float myCircle2 $=$ myCircleShape(0.1, vec2(0.1, 0.1));   
10. float myCircle3 $=$ myCircleShape(0.05, vec2(0.7, 0.8));   
11. float myCircle4 $=$ myCircleShape(0.15, vec2(0.7, 0.3));   
12. float myCircles $=$ myCircle1 $+$ myCircle2 $+$ myCircle3 $+$ myCircle4;   
13. vec4 color $=$ vec4(vec3(myCircles), 1.0);   
14. fragColor $=$ TDOutputSwizzle(color);   
15. }  

![images/9f17e46a897f5b6537737b15e8cebb46e56e29635c9aaa6d69bb9e5546ad801f.jpg](https://i.imgur.com/kcKPg9j.jpeg)  

Note that we have slightly modified the myCircleShape function to already include the color inversion we were previously doing separately.  

If, for example, we want to move every circle 0.1 to the right and 0.3 upward, we could individually change the position of each shape.  

But we can make something better, and translate everything at the same time:  

1. out vec4 fragColor;   
2. vec2 myTranslate $=$ vec2 (0.1, 0.3);   
3. vec2 myUV $=$ vUV.st - myTranslate;   
4.   
5. float myCircleShape(float radius, vec2 position){   
6. return - $\cdot1.0^{*}$ step(radius, length(vec2(myUV.s - position.x, myUV.t   
- position.y))) $+~1.0$ ;   
7. }   
8.   
9. void main(){   
10. float myCircle1 $=$ myCircleShape(0.2, vec2(0.3, 0.5));   
11. float myCircle2 $=$ myCircleShape(0.1, vec2(0.1, 0.1));   
12. float myCircle3 $=$ myCircleShape(0.05, vec2(0.7, 0.8));   
13. float myCircle4 $=$ myCircleShape(0.15, vec2(0.7, 0.3));   
14. float myCircles $=$ myCircle1 $+$ myCircle2 $+$ myCircle3 $+$ myCircle4;   
15. vec4 color $=$ vec4(vec3(myCircles), 1.0);   
16. fragColor $=$ TDOutputSwizzle(color);   
17. }  

![images/3c03e90639fee482883875a51a6113e5f22ed78f601c209e8790b76da118b0cc.jpg](https://i.imgur.com/5b8ahpI.jpeg)  

We are using a variable called myTranslate to move the whole coordinate system. To do that, we need to define a new set of coordinates called myUV and use this instead of the old myUV set in our myCircleShape function definition. Changing the values inside the myTranslate variable, we can now move the whole canvas as we want.  

A brief note on sign convention.  

In this specific case, we are not moving the shapes, but the whole coordinate system; thus, it would be more formally correct to change the signs inside myTranslate and swap the minus sign in the myUV definition with a plus sign:  

vec2 myTranslate $=$ vec2 (-0.1, -0.3);  

$v e c2m y U V=v U V.s t+m y T r a n s l a t e;$  

However, since we are more used to consider a positive increment coherent with moving stuff to the right side and upward, we decided to swap the signs, for a more intuitive way of assigning the translation values.  

# 14. ROTATE  

Rotating a shape is quite similar to the translation example we met in the previous chapter: in fact, we need to apply the rotation to the whole coordinate system. Yet, it requires a different approach to work properly.  

To implement rotations, we use matrices. The matrices we need are nothing too exotic, and we can imagine them as $2\times2$ grids of values. They have some special rules for multiplications, but we don’t need to worry too much about them. The rotation matrix that we are going to use is the following:  

$$
\begin{array}{r l}{R=\left(\begin{array}{c c}{\cos\vartheta}&{-\sin\vartheta}\ {\sin\vartheta}&{\cos\vartheta}\end{array}\right)}\end{array}
$$  

At the end of this chapter, we’ll insert a brief proof of how to obtain it, but for the moment we can just pretend that this has a rational explanation.  

We can start by drawing a simple square in a corner of our canvas:  

1. out vec4 fragColor;   
2.   
3. float myRectShape(float cx, float cy, float sx, float sy){   
4. float myRectX $=$ step(cx - sx / 2.0, vUV.s) - step $\left(\mathbf{CX}+\mathbf{SX}/2.0\right)$ ,   
vUV.s);   
5. float myRectY $=$ step(cy - sy / 2.0, vUV.t) - step $\mathrm{(cy+sy/2.0}.$ ,   
vUV.t);   
6. return myRectX \* myRectY;   
7. }   
8.   
9. void main()   
10. {   
11. float myRect $=$ myRectShape(0.2, 0.3, 0.4, 0.4);   
12. vec4 color $=$ vec4(vec3(myRect), 1.0);   
13. fragColor $=$ TDOutputSwizzle(color);   
14. }  

![images/22ad31e6c7aa8ba6ae26fe88b303f2ba207fdde800da56a2b8640cbc8fc7b8d1.jpg](https://i.imgur.com/dTj7dkC.jpeg)  

We can now implement the rotation in a way quite similar to the previous example:  

1. out vec4 fragColor;   
2.   
3. mat2 myRotate(float theta){   
4. return mat2(cos(theta), -sin(theta), sin(theta), cos(theta));   
5. }   
6.   
7. vec2 myUV $=$ myRotate(0.2) \* vUV.st;   
8.   
9. float myRectShape(float cx, float cy, float sx, float sy){   
10. float myRectX $=$ step(cx - sx / 2.0, myUV.s) - step $\mathrm{(cx+sx/2.0}$ ,   
myUV.s);   
11. float myRectY $=$ step(cy - sy / 2.0, myUV.t) - step(cy $+$ sy / 2.0,   
myUV.t);   
12. return myRectX \* myRectY;   
13. }   
14.   
15. void main()   
16. {   
17. float myRect $=$ myRectShape(0.2, 0.3, 0.4, 0.4);   
18. vec4 color $=$ vec4(vec3(myRect), 1.0);   
19. fragColor $=$ TDOutputSwizzle(color);   
20. }  

![images/34e6380343a350b5b330cb44a696f8cd29166bc7257f4f4573794480a365d14c.jpg](https://i.imgur.com/KIlNaia.jpeg)  

We defined the myRotate function using the rotation matrix, changed the coordinate system, and then used the new system myUV instead of the old vUV inside of the myRectShape function.  

We can modify the rotation amount by changing the argument of the myRotate function at line 7.  

If we try to do this, we can notice that the image is rotated, but not around the center of the canvas; instead, it keeps its pivot in the bottom-left corner. This happens because the rotation matrix always refers to the point of coordinate (0.0, 0.0).  

To correct this behavior, we need to translate our whole canvas, perform the rotation, and translate it back again:  

1. out vec4 fragColor;   
2.   
3. mat2 myRotate(float theta){   
4. return mat2(cos(theta), -sin(theta), sin(theta), cos(theta));   
5. }   
6.   
7. $\mathrm{vec2myUV}=(\mathrm{(vUV.st-0.5)^{*}m y R o t a t e(0.2)})+0.5;$   
8.   
9. float myRectShape(float cx, float cy, float sx, float sy){   
10. float myRectX $=$ step(cx - sx / 2.0, myUV.s) - step $\mathrm{(cx+sx/2.0}$ ,   
myUV.s);   
11. float myRectY $=$ step(cy - sy / 2.0, myUV.t) - step $\mathrm{(cy+sy/2.0}$ ,   
myUV.t);   
12. return myRectX \* myRectY;   
13. }   
14.   
15. void main()   
16. {   
17. float myRect $=$ myRectShape(0.2, 0.3, 0.4, 0.4);   
18. vec4 color $=$ vec4(vec3(myRect), 1.0);   
19. fragColor $=$ TDOutputSwizzle(color);   
20. }  

![images/70b4869b2e32b9fecbc62a863e4e0316bfe9769a6b4a71d934b9933bde6e31fd.jpg](https://i.imgur.com/KjPwklV.jpeg)  

This way, if we change the rotation value, we can see that the square revolves around the center of the canvas.  

As promised, here we insert a brief derivation of the rotation matrix, to validate its use. It doesn’t require any advanced math, but it’s not necessary to understand how to use the rotation matrix, so feel free to skip to the next chapter.  

Given a generic point, we can write its coordinate in vector form as:  

$$
{\binom{x}{y}}={\binom{r\cos\vartheta}{r\sin\vartheta}}
$$  

Let’s rotate this point around the origin and call the new angle $q$ , as shown in the following figure:  

![images/8dc15b8ad216727eafb7a080aa05ef41824ef9b8c0f538950b1c88a69cd6c31d.jpg](https://i.imgur.com/io97hBB.jpeg)  

We can write the new point as:  

$$
{\binom{x^{\prime}}{y^{\prime}}}={\binom{r\cos(\vartheta+\varphi)}{r\sin(\vartheta+\varphi)}}
$$  

From this expression, we can use the angle sum identities to write:  

$$
{\begin{array}{r l}&{{\boldsymbol{\mathit{r}}}\cos(\vartheta+\varphi)}\ &{{\boldsymbol{\mathit{r}}}\sin(\vartheta+\varphi)}\end{array}}{\boldsymbol{\mathit{\Psi}}}({\boldsymbol{\mathit{r}}}\cos\vartheta\sin\varphi+{\boldsymbol{r}}\sin\vartheta\cos\vartheta)={\boldsymbol{\mathit{r}}}\cos(\vartheta+\varphi)}\end{array}}
$$  

Remembering the definition of the first point, we can rewrite:  

$$
\begin{array}{r}{\begin{array}{l}{\displaystyle r\cos\vartheta\cos\varphi-r\sin\vartheta\sin\varphi}\ {\displaystyle\times r\cos\vartheta\sin\varphi+r\sin\vartheta\cos\varphi}\end{array}\Big)=\begin{array}{l}{\displaystyle\left(x\cos\varphi-y\sin\varphi\right)}\ {\displaystyle x\sin\varphi+y\mathrm{~c~}}\end{array}}\end{array}
$$  

We can then express this matrix as a multiplication of matrices:  

$$
{\binom{x\cos\varphi-y\sin\varphi}{x\sin\varphi+y\cos\varphi}}={\binom{\cos\varphi-\sin\varphi}{\sin\varphi+\cos\varphi}}{\binom{x}{y}}
$$  

This is already the final result:  

$$
{\binom{x^{\prime}}{y^{\prime}}}={\binom{\cos\varphi-\sin\varphi}{\sin\varphi+\cos\varphi}}{\binom{x}{y}}=R{\binom{x}{y}}
$$  

This shows that we can get a rotated point by applying the R matrix to the unrotated point.  

# 15. SCALE  

Scaling is very similar to rotating. We have to use a $2\times2$ matrix, shaped like the following:  

$$
S=\binom{S x}{0}\quad S y\end{array}
$$  

We will omit the proof since its trivial.  

Then, we need to insert it in our drawing, scaling the system coordinate:  

1. out vec4 fragColor; 2. 3. mat2 myScale(vec2 scale){ 4. return mat2(1.0 / scale.x, 0.0, 0.0, 1.0 / scale.y); 5. } 6. 7. vec2 myUV $=$ vUV.st \* myScale(vec2(0.3, 0.4)); 8. 9. float myCircleShape(float radius, vec2   
position){ 10. return $\mathbf{-1.0\mu^{*}}$ step(radius,   
length(vec2(myUV.s - position.x, myUV.t -   
position.y))) $+~1.0$ ; 11. } 12.  

13. void main(){   
14. float myCircle1 $=$ myCircleShape(0.2, vec2(0.3, 0.5));   
15. float myCircle2 $=$ myCircleShape(0.1, vec2(0.1, 0.1));   
16. float myCircle3 $=$ myCircleShape(0.05, vec2(0.7, 0.8));   
17. float myCircle4 $=$ myCircleShape(0.15, vec2(0.7, 0.3));   
18. float myCircles $=$ myCircle1 $+$ myCircle2 $+$ myCircle3 $+$ myCircle4;   
19.   
20. vec4 color $=$ vec4(vec3(myCircles), 1.0);   
21. fragColor $=$ TDOutputSwizzle(color);   
22. }  

![images/2cbf188bb829840476f1d5929ee8ea53e0507d2c7754703b375bdc386516be43.jpg](https://i.imgur.com/G1IgiqS.jpeg)  

As usual, we create a new function, called myScale, and use it to modify the system coordinates. Inserting different values, we can see that the scaling is not properly centered on the canvas. To solve this, we can do the same thing we did in the previous chapter: we translate the whole coordinate system to the origin, then scale, and translate it back to its original position.  

1. out vec4 fragColor;   
2.   
3. mat2 myScale(vec2 scale){   
4. return mat2(1.0 / scale.x, 0.0, 0.0, 1.0 / scale.y);   
5. }   
6.   
7. vec2 myUV $=$ ((vUV.st - 0.5) \* myScale(vec2(0.3, 0.4))) + 0.5;   
8.   
9. float myCircleShape(float radius, vec2   
position){   
10. return $\mathbf{-1.0\mu^{*}}$ step(radius, length(vec2(myUV.s - position.x, myUV.t -   
position.y))) $+~1.0$ ;   
11. }   
12.   
13. void main(){   
14. float myCircle1 $=$ myCircleShape(0.2, vec2(0.3, 0.5));   
15. float myCircle2 $=$ myCircleShape(0.1, vec2(0.1, 0.1));   
16. float myCircle3 $=$ myCircleShape(0.05, vec2(0.7, 0.8));   
17. float myCircle4 $=$ myCircleShape(0.15, vec2(0.7, 0.3));   
18. float myCircles $=$ myCircle1 $+$ myCircle2 $+$ myCircle3 $+$ myCircle4;   
19.   
20. vec4 color $=$ vec4(vec3(myCircles), 1.0);   
21. fragColor $=$ TDOutputSwizzle(color);   
22. }  

![images/595614a9fdc1b284759d591b42a88a24428dbde557bf95b0129aab1ad68a0d83.jpg](https://i.imgur.com/oa8mRVD.jpeg)  

We can now try to combine all the functions we created to simultaneously  

translate, rotate, and scale our canvas:  

1. out vec4 fragColor;   
2.   
3. mat2 myScale(vec2 scale){   
4. return mat2(1.0 / scale.x, 0.0, 0.0, 1.0 / scale.y);   
5. }   
6.   
7. mat2 myRotate(float theta){   
8. return mat2(cos(theta), -sin(theta), sin(theta), cos(theta));   
9. }   
10.   
11. vec2 myTranslate $=$ vec2 (0.1, 0.8);   
12.   
13. $\mathrm{vec2myUV}=(\mathrm{(vUV.st-0.5)^{*}m y S c a l e(v e c2(0.3,0.4))^{*}}$   
myRotate(0.9)) + 0.5 – myTranslate;   
14.   
15. float myCircleShape(float radius, vec2 position){   
16. return $\mathbf{-1.0\mu^{*}}$ step(radius, length(vec2(myUV.s - position.x, myUV.t -   
position.y))) $+~1.0$ ;   
17. }   
18.   
19. void main(){   
20. float myCircle1 $=$ myCircleShape(0.2, vec2(0.3, 0.5));   
21. float myCircle2 $=$ myCircleShape(0.1, vec2(0.1, 0.1));   
22. float myCircle3 $=$ myCircleShape(0.05, vec2(0.7, 0.8));   
23. float myCircle4 $=$ myCircleShape(0.15, vec2(0.7, 0.3));   
24.   
25. float myCircles $=$ myCircle1 $+$ myCircle2 $+$ myCircle3 $+$ myCircle4;   
26.   
27. vec4 color $=$ vec4(vec3(myCircles), 1.0);   
28. fragColor $=$ TDOutputSwizzle(color);   
29. }  

![images/bc091b71e5648199aa201fb394f99df8004e1eb327b95026c31c41ab6b32b4b2.jpg](https://i.imgur.com/dEd89Ab.jpeg)  

Beware that the operations happen in a specific order, translating before rotating and then scaling. If we want to change the order of the operations, we can change the definition of myUV in line 13.  

# 16. ANIMATIONS  

Until now, every value we needed in our drawing had to be explicitly written in the code itself. One of the great things about TouchDesigner is that we can use any value we want and easily insert it into our code. This way we can reference one or multiple values that we already obtained in our TouchDesigner Network, and even drive animations with them.  

Open a fresh TouchDesigner file, delete every Operator present by default, and create a new “GLSL” TOP.  

What we want to do is create a simple circle, similar to the ones we have already drawn, and decide its size and position using values from TouchDesigner’s Network.  

Start by drawing a white circle:  

1. out vec4 fragColor;   
2. vec2 myUV $=$ vUV.st;   
3. float mySize $=0.3$ ;   
4.   
5. float myCircleShape(float radius, vec2 position){   
6. return $\mathbf{-1.0~^{*}}$ step(radius, length(vec2(myUV.s - position.x, myUV.t   
- position.y))) $+~1.0$ ;   
7. }   
8.   
9. void main(){   
10. float myCircle $=$ myCircleShape(mySize, vec2(0.5, 0.5));   
11. vec4 color $=$ vec4(vec3(myCircle), 1.0);   
12. fragColor $=$ TDOutputSwizzle(color);   
13. }  

![images/b67f8cd5d1ff696d3de13a8b8277c55233a862206ab126ae44615918917f7e16.jpg](https://i.imgur.com/1ZO4u5p.jpeg)  

We have created a float variable, called mySize, which defines the circle radius. Using “uniforms” we can link this value to anything in our TouchDesigner Network.  

The first step to understanding uniforms is to select the “GLSL” TOP and, in its parameters (displayed in the top right corner of the screen) have a look at the “Vectors” page. Here we can assign as many variables (called uniforms) as we want, each one with its values, and import these values in the code that we are writing.  

Insert a name in the Uniform name field, something like uSize should work just fine.  

A brief note on naming conventions: every code environment and every software has its traditions; in TouchDesigner I have seen many people insert a u before the name of every uniform, and use capitalization to distinguish words. Other customary notations are u_size and even i_size, but we can name uniforms as we prefer.  

In our code, we can now import the uniform we just created. In this case, we only need one value as a decimal number, so it will be a float variable.  

1. uniform float uSize;   
2. out vec4 fragColor;   
3. vec2 myUV $=$ vUV.st;   
4.   
5. float myCircleShape(float radius, vec2 position){   
6. return $\mathbf{-1.0~^{*}}$ step(radius, length(vec2(myUV.s –   
position.x, myUV.t - position.y))) $+~1.0$ ;   
7. }   
8.   
9. void main(){   
10. float myCircle $=$ myCircleShape(uSize, vec2(0.5, 0.5));   
11. vec4 color $=$ vec4(vec3(myCircle), 1.0);   
12. fragColor $=$ TDOutputSwizzle(color);   
13. }  

![images/a10a6a098fc68ab610adc120ea22b58ce76b0589d2c5f660a85c3c1a804351a5.jpg](https://i.imgur.com/N40Qx1Z.jpeg)  

The code is using the value of the uniform we created, which by default is 0.5, to define the circle size. Try going back in the parameters of the “GLSL” TOP, and change the value of the uniform. Since it is a float variable, only the first value field will affect our drawing, while the others will simply be ignored.  

We can now proceed a step further and link the position of the circle to a “Constant” CHOP.  

Create a “Constant” CHOP in TouchDesigner’s Network, and wire a “Null” CHOP afterward. In the parameters of the “Constant” CHOP, name the first channel “PosX”, then use the plus sign to add a second channel and name it “PosY”. Go back to the “GLSL” TOP and, in the “Vectors” page of its parameters, use the plus sign to create a new uniform. Name it something like uPos. In the first value field write the following Python expression:  

# op('null1')['PosX']  

This is simply referencing the channel named “PosX” from the Operator called “null1”.  

In the second value field enter:  

op('null1')['PosY']  

The value should turn light blue, meaning that TouchDeisgner is correctly interpreting the expression as a Python code. If we try to change the values in the “Constant” CHOP, we should also see that the values in the “GLSL” TOP are changing.  

We must now import these uniforms in our code.  

Modify it as follows:  

1. uniform float uSize;   
2. uniform vec2 uPos;   
3. out vec4 fragColor;   
4. vec2 myUV $=$ vUV.st;   
5.   
6. float myCircleShape(float radius, vec2 position){   
7. return - $\mathbf{-1.0~^{*}}$ step(radius, length(vec2(myUV.s - position.x, myUV.t   
- position.y))) $+~1.0$ ;   
8. }   
9.   
10. void main(){   
11. float myCircle $=$ myCircleShape(uSize, uPos);   
12. vec4 color $=$ vec4(vec3(myCircle), 1.0);   
13. fragColor $=$ TDOutputSwizzle(color);   
14. }  

![images/e46e4f788dfef5bab8bbfe90babb36a89521bef23eedfd357f9a30bc84c808a0.jpg](https://i.imgur.com/hromwO7.jpeg)  

All that we have done is defining the uniform uPos as a vec2, and using it where needed. If we change the values in the “Constant” CHOP, the circle should move.  

The last thing that we can do, is animating the circle.  

Once again, we can modify the circle size, which is already correctly detected as a uniform in our code. All we have to do is assigning an animated value to the first value field of the uniform.  

Create an “LFO” CHOP, change its type to “Ramp” and its amplitude to 0.5, and wire it to a “Null” CHOP. In the “GLSL” TOP, in the first value field of the uSize uniform, write the following expression to link the value from the “null2” CHOP:  

op('null2')['chan1']  

The circle should pulse accordingly to the frequency of the LFO, while we should still be able to control its position with the “Constant” CHOP.  

Adding other uniforms, both static or animated, works exactly the same way for any other scenarios that we can meet, so make sure to practice a lot and become confident with this way of referencing values from TouchDesigner to GLSL shaders.  

# 17. GRIDS AND PATTERNS  

As the last step in our algorithmic drawing introduction, we can look at some simple ways of creating grids and patterns filled with the contents we learned to draw.  

Let’s say we have just drawn a circle and we want to iterate it in a $3{\times}3$ grid layout. The easiest method involves, once again, manipulating the coordinate space.  

In this specific case, in the main function loop, we need to multiply the coordinate space by 3.0. As we’ve already seen, this would scale our drawing, and place it in the bottom-left corner. The coordinate space would, in fact, span from 0.0 to 3.0, both horizontally and vertically, while our drawing fills the $1.0{\times}1.0$ square that goes from 0.0 to 1.0 in both directions. Now we need to tell the software to treat the other $1.0{\times}1.0$ squares the same as our bottom-left one.  

The fract function is what works best for us. Since it returns the fractional part of the numbers we feed it, it will interpret all the numbers from 1.0 to 2.0 as if they were from 0.0 to 1.0. The same behavior will be applied for numbers from 2.0 to 3.0, interpreted once again as 0.0-1.0.  

Therefore, the code becomes something like this:  

1. out vec4 fragColor;   
2. vec2 myUV $=$ vUV.st;   
3.   
4. float myCircleShape(float radius, vec2   
position){   
5. return - $\mathbf{-1.0~^{*}}$ step(radius, length(vec2(myUV.s - position.x, myUV.t - position.y))) $+~1.0$ ;  

6. }   
7.   
8. void main() {   
9. $\mathrm{myUV}^{*}=3.0$ ;   
10. my $\mathrm{{JV}=f r a c t(m y U V}$ );   
11. float myCircle $=$ myCircleShape(0.2, vec2(0.3, 0.7));   
12. vec4 color $=$ vec4(vec3(myCircle), 1.0);   
13. fragColor $=$ TDOutputSwizzle(color);   
14. }  

![images/b917de5d2f769cb8965b4337c8b1c30590fbe1f76aab494efd52df2da53ae826.jpg](https://i.imgur.com/bbLO5Q9.jpeg)  

Of course, we can repeat this exercise by drawing any content we wish instead of a simple circle. We can also change the number of repetitions of the grid by changing the multiplicative factor of the coordinate space in line 7. Since we are working with floats, we can even use fractional values to draw a non-integer number of repetitions.  

A further step we can take is to offset the grid creating more interesting patterns.  

What we want to achieve is to move one every two rows of our grid of a determined value. We can use the mod function to loop the vertical coordinate of the space between 0.0 and 2.0, with the following expression:  

# mod(myUV.y, 2.0);  

Next, we can use the step function to output 1.0 if we are in the 1.0-2.0 range, and 0.0 if we are in the 0.0-1.0 range.  

# step(1.0, mod(myUV.y, 2.0))  

In our drawing, these two passages will give us a value of 0.0 for every odd row, and a value of 1.0 for every even row, that we can simply sum to the horizontal direction of our coordinate system. We can also decide the amount of offset we want, just by multiplying the step function for the value needed (for example 0.5 will offset our drawing of half a grid cell). We can even use negative values for negative offsets.  

The code now becomes something like this:  

1. out vec4 fragColor;   
2. vec2 myUV $=$ vUV.st;   
3.   
4. float myCircleShape(float radius, vec2 position){   
5. return $\mathbf{-1.0~^{*}}$ step(radius, length(vec2(myUV.s - position.x, myUV.t   
- position.y))) $+~1.0$ ;   
6. }   
7.   
8. void main() {   
9. myUV $*=5.0$ ;   
10. myUV.x $+=$ step(1.0, mod(myUV.y, 2.0)) \* 0.5;   
11. myU $\prime=\mathrm{fract}(\mathrm{myU}$ V);   
12. float myCircle $=$ myCircleShape(0.2, vec2(0.3, 0.7));   
13. vec4 color $=$ vec4(vec3(myCircle), 1.0);   
14. fragColor $=$ TDOutputSwizzle(color);   
15. }  

![images/361a4b31a4f5fc58344d62c6be34d19c53519e6ecd9534f024a9168e45f121b5.jpg](https://i.imgur.com/5m5a2Lm.jpeg)  

Try to animate this example, importing uniforms from TouchDesigner’s Operators, and assigning them to change the amount of offset, or of any other parameter.  

# 18. FURTHER DRAWINGS  

Now we possess all of the basic abilities to obtain any kind of 2D compositions using GLSL:  

we can draw many different shapes, and modify, translate, rotate and scale them in different ways;  

we can use and mix colors, arrange our drawings in grids and patterns, and animate all theirs parameters through TouchDesigner.  

The best thing we can suggest at this point is simple:  

experiment and practice.  

We are already at a great starting point to start diving in the more advanced stuff, but, first, we need to grasp all the concepts we met and have them secured in our pocket before proceeding further.  

Don’t be afraid of trying and experiment with all the stuff we have seen.  

Create a library of pre-built functions and find how they can be used and mixed.  

Also, mistakes are more than welcome at this stage, and one can learn more from them than from other 50 pages of ready-to-copy-and-paste exercises and examples.  

Find images or videos and try to replicate them; then, if something breaks in the code, use the Info DAT to check what’s wrong, write on forums and find the communities, both for TouchDesigner and GLSL; you’ll be surprised of how awesome they are and how helpful people on forums and help groups are willing to be.  

The 2D part is now over (for this book); let’s start talking particles!  

# PART 3  

Particle Systems  

# 19. PROJECT FILES  

In the following chapters, we will talk about creating particle systems in GLSL. To better follow the steps we are taking, project files are available.  

You can download them for free at the following address: https://www.deltacut.it/GLSLparticles/  

# 20. STATIC PARTICLE SYSTEMS  

Particles are one of the main applications of GLSL coding. Writing codes to generate particles in shaders allows the machine we are working on to perform the calculations using the GPU instead of the CPU, strongly parallelizing the work and thus allowing for displaying millions of particles at the same time.  

The catch is that particles in shaders don’t have any memory of their past positions and speeds: we will need to implement some kind of feedback to generate an evolving system.  

Just for your interest, this will probably get a little bit easier with the awaited Vulkan implementation, when some parameters are likely to get exposed to cross reference some level of information between shaders invocations, similarly to what happens with Atomic Counters. There are also some image storing/loading possibilities using Compute shaders, but all of these techniques are quite advanced, and we won’t face them in this book, where we will instead see the general practices to avoid relying on system-specific and prebuilt functions and variables yet to come.  

Let’s begin with a simple example: we will start by importing a 3D geometry and draw a particle in each of its points.  

Before we start with the code itself, we need to get a couple of things ready in our TouchDesigner Network.  

Start by importing a 3D model. You can choose any supported model you already have and drag and drop it in the Network editor, or use some of the example models already available in TouchDesigner. In this case, create a “File In” SOP, and choose one of the models by clicking on the plus sign in its parameters, next to the “Geometry File” field. In the example project, I’ve used the “TeaPot.tog” file.  

Next, wire a “Null” SOP after the 3D model. “Null” Operators don’t actually do anything, but it is a good practice to use them whenever referencing nodes, for clarity and better understandability of the Network.  

Now we need to extract the positions information from the geometry: rightclick on the output of the “Null” SOP and create a “SOP to” CHOP. By default, this node samples the x, y, and z position of every point of the selected geometry.  

For better performance, we can now encode these data in a TOP. Append a “Null” CHOP after the “SOP to” CHOP, then right-click on the output of this Operator and create a “CHOP to” TOP. In its parameters, we need to change the “Data Format” field to “RGB”, so that we’ll have 3 channels at our disposal. Then, append a “Null” TOP after this “CHOP to” TOP, and rename it “initPos”, or something similar.  

This will constitute the data that we will feed as uniform to our code. We must now create the render Network.  

Start by creating a “Rectangle” SOP and, in its parameters, change the size to 0.03 for both fields, otherwise our particles would be too big and collide with one another.  

Now we need to take this rectangle and tell our system to instance it in every position we will feed it. Right-click on the output of this SOP and create a “Geometry” COMP. In its parameters, in the “Instancing” tab, enable the “Instancing” toggle button, and change the “Instance Count Mode” to “Manual”; then, in the “Num Instances” field, write  

op('null1').numPoints  

where “null1” should be the name of the “Null” SOP wired to our 3D model.  

This way we will draw the same number of instances as the number of points in our chosen model.  

We must now create a “Render” TOP, connected to an “Out” TOP. Also, create a “Camera” COMP. Leave all of these perators on their default settings.  

The last node we need to create is a “GLSL” MAT. To assign it to our geometry, select the “Geometry” COMP and, in its parameters, in the “Material” field of the “Render” page, write  

glsl1  

This will reference the newly created GLSL material as the material for our geometry.  

Next, in the parameters of the “GLSL” MAT, we need to assign our uniforms. In the “Sampler” page create a sampler called “sInitPos” referencing the “initPos” TOP we made before. Samplers are similar to uniforms, but they allow us to import textures instead of single values. Naming convention suggests us to always prepend an “s” before its name.  

We also need to give to our code some information about the number of instances: in the “Vectors” page, create a uniform called “uNumInst” and, in the first field of the “Value” parameter, write  

op('null1').numPoints  

We can now finally start to code!  

This time, we need to use both the Pixel shader and the Vertex shader.  

In the Vertex shader, we will perform all of the position-related operations.  

Start by adding a sampler2D and a float uniform, referencing what we just created.  

We now need to create a 2-dimensional vector that will sample the information contained in our sInitPos texture: create a vec2 called myUV.  

The information that we want to extract are those contained in the center of each pixel, so the y coordinate will be 0.5, while the x coordinate needs to be sampled for each pixel. We can do this using the TDInstanceID function, that automatically returns the number of the instance currently evaluated. Next, we need to shift it by 0.5 and divide it by the number of total instances, to normalize it in a 0.0 to 1.0 range.  

Using the texture function, we can now extract this information, from the sInitPos uniform thanks to the myUV vector.  

Now we just need to assign these newly sampled positions, and then output everything using the correct space coordinates. We can do this using, respectively, the TDDeform and the TDWorldToProj functions.  

The TDDeform function returns the positions in world space coordinates, while the TDWorldToProj function transforms a point from world space to projection space. More details on these functions and coordinate manipualtion can be found here:  

https://docs.derivative.ca/Write_a_GLSL_Material  

At the end of this project, the Vertex shader code should look like the following:  

uniform sampler2D sInitPos;   
uniform float uNumInst;   
void main(){   
vec2 myUV;   
myUV. $\mathbf{X}=$ (TDInstanceID() + 0.5) / uNumInst; myUV. $\mathrm{\Delta}\mathrm{y}=0.5$ ;   
vec4 initPos $=$ texture(sInitPos, myUV);   
vec4 worldSpacePos $=$ TDDeform $(\mathbf{P}+\mathbf{\rho}$   
vec3(initPos));   
gl_Position $=$   
TDWorldToProj(worldSpacePos);   
10. } As for the Pixel shader, we will keep it simple and output everything white: out vec4 fragColor;   
void main()   
{   
ve $\cdot\mathtt{C4}\mathrm{color}=\mathtt{v e c}4(1.0)$ ;   
fragColor $=$ TDOutputSwizzle(color);   
6. }  

The final Network should be similar to the one showed in the following figure.  

![images/d57ed3244f63d1490c9afd979ecc02ab7f04d9009879fef9e40e60fe097a96c4.jpg](https://i.imgur.com/vk64vt8.jpeg)  

You can also check the project named “Particles_01” in the “Projects” folder.  

# 21. FIXING NORMALS  

In the previous example, we created a simple instancing of a “small” 3D shape on every point of another “big” 3D model, in our case a “small” rectangle on every point of a “big” teapot.  

The exercise was quite straightforward, but we can still notice something to improve: normals.  

Normals are vectors that rule the orientation of every 3D shape, and we can orient them to rotate each instance. At the moment, the rectangles are all vertically oriented, facing the camera.  

If we consider the original “big” geometry, we can use the already existing normals to orient our “small” instances.  

The first step is thus to obtain this information, and we can do this by repeating the process we used for extracting the positions of the points.  

![images/cebe81028eec30b1e50ac879c01626ed4809ebd05c00f969113f26be728c8ba5.jpg](https://i.imgur.com/nYy4Pa5.jpeg)  

Right-click on the output of the “Null” SOP wired after the original “big” geometry, and create a “SOP to” CHOP. If we look at the parameters of this Operator, we should see that the only active toggle is the one relative to the positions. Deactivate it and activate the one referencing the normals. Then, connect a “Null” CHOP after this node.  

We now need to make a texture out of this data: right-click on the output of the “Null” CHOP we just created and choose a “CHOP to” TOP. Change its “Data Format” parameter to “RGB” and connect a new “Null” TOP to its output. For better clarity, rename this “Null” TOP something like “initNorm”.  

Once again, we need to feed this texture as a sampler uniform to the GLSL material.  

Open the parameters of the “GLSL” MAT and add a new sampler called “sInitNorm” that refers to the “initNorm” TOP.  

Now, let’s get back to the code of the Vertex shader.  

First of all, we shall write a line where we add the sampler2D called sInitNorm that we just created.  

We also need to define a variable that, similarly to what we did in the previous chapter, takes the information from this texture:  

vec4 initNorm $=$ texture(sInitNorm, myUV);  

The next step is to create a rotation matrix that will apply the rotation of the normals to the instances. We can do this very easily using the built-in function TDRotateToVector:  

mat3 m = TDRotateToVector(initNorm.xyz, vec3(0,1,0));  

While the first argument of this function takes the information we sampled, the second argument tells the system how the “up” vector is defined. In this case, the “up” vector points upward along the y-axis.  

Then multiply this matrix by the position of the instances.  

The code should look like this: uniform sampler2D sInitPos; uniform sampler2D sInitNorm; uniform float uNumInst; void main(){  

vec2 myUV;   
myUV. $\mathbf{X}=$ (TDInstanceID() + 0.5) / uNumInst;   
myUV. $\mathrm{\Delta}\mathrm{y}=0.5$ ;   
vec4 initPos $=$ texture(sInitPos, myUV);   
vec4 initNorm $=$ texture(sInitNorm, myUV);   
mat3 m $=$ TDRotateToVector(initNorm.xyz, vec3(0,1,0));   
vec4 worldSpacePos $=$ TDDeform(m \* P $+$ vec3(initPos));   
gl_Position $=$ TDWorldToProj(worldSpacePos);   
13. }  

If we look at the result, we can see that now every rectangle is rotated to follow the surface of the teapot. Yet, there is still something wrong with the plane where the teapot is placed: the instances should lie flat, facing upward, but at the moment they are all vertically oriented. This happens because the normals of these instances are vectors pointing perfectly upward, thus they are parallel to the “up” vector used in the TDRotateToVector function. This causes an exception when rotating our rectangles, and therefore the calculation does not move them at all.  

To solve this problem, we have many possibilities. The easiest one is probably to use an approximation. We can simply move a little bit the “up” vector so that it is not parallel to any normal anymore:  

uniform sampler2D sInitPos;   
uniform sampler2D sInitNorm;   
uniform float uNumInst;  

ec3 upVec $=$ vec3(0.0001, 1, 0);  

void main(){   
vec2 myUV;   
myUV.x $=$ (TDInstanceID() + 0.5) / uNumInst; myUV. $\mathrm{y}=0.5$ ; vec4 initPos $=$ texture(sInitPos, myUV);   
vec4 initNorm $=$ texture(sInitNorm, myUV);  

mat3 m $=$ TDRotateToVector(initNorm.xyz, upVec);  

vec4 worldSpacePos $=$ TDDeform(m \* P + vec3(initPos));   
gl_Position $=$ TDWorldToProj(worldSpacePos);  

![images/b25d920e4518ff4f47c5dd8dbda41925b97ef895f31dfab410488d5ad4cd393d.jpg](https://i.imgur.com/Wh9Zc57.jpeg)  

Now the final render looks much better, and we can proceed to move our particle system.  

Also, make sure to check the project named “Particles_02” from the “Projects” folder.  

# 22. MOVING THE SYSTEM  

Moving the whole particle system using GLSL may seem trivial, but, to do things properly, we need to be careful about a couple of important elements.  

As we have seen in the previous section of the book, when translating, rotating, and scaling, we can achieve all kinds of results using matrices. Luckily, TouchDesigner automatically creates 3D transformation matrixes so that we can skip the math involved.  

First of all, create a “Transform” CHOP. In its parameters, in the “Output” section, select “4x4 matrix” in the “Output” field. This way TouchDesigner will automatically convert to a matrix any transformation that we will insert in the “Transform” tab of the parameters of this CHOP.  

Next, connect a “Null” CHOP to this Operator, and call it “nullTransform”.  

We need to feed this matrix to the GLSL material. If we look at the parameters of the “GLSL” MAT node, we can see a section called “Matrices”: add a uniform called “uTransformMat” that refers to the “nullTransform” CHOP.  

Back to the Vertex shader code, add this uniform as a 4-dimensional matrix:  

uniform mat4 uTransformMat;  

We want this matrix to move our system from the initial position to the transformed one, and we can do this by defining a new variable:  

vec4 newPos $=$ (uTransformMat \* vec4(initPos.xyz, 1.0));  

All that remains to do is to use this new position instead of the initial one when outputting the final result.  

The code should look like this:  

uniform float uNumInst;   
uniform sampler2D sInitPos;   
niform sampler2D sInitNorm;   
uniform float uTransformMat;   
ec3 upVec $=$ vec3(0.0001, 1, 0);   
void main(){ vec2 myUV;   
myUV.x $=$ (TDInstanceID() + 0.5) / uNumInst;   
myUV.y $r=0.5$ ;   
vec4 initPos $=$ texture(sInitPos, myUV);   
vec4 initNorm $=$ texture(sInitNorm, myUV);   
vec4 newPos $=$ (uTransformMat \* vec4(initPos.xyz, 1.0));   
mat3 m $=$ TDRotateToVector(initNorm.xyz, upVec);   
vec4 worldSpacePos $=$ TDDeform(m \* P + newPos.xyz);   
gl_Position $=$ TDWorldToProj(worldSpacePos);  

Try to change the transform values in the “Transform” CHOP.  

Translating position should come with no pain, but when we combine it with rotations and scaling, we should see some instancing misbehaving. This happens because normals are not taking into account what’s happening to point positions. That’s where some subtleties are needed.  

First of all,  in the Vertex shader code, we need to “update” the value of the “up” vector post-transformation, that we will use instead of the original one:  

upVec $=$ vec3(uTransformMat \* vec4(upVec, 0.0));  

One of the easiest approaches to implement other corrections, trying to keep math at a minimum, is to introduce another transformation matrix.  

Create a new “Transform” CHOP, change its output to $^{\leftarrow}4\mathbf{x}4$ matrix” as with the previous one, and link its rotation to the rotation of our first “Transform”  

CHOP. To do this, in “Transform” page of its parameters, in the three “Rotate” fields, write respectively:  

op('transform1').par.rxop('transform1').par.ryop('transform1').par.rz  

We also need to link the translation of our geometry. In the three “Translate” fields of the “Transform” page, add the following expressions:  

op('transform1').par.txop('transform1').par.tyop('transform1').par.tz  

Connect a “Null” CHOP after this node and add it to the “GLSL” MAT as a new uniform matrix called “uTransformNorm”.  

In the Vertex shader code, add this uniform as a mat4 and add a new variable that will store the post-transformation normals:  

vec4 newNorm $=$ (uTransformNorm \* vec4(initNorm.xyz, 1.0));  

The last correction we need to apply is purely mathematical: in the general case, we need to use the transposed-inverse of our matrix. So, we need to add a line, before the one we just inserted, that performs this operation, and then use this new matrix:  

mat4 normalMatrix $=$ transpose(inverse(uTransformNorm)); vec4 newNorm $=$ (normalMatrix \* vec4(initNorm.xyz, 1.0)); The final code is now ready to be compiled, and should look like this:  

uniform float uNumInst;   
uniform sampler2D sInitPos;   
niform sampler2D sInitNorm;   
uniform float uTransformMat;   
niform float uTransformNorm;   
ec3 upVec $=$ vec3(0.0001, 1, 0);   
void main(){ vec2 myUV; myUV.x $=$ (TDInstanceID() + 0.5) / uNumInst;   
myUV.y $r=0.5$ ; vec4 initPos $=$ texture(sInitPos, myUV);   
vec4 initNorm $=$ texture(sInitNorm, myUV);  

upVec $=$ vec3(uTransformMat \* vec4(upVec, 0.0);  

vec4 newPos $=$ (uTransformMat \* vec4(initPos.xyz, 1.0));  

mat4 normalMatrix $=$ transpose(inverse (uTransformNorm)); vec4 newNorm $=$ (normalMatrix \*   
vec4(initNorm.xyz, 1.0));  

mat3 m $=$ TDRotateToVector(newNorm.xyz, upVec);  

vec4 worldSpacePos $=$ TDDeform(m \* P $+$ newPos.xyz);   
gl_Position $=$ TDWorldToProj(worldSpacePos);  

![images/ca683753a47b6850dd78603b64ffe24f56d8771ed4ada83bc540aef418d366da.jpg](https://i.imgur.com/ji1lNl5.jpeg)  

To check your result, you can look at the “Particles_03” project in the “Projects” folder.  

# 23. ANIMATING PARTICLES  

Animating individual particles can happen using various techniques, but the focus point is to feed the GLSL material with some information about the previous and current state of the particle system. In TouchDesigner, one of the most popular ways to achieve this result is to build a feedback system using TOPs.  

During this chapter, we won’t need to change our Vertex shader code anymore, but we’ll need to work on our Network. We’ll build three different examples, evolving from the simplest to a fairly complex one.  

The first case involves adding a defined and constant velocity to our system.  

We need to create a “Feedback” TOP, connect it to a “Math” TOP, and place them immediately before the “nullInitPos” TOP.  

In the parameters of the “Feedback” TOP, we must state that the “Target TOP” is the newly created “Math” TOP. Thus, we can write the name of this TOP, which by default should be “math1”, or drag and drop the node itself.  

This Operator will provide our feedback loop, while the “Math” TOP has the role of choosing what operations to perform. A simple operation could be adding a small amount, in the order of 0.01, in the “Pre-Add” field of the “Multi-Add” page of its parameters. This way, however, all directions will be affected.  

If we want our transformation to act only on some axis, we can change which “Channel Mask” is enabled in the “Common” page in the parameters of the “Math” TOP.  

Let’s say that we want the particles to move only in the x direction: we must select only the “R” channel, while enabling the “G” and “B” would affect, respectively, the y and z-axis.  

This transformation would continue virtually forever; to restart it, we can just press the “Pulse” button in the parameters of the “Feedback” TOP.  

In the example project “Particles_04_FixedVelocity”, that you can find inside the “Project/Particles_04” folder, you can see that there is also a “Button” COMP linked to the reset parameter of the “Feedback” TOP, just to make things easier to control.  

![images/514e39f435b173725a94a2e8d78b3b596b96afe318489891f4e9f626b62415c0.jpg](https://i.imgur.com/0wMYGYf.jpeg)  

This first example returns a very simple result, but make sure to experiment with all the parameters of the “Math” TOP. Also, try changing the selection of the channels affected, to see how many different effects can be achieved with such minimal modifications to our Network.  

Now let’s see something more interesting, where every particle is affected by a different value. In this specific case, we want the particles to explode following the direction of their normals, so we need to add the normals to the positions, and feed all of this to the feedback loop.  

In the “Particles_04_NormalVelocity” project, that you can find in the same folder of the fixed velocity example, you can see that we slightly modified the previous Network, placing an “Add” TOP instead of a “Math” TOP after the “Feedback” TOP, and a new “Math” TOP in-between the “Add” TOP and the “chopto2” TOP, the one that contains the information about the normals.  

In the parameters of the “Feedback” TOP, remember to change the “Target TOP” field to “add1”.  

![images/f8c116ab39767b91a118e815cd660c40acc755d138ba32731d19c47d15131fba.jpg](https://i.imgur.com/wFtqdiy.jpeg)  

Resetting the feedback, we can see the particles exploding from their original position pretty fast. The “Math” TOP we created has the exact role of controlling their speed: lowering the “Multiply” field in the “Multi-Add” page of its parameter, we can slow down the explosion. Try setting it to 0.01 and resetting the simulation, to see a way slower drifting.  

Of course, instead of the normals, we could use any other direction.  

Open the “Particles_04_RandomVelocity” project, located in the same folder of the previous examples.  

![images/574786525c2940db83874b2d57432ae2d9beac6d6676fb04dcce75e72c48a261.jpg](https://i.imgur.com/rGUdXLr.jpeg)  

In this project, we added a couple of Operators: a “Noise” TOP and another “Math” TOP.  

The first one will feed random directions for our system to evolve and, notably, a different direction for each particle.  

To make sure that the system behaves correctly, we need to change some parameters in this TOP.  

First of all, we must make sure that we have the same resolution as the other TOPs we are working with. In the “Common” page of the parameters of the “Noise” TOP, change the first “Resolution” field to  

op('null1').numPoints and the second field to 1.  

On the same page, we also need to change the “Pixel Format” to “32-bit float (RGBA)”. This pixel format, the same used by default by the “CHOP to” TOPs, ensures that we can store (almost) any number in our TOP and that we are not limited to a certain range of positive numbers, as for the 8-bit resolution case.  

In the “Noise” page of the parameters of the “Noise” TOP, we also need to deactivate the “Monochrome” toggle, to have different values for each color channel.  

Eventually, change the noise “Type” to “Random”, to achieve a uniform variation. We can also try the other methods to see what and how things change.  

Now, connect this “Noise” TOP to a newly created “Math” TOP. We want this node to rescale the noise values from (0,1) to (-1,1). To do so, we need to multiply all the values by 2 and then subtract 1. We can do this in the “MultiAdd” page of the parameters of the “Math” TOP, changing “Multiply” to 2 and “Post-Add” to -1.  

We can now connect this “Math” TOP to the already existing one, replacing the wire to the “chopto2” node that was storing the normals information.  

Reset the “Feedback” TOP and look at how things explode.  

This is not a super-complex system, but it can give a strong basis for investigating particle systems in GLSL, and it can constitute the foundation of many more advanced systems.  

If you try and experiment with all the different parameters, change the geometries involved or modify the code of the “GLSL” MAT, you can build and animate almost any system you can imagine. Also, you can adopt more complex feedback loops, involving other Operators or data sources.  

# 24. CONCLUSION  

We have eventually come to the end of this book.  

During our path, we have seen and learned many things, both in the 2D and 3D world: starting from simple plane shapes, to more complex patterns, and ending on evolving particle systems.  

There are still many things to talk about before becoming GLSL experts, but we have already encountered enough material to keep us busy for quite a long time.  

Experiment and try to modify every script we wrote and every project provided, making sure to grasp the reasons behind each choice we made. Expand the simple examples we encountered to create more visual-appealing content and more complex systems behaviors.  

Also, lots of resources are available online that can help further expand the topics we have seen.  

Workshops and courses for both GLSL and TouchDesigner are widely available, but make sure to check the forums, official websites, Facebook help groups, and Discord servers.  

Some useful links are the following:   
https://derivative.ca/   
https://www.facebook.com/groups/touchdesignerhelp/   
https://www.khronos.org/opengl/wiki/   
https://www.opengl.org/   
https://www.shadertoy.com/  

https://thebookofshaders.com/  

Also, keep updated on our released books, new publications, and projects: https://www.deltacut.com/  

Thank you for purchasing this book, we hope you had fun reading it!  