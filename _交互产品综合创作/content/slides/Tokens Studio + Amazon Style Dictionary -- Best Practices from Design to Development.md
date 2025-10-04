本课程计划概述了一个工作流程，旨在从 Figma 的原生设计系统能力（变量和样式）迁移到一个更强大、可自动化的流程，该流程使用 Tokens Studio 和 Amazon Style Dictionary。其目标是为 design tokens 建立一个可维护、可扩展的单一事实来源 (single source of truth)。

  

**课程计划：迁移到可扩展的 design token 工作流**

  

---

  

### **模块 1: 理解 design tokens (30 分钟)**

  

**目标：** 学习什么是 design tokens，为什么它们对设计系统至关重要，以及 Figma 原生变量的局限性。

  

**什么是 design tokens?**

  

- **定义：** Tokens 是设计系统中最小的、不可分割的部分。它们是代表设计决策的“名称-值”对（例如，颜色、间距、排版）。

- **目的：** 它们确保跨平台的一致性，作为设计师和开发者的单一事实来源，并支持主题化和品牌更新。

- **类比：** Tokens 就像是配料表，而组件则是组装好的菜肴。

  

**Figma 原生变量 vs. 基于 token 的系统**

  

- **Figma Variables：** 讨论其优点（易于使用、模式切换）和缺点（没有内置对多设计系统的支持、缺少代码转换功能）。

- **为什么需要 Tokens Studio + Style Dictionary：** 解释这种组合如何提供一个免费、强大的解决方案，用于跨多个平台和代码库管理 tokens。

  

---

  

### **模块 2: 在 Figma 中设置 Tokens Studio (45 分钟)**

  

