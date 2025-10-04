# 旧项目升级任务 (Upgrade Legacy Project Task)
# 版本: 1.1
# 所有者: 项目迁移智能体 (Project Migrator)
# 功能: 识别和升级非规范教育项目

## 任务概述

旧项目升级任务是一个自动化的项目标准化流程，专门用于识别不符合B-mad教育规范的项目，并通过智能化的分析和建议，引导用户将现有项目升级到新的标准化结构，确保不丢失原有项目的核心细节。

## 激活机制

### 自动检测条件
```yaml
检测触发器:
  - 缺少标志文件: "/docs/brief.md 不存在"
  - 目录结构异常: "缺少标准子目录"
  - 文件命名混乱: "不符合命名规范"
  - 内容格式不一: "多种格式混合存在"
  
检测深度:
  - 一级检测: "根目录结构"
  - 二级检测: "主要子目录"
  - 三级检测: "文件内容和格式"
  - 深度检测: "教学内容的完整性"
```

### 检测算法
```python
def detect_legacy_project(project_path):
    """
    检测项目是否为旧版结构
    """
    legacy_indicators = {
        'missing_standard_dirs': check_standard_directories(),
        'inconsistent_naming': check_file_naming_convention(),
        'mixed_formats': check_content_formats(),
        'scattered_content': check_content_organization()
    }
    
    # 计算legacy评分 (0-100)
    legacy_score = calculate_legacy_score(legacy_indicators)
    
    if legacy_score > 70:
        return "HIGH_LEGACY", "强烈建议升级"
    elif legacy_score > 40:
        return "MEDIUM_LEGACY", "建议升级"
    else:
        return "LOW_LEGACY", "可选择性升级"
```

## 项目类型识别

### 传统教学项目
```
特征模式:
├── 教学大纲.doc/docx
├── 课程说明.pdf
├── 教案/
│   ├── 第1章.doc
│   ├── 第2章.doc
│   └── ...
├── 课件/
│   ├── 第1讲.ppt
│   ├── 第2讲.ppt
│   └── ...
├── 作业/
│   └── 作业要求.doc
└── 考试/
    └── 试题.doc
```

### 混合媒体项目
```
特征模式:
├── 课程介绍/
│   ├── 教师简介.doc
│   ├── 课程目标.txt
│   └── 教学计划.xlsx
├── 教学内容/
│   ├── 视频讲座/
│   ├── PPT课件/
│   ├── 参考资料/
│   └── 案例素材/
├── 学生作品/
├── 评分标准/
└── 教学反思/
```

### 在线课程项目
```
特征模式:
├── 课程包/
│   ├── manifest.xml
│   ├── metadata/
│   └── content/
├── 视频课程/
├── 互动课件/
├── 在线测试/
├── 讨论区/
└── 学习跟踪/
```

## 升级策略

### 策略一：保守升级（推荐）
**适用场景**: 重要项目、时间充裕、追求完美
**特点**: 安全优先，逐步推进，充分验证
**流程**:
1. 完整备份现有项目
2. 创建并行的新结构
3. 逐个模块迁移验证
4. 对比确认无误后切换

### 策略二：快速升级
**适用场景**: 时间紧迫、项目简单、用户有经验
**特点**: 效率优先，自动化高，风险相对较高
**流程**:
1. 快速备份关键文件
2. 批量转换和重命名
3. 自动分类和整理
4. 快速验证和修正

### 策略三：定制升级
**适用场景**: 特殊结构、复杂项目、特定需求
**特点**: 灵活适应，个性化强，需要更多交互
**流程**:
1. 深度分析项目特点
2. 制定个性化迁移方案
3. 用户参与关键决策
4. 定制化验证和优化

## 迁移算法

### 文件智能分类
```python
def intelligent_file_classification(file_path, content_analysis):
    """
    基于内容和文件名智能分类文件
    """
    classification_rules = {
        'course_planning': {
            'keywords': ['大纲', 'syllabus', '计划', 'schedule'],
            'content_patterns': ['课程目标', '学习成果', '教学安排'],
            'target_location': 'docs/'
        },
        'teaching_content': {
            'keywords': ['教案', 'lesson', '教学', 'teaching'],
            'content_patterns': ['教学目标', '教学流程', '活动设计'],
            'target_location': 'lessons/week-XX/'
        },
        'assignments': {
            'keywords': ['作业', 'assignment', '任务', 'task'],
            'content_patterns': ['提交要求', '评分标准', '截止日期'],
            'target_location': 'assignments/'
        },
        'assessments': {
            'keywords': ['考试', '测试', 'quiz', 'exam'],
            'content_patterns': ['题目', '答案', '分值'],
            'target_location': 'exams/'
        },
        'media_assets': {
            'extensions': ['.mp4', '.ppt', '.jpg', '.png', '.pdf'],
            'content_types': ['video', 'presentation', 'image'],
            'target_location': 'assets/week-XX/'
        }
    }
    
    # 综合文件名、内容、格式进行分类
    return determine_best_classification()
```

