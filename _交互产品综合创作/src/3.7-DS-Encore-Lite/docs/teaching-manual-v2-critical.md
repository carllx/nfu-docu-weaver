# Encore-Lite v2.0 批判性设计系统实践
## 从边界物体到协议治理：一个可演化的跨平台设计系统

---

**理论框架**
- **边界物体理论** (Susan Leigh Star): 设计代币作为跨角色、跨平台协作的边界物体
- **协议理论** (Alexander Galloway): 协议作为分布式控制与治理机制，而非文档宣言

**课程目标**
- 构建符合 **W3C Design Tokens 规范**的单一真源系统
- 实施 **RFC + RACI** 的协议治理机制
- 实现 **Web/iOS/Android** 三端代币同步
- 建立 **可访问性硬约束**（A11Y as a Gate）
- 部署 **自动化视觉回归测试**链路

**课程时长**: 2天（或 1周深度版）  
**目标学员**: 数字媒体艺术专业高年级 + 研究生  
**先修要求**: 完成 v1.0 基础课程 或 具备等价经验

---

## 📐 架构对比：从"教程级"到"系统级"

### v1.0 基础版 vs v2.0 批判性增强版

| 维度 | v1.0 基础版 | v2.0 批判性增强版 |
|------|------------|------------------|
| **真源模型** | 双真源（Figma + 手写CSS） | 单一真源（tokens.json → 自动生成） |
| **治理机制** | 文档宣言 | RFC + RACI + CI门禁 |
| **平台覆盖** | Web H5 | Web + iOS + Android |
| **可访问性** | 建议项 | 硬约束（CI失败门） |
| **代币层级** | 2层（Primitives → Semantics） | 3层（Primitives → Semantics → Component） |
| **测试策略** | 手动检查清单 | Storybook + Playwright/Percy 视觉回归 |
| **教学范式** | 工具使用 | 批判性工程 + 系统美学 |

---

## 第一部分：理论导入与批判性思维 (60分钟)

### 1.1 核心悖论的揭示 (20分钟)

**讲师开场：**
> "在上一版本的课程中，我们构建了一个'看起来很完整'的设计系统。但今天，我们要做一件不舒服的事情——**拆解它，找出其中的悖论**。"

#### 悖论 1：宣称"唯一真源"，实施"双真源"

**案例展示：**
```
情境：设计师在 Figma 中更新了 green-400: #1ED760 → #1FE770
问题：
1. 开发者如何知道这个变更？（没有自动通知）
2. 如何确保 CSS 变量被同步更新？（靠记忆？靠文档？）
3. 如果遗漏更新，iOS 端的绿色与 Web 不一致，谁负责？

结论：双真源 = 双重失败点
```

**正确的架构：**
```
Figma Variables (设计工具)
          ↓ 导出
    tokens.json (唯一真源，版本控制)
          ↓ 自动生成（CI/CD）
  ├─ CSS Variables (Web)
  ├─ Colors.swift (iOS)
  └─ colors.xml (Android)

规则：禁止手写任何平台的代币值，一切通过生成
```

#### 悖论 2：宣称"协议治理"，缺少"权力结构"

**讲师引导讨论：**
> "如果我是开发者，我想把 `color-interactive-primary` 改成 `color-brand-primary`，我需要问谁的许可？答案是：**没人知道**。因为我们没有定义权力结构。"

**引入 RACI 矩阵：**

| 角色 | Responsible | Accountable | Consulted | Informed |
|------|-------------|-------------|-----------|----------|
| **设计师** | 提出代币变更提案 | - | 品牌团队 | 全体开发者 |
| **前端负责人** | - | 批准/拒绝提案 | 设计师、无障碍专员 | - |
| **无障碍专员** | 对比度审计 | - | - | 设计师 |
| **平台开发者** | 实施迁移脚本 | - | - | 产品经理 |

**讨论题：**
1. 在你们的团队中，谁有权"命名"一个语义代币？
2. 这种命名权是技术问题还是政治问题？

---

### 1.2 边界物体理论讲解 (20分钟)

**核心概念：**
> 边界物体（Boundary Object）是能够在不同社群中保持意义的人工制品，它既要"在地可用"（对每个角色有用），又要"跨域不变"（保持一致性）。

**设计代币作为边界物体的张力：**

```
          设计师视角              开发者视角              品牌经理视角
              ↓                      ↓                      ↓
    需要表达"意图"          需要可计算的值           需要品牌一致性
    (语义化命名)            (HSL/RGB/HEX)           (色彩规范符合性)
              ↓                      ↓                      ↓
                        tokens.json
                  (必须同时满足三方需求)
```

**失败案例分析：**
```
错误的代币设计：
{
  "color-1": "#1ED760"  // ❌ 对设计师无意义
}

过度语义化：
{
  "color-button-primary-hover-active-focus": "..."  // ❌ 对开发者过于复杂
}

正确的平衡：
{
  "primitive-green-400": "#1ED760",  // 满足开发者
  "color-interactive-primary": "primitive-green-400",  // 满足设计师
  "meta": {
    "brand-compliance": "Spotify Brand Guide v3.2"  // 满足品牌
  }
}
```

---

### 1.3 协议理论与权力拓扑 (20分钟)

**核心命题：协议即控制**

**Galloway 的协议定义：**
> 协议是一种分布式管理技术，通过规则而非中心命令实现控制。协议的权力不在于"谁下令"，而在于"谁定义规则"。

**课堂实验：设计一个破坏性变更的治理流程**

**情境设定：**
```
设计师提案：将所有 "primary" 重命名为 "accent"
影响范围：3个平台 × 50个组件 = 150处代码

问题：
1. 谁有权批准这个提案？（权力问题）
2. 如何评估影响？（技术问题）
3. 如何通知所有相关方？（沟通问题）
4. 如何确保迁移完成？（执行问题）
5. 如果有团队拒绝迁移怎么办？（冲突问题）
```

**分组讨论（15分钟）：**
- 4人一组，设计一套治理规则
- 包含：提案模板、审批流程、门禁条件、回滚策略
- 每组派代表展示（5分钟）

**讲师总结：**
> "你们刚才设计的，就是一个协议。协议的本质是**将权力编码为规则**，让系统在没有中心指挥的情况下运行。"

---

## 第二部分：单一真源的技术实现 (120分钟)

### 📋 课前准备检查清单（必须在第1天开始前完成）

**Figma 账号要求：**
- [ ] 已开通 Figma Education Plan（教师需提前批量申请）
- [ ] 已安装 "Figma Tokens" 插件（by Jan Six - 蓝色图标版本）
- [ ] 确认可以创建 Variables（在任意文件中测试创建一个 color variable）
- [ ] 已准备 Figma Access Token（在 Settings > Personal Access Tokens 生成）

**本地开发环境：**
- [ ] Node.js >= 18.0.0（运行 `node --version` 检查）
- [ ] npm >= 9.0.0（运行 `npm --version` 检查）
- [ ] Git 已配置用户名和邮箱（运行 `git config user.name` 检查）
- [ ] 代码编辑器已安装（推荐 VS Code）

**项目初始化：**
```bash
# 克隆课程模板仓库
git clone https://github.com/your-org/encore-lite-template
cd encore-lite-template

# 安装依赖
npm install

# 验证工具链
npm run validate:env
```

**备选方案（如果 Figma 插件不可用）：**
- 讲师将提供预导出的 `tokens.json` 模板
- 学生可以手动编辑 JSON 文件完成练习
- 重点转移到构建流程和 CI/CD 实践

---

### 2.1 W3C Design Tokens 规范解读 (15分钟)

**规范核心字段：**

```json
{
  "$type": "color",           // 代币类型（强类型约束）
  "$value": "#1ED760",        // 实际值
  "$description": "品牌主色，用于所有主要交互元素",  // 文档化
  "$extensions": {            // 扩展字段
    "org.spotify.brand": {
      "pantone": "376 C",
      "wcag-aa-min-background": "#FFFFFF"
    }
  }
}
```

**完整的 tokens.json 结构：**

```json
{
  "meta": {
    "version": "1.0.0",
    "updated": "2025-10-18T10:30:00Z",
    "author": "Design Systems Team",
    "license": "MIT"
  },
  
  "color": {
    "primitive": {
      "green-400": {
        "$type": "color",
        "$value": "#1ED760",
        "$description": "Spotify brand green"
      },
      "gray-800": {
        "$type": "color",
        "$value": "#121212"
      }
    },
    
    "semantic": {
      "background": {
        "base": {
          "$type": "color",
          "$value": "{color.primitive.white}",
          "$extensions": {
            "mode": {
              "light": "{color.primitive.white}",
              "dark": "{color.primitive.gray-800}"
            }
          }
        }
      },
      
      "interactive": {
        "primary": {
          "$type": "color",
          "$value": "{color.primitive.green-400}",
          "$description": "主要交互元素色",
          "$extensions": {
            "wcag": {
              "contrast-ratio": 4.8,
              "level": "AA"
            },
            "platforms": {
              "ios": "UIColor.systemGreen",
              "android": "@color/green_400"
            }
          }
        }
      }
    },
    
    "component": {
      "button": {
        "background": {
          "$type": "color",
          "$value": "{color.semantic.interactive.primary}",
          "$description": "按钮默认背景色"
        },
        "background-hover": {
          "$type": "color",
          "$value": "{color.primitive.green-500}"
        }
      }
    }
  },
  
  "spacing": {
    "primitive": {
      "base-unit": {
        "$type": "dimension",
        "$value": "16px"
      }
    },
    "semantic": {
      "s": {
        "$type": "dimension",
        "$value": "{spacing.primitive.base-unit} * 0.5"
      },
      "m": {
        "$type": "dimension",
        "$value": "{spacing.primitive.base-unit}"
      }
    }
  }
}
```

**📁 标准项目结构（重要：请在开始前理解这个结构）**

```
encore-lite-tokens/
├── tokens/
│   ├── tokens.json                # 【唯一真源】W3C Design Tokens
│   ├── tokens.json.old            # 用于破坏性变更检测
│   └── tokens.schema.json         # JSON Schema 验证规则
├── scripts/
│   ├── export-tokens.js           # 从 Figma API 导出
│   ├── build-tokens.js            # Style Dictionary 构建
│   ├── check-contrast.js          # 对比度检查（新增）
│   ├── detect-breaking.js         # 破坏性变更检测
│   └── generate-changelog.js      # 生成变更日志
├── dist/                          # 自动生成的产物（勿手动编辑）
│   ├── css/
│   │   ├── tokens.css
│   │   ├── tokens-light.css
│   │   └── tokens-dark.css
│   ├── ios/
│   │   └── DesignTokens.swift
│   ├── android/
│   │   └── colors.xml
│   └── json/
│       └── tokens-flat.json
├── style-dictionary.config.json   # Style Dictionary 配置
├── package.json                   # npm 脚本与依赖
└── README.md                      # 使用文档
```

**⚠️ 关键规则：**
1. **禁止直接编辑 `dist/` 目录下的任何文件**
2. **所有代币变更必须在 `tokens/tokens.json` 中进行**
3. **修改后必须运行 `npm run build:tokens` 生成产物**
4. **提交前必须运行 `npm run validate:schema` 验证**

---

### 2.2 从 Figma 导出到 tokens.json (30分钟)

**工具链选择：**

**方案 A：Figma REST API（推荐用于生产环境）**
```javascript
// scripts/export-tokens.js
const axios = require('axios');
const fs = require('fs');

async function exportTokens() {
  const fileKey = process.env.FIGMA_FILE_KEY;
  const token = process.env.FIGMA_ACCESS_TOKEN;
  
  const response = await axios.get(
    `https://api.figma.com/v1/files/${fileKey}/variables/local`,
    { headers: { 'X-Figma-Token': token } }
  );
  
  const variables = response.data.meta.variables;
  const tokens = transformToW3CFormat(variables);
  
  fs.writeFileSync(
    'tokens/tokens.json',
    JSON.stringify(tokens, null, 2)
  );
}

function transformToW3CFormat(variables) {
  // 转换逻辑
  return {
    meta: { version: "1.0.0" },
    color: {
      primitive: extractPrimitives(variables),
      semantic: extractSemantics(variables)
    }
  };
}
```

**方案 B：Figma Tokens 插件（推荐用于教学）**

> **💡 Figma Variables 命名规范核心指南**
>
> **在 Figma 中创建时：使用斜杠 `/`（推荐）**
> - ✅ `color/text/primary` → 创建层级文件夹
> - ✅ `spacing/xs` → 清晰的组织结构
> - ✅ `brand/primary` → 支持多层嵌套
>
> **导出到代码后：自动转换为合适格式**
> - JSON: `color.text.primary`
> - CSS: `--color-text-primary`
> - Swift: `colorTextPrimary`
>
> **为什么推荐斜杠？**
> 1. 自动创建可视化文件夹层级
> 2. 当代币数量超过 50+ 时易于管理
> 3. 符合 Figma 官方设计系统最佳实践
> 4. 支持多层语义嵌套（color/text/primary/hover）
>
> **什么时候可以用连字符？**
> - 小型项目（代币少于 30 个）
> - 不需要层级管理的场景
> - 但需要注意：所有代币在同一层级，难以扩展

**步骤 1: 安装插件（3分钟）**
1. 打开 Figma，按 `Cmd/Ctrl + /` 搜索插件
2. 搜索 "Figma Tokens"，选择 **Jan Six** 开发的版本（蓝色图标）
3. 点击 "Save" 保存到插件列表

**步骤 2: 在 Figma 中创建 Variables（5分钟）**

> **🔤 重要：Figma Variables 命名规范**  
> 在 Figma 中创建 Variables 时，**推荐使用斜杠 `/`** 而不是连字符 `-`。  
> - ✅ 推荐：`color/primitive/green/400` → 在 Figma 中创建**层级文件夹结构**  
> - ⚠️ 不推荐：`color-primitive-green-400` → 扁平列表，难以管理  
> 
> **导出后自动转换**：  
> - Figma 中: `color/text/primary`  
> - JSON 导出: `color.text.primary`  
> - CSS 生成: `--color-text-primary`

1. 打开或创建一个 Figma 文件
2. 右侧面板点击 "Local Variables" 图标
3. 创建第一个 Color Collection: `Primitives`
   - 添加变量: `green/400` = `#1ED760` （使用斜杠创建层级）
   - 添加变量: `gray/800` = `#121212`
   - 添加变量: `white` = `#FFFFFF`
   - 添加变量: `black` = `#000000`
