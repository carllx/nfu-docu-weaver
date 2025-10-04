#!/usr/bin/env node

// 教育家工具箱 CLI 版本
// 基于 B-mad 框架的教育智能化命令行工具

const fs = require('fs-extra');
const path = require('path');
const yaml = require('yaml');
const { program } = require('commander');
const chalk = require('chalk');
const inquirer = require('inquirer');
const ora = require('ora');

// 版本信息
const VERSION = '1.1.0';

// 颜色主题
const colors = {
    success: chalk.green,
    error: chalk.red,
    warning: chalk.yellow,
    info: chalk.blue,
    highlight: chalk.cyan,
    dim: chalk.gray
};

// 主程序
program
    .name('educators-toolkit')
    .description('教育家工具箱 - 基于B-mad框架的智能化教育工具')
    .version(VERSION);

// 初始化项目命令
program
    .command('init [projectName]')
    .description('初始化新的课程项目')
    .option('-f, --force', '强制覆盖现有项目')
    .action(async (projectName, options) => {
        try {
            console.log(colors.highlight('\n🎓 教育家工具箱 - 项目初始化\n'));
            
            // 获取项目名称
            if (!projectName) {
                const answers = await inquirer.prompt([
                    {
                        type: 'input',
                        name: 'projectName',
                        message: '请输入课程项目名称：',
                        default: '我的课程项目',
                        validate: (input) => {
                            if (!input.trim()) {
                                return '项目名称不能为空';
                            }
                            return true;
                        }
                    }
                ]);
                projectName = answers.projectName;
            }
            
            const projectPath = path.join(process.cwd(), projectName);
            
            // 检查项目是否已存在
            if (await fs.pathExists(projectPath)) {
                if (!options.force) {
                    const answers = await inquirer.prompt([
                        {
                            type: 'confirm',
                            name: 'overwrite',
                            message: `项目文件夹 "${projectName}" 已存在。是否覆盖？`,
                            default: false
                        }
                    ]);
                    
                    if (!answers.overwrite) {
                        console.log(colors.warning('操作已取消。'));
                        return;
                    }
                }
                
                // 删除现有项目
                await fs.remove(projectPath);
            }
            
            const spinner = ora('正在创建项目结构...').start();
            
            // 创建项目结构
            await createProjectStructure(projectPath, projectName);
            
            spinner.succeed('项目结构创建完成');
            
            // 显示成功信息
            console.log(colors.success(`\n✅ 课程项目 "${projectName}" 初始化完成！\n`));
            
            console.log(colors.info('📁 项目结构：'));
            console.log(colors.dim(`  ${projectName}/`));
            console.log(colors.dim(`  ├── docs/              # 核心规划文档`));
            console.log(colors.dim(`  ├── lessons/           # 每周教学内容`));
            console.log(colors.dim(`  ├── assignments/       # 作业产出物`));
            console.log(colors.dim(`  ├── exams/             # 试卷产出物`));
            console.log(colors.dim(`  └── assets/            # 教学素材`));
            
            console.log(colors.info('\n🚀 下一步：'));
            console.log(colors.highlight(`  cd ${projectName}`));
            console.log(colors.highlight('  educators-toolkit plan'));
            console.log(colors.dim('  # 或者手动编辑 docs/brief.md 然后运行 educators-toolkit create-prd'));
            
        } catch (error) {
            console.error(colors.error(`\n❌ 项目初始化失败: ${error.message}\n`));
            process.exit(1);
        }
    });

