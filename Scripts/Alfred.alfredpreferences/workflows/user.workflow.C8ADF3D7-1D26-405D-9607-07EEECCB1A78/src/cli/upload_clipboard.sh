#!/bin/bash

# Activate conda environment efficiently (redirect output to stderr)
source ./src/utils/init_env.sh
init_env >&2

source ./src/utils/notification.sh
source ./src/core/markdown_converter.sh

show_notification "via python." "Uploading from clipboard"
# Call imgur_uploader.py without arguments to handle clipboard data
# 直接使用当前激活的环境，确保传递重要的环境变量
res=$(PYTHONNOUSERSITE=1 python3 ./src/core/imgur_uploader.py "" 2>/dev/null)

if [ $? -ne 0 ]; then
    show_notification "Upload failed" "Error"
    exit 1
fi

markdown_result=$(to_markdown "$res")

echo "$markdown_result"
show_notification "$markdown_result" "Success!"
exit 0