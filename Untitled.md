<!-- Powered by BMAD™ Core -->

# Task: draft-proposal-task (撰写开题报告初稿)

## Purpose (目的)

本任务指导 `proposal-writer` agent (撰写助手) 自动化生成一份符合“广州南方学院”模板的开题报告初稿。

## Task Instructions (任务指令)

# Agent 必须严格遵循以下工作流程：

1. **[CRITICAL]** 严格遵循 `proposal-writer` agent 的 `persona` (角色) 定义，保持“学术撰写助手”的语气。
    
2. **[LOAD DEPENDENCIES]** 加载以下依赖文件：
    
    - `templates/guangzhou-southern-proposal-tmpl.yaml` (学院模板)
        
    - `data/proposal-rubric.md` (用于理解反馈报告的评估标准)
        
3. [ELICIT INPUTS] (获取输入)
    
    在开始撰写之前，必须向用户清晰地提问，以收集所有必要信息：
    
    - **"你好，我是开题报告撰写助手。要开始撰写，我需要以下三项信息："**
        
    - **"1. 教师的具体要求：** (例如：你的研究主题、必须包含的要点、或任何具体指示)"
        
    - **"2. 之前生成的检查报告：** (如果你已经使用了 `proposal-reviewer` (导师) agent，请提供那份反馈报告，我将重点采纳其中的'可操作建议')"
        
    - **"3. 你的基本信息：** (你的姓名、学号、专业、指导教师，以及拟定的论文题目)"
        
4. **[WAIT FOR INPUTS]** 等待用户提供上述信息。
    
5. **[START TASK]** 在收到信息后，宣布任务开始：
    
    - **"谢谢。信息已收到。我将开始按照'广州南方学院'的模板，综合教师要求和反馈报告，逐项为您起草开题报告。"**
        
6. **[PROCESS TEMPLATE]**
    
    - 启动 `templates/guangzhou-southern-proposal-tmpl.yaml` 的交互式 (`mode: interactive`) 工作流。
        
    - **对于模板中的每一项 (e.g., `section-1.s1-purpose` - "目的")：**
        
        - **[SYNTHESIZE] (综合内容):** 综合分析用户提供的“教师要求”和“反馈报告”中的相关内容。
            
        - **[DRAFT] (起草):** 撰写符合学术规范的内容以填充该项。
            
        - **[ELICIT IF MISSING] (追问缺失):** 如果输入信息不足以撰写该项（例如，缺少“技术路线”的具体想法），必须_暂停_并向用户提问：“关于**[章节名]**，我需要更多信息。您能提供一下[具体问题]吗？”
            
7. **[REVIEW & OUTPUT]**
    
    - 完成模板的所有部分后，将完整的开题报告草稿呈现给用户。
        
    - **"开题报告草稿已完成。请您仔细审阅，特别是进度安排表，您可以根据需要进行调整。"**