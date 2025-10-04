# 🚨 Python/Conda 问题快速修复清单

> 当 Python 工具或 Alfred 工作流出现依赖问题时的快速诊断和修复指南

## 🔍 快速诊断 (2分钟)

```bash
# 1. 检查环境状态
echo "=== 环境诊断 ==="
which python3
python3 --version
conda info --envs

# 2. 测试关键包
python3 -c "
packages = ['PIL', 'requests', 'lxml', 'numpy']
for pkg in packages:
    try:
        __import__(pkg)
        print(f'✅ {pkg}')
    except ImportError:
        print(f'❌ {pkg}')
"

# 3. 检查包安装位置
conda list | grep -E "(pillow|requests|lxml)"
```

## ⚡ 快速修复步骤

### 步骤1: 清理混乱的安装
```bash
# 移除用户目录中的包
pip uninstall -y Pillow requests lxml numpy pandas

# 清理 pip 缓存
pip cache purge
```

### 步骤2: 正确安装到 conda 环境
```bash
# 激活 base 环境
conda activate base

# 安装到环境而非用户目录
pip install --no-user Pillow requests lxml

# 验证安装位置
conda list pillow
```

### 步骤3: 验证修复
```bash
# 测试导入
python3 -c "from PIL import Image; print('PIL OK')"

# 测试 Alfred 工作流 (如适用)
cd /path/to/alfred/workflow
python3 ./src/core/imgur_uploader.py --test
```

## 🎯 常见问题快速解决

### 问题: `ModuleNotFoundError: No module named 'PIL'`
```bash
conda activate base
pip install --no-user Pillow
```

### 问题: `mach-o file, but is an incompatible architecture`
```bash
pip uninstall -y Pillow
CONDA_SUBDIR=osx-arm64 pip install --no-user Pillow
```

### 问题: `conda: command not found`
```bash
# 重新初始化 conda
source /opt/miniconda3/etc/profile.d/conda.sh
conda init zsh  # 或 bash
```

### 问题: Alfred 工作流脚本失败
```bash
# 检查脚本中的 conda 调用
grep -r "conda run" /path/to/workflow/
# 确保使用: conda run -n base python3
```

## 📋 预防性检查清单

### 安装新包时
- [ ] 使用 `conda activate base` 先激活环境
- [ ] 使用 `pip install --no-user` 避免安装到用户目录
- [ ] 安装后用 `conda list` 验证包在正确位置

### 环境变更后
- [ ] 测试所有 Python 工具和脚本
- [ ] 检查 Alfred 工作流功能
- [ ] 验证 IDE 的 Python 解释器配置
- [ ] 测试命令行工具和自动化脚本

### 定期维护
- [ ] 每月运行环境健康检查
- [ ] 清理不需要的包和缓存
- [ ] 备份工作环境配置

## 🔧 一键修复脚本

创建并保存以下脚本用于快速修复：

```bash
#!/bin/bash
# fix_python_env.sh - 一键修复 Python 环境问题

echo "🔧 开始修复 Python 环境..."

# 激活 conda base 环境
source /opt/miniconda3/etc/profile.d/conda.sh
conda activate base

# 清理用户安装的包
echo "清理用户目录包..."
pip uninstall -y Pillow requests lxml numpy pandas 2>/dev/null || true

# 重新安装到 conda 环境
echo "重新安装关键包..."
pip install --no-user Pillow requests lxml

# 验证安装
echo "验证安装..."
python3 -c "
packages = ['PIL', 'requests', 'lxml']
all_ok = True
for pkg in packages:
    try:
        __import__(pkg)
        print(f'✅ {pkg}')
    except ImportError:
        print(f'❌ {pkg}')
        all_ok = False

if all_ok:
    print('🎉 所有包安装成功!')
else:
    print('⚠️  仍有包安装失败，需要手动检查')
"

echo "🎯 修复完成!"
```

使用方法：
```bash
chmod +x fix_python_env.sh
./fix_python_env.sh
```

---

**⏱️ 预计修复时间**: 2-5 分钟  
**💾 保存位置**: 建议保存在用户目录便于快速访问  
**🔄 更新频率**: 根据环境变化及时更新