4. 创建第二个 Color Collection: `Semantics`
   - 添加变量: `interactive/primary` = `{Primitives/green/400}` (使用 Alias)
   - 添加变量: `background/base` = `{Primitives/white}`
   - 添加变量: `text/primary` = `{Primitives/black}`

**Figma 中的显示效果**：
```
Semantics Collection
📁 interactive/
   ├─ primary
   └─ hover
📁 background/
   ├─ base
   └─ elevated
📁 text/
   ├─ primary
   └─ secondary
```

**步骤 3: 运行 Figma Tokens 插件（7分钟）**
1. 按 `Cmd/Ctrl + /`，运行 "Figma Tokens"
2. 在插件面板中点击 "Settings" 图标
3. 配置导出格式：
   - Format: **W3C Design Tokens (DTCG)**
   - Include: ✅ Variables, ✅ Styles
   - Naming: **Use variable names as-is**
4. 点击 "Export" 标签
5. 点击 "Export Tokens" 按钮
6. 选择保存位置: `tokens/tokens.json`

**步骤 4: 验证导出结果（5分钟）**
```bash
# 检查文件是否生成
ls -la tokens/tokens.json

# 检查 JSON 格式是否正确
cat tokens/tokens.json | jq '.'

# 检查是否包含必需字段
cat tokens/tokens.json | jq '.meta.version'
# 应输出: "1.0.0" (或类似版本号)

# 检查 color.primitive 是否存在
cat tokens/tokens.json | jq '.color.primitive."green-400"'
# 应输出代币定义
```

**步骤 5: 手动补充字段（10分钟）**

导出的 JSON 可能缺少一些字段，需要手动添加：

```json
{
  "meta": {
    "version": "1.0.0",
    "updated": "2025-10-18T10:30:00Z",    // 手动添加
    "author": "Design Systems Team",      // 手动添加
    "license": "MIT"                      // 手动添加
  },
  "color": {
    "primitive": {
      "green-400": {
        "$type": "color",
        "$value": "#1ED760",
        "$description": "Spotify brand green - primary brand color"  // 手动添加
      }
    },
    "semantic": {
      "interactive": {
        "primary": {
          "$type": "color",
          "$value": "{color.primitive.green-400}",
          "$description": "主要交互元素色",    // 手动添加
          "$extensions": {                    // 手动添加整个扩展块
            "wcag": {
              "contrast-ratio": 4.8,
              "level": "AA"
            },
            "platforms": {
              "ios": "UIColor.systemGreen",
              "android": "@color/green_400"
            }
          }
        }
      }
    }
  }
}
```

**🎯 检查点（所有学生必须通过）：**
- [ ] `tokens/tokens.json` 文件存在
- [ ] JSON 格式验证通过（运行 `npm run validate:schema`）
- [ ] 包含至少 4 个 primitive 代币
- [ ] 包含至少 2 个 semantic 代币
- [ ] 所有代币都有 `$type` 和 `$value` 字段
- [ ] **确认在 Figma 中使用了斜杠 `/` 创建层级结构**（检查 Variables 面板是否有文件夹）

---

### 2.3 构建自动化生成流水线 (45分钟)

**安装 Style Dictionary：**

```bash
npm install style-dictionary --save-dev
```

**配置文件：`style-dictionary.config.json`**

```json
{
  "source": ["tokens/tokens.json"],
  "platforms": {
    "css": {
      "transformGroup": "css",
      "buildPath": "dist/css/",
      "files": [
        {
          "destination": "tokens.css",
          "format": "css/variables",
          "options": {
            "showFileHeader": true,
            "outputReferences": true
          }
        }
      ]
    },
    
    "ios": {
      "transformGroup": "ios",
      "buildPath": "dist/ios/",
      "files": [
        {
          "destination": "Colors.swift",
          "format": "ios-swift/class.swift",
          "className": "StyleDictionaryColors"
        }
      ]
    },
    
    "android": {
      "transformGroup": "android",
      "buildPath": "dist/android/",
      "files": [
        {
          "destination": "colors.xml",
          "format": "android/resources"
        }
      ]
    },
    
    "json": {
      "transformGroup": "js",
      "buildPath": "dist/json/",
      "files": [
        {
          "destination": "tokens.json",
          "format": "json/flat"
        }
      ]
    }
  }
}
```

**自定义转换器（支持主题模式）：**

```javascript
// scripts/build-tokens.js
const StyleDictionary = require('style-dictionary');

// 自定义转换器：处理 mode 字段
StyleDictionary.registerTransform({
  name: 'mode/css',
  type: 'value',
  matcher: (token) => token.$extensions?.mode,
  transformer: (token, options) => {
    const mode = options.mode || 'light';
    return token.$extensions.mode[mode];
  }
});

// 构建函数
function buildTokens(mode) {
  const sd = StyleDictionary.extend({
    ...config,
    platforms: {
      css: {
        transforms: ['mode/css', 'name/cti/kebab'],
        ...config.platforms.css
      }
    }
  });
  
  sd.buildAllPlatforms();
}

// 为每个主题模式构建
['light', 'dark', 'high-contrast'].forEach(buildTokens);
```

**生成产物示例：**

**`dist/css/tokens.css`**
```css
:root {
  --color-primitive-green-400: #1ED760;
  --color-semantic-interactive-primary: var(--color-primitive-green-400);
  --color-component-button-background: var(--color-semantic-interactive-primary);
}

[data-theme="dark"] {
  --color-semantic-background-base: var(--color-primitive-gray-800);
  --color-semantic-text-primary: var(--color-primitive-white);
}
```

**`dist/ios/Colors.swift`**
```swift
import UIKit

public class StyleDictionaryColors {
    public static let colorPrimitiveGreen400 = UIColor(hex: 0x1ED760)
    public static let colorSemanticInteractivePrimary = colorPrimitiveGreen400
}
```

**`dist/android/colors.xml`**
```xml
<resources>
  <color name="color_primitive_green_400">#1ED760</color>
  <color name="color_semantic_interactive_primary">@color/color_primitive_green_400</color>
</resources>
```

---

### 2.4 CI/CD 门禁与版本校验 (20分钟)

**GitHub Actions 工作流：`.github/workflows/tokens-ci.yml`**

```yaml
name: Design Tokens CI

on:
  pull_request:
    paths:
      - 'tokens/tokens.json'
  push:
    branches: [main]

jobs:
  validate-tokens:
    runs-on: ubuntu-latest
    
    steps:
      - uses: actions/checkout@v3
      
      - name: Setup Node
        uses: actions/setup-node@v3
        with:
          node-version: '18'
      
      # 步骤 1: JSON Schema 验证
      - name: Validate JSON Schema
        run: |
          npm install -g ajv-cli
          ajv validate -s tokens/tokens.schema.json -d tokens/tokens.json
      
      # 步骤 2: 检查版本号规范
      - name: Validate SemVer
        run: |
          VERSION=$(jq -r '.meta.version' tokens/tokens.json)
          if ! [[ "$VERSION" =~ ^[0-9]+\.[0-9]+\.[0-9]+$ ]]; then
            echo "Invalid version: $VERSION"
            exit 1
          fi
      
      # 步骤 3: 构建产物
      - name: Build Tokens
        run: |
          npm ci
          npm run build:tokens
      
      # 步骤 4: 检查产物是否与源对齐
      - name: Verify Build Artifacts
        run: |
          git add dist/
          if ! git diff --cached --quiet; then
            echo "Generated files are not up to date!"
            git diff --cached
            exit 1
          fi
      
      # 步骤 5: 对比度检查
      - name: Contrast Check
        run: |
          npm run test:contrast
      
      # 步骤 6: 破坏性变更检测
      - name: Breaking Change Detection
        if: github.event_name == 'pull_request'
        run: |
          npm run detect:breaking
          
      # 步骤 7: 生成变更报告
      - name: Generate Change Report
        run: |
          npm run report:changes > TOKENS_CHANGELOG.md
      
      - name: Upload Report
        uses: actions/upload-artifact@v3
        with:
          name: change-report
          path: TOKENS_CHANGELOG.md
```

**破坏性变更检测脚本：`scripts/detect-breaking.js`**

```javascript
const fs = require('fs');
const jsondiffpatch = require('jsondiffpatch');

function detectBreakingChanges() {
  const oldTokens = JSON.parse(
    fs.readFileSync('tokens/tokens.json.old', 'utf8')
  );
  const newTokens = JSON.parse(
    fs.readFileSync('tokens/tokens.json', 'utf8')
  );
  
  const delta = jsondiffpatch.diff(oldTokens, newTokens);
  const breaking = [];
  
  // 检查删除的代币
  for (const [path, change] of Object.entries(delta)) {
    if (Array.isArray(change) && change.length === 3 && change[1] === 0) {
      breaking.push({
        type: 'DELETED',
        path: path,
        message: `Token "${path}" was deleted`
      });
    }
    
    // 检查重命名
    if (change._t === 'a') {
      breaking.push({
        type: 'RENAMED',
        path: path,
        message: `Token structure changed at "${path}"`
      });
    }
  }
  
  if (breaking.length > 0) {
    console.error('Breaking changes detected:');
    console.error(JSON.stringify(breaking, null, 2));
    
    // 检查是否有迁移指南
    if (!fs.existsSync('MIGRATION.md')) {
      console.error('MIGRATION.md is required for breaking changes!');
      process.exit(1);
    }
  }
  
  console.log('No breaking changes detected.');
}

detectBreakingChanges();
```

**完整的 package.json（包含所有必需脚本）：**

```json
{
  "name": "encore-lite-tokens",
  "version": "1.0.0",
  "description": "Design Tokens for Encore-Lite v2.0",
  "scripts": {
    "build:tokens": "node scripts/build-tokens.js",
    "test:contrast": "node scripts/check-contrast.js",
    "detect:breaking": "node scripts/detect-breaking.js",
    "report:changes": "node scripts/generate-changelog.js",
    "validate:schema": "ajv validate -s tokens/tokens.schema.json -d tokens/tokens.json",
    "validate:env": "node scripts/validate-environment.js",
    "prepare:old": "cp tokens/tokens.json tokens/tokens.json.old"
  },
  "devDependencies": {
    "style-dictionary": "^3.9.0",
    "jsondiffpatch": "^0.5.0",
    "ajv-cli": "^5.0.0",
    "axios": "^1.6.0"
  }
}
```

**新增脚本：`scripts/check-contrast.js`**

```javascript
const fs = require('fs');

// 简化的对比度计算函数
function hexToRgb(hex) {
  const result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex);
  return result ? {
    r: parseInt(result[1], 16),
    g: parseInt(result[2], 16),
    b: parseInt(result[3], 16)
  } : null;
}

function luminance(r, g, b) {
  const a = [r, g, b].map(v => {
    v /= 255;
    return v <= 0.03928 ? v / 12.92 : Math.pow((v + 0.055) / 1.055, 2.4);
  });
  return a[0] * 0.2126 + a[1] * 0.7152 + a[2] * 0.0722;
}

function contrastRatio(hex1, hex2) {
  const rgb1 = hexToRgb(hex1);
  const rgb2 = hexToRgb(hex2);
  
  const lum1 = luminance(rgb1.r, rgb1.g, rgb1.b);
  const lum2 = luminance(rgb2.r, rgb2.g, rgb2.b);
  
  const brightest = Math.max(lum1, lum2);
  const darkest = Math.min(lum1, lum2);
  
  return (brightest + 0.05) / (darkest + 0.05);
}

function extractColors(obj, pattern = '', prefix = '') {
  let results = [];
  for (let key in obj) {
    if (typeof obj[key] === 'object') {
      if (obj[key].$type === 'color') {
        if (pattern === '' || key.includes(pattern)) {
          results.push({
            name: prefix + key,
            value: obj[key].$value
          });
        }
      } else if (!obj[key].$type) {
        results = results.concat(
          extractColors(obj[key], pattern, prefix + key + '.')
        );
      }
    }
  }
  return results;
}

function checkContrast() {
  const tokens = JSON.parse(fs.readFileSync('tokens/tokens.json', 'utf8'));
  const failures = [];
  
  // 检查文本色与背景色的对比度
  const textColors = extractColors(tokens.color, 'text');
  const bgColors = extractColors(tokens.color, 'background');
  
  console.log('🔍 Checking contrast ratios...\n');
  
  textColors.forEach(text => {
    bgColors.forEach(bg => {
      // 跳过别名引用，只检查实际颜色值
      if (text.value.startsWith('{') || bg.value.startsWith('{')) {
        return;
      }
      
      const ratio = contrastRatio(text.value, bg.value);
      const status = ratio >= 4.5 ? '✅' : '❌';
      
      console.log(`${status} ${text.name} on ${bg.name}`);
      console.log(`   Ratio: ${ratio.toFixed(2)}:1 (${ratio >= 7 ? 'AAA' : ratio >= 4.5 ? 'AA' : 'FAIL'})`);
      
      if (ratio < 4.5) {
        failures.push({
          text: text.name,
          textColor: text.value,
          background: bg.name,
          backgroundColor: bg.value,
          ratio: ratio.toFixed(2),
          required: 4.5
        });
      }
    });
  });
  
  if (failures.length > 0) {
    console.error('\n❌ Contrast check failed:');
    console.error(JSON.stringify(failures, null, 2));
    console.error('\n💡 Tip: Use https://webaim.org/resources/contrastchecker/ to find compliant colors');
    process.exit(1);
  }
  
  console.log('\n✅ All contrast checks passed (WCAG AA compliant)');
}

checkContrast();
```

