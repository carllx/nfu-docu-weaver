参考 [ 🔍 google Gemini](@https://gemini.google.com/u/2/gem/3961c9fbb757/52333531cfa1e244)

# AI驱动设计自动化——Cursor与Figma的连接实践

**课程导师：** 林昕

**课程目标：** 本课程将指导学生完成一套完整的环境配置，以建立一个从AI代码编辑器（Cursor）到在线设计工具（Figma）的实时、双向通信桥梁。完成本课程后，学生将能够通过自然语言指令，在Cursor中对Figma画布进行程序化、自动化的设计操作。

**核心理论框架与关键理念：**

- **零代码AI驱动的设计自动化 (Zero-Code, AI-Driven Design Automation):** 这是本课程最激动人心的地方，也是一个融合了设计与前沿AI技术的新兴领域。其核心思想是，你**不需要学习复杂的编程语法**，而是扮演“创意总监”或“项目导演”的角色。通过语音或文字下达清晰的指令，指挥AI Agent（智能助手）为你完成从代码编写到设计执行的全部任务。这使得我们可以从零代码基础出发，直接将创意构想转化为可执行的程序，实现真正的设计自动化，搭建起从创意到技术的无缝桥梁。
    
- **模型上下文协议（MCP - Model Context Protocol）：** 这是一种允许大型语言模型（如我们使用的AI）与外部应用程序（如Figma）进行深度、结构化交互的协议。它不仅仅是简单的API调用，而是建立了一个“对话通道”，让AI能够真正“理解”并“操作”应用程序的内部状态。
    
- **Figma MCP 服务器生态 (The Figma MCP Server Ecosystem):**
    
    - **官方服务器 (Official Server):** 由Figma官方推出，旨在将设计上下文（如组件属性和代码片段）从Figma的“开发模式”无缝提供给开发者的本地IDE。它主要服务于专业和企业版用户，侧重于读取设计信息以加速开发流程。
        
    - **社区服务器 (Community Servers):**
        
        - **`GLips/Figma-Context-MCP`:** 一个轻量级、免费的替代方案。它在开发者社区中更受欢迎，因为它专注于开发流程中最常见的需求：**读取**设计师在Figma中创作的设计信息，而无需像UI/UX设计师那样进行复杂的设计操作。
            
        - **`grab/cursor-talk-to-figma-mcp` (我们本次课程使用的):** 专门为Cursor AI用户设计，实现了强大的双向通信和程序化修改功能。
            
    - **更多信息:**
        
        - 有关不同方案的详细比较，请访问 [help.figma.com](https://help.figma.com/ "null")。
            
        - 我们本次实践所使用的社区项目地址：[https://github.com/grab/cursor-talk-to-figma-mcp](https://github.com/grab/cursor-talk-to-figma-mcp "null")
            
- **关键工具介绍 (Introduction to Key Tools):**
    
    - **Visual Studio Code (VS Code) - 你的基础数字创作工作室:** 对于数字媒体专业的同学来说，VS Code就像是你们熟悉的Photoshop或Premiere，但它是为“代码创作”而生的专业工作站。**在本节入门课程中，为了简单起见，我们将主要使用VS Code，并通过安装特定的插件（扩展）来连接国内的GLM 4.5模型。**
        
        - **未来展望：** 在后续课程中，我们可能会探索在VS Code中使用更高级的插件（如RooCode），这些插件允许我们自己订阅不同AI模型的API，从而实现对AI Agents更科学、更细致的控制和管理。
            
    - **Cursor - 升级版AI工作室 (The Upgraded AI Studio):** 这是VS Code的一个“魔改版”，它深度集成了AI能力，内置了更强大的AI助手。
        
        - **优势：** 使用Cursor可以更方便地连接到国际上最顶尖、更“聪明”的AI模型，例如Claude 4 Sonnet, Gemini 2.5 Pro, 或是GPT-4.5。
            
        - **注意事项：** 连接这些高级模型通常需要**付费订阅**，并且可能需要**网络工具（翻墙）**才能稳定访问。
            
        - **实用技巧：** 对于希望尝试更强模型的同学，可以在一些平台上（如“咸鱼”）寻找价格相对便宜的共享订阅服务（例如约20元/周），通常会提供一定的免费额度，可以作为初次体验的低成本方案。
        - 智谱模型 https://bigmodel.cn/claude-code Wechat 登录, AliPay 支付
![bg fit left:50% vertical](https://i.imgur.com/1i4dzEX.webp)

            

### 冲刺一：环境准备 (The Setup Sprint)

**目标：** 在Windows系统上安装并配置所有必需的底层工具，为后续的连接建立坚实的基础。

1. **安装 Bun 运行时**
    
    - **动作：** 以 **管理员身份** 打开 Windows PowerShell。这是关键，普通模式可能会因权限不足而失败。
        
    - **命令：** 复制并执行以下命令：
        
        ```
        powershell -c "irm bun.sh/install.ps1 | iex"
        ```
        
    - **预期结果：** 脚本会自动下载并安装 Bun。安装过程可能需要一些时间，请耐心等待。
        
2. **配置系统环境变量**
    
    - **问题背景：** 直接在新的终端里输入 `bun` 命令，系统会提示“无法识别”。这是因为系统不知道 `bun.exe` 被安装在了哪里。
        
    - **动作：**
        
        1. 在Windows搜索栏中搜索 `env`，选择“编辑系统环境变量”。
            
        2. 在弹出的“系统属性”窗口中，点击“环境变量”按钮。
            
        3. 在下方的“系统变量”区域，找到并双击名为 `Path` 的变量。
            
        4. 在“编辑环境变量”窗口中，点击“新建”，然后粘贴以下路径：`C:\Users\你的用户名\.bun\bin` (请将 `你的用户名` 替换为你的实际Windows用户名)。
            
        5. 一路点击“确定”保存所有更改。
            
    - **预期结果：** `bun` 命令可以在系统的任何终端中被识别。
        
3. **验证 Bun 安装**
    
    - **动作：** **完全关闭** 之前打开的所有 PowerShell 窗口，然后 **重新打开一个新的** PowerShell 窗口。
        
    - **命令：** 输入 `bun` 并按回车。
        
    - **预期结果：** 终端不再报错，而是显示 Bun 的欢迎信息和可用的命令列表（如 `run`, `test`, `install` 等）。这证明你的环境已准备就绪。
        
4. **获取项目文件**
    
    - **动作：**
        
        - **方式一（推荐）：** 从导师处获取 `talk-to-figma-mcp-main.zip` 文件。这个版本已经为Windows环境做好了预配置。
            
        - **方式二（备用）：** 你也可以从官方 GitHub 仓库自行下载。
            
            1. 访问地址：`https://github.com/sonnylazuardi/cursor-talk-to-figma-mcp`
                
            2. 点击绿色的 "<> Code" 按钮，然后选择 "Download ZIP"。
                
    - **重要配置（仅限方式二）：** 如果你是从 GitHub 自行下载的，**必须手动修改一个文件** 才能确保在 Windows 上正常连接。
        
        - **文件路径：** 打开解压后的项目文件夹，找到 `src/socket.ts`。
            
        - **修改内容：** 在该文件中找到 `// hostname: "0.0.0.0",` 这一行，并**删除它前面的 `//`** (解除注释)。
            
        - **原因：** 导师提供的版本已经为你完成了这一步，但官方版本需要手动修改以允许来自外部的连接。
            
    - **解压文件：** 无论通过哪种方式获取，都请将 ZIP 文件解压到一个稳定的、路径不含中文的位置（例如：桌面）。
        
    - **预期结果：** 你将得到一个名为 `talk-to-figma-mcp-main` 的文件夹，其中包含了所有服务器和插件的源代码，并且已根据需要完成了关键配置。
        

### 冲刺二：搭建创意通讯桥梁 (The Connection Sprint)

**目标：** 启动一个专用的本地通讯服务，并让Figma插件成功“调频”连接上它，从而在你的AI工作室和Figma设计画布之间建立起一座实时沟通的桥梁。

1. **第一步：开启专属的“对讲机频道” (Start the WebSocket Server)**
    
    - **概念解读：** 想象一下，为了让你的AI工作室（VS Code）能和Figma实时对话，你需要一个专属的、不受干扰的通讯频道。`WebSocket` 就是这样一种技术，它能建立一条持久的、双向的“电话线”。运行下面的命令，就好比在你的电脑上开启了一台对讲机总机，并调到了一个特定的频率（端口 `3055`），然后静静地等待Figma那边的“分机”呼叫进来。
        
    - **动作：**
        
        1. 打开一个新的 PowerShell 窗口。
            
        2. 使用 `cd` 命令进入你刚刚解压的项目文件夹。例如，如果它在桌面上，命令为：
            
            ```
            cd C:\Users\你的用户名\Desktop\talk-to-figma-mcp-main
            ```
            
        3. 进入目录后，执行启动命令。
            
    - **命令：**
        
        ```
        bun socket
        ```
        
    - **关键交互：** 此时，Windows Defender 防火墙可能会弹出警告，询问是否允许此应用通讯。这等于是在问“是否允许这台对讲机总机接收信号？”。请务必勾选所有网络类型（私有、公用），并点击 **“允许访问”**。
        
    - **预期结果：** 终端会显示 `WebSocket server running on port 3055`。这表明你的“对讲机总机”已经成功开启并正在 `3055` 频道上守候。
        
2. **第二步：让Figma“调频对接” (Connect the Figma Plugin)**
    
    - **概念解读：** 现在总机已经开启，我们需要让Figma里的插件这个“分机”也调到同一个 `3055` 频道上。当我们在Figma中运行插件时，它会自动去寻找这个频道并尝试连接。连接成功后，两边就建立起了专属的通话，可以开始传递信息了。
        
    - **动作：**
        
        1. 打开 Figma 桌面应用或网页版，并登录你的账户。
            
        2. 打开任意一个设计文件。
            
        3. 在 Figma 中，通过菜单或搜索功能找到并运行 “Cursor MCP” 插件。
            
    - **预期结果（双重验证）：** 这是一个关键的验证点，你会同时在两个地方看到成功状态，证明“调频对接”成功：
        
        - **Figma 插件窗口：** 会显示 “Connected to server”。（“分机已连接上总机。”）
            
        - **PowerShell 终端窗口：** 会显示一条新的日志，提示一个客户端已连接，并生成一个唯一的 **Channel Key** (通道密钥)，例如 `channel: [随机密钥]`。（“总机确认，分机已接入，这是我们本次通话的专属加密口令。”）
            
        - **请务必复制或记下这个【通道密钥】，它是下一步让AI Agent加入这场对话的凭证。**
            

### 冲刺三：配置 AI 代理 (The Integration Sprint)

**目标：** 配置你的AI代码环境（无论是VS Code插件还是Cursor），使其能够识别并启动我们本地的 Figma MCP 服务器。

1. **打开 MCP 配置文件**
    
    - **A) 对于 VS Code (使用 CodeGeeX 插件):**
        
        1. 在 VS Code 的左侧活动栏中，点击 CodeGeeX 图标。
            
        2. **关键插曲：** 首次登录后，你可能只看到 "Ask" 模式。你需要等待 "Agent" 模式被激活（可能需要重启VS Code或稍等片刻），之后在插件面板的顶部才会出现 **MCP 设置按钮** (通常是一个齿轮或类似图标)。
            
        3. 点击这个 **MCP 设置按钮**，它会自动为你打开 `user_mcp_config.json` 文件。
            
    - **B) 对于 Cursor IDE:**
        
        1. 在你的用户目录下，手动找到 `.cursor` 文件夹。
            
        2. 用任何文本编辑器打开其中的 `user_mcp_config.json` 或 `mcp.json` 文件。
            
        3. 路径通常为: `C:\Users\你的用户名\.cursor\user_mcp_config.json`
            
2. **配置本地开发服务器**
    
    - **理论背景：** 官方配置使用 `bunx` 直接运行一个在线的NPM包。这很方便，但不利于我们进行本地开发和调试，尤其是在网络不稳定的情况下。我们将修改它，让 `bun` 直接运行我们本地的服务器脚本。
        
    - **动作：**
        
        1. 用任何文本编辑器打开 `user_mcp_config.json` 文件。
            
        2. 将文件内容修改为以下JSON结构。你需要将 `args` 中的文件路径替换为你自己电脑上 `server.ts` 文件的 **绝对路径**。
            
            - 你可以在 `talk-to-figma-mcp-main` 文件夹中找到 `src\talk_to_figma_mcp\server.ts`，然后右键复制其完整路径。
                
    - **JSON 配置模板：**
        
        ```
        {
          "mcpServers": {
            "TalkToFigma": {
              "command": "bun",
              "args": [
                "C:\\Users\\你的用户名\\Desktop\\talk-to-figma-mcp-main\\src\\talk_to_figma_mcp\\server.ts"
              ]
            }
          }
        }
        ```
        
    - **重要提示：** JSON中的文件路径需要使用双反斜杠 `\\` 来转义。请确保你的路径格式正确。
        
3. **激活与验证**
    
    - **动作：** 保存 `user_mcp_config.json` 文件，然后 **完全退出并重启 VS Code / Cursor**。
        
    - **预期结果：** 在Cursor的MCP或Agent管理界面，你会看到 "TalkToFigma" 服务显示为已激活或绿灯状态。这证明Cursor已成功加载并运行了你的本地服务器脚本。
        

### 冲刺四：首次交互与验证 (The Demo Sprint)

**目标：** 完成端到端的验证，通过在Cursor中输入自然语言，成功在Figma中创建一个设计元素。

1. **加入通信通道**
    
    - **动作：** 在Cursor的AI聊天窗口中，发送你的第一个指令，用你在冲刺二中获得的 **Channel Key** 替换 `[你的通道密钥]`。
        
    - **命令：**
        
        ```
        @TalkToFigma join_channel [你的通道密钥]
        ```
        
    - **预期结果：** AI会确认已加入通道。现在，Cursor 和你的 Figma 文件已经准备好进行对话了。
        
2. **执行设计指令**
    
    - **动作：** 在同一个聊天窗口中，输入一个创造性的设计指令。
        
    - **命令示例：**
        
        ```
        @TalkToFigma create a responsive navigation bar with a logo placeholder and three menu items: Home, About, Contact.
        ```
        
        或者中文：
        
        ```
        @TalkToFigma 创建一个导航栏
        ```
        
    - **关键交互：** Cursor 在执行前会弹出一个确认框，展示它将要执行的工具和参数。点击“同意”或“Allow”。
        
    - **最终预期结果：** 切换到你的Figma窗口，你会看到一个全新的导航栏组件被自动创建在了画布上。
        

**恭喜！** 你已经成功地搭建了从代码到设计的自动化桥梁。这套流程不仅可以用于执行简单的指令，更是进行复杂设计脚本开发、批量修改、和实现“设计即代码”理念的基础。鼓励你继续探索官方文档中列出的其他 `MCP Tools`，尝试更多富有创造力的自动化设计任务。

## 低保真实践
### Create LowFi

```
talk to figma , join j4dsizbm. 用中文交流  
# Role and Goal  
  
You are an expert UX/UI designer acting as a Figma automation assistant. Your task is to create a set of strictly low-fidelity wireframes for a 4-page website based on the detailed specifications below.  
  
# Core Principles & Constraints  
  
1. **Low-Fidelity First**: This is a wireframing exercise. Do NOT use any color, images, or detailed icons. Use only black lines (#000000), white backgrounds (#FFFFFF), and grey text (#888888 for placeholders, #333333 for titles).  
2. **Structure with Frames**: Each page MUST be a separate Figma Frame. Name each Frame clearly according to its title.  
3. **Layout with Lines**: Use lines and rectangles with strokes (outlines) instead of filled shapes wherever possible to represent content blocks, buttons, and image placeholders. An image placeholder should be a rectangle with a cross (X) inside.  
4. **Text Placeholders**: Use placeholder text like "[Lorem Ipsum...]" for paragraphs, "[Event Title]" for titles, and "[Button Text]" for buttons.  
5. **Simplicity is Key**: The final output must be clean, simple, and focus exclusively on layout, hierarchy, and information architecture.  
  
---  
  
# Wireframe Creation: Version A (Rational & Functional)  
  
## Page 1: Homepage (Frame Name: A-Homepage)  
  
1. Create a new Frame named "A-Homepage".  
2. **Header**: At the top, create a horizontal navigation bar containing:  
* A text element on the left: "[Club Logo]".  
* Four text links on the right: "Home", "Events", "Sponsors", "About Us".  
3. **Hero Section**: Below the header, create a large rectangle with a cross inside to represent a hero image.  
4. **Content Section**: Below the hero image, add a title text: "Upcoming Events".  
5. **Event List**: Under the title, create three simple text rows. Each row should contain: "[Date] - [Event Name] at [Location]".  
6. **Footer**: At the bottom, create a line for separation and add a text element: "© 2025 Canton Pillow Fighting Club".  
  
## Page 2: Events (Frame Name: A-Events)  
  
1. Create a new Frame named "A-Events".  
2. **Header**: Replicate the header from the Homepage.  
3. **Page Title**: Add a large title text: "Events".  
4. **Upcoming Events Section**:  
* Add a subtitle text: "Future Events".  
* Below it, create a list of 5 text rows, each with "[Date] - [Event Name] at [Location]".  
5. **Past Events Section**:  
* Add a subtitle text: "Past Events".  
* Below it, create a list of 5 text rows, each with "[Date] - [Event Name]".  
6. **Footer**: Replicate the footer from the Homepage.  
  
## Page 3: Sponsors (Frame Name: A-Sponsors)  
  
1. Create a new Frame named "A-Sponsors".  
2. **Header**: Replicate the header from the Homepage.  
3. **Page Title**: Add a large title text: "Our Sponsors".  
4. **Sponsor Grid**: Create a 3x3 grid of medium-sized rectangles. Each rectangle should have a cross inside to represent a sponsor logo.  
5. **Footer**: Replicate the footer from the Homepage.  
  
## Page 4: About Us (Frame Name: A-About-Us)  
  
1. Create a new Frame named "A-About-Us".  
2. **Header**: Replicate the header from the Homepage.  
3. **Page Title**: Add a large title text: "About Us".  
4. **Content Block**: Create a large text block with placeholder text "[Lorem ipsum dolor sit amet...]".  
5. **Footer**: Replicate the footer from the Homepage.  
  
---  
  
# Wireframe Creation: Version B (Creative & Emotional)  
  
## Page 1: Homepage (Frame Name: B-Homepage)  
  
1. Create a new Frame named "B-Homepage".  
2. **Header**: At the top, create a horizontal navigation bar containing:  
* A text element on the left: "[Club Logo]".  
* Four text links on the right: "Home", "Soft Parties", "Warm Partners", "Our Agreement".  
3. **Hero Section**:  
* Create a large text element in the center: "Rediscover Soft Moments".  
* Below it, add a smaller sub-headline: "Join our next warm party".  
4. **Featured Event CTA**:  
* Create a prominent outlined rectangle (representing a card) below the hero text.  
* Inside the card, add:  
* A small rectangle with a cross for an image.  
* A title text: "[Next Party: The Marshmallow Melee]".  
* A text line for details: "[Date] at [Location]".  
* An outlined button at the bottom with text: "Reserve Your Soft Seat".  
5. **Footer**: At the bottom, add text elements for "Follow Us" and social media placeholders.  
  
## Page 2: Soft Parties (Frame Name: B-Soft-Parties)  
  
1. Create a new Frame named "B-Soft-Parties".  
2. **Header**: Replicate the header from Version B.  
3. **Page Title**: Add a large title text: "Happy Hours".  
4. **Tabs**: Create two text elements side-by-side that act as tabs: "Upcoming Parties" and "Warm Memories". Underline "Upcoming Parties" to show it's active.  
5. **Upcoming Parties Section**:  
* Create a vertical layout of 3 outlined cards.  
* Each card should contain: a small image placeholder (rectangle with X), a title "[Event Title]", details "[Date] & [Location]", and an outlined button "Learn More".  
6. **Footer**: Replicate the footer from Version B.  
  
## Page 3: Warm Partners (Frame Name: B-Warm-Partners)  
  
1. Create a new Frame named "B-Warm-Partners".  
2. **Header**: Replicate the header from Version B.  
3. **Page Title**: Add a large title text: "Our Warm Partners".  
4. **Intro Text**: Add a small paragraph of placeholder text starting with "Thanks to these partners...".  
5. **Partner Grid**: Create a 3x2 grid of outlined rectangles. Inside each, place a smaller rectangle with a cross (logo placeholder) and a text element below it for "[Partner Name]".  
6. **Footer**: Replicate the footer from Version B.  
  
## Page 4: Our Agreement (Frame Name: B-Our-Agreement)  
  
1. Create a new Frame named "B-Our-Agreement".  
2. **Header**: Replicate the header from Version B.  
3. **Page Title**: Add a large title text: "The Soft Pact".  
4. **Content Sections**: Create three distinct sections using subtitles and text blocks:  
* **Subtitle 1**: "Our Rules of Engagement" followed by a short, numbered list of placeholder text.  
* **Subtitle 2**: "Why Softness Matters" followed by a block of placeholder text.  
* **Subtitle 3**: "Join the Fray" followed by a simple outlined rectangle representing a contact form with fields for "Name" and "Email".  
6. **Footer**: Replicate the footer from Version B.  
  
设计的项目语言为中文, outline 创建的组件元素对象组件需要命名(英文)

```


### Task Flow

```
create two Task Flow diagrams in Figma with Chinese text and English component names. Let me start by connecting to the specified Figma channel and then create the diagrams.
```


