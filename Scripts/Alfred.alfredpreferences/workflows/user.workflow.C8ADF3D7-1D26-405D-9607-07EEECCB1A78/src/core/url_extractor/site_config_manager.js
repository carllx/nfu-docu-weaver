#!/usr/bin/env node

/**
 * 网站配置管理工具
 * 提供命令行界面来管理网站配置
 */

const fs = require('fs');
const path = require('path');
const readline = require('readline');

// 配置文件路径
const CONFIG_FILE = path.join(__dirname, 'site_config.js');

class SiteConfigManager {
    constructor() {
        this.rl = readline.createInterface({
            input: process.stdin,
            output: process.stdout
        });
        this.loadConfig();
    }

    /**
     * 加载配置文件
     */
    loadConfig() {
        try {
            // 读取配置文件并解析
            const configContent = fs.readFileSync(CONFIG_FILE, 'utf8');
            
            // 提取配置对象部分
            const configMatch = configContent.match(/this\.siteConfigs = ({[\s\S]*?});/);
            if (configMatch) {
                this.siteConfigs = eval('(' + configMatch[1] + ')');
            } else {
                this.siteConfigs = {};
            }
        } catch (error) {
            console.error('❌ 加载配置文件失败:', error.message);
            this.siteConfigs = {};
        }
    }

    /**
     * 保存配置到文件
     */
    saveConfig() {
        try {
            // 读取原始文件内容
            let content = fs.readFileSync(CONFIG_FILE, 'utf8');
            
            // 格式化配置对象
            const formattedConfig = this.formatConfig();
            
            // 替换配置部分
            content = content.replace(
                /this\.siteConfigs = {[\s\S]*?};/,
                `this.siteConfigs = ${formattedConfig};`
            );
            
            // 写入文件
            fs.writeFileSync(CONFIG_FILE, content, 'utf8');
            console.log('✅ 配置已保存到', CONFIG_FILE);
        } catch (error) {
            console.error('❌ 保存配置失败:', error.message);
        }
    }

    /**
     * 格式化配置对象为可读的JavaScript代码
     */
    formatConfig() {
        const lines = ['{'];
        
        for (const [siteId, config] of Object.entries(this.siteConfigs)) {
            lines.push(`            '${siteId}': {`);
            lines.push(`                domains: ${JSON.stringify(config.domains)},`);
            lines.push(`                icon: '${config.icon}',`);
            lines.push(`                titleSuffixes: ${JSON.stringify(config.titleSuffixes || [])}`);
            
            if (config.titlePatterns && config.titlePatterns.length > 0) {
                lines.push(',');
                lines.push(`                titlePatterns: [`);
                config.titlePatterns.forEach((pattern, index) => {
                    const comma = index < config.titlePatterns.length - 1 ? ',' : '';
                    lines.push(`                    { pattern: ${pattern.pattern}, replacement: '${pattern.replacement}' }${comma}`);
                });
                lines.push('                ]');
            }
            
            lines.push('            },');
        }
        
        lines.push('        }');
        return lines.join('\n');
    }

    /**
     * 显示主菜单
     */
    showMenu() {
        console.log('\n🔧 网站配置管理器');
        console.log('==================');
        console.log('1. 查看所有网站配置');
        console.log('2. 添加新网站');
        console.log('3. 修改网站配置');
        console.log('4. 删除网站配置');
        console.log('5. 导出配置到JSON');
        console.log('6. 从JSON导入配置');
        console.log('0. 退出');
        console.log('==================');
        
        this.rl.question('请选择操作 (0-6): ', (choice) => {
            this.handleMenuChoice(choice.trim());
        });
    }

    /**
     * 处理菜单选择
     */
    handleMenuChoice(choice) {
        switch (choice) {
            case '1':
                this.listSites();
                break;
            case '2':
                this.addSite();
                break;
            case '3':
                this.editSite();
                break;
            case '4':
                this.deleteSite();
                break;
            case '5':
                this.exportConfig();
                break;
            case '6':
                this.importConfig();
                break;
            case '0':
                this.exit();
                break;
            default:
                console.log('❌ 无效选择，请重新输入');
                this.showMenu();
        }
    }

    /**
     * 列出所有网站配置
     */
    listSites() {
        console.log('\n📋 当前网站配置:');
        console.log('================');
        
        if (Object.keys(this.siteConfigs).length === 0) {
            console.log('暂无网站配置');
        } else {
            for (const [siteId, config] of Object.entries(this.siteConfigs)) {
                console.log(`${config.icon} ${siteId}:`);
                console.log(`   域名: ${config.domains.join(', ')}`);
                console.log(`   标题后缀: ${(config.titleSuffixes || []).join(', ')}`);
                if (config.titlePatterns && config.titlePatterns.length > 0) {
                    console.log(`   标题模式: ${config.titlePatterns.length} 个规则`);
                }
                console.log('');
            }
        }
        
        this.showMenu();
    }

