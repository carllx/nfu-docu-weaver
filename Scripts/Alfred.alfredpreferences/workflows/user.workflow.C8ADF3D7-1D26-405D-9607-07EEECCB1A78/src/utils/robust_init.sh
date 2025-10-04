#!/bin/bash
# 健壮的环境初始化脚本 - Alfred 工作流专用
# Robust environment initialization script for Alfred workflows

# 设置错误处理
set -e

# 日志函数
log_debug() {
    if [[ "${alfred_debug:-}" == "1" ]]; then
        echo "Debug: $1" >&2
    fi
}

log_error() {
    echo "Error: $1" >&2
}

log_info() {
    echo "Info: $1" >&2
}

# 初始化 Python 环境
init_python_env() {
    log_debug "Initializing Python environment..."
    
    # 首先尝试使用 conda 环境
    if init_conda_env; then
        log_debug "Using Conda environment"
        return 0
    fi
    
    # 如果 conda 不可用，使用系统 Python
    log_debug "Conda not available, using system Python"
    
    # 确保 Python 3 可用
    if ! command -v python3 >/dev/null 2>&1; then
        log_error "Python 3 not found"
        return 1
    fi
    
    # 检查关键依赖
    python3 -c "
try:
    from PIL import Image, ImageGrab
    import requests
    print('Python dependencies OK', file=sys.stderr)
except ImportError as e:
    print(f'Missing Python dependency: {e}', file=sys.stderr)
    print('Run: python3 -m pip install Pillow requests', file=sys.stderr)
    exit(1)
" 2>/dev/null || {
        log_error "Python dependencies check failed"
        log_info "Try running: ./setup_dependencies.sh"
        return 1
    }
    
    return 0
}

# 初始化 conda 环境（改进版）
init_conda_env() {
    local conda_paths=(
        "/opt/miniconda3/etc/profile.d/conda.sh"
        "/Users/yamlam/opt/anaconda3/etc/profile.d/conda.sh"
        "/Users/yamlam/anaconda3/etc/profile.d/conda.sh"
        "/Users/yamlam/miniconda3/etc/profile.d/conda.sh"
        "/opt/anaconda3/etc/profile.d/conda.sh"
        "/usr/local/anaconda3/etc/profile.d/conda.sh"
        "/usr/local/miniconda3/etc/profile.d/conda.sh"
        "$HOME/anaconda3/etc/profile.d/conda.sh"
        "$HOME/miniconda3/etc/profile.d/conda.sh"
    )
    
    # 尝试找到并加载 conda
    for conda_path in "${conda_paths[@]}"; do
        if [[ -f "$conda_path" ]]; then
            log_debug "Found conda at: $conda_path"
            
            # 安全地加载 conda
            if source "$conda_path" 2>/dev/null; then
                if command -v conda >/dev/null 2>&1; then
                    # 尝试激活 base 环境
                    if conda activate base 2>/dev/null; then
                        log_debug "Activated conda base environment"
                        return 0
                    else
                        log_debug "Could not activate base environment, but conda is available"
                        return 0
                    fi
                fi
            fi
        fi
    done
    
    # 检查 conda 是否已经在 PATH 中
    if command -v conda >/dev/null 2>&1; then
        log_debug "Using conda from PATH"
        conda activate base 2>/dev/null || log_debug "Base environment not activated"
        return 0
    fi
    
    return 1
}

# 主初始化函数
robust_init() {
    log_debug "Starting robust environment initialization"
    
    # 设置工作目录
    if [[ -n "${alfred_workflow_directory:-}" ]]; then
        cd "${alfred_workflow_directory}" || {
            log_error "Cannot change to workflow directory: ${alfred_workflow_directory}"
            return 1
        }
        log_debug "Changed to workflow directory: ${alfred_workflow_directory}"
    fi
    
    # 初始化 Python 环境
    if ! init_python_env; then
        log_error "Failed to initialize Python environment"
        return 1
    fi
    
    log_debug "Environment initialization completed successfully"
    return 0
}

# 如果直接运行此脚本
if [[ "${BASH_SOURCE[0]}" == "${0}" ]]; then
    robust_init
fi
