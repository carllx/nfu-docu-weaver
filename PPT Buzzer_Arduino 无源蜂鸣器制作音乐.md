https://www.doubao.com/chat/5374222629939202
https://blog.csdn.net/weixin_45344328/article/details/123748328

![bg fit left:50% vertical](https://i.imgur.com/9tdjUOS.webp)


---




##  一、前期准备与乐理知识学习

1.  **识读简谱**：
    *   理解简谱的基本元素，如音调（例如文章中的E调）。

认识音符(Note)（如1, 2, 3, 4, 5, 6, 7）
高音点（高八度`3̇ 2̇ 1̇ ` ）
低音点（高八度, 在数字下方）。


---


### 了解休止符（Rest note, 简谱中的0） 
例如在一段乐谱中，若出现 “5 0 3”，那么在发出 “5” 的音后，会停顿一个节拍的时长，接着再发出 “3” 的音



---


1.  **理解节拍**：
    *   学习节拍表示，如4/4拍（以四分音符为一拍，每小节有四拍）。
    *   掌握不同音符的时值：
        *   无下划线：一拍 (1)
        *   一条下划线：半拍 (0.5)
        *   两条下划线：四分之一拍 (0.25)
        *   音符后有“—”：每有一个“—”，前面音符的拍子加1拍。
        *   音符后有“·”点：前面音符的拍子加0.5拍。
        *   休止符（0）也占一定的节拍，通常与普通音符同样计算（如文中默认为1拍）。
2.  **音符频率对照**：
    *   查阅“音符频率对照表”。
    *   根据乐曲的音调（如E调），找到简谱中每个音符（包括高音、中音、低音）对应的具体频率值。
    *   休止符（0）在程序中通常用一个特殊值表示（如-1），代表不发声。

**二、材料准备**

1.  **无源蜂鸣器**（直插式）
2.  **Arduino UNO板**
3.  **杜邦线**（两根）

**三、硬件连接**

1.  参照文章提供的接线图。
2.  将无源蜂鸣器的一个引脚连接到Arduino的数字引脚（例如文章中使用的`tonepin = 3`）。
3.  将无源蜂鸣器的另一个引脚连接到Arduino的GND（接地）引脚。

**四、程序编写**

1.  **定义音符频率**：
    *   使用 `#define` 为乐谱中可能用到的低音、中音、高音的每个音符（do, re, mi, fa, sol, la, si）定义其对应的频率值。
    *   例如：`#define B3 393` (中音mi)，`#define C1 661` (高音do)。
    *   定义休止符的频率：`#define A0 -1`。
2.  **定义节拍**：
    *   （可选，但文中提到）可以使用 `#define` 定义常用的节拍值，如 `WHOLE 1`, `HALF 0.5`。但实际代码中，节拍数组是直接用数值计算的。
3.  **创建音符频率数组 (`num[]`)**：
    *   按照乐谱的顺序，将每个音符（包括休止符）对应的频率值依次存入一个整型数组中。
    *   例如：`-1, 393, 661, 624, 661, 700, 661, ...`
4.  **创建音符节拍数组 (`zi[]`)**：
    *   按照乐谱的顺序，将每个音符（包括休止符）对应的节拍数（以浮点数表示，如1, 0.5, 0.25, 1+1+1=3等）依次存入一个浮点型数组中。
    *   例如：`0.5, 0.5, 3, 0.25, 0.25, 0.25, 0.25, ...`
5.  **编写 `setup()` 函数**：
    *   使用 `pinMode(tonepin, OUTPUT);` 将蜂鸣器连接的引脚设置为输出模式。
    *   计算音符数组的长度：`changdu = sizeof(num) / sizeof(num[0]);`，用于后续循环。
6.  **编写 `loop()` 函数**：
    *   使用 `for` 循环遍历音符频率数组 `num[]` 和节拍数组 `zi[]`。
    *   在循环中，对每个音符：
        *   使用 `tone(tonepin, num[x]);` 函数让蜂鸣器发出 `num[x]` 对应的频率的声音。如果 `num[x]` 是休止符的频率（如-1），`tone()` 函数通常不会发声或根据具体实现处理。
        *   使用 `delay(500 * zi[x]);` 来控制音符的持续时间。`zi[x]` 是当前音符的节拍数，`500` 是一个可调整的系数，用于控制整体音乐的速度（基准延时）。
        *   使用 `noTone(tonepin);` 停止蜂鸣器发声，为下一个音符做准备。
    *   （可选）在整首曲子播放完毕后，可以加入一个较长的延时 `delay(2000);`，然后再重新播放。

**五、上传与测试**

1.  将编写好的Arduino程序通过Arduino IDE上传到Arduino UNO板。
2.  观察无源蜂鸣器是否按照乐谱和程序设定播放音乐。
3.  根据实际播放效果，可以调整 `delay()` 函数中的延时系数（如文中的500）来改变音乐的播放速度。

这些步骤涵盖了从理解乐理、准备硬件到编写和测试Arduino程序的整个过程。




```cpp

int buzzerPin = 9;   // 支持PWM输出的引脚

void playNote(int note, int duration, int volume) {
  int delayValue = 1000000 / note / 2;  // 某音符的半周期(us)
  long cycles = note * duration / 1000; // 播放周期总数

  for (long i = 0; i < cycles; i++) {
    digitalWrite(buzzerPin, HIGH);
    delayMicroseconds(delayValue * volume / 255); // 响的时间，volume从0~255
    digitalWrite(buzzerPin, LOW);
    delayMicroseconds(delayValue * (255 - volume) / 255); // 不响的时间
  }
}


```



---
```cpp
// 音符频率对照表（中音区）

#define NOTE_C4  262  // do
#define NOTE_D4  294  // re
#define NOTE_E4  330  // mi
#define NOTE_F4  349  // fa
#define NOTE_G4  392  // sol
#define NOTE_A4  440  // la
#define NOTE_B4  494  // si

// 高音区（高八度）
#define NOTE_C5  523  // do
// 其他高音音符...

// 低音区（低八度）
#define NOTE_C3  131  // do
// 其他低音音符...

int buzzerPin = 9;  // 蜂鸣器连接引脚

void setup() {
  pinMode(buzzerPin, OUTPUT);
}

void loop() {
  // 播放简单旋律：小星星
  playNote(NOTE_C4, 500);  // do
  playNote(NOTE_C4, 500);  // do
  playNote(NOTE_G4, 500);  // sol
  playNote(NOTE_G4, 500);  // sol
  
  delay(1000);  // 暂停1秒
}

// 播放指定音符和持续时间
void playNote(int note, int duration) {
  if (note > 0) {  // 0表示休止符
    tone(buzzerPin, note);
    delay(duration);
    noTone(buzzerPin);  // 停止发声
  } else {
    delay(duration);  // 休止符
  }
  delay(50);  // 音符之间的短暂停顿
}


// 播放指定音符和持续时间
void playNote(int note, int duration) {
  if (note > 0) {  // 0表示休止符
    tone(buzzerPin, note);
    delay(duration);
    noTone(buzzerPin);  // 停止发声
  } else {
    delay(duration);  // 休止符
  }
  delay(50);  // 音符之间的短暂停顿
}

// 升级版

void playNote(int note, int duration, int volume) {
  int delayValue = 1000000 / note / 2;  // 某音符的半周期(us)
  long cycles = note * duration / 1000; // 播放周期总数

  for (long i = 0; i < cycles; i++) {
    digitalWrite(buzzerPin, HIGH);
    delayMicroseconds(delayValue * volume / 255); // 响的时间，volume从0~255
    digitalWrite(buzzerPin, LOW);
    delayMicroseconds(delayValue * (255 - volume) / 255); // 不响的时间
  }
}
```

openai
```cpp

#define NOTE_C4  262
#define NOTE_G4  392
int buzzerPin = 9;
int volume = 128; // 初始默认音量

void setup() {
  pinMode(buzzerPin, OUTPUT);
  Serial.begin(9600);
}

void loop() {
  if (Serial.available() > 0) {
    int v = Serial.read();
    if (v >= 0 && v <= 255) volume = v;
  }
  playNote(NOTE_C4, 500, volume);
  playNote(NOTE_G4, 500, volume);
  delay(1000);
}



// 升级版
void playNote(int note, int duration, int volume) {
  int delayValue = 1000000 / note / 2;
  long cycles = (long)note * duration / 1000;
  for (long i = 0; i < cycles; i++) {
    digitalWrite(buzzerPin, HIGH);
    delayMicroseconds(delayValue * volume / 255);
    digitalWrite(buzzerPin, LOW);
    delayMicroseconds(delayValue * (255-volume)/255 * delayValue);
  }
}

```


google

```cpp
// 音符频率对照表（中音区）
#define NOTE_C4  262  // do
#define NOTE_D4  294  // re
#define NOTE_E4  330  // mi
#define NOTE_F4  349  // fa
#define NOTE_G4  392  // sol
#define NOTE_A4  440  // la
#define NOTE_B4  494  // si

// 高音区（高八度）
#define NOTE_C5  523  // do
// 其他高音音符...

// 低音区（低八度）
#define NOTE_C3  131  // do
// 其他低音音符...

int buzzerPin = 9;  // 蜂鸣器连接引脚
byte currentLoudness = 128; // 当前响度 (0-255), 0表示静音, 255表示最大 (对应约50%占空比)

void setup() {
  pinMode(buzzerPin, OUTPUT);
  Serial.begin(9600); // 初始化串口，用于接收TouchDesigner的数据
}

void loop() {
  // 检查是否有来自TouchDesigner的数据
  if (Serial.available() > 0) {
    currentLoudness = Serial.read(); // 读取响度值 (0-255)
    // 你可以在这里打印一下收到的值，方便调试
    // Serial.print("Received loudness: ");
    // Serial.println(currentLoudness);
  }

  // 播放简单旋律：小星星，使用当前的响度
  playNote(NOTE_C4, 500, currentLoudness);
  playNote(NOTE_C4, 500, currentLoudness);
  playNote(NOTE_G4, 500, currentLoudness);
  playNote(NOTE_G4, 500, currentLoudness);
  
  delay(1000);  // 暂停1秒
}

// 播放指定音符、持续时间和响度
// loudness: 0 (静音) - 255 (最大响度, 接近50%占空比)
void playNote(int frequency, int duration, byte loudness) {
  if (frequency <= 0 || loudness == 0) { // 如果频率无效或响度为0，则为休止
    delay(duration);
    delay(50); // 音符之间的短暂停顿
    return;
  }

  // periodMicroseconds: 一个完整波形的周期，单位微秒
  long periodMicroseconds = 1000000L / frequency; 

  // onTimeMicroseconds: 高电平持续时间
  // 将 loudness (0-255) 映射到占空比 (0% - 50%)
  // 当 loudness 为 255 时，我们希望得到接近 50% 的占空比
  // (loudness / 255.0) 得到 0-1 的比例, 再乘以 periodMicroseconds / 2 得到 0 - 50% 的高电平时间
  long onTimeMicroseconds = (long)(periodMicroseconds * (loudness / 255.0 / 2.0)); 
  // 确保 onTime 至少为 1 微秒，否则方波不成形
  if (onTimeMicroseconds < 1 && loudness > 0) onTimeMicroseconds = 1;


  long offTimeMicroseconds = periodMicroseconds - onTimeMicroseconds;
  if (offTimeMicroseconds < 1) offTimeMicroseconds = 1; // 确保 offTime 也至少为 1 微秒

  long startTime = millis();
  while (millis() - startTime < duration) {
    digitalWrite(buzzerPin, HIGH);
    delayMicroseconds(onTimeMicroseconds);
    digitalWrite(buzzerPin, LOW);
    delayMicroseconds(offTimeMicroseconds);
  }
  
  delay(50);  // 音符之间的短暂停顿
}

```