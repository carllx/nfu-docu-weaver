#!/usr/bin/env python3
"""
检查和安装 Alfred 工作流所需的 Python 依赖
Check and install required Python dependencies for Alfred workflow
"""

import sys
import subprocess
import importlib
import os

def check_and_install_package(package_name, import_name=None):
    """检查包是否已安装，如果没有则尝试安装"""
    if import_name is None:
        import_name = package_name
    
    try:
        importlib.import_module(import_name)
        print(f"✅ {package_name} 已安装")
        return True
    except ImportError:
        print(f"❌ {package_name} 未安装，尝试安装...")
        try:
            subprocess.check_call([sys.executable, "-m", "pip", "install", package_name])
            print(f"✅ {package_name} 安装成功")
            return True
        except subprocess.CalledProcessError:
            print(f"❌ {package_name} 安装失败")
            return False

def main():
    """检查所有必需的依赖"""
    print("检查 Alfred 工作流 Python 依赖...")
    
    required_packages = [
        ("Pillow", "PIL"),  # PIL/Pillow for image processing
        ("requests", "requests"),  # HTTP requests
        ("lxml", "lxml"),  # XML processing (optional)
    ]
    
    all_installed = True
    
    for package_name, import_name in required_packages:
        if not check_and_install_package(package_name, import_name):
            all_installed = False
    
    if all_installed:
        print("\n🎉 所有依赖都已正确安装！")
        return 0
    else:
        print("\n⚠️  部分依赖安装失败，请手动安装：")
        print("pip install Pillow requests lxml")
        return 1

if __name__ == "__main__":
    sys.exit(main())
