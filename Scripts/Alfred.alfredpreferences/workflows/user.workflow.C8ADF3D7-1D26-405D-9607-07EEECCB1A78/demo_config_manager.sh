#!/bin/bash

# 配置管理器演示脚本
echo "🚀 网站配置管理系统演示"
echo "=========================="

echo ""
echo "1. 查看当前项目结构:"
echo "-------------------"
find src/core/url_extractor -name "*.js" | head -5

echo ""
echo "2. 配置管理器功能特性:"
echo "-------------------"
echo "✅ 统一的网站配置管理"
echo "✅ 命令行界面添加/修改/删除网站"
echo "✅ JSON导入/导出功能"
echo "✅ 自动保存配置到JavaScript文件"
echo "✅ 支持域名识别、图标、标题清理规则"

echo ""
echo "3. 使用方法:"
echo "-------------------"
echo "# 启动配置管理器"
echo "node src/core/url_extractor/site_config_manager.js"
echo ""
echo "# 或者直接运行"
echo "./src/core/url_extractor/site_config_manager.js"

echo ""
echo "4. 配置文件结构:"
echo "-------------------"
echo "每个网站配置包含:"
echo "- domains: 域名列表"
echo "- icon: 图标emoji"
echo "- titleSuffixes: 要移除的标题后缀"
echo "- titlePatterns: 标题处理正则表达式"

echo ""
echo "5. 管理功能:"
echo "-------------------"
echo "- 查看所有网站配置"
echo "- 添加新网站"
echo "- 修改现有网站配置"
echo "- 删除网站配置"
echo "- 导出配置到JSON"
echo "- 从JSON导入配置"

echo ""
echo "6. 当前支持的网站示例:"
echo "-------------------"
head -n 20 src/core/url_extractor/alfred_browser_tabs.js | grep -E "(youtube|github|bilibili)" | head -3

echo ""
echo "=========================="
echo "✨ 现在所有网站信息都在统一管理！"
echo "添加新网站只需要一个配置对象，自动处理所有相关逻辑"