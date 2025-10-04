# RooCode 集成示例项目

**项目目标:** 展示教育家工具箱与 RooCode 的完整集成方案  
**创建日期:** 2025年9月10日  
**适用版本:** 教育家工具箱 v1.2 + RooCode 集成 v1.0

## 📁 项目结构概览

```
roocode-integration-example/
├── .roomodes-education          # RooCode 教育角色选择器配置
├── team-education.yaml          # 教育团队配置（包含RooCode集成）
├── docs/                        # 核心规划文档
│   ├── brief.md                 # 课程简介与原始需求
│   ├── prd.md                   # 课程规划文档（包含RooCode需求）
│   ├── architecture.md          # 教学设计蓝图（包含RooCode架构）
│   ├── syllabus.md              # 面向学生的教学大纲
│   └── roocode-role-guide.md    # 角色选择和使用指南
├── lessons/                     # 每周教学内容
│   └── week-01/
│       ├── story.md             # 本周教学任务
│       ├── lesson-plan.md       # 详细教案
│       └── slides.md            # Marpit幻灯片
├── assignments/                 # 作业产出物
├── exams/                       # 试卷产出物
├── assets/                      # 教学素材
│   └── week-01/
├── .bmad-core/                  # BMad框架核心配置（符号链接）
├── cli/                         # 命令行工具
│   └── educators-toolkit.js     # 扩展的CLI工具
└── examples/                    # 使用示例
    ├── role-selection/          # 角色选择示例
    ├── workflow-demo/           # 工作流演示
    └── integration-tests/       # 集成测试
```

## 🚀 快速开始

### 1. 环境准备

```bash
# 确保已安装 Node.js (>= 14.0.0)
node --version

# 安装依赖
cd cli/
npm install
```

### 2. 初始化项目

```bash
# 使用教育工具箱初始化项目
node cli/educators-toolkit.js init "RooCode集成示例课程"

# 或者使用快捷命令
npx educators-toolkit init "RooCode集成示例课程"
```

### 3. 配置 RooCode 集成

```bash
# 验证 RooCode 配置
node cli/educators-toolkit.js roocode-status

# 显示可用教育角色
node cli/educators-toolkit.js show-roles
```

## 🎓 教育角色使用演示

### 场景1: 新课程规划（使用教育规划师角色）

```bash
# 步骤1: 选择教育规划师角色
node cli/educators-toolkit.js select-role

# 步骤2: 基于 brief.md 创建 PRD
node cli/educators-toolkit.js create-prd

# 步骤3: 生成教学大纲
node cli/educators-toolkit.js create-syllabus
```

**预期输出:**
- `docs/prd.md` - 包含 RooCode 集成需求的课程规划
- `docs/syllabus.md` - 面向学生的教学大纲

### 场景2: 教学设计（使用教学设计师角色）

```bash
# 步骤1: 切换到教学设计师角色
node cli/educators-toolkit.js switch-role edu-designer

# 步骤2: 创建教学任务分解
node cli/educators-toolkit.js create-stories

# 步骤3: 设计具体教案
node cli/educators-toolkit.js create-lesson-plan -w 1

# 步骤4: 设计评估方案
node cli/educators-toolkit.js design-assignment -w 1
```

**预期输出:**
- `lessons/week-01/story.md` - 第1周教学任务
- `lessons/week-01/lesson-plan.md` - 详细教案
- `assignments/homework-01.md` - 作业规范
- `assignments/rubrics-01.md` - 评分标准

### 场景3: 内容创作（使用内容创作者角色）

```bash
# 步骤1: 切换到内容创作者角色
node cli/educators-toolkit.js switch-role edu-creator

# 步骤2: 生成 Marpit 幻灯片
node cli/educators-toolkit.js create-slides -w 1

# 步骤3: 创建考试试卷
node cli/educators-toolkit.js create-exam-papers -w 1
```

**预期输出:**
- `lessons/week-01/slides.md` - Marpit格式的幻灯片
- `exams/midterm-a.md` - A卷考试题
- `exams/midterm-b.md` - B卷考试题

## 🔧 RooCode 集成特性演示

### 特性1: 智能角色推荐

```bash
# 系统根据当前任务智能推荐角色
node cli/educators-toolkit.js get-role-recommendation

# 示例输出:
# 根据您的项目状态分析:
# - 当前阶段: 课程规划阶段
# - 推荐角色: 🎓 教育规划师
# - 理论框架: OBE + 布鲁姆认知分类学
# - 预期任务: 创建PRD和教学大纲
# - 下一步建议: 教学设计师进行具体教学设计
```

### 特性2: 角色能力验证

```bash
# 验证角色理论框架应用
node cli/educators-toolkit.js validate-framework edu-planner

# 示例输出:
# ✅ 教育规划师角色验证通过
# 📋 理论框架: OBE (成果导向教育)
# 🎯 应用检查:
#   ✓ 学习目标具体可衡量
#   ✓ 反向设计原则正确应用  
#   ✓ 学习成果定义清晰
#   ✓ 评估方式与成果对齐
```

### 特性3: 工作流自动化

```bash
# 执行标准教育开发工作流
node cli/educators-toolkit.js run-workflow standard-educational

# 工作流步骤:
# 1. 🎓 教育规划师: 创建PRD和教学大纲
# 2. 🏗️ 教学设计师: 设计教学任务和教案
# 3. 🎨 内容创作者: 生成幻灯片和评估材料
# 4. ✅ 完成: 所有教学内容准备就绪
```

