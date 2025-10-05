# 7. Lesson-Weaver Agent Integration (Agent 集成架构)

**版本**: v2.0 (设计稿)  
**更新日期**: 2025-10-05  
**状态**: 📝 Design Phase

---

## 7.1 概述 (Overview)

本文档定义了 **Lesson-Weaver Agent v2.0** 的架构设计，核心目标是将 **Schema-Driven Architecture** 集成到 AI Agent 工作流中，实现从课程大纲到最终文档的完全自动化、智能化生成流程。

### 设计目标

1. **Schema 作为 Agent 的知识核心** - Agent 理解并遵循 Schema 定义
2. **智能数据验证** - 在生成前自动验证数据完整性
3. **自动错误修复** - 基于 Schema 提供智能修复建议
4. **完整的 AI 工作流** - 从大纲 → 数据 → 验证 → 文档的端到端自动化

---

## 7.2 当前架构分析 (Current Architecture Analysis)

### 7.2.1 Lesson-Weaver Agent v1.0 架构

**当前状态机**:
```
AWAITING_INPUT 
    ↓
AWAITING_PLAN_CONFIRM 
    ↓
GENERATING 
    ↓
AWAITING_REVIEW 
    ↓
TASK_COMPLETE
```

**当前职责模块**:
- **Input Parser**: 解析用户输入（数据目录 + 模板路径）
- **Plan Generator**: 生成文档生成计划
- **Document Generator**: 调用后端脚本生成文档
- **Interface & Feedback**: 用户交互和反馈

### 7.2.2 现有架构的优势

✅ **清晰的状态机设计** - 流程明确，易于理解  
✅ **职责分离** - 每个模块职责单一  
✅ **用户友好** - 交互式工作流，确认优先  
✅ **可追溯性** - 每个数据都可追溯到源文件

### 7.2.3 现有架构的局限性

⚠️ **缺少 Schema 集成** - 未引用 Schema 作为指令核心  
⚠️ **缺少数据验证环节** - 未在生成前验证数据  
⚠️ **缺少 AI 数据生成** - 仅支持手动编写的 YAML  
⚠️ **缺少智能错误修复** - 错误发生后只能人工修复  
⚠️ **缺少 Schema 感知** - Agent 不理解数据结构

---

## 7.3 Lesson-Weaver Agent v2.0 架构设计

### 7.3.1 核心设计理念

**Schema-First Agent Design (Schema 优先的 Agent 设计)**

