#!/bin/bash
#
# Lists all available agents in the Agents directory.

echo "Available Agents:"
echo "-----------------"
# Find all .md files in Agents/, remove the path and .md extension, and ignore files starting with _
find Agents -type f -name "*.md" -not -name "_*.md" | sed 's#Agents/##' | sed 's#.md##'
