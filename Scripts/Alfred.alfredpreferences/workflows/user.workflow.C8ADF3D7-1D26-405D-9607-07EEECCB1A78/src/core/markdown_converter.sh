#!/bin/bash

# Function to convert imgur url to markdown format
to_markdown() {
    local url="$1"
    local filename="$2"
    
    # 检查是否为错误信息
    if [[ $url == Error:* ]]; then
        echo "$url"
        return 1
    fi
    
    # 检查是否为 GIF
    if [[ $url == *.gif ]]; then
        echo "![bg fit left:50% vertical]($url)"
        return 0
    fi
    
    # 其他图片转换为 webp
    local base_url="${url%.*}"
    echo "![bg fit left:50% vertical](${base_url}.webp)"
}

# 如果直接运行此脚本，处理输入参数
if [[ "${BASH_SOURCE[0]}" == "${0}" ]]; then
    if [ $# -lt 1 ]; then
        echo "Usage: $0 <imgur_url> [filename]"
        exit 1
    fi
    
    url="$1"
    filename="${2:-}"
    to_markdown "$url" "$filename"
fi