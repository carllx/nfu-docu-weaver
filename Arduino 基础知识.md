安装 Arduino IDE : 下载地址: [Arduino 官方下载](https://www.arduino.cc/en/software)

### 传感器引脚通常三个引脚:
-   pin AO(读取数据)
-   pin GN( - 极)
-   pin V5 或 V3.3( + 极)

![https://miro.medium.com/max/1296/1*jiXvn9_4S3IF0Ww9DFDeKw.jpeg](https://miro.medium.com/max/1296/1*jiXvn9_4S3IF0Ww9DFDeKw.jpeg)


### Baud (波特率)
指定信号采集的频率.  -- [quora](https://www.quora.com/What-is-the-baud-rate-and-why-does-Arduino-have-a-baud-rate-of-9-600/answer/Lokesh-Dudigollar)

### Breadboard
![](https://i.imgur.com/bekSRLK.jpg)


### Circuits Design
	Tinkercad
--示范 `|Circuit design Amazing Trug-Jaagub | Tinkercad` [tinkercad](https://www.tinkercad.com/things/1NjjEudSjRn-amazing-trug-jaagub/editel?tenant=circuits)
![](https://i.imgur.com/Aft1TgK.png)



### Resistor电阻
--`|LED Calculator - Single 或 Array LED 阵列的限流电阻计算器` [ledcalculator](https://ledcalculator.net/#p=3&v=1.8&c=20&n=1&o=w)
![](https://i.imgur.com/3dDDOW3.jpg)
Tinkercad 识别

![](https://i.imgur.com/fExCRPs.png)


### 实验1: Sound Sensor
### 信号滤波 Filter
信号 MegunoLink 过滤
参考--`|消除噪音的3种简单滤波技术| Arduino博客` [arduino](https://blog.arduino.cc/2016/09/05/3-simple-filtering-techniques-to-eliminate-noise/);--`|Exponential filter for smoothing noisy data - Reference - MegunoLink` [megunolink](https://www.megunolink.com/documentation/arduino-libraries/exponential-filter/)
安装: --`| Installing the MegunoLink Arduino Library` [youtube](https://www.youtube.com/watch?v=007ql7YbFUs?t=34)[youtube playlist](https://www.youtube.com/playlist?list=PLRo0IoJLyH9WN7xvCq0sPubA13FvQqspB)


![](https://i.imgur.com/fWTVfgI.png)

Sound sensor 使用 MegunoLink 案例
```C
[[include]] "MegunoLink.h"
[[include]] "Filter.h"

long FilterWeight = 15;// 默认值是5
ExponentialFilter<long> ADCFilter(FilterWeight, 0);

// Arduino IDE 中的代码
// INPUT/OUTPUT 注意主语是 Arduino 不是 Sensor
void setup() {
  // put your setup code here, to run once:
  pinMode(A3, INPUT); // A0 口接收数据
  // pinMode(8,OUTPUT); // (试验2)输出电流到 8 号口, 驱动其他设备
  Serial.begin(9600); 
//  Serial.begin(115200); 
}

void loop() {
  //  delay(100); // 等待100 毫秒, 1000为1秒
  int a = analogRead(A3); // 读取A0 的数值
  
  ADCFilter.Filter(a);
  a = ADCFilter.Current();
  // 将270~400 重新映射到 0~10之间 
  int res = map(a,270,400,0,10);
  

   Serial.println(res);
}
```