```
┌─────────────────────────────────────────────────────────┐
│         Lesson-Weaver Agent v2.0 Architecture           │
│                                                          │
│  ┌────────────────────────────────────────────────┐    │
│  │  🧠 Knowledge Core (知识核心)                   │    │
│  │                                                  │    │
│  │  ┌──────────────────────────────────────────┐  │    │
│  │  │  Schema Definition (数据结构定义)        │  │    │
│  │  │  - 字段名称和类型                         │  │    │
│  │  │  - 必需/可选标记                          │  │    │
│  │  │  - 字段描述和示例                         │  │    │
│  │  │  - 嵌套结构规则                           │  │    │
│  │  └──────────────────────────────────────────┘  │    │
│  │                                                  │    │
│  │  ┌──────────────────────────────────────────┐  │    │
│  │  │  Validation Rules (验证规则)             │  │    │
│  │  │  - 必需字段列表                           │  │    │
│  │  │  - 类型约束                               │  │    │
│  │  │  - 结构完整性规则                         │  │    │
│  │  └──────────────────────────────────────────┘  │    │
│  │                                                  │    │
│  │  ┌──────────────────────────────────────────┐  │    │
│  │  │  Field Descriptions (字段说明)           │  │    │
│  │  │  - 每个字段的用途                         │  │    │
│  │  │  - 填写指南                               │  │    │
│  │  │  - 示例数据                               │  │    │
│  │  └──────────────────────────────────────────┘  │    │
│  └────────────────┬───────────────────────────────┘    │
│                   │                                      │
│                   ▼                                      │
│  ┌────────────────────────────────────────────────┐    │
│  │  🔄 Enhanced State Machine (增强状态机)        │    │
│  │                                                  │    │
│  │  1. AWAITING_INPUT                              │    │
│  │      ↓                                           │    │
│  │  2. SCHEMA_LOADING  ← 🆕 新增状态               │    │
│  │      ↓                                           │    │
│  │  3. MODE_SELECTION  ← 🆕 新增状态               │    │
│  │      ├─ Manual Mode (手动模式)                  │    │
│  │      └─ AI Mode (AI 生成模式)                   │    │
│  │      ↓                                           │    │
│  │  4. DATA_GENERATION ← 🆕 新增状态 (AI Mode)     │    │
│  │      ↓                                           │    │
│  │  5. DATA_VALIDATION ← 🆕 新增状态               │    │
│  │      ↓                                           │    │
│  │  6. ERROR_FIXING    ← 🆕 新增状态 (如有错误)    │    │
│  │      ↓                                           │    │
│  │  7. AWAITING_PLAN_CONFIRM                       │    │
│  │      ↓                                           │    │
│  │  8. GENERATING                                  │    │
│  │      ↓                                           │    │
│  │  9. AWAITING_REVIEW                             │    │
│  │      ↓                                           │    │
│  │  10. TASK_COMPLETE                              │    │
│  └────────────────────────────────────────────────┘    │
│                                                          │
│  ┌────────────────────────────────────────────────┐    │
│  │  🔧 Enhanced Modules (增强模块)                 │    │
│  │                                                  │    │
│  │  - Schema Loader (Schema 加载器)                │    │
│  │  - AI Data Generator (AI 数据生成器)            │    │
│  │  - Schema Validator (Schema 验证器)             │    │
│  │  - Error Fixer (错误修复器)                     │    │
│  │  - Document Generator (文档生成器)              │    │
│  └────────────────────────────────────────────────┘    │
└─────────────────────────────────────────────────────────┘
```

---

### 7.3.2 新增状态定义

#### **STATE: SCHEMA_LOADING**

**触发条件**: Agent 启动或用户提供 Schema 路径

**职责**:
1. 加载 `schemas/lesson_data_schema.yml`
2. 解析 Schema 结构
3. 提取验证规则
4. 构建字段知识库

**Agent 行为**:
```
> "正在加载 Schema 定义..."
> "✅ Schema 加载成功！我已理解课程教案的数据结构。"
> "Schema 包含 45 个字段，其中 32 个必需字段。"
```

**状态转移**: → `MODE_SELECTION`

---

#### **STATE: MODE_SELECTION**

**触发条件**: Schema 加载完成

**职责**: 询问用户选择工作模式

**Agent 行为**:
```
> "请选择工作模式："
> "1. **手动模式** - 您已准备好 YAML 数据文件"
> "2. **AI 生成模式** - 我将根据课程大纲自动生成数据"
```

**状态转移**:
- 选择 1 → `DATA_VALIDATION`
- 选择 2 → `DATA_GENERATION`

---

#### **STATE: DATA_GENERATION** (AI Mode)

**触发条件**: 用户选择 AI 生成模式

**职责**:
1. 接收课程大纲（文本或文件）
2. 基于 Schema 生成 AI Prompt
3. 调用 AI 生成结构化 YAML 数据
4. 保存生成的数据文件

**Agent 行为**:
```
> "请提供课程大纲（文本或文件路径）："
> [用户输入大纲]
> "正在根据 Schema 生成数据..."
> "✅ 数据生成完成！已保存到 `data/lesson_01.yml`"
```

**AI Prompt 模板**:
```markdown
你是课程设计专家。请严格遵循以下 YAML Schema 生成课程教案数据：

```yaml
# [嵌入完整的 lesson_data_schema.yml]
```

课程大纲：
{user_outline}

要求：
1. 严格遵循 Schema 结构
2. 所有必需字段必须填写
3. 字段内容符合描述和示例
4. 输出纯 YAML 格式，无额外说明

请生成完整的教案数据。
```

**状态转移**: → `DATA_VALIDATION`

---

#### **STATE: DATA_VALIDATION**

**触发条件**: 数据准备完成（手动或 AI 生成）

