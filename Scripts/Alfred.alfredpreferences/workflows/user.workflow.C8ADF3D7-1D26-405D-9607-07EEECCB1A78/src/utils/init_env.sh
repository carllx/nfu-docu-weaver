#!/bin/bash

# Activate conda environment efficiently with fallback
init_env() {
    # Try different conda installation paths (prioritize current installation)
    local conda_paths=(
        "/opt/miniconda3/etc/profile.d/conda.sh"
        "/opt/anaconda3/etc/profile.d/conda.sh"
        "/Users/yamlam/opt/anaconda3/etc/profile.d/conda.sh"
        "/Users/yamlam/anaconda3/etc/profile.d/conda.sh"
        "/Users/yamlam/miniconda3/etc/profile.d/conda.sh"
        "/usr/local/anaconda3/etc/profile.d/conda.sh"
        "/usr/local/miniconda3/etc/profile.d/conda.sh"
    )
    
    # Try to find and source conda
    for conda_path in "${conda_paths[@]}"; do
        if [[ -f "$conda_path" ]]; then
            echo "Found conda at: $conda_path" >&2
            . "$conda_path"
            if command -v conda >/dev/null 2>&1; then
                conda activate base 2>/dev/null || echo "Warning: Could not activate base environment" >&2
                
                # 确保 conda 环境优先，避免用户本地包的架构冲突
                export PYTHONNOUSERSITE=1
                
                # 验证 PIL 是否可用
                if python3 -c "from PIL import Image" 2>/dev/null; then
                    echo "Conda environment with PIL ready" >&2
                    return 0
                else
                    echo "Warning: PIL not available in conda environment" >&2
                    # 尝试安装 PIL（静默安装，避免输出干扰）
                    echo "Attempting to install Pillow..." >&2
                    conda install -y pillow >/dev/null 2>&1 || pip install Pillow >/dev/null 2>&1
                    if python3 -c "from PIL import Image" 2>/dev/null; then
                        echo "PIL installation successful" >&2
                        return 0
                    fi
                fi
            fi
        fi
    done
    
    # Try to find conda in PATH
    if command -v conda >/dev/null 2>&1; then
        echo "Using conda from PATH" >&2
        conda activate base 2>/dev/null || echo "Warning: Could not activate base environment" >&2
        
        # 确保 conda 环境优先，避免用户本地包的架构冲突
        export PYTHONNOUSERSITE=1
        
        # 验证 PIL 是否可用
        if python3 -c "from PIL import Image" 2>/dev/null; then
            echo "Conda environment with PIL ready" >&2
            return 0
        else
            echo "Warning: PIL not available in conda environment" >&2
            # 尝试安装 PIL（静默安装，避免输出干扰）
            echo "Attempting to install Pillow..." >&2
            conda install -y pillow >/dev/null 2>&1 || pip install Pillow >/dev/null 2>&1
            if python3 -c "from PIL import Image" 2>/dev/null; then
                echo "PIL installation successful" >&2
                return 0
            fi
        fi
    fi
    
    # If conda not found, try to use system Python
    echo "Warning: Conda not found, using system Python" >&2
    
    # 清除可能导致冲突的环境变量
    unset PYTHONNOUSERSITE
    
    # 检查是否有架构兼容问题
    if python3 -c "from PIL import Image" 2>/dev/null; then
        echo "System Python PIL works" >&2
        return 0
    else
        echo "System Python PIL has issues (likely architecture conflict)" >&2
        echo "Please ensure Pillow is installed for the correct architecture:" >&2
        echo "  pip3 install --force-reinstall Pillow" >&2
        return 1
    fi
}