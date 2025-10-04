#!/bin/bash

# Activate conda environment efficiently
. /Users/yamlam/opt/anaconda3/etc/profile.d/conda.sh
conda activate base

# Upload file selected in finder to imgur
# and send the imgur URL to clipboard

# Get the file's path which is selected in finder
path=$(osascript -e 'tell application "Finder" to get POSIX path of (selection as alias)' 2>/dev/null)

if [ -z "$path" ]; then
    # Display alert if no file selected
    echo "No file selected!"
    osascript -e 'display alert "No file selected!" message "Please select a file in Finder!" as critical'
    exit 1
else 
    # Display file name notification if file selected

    osascript -e "display notification \"Uploading $path\" with title \"Uploading...\" sound name \"Frog\""
    # Send the file path to python script and get the imgur URL
    res=$(python3 ./src/core/imgur_uploader.py "$path")
    if [ $? -ne 0 ]; then
        # Display alert if upload failed
        osascript -e "display alert \"$res\" message \"Upload to imgur failed!\" as critical"
        exit 1
    fi
    # Send res to clipboard
    echo -n "$res" | pbcopy

    # Send notification if upload success
    osascript -e "display notification \"$res\" with title \"It worked!\" sound name \"Frog\""
    exit 0
fi