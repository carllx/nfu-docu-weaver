出现 WARNING: can't get the active group 警告

PC 设置静态IP
--`|How to Assign a Static IP Address in Windows 7, 8, 10, XP, or Vista` [howtogeek](https://www.howtogeek.com/howto/19249/how-to-assign-a-static-ip-address-in-xp-vista-or-windows-7/)

Mac 设置静态IP
--`|How do I use wired for Synergy and wireless for internet? - General Discussion - Symless Forums` [symless](https://forums.symless.com/topic/6345-how-do-i-use-wired-for-synergy-and-wireless-for-internet/?do=findComment&comment=31363)

PC 与Mac 快捷键不互等
Ctrl <-> Super; Super <-> Ctrl


基于你的探索过程，我为你创建了一份完整的 Synergy 配置指南，涵盖了在 Windows 和 macOS 系统上获取网络信息和正确配置 IP 的方法。


# Synergy 网络配置指南

## 概述

本指南详细介绍如何在 Windows 和 macOS 系统上获取网络信息，以便正确配置 Synergy 的服务器和客户端连接。

## 网络拓扑示例

```
┌─────────────────────┐       ┌─────────────────────┐
│   Windows 客户端     │       │   macOS 服务器      │
│ DESKTOP-ALIENEARE   │◄─────►│   yams-Air.local    │
│  169.254.111.111    │       │   169.254.1.100     │
└─────────────────────┘       └─────────────────────┘
```

## Windows 系统操作方法

### 1. 查看 ARP 表获取局域网设备

```powershell
# ARP 条目筛选动态条目
arp -a | Select-String "动态|dynamic"
```

**示例输出：**
```
169.254.1.100         00-e0-4c-58-31-a9     动态
```

### 2. 提取 IP 地址

```powershell
# 方法1：使用正则表达式（推荐）
arp -a | Select-String "动态|dynamic" | ForEach-Object { 
  if ($_.Line -match '\b(?:[0-9]{1,3}\.){3}[0-9]{1,3}\b') { 
	  $matches[0] 
  } 
}

# 方法2：简洁版本
(arp -a | Select-String "动态|dynamic").Line -replace '.*?(\b(?:[0-9]{1,3}\.){3}[0-9]{1,3}\b).*', '$1'
```

### 3. 解析计算机名称

```powershell
# 方法1：DNS 反向解析（推荐）
Resolve-DnsName 169.254.1.100

# 方法2：传统 DNS 查询
[System.Net.Dns]::GetHostEntry("169.254.1.100").HostName

# 方法3：使用 ping 命令
ping -a 169.254.1.100
```

**成功示例输出：**
```
Name                           Type   TTL   Section    NameHost
----                           ----   ---   -------    --------
100.1.254.169.in-addr.arpa     PTR    4464  Answer     yams-Air.local
```

### 4. 获取本机信息

```powershell
# 获取本机计算机名
$env:COMPUTERNAME

# 获取本机 IP 地址
Get-NetIPAddress -AddressFamily IPv4 | Where-Object {$_.IPAddress -like "169.254.*"}
```

## macOS 系统操作方法

### 1. 查看网络接口信息

```bash
# 查看所有网络接口
ifconfig

# 查看特定接口（如 Wi-Fi）
ifconfig en0

# 获取 IP 地址
ifconfig en0 | grep "inet " | awk '{print $2}'
```

### 2. 获取计算机名称

```bash
# 获取计算机名称
scutil --get ComputerName

# 获取本地主机名
scutil --get LocalHostName

# 获取完整主机名
hostname
```

### 3. 网络发现和连接测试

```bash
# 扫描局域网设备
ping -c 1 169.254.111.111

# 使用 mDNS 查询
dns-sd -B _ssh._tcp local.

# 查看 ARP 表
arp -a
```

## Synergy 配置步骤

### 服务器端配置（macOS - yams-Air.local）

1. **启动 Synergy 服务器**
 ```bash
 # 确认服务器 IP
 ifconfig en0 | grep "inet " | awk '{print $2}'
 # 输出：169.254.1.100
 ```

2. **配置服务器设置**
 - 服务器名称：`yams-Air` 或 `yams-Air.local`
 - 监听端口：`24800`（默认）
 - 绑定 IP：`169.254.1.100`

### 客户端配置（Windows - DESKTOP-ALIENEARE）

1. **确认客户端 IP**
 ```powershell
 Get-NetIPAddress -AddressFamily IPv4 | Where-Object {$_.IPAddress -like "169.254.*"}
 # 输出：169.254.111.111
 ```

2. **配置客户端连接**
 - 服务器地址：`169.254.1.100` 或 `yams-Air.local`
 - 端口：`24800`
 - 客户端名称：`DESKTOP-ALIENEARE`

## 故障排除

### 连接问题诊断

```powershell
# Windows 端测试连接
Test-NetConnection -ComputerName yams-Air.local -Port 24800
ping yams-Air.local
telnet 169.254.1.100 24800
```

```bash
# macOS 端测试连接
ping 169.254.111.111
nc -zv 169.254.111.111 24800
```

### 常见问题解决

1. **DNS 解析失败**
 - 使用 IP 地址代替主机名
 - 检查 mDNS 服务是否启用

1. **防火墙阻拦**
 ```powershell
 # Windows 防火墙规则
 New-NetFirewallRule -DisplayName "Synergy" -Direction Inbound -Port 24800 -Protocol TCP -Action Allow
 ```

2. **网络发现问题**
 - 确保两台设备在同一子网
 - 检查网络配置文件（公共/专用）

## 最佳实践

### 1. 使用静态配置
- 优先使用 IP 地址而非主机名
- 记录设备的 MAC 地址以便识别

### 2. 网络安全
- 启用 SSL 加密连接
- 配置防火墙规则限制访问

### 3. 自动化脚本

```powershell
# Windows 自动发现脚本
function Find-SynergyServer {
  $dynamicEntries = arp -a | Select-String "动态|dynamic"
  foreach ($entry in $dynamicEntries) {
	  $ip = ($entry.Line -replace '.*?(\b(?:[0-9]{1,3}\.){3}[0-9]{1,3}\b).*', '$1').Trim()
	  try {
		  $hostname = (Resolve-DnsName $ip -ErrorAction SilentlyContinue).NameHost
		  if ($hostname -like "*Air*" -or $hostname -like "*Mac*") {
			  Write-Host "发现可能的 macOS 设备: $ip ($hostname)" -ForegroundColor Green
		  }
	  } catch {
		  # 忽略解析失败的条目
	  }
  }
}
```

## 总结

通过以上方法，你可以：
1. 在 Windows 上使用 `arp -a` 和 `Resolve-DnsName` 发现并识别 macOS 设备
2. 在 macOS 上使用 `ifconfig` 和 `scutil` 获取网络信息
3. 正确配置 Synergy 的服务器和客户端连接
4. 解决常见的网络连接问题

记住：APIPA 地址（169.254.x.x）表示自动私有 IP 地址，通常在 DHCP 不可用时使用。确保两台设备都在同一网络段内以保证正常通信。
content: |-

这份指南涵盖了你在探索过程中发现的所有关键方法和技巧。它不仅提供了具体的命令和步骤，还包括了故障排除和最佳实践建议。你可以将此作为 Synergy 配置的完整参考手册，无论是在 Windows 还是 macOS 系统上都能快速找到所需的信息。