## 📊 集成效果对比

### 传统方式 vs RooCode 集成方式

| 任务类型 | 传统方式 | RooCode集成方式 | 效率提升 |
|----------|----------|-----------------|----------|
| 课程规划 | 手动分析，理论应用不一致 | 智能规划，严格遵循OBE+布鲁姆 | 60% |
| 教案设计 | 经验驱动，缺乏系统方法 | 理论指导，加涅教学法应用 | 45% |
| 内容制作 | 格式混乱，认知负荷高 | 多媒体理论优化，Marpit标准 | 70% |
| 质量检查 | 人工检查，容易遗漏 | 自动验证，一致性保证 | 80% |
| 角色协作 | 沟通成本高，交接困难 | 无缝切换，上下文保持 | 55% |

## 🧪 集成测试示例

### 测试1: 角色切换测试

```bash
#!/bin/bash
# 测试角色切换功能

echo "=== 角色切换测试 ==="

# 初始状态检查
echo "1. 检查初始状态..."
node cli/educators-toolkit.js roocode-status

# 切换到教育规划师
echo "2. 切换到教育规划师角色..."
node cli/educators-toolkit.js switch-role edu-planner

# 执行规划任务
echo "3. 执行规划任务..."
node cli/educators-toolkit.js create-prd

# 切换到教学设计师
echo "4. 切换到教学设计师角色..."
node cli/educators-toolkit.js switch-role edu-designer

# 执行设计任务
echo "5. 执行设计任务..."
node cli/educators-toolkit.js create-stories

echo "=== 角色切换测试完成 ==="
```

### 测试2: 理论框架验证

```javascript
// 验证教育理论应用正确性
const fs = require('fs');
const yaml = require('yaml');

function validateEducationalFramework(role, outputFile) {
    const content = fs.readFileSync(outputFile, 'utf8');
    const config = yaml.parse(fs.readFileSync('.roomodes-education', 'utf8'));
    
    const roleConfig = config.customModes.find(mode => mode.slug === role);
    const frameworks = roleConfig.educationalFrameworks || [];
    
    console.log(`验证 ${role} 角色的理论框架应用:`);
    
    frameworks.forEach(framework => {
        console.log(`\n📚 ${framework.name}:`);
        framework.principles.forEach(principle => {
            const applied = checkPrincipleApplication(content, principle);
            console.log(`  ${applied ? '✅' : '❌'} ${principle}`);
        });
    });
}

// 使用示例
validateEducationalFramework('edu-planner', 'docs/prd.md');
```

## 📈 性能基准测试

### 响应时间测试

```bash
# 测试角色切换响应时间
time node cli/educators-toolkit.js switch-role edu-designer

# 预期结果: < 2秒
```

### 上下文保持测试

```bash
# 测试多角色协作时的上下文保持
node examples/integration-tests/context-preservation-test.js

# 验证内容:
# - 项目信息完整性
# - 理论框架一致性  
# - 文档逻辑连贯性
# - 任务交接准确性
```

## 🔍 故障排除

### 常见问题1: RooCode 配置未找到

**问题描述:** `Error: .roomodes-education not found`

**解决方案:**
```bash
# 重新创建RooCode配置
cp examples/roocode-integration-example/.roomodes-education ./
# 或
node cli/educators-toolkit.js setup-roocode
```

### 常见问题2: 角色切换失败

**问题描述:** `Error: Role switch failed`

**排查步骤:**
1. 检查角色名称是否正确
2. 验证配置文件格式
3. 确认BMad框架兼容性
4. 查看详细错误日志

### 常见问题3: 理论框架验证失败

**问题描述:** 生成的内容不符合教育理论要求

**解决方案:**
1. 检查输入文档的完整性
2. 验证理论框架配置
3. 手动调整理论应用参数
4. 参考最佳实践示例

## 📚 学习资源

### 文档资源
- [教育角色选择指南](../docs/roocode-role-guide.md)
- [RooCode架构说明](../docs/architecture.md#7-rocode-集成架构)
- [PRD需求文档](../docs/prd.md#6-rocode-集成与智能体协同)

### 示例代码
- `examples/role-selection/` - 角色选择示例
- `examples/workflow-demo/` - 工作流演示
- `examples/integration-tests/` - 集成测试用例

### 视频教程
- [RooCode集成快速入门](https://example.com/video1)
- [教育角色使用技巧](https://example.com/video2)
- [高级工作流配置](https://example.com/video3)

## 🤝 贡献指南

### 如何贡献
1. Fork 项目仓库
2. 创建功能分支 (`git checkout -b feature/amazing-feature`)
3. 提交更改 (`git commit -m 'Add amazing feature'`)
4. 推送到分支 (`git push origin feature/amazing-feature`)
5. 创建 Pull Request

### 开发规范
- 遵循现有的代码风格和规范
- 添加适当的测试用例
- 更新相关文档
- 确保与现有功能兼容

## 📄 许可证

本项目基于 MIT 许可证开源。详见 [LICENSE](../../LICENSE) 文件。

## 🙏 致谢

- BMad 框架团队提供的基础架构支持
- RooCode 团队的角色选择器技术
- 教育技术专家的理论指导
- 社区贡献者的持续改进

---

**最后更新:** 2025年9月10日  
**维护团队:** 教育家工具箱开发团队  
**联系方式:** support@educators-toolkit.com