**新增脚本：`scripts/generate-changelog.js`**

```javascript
const fs = require('fs');
const jsondiffpatch = require('jsondiffpatch');

function generateChangelog() {
  if (!fs.existsSync('tokens/tokens.json.old')) {
    console.log('No previous version found. Skipping changelog generation.');
    return;
  }
  
  const oldTokens = JSON.parse(fs.readFileSync('tokens/tokens.json.old', 'utf8'));
  const newTokens = JSON.parse(fs.readFileSync('tokens/tokens.json', 'utf8'));
  
  const delta = jsondiffpatch.diff(oldTokens, newTokens);
  
  if (!delta) {
    console.log('No changes detected.');
    return;
  }
  
  const added = [];
  const modified = [];
  const deleted = [];
  
  // 简化的变更分析
  console.log('# Design Tokens Changelog\n');
  console.log(`## Version ${newTokens.meta.version}`);
  console.log(`Date: ${newTokens.meta.updated || new Date().toISOString()}\n`);
  
  console.log('### Changes\n');
  console.log('- See detailed diff for complete changes');
  console.log('\n### Migration Guide\n');
  console.log('Run `npm run build:tokens` to regenerate platform-specific tokens.\n');
}

generateChangelog();
```

**新增脚本：`scripts/validate-environment.js`**

```javascript
const { execSync } = require('child_process');
const fs = require('fs');

function checkCommand(cmd, requiredVersion = null) {
  try {
    const version = execSync(cmd, { encoding: 'utf8' }).trim();
    console.log(`✅ ${cmd}: ${version}`);
    return true;
  } catch (error) {
    console.error(`❌ ${cmd}: Not found`);
    return false;
  }
}

function validateEnvironment() {
  console.log('🔍 Validating development environment...\n');
  
  let allValid = true;
  
  // Check Node.js
  if (!checkCommand('node --version')) {
    console.error('   Please install Node.js >= 18.0.0');
    allValid = false;
  }
  
  // Check npm
  if (!checkCommand('npm --version')) {
    console.error('   Please install npm >= 9.0.0');
    allValid = false;
  }
  
  // Check Git
  if (!checkCommand('git --version')) {
    console.error('   Please install Git');
    allValid = false;
  }
  
  // Check required directories
  console.log('\n📁 Checking project structure...');
  const requiredDirs = ['tokens', 'scripts', 'dist'];
  requiredDirs.forEach(dir => {
    if (fs.existsSync(dir)) {
      console.log(`✅ ${dir}/ exists`);
    } else {
      console.log(`⚠️  ${dir}/ missing (will be created)`);
      fs.mkdirSync(dir, { recursive: true });
    }
  });
  
  if (allValid) {
    console.log('\n✅ Environment validation passed!');
  } else {
    console.error('\n❌ Environment validation failed. Please fix the issues above.');
    process.exit(1);
  }
}

validateEnvironment();
```

---

### 2.5 JSON Schema 定义（新增内容）

**创建 `tokens/tokens.schema.json`：**

```json
{
  "$schema": "http://json-schema.org/draft-07/schema#",
  "title": "W3C Design Tokens Schema",
  "description": "Schema for validating W3C Design Tokens Community Group format",
  "type": "object",
  "required": ["meta"],
  "properties": {
    "meta": {
      "type": "object",
      "required": ["version"],
      "properties": {
        "version": {
          "type": "string",
          "pattern": "^[0-9]+\\.[0-9]+\\.[0-9]+$",
          "description": "Semantic version number"
        },
        "updated": {
          "type": "string",
          "format": "date-time"
        },
        "author": {
          "type": "string"
        },
        "license": {
          "type": "string"
        }
      }
    },
    "color": {
      "$ref": "#/definitions/tokenGroup"
    },
    "spacing": {
      "$ref": "#/definitions/tokenGroup"
    },
    "typography": {
      "$ref": "#/definitions/tokenGroup"
    },
    "radius": {
      "$ref": "#/definitions/tokenGroup"
    }
  },
  "definitions": {
    "tokenGroup": {
      "type": "object",
      "additionalProperties": {
        "oneOf": [
          { "$ref": "#/definitions/token" },
          { "$ref": "#/definitions/tokenGroup" }
        ]
      }
    },
    "token": {
      "type": "object",
      "required": ["$type", "$value"],
      "properties": {
        "$type": {
          "enum": [
            "color",
            "dimension",
            "fontFamily",
            "fontWeight",
            "duration",
            "cubicBezier",
            "number"
          ]
        },
        "$value": {
          "oneOf": [
            { "type": "string" },
            { "type": "number" },
            { "type": "array" }
          ]
        },
        "$description": {
          "type": "string"
        },
        "$extensions": {
          "type": "object"
        }
      },
      "additionalProperties": false
    }
  }
}
```

---

### 2.6 常见问题排查（新增内容 - 10分钟）

**Q1: Schema 验证报错 `required property '$type' is missing`**

**原因：** tokens.json 中某个代币对象缺少 `$type` 字段

**解决步骤：**
1. 查看错误信息中的路径，例如：`color.primitive.green-400`
2. 打开 `tokens/tokens.json`，定位到该路径
3. 添加 `"$type": "color"` 字段

**错误示例：**
```json
{
  "color": {
    "primitive": {
      "green-400": {
        "$value": "#1ED760"  // ❌ 缺少 $type
      }
    }
  }
}
```

**正确示例：**
```json
{
  "color": {
    "primitive": {
      "green-400": {
        "$type": "color",    // ✅ 添加 $type
        "$value": "#1ED760"
      }
    }
  }
}
```

---

**Q2: Style Dictionary 构建报错 `Cannot read property 'value' of undefined`**

**原因：** 引用了不存在的代币，如 `"{color.primitive.green-500}"`

**解决步骤：**
1. 检查所有 `$value` 中使用 `{}` 的引用
2. 确保被引用的代币已定义
3. 检查拼写是否正确（注意大小写）
4. 使用 `jq` 查找所有引用：
   ```bash
   cat tokens/tokens.json | jq '.. | select(type == "string" and startswith("{"))'
   ```

---

**Q3: CI 检查失败 `Contrast ratio 3.8 < 4.5`**

**原因：** 某些文本色与背景色的对比度不满足 WCAG AA 标准

**解决步骤：**
1. 查看 CI 输出的具体失败项
2. 使用在线工具验证：https://webaim.org/resources/contrastchecker/
3. 调整颜色值，或选择以下策略之一：
   - **策略 A：** 调深文本色或调亮背景色
   - **策略 B：** 添加 `$extensions.wcag-override` 字段并提交 RFC 说明原因

**示例修复：**
```json
{
  "color": {
    "semantic": {
      "text": {
        "primary": {
          "$type": "color",
          "$value": "#000000",  // 从 #333333 改为 #000000 以提高对比度
          "$extensions": {
            "wcag": {
              "tested-against": "#FFFFFF",
              "ratio": 21.0,
              "level": "AAA"
            }
          }
        }
      }
    }
  }
}
```

---

**Q4: `npm run build:tokens` 报错 `Cannot find module 'style-dictionary'`**

**原因：** 依赖未安装

**解决：**
```bash
npm install
# 或强制重新安装
rm -rf node_modules package-lock.json
npm install
```

---

**Q5: Figma 插件导出的 JSON 结构不符合 W3C 规范**

**原因：** 插件版本或配置不正确

**解决：**
1. 确认使用的是 **Jan Six** 开发的 Figma Tokens 插件
2. 在插件设置中选择 **W3C Design Tokens (DTCG)** 格式
3. 如果仍有问题，使用讲师提供的模板手动编辑

---

## 第三部分：协议治理的组织实施 (60分钟)

### 3.1 RFC（Request for Comments）流程设计 (20分钟)

**RFC 模板：`.github/RFC_TEMPLATE.md`**

```markdown
# RFC-XXX: [简短标题]

- **提出日期:** YYYY-MM-DD
- **提出人:** @username
- **状态:** [Draft | Review | Approved | Rejected | Implemented]
- **影响范围:** [Web | iOS | Android | All]

## 问题陈述 (Problem Statement)
为什么需要这个变更？当前有什么问题？

## 提议方案 (Proposed Solution)
具体要做什么变更？

### 代币变更清单
```json
{
  "added": [
    "color.semantic.status.warning"
  ],
  "modified": [
    {
      "path": "color.semantic.interactive.primary",
      "old": "{color.primitive.green-400}",
      "new": "{color.primitive.green-500}"
    }
  ],
  "deleted": [],
  "renamed": []
}
```

## 影响评估 (Impact Assessment)

### 受影响组件
- [ ] Button
- [ ] SongRow
- [ ] ...

### 受影响平台
- [ ] Web (估计 X 小时)
- [ ] iOS (估计 Y 小时)
- [ ] Android (估计 Z 小时)

### 版本变更类型
- [ ] PATCH (v1.0.0 → v1.0.1)
- [ ] MINOR (v1.0.0 → v1.1.0)
- [ ] MAJOR (v1.0.0 → v2.0.0)

## 迁移计划 (Migration Plan)

### 自动化迁移脚本
```bash
# 提供可执行的迁移脚本
sed -i 's/--color-old/--color-new/g' **/*.css
```

### 手动迁移步骤
1. 步骤 1
2. 步骤 2

### 废弃时间表
- **废弃公告:** YYYY-MM-DD
- **迁移窗口:** 2个小版本 (v1.1.0 和 v1.2.0)
- **彻底移除:** v2.0.0

## 替代方案 (Alternatives Considered)
考虑过哪些其他方案？为什么不选它们？

## 验收标准 (Acceptance Criteria)
- [ ] 所有单元测试通过
- [ ] 视觉回归测试通过
- [ ] 对比度检查通过 (≥ 4.5:1)
- [ ] 文档已更新
- [ ] 变更日志已生成

## 相关方签署 (Sign-off)

| 角色 | 姓名 | 签署状态 | 日期 |
|------|------|---------|------|
| 提出者 (Responsible) | @username | ✅ | YYYY-MM-DD |
| 批准者 (Accountable) | @lead | ⏳ | - |
| 无障碍专员 (Consulted) | @a11y | ⏳ | - |
| 平台负责人 (Informed) | @ios-lead, @android-lead | ⏳ | - |
```

**课堂练习（15分钟）：**
- 为"新增 warning 色"编写一份完整的 RFC
- 小组评审，找出缺失的影响评估

---

### 3.2 RACI 矩阵与权限模型 (20分钟)

**完整的 RACI 矩阵：`governance/RACI.md`**

```markdown
# Encore-Lite 设计系统 RACI 矩阵

## 代币生命周期管理

| 活动 | 设计师 | 前端负责人 | iOS负责人 | Android负责人 | 无障碍专员 | 品牌经理 |
|------|-------|-----------|----------|--------------|----------|---------|
| **提出新代币** | R | C | C | C | C | C |
| **批准新代币** | - | A | - | - | I | I |
| **定义语义命名** | R | C | - | - | - | C |
| **对比度审计** | I | C | C | C | R/A | - |
| **导出 tokens.json** | R | C | - | - | - | - |
| **代码生成** | - | R/A | I | I | - | - |
| **平台实施** | I | R | R | R | - | - |
| **视觉回归测试** | C | R | - | - | - | - |
| **发布新版本** | I | A | I | I | I | I |

## 破坏性变更特殊流程

| 活动 | 设计师 | 前端负责人 | 平台负责人 | 产品经理 |
|------|-------|-----------|----------|---------|
| **提交 RFC** | R | C | C | C |
| **影响评估** | C | R | R | I |
| **批准决策** | I | C | C | A |
| **编写迁移脚本** | - | R | R | - |
| **通知相关方** | - | R | I | I |
| **验证迁移完成** | C | A | R | - |

## 权限级别定义

### Level 1: Contributor（贡献者）
- 权限：提交 PR，修改非核心代币
- 限制：无法合并，无法删除代币
- 审批：需 Level 2 审核

### Level 2: Maintainer（维护者）
- 权限：合并 PR，修改语义代币，批准 MINOR 变更
- 限制：无法进行 MAJOR 变更
- 审批：需 Level 3 审核破坏性变更

