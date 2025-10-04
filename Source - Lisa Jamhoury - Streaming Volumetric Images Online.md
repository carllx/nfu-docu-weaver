# Streaming Volumetric Images Online

## Learnings and workflow from sending 3D color and depth images across networks in real time.



![](https://miro.medium.com/v2/resize:fit:3000/1*l_zgKQRzzZ6Ceb2FV5hVuw.png)

A few years ago I started working on an open source tool called [Kinectron](http://kinectron.github.io/), affectionally taking its name from its two major components: [Kinect](https://en.wikipedia.org/wiki/Kinect) + [Electron](https://electronjs.org/). The software streams data from the Kinect V2 over the internet, making the data available client-side in the browser through an (easy to use ;) [API](https://kinectron.github.io/docs/api.html).

One big challenge that I’ve run into is working with volumetric, or 3D, images across networks and in the browser. I’ve struggled to read them, store them, transfer them and unpack them. I’ve found workable, but far from perfect, solutions at each step. I’m writing my learnings and current workflow out in hopes of getting a better sense of where I’m at, where I should go next (especially with the discontinuation of the Kinect) and how other people are tackling the same issues.

Before I start, big thanks to [Shawn Van Every](https://github.com/vanevery), [Wouter Verweirder](https://github.com/wouterverweirder), [Aarón Montoya-Moraga](https://medium.com/u/cd88b85b47bb?source=post_page---user_mention--a04d68703973--------------------------------) and [Or Fleisher](http://orfleisher.com/) for their contributions at different steps of the way.

# Overview

The basic process that I’ve been working with is to capture color and depth images from a [Microsoft Kinect](https://en.wikipedia.org/wiki/Kinect), send them over a network using webRTC data channels, then unpack and render them in the browser. I’ll break the process into four steps: reading, storing, sending and drawing.

# Step 1: Reading Depth Images

Thanks to the Kinect, most developers are now at least somewhat familiar with depth images and will have seen the sensor’s 8-bit, grayscale depth image. In this image, depth is represented in equal RGB values from 0–255. The darker the image (the smaller the number), the closer the object is, the lighter (the bigger the number) the farther the object is.

![](https://miro.medium.com/v2/resize:fit:1032/1*wSrbiYbgVDymbhsEhS_WtA.png)

Kinect depth image represented in grayscale (0–255 or 8-bit).

Although the 8-bit depth image is commonly used, the Kinect raw depth feed is 13-bit. The depth sensor has a range of eight meters, so 0–8000. (Note the reliability begins to degrade at about 4.5 meters, or 4500.) The data is stored in a 16-bit frame buffer, which from my tests is too large to send in real time on its own.

In order to make the raw depth data more manageable for sending online, I’ve been drawing the 13-bit image to an 8-bit image. Most images today have four channels: red, green, blue and alpha, or RGBA. Each of the channels can hold 8-bits. To use this typical configuration to hold a 13-bit image, the 13 bits are spread across two channels—R and G—and the B and A channels are left empty. Here’s what that looks like in code:

function processRawDepthBuffer(newPixelData) {  
  let j = 0;  
  for (let i = 0; i < imageDataSize; i+=4) {  
    imageDataArray[i] = newPixelData[j];  
    imageDataArray[i+1] = newPixelData[j+1];  
    imageDataArray[i+2] = 0;  
    imageDataArray[i+3] = 0xff; // set alpha channel at full opacity  
    j+=2;  
  }  
}

For comparison, here’s the code to draw the 8-bit grayscale depth:

function processDepthBuffer(newPixelData){  
  letj = 0;  
  
  for (let i = 0; i < imageDataSize; i+=4) {  
    imageDataArray[i] = newPixelData[j];  
    imageDataArray[i+1] = newPixelData[j];  
    imageDataArray[i+2] = newPixelData[j];  
    imageDataArray[i+3] = 0xff;   
    j++;  
  }  
}

When drawn to a canvas, the raw depth image looks like this.

![](https://miro.medium.com/v2/resize:fit:1030/1*a_zvGA9Q_Y1T-LZVuhwHxg.png)

Kinect 13-bit raw depth image stored in 8-bit image.

Having the raw depth data stored in an RGBA image format rather than in a frame buffer makes it easier to work with across networks (more on that below…).

# Step 2: Storing Color and Depth Images

Now that I have the depth image, it’s time to consider color. The Kinect provides a color image, but the Kinect’s color and depth cameras are different resolutions: 1920 x 1080 and 512 x 424 respectively. In order to use the different resolution images together, the color image must be registered to the depth image. Plenty of people have written about this ([here’s one example](https://www.codefull.org/2016/03/align-depth-and-color-frames-depth-and-rgb-registration/)), so I won’t go into detail here.

Assuming the color and depth images are now the same resolution, the question is how to store them to efficiently send and receive the images across networks. I’ve used two different approaches.

In the first approach, I capture and send the color and depth images separately. I include the 13-bit raw depth data in one image, and the color data in the other image.

![](https://miro.medium.com/v2/resize:fit:1400/1*RUxF_tcFshF5Aw3aSRY5sg.png)

Process 1: Sending the depth and color images separately and combining them on the client-side.

In this case, there are two advantages: first, I can use a smaller lossy image format for the color image, which makes it easier to send, and second, I get the full depth resolution. However, lossy images are not optimized to compress depth data, so the depth image must be sent lossless to preserve the high depth resolution. Sending a lossless image across the network is space and bandwidth intensive, and sending it at the same time as the color image creates additional latency.

In the second approach, I combine the color and depth images on the server into one image. I use the RGB channels for the color data, and the A channel to hold the 8-bit grayscale depth data, creating an RGBD image. Then I send just the one image over the network.

![](https://miro.medium.com/v2/resize:fit:1400/1*6bi79dPwnpsQIGnpnJDi_w.png)

Process 2: Sending the depth and color images together in one combined RGBD image.

This is a good solution because it is an efficient use of space, but it sacrifices the full depth resolution. And again, the image needs to be lossless to retain the depth image, which makes the image too large to reliably send in real time over a network.

Interestingly, I can send the 512 x 424 four-channel raw depth image across a network and process the data into a point cloud at 24 fps or higher, but I cannot do the same at a reliable frame rate with the 512 x 424 RGBD image. I have assumed that even though the size of the image is the same, the complexity of the data (storing both color and depth in the same image) is requiring more bandwidth to send. This is a point for me to go back to and retest.

**Image Format**

When I receive the image buffers from the Kinect, I draw them onto HTML5 canvas elements, and convert them (using `[toDataUrl](https://developer.mozilla.org/en-US/docs/Web/API/HTMLCanvasElement/toDataURL))` to base-64 image data URLs that are [ideal for sending across networks](http://blog.teamtreehouse.com/using-data-uris-speed-website).

I tested several combinations of image formats to see what would work best to compress the images for sending over a network. WebP ended up being the best choice. JPG compression worked great for the RGB image, but it does not allow for an alpha channel. PNG and WebP allow for an alpha channel, and WebP was much smaller.

As I mentioned earlier, lossy image compression destroys depth data. Here’s a point cloud drawn in [Three.js](https://threejs.org/) with Kinect color and raw depth data sent across my local network as WebP quality 1.0 (lossless):

![](https://miro.medium.com/v2/resize:fit:1400/1*tII7gTQNOMG39HnSQ3pjMQ.png)

Point cloud drawn from raw depth data transferred as lossless WebP.

Here’s the same scenario with raw depth data sent as WebP quality 0.99 (lossy).

![](https://miro.medium.com/v2/resize:fit:1400/1*W9Lb9tUWIYqm4pC6ENB-cQ.png)

Point cloud drawn from raw depth data transferred in lossy WebP quality 0.99.

This issue of storing volumetric data efficiently is a big sticking point for me and another place for me to continue researching alternative options. (Here are my [rough notes](https://www.evernote.com/shard/s287/sh/732c9dba-dd21-4751-aa3f-8a4eac53cf9b/36281560a354bd23) from early 2016 for those interested in reading more about this process.)

# Step 3: Sending Image Data Across Networks

Once I have the data URL of the color and depth images in WebP at my chosen quality, I send the image over WebRTC data channels using the open source library [PeerJS](https://peerjs.com/). PeerJS uses UDP, rather than TCP. UDP allows the connection to drop packets without repercussions, which makes it ideal for streaming large amounts of data ([learn more here](https://www.howtogeek.com/190014/htg-explains-what-is-the-difference-between-tcp-and-udp/)). This is the most straightforward phase of my process (as of now!).

# Step 4: Drawing Volumetric Images in the Browser

Once I have my volumetric data streaming, I use the Kinectron API to receive it in Three.js. I draw the data url to an image, then to a canvas, then I pull the pixels from the canvas with `[getImageData](https://developer.mozilla.org/en-US/docs/Web/API/Canvas_API/Tutorial/Pixel_manipulation_with_canvas)` to manipulate them. (Chromium recently released new functionality to bypass this process with `[ImageBitmapRenderingContext](https://blog.chromium.org/2018/03/chrome-66-beta-css-typed-object-model.html).` I will be looking into implementing this soon.)

In my first experiments I used the built-in [Three.js point geometry](https://threejs.org/docs/#api/objects/Points) to build point clouds with the incoming depth and color images. Here’s a gif of one of my first experiments using just raw depth data across my home Wi-Fi network ([here’s an approximate version of this code](https://github.com/kinectron/kinectron/tree/master/examples/threejs_examples/pointCloud)).

![](https://miro.medium.com/v2/resize:fit:1400/1*aY_xoBUWVi23w560jkAIZA.gif)

Raw depth data streamed over Wi-Fi network and drawn as a point cloud in Three.js.

In this next experiment I sent color and raw depth data as two images across my home network, and created a color point cloud in Three.js. I didn’t write down the fps at the time (and am having trouble finding the code…), but it has visible latency.

Raw depth and color streamed over Wi-Fi network and drawn together as a point cloud in Three.js.

Despite the latency, I was content with the color point cloud as a reasonably good prototype of streaming realtime color volumetric video across a network and into my browser. From here, my research started moving toward working with color and depth feeds from two different sources. At this point I switched to writing custom shaders in Three.js to speed up the client-side processing. This is what it looked like (and [here’s the code](https://github.com/kinectron/kinectron/tree/multiCloud/examples/threejs_examples/finalTwoShaders)):

Whereas the previous examples were running with two separate images—raw depth and color images—for one person, the two person example is working from two RGBD images, one from each person. In order to send the data faster, I used lossy RGBD images, which caused a grid effect in the depth data (see gif below). The Kinect servers are streaming at 24 fps and placed in two different locations. ([More about this project here](http://lisajamhoury.com/portfolio/facing-you/).)

![](https://miro.medium.com/v2/resize:fit:1400/1*xMIfYwSwxoVFzCP6h_nF3A.gif)

The lossy depth images cause a grid effect.

To me, this last experiment is closest to my ultimate goal—I’d like to build social, realtime volumetric experiences in the browser—but I have a way to go before this will feel like a workable, enjoyable experience for people.

## Three-Kinectron

Earlier this year Or Fleisher created [Three-Kinectron](https://github.com/kinectron/Three-Kinectron), a plugin for working with RGBD data streamed from Kinectron in Three.js. It displays the RGBD feed as mesh, wire or points, and has methods that give the user easy access to properties like brightness, contrast and opacity.

![](https://miro.medium.com/v2/resize:fit:1400/1*FqLdeV_Ds7e0T8-gFdJR9w.png)

Screenshot from Three-Kinectron example.




```


以下是可以基于这篇文章发展出的论文：

---

### 论文标题
实时网络传输体积图像的优化与应用研究  

### 摘要
本文探讨了通过网络实时传输3D彩色与深度图像的技术问题，并提出了一系列在浏览器中呈现体积图像的解决方案。以开源项目Kinectron为基础，作者详细说明了数据捕捉、存储、传输以及渲染流程中面临的关键挑战和解决方法。论文聚焦于如何高效地编码与传输具有压缩性且保真度高的彩色与深度影像，以及如何在客户端快速处理和渲染这些数据。通过Kinect与Three.js的结合，该研究为实时体积数据的在线交互体验提供了全新的可能性。  

### 目录大纲
1. **引言**
   - 背景与研究动机  
   - Kinectron的开放性与可能性  
   - 实时传输体积数据的意义  

2. **技术背景与相关工作**
   - 深度图像的技术概述  
   - 相关硬件及其技术特点：Kinect V2和Intel RealSense  
   - WebRTC与UDP在大数据流传输中的应用  

3. **系统设计与方法**
   - 系统架构及数据流程：从捕获到渲染  
   - 数据捕获与处理  
     - 8位与13位深度图像的存储与优化  
   - 数据传输优化：WebP的压缩方案  
   - 客户端渲染与Three.js的实现  

4. **性能评估与结果**
   - 带宽消耗分析与压缩效果对比  
   - 实验：本地与跨网络实时传输效果对比  
   - 实现多点三维云点数据的性能表现  

5. **讨论与挑战**
   - 彩色与深度融合的实现难点  
   - 采用有损压缩生成失真网格现象  
   - 替代Kinect设备的潜力与适配问题  

6. **应用场景探索**
   - 社交实时体积交互体验的构建  
   - 无背景人物流的传输优化尝试  
   - 面向艺术与创意计算领域的应用案例  

7. **结论与未来工作**
   - 研究成果总结  
   - 进一步优化方向：改进数据封装技术、提升处理帧率、探索新硬件的可行性  
   - Kinectron对Web交互式3D的启发与潜在贡献  

### 致谢
感谢Shawn Van Every, Wouter Verweirder, Aarón Montoya-Moraga和Or Fleisher在此过程中的指导与贡献。  

### 关键词
实时传输、深度图像、体积数据、WebRTC、Three.js、Kinectron
```


```


这种方式是否可以应用于 MPEG 的 V-PCC 或 G-PCC？  

这种方式可以应用于MPEG的VPCC和GPCC吗？

```
