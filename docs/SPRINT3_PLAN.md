# Sprint 3 开发计划 - v1.3.0

**Sprint Goal**: 提升用户体验和代码质量  
**Version**: v1.3.0  
**Start Date**: 2025-10-04  
**Target End Date**: 2025-10-08  
**Total Story Points**: 13

---

## 🎯 Sprint 目标

本 Sprint 专注于用户体验优化和技术债务偿还，通过添加进度条、数据验证和自动化测试来提升工具的专业性和可靠性。

---

## 📋 Story 列表

### Story 2.3: 进度条显示 ✨

**Status**: To Do  
**Points**: 3  
**Priority**: High  
**Assignee**: Developer

#### User Story
As a 用户,  
I want 在批量生成文档时看到实时进度条和处理状态,  
so that 我能清楚了解任务进展和剩余时间。

#### Acceptance Criteria
- [ ] 使用 `tqdm` 库显示进度条
- [ ] 显示当前处理的文件名
- [ ] 显示处理进度百分比
- [ ] 显示预估剩余时间
- [ ] 完成后显示总耗时统计
- [ ] 支持 `--quiet` 模式（仅显示错误）
- [ ] 支持 `--verbose` 模式（详细日志）

#### Technical Design

**依赖添加**:
```txt
tqdm==4.66.1
```

**实现要点**:
1. 在 `batch` 命令中集成 tqdm
2. 创建进度条配置类
3. 支持不同的输出模式（quiet/normal/verbose）
4. 保留 JSON 输出兼容性

**示例输出**:
```bash
批量生成文档: 100%|██████████| 10/10 [00:15<00:00, 1.50s/file]
处理: lesson10.yml ✅

============================================================
批量生成完成!
  ✅ 成功: 10
  ❌ 失败: 0
  ⏱️ 总耗时: 15.2s
============================================================
```

#### Testing Strategy
- [ ] 测试进度条显示正确
- [ ] 测试 --quiet 模式
- [ ] 测试 --verbose 模式
- [ ] 测试错误情况下的进度条行为

**Estimated Time**: 2-3h

---

### Story 2.4: 数据验证功能 🔍

**Status**: To Do  
**Points**: 5  
**Priority**: High  
**Assignee**: Developer

#### User Story
As a 用户,  
I want 在生成文档前验证数据完整性,  
so that 我能提前发现数据问题，避免生成失败。

#### Acceptance Criteria
- [ ] 验证 YAML 文件格式是否正确
- [ ] 检查必需的键是否存在（基于模板占位符）
- [ ] 检测模板中未定义的数据键（警告）
- [ ] 提供清晰的错误信息和具体位置
- [ ] 支持 `--validate-only` 模式（仅验证不生成）
- [ ] 生成验证报告（JSON 格式）
- [ ] 支持批量验证模式

#### Technical Design

**核心类**:
```python
class DataValidator:
    def validate_yaml_syntax(self, file_path: Path) -> ValidationResult
    def validate_required_keys(self, data: dict, template_keys: set) -> ValidationResult
    def validate_batch(self, data_dir: Path, template: Path) -> BatchValidationResult
```

**验证流程**:
1. 语法验证 - YAML 是否可解析
2. 模板分析 - 提取所有占位符
3. 键值验证 - 检查必需键是否存在
4. 类型验证 - 基本类型检查（可选）

**输出格式**:
```json
{
  "success": false,
  "total_files": 10,
  "valid_files": 8,
  "invalid_files": 2,
  "errors": [
    {
      "file": "lesson5.yml",
      "type": "missing_key",
      "message": "缺少必需的键: 'teacher_name'",
      "severity": "error"
    },
    {
      "file": "lesson7.yml",
      "type": "extra_key",
      "message": "未使用的数据键: 'unused_field'",
      "severity": "warning"
    }
  ]
}
```

#### Testing Strategy
- [ ] 测试有效数据
- [ ] 测试缺少必需键
- [ ] 测试 YAML 语法错误
- [ ] 测试 --validate-only 模式
- [ ] 测试批量验证

**Estimated Time**: 3-4h

---

### Story 2.5: 单元测试框架 🧪

**Status**: To Do  
**Points**: 5  
**Priority**: Medium  
**Assignee**: Developer

#### User Story
As a 开发者,  
I want 拥有完整的自动化测试套件,  
so that 我能快速验证代码变更，防止回归问题。

#### Acceptance Criteria
- [ ] 添加 pytest 测试框架
- [ ] 核心功能单元测试覆盖率 > 80%
- [ ] 添加集成测试（端到端）
- [ ] 配置 CI 自动测试（可选）
- [ ] 测试文档和示例

#### Technical Design

**依赖添加**:
```txt
pytest==7.4.3
pytest-cov==4.1.0
```

**测试结构**:
```
tests/
├── __init__.py
├── conftest.py              # pytest 配置和 fixtures
├── test_core.py             # 核心功能测试
├── test_generator.py        # 文档生成测试
├── test_validator.py        # 数据验证测试
├── test_cli.py              # 命令行接口测试
├── fixtures/                # 测试数据
│   ├── template.docx
│   ├── valid_data.yml
│   └── invalid_data.yml
└── integration/             # 集成测试
    └── test_end_to_end.py
```

