#!/bin/bash

source ./src/utils/file_selector.sh
source ./src/utils/notification.sh

# Pandoc 转换后的 Markdown 处理函数
process_markdown() {
    local input_file="$1"
    local output_file="$2"
    local book_name=$(basename "$input_file" .epub)
    local book_dir=$(dirname "$output_file")
    
    # 创建书籍专属目录
    mkdir -p "$book_dir"
    
    # 使用 pandoc 进行初始转换，启用更多 Markdown 扩展
    pandoc "$input_file" \
        -f epub \
        -t markdown-raw_html-native_divs-native_spans \
        --wrap=none \
        --extract-media="$book_dir/assets" \
        --markdown-headings=atx \
        --strip-comments \
        -o "${output_file}.tmp"
    
    # 后处理：调整 Markdown 格式以适应 Obsidian
    awk -F'\n' '
BEGIN {
    in_code_block = 0;
    in_html_block = 0;
    prev_blank = 0;
}
{
    if (!in_code_block && !in_html_block) {
        if ($0 ~ /!\[.*\]\(.*\/assets\//) {
            img_name = $0;
            sub(/^.*\//, "", img_name);
            sub(/\).*$/, "", img_name);
            sub(/!\[.*\]\(.*\/assets\/[^)]*\)/, "![](" img_name ")");
        }
    }
    print $0;
}' "${output_file}.tmp" > "${output_file}"
    
    # 移动图片文件到正确位置
    if [ -d "$book_dir/assets" ]; then
        # 移动所有文件到书籍目录，递归查找所有子目录中的图片
        find "$book_dir/assets" -type f -exec sh -c '
            for file do
                filename=$(basename "$file")
                mv "$file" "'"$book_dir"'/$filename"
            done
        ' sh {} +
        
        # 清理空目录
        rm -rf "$book_dir/assets"
    fi
}

# 处理单个 EPUB 文件
process_single_epub() {
    local epub_file="$1"
    local epub_dir=$(dirname "$epub_file")
    local filename=$(basename "$epub_file" .epub)
    local book_dir="$epub_dir/${filename}"
    local output_file="$book_dir/${filename}.md"
    
    echo "处理文件: $filename"
    process_markdown "$epub_file" "$output_file"
    echo "完成: $output_file"
}

# 处理选中的 EPUB 文件
process_selected_files() {
    local selected_files=()
    while IFS= read -r line; do
        [[ -n "$line" ]] && selected_files+=("$line")
    done < <(get_selected_files "epub")
    
    if [ ${#selected_files[@]} -eq 0 ]; then
        show_notification "未选择任何 EPUB 文件" "错误"
        exit 1
    fi  # Added missing fi
    
    local total_files=${#selected_files[@]}
    show_notification "开始处理 $total_files 个文件" "批量转换"
    
    local current=0
    for file in "${selected_files[@]}"; do
        ((current++))
        show_notification "处理第 $current/$total_files 个文件" "转换中..."
        process_single_epub "$file"
    done
    
    show_notification "完成转换 $total_files 个文件" "转换完成"
}

# 主函数
main() {
    process_selected_files
}

# 执行主函数
main