### 内容提取和转换
```python
def extract_and_convert_content(source_file, target_format):
    """
    提取内容并转换为目标格式
    """
    conversion_pipeline = {
        'docx_to_markdown': {
            'steps': ['parse_document', 'extract_structure', 'convert_formatting', 'optimize_layout'],
            'preservation': ['headings', 'lists', 'tables', 'images'],
            'enhancement': ['add_links', 'standardize_format', 'improve_readability']
        },
        'ppt_to_marpit': {
            'steps': ['parse_presentation', 'extract_slides', 'convert_elements', 'optimize_design'],
            'preservation': ['slide_structure', 'visual_elements', 'animations'],
            'enhancement': ['add_marpit_features', 'improve_responsiveness', 'standardize_theme']
        }
    }
    
    return apply_conversion_pipeline()
```

### 命名标准化
```python
def standardize_file_naming(original_name, content_type, week_number=None):
    """
    将文件名标准化为B-mad规范
    """
    naming_conventions = {
        'brief': 'brief.md',
        'syllabus': 'syllabus.md',
        'prd': 'prd.md',
        'architecture': 'architecture.md',
        'story': f'story.md',
        'lesson_plan': f'lesson-plan.md',
        'slides': f'slides.md',
        'assignment': f'homework-{week_number:02d}.md',
        'rubrics': f'rubrics-{week_number:02d}.md',
        'exam': f'{exam_type}-{version}.md'
    }
    
    # 智能识别内容类型并应用相应命名规范
    return generate_standardized_name()
```

## 迁移执行流程

### 阶段一：项目评估
```python
def evaluate_legacy_project(project_path):
    """
    全面评估旧项目的状况
    """
    evaluation_report = {
        'project_overview': {
            'total_files': count_total_files(),
            'file_types_distribution': analyze_file_types(),
            'content_volume': estimate_content_volume(),
            'complexity_level': assess_complexity()
        },
        'structural_analysis': {
            'organization_pattern': identify_organization_pattern(),
            'naming_conventions': analyze_naming_patterns(),
            'content_consistency': check_content_consistency(),
            'format_standardization': assess_format_standardization()
        },
        'content_quality': {
            'completeness': evaluate_content_completeness(),
            'accuracy': verify_content_accuracy(),
            'relevance': assess_content_relevance(),
            'currency': check_content_currency()
        },
        'migration_readiness': {
            'risk_assessment': identify_potential_risks(),
            'effort_estimation': estimate_migration_effort(),
            'success_probability': calculate_success_likelihood(),
            'recommended_approach': suggest_best_approach()
        }
    }
    
    return generate_comprehensive_report()
```

### 阶段二：方案制定
```markdown
# 迁移方案示例

## 项目概况
- 原始文件: 156个
- 主要格式: Word文档(45%), PPT课件(30%), PDF资料(25%)
- 内容时期: 2018-2023年
- 复杂度: 中等

## 迁移策略
### 方法: 保守升级 + 分阶段实施
### 时间安排: 预计2小时
### 风险等级: 低

## 具体计划
### 第一阶段: 结构创建 (10分钟)
1. 创建标准目录结构
2. 设置备份和日志机制
3. 准备转换工具环境

### 第二阶段: 文档迁移 (60分钟)
1. 教学大纲 → docs/syllabus.md
2. 课程介绍 → docs/brief.md
3. 教学计划 → docs/prd.md

### 第三阶段: 内容整理 (45分钟)
1. 周次内容分类整理
2. 教案和课件配对
3. 作业和考试归档

### 第四阶段: 验证优化 (25分钟)
1. 完整性检查
2. 格式验证
3. 用户验收

## 风险控制
- 完整备份: 迁移前100%备份
- 增量验证: 每阶段完成后验证
- 快速回滚: 5分钟内可恢复原状
- 专家支持: 提供实时技术支持
```

