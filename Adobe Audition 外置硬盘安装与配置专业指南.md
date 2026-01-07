# Adobe Audition 外置硬盘安装与配置专业指南

本指南帮助您将 Adobe Audition 及其缓存文件部署在外置驱动器上，以节省系统盘空间并确保音频处理的流畅性。

> **适用版本**：Adobe Audition 2024 (v24.x) [Monter Group] 破解版  
> **系统要求**：macOS 10.15+

---

## 第一阶段：安装前准备

### 1.1 开启"任何来源"（必做）

打开终端，执行以下命令：

```bash
sudo spctl --master-disable
```

输入 Mac 系统密码（不显示字符），按回车。

**验证**：打开"系统设置" → "隐私与安全性" → "安全性"，应看到"任何来源"选项已选中。

### 1.2 安装 Xcode Command Line Tools（推荐）

安装过程中可能需要此工具，建议提前安装：

```bash
xcode-select --install
```

弹出窗口后点击"安装"，等待 5-10 分钟完成。

> ⚠️ **注意**：这不是 App Store 中的 Xcode，不要混淆。

---

## 第二阶段：硬件检查（可选格式化）

### 硬件建议

- **类型**：强烈建议使用 **NVMe SSD** 或 **SATA SSD** 外置硬盘。传统机械硬盘（HDD）无法支持 Audition 的多轨实时效果预览。
- **接口**：推荐 Thunderbolt 3/4 或 USB 3.2 Gen 2（10Gbps）接口。

### 检查现有硬盘格式

diskutil info /Volumes/T7-carllx2T
   Device Identifier:         disk4s1
   Device Node:               /dev/disk4s1
   Whole:                     No
   Part of Whole:             disk4

   Volume Name:               T7-carllx2T
   Mounted:                   Yes
   Mount Point:               /Volumes/T7-carllx2T

   Partition Type:            Windows_NTFS
   File System Personality:   ExFAT

如果硬盘已有数据，**无需格式化**。打开"磁盘工具"查看格式：

| 格式 | 兼容性 | 建议 |
|------|--------|------|
| APFS | ✅ 最佳 | 直接使用 |
| Mac OS 扩展 (HFS+) | ✅ 良好 | 直接使用 |
| ExFAT | ⚠️ 可用 | 可尝试，遇权限问题再处理 |
| NTFS | ❌ 只读 | 需格式化或安装驱动 |

**ExFAT 用户注意**：
- 不支持 macOS 权限系统，可能出现权限报错
- 无日志功能，意外断电时数据损坏风险较高
- **建议：先直接尝试安装，不要分区**。大多数情况下 ExFAT 可以正常工作，仅在遇到权限问题时再考虑添加 APFS 分区

### 仅新硬盘需要格式化

如需格式化，打开"磁盘工具"：
- **方案**：GUID 分区图
- **格式**：APFS（SSD 最优）

---

## 第三阶段：安装 Adobe Audition

### 3.1 安装包结构说明

此安装包为嵌套结构：

```
Adobe Audition 2024 24.2.dmg          ← 外层 DMG
└── Adobe Audition 2024 24.2.dmg      ← 内层 DMG
    └── Au 24.2 [Monter Group].pkg    ← 实际安装程序
└── 更多•••/
    ├── 安装方法.txt
    ├── Creative_Cloud_Installer.dmg
    └── AdobeCreativeCloudCleanerTool.dmg
```

### 3.2 安装步骤

1. **双击外层 DMG** 挂载
2. **双击内层 DMG**（红色图标或同名 DMG）挂载
3. **右键点击 `Au 24.2 [Monter Group].pkg`** → 选择"打开" → 确认"打开"
4. 按照安装向导操作，**安装过程中需要多次确认，不要离开电脑**
5. 输入 Mac 系统密码时，点击"始终允许"

### 3.3 安装位置说明

> ⚠️ **重要**：.pkg 安装包默认安装到 `/Applications`，**无法在安装时自定义路径**。

**如需将应用放在外置硬盘：**

1. 先完成安装（安装到系统盘）
2. 退出 Audition
3. 将 `/Applications/Adobe Audition 2024/` 整个文件夹移动到外置硬盘
4. 在原位置创建替身（可选）：
   ```bash
   ln -s "/Volumes/T7-carllx2T/AdobeApps/Adobe Audition 2024" "/Applications/Adobe Audition 2024"
   ```

### 3.4 安装失败处理

**如果安装失败**：
1. 先安装 Adobe Creative Cloud Desktop（在 `更多•••` 目录中）
2. 登录 Adobe 账号（可用 Apple ID）
3. 从 CC 下载相同版本的 Audition
4. 重新运行 .pkg 安装包（会直接进入激活步骤）

**如遇 Xcode CLT 错误**：
```bash
xcode-select --install
```
安装完成后重新运行 .pkg。

**如遇 CCXP 模块错误**：
- 如果不需要与其他 Adobe 应用联动（如发送到 Media Encoder），可忽略
- 如需要，请安装 Adobe Creative Cloud Desktop

---

---

## 第四阶段：授予系统权限

### 首次运行

安装完成后首次打开可能被 macOS 阻止：
- 右键点击 Audition 应用 → 选择"打开" → 确认"打开"

如仍无法打开，在终端执行：
```bash
sudo xattr -r -d com.apple.quarantine /Applications/Adobe\ Audition\ 2024/
```
（如已移动到外置硬盘，替换为实际路径）