### Level 3: Owner（所有者）
- 权限：所有权限，批准 MAJOR 变更，设置治理规则
- 限制：需遵循 RFC 流程
- 审批：需产品委员会审核重大架构变更
```

**GitHub 分支保护规则设置：**

```yaml
# .github/branch-protection.yml
main:
  required_status_checks:
    - validate-tokens
    - contrast-check
    - breaking-change-detection
  
  required_pull_request_reviews:
    required_approving_review_count: 2
    dismiss_stale_reviews: true
    require_code_owner_reviews: true
    
  restrictions:
    users: []
    teams: ["design-system-maintainers"]
    
  enforce_admins: true
```

---

### 3.3 废弃策略与向后兼容 (20分钟)

**废弃生命周期：**

```
v1.0.0: 引入 color-interactive-primary
   ↓
v1.1.0: 新增 color-brand-primary，标记 color-interactive-primary 为 @deprecated
   ↓
v1.2.0: 在文档中再次警告，控制台输出弃用警告
   ↓
v2.0.0: 彻底移除 color-interactive-primary
```

**在 tokens.json 中标记废弃：**

```json
{
  "color": {
    "semantic": {
      "interactive": {
        "primary": {
          "$type": "color",
          "$value": "{color.primitive.green-400}",
          "$extensions": {
            "deprecated": {
              "version": "1.1.0",
              "reason": "Renamed to color.brand.primary for better semantics",
              "replacement": "color.brand.primary",
              "removal-version": "2.0.0"
            }
          }
        }
      },
      "brand": {
        "primary": {
          "$type": "color",
          "$value": "{color.primitive.green-400}"
        }
      }
    }
  }
}
```

**运行时弃用警告（CSS）：**

```css
/* dist/css/tokens-deprecated.css */
:root {
  /* @deprecated since v1.1.0, use --color-brand-primary instead */
  --color-interactive-primary: var(--color-brand-primary);
}

/* 在开发模式下注入警告样式 */
[data-env="development"] *[style*="--color-interactive-primary"] {
  outline: 2px dashed orange !important;
}

[data-env="development"] *[style*="--color-interactive-primary"]::after {
  content: "⚠️ Using deprecated token";
  position: absolute;
  background: orange;
  color: white;
  padding: 2px 4px;
  font-size: 10px;
}
```

**运行时弃用警告（JavaScript）：**

```javascript
// dist/js/tokens-with-warnings.js
const tokens = {
  color: {
    interactive: {
      get primary() {
        console.warn(
          'DEPRECATED: color.interactive.primary is deprecated since v1.1.0. ' +
          'Use color.brand.primary instead. ' +
          'This token will be removed in v2.0.0.'
        );
        return tokens.color.brand.primary;
      }
    },
    brand: {
      primary: '#1ED760'
    }
  }
};
```

---

## 第四部分：跨平台同步实验 (90分钟)

### 4.1 iOS SwiftUI 实现 (30分钟)

**生成的产物：`dist/ios/DesignTokens.swift`**

```swift
import SwiftUI

// MARK: - Primitive Tokens
extension Color {
    static let primitiveGreen400 = Color(hex: 0x1ED760)
    static let primitiveGray800 = Color(hex: 0x121212)
    static let primitiveWhite = Color(hex: 0xFFFFFF)
    static let primitiveBlack = Color(hex: 0x000000)
}

// MARK: - Semantic Tokens
extension Color {
    static let backgroundBase = Color.primitiveWhite
    static let textPrimary = Color.primitiveBlack
    static let interactivePrimary = Color.primitiveGreen400
}

// MARK: - Dark Mode Support
extension Color {
    static func adaptiveBackground() -> Color {
        Color(
            light: .primitiveWhite,
            dark: .primitiveGray800
        )
    }
    
    static func adaptiveText() -> Color {
        Color(
            light: .primitiveBlack,
            dark: .primitiveWhite
        )
    }
}

// MARK: - Spacing Tokens
extension CGFloat {
    static let spacingS: CGFloat = 8
    static let spacingM: CGFloat = 16
    static let spacingL: CGFloat = 24
}

// MARK: - Helper Extension
extension Color {
    init(hex: UInt, alpha: Double = 1.0) {
        self.init(
            .sRGB,
            red: Double((hex >> 16) & 0xFF) / 255,
            green: Double((hex >> 8) & 0xFF) / 255,
            blue: Double(hex & 0xFF) / 255,
            opacity: alpha
        )
    }
    
    init(light: Color, dark: Color) {
        self.init(UIColor { traitCollection in
            switch traitCollection.userInterfaceStyle {
            case .dark:
                return UIColor(dark)
            default:
                return UIColor(light)
            }
        })
    }
}
```

**SwiftUI 组件示例：`examples/ios/ButtonView.swift`**

```swift
import SwiftUI

struct EncoreButton: View {
    let title: String
    let action: () -> Void
    
    var body: some View {
        Button(action: action) {
            Text(title)
                .font(.system(size: 16))
                .padding(.spacingM)
                .background(Color.interactivePrimary)
                .foregroundColor(.primitiveWhite)
                .cornerRadius(.radiusFull)
        }
    }
}

struct SongRow: View {
    let title: String
    let artist: String
    let duration: String
    
    var body: some View {
        HStack(spacing: .spacingM) {
            Rectangle()
                .fill(Color.gray)
                .frame(width: 40, height: 40)
                .cornerRadius(.spacingS / 2)
            
            VStack(alignment: .leading, spacing: 4) {
                Text(title)
                    .font(.system(size: 16))
                    .foregroundColor(.textPrimary)
                
                Text(artist)
                    .font(.system(size: 12))
                    .foregroundColor(.textSecondary)
            }
            
            Spacer()
            
            Text(duration)
                .font(.system(size: 12))
                .foregroundColor(.textSecondary)
        }
        .padding(.horizontal, .spacingXL)
        .padding(.vertical, .spacingS)
    }
}

// 演示页面
struct ContentView: View {
    var body: some View {
        VStack {
            EncoreButton(title: "Play") {
                print("Playing...")
            }
            
            SongRow(
                title: "夜空中最亮的星",
                artist: "逃跑计划",
                duration: "4:35"
            )
        }
        .background(Color.adaptiveBackground())
    }
}
```

---

### 4.2 Android Jetpack Compose 实现 (30分钟)

**生成的产物：`dist/android/DesignTokens.kt`**

```kotlin
package com.example.encorelite.tokens

import androidx.compose.ui.graphics.Color
import androidx.compose.ui.unit.dp

// Primitive Tokens
object PrimitiveColors {
    val green400 = Color(0xFF1ED760)
    val gray800 = Color(0xFF121212)
    val white = Color(0xFFFFFFFF)
    val black = Color(0xFF000000)
}

// Semantic Tokens
object SemanticColors {
    val backgroundBase = PrimitiveColors.white
    val textPrimary = PrimitiveColors.black
    val interactivePrimary = PrimitiveColors.green400
}

// Dark Theme
object DarkSemanticColors {
    val backgroundBase = PrimitiveColors.gray800
    val textPrimary = PrimitiveColors.white
    val interactivePrimary = PrimitiveColors.green400  // 不变
}

// Spacing Tokens
object Spacing {
    val xs = 4.dp
    val s = 8.dp
    val m = 16.dp
    val l = 24.dp
    val xl = 32.dp
}

// Radius Tokens
object Radius {
    val s = 4.dp
    val m = 8.dp
    val full = 9999.dp
}
```

**Jetpack Compose 主题配置：`Theme.kt`**

```kotlin
import androidx.compose.foundation.isSystemInDarkTheme
import androidx.compose.material3.MaterialTheme
import androidx.compose.material3.darkColorScheme
import androidx.compose.material3.lightColorScheme
import androidx.compose.runtime.Composable

private val LightColorScheme = lightColorScheme(
    primary = SemanticColors.interactivePrimary,
    background = SemanticColors.backgroundBase,
    onBackground = SemanticColors.textPrimary,
    surface = SemanticColors.backgroundBase,
    onSurface = SemanticColors.textPrimary
)

private val DarkColorScheme = darkColorScheme(
    primary = DarkSemanticColors.interactivePrimary,
    background = DarkSemanticColors.backgroundBase,
    onBackground = DarkSemanticColors.textPrimary,
    surface = DarkSemanticColors.backgroundBase,
    onSurface = DarkSemanticColors.textPrimary
)

@Composable
fun EncoreLiteTheme(
    darkTheme: Boolean = isSystemInDarkTheme(),
    content: @Composable () -> Unit
) {
    val colorScheme = if (darkTheme) {
        DarkColorScheme
    } else {
        LightColorScheme
    }
    
    MaterialTheme(
        colorScheme = colorScheme,
        content = content
    )
}
```

**Compose 组件示例：`Components.kt`**

```kotlin
@Composable
fun EncoreButton(
    text: String,
    onClick: () -> Unit,
    modifier: Modifier = Modifier
) {
    Button(
        onClick = onClick,
        colors = ButtonDefaults.buttonColors(
            containerColor = SemanticColors.interactivePrimary,
            contentColor = PrimitiveColors.white
        ),
        shape = RoundedCornerShape(Radius.full),
        contentPadding = PaddingValues(Spacing.m),
        modifier = modifier
    ) {
        Text(text)
    }
}

@Composable
fun SongRow(
    title: String,
    artist: String,
    duration: String,
    modifier: Modifier = Modifier
) {
    Row(
        modifier = modifier
            .fillMaxWidth()
            .padding(horizontal = Spacing.xl, vertical = Spacing.s),
        verticalAlignment = Alignment.CenterVertically,
        horizontalArrangement = Arrangement.spacedBy(Spacing.m)
    ) {
        // 封面
        Box(
            modifier = Modifier
                .size(40.dp)
                .clip(RoundedCornerShape(Radius.s))
                .background(Color.Gray)
        )
        
        // 信息
        Column(
            modifier = Modifier.weight(1f),
            verticalArrangement = Arrangement.spacedBy(4.dp)
        ) {
            Text(
                text = title,
                fontSize = 16.sp,
                color = SemanticColors.textPrimary
            )
            Text(
                text = artist,
                fontSize = 12.sp,
                color = SemanticColors.textSecondary
            )
        }
        
        // 时长
        Text(
            text = duration,
            fontSize = 12.sp,
            color = SemanticColors.textSecondary
        )
    }
}
```

---

### 4.3 三端对照验证 (30分钟)

**课堂实验：三端截图对比**

**任务：**
1. 在 Web、iOS 模拟器、Android 模拟器中同时打开相同页面
2. 对三个按钮拍照截图
3. 使用 Figma 的"对比工具"检测颜色值
4. 验证三端的绿色是否完全一致

**自动化截图脚本：`scripts/screenshot-all-platforms.sh`**

```bash
#!/bin/bash

# Web 截图
npx playwright test --project=chromium --grep="Button Visual Test"

# iOS 截图
xcrun simctl boot "iPhone 14"
xcodebuild test \
  -scheme EncoreLite \
  -destination 'platform=iOS Simulator,name=iPhone 14' \
  -only-testing:EncoreLiteTests/SnapshotTests/testButtonAppearance

# Android 截图
./gradlew connectedAndroidTest \
  -Pandroid.testInstrumentationRunnerArguments.class=\
  com.example.encorelite.ButtonSnapshotTest

# 生成对比报告
node scripts/compare-screenshots.js
```

**对比报告生成：`scripts/compare-screenshots.js`**

```javascript
const Jimp = require('jimp');
const pixelmatch = require('pixelmatch');

async function compareScreenshots() {
  const web = await Jimp.read('screenshots/web-button.png');
  const ios = await Jimp.read('screenshots/ios-button.png');
  const android = await Jimp.read('screenshots/android-button.png');
  
  // 提取按钮区域的主色调
  const webColor = extractDominantColor(web);
  const iosColor = extractDominantColor(ios);
  const androidColor = extractDominantColor(android);
  
  console.log('Color Comparison:');
  console.log(`Web:     ${webColor.hex}`);
  console.log(`iOS:     ${iosColor.hex}`);
  console.log(`Android: ${androidColor.hex}`);
  
  const deltaIOS = colorDelta(webColor, iosColor);
  const deltaAndroid = colorDelta(webColor, androidColor);
  
  if (deltaIOS > 5 || deltaAndroid > 5) {
    console.error('❌ Color mismatch detected!');
    process.exit(1);
  }
  
  console.log('✅ All platforms match!');
}

function extractDominantColor(image) {
  // 简化：取中心像素颜色
  const { r, g, b } = Jimp.intToRGBA(image.getPixelColor(
    image.bitmap.width / 2,
    image.bitmap.height / 2
  ));
  
  return {
    r, g, b,
    hex: `#${r.toString(16).padStart(2, '0')}${g.toString(16).padStart(2, '0')}${b.toString(16).padStart(2, '0')}`
  };
}

function colorDelta(c1, c2) {
  return Math.sqrt(
    Math.pow(c1.r - c2.r, 2) +
    Math.pow(c1.g - c2.g, 2) +
    Math.pow(c1.b - c2.b, 2)
  );
}

