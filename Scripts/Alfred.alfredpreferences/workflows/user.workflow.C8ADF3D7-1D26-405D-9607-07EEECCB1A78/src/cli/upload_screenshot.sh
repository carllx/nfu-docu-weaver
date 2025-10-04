# Activate conda environment efficiently
source ./src/utils/notification.sh
source ./src/core/markdown_converter.sh
source ./src/utils/init_env.sh
init_env >&2


placeholder='/Users/yamlam/Downloads/clipboard.png'
# check if Applications Preview.app is open
if pgrep -x "Preview" > /dev/null; then
    show_notification "Quit Preview.app..\nSince its running" "Alfred"
    osascript -e 'quit app "Preview"'
fi

# capture the screen and preview in Applications Preview.app
screencapture -i $placeholder
# 检查 screencapture 的返回值和文件大小
if [ $? -ne 0 ] || [ ! -s "$placeholder" ]; then
    show_notification "截图已取消" "Alfred"
    # 清理可能创建的空文件
    rm -f "$placeholder"
    exit 0
fi

# check if the file clipboard.png exists,then open it in Applications Preview.app
if [ -e $placeholder ]; then
	# open the file in Applications Preview.app and wait for close
	open -a /System/Applications/Preview.app/Contents/MacOS/Preview -W $placeholder
    # send the file to imgur, when the file is closed
    show_notification "via python." "Uploading"
    
    # 直接使用当前激活的环境，确保传递重要的环境变量
    res=$(PYTHONNOUSERSITE=1 python3 ./src/core/imgur_uploader.py "$placeholder" 2>/dev/null)

    # 转换为 Markdown 格式
    markdown_result=$(to_markdown "$res")

    echo "$markdown_result"
    show_notification "$markdown_result" "Success!"  # 使用统一的通知函数
else
    show_notification "file not exists" "Alfred Notification"
    exit 0
fi