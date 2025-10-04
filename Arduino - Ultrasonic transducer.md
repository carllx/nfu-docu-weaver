## Ultrasonic transducer

```C
// 定义常量和全局变量
const int buzzer = 8;     // 蜂鸣器连接到数字引脚 8
const int trig_pin = 9;   // 超声波传感器的 trig 引脚连接到数字引脚 9
const int echo_pin = 10;  // 超声波传感器的 echo 引脚连接到数字引脚 10
float timing = 0.0;       // 用于存储超声波脉冲的持续时间 (微秒)
float distance = 0.0;     // 用于存储计算出的距离 (厘米)

void setup()
{
  // 初始化引脚模式
  pinMode(echo_pin, INPUT);   // 设置 echo_pin 为输入模式，接收超声波返回信号
  pinMode(trig_pin, OUTPUT);  // 设置 trig_pin 为输出模式，发送超声波脉冲
  pinMode(buzzer, OUTPUT);    // 设置 buzzer 为输出模式，控制蜂鸣器

  // 初始化引脚状态
  digitalWrite(trig_pin, LOW); // 初始时 trig_pin 输出低电平
  digitalWrite(buzzer, LOW);   // 初始时蜂鸣器关闭

  // 初始化串口通信，波特率为 9600
  Serial.begin(9600);
}

void loop()
{
  // 触发超声波传感器发送脉冲
  digitalWrite(trig_pin, LOW);  // 先将 trig_pin 设置为低电平，确保一个干净的脉冲起始
  delayMicroseconds(2);         // 短暂延迟 2 微秒

  digitalWrite(trig_pin, HIGH); // 将 trig_pin 设置为高电平，发送超声波脉冲
  delayMicroseconds(10);        // 持续 10 微秒的高电平
  digitalWrite(trig_pin, LOW);  // 将 trig_pin 恢复为低电平，结束脉冲发送

  // 读取超声波返回脉冲的持续时间
  // pulseIn 函数会等待 echo_pin 变为 HIGH，然后开始计时，直到 echo_pin 再次变为 LOW
  // 返回值为脉冲的持续时间 (微秒)
  timing = pulseIn(echo_pin, HIGH);

  // 计算距离
  // 声速约为 340 米/秒，即 0.034 厘米/微秒
  // 距离 = (脉冲时间 * 声速) / 2  (因为声音传播是往返的)
  distance = (timing * 0.034) / 2;

  // 通过串口输出距离信息
  Serial.print("Distance: ");
  Serial.print(distance);         // 打印厘米为单位的距离
  Serial.print("cm | ");
  Serial.print(distance / 2.54);  // 将厘米转换为英寸并打印
  Serial.println("in");

  // 根据距离控制蜂鸣器
  if (distance <= 50 && distance > 0) { // 如果距离小于等于 50 厘米且大于0 (有效距离)
    tone(buzzer, 500); // 蜂鸣器发出 500Hz 的声音
  } else {
    noTone(buzzer);    // 否则关闭蜂鸣器
  }

  // 延迟 100 毫秒后进行下一次测量
  delay(100);
}
```