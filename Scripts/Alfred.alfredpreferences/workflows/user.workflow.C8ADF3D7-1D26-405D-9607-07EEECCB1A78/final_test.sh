#!/bin/bash
# 最终验证脚本 - 模拟 Alfred 工作流环境

echo "🔍 最终验证 - 模拟 Alfred 环境"

# 模拟 Alfred 环境变量
export alfred_workflow_directory="$(pwd)"
export alfred_debug="1"

echo "设置环境变量:"
echo "  alfred_workflow_directory: $alfred_workflow_directory"
echo "  alfred_debug: $alfred_debug"

echo ""
echo "1. 测试 init_env.sh:"
source ./src/utils/init_env.sh
init_env

echo ""
echo "2. 测试 upload_clipboard.sh (模拟):"
# 不实际运行上传，只测试环境
if command -v conda >/dev/null 2>&1; then
    echo "  Conda 可用，测试 conda run -n base:"
    conda run -n base python3 -c "
import sys
sys.path.append('./src/core')
try:
    from imgur_uploader import ImgurUploader, ImageProcessor
    print('  ✅ imgur_uploader 模块导入成功')
    print(f'  Python: {sys.executable}')
except Exception as e:
    print(f'  ❌ 导入失败: {e}')
    exit(1)
"
else
    echo "  ❌ Conda 不可用"
fi

echo ""
echo "3. 测试直接调用 (如 Alfred 中):"
cd "${alfred_workflow_directory}"
if conda run -n base python3 -c "from PIL import Image; print('PIL OK')" 2>/dev/null; then
    echo "  ✅ Alfred 模拟环境中 PIL 工作正常"
else
    echo "  ❌ Alfred 模拟环境中 PIL 失败"
fi

echo ""
echo "🎯 最终验证完成！"
