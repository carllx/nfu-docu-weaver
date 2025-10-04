[[Class2.4-Data, Trigger a object and return Value]]
[[Neurosky with Arduino (script)]]
[[Sense Data]]
[[Arduino 基础知识]]
[[Arduino 基础知识#信号滤波 Filter]]
[[UnityScript - (CSharp && Visual Scripting && Bolt)]]
关联相关: [[Arduino && Blender]]


参考教程:
- (补充) Up主: [傅老師MrFu](https://space.bilibili.com/211153830) -- 围绕 Bolt (Visual Scripting) 讲解C# 语言逻辑: --`|Unity3D#06-a_Bolt Introduction and Installation` [bilibili](https://www.bilibili.com/video/BV19A411G7FP?p=1&t=2)
- Up主: [chutianbo](https://space.bilibili.com/43644141/channel/series), C# 基础 `|2022 C# Unity 游戏开发内功训练` [bilibili](https://space.bilibili.com/43644141/channel/collectiondetail?sid=271513)

脚本结构

"Substance, its attributes, and modes"
>荷兰哲学家 [[Baruch Spinoza]] What is Object? 
>"你要么是Spinozist 主义者,要么就不是哲学家."


## Practice: Serial Communication between `Arduino` and `Unity`
### Csharp

```C#
using UnityEngine;
using System.Collections;
using System.IO.Ports; // --`|Using .NET 4.x in Unity | Microsoft Docs` [microsoft](https://docs.microsoft.com/en-us/visualstudio/gamedev/unity/unity-scripting-upgrade#enabling-the-net-4x-scripting-runtime-in-unity)


public class TestConnection: MonoBehaviour
{
    SerialPort data_stream = new SerialPort("COM7", 19200); // Arduino is connected to COM7, with 19200 baud rate
    public string receivedstring;
    public GameObject test_data;
    public Rigidbody rb;
    public float sensitivity = 0.01f;
    public string[] datas;

    void Start(){

        data_stream.Open(); //Initiate the Serial stream
    }

    void Update(){
        receivedstring = data_stream.ReadLine() ;

        string[] datas = receivedstring.Split(','); //(split) the data between','
        rb.AddForce(0, 0, float.Parse(datas[0])* sensitivity * Time.deltaTime, ForceMode.VelocityChange);
        
        transform.Rotate(0, float.Parse(datas[2]), 0);
    }
}


// rb.AddForce(float.Parse(datas[1])* sensitivity * Time.deltaTime, 0, 0, ForceMode.VelocityChange);
```

教程参考:
--2020 `| How to Connect Arduino to Unity? #1 Serial Communication between Arduino and Unity.` [youtube](https://www.youtube.com/watch?v=5ElKFY3N1zs?t=230)
--2012  `| Basic Arduino to Unity tutorial` [youtube](https://www.youtube.com/watch?v=of_oLAvWfSI&t=5s?t=832)
Up主: [chutianbo](https://space.bilibili.com/43644141/channel/series), C# `|2022 C# Unity 游戏开发内功训练` [bilibili](https://space.bilibili.com/43644141/channel/collectiondetail?sid=271513)



### Package 插件 
Uduino, CNY = 1.0  [taobao](https://item.taobao.com/item.htm?spm=a230r.1.14.16.853f6a2ewPLz6g&id=665519242377&ns=1&abbucket=6&mt=) `|Uduino - Arduino communication, simple, fast and stable | Input Management | Unity Asset Store` [unity](https://assetstore.unity.com/packages/tools/input-management/uduino-arduino-communication-simple-fast-and-stable-78402); 
使用示范:`| Connect Arduino to Unity in less than 1 minute - Uduino` [youtube](https://www.youtube.com/watch?v=idOuEfCqATQ?t=34)[youtube playlist](https://www.youtube.com/playlist?list=PLt-5n3K_vUZeiJ1U5RBgEIBroh8imzu1E);--`|Uduino -  Arduino 驱动unity中的slider` [youtube](https://www.youtube.com/watch?v=jOSL6fjugGs?t=286)[youtube playlist](https://www.youtube.com/playlist?list=PLt-5n3K_vUZeiJ1U5RBgEIBroh8imzu1E)

Ardity, `|How to integrate Arduino with Unity – hardware work with software – Code To Create` [codetocreate](https://www.codetocreate.com/2020/02/06/how-to-integrate-arduino-with-unity-hardware-work-with-software/) 使用示范  [youtube](https://www.youtube.com/watch?v=SD3iUnLNjY0?t=373)[youtube playlist](https://www.youtube.com/playlist?list=PLBx0W_0xXmmQYOMjCa_baErUdmQrnt-Pe)



问题:
- [ ] [Rigidbody.AddForce](https://docs.unity3d.com/ScriptReference/Rigidbody.AddForce.html) 的4个[ForceMode](https://docs.unity3d.com/ScriptReference/ForceMode.html) 


目前方案:降低BaudRate 到9600. 使用map 重新映射数据 
- [x] unity SerialPort 读取 Arduino信号延迟问题--`|Long lag in serial communication with Arduino - Unity Answers` [unity](https://answers.unity.com/questions/466445/long-lag-in-serial-communication-with-arduino.html) 

引用 system.IO.Ports 库, 需要在 Unity Project settings 切换 Net.Framework (Net.Framework 2.0 2.1 不行)
![](https://i.imgur.com/dp6pC38.png)
error CS0234: The tvpe or namespace name "Ports' does not exist in the namespace "Svstem.IO'


--`|android - Package Name has not been set up correctly` [stackoverflow](https://stackoverflow.com/questions/48084515/package-name-has-not-been-set-up-correctly)
输入com.android.game