compareScreenshots();
```

---

## 第五部分：可访问性作为硬约束 (60分钟)

### 5.1 High Contrast 主题设计 (20分钟)

**WCAG AAA 级别对比度矩阵：**

| 前景色 | 背景色 | 对比度 | 等级 |
|--------|--------|--------|------|
| #000000 | #FFFFFF | 21:1 | AAA ✅ |
| #1ED760 | #FFFFFF | 2.1:1 | ❌ 失败 |
| #1ED760 | #000000 | 10:1 | AAA ✅ |
| #121212 | #FFFFFF | 18:1 | AAA ✅ |

**High Contrast 代币定义：**

```json
{
  "color": {
    "semantic": {
      "background": {
        "base": {
          "$extensions": {
            "mode": {
              "light": "{color.primitive.white}",
              "dark": "{color.primitive.gray-800}",
              "high-contrast": "{color.primitive.black}"
            }
          }
        }
      },
      "text": {
        "primary": {
          "$extensions": {
            "mode": {
              "light": "{color.primitive.black}",
              "dark": "{color.primitive.white}",
              "high-contrast": "{color.primitive.white}"
            },
            "wcag": {
              "high-contrast-ratio": 21.0,
              "level": "AAA"
            }
          }
        }
      },
      "interactive": {
        "primary": {
          "$extensions": {
            "mode": {
              "light": "{color.primitive.green-400}",
              "dark": "{color.primitive.green-400}",
              "high-contrast": "{color.primitive.yellow-300}"  // 黄色在黑底上对比度更高
            }
          }
        }
      }
    }
  }
}
```

**CSS 实现：**

```css
[data-theme="high-contrast"] {
  --color-background-base: var(--primitive-black);
  --color-text-primary: var(--primitive-white);
  --color-interactive-primary: var(--primitive-yellow-300);
  
  /* 强制边框 */
  --color-border-always: var(--primitive-white);
}

[data-theme="high-contrast"] * {
  border: 1px solid var(--color-border-always) !important;
}

[data-theme="high-contrast"] img {
  filter: contrast(1.2);
}
```

---

### 5.2 自动化对比度检查 (20分钟)

**安装依赖：**

```bash
npm install --save-dev wcag-contrast axe-core
```

**对比度检查脚本：`tests/contrast-check.test.js`**

```javascript
const { contrast } = require('wcag-contrast');
const tokens = require('../tokens/tokens.json');

describe('WCAG Contrast Requirements', () => {
  const modes = ['light', 'dark', 'high-contrast'];
  
  modes.forEach(mode => {
    describe(`${mode} mode`, () => {
      
      test('text-primary on background-base meets AA (4.5:1)', () => {
        const bgColor = resolveToken(
          'color.semantic.background.base',
          mode
        );
        const textColor = resolveToken(
          'color.semantic.text.primary',
          mode
        );
        
        const ratio = contrast.ratio(bgColor, textColor);
        
        expect(ratio).toBeGreaterThanOrEqual(4.5);
      });
      
      test('interactive-primary on background-base meets AA (3:1 for large text)', () => {
        const bgColor = resolveToken(
          'color.semantic.background.base',
          mode
        );
        const interactiveColor = resolveToken(
          'color.semantic.interactive.primary',
          mode
        );
        
        const ratio = contrast.ratio(bgColor, interactiveColor);
        
        expect(ratio).toBeGreaterThanOrEqual(3.0);
      });
      
      if (mode === 'high-contrast') {
        test('all text meets AAA (7:1)', () => {
          const bgColor = resolveToken(
            'color.semantic.background.base',
            mode
          );
          const textColor = resolveToken(
            'color.semantic.text.primary',
            mode
          );
          
          const ratio = contrast.ratio(bgColor, textColor);
          
          expect(ratio).toBeGreaterThanOrEqual(7.0);
        });
      }
      
    });
  });
});

function resolveToken(path, mode) {
  const parts = path.split('.');
  let value = tokens;
  
  for (const part of parts) {
    value = value[part];
  }
  
  // 处理 mode 扩展
  if (value.$extensions?.mode) {
    value = value.$extensions.mode[mode];
  }
  
  // 解析别名
  if (typeof value === 'string' && value.startsWith('{')) {
    const alias = value.slice(1, -1);
    return resolveToken(alias, mode);
  }
  
  return value.$value || value;
}
```

**集成到 CI：**

```yaml
# .github/workflows/a11y-gate.yml
name: Accessibility Gate

on: [push, pull_request]

jobs:
  contrast-check:
    runs-on: ubuntu-latest
    
    steps:
      - uses: actions/checkout@v3
      - uses: actions/setup-node@v3
      
      - name: Install Dependencies
        run: npm ci
      
      - name: Run Contrast Tests
        run: npm test -- tests/contrast-check.test.js
        
      - name: Fail if contrast ratio too low
        run: |
          if [ $? -ne 0 ]; then
            echo "❌ Contrast requirements not met!"
            exit 1
          fi
```

---

### 5.3 Axe-core 自动化审计 (20分钟)

**Playwright + Axe 集成：`tests/a11y.spec.js`**

```javascript
const { test, expect } = require('@playwright/test');
const AxeBuilder = require('@axe-core/playwright').default;

test.describe('Accessibility Tests', () => {
  
  test.beforeEach(async ({ page }) => {
    await page.goto('http://localhost:3000');
  });
  
  test('should not have automatically detectable accessibility issues (light mode)', async ({ page }) => {
    const accessibilityScanResults = await new AxeBuilder({ page })
      .withTags(['wcag2a', 'wcag2aa', 'wcag21aa'])
      .analyze();
    
    expect(accessibilityScanResults.violations).toEqual([]);
  });
  
  test('should not have accessibility issues (dark mode)', async ({ page }) => {
    await page.evaluate(() => {
      document.body.setAttribute('data-theme', 'dark');
    });
    
    const accessibilityScanResults = await new AxeBuilder({ page })
      .withTags(['wcag2a', 'wcag2aa'])
      .analyze();
    
    expect(accessibilityScanResults.violations).toEqual([]);
  });
  
  test('should not have accessibility issues (high-contrast mode)', async ({ page }) => {
    await page.evaluate(() => {
      document.body.setAttribute('data-theme', 'high-contrast');
    });
    
    const accessibilityScanResults = await new AxeBuilder({ page })
      .withTags(['wcag2a', 'wcag2aa', 'wcag2aaa'])
      .analyze();
    
    expect(accessibilityScanResults.violations).toEqual([]);
  });
  
  test('keyboard navigation should work', async ({ page }) => {
    // Tab 到第一个按钮
    await page.keyboard.press('Tab');
    
    const focusedElement = await page.evaluate(() => 
      document.activeElement.className
    );
    
    expect(focusedElement).toContain('button');
    
    // 检查焦点样式是否可见
    const outlineWidth = await page.evaluate(() => {
      const style = window.getComputedStyle(document.activeElement);
      return style.outlineWidth;
    });
    
    expect(parseFloat(outlineWidth)).toBeGreaterThan(0);
  });
  
  test('touch targets should be at least 44x44px', async ({ page }) => {
    const buttons = await page.$$('.button');
    
    for (const button of buttons) {
      const box = await button.boundingBox();
      
      expect(box.width).toBeGreaterThanOrEqual(44);
      expect(box.height).toBeGreaterThanOrEqual(44);
    }
  });
  
});
```

**生成可访问性报告：**

```javascript
// tests/a11y-report.js
const fs = require('fs');
const { chromium } = require('playwright');
const AxeBuilder = require('@axe-core/playwright').default;

async function generateA11yReport() {
  const browser = await chromium.launch();
  const page = await browser.newPage();
  await page.goto('http://localhost:3000');
  
  const results = await new AxeBuilder({ page })
    .withTags(['wcag2a', 'wcag2aa', 'wcag21aa'])
    .analyze();
  
  // 生成 HTML 报告
  const html = `
    <!DOCTYPE html>
    <html>
    <head>
      <title>Accessibility Report</title>
      <style>
        body { font-family: sans-serif; margin: 40px; }
        .pass { color: green; }
        .fail { color: red; }
        .violation { background: #ffebee; padding: 10px; margin: 10px 0; }
      </style>
    </head>
    <body>
      <h1>Accessibility Audit Report</h1>
      <p>Generated: ${new Date().toISOString()}</p>
      
      <h2 class="${results.violations.length === 0 ? 'pass' : 'fail'}">
        Violations: ${results.violations.length}
      </h2>
      
      ${results.violations.map(v => `
        <div class="violation">
          <h3>${v.id}: ${v.help}</h3>
          <p><strong>Impact:</strong> ${v.impact}</p>
          <p><strong>Description:</strong> ${v.description}</p>
          <p><strong>Affected elements:</strong></p>
          <ul>
            ${v.nodes.map(n => `<li>${n.html}</li>`).join('')}
          </ul>
        </div>
      `).join('')}
      
      <h2 class="pass">Passes: ${results.passes.length}</h2>
    </body>
    </html>
  `;
  
  fs.writeFileSync('reports/a11y-report.html', html);
  
  await browser.close();
  
  console.log(`Report generated: reports/a11y-report.html`);
  
  if (results.violations.length > 0) {
    process.exit(1);
  }
}

generateA11yReport();
```

---

## 第六部分：视觉回归测试自动化 (90分钟)

### 6.1 Storybook 组件目录搭建 (30分钟)

**安装 Storybook：**

```bash
npx storybook@latest init
```

**Button 的 Story：`.storybook/Button.stories.js`**

```javascript
import '../style.css';

export default {
  title: 'Components/Button',
  argTypes: {
    theme: {
      control: 'select',
      options: ['light', 'dark', 'high-contrast']
    },
    size: {
      control: 'select',
      options: ['default', 'large']
    }
  }
};

const Template = ({ theme, size, children }) => {
  document.body.setAttribute('data-theme', theme);
  
  return `
    <button class="button ${size === 'large' ? 'button--large' : ''}" aria-label="示例按钮">
      ${children}
    </button>
  `;
};

export const Default = Template.bind({});
Default.args = {
  theme: 'light',
  size: 'default',
  children: 'Play'
};

export const DarkMode = Template.bind({});
DarkMode.args = {
  theme: 'dark',
  size: 'default',
  children: 'Play'
};

export const HighContrast = Template.bind({});
HighContrast.args = {
  theme: 'high-contrast',
  size: 'default',
  children: 'Play'
};

export const LargeSize = Template.bind({});
LargeSize.args = {
  theme: 'light',
  size: 'large',
  children: '▶'
};

// Stress Tests
export const LongText = Template.bind({});
LongText.args = {
  theme: 'light',
  size: 'default',
  children: 'This is a very long button text that should still look good'
};

export const EmptyState = Template.bind({});
EmptyState.args = {
  theme: 'light',
  size: 'default',
  children: ''
};
```

**SongRow 的 Story：`.storybook/SongRow.stories.js`**

```javascript
export default {
  title: 'Components/SongRow',
  argTypes: {
    theme: {
      control: 'select',
      options: ['light', 'dark', 'high-contrast']
    }
  }
};

const Template = ({ theme, title, artist, duration }) => {
  document.body.setAttribute('data-theme', theme);
  
  return `
    <article class="song-row">
      <img 
        class="song-row__cover" 
        src="https://placehold.co/40x40/1ED760/FFFFFF?text=S" 
        alt="歌曲封面"
      >
      <div class="song-row__info">
        <div class="song-row__title">${title}</div>
        <div class="song-row__artist">${artist}</div>
      </div>
      <div class="song-row__duration">${duration}</div>
    </article>
  `;
};

export const Default = Template.bind({});
Default.args = {
  theme: 'light',
  title: '夜空中最亮的星',
  artist: '逃跑计划',
  duration: '4:35'
};

export const DarkMode = Template.bind({});
DarkMode.args = {
  theme: 'dark',
  title: '夜空中最亮的星',
  artist: '逃跑计划',
  duration: '4:35'
};

// Stress Tests
export const VeryLongTitle = Template.bind({});
VeryLongTitle.args = {
  theme: 'light',
  title: 'This is an extremely long song title that should be truncated with ellipsis to prevent layout breaking',
  artist: 'Artist with a very long name',
  duration: '999:99'
};

export const ShortTitle = Template.bind({});
ShortTitle.args = {
  theme: 'light',
  title: 'Hi',
  artist: 'A',
  duration: '0:01'
};

export const SpecialCharacters = Template.bind({});
SpecialCharacters.args = {
  theme: 'light',
  title: '♫ 音乐 🎵 Music ñ é ü',
  artist: '艺术家 / Artist & Band',
  duration: '3:14'
};
```

---

### 6.2 Playwright 视觉回归测试 (30分钟)

**安装依赖：**

```bash
npm install --save-dev @playwright/test
npx playwright install
```

**视觉回归测试配置：`playwright.config.js`**

```javascript
module.exports = {
  testDir: './tests',
  use: {
    baseURL: 'http://localhost:6006',  // Storybook 地址
    screenshot: 'only-on-failure',
    video: 'retain-on-failure'
  },
  projects: [
    { name: 'chromium', use: { browserName: 'chromium' } },
    { name: 'firefox', use: { browserName: 'firefox' } },
    { name: 'webkit', use: { browserName: 'webkit' } }
  ],
  webServer: {
    command: 'npm run storybook',
    port: 6006,
    reuseExistingServer: !process.env.CI
  }
};
```

**视觉回归测试：`tests/visual-regression.spec.js`**

```javascript
const { test, expect } = require('@playwright/test');