    /**
     * 添加新网站
     */
    addSite() {
        console.log('\n➕ 添加新网站配置');
        console.log('==================');
        
        this.rl.question('网站ID (如: youtube): ', (siteId) => {
            if (this.siteConfigs[siteId]) {
                console.log('❌ 该网站ID已存在，请使用修改功能');
                this.showMenu();
                return;
            }
            
            this.rl.question('域名 (多个用逗号分隔): ', (domains) => {
                this.rl.question('图标 emoji: ', (icon) => {
                    this.rl.question('标题后缀 (多个用逗号分隔，可选): ', (suffixes) => {
                        const config = {
                            domains: domains.split(',').map(d => d.trim()),
                            icon: icon.trim(),
                            titleSuffixes: suffixes ? suffixes.split(',').map(s => s.trim()) : []
                        };
                        
                        this.siteConfigs[siteId.trim()] = config;
                        this.saveConfig();
                        console.log(`✅ 已添加网站配置: ${siteId}`);
                        this.showMenu();
                    });
                });
            });
        });
    }

    /**
     * 编辑网站配置
     */
    editSite() {
        console.log('\n✏️ 修改网站配置');
        console.log('================');
        
        this.rl.question('要修改的网站ID: ', (siteId) => {
            siteId = siteId.trim();
            
            if (!this.siteConfigs[siteId]) {
                console.log('❌ 网站ID不存在');
                this.showMenu();
                return;
            }
            
            const config = this.siteConfigs[siteId];
            console.log(`当前配置: ${JSON.stringify(config, null, 2)}`);
            
            this.rl.question(`域名 [${config.domains.join(', ')}]: `, (domains) => {
                this.rl.question(`图标 [${config.icon}]: `, (icon) => {
                    this.rl.question(`标题后缀 [${(config.titleSuffixes || []).join(', ')}]: `, (suffixes) => {
                        // 更新配置
                        if (domains.trim()) {
                            config.domains = domains.split(',').map(d => d.trim());
                        }
                        if (icon.trim()) {
                            config.icon = icon.trim();
                        }
                        if (suffixes.trim() !== '') {
                            config.titleSuffixes = suffixes ? suffixes.split(',').map(s => s.trim()) : [];
                        }
                        
                        this.saveConfig();
                        console.log(`✅ 已更新网站配置: ${siteId}`);
                        this.showMenu();
                    });
                });
            });
        });
    }

    /**
     * 删除网站配置
     */
    deleteSite() {
        console.log('\n🗑️ 删除网站配置');
        console.log('================');
        
        this.rl.question('要删除的网站ID: ', (siteId) => {
            siteId = siteId.trim();
            
            if (!this.siteConfigs[siteId]) {
                console.log('❌ 网站ID不存在');
                this.showMenu();
                return;
            }
            
            this.rl.question(`确定删除 "${siteId}" 吗? (y/N): `, (confirm) => {
                if (confirm.toLowerCase() === 'y') {
                    delete this.siteConfigs[siteId];
                    this.saveConfig();
                    console.log(`✅ 已删除网站配置: ${siteId}`);
                } else {
                    console.log('❌ 取消删除');
                }
                this.showMenu();
            });
        });
    }

    /**
     * 导出配置到JSON文件
     */
    exportConfig() {
        const exportPath = path.join(__dirname, 'site_config_export.json');
        try {
            fs.writeFileSync(exportPath, JSON.stringify(this.siteConfigs, null, 2), 'utf8');
            console.log(`✅ 配置已导出到: ${exportPath}`);
        } catch (error) {
            console.error('❌ 导出失败:', error.message);
        }
        this.showMenu();
    }

    /**
     * 从JSON文件导入配置
     */
    importConfig() {
        const importPath = path.join(__dirname, 'site_config_import.json');
        
        this.rl.question(`从 ${importPath} 导入配置? (y/N): `, (confirm) => {
            if (confirm.toLowerCase() === 'y') {
                try {
                    const importedConfig = JSON.parse(fs.readFileSync(importPath, 'utf8'));
                    this.siteConfigs = { ...this.siteConfigs, ...importedConfig };
                    this.saveConfig();
                    console.log('✅ 配置导入成功');
                } catch (error) {
                    console.error('❌ 导入失败:', error.message);
                }
            }
            this.showMenu();
        });
    }

    /**
     * 退出程序
     */
    exit() {
        console.log('👋 再见！');
        this.rl.close();
        process.exit(0);
    }

    /**
     * 启动管理器
     */
    start() {
        console.log('🚀 网站配置管理器启动');
        this.showMenu();
    }
}

// 如果直接运行此文件，启动管理器
if (require.main === module) {
    const manager = new SiteConfigManager();
    manager.start();
}

module.exports = SiteConfigManager;