**职责**:
1. 调用 `SchemaValidator` 验证数据
2. 检查必需字段完整性
3. 检查数据类型正确性
4. 检查嵌套结构完整性
5. 生成验证报告

**Agent 行为（验证通过）**:
```
> "正在验证数据..."
> "✅ 数据验证通过！所有必需字段完整，数据结构正确。"
```

**Agent 行为（验证失败）**:
```
> "❌ 数据验证失败，发现 3 个错误："
> "  1. 缺少必需字段: 'teaching_aims.knowledge_aim'"
> "  2. 缺少必需字段: 'main_teaching_segments'"
> "  3. 类型错误: 'lesson_number' 应为整数，实际为字符串"
> 
> "我可以尝试自动修复这些问题，是否继续？"
> "1. **自动修复** - 我将根据 Schema 补充缺失字段"
> "2. **手动修复** - 您自行修改数据文件"
> "3. **跳过验证** - 继续生成（不推荐）"
```

**状态转移**:
- 验证通过 → `AWAITING_PLAN_CONFIRM`
- 验证失败 + 选择自动修复 → `ERROR_FIXING`
- 验证失败 + 选择手动修复 → `AWAITING_INPUT` (重新加载)
- 验证失败 + 选择跳过 → `AWAITING_PLAN_CONFIRM` (带警告)

---

#### **STATE: ERROR_FIXING**

**触发条件**: 数据验证失败且用户选择自动修复

**职责**:
1. 分析验证错误
2. 根据 Schema 生成修复建议
3. 调用 AI 补充缺失字段
4. 保存修复后的数据
5. 重新验证

**Agent 行为**:
```
> "正在自动修复错误..."
> "  ✅ 已补充字段: 'teaching_aims.knowledge_aim'"
> "  ✅ 已补充字段: 'main_teaching_segments'"
> "  ✅ 已修正类型: 'lesson_number' → 1"
> 
> "正在重新验证..."
> "✅ 修复成功！数据现在完全符合 Schema。"
```

**AI 修复 Prompt 模板**:
```markdown
以下 YAML 数据缺少必需字段，请根据 Schema 补充：

Schema 定义：
```yaml
{schema_definition}
```

当前数据：
```yaml
{current_data}
```

缺失字段：
{missing_fields}

请补充缺失字段，保持原有数据不变，输出完整的 YAML。
```

**状态转移**: → `DATA_VALIDATION` (重新验证)

---

### 7.3.3 增强的模块设计

#### **Module: Schema Loader**

**职责**: 加载和解析 Schema 定义

**接口**:
```python
class SchemaLoader:
    def load_schema(self, schema_path: str) -> SchemaDefinition:
        """加载 Schema 定义"""
        
    def extract_field_descriptions(self, schema: dict) -> Dict[str, str]:
        """提取字段描述"""
        
    def extract_examples(self, schema: dict) -> Dict[str, Any]:
        """提取示例数据"""
```

---

#### **Module: AI Data Generator**

**职责**: 基于 Schema 和大纲生成结构化数据

**接口**:
```python
class AIDataGenerator:
    def __init__(self, schema: SchemaDefinition):
        self.schema = schema
        
    def generate_prompt(self, outline: str) -> str:
        """生成 AI Prompt，嵌入 Schema"""
        
    def call_ai(self, prompt: str) -> str:
        """调用 AI API 生成数据"""
        
    def parse_response(self, response: str) -> dict:
        """解析 AI 响应为 YAML 数据"""
        
    def save_data(self, data: dict, output_path: str):
        """保存生成的数据"""
```

**实现示例**:
```python
def generate_prompt(self, outline: str) -> str:
    """生成 AI Prompt"""
    schema_yaml = yaml.dump(self.schema.to_dict(), allow_unicode=True)
    
    prompt = f"""你是课程设计专家。请严格遵循以下 YAML Schema 生成课程教案数据：

```yaml
{schema_yaml}
```

课程大纲：
{outline}

要求：
1. 严格遵循 Schema 结构
2. 所有必需字段必须填写
3. 字段内容符合描述和示例
4. 输出纯 YAML 格式，无额外说明

请生成完整的教案数据。
"""
    return prompt
```