test.describe('Visual Regression Tests', () => {
  
  test('Button - Light Mode', async ({ page }) => {
    await page.goto('/iframe.html?id=components-button--default');
    await page.waitForLoadState('networkidle');
    
    await expect(page).toHaveScreenshot('button-light.png', {
      maxDiffPixels: 100  // 允许最多100像素差异
    });
  });
  
  test('Button - Dark Mode', async ({ page }) => {
    await page.goto('/iframe.html?id=components-button--dark-mode');
    await page.waitForLoadState('networkidle');
    
    await expect(page).toHaveScreenshot('button-dark.png');
  });
  
  test('Button - High Contrast', async ({ page }) => {
    await page.goto('/iframe.html?id=components-button--high-contrast');
    await page.waitForLoadState('networkidle');
    
    await expect(page).toHaveScreenshot('button-high-contrast.png');
  });
  
  test('Button - Long Text Stress Test', async ({ page }) => {
    await page.goto('/iframe.html?id=components-button--long-text');
    await page.waitForLoadState('networkidle');
    
    // 检查文本是否溢出
    const button = await page.$('.button');
    const box = await button.boundingBox();
    const scrollWidth = await button.evaluate(el => el.scrollWidth);
    
    expect(scrollWidth).toBeLessThanOrEqual(box.width + 5);  // 允许5px误差
    
    await expect(page).toHaveScreenshot('button-long-text.png');
  });
  
  test('SongRow - All Themes', async ({ page }) => {
    const themes = ['default', 'dark-mode', 'high-contrast'];
    
    for (const theme of themes) {
      await page.goto(`/iframe.html?id=components-songrow--${theme}`);
      await page.waitForLoadState('networkidle');
      
      await expect(page).toHaveScreenshot(`songrow-${theme}.png`);
    }
  });
  
  test('SongRow - Very Long Title', async ({ page }) => {
    await page.goto('/iframe.html?id=components-songrow--very-long-title');
    await page.waitForLoadState('networkidle');
    
    // 检查省略号是否出现
    const title = await page.$('.song-row__title');
    const isEllipsis = await title.evaluate(el => {
      return el.scrollWidth > el.clientWidth;
    });
    
    expect(isEllipsis).toBeTruthy();
    
    await expect(page).toHaveScreenshot('songrow-long-title.png');
  });
  
  test('Responsive Behavior - Mobile', async ({ page }) => {
    await page.setViewportSize({ width: 375, height: 667 });
    await page.goto('/');
    
    await expect(page).toHaveScreenshot('mobile-view.png');
  });
  
  test('200% Zoom', async ({ page }) => {
    await page.goto('/');
    await page.evaluate(() => {
      document.body.style.zoom = '200%';
    });
    
    await expect(page).toHaveScreenshot('200-zoom.png');
  });
  
});
```

**更新 CI 工作流：**

```yaml
# .github/workflows/visual-regression.yml
name: Visual Regression Tests

on: [push, pull_request]

jobs:
  test:
    runs-on: ubuntu-latest
    
    steps:
      - uses: actions/checkout@v3
      - uses: actions/setup-node@v3
      
      - name: Install Dependencies
        run: npm ci
      
      - name: Install Playwright Browsers
        run: npx playwright install --with-deps
      
      - name: Run Visual Tests
        run: npm run test:visual
      
      - name: Upload Test Results
        if: failure()
        uses: actions/upload-artifact@v3
        with:
          name: visual-regression-diffs
          path: test-results/
```

---

### 6.3 Percy.io 集成（云端视觉回归）(30分钟)

**安装 Percy CLI：**

```bash
npm install --save-dev @percy/cli @percy/playwright
```

**Percy 配置：`.percy.yml`**

```yaml
version: 2
static:
  include: 'dist/**'
  
snapshot:
  widths:
    - 375  # Mobile
    - 768  # Tablet
    - 1280 # Desktop
  
  min-height: 1024
  
  percy-css: |
    /* 隐藏动态内容 */
    .timestamp { display: none; }
    .random-id { display: none; }
```

**Percy + Playwright 集成：`tests/percy.spec.js`**

```javascript
const { test } = require('@playwright/test');
const percySnapshot = require('@percy/playwright');

test.describe('Percy Visual Tests', () => {
  
  test('Components in all themes', async ({ page }) => {
    await page.goto('http://localhost:3000');
    
    // Light mode
    await page.evaluate(() => {
      document.body.setAttribute('data-theme', 'light');
    });
    await percySnapshot(page, 'Full Page - Light Mode');
    
    // Dark mode
    await page.evaluate(() => {
      document.body.setAttribute('data-theme', 'dark');
    });
    await percySnapshot(page, 'Full Page - Dark Mode');
    
    // High Contrast
    await page.evaluate(() => {
      document.body.setAttribute('data-theme', 'high-contrast');
    });
    await percySnapshot(page, 'Full Page - High Contrast');
  });
  
  test('Individual components', async ({ page }) => {
    await page.goto('http://localhost:6006');
    
    // Button variants
    await page.goto('/iframe.html?id=components-button--default');
    await percySnapshot(page, 'Button - Default');
    
    await page.goto('/iframe.html?id=components-button--large-size');
    await percySnapshot(page, 'Button - Large');
    
    // SongRow variants
    await page.goto('/iframe.html?id=components-songrow--default');
    await percySnapshot(page, 'SongRow - Default');
    
    await page.goto('/iframe.html?id=components-songrow--very-long-title');
    await percySnapshot(page, 'SongRow - Long Title');
  });
  
});
```

**运行 Percy 测试：**

```bash
export PERCY_TOKEN=your_percy_token
npx percy exec -- npx playwright test tests/percy.spec.js
```

**在 CI 中集成：**

```yaml
# .github/workflows/percy.yml
name: Percy Visual Tests

on: [push, pull_request]

jobs:
  percy:
    runs-on: ubuntu-latest
    
    steps:
      - uses: actions/checkout@v3
      - uses: actions/setup-node@v3
      
      - name: Install Dependencies
        run: npm ci
      
      - name: Build Project
        run: npm run build
      
      - name: Percy Test
        env:
          PERCY_TOKEN: ${{ secrets.PERCY_TOKEN }}
        run: npx percy exec -- npx playwright test tests/percy.spec.js
```

---

## 第七部分：批判性教学模块 (60分钟)

### 7.1 理论阅读与辩论 (30分钟)

**阅读材料包（提前一周发放）：**

1. **Susan Leigh Star - "This is Not a Boundary Object"** (节选)
   - 主题：边界物体的误用与滥用
   - 讨论点：什么时候设计代币会失败？

2. **Alexander Galloway - "Protocol: How Control Exists After Decentralization"** (第1章节选)
   - 主题：协议作为控制机制
   - 讨论点：谁控制了协议的定义权？

3. **Ruha Benjamin - "Race After Technology"** (节选)
   - 主题：技术中立性的神话
   - 讨论点：设计代币能否编码偏见？

**辩题设计：**

**辩题 1: "设计代币是中立的吗？"**

**正方（设计代币是中立的）：**
- 论点：代币只是数值，不携带价值判断
- 证据：同一个 green-400 可以用于任何用途
- 反驳准备：命名本身就是意义的赋予

**反方（设计代币不是中立的）：**
- 论点：命名即权力，语义即意识形态
- 证据：为什么是 "primary" 而不是 "accent"？谁定义了"主要"？
- 反驳准备：技术规范化是必要的

**辩论规则：**
- 开场陈述：3分钟/方
- 自由辩论：10分钟
- 总结陈词：2分钟/方
- 讲师点评：5分钟

**讲师引导问题：**
1. "如果你的设计系统只支持英文命名，这对非英语母语的设计师意味着什么？"
2. "color-skin-tone 代币应该如何设计？只提供5个选项是否合理？"
3. "无障碍代币（如 high-contrast）是'特殊需求'还是'默认标准'？这种分类本身是否有问题？"
4. "当我们说'语义化'，我们是在为谁服务？是设计师、开发者，还是最终用户？"

---

### 7.2 "违约组件"设计作业 (30分钟)

**作业目标：** 通过刻意违反协议，理解协议的边界与必要性。

**任务描述：**
> "设计一个刻意违反我们设计系统协议的组件。然后，设计一套治理策略将其'收编'回系统内。"

**违约类型示例：**

**类型 1：硬编码叛逆者**
```css
/* 违约组件 */
.rogue-button {
  background: #FF5733;  /* 硬编码，不使用代币 */
  padding: 13px;        /* 奇怪的间距 */
  border-radius: 7px;   /* 不符合系统规范 */
}
```

**收编策略：**
1. **识别阶段：** 使用 stylelint 插件检测硬编码
2. **映射阶段：** 找到最接近的代币 `color-danger` 或创建新代币
3. **迁移阶段：** 自动化脚本替换
4. **验证阶段：** 视觉回归测试确认

**类型 2：命名空间入侵者**
```json
{
  "color": {
    "marketing": {
      "campaign-red": {
        "$value": "#FF0000",
        "$description": "2024春节活动专用色"
      }
    }
  }
}
```

**问题分析：**
- 违反了"语义 vs 场景"的分层原则
- 活动结束后代币如何废弃？
- 其他团队能否使用这个"营销色"？

**收编策略：**
1. **重新分类：** 归入 `semantic.accent` 或创建 `seasonal` 类别
2. **生命周期管理：** 添加 `$extensions.expiry: "2024-02-18"`
3. **访问控制：** 通过 RACI 限制只有营销团队可使用
4. **自动清理：** CI 脚本在过期后标记为 deprecated

**类型 3：平台特定污染者**
```json
{
  "color": {
    "ios": {
      "system-blue": {
        "$value": "#007AFF"
      }
    }
  }
}
```

**问题分析：**
- 将平台实现细节泄漏到语义层
- 跨平台团队无法理解其用途
- 违反了"平台无关"的代币设计原则

**收编策略：**
1. **语义提升：** 重命名为 `color.semantic.link.default`
2. **平台映射：** 在 $extensions 中保留平台特定映射
3. **文档强化：** 明确说明跨平台语义

**学生作业提交：**

```markdown
# 违约组件报告

## 1. 违约设计
- **组件名称：** [你的组件名]
- **违约类型：** [硬编码/命名污染/平台泄漏/其他]
- **违约原因：** [为什么这样设计？模拟什么场景？]
- **违约代码：**
```css
/* 粘贴你的违约代码 */
```

## 2. 问题识别
- **协议冲突点：** [违反了哪些协议规则？]
- **潜在危害：** [这种违约会带来什么长期问题？]
- **发现方式：** [用什么工具/流程能发现这个违约？]

## 3. 收编策略
- **策略选择：** [迁移/重构/废弃/隔离？]
- **实施步骤：**
  1. 步骤1
  2. 步骤2
  3. ...
- **自动化方案：** [提供可执行的脚本]
- **验证方法：** [如何确认收编成功？]

## 4. 反思
- **协议的必要性：** [通过这个练习，你如何理解协议的作用？]
- **协议的灵活性：** [协议是否需要为"特例"留出空间？]
- **权力与责任：** [谁有权决定什么是"违约"？]
```

**评分标准：**
- 违约设计的创意性 (30%)
- 问题识别的深度 (25%)
- 收编策略的完整性 (30%)
- 批判性反思 (15%)

---

## 第八部分：现代 CSS 能力并轨 (60分钟)

### 8.1 CSS Cascade Layers 的层级控制 (20分钟)

**问题引入：**
> "我们的代币系统很完美，但当第三方 UI 库（如 Bootstrap）加入时，样式优先级就乱套了。如何优雅地解决？"

**传统方案的困境：**

```css
/* 传统做法：提高优先级战争 */
.button {
  background: var(--color-interactive-primary);
}

/* 第三方库覆盖 */
.btn-primary {
  background: #007bff !important;  /* Bootstrap */
}

/* 不得已的对抗 */
.button {
  background: var(--color-interactive-primary) !important !important;  /* ❌ 荒谬 */
}
```

**Cascade Layers 解决方案：**

```css
/* 定义层级顺序 */
@layer reset, tokens, base, components, utilities, overrides;

/* Reset 层（最低优先级） */
@layer reset {
  * {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
  }
}

/* Tokens 层（代币定义） */
@layer tokens {
  :root {
    --color-primitive-green-400: #1ED760;
    --color-interactive-primary: var(--color-primitive-green-400);
  }
}

/* Base 层（基础样式） */
@layer base {
  body {
    font-family: sans-serif;
    background-color: var(--color-background-base);
  }
}

/* Components 层（组件样式） */
@layer components {
  .button {
    background-color: var(--color-interactive-primary);
    padding: var(--spacing-m);
    border-radius: var(--radius-full);
  }
}

/* Utilities 层（工具类，最高优先级） */
@layer utilities {
  .bg-primary {
    background-color: var(--color-interactive-primary) !important;
  }
}
```

**将第三方库隔离到层中：**

```css
/* 导入第三方库并隔离到 vendor 层 */
@layer vendor {
  @import url("bootstrap.css");
}

/* 定义层级顺序，vendor 层优先级低于我们的 components */
@layer reset, vendor, tokens, components, utilities;
```

**课堂演示：**
1. 创建两个冲突的样式
2. 不使用 layers，观察 !important 混乱
3. 使用 layers，观察优先级被规范化控制

---

### 8.2 Container Queries 的组件级响应 (20分钟)

**问题引入：**
> "媒体查询是全局的，但我们的组件可能被放在侧边栏（窄）或主区域（宽）。如何让组件根据**自己的容器**而非**浏览器窗口**调整样式？"

**传统媒体查询的局限：**

```css
/* 传统做法：基于视口 */
@media (max-width: 768px) {
  .song-row {
    flex-direction: column;  /* 小屏幕变竖向 */
  }
}

/* 问题：如果 song-row 被放在宽度 300px 的侧边栏里？
   浏览器窗口是 1920px，媒体查询不触发，但组件被挤爆了！ */
```

**Container Queries 解决方案：**

```css
/* 第一步：标记容器 */
.playlist-header {
  container-type: inline-size;  /* 声明这是一个查询容器 */
  container-name: playlist;     /* 可选：命名容器 */
}

