源文件提供了关于如何将 AIGC（AI 生成内容）集成到 TouchDesigner 中的信息，TouchDesigner 是一个用于创建实时视觉效果和交互式装置的平台。

要理解 TouchDesigner 如何集成 AIGC，需要了解以下几个关键概念：

- **AIGC 的本质**。AIGC 是一种使用人工智能生成内容的方法，例如图像，文本等 [1, 2]。
- **TouchDesigner 的角色**。TouchDesigner 作为一个整合平台，可以通过其不断进化的 API 接口将各种独立的 AI 工具连接起来，实现协同作业，并在创作上赋予设计师和艺术家以可控的灵感 [1]。
- **可控性和参数化**。AI 的不确定性和发散性与 TouchDesigner 的参数化的确定性特点相互补充，使得创作灵感可以自由奔放，同时达到应用层面应有的可控性 [1, 3]。

### 如何在 TouchDesigner 中集成 AIGC

以下是从源文件中提取的关于如何在 TouchDesigner 中集成 AIGC 的步骤和方法：

1. **建立 TouchDesigner 与 Stable Diffusion 的通讯**

- 使用 SD_TD API 以 API 的方式调用 Stable Diffusion WebUI 插件 [4]。SD_TD API.tox 是一个 TouchDesigner 插件，它提供利用 API 控制 stable-diffusion-WebUI 的途径 [4].
- SD 启动器可以自动部署 SD 程序及其所需的系统环境。它还内置了由 AUTOMATIC1111 在 github 上分享的 stable-diffusion-WebUI 插件，允许通过本地网页界面来管理 SD，同时建立 SD 与 TouchDesigner 通讯的接口任务 [5]。

2. **图像生成模式**

- SD 主要有“文生图”和“图生图”两种图片生成模式。以“图生图”为例，可以将计算机中的一张图片传输给 SD，并提供相应的提示词，以启动该模式 [4]。TouchDesigner 具有强大的实时互动和编程功能，同时可以方便地连接各种外设，因此可以通过建立 TouchDesigner 与 SD 的通讯，扩展 Al 绘图工具的趣味性和应用场景 [4]。

3. **参数设置**

- 在 SD 中，Prompt（提示词）用于指导模型生成图像的文本输入，可以包含主体、风格、色彩、质量要求等 [4]。
- Denoising strength 控制原图上添加噪点的程度，即控制 Al 对输入图像的参考程度。噪点强度越高，AI 创作空间就越大，出图也就与输入图像越不同 [6]。
- CFG Scale 控制 Prompt（提示词）对生成图像的影响程度，即该参数越大，生成的图像与文本提示的相关性越高，但可能会失真；该参数越小，提示词与生成图像的相关性越小，AI 发挥空间越大。一般设置范围在 4~15 [6]。
- Sampler(采样方式）可以设置不同的采样器。采样器决定了如何进行随机采样，不同的采样器会对结果产生不同影响；通过重复进行随机采样和去噪，最终生成完整图片 [6]。

4. **通讯的应用**

- TouchDesigner 就像一个神经中枢，可以控制所有不同软件的联动，集成各软件之长，使它们在不同的领域内发挥出最大的能力 [7]。TouchDesigner 与 Notch 的通讯功能常应用于大型舞台演出的实时视觉艺术以及交互艺术展览展示之中，通过将 Notch 超凡的高精度实时渲染视觉效果集成在 TouchDesigner 的总控交互系统里，可以很好地完成精致的视觉表现且大体量的交互艺术作品和项目 [7]。

### TouchDesigner 的其他相关信息

其他可能与集成 AIGC 相关的信息包括：

- **DAT 元件**。DAT 元件提供了对文件夹系统与表单系统的检索和导入／导出方法。利用 Table DAT（表单）、File In DAT（导入文件）、Folder DAT（导入文件夹）等元件可以很快地在 TouchDesigner 中动态地检索本地所有文件，同时进行文件的动态存储与读写操作 [8]。
- **COMP 类型元件**。COMP（Component Operator）是一系列“容器”元件，是在所有元件类型中唯一一种内部可以放入其他类型元件的元件 [8]。
- **网络社群教育**。TEA Community 作为 TouchDesigner 官方指定的全球教育合作伙伴，运营 TouchDesigner 中文社区，提供从初级至各类实战级别的视频教程，以及 TouchDesginer 中文书籍、海外书籍翻译和相关外网资源链接 [9]。

## [[TouchDesigner 集成 ComfyUI]]