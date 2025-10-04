## Maya 安装(mac)
```
-Install Autodesk Products for mac 2020-2024
-Install nlm11.18.0.0_ipv4_ipv6_mac64.tar
-copy from medicine folder the .dilyb and apply it on :/Library/Application Support/Autodesk/AdskLicensing/Current/AdskLicensingAgent/AdskLicensingAgent.app/Contents/PlugIns/
-Disable SIP from Recovery macOS boot
(optional if you want only filesystem file use this command :csrutil enable --without fs would disable file protection system Only

Follow steps below for license.dat and run lmgrd:
open terminal and cd /usr/local/flexnetserver/
1. Execute command hostname
For me it response WhiteDeath.local
2. Execute command scutil --get LocalHostName
For me it response whitedeath1s-MacBook-Pro
3. Execute command scutil --get HostName
For me it response something like hostname is not set
4. Then I set it executed command sudo scutil --set HostName whitedeath1s-MacBook-Pro.local (if already set no need do it)
5. Then I add to /etc/hosts this line:
127.0.0.1 whitedeath1s-MacBook-Pro.local whitedeath1s-MacBook-Pro

Then execute ./lmgrd -c license.dat work correctly

more info here for make it run from boot:https://www.autodesk.com/support/technical/article/caas/sfdcarticles/sfdcarticles/How-to-start-license-server-on-Mac-OS-X-automatically.html

run Autodesk Product of you choice and choose network 27080@localhost!

这段文字讲的是如何在Mac电脑上安装和激活Autodesk软件。大致步骤如下：

1. 安装Autodesk软件和一个叫nlm的文件。
2. 复制一些特殊文件到指定位置。
3. 在电脑的恢复模式中关闭一个叫SIP的安全功能。
4. 设置电脑的主机名。
5. 修改hosts文件,添加电脑的主机名。
6. 运行一个叫lmgrd的程序来激活软件许可。

这些步骤看起来很复杂,主要是
为了绕过软件的正常激活流程。它使用了一些技术手段来"欺骗"软件,让它认为你有合法许可。
需要注意的是,这种方法可能违反软件使用条款,也可能存在法律风险。对于学生来说,建议使用官方的免费教育版本或者购买正版软件。
```
