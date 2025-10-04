---
theme: 
_class: 
paginate: true
backgroundColor: "'#fff'"
backgroundImage:
---


# FFTs 应用

## 一个有趣的例子
![bg fit left:50% vertical](https://i.imgur.com/VkPW23v.webp)

<!-- _footer: ' Source: [arduino.cc: Arduino microphone sensor using Nano Every - Other Hardware / Audio - Arduino Forum](https://forum.arduino.cc/t/arduino-microphone-sensor-using-nano-every/1123793/4)' -->


---

## 判断蜂群的健康状况

通过这种对不同频率声音密度的监测对声音频率进行分析，
重点关注一个大约500 Hz总范围的低频段，这个频段被分成十个区间，每个区间约48 Hz。


![bg fit left:50% vertical](https://i.imgur.com/KTYjLe1.webp)


---
Sound Density:

- **≈350 Hz:** Multiple Queens, 蜂群中可能会争斗以确定蜂群的蜂王（这种现象被称为“Quacking”）。
- **≈450 Hz**: New Queen Emerging, 
蜂群中有新蜂王诞生的信号（这种情况下，其他潜在的蜂王可能不会被工蜂释放）。
- **≈510 Hz**: Unhealthy Colony, 可能表示蜂群处于不健康的状态。


![bg fit left:40% vertical](https://i.imgur.com/ebAkscy.webp)

---

# **Part 2: Arduino 与声音传感器设置**

本模块重点介绍
- 声音传感器与 Arduino 板的物理连接，
- 以及 Arduino 程序（Sketch）的开发，该程序将读取声音级别并准备进行数据传输。

---

## 2.1. 了解您的声音传感器 (例如 KY-037)

*   **简介**:
    *   多种 Arduino 声音传感器模块可选，**KY-037** 是常见示例。
    *   通常包含：驻极体电容麦克风（捕捉声音）和辅助电路（如 LM393 比较器放大信号）。

![bg fit left:50% vertical](https://i.imgur.com/VQaEU1b.webp)


---


*   **工作原理**:
    *   麦克风diaphragm(振膜)随声波振动。
    *   振动改变麦克风内部电学特性（电容）。
    *   产生与声音强度成正比的可变模拟电压信号。


![bg fit left:50% vertical](https://i.imgur.com/abvyHVA.webp)


---



- diaphragm：[ˈdaɪəfræm] ， 隔膜、振膜 ，是话筒等音频设备中用于感应声波振动的振膜。
- permanent magnet：[ˈpɜːmənənt ˈmæɡnət] ，名词短语，意思是永磁体 ，能提供稳定磁场。
- sound waves：[ˈsaʊnd weɪvz] ，名词短语，即声波 ，是声音传播的形式。
- electric signal：[ɪˈlektrɪk ˈsɪɡnəl] ，名词短语，指电信号 ，是将声音等信息转换后的电形式信号。
- coil：[kɔɪl] 线圈 ，在图中通过在磁场中随振膜振动切割磁感线来产生电信号。



![bg fit left:50% vertical](https://i.imgur.com/abvyHVA.webp)

---

## 2.1. 声音传感器引脚(1/2)

*   **G (或 GND - Ground - 接地)**: 建立电路的公共电气参考点 (0 伏特)。
*   **+ (或 VCC - Positive Power - 正电源)**: 为传感器模块供电, 通常 5V 输出引脚。

![bg fit left:50% vertical](https://i.imgur.com/VQaEU1b.webp)


---

## 2.1. 声音传感器引脚(2/2)


 **AO (Analog Output - 模拟输出)**:
*  声音强度的*连续模拟电压*。
*   声音越大，电压越高。

**DO (Digital Output - 数字输出)**:
*   提供二进制信号 (HIGH/LOW)。
*   声音强度超过阈值时输出 HIGH，否则为 `LOW`。
*   阈值通常可通过模块上的电位器调节。
*   _对于精细的频谱图，模拟输出 A0 更为重要。_

![bg fit left:50% vertical](https://i.imgur.com/tXnrEvD.webp)

---

## 2.2. 将声音传感器连接到 Arduino


**连接说明 (Arduino Uno/Nano):**

1.  **电源连接 (VCC/+ 至 5V)**
2.  **接地连接 (GND/G 至 GND)**
3.  **模拟信号连接 (A0 至 A0)**

![bg fit left:50% vertical](https://i.imgur.com/pPnbg0V.webp)

---

## 项目文件结构说明

```bash
InteractiveSound/                  # 这是我们项目的主文件夹
├── 01_SoundHistogram.toe          # 第一个主要的TouchDesigner项目文件，可能是做声音频谱相关的
├── 02_makeSomeNoise.toe           # 第二个主要的TouchDesigner项目文件，可能是用来制造声音效果的
├── Arduino/                       # 存放所有和Arduino硬件交互相关的代码和文件
│   ├── sketches/                # Arduino的程序代码（.ino文件）都放在这里
│   │   ├── SoundSensor_to_Serial.ino/ # 一个例子：读取声音传感器并通过串口发数据的程序
│   │   └── ...                    # 其他Arduino程序
│   ├── libraries/                 # 如果你的Arduino程序用到了额外的库，放这里
│   └── config/                    # Arduino相关的配置文件
├── Audio/                         # 存放项目用到的音频文件，比如背景音乐、音效
│   └── Dvořák - Rondo, Op. 94.wav # 这是一个音频文件示例
├── Components/                    # 存放TouchDesigner的可复用组件（.tox文件）
│   └── Histgram.tox               # 一个叫Histgram的组件示例
├── Scripts/                       # 存放Python脚本，这些脚本可能会被TouchDesigner调用
│   └── chopexecute.py             # 一个Python脚本示例，可能用在CHOP Execute DAT里



```


---


## 2.3. 编写 Arduino Sketch (程序)


**逻辑123**:
1.  定义传感器连接的 Arduino 引脚。
2.  在 `setup()` 函数中设置串行通信 (Arduino 启动时运行一次)。
3.  在 `loop()` 函数中持续读取模拟传感器值并将其打印到串行端口 (重复运行)。

---

## 2.3. 编写 Arduino Sketch (代码概览 - Part 1)


```cpp
// 定义连接到声音传感器 A0 输出的模拟引脚
const int soundSensorPin = A0;

// 存储声音级别读数的变量
int soundLevel = 0;

void setup() {
  // 初始化串行通信，波特率为 9600
  // 此速率必须与 TouchDesigner 中 Serial DAT 设置的速率匹配
  Serial.begin(9600);

  // 可选: 明确将声音传感器引脚设置为 INPUT
  // 对于 AVR Arduino 上的 analogRead()，这通常不是必需的，
  // 因为 analogRead() 会配置引脚，但为了清晰起见，这是个好习惯。
  pinMode(soundSensorPin, INPUT);

  // 可选: 启动时向串行监视器打印一次消息
  // Serial.println("Analog Sound Sensor Initialized. Sending data...");
}
```

---

## 2.3. 编写 Arduino Sketch (代码概览 - Part 2)

```cpp
void loop() {
  // 从声音传感器读取模拟值 (0 到 1023)
  soundLevel = analogRead(soundSensorPin);

  // 通过串行端口发送声音级别值
  Serial.print(soundLevel);
  // 发送一个换行符来表示此数据点的结束。
  // 当 TouchDesigner 的 Serial DAT 中选择 "One Row Per Line" 时，
  // 这对于正确解析至关重要，避免 Serial.println() 发送的
  // 回车+换行符可能导致的问题。
  Serial.print('\n');

  // 添加一个小延迟来控制数据发送速率。
  // 20 毫秒的延迟大约产生每秒 50 次读数 (50Hz)。
  // 音频采样，44.1kHz 采样率表示每秒采集 44100 个样本点
  // 调整此值以平衡响应能力和处理负载。
  delay(20); // 延迟时间 (毫秒)
}
```

---

## 2.3. 编写 Arduino Sketch (关键代码解析)

*   `const int soundSensorPin = A0;`
    *   声明常量 `soundSensorPin` 并赋值为 `A0` (Arduino 的第一个模拟输入引脚)。

*   `Serial.begin(9600);`
    *   在 `setup()` 中初始化串行通信，设置数据传输速率 (波特率) 为 9600 bps。
    *   **此波特率必须与 TouchDesigner 中的设置完全一致。**


---


*   `soundLevel = analogRead(soundSensorPin);`
    *   在 `loop()` 中读取 `soundSensorPin` 上的电压。
    *   Arduino 的 ADC 将模拟电压转换为 0 (0V) 到 1023 (参考电压, 通常5V) 的10位数字。


*   `Serial.print(soundLevel)`: 发送数值的字符串形式。

*   `Serial.print('\n')`: 发送单个换行符 (`\n`) 作为数据分隔符。
	*   *此方法优于 `Serial.println()` (通常发送 `\r\n`)，以确保 TouchDesigner 正确解析。*

---


*   `delay(20);`
    *   暂停 `loop()` 函数 20 毫秒。
    *   控制数据发送速率 (约 50Hz,1000ms/20ms)。

---


权衡：
* 短延迟 = 高响应、高负载；
* 长延迟 = 低负载、低响应。防止 Arduino 过快发送数据，压垮 TouchDesigner。

---

## 2.4. 测试 Arduino 设置: 使用串行监视器





---

## 2.4. 测试 Arduino 设置 (步骤 1/2)

1.  **连接 Arduino**:
    *   通过 USB 数据线将 Arduino 板连接到计算机。
2.  **选择板型和端口**:
    *   Arduino IDE: `工具 (Tools)` > `开发板 (Board)` > 选择您的 Arduino 型号 (如 "")。
    *   Arduino IDE: `工具 (Tools)` > `端口 (Port)` > 选择 Arduino 连接的串行端口 (通常旁边有 Arduino 板名称)。

![bg fit left:50% vertical](https://i.imgur.com/Cq26oZ5.webp)

![bg fit left:50% vertical](https://i.imgur.com/4FxaC6p.webp)



---

## 2.4. 测试 Arduino 设置 (步骤 2/2)

4.  **打开串行监视器**:
    *   上传完成后，点击 Arduino IDE 中的“串行监视器”按钮 (通常在右上角，一个放大镜图标)。
5.  **设置波特率**:
    *   在串行监视器窗口中，找到波特率下拉菜单 (通常在右下角)。
    *   确保设置为 **9600 baud**，与 Sketch 中的 `Serial.begin(9600);` 匹配。
6.  **观察输出**:
    *   如果一切正常，串行监视器中应出现一连串数字 (即 `soundLevel` 值)。
    *   在传感器附近制造声音 (如拍手、大声说话)，数字应**增大**。
    *   安静时，数字应**减小**或稳定在较低值 (代表环境噪音)。
![bg fit left:50% vertical](https://i.imgur.com/ghJkYmd.webp)



---




<!-- _class: lead -->
# **Part 3: 连接 Arduino 与 TouchDesigner**

**将 Arduino 的声音传感器数据引入 TouchDesigner**


*   配置 TouchDesigner 以接收和解析这些数据。
*   掌握 TouchDesigner 内的串口通信设置。

---

## 3.1 TouchDesigner 中的串口通信入门


### 步骤 1 : 打开项目并添加 Serial DAT

*   Operator: **Serial DAT (Data Table Operator)** :
    *   它会监听指定串口。
    *   捕获 Arduino 发送的字节流。
    *   将数据组织成表格，供后续使用。

![bg fit left:50% vertical](https://i.imgur.com/BfCvg8B.webp)


---

## 3.2 设置 Serial DAT

### 步骤 2: 配置 Serial DAT 参数 - (1/4)


**Port (端口)**:
指定 TouchDesigner 监听哪个串口 (COM 端口)。

*   **查找端口**: 与 Arduino IDE 中选择的端口一致 (工具 > 端口)。
	*   Windows: 如 `COM3`, `COM4`。
	*   macOS: 如 `/dev/cu.usbmodemXXXX` 或 `/dev/tty.usbmodemXXXX`。
![bg fit left:50% vertical](https://i.imgur.com/EbzlJRO.webp)


---


**重要提示：端口独占性**
*   一个串口通常**一次只能被一个应用程序**激活使用。
*   若 Arduino IDE 的串口监视器已连接，TouchDesigner 可能无法打开同一端口。
*   **在 TouchDesigner 中激活 Serial DAT 前，请关闭 Arduino 串口监视器。**


![bg fit left:50% vertical](https://i.imgur.com/QcTkVfW.webp)



---

### 步骤 3: 配置 Serial DAT 参数 - (2/4)

*   **Baud Rate (波特率)**:
    *   **作用**: 数据传输速率。
    *   **设置**: **必须**与 Arduino 代码中 `Serial.begin()` 命令指定的波特率完全匹配。
    *   在我们的代码 (2.3节) 中，设置为 **`9600`**。
    *   波特率不匹配会导致数据乱码或无法接收。
![bg fit left:50% vertical](https://i.imgur.com/7vWKT67.webp)


---


*   **Table Format (表格格式)** (位于参数的 "Serial" 页面):
    *   **设置**: **`One Row Per Line`** (每行一个数据包)。
    *   **作用**: 告知 Serial DAT 将每个传入的换行符 `\n` 视作数据包的结束，并为此数据包创建新行。
    *   这与我们 Arduino 代码发送 `Serial.print(value); Serial.print('\n');` 的方式完美匹配。

![bg fit left:50% vertical](https://i.imgur.com/RkoEOVy.webp)



---

### 步骤 3: 配置 Serial DAT 参数 - (3/4)

*   **Communication Parameters (通信参数)**:
    *   **Parity (奇偶校验)**: `None` (默认)。标准 Arduino 通信通常不使用。
    *   **Data Bits (数据位)**: `8` (默认)。标准 Arduino 设置。

---

<!-- _color: red -->


*   **Stop Bits (停止位)**: `1` (默认)。标准 Arduino 设置。( 9600,8,N,2 作为常见默认配置，但 1 更普遍且与我们的代码匹配)。
*   **注意**: 若在 Arduino 端更改了这些设置（我们的代码中未更改），此处需保持一致。

---

### 步骤 3: 配置 Serial DAT 参数 - (4/4)

*   **Active (激活)** 
    *   切换 Serial DAT 与端口的连接**接收数据**。
    *   **上传 Arduino 代码**: 需要切换到 **OFF** 状态，以释放串口供 Arduino IDE 使用。上传完成后再切换回 ON。
![bg fit left:50% vertical](https://i.imgur.com/UbudQz2.webp)





---

### 关键 Serial DAT 参数总结

- **Port**：Arduino COM 端口（例如 COM3）
    - 推荐值 / 设置：必须与 Arduino 端口匹配。
    - 关闭 Arduino 串口监视器以避免冲突。
- **Baud Rate**：`9600`(推荐值 )数据传输速度。
    - 必须与 Arduino 代码中的 Serial.begin () 完全匹配。
- **Table Format**： `One Row Per Line`
    - Arduino 发送的` \n `(换行符) 。
- **Active**：On (接收数据), Off (上传代码到 Arduino)

![bg fit left:50% vertical](https://i.imgur.com/uWATnmB.webp)



---

### Row or multiple Rows
单行,或多行数据
![bg fit left:50% vertical](https://i.imgur.com/Z5CSL2y.webp)


![bg fit left:50% vertical](https://i.imgur.com/iKocMSo.webp)




---

## 3.3 在 TouchDesigner 中接收和验证数据

当 Serial DAT 配置正确且 “Active” 开关设为 ON（Arduino 已连接、供电并运行代码），数据应开始出现在 Serial DAT 查看器中，该查看器显示因 Arduino 代码发送单个加换行符的 soundLevel 数值而呈现单列每行一个值且随新数据实时更新的表格 。

---

### 数据验证步骤

1. 查看Serial DAT，确认数字更新
2. 对比串口数值，0 - 1023随声波动
3. 制造声音，Serial DAT数值升大降小 

![bg fit left:50% vertical](https://i.imgur.com/y5EEsiC.webp)



---


---

<!-- _class: lead -->
# **Part 4**
## 在 TouchDesigner 中处理传感器数据

---

## 概览：为何处理数据？

*   **目标**：将从 `Serial DAT` 接收到的原始文本数据转换为适合生成**频谱图**的格式。
*   **核心任务**：
    1.  将表格数据 (DAT) 转换为 **CHOP 通道**。
    2.  (可选) **优化和平滑**信号。

---

## 4.1 从文本到通道：使用 `DAT to CHOP`

*   **目标**：将 `Serial DAT` 中表示声音强度的文本数据，转换为 CHOP 中的数值通道，以便进行后续的实时处理和可视化。
*   **工具**：`DAT to CHOP` OP。

```mermaid

graph LR
    A["Serial DAT (serial1)"] --> B["DAT to CHOP"]

```



---

### 配置 DAT to CHOP 参数

### 多行数据为例

`DAT` (DAT Page) :
  
- 确保此参数指向你的 Serial DAT ，例如 `serial1` 。

`Select Cols `(DAT Page) :

- Select Cols : 选择 by Index 。
- Start Col Index :  0 。

`Output` (DAT Page) :

- Output : 选择 Channel per Row 。
- First Row is : 选择 Names (第一行是列名，如 "message")。
- First Column is : 选择 Values  

![bg fit left:50% vertical](https://i.imgur.com/1QanRVi.webp)



---

### **单行数据**为例

- `Select Row `  : 选择 `by Index` 。
StartRowIndex: 0; EndRowIndex: 1;
- `Select Cols` : 选择 `by Index` 。
StartColumIndex: 0; EndColumIndex: 0;


- `Output `: 选择 `Channel per Row `。
- `First Row is` : 选择 `Names` (第一行是列名，如 "message")。
- `First Column is` : 选择 `Values`  


![bg fit left:50% vertical](https://i.imgur.com/bz82qoO.webp)



---

模拟mp3 信号

![bg fit left:50% vertical](https://i.imgur.com/g94L39K.webp)




---


![bg fit left:50% vertical](https://i.imgur.com/e4MrkMJ.webp)



---


![bg fit left:50% vertical](https://i.imgur.com/PhJn8FW.webp)



---

#### 难点数据过滤器(Filters)

 `Low Pass` or `High Pass`


![bg fit left:50% vertical](https://i.imgur.com/Q6SXHMM.webp)




---
![bg fit left:50% vertical](https://i.imgur.com/yFaEQ1V.webp)


每个滤波器类型的功能特点：
1. **低通滤波器**：低通滤波器就像是一个只让慢走的小朋友（低频信号）通过，把快跑的小朋友（高频信号）拦住的门卫，能让信号变得更平滑，去掉快速的小波动。
2. **高通滤波器**：高通滤波器好比是一个专门拦住慢走的小朋友（低频信号），只放快跑的小朋友（高频信号）通过的门卫，能去除信号里缓慢变化的部分，突出快速变化的信号。

---


1. **带通滤波器**：带通滤波器如同一个只挑选出在特定速度区间内跑步的小朋友（特定频率范围的信号）通过，把其他速度的小朋友（其他频率信号）拦住的门卫，用来提取特定频段的信号。
2. **带阻滤波器**：带阻滤波器就像一个专门拦住特定速度区间内跑步的小朋友（特定频率范围的信号），让其他速度的小朋友（其他频率信号）通过的门卫，主要用于消除特定的干扰频率。 

![bg fit left:50% vertical](https://i.imgur.com/yFaEQ1V.webp)


---



### 数字响应信号(0,1)

![bg fit left:50% vertical](https://i.imgur.com/A6Jrk5R.webp)



---

# 以下忽略

---



## 4.2 使用`Shuffle > swap..` 将多个通道转换为单个通道
*   **问题**：`DAT to CHOP` OP会为每个输入列创建一个新通道。
*   **目标**：将所有通道合并为单个通道，以便后续的频谱分析。
*   **工具**：`Shuffle > swap channels and samples` 。

![bg fit left:50% vertical](https://i.imgur.com/KOnoZBU.webp)


---

## 4.3 (可选但推荐) 平滑数据：使用 `Filter CHOP`

*   **问题**：原始模拟传感器读数常带有：
    *   **抖动 (Jitter)**: 快速、微小的波动。
    *   易受环境**噪声**影响。
*   **目标**：应用平滑滤波，获得更稳定、视觉效果更佳的输出。
*   **工具**：`Filter CHOP` 是理想选择。

---

### 步骤 1：添加并连接 `Filter CHOP`

插入滤波器 `Filter CHOP`  


```mermaid
graph LR
    A["DAT to CHOP"] --> B(Filter CHOP) --> C["Audio Spectrum CHOP (后续)"]
```

---

### 步骤 2：配置 `Audio Filter CHOP`

*   **`Type` 参数**:
    *   对于常规平滑和降噪，"**Low Pass**" (低通) 是常用且有效的选择。
    *   *工作原理*：允许信号中较低“频率”的变化通过，同时衰减较高“频率”的快速抖动。

*   **`Filter Width` 或 `Cutoff Frequency` 参数**:
    *   这些参数控制**平滑程度**。

---

### 步骤 2：配置 `Filter CHOP 

*   平滑度：
    *   **较大的 `Filter Width`** (若使用基于时间的滤波器，如 Box, Gaussian)
    *   或 **较低的 `Cutoff Frequency`** (若使用基于频率的滤波器，如 Butterworth Low Pass)
    *   会导致输出信号**更平滑**。

*   **注意**：过度平滑会引入明显的**延迟 (Lag / Latency)**，使信号对输入声音电平的快速变化响应迟钝。

---

### 步骤 3：实验与权衡

*   **观察与调整**：
    *   鼓励学习者在调整参数时观察 `Filter CHOP` 的输出。
    *   目标：在**减少噪声**的同时，信号仍能对重要的声音事件做出**充分响应**。

*   **固有权衡**:
    *   提高平滑度通常以牺牲一定的**响应速度**为代价。
    *   滤波器的选择取决于：
        *   传感器的特性
        *   环境噪声的性质
        *   最终可视化效果和交互感的期望

---



如何实现 touchdesigner 通过鼠标左右移动触发 maximo 模型融合多个个混合动画片段, 

已经从maximo下载了三段动画片段, 分别为"Kip Up","Sleeping Idle", "Snake Hip Hop Dance" . 

因为Touchdesigner 中的 Blend CHOP 需要 License, 因此可能考虑在 Maya 中实现三个动画片段的预处理再导入TouchDesigner
动画之间的融合使用 tax editor, animation Clip 作为Maya 融合动画的工具
当鼠标移到左边时 Sitting_Idle , 移到左边时 Snake_Hip_Hop_Dance , 鼠标在左方右方分别被映射为 0 和 1 之间, 当 < 0.3时候, 角色 "Sleeping Idle", 当 > 0.5 时角色 "Kip Up" 并 "Snake Hip Hop Dance", 注意并保证两个动作自然过度. 


TouchDes...
链接：https://pan.baidu.com/s/1qfpZ3_3r_RaAAzdAEnjkAg 
提取码：116D 


me.inputme.inputVal


idle_w
(1.0 if me.inputVal < 0.3 else ((0.5 - me.inputVal) / 0.2 if me.inputVal <= 0.5 else 0.0))

dance_w
(0.0 if me.inputVal < 0.3 else ((me.inputVal - 0.3) / 0.2 if me.inputVal <= 0.5 else 1.0))