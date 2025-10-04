#!/usr/bin/env node

// VSCode扩展功能测试脚本
// 模拟VSCode API环境进行基本功能测试

const path = require('path');
const fs = require('fs-extra');

// 模拟VSCode API
const mockVSCode = {
    workspace: {
        workspaceFolders: [{
            uri: { fsPath: process.cwd() }
        }],
        getConfiguration: (section) => ({
            get: (key, defaultValue) => defaultValue
        })
    },
    window: {
        showInformationMessage: (message, ...actions) => {
            console.log(`[INFO] ${message}`);
            return Promise.resolve(actions[0]);
        },
        showErrorMessage: (message) => {
            console.log(`[ERROR] ${message}`);
            return Promise.resolve();
        },
        showWarningMessage: (message, ...actions) => {
            console.log(`[WARN] ${message}`);
            return Promise.resolve(actions[0]);
        },
        createStatusBarItem: () => ({
            text: '',
            show: () => {},
            hide: () => {},
            dispose: () => {}
        }),
        activeTextEditor: null
    },
    commands: {
        executeCommand: (command) => {
            console.log(`[COMMAND] ${command}`);
            return Promise.resolve();
        }
    },
    Uri: {
        file: (path) => ({ fsPath: path })
    },
    StatusBarAlignment: { Left: 1 },
    OutputChannel: class {
        constructor(name) { this.name = name; }
        appendLine(message) { console.log(`[LOG] ${message}`); }
        show() {}
        dispose() {}
    }
};

// 设置全局mock
global.vscode = mockVSCode;

// 测试函数
async function testExtension() {
    console.log('🧪 开始测试VSCode扩展功能\n');

    try {
        // 测试配置管理器
        console.log('📋 测试配置管理器...');
        const { ConfigurationManager } = require('./vscode-extension/out/utils/configuration');
        const configManager = new ConfigurationManager();
        console.log('✅ 配置管理器创建成功');

        // 测试文件系统管理器
        console.log('📁 测试文件系统管理器...');
        const { FileSystemManager } = require('./vscode-extension/out/utils/fileSystemManager');
        const fileSystemManager = new FileSystemManager();
        console.log('✅ 文件系统管理器创建成功');

        // 测试模板管理器
        console.log('📄 测试模板管理器...');
        const { TemplateManager } = require('./vscode-extension/out/utils/templateManager');
        const templateManager = new TemplateManager({ globalStorageUri: { fsPath: '/tmp' } });
        console.log('✅ 模板管理器创建成功');

        // 测试代理协调器
        console.log('🤝 测试代理协调器...');
        const { AgentOrchestrator } = require('./vscode-extension/out/utils/agentOrchestrator');
        const agentOrchestrator = new AgentOrchestrator();
        console.log('✅ 代理协调器创建成功');

        // 测试课程规划师
        console.log('🎓 测试课程规划师...');
        const { CoursePlanner } = require('./vscode-extension/out/agents/coursePlanner');
        const coursePlanner = new CoursePlanner(
            { globalStorageUri: { fsPath: '/tmp' } },
            configManager,
            fileSystemManager,
            templateManager
        );
        console.log('✅ 课程规划师创建成功');

        // 测试教学设计师
        console.log('🏗️ 测试教学设计师...');
        const { InstructionalDesigner } = require('./vscode-extension/out/agents/instructionalDesigner');
        const instructionalDesigner = new InstructionalDesigner(
            { globalStorageUri: { fsPath: '/tmp' } },
            configManager,
            fileSystemManager,
            templateManager,
            agentOrchestrator
        );
        console.log('✅ 教学设计师创建成功');

        // 测试内容创作者
        console.log('🎬 测试内容创作者...');
        const { ContentCreator } = require('./vscode-extension/out/agents/contentCreator');
        const contentCreator = new ContentCreator(
            { globalStorageUri: { fsPath: '/tmp' } },
            configManager,
            fileSystemManager,
            templateManager
        );
        console.log('✅ 内容创作者创建成功');

        // 测试项目迁移器
        console.log('🔄 测试项目迁移器...');
        const { ProjectMigrator } = require('./vscode-extension/out/agents/projectMigrator');
        const projectMigrator = new ProjectMigrator(
            { globalStorageUri: { fsPath: '/tmp' } },
            configManager,
            fileSystemManager,
            templateManager
        );
        console.log('✅ 项目迁移器创建成功');

        // 测试质量保证
        console.log('✅ 测试质量保证...');
        const { QualityAssurance } = require('./vscode-extension/out/agents/qualityAssurance');
        const qualityAssurance = new QualityAssurance(
            { globalStorageUri: { fsPath: '/tmp' } },
            configManager,
            fileSystemManager,
            agentOrchestrator
        );
        console.log('✅ 质量保证创建成功');

        // 测试主要功能
        console.log('\n🔧 测试核心功能...\n');

        // 测试模板渲染
        console.log('1. 测试模板渲染...');
        const templateContent = await templateManager.renderTemplate('brief.md', {
            projectName: '测试课程',
            version: '1.0',
            date: '2024-01-01'
        });
        console.log('✅ 模板渲染成功');
        console.log('渲染结果预览:');
        console.log(templateContent.substring(0, 200) + '...\n');

        // 测试一致性检查
        console.log('2. 测试一致性检查...');
        const checkResults = await agentOrchestrator.runConsistencyChecks();
        console.log(`✅ 一致性检查完成，通过率: ${checkResults.passed}/${checkResults.total}`);
        
        // 测试文件系统操作
        console.log('3. 测试文件系统操作...');
        const testDir = path.join(process.cwd(), 'test-output');
        await fileSystemManager.createDirectory(testDir);
        
        const testFile = path.join(testDir, 'test.md');
        await fileSystemManager.writeFile(testFile, '# 测试文件\n这是一个测试文件。');
        console.log('✅ 文件系统操作成功');

        // 测试日志系统
        console.log('4. 测试日志系统...');
        const { Logger } = require('./vscode-extension/out/utils/logger');
        Logger.debug('调试信息');
        Logger.info('一般信息');
        Logger.warn('警告信息');
        Logger.error('错误信息');
        console.log('✅ 日志系统测试完成');

        console.log('\n🎉 所有测试通过！VSCode扩展功能正常。\n');

        // 清理测试文件
        console.log('🧹 清理测试文件...');
        await fs.remove(testDir);
        console.log('✅ 清理完成');

    } catch (error) {
        console.error('\n❌ 测试失败:', error);
        console.error('错误堆栈:', error.stack);
        process.exit(1);
    }
}

// 运行测试
console.log('🚀 VSCode扩展功能测试开始');
console.log('=====================================\n');

testExtension().then(() => {
    console.log('\n✅ 测试完成！');
    process.exit(0);
}).catch(error => {
    console.error('\n❌ 测试异常:', error);
    process.exit(1);
});