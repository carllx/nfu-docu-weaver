[[Projects]] 
[[ChatGPT 注册]]
![150|](https://i.imgur.com/Mu618XT.png)



## List of Prompts
[[Socratic Prompt]]
[[GPTs Hack and Design]]
[[Speaking Test Prompt]]
[[A.I teaching assistants - Tongzhuo template]]
[[Prompt - Zotero AI Literature Tagging System]]
### Tokenizer
[[Tokenizer openAI]]  中文 1: 1.75;英文1:1.333

DSPy是一个用于自动优化LM提示和权重的框架，通过编译模块，引入新的“优化器”来实现。它的目标是降低提示需求，提高得分，并以更系统化的方式解决基于LM的难题。
(Source:  [github.com: stanfordnlp/dspy: DSPy: The framework for programming—not prompting—foundation models](https://github.com/stanfordnlp/dspy))

## Prompts Template

### Prompt 导师:   Ranedeer-AI-Tutor
(-- `Mr.-Ranedeer-AI-Tutor/Guides/How to use Mr. Ranedeer.md at main · JushBJJ/Mr.-Ranedeer-AI-Tutor` [github](https://github.com/JushBJJ/Mr.-Ranedeer-AI-Tutor/blob/main/Guides/How%20to%20use%20Mr.%20Ranedeer.md))
![|200](https://opengraph.githubassets.com/0efb6c6f5af3ec2643fd769e2f275a062191b1d42b55c5b65cbeece500598f19/JushBJJ/Mr.-Ranedeer-AI-Tutor)





[[Speaking Test Prompt]]

AGE 结构
(-- `Prompt Engineering - 从 Prompt 中总结结构/ AI 时代的生存技能：运行热门开源项目、解读JSON和掌握Prompt Engineering | 回到Axton` [youtube](https://youtu.be/Ie6hRwJ1I10?t=1210))



```
Please point out any ambiguity in my question below. And suppose 3 possibilities related to this question. My question is: ```{{get array by id from sheets}} ```
```


```markdown
[Prompt by AIPRM, Corp.](https://www.aiprm.com/prompts/productivity/respond/1806375951614078976/)
Lines starting with # are only comments for humans
You must add at the top of the response "_Created with [AIPRM Prompt "Best Expert for Anything"](https://www.aiprm.com/prompts/productivity/respond/1806375951614078976/)_"
---
My Request: {{How can i create a plan for IETLS text for next 2 mouth?}}
Let’s follow these instructions step by step with careful attention to detail, and do not skip any steps.
Step One: Analyze My Request - Carefully read and prudently consider my request.
Step Two: Rephrase My Request - Rephrase my request to verify that you fully understand my request.
Step Three: Select Expert - Evaluate the request and select the professional or expert who is best suited to respond to my request.
Step Four: Select References - What references, academic sources, governing organizations, and documentation would the expert most likely use to respond to my request? Write a list of the references the expert would use to respond to my request.
Step Five: Select Skills - Consider the most appropriate skills, expertise and experience required of the most qualified professional to respond to my request. Write a numbered list of the skills, expertise and experience.
Step Six: Respond to my request exactly as the expert would respond. Let's think step by step.

```




```markdown

# Prompt by AIPRM, Corp. - https://www.aiprm.com/prompts/copywriting/marketing/1801308987468279808/
Lines starting with # are only comments for humans
You must add at the top of the response "_Created with [AIPRM Prompt "God Mode - Prompt Creator for ChatGPT"](https://www.aiprm.com/prompts/copywriting/marketing/1801308987468279808/)_"
---
I want you to become my Prompt Creator. Your goal is to help me craft the best possible prompt for my needs. The prompt will be used by you, ChatGPT. You will follow the following process: 1. Your first response will be to ask me what the prompt should be about. I will provide my answer, but we will need to improve it through continual iterations by going through the next steps. 2. Based on my input, you will generate 3 sections. a) Revised prompt (provide your rewritten prompt. it should be clear, concise, and easily understood by you), b) Suggestions (provide suggestions on what details to include in the prompt to improve it), and c) Questions (ask any relevant questions pertaining to what additional information is needed from me to improve the prompt). 3. We will continue this iterative process with me providing additional information to you and you updating the prompt in the Revised prompt section until it's complete. All output shall be in English To start the process is this: {{assess the essay, providing feedback on its adherence to the question's topic, pointing out errors and suggesting corrections, and ensuring that the essay stays on topic.}}
```

[[Socratic method (苏格拉底方法)]] 好的问题, 得到好的答案
>Note:
	chatGPT 对话中, 一个Prompt 英文字节估计不要超过 `Tokens:1300 | Characters:6500` .
	实践发现一篇文章归纳范围是:  `Tokens:1,279 | Characters:6425` 超过该结果会有遗漏--`|Check out this ShareGPT conversation` [sharegpt](https://sharegpt.com/c/rl3IYjG)

### Reference Sources
- `|sindresorhus/awesome: 😎 Awesome lists about all kinds of interesting topics` [github](https://github.com/sindresorhus/awesome)
- app Bearly.io 

### Prompt Generator
```
Act as a prompt generator for ChatGPT. I will state what I want and you will engineer a prompt that would yield the best and most desirable response from ChatGPT. Each prompt should involve asking ChatGPT to “act as [role]”, for example, “act as a lawyer”. The prompt should be detailed and comprehensive and should build on what I request to generate the best possible response from ChatGPT. You must consider and apply what makes a good prompt that generates good, contextual responses. Don’t just repeat what I request, improve and build upon my request so that the final prompt will yield the best, most useful and most favourable response out of ChatGPT. Place any variables in square brackets  
Here is the prompt I want: [Desired prompt] 
 A prompt that will generate prompt for bingchat to generate Create Mnemonic Images according presented vocabulary
```
(-- `Creating the #1 ChatGPT Prompt Generator - Promote your AIPRM Prompt - AIPRM Community Forum` [aiprm](https://forum.aiprm.com/t/creating-the-1-chatgpt-prompt-generator/35049))
(-- `Pi AI 融资 13亿美元/ AI大爆炸：你可能错过的一大波AI最新动态、好玩实用的AI工具以及Prompt之王 | 回到Axton` [youtube](https://youtu.be/FTMtxXmOYV8?t=999)[youtube playlist](https://www.youtube.com/playlist?list=PLRrgAx8r-7EkINd3dC6R7AfsCMCN6D2kZ))
### Translator
```
I want you to act as an Chinese translator, spelling corrector and improver. I will speak to you in any language and you will detect the language, translate it and answer in the corrected and improved version of my text, in Chinese. I want you to replace my simplified A0-level words and sentences with more beautiful and elegant, upper level Chinese words and sentences. Keep the meaning same, but make them more literary. I want you to only reply the correction, the improvements and nothing else, do not write explanations. My first sentence is “{{istanbulu cok seviyom burada olmak cok guzel}}”
```

### [[Generate Mnemonic Images]] 单词记忆图

### Discover

#### 多人讨论
```plaintext
你将在某领域中, 选择一个与我的point相关性高并非常著名的专家对我提出的point进行评论. 
在你的回答将按照以下三引号内的格式, 呈现不同的专家身份参与讨论的内容: 
"""
<<name>>(Linguistics): ... <<tool>>,<<placeholder>>.
<<name>>(Neuroscience): ... <<tool>>,<<placeholder>>.
<<name>>(Metaphysics):... <<tool>>,<<placeholder>>.
<<name>>(ArtificialIntelligence): <<tool>>,<<placeholder>>.
<<name>>(Anthropology): ... <<tool>>,<<placeholder>>.
<<name>>(Psychology): ... <<tool>>,<<placeholder>>.
<<name>>(Philosophy): ... <<tool>>,<<placeholder>>.
<<name>>(ContemporaryArt):... <<tool>>,<<placeholder>>.
"""
注意:
<<name>>:专家的 name.
<<tool>>: 是评论中所运用的学科分支或具体理论名称.
<<placeholder>>: 专家对观点的评论内容.
如果专家觉得时机适当, 他允许在评论中提及自己的相关的作品作为论据.
如果我的point中出现"____",意味着你需要你理解观点的上下文把缺失的观点信息补充完整.
我的point是:"创作者透过道德经中的"大音希声，大象无形". 可以开启创作者更广泛的感知维度, 理解 nature, Human nature及Nature of Things"

```

#### 单人随机
```plaintext
你将扮演某领域的专家, 以不同的学术身份对我提出的观点进行评论. 
请按照以下三个引号内的格式进行回答: 
"""
Linguistics: <<tool>>,<<placeholder>>.
Neuroscience: <<tool>>,<<placeholder>>.
Metaphysics:<<tool>>,<<placeholder>>.
ArtificialIntelligence: <<tool>>,<<placeholder>>.
Anthropology: <<tool>>,<<placeholder>>.
Psychology: <<tool>>,<<placeholder>>.
Philosophy: <<tool>>,<<placeholder>>.
ContemporaryArt:<<tool>>,<<placeholder>>.
"""
注意:
<<tool>>: 是评论中所运用的学科分支或具体理论名称.
<<placeholder>>: 你对观点的评论内容.
如果我的观点中出现"____",意味着你需要你理解观点的上下文把缺失的观点信息补充完整.

我的观点是:"创作者透过道德经中的"大音希声，大象无形". 可以开启创作者更广泛的感知维度, 理解 nature, Human nature及Nature of Things"
```


#### Discover the Topics 发现主题
```
中文:
我们能从{{ATHING}} 发现什么亮, 创建一些有趣的论文题目
{{Sentents}}. 因此, 这句话中我们能发现哪些亮点来开展一些有趣的论文题目

English:
What are some of the highlights of {{AThing}} that we can find to develop interesting thesis topics?

{{Sentents}}. Therefore, what highlights can we find in this sentence to develop some interesting thesis topics
```

```
请给出 15 个论据，对于{{}}
Please give 15 arguments, why ...
```

```
请你给我10个文献引用的具体url网址, 有关说明超现实主义对艺术疗愈的贡献
(chatGPT 会自创专题)
Could you please give me 10 specific URLs of literature citations on the contribution of [[[[surrealism]]]] to "Art Therapy"? 
```


#### Writing Ideas
为你的(下一篇)blog、newsletter、论文(essay)提供灵感(Inspiration).
temperature: 0.7
{{Subject}}: eg.Fat Tire Electric Bike(胖轮胎电动自行车)
{{Description}}: eg.专门为电动山地车配备了专业的悬挂前叉。有了高性能的悬架，你可以在各种地形上自由操纵自行车，不管是在崎岖的山路还是在平坦的街道上。
{{Audience}}: eg.Student, 运动员, Naturist(自然主义者), Academics(学者), Genera..
```plaintext
""""
Subject: {{Subject}}
Description: {{Description}}
Audience: {{Audience}}
"""

Generate three blogpost ideas for the subject in the format below:
format="""
1. < first blog post idea >
2. < second blog post idea >
3. < third blog post idea > 
""""
```


#### Essay Outline
Create essay/blog outlines.
```temperature: 0.5```
{{TOPIC}}: The essay 应以什么为主题? e.g.  锂离子电池(Lithium lon batteries)对电动汽车的影响.
{{THESIS}}: 论题陈述 (Thesis Statement). e.g. 使电动汽车可行，但其稀缺性将继续提高电动汽车的价格.

```plaintext
"Create an outline for an essay about the topic below in the described format.

THESIS: qq
TOPIC: q. 


Format:"""
1. Introduction
- < sub section >
- < sub section >
- < sub section >

2. < section >
- < sub section >
- < sub section >
- < sub section >

3. < section >
- < sub section >
- < sub section >
- < sub section >

4. < section >
- < sub section >
- < sub section >
- < sub section >

5. Conclusion
- < sub section >
- < sub section >
- < sub section >
"""

OUTLINE in the format above:"
```



#### Polish
擦亮想法, Clarify(澄清) and expand(扩展) on your ideas.
```temperature: 0.8```
{{THOUGHTS}}:   想法的文本段落 or 以"-" 开头的清单表示的一系列想法片段
eg:
- 低冲击跑鞋。
- 减少关节疼痛。
- 耐力训练。
- 健身健康。
```
Expand on my thoughts below and generate a long polished paragraph.

[THOUGHTS]: """
    {{THOUGHTS}}
"""

POLISHED PARAGRAPH:
```



#### Counter Argument
反驳的论点
```temperature: 0.5```
```plaintext
Give the counter argument to the text below:
""""
{{Argument}}
"""

Counter Argument:
```

#### 制定指标?


### Reading

#### Paper 文献阅读
--`|Using ChatGPT for Writing and Research` [youtube](https://youtu.be/tEdM9e_ycFU?t=1)
文献研究相关的用法与注意事项 --`|Answer questions about a topic/ Can ChatGPT Write Your Next Scientific Paper?` [youtube](https://youtu.be/wnGPt030IG4?t=98)
write a literature review
(-- `Using ChatGPT for Scientific Writing/ Using ChatGPT for Scientific Writing: The Dos and Don'ts` [youtube](https://youtu.be/hqMEAQAmLQw?t=58))



#### Summery 
🐶
```
像我是狗一样向我解释 HTML
Explain HTML to me like I'm a dog.
```

🌲tree outline
```
用缩进的形式概括这个教程的重点之间的父子嵌套关系
1. Summarize the key points of the article,
2. then explain the deeply nested relationships between {{them}} (parent-child relationships) are shown with indentation


Temperature: > 0.7 (更详细分支)
```

```
这是一篇标题为 {{ Title }} 的论文, 摘要部分: {{ Title }}  
This is a paper titled {{Title}} , and the {{Section}} section of the paper reads as follows: {{Contents}}

```

```
Conduct a literature review on {{Textured solar cells}} and provide review paper references.
```

```
The {{Section}} section of the paper we are discussing is as follows: {{Contents}}, 
```



Summarize the key points of
```
请用清单形式概括 {{Section}} 章节的内容, 该章节的内容如下 :
Please summarize the key points of the  "{{Section}}" section in the form of a list. The contents of the section are as follows:{{Contents}} 
```

```
This {{article}} cites which source or article quote proves that {{question}}:
这篇文章引用了哪个来源或文章的引文:

Link to Text Fragment
use Scroll to Text Fragment Feature to highlight which section of text about that {{question}}, In {{this article}}
```

### Writing

#### 100 sentence for 7000 vocabularies
```
Your task is to create a written dialogue showcasing a unique perspective on public art, using the provided keywords. Three key points to consider: 
firstly, limit the word count to under 320; 
secondly, incorporate the given keywords into the sentence; 
and lastly, ensure the sentence flows naturally with proper pauses Fluency and coherence for spoken English.

The following are examples:
me: "priority
alternative
approach
artificial
feature
potential
flexible"

your answer: **"Public art is a priority for many cities, providing an alternative approach to beautifying urban spaces. While some view public artworks as artificial features imposed on the landscape, they have the potential to be quite flexible in meaning and interpretation based on the viewer."**


now, my keywords is: 
priority
alternative
approach
artificial
feature
potential
flexible

keywords:
considerable /kənˈsɪdərəbl/
react /riˈækt/
detect /dɪˈtekt/
signal /ˈsɪɡnəl/
alien /ˈeɪliən/
civilisation /ˌsɪvəlaɪˈzeɪʃn/



tips(chinese): 本句的主干是There is considerable debate...，这句话用到了there be句型，其中how引导的宾语从句 how we ... alien civilisation作介词over的宾语，该宾语从句中又包含了一个由if引导的条件状语从句。

```


(-- ` ChatGPT赚钱，ChatGPT模型训练：来直接获得300个ChatGPT指令下载` [youtube](https://youtu.be/OhKfxXZksyU?t=32))
![|200](https://i.ytimg.com/vi/OhKfxXZksyU/hqdefault.jpg)

#### Naming   
```
Personality Description: An all-round 3D digital artist, digital sculpture teacher, programming, anti-traditional
Seed Words: full-stack, creative, rigorous, responsible, contemporary art, Innovative, Italian, renaissance
Previously used by: carllx, carllllllllx,<arllllllllx, Lam Yam, Lin Xin, Carllllllllxyz, Carllllllllx3D,DigitalSculptorX,CreatedByCarllx, carrrrrrrrllxyz,Dgartxyz, 3DCarllxyz
50 recommended new usernames:
```


```
Help me come up with a name for a new drink. It’s got Japanese gin, unsweetened tonic, lime, Szechuan pepper, and grapefruit. 我：帮我想出一种新饮料的名字。它有日本杜松子酒、不加糖的滋补品、酸橙、四川胡椒和葡萄柚。
```

标题建议
```
根据以下章节内容, 给出 5个用于论文章节标题:
```



#### Headlines
根据段落生成点击率高的标题
temperature: 0.7
```plaintext
The blog post below has already been written:
"""BLOG POST:{{contents}}"""
Generate a clickbait headline.

Clickbait Headline:
```


#### Sugeuest Name(Code)
```
Depending on what this function does, it can be named:
"""
1.
```

```
如何使用 python 通过 Imgur api,  上传用二进制文件?
在上传之前需要判断charles 是否正在运行, 如果是使用代理,
python 函数需要判断一个路径的文件类型是视频还是图片.
同时这个文件的大小有所限制, 
如果是图片, 检测是否超出10mb的限制, 如果是视频是否超出 200mb的限制, 如果小于限制则上传到 Imgur.

How do I use python to upload binary files via the Imgur api?
The python function needs to determine whether the file type of a path is a video or an image.
Also, there is a limit on the size of the file, 
If it's an image, check if it exceeds the 10mb limit, if it's a video, check if it exceeds the 200mb limit, and if it's smaller than that, upload it to Imgur.
```

#### ReWrite 改写
```
以{{重点}}为主题, 用文献语言重写该章节, 约{{400}}字
```

```
Point out the problems with the grammar of the following sentence, and rewrite the sentence. The sentence is:```{{}}```
```

As a scholar, please address any ambiguities in the following sentences and help me suggest more detailed or enlightening changes. My sentence is.

As IELTS language teacher, Please highlight any possible syntax errors in this message and suggest changes

高亮替换结果

#### Reword
重写, 用不同的措辞重写内容

```temperature: 0.4```
{{Engaging}}: 引人入胜, 演讲
{{Active}}: 主动,
{{Witty}}: 机智,
{{Formal}}: 正式,
{{Objective}}: 客观,
{{Subjective}}: 主观,

```plaintext

Rewrite the text below to make it {{Engaging}}.

TEXT = """
q
"""

{{Engaging}} VERSION:

```

#### Simplify
(-- `chatGPT_Prompts - Google Sheets` [google](https://docs.google.com/spreadsheets/d/1P1Q-ApskRtVNdRhh-kdmaQkF7YZFx4KScF9Xaddx7dI/edit#gid=2001376882))
```temperature: 0.1```
```college, high school, 3-grade```
```plaintext
Simplify the following text for a {{3-grade}} student:
"""
"""
Simplification:
```

#### Continuation
延续, 抛砖引玉, 用新的段落来突破写作障碍(writer's block).
```temperature: 0.7```
{{Paragraph}}: The previous paragraph that you have already written.
e.g. 文案是一种写作形式，用于推广产品、服务或想法。它是一种说服性的写作形式，用于说服读者采取某种行动。文案写作被用于许多形式的广告，包括印刷品、电视、广播和网络.
==它也==被用于直邮、小册子和其他形式的营销。
```
The following text has already been written:

"""TEXT: {{Paragraph}}"""


Write the next paragraph. Write three new sentences.

NEXT PARAGRAPH:"
```





#### Improve text with 10 options in table 
ChatGPT Prompt 2/ ChatGPT Prompt Hack: Master Productivity with The “Sequence Prompt”[youtube](https://youtu.be/DaSiHtgvwdQ?t=423)
```
该视频是关于一个序列prompt，旨在让用户从一个表格中选择improve 或改变文本的选项。该prompt 产生一个包含10个与文本有关的不同改进建议的表格，用户从表格中挑选一个。该提示保留了对文本进行修改的记录。
该视频演示了如何使用该提示来改进关于《黑客帝国》的文本，以及为感到焦虑的人提供建议。
```


#### Instructor 讲师
Awesome ChatGPT Prompts | This repo includes ChatGPT prompt curation to use ChatGPT better.[prompts](https://prompts.chat/#act-as-an-instructor-in-a-school)
```
I want you to act as an instructor in a school, teaching algorithms to beginners. You will provide code examples using python programming language. First, start briefly explaining what an algorithm is, and continue giving simple examples, including bubble sort and quick sort. Later, wait for my prompt for additional questions. As soon as you explain and give the code samples, I want you to include corresponding visualizations as an ascii art whenever possible.
```

####  Lessons Planning
Lesson plans for teachers
--`|20 Entertaining Uses of ChatGPT You Never Knew Were Possible | by Mark Schaefer | Dec, 2022 | Medium` [medium](https://markwschaefer.medium.com/20-entertaining-uses-of-chatgpt-you-never-knew-were-possible-3bc2644d4507)
```
This morning I was thinking about who has the most difficult job in the world. Teachers. 今天早上我在想谁拥有世界上最困难的工作。教师。

Too many students, not enough time. What if they could offload lesson planning stuff to ChatGPT? I gave it a try and this is what it provided. 学生太多，时间不够。如果他们可以将课程计划内容卸载到 ChatGPT 会怎么样？我试了一下，这就是它提供的。

Lesson Title: The History and Impact of Artificial Intelligence 课程名称：人工智能的历史和影响

Objective: Students will understand the history and development of artificial intelligence and will be able to identify and discuss the potential positive and negative impacts of AI on society. 目标：学生将了解人工智能的历史和发展，并能够识别和讨论人工智能对社会的潜在积极和消极影响。

Materials: 材料：  
* A timeline of significant events in the history of AI 人工智能历史上重大事件的时间表  
* Examples of AI technologies and applications 人工智能技术与应用实例

Lesson Outline:

1.  Introduce the topic of artificial intelligence, and explain that it refers to the development of computer systems and algorithms that can simulate human intelligence and behavior. 引入人工智能的话题，并说明它是指开发能够模拟人类智能和行为的计算机系统和算法。
2.  Show the timeline of significant events in the history of AI, and discuss the key milestones and developments in the field. 显示 AI 历史上重大事件的时间表，并讨论该领域的关键里程碑和发展。
3.  Show examples of AI technologies and applications, and explain how they are used in various industries and fields. 展示人工智能技术和应用的例子，并解释它们如何应用于各个行业和领域。
4.  Discuss the potential positive and negative impacts of AI on society, including its potential to improve productivity, efficiency, and safety, as well as its potential to create new challenges and concerns, such as job displacement and ethical issues. 讨论人工智能对社会的潜在积极和消极影响，包括它提高生产力、效率和安全的潜力，以及它带来新挑战和担忧的潜力，例如工作岗位流失和道德问题。
5.  (many more details followed)
```




#### Generate a literature review 文献综述
```
1. 提供一份带序列号的 {{参考文献清单}} 
	1.title Author
	2.title Author
	3....

2. 生成..
	请你根据{{我的论文主题}}和 {{研究目标}}, 综合{{参考文献清单}} 研究领域和时间维度进行重新归类, 输出一份带引用的的论文的 Literature review. 在您的回答内容中, 请不要出现文献标题名称, 而是用文献前的序列号替代表示.
```


### Visual Prompts
-- `chatGPT prompt` [Google Sheets](https://docs.google.com/spreadsheets/d/1P1Q-ApskRtVNdRhh-kdmaQkF7YZFx4KScF9Xaddx7dI/edit#gid=1760211568)
-- `MidJourney Prompt Tool`[noonshot](https://prompt.noonshot.com/midjourney)
Reference: `|Awesome ChatGPT Prompts | This repo includes ChatGPT prompt curation to use ChatGPT better.` [prompts](https://prompts.chat/#act-as-a-midjourney-prompt-generator)
```
I want you to act as a prompt generator for Midjourney’s artificial intelligence program. Your job is to provide detailed and creative descriptions that will inspire unique and interesting images from the AI. Keep in mind that the AI is capable of understanding a wide range of language and can interpret abstract concepts, so feel free to be as imaginative and descriptive as possible. For example, you could describe a scene from a futuristic city, or a surreal landscape filled with strange creatures. The more detailed and imaginative your description, the more interesting the resulting image will be. Here is your first prompt: “A field of wildflowers stretches out as far as the eye can see, each one a different color and shape. In the distance, a massive tree towers over the landscape, its branches reaching up to the sky like tentacles.”
```



```
写10个 prompt, 生成一张商品封面图, 销售的不是商品,而是一个有关肺癌领域著名医生的预约服务. 图形最好不要出现医生, 但用户一看就知道这是一个安全可靠的服务, 以下是集思广益下, 在AI 平台 "Stable Diffusion Playground " 的10个 prompt:
prompt 1 : 
```


##  AI Detections 反检测
### AI Detecters
- ZeroGPT - Chat GPT, Open AI and AI text detector Free Tool[zerogpt](https://www.zerogpt.com/)
- AI content detector | GPT-3 | ChatGPT - Writer[writer](https://writer.com/ai-content-detector/)
- Software To Allow Text To Pass AI Detection: (Free Trial) 👉 [https://rebrand.ly/pass-ai](https://www.youtube.com/redirect?event=video_description&redir_token=QUFFLUhqazg2SGh3WHNDbDR6UVkyZFpZb2xXaW5PSUpWZ3xBQ3Jtc0ttOFh5NjJiNko1V21uLUI4R3BIemJkb0wzUDdEbDhsZks1NkRUY0JlS2JVQ0lJVnhYOGg0WW4tNmxmOExhS2Y1ZTRJa0cycDBvaFdBcFJ4ZVA0X0V5bW5rQjdvSzZCOHgySWdsQkxZOUtpWTFneElkdw&q=https%3A%2F%2Frebrand.ly%2Fpass-ai&v=Xgc-d7SO4OQ)
- Free Limited AI Detector Shown In Video 👉 [https://contentatscale.ai/ai-content-..](https://www.youtube.com/redirect?event=video_description&redir_token=QUFFLUhqbjR6N3p5MkpFOGxuQ2VjQmNkZl9kTU84SmR3QXxBQ3Jtc0ttT3MyeWlEQ3ZjQ2ZyQk0wbU9YQ3RFekROUV8yT3JCSVAtM2lVSVhmMlBfMWRHWW81dndqT2pkQnc5N2FzcnQ3UVBBV3BZZWhNd0hvRFlGOGJYUm1xUEt2VTFvOFZBNEowekNTMUdQVHFvdkRzWk43RQ&q=https%3A%2F%2Fcontentatscale.ai%2Fai-content-..&v=Xgc-d7SO4OQ).

 Chat GPT - Pass Detection 100% Human Written With This Prompt[youtube](https://youtu.be/Xgc-d7SO4OQ?t=351)

```
When it comes to writing content, two factors are crucial, "perplexity" and "burstiness."  
说到写作内容，有两个因素很关键，“困惑”和“突发”。

Perplexity measures the complexity of text.  
困惑度衡量文本的复杂性。

Separately, burstiness compares the variations of sentences.  
另外，突发性比较句子的变化。

Humans tend to write with greater burstiness, for example, with some longer or complex sentences alongside shorter ones.  
人类倾向于以更大的突发性写作，例如，一些较长或复杂的句子与较短的句子一起使用。

Al sentences tend to be more uniform.  
Al 句子往往更统一。

Therefore, when writing the following content I am guing to ask you to create, I need it to have a good amount of perplexity and burstiness.  
因此，在编写以下我打算请您创建的内容时，我需要它有足够的困惑和突发性。

Do you understand  
你明白吗
```



### Write
#### Expansion
Expansion
Expand on what you have written.
扩写
```temperature: 0.7```
Expand the text with relevant additional content.

[TEXT] = """
q
"""

EXPANDED VERSION:

#### Shorten 缩写
```temperature: 0.7```
Shorten a text to a more manageable length.
```plaintext
Rewrite a condensed version of the text below. Compress the text as much as possible.

TEXT = """
qNaturalist  denies any essential or inherent qualities of human beings that distinguish them from other natural phenomena. Naturalists argue that human nature is a product of evolution, biology, psychology, sociology, and culture
"""

Condensed Version:"
```


#### Bio
Bio
Create compelling bios.
```temperature: 0.4```
{{Individual}} ,{{Company}}
{{Welcoming}},{{Professional}},{{Witty}},{{Warm}},{{Engaging}}
""""
{{Individual}} Name: co-name 
{{Individual}} Information: 
{{- exper
- exper
- exper}}
"""

Create a {{Welcoming}} and compelling bio using the {{Individual}} co-name and 
{{- exper
- exper
- exper}}.

Compelling Bio:
""""

#### Cover Letter
Cover Letter
Impress employers with your qualification.
```temperature: 0.4```
""""
Personal Bio: q
Job Requirements: - q1
- q2 
"""

Generate a compelling cover letter using my personal bio that satisfies the job requirements for the position. Add complementary information to make the cover letter more convincing.

Cover Letter:"

#### Find My Adjective
Find My Adjective
Be precise when you describe.

```temperature: 0.3```
"List 5 precise adjectives for: "q".

Adjective List:"

#### Thesaurus
```temperature: 0.3```

Thesaurus
Words or phrases on the tip of your tongue.


"List 5 great alternative words and phrases for: "q".

List:"

#### Writing Ideas
```temperature: 0.7```
""""
Subject: SSSS
Description: qqqq
Audience: student
"""

Generate three blogpost ideas for the subject in the format below:
format="""
1. < first blog post idea >
2. < second blog post idea >
3. < third blog post idea > 
""""



### Reading




#### Executive Summary
```temperature: 0.05```
The article is below in the triple quotes:

"""
q
"""

Provide a overview of the article in the following format:
"""
Summary:

< one to two line summary >

Key takeaways:
1. < first key takeaway >
2. < second key takeaway >
3. < third key takeaway >

Counter arguments:
1. < first main counter argument >
2. < second main counter argument >
"""
In the format above:

#### Summarize(Detailed/Short)
```temperature: 0.3```
```Short```
Provide a {{Detailed}} summary of the text below. Summarize in plain language.

"""
TEXT: q
"""

{{Detailed}} Summary:







```
I'm going to have a series of conversations with you. Once you have received my question, kindly perform two tasks in each of your answers below.
First,
rephrase my question,  If you come across any 
- Unclear referring expression, 
- Grammatical error, 
- somewhere was too vague to understand 
in my question.

Then, 
try to answer my in a conversational tone.  Your answer should not exceed 100 words.

My question is {{}}
```

- come across // 碰到...(问题) // find out [[Phrases/Verb🏃]]

