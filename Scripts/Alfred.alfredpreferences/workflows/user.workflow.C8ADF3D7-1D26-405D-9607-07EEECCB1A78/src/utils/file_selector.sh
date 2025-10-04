#!/bin/bash

# Function to get selected files with optional extension filter
get_selected_files() {
    local extensions="$1"
    osascript <<EOF
    tell application "Finder"
        set selectedItems to selection
        set outputString to ""
        if selectedItems is {} then
            return ""
        end if
        
        repeat with i in selectedItems
            try
                set currentPath to POSIX path of (i as alias)
                set shouldAdd to false
                if "$extensions" is "" then
                    set shouldAdd to true
                else
                    repeat with ext in paragraphs of "$extensions"
                        if currentPath ends with ("." & ext) then
                            set shouldAdd to true
                            exit repeat
                        end if
                    end repeat
                end if
                if shouldAdd then
                    set outputString to outputString & currentPath & linefeed
                end if
            on error
                -- 忽略无法处理的项目
            end try
        end repeat
        return outputString
    end tell
EOF
}