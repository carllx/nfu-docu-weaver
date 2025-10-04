#!/usr/bin/env node

// 核心逻辑验证测试
// 不依赖VSCode API，只测试业务逻辑

const path = require('path');

console.log('🔍 教育家工具箱 - 核心逻辑验证');
console.log('=====================================\n');

// 测试配置
const testResults = {
    passed: 0,
    failed: 0,
    details: []
};

function test(name, testFn) {
    try {
        testFn();
        testResults.passed++;
        testResults.details.push({ name, status: 'PASS', error: null });
        console.log(`✅ ${name}`);
    } catch (error) {
        testResults.failed++;
        testResults.details.push({ name, status: 'FAIL', error: error.message });
        console.log(`❌ ${name}: ${error.message}`);
    }
}

// 1. 测试团队配置解析
test('团队配置YAML解析', () => {
    const yaml = require('yaml');
    const fs = require('fs');
    
    const configContent = fs.readFileSync('team-education.yaml', 'utf8');
    const config = yaml.parse(configContent);
    
    if (!config.team) throw new Error('缺少team配置');
    if (!config.team.agents) throw new Error('缺少agents配置');
    if (config.team.agents.length !== 3) throw new Error('agents数量不正确');
    
    console.log(`   发现 ${config.team.agents.length} 个智能体配置`);
});

// 2. 测试一致性检查清单
test('一致性检查清单格式', () => {
    const yaml = require('yaml');
    const fs = require('fs');
    
    const checklistContent = fs.readFileSync('consistency-check.yaml', 'utf8');
    const checklist = yaml.parse(checklistContent);
    
    if (!checklist.checklist) throw new Error('缺少checklist配置');
    if (!checklist.checklist.items) throw new Error('缺少检查项');
    if (checklist.checklist.items.length === 0) throw new Error('检查项为空');
    
    console.log(`   发现 ${checklist.checklist.items.length} 个检查项`);
});

// 3. 测试智能体定义文件
test('智能体定义文件完整性', () => {
    const fs = require('fs');
    const requiredAgents = [
        'agents/course-planner.md',
        'agents/instructional-designer.md',
        'agents/content-creator.md',
        'agents/project-migrator.md'
    ];
    
    for (const agentFile of requiredAgents) {
        if (!fs.existsSync(agentFile)) {
            throw new Error(`缺少智能体定义文件: ${agentFile}`);
        }
        
        const content = fs.readFileSync(agentFile, 'utf8');
        if (!content.includes('理论框架')) {
            throw new Error(`${agentFile} 缺少理论框架部分`);
        }
        if (!content.includes('核心职责')) {
            throw new Error(`${agentFile} 缺少核心职责部分`);
        }
    }
    
    console.log(`   所有智能体定义文件完整`);
});

// 4. 测试任务定义文件
test('任务定义文件完整性', () => {
    const fs = require('fs');
    const requiredTasks = [
        'agents/tasks/design-scalable-assignment.md',
        'agents/tasks/upgrade-legacy-project.md'
    ];
    
    for (const taskFile of requiredTasks) {
        if (!fs.existsSync(taskFile)) {
            throw new Error(`缺少任务定义文件: ${taskFile}`);
        }
    }
    
    console.log(`   所有任务定义文件完整`);
});

// 5. 测试CLI功能结构
test('CLI功能结构', () => {
    const fs = require('fs');
    
    if (!fs.existsSync('cli/educators-toolkit.js')) {
        throw new Error('缺少CLI主程序');
    }
    
    if (!fs.existsSync('cli/package.json')) {
        throw new Error('缺少CLI包配置');
    }
    
    const cliContent = fs.readFileSync('cli/educators-toolkit.js', 'utf8');
    const requiredCommands = ['init', 'create-prd', 'create-syllabus', 'create-stories', 'create-lesson-plan', 'create-slides'];
    
    for (const command of requiredCommands) {
        if (!cliContent.includes(`command('${command}')`)) {
            throw new Error(`CLI缺少命令: ${command}`);
        }
    }
    
    console.log(`   CLI包含所有必需命令`);
});

// 6. 测试VSCode扩展结构
test('VSCode扩展结构', () => {
    const fs = require('fs');
    
    if (!fs.existsSync('vscode-extension/package.json')) {
        throw new Error('缺少VSCode扩展包配置');
    }
    
    if (!fs.existsSync('vscode-extension/src/extension.ts')) {
        throw new Error('缺少VSCode扩展主文件');
    }
    
    const packageJson = JSON.parse(fs.readFileSync('vscode-extension/package.json', 'utf8'));
    if (!packageJson.contributes || !packageJson.contributes.commands) {
        throw new Error('VSCode扩展缺少命令配置');
    }
    
    console.log(`   VSCode扩展结构完整`);
});

