
(Source: [google.com: Video Codecs on AV1, AVS2, and VVC - NotebookLM](https://notebooklm.google.com/notebook/e2fb9513-cd6e-447d-9b3c-d5c785cf74dc))

(Source: [google.com: HEVC 编码 VR 效率 - Google Docs](https://docs.google.com/document/d/1dskG82fyTAOZN0wNPEgo-tcu6RkKwvdCOcuFTF394UE/edit?tab=t.0))

# 适用于高效VR视频压缩的高级HEVC及下一代编码技术

## 执行摘要

  

虚拟现实（VR）视频，特别是360度全景和立体内容，对现有的视频压缩技术构成了前所未有的挑战。其超高分辨率、高帧率和立体视觉要求产生了巨大的数据量，使得在当前网络基础设施下实现高质量、低延迟的流媒体传输变得极为困难。本报告旨在对旨在提高VR视频编码效率和保证转换质量的前沿HEVC（H.265）及下一代编码方法进行全面而深入的研究。

报告的核心发现表明，解决VR视频压缩难题无法依赖单一技术，而必须采用一种结合了多种先进策略的混合、多层次优化方案。本报告系统性地分析了从预处理到编码、再到传输和未来技术的完整技术栈：

1. 预处理优化是基石： 在编码之前，选择高效的投影格式（如谷歌的等角立方图EAC）是实现压缩增益的第一步，其本身就是一种强大的压缩工具，可带来超过25%的效率提升。结合基于人类视觉系统（HVS）的心理物理模型，如“恰可察觉失真”（JND），可以在不牺牲主观质量的前提下进一步剔除感知冗余。
    
2. 视口自适应流媒体是核心架构： 基于分块（Tiling）的视口自适应流媒体（VAS）是当前VR流媒体的主流方案。通过将视频帧分割为独立编码的块，并利用人工智能（AI）驱动的视口预测技术，仅传输用户当前视野内的高质量内容，从而极大地节省了带宽。
    
3. AI驱动的感知编码是效率倍增器： 利用深度学习进行显著性区域检测（Saliency Detection）和注视点编码（Foveated Encoding），能够将比特率智能地分配给用户最关注的区域，实现了从“保真度”到“保人眼”的转变，显著提升了感知质量与码率效率。
    
4. 标准演进提供原生支持： HEVC的多视图扩展（MV-HEVC）通过利用双目视差间的冗余，为立体VR视频提供了超过30%的码率节省，并已在Apple Vision Pro等主流产品中得到应用。其继任者——通用视频编码（VVC/H.266），不仅提供了约50%的基础压缩效率提升，还引入了“子图片”（Subpictures）等更灵活的工具，为视口自适应流媒体提供了原生级别的优化支持。
    
5. 范式转移正在发生： 研究前沿正从传统的混合编码框架转向端到端的学习式和生成式压缩。神经视频编解码器（NVCs）、客户端的生成式AI超分辨率重建以及分割渲染（Split Rendering）等技术，预示着未来视频流将不再是简单的像素传输，而是更高级别的场景信息表示与客户端合成，这将彻底改变VR视频的传输与交互方式。
    

本报告最后为技术决策者提供了战略性建议和具体的实施路径，包括一个混合优化流程的架构设计、一个用于选择合适编解码器的决策框架，以及针对主流开源编码器（如x265、Kvazaar）和处理工具（FFmpeg）的详细参数配置指南。结论指出，VR视频压缩的未来在于构建一个灵活、模块化、并由AI驱动的智能系统，它能够动态地结合投影、分块、显著性和客户端合成技术，以在有限的网络条件下提供极致的沉浸式体验。

---

## 第1节：沉浸式VR视频的压缩必要性

  

本节旨在阐明VR视频对传统视频压缩范式所构成的根本性问题。它将量化数据问题的规模，并引入在沉浸式环境中感知质量的关键概念。

  

### 1.1. 数据挑战分析：VR数据的指数级增长

  

VR视频的核心挑战源于其为模拟人类视觉感知而产生的海量数据，这主要体现在分辨率、帧率和立体视觉三个维度。

- 分辨率与视场角（FoV）： VR体验的首要前提是消除纱窗效应（Screen-door Effect），使用户无法察觉到单个像素。由于VR头显中的透镜会极大地放大显示屏幕，因此需要极高的原始分辨率才能满足人眼的视觉敏锐度 1。对于传统视频而言，4K分辨率已是高清标准，但对于360度全景内容，4K仅仅是保证基本质量的起点 3。理论上，为了在人眼中央凹区域达到无像素感的沉浸体验，360度画布需要达到约20Kx10K的惊人分辨率 3。这种巨大的分辨率直接导致了极高的带宽需求（例如，为每只眼睛提供4K流媒体需要约400 Mbps）和庞大的存储需求，这远远超过了传统视频的范畴 4。在商业实践中，Meta Quest等设备建议立体内容的最低分辨率为3840x3840像素 1，而行业专家则认为，为了面向未来，每眼4096x2048的分辨率是更为理想的最低标准 6。
    
- 帧率： 为了维持用户的“临在感”（Presence）并避免因动态画面更新不足而引发的晕动症（Cybersickness），VR视频必须以高帧率播放。业界普遍认为60 fps是最低要求，而主流的高端VR平台，如PlayStation VR、Oculus Rift和HTC Vive，支持的刷新率高达90 fps甚至120 fps 6。这与传统电影的24 fps或标准视频的30 fps相比，数据量成倍增加。
    
- 立体视觉（Stereoscopy）： 为了提供真实的深度感知，VR内容通常需要为左右眼分别渲染和传输一个独立的、略有差异的视频流。这种立体视觉技术虽然极大地增强了沉浸感，但也直接导致需要处理的像素数据量翻倍 1。
    

  

### 1.2. 原始360度内容编码的低效性

  

将标准HEVC编码器直接应用于原始的360度视频是一种效率极低的做法。其根本问题在于将球面内容投影到二维平面所引入的几何失真。

最常见的投影方式是等距柱状投影（Equirectangular Projection, ERP）。在这种投影下，像素在二维平面上的分布并不均匀。靠近两极（顶部和底部）的区域被极度拉伸，导致像素过度采样，包含了大量冗余信息；而赤道区域（通常是用户视线集中的水平区域）则被压缩，导致像素采样不足 10。

这种不均匀的采样密度和严重的几何失真，破坏了HEVC等传统编解码器所依赖的空间相关性假设。编码器在处理两极区域时，会浪费大量码率去编码那些被人为拉伸的、缺乏真实细节的区域；而在处理赤道区域时，又可能因为采样不足而丢失重要细节。此外，ERP图像在左右边界处存在不连续性，这会给运动估计等模块带来额外挑战，进一步降低压缩性能 10。

  

### 1.3. 重新定义质量：沉浸式环境下的感知度量

  

在VR环境中，视频质量的评估标准发生了根本性变化。传统的客观质量度量方法，如峰值信噪比（PSNR）和视频多方法评估融合（VMAF），已不再完全可靠 1。一份报告指出，即使一个VR视频的VMAF分数很高，在头显中观看时，由于透镜的放大效应，其视觉质量可能依然不佳 1。

真正的衡量标准是用户的体验质量（Quality of Experience, QoE）。QoE是一个综合性指标，它不仅包括像素级的保真度，还受到延迟、播放卡顿/重新缓冲（Stalling/Rebuffering）以及晕动症等多种因素的严重影响 13。尤其是在VR中，任何形式的播放中断都会严重破坏用户的沉浸感，对QoE造成灾难性的负面影响 15。

这种转变催生了对更符合VR特性的质量评估方法的需求。例如，加权球面峰值信噪比（Weighted-to-Sphere PSNR, WS-PSNR）通过为投影平面上的不同像素分配权重，以反映其在原始球面上的实际面积，从而更准确地评估360度视频的客观质量 16。然而，最终的黄金标准仍然是全面的主观质量评估测试，即通过招募大量测试者在受控环境中进行观看和评分，得出平均主观得分（Mean Opinion Score, MOS），以真实捕捉用户的最终感知体验 14。

这种对质量评估的重新定义，意味着VR视频的编码优化策略必须从单纯追求数学上的信号保真度，转向以人类感知为中心，优先保证流畅度和沉浸感。编码过程中的任何决策，都应以最大化最终用户的QoE为目标。

---

## 第2节：优化画布：投影格式与感知预处理

  

本节将详细阐述在编码流程开始前至关重要的一步：将球形视频内容映射到二维平面。此过程不仅是格式转换，其本身就是一种强大的压缩工具。此外，本节还将介绍如何利用心理物理模型在编码前剔除人眼无法察觉的信息，从而实现更高层次的效率优化。

  

### 2.1. 360度投影格式的比较分析

  

将360度球面内容投影到二维平面是利用现有2D视频编解码器（如HEVC）进行压缩的必要步骤。不同的投影方式在像素分布均匀性、几何失真程度以及对压缩算法的友好度上存在巨大差异，直接影响最终的编码效率。

- 等距柱状投影（Equirectangular Projection, ERP）： 这是最基础且兼容性最广的投影格式。它将球体的经纬度直接线性映射到一个矩形平面上。然而，如前所述，ERP存在严重的缺陷：两极区域被过度拉伸，像素密度极高但信息冗余；赤道区域则被压缩，像素密度较低但通常包含更多重要内容 10。这种不均匀性导致了严重的码率浪费，因此ERP通常被用作衡量其他更先进格式性能的基准。
    
- 立方体贴图投影（Cube Map Projection, CMP）： 源于游戏引擎的CMP是一种显著的改进。它将球面内容投影到一个立方体的六个面上，然后将这六个面展开成一个二维图像。CMP大大减少了每个面内部的几何失真，使得画面更接近于传统的透视投影，这更有利于HEVC的运动估计和变换编码 10。然而，标准的CMP在立方体的边角处仍然存在像素密度高于中心区域的问题 10。Facebook在早期将其360度视频从ERP转换为CMP，实现了约25%的文件大小缩减，证明了其优越性 21。
    
- 等角立方图（Equi-Angular Cubemap, EAC）： 由Google开发的EAC是CMP的一种先进变体，旨在解决CMP边角像素密度不均的问题。EAC通过非线性映射，确保从球心发出的每单位立体角的视觉信息都能映射到二维平面上相同数量的像素。这使得像素在整个球面上实现了高度均匀的分布，从而最大限度地提高了编码效率 10。GoPro公司在其产品中采用了EAC格式，成功地将等效于5376像素宽度的分辨率内容，封装在4032像素宽度的容器中，节省了25%的像素数量，这直接转化为码率的节省 11。
    
- 金字塔投影（Pyramid Projection）： 这是由Facebook为VR场景设计的一种视口依赖（view-dependent）的投影格式。其核心思想是将最高分辨率和质量集中分配给用户正前方的核心视口（金字塔的底面），而将周边区域（金字塔的侧面）以逐渐降低的分辨率进行投影。这种方法极具效率，据称可实现高达80%的带宽节省。但其代价也相当高昂：需要为多个可能的中心视口（例如30个）预先生成并存储多个不同分辨率的版本（例如5个），导致服务器端的存储和处理成本急剧增加 21。
    

表1：360度投影格式对比

|   |   |   |   |   |   |
|---|---|---|---|---|---|
|投影格式|原理|像素分布均匀性|失真特性|典型压缩效率增益 (相较于ERP)|主要应用/提出者|
|等距柱状投影 (ERP)|将球体经纬度线性映射到矩形|差 (两极拉伸, 赤道压缩)|严重, 尤其在两极|基准 (0%)|传统标准, 广泛兼容|
|立方体贴图 (CMP)|将球面投影到立方体的六个面|中等 (边角像素密度高于中心)|面内失真小, 但面间不连续|约 25%|游戏引擎, Facebook 360|
|等角立方图 (EAC)|优化版CMP, 保证每单位立体角像素数相等|高 (全方位接近均匀)|面内失真小, 边角优化|> 25% (优于CMP)|Google (YouTube), GoPro|
|金字塔投影|视口依赖, 中心高分辨率, 周边递减|极不均匀 (按需分配)|视口内失真极小, 视口外质量低|高达 80%|Facebook VR (VOD场景)|

  

### 2.2. 基于“恰可察觉失真”模型的感知调优

  

除了优化投影格式，另一种先进的预处理技术是在编码环路中引入基于人类视觉系统（HVS）的心理物理模型，其中最具代表性的是“恰可察觉失真”（Just Noticeable Difference, JND）模型。

- JND原理： JND定义了人类视觉系统能够感知的最小刺激变化阈值 22。任何低于该阈值的图像失真，对于观察者来说都是不可见的。这种“感知冗余”为视频压缩提供了巨大的优化空间：我们可以在不牺牲任何主观视觉质量的前提下，通过引入高达JND阈值的失真来节省码率。
    
- 在HEVC/VVC中的集成： JND模型可以深度集成到HEVC或VVC的编码决策环路中，特别是指导量化过程 24。传统的编码器力求在所有图像块上均匀地最小化失真（如均方误差）。而基于JND的感知视频编码（Perceptual Video Coding, PVC）则会根据每个编码单元（CU）的内容特性（如亮度、纹理复杂度和运动）计算其JND阈值。然后，编码器会自适应地调整量化参数（QP），在纹理复杂或运动剧烈等JND阈值较高的区域（即人眼对失真不敏感的区域）使用更粗的量化，而在平滑或视觉显著的区域使用更精细的量化 25。
    
- 性能表现： 研究表明，将JND模型应用于HEVC编码器，可以在几乎不产生任何可察觉的主观质量损失的情况下，实现显著的码率节省。实验结果显示，平均码率节省可达10%至16%，在某些特定场景下，最大节省率甚至可以达到49%至53% 26。
    

这种从追求信号保真度到追求感知保真度的转变，是现代视频编码技术发展的重要方向。它使得编码器能够更智能地分配宝贵的码率资源，将它们用在“刀刃”上，即那些对最终用户体验影响最大的地方。对于VR视频而言，这意味着可以在保证核心区域清晰度的同时，大幅压缩周边或非重要区域的数据量，从而在有限的带宽下实现更优的沉浸式体验。

---

## 第3节：视口自适应流媒体（VAS）架构

  

视口自适应流媒体（Viewport-Adaptive Streaming, VAS）是当前解决VR视频高带宽问题的核心策略。其基本思想非常直观：既然用户在任意时刻只能看到整个360度球面的一小部分（即“视口”），那么就只为这部分区域传输高质量的视频数据，从而避免为用户看不到的区域浪费带宽。本节将深入探讨实现VAS的两个技术支柱：视频分块和视口预测，以及它们如何通过MPEG-DASH等标准协议进行系统集成。

  

### 3.1. HEVC中的分块（Tiling）范式

  

为了实现对视频不同空间区域的独立处理，首先需要将视频帧进行空间分割。HEVC标准原生提供了“分块”（Tiling）这一强大功能。

- 核心概念： 分块技术可以将一帧图像分割成一个由多个矩形区域组成的网格。网格中的每一个矩形块都是一个独立的“Tile”。关键在于，这些Tiles可以被独立地编码和解码，互不依赖 28。
    
- 运动约束分块集（MCTS）： 在自适应流媒体应用中，仅仅独立解码是不够的。我们还需要确保一个Tile的解码过程完全不依赖于其他Tile的数据，特别是在运动补偿等帧间预测环节。为此，需要使用“运动约束分块集”（Motion-Constrained Tile Sets, MCTS）进行编码。通过设置特定的编码参数，可以强制编码器将运动向量的搜索范围限制在每个Tile的内部，从而确保任意一个Tile都可以被单独提取、传输和解码，而不会因为缺少相邻Tile的参考信息而出错 30。
    
- 使用Kvazaar实现： 像Kvazaar这样的开源HEVC编码器为生成MCTS提供了直接的命令行支持。通过组合使用--tiles（例如3x3来定义分块网格）、--slices tiles（确保每个Tile封装在一个独立的Slice中）和--mv-constraint frametilemargin（施加运动约束）等参数，开发者可以轻松地生成适用于VAS的已分块HEVC码流 32。
    

  

### 3.2. 预测流：VAS的大脑

  

分块技术提供了“传输什么”的机制，而视口预测则负责回答“应该传输什么”的决策问题。这是整个VAS系统智能化的核心。

- 目标： 客户端应用程序需要根据用户的头部朝向，预测其在未来一小段时间内（例如下一个视频分片）可能会看到的视口区域。基于这个预测，客户端会向服务器请求覆盖该区域的高质量Tiles，同时为预测视口之外的周边区域请求较低质量的Tiles，或者完全不请求，以此实现带宽的按需分配 31。
    
- 预测的输入源： 视口预测模型的准确性至关重要。为了做出更精准的预测，模型通常会综合多种信息源：
    

- 历史头部运动轨迹： 分析用户过去一段时间的头部旋转速度和加速度，以推断其未来的运动趋势 34。
    
- 视频内容特征（显著性）： 人类的注意力并非随机分布，而是会被视频内容中的特定元素（如运动物体、人脸、明亮区域等）所吸引。通过分析视频内容，可以生成“显著性图”（Saliency Map），预测用户最可能关注的区域 35。
    
- 统计模型与群体行为： 分析大量用户的观看数据，可以发现某些视频内容具有普遍的视觉引导性，形成观看“热力图”，这也可以作为预测的依据。
    

- AI赋能的预测： 随着人工智能技术的发展，深度学习模型，特别是循环神经网络（RNN）的变体如长短期记忆网络（LSTM）和卷积神经网络（CNN），越来越多地被用于视口预测。这些模型能够学习用户行为和视频内容之间复杂的时空关联性，从而提供比传统统计模型更准确的预测 35。一项研究表明，引入了显著性信息预测的VAS系统，相比于仅依赖头部运动历史的方法，能够将播放卡顿时间减少65%，并额外节省31%的带宽 36。
    

  

### 3.3. 基于MPEG-DASH的系统集成

  

有了分块的码流和预测的视口，还需要一个标准的传输协议来将这一切整合为一个可工作的系统。MPEG-DASH（Dynamic Adaptive Streaming over HTTP）是实现这一目标的理想选择。

- 内容封装： 首先，经过分块编码的HEVC码流需要被封装到MP4等容器格式中。在封装过程中，每个Tile会被映射为一个独立的媒体轨道（Track） 33。
    
- 媒体表示描述（MPD）： 接下来，生成一个DASH清单文件（Media Presentation Description, MPD）。这个MPD文件是整个流媒体会话的“地图”，它会详细描述所有可用的视频内容。对于分块流，MPD会利用DASH的空间关系描述（Spatial Relationship Description, SRD）扩展，来指明每个Tile轨道在整个360度画面中的空间位置、分辨率，以及每种质量级别（比特率）对应的版本 33。
    
- 客户端操作流程： VR客户端（播放器）启动时，首先请求并解析MPD文件。然后，它会启动视口预测模块，根据预测结果确定下一个时间片段需要哪些Tiles。接着，客户端会根据当前的网络状况，为每个需要的Tile选择一个合适的质量级别，并通过标准的HTTP GET请求从服务器上独立获取这些Tiles。最后，客户端将接收到的Tiles在本地重新组合成完整的（但质量不均匀的）视频帧，再进行解码和渲染 31。
    

这个闭环系统在预测准确性和带宽利用率之间达到了精妙的平衡。然而，这种平衡是脆弱的。如果预测失败，用户头部迅速转向一个未被请求的区域，屏幕上就会出现黑块或低质量区域，严重破坏沉浸感。因此，系统设计中通常会包含一个“安全边际”，即请求比预测视口稍大一些范围的Tiles，但这又会带来额外的带宽开销。如何动态调整这个安全边际，以在预测精度、带宽效率和用户体验之间找到最佳平衡点，是所有VAS系统设计的核心挑战。

---

## 第4节：智能比特分配：AI驱动的感知编码

  

在宏观层面通过视口自适应流媒体技术优化了数据传输后，我们还可以深入到编码器内部，在微观层面进行更精细的比特分配。本节将探讨超越传统统一量化方法的先进技术，它们利用人工智能来理解视频内容和模拟人类视觉感知，从而实现更高效的比特分配。

  

### 4.1. 显著性感知编码：为重要内容分配更多资源

  

- 原理： 显著性感知编码（Saliency-Aware Encoding）的核心思想是，人类的视觉注意力在画面中的分布是不均匀的。我们会自然地被运动的物体、人脸、鲜艳的色彩或高对比度的区域所吸引。该技术利用AI模型，通常是卷积神经网络（CNN），对视频的每一帧进行分析，生成一张“显著性图”（Saliency Map），这张图以灰度值的形式标示出画面中每个区域的“视觉重要性”或“吸引力” 41。
    
- 在HEVC中的应用： 这张显著性图被用作编码器码率控制模块的输入。对于被识别为高显著性的区域（即感兴趣区域，Regions of Interest, ROI），编码器会分配更低的量化参数（QP），意味着更少的压缩和更高的图像质量。相反，对于背景等非显著区域，则分配更高的QP，进行更大力度的压缩 41。这样，有限的码率被优先用于保护用户最可能关注的区域的视觉质量。
    
- 性能表现： 这种智能的比特分配策略可以在保持同等“主观感知质量”的前提下，实现显著的码率节省。因为比特没有被浪费在那些用户很可能不会注意到的细节上。一项研究表明，该技术可实现高达7.17%的码率节省 41。当显著性感知与分块流媒体相结合时，其优势更为明显，能够比不使用显著性信息的方案额外节省31%的带宽 36。
    

  

### 4.2. 注视点编码：模拟人眼视觉特性

  

- 生物学基础： 注视点编码（Foveated Encoding）的灵感直接来源于人眼视网膜的生理结构。在视网膜中心，有一个被称为“中央凹”（Fovea）的小区域，这里的感光细胞密度最高，因此我们拥有最清晰的中心视野。而随着视角偏离中心，感光细胞密度急剧下降，导致周边视野的清晰度也随之降低 43。
    
- 技术实现： 注视点编码旨在数字世界中模拟这一特性。它需要通过眼动追踪（Eye-tracking）技术实时获取用户在VR头显中的注视点位置。一旦确定了注视点，编码器（或渲染引擎）就会将最高的分辨率和质量分配给围绕该注视点的一个小区域，然后以同心圆的方式向外围逐步降低分辨率和质量 43。这种技术可以在标准的编解码器框架内，通过在变换域（DCT domain）中对不同区域的系数进行不同程度的量化来实现 45。
    
- 在VR中的应用： 随着眼动追踪逐渐成为VR头显的标准配置，注视点编码展现出巨大的应用潜力。它允许系统在任何时刻都只对整个360度场景中的一小部分进行最高质量的渲染和编码，从而可能实现数量级的性能提升和带宽节省。然而，其实现也面临着极高的延迟挑战：从捕捉眼动数据，到服务器完成编码，再到视频传输回客户端并显示，整个环路的延迟必须控制在几十毫秒以内，否则高质量区域将滞后于用户的实际注视点，反而会破坏体验。
    

  

### 4.3. 机器学习优化编码决策

  

- HEVC的复杂度瓶颈： HEVC相比其前代标准H.264，压缩效率的提升很大程度上来源于其极其灵活的块划分结构（编码树单元CTU、编码单元CU、预测单元PU、变换单元TU）。然而，这种灵活性也带来了巨大的计算复杂度。编码器为了找到最优的块划分方式，需要通过“暴力”的率失真优化（Rate-Distortion Optimization, RDO）过程，对成千上万种可能的组合进行测试和比较，这使得HEVC的编码时间非常长 47。
    
- 基于机器学习的“捷径”： 为了解决这一问题，研究人员开始利用机器学习来“预测”最优的编码决策，从而跳过耗时的RDO搜索过程。例如，可以训练一个支持向量机（SVM）或神经网络模型，让它学习图像块的纹理、梯度等内容特征与其最优CU划分结构之间的关系 48。在实际编码时，编码器只需提取当前CU的特征，输入到这个训练好的模型中，模型就能直接给出一个接近最优的划分决策。
    
- 性能表现： 这种方法在加速编码方面效果显著。一项基于SVM的研究表明，该技术可以在HEVC参考编码器上实现52.38%的编码时间缩短，而代价仅仅是微不足道的1.19%的码率增加（以BDBR衡量） 48。这使得在保持高压缩效率的同时，进行实时或近实时的HEVC编码成为可能。
    

这些AI驱动的编码技术标志着视频压缩从一个纯粹的信号处理领域，向一个与计算机视觉和机器学习深度融合的领域的转变。它们共同的目标是让编码器变得“更聪明”，能够像人一样理解画面的内容和重要性，从而做出最优的比特分配决策。

---

## 第5节：压缩第三维度：用于立体VR的MV-HEVC

  

本节将聚焦于处理立体VR视频所面临的独特挑战，并详细介绍HEVC标准的多视图扩展（Multiview HEVC, MV-HEVC）如何为这一挑战提供了一个专为其设计的、高效的解决方案。

  

### 5.1. 视图间预测原理

  

立体视频的核心在于为左右眼提供两个视角略有不同的画面，从而在大脑中形成深度感。这两个视图（左视图和右视图）描绘的是同一场景，因此它们之间存在着极高的相关性和冗余度 8。

如果采用一种简单直接的方法，即使用两个独立的HEVC编码器分别对左右视图进行编码（这种方式被称为“联播”或Simulcast），那么这种视图间的冗余就完全被浪费了，导致效率低下 49。

MV-HEVC作为HEVC标准的一个官方扩展，正是为了解决这一问题而设计的。它的核心技术是“视图间预测”（Inter-view Prediction）。其工作原理与HEVC中利用时间冗余的帧间预测（Inter-prediction）非常相似，但它将这种预测关系从时间维度扩展到了空间（视图）维度。具体来说，MV-HEVC会将其中一个视图（例如左视图）编码为一个基础层（Base Layer），这个基础层可以被任何标准的HEVC解码器解码。然后，在编码另一个视图（例如右视图）时，编码器会将已经编码完成的左视图作为额外的参考帧，存入参考帧列表（Decoded Picture Buffer）。这样，右视图中的图像块就可以像参考过去或未来的帧一样，去参考左视图中对应位置的图像块来进行预测，编码器只需传输两者之间的差异（残差）即可 8。

  

### 5.2. 性能增益与行业应用

  

- 压缩效率： 通过有效地利用双目视差间的冗余，MV-HEVC能够带来显著的性能提升。根据官方的验证测试，与使用HEVC进行Simulcast编码相比，MV-HEVC在保持同等主观质量的前提下，可以实现超过30%的码率节省 49。
    
- 向后兼容性： MV-HEVC的一个关键设计优势在于其向后兼容性。一个标准的、不支持多视图功能的HEVC解码器在接收到MV-HEVC码流时，能够识别并正确解码其中的基础层（例如左视图），并忽略它无法理解的增强层数据。这意味着用户至少可以观看到一个正常的2D视频版本，保证了内容的可达性 8。
    
- 行业催化剂——Apple Vision Pro： 尽管MV-HEVC标准早在2014年就已定稿，但在近十年的时间里，它并未得到广泛的商业应用。直到近期，随着Apple公司宣布将其作为其空间计算设备Vision Pro以及iPhone 15 Pro上3D和空间视频（Spatial Video）的核心编码格式，MV-HEVC才迎来了爆发式的增长 9。苹果的这一决策迅速带动了整个产业链的跟进，包括Meta也宣布在其Quest系列头显中增加对MV-HEVC的支持，使其一跃成为当前立体视频内容分发的事实标准 49。
    

对于任何需要处理立体VR视频的项目而言，MV-HEVC目前是行业验证过的、技术成熟且效率最高的选择。它提供的超过30%的码率节省是实实在在的收益，可以直接应用于降低带宽成本和存储需求。未来的发展方向将是如何将MV-HEVC与前几节讨论的视口自适应、显著性感知等技术进行深度融合，例如，构建一个能够进行分块的、显著性感知的MV-HEVC流媒体系统，以实现效率的最大化。

---

## 第6节：继任标准：适用于沉浸式媒体的通用视频编码（VVC/H.266）

  

在HEVC已经取得巨大成功的基础上，视频编码标准化的步伐并未停止。本节将目光投向HEVC的正式继任者——通用视频编码（Versatile Video Coding, VVC），分析其相较于HEVC的架构性改进，以及它为VR等沉浸式媒体应用带来的新特性。

  

### 6.1. 核心架构的改进

  

VVC的设计目标是在HEVC的基础上，将压缩效率再提升一个台阶，同时增强对新兴视频应用场景的普适性。

- 压缩效率的飞跃： VVC最引人注目的成就是其压缩性能。在保持同等主观视觉质量的条件下，VVC的码率大约只有HEVC的一半，即实现了约50%的码率节省 50。这一根本性的提升意味着，对于任何给定的VR视频质量目标，采用VVC所需的数据量可以直接减半。近期的基准测试也证实了这一点，显示VVC相比HEVC平均可节省36%至39%的码率 55。
    
- 更灵活的块划分结构： VVC继承并发展了HEVC的块划分思想。它将最大的编码树单元（CTU）尺寸从HEVC的64x64扩展到了128x128，这对于高效处理8K及以上分辨率的VR视频至关重要。更重要的是，VVC引入了多类型树（Multi-Type Tree）划分，除了四叉树（QT）外，还增加了二叉树（BT）和三叉树（TT）划分。这种混合划分结构使得编码块能够更精细、更灵活地贴合视频画面中物体的真实轮廓和纹理边界，从而减少了残差信息，提升了预测精度 51。
    
- 更先进的预测与滤波技术： VVC在预测和环路滤波等多个核心模块上都进行了增强。它支持的帧内预测模式数量大幅增加至67种（HEVC为35种），提供了更丰富的预测方向。帧间预测的精度也得到了提升。此外，VVC引入了新的自适应环路滤波（Adaptive Loop Filter, ALF）技术，它在传统的去块效应滤波（Deblocking Filter）和采样自适应偏移（SAO）之后，增加了一个可自适应的维纳滤波器，能够更有效地消除各类编码失真，提升重建图像的质量 51。
    

  

### 6.2. 子图片（Subpictures）：比分块更灵活的工具

  

为了更好地支持视口自适应流媒体等应用，VVC在保留Tiles功能的基础上，引入了一个名为“子图片”（Subpictures）的全新概念 55。

子图片允许将一帧图像划分为多个矩形区域，这些区域可以被独立地编码、提取和解码。与HEVC的Tiles相比，Subpictures提供了更高的灵活性和独立性。一个关键区别在于，可以显式地禁止环路滤波跨越Subpicture的边界，这确保了每个Subpicture都是一个完全自包含的处理单元。这一特性使其成为实现视口依赖流媒体和感兴趣区域（ROI）编码的理想工具，比HEVC中相对固化的Tiles结构更具优势 55。可以说，Subpictures是VVC为VR/AR等沉浸式应用量身定做的功能。

  

### 6.3. 应用、许可与复杂度的权衡

  

- 计算复杂度： VVC卓越的压缩效率是以高昂的计算成本为代价的。据估计，VVC的编码复杂度可达到HEVC的10倍之多，而解码复杂度也约为HEVC的两倍 52。这对于需要在资源受限的移动设备上进行实时编码和解码的VR应用来说，是一个巨大的挑战。
    
- 专利许可： 与HEVC类似，VVC的专利许可环境也相当复杂，这可能会成为其在开放互联网上普及的障碍 53。虽然像Via-LA这样的专利池已经成立并公布了许可费用，但其成本和条款的复杂性可能会让一些开发者望而却步 58。
    
- 市场采纳情况： 尽管面临挑战，VVC正凭借其性能优势稳步获得市场关注，尤其是在对带宽效率要求极高的领域，如4K/8K超高清广播和高端流媒体服务 50。VVC被纳入ATSC 3.0等下一代广播电视标准，是其迈向主流应用的重要里程碑 50。
    

从VVC的设计中可以看出，其架构本身就对VR/AR等新兴应用场景给予了高度重视。Subpictures等功能的引入，表明VVC的开发者从一开始就将视口自适应流媒体作为核心用例来考虑，而不仅仅是将其视为一个附加功能。这与HEVC的设计理念有本质不同，使得VVC在架构层面更适合解决VR视频所面临的挑战。然而，高昂的复杂度和许可成本决定了VVC在短期内将主要作为一种“高级”编解码器，应用于那些能够证明其50%带宽节省合理性的高端内容，如8K VR直播或顶级沉浸式电影。对于更广泛的市场，HEVC仍将在未来数年内保持其重要地位。

表2：HEVC与VVC在VR视频应用中的关键特性对比

|   |   |   |   |
|---|---|---|---|
|特性|HEVC (H.265)|VVC (H.266)|对VR编码的影响|
|压缩效率 (相较于AVC)|约 50% 码率节省|约 75% 码率节省 (比HEVC再节省50%)|VVC能以一半的码率实现与HEVC相同的VR画质，极大缓解带宽压力。|
|最大CTU尺寸|64x64|128x128|更大的CTU尺寸能更高效地处理8K等超高分辨率VR视频中的大面积平坦区域。|
|块划分结构|四叉树 (QT)|多类型树 (QT, BT, TT)|更灵活的划分方式能更精确地匹配VR场景中复杂的物体边缘，提高预测效率。|
|帧内预测模式|35 种|67 种|更多的预测模式为高分辨率、高纹理复杂度的VR内容提供了更精确的帧内预测。|
|环路滤波|Deblocking, SAO|Deblocking, SAO, ALF, LMCS|新增的ALF等滤波器能更有效地去除编码伪影，提升VR视频的主观质量。|
|视口自适应工具|分块 (Tiles)|子图片 (Subpictures)|Subpictures提供了比Tiles更强的独立性和灵活性，是为VR视口流媒体量身定制的工具。|
|编码复杂度 (相较于HEVC)|1x (基准)|高达 10x|VVC的高复杂度对实时VR编码提出了极高的硬件要求。|
|解码复杂度 (相较于HEVC)|1x (基准)|约 2x|对VR头显等终端设备的解码能力提出了更高要求。|

---

## 第7节：范式转移：端到端学习式与生成式压缩

  

本节将探索视频压缩技术的最前沿，这些研究正在摆脱传统混合编解码器的束重，以全新的方式利用人工智能，预示着一场深刻的范式革命。

  

### 7.1. 神经视频编解码器（NVCs）：全新的基础

  

- 端到端学习： 神经视频编解码器（Neural Video Codecs, NVCs）是对传统编码范式的颠覆。它不再使用由专家手工设计的、分立的模块（如变换、量化、熵编码），而是用一个统一的、通过端到端学习优化的深度神经网络（通常是自编码器架构）来替代整个压缩流程 62。
    
- 潜在优势： NVCs的最大潜力在于其强大的学习能力。它们可以直接从海量视频数据中学习到针对特定内容类型的最优压缩策略，理论上能够达到比VVC更高的压缩效率 62。更重要的是，NVCs的优化目标可以直接设定为主观感知指标，而不是像PSNR这样的代理指标，从而更好地服务于QoE 64。
    
- 当前挑战： NVCs走向实用化仍面临两大主要障碍。首先是巨大的计算复杂度，这使得在消费级硬件上实现实时编码和解码成为一项重大的研究挑战 65。其次是跨平台部署的一致性问题，由于不同硬件平台上的浮点运算存在微小差异，可能导致解码结果不匹配，破坏码流的完整性 66。
    

  

### 7.2. 球面CNN：迈向无投影压缩

  

将NVC应用于360度视频时，一个核心问题是标准的CNN是在二维平面上进行运算的，这迫使我们必须先将球面视频进行投影，而投影本身就会引入失真，影响了神经网络学习特征的准确性 69。

球面CNN（Spherical CNNs）是一种创新的网络架构，它重新定义了卷积操作，使其能够直接在数据的球面表示上进行。它学习到的滤波器具有旋转等变性，即当输入图像旋转时，输出的特征图也相应旋转，但特征本身保持不变 71。

这种方法从根本上避免了预投影步骤，使得神经网络能够在其原生数据格式上进行学习和压缩，有望更准确地捕捉球面视频的内在结构，从而实现更高的压缩效率 69。研究也表明，对于NVCs而言，投影格式的选择对其压缩性能的影响甚至比对传统编解码器更大，这进一步凸显了发展投影感知或无投影模型的必要性 73。

  

### 7.3. 利用生成式AI进行实时视口增强

  

- 核心概念： 这是一种颠覆性的流媒体思路。服务器不再传输完整的高分辨率视频，而是传输一个低分辨率的基础视频流，并附带一个经过特殊训练的生成式AI模型（例如，一个内容感知的超分辨率DNN） 74。客户端接收到这些数据后，利用其本地强大的GPU算力，通过AI模型实时地将低分辨率的视口“生成”或“重建”为高分辨率、高质量的画面 75。
    
- 优势： 这种方法的带宽效益是显而易见的。一个低分辨率视频流加上轻量级的模型参数更新，其数据量远小于一个完整的高分辨率视频流 74。它本质上是将一部分计算负担从网络传输转移到了客户端的本地处理上。
    
- 在VR中的应用： 该技术与VR渲染管线天然契合。NVIDIA的DLSS（深度学习超级采样）和Facebook（现Meta）的神经超采样技术已经证明，利用AI在实时渲染中对低分辨率图像进行上采样是完全可行的，能够在大幅降低渲染成本的同时，获得接近原生高分辨率的画质 75。将这一思想应用于VR视频流，意味着可以在低带宽条件下，为用户提供高质量的沉浸式体验。
    

  

### 7.4. 未来的交付方式：分割渲染与边缘计算（MEC）

  

- 概念： 这是目前最具前瞻性的架构，它将渲染管线本身在物理上进行了分割。一部分计算密集型但对延迟不敏感的渲染任务（如场景几何处理、复杂光照计算）在网络边缘的强大服务器上完成，而另一部分对延迟极其敏感的任务（如最终的视图变换、畸变校正）则在本地的VR头显上完成 78。
    
- 传输内容的变化： 在这种架构下，网络上传输的不再是压缩后的视频帧，而是更紧凑的场景描述信息（如几何数据、纹理、材质、光照参数）或中间渲染数据。头显接收到这些“半成品”后，在本地完成最后一英里的渲染 78。
    
- MEC的角色： 多接入边缘计算（Multi-access Edge Computing, MEC）是实现这一架构的关键赋能技术。MEC通过将云计算的算力和存储资源部署到网络的边缘（如5G基站），使其物理上更靠近最终用户，从而提供传统云计算无法比拟的超低延迟和超高带宽 79。这对于满足VR应用中严苛的“运动到光子”（motion-to-photon）延迟要求至关重要。
    

这些前沿技术共同指向了一个清晰的未来趋势：视频流媒体正在从一个被动的“像素传输”过程，演变为一个主动的、分布式的“内容合成”过程。网络上传输的将不再是最终的图像，而是一种更抽象、更高效的内容表示（NVC的潜在矢量、生成式AI的低分辨率输入+模型、分割渲染的场景图）。最终的像素将在最靠近用户的地方——客户端设备上被实时生成。这一范式转移不仅将彻底解决VR视频的带宽瓶颈，还将为个性化、交互式的沉浸式体验打开全新的大门。

---

## 第8节：战略建议与实施路径

  

本报告的最后一部分将综合前述所有分析，为负责VR视频技术选型和架构设计的技术主管提供一套具体、可操作的战略建议。内容将涵盖从整体流程设计、编解码器选择，到具体的编码器参数调优和工具链工作流的实践指南。

  

### 8.1. 构建混合、多阶段的优化管线

  

单一技术无法应对VR视频的复杂挑战。推荐构建一个集成了多种优化策略的整体解决方案，其流程可分为以下几个阶段：

- 阶段一（预处理）： 选择最优的投影格式。
    

- 推荐方案： 对于追求最高质量和最广泛兼容性的应用，等角立方图（EAC） 是当前最佳选择。
    
- 备选方案： 在可控的视频点播（VOD）环境中，如果服务器存储和计算资源充足，可以考虑采用金字塔投影类的方法，以实现最大程度的带宽节省。
    

- 阶段二（编码架构）： 实施基于分块的编码工作流。
    

- 核心要求： 必须使用运动约束分块（Motion-Constrained Tiles），确保每个分块都可以独立传输和解码，这是视口自适应流媒体的基础。
    

- 阶段三（智能编码）： 集成AI驱动的感知优化。
    

- 双重应用： 引入显著性预测模型。该模型应在两个层面发挥作用：
    

1. 流媒体层： 预测用户最可能观看的Tiles，指导客户端的拉流策略。
    
2. 编码器层： 指导编码器内部的码率控制，为选定的高质量Tiles内部的显著性区域分配更低的QP。
    

- 阶段四（传输）： 采用标准化的自适应流媒体协议。
    

- 工具链： 使用MP4Box等工具将分块后的码流封装为多轨道的MP4文件，并生成包含空间关系描述（SRD） 的MPEG-DASH清单文件，以实现标准的视口自适应交付。
    

  

### 8.2. 编解码器选择决策框架

  

选择哪种编解码器是一个涉及技术性能、生态成熟度、成本和未来规划的战略决策。

- HEVC (H.265)：
    

- 定位： 当前市场的主流，技术成熟，硬件支持广泛。
    
- 适用场景： 近期部署和需要覆盖最广泛现有硬件设备的应用。
    
- 关键特性： 对于任何立体VR内容，必须使用其MV-HEVC扩展，以获得超过30%的效率提升。
    

- VVC (H.266)：
    

- 定位： 下一代标准，性能卓越，但成本高昂。
    
- 适用场景： 高端、付费的VR应用，例如8K超高清直播、高帧率沉浸式体育赛事等，在这些场景中，其节省的50%带宽成本足以覆盖其更高的计算和专利许可费用。
    
- 建议： 应开始进行技术预研和原型验证，为未来旗舰级VR体验向VVC的迁移做准备。
    

- AV1：
    

- 定位： 免版税的开放标准，性能介于HEVC和VVC之间 51。
    
- 适用场景： 主要优势在于基于Web的VR应用，在这些场景中，专利许可是一个核心考量因素。但在纯粹的压缩性能上，尤其是在360度视频方面，VVC通常表现更优 56。
    

- NVCs / 生成式AI：
    

- 定位： 处于研发和探索阶段。
    
- 适用场景： 目前不适合用于生产环境。
    
- 建议： 必须保持密切关注，并投入资源进行前瞻性研究和实验，以在下一轮技术变革中占据先机。
    

  

### 8.3. 实践指南：编码器设置与FFmpeg工作流

  

将理论转化为实践，需要具体的工具和参数。

- x265编码器参数推荐：  
    为了在质量和效率之间取得良好平衡，针对VR内容推荐以下x265参数配置。  
    表3：推荐的VR内容x265编码器参数
    

  

|   |   |   |
|---|---|---|
|参数|推荐值|理由与应用场景|
|--preset|slow / veryslow|较慢的预设会启用更多的编码工具和更详尽的搜索，以在给定码率下实现最高质量，适用于VOD场景 82。|
|--crf|17-18|恒定码率因子（CRF）是实现恒定主观质量的最佳码率控制模式。对于H.265，17-18的范围被证实适用于Meta Quest头显，能在可接受的码率下提供良好的视觉体验 1。|
|--tune|none|默认情况下，x265已针对主观质量进行调优。除非有特定需求（如保留胶片颗粒感grain），否则无需设置 82。|
|--output-depth|10|10-bit编码能提供更平滑的色彩过渡，减少色带（banding）现象，对于色彩丰富的VR场景尤其重要 83。|
|--aq-mode|2 or 3|自适应量化（AQ）能将更多比特分配给复杂的纹理区域。模式2（自动方差）和模式3（自动方差并偏向暗场）是常用的平衡选项 83。|
|--no-sao|启用|采样自适应偏移（SAO）虽然能平滑一些编码伪影，但有时会过度模糊画面细节。对于追求锐利画质的VR内容，可以考虑禁用 83。|
|--bframes|4 to 8|B帧能显著提高压缩效率，但会增加延迟。对于VOD，可设置较高值（如8）；对于低延迟需求，需适当降低 82。|
|--ref|4 to 6|更多的参考帧能提高预测精度，但会增加内存和计算开销。4-6是质量和性能的良好折中 83。|

- 使用Kvazaar进行分块编码：  
    生成一个3x3的运动约束分块HEVC码流的典型命令如下 32：  
    Bash  
    kvazaar -i input.yuv --input-res 3840x2160 -o output.hvc --tiles 3x3 --slices tiles --mv-constraint frametilemargin --period 60 --preset veryslow --crf 18  
      
    
- FFmpeg通用VR视频处理工作流：  
    FFmpeg是处理VR视频不可或缺的瑞士军刀。
    

- 投影格式转换： 使用强大的v360滤镜可以实现不同360度投影格式之间的转换 86。例如，将EAC格式转换为ERP：  
    Bash  
    ffmpeg -i input_eac.mp4 -vf "v360=eac:equirect" output_erp.mp4  
      
    
- 立体视频格式处理： v360滤镜同样支持立体格式的转换。例如，将左右格式（SBS）转换为上下格式（TB）：  
    Bash  
    ffmpeg -i input_sbs.mp4 -vf "v360=sbs:tb" output_tb.mp4  
      
    若要将上下格式的立体视频裁剪为单视场视频（只保留上半部分）：  
    Bash  
    ffmpeg -i input_tb.mp4 -vf "crop=h=in_h/2:y=0" output_mono.mp4  
      
    
- 调用HEVC编码器： FFmpeg可以方便地调用不同的HEVC编码器。
    

- 使用软件编码器libx265，并传入x265参数：  
    Bash  
    ffmpeg -i input.mp4 -c:v libx265 -preset slow -crf 18 -x265-params "aq-mode=2" output.mp4  
      
    
- 使用NVIDIA硬件加速编码器hevc_nvenc，以实现更快的编码速度：  
    Bash  
    ffmpeg -i input.mp4 -c:v hevc_nvenc -preset slow -cq 18 output.mp4  
      
    

  

### 8.4. 结论性分析：VR视频压缩的未来轨迹

  

对前沿VR视频编码技术的深入研究揭示了一条清晰的演进路径：从通用的、基于信号保真度的压缩，不可逆转地走向更智能、更感知驱动、计算更密集的压缩模型。

未来的VR流媒体管线将不再依赖于一个单一的、万能的编解码器。取而代之的，将是一个灵活的、由AI驱动的复杂系统。这个系统能够智能地融合最优的投影几何学、精细化的视口自适应分块、基于内容显著性的比特分配，以及强大的客户端合成能力，共同在充满挑战的网络环境中，为用户打造无缝的沉浸式体验。

对于当前的技术决策者而言，最稳健的策略是：立足当下，布局未来。即刻着手构建一个基于HEVC/MV-HEVC的、模块化的、支持分块和显著性感知的流媒体架构，以满足当前的市场需求。同时，必须投入研发资源，对VVC进行原型测试和性能评估，并积极探索神经编解码器和生成式AI等前沿技术，为迎接下一场视频压缩领域的范式革命做好充分准备。

#### Works cited

1. Encoding VR and 360 Immersive Video for Meta Quest Headsets - Bitmovin, accessed July 20, 2025, [https://bitmovin.com/blog/best-encoding-settings-meta-vr-360-headsets/](https://bitmovin.com/blog/best-encoding-settings-meta-vr-360-headsets/)
    
2. Key issues and technologies for AR/VR head-mounted displays - SPIE Digital Library, accessed July 20, 2025, [https://www.spiedigitallibrary.org/conference-proceedings-of-spie/11304/1130402/Key-issues-and-technologies-for-ARVR-head-mounted-displays/10.1117/12.2551400.full](https://www.spiedigitallibrary.org/conference-proceedings-of-spie/11304/1130402/Key-issues-and-technologies-for-ARVR-head-mounted-displays/10.1117/12.2551400.full)
    
3. Virtual Reality Content Creation Technology Pawan ... - Qualcomm, accessed July 20, 2025, [https://www.qualcomm.com/media/documents/files/virtual-reality-content-creation-technology.pdf](https://www.qualcomm.com/media/documents/files/virtual-reality-content-creation-technology.pdf)
    
4. Scalable 360 Video Stream Delivery: Challenges, Solutions, and Opportunities, accessed July 20, 2025, [https://groups.cs.umass.edu/wp-content/uploads/sites/3/2019/12/Scalable-360%C2%B0-Video-Stream-Delivery-Challenges-Solutions-and-Opportunities-1.pdf](https://groups.cs.umass.edu/wp-content/uploads/sites/3/2019/12/Scalable-360%C2%B0-Video-Stream-Delivery-Challenges-Solutions-and-Opportunities-1.pdf)
    
5. (PDF) 360-Degree Video Streaming: A Survey of the State of the Art - ResearchGate, accessed July 20, 2025, [https://www.researchgate.net/publication/344837879_360-Degree_Video_Streaming_A_Survey_of_the_State_of_the_Art](https://www.researchgate.net/publication/344837879_360-Degree_Video_Streaming_A_Survey_of_the_State_of_the_Art)
    
6. Thoughts on VR Video Standards. By Casey Hancock - eevo, accessed July 20, 2025, [https://blog.eevo.com/thoughts-on-vr-video-standards-54d201c598df](https://blog.eevo.com/thoughts-on-vr-video-standards-54d201c598df)
    
7. Techniques for Improved VR Video with John Carmack | Meta Horizon OS Developers, accessed July 20, 2025, [https://developers.meta.com/horizon/blog/techniques-for-improved-vr-video-w-john-carmack/](https://developers.meta.com/horizon/blog/techniques-for-improved-vr-video-w-john-carmack/)
    
8. What is MV-HEVC (Multiview High Efficiency Video Coding)? - Visionular, accessed July 20, 2025, [https://visionular.ai/what-is-mvhevc-multiview-high-efficiency-video-coding/](https://visionular.ai/what-is-mvhevc-multiview-high-efficiency-video-coding/)
    
9. How MV-HEVC makes spatial and multiview video more efficient - Bitmovin, accessed July 20, 2025, [https://bitmovin.com/blog/mv-hevc-encoding/](https://bitmovin.com/blog/mv-hevc-encoding/)
    
10. Bringing pixels front and center in VR video - Google Blog, accessed July 20, 2025, [https://blog.google/products/google-ar-vr/bringing-pixels-front-and-center-vr-video/](https://blog.google/products/google-ar-vr/bringing-pixels-front-and-center-vr-video/)
    
11. 360 video projection - Wikipedia, accessed July 20, 2025, [https://en.wikipedia.org/wiki/360_video_projection](https://en.wikipedia.org/wiki/360_video_projection)
    
12. Learning Compressible 360deg Video Isomers - CVF Open Access, accessed July 20, 2025, [https://openaccess.thecvf.com/content_cvpr_2018/papers/Su_Learning_Compressible_360deg_CVPR_2018_paper.pdf](https://openaccess.thecvf.com/content_cvpr_2018/papers/Su_Learning_Compressible_360deg_CVPR_2018_paper.pdf)
    
13. A Survey on QoE-Oriented VR Video Streaming: Some Research Issues and Challenges - Semantic Scholar, accessed July 20, 2025, [https://pdfs.semanticscholar.org/38ac/a963cfe51c7715c9ef1a5154a1b8f7e7df34.pdf](https://pdfs.semanticscholar.org/38ac/a963cfe51c7715c9ef1a5154a1b8f7e7df34.pdf)
    
14. Quality of experience of 360 video – subjective and eye-tracking assessment of encoding and freezing distortions - DiVA portal, accessed July 20, 2025, [https://www.diva-portal.org/smash/get/diva2:1638020/FULLTEXT01.pdf](https://www.diva-portal.org/smash/get/diva2:1638020/FULLTEXT01.pdf)
    
15. (PDF) Measuring Quality of Experience for 360-degree Videos in Virtual Reality, accessed July 20, 2025, [https://www.researchgate.net/publication/339777630_Measuring_Quality_of_Experience_for_360-degree_Videos_in_Virtual_Reality](https://www.researchgate.net/publication/339777630_Measuring_Quality_of_Experience_for_360-degree_Videos_in_Virtual_Reality)
    
16. Weighted-to-Spherically-Uniform Quality Evaluation for ..., accessed July 20, 2025, [https://www.researchgate.net/publication/317988408_Weighted-to-Spherically-Uniform_Quality_Evaluation_for_Omnidirectional_Video](https://www.researchgate.net/publication/317988408_Weighted-to-Spherically-Uniform_Quality_Evaluation_for_Omnidirectional_Video)
    
17. Spherical Position Dependent Rate-Distortion Optimization for 360-degree Video Coding - APSIPA, accessed July 20, 2025, [http://www.apsipa.org/proceedings/2019/pdfs/184.pdf](http://www.apsipa.org/proceedings/2019/pdfs/184.pdf)
    
18. Image quality assessment - David's Wiki, accessed July 20, 2025, [https://wiki.davidl.me/view/Image_quality_assessment](https://wiki.davidl.me/view/Image_quality_assessment)
    
19. Participants' Quality Experiences and Behavior in 360° Videos - DiVA portal, accessed July 20, 2025, [http://www.diva-portal.org/smash/record.jsf?pid=diva2:1914876](http://www.diva-portal.org/smash/record.jsf?pid=diva2:1914876)
    
20. A survey of challenges and methods for Quality of Experience assessment of interactive VR applications - PubMed Central, accessed July 20, 2025, [https://pmc.ncbi.nlm.nih.gov/articles/PMC9051501/](https://pmc.ncbi.nlm.nih.gov/articles/PMC9051501/)
    
21. Next-generation video encoding techniques for 360 video and VR - Engineering at Meta, accessed July 20, 2025, [https://engineering.fb.com/2016/01/21/virtual-reality/next-generation-video-encoding-techniques-for-360-video-and-vr/](https://engineering.fb.com/2016/01/21/virtual-reality/next-generation-video-encoding-techniques-for-360-video-and-vr/)
    
22. Just Noticeable Difference for Large Multimodal Models - arXiv, accessed July 20, 2025, [https://arxiv.org/html/2507.00490v1](https://arxiv.org/html/2507.00490v1)
    
23. (PDF) Visual JND: A Perceptual Measurement in Video Coding - ResearchGate, accessed July 20, 2025, [https://www.researchgate.net/publication/331528775_Visual_JND_A_Perceptual_Measurement_in_Video_Coding](https://www.researchgate.net/publication/331528775_Visual_JND_A_Perceptual_Measurement_in_Video_Coding)
    
24. Perceptual HEVC/H.265 system with local just-noticeable-difference model - ResearchGate, accessed July 20, 2025, [https://www.researchgate.net/publication/309613447_Perceptual_HEVCH265_system_with_local_just-noticeable-difference_model](https://www.researchgate.net/publication/309613447_Perceptual_HEVCH265_system_with_local_just-noticeable-difference_model)
    
25. Just Noticeable Difference Model for Images with Color Sensitivity - PMC, accessed July 20, 2025, [https://pmc.ncbi.nlm.nih.gov/articles/PMC10007073/](https://pmc.ncbi.nlm.nih.gov/articles/PMC10007073/)
    
26. An HEVC-Compliant Perceptual Video Coding Scheme Based on JND Models for Variable Block-Sized Transform Kernels - Korea Advanced Institute of Science and Technology, accessed July 20, 2025, [https://pure.kaist.ac.kr/en/publications/an-hevc-compliant-perceptual-video-coding-scheme-based-on-jnd-mod](https://pure.kaist.ac.kr/en/publications/an-hevc-compliant-perceptual-video-coding-scheme-based-on-jnd-mod)
    
27. An HEVC-Compliant Perceptual Video Coding Scheme based on Just Noticeable Difference Models - CiteSeerX, accessed July 20, 2025, [https://citeseerx.ist.psu.edu/document?repid=rep1&type=pdf&doi=9e4982b916d2dc6f1da5d44b58fcfe7889030c74](https://citeseerx.ist.psu.edu/document?repid=rep1&type=pdf&doi=9e4982b916d2dc6f1da5d44b58fcfe7889030c74)
    
28. An overview of tiles in HEVC | Request PDF - ResearchGate, accessed July 20, 2025, [https://www.researchgate.net/publication/260572971_An_overview_of_tiles_in_HEVC](https://www.researchgate.net/publication/260572971_An_overview_of_tiles_in_HEVC)
    
29. Parallelization of Kvazaar HEVC Intra Encoder for Multi-core Processors - ICS-FORTH, accessed July 20, 2025, [https://users.ics.forth.gr/~karam/SiPS2015/Papers/MainConference/SiPS_2015_submission_66.pdf](https://users.ics.forth.gr/~karam/SiPS2015/Papers/MainConference/SiPS_2015_submission_66.pdf)
    
30. An Efficient Viewport-Dependent 360 VR System Based on Adaptive Tiled Streaming, accessed July 20, 2025, [https://www.techscience.com/cmc/v66n3/41069/html](https://www.techscience.com/cmc/v66n3/41069/html)
    
31. 360ProbDASH: Improving QoE of 360 Video Streaming Using Tile-based HTTP Adaptive Streaming, accessed July 20, 2025, [https://www.wict.pku.edu.cn/NetVideo/docs/20201104112437185498.pdf](https://www.wict.pku.edu.cn/NetVideo/docs/20201104112437185498.pdf)
    
32. 360 Video tiled streaming - GPAC wiki, accessed July 20, 2025, [https://wiki.gpac.io/Howtos/dash/Tiled-Streaming/](https://wiki.gpac.io/Howtos/dash/Tiled-Streaming/)
    
33. HEVC Tile based adaptation guide · gpac/gpac Wiki · GitHub, accessed July 20, 2025, [https://github.com/gpac/gpac/wiki/HEVC-Tile-based-adaptation-guide](https://github.com/gpac/gpac/wiki/HEVC-Tile-based-adaptation-guide)
    
34. Viewport-Adaptive Encoding and Streaming of 360-Degree Video for Virtual Reality Applications | Request PDF - ResearchGate, accessed July 20, 2025, [https://www.researchgate.net/publication/312568127_Viewport-Adaptive_Encoding_and_Streaming_of_360-Degree_Video_for_Virtual_Reality_Applications](https://www.researchgate.net/publication/312568127_Viewport-Adaptive_Encoding_and_Streaming_of_360-Degree_Video_for_Virtual_Reality_Applications)
    
35. Aditya Keluskar | Presentation - University College Cork, accessed July 20, 2025, [https://project.cs.ucc.ie/openday/show/418](https://project.cs.ucc.ie/openday/show/418)
    
36. Enhancing 360 Video Streaming through Salient Content in Head ..., accessed July 20, 2025, [https://pmc.ncbi.nlm.nih.gov/articles/PMC10143939/](https://pmc.ncbi.nlm.nih.gov/articles/PMC10143939/)
    
37. A Review of Deep Learning Solutions in 360° Video Streaming - ResearchGate, accessed July 20, 2025, [https://www.researchgate.net/publication/372427311_A_Review_of_Deep_Learning_Solutions_in_360_Video_Streaming](https://www.researchgate.net/publication/372427311_A_Review_of_Deep_Learning_Solutions_in_360_Video_Streaming)
    
38. Optimal Tile-Based Encoding for 360-Degree Video Streaming - ResearchGate, accessed July 20, 2025, [https://www.researchgate.net/publication/367301294_Optimal_Tile-Based_Encoding_for_360-Degree_Video_Streaming](https://www.researchgate.net/publication/367301294_Optimal_Tile-Based_Encoding_for_360-Degree_Video_Streaming)
    
39. Adaptive Streaming of 360-Degree Videos With Reinforcement Learning - CVF Open Access, accessed July 20, 2025, [https://openaccess.thecvf.com/content/WACV2021/papers/Park_Adaptive_Streaming_of_360-Degree_Videos_With_Reinforcement_Learning_WACV_2021_paper.pdf](https://openaccess.thecvf.com/content/WACV2021/papers/Park_Adaptive_Streaming_of_360-Degree_Videos_With_Reinforcement_Learning_WACV_2021_paper.pdf)
    
40. [1711.02386] Viewport-aware adaptive 360° video streaming using ..., accessed July 20, 2025, [https://ar5iv.labs.arxiv.org/html/1711.02386](https://ar5iv.labs.arxiv.org/html/1711.02386)
    
41. Visual saliency guided perceptual adaptive quantization based on HEVC intra-coding for planetary images, accessed July 20, 2025, [https://pmc.ncbi.nlm.nih.gov/articles/PMC8827453/](https://pmc.ncbi.nlm.nih.gov/articles/PMC8827453/)
    
42. Saliency-Guided Video Codec Pre-Processing - CS231n, accessed July 20, 2025, [https://cs231n.stanford.edu/reports/2022/pdfs/120.pdf](https://cs231n.stanford.edu/reports/2022/pdfs/120.pdf)
    
43. Content-aware video encoding for cloud gaming | Request PDF - ResearchGate, accessed July 20, 2025, [https://www.researchgate.net/publication/333860462_Content-aware_video_encoding_for_cloud_gaming](https://www.researchgate.net/publication/333860462_Content-aware_video_encoding_for_cloud_gaming)
    
44. SALIENCY-AWARE END-TO-END LEARNED VARIABLE-BITRATE 360-DEGREE IMAGE COMPRESSION - arXiv, accessed July 20, 2025, [https://arxiv.org/html/2402.08862v1](https://arxiv.org/html/2402.08862v1)
    
45. Real-Time Foveation Techniques for Low Bit Rate Video Coding, accessed July 20, 2025, [https://live.ece.utexas.edu/publications/2003/hrs_RTI2003_Real-TimeFoveationTechniquesForLowBitRateVideoCoding.pdf](https://live.ece.utexas.edu/publications/2003/hrs_RTI2003_Real-TimeFoveationTechniquesForLowBitRateVideoCoding.pdf)
    
46. ( ) ( ) REAL-TIME FOVEATION TECHNIQUES FOR H.263 VIDEO ENCODING IN SOFTWARE - CiteSeerX, accessed July 20, 2025, [https://citeseerx.ist.psu.edu/document?repid=rep1&type=pdf&doi=7380c2d9526f14f9a7d3b74969d8d98975454650](https://citeseerx.ist.psu.edu/document?repid=rep1&type=pdf&doi=7380c2d9526f14f9a7d3b74969d8d98975454650)
    
47. H.265 Video Compression - Synectics, accessed July 20, 2025, [https://synecticsglobal.com/resources/h-265-video-compression-tech-note](https://synecticsglobal.com/resources/h-265-video-compression-tech-note)
    
48. Quality of Experience (QoE)-Aware Fast Coding Unit Size Selection ..., accessed July 20, 2025, [https://www.mdpi.com/1999-5903/11/8/175](https://www.mdpi.com/1999-5903/11/8/175)
    
49. Multiview HEVC | Nokia - Nokia.com, accessed July 20, 2025, [https://www.nokia.com/blog/multiview-hevc-stereoscopic-video-on-steroids/](https://www.nokia.com/blog/multiview-hevc-stereoscopic-video-on-steroids/)
    
50. The Future of Video Compression: Is VVC Ready for Prime Time? - Nokia, accessed July 20, 2025, [https://www.nokia.com/blog/the-future-of-video-compression-is-vvc-ready-for-prime-time/](https://www.nokia.com/blog/the-future-of-video-compression-is-vvc-ready-for-prime-time/)
    
51. H.266 - A Guide to Versatile Video Coding - Gumlet, accessed July 20, 2025, [https://www.gumlet.com/learn/h266-codec/](https://www.gumlet.com/learn/h266-codec/)
    
52. What is Versatile Video Coding (VVC) in the H.266 Codec? - Enveu, accessed July 20, 2025, [https://www.enveu.com/blog/versatile-video-coding](https://www.enveu.com/blog/versatile-video-coding)
    
53. Versatile Video Coding - Wikipedia, accessed July 20, 2025, [https://en.wikipedia.org/wiki/Versatile_Video_Coding](https://en.wikipedia.org/wiki/Versatile_Video_Coding)
    
54. A Study on Fast and Low-Complexity Algorithms for Versatile Video Coding - PMC, accessed July 20, 2025, [https://pmc.ncbi.nlm.nih.gov/articles/PMC9692833/](https://pmc.ncbi.nlm.nih.gov/articles/PMC9692833/)
    
55. Versatile Video Coding: VVC - Spin Digital, accessed July 20, 2025, [https://spin-digital.com/technology/vvc/](https://spin-digital.com/technology/vvc/)
    
56. Towards Efficient Video Codec for 360-degree Video Streaming over Broadband Network | Request PDF - ResearchGate, accessed July 20, 2025, [https://www.researchgate.net/publication/389146725_Towards_Efficient_Video_Codec_for_360-degree_Video_Streaming_over_Broadband_Network](https://www.researchgate.net/publication/389146725_Towards_Efficient_Video_Codec_for_360-degree_Video_Streaming_over_Broadband_Network)
    
57. (PDF) VVC In-loop Filters - ResearchGate, accessed July 20, 2025, [https://www.researchgate.net/publication/350776641_VVC_In-loop_Filters](https://www.researchgate.net/publication/350776641_VVC_In-loop_Filters)
    
58. High Efficiency Video Coding - Wikipedia, accessed July 20, 2025, [https://en.wikipedia.org/wiki/High_Efficiency_Video_Coding](https://en.wikipedia.org/wiki/High_Efficiency_Video_Coding)
    
59. VVC Codec License Set Amid Widespread Adoption Concerns - The Broadcast Bridge, accessed July 20, 2025, [https://www.thebroadcastbridge.com/content/entry/18075/vvc-codec-license-set-amid-widespread-adoption-concerns](https://www.thebroadcastbridge.com/content/entry/18075/vvc-codec-license-set-amid-widespread-adoption-concerns)
    
60. HEVC/VVC License Fees - ViaLa, accessed July 20, 2025, [https://www.via-la.com/licensing-2/hevc-vvc/hevc-vvc-license-fees/](https://www.via-la.com/licensing-2/hevc-vvc/hevc-vvc-license-fees/)
    
61. HEVC/VVC - ViaLa - Via Licensing, accessed July 20, 2025, [https://www.via-la.com/licensing-2/hevc-vvc/](https://www.via-la.com/licensing-2/hevc-vvc/)
    
62. [2505.09324] Neural Video Compression using 2D Gaussian Splatting - arXiv, accessed July 20, 2025, [https://www.arxiv.org/abs/2505.09324](https://www.arxiv.org/abs/2505.09324)
    
63. A survey of learning-based end-to-end video compression - ResearchGate, accessed July 20, 2025, [https://www.researchgate.net/publication/393669815_A_survey_of_learning-based_end-to-end_video_compression](https://www.researchgate.net/publication/393669815_A_survey_of_learning-based_end-to-end_video_compression)
    
64. arXiv:2403.17879v1 [cs.CV] 26 Mar 2024, accessed July 20, 2025, [https://arxiv.org/pdf/2403.17879](https://arxiv.org/pdf/2403.17879)
    
65. Towards Practical Real-Time Neural Video Compression - arXiv, accessed July 20, 2025, [https://arxiv.org/html/2502.20762v1](https://arxiv.org/html/2502.20762v1)
    
66. [2309.11276] Towards Real-Time Neural Video Codec for Cross-Platform Application Using Calibration Information - arXiv, accessed July 20, 2025, [https://arxiv.org/abs/2309.11276](https://arxiv.org/abs/2309.11276)
    
67. Towards Practical Real-Time Neural Video Compression - CVF Open Access, accessed July 20, 2025, [https://openaccess.thecvf.com/content/CVPR2025/papers/Jia_Towards_Practical_Real-Time_Neural_Video_Compression_CVPR_2025_paper.pdf](https://openaccess.thecvf.com/content/CVPR2025/papers/Jia_Towards_Practical_Real-Time_Neural_Video_Compression_CVPR_2025_paper.pdf)
    
68. Towards Real-Time Neural Video Codec for Cross-Platform Application Using Calibration Information - ResearchGate, accessed July 20, 2025, [https://www.researchgate.net/publication/375031645_Towards_Real-Time_Neural_Video_Codec_for_Cross-Platform_Application_Using_Calibration_Information](https://www.researchgate.net/publication/375031645_Towards_Real-Time_Neural_Video_Codec_for_Cross-Platform_Application_Using_Calibration_Information)
    
69. Learning Spherical Convolution for Fast Features from 360° Imagery - NIPS, accessed July 20, 2025, [http://papers.neurips.cc/paper/6656-learning-spherical-convolution-for-fast-features-from-360-imagery.pdf](http://papers.neurips.cc/paper/6656-learning-spherical-convolution-for-fast-features-from-360-imagery.pdf)
    
70. Learning Spherical Convolution for Fast Features from 360° Imagery - NIPS, accessed July 20, 2025, [https://papers.nips.cc/paper/6656-learning-spherical-convolution-for-fast-features-from-360-imagery](https://papers.nips.cc/paper/6656-learning-spherical-convolution-for-fast-features-from-360-imagery)
    
71. Spin-Weighted Spherical CNNs - NIPS, accessed July 20, 2025, [https://papers.nips.cc/paper/2020/file/6217b2f7e4634fa665d31d3b4df81b56-Paper.pdf](https://papers.nips.cc/paper/2020/file/6217b2f7e4634fa665d31d3b4df81b56-Paper.pdf)
    
72. Clebsch–Gordan Nets: a Fully Fourier Space Spherical Convolutional Neural Network - NIPS, accessed July 20, 2025, [https://proceedings.neurips.cc/paper/8215-clebschgordan-nets-a-fully-fourier-space-spherical-convolutional-neural-network.pdf](https://proceedings.neurips.cc/paper/8215-clebschgordan-nets-a-fully-fourier-space-spherical-convolutional-neural-network.pdf)
    
73. Analysis of Neural Video Compression Networks for 360-Degree Video Coding This work was supported by the Deutsche Forschungsgemeinschaft (DFG, German Research Foundation) under project number 418866191. - arXiv, accessed July 20, 2025, [https://arxiv.org/html/2402.10257v1](https://arxiv.org/html/2402.10257v1)
    
74. Video Encoding Enhancement via Content-Aware Spatial and Temporal Super-Resolution - EURASIP, accessed July 20, 2025, [https://eurasip.org/Proceedings/Eusipco/Eusipco2024/pdfs/0000681.pdf](https://eurasip.org/Proceedings/Eusipco/Eusipco2024/pdfs/0000681.pdf)
    
75. Neural Foveated Super-Resolution for Real-time VR Rendering - 3D Virtual and Augmented Reality, accessed July 20, 2025, [https://3dvar.com/Ye2023Neural.pdf](https://3dvar.com/Ye2023Neural.pdf)
    
76. Neural Super-Resolution in Real-Time Rendering Using Auxiliary Feature Enhancement, accessed July 20, 2025, [https://www.researchgate.net/publication/370009897_Neural_Super-Resolution_in_Real-Time_Rendering_Using_Auxiliary_Feature_Enhancement](https://www.researchgate.net/publication/370009897_Neural_Super-Resolution_in_Real-Time_Rendering_Using_Auxiliary_Feature_Enhancement)
    
77. Introducing neural supersampling for real-time rendering - Meta Research - Facebook, accessed July 20, 2025, [https://research.facebook.com/blog/2020/7/introducing-neural-supersampling-for-real-time-rendering/](https://research.facebook.com/blog/2020/7/introducing-neural-supersampling-for-real-time-rendering/)
    
78. Split Rendering for VR: What does it look like - Claire Blackshaw, accessed July 20, 2025, [https://www.claire-blackshaw.com/blog/2025/03/split_render/](https://www.claire-blackshaw.com/blog/2025/03/split_render/)
    
79. Multi-access Edge Computing - Standards for MEC - ETSI, accessed July 20, 2025, [https://www.etsi.org/technologies/multi-access-edge-computing](https://www.etsi.org/technologies/multi-access-edge-computing)
    
80. [2209.05761] A Survey on Mobile Edge Computing for Video Streaming: Opportunities and Challenges - arXiv, accessed July 20, 2025, [https://arxiv.org/abs/2209.05761](https://arxiv.org/abs/2209.05761)
    
81. Towards Efficient Video Codec for 360-degree Video Streaming over Broadband Network, accessed July 20, 2025, [https://sciresol.s3.us-east-2.amazonaws.com/IJST/Articles/2025/Issue-5/IJST-2024-3964.pdf](https://sciresol.s3.us-east-2.amazonaws.com/IJST/Articles/2025/Issue-5/IJST-2024-3964.pdf)
    
82. Preset Options - x265 Documentation - Read the Docs, accessed July 20, 2025, [https://x265.readthedocs.io/en/stable/presets.html](https://x265.readthedocs.io/en/stable/presets.html)
    
83. x265 Settings - Advanced Encoding Guide - GitLab, accessed July 20, 2025, [https://silentaperture.gitlab.io/mdbook-guide/encoding/x265.html](https://silentaperture.gitlab.io/mdbook-guide/encoding/x265.html)
    
84. Understanding Rate Control Modes (x264, x265, vpx) - Werner Robitza, accessed July 20, 2025, [https://slhck.info/video/2017/03/01/rate-control.html](https://slhck.info/video/2017/03/01/rate-control.html)
    
85. Virtual Desktop Update - HEVC 10-bit support, 400 Mbps limit with H.264+ and new Passthrough environment : r/OculusQuest - Reddit, accessed July 20, 2025, [https://www.reddit.com/r/OculusQuest/comments/14jik0r/virtual_desktop_update_hevc_10bit_support_400/](https://www.reddit.com/r/OculusQuest/comments/14jik0r/virtual_desktop_update_hevc_10bit_support_400/)
    
86. Documentation - MLT, accessed July 20, 2025, [https://www.mltframework.org/plugins/FilterAvfilter-v360/](https://www.mltframework.org/plugins/FilterAvfilter-v360/)
    
87. [FFmpeg-user] multiple flat videos in a equirectangular projection - v360 filter, accessed July 20, 2025, [http://ffmpeg.org/pipermail/ffmpeg-user/2022-July/055208.html](http://ffmpeg.org/pipermail/ffmpeg-user/2022-July/055208.html)
    
88. How can I use ffmpeg to change 360 video projection? - Stack Overflow, accessed July 20, 2025, [https://stackoverflow.com/questions/35092216/how-can-i-use-ffmpeg-to-change-360-video-projection](https://stackoverflow.com/questions/35092216/how-can-i-use-ffmpeg-to-change-360-video-projection)
    
89. ffmpeg 360 Video - Convert EAC (Youtube) to Equirectangular - Super User, accessed July 20, 2025, [https://superuser.com/questions/1732396/ffmpeg-360-video-convert-eac-youtube-to-equirectangular](https://superuser.com/questions/1732396/ffmpeg-360-video-convert-eac-youtube-to-equirectangular)
    

**