#!/bin/bash
# Alfred 工作流调试脚本

echo "=== Alfred 工作流环境调试 ==="
echo "时间: $(date)"
echo "工作目录: $(pwd)"
echo "用户: $(whoami)"
echo "Shell: $0"

echo ""
echo "=== 环境变量 ==="
echo "alfred_workflow_directory: ${alfred_workflow_directory:-未设置}"
echo "alfred_debug: ${alfred_debug:-未设置}"
echo "PYTHONPATH: ${PYTHONPATH:-未设置}"
echo "PATH: $PATH"

echo ""
echo "=== Python 环境 ==="
echo "Python 路径: $(which python3)"
echo "Python 版本: $(python3 --version)"

echo ""
echo "=== Conda 环境 ==="
if command -v conda >/dev/null 2>&1; then
    echo "Conda 路径: $(which conda)"
    echo "Conda 版本: $(conda --version)"
    echo "当前环境: $CONDA_DEFAULT_ENV"
    echo "Conda 环境列表:"
    conda env list
else
    echo "Conda 未找到"
fi

echo ""
echo "=== 测试 PIL 导入 ==="
echo "1. 直接 Python 测试:"
python3 -c "
try:
    from PIL import Image, ImageGrab
    print('✅ PIL 导入成功')
except ImportError as e:
    print(f'❌ PIL 导入失败: {e}')
"

echo ""
echo "2. Conda run 测试:"
if command -v conda >/dev/null 2>&1; then
    conda run -n base python3 -c "
try:
    from PIL import Image, ImageGrab
    print('✅ Conda base 环境 PIL 导入成功')
except ImportError as e:
    print(f'❌ Conda base 环境 PIL 导入失败: {e}')
"
else
    echo "Conda 不可用，跳过测试"
fi

echo ""
echo "=== 脚本内容检查 ==="
echo "upload_screenshot.sh 中的 conda run 命令:"
grep -n "conda run" src/cli/upload_screenshot.sh || echo "未找到 conda run"

echo ""
echo "upload_clipboard.sh 中的 conda run 命令:"
grep -n "conda run" src/cli/upload_clipboard.sh || echo "未找到 conda run"

echo ""
echo "=== 调试完成 ==="
