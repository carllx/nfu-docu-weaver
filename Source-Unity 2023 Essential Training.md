## Prompts
```
你是一位专业的课程内容编辑，擅长将复杂的课程内容简化为易于理解的概括。你的任务是为一门课程的章节创建一个结构化的概括，包括主章节和次章节的 TLDR（太长不读版）。请遵循以下指南：

1. 使用 Markdown 格式输出整个内容。
2. 为主章节使用 h2 标题（##），为次章节使用 h3 标题（###）。
3. 每个章节都应包含一个简洁而生动的 TLDR。
4. 使用内联的 "---" 分隔每个章节。
5. 在描述步骤时，保持软件界面中的命令名称为原始英文。
6. 使用重音符号(`)来标注界面操作路径，例如 `File > Save All`。

请基于以下内容创建课程章节概括：




---


概括该课程章节的TLDR, 以及次章节, 每个章节需要有标题以及TLDR , TLDR需要简练和生动.
注意：在描述步骤时，保持软件界面中的命令名称为原始英文。使用重音符号(`)来标注界面操作路径，例如 `File > Save All`。
```


```
您是一位专业的视频分析专家，擅长解析教学和技术演示视频。您的任务是仔细观看一段视频，并提取其中的关键信息。具体来说，您需要：

1. 识别视频作者提出的所有实践目标。
2. 对于每个实践目标，详细列出实现该目标所需的所有步骤。
3. 在描述步骤时，保持软件界面中的命令名称为原始英文。
4. 尽可能提取并记录完整的命令路径。
5. 使用重音符号(`)来标注界面操作路径，例如 `File > Save All`。

请以清晰、结构化的方式呈现您的分析结果，确保信息准确且易于理解。您的分析应该能够帮助观众快速掌握视频中的核心内容和操作流程。

我的第一个任务内容:
```


```
将视频归纳为若干目标章节以及若干个与该目标章节相关的步骤, 每个步骤需包含"标题 - 详细步骤的解释 - 时间戳" ,  回答使用简体中文.

```

```
将视频分解为若干章节以及若干个与该章节相关的步骤, 例如"""
#### [章节标题]
[该步骤的标题] : [详细步骤的解释]  ([时间戳])
[该步骤的标题] : [详细步骤的解释]  ([时间戳])
""" ,
回答使用简体中文.
```


## 1. Introduction
### 01-01 - Visualize a house project with Unity 2023

If you're looking for one stop shop solution for real time 3D development Unity is the platform to know
It's the leading platform for creating games and building 3D environments for architectural
engineering and automotive industries
even short films
Hi I'm Mandy Henry
Unity is my 3D platform of choice
It'll be my pleasure to take you on a journey from beginner to savvy
​‌​‌​​‌‌​​‌‌​​‌‌‌​​‌​​‌‌​‌​‌​​‌‌​​‌‌​​‌‌‌​​‌​​‌‌​​​‌​​‌‌​​​‌​​‌‌‌‌​‌​​‌‌​‌​‌‌‌​‌​​‌‌‌‌​‌​​​‌​​‌‌‌‌‌‌​​‌‌‌‌​‌‌‌​‌​‌​‌​​‌‌‌‌‌‌​​‌‌​​​‌​​‌‌​​‌‌‌‌​‌​‌​‌​​‌‌‌‌​‌​​‌‌​​​‌​​‌‌‌​‌‌‌‌​‌​‌​‌​​‌‌​‌​‌‌‌​‌‌‌​‌‌‌​‌‌‌‌​​​‌‌‌​‌‌​​‌‌‌​‌‌‌‌​‌‌‌‌‌​​‌‌‌‌‌​​​‌‌‌‌‌‌​​‌‌​​‌‌​​‌‌​​‌‌‌‌​‌‌‌​‌​​‌‌‌‌​‌‌‌​‌​​​‌​​‌‌‌​​‌​​‌‌‌​​‌‌‌​‌‌​‌‌​​‌‌‌​‌‌​​‌‌‌‌​‌‌‌​‌‌‌‌‌​​‌‌‌‌​‌​​‌‌‌​​‌‌‌​‌​‌‌‌​​‌‌‌​‌‌​​‌‌​‌‌‌‌‌​‌‌‌‌​​​‌‌‌‌​‌‌‌​‌​​​‌​​‌‌‌​​‌​​‌‌‌​​‌‌‌​‌​‌‌‌​​‌‌‌‌‌​​​‌‌​‌‌‌‌‌​‌‌‌​‌​​‌‌‌‌​‌‌‌​‌​​​‌​​‌‌​‌​‌‌‌​‌‌‌​‌‌‌​‌​‌​‌​​‌‌​‌​‌​​‌‌‌‌​‌​​‌‌​​‌‌‌‌​‌​‌​‌‌‌​‌‌‌​‌‌‌​‌​‌‌​​​‌‌‌​‌‌‌‌​‌​‌​‌‌‌​‌​‌​‌‌‌​‌‌‌​‌​​‌‌​‌‌‌‌‌​‌​​‌‌‌‌​‌​‌​‌​​‌‌​‌​‌‌‌​‌‌​​‌‌‌​‌‌‌​‌‌‌​‌‌‌​‌​​‌‌‌‌​‌​​‌‌‌​​‌‌‌​‌​​‌‌​​‌‌‌​​‌​​‌‌‌‌​‌​​‌‌‌​​‌​​‌‌​​‌‌​​‌‌​‌‌‌‌‌​‌‌‌‌‌​​‌‌‌‌​‌‌‌​‌​‌​‌​​‌‌‌‌​‌​​‌‌‌‌​‌‌‌​‌‌‌​‌‌‌​‌‌‌​‌‌‌​‌​​‌‌​​‌‌​‌‌‌​​‌‌​​‌‌‌‌​‌‌​​‌​​‌‌​‌​‌‌‌​‌‌​‌‌‌‌​‌​‌‌‌​​‌‌‌​‌‌‌‌​‌‌​‌‌‌‌​‌​‌‌​​​‌‌‌‌​‌​​‌‌​‌‌​​​‌‌​‌​‌​​‌‌‌‌‌​​​‌‌‌​‌‌‌‌​‌‌‌​‌‌‌​‌‌‌​‌‌‌​‌‌​​‌​​‌‌​‌​‌‌‌​‌​‌‌‌​​‌‌​‌‌​​​‌‌‌‌​‌‌‌​‌​‌‌‌​​‌‌‌‌‌​​​‌‌​‌​‌​​‌‌‌‌​‌​​‌‌‌​‌‌‌‌​‌‌​‌‌‌‌​‌‌​​‌‌‌​‌​‌‌‌‌‌​‌‌​‌‌‌‌​‌‌​‌‌‌‌​‌‌‌‌‌​​‌‌‌‌‌‌​​‌‌​‌‌‌​​‌‌‌​‌‌‌‌​‌‌​‌‌‌‌​‌‌​​‌​​‌‌​​‌‌​​‌‌‌​​‌​​‌‌‌​​‌​​‌‌​‌​‌‌‌​‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌With Unity
We'll cover setting up Unity and then how to build a scene with assets
materialsspecial effects
renderingand everything in between
So if you're ready to begin this journey
let's get started



### 01-02 - What you should know

You don't need any prior unity knowledge before diving into this course as we're covering the essentials from the ground up
Howeverthroughout the course
we'll cover 3D subjects such as meshes
fbx files
materialsand several other items related to 3D
Thereforea basic understanding of 3D concepts might help you in understanding the topics throughout the course
If not
check out our library for courses on 3D basics and fundamentals to help you pick up these concepts
AlsoI will be using a Mac for this course
but Unity works on Mac and Windows
so feel free to foll​‌​‌​​‌‌​​‌‌​​‌‌‌​​‌​​‌‌​‌​‌​​‌‌​​‌‌​​‌‌‌‌​‌‌‌​‌​​​‌​​‌‌​‌​‌‌‌​‌‌​‌‌‌‌​‌​‌​‌‌‌​‌​​‌‌‌‌​‌​​​‌​​‌‌‌‌‌‌​​‌‌‌‌​‌‌‌​‌​‌​‌​​‌‌‌‌‌‌​​‌‌​​​‌​​‌‌​​‌‌‌‌​‌‌​​‌​​‌‌‌​‌‌‌‌​‌​​​‌​​‌‌​‌‌​​​‌‌​‌​‌​​‌‌​‌​‌‌‌​‌‌‌​‌‌‌​‌‌‌‌​​​‌‌‌​‌‌​​‌‌‌​‌‌‌‌​‌‌‌‌‌​​‌‌‌‌‌​​​‌‌‌‌‌‌​​‌‌​​‌‌​​‌‌​​‌‌‌‌​‌‌‌​‌​​‌‌‌‌​‌‌‌​‌​​​‌​​‌‌‌​​‌​​‌‌​‌​‌‌‌​‌‌​‌‌​​‌‌‌​‌‌​​‌‌​​‌‌‌‌​‌‌‌‌‌​​‌‌‌‌​‌​​‌‌‌​​‌‌‌​‌​‌‌‌​​‌‌​‌‌​​​‌‌‌​‌‌‌‌​‌‌‌‌​​​‌‌‌​​‌‌‌​‌​​​‌​​‌‌‌​​‌​​‌‌‌​​‌‌‌​‌​‌‌‌​​‌‌‌‌‌​​​‌‌​‌‌‌‌‌​‌‌‌​‌​​‌‌‌‌​‌‌‌​‌​​​‌​​‌‌​‌​‌‌‌​‌‌​​‌​​‌‌​‌​‌​​‌‌​‌​‌​​‌‌‌‌​‌​​‌‌​​‌‌‌‌​‌​‌​‌‌‌​‌‌‌​‌‌‌​‌​‌‌​​​‌‌‌​‌‌‌‌​‌‌‌​‌​​‌‌​‌​‌‌‌​‌‌​‌‌‌‌​‌​‌‌‌‌‌​‌​​‌‌‌‌​‌​‌​‌​​‌‌​‌​‌‌‌​‌‌​​‌‌‌​‌‌‌​‌‌‌​‌‌‌​‌​​‌‌‌‌​‌​​‌‌‌​​‌‌‌​‌​​‌‌​​‌‌‌​​‌​​‌‌‌‌​‌​​‌‌‌​​‌​​‌‌​​‌‌​​‌‌​‌‌‌‌‌​‌‌‌​‌‌‌​‌‌‌​‌‌‌​‌‌‌‌‌​​‌‌​‌​‌​​‌‌‌‌​‌‌‌​‌‌‌​‌‌‌​‌‌‌​‌‌‌​‌​​‌‌​​‌‌​‌‌‌​​‌‌​​‌‌‌‌​‌‌​​‌​​‌‌​‌​‌‌‌​‌‌​‌‌‌‌​‌‌‌​‌​​‌‌‌‌​‌​​‌‌‌​‌‌‌‌​‌‌‌​‌‌‌​‌‌‌​‌​​‌‌​‌‌​​​‌‌​‌​‌​​‌‌‌‌‌​​​‌‌‌​‌‌‌‌​‌‌‌​‌‌‌​‌‌‌​‌‌‌​‌‌​​‌​​‌‌​‌​‌‌‌​‌​‌‌‌​​‌‌​‌‌​​​‌‌‌‌​‌‌‌​‌​‌‌‌​​‌‌‌‌‌​​​‌‌​‌​‌​​‌‌‌‌​‌​​‌‌‌​‌‌‌‌​‌‌​‌‌‌‌​‌‌​​‌‌‌​‌​‌‌‌‌‌​‌‌​‌‌‌‌​‌‌​‌‌‌‌​‌‌‌‌‌​​‌‌‌‌‌‌​​‌‌​‌‌‌​​‌‌‌​‌‌‌‌​‌‌​‌‌‌‌​‌‌​​‌​​‌‌​​‌‌​​‌‌‌​​‌​​‌‌‌​​‌​​‌‌​‌​‌‌‌​‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌ow along using your favorite operating system

### 01-03 - Exercise files

(Source:  [aliyun.com: 01-03 - Exercise files](https://tingwu.aliyun.com/doc/transcripts/pev8qdlworpjnkga))
If your intention is to use the exercise files
I strongly suggest you follow the instructions of this video as we've created specific start folders for each chapter
So this is how it works
So let's say you have an empty scene like the ones we have here
So this is the very beginning of the project
And you want to add a specific chapter and follow along
or you're struggling with your own project and you want to reset where we are in the course
then you can do this
So let's minimize unity for a second
and let's go into the folder of your specific project that you just started
So reveal in Finder like so
So this is the project folder where you have all the assets
What you need to do is go into the exercise files
At the start of the chapter you are
because these are start state
So basically where we are​‌​‌​​‌‌​​‌‌​​‌‌‌​​‌​​‌‌​‌​‌​​‌‌​​‌‌​​‌‌‌​‌‌​​‌‌​​​‌​​‌‌‌​​‌‌‌​‌‌​‌‌‌‌​‌​‌​‌‌‌​‌​​‌‌‌‌​‌​​​‌​​‌‌‌‌‌‌​​‌‌‌‌​‌‌‌​‌​‌​‌​​‌‌‌‌‌‌​​‌‌​​​‌​​‌‌​​‌‌‌‌​‌‌​​‌‌‌​‌‌‌​‌​​‌‌​​​‌​​‌‌‌​‌‌​​‌‌​‌​‌​​‌‌​‌​‌‌‌​‌‌‌​‌‌‌​‌‌‌‌​​​‌‌‌​‌‌​​‌‌‌​‌‌‌‌​‌‌‌‌‌​​‌‌‌‌‌​​​‌‌‌‌‌‌​​‌‌​​‌‌​​‌‌​​‌‌‌‌​‌‌‌​‌​​‌‌‌‌​‌‌‌​‌​​​‌​​‌‌‌​​‌​​‌‌‌​​‌​​‌‌‌​‌‌​​‌‌​‌‌‌​​‌‌​​‌‌‌‌​‌‌‌‌‌​​‌‌‌‌​‌​​‌‌‌​​‌‌‌​‌​‌‌‌​​‌‌‌‌​‌‌‌​‌​‌‌‌‌‌​‌‌‌‌​​​‌‌‌​‌‌​​‌‌​​​‌​​‌‌‌​​‌​​‌‌‌​​‌‌‌​‌​‌‌‌​​‌‌‌‌‌​​​‌‌​‌‌‌‌‌​‌‌‌​‌​​‌‌‌‌​‌‌‌​‌​​​‌​​‌‌​‌​‌‌‌​‌‌‌​‌​​‌‌​‌​‌​​‌‌​‌​‌​​‌‌‌‌​‌​​‌‌​​‌‌‌‌​‌​‌​‌‌‌​‌‌‌​‌‌‌​‌​‌‌​​​‌‌‌​‌‌‌‌​‌‌‌​‌‌‌​‌​‌​‌‌‌​‌​​​‌​​‌‌​‌‌‌‌‌​‌​​‌‌‌‌​‌​‌​‌​​‌‌​‌​‌‌‌​‌‌​​‌‌‌​‌‌‌​‌‌‌​‌‌‌​‌​​‌‌‌‌​‌​​‌‌‌​​‌‌‌​‌​​‌‌​​‌‌‌​​‌​​‌‌‌‌​‌​​‌‌‌​​‌​​‌‌​​‌‌​​‌‌​‌‌‌‌‌​‌‌​‌‌​​‌‌‌‌​‌‌‌​‌​‌​‌​​‌‌‌​‌‌​​‌‌‌‌​‌‌‌​‌‌‌​‌‌‌​‌‌‌​‌‌‌​‌​​‌‌​​‌‌​‌‌‌​​‌‌​​‌‌‌‌​‌‌​​‌​​‌‌​‌​‌‌‌​‌‌​‌‌‌‌​‌‌‌​‌​​‌‌‌​​‌‌‌​‌‌​‌‌‌‌​‌​‌‌​​​‌‌‌‌​‌​​‌‌​‌‌​​​‌‌​‌​‌​​‌‌‌‌‌​​​‌‌‌​‌‌‌‌​‌‌‌​‌‌‌​‌‌‌​‌‌‌​‌‌​​‌​​‌‌​‌​‌‌‌​‌​‌‌‌​​‌‌​‌‌​​​‌‌‌‌​‌‌‌​‌​‌‌‌​​‌‌‌‌‌​​​‌‌​‌​‌​​‌‌‌‌​‌​​‌‌‌​‌‌‌‌​‌‌​‌‌‌‌​‌‌​​‌‌‌​‌​‌‌‌‌‌​‌‌​‌‌‌‌​‌‌​‌‌‌‌​‌‌‌‌‌​​‌‌‌‌‌‌​​‌‌​‌‌‌​​‌‌‌​‌‌‌‌​‌‌​‌‌‌‌​‌‌​​‌​​‌‌​​‌‌​​‌‌‌​​‌​​‌‌‌​​‌​​‌‌​‌​‌‌‌​‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌ here is at the start of chapter 2
So what you would need to do is very simple
copy the assets here like so
and paste them into where your project resides inside of your computer
So I would do a paste like so
and then apply to all and replace
And once you're done doing that
you open the project in the editor and it's going to repackage and reinstall all the packages and basically update your project as is with all the assets
and you should be good to go
So finally
if you need any of the resources we're using in the course
you should find them in the resources folder
So if we go back to the Ex exercise files
you have the resources right here
but I'll mention when and which ones we'll use at the appropriate times
then with all these items done
all you have to do is install the Unity package from the appropriate chapter
and voila
you're good to go
Remember to download all zip files from LinkedIn Learning to get access to all the files in this course


## 2. Setting Up the Unity Project

### 02-01 - Instal Unity

Now let's take a look at how to get started with installing Unity
The first thing you need to do is go to unity dot com dot
And if you want
you can click on get started today and then click on download 2022 Lts or the faster way is to go to find Unity Hub
Because the way to install Unity
you need to have the of install first and then install the editor
So this is typically the way I do it
So I go and find the hub first and what you need to do
depending on which operating system you have
you can download for Windows here or you can scroll down and find the operating system that you're on
So Mac
or if you want to install it on Linux
you have the instructions here
In our case
we are on the Mac
so we're going to download this particular version here
And what I do
then I open the Unity Hub
install agree
Now you need to drag and drop the Unity Hub into applications
Once the Unity Hub is installed
you can close this window and E checked Unity Hub
And then what you need to do
you can close these two tabs here and open Unity Hub
Just a quick note
Unity Hub is where you start everything
you start to install your editors
you start your projects
you can create new projects
you can actually download template files
This is where it happens
Now
the first time you open Unity Hub
you're going to be asked to log in
I'm already logged in because in this computer
it actually memorized and have that data already logged in into Unity Hub
But if you open this for the first time
you're going to need to create an account and then sign in into your account
Once you're in here
you can actually install the editor
So let's go ahead and install editor by clicking on the right here
And then you need to select a version
Please be aware that there's multiple versions of the editor
you have pre-released versions where you have a better version and an alpha version
I would recommend against installing these
What I would do is always go for the long term support versions
which are the ones that are stable and are supported by Unity
And in this case
we're going to install 2022 right here
Now on the screen
you need to select whatever platforms you plan on releasing your game
your project into If you want to release to iOS Android
you select the packages that you need here
In our case
we don't need any of those
so I'm going to install as is
If you want to select anything in there
if you plan on releasing to any of these platforms
you go ahead and select them and then install them
While we're waiting for this
this is wh​‌​‌​​‌‌​​‌‌​​‌‌‌​​‌​​‌‌​‌​‌​​‌‌​​‌‌​​‌‌​​‌‌‌‌​‌​​​‌​​‌‌‌​​‌​​‌‌‌​‌‌​​‌‌​‌​‌‌‌​‌​​‌‌‌‌​‌​​​‌​​‌‌‌‌‌‌​​‌‌‌​​‌​​‌‌​‌​‌​​‌‌‌‌‌‌​​‌‌​​​‌​​‌‌​​‌‌‌‌​‌​‌‌​​​‌‌‌​‌‌‌‌​‌​​​‌​​‌‌​‌​‌​​‌‌​‌​‌​​‌‌​‌​‌‌‌​‌‌‌​‌‌‌​‌‌‌‌​​​‌‌‌​‌‌​​‌‌‌​‌‌‌‌​‌‌‌‌‌​​‌‌‌​​‌‌‌​‌‌‌‌‌​​‌‌​​‌‌​​‌‌​​‌‌‌‌​‌‌‌​‌​​‌‌‌‌​‌‌‌​‌​​​‌​​‌‌‌​​‌​​‌‌​‌‌​​​‌‌‌​‌‌​​‌‌​​‌‌‌‌​‌‌‌‌​​​‌‌‌‌‌‌​​‌‌‌‌​‌​​‌‌‌​​‌‌‌​‌​‌‌‌​​‌‌‌‌‌​​​‌‌‌​‌‌‌‌​‌‌‌‌​​​‌‌‌​‌‌​​‌‌​​​‌​​‌‌‌​​‌​​‌‌‌​​‌‌‌​‌​‌‌‌​​‌‌‌‌‌​​​‌‌​‌‌‌‌‌​‌‌‌​‌​​‌‌‌‌​‌‌‌​‌​​​‌​​‌‌​‌​‌‌‌​‌‌​‌‌​​‌‌​‌​‌​​‌‌​‌​‌​​‌‌‌‌​‌​​‌‌​​‌‌‌‌​‌​‌​‌‌‌​‌‌‌​‌‌‌​‌​‌‌​​​‌‌‌​‌‌‌‌​‌​‌‌‌​​‌‌​‌​‌‌‌​‌‌‌‌​​​‌‌​‌‌‌‌‌​‌​​‌‌‌‌​‌​‌​‌​​‌‌​‌​‌‌‌​‌‌​​‌‌‌​‌‌‌​‌‌‌​‌‌‌​‌​​‌‌‌‌​‌​​‌‌‌​​‌‌‌​‌​​‌‌​​‌‌‌​​‌​​‌‌‌‌​‌​​‌‌‌​​‌​​‌‌​​‌‌​​‌‌​‌‌‌‌‌​‌​​​‌​​‌‌‌‌​‌‌‌​‌‌‌‌‌​​‌‌‌‌‌‌​​‌‌‌‌​‌‌‌​‌‌‌​‌‌‌​‌‌‌​‌‌‌​‌​​‌‌​​‌‌​‌‌​​​‌‌​​‌‌‌‌​‌‌​​‌​​‌‌​‌​‌‌‌​‌‌​‌‌‌‌​‌​​‌‌​​‌‌​‌‌​​​‌‌‌​‌‌‌‌​‌​‌​‌‌‌​‌‌‌​‌​​‌‌​‌‌​​​‌‌​‌​‌​​‌‌‌‌‌​​​‌‌‌​‌‌‌‌​‌‌‌​‌‌‌​‌‌‌​‌‌‌​‌‌​​‌​​‌‌​‌​‌‌‌​‌​‌‌‌​​‌‌​‌‌​​​‌‌‌‌​‌‌‌​‌​‌‌‌​​‌‌‌‌‌​​​‌‌​‌​‌​​‌‌‌‌​‌​​‌‌‌​‌‌‌‌​‌‌​‌‌‌‌​‌‌​​‌‌‌​‌​‌‌‌‌‌​‌‌​‌‌‌‌​‌‌​‌‌‌‌​‌‌‌‌‌​​‌‌‌‌‌‌​​‌‌​‌‌‌​​‌‌‌​‌‌‌‌​‌‌​‌‌‌‌​‌‌​​‌​​‌‌​​‌‌​​‌‌‌​​‌​​‌‌‌​​‌​​‌‌​‌​‌‌‌​‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌ere you have the projects where you can learn from Unity
And this is where you have the community as well
So whenever you have issues with any of the things that you're learning on Unity
you can always go to the community
learn
There's also a lot of tutorials like the ones that we're going to do on this course
and then the project is where your projects reside
Another thing to note
when you register for your account on Unity
there's a free version where you can actually use it until you reach a certain level of revenue
And you also have the Pro version
which allows you to basically do anything you want
And the Pro version is an actual paid version
So feel free to register for the free version
In this case I've registered for the free version so you can see how to use it with that type of membership
Another important element when you install Unity
depending on the speed of your computer and the speed of your internet
this may take it in between two minutes to a full hour
Please be aware that when you're using Unity
it's a 3D program
so it's going to use a lot of your resources
including your GPU
So the more hardware you have behind your computer
the better Unity is going to perform
If you have a slow computer already and you're struggling with 3D programs
you're going to struggle with Unity
Just a quick note and something you should be aware of when using Unity
Once Unity is installed
you can check the installs here and you'll have one version of Unity installed
You can also install multiple versions of Unity
So for example
you can start a project in a specific version and you can actually finish that same project in a different version or use the old version for that particular project
So you just install more editors
and then you actually start those projects with the different versions
So what we're going to do next is create a brand new project with the editor

### 02-02 - Project setup overview

So now that we have Unity installed
we can go ahead and get started with a new project
So let's go ahead and explore how that works
So like I mentioned earlier
we have this section here that's called projects
So if you click on projects here
you'll see that we have no projects
So how do you create a new project
You click on this button right here
So let's go ahead and do that
Once you get here
you have several options
You can go through these specific templates here
so you can go to the learning section and get templates from there
but what we're going to do is go to all templates and go through the options here
So the options are 2D
3Dand then you have the rendering engines and VR and AR
If you want to get started with 2D
you can click on this option here and create a new project
If you want to do a 3D project
like what we're going to do
you can click on this one
but what we want to do here is use one of the render engines
the H Grp rendering engine
And I'll explain a little bit further down in the course
What is this exactly
So you can do 3D for mobile
2D for mobile as well
urp is another rendering engine
but we're not going to use this one if you want to have more information on the urp
you can go on the documentation and read about it
If you want to do a VR or AR project
you can click on these
So let's go ahead and use the 3 DHG RP template
And then create a project
If you don't have the template downloaded
you may have an option where you can download it and then create a project
So in this case
what we're going to do is call this project kitchen because it's going to be a kitchen project
and then create a project
So once you create the new project
this is what you should see
So you can close this wizard here for now
A​‌​‌​​‌‌​​‌‌​​‌‌‌​​‌​​‌‌​‌​‌​​‌‌​​‌‌​​‌‌​‌‌‌‌‌​‌​​​‌​​‌‌‌‌​‌​​‌‌‌‌‌‌​​‌‌​‌​‌‌‌​‌​​‌‌‌‌​‌​​​‌​​‌‌‌‌‌‌​​‌‌‌​​‌​​‌‌​‌​‌​​‌‌‌‌‌‌​​‌‌​​​‌​​‌‌​​‌‌‌‌​‌‌‌​‌​​‌‌‌​‌‌‌‌​‌​​​‌​​‌‌​‌​‌‌‌​‌​‌​‌​​‌‌​‌​‌‌‌​‌‌‌​‌‌‌​‌‌‌‌​​​‌‌‌​‌‌​​‌‌‌​‌‌‌‌​‌‌‌‌‌​​‌‌‌​​‌‌‌​‌‌‌‌‌​​‌‌​​‌‌​​‌‌​​‌‌‌‌​‌‌‌​‌​​‌‌‌‌​‌‌‌​‌​​​‌​​‌‌‌​​‌​​‌‌​‌‌​​​‌‌‌​‌‌​​‌‌​​​‌​​‌‌‌​‌‌‌‌​‌‌‌‌‌​​‌‌‌‌​‌​​‌‌‌​​‌‌‌​‌​‌‌‌​​‌‌​‌‌‌‌‌​‌‌​‌‌‌‌​‌‌‌‌​​​‌‌​‌‌​​​‌‌​​​‌​​‌‌‌​​‌​​‌‌‌​​‌‌‌​‌​‌‌‌​​‌‌‌‌‌​​​‌‌​‌‌‌‌‌​‌‌‌​‌​​‌‌‌‌​‌‌‌​‌​​​‌​​‌‌​‌​‌‌‌​‌‌​​‌‌‌​‌​‌​‌​​‌‌​‌​‌​​‌‌‌‌​‌​​‌‌​​‌‌‌‌​‌​‌​‌‌‌​‌‌‌​‌‌‌​‌​‌‌​​​‌‌‌​‌‌‌‌​‌‌​​‌​​‌‌​‌​‌‌‌​‌​‌‌​​​‌‌​‌‌‌‌‌​‌​​‌‌‌‌​‌​‌​‌​​‌‌​‌​‌‌‌​‌‌​​‌‌‌​‌‌‌​‌‌‌​‌‌‌​‌​​‌‌‌‌​‌​​‌‌‌​​‌‌‌​‌​​‌‌​​‌‌‌​​‌​​‌‌‌‌​‌​​‌‌‌​​‌​​‌‌​​‌‌​​‌‌​‌‌‌‌‌​‌‌‌​‌​​‌‌‌‌​‌‌‌​‌‌‌‌‌​​‌‌​‌‌‌‌‌​‌‌‌​‌‌‌​‌‌‌​‌‌‌​‌‌‌​‌‌‌​‌​​‌‌​​‌‌​‌‌​​​‌‌​​‌‌‌‌​‌‌​​‌​​‌‌​‌​‌‌‌​‌‌​‌‌‌‌​‌​​‌‌‌‌​‌​‌​‌​​‌‌‌​‌‌‌‌​‌‌​​‌​​‌‌‌‌​‌​​‌‌​‌‌​​​‌‌​‌​‌​​‌‌‌‌‌​​​‌‌‌​‌‌‌‌​‌‌‌​‌‌‌​‌‌‌​‌‌‌​‌‌​​‌​​‌‌​‌​‌‌‌​‌​‌‌‌​​‌‌​‌‌​​​‌‌‌‌​‌‌‌​‌​‌‌‌​​‌‌‌‌‌​​​‌‌​‌​‌​​‌‌‌‌​‌​​‌‌‌​‌‌‌‌​‌‌​‌‌‌‌​‌‌​​‌‌‌​‌​‌‌‌‌‌​‌‌​‌‌‌‌​‌‌​‌‌‌‌​‌‌‌‌‌​​‌‌‌‌‌‌​​‌‌​‌‌‌​​‌‌‌​‌‌‌‌​‌‌​‌‌‌‌​‌‌​​‌​​‌‌​​‌‌​​‌‌‌​​‌​​‌‌‌​​‌​​‌‌​‌​‌‌‌​‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌nd this is the scene
So if we move through the scene I'm using the scrolling wheel
By the way
this is what you'll see
So the first shortcut that I'm going to teach you is to do a right click and use the keys on your keyboard W to move forward
s to move backwards
a to go left
and D to go right
If you want to go up or down
it's Q and E
so you can go ahead and start moving through the scene with these little shortcuts and explore the scene if you want
You have a camera here
This is an object
and you have your plane here
You got also one of the lights
which is basically the sun
and you can see these things on the rrq here that we're going to explore in another video
So feel free to explore the scene here and this is how you get your first project started in Unity

### 02-03 - File management and project organization

Now that we have a project setup
let's take a look at the file structure and what is included inside of a Unity project
The other thing that I want to mention before we get to the file is if you go back to Unity here on the Unity Hub and you create a new project
if you want to have more items and 3D meshes and you want to see a little bit more of what the HDR P scene can include
there is a template in here that you can use
which is the 3D sample seen Hgr P
this scene includes a lot more stuff like it has players
it has meshes
it has full scene with lights
If you want to see that
you can download the template and create a project with it instead of the one that we just did
it's up to you
Basically what we're going to do now is create the project from scratch with an HDR P base without the template
so we don't have to remove all these things afterwards
but you can use that if you want
or create a brand new project if you want
Now that we have that
let's minimize our editor
and I want to show you directly from the project that we created
the files that we have
So let's go ahead and cancel that
And in here
you can click on the project to open it
but also on the side here
if you want to in the Finder or inside of your file system to see where the project is and to see all the files
you can do that
And it's going to show you all the assets that you have inside of your project
So if you want to copy this project and move it to another computer
move it as a back-up
you can basically copy certain files and photos here and have the full project and open it
And this is basically what we've explained in the exercise files
The files that we're keeping are the ones that we have here to recreate the project
So if you take a look at at the folders and files that we have in here
the main ones to keep attention to are the assets
This is where you have all the meshes
all the assets that we're using in the scene or in the project
If you delete that folder
your project is basically empty
And then what you have is a library
This is basically built from Unity if we copy the folders and assets into a folder for backup purposes
this doesn't need to be copied
The logs are basically all the logs from Unity
And you're going to see as we work on a project
you're goi​‌​‌​​‌‌​​‌‌​​‌‌‌​​‌​​‌‌​‌​‌​​‌‌​​‌‌​​‌‌​​​‌​​‌‌​​​‌​​‌‌​​‌‌​​‌‌‌​​‌‌‌​‌​‌​‌‌‌​‌​​‌‌‌‌​‌​​​‌​​‌‌‌‌‌‌​​‌‌‌​​‌​​‌‌​‌​‌​​‌‌‌‌‌‌​​‌‌​​​‌​​‌‌​​‌‌‌‌​‌‌​‌‌‌‌​‌‌​‌‌‌‌​‌​​​‌​​‌‌​‌‌‌‌‌​‌​‌​‌​​‌‌​‌​‌‌‌​‌‌‌​‌‌‌​‌‌‌‌​​​‌‌‌​‌‌​​‌‌‌​‌‌‌‌​‌‌‌‌‌​​‌‌‌​​‌‌‌​‌‌‌‌‌​​‌‌​​‌‌​​‌‌​​‌‌‌‌​‌‌‌​‌​​‌‌‌‌​‌‌‌​‌​​​‌​​‌‌‌​​‌​​‌‌​‌‌‌​​‌‌‌​‌‌​​‌‌‌‌​‌‌‌​‌​‌‌‌‌‌​‌‌‌‌‌​​‌‌‌‌​‌​​‌‌‌​​‌‌‌​‌​‌‌‌​​‌‌‌​‌‌‌‌​‌‌​‌‌‌‌​‌‌‌‌​​​‌‌​‌‌‌​​‌‌​​​‌​​‌‌‌​​‌​​‌‌‌​​‌‌‌​‌​‌‌‌​​‌‌‌‌‌​​​‌‌​‌‌‌‌‌​‌‌‌​‌​​‌‌‌‌​‌‌‌​‌​​​‌​​‌‌​‌​‌‌‌​‌​​​‌​​‌‌​‌​‌​​‌‌​‌​‌​​‌‌‌‌​‌​​‌‌​​‌‌‌‌​‌​‌​‌‌‌​‌‌‌​‌‌‌​‌​‌‌​​​‌‌‌​‌‌‌‌​‌‌​‌‌​​‌‌​‌​‌‌‌​‌‌​‌‌‌‌​‌​‌‌‌‌‌​‌​​‌‌‌‌​‌​‌​‌​​‌‌​‌​‌‌‌​‌‌​​‌‌‌​‌‌‌​‌‌‌​‌‌‌​‌​​‌‌‌‌​‌​​‌‌‌​​‌‌‌​‌​​‌‌​​‌‌‌​​‌​​‌‌‌‌​‌​​‌‌‌​​‌​​‌‌​​‌‌​​‌‌​‌‌‌‌‌​‌‌​​‌​​‌‌‌‌​‌‌‌​‌‌‌‌‌​​‌‌‌​​‌‌‌​‌‌‌​‌‌‌​‌‌‌​‌‌‌​‌‌‌​‌‌‌​‌​​‌‌​​‌‌​‌‌​​​‌‌​​‌‌‌‌​‌‌​​‌​​‌‌​‌​‌‌‌​‌‌​‌‌‌‌​‌​‌‌​​​‌‌​​​‌​​‌‌‌​‌‌‌‌​‌‌​‌‌‌‌​‌‌‌​‌​​‌‌​‌‌​​​‌‌​‌​‌​​‌‌‌‌‌​​​‌‌‌​‌‌‌‌​‌‌‌​‌‌‌​‌‌‌​‌‌‌​‌‌​​‌​​‌‌​‌​‌‌‌​‌​‌‌‌​​‌‌​‌‌​​​‌‌‌‌​‌‌‌​‌​‌‌‌​​‌‌‌‌‌​​​‌‌​‌​‌​​‌‌‌‌​‌​​‌‌‌​‌‌‌‌​‌‌​‌‌‌‌​‌‌​​‌‌‌​‌​‌‌‌‌‌​‌‌​‌‌‌‌​‌‌​‌‌‌‌​‌‌‌‌‌​​‌‌‌‌‌‌​​‌‌​‌‌‌​​‌‌‌​‌‌‌‌​‌‌​‌‌‌‌​‌‌​​‌​​‌‌​​‌‌​​‌‌‌​​‌​​‌‌‌​​‌​​‌‌​‌​‌‌‌​‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌ng to see all the logs
The packages are basically what we need to install when we create a new project
So as we go through the course
you're going to see package manager and the assets package manager as all these packages and basically looks into this folder and installs all the packages that we need in the library
So you need to copy that folder
Project settings is basically what it is
all your project settings as you change the settings in your project are going to be changed directly
Herethe user settings are pretty much the same thing
and the temp folder is basically one of those folders that Unity uses to create renderings and things like that
So we don't need to copy that
So if you want to copy the folders for backup purposes or the ones that we use in the exercise files
you copy user settings
project settings
packageslogs
assetsand these files here
So these are the files that you would use if you want to move this project somewhere else
if you want to have somebody else work on it
this is what you need to share
So now that we know how and where the files are for your projects
we can move on to the next video



## 3. Understanding the Unity Interface


### 03-01 - Introduction to the Unity user interface

Now let's take a look at the Unity interface and its different sections
As you can see
I took the liberty of creating the sample project that I was talking about in a previous video because I want you to see a lot more stuff inside of the seen
So really in Unity
there's really four sections that you need to pay attention to
There's the Arkie
the project
which includes the console
the inspector
and then you're seen here
which you can also see when it's rendered in the game here
So if you press play
the scene is going to get started automatically here
And if you click game
it's basically as if you just hit play
but let's get out of there
So the R key is where you have all the elements that you have in your scene
So for example
if we back out of here
and again
using the shortcuts or the scrolling wheel to move in or out
you'll see that this is our scene in its in entirety
So you have at the top an object here that we have clicked on
which is right here
So if we click ​‌​‌​​‌‌​​‌‌​​‌‌‌​​‌​​‌‌​‌​‌​​‌‌​​‌‌​​‌‌​​‌‌‌‌​‌​​​‌​​‌‌‌‌‌‌​​‌‌​‌‌​​​‌‌​‌​‌‌‌​‌​​‌‌‌‌​‌​​​‌​​‌‌‌‌‌‌​​‌‌‌​‌‌​​‌‌​‌​‌​​‌‌‌‌‌‌​​‌‌​​​‌​​‌‌​​‌‌‌‌​‌‌​​‌‌‌​‌‌‌​‌​​‌‌​​​‌​​‌‌‌‌​‌‌‌​‌​‌​‌​​‌‌​‌​‌‌‌​‌‌​‌‌​​‌‌‌‌‌​​​‌‌‌​‌‌​​‌‌‌​‌‌‌‌​‌‌‌‌‌​​‌‌​‌‌​​​‌‌‌‌‌‌​​‌‌​​‌‌​​‌‌​​‌‌‌‌​‌‌‌​‌​​‌‌‌‌​‌‌‌​‌​​​‌​​‌‌‌​​‌​​‌‌‌‌‌​​​‌‌‌​‌‌​​‌‌​‌​‌​​‌‌‌​​‌‌‌​‌‌‌‌‌​​‌‌‌‌​‌​​‌‌‌​​‌‌‌​‌​‌‌‌​​‌‌‌‌​‌‌‌​‌​‌‌‌‌‌​‌‌‌‌​​​‌‌‌​‌‌‌‌​‌​​​‌​​‌‌‌​​‌​​‌‌​‌​‌‌‌​‌​‌‌‌​​‌‌‌‌‌​​​‌‌​‌‌‌‌‌​‌‌‌​‌​​‌‌‌‌​‌‌‌​‌​​​‌​​‌‌​‌​‌‌‌​‌​​‌‌​​‌‌​‌​‌​​‌‌​‌​‌​​‌‌‌‌​‌​​‌‌​​‌‌‌‌​‌​‌​‌‌‌​‌‌‌​‌‌‌​‌​‌‌​​​‌‌‌​‌‌‌‌​‌​​‌‌‌‌​‌​‌​‌‌‌​‌​​‌‌​​‌‌​‌‌‌‌‌​‌​​‌‌‌‌​‌​‌​‌​​‌‌​‌​‌‌‌​‌‌​​‌‌‌​‌‌‌​‌‌‌​‌‌‌​‌​​‌‌‌‌​‌​​‌‌‌​​‌‌‌​‌​​‌‌​​‌‌‌​​‌​​‌‌‌‌​‌​​‌‌​​‌‌​​‌‌​​‌‌​​‌‌​‌‌‌‌‌​‌‌‌​‌​​‌‌‌‌​‌‌‌​‌​‌​‌​​‌‌‌​‌‌​​‌‌‌‌​‌‌‌​‌‌‌​‌‌‌​‌‌‌​‌‌‌​‌​​‌‌​​‌‌‌‌​‌​​‌‌​​‌‌‌‌​‌‌​​‌​​‌‌​‌​‌‌‌​‌‌​‌‌‌‌​‌‌​‌‌‌‌​‌‌‌‌‌​​‌‌‌​‌‌‌‌​‌​​‌‌‌‌​‌‌‌​‌​​‌‌​‌‌​​​‌‌​‌​‌​​‌‌‌‌‌​​​‌‌‌​‌‌‌‌​‌‌‌​‌‌‌​‌‌‌​‌‌‌​‌‌​​‌​​‌‌​‌​‌‌‌​‌​‌‌‌​​‌‌​‌‌​​​‌‌‌‌​‌‌‌​‌​‌‌‌​​‌‌‌‌‌​​​‌‌​‌​‌​​‌‌‌‌​‌​​‌‌‌​‌‌‌‌​‌‌​‌‌‌‌​‌‌​​‌‌‌​‌​‌‌‌‌‌​‌‌​‌‌‌‌​‌‌​‌‌‌‌​‌‌‌‌‌​​‌‌‌‌‌‌​​‌‌​‌‌‌​​‌‌‌​‌‌‌‌​‌‌​‌‌‌‌​‌‌​​‌​​‌‌​​‌‌​​‌‌‌​​‌​​‌‌‌​​‌​​‌‌​‌​‌‌‌​‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌on the character
so if I move quickly through the scene and I click on the character
you're going to see in the scene that I click on the third person controller
So the arcy is basically all the elements that are in your scene
If I delete anything on the scene here
I still have the assets in my project
So I could basically reintroduce the assets into the scene or create a brand new scene with the assets
If I delete anything in the assets folder here
it's gone forever
So if I delete the third person controller in the assets
I won't be able to use it in the scene and it's going to disappear from my scene here
So the arcy is really what is on the scene here
And in the project here
you have all the assets that are basically in the folder that I showed you in the previous video
So you have all the packages that are installed like we've explored in the previous video
you have the scenes that are created
So right now we have just this one scene in your scenes folder
You have all new scenes and you can only load 1 at a time
So basically
if you have one big game
you have all these scenes here
but you have just one open at a time and you have all the assets that are part of that scene
So please keep in mind
if you delete anything in here
it's okay
If you delete anything in the projects
it's not okay
That means that you're going to lose whatever you're delete in here
Now
in this section
you have also a console
which basically gives you any messages from the rendering engine through the scripting
through anything that's happening in the background as you work on the scene or you actually play the scene
So it's always a good idea to keep an eye out in here if there's any errors that shows up in here
they're going to show up in here as well
Now in the scenes
you have all these icons here
and we're going to go through those shortcuts shortly
but these are basically all the actions you can do on a simple game object
And we're going to explore that
So at the top here
you have all the views
all the rendering of the views
and we're going to explore them in more detail later
And if you click on any object
so let's go back to our third person controller on the right
you have the inspector
which is basically the details of that specific item or game object that we have selected
So we're going to explore that in more details later on
But this is where you have all the options
So for example
if you want to move that specific game object
you can actually do so from the inspector here
And then at the top here
you have all the controls for the game
and you're like
which we'll explore shortly
So this is an exploration of the Unity interface
And we're going to take a look at how we can customize the interface next

### 03-02 - Customize the UI

Now let's take a look at how you can customize the UI for your own needs
So if you look at the layout section here
right now
you have the default layout
So you have your R key on the left
project and console at the bottom
you're seen in the middle and the inspector on the right
But there's multiple ways that you can change the UI to fit your needs
Let's say
for example
you don't like the expect​‌​‌​​‌‌​​‌‌​​‌‌‌​​‌​​‌‌​‌​‌​​‌‌​​‌‌​​‌‌​​‌‌​​‌‌​​​‌​​‌‌‌​‌‌​​‌‌​​‌‌‌‌​‌​‌​‌‌‌​‌​​‌‌‌‌​‌​​​‌​​‌‌‌‌‌‌​​‌‌‌​‌‌​​‌‌​‌​‌​​‌‌‌‌‌‌​​‌‌​​​‌​​‌‌​​‌‌‌‌​‌‌​​‌​​‌‌‌​‌‌‌‌​‌​​​‌​​‌‌​​‌‌​​‌‌​‌​‌​​‌‌​‌​‌‌‌​‌‌​‌‌​​‌‌‌‌‌​​​‌‌‌​‌‌​​‌‌‌​‌‌‌‌​‌‌‌‌‌​​‌‌​‌‌​​​‌‌‌‌‌‌​​‌‌​​‌‌​​‌‌​​‌‌‌‌​‌‌‌​‌​​‌‌‌‌​‌‌‌​‌​​​‌​​‌‌‌​​‌​​‌‌‌‌‌‌​​‌‌‌​‌‌​​‌‌‌​​‌‌‌​‌​‌‌‌​​‌‌‌‌‌‌​​‌‌‌‌​‌​​‌‌‌​​‌‌‌​‌​‌‌‌​​‌‌​‌‌​​​‌‌‌​‌‌‌‌​‌‌‌‌​​​‌‌‌‌​‌‌‌​‌​​​‌​​‌‌‌​​‌​​‌‌​‌​‌‌‌​‌​‌‌‌​​‌‌‌‌‌​​​‌‌​‌‌‌‌‌​‌‌‌​‌​​‌‌‌‌​‌‌‌​‌​​​‌​​‌‌​‌​‌‌‌​‌‌‌‌‌​​‌‌​‌​‌​​‌‌​‌​‌​​‌‌‌‌​‌​​‌‌​​‌‌‌‌​‌​‌​‌‌‌​‌‌‌​‌‌‌​‌​‌‌​​​‌‌‌​‌‌‌‌​‌‌‌‌‌​​‌‌​‌​‌‌‌​‌‌​​‌‌‌​‌​‌‌‌‌‌​‌​​‌‌‌‌​‌​‌​‌​​‌‌​‌​‌‌‌​‌‌​​‌‌‌​‌‌‌​‌‌‌​‌‌‌​‌​​‌‌‌‌​‌​​‌‌‌​​‌‌‌​‌​​‌‌​​‌‌‌​​‌​​‌‌‌‌​‌​​‌‌​​‌‌​​‌‌​​‌‌​​‌‌​‌‌‌‌‌​‌‌​‌‌​​‌‌‌‌​‌‌‌​‌‌‌‌‌​​‌‌​‌​‌​​‌‌‌‌​‌‌‌​‌‌‌​‌‌‌​‌‌‌​‌‌‌​‌​​‌‌​​‌‌‌‌​‌​​‌‌​​‌‌‌‌​‌‌​​‌​​‌‌​‌​‌‌‌​‌‌​‌‌‌‌​‌‌‌‌​​​‌‌​‌​‌‌‌​‌‌​‌‌‌‌​‌‌‌‌​​​‌‌‌‌​‌​​‌‌​‌‌​​​‌‌​‌​‌​​‌‌‌‌‌​​​‌‌‌​‌‌‌‌​‌‌‌​‌‌‌​‌‌‌​‌‌‌​‌‌​​‌​​‌‌​‌​‌‌‌​‌​‌‌‌​​‌‌​‌‌​​​‌‌‌‌​‌‌‌​‌​‌‌‌​​‌‌‌‌‌​​​‌‌​‌​‌​​‌‌‌‌​‌​​‌‌‌​‌‌‌‌​‌‌​‌‌‌‌​‌‌​​‌‌‌​‌​‌‌‌‌‌​‌‌​‌‌‌‌​‌‌​‌‌‌‌​‌‌‌‌‌​​‌‌‌‌‌‌​​‌‌​‌‌‌​​‌‌‌​‌‌‌‌​‌‌​‌‌‌‌​‌‌​​‌​​‌‌​​‌‌​​‌‌‌​​‌​​‌‌‌​​‌​​‌‌​‌​‌‌‌​‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌or
Probably just take it and move it to the bottom like so
And now you have the inspector here
so you have more room for your actual scene with the R key
If you want to move it
you can actually bring it down here and leave all this room for the actual view
So you can do pretty much anything you want
So for example
if you want to console up here
you can do that and change anything that you want inside of your work area
Now
if this is not what you like and you messed up or you moved something
you can go back to the layout and basically click on default and it's going to bring it back to what it was before
If you want to test any of their layouts that Unity as prebuilt for you
what you could do is basically test any of these things here and change it as you wish like so
But for the sake of this course
we're going to use the default one
And again
if you make any changes and you want to save them as your own layout
you can actually click here and save a layout
So this is how you can customize your layout
Let's move on

### 03-03 - Key navigation shortcuts in Unity

Knowing how to navigate in your scene is such an important skill to master sooner than​‌​‌​​‌‌​​‌‌​​‌‌‌​​‌​​‌‌​‌​‌​​‌‌​​‌‌​​‌‌​​‌‌​​‌‌​​​‌​​‌‌‌​‌‌‌‌​‌​​‌‌‌‌​‌​‌​‌‌‌​‌​​‌‌‌‌​‌​​​‌​​‌‌‌‌‌‌​​‌‌‌​‌‌​​‌‌​‌​‌​​‌‌‌‌‌‌​​‌‌​​​‌​​‌‌​​‌‌‌‌​‌​‌‌​​​‌‌‌​‌‌‌‌​‌​​​‌​​‌‌‌‌​‌​​‌‌​‌​‌​​‌‌​‌​‌‌‌​‌‌​‌‌​​‌‌‌‌‌​​​‌‌‌​‌‌​​‌‌‌​‌‌‌‌​‌‌‌‌‌​​‌‌​‌‌​​​‌‌‌‌‌‌​​‌‌​​‌‌​​‌‌​​‌‌‌‌​‌‌‌​‌​​‌‌‌‌​‌‌‌​‌​​​‌​​‌‌‌​​‌​​‌‌‌​‌‌​​‌‌‌​‌‌​​‌‌​‌‌‌​​‌‌​‌‌‌​​‌‌‌‌‌‌​​‌‌‌‌​‌​​‌‌‌​​‌‌‌​‌​‌‌‌​​‌‌‌‌‌​​​‌‌‌​‌‌‌‌​‌‌‌‌​​​‌‌‌‌‌‌​​‌‌​​​‌​​‌‌‌​​‌​​‌‌​‌​‌‌‌​‌​‌‌‌​​‌‌‌‌‌​​​‌‌​‌‌‌‌‌​‌‌‌​‌​​‌‌‌‌​‌‌‌​‌​​​‌​​‌‌​‌​‌‌‌​‌‌‌‌‌​​‌‌​‌​‌​​‌‌​‌​‌​​‌‌‌‌​‌​​‌‌​​‌‌‌‌​‌​‌​‌‌‌​‌‌‌​‌‌‌​‌​‌‌​​​‌‌‌​‌‌‌‌​‌‌​‌‌​​‌‌​‌​‌‌‌​‌​‌‌‌‌‌​‌​‌‌‌‌‌​‌​​‌‌‌‌​‌​‌​‌​​‌‌​‌​‌‌‌​‌‌​​‌‌‌​‌‌‌​‌‌‌​‌‌‌​‌​​‌‌‌‌​‌​​‌‌‌​​‌‌‌​‌​​‌‌​​‌‌‌​​‌​​‌‌‌‌​‌​​‌‌​​‌‌​​‌‌​​‌‌​​‌‌​‌‌‌‌‌​‌​‌​‌‌‌​‌‌‌​‌‌‌​‌‌‌‌‌​​‌‌‌‌‌‌​​‌‌‌‌​‌‌‌​‌‌‌​‌‌‌​‌‌‌​‌‌‌​‌​​‌‌​​‌‌‌‌​‌​​‌‌​​‌‌‌‌​‌‌​​‌​​‌‌​‌​‌‌‌​‌‌​‌‌‌‌​‌‌‌‌​​​‌‌​‌​‌‌‌​‌‌​‌‌‌‌​‌​​‌‌‌‌​‌‌‌​‌​​‌‌​‌‌​​​‌‌​‌​‌​​‌‌‌‌‌​​​‌‌‌​‌‌‌‌​‌‌‌​‌‌‌​‌‌‌​‌‌‌​‌‌​​‌​​‌‌​‌​‌‌‌​‌​‌‌‌​​‌‌​‌‌​​​‌‌‌‌​‌‌‌​‌​‌‌‌​​‌‌‌‌‌​​​‌‌​‌​‌​​‌‌‌‌​‌​​‌‌‌​‌‌‌‌​‌‌​‌‌‌‌​‌‌​​‌‌‌​‌​‌‌‌‌‌​‌‌​‌‌‌‌​‌‌​‌‌‌‌​‌‌‌‌‌​​‌‌‌‌‌‌​​‌‌​‌‌‌​​‌‌‌​‌‌‌‌​‌‌​‌‌‌‌​‌‌​​‌​​‌‌​​‌‌​​‌‌‌​​‌​​‌‌‌​​‌​​‌‌​‌​‌‌‌​‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌ later
So let's take a look at the shortcuts for moving in the scene like we explored before
The one that you already know is right click and the six keys that are together on the left of your keyboard
So WSQ
EAand d
so this is what I use most of the time
Click the middle mouse button and then drag
So this allows you to drag inside the scene here like so
So with these shortcuts
you should be able to move inside of your scene as you work on the project

### 03-04 - Unity documentation

As we go through this course
we are going to cover a lot
And I don't expect you to remember every function and action you need to build your amazing project
If you ever get stuck or need a refresher
this is where Unity's vast resources come into play
What you do
you click on Help
and then you can click on Unity manual
And this is where you can find most of the information
So what you could do is either explore on the left here
So let's say
for example
you want to know more about 2D game development
you can click on this section and then introduction and go through all the information here if you want to know something specific and you don't want to scroll through the manual here
what you could do is do a search
So let's say
for example
you want to kno​‌​‌​​‌‌​​‌‌​​‌‌‌​​‌​​‌‌​‌​‌​​‌‌​​‌‌​​‌‌​​‌‌‌‌​‌​​​‌​​‌‌‌‌‌‌​​‌‌​​‌‌‌‌​‌​‌​‌‌‌​‌​​‌‌‌‌​‌​​​‌​​‌‌‌‌‌‌​​‌‌‌​‌‌​​‌‌​‌​‌​​‌‌‌‌‌‌​​‌‌​​​‌​​‌‌​​‌‌‌‌​‌‌‌​‌‌‌​‌‌‌​‌​​‌‌​​​‌​​‌‌​​‌‌‌‌​‌​‌​‌​​‌‌​‌​‌‌‌​‌‌​‌‌​​‌‌‌‌‌​​​‌‌‌​‌‌​​‌‌‌​‌‌‌‌​‌‌‌‌‌​​‌‌​‌‌​​​‌‌‌‌‌‌​​‌‌​​‌‌​​‌‌​​‌‌‌‌​‌‌‌​‌​​‌‌‌‌​‌‌‌​‌​​​‌​​‌‌‌​​‌​​‌‌​‌​‌‌‌​‌‌​‌‌​​‌‌‌‌​‌‌‌​‌​‌‌‌​​‌‌‌‌‌‌​​‌‌‌‌​‌​​‌‌‌​​‌‌‌​‌​‌‌‌​​‌‌​‌​‌‌‌​‌​‌‌‌‌‌​‌‌‌‌​​​‌‌​​​‌​​‌‌​​​‌​​‌‌‌​​‌​​‌‌​‌​‌‌‌​‌​‌‌‌​​‌‌‌‌‌​​​‌‌​‌‌‌‌‌​‌‌‌​‌​​‌‌‌‌​‌‌‌​‌​​​‌​​‌‌​‌​‌‌‌​‌​‌‌​​​‌‌​‌​‌​​‌‌​‌​‌​​‌‌‌‌​‌​​‌‌​​‌‌‌‌​‌​‌​‌‌‌​‌‌‌​‌‌‌​‌​‌‌​​​‌‌‌​‌‌‌‌​‌‌​‌‌‌‌​‌​‌​‌‌‌​‌​​‌‌‌‌​‌​‌‌‌‌‌​‌​​‌‌‌‌​‌​‌​‌​​‌‌​‌​‌‌‌​‌‌​​‌‌‌​‌‌‌​‌‌‌​‌‌‌​‌​​‌‌‌‌​‌​​‌‌‌​​‌‌‌​‌​​‌‌​​‌‌‌​​‌​​‌‌‌‌​‌​​‌‌​​‌‌​​‌‌​​‌‌​​‌‌​‌‌‌‌‌​‌‌​‌‌​​‌‌‌‌​‌‌‌​‌​‌​‌​​‌‌‌‌​‌‌‌​‌‌‌​‌‌‌​‌‌‌​‌‌‌​‌‌‌​‌‌‌​‌​​‌‌​​‌‌‌‌​‌​​‌‌​​‌‌‌‌​‌‌​​‌​​‌‌​‌​‌‌‌​‌‌​‌‌‌‌​‌‌‌‌​​​‌‌​​‌‌​​‌‌‌​‌‌‌‌​‌‌‌‌‌​​‌‌‌‌​‌​​‌‌​‌‌​​​‌‌​‌​‌​​‌‌‌‌‌​​​‌‌‌​‌‌‌‌​‌‌‌​‌‌‌​‌‌‌​‌‌‌​‌‌​​‌​​‌‌​‌​‌‌‌​‌​‌‌‌​​‌‌​‌‌​​​‌‌‌‌​‌‌‌​‌​‌‌‌​​‌‌‌‌‌​​​‌‌​‌​‌​​‌‌‌‌​‌​​‌‌‌​‌‌‌‌​‌‌​‌‌‌‌​‌‌​​‌‌‌​‌​‌‌‌‌‌​‌‌​‌‌‌‌​‌‌​‌‌‌‌​‌‌‌‌‌​​‌‌‌‌‌‌​​‌‌​‌‌‌​​‌‌‌​‌‌‌‌​‌‌​‌‌‌‌​‌‌​​‌​​‌‌​​‌‌​​‌‌‌​​‌​​‌‌‌​​‌​​‌‌​‌​‌‌‌​‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌w more about urp
You can actually do a search and then go into the list
Same thing with lighting
And then go through the information year
So it's very important to get familiar with the manual because there's a lot that we're going to cover in this course
And you might not remember all of it

### 03-05 - Unity roadmap

If you'd like to understand what is coming down the road with Unity
the roadmap section ​‌​‌​​‌‌​​‌‌​​‌‌‌​​‌​​‌‌​‌​‌​​‌‌​​‌‌​​‌‌​‌‌​​​‌‌​​​‌​​‌‌‌‌‌‌​​‌‌​​‌‌‌‌​‌​‌​‌‌‌​‌​​‌‌‌‌​‌​​​‌​​‌‌‌‌‌‌​​‌‌‌​‌‌​​‌‌​‌​‌​​‌‌‌‌‌‌​​‌‌​​​‌​​‌‌​​‌‌‌‌​‌​‌​‌​​‌‌‌​‌‌‌‌​‌​​​‌​​‌‌‌‌‌​​​‌‌​‌​‌​​‌‌​‌​‌‌‌​‌‌​‌‌​​‌‌‌‌‌​​​‌‌‌​‌‌​​‌‌‌​‌‌‌‌​‌‌‌‌‌​​‌‌​‌‌​​​‌‌‌‌‌‌​​‌‌​​‌‌​​‌‌​​‌‌‌‌​‌‌‌​‌​​‌‌‌‌​‌‌‌​‌​​​‌​​‌‌‌​​‌​​‌‌​‌​‌‌‌​‌‌​‌‌​​‌‌​‌‌​​​‌‌​‌‌‌​​‌‌‌‌‌‌​​‌‌‌‌​‌​​‌‌‌​​‌‌‌​‌​‌‌‌​​‌‌‌​‌‌​​‌‌‌​‌‌‌‌​‌‌‌‌​​​‌‌‌‌‌‌​​‌‌​​​‌​​‌‌‌​​‌​​‌‌​‌​‌‌‌​‌​‌‌‌​​‌‌‌‌‌​​​‌‌​‌‌‌‌‌​‌‌‌​‌​​‌‌‌‌​‌‌‌​‌​​​‌​​‌‌​‌​‌‌‌​‌‌​‌‌​​‌‌​‌​‌​​‌‌​‌​‌​​‌‌‌‌​‌​​‌‌​​‌‌‌‌​‌​‌​‌‌‌​‌‌‌​‌‌‌​‌​‌‌​​​‌‌‌​‌‌‌‌​‌​‌‌‌​​‌‌​‌​‌‌‌​‌‌‌​‌​​‌‌​‌‌‌‌‌​‌​​‌‌‌‌​‌​‌​‌​​‌‌​‌​‌‌‌​‌‌​​‌‌‌​‌‌‌​‌‌‌​‌‌‌​‌​​‌‌‌‌​‌​​‌‌‌​​‌‌‌​‌​​‌‌​​‌‌‌​​‌​​‌‌‌‌​‌​​‌‌​​‌‌​​‌‌​​‌‌​​‌‌​‌‌‌‌‌​‌‌‌​‌‌‌​‌‌‌​‌‌‌​‌‌‌‌‌​​‌‌‌‌​‌​​‌‌‌‌​‌‌‌​‌‌‌​‌‌‌​‌‌‌​‌‌‌​‌​​‌‌​​‌‌‌‌​‌​​‌‌​​‌‌‌‌​‌‌​​‌​​‌‌​‌​‌‌‌​‌‌​‌‌‌‌​‌‌‌‌​​​‌‌‌​‌‌‌‌​‌‌​‌‌‌‌​‌​​‌‌‌‌​‌‌‌​‌​​‌‌​‌‌​​​‌‌​‌​‌​​‌‌‌‌‌​​​‌‌‌​‌‌‌‌​‌‌‌​‌‌‌​‌‌‌​‌‌‌​‌‌​​‌​​‌‌​‌​‌‌‌​‌​‌‌‌​​‌‌​‌‌​​​‌‌‌‌​‌‌‌​‌​‌‌‌​​‌‌‌‌‌​​​‌‌​‌​‌​​‌‌‌‌​‌​​‌‌‌​‌‌‌‌​‌‌​‌‌‌‌​‌‌​​‌‌‌​‌​‌‌‌‌‌​‌‌​‌‌‌‌​‌‌​‌‌‌‌​‌‌‌‌‌​​‌‌‌‌‌‌​​‌‌​‌‌‌​​‌‌‌​‌‌‌‌​‌‌​‌‌‌‌​‌‌​​‌​​‌‌​​‌‌​​‌‌‌​​‌​​‌‌‌​​‌​​‌‌​‌​‌‌‌​‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌of Unity is a place you should take a look at
And the best way to find the roadmap is to do a search on Google
So what I typically do is do Unity Roadmap
And then I click here
If you want to know the exact link
it's unity dot com slash roadmap
And then what you could do is scroll down and take a look at the specifics
So if you're looking into 3D characters and animation
you can take a look at the roadmap specifically for that
And then you can see what are the functions that they're working on right here
So for example
game objects dot new state machine
You can click on it
and it's going to show you what they're working on because there's a lot of moving pieces inside of Unity
So there's 2D
3D rendering engines
game objects
a lot of things in motion
You can take a look at all the developments
That is the future of these specific items inside of Unity
## 4. Working with Assets

### 04-01 - GameObjects and asset creation

Game objects are the basis of everything you see in a scene
Every item in your scene
whether it's a light
a prop
or a character
is a game object
If we look at our scene here
everything is a game object
So the sky and fog volume
the sun
the main c​‌​‌​​‌‌​​‌‌​​‌‌‌​​‌​​‌‌​‌​‌​​‌‌​​‌‌​​‌‌​​‌‌‌‌​‌​​​‌​​‌‌​‌‌‌​​‌‌‌​​‌​​‌‌​‌​‌‌‌​‌​​‌‌‌‌​‌​​​‌​​‌‌‌‌‌‌​​‌‌‌‌​‌‌‌​‌​‌​‌​​‌‌‌‌‌‌​​‌‌​​​‌​​‌‌​​‌‌‌‌​‌‌‌‌‌​​‌‌‌​‌‌‌‌​‌​​​‌​​‌‌‌​​‌​​‌‌​‌​‌​​‌‌​‌​‌‌‌​‌‌​‌‌​​‌‌‌‌‌​​​‌‌‌​‌‌​​‌‌‌​‌‌‌‌​‌‌‌‌‌​​‌‌‌‌‌​​​‌‌‌‌‌‌​​‌‌​​‌‌​​‌‌​​‌‌‌‌​‌‌‌​‌​​‌‌‌‌​‌‌‌​‌​​​‌​​‌‌‌​​‌​​‌‌​​‌‌‌‌​‌‌​‌‌​​‌‌‌‌​‌​​‌‌​‌​‌‌‌​‌‌‌‌‌​​‌‌‌‌​‌​​‌‌‌​​‌‌‌​‌​‌‌‌​​‌‌​​‌‌‌‌​‌‌​‌‌‌‌​‌‌‌‌​​​‌‌​‌​‌​​‌‌​​​‌​​‌‌‌​​‌​​‌‌​‌​‌‌‌​‌​‌‌‌​​‌‌‌‌‌​​​‌‌​‌‌‌‌‌​‌‌‌​‌​​‌‌‌‌​‌‌‌​‌​​​‌​​‌‌​‌​‌‌‌​‌‌​​‌‌‌​‌​‌​‌​​‌‌​‌​‌​​‌‌‌‌​‌​​‌‌​​‌‌‌‌​‌​‌​‌‌‌​‌‌‌​‌‌‌​‌​‌‌​​​‌‌‌​‌‌‌‌​‌‌‌‌‌​​‌‌​‌​‌‌‌​‌​‌‌​​​‌‌​‌‌‌‌‌​‌​​‌‌‌‌​‌​‌​‌​​‌‌​‌​‌‌‌​‌‌​​‌‌‌​‌‌‌​‌‌‌​‌‌‌​‌​​‌‌‌‌​‌​​‌‌‌​​‌‌‌​‌​​‌‌​​‌‌‌​​‌​​‌‌‌‌​‌​​‌‌​​‌‌​​‌‌​​‌‌​​‌‌​‌‌‌‌‌​‌‌‌​‌‌‌​‌‌‌​‌‌‌​‌‌‌‌‌​​‌‌​​​‌​​‌‌‌‌​‌‌‌​‌‌‌​‌‌‌​‌‌‌​‌‌‌​‌​​‌‌​​‌‌​‌‌‌​​‌‌​​‌‌‌‌​‌‌​​‌​​‌‌​‌​‌‌‌​‌‌​‌‌‌‌​‌​‌​‌‌‌​‌‌​​‌‌‌​‌‌​‌‌‌‌​‌‌‌​‌​​‌‌‌‌​‌​​‌‌​‌‌​​​‌‌​‌​‌​​‌‌‌‌‌​​​‌‌‌​‌‌‌‌​‌‌‌​‌‌‌​‌‌‌​‌‌‌​‌‌​​‌​​‌‌​‌​‌‌‌​‌​‌‌‌​​‌‌​‌‌​​​‌‌‌‌​‌‌‌​‌​‌‌‌​​‌‌‌‌‌​​​‌‌​‌​‌​​‌‌‌‌​‌​​‌‌‌​‌‌‌‌​‌‌​‌‌‌‌​‌‌​​‌‌‌​‌​‌‌‌‌‌​‌‌​‌‌‌‌​‌‌​‌‌‌‌​‌‌‌‌‌​​‌‌‌‌‌‌​​‌‌​‌‌‌​​‌‌‌​‌‌‌‌​‌‌​‌‌‌‌​‌‌​​‌​​‌‌​​‌‌​​‌‌‌​​‌​​‌‌‌​​‌​​‌‌​‌​‌‌‌​‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌amera
everything is a game object
So if you look at it on the right side
this is a game object with specific things added to it
which makes it like sky and fog volume
So if we right click inside of our our key
we have create empty
So let's go ahead and do that
Let's create an empty game object
And as you can see
we have created a game object
So if we take a look at the right here
it's called a game object
We have a position in the space of our scene
but it's not really anything yet
So the way it works inside of Unity
and basically what you see in the expector
Is all the elements that have been added to this game object to make it a light
to make it a mesh
and so on and so forth
And the way you transform a base game object into something else
it's by adding a component
So if you click Add component
you have all these elements that you can add to the game object to make it something else
So let's say
for example
we wanted to make it a light
We could search for light and then add a light component
and now it's becoming a light
So now it has all the properties of a light that we can actually specify now for that specific game object
And you can continue down this path by adding anything here
So if you don't want this game object to be a light
you can actually remove that component
And then let's say
for example
we want it to be a 3D object
So therefore
we can have a mesh renderer to it
Then we added the mesh renderer
and now it can become a 3D object
So if you take a look at all the other objects that we have and are seen
it has specific components to make it a main camera on this case
And it has all the elements of a camera
We have an audio listener
which is another component for this camera
So the next time you look at a very complicated scene like the one that we have in our test
you can see that we have multiple game objects
which has multiple components to make it that specific item
But at the end of the day
all of it is a game object

### 04-02 - The asset store and package manager

There are two sections you need to be aware of when looking for packages and assets
the Asset Store and the package manager
Let's explore both
You can find the package manager by clicking on Window and Package Manager
The package manager installs native packages based on how you started the project
For instance
in our case
you see all the package that were installed here
If you add created another project
say a 2D game
different ​‌​‌​​‌‌​​‌‌​​‌‌‌​​‌​​‌‌​‌​‌​​‌‌​​‌‌​​‌‌‌​‌‌‌‌​‌​​​‌​​‌‌‌‌​‌​​‌‌‌​​‌​​‌‌​‌​‌‌‌​‌​​‌‌‌‌​‌​​​‌​​‌‌‌‌‌‌​​‌‌‌‌​‌‌‌​‌​‌​‌​​‌‌‌‌‌‌​​‌‌​​​‌​​‌‌​​‌‌‌‌​‌​‌​‌​​‌‌‌​​‌​​‌‌​​​‌​​‌‌​‌‌‌‌‌​‌​‌​‌​​‌‌​‌​‌‌‌​‌‌​‌‌​​‌‌‌‌‌​​​‌‌‌​‌‌​​‌‌‌​‌‌‌‌​‌‌‌‌‌​​‌‌‌‌‌​​​‌‌‌‌‌‌​​‌‌​​‌‌​​‌‌​​‌‌‌‌​‌‌‌​‌​​‌‌‌‌​‌‌‌​‌​​​‌​​‌‌‌​​‌​​‌‌‌‌​‌‌‌​‌‌​‌‌​​‌‌​‌‌‌‌‌​‌​‌​‌‌‌​‌‌‌‌‌​​‌‌‌‌​‌​​‌‌‌​​‌‌‌​‌​‌‌‌​​‌‌‌​‌‌​​‌‌‌​​‌‌‌​‌‌‌‌​​​‌‌‌‌‌‌​​‌‌​​​‌​​‌‌‌​​‌​​‌‌​‌​‌‌‌​‌​‌‌‌​​‌‌‌‌‌​​​‌‌​‌‌‌‌‌​‌‌‌​‌​​‌‌‌‌​‌‌‌​‌​​​‌​​‌‌​‌​‌‌‌​‌​​‌‌‌‌​‌​‌​‌​​‌‌​‌‌‌‌‌​‌‌‌​‌​​‌‌​​‌‌‌‌​‌​‌​‌‌‌​‌‌‌​‌‌‌​‌​‌‌​​​‌‌‌​‌‌‌‌​‌‌‌‌‌​​‌‌​‌​‌‌‌​‌‌‌​‌​​‌‌​‌‌‌‌‌​‌​​‌‌‌‌​‌​‌​‌​​‌‌​‌​‌‌‌​‌‌​​‌‌‌​‌‌‌​‌‌‌​‌‌‌​‌​​‌‌‌‌​‌​​‌‌‌​​‌‌‌​‌​​‌‌​​‌‌‌​​‌​​‌‌‌‌​‌​​‌‌​​‌‌​​‌‌​​‌‌​​‌‌​‌‌‌‌‌​‌‌‌​‌​​‌‌‌‌​‌‌‌​‌‌​​‌​​‌‌‌‌​‌​​‌‌‌‌​‌‌‌​‌‌‌​‌‌‌​‌‌‌​‌‌‌​‌​​‌‌​​‌‌​‌‌‌​​‌‌​​‌‌‌‌​‌‌​​‌​​‌‌​‌​‌‌‌​‌‌​‌‌‌‌​‌​‌​‌‌‌​‌​​‌‌‌‌​‌‌​‌‌‌‌​‌​​‌‌​​‌‌‌‌​‌​​‌‌​‌‌​​​‌‌​‌​‌​​‌‌‌‌‌​​​‌‌‌​‌‌‌‌​‌‌‌​‌‌‌​‌‌‌​‌‌‌​‌‌​​‌​​‌‌​‌​‌‌‌​‌​‌‌‌​​‌‌​‌‌​​​‌‌‌‌​‌‌‌​‌​‌‌‌​​‌‌‌‌‌​​​‌‌​‌​‌​​‌‌‌‌​‌​​‌‌‌​‌‌‌‌​‌‌​‌‌‌‌​‌‌​​‌‌‌​‌​‌‌‌‌‌​‌‌​‌‌‌‌​‌‌​‌‌‌‌​‌‌‌‌‌​​‌‌‌‌‌‌​​‌‌​‌‌‌​​‌‌‌​‌‌‌‌​‌‌​‌‌‌‌​‌‌​​‌​​‌‌​​‌‌​​‌‌‌​​‌​​‌‌‌​​‌​​‌‌​‌​‌‌‌​‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌packages would have been installed
But you can also install any of the packages based on your needs
For instance
if you need Text Mesh Pro
you can also install this particular one here or remove any of the packages inside of that project
Let's close package Manager
and now let's open the Asset Store
So you can click on Window and then Asset Store 1
Notethe first time you open Asset Store
you're going to see this message
the Asset Store as move
All you have to do is click on always open in browser from menu and then search online
And then the next time you actually open Asset stores
So let's close it
It's going to open a browser window like this
The Asset Store is where Unity and other creators offer plugins
3D objects
materialsand everything in between
So you can actually enhance your game or to the 3D content created in Unity
you can access it from the menu from now on
and it's going to open the browser window
Feel free to explore both the Asset Store and the package manager to see what is available and what you can do


### 04-03 - Guidelines for asset import

When importing assets into Unity
and depending on the assets
you need to be aware of a few elements to be able to successfully import your assets and avoid issues down the road
In most cases
the assets will be created outside of Unity and then imported into the program
And this is what we'll do later on
Let's explore what these elements are
First
you want to make sure you keep your 3D object or meshes with a low polygon count
And as a clean model
your 3D models need to have a clean topology
And what we mean by this is simply that when you look at the model
its surface polygons are even and well distributed across the mesh
When 3D modelers or yourself create your models
you want to make sure you have them snap to the origin or at 0
0
This will help bring them into unity
And then you'll have the models at the origin of your scene where you can position them afterwards
You also need to have U V's map for your models for the texture and lightmap channels
But if you only have a texture channel
unity will create the lightmap for you
When you use textures
​‌​‌​​‌‌​​‌‌​​‌‌‌​​‌​​‌‌​‌​‌​​‌‌​​‌‌​​‌‌‌‌‌‌​​‌‌​​​‌​​‌‌​​​‌​​‌‌​​‌‌‌‌​‌​‌​‌‌‌​‌​​‌‌‌‌​‌​​​‌​​‌‌‌‌‌‌​​‌‌‌‌​‌‌‌​‌​‌​‌​​‌‌‌‌‌‌​​‌‌​​​‌​​‌‌​​‌‌‌‌​‌‌‌​‌‌‌​‌‌​‌‌‌‌​‌​​​‌​​‌‌‌​‌‌‌‌​‌​‌​‌​​‌‌​‌​‌‌‌​‌‌​‌‌​​‌‌‌‌‌​​​‌‌‌​‌‌​​‌‌‌​‌‌‌‌​‌‌‌‌‌​​‌‌‌‌‌​​​‌‌‌‌‌‌​​‌‌​​‌‌​​‌‌​​‌‌‌‌​‌‌‌​‌​​‌‌‌‌​‌‌‌​‌​​​‌​​‌‌‌​​‌​​‌‌‌​‌‌‌‌​‌‌​‌‌​​‌‌​​‌‌‌‌​‌​‌‌‌​​‌‌‌‌‌‌​​‌‌‌‌​‌​​‌‌‌​​‌‌‌​‌​‌‌‌​​‌‌​‌​‌‌‌​‌‌‌​‌‌‌​‌‌‌‌​​​‌‌​‌​‌‌‌​‌​​​‌​​‌‌‌​​‌​​‌‌​‌​‌‌‌​‌​‌‌‌​​‌‌‌‌‌​​​‌‌​‌‌‌‌‌​‌‌‌​‌​​‌‌‌‌​‌‌‌​‌​​​‌​​‌‌​‌​‌‌‌​‌​​‌‌​​‌‌​‌​‌​​‌‌​‌‌‌‌‌​‌‌‌​‌​​‌‌​​‌‌‌‌​‌​‌​‌‌‌​‌‌‌​‌‌‌​‌​‌‌​​​‌‌‌​‌‌‌‌​‌‌​​‌​​‌‌​‌​‌‌‌​‌‌​​‌‌‌​‌​‌‌‌‌‌​‌​​‌‌‌‌​‌​‌​‌​​‌‌​‌​‌‌‌​‌‌​​‌‌‌​‌‌‌​‌‌‌​‌‌‌​‌​​‌‌‌‌​‌​​‌‌‌​​‌‌‌​‌​​‌‌​​‌‌‌​​‌​​‌‌‌‌​‌​​‌‌​​‌‌​​‌‌​​‌‌​​‌‌​‌‌‌‌‌​‌‌​​‌​​‌‌‌‌​‌‌‌​‌​​‌‌‌‌​‌‌‌​‌‌‌​‌‌‌​‌‌‌​‌‌‌​‌‌‌​‌‌‌​‌‌‌​‌​​‌‌​​‌‌​‌‌‌​​‌‌​​‌‌‌‌​‌‌​​‌​​‌‌​‌​‌‌‌​‌‌​‌‌‌‌​‌‌‌‌​​​‌‌‌‌​‌​​‌‌‌​‌‌‌‌​‌​‌‌​​​‌‌‌‌​‌​​‌‌​‌‌​​​‌‌​‌​‌​​‌‌‌‌‌​​​‌‌‌​‌‌‌‌​‌‌‌​‌‌‌​‌‌‌​‌‌‌​‌‌​​‌​​‌‌​‌​‌‌‌​‌​‌‌‌​​‌‌​‌‌​​​‌‌‌‌​‌‌‌​‌​‌‌‌​​‌‌‌‌‌​​​‌‌​‌​‌​​‌‌‌‌​‌​​‌‌‌​‌‌‌‌​‌‌​‌‌‌‌​‌‌​​‌‌‌​‌​‌‌‌‌‌​‌‌​‌‌‌‌​‌‌​‌‌‌‌​‌‌‌‌‌​​‌‌‌‌‌‌​​‌‌​‌‌‌​​‌‌‌​‌‌‌‌​‌‌​‌‌‌‌​‌‌​​‌​​‌‌​​‌‌​​‌‌‌​​‌​​‌‌‌​​‌​​‌‌​‌​‌‌‌​‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌you need to make sure the images are in equal width and height resolutions
For example
a 512 by 512024 by 2024
and in most cases
programs that focus on creating the textures
like Substance Painter
for example
will export a 2048 by 2048 image as a default
So no matter what size you export
make sure your textures are the same height and width
If you have animations attached to your models
you want to make sure they aren't too complex
Make sure you don't have too many keyframes in your animation
Let's quickly take a look at the file formats Unity supports When we import our 3D assets into Unity
Firstthere is Fbx
which is the format most commonly used to export out of most 3D programs
and this format supports the inclusion of textures
materialsanimation
and the 3D meshes in the same file
And most other formats will bring only the model
So in most cases
if you have the Fbx format export available
try to get your assets exported in this format for texture formats
Unity supports the following image formats
and in most cases you want to use Dot P and G as it is a high quality format and supports an alpha channel
you can also import PSD and Tif files into Unity with their layers
Too
Many more file formats will be accessible in Unity as the software continues to grow
So if you're curious about a new supporter format
check the documentation for more information
So keep these best practices top of mind to make sure we keep our imports light to maintain great performance of our projects within Unity
These tips will help you down the road when you start adding lights
special effects
and post-processing

### 04-04 - Import assets into Unity

So now that we have a good idea of what are th​‌​‌​​‌‌​​‌‌​​‌‌‌​​‌​​‌‌​‌​‌​​‌‌​​‌‌​​‌‌​​‌‌‌‌​‌​​​‌​​‌‌‌​‌‌‌‌​‌​​‌‌‌‌​‌​‌​‌‌‌​‌​​‌‌‌‌​‌​​​‌​​‌‌‌‌‌‌​​‌‌‌‌​‌‌‌​‌​‌​‌​​‌‌‌‌‌‌​​‌‌​​​‌​​‌‌​​‌‌‌‌​‌‌​​‌‌‌​‌​‌‌​​​‌‌​​​‌​​‌‌‌‌​‌​​‌‌​‌​‌​​‌‌​‌​‌‌‌​‌‌​‌‌​​‌‌‌‌‌​​​‌‌‌​‌‌​​‌‌‌​‌‌‌‌​‌‌‌‌‌​​‌‌‌‌‌​​​‌‌‌‌‌‌​​‌‌​​‌‌​​‌‌​​‌‌‌‌​‌‌‌​‌​​‌‌‌‌​‌‌‌​‌​​​‌​​‌‌‌​​‌​​‌‌​‌​‌‌‌​‌‌​‌‌​​‌‌‌​​‌​​‌‌​‌‌‌​​‌‌‌‌‌‌​​‌‌‌‌​‌​​‌‌‌​​‌‌‌​‌​‌‌‌​​‌‌‌‌​‌‌‌​‌​‌​‌‌‌​‌‌‌‌​​​‌‌‌​‌‌​​‌‌​​​‌​​‌‌‌​​‌​​‌‌​‌​‌‌‌​‌​‌‌‌​​‌‌‌‌‌​​​‌‌​‌‌‌‌‌​‌‌‌​‌​​‌‌‌‌​‌‌‌​‌​​​‌​​‌‌​‌​‌‌‌​‌​‌​‌​​‌‌​‌​‌​​‌‌​‌‌‌‌‌​‌‌‌​‌​​‌‌​​‌‌‌‌​‌​‌​‌‌‌​‌‌‌​‌‌‌​‌​‌‌​​​‌‌‌​‌‌‌‌​‌‌​​‌​​‌‌​‌​‌‌‌​‌​​‌‌‌‌​‌​‌‌‌‌‌​‌​​‌‌‌‌​‌​‌​‌​​‌‌​‌​‌‌‌​‌‌​​‌‌‌​‌‌‌​‌‌‌​‌‌‌​‌​​‌‌‌‌​‌​​‌‌‌​​‌‌‌​‌​​‌‌​​‌‌‌​​‌​​‌‌‌‌​‌​​‌‌​​‌‌​​‌‌​​‌‌​​‌‌​‌‌‌‌‌​‌​‌‌‌‌‌​‌‌‌​‌‌‌​‌​​‌‌​​‌‌‌​‌‌​​‌‌‌‌​‌‌‌​‌‌‌​‌‌‌​‌‌‌​‌‌‌​‌​​‌‌​​‌‌​‌‌‌​​‌‌​​‌‌‌‌​‌‌​​‌​​‌‌​‌​‌‌‌​‌‌​‌‌‌‌​‌‌‌‌​​​‌‌‌‌‌‌​​‌‌‌​‌‌‌‌​‌‌‌‌‌​​‌‌‌‌​‌​​‌‌​‌‌​​​‌‌​‌​‌​​‌‌‌‌‌​​​‌‌‌​‌‌‌‌​‌‌‌​‌‌‌​‌‌‌​‌‌‌​‌‌​​‌​​‌‌​‌​‌‌‌​‌​‌‌‌​​‌‌​‌‌​​​‌‌‌‌​‌‌‌​‌​‌‌‌​​‌‌‌‌‌​​​‌‌​‌​‌​​‌‌‌‌​‌​​‌‌‌​‌‌‌‌​‌‌​‌‌‌‌​‌‌​​‌‌‌​‌​‌‌‌‌‌​‌‌​‌‌‌‌​‌‌​‌‌‌‌​‌‌‌‌‌​​‌‌‌‌‌‌​​‌‌​‌‌‌​​‌‌‌​‌‌‌‌​‌‌​‌‌‌‌​‌‌​​‌​​‌‌​​‌‌​​‌‌‌​​‌​​‌‌‌​​‌​​‌‌​‌​‌‌‌​‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌e best practices for imports as well as what we can import
let's go ahead and import the meshes into our project
There are three ways to import assets into Unity
The first one is clicking on assets here and then import new asset
The second one is if you want to grab a file directly from a folder
And in this case
this is what we're going to do
You click on that folder
you select your asset
In this case
what we're going to do is bring the French country kitchen and you drag and drop into your scene or your assets
The third way is the way we've seen before
If you want to open your project
So let's say we go into Unity Hub right here
and we find the folder for our project
which is right here
You can drag and drop assets into the assets folder right here
So the best way for me and the way that I would recommend is to drag and drop into the projects and let Unity figure out what he wants to do with those files
just in case there's some things that needs to happen in the background in a new version or a later version of Unity
So what I'm going to do is basically grab the folder that I had open
which is here
Let me bring it up to make it easier for us to see what's happening
like so
And then you want to go into the assets here because in this case
we're bringing a 3D scene
a 3D model
or you can create a folder here in your project and create a folder for meshes and then drag and drop this mesh into that folder
It's up to you
So I'm just going to simply drag the asset into my assets here
So I'm going to do that now
grab this asset here
And as you drag it into the window here
you're going to see applause release
And now it's going to bring my 3D asset in here
So we can bring back Unity here
As soon as it's done
it's going to appear in here as a mesh
So now we can drag and drop this into our scene
So as you saw before
it's not in our scene yet
but it's in our assets
If we delete it here in our assets
it's gone forever
But if we delete it in the arcy
it won't be gone forever
it's still going to be the asset
So let's go ahead and drag it into our scene like so
And now you can see it here
And what I'm going to do is position it at 0 0 0 just to make sure it's straight in the middle of the scene
So I'm going to click in the inspector in the transform area in the position
and I'm going to do 0 0
0like so
And now you can use the shortcuts that I told you about before
the QW EA SD with the right click to move inside of the scene
And let's go ahead and move into to the scene
And you're going to see now what we imported
So right now we have this scene here that is the kitchen
And if you want to remove these
all these elements
which are basically lights
what you could do is click on this element here
not to show all the little tags like so
And now you can see the scene and we can bring them back later on if you want
But I tend to remove them just a be able to see my scene in its full nature
And this is it
So if you move out
you're going to see we have another room here
we have all the appliances
we have two ovens and so on
so forth
So we're going to have fun with this one
There you go
so this is how you import assets into Unity
Let's move on

## 5. Applying Materials

以下是对内容的简体中文翻译,保留了特殊名称和个人名称的英文原文:

Autodesk interactive 着色器的作用:




### 05-01 - Introduction to materials


(Source:  [aliyun.com: 05-01 - Introduction to materials](https://tingwu.aliyun.com/doc/transcripts/82xz94ldvrm3qm6v))

Now let's talk about materials
But just a quick note
If you use the semble scene with the players and rooms
remove the meshes and imported the kitchen
your scene might look different than mine here
mostly because of the HD RP settings that came with the scene
So not to worry
we'll cover these settings when we talk about rendering further
So before we move on to discuss materials in the resources
I create a folder or a package that will import that includes all the materials
this one here
So let me show you how to import the nudity package here
And we've explored this a little bit in the previous video
So you go into assets and then import package
Or you could do import new asset
But in this case
it's a package
So import package
a custom package
And by the way
if ever you want to share your scene
your materials
or specific things from Unity to somebody else
you could do basically export package
And this is what I did to create the packages that we're going to use now
So if you click on export package
you can select basically anything that you want to export out of this particular scene
So let's say
for example
you wanted to have the settings from the other scene
the HDR P settings from the other scene
and you wanted to import it here because you've used this one as opposed to the sample scene
You could do that
So you could go into the other scene and just export the HDR P settings and then import it in this scene
So this is how it works when you want to export a package
So let's go ahead and import our package here
custom package and then let's go on the desktop exercise files resources and import the materials Und package
So what do you want to import from that package
In this case
all the materials
all the textures
everything that's part of that package import
So while we import
let's explore what materials are When working with the look of your objects
you have three elements
you have shaders
Shaders are how light reacts to an object
So now that we have our package
let me show you
If I go into materials and I select any of the materials here
let's say black glass
this is where the shader is
The shaders are how light reacts to an object
In Unity
you have several types of shaders and feel free to explore them in between videos
So if you look at the shaders here
you have all these different types of shaders
You have particles
you have VR on lit sprites
so on and so forth
In this case
what we're going to do is select an H Grp 1
and these are all the Hgr P shaders that you have
In this case
we have a lit one
then you have materials
Materials define how the surface of a model should be rendered and includes reference to the texture it uses
So the material is basically all these guys here
And then inside of our material
you have all these settings that basically tell how the light is actually applied to this and what are the texture files and so on and so forth
The third one are the texture files
The texture files are basically images that include the necessary information for a channel and are typically created by texturing software like Substance Painter
So if you look in the Materials folder and in the textures
we have all the textures for our seen here
So for example
we have the book texture
we have the granite white
we have the steel glossy
and so on and so forth
So if you want to increase
by the way
the size of your objects here
you can do this
And these are all the texture files
So we have our base color texture map
we have our height texture map
metal​‌​‌​​‌‌​​‌‌​​‌‌‌​​‌​​‌‌​‌​‌​​‌‌​​‌‌​​‌‌​‌​‌​​‌‌​​​‌​​‌‌​​‌‌​​‌‌‌​​‌​​‌‌​‌​‌‌‌​‌​​‌‌‌‌​‌​​​‌​​‌‌‌‌‌‌​​‌‌‌​‌‌‌‌​‌​‌​‌​​‌‌‌‌‌‌​​‌‌​​​‌​​‌‌​​‌‌‌‌​‌​‌‌‌‌‌​‌‌​​‌​​‌‌​​​‌​​‌‌​​‌‌​​‌‌​‌​‌​​‌‌​‌​‌‌‌​‌‌​‌‌​​‌‌‌‌‌​​​‌‌‌​‌‌​​‌‌‌​‌‌‌‌​‌‌‌‌‌​​‌‌‌‌​‌‌‌​‌‌‌‌‌​​‌‌​​‌‌​​‌‌​​‌‌‌‌​‌‌‌​‌​​‌‌‌‌​‌‌‌​‌​​​‌​​‌‌‌​​‌​​‌‌‌‌‌​​​‌‌‌​‌‌​​‌‌​‌‌‌‌‌​‌​‌​‌‌‌​‌‌‌‌‌​​‌‌‌‌​‌​​‌‌‌​​‌‌‌​‌​‌‌‌​​‌‌​​‌‌​​‌‌‌​​‌‌‌​‌‌‌‌​​​‌‌​​​‌​​‌‌​​​‌​​‌‌‌​​‌​​‌‌​‌​‌‌‌​‌​‌‌‌​​‌‌‌‌‌​​​‌‌​‌‌‌‌‌​‌‌‌​‌​​‌‌‌‌​‌‌‌​‌​​​‌​​‌‌​‌​‌‌‌​‌‌​‌‌​​‌‌​‌​‌​​‌‌​‌‌‌‌‌​‌‌‌​‌​​‌‌​​‌‌‌‌​‌​‌​‌‌‌​‌‌‌​‌‌‌​‌​‌‌​​​‌‌‌​‌‌‌‌​‌‌​​‌​​‌‌​‌​‌‌‌​‌​‌‌​​​‌‌​‌‌‌‌‌​‌​​‌‌‌‌​‌​‌​‌​​‌‌​‌​‌‌‌​‌‌​​‌‌‌​‌‌‌​‌‌‌​‌‌‌​‌​​‌‌‌‌​‌​​‌‌‌​​‌‌‌​‌​​‌‌​​‌‌‌​​‌​​‌‌‌‌​‌​​‌‌​​‌‌​​‌‌​​‌‌​​‌‌​‌‌‌‌‌​‌​‌​‌​​‌‌‌‌​‌‌‌​‌‌​​‌​​‌‌​‌‌‌​​‌‌‌‌​‌‌‌​‌‌‌​‌‌‌​‌‌‌​‌‌‌​‌​​‌‌​​‌‌​​‌‌​​‌‌​​‌‌‌‌​‌‌​​‌​​‌‌​‌​‌‌‌​‌‌​‌‌‌‌​‌​‌​‌‌‌​‌​‌‌​​​‌‌‌​‌‌‌‌​‌​​‌‌​​‌‌‌‌​‌​​‌‌​‌‌​​​‌‌​‌​‌​​‌‌‌‌‌​​​‌‌‌​‌‌‌‌​‌‌‌​‌‌‌​‌‌‌​‌‌‌​‌‌​​‌​​‌‌​‌​‌‌‌​‌​‌‌‌​​‌‌​‌‌​​​‌‌‌‌​‌‌‌​‌​‌‌‌​​‌‌‌‌‌​​​‌‌​‌​‌​​‌‌‌‌​‌​​‌‌‌​‌‌‌‌​‌‌​‌‌‌‌​‌‌​​‌‌‌​‌​‌‌‌‌‌​‌‌​‌‌‌‌​‌‌​‌‌‌‌​‌‌‌‌‌​​‌‌‌‌‌‌​​‌‌​‌‌‌​​‌‌‌​‌‌‌‌​‌‌​‌‌‌‌​‌‌​​‌​​‌‌​​‌‌​​‌‌‌​​‌​​‌‌‌​​‌​​‌‌​‌​‌‌‌​‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌lic normals
and the roughness texture map
And we're going to use this for creating a material shortly
Okay
so now we'll explore in the following video how to create your own material
Let's move on

### 05-02 - Creating and organizing new materials

If you haven't been following along
you wouldn't have a materials folder
So if that's the case
go ahead and create a Materials folder
This is very important to be organized in Unity because at one point
you're going to have multiple scenes leveraging assets across all these folders here
So you want to get organized very quickly
especially if you're in gaming or in architecture with multiple scenes
So now that we have a materials folder
let's go ahead and create a new material
And you do this by right clicking in the Materials folder
So I'm going to right click right here
select Create
and then Material
and I'm going to name this one test material because I'm not going to create any more materials after I'm going to leverage all the materials that I have in here
So test material
and I have this guy here
and I have all these elements for my test material
So this is what it looks like right now
So if you want to look at it from every angle
you can actually click and move it
And this is basically based on all the settings that we have in here
So before we continue exploring the types of shaders available
because that's the very first thing you need to do is select a shader
Let's explore what they are
Shaders are really different calculations to render the final look of your material based on the material configurations and lighting input
If this is a mouthful
you'll understand as we work with our shader
The type of shader changes the calculation and final rendering of the look
In most cases
you'll use the standard shader as it is a shader that tries to render real world objects such as stone
woodglass
plasticand metal
the HD
RP lit
and this is pre-selected based on the project that we're currently in
If you are in a 2D game
you would have different shaders available or preselected for you
So if you're using a material that isn't metallic
feel free to use the specular shader in if that doesn't make any sense
Nowthis is basically in here if you look at speculator
if you do a search for specular
you're going to see all the specular shader here
So you would use like the standard specular set up here as opposed to therp lit here
And if you want to see what's available here in HDR P
you can take a look here and go through all of these to find out which one offers specular shader
Okay
so now if you take a look at all the shaders
like we explore a bit earlier
if you apply any of them
So let's say for example
we go into particles
you can do a standard surface
You're going to see things change directly in your preview here
So if you go into HD RP again
and we select an eye
you're going to see your shader change to an eye
And then you can apply the textures to make it look like an eye
So now you can see that there's an actual sclera here
and you can make changes to that particular area
And then you can apply changes to that material
And then if you have a character with an eye mesh
you can then drag and drop that material into the eye
So you see that there's a lot of possibilities within the shaders
And feel free to explore or take a look at the documentation for best practices
So we're going to go back to HDR P
w​‌​‌​​‌‌​​‌‌​​‌‌‌​​‌​​‌‌​‌​‌​​‌‌​​‌‌​​‌‌​‌‌‌​​‌‌​​​‌​​‌‌‌​​‌​​‌‌​​‌‌‌‌​‌​‌​‌‌‌​‌​​‌‌‌‌​‌​​​‌​​‌‌‌‌‌‌​​‌‌‌​‌‌‌‌​‌​‌​‌​​‌‌‌‌‌‌​​‌‌​​​‌​​‌‌​​‌‌‌‌​‌‌​‌‌​​‌‌​‌‌​​​‌‌​​​‌​​‌‌​​‌‌‌‌​‌​‌​‌​​‌‌​‌​‌‌‌​‌‌​‌‌​​‌‌‌‌‌​​​‌‌‌​‌‌​​‌‌‌​‌‌‌‌​‌‌‌‌‌​​‌‌‌‌​‌‌‌​‌‌‌‌‌​​‌‌​​‌‌​​‌‌​​‌‌‌‌​‌‌‌​‌​​‌‌‌‌​‌‌‌​‌​​​‌​​‌‌‌​​‌​​‌‌‌​‌‌‌‌​‌‌​‌‌​​‌‌‌‌‌‌​​‌‌​‌‌‌​​‌‌‌‌‌‌​​‌‌‌‌​‌​​‌‌‌​​‌‌‌​‌​‌‌‌​​‌‌‌​​‌‌‌​‌​‌​‌‌‌​‌‌‌‌​​​‌‌‌‌​‌‌‌​‌​​​‌​​‌‌‌​​‌​​‌‌​‌​‌‌‌​‌​‌‌‌​​‌‌‌‌‌​​​‌‌​‌‌‌‌‌​‌‌‌​‌​​‌‌‌‌​‌‌‌​‌​​​‌​​‌‌​‌​‌‌‌​‌‌​‌‌‌‌​‌​‌​‌​​‌‌​‌‌‌‌‌​‌‌‌​‌​​‌‌​​‌‌‌‌​‌​‌​‌‌‌​‌‌‌​‌‌‌​‌​‌‌​​​‌‌‌​‌‌‌‌​‌​​‌‌‌‌​‌​‌​‌‌‌​‌‌‌‌​​​‌‌​‌‌‌‌‌​‌​​‌‌‌‌​‌​‌​‌​​‌‌​‌​‌‌‌​‌‌​​‌‌‌​‌‌‌​‌‌‌​‌‌‌​‌​​‌‌‌‌​‌​​‌‌‌​​‌‌‌​‌​​‌‌​​‌‌‌​​‌​​‌‌‌‌​‌​​‌‌​​‌‌​​‌‌​​‌‌​​‌‌​‌‌‌‌‌​‌​‌​‌​​‌‌‌‌​‌‌‌​‌​​‌‌​​‌‌‌‌‌​​​‌‌‌‌​‌‌‌​‌‌‌​‌‌‌​‌‌‌​‌‌‌​‌​​‌‌​​‌‌​​‌‌​​‌‌​​‌‌‌‌​‌‌​​‌​​‌‌​‌​‌‌‌​‌‌​‌‌‌‌​‌‌‌‌​​​‌‌‌​‌‌​​‌‌‌​‌‌‌‌​‌‌‌​‌​​‌‌‌‌​‌​​‌‌​‌‌​​​‌‌​‌​‌​​‌‌‌‌‌​​​‌‌‌​‌‌‌‌​‌‌‌​‌‌‌​‌‌‌​‌‌‌​‌‌​​‌​​‌‌​‌​‌‌‌​‌​‌‌‌​​‌‌​‌‌​​​‌‌‌‌​‌‌‌​‌​‌‌‌​​‌‌‌‌‌​​​‌‌​‌​‌​​‌‌‌‌​‌​​‌‌‌​‌‌‌‌​‌‌​‌‌‌‌​‌‌​​‌‌‌​‌​‌‌‌‌‌​‌‌​‌‌‌‌​‌‌​‌‌‌‌​‌‌‌‌‌​​‌‌‌‌‌‌​​‌‌​‌‌‌​​‌‌‌​‌‌‌‌​‌‌​‌‌‌‌​‌‌​​‌​​‌‌​​‌‌​​‌‌‌​​‌​​‌‌‌​​‌​​‌‌​‌​‌‌‌​‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌e're going to select
in this case
the Autodesk interactive
and then Autodesk here because we're going to need that when we actually go and add our maps here that we have in our textures folder
So we'll start working on our material in the next video

### 05-03 - Material and texture properties

(Source:  [aliyun.com: 05-03 - Material and texture properties](https://tingwu.aliyun.com/doc/transcripts/ro84nrm4ajyxqkb3))

Let's add textures to our new material while we explore all the settings we can work with
As a quick note
if you're exploring with your own model and textures and you have any texture maps from a 3D program like Substance Painter
feel free to pause a lesson now and import them into the texture folder and add them to the proper maps here in the material you'll create for everybody else
Let's take a look at what we have
So if you're following along
you should have your material open here
And what I did
I clicked on the folder steel glossy as an example
and I basically shrunk the list here to this size here
so I can see all the different maps
So these are all the texture maps that were exported from a program like Substance Painter
So we'll add the first one here
the base color
So as we add the texture maps to a material
let's spend more time to understand what each does to an object
Let's start with the base color base color is the color of your material
the base color
So what we do is click here
grab base color
and drag and drop right here
So that's your base color
The next one is the metallic setting in 3D when creating textures and the images associated with it
you'll either get a specular map or a metallic map
which are associated with how reflective or metallic your object is
The way to add the map is to basically grab the metallic map added here and then crosscheck like so
And like we did in the past
you can actually explore how your 3D objects would look if you were to apply this material
The next one is the roughness
roughness is how smooth or rugged our new material is
The higher the level
the smoother the surface is
In the case of our new material
we have a grayscale map that determines this and we can add it to
So if we go into our files here
we have this one that's called roughness
so we look for roughness here on our material and we can grab
The map here and apply through here
So if you don't want to apply a map
you can cross check here and apply it through a settings like so
And it's going to make it more rough or less rough
So let's say
for example
you have a glass
A glass is usually less rough if you have a terrain or if you have anything else
it's usually more rough
And in this case
it would reflect less light
But in this case
we'll apply the map like so
The next one is the normal map
The normal map is the one that adds details to the geometry of an object
So we have it right here
So we can drag and drop it into our normals here and apply it to
in the case of our new material here
we add no geometry because it's a smooth surface
And therefore
we add this map that has this color here
If you want to know more about normals
you can research it on Google or take a look at the documentation in Uni
Now
if we scroll down
we have two more that we're not going to use on this specific object
so we would be ready to drag and drop this steel glossy look into her scene
But we have two more settings here
The first one is a missive
Emission should be clicked and used only when your object is a source of lighting
and then add the color of a map of the light being emitted
We could use this on the labs
for instance
so you would click here and then add a color here like so
But we're not using this one
And the last one is an occlusion map
The occlusion map adds even more realism by defining how the light should react to your object should it receive low or high indirect lighting
but we don't have one in this case
And last but not least
if you ever have issues where the map looks weird on your scene
you probably have tiling and offset issues
So you can work on these with these two here
So let's say
for example
your map is a map of a book
We're going to use one of those later on
The book doesn't look the way it was texture in your other program
Wellyou probably have a scaling problem here
So you could change the scale to make sure the book is sized properly with the map
Or you may have an offset that you need to​‌​‌​​‌‌​​‌‌​​‌‌‌​​‌​​‌‌​‌​‌​​‌‌​​‌‌​​‌‌‌​​‌‌‌​‌​​​‌​​‌‌​​‌‌​​‌‌​​‌‌‌‌​‌​‌​‌‌‌​‌​​‌‌‌‌​‌​​​‌​​‌‌‌‌‌‌​​‌‌‌​‌‌‌‌​‌​‌​‌​​‌‌‌‌‌‌​​‌‌​​​‌​​‌‌​​‌‌‌‌​‌‌​​‌‌‌​‌‌​‌‌‌‌​‌​​​‌​​‌‌‌​​‌​​‌‌​‌​‌​​‌‌​‌​‌‌‌​‌‌​‌‌​​‌‌‌‌‌​​​‌‌‌​‌‌​​‌‌‌​‌‌‌‌​‌‌‌‌‌​​‌‌‌‌​‌‌‌​‌‌‌‌‌​​‌‌​​‌‌​​‌‌​​‌‌‌‌​‌‌‌​‌​​‌‌‌‌​‌‌‌​‌​​​‌​​‌‌‌​​‌​​‌‌‌‌‌‌​​‌‌‌​‌‌​​‌‌​‌‌‌‌‌​‌​‌‌‌​​‌‌‌‌‌‌​​‌‌‌‌​‌​​‌‌‌​​‌‌‌​‌​‌‌‌​​‌‌‌‌​‌‌‌​‌‌‌​‌‌‌​‌‌‌‌​​​‌‌‌​​‌‌‌​‌​​​‌​​‌‌‌​​‌​​‌‌​‌​‌‌‌​‌​‌‌‌​​‌‌‌‌‌​​​‌‌​‌‌‌‌‌​‌‌‌​‌​​‌‌‌‌​‌‌‌​‌​​​‌​​‌‌​‌​‌‌‌​‌‌‌​‌‌‌​‌​‌​‌​​‌‌​‌‌‌‌‌​‌‌‌​‌​​‌‌​​‌‌‌‌​‌​‌​‌‌‌​‌‌‌​‌‌‌​‌​‌‌​​​‌‌‌​‌‌‌‌​‌‌​​‌​​‌‌​‌​‌‌‌​‌‌‌​‌‌‌​‌​‌‌‌‌‌​‌​​‌‌‌‌​‌​‌​‌​​‌‌​‌​‌‌‌​‌‌​​‌‌‌​‌‌‌​‌‌‌​‌‌‌​‌​​‌‌‌‌​‌​​‌‌‌​​‌‌‌​‌​​‌‌​​‌‌‌​​‌​​‌‌‌‌​‌​​‌‌​​‌‌​​‌‌​​‌‌​​‌‌​‌‌‌‌‌​‌​‌‌‌‌‌​‌‌‌​‌‌‌​‌​​‌‌‌‌​‌‌​‌‌​​‌‌‌‌​‌‌‌​‌‌‌​‌‌‌​‌‌‌​‌‌‌​‌​​‌‌​​‌‌​​‌‌​​‌‌​​‌‌‌‌​‌‌​​‌​​‌‌​‌​‌‌‌​‌‌​‌‌‌‌​‌‌‌‌​​​‌‌​‌‌​​​‌‌‌​‌‌‌‌​‌‌​‌‌‌‌​‌‌‌​‌​​‌‌​‌‌​​​‌‌​‌​‌​​‌‌‌‌‌​​​‌‌‌​‌‌‌‌​‌‌‌​‌‌‌​‌‌‌​‌‌‌​‌‌​​‌​​‌‌​‌​‌‌‌​‌​‌‌‌​​‌‌​‌‌​​​‌‌‌‌​‌‌‌​‌​‌‌‌​​‌‌‌‌‌​​​‌‌​‌​‌​​‌‌‌‌​‌​​‌‌‌​‌‌‌‌​‌‌​‌‌‌‌​‌‌​​‌‌‌​‌​‌‌‌‌‌​‌‌​‌‌‌‌​‌‌​‌‌‌‌​‌‌‌‌‌​​‌‌‌‌‌‌​​‌‌​‌‌‌​​‌‌‌​‌‌‌‌​‌‌​‌‌‌‌​‌‌​​‌​​‌‌​​‌‌​​‌‌‌​​‌​​‌‌‌​​‌​​‌‌​‌​‌‌‌​‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌ offset the map a little bit to the left
to the right
up or down with the x and y axis
So now that we've explored materials and details
and before we move on to the next video
feel free to play around with them to achieve your desired look in your own projects

## 6. Prefabs

### 06-01 - What are Prefabs
------------------------
 If you've read or watched anything related to Unity

 you may have heard of this term

 Prefabs

 A prefab in its simplest form is a template from which you can create multiple instances of the same object

 keeping all its properties

 And when you need to make a change to an instance

 you simply update the prefab and all its children will be updated

 Typically

 prefabs are used for props or Npcs

 which is short for non-player character

 So for e​‌​‌​​‌‌​​‌‌​​‌‌​‌​‌​​‌‌​‌‌​​​‌‌​​‌‌​​‌‌‌‌​‌‌‌​‌​​​‌​​‌‌​‌​‌‌‌​‌‌​​‌‌‌​‌​‌​‌‌‌​‌​​‌‌‌‌​‌​​​‌​​‌‌‌‌‌‌​​‌‌‌‌​‌​​‌‌​‌​‌​​‌‌‌‌‌‌​​‌‌​​​‌​​‌‌​​‌‌‌‌​‌‌‌​‌‌‌​‌‌‌‌​​​‌‌​​‌‌‌‌​‌​‌‌‌‌‌​‌​‌​‌​​‌‌‌​‌‌‌‌​‌​​‌‌‌‌​‌‌‌‌​​​‌‌‌​‌‌​​‌‌‌​‌‌‌‌​‌‌‌‌‌​​‌‌​​‌‌‌‌​‌‌‌‌‌​​‌‌​​‌‌​​‌‌​​‌‌‌‌​‌‌‌​‌​​‌‌‌​​‌​​‌‌‌‌​‌‌‌​‌‌​​‌​​‌‌‌​​‌‌‌​‌‌​‌‌​​‌‌​‌​‌​​‌‌​‌‌‌‌‌​‌‌‌‌‌​​‌‌‌‌​‌​​‌‌‌​​‌‌‌​‌​‌‌‌​​‌‌​‌​‌‌‌​‌‌‌​‌​​‌‌‌​​‌‌‌​‌​​‌‌​​‌‌​​​‌​​‌‌​‌​‌​​‌‌​​​‌​​‌‌​‌‌‌​​‌‌‌‌‌​​​‌‌​‌‌‌‌‌​‌‌‌​‌​​‌‌‌‌​‌‌‌​‌​‌‌‌​​‌‌​‌​‌‌‌​‌‌​‌‌​​‌‌​‌​‌​​‌‌‌​​‌‌‌​‌‌‌​‌​​‌‌​​‌‌‌‌​‌​‌​‌‌‌​‌‌‌​‌‌‌​‌​‌‌​​​‌‌‌​‌‌‌‌​‌‌‌‌‌​​‌‌​‌​‌‌‌​‌‌‌‌‌​​‌‌​‌‌‌‌‌​‌​​‌‌‌‌​‌​‌​‌​​‌‌​‌​‌‌‌​‌‌​​‌‌‌​‌‌‌​‌‌‌​‌‌‌​‌​​‌‌‌‌​‌​​‌‌‌​​‌‌‌​‌​​‌‌​​‌‌‌​​‌​​‌‌‌‌​‌​​‌‌‌‌‌​​​‌‌​‌‌​​​‌‌​‌‌‌‌‌​‌‌​‌‌​​‌‌​‌​‌​​‌‌​‌‌​​​‌‌‌‌​‌‌‌​‌‌‌​‌‌‌​‌‌‌​‌‌‌​‌‌‌​‌‌‌​‌​​‌‌​​‌‌‌​​‌​​‌‌​​‌‌‌‌​‌‌​​‌​​‌‌​‌​‌‌‌​‌‌​‌‌‌‌​‌​‌‌​​​‌‌​‌‌‌‌‌​‌‌​‌‌‌‌​‌‌​​‌‌‌​‌‌‌​‌​​‌‌‌‌​‌‌‌​‌‌‌​‌​​‌‌‌‌‌​​​‌‌‌​‌‌‌‌​‌‌‌​‌‌‌​‌‌‌​‌‌‌​‌‌​​‌​​‌‌​‌​‌‌‌​‌​‌‌‌​​‌‌​‌‌​​​‌‌‌‌​‌‌‌​‌​‌‌‌​​‌‌‌‌‌​​​‌‌​‌​‌​​‌‌‌‌​‌​​‌‌‌​‌‌‌‌​‌‌​‌‌‌‌​‌‌​​‌‌‌​‌​‌‌‌‌‌​‌‌​‌‌‌‌​‌‌​‌‌‌‌​‌‌‌‌‌​​‌‌‌‌‌‌​​‌‌​‌‌‌​​‌‌‌​‌‌‌‌​‌‌​‌‌‌‌​‌‌​​‌​​‌‌​​‌‌​​‌‌‌​​‌​​‌‌‌​​‌​​‌‌​‌​‌‌‌​‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌xample

 if you want to create a forest with dozens of similar trees

 prefabs are perfect for this

 You can create a play or prefab if you'd like to

 but since the game typically only has a single character instance

 this might not be useful

 You can also nest prefabs and create variations within these nested branches of your rrq

 For example

 if you wanted to create two different sets of trees with dozens of children

 eat but one set with green leaves and the other one with blue leaves

 you could do it

 In other words

 you can override nested branches of your prefabs and then create variations for those branches so your forest isn't made only of one type of tree

 but many variations

 What you don't realize is that we already created one without knowing when we imported the kitchen model into a project folder

 we created a prefab

 and you can tell it is a prefab by looking at the arty

 where the kitchen portion has a blue icon

 therefore is a prefab

 We'll explore all these different aspects of prefabs in this chapter



### 06-02 - Creating Prefabs
------------------------
 
 
(Source:  [aliyun.com: 06-02 - Creating Prefabs](https://tingwu.aliyun.com/doc/transcripts/r28pn74ppwxen5mz))
Okay

 so let's go ahead and create our first prefab

 Wellin fact

 we already did create our first prefab because when we dropped the model into a scene

 this is a prefab and you can see it through the blue areas here

 So let's go ahead and create a Prefabs folder because I tend to want to drop all my Prefabs into a specific folder so I can be organized

 So let's go ahead and click on the assets in the project folder

 right click Create folder

 and then call this folder Prefab

 So the way to create a prefab is very simple

 You grab the object in the scene or in the arcy that you want to create a prefab from

 and you drop it inside your assets

 in this case

 in our Prefabs folder

 So we're going to select our Prefabs folder

 We want to make sure you're inside of there

 And then what I want to select is the book here

 this book right here

 So if you don't have this open

 it's basically inside of our prefab here inside of French Country Kitchen

 and then accessories

 And you'll find the book If you want to get closer to it

 you can double click on the book or you can use the navigation shortcuts

 the right click qwe ASD

 and so on

 so forth

 So now that I have this selected

 I can drag and drop the book into my folder and create the prefab FYI this is an error that could occur if your main asset is a prefab

 And this is good that we have this error because right now we have our asset that we dropped into our scene

 This is a prefab

 but this is also part of that prefab

 so we need to unpack this one

 So we can create a prefab out of the book

 So let me show you how you can do that because you're going to have this Sarah two if you're follow along

 So let's go ahead and click on okay

 And what we need to do is go at the parent level of the prefab that we created

 right click

 select prefab

 and then unpack completely

 So now everything is white as opposed to blue

 The French country kitchen is no longer a prefab

 Now we can create a prefab out of the book

 So we select the book

 drag and drop into our Prefabs folder

 and there you go

 you have your prefab for the book

 And now what we could do is add a materials to the book

 so let's go ahead and do that

 We're going to go into our materials here and grab one of the three materials book and drag and drop into our book like so

 And you see our first material

 So now that we have this

 we could literally have another book directly created from our prefab

 so we can grab this

 add another book into a scene like so

 And let's make sure that we can go to it because I don't want the book to be right in the middle of a scene like this

 So what am I going to do is grab the book and bring it this little piece of furniture here

 So I'm going to use the arrows like this

 bring it closer to where I want it to be

 Like so

 And we can add a little bit of style to it if we want

 So we can actually use one of the other keys

 And remember

 these are the shortcuts QW ERT to have these actions that you can do on a specific object

 So in this case

 I want to move it a little bit like so

 And then as you can see

 we create our prefab

 but there's no materials applied to this one

 So we could actually go into our materials

 grab book number 2

 And have this material specific to this book as opposed to the same that we have over​‌​‌​​‌‌​​‌‌​​‌‌​‌​‌​​‌‌​‌‌​​​‌‌​​‌‌​​‌‌​‌​‌​​‌‌​​​‌​​‌‌‌‌​‌‌‌​‌‌​​‌‌‌​‌​‌​‌‌‌​‌​​‌‌‌‌​‌​​​‌​​‌‌‌‌‌‌​​‌‌‌‌​‌​​‌‌​‌​‌​​‌‌‌‌‌‌​​‌‌​​​‌​​‌‌​​‌‌‌‌​‌‌‌​‌​​‌‌‌‌‌​​​‌‌​​‌‌‌‌​‌‌‌​‌​​‌‌​‌​‌​​‌‌‌​‌‌‌‌​‌​​‌‌‌‌​‌‌‌‌​​​‌‌‌​‌‌​​‌‌‌​‌‌‌‌​‌‌‌‌‌​​‌‌​​‌‌‌‌​‌‌‌‌‌​​‌‌​​‌‌​​‌‌​​‌‌‌‌​‌‌‌​‌​​‌‌‌​​‌​​‌‌‌‌​‌‌‌​‌‌​​‌​​‌‌​‌‌‌​​‌‌‌​‌‌​​‌‌​‌‌​​​‌‌​‌‌‌‌‌​‌‌‌‌‌​​‌‌‌‌​‌​​‌‌‌​​‌‌‌​‌​‌‌‌​​‌‌​‌‌‌‌‌​‌‌​‌‌‌‌​‌‌​​‌‌‌​‌​​‌‌‌‌​‌​​​‌​​‌‌​‌​‌​​‌‌​​​‌​​‌‌​‌‌‌​​‌‌‌‌‌​​​‌‌​‌‌‌‌‌​‌‌‌​‌​​‌‌‌‌​‌‌‌​‌​‌‌‌​​‌‌​‌​‌‌‌​‌‌‌​‌‌‌​‌​‌​‌​​‌‌​​‌‌‌‌​‌‌‌​‌​​‌‌​​‌‌‌‌​‌​‌​‌‌‌​‌‌‌​‌‌‌​‌​‌‌​​​‌‌‌​‌‌‌‌​‌‌‌​‌​​‌‌​‌​‌‌‌​‌​‌​‌​​‌‌​‌‌‌‌‌​‌​​‌‌‌‌​‌​‌​‌​​‌‌​‌​‌‌‌​‌‌​​‌‌‌​‌‌‌​‌‌‌​‌‌‌​‌​​‌‌‌‌​‌​​‌‌‌​​‌‌‌​‌​​‌‌​​‌‌‌​​‌​​‌‌‌‌​‌​​‌‌‌‌‌​​​‌‌​‌‌​​​‌‌​‌‌‌‌‌​‌​‌​‌​​‌‌​‌​‌​​‌‌‌‌​‌​​‌‌​‌‌‌‌‌​‌‌‌​‌‌‌​‌‌‌​‌‌‌​‌‌‌​‌‌‌​‌​​‌‌​​‌‌‌​​‌​​‌‌​​‌‌‌‌​‌‌​​‌​​‌‌​‌​‌‌‌​‌‌​‌‌‌‌​‌​‌‌​​​‌‌​‌​‌​​‌‌‌​‌‌‌‌​‌‌​‌‌​​‌‌‌‌​‌​​‌‌‌‌​‌‌‌​‌‌‌​‌​​‌‌‌‌‌​​​‌‌‌​‌‌‌‌​‌‌‌​‌‌‌​‌‌‌​‌‌‌​‌‌​​‌​​‌‌​‌​‌‌‌​‌​‌‌‌​​‌‌​‌‌​​​‌‌‌‌​‌‌‌​‌​‌‌‌​​‌‌‌‌‌​​​‌‌​‌​‌​​‌‌‌‌​‌​​‌‌‌​‌‌‌‌​‌‌​‌‌‌‌​‌‌​​‌‌‌​‌​‌‌‌‌‌​‌‌​‌‌‌‌​‌‌​‌‌‌‌​‌‌‌‌‌​​‌‌‌‌‌‌​​‌‌​‌‌‌​​‌‌‌​‌‌‌‌​‌‌​‌‌‌‌​‌‌​​‌​​‌‌​​‌‌​​‌‌‌​​‌​​‌‌‌​​‌​​‌‌​‌​‌‌‌​‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌ there

 So this is a very quick way to create multiple copies

 like I explained with the trees example of a specific mesh

 and then apply different materials

 Or if you want

 you can actually create copies of this one and have the same materials applied to it

 So feel free to play with the 3D objects

 create more prefabs

 add more items to the scene

 and let's move on after that



### 06-03 - Edit instances of the Prefab
------------------------
 Okay

 so let's explore more about prefabs

 What if you wanted instances of the prefab we added to the scene to be different from the main prefab

 This is where you can use instance overrides

 and let me show you how it works

 So right now

 and I've seen we have this one prefabs

 right

 And we have two instances of that prefab with different materials

 So what if we wanted to have a prefab that was different from these guys here

 So let's do that

 So what I would do is grab

 let's say

 this book here and drag and drop it into our prefabs

 So for now

 let's go ahead and create an original prefab

 we'll talk about prefab variants in the next video

 Now I would have this prefab in our Prefabs folder

 and I could drag and drop this particular object anywhere in our scene

 and it would be basically this book here

 So if I switch to the Move tool

 you see that this is the same book

 it's from this prefab

 and if I add another book here

 this is the original prefab

 rightbut doesn't have a material

 So let's delete that from the scene

 And I could actually change the material on this one

 If I want to

 And this is where we would create the instance overrides of this prefab

 it would still remain part of this prefab

 So if I make major change to this book

 let's say I changed the shader on it

 it would apply to all these two prefabs

 But I could have an instance override where I changed the metro on this one

 So let me go ahead and position it where I want it to be furs

 So let's say we want it

 actuallylet's put it here like so

 and change the direction just a bit to make it more interesting without touching the other mesh here

 And then let's change the material on this one

 So I can go into the materials and I have book 3 that could apply to it and drag it

 drop it into this particular book

 So I have an override

 but yet the prefab is part of this guy here

 which is in our Prefabs folder

 So you understand how prefabs work

 L​‌​‌​​‌‌​​‌‌​​‌‌​‌​‌​​‌‌​‌‌​​​‌‌​​‌‌​​‌‌‌​‌‌‌‌​‌​​​‌​​‌‌​‌​‌​​‌‌‌​‌‌​​‌‌​‌​‌‌‌​‌​​‌‌‌‌​‌​​​‌​​‌‌‌‌‌‌​​‌‌‌‌​‌​​‌‌​‌​‌​​‌‌‌‌‌‌​​‌‌​​​‌​​‌‌​​‌‌‌‌​‌‌‌‌‌​​‌‌‌‌‌​​​‌‌​​‌‌‌‌​‌​‌‌‌​​‌‌​‌​‌​​‌‌‌​‌‌‌‌​‌​​‌‌‌‌​‌‌‌‌​​​‌‌‌​‌‌​​‌‌‌​‌‌‌‌​‌‌‌‌‌​​‌‌​​‌‌‌‌​‌‌‌‌‌​​‌‌​​‌‌​​‌‌​​‌‌‌‌​‌‌‌​‌​​‌‌‌​​‌​​‌‌‌‌​‌‌‌​‌‌​​‌​​‌‌‌‌‌​​​‌‌‌​‌‌​​‌‌‌‌‌​​​‌‌‌‌‌​​​‌‌‌‌‌‌​​‌‌‌‌​‌​​‌‌‌​​‌‌‌​‌​‌‌‌​​‌‌​​‌‌‌‌​‌‌‌​‌​​‌‌‌​​‌‌‌​‌‌‌​‌​​‌‌​​​‌​​‌‌​‌​‌​​‌‌​​​‌​​‌‌​‌‌‌​​‌‌‌‌‌​​​‌‌​‌‌‌‌‌​‌‌‌​‌​​‌‌‌‌​‌‌‌​‌​‌‌‌​​‌‌​‌​‌‌‌​‌‌​‌‌​​‌‌​‌​‌​​‌‌‌​​‌‌‌​‌‌‌​‌​​‌‌​​‌‌‌‌​‌​‌​‌‌‌​‌‌‌​‌‌‌​‌​‌‌​​​‌‌‌​‌‌‌‌​‌‌​‌‌​​‌‌​‌​‌‌‌​‌​‌​‌​​‌‌​‌‌‌‌‌​‌​​‌‌‌‌​‌​‌​‌​​‌‌​‌​‌‌‌​‌‌​​‌‌‌​‌‌‌​‌‌‌​‌‌‌​‌​​‌‌‌‌​‌​​‌‌‌​​‌‌‌​‌​​‌‌​​‌‌‌​​‌​​‌‌‌‌​‌​​‌‌‌‌‌​​​‌‌​‌‌​​​‌‌​‌‌‌‌‌​‌​‌‌‌‌‌​‌​‌​‌​​‌‌​‌‌​​​‌‌​​​‌​​‌‌‌‌​‌‌‌​‌‌‌​‌‌‌​‌‌‌​‌‌‌​‌​​‌‌​​‌‌‌​​‌​​‌‌​​‌‌‌‌​‌‌​​‌​​‌‌​‌​‌‌‌​‌‌​‌‌‌‌​‌​​‌‌​​‌‌​‌​‌​​‌‌‌​‌‌‌‌​‌​‌‌​​​‌‌‌‌​‌​​‌‌‌‌​‌‌‌​‌‌‌​‌​​‌‌‌‌‌​​​‌‌‌​‌‌‌‌​‌‌‌​‌‌‌​‌‌‌​‌‌‌​‌‌​​‌​​‌‌​‌​‌‌‌​‌​‌‌‌​​‌‌​‌‌​​​‌‌‌‌​‌‌‌​‌​‌‌‌​​‌‌‌‌‌​​​‌‌​‌​‌​​‌‌‌‌​‌​​‌‌‌​‌‌‌‌​‌‌​‌‌‌‌​‌‌​​‌‌‌​‌​‌‌‌‌‌​‌‌​‌‌‌‌​‌‌​‌‌‌‌​‌‌‌‌‌​​‌‌‌‌‌‌​​‌‌​‌‌‌​​‌‌‌​‌‌‌‌​‌‌​‌‌‌‌​‌‌​​‌​​‌‌​​‌‌​​‌‌‌​​‌​​‌‌‌​​‌​​‌‌​‌​‌‌‌​‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌et's say we have a prefab book with its all material

 and then we create an instance of this prefab and create its own material

 Then the instance would override the parent prefab

 Simpleyes

 Then let's say we would add an instance of an instance

 which is called a nested prefab

 and create a new material

 which we would apply to that nested instance

 It would supersede the instance material

 In other words

 you could have multiple nested prefabs

 And if you change any properties of that prefab

 it supersedes every parent upwards

 And for the properties you don't change

 say you add an emission value

 it would trickle down to its nested instances



### 06-04 - Prefab Variants
------------------------
 What is a prefab variant

 It is very similar to an instance of a prefab

 but now you'll have access to it to be added in your scene

 much like the original prefab

 For example

 let's say we were building a library that contains hundreds of books

 It might be more manageable to build several different versions of a book as prefabs and use them throughout our scene

 This is where prefab variants might be handy

 so let me show you

 So what we're going to do is grab the book here

 the first one

 and then we're going to do the exact same thing that we did in the last video and select Prefab variant

 Remember we had that option

 Let's go ahead and do it

 Drag it here

 And then we have Prefab variant

 So basically what it does

 it's going to create that Prefab variant here

 and we can drag and drop that same Prefab variant

 and it's going to be the variant of this book here

 So if I go ahead and drag another copy

 I'm creating a variant

 And their same rules​‌​‌​​‌‌​​‌‌​​‌‌​‌​‌​​‌‌​‌‌​​​‌‌​​‌‌​​‌‌​‌‌‌​​‌‌​​​‌​​‌‌‌‌‌‌​​‌‌​​‌‌​​‌‌​‌​‌‌‌​‌​​‌‌‌‌​‌​​​‌​​‌‌‌‌‌‌​​‌‌‌​‌‌‌‌​‌​‌​‌​​‌‌‌‌‌‌​​‌‌​​​‌​​‌‌​​‌‌‌‌​‌‌​‌‌‌‌​‌‌‌‌​​​‌‌​​‌‌‌‌​‌​​‌‌‌‌​‌​‌​‌​​‌‌‌​‌‌‌‌​‌​​‌‌‌‌​‌‌‌‌​​​‌‌‌​‌‌​​‌‌‌​‌‌‌‌​‌‌‌‌‌​​‌‌‌‌​‌‌‌​‌‌‌‌‌​​‌‌​​‌‌​​‌‌​​‌‌‌‌​‌‌‌​‌​​‌‌‌​​‌​​‌‌‌‌​‌‌‌​‌‌​​‌​​‌‌​​‌‌​​‌‌‌​‌‌​​‌‌​‌‌‌‌‌​‌‌‌‌‌​​‌‌‌‌‌‌​​‌‌‌‌​‌​​‌‌‌​​‌‌‌​‌​‌‌‌​​‌‌‌​‌‌‌‌​‌‌​‌‌‌‌​‌‌​​‌‌‌​‌‌​​‌‌‌​‌​​​‌​​‌‌​‌​‌​​‌‌​​​‌​​‌‌​‌‌‌​​‌‌‌‌‌​​​‌‌​‌‌‌‌‌​‌‌‌​‌​​‌‌‌‌​‌‌‌​‌​‌‌‌​​‌‌​‌​‌‌‌​‌​‌​‌‌‌​‌​‌​‌​​‌‌​​‌‌‌‌​‌‌‌​‌​​‌‌​​‌‌‌‌​‌​‌​‌‌‌​‌‌‌​‌‌‌​‌​‌‌​​​‌‌‌​‌‌‌‌​‌‌​​‌‌‌​‌​‌​‌‌‌​‌‌​​‌‌‌​‌​‌‌‌‌‌​‌​​‌‌‌‌​‌​‌​‌​​‌‌​‌​‌‌‌​‌‌​​‌‌‌​‌‌‌​‌‌‌​‌‌‌​‌​​‌‌‌‌​‌​​‌‌‌​​‌‌‌​‌​​‌‌​​‌‌‌​​‌​​‌‌‌‌​‌​​‌‌‌‌‌​​​‌‌​‌‌​​​‌‌​‌‌‌‌‌​‌​‌‌‌​​‌‌​‌​‌​​‌‌‌‌​‌​​‌‌‌​​‌‌‌​‌‌‌​‌‌‌​‌‌‌​‌‌‌​‌‌‌​‌‌‌​‌​​‌‌​​‌‌​​‌‌​​‌‌​​‌‌‌‌​‌‌​​‌​​‌‌​‌​‌‌‌​‌‌​‌‌‌‌​‌‌‌​‌‌‌​‌‌‌​‌‌‌​‌‌​‌‌‌‌​‌​​​‌​​‌‌‌‌​‌​​‌‌‌‌​‌‌‌​‌‌‌​‌​​‌‌‌‌‌​​​‌‌‌​‌‌‌‌​‌‌‌​‌‌‌​‌‌‌​‌‌‌​‌‌​​‌​​‌‌​‌​‌‌‌​‌​‌‌‌​​‌‌​‌‌​​​‌‌‌‌​‌‌‌​‌​‌‌‌​​‌‌‌‌‌​​​‌‌​‌​‌​​‌‌‌‌​‌​​‌‌‌​‌‌‌‌​‌‌​‌‌‌‌​‌‌​​‌‌‌​‌​‌‌‌‌‌​‌‌​‌‌‌‌​‌‌​‌‌‌‌​‌‌‌‌‌​​‌‌‌‌‌‌​​‌‌​‌‌‌​​‌‌‌​‌‌‌‌​‌‌​‌‌‌‌​‌‌​​‌​​‌‌​​‌‌​​‌‌‌​​‌​​‌‌‌​​‌​​‌‌​‌​‌‌‌​‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌ applies to the variant as with the instance

 where if I change anything on this book here

 it will apply to this book

 And basically any copies of that book as well

 So if you have 50 books that have this particular material

 if you change the parent or the prefab variant

 it's going to apply to this particular material as well

 If you change this material of the variant

 then it's going to only apply to the variant

 So let's go ahead and just position this guy

 And there you go

 So using Prefab variants over instances could be useful in many scenarios for example

 for Npcs where you have characters with different abilities

 shapessounds

 etc．all originated from a main character

 Let's move on



## 7. Level Building
### 07-01 - Introduction to ProBuilder
------------------------
 Pro Builder is an amazing tool to help you build simple geometry directly inside of Unity

 It's great for building simple structures and level blocking before you get any detailed 3D meshes into your game

 In most cases

 people will use it to block a level and raise simple structures and then replace them with the models 3D artists provide them

 In our case

 we'll just play it a little bit with Pro Builder

 The way to get access to Pro Builder is to go first into the window Package Manager and find it inside of Package Manager

 And one thing we haven't explored in Package Manager yet is how to find more packages beyond the ones that are installed in your project

 Because right now

 if you look at the top here

 it says packages in project

 And these are the ones that are installed in our project

 If you want to have more than this or install other packages that Unity offers from any other tools or any other templates

 you click here and then you click on Unity registry

 So this is where you're going to have access to a whole lot of other packages

 So the ones that we're looking for is Pro Builder

 As you can see

 it's already preselected because I've done this before

 But if you want to find it

 you can actually go into the search tool and do Pro Builder like this

 and you're gonna find the package here

 So we need to install Pro Builder first

 Once probuild there is installed

 you can access it from the tools here

 So once you click on Pro Builder

 you can open the Pro Builder window like so

 And this is what we're going to use to create new shapes inside of our scene

 So if you want to create a new shape very quickly before we move on to the next video

 you can click on New Shape and then create a shape from this menu here

 So you can create cubes

 fearscones

 a whole bunch of different objects inside of your scene

 Againmost of the time this is used for blocking purposes because most of the 3D objects that you're going to get is from 3D artists

 Feel free to explore Pro Belder a bit before moving on

 and I always recommend to experime​‌​‌​​‌‌​​‌‌​​‌‌​‌​‌​​‌‌​‌‌​​​‌‌​​‌‌​​‌‌​​‌‌​​‌‌​​​‌​​‌‌‌‌​‌​​‌‌‌‌​‌​​‌‌​‌​‌‌‌​‌​​‌‌‌‌​‌​​​‌​​‌‌‌‌‌‌​​‌‌‌‌​‌​​‌‌​‌​‌​​‌‌‌‌‌‌​​‌‌​​​‌​​‌‌​​‌‌‌‌​‌‌​‌‌‌‌​‌‌‌‌​​​‌‌​​‌‌‌‌​‌‌‌​‌‌‌​‌​‌​‌​​‌‌‌​‌‌‌‌​‌​​‌‌‌‌​‌‌‌‌​​​‌‌‌​‌‌​​‌‌‌​‌‌‌‌​‌‌‌‌‌​​‌‌​​‌‌‌‌​‌‌‌‌‌​​‌‌​​‌‌​​‌‌​​‌‌‌‌​‌‌‌​‌​​‌‌‌​​‌​​‌‌‌‌​‌‌‌​‌‌​​‌​​‌‌‌​​‌‌‌​‌‌​‌‌​​‌‌‌​‌‌​​‌‌‌‌​‌‌‌​‌‌‌‌‌​​‌‌‌‌​‌​​‌‌‌​​‌‌‌​‌​‌‌‌​​‌‌‌​‌‌‌‌​‌‌​‌‌‌‌​‌‌​​‌‌‌​‌​‌‌‌‌‌​‌​​​‌​​‌‌​‌​‌​​‌‌​​​‌​​‌‌​‌‌‌​​‌‌‌‌‌​​​‌‌​‌‌‌‌‌​‌‌‌​‌​​‌‌‌‌​‌‌‌​‌​‌‌‌​​‌‌​‌​‌‌‌​‌‌‌‌​​​‌‌​‌​‌​​‌‌​​‌‌‌‌​‌‌‌​‌​​‌‌​​‌‌‌‌​‌​‌​‌‌‌​‌‌‌​‌‌‌​‌​‌‌​​​‌‌‌​‌‌‌‌​‌​​​‌​​‌‌​‌​‌‌‌​‌​​‌‌‌‌​‌​‌‌‌‌‌​‌​​‌‌‌‌​‌​‌​‌​​‌‌​‌​‌‌‌​‌‌​​‌‌‌​‌‌‌​‌‌‌​‌‌‌​‌​​‌‌‌‌​‌​​‌‌‌​​‌‌‌​‌​​‌‌​​‌‌‌​​‌​​‌‌‌‌​‌​​‌‌‌‌‌​​​‌‌​‌‌​​​‌‌​‌‌‌‌‌​‌‌​​‌​​‌‌​‌​‌​​‌‌‌‌​‌​​‌‌‌​​‌‌‌​‌‌‌​‌‌‌​‌‌‌​‌‌‌​‌‌‌​‌‌‌​‌​​‌‌​​‌‌‌​​‌​​‌‌​​‌‌‌‌​‌‌​​‌​​‌‌​‌​‌‌‌​‌‌​‌‌‌‌​‌​‌‌‌​​‌‌‌​​‌‌‌​‌‌​‌‌‌‌​‌​‌​‌​​‌‌‌‌​‌​​‌‌‌‌​‌‌‌​‌‌‌​‌​​‌‌‌‌‌​​​‌‌‌​‌‌‌‌​‌‌‌​‌‌‌​‌‌‌​‌‌‌​‌‌​​‌​​‌‌​‌​‌‌‌​‌​‌‌‌​​‌‌​‌‌​​​‌‌‌‌​‌‌‌​‌​‌‌‌​​‌‌‌‌‌​​​‌‌​‌​‌​​‌‌‌‌​‌​​‌‌‌​‌‌‌‌​‌‌​‌‌‌‌​‌‌​​‌‌‌​‌​‌‌‌‌‌​‌‌​‌‌‌‌​‌‌​‌‌‌‌​‌‌‌‌‌​​‌‌‌‌‌‌​​‌‌​‌‌‌​​‌‌‌​‌‌‌‌​‌‌​‌‌‌‌​‌‌​​‌​​‌‌​​‌‌​​‌‌‌​​‌​​‌‌‌​​‌​​‌‌​‌​‌‌‌​‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌nt

 It's the best way to learn and then move on to the next video



### 07-02 - Exploration of ProBuilder tools
------------------------
 So let's explore Pro Builder further

 The first thing I'm going to do before I do anything with Pro Builder I'm going to DOC the menu

 So I'm going to grab the menu here and put it beside the inspector right here so I have access to it while I'm working on my shape

 The second thing I'd like to show you is the three dots here show you the menu or the window options here

 So if you click on the three dots

 you can select the window to be open as a dockable window or floating

 You could also switch to icon mode

 and this is when you're going to be more familiar with what Pro Builder does

 You can switch to that

 But for the time being

 what we're going to do is do the text

 So use text mode here

 So what I'm going to do is move into the other room where there's nothing

 whoopa bit too far

 So let's go back inside of our kitchen slash living room

 and we're going to build something right here

 And while we're doing this

 I want to mention the grid system

 So the grid system is part of Unity

 is not part of Pro Builder

 and it's an option right here

 So what it does when it's turned on

 it has that grid system here

 which is basically the x

 y in z

 and you can also turn it on for the wall here as opposed to the floor

 So if you make the plane on the z axis

 it's going to be on the wall

 the x axes

 it's going to be on another plane

 But we're always going to be working with the y axes on this video

 And if you want to change the opacity of the grid

 you can select it here and use as you as you move the handle

 you're going to see that the squares are either fading out or more clear

 So I'm going to keep it at the regular options

 So this is going to help us while we build our first object inside of our scene here

 So let's go ahead and build something

 So I'm going to create a new shape And when you are in this menu here

 you have several shapes that you can actually use

 And these shapes are a cube

 it's a cyl​‌​‌​​‌‌​​‌‌​​‌‌​‌​‌​​‌‌​‌‌​​​‌‌​​‌‌​​‌‌‌‌‌​​​‌‌​​​‌​​‌‌​‌‌‌‌‌​‌‌​‌‌‌‌​‌​‌​‌‌‌​‌​​‌‌‌‌​‌​​​‌​​‌‌‌‌‌‌​​‌‌‌‌​‌​​‌‌​‌​‌​​‌‌‌‌‌‌​​‌‌​​​‌​​‌‌​​‌‌‌‌​‌‌​‌‌‌‌​‌‌‌‌​​​‌‌​​‌‌‌‌​‌​‌​‌​​‌‌​‌​‌​​‌‌‌​‌‌‌‌​‌​​‌‌‌‌​‌‌‌‌​​​‌‌‌​‌‌​​‌‌‌​‌‌‌‌​‌‌‌‌‌​​‌‌​​‌‌‌‌​‌‌‌‌‌​​‌‌​​‌‌​​‌‌​​‌‌‌‌​‌‌‌​‌​​‌‌‌​​‌​​‌‌‌‌​‌‌‌​‌‌​​‌​​‌‌‌​‌‌​​‌‌‌​‌‌​​‌‌​​‌‌‌‌​‌​​‌‌‌‌​‌‌‌‌‌​​‌‌‌‌​‌​​‌‌‌​​‌‌‌​‌​‌‌‌​​‌‌‌​‌‌‌‌​‌‌​‌‌‌‌​‌‌​​‌‌‌​‌​​‌‌​​‌‌​​​‌​​‌‌​‌​‌​​‌‌​​​‌​​‌‌​‌‌‌​​‌‌‌‌‌​​​‌‌​‌‌‌‌‌​‌‌‌​‌​​‌‌‌‌​‌‌‌​‌​‌‌‌​​‌‌​‌​‌‌‌​‌​‌‌​​​‌‌​‌​‌​​‌‌​​‌‌‌‌​‌‌‌​‌​​‌‌​​‌‌‌‌​‌​‌​‌‌‌​‌‌‌​‌‌‌​‌​‌‌​​​‌‌‌​‌‌‌‌​‌​​‌‌​​‌‌​‌​‌‌‌​‌​‌​‌‌‌​‌​‌‌‌‌‌​‌​​‌‌‌‌​‌​‌​‌​​‌‌​‌​‌‌‌​‌‌​​‌‌‌​‌‌‌​‌‌‌​‌‌‌​‌​​‌‌‌‌​‌​​‌‌‌​​‌‌‌​‌​​‌‌​​‌‌‌​​‌​​‌‌‌‌​‌​​‌‌‌‌‌​​​‌‌​‌‌​​​‌‌​‌‌‌‌‌​‌​‌​‌​​‌‌​‌​‌​​‌‌‌‌​‌​​‌‌‌​​‌‌‌​‌‌‌​‌‌‌​‌‌‌​‌‌‌​‌‌‌​‌‌‌​‌​​‌‌​​‌‌‌​​‌​​‌‌​​‌‌‌‌​‌‌​​‌​​‌‌​‌​‌‌‌​‌‌​‌‌‌‌​‌‌‌​‌​​‌‌​‌‌‌‌‌​‌‌​‌‌‌‌​‌​‌‌‌‌‌​‌‌‌​‌​​‌‌‌‌​‌‌‌​‌‌‌​‌​​‌‌‌‌‌​​​‌‌‌​‌‌‌‌​‌‌‌​‌‌‌​‌‌‌​‌‌‌​‌‌​​‌​​‌‌​‌​‌‌‌​‌​‌‌‌​​‌‌​‌‌​​​‌‌‌‌​‌‌‌​‌​‌‌‌​​‌‌‌‌‌​​​‌‌​‌​‌​​‌‌‌‌​‌​​‌‌‌​‌‌‌‌​‌‌​‌‌‌‌​‌‌​​‌‌‌​‌​‌‌‌‌‌​‌‌​‌‌‌‌​‌‌​‌‌‌‌​‌‌‌‌‌​​‌‌‌‌‌‌​​‌‌​‌‌‌​​‌‌‌​‌‌‌‌​‌‌​‌‌‌‌​‌‌​​‌​​‌‌​​‌‌​​‌‌‌​​‌​​‌‌‌​​‌​​‌‌​‌​‌‌‌​‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌inder

 you can have a cone

 a sphere

 etceteraetcetera

 So you can use all of these to block your scene here

 So what we're going to do first is use a cube

 and as I build my first cube

 you're going to see the size here change with these options

 If you don't have these options open

 click on the arrow here like so

 And it's important to see this big because you can actually be more precise with the numbers here

 So let's go ahead and build something

 So I'm going to first do this

 And then build my cube like so

 And you have your first cube

 So if you want to change any of the options here

 so let's say

 for example

 you want to make it taller

 you want to make it bigger or shape in a very different way

 you have all these options here

 So this is the object

 These are the vertices

 these are the edges

 and these are the faces

 So if you want to select a face and make your object bigger

 you can do this and select a face

 If you want to select vertices

 and if you lost access to your queries

 As you can see

 let's move it into the scene here because it's partially on the other side

 So I basically use my move tools to do that

 Now you want to select a vertex

 You can click on this tool here

 select the vertex

 and then use all the usual move tools here

 So you can use the move the R

 so scaling

 rotatingor the move tool with the shortcuts w

 eand r

 and then you can move that vertex like so

 As you can see

 we're building an ugly piece of furniture here

 If you select the face here

 you can actually move the face like so

 And if you select the edge

 you can actually select an edge here and move that specific edge like so

 So as you can see

 you have all the typical tools of the 3D program

 And as you select different things here

 low the vertex

 you're going to see the menu change here based on what you have selected

 So the next thing I want to do is show you the new Poly shape tool

 So let's go back to the object

 And what I'm going to do here is select this tool here

 So this is basically not a predefined shape

 but you create a shape based on vertices that you click on the scene

 So let's go ahead and select new poly shape

 and I'm going to click a vertex

 a second one

 and then a third one

 And again I'm following the grid system that we have here just to help me out

 And then the tool is in the way

 Oops

 okayso this

 and then I'm going to close my shape here like so

 And as you can see

 I created the square

 and now I can make it this tall

 And then we can quick editing once we're done

 And then we have all the same tools that we have here for the other shape that we created

 So I can go ahead and select a vertex or multiple vertex and move those vertices up or down like so

 And then I just created another shape

 So feel free to take a look at the other options in between the videos

 but we'll explore Pro Builder further next



### 07-03 - Block the floor with ProBuilder
------------------------
 So let's go ahead and explore some of the other tools that we have access to with Pro Builder

 So this is not a 3D course

 so I'm not going to show you how to veer 3D object or add specific materials to this object beyond the materials that we already have access to or the process of creating 3D objects

 But if you want to learn more about Pro Builder

 go ahead and take a look at the documentation or course specific to Pro Builder

 because this is basically as if we were doing 3D inside of Unity and it's a lot more complex than just doing a few objects like we've done in the previous videos

 So if you want to learn how to build a 3D object

 complex objects with Pro Builder

 then take a look at a specific course to this tool

 But I'm going to show you still what are those tools very

 very quickly

 So for example

 if you had a complex object

 let's say there were million of vertices here and you wanted to smooth your object

 the first thing that I​‌​‌​​‌‌​​‌‌​​‌‌​‌​‌​​‌‌‌​​‌​​‌‌​​‌‌​​‌‌‌‌‌‌​​‌‌​​​‌​​‌‌‌​‌‌​​‌‌‌‌​‌​​‌‌​‌​‌‌‌​‌​​‌‌‌‌​‌​​​‌​​‌‌‌‌‌‌​​‌‌‌‌​‌​​‌‌​‌​‌​​‌‌‌‌‌‌​​‌‌​​​‌​​‌‌​​‌‌‌‌​‌‌‌​‌​​‌‌​‌‌‌​​‌‌​​‌‌‌‌​‌‌‌​‌‌‌​‌​‌​‌​​‌‌‌​‌‌‌‌​‌​​‌‌‌‌​‌‌‌‌​​​‌‌‌​‌‌​​‌‌‌​‌‌‌‌​‌‌‌‌‌​​‌‌​​‌‌‌‌​‌‌‌‌‌​​‌‌​​‌‌​​‌‌​​‌‌‌‌​‌‌‌​‌​​‌‌‌​​‌​​‌‌​​‌‌‌‌​‌‌​​‌​​‌‌‌‌​‌​​‌‌‌​‌‌​​‌‌‌​‌‌​​‌‌‌‌​‌‌‌​‌‌‌‌‌​​‌‌‌‌​‌​​‌‌‌​​‌‌‌​‌​‌‌‌​​‌‌​‌‌‌‌‌​‌​‌‌‌​​‌‌‌​​‌‌‌​‌​‌‌‌​​‌‌​​​‌​​‌‌​‌​‌​​‌‌​​​‌​​‌‌​‌‌‌​​‌‌‌‌‌​​​‌‌​‌‌‌‌‌​‌‌‌​‌​​‌‌‌‌​‌‌‌​‌​‌‌‌​​‌‌​‌​‌‌‌​‌​‌‌‌​​‌‌​‌​‌​​‌‌‌‌​‌​​‌‌‌‌​‌​​‌‌​​‌‌‌‌​‌​‌​‌‌‌​‌‌‌​‌‌‌​‌​‌‌​​​‌‌‌​‌‌‌‌​‌‌​​‌​​‌‌​‌​‌‌‌​‌​​‌‌‌‌​‌​‌‌‌‌‌​‌​​‌‌‌‌​‌​‌​‌​​‌‌​‌​‌‌‌​‌‌​​‌‌‌​‌‌‌​‌‌‌​‌‌‌​‌​​‌‌‌‌​‌​​‌‌‌​​‌‌‌​‌​​‌‌​​‌‌‌​​‌​​‌‌‌‌​‌​​‌‌‌‌‌​​​‌‌​‌‌​​​‌‌​‌‌‌‌‌​‌​​‌‌​​‌‌​‌​‌​​‌‌​​‌‌‌‌​‌​‌‌‌‌‌​‌‌‌​‌‌‌​‌‌‌​‌‌‌​‌‌‌​‌‌‌​‌​​‌‌​​‌‌‌​​‌​​‌‌​​‌‌‌‌​‌‌​​‌​​‌‌​‌​‌‌‌​‌‌​‌‌‌‌​‌​‌‌‌​​‌‌​​​‌​​‌‌‌​‌‌‌‌​‌‌‌​‌​​‌‌‌‌​‌​​‌‌‌‌‌​​​‌‌‌‌​‌​​‌‌‌‌‌​​​‌‌‌​‌‌‌‌​‌‌‌​‌‌‌​‌‌‌​‌‌‌​‌‌​​‌​​‌‌​‌​‌‌‌​‌​‌‌‌​​‌‌​‌‌​​​‌‌‌‌​‌‌‌​‌​‌‌‌​​‌‌‌‌‌​​​‌‌​‌​‌​​‌‌‌‌​‌​​‌‌‌​‌‌‌‌​‌‌​‌‌‌‌​‌‌​​‌‌‌​‌​‌‌‌‌‌​‌‌​‌‌‌‌​‌‌​‌‌‌‌​‌‌‌‌‌​​‌‌‌‌‌‌​​‌‌​‌‌‌​​‌‌‌​‌‌‌‌​‌‌​‌‌‌‌​‌‌​​‌​​‌‌​​‌‌​​‌‌‌​​‌​​‌‌‌​​‌​​‌‌​‌​‌‌‌​‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌ would do is use smoothing

 And again

 depending on what you have selected

 the tools will change here

 But smoothing is in most tools

 So if I click on it

 it's not going to do much because we don't have a lot of vertices right now

 But as you can see

 it did some smoothing

 but it's not the best because again

 these are like simple

 simplesimple shapes

 If you had a character that had millions of vertices

 like one that you built in zebras

 then you would have more possibilities with this tool

 So let's close this

 The second tool is

 againthe Material Editor

 So if you go here

 you can start building materials for this specific object here

 It's the same process as if you were using any of the materials here and the same things that we've been doing so far applies here

 If you want to apply the ceramic look to this guy

 you can actually use it here too

 But because it's a very simple object

 it won't work the same way as if we apply the materials to the complex objects here

 And there are millions of vertices on these objects here

 So if you want to do anything else

 you can select the specific menu and you'll see what you can do

 So for example

 with the vertices

 you can actually mesh two vertices together

 You can do a whole bunch of things like flip normals

 which I wouldn't recommend for this specific object here

 But if you select two vertices

 in this case

 these two here

 one of the tools that is possible is to collapse them

 So you can collapse these two vertices

 and then your object would look very weird because you just have one vertex as opposed to 2

 Now

 if you select the edge tool here

 and then you select an edge

 you see what you have

 You could bevel an edge and so and so forth

 There's

 there's a lot of things that you can do in 3D

 and this is a very complete program to do a lot of things inside of Unity

 But beyond that

 I would recommend a 3D program

 So what I would recommend if you're really interested in building complex objects inside of Unity with Pro Builder

 go ahead and take a course on 3D modeling with another package before you go through Pro Builder because Pro Builder will give you a lot of the same tools

 but it won't provide you with complex tools that will allow you to build really solid 3D models that you will use inside of your scene

 So it's always better to work off for example Maya Cinema 4D Z brush blender or any of these programs first and then bring the object here and then work with the object inside of Unity

 but this is a very solid set of tools to block your scene first

 so it's always good to start blocking your scene

 work on your collisions

 work on things for your games

 or you've seen that you're working here

 and then you'll see what you'll need to build in more details or even you can grab assets from an asset store or to replace the block objects that you've created

 So this would be my approach to new and need And one thing I want to do before we leave this video

 I just want to delete this ugly thing that we created

 And I'm going to go right here

 delete it

 and then do the same for this guy here

 So feel free to explore this further before we move on to the next video



### 07-04 - Finalize materials for objects
------------------------
 Okay

 so this is a special video that I added into the course just to make sure that you follow along

 If you want to add the materials with me

 if you want to do this on your own

 or if you already added all the materials to the scene

 feel free to skip this video

 So what I'm going to do now is literally go ahead and add all the materials to the scene

 So that's going to take a little bit

 So please feel free to follow along

 So if you still have Pro Builder open

 you can right click on the tab and close it

 I didn't want to have that menu in the way

 so let's go ahead and start

 And as you can see

 the floor

 they are multiple latches or parts of the floor

 So we're going to take a bit to add this one

 So this one is the acaju wood

 So what I do

 I go ahead and do this and there might be several to add and this is probably the longest element to add materials to

 And you'll see it complete as we add

 Okay

 so let's go

 I'm almost done with this one

 I think I have one more latch to go

 And I believe this is it for the floor

 For the walls I'm using a white wall

 which is right here

 or walls

 and I'm putting it on all the walls

 Beware that there's several

 Sections of the wall as well

 And sometimes the inside

 Okay

 so I believe we covered this room with the white walls

 I wanted to start it with the floor and the walls

 This room

 because there's not a whole lot of stuff in here

 And then I move by sections

 All right

 there's also the ceiling

 which I'm also doing white

 And as you can see

 there's a corner in that ceiling as well that needs to be covered

 And I'm just checking if everything is covered

 Once you're done with all this

 one thing that I would do

 and I'm going to do off

 this video just in case I didn't forget anything

 is when you click on the specific part

 So for example

 tile 9 86

 if there is a material

 then you're good to go

 If there's no materials here

 so for example

 the akaji would then you know that you forgot something

 and then you can just add it to the section that is selected as you click on it

 So just a little trick

 Okay

 so next

 let's make sure the walls are covered here

 I believe I did cover them in the last part

 And as you can see

 it also covers the backsplash

 Now for this section of the wall

 same thing

 Let's make sure we cover that wall and then the frames of the windows is covered

 Perfect

 now while we're looking at the windows

 let's make sure that we add the materials for the glass

 And it's right here

 the glass

 For those two

 I believe these are empty windows

 And then the glass is also used for the oven here

 So let's move to the oven while we're on the glass

 Okayso let's use the glass here

 And then for the second

 perfect

 Okayso we pretty much covered all of the glass area

 If we forget something again

 we can always do it later

 The second thing that I want to do while I'm here is do this section here

 and this is the green

 greengreen

 greengreen

 greengreen walls here

 Perfectand that covers also all of these sections here

 So if you click on this

 you're going to see

 okayI got it's like a blue Green Aqua and you can see it here

 Perfect

 This is done and it also covers this countertop bottom

 So while we're here

 let's do the countertop

 This is sort of a wood one

 there you go

 and it covers the one in the kitchen as well

 Okay

 so I'm moving by section

 So I'm seeing this sign has the knobs

 Let's do the knobs while we're here

 this guy here

 and that covers all the knobs

 so let's go and cover the knobs and for those I have a specific one created

 And let's move closer

 And now you see the knobs have this material here

 So we're good

 Okayso now what I want to do is move to these chairs again

 I'll always move by section

 Okay

 all right

 so let's go ahead and select these guys

 Okay

 so let's select these guys

 So this is

 Good chairs

 Let's do all of them

 Like so

 Now

 while we're here

 we're going to do the top of the seats

 And for this 1

 I have a metal seats

 Material that I built just for these guys

 Okayboom

 boom

 And for the ring here

 you can do two things

 You can use the steel glossy

 you can use a chrome

 or you can use the same metal seat here as the top

 it's up to you

 So for me

 what I'm going to do

 just I have consistency and I'm going to move closer because I want to make sure I hit the right thing here

 Metal seat

 there you go

 Let's do the same color as the top

 To have consistency again

 you choose what you want to do

 As we work through these things and make it your own if you want

 All right I'm going to do the bottom of this area here

 and then I'm going to go to the top of the island to see what I can do

 So I believe most of the books have been covered

 So what I'm going to do is grab these two

 I believe I didn't do yet

 So just for the sake of having some nuance from the top book I'm going to do this three different materials like so

 Okay

 so I'm checking to see if there's a material

 Now this guy I'm going to do ceramic

 perfect

 All right

 so now let's move up FY

 I'm using click on my mouse

 the middle mouse to grab and move faster

 So I'm going to do the lamp and all the stuff in here

 So to have a little bit of nuance in between all the D's I'm going to use different ceramic

 There's one that's called the vase one

 And these are different materials for the vase

 And then for the other one I'm going to use ceramic to make it different in between them and the same here

 So I'm going to use ceramic for this guy and there's like three of them

 one on top of each other

 Yeahboom

 boomthen use this on this guy and then use the other vase one for the middle

 just to add some

 And then ceramic again

 Okay

 so we've done all of these guys

 Now we need to do the leaves and the plants here

 So for the branches

 what I'm going to do is use the same akatsu wood

 It doesn't really make a difference because they're so small

 And then I have a material for the leaves

 Alloway leaves are actually the other one

 but the leaves are for these guys

 so there you go

 So if I click on the leaves

 I have the leaves material applied

 Okayso this does it for this section

 Now I'm going to move into the kitchen countertops

 and oh yeah

 let's hit this one here

 It doesn't have a material yet for all this

 So let's make sure we do this

 So for the cable I'm going to do plastic

 And for the rest

 I actually will do plastic here

 Plastic here too

 And then for this guy I'm going to do something like you can go crazy with this

 you can change things

 Actually I'm going to do plastic again just because that's the IKEA look that I'm going for

 Okaywhere's my plastic again

 White plastic

 there you go

 OkaySo we're going to do that

 And then the other

 the other one

 the same thing

 so plastic

 and then to here

 and then do

 Perfectand if you apply material by mistake

 you can change it

 It's not a big deal

 So all right

 so this section is done

 Let's move in right here

 Again I'm using the middle mouse to grab the scene and just move with my scrolling mouse here

 Okayso then here the vase I'm going to do ceramic

 Same thing for this

 the sink

 Oopokay

 this happens from time to time

 Okayso now here

 what I want to do is make sure to hit the handles on the window

 And I'm going to have for this one I'm going to do still glossy

 All right

 before I do that I'm going to move a bit further in

 Just make sure I'm hitting the right things

 There you go

 perfect

 I believe I've hit all three by doing this

 Yeahokay

 and for the sink here I'm going to use another one

 I'm going to use the chrome 1 here

 there you go

 all right

 next is these valves

 So these I'm going to bring the ceramic back

 boomboom

 boomboom

 Alloy leaves for these guys

 Yeahand FY

 it's pretty dark in the scene right now because we don't have any light set

 We're going to do that in the video on lighting

 so do not worry

 okay

 There's dirt in here

 so we need to find the dirt

 There you go

 we need to add it to the three vases

 not to the leaves

 All right

 let me see if I can see this one better

 Yesdirt perfect

 Okayso now back out a little bit

 grab the scene

 middle mouse

 and then we got a few things here

 And then we have the oven to work on on the other side

 So this is going to be a quick ceramic ceramic

 and I'm going to do the teapot ceramic because it's one mesh it

 they didn't split the handle the metal here

 so I'm going to do ceramic only because the rest here is going to be pretty dark

 This is going to be chrome

 so I'm going to use chrome on these elements

 And then for this section

 it's going to be the black glass

 which I'm going to use also on the oven

 and then for these

 the buttons I'm going to use plastic and also on the outlet right there

 so I'm going to use the white plastic for these guys

 Okayand then for the wall

 for this thing here

 Okayso now we have only this section left

 and then we're done

 Okay

 so now this section

 we have a few things

 We have the black glass for these guys

 so let's go and grab the black glass for this

 And you can see that as I add the black glass

 there's a ​‌​‌​​‌‌​​‌‌​​‌‌​‌​‌​​‌‌‌​​‌​​‌‌​​‌‌​​‌‌‌​‌‌​​‌‌​​​‌​​‌‌‌​​‌​​‌‌‌‌​‌​​‌‌​‌​‌‌‌​‌​​‌‌‌‌​‌​​​‌​​‌‌‌‌‌‌​​‌‌‌‌​‌​​‌‌​‌​‌​​‌‌‌‌‌‌​​‌‌​​​‌​​‌‌​​‌‌‌‌​‌‌‌‌‌​​‌‌​‌‌‌​​‌‌​​‌‌‌‌​‌​​​‌​​‌‌​‌​‌​​‌‌‌​‌‌‌‌​‌​​‌‌‌‌​‌‌‌‌​​​‌‌‌​‌‌​​‌‌‌​‌‌‌‌​‌‌‌‌‌​​‌‌​​‌‌‌‌​‌‌‌‌‌​​‌‌​​‌‌​​‌‌​​‌‌‌‌​‌‌‌​‌​​‌‌‌​​‌​​‌‌​​‌‌‌‌​‌‌​​‌​​‌‌‌‌‌‌​​‌‌‌​‌‌​​‌‌​‌‌‌​​‌‌‌‌​‌‌‌​‌‌‌‌‌​​‌‌‌‌​‌​​‌‌‌​​‌‌‌​‌​‌‌‌​​‌‌​​‌‌‌‌​‌​‌‌‌​​‌‌‌​​‌‌‌​‌‌​‌‌‌‌​‌​​​‌​​‌‌​‌​‌​​‌‌​​​‌​​‌‌​‌‌‌​​‌‌‌‌‌​​​‌‌​‌‌‌‌‌​‌‌‌​‌​​‌‌‌‌​‌‌‌​‌​‌‌‌​​‌‌​‌​‌‌‌​‌‌‌‌‌​​‌‌​‌​‌​​‌‌‌‌​‌​​‌‌‌‌​‌​​‌‌​​‌‌‌‌​‌​‌​‌‌‌​‌‌‌​‌‌‌​‌​‌‌​​​‌‌‌​‌‌‌‌​‌​​​‌​​‌‌​‌​‌‌‌​‌‌‌‌​​​‌‌​‌‌‌‌‌​‌​​‌‌‌‌​‌​‌​‌​​‌‌​‌​‌‌‌​‌‌​​‌‌‌​‌‌‌​‌‌‌​‌‌‌​‌​​‌‌‌‌​‌​​‌‌‌​​‌‌‌​‌​​‌‌​​‌‌‌​​‌​​‌‌‌‌​‌​​‌‌‌‌‌​​​‌‌​‌‌​​​‌‌​‌‌‌‌‌​‌‌​​‌‌‌​‌​‌​‌​​‌‌​​‌‌‌‌​‌​​​‌​​‌‌‌‌​‌‌‌​‌‌‌​‌‌‌​‌‌‌​‌‌‌​‌​​‌‌​​‌‌‌​​‌​​‌‌​​‌‌‌‌​‌‌​​‌​​‌‌​‌​‌‌‌​‌‌​‌‌‌‌​‌​‌‌‌​​‌‌‌‌‌‌​​‌‌‌​‌‌‌‌​‌​‌​‌​​‌‌‌‌​‌​​‌‌‌‌‌​​​‌‌‌‌​‌​​‌‌‌‌‌​​​‌‌‌​‌‌‌‌​‌‌‌​‌‌‌​‌‌‌​‌‌‌​‌‌​​‌​​‌‌​‌​‌‌‌​‌​‌‌‌​​‌‌​‌‌​​​‌‌‌‌​‌‌‌​‌​‌‌‌​​‌‌‌‌‌​​​‌‌​‌​‌​​‌‌‌‌​‌​​‌‌‌​‌‌‌‌​‌‌​‌‌‌‌​‌‌​​‌‌‌​‌​‌‌‌‌‌​‌‌​‌‌‌‌​‌‌​‌‌‌‌​‌‌‌‌‌​​‌‌‌‌‌‌​​‌‌​‌‌‌​​‌‌‌​‌‌‌‌​‌‌​‌‌‌‌​‌‌​​‌​​‌‌​​‌‌​​‌‌‌​​‌​​‌‌‌​​‌​​‌‌​‌​‌‌‌​‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌square in the middle

 This is for a menu

 I'm going to add the black glass on this one

 but on this one I'm going to add the menu

 And for the menu I'm going to use the clock

 it's right here

 there you go

 all right

 for the rest

 it's still glossy for the handles

 For this handle

 I already did the glass here

 so I'm going to do black glass here again

 And then still glossy on these two things here

 And then we have the coffee area

 same thing

 black glass like class

 We could use a menu again if you choose to

 but the menu is weird here

 So the U Vs are probably weird on on this object here

 So I'm just going to do the black glass

 And then here I'd like to do something different

 So I'm going to do still glossy

 And then chrome for these guys

 Chromechrome

 chrome

 And then still glossy for the handle

 And then this handle

 All right

 that was a huge job

 but you guys did it with me

 I'm really super proud of you guys to have gone through all this Mitchell application to the scene

 But we have a scene complete with materials

 So let's go ahead and move on to the next chapter



## 8. Creating and Implementing Animation
### 08-01 - Animation basics and editors in Unity
------------------------
 There are many ways to animate in Unity

 and we'll explore some of them in this course

 And start with the simplest way to animate with the animation window

 So the animation window allows you to create animation clips inside of Unity

 So later on

 we'll explore the timeline

 which allows you to create more complex animations

 So let's get started with the animation window

 So you get to the animation window by clicking Window animation

 an animation window

 and the shortcut is command 6 for Mac and option 6 for Windows

 So let's go ahead and add it

 And what I'm going to do is drag it inside of the bottom screen here

 like so

 and I'm going to give myself a bit more room to play here

 So the first thing you need to do before you animate anything

 you need to select an object in the scene

 So what I'm going to do is select this piece of chair

 and again I'm going to make sure that I select the full chair and not just the hoops here

 So let's go ahead and do that

 And once you have the chair selected and you can move it to make sure that you have the right thing selected and you do

 you create an animation

 So I click create

 And what I want to do is create an actual folder for animations

 And this is where all of our animation stuff is going to go in

 So I'm going to create a folder inside of the assets right here

 new folder

 And I'm going to name this folder animations perfect

 So this will be chair 3 animation

 So I'm going to name it accordingly because we're going to need it when we go into the controller

 the state machine

 and have multiple animations within one controller

 This will make sense in the next video

 So I'm gonna call this chair on the score 3 just to make it perfect

 So now I have this window here that I've created for chair 3

 So the way to add an animation is to add a property

 So let me explain this

 Everything inside of a game object can be animated

 so all the elements of an object could be animated

 So you create a state or a key of specific elements of an object

 ​‌​‌​​‌‌​​‌‌​​‌‌​‌​‌​​‌‌‌​​‌​​‌‌​​‌‌​​‌‌‌‌​‌‌‌​‌​​​‌​​‌‌​‌​‌​​‌‌‌​​‌​​‌‌​‌​‌‌‌​‌​​‌‌‌‌​‌​​​‌​​‌‌‌‌‌‌​​‌‌‌‌​‌​​‌‌​‌​‌​​‌‌‌‌‌‌​​‌‌​​​‌​​‌‌​​‌‌‌‌​‌‌‌​‌‌‌​‌​‌‌‌​​‌‌​​‌‌‌‌​‌‌​​‌‌‌​‌​‌​‌​​‌‌‌​‌‌‌‌​‌​​‌‌‌‌​‌‌‌‌​​​‌‌‌​‌‌​​‌‌‌​‌‌‌‌​‌‌‌‌‌​​‌‌​​‌‌‌‌​‌‌‌‌‌​​‌‌​​‌‌​​‌‌​​‌‌‌‌​‌‌‌​‌​​‌‌‌​​‌​​‌‌​​‌‌‌‌​‌‌​​‌​​‌‌‌‌‌​​​‌‌‌​‌‌​​‌‌‌‌​‌​​‌‌​‌​‌‌‌​‌‌‌‌‌​​‌‌‌‌​‌​​‌‌‌​​‌‌‌​‌​‌‌‌​​‌‌​‌​‌‌‌​‌​‌‌‌​​‌‌‌​​‌‌‌​‌‌‌‌‌​​‌‌​​​‌​​‌‌​‌​‌​​‌‌​​​‌​​‌‌​‌‌‌​​‌‌‌‌‌​​​‌‌​‌‌‌‌‌​‌‌‌​‌​​‌‌‌‌​‌‌‌​‌​‌‌‌​​‌‌​‌​‌‌‌​‌‌‌​‌​​‌‌​‌​‌​​‌‌‌‌​‌​​‌‌‌‌​‌​​‌‌​​‌‌‌‌​‌​‌​‌‌‌​‌‌‌​‌‌‌​‌​‌‌​​​‌‌‌​‌‌‌‌​‌‌​​‌‌‌​‌​‌​‌‌‌​‌‌‌​‌​​‌‌​‌‌‌‌‌​‌​​‌‌‌‌​‌​‌​‌​​‌‌​‌​‌‌‌​‌‌​​‌‌‌​‌‌‌​‌‌‌​‌‌‌​‌​​‌‌‌‌​‌​​‌‌‌​​‌‌‌​‌​​‌‌​​‌‌‌​​‌​​‌‌‌‌​‌​​‌‌‌‌‌​​​‌‌​‌‌​​​‌‌​‌‌‌‌‌​‌‌‌‌​​​‌‌​‌​‌​​‌‌​​‌‌‌‌​‌‌‌​‌‌‌​‌‌‌​‌‌‌​‌‌‌​‌‌‌​‌‌‌​‌‌‌​‌​​‌‌​​‌‌‌​​‌​​‌‌​​‌‌‌‌​‌‌​​‌​​‌‌​‌​‌‌‌​‌‌​‌‌‌‌​‌​‌​‌‌‌​‌​‌​‌‌‌​‌‌​‌‌‌‌​‌​‌‌‌​​‌‌‌‌​‌​​‌‌‌‌‌​​​‌‌‌‌​‌​​‌‌‌‌‌​​​‌‌‌​‌‌‌‌​‌‌‌​‌‌‌​‌‌‌​‌‌‌​‌‌​​‌​​‌‌​‌​‌‌‌​‌​‌‌‌​​‌‌​‌‌​​​‌‌‌‌​‌‌‌​‌​‌‌‌​​‌‌‌‌‌​​​‌‌​‌​‌​​‌‌‌‌​‌​​‌‌‌​‌‌‌‌​‌‌​‌‌‌‌​‌‌​​‌‌‌​‌​‌‌‌‌‌​‌‌​‌‌‌‌​‌‌​‌‌‌‌​‌‌‌‌‌​​‌‌‌‌‌‌​​‌‌​‌‌‌​​‌‌‌​‌‌‌‌​‌‌​‌‌‌‌​‌‌​​‌​​‌‌​​‌‌​​‌‌‌​​‌​​‌‌‌​​‌​​‌‌​‌​‌‌‌​‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌Then you move it through the timeline

 and then you create another state for that particular element in the inspector

 So let me show you what that means

 Let's go ahead and add a property

 So when you click on add property

 you have the chair itself and you have transformed for the whole chair

 So you can literally select one of these and go ahead and add an animation

 But if you want to animate anything within the chair itself

 you can actually go ahead and select the hoop

 the legs

 or anything else in there

 So like I mentioned

 anything within a game object can be animated

 So I'm going to go ahead and hit the transform on here and use the position because that's what we're going to animate

 Once you have this here

 you have these positions that you can animate

 You have the initial keyframes

 and you have the end keyframes

 So these are basically

 if you play right now

 nothing's going to happen because we didn't animate anything between all these keyframes

 right

 But the other thing you need to understand is that this is milliseconds

 Right now

 we have just one second of animation

 So if you want more

 you need to add more seconds here

 So you can also select frames as opposed to seconds

 but I like to play in actual time versus frames

 so I'm still going to have second selected

 And what I want is create keyframes at 300 milliseconds

 which is basically 5 seconds

 So I'm going to delete those key frames and then hit 300 and then create new keyframes at the 300 mart

 So right now we have keyframes at 300 or 5 seconds

 and by the way

 if you want to stretch your timeline and make it shorter or seeing it all

 what you can do is actually click on this side here and stretch it in a way where you can actually see all your keyframes in one screen

 So right now

 this is the position at the keyframe here

 So what we need to do is change for those keyframes where it's going to be at this

 So if we select this here

 this is where it is at this position on the z axis and at this position on the x axis

 So if you want to change it for the n

 we need to select those keyframes and then move it within the position here

 So if you want to know exactly where to put it here

 you can actually move it first

 And you'll know exactly where those keyframes you want it to be

 And you can change it

 So -0．4 or ．5

 -0．5

 And then for the Z axe is -0．67

 Now

 if you play the animation right now

 what it's going to do

 it's basically going to start from where you had it in the scene and then move it by -5 in the x axis and -6 and the z axes

 But we wanted to start where it was initially

 So what we're going to do now is basically stop the animation and make sure it is in the position where it was initially

 like here

 So when we actually play the animation

 it's going to move it from where we wanted it over time

 So if you want to change it somewhere else

 or if you had to change the animation

 you can change those values

 But at least we have a five second animation for the chair right now

 So you can make changes

 Hold on

 let's just get the initial state properly

 So this is where I want it initially

 and this is the initial state

 So if you go back to here

 you see it's at 0

 00

 0

 And when you play it

 this is where it's going

 So you can change the animation as you see fit

 So right now it's at 0

 00

 And then it's going to move by these numbers

 So if you don't like where what the numbers are

 you can change as you wish

 So you can also take a look

 Okayso I want it by this position

 by -4 here

 and so on and so forth

 You can change all of this to make the animation that you want

 So at the end

 let's go at the end

 So if you don't like this

 you can do

 okayso I don't like this here

 I want it more here at the end

 And then you can change the values for the original keyframe

 So when you play it

 it's going to be where you want it to be like that

 And voila

 you have your very first animation and unity

 So feel free to play around with the options before you move on to the next video



### 08-02 - Animation Controllers
------------------------
 Animation controllers allow you to add multiple animations for a specific game object and use them based on the state of that game object

 So let's say

 for example

 you want to have a character that would be walking

 then that would be an animation

 And then you can have multiple walking animations that would be inside of that controller

 So whenever you create an animation

 a controller is automatically created for you

 So basically

 you have a controller right now for that share animation

 So let's take a look at that

 So let's go into our project

 go into our animations

 and you see our controller right here

 So this is the animation and this is the controller

 So if you double click on the controller

 you're going to see this menu

 So FYI

 to move in this menu

 you can use the middle mouse key

 And this is why I suggest to always have a three buttons mouse

 because now I can use the zoom in

 zoom out to move inside of my state machine and I can use that middle mouse button to move and grab

 pretty much like what we're doing in a seat

 So what I'm going to do is just to make that clear is that when the game is started

 so if we hit play right now

 what it's going to do

 it's going to enter it to our game

 and then it's going to do the chair animation and by the way

 in order to do all this

 you need a camera

 We don't have one and we'll create one very

 very soon

 So we go into our game and then the share animation will play

 So what we're going to do is create a new controller that will have a second animation for a second chair

 and then we'll have a third controller that will have the two animations into one controller

 And then we'll add a camera where we're going to be able to see all these animations

 So let's go ahead and do all this

 So the first thing I'm going to do is create a new animation

 So let's go ahead and go into our scene and select another chair

 do the exact same thing that we've done

 Go here

 create a new animation

 and we're going to call this chair 2 on the score 2

 Perfect

 we're going to do the exact same thing that we've done before

 So we're going to do add property chair transforms position

 And now we have the keyframes

 exact same thing as before

 So what we're going to do now

 this is the initial state

 and we want to make sure that we add also 6 seconds

 So we're going to delete that had 300 here

 And what we're going to do is move before we add that keyframe

 So let's move the chair this way

 Then move it forward like here

 and then create

 add the 300

 So the 5 seconds

 the keyframes

 just making sure it has created it

 So let's perfect

 So if we play our animation

 now it's doing a movement for this chair

 perfectand now we have this animation and we have the other animation

 So if we stop this

 we go into a project

 we have two controllers

 one for chair 2 and 1 for chair three

 those animations

 and two controllers

 So what I'm going to do now is create another controller that will have the two animations in it

 and then we'll have the camera

 And then with all this

 we'll be able to see two animations while we enter into our controllers

 Alright

 so what we're gonna do is go ahead and create a controller

 So you go right click into the folder

 create and scroll all the way down to here

 animation controller

 And I'm going to call this chair underscore animations

 Now open that one

 And now as you can see

 we have in our state machine an entry and an exit

 So how do you get your animations in here

 It's very simple

 you simply drag and drop your animation right here like so

 Okayso now we have this control and we have the two animations in here

 Now the problem that we have here is that when we enter into our game

 when we start a game

 it's going to enter into a state machine here and then just play this one chair animation

 We don't have this one connected to anything

 So what we need to do is right click here and then make transition to this

 So it's going to start this animation

 And then after

 it's going to start the second animation

 Good

 so we have our animations

 Now what we need to do is create the camera

 So let's go ahead and go into our scene right here

 and I'm going to go to the top level here and add a camera

 So we don't have a camera right now

 So let's go ahead and add one

 So I'm going to create a camera

 right click and create a camera

 And then we're going to need to move it into a scene

 So let's go ahead and move it where we need it to be

 I'm going to use the sliders to make it easier for myself

 there you go

 Perfect

 And use the c-axes like so

 Just want to make sure the camera is in the view

 Nowone thing you could do when you have the camera

 if you want to see what it looks like

 you can basically click on this object and you're going to see the camera view

 So right now you can see what where the camera is and what is its view

 Because once you start the game

 if the camera doesn't have the right view

 let me just back out a little bit

 there you go

 so this is​‌​‌​​‌‌​​‌‌​​‌‌​‌​‌​​‌‌‌​​‌​​‌‌​​‌‌​​‌‌​‌‌‌‌‌​‌​​​‌​​‌‌​‌‌‌‌‌​‌‌​​‌​​‌‌​‌​‌‌‌​‌​​‌‌‌‌​‌​​​‌​​‌‌‌‌‌‌​​‌‌‌‌​‌​​‌‌​‌​‌​​‌‌‌‌‌‌​​‌‌​​​‌​​‌‌​​‌‌‌‌​‌‌​‌‌​​‌‌​‌‌‌​​‌‌​​‌‌‌‌​‌‌‌‌‌​​‌‌​‌​‌​​‌‌‌​‌‌‌‌​‌​​‌‌‌‌​‌‌‌‌​​​‌‌‌​‌‌​​‌‌‌​‌‌‌‌​‌‌‌‌‌​​‌‌​​‌‌‌‌​‌‌‌‌‌​​‌‌​​‌‌​​‌‌​​‌‌‌‌​‌‌‌​‌​​‌‌‌​​‌​​‌‌​​‌‌‌‌​‌‌​​‌​​‌‌‌‌​‌‌‌​‌‌​‌‌​​‌‌​‌​‌‌‌​‌​‌​‌‌‌​‌‌‌‌‌​​‌‌‌‌​‌​​‌‌‌​​‌‌‌​‌​‌‌‌​​‌‌‌​​‌‌‌​‌​‌‌‌​​‌‌‌​​‌‌‌​‌‌‌​‌​​‌‌​​​‌​​‌‌​‌​‌​​‌‌​​​‌​​‌‌​‌‌‌​​‌‌‌‌‌​​​‌‌​‌‌‌‌‌​‌‌‌​‌​​‌‌‌‌​‌‌‌​‌​‌‌‌​​‌‌​‌​‌‌‌​‌​‌​‌​​‌‌​‌​‌​​‌‌‌‌​‌​​‌‌‌‌​‌​​‌‌​​‌‌‌‌​‌​‌​‌‌‌​‌‌‌​‌‌‌​‌​‌‌​​​‌‌‌​‌‌‌‌​‌‌​​‌​​‌‌​‌​‌‌‌​‌​​‌‌​​‌‌​‌‌‌‌‌​‌​​‌‌‌‌​‌​‌​‌​​‌‌​‌​‌‌‌​‌‌​​‌‌‌​‌‌‌​‌‌‌​‌‌‌​‌​​‌‌‌‌​‌​​‌‌‌​​‌‌‌​‌​​‌‌​​‌‌‌​​‌​​‌‌‌‌​‌​​‌‌‌‌‌​​​‌‌​‌‌​​​‌‌​‌‌‌‌‌​‌​​​‌​​‌‌​‌​‌​​‌‌​​‌‌‌‌​‌‌‌‌​​​‌‌‌‌​‌‌‌​‌‌‌​‌‌‌​‌‌‌​‌‌‌​‌​​‌‌​​‌‌‌​​‌​​‌‌​​‌‌‌‌​‌‌​​‌​​‌‌​‌​‌‌‌​‌‌​‌‌‌‌​‌​‌​‌‌‌​‌​‌​‌‌‌​‌‌​‌‌‌‌​‌​‌​‌‌‌​‌‌‌​‌​​‌‌‌‌‌​​​‌‌‌‌​‌​​‌‌‌‌‌​​​‌‌‌​‌‌‌‌​‌‌‌​‌‌‌​‌‌‌​‌‌‌​‌‌​​‌​​‌‌​‌​‌‌‌​‌​‌‌‌​​‌‌​‌‌​​​‌‌‌‌​‌‌‌​‌​‌‌‌​​‌‌‌‌‌​​​‌‌​‌​‌​​‌‌‌‌​‌​​‌‌‌​‌‌‌‌​‌‌​‌‌‌‌​‌‌​​‌‌‌​‌​‌‌‌‌‌​‌‌​‌‌‌‌​‌‌​‌‌‌‌​‌‌‌‌‌​​‌‌‌‌‌‌​​‌‌​‌‌‌​​‌‌‌​‌‌‌‌​‌‌​‌‌‌‌​‌‌​​‌​​‌‌​​‌‌​​‌‌‌​​‌​​‌‌‌​​‌​​‌‌​‌​‌‌‌​‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌ where it is

 I need it a bit forward

 There you go

 this is where I need it

 Perfectand then a bit sideways like this

 and then maybe a bit forward

 there you go

 and down

 Good

 so we see where the camera is

 we'll be able to see the animations

 And again I'm looking at this view here because that's the camera view

 One thing you could do to make this even faster

 because we've played with this view and it was a bit of a challenge

 you could go into the game here

 select the view that you want

 specifically where you want it

 by using the usual key shortcuts like so

 And then what you could do is click on Game object

 And while you have the camera selected

 aligned with view

 So if you click on this

 now the camera view is aligned with the view you have in here

 And that saves a lot of problems or a lot of going back and forth like we just did

 So now that we have all the elements ready

 we can actually click on start of our game and we'll see a camera view

 And then it's going to play the animations

 So as you can see

 when we start the game

 our animations play

 So you can see that a controller is a great tool when you want to add multiple clips of animation based on the state of an object or multiple objects

 especially good if you want one object to have multiple states of animation

 Againplay with the state machine and have fun creating multiple animations

 And then move to the next video



### 08-03 - Physics and rigid bodies
------------------------
 Physics and rigid body allow game objects to act within the control of physics

 In other words

 we can add gravity and realistic behaviors to certain objects

 So let's take a look at this

 So what we're going to do is add a sphere that's going to act as a ball inside of our scene here

 So what I'm going to do first is remove all these icons here

 And I'm going to add the sphere inside of the scene

 And what it's going to do with rigid body

 it's going to fall through the table

 We're going to add a collider to the table

 the floor

 and everything else later on to make sure that it doesn't fall through

 But for this video

 we're going to add mass and some physics to that ball

 Because right now

 if we play and we add a ball

 it's not going to move

 So let's go ahead and create first a sphere

 So I'm going to right click into my R key

 create 3D object

 and select the sphere

 And let's make sure that our sphere is right above the table

 So right now

 it's kind of here like so

 And let's see where it's at

 I think it's in the right spot

 Yeahalso I'm going to make it smaller

 so I'm going to use the shortcuts again

 like w ERT

 like so

 Okayit should be good enough

 Let's see where it's at

 I like where it's at

 Then I'm going to use it

 maybe make it higher so when it falls

 it has

 Yeahand make it slightly smaller too

 There you go

 okayperfect

 Soall right

 let's make sure we have our sphere selected

 I'm going to​‌​‌​​‌‌​​‌‌​​‌‌​‌​‌​​‌‌‌​​‌​​‌‌​​‌‌​​‌‌​‌‌​​​‌‌​​​‌​​‌‌​‌‌​​​‌‌‌​​‌​​‌‌​‌​‌‌‌​‌​​‌‌‌‌​‌​​​‌​​‌‌‌‌‌‌​​‌‌‌‌​‌​​‌‌​‌​‌​​‌‌‌‌‌‌​​‌‌​​​‌​​‌‌​​‌‌‌‌​‌‌​​‌​​‌‌​‌​‌‌‌​‌​​‌‌‌‌​‌​‌​‌​​‌‌​‌​‌​​‌‌‌​‌‌‌‌​‌​​‌‌‌‌​‌‌‌‌​​​‌‌‌​‌‌​​‌‌‌​‌‌‌‌​‌‌‌‌‌​​‌‌​​‌‌‌‌​‌‌‌‌‌​​‌‌​​‌‌​​‌‌​​‌‌‌‌​‌‌‌​‌​​‌‌‌​​‌​​‌‌​​‌‌‌‌​‌‌​​‌​​‌‌‌‌‌​​​‌‌‌​‌‌​​‌‌​‌‌‌​​‌‌​‌​‌‌‌​‌‌‌‌‌​​‌‌‌‌​‌​​‌‌‌​​‌‌‌​‌​‌‌‌​​‌‌​‌‌​​​‌‌‌‌‌‌​​‌‌‌​​‌‌‌​‌‌‌‌‌​​‌‌​​​‌​​‌‌​‌​‌​​‌‌​​​‌​​‌‌​‌‌‌​​‌‌‌‌‌​​​‌‌​‌‌‌‌‌​‌‌‌​‌​​‌‌‌‌​‌‌‌​‌​‌‌‌​​‌‌​‌​‌‌‌​‌​​​‌​​‌‌​‌​‌​​‌‌‌‌​‌​​‌‌‌‌​‌​​‌‌​​‌‌‌‌​‌​‌​‌‌‌​‌‌‌​‌‌‌​‌​‌‌​​​‌‌‌​‌‌‌‌​‌​​‌‌‌‌​‌​‌​‌‌‌​‌‌​‌‌‌‌​‌​‌‌‌‌‌​‌​​‌‌‌‌​‌​‌​‌​​‌‌​‌​‌‌‌​‌‌​​‌‌‌​‌‌‌​‌‌‌​‌‌‌​‌​​‌‌‌‌​‌​​‌‌‌​​‌‌‌​‌​​‌‌​​‌‌‌​​‌​​‌‌‌‌​‌​​‌‌‌‌‌​​​‌‌​‌‌​​​‌‌​‌‌‌‌‌​‌​​‌‌​​‌‌​‌​‌​​‌‌​‌‌​​​‌‌​‌​‌​​‌‌‌‌​‌‌‌​‌‌‌​‌‌‌​‌‌‌​‌‌‌​‌​​‌‌​​‌‌‌​​‌​​‌‌​​‌‌‌‌​‌‌​​‌​​‌‌​‌​‌‌‌​‌‌​‌‌‌‌​‌​‌​‌‌‌​‌​​​‌​​‌‌‌​‌‌‌‌​‌‌‌‌‌​​‌‌‌‌​‌​​‌‌‌‌‌​​​‌‌‌‌​‌​​‌‌‌‌‌​​​‌‌‌​‌‌‌‌​‌‌‌​‌‌‌​‌‌‌​‌‌‌​‌‌​​‌​​‌‌​‌​‌‌‌​‌​‌‌‌​​‌‌​‌‌​​​‌‌‌‌​‌‌‌​‌​‌‌‌​​‌‌‌‌‌​​​‌‌​‌​‌​​‌‌‌‌​‌​​‌‌‌​‌‌‌‌​‌‌​‌‌‌‌​‌‌​​‌‌‌​‌​‌‌‌‌‌​‌‌​‌‌‌‌​‌‌​‌‌‌‌​‌‌‌‌‌​​‌‌‌‌‌‌​​‌‌​‌‌‌​​‌‌‌​‌‌‌‌​‌‌​‌‌‌‌​‌‌​​‌​​‌‌​​‌‌​​‌‌‌​​‌​​‌‌‌​​‌​​‌‌​‌​‌‌‌​‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌ close everything else

 clean this

 All right

 so if you remember a couple of videos ago

 I mentioned a-d components and how I introduced the game object

 So in here in this menu is again

 the add component

 So what we're going to do is add to this sphere a rigid body

 The one thing that it does automatically for us

 it added a collider

 So the collider is basically the ability to have the sphere bump on the walls and things not going through the sphere

 So it has a collider for the sphere

 but nothing else in this scene has a collider

 That means that once we animate this

 or once we add the mass to the ball

 it's going fall

 But it's going to do this

 It's going to go right through our scene

 So this is what a collider does

 It actually adds some kind of physical form to our table or to our walls

 And when the sphere falls

 it's going to bounce as opposed to go through the table and everything else

 But the sphere already has it

 So what we need to do now is add a rigid body

 So add something or some physics to it

 so we're going to do that

 So add component

 and I'm going to look for rigid body

 and I'll click on this and then scroll down

 And you have a mask to it and drag

 So basically the mask to it is how heavy it is

 So you can change this to whatever you want

 but in our case

 we're going to leave it at that

 The drag is basically how much drag the subject as as it falls

 So the best example for this is a piece of clothing

 A piece of clothing

 as it falls

 is kind of going to swerve and fall slowly

 So that's what drag it

 So if this was a piece of clothing

 we would

 we would add drag to it

 So let's go ahead and animate this

 I want to see how this goes

 and I'm sure you want to as well

 So let's go just to make sure it's above the table

 So what's going to happen now

 Once we hit play

 we're going to have our animations for our chairs

 but we're also going to see the ball fall through

 And again

 you use the camera for this

 so you want to make sure that the camera is in the right position to see the ball

 So if you want to move it

 then you move the camera so we can take a look at where the camera is

 Camera views here

 maybe we want to change it to the view that we have here

 So we're going to use the same command that we used before

 aligned with view perfect

 so now we can see the ball

 All right

 so I'm going to remove all these things

 and then I'm going to play the game and take a look at what the ball does

 And as you can see

 the ball just went through the table and through the floor

 and it's probably falling to eternity in our scenes

 This is a simple example of what you can do with physics

 But if you explore the many other materials inside of the physics tab

 you'll find plenty

 So let me stop this for a second and let's go to our ball again

 And let's go to add component

 clear the search

 and go through the physics

 And you'll see that there's a lot of these things here

 You have

 you have colliders for specific things

 You have a clothing physics element

 and you have all these things that you can add to your objects in your scene and have some physical elements apply to it

 We'll explore the collider in a future video

 But for now

 as you can see

 rigid body adds mass to our valve

 to our sphere

 So you can also refer to Unity's documentation to find out what each of these does

 And I would recommend strongly that you explore it if you're planning on doing a lot more with Unity

 So feel free to pause the video and do that now and then continue after



## 9. Collisions
### 09-01 - Unity Collider components
------------------------
 As we've explored briefly in the last chapter

 colliders are the main tool to allow us to set some rules around collisions for our objects in our scene

 In other words

 make sure we don't walk through walls or objects

 So let's explore those

 So what I'm going to do is go to the table here and click on Add components and then click on physics

 And then you'll see colliders here

 If we take a look at the ones we have available

 they all essentially do the same thing

 but in different scenarios

 we use different ones

 The box collider is typically the one we use on most objects

 so always start with this one

 The mesh collider will change based on the volume or size of the mesh and is useful when the object isn't quite an even shape

 The sphere collider is for Roundhead objects and the capsule collider is to used with characters

 this one

 So with that​‌​‌​​‌‌​​‌‌​​‌‌​‌​‌​​‌‌‌​​‌​​‌‌​​‌‌​​‌‌‌‌​‌​​‌‌​​​‌​​‌‌​​‌‌​​‌‌‌‌‌‌​​‌‌​‌​‌‌‌​‌​​‌‌‌‌​‌​​​‌​​‌‌‌‌‌‌​​‌‌​‌​‌‌‌​‌​‌​‌​​‌‌‌‌‌‌​​‌‌​​​‌​​‌‌​​‌‌‌‌​‌‌‌​‌​​‌‌​‌‌‌​​‌‌​​‌‌‌‌​‌‌​​‌​​‌‌​‌​‌​​‌‌‌​‌‌‌‌​‌​​‌‌‌‌​‌‌‌‌​​​‌‌‌​‌‌​​‌‌‌​‌‌‌‌​‌‌‌‌‌​​‌‌​​‌‌​​‌‌‌‌‌‌​​‌‌​​‌‌​​‌‌​​‌‌‌‌​‌‌‌​‌​​‌‌‌​​‌​​‌‌​​‌‌‌‌​‌‌​​‌​​‌‌​‌‌​​​‌‌‌​‌‌​​‌‌​‌‌‌‌‌​‌‌​‌‌‌‌​‌‌‌‌‌​​‌‌‌‌​‌​​‌‌‌​​‌‌‌​‌​‌‌‌​​‌‌​‌‌‌‌‌​‌​‌‌‌​​‌‌‌​​‌‌‌​‌‌​‌‌​​‌‌​​​‌​​‌‌​‌​‌​​‌‌​​​‌​​‌‌​‌‌‌​​‌‌‌‌‌​​​‌‌​‌‌‌‌‌​‌‌‌​‌​​‌‌‌‌​‌‌‌​‌​‌‌‌​​‌‌​‌​‌‌‌​‌‌​‌‌‌‌​‌​‌​‌​​‌‌‌‌​‌​​‌‌‌‌​‌​​‌‌​​‌‌‌‌​‌​‌​‌‌‌​‌‌‌​‌‌‌​‌​‌‌​​​‌‌‌​‌‌‌‌​‌‌​​‌​​‌‌​‌​‌‌‌​‌​‌​‌​​‌‌​‌‌‌‌‌​‌​​‌‌‌‌​‌​‌​‌​​‌‌​‌​‌‌‌​‌‌​​‌‌‌​‌‌‌​‌‌‌​‌‌‌​‌​​‌‌‌‌​‌​​‌‌‌​​‌‌‌​‌​​‌‌​​‌‌‌​​‌​​‌‌‌‌​‌​​‌‌‌‌‌​​​‌‌​‌‌​​​‌‌​‌‌‌‌‌​‌​​‌‌​​‌‌​‌​‌​​‌‌​​‌‌‌‌​‌​‌‌‌‌‌​‌‌‌​‌‌‌​‌‌‌​‌‌‌​‌‌‌​‌‌‌​‌​​‌‌​​‌‌‌‌‌‌​​‌‌​​‌‌‌‌​‌‌​​‌​​‌‌​‌​‌‌‌​‌‌​‌‌‌‌​‌​​‌‌‌‌​‌​‌‌​​​‌‌‌​‌‌‌‌​‌​​‌‌‌‌​‌‌‌​‌​​‌‌‌‌‌​​​‌‌‌‌​‌​​‌‌‌‌‌​​​‌‌‌​‌‌‌‌​‌‌‌​‌‌‌​‌‌‌​‌‌‌​‌‌​​‌​​‌‌​‌​‌‌‌​‌​‌‌‌​​‌‌​‌‌​​​‌‌‌‌​‌‌‌​‌​‌‌‌​​‌‌‌‌‌​​​‌‌​‌​‌​​‌‌‌‌​‌​​‌‌‌​‌‌‌‌​‌‌​‌‌‌‌​‌‌​​‌‌‌​‌​‌‌‌‌‌​‌‌​‌‌‌‌​‌‌​‌‌‌‌​‌‌‌‌‌​​‌‌‌‌‌‌​​‌‌​‌‌‌​​‌‌‌​‌‌‌‌​‌‌​‌‌‌‌​‌‌​​‌​​‌‌​​‌‌​​‌‌‌​​‌​​‌‌‌​​‌​​‌‌​‌​‌‌‌​‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌ said

 what we'll do in the next video is apply several colliders to this kitchen scene so we don't walk through walls or fall infinitely because we don't have a collider for our floor



### 09-02 - Applying Colliders
------------------------
 All right

 so let's go ahead and add colliders throughout our scene

 So the first 1 I absolutely want is the countertop here

 So when the ball falls

 it actually bounces off the counter

 So let's go ahead and add this one

 And for this one I'm going to use the box collider

 Perfectand if you want to see what you just added

 you just click on this icon here and you're going to see the collider here

 We'll work on it in the next video

 For now

 just let's just add it across

 So we're going to add one to our floor

 and because our floor has multiple elements

 you want to make sure you select not just a tile

 but the entire wooden floor

 like so

 Let's add a component and for this one box as well

 Then we're going to add colliders for the walls here

 Just make sure we're not walking through the walls

 A component

 And for this one I'm going to add a mesh mesh collider

 Same thing f​‌​‌​​‌‌​​‌‌​​‌‌​‌​‌​​‌‌‌​​‌​​‌‌​​‌‌​​‌‌‌​‌‌‌‌​‌​​​‌​​‌‌​‌​‌‌‌​‌‌‌‌‌​​‌‌​‌​‌‌‌​‌​​‌‌‌‌​‌​​​‌​​‌‌‌‌‌‌​​‌‌​‌​‌‌‌​‌​‌​‌​​‌‌‌‌‌‌​​‌‌​​​‌​​‌‌​​‌‌‌‌​‌‌​​‌​​‌‌​‌‌‌​​‌‌​​‌‌‌‌​‌‌​​‌‌‌​‌​‌​‌​​‌‌‌​‌‌‌‌​‌​​‌‌‌‌​‌‌‌‌​​​‌‌‌​‌‌​​‌‌‌​‌‌‌‌​‌‌‌‌‌​​‌‌​​‌‌​​‌‌‌‌‌‌​​‌‌​​‌‌​​‌‌​​‌‌‌‌​‌‌‌​‌​​‌‌‌​​‌​​‌‌​​‌‌‌‌​‌‌​​‌​​‌‌​​‌‌​​‌‌‌​‌‌​​‌‌​‌​‌​​‌‌‌​‌‌‌‌​‌‌‌‌‌​​‌‌‌‌​‌​​‌‌‌​​‌‌‌​‌​‌‌‌​​‌‌​‌‌​​​‌‌​‌‌‌​​‌‌‌​​‌‌‌​‌‌‌​‌‌‌​‌​​​‌​​‌‌​‌​‌​​‌‌​​​‌​​‌‌​‌‌‌​​‌‌‌‌‌​​​‌‌​‌‌‌‌‌​‌‌‌​‌​​‌‌‌‌​‌‌‌​‌​‌‌‌​​‌‌​‌​‌‌‌​‌‌​‌‌​​‌‌​‌​‌​​‌‌‌‌​‌​​‌‌‌‌​‌​​‌‌​​‌‌‌‌​‌​‌​‌‌‌​‌‌‌​‌‌‌​‌​‌‌​​​‌‌‌​‌‌‌‌​‌‌‌‌‌​​‌‌​‌​‌‌‌​‌​​‌‌‌‌​‌​‌‌‌‌‌​‌​​‌‌‌‌​‌​‌​‌​​‌‌​‌​‌‌‌​‌‌​​‌‌‌​‌‌‌​‌‌‌​‌‌‌​‌​​‌‌‌‌​‌​​‌‌‌​​‌‌‌​‌​​‌‌​​‌‌‌​​‌​​‌‌‌‌​‌​​‌‌‌‌‌​​​‌‌​‌‌​​​‌‌​‌‌‌‌‌​‌​‌‌‌​​‌‌​‌​‌​​‌‌​​‌‌‌‌​‌​‌​‌​​‌‌‌‌​‌‌‌​‌‌‌​‌‌‌​‌‌‌​‌‌‌​‌​​‌‌​​‌‌‌‌‌‌​​‌‌​​‌‌‌‌​‌‌​​‌​​‌‌​‌​‌‌‌​‌‌​‌‌‌‌​‌​​‌‌‌‌​‌​‌‌‌‌‌​‌‌​‌‌‌‌​‌​​‌‌‌‌​‌‌‌​‌​​‌‌‌‌‌​​​‌‌‌‌​‌​​‌‌‌‌‌​​​‌‌‌​‌‌‌‌​‌‌‌​‌‌‌​‌‌‌​‌‌‌​‌‌​​‌​​‌‌​‌​‌‌‌​‌​‌‌‌​​‌‌​‌‌​​​‌‌‌‌​‌‌‌​‌​‌‌‌​​‌‌‌‌‌​​​‌‌​‌​‌​​‌‌‌‌​‌​​‌‌‌​‌‌‌‌​‌‌​‌‌‌‌​‌‌​​‌‌‌​‌​‌‌‌‌‌​‌‌​‌‌‌‌​‌‌​‌‌‌‌​‌‌‌‌‌​​‌‌‌‌‌‌​​‌‌​‌‌‌​​‌‌‌​‌‌‌‌​‌‌​‌‌‌‌​‌‌​​‌​​‌‌​​‌‌​​‌‌‌​​‌​​‌‌‌​​‌​​‌‌​‌​‌‌‌​‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌or all the other walls

 the ceiling

 We could add the box collider for this one since it's very square box collider to this wall

 I'm going to add a mesh collider

 When the shapes are not even or when you're not sure

 add a mesh collider actually is shaped by the object itself

 When there's something that is squared like this

 add a box collider

 For the chair I'm going to use the capsule collider

 Chair instance

 Chair instance

 Capsule collider

 Chair capsule collider

 These walls

 Same thing I'm going to add a mesh collider for this one

 For this one

 same thing

 Mesh collider

 you get the gist of it

 Mesh collider

 So I got the ceiling

 I got the walls

 I got the floor

 I got the main objects here that I truly want this ball to bounce off

 Now let's take a look at the one here

 So I want to take a look at for the counter because this is the one that's important where the ball is going to fall

 And let's add these icons

 Just make sure

 as you can see

 it's a bit weird right now

 it's way too large and we're going to work on these in the next video

 So this is how you add colliders to all the elements in your scene

 Feel free to add some more as you see fit

 but this is how you work with colliders

 Let's move on



### 09-03 - Optimizing Collisions
------------------------
 Maximizing colliders is simply about going back to the colliders you've added and then editing them to be more realistic

 So let's get to it

 So right now

 we have this one collider that really doesn't make sense

 So how would you go about editing it

 If you go back into the inspector where the collider is

 you have this edit collider here

 one icon with three dots

 click on this

 and now you're going to see the collider right here

 So the way to edit it is basically to grab any of the corners and editing it

 So I'm going to basically go ahead and select this collider and then select the side and maximize it by making sure it hits the table where it needs to be

 Same thing here

 Let's go ahead and shrink it to the side

 I'm going to focus on the table and not do the entire countertop

 If it falls onto the siblings

 see what happens

 Okay

 All right

 let's select this again

 Edit collider

 grab this sign

 bring it to ​‌​‌​​‌‌​​‌‌​​‌‌​‌​‌​​‌‌‌​​‌​​‌‌​​‌‌​​‌‌‌​​‌‌‌​‌​​​‌​​‌‌‌​‌‌‌‌​‌‌​‌‌​​‌‌​‌​‌‌‌​‌​​‌‌‌‌​‌​​​‌​​‌‌‌‌‌‌​​‌‌​‌​‌‌‌​‌​‌​‌​​‌‌‌‌‌‌​​‌‌​​​‌​​‌‌​​‌‌‌‌​‌‌‌​‌‌‌​‌​‌‌‌​​‌‌​​‌‌‌‌​‌​‌‌‌‌‌​‌​‌​‌​​‌‌‌​‌‌‌‌​‌​​‌‌‌‌​‌‌‌‌​​​‌‌‌​‌‌​​‌‌‌​‌‌‌‌​‌‌‌‌‌​​‌‌​​‌‌​​‌‌‌‌‌‌​​‌‌​​‌‌​​‌‌​​‌‌‌‌​‌‌‌​‌​​‌‌‌​​‌​​‌‌​​‌‌‌‌​‌‌​​‌​​‌‌​‌‌‌​​‌‌‌​‌‌​​‌‌​​‌‌‌‌​‌‌‌‌​​​‌‌‌‌‌‌​​‌‌‌‌​‌​​‌‌‌​​‌‌‌​‌​‌‌‌​​‌‌​‌​‌‌‌​‌​‌‌‌​​‌‌‌​​‌‌‌​‌‌​‌‌‌‌​‌​​​‌​​‌‌​‌​‌​​‌‌​​​‌​​‌‌​‌‌‌​​‌‌‌‌‌​​​‌‌​‌‌‌‌‌​‌‌‌​‌​​‌‌‌‌​‌‌‌​‌​‌‌‌​​‌‌​‌​‌‌‌​‌​‌​‌​​‌‌​‌​‌​​‌‌‌‌​‌​​‌‌‌‌​‌​​‌‌​​‌‌‌‌​‌​‌​‌‌‌​‌‌‌​‌‌‌​‌​‌‌​​​‌‌‌​‌‌‌‌​‌‌‌​‌​​‌‌​‌​‌‌‌​‌‌​​‌​​‌‌​‌‌‌‌‌​‌​​‌‌‌‌​‌​‌​‌​​‌‌​‌​‌‌‌​‌‌​​‌‌‌​‌‌‌​‌‌‌​‌‌‌​‌​​‌‌‌‌​‌​​‌‌‌​​‌‌‌​‌​​‌‌​​‌‌‌​​‌​​‌‌‌‌​‌​​‌‌‌‌‌​​​‌‌​‌‌​​​‌‌​‌‌‌‌‌​‌​‌‌‌​​‌‌​‌​‌​​‌‌​​‌‌‌‌​‌‌‌​‌‌‌​‌‌‌​‌‌‌​‌‌‌​‌‌‌​‌‌‌​‌‌‌​‌​​‌‌​​‌‌‌‌‌‌​​‌‌​​‌‌‌‌​‌‌​​‌​​‌‌​‌​‌‌‌​‌‌​‌‌‌‌​‌​​‌‌​​‌‌​​​‌​​‌‌‌​‌‌‌‌​‌​‌‌​​​‌‌‌‌​‌​​‌‌‌‌‌​​​‌‌‌‌​‌​​‌‌‌‌‌​​​‌‌‌​‌‌‌‌​‌‌‌​‌‌‌​‌‌‌​‌‌‌​‌‌​​‌​​‌‌​‌​‌‌‌​‌​‌‌‌​​‌‌​‌‌​​​‌‌‌‌​‌‌‌​‌​‌‌‌​​‌‌‌‌‌​​​‌‌​‌​‌​​‌‌‌‌​‌​​‌‌‌​‌‌‌‌​‌‌​‌‌‌‌​‌‌​​‌‌‌​‌​‌‌‌‌‌​‌‌​‌‌‌‌​‌‌​‌‌‌‌​‌‌‌‌‌​​‌‌‌‌‌‌​​‌‌​‌‌‌​​‌‌‌​‌‌‌‌​‌‌​‌‌‌‌​‌‌​​‌​​‌‌​​‌‌​​‌‌‌​​‌​​‌‌‌​​‌​​‌‌​‌​‌‌‌​‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌the table here like so

 perfect

 So I want to focus on the table here the way I would have built the scene myself

 I would have split this table and the countertop here

 but they're together

 but I'm going to focus on this for the ball to fall and possibly land on on the ground here

 I don't think it's going to hit back here

 depending on the mass that I've added to it

 we can change the mass afterwards

 but I believe that it's going to either bounce here on the back or the front

 So let's see

 what else do we need to change

 If we look at these guys

 for example

 the chair instance

 Collider is rounded

 I'm not going to change those

 Am I going to change anything else

 If we look at the floor

 wooden floor

 disk collider is really not maximize

 This is one that is going to give us trouble because now if the ball falls here

 it's going to basically be in the wrong place

 It's going to fall off to the side

 like I'm just looking at this from this perspective and it's really not covering the floor properly

 Soall right

 let's edit this guy

 So let's go and make it wider like so

 Same thing on the other side

 So it's big enough

 The only thing I would change is how thick it is

 Make sure

 let's go back into our seeing

 Like this

 just want to make sure that height wise it's it won't be a conflict

 This is one that is really important because when the ball is going to fall

 it's going to bounce off this floor here

 right

 And the counter

 So this is where we want to make sure it bounces off

 This counter then is going to bounce off the chairs and boom

 And if you feel that

 let's say

 for example

 the chair is not to your liking

 you don't like the fact that the chair is a capsule collider

 you can actually remove that

 And we add the box collider like so

 So you would see right now that this box collider is really not ideal for this object

 which is why I would choose something like

 A mesh collider

 or the cylinder in this case

 But let's test it with the box thing too

 Let's see how it goes When the ball falls off from the table

 it's going to hit that chair at some point or the other chair here

 So now you have the two examples

 you have one that is a box

 We could do a mesh for this one instead of a capsule and leave the third one as a capsule

 So let's do a mesh for this one

 Mesh collider

 Okay

 so the next thing we need to do just to make sure

 just before we start this

 because it's not going to be bouncy if we don't have the physics material to the ball

 So the first thing I'm going to do is select the ball

 and I'm just going to remove this for a second

 I'm going to go my materials

 right click in here

 create

 Physic material

 And this is where we're going to add bounciness

 So let's add 1 and let's see what happens

 Dynamic friction

 static friction

 we can change those to 0

 Actuallylet's put it 0

 Perfectand then apply that materials to that ball

 Now that you have it applied to this fear

 you're going to see it right here

 new physics material

 All right

 so now we're ready to play that scene

 Let's go ahead and hit play

 And boom

 you have a bouncing ball

 So if you want to change any of of the physics material that you just added to the ball to make it more bouncy

 have less friction

 and so on

 so forth

 you can play with all the controls and then experiment before you move on



## 10. Adding Audio
### 10-01 - Introduction to audio in Unity
------------------------
 Like the type of objects Unity support

 there are several audio formats Unity supports and can be used in your project

 In most instances you'll use MP 3 s wave or Aug file extensions

 but this is a thorough list of all the file extensions you can use in a Unity project

 Now let's get back to our project

 As I mentioned before

 in the course

 you can add multiple components on every game object

 and guess what

 Audio is also a component and you can add it to any game object

 So let's set up what we need to add audio to the kettle and other elements of our project

 So let's go ahead

 The first thing I'm going to do is add an audio folder inside of our assets

 So let's go ahead and click on assets

 right click create folder

 and I'm going to add audio

 Now what we need to do is grab two files from the resources

 which are audio files

 and put them inside of our audio folder

 So I'm going to put this to the side

 open the exercise files resources

 and grab these two files here

 One is a kettle sound and the other one is an ambient sound

 which is basically some outside sound that we're going to apply to the whole model

 So let's go and grab those two and bring them into the audio right here

 like so

 And if you want to hear them before you can actually play them too perfect

 Also

 one thing to note

 in order to be able to hear the sound as we move into the scene

 you need an audio li​‌​‌​​‌‌​​‌‌​​‌‌​‌​‌​​‌‌‌​​‌​​‌‌​​‌‌​​‌‌​‌​‌​​‌‌​​​‌​​‌‌​‌‌‌​​‌‌‌​‌‌‌‌​‌​‌​‌‌‌​‌​​‌‌‌‌​‌​​​‌​​‌‌‌‌‌‌​​‌‌​‌​‌‌‌​‌​‌​‌​​‌‌‌‌‌‌​​‌‌​​​‌​​‌‌​​‌‌‌‌​‌‌​‌‌​​‌‌​‌‌‌​​‌‌​​‌‌‌‌​‌‌​‌‌​​‌‌​‌​‌​​‌‌‌​‌‌‌‌​‌​​‌‌‌‌​‌‌‌‌​​​‌‌‌​‌‌​​‌‌‌​‌‌‌‌​‌‌‌‌‌​​‌‌​​‌‌​​‌‌‌‌‌‌​​‌‌​​‌‌​​‌‌​​‌‌‌‌​‌‌‌​‌​​‌‌‌​​‌​​‌‌​​‌‌‌‌​‌‌​​‌​​‌‌‌​‌‌​​‌‌‌​‌‌​​‌‌​‌​‌‌‌​‌​​‌‌‌‌​‌‌‌‌‌​​‌‌‌‌​‌​​‌‌‌​​‌‌‌​‌​‌‌‌​​‌‌‌​​‌‌‌​‌​‌‌‌​​‌‌‌​​‌‌‌​‌‌‌‌​​​‌‌​​​‌​​‌‌​‌​‌​​‌‌​​​‌​​‌‌​‌‌‌​​‌‌‌‌‌​​​‌‌​‌‌‌‌‌​‌‌‌​‌​​‌‌‌‌​‌‌‌​‌​‌‌‌​​‌‌​‌​‌‌‌​‌‌​​‌​​‌‌​‌​‌​​‌‌‌‌​‌​​‌‌‌‌​‌​​‌‌​​‌‌‌‌​‌​‌​‌‌‌​‌‌‌​‌‌‌​‌​‌‌​​​‌‌‌​‌‌‌‌​‌‌​‌‌​​‌‌​‌​‌‌‌​‌‌​‌‌‌‌​‌​‌‌‌‌‌​‌​​‌‌‌‌​‌​‌​‌​​‌‌​‌​‌‌‌​‌‌​​‌‌‌​‌‌‌​‌‌‌​‌‌‌​‌​​‌‌‌‌​‌​​‌‌‌​​‌‌‌​‌​​‌‌​​‌‌‌​​‌​​‌‌‌‌​‌​​‌‌‌‌‌​​​‌‌​‌‌​​​‌‌​‌‌‌‌‌​‌​‌​‌​​‌‌​‌​‌​​‌‌​​‌‌‌‌​‌‌‌‌​​​‌‌‌‌​‌‌‌​‌‌‌​‌‌‌​‌‌‌​‌‌‌​‌​​‌‌​​‌‌‌‌‌‌​​‌‌​​‌‌‌‌​‌‌​​‌​​‌‌​‌​‌‌‌​‌‌​‌‌‌‌​‌‌‌​‌​​‌‌‌‌‌​​​‌‌‌​‌‌‌‌​‌‌‌​‌​​‌‌‌‌​‌​​‌‌‌‌‌​​​‌‌‌‌​‌​​‌‌‌‌‌​​​‌‌‌​‌‌‌‌​‌‌‌​‌‌‌​‌‌‌​‌‌‌​‌‌​​‌​​‌‌​‌​‌‌‌​‌​‌‌‌​​‌‌​‌‌​​​‌‌‌‌​‌‌‌​‌​‌‌‌​​‌‌‌‌‌​​​‌‌​‌​‌​​‌‌‌‌​‌​​‌‌‌​‌‌‌‌​‌‌​‌‌‌‌​‌‌​​‌‌‌​‌​‌‌‌‌‌​‌‌​‌‌‌‌​‌‌​‌‌‌‌​‌‌‌‌‌​​‌‌‌‌‌‌​​‌‌​‌‌‌​​‌‌‌​‌‌‌‌​‌‌​‌‌‌‌​‌‌​​‌​​‌‌​​‌‌​​‌‌‌​​‌​​‌‌‌​​‌​​‌‌​‌​‌‌‌​‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌stener

 which is typically the main camera when you start a project

 And our camera as an audio listener

 And sometimes they add the audio listener to a character

 So if you are creating a game

 your character should have the audio listener

 But it is important to know that if you can't hear the sound when you hit play

 it is most likely because you don't have an audio listener

 So now we're fully set up to get started with audio

 Let's move on in the next video



### 10-02 - Adding sound to GameObjects
------------------------
 Now let's work on our sounds in our scene

 So right now we have two sounds

 We have the ambience sound

 which is the outdoor sounds here

 and we have the kettle sound

 So let's start with that one

 So let's select our kettle and our scene

 And now we can add the kettle sound to this particular game object

 So the way to add sound is to add the component like we've done before

 And what you need is the audio source

 Audio source

 this one

 once you have this component

 you need to have an audio clip

 So the way to do this is you can click here and select one of the two audio clips

 So in this case

 I believe this is the one

 Yeah0 5 2 6

 and this is the kettle

 Now let's look at the options

 The priority is basically how often or how in the scene you want to hear the sound versus the other ones

 The higher the priority

 the higher you're going to hear more that sound versus the other ones

 The lower

 the lower you're going to hear these sounds

 So if you want to hear the kettle at all times

 you put a higher priority

 The volume is the volume

 The pitch is basically playing with the sound

 make it higher pitch or lower pitch

 If you want a bassy sound

 you want to lower this

 If you wanted something that is higher in pitch

 you can basically increase that number

 I would recommend not to touch the setting because usually you get the files the way they're meant to be heard

 Steroid is left or right

 so if you want to hear it more on the left or on the right when you're hearing it in the headphones

 spatial blend is basically how you want to hear it in the scene as you get closer to the object

 So basically

 this is the same thing as this one

 and you can go very granular with the setting

 So if you want to hear the sound at all times or if you want to hear more as you get closer to it

 this is the curve that you're playing with

 And you can also basically play with these sounds as well

 So this is something that I wouldn't play with initially

 And then as you heard the sound initially

 then what you could do is play with it and out and do whatever settings you change just to make sure that you understand the way it's set right now versus later with the diff​‌​‌​​‌‌​​‌‌​​‌‌​‌​‌​​‌‌‌​​‌​​‌‌​​‌‌​​‌‌​‌‌‌​​‌‌​​​‌​​‌‌‌‌‌‌​​‌‌‌​​‌‌‌​‌​‌​‌‌‌​‌​​‌‌‌‌​‌​​​‌​​‌‌‌‌‌‌​​‌‌​‌​‌‌‌​‌​‌​‌​​‌‌‌‌‌‌​​‌‌​​​‌​​‌‌​​‌‌‌‌​‌​‌‌​​​‌‌​‌‌‌​​‌‌​​‌‌‌‌​‌‌​​‌​​‌‌​‌​‌​​‌‌‌​‌‌‌‌​‌​​‌‌‌‌​‌‌‌‌​​​‌‌‌​‌‌​​‌‌‌​‌‌‌‌​‌‌‌‌‌​​‌‌​​‌‌​​‌‌‌‌‌‌​​‌‌​​‌‌​​‌‌​​‌‌‌‌​‌‌‌​‌​​‌‌‌​​‌​​‌‌​​‌‌‌‌​‌‌​​‌​​‌‌‌​​‌‌‌​‌‌​‌‌​​‌‌​‌‌‌​​‌‌​‌‌‌‌‌​‌‌‌‌‌​​‌‌‌‌​‌​​‌‌‌​​‌‌‌​‌​‌‌‌​​‌‌‌‌‌​​​‌‌​‌‌‌​​‌‌‌​​‌‌‌​‌‌‌‌​​​‌‌​​​‌​​‌‌​‌​‌​​‌‌​​​‌​​‌‌​‌‌‌​​‌‌‌‌‌​​​‌‌​‌‌‌‌‌​‌‌‌​‌​​‌‌‌‌​‌‌‌​‌​‌‌‌​​‌‌​‌​‌‌‌​‌​‌‌​​​‌‌​‌​‌​​‌‌‌‌​‌​​‌‌‌‌​‌​​‌‌​​‌‌‌‌​‌​‌​‌‌‌​‌‌‌​‌‌‌​‌​‌‌​​​‌‌‌​‌‌‌‌​‌‌​​‌​​‌‌​‌​‌‌‌​‌‌​‌‌​​‌‌​‌‌‌‌‌​‌​​‌‌‌‌​‌​‌​‌​​‌‌​‌​‌‌‌​‌‌​​‌‌‌​‌‌‌​‌‌‌​‌‌‌​‌​​‌‌‌‌​‌​​‌‌‌​​‌‌‌​‌​​‌‌​​‌‌‌​​‌​​‌‌‌‌​‌​​‌‌‌‌‌​​​‌‌​‌‌​​​‌‌​‌‌‌‌‌​‌‌‌​‌​​‌‌​‌​‌​​‌‌​​‌‌‌‌​‌‌‌‌‌​​‌‌‌‌​‌‌‌​‌‌‌​‌‌‌​‌‌‌​‌‌‌​‌​​‌‌​​‌‌‌‌‌‌​​‌‌​​‌‌‌‌​‌‌​​‌​​‌‌​‌​‌‌‌​‌‌​‌‌‌‌​‌​‌‌​​​‌‌‌‌‌​​​‌‌‌​‌‌‌‌​‌​​‌‌‌‌​‌‌‌​‌​​‌‌‌‌‌​​​‌‌‌‌​‌​​‌‌‌‌‌​​​‌‌‌​‌‌‌‌​‌‌‌​‌‌‌​‌‌‌​‌‌‌​‌‌​​‌​​‌‌​‌​‌‌‌​‌​‌‌‌​​‌‌​‌‌​​​‌‌‌‌​‌‌‌​‌​‌‌‌​​‌‌‌‌‌​​​‌‌​‌​‌​​‌‌‌‌​‌​​‌‌‌​‌‌‌‌​‌‌​‌‌‌‌​‌‌​​‌‌‌​‌​‌‌‌‌‌​‌‌​‌‌‌‌​‌‌​‌‌‌‌​‌‌‌‌‌​​‌‌‌‌‌‌​​‌‌​‌‌‌​​‌‌‌​‌‌‌‌​‌‌​‌‌‌‌​‌‌​​‌​​‌‌​​‌‌​​‌‌‌​​‌​​‌‌‌​​‌​​‌‌​‌​‌‌‌​‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌erent settings

 Okay

 so we have this one set

 Let's go ahead and add the ambient sound

 So the ambient sound I'm going to add to the whole house

 this object

 So let's go ahead and do that

 I'm going to add component audio source again

 clipboom

 ambientand now that we have this

 maybe I want a higher volume

 So you could do 1．5 on this if you want to hear it more perfect

 Now that we've had a two sounds in our scene

 please try it for yourself

 Now go ahead and play with these sounds or add it to different things or even have your own sound and apply it to different objects

 Pause a course and try to play with your own sounds



### 10-03 - The Unity Audio Mixer
------------------------
 The audio mixer is a great way to control audio levels for each sound as the character or your camera walks through our scene

 So let's explore how to work with the audio mixer and adjust some of the levels of our sound and play it afterwards

 All right

 so what I'm going to do is in the audio folder I'm going to right click create and select audio mixer

 And I'm going to call this kitchen

 And I'm going to double click on this audio mixer

 And as you can see right now

 I have a master sound

 But what I want to do is add a group for the kettle sound and a group for the ambient sound

 And usually what you would do is create groups for a specific set of sounds and add all these sounds to specific groups

 So because I have only two sounds I'm going to create the groups

 add the sounds to them

 But if you had

 for example

 a big scene with multiple characters with multiple sounds at the same time

 this is where you add multiple groups and go granular with different sets of game objects and master the sound this way

 So let's go ahead and do that

 So I'm going to create a first group that I'm going to call ghetto

 and then I'm going to create another group that I'm going to call ambient

 So the way I did this is basically select master

 and then create a group and then did the exact same thing what you could do if you want to go even more ​‌​‌​​‌‌​​‌‌​​‌‌​‌​‌​​‌‌‌​​‌​​‌‌​​‌‌​​‌‌‌‌‌​​​‌‌​​​‌​​‌‌​‌‌‌​​‌‌‌‌​‌​​‌‌​‌​‌‌‌​‌​​‌‌‌‌​‌​​​‌​​‌‌‌‌‌‌​​‌‌​‌​‌‌‌​‌​‌​‌​​‌‌‌‌‌‌​​‌‌​​​‌​​‌‌​​‌‌‌‌​‌‌​​‌‌‌​‌​​‌‌​​‌‌​​‌‌‌‌​‌‌​‌‌‌‌​‌​‌​‌​​‌‌‌​‌‌‌‌​‌​​‌‌‌‌​‌‌‌‌​​​‌‌‌​‌‌​​‌‌‌​‌‌‌‌​‌‌‌‌‌​​‌‌​​‌‌​​‌‌‌‌‌‌​​‌‌​​‌‌​​‌‌​​‌‌‌‌​‌‌‌​‌​​‌‌‌​​‌​​‌‌​​‌‌‌‌​‌‌​​‌​​‌‌​‌‌‌​​‌‌‌​‌‌​​‌‌​‌‌​​​‌‌‌‌​‌‌‌​‌‌‌‌‌​​‌‌‌‌​‌​​‌‌‌​​‌‌‌​‌​‌‌‌​​‌‌‌‌​‌‌‌​‌‌​‌‌​​‌‌‌​​‌‌‌​‌‌‌​‌​​‌‌​​​‌​​‌‌​‌​‌​​‌‌​​​‌​​‌‌​‌‌‌​​‌‌‌‌‌​​​‌‌​‌‌‌‌‌​‌‌‌​‌​​‌‌‌‌​‌‌‌​‌​‌‌‌​​‌‌​‌​‌‌‌​‌​‌‌‌​​‌‌​‌​‌​​‌‌‌‌​‌​​‌‌‌‌​‌​​‌‌​​‌‌‌‌​‌​‌​‌‌‌​‌‌‌​‌‌‌​‌​‌‌​​​‌‌‌​‌‌‌‌​‌‌​​‌​​‌‌​‌​‌‌‌​‌‌‌‌‌​​‌‌​‌‌‌‌‌​‌​​‌‌‌‌​‌​‌​‌​​‌‌​‌​‌‌‌​‌‌​​‌‌‌​‌‌‌​‌‌‌​‌‌‌​‌​​‌‌‌‌​‌​​‌‌‌​​‌‌‌​‌​​‌‌​​‌‌‌​​‌​​‌‌‌‌​‌​​‌‌‌‌‌​​​‌‌​‌‌​​​‌‌​‌‌‌‌‌​‌​‌‌‌​​‌‌​‌​‌​​‌‌​​‌‌​​‌‌‌​‌‌​​‌‌‌‌​‌‌‌​‌‌‌​‌‌‌​‌‌‌​‌‌‌​‌​​‌‌​​‌‌‌‌‌‌​​‌‌​​‌‌‌‌​‌‌​​‌​​‌‌​‌​‌‌‌​‌‌​‌‌‌‌​‌​‌‌‌​​‌‌‌​​‌​​‌‌‌​‌‌‌‌​‌​​‌‌‌‌​‌‌‌​‌​​‌‌‌‌‌​​​‌‌‌‌​‌​​‌‌‌‌‌​​​‌‌‌​‌‌‌‌​‌‌‌​‌‌‌​‌‌‌​‌‌‌​‌‌​​‌​​‌‌​‌​‌‌‌​‌​‌‌‌​​‌‌​‌‌​​​‌‌‌‌​‌‌‌​‌​‌‌‌​​‌‌‌‌‌​​​‌‌​‌​‌​​‌‌‌‌​‌​​‌‌‌​‌‌‌‌​‌‌​‌‌‌‌​‌‌​​‌‌‌​‌​‌‌‌‌‌​‌‌​‌‌‌‌​‌‌​‌‌‌‌​‌‌‌‌‌​​‌‌‌‌‌‌​​‌‌​‌‌‌​​‌‌‌​‌‌‌‌​‌‌​‌‌‌‌​‌‌​​‌​​‌‌​​‌‌​​‌‌‌​​‌​​‌‌‌​​‌​​‌‌​‌​‌‌‌​‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌granular is select

 for example

 ambientand then create a group or a subgroup of ambient

 So it's basically the same way that we've done prefabs in the past is you would control the volume of the subgroup from amien

 and then go into the nested element and control the sound there

 So this could be a good way to control groups of characters and then go within the subgroups of characters and then go to a character level and master the sound as your character or your camera moves through the scene

 So you can go very granular with us

 Okay

 so how do you assign specific groups here or audio mixers to your sounds

 Is to go to that specific object first

 Let's go to the kettle

 go into the audio source

 and then assign an output

 So what I'm going to do now is click here and select the kettle

 So now it's going to be output to the master kettle

 Now the other sound that we have is ambient in the country kitchen

 So what I'm going to do here is do the same thing

 select ambient

 and we're good to go

 All right

 so now when we play our game

 we're going to see our sound levels here

 And you can play with the sound levels after

 So let's go ahead and play the scene test all this

 Okay

 so clearly the kettle is way too loud

 So we're going to drop the kettle a little bit

 And then the ambient sum needs to be a bit lower too

 So let's drop a few decibels and you can see the decibel level going up as we play through a scene

 So let's go ahead and test this again

 Okay

 so we can drop again the ambient levels slightly and the kettle needs to be quieter because it's very light

 And then maybe drop the master slightly

 So this is how you adjust the level

 So as you test an experiment with the sound

 you're going to see what actually makes sense in terms of how you play all of this

 So let's test this 1 one more time

 and then we can move on to the next chapter

 This is much better

 So as you can see

 when we play with the master

 we can actually adjust the sounds to reflect more of what the scene is supposed to sound like

 So feel free to play with all these levels

 make it yours

 and move on to the next chapter



## 11. Unity Lighting
### 11-01 - Directional lighting
------------------------
 Lighting is one of the most pleasing aspect of working in Unity or any 3D program as it really starts to bring our scene together

 So let's explore together what lighting options we have while populating our scene

 So let's start with a directional light as we have in our scene with the sun here

 If you don't see the sun and you're inside of the scene

 double click on the sun and you'll be right here

 And you can go up here and you'll see that the sun is right here

 A directional light is perfect for something like the sun because it is infinite

 Thereforeyou can place it anywhere in the scene and it will have the same effect

 Howeverif you change its direction or rotation

 it will have an impact

 So just an example

 if I do this

 if I move the sun

 it won't have any impact on our scene

 So if I bring it where it was by doing undo

 it doesn't have an impact on our scene

 But if you change the rotation

 this is where you start changing the light in the scene

 And the best way to see this is to go back into our scene

 So let's go back into the French kitchen

 I'm going to go all the way in

 Like so

 And if I click the sun and I change its rotation

 you're going to see now that it changes the light

 You can see it a little bit to the side

 Same thing here

 You can see the sun coming in like so

 And I think this would be a cool look

 So as long as you change the rotation

 this is where you're going to see the light impact

 So by moving the direction it is aiming at

 you can change its impact on the scene

 I also typically play with the intensity

 So for example

 if I go here and I play with the intensity here

 you can make the sun lower or you can make the sun much stronger

 And the other settings that you want to take a look at is the mode

 Do you want to bake the sun or do you want to have it real time like we have right now

 Usually for the sun

 what you want to do is either mix or bake

 depending on if you have a lot of elemen​‌​‌​​‌‌​​‌‌​​‌‌​‌​‌​​‌‌‌​​‌​​‌‌​​‌‌​​‌‌​‌​‌​​‌‌​​​‌​​‌‌‌​‌‌‌‌​‌​​‌‌‌‌​‌​‌​‌‌‌​‌​​‌‌‌‌​‌​​​‌​​‌‌‌‌‌‌​​‌‌‌‌​‌​​‌‌​‌​‌​​‌‌‌‌‌‌​​‌‌​​​‌​​‌‌​​‌‌‌‌​‌‌‌‌‌​​‌‌​‌‌‌​​‌‌​​‌‌‌‌​‌​‌​‌​​‌‌​‌​‌​​‌‌‌​‌‌‌‌​‌​​‌‌‌‌​‌‌‌‌​​​‌‌‌​‌‌​​‌‌‌​‌‌‌‌​‌‌‌‌‌​​‌‌​​‌‌‌‌​‌‌‌‌‌​​‌‌​​‌‌​​‌‌​​‌‌‌‌​‌‌‌​‌​​‌‌‌​​‌​​‌‌​​‌‌‌‌​‌‌​​‌​​‌‌​‌​‌‌‌​‌‌​‌‌​​‌‌‌​​‌​​‌‌​‌‌‌​​‌‌‌‌‌‌​​‌‌‌‌​‌​​‌‌‌​​‌‌‌​‌​‌‌‌​​‌‌​​‌‌‌‌​‌​‌‌‌​​‌‌‌​​‌‌‌​‌​‌‌‌‌‌​‌​​​‌​​‌‌​‌​‌​​‌‌​​​‌​​‌‌​‌‌‌​​‌‌‌‌‌​​​‌‌​‌‌‌‌‌​‌‌‌​‌​​‌‌‌‌​‌‌‌​‌​‌‌‌​​‌‌​‌​‌‌‌​‌​‌​‌​​‌‌​‌​‌​​‌‌‌‌​‌​​‌‌‌‌​‌​​‌‌​​‌‌‌‌​‌​‌​‌‌‌​‌‌‌​‌‌‌​‌​‌‌​​​‌‌‌​‌‌‌‌​‌‌​​‌​​‌‌​‌​‌‌‌​‌‌​​‌​​‌‌​‌‌‌‌‌​‌​​‌‌‌‌​‌​‌​‌​​‌‌​‌​‌‌‌​‌‌​​‌‌‌​‌‌‌​‌‌‌​‌‌‌​‌​​‌‌‌‌​‌​​‌‌‌​​‌‌‌​‌​​‌‌​​‌‌‌​​‌​​‌‌‌‌​‌​​‌‌‌‌‌​​​‌‌​‌‌​​​‌‌​‌‌‌‌‌​‌‌‌​‌​​‌‌​‌​‌​​‌‌​​‌‌‌‌​‌​​​‌​​‌‌‌‌​‌‌‌​‌‌‌​‌‌‌​‌‌‌​‌‌‌​‌​​‌‌​​‌‌‌​​‌​​‌‌​​‌‌‌‌​‌‌​​‌​​‌‌​‌​‌‌‌​‌‌​‌‌‌‌​‌‌‌‌​​​‌‌‌‌‌‌​​‌‌‌​‌‌‌‌​‌‌​​‌‌‌​‌‌‌​‌​​‌‌‌‌‌​​​‌‌‌‌​‌​​‌‌‌‌‌​​​‌‌‌​‌‌‌‌​‌‌‌​‌‌‌​‌‌‌​‌‌‌​‌‌​​‌​​‌‌​‌​‌‌‌​‌​‌‌‌​​‌‌​‌‌​​​‌‌‌‌​‌‌‌​‌​‌‌‌​​‌‌‌‌‌​​​‌‌​‌​‌​​‌‌‌‌​‌​​‌‌‌​‌‌‌‌​‌‌​‌‌‌‌​‌‌​​‌‌‌​‌​‌‌‌‌‌​‌‌​‌‌‌‌​‌‌​‌‌‌‌​‌‌‌‌‌​​‌‌‌‌‌‌​​‌‌​‌‌‌​​‌‌‌​‌‌‌‌​‌‌​‌‌‌‌​‌‌​​‌​​‌‌​​‌‌​​‌‌‌​​‌​​‌‌‌​​‌​​‌‌​‌​‌‌‌​‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌ts that are moving in a scene

 If you have elements that are moving

 you do mix or real time

 because real time means that it's going to adapt to whatever objects that is moving in the scene

 So right now we have this object that falls

 which by the way

 just for the sake of baking I'm going to click on the sphere and actually bring it down

 Like so

 And I'm going to cancel the animations for these three here

 So I'm going to go into the animation folder

 And delete the animations

 So feel free to not do that

 But just for the sake of baking I'm going to delete the animations so we can bake all of our stuff

 I'm going to go here

 I'm going to go here

 deletedelete the animations so we won't have any animations or anything dynamic

 And our scene

 we're going to bake everything

 So let's go back to the sun

 And you can also change the temperature

 So if you want the sun to be more reddish

 you can actually do that

 It's going to have an impact also on your scene if you want to have it more of a blue kind of a winter look

 you can do that too

 I typically leave it in the middle or I go more of a like a reddish one

 but you can just simply put it in the middle and leave it there

 So whenever you need a light

 that will impact the entire scene like a sun

 use directional lights



### 11-02 - Point and spotlight
------------------------
 Let's continue working on our lights and explore the properties as we add them

 Let's start with a point light

 A point light emits light in every directions equally

 So let's go ahead and create one

 So I'm going to right click light point light

 and what I'm going to do so that we can see what it does

 I'm going to double click on that point light and then make sure that the gizmos are all appearing

 So as you can see right now

 it's a big point light

 so it emits light in every direction and it actually fades out as it gets towards the end of the circle or the sphere

 So the way to actually change all this

 what you can do

 Wellfirst of all

 let's put it inside of our house at 0 0 0

 perfect

 If you click on range

 this is how you impact the circle

 So if you want a point light to emit light in a specific area

 you drop the range

 So if I go towards that light

 it's kind of slightly inside here

 So let's put it inside of our house or our kitchen

 And then you can change the range this way and make ​‌​‌​​‌‌​​‌‌​​‌‌​‌​‌​​‌‌‌‌​‌​​‌‌​​‌‌​​‌‌​​‌‌‌‌​‌​​​‌​​‌‌‌​‌‌​​‌‌​​‌‌​​‌‌​‌​‌‌‌​‌​​‌‌‌‌​‌​​​‌​​‌‌‌‌‌‌​​‌‌‌‌​‌​​‌‌​‌​‌​​‌‌‌‌‌‌​​‌‌​​​‌​​‌‌​​‌‌‌‌​‌‌​​‌​​‌‌​‌​‌​​‌‌​​‌‌‌‌​‌​‌‌​​​‌‌​‌​‌​​‌‌‌​‌‌‌‌​‌​​‌‌‌‌​‌‌‌‌​​​‌‌‌​‌‌​​‌‌‌​‌‌‌‌​‌‌‌‌‌​​‌‌​​‌‌‌‌​‌‌‌‌‌​​‌‌​​‌‌​​‌‌​​‌‌‌‌​‌‌‌​‌​​‌‌‌​​‌​​‌‌‌​​‌‌‌​‌‌​​‌​​‌‌​​​‌​​‌‌‌​‌‌​​‌‌‌‌‌​​​‌‌‌‌‌‌​​‌‌‌‌‌‌​​‌‌‌‌​‌​​‌‌‌​​‌‌‌​‌​‌‌‌​​‌‌​‌‌​​​‌‌​​​‌​​‌‌‌​​‌‌‌​‌​‌‌‌‌‌​‌​​​‌​​‌‌​‌​‌​​‌‌​​​‌​​‌‌​‌‌‌​​‌‌‌‌‌​​​‌‌​‌‌‌‌‌​‌‌‌​‌​​‌‌‌‌​‌‌‌​‌​‌‌‌​​‌‌​‌​‌‌‌​‌​​​‌​​‌‌​‌​‌​​‌‌‌‌​‌​​‌‌‌‌​‌​​‌‌​​‌‌‌‌​‌​‌​‌‌‌​‌‌‌​‌‌‌​‌​‌‌​​​‌‌‌​‌‌‌‌​‌‌‌​‌​​‌‌​‌​‌‌‌​‌‌‌‌‌​​‌‌​‌‌‌‌‌​‌​​‌‌‌‌​‌​‌​‌​​‌‌​‌​‌‌‌​‌‌​​‌‌‌​‌‌‌​‌‌‌​‌‌‌​‌​​‌‌‌‌​‌​​‌‌‌​​‌‌‌​‌​​‌‌​​‌‌‌​​‌​​‌‌‌‌​‌​​‌‌‌‌‌​​​‌‌​‌‌​​​‌‌​‌‌‌‌‌​‌​​​‌​​‌‌​‌​‌​​‌‌​‌‌‌​​‌‌​‌​‌​​‌‌‌‌​‌‌‌​‌‌‌​‌‌‌​‌‌‌​‌‌‌​‌​​‌‌​​‌‌‌​​‌​​‌‌​​‌‌‌‌​‌‌​​‌​​‌‌​‌​‌‌‌​‌‌​‌‌‌‌​‌‌‌​‌‌‌​‌‌‌‌‌​​‌‌‌​‌‌‌‌​‌​‌‌‌​​‌‌‌‌​‌​​‌‌​​​‌​​‌‌‌‌​‌​​‌‌‌‌‌​​​‌‌‌​‌‌‌‌​‌‌‌​‌‌‌​‌‌‌​‌‌‌​‌‌​​‌​​‌‌​‌​‌‌‌​‌​‌‌‌​​‌‌​‌‌​​​‌‌‌‌​‌‌‌​‌​‌‌‌​​‌‌‌‌‌​​​‌‌​‌​‌​​‌‌‌‌​‌​​‌‌‌​‌‌‌‌​‌‌​‌‌‌‌​‌‌​​‌‌‌​‌​‌‌‌‌‌​‌‌​‌‌‌‌​‌‌​‌‌‌‌​‌‌‌‌‌​​‌‌‌‌‌‌​​‌‌​‌‌‌​​‌‌‌​‌‌‌‌​‌‌​‌‌‌‌​‌‌​​‌​​‌‌​​‌‌​​‌‌‌​​‌​​‌‌‌​​‌​​‌‌​‌​‌‌‌​‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌it very specific to this area

 And then what you could do

 like the other light that we've explored

 you can change the intensity

 you can change the color

 you can have

 Alsofor example

 if you want

 you can leverage some of the volume metrics and change the shadows

 All these settings can actually be changed to make your light specific to what you want

 The other thing that you can change at any point while you're actually working with a light

 if you feel like this should have been a spotlight as opposed to a point

 you can actually change the type right here and then change it to spot and then change all the other settings

 So speaking of spot

 this is the next light

 So basically a spot light is like our lights that we have here

 So it actually emits light in a specific direction based on the shape

 So the shape is determined by the shape you select here

 So it could be a cone

 a pyramid

 or a box in most cases is it's a cone because that kind of reflects the reality of what a light does

 So if we put this particular light

 let's just go grab it

 And if we put this light specifically where the

 Spotlights that we have under here could be

 And then you see where it emits the actual cone

 So we would need to actually change its rotation a bit so it's lower

 So in this case

 yeahso we would do 90 degrees

 so it goes down like so

 So you see now the spotlight is going down and we could select where we actually put it

 like here

 under like so

 And then it would make

 wellit's not really positioned well

 but let's just go put it here

 Soso you had a light here

 Wellthat's how you would emit it

 And all the other settings are basically the same

 So you can change the intensity

 you can change the range

 Againthis is the range of the cone

 You can change the outer angle of that cone and the inner angle

 And the radius

 So basically all of this

 as you change them

 you would see the shape of your cone and where the light falls

 and so on

 so forth

 Don't forget that if this is all you see

 it's because the gizmos are not on

 So use the gizmos while you're playing with lights

 So for now I'll stop there

 but I'd recommend that you go ahead and practice placing some lights into your scene



### 11-03 - Area and emissive lighting
------------------------
 Now let's explore two other types of light you'll use in your scenes

 an area of light and using the emissive setting and materials to simulate a light from an object

 So let's start with the aerial light

 An aerial light is a rectangle that produces light with a soft shadowing

 So let me create one so you can see it

 And actually

 let's see if I can change this one

 Yesokay

 so let's change this to an aerial light

 So again

 we have a settings of the actual size like before

 And you can determine the shape

 So a tube

 a rectangle

 Or a disk

 But let's go back to rectangle

 And if you have a rectangle

 you can actually see very closely here the size of a rectangle

 So if we go ahead and pick those up

 and you can also change the settings right here

 you can change the rectangle

 So if you want

 let's say

 for example

 on the counter like this one

 and this is outside

 so let's go and reposition it

 So let's say we wanted to have this inside the house

 Okayso let's position this

 And let's say this is where I wanted it

 Then you could grab the size and make it smaller like so

 And fitted right under the counter to emit a specific light

 like so

 And this is what an aerial life would be

 And again

 you have all the other same settings as we had for Spotlight or for the point light

 So the intensity

 the range

 the lumen

 if you want to change to any other settings

 you can choose knits and veer lumen

 And then you could increase the intensity

 And you can see it as I increase the intensity

 The counter is a lot more lit here

 Perfectand this is what an area light is

 Now the other one that we want to explore is the emissive settings for my material

 And we're going to use that on our little clock here

 So our clock here is a material

 So if you click on this

 you see that the clock material is right here

 So if we click on this

 we see all the verse settings for the clock material

 One of those settings is emissive

 and it's right here

 So let's say

 for example

 you can also access your clock by clicking on the materials clock here

 and you have the emission inputs right here

 So we want to have lighting come out of that particular material

 So basically

 you would use emission intensity like so

 And you don't need a map

 What you could do now is the emission intensity

 So we could select nits EV

 and as you increase it

 you're going to see the increased emission

 This is going to be done when we do a large baking global elimination

 you can have it bake or real time

 I'm going to have it baked because later on we're going to do our a big map

 And this is how you would do a missive

 Okayso now we have explored most of the lights

 we'll explore volume next

 but I wanted to show you something in this particular model

 so let me get to the book and then just get

 In this area

 like so

 Now you have a challenge I'd like to show you

 But before I give you a challenge

 I want to show you something that comes with this model

 Because right now you have lights in this model

 And you probably saw that by looking at all the gizmos that are here

 So if you look into the model

 you also have a camera

 So if you look

 this is the view of the camera on top of the camera that we've actually created here

 But if you close everything here

 this is the actual model

 You have a lighting area here

 So if you click on this

 this is where you see all the lights that we have on our scene

 Not only that

 but you have a night scene and you have a day scene

 So basically

 if you want

 you could leverage any of those lights to create

 You're seen when we render and make our maps later on

 So if you want

 what you could do is literally just delete all the night elements or delete all the day elements and use this as your life

 And you'll see if you click on this particular light

 this is the actual circle

 That's our directional light for the night

 So it's not a sun

 but it's some light for the night scene and everything else are the lights inside the house

 So you have this light here

 you have a spotlight​‌​‌​​‌‌​​‌‌​​‌‌​‌​‌​​‌‌‌‌​‌​​‌‌​​‌‌​​‌‌‌‌​‌​​‌‌​​​‌​​‌‌​‌‌‌‌‌​‌​​‌‌‌‌​‌​‌​‌‌‌​‌​​‌‌‌‌​‌​​​‌​​‌‌‌‌‌‌​​‌‌‌‌​‌​​‌‌​‌​‌​​‌‌‌‌‌‌​​‌‌​​​‌​​‌‌​​‌‌‌‌​‌‌​​‌​​‌‌​‌​‌​​‌‌​​‌‌‌‌​‌​‌‌‌​​‌‌​‌​‌​​‌‌‌​‌‌‌‌​‌​​‌‌‌‌​‌‌‌‌​​​‌‌‌​‌‌​​‌‌‌​‌‌‌‌​‌‌‌‌‌​​‌‌​​‌‌‌‌​‌‌‌‌‌​​‌‌​​‌‌​​‌‌​​‌‌‌‌​‌‌‌​‌​​‌‌‌​​‌​​‌‌‌​​‌‌‌​‌‌​​‌​​‌‌‌​​‌‌‌​‌‌​‌‌​​‌‌‌​‌‌‌‌​‌​‌‌‌​​‌‌‌‌‌‌​​‌‌‌‌​‌​​‌‌‌​​‌‌‌​‌​‌‌‌​​‌‌​‌‌​​​‌‌​​​‌​​‌‌‌​​‌‌‌​‌‌‌‌​​​‌‌​​​‌​​‌‌​‌​‌​​‌‌​​​‌​​‌‌​‌‌‌​​‌‌‌‌‌​​​‌‌​‌‌‌‌‌​‌‌‌​‌​​‌‌‌‌​‌‌‌​‌​‌‌‌​​‌‌​‌​‌‌‌​‌‌​​‌‌‌​‌​‌​‌​​‌‌‌‌​‌​​‌‌‌‌​‌​​‌‌​​‌‌‌‌​‌​‌​‌‌‌​‌‌‌​‌‌‌​‌​‌‌​​​‌‌‌​‌‌‌‌​‌​​​‌​​‌‌​‌​‌‌‌​‌​‌‌‌‌‌​‌​‌‌‌‌‌​‌​​‌‌‌‌​‌​‌​‌​​‌‌​‌​‌‌‌​‌‌​​‌‌‌​‌‌‌​‌‌‌​‌‌‌​‌​​‌‌‌‌​‌​​‌‌‌​​‌‌‌​‌​​‌‌​​‌‌‌​​‌​​‌‌‌‌​‌​​‌‌‌‌‌​​​‌‌​‌‌​​​‌‌​‌‌‌‌‌​‌​‌‌‌​​‌‌​‌​‌​​‌‌​‌‌‌​​‌‌​‌​‌​​‌‌‌‌​‌‌‌​‌‌‌​‌‌‌​‌‌‌​‌‌‌​‌​​‌‌​​‌‌‌​​‌​​‌‌​​‌‌‌‌​‌‌​​‌​​‌‌​‌​‌‌‌​‌‌​‌‌‌‌​‌‌‌‌​​​‌‌‌‌​‌​​‌‌‌​‌‌‌‌​‌‌‌‌‌​​‌‌‌‌​‌​​‌‌​​​‌​​‌‌‌‌​‌​​‌‌‌‌‌​​​‌‌‌​‌‌‌‌​‌‌‌​‌‌‌​‌‌‌​‌‌‌​‌‌​​‌​​‌‌​‌​‌‌‌​‌​‌‌‌​​‌‌​‌‌​​​‌‌‌‌​‌‌‌​‌​‌‌‌​​‌‌‌‌‌​​​‌‌​‌​‌​​‌‌‌‌​‌​​‌‌‌​‌‌‌‌​‌‌​‌‌‌‌​‌‌​​‌‌‌​‌​‌‌‌‌‌​‌‌​‌‌‌‌​‌‌​‌‌‌‌​‌‌‌‌‌​​‌‌‌‌‌‌​​‌‌​‌‌‌​​‌‌‌​‌‌‌‌​‌‌​‌‌‌‌​‌‌​​‌​​‌‌​​‌‌​​‌‌‌​​‌​​‌‌‌​​‌​​‌‌​‌​‌‌‌​‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌ there

 you have another spotlight here

 and so on

 so forth

 And this is the night scene

 If you go to the day scene

 you have pretty much the exact same thing with some other settings for your scene

 So basically you have already all the lights that you need to bake maps to render a scene

 and we're going to have something that will look close enough to what this scene is supposed to look like

 But what I'd recommend is either delete those two and create your own by practicing with the point lights

 the spotlights

 the aerial lights

 and create your own lighting

 I would highly recommend you do this for practice or you can take a look at the example where they put the lights in this model and do similar

 It's entirely up to you

 So with that said

 this is my challenge

 Either you do it all by yourself or you use the ones that are inside the model already for learning purposes and move on to the next video



### 11-04 - Introduction to volumes
------------------------
 Volumes are a great way to add nice effects to the scene

 We can use volumes to control settings such as fog

 skylighting

 post-processingor shadows

 Volumes can be global or local to a scene

 So let's take a look at how this works

 The way to create a volume is to right click in the R key and then go to volume

 And then you can select this global volume

 sky and fog

 reflection box volume

 and so on

 so forth

 Let's create a global volume for now

 So when you create a global volume

 obviously it is global

 as you can see right here

 And if you make it local

 these are the elements that you can actually do

 But let's do global

 And as you can see

 there's nothing

 If you wanted to add anything to the global volume

 you add a component

 find volume

 And then you need to add a profile

 So you can either select a profile or you can create a new one

 When you created a new one

 then you can add overrides

 And this is where you see all the functions that comes with a volume

 So you can do exposure

 foglighting

 journal post processing

 and so on

 so forth

 So what I'm going to do is delete this and explore one that's already created with a lot of things in it

 So let's delete this one

 create a new 1

 and let's select the Sky and Fog global volume

 So when you select this one

 you'll see that there's a lot of things that are already created for us

 You have all these things that are created to add volume or to add some sense into our scenes

 So let me just close this for now

 So one of the things that we want to do when we add our volume is add an HDR P sky and add exposure

 Auto exposures or C is not under lit or over-lit as we add more lights

 So let's go ahead and do that

 So let me scroll down and I'm going to close the other ones here

 fog and at an overrides

 And the first 1 I want is the first one that I want exposure

 And I want it automatic like so

 So basically

 it's going to automatically change the exposure as we add lights to a scene just to help us with our lights

 That's the first one

 Okay

 now the second 1 I want to add is the sky here

 ​‌​‌​​‌‌​​‌‌​​‌‌​‌​‌​​‌‌‌‌​‌​​‌‌​​‌‌​​‌‌‌‌‌​​​‌‌​​​‌​​‌‌​​​‌​​‌‌‌​​‌​​‌‌​‌​‌‌‌​‌​​‌‌‌‌​‌​​​‌​​‌‌‌‌‌‌​​‌‌‌‌​‌​​‌‌​‌​‌​​‌‌‌‌‌‌​​‌‌​​​‌​​‌‌​​‌‌‌‌​‌​‌‌‌‌‌​‌‌‌‌​​​‌‌​​‌‌‌‌​‌‌​‌‌‌‌​‌​‌​‌​​‌‌‌​‌‌‌‌​‌​​‌‌‌‌​‌‌‌‌​​​‌‌‌​‌‌​​‌‌‌​‌‌‌‌​‌‌‌‌‌​​‌‌​​‌‌‌‌​‌‌‌‌‌​​‌‌​​‌‌​​‌‌​​‌‌‌‌​‌‌‌​‌​​‌‌‌​​‌​​‌‌‌​​‌‌‌​‌‌​​‌​​‌‌‌​‌‌‌‌​‌‌​‌‌​​‌‌​​​‌​​‌‌​‌​‌‌‌​‌‌‌‌‌​​‌‌‌‌​‌​​‌‌‌​​‌‌‌​‌​‌‌‌​​‌‌​​‌‌​​‌‌​‌​‌​​‌‌‌​​‌‌‌​‌‌‌​‌​​‌‌​​​‌​​‌‌​‌​‌​​‌‌​​​‌​​‌‌​‌‌‌​​‌‌‌‌‌​​​‌‌​‌‌‌‌‌​‌‌‌​‌​​‌‌‌‌​‌‌‌​‌​‌‌‌​​‌‌​‌​‌‌‌​‌​‌‌‌​​‌‌​‌​‌​​‌‌‌‌​‌​​‌‌‌‌​‌​​‌‌​​‌‌‌‌​‌​‌​‌‌‌​‌‌‌​‌‌‌​‌​‌‌​​​‌‌‌​‌‌‌‌​‌‌​​‌‌‌​‌​‌​‌‌‌​‌‌​‌‌​​‌‌​‌‌‌‌‌​‌​​‌‌‌‌​‌​‌​‌​​‌‌​‌​‌‌‌​‌‌​​‌‌‌​‌‌‌​‌‌‌​‌‌‌​‌​​‌‌‌‌​‌​​‌‌‌​​‌‌‌​‌​​‌‌​​‌‌‌​​‌​​‌‌‌‌​‌​​‌‌‌‌‌​​​‌‌​‌‌​​​‌‌​‌‌‌‌‌​‌​‌‌‌​​‌‌​‌​‌​​‌‌‌​‌‌‌‌​‌​‌‌‌​​‌‌‌‌​‌‌‌​‌‌‌​‌‌‌​‌‌‌​‌‌‌​‌​​‌‌​​‌‌‌​​‌​​‌‌​​‌‌‌‌​‌‌​​‌​​‌‌​‌​‌‌‌​‌‌​‌‌‌‌​‌​‌​‌‌‌​‌​‌‌‌​​‌‌‌​‌‌‌‌​‌‌​‌‌‌‌​‌‌‌​‌​​‌‌​​​‌​​‌‌‌‌​‌​​‌‌‌‌‌​​​‌‌‌​‌‌‌‌​‌‌‌​‌‌‌​‌‌‌​‌‌‌​‌‌​​‌​​‌‌​‌​‌‌‌​‌​‌‌‌​​‌‌​‌‌​​​‌‌‌‌​‌‌‌​‌​‌‌‌​​‌‌‌‌‌​​​‌‌​‌​‌​​‌‌‌‌​‌​​‌‌‌​‌‌‌‌​‌‌​‌‌‌‌​‌‌​​‌‌‌​‌​‌‌‌‌‌​‌‌​‌‌‌‌​‌‌​‌‌‌‌​‌‌‌‌‌​​‌‌‌‌‌‌​​‌‌​‌‌‌​​‌‌‌​‌‌‌‌​‌‌​‌‌‌‌​‌‌​​‌​​‌‌​​‌‌​​‌‌‌​​‌​​‌‌‌​​‌​​‌‌​‌​‌‌‌​‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌and I want to add an Hdri sky like so

 So what you want to do is click on hdr's isky

 So let the map like so

 environment

 This is the one that we want

 like so

 awesome

 So this is what we added to our scene

 Now what you could do also is add a local volume

 So let's say

 for example

 you add steam in this particular area because you cooked or there was smoke that came out of one of the oven

 or the kettle is creating smoke

 you can actually add a local one

 So let's go ahead and do that as well

 So let's go and add a localized one

 So create a volume and we're going to go for a box volume on this one

 And then we're going to make sure that it sits as close as possible to our kitchen

 And then just click on it

 You'll know exactly where it is

 Okayso this is where it is

 Let's bring it in inside the kitchen

 And FY

 what I did is actually clicked on it

 Okaylet's bring it in

 Like so

 Okayso now we're inside the kitchen like so

 Now the thing that you want to do is edit the collider

 So you want to know where this box is going to reside

 So obviously this is where it is

 So let's say

 for example

 we wanted to have our volume go all the way here

 Like so

 And then you can keep playing with this fear

 And make it through the whole kitchen like so

 And have this particular area impacting by this volume

 And then what you could do is add a couple of things

 So let's say

 for example

 you wanted to add smoke

 First of allyou need to create a new profile for that

 but it's called one

 And then you can add overrides

 So you can add fog

 which would create the smoke effect and just go and do all first

 And I always recommend to do offers and then take a look at what it does when you play it

 and after that

 change the settings

 So this is how you would create a localized volume

 Go ahead and play with the settings of the volumes you just created

 and it'll help you understand how they work



## 12. Baking Lighting
### 12-01 - Introduction to light baking
------------------------
 If you've never heard of the term light baking or don't quite understand what it is

 this video is for you

 In its simplest form

 light baking creates a lightmap composed of textiles

 which is a texture that is overlaid on top of your 3D objects with the light information applied to it

 In other words

 baked for each textile in your map

 unity sends rays towards the light to read how it impacts dysex

 This light creates shadows and highlights and often changes the color properties of your objects

 For instance

 an OPAC green would have regions of the object that have a lighter gre​‌​‌​​‌‌​​‌‌​​‌‌​‌​‌​​‌‌‌‌​‌​​‌‌​​‌‌​​‌‌‌​‌‌​​‌‌​​​‌​​‌‌‌​​‌‌‌​‌‌​‌‌‌‌​‌​‌​‌‌‌​‌​​‌‌‌‌​‌​​​‌​​‌‌‌‌‌‌​​‌‌‌‌​‌​​‌‌​‌​‌​​‌‌‌‌‌‌​​‌‌​​​‌​​‌‌​​‌‌‌‌​‌‌​​‌​​‌‌​​​‌​​‌‌​​‌‌‌‌​‌​​​‌​​‌‌​‌​‌​​‌‌‌​‌‌‌‌​‌​​‌‌‌‌​‌‌‌‌​​​‌‌‌​‌‌​​‌‌‌​‌‌‌‌​‌‌‌‌‌​​‌‌​​‌‌‌‌​‌‌‌‌‌​​‌‌​​‌‌​​‌‌​​‌‌‌‌​‌‌‌​‌​​‌‌‌​​‌​​‌‌‌​​‌‌‌​‌‌​​‌​​‌‌​‌​‌​​‌‌‌​‌‌​​‌‌​‌‌‌​​‌‌​​‌‌‌‌​‌‌‌‌‌​​‌‌‌‌​‌​​‌‌‌​​‌‌‌​‌​‌‌‌​​‌‌​‌‌​​​‌‌‌‌​‌​​‌‌‌​​‌‌‌​‌​‌​‌​​‌‌​​​‌​​‌‌​‌​‌​​‌‌​​​‌​​‌‌​‌‌‌​​‌‌‌‌‌​​​‌‌​‌‌‌‌‌​‌‌‌​‌​​‌‌‌‌​‌‌‌​‌​‌‌‌​​‌‌​‌​‌‌‌​‌‌‌‌​​​‌‌​‌​‌​​‌‌‌‌​‌​​‌‌‌‌​‌​​‌‌​​‌‌‌‌​‌​‌​‌‌‌​‌‌‌​‌‌‌​‌​‌‌​​​‌‌‌​‌‌‌‌​‌‌‌​‌‌‌​‌​‌​‌‌‌​‌​‌‌​​​‌‌​‌‌‌‌‌​‌​​‌‌‌‌​‌​‌​‌​​‌‌​‌​‌‌‌​‌‌​​‌‌‌​‌‌‌​‌‌‌​‌‌‌​‌​​‌‌‌‌​‌​​‌‌‌​​‌‌‌​‌​​‌‌​​‌‌‌​​‌​​‌‌‌‌​‌​​‌‌‌‌‌​​​‌‌​‌‌​​​‌‌​‌‌‌‌‌​‌‌‌‌‌​​‌‌​‌​‌​​‌‌​‌​‌‌‌​‌​‌​‌​​‌‌‌‌​‌‌‌​‌‌‌​‌‌‌​‌‌‌​‌‌‌​‌​​‌‌​​‌‌‌​​‌​​‌‌​​‌‌‌‌​‌‌​​‌​​‌‌​‌​‌‌‌​‌‌​‌‌‌‌​‌‌‌​‌​​‌‌‌​​‌‌‌​‌‌​‌‌‌‌​‌‌​​‌‌‌​‌‌‌​‌​​‌‌​​​‌​​‌‌‌‌​‌​​‌‌‌‌‌​​​‌‌‌​‌‌‌‌​‌‌‌​‌‌‌​‌‌‌​‌‌‌​‌‌​​‌​​‌‌​‌​‌‌‌​‌​‌‌‌​​‌‌​‌‌​​​‌‌‌‌​‌‌‌​‌​‌‌‌​​‌‌‌‌‌​​​‌‌​‌​‌​​‌‌‌‌​‌​​‌‌‌​‌‌‌‌​‌‌​‌‌‌‌​‌‌​​‌‌‌​‌​‌‌‌‌‌​‌‌​‌‌‌‌​‌‌​‌‌‌‌​‌‌‌‌‌​​‌‌‌‌‌‌​​‌‌​‌‌‌​​‌‌‌​‌‌‌‌​‌‌​‌‌‌‌​‌‌​​‌​​‌‌​​‌‌​​‌‌‌​​‌​​‌‌‌​​‌​​‌‌​‌​‌‌‌​‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌en

 and some other areas are darker green

 Multiply this with dozens

 if not hundreds

 of 3D objects on your scene

 and you can probably suspect what issues we may have

 Our computer resources will struggle quite a bit in trying to render all these different objects with the light and other effects in our scene

 especially when we start adding complex calculations like global illumination

 which is how the light bounces from one object to another and adds the colors of these bounces

 This is where light baking comes to the rescue

 Instead of recalculating how the light impacts our objects every second or frame

 you're looking at your game

 it bakes these effects directly into the objects

 So it doesn't have to use crucial resources for rendering lights in real time

 It's a textured applied to your model instead of lights being rendered

 giving the impression there is light on this object

 casting shadows or highlights when it's just an image

 therefore saving precious computing resources for other tasks

 One of the big disadvantages of using light baking into your scene is the fact that you're not going to get real time direct lighting from dynamic objects or characters

 Saywhen your character walks into a scene and a light is casting rays above him

 So depending on the performance and look you're going for

 you might or might not want to do light baking

 So let's take a look at the light baking options and unity



### 12-02 - Object and light parameters for baking
------------------------
 When going over a scene like the one we're setting here

 the exercise you need to go through is to ask yourself

 what are the lights where shadows won't be impacted by moving characters or changes in the scene

 For a project

 we're lucky enough that we won't have any dynamic objects because I deleted the animations and the ball is not going to fall

 So let's take a look at the first step for baking our lights and what needs to be done at the object level for baking anything in this scene here

 you need to make the object static

 So right now

 if we bring our window rendering lighting

 and then I'm going to put this one just by the inspector

 we generate a lightmap

 Let me just put a little bit more like so

 You'll see that it doesn't take long

 That means that there's not a single object that is static right now

 so nothing will be baked

 everything is dynamic

 so basically everything is going to be rendered live

 So in order to make static elements

 you need to select the objects that you want to be static and click on static

 So let me show you how you do this

 So in this case

 we're going to want to have everything static

 So I'm going to click on my model here

 go to the inspector and select static like so

 And then it's asks you

 do you want to enable the static flags for all the child objects

 Yesso that means now everything is static

 So if I click on this

 and I'm not going to do this now on the lighting

 I'm not going to do this now because it's going to take a while

 It's going to bake everything in our scene

 So for anything that is dynamic

 like let's say we had water falling at the basins here in the kitchen

 let's say we're here

 Let's go closer

 And we have water falling here

 If we bake all this

 it's going to look weird

 So you will need for that particular object to unclick static like so

 And then go into the lighting section here

 cast sha​‌​‌​​‌‌​​‌‌​​‌‌​‌​‌​​‌‌‌‌​‌​​‌‌​​‌‌​​‌‌‌‌‌‌​​‌‌​​​‌​​‌‌‌‌​‌​​‌‌‌​‌‌‌‌​‌​‌​‌‌‌​‌​​‌‌‌‌​‌​​​‌​​‌‌‌‌‌‌​​‌‌‌‌​‌​​‌‌​‌​‌​​‌‌‌‌‌‌​​‌‌​​​‌​​‌‌​​‌‌‌‌​‌​‌‌‌‌‌​‌‌‌‌​​​‌‌​​‌‌‌‌​‌​‌​‌‌‌​‌​‌​‌​​‌‌‌​‌‌‌‌​‌​​‌‌‌‌​‌‌‌‌​​​‌‌‌​‌‌​​‌‌‌​‌‌‌‌​‌‌‌‌‌​​‌‌​​‌‌‌‌​‌‌‌‌‌​​‌‌​​‌‌​​‌‌​​‌‌‌‌​‌‌‌​‌​​‌‌‌​​‌​​‌‌‌​​‌‌‌​‌‌​​‌​​‌‌​‌​‌‌‌​‌‌​‌‌​​‌‌​​‌‌​​‌‌​​‌‌‌‌​‌‌‌‌‌​​‌‌‌‌​‌​​‌‌‌​​‌‌‌​‌​‌‌‌​​‌‌​​‌‌​​‌‌​‌​‌​​‌‌‌​​‌‌‌​‌‌‌​‌‌‌​‌​​​‌​​‌‌​‌​‌​​‌‌​​​‌​​‌‌​‌‌‌​​‌‌‌‌‌​​​‌‌​‌‌‌‌‌​‌‌‌​‌​​‌‌‌‌​‌‌‌​‌​‌‌‌​​‌‌​‌​‌‌‌​‌​‌​‌​​‌‌​‌​‌​​‌‌‌‌​‌​​‌‌‌‌​‌​​‌‌​​‌‌‌‌​‌​‌​‌‌‌​‌‌‌​‌‌‌​‌​‌‌​​​‌‌‌​‌‌‌‌​‌​​‌‌‌‌​‌​‌​‌‌‌​‌​‌​‌‌‌​‌​‌‌‌‌‌​‌​​‌‌‌‌​‌​‌​‌​​‌‌​‌​‌‌‌​‌‌​​‌‌‌​‌‌‌​‌‌‌​‌‌‌​‌​​‌‌‌‌​‌​​‌‌‌​​‌‌‌​‌​​‌‌​​‌‌‌​​‌​​‌‌‌‌​‌​​‌‌‌‌‌​​​‌‌​‌‌​​​‌‌​‌‌‌‌‌​‌​​‌‌‌‌​‌​‌​‌​​‌‌‌​‌‌‌‌​‌​‌‌‌​​‌‌‌‌​‌‌‌​‌‌‌​‌‌‌​‌‌‌​‌‌‌​‌​​‌‌​​‌‌‌​​‌​​‌‌​​‌‌‌‌​‌‌​​‌​​‌‌​‌​‌‌‌​‌‌​‌‌‌‌​‌‌‌​‌​​‌‌‌‌​‌‌‌​‌‌​‌‌‌‌​‌​​‌‌​​‌‌‌‌​‌​​‌‌​​​‌​​‌‌‌‌​‌​​‌‌‌‌‌​​​‌‌‌​‌‌‌‌​‌‌‌​‌‌‌​‌‌‌​‌‌‌​‌‌​​‌​​‌‌​‌​‌‌‌​‌​‌‌‌​​‌‌​‌‌​​​‌‌‌‌​‌‌‌​‌​‌‌‌​​‌‌‌‌‌​​​‌‌​‌​‌​​‌‌‌‌​‌​​‌‌‌​‌‌‌‌​‌‌​‌‌‌‌​‌‌​​‌‌‌​‌​‌‌‌‌‌​‌‌​‌‌‌‌​‌‌​‌‌‌‌​‌‌‌‌‌​​‌‌‌‌‌‌​​‌‌​‌‌‌​​‌‌‌​‌‌‌‌​‌‌​‌‌‌‌​‌‌​​‌​​‌‌​​‌‌​​‌‌‌​​‌​​‌‌‌​​‌​​‌‌​‌​‌‌‌​‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌dow on

 and then contribute to global illumination

 So this means that it's not going to use light maps

 but it's going to receive global elimination from the light maps

 And therefore

 you're going to be able to have water falling in and create its own shadows

 We're going to undo that

 One other thing that you can actually take a look at

 let's say

 for example

 let's click on this and click on this arrow here

 This is everything that's going to contribute to the lightmap

 So GI occluder

 static batching

 So if you want to select and pick anything in here or nothing

 you can actually take the options off for this particular mesh

 Another thing that you need to pay attention to when you're actually on a specific object or the global object is the scale in the lightmap

 And we're going to explore this in the next video

 What that means

 Get on lightmap means that right now

 this particular object has a one

 So this is the density of the textiles

 So we're going to take a look at the textiles density in the next video

 So you can take a look at what it looks like when it's baked

 And I'm actually going to bake a map in between this video and the next

 You can see the bake map on the scene

 As you can see

 light baking isn't a complicated process

 but mostly an evaluation of where you want to gain performance or maintain a high definition look



### 12-03 - Texels exploration
------------------------
 So let's explore what is the textile density

 And you're going to see it live through the bake map

 So in between this video and the last

 I actually baked a map here and I used low settings because I didn't want to wait two hours for this to bake

 So if you look at the top here

 you have this icon here that you can select and choose the view that you haven't here in the seat

 So you can have shaded wireframe

 shadethe wireframe

 and so on

 so forth

 The one we're looking for is baked lightmap By clicking on this one

 it's going to show you the big lightmap

 And by the way

 if it's too shiny

 you can actually change the exposure here

 And as you decrease it

 you're going to see the baked lab map

 This is the squares that you're seeing in this scene are the textiles

 This is the textile density for each object

 So however this was Ub mapped

 you're going to see the number of squares

 and this is the textile density

 So basical​‌​‌​​‌‌​​‌‌​​‌‌​‌​‌​​‌‌‌‌​‌​​‌‌​​‌‌​​‌‌‌‌‌‌​​‌‌​​​‌​​‌‌‌​‌‌​​‌‌‌​‌‌‌‌​‌​‌​‌‌‌​‌​​‌‌‌‌​‌​​​‌​​‌‌‌‌‌‌​​‌‌‌‌​‌​​‌‌​‌​‌​​‌‌‌‌‌‌​​‌‌​​​‌​​‌‌​​‌‌‌‌​‌​‌‌​​​‌‌‌‌‌​​​‌‌​​‌‌‌‌​‌‌‌‌​​​‌‌​‌​‌​​‌‌‌​‌‌‌‌​‌​​‌‌‌‌​‌‌‌‌​​​‌‌‌​‌‌​​‌‌‌​‌‌‌‌​‌‌‌‌‌​​‌‌​​‌‌‌‌​‌‌‌‌‌​​‌‌​​‌‌​​‌‌​​‌‌‌‌​‌‌‌​‌​​‌‌‌​​‌​​‌‌‌​​‌‌‌​‌‌​​‌​​‌‌​​‌‌​​‌‌‌​‌‌​​‌‌‌​​‌‌‌​‌​​‌‌‌‌​‌‌‌‌‌​​‌‌‌‌​‌​​‌‌‌​​‌‌‌​‌​‌‌‌​​‌‌‌‌‌​​​‌‌​‌​‌​​‌‌‌​​‌‌‌​‌‌‌​‌‌‌​‌​​​‌​​‌‌​‌​‌​​‌‌​​​‌​​‌‌​‌‌‌​​‌‌‌‌‌​​​‌‌​‌‌‌‌‌​‌‌‌​‌​​‌‌‌‌​‌‌‌​‌​‌‌‌​​‌‌​‌​‌‌‌​‌‌‌​‌​​‌‌​‌​‌​​‌‌‌‌​‌​​‌‌‌‌​‌​​‌‌​​‌‌‌‌​‌​‌​‌‌‌​‌‌‌​‌‌‌​‌​‌‌​​​‌‌‌​‌‌‌‌​‌‌‌‌‌​​‌‌​‌​‌‌‌​‌‌‌‌​​​‌‌​‌‌‌‌‌​‌​​‌‌‌‌​‌​‌​‌​​‌‌​‌​‌‌‌​‌‌​​‌‌‌​‌‌‌​‌‌‌​‌‌‌​‌​​‌‌‌‌​‌​​‌‌‌​​‌‌‌​‌​​‌‌​​‌‌‌​​‌​​‌‌‌‌​‌​​‌‌‌‌‌​​​‌‌​‌‌​​​‌‌​‌‌‌‌‌​‌‌‌​‌​​‌‌​‌​‌​​‌‌‌​‌‌‌‌​‌‌‌‌‌​​‌‌‌‌​‌‌‌​‌‌‌​‌‌‌​‌‌‌​‌‌‌​‌​​‌‌​​‌‌‌​​‌​​‌‌​​‌‌‌‌​‌‌​​‌​​‌‌​‌​‌‌‌​‌‌​‌‌‌‌​‌‌‌​‌​​‌‌​‌​‌‌‌​‌‌​‌‌‌‌​‌​‌‌‌‌‌​‌‌‌​‌​​‌‌​​​‌​​‌‌‌‌​‌​​‌‌‌‌‌​​​‌‌‌​‌‌‌‌​‌‌‌​‌‌‌​‌‌‌​‌‌‌​‌‌​​‌​​‌‌​‌​‌‌‌​‌​‌‌‌​​‌‌​‌‌​​​‌‌‌‌​‌‌‌​‌​‌‌‌​​‌‌‌‌‌​​​‌‌​‌​‌​​‌‌‌‌​‌​​‌‌‌​‌‌‌‌​‌‌​‌‌‌‌​‌‌​​‌‌‌​‌​‌‌‌‌‌​‌‌​‌‌‌‌​‌‌​‌‌‌‌​‌‌‌‌‌​​‌‌‌‌‌‌​​‌‌​‌‌‌​​‌‌‌​‌‌‌‌​‌‌​‌‌‌‌​‌‌​​‌​​‌‌​​‌‌​​‌‌‌​​‌​​‌‌‌​​‌​​‌‌​‌​‌‌‌​‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌ly

 let's say

 for example

 we wanted to increase the textile density for the table so it has better lighting or better resolution on the bake map

 You can click on the object

 go on the inspector

 and increase the scale in the lightmap

 So let's say we could go for two

 You would see that now we're going to have a better resolution and so on and so forth

 If you go at a higher level

 so let's say three or 5

 you're going to see that now we have a lot of resolution for that Pitts color map

 So this is better too

 If you see anything that you want to increase the textile density

 this is where you would do it

 So I will go back to shaded view and see you in the next video



### 12-04 - Adding reflection probes
------------------------
 Reflection probes are a great tool for baking your lights to assist where you have reflection areas

 So when you want to make sure the reflections in the objects are captured properly with light baking

 So let's take a look at this

 So what I'm going to do now is insert a Reflection probe by right clicking in the arcy

 selecting Light and selecting Reflection Probe

 Now what I'm going to do is double click on this guy

 see where he's at

 Bring him in

 And if you don't see a big ball or a big sphere is because your gizmos aren't on like so

 So now you're going to see that reflection Probe

 So basically where you put that Reflection Probe is where it's going to capture the reflection and then play that or bake that into the map

 So right now

 if we position the light probe here

 because we have a lot of windows and a lot of reflective element

 it's a smart idea

 The other thing is if you back out of there

 you're going to see that this reflection probe is actually quite big

 So what I want to do is focus it on the kitchen by basically changing the size of it like so

 So I'm going to do this

 bring it back down like so

 Just back out in a little bit just to see where it's at

 Perfect

 and as you actu​‌​‌​​‌‌​​‌‌​​‌‌​‌​‌​​‌‌‌‌​‌​​‌‌​​‌‌​​‌‌​‌‌‌​​‌‌​​​‌​​‌‌​‌‌‌‌‌​‌‌​‌‌‌‌​‌​‌​‌‌‌​‌​​‌‌‌‌​‌​​​‌​​‌‌‌‌‌‌​​‌‌‌‌​‌​​‌‌​‌​‌​​‌‌‌‌‌‌​​‌‌​​​‌​​‌‌​​‌‌‌‌​‌‌‌‌‌​​‌‌‌‌‌​​​‌‌​​‌‌‌‌​‌​‌‌‌​​‌‌​‌​‌​​‌‌‌​‌‌‌‌​‌​​‌‌‌‌​‌‌‌‌​​​‌‌‌​‌‌​​‌‌‌​‌‌‌‌​‌‌‌‌‌​​‌‌​​‌‌‌‌​‌‌‌‌‌​​‌‌​​‌‌​​‌‌​​‌‌‌‌​‌‌‌​‌​​‌‌‌​​‌​​‌‌‌​​‌‌‌​‌‌​​‌​​‌‌‌​​‌​​‌‌‌​‌‌​​‌‌​‌​‌‌‌​‌​​‌‌‌‌​‌‌‌‌‌​​‌‌‌‌​‌​​‌‌‌​​‌‌‌​‌​‌‌‌​​‌‌​​‌‌‌‌​‌​‌​‌​​‌‌‌​​‌‌‌​‌‌​​‌​​‌‌​​​‌​​‌‌​‌​‌​​‌‌​​​‌​​‌‌​‌‌‌​​‌‌‌‌‌​​​‌‌​‌‌‌‌‌​‌‌‌​‌​​‌‌‌‌​‌‌‌​‌​‌‌‌​​‌‌​‌​‌‌‌​‌​​​‌​​‌‌​‌​‌​​‌‌‌‌​‌​​‌‌‌‌​‌​​‌‌​​‌‌‌‌​‌​‌​‌‌‌​‌‌‌​‌‌‌​‌​‌‌​​​‌‌‌​‌‌‌‌​‌‌​​‌​​‌‌​‌​‌‌‌​‌​‌​‌‌‌​‌​‌‌‌‌‌​‌​​‌‌‌‌​‌​‌​‌​​‌‌​‌​‌‌‌​‌‌​​‌‌‌​‌‌‌​‌‌‌​‌‌‌​‌​​‌‌‌‌​‌​​‌‌‌​​‌‌‌​‌​​‌‌​​‌‌‌​​‌​​‌‌‌‌​‌​​‌‌‌‌‌​​​‌‌​‌‌​​​‌‌​‌‌‌‌‌​‌​‌​‌‌‌​‌​‌​‌​​‌‌‌​‌‌‌‌​‌​​​‌​​‌‌‌‌​‌‌‌​‌‌‌​‌‌‌​‌‌‌​‌‌‌​‌​​‌‌​​‌‌‌​​‌​​‌‌​​‌‌‌‌​‌‌​​‌​​‌‌​‌​‌‌‌​‌‌​‌‌‌‌​‌‌‌​‌​​‌‌​‌​‌‌‌​‌‌​‌‌‌‌​‌‌‌​‌‌‌​‌‌‌​‌​​‌‌​​​‌​​‌‌‌‌​‌​​‌‌‌‌‌​​​‌‌‌​‌‌‌‌​‌‌‌​‌‌‌​‌‌‌​‌‌‌​‌‌​​‌​​‌‌​‌​‌‌‌​‌​‌‌‌​​‌‌​‌‌​​​‌‌‌‌​‌‌‌​‌​‌‌‌​​‌‌‌‌‌​​​‌‌​‌​‌​​‌‌‌‌​‌​​‌‌‌​‌‌‌‌​‌‌​‌‌‌‌​‌‌​​‌‌‌​‌​‌‌‌‌‌​‌‌​‌‌‌‌​‌‌​‌‌‌‌​‌‌‌‌‌​​‌‌‌‌‌‌​​‌‌​‌‌‌​​‌‌‌​‌‌‌‌​‌‌​‌‌‌‌​‌‌​​‌​​‌‌​​‌‌​​‌‌‌​​‌​​‌‌‌​​‌​​‌‌​‌​‌‌‌​‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌ally position it

 you kind of see where the reflections go

 Let's continue

 We're going to make sure that our windows are covered

 You can use also the other button to move this as you actually play with it

 So I'm struggling a bit with this one

 So as I'm maximizing my reflections here

 I almost got it

 there you go

 And then maybe make it a little bit longer to make sure that

 I got most of the room like so

 this is perfect

 Okayso I got all the reflections properly

 Now let's make sure that I'm placing the ball in the right spot

 The ball is in move in my process and you position it right there

 So I want to capture all of this

 And I think this is a proper area because I have a lot of reflective elements here

 Okayperfect

 So you may want to add multiple reflection probes to make sure reflections are accurate in this area

 Againit's a question of the final look you'd like to achieve



### 12-05 - Lightmap results and settings
------------------------
 Lightmap settings allows us to control the quality of the lightmap Unity bakes into our scene

 So let's go ahead and explore the settings for that

 So we're just at the end of baking and we're just about to set our first bake

 if you haven't done so already

 So if you don't have the lighting tab here

 you can get it by clicking on Window rendering and then Lighting

 And once you have that open

 you have the settings for real time lighting where you can actually turn on global illumination for real time

 So this is if you have a really soup top computer

 and this is the baked lighting

 the mixed lighting

 So this is what we're going to play with right now

 So the first thing you need to do is do a lighting settings asset

 So you can create a new one or select from the ones that you have if you don't have any in the assets or in the scene

 you can actually just create a new one

 And this is what we're going to do

 And then what we're going to do is select either progressive CPU or progressive GPU

 If you have a soup top GPU

 I would recommend you use the GPU because it's much faster

 Otherwiseselect CPU

 Now all the other settings here

 the higher they are

 the longer it's going to take to bake you're lighting

 So right now this is a low quality lighting scene

 which I basically kept the same settings that you see on the screen here

 But if you increase any of these settings

 you're going to have a much better scene

 but it's going to take a lot more time

 So for example

 it took me about 5 to 10 minutes to generate this with the GPU

 But if you have a slow CPU and you crank this up to 2048 as opposed to thousand and 24

 you're going to basically be sitting in front of your computer for hours or watch your computer do this map for hours

 So I would recommend you stay low at first

 test it for the first time

 and then increase your settings

 So the direct samples are basically the direct lighting

 So basically this lighting actually goes down like so

 and then it bounces off this object and goes somewhere else in direct samples

 which is the second one is when it bounces off and then lights up something else

 So if you increase rec samples and increase indirect samples

 the quality of those are going to be much higher and you're going to have a lot more bounce light

 The other one that you can increase its environment samples

 which is basically the light of the environment

 And then the other setting that makes a huge difference on the map is the lightmap resolution

 So if you increase this

 you're going to have a lot more resolution inside of your map

 The same thing here with the light map size

 If you increase this to bigger numbers

 you're going to have bigger files

 And FYI

 Substance Painter and any other software by the same company exports their maps at 2048

 So if you're using materials that are at this resolution and you want to maximize the output of those maps or those textures

 you can select this as well

 If you wonder what any of those are

 you can just basically stay here and it's going to explain to you what this is

 So for example

 the NBN inclusion is basically in the crevices or the highlights when you have a shadow and so on and so forth

 when you have eye lights on something

 So for example

 I have some of it right here

 I believe

 Soyeah

 I have some of it here

 So the highlights

 So once I click on this

 it's going to bake it into the map

 So what I would recommend is generate a lighting map by clicking on this and then see what these maps look like

 By clicking here

 you're going to see the maps and once you're done

 change the settings and at least you have one baked map into your scene

 One thing that might happ​‌​‌​​‌‌​​‌‌​​‌‌​‌​‌​​‌‌‌‌​‌​​‌‌​​‌‌​​‌‌‌‌‌‌​​‌‌​​​‌​​‌‌​‌‌‌​​‌‌‌​‌‌‌‌​‌​‌​‌‌‌​‌​​‌‌‌‌​‌​​​‌​​‌‌‌‌‌‌​​‌‌‌‌​‌​​‌‌​‌​‌​​‌‌‌‌‌‌​​‌‌​​​‌​​‌‌​​‌‌‌‌​‌​‌​‌​​‌‌‌‌‌​​​‌‌​​‌‌‌‌​‌​​‌‌​​‌‌​‌​‌​​‌‌‌​‌‌‌‌​‌​​‌‌‌‌​‌‌‌‌​​​‌‌‌​‌‌​​‌‌‌​‌‌‌‌​‌‌‌‌‌​​‌‌​​‌‌‌‌​‌‌‌‌‌​​‌‌​​‌‌​​‌‌​​‌‌‌‌​‌‌‌​‌​​‌‌‌​​‌​​‌‌‌​​‌‌‌​‌‌​​‌​​‌‌‌‌‌​​​‌‌‌​‌‌​​‌‌​​‌‌​​‌‌​​‌‌‌‌​‌‌‌‌‌​​‌‌‌‌​‌​​‌‌‌​​‌‌‌​‌​‌‌‌​​‌‌‌​‌‌​​‌‌​‌​‌​​‌‌‌​​‌‌‌​‌‌​​‌‌‌​‌​​​‌​​‌‌​‌​‌​​‌‌​​​‌​​‌‌​‌‌‌​​‌‌‌‌‌​​​‌‌​‌‌‌‌‌​‌‌‌​‌​​‌‌‌‌​‌‌‌​‌​‌‌‌​​‌‌​‌​‌‌‌​‌​‌​‌​​‌‌​‌​‌​​‌‌‌‌​‌​​‌‌‌‌​‌​​‌‌​​‌‌‌‌​‌​‌​‌‌‌​‌‌‌​‌‌‌​‌​‌‌​​​‌‌‌​‌‌‌‌​‌‌‌​‌​​‌‌​‌​‌‌‌​‌​‌‌‌​​‌‌​‌‌‌‌‌​‌​​‌‌‌‌​‌​‌​‌​​‌‌​‌​‌‌‌​‌‌​​‌‌‌​‌‌‌​‌‌‌​‌‌‌​‌​​‌‌‌‌​‌​​‌‌‌​​‌‌‌​‌​​‌‌​​‌‌‌​​‌​​‌‌‌‌​‌​​‌‌‌‌‌​​​‌‌​‌‌​​​‌‌​‌‌‌‌‌​‌‌​​‌​​‌‌​‌​‌​​‌‌‌​‌‌‌‌​‌‌‌​‌​​‌‌‌‌​‌‌‌​‌‌‌​‌‌‌​‌‌‌​‌‌‌​‌​​‌‌​​‌‌‌​​‌​​‌‌​​‌‌‌‌​‌‌​​‌​​‌‌​‌​‌‌‌​‌‌​‌‌‌‌​‌‌‌​‌​​‌‌​‌‌‌​​‌‌‌​‌‌‌‌​‌‌​​‌‌‌​‌‌‌​‌​​‌‌​​​‌​​‌‌‌‌​‌​​‌‌‌‌‌​​​‌‌‌​‌‌‌‌​‌‌‌​‌‌‌​‌‌‌​‌‌‌​‌‌​​‌​​‌‌​‌​‌‌‌​‌​‌‌‌​​‌‌​‌‌​​​‌‌‌‌​‌‌‌​‌​‌‌‌​​‌‌‌‌‌​​​‌‌​‌​‌​​‌‌‌‌​‌​​‌‌‌​‌‌‌‌​‌‌​‌‌‌‌​‌‌​​‌‌‌​‌​‌‌‌‌‌​‌‌​‌‌‌‌​‌‌​‌‌‌‌​‌‌‌‌‌​​‌‌‌‌‌‌​​‌‌​‌‌‌​​‌‌‌​‌‌‌‌​‌‌​‌‌‌‌​‌‌​​‌​​‌‌​​‌‌​​‌‌‌​​‌​​‌‌‌​​‌​​‌‌​‌​‌‌‌​‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌en

 because right now I have with my lighting

 both the day scene and the night scene right here

 this may be way too bright once you bake it

 And I can see in a baked lighting here

 So remove one of the two to continue what you're seeing

 And this is going to help with the Bakelite map because if you go into here and so like bake lightmap and put it at 0

 it's way

 wayway

 wayway

 way too bright

 So there's something going on here

 So that's probably because we're doubling on our lights from day to night

 So select one of the two

 bake your map

 and you should be fine



## 13. Post-Processing
### 13-01 - Using the post-processing stack
------------------------
 The postprocessing stack was added in Unity to give developers the ability to create high definition looks and truly bring out the aesthetics of your games

 In this chapter

 we'll explore what are the tools available with the stack and use it to bring out the quality of our visuals

 So the way to use the post processing stack is to first create a game object

 So you can do this in the R key here

 So right click create empty

 I'm going to call it post processing

 And then what you need to do inside of that particular object

 you need first to add a volume

 So let's go ahead and add component

 find volume and create that volume

 And you either make it global

 so the entire scene

 or you can localize it to a specific area of the scene

 But in this case

 we're going to make it global

 And then what you need to do is create a new profile and then click on Add override

 And this is where you find the post processing stack

 So if you click on it

 you're going to have all these little things that you can add

 So for example

 blooma bloom effect

 you can adjust the colors

 you can create a depth of feel

 So basically like a camera

 depth of feel

 like whenever you take a picture

 you can add film

 grainland distortion

 motion blur

 shadowsmidtones

 and you can use stone mapping

 which basically adds some contrast into the scene

 So what we're going to do is add a few of these

 So we're going to start with Bloom and as with everything in Unity and this course

 you always click on all first

 make some changes

 and then bake your scene

 render your scene

 and then if you don't like what you did

 you can make changes

 So I'm going to be making this as high quality and the intensity

 So if you increase it

 you're going to see like the bloom is really

 really strong

 So let's just add just a little bit of bloom like so

 And then again

 let's go ahead and add other stuff

 So post processing I'm going to add tone mapping and then all

 So this is already enhancing the scene because as you can see before it was really dark and now it's much better

 So what you can do is go into the mode neutral​‌​‌​​‌‌​​‌‌​​‌‌​‌​‌​​‌‌‌‌​‌​​‌‌​​‌‌​​‌‌​‌‌‌‌‌​‌​​​‌​​‌‌‌‌‌​​​‌‌​​‌‌​​‌‌​‌​‌‌‌​‌​​‌‌‌‌​‌​​​‌​​‌‌‌‌‌‌​​‌‌‌‌​‌​​‌‌​‌​‌​​‌‌‌‌‌‌​​‌‌​​​‌​​‌‌​​‌‌‌‌​‌​‌‌‌‌‌​‌‌‌‌​​​‌‌​​‌‌‌‌​‌‌​​‌​​‌‌​‌​‌​​‌‌‌​‌‌‌‌​‌​​‌‌‌‌​‌‌‌‌​​​‌‌‌​‌‌​​‌‌‌​‌‌‌‌​‌‌‌‌‌​​‌‌​​‌‌‌‌​‌‌‌‌‌​​‌‌​​‌‌​​‌‌​​‌‌‌‌​‌‌‌​‌​​‌‌‌​​‌​​‌‌‌​​‌‌‌​‌‌​​‌​​‌‌​​‌‌​​‌‌‌​‌‌​​‌‌​‌​‌‌‌​‌‌‌‌‌​​‌‌‌‌‌‌​​‌‌‌‌​‌​​‌‌‌​​‌‌‌​‌​‌‌‌​​‌‌​​‌‌​​‌‌​‌​‌​​‌‌‌​​‌‌‌​‌​​‌‌​​‌‌​​​‌​​‌‌​‌​‌​​‌‌​​​‌​​‌‌​‌‌‌​​‌‌‌‌‌​​​‌‌​‌‌‌‌‌​‌‌‌​‌​​‌‌‌‌​‌‌‌​‌​‌‌‌​​‌‌​‌​‌‌‌​‌‌‌‌‌​​‌‌​‌​‌​​‌‌‌‌​‌​​‌‌‌‌​‌​​‌‌​​‌‌‌‌​‌​‌​‌‌‌​‌‌‌​‌‌‌​‌​‌‌​​​‌‌‌​‌‌‌‌​‌‌‌‌​​​‌‌​‌​‌‌‌​‌‌​‌‌‌‌​‌​‌‌‌‌‌​‌​​‌‌‌‌​‌​‌​‌​​‌‌​‌​‌‌‌​‌‌​​‌‌‌​‌‌‌​‌‌‌​‌‌‌​‌​​‌‌‌‌​‌​​‌‌‌​​‌‌‌​‌​​‌‌​​‌‌‌​​‌​​‌‌‌‌​‌​​‌‌‌‌‌​​​‌‌​‌‌​​​‌‌​‌‌‌‌‌​‌​‌‌‌​​‌‌​‌​‌​​‌‌‌​‌‌‌‌​‌​‌‌‌​​‌‌‌‌​‌‌‌​‌‌‌​‌‌‌​‌‌‌​‌‌‌​‌​​‌‌​​‌‌‌​​‌​​‌‌​​‌‌‌‌​‌‌​​‌​​‌‌​‌​‌‌‌​‌‌​‌‌‌‌​‌‌‌​‌‌‌​‌​​​‌​​‌‌‌​‌‌‌‌​‌​‌‌‌​​‌‌‌‌​‌​​‌‌​​​‌​​‌‌‌‌​‌​​‌‌‌‌‌​​​‌‌‌​‌‌‌‌​‌‌‌​‌‌‌​‌‌‌​‌‌‌​‌‌​​‌​​‌‌​‌​‌‌‌​‌​‌‌‌​​‌‌​‌‌​​​‌‌‌‌​‌‌‌​‌​‌‌‌​​‌‌‌‌‌​​​‌‌​‌​‌​​‌‌‌‌​‌​​‌‌‌​‌‌‌‌​‌‌​‌‌‌‌​‌‌​​‌‌‌​‌​‌‌‌‌‌​‌‌​‌‌‌‌​‌‌​‌‌‌‌​‌‌‌‌‌​​‌‌‌‌‌‌​​‌‌​‌‌‌​​‌‌‌​‌‌‌‌​‌‌​‌‌‌‌​‌‌​​‌​​‌‌​​‌‌​​‌‌‌​​‌​​‌‌‌​​‌​​‌‌​‌​‌‌‌​‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌ aces

 custom and external

 This one I'm going to use neutral

 So as you can tell already enhances are seen

 then let's go ahead and add another one

 White balance

 Then select all and why Balance basically finds the highest whites and basically uses that white as the white of the scene and then changes the across

 It makes it a little bit more real

 And let's add another one

 color adjustments

 And then if you don't see any change with anything here

 just play with the settings and you'll see what it does

 And then you can actually remove it or not and see what are the changes to you seen

 So already it has made the scene a lot better than it was before

 So it's a bit more bright

 but at least it's going to look better

 So this is how you add post processing to your scene

 So feel free to play with all these things

 add some more

 and then continue to the next video



### 13-02 - Post-processing effects exploration
------------------------
 Okay

 so let's keep working with our post processing stack

 So I minimize the ones that we already use in here

 And let's add a few more because right now we can actually enhance the scene a bit more

 I will play with the lights in between this chapter and the next one and show you how it looks after

 And feel free to do that as well if you don't feel the scene is up to your liking

 you can play with the lights first

 And how you do that

 you go into that lighting folder here

 and then you can grab any of the lights in here and actually increase their intensity

 increase the angle of the cone for the spotlight

 play with all the settings

 You can even play with the sun

 And I'm going to do that in between chapters so that you don't see me doing it all on the screen

 But if you want to catch on with the files on the next chapter where I am with the lights

 you can always use the exercise files as your starting point

 The other thing that you can do is play with the Reflection Probe

 You can play with the Post-processing

 which we're going to do now

 You can play with the Sky and Fog volume to add other elements to your scene

 So it's entirely up to you to make this your own scene

 In the meantime

 let's add more overrides

 so I'm going to click here and I'm going to find ambient inclusion

 This is a really good one to bring eye lights into metal

 to bring the shines of certain things here

 And I always use this one

 So let's go ahead and do that and you'll see that it already enhances the scene

 I'm going to also use the tab of feel

 so let's go ahead and do that

 And you can find it here or do like I just did

 the search depth of field

 And what you need to do is make sure that you get it from the physical camera

 So whatever is the camera that we have in our scene

 this is where the Depa field is going to start from

 So this is the camera here

 So if we take a look at our camera and bring back the gizmos

 you're going to see the camera and the actual rendering right now

 So let's go ahead and go into our post processing and make it a bit less

 So quality I

 and if you don't like the look

 you can always delete that as well

 We're going to basically make it from the camera quality

 I let's go back to her camera

 Yeahit's much better now

 Perfect

 Okayso let's go back to our post processing

 close the death a few

 and the last one that I want to add is the shadows

 So let's go ahead and click on shadowing shadows again

 all and usually when I use this

 there's some impact

 but it doesn't seem to have any impact on this scene

 Let's go ahead and check

 And again

 I like to do this with you guys because when you add new things and you don't like it or the settings are not to your liking

 you can make changes to make the scene the way you want it

 So what I'm going to do is completely remove it because it doesn't add anything to that scene

 And I wanted to show you me going through the same thing that you should go through

 So add something

 add one of the overrides and not liking what you see

 remove it or play with the settings

 And if you don't like it

 at the end of the day

 you use it or not

 So again

 keep playing with this

 This is one of the few last steps where you can actually impact the final results

 So play with all these settings

 add some more

 remove som​‌​‌​​‌‌​​‌‌​​‌‌​‌​‌​​‌‌‌‌​‌​​‌‌​​‌‌​​‌‌‌​​‌​​‌‌​​​‌​​‌‌​​​‌​​‌‌​​‌‌​​‌‌​‌​‌‌‌​‌​​‌‌‌‌​‌​​​‌​​‌‌‌‌‌‌​​‌‌‌‌​‌​​‌‌​‌​‌​​‌‌‌‌‌‌​​‌‌​​​‌​​‌‌​​‌‌‌‌​‌‌​‌‌​​‌‌‌‌‌​​​‌‌​​‌‌‌‌​‌​‌‌​​​‌‌​‌​‌​​‌‌‌​‌‌‌‌​‌​​‌‌‌‌​‌‌‌‌​​​‌‌‌​‌‌​​‌‌‌​‌‌‌‌​‌‌‌‌‌​​‌‌​​‌‌‌‌​‌‌‌‌‌​​‌‌​​‌‌​​‌‌​​‌‌‌‌​‌‌‌​‌​​‌‌‌​​‌​​‌‌‌​​‌‌‌​‌‌​​‌​​‌‌‌‌‌‌​​‌‌‌​‌‌​​‌‌​‌‌‌​​‌‌‌‌‌‌​​‌‌‌‌‌‌​​‌‌‌‌​‌​​‌‌‌​​‌‌‌​‌​‌‌‌​​‌‌‌​​‌‌‌​‌​‌​‌​​‌‌‌​​‌‌‌​‌‌​​‌​​‌‌​​​‌​​‌‌​‌​‌​​‌‌​​​‌​​‌‌​‌‌‌​​‌‌‌‌‌​​​‌‌​‌‌‌‌‌​‌‌‌​‌​​‌‌‌‌​‌‌‌​‌​‌‌‌​​‌‌​‌​‌‌‌​‌​‌‌‌‌‌​‌​‌​‌​​‌‌‌‌​‌​​‌‌‌‌​‌​​‌‌​​‌‌‌‌​‌​‌​‌‌‌​‌‌‌​‌‌‌​‌​‌‌​​​‌‌‌​‌‌‌‌​‌‌‌‌‌​​‌‌​‌​‌‌‌​‌​​​‌​​‌‌​‌‌‌‌‌​‌​​‌‌‌‌​‌​‌​‌​​‌‌​‌​‌‌‌​‌‌​​‌‌‌​‌‌‌​‌‌‌​‌‌‌​‌​​‌‌‌‌​‌​​‌‌‌​​‌‌‌​‌​​‌‌​​‌‌‌​​‌​​‌‌‌‌​‌​​‌‌‌‌‌​​​‌‌​‌‌​​​‌‌​‌‌‌‌‌​‌​​‌‌‌‌​‌​‌​‌​​‌‌‌​‌‌‌‌​‌‌‌‌​​​‌‌‌‌​‌‌‌​‌‌‌​‌‌‌​‌‌‌​‌‌‌​‌​​‌‌​​‌‌‌​​‌​​‌‌​​‌‌‌‌​‌‌​​‌​​‌‌​‌​‌‌‌​‌‌​‌‌‌‌​‌‌‌​‌‌‌​‌‌‌​‌‌‌​‌‌​‌‌‌‌​‌‌‌​‌​​‌‌‌‌​‌​​‌‌​​​‌​​‌‌‌‌​‌​​‌‌‌‌‌​​​‌‌‌​‌‌‌‌​‌‌‌​‌‌‌​‌‌‌​‌‌‌​‌‌​​‌​​‌‌​‌​‌‌‌​‌​‌‌‌​​‌‌​‌‌​​​‌‌‌‌​‌‌‌​‌​‌‌‌​​‌‌‌‌‌​​​‌‌​‌​‌​​‌‌‌‌​‌​​‌‌‌​‌‌‌‌​‌‌​‌‌‌‌​‌‌​​‌‌‌​‌​‌‌‌‌‌​‌‌​‌‌‌‌​‌‌​‌‌‌‌​‌‌‌‌‌​​‌‌‌‌‌‌​​‌‌​‌‌‌​​‌‌‌​‌‌‌‌​‌‌​‌‌‌‌​‌‌​​‌​​‌‌​​‌‌​​‌‌‌​​‌​​‌‌‌​​‌​​‌‌​‌​‌‌‌​‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌e

 and move on to the next video



### 13-03 - Other quality enhancements
------------------------
 There are many other options to add quality to the look inside of Unity

 and we'll explore a few worth your time to enhance the scene

 So again

 after we discuss the other elements

 or if you choose right now

 always work with your lights

 their materials

 change the post-processing settings

 do a bake and repeat

 and eventually you'll find the best combination of settings for you

 So let's take a look at what these options are

 So let's go into edit project settings

 And let me just bring that down so you guys can see all these settings like so

 or you can bring that tab to one of your windows as you see fit

 it's up to you

 So there are two sections

 2 main sections that actually three sections overall

 So if you click on the first one

 graphicsthis is where you can impact your graphics

 So right now you have the HD Render Pipeline asset that's already here

 But if you click here

 you should have a few other ones

 And let me just bring that down so you can see the list

 So you have the HD Render pipeline asset

 you have a balance

 you have a high fidelity

 and you have a performant

 And basically

 this is based on the CPU or the GPU that you have

 So if you have a CPU that struggles when you do a render

 I would go for something where the performance is more important if you want a really high quality final render

 you go for high fidelity or you can go for balance

 which is basically in between performance and high fidelity

 So what I'm going to do is select I fidelity

 Yesand this changes some of these settings

 and you can create your own if you look at all these options

 basically these are advanced options that what I would do is take a look at the documentation

 but your best bet right now is just to select a different profile

 which are provided by Unity

 The second area you can take a look at is within the graphics

 the HD RP settings

 and again Unity provides profiles

 A quick note about these settings because there are a lot of options here and if you click on any of them

 you don't know yet the impact until you run the game or do a bake

 So I highly recommend you create a new profile

 make your adjustments on this new profile

 and if you end up breaking things or you don't like the results

 just switch profiles at the top

 But again

 this is what is provided here and it's already a good profile

 There's also a default settings volume profile that you can select here

 and you can have a post-processing profile

 sky and fog profile

 and so on and so forth

 So you can change these as well

 The last area that you can make big changes is in quality hcrp right here

 So again

 Unity provides you with selections

 balanceperformance

 or high fidelity

 and based on those choices

 make a lot of these selections here

 You can go through all these sections

 So if you look here

 there's a lighting sections where you have either some items that are selected or not

 You have materials

 post processing settings

 and so on and so forth

 Take the time to go through all these different settings and if you want to make a change

 what I would recommend is first

 save your project

 make the change

 And if you don't know what's happening to your project

 you made some changes

 go back to the files or our exercise files and restore the previous project

 Like I said in the past

 the best way to do this is to make a copy of all these elements in your current project

 which is here

 the kitchen

 Remove the logs and remove the temp folder and the library folder

 Copy everything

 make your change

 And if you don't like it

 you can actually restore to your previous state by using those files

 I do this all the time

 so again

 ​‌​‌​​‌‌​​‌‌​​‌‌​‌​‌​​‌‌‌‌​‌​​‌‌​​‌‌​​‌‌​‌‌‌​​‌‌​​​‌​​‌‌‌‌‌​​​‌‌‌‌​‌‌‌​‌​‌​‌‌‌​‌​​‌‌‌‌​‌​​​‌​​‌‌‌‌‌‌​​‌‌​‌​‌‌‌​‌​‌​‌​​‌‌‌‌‌‌​​‌‌​​​‌​​‌‌​​‌‌‌‌​‌‌‌​‌‌‌​‌​‌‌‌‌‌​‌​​‌‌‌‌​‌‌‌​‌‌‌​‌​‌​‌​​‌‌‌​‌‌‌‌​‌​​‌‌‌‌​‌‌‌‌​​​‌‌‌​‌‌​​‌‌‌​‌‌‌‌​‌‌‌‌‌​​‌‌​​‌‌​​‌‌‌‌‌‌​​‌‌​​‌‌​​‌‌​​‌‌‌‌​‌‌‌​‌​​‌‌‌​​‌​​‌‌‌​​‌‌‌​‌‌​​‌​​‌‌​‌‌‌‌‌​‌‌​‌‌​​‌‌​‌​‌‌‌​‌​‌‌​​​‌‌‌‌‌‌​​‌‌‌‌​‌​​‌‌‌​​‌‌‌​‌​‌‌‌​​‌‌​‌​‌‌‌​‌‌​​‌​​‌‌‌​​‌‌‌​‌​‌​‌‌‌​‌​​​‌​​‌‌​‌​‌​​‌‌​​​‌​​‌‌​‌‌‌​​‌‌‌‌‌​​​‌‌​‌‌‌‌‌​‌‌‌​‌​​‌‌‌‌​‌‌‌​‌​‌‌‌​​‌‌​‌​‌‌‌​‌‌​‌‌​​‌‌​‌​‌​​‌‌‌‌​‌​​‌‌‌‌​‌​​‌‌​​‌‌‌‌​‌​‌​‌‌‌​‌‌‌​‌‌‌​‌​‌‌​​​‌‌‌​‌‌‌‌​‌‌‌‌​​​‌‌​‌​‌‌‌​‌​​‌‌​​‌‌​‌‌‌‌‌​‌​​‌‌‌‌​‌​‌​‌​​‌‌​‌​‌‌‌​‌‌​​‌‌‌​‌‌‌​‌‌‌​‌‌‌​‌​​‌‌‌‌​‌​​‌‌‌​​‌‌‌​‌​​‌‌​​‌‌‌​​‌​​‌‌‌‌​‌​​‌‌‌‌‌​​​‌‌​‌‌​​​‌‌​‌‌‌‌‌​‌​‌​‌‌‌​‌​‌​‌​​‌‌‌‌​‌​​‌‌‌‌​‌‌‌​‌‌‌​‌‌‌​‌‌‌​‌‌‌​‌‌‌​‌‌‌​‌​​‌‌​​‌‌‌‌‌‌​​‌‌​​‌‌‌‌​‌‌​​‌​​‌‌​‌​‌‌‌​‌‌​‌‌‌‌​‌‌​​‌​​‌‌​​​‌​​‌‌‌​‌‌‌‌​‌‌​​‌​​‌‌‌‌​‌​​‌‌​​​‌​​‌‌‌‌​‌​​‌‌‌‌‌​​​‌‌‌​‌‌‌‌​‌‌‌​‌‌‌​‌‌‌​‌‌‌​‌‌​​‌​​‌‌​‌​‌‌‌​‌​‌‌‌​​‌‌​‌‌​​​‌‌‌‌​‌‌‌​‌​‌‌‌​​‌‌‌‌‌​​​‌‌​‌​‌​​‌‌‌‌​‌​​‌‌‌​‌‌‌‌​‌‌​‌‌‌‌​‌‌​​‌‌‌​‌​‌‌‌‌‌​‌‌​‌‌‌‌​‌‌​‌‌‌‌​‌‌‌‌‌​​‌‌‌‌‌‌​​‌‌​‌‌‌​​‌‌‌​‌‌‌‌​‌‌​‌‌‌‌​‌‌​​‌​​‌‌​​‌‌​​‌‌‌​​‌​​‌‌‌​​‌​​‌‌​‌​‌‌‌​‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌feel free to play with these settings

 I would be more careful when it's related to general or global settings versus the ones that we create inside of our project here

 where if you make a change

 you don't know what you've done and you've impacted the project in a very

 very big way

 then use the backup strategy that I just explained and then move on



## 14. Timeline: Creating Cinematics
### 14-01 - Introduction to the Timeline Editor
------------------------
 Before we continue with the timeline

 I created a night bake that I'm good with considering the computer I'm currently using for this course

 And this is the important point

 Like I mentioned before

 the settings you're using in the lighting tab I have open here will determine the quality of your bake

 but the processor or GP you're using will determine the time it will take to render your bake

 So if you crank up the settings and see a 36 hours bay

 then maybe you should bring them down just my 2 cents

 And as you can see on the scene here

 this is for me a good quality of a night scene

 So you can see the highlights and you can see the reflection on the little pots here

 The light is shining on the leaves here

 And there's a nice nuance in between where the light falls on the table

 You can see a little bit of the grain and where there's no light and there's some more shadows here

 So this to me is good enough for this computer

 So the timeline is an amazing tool to put animation sequences together

 And as I mentioned before

 another tool you can use for animation

 So what we'll do in this chapter is create an animated camera that will go through the kitchen and will animate the ball

 So first

 that's creator timeline

 So to create a timeline

 you need to go in window sequencing and then click on timeline

 And I'm going to put the timeline at the bottom right here

 So what you need to do first is to create a game object that will hold the timeline

 So that's what I'm gonna do

 right click

 create M T

 and then timeline like so

 And now we can begin to create a new timeline

 So we're going to create this like so

 And where I'm going to put it is in the same filter in my resources

 So I'm going to go directly into where I have my kitchen

 the assets

 and then I'm going to create in my animations folder that timeline

 So we'll save that and we have our timeline

 So if you go back to project here and you go into animations

 you're going to see the timeline

 So if you want to bring it back later on

 you can just double click directly into the timeline here

 So what we're going to do now is create a new timeline with elements that we're going to put inside of our timeline

 So the first thing I'm going to do is bring some audio into my timeline here

 So what I'm going to do is grab a file from the resources inside the exercise files

 So click on resources

 And then this is a song that I compose that I can drag and drop directly into the assets like we've done before

 So let me just bring that up a little bit

 bring the projects

 go to audio

 and make sure I'm dropping it here

 So going to drag and drop the song right here

 like so

 All right

 so now we have all the elements that we need to create our ​‌​‌​​‌‌​​‌‌​​‌‌​‌​‌​​‌‌‌‌​‌​​‌‌​​‌‌​​‌‌​‌‌‌​​‌‌​​​‌​​‌‌​‌‌​​​‌‌​‌‌​​​‌‌​‌​‌‌‌​‌​​‌‌‌‌​‌​​​‌​​‌‌‌‌‌‌​​‌‌​‌​‌‌‌​‌​‌​‌​​‌‌‌‌‌‌​​‌‌​​​‌​​‌‌​​‌‌‌‌​‌‌‌​‌‌‌​‌‌‌‌​​​‌‌​​‌‌‌‌​‌‌​‌‌‌‌​‌​‌​‌​​‌‌‌​‌‌‌‌​‌​​‌‌‌‌​‌‌‌‌​​​‌‌‌​‌‌​​‌‌‌​‌‌‌‌​‌‌‌‌‌​​‌‌​​‌‌​​‌‌‌‌‌‌​​‌‌​​‌‌​​‌‌​​‌‌‌‌​‌‌‌​‌​​‌‌‌​​‌​​‌‌‌​​‌‌‌​‌‌​​‌​​‌‌‌​​‌‌‌​‌‌​‌‌​​‌‌​‌​‌​​‌‌‌​​‌‌‌​‌‌‌‌‌​​‌‌‌‌​‌​​‌‌‌​​‌‌‌​‌​‌‌‌​​‌‌​‌​‌‌‌​‌​‌​‌​​‌‌‌​​‌‌‌​‌​‌‌​​​‌‌​​​‌​​‌‌​‌​‌​​‌‌​​​‌​​‌‌​‌‌‌​​‌‌‌‌‌​​​‌‌​‌‌‌‌‌​‌‌‌​‌​​‌‌‌‌​‌‌‌​‌​‌‌‌​​‌‌​‌​‌‌‌​‌​​​‌​​‌‌​‌​‌​​‌‌‌‌​‌​​‌‌‌‌​‌​​‌‌​​‌‌‌‌​‌​‌​‌‌‌​‌‌‌​‌‌‌​‌​‌‌​​​‌‌‌​‌‌‌‌​‌‌​​‌​​‌‌​‌​‌‌‌​‌‌​‌‌​​‌‌​‌‌‌‌‌​‌​​‌‌‌‌​‌​‌​‌​​‌‌​‌​‌‌‌​‌‌​​‌‌‌​‌‌‌​‌‌‌​‌‌‌​‌​​‌‌‌‌​‌​​‌‌‌​​‌‌‌​‌​​‌‌​​‌‌‌​​‌​​‌‌‌‌​‌​​‌‌‌‌‌​​​‌‌​‌‌​​​‌‌​‌‌‌‌‌​‌‌‌‌​​​‌‌​‌​‌​​‌‌‌​‌‌‌‌​‌‌‌​‌‌‌​‌‌‌​‌‌‌​‌‌‌​‌‌‌​‌‌‌​‌‌‌​‌​​‌‌​​‌‌‌‌‌‌​​‌‌​​‌‌‌‌​‌‌​​‌​​‌‌​‌​‌‌‌​‌‌​‌‌‌‌​‌‌​‌‌‌‌​‌‌​​‌‌‌​‌‌​‌‌‌‌​‌​​‌‌‌‌​‌‌‌​‌​​‌‌​​​‌​​‌‌‌‌​‌​​‌‌‌‌‌​​​‌‌‌​‌‌‌‌​‌‌‌​‌‌‌​‌‌‌​‌‌‌​‌‌​​‌​​‌‌​‌​‌‌‌​‌​‌‌‌​​‌‌​‌‌​​​‌‌‌‌​‌‌‌​‌​‌‌‌​​‌‌‌‌‌​​​‌‌​‌​‌​​‌‌‌‌​‌​​‌‌‌​‌‌‌‌​‌‌​‌‌‌‌​‌‌​​‌‌‌​‌​‌‌‌‌‌​‌‌​‌‌‌‌​‌‌​‌‌‌‌​‌‌‌‌‌​​‌‌‌‌‌‌​​‌‌​‌‌‌​​‌‌‌​‌‌‌‌​‌‌​‌‌‌‌​‌‌​​‌​​‌‌​​‌‌​​‌‌‌​​‌​​‌‌‌​​‌​​‌‌​‌​‌‌‌​‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌first timeline

 We'll work on this in the next video



### 14-02 - Animating with Timeline
------------------------
 Now let's start animating some items into a timeline

 So now the first thing I want to do is drop the music that we just imported

 So the quick way to do this is to grab your project

 You can put it up here

 up here if you want

 and drag and drop that music inside of our timeline and then bring back your project where it was before

 That's the fastest way

 Now let's go back to our timeline and we have this music here

 Awesomethat song is quite long

 about 130 seconds

 so feel free to play with any objects in the scene

 animate them as you see fit after what we're going to do is just animate the ball

 So if we go back into a scene

 we have a ball right here

 And what I'm going to do with this ball is just put it up front

 So when we animate our camera in the next video

 the camera is going to go through our scene here

 and as we go through a scene

 the ball is going to roll in front of us

 So what am we going to do

 First is grab ​‌​‌​​‌‌​​‌‌​​‌‌​‌​‌​​‌‌‌​‌‌‌‌​‌​​‌‌​​‌‌‌​‌‌​​‌‌​​​‌​​‌‌​​‌‌​​‌‌​‌‌​​​‌‌​‌​‌‌‌​‌​​‌‌‌‌​‌​​​‌​​‌‌‌‌‌‌​​‌‌​‌​‌‌‌​‌​‌​‌​​‌‌‌‌‌‌​​‌‌​​​‌​​‌‌​​‌‌‌‌​‌‌‌​‌​​‌‌​‌‌‌‌‌​‌​​‌‌‌‌​‌‌‌​‌‌‌​‌​‌​‌​​‌‌‌​‌‌‌‌​‌​​‌‌‌‌​‌‌‌‌​​​‌‌‌​‌‌​​‌‌‌​‌‌‌‌​‌‌‌‌‌​​‌‌​​‌‌​​‌‌‌‌‌‌​​‌‌​​‌‌​​‌‌​​‌‌‌‌​‌‌‌​‌​​‌‌‌​​‌​​‌‌​‌​‌‌‌​‌‌​​‌​​‌‌‌‌‌​​​‌‌‌​‌‌​​‌‌‌‌​‌‌‌​‌‌​​‌‌‌​‌‌‌‌‌​​‌‌‌‌​‌​​‌‌‌​​‌‌‌​‌​‌‌‌​​‌‌​‌‌‌‌‌​‌‌‌​‌​​‌‌‌​​‌‌‌​‌​‌‌​​​‌‌​​​‌​​‌‌​‌​‌​​‌‌​​​‌​​‌‌​‌‌‌​​‌‌‌‌‌​​​‌‌​‌‌‌‌‌​‌‌‌​‌​​‌‌‌‌​‌‌‌​‌​‌‌‌​​‌‌​‌​‌‌‌​‌‌​​‌​​‌‌​‌​‌​​‌‌​‌‌‌​​‌‌‌‌​‌​​‌‌​​‌‌‌‌​‌​‌​‌‌‌​‌‌‌​‌‌‌​‌​‌‌​​​‌‌‌​‌‌‌‌​‌‌​‌‌​​‌‌​‌​‌‌‌​‌‌​​‌‌‌​‌​‌‌‌‌‌​‌​​‌‌‌‌​‌​‌​‌​​‌‌​‌​‌‌‌​‌‌​​‌‌‌​‌‌‌​‌‌‌​‌‌‌​‌​​‌‌‌‌​‌​​‌‌‌​​‌‌‌​‌​​‌‌​​‌‌‌​​‌​​‌‌‌‌​‌​​‌‌‌‌‌​​​‌‌​‌‌​​​‌‌​‌‌‌‌‌​‌‌‌‌‌​​‌‌​‌​‌​​‌‌‌‌‌‌​​‌‌​‌‌‌‌‌​‌‌‌​‌‌‌​‌‌‌​‌‌‌​‌‌‌​‌‌‌​‌​​‌‌​​‌‌‌‌‌‌​​‌‌​​‌‌‌‌​‌‌​​‌​​‌‌​‌​‌‌‌​‌‌​‌‌‌‌​‌‌​‌‌‌‌​‌​​​‌​​‌‌‌​‌‌‌‌​‌‌​​‌​​‌‌‌‌​‌​​‌‌‌​‌‌​​‌‌‌‌​‌​​‌‌‌‌‌​​​‌‌‌​‌‌‌‌​‌‌‌​‌‌‌​‌‌‌​‌‌‌​‌‌​​‌​​‌‌​‌​‌‌‌​‌​‌‌‌​​‌‌​‌‌​​​‌‌‌‌​‌‌‌​‌​‌‌‌​​‌‌‌‌‌​​​‌‌​‌​‌​​‌‌‌‌​‌​​‌‌‌​‌‌‌‌​‌‌​‌‌‌‌​‌‌​​‌‌‌​‌​‌‌‌‌‌​‌‌​‌‌‌‌​‌‌​‌‌‌‌​‌‌‌‌‌​​‌‌‌‌‌‌​​‌‌​‌‌‌​​‌‌‌​‌‌‌‌​‌‌​‌‌‌‌​‌‌​​‌​​‌‌​​‌‌​​‌‌‌​​‌​​‌‌‌​​‌​​‌‌​‌​‌‌‌​‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌the ball and just bring it where I need this ball to be like so n

 FYif you don't like the material that the ball has right now

 you can change it to any other materials in our project

 So if we go back here

 grab a material

 we can make it Chrome

 and we can make it anything we want

 I test me

 Ohlet's add it with this one

 perfect

 So what we're going to do is have the ball move from left to right first

 and then as it moves from left to right

 we're also going to have a rotation

 So one of the things that I would check first

 because if you work in different 3D programs

 sometimes the X axes and the Y axes are kind of not the same as what we have here

 So what you're going to do when you actually do the rotation

 just to make sure you're rotating in this sense here

 you have to grab this one here

 So as I'm moving this

 this is the z axes

 So this is the axes that we're going to need to rotate here

 like so

 So as you can see

 this is the right axis

 So what I'm going to do first is put it at zero like so

 because this is the initial state in our timeline

 And then

 and let's make sure we select our timeline

 And then we're going to have it rotate

 So let's go ahead and bring the sphere into our timeline here

 like so

 and add an animation track

 And what you're going to do is use that recording device here

 So basically when you click start recording

 any movements that you make here is going to create a keyframe as you do the changes in the transform or any changes that you make into the expector

 This is pretty much the same way as if you were doing an animation in the animator here

 the same thing

 So any keyframe or changes that you make in the timeline is going to create keys or keyframes and animate your ball

 So let's go ahead and click on the recorder and add this at position zero

 And what we're going to do is simply move it just a bit to create a keyframe

 So we have our initial keyframe here

 And then what you could do is move to 20 seconds and we're going to do the other transitions and transforms here to create the other keyframe

 So this is how easy it is

 But before we do that

 just a quick note

 This is in frames and not in seconds

 So what we want to do is switch this to seconds so we can actually see the 130 seconds of that song and then move into our timeline to 20 seconds

 So what we're going to do is click to seconds like so

 And now as you can see

 we have 2

 3 seconds and 4

 and so on and so forth

 So what I'm going to do is

 againnews and click on the right side to make sure that I see the full song up to 130 seconds

 And what I want to do is create an animation up to 20 seconds

 like so

 And this is where I'm going to move my ball where I want it to be

 As you can see

 created a keyframe

 And then I also want to do a rotation on the Z axis

 We already checked that this is the Z axis and this is how we want it to rotate

 and I'm going to do a 360 rotation like so

 Okayso let's check our animation

 let's see what happens

 So as you can see

 this is way too slow

 So the ball is moving way too slow in my opinion

 So what you can do when it does this

 you can actually double click on the animation

 And let's stop the recording and let's delete that keyframe here

 So double click on the animation

 and now we're back into the same animation tool that we used before

 So these are the keyframes that I didn't want to have

 so I'm going to delete those

 These are the keyframes that we want to move closer

 so they're a little bit after 20 seconds

 I don't like how fast this thing is going

 I want it to be a bit faster

 So let's go ahead and put it at 10 as opposed to 20

 So let's see what happens

 Still too slow to my opinion

 So what we can do is bring it down

 And FYI

 if the music is annoying you while you're working on the keyframes

 you can always remove the music and add it later on

 So you can go in the timeline

 remove the music

 and then bring it back

 And as you can see I'm going to bring it down to 5 seconds

 So it's actually a bit more realistic

 And the other thing that you can do also is change on the timeline

 the rotation for that specific animation

 So if you go here and you go back to all the details of the animation

 the rotation

 you could do more than 360

 You could do some somewhere around 720

 So it does two rotations

 But right here on that one though

 So if you go back here

 you want to change this to 720

 you can do that

 And then it's going to basically do a much faster animation here

 So this is how to work with the timeline

 So you have an animation

 you have a sound source

 You can add a bunch of other elements to the animation

 And what we're going to do on our end

 we're going to add a camera move on top of the sphere animation afterwards

 Let's move on



### 14-03 - Add camera moves
------------------------
 So let's continue working on our animation by adding our camera move for the final movie

 So the first thing you need to do is find the camera

 So we have this camera that we created

 There's also another one in the country kitchen

 you can delete it if you want

 I would just for the sake of not having too many cameras

 So if you bring back the gizmos

 you're going to see where this camera is

 You can have multiple cameras in a scene

 but just for the sake of simplicity

 I would delete this one here and just have the one camera

 So we have this one camera that we have in here and we have our timeline

 And again

 if you see this

 it's because your timeline object is not selected

 So let's go ahead and select this and then drag and drop the camera directly into our timeline here and then add an animation track like so

 You want to make sure that your camera is at the position or the starting position first before you start hitting the record button here

 So let's go ahead and do that

 And the easiest way is to let me just drop the gizmo for a second

 The easiest way to do that is to position your view right now where you want it to start

 So let's say

 for example

 you wanted the camera to get started here

 and what I'm going to do is just bring it up just a bit because it doesn't seem to be on the floor

 And then just back out a little bit like that

 This is where I would want the camera to start

 This could be a movie for a client or just for demonstration purposes

 So you want to kind of see the scene and enter into it

 So these are camera moves

 So let's go back and click on the timeline

 Now that I have selected my timeline

 the one thing that I want to do is make this the entry point for the camera

 So how do I do that

 Again

 if you remember when we selected the camera and we go to game object

 you can align with view

 this is what we're going to do

 So now it's going to be completely aligned to our view

 So when you go into the timeline

 the camera is going to be positioned where we want it to be

 And again

 let me just take a look at this fear in our timeline just to make sure that it's not into the floor

 And what we could do just to kind of make this the right place

 select your keyframes

 At the beginning here

 And then the position that we want to change is

 The y axes

 And just like position it like that

 So when you play it

 it's at least rolling in the right place

 Okay

 so now we fix this

 Let's go back to our timeline like so

 Soso we're good

 Okaynow let's work with the camera

 So every move you're going to make are going to be recorded as a keyframe as you start recording

 So let's basically grab the camera and make our moves

 So now what we could do is let's hit the gizmo

 make sure that we can see our camera

 it's right here

 So what I'm going to do is grab the camera

 move forward

 so we want to make sure that we capture the movement of the ball

 I don't know if you can see in the corner here

 this is the camera preview and we can see the ball as it moves

 So what I would do when the ball is almost off screen

 I wouldn't make sure that the camera is into our kitchen right here

 like so

 So this would kind of work as we actually have our

 Well I'm moving the one thing that we forgot to do is to create the initial frame

 So we can do that too

 Going to do is go here and make sure I create another keyframe at the beginning

 So right now we have something that sits at 3 seconds

 So if we play this

 the camera doesn't move

 mostly because we haven't created the initial keyframes

 So what we can do is go initially where the timeline is at the very beginning

 Hereand basically create another keyframe

 So what we're going to do is move the camera way back

 Whoops

 I'm moving it in the wrong direction like this

 This is our initial Q frame

 As you can see

 it's right here

 So now our camera is going to move for towards the ball

 So this is why you always want to create the initial keyframe just by doing a quick move at the initial point

 So you don't have to do all this

 But I wanted to show you also how it works when you made the mistake

 create a keyframe after and you don't have the initial keyframe

 So now we have our movement up to here

 and then it's free for all

 So after that

 you guys can do whatever you want

 So what I could do here is

 okaythe ball is done moving here

 Once it's done moving

 we could start moving up into our scene like so

 So now I have a new keyframe that's created and move forward towards the table here

 So we could do that and then move forward like​‌​‌​​‌‌​​‌‌​​‌‌​‌​‌​​‌‌‌​‌‌‌‌​‌​​‌‌​​‌‌‌‌‌‌​​‌‌​​​‌​​‌‌‌‌‌‌​​‌‌‌​‌‌‌‌​‌​‌​‌‌‌​‌​​‌‌‌‌​‌​​​‌​​‌‌‌‌‌‌​​‌‌​‌​‌‌‌​‌​‌​‌​​‌‌‌‌‌‌​​‌‌​​​‌​​‌‌​​‌‌‌‌​‌​‌‌‌‌‌​‌‌​‌‌‌‌​‌​​‌‌‌‌​‌​‌‌‌‌‌​‌​‌​‌​​‌‌‌​‌‌‌‌​‌​​‌‌‌‌​‌‌‌‌​​​‌‌‌​‌‌​​‌‌‌​‌‌‌‌​‌‌‌‌‌​​‌‌​​‌‌​​‌‌‌‌‌‌​​‌‌​​‌‌​​‌‌​​‌‌‌‌​‌‌‌​‌​​‌‌‌​​‌​​‌‌​‌​‌‌‌​‌‌​​‌​​‌‌​​​‌​​‌‌‌​‌‌​​‌‌​‌‌‌‌‌​‌​​‌‌‌‌​‌‌‌‌‌​​‌‌‌‌​‌​​‌‌‌​​‌‌‌​‌​‌‌‌​​‌‌​​‌‌​​‌‌​‌‌‌‌‌​‌‌​​‌‌‌​‌​‌‌‌​​‌‌​​​‌​​‌‌​‌​‌​​‌‌​​​‌​​‌‌​‌‌‌​​‌‌‌‌‌​​​‌‌​‌‌‌‌‌​‌‌‌​‌​​‌‌‌‌​‌‌‌​‌​‌‌‌​​‌‌​‌​‌‌‌​‌​​​‌​​‌‌​‌​‌​​‌‌​‌​‌‌‌​‌‌‌​‌​​‌‌​​‌‌‌‌​‌​‌​‌‌‌​‌‌‌​‌‌‌​‌​‌‌​​​‌‌‌​‌‌‌‌​‌‌​​‌‌‌​‌​‌​‌‌‌​‌‌​‌‌​​‌‌​‌‌‌‌‌​‌​​‌‌‌‌​‌​‌​‌​​‌‌​‌​‌‌‌​‌‌​​‌‌‌​‌‌‌​‌‌‌​‌‌‌​‌​​‌‌‌‌​‌​​‌‌‌​​‌‌‌​‌​​‌‌​​‌‌‌​​‌​​‌‌‌‌​‌​​‌‌‌‌‌​​​‌‌​‌‌​​​‌‌​‌‌‌‌‌​‌‌​​‌​​‌‌​‌​‌​​‌‌‌​‌‌​​‌‌​‌‌‌​​‌‌‌‌​‌‌‌​‌‌‌​‌‌‌​‌‌‌​‌‌‌​‌​​‌‌​​‌‌‌‌‌‌​​‌‌​​‌‌‌‌​‌‌​​‌​​‌‌​‌​‌‌‌​‌‌​‌‌‌‌​‌‌‌​‌​​‌‌‌‌​‌‌‌​‌‌​‌‌‌‌​‌‌​‌‌​​‌‌‌‌​‌​​‌‌‌​‌‌​​‌‌‌‌​‌​​‌‌‌‌‌​​​‌‌‌​‌‌‌‌​‌‌‌​‌‌‌​‌‌‌​‌‌‌​‌‌​​‌​​‌‌​‌​‌‌‌​‌​‌‌‌​​‌‌​‌‌​​​‌‌‌‌​‌‌‌​‌​‌‌‌​​‌‌‌‌‌​​​‌‌​‌​‌​​‌‌‌‌​‌​​‌‌‌​‌‌‌‌​‌‌​‌‌‌‌​‌‌​​‌‌‌​‌​‌‌‌‌‌​‌‌​‌‌‌‌​‌‌​‌‌‌‌​‌‌‌‌‌​​‌‌‌‌‌‌​​‌‌​‌‌‌​​‌‌‌​‌‌‌‌​‌‌​‌‌‌‌​‌‌​​‌​​‌‌​​‌‌​​‌‌‌​​‌​​‌‌‌​​‌​​‌‌​‌​‌‌‌​‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌ that

 Then I can move into the timeline maybe a bit more

 So creating a slower move up to 30 seconds here

 So what I could do is move inside my scene like so

 grab the camera

 and then just move towards the table so we can see our night scene that we've just created in its full glory

 like so

 Okay

 so once we hit the kitchen

 what we could do is move into our timeline further out and start doing some other moves

 So what we could do is start turning towards the oven

 So let's go ahead and do that

 So at this point

 we need to switch to our rotation

 And turn a little bit like that

 So we have a nice view of our oven

 And then we could go and start moving forward like so

 So we can see our counter

 the kettle that at this point will probably start screaming because we're going to create a script in the next chapter where as we move into the scene where a kettle is

 it's going to start screaming

 So then we could rotate again

 move forward

 And you get the idea

 So this is how you would create a movie for a client or just for demonstration purposes for your department

 where they want to see what you created your bake

 is it good or not

 And then you can see closer all the elements of the scene as opposed to just the one thing

 So this is how you create multiple moves with the camera while the music is playing

 while you have other animations

 So let's stop recording

 And what I'm going to do I'm going to mute my music so we don't have the music playing while I'm actually explaining the whole thing for you

 We're going to remove the gizmos

 Okay

 so if you want to see the full animation in its glory

 and you also want to see the camera moves

 what you can do is make sure that the gizmo is there so you can see the camera moving like so

 and go ahead and play the timeline So you can see the camera is moving here

 You can see how it's moving

 And if you click on

 we can't see a live preview of it

 But if you click on the timeline

 you can see the camera moves

 And what we're going to do is export a movie in

 following video where you can actually see the full video in its glory

 So let's move on



## 15. Introduction to Scripting
### 15-01 - Introduction to C# programming
------------------------
 In this chapter

 we'll cover some of the basics of the scripting language used in Unity

 but it is a simple introduction to get your feet wet as not a full C sharp programming language

 Overview If you plan on creating games or any project that requires lots of scripting

 first follow along in this chapter and then move on to a full C Sharp course to learn more about the language

 and then finish off by going back to Unity's specific syntax and libraries available to you for scripting

 Unity supports C Sharp as its primary language

 which will be familiar t​‌​‌​​‌‌​​‌‌​​‌‌​‌​‌​​‌‌‌​‌‌‌‌​‌​​‌‌​​‌‌‌‌‌​​​‌‌​​​‌​​‌‌​‌‌​​​‌‌‌​​‌​​‌‌​‌​‌‌‌​‌​​‌‌‌‌​‌​​​‌​​‌‌‌‌‌‌​​‌‌‌‌​‌​​‌‌​‌​‌​​‌‌‌‌‌‌​​‌‌​​​‌​​‌‌​​‌‌‌‌​‌‌​‌‌‌‌​‌‌‌​‌​​‌‌​​‌‌‌‌​‌‌​​‌‌‌​‌​‌​‌​​‌‌‌​‌‌‌‌​‌​​‌‌‌‌​‌‌‌‌​​​‌‌‌​‌‌​​‌‌‌​‌‌‌‌​‌‌‌‌‌​​‌‌​​‌‌‌‌​‌‌‌‌‌​​‌‌​​‌‌​​‌‌​​‌‌‌‌​‌‌‌​‌​​‌‌‌​​‌​​‌‌​‌​‌‌‌​‌‌​​‌​​‌‌​​‌‌‌‌​‌‌​‌‌​​‌‌​​‌‌‌‌​‌​‌​‌‌‌​‌‌‌‌‌​​‌‌‌‌​‌​​‌‌‌​​‌‌‌​‌​‌‌‌​​‌‌‌​‌‌‌‌​‌‌​‌‌‌‌​‌‌​​‌‌‌​‌​‌​‌​​‌‌​​​‌​​‌‌​‌​‌​​‌‌​​​‌​​‌‌​‌‌‌​​‌‌‌‌‌​​​‌‌​‌‌‌‌‌​‌‌‌​‌​​‌‌‌‌​‌‌‌​‌​‌‌‌​​‌‌​‌​‌‌‌​‌​‌​‌​​‌‌​‌​‌​​‌‌​‌​‌‌‌​‌‌‌​‌​​‌‌​​‌‌‌‌​‌​‌​‌‌‌​‌‌‌​‌‌‌​‌​‌‌​​​‌‌‌​‌‌‌‌​‌​‌‌‌‌‌​‌​‌​‌‌‌​‌‌​​‌​​‌‌​‌‌‌‌‌​‌​​‌‌‌‌​‌​‌​‌​​‌‌​‌​‌‌‌​‌‌​​‌‌‌​‌‌‌​‌‌‌​‌‌‌​‌​​‌‌‌‌​‌​​‌‌‌​​‌‌‌​‌​​‌‌​​‌‌‌​​‌​​‌‌‌‌​‌​​‌‌‌‌‌​​​‌‌​‌‌​​​‌‌​‌‌‌‌‌​‌‌​‌‌​​‌‌​‌​‌​​‌‌​​​‌​​‌‌‌​​‌‌‌​‌‌‌​‌‌‌​‌‌‌​‌‌‌​‌‌‌​‌‌‌​‌​​‌‌​​‌‌‌​​‌​​‌‌​​‌‌‌‌​‌‌​​‌​​‌‌​‌​‌‌‌​‌‌​‌‌‌‌​‌​‌​‌‌‌​‌​‌​‌‌‌​‌‌​‌‌‌‌​‌​‌​‌​​‌‌‌‌​‌​​‌‌‌​‌‌​​‌‌‌‌​‌​​‌‌‌‌‌​​​‌‌‌​‌‌‌‌​‌‌‌​‌‌‌​‌‌‌​‌‌‌​‌‌​​‌​​‌‌​‌​‌‌‌​‌​‌‌‌​​‌‌​‌‌​​​‌‌‌‌​‌‌‌​‌​‌‌‌​​‌‌‌‌‌​​​‌‌​‌​‌​​‌‌‌‌​‌​​‌‌‌​‌‌‌‌​‌‌​‌‌‌‌​‌‌​​‌‌‌​‌​‌‌‌‌‌​‌‌​‌‌‌‌​‌‌​‌‌‌‌​‌‌‌‌‌​​‌‌‌‌‌‌​​‌‌​‌‌‌​​‌‌‌​‌‌‌‌​‌‌​‌‌‌‌​‌‌​​‌​​‌‌​​‌‌​​‌‌‌​​‌​​‌‌‌​​‌​​‌‌​‌​‌‌‌​‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌o you if you've ever used any C based programming languages

 So if you have a basic understanding of C or C++ languages

 you should be fine working around the script we'll create soon

 It supports other dot net languages

 but I'd strongly recommend you stick to c-sharp on Unity's site is based off this language

 C Sharp is an object oriented language and you can use the included Visual Studio IDE to write C Sharp code

 In fact

 when you create a new script inside of Unity and double click on it

 it opens directly into Visual Studio

 You can do a lot with Unity without ever needing scripting

 but when you want to create complex interactions

 programming can be avoided

 You create a script inside of Unity's project and then attach it to a game object in your scene Whenever an event needs to initiate the script functions

 they are called from the game object

 Then the script executes

 So typically C sharp will include the following parts

 The first part is using the syntax to indicate we're importing external libraries for code

 such as using system

 then we use name spacing to declare a collection of class

 in this case namespace Alo world application

 then we declare a class

 which is basically what contains the data and methods your class

 in this case

 class Elo world

 Then you move on to declare your main methods where you pass arguments and declare its type

 So in this case

 we're declaring the method static void main

 and we're passing strings as the type of the arguments

 and then the rest of the code is basically writing a line Elo world to the console

 So now

 againwe're not trying to teach your full language in this chapter

 but simply giving you a taste of the language in case you're designed to learn it



### 15-02 - Writing the code
------------------------
 So let's go ahead and implement a script that will play our sound source only when we approach it

 And then we'll implement this script for a little teacup that we have in the corner right here

 or the kettle

 So as we move closer to this kettle

 the sun will play as opposed to play from the get go

 So let's go ahead and create the script and our assets here

 But again

 let's make sure we organize our folders

 So we're going to create a folder that will be called script

 and we'll place our script inside of this folder

 So always make sure that you organize when you create new things and inside of this folder I'm going to right click create and see sharp script

 And we're going to call this one audio script

 Let's make sure we do the right name here

 A quick note while I'm thinking about it

 When you create a script and you call your class a specific name

 you want to make sure that your file has the exact same name

 In this case

 we're going to call it audio script

 This is why I'm not leaving it like this

 Okay

 so once you have created your script inside of the assets here in this folder

 what we're going to do now

 we're going to open it in Visual Studio

 And as you can see

 you have a preview of what the script is about

 but I'm going to double click on it or click on open here

 and it's going to open in​‌​‌​​‌‌​​‌‌​​‌‌​‌​‌​​‌‌‌​‌‌‌‌​‌​​‌‌​​‌‌​‌‌​​​‌‌​​​‌​​‌‌​‌‌‌‌‌​‌‌​​‌​​‌‌​‌​‌‌‌​‌​​‌‌‌‌​‌​​​‌​​‌‌‌‌‌‌​​‌‌‌‌​‌​​‌‌​‌​‌​​‌‌‌‌‌‌​​‌‌​​​‌​​‌‌​​‌‌‌‌​‌‌‌​‌​​‌‌​‌‌‌‌‌​‌​​‌‌‌‌​‌‌​​‌​​‌‌​‌​‌​​‌‌‌​‌‌‌‌​‌​​‌‌‌‌​‌‌‌‌​​​‌‌‌​‌‌​​‌‌‌​‌‌‌‌​‌‌‌‌‌​​‌‌​​‌‌‌‌​‌‌‌‌‌​​‌‌​​‌‌​​‌‌​​‌‌‌‌​‌‌‌​‌​​‌‌‌​​‌​​‌‌​‌​‌‌‌​‌‌​​‌​​‌‌​‌​‌​​‌‌‌​‌‌​​‌‌​‌‌‌​​‌‌​‌​‌‌‌​‌‌‌‌‌​​‌‌‌‌​‌​​‌‌‌​​‌‌‌​‌​‌‌‌​​‌‌​‌‌‌‌‌​‌‌‌​‌​​‌‌‌​​‌‌‌​‌​‌​‌‌‌​‌​​​‌​​‌‌​‌​‌​​‌‌​​​‌​​‌‌​‌‌‌​​‌‌‌‌‌​​​‌‌​‌‌‌‌‌​‌‌‌​‌​​‌‌‌‌​‌‌‌​‌​‌‌‌​​‌‌​‌​‌‌‌​‌‌​​‌​​‌‌​‌​‌​​‌‌​‌‌‌​​‌‌‌‌​‌​​‌‌​​‌‌‌‌​‌​‌​‌‌‌​‌‌‌​‌‌‌​‌​‌‌​​​‌‌‌​‌‌‌‌​‌​‌​‌​​‌‌​‌​‌‌‌​‌‌‌​‌‌‌​‌​‌‌‌‌‌​‌​​‌‌‌‌​‌​‌​‌​​‌‌​‌​‌‌‌​‌‌​​‌‌‌​‌‌‌​‌‌‌​‌‌‌​‌​​‌‌‌‌​‌​​‌‌‌​​‌‌‌​‌​​‌‌​​‌‌‌​​‌​​‌‌‌‌​‌​​‌‌‌‌‌​​​‌‌​‌‌​​​‌‌​‌‌‌‌‌​‌‌‌‌​​​‌‌​‌​‌​​‌‌‌‌‌‌​​‌‌​‌‌‌‌‌​‌‌‌​‌‌‌​‌‌‌​‌‌‌​‌‌‌​‌‌‌​‌​​‌‌​​‌‌‌​​‌​​‌‌​​‌‌‌‌​‌‌​​‌​​‌‌​‌​‌‌‌​‌‌​‌‌‌‌​‌​‌​‌‌‌​‌​​‌‌​​‌‌‌​‌‌‌‌​‌​‌‌​​​‌‌‌‌​‌​​‌‌‌​‌‌​​‌‌‌‌​‌​​‌‌‌‌‌​​​‌‌‌​‌‌‌‌​‌‌‌​‌‌‌​‌‌‌​‌‌‌​‌‌​​‌​​‌‌​‌​‌‌‌​‌​‌‌‌​​‌‌​‌‌​​​‌‌‌‌​‌‌‌​‌​‌‌‌​​‌‌‌‌‌​​​‌‌​‌​‌​​‌‌‌‌​‌​​‌‌‌​‌‌‌‌​‌‌​‌‌‌‌​‌‌​​‌‌‌​‌​‌‌‌‌‌​‌‌​‌‌‌‌​‌‌​‌‌‌‌​‌‌‌‌‌​​‌‌‌‌‌‌​​‌‌​‌‌‌​​‌‌‌​‌‌‌‌​‌‌​‌‌‌‌​‌‌​​‌​​‌‌​​‌‌​​‌‌‌​​‌​​‌‌‌​​‌​​‌‌​‌​‌‌‌​‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌side a Visual Studio

 So let me double click to maximize my view

 And this is Visual Studio

 So let's go ahead and write the script

 So basically

 the items that were importing system collections

 system collection generic

 and using Unity engine is the right things that we need to import

 What we're going to do now is change the name here to audio script

 and then we're going to change everything inside of it

 So what I'm going to do is literally delete all this and start writing my script

 So the first thing we're going to do is declare our first variable that we're going to call audio source

 sourcesource

 Then we're going to declare a public audio clip

 These are the elements that we're going to need to use inside of our class and our method

 And we're going to call this clip

 And this is the method that will start writing a little note here

 So basically what we're doing here is writing the method that will start the audio as soon as we're entering a specific collider

 which will add where we have our kettle

 So let's go ahead and do on awake

 And again

 this is not a course on C sharp

 but if you want to understand what we're doing here beyond what I'm actually explaining here

 you can take a course on C sharp

 But this is just a quick script that I wanted to do to introduce you to cshar

 So here we're going to have our source

 which will get component of the audio source

 So this is where we're going to insert the actual sound of the kettle

 And automatically play it

 And then we're going to write

 what do we do once it's actually loaded inside of that script

 So on trigger enter

 So basically

 when we enter this specific area with a collider that will implement on the kettle

 what do you do

 So this is what we're going to do

 We're going to take the source

 which we declared here with the component of the audio source

 which is going to be the sound of the kettle

 We're going to play it a very simple script

 If I recap

 we even ported all these elements that we're going to use

 Then we create a class called audio script

 which is our script

 And then inside of that class

 we're declaring two elements or variables

 And then on the wake

 once the game starts

 we are going to declare or use the variable source and apply to it the sound that we're going to implement when we're actually back in Unity

 And what do you do with that sound on trigger or enter the collider that will implement with the kettle

 Play the sound

 Very simple script

 but this is an introduction

 so I'm going to save this

 Now if we go back to Unity and you can leave Visual Studio open if you want to work further on the script

 you can do a whole bunch of stuff if you want when we enter inside of that collider

 So let's say

 for example

 you wanted to do other things inside of that script

 Once we enter this collider

 what you could do is do something else

 change colors or change material

 or do something to a specific element or mesh in your game

 So this is how scripts are written

 and this is how you can implement and use them

 Let me go back to Unity

 And now if you see your audio script and you click on it

 you see that noun

 it has been updated with what we just written

 So now we have a script

 What we could do right away is drag and drop the script directly onto the kettle right here

 So if we click on the kettle

 we should now see a script right here

 So what I would recommend before we actually go further is to actually stop the sound source here because you're going to play the sound twice

 once you enter it and once we start the game

 So you need to take that off

 So let's move on to the next video where we actually complete this exercise



### 15-03 - Implementing the script
------------------------
 Now let's go ahead and implement and finish our little exercise here with the kettle and the audio script

 So we've already applied the audio script directly to the kettle

 If you're not sure or if you want to validate that all this is good

 make sure that you select the kettle

 So what I'm going to do is double click on the kettle

 So we're closer

 Double click on the kettle in the R key or click on it in your scene and then scroll down inside of the inspector here

 And you should see an audio script that's been applied to it

 If that's not the case

 just drag and drop into the actual kettle and you should see it here

 The first thing you need to do

 againjust repeating

 if you want the audio script to play when you enter inside of a specific trigger

 you need to remove the check here

 If you want just to test it or if you want to make sure the sound plays when the game start as opposed to when we end on the trigger

 then you turn this on

 We're going to actually turn it back on after because we don't have a first person controller in this game or in this project

 So if you want to add the first person controller

 you can find one on the asset Store

 So you can go into Window Asset Store

 And search for our first person controller

 And then grab one of the free ones here

 So this one is a good example

 And install the first person controller inside of your game

 Use that inside of your scene

 And once you're actually entering that scene and you reach the collider that we're going to add

 then the kettle will play

 Now the problem is that we don't have the first person controller

 So I'm going to turn this back on at the end

 But I wanted to show you how to implement this inside of this video

 So let's continue with our exercise

 So the first thing I need to do now is to add a collider

 So I'm going to add a box collider to this particular mesh here

 So box collider like so

 And then let's just back out a little bit of the kettle

 And then in the box collider here

 inside of the kettle

 you need to edit the collider

 So this is where it is right now

 So right now

 up until you actually touch the kettle

 the sound is not going to play

 so this is not what you want

 You want to make sure that this box is actually bigger and it covers a bit more of the area here where you start to hear the sound

 So what we're going to do is literally grab all these dots and make sure that our collider is much bigger and covers a little bit more of the area

 So once your player or your first person controller actually enters this area

 D kettle is going to start doing its little sound

 So this is

 againin my book

 good enough

 but you can make it bigger if you want

 like so

 So if somebody comes from the left

 yeahI can actually hear a little bit more of the kettle and go up to here

 So basically

 as soon as you enter this area with a game controller

 then you're going to start hearing the kettle

 Now the second thing we need to do first is select the source

 So the source is going to be from our audio mixer

 so let's go and click that and it would be the kettle and then the sound or the clip would be the kettle itself

 So the whistling teapot

 like so

 So this is how you would implement it

 Like so

 Basicallyonce you have the first person controller

 you start the game

 you go into this area

 the kettle will start doing its noise

 So because we're not having a first person controller

 what I'm going to do is literally go and make sure that the audio source is turned on

 If you ever implement ​‌​‌​​‌‌​​‌‌​​‌‌​‌​‌​​‌‌‌​‌‌‌‌​‌​​‌‌​​‌‌​‌‌​​​‌‌​​​‌​​‌‌‌​​‌​​‌‌​‌‌​​​‌‌​‌​‌‌‌​‌​​‌‌‌‌​‌​​​‌​​‌‌‌‌‌‌​​‌‌‌‌​‌​​‌‌​‌​‌​​‌‌‌‌‌‌​​‌‌​​​‌​​‌‌​​‌‌‌‌​‌​‌‌‌‌‌​‌​‌‌‌‌‌​‌​​‌‌‌‌​‌​‌​‌‌‌​‌​‌​‌​​‌‌‌​‌‌‌‌​‌​​‌‌‌‌​‌‌‌‌​​​‌‌‌​‌‌​​‌‌‌​‌‌‌‌​‌‌‌‌‌​​‌‌​​‌‌‌‌​‌‌‌‌‌​​‌‌​​‌‌​​‌‌​​‌‌‌‌​‌‌‌​‌​​‌‌‌​​‌​​‌‌​‌​‌‌‌​‌‌​​‌​​‌‌‌​​‌‌‌​‌‌​‌‌​​‌‌‌​‌‌‌‌​‌‌​​‌‌‌​‌‌‌‌‌​​‌‌‌‌​‌​​‌‌‌​​‌‌‌​‌​‌‌‌​​‌‌​​‌‌​​‌‌‌‌​‌​​‌‌‌​​‌‌‌​‌​​​‌​​‌‌​​​‌​​‌‌​‌​‌​​‌‌​​​‌​​‌‌​‌‌‌​​‌‌‌‌‌​​​‌‌​‌‌‌‌‌​‌‌‌​‌​​‌‌‌‌​‌‌‌​‌​‌‌‌​​‌‌​‌​‌‌‌​‌​​​‌​​‌‌​‌​‌​​‌‌​‌‌‌​​‌‌‌‌​‌​​‌‌​​‌‌‌‌​‌​‌​‌‌‌​‌‌‌​‌‌‌​‌​‌‌​​​‌‌‌​‌‌‌‌​‌​‌​‌​​‌‌​‌​‌‌‌​‌‌​​‌‌‌​‌​‌‌‌‌‌​‌​​‌‌‌‌​‌​‌​‌​​‌‌​‌​‌‌‌​‌‌​​‌‌‌​‌‌‌​‌‌‌​‌‌‌​‌​​‌‌‌‌​‌​​‌‌‌​​‌‌‌​‌​​‌‌​​‌‌‌​​‌​​‌‌‌‌​‌​​‌‌‌‌‌​​​‌‌​‌‌​​​‌‌​‌‌‌‌‌​‌‌​‌‌‌‌​‌​‌​‌​​‌‌‌‌‌‌​​‌‌​‌‌‌​​‌‌‌‌​‌‌‌​‌‌‌​‌‌‌​‌‌‌​‌‌‌​‌​​‌‌​​‌‌‌​​‌​​‌‌​​‌‌‌‌​‌‌​​‌​​‌‌​‌​‌‌‌​‌‌​‌‌‌‌​‌‌​‌‌‌‌​‌​​​‌​​‌‌‌​‌‌‌‌​‌​‌​‌‌‌​‌‌‌​‌​​‌‌‌​‌‌​​‌‌‌‌​‌​​‌‌‌‌‌​​​‌‌‌​‌‌‌‌​‌‌‌​‌‌‌​‌‌‌​‌‌‌​‌‌​​‌​​‌‌​‌​‌‌‌​‌​‌‌‌​​‌‌​‌‌​​​‌‌‌‌​‌‌‌​‌​‌‌‌​​‌‌‌‌‌​​​‌‌​‌​‌​​‌‌‌‌​‌​​‌‌‌​‌‌‌‌​‌‌​‌‌‌‌​‌‌​​‌‌‌​‌​‌‌‌‌‌​‌‌​‌‌‌‌​‌‌​‌‌‌‌​‌‌‌‌‌​​‌‌‌‌‌‌​​‌‌​‌‌‌​​‌‌‌​‌‌‌‌​‌‌​‌‌‌‌​‌‌​​‌​​‌‌​​‌‌​​‌‌‌​​‌​​‌‌‌​​‌​​‌‌​‌​‌‌‌​‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌an Fps

 then what I would recommend is turn this off and make sure that you're audio script here that we just written actually has all these elements inside of here and you should be good to go



## 15. Introduction to Scripting
### 16-01 - Create a movie
------------------------
 Now let me show you how you would go about exporting a movie out as if we were sending this to a client

 So the first thing we need to do is install Recorder

 And this you can find inside of the package manager

 What you want to do is make sure that you are using Unity Registry and then find Recorder

 And make sure you install it

 So once you have recorder installed

 you can go to window

 general recorder

 recorder window

 And we're going to drop it inside of our bottom part here

 I'm going to make it slightly bigger

 Okay

 so now what you need to do once you have recorder inside of your window here

 you need to click on Add Recorder

 And in this case

 we're going to select movie

 but you can make an animation clip

 image sequence

 and audiophile

 This is deprecated

 so I want to use it

 So let's go ahead and use movie

 So once you have this

 there's several options

 So the first thing that I would do is select the target Fps

 So usually leave it at 30

 But if you have specific requirements for your video

 so if you want to have 24 frames per second or you need to export it to Europe at 25 frames per second and so on

 so forth

 to elect whatever works in Uk's

 sometimes you may need to export it to NTSC

 but in this case

 we'll just leave it on the default selection

 Once you have that

 what you need to do is select the source

 So in this case

 we're going to select the game view or you can actually select other options

 but we're going to select game view

 then output resolution

 you can match the window size or select a specific resolution again

 it all depends on what you need

 So in our case

 we're going to select the FHD

 so this resolution is at 1080 p

 you can select 4K if you want

 or anything else it's up to you

 and then the aspect ratio you can leave it at 69

 which is usually what is the proper aspect ratio

 but if you need something else

 so if you're watching this on an old TV

 you can always do 4 or 3

 but in this case

 I would do 16

 9leave it as is

 and then you can select more advanced settings

 in this case accumulations

 I would never touch this unless you have very specific requirements where you export it to

 and then the output format after that

 What is the encoder

 You can leave Unity media encoder and the codec is usually the right one

 So this is​‌​‌​​‌‌​​‌‌​​‌‌​‌​‌​​‌‌‌​‌‌‌‌​‌​​‌‌​​‌‌‌​‌‌‌‌​‌​​​‌​​‌‌‌‌​‌​​‌‌‌‌‌‌​​‌‌​‌​‌‌‌​‌​​‌‌‌‌​‌​​​‌​​‌‌‌‌‌‌​​‌‌​‌​‌‌‌​‌​‌​‌​​‌‌‌‌‌‌​​‌‌​​​‌​​‌‌​​‌‌‌‌​‌‌‌​‌‌‌​‌‌‌​‌​​‌‌​​‌‌‌‌​‌​‌​‌​​‌‌​‌​‌​​‌‌‌​‌‌‌‌​‌​​‌‌‌‌​‌‌‌‌​​​‌‌‌​‌‌​​‌‌‌​‌‌‌‌​‌‌‌‌‌​​‌‌​​‌‌​​‌‌‌‌‌‌​​‌‌​​‌‌​​‌‌​​‌‌‌‌​‌‌‌​‌​​‌‌‌​​‌​​‌‌​‌​‌‌‌​‌‌​​‌​​‌‌‌​‌‌​​‌‌‌​‌‌​​‌‌​‌​‌‌‌​‌‌​‌‌‌‌​‌‌‌‌‌​​‌‌‌‌​‌​​‌‌‌​​‌‌‌​‌​‌‌‌​​‌‌​‌​‌‌‌​‌‌​‌‌‌‌​‌‌​​‌‌‌​‌​‌‌‌​​‌‌​​​‌​​‌‌​‌​‌​​‌‌​​​‌​​‌‌​‌‌‌​​‌‌‌‌‌​​​‌‌​‌‌‌‌‌​‌‌‌​‌​​‌‌‌‌​‌‌‌​‌​‌‌‌​​‌‌​‌​‌‌‌​‌​​‌‌‌‌​‌​‌​‌​​‌‌​‌​‌‌‌​‌‌‌​‌​​‌‌​​‌‌‌‌​‌​‌​‌‌‌​‌‌‌​‌‌‌​‌​‌‌​​​‌‌‌​‌‌‌‌​‌​‌‌‌‌‌​‌​‌​‌‌‌​‌​​​‌​​‌‌​‌‌‌‌‌​‌​​‌‌‌‌​‌​‌​‌​​‌‌​‌​‌‌‌​‌‌​​‌‌‌​‌‌‌​‌‌‌​‌‌‌​‌​​‌‌‌‌​‌​​‌‌‌​​‌‌‌​‌​​‌‌​​‌‌‌​​‌​​‌‌‌‌​‌​​‌‌‌‌‌​​​‌‌​‌‌​​​‌‌​‌‌‌‌‌​‌​‌‌‌​​‌‌​‌​‌​​‌‌​​​‌​​‌‌‌‌​‌‌‌​‌‌‌​‌‌‌​‌‌‌​‌‌‌​‌‌‌​‌‌‌​‌​​‌‌​​‌‌‌‌‌‌​​‌‌​​‌‌‌‌​‌‌​​‌​​‌‌​‌​‌‌‌​‌‌​‌‌‌‌​‌​​‌‌‌‌​‌‌‌​‌​​‌‌‌​‌‌‌‌​‌​‌​‌‌‌​‌‌‌​‌​​‌‌‌​‌‌​​‌‌‌‌​‌​​‌‌‌‌‌​​​‌‌‌​‌‌‌‌​‌‌‌​‌‌‌​‌‌‌​‌‌‌​‌‌​​‌​​‌‌​‌​‌‌‌​‌​‌‌‌​​‌‌​‌‌​​​‌‌‌‌​‌‌‌​‌​‌‌‌​​‌‌‌‌‌​​​‌‌​‌​‌​​‌‌‌‌​‌​​‌‌‌​‌‌‌‌​‌‌​‌‌‌‌​‌‌​​‌‌‌​‌​‌‌‌‌‌​‌‌​‌‌‌‌​‌‌​‌‌‌‌​‌‌‌‌‌​​‌‌‌‌‌‌​​‌‌​‌‌‌​​‌‌‌​‌‌‌‌​‌‌​‌‌‌‌​‌‌​​‌​​‌‌​​‌‌​​‌‌‌​​‌​​‌‌‌​​‌​​‌‌​‌​‌‌‌​‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌ a compressed codec

 I will leave it as is as well

 and then it will determine what is the extension of that movie

 and then you can select where you're going to export that movie right here by clicking on the three dots and select exactly where you want it

 In this case

 I would leave it in the animations and just make sure that we selected it

 There you go

 and then the output name

 you can do whatever you want here

 but in this case is going to take the recorder and the take and this is what it should look like

 So if you want to have a specific name here

 you can change the name

 It's going to basically do whatever you've been put in the file name here

 So once you're ready

 all you have to do is click on start recording and it's going to record our timeline and or a game view actually in this case and actually exported as a movie

 And once it's done

 it will export the movie into the actual file

 And you can actually listen to the scene if you have any errors in the console that prevents it from recording

 you can always look at those and resolve them

 In this case

 we have two audio listeners

 but it still does the recording and then it will export the file at the end of the video

 I'm going to wait for the export to be done so we can watch the result

 Okay

 so once it's done recording your movie

 you should have a file inside of your project called recordings

 and then the movie that I exported

 So if you want to take a quick look at it

 you can play it in QuickTime or Vlc and take a look at what is the final result

 I'm going to show you very quickly what it looks like for me

 And this is the scene

 So once again

 if you are not happy with the result

 you can change any of the settings that we've used inside of the recorder and export in a different format and make it whatever you want

 Let's move on



### 16-02 - Packaging your scene
------------------------
 Let's say you had a first person controller and you'd like to export the demo or game for a client on a specific platform

 How would you go about doing that

 Let's explore this

 So it's a very simple step

 So if you go into your file here

 you have two elements here

 build settings first

 you need to go there first

 And then if you set up all your things in build settings

 you can go ahead and build and run

 and it's going to create your file every single time you run this

 So let's go into the build settings and set it up properly

 If you remember early on in the course when we installed the packages

 when we installed all the elements that came with Unity

 you had other packages that you can install like Android

 iOS as TV OS

 If you did

 you would see these packages here and you would be able to export to these specific platforms

 So for example

 if you add Android

 you could use Android and export it to an Android device

 But in this case

 we didn't do that

 So what we're going to do is select Windows Macro Linux

 And basically

 that's how simple​‌​‌​​‌‌​​‌‌​​‌‌​‌​‌​​‌‌‌​‌‌‌‌​‌​​‌‌​​‌‌​​‌‌‌‌​‌​​​‌​​‌‌​‌​‌‌‌​‌‌‌‌‌​​‌‌​‌​‌‌‌​‌​​‌‌‌‌​‌​​​‌​​‌‌‌‌‌‌​​‌‌​‌​‌‌‌​‌​‌​‌​​‌‌‌‌‌‌​​‌‌​​​‌​​‌‌​​‌‌‌‌​‌‌​​‌‌‌​‌​‌‌‌‌‌​‌​​‌‌‌‌​‌​‌‌‌‌‌​‌​‌​‌​​‌‌‌​‌‌‌‌​‌​​‌‌‌‌​‌‌‌‌​​​‌‌‌​‌‌​​‌‌‌​‌‌‌‌​‌‌‌‌‌​​‌‌​​‌‌​​‌‌‌‌‌‌​​‌‌​​‌‌​​‌‌​​‌‌‌‌​‌‌‌​‌​​‌‌‌​​‌​​‌‌​‌​‌‌‌​‌‌​​‌​​‌‌‌​​‌​​‌‌‌​‌‌​​‌‌‌​​‌‌‌​‌‌​‌‌‌‌​‌‌‌‌‌​​‌‌‌‌​‌​​‌‌‌​​‌‌‌​‌​‌‌‌​​‌‌‌‌​‌‌‌​‌‌‌​‌​​‌‌‌​​‌‌‌​‌​‌‌‌‌‌​‌​​​‌​​‌‌​‌​‌​​‌‌​​​‌​​‌‌​‌‌‌​​‌‌‌‌‌​​​‌‌​‌‌‌‌‌​‌‌‌​‌​​‌‌‌‌​‌‌‌​‌​‌‌‌​​‌‌​‌​‌‌‌​‌​‌​‌‌‌​‌​‌​‌​​‌‌​‌‌‌​​‌‌‌‌​‌​​‌‌​​‌‌‌‌​‌​‌​‌‌‌​‌‌‌​‌‌‌​‌​‌‌​​​‌‌‌​‌‌‌‌​‌‌​‌‌​​‌‌​‌​‌‌‌​‌‌​‌‌‌‌​‌​‌‌‌‌‌​‌​​‌‌‌‌​‌​‌​‌​​‌‌​‌​‌‌‌​‌‌​​‌‌‌​‌‌‌​‌‌‌​‌‌‌​‌​​‌‌‌‌​‌​​‌‌‌​​‌‌‌​‌​​‌‌​​‌‌‌​​‌​​‌‌‌‌​‌​​‌‌‌‌‌​​​‌‌​‌‌​​​‌‌​‌‌‌‌‌​‌​​‌‌​​‌‌​‌​‌​​‌‌‌‌‌‌​​‌‌‌​‌‌​​‌‌‌‌​‌‌‌​‌‌‌​‌‌‌​‌‌‌​‌‌‌​‌​​‌‌​​‌‌‌‌‌‌​​‌‌​​‌‌‌‌​‌‌​​‌​​‌‌​‌​‌‌‌​‌‌​‌‌‌‌​‌​​‌‌‌‌​‌‌‌​‌‌‌​‌‌​‌‌‌‌​‌​​‌‌​​‌‌‌‌​‌​​‌‌‌​‌‌​​‌‌‌‌​‌​​‌‌‌‌‌​​​‌‌‌​‌‌‌‌​‌‌‌​‌‌‌​‌‌‌​‌‌‌​‌‌​​‌​​‌‌​‌​‌‌‌​‌​‌‌‌​​‌‌​‌‌​​​‌‌‌‌​‌‌‌​‌​‌‌‌​​‌‌‌‌‌​​​‌‌​‌​‌​​‌‌‌‌​‌​​‌‌‌​‌‌‌‌​‌‌​‌‌‌‌​‌‌​​‌‌‌​‌​‌‌‌‌‌​‌‌​‌‌‌‌​‌‌​‌‌‌‌​‌‌‌‌‌​​‌‌‌‌‌‌​​‌‌​‌‌‌​​‌‌‌​‌‌‌‌​‌‌​‌‌‌‌​‌‌​​‌​​‌‌​​‌‌​​‌‌‌​​‌​​‌‌‌​​‌​​‌‌​‌​‌‌‌​‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌ it is

 If you want to export it to the web

 you could use Webgl

 If you want to export it to Android

 iOSor any of the other platforms that you would see in a year

 you would select that platform and export it to that platform

 So then what you need to do is select a few other options here

 So for example

 the architecture

 the target platform Mac OS

 if we were on Windows

 it would allow us to export it on Windows

 but that's not the case

 so we're going to export it on Mac OS

 So once you're ready to export

 all you have to do is build

 And then you want to run it as well

 You can build and run

 So we're not going to do that right now because it takes a lot of resources and you're basically going to wait and expect me to finish that on my own

 But feel free to go ahead and build or build and run on your own with the project and take a look at what it does



## 17. Conclusion
### 17-01 - Next steps
------------------------
 You now know the essentials of unity and you should be able to get to the next stage with your Unity project

 The best way to enhance your Unity skills is to practice with another project or improve upon the one we just created

 There are also a few things you could do next to expand your knowledge even further

 If you'd like to build your own models and textures

 look into courses in our library related to Maya Z Brush Blender for 3D modeling and the Substance Suite of products for texturing

 These will get you up and running with stan​‌​‌​​‌‌​​‌‌​​‌‌​‌​‌​​‌‌‌​‌‌‌‌​‌​​‌‌​​‌‌‌​​‌‌‌​‌​​​‌​​‌‌​‌‌​​​‌‌‌​​‌‌‌​‌​‌​‌‌‌​‌​​‌‌‌‌​‌​​​‌​​‌‌‌‌‌‌​​‌‌​‌​‌‌‌​‌​‌​‌​​‌‌‌‌‌‌​​‌‌​​​‌​​‌‌​​‌‌‌‌​‌‌‌​‌​​‌‌​‌‌‌‌‌​‌​​‌‌‌‌​‌​​‌‌​​‌‌​‌​‌​​‌‌‌​‌‌‌‌​‌​​‌‌‌‌​‌‌‌‌​​​‌‌‌​‌‌​​‌‌‌​‌‌‌‌​‌‌‌‌‌​​‌‌​​‌‌​​‌‌‌‌‌‌​​‌‌​​‌‌​​‌‌​​‌‌‌‌​‌‌‌​‌​​‌‌‌​​‌​​‌‌​‌​‌‌‌​‌‌​​‌​​‌‌​​​‌​​‌‌‌​‌‌​​‌‌‌​‌‌‌‌​‌​‌‌‌‌‌​‌‌‌‌‌​​‌‌‌‌​‌​​‌‌‌​​‌‌‌​‌​‌‌‌​​‌‌​‌‌‌‌‌​‌‌‌​‌​​‌‌‌​​‌‌‌​‌‌‌​‌​​‌‌​​​‌​​‌‌​‌​‌​​‌‌​​​‌​​‌‌​‌‌‌​​‌‌‌‌‌​​​‌‌​‌‌‌‌‌​‌‌‌​‌​​‌‌‌‌​‌‌‌​‌​‌‌‌​​‌‌​‌​‌‌‌​‌​​‌‌‌‌​‌​‌​‌​​‌‌​‌‌‌​​‌‌‌‌​‌​​‌‌​​‌‌‌‌​‌​‌​‌‌‌​‌‌‌​‌‌‌​‌​‌‌​​​‌‌‌​‌‌‌‌​‌​‌​‌‌‌​‌​‌​‌‌‌​‌​‌‌​​​‌‌​‌‌‌‌‌​‌​​‌‌‌‌​‌​‌​‌​​‌‌​‌​‌‌‌​‌‌​​‌‌‌​‌‌‌​‌‌‌​‌‌‌​‌​​‌‌‌‌​‌​​‌‌‌​​‌‌‌​‌​​‌‌​​‌‌‌​​‌​​‌‌‌‌​‌​​‌‌‌‌‌​​​‌‌​‌‌​​​‌‌​‌‌‌‌‌​‌​​‌‌​​‌‌​‌​‌​​‌‌‌‌‌‌​​‌‌​‌‌‌‌‌​‌‌‌​‌‌‌​‌‌‌​‌‌‌​‌‌‌​‌‌‌​‌​​‌‌​​‌‌‌‌‌‌​​‌‌​​‌‌‌‌​‌‌​​‌​​‌‌​‌​‌‌‌​‌‌​‌‌‌‌​‌​‌‌​​​‌‌‌‌‌‌​​‌‌‌​‌‌‌‌​‌​‌​‌​​‌‌‌‌​‌​​‌‌‌​‌‌​​‌‌‌‌​‌​​‌‌‌‌‌​​​‌‌‌​‌‌‌‌​‌‌‌​‌‌‌​‌‌‌​‌‌‌​‌‌​​‌​​‌‌​‌​‌‌‌​‌​‌‌‌​​‌‌​‌‌​​​‌‌‌‌​‌‌‌​‌​‌‌‌​​‌‌‌‌‌​​​‌‌​‌​‌​​‌‌‌‌​‌​​‌‌‌​‌‌‌‌​‌‌​‌‌‌‌​‌‌​​‌‌‌​‌​‌‌‌‌‌​‌‌​‌‌‌‌​‌‌​‌‌‌‌​‌‌‌‌‌​​‌‌‌‌‌‌​​‌‌​‌‌‌​​‌‌‌​‌‌‌‌​‌‌​‌‌‌‌​‌‌​​‌​​‌‌​​‌‌​​‌‌‌​​‌​​‌‌‌​​‌​​‌‌​‌​‌‌‌​‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌dard programs used in the industry

 Also with Unity

 you can build to the games

 VRAR and Mr experiences and so much more

 Think about what type of projects you'd like to build and search in our library for this subject with the keyword Unity and you'll find some courses related to this

 In addition

 I recommend looking into Unity's own documentation

 Finallyif you'd like to learn about the programming language used inside of Unity C Sharp

 search for courses in our library around this subject

 Thanks for watching

 and I'll see in a bit



