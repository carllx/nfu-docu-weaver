# Arduino / Blender Tracking

## Arduino && Sound Sensor
-   Task 01: 通过 Input 读取传感器(Sound )信号, 并输出到Monitor;
-   Task 02: 通过 Output 驱动其他设备;

### 试验1: Arduino 读取声音传感器信号

内含试验2, 用声音触发 LED 灯, 有(试验2)标注的代码行, 删除首句的`//` 取消注释即可

```C
// Arduino IDE 中的代码 
// 注意主语: sensor 与 Arduino 身份
void setup() {
  // put your setup code here, to run once:
  pinMode( A0, INPUT); // A0 口接收数据
  // pinMode(8,OUTPUT); // (试验2)输出电流到 8 号口, 驱动其他设备
  Serial.begin(38400);
}

void loop() {
  // put your main code here, to run repeatedly:
  int a = analogRead(A0);
  delay(100); // 等待100 毫秒, 1000为1秒
  if ( a > 539.0 ){ // 如果信号大于 539 就打印出信号值
      Serial.println(a); // 打印数据到串口
      // digitalWrite(8, HIGH); //(试验2) 8 输出口通电
    }else{
      // digitalWrite(8, LOW); // (试验2) 8 输出口断开
    }
}
```

## Arduino 与 Blender

参考教程:

