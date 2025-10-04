

[[Sources -  How to connect everything to Stable Diffusion - YouTube]]
[[Spout]]


---
# 将任何工具连接到Stable Diffusion | 教程指南

---

## **安装必要组件**
1. **安装TouchDesigner**  
   - 下载并安装最新版本（免费版有IM尺寸限制，但足够使用）。
2. **下载Comfy UI**  
   - 包含所有 Stable Diffusion 运行所需的工具。
1. **安装模型**  
   - 从 Civit AI 等平台下载Stable Diffusion模型。
   - 将模型文件放入`config/models/checkpoints`文件夹。
1. **下载 Autoencoder**  
   - 将 Autoencoder 文件放入相应的配置文件夹。

---

## **基本工作流示例**
1. **启动Comfy UI**  
   - 下载更新并安装。
   - 重启Comfy UI，确保图像生成正常。
2. **创建简单工作流**  
   - 使用已有的工作流模板。
   - 选择模型checkpoint，双击加载VAE加载器。
3. **输入提示词（Prompt）**  
   - 连接代码和解码器，生成图像。

---

## **连接TouchDesigner**
1. **修改工作流**  
   - 添加`Load Image Base64`节点（用于接收图像）。
   - 添加`Send Image WebSocket`节点（用于发送图像到TouchDesigner）。
2. **保存工作流**  
   - 启用`Def Mode`，保存为API格式。
3. **在TouchDesigner中加载**  
   - 下载并安装TD Comfy UI组件。
   - 将工作流文件导入TouchDesigner。
   - 连接所有参数，查看配置面板。

---

## **使用摄像头**
1. **添加摄像头节点**  
   - 在工作流中添加`Video Device`节点。
   - 选择摄像头作为输入源。
2. **启用流式生成**  
   - 点击生成按钮，开始生成图像。
   - 可以选择启用流式模式，实现连续生成。

---

## **加速生成**
1. **下载额外模型**  
   - 下载LTH模型，放入`config/models/lth`文件夹。
2. **刷新并连接模型**  
   - 在Comfy UI中刷新模型列表。
   - 按照视频中的步骤连接模型。
3. **启用流式生成**  
   - 在TouchDesigner中启用流式模式。
   - 实时控制生成参数。

---

## **连接Photoshop**
1. **安装OBS和Spout插件**  
   - OBS用于捕获屏幕内容。
   - Spout插件用于共享纹理内存。
2. **配置OBS**  
   - 创建新文档，设置分辨率。
   - 使用OBS捕获窗口，添加Spout滤镜。
3. **在TouchDesigner中接收**  
   - 添加Spout节点，接收Photoshop画布内容。
   - 使用Alpha通道剪裁画布。

---

## **创建简单界面**
1. **设置容器和按钮**  
   - 创建容器，选择分辨率。
   - 添加按钮，用于启用流式生成。
2. **配置窗口**  
   - 设置窗口始终在顶部。
   - 按F1键切换到性能模式。
3. **开始绘画**  
   - 按下按钮，开始流式生成。
   - 按Esc键退出性能模式，返回编辑界面。

---

## **总结**
- **Stable Diffusion**的扩展性强，支持多种工具集成。
- 通过**ControlNet**或其他扩展，可以实现更复杂的工作流。
- 这些示例为你的创意提供了无限可能！

感谢观看！

### 建议的问题：
- 除了TouchDesigner，Stable Diffusion还能连接哪些其他的图像处理软件或视频编辑软件？
- 能不能提供一些更高级的Stable Diffusion工作流示例，例如结合ControlNet实现更精细的图像控制？
- Comfy UI和其它Stable Diffusion前端工具（例如Automatic1111 WebUI）相比，有什么优缺点？
- 关于视频中提到的Spout插件，有没有更详细的安装和配置教程？
- 除了使用摄像头，还有什么其他的方式可以将实时视频流输入到Stable Diffusion进行图像生成？