/* 第二步：基于容器宽度查询 */
@container playlist (max-width: 600px) {
  .playlist-header {
    flex-direction: column;
    text-align: center;
  }
  
  .playlist-header__play-button {
    margin-left: 0;
    margin-top: var(--spacing-m);
  }
}

/* 更激进的例子：字号响应容器 */
@container (min-width: 400px) {
  .playlist-header__title {
    font-size: var(--font-size-l);  /* 48px */
  }
}

@container (max-width: 399px) {
  .playlist-header__title {
    font-size: var(--font-size-m);  /* 16px */
  }
}
```

**实际应用场景：**

```html
<!-- 场景 1: 主区域，宽度充足 -->
<main style="width: 800px;">
  <div class="playlist-header">
    <!-- 保持横向布局 -->
  </div>
</main>

<!-- 场景 2: 侧边栏，宽度受限 -->
<aside style="width: 300px;">
  <div class="playlist-header">
    <!-- 自动变为竖向布局，即使浏览器窗口很宽 -->
  </div>
</aside>
```

**与代币系统结合：**

```css
/* 在 tokens.json 中定义断点 */
{
  "breakpoint": {
    "component": {
      "narrow": {
        "$type": "dimension",
        "$value": "400px",
        "$description": "组件进入紧凑模式的阈值"
      },
      "wide": {
        "$type": "dimension",
        "$value": "600px"
      }
    }
  }
}

/* 在 CSS 中使用 */
@container (max-width: var(--breakpoint-component-narrow)) {
  /* 紧凑模式样式 */
}
```

**课堂练习：**
1. 创建一个 `SongRow` 组件
2. 在宽容器中显示完整信息（封面 + 标题 + 歌手 + 时长）
3. 在窄容器中隐藏歌手名，只显示标题
4. 在极窄容器中隐藏封面

---

### 8.3 嵌套主题与作用域隔离 (20分钟)

**问题引入：**
> "如果我想在亮色页面中嵌入一个暗色卡片，但主题切换是全局的（data-theme 在 body 上），怎么办？"

**传统方案的困境：**

```css
/* 全局主题切换 */
body[data-theme="dark"] {
  --color-background-base: var(--primitive-gray-800);
}

/* 问题：无法在亮色页面中局部使用暗色 */
```

**嵌套主题解决方案：**

```css
/* 重构：主题样式不绑定到 body */
[data-theme="light"] {
  --color-background-base: var(--primitive-white);
  --color-text-primary: var(--primitive-black);
}

[data-theme="dark"] {
  --color-background-base: var(--primitive-gray-800);
  --color-text-primary: var(--primitive-white);
}

/* 默认为 light */
:root {
  --color-background-base: var(--primitive-white);
  --color-text-primary: var(--primitive-black);
}
```

**嵌套使用：**

```html
<body data-theme="light">
  <!-- 整体是亮色 -->
  <div class="page">
    <h1>这是亮色页面</h1>
    
    <!-- 嵌套的暗色卡片 -->
    <div class="card" data-theme="dark">
      <h2>这个卡片是暗色的</h2>
      <p>即使外部是亮色主题</p>
    </div>
    
    <p>这段文字又回到了亮色</p>
  </div>
</body>
```

**CSS 变量的作用域继承：**

```css
.card {
  background-color: var(--color-background-base);  /* 继承最近的 data-theme */
  color: var(--color-text-primary);
  padding: var(--spacing-l);
  border-radius: var(--radius-m);
}
```

**高级应用：局部强制色模式响应**

```css
/* 系统级强制色模式 */
@media (prefers-color-scheme: dark) {
  :root {
    --color-background-base: var(--primitive-gray-800);
    --color-text-primary: var(--primitive-white);
  }
}

/* 组件级覆盖 */
.card[data-force-light="true"] {
  --color-background-base: var(--primitive-white) !important;
  --color-text-primary: var(--primitive-black) !important;
}
```

**在 tokens.json 中定义作用域：**

```json
{
  "color": {
    "scoped": {
      "card": {
        "background": {
          "$type": "color",
          "$value": "{color.semantic.background.base}",
          "$extensions": {
            "scope": "component",
            "inherit": true
          }
        }
      }
    }
  }
}
```

---

## 第九部分：最终项目整合 (120分钟)

### 9.1 完整项目架构搭建 (30分钟)

**最终项目结构：**

```
encore-lite-v2/
├── tokens/
│   ├── tokens.json                    # 唯一真源
│   ├── tokens.schema.json             # JSON Schema 验证
│   └── README.md                      # 代币文档
│
├── dist/                              # 自动生成产物
│   ├── css/
│   │   ├── tokens.css                 # Web 代币
│   │   ├── tokens-light.css
│   │   ├── tokens-dark.css
│   │   └── tokens-high-contrast.css
│   ├── ios/
│   │   └── DesignTokens.swift         # iOS 代币
│   ├── android/
│   │   └── colors.xml                 # Android 代币
│   └── json/
│       └── tokens-flat.json           # JS 使用
│
├── src/
│   ├── web/
│   │   ├── index.html
│   │   ├── style.css                  # 组件样式
│   │   └── main.js
│   ├── ios/
│   │   └── EncoreLite/
│   │       ├── Views/
│   │       └── Components/
│   └── android/
│       └── app/src/main/java/
│
├── tests/
│   ├── contrast-check.test.js         # 对比度测试
│   ├── a11y.spec.js                   # 无障碍测试
│   ├── visual-regression.spec.js      # 视觉回归测试
│   └── percy.spec.js                  # Percy 云端测试
│
├── .storybook/
│   ├── main.js
│   ├── preview.js
│   └── stories/
│       ├── Button.stories.js
│       ├── SongRow.stories.js
│       └── PlaylistHeader.stories.js
│
├── governance/
│   ├── RACI.md                        # 角色与职责
│   ├── VERSIONING.md                  # 版本策略
│   ├── RFC_TEMPLATE.md                # RFC 模板
│   └── DEPRECATION_POLICY.md          # 废弃策略
│
├── scripts/
│   ├── export-from-figma.js           # Figma 导出
│   ├── build-tokens.js                # 代币构建
│   ├── detect-breaking.js             # 破坏性变更检测
│   └── screenshot-compare.js          # 截图对比
│
├── .github/
│   ├── workflows/
│   │   ├── tokens-ci.yml
│   │   ├── a11y-gate.yml
│   │   ├── visual-regression.yml
│   │   └── percy.yml
│   ├── RFC_TEMPLATE.md
│   └── PULL_REQUEST_TEMPLATE.md
│
├── reports/
│   ├── a11y-report.html
│   └── visual-diff/
│
├── package.json
├── style-dictionary.config.json
├── playwright.config.js
├── .percy.yml
├── README.md
├── CHANGELOG.md
└── MIGRATION.md
```

---

### 9.2 学生最终成果要求 (30分钟讲解)

**必交成果（100%）：**

**1. 完整的代币系统**
- ✅ tokens.json 符合 W3C DTCG 规范
- ✅ 包含 3 层代币（Primitives → Semantics → Component）
- ✅ 支持 3 种主题（light, dark, high-contrast）
- ✅ 通过 JSON Schema 验证
- ✅ 有完整的 $description 和 $extensions

**2. 跨平台实现**
- ✅ Web H5 页面（必须）
- ✅ iOS SwiftUI 示例（至少 1 个组件）
- ✅ Android Compose 示例（至少 1 个组件）
- ✅ 三端截图对比，颜色偏差 < 5 Delta E

**3. 自动化流水线**
- ✅ CI/CD 配置文件（GitHub Actions）
- ✅ 代币自动生成脚本（Style Dictionary）
- ✅ 破坏性变更检测脚本
- ✅ 对比度自动检查

**4. 测试覆盖**
- ✅ 通过所有 WCAG AA 对比度测试
- ✅ Storybook 有至少 5 个 stories（含 stress tests）
- ✅ Playwright 视觉回归测试覆盖 3 种主题
- ✅ Axe-core 无障碍测试 0 violations

**5. 治理文档**
- ✅ RACI.md（完整的角色矩阵）
- ✅ 至少 1 份完整的 RFC（模拟一次破坏性变更）
- ✅ CHANGELOG.md（遵循 Keep a Changelog 格式）
- ✅ MIGRATION.md（提供迁移脚本）

**6. 批判性反思报告（2000-3000字）**

必须包含：
- **第一部分：边界物体分析**
  - 你的代币系统如何在设计师、前端、移动端之间协调？
  - 哪些地方产生了张力？如何解决？

- **第二部分：协议权力分析**
  - 在你的团队中，谁有权定义语义代币？
  - 这种权力分配是否公平？有哪些潜在冲突？

- **第三部分：技术中立性反思**
  - 你的代币命名是否携带了价值判断？
  - 是否有某些用户群体被"默认"排除在外？

- **第四部分：系统演化预测**
  - 当团队扩大到 100 人时，现有治理是否仍然有效？
  - 如果有人拒绝遵守协议，你的系统如何响应？

---

### 9.3 演示日流程 (60分钟)

**演示要求：**
- 时间：每组 10 分钟（7分钟演示 + 3分钟 Q&A）
- 形式：屏幕共享 + 现场操作
- 评委：讲师 + 2-3 位业界嘉宾

**演示检查清单：**

**第一部分：系统演示（3分钟）**
- [ ] 展示 tokens.json 结构
- [ ] 现场修改一个 primitive 代币（如改变绿色）
- [ ] 运行 `npm run build:tokens`
- [ ] 展示 3 个平台的产物同步更新
- [ ] 在 Web/iOS/Android 中验证颜色一致性

**第二部分：治理演示（2分钟）**
- [ ] 展示一份 RFC 文档
- [ ] 讲解 RACI 矩阵中的关键决策点
- [ ] 演示如何触发 CI 的破坏性变更检测
- [ ] 展示 CI 如何阻止不符合规范的 PR

**第三部分：质量门演示（2分钟）**
- [ ] 故意制造一个对比度不足的代币
- [ ] 提交 PR，展示 CI 失败
- [ ] 修复后重新提交，展示通过
- [ ] 展示 Storybook 的 stress test cases
- [ ] 展示 Percy 的视觉差异报告

**第四部分：批判性思考展示（3分钟）**
- [ ] 分享一个"违约组件"案例
- [ ] 讲解如何识别和收编
- [ ] 回答：谁有权定义"违约"？
- [ ] 展示系统的一个"盲点"或"偏见"

**评分标准：**

| 维度 | 权重 | 评分要点 |
|------|------|---------|
| **技术完整性** | 30% | 代币系统/跨平台实现/自动化流水线 |
| **质量保证** | 25% | 测试覆盖/无障碍性/视觉回归 |
| **治理成熟度** | 20% | RACI/RFC/版本管理/文档质量 |
| **批判性思维** | 15% | 理论应用/问题识别/反思深度 |
| **演示能力** | 10% | 清晰度/时间控制/Q&A 应对 |

---

## 第十部分：总结与扩展路径 (30分钟)

### 10.1 从"玩具"到"生产"的鸿沟

**讲师总结：**

> "恭喜你们完成了一个'系统级'而非'教程级'的设计系统。但我们必须诚实地面对：从这里到一个真正的生产级系统，还有一道鸿沟。"

**生产级系统的额外要求：**

**1. 规模化挑战**
- **代币数量：** 从 50 个到 500+ 个
- **组件数量：** 从 3 个到 100+ 个
- **团队规模：** 从 5 人到 50+ 人跨时区协作
- **平台数量：** 从 3 个到 10+ 个（Web, iOS, Android, Desktop, TV, Watch...）

**2. 性能优化**
```javascript
// 我们的做法：一次加载所有代币
import tokens from './tokens.json';

// 生产级做法：按需加载、代码分割
import { colorTokens } from '@design-system/tokens/color';
import { spacingTokens } from '@design-system/tokens/spacing';

// 树摇优化
import { primaryColor } from '@design-system/tokens/semantic';
```

**3. 版本管理复杂度**
```
v1.0 → v2.0 的真实场景：