-   [Youtube: Arduino to Blender 用真实世界控制虚拟世界](https://www.youtube.com/watch?v=CypV9pPTCXo&t=1495s)
-   [Interface and application programming](http://fabacademy.org/2021/labs/napoli/students/oleksandr-romanko/assignments/Week_14/)

### 试验3: Arduino 与 Blender 的前期配置, 以及对话测试

Setup Arduino : 很幸运, 安装事项已经准备好了.

Setup Blender: 给Blender 的 python 安装 pyserial 库:

-   pyserial 是 python 的库, 用于软件间串行交流方式互相 [pyserial on github](https://github.com/pyserial/pyserial)
-   下载地址1: [github releases](https://github.com/pyserial/pyserial/releases/) Source code (tar.gz)
-   下载地址2: [pypi](https://pypi.org/project/pyserial/#files)
-   将 pyserial 库安装到 blender 的 python 库内.
    -   解压例如 `pyserial-3.5.tar.gz` 内的 `serial` 文件夹(serial 库)
    -   放置到目录:

```
Mac: /Applications/Blender.app/Contents/Resources/3.1/python/lib/python3.10/
PC: /blender/3.1/python/lib/python3.10/
```

注意:

使用 blender 控制台(Console) 检测代码错误信息, 以及代码执行后的反馈数据, 如果代码出错, 在控制台上按`Ctrl + C` 结束代码进程.

![](https://i.imgur.com/7BcmXPs.png)


```
Mac: 需要在特定位置启动 blender, 才能弹出控制台, /Applications/Blender.app/Contents/MacOS/Blender
PC: 直接 在 blender 内 Window ‣ Toggle System Console
```

试验3 - 在blender 内使用python 语言与Arduino 进行对话

代码:

```C
// Arduino IDE 中的代码 
// 试验3 Arduino 与 Blender 互相对话测试
// HelloBlender.ino
String BlenderCommand; // 需要申明否则 loop 内会报错;

void setup() {
  // put your setup code here, to run once:
  BlenderCommand= "";
  Serial.begin(38400);
}

void loop() {
  // put your main code here, to run repeatedly:
  if( Serial.available() > 0 ){
      BlenderCommand =  Serial.readStringUntil('\\n');
      if(BlenderCommand == "hello, arduino"){
          Serial.println("hiya, Blender.");
        }
    }
}
```

同时需要确认Arduino 硬件使用了哪个 USB 端口, 在下面的blender 代码中需要修改

例如: 这个同学的通过插拔arduino 的usb 口, 在插上usb 后在 工具>端口上能看到新增COM4, 也就是说, arduino 处于 COM4端口.

![](https://i.imgur.com/2bu6fWB.png)


```python
# -*- coding: utf-8 -*-
# 试验3 Arduino 与 Blender 互相对话测试 
# Blender 中的代码
# [HelloArduino.py](<http://helloarduino.py/>)

import serial
import time
import bpy

# ser = serial.Serial('/dev/cu.usbmodem113401','38400') // 这是我的MAC 设置
ser = serial.Serial('COM5','38400') # 你们未必是COM5, COM 的编号, 可通过插拔USB在Arduino IDE 查看 `Tool > Port` 判断, Mac 可通过下方的代码获取
time.sleep(3) # 等待3毫秒
ser.write(b'hello, arduino') # 给Arduino 写信
res = ser.readline() # 获取回复
print(res) # 打印回复
```

(针对 Mac电脑的补充)

```python
# -*- coding: utf-8 -*-
# Blender 中的代码
# 如果不知道端口的地址, 尤其Mac, 在blender 运行该代码打印出所在端口 COM 的地址
import serial # 导入serial 库
from serial.tools import list_ports # 从serial 库中导入 list_ports

port = list(list_ports.comports()) [[将可用的]] port 列成列表,并存入 port 变量
for p in port: # 每一个 port(列表/数组) 作为 p 循环换
    print(p.device) # 分别打印出端口地址
```

### 试验4: 传感器驱动 Blender 中的3D 对象

```C
// 试验4: 传感器驱动 Blender 中的3D 对象
// Arduino IDE 中的代码 
String BlenderCommand; // String 申明一个字符变量, 用于接收来自blender的指令, 名字随意

void setup() {
  // 设置代码, 运行一次:
  BlenderCommand= ""; 
  Serial.begin(38400); // 设置串行数据传输的数据速率（以比特/秒（波特）为单位）。要与计算机通信，请使用以下速率之一.例如:9600、14400、19200、28800、38400、57600 或 115200
}

void loop() {
  // 运行代码,启动后将循环执行:
  if( Serial.available() > 0 ){ //当串口接收到信息后
      BlenderCommand =  Serial.readStringUntil('\\n'); //读取串口所有数据，直到收到换行符
      if(BlenderCommand == "Get Sound"){ // 如果读到的数据是"Get Sound"
          int a = analogRead(A0); // 从读 A0 端口的数据, 也就是传感器上的数据 
          Serial.println(a); // 打印到串口上(让blender拿)
        }
    }
}
```

Blender 中的代码
```python
# -*- coding: utf-8 -*-
# 试验4: 传感器驱动 Blender 中的3D 对象
# Blender 中的代码
# GetSoundFromArduino.py
import serial
import time
import bpy

ser = serial.Serial('/dev/cu.usbmodem113401','38400') // 这是我的MAC 设置
[[ser]] = serial.Serial('COM5','38400') # COM 的编号, 可通过插拔USB在Arduino IDE 查看 `Tool > Port` 判断 
time.sleep(3) # 程序延迟3毫秒, 给硬件一些反应时间

cube = bpy.context.selected_objects[0] # blender 3Dviewer中, 选择一个对象, 并存入 `cube`变量中


actFrame=0 # 起始帧

for z in range(500): # for 循环
    ser.write(b'Get Sound\n') # 串口写入 Get Sound 和一个`回车`
    res = ser.readline() # 串口的每行消息, 并存入 res 变量
    value = float(res.strip()); # 将读取到的信息(字符类型)转换小数点的数据类型, (因为字符串不能参与运算)
    cube.location.z = value*0.005 # 调成数据(例如是500变成2.5), 传给所选的3D对象的 Z 轴方向 
    bpy.ops.wm.redraw_timer(type='DRAW_WIN_SWAP', iterations=1) # 代码执行期间, blender 是不可操作的, 画面将会是停止的, 所以这行代码是为了强行刷新刷新3D 视图

    actFrame = actFrame+1 # 每次循环 +1 递增
    cube.keyframe_insert(data_path='location', index=2, frame=actFrame) # 每次循环, 记录所选的3D对象的 Z 轴的数值, 并记录关键帧 
ser.close() # 关闭串口
```