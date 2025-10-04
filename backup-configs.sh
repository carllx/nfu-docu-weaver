#!/bin/bash
# 备份 Obsidian 重要配置文件

BACKUP_DIR="$HOME/Documents/obsidian-config-backup/$(date +%Y%m%d_%H%M%S)"
mkdir -p "$BACKUP_DIR"

# 备份重要配置
cp -r .obsidian/plugins/obsidian-git "$BACKUP_DIR/"
cp .obsidian/app.json "$BACKUP_DIR/" 2>/dev/null
cp .obsidian/appearance.json "$BACKUP_DIR/" 2>/dev/null
cp .obsidian/core-plugins.json "$BACKUP_DIR/" 2>/dev/null
cp .obsidian/community-plugins.json "$BACKUP_DIR/" 2>/dev/null

# 备份 Copilot 索引文件（本地重要文件）
mkdir -p "$BACKUP_DIR/copilot-indexes"
cp .obsidian/copilot-index-*.json "$BACKUP_DIR/copilot-indexes/" 2>/dev/null
cp .obsidian/copilot-index-chunk-*.json "$BACKUP_DIR/copilot-indexes/" 2>/dev/null

echo "配置已备份到: $BACKUP_DIR"
echo "包括 Copilot 索引文件"
