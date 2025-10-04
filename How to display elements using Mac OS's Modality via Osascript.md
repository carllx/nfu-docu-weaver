[[dev]] 

```bash|osascript

repeat while true
    me activate
    set userResp to display dialog ¬
        "Yes or No?" as text buttons {"No", "Yes"} ¬
        default button "Yes" with icon caution ¬
        with title "Question" giving up after 5
end repeat
```

(-- `macos - How to display modal window using osascript or AppleScript in OS X` [stackoverflow](https://stackoverflow.com/questions/21433486/how-to-display-modal-window-using-osascript-or-applescript-in-os-x))


