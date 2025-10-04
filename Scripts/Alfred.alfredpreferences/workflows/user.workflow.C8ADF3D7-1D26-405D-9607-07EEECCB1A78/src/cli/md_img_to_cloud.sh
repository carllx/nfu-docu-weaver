#!/bin/bash

# Activate conda environment efficiently
source ./src/utils/notification.sh
source ./src/utils/file_selector.sh
source ./src/utils/init_env.sh
init_env


convert_markdown() {
    local file_path="$1"
    local result=$(python3 ./src/core/convert_local_images.py "$file_path")
    local status=$?
    
    # 检查执行状态
    if [ $status -ne 0 ]; then
        show_alert "$result" "Convert markdown failed!"
        return 1
    fi
    
    # 如果结果是0，表示没有找到图片
    if [ "$result" -eq 0 ]; then
        show_notification "文件中没有本地图片" "无需处理"
        return 0
    fi
    
    # 显示处理完成的通知
    show_notification "完成处理 $result" "转换完成"
    echo "$result"
}

# Main execution
main() {
    # Get all selected markdown files
    local selected_files=()
    while IFS= read -r line; do
        [[ -n "$line" ]] && selected_files+=("$line")
    done < <(get_selected_files "md")  # 修改为不带点的扩展名
    
    if [ ${#selected_files[@]} -eq 0 ]; then
        echo "No markdown files selected!"
        show_alert "No markdown files selected!" "Please select markdown files in Finder!"
        exit 1
    fi

    local total_files=${#selected_files[@]}
    show_notification "开始处理 $total_files 个 Markdown 文件" "批量转换"
    
    # Process each file
    local current=0
    for file in "${selected_files[@]}"; do
        ((current++))
        show_notification "处理第 $current/$total_files 个文件" "转换中..."
        
        convert_markdown "$file"
    done
    
    # Show success notification
    show_notification "完成处理 $total_files 个文件" "转换完成!"
}

# Run main function
main