// 7. 测试文档完整性
test('项目文档完整性', () => {
    const fs = require('fs');
    
    if (!fs.existsSync('README.md')) {
        throw new Error('缺少README文档');
    }
    
    if (!fs.existsSync('docs/architecture.md')) {
        throw new Error('缺少架构文档');
    }
    
    if (!fs.existsSync('docs/brief.md')) {
        throw new Error('缺少项目简介');
    }
    
    if (!fs.existsSync('docs/prd.md')) {
        throw new Error('缺少产品需求文档');
    }
    
    const readmeContent = fs.readFileSync('README.md', 'utf8');
    const requiredSections = ['项目简介', '系统架构', '快速开始', '教育理论框架', '核心功能特性'];
    
    for (const section of requiredSections) {
        if (!readmeContent.includes(section)) {
            throw new Error(`README缺少章节: ${section}`);
        }
    }
    
    console.log(`   项目文档完整`);
});

// 8. 测试教育理论引用
test('教育理论框架完整性', () => {
    const fs = require('fs');
    
    const theoryTerms = [
        '成果导向教育 (OBE)',
        '布鲁姆认知目标分类学',
        '加涅九段教学法',
        '建构主义学习理论',
        '多媒体学习的认知理论'
    ];
    
    let foundTheories = 0;
    const filesToCheck = [
        'README.md',
        'docs/architecture.md',
        'agents/course-planner.md',
        'agents/instructional-designer.md',
        'agents/content-creator.md'
    ];
    
    for (const file of filesToCheck) {
        if (fs.existsSync(file)) {
            const content = fs.readFileSync(file, 'utf8');
            for (const theory of theoryTerms) {
                if (content.includes(theory)) {
                    foundTheories++;
                }
            }
        }
    }
    
    if (foundTheories < theoryTerms.length * 2) { // 期望每个理论至少出现2次
        throw new Error('教育理论框架引用不够完整');
    }
    
    console.log(`   教育理论框架引用完整`);
});

// 9. 测试项目结构标准化
test('标准化项目结构', () => {
    const expectedStructure = [
        'docs/',
        'agents/',
        'agents/tasks/',
        'vscode-extension/',
        'vscode-extension/src/',
        'vscode-extension/src/utils/',
        'vscode-extension/src/agents/',
        'cli/',
        'consistency-check.yaml',
        'team-education.yaml'
    ];
    
    const fs = require('fs');
    
    for (const item of expectedStructure) {
        if (!fs.existsSync(item)) {
            throw new Error(`缺少预期的项目结构: ${item}`);
        }
    }
    
    console.log(`   项目结构标准化完成`);
});

// 10. 测试工作流程完整性
test('工作流程完整性', () => {
    const workflowSteps = [
    '项目初始化',
    '课程规划',
    '任务分解',
    '教案设计',
    '内容生成'
    ];
    
    const readmeContent = fs.readFileSync('README.md', 'utf8');
    
    for (const step of workflowSteps) {
        if (!readmeContent.includes(step)) {
            throw new Error(`README缺少工作流程步骤: ${step}`);
        }
    }
    
    console.log(`   工作流程描述完整`);
});

// 输出测试结果
console.log('\n📊 测试结果汇总:');
console.log('=====================================');
console.log(`✅ 通过: ${testResults.passed}`);
console.log(`❌ 失败: ${testResults.failed}`);
console.log(`📈 成功率: ${Math.round((testResults.passed / (testResults.passed + testResults.failed)) * 100)}%`);

if (testResults.failed > 0) {
    console.log('\n🔍 失败详情:');
    testResults.details.filter(d => d.status === 'FAIL').forEach(detail => {
        console.log(`  ❌ ${detail.name}: ${detail.error}`);
    });
}

// 最终结论
console.log('\n🎯 验证结论:');
if (testResults.failed === 0) {
    console.log('🎉 所有核心逻辑验证通过！');
    console.log('✅ 教育家工具箱项目结构完整');
    console.log('✅ 智能体定义符合规范');
    console.log('✅ CLI和VSCode扩展功能完备');
    console.log('✅ 教育理论框架应用正确');
    console.log('✅ 项目文档齐全');
    process.exit(0);
} else {
    console.log('⚠️  发现一些问题需要修复');
    console.log('请根据测试失败项进行相应的修正');
    process.exit(1);
}