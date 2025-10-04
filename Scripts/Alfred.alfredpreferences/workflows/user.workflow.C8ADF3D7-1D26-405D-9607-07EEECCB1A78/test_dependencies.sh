#!/bin/bash
# 测试依赖是否正确安装和可访问

echo "🧪 测试 Alfred 工作流依赖..."

# 测试环境初始化
echo "1. 测试环境初始化..."
source ./src/utils/init_env.sh
init_env

echo "2. 测试 Python 路径..."
echo "Python 路径: $(which python3)"
echo "Python 版本: $(python3 --version)"

echo "3. 测试 PYTHONPATH..."
echo "PYTHONPATH: $PYTHONPATH"

echo "4. 测试 PIL 导入..."
python3 -c "
try:
    from PIL import Image, ImageGrab
    print('✅ PIL/Pillow 导入成功')
except ImportError as e:
    print(f'❌ PIL/Pillow 导入失败: {e}')
    exit(1)
"

echo "5. 测试 requests 导入..."
python3 -c "
try:
    import requests
    print('✅ requests 导入成功')
except ImportError as e:
    print(f'❌ requests 导入失败: {e}')
    exit(1)
"

echo "6. 测试 imgur_uploader 导入..."
cd "$(dirname "${BASH_SOURCE[0]}")"
python3 -c "
import sys
sys.path.append('./src/core')
try:
    from imgur_uploader import ImgurUploader, ImageProcessor
    print('✅ imgur_uploader 模块导入成功')
except ImportError as e:
    print(f'❌ imgur_uploader 模块导入失败: {e}')
    exit(1)
"

echo ""
echo "🎉 所有依赖测试通过！Alfred 工作流应该可以正常工作了。"
