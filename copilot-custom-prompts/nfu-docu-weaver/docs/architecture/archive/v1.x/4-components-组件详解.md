# 4. Components (组件详解)

## 4.1 Python 脚本 (Backend)

- **目的**: 作为后端执行器，处理所有实际的文件操作，与 LLM 完全解耦。
    
- **核心功能**:
    
    - `analyze_data(directory_path)`: 接收一个目录路径，返回该目录下 `.yml` 文件的数量。
        
    - `generate_document(data_file_path, template_file_path, output_path)`: 接收数据文件、模板文件和输出路径，生成一份填充好的文档。
        
- **接口**: 通过函数调用与外部（由 LLM 驱动的执行环境）交互。
    

## 4.2 工作流引擎 (LLM)

- **目的**: 作为指令集的“大脑”，负责调度和协调其他所有模块。
    
- **核心指令**: 根据 `状态管理器` 提供的当前状态，调用相应的指令模块。
    

## 4.3 状态管理器 (LLM)

- **目的**: 跟踪多轮对话的进度。
    
- **核心指令**: 在每次响应的末尾，以 `CURRENT_STATE: [状态名]` 的格式明确标注出当前的会话状态。状态列表包括：`AWAITING_INPUT`, `AWAITING_PLAN_CONFIRM`, `GENERATING`, `AWAITING_REVIEW`, `TASK_COMPLETE`。
    

## 4.4 知识库 (LLM)

- **目的**: 存储 `Docu-Weaver` 的核心专业知识。
    
- **核心指令/内容**:
    
    - **数据结构知识**: “一份标准的 YAML 数据文件使用键值对和缩进来表示层级结构...”
        
    - **模板结构知识**: “一份标准的 Word 模板文件使用 `{{key_name}}` 格式的占位符来标记待填充内容...”
        
    - **映射规则**: “数据文件中的 `key` 必须与模板文件中的 `key_name` 完全匹配...”
        

## 4.5 模块3: 文档生成 (Document Generator) (LLM)

- **目的**: 负责协调具体生成每一份文档的任务。
    
- **核心指令**:
    
    - “当状态为 `GENERATING` 时激活。”
        
    - “你必须调用后端的 Python 脚本来执行生成操作。”
        
    - **思维链 (Chain of Thought)**:
        
        1. 确定当前需要处理的数据文件（例如 `data_01.yml`）。
            
        2. 构建调用命令：`generate_document('path/to/data_01.yml', 'path/to/template.docx', 'path/to/output/')`。
            
        3. 执行命令。
            
        4. 接收脚本返回的成功或失败状态。
            
    - “生成完成后，将状态更新为 `AWAITING_REVIEW`。”
        

(其他 LLM 模块如输入解析、计划制定、交互反馈的逻辑与之前类似，但内容替换为通用的“数据”和“模板”。)