- 30+ 个团队在使用
- 50+ 个应用需要迁移
- 6 个月的迁移窗口
- 并行维护两个大版本
- 每周的迁移进度会议
- 专门的迁移支持团队
```

**4. 组织变革阻力**
- **文化冲突：** "我们一直这样做，为什么要改？"
- **权力重组：** 谁失去控制权，谁获得控制权？
- **学习成本：** 新人入职需要多久才能上手？
- **激励错位：** 迁移到新系统对个人 KPI 有什么帮助？

---

### 10.2 职业发展路径

**路径 1：Design Systems Engineer（设计系统工程师）**
- **技能树：** 前端工程 + 设计理论 + 工具链开发
- **代表公司：** Shopify, Atlassian, Adobe, Microsoft
- **薪资范围：** $120k - $200k (美国)

**路径 2：Design Technologist（设计技术专家）**
- **技能树：** 交互设计 + 原型开发 + 系统思维
- **代表公司：** Google (Material Design), Apple (Human Interface)
- **薪资范围：** $130k - $220k

**路径 3：Design Operations Manager（设计运营经理）**
- **技能树：** 项目管理 + 流程优化 + 跨团队协调
- **代表公司：** Airbnb, Uber, Netflix
- **薪资范围：** $140k - $250k

**路径 4：独立顾问/开源维护者**
- **技能树：** 深度专业知识 + 社区建设 + 咨询能力
- **代表人物：** Brad Frost (Atomic Design), Nathan Curtis (EightShapes)
- **收入模式：** 咨询费 + 培训 + 企业支持

---

### 10.3 延伸学习资源

**必读书籍（按推荐顺序）：**

1. **《Design Systems》by Alla Kholmatova**
   - 为什么读：最全面的设计系统方法论
   - 重点章节：第 3 章（设计语言）、第 6 章（团队协作）

2. **《Atomic Design》by Brad Frost**
   - 为什么读：奠定组件化思维
   - 重点章节：第 2 章（原子设计方法论）、第 4 章（模式库）

3. **《Protocol》by Alexander Galloway**
   - 为什么读：理解协议作为控制机制
   - 重点章节：第 1 章（协议的逻辑）

4. **《The Design of Everyday Things》by Don Norman**
   - 为什么读：建立以用户为中心的思维
   - 重点章节：第 4 章（约束）、第 6 章（可视性）

5. **《Thinking in Systems》by Donella Meadows**
   - 为什么读：系统思维的入门经典
   - 重点章节：第 2 章（系统的行为）、第 5 章（杠杆点）

**核心工具与框架：**

| 工具 | 用途 | 学习曲线 | 推荐度 |
|------|------|---------|--------|
| **Style Dictionary** | 代币转换 | 中 | ⭐⭐⭐⭐⭐ |
| **Storybook** | 组件文档 | 低 | ⭐⭐⭐⭐⭐ |
| **Figma Variables** | 设计代币管理 | 低 | ⭐⭐⭐⭐⭐ |
| **Playwright** | 自动化测试 | 中 | ⭐⭐⭐⭐ |
| **Percy.io** | 视觉回归 | 低 | ⭐⭐⭐⭐ |
| **axe-core** | 无障碍测试 | 低 | ⭐⭐⭐⭐⭐ |
| **Chromatic** | Storybook + 视觉测试 | 低 | ⭐⭐⭐⭐ |
| **Design Tokens CLI** | W3C DTCG 工具 | 中 | ⭐⭐⭐ |

**社区与会议：**

- **Clarity Conference** - 设计系统专业会议
- **Config (Figma)** - Figma 年度大会
- **Design Systems Slack** - 全球最大社区（10,000+ 成员）
- **GitHub Design Systems Repo List** - 开源设计系统汇总

**开源设计系统学习案例：**

| 系统 | 组织 | 规模 | 学习重点 |
|------|------|------|---------|
| **Material Design 3** | Google | 超大型 | 组件复杂度、文档化 |
| **Carbon** | IBM | 大型 | 跨框架支持、企业级治理 |
| **Polaris** | Shopify | 中型 | 代币架构、React 实现 |
| **Lightning** | Salesforce | 大型 | 无障碍性、企业用例 |
| **GOV.UK Design System** | 英国政府 | 中型 | 可访问性黄金标准、简洁性 |
| **Ant Design** | 蚂蚁集团 | 大型 | 国际化、生态系统 |

---

### 10.4 最终挑战（可选）

**挑战 1：为真实项目贡献**
- 为一个开源设计系统提交 PR
- 改进其代币结构或治理文档
- 获得 Maintainer 认可

**挑战 2：构建垂直领域系统**
- 选择一个垂直领域（医疗/金融/教育/游戏）
- 研究该领域的特殊需求（合规性/可访问性/性能）
- 构建一个领域特定的设计系统

**挑战 3：跨文化设计系统**
- 构建一个支持 RTL（阿拉伯语）+ LTR（英语）+ 竖排（日语）的系统
- 处理不同文化的颜色语义差异
- 实现真正的国际化代币

**挑战 4：AI 辅助设计系统**
- 使用 GPT-4 生成代币命名建议
- 构建自动化的可访问性修复工具
- 实现"自然语言到代币"的转换

---

## 附录

### 附录 A：完整的 tokens.json 模板

```json
{
  "meta": {
    "version": "1.0.0",
    "updated": "2025-10-18T10:30:00Z",
    "author": "Design Systems Team",
    "license": "MIT",
    "repository": "https://github.com/your-org/encore-lite"
  },
  
  "color": {
    "primitive": {
      "green-400": {
        "$type": "color",
        "$value": "#1ED760",
        "$description": "Spotify brand green - primary brand color"
      },
      "green-500": {
        "$type": "color",
        "$value": "#1AAE4E",
        "$description": "Darker green for hover states"
      },
      "gray-800": {
        "$type": "color",
        "$value": "#121212",
        "$description": "Near black for dark backgrounds"
      },
      "gray-300": {
        "$type": "color",
        "$value": "#B3B3B3",
        "$description": "Mid gray for secondary text"
      },
      "white": {
        "$type": "color",
        "$value": "#FFFFFF"
      },
      "black": {
        "$type": "color",
        "$value": "#000000"
      },
      "blue-500": {
        "$type": "color",
        "$value": "#2D72D9",
        "$description": "Focus indicator color"
      },
      "yellow-300": {
        "$type": "color",
        "$value": "#FFD700",
        "$description": "High contrast accent"
      }
    },
    
    "semantic": {
      "background": {
        "base": {
          "$type": "color",
          "$value": "{color.primitive.white}",
          "$description": "Primary background color for pages",
          "$extensions": {
            "mode": {
              "light": "{color.primitive.white}",
              "dark": "{color.primitive.gray-800}",
              "high-contrast": "{color.primitive.black}"
            },
            "wcag": {
              "pairing": "color.semantic.text.primary",
              "ratio": 21.0
            }
          }
        }
      },
      
      "text": {
        "primary": {
          "$type": "color",
          "$value": "{color.primitive.black}",
          "$description": "Primary text color - high emphasis",
          "$extensions": {
            "mode": {
              "light": "{color.primitive.black}",
              "dark": "{color.primitive.white}",
              "high-contrast": "{color.primitive.white}"
            }
          }
        },
        "secondary": {
          "$type": "color",
          "$value": "{color.primitive.gray-300}",
          "$description": "Secondary text color - medium emphasis"
        }
      },
      
      "interactive": {
        "primary": {
          "$type": "color",
          "$value": "{color.primitive.green-400}",
          "$description": "Primary interactive color for buttons, links",
          "$extensions": {
            "mode": {
              "light": "{color.primitive.green-400}",
              "dark": "{color.primitive.green-400}",
              "high-contrast": "{color.primitive.yellow-300}"
            },
            "wcag": {
              "contrast-ratio": 4.8,
              "level": "AA"
            }
          }
        },
        "primary-hover": {
          "$type": "color",
          "$value": "{color.primitive.green-500}"
        }
      },
      
      "border": {
        "focus": {
          "$type": "color",
          "$value": "{color.primitive.blue-500}",
          "$description": "Focus indicator color for keyboard navigation"
        }
      }
    },
    
    "component": {
      "button": {
        "background": {
          "$type": "color",
          "$value": "{color.semantic.interactive.primary}",
          "$description": "Default button background"
        },
        "background-hover": {
          "$type": "color",
          "$value": "{color.semantic.interactive.primary-hover}"
        },
        "text": {
          "$type": "color",
          "$value": "{color.primitive.white}"
        }
      },
      "song-row": {
        "background-hover": {
          "$type": "color",
          "$value": "rgba(255, 255, 255, 0.05)",
          "$description": "Subtle hover effect"
        }
      }
    }
  },
  
  "spacing": {
    "primitive": {
      "base-unit": {
        "$type": "dimension",
        "$value": "16px",
        "$description": "Base spacing unit - 1rem equivalent"
      }
    },
    "semantic": {
      "xs": {
        "$type": "dimension",
        "$value": "4px"
      },
      "s": {
        "$type": "dimension",
        "$value": "8px"
      },
      "m": {
        "$type": "dimension",
        "$value": "16px"
      },
      "l": {
        "$type": "dimension",
        "$value": "24px"
      },
      "xl": {
        "$type": "dimension",
        "$value": "32px"
      }
    }
  },
  
  "radius": {
    "primitive": {
      "s": {
        "$type": "dimension",
        "$value": "4px"
      },
      "m": {
        "$type": "dimension",
        "$value": "8px"
      },
      "full": {
        "$type": "dimension",
        "$value": "9999px",
        "$description": "Fully rounded corners"
      }
    }
  },
  
  "typography": {
    "font-size": {
      "l": {
        "$type": "dimension",
        "$value": "48px",
        "$description": "Large heading size"
      },
      "m": {
        "$type": "dimension",
        "$value": "16px"
      },
      "s": {
        "$type": "dimension",
        "$value": "12px"
      }
    },
    "line-height": {
      "tight": {
        "$type": "number",
        "$value": 1.2
      },
      "base": {
        "$type": "number",
        "$value": 1.5
      }
    },
    "font-weight": {
      "regular": {
        "$type": "number",
        "$value": 400
      },
      "bold": {
        "$type": "number",
        "$value": 700
      }
    }
  },
  
  "motion": {
    "duration": {
      "fast": {
        "$type": "duration",
        "$value": "120ms",
        "$extensions": {
          "prefers-reduced-motion": "1ms"
        }
      }
    },
    "easing": {
      "standard": {
        "$type": "cubicBezier",
        "$value": [0.4, 0, 0.2, 1],
        "$description": "Standard easing curve"
      }
    }
  }
}
```

---

### 附录 B：参考文献

**学术文献：**

1. Star, S. L., & Griesemer, J. R. (1989). "Institutional Ecology, 'Translations' and Boundary Objects." *Social Studies of Science*, 19(3), 387-420.

2. Galloway, A. R. (2004). *Protocol: How Control Exists After Decentralization*. MIT Press.

3. Benjamin, R. (2019). *Race After Technology: Abolitionist Tools for the New Jim Code*. Polity Press.

4. Norman, D. A. (2013). *The Design of Everyday Things: Revised and Expanded Edition*. Basic Books.

5. Meadows, D. H. (2008). *Thinking in Systems: A Primer*. Chelsea Green Publishing.

**行业报告：**

1. "State of Design Systems 2024" - Clarity Conference
2. "Design Systems Handbook" - InVision
3. "Tokens in Design Systems" - Figma Blog

**标准规范：**

1. W3C Design Tokens Community Group - Draft Specification
2. WCAG 2.2 Guidelines - Web Accessibility Standards
3. ARIA Authoring Practices Guide (APG)

---

### 附录 C：工具配置文件完整示例

**`package.json`**

```json
{
  "name": "encore-lite-v2",
  "version": "2.0.0",
  "description": "Critical Design System Teaching Case",
  "scripts": {
    "build:tokens": "node scripts/build-tokens.js",
    "build:web": "npm run build:tokens && vite build",
    "test": "npm run test:unit && npm run test:visual && npm run test:a11y",
    "test:unit": "jest",
    "test:visual": "playwright test",
    "test:a11y": "playwright test tests/a11y.spec.js",
    "test:contrast": "jest tests/contrast-check.test.js",
    "storybook": "storybook dev -p 6006",
    "build-storybook": "storybook build",
    "detect:breaking": "node scripts/detect-breaking.js",
    "report:changes": "node scripts/generate-changelog.js",
    "percy": "percy exec -- playwright test tests/percy.spec.js"
  },
  "devDependencies": {
    "@axe-core/playwright": "^4.8.0",
    "@percy/cli": "^1.27.0",
    "@percy/playwright": "^1.0.4",
    "@playwright/test": "^1.40.0",
    "@storybook/html": "^7.6.0",
    "ajv-cli": "^5.0.0",
    "jest": "^29.7.0",
    "jsondiffpatch": "^0.5.0",
    "pixelmatch": "^5.3.0",
    "playwright": "^1.40.0",
    "style-dictionary": "^3.9.0",
    "stylelint": "^16.0.0",
    "vite": "^5.0.0",
    "wcag-contrast": "^3.0.0"
  }
}
```

---

## 结语

**讲师致辞：**

> "两天前，我们从一个悖论开始：宣称'唯一真源'却实施'双真源'。今天，你们已经构建了一个**技术上可执行、组织上可治理、理论上可辩护**的设计系统。
> 
> 但更重要的是，你们学会了用**批判性思维**审视技术：
> - 代币不是中立的——它携带着命名者的权力
> - 协议不是文档——它是被编码的组织规则
> - 系统不是永恒的——它在权力、妥协与演化中生存
> 
> 当你们走入真实的团队，面对真实的冲突时，请记住：
> **好的设计系统不是消灭冲突，而是为冲突提供一个可协商的框架。**
> 
> 继续构建，继续质疑，继续演化。
> 
> Design systems are not finished. They are practiced.
> 
> 下课。"

---

**文档版本:** v2.0 (Critical Enhancement)  
**最后更新:** 2025年10月18日  
**维护者:** 教学团队  
**许可证:** CC BY-SA 4.0  
**反馈渠道:** [GitHub Discussions](https://github.com/your-org/encore-lite/discussions)

---

**致谢：**

本课程的理论框架得益于以下学者的启发：
- Susan Leigh Star（边界物体理论）
- Alexander Galloway（协议理论）
- Ruha Benjamin（批判性技术研究）
- Brad Frost（原子设计方法论）
- Nathan Curtis（设计系统实践）

感谢 Spotify Design Team 公开分享 Encore 设计系统的经验。

特别感谢所有参与课程测试的学生，你们的反馈让这门课程持续进化。

---

**下一个版本计划（v3.0 - AI Integration）：**
- GPT-4 驱动的代币命名助手
- 自动化的可访问性修复
- 基于使用数据的代币优化建议
- 跨语言语义映射（英文 ↔ 中文 ↔ 阿拉伯文）

敬请期待。🚀