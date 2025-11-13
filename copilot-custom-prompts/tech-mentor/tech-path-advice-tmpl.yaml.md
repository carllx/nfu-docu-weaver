```yaml
template:
  id: tech-path-advice-template-v1
  name: Technical Path Advice
  version: 1.0
  output:
    format: markdown
    filename: docs/tech-advice-{{project_name_slug}}.md
    title: "技术路径建议: {{project_name}}"

workflow:
  mode: non-interactive # Agent 填充此模板，无需用户交互

sections:
  - id: analysis
    title: "项目分析: {{project_name}}"
    instruction: "基于学生输入，对项目目标和方法的简要理解。"
    template: |
      我理解你的项目 ({{project_name}}) 旨在通过动画研究“生理信号” (如 {{keywords}}) 作为“具身抵抗”的一种形式。
      你目前的设想是使用 {{current_methods}}，并已经考虑到了 {{risks_and_suggestions}}。这是一个非常深刻且富有挑战性的课题。

  - id: recommendation
    title: "技术路径建议"
    instruction: "在此处填写核心建议，推动使用代码和 AI 代替 GUI。"
    template: |
      你提出的 {{current_methods}} 流程是可行的，但正如你所意识到的，使用 GUI 工具 (如 AU/AE) 进行精确的数据对齐和复杂叙事（如分屏）会非常耗时，且不利于修改和迭代。

      **核心建议：转向“代码优先”和“AI 辅助”的流程。**

      1.  **数据处理 (替代 AU/Audacity)**:
          * **工具**: Python 库 (如 `librosa`, `pydub`, `scipy`)。
          * **原因**: 你可以编写脚本来批量处理、清理（如降噪）和分析（如检测心跳峰值）你的生理信号数据。这对于你提到的小样本对比测试（接触麦 vs 听诊器）至关重要，你可以快速量化信噪比。

      2.  **动画与叙事 (替代 AE)**:
          * **工具**: Python 库 (如 `MoviePy`) 或 创意编码框架 (如 `p5.js`, `Processing`)。
          * **原因**: 不要手动去对齐声画。你可以使用代码 *程序化地* 生成动画。例如，使用 `pandas` 读取你的信号数据和时间戳，然后用 `MoviePy` 自动剪辑视频片段，或者用 `p5.js` 根据心跳数据实时生成视觉效果。这能让你对“声画对位”和“分屏叙事”获得像素级的掌控力。

  - id: ai_support
    title: "关于技术背景：让 AI 成为你的技术合伙人"
    instruction: "明确指出 AI 助手如何帮助非技术背景的学生执行代码方案。"
    template: |
      你提到执行者是艺术学生，技术背景不强。这在过去是一个障碍，但现在 **AI 助手（如集成在 VS Code 中的 Gemini 或 Copilot）彻底改变了这一点。**

      你不再需要精通 Python 或 p5.js。你只需要在 IDE 中用自然语言描述你的理论需求：
      * "请帮我用 librosa 加载这个心跳音频，并提取所有节拍的时间戳。"
      * "我有一个时间戳列表和一个视频文件，请用 MoviePy 根据时间戳剪辑这个视频。"
      * "我希望这个 p5.js 椭圆的直径根据我的呼吸数据（一个数组）来变化。"

      这种方式让你能专注于 **理论和项目意义**，同时利用代码的 **灵活性和掌控力**。

  - id: peer_review_question
    title: "向同行的反思性提问 (Reflective Question)"
    instruction: "MANDATORY: 在此插入一个*包含上下文的*反思性问题，以便同行在不阅读全文的情况下也能理解并提供有效反馈。"
    template: |
      ---
      **[向同行的提问 (寻求更优方案)]**: 
      
      {{reflective_question_content}}
```