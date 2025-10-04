# Windows 11开机密码的详细步骤


![|200](https://i.ytimg.com/vi/uusyEcdWzPY/hqdefault.jpg)
(Source: [youtube.com: Command Prompt/ (19) Ultimate Windows Password Reset Hack for Tech Enthusiasts. - YouTube](https://youtu.be/uusyEcdWzPY?t=73))


---

通过命令行重置Windows 11开机密码的详细步骤：

1. **进入恢复模式**  
   - 在登录页面时，按住键盘上的Shift键，同时点击右下角的电源按钮选择重启。
   - 按住Shift键直到开始重启后，松开Windows会进入恢复模式。

2. **打开命令提示符**  
   - 在恢复模式下，依次点击“疑难解答” > “高级选项” > “命令提示符”。
   - 这将打开一个CMD命令提示符窗口。

3. **备份并替换Utilman.exe文件**  
   - 输入命令备份C盘下的Utilman.exe文件：  
     `copy C:\Windows\System32\Utilman.exe C:\Windows\System32\Utilman.exebak`  
     确保输入正确的文件名并回车执行。
   - 输入命令将CMD.exe覆盖为Utilman.exe：  
     `copy C:\Windows\System32\cmd.exe C:\Windows\System32\Utilman.exe`  
     回车执行后会提示已复制一个文件。

4. **重启并进入密码登录页面**  
   - 关闭命令提示符窗口，点击“继续使用Windows 11”。
   - Windows会自动重启并进入密码登录页面。

5. **通过命令提示符重置密码**  
   - 在密码登录页面，点击右下角的“辅助功能”，弹出CMD命令提示符窗口。
   - 输入命令查看所有本地用户：  
     `net user`  
     （此处可以看到所有用户，包括中文用户名。
   - 输入命令重置密码：  
     `net user 你的用户名 *`  
     输入新密码两遍，确认命令成功完成后，关闭命令提示符窗口。

6. **登录并恢复系统文件**  
   - 使用新密码登录，登录后数据不受影响。
   - 重启Windows进入恢复模式，打开命令提示符。
   - 输入命令恢复Utilman.exe文件：  
     `copy C:\Windows\System32\Utilman.exebak C:\Windows\System32\Utilman.exe`  
     重启后一切恢复正常。

7. **备份并替换Utilman.exe文件**  
   - 输入命令备份C盘下的Utilman.exe文件：  
     `copy C:\Windows\System32\Utilman.exe C:\Windows\System32\Utilman.exebak`
   - **替代方法（U盘启动方式）：**
     1. 通过Windows安装U盘启动
     2. 在安装界面按Shift+F10打开CMD
     3. 定位系统分区（通常D盘）：

```bash
D:
cd 'Windows\System32'
```
     1. 重命名并替换文件：
        ```bash
        ren Utilman.exe Utilman.bak
        copy cmd.exe Utilman.exe
        ```

1. **通过命令提示符重置密码**  
   - **图形化方式（推荐）：**
     ```bash
     control userpasswords2
     ```
     在弹出窗口中直接修改用户密码，支持可视化操作
   - **命令行方式：**
     ```bash
     net user 你的用户名 *
     ```

// ... 保留原有恢复步骤 ...

**新增注意事项：**
1. 系统分区可能因磁盘配置不同（建议先用`diskpart`的`list volume`命令确认）
2. 使用U盘方式需要关闭Secure Boot（在BIOS设置中）
3. 操作前请备份重要数据，此方法可能触发BitLocker恢复

**操作演示：**
![bg fit](https://i.ytimg.com/vi/uusyEcdWzPY/maxresdefault.jpg)
_▲ 操作流程可视化参考（来源：YouTube视频截图）_