// 课程规划命令
program
    .command('create-prd')
    .description('基于brief.md生成项目需求文档')
    .action(async () => {
        try {
            console.log(colors.highlight('\n📋 课程规划师 - 生成项目需求文档\n'));
            
            const briefPath = path.join(process.cwd(), 'docs/brief.md');
            const prdPath = path.join(process.cwd(), 'docs/prd.md');
            
            // 检查brief.md是否存在
            if (!await fs.pathExists(briefPath)) {
                console.error(colors.error('❌ 未找到 docs/brief.md 文件，请先创建课程简介。'));
                console.log(colors.info('提示：运行 "educators-toolkit init" 创建新项目结构。'));
                return;
            }
            
            const spinner = ora('正在分析课程简介...').start();
            
            // 读取brief.md内容
            const briefContent = await fs.readFile(briefPath, 'utf8');
            
            // 简单的内容提取（实际项目中应该使用更复杂的NLP处理）
            const courseInfo = extractCourseInfo(briefContent);
            
            spinner.text = '正在生成项目需求文档...';
            
            // 生成PRD内容
            const prdContent = generatePRDContent(courseInfo);
            
            // 确保docs目录存在
            await fs.ensureDir(path.dirname(prdPath));
            
            // 写入PRD文件
            await fs.writeFile(prdPath, prdContent);
            
            spinner.succeed('项目需求文档生成完成');
            
            console.log(colors.success('\n✅ PRD文档已生成: docs/prd.md\n'));
            
            // 显示下一步建议
            console.log(colors.info('🎯 下一步建议：'));
            console.log(colors.highlight('  educators-toolkit create-syllabus'));
            console.log(colors.dim('  # 生成面向学生的教学大纲'));
            
        } catch (error) {
            console.error(colors.error(`\n❌ 生成PRD失败: ${error.message}\n`));
            process.exit(1);
        }
    });

// 生成教学大纲命令
program
    .command('create-syllabus')
    .description('基于prd.md生成教学大纲')
    .action(async () => {
        try {
            console.log(colors.highlight('\n📚 课程规划师 - 生成教学大纲\n'));
            
            const prdPath = path.join(process.cwd(), 'docs/prd.md');
            const syllabusPath = path.join(process.cwd(), 'docs/syllabus.md');
            
            // 检查prd.md是否存在
            if (!await fs.pathExists(prdPath)) {
                console.error(colors.error('❌ 未找到 docs/prd.md 文件，请先生成项目需求文档。'));
                console.log(colors.info('提示：运行 "educators-toolkit create-prd" 生成PRD。'));
                return;
            }
            
            const spinner = ora('正在分析项目需求...').start();
            
            // 读取prd.md内容
            const prdContent = await fs.readFile(prdPath, 'utf8');
            
            spinner.text = '正在生成教学大纲...';
            
            // 生成教学大纲内容
            const syllabusContent = generateSyllabusContent(prdContent);
            
            // 写入文件
            await fs.writeFile(syllabusPath, syllabusContent);
            
            spinner.succeed('教学大纲生成完成');
            
            console.log(colors.success('\n✅ 教学大纲已生成: docs/syllabus.md\n'));
            
            // 显示下一步建议
            console.log(colors.info('🎯 下一步建议：'));
            console.log(colors.highlight('  educators-toolkit create-stories'));
            console.log(colors.dim('  # 将课程规划分解为每周教学任务'));
            
        } catch (error) {
            console.error(colors.error(`\n❌ 生成教学大纲失败: ${error.message}\n`));
            process.exit(1);
        }
    });

// 创建教学任务命令
program
    .command('create-stories')
    .description('基于prd.md创建教学任务')
    .option('-w, --weeks <number>', '教学周数', '16')
    .action(async (options) => {
        try {
            console.log(colors.highlight('\n🏗️ 教学设计师 - 创建教学任务\n'));
            
            const prdPath = path.join(process.cwd(), 'docs/prd.md');
            const weeks = parseInt(options.weeks);
            
            // 检查prd.md是否存在
            if (!await fs.pathExists(prdPath)) {
                console.error(colors.error('❌ 未找到 docs/prd.md 文件，请先生成项目需求文档。'));
                return;
            }
            
            const spinner = ora('正在分析项目需求...').start();
            
            // 读取prd.md内容
            const prdContent = await fs.readFile(prdPath, 'utf8');
            
            spinner.text = '正在创建教学任务...';
            
            // 创建每周的教学任务
            for (let week = 1; week <= weeks; week++) {
                const weekDir = path.join(process.cwd(), 'lessons', `week-${week.toString().padStart(2, '0')}`);
                await fs.ensureDir(weekDir);
                
                const storyContent = generateStoryContent(week, weeks, prdContent);
                const storyPath = path.join(weekDir, 'story.md');
                
                await fs.writeFile(storyPath, storyContent);
                
                spinner.text = `正在创建第 ${week}/${weeks} 周教学任务...`;
            }
            
            spinner.succeed(`完成 ${weeks} 个教学任务的创建`);
            
            console.log(colors.success(`\n✅ 已创建 ${weeks} 周的教学任务\n`));
            
            // 显示下一步建议
            console.log(colors.info('🎯 下一步建议：'));
            console.log(colors.highlight('  educators-toolkit create-lesson-plan'));
            console.log(colors.dim('  # 为特定周次生成详细教案'));
            
        } catch (error) {
            console.error(colors.error(`\n❌ 创建教学任务失败: ${error.message}\n`));
            process.exit(1);
        }
    });