**关键测试用例**:
1. 占位符替换
2. 格式保留（字体、段落）
3. 表格处理
4. Markdown 渲染
5. 批量处理
6. 错误处理

**运行测试**:
```bash
# 运行所有测试
pytest

# 运行特定测试
pytest tests/test_generator.py

# 生成覆盖率报告
pytest --cov=. --cov-report=html
```

#### Testing Strategy
- [ ] 编写核心功能测试
- [ ] 编写边界条件测试
- [ ] 编写错误场景测试
- [ ] 验证测试覆盖率

**Estimated Time**: 4-5h

---

## 📊 Sprint 指标

### Velocity 预估
- **Planned Points**: 13
- **Team Capacity**: ~12-15h
- **Expected Velocity**: 10-13 points
- **Risk Buffer**: Medium (新功能较多)

### Quality Targets
| Metric | Target | Critical? |
|--------|--------|-----------|
| Test Coverage | >80% | ✅ Yes |
| Test Pass Rate | 100% | ✅ Yes |
| Format Accuracy | 100% | ✅ Yes |
| Performance | <5% degradation | ⚠️ Monitor |

---

## 🔄 Implementation Order

推荐按以下顺序实现，以最小化风险和依赖：

### Phase 1: 测试框架 (Day 1-2)
**Rationale**: 先建立测试基础设施，后续功能可以 TDD 方式开发

1. 添加 pytest 依赖
2. 创建测试目录结构
3. 编写核心功能的单元测试
4. 配置测试运行脚本

**Deliverable**: 可运行的测试套件，覆盖率 >60%

---

### Phase 2: 数据验证 (Day 2-3)
**Rationale**: 独立功能，不影响现有代码

1. 实现 DataValidator 类
2. 添加 --validate-only 选项
3. 集成到 batch 命令
4. 编写验证测试

**Deliverable**: 完整的数据验证功能

---

### Phase 3: 进度条显示 (Day 3-4)
**Rationale**: UI 增强，最后实现以避免影响核心逻辑测试

1. 添加 tqdm 依赖
2. 重构 batch 命令输出
3. 添加 --quiet 和 --verbose 选项
4. 测试不同输出模式

**Deliverable**: 友好的进度显示

---

## 🧪 Testing Strategy

### Unit Tests
- 每个新功能都有对应的单元测试
- 使用 fixtures 管理测试数据
- 测试正常流程和边界条件

### Integration Tests
- 端到端批量处理测试
- 验证 + 生成集成测试
- 错误恢复场景测试

### Manual Tests
- 大规模批量处理（100+ 文件）
- 性能基准测试
- 用户体验测试

---

## 📦 Dependencies

### New Dependencies
```txt
# Progress bar
tqdm==4.66.1

# Testing
pytest==7.4.3
pytest-cov==4.1.0
```

### Compatibility
- Python 3.7+
- 所有现有依赖保持不变

---

## 🚧 Risks & Mitigation

### Risk 1: 测试覆盖率不足
**Probability**: Medium  
**Impact**: Medium  
**Mitigation**: 
- 优先测试核心功能
- 代码审查强调测试
- 设置覆盖率门槛

### Risk 2: tqdm 影响 JSON 输出
**Probability**: Low  
**Impact**: High  
**Mitigation**:
- 保留 JSON 输出选项
- 测试输出兼容性
- 提供 --quiet 模式

### Risk 3: 数据验证性能影响
**Probability**: Low  
**Impact**: Low  
**Mitigation**:
- 使用缓存避免重复验证
- 提供可选验证模式
- 性能基准测试

---

## 📝 Definition of Done

每个 Story 必须满足：

- [ ] 功能实现完整，符合验收标准
- [ ] 单元测试编写且通过
- [ ] 代码符合项目规范
- [ ] 文档更新（README + CHANGELOG）
- [ ] 手动测试验证
- [ ] 无已知 bug

---

## 🎯 Sprint Success Criteria

Sprint 被认为成功，如果：

1. ✅ 至少完成 10/13 story points
2. ✅ 所有测试通过（100% pass rate）
3. ✅ 测试覆盖率 ≥ 80%
4. ✅ 无 P0/P1 bug
5. ✅ 文档完整更新

---

## 📅 Timeline

| Day | Focus | Deliverable |
|-----|-------|-------------|
| Day 1 | 测试框架搭建 | pytest 配置 + 基础测试 |
| Day 2 | 数据验证实现 | DataValidator 类 + 测试 |
| Day 3 | 数据验证集成 | CLI 集成 + 验证报告 |
| Day 4 | 进度条实现 | tqdm 集成 + 多模式输出 |
| Day 5 | 测试 + 文档 | 完整测试套件 + 文档更新 |

---

## 🔗 Related Documents

- [Sprint Progress](./SPRINT_PROGRESS.md) - 整体进度跟踪
- [PRD](./prd.md) - 产品需求
- [CHANGELOG](../CHANGELOG.md) - 版本历史

---

**Created**: 2025-10-04  
**Author**: Developer  
**Approved**: Pending PO Review  
**Status**: 📋 Ready for Development

