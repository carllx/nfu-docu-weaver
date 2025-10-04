#!/bin/bash

# 测试Alfred工作流脚本
echo "测试Alfred浏览器标签页提取功能..."
echo "=================================="

# 执行脚本
result=$(./alfred_browser_extractor.sh)

echo "脚本输出:"
echo "$result"
echo "=================================="

if [[ $result == Error* ]]; then
    echo "❌ 测试失败: $result"
    exit 1
else
    echo "✅ 测试成功: 成功提取到浏览器标签页信息"
    echo "提取的Markdown格式: $result"
fi 