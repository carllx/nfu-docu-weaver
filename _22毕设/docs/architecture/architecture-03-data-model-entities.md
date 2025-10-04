## 3. 数据模型与实体定义 (Data Model & Entities)

本系统的数据模型是其核心，它将现实世界的指导关系转化为AI可操作的结构化数据。

### 3.1 核心实体 (Core Entities)

系统定义了三个核心实体，每个实体实例都作为一个独立的Markdown文件存在。

- **学生 (Student)**
    
    - **ID 格式**: `S_YYYY_##` (例如: `S_2026_01`)
        
    - **文件路径**: `cohort_data/students/[ID_Name].md`
        
    - **核心属性**: `student_id`, `name`, `contact`, `psychological_analysis`, `status`, `feedback_log`
        
    - **描述**: 代表一个独立的学生，是所有关系的起点。
        
- **毕业创作 (Creative Project)**
    
    - **ID 格式**: `CP_YYYY_A##` (例如: `CP_2026_A01`)
        
    - **文件路径**: `cohort_data/creative_projects/[ID_Name].md`
        
    - **核心属性**: `project_id`, `title`, `track`, `members` (链接到学生ID), `progress`, `feedback_log`
        
    - **描述**: 代表一个毕业创作项目，可以是个人项目或小组项目。
        
- **毕业论文 (Thesis)**
    
    - **ID 格式**: `T_YYYY_##` (例如: `T_2026_01`)
        
    - **文件路径**: `cohort_data/theses/[ID_Name].md`
        
    - **核心属性**: `thesis_id`, `title`, `author` (链接到学生ID), `progress`, `feedback_log`
        
    - **描述**: 代表一篇与学生一对一关联的毕业论文。
        

### 3.2 中央索引 (The Central Index)

- **文件**: `docs/cohort_registry.md`
    
- **作用**: 中央索引是系统的"数据库索引"，而非数据库本身。它不存储实体的详细内容（如反馈日志、心理分析等），只维护以下三项关键信息：
    
    1. **实体注册 (Registration)**: 记录系统中所有实体的存在及其唯一ID。
        
    2. **核心元数据 (Metadata)**: 存储每个实体最常被查询的核心信息（如姓名、标题、状态）。
        
    3. **关系链接 (Relations)**: 明确定义实体之间的关系（例如，`CP_2026_A01` 的 `members` 是 `S_2026_01` 和 `S_2026_02`）。
        
- **工作机制**: 任何需要全局信息的AI操作（如"生成进度报告"）都会首先读取此文件，构建一个内存中的关系图谱，然后再根据需要去访问`cohort_data/`目录下的具体实体文件。这种"索引与数据分离"的模式确保了系统的高效性和可扩展性。
    

### 3.3 实体关系图 (Entity-Relationship Diagram)

```
erDiagram
    STUDENT {
        string student_id PK
        string name
        string status
    }
    CREATIVE_PROJECT {
        string project_id PK
        string title
        string status
    }
    THESIS {
        string thesis_id PK
        string title
        string status
    }

    STUDENT ||--o{ CREATIVE_PROJECT : "is member of"
    STUDENT ||--|{ THESIS : "authors"
