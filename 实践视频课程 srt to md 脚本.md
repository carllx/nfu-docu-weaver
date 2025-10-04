
```zsh
#!/bin/zsh

echo "请输入视频教程文件夹路径："
read folder_path

if [[ ! -d "$folder_path" ]]; then
    echo "错误：文件夹不存在"
    exit 1
fi

output_file="${folder_path:t}.md"

process_srt() {
    local srt_file="$1"
    sed -E '/^[0-9]+$/d; /^[0-9]{2}:[0-9]{2}:[0-9]{2},[0-9]{3} --> [0-9]{2}:[0-9]{2}:[0-9]{2},[0-9]{3}$/d; /^$/d' "$srt_file"
}

{
    echo "# ${folder_path:t}"
    find "$folder_path" -name "*.srt" | sort -V | while read -r srt_file; do
        chapter=$(dirname "$srt_file" | sed -E "s|$folder_path/||")
        subchapter=$(basename "$srt_file" .srt)
        
        echo "## $chapter"
        echo "### $subchapter"
        process_srt "$srt_file"
        echo ""
    done
} > "$output_file"

echo "Markdown 文件已生成：$output_file"
```