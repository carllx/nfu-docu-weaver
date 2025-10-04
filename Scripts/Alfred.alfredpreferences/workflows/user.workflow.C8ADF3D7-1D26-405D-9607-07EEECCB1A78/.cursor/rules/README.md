# Cursor Rules for Alfred Workflow Development

This directory contains Cursor Rules that provide comprehensive guidance for developing and maintaining Alfred workflows. These rules will be automatically applied by Cursor to help ensure consistent code quality and adherence to Alfred workflow best practices.

## Rules Overview

### 1. `alfred-workflow.mdc` (Always Applied)
- **Purpose**: Core Alfred workflow development standards
- **Scope**: Entire project
- **Key Features**:
  - Project structure guidelines
  - Alfred environment variable usage
  - Script organization patterns
  - Error handling standards
  - Browser integration best practices
  - Markdown output formatting

### 2. `shell-scripting.mdc` (Shell Files)
- **Purpose**: Shell script standards for Alfred workflows
- **Scope**: `*.sh`, `*.bash`, `*.zsh` files
- **Key Features**:
  - Proper shebang usage (`#!/bin/zsh --no-rcs` for Alfred)
  - Alfred environment integration
  - Error handling patterns
  - Variable management
  - Function guidelines

### 3. `javascript-jxa.mdc` (JavaScript Files)
- **Purpose**: JavaScript for Automation (JXA) standards
- **Scope**: `*.js` files
- **Key Features**:
  - Browser automation patterns
  - Error handling for application access
  - Site management and URL processing
  - Alfred integration patterns
  - Performance optimization

### 4. `python-scripts.mdc` (Python Files)
- **Purpose**: Python scripting standards
- **Scope**: `*.py` files
- **Key Features**:
  - Alfred environment integration
  - Image processing standards
  - HTTP request handling
  - Configuration management
  - Script filter output formatting

### 5. `workflow-config.mdc` (Configuration)
- **Purpose**: Alfred workflow configuration standards
- **Scope**: Manual application (use when working with `info.plist`)
- **Key Features**:
  - `info.plist` structure guidelines
  - Object configuration patterns
  - Connection management
  - Best practices for workflow distribution

## How These Rules Work

1. **Automatic Application**: Rules with `alwaysApply: true` or matching `globs` patterns are automatically applied when editing relevant files.

2. **Context-Aware Guidance**: Cursor will use these rules to provide:
   - Code completion suggestions
   - Error detection and fixes
   - Best practice recommendations
   - Consistent formatting

3. **Project-Specific Knowledge**: Rules reference your actual project files using `[filename.ext](mdc:filename.ext)` syntax, providing contextual guidance based on your codebase.

## Benefits

- **Consistency**: Ensures all scripts follow Alfred workflow conventions
- **Error Prevention**: Catches common Alfred workflow pitfalls early
- **Best Practices**: Enforces proven patterns from Alfred documentation
- **Productivity**: Reduces time spent on configuration and debugging
- **Knowledge Sharing**: Codifies Alfred workflow expertise for the team

## Usage Tips

1. **Trust the Rules**: These rules are based on official Alfred documentation and project analysis
2. **Customize as Needed**: Modify rules to match your specific workflow requirements
3. **Keep Updated**: Update rules as Alfred releases new features or your project evolves
4. **Learn from Suggestions**: Pay attention to Cursor's suggestions to improve your Alfred workflow skills

## File References

The rules reference key project files:
- [`info.plist`](../info.plist) - Main workflow configuration
- [`alfred_browser_extractor.sh`](../alfred_browser_extractor.sh) - Browser extraction script
- [`src/core/url_extractor/alfred_browser_tabs.js`](../src/core/url_extractor/alfred_browser_tabs.js) - Browser tab processing
- [`src/core/imgur_uploader.py`](../src/core/imgur_uploader.py) - Image upload functionality

These references help Cursor understand your project structure and provide more accurate guidance.
