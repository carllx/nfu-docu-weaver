📐 Design Token Registry (课件设计令牌注册表)  

⚠️ **重要命名规范说明** ⚠️

此文档展示的是**导出后的代码格式**（使用连字符 `-`）。

但在 **Figma Variables 中实际创建时**，应使用**斜杠 `/`** 创建层级结构：
- ✅ 推荐: `brand/primary` → 在 Figma 中自动创建文件夹
- ❌ 不推荐: `brand-primary` → 扁平列表，难以管理

**导出后自动转换：**
- Figma: `color/text/primary`
- JSON: `color.text.primary`
- CSS: `--color-text-primary`

详见已更新的文档：
- `docs/teaching-manual-v2-critical.md` (第 392-433 行)
- `docs/figma-courseware-plan.md` (第 81 行)

---

## 🚀 快速导入方式：使用 CSV 批量创建

已创建 **CSV 文件**用于批量导入：
- 📄 文件位置：`design-tokens-simple.csv` （25 个基础令牌）
- 📖 快速指南：`CSV-导入说明.md`

**导入步骤：**
1. 安装 **Sheet to Variables** 插件
2. 在 Figma 中运行插件
3. 上传 `design-tokens-simple.csv` 文件
4. 自动创建 25 个变量，包含完整层级结构

**优势：**
- ✅ 一次性创建所有代币（节省 90% 时间）
- ✅ 使用斜杠 `/` 自动创建文件夹层级
- ✅ CSV 文件可版本控制
- ✅ 精简实用，只包含必需的令牌

---

颜色令牌 (Color Tokens)  

- brand-primary: #2563EB (科技蓝)
- brand-accent: #1ED760 (品牌绿)
- success-green: #1FBD5C
- warning-orange: #F59E0B
- error-red: #DC2626
- bg-base: #F9FAFB (浅灰背景)
- text-primary: #171717 (深灰文本)
- text-secondary: #737373
- code-bg: #1E1E1E (代码背景)

  
间距令牌 (Spacing Tokens)  

- xs: 4px
- sm: 8px
- md: 16px
- lg: 24px
- xl: 32px
- 2xl: 48px

  
字体令牌 (Typography Tokens)  

- font-family-base: Inter
- font-family-code: JetBrains Mono (需手动设置)
- font-size-h1: 48px
- font-size-h2: 32px
- font-size-h3: 24px
- font-size-body: 16px
- font-size-code: 14px

  
圆角令牌 (Border Radius)  

- radius-sm: 4px
- radius-md: 8px
- radius-lg: 12px

  
---技术债务标记: 此注解为临时方案，待 MCP API 支持 Variables 后迁移。