---

#### **Module: Error Fixer**

**职责**: 基于 Schema 自动修复数据错误

**接口**:
```python
class ErrorFixer:
    def __init__(self, schema: SchemaDefinition):
        self.schema = schema
        
    def analyze_errors(self, validation_result: ValidationResult) -> List[FixStrategy]:
        """分析错误并生成修复策略"""
        
    def fix_missing_fields(self, data: dict, missing_fields: List[str]) -> dict:
        """补充缺失字段"""
        
    def fix_type_errors(self, data: dict, type_errors: List[ValidationError]) -> dict:
        """修正类型错误"""
        
    def generate_fix_prompt(self, data: dict, errors: List[ValidationError]) -> str:
        """生成修复 Prompt"""
```

**修复策略**:
| 错误类型 | 修复策略 |
|---------|---------|
| 缺失必需字段 | 调用 AI 根据 Schema 补充 |
| 类型错误 | 自动转换（如 "1" → 1） |
| 嵌套结构错误 | 调用 AI 重构 |
| 额外字段 | 警告但保留（可能是用户自定义） |

---

### 7.3.4 完整工作流示例

#### **场景 1: AI 生成模式**

```
用户: "我想生成一份教案"

Agent (AWAITING_INPUT):
> "您好！我是 Docu-Weaver，专门帮助您生成课程教案。"
> "请稍等，我先加载 Schema 定义..."

Agent (SCHEMA_LOADING):
> "✅ Schema 加载成功！我已理解课程教案的数据结构。"
> "Schema 包含 45 个字段，其中 32 个必需字段。"

Agent (MODE_SELECTION):
> "请选择工作模式："
> "1. **手动模式** - 您已准备好 YAML 数据文件"
> "2. **AI 生成模式** - 我将根据课程大纲自动生成数据"

用户: "2"

Agent (DATA_GENERATION):
> "请提供课程大纲（文本或文件路径）："

用户: "第三章 字体识别\n1. 了解字体的基本分类\n2. 掌握常见字体的特征..."

Agent:
> "正在根据 Schema 生成数据..."
> "✅ 数据生成完成！已保存到 `data/lesson_03.yml`"

Agent (DATA_VALIDATION):
> "正在验证数据..."
> "✅ 数据验证通过！所有必需字段完整，数据结构正确。"

Agent (AWAITING_PLAN_CONFIRM):
> "数据准备完成！我将生成 1 份教案文档。"
> "是否继续？"

用户: "是"

Agent (GENERATING):
> "正在生成文档..."
> "✅ 文档生成成功！已保存到 `output/lesson_03.docx`"

Agent (AWAITING_REVIEW):
> "文档已生成，请查看。任务完成！"

Agent (TASK_COMPLETE):
> "感谢使用 Docu-Weaver！"
```

---

#### **场景 2: 验证失败 + 自动修复**

```
Agent (DATA_VALIDATION):
> "正在验证数据..."
> "❌ 数据验证失败，发现 3 个错误："
> "  1. 缺少必需字段: 'teaching_aims.knowledge_aim'"
> "  2. 缺少必需字段: 'main_teaching_segments'"
> "  3. 类型错误: 'lesson_number' 应为整数"
> 
> "我可以尝试自动修复这些问题，是否继续？"
> "1. **自动修复**"
> "2. **手动修复**"
> "3. **跳过验证**"

用户: "1"

Agent (ERROR_FIXING):
> "正在自动修复错误..."
> "  ✅ 已补充字段: 'teaching_aims.knowledge_aim'"
> "  ✅ 已补充字段: 'main_teaching_segments'"
> "  ✅ 已修正类型: 'lesson_number' → 3"
> 
> "正在重新验证..."
> "✅ 修复成功！数据现在完全符合 Schema。"

Agent (AWAITING_PLAN_CONFIRM):
> "数据准备完成！我将生成 1 份教案文档。"
> "是否继续？"
```

---

## 7.4 技术实现路线图

### Phase 1: Schema 集成基础 (v1.5.0)

**目标**: 将 Schema 集成到现有 Agent 中

**任务**:
- [ ] 添加 `SCHEMA_LOADING` 状态
- [ ] 实现 `SchemaLoader` 模块
- [ ] Agent 启动时自动加载 Schema
- [ ] 在 `AWAITING_INPUT` 后插入 Schema 加载环节

**预计时间**: 2-3 小时

---

### Phase 2: 数据验证集成 (v1.5.0)

**目标**: 在生成前自动验证数据

**任务**:
- [ ] 添加 `DATA_VALIDATION` 状态
- [ ] 集成 `SchemaValidator`
- [ ] 在 `GENERATING` 前插入验证环节
- [ ] 显示验证结果

**预计时间**: 2-3 小时

---

### Phase 3: AI 数据生成 (v2.0.0)

**目标**: 支持 AI 自动生成数据

**任务**:
- [ ] 添加 `MODE_SELECTION` 状态
- [ ] 添加 `DATA_GENERATION` 状态
- [ ] 实现 `AIDataGenerator` 模块
- [ ] 实现 Prompt 模板生成
- [ ] 集成 AI API（OpenAI/Claude）

**预计时间**: 4-6 小时

---

### Phase 4: 智能错误修复 (v2.0.0)

**目标**: 自动修复数据错误

**任务**:
- [ ] 添加 `ERROR_FIXING` 状态
- [ ] 实现 `ErrorFixer` 模块
- [ ] 实现修复策略
- [ ] 实现修复 Prompt 生成
- [ ] 集成 AI API 进行修复

**预计时间**: 3-4 小时

---

### Phase 5: 完整测试和文档 (v2.0.0)

**任务**:
- [ ] 端到端测试
- [ ] 更新 Agent 文档
- [ ] 编写使用示例
- [ ] 性能优化

**预计时间**: 2-3 小时

---

## 7.5 设计决策记录

### Decision 1: Schema 作为 Agent 的知识核心

**决策**: 将 Schema 作为 Agent 的"知识库"，而非仅仅是验证工具

**理由**:
- ✅ Agent 理解数据结构，能提供更智能的帮助
- ✅ 基于 Schema 生成 AI Prompt，确保输出结构化
- ✅ 基于 Schema 提供错误修复建议
- ✅ 统一的数据契约，AI 和验证器使用相同定义

**影响**: Agent 启动时间略微增加（~100ms），但用户体验大幅提升

---

### Decision 2: 支持手动和 AI 两种模式

**决策**: 不强制使用 AI 生成，保留手动编写数据的选项

**理由**:
- ✅ 向后兼容：现有用户可以继续使用手动模式
- ✅ 灵活性：用户可以根据需求选择
- ✅ 渐进式采用：用户可以先尝试手动模式，再尝试 AI 模式
- ✅ 降低依赖：不依赖外部 AI API

**影响**: 增加一个状态（MODE_SELECTION），但提升了灵活性

---

### Decision 3: 自动修复而非仅报告错误

**决策**: 提供自动修复功能，而非仅报告错误让用户手动修复

**理由**:
- ✅ 用户体验：减少用户手动修复的工作量
- ✅ 智能化：利用 AI 能力自动补充缺失字段
- ✅ 快速迭代：修复后立即重新验证，无需人工干预
- ✅ 学习机会：用户可以查看修复后的数据，学习正确格式

**影响**: 增加 AI API 调用次数，但大幅提升用户体验

---

## 7.6 性能和成本考量

### 性能指标

| 操作 | 目标性能 | 说明 |
|------|---------|------|
| Schema 加载 | < 100ms | 启动时一次性加载 |
| AI 数据生成 | < 30s | 取决于 AI API 响应时间 |
| 数据验证 | < 50ms | 使用缓存的 Schema 和规则 |
| 错误修复 | < 20s | 取决于 AI API 响应时间 |

### 成本估算（AI API）

**假设**: 使用 OpenAI GPT-4 API

| 操作 | Token 消耗 | 成本（USD） |
|------|-----------|------------|
| 数据生成 | ~3000 tokens | ~$0.09 |
| 错误修复 | ~1500 tokens | ~$0.045 |
| 单次完整流程 | ~4500 tokens | ~$0.135 |

**成本优化策略**:
1. 使用更便宜的模型（如 GPT-3.5）进行简单任务
2. 缓存常见的 Prompt 模板
3. 批量处理多个文档
4. 提供本地模式（不使用 AI API）

---

## 7.7 安全和隐私考量

### 数据安全

1. **Schema 安全**
   - Schema 文件本地存储，不上传到云端
   - 用户可以自定义 Schema

2. **数据隐私**
   - 用户数据仅在本地处理
   - AI API 调用时，仅发送必要的数据
   - 不存储用户数据到云端

3. **API 密钥管理**
   - API 密钥存储在本地配置文件
   - 支持环境变量配置
   - 不在代码中硬编码

### 错误处理

1. **AI API 失败**
   - 降级到手动模式
   - 提供清晰的错误信息
   - 保存中间结果，避免数据丢失

2. **验证失败**
   - 提供详细的错误报告
   - 提供修复建议
   - 允许跳过验证（带警告）

---

## 7.8 用户体验设计

### 交互原则

1. **透明性** - 清楚告知用户当前状态和下一步
2. **确认优先** - 重要操作前必须确认
3. **智能建议** - 基于 Schema 提供智能建议
4. **错误友好** - 错误信息清晰，提供修复路径
5. **渐进式披露** - 高级功能不干扰基础用户

### 交互示例

**良好的错误信息**:
```
❌ 数据验证失败，发现 3 个错误：

1. 缺少必需字段: 'teaching_aims.knowledge_aim'
   💡 建议：这是教学目标中的知识目标，描述学生应掌握的知识点
   
2. 缺少必需字段: 'main_teaching_segments'
   💡 建议：这是主要教学环节列表，至少包含 3 个环节
   
3. 类型错误: 'lesson_number' 应为整数，实际为字符串 "1"
   💡 建议：将 "1" 改为 1（去掉引号）

我可以尝试自动修复这些问题，是否继续？
```

---

## 7.9 测试策略

### 单元测试

**测试模块**:
- `SchemaLoader` - Schema 加载和解析
- `AIDataGenerator` - Prompt 生成和 AI 调用
- `ErrorFixer` - 错误分析和修复策略

**测试用例**:
- Schema 加载成功/失败
- Prompt 模板生成正确性
- AI 响应解析正确性
- 错误修复策略正确性

---

### 集成测试

**测试场景**:
1. 完整的 AI 生成流程（大纲 → 数据 → 验证 → 文档）
2. 验证失败 + 自动修复流程
3. 手动模式流程
4. 降级机制（AI API 失败）

---

### 端到端测试

**测试场景**:
1. 用户从零开始生成教案（AI 模式）
2. 用户使用现有数据生成教案（手动模式）
3. 用户修复验证错误
4. 批量生成多份教案

---

## 7.10 相关文档

- [Schema-Driven Architecture](6-schema-driven-architecture.md)
- [SchemaValidator Design](schema-validator-design.md)
- [Lesson-Weaver Agent v1.0](../../agents/lesson-weaver.md)
- [README v1.4.0](../../README.md)
- [CHANGELOG v1.4.0](../../CHANGELOG.md)

---

## 7.11 附录：Agent 指令模板（v2.0）

**完整的 Agent 指令文档**: 见 `agents/lesson-weaver-v2.md`（待创建）

**核心改进**:
1. ✅ 添加 `SCHEMA_LOADING` 状态
2. ✅ 添加 `MODE_SELECTION` 状态
3. ✅ 添加 `DATA_GENERATION` 状态
4. ✅ 添加 `DATA_VALIDATION` 状态
5. ✅ 添加 `ERROR_FIXING` 状态
6. ✅ 更新知识库（添加 Schema 知识）
7. ✅ 更新工作流引擎（新状态转移逻辑）

---

**文档状态**: ✅ Ready for Implementation  
**下一步**: 实现 Phase 1 (Schema 集成基础)

---

**变更历史**:
- 2025-10-05: v1.0 - 初始设计（Architect）
