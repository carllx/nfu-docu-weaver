


placeholder='/Users/yamlam/Downloads/clipboard.png'
# check if Applications Preview.app is open
if pgrep -x "Preview" > /dev/null; then
	osascript -e 'display notification "Quit Preview.app..\nSince its running" with title "Alfred"'
	osascript -e 'quit app "Preview"'
fi

# capture the screen and preview in Applications Preview.app
screencapture -i $placeholder
# check if the file clipboard.png exists,then open it in Applications Preview.app
if [ -e $placeholder ]; then
	# open the file in Applications Preview.app and wait for close
	open -a /System/Applications/Preview.app/Contents/MacOS/Preview -W $placeholder
	
	# send the file to imgur, when the file is closed
	osascript -e 'display notification "via python." with title "Uploading"'
	res=$(python3 ./src/core/imgur_uploader.py "$placeholder")
	echo "$res"
	osascript -e "display notification \"$res\" with title \"Success!\" sound name \"Frog\""
else
	# warning if the file is not exists
	osascript -e 'display notification "file not exists" with title "Alfred Notification"'
	exit 0
fi