**目标：** 学习在 [Figma](https://www.figma.com/) 中安装、配置和定义 design tokens，使用 Tokens Studio 插件。

  

**安装与设置**

  

- 从 Figma Community 安装 “Tokens Studio for Figma” 插件。

- 在你的设计系统文件中运行该插件。

- **最佳实践：** 为你的 design tokens 创建一个专门的 Figma 文件，与你的组件库分开，使其成为设计决策的单一事实来源。

  

**定义和结构化 design tokens**

  

- 使用三层 token 结构：

- **第一层：Global/Core tokens：** 定义原始的、非语义化的值（例如，`blue-500: #3b82f6`）。这些应该是技术无关的。

- **第二层：Semantic/Alias tokens：** 将全局 tokens 映射到有意义的、特定于用例的名称（例如，`color.brand.primary: {blue-500}`）。这支持了主题化和特定平台的映射。

- **第三层：Component-specific tokens (可选)：** 为组件级别的属性定义 tokens（例如，`button.primary.background: {color.brand.primary}`）。这提供了最精细的控制。

- **W3C 合规性：** 配置 Tokens Studio 以 W3C DTCG 格式导出，以实现未来的兼容性。

  

**主题化和变量**

  

- 使用 Tokens Studio 通过定义不同的语义 token 值集来创建和管理主题（例如，亮色模式和暗色模式）。

- 解释如何使用花括号引用其他 tokens（例如，`{color.brand.primary}`）。

- 使用 “Export to Styles and Variables” 功能从你的 tokens 生成 Figma 变量，允许设计师在 Figma 组件中直接使用它们。

  

---

  

### **模块 3: 配置 Amazon Style Dictionary (45 分钟)**

  

**目标：** 学习安装和配置 Style Dictionary，将 tokens 转换为特定于平台的代码。

  

**设置开发环境**

  

- **要求：** 一个包含 Node.js 和代码编辑器的本地环境。

- **项目初始化：**

- 创建一个项目目录，并使用 `npm init -y` 进行初始化。

- 安装必要的包：`npm install style-dictionary @tokens-studio/sd-transforms -D`。

- **项目结构：** 为源 token 文件和输出的 `build` 目录创建一个文件夹结构（例如，`tokens/` 用于源文件，`build/` 用于输出）。

  

**编写 Style Dictionary 配置**

  

- 创建一个 `config.js` 文件来定义如何处理 tokens。

- 使用 `sd-transforms` 来预处理来自 Tokens Studio 的 W3C token 格式。

- 定义 `platforms` 以生成特定的文件格式（例如，`css`, `js`, `json`）。

- **配置示例：**

```javascript

import StyleDictionary from 'style-dictionary';

import { transforms, formats } from '@tokens-studio/sd-transforms';

  

const sd = StyleDictionary.extend({

// Process tokens from the tokens folder

source: ['tokens/**/*.json'],

// Use the official tokens-studio transforms

transforms,

platforms: {

css: {

transformGroup: 'css',

buildPath: 'build/css/',

files: [{

destination: 'variables.css',

format: 'css/variables'

}]

},

js: {

transformGroup: 'js/es6',

buildPath: 'build/js/',

files: [{

destination: 'tokens.js',

format: 'javascript/es6'

}]

}

}

});

  

sd.buildAllPlatforms();

```

  

**构建流程**

  

- 在 `package.json` 中添加一个构建脚本（例如，`"build": "node config.js"`）。

- 演示如何运行构建脚本以生成输出文件 (`npm run build`)。

  

---

  

### **模块 4: 自动化的设计到开发工作流 (45 分钟)**

  

**目标：** 将 Tokens Studio、[GitHub](https://github.com/) 和 Style Dictionary 集成到一个自动化的流程中。

  

**GitHub 集成**

  

- **Tokens Studio：** 配置 Tokens Studio 将 token 变更直接同步到指定的 GitHub 仓库。这确保了版本控制和单一事实来源。

- **操作步骤：**

1. 为你的 design tokens 创建一个专门的 GitHub repo。

2. 在 Tokens Studio 中设置 GitHub 同步。

3. 将你的初始 token 集从 Tokens Studio 推送到 repo。

  

**使用 GitHub Actions 自动化流程**

  

- **概念：** 解释 GitHub Actions 如何监听 token 仓库中的变更，并自动运行 Style Dictionary 构建过程。

- **工作流文件 (`.github/workflows/build-tokens.yml`)：**

- 在 `push` 到 `main` 分支时触发工作流。

- `Check out` 代码。

- 安装 Node.js 和依赖项。

- 运行 Style Dictionary 构建脚本。

- `Commit` 生成的文件 (`build/`) 并将它们 `push` 到仓库。

- **审查 Pull Requests：** 强调这种设置如何让开发者在 pull requests 中看到 token 变更和相应的代码更新，从而提高透明度和协作效率。

  

**在项目中的实施**

  

- 演示前端开发者如何使用生成的 token 文件。

- **Web (CSS)：** 将生成的 `variables.css` 文件导入到项目的主样式表中。

- **框架 (JS/TS)：** 将生成的 `tokens.js` 模块导入到项目中。

  

---

  

### **模块 5: 案例研究与扩展 (30 分钟)**

  

**目标：** 通过一个实践案例巩固学习，并讨论高级主题。

  

**主题化示例**

  

- 演练一个切换主题的例子。

- 设计师在 Tokens Studio 中进行更改。

- 他们将更改 `push` 到 GitHub。

- GitHub Action 自动更新代码。

- 开发者 `pull` 这些变更。

- 主题化会自动反映在产品中。

  

**高级主题**

  

- 讨论使用 **Style Dictionary filters** 为特定的 token 集创建单独的输出。

- 提及 **composite tokens** 及其好处。

- 简要提及将文档生成作为未来的一个步骤。

  

**课后作业**

  

- **设计师：** 在 Tokens Studio 中创建一个基础的 token 集，包含 global 和 semantic 层，并包括一个亮色和暗色主题。

- **开发者：**

- 设置一个带有 Style Dictionary 配置的 token 仓库。

- 集成 GitHub Action 以实现自动化构建。

- **团队：** 在一个来自 Tokens Studio 的 pull request 上进行协作，审查生成的代码，并将变更合并到项目中。

  

---

  

对于处理多维度的复杂主题（如亮色/暗色模式、品牌主题和情感主题转换），免费版的 **Tokens Studio + Amazon Style Dictionary 组合** 仍然是一个非常强大且可行的替代方案，但它需要更多的手动配置和工作流管理。

  

相比付费版的 Tokens Studio，免费方案的主要区别在于**自动化程度和便利性**。免费版没有内置的高级主题管理器，但可以通过巧妙地使用 `JSON` 文件和 **Style Dictionary** 的配置来实现同样的功能。

  

以下是基于免费方案处理复杂主题的最佳实践和替代工作流。

  

#### 1. 使用 Tokens Studio 组织多维主题数据

  

免费版 Tokens Studio 允许你创建多个“Token Sets”（令牌集），这是实现复杂主题的关键。

  

**工作流程**

  

1. **创建基础令牌集**：定义不可变的“核心”（Core）或“全局”（Global）令牌，例如 `$color.blue.500: #3b82f6`。

2. **创建模式令牌集**：为亮色和暗色模式创建单独的令牌集。例如：

- `mode-light.json`: 定义 `color.bg.default: {core.white}`。

- `mode-dark.json`: 定义 `color.bg.default: {core.black}`。

3. **创建品牌令牌集**：为不同的品牌创建单独的令牌集，覆盖模式令牌集中的值。例如：

- `brand-a.json`: 定义 `color.brand.primary: {core.blue.500}`。

- `brand-b.json`: 定义 `color.brand.primary: {core.red.500}`。

4. **创建情感主题令牌集**：为“情感”主题创建令牌集，可以覆盖品牌令牌。例如，一个“温馨”（warm）主题的令牌集可以调整颜色饱和度或色调。

5. **导出为 JSON 文件**：将所有这些令牌集导出到你的 GitHub 仓库中，每个令牌集都是一个独立的 JSON 文件。

  

#### 2. 使用 Amazon Style Dictionary 处理多维主题

  

Style Dictionary 的核心能力在于合并和转换 JSON 文件。你可以通过创建多个 Style Dictionary 配置来处理不同的主题组合。

  

**工作流程**

  

1. **定义 Style Dictionary 配置**：创建一个或多个 `config.json` 文件来指定 Style Dictionary 如何读取和合并你的令牌集。

2. **多配置构建**：使用不同的配置来生成不同的主题输出。例如，你可以创建多个脚本来构建：

- `npm run build:brand-a-light`: 读取 `core.json`, `mode-light.json`, `brand-a.json` 并生成 CSS 变量。

- `npm run build:brand-a-dark`: 读取 `core.json`, `mode-dark.json`, `brand-a.json` 并生成 CSS 变量。

3. **合并策略**：Style Dictionary 会深度合并所有来源文件，因此后读取的文件会覆盖先读取的文件中的同名令牌。这正是实现主题覆盖的关键。例如，`brand-a.json` 中的 `color.brand.primary` 会覆盖 `mode-light.json` 中可能存在的同名令牌。

4. **动态主题切换**：在前端代码中，你可以根据用户偏好或品牌设置，动态加载和应用不同的 CSS 文件。

  

#### 3. 开源替代方案：Penpot

  

如果你希望脱离 Figma 平台，Penpot 是一个完全免费和开源的替代方案，它原生支持设计令牌和主题管理。

  

**Penpot 的主题管理**

  

- **原生集成**：Penpot 将令牌作为其核心功能，而不是通过插件实现。

- **JSON 导入/导出**：你可以方便地通过 JSON 文件管理令牌。

- **多令牌集**：你可以创建多个令牌集来管理不同主题，例如亮色和暗色模式。

- **W3C 标准**：Penpot 深度支持 W3C 的设计令牌标准，确保可移植性和互操作性。

  

---

  

### **总结与选择建议**

  

|方案|优点|缺点|适用场景|

|---|---|---|---|

|**Tokens Studio（免费）+ Style Dictionary**|完全免费，使用 W3C 标准，强大的令牌处理能力，可与 GitHub 集成。|需要手动配置和管理多个令牌集及 Style Dictionary 构建脚本，自动化程度较低。|资源有限但技术实力较强的团队，对自动化和便利性要求不高的项目。|

|**Penpot（完全开源）**|完全免费，原生支持设计令牌和主题，无需插件。|需从 Figma 迁移，可能不适用于已深度绑定 Figma 工作流的团队。|寻求完全开源、免费的设计工具替代方案的团队，或新启动的项目。|

|**Tokens Studio（付费）**|内置高级主题管理器，自动化程度高，更方便管理多维主题和版本控制。|需要付费，不符合“免费方案为主”的需求。|预算充足，需要高效自动化和强大协作功能的团队。|