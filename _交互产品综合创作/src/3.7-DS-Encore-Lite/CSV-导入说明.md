# CSV 导入 Figma Variables 快速指南

## 📄 文件

使用 **`design-tokens-simple.csv`** - 包含 25 个基础设计令牌

## 📋 CSV 格式说明

正确的格式（使用 **Tab 分隔符**）：
```
Name          Type     Mode 1
brand/primary COLOR    #2563EB
spacing/xs    FLOAT    4
font-family/base STRING Inter
```

**关键点：**
- ✅ 列结构：`Name | Type | Mode 1`
- ✅ 使用 Tab（制表符）分隔，不是逗号
- ✅ 数字类型用 `FLOAT`（不是 NUMBER）
- ✅ 颜色类型用 `COLOR`
- ✅ 文本类型用 `STRING`

## 🚀 导入步骤

### 1. 安装插件
- 在 Figma 中按 `Cmd/Ctrl + /`
- 搜索 "**Sheet to Variables**"
- 点击 Save

### 2. 导入 CSV
1. 运行 Sheet to Variables 插件
2. 上传 `design-tokens-simple.csv`
3. 点击 Import

### 3. 验证结果

导入后会创建 **4 个 Collections**：

#### 📁 Colors (9 个变量)
```
📁 brand/
   ├─ primary (#2563EB 科技蓝)
   └─ accent (#1ED760 品牌绿)
📁 success/
   └─ green (#1FBD5C)
📁 warning/
   └─ orange (#F59E0B)
📁 error/
   └─ red (#DC2626)
📁 bg/
   └─ base (#F9FAFB)
📁 text/
   ├─ primary (#171717)
   └─ secondary (#737373)
📁 code/
   └─ bg (#1E1E1E)
```

#### 📁 Spacing (6 个变量)
```
📁 spacing/
   ├─ xs: 4
   ├─ sm: 8
   ├─ md: 16
   ├─ lg: 24
   ├─ xl: 32
   └─ 2xl: 48
```

#### 📁 Typography (7 个变量)
```
📁 font-family/
   ├─ base: Inter
   └─ code: JetBrains Mono
📁 font-size/
   ├─ h1: 48
   ├─ h2: 32
   ├─ h3: 24
   ├─ body: 16
   └─ code: 14
```

**注意**：所有变量会自动归到一个 Collection 中，你可以在导入后手动调整 Collection 分组。

#### 📁 BorderRadius (3 个变量)
```
📁 radius/
   ├─ sm: 4
   ├─ md: 8
   └─ lg: 12
```

---

## ✅ 关键点

### 🔤 命名使用斜杠 `/`
- ✅ CSV 中: `brand/primary` → Figma 中自动创建文件夹
- ❌ 如果用: `brand-primary` → 扁平列表，无层级

### 📤 导出后自动转换
- Figma: `brand/primary`
- JSON: `brand.primary`
- CSS: `--brand-primary`

---

## ⚠️ 注意事项

1. **字体变量可能需手动创建**
   - 如果插件不支持 STRING 类型
   - 手动在 Typography Collection 中创建：
     - `font-family/base` = `Inter`
     - `font-family/code` = `JetBrains Mono`

2. **单位说明**
   - Spacing 的单位是纯数字（4 表示 4px）
   - Figma 会自动按当前文档单位显示

---

## 🎯 就这么简单！

导入后，你的 Figma 中就有了：
- ✅ 25 个设计令牌
- ✅ 清晰的文件夹层级
- ✅ 可以立即在设计中使用

无需手动一个个创建！🎉

