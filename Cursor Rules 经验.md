

源自:
[[How project rules enable multiple files for different scenarios]]
[[DeepResearch -- Cursor Rules 权威指南]]
[[DeepResearch -- BestPractices-- Cursor's rules and Memories]]

归纳如何正确使用Cursor IDE中 Project Rules 的要点：  

### **1. 告别单一文件，创建规则目录**  
- **操作步骤**：在项目根目录下，创建 `.cursor/rules` 文件夹（替代原有的 `.cursorrules` 单一文件）。  
- **核心优势**：将规则按场景拆分到多个文件中，避免单一文件臃肿，节省AI上下文空间。  


### **2. 规则文件的结构与格式**  
每个规则文件需包含两部分：  
- **YAML前置信息（文件开头）**：  
  - **description**：用简洁文字说明规则用途（如“Convex框架代码规范”），帮助AI理解规则目标。  
  - **globs**：通过文件匹配模式指定规则生效范围（例：`"**/*.ts"` 表示所有TS文件，`"test/**/*.test.ts"` 表示测试文件）。  
- **规则内容（YAML之后的部分）**：  
  直接编写对AI的具体指导（如“使用bun代替npm安装依赖”“函数命名采用驼峰式”），格式与原 `.cursorrules` 一致。  


### **3. 按场景拆分规则文件**  
- **应用场景举例**：  
  - **技术栈专属规则**：为Convex、React等框架分别创建规则文件（如 `convex_rules.mdc`）。  
  - **文件类型区分**：为源代码（`.ts`）和测试文件（`.test.ts`）设置不同规则（例：测试文件需包含单元测试模板）。  
  - **目录级规则**：针对 `src/components` 目录设置组件命名规范，针对 `config` 目录设置配置文件格式要求。  


### **4. 实践案例：以Convex框架为例**  
- **操作流程**：  
  1. 下载Convex团队提供的规则文件（`.mdc`格式）。  
  2. 将文件放入 `.cursor/rules` 目录。  
  3. 在Composer中输入Convex相关任务（如“创建Convex数据库模型”），AI会自动识别并加载对应规则，界面显示“正在使用anthropic_convex_rules规则”。  


### **5. 规则生效的智能逻辑**  
- **AI加载机制**：根据当前操作上下文（如编辑的文件路径、输入的任务关键词），自动匹配并激活对应的规则文件，无需手动切换。  
- **上下文优化**：仅加载当前场景相关的规则，避免无关规则占用AI上下文，提升代码生成准确性。  


### **6. 进阶技巧：规则管理与扩展**  
- **命名规范**：规则文件名建议包含场景关键词（如 `test_files_rules.mdc` `react_components_rules.mdc`），便于后续维护。  
- **规则复用**：跨项目使用时，可复制规则文件到新项目的 `.cursor/rules` 目录，快速复用成熟规范。  
- **结合Evals优化**：通过评估（Evals）和类似TDD的流程测试规则效果，持续迭代优化规则内容（推荐观看相关影片学习）。  


通过以上步骤，即可高效利用Project Rules实现AI辅助开发的模块化、智能化管理，让AI更精准地适配项目需求！