### 阶段三：执行迁移
```python
def execute_migration(migration_plan):
    """
    执行具体的迁移操作
    """
    migration_steps = [
        {
            'step': 1,
            'name': 'create_backup',
            'description': '创建完整备份',
            'actions': ['copy_all_files', 'generate_manifest', 'verify_integrity'],
            'verification': 'backup_completeness_check'
        },
        {
            'step': 2,
            'name': 'prepare_structure',
            'description': '准备目标结构',
            'actions': ['create_directories', 'set_permissions', 'initialize_tracking'],
            'verification': 'structure_readiness_check'
        },
        {
            'step': 3,
            'name': 'convert_content',
            'description': '转换内容格式',
            'actions': ['classify_files', 'extract_content', 'convert_formats', 'optimize_output'],
            'verification': 'conversion_quality_check'
        },
        {
            'step': 4,
            'name': 'organize_files',
            'description': '重组文件结构',
            'actions': ['move_to_directories', 'rename_files', 'create_index', 'establish_links'],
            'verification': 'organization_completeness_check'
        },
        {
            'step': 5,
            'name': 'validate_results',
            'description': '验证迁移结果',
            'actions': ['check_integrity', 'verify_content', 'test_functionality', 'generate_report'],
            'verification': 'final_quality_assurance'
        }
    ]
    
    return execute_with_monitoring()
```

### 阶段四：质量验证
```yaml
验证清单:
  结构验证:
    - "标准目录结构完整"
    - "所有文件正确归类"
    - "命名规范统一"
    - "链接关系正确"
  
  内容验证:
    - "内容完整性100%"
    - "格式转换正确"
    - "元数据保留"
    - "版本信息准确"
  
  功能验证:
    - "Marpit幻灯片可渲染"
    - "Markdown格式正确"
    - "媒体文件可访问"
    - "交叉引用有效"
  
  用户体验验证:
    - "导航逻辑清晰"
    - "查找效率提升"
    - "使用门槛降低"
    - "协作便利性增强"
```

## 特殊场景处理

### 大型项目（>1000文件）
```python
def handle_large_project(project_path):
    """
    处理大型项目的特殊策略
    """
    large_project_strategy = {
        'pre_processing': {
            'file_inventory': '生成完整文件清单',
            'dependency_mapping': '建立文件依赖关系图',
            'priority_classification': '按重要性分类文件',
            'batch_planning': '制定分批处理计划'
        },
        'processing_optimization': {
            'parallel_processing': '并行处理多个批次',
            'incremental_backup': '增量备份减少开销',
            'streaming_conversion': '流式转换大文件',
            'progress_checkpoint': '设置进度检查点'
        },
        'quality_assurance': {
            'sampling_verification': '抽样验证转换质量',
            'automated_testing': '自动化测试关键功能',
            'performance_monitoring': '监控处理性能',
            'error_recovery': '快速错误恢复机制'
        }
    }
    
    return apply_large_project_optimization()
```

### 损坏或加密文件
```python
def handle_problematic_files(file_list):
    """
    处理损坏或加密的文件
    """
    problem_resolution = {
        'corrupted_files': {
            'detection': '完整性检查和损坏识别',
            'recovery_attempt': '使用修复工具尝试恢复',
            'alternative_search': '寻找备份或替代版本',
            'user_notification': '通知用户并提供选择'
        },
        'encrypted_files': {
            'identification': '识别加密类型和保护级别',
            'password_request': '向用户请求访问密码',
            'decryption_support': '提供解密技术支持',
            'content_extraction': '在可能的情况下提取内容'
        },
        'unsupported_formats': {
            'format_identification': '识别不支持的文件格式',
            'conversion_options': '提供格式转换选项',
            'external_tools': '推荐外部转换工具',
            'manual_guidance': '提供手动处理指导'
        }
    }
    
    return resolve_file_issues()
```

### 多语言项目
```python
def handle_multilingual_project(project_path):
    """
    处理包含多种语言的项目
    """
    multilingual_strategy = {
        'language_detection': {
            'automatic_detection': '自动检测文档语言',
            'content_analysis': '分析内容的语言特征',
            'encoding_identification': '识别字符编码方式',
            'confidence_scoring': '为检测结果提供置信度'
        },
        'classification_organization': {
            'language_based_sorting': '按语言分类整理',
            'content_type_grouping': '按内容类型分组',
            'cross_reference_linking': '建立跨语言引用链接',
            'metadata_enrichment': '丰富语言相关的元数据'
        },
        'translation_support': {
            'key_content_identification': '识别需要翻译的关键内容',
            'translation_service_integration': '集成翻译服务',
            'quality_assurance': '确保翻译质量',
            'cultural_adaptation': '考虑文化适应性调整'
        }
    }
    
    return process_multilingual_content()
```

## 用户交互设计

