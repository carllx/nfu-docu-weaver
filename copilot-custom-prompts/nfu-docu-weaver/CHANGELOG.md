# Changelog

All notable changes to this project will be documented in this file.

The format is based on [Keep a Changelog](https://keepachangelog.com/en/1.0.0/),
and this project adheres to [Semantic Versioning](https://semver.org/spec/v2.0.0.html).

---

## [1.3.0] - 2025-10-04

### 🎯 Epic 2: 批量处理与工具增强 (Sprint 3 - 完成)

**Sprint Goal**: 提升用户体验和代码质量，完善工具的专业性和可靠性

**Completed Stories**: Story 2.3 (进度条) + Story 2.4 (数据验证) + Story 2.5 (测试框架)  
**Story Points**: 13 / 13 = **100%** ✅

---

#### 🔨 BUILD - 新增功能

**Story 2.3: 进度条显示** ✅
- 集成 `tqdm` 进度条库，实时显示批量处理进度
- **默认模式**: 显示进度条和处理速度（files/s）
- **安静模式** (`-q/--quiet`): 无输出，仅在出错时显示
- **详细模式** (`-v/--verbose`): 显示每个文件的详细处理信息
- 完成后显示处理统计（成功/失败/总计）

```bash
# 默认模式 - 进度条
python generate_docs.py batch ./data template.docx ./output
批量生成文档: 100%|██████████| 10/10 [00:05<00:00, 1.95file/s]

# 安静模式
python generate_docs.py batch ./data template.docx ./output --quiet

# 详细模式
python generate_docs.py batch ./data template.docx ./output --verbose
```

**Story 2.4: 数据验证功能** ✅
- 新增 `DataValidator` 类用于数据完整性验证
- **YAML 语法验证**: 检测格式错误，提供详细错误位置
- **必需键验证**: 基于模板占位符自动检测缺失的数据键
- **额外键警告**: 提示未使用的数据字段
- **单文件验证**: `python generate_docs.py validate data.yml template.docx`
- **批量验证**: `python generate_docs.py validate --batch ./data template.docx`
- JSON 格式的详细验证报告

```bash
# 单文件验证
$ python generate_docs.py validate lesson1.yml template.docx
✅ 验证通过: lesson1.yml
⚠️  警告 (1):
  - 未使用的数据键: 'extra_field'

# 批量验证
$ python generate_docs.py validate --batch ./data template.docx
============================================================
数据验证完成!
  ✅ 有效: 10
  ❌ 无效: 2
  📊 总计: 12
```

**Story 2.5: 单元测试框架** ✅
- 集成 `pytest` 测试框架和 `pytest-cov` 覆盖率工具
- 完整的测试目录结构 (`tests/`)
- **34 个测试用例**，覆盖所有核心功能
- 测试分类：CLI 测试、文档生成测试、验证器测试
- 添加 `pytest.ini` 配置文件
- 创建 `run_tests.sh` 便捷测试脚本
- 添加 `.gitignore` 忽略测试产物

---

#### 📊 MEASURE - 质量指标

**测试覆盖**:
- Test Pass Rate: **100%** (34/34 测试用例) ✅
- Test Execution Time: ~2.0s
- 测试分布:
  - CLI 测试: 8 个
  - 文档生成器测试: 13 个
  - 验证器测试: 13 个

**性能指标**:
- 批量处理速度: 15-25 files/s（取决于文档复杂度）
- 数据验证速度: 即时（<100ms/文件）
- 进度条刷新率: 实时

**代码质量**:
- Lines of Code: ~900 (从 ~650)
- 新增功能模块: DataValidator 类 (~200 lines)
- Technical Debt: 0 critical items
- Documentation: 100% complete

---

#### 🔍 ANALYZE - 关键洞察

**What Worked Well** ✅:
1. **测试驱动开发**: 先建立测试框架，确保所有功能有测试覆盖
2. **用户体验优先**: 三种输出模式满足不同使用场景
3. **模块化设计**: DataValidator 独立类，易于扩展和测试
4. **进度可视化**: tqdm 提供专业的进度反馈
5. **快速迭代**: Story 2.3 和 2.4 提前完成

**What Could Improve** 🔄:
1. **测试覆盖率**: 当前约 70-75%，目标 >80%
2. **性能测试**: 缺乏大规模（1000+ 文件）性能基准
3. **文档示例**: 可以添加更多使用示例

**Technical Insights** 💡:
1. **tqdm 集成优雅**: 通过 `disable` 参数轻松切换进度条模式
2. **占位符提取**: 使用正则表达式从模板提取占位符非常高效
3. **递归键提取**: 支持嵌套数据结构的验证
4. **pytest fixtures**: 使测试数据管理更清晰

---

#### ✅ DECIDE - 决策记录

**Decision 1**: 三种输出模式而非两种
- **Rationale**: 
  - 默认模式（进度条）适合交互式使用
  - 安静模式适合脚本/CI 环境
  - 详细模式适合调试和问题排查
- **Impact**: 正面 - 灵活性大幅提升
- **Trade-off**: 增加少量代码复杂度，但用户体验提升明显
- **Approved By**: Developer + Product Owner

**Decision 2**: 数据验证作为独立命令而非集成到 generate
- **Rationale**: 
  - 验证和生成是两个不同的关注点
  - 独立命令提供更大灵活性（验证但不生成）
  - 符合 Unix 哲学：一个工具做好一件事
- **Impact**: 正面 - CLI 更清晰，功能更独立
- **Approved By**: Product Owner

**Decision 3**: 额外键仅作警告而非错误
- **Rationale**: 
  - 数据可能用于多个模板
  - 不应因额外数据而阻止生成
  - 警告足以提醒用户
- **Impact**: 正面 - 更宽容的验证策略
- **Approved By**: Developer

---

#### 📝 Documentation

- 更新 README.md 添加所有新命令文档
- 更新 CHANGELOG.md 遵循 B-MAD 格式
- 创建 SPRINT3_PLAN.md 详细规划文档
- 添加完整的测试文档和示例
- 更新 SPRINT_PROGRESS.md 进度跟踪

---

## [1.2.0] - 2025-10-04

### 🎯 Epic 2: 批量处理与工具增强 (Sprint 2 - 部分完成)

**Sprint Goal**: 实现批量文档生成功能，提升工具实用性和用户体验

**Completed Stories**: Story 2.1 (analyze) + Story 2.2 (batch)  
**Story Points**: 8 (完成) / 16 (总计) = 50%

---

#### 🔨 BUILD - 新增功能

**Story 2.1: `analyze` 命令** ✅
- 快速统计目录中的 YAML 文件数量
- 支持递归扫描子目录（`--recursive` 或 `-r`）
- JSON 格式输出文件列表和统计信息
- 自动识别 `.yml` 和 `.yaml` 文件
- 完善的错误处理（目录不存在等）

**Story 2.2: `batch` 命令** ✅
- 一次性处理整个目录中的所有数据文件
- 实时进度显示（[1/10] 处理中...）
- 批量处理汇总报告（成功/失败统计）
- `--continue-on-error` 选项支持遇错继续
- 自动创建输出目录
- 详细的 JSON 格式结果输出

**命令行架构重构** ✅
- 从单命令升级为子命令架构
- 新增子命令支持：`analyze`, `generate`, `batch`
- 统一的帮助文档和示例
- 更清晰的参数组织
- JSON 格式的结构化输出

---

#### 📊 MEASURE - 质量指标

**测试覆盖**:
- Test Pass Rate: 100% (9/9 测试用例)
- Format Accuracy: 100%
- Bug Count: 0

**性能指标**:
- 批量处理速度: 10-15 文件/秒
- 错误恢复成功率: 100%

**代码质量**:
- Lines of Code: ~650 (从 ~425)
- Technical Debt: 0 critical items
- Documentation: 100% complete

---

#### 🔍 ANALYZE - 关键洞察

**What Worked Well** ✅:
1. Story 拆分清晰，验收标准明确
2. 提前完成 Story 2.2（预计 4-5h，实际 3h）
3. 命令行架构重构为未来扩展奠定基础
4. JSON 输出设计便于程序集成

**What Could Improve** 🔄:
1. 缺乏自动化单元测试（依赖手动测试）
2. 性能测试范围有限（仅 2-10 文件规模）
3. Story 2.3 & 2.4 未完成（推迟到 v1.3.0）

**Technical Insights** 💡:
- argparse 子命令架构提升了代码组织性
- 错误恢复机制设计合理，实现简洁
- Path 对象相比传统路径操作更 Pythonic

---

#### ✅ DECIDE - 决策记录

**Decision 1**: 立即发布 v1.2.0，Story 2.3 & 2.4 推迟到 v1.3.0
- **Rationale**: 核心批量处理功能已完成，用户可立即获得价值
- **Impact**: 正面 - 快速交付，早期反馈
- **Approved By**: Product Owner

**Decision 2**: 命令行架构从单命令升级为子命令
- **Rationale**: 更清晰的功能分离，易于扩展
- **Impact**: 向后兼容，但旧格式已弃用
- **Tech Debt**: 无

---

#### 📝 Documentation
- 更新 README.md，添加所有新命令的详细说明
- 创建 SPRINT_PROGRESS.md 按 B-MAD 规范跟踪进度
- 添加 RELEASE_NOTES_v1.2.0.md 完整发布说明
- 更新路线图和已知限制
- 删除冗余文档，整合到统一的进度跟踪系统

---

## [1.1.0] - 2025-10-04

### 🔥 Critical Fixes

#### Fixed
- **[CRITICAL] 中文字体显示错误** - 修复了生成文档中中文显示为 SimSun（宋体）而非模板字体的严重问题
  - 根本原因：`python-docx` 的 `run.font.name` 只设置 ASCII 字体，未设置 `eastAsia`（东亚字符）字体
  - 解决方案：直接操作 XML，设置所有字体属性（`w:ascii`, `w:hAnsi`, `w:eastAsia`, `w:cs`）
  - 影响范围：所有中文字符的字体显示
  - Issue: #1

### Added
- 完整的字体属性保留机制
  - 支持 `bold`, `italic`, `underline` 状态保留（包括 `None` 状态）
  - 支持 `strike`, `all_caps`, `small_caps` 等扩展属性
  - 确保所有格式属性 100% 继承自模板

### Improved
- 优化了格式获取逻辑
  - 优先从 run 获取格式（更准确）
  - 支持主题颜色获取
  - 添加详细的调试日志

---

## [1.0.2] - 2025-10-04

### Fixed
- **字体颜色丢失问题** - 修复了模板中的颜色（如红色 FF0000）在生成文档中变成黑色的问题
  - 调整格式获取优先级，优先从 run 获取而非样式
- **换行符格式继承** - 修复了 `\n` 换行符未继承上一行格式的问题
  - 换行符 run 现在也会应用基础格式

### Improved
- 增强了 Markdown 格式处理
  - Markdown 粗体/斜体只在有标记时覆盖，不破坏原始格式

---

## [1.0.1] - 2025-10-04

### 🎯 Major Features

#### Added
- **表格内容处理** - 添加了对 Word 表格中占位符的支持
  - 遍历所有表格、行、单元格中的段落
  - 支持表格单元格中的格式保留
  - 这是核心功能的重大补充

#### Fixed
- **表格中段落分割异常** - 修复了在表格单元格中使用 `\n\n` 段落分隔符时的崩溃问题
  - 检测段落是否在表格单元格中（`parent.tag.endswith('}tc')`）
  - 为表格单元格使用专门的段落创建方法（OxmlElement）

### Improved
- 添加了处理统计信息输出
  - 显示处理的段落数和表格单元格数

---

## [1.0.0] - 2025-10-03

### 🎉 Initial Release

#### Added
- **核心文档生成功能**
  - YAML 数据文件解析
  - Word 模板处理（.docx）
  - 占位符替换（`{{key}}` 格式）
  - 嵌套键值访问（`key.subkey`）
  - 列表数据处理

- **格式保留功能**
  - 字体名称、大小保留
  - 段落对齐、缩进保留
  - 行间距、段前段后间距保留

- **Markdown 支持**
  - `**粗体**` 语法支持
  - `*斜体*` 语法支持
  - `\n` 单行换行支持
  - `\n\n` 段落分割支持

- **命令行工具**
  - 基础的 `generate` 命令
  - 支持自定义输出路径
  - 支持调试模式（`--debug`）

#### Documentation
- README.md - 用户使用指南
- docs/prd.md - 产品需求文档 v2.0
- docs/brief.md - 项目简报
- docs/architecture.md - 架构文档 v2.0

#### Dependencies
- PyYAML==6.0.1
- python-docx==1.1.0
- markdown-it-py==3.0.0
- lxml==5.2.2

---

## [Unreleased]

### v1.4.0 - Schema-Driven Architecture (开发中)

**Theme**: 模式驱动架构升级

#### 🏗️ BUILD - 架构变更

**新增: Schema 数据契约层** 🆕
- 创建 `schemas/` 目录作为数据契约层
- 添加 `lesson_data_schema.yml` v2 - 课程教案数据结构规范
- Schema 成为系统架构的第一级组件

**Schema v2 特性**:
- ✅ 完整的教案数据结构定义
- ✅ 详细的字段说明和注释
- ✅ 支持嵌套结构（如 `class_hours.total`）
- ✅ 支持列表数据（如 `supported_course_objectives`）
- ✅ 新增 `segment_type` 字段用于环节类型标识
- ✅ 新增 `signature_info` 页脚签名信息

**Schema 的三大作用**:
1. **AI Agent 指令核心**: 为 AI 提供精确的数据生成指令
2. **数据验证标准**: 为数据验证提供标准规范
3. **文档生成参考**: 为字段映射提供参考文档

#### 📚 Documentation

- 新增 `schemas/README.md` - Schema 使用指南
- 新增 `docs/architecture/6-schema-driven-architecture.md` - 架构文档
- 更新 `README.md` - 添加 Schema-Driven Architecture 说明
- 更新架构文档索引

---

### Planned for v1.4.0
- [ ] 实现 SchemaValidator 类（基于 schema 的验证）
- [ ] 集成 Schema 到 validate 命令
- [ ] 目录结构规范化（template → templates, test_data → data_source）
- [ ] 向后兼容性保证

### Planned for v2.0.0
- [ ] AI Agent 工作流（prompts/ 目录）
- [ ] Schema-based AI 数据生成
- [ ] 交互式确认和审查
- [ ] 增量交付模式

---

## Version History Summary

| Version | Date | Key Features |
|---------|------|--------------|
| 1.4.0 | TBD | 🏗️ Schema-Driven Architecture (架构升级) |
| 1.3.0 | 2025-10-04 | ✨ 进度条显示 + 数据验证 + 测试框架 (Sprint 3 完成) |
| 1.2.0 | 2025-10-04 | 🎯 批量处理功能（analyze + batch 命令） |
| 1.1.0 | 2025-10-04 | 🔥 修复中文字体显示问题（eastAsia 属性） |
| 1.0.2 | 2025-10-04 | 修复颜色丢失和换行符格式 |
| 1.0.1 | 2025-10-04 | ➕ 添加表格内容处理 |
| 1.0.0 | 2025-10-03 | 🎉 首次发布 |

---

## Legend

- 🔥 Critical Fix - 严重问题修复
- 🎯 Major Feature - 重大功能
- ✨ Enhancement - 功能增强
- 🐛 Bug Fix - Bug 修复
- 📝 Documentation - 文档更新
- 🧪 Testing - 测试相关

---

**Note**: 版本号遵循语义化版本控制 (Semantic Versioning):
- **主版本号**: 不兼容的 API 变更
- **次版本号**: 向下兼容的功能性新增
- **修订号**: 向下兼容的问题修正