### 推荐：先尝试最小权限

1. 打开 **"系统设置"** → **"隐私与安全性"** → **"文件和文件夹"**
2. 找到 Adobe Audition，确保外置硬盘访问权限已开启

### 如仍有权限问题

1. 进入 **"隐私与安全性"** → **"完全磁盘访问权限"**
2. 点击 **"+"**，添加外置硬盘上的 **Adobe Audition**
3. 开启右侧开关

_注：完全磁盘访问权限较高，仅在必要时授予。_

---

## 第五阶段：Audition 内部缓存配置

将缓存重定向到外置盘，减少系统盘磨损。

### 5.1 创建缓存文件夹

在终端执行：
```bash
mkdir -p "/Volumes/T7-carllx2T/AuditionCache/Temp" "/Volumes/T7-carllx2T/AuditionCache/MediaCache" "/Volumes/T7-carllx2T/AuditionCache/Database"
```

### 5.2 配置 Audition 缓存路径

1. 启动 Audition → **Adobe Audition** → **设置 (Settings)** → **媒体与磁盘缓存 (Media & Disk Cache)**

2. 修改以下设置：

| 设置项 | 点击 Browse 后选择路径 |
|--------|------------------------|
| **Primary Temp** | `/Volumes/T7-carllx2T/AuditionCache/Temp` |
| **Media Cache Files Location** | `/Volumes/T7-carllx2T/AuditionCache/MediaCache` |
| **Media Cache Database Location** | `/Volumes/T7-carllx2T/AuditionCache/Database` |

3. 可选：勾选 **Save Peak Files** 将峰值文件也存到外置盘

4. 以下设置可保持默认：
   - **Secondary Temp**: None（不需要）
   - **Session Templates**: 保持原位置（模板文件很小）

5. 点击 **OK** 保存设置，重启 Audition 使配置生效

### 5.3 验证配置生效

创建一个测试项目，导入音频文件后检查 `/Volumes/T7-carllx2T/AuditionCache/` 下各文件夹是否有新文件生成。

---

## 第六阶段：稳定性与避坑指南

### 睡眠模式警告

macOS 睡眠时可能切断外置硬盘电源，导致工程文件（.sesx）损坏。

**解决方案**：
- 使用 [Amphetamine](https://apps.apple.com/app/amphetamine/id937984704)（免费）保持系统常亮
- 或在"系统设置" → "锁定屏幕"中将"在不活跃后关闭显示器"设长一点

**Amphetamine 配置方法**（针对外置硬盘上的应用）：

由于 Audition 安装在外置硬盘，可能不会出现在 Amphetamine 的应用列表中。使用以下方法：

1. 打开 Amphetamine → **Preferences** → **Triggers**
2. 点击 **"+"** 添加新触发器
3. 选择 **"While an Application is Running"**
4. 点击 **"Browse..."** 手动导航到：
   `/Volumes/T7-carllx2T/Applications/Adobe Audition 2024/Adobe Audition 2024.app`
5. 保存

这样只要 Audition 在运行，Mac 就不会进入睡眠。

**简单替代方案**：每次使用 Audition 前，点击菜单栏药丸图标 → **"Indefinitely"** 或设定时长，用完后点 **"End Session"**。

### 系统盘仍需空间

即使主程序在外置盘，Adobe 仍会在系统盘存放支持文件：
- 路径：`~/Library/Application Support/Adobe/`
- 建议：系统盘保留至少 **10GB** 剩余空间

### 安全退出流程

1. 先退出 Audition
2. 等待硬盘读写灯停止闪烁
3. 右键点击桌面硬盘图标 → "推出"
4. 再拔掉硬盘

### 备份建议

- 定期备份 `.sesx` 工程文件到其他位置
- 考虑使用 Time Machine 自动备份外置硬盘
- 使用 DriveDx 等工具监控 SSD 健康状态

---

## 故障排除

| 问题 | 解决方案 |
|------|----------|
| "应用程序已损坏" | 右键 → 打开，或在终端执行 `xattr -cr /path/to/app` |
| 无法打开安装包 | 右键 → 打开，或先执行 `sudo spctl --master-disable` |
| Xcode CLT 错误 | 执行 `xcode-select --install` 安装后重试 |
| CCXP 模块错误 | 安装 Adobe Creative Cloud Desktop，或忽略（如不需要应用联动） |
| 无法保存项目 | 检查"文件和文件夹"权限，必要时授予完全磁盘访问 |
| 缓存未写入外置盘 | 重启 Audition，确认设置已保存 |
| 硬盘断开连接 | 检查线缆，禁用睡眠模式，更换 USB 端口 |
| ExFAT 权限错误 | 考虑添加 APFS 分区或转换格式 |
| 软件闪退 | 执行 `codesign --force --deep --sign - /path/to/app` |

---

## 快速命令参考

```bash
# 开启任何来源
sudo spctl --master-disable

# 安装 Xcode Command Line Tools
xcode-select --install

# 移除隔离属性（解决"已损坏"问题）
sudo xattr -r -d com.apple.quarantine /Applications/Adobe\ Audition\ 2024/

# 重新签名（解决闪退问题）
codesign --force --deep --sign - /Applications/Adobe\ Audition\ 2024/Adobe\ Audition\ 2024.app

# 检查 spctl 状态
sudo spctl --status
```

---

_本指南适用于 Adobe Audition 2024 (v24.x) 及更高版本，macOS 10.15+。_
