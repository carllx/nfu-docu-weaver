Arduino 基础 参考 [[Source - 交互艺术与技术]]


![bg fit left:50% vertical](https://i.imgur.com/kvAXcIl.webp)



---

# 2.1.1 开发板
## Arduino Uno
在 Arduino 开发板家族中，**Arduino Uno** 是最适合初学者的。它简单易学、稳定可靠。

Uno 开发板拥有 14 个数字输入／输出引脚
- 其中**6个引脚可以作为PWM输出引脚**。
- 具备 6 个模拟输入引脚。
- 支持在线串行编程以及复位按键。




![bg fit left:50% vertical](https://i.imgur.com/aqYa1p3.jpeg)


---

### 1. 数字口0~13（DIGITAL 0~13）


- **一般 Pin**：只能表示两种状态，**要么是 0**（低电平，关），**要么是 1**（高电平，开） 。
- **PWM(脉冲宽度调制 3,5,6,9,10,11带 `~` 号的脚)**： 精准调控输出信号，（如 LED 亮度、马达电机转速）。  
- **ANALOG IN（ 模拟口A0~A5）** 精准调控输入信号，输入“量多少”。

![bg fit left:50% vertical](https://i.imgur.com/ORJTlMz.webp)


---

- **PWM**: analogWrite() 函数, 0~255 之间: PWM
- **ANALOG IN**: analogRead() 函数 0~1023之间


![bg fit left:50% vertical](https://i.imgur.com/JSC4VAR.webp)



---

PWM 的全程是 Pulse Width Modulation（脉冲宽度调制）

**Pulse (脉冲)** 周期性 “心跳”, 提供有节奏的电力；
**Width (脉冲宽度)** 打门缝宽多少, 则通过能量或信息多少；
**Modulation (调制)** 像指挥，按需求改变脉冲宽度。

![bg fit left:50% vertical](https://i.imgur.com/1EYea1C.webp)


---

Duty cycle (Symmetry , 占空比, 工作週期) 
表示周期性事件中有效部分所占的时间比例

---
继电器
实际上是用小电流去控制大电流运作的一种 “自动开关”
![bg fit left:50% vertical](https://i.imgur.com/YqhO7DK.webp)



---

### 3. 电源输出（POWER区：3.3V、5V、GND等）
**作用：**  
- **3.3V/5V**：可以给传感器或模块供电。
- **GND**：接地，所有设备都要和GND连起来才能正确工作。
- **VIN**：外接供电时的电源输入口。

**便捷记忆：**  
相当于手机的“充电口”。

![bg fit left:50% vertical](https://i.imgur.com/aqYa1p3.jpeg)

---

### 4. 串口通信引脚（TX, RX）
**作用：**  
用于和电脑、其他控制板数据通信（如上传程序或与模块互动）。

**便捷记忆：**  
是主板“说话”和“听话”的嘴和耳朵。

![bg fit left:50% vertical](https://i.imgur.com/aqYa1p3.jpeg)

---

### 5. 其它功能脚
- **RESET（复位键/引脚）**：重启板子，相当于“重启手机”；
- **AREF**：参考电压，进阶使用（多数初学项目用不到）；
- **ICSP**：用于烧录芯片（初学时很少用）；
- **IOREF**：提供主控电压信息（一般不用）。

![bg fit left:50% vertical](https://i.imgur.com/aqYa1p3.jpeg)

---




### 杜邦线 

- 双母口: 两头都是插孔。
- 公母口: 一头插孔，一头插针。
- 双公口: 两头插针。

![bg fit left:50% vertical](https://i.imgur.com/X8zqO9v.jpeg)


![bg fit left:50% vertical](https://i.imgur.com/Ur6sFCf.jpeg)


![bg fit left:50% vertical](https://i.imgur.com/QAuDFfo.jpeg)


---


![bg fit left:50% vertical](https://i.imgur.com/znqJEGl.jpeg)
组合线: 是集正负极与信号线于一体的连接线。

---



### 面包板 

平台上面两行横向相连，中间部分竖向相连（图2-10、图2-11）。

![images/54b582eb2ff2280af20650a67bace7254300f946018ee3e40efb2293b176b0f7.jpg](https://i.imgur.com/6Hgn5zw.jpeg)
图2-10面包板正面

![images/d1931e176a6ba50908afe21f3cf11f6b5c7a80504761592b2bef5ddbaef507ac.jpg](https://i.imgur.com/MEMGwNy.jpeg)
图2-11面包板反面



---



## Arduino 驱动与开发环境



## 2.1.4 驱动与开发环境：驱动安装 

**（1）Arduino 驱动安装：CH340 驱动**

*   **核心芯片**: Arduino 开发板常使用 **CH340** 作为 USB 转串口芯片。
*   **驱动必要性**: 计算机需要此驱动才能识别和与 Arduino 通信。
*   **获取方式**:
    *   自行网络搜索 "CH340驱动"。
    *   从本书配套文件获取（推荐，版本齐全）。
*   **安装**: 根据您的操作系统选择对应版本的驱动进行安装。

![bg fit left:50% vertical](https://i.imgur.com/J7bWrkH.jpeg)



---

## 驱动与开发环境：IDE 安装 (1/2)

**（2）开发环境 IDE (Integrated Development Environment) 安装**

*   **Arduino IDE**: 官方推荐的集成开发环境，用于编写、编译和上传代码到 Arduino 开发板。
*   **开源免费**: 所有软件和案例文件均可从官方免费下载。
*   **跨平台**: 支持 Windows, macOS, Linux 等主流操作系统。

---


**步骤 1: 访问官网**
*   打开浏览器，进入 Arduino 官方网站 (arduino.cc)。
*   在导航栏找到并点击 **SOFTWARE**。


![bg fit left:50% vertical](https://i.imgur.com/NI0xbje.jpeg)


---


**步骤 2: 选择适配版本**

*   在 SOFTWARE 页面，向下滚动找到下载区域。
*   根据您的计算机操作系统 (如 Windows, macOS, Linux) 选择合适的安装包版本。

![bg fit left:50% vertical](https://i.imgur.com/NI0xbje.jpeg)

---

## 驱动与开发环境：IDE 安装 (3/3)

**步骤 3: 下载与安装**

*   点击选定版本后，通常会跳转到捐赠页面。
*   选择 **JUST DOWNLOAD** (仅下载) 按钮。
*   下载完成后，选择合适的安装路径，按提示完成软件安装。

![bg fit left:50% vertical](https://i.imgur.com/uD0UAUp.jpeg)
*图2-15 点击 "JUST DOWNLOAD" 进行下载*

---

## 2.1.5 开发环境介绍：整体界面

**Arduino IDE 概览**

*   **菜单栏**: 包含文件、编辑、项目、工具等常用功能。
*   **编程区**: 核心区域，用于编写 Arduino 代码 (Sketch)。
*   **信息栏**: 显示简要提示信息，如当前开发板、端口等。
*   **信息面板 (控制台)**: 显示编译过程、错误提示、上传状态等详细信息。

![bg fit left:50% vertical](https://i.imgur.com/vDtwKLg.jpeg)



---


### **(2) 快捷菜单 (图2-17)**


![](https://i.imgur.com/b4pgfjw.jpeg)

*   **验证 (Verify)/编译 (Compile)**:
    *   点击此按钮，IDE 会**编译**你写的代码。
    *   编译过程会检查代码是否有语法错误。

*   **上传 (Upload)**: 编译代码并通过USB将程序**烧录**（写入）到连接的 Arduino 开发板中。
*   **新建 (New)**: 创建一个新的代码文件（sketch）。
*   **打开 (Open)**: 打开一个已存在的项目文件。
*   **保存 (Save)**: 保存当前正在编辑的项目文件。

---

### **(3) 串口监视器 (图2-18)**


串口监视器是一个非常实用的调试工具。

*   查看 Arduino 板通过串口发送到计算机的数据。
*   从计算机向 Arduino 板发送数据。
*   监控程序的执行情况（例如，打印变量值）。

![](https://i.imgur.com/fcvyYye.jpeg)


---

## **2.1.6 基本语法结构**

<!-- _class: lead -->
Arduino 语言基于 C/C++，理解其基本语法是编程的关键。

### **C++ 常用符号 (表 2-4)**

| 符号              | 意义                                           |
| :-------------- | :------------------------------------------- |
| `//` (双斜杠)      | **单行注释**：程序不执行 `//` 之后在同一行的内容。               |
| `/**/` (单斜杠和星号) | **多行注释**：程序不执行 `/*` 和 `*/` 之间的所有内容。          |
| `{}` (大括号)      | **代码块**：用来组织和界定函数、控制结构（如 `if`, `for`）等的作用范围。 |

*注释是给程序员看的，帮助理解代码，不会被编译到最终程序中。*

---

### 程序结构核心组成

- **变量定义**  
  `int 变量名;`  //声明一个整型变量

- **setup() 函数**  
  - 初始化步骤，在通电或复位后仅执行一次
  - 常用于变量、引脚、库函数的初始化

- **loop() 函数**  
  - 程序主体部分
  - 自动循环执行，主逻辑都在此


---
## Adruino 脚本存放位置


![bg fit left:50% vertical](https://i.imgur.com/SNIqF7N.webp)



---


```cpp

// 初始化函数，只在程序开始时运行一次
void setup() {
  pinMode(13, OUTPUT);  // 将 13 号数字引脚设为输出模式
}

// 主循环函数，会不断循环执行
void loop() {
  digitalWrite(13, HIGH);  // 打开 LED 点亮（HIGH 是高电平）
  delay(1000);  // 延迟（等待）1 秒
  
  /** 
  写入 LOW 低电平关闭 LED，
  注意这里原内容中 Low 拼写错误，应该是 LOW
  */
  digitalWrite(13, LOW);  
  delay(1000);  // 延迟（等待）1 秒
}
```



---
 TRAE
 
(Source: [trae.ai: 安装 Trae 并完成初始设置 - 文档 - Trae](https://docs.trae.ai/ide/set-up-trae?_lang=zh))


![bg fit left:50% vertical](https://i.imgur.com/flWA0eB.webp)



---

## 实验: AI  辅助编程

![bg fit left:50% vertical](https://i.imgur.com/gMMRzrQ.webp)