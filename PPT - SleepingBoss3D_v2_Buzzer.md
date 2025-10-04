---
theme: NFUPPT
marp: True
---

## FBX 缺少必要的切线问题

```
Warning: A MAT is Normal Mapping, but the SOP being used with it does not have tangent attributes. Tangent
attributes can be created with the Attribute Crreate SOP. (/project1/render1)
```

FBX模型在使用法线贴图时缺少必要的切线属性，导致渲染警告。


![bg fit left:50% vertical](https://i.imgur.com/OTquHUz.webp)


---



解决方案:

**FBX模型的SOP输出后连接一个Attribute Create SOP，并勾选"Compute Tangents"选项来生成切线**。

![bg fit left:50% vertical](https://i.imgur.com/QIflBWC.webp)




---
<!-- _class: lead -->
## TD 驱动 Buzzer




---
- **有源蜂鸣器（active buzzer）**：依靠内部振荡器（internal oscillator）产生音调，==简单说给直流电就自动出固定声音 。==
- **无源蜂鸣器（passive buzzer）**：需要接入交流信号（AC signal）才能发声，不会自动产生固定音调，得==外部给变化信号控制声音== 。

![bg fit left:50% vertical](https://i.imgur.com/9tdjUOS.webp)


---


方案通过google Gemini pro2.5 获得


```
TouchDesigner 中, 
有一个expression Chop, expression 参数为`me.inputVal > -0.5` , 
接收由mouseinChop x 通道的变量. 
如何实现
当触发 > -0.5 时, 触发一次 arduino 的Buzzer 一次;
当触发  < -0.5 时, 触发一次 arduino 的Buzzer 一次.

```

(Source: [google.com: Google Gemini](https://gemini.google.com/u/1/app/49c81d4dea052a7d))


![bg fit left:50% vertical](https://i.imgur.com/gou1CEM.webp)


---

通过`ChopExecuteDAT` , 向Serial1 发送触发指令

![bg fit left:50% vertical](https://i.imgur.com/EP2tOXg.webp)


---

将 **CHOP** 参数指向 `express2`

![bg fit left:50% vertical](https://i.imgur.com/KeQajce.webp)



---
python 中的条件函数

当`express2` 的值发生变化时, 检查值 `val` 是否为0, 如果是(True) , 发送 `b` 到 `Serial1` 
![bg fit left:50% vertical](https://i.imgur.com/MUbZKq8.webp)


---


修改 Arduino 代码 `HC-SR04 Ultrasonic(Pulse)`

添加 公共变量 
```cpp
const int buzzerPin = 8; // 定义蜂鸣器连接的引脚
```

Setup 函数添加定义:

```cpp
pinMode(buzzerPin, OUTPUT);
```
![bg fit left:50% vertical](https://i.imgur.com/vlveMyK.webp)


---

Loop 函数, 添加逻辑

```cpp
if (Serial.available() > 0) { // 只有当有数据可用时才读取
    // 读取传入的字符
    char command = Serial.read();

    // 如果收到的字符是 'b'
    if (command == 'b') {
        // 触发蜂鸣器响一下
        tone(buzzerPin, 1000, 100); // 以1000Hz的频率响100毫秒
    }
  }
```
![bg fit left:50% vertical](https://i.imgur.com/NmXaWRS.webp)

---

完整Arduino 脚本: 


```cpp
const int trigPin = 2;    // 触发引脚
const int echoPin = 3;    // 回声引脚
const int buzzerPin = 8; // 定义蜂鸣器连接的引脚

long duration;
int distance;
int smoothDistance;
int lastDistance = 0;

void setup() {
  // 初始化串口通信
  Serial.begin(9600);
  
  // 设置引脚模式
  pinMode(trigPin, OUTPUT);
  pinMode(echoPin, INPUT);
  pinMode(buzzerPin, OUTPUT);
  
  Serial.println("Arduino Ultrasonic Sensor Ready");
}

void loop() {
  // 清除触发引脚
  digitalWrite(trigPin, LOW);
  delayMicroseconds(2);
  
  // 发送10微秒的高电平脉冲
  digitalWrite(trigPin, HIGH);
  delayMicroseconds(10);
  digitalWrite(trigPin, LOW);
  
  // 读取回声引脚的脉冲持续时间
  duration = pulseIn(echoPin, HIGH);
  
  // 计算距离（厘米）
  distance = duration * 0.034 / 2;
  
  // 简单的平滑滤波
  smoothDistance = (distance + lastDistance) / 2;
  lastDistance = smoothDistance;
  
  // 限制距离范围（0-200cm）
  if (smoothDistance > 200) {
    smoothDistance = 200;
  }
  if (smoothDistance < 0) {
    smoothDistance = 0;
  }
  
  // 发送数据到TouchDesigner
  // 格式：distance,normalized_value
  float normalizedValue = smoothDistance / 200.0; // 归一化到0-1
  
  Serial.print(smoothDistance);
  Serial.print(",");
  Serial.println(normalizedValue, 3);
  
  // 延迟以控制数据发送频率
  delay(50); // 20Hz更新频率

  if (Serial.available() > 0) { // 只有当有数据可用时才读取
    // 读取传入的字符
    char command = Serial.read();

    // 如果收到的字符是 'b'
    if (command == 'b') {
        // 触发蜂鸣器响一下
        tone(buzzerPin, 1000, 100); // 以1000Hz的频率响100毫秒
    }
  }
}
```




---



## 连接思路

```
VCC        → 5V（HC-SR04） / 3.3V（蜂鸣器）
GND        → GND
Trigger    → Pin 2
Echo       → Pin 3
Buzzer IO  → Pin 8
```

