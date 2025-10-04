#!/bin/bash
# Alfred 工作流依赖安装脚本
# Alfred Workflow Dependencies Setup Script

set -e

echo "🚀 设置 Alfred 工作流依赖..."
echo "Setting up Alfred workflow dependencies..."

# 获取脚本目录
SCRIPT_DIR="$(cd "$(dirname "${BASH_SOURCE[0]}")" && pwd)"
cd "$SCRIPT_DIR"

# 检查 Python 是否可用
if ! command -v python3 >/dev/null 2>&1; then
    echo "❌ Python 3 未找到，请先安装 Python 3"
    echo "❌ Python 3 not found, please install Python 3 first"
    exit 1
fi

echo "✅ Python 3 已找到: $(python3 --version)"

# 检查 pip 是否可用
if ! python3 -m pip --version >/dev/null 2>&1; then
    echo "❌ pip 未找到，请先安装 pip"
    echo "❌ pip not found, please install pip first"
    exit 1
fi

echo "✅ pip 已找到: $(python3 -m pip --version)"

# 创建 requirements.txt 如果不存在
if [[ ! -f "requirements.txt" ]]; then
    echo "📝 创建 requirements.txt..."
    cat > requirements.txt << EOF
# Alfred Workflow Python Dependencies
Pillow>=9.0.0
requests>=2.28.0
lxml>=4.9.0
EOF
fi

# 安装 Python 依赖
echo "📦 安装 Python 依赖..."
python3 -m pip install -r requirements.txt --user

# 运行依赖检查脚本
echo "🔍 检查依赖安装状态..."
python3 src/utils/check_dependencies.py

# 检查 conda 环境（可选）
echo "🐍 检查 Conda 环境..."
if command -v conda >/dev/null 2>&1; then
    echo "✅ Conda 已找到: $(conda --version)"
    
    # 尝试在 base 环境中安装依赖
    echo "📦 在 Conda base 环境中安装依赖..."
    conda install -y pillow requests lxml -c conda-forge 2>/dev/null || {
        echo "⚠️  Conda 安装失败，使用 pip 安装"
        conda run -n base pip install -r requirements.txt
    }
else
    echo "⚠️  Conda 未找到，仅使用系统 Python"
fi

# 测试图像处理功能
echo "🧪 测试图像处理功能..."
python3 -c "
try:
    from PIL import Image, ImageGrab
    import requests
    print('✅ 所有依赖测试通过')
except ImportError as e:
    print(f'❌ 依赖测试失败: {e}')
    exit(1)
"

# 设置脚本权限
echo "🔧 设置脚本权限..."
find . -name "*.sh" -exec chmod +x {} \;
find src/cli -name "*.sh" -exec chmod +x {} \; 2>/dev/null || true
find src/utils -name "*.sh" -exec chmod +x {} \; 2>/dev/null || true

echo ""
echo "🎉 依赖安装完成！"
echo "🎉 Dependencies setup completed!"
echo ""
echo "📋 安装的依赖："
echo "   - Pillow (图像处理)"
echo "   - requests (HTTP 请求)"
echo "   - lxml (XML 处理)"
echo ""
echo "🚀 现在可以正常使用 Alfred 工作流了！"
echo "🚀 Alfred workflow is now ready to use!"
