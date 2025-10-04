
[[Projects]] 
To maintain high download speeds over time from sites that limit per-connection bandwidth, research tools like Xtreme Download Manager that can automatically cycle out old threads. Also try network-level monitoring to block old threads so software opens new ones. Experiment with different managers and thread settings.

The goal is to maintain high download efficiency. Some sites limit multi-thread download bandwidth over time. For example, speed may reduce from 1mb/s to 128kb/s after 10 seconds, even with 32 threads. I want to try two things: 1) Change the download mode to automatically create new threads replacing ones over 10 seconds old. This needs research into tools like Xtreme Download Manager. 2) Network-level intervention to manage and block system download threads over 10 seconds for a specific domain. The download software's multi-thread feature will automatically increase threads.

### Action Items

- Research tools like Xtreme Download Manager, aria2[2], uGet[3], Motrix[7]  for changing download modes to automatically create new threads 

- Try network-level intervention by writing a script to monitor and block old download threads for a domain so the software automatically increases threads

- Experiment with different download managers and thread settings to maintain high download speeds over time


Example
```
Host: cdn.pvvstream.pro
Network: TCP
Source:127.0.0.1:61298 (HTTP Connect)
Destination: 185.180.13.22:443
Rule: DomainSuffix (cdn.pvvstream.pro)
DNS Mode: normal
```

```python
# stop_connections.py
# cd C:\ProgramData\anaconda3\Scripts
# activate
# C:\ProgramData\anaconda3\python.exe "C:\Users\carll\Desktop\stop_connections.py" 185.180.13.*
import psutil
import scapy.all as scapy
import ipaddress
from scapy.all import conf

target_subnet = ipaddress.ip_network("185.180.13.0/24")  

connections = [conn for conn in psutil.net_connections()
               if conn.raddr and
               ipaddress.ip_address(conn.raddr[0]) in target_subnet]
# for conn in connections:
    # 32x conn (every connections )
    # he same process ID of the process that owns the socket.
    # has same ip address, but different port number in local address
    # has different ip address, but same port number in remote address
    # some status is ESTABLISHED, some is FIN_WAIT2
    # example:
    # sconn(fd=-1, family=<AddressFamily.AF_INET: 2>, type=<SocketKind.SOCK_STREAM: 1>, laddr=addr(ip='192.168.10.10', port=62500), raddr=addr(ip='185.180.13.23', port=443), status='ESTABLISHED', pid=16688)
    # sconn(fd=-1, family=<AddressFamily.AF_INET: 2>, type=<SocketKind.SOCK_STREAM: 1>, laddr=addr(ip='192.168.10.10', port=62919), raddr=addr(ip='185.180.13.22', port=443), status='FIN_WAIT2', pid=16688)
    

first_conn = next(iter(connections))
iface = conf.iface
tcp_pkt = scapy.IP(src=first_conn.laddr[0], dst=first_conn.raddr[0]) / scapy.TCP(flags="R")
scapy.send(tcp_pkt, iface=iface)

tcp_pkt = scapy.IP(src=first_conn.raddr[0], dst=first_conn.laddr[0]) / scapy.TCP(flags="R")  
scapy.send(tcp_pkt, iface=iface)
    
    

    # if conn.pid == PROXY_PID:
    #     # Skip proxy process
    #     print(f"Skipping proxy {conn.pid}")
    #     continue
    
    # Alternative terminate methods
```

 这段Python代码使用了`psutil`和`scapy`库来找到连接到特定子网的网络连接,然后向该连接的两端发送TCP复位(RST)数据包。

代码第一行使用`ipaddress.ip_network`函数定义了目标子网`185.180.13.0/24`。这个函数返回一个表示指定子网的`IPv4Network`或`IPv6Network`对象。

接下来的几行创建了一个与目标子网匹配的网络连接列表。使用`psutil.net_connections`函数获取机器上所有网络连接的列表。然后使用列表推导式过滤这个列表,只包含远程地址(`conn.raddr`)在目标子网中的连接。使用`ipaddress.ip_address`函数将远程IP地址转换为`IPv4Address`或`IPv6Address`对象,这样就可以检查它们是否是代表目标子网的`IPv4Network`或`IPv6Network`对象的成员。

`next(iter(connections))`这一行从过滤后的连接列表中获取第一个连接。如果列表为空,这将引发一个`StopIteration`异常。

`conf.iface`这一行使用`scapy`库中的`conf`对象获取机器上的默认网络接口。

接下来的两个代码块创建并发送一个TCP RST数据包到连接的两端。使用`scapy.IP`和`scapy.TCP`类分别创建数据包的IP层和TCP层。`scapy.TCP`构造函数中的`flags="R"`参数在TCP头中设置RST标志,表示这是一个复位数据包。然后使用`scapy.send`函数通过默认网络接口发送数据包。这是对连接的两个方向各做一次。

总之,这段代码找到连接到特定子网的第一个网络连接,并向该连接的两端发送TCP复位数据包。






 Here is a Python code snippet to break connections to a target subnet using psutil and scapy:

```python
import psutil
import scapy.all as scapy
import ipaddress
from scapy.all import conf

target_subnet = ipaddress.ip_network("185.180.13.0/24") 

while True:

  connections = [conn for conn in psutil.net_connections() 
                 if conn.raddr and 
                 ipaddress.ip_address(conn.raddr[0]) in target_subnet]

  if connections:
    first_conn = connections[0]
    pid = first_conn.pid
    p = psutil.Process(pid)
    p.terminate()

  time.sleep(1)
```

这个代码导致我所有的连接都中断了, 我使用代理的形式连接, 我只想break connections 中的第一个连接. 
请参考这个代码:
```
import psutil
import scapy.all as scapy
import ipaddress
from scapy.all import conf

target_subnet = ipaddress.ip_network("185.180.13.0/24")  

connections = [conn for conn in psutil.net_connections()
               if conn.raddr and
               ipaddress.ip_address(conn.raddr[0]) in target_subnet]

first_conn = next(iter(connections))
iface = conf.iface
tcp_pkt = scapy.IP(src=first_conn.laddr[0], dst=first_conn.raddr[0]) / scapy.TCP(flags="R")
scapy.send(tcp_pkt, iface=iface)

tcp_pkt = scapy.IP(src=first_conn.raddr[0], dst=first_conn.laddr[0]) / scapy.TCP(flags="R")  
scapy.send(tcp_pkt, iface=iface)
```

我的要求是每1秒break 第一个匹配的连接, 我将使用  C:\ProgramData\anaconda3\python.exe "C:\Users\carll\Desktop\stop_connections.py" 启动改脚本.


 Here is how you can break the first matching connection every 1 second:

```python
import time
import psutil
import scapy.all as scapy
import ipaddress
from scapy.all import conf

target_subnet = ipaddress.ip_network("185.180.13.0/24")

while True:

  connections = [conn for conn in psutil.net_connections()  
                 if conn.raddr and
                 ipaddress.ip_address(conn.raddr[0]) in target_subnet]

  if connections:
    first_conn = connections[0]
    iface = conf.iface
    tcp_pkt = scapy.IP(src=first_conn.laddr[0], dst=first_conn.raddr[0]) / scapy.TCP(flags="R")
    scapy.send(tcp_pkt, iface=iface)

    tcp_pkt = scapy.IP(src=first_conn.raddr[0], dst=first_conn.laddr[0]) / scapy.TCP(flags="R")
    scapy.send(tcp_pkt, iface=iface)

  time.sleep(1)
```

 

My goal is to temporarily disconnect one of all 185.180.13.0/24 connections, rather than interrupting all connections in 185.180.13.0/24 or even causing my crash (vpn) to crash. Please help me. Revise(我的目标是暂时断开所有185.180.13.0/24 的connections 其中的一个连接, 而不是将所有185.180.13.0/24 的connections 内的连接全部中断甚至导致我的clash (vpn) 崩溃, 请你帮我修改)




如何用python close all connection, and reopen all connection every 10 sec?


 这里是用python每10秒关闭所有连接,然后重新打开所有连接的方法:

```python
import time
import psutil
import scapy.all as scapy
import ipaddress
from scapy.all import conf

目标子网 = ipaddress.ip_network("185.180.13.0/24") 

while True:

  连接列表 = [conn for conn in psutil.net_connections()
               if conn.raddr and 
               ipaddress.ip_address(conn.raddr[0]) in 目标子网]
  
  如果 连接列表:
    第一个连接 = 连接列表[0]
    接口 = conf.iface
    tcp数据包 = scapy.IP(源=第一个连接.laddr[0], 目的=第一个连接.raddr[0]) / scapy.TCP(标志="R")
    scapy.send(tcp数据包, 接口=接口)

    tcp数据包 = scapy.IP(源=第一个连接.raddr[0], 目的=第一个连接.laddr[0]) / scapy.TCP(标志="R")
    scapy.send(tcp数据包, 接口=接口)

  time.sleep(10)
```

主要逻辑:
1. 使用psutil获取当前所有网络连接
2. 过滤出目标子网的连接
3. 如果有连接,则发送RST包重置连接
4. 睡眠10秒后循环



 Here is the Python code to monitor network connections and reset connections to a target subnet:

```python
import psutil
from scapy.all import *

target_subnet = "192.168.1." 

while True:
    connections = psutil.net_connections()

    for conn in connections:
        if conn.raddr and conn.raddr[0].startswith(target_subnet):
            print(f"Resetting connection to {conn.raddr}")
            send(IP(dst=conn.raddr[0])/TCP(sport=conn.laddr[1], dport=conn.raddr[1], flags='R'), verbose=0)

    time.sleep(10)
```

The key steps are:

1. Use psutil to get all current network connections
2. Filter for connections to the target subnet 
3. Send an RST packet using Scapy to reset any matching connections
4. Sleep 10 seconds before looping to check again




