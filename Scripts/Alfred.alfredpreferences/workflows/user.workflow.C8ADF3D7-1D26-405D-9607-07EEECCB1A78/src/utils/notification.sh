#!/bin/bash

# Function to show notifications
show_notification() {
    local message="$1"
    local title="$2"
    osascript -e "display notification \"$message\" with title \"$title\" sound name \"Frog\""
}

# Function to show alerts
show_alert() {
    local message="$1"
    local details="$2"
    osascript -e "display alert \"$message\" message \"$details\" as critical"
}