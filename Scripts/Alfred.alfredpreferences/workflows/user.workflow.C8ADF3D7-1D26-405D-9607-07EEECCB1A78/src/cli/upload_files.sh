#!/bin/bash

# Activate conda environment efficiently (redirect output to stderr)
source ./src/utils/init_env.sh
init_env >&2


# 引入通知和 markdown 转换功能
source ./src/utils/notification.sh
source ./src/utils/file_selector.sh
source ./src/core/markdown_converter.sh

# 删除重复的 show_alert 函数定义

upload_image() {
    local file_path="$1"
    local filename=$(basename "$file_path")
    
    # 直接使用当前激活的环境，确保传递重要的环境变量
    local result=$(PYTHONNOUSERSITE=1 python3 ./src/core/imgur_uploader.py "$file_path" 2>/dev/null)
    
    if [ $? -ne 0 ]; then
        show_alert "$result" "Upload to imgur failed!"
        return 1
    fi
    
    # 返回 markdown 格式的结果
    to_markdown "$result" "$filename"
}


# Main execution
main() {
    # Get all selected file paths and properly handle them
    local selected_files=()
    while IFS= read -r line; do
        [[ -n "$line" ]] && selected_files+=("$line")
    done < <(get_selected_files $'webp\npng\njpg\njpeg\ngif')  # 修改为每行一个扩展名
    
    if [ ${#selected_files[@]} -eq 0 ]; then
        echo "No files selected!"
        show_alert "No files selected!" "Please select files in Finder!"
        exit 1
    fi

    local total_files=${#selected_files[@]}
    show_notification "Starting upload of $total_files files" "Batch Upload"
    
    # Store all results
    local results=()
    local current=0
    
    # Process each file
    for file in "${selected_files[@]}"; do
        ((current++))
        show_notification "Processing $current of $total_files" "Uploading..."
        
        local imgur_url=$(upload_image "$file")
        if [ $? -eq 0 ]; then
            results+=("$imgur_url")
        fi
    done

    # Combine results
    local combined_result=$(printf "%s\n" "${results[@]}")
    
    # Output only the final result to stdout (for Alfred)
    echo "$combined_result"
    
    # Copy combined results to clipboard
    echo -n "$combined_result" | pbcopy
    
    # Show success notification (redirect to stderr)
    show_notification "Uploaded ${#results[@]} of $total_files files" "Upload Complete!" >&2
}

# Run main function
main