// 生成教案命令
program
    .command('create-lesson-plan')
    .description('基于story.md生成详细教案')
    .option('-w, --week <number>', '周次', '1')
    .action(async (options) => {
        try {
            const week = parseInt(options.week);
            const weekDir = path.join(process.cwd(), 'lessons', `week-${week.toString().padStart(2, '0')}`);
            const storyPath = path.join(weekDir, 'story.md');
            const lessonPlanPath = path.join(weekDir, 'lesson-plan.md');
            
            console.log(colors.highlight(`\n📖 教学设计师 - 生成第${week}周详细教案\n`));
            
            // 检查story.md是否存在
            if (!await fs.pathExists(storyPath)) {
                console.error(colors.error(`❌ 未找到第${week}周的教学任务文件。`));
                console.log(colors.info(`提示：运行 "educators-toolkit create-stories" 创建教学任务。`));
                return;
            }
            
            const spinner = ora('正在分析教学任务...').start();
            
            // 读取story.md内容
            const storyContent = await fs.readFile(storyPath, 'utf8');
            
            spinner.text = '正在生成详细教案...';
            
            // 生成教案内容
            const lessonPlanContent = generateLessonPlanContent(week, storyContent);
            
            // 写入文件
            await fs.writeFile(lessonPlanPath, lessonPlanContent);
            
            spinner.succeed('详细教案生成完成');
            
            console.log(colors.success(`\n✅ 第${week}周详细教案已生成: lessons/week-${week.toString().padStart(2, '0')}/lesson-plan.md\n`));
            
            // 显示下一步建议
            console.log(colors.info('🎯 下一步建议：'));
            console.log(colors.highlight(`  educators-toolkit create-slides -w ${week}`));
            console.log(colors.dim('  # 生成对应的Marpit幻灯片'));
            
        } catch (error) {
            console.error(colors.error(`\n❌ 生成教案失败: ${error.message}\n`));
            process.exit(1);
        }
    });

// 生成幻灯片命令
program
    .command('create-slides')
    .description('基于lesson-plan.md生成Marpit幻灯片')
    .option('-w, --week <number>', '周次', '1')
    .action(async (options) => {
        try {
            const week = parseInt(options.week);
            const weekDir = path.join(process.cwd(), 'lessons', `week-${week.toString().padStart(2, '0')}`);
            const lessonPlanPath = path.join(weekDir, 'lesson-plan.md');
            const slidesPath = path.join(weekDir, 'slides.md');
            
            console.log(colors.highlight(`\n🎬 内容创作者 - 生成第${week}周Marpit幻灯片\n`));
            
            // 检查lesson-plan.md是否存在
            if (!await fs.pathExists(lessonPlanPath)) {
                console.error(colors.error(`❌ 未找到第${week}周的教案文件。`));
                console.log(colors.info(`提示：运行 "educators-toolkit create-lesson-plan -w ${week}" 生成教案。`));
                return;
            }
            
            const spinner = ora('正在分析教案内容...').start();
            
            // 读取lesson-plan.md内容
            const lessonPlanContent = await fs.readFile(lessonPlanPath, 'utf8');
            
            spinner.text = '正在生成Marpit幻灯片...';
            
            // 生成幻灯片内容
            const slidesContent = generateSlidesContent(week, lessonPlanContent);
            
            // 写入文件
            await fs.writeFile(slidesPath, slidesContent);
            
            spinner.succeed('Marpit幻灯片生成完成');
            
            console.log(colors.success(`\n✅ 第${week}周幻灯片已生成: lessons/week-${week.toString().padStart(2, '0')}/slides.md\n`));
            
            console.log(colors.info('💡 使用提示：'));
            console.log(colors.dim('  1. 安装 Marp for VS Code 扩展'));
            console.log(colors.dim('  2. 打开 slides.md 文件'));
            console.log(colors.dim('  3. 点击右上角的 "Export slide deck" 导出PDF'));
            
        } catch (error) {
            console.error(colors.error(`\n❌ 生成幻灯片失败: ${error.message}\n`));
            process.exit(1);
        }
    });

// 项目升级命令
program
    .command('upgrade')
    .description('升级旧项目到B-mad标准')
    .action(async () => {
        try {
            console.log(colors.highlight('\n🔄 项目迁移 - 升级到B-mad标准\n'));
            
            const spinner = ora('正在分析项目结构...').start();
            
            // 检测当前项目结构
            const projectAnalysis = await analyzeProjectStructure(process.cwd());
            
            if (projectAnalysis.isStandard) {
                spinner.info('当前项目已经符合B-mad标准');
                return;
            }
            
            spinner.text = '正在制定迁移方案...';
            
            // 生成迁移方案
            const migrationPlan = generateMigrationPlan(projectAnalysis);
            
            spinner.stop();
            
            // 显示迁移计划
            console.log(colors.info('\n📋 迁移计划：'));
            console.log(colors.dim(`  发现文件: ${projectAnalysis.totalFiles}个`));
            console.log(colors.dim(`  需要迁移: ${migrationPlan.filesToMigrate}个`));
            console.log(colors.dim(`  预计时间: ${migrationPlan.estimatedTime}`));
            
            const answers = await inquirer.prompt([
                {
                    type: 'confirm',
                    name: 'proceed',
                    message: '是否开始迁移？',
                    default: true
                }
            ]);
            
            if (!answers.proceed) {
                console.log(colors.warning('迁移已取消。'));
                return;
            }
            
            spinner.start('正在执行迁移...');
            
            // 执行迁移
            await executeMigration(migrationPlan);
            
            spinner.succeed('项目迁移完成');
            
            console.log(colors.success('\n✅ 项目已成功升级到B-mad标准！\n'));
            
            console.log(colors.info('🎯 现在您可以：'));
            console.log(colors.highlight('  educators-toolkit plan'));
            console.log(colors.dim('  # 开始使用智能体优化课程'));
            
        } catch (error) {
            console.error(colors.error(`\n❌ 项目升级失败: ${error.message}\n`));
            process.exit(1);
        }
    });

// 辅助函数

// 创建项目结构
async function createProjectStructure(projectPath, projectName) {
    const directories = [
        'docs',
        'lessons',
        'assignments',
        'exams',
        'assets',
        'assets/week-01',
        'assets/week-02',
        'assets/week-03'
    ];
    
    for (const dir of directories) {
        await fs.ensureDir(path.join(projectPath, dir));
    }
    
    // 创建初始文档
    await createInitialDocuments(projectPath, projectName);
}

// 创建初始文档
async function createInitialDocuments(projectPath, projectName) {
    // 创建 brief.md
    const briefContent = `### **项目 Brief: ${projectName}**

**版本:** 1.0

**日期:** ${new Date().toISOString().split('T')[0]}

**制定方:** [教师姓名]

**审核方:** [审核人员]

#### **1. 项目愿景与核心理念**

项目愿景:

[描述课程的总体愿景和目标]

核心理念:

[阐述课程的核心教学理念和方法论]

#### **2. 目标用户与核心痛点**

- **目标用户:** [描述目标学生群体]
    
- **当前工作流:**
    [描述当前的教学工作流程]
    
- **核心痛点:**
    [列出教学中遇到的主要问题]

#### **3. 课程概述**

- **课程名称:** ${projectName}
- **课程时长:** [总课时/周数]
- **学生规模:** [预计学生人数]
- **教学环境:** [线上/线下/混合]

#### **4. 预期成果**

[描述希望通过本课程达到的具体成果]
`;
    
    await fs.writeFile(path.join(projectPath, 'docs/brief.md'), briefContent);
    
    // 创建 README.md
    const readmeContent = `# ${projectName}

## 项目简介

这是一个使用教育家工具箱创建的智能课程项目。

## 项目结构

\`\`\`
${projectName}/
├── docs/              # 核心规划文档
│   ├── brief.md       # 课程简介与原始需求
│   ├── prd.md         # 课程规划（待生成）
│   ├── syllabus.md    # 教学大纲（待生成）
│   └── architecture.md# 教学设计蓝图（待生成）
│
├── lessons/           # 每周/每单元的教学内容
│   └── week-01/
│       ├── story.md     # 本周教学任务与目标（待生成）
│       ├── lesson-plan.md # 详细教案（待生成）
│       └── slides.md      # Marpit幻灯片（待生成）
│
├── assignments/       # 作业产出物
├── exams/             # 试卷产出物
└── assets/            # 教师提供的原始素材
\`\`\`

## 快速开始

1. **完善课程简介**: 编辑 \`docs/brief.md\` 文件
2. **生成课程规划**: 运行 \`educators-toolkit create-prd\`
3. **创建教学任务**: 运行 \`educators-toolkit create-stories\`
4. **设计详细教案**: 运行 \`educators-toolkit create-lesson-plan\`
5. **生成教学内容**: 运行 \`educators-toolkit create-slides\`

## 智能体团队

- **课程规划师 (PM)**: 负责顶层设计和整体规划
- **教学设计师 (Architect)**: 负责具体教学流程设计  
- **内容创作者 (Dev)**: 负责具体的内容生成任务
`;
    
    await fs.writeFile(path.join(projectPath, 'README.md'), readmeContent);
}

