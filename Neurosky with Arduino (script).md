
![](https://i.imgur.com/Da2Mnw8.png)

[[EEG]]

## 配置可连接Neurosky Mindware的 Bluetooth模块 (HC05 HC06) 


获取Address 待用(若干方法)
1. 匹配手机获得Address:  [youtube](https://www.youtube.com/watch?v=uKK5_U6l27E?t=28)
2. 连接Mac , 在 Terminal 输入一下代码获取.
```bash
system_profiler SPBluetoothDataType
```

Arduino 创建 Bluetooth 的配置程序: 

```C
[[include]] <SoftwareSerial.h>

SoftwareSerial Bluetooth(10,11); // RX | TX
char c=' ';
void setup() 
{
  Serial.begin(9600);
  Serial.println("ready");
  Bluetooth.begin(38400);
}

void loop() 
{
  if(Bluetooth.available())
  {
    c=Bluetooth.read();
    Serial.write(c);
  }
  if(Serial.available())
  {
    c=Serial.read();
    Bluetooth.write(c);
  }
}
// 1. 插好Arduino 的 pin10 -> RX; Pin11 -> Tx; GND; V -> 5v.

// 2. 上传改代码后, 拔掉usb, 按住Bluetooth 的AT 按钮插上usb,参考--`| Pairing NeuroSky Mindwave and Arduino (HC-05)` [youtube](https://www.youtube.com/watch?v=uKK5_U6l27E?t=137)

// 3. 打开 Serial Monitor 切换到 BaudRate 9600 , 依次输入一下代码 配置好Bluetooth. 参考--`| Pairing NeuroSky Mindwave and Arduino (HC-05)` [youtube](https://www.youtube.com/watch?v=uKK5_U6l27E?t=156)

// AT+UART=57600,0,0
// AT+ROLE=1,  Sets the HC-05 as Master rather than Slave.
// AT+PSWD="0000"
// AT+CMODE=0 , To connect the HC-05 to a specific device
// AT+BIND=00BA,55,231B41 , 检测到该BluetoothAddress: 00:BA:55:23:1B:41, Name:sichiray
// AT+IAC=9E8B33
// AT+CLASS=0
// AT+INQM=1,9,48 , Sets parameters for pairing.
```

98D3,91,FE3F44


> 注意⚠️: 我的MindWare 模块 Tx 和 Rx pin 对调才能输出数据

## 眼动识别
Detecting eye blink --参考: `|Connecting Bluetooth shield with Neurosky's mindwave mobile - Using Arduino / Project Guidance - Arduino Forum` [arduino](https://forum.arduino.cc/t/connecting-bluetooth-shield-with-neuroskys-mindwave-mobile/292808/10)

上传代码时必须吧Tx 和 Rx 拔出

```C
////////////////////////////////////////////////////////////////////////
// Arduino Bluetooth Interface with Mindwave Mobile (BT 2.1)
//
// This is example code provided by Christian Rempel and Laurin Kettner
// derives the raw data from the data stream and derives eyeblink events, it is license free.
// The Serial Monitor has to be set to a baudrate of 57600
// March 2018
////////////////////////////////////////////////////////////////////////
[[define]] BAUDRATE 57600

[[include]] <SoftwareSerial.h>
//#include <Servo.h>
//Servo servoblau;
SoftwareSerial BTSerial(10, 11); // RX | TX

boolean DEBUGOUTPUT  = false,piekDetected = false;
int Data[512] = {0};
int i = 0, n = 0;
int PiekP, PiekM;
long piekTime = 0;
int payloadLength = 0;
byte payloadData[64] = {0};
byte poorQuality = 200;

//////////////////////////
// Microprocessor Setup //
//////////////////////////
void setup()

{
  //servoblau.attach(2);  //the servo is attached to Pin2
  Serial.begin(57600);
  BTSerial.begin(BAUDRATE);           // Baudrate Headset is 57600
  pinMode(6,OUTPUT); // LED which indicates, that por quality is zero
    
}

////////////////////////////////
// Read data from Serial UART //
////////////////////////////////
byte ReadOneByte()

{
  int ByteRead;
  while (!BTSerial.available());
  ByteRead = BTSerial.read();

  return ByteRead;
}

/////////////
//MAIN LOOP//
/////////////
void loop()
{
  long Hilf = 0;
  // The Data are written in a drum with the circumference of 512 values (index i), time is running with increasing i
  // i is the index of the current time, decreasing positions starting from i in the Data array means going back in the past
  if (i >= 512)
    i = 0;

  if (ReadOneByte() == 170 && ReadOneByte() == 170)// this is the beginning of each new sequence
  {
    payloadLength = ReadOneByte();
    if (payloadLength == 4)// the raw data have a payloadlength of 4, the esense values have another payloadlength < 170 bytes
    {
      if (ReadOneByte() == 128 && ReadOneByte() == 2)// the sequence announcing raw data is 170 170 4 128 2
      {

        Hilf =  ((long)ReadOneByte() * 256 + (long)ReadOneByte());// read the most significant two bytes and form a signed number of it
        if (Hilf > 32767)
          Hilf -= (long)(65535);
        Data[i] = (int)Hilf;

        ReadOneByte(); // read the third byte, without taking notice of it
        // PiekP is a gliding sum over 50 values of Data 71 values of Data in the past, 71 values are reserved for the minus peak PiekM
        PiekP += Data[(512 + i - 71) % 512];
        PiekP -= Data[(512 + i - 50 - 71) % 512];
        // Test, if PiekP exceeds a certain value and the youngest value of PiekP is negative and it has no huge values
        if ((PiekP > 3000) && (Data[(512 + i  - 70) % 512] < 0) && (PiekP < 13000))
        { // The next eye blink detection is enabled only after a certain elapse time
          if (millis() - piekTime > 100) //time
          { PiekM = 0;
            // After detecting a positive peak PiekP the following 70 values are summed up and tested, if more negative than a certain value
            for (int j = 1; j <= 70; j++)
              PiekM +=  (int)(Data[(512 + i  + j - 70) % 512]);

            //Sometimes big negative numbers appear, which are suppressed by a limit for the negative values, if they are to huge
            if (PiekM < -3000 && PiekM > -11000) {
              
              //Serial.println("I-Blink detected!");
              // n is the counter for the number of subsequent eye blinks within a certain time difference
              if ((millis() - piekTime) < 600)n++; else n = 1;
              //Serial.print(PiekP);
              //Serial.print("; ");
              
              //Serial.println(PiekM);
              //Serial.print("   n   ");
              //Serial.println(n);
              //Serial.print("   poorQuality    ");
              //Serial.println(poorQuality);
              if(poorQuality == 0)digitalWrite(6,HIGH);else digitalWrite(6,LOW);
              piekTime = millis();//piekTime is the time at which the eye blink has been detected
              piekDetected = true;// piekDetected is set true, when an eye blink has been detected
            }// end if PiekM (eyeblink detected)
          }//end elapse time
        }// end PiekP detect
        i++;// move one raw value forward
        // The Data Array can be printed out if DEBUGOUTPUT is set true
        if (DEBUGOUTPUT && i == 512)
        {
          for (int j = 0; j < 512; j++)
          {
            Serial.print(Data[j]);
            Serial.print(";");
          }
          Serial.println("");
        }// end debug output
      }// end if 128 and 2 found
    }// end if payloadLength == 4
    else if(payloadLength < 170){// this is the access to the esense values, here poor quality, which is announced by a byte with value 2
      for (int k = 1; k < payloadLength; k++)
      if(ReadOneByte()== 2)poorQuality = ReadOneByte();
    }
  }// end if 170 170 appeared
  //print n after a certain elapse time, peakDetected has the purpose, that the printing happens only once after the last eye blink
  if((millis()-piekTime)>700 && piekDetected == true)Serial.println(n),piekDetected = false;
}// end of loop

```




## get Attention
```C
////////////////////////////////////////////////////////////////////////
// Arduino Bluetooth Interface with Mindwave
// 
// This is example code provided by NeuroSky, Inc. and is provided
// license free.
//
// This modification allows view data trough serial monitor
// Lozano Ramirez Angel Ivan
// Mexico  2.07.2021
////////////////////////////////////////////////////////////////////////

[[include]] <SoftwareSerial.h>
SoftwareSerial BT(10,11); //Rx/Tx

[[define]] LED 13
[[define]] BAUDRATE 57600
[[define]] DEBUGOUTPUT 0

// checksum variables
byte  generatedChecksum = 0;
byte  checksum = 0; 
int   payloadLength = 0;
byte  payloadData[64] = {0};
byte  poorQuality = 0;
byte  attention = 0;
byte  meditation = 0;

// system variables
long    lastReceivedPacket = 0;
boolean bigPacket = false;

//////////////////////////
// Microprocessor Setup //
//////////////////////////
void setup(){
  pinMode(LED, OUTPUT);
  BT.begin(BAUDRATE);           // Software serial port  (ATMEGA328P)
  Serial.begin(BAUDRATE);           // USB
}

////////////////////////////////
// Read data from Serial UART //
////////////////////////////////
byte ReadOneByte() {
  int ByteRead;
  while(!BT.available());
  ByteRead = BT.read();

  [[if]] DEBUGOUTPUT  
    Serial.print((char)ByteRead);   // echo the same byte out the USB serial (for debug purposes)
  [[endif]]

  return ByteRead;
}

/////////////
//MAIN LOOP//
/////////////
void loop() {
  // Look for sync bytes
  if(ReadOneByte() == 170) {
    if(ReadOneByte() == 170) {
      payloadLength = ReadOneByte();
      if(payloadLength > 169)                      //Payload length can not be greater than 169
      return;

      generatedChecksum = 0;        
      for(int i = 0; i < payloadLength; i++) {  
        payloadData[i] = ReadOneByte();            //Read payload into memory
        generatedChecksum += payloadData[i];
      }   

      checksum = ReadOneByte();                      //Read checksum byte from stream      
      generatedChecksum = 255 - generatedChecksum;   //Take one's compliment of generated checksum

        if(checksum == generatedChecksum) {    

        poorQuality = 200;
        attention = 0;
        meditation = 0;

        for(int i = 0; i < payloadLength; i++) {    // Parse the payload
          switch (payloadData[i]) {
          case 2:
            i++;            
            poorQuality = payloadData[i];
            bigPacket = true;            
            break;
          case 4:
            i++;
            attention = payloadData[i];                        
            break;
          case 5:
            i++;
            meditation = payloadData[i];
            break;
          case 0x80:
            i = i + 3;
            break;
          case 0x83:
            i = i + 25;      
            break;
          default:
            break;
          } // switch
        } // for loop

[[if]] !DEBUGOUTPUT
        // *** Add your code here ***
        if(bigPacket) {
          if(poorQuality == 0)  {
            digitalWrite(LED, HIGH);
            Serial.print("Attention: ");
            Serial.print(attention);
            Serial.print("\n");
          }
          else  {
            digitalWrite(LED, LOW);
          }
          
        }
[[endif]]        
        bigPacket = false;        
      }
      else {
        // Checksum Error
      }  // end if else for checksum
    } // end if read 0xAA byte
  } // end if read 0xAA byte
}
```





## Removed Notes
```bash
ls /dev/tty.*
```
1.  The Default Baud Rate is 115200
```bash
screen /dev/tty.[yourSerialPortName] 115200
```

python 方案 ~~Arduino~~ --`|sixtyfive/tgam1: Yet another project to make the TGAM1 module inside Mattel's MindFlex toy do useful things` [github](https://github.com/sixtyfive/tgam1)

继续....
--`|Search · mindwave bluetooth gamma arduino` [github](https://github.com/search?l=C%2B%2B&q=mindwave+bluetooth+++gamma+arduino&type=Code)


### Hack Toy EEGs
直接将线焊接到 Mindwave 不适用Bluetooth
--`|How to Hack Toy EEGs | Frontier Nerds` [frontiernerds](https://frontiernerds.com/brain-hack)
--`|kitschpatrol/Brain: Arduino library for reading Neurosky [[EEG]] brainwave data. (Tested with the MindFlex and Force Trainer toys.)` [github](https://github.com/kitschpatrol/Brain)

![](https://i.imgur.com/Da2Mnw8.png)



### Alpha Beta Gamma(Faild)
--`|Hackers in Residence - Hacking MindWave Mobile - learn.sparkfun.com` [sparkfun](https://learn.sparkfun.com/tutorials/hackers-in-residence---hacking-mindwave-mobile)
打印 Alpha Beta  Gamma --`|Hackers in Residence - Hacking MindWave Mobile - learn.sparkfun.com` [sparkfun](https://learn.sparkfun.com/tutorials/hackers-in-residence---hacking-mindwave-mobile/all)


```C
///////////////////////////////////////////////////////////////
// Arduino Bluetooth Interface with Mindwave
// Sophi Kravitz edit 11-4
// Shane Clements edit 11-5
//////////////////////////////////////////////////////////////////////// 
[[include]] <SoftwareSerial.h>     // library for software serial
SoftwareSerial mySerial(5, 6);  // RX, TX
int LED = 8;                    // yellow one
int LED1 = 7;                   //white one
int BAUDRATE = 57600;

// checksum variables
byte payloadChecksum = 0;
byte CalculatedChecksum;
byte checksum = 0;              //data type byte stores an 8-bit unsigned number, from 0 to 255
int payloadLength = 0;
byte payloadData[64] = {0};
byte poorQuality = 0;
byte attention = 0;
byte meditation = 0;

// system variables
long lastReceivedPacket = 0;
boolean bigPacket = false;
boolean brainwave = false;
void setup() {
  pinMode(LED, OUTPUT);
  pinMode(LED1, OUTPUT);
  digitalWrite(LED, HIGH);   // hello sequence
  delay(100);
  digitalWrite(LED, LOW);
  delay(100);
  Serial.begin(57600);       // Bluetooth
  delay(500);
  mySerial.begin(4800);      // software serial
  delay(500);
  mySerial.print("Communicating... ");
  mySerial.println();
}
byte ReadOneByte() {
   int ByteRead;
  // Wait until there is data
  while(!Serial.available());
  //Get the number of bytes (characters) available for reading from the serial port.
  //This is data that's already arrived and stored in the serial receive buffer (which holds 64 bytes)
  ByteRead = Serial.read();
  return ByteRead; // read incoming serial data
  }

unsigned int delta_wave = 0;
unsigned int theta_wave = 0;
unsigned int low_alpha_wave = 0;
unsigned int high_alpha_wave = 0;
unsigned int low_beta_wave = 0;
unsigned int high_beta_wave = 0;
unsigned int low_gamma_wave = 0;
unsigned int mid_gamma_wave = 0;

void read_waves(int i) {
  delta_wave = read_3byte_int(i);
  i+=3;
  theta_wave = read_3byte_int(i);
  i+=3;
  low_alpha_wave = read_3byte_int(i);
  i+=3;
  high_alpha_wave = read_3byte_int(i);
  i+=3;
  low_beta_wave = read_3byte_int(i);
  i+=3;
  high_beta_wave = read_3byte_int(i);
  i+=3;
  low_gamma_wave = read_3byte_int(i);
  i+=3;
  mid_gamma_wave = read_3byte_int(i);
}

int read_3byte_int(int i) {
  return ((payloadData[i] << 16) + (payloadData[i+1] << 8) + payloadData[i+2]);
}

void loop() {
  // Look for sync bytes
  // Byte order: 0xAA, 0xAA, payloadLength, payloadData,
  // Checksum (sum all the bytes of payload, take lowest 8 bits, then bit inverse on lowest
if(ReadOneByte() == 0xAA) {
if(ReadOneByte() == 0xAA) {
payloadLength = ReadOneByte();
if(payloadLength > 169) //Payload length can not be greater than 169
return;
payloadChecksum = 0;
      for(int i = 0; i < payloadLength; i++) {      //loop until payload length is complete
        payloadData[i] = ReadOneByte();             //Read payload
        payloadChecksum += payloadData[i];
      }
      checksum = ReadOneByte();                     //Read checksum byte from stream
      payloadChecksum = 255 - payloadChecksum;      //Take one’s compliment of generated checksum
      if(checksum == payloadChecksum) {
        poorQuality = 200;
        attention = 0;
        meditation = 0;
 }
     brainwave = false;
     for(int i = 0; i < payloadLength; i++) { // Parse the payload
          switch (payloadData[i]) {
          case 02:
            i++;
            poorQuality = payloadData[i];
            bigPacket = true;
            break;
          case 04:
            i++;
            attention = payloadData[i];
            break;
          case 05:
            i++;
            meditation = payloadData[i];
            break;
          case 0x80:
            i = i + 3;
            break;
          case 0x83:                         // ASIC EEG POWER INT
            i++;
            brainwave = true;
            byte vlen = payloadData[i];
            //mySerial.print(vlen, DEC);
            //mySerial.println();
            read_waves(i+1);
            i += vlen; // i = i + vlen
            break;
          }                                 // switch
        }                                   // for loop

        if(bigPacket) {
          if(poorQuality == 0){
          }
          else{                             // do nothing
           }
         }


            if(brainwave && attention > 0 && attention < 100) {
            mySerial.print("Attention value is: ");
            mySerial.print(attention, DEC);
            mySerial.println();
            mySerial.print("Delta value is: ");
            mySerial.print(delta_wave, DEC);
            mySerial.println();
            mySerial.print("Theta value is: ");
            mySerial.print(theta_wave, DEC);
      mySerial.println();
            mySerial.print("Low Alpha value is: ");
            mySerial.print(low_alpha_wave, DEC);
            mySerial.println();
            mySerial.print("High Alpha value is: ");
            mySerial.print(high_alpha_wave, DEC);
            mySerial.println();            
            mySerial.print("Alertness value1 is: ");
            mySerial.print(low_beta_wave, DEC);
            mySerial.println();
            mySerial.print("Alertness value2 is: ");
            mySerial.print(high_beta_wave, DEC);
            mySerial.println();           
            mySerial.print(low_gamma_wave, DEC);
            mySerial.println();
            mySerial.print(mid_gamma_wave, DEC);
            mySerial.println();
         }

          if(attention > 40){
            digitalWrite(LED1, HIGH);
          }
          else
            digitalWrite(LED1, LOW);
        } 
        }
      }

```

