服务器似乎没有正常启动完成。让我检查服务器状态并重新启动：

Checked command status
服务器已正常运行。看到日志显示"未检测到 MindWave 设备"——这是因为自动检测需要验证握手，在 Windows 蓝牙端口上可能失败。

让我直接手动连接蓝牙端口：

…\eeg-arduino > Invoke-RestMethod -Uri "http://127.0.0.1:8000/api/connect?port=COM6" -Method POST

[CODES] 0x80
[RAW] -59
[CODES] 0x80
长时间未收到数据。请在 macOS 蓝牙中忘记并重新配对 MindWave（PIN 0000/1234），确认连接 
后再运行本脚本。
(base) PS C:\Users\carll\Desktop\eeg-arduino> cd 'c:\Users\carll\Desktop\eeg-arduino' 
(base) PS C:\Users\carll\Desktop\eeg-arduino> Invoke-RestMethod -Uri "http://127.0.0.1
:8000/api/status" -Method GET
Invoke-RestMethod: 由于目标计算机积极拒绝，无法连接。
(base) PS C:\Users\carll\Desktop\eeg-arduino> cd 'c:\Users\carll\Desktop\eeg-arduino'
cd 'c:\Users\carll\Desktop\eeg-arduino' (base) PS C:\Users\carll\Desktop\eeg-arduino> Invoke-RestMethod -Uri "http://127.0.0.1 Invoke-RestMethod -Uri "http://127.0.0.1:8000/api/connect?port=COM6" -Method POST status device ------ ------ connected COM6 (base)PS C:\Users\carll\Desktop\eeg-arduino>
Ran terminal command
Relocate
·
Exit code 0

Request Review
✅ 已成功连接到 COM6！

现在请刷新浏览器页面 (http://127.0.0.1:8000)，应该可以看到连接状态正常了。

关于自动连接蓝牙的问题：当前的 
detect_mindwave
 方法需要通过握手验证（发送唤醒字节并等待 0xAA 0xAA 同步帧），但在 Windows 蓝牙端口上这个验证可能会失败。有两个改进方案：

跳过验证直接连接：如果只有一个蓝牙端口匹配特定条件，直接连接
保存上次使用的端口：记住用户上次成功连接的端口，下次启动时自动使用
您希望我实现哪种方案？