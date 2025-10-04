# EPUB2MD 使用示例

本文档提供了 EPUB2MD 工具的详细使用示例和最佳实践。

## 基本使用场景

### 1. 转换单个 EPUB 文件

**最简单的转换：**
```bash
python -m epub2md.cli.main -i "我的书籍.epub" -o ./output
```

**包含图片上传的完整转换：**
```bash
python -m epub2md.cli.main -i "我的书籍.epub" -o ./output --upload-images --verbose
python -m epub2md.cli.main -i "/Users/yamlam/Downloads/BOOK/Philosophy & Psychology/Richard Frankel, Victor J. Krebs - Human Virtuality and Digital Life Philosophical and Psychoanalytic Investigations.epub" -o '/Users/yamlam/Downloads/BOOK/Philosophy & Psychology/Richard Frankel, Victor J. Krebs - Human Virtuality and Digital Life Philosophical and Psychoanalytic Investigations' --upload-images --verbose
```

**强制重新生成（即使文件已存在）：**
```bash
python -m epub2md.cli.main -i "我的书籍.epub" -o ./output --upload-images --force
```

### 2. 处理现有 Markdown 文件

**处理单个 Markdown 文件：**
```bash
python -m epub2md.md_imgur_replace file.md
```

**处理包含图片的 Markdown 文件：**
```bash
# 假设有以下目录结构：
# document.md
# ├── image1.jpg
# ├── images/
# │   └── image2.png
# └── assets/
#     └── logo.png

python epub2md/md_imgur_replace.py document.md
```

### 3. 批量处理

**批量转换多个 EPUB 文件：**
```bash
# 使用 shell 循环
for epub in *.epub; do
    python -m epub2md.cli.main -i "$epub" -o ./output --upload-images
done
```

**批量处理多个 Markdown 文件：**
```bash
# 处理当前目录下所有 .md 文件
for md in *.md; do
    python epub2md/md_imgur_replace.py "$md"
done
```

## 高级使用场景

### 1. 自定义 Pandoc 路径

如果 pandoc 不在系统 PATH 中：
```bash
python -m epub2md.cli.main -i "我的书籍.epub" -o ./output --pandoc-path /usr/local/bin/pandoc
```

### 2. 保留本地图片文件

默认情况下，上传到 Imgur 后会删除本地图片文件。如需保留：
```bash
python -m epub2md.cli.main -i "我的书籍.epub" -o ./output --upload-images --keep-local-images
```

### 3. 详细日志输出

启用详细日志以调试问题：
```bash
python -m epub2md.cli.main -i "我的书籍.epub" -o ./output --upload-images --verbose
```

## 目录结构示例

### 输入文件结构
```
input/
├── 我的书籍.epub
├── 另一本书.epub
└── 文档.md
    ├── image1.jpg
    ├── images/
    │   └── image2.png
    └── assets/
        └── logo.png
```

### 输出文件结构
```
output/
├── 我的书籍.md
├── 我的书籍_media/
│   ├── image1.jpg
│   └── image2.png
├── 另一本书.md
├── 另一本书_media/
│   └── cover.jpg
├── 文档.md
└── imgur_map.json
```

## 配置示例

### 环境变量配置 (.env 文件)
```bash
# 必需：Imgur API Client ID
IMGUR_CLIENT_ID=your_imgur_client_id_here

# 可选：Imgur API Secret（用于认证上传）
IMGUR_CLIENT_SECRET=your_imgur_client_secret_here

# 可选：自定义 pandoc 路径
PANDOC_PATH=/usr/local/bin/pandoc

# 可选：日志级别
LOG_LEVEL=INFO

# 可选：默认输出目录
DEFAULT_OUTPUT_DIR=./output
```

## 错误处理和故障排除

### 常见问题

**1. Pandoc 未找到**
```bash
# 错误信息：找不到 pandoc
# 解决方案：安装 pandoc 或指定正确路径
brew install pandoc  # macOS
sudo apt-get install pandoc  # Ubuntu/Debian
```

**2. Imgur API 配置错误**
```bash
# 错误信息：Imgur API not configured
# 解决方案：设置 IMGUR_CLIENT_ID
echo "IMGUR_CLIENT_ID=your_client_id" >> .env
```

**3. 图片文件未找到**
```bash
# 错误信息：Image file not found
# 解决方案：检查图片路径和目录结构
# 确保图片文件存在于以下位置之一：
# - 同级目录
# - images/ 子目录
# - img/ 子目录
# - assets/ 子目录
# - media/ 子目录
```

**4. 图片文件过大**
```bash
# 错误信息：Image file too large
# 解决方案：Imgur 匿名上传限制为 10MB
# 可以压缩图片或使用认证上传（需要 IMGUR_CLIENT_SECRET）
```

### 调试技巧

**1. 启用详细日志**
```bash
python -m epub2md.cli.main -i "我的书籍.epub" -o ./output --upload-images --verbose
```

**2. 检查缓存文件**
```bash
# 查看 imgur_map.json 了解上传历史
cat output/imgur_map.json
```

**3. 手动测试图片查找**
```bash
# 在 Python 中测试图片路径解析
python -c "
from epub2md.core.image_handler import _resolve_image_path
from pathlib import Path
result = _resolve_image_path('image.jpg', Path('document.md'))
print(f'Resolved path: {result}')
print(f'Exists: {result.exists()}')
"
```

## 最佳实践

### 1. 文件命名
- 使用英文文件名避免编码问题
- 避免文件名中的特殊字符
- 使用有意义的文件名

### 2. 目录组织
- 为每个项目创建独立的输出目录
- 定期清理临时文件
- 备份重要的 imgur_map.json 文件

### 3. 图片优化
- 在转换前压缩大图片
- 使用合适的图片格式（JPG 用于照片，PNG 用于图表）
- 考虑图片质量和文件大小的平衡

### 4. 批量处理
- 使用脚本自动化批量转换
- 监控磁盘空间使用
- 定期检查 Imgur 配额使用情况

### 5. 版本控制
- 将 .env 文件添加到 .gitignore
- 不要提交包含敏感信息的配置文件
- 使用环境变量管理敏感信息

## 性能优化

### 1. 并行处理
```bash
# 使用 GNU parallel 并行处理多个文件
parallel python -m epub2md.cli.main -i {} -o ./output --upload-images ::: *.epub
```

### 2. 缓存利用
- 工具会自动缓存已上传的图片
- 重复运行时会跳过已上传的图片
- 利用 imgur_map.json 进行断点续传

### 3. 资源管理
- 监控内存使用情况
- 定期清理临时文件
- 使用 SSD 存储提高 I/O 性能

## 集成示例

### 1. 与 Obsidian 集成
```bash
# 转换 EPUB 到 Obsidian 库
python -m epub2md.cli.main -i "我的书籍.epub" -o ~/obsidian/books --upload-images
```

### 2. 与 Git 集成
```bash
# 创建转换脚本
#!/bin/bash
python -m epub2md.cli.main -i "$1" -o ./output --upload-images
git add output/
git commit -m "Convert $1 to Markdown"
```

### 3. 与自动化工具集成
```bash
# 使用 cron 定期处理新文件
# 添加到 crontab
0 */6 * * * /path/to/convert_new_epubs.sh
```

这些示例涵盖了 EPUB2MD 工具的主要使用场景。根据具体需求，可以组合和扩展这些示例。 