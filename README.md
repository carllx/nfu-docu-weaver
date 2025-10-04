# Docu-Weaver Agent

`Docu-Weaver` 是一个高效的自动化文档生成工具。它通过读取结构化的数据文件（如 YAML）和 Word 文档模板，批量生成内容各异但格式统一的最终文档，旨在将专业人员从繁琐、重复的文档撰写工作中解放出来。

---

## 需求

- Python 3.7+

## 安装

1. 克隆本项目仓库。
2. 在项目根目录下，通过以下命令安装所需的依赖库：

```bash
pip install -r requirements.txt
```

## 使用方法

`Docu-Weaver` 通过 `generate_docs.py` 脚本提供服务，该脚本包含三个主要命令：`analyze`、`generate` 和 `batch`。

### 1. `analyze` - 分析数据文件

此命令用于快速统计一个目录中包含的 `.yml` 或 `.yaml` 数据文件的数量。

**命令格式**:
```bash
python generate_docs.py analyze <目录路径> [--recursive]
```

**参数说明**:
- `<目录路径>`: 要分析的目录
- `--recursive` 或 `-r`: 递归扫描子目录（可选）

**示例**:
```bash
# 分析当前目录
python generate_docs.py analyze ./test_data

# 递归分析所有子目录
python generate_docs.py analyze ./data --recursive
```

**输出示例**:
```json
{
  "success": true,
  "file_count": 15,
  "files": ["lesson1.yml", "lesson2.yml", ...]
}
```

### 2. `generate` - 生成单个文档

此命令使用单个数据文件和模板文件来生成一份最终文档。

**工作原理**:

脚本会读取指定的 Word 模板 (`.docx`)，查找所有 `{{key}}` 格式的占位符，并将其替换为数据文件 (`.yml`) 中对应的 `key` 的值。

**命令格式**:
```bash
python generate_docs.py generate <数据文件> <模板文件> <输出目录> [选项]
```

**参数说明**:
- `<数据文件>`: YAML数据文件路径
- `<模板文件>`: Word模板文件路径
- `<输出目录>`: 输出目录路径
- `-o, --output`: 指定输出文件完整路径（可选）
- `--debug`: 启用调试模式（可选）

**示例**:
```bash
# 基本用法
python generate_docs.py generate test_data/lesson1.yml template.docx output/

# 指定输出文件名
python generate_docs.py generate data/lesson1.yml template.docx output/ -o output/my_lesson.docx
```

**输出示例**:
```
文档已成功生成: output/lesson1.docx
  - 处理段落: 1
  - 处理表格单元格: 5
{"success": true, "output_path": "output/lesson1.docx"}
```

### 3. `batch` - 批量生成文档 🆕

此命令可以一次性处理整个目录中的所有数据文件，批量生成多个文档。

**命令格式**:
```bash
python generate_docs.py batch <数据目录> <模板文件> <输出目录> [选项]
```

**参数说明**:
- `<数据目录>`: 包含多个YAML文件的目录
- `<模板文件>`: Word模板文件路径
- `<输出目录>`: 输出目录路径
- `--continue-on-error`: 遇到错误时继续处理其他文件（可选）
- `--debug`: 启用调试模式（可选）

**示例**:
```bash
# 批量生成所有文档
python generate_docs.py batch ./test_data ./template.docx ./output

# 遇错继续处理
python generate_docs.py batch ./data ./template.docx ./output --continue-on-error
```

**输出示例**:
```
开始批量生成文档...
总共发现 2 个数据文件
------------------------------------------------------------

[1/2] 处理: lesson1.yml
  ✅ 成功: output/lesson1.docx

[2/2] 处理: lesson2.yml
  ✅ 成功: output/lesson2.docx

============================================================
批量生成完成!
  ✅ 成功: 2
  ❌ 失败: 0
  📊 总计: 2
============================================================
```

## ✅ 已实现功能 (v1.2.0)

### 核心功能
- ✅ **完整的格式保留**: 100% 保留模板中的所有样式
  - 字体名称、大小、颜色
  - **中文字体正确显示**（修复 eastAsia 属性）
  - 粗体、斜体、下划线等文本修饰
  - 段落对齐、缩进、行间距
- ✅ **表格支持**: 支持表格单元格中的占位符替换
- ✅ **Markdown 渲染**: 支持 `**粗体**` 和 `*斜体*` 语法
- ✅ **多段落支持**: 支持 `\n` 和 `\n\n` 换行符
- ✅ **嵌套数据**: 支持 `key.subkey` 形式的嵌套访问
- ✅ **列表数据**: 自动将列表转换为换行分隔的文本

### 批量处理功能 🆕 (v1.2.0)
- ✅ **analyze 命令**: 快速统计目录中的数据文件数量
- ✅ **batch 命令**: 一次性批量生成多个文档
- ✅ **错误恢复**: 支持 `--continue-on-error` 选项
- ✅ **进度显示**: 实时显示处理进度和结果统计
- ✅ **JSON输出**: 所有命令支持结构化JSON输出

### 已知限制
- 数据格式仅支持 YAML（JSON/CSV 支持计划在未来版本）

## 📝 项目文档

### 核心文档
- 📋 [PRD - 产品需求文档](docs/prd.md)
- 🏗️ [Architecture - 架构文档](docs/architecture/index.md)
- 📊 [Sprint Progress - 进度跟踪](docs/SPRINT_PROGRESS.md)
- 📝 [CHANGELOG - 版本历史](CHANGELOG.md)

### 测试验证
**验证通过的测试用例** (100% Pass Rate):
- ✅ 普通段落格式保留 (100%)
- ✅ 表格单元格格式保留 (100%)
- ✅ 多行文本格式一致性 (100%)
- ✅ Markdown 格式渲染 (100%)
- ✅ 中文字体正确显示 (100%)

详见 [Sprint Progress](docs/SPRINT_PROGRESS.md#quality-metrics)

## 🚀 未来改进 (路线图)

### V1.3.0 - 用户体验优化 (计划中)
- **进度条**: 使用 tqdm 库显示实时进度条
- **数据验证**: 生成前验证数据完整性
- **单元测试**: 完整的测试套件
- **错误日志**: 详细的错误日志和调试信息

### V2.0.0 - Agent 工作流
- **交互式确认**: 生成前确认工作计划
- **增量交付**: 一次一份的生成和审查流程
- **智能验证**: 自动检查数据完整性
- **LLM 集成**: 与大语言模型深度集成

### V3.0.0 - 扩展支持
- **支持更多数据格式**: JSON, CSV, Excel 等
- **支持更多模板格式**: Markdown, HTML 模板
- **高级数据处理**: 循环、条件判断、数据转换
- **模板市场**: 预置常用模板库
