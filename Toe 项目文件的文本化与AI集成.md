uses Python scripts to create a "transcript" of .toe files.

![|200](https://forum.derivative.ca/uploads/default/original/2X/0/0f9374e3f55a2185ea2b58a49f65c2c87e14cb3e.png)
(Source: [derivative.ca: .toe files in text format - General TouchDesigner Discussion - TouchDesigner forum](https://forum.derivative.ca/t/toe-files-in-text-format/309048))

#### TL;DR
TouchDesigner论坛讨论了将`.toe`文件转换为文本格式用于机器学习的可能性，现有`toeexpand/collapse`工具可以进行转换，但官方正在开发一种新的、更易于编辑和集成的JSON格式文本文件，以更好地支持版本控制、人工编辑以及与AI工具的集成，预计将大大提升TouchDesigner的竞争力。

#### Key Takeaways
*   TouchDesigner的用户正在探索使用机器学习（特别是大型语言模型LLM）来操作`.toe`文件 。
*   现有工具`toeexpand.exe`和`toecollapse.exe`可以将`.toe`文件与可读文本相互转换，但文件格式未公开 。
*   Derivative正在积极开发一种新的、基于JSON的文本文件格式，旨在提升版本控制和手动编辑体验 。
*   新的文本格式将便于与外部工具（包括AI工具）集成，并计划提供schema文件用于验证 。
*   用户认为新的文本格式对于TouchDesigner保持竞争力至关重要，尤其是在与LLM工具的集成方面 。
*   有人已经尝试在TouchDesigner中使用OpenAI API和Execute DAT来程序化地创建和连接操作符 。
*   新的、基于JSON的文本格式是TouchDesigner的优先事项，目前正在进行内部测试 。


---


TouchDesigner社区正在探索将项目文件与现代开发工具和人工智能技术更好地集成的方法。这篇笔记总结了社区讨论中关于项目文件文本化和未来发展方向的重要信息。

## toe 项目文件目

TouchDesigner的==`.toe`项目文件目前主要以二进制格式==存在，这给版本控制和自动化处理带来了一定挑战。社区成员正积极寻求将这些文件转换为文本格式，特别是为了与大型语言模型(LLM)等机器学习工具结合使用。

目前，用户可以通过官方提供的工具进行有限的文本转换：
- `toeexpand.exe`可将`.toe`文件转换为可读文本
- `toecollapse.exe`可将文本格式转回`.toe`文件

然而，这些工具使用的文件格式尚未公开，限制了其实用性。



---


## 未来发展

令人鼓舞的是，Derivative公司正在积极开发一种全新的基于JSON的文本文件格式。这一新格式具有以下特点：

- 便于版本控制和差异比较
- 支持手动编辑和修改
- 提供schema文件用于验证
- 设计为易于与外部工具（包括AI工具）集成


---



## 社区实践与期望

社区成员已经开始探索AI与TouchDesigner的结合：
- 有用户尝试使用OpenAI API结合Execute DAT来程序化创建和连接操作符
- 许多用户认为文本格式对于TouchDesigner保持竞争力至关重要，尤其是在AI工具日益普及的环境中

## 结论

新的基于JSON的文本格式有望显著提升TouchDesigner的工作流程，使其更好地适应现代开发环境和AI工具的集成需求。这一发展将为创意编程和视觉设计领域带来新的可能性，使TouchDesigner保持在实时视觉开发工具中的竞争优势。

### 建议的问题：
- Derivative公司是否公开过关于这个新JSON格式的更多技术细节，例如具体的schema结构？
- 除了`toeexpand.exe`和`toecollapse.exe`，还有哪些第三方工具或方法可以将`.toe`文件转换为文本格式？
- 使用新的JSON格式后，如何有效地与版本控制系统（例如Git）集成，以更好地管理TouchDesigner项目？
- 有哪些现成的工具或库可以方便地解析和操作TouchDesigner的这个新的JSON格式文件？
- 社区里有没有关于使用AI技术结合新的JSON格式来改进TouchDesigner工作流程的案例或教程？
