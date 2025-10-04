#!/bin/bash

# Alfred工作流脚本 - 提取当前浏览器标签页
# 使用方法：在Alfred工作流的Run Script动作中使用此脚本

# 获取脚本所在目录（项目根目录）
SCRIPT_DIR="$(cd "$(dirname "${BASH_SOURCE[0]}")" && pwd)"

# 执行JavaScript脚本
osascript -l JavaScript "$SCRIPT_DIR/src/core/url_extractor/alfred_browser_tabs.js" 