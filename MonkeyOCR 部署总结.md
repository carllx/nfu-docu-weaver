# MonkeyOCR 部署总结

##  当前配置状态

### ✅ 已成功安装的组件
- **PaddlePaddle GPU 3.0.0** - ✅ 正常工作
- **PaddleX 3.1.3** - ✅ 正常工作  
- **PyTorch 2.6.0+cu126** - ✅ GPU 支持正常
- **模型文件** - ✅ 已下载完成
- **布局模型** - ✅ PP-DocLayout_plus-L 正常工作

###  当前配置
```yaml
device: cuda
layout_config: 
  model: PP-DocLayout_plus-L
chat_config:
  backend: transformers
  batch_size: 2
  attn_implementation: "sdpa"  # 已修改为 SDPA
```

##  遇到的局限

### 1. **Flash Attention 2 编译问题**
- **问题**: 需要 Microsoft Visual C++ Build Tools
- **影响**: 无法使用最高性能的注意力机制
- **解决方案**: 使用 SDPA 替代

### 2. **LMDeploy 兼容性问题**
- **问题**: 缺少 Triton 模块（Windows 不支持）
- **影响**: 无法使用 LMDeploy 后端
- **解决方案**: 使用 transformers 后端

### 3. **vLLM 安装问题**
- **问题**: Windows 上安装复杂，依赖问题
- **影响**: 无法使用 vLLM 后端
- **解决方案**: 使用 transformers 后端

##  正确的运行方法

### 方法 1: 直接运行（推荐）
```bash
# 激活环境
conda activate monkeyocr
cd MonkeyOCR

# 运行 MonkeyOCR
python parse.py your_pdf_file.pdf
```

### 方法 2: 使用补丁脚本
```bash
# 使用禁用 Flash Attention 的补丁
python disable_flash_attention_patch.py your_pdf_file.pdf
```

### 方法 3: 批量处理
```bash
# 处理文件夹中的所有 PDF
python parse.py /path/to/pdf/folder

# 分组处理（按页数）
python parse.py /path/to/pdf/folder -g 10
```

##  性能对比

| 后端 | 状态 | 性能 | 兼容性 |
|------|------|------|--------|
| **Flash Attention 2** | ❌ 不可用 | 最快 | 需要编译工具 |
| **LMDeploy** | ❌ 不可用 | 很快 | Windows 不支持 |
| **vLLM** | ❌ 不可用 | 很快 | 安装复杂 |
| **SDPA** | ✅ 可用 | 较快 | 原生支持 |
| **Eager** | ✅ 可用 | 很慢 | 原生支持 |

##  推荐配置

### 当前最佳配置
```yaml
device: cuda
layout_config: 
  model: PP-DocLayout_plus-L
chat_config:
  backend: transformers
  batch_size: 2  # 根据显存调整
  attn_implementation: "sdpa"
```

### 性能优化建议
1. **调整 batch_size**: 根据您的 RTX 3080 (10GB) 显存，建议设置为 2-3
2. **使用 SDPA**: 比 eager 快很多，是当前最佳选择
3. **GPU 监控**: 使用 `nvidia-smi` 监控显存使用

##  故障排除

### 如果遇到问题：
1. **显存不足**: 降低 `batch_size`
2. **模型加载失败**: 检查模型文件是否完整
3. **CUDA 错误**: 确认 PyTorch 和 CUDA 版本匹配

##  使用示例

```bash
# 处理单个 PDF
python parse.py demo/demo1.pdf

# 处理并分页输出
python parse.py demo/demo1.pdf -s

# 指定输出目录
python parse.py demo/demo1.pdf -o ./my_output

# 只识别文本
python parse.py demo/demo1.pdf -t text
```

##  总结

虽然遇到了一些 Windows 平台的限制，但通过使用 **SDPA 注意力机制** 和 **transformers 后端**，您的 MonkeyOCR 现在已经可以正常工作了！

**当前状态**: ✅ **可以正常使用**
**性能**:  **较快**（使用 SDPA）
**稳定性**: ️ **高**（原生支持）

您现在可以开始使用 MonkeyOCR 处理 PDF 文件了！