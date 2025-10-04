# Alfred 工作流故障排除指南
# Alfred Workflow Troubleshooting Guide

## 常见问题和解决方案

### 1. Python 依赖问题

#### 问题症状：
```
ModuleNotFoundError: No module named 'PIL'
ModuleNotFoundError: No module named 'requests'
```

#### 解决方案：
```bash
# 自动安装所有依赖
./setup_dependencies.sh

# 或手动安装
python3 -m pip install Pillow requests lxml
```

### 2. Conda 环境问题

#### 问题症状：
```
./src/utils/init_env.sh: line 5: /Users/yamlam/opt/anaconda3/etc/profile.d/conda.sh: No such file or directory
conda: command not found
```

#### 解决方案：
- 已修复：新的 `init_env.sh` 会自动检测多个可能的 conda 安装位置
- 如果仍有问题，使用新的健壮初始化脚本：

```bash
# 在你的脚本中使用
source ./src/utils/robust_init.sh
robust_init
```

### 3. 权限问题

#### 问题症状：
```
Permission denied
```

#### 解决方案：
```bash
# 设置所有脚本的执行权限
find . -name "*.sh" -exec chmod +x {} \;
```

### 4. Alfred 工作流调试

#### 启用调试模式：
1. 打开 Alfred Preferences
2. 选择 Workflows 标签
3. 选择你的工作流
4. 点击右上角的虫子图标 🐛
5. 查看调试输出

#### 调试技巧：
- 检查 `alfred_debug` 环境变量
- 使用 `echo "Debug info" >&2` 输出调试信息
- 查看脚本返回值和错误输出

### 5. 环境变量问题

#### 检查 Alfred 环境变量：
```bash
echo "Workflow directory: ${alfred_workflow_directory}"
echo "Debug mode: ${alfred_debug}"
echo "Cache directory: ${alfred_workflow_cache}"
echo "Data directory: ${alfred_workflow_data}"
```

### 6. 图像处理问题

#### 问题症状：
```
PIL.UnidentifiedImageError: cannot identify image file
```

#### 解决方案：
- 确保图像文件格式受支持（PNG, JPG, JPEG, GIF, WebP）
- 检查文件路径是否正确
- 验证文件没有损坏

### 7. 网络请求问题

#### 问题症状：
```
requests.exceptions.ConnectionError
requests.exceptions.Timeout
```

#### 解决方案：
- 检查网络连接
- 验证 API 密钥和端点
- 增加请求超时时间
- 检查防火墙设置

## 诊断工具

### 1. 依赖检查脚本
```bash
python3 src/utils/check_dependencies.py
```

### 2. 环境测试脚本
```bash
# 测试环境初始化
source src/utils/robust_init.sh
robust_init
```

### 3. 完整系统检查
```bash
# 运行完整的依赖安装和检查
./setup_dependencies.sh
```

## 预防措施

### 1. 定期更新依赖
```bash
python3 -m pip install --upgrade Pillow requests lxml
```

### 2. 备份工作流配置
- 定期导出工作流：Alfred Preferences → Workflows → Right-click → Export

### 3. 版本控制
- 使用 git 跟踪工作流更改
- 记录依赖版本（见 `requirements.txt`）

### 4. 测试脚本
```bash
# 创建测试脚本来验证功能
./test_workflow.sh
```

## 获取帮助

如果问题仍然存在：

1. **检查日志**：查看 Alfred 调试输出
2. **验证环境**：运行 `./setup_dependencies.sh`
3. **测试组件**：分别测试各个脚本
4. **重新安装依赖**：删除并重新安装 Python 包

### 有用的命令
```bash
# 检查 Python 安装
python3 --version
python3 -m pip --version

# 检查已安装的包
python3 -m pip list | grep -E "(Pillow|requests|lxml)"

# 检查 conda 环境
conda info
conda list

# 测试图像处理
python3 -c "from PIL import Image; print('PIL OK')"

# 测试网络请求
python3 -c "import requests; print('Requests OK')"
```