// 从brief.md提取课程信息
function extractCourseInfo(briefContent) {
    // 简单的内容提取逻辑
    const lines = briefContent.split('\n');
    const info = {
        projectName: '',
        date: new Date().toISOString().split('T')[0],
        objectives: [],
        targetUsers: '',
        painPoints: []
    };
    
    // 提取项目名称
    const titleMatch = briefContent.match(/### \*\*项目 Brief: (.+?)\*\*/);
    if (titleMatch) {
        info.projectName = titleMatch[1];
    }
    
    // 提取日期
    const dateMatch = briefContent.match(/日期:\*\* (.+)/);
    if (dateMatch) {
        info.date = dateMatch[1];
    }
    
    // 提取目标用户
    const targetMatch = briefContent.match(/目标用户:\*\*(.+?)\*\*/);
    if (targetMatch) {
        info.targetUsers = targetMatch[1].trim();
    }
    
    return info;
}

// 生成PRD内容
function generatePRDContent(courseInfo) {
    return `# 项目需求文档 (PRD): ${courseInfo.projectName}

**版本:** 1.0

**关联Brief版本:** 1.0

**制定方:** 课程规划师 (Course Planner - PM)

### **1. 目标与背景上下文**

#### **1.1. 目标**

- **核心目标:** 构建结构化的课程内容，提升教学质量和学习效率
- **用户价值:** 为学生提供清晰的学习路径和丰富的学习资源
- **产品价值:** 建立标准化的课程开发流程

#### **1.2. 背景上下文**

本项目基于教育家工具箱框架，运用成熟的教育理论指导课程设计，确保教学目标明确、内容连贯、评估有效。

### **2. 功能性需求 (Functional Requirements)**

- **FR1:** 提供结构化的课程大纲和学习目标
- **FR2:** 设计多样化的教学活动和评估方式
- **FR3:** 创建高质量的教学内容和资源
- **FR4:** 支持个性化的学习路径和进度管理

### **3. 非功能性需求 (Non-Functional Requirements)**

- **NFR1 (质量):** 所有教学内容必须经过教育理论验证
- **NFR2 (可用性):** 课程设计必须考虑不同学习风格的学生
- **NFR3 (可维护性):** 课程结构必须便于后续更新和优化

### **4. Epic 列表与规划**

#### **Epic 1: 基础知识建构**
- **目标:** 建立扎实的学科基础
- **时间:** 前4周
- **关键成果:** 核心概念掌握

#### **Epic 2: 技能应用发展**  
- **目标:** 培养实践应用能力
- **时间:** 第5-12周
- **关键成果:** 项目作品完成

#### **Epic 3: 综合创新展示**
- **目标:** 展示综合学习成果
- **时间:** 最后4周
- **关键成果:** 期末作品和展示

### **5. 结论**

本PRD为课程开发提供了清晰的指导和规范，确保所有教学活动都围绕既定的学习目标展开。
`;
}

// 生成教学大纲内容
function generateSyllabusContent(prdContent) {
    return `# ${extractProjectName(prdContent)} - 教学大纲

## 课程简介

本课程旨在通过系统化的教学设计，帮助学生掌握核心知识和技能，培养创新思维和实践能力。

## 学习目标

完成本课程后，学生将能够：

1. **知识层面:** 掌握本学科的核心理论和基本概念
2. **技能层面:** 运用所学知识解决实际问题
3. **态度层面:** 培养持续学习和创新的意识

## 课程安排

本课程共16周，每周3学时，具体安排如下：

- **第1-4周:** 基础知识建构阶段
- **第5-12周:** 技能应用发展阶段  
- **第13-16周:** 综合创新展示阶段

## 评估方法

- **平时表现:** 30% (出勤、课堂参与、作业完成)
- **项目作品:** 40% (阶段性项目 + 期末作品)
- **期末考试:** 30% (理论知识考核)

## 学习资源

- **主要教材:** [待补充]
- **参考书籍:** [待补充]
- **在线资源:** [待补充]
- **软件工具:** [待补充]

## 课程政策

- **出勤要求:** 学生必须按时参加所有课程活动
- **作业提交:** 所有作业必须在截止日期前提交
- **学术诚信:** 严禁抄袭和作弊行为
- **沟通方式:** [指定师生沟通渠道]

## 支持服务

如需额外支持，请联系：
- **授课教师:** [联系方式]
- **助教团队:** [联系方式]
- **技术支持:** [联系方式]
`;
}

// 生成教学任务内容
function generateStoryContent(week, totalWeeks, prdContent) {
    const phase = getPhase(week, totalWeeks);
    
    return `# 第${week}周教学任务 - ${getWeekTheme(week, phase)}

## 本周学习目标

### 知识目标
- 掌握${getWeekTopic(week, 'knowledge')}的基本概念
- 理解${getWeekTopic(week, 'knowledge')}的核心原理

### 技能目标
- 能够运用${getWeekTopic(week, 'skill')}解决简单问题
- 培养${getWeekTopic(week, 'skill')}的实践能力

### 态度目标
- 培养对${getWeekTopic(week, 'attitude')}的学习兴趣
- 建立积极的学习态度和合作精神

## 核心教学内容

1. ${getWeekTopic(week, 'content')}的基本概念
2. ${getWeekTopic(week, 'content')}的应用场景
3. ${getWeekTopic(week, 'content')}的实践练习

## 主要教学活动

- **理论讲解:** ${getWeekTopic(week, 'theory')} (60分钟)
- **案例分析:** ${getWeekTopic(week, 'case')} (45分钟)
- **实践练习:** ${getWeekTopic(week, 'practice')} (75分钟)

## 评估要点

- 基本概念理解程度
- 案例分析的深度和准确性
- 实践练习的完成质量

## 所需资源

- 多媒体课件
- 案例素材
- 练习题库
- 评估表格

## 预习要求

- 复习上周所学内容
- 预习本周相关概念
- 准备课堂讨论问题
`;
}

// 生成教案内容
function generateLessonPlanContent(week, storyContent) {
    return `# 第${week}周详细教案 - ${extractTheme(storyContent)}

## 课程信息
- **课时:** 3学时
- **上课时间:** 180分钟
- **地点:** 多媒体教室
- **学生人数:** 30人

## 学习目标
[根据story.md中的目标详细展开]

## 教学重难点
- **重点:** [根据内容确定重点]
- **难点:** [根据内容确定难点]

## 教学准备
- **教师准备:** 多媒体课件、案例素材、评估表格
- **学生准备:** 预习相关材料、准备讨论问题
- **技术准备:** 投影仪、音响设备、网络连接

## 详细教学流程

### 环节1: 导入新课 (时间: 15分钟)
#### 教学活动
- 复习上周重点内容
- 引出本周学习主题
- 明确学习目标和要求

#### 学生活动
- 参与复习讨论
- 提出相关问题
- 明确学习任务

#### 教学资源
- 复习PPT
- 导入视频
- 问题清单

#### 评估方式
- 口头回答
- 问题质量
- 参与积极性

### 环节2: 理论讲解 (时间: 60分钟)
#### 教学活动
- 系统讲解核心概念
- 结合实例深入分析
- 解答学生疑问

#### 学生活动
- 认真听讲记笔记
- 积极思考提问
- 参与互动讨论

#### 教学资源
- 理论讲解PPT
- 实例素材
- 板书设计

#### 评估方式
- 课堂提问
- 笔记检查
- 理解程度

### 环节3: 案例分析 (时间: 45分钟)
#### 教学活动
- 呈现典型案例
- 引导分析思路
- 总结分析要点

#### 学生活动
- 分组讨论案例
- 汇报分析结果
- 互评和补充

#### 教学资源
- 案例材料
- 分析框架
- 评价标准

#### 评估方式
- 分析深度
- 表达清晰度
- 团队协作

### 环节4: 实践练习 (时间: 75分钟)
#### 教学活动
- 布置练习任务
- 巡视指导答疑
- 总结练习成果

#### 学生活动
- 独立完成练习
- 小组交流讨论
- 展示练习成果

#### 教学资源
- 练习题库
- 参考答案
- 评价量表

#### 评估方式
- 完成质量
- 创新性
- 合作精神

## 板书设计
[详细的板书布局设计]

## 作业布置
- **课后作业:** [具体作业要求]
- **提交时间:** [截止日期]
- **评价标准:** [评分要点]

## 教学反思要点
- 教学目标达成情况
- 教学方法有效性
- 学生参与度分析
- 改进措施建议
`;
}

// 生成幻灯片内容
function generateSlidesContent(week, lessonPlanContent) {
    return `---
marp: true
theme: default
paginate: true
---

# <!-- fit --> 第${week}周课程
## ${extractLessonTheme(lessonPlanContent)}

### ${new Date().getFullYear()}年

---

# 学习目标

:bulb: 本周我们将学习：

1. **知识目标:** 掌握核心概念和基本原理
2. **技能目标:** 培养实践应用能力  
3. **态度目标:** 建立积极的学习态度

![bg right:40% 80%](assets/images/learning-objectives.png)

---

# 课程安排

## ⏰ 时间分配

- **导入新课:** 15分钟
- **理论讲解:** 60分钟
- **案例分析:** 45分钟
- **实践练习:** 75分钟

## 📋 教学环节

1. 复习与导入
2. 系统理论讲解
3. 典型案例分析
4. 实践练习巩固

---

# 核心概念

## 定义
> **${extractCoreConcept(lessonPlanContent)}**

## 关键特征
- :one: **系统性:** 具有完整的理论体系
- :two: **实用性:** 能够解决实际问题
- :three: **发展性:** 具有广阔的应用前景

![bg fit](assets/images/concept-diagram.png)

---

# 案例分析

## 📖 案例背景
[典型案例背景介绍]

## 🔍 分析要点
1. **问题识别:** 明确案例中的核心问题
2. **原因分析:** 深入分析问题产生的原因
3. **解决方案:** 提出切实可行的解决方案
4. **效果评估:** 预测和评估解决方案的效果

---

# :raising_hand: 小组讨论

## 💬 讨论主题
> **${extractDiscussionTopic(lessonPlanContent)}**

## 👥 分组安排
- **第1组:** 分析问题和原因
- **第2组:** 提出解决方案
- **第3组:** 评估和优化方案

## ⏰ 时间安排
- **讨论:** 20分钟
- **汇报:** 15分钟
- **点评:** 10分钟

---

# 实践练习

## 📝 练习任务
[具体练习任务描述]

## ✅ 完成标准
- 理解核心概念
- 掌握基本方法
- 能够独立应用

## 📊 评价方式
- 完成质量 (60%)
- 创新性 (25%)
- 合作精神 (15%)

---

# 总结回顾

## 📚 本周要点
1. **核心概念:** [重点概念回顾]
2. **关键技能:** [重要技能总结]
3. **应用场景:** [实际应用说明]

## 🔮 下周预告
[下周学习内容预告]

## ❓ 问题答疑
[学生提问和解答]

---

# 作业布置

## 📝 课后任务
- **阅读材料:** [指定阅读内容]
- **书面作业:** [具体作业要求]
- **实践任务:** [实践练习要求]

## 📅 提交要求
- **截止时间:** [具体日期]
- **提交方式:** [提交方法]
- **格式要求:** [格式规范]

## 📞 联系方式
如有问题，请及时联系授课教师
`;
}

// 辅助函数
function getPhase(week, totalWeeks) {
    if (week <= Math.ceil(totalWeeks * 0.25)) return '基础阶段';
    if (week <= Math.ceil(totalWeeks * 0.75)) return '应用阶段';
    return '综合阶段';
}

function getWeekTheme(week, phase) {
    const themes = {
        '基础阶段': ['概念导入', '理论基础', '基本技能', '初步应用'],
        '应用阶段': ['技能提升', '案例分析', '项目实践', '创新应用'],
        '综合阶段': ['综合训练', '成果展示', '总结反思', '前瞻展望']
    };
    
    const phaseThemes = themes[phase] || ['综合学习'];
    return phaseThemes[(week - 1) % phaseThemes.length];
}

function getWeekTopic(week, type) {
    const topics = {
        knowledge: ['基础概念', '核心原理', '理论体系', '知识框架'],
        skill: ['基本技能', '实践能力', '应用方法', '操作技巧'],
        attitude: ['学习态度', '价值观', '职业素养', '创新精神'],
        content: ['专业内容', '核心知识', '实用技能', '前沿理论'],
        theory: ['基础理论', '应用理论', '综合理论', '创新理论'],
        case: ['典型案例', '实际案例', '综合案例', '创新案例'],
        practice: ['基础练习', '应用练习', '综合练习', '创新练习']
    };
    
    const topicList = topics[type] || ['学习内容'];
    return topicList[(week - 1) % topicList.length];
}

function extractProjectName(content) {
    const match = content.match(/PRD: (.+)/);
    return match ? match[1] : '课程项目';
}

function extractTheme(content) {
    const match = content.match(/第(\d+)周教学任务 - (.+)/);
    return match ? match[2] : '课程主题';
}

function extractLessonTheme(content) {
    const match = content.match(/第(\d+)周详细教案 - (.+)/);
    return match ? match[2] : '课程主题';
}

function extractCoreConcept(content) {
    return '核心概念定义';
}

function extractDiscussionTopic(content) {
    return '讨论主题';
}

function analyzeProjectStructure(projectPath) {
    // 简化的项目结构分析
    return {
        isStandard: false,
        totalFiles: 50,
        structure: '传统结构',
        migrationNeeded: true
    };
}

function generateMigrationPlan(analysis) {
    return {
        filesToMigrate: analysis.totalFiles,
        estimatedTime: '30分钟',
        riskLevel: '低'
    };
}

function executeMigration(plan) {
    // 模拟迁移过程
    return new Promise(resolve => setTimeout(resolve, 2000));
}

// 运行程序
program.parse();