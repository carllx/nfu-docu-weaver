/**

This Project is fouces on developing a AI assistant for Research and Writing on MacOS.
Currently, can only be used in Obsidian.
It achived by GPT-4 with MaxAI and and reailzed by Obsidian Plugins like Customjs and Commandar.
It can translate, explain, improve, and ask AI to edit or generate on Obsidian.

Future versions might consider expanding the functionality to apply system-wide rather than being restricted to operation within Obsidian. This would entail monitoring the clipboard content from all active applications using Osascript in the Alfred workflow, as well as invoking Mac OS's Modality feature.

The upcoming tasks will focus on exploring the Alfred workflow and Osascript capabilities:

- [ ] Additional capabilities: [[How to read the clipboard of all applications currently running via Osascript]] 
- [ ] Additional capabilities: [[How to executing operations within any active application using Osascript]]. 
- [ ] Additional capabilities: [[How to display elements using Mac OS's Modality via Osascript]]

*/

class GPT {
  constructor() {
    this.isStream = false;
    this.provider = { label: "GPT-4o", segment: null }; // Available models: claude, gemini, chatgpt
    this.tone = { label: "None", segment: null };
    this.format = { label: "None", segment: null };
    this.language = {
      label: "Chinese",
      segment: GPT.LANGUAGE["Chinese"].segment
    }; // Output // "AUTO", "English (US)"// Simplified Chinese
    this.prompt = {
      label: "Improve",
      segment: null,
    };

    // UI components
    this.Toolbar = null; // Main toolbar interface
    this.lucide = null; // Icon library instance
    this.askArea = null; // Custom prompt input area

    // Application state
    this.contentSelection = null; // Currently selected text
    this.askTexts = ""; // User input for custom prompts
    this.activeLeaf = null; // Current active leaf container

    // Active view settings
    this.onLeaf = "markdown"; // Current view type (markdown/canvas/mindmap)

    // Request API
    this.accessToken =
      "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWJqZWN0Ijp7InVzZXJfaWQiOiI5MTQ3ZmZiMS0wMzhkLTQ4YTMtYWEzNS01YTc2NWVmZjliZTcifSwidHlwZSI6ImFjY2VzcyIsImV4cCI6MTczODMwNzExMSwiaWF0IjoxNzM4MjIwNzExLCJqdGkiOiIwYTY1MjIzNi1lYmMwLTQyZDUtODE0OS1kYjAxMzg0NzAzNWIifQ.WJ8Ux-vHwF5AFYtgPcwcu5uhKwcbPa_tieemYRHMPDk";
    this.USER_ID_KEY =
      "ec3962d352124dff01cd742bb0e1dc22a10c44bb60fdc9ee961f987d";
    this.sm3SignKey =
      "8e0c9f773b4f787f8e797853045de25fa3e4114da62f2939e3b49b71";
    this.TIME_DIFF = "-0";
    this.baseUrl = "https://api.maxai.me";
    this.APP_VERSION = "webpage_6.3.0";
    this.APP_ENV = "MaxAI-Browser-Extension";
    this.DEVICE_ID = "560d62aa-13bf-4311-8fbc-1cb2f5b98903";
    this.SM3_SIGN_KEY =
      "8e0c9f773b4f787f8e797853045de25fa3e4114da62f2939e3b49b71";
    this.USER_AGENT =
      "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/131.0.0.0 Safari/537.36";
    this.requestTimeout = 90000; // 30 seconds
    this.conversationId = "08a0647b-12d1-4aef-acdd-e3b69fa2a116";

    // Initialize application
    this.InitializedScripts(); // Load required external scripts
    this.Toolbar = this._createToolbar(); // Setup UI components
    this.cleanOutput = `Output the answer without additional context, explanation, or extra wording, just the improved text itself. `;
    // View-specific handlers for different Obsidian leaf types
    this.Leafs = {
      markdown: {
        name: "cmEditor",
        getContentSelection: function () {
          return app.workspace.activeLeaf.view.sourceMode.cmEditor.getSelection();
        },
        getCursorPosition: function () {
          const selection = document.getSelection();
          const anchorOffset = selection.anchorOffset;
          const focusOffset = selection.focusOffset;

          if (selection.rangeCount > 0) {
            const range = selection.getRangeAt(0);
            const rect = range.getBoundingClientRect();

            return {
              top: rect.top + window.scrollY,
              left: rect.left + window.scrollX,
              width: rect.width,
              height: rect.height,
              offsetStart: anchorOffset,
              offsetEnd: focusOffset,
            };
          }
          return null; // Return null if no selection exists
        },
        printResult: function (resp, isStream = false) {
          const editor = app.workspace.activeLeaf.view.sourceMode.cmEditor;
          const cursor = editor.getCursor();

          // Process text based on stream type
          let processedText = '';
          
          if (isStream) {
            // Handle streaming response
            processedText = this.processStreamResponse(resp);
          } else {
            // Handle regular JSON response
            processedText = resp.text;
          }

          // Process escape sequences
          processedText = processedText
            .replace(/\\n\\n/g, "\n")
            .replace(/\\"/g, '"')
            .replace(/\\t"/g, "\t");

          // Insert text at next line with proper spacing
          cursor.line += 1;
          cursor.ch = 0;
          editor.replaceRange(`\n${processedText}\n`, cursor);
        },
        processStreamResponse: function(response) {
          try {
            // Split response into lines and process each chunk
            const paragraphs = response.split("\n\n").map(line => {
              // Remove 'data: ' prefix and trim
              const data = line.slice(5).trim();
              if (!data) return '';
              
              // Parse JSON and extract text
              try {
                const jsonData = JSON.parse(data);
                return jsonData.text;
              } catch (e) {
                console.warn('Failed to parse JSON chunk:', e);
                return '';
              }
            });

            // Join all valid text chunks
            return paragraphs.join('');
            
          } catch (error) {
            console.error('Error processing stream response:', error);
            return '';
          }
        },
      },

      mindmapview: {
        name: "markmind",
        getContentSelection: function () {
          // Get text from selected mindmap node
          return app.workspace.activeLeaf.containerEl
            .querySelector(".mm-node-select")
            ?.getText();
        },
      },

      canvas: {
        name: "Canvas",
        getContentSelection: function () {
          const selectedElements =
            app.workspace.activeLeaf.containerEl.querySelectorAll(
              ".is-selected"
            );
          // Convert NodeList to array and extract text content
          const texts = Array.from(selectedElements).map(
            (element) => element.textContent
          );
          return texts.join("\n");
        },
        getCursorPosition: function () {
          // Get first selected element from canvas
          const selectedElement = [
            ...app.workspace.activeLeaf.view.canvas.selection,
          ][0];
          // Return fixed position for canvas elements
          return {
            top: 250,
            left: 250,
            width: 200,
            height: 200,
          };
        },
        printResult: function (text) {
          // Process escape sequences in the text
          const processedText = text
            .replace(/\\n/g, "\n")
            .replace(/\\"/g, '"')
            .replace(/\\t"/g, "\t");

          // Create new canvas node with processed text
          const newNode = app.workspace.activeLeaf.view.canvas.createTextNode({
            text: processedText,
            pos: { x: 200, y: 200 },
            position: "left",
            size: { height: 100, width: 200 },
            focus: true,
          });

          // Set node color
          newNode.setColor("#b05279");
        },
      },
    };
  }

  // PROVIDER constant
  static PROVIDER = {
    Main: {
      icon: "bot",
      label: "BOT",
      prop: "provider",
      default: "GPT-4o",
      isActive: false,
    },
    "GPT-4o": {
      icon: "loader-pinwheel",
      segment: "gpt-4o",
      label: "GPT-4o",
    },
    "Claude3.5": {
      icon: "cannabis",
      segment: "claude-3-5-sonnet",
      label: "Claude3.5",
    },
    "Gemini1.5": {
      icon: "sparkles",
      segment: "gemini-1.5-pro",
      label: "Gemini1.5",
    },
    "o1-mini": {
      icon: "turtle",
      segment: "o1-mini",
      label: "o1-mini", 
    },
    "Gemini-flash": {
      icon: "zap",
      segment: "gemini-flash-1.5",
      label: "Gemini-flash",
    },
    "Deepseek-R1": {
      icon: "waves",
      segment: "deepseek-r1",
      label: "Deepseek-R1",
    },
  };
  // 语言配置
  static LANGUAGE = {
    Main: {
      icon: "languages",
      label: "LANGUAGE",
      prop: "language",
      default: "Chinese",
      isActive: false,
    },
    Chinese: {
      label: "Simplified Chinese",
      segment: "Please write in Simplified Chinese. Preserve all special and personal names in English.",
      icon: "amphora",
    },
    English: {
      label: "English (US)",
      segment: "Please write in English.",
      icon: "origami",
    }
  };
  static FORMAT = {
    // Split button configuration
    // Main button default state
    Main: {
      icon: "file-type-2",
      label: "FORMAT",
      prop: "format",
      default: "None",
      isActive: false,
    },
    None: {
      label: "None",
      segment: "",
      icon: "circle-slash",
    },
    Markdown: {
      label: "Markdown",
      segment:
        "Format the output as clean Markdown. Use proper headings (#, ##, ###), lists (-, 1.), code blocks (```), and emphasis (*bold*, _italic_) where appropriate. Ensure consistent spacing and proper nesting of elements.",
      icon: "hash",
    },
    PPT: {
      label: "PPT",
      segment:
        "Format the output as a presentation outline. Use clear hierarchical structure with main points and sub-points. Each slide should be concise and focused on one key idea. Include slide titles and bullet points.",
      icon: "projector",
    },
    Mermaid: {
      label: "Mermaid",
      icon: "git-fork",
      segment: `As a diagram expert, convert the content into a Mermaid diagram by:
1. Analyzing the content's core structure and relationships
2. Selecting the most appropriate diagram type:
   - Flowchart for processes and workflows
   - Sequence diagram for interactions
   - Mind map for hierarchical concepts
   - State diagram for system states
   - Class diagram for object relationships
   - Timeline for chronological events
   - Gantt for project planning
3. Creating the diagram with:
   - Clear node labels and descriptions
   - Logical relationship connections
   - Proper hierarchy and grouping
   - Consistent styling
4. Wrapping the code in \`\`\`mermaid tags

The content to visualize is: """{{TEXT}}"""
{{TONE}}
{{LANGUAGE}}`,
    },
  };
  static TONE = {
    Main: {
      icon: "chef-hat",
      label: "TONE",
      prop: "tone",
      default: "None",
      isActive: false, // 标识这是静态模板
    },
    None: {
      label: "None",
      segment:
        "Keep your tone balanced, not too casual or too formal, to match what the text is meant to do.",
      icon: "circle-slash",
    },
    Professional: {
      label: "Professional",
      segment:
        "Write in a formal, authoritative tone suitable for business or academic contexts. Use precise language and maintain objectivity.",
      icon: "graduation-cap",
    },
    Friendly: {
      label: "Friendly",
      segment:
        "Write in a warm, approachable tone that builds rapport. Use conversational language while remaining respectful.",
      icon: "smile",
    },
    Straightforward: {
      label: "Straightforward",
      segment:
        "Write in a clear, direct tone that gets straight to the point. Avoid unnecessary elaboration or complex phrasing.",
      icon: "door-open",
    },
    Confident: {
      label: "Confident",
      segment:
        "Write with authority and conviction. Use decisive language that demonstrates expertise while avoiding arrogance.",
      icon: "shield-check",
    },
    Casual: {
      label: "Casual",
      segment:
        "Write in a relaxed, informal tone. Use everyday language and a conversational style while maintaining clarity.",
      icon: "coffee",
    },
  };

  static TRANSLATE = {
    Main: {
      icon: "languages",
      label: "TRANSLATE",
      prop: "translate",
      default: "Chinese",
      isActive: true,
    },
    Chinese: {
      label: "Simplified Chinese",
      icon: "amphora",
      segment: `
You are proficient in every language, possessing superior translation skills.
Your task is to translate the following text into "Simplified Chinese". 
Keep the meaning the same. 
Preserve all special and personal names , key terms and significant terms, include both their English and Chinese in translations(es.English(中文)).
If possible, retain the structure of the paragraphs.
{{TONE}}
{{FORMAT}}
{{LANGUAGE}}
The text is:"""{{TEXT}}"""`,
    },
    English: {
      label: "English (US)",
      icon: "origami",
      segment: `
You are proficient in every language, possessing superior translation skills.
Your task is to translate the following text into "English". 
Keep the meaning the same. 
If possible, retain the structure of the paragraphs.
{{TONE}}
{{FORMAT}}
{{LANGUAGE}}
The text is:"""{{TEXT}}"""`,
    },
  };
  // 提示模板配置
  static WRITTER = {
    Main: {
      icon: "pencil-line",
      label: "WRITTER",
      prop: "writter",
      default: "Improve",
      isActive: true,
    },
    Improve: {
      label: "Improve",
      icon: "wand-sparkles",
      segment: `
I know you can be like our human linguist that can read and write properly and fluently. 
Your task is to write a better version of the following text delimited by triple backticks.
Your task means making the text clearer, easier to understand, and well put together, by correcting grammar, spelling, choosing the most suitable punctuation marks, selecting the best tone and style based on the topic and purpose of the text.
Avoid ones that are too hard or confusing. 
Write the text like a real person would. 
If a word, phrase, or part of the text is already clear and effective, leave it as it is, unchanged.
Keep the meaning the same. 
Ensure the re-written text's word count is near to the original text.
Output the answer without additional context, explanation, or extra wording, just the improved text itself. 
{{TONE}}
{{LANGUAGE}}
{{FORMAT}}
Text:"""{{TEXT}}"""`,
    },
    Shorter: {
      label: "Shorter",
      icon: "clock",
      segment: `Please rewrite the following text sample to be more clear. Use the following guidance:
Please make sure that you reuse at least 60% of the words in the sample text.
Make sure that your rewrite has at least 60% of the number of words as the sample text.
Make sure that the total number of sentences in the rewrite at least matches the number of sentences in the sample text.
For each sentence, calculate the number of stress points. Make sure that the standard deviation of the number of stress points in each sentence is within 25% of each other for both the rewrite and the original.
{{TONE}}
{{LANGUAGE}}
{{FORMAT}}
Text:"""{{TEXT}}"""`,
    },
  };

  static IDEA = {
    Main: {
      icon: "lightbulb",
      label: "IDEA",
      prop: "idea",
      default: "Fable",
      isActive: true,
    },
    Fable: {
      label: "Fable",
      icon: "flower",
      segment: `
Imagine you are a writer and poet, the sun of world youth literature, because you inspire young people's curiosity with creative stories. You can describe tedious academic concepts in a vivid and imaginative way, making them light and interesting. Your language can give a sense of life to inanimate objects. For example, even when you explain complex quantum mechanics concepts, you can liken them to different game rules or various phenomena in life. 
Your goal is to make theories relevant and attractive, like a wonderful fable.
Your task is to restructure a thought-provoking story the given content using your own talent and thought process.
Make the it concise, and keep it under 200 words if possible.
Output the answer without extra wording, just the answer itself. 
Text:"""{{TEXT}}"""
{{TONE}}
{{LANGUAGE}}
{{FORMAT}}
`,
    },
    Symbolon: {
      label: "Symbolon",
      icon: "sun",
      segment: `发现富有象征意义的元素，
重新提出一个更富有当代艺术的观念性的创意性表达， 能够使观众产生深刻的共鸣和未来的思考。
考虑未来的艺术趋势、社会议题以及观众的心理需求，确保你的创意既有深度又具有感染力。
最后，请根据你的构思编写一段简洁而富有表现力的艺术说明文，能够吸引人们的注意并激发讨论。
Text:"""{{TEXT}}"""
{{TONE}}
{{LANGUAGE}}
{{FORMAT}}
{{cleanOutput}}
`,
    },
    Explain: {
      label: "Explain",
      icon: "baby",
      segment: `I know you can be like a knowledgeable human that understands everything. 
Your task is to explain the following text delimited by triple backticks in a very easy-to-understand way. 
I want you to pretend to explain the text to a middle school student who has no background knowledge or professional knowledge about the text. 
You need to output the highest quality explanation possible, including examples and analogies if necessary or helpful.
Choose simple words and phrases to explain. Avoid ones that are too hard or confusing. Write the text like a real person would. 
Keep your tone balanced, not too casual or too formal.

Make the explanation concise, and keep it under 200 words if possible.
Output the answer without extra wording, just the explanation itself. 
Text:"""{{TEXT}}"""
{{TONE}}
{{LANGUAGE}}
{{FORMAT}}
`,
    },
    Action: {
      label: "Action",
      icon: "arrow-down-0-1",
      segment: `I know you can be like a knowledgeable human that can thoroughly understand any text and distill all crucial tasks embedded within it. Your task is to carefully review the following text delimited by triple backticks and extract all action items from it for the reader.
Identify only the action items that need the reader to take action, and exclude action items requiring action from anyone other than the reader.
Output the action items in bulletpoints, and pick a good matching emoji for every bullet point in markdown. Retain English command names, es: "\`File > Save all\`" to indicate command paths in Action Items.
Use the following format:
### Action Items
<list of action items>
Text:
"""{{TEXT}}"""
{{TONE}}
{{LANGUAGE}}
{{FORMAT}}
{{cleanOutput}}
`,
    },
    ScholarIdeas: {
      label: "ScholarIdeas",
      icon: "graduation-cap",
      segment: `Imagine you're a humanities scholar with an unconventional perspective. 
      Your ideas and actions often surprise people, challenging norms and breaking through deadlocks. 
      Your solutions to problems are often met with awe and admiration. 
      Propose 5 unexpectedly interesting hypotheses related to the humanities from this viewpoint from the following content:
      """{{TEXT}}"""
      {{TONE}}
      {{LANGUAGE}}
      {{FORMAT}}
      {{cleanOutput}}`,
    },
  };

  generateConversationId() {
    return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function(c) {
      const r = Math.random() * 16 | 0;
      const v = c === 'x' ? r : (r & 0x3 | 0x8);
      return v.toString(16);
    });
  }
  // 模板替换辅助函数
  _replacePromptVariables(template) {
    if (!template) {
      console.error("Template is undefined");
      return "";
    }

    let result = template;
    let previousResult;
    
    // 循环替换直到没有更多变化
    do {
      previousResult = result;
      result = result.replace(/\{\{(\w+)\}\}/g, (match, variable) => {
        switch (variable.toLowerCase()) {
          case "tone":
            return this.tone?.segment || "";
          case "format":
            return this.format?.segment || "";
          case "text":
            return this.contentSelection || "";
          case "language":
            return this.language?.segment || "";
          case "cleanoutput":
            return this.cleanOutput || "";
          default:
            console.warn(
              `No replacement found for template variable: ${variable}`
            );
            return match; // 如果没有匹配的替换规则，保持原样
        }
      });
    } while (result !== previousResult); // 当没有更多替换发生时停止

    return result;
  }
  // 构建一个通用的专门处理静态模板设置(如TONE)的函数
  _handleStaticTemplate(buttonType, buttonKey) {
    const config = this.constructor[buttonType];
    const prop = config.Main?.prop?.toLowerCase();

    if (!prop || !config[buttonKey]) {
      console.error(`Invalid configuration: ${buttonType}.${buttonKey}`);
      return;
    }

    this[prop] = {
      label: config[buttonKey].label,
      segment: config[buttonKey].segment,
    };

    console.log(`[${buttonType}] ${prop}: ${JSON.stringify(this[prop])}`);
  }
  // 通用的处理模板函数
  async _handleActiveTemplate(buttonType, buttonKey) {
    const config = this.constructor[buttonType]?.[buttonKey];

    if (!config?.label || !config?.segment) {
      console.error(`Invalid configuration: ${buttonType}.${buttonKey}`);
      return;
    }

    // 设置提示模板
    this.prompt = {
      label: config.label,
      segment: this._replacePromptVariables(config.segment),
    };

    console.log(`[调试日志][${buttonType}] ${buttonKey}:`, this.prompt);

    try {
      // 创建通知
      const notice = new Notice(
        `[${this.provider.label}] ${this.prompt.label} in *${this.language.label}*`,
        0
      );

      // 发送请求
      this.response = await this.chat({
        conversationId: this.conversationId,
        messageContent: this._parseContent(this.prompt.segment),
        responseLanguage:
          this.constructor.LANGUAGE[this.language.label]?.label ||
          this.language.label,
      });

      // 获取当前视图的打印方法并输出结果
      const { printResult } = this.Leafs[this.onLeaf];
      console.log(this.response);
      printResult(this.response, this.isStream);
      // 隐藏通知
      notice.hide();
    } catch (error) {
      console.error(`Error in ${buttonType}.${buttonKey}:`, error);
      new Notice(`⚠️ Error: ${error.message}`, 3000);
    }
  }

  _parseContent(text) {
    const result = [];
    let processedText = text;
    const imageUrls = [];
    
    // 查找所有图片并收集URL
    let imageCount = 0;
    processedText = processedText.replace(/!\[.*?\]\((.*?)\)/g, (match, url) => {
        imageCount++;
        imageUrls.push(url);
        return `[Image${imageCount}]`;
    });

    // 添加处理后的文本对象
    result.push({
      type: "text",
      text: processedText.trim() + (imageCount > 0 ? "\n\nPlease answer based on the image." : "")
    });

    imageUrls.forEach(url => {
      result.push({
        type: "image_url",
        image_url: { url }
      });
    });

    return result;
  }

  /**
   * Initialize external scripts required by the application.
   * Currently loads and configures the Lucide icon library.
   */
  InitializedScripts() {
    // Create script element for Lucide icons
    const scriptLucide = document.createElement("script");
    scriptLucide.type = "text/javascript";
    scriptLucide.src = "https://unpkg.com/lucide@latest";

    // Create script element for Cryptojs
    const scriptCryptoJs = document.createElement("script");
    scriptCryptoJs.type = "text/javascript";
    scriptCryptoJs.src =
      "https://cdnjs.cloudflare.com/ajax/libs/crypto-js/4.1.1/crypto-js.min.js";

    // Create script element for sm-crypto
    const scriptSM = document.createElement("script");
    scriptSM.type = "text/javascript";
    scriptSM.src =
      "https://cdn.jsdelivr.net/npm/sm-crypto@0.3.13/dist/sm3.min.js";
    // scriptSM.onload = () => {
    //     window.sm3 = window.sm3 || sm.sm3;  // 确保 sm3 函数可用
    // };

    // Add script to document head
    document.getElementsByTagName("head")[0].appendChild(scriptLucide);
    document.getElementsByTagName("head")[0].appendChild(scriptCryptoJs);
    document.getElementsByTagName("head")[0].appendChild(scriptSM);

    // Configure Lucide icons when script loads
    scriptLucide.onload = () => {
      lucide.createIcons({
        attrs: {
          "stroke-width": 1.5,
          width: "1.1rem",
          height: "1.1rem",
        },
      });
    };
  }

  // handleToolbarHide Toolbar
  _handleToolbarHide(event) {
    if (this.Toolbar && !this.Toolbar.contains(event.target)) {
      this.Toolbar.classList.add("hide");
      document.removeEventListener("click", this._handleToolbarHide.bind(this));
    }
  }

  _createToolbar() {
    // 创建主容器
    const Container = document.createElement("div");
    Container.setAttribute("class", "GPT-Toolbar");
    Container.setAttribute("id", "GPT-Toolbar");
    Container.style.position = "absolute";
    Container.style.zIndex = 7;
    Container.classList.add("show");

    // 创建 conversationId 显示和刷新区域
    const idContainer = document.createElement("div");
    idContainer.classList.add("GPT-Toolbar-Area", "conversation-id-container");
    
    // 显示 conversationId
    const idDisplay = document.createElement("span");
    idDisplay.classList.add("conversation-id-display");
    idDisplay.textContent = `ID: ${this.conversationId}`;
    
    // 创建刷新按钮
    const refreshBtn = document.createElement("button");
    refreshBtn.classList.add("GPT-Toolbar-btn", "refresh-id-btn");
    const refreshIcon = document.createElement("i");
    refreshIcon.setAttribute("data-lucide", "refresh-cw");
    refreshBtn.appendChild(refreshIcon);
    
    refreshBtn.addEventListener("click", (e) => {
      e.stopPropagation();
      this.conversationId = this.generateConversationId();
      idDisplay.textContent = `ID: ${this.conversationId}`;
      new Notice("Conversation ID refreshed!", 2000);
    });
    
    idContainer.appendChild(idDisplay);
    idContainer.appendChild(refreshBtn);
    Container.appendChild(idContainer);

    // 关闭事件监听
    const handleToolbarHideBound = this._handleToolbarHide.bind(this);
    document.addEventListener("click", handleToolbarHideBound);

    // Active Buttons 区域 (第一行)
    const activeButtonsContainer = document.createElement("div");
    activeButtonsContainer.classList.add("GPT-Toolbar-Area");

    // Static Buttons 区域 (第二行)
    const staticButtonsContainer = document.createElement("div");
    staticButtonsContainer.classList.add("GPT-Toolbar-Area");

    // 添加按钮到对应区域
    // Active buttons
    [
      { config: GPT.TRANSLATE, name: "translate" },
      { config: GPT.IDEA, name: "idea" },
      { config: GPT.WRITTER, name: "writer" },
    ].forEach(({ config }) => {
      activeButtonsContainer.appendChild(this._createSplitButton(config));
    });

    // Static buttons
    [
      { config: GPT.PROVIDER, name: "provider" },
      { config: GPT.LANGUAGE, name: "language" },
      { config: GPT.TONE, name: "tone" },
      { config: GPT.FORMAT, name: "format" },
    ].forEach(({ config }) => {
      staticButtonsContainer.appendChild(this._createSplitButton(config));
    });

    // Ask Component (第三行)
    const askComponent = this.createAskComponent();

    // 添加到容器
    Container.appendChild(activeButtonsContainer);
    Container.appendChild(staticButtonsContainer);
    Container.appendChild(askComponent);

    // 添加到文档
    document.body.appendChild(Container);
    return Container;
  }

  // const btn_ask = this.createBtnAsk();
  // container_shortcuts.appendChild(btn_ask);
  // create a toggle button
  _createBtnLanguageToggle() {
    const btn = document.createElement("button");

    // add class
    btn.classList.add("GPT-Toolbar-lan");
    btn.classList.add("GPT-Toolbar-btn");
    btn.classList.add(this.language);
    btn.innerText = this.language === "English" ? "(En)" : "(Cn)";
    btn.onclick = () => {
      this.language = this.language === "English" ? "Chinese" : "English";
      btn.setAttribute("class", this.language);
      btn.innerText = this.language === "English" ? "(En)" : "(Cn)";
    };
    return btn;
  }

  // create a Ask button
  _createBtnAsk() {
    const btn = document.createElement("button");
    btn.classList.add("GPT-Toolbar-btn", "GPT-Toolbar-ask");

    const icon = document.createElement("i");
    icon.setAttribute("data-lucide", "message-circle-question");
    btn.appendChild(icon);

    // 直接使用askArea引用，不需要重新查询
    btn.addEventListener("click", (e) => {
      e.stopPropagation(); // 防止冒泡触发document的点击事件
      const askArea = btn.nextElementSibling;
      askArea.classList.toggle("hide");

      const textarea = askArea.querySelector("textarea");
      textarea.value = this.askTexts || "";
      if (!askArea.classList.contains("hide")) {
        textarea.focus(); // 显示时自动聚焦
      }
    });

    return btn;
  }

  // create Ask Area
  _createAskArea() {
    const askContainer = document.createElement("div");
    askContainer.classList.add(
      "GPT-Toolbar-askArea",
      "GPT-Toolbar-Area",
      "hide"
    );

    const textarea = document.createElement("textarea");
    textarea.rows = 1;
    textarea.placeholder = "Ask AI to edit or generate...";
    textarea.classList.add("GPT-Toolbar-textarea");

    textarea.addEventListener("input", (event) => {
      // 改用input事件而不是change
      this.askTexts = event.target.value;
    });

    const sendBtn = document.createElement("button");
    sendBtn.classList.add("GPT-Toolbar-btn", "GPT-Toolbar-sendBtn");
    sendBtn.textContent = "Send";

    askContainer.appendChild(textarea);
    askContainer.appendChild(sendBtn);

    sendBtn.addEventListener("click", async (e) => {
      e.stopPropagation(); // 防止冒泡
      const question = textarea.value.trim();
      const segment = `
      Question:"""${question}""";
      Source:"""{{TEXT}}""";
      {{TONE}}
      {{LANGUAGE}}
      {{FORMAT}}
      {{cleanOutput}}
      `
      // 设置提示模板
      this.prompt = {
        label: "ASK",
        segment: this._replacePromptVariables(segment),
      };
      if (question) {
        // 创建通知
        const notice = new Notice(
          `[${this.provider.label}] ${this.prompt.label} in *${this.language.label}*`,
          0
        );
        this.response = await this.chat({
          conversationId: this.conversationId,
          messageContent: this._parseContent(this.prompt.segment),
          responseLanguage:
            this.constructor.LANGUAGE[this.language.label]?.label ||
            this.language.label,
        });
        const { printResult } = this.Leafs[this.onLeaf];
        console.log(this.response);
        printResult(this.response, this.isStream);
        // 隐藏通知
        notice.hide();
        askContainer.classList.add("hide"); // 发送后隐藏输入区域
      }
    });

    return askContainer;
  }

  _createSplitButton(buttonOptions) {
    const container = document.createElement("div");
    container.classList.add(
      "split-button-container",
      buttonOptions.Main.isActive ? "active-buttons" : "static-buttons"
    );

    // 创建按钮的辅助函数
    const createButton = (className, icon, label) => {
      const button = document.createElement("button");
      button.classList.add(className, "GPT-Toolbar-btn");

      if (icon) {
        const iconElement = document.createElement("i");
        iconElement.setAttribute("data-lucide", icon);
        button.appendChild(iconElement);
      }

      if (label) {
        const labelElement = document.createElement("span");
        labelElement.textContent = label;
        button.appendChild(labelElement);
      }

      return button;
    };

    // 更新按钮显示的辅助函数
    const updateMainButton = (label, icon) => {
      while (mainButton.firstChild) {
        mainButton.removeChild(mainButton.firstChild);
      }

      const newLabel = document.createElement("span");
      newLabel.textContent = label;
      mainButton.appendChild(newLabel);

      const newIcon = document.createElement("i");
      newIcon.setAttribute("data-lucide", icon);
      mainButton.appendChild(newIcon);

      lucide.createIcons({
        attrs: {
          "stroke-width": 1.5,
          width: "1.1rem",
          height: "1.1rem",
        },
      });
    };

    // 创建主按钮
    const mainButton = createButton(
      "split-button-main",
      buttonOptions[buttonOptions.Main.default].icon,
      buttonOptions.Main.label
    );

    // 创建下拉触发器
    const dropdownTrigger = createButton(
      "split-button-dropdown",
      "chevron-down"
    );

    // 创建下拉菜单
    const dropdown = document.createElement("div");
    dropdown.classList.add("split-button-menu", "hide");

    // 主按钮点击事件处理
    let currentSelectedKey = buttonOptions.Main.default;
    mainButton.addEventListener("click", () => {
      const handler = buttonOptions.Main.isActive
        ? this._handleActiveTemplate
        : this._handleStaticTemplate;
      handler.call(
        this,
        buttonOptions.Main.prop.toUpperCase(),
        currentSelectedKey
      );
    });

    // 创建菜单项
    Object.entries(buttonOptions).forEach(([key, value]) => {
      if (key === "Main") return;

      const menuItem = createButton("split-button-item", value.icon, key);

      menuItem.addEventListener("click", () => {
        currentSelectedKey = key;

        const handler = buttonOptions.Main.isActive
          ? this._handleActiveTemplate
          : this._handleStaticTemplate;
        handler.call(this, buttonOptions.Main.prop.toUpperCase(), key);

        // 更新主按钮显示
        updateMainButton(buttonOptions.Main.label, value.icon);

        // 添加激活状态
        if (buttonOptions.Main.isActive) {
          // 移除其他按钮的激活状态
          document.querySelectorAll(".split-button-main").forEach((btn) => {
            btn.classList.remove("active");
          });
          // 添加当前按钮的激活状态
          mainButton.classList.add("active");
        }

        dropdown.classList.add("hide");
      });

      dropdown.appendChild(menuItem);
    });

    // 下拉触发器事件
    dropdownTrigger.addEventListener("click", (e) => {
      e.stopPropagation();
      dropdown.classList.toggle("hide");
    });

    // 点击外部关闭下拉菜单
    document.addEventListener("click", (e) => {
      if (!container.contains(e.target)) {
        dropdown.classList.add("hide");
      }
    });

    // 组装组件
    container.appendChild(mainButton);
    container.appendChild(dropdownTrigger);
    container.appendChild(dropdown);

    return container;
  }

  createAskComponent() {
    // 创建Ask组件容器
    const askComponent = document.createElement("div");
    askComponent.classList.add("GPT-Toolbar-Area", "GPT-Toolbar-askComponent");

    // 创建Ask按钮
    const askBtn = this._createBtnAsk();

    // 创建Ask输入区域
    const askArea = this._createAskArea();

    // 组装组件
    askComponent.appendChild(askBtn);
    askComponent.appendChild(askArea);

    return askComponent;
  }

  // 新增方法：生成加密数据
  async _generateAuthorization(url, referrerUrl) {
    const urlObj = new URL(url);
    const pathname = urlObj.pathname + urlObj.search;
    let timestamp = await this._getAPIFetchTimestamp();
    // 按照原始代码的顺序构建加密数据
    const sign_str = `${this.APP_VERSION}:${timestamp}:${pathname}:${this.userId}`;
    const sha1_secret_key = `${timestamp}:${this.SM3_SIGN_KEY}`;

    // 使用 HMAC-SHA1 计算哈希
    const sha1_hash = CryptoJS.HmacSHA1(sign_str, sha1_secret_key).toString(
      CryptoJS.enc.Hex
    );

    // 计算最终的 SM3 签名
    const final_sm3_sign = sm3(
      `${timestamp}:${sha1_hash}:${this.SM3_SIGN_KEY}`
    );

    const authData = {
      "X-Client-Domain": this._getDomain(referrerUrl), //"maxai.co",
      "X-Client-Path": referrerUrl,
      "X-Random": Math.floor(1e5 + 9e5 * Math.random()).toString(),
      t: timestamp,
      p: final_sm3_sign,
      d: this.DEVICE_ID,
    };

    return this._encryptAuthData(authData, this.USER_ID_KEY); // 难点
  }

  async _getAPIFetchTimestamp() {
    const timeDiff = Number(this.TIME_DIFF);
    return new Date().getTime() + timeDiff;
  }

  _encryptAuthData(data, key) {
    const sortedData = Object.fromEntries(
      Object.entries(data).sort(([a], [b]) => a.localeCompare(b))
    );
    return CryptoJS.AES.encrypt(JSON.stringify(sortedData), key).toString();
  }

  _getDomain(url) {
    try {
      const hostname = new URL(url).hostname;
      return hostname.replace(/^www\./, ""); // Remove 'www.' prefix if present
    } catch {
      return "maxai.co";
    }
  }
  // Add a generic request method
  // Update makeRequest method to use APIHeaderGenerator
  async makeRequest(
    endpoint,
    method = "POST",
    data = {},
    referrerUrl,
    additionalHeaders = {}
  ) {
    try {
      const url = `${this.baseUrl}${endpoint}`;
      const controller = new AbortController();
      const timeoutId = setTimeout(
        () => controller.abort(),
        this.requestTimeout
      );
      const urlPath = `${referrerUrl}?id=${this.conversationId}`;

      const headerOptions = {
        method,
        headers: {
          authorization: `Bearer ${this.accessToken}`,
          accept: "*/*",
          "accept-language": "en-US,en;q=0.9,zh-CN;q=0.8,zh;q=0.7",
          "cache-control": "no-cache",
          "content-type": "application/json",
          pragma: "no-cache",
          origin: "https://www.maxai.co",
          referer: "https://www.maxai.co/",
          "sec-fetch-dest": "empty",
          "sec-fetch-mode": "cors",
          "sec-fetch-site": "cross-site",
          "x-app-env": this.APP_ENV,
          "x-app-version": this.APP_VERSION,
          "x-browser-major": "131",
          "x-browser-name": "Chrome",
          "x-browser-version": "131.0.0.0",
          priority: "u=1, i",
          "sec-ch-ua":
            '"Google Chrome";v="131", "Chromium";v="131", "Not_A Brand";v="24"',
          "sec-ch-ua-mobile": "?0",
          "sec-ch-ua-platform": '"macOS"',
          "user-agent": this.USER_AGENT,
          ...additionalHeaders,
        },
        extraData: {
          authInfo: {
            userId: this.userId,
            token: this.accessToken,
          },
        },
        signal: controller.signal,
      };

      headerOptions.headers["x-authorization"] =
        await this._generateAuthorization(url, urlPath);

      if (method !== "GET" && Object.keys(data).length > 0) {
        headerOptions.body = JSON.stringify(data);
      }

      const response = await fetch(url, headerOptions);
      clearTimeout(timeoutId);

      if (!response.ok) {
        new Notice(`Request failed with status ${response.status}`,0);
        throw new Error(`Request failed with status ${response.status}`);
      }

      return response.json();
    } catch (error) {
      if (error.name === "AbortError") {
        new Notice("⚠️ Request timeout",0);
        throw new Error("Request timeout");
      }
      throw error;
    }
  }

  // 更新基础参数方法
  _getBaseParams(conversationId = "") {
    return {
      conversation_id: conversationId,
      chrome_extension_version: this.APP_VERSION,
      doc_ids: [],
      streaming: this.isStream,
      prompt_type: "preset",
      feature_name: "immersive_chat",
      source_type: "text_quote",
    };
  }

  async chat({ conversationId, messageContent, responseLanguage }) {
    const params = {
      ...this._getBaseParams(conversationId),
      conversation_id: conversationId,
      message_content: messageContent,
      chat_history: [],
      model_name: GPT.PROVIDER[this.provider.label].segment,
      prompt_id: "chat",
      prompt_name: "chat",
      prompt_inputs: {
        AI_RESPONSE_LANGUAGE: responseLanguage || "",
      },
      temperature: 1,
      streaming: this.isStream,
      prompt_type: "freestyle",
      source_type: "NA",
      use_artifact: true,
    };

    return this.makeRequest(
      "/gpt/cwc/chat",
      "POST",
      params,
      "https://www.maxai.co/ai-tools/ai-chat/"
    );
  }

  async refreshToken(app = "maxai_webapp") {
    return this.makeRequest(
      "/oauth/refresh_access_token",
      "POST",
      { app },
      { noauthlogout: "true" },
      { referrerUrl: "https://www.maxai.co/" }
    );
  }

  // 更新 usePromptAction 方法
  async usePromptAction(params) {
    if (!params.prompt_id || !params.prompt_name) {
      throw new Error("prompt_id and prompt_name are required parameters");
    }

    const defaultParams = {
      ...this._getBaseParams(params.conversation_id),
      chat_history: [],
      message_content: [],
      model_name: "gpt-4o-mini",
      prompt_inputs: {
        AI_RESPONSE_LANGUAGE: "",
        USER_INPUT: "",
        PREVIOUS_USER_INPUTS: "",
        AI_RESPONSE_TONE: "",
        AI_RESPONSE_WRITING_STYLE: "",
      },
      temperature: 1,
      streaming: this.isStream,
      prompt_action_type: "chat_complete",
    };

    return this.makeRequest("/gpt/cwc/use_prompt_action", "POST", {
      ...defaultParams,
      ...params,
    });
  }

  // 更新 generateImage 方法
  async generateImage(params) {
    const defaultParams = {
      ...this._getBaseParams(params.conversation_id),
      model_name: "dall-e-3",
      prompt_id: "f19e862d-e8bb-4b09-9220-6a9a395deb6f",
      prompt_name: "[Art] text to image",
      temperature: 1,
      prompt_inputs: {
        AI_RESPONSE_LANGUAGE: "",
      },
      style: "vivid",
      size: "1024x1024",
      n: 1,
      prompt: "",
      streaming: this.isStream,
    };

    return this.makeRequest("/gpt/get_image_generate_response", "POST", {
      ...defaultParams,
      ...params,
    });
  }

  async invoke() {
    // Update active leaf and view type
    this.activeLeaf = app.workspace.activeLeaf.containerEl;
    this.onLeaf = this.activeLeaf
      .querySelector(".workspace-leaf-content[data-type]")
      .getAttribute("data-type");

    // Get view-specific handlers
    const { getContentSelection, getCursorPosition } = this.Leafs[this.onLeaf];

    // Update content selection
    this.contentSelection = getContentSelection();

    // Update toolbar position and visibility
    const pos = getCursorPosition();
    if (pos) {
      this.Toolbar.style.top = String(pos.top + pos.height) + "px";
      this.Toolbar.classList.remove("hide");

      // Hide ask area if visible
      if (this.askArea) {
        this.askArea.classList.add("hide");
      }
    }
  }
}