### 迁移前咨询
```markdown
🔍 检测到您的项目采用了传统的文件组织方式。

基于分析，您的项目包含：
📁 教学文档: 23个文件
🎥 视频素材: 47个文件  
📊 PPT课件: 18个文件
📝 其他资料: 31个文件

💡 升级到B-mad教育标准将为您带来：
✅ 更清晰的课程结构
✅ 智能体自动化支持
✅ 更好的版本管理
✅ 团队协作便利

⚙️ 推荐方案：保守升级（安全优先）
⏱️ 预计时间：约45分钟
🛡️ 安全保障：完整备份 + 5分钟回滚

是否开始升级？(yes/no/details)
```

### 迁移中进度反馈
```markdown
📊 迁移进度：[██████----] 60%
⏱️ 已用时：27分钟
🔄 当前：转换PPT课件 (12/18)

📋 发现：
- 3个文件需要手动优化
- 2个视频文件较大，正在压缩
- 1个加密PDF需要密码

💡 建议：迁移完成后检查幻灯片动画效果
```

### 迁移后总结
```markdown
✅ 迁移成功完成！

📈 迁移统计：
- 处理文件：119个
- 成功迁移：116个
- 跳過文件：3个（已安全备份）
- 用时：42分钟

🎯 主要改进：
- 建立了标准化的课程结构
- 统一了文档格式和命名
- 优化了媒体文件大小
- 创建了完整的项目索引

🚀 现在您可以：
1. 使用教育家工具箱智能体优化课程
2. 享受自动化工作流带来的便利
3. 与团队成员更高效地协作

💬 需要帮助？随时联系我们的智能体团队！
```

## 质量保证机制

### 数据完整性保障
```yaml
完整性检查:
  文件级别:
    - "数量一致性: 源文件数 = 目标文件数"
    - "大小完整性: 内容无截断或损坏"
    - "格式正确性: 转换后格式符合标准"
    - "元数据保留: 创建时间、作者等信息"
  
  内容级别:
    - "文本完整性: 无文字丢失或乱码"
    - "图片质量: 分辨率满足使用需求"
    - "链接有效性: 内部外部链接正常"
    - "结构逻辑性: 层次关系保持正确"
```

### 安全性保障
```yaml
安全措施:
  备份策略:
    - "多重备份: 本地 + 云端"
    - "版本控制: 保留迁移历史"
    - "快速恢复: 5分钟内可回滚"
    - "完整性验证: 备份数据可恢复"
  
  访问控制:
    - "权限管理: 最小权限原则"
    - "操作审计: 完整操作日志"
    - "异常监控: 实时异常检测"
    - "安全通知: 及时安全警报"
```

### 性能优化
```yaml
性能指标:
  处理速度:
    - "小项目 (<100文件): < 15分钟"
    - "中项目 (100-500文件): < 45分钟"
    - "大项目 (500-2000文件): < 2小时"
    - "超大项目 (>2000文件): < 4小时"
  
  资源使用:
    - "CPU使用率: < 70%"
    - "内存占用: < 4GB"
    - "磁盘I/O: 优化批量操作"
    - "网络带宽: 智能流量控制"
```

## 扩展功能

### 批量项目升级
```python
def batch_upgrade_projects(project_list):
    """
    批量处理多个项目的升级
    """
    batch_processing = {
        'project_analysis': '分析所有项目的共性和差异',
        'resource_optimization': '优化资源分配和调度',
        'parallel_execution': '并行处理相似项目',
        'progress_coordination': '协调各项目的进度',
        'quality_consolidation': '统一质量标准和验证'
    }
    
    return execute_batch_upgrade()
```

### 持续集成支持
```yaml
CI/CD集成:
  自动检测: "代码提交时自动检测项目结构"
  增量升级: "只处理变更的部分"
  质量门控: "升级质量不达标则阻止提交"
  版本对比: "自动生成升级前后的对比报告"
  回滚集成: "支持自动回滚到稳定版本"
```

## 任务交接指引

完成项目升级后，项目迁移智能体将：

1. **成果汇报**: 详细说明升级的具体变化和统计数据
2. **注意事项**: 提醒用户检查关键内容和功能
3. **后续建议**: 推荐下一步的优化和增强工作
4. **支持服务**: 提供持续的技术支持和问题解决

示例交接语：
```
✅ 项目升级圆满完成！

您的教育项目已成功升级到B-mad标准：
- 文件组织更加清晰有序
- 文档格式完全标准化
- 智能体工具完全兼容
- 协作效率显著提升

立即体验：
现在您可以调用课程规划师、教学设计师等智能体
来进一步优化您的课程内容和教学设计。

持续支持：
我们提供7x24小时的技术支持，如有任何问题，
随时联系我们的智能体团队获得帮助！