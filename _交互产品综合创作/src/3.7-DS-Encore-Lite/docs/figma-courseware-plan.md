# Figma 课件制作详细计划
## 第二部分：单一真源的技术实现（可视化课件）

> 使用 MCP Talk-to-Figma Agent 协议化工作流

---

## 📋 总体策略

### 课件目标
- **教学内容**：W3C Design Tokens 规范、导出流程、自动化构建、CI/CD 门禁
- **视觉风格**：现代、技术感、清晰的信息层级
- **交互性**：支持原型演示关键工作流
- **复用性**：构建组件库，便于后续维护

### 设计系统规范
- **主色调**：科技蓝 (#2563EB) + 品牌绿 (#1ED760)
- **字体系统**：Inter (标题/正文) + JetBrains Mono (代码)
- **间距系统**：8pt 网格，基础单位 16px
- **圆角**：8px (卡片), 4px (按钮)

---

## 🎯 阶段一：基础设施搭建 (Foundation)

### Phase 1.1: 文档结构初始化

**目标**：创建 Figma 文档的基础页面结构

**使用 Agent 命令**：
```
/phase foundation-init intent="创建课件文档的基础页面结构"
/plan 目标="创建7个页面对应教学章节"
```

**预期 JSON 清单结构**：
```json
{
  "phase": "foundation-init",
  "planId": "setup-pages-001",
  "steps": [
    {
      "command": "get_document_info",
      "params": {}
    },
    {
      "comment": "创建主画板框架，每个小节一个 Frame"
    }
  ],
  "assertions": {
    "pre": ["document.accessible == true"],
    "post": ["frames.count >= 7"]
  }
}
```

**页面结构**：
1. **Cover Page** - 课程封面
2. **2.0 Overview** - 第二部分总览
3. **2.1 W3C Spec** - W3C 规范解读
4. **2.2 Export Flow** - Figma 导出流程
5. **2.3 Build Pipeline** - 构建流水线
6. **2.4 CI/CD Gates** - 门禁系统
7. **2.5 Schema** - JSON Schema
8. **2.6 Troubleshooting** - 问题排查

---

### Phase 1.2: Design Tokens 令牌系统

**目标**：建立课件的设计令牌系统（使用注解作为基建）

**使用 Agent 命令**：
```
/phase tokens-setup intent="建立课件设计令牌系统"
/plan 目标="创建颜色、字体、间距令牌注册表"
```

**令牌定义**（记录在文档根节点 annotation）：

> **📌 命名规范说明**：此处展示的是**导出后的 JSON 格式**（使用连字符）。但在 **Figma Variables 中创建时**，应使用**斜杠 `/`** 创建层级结构，例如 `color/primitive/blue/600`，导出后会自动转换为 `color.primitive.blue-600`。

```json
{
  "color": {
    "primitive": {
      "blue-600": "#2563EB",
      "green-400": "#1ED760",
      "gray-50": "#F9FAFB",
      "gray-800": "#1F2937",
      "white": "#FFFFFF"
    },
    "semantic": {
      "brand-primary": "{blue-600}",
      "accent": "{green-400}",
      "background-base": "{gray-50}",
      "text-primary": "{gray-800}",
      "code-background": "#1E1E1E"
    }
  },
  "spacing": {
    "base": 16,
    "xs": 4,
    "sm": 8,
    "md": 16,
    "lg": 24,
    "xl": 32,
    "2xl": 48
  },
  "radius": {
    "sm": 4,
    "md": 8,
    "lg": 12
  }
}
```

**预期 JSON 清单**：
```json
{
  "phase": "tokens-setup",
  "planId": "create-token-registry-001",
  "steps": [
    {
      "command": "get_document_info",
      "params": {}
    },
    {
      "command": "set_annotation",
      "params": {
        "nodeId": "<document-root-id>",
        "labelMarkdown": "## Design Token Registry\n\nThis annotation serves as the single source of truth for all design tokens used in this courseware.",
        "properties": [
          {
            "type": "token_registry",
            "value": "<上述 JSON 字符串>"
          }
        ]
      }
    }
  ],
  "assertions": {
    "pre": ["document.annotations.count >= 0"],
    "post": ["annotation.token_registry exists"]
  }
}
```

---

## 🎯 阶段二：组件库构建 (Component Library)

### Phase 2.1: 代码块组件 (Code Block Component)

**目标**：创建可复用的代码展示组件

**设计规格**：
- **尺寸**：宽度 800px，高度自适应
- **背景色**：`#1E1E1E`
- **内边距**：24px
- **圆角**：8px
- **字体**：JetBrains Mono, 14px, line-height 1.6
- **语法高亮**：使用不同颜色文本层模拟

**使用 Agent 命令**：
```
/phase component-code-block intent="创建代码块组件"
/plan 目标="构建带语法高亮的代码展示组件"
/dry-run
/commit
```

**预期 JSON 清单**：
```json
{
  "phase": "component-code-block",
  "planId": "build-code-component-001",
  "steps": [
    {
      "command": "create_frame",
      "params": {
        "name": "Component/Code Block",
        "x": 100,
        "y": 100,
        "width": 800,
        "height": 400,
        "layoutMode": "VERTICAL",
        "paddingTop": 24,
        "paddingRight": 24,
        "paddingBottom": 24,
        "paddingLeft": 24,
        "fillColor": {
          "r": 0.118,
          "g": 0.118,
          "b": 0.118,
          "a": 1
        },
        "itemSpacing": 8
      }
    },
    {
      "command": "set_corner_radius",
      "params": {
        "nodeId": "<code-frame-id>",
        "radius": 8
      }
    },
    {
      "command": "create_text",
      "params": {
        "name": "Code Content",
        "x": 124,
        "y": 124,
        "text": "// Example code placeholder\nconst tokens = require('./tokens.json');",
        "fontSize": 14,
        "fontWeight": 400,
        "fontColor": {
          "r": 0.878,
          "g": 0.878,
          "b": 0.878,
          "a": 1
        },
        "parentId": "<code-frame-id>"
      }
    },
    {
      "command": "set_focus",
      "params": {
        "nodeId": "<code-frame-id>"
      }
    }
  ],
  "assertions": {
    "pre": ["selection.count == 0"],
    "post": [
      "node(<code-frame-id>).type == 'FRAME'",
      "node(<code-frame-id>).cornerRadius == 8"
    ]
  }
}
```

---

### Phase 2.2: 流程卡片组件 (Process Card Component)

**目标**：创建工作流步骤卡片

**设计规格**：
- **尺寸**：360px × 240px
- **背景色**：白色，边框 1px `#E5E7EB`
- **内容**：图标 + 标题 + 描述
- **状态**：支持 Default / Hover / Active

**预期结构**：
```
Process Card [Frame]
├── Icon Area [Frame] - 48×48, 品牌色背景
│   └── Icon [Vector/Text] - 24×24
├── Title [Text] - Inter Bold 18px
└── Description [Text] - Inter Regular 14px, gray-600
```

---

### Phase 2.3: 注解框组件 (Callout Component)

**目标**：创建信息提示框（Info / Warning / Error / Success）

**变体定义**：
- **Info** (蓝色): 一般提示信息
- **Warning** (橙色): ⚠️ 警告信息
- **Error** (红色): ❌ 错误提示
- **Success** (绿色): ✅ 成功提示

**设计规格**：
- **布局**：Auto-layout, HORIZONTAL
- **内边距**：16px
- **图标区域**：24×24
- **文本区域**：Fill container
- **圆角**：4px

---

## 🎯 阶段三：内容页面制作 (Content Pages)

### Phase 3.1: 封面页 (Cover Page)

**布局**：
```
Cover Frame [1920×1080]
├── Background Gradient [Fill]
├── Title [Text] - "第二部分：单一真源的技术实现"
├── Subtitle [Text] - "W3C Design Tokens • Build Pipeline • CI/CD"
└── Logo Area [Frame]
```

**使用 Agent 命令**：
```
/phase content-cover intent="制作课程封面"
/plan 目标="创建标题、副标题和装饰元素"
```

---

### Phase 3.2: 总览页 (2.0 Overview)

**内容要素**：
1. **课程时长指示器**：120 分钟
2. **五大模块卡片**：
   - 2.1 W3C 规范 (15min)
   - 2.2 Figma 导出 (30min)
   - 2.3 构建流水线 (45min)
   - 2.4 CI/CD 门禁 (20min)
   - 2.5 Schema 定义 (10min)
3. **学习路径连线**：显示依赖关系
4. **检查清单摘要**：课前准备 4 项

**视觉结构**：
```
Overview Frame [1920×1080]
├── Header [Frame] - 标题 + 时长
├── Timeline [Frame] - 横向时间轴
└── Module Cards Grid [Frame]
    ├── Card: 2.1 Spec
    ├── Card: 2.2 Export
    ├── Card: 2.3 Build
    ├── Card: 2.4 CI/CD
    └── Card: 2.5 Schema
```

---

### Phase 3.3: 规范解读页 (2.1 W3C Spec)

**关键可视化内容**：

1. **JSON 结构树状图**：
```
tokens.json
├── meta
│   ├── version
│   ├── updated
│   └── author
└── color
    ├── primitive
    │   └── green-400
    └── semantic
        └── interactive
            └── primary
```

2. **代币字段详解卡片**：
   - `$type`: 类型约束
   - `$value`: 实际值
   - `$description`: 文档说明
   - `$extensions`: 扩展字段

3. **三层架构示意图**：
   - Primitive Layer (原始值)
   - Semantic Layer (语义层)
   - Component Layer (组件层)

**使用 Agent 命令**：
```
/phase content-spec intent="制作 W3C 规范解读页"
/plan 目标="创建 JSON 结构树和字段详解卡片"
```

**预期清单（部分）**：
```json
{
  "phase": "content-spec",
  "planId": "build-spec-page-001",
  "steps": [
    {
      "command": "create_frame",
      "params": {
        "name": "2.1 W3C Spec Page",
        "x": 0,
        "y": 0,
        "width": 1920,
        "height": 1080,
        "layoutMode": "VERTICAL",
        "fillColor": {"r": 0.98, "g": 0.98, "b": 0.99, "a": 1}
      }
    },
    {
      "command": "create_text",
      "params": {
        "name": "Page Title",
        "x": 80,
        "y": 60,
        "text": "2.1 W3C Design Tokens 规范解读",
        "fontSize": 48,
        "fontWeight": 700,
        "parentId": "<page-frame-id>"
      }
    },
    {
      "comment": "创建 JSON 结构树状图框架"
    },
    {
      "command": "create_frame",
      "params": {
        "name": "JSON Structure Tree",
        "x": 80,
        "y": 180,
        "width": 800,
        "height": 600,
        "layoutMode": "VERTICAL",
        "itemSpacing": 16,
        "parentId": "<page-frame-id>"
      }
    }
  ]
}
```

---

### Phase 3.4: 导出流程页 (2.2 Export Flow)

**核心内容**：方案对比 + 分步指南

**布局方案**：

1. **方案对比表格**：
```
| 特性          | 方案 A: REST API | 方案 B: Figma Tokens 插件 |
|---------------|------------------|---------------------------|
| 适用场景      | 生产环境         | 教学/快速原型             |
| 自动化程度    | ⭐⭐⭐⭐⭐      | ⭐⭐⭐                   |
| 学习曲线      | 中等             | 低                        |
| 需要 Token    | ✅               | ❌                        |
```

2. **五步流程图**（使用连接器）：
```
Step 1: 安装插件
   ↓
Step 2: 创建 Variables
   ↓
Step 3: 运行插件
   ↓
Step 4: 验证导出
   ↓
Step 5: 补充字段
```

**使用 Agent 命令**：
```
/phase content-export intent="制作导出流程可视化"
/plan 目标="创建流程图和交互式步骤卡片"
```

**交互设计**：
- 使用 Figma Prototype 功能
- 点击每个步骤卡片展开详细说明
- 使用 `get_reactions` 获取现有原型链接（如有）
- 使用 `create_connections` 创建流程连线

---

### Phase 3.5: 构建流水线页 (2.3 Build Pipeline)

**核心架构图**：

```
[tokens.json] 
     ↓
[Style Dictionary]
     ↓
┌────┴────┬────────┬──────────┐
↓         ↓        ↓          ↓
CSS     Swift    XML       JSON
(Web)   (iOS)  (Android) (Flat)
```

**内容模块**：

1. **工具链图标矩阵**：
   - Node.js logo
   - Style Dictionary logo
   - Platform icons (CSS/Swift/Android)

2. **配置文件代码块**：
   - `style-dictionary.config.json` (主配置)
   - `build-tokens.js` (自定义转换器)

3. **产物对比展示**：
   - 左侧：tokens.json 片段
   - 右侧：生成的 CSS/Swift/XML 对应片段
   - 使用箭头连接对应关系

**使用 Agent 命令**：
```
/phase content-pipeline intent="制作构建流水线架构图"
/plan 目标="创建数据流图和产物对比展示"
```

---

### Phase 3.6: CI/CD 门禁页 (2.4 CI/CD Gates)

**GitHub Actions 工作流可视化**：

**泳道图 (Swimlane Diagram)**：
```
┌─────────────────────────────────────────────────┐
│ Trigger: PR on tokens/tokens.json              │
└─────────────────────────────────────────────────┘
         ↓
┌─────────────────────────────────────────────────┐
│ Gate 1: JSON Schema Validation                  │
│ Tool: ajv-cli                                   │
│ ✅ Pass → Continue  |  ❌ Fail → Block PR       │
└─────────────────────────────────────────────────┘
         ↓
┌─────────────────────────────────────────────────┐
│ Gate 2: Semantic Versioning Check               │
│ Regex: ^[0-9]+\.[0-9]+\.[0-9]+$               │
└─────────────────────────────────────────────────┘
         ↓
┌─────────────────────────────────────────────────┐
│ Gate 3: Build Verification                      │
│ Command: npm run build:tokens                   │
└─────────────────────────────────────────────────┘
         ↓
┌─────────────────────────────────────────────────┐
│ Gate 4: Contrast Compliance (WCAG AA)           │
│ Ratio: ≥ 4.5:1                                  │
└─────────────────────────────────────────────────┘
         ↓
┌─────────────────────────────────────────────────┐
│ Gate 5: Breaking Change Detection               │
│ Tool: jsondiffpatch                             │
└─────────────────────────────────────────────────┘
         ↓
    [Merge ✅]
```

**代码块示例**：
- 完整的 `.github/workflows/tokens-ci.yml`
- `detect-breaking.js` 关键逻辑
- `check-contrast.js` WCAG 计算函数

---

### Phase 3.7: Schema 定义页 (2.5 JSON Schema)

**内容重点**：

1. **Schema 结构可视化**：
   - Required fields: `meta`, `meta.version`
   - Optional fields: `color`, `spacing`, `typography`
   - Token definition structure

2. **验证流程演示**：
```
tokens.json → ajv validate → ✅ Valid / ❌ Invalid + Error Details
```

3. **常见错误示例**：
   - 缺少 `$type` 字段
   - 版本号格式错误
   - 无效的颜色值格式

---

### Phase 3.8: 问题排查页 (2.6 Troubleshooting)

**卡片式布局**：每个问题一个可折叠卡片

**卡片结构**：
```
Troubleshooting Card [Frame]
├── Header [Frame]
│   ├── Icon [❌/⚠️] 
│   └── Question [Text] - "Q1: Schema 验证报错..."
├── Reason [Frame] - 原因分析
├── Solution Steps [Frame] - 解决步骤（编号列表）
└── Code Example [Component: Code Block] - 示例代码
```

**五个问题卡片**：
- Q1: Schema 验证报错 (缺少 `$type`)
- Q2: Style Dictionary 构建失败 (无效引用)
- Q3: 对比度检查失败 (WCAG 不合规)
- Q4: 依赖安装错误
- Q5: Figma 插件导出格式错误

---

## 🎯 阶段四：交互原型 (Interactive Prototype)

### Phase 4.1: 页面导航原型

**目标**：创建页面间的导航流

**使用 Agent 命令**：
```
/phase prototype-nav intent="添加页面导航交互"
/plan 目标="为所有页面添加前进/后退按钮和原型链接"
```

**原型策略**：
1. 使用 `scan_nodes_by_types` 找到所有主画板
2. 使用 `get_reactions` 获取现有原型连接
3. 在每个画板底部创建导航按钮组件
4. 使用 `create_connections` 建立页面跳转连接

---

### Phase 4.2: 代码块展开/折叠

**交互行为**：
- 默认显示前 5 行代码
- 点击 "展开" 按钮显示完整代码
- 使用 Figma Variants 实现状态切换

---

## 📊 项目管理与质量控制

### 审计日志 (Audit Trail)

**所有关键操作必须记录在文档根节点的审计注解中**：

```json
{
  "audit_log": [
    {
      "timestamp": "2025-10-18T14:30:00Z",
      "planId": "setup-pages-001",
      "action": "create_frames",
      "user": "instructor",
      "result": "success",
      "metadata": {
        "frames_created": 8,
        "total_nodes": 156
      }
    }
  ]
}
```

**使用 Agent 命令记录**：
```
/audit 检查项="检查所有页面是否包含必需元素"
/commit
```

---

### 断言检查清单

**每个阶段完成后必须验证的断言**：

**阶段一（基础设施）**：
- [ ] `document.pages.count >= 8`
- [ ] `annotation.token_registry exists`
- [ ] `token_registry.color.primitive.count >= 5`

**阶段二（组件库）**：
- [ ] `component.code-block exists`
- [ ] `component.process-card exists`
- [ ] `component.callout exists`
- [ ] `all components have valid variants`

**阶段三（内容页面）**：
- [ ] `每个页面包含标题文本层`
- [ ] `所有代码块使用统一组件`
- [ ] `色彩符合 token 注册表定义`
- [ ] `对比度 >= 4.5:1 (WCAG AA)`

**阶段四（交互原型）**：
- [ ] `所有主画板包含导航按钮`
- [ ] `导航连接完整（无断链）`
- [ ] `交互状态明确标注`

---

## 🚀 执行示例：完整工作流

### 示例：制作 "2.3 构建流水线" 页面

**Step 1: 规划**
```
/phase content-pipeline-planning
/plan 目标="分析 2.3 节内容，确定需要的视觉元素"
```

**Step 2: 预演**
```
/dry-run
```
- Agent 检查：token_registry 是否存在
- Agent 检查：code-block 组件是否可用
- Agent 报告：需要创建 1 个主画板 + 3 个代码块 + 1 个架构图

**Step 3: 生成执行清单**
```
/commit
```

Agent 输出 JSON 清单：
```json
{
  "phase": "content-pipeline",
  "channel": "<channel-id>",
  "planId": "build-pipeline-page-001",
  "steps": [
    {
      "command": "create_frame",
      "params": {
        "name": "2.3 Build Pipeline Page",
        "x": 0,
        "y": 2160,
        "width": 1920,
        "height": 1080,
        "layoutMode": "VERTICAL",
        "paddingTop": 80,
        "paddingLeft": 80,
        "paddingRight": 80,
        "itemSpacing": 48,
        "fillColor": {"r": 0.98, "g": 0.98, "b": 0.99, "a": 1}
      }
    },
    {
      "command": "create_text",
      "params": {
        "name": "Page Title",
        "x": 80,
        "y": 80,
        "text": "2.3 构建自动化生成流水线",
        "fontSize": 48,
        "fontWeight": 700,
        "fontColor": {"r": 0.12, "g": 0.16, "b": 0.22, "a": 1},
        "parentId": "<page-frame-id>"
      }
    },
    {
      "command": "create_frame",
      "params": {
        "name": "Architecture Diagram Container",
        "x": 80,
        "y": 200,
        "width": 1760,
        "height": 400,
        "layoutMode": "HORIZONTAL",
        "primaryAxisAlignItems": "CENTER",
        "counterAxisAlignItems": "CENTER",
        "itemSpacing": 32,
        "parentId": "<page-frame-id>"
      }
    },
    {
      "comment": "创建数据流节点"
    },
    {
      "command": "create_frame",
      "params": {
        "name": "Node: tokens.json",
        "width": 200,
        "height": 120,
        "layoutMode": "VERTICAL",
        "primaryAxisAlignItems": "CENTER",
        "counterAxisAlignItems": "CENTER",
        "fillColor": {"r": 0.15, "g": 0.39, "b": 0.92, "a": 1},
        "parentId": "<diagram-container-id>"
      }
    },
    {
      "command": "set_corner_radius",
      "params": {
        "nodeId": "<node-tokens-id>",
        "radius": 8
      }
    },
    {
      "command": "create_text",
      "params": {
        "name": "Label",
        "text": "tokens.json",
        "fontSize": 18,
        "fontWeight": 600,
        "fontColor": {"r": 1, "g": 1, "b": 1, "a": 1},
        "parentId": "<node-tokens-id>"
      }
    },
    {
      "comment": "重复创建其他节点..."
    },
    {
      "command": "create_connections",
      "params": {
        "connections": [
          {
            "startNodeId": "<node-tokens-id>",
            "endNodeId": "<node-style-dict-id>",
            "text": "input"
          },
          {
            "startNodeId": "<node-style-dict-id>",
            "endNodeId": "<node-css-id>",
            "text": "build"
          }
        ]
      }
    },
    {
      "command": "set_focus",
      "params": {
        "nodeId": "<page-frame-id>"
      }
    }
  ],
  "assertions": {
    "pre": [
      "component.code-block exists",
      "annotation.token_registry exists"
    ],
    "post": [
      "node(<page-frame-id>).children.count >= 5",
      "connections.count == 4"
    ]
  },
  "metadata": {
    "section": "2.3",
    "estimated_time": "45min",
    "complexity": "high"
  }
}
```

**Step 4: 执行后验证**
```
/status
/audit 检查项="验证 2.3 页面完整性"
```

---

## 📋 最终交付物检查清单

### 文档结构
- [ ] 8 个完整页面（封面 + 7 个章节页）
- [ ] 所有页面尺寸统一 (1920×1080)
- [ ] 页面命名规范一致

### 设计系统
- [ ] Token 注册表完整且有效
- [ ] 至少 3 个可复用组件
- [ ] 所有颜色来自 token 定义
- [ ] 间距符合 8pt 网格

### 内容质量
- [ ] 所有代码块使用等宽字体
- [ ] JSON 示例格式正确
- [ ] 流程图逻辑清晰
- [ ] 文本无错别字

### 可访问性
- [ ] 所有文本对比度 ≥ 4.5:1
- [ ] 字体大小 ≥ 14px
- [ ] 关键信息不依赖颜色单独传达

### 交互原型
- [ ] 页面导航完整
- [ ] 无死链接
- [ ] 交互反馈明确

### 审计记录
- [ ] 所有 `/commit` 操作已记录
- [ ] 包含 planId 和时间戳
- [ ] 记录了所有 `/override` 决策

---

## 🔧 工具与资源

### 必需工具
- **Figma Desktop App** (推荐) 或 Web 版
- **MCP Talk-to-Figma Server** (运行中)
- **JSON Viewer** (验证生成的清单)

### 推荐插件
- **Figma Tokens** (用于导入 token 注册表)
- **Content Reel** (批量填充文本内容)
- **Unsplash** (获取装饰性图片)

### 外部资源
- W3C Design Tokens 规范官网
- Style Dictionary 文档
- WCAG 对比度检查工具

---

## 📞 支持与协作

### 遇到问题时
1. 运行 `/status` 检查当前状态
2. 查看审计日志定位错误
3. 使用 `/rollback` 撤销上一步操作
4. 咨询讲师或查阅文档

### 版本控制
- 每完成一个阶段提交一次 Figma 版本历史
- 命名规范：`v1.0-phase-1-foundation-complete`
- 重大变更前先复制文件备份

---

## 🎓 学习目标对照

完成此课件制作后，学生应能：

- ✅ **理解协议化工作流**：掌握使用 JSON 清单控制设计操作
- ✅ **实践设计系统思维**：建立令牌系统并一致应用
- ✅ **可视化复杂技术概念**：将代码、流程、架构转化为图形
- ✅ **应用可访问性标准**：确保对比度和可读性
- ✅ **构建可复用组件**：提高设计效率和一致性

---

**文档版本**: v1.0  
**最后更新**: 2025-10-18  
**维护者**: Design Systems Team

