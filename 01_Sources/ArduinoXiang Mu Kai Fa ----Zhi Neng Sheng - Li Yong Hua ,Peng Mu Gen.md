![cover.jpeg](https://i.imgur.com/p19Jg6D.jpeg)

[]{#titlepage.xhtml}

```{=html}
<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" version="1.1" width="100%" height="100%" viewbox="0 0 300 400" preserveaspectratio="none">
```
`<image width="300" height="400" xlink:href="cover.jpeg">`{=html}`</image>`{=html}
```{=html}
</svg>
```

[]{#chapter-1.xhtml}

::: {.calibre1}
![cover-o.jpg](https://i.imgur.com/5MDoot8.jpeg){.calibre2}
:::

::: {.h5_mainbody_bg}
#### 版权信息 {.copyright-title}

书名：Arduino项目开发------智能生活\
作者：李永华 彭木根\
出版社：清华大学出版社\
出版时间：2019-09-01\
ISBN：9787302530572\

版权所有·侵权必究
:::

[]{#chapter-2.xhtml}

::: {.calibre1}
# 内容简介 {.tpl-231-title}

::: {.tpl-231-box-middle}
:::

本书系统论述了Arduino开源硬件的架构、原理和开发方法，并具体阐述了19个完整的项目设计案例。全书共分20章，内容涉及Arduino项目设计基础、四旋翼飞行器项目设计、宇宙飞船大战小蜜蜂项目设计等。

在编排方式上，全书侧重对创新产品的项目设计过程进行介绍。分别从需求分析、设计与实现等多个角度论述硬件电路、软件设计、传感器和功能模块等，并剖析产品的功能、使用、电路连接和程序代码。为便于读者高效学习，快速掌握Arduino开发方法，本书配套提供项目设计的硬件电路图、程序代码、实现过程中出现的问题及解决方法，可供读者举一反三，二次开发。

本书既可作为高校电子信息类专业"开源硬件设计""电子系统设计""创新创业"等课程的教材，也可作为创客及智能硬件爱好者的参考用书，还可作为从事物联网、创新开发和设计专业人员的技术参考书。
:::

[]{#chapter-3.xhtml}

::: {.calibre1}
# 作者简介 {.tpl-231-title}

::: {.tpl-231-box-middle}
:::

**李永华** 现执教于北京邮电大学，拥有超过10年的嵌入式开发经验，目前致力于物联网、云计算与大数据的研究工作。在教学中善于以兴趣为导向，激发学生的创造性；以素质为基础，提高自身教学水平；以科研为手段，促进教学理念的转变。在研发及教学实践中指导学生实现300个创新案例，参与了30余项国家级与企业横向课题的研究工作，在国内外学术期刊及会议发表论文60余篇，申请专利40余项，出版教材10余部。
:::

[]{#chapter-4.xhtml}

::: {.calibre1}
# 前言 [ PREFACE ]{.content-word-small} {.tpl-231-title}

::: {.tpl-231-box-middle}
:::

物联网、智能硬件和大数据技术给社会带来了巨大的冲击，个性化、定制化和智能化的硬件设备成为未来的发展趋势。"中国制造2025"计划、德国的"工业4.0"及美国的"工业互联网"都是将人、数据和机器连接起来，其本质是工业的深度信息化，为未来智能社会的发展提供制造技术基础。

在"大众创业、万众创新"的时代背景下，人才培养方法和模式也应该满足当前的时代需求。编者依据当今信息社会的发展趋势，结合Arduino开源硬件的发展及智能硬件的发展要求，采取激励创新的工程教育方法，培养适应未来"工业4.0"发展的人才。因此，本书试图探索基于创新工程教育的基本方法，并将其提炼为适合我国国情、具有自身特色的创新实践教材，对实际教学中应用智能硬件的创新工程教学经验进行总结，包括具体的创新方法和开发案例，希望对教育教学及工业界有所帮助，起到抛砖引玉的作用。

本书的内容和素材主要来源于编者所在学校近几年承担的教育部和北京市的教育、教学改革项目和成果，也是北京邮电大学信息工程专业的同学们创新产品的设计成果。书中系统地介绍了如何利用Arduino平台进行产品开发，包括相关的设计、实现与产品应用，主要内容包括Arduino设计基础及智能生活案例。

本书的编写也得到了教育部电子信息类专业教学指导委员会、信息工程专业国家第一类、第二类特色专业建设项目、教育部CDIO工程教育模式研究与实践项目、教育部本科教学工程项目、信息工程专业北京市特色专业建设、北京市教育教学改革项目、北京邮电大学教育教学改革项目（2019ZY01）的大力支持。在此一并表示感谢！

由于编者水平有限，书中不妥之处在所难免，衷心希望广大读者多提宝贵意见及具体的整改措施，以便编者进一步修改和完善。

李永华\
于北京邮电大学\
2019年8月
:::

[]{#chapter-5.xhtml}

::: {.h5_mainbody_bg1}
::: {.h5_rule_hv}
# 第1章 {.tpl-133-text-1-num}

::: {.tpl-133-div-line}
# Arduino项目设计基础 {.tpl-133-title-1-center}
:::

::: {.tpl-133-pic-center}
![CmQUOV7V1G-EPMjIAAAAALGIiMg413130245.png](https://i.imgur.com/xnHdJGA.jpeg){.tpl-133-pic-img-h}
:::
:::
:::

[]{#chapter-6.xhtml}

::: {.calibre1}
## 1.1　开源硬件简介 {.tpl-185-title}

::: {.tpl-185-box-cuxian}
:::

::: {.tpl-185-box-middle}
:::

电子电路是人类社会发展的重要成果，在早期的硬件设计和实现上都是公开的，包括电子设备、电器设备、计算机设备以及各种外围设备的设计原理图，大家认为公开是十分正常的事情，所以，早期公开的设计图并不称为开源。1960年前后，很多公司根据自身利益选择了闭源，由此也就出现了贸易壁垒、技术壁垒、专利版权等问题，不同公司之间也出现了互相起诉的情形。例如，国内外的IT公司之间由于知识产权而诉诸法律，屡见不鲜。虽然这种做法在一定程度上有利于公司自身的利益，但是，不利于小公司或者个体创新者的发展。特别是，在互联网进入Web 2.0的个性化时代背景下，更加需要开放、免费和开源的开发系统。

因此，在"大众创业，万众创新"的时代背景下，Web 2.0时代的开发者思考硬件是否可以重新进行开源。电子爱好者、发烧友及广大的创客一直致力于开源的研究，推动开源的发展，最初从很小的物品发展到现在，已经有3D打印机、开源的单片机系统等。就是说，开源硬件是指与开源软件采取相同的方式，设计各种电子硬件的总称。也就是说，开源硬件是考虑对软件以外的领域进行开源，是开源文化的一部分。开源硬件是可以自由传播硬件设计的各种详细信息，例如，电路图、材料清单和开发板布局数据，通常使用开源软件来驱动开源的硬件系统。本质上，共享逻辑设计、可编程的逻辑元件重构也是一种开源硬件，通过硬件描述语言代码实现电路图共享。硬件描述语言通常用于芯片系统，也用于可编程逻辑阵列或直接用在专用集成电路中，在当时也称之为硬件描述语言模块或IP核。

众所周知，Android就是开源软件之一。开源硬件和开源软件类似，通过开源软件可以更好地理解开源硬件，就是在之前已有硬件的基础之上进行二次开发。二者也有差别，体现在复制成本上，开源软件的成本几乎是零，而开源硬件的复制成本较高。另外，开源硬件延伸着开源软件代码的定义，包括软件、电路原理图、材料清单、设计图等都使用开源许可协议，自由使用分享，完全以开源的方式去授权。避免了以往DIY分享的授权问题。同时，开源硬件把开源软件常用的GPL、CC等协议规范带到硬件分享领域，为开源硬件的发展提供了标准。
:::

[]{#chapter-7.xhtml}

::: {.calibre1}
## 1.2　Arduino开源硬件 {.tpl-185-title}

::: {.tpl-185-box-cuxian}
:::

::: {.tpl-185-box-middle}
:::

本节主要介绍Arduino开源硬件的各种开发板和扩展板的使用方法、Arduino开发板的特性以及Arduino开源硬件的总体情况，以便更好地应用Arduino开源硬件进行开发创作。

### 1.2.1　Arduino开发板 {#chapter-7.xhtml#AUTO_ID_1 .text-title}

Arduino开发板是基于开放原始代码简化的I/O平台，并且使用类似Java、C/C++语言的开发环境。可以快速使用Arduino语言与Flash或Processing软件，完成各种创新作品。Arduino开发板可以使用各种电子元件，如传感器、显示设备、通信设备、控制设备或其他可用设备。

Arduino开发板也可以独立使用，成为与其他软件沟通的平台，例如，Flash、Processing、Max/MSP、VVVV或其他互动软件。Arduino开发板的种类很多，包括Arduino UNO、YUN、DUE、Leonardo、Tre、Zero、Micro、Esplora、MEGA、MINI、NANO、Fio、Pro以及LilyPad Arduino等。随着开源硬件的发展，将会出现更多的开源产品，下面介绍几种典型的Arduino开发板。

Arduino UNO开发板是Arduino USB接口系列的常用版本，是Arduino平台的参考标准模板，如图1-1所示。Arduino UNO开发板的处理器核心是ATmega328，具有14个数字输入/输出引脚（其中6个可作为PWM输出）、6个模拟输入引脚、1个16MHz晶体振荡器、1个USB接口、1个电源插座、1个ICSP插头和1个复位按钮。

如图1-2所示，Arduino YUN是一款基于ATmega32U4和Atheros AR9331的单片机开发板。Atheros AR9331可以运行基于Linux和OpenWRT的操作系统Linino。这款单片机开发板具有内置的Ethernet、WiFi、1个USB接口、1个Micro插槽、20个数字输入/输出引脚（其中7个可以用于PWM，12个可以用于ADC）、1个Micro USB接口、1个ICSP插头、3个复位开关。

::: {.zhangyue-c}
![CmQUOF7V1GuEG5fvAAAAAO7DftU588990777.jpg](https://i.imgur.com/pakMeYj.jpeg){.zhangyue-img}

图1-1　Arduino UNO开发板
:::

::: {.zhangyue-c}
![CmQUOV7V1GyEcog2AAAAAFa5XKc460811786.jpg](https://i.imgur.com/Llc7u4S.jpeg){.zhangyue-img}

图1-2　Arduino YUN开发板
:::

如图1-3所示，Arduino DUE是一块基于Atmel SAM3X8E CPU的开发板。它是第一块基于32位ARM核心的Arduino开发板，有54个数字输入/输出引脚（其中12个可用于PWM输出）、12个模拟输入引脚、4个UART硬件串口、84MHz的时钟频率、1个USB OTG接口、2个DAC（模数转换）、2个TWI、1个电源插座、1个SPI接口、1个JTAG接口、1个复位按键和1个擦写按键。

如图1-4所示，为Arduino MFGA 2560开发板也是采用USB接口的核心开发板，它最大的特点就是具有多达54个数字输入/输出引脚，特别适合需要大量输入/输出引脚的设计。Arduino MEGA 2560的处理器核心是ATmega2560，具有54个数字输入/输出引脚（其中16个可作为PWM输出）、16个模拟输入引脚、4个UART接口、1个16MHz晶体振荡器、1个USB接口、1个电源插座、1个ICSP插头和1个复位按钮。Arduino MRGA 2560开发板也能兼容为Arduino UNO设计的扩展板。目前，Arduino MEGA 2560开发板已经发布到第3版，与前两版相比有以下新的特点：

::: {.zhangyue-c}
![CmQUOV7V1G6EGDE8AAAAAKZ6oIc723928054.jpg](https://i.imgur.com/DmTeTKL.jpeg){.zhangyue-img}

图1-3　Arduino DUE开发板
:::

::: {.zhangyue-c}
![CmQUOF7V1G6EPEl7AAAAAEUW60M555163864.jpg](https://i.imgur.com/OUDScar.jpeg){.zhangyue-img}

图1-4　Arduino MEGA 2560开发板
:::

（1）在AREF处增加了两个引脚SDA和SCL，支持I ^2^ C接口；增加IOREF和1个预留引脚，以便将来扩展板能够兼容5V和3.3V核心板，改进了复位电路设计；USB接口芯片由ATmega16U2替代了ATmega8U2。

（2）Arduino MEGA 2560开发板可以通过三种方式供电：外部直流电源通过电源插座供电，电池连接电源连接器的GND和VIN引脚供电，USB接口直接供电。而且，它能自动选择供电方式。

电源引脚说明如下：

（1）VIN：当外部直流电源接入电源插座时，可以通过VIN向外部供电，也可以通过此引脚向Arduino MEGA 2560开发板直接供电；VIN供电时将忽略从USB或者其他引脚接入的电源。

（2）5V：通过稳压器或USB的5V电压，为Arduino MEGA 2560开发板上的5V芯片供电。

（3）3.3V：通过稳压器产生的3.3V电压，最大驱动电流为50mA。

（4）GND：接地引脚。

如图1-5所示，Arduino Leonardo是一款基于ATmega32u4的开发板。它有20个数字输入/输出引脚（其中7个可用于PWM输出、12个可用于模拟输入）、1个16MHz晶体振荡器、1个Micro USB连接、1个电源插座、1个ICSP头和1个复位按钮。具有支持微控制器所需的一切功能，只需通过USB电缆将其连至计算机，或者通过电源适配器、电池为其供电即可使用。

Leonardo与先前的所有开发板都不同，ATmega32u4具有内置式USB通信，从而无须二级处理器。这样，除了虚拟（CDC）串行/通信端口，Leonardo还可以充当计算机的鼠标和键盘，它对开发板的性能也会产生影响。

::: {.zhangyue-c}
![CmQUOF7V1G6EJZrCAAAAAK8oZns745269331.jpg](https://i.imgur.com/zBQsv5m.jpeg){.zhangyue-img}

图1-5　Arduino Leonardo开发板
:::

如图1-6所示，Arduino Ethernet是一款基于ATmega328的开发板。它有14个数字输入/输出引脚、6个模拟输入引脚、1个16MHz晶体振荡器、1个RJ-45连接、1个电源插座、1个ICSP头和1个复位按钮。引脚10、11、12和13只能用于连接以太网模块，不可作为他用，可用引脚只有9个，其中4个可用于PWM输出。

::: {.zhangyue-c}
![CmQUOF7V1G6EYKDxAAAAAC5NbDM595698498.jpg](https://i.imgur.com/YEx8pXK.jpeg){.zhangyue-img}

图1-6　Arduino Ethernet开发板
:::

Arduino Ethernet没有板载USB转串口驱动器芯片，但是有1个WIZnet以太网接口。该接口与以太扩展板相同。板载microSD读卡器可用于存储文件，能够通过SD库进行访问。引脚10留为WIZnet接口，SD卡的SS在引脚4上。引脚6串行编程头与USB串口适配器兼容，与FTDI USB电缆、Sparkfun和Adafruit FTDI式基本USB转串口分线板也兼容。它支持自动复位，从而无须按下开发板上的复位按钮即可上传程序代码。当插入USB转串口适配器时，Arduino Ethernet由适配器供电。

如图1-7所示，Arduino Robot是一款有轮子的Arduino开发板。Arduino Robot有控制板和电机板，每个开发板有1个处理器，共2个处理器。电机板控制电机，控制板读取传感器的数值并决定如何操作。每个开发板都是完整的Arduino开发板，用Arduino IDE进行编程。直流电机板和控制板都是基于ATmega32u4的开发板。Arduino Robot将它的一些引脚映射到板载的传感器和制动器上。

Arduino Robot编程的步骤与Arduino Leonardo类似，2个处理器都有内置式USB通信，无须二级处理器，可以充当计算机的虚拟（CDC）串行/通信端口。Arduino Robot有一系列预焊接连接器，所有连接器都标注在开发板上，通过Arduino Robot库映射到指定的端口上，从而使用标准Arduino函数，在5V电压下，每个引脚都可以提供或接受最高40mA的电流。

::: {.zhangyue-c}
![CmQUOV7V1G-Eb_UsAAAAABA0TQA157428392.jpg](https://i.imgur.com/6WqR46F.jpeg){.zhangyue-img}

图1-7　Arduino Robot开发板
:::

如图1-8所示，Arduino NANO是一款小巧全面且基于ATmega328的开发板，与Arduino Duemilanove的功能类似，但封装不同，没有直流电源插座且采用Mini-B USB电缆。Arduino NANO开发板上的14个数字引脚都可用于输入或输出，利用pinMode（）、digitalWrite（）和digitalRead（）函数可以对它们操作。工作电压为5V，每个引脚都可以提供或接受最高40mA的电流，都有1个20\~50kΩ的内部上拉电阻器（默认情况下断开）。Arduino NANO开发板有8个模拟输入，每个模拟输入都提供10位的分辨率（即1024个不同的数值）。默认情况下，它们的电压为0\~5V，可以利用analogReference（）函数改变其电压范围的上限值，模拟引脚6和7不能作为数字引脚。

::: {.zhangyue-c}
![CmQUOF7V1G-EZOj0AAAAAHxolmk021957546.jpg](https://i.imgur.com/mWlzpFV.jpeg){.zhangyue-img}

图1-8　Arduino NANO开发板
:::

### 1.2.2　Arduino扩展板 {#chapter-7.xhtml#AUTO_ID_2 .text-title}

在Arduino开源硬件系列中，除了主要开发板之外，还有与之配合使用的各种扩展板，可以插到开发板上增加额外的功能。选择适合的扩展板，可以增强系统开发的功能，常见的扩展板有Arduino Ethernet Shield、Arduino GSM Shield、Arduino Motor Shield、Arduino 9 Axes Motion Shield等。

Arduino Ethernet Shield（以太网盾）扩展板如图1-9所示，有1个标准的有线RJ-45连接，具有集成式线路变压器和以太网供电功能，可将Arduino开发板连接到互联网。基于WIZnet W5500以太网芯片，提供网络（IP）堆栈，支持TCP和UDP协议。可以同时支持8个套接字连接，使用以太网库写入程序代码。

::: {.zhangyue-c}
![CmQUOV7V1F2EBk-iAAAAAMPh1Po406839092.jpg](https://i.imgur.com/rfGPKSL.jpeg){.zhangyue-img}

图1-9　Arduino Ethernet Shield扩展板
:::

以太网盾板利用贯穿盾板的长绕线排与Arduino开发板连接，保持引脚布局完整无缺，以便其他盾板可以堆叠其上。它有1个板载micro-SD卡槽，可用于存储文件，与Arduino UNO和MEGA兼容，可通过SD库访问板载micro-SD读卡器。以太网盾板带有1个供电（PoE）模块，可从传统的5类电缆获取电力。

Arduino GSM Shield扩展板如图1-10所示，为了连接蜂窝网络，扩展板需要一张由网络运营商提供的SIM卡。它通过移动通信网将Arduino开发板连接到互联网，可拨打/接听语音电话和发送/接收SMS信息。

::: {.zhangyue-c}
![CmQUOV7V1F2EK7-RAAAAABzg8Os862096984.jpg](https://i.imgur.com/5zWLeQn.jpeg){.zhangyue-img}

图1-10　Arduino GSM Shield扩展板
:::

GSM Shield采用Quectel的无线调制解调器M10，利用AT命令与开发板通信。GSM Shield利用数字引脚2、3与M10进行软件串行通信，引脚2连接M10的TX引脚，引脚3连接RX引脚，调制解调器的PWRKEY连接引脚7。

M10是一款四频GSM/GPRS调制解调器，工作频率为：GSM850MHz、GSM900MHz、DCS1800MHz和PCS1900MHz。它通过GPRS连接支持TCP/UDP和HTTP。其中GPRS数据下行链路和上行链路的最大传输速度为85.6 kb/s。

Arduino Motor Shield扩展板如图1-11所示，用于驱动电感负载（例如，继电器、螺线管、直流和步进电机）的双全桥驱动器L298，利用Arduino Motor Shield可以驱动2个直流电机，独立控制每个电机的速度和方向。因此，它有2条独立的通道，即A和B，每条通道使用4个开发板引脚来驱动或感应电机，Arduino Motor Shield上使用的引脚共8个。不仅可以单独驱动2个直流电机，也可以将它们合并起来驱动1个双极步进电机。

::: {.zhangyue-c}
![CmQUOF7V1F6ELBx4AAAAAIoTfS0747685612.jpg](https://i.imgur.com/uyMBdug.jpeg){.zhangyue-img}

图1-11　Arduino Motor Shield扩展板
:::

::: {.zhangyue-c}
![CmQUOV7V1F6ECVa0AAAAANQKjXM977766330.jpg](https://i.imgur.com/CA7nJEr.jpeg){.zhangyue-img}

图1-12　Arduino 9 Axes Motion Shield扩展板
:::

Arduino 9 Axes Motion Shield扩展板如图1-12所示，它采用德国博世传感器技术有限公司推出的BNO055绝对方向传感器。这是一个使用系统级封装，集成三轴14位加速计、三轴16位陀螺仪、三轴地磁传感器，并运行BSX3.0 FusionLib软件的32位微控制器。BNO055在三个垂直的轴上具有三维加速度、角速度和磁场强度数据。

另外，它还提供传感器融合信号，如四元数、欧拉角、旋转矢量、线性加速、重力矢量。结合智能中断引擎，可以基于慢动作或误动作识别、任何动作（斜率）检测、高g检测等项触发中断。

Arduino 9 Axes Motion Shield扩展板兼容UNO、YNO、Leonardo、Ethernet、MEGA和DUE开发板。在使用Arduino 9 Axes Motion Shield时，要根据使用的开发板将中断桥和重置桥焊接在正确的位置。
:::

[]{#chapter-8.xhtml}

::: {.calibre1}
## 1.3　Arduino软件开发平台 {.tpl-185-title}

::: {.tpl-185-box-cuxian}
:::

::: {.tpl-185-box-middle}
:::

本节主要介绍Arduino开发环境的特点及使用方法，包括Arduino开发环境的安装，以及简单的硬件系统与软件调试方法。

### 1.3.1　Arduino平台特点 {#chapter-8.xhtml#AUTO_ID_3 .text-title}

作为目前最流行的开源硬件开发平台，其优点包括以下三方面：

（1）开放源代码的电路图设计和程序开发界面，可免费下载，根据需求自己修改；Arduino可使用ICSP线上烧录器，将Bootloader烧入新的IC芯片；也可依据官方电路图，简化Arduino模组，完成独立运作的微处理控制。

（2）能够与传感器或各式各样的电子元件连接（如红外线、超音波、热敏电阻、光敏电阻、伺服电机等）；支持多样的互动程序，如Flash、Max/Msp、VVVV、PD、C、Processing等；使用低价格的微处理控制器；USB接口无须外接电源；可提供9V直流电源输入以及多样化的Arduino扩展模块。

（3）在应用方面，通过各种各样的传感器来感知环境、控制灯光、直流电机和其他的装置来反馈并影响环境；可以方便地连接以太网扩展模块进行网络传输，使用蓝牙传输、WiFi传输、无线摄像头控制等多种应用。

### 1.3.2　Arduino IDE的安装 {#chapter-8.xhtml#AUTO_ID_4 .text-title}

::: {.zhangyue-c}
![CmQUOV7V1F6EcXI8AAAAALckC6E118708804.jpg](https://i.imgur.com/TOv0ria.jpeg){.zhangyue-img1}

图1-13　Arduino下载界面
:::

Arduino IDE是Arduino开放源代码的集成开发环境，它的界面友好，语法简单且方便下载程序，这使得Arduino的程序开发变得非常便捷。作为一款开放源代码的软件，Arduino IDE也是由Java、Processing、AVR-GCC等开放源代码的软件写成的。Arduino IDE另一个特点是跨平台的兼容性，适用于Windows、Mac OS X以及Linux。2011年11月30日，Arduino官方正式发布了Arduino1.0版本，可以下载不同操作系统的压缩包，也可以在GitHub上下载源码重新编译自己的Arduino IDE。安装过程如下：

（1）从Arduino官网下载最新版本IDE，下载界面如图1-13所示。

如图1-13所示，选择适合自己计算机操作系统的安装包，这里以64位Windows7系统的安装过程为例。

（2）双击EXE文件选择安装，弹出如图1-14所示的界面。

::: {.zhangyue-c}
![CmQUOF7V1F6EQGyNAAAAAN4hBcM482372822.jpg](https://i.imgur.com/8E5oWTR.jpeg){.zhangyue-img}

图1-14　Arduino安装界面
:::

（3）同意协议如图1-15所示，单击"I Agree"按钮。

（4）选择需要安装的组件，如图1-16所示，单击"Next"按钮。

（5）选择安装位置，如图1-17所示，单击"Install"按钮。

（6）安装过程如图1-18所示。

::: {.zhangyue-c}
![CmQUOF7V1F-EYLvTAAAAAPLtJH4942775531.jpg](https://i.imgur.com/BWGNLSS.jpeg){.zhangyue-img}

图1-15　Arduino协议界面
:::

::: {.zhangyue-c}
![CmQUOV7V1F-EOcuOAAAAAB_Mg8o935772127.jpg](https://i.imgur.com/Zxl5ckm.jpeg){.zhangyue-img}

图1-16　Arduino选择安装组件
:::

::: {.zhangyue-c}
![CmQUOV7V1F-EZBw6AAAAAOtBnf4206856981.jpg](https://i.imgur.com/EhpRM7q.jpeg){.zhangyue-img}

图1-17　Arduino选择安装位置
:::

::: {.zhangyue-c}
![CmQUOF7V1F-ELS9OAAAAAF-JC2k987144279.jpg](https://i.imgur.com/4lm1arT.jpeg){.zhangyue-img}

图1-18　Arduino安装过程
:::

（7）安装USB驱动，如图1-19所示。

::: {.zhangyue-c}
![CmQUOV7V1F-EAZW0AAAAAB6THNI595831335.jpg](https://i.imgur.com/h7rWbZX.jpeg){.zhangyue-img}

图1-19　Arduino安装USB驱动
:::

（8）安装完成，如图1-20所示。

::: {.zhangyue-c}
![CmQUOV7V1F-Ede2JAAAAAIZRflM125952182.jpg](https://i.imgur.com/Wwz9CL5.jpeg){.zhangyue-img}

图1-20　Arduino安装完成
:::

（9）进入Arduino IDE主界面，如图1-21所示。

::: {.zhangyue-c}
![CmQUOF7V1GCEGFcUAAAAAK48igo086323032.jpg](https://i.imgur.com/Hva32mi.jpeg){.zhangyue-img}

图1-21　Arduino IDE主界面
:::

### 1.3.3　Arduino IDE的使用 {#chapter-8.xhtml#AUTO_ID_5 .text-title}

首次使用Arduino IDE，需要将Arduino开发板通过USB线连接到计算机，计算机会为Arduino开发板安装驱动程序，并分配相应的COM端口，如COM1、COM2等。不同的计算机和系统分配的COM端口是不一样的，所以，安装完毕要在计算机的硬件管理中查看Arduino开发板被分配到哪个端口，这个端口就是计算机与Arduino开发板的通信端口。

Arduino开发板的驱动安装完毕，需要在Arduino IDE中设置相应的端口和开发板类型。方法如下：

Arduino集成开发环境启动后，在菜单栏单击"工具"→"端口"命令，进行端口设置，设置计算机硬件管理中分配的端口。然后，在菜单栏单击"工具"→"开发板"命令，选择Arduino开发板的类型，如Arduino UNO、DUE、YUN等前面介绍的开发板，这样计算机就可以与开发板进行通信，工具栏显示的功能如图1-22所示。

Arduino IDE中带有很多种示例，包括基本的、数字的、模拟的、控制的、通信的、传感器的、字符串的、存储卡的、音频的、网络等多种示例。下面介绍最简单、最具有代表性的例子------Blink，以便读者快速掌握Arduino IDE，从而开发出新的产品。

在菜单栏中依次单击"文件"→"示例"→01Basic→Blink命令，这时在主编辑窗口会出现可以编辑的程序。这个Blink范例程序的功能是控制LED的亮灭。在Arduino编译环境中，是以C/C++的风格来编写的，程序的前面几行是注释行，介绍程序的作用及相关的声明等；然后是变量的定义，最后是Arduino程序的两个函数，即void setup（）和void loop（）。在void setup（）中的代码会在导通电源时执行一次，void loop（）中的代码会不断重复执行。由于在Arduino开发板引脚13上有LED，所以定义整型变量LED＝13，用于函数的控制。另外，程序中用了一些函数，pinMode（）是设置引脚的作用为输入还是输出；delay（）是设置延迟的时间，单位为毫秒；digitalWrite（）是向LED变量写入相关的值，使得引脚13 LED的电平发生变化，即HIGH或者LOW，这样LED就会根据延迟的时间交替地亮与灭。

::: {.zhangyue-c}
![CmQUOF7V1GGEEnYeAAAAAMcVu6I163782221.jpg](https://i.imgur.com/xO2rWrq.jpeg){.zhangyue-img}

图1-22　Arduino IDE的工具栏功能
:::

完成程序编辑之后，在工具栏中找到存盘按钮，将程序进行存盘；然后，在工具栏找到上传按钮，单击该按钮将被编辑后的程序上传到Arduino开发板，使得开发板按照修改后的程序运行；同时，还可以单击工具栏的串口监视器，观看串口数据的传输情况，它是非常直观高效的调试工具。

编辑及窗口中的程序如下：

::: {.zhangyue-c}
![CmQUOV7V1GGEaj_GAAAAANHR7RI000271132.jpg](https://i.imgur.com/4mdrFOj.jpeg){.zhangyue-img}
:::

当然，目前还有其他支持Arduino的开发环境，如SonxunStudio，它是由松迅科技公司开发的集成开发环境。目前只支持Windows系统的Arduino系统开发，包括Windows XP以及Windows 7，使用方法与Arduino IDE大同小异，由于篇幅有限，这里不再一一赘述。
:::

[]{#chapter-9.xhtml}

::: {.calibre1}
## 1.4　Arduino编程语言 {.tpl-185-title}

::: {.tpl-185-box-cuxian}
:::

::: {.tpl-185-box-middle}
:::

Arduino编程语言是建立在C/C++语言基础上的，即以C/C++为语言基础，把AVR单片机（微控制器）相关的一些寄存器参数设置等进行函数化，以利于开发者更加快速地使用。其主要使用的函数包括：数字I/O引脚操作函数、模拟I/O引脚操作函数、高级I/O引脚操作函数、时间函数、中断函数、通信函数和数学函数等。

### 1.4.1　Arduino编程基础 {#chapter-9.xhtml#AUTO_ID_6 .text-title}

关键字：if，if\...else，for，switch，case，while，do\...while，break，continue，return，goto。

语法符号：每条语句以分号"；"结尾，每段程序以花括号"{}"括起来。

数据类型：boolean，char，int，unsigned int，long，unsigned long，float，double，string，array，void。

常量：HIGH或者LOW，表示数字I/O引脚的电平，HIGH表示高电平（1），LOW表示低电平（0）。INPUT或者OUTPUT，表示数字I/O引脚的方向，INPUT表示输入（高阻态），OUTPUT表示输出（AVR能提供5V电压，40mA电流）。TRUE或者FALSE，TRUE表示真（1），FALSE表示假（0）。

程序结构：主要包括两部分，void setup（）和void loop（）。其中，void setup（）是声明变量及引脚名称（如：int val；int ledPin＝13；），在程序开始时使用，初始化变量和引脚模式，调用库函数如pinMode（ledPin，OUTPUT）。而void loop（）用在setup（）函数之后，不断地循环执行，是Arduino的主体。

### 1.4.2　数字I/O引脚的操作函数 {#chapter-9.xhtml#AUTO_ID_7 .text-title}

1．pinMode（pin，mode）

pinMode函数用于配置引脚以及设置输出或输入模式，是一个无返回值函数。该函数有两个参数，pin和mode。pin参数表示要配置的引脚，mode参数表示设置该引脚的模式为INPUT（输入）或OUTPUT（输出）。

INPUT参数用于读取信号，OUTPUT用于输出控制信号。Pin的范围是数字引脚0\~13，也可以把模拟引脚（A0\~A5）作为数字引脚使用，此时引脚14对应模拟引脚0，引脚19对应模拟引脚5。该函数一般会放在setup（）里，先设置再使用。

2．digitalWrite（pin，value）

该函数的作用是设置引脚的输出电压为高电平或低电平，也是一个无返回值的函数。

pin参数表示所要设置的引脚，value参数表示输出的电压HIGH（高电平）或LOW（低电平）。

::: {.kx}
**注意：** 使用前必须先用pinMode设置。
:::

3．digitalRead（pin）

该函数在引脚设置为输入的情况下，可以获取引脚的电压情况HIGH（高电平）或者LOW（低电平）。

数字I/O引脚操作函数使用例程如下：

::: {.zhangyue-c}
![CmQUOF7V1GGEaELyAAAAAGIGseQ250460765.jpg](https://i.imgur.com/EY2k0SZ.jpeg){.zhangyue-img}
:::

### 1.4.3　模拟I/O引脚的操作函数 {#chapter-9.xhtml#AUTO_ID_8 .text-title}

1．analogReference（type）

该函数用于配置模拟引脚的参考电压。它有三种类型，DEFAULT是默认值，参考电压是5V；INTERNAL是低电压模式，使用片内基准电压源2.56V；EXTERNAL是扩展模式，通过AREF引脚获取参考电压。

::: {.kx}
**注意：** 若不使用本函数，默认参考电压是5V。若使用AREF作为参考电压，需接一个5kΩ的上拉电阻。
:::

2．analogRead（pin）

用于读取引脚的模拟量电压值，每读取一次需要花100μs的时间。参数pin表示所要获取模拟量电压值的引脚，返回为int型。它的精度为10位，返回值为0\~1023。

::: {.kx}
**注意：** 函数参数pin的取值范围是0\~5，对应开发板上的模拟引脚A0\~A5。
:::

3．analogWrite（pin，value）

该函数是通过PWM（Pulse-Width Modulation，脉冲宽度调制）的方式在引脚上输出一个模拟量，图1-23所示为PWM输出的一般形式，也就是在一个脉冲的周期内高电平所占的比例。它主要用于LED亮度控制，直流电机转速控制等方面。

Arduino中的PWM的频率大约为490Hz，Arduino UNO开发板支持以下数字引脚（不是模拟输入引脚）作为PWM模拟输出：3、5、6、9、10、11。开发板上带PWM输出的都有"\~"号。

::: {.kx}
**注意：** PWM输出位数为8位，即0\~255。
:::

::: {.zhangyue-c}
![CmQUOF7V1GKEakazAAAAAA7nR08466932424.jpg](https://i.imgur.com/7sK5IoU.jpeg){.zhangyue-img}

图1-23　占空比的定义
:::

模拟I/O引脚的操作函数使用例程如下：

::: {.zhangyue-c}
![CmQUOV7V1GKEPnfuAAAAAALjNTw803367366.jpg](https://i.imgur.com/KoSUH2J.jpeg){.zhangyue-img1}
:::

### 1.4.4　高级I/O引脚的操作函数 {#chapter-9.xhtml#AUTO_ID_9 .text-title}

PulseIn（pin，state，timeout）函数用于读取引脚脉冲的时间长度，脉冲可以是HIGH或者LOW。如果是HIGH，该函数先将引脚变为高电平，然后开始计时，一直等到变为低电平停止计时。返回脉冲持续的时间，单位为ms，如果超时没有读到时间，则返回0。

例程说明：做一个按钮脉冲计时器，测量按钮的持续时间，看谁的反应最快，即谁按按钮时间最短，按钮接在引脚3，程序如下：

::: {.zhangyue-c}
![CmQUOF7V1GKEMfBwAAAAABiRsFM029354538.jpg](https://i.imgur.com/CEKIsx5.jpeg){.zhangyue-img1}
:::

### 1.4.5　时间函数 {#chapter-9.xhtml#AUTO_ID_10 .text-title}

1．delay（ms）；

该函数是延时函数，参数是延时的时长，单位是ms。延时函数的典型例程是跑马灯的应用，使用Arduino开发板控制4个LED依次点亮，程序如下：

::: {.zhangyue-c}
![CmQUOF7V1GKEajzqAAAAAM-F9lg919677915.jpg](https://i.imgur.com/hTB8kek.jpeg){.zhangyue-img1}
:::

2．delayMicroseconds（）；

delayMicroseconds（）也是延时函数，单位是μs，该函数可以产生更短的延时。

3．millis（）

millis（）为计时函数，应用该函数可以获取单片机通电到现在运行的时间长度，单位是ms。系统最长的记录时间为9h 22min，超出则从0开始。返回值是unsigned long型。

该函数适合作为定时器使用，不影响单片机的其他工作（而使用delay函数期间无法进行其他工作）。计时时间函数使用示例，延时10s后自动点亮LED，程序如下：

::: {.zhangyue-c}
![CmQUOV7V1GKEZmVVAAAAAF5usPc668671860.jpg](https://i.imgur.com/c4cJcDG.jpeg){.zhangyue-img1}
:::

4．micros（）

micros（）也是计时函数，该函数返回开机到现在运行的时间长度，单位为μs。返回值是unsigned long型，70min溢出。程序如下：

::: {.zhangyue-c}
![CmQUOF7V1GOEMrtCAAAAANU71EE770679766.jpg](https://i.imgur.com/EwROJT2.jpeg){.zhangyue-img1}
:::

以下例程为跑马灯的另一种实现方式：

::: {.zhangyue-c}
![CmQUOF7V1GOEKYP6AAAAAKGMh9g948993543.jpg](https://i.imgur.com/0BZ4P23.jpeg){.zhangyue-img1}
:::

### 1.4.6　中断函数 {#chapter-9.xhtml#AUTO_ID_11 .text-title}

什么是中断？在日常生活中，中断非常常见，如图1-24所示。

你在看书时，电话铃响了，于是在书上做个记号，去接电话，与对方通话；门铃响了，有人敲门，你让打电话的对方稍等一下，去开门，并在门旁与来访者交谈，谈话结束，关好门；回到电话机旁，继续通话，接完电话再回来从做记号的地方接着阅读。

同样的道理，单片机也存在中断概念，如图1-25所示。在计算机或者单片机中中断是由于某个随机事件的发生，计算机暂停主程序的运行，转去执行另一程序（随机事件），处理完毕又自动返回主程序继续运行的过程。也就是说高优先级的任务中断了低优先级的任务。在计算机中中断包括如下几部分：

中断源------引起中断的原因，或能发生中断申请的来源。

主程序------计算机现行运行的程序。

中断服务子程序------处理突发事件的程序。

::: {.zhangyue-c}
![CmQUOF7V1GOEH0HSAAAAAJhyDqE119732509.jpg](https://i.imgur.com/XBclHnS.jpeg){.zhangyue-img2}

图1-24　中断的概念
:::

::: {.zhangyue-c}
![CmQUOF7V1GOELnmhAAAAACG5zy4313602513.jpg](https://i.imgur.com/UtVLese.jpeg){.zhangyue-img}

图1-25　单片机的中断
:::

1．attachInterrupt（interrput，function，mode）；

该函数用于设置中断，有3个参数，分别表示中断源、中断处理函数和触发模式。中断源可选0或者1，数字引脚2或3。中断处理函数是一段子程序，当中断发生时执行该子程序部分。触发模式有4种类型，LOW（低电平触发）、CHANGE（变化时触发）、RISING（低电平变为高电平触发）、FALLING（高电平变为低电平触发）。

例程功能为：引脚2接按钮开关，引脚4接LED1（红色），引脚5接LED2（绿色）。在例程中，LED3为板载的LED，每秒闪烁一次。使用中断0控制LED1，中断1控制LED2。按下按钮，马上响应中断，由于中断响应速度快，LED3不受影响，继续闪烁。使用不同的4个参数，例程1试验LOW和CHANGE参数，例程2试验RISING和FALLING参数。

例程1：

::: {.zhangyue-c}
![CmQUOF7V1GOEHmQ1AAAAAB6ygII022690911.jpg](https://i.imgur.com/2AWaBkN.jpeg){.zhangyue-img}
:::

例程2：

::: {.zhangyue-c}
![CmQUOV7V1GSEMJ8IAAAAAF8KU9w785538869.jpg](https://i.imgur.com/kjeHs2a.jpeg){.zhangyue-img}
:::

2．detachInterrupt（interrput）；

该函数用于取消中断，参数interrupt表示所要取消的中断源。

### 1.4.7　串口通信函数 {#chapter-9.xhtml#AUTO_ID_12 .text-title}

串行通信接口（Serial Interface）使数据一位一位地顺序传送，其特点是通信线路简单，只要一对传输线就可以实现双向通信的接口，如图1-26所示。

::: {.zhangyue-c}
![CmQUOF7V1GSEIaMKAAAAAC4aWq8740882825.jpg](https://i.imgur.com/0SxG02y.jpeg){.zhangyue-img}

图1-26　串行通信接口
:::

串行通信接口出现在1980年前后，数据传输率是115\~230kb/s。串行通信接口出现的初期是为了实现计算机外设的通信，初期串口一般用来连接鼠标和外置Modem、老式摄像头和写字板等设备。

由于串行通信接口（COM）不支持热插拔及传输速率较低，因此目前部分新主板和大部分便携计算机已开始取消该接口，串口多用于工控和测量设备以及部分通信设备中。包括各种传感器采集装置、GPS信号采集装置、多个单片机通信系统、门禁刷卡系统的数据传输、机械手控制和操纵面板控制直流电机等，特别是广泛应用于低速数据传输的工程应用，主要函数如下：

1．Serial.begin（）

该函数用于设置串口的波特率，即数据的传输速率，每秒传输的符号个数。一般的波特率有9600、19200，57600、115200等。

例如：Serial.begin（57600）；

2．Serial.available（）

该函数用来判断串口是否收到数据，函数的返回值为int型，不带参数。

3．Serial.read（）

该函数不带参数，只将串口数据读入。返回值为串口数据，int型。

4．Serial.print（）

该函数向串口发数据。可以发送变量，也可以发送字符串。

例1：Serial.print（"today is good"）；

例2：Serial.print（x，DEC）；以十进制发送变量x

例3：Serial.print（x，HEX）；以十六进制发送变量x

5．Serial.println（）

该函数与Serial.print（）类似，只是多了换行功能。

串口通信函数使用例程：

::: {.zhangyue-c}
![CmQUOF7V1GSEdT6wAAAAAGYcLJM860983026.jpg](https://i.imgur.com/ZhxzhdC.jpeg){.zhangyue-img}
:::

### 1.4.8　Arduino的库函数 {#chapter-9.xhtml#AUTO_ID_13 .text-title}

与C语言和C++一样，Arduino平台也有相关的库函数，提供给开发者使用，这些库函数的使用，与C语言的头文件使用类似，需要\#include语句，将函数库加入Arduino的IDE编辑环境中，如\#include"Arduino.h"语句。

在Arduino开发中主要库函数的类别是：数学库主要包括数学计算；EEPROM库函数用于向EEPROM中读写数据；Ethernet库函数用于以太网的通信；LiquidCrystal库函数用于液晶屏幕的显示操作；Firmata库函数实现Arduino与PC串口之间的编程协议；SD库函数用于读写SD卡；Servo库函数用于舵机的控制；Stepper库函数用于步进电机控制；WiFi库函数用于WiFi的控制和使用等，诸如此类的库函数非常多，还包括一些Arduino爱好者自己开发的库函数。例如下列数学库中的函数：

::: {.zhangyue-c}
![CmQUOF7V1GWEOpoEAAAAAAXnePM194059148.jpg](https://i.imgur.com/3PYSewr.jpeg){.zhangyue-img}
:::

例如：

数学库函数random（small，big），返回值为long

long x；

x＝random（0，100）；可以生成从0\~100的整数
:::

[]{#chapter-10.xhtml}

::: {.calibre1}
## 1.5　Arduino硬件设计平台 {.tpl-185-title}

::: {.tpl-185-box-cuxian}
:::

::: {.tpl-185-box-middle}
:::

电子设计自动化（Electronic Design Automation，EDA）是20世纪90年代初，从计算机辅助设计（CAD）、计算机辅助制造（CAM）、计算机辅助测试（CAT）和计算机辅助工程（CAE）的概念上发展而来的。EDA设计工具的出现使得电路设计的效率性和可操作性都得到了大幅度的提升。本书针对Arduino平台的学习，主要介绍和使用Fritzing工具，配以详细的示例操作说明，当然，很多软件也支持Arduino的开发，在此不再一一罗列。

Fritzing是一款支持多国语言的电路设计软件，可以同时提供面包板、原理图、PCB三种视图设计，设计者可以采用任意一种视图进行电路设计，软件都会自动同步生成其他两种视图。此外，Fritzing软件还能用来生成制板厂生产所需用的greber文件、PDF、图片和CAD格式文件，这些都极大地普及和推广了Fritzing的使用。下面对软件的使用进行介绍，有关Fritzing的安装和启动请参考相关的书籍或者网络。

### 1.5.1　Fritzing软件简介 {#chapter-10.xhtml#AUTO_ID_14 .text-title}

1．主界面

总体来说，Fritzing软件的主界面由两部分构成，如图1-27所示。一部分是图中左边框内项目视图部分，这一部分将显示设计者开发的电路，包含面包板图、原理图和PCB三种视图。另外一部分是图中右边框内工具栏部分，包含软件的元件库、指示栏、导航栏、撤销历史栏和层次栏等子工具栏，是设计者主要操作和使用的地方。

::: {.zhangyue-c}
![CmQUOF7V1GWEYHs_AAAAAHbYXz0498213654.jpg](https://i.imgur.com/qOcVhvD.jpeg){.zhangyue-img}

图1-27　Fritzing主界面
:::

2．项目视图

设计者可以在项目视图中自由选择面包板、原理图或PCB视图进行开发，也可以利用视图切换器快捷轻松地在这三种视图中进行切换，如图1-27中右侧中部框图部分所示。此外还可以利用工具栏中的导航栏进行快速切换，这将在工具栏部分进行详细说明。下面分别给出这三种视图的操作界面，按从上到下的顺序依次是面包板视图、原理图视图和PCB视图，分别如图1-28\~图1-30所示。

::: {.zhangyue-c}
![CmQUOV7V1GWESVRRAAAAAPKSQxo916953574.jpg](https://i.imgur.com/xSBk5Iq.jpeg){.zhangyue-img}

图1-28　Fritzing面包板视图
:::

::: {.zhangyue-c}
![CmQUOV7V1GaEHlMCAAAAAAydK4s542833079.jpg](https://i.imgur.com/jVYsBV9.jpeg){.zhangyue-img}

图1-29　Fritzing原理图视图
:::

::: {.zhangyue-c}
![CmQUOF7V1GaEUFNDAAAAANkeW0E641460885.jpg](https://i.imgur.com/8rKraII.jpeg){.zhangyue-img}

图1-30　Fritzing PCB视图
:::

细心的读者可能会发现，在这三种视图中操作可选项和工具栏中对应的分栏内容都只有细微的变化。由于Fritzing的三个视图是默认同步生成的，在本书中，首先以面包板为模板对软件的共性部分进行介绍，然后再对原理图、PCB图与面包板视图之间的差异部分进行补充。之所以选择面包板视图作为模板，是为了方便Arduino硬件设计者从电路原理图过渡到实际电路，尽量减少可能出现的连线和引脚连接错误。

3．工具栏

用户可以根据自己的兴趣爱好选择工具栏显示的各种窗口，单击窗口下拉菜单，然后对希望出现在右边工具栏的分栏进行勾选，用户也可以将这些分栏设成单独的浮窗。为了方便初学者迅速掌握Fritzing软件，本书将详细介绍各个工具栏的作用。

1）元件库

元件库中包含了许多的电子元件，这些电子元件是按容器分类盛放的。Fritzing一共包含8个元件库，分别是Fritzing的核心库、设计者自定义的库和其他6个库。这8个库是设计者进行电路设计前必须掌握的，下面详细介绍。

（1）MINE：MINE元件库是设计者自定义元件放置的容器。如图1-31所示，设计者可以在这部分添加一些自己的常用元件或软件缺少的元件。

::: {.zhangyue-c}
![CmQUOF7V1GaEKYd5AAAAAM7_6l8633202488.jpg](https://i.imgur.com/2vDInPq.jpeg){.zhangyue-img}

图1-31　MINE元件库
:::

（2）Arduino：Arduino元件库主要放置与Arduino相关的开发板，这也是Arduino设计者需要特别关心的元件库。这个元件库包含9块开发板，分别是Arduino、Arduino UNO R3、Arduino MEGA、Arduino MINI、Arduino NANO、Arduino Pro Mini 3.3V、Arduino Fio、Arduino LilyPad、Arduino Ethernet Shield，如图1-32所示。

::: {.zhangyue-c}
![CmQUOF7V1GaEM4gvAAAAAHI-xXc375551613.jpg](https://i.imgur.com/p4D6BsG.jpeg){.zhangyue-img}

图1-32　Arduino元件库
:::

（3）Parallax：Parallax元件库主要包含Parallax的微控制器Propeller 40和8款Basic Stamp微控制器开发板，如图1-33所示。该系列微控制器是由美国Parallax公司开发的，这些微控制器与其他微控制器的区别是它们在自己的ROM内存中内建了一套小型的、特有的BASIC编程语言直译器PBASIC，为BASIC语言的设计者降低了嵌入式设计的门槛。

（4）Picaxe：Picaxe元件库主要包括Picaxe系列的低价位单片机、电可擦只读存储器、实时时钟控制器、串行接口、舵机驱动等元件，如图1-34所示。Picaxe系列芯片也是基于BASIC语言，设计者可以迅速掌握。

::: {.zhangyue-c}
![CmQUOF7V1GeEDrbcAAAAAEBdZHw366850800.jpg](https://i.imgur.com/cDLONQO.jpeg){.zhangyue-img}

图1-33　Parallax元件库
:::

::: {.zhangyue-c}
![CmQUOV7V1GeEKotVAAAAACTKD7c708972285.jpg](https://i.imgur.com/JMeC0xL.jpeg){.zhangyue-img}

图1-34　Picaxe元件库
:::

（5）SparkFun：SparkFun也是Arduino设计者重点关注的一个容器（元件库），其中包含许多Arduino的扩展板。此外，这个元件库中还包含一些传感器和LilyPad系列的相关元件，如图1-35所示。

::: {.zhangyue-c}
![CmQUOF7V1GeEHBGkAAAAALjw5us361180127.jpg](https://i.imgur.com/CVrRKoy.jpeg){.zhangyue-img}

图1-35　SparkFun元件库
:::

（6）Snootlab：Snootlab包含4块开发板，分别是Arduino的LCD扩展板、SD卡扩展板、接线柱扩展板和舵机的扩展驱动板，如图1-36所示。

（7）Contributed Parts：Contributed Parts元件库包含带开关电位表盘、开关、LED、反相施密特触发器和放大器等，如图1-37所示。

::: {.zhangyue-c}
![CmQUOV7V1GeEeQC9AAAAAMEEFf4713429941.jpg](https://i.imgur.com/TZegGWW.jpeg){.zhangyue-img2}

图1-36　Snootlab元件库
:::

::: {.zhangyue-c}
![CmQUOF7V1GeEHTFsAAAAAGXKSzU583962082.jpg](https://i.imgur.com/1CLIT4f.jpeg){.zhangyue-img2}

图1-37　Contributed Parts元件库
:::

（8）Core：Core元件库包含许多平常会用到的基本元件，如LED、电阻、电容、电感、晶体管等，还有常见的输入元件、输出元件、集成电路元件、电源、连接、微控制器等。此外，Core元件库还包含面包板视图、原理图视、PCB视图的格式以及工具（主要包含笔记和尺子）的选择，如图1-38所示。

::: {.zhangyue-c}
![CmQUOV7V1GeEIlCuAAAAAPvGKUQ601006033.jpg](https://i.imgur.com/JkGzwqI.jpeg){.zhangyue-img}

图1-38　Core元件库
:::

2）指示栏

指示栏给出元件库或项目视图中鼠标所选定元件的详细信息，包括该元件的名字、标签，以及在三种视图下的形态、类型、属性和连接数等。设计者可以根据这些信息加深对元件的理解，或者检验所选定的元件是否自己所需要的，甚至能在项目视图中选定相关元件后直接在指示栏中修改元件的某些基本属性，如图1-39所示。

3）撤销历史栏

撤销历史栏中详细记录了设计步骤，并将这些步骤按照时间的先后顺序依次进行排列，先显示最近发生的步骤，如图1-40所示。设计者可以利用这些记录步骤回到之前的任一设计状态，这为开发工作带来了极大的便利。

4）导航栏

导航栏提供了对面包板视图、原理图视图和PCB视图的预览，设计者可以在导航栏中任意选定三种视图中的某一视图进行查看，如图1-41所示。

::: {.zhangyue-c}
![CmQUOV7V1GiER4blAAAAANmya80351237485.jpg](https://i.imgur.com/Zvi9wBv.jpeg){.zhangyue-img}

图1-39　指示栏
:::

::: {.zhangyue-c}
![CmQUOV7V1GiELdk-AAAAAAaLJMc341331756.jpg](https://i.imgur.com/s1xOwEF.jpeg){.zhangyue-img}

图1-40　撤销历史栏
:::

::: {.zhangyue-c}
![CmQUOF7V1GiELyIxAAAAAMTzHtU681521071.jpg](https://i.imgur.com/aHZrULO.jpeg){.zhangyue-img}

图1-41　导航栏
:::

5）层

不同的视图有不同的层结构，详细了解层结构有助于读者进一步理解这三种视图和提升设计者对它们的操作能力。下面将依次给出面包板视图、原理图视图、PCB视图的层结构。

（1）面包板视图的层结构，如图1-42所示，共6层，设计者可以通过勾选层结构前边的矩形框在项目视图中显示相应的层。

::: {.zhangyue-c}
![CmQUOV7V1GiEWp6fAAAAAHAItPA772825834.jpg](https://i.imgur.com/scYM9wV.jpeg){.zhangyue-img}

图1-42　面包板层结构
:::

（2）原理图的层结构，如图1-43所示，共7层。

::: {.zhangyue-c}
![CmQUOF7V1GiEf1gzAAAAAICYW7o883546654.jpg](https://i.imgur.com/3kiaaUB.jpeg){.zhangyue-img}

图1-43　原理图层结构
:::

PCB视图是层结构最多的视图，如图1-44所示，共15层结构。

::: {.zhangyue-c}
![CmQUOV7V1GiECMfzAAAAAI2DDd0055464367.jpg](https://i.imgur.com/wrT34Jp.jpeg){.zhangyue-img}

图1-44　PCB视图层结构
:::

### 1.5.2　Fritzing使用方法 {#chapter-10.xhtml#AUTO_ID_15 .text-title}

1．查看元件库已有元件

设计者在查看元件库中的元件时，既可以选择按图标形式查看，也可以选择按列表形式查看，界面分别如图1-45和图1-46所示。

设计者可以直接在对应的元件库中寻找自己所需要的元件，但由于Fritzing所带的库文件和元件数目都相对比较多，所以在有些情况下，设计者很难确定元件所在的具体位置，这时设计者就可以利用元件库中自带的搜索功能，从库中找出所需要的元件，这个方法能极大地提升工作效率。在此，举一个简单的例子，设计者要寻找Arduino开发板，那么，在搜索栏输入Arduino开发板，按下Enter键，就会自动显示相应的搜索结果，如图1-47所示。

::: {.zhangyue-c}
![CmQUOV7V1GmEVBPUAAAAAJrXz78617513456.jpg](https://i.imgur.com/NjqRHd1.jpeg){.zhangyue-img}

图1-45　元件图标形式
:::

::: {.zhangyue-c}
![CmQUOV7V1GmEEtVkAAAAAFEItAQ495141247.jpg](https://i.imgur.com/PdN5YSg.jpeg){.zhangyue-img}

图1-46　元件列表形式
:::

::: {.zhangyue-c}
![CmQUOV7V1GmEE6umAAAAAGSMVTc407384756.jpg](https://i.imgur.com/6mJynfD.jpeg){.zhangyue-img}

图1-47　查找元件
:::

2．添加新元件到元件库

1）从头开始添加新元件

设计者可以通过选择"元件"→"新建"命令进入添加新元件的界面，如图1-48所示。也可以通过单击元件库中的New Part选项进入该界面，如图1-49所示。无论采用哪一种方式，最终进入的新元件添加界面都如图1-50所示。

::: {.zhangyue-c}
![CmQUOV7V1GmEANvuAAAAAHtRhRE454036075.jpg](https://i.imgur.com/RnQ7I3s.jpeg){.zhangyue-img}

图1-48　添加新元件方法1
:::

::: {.zhangyue-c}
![CmQUOV7V1GmETGS5AAAAAMrrDt0138194662.jpg](https://i.imgur.com/vjQenOA.jpeg){.zhangyue-img}

图1-49　添加新元件方法2
:::

::: {.zhangyue-c}
![CmQUOV7V1GmEV2WoAAAAAC3jjlI985824979.jpg](https://i.imgur.com/o1owXQa.jpeg){.zhangyue-img}

图1-50　新元件添加界面
:::

设计者在新元件的添加界面填写相关信息，如新元件的名字、属性、连接等，并导入相应的视图图片，尤其要注意添加连接，然后单击"保存"按钮，便能创建新的元件。但是在开发过程中，建议设计者尽量在已有的库元件基础上进行修改来创建用户需要的新元件，这可以减少工作量，提高开发效率。

2）从已有元件添加新元件

关于如何基于已有的元件添加新元件，下面举两个简单的例子进行说明。

（1）针对ICs、电阻、引脚等标准元件。例如，现在设计者需要一个2.2kΩ的电阻，可是在core元件库中只有220Ω的标准电阻，这时，创建新电阻最简单的方法就是先将220Ω的通用电阻添加到面包板上，然后选定该电阻，直接在右边的指示栏中将电阻值修改为2.2kΩ，如图1-51所示。

::: {.zhangyue-c}
![CmQUOV7V1GqEeNy2AAAAAHFAjiM219677696.jpg](https://i.imgur.com/dXYf4bg.jpeg){.zhangyue-img}

图1-51　修改元件属性
:::

除此之外，选定元件后，也可以选择"元件"→"编辑"命令完成元件参数的修改，如图1-52所示。

::: {.zhangyue-c}
![CmQUOF7V1GqEXCzfAAAAAB7gU2Y230643224.jpg](https://i.imgur.com/SjXwDAm.jpeg){.zhangyue-img}

图1-52　修改元件参数
:::

然后进入元件编辑界面，如图1-53所示。

::: {.zhangyue-c}
![CmQUOV7V1GqEMZR3AAAAADKWPGo513874949.jpg](https://i.imgur.com/rrK3fD6.jpeg){.zhangyue-img}

图1-53　元件编辑界面
:::

将resistance相应的数值改为2200Ω，单击"另存为新元件"按钮，即可成功创建一个电阻值为2200Ω的电阻，如图1-54所示。

::: {.zhangyue-c}
![CmQUOV7V1GqERJVyAAAAAApQQEM764783814.jpg](https://i.imgur.com/pmYg5No.jpeg){.zhangyue-img}

图1-54　创建新元件
:::

此外，选定元件后右击，在弹出的快捷菜单中选择"编辑"命令，也可进入元件编辑界面，如图1-55所示。

::: {.zhangyue-c}
![CmQUOF7V1GqEeyXSAAAAAPvomOg935448762.jpg](https://i.imgur.com/RanhVjV.jpeg){.zhangyue-img}

图1-55　利用快捷键进入元件编辑界面
:::

基于其他标准添加新元件的操作与此类似，如改变引脚数、修改接口数目等，在此不再赘述。

（2）相对复杂元件的添加。

完成了基本元件的介绍后，下面介绍一个相对复杂的例子，在这个例子中，要添加一个自定义元件------SparkFun T5403气压仪，如图1-56所示。

在元件库里寻找该元件，搜索框中输入T5403，如图1-57所示。

::: {.zhangyue-c}
![CmQUOV7V1GqEI8NaAAAAAODYkDg531137799.jpg](https://i.imgur.com/1RmSCUa.jpeg){.zhangyue-img}

图1-56　SparkFun T5403气压仪
:::

::: {.zhangyue-c}
![CmQUOF7V1GqEY1-dAAAAAO4ngd0150632792.jpg](https://i.imgur.com/8Xeo1jA.jpeg){.zhangyue-img}

图1-57　SparkFun T5403搜寻图
:::

若未发现该元件，可以在该元件所在的库中寻找是否有类似的元件（根据名字得知，SparkFun T5403是SparkFun系列的元件），如图1-58所示。

::: {.zhangyue-c}
![CmQUOV7V1GqELO3hAAAAACtverc571584960.jpg](https://i.imgur.com/16fLcNg.jpeg){.zhangyue-img}

图1-58　SparkFun系列元件
:::

若发现还是没有与自定义元件相类似的，则可以选择从标准的集成电路ICs开始。选择Core元件库，找到ICs栏，将IC元件添加到面包板中，如图1-59和图1-60所示。

::: {.zhangyue-c}
![CmQUOV7V1GqEW--HAAAAAACpMJ0620007251.jpg](https://i.imgur.com/FEf6GrA.jpeg){.zhangyue-img}

图1-59　Core ICs
:::

::: {.zhangyue-c}
![CmQUOF7V1GqEMtvhAAAAAEYjHsc775095088.jpg](https://i.imgur.com/A9BDYw4.jpeg){.zhangyue-img}

图1-60　添加ICs到面包板
:::

选定该IC元件，在指示栏中查看该元件的属性。将元件的名字命名为自定义元件的名字T5403 Barometer Breakout，并将引脚数修改成所需要的数量，在本例中，需要的引脚数为8，如图1-61所示。

修改之后，面包板上的元件如图1-62所示。

::: {.zhangyue-c}
![CmQUOV7V1GqEDXLwAAAAAKbmha4155063620.jpg](https://i.imgur.com/OjMgQ6R.jpeg){.zhangyue-img}

图1-61　参数修改
:::

::: {.zhangyue-c}
![CmQUOF7V1GqEaNwTAAAAAKBaQE0409783498.jpg](https://i.imgur.com/igLAh4L.jpeg){.zhangyue-img2}

图1-62　T5403 Barometer Breakout
:::

右击面包板视图中的IC元件，在弹出的快捷菜单中选择"编辑"命令，会出现如图1-63所示的编辑窗口。设计者需要根据自定义元件的特性修改图中的6个部分，分别是元件图标、面包板视图、原理图视图、PCB视图、描述和接插件。这部分的修改大都是细节性的问题，在此，不再加以赘述，读者可参考下面的链接进行深入学习：https：//learn.sparkfun.com/tutorials/make-your-own-fritzing-parts。

::: {.zhangyue-c}
![CmQUOV7V1GqEPADRAAAAAA_mlJg164208161.jpg](https://i.imgur.com/wT4nrOE.jpeg){.zhangyue-img}

图1-63　T5403 Barometer Breakout编辑窗口
:::

3．添加新元件库

设计者不仅可以创建自定义的新元件，也可以根据需求创建自定义的元件库，并对元件库进行管理。在设计电路结构前，可以将所需的电路元件列一张清单，并将所需要的元件都添加到自定义库中，为后续的电路设计提高效率。添加新元件库时，只需选择如图1-46所示的元件栏中的New Bin命令，便会出现如图1-64所示的界面。

如图1-64所示，给自定义的元件库取名为Arduino Project，单击OK按钮，新的元件库便成功创建，如图1-65所示。

::: {.zhangyue-c}
![CmQUOV7V1GqEYviFAAAAAE0NbQQ519696513.jpg](https://i.imgur.com/ALCOthp.jpeg){.zhangyue-img2}

图1-64　添加新元件库
:::

::: {.zhangyue-c}
![CmQUOF7V1GqEa_5xAAAAAKK0-eQ731969337.jpg](https://i.imgur.com/8NnHvZ3.jpeg){.zhangyue-img2}

图1-65　新元件库
:::

4．添加或删除元件

下面主要介绍如何将元件库中的元件添加到面包板视图中，当需要添加某个元件时，可以先在元件库相应的子库中寻找所需要的元件，然后在目标元件的图标上单击选定元件，拖动至面包板上的目的位置，松开鼠标左键即可将元件插入面包板。需要特别注意的是，在放置元件时，一定要确保元件的引脚已经成功插入面包板。如果插入成功，则元件引脚所在的连线会显示绿色；如果插入不成功，元件的引脚显示红色，如图1-66所示（其中左边表示添加成功，右边则表示添加失败）。

::: {.zhangyue-c}
![CmQUOV7V1GqEew_wAAAAADiqV50959077277.jpg](https://i.imgur.com/eLqMRwe.jpeg){.zhangyue-img2}

图1-66　引脚状态图
:::

如果在放置元件的过程中有误操作，则直接单击选定目标元件，然后再单击Delete键即可以将元件从视图上删除。

5．添加元件间连线

（1）添加元件间的连线是用Fritzing绘制电路图必不可少的过程。接下来将连线的方法给出详细的介绍。连线时将想要连接的引脚拖动到要连接的目的引脚后松开即可。需要注意的是，只有当连接线段的两端都显示绿色时，才表示导线连接成功，若连线的两端显示红色（图中右边），则表示连接出现问题，如图1-67所示。

::: {.zhangyue-c}
![CmQUOF7V1GqECxbjAAAAACbtb_g445309659.jpg](https://i.imgur.com/4fiSQuN.jpeg){.zhangyue-img}

图1-67　连线状态图
:::

（2）此外，为了使电路更清晰，还可以根据需求在导线上设置拐点，使导线根据设计者的喜好而改变连线角度和方向。具体方法为：光标处即为拐点处，设计者可以自由拖动光标来移动拐点的位置。也可以先选定导线，然后将鼠标光标放在想设置的拐点处，右击，在弹出的快捷菜单中选择"添加拐点"命令即可，如图1-68所示。

::: {.zhangyue-c}
![CmQUOV7V1GqEJ0fbAAAAACxzdDg566591153.jpg](https://i.imgur.com/4hXNJGC.jpeg){.zhangyue-img}

图1-68　拐点添加图
:::

（3）在连线的过程中，更改导线的颜色，不同的颜色将帮助设计者更好地掌握绘制的电路。具体的修改方法为选定要更改颜色的导线，然后右击，从弹出的快捷菜单中选择"更改颜色"命令，如图1-69所示。

::: {.zhangyue-c}
![CmQUOF7V1GqEafyiAAAAADCj9O8977723906.jpg](https://i.imgur.com/Qn5TSqM.jpeg){.zhangyue-img}

图1-69　导线颜色修改图
:::

### 1.5.3　Arduino电路设计 {#chapter-10.xhtml#AUTO_ID_16 .text-title}

本节通过一个具体的例子系统地介绍如何利用Fritzing软件来绘制一个完整的Arduino电路图。利用Arduino主板控制LED的亮灭，整体效果如图1-70所示。

::: {.zhangyue-c}
![CmQUOV7V1GqEadTSAAAAABztluo774077463.jpg](https://i.imgur.com/ytzzt6Y.jpeg){.zhangyue-img}

图1-70　Arduino Blink示例整体效果图
:::

下面介绍Arduino Blink例程的电路图详细设计步骤。首先打开软件并新建一个项目，具体操作为单击软件的运行图标，在软件的主界面选择"文件"→"新建"选项命令，如图1-71所示。

::: {.zhangyue-c}
![CmQUOV7V1GqEf2y3AAAAALgbo88108807954.jpg](https://i.imgur.com/EJCwv4S.jpeg){.zhangyue-img}

图1-71　新建项目
:::

完成项目新建后，先进行保存，选择"文件"→"另存为"命令，出现如图1-72所示的界面，在该对话框中输入保存的名字和路径，然后单击"保存"按钮，即可完成对新建项目的保存。

::: {.zhangyue-c}
![CmQUOF7V1GqETIkvAAAAAFRZbuw036710465.jpg](https://i.imgur.com/iDVgcUz.jpeg){.zhangyue-img}

图1-72　保存项目
:::

一般来说，在绘制电路前，设计者应该先对开发环境进行设置。这里的开发环境主要指设计者选择使用的面包板型号、类型、原理图和PCB视图的各种类型。本书以面包板视图为重点，并在core元件库中选好开发所用的面包板类型和尺寸，如图1-73所示。

::: {.zhangyue-c}
![CmQUOF7V1GqEPVFeAAAAAG9e84s952915712.jpg](https://i.imgur.com/Spx4ftV.jpeg){.zhangyue-img}

图1-73　面包板类型和尺寸
:::

由于本示例所需的元件数较少，此处省去建立自定义元件库的步骤，直接将所有的元件都放置在面包板上，如图1-74所示。在本例中，需要1块Arduino开发板、1个LED和1个220Ω电阻。

::: {.zhangyue-c}
![CmQUOF7V1GqEdInwAAAAAOONj-E426025621.jpg](https://i.imgur.com/BVwbYzP.jpeg){.zhangyue-img}

图1-74　元件的放置
:::

然后进行连线，即可得到最终的效果图，如图1-75所示。

::: {.zhangyue-c}
![CmQUOV7V1GqEZq9fAAAAAEVbgME729031218.jpg](https://i.imgur.com/R1CDxaB.jpeg){.zhangyue-img}

图1-75　连线图
:::

::: {.zhangyue-c}
![CmQUOF7V1GqEJf53AAAAANkhuKk484633212.jpg](https://i.imgur.com/oEIXSQC.jpeg){.zhangyue-img2}

图1-76　原理图效果
:::

在编辑视图中切换到原理图，如图1-76所示。

此时布线还没有完成，开发者可以单击编辑视图下方的自动布线，但要注意自动布线后，检查所有的元件是否都完成了布线，对没有完成的，开发者要进行手动布线，即手动连接引脚间的连线，如图1-77所示。

同理，可以在编辑视图中切换到PCB视图，观察PCB视图下的电路。此时，也要注意编辑视图窗口下方是否提示布线未完成。如果是，开发者可以单击下边的"自动布线"按钮进行处理，也可以手动进行布线。这里，将直接给出最终的效果图，如图1-78所示。

完成所有操作后，就可以修改电路中各元件的属性，在本例中不需要修改任何值，在此略过这部分。完成所有步骤后，根据需求导出所需要的文档或文件。下面以导出一个PDF格式的面包板视图为例对该流程进行说明。首先确保将编辑视图切换到面包板视图，然后选择"文件"→"导出"→"作为图像"→"PDF"命令，如图1-79所示。输出的最终PDF格式文档如图1-80所示。

::: {.zhangyue-c}
![CmQUOV7V1GqEUsxqAAAAACeqkMo462800810.jpg](https://i.imgur.com/lt5BSxP.jpeg){.zhangyue-img}

图1-77　原理图自动布线图
:::

::: {.zhangyue-c}
![CmQUOV7V1GqESLUnAAAAABOGOCk406867230.jpg](https://i.imgur.com/e9zeFMm.jpeg){.zhangyue-img}

图1-78　PCB视图效果图
:::

::: {.zhangyue-c}
![CmQUOF7V1GqEb3ydAAAAAEZKUnA242080132.jpg](https://i.imgur.com/2WKlDel.jpeg){.zhangyue-img}

图1-79　PDF图生成步骤
:::

::: {.zhangyue-c}
![CmQUOV7V1GqEB1PCAAAAAHo_h1A365227873.jpg](https://i.imgur.com/Ih2Xrjc.jpeg){.zhangyue-img}

图1-80　面包板PDF图
:::

### 1.5.4　Arduino开发平台样例与编程 {#chapter-10.xhtml#AUTO_ID_17 .text-title}

Fritzing软件不但能很好地支持Arduino的电路设计，而且提供了对Arduino样例电路的支持，如图1-81所示。用户可以根据"文件"→"打开样例"命令，然后再选择相应的Arduino，如此层层推进，最终选择想打开的样例电路。

这里以Arduino数字化中的交通灯进行举例说明，选择"元件"→"打开样例"→Arduino→Digital→Output→Traffic→Light命令，就能在Fritzing软件中的编辑视图中得到如图1-82所示的Arduino样例电路。需要注意的是，不管在哪种视图中进行操作，打开的样例电路都会将编辑视图切换到面包板视图，如果想要获得相应的原理图视图或PCB视图，则可以在打开的样例电路中从面包板视图切换到目标视图。

::: {.zhangyue-c}
![CmQUOV7V1GqEZG-oAAAAAJwbv8Q045116256.jpg](https://i.imgur.com/k0aBNIc.jpeg){.zhangyue-img}

图1-81　Fritzing对Arduino样例支持
:::

::: {.zhangyue-c}
![CmQUOV7V1GqEbfkkAAAAAKK-AHI665689015.jpg](https://i.imgur.com/hqsisSs.jpeg){.zhangyue-img}

图1-82　Arduino交通灯样例
:::

::: {.zhangyue-c}
![CmQUOV7V1GqEAOcaAAAAACaa2R8315721136.jpg](https://i.imgur.com/pRFb0sy.jpeg){.zhangyue-img}

图1-83　编程界面进入步骤
:::

除了对Arduino样例的支持外，Fritzing还将电路设计和编程脚本放在了一起，对于每个设计电路，Fritzing都提供了一个编程界面，用户可以在编程界面中编写将要下载到微控制器的脚本。具体操作如图1-83所示，选择"窗口"→"打开编程窗口"命令，即可进入编程界面，如图1-84所示。

从图1-84中可以发现，虽然每个设计电路只有一个编程界面，但设计者可以在一个界面创造许多编程窗口来编写不同版本的脚本，从而在其中选择最合适的脚本。单击"新建"按钮即可创建新编程窗口。而且，从编程界面也可以看出，目前Fritzing主要支持Arduino和PICAXE两种脚本语言，如图1-85所示。设计者在选定脚本的编程语言后，就只能编写该语言的脚本，并将脚本保存成相应类型的后缀格式。同理，选定编程语言后，设计者也只能打开同种类型的脚本。

::: {.zhangyue-c}
![CmQUOF7V1GqEJimvAAAAAHLAbBo307498747.jpg](https://i.imgur.com/rpO36kh.jpeg){.zhangyue-img}

图1-84　编程界面
:::

选定脚本语言后，设计者还应该选择串行端口，从Fritzing界面可以看出，该软件一共有两个默认端口，分别是COM1和LPT1，如图1-86所示。当设计者将相应的微控制器连接到USB端口时，软件里会增加一个新的设备端口，然后可以根据自己的需求选择相应的端口。

::: {.zhangyue-c}
![CmQUOV7V1GqEV0KEAAAAAOPt4aI892455297.jpg](https://i.imgur.com/vjLJEuV.jpeg){.zhangyue-img2}

图1-85　支持编程语言
:::

::: {.zhangyue-c}
![CmQUOF7V1GqECflwAAAAAPQgrH8531808022.jpg](https://i.imgur.com/miYpBjk.jpeg){.zhangyue-img2}

图1-86　支持端口
:::

值得注意的是，虽然Fritzing提供了脚本编写器，但是它并没有内置编译器，所以设计者必须自行安装额外的编程软件将编写的脚本转换成可执行文件。但是，Fritzing只提供了和编程软件交互的方法，设计者可以通过单击图1-86所示的按钮获取相应的可执行文件信息，所有这些内容都显示在下面的控制端。
:::

[]{#chapter-11.xhtml}

::: {.h5_mainbody_bg1}
::: {.h5_rule_hv}
# 第2章 {.tpl-133-text-1-num}

::: {.tpl-133-div-line}
# 四旋翼飞行器项目设计 ![CmQUOF7V1G-EH2WXAAAAAF19EmE760897358.png](https://i.imgur.com/BT4xA7u.jpeg){.zhangyue-footnote} {.tpl-133-title-1-center}
:::

::: {.tpl-133-pic-center}
![CmQUOV7V1G-EPMjIAAAAALGIiMg413130245.png](https://i.imgur.com/syjv1wr.jpeg){.tpl-133-pic-img-h}
:::
:::
:::

::: {.calibre1}
本项目基于Arduino开发板，实现对四旋翼飞行器的控制。
:::

[]{#chapter-12.xhtml}

::: {.calibre1}
## 2.1　功能及总体设计 {.tpl-185-title}

::: {.tpl-185-box-cuxian}
:::

::: {.tpl-185-box-middle}
:::

本项目通过遥控器对飞行器发出一系列简单的操作，飞行器接收到信号后，输出相应的PWM波，控制空心杯直流电机的转速。同时，飞控板上的MPU6050模块会检测出飞行姿态与理想姿态的偏差，并输入到控制芯片中，飞行器上Arduino开发板的控制芯片在接收到两个信号后进行整合，结合PID算法，找到此刻偏差的理想输出值，从而消除误差，控制飞行。

要实现上述功能需将作品分成三部分进行设计，即MPU6050模块输入部分、遥控器控制输入部分和控制信号处理输出部分。MPU6050模块输入部分的主要功能是将飞行器计算出当前飞行数据，拟合当前的飞行姿态；遥控器控制输入部分是利用对频器，建立用户与飞行器之间的联系，使得用户能对飞行器进行简单的操控；控制信号处理输出部分的主要功能是将两个输入信号进行整合，以达到较快且较准的控制信号。

1．整体框架图

整体框架如图2-1所示。

::: {.zhangyue-c}
![CmQUOF7V1GqEEN6fAAAAAGcKoDU244528059.jpg](https://i.imgur.com/ILveUkh.jpeg){.zhangyue-img}

图2-1　整体框架图
:::

2．系统流程图

系统流程如图2-2所示。

::: {.zhangyue-c}
![CmQUOF7V1GuEBgFzAAAAANFbu8s673394357.jpg](https://i.imgur.com/OTu6QTd.jpeg){.zhangyue-img}

图2-2　系统流程图
:::

接通电源以后，程序内的各个变量被重新设置，当用户输入控制变量后，主程序开始工作，开发板根据输入信号强度输出PWM波控制直流电机转速，飞行器开始飞行。MPU6050检测飞行姿态，当有偏差时，经历PID算法，得到较为准确的输出量，等待用户无输入时，系统结束。

3．总电路图

系统总电路如图2-3所示，引脚连接如表2-1所示。

::: {.zhangyue-c}
![CmQUOF7V1GuEKoaeAAAAAG7mCfo341675790.jpg](https://i.imgur.com/4JVXp7k.jpeg){.zhangyue-img}

图2-3　系统总电路图
:::

::: {.zhangyue-c}
表2-1　引脚连接表

![CmQUOV7V1G2ETR1nAAAAAFdCjK4118182112.jpg](https://i.imgur.com/bmtMraH.jpeg){.zhangyue-img1}
:::
:::

[]{#chapter-13.xhtml}

::: {.calibre1}
## 2.2　模块介绍 {.tpl-185-title}

::: {.tpl-185-box-cuxian}
:::

::: {.tpl-185-box-middle}
:::

本项目主要包括主程序模块、PID算法模块和飞控核心处理模块。下面分别给出各模块的功能介绍及相关代码。

### 2.2.1　主程序模块 {#chapter-13.xhtml#AUTO_ID_18 .text-title}

本部分包括主程序模块的功能介绍及相关代码。

1．功能介绍

MPU6050为全球首例整合性6轴运动处理组件，与多组件相比，免除了组合陀螺仪与加速器时间轴之差的问题，减少了大量的封装空间。

2．相关代码

::: {.zhangyue-c}
![CmQUOV7V1GuELPDbAAAAAONclIk994568315.jpg](https://i.imgur.com/BhWeB0t.jpeg){.zhangyue-img}
:::

::: {.zhangyue-c}
![CmQUOF7V1GuEQAcRAAAAAGRIpRI058928896.jpg](https://i.imgur.com/BJPZHw7.jpeg){.zhangyue-img}
:::

::: {.zhangyue-c}
![CmQUOV7V1GuEPnUMAAAAAP4bCzQ253451531.jpg](https://i.imgur.com/42uJwK8.jpeg){.zhangyue-img}
:::

::: {.zhangyue-c}
![CmQUOV7V1GuECyO9AAAAAJebEe8306184283.jpg](https://i.imgur.com/9E2ZSkV.jpeg){.zhangyue-img}
:::

### 2.2.2　PID算法 {#chapter-13.xhtml#AUTO_ID_19 .text-title}

本部分包括PID算法的功能介绍及相关代码。

1．功能介绍

在过程控制中，按偏差的比例（P）、积分（I）和微分（D）进行控制PID控制器（亦称PID调节器）是应用最为广泛的一种自动控制器。它具有原理简单，易于实现，适用面广，控制参数相互独立，参数的选定比较简单等优点；而且在理论上可以证明，对于过程控制的典型对象------"一阶滞后＋纯滞后"与"二阶滞后＋纯滞后"的控制对象，PID控制器是最优控制。

2．相关代码

::: {.zhangyue-c}
![CmQUOF7V1GuER93NAAAAAIh1rK0661425369.jpg](https://i.imgur.com/UYtr10Z.jpeg){.zhangyue-img}
:::

::: {.zhangyue-c}
![CmQUOF7V1GuEO8k-AAAAAF4mnWs996911216.jpg](https://i.imgur.com/uCMmeF1.jpeg){.zhangyue-img}
:::

::: {.zhangyue-c}
![CmQUOV7V1GuED26NAAAAAEsyxR0668746486.jpg](https://i.imgur.com/vmC0aOz.jpeg){.zhangyue-img}
:::

### 2.2.3　飞控核心代码 {#chapter-13.xhtml#AUTO_ID_20 .text-title}

本部分主要包括飞控核心代码的功能介绍及相关代码。

1．功能介绍

飞控主要功能是将飞行器计算出的当前飞行数据，拟合出当前的飞行姿态。

2．相关代码

::: {.zhangyue-c}
![CmQUOF7V1GuEK7fuAAAAAPL3dpo898510177.jpg](https://i.imgur.com/AiFL705.jpeg){.zhangyue-img}
:::

::: {.zhangyue-c}
![CmQUOF7V1GuEcpbQAAAAAIRVQ40855808597.jpg](https://i.imgur.com/lURrvgi.jpeg){.zhangyue-img}
:::

::: {.zhangyue-c}
![CmQUOF7V1GuEPuokAAAAACAeouU310910800.jpg](https://i.imgur.com/V6qn2fv.jpeg){.zhangyue-img}
:::

::: {.zhangyue-c}
![CmQUOV7V1GuETb5YAAAAAE0kNVY613987034.jpg](https://i.imgur.com/jca0WRX.jpeg){.zhangyue-img}
:::

::: {.zhangyue-c}
![CmQUOF7V1GuEedggAAAAANMgd38779401497.jpg](https://i.imgur.com/tMPfDS7.jpeg){.zhangyue-img}
:::

::: {.zhangyue-c}
![CmQUOV7V1GuEMD2UAAAAAN_e-jo463313780.jpg](https://i.imgur.com/JPQ7Ver.jpeg){.zhangyue-img}
:::

::: {.zhangyue-c}
![CmQUOF7V1GuEdoqMAAAAAMp-iis827546477.jpg](https://i.imgur.com/NQyXq0R.jpeg){.zhangyue-img}
:::

::: {.zhangyue-c}
![CmQUOF7V1GuEEGewAAAAADlsigg550626793.jpg](https://i.imgur.com/W9iKvsu.jpeg){.zhangyue-img}
:::

::: {.zhangyue-c}
![CmQUOV7V1GuEAAatAAAAAMz_O8c495909756.jpg](https://i.imgur.com/hQlIW8Q.jpeg){.zhangyue-img}
:::

::: {.zhangyue-c}
![CmQUOV7V1GuEazXZAAAAAOGHOWI576533054.jpg](https://i.imgur.com/igCfp8G.jpeg){.zhangyue-img}
:::

::: {.zhangyue-c}
![CmQUOV7V1GuEFxKEAAAAACWdxlM477846195.jpg](https://i.imgur.com/xWaDcF8.jpeg){.zhangyue-img}
:::

::: {.zhangyue-c}
![CmQUOF7V1GuEbfBdAAAAAGJ5Frg883681463.jpg](https://i.imgur.com/O0ZYE0T.jpeg){.zhangyue-img}
:::

::: {.zhangyue-c}
![CmQUOV7V1GuEBzBlAAAAAJVXUh8672291048.jpg](https://i.imgur.com/RzZJsA0.jpeg){.zhangyue-img}
:::

::: {.zhangyue-c}
![CmQUOF7V1GuEXaOWAAAAAJoMv9Q766513579.jpg](https://i.imgur.com/40mGUCm.jpeg){.zhangyue-img}
:::

::: {.zhangyue-c}
![CmQUOV7V1GuEU2aCAAAAAPskmM8006520378.jpg](https://i.imgur.com/jp6FXZR.jpeg){.zhangyue-img}
:::

::: {.zhangyue-c}
![CmQUOF7V1GuEbeUOAAAAADwlZNs211685073.jpg](https://i.imgur.com/3F3kQyd.jpeg){.zhangyue-img}
:::

::: {.zhangyue-c}
![CmQUOV7V1GuEABgiAAAAAGW91ik872442110.jpg](https://i.imgur.com/PdFxevs.jpeg){.zhangyue-img}
:::

::: {.zhangyue-c}
![CmQUOV7V1GuEOWRnAAAAAL2eTmM454324534.jpg](https://i.imgur.com/C7kAAQ0.jpeg){.zhangyue-img}
:::

::: {.zhangyue-c}
![CmQUOF7V1GuEc-kyAAAAANltkfs887831052.jpg](https://i.imgur.com/kssjwC1.jpeg){.zhangyue-img}
:::

::: {.zhangyue-c}
![CmQUOF7V1GyETO2dAAAAANn6CfU728162310.jpg](https://i.imgur.com/BIPx1OB.jpeg){.zhangyue-img}
:::

::: {.zhangyue-c}
![CmQUOV7V1GyEb1w-AAAAAHy2M7w235042339.jpg](https://i.imgur.com/NwVWObp.jpeg){.zhangyue-img}
:::

::: {.zhangyue-c}
![CmQUOV7V1GyEeKMuAAAAABpM634885810865.jpg](https://i.imgur.com/9mEz1f6.jpeg){.zhangyue-img}
:::

::: {.zhangyue-c}
![CmQUOV7V1GyEE627AAAAAKU2eXs651171904.jpg](https://i.imgur.com/CfuACDh.jpeg){.zhangyue-img}
:::

::: {.zhangyue-c}
![CmQUOV7V1GyEMHqZAAAAAHaFN3k742600198.jpg](https://i.imgur.com/jVQJsDH.jpeg){.zhangyue-img}
:::

::: {.zhangyue-c}
![CmQUOF7V1GyESoSaAAAAAOCIYFs287020018.jpg](https://i.imgur.com/Nr2eaAd.jpeg){.zhangyue-img}
:::
:::

[]{#chapter-14.xhtml}

::: {.calibre1}
## 2.3　产品展示 {.tpl-185-title}

::: {.tpl-185-box-cuxian}
:::

::: {.tpl-185-box-middle}
:::

小飞行器如图2-4所示，大飞行器如图2-5所示。

::: {.zhangyue-c}
![CmQUOV7V1GyEKxdmAAAAAMa7eAI767287152.jpg](https://i.imgur.com/0LEf7pH.jpeg){.zhangyue-img2}

图2-4　小飞行器图
:::

::: {.zhangyue-c}
![CmQUOF7V1GyEDDykAAAAAFrinWY997109381.jpg](https://i.imgur.com/nhfGAMc.jpeg){.zhangyue-img}

图2-5　大飞行器图
:::
:::

[]{#chapter-15.xhtml}

::: {.calibre1}
## 2.4　元件清单 {.tpl-185-title}

::: {.tpl-185-box-cuxian}
:::

::: {.tpl-185-box-middle}
:::

完成本项目所用到的元件及数量如表2-2所示。

::: {.zhangyue-c}
表2-2　元件清单

![CmQUOF7V1G2EaFjZAAAAAB8e_I8690409258.jpg](https://i.imgur.com/C8ovYQb.jpeg){.zhangyue-img1}
:::
:::

[]{#chapter-16.xhtml}

::: {.h5_mainbody_bg1}
::: {.h5_rule_hv}
# 第3章 {.tpl-133-text-1-num}

::: {.tpl-133-div-line}
# 宇宙飞船大战小蜜蜂项目设计 ![CmQUOF7V1G-EH2WXAAAAAF19EmE760897358.png](https://i.imgur.com/9eHB46p.jpeg){.zhangyue-footnote} {.tpl-133-title-1-center}
:::

::: {.tpl-133-pic-center}
![CmQUOV7V1G-EPMjIAAAAALGIiMg413130245.png](https://i.imgur.com/qy8k9X7.jpeg){.tpl-133-pic-img-h}
:::
:::
:::

::: {.calibre1}
本项目通过Arduino开发板与Processing的结合制作一款软硬件飞行设计游戏。
:::

[]{#chapter-17.xhtml}

::: {.calibre1}
## 3.1　功能及总体设计 {.tpl-185-title}

::: {.tpl-185-box-cuxian}
:::

::: {.tpl-185-box-middle}
:::

本项目将Arduino开发板与PS2摇杆按钮模块相连，通过PS2摇杆 *X* 、 *Y* 两个坐标轴的运动输入到Processing转化为图像上主飞船，使用发射不同子弹和暂停重置功能。

要实现上述功能需将作品分成两部分进行设计，即Arduino开发板和Processing模块。Arduino开发板的主要功能是检测元件信号输入；Processing主要功能是作为游戏的载体显示游戏画面，并显示现有的分数，让使用者进行多种模式选择，可以单人或双人对战，并且敌机死亡后会掉落物品，飞船得到物品后加血及加子弹。

1．整体框架图

整体框架如图3-1所示。

::: {.zhangyue-c}
![CmQUOV7V1GyECzrKAAAAAICWtLs966844911.jpg](https://i.imgur.com/kSKBImO.jpeg){.zhangyue-img}

图3-1　整体框架图
:::

2．系统流程图

系统流程如图3-2所示。

::: {.zhangyue-c}
![CmQUOF7V1GyEPxn4AAAAAIHZGuc429449478.jpg](https://i.imgur.com/gJHKfPD.jpeg){.zhangyue-img}

图3-2　系统流程图
:::

程序启动后，初始化各对象，例如背景、主飞船，并且从positions.txt文件中读取历史分数。初始化结束后，进行模式选择，根据键盘按键所选择的数字显示模式。之后程序检测是否由摇杆控制，如未接入则由键盘控制，开始生成敌机，并且进行实时相撞检测。每次相撞检测都会判定主飞船是否有生命，若相撞则主飞船生命减1，直到主飞船生命为0，如判定主飞船无生命，游戏结束，窗口跳出"Game Over"字样。

3．总电路图

系统总电路如图3-3所示，引脚连接如表3-1所示。

::: {.zhangyue-c}
![CmQUOF7V1GyEHB6hAAAAAIhfHmk182961150.jpg](https://i.imgur.com/eMDAU43.jpeg){.zhangyue-img}

图3-3　系统总电路图
:::

::: {.zhangyue-c}
表3-1　引脚连接表

![CmQUOV7V1G6EbLBNAAAAAH8dZOw972708212.jpg](https://i.imgur.com/0NMwqsG.jpeg){.zhangyue-img1}
:::
:::

[]{#chapter-18.xhtml}

::: {.calibre1}
## 3.2　模块介绍 {.tpl-185-title}

::: {.tpl-185-box-cuxian}
:::

::: {.tpl-185-box-middle}
:::

本项目主要包括Processing模块和Arduino开发板模块。下面分别给出各模块的功能介绍及相关代码。

### 3.2.1　Processing模块 {#chapter-18.xhtml#AUTO_ID_21 .text-title}

本部分包括Processing模块的功能介绍及相关代码。

1．功能介绍

实时读取来自Arduino开发板传输的字符，解析主飞船飞行的行为。需要设计背景、子弹、爆炸、主飞船、敌机的类，实例化这些对象，让其在每一帧内更新绘图。统一设计display方法在画板上显示该对象。为了主程序清晰，需要创造一个share类把全局变量放入其中。由于类的传递是引用而不是值传递，所以接收这个变量的对象都可以实时获得主飞船的坐标。

2．相关代码

::: {.zhangyue-c}
![CmQUOV7V1GyEAHJjAAAAAAqISXc455782729.jpg](https://i.imgur.com/4Y6Ud7t.jpeg){.zhangyue-img}
:::

::: {.zhangyue-c}
![CmQUOF7V1GyEWkHDAAAAAAQWRUY809029861.jpg](https://i.imgur.com/XsWeh8E.jpeg){.zhangyue-img}
:::

::: {.zhangyue-c}
![CmQUOF7V1GyEYzXQAAAAAANAtfg764582691.jpg](https://i.imgur.com/Rp8jc8u.jpeg){.zhangyue-img}
:::

::: {.zhangyue-c}
![CmQUOV7V1GyEcd7uAAAAAKrtOlc989584281.jpg](https://i.imgur.com/QG777zo.jpeg){.zhangyue-img}
:::

::: {.zhangyue-c}
![CmQUOV7V1GyEOSCtAAAAAE7uKYI467532678.jpg](https://i.imgur.com/HypCNoV.jpeg){.zhangyue-img}
:::

::: {.zhangyue-c}
![CmQUOV7V1GyED2aPAAAAAHq9NPI429401599.jpg](https://i.imgur.com/4MYRtwf.jpeg){.zhangyue-img}
:::

::: {.zhangyue-c}
![CmQUOV7V1GyELaW5AAAAAP1bezg987074621.jpg](https://i.imgur.com/4Y2S9Cd.jpeg){.zhangyue-img}
:::

::: {.zhangyue-c}
![CmQUOF7V1F2EdeaWAAAAAPMKPZg890845175.jpg](https://i.imgur.com/V84D3UR.jpeg){.zhangyue-img}
:::

::: {.zhangyue-c}
![CmQUOF7V1GCENHsTAAAAAMPOiIg871548403.jpg](https://i.imgur.com/ji6s4Ir.jpeg){.zhangyue-img}
:::

::: {.zhangyue-c}
![CmQUOF7V1GOEEQW0AAAAAH28tvM680074265.jpg](https://i.imgur.com/blfiMLJ.jpeg){.zhangyue-img}
:::

::: {.zhangyue-c}
![CmQUOF7V1GaEYk0IAAAAAJtOLKw210516878.jpg](https://i.imgur.com/EcHmrrn.jpeg){.zhangyue-img}
:::

::: {.zhangyue-c}
![CmQUOV7V1GmEYGLKAAAAAFlKb3Y496434744.jpg](https://i.imgur.com/IYOAVjZ.jpeg){.zhangyue-img}
:::

::: {.zhangyue-c}
![CmQUOF7V1GyERT4wAAAAAMkE5Vk246886076.jpg](https://i.imgur.com/6itemD2.jpeg){.zhangyue-img}
:::

::: {.zhangyue-c}
![CmQUOF7V1G6ES9wbAAAAAOL0UVw889594774.jpg](https://i.imgur.com/6VtDsoZ.jpeg){.zhangyue-img}
:::

::: {.zhangyue-c}
![CmQUOF7V1G6ESSYwAAAAAC6VrZ0194679725.jpg](https://i.imgur.com/Dl7ehva.jpeg){.zhangyue-img}
:::

::: {.zhangyue-c}
![CmQUOF7V1G6EBtZrAAAAAPi6V_o819932482.jpg](https://i.imgur.com/hbIyDev.jpeg){.zhangyue-img}
:::

::: {.zhangyue-c}
![CmQUOF7V1F2EE0ntAAAAAHPK3o4139197341.jpg](https://i.imgur.com/D6wkjXL.jpeg){.zhangyue-img}
:::

::: {.zhangyue-c}
![CmQUOF7V1F2EVSFlAAAAAGu0blw267912440.jpg](https://i.imgur.com/OSsPpsW.jpeg){.zhangyue-img}
:::

::: {.zhangyue-c}
![CmQUOV7V1F6EIqNNAAAAAOzw2-g981732967.jpg](https://i.imgur.com/SSH3mLy.jpeg){.zhangyue-img}
:::

::: {.zhangyue-c}
![CmQUOV7V1F6EDIG_AAAAAOLxsbg909084232.jpg](https://i.imgur.com/IN1rKch.jpeg){.zhangyue-img}
:::

::: {.zhangyue-c}
![CmQUOV7V1F6EDCSKAAAAAOP18po052422156.jpg](https://i.imgur.com/YPTn3Pz.jpeg){.zhangyue-img}
:::

### 3.2.2　Arduino开发板模块 {#chapter-18.xhtml#AUTO_ID_22 .text-title}

本部分包括Arduino开发板模块的功能介绍及相关代码。

1．功能介绍

Arduino开发板检测到摇杆和按钮电位电压变化，经过模数转换得到数字量，再通过串口向计算机发送相关字符串，读取后实现相应操作。由于是以字符流进行传送的，需要设置标志位来确定一条状态信息的开始和结束。元件包括PS2模块、按钮模块、Arduino开发板和导线若干。

2．相关代码

::: {.zhangyue-c}
![CmQUOV7V1F-ETikLAAAAAJvlTVU372209543.jpg](https://i.imgur.com/XSnzrDi.jpeg){.zhangyue-img}
:::

::: {.zhangyue-c}
![CmQUOV7V1F-EH0TjAAAAADM0OHU802204553.jpg](https://i.imgur.com/oYPvas8.jpeg){.zhangyue-img}
:::
:::

[]{#chapter-19.xhtml}

::: {.calibre1}
## 3.3　产品展示 {.tpl-185-title}

::: {.tpl-185-box-cuxian}
:::

::: {.tpl-185-box-middle}
:::

整体外观如图3-4所示，上方是两个摇杆输入部分，中间是5个按钮模块，按钮模块下方是连接有导线的面包板，底部是Arduino开发板，通过导线与计算机相连。游戏开始界面如图3-5所示，单人模式游戏界面如图3-6所示，双人模式游戏界面如图3-7所示。

::: {.zhangyue-c}
![CmQUOV7V1F-EUwEIAAAAAGupfLU244111923.jpg](https://i.imgur.com/lJeLqN5.jpeg){.zhangyue-img}

图3-4　整体外观图
:::

::: {.zhangyue-c}
![CmQUOV7V1F-EQqPwAAAAACyKrG8582073396.jpg](https://i.imgur.com/Awfi6pI.jpeg){.zhangyue-img}

图3-5　游戏开始界面图
:::

::: {.zhangyue-c}
![CmQUOV7V1GCEOJVdAAAAAD7kO9k774106869.jpg](https://i.imgur.com/1unaIB4.jpeg){.zhangyue-img}

图3-6　单人模式界面图
:::

::: {.zhangyue-c}
![CmQUOV7V1GCEKiXaAAAAAJMzKhc717983688.jpg](https://i.imgur.com/g3BJylI.jpeg){.zhangyue-img}

图3-7　双人模式界面图
:::
:::

[]{#chapter-20.xhtml}

::: {.calibre1}
## 3.4　元件清单 {.tpl-185-title}

::: {.tpl-185-box-cuxian}
:::

::: {.tpl-185-box-middle}
:::

完成本项目所用到的元件及数量如表3-2所示。

::: {.zhangyue-c}
表3-2　元件清单

![CmQUOV7V1GyEHh8KAAAAAMcCZig642467019.jpg](https://i.imgur.com/4sWcUvw.jpeg){.zhangyue-img1}
:::
:::

[]{#chapter-21.xhtml}

::: {.h5_mainbody_bg1}
::: {.h5_rule_hv}
# 第4章 {.tpl-133-text-1-num}

::: {.tpl-133-div-line}
# 自动避障环境监测小车项目设计 ![CmQUOF7V1G-EH2WXAAAAAF19EmE760897358.png](https://i.imgur.com/iARNohI.jpeg){.zhangyue-footnote} {.tpl-133-title-1-center}
:::

::: {.tpl-133-pic-center}
![CmQUOV7V1G-EPMjIAAAAALGIiMg413130245.png](https://i.imgur.com/BZW3QlN.jpeg){.tpl-133-pic-img-h}
:::
:::
:::

::: {.calibre1}
本项目基于Arduino开发板结合ESP8266模块、HC-05模块、温湿度传感器、OneNET云平台，利用小车的优势，实现综合环境指标测量、分析与预警的功能。
:::

[]{#chapter-22.xhtml}

::: {.calibre1}
## 4.1　功能及总体设计 {.tpl-185-title}

::: {.tpl-185-box-cuxian}
:::

::: {.tpl-185-box-middle}
:::

本项目实现自动避障与红外遥控，环境数据的采集、统计、播报与预警的功能。用户通过红外遥控器实现手动控制，利用超声波模块实现自动驾驶；此外，用户既可以选择在手机端接收环境数据的实时播报，也可以选择在计算机端接收环境数据的统计分析结果。当环境指标异常时，可通过邮件与推送收到预警。

要实现上述功能需将作品分成五部分进行设计，即输入部分、处理部分、驱动部分、传输部分和输出部分。输入部分为直流电机驱动与Arduino开发板供电，红外遥控器输入红外信号，温湿度传感器采集温湿度数据；处理部分通过Arduino开发板与NodeMCU程序实现；驱动部分通过直流减速电机驱动实现车轮差速转动；传输部分选用了ESP8266模块、HC-05模块与Arduino开发板实现温湿度数据传输；输出部分选择在OneNET云平台、蓝牙APP助手上输出环境数据。

1．整体框架图

整体框架如图4-1所示。

::: {.zhangyue-c}
![CmQUOF7V1GGETRWOAAAAAJK9Fqo822527768.jpg](https://i.imgur.com/GYWv2L3.jpeg){.zhangyue-img1}

图4-1　整体框架图
:::

2．系统流程图

系统流程如图4-2所示。

::: {.zhangyue-c}
![CmQUOV7V1GGEZ8QCAAAAAI4BBrc312924159.jpg](https://i.imgur.com/tdpm9kN.jpeg){.zhangyue-img1}

图4-2　系统流程（主程序）
:::

在主程序流程图中，关于手动的实现，采用红外遥控按键的方式进行控制：当按下"0"键时，执行"否"状态，实现自动避障的功能；按方向键（上、下、左、右）时，执行"是"状态，控制直流电机实现小车的运动；当按下"OK"键时，小车停止运动；当不按键或按键无效时，维持上一按键的状态。在环境数据采集分析部分的流程图中，为方便控制，统一采用红外遥控手动控制小车运动的模式。

3．总电路图

系统总电路如图4-3所示，引脚连接如表4-1所示。本项目选用了两块Arduino开发板（Ⅰ、Ⅱ），一块供给主程序（Arduino开发板Ⅰ），另一块供给蓝牙环境采集系统（Arduino开发板Ⅱ）。

::: {.zhangyue-c}
![CmQUOV7V1GGEaQVzAAAAAD5Rbcg306564075.jpg](https://i.imgur.com/NwW1yc3.jpeg){.zhangyue-img}

图4-3　系统总电路图
:::

::: {.zhangyue-c}
表4-1　引脚连接表

![CmQUOF7V1GyEai09AAAAABJCpmQ072244920.jpg](https://i.imgur.com/DgB7UUq.jpeg){.zhangyue-img1}
:::
:::

[]{#chapter-23.xhtml}

::: {.calibre1}
## 4.2　模块介绍 {.tpl-185-title}

::: {.tpl-185-box-cuxian}
:::

::: {.tpl-185-box-middle}
:::

本项目主要包括主程序模块（自动控制与遥控模块、机械传动模块）、蓝牙环境采集分析模块、WiFi环境采集分析模块。下面分别给出各模块的功能介绍及相关代码。

### 4.2.1　主程序模块 {#chapter-23.xhtml#AUTO_ID_23 .text-title}

本部分包括主程序模块（自动控制与遥控模块、机械传动模块）的功能介绍及相关代码。

1．功能介绍

通过红外遥控器对实现的功能进行选择。当输入"0"时进入自动行驶状态，通过超声波的回波时间进行距离测量（ *s* ＝ *vt* /2），当直行到达预警值时，控制车轮停止倒退，并左转一定时间，直到车头到墙面的距离大于预警值，继续运行。当输入方向键时，根据直流电机驱动的函数决定驱动方式，进而实现手动遥控。

以上均用到了NEC编解码协议，电路如图4-4所示（图中只画出2个直流电机，实际使用4个直流电机，每2个直流电机并联）。

::: {.zhangyue-c}
![CmQUOF7V1GKECXBxAAAAAB8Emt8733818502.jpg](https://i.imgur.com/yQl8ksf.jpeg){.zhangyue-img}

图4-4　主程序模块电路图
:::

2．相关代码

::: {.zhangyue-c}
![CmQUOF7V1GGEdIhNAAAAAHom0K4867219893.jpg](https://i.imgur.com/OyApJ3e.jpeg){.zhangyue-img}
:::

::: {.zhangyue-c}
![CmQUOV7V1GKEecPJAAAAANONvAM344527600.jpg](https://i.imgur.com/9Y10c13.jpeg){.zhangyue-img}
:::

::: {.zhangyue-c}
![CmQUOF7V1GKERmWNAAAAANxQ5OM393809389.jpg](https://i.imgur.com/m3uwNxk.jpeg){.zhangyue-img}
:::

::: {.zhangyue-c}
![CmQUOV7V1GOENaZQAAAAAIVeL5Q774279638.jpg](https://i.imgur.com/wdnWsCq.jpeg){.zhangyue-img}
:::

### 4.2.2　蓝牙环境采集分析模块 {#chapter-23.xhtml#AUTO_ID_24 .text-title}

本部分包括蓝牙环境采集分析模块（环境数据采集模块、蓝牙传输模块）的功能介绍及相关代码。

1．功能介绍

本部分通过DHT11传感器采集环境的温湿度数据（传感器保存数据为32位高低电平数组），执行相关函数对数组的值进行处理。HC-05蓝牙模块将得到的温度（temp）、湿度（humi）与校对码（tol）上传至与蓝牙模块连接的SPP串口助手（手机端）上。若环境指标异常，上传"DANGER！"。为验证蓝牙模块是否工作正常，设置了一个蓝牙开关，对车上的蓝色LED进行控制，电路如图4-5所示。

::: {.zhangyue-c}
![CmQUOV7V1GOERwJJAAAAADxXPFc824845553.jpg](https://i.imgur.com/eJXz1ug.jpeg){.zhangyue-img}

图4-5　蓝牙环境采集分析模块电路图
:::

2．蓝牙模块简介

蓝牙模块引脚如图4-6所示。

HC-05模块需要先连接USB-TTL转接口，利用AT指令进行调试（sscom42串口助手），电路如图4-7所示，蓝牙模块调试示意如图4-8所示。

调试结束后，与Arduino开发板连接，通过蓝牙将环境数据上传至SPP蓝牙串口助手（前提是手机端已经与HC-05蓝牙模块配对）。

::: {.zhangyue-c}
![CmQUOV7V1GOESbIrAAAAAP7G2ck376664938.jpg](https://i.imgur.com/epFSLzR.jpeg){.zhangyue-img}

图4-6　HC-05蓝牙模块引脚图
:::

::: {.zhangyue-c}
![CmQUOF7V1GSEZOI5AAAAABKJZvo545744259.jpg](https://i.imgur.com/MFl8Cae.jpeg){.zhangyue-img2}

图4-7　蓝牙模块调试电路图
:::

::: {.zhangyue-c}
![CmQUOF7V1GSEElprAAAAAGOpA7E005365827.jpg](https://i.imgur.com/33H8zaY.jpeg){.zhangyue-img}

图4-8　蓝牙模块调试示意图
:::

蓝牙模块的灯可以反映其工作状态：快速闪烁表示接入成功；每隔2s闪烁表示AT模式；每隔2s快闪2次表示连接其他蓝牙设备成功。

关于蓝牙模块波特率选择的说明：当用户使用AT指令与HC-05蓝牙模块通信时，波特率为38400；当HC-05蓝牙模块与其他蓝牙设备通信时，波特率为9600。为方便使用，将HC-05波特率统一设置为38400。实测表明，当HC-05波特率为38400时，收到数据误码率更低。

3．SPP蓝牙串口助手简介

SPP蓝牙串口助手有聊天、终端、键盘、开关等功能，在使用前需要先点"连接"与蓝牙设备连接，软件界面示意如图4-9所示。此后，可以在串口监视器、聊天、终端收到传输的数据，串口监视器收到传输数据如图4-10所示，SPP终端页收到传输数据如图4-11所示，蓝牙开关设置如图4-12所示。

::: {.zhangyue-c}
![CmQUOV7V1GSEFkOzAAAAAIhP4cg936199015.jpg](https://i.imgur.com/BcYo33v.jpeg){.zhangyue-img2}

图4-9　SPP设备连接界面
:::

::: {.zhangyue-c}
![CmQUOF7V1GSEK-lrAAAAAF2f3q4963424438.jpg](https://i.imgur.com/HaWcc9u.jpeg){.zhangyue-img2}

图4-10　串口监视器收到传输数据
:::

::: {.zhangyue-c}
![CmQUOV7V1GWEB4-BAAAAANH0w3Q069809732.jpg](https://i.imgur.com/yZOyx9W.jpeg){.zhangyue-img2}

图4-11　SPP终端页收到传输数据
:::

::: {.zhangyue-c}
![CmQUOV7V1GWEDj4FAAAAAMwaw2U212402405.jpg](https://i.imgur.com/ONDGkpJ.jpeg){.zhangyue-img2}

图4-12　蓝牙开关设置示意图
:::

4．相关代码

::: {.zhangyue-c}
![CmQUOV7V1GWEXQLCAAAAABWBR4M374856362.jpg](https://i.imgur.com/afCZEA0.jpeg){.zhangyue-img}
:::

::: {.zhangyue-c}
![CmQUOV7V1GaEDHpqAAAAAC269sE631204171.jpg](https://i.imgur.com/ts6nxtB.jpeg){.zhangyue-img}
:::

::: {.zhangyue-c}
![CmQUOV7V1GaEGBH9AAAAAFpFWoo880571275.jpg](https://i.imgur.com/pD6yL6A.jpeg){.zhangyue-img}
:::

### 4.2.3　WiFi环境采集分析模块 {#chapter-23.xhtml#AUTO_ID_25 .text-title}

本部分包括WiFi环境采集分析模块（环境数据采集模块、WiFi传输模块）的功能介绍及相关代码。

1．功能介绍

通过DHT11传感器采集环境的温湿度数据（传感器保存数据为32位高低电平数组），执行相关函数对数组的值进行处理。然后，ESP8266模块在MCU模式下，将得到的温度、湿度等数据上传至OneNET云平台。云平台上的内置应用根据收到的数据，绘制折线图与仪表图，且当环境达到危险值时执行触发器，向邮箱发送预警邮件，电路如图4-13所示。

::: {.zhangyue-c}
![CmQUOF7V1GaEeZpPAAAAABn4TOo768729815.jpg](https://i.imgur.com/bfGqGhT.jpeg){.zhangyue-img}

图4-13　WiFi环境采集分析模块电路图
:::

2．WiFi模块简介

在使用ESP8266模块实现功能时，Arduino开发板搭载传输数据成功后，尝试脱离Arduino开发板利用ESP8266传输数据，也可以成功上传，如图4-14所示。

::: {.zhangyue-c}
![CmQUOF7V1GeES6o9AAAAAMPEoNc348240263.jpg](https://i.imgur.com/PndyvXU.jpeg){.zhangyue-img}

图4-14　ESP8266 WiFi模块引脚图
:::

搭载Arduino开发板时，ESP8266模块需要先连接USB-TTL转接口，利用AT指令进行调试。

调试分为三部分：客户端调试（sscom42串口助手）、数据传输调试（串口助手＋NetAssist）、透传调试（USR-TCP232）。调试结束后，即可与Arduino开发板连接，在透传模式下将环境数据以JSON数据流上传至OneNET云平台。

不搭载Arduino开发板时：需要先对ESP8266模块进行固件烧录（烧录软件为ESP8266 Flasher，网上有integer与float型的固件，本项目选择了前者），固件烧录软件示意如图4-15所示，电路如图4-16所示。

::: {.zhangyue-c}
![CmQUOV7V1GeEfA7pAAAAAP3kqQ4678261167.jpg](https://i.imgur.com/cJHoCib.jpeg){.zhangyue-img}

图4-15　固件烧录软件示意图
:::

::: {.zhangyue-c}
![CmQUOF7V1GeEDAHbAAAAAK0i-tA019966624.jpg](https://i.imgur.com/WcpiU9B.jpeg){.zhangyue-img}

图4-16　固件烧录电路图
:::

烧录后，安装ESPlorer（或NodeMCU Studio），无须调试，即可通过lua程序实现功能，传输示意如图4-17所示。

::: {.zhangyue-c}
![CmQUOF7V1GeEAetKAAAAAL_SBaY506260371.jpg](https://i.imgur.com/rqrDI2R.jpeg){.zhangyue-img}

图4-17　ESPlorer软件数据传输示意
:::

3．OneNET云平台简介

OneNET云平台由中国移动公司开发，注册后进入"开发者中心"，即可开始使用，如图4-18所示。

::: {.zhangyue-c}
![CmQUOV7V1GiENXHyAAAAAO3y5b8815496521.jpg](https://i.imgur.com/YFQCNWc.jpeg){.zhangyue-img}

图4-18　开发者中心页示意图
:::

1）项目创建

单击"创建产品"，顺次填写各项内容，其中在"设备接入协议"中，默认是HTTP，作为WiFi模块开发，还可以选择EDP、MQTT协议。创建产品结束后，进入产品页，如图4-19所示。

::: {.zhangyue-c}
![CmQUOF7V1GiEPaInAAAAAAu9_sQ888829018.jpg](https://i.imgur.com/QEMLYDy.jpeg){.zhangyue-img}

图4-19　产品页示意图
:::

2）数据设置

单击"设备管理"，添加新设备（设备编号可任意填写），添加后获得设备ID，如图4-20所示。数据流可以不添加，数据传输成功后会根据程序自动设置关联数据流。

::: {.zhangyue-c}
![CmQUOF7V1GiEMczuAAAAAP0J3r8723889149.jpg](https://i.imgur.com/Hsil9Zo.jpeg){.zhangyue-img}

图4-20　设备管理示意图
:::

为将数据上传至云平台，需要的关键信息为：服务器地址（183.230.40.33）及端口号（80）、设备ID、API Key、Host地址（api.heclouds.com）。

3）数据分析

单击"触发器管理"，可以添加触发器。在数据达到设置的临界值时，即可通过邮箱或URL发送预警信息。云平台添加触发器示意如图4-21所示，触发器预警邮件示意如图4-22所示。

::: {.zhangyue-c}
![CmQUOV7V1GmEdNSSAAAAAC3qkzo852572421.jpg](https://i.imgur.com/ORxZq4X.jpeg){.zhangyue-img}

图4-21　云平台添加触发器示意图
:::

::: {.zhangyue-c}
![CmQUOV7V1GmEOpCxAAAAAAavKmc687325898.jpg](https://i.imgur.com/NdBsPkU.jpeg){.zhangyue-img2}

图4-22　触发器预警邮件示意图
:::

单击"应用管理"，创建应用。根据自己的喜好进行设置，可以将数据以不同的统计形式进行展示。环境数据展示（折线图）如图4-23所示，环境数据展示（仪表盘）如图4-24所示。

::: {.zhangyue-c}
![CmQUOV7V1GmEPKGBAAAAAGrnSv4743966135.jpg](https://i.imgur.com/wOXGv6z.jpeg){.zhangyue-img}

图4-23　环境数据展示（折线图）
:::

::: {.zhangyue-c}
![CmQUOV7V1GqEB3GWAAAAAFscN48907134740.jpg](https://i.imgur.com/aCJffwB.jpeg){.zhangyue-img}

图4-24　环境数据展示（仪表盘）
:::

4．相关代码

::: {.zhangyue-c}
![CmQUOF7V1GqEGn5EAAAAAMm7z6s695814913.jpg](https://i.imgur.com/BngaGPC.jpeg){.zhangyue-img}
:::

::: {.zhangyue-c}
![CmQUOF7V1GqEGYUOAAAAAN903_E885595708.jpg](https://i.imgur.com/gYKFdEB.jpeg){.zhangyue-img}
:::

::: {.zhangyue-c}
![CmQUOV7V1GqEHZ_4AAAAAFOmXlI462056312.jpg](https://i.imgur.com/yswbill.jpeg){.zhangyue-img}
:::

::: {.zhangyue-c}
![CmQUOV7V1GuEf64CAAAAAJ8Z1WY571033258.jpg](https://i.imgur.com/XTYBZUc.jpeg){.zhangyue-img}
:::

::: {.zhangyue-c}
![CmQUOV7V1GuEPTzCAAAAAPeTrHM212832394.jpg](https://i.imgur.com/KiHvK4Q.jpeg){.zhangyue-img}
:::

::: {.zhangyue-c}
![CmQUOF7V1GyEWt7KAAAAAB9gTlY014002193.jpg](https://i.imgur.com/ThyXDUW.jpeg){.zhangyue-img}
:::
:::

[]{#chapter-24.xhtml}

::: {.calibre1}
## 4.3　产品展示 {.tpl-185-title}

::: {.tpl-185-box-cuxian}
:::

::: {.tpl-185-box-middle}
:::

自动避障环境监测小车整体外观如图4-25所示。车头在左，车尾在右，自上而下有3层。最上层正前方为超声波传感器，自左向右为2个9V电池、2块Arduino开发板、蓝牙模块、温湿度传感器、L298N驱动板；车的中层竖置6节5号电池，斜置小移动电源、USB-TTL、ESP8266模块、温湿度传感器；车下层为4个直流减速电机与车轮。

::: {.zhangyue-c}
![CmQUOF7V1GyERag0AAAAAGn6Sog538185029.jpg](https://i.imgur.com/BxV6h81.jpeg){.zhangyue-img}

图4-25　整体外观图
:::
:::

[]{#chapter-25.xhtml}

::: {.calibre1}
## 4.4　元件清单 {.tpl-185-title}

::: {.tpl-185-box-cuxian}
:::

::: {.tpl-185-box-middle}
:::

完成本项目所用到的元件及数量如表4-2所示。

::: {.zhangyue-c}
表4-2　元件清单

![CmQUOV7V1GyEOUL-AAAAAEbxlqg119154053.jpg](https://i.imgur.com/SSDkmzH.jpeg){.zhangyue-img1}
:::
:::

[]{#chapter-26.xhtml}

::: {.h5_mainbody_bg1}
::: {.h5_rule_hv}
# 第5章 {.tpl-133-text-1-num}

::: {.tpl-133-div-line}
# 智能导盲杖项目设计 ![CmQUOF7V1G-EH2WXAAAAAF19EmE760897358.png](https://i.imgur.com/2idb8k0.jpeg){.zhangyue-footnote} {.tpl-133-title-1-center}
:::

::: {.tpl-133-pic-center}
![CmQUOV7V1G-EPMjIAAAAALGIiMg413130245.png](https://i.imgur.com/rsydopr.jpeg){.tpl-133-pic-img-h}
:::
:::
:::

::: {.calibre1}
本项目基于Arduino平台设计一款智能导盲杖，给盲人提供远处超声波扫描雷达提示，并且能够让家人通过高德导航对盲人所在的位置以及行走路线进行实时监控。
:::

[]{#chapter-27.xhtml}

::: {.calibre1}
## 5.1　功能及总体设计 {.tpl-185-title}

::: {.tpl-185-box-cuxian}
:::

::: {.tpl-185-box-middle}
:::

通过Arduino开发板控制HC-SR04超声波传感器实时判断距离、蜂鸣器响声反馈距离。通过GSM模块使用MQTT将GPS实时数据传输到服务器，服务器采用MySQL＋Python架构，结合高德地图API显示位置信息，查询指定时间的轨迹。

要实现上述功能需将作品分成四部分进行设计，即输入部分、处理部分、传输部分和输出部分。输入部分选用HC-SR04超声波距离传感器和M&N GPS模块；处理部分主要通过C++程序实现；传输部分选用了GSM模块配合Arduino开发板实现；输出部分使用蜂鸣器。

1．整体框架图

整体框架如图5-1所示。

::: {.zhangyue-c}
![CmQUOF7V1G2EavYvAAAAAMH-wfQ480353926.jpg](https://i.imgur.com/gd1c2Ol.jpeg){.zhangyue-img}

图5-1　整体框架图
:::

2．系统流程图

系统流程如图5-2所示。

3．总电路图

系统总电路如图5-3所示，引脚连接如表5-1所示。

::: {.zhangyue-c}
![CmQUOV7V1G2EG-MKAAAAAByH2do367996064.jpg](https://i.imgur.com/dlHpGc9.jpeg){.zhangyue-img}

图5-2　系统流程图
:::

::: {.zhangyue-c}
![CmQUOF7V1G2EOZafAAAAAPj3P58401749277.jpg](https://i.imgur.com/nfaSHrz.jpeg){.zhangyue-img}

图5-3　系统总电路图
:::

::: {.zhangyue-c}
表5-1　引脚连接表

![CmQUOV7V1GyEcedBAAAAAJbp6J4223362826.jpg](https://i.imgur.com/gpzKRBU.jpeg){.zhangyue-img1}
:::
:::

[]{#chapter-28.xhtml}

::: {.calibre1}
## 5.2　模块介绍 {.tpl-185-title}

::: {.tpl-185-box-cuxian}
:::

::: {.tpl-185-box-middle}
:::

本项目主要包括超声波模块、GSM模块、GPS模块、蜂鸣器播报模块、定位与轨迹模块。下面分别给出各模块的功能介绍及相关代码。

### 5.2.1　超声波测距模块 {#chapter-28.xhtml#AUTO_ID_26 .text-title}

本部分包括超声波测距模块的功能介绍及相关代码。

1．功能介绍

Arduino开发板给超声波传感器发送触发信号，传感器自动发送并检测，开发板接收超声波传感器的回响信号便能测得障碍物的距离。元件包括Arduino开发板和3个传感器。

2．相关代码

``` {.code}
    int distance（）{
      digitalWrite（TrigPin, LOW）;
      delayMicroseconds（4）;
      digitalWrite（TrigPin, HIGH）;
      delayMicroseconds（10）;
      digitalWrite（TrigPin, LOW）;
      //检测脉冲宽度,并计算距离
      return pulseIn（EchoPin, HIGH, 300000L）/58;
    }
```

### 5.2.2　GPS模块 {#chapter-28.xhtml#AUTO_ID_27 .text-title}

本部分包括M&N GPS模块的功能介绍及相关代码。

1．功能介绍

GPS模块集成了RF射频芯片、基带芯片和核心CPU，并加上相关外围电路而组成的一个集成电路。GPS模块整合灵敏度高、功耗低，可同时追踪20颗卫星，并迅速确定1Hz导航更新。通过GPS模块获取到所在的经纬度数据，传送到Arduino开发板。元件包括M&N GPS模块、Arduino开发板和导线若干，电路如图5-4所示。

::: {.zhangyue-c}
![CmQUOF7V1G6ETbfaAAAAAI7nnGk800777036.jpg](https://i.imgur.com/UHDOldI.jpeg){.zhangyue-img}

图5-4　GPS模块与Arduino开发板连线图
:::

2．相关代码

::: {.zhangyue-c}
![CmQUOF7V1G6EFIUUAAAAADTxcqE878428437.jpg](https://i.imgur.com/PnaQVY0.jpeg){.zhangyue-img}
:::

::: {.zhangyue-c}
![CmQUOV7V1G6EFNg3AAAAAGBC3eM891920132.jpg](https://i.imgur.com/1oi7Q5j.jpeg){.zhangyue-img}
:::

::: {.zhangyue-c}
![CmQUOV7V1G6EFvMLAAAAAIgiomQ262514402.jpg](https://i.imgur.com/sKdWWaN.jpeg){.zhangyue-img}
:::

::: {.zhangyue-c}
![CmQUOF7V1G6EJ3frAAAAAMYYBuQ002916193.jpg](https://i.imgur.com/wvmGepo.jpeg){.zhangyue-img}
:::

::: {.zhangyue-c}
![CmQUOV7V1G6EO-aGAAAAAF7hmlM505827517.jpg](https://i.imgur.com/yMhCjIM.jpeg){.zhangyue-img}
:::

### 5.2.3　GSM模块 {#chapter-28.xhtml#AUTO_ID_28 .text-title}

本部分包括GSM模块的功能介绍及相关代码。

1．功能介绍

GSM模块使用SIM800C，SIM800C是一款四频GSM/GPRS模块，为城堡孔封装。SIM800C工作频率为GSM/GPRS 850/900/1800/1900MHz，可以低功耗实现语音、SMS和数据信息的传输。元件包括GSM800C模块、Arduino开发板和导线若干，原理如图5-5所示。

::: {.zhangyue-c}
![CmQUOV7V1G6EPbj1AAAAALiO3X4756024374.jpg](https://i.imgur.com/2qheE3b.jpeg){.zhangyue-img}

图5-5　输出电路原理图
:::

2．相关代码

::: {.zhangyue-c}
![CmQUOV7V1G6EdxjYAAAAADfoyiQ617378351.jpg](https://i.imgur.com/8EILCEQ.jpeg){.zhangyue-img}
:::

### 5.2.4　蜂鸣器模块 {#chapter-28.xhtml#AUTO_ID_29 .text-title}

本部分包括蜂鸣器模块的功能介绍及相关代码。

1．功能介绍

蜂鸣器模块是在超声波模块测出与障碍物距离，通过蜂鸣器的响声对盲人进行反馈。为了能有效地给予反馈，本模块模仿汽车倒车雷达，通过响声的频率感知与障碍物的距离，距离越近，响声越急促，从而提醒盲人及时更改路线。元件包括蜂鸣器、Arduino开发板和导线若干，电路如图5-6所示。

::: {.zhangyue-c}
![CmQUOV7V1G6ERB5kAAAAAJ4vygk559970555.jpg](https://i.imgur.com/TydgwjY.jpeg){.zhangyue-img}

图5-6　输出电路原理图
:::

2．相关代码

::: {.zhangyue-c}
![CmQUOV7V1G6EVGP0AAAAAPvxyrU685061733.jpg](https://i.imgur.com/uJMA2vq.jpeg){.zhangyue-img}
:::

### 5.2.5　定位与轨迹模块 {#chapter-28.xhtml#AUTO_ID_30 .text-title}

1．功能介绍

定位与轨迹模块是服务器收到GSM传来的经纬度数据后，在服务器采用MySQL＋Python架构结合高德地图API实时显示位置信息，可查询指定时间的轨迹。

2．相关代码

::: {.zhangyue-c}
![CmQUOF7V1G6EM_m_AAAAACbqbrw775178857.jpg](https://i.imgur.com/VOVFghG.jpeg){.zhangyue-img1}
:::

::: {.zhangyue-c}
![CmQUOV7V1G6EHprvAAAAABhSwwI406571926.jpg](https://i.imgur.com/6Gyo2XW.jpeg){.zhangyue-img}
:::

::: {.zhangyue-c}
![CmQUOV7V1G6EQspDAAAAAFoJc3s979594363.jpg](https://i.imgur.com/4u8SWOm.jpeg){.zhangyue-img}
:::

::: {.zhangyue-c}
![CmQUOV7V1G6EHJvfAAAAAE0Nqbs053300451.jpg](https://i.imgur.com/QBStLFc.jpeg){.zhangyue-img}
:::

::: {.zhangyue-c}
![CmQUOF7V1G6EXX4yAAAAAM9VM5Q627033501.jpg](https://i.imgur.com/zNEjIMl.jpeg){.zhangyue-img}
:::

::: {.zhangyue-c}
![CmQUOV7V1G6Ed5QrAAAAAIwKWVo101893281.jpg](https://i.imgur.com/xvkkhKP.jpeg){.zhangyue-img}
:::

::: {.zhangyue-c}
![CmQUOV7V1G6EfGqlAAAAAAuJeLE567954969.jpg](https://i.imgur.com/rQgsf3b.jpeg){.zhangyue-img}
:::

::: {.zhangyue-c}
![CmQUOF7V1G6EfXYfAAAAADZmLzM904686305.jpg](https://i.imgur.com/Ukm3ztV.jpeg){.zhangyue-img}
:::
:::

[]{#chapter-29.xhtml}

::: {.calibre1}
## 5.3　产品展示 {.tpl-185-title}

::: {.tpl-185-box-cuxian}
:::

::: {.tpl-185-box-middle}
:::

整体外观如图5-7所示。

::: {.zhangyue-c}
![CmQUOV7V1G6ENxxLAAAAANFNBWM256357277.jpg](https://i.imgur.com/uPUHaVB.jpeg){.zhangyue-img2}

图5-7　整体外观图
:::
:::

[]{#chapter-30.xhtml}

::: {.calibre1}
## 5.4　元件清单 {.tpl-185-title}

::: {.tpl-185-box-cuxian}
:::

::: {.tpl-185-box-middle}
:::

完成本项目所用到的元件及数量如表5-2所示。

::: {.zhangyue-c}
表5-2　元件清单

![CmQUOF7V1GyEYQN5AAAAANb0GYQ648738639.jpg](https://i.imgur.com/lbAmBrH.jpeg){.zhangyue-img1}
:::
:::

[]{#chapter-31.xhtml}

::: {.h5_mainbody_bg1}
::: {.h5_rule_hv}
# 第6章 {.tpl-133-text-1-num}

::: {.tpl-133-div-line}
# 微四轴飞行器项目设计 ![CmQUOF7V1G-EH2WXAAAAAF19EmE760897358.png](https://i.imgur.com/zpuyG1u.jpeg){.zhangyue-footnote} {.tpl-133-title-1-center}
:::

::: {.tpl-133-pic-center}
![CmQUOV7V1G-EPMjIAAAAALGIiMg413130245.png](https://i.imgur.com/s1mYWdk.jpeg){.tpl-133-pic-img-h}
:::
:::
:::

::: {.calibre1}
本项目是通过Arduino开发板设计一款遥控器，通过遥控器的两个摇杆控制微四轴飞行器油门以及状态。
:::

[]{#chapter-32.xhtml}

::: {.calibre1}
## 6.1　功能及总体设计 {.tpl-185-title}

::: {.tpl-185-box-cuxian}
:::

::: {.tpl-185-box-middle}
:::

本项目主要实现在飞行过程中自稳功能以及无头模式。自稳即自动调节飞行器状态，使其稳定飞行；无头模式是指在操控飞行器时，以遥控器和飞行器的连线为轴确定头部，便于操控飞行器。

要实现上述功能需将作品分成三部分进行设计，即控制信号、信息处理传输和输出部分。控制信号选用了一个简易的摇杆控制器；信息处理传输选用无线接收模块用于接收信号，MPU6050陀螺仪、加速度计用于测量和计算飞行状态，Arduino开发板用于处理信号、计算并传输给输出部分；输出部分使用四个直流电机控制飞行器螺旋桨。

1．整体框架图

整体框架如图6-1所示。

::: {.zhangyue-c}
![CmQUOV7V1G6EN7uXAAAAADUh9tk776999056.jpg](https://i.imgur.com/sjBeLJr.jpeg){.zhangyue-img}

图6-1　整体框架图
:::

2．系统流程图

系统流程如图6-2所示。

::: {.zhangyue-c}
![CmQUOV7V1G6ES2gDAAAAAIdKFzk338359484.jpg](https://i.imgur.com/braW5i7.jpeg){.zhangyue-img}

图6-2　系统流程图
:::

3．总电路图

系统总电路如图6-3所示，引脚连接如表6-1所示。直流电机1、2、3、4分别带动四个螺旋桨，1、2顺时针旋转，3、4逆时针旋转。

::: {.zhangyue-c}
![CmQUOF7V1G6ENn9yAAAAAOLW1aU508075359.jpg](https://i.imgur.com/7KafEkB.jpeg){.zhangyue-img}

图6-3　系统总电路图
:::

::: {.zhangyue-c}
表6-1　引脚连接表

![CmQUOF7V1GyEAAABAAAAAKZP4xE259579176.jpg](https://i.imgur.com/xTBtZKN.jpeg){.zhangyue-img1}
:::
:::

[]{#chapter-33.xhtml}

::: {.calibre1}
## 6.2　模块介绍 {.tpl-185-title}

::: {.tpl-185-box-cuxian}
:::

::: {.tpl-185-box-middle}
:::

本项目主要包括主程序模块、MPU6050模块和油门驱动模块。下面分别给出各模块的功能介绍及相关代码。

### 6.2.1　主程序模块 {#chapter-33.xhtml#AUTO_ID_31 .text-title}

本部分包括主程序模块的功能介绍及相关代码。

1．功能介绍

主程序模块主要实现有无遥控器信号的判定以及调用自稳平衡代码维持飞行器稳定，调用油门驱动模块控制PWM输出信号的占空比，从而改变飞行器的状态。此部分主要由C++代码实现，编译环境为Visual Studio，没有硬件部分。

2．相关代码

::: {.zhangyue-c}
![CmQUOV7V1G6EFNkrAAAAABdUp_k747583351.jpg](https://i.imgur.com/aIIhSPj.jpeg){.zhangyue-img}
:::

::: {.zhangyue-c}
![CmQUOV7V1G6EeRx0AAAAAE7OEIk956630873.jpg](https://i.imgur.com/OpnqVze.jpeg){.zhangyue-img}
:::

::: {.zhangyue-c}
![CmQUOF7V1G6EdSO2AAAAAEf44VQ891798548.jpg](https://i.imgur.com/sLRMnYg.jpeg){.zhangyue-img}
:::

::: {.zhangyue-c}
![CmQUOV7V1G-EdqEyAAAAAEPYJ_o647049023.jpg](https://i.imgur.com/GN0CUxW.jpeg){.zhangyue-img}
:::

::: {.zhangyue-c}
![CmQUOF7V1G-Eef-kAAAAAAvzpGo891789461.jpg](https://i.imgur.com/I9sm5Wi.jpeg){.zhangyue-img}
:::

::: {.zhangyue-c}
![CmQUOV7V1G-EKTOzAAAAAOJY3UU217411507.jpg](https://i.imgur.com/AI9cM7E.jpeg){.zhangyue-img}
:::

::: {.zhangyue-c}
![CmQUOF7V1G-Ed9iXAAAAAKQX4p0602817097.jpg](https://i.imgur.com/Nr86k1H.jpeg){.zhangyue-img}
:::

::: {.zhangyue-c}
![CmQUOV7V1G-EII8VAAAAAEeqINo000398520.jpg](https://i.imgur.com/EjofWyJ.jpeg){.zhangyue-img}
:::

::: {.zhangyue-c}
![CmQUOF7V1F2EbskKAAAAANY7CPc445012526.jpg](https://i.imgur.com/YRlGiDr.jpeg){.zhangyue-img}
:::

::: {.zhangyue-c}
![CmQUOF7V1F2EJ5IHAAAAAFnnTtw280485096.jpg](https://i.imgur.com/rAZKcDx.jpeg){.zhangyue-img}
:::

::: {.zhangyue-c}
![CmQUOV7V1F2Efat8AAAAAMI7O8M506772014.jpg](https://i.imgur.com/0TU17Sh.jpeg){.zhangyue-img}
:::

::: {.zhangyue-c}
![CmQUOV7V1F2EMAnSAAAAAFjmyg0015696010.jpg](https://i.imgur.com/v99xxEw.jpeg){.zhangyue-img}
:::

### 6.2.2　MPU6050模块 {#chapter-33.xhtml#AUTO_ID_32 .text-title}

本部分包括MPU6050模块的功能介绍及相关代码。

1．功能介绍

主要涉及卡尔曼滤波算法、ACC校准算法以及飞行器无头模式的相关代码。通过卡尔曼滤波算法，将精度高的加速度测量数据和长时间精度较高的陀螺仪测量数据叠加在一起，避免飞行过程中因抖动造成加速度计的测量不准，陀螺仪测量反馈参数慢而导致响应速度慢等问题。同时ACC校准算法作为地面初始值校准，为MPU6050准确测量提供了基础。同时由于ACC算法可以建立初始的飞行正方向，利用这一点可以完成飞行器的无头模式，电路连接如图6-4所示。

::: {.zhangyue-c}
![CmQUOV7V1F2EKmbhAAAAAKSeaTQ253683095.jpg](https://i.imgur.com/YU1k9oo.jpeg){.zhangyue-img}

图6-4　MPU6050与Arduino开发板连线图
:::

2．相关代码

1）ACC校准模块

::: {.zhangyue-c}
![CmQUOV7V1F2EAERyAAAAALgH7qo492104265.jpg](https://i.imgur.com/O13Qj3o.jpeg){.zhangyue-img}
:::

::: {.zhangyue-c}
![CmQUOV7V1F2EQ3ucAAAAAJLiPb8256266306.jpg](https://i.imgur.com/NnUG4Yr.jpeg){.zhangyue-img}
:::

::: {.zhangyue-c}
![CmQUOV7V1F2ENHLVAAAAACWZ-vc143648863.jpg](https://i.imgur.com/RRmV0w5.jpeg){.zhangyue-img}
:::

2）卡尔曼滤波算法模块

::: {.zhangyue-c}
![CmQUOF7V1F2EFVMwAAAAAOoP5ek486769514.jpg](https://i.imgur.com/duJmSz8.jpeg){.zhangyue-img}
:::

### 6.2.3　油门驱动模块 {#chapter-33.xhtml#AUTO_ID_33 .text-title}

本部分包括油门驱动模块的功能介绍及相关代码。

1．功能介绍

本模块主要是将MPU6050提供的测量值，经过主程序模块姿态融合以后，将输出的下一状态指令与接收机给的指令调节计算，以PWM信号占空比的大小，控制4个直流电机转速呈一定比例，从而改变飞行器的状态，主要涉及PID算法。

2．相关代码

::: {.zhangyue-c}
![CmQUOV7V1F2EKUF6AAAAAD0tggg631196512.jpg](https://i.imgur.com/CdT7pUz.jpeg){.zhangyue-img}
:::

::: {.zhangyue-c}
![CmQUOV7V1F2ESLgGAAAAALSsk_c989540265.jpg](https://i.imgur.com/uWhveMV.jpeg){.zhangyue-img}
:::
:::

[]{#chapter-34.xhtml}

::: {.calibre1}
## 6.3　产品展示 {.tpl-185-title}

::: {.tpl-185-box-cuxian}
:::

::: {.tpl-185-box-middle}
:::

整体外观如图6-5所示，其中右边为遥控器部分，左边为飞行器的主体结构。遥控器部分由一个Arduino开发板作为运算中心，摇杆控制飞行状态，天线传输模块负责把信息发送到飞行器。飞行器由4个对称的螺旋桨翼、直流电机、主控中心和机架构成，其中的主控中心包括天线模块、Arduino开发板、陀螺仪与加速度模块。

::: {.zhangyue-c}
![CmQUOV7V1F6EbBirAAAAAMj6_58965538589.jpg](https://i.imgur.com/e96dETA.jpeg){.zhangyue-img}

图6-5　整体外观图
:::
:::

[]{#chapter-35.xhtml}

::: {.calibre1}
## 6.4　元件清单 {.tpl-185-title}

::: {.tpl-185-box-cuxian}
:::

::: {.tpl-185-box-middle}
:::

完成本项目所用到的元件及数量如表6-2所示。

::: {.zhangyue-c}
表6-2　元件清单

![CmQUOF7V1GyEQQKrAAAAADBtueU893821795.jpg](https://i.imgur.com/QKhdAhr.jpeg){.zhangyue-img1}
:::
:::

[]{#chapter-36.xhtml}

::: {.h5_mainbody_bg1}
::: {.h5_rule_hv}
# 第7章 {.tpl-133-text-1-num}

::: {.tpl-133-div-line}
# 便携导盲犬项目设计 ![CmQUOF7V1G-EH2WXAAAAAF19EmE760897358.png](https://i.imgur.com/VBhSShs.jpeg){.zhangyue-footnote} {.tpl-133-title-1-center}
:::

::: {.tpl-133-pic-center}
![CmQUOV7V1G-EPMjIAAAAALGIiMg413130245.png](https://i.imgur.com/3wnRTHZ.jpeg){.tpl-133-pic-img-h}
:::
:::
:::

::: {.calibre1}
本项目通过蜂鸣器和红灯发出警示，利用ESP8266模块将携带者的位置数据传输到云端，通过OneNET网页端查看被监控人的具体位置。
:::

[]{#chapter-37.xhtml}

::: {.calibre1}
## 7.1　功能及总体设计 {.tpl-185-title}

::: {.tpl-185-box-cuxian}
:::

::: {.tpl-185-box-middle}
:::

本项目模拟导盲犬，将设备佩戴到头部，行走时对障碍物进行检测，当障碍物与行人距离小于50cm时，利用红灯提醒行人注意避让盲人，蜂鸣器提醒佩戴者注意慢行或避让。连接天线的GPS模块可以准确定位佩戴者的位置，通过ESP8266模块进行数据传输，在OneNET网页端查看位置并实时更新数据，实现安全监控功能。扬声器用做闹钟定时，提醒盲人及时返回。

要实现上述功能需将作品分成四部分进行设计，即检测部分、处理部分、输出部分和传输部分。检测部分选用了一个简便灵敏的超声波测距模块，固定检测正前方障碍物或行人；处理部分主要通过Arduino开发板程序实现；输出部分使用蜂鸣器、发光LED和扬声器实现；传输部分选用了GPS和ESP8266模块配合Arduino开发板实现。

1．整体框架图

整体框架如图7-1所示。

::: {.zhangyue-c}
![CmQUOF7V1F6EXM7IAAAAAKAPaq4099619867.jpg](https://i.imgur.com/KEvKS6h.jpeg){.zhangyue-img}

图7-1　整体框架图
:::

2．系统流程图

系统流程如图7-2所示。

::: {.zhangyue-c}
![CmQUOV7V1F6EQQczAAAAAEQjjQ0162383460.jpg](https://i.imgur.com/QZAtlay.jpeg){.zhangyue-img}

图7-2　系统流程图
:::

3．总电路图

系统总电路如图7-3所示，引脚连接如表7-1所示。

::: {.zhangyue-c}
![CmQUOV7V1F6EIx4xAAAAABZ4zUM467951948.jpg](https://i.imgur.com/R9gV0bF.jpeg){.zhangyue-img}

图7-3　系统总电路图
:::

::: {.zhangyue-c}
表7-1　引脚连接表

![CmQUOV7V1GyEEZTbAAAAAJHz9BQ875871792.jpg](https://i.imgur.com/EpXof52.jpeg){.zhangyue-img1}
:::
:::

[]{#chapter-38.xhtml}

::: {.calibre1}
## 7.2　模块介绍 {.tpl-185-title}

::: {.tpl-185-box-cuxian}
:::

::: {.tpl-185-box-middle}
:::

本项目主要包括超声波测距模块、ESP8266模块、GPS模块和扬声器模块。下面分别给出各模块的功能介绍及相关代码。

### 7.2.1　超声波测距模块 {#chapter-38.xhtml#AUTO_ID_34 .text-title}

本部分包括超声波测距模块的功能介绍及相关代码。

1．功能介绍

超声波模块使用Arduino开发板的数字引脚给SR04模块的Trig引脚至少10μs的高电平信号，触发SR04模块的测距功能。触发测距功能后，模块会自动发送8个40kHz的超声波脉冲，并自动检测是否有信号返回。若有，则Echo引脚会输出高电平，高电平持续的时间就是超声波从发射到返回的时间，获取测距结果，并计算出被测物体的实际距离，如果与障碍物距离小于50cm则蜂鸣器发出警报，LED闪烁。电路如图7-4所示。

::: {.zhangyue-c}
![CmQUOV7V1F6EJVl1AAAAALQUPHE350277584.jpg](https://i.imgur.com/WddXozK.jpeg){.zhangyue-img}

图7-4　超声波模块连接图
:::

2．相关代码

::: {.zhangyue-c}
![CmQUOF7V1F6EY9MyAAAAANiXgp4485887313.jpg](https://i.imgur.com/pVviL4c.jpeg){.zhangyue-img}
:::

### 7.2.2　ESP8266模块及GPS模块 {#chapter-38.xhtml#AUTO_ID_35 .text-title}

本部分包括ESP8266模块及GPS模块的功能介绍及相关代码。

1．功能介绍

通过ESP8266模块传输到云端平台显示位置信息，进行网页端监控。元件包括GPS模块、ESP8266模块、Arduino开发板和导线若干，电路如图7-5所示。

::: {.zhangyue-c}
![CmQUOV7V1F6EQFQMAAAAAOY2zPk078055091.jpg](https://i.imgur.com/wwhwFql.jpeg){.zhangyue-img}

图7-5　ESP8266模块及GPS模块电路图
:::

2．相关代码

::: {.zhangyue-c}
![CmQUOF7V1F6ECO3AAAAAAFIFT0c450509419.jpg](https://i.imgur.com/09CrqYL.jpeg){.zhangyue-img}
:::

::: {.zhangyue-c}
![CmQUOV7V1F6EU2jgAAAAAMcUYrM644117324.jpg](https://i.imgur.com/dMHD5v9.jpeg){.zhangyue-img}
:::

::: {.zhangyue-c}
![CmQUOV7V1F6Eehx4AAAAAOkrXMQ739918507.jpg](https://i.imgur.com/q3nbloo.jpeg){.zhangyue-img}
:::

::: {.zhangyue-c}
![CmQUOF7V1F6EFur8AAAAAL94v6M366019558.jpg](https://i.imgur.com/nokjcRO.jpeg){.zhangyue-img}
:::

::: {.zhangyue-c}
![CmQUOF7V1F6EIz2SAAAAAPjH7Kg889209745.jpg](https://i.imgur.com/LGPb2sa.jpeg){.zhangyue-img}
:::

::: {.zhangyue-c}
![CmQUOV7V1F6EWxIVAAAAAMcKDvk585908972.jpg](https://i.imgur.com/y4TpBGW.jpeg){.zhangyue-img}
:::

### 7.2.3　扬声器模块 {#chapter-38.xhtml#AUTO_ID_36 .text-title}

本部分包括扬声器模块的功能介绍及相关代码。

1．功能介绍

扬声器每隔一小时定时播放歌曲《天空之城》，提醒盲人注意出行时间并及时返回。元件包括0.5W扬声器、Arduino开发板和导线若干，电路如图7-6所示。

::: {.zhangyue-c}
![CmQUOV7V1F6EKieYAAAAAE2UQq0724592599.jpg](https://i.imgur.com/YFOi6Ph.jpeg){.zhangyue-img}

图7-6　扬声器电路原理图
:::

2．相关代码

::: {.zhangyue-c}
![CmQUOF7V1F6EObisAAAAAB6eUN4288193881.jpg](https://i.imgur.com/tefLJYr.jpeg){.zhangyue-img}
:::

::: {.zhangyue-c}
![CmQUOF7V1F6EDm3RAAAAAG-fGZw785365930.jpg](https://i.imgur.com/tRg6s0X.jpeg){.zhangyue-img}
:::

::: {.zhangyue-c}
![CmQUOV7V1F6EQ3PNAAAAAA3c5Ik620917399.jpg](https://i.imgur.com/tt9o4re.jpeg){.zhangyue-img}
:::

::: {.zhangyue-c}
![CmQUOV7V1F6EPSlgAAAAAPAn2xA909836426.jpg](https://i.imgur.com/iah8vBC.jpeg){.zhangyue-img}
:::

::: {.zhangyue-c}
![CmQUOF7V1F6ERWxeAAAAACHycbM351583812.jpg](https://i.imgur.com/KfzVhnz.jpeg){.zhangyue-img}
:::
:::

[]{#chapter-39.xhtml}

::: {.calibre1}
## 7.3　产品展示 {.tpl-185-title}

::: {.tpl-185-box-cuxian}
:::

::: {.tpl-185-box-middle}
:::

便携导盲犬的内部电路连接如图7-7所示，右边为超声波模块和扬声器模块，中间为Arduino开发板，左边为GPS模块和ESP8266模块，上方为面包板，面包板上插有蜂鸣器及2个串联的发光LED。产品整体外观如图7-8所示，佩戴实物如图7-9所示，位置定位如图7-10所示。

::: {.zhangyue-c}
![CmQUOV7V1F6EYGp4AAAAAFUe52k968241514.jpg](https://i.imgur.com/TnYUpdE.jpeg){.zhangyue-img}

图7-7　内部电路连接图
:::

::: {.zhangyue-c}
![CmQUOF7V1F6EEyrnAAAAALYXOos010190379.jpg](https://i.imgur.com/cY8DOV5.jpeg){.zhangyue-img}

图7-8　整体外观图
:::

::: {.zhangyue-c}
![CmQUOF7V1F6EUzY3AAAAAH8lyTQ498577403.jpg](https://i.imgur.com/Bk7YtEa.jpeg){.zhangyue-img}

图7-9　实物佩戴图
:::

::: {.zhangyue-c}
![CmQUOV7V1F6ELVJ_AAAAAH4BgVs335310301.jpg](https://i.imgur.com/QGeoyAd.jpeg){.zhangyue-img}

图7-10　位置定位图
:::
:::

[]{#chapter-40.xhtml}

::: {.calibre1}
## 7.4　元件清单 {.tpl-185-title}

::: {.tpl-185-box-cuxian}
:::

::: {.tpl-185-box-middle}
:::

完成本项目所用到的元件及数量如表7-2所示。

::: {.zhangyue-c}
表7-2　元件清单

![CmQUOV7V1GyEHou7AAAAAB1fNNw213599721.jpg](https://i.imgur.com/CWVNjGc.jpeg){.zhangyue-img1}
:::
:::

[]{#chapter-41.xhtml}

::: {.h5_mainbody_bg1}
::: {.h5_rule_hv}
# 第8章 {.tpl-133-text-1-num}

::: {.tpl-133-div-line}
# 车辆内轮差预警装置项目设计 ![CmQUOF7V1G-EH2WXAAAAAF19EmE760897358.png](https://i.imgur.com/eP47MRB.jpeg){.zhangyue-footnote} {.tpl-133-title-1-center}
:::

::: {.tpl-133-pic-center}
![CmQUOV7V1G-EPMjIAAAAALGIiMg413130245.png](https://i.imgur.com/d1Dj9JJ.jpeg){.tpl-133-pic-img-h}
:::
:::
:::

::: {.calibre1}
本项目针对司机和行人无法明确判断车辆内轮差危险区域具体范围的情形，由车轮转角通过数学模型计算内轮差大小，再通过激光手电和挡板实现光线预警，在地面投影出内轮差危险区域。
:::

[]{#chapter-42.xhtml}

::: {.calibre1}
## 8.1　功能及总体设计 {.tpl-185-title}

::: {.tpl-185-box-cuxian}
:::

::: {.tpl-185-box-middle}
:::

本项目主要有三个功能：一是通过测定汽车右前轮转角，根据建立的数学模型，计算出实时车辆内轮差大小，控制舵机转动相应角度，发光装置射出光线在地上划出危险区域，主要帮助路人判断自己是否在此范围内。二是通过舵机和超声波模块实现雷达功能，检测障碍物与车辆的相对位置，与转向角通过数学模型计算得出的实时内轮差危险区域比较，若行人或车辆在危险区域内立即报警，以提醒司机和路人采取措施进行闪避。三是当行人进入危险区域，车辆报警时，摄像头开启，驾驶员可通过屏幕了解危险区域内的具体路况，辅助驾驶员作出适当的应对。

要实现上述功能需将作品分成三部分进行设计，即声音预警部分、光线预警部分和视频辅助部分。声音预警部分选用了HC-SR04超声波模块和SG90舵机，组成雷达，用蜂鸣器做报警器。光线预警部分，用继电器控制投影光线，由SG90舵机控制遮蔽板，控制光线投影范围。视频辅助部分采用ARM9开发板，用USB摄像头获取图像，在ARM上显示。

1．整体框架图

整体框架如图8-1所示。

::: {.zhangyue-c}
![CmQUOF7V1F6EX5OqAAAAABxyKHA942125336.jpg](https://i.imgur.com/1sGmBXp.jpeg){.zhangyue-img}

图8-1　整体框架图
:::

2．系统流程图

系统流程如图8-2所示。首先主机电位器获取车轮转角，达到阈值开启系统，通过数学模型计算出内轮差，蓝牙模块将内轮差数据传输给从机，从机继电器连接舵机到指定位置，实现光线预警。主机舵机转动，超声波模块测距，获取行人位置参数，与内轮差危险区域作比较，如危险区域有行人，主机舵机停止转动，蜂鸣器报警，直到行人退出危险区域。

::: {.zhangyue-c}
![CmQUOV7V1F6EDA3BAAAAAMyyBU4947580076.jpg](https://i.imgur.com/CwAkPmu.jpeg){.zhangyue-img}

图8-2　系统流程图
:::

3．总电路图

系统总电路如图8-3所示，主机引脚连接如表8-1所示，从机引脚连接如表8-2所示。

::: {.zhangyue-c}
![CmQUOV7V1F6EPvawAAAAAFpS8Ww727957341.jpg](https://i.imgur.com/t0KWQpe.jpeg){.zhangyue-img}

图8-3　系统总电路图
:::

::: {.zhangyue-c}
表8-1　主机引脚连接表

![CmQUOF7V1GyEKxFWAAAAAFQEuII332346362.jpg](https://i.imgur.com/aerdzDf.jpeg){.zhangyue-img1}
:::

::: {.zhangyue-c}
表8-2　从机引脚连接表

![CmQUOF7V1GyEA8SaAAAAABVYMBE980113037.jpg](https://i.imgur.com/VW5WVSI.jpeg){.zhangyue-img1}
:::
:::

[]{#chapter-43.xhtml}

::: {.calibre1}
## 8.2　模块介绍 {.tpl-185-title}

::: {.tpl-185-box-cuxian}
:::

::: {.tpl-185-box-middle}
:::

本项目主要包括声音预警模块、光线预警模块和视频辅助模块。下面分别给出各模块的功能介绍及相关代码。

### 8.2.1　声音预警模块 {#chapter-43.xhtml#AUTO_ID_37 .text-title}

本部分包括声音预警模块的功能介绍及相关代码。

1．功能介绍

电位器采集车轮转角，计算内轮差、舵机转动和超声波测距，判断危险区域内是否有行人，如有舵机停止转动，蜂鸣器报警，直到行人退出危险区域。元件包括超声波模块HC-SR04、舵机SG90、蓝牙模块HC-05、电位器545039和蜂鸣器，电路如图8-4所示。

::: {.zhangyue-c}
![CmQUOV7V1F6ES107AAAAAGgzfVc036442078.jpg](https://i.imgur.com/GmhLNZH.jpeg){.zhangyue-img}

图8-4　声音预警模块电路图
:::

2．相关代码

车辆内轮差预警装置主机，获取车轮转角数据，传输给从机。如果转弯，雷达转动，判断障碍物位置，计算内轮差危险区域范围，如果危险区域内有行人，则蜂鸣器报警。

::: {.zhangyue-c}
![CmQUOV7V1F6EZG2xAAAAAC1tJS0243353465.jpg](https://i.imgur.com/eH3VcWc.jpeg){.zhangyue-img}
:::

::: {.zhangyue-c}
![CmQUOV7V1F6EbJTQAAAAADyb5zo344795610.jpg](https://i.imgur.com/vbxchjQ.jpeg){.zhangyue-img}
:::

::: {.zhangyue-c}
![CmQUOF7V1F6EAltWAAAAALxeXrY429785880.jpg](https://i.imgur.com/SpwdAae.jpeg){.zhangyue-img}
:::

### 8.2.2　光线预警模块 {#chapter-43.xhtml#AUTO_ID_38 .text-title}

本部分包括光线预警模块的功能介绍及相关代码。

1．功能介绍

本模块的功能主要是接收声音预警模块传输的转角数据，继电器连接，计算舵机转角，转到相应位置，遮蔽激光手电，实现光线预警。元件包括继电器、舵机SG90、蓝牙模块HC-05，电路如图8-5所示。

::: {.zhangyue-c}
![CmQUOV7V1F6EeSZ5AAAAAJZHnyE492917420.jpg](https://i.imgur.com/09Sr5BR.jpeg){.zhangyue-img}

图8-5　光线预警模块电路图
:::

2．相关代码

车辆内轮差预警装置从机，接收主机传来的转角数据，如果转弯，光线预警启动，根据内轮差，由舵机控制遮蔽板并控制投影范围。

::: {.zhangyue-c}
![CmQUOF7V1F-EJc8_AAAAAM-fejQ635270818.jpg](https://i.imgur.com/3QHUw2O.jpeg){.zhangyue-img}
:::

::: {.zhangyue-c}
![CmQUOF7V1F-EKgjdAAAAAB0xzdQ438606649.jpg](https://i.imgur.com/YxYPUKA.jpeg){.zhangyue-img}
:::

### 8.2.3　视频辅助模块 {#chapter-43.xhtml#AUTO_ID_39 .text-title}

本部分包括视频辅助模块的功能介绍及相关代码。

1．功能介绍

本模块通过USB摄像头采集危险区域内的图像，传输到ARM9开发板，应用V4L2（Video for Linux Version 2）视频框架，它是Linux中关于视频设备的内核驱动，提供一系列接口函数便于视频设备的应用程序编程。元件包括ARM9开发板和USB。视频采集流程如图8-6所示。

::: {.zhangyue-c}
![CmQUOV7V1F-ESPH5AAAAAM248rQ594599148.jpg](https://i.imgur.com/plQxARt.jpeg){.zhangyue-img2}

图8-6　视频采集流程图
:::

2．相关代码

::: {.zhangyue-c}
![CmQUOF7V1F-EXbj8AAAAAIdV16I206216489.jpg](https://i.imgur.com/GTEtq8j.jpeg){.zhangyue-img}
:::

::: {.zhangyue-c}
![CmQUOF7V1F-EfHHfAAAAALwLPG0098913557.jpg](https://i.imgur.com/naysQv4.jpeg){.zhangyue-img}
:::

::: {.zhangyue-c}
![CmQUOF7V1F-EHZ9mAAAAAC4tm3Q092054874.jpg](https://i.imgur.com/DQLm7ww.jpeg){.zhangyue-img}
:::

::: {.zhangyue-c}
![CmQUOV7V1F-Efg_HAAAAAFaiocQ082199637.jpg](https://i.imgur.com/475l1KT.jpeg){.zhangyue-img}
:::

### 8.2.4　数学模型 {#chapter-43.xhtml#AUTO_ID_40 .text-title}

本项目分别以最小转弯半径和右前轮转向角为因变量，得到车辆内轮差的数学模型，右前轮最大转向角约为40°。

模型假设和符号说明：假设收集的数据是合理的、正确的；假设汽车的前后轮距是一样的；假设路况、车况都是理想的；假设车速相对稳定；假设轮胎无微小形变，整个车体可视为刚体；假设车在转弯时前后轮的轨迹均为圆弧且两圆圆心重合。符号说明如表8-3所示。

::: {.zhangyue-c}
表8-3　模型参数

![CmQUOF7V1GyEVdU2AAAAAEUG2uc433079932.jpg](https://i.imgur.com/tPW6wml.jpeg){.zhangyue-img1}
:::

通过查阅相关资料得到轴距、轮距和最小转弯半径的一些参数，来考虑轴距、轮距以及最小转弯半径对汽车内轮差的影响。不同车型的参数，如表8-4所示。

::: {.zhangyue-c}
表8-4　非挂式车的相关数据

![CmQUOV7V1G2EWYP_AAAAABRs-is359966353.jpg](https://i.imgur.com/ndJne6x.jpeg){.zhangyue-img1}
:::

1．模型一

模型一的建立，如图8-7所示。

::: {.zhangyue-c}
![CmQUOF7V1F-EIe_gAAAAAAjutQg054055765.jpg](https://i.imgur.com/iwrSvO2.jpeg){.zhangyue-img}

图8-7　转弯半径对汽车内轮差模型一
:::

由图8-7可得方程：

::: {.zhangyue-c}
![CmQUOF7V1F-EUwodAAAAAEI3s6M011764563.jpg](https://i.imgur.com/1VIgQF0.jpeg){.calibre7}
:::

::: {.zhangyue-c}
![CmQUOF7V1F-ESRWwAAAAAMaN3CE256697302.jpg](https://i.imgur.com/YXAaUgD.jpeg){.calibre7}
:::

由此得到 *R* ~1~ ， *R* ~2~ ：

::: {.zhangyue-c}
![CmQUOF7V1F-Ef0VqAAAAAM2824s394850452.jpg](https://i.imgur.com/qA9is76.jpeg){.calibre7}
:::

::: {.zhangyue-c}
![CmQUOF7V1F-EYEXkAAAAAI7RhKc095372297.jpg](https://i.imgur.com/1GFFUXi.jpeg){.calibre7}
:::

内轮差：

::: {.zhangyue-c}
![CmQUOV7V1F-ELieIAAAAAHwmVAg827750769.jpg](https://i.imgur.com/WVG8lQl.jpeg){.calibre9}
:::

用转向角可以表示为：

::: {.zhangyue-c}
![CmQUOF7V1F-EZqsMAAAAABEAlDA697978707.jpg](https://i.imgur.com/ZbAwUiA.jpeg){.calibre7}
:::

由此模型得到一个约束条件，即 *α* ~1~ 和 *α* ~2~ 不相等，但满足

::: {.zhangyue-c}
![CmQUOF7V1F-EJrfpAAAAAL1K7Gg349502412.jpg](https://i.imgur.com/xvGt32E.jpeg){.calibre7}
:::

综上所述，可以得到如下模型：

::: {.zhangyue-c}
![CmQUOF7V1F-EVtVjAAAAAMbQwQo179976645.jpg](https://i.imgur.com/EwVkC1i.jpeg){.calibre10}
:::

::: {.zhangyue-c}
![CmQUOV7V1F-EDzJDAAAAAOKDtuA952657448.jpg](https://i.imgur.com/QVfB4U9.jpeg){.calibre10}
:::

由所建的模型一得知，内轮差的大小与车辆的轴距、轮距、最小转弯半径有关。根据所查数据，通过Matlab编程计算可得非挂式车不同型号的内轮差（单位：米），如表8-5所示。

::: {.zhangyue-c}
表8-5　不同型号汽车内轮差

![CmQUOF7V1G2ESDMlAAAAAJ9ezuo453388786.jpg](https://i.imgur.com/azjLKTt.jpeg){.zhangyue-img1}
:::

本模型通过计算模拟出了不同汽车转弯时的内轮差，模型二求解的最大内轮差是在不考虑重心位置及速度对最小转弯半径影响的前提下求解的。根据公式：

::: {.zhangyue-c}
![CmQUOF7V1F-EGFkPAAAAAM7DOcY214043377.jpg](https://i.imgur.com/gmUMwp1.jpeg){.calibre11}
:::

可以看出速度的大小和重心位置对最小转弯半径是有影响的。速度越大，最小转弯半径也就越大，同时重心位置的不同，对最小转弯半径也是有影响的。但由于技术水平有限，本装置中公式简化为：

::: {.zhangyue-c}
![CmQUOV7V1F-EU-8sAAAAAHfGQ1k024415708.jpg](https://i.imgur.com/vPGXL1Z.jpeg){.calibre12}
:::

2．模型二

模型二的建立，如图8-8所示。

由图8-8可得

::: {.zhangyue-c}
![CmQUOF7V1F-ECHm7AAAAAA8bRv8569764782.jpg](https://i.imgur.com/4IIg53c.jpeg){.zhangyue-img1}
:::

::: {.zhangyue-c}
![CmQUOV7V1F-EQDxIAAAAAHWMylY440449335.jpg](https://i.imgur.com/D6qQ96W.jpeg){.zhangyue-img1}
:::

将式（8-12）代入式（8-13）得

::: {.zhangyue-c}
![CmQUOF7V1F-EL3zvAAAAAJuPqec244879100.jpg](https://i.imgur.com/FjdZOCl.jpeg){.calibre7}
:::

::: {.zhangyue-c}
![CmQUOV7V1F-EHWdzAAAAALdNgSw466696955.jpg](https://i.imgur.com/xai9x2i.jpeg){.zhangyue-img2}

图8-8　转弯半径对汽车内轮差模型二
:::

式（8-14）称为阿克曼转向条件。

::: {.zhangyue-c}
![CmQUOF7V1F-EGNgLAAAAAD9dscQ953104992.jpg](https://i.imgur.com/BpfGl67.jpeg){.calibre7}
:::

将式（8-12）代入式（8-15）得

::: {.zhangyue-c}
![CmQUOF7V1F-EAVbVAAAAAB7u3c0135010878.jpg](https://i.imgur.com/218n8Mb.jpeg){.calibre10}
:::

由所建的模型二可知，内轮差的大小与车辆的右前轮转向角有关，根据所查的数据，通过Matlab编程计算可得非挂式车不同型号的内轮差（单位：米），如表8-6所示。

::: {.zhangyue-c}
表8-6　非挂式车不同型号的内轮差

![CmQUOV7V1G2ENlrrAAAAAKMHh9k910281103.jpg](https://i.imgur.com/Igj9yIo.jpeg){.zhangyue-img1}
:::

3．模型三

模型三假设：研究对象为具有刚性的汽车，车身为整体、不可变形。通常情况下，轿车及客车属于此类。由于汽车导向仅依靠前轮，假设轿车前轮的转弯路径是圆弧，后轮待定。轿车进入弯道后匀速行驶。在弯道内行驶的过程中，汽车以恒定的转向角转弯，即方向盘固定在同一个位置上。

下面用解析几何模型进一步推导内轮差。在前面的推导中，我们认为轿车转弯时前后轮的轨迹都是圆弧，但是这样的假设并不严谨。轿车转向时，只有前轮起导向作用，带动后轮偏转；因此，汽车以恒定的转向角、恒定的线速度转弯时（ *α* ＝ *C* ），只能确保前轮的轨迹为圆弧，而后轮经车身带动，轨迹需要进一步确定。

在这一模型中，我们仅假设前轮的运动轨迹为圆弧，接着推导后轮轨迹。轿车是刚体，即车身不发生任何形状变化。根据刚体运动时的速度分解规律，前后轮沿车身方向的分速度相等：

::: {.zhangyue-c}
![CmQUOF7V1F-EAtBjAAAAANDSfeg466706792.jpg](https://i.imgur.com/FFMoy41.jpeg){.calibre12}
:::

上式的微分形式为

::: {.zhangyue-c}
![CmQUOV7V1F-ERluFAAAAAPzxBe4290477324.jpg](https://i.imgur.com/4qJ1zyT.jpeg){.calibre7}
:::

又因为前后轮的距离始终为车身长 *l* ，故有

::: {.zhangyue-c}
![CmQUOF7V1F-ELUBvAAAAAN8U2GQ602974798.jpg](https://i.imgur.com/qhxQ5Ic.jpeg){.calibre7}
:::

根据假设，设前轮的轨迹：

::: {.zhangyue-c}
![CmQUOV7V1F-EcHYiAAAAADBrNXg689223181.jpg](https://i.imgur.com/01voOTE.jpeg){.zhangyue-img}
:::

::: {.zhangyue-c}
![CmQUOV7V1F-EWJi6AAAAALElbI4728326546.jpg](https://i.imgur.com/oEaXSYZ.jpeg){.zhangyue-img}
:::

因为汽车前轮做匀速圆周运动，所以参数 *θ* 与 *v* ， *t* 的关系为：

::: {.zhangyue-c}
![CmQUOV7V1F-ES1QpAAAAAC4uqXg427926384.jpg](https://i.imgur.com/s0SgLxu.jpeg){.zhangyue-img1}
:::

式（8-17）\~式（8-22）中， *l* ， *r* ~A~ ， *v* ~A~ 为常量， *x* ~C~ ， *y* ~C~ ， *x* ~A~ ， *y* ~A~ ， *θ* 为变量。

用Matlab的dsolve函数解得：

::: {.zhangyue-c}
![CmQUOF7V1F-EV5GxAAAAALReLuY386241487.jpg](https://i.imgur.com/o50M4ch.jpeg){.zhangyue-img}
:::

即

::: {.zhangyue-c}
![CmQUOF7V1F-EBfBqAAAAANo71WQ738059320.jpg](https://i.imgur.com/EIkMKgj.jpeg){.zhangyue-img}
:::

当轿车以恒定的转向角、恒定的速度转弯时，前后轮的轨迹为同心圆弧，内轮差为两圆半径的差，如图8-9所示。则

::: {.zhangyue-c}
![CmQUOF7V1F-EWL82AAAAAN70qb8998718757.jpg](https://i.imgur.com/Ah8UyzM.jpeg){.calibre12}
:::

根据几何关系，如图8-10所示。

::: {.zhangyue-c}
![CmQUOF7V1GCEfJwVAAAAABu3KPY520335108.jpg](https://i.imgur.com/awnd2RK.jpeg){.zhangyue-img2}

图8-9　内轮差为两圆半径差的计算
:::

::: {.zhangyue-c}
![CmQUOV7V1GCEL9KxAAAAAJGZWrY710478291.jpg](https://i.imgur.com/SYahjsp.jpeg){.zhangyue-img2}

图8-10　内轮差计算的几何关系
:::

::: {.zhangyue-c}
![CmQUOV7V1GCEe0SyAAAAACcyrcE624763746.jpg](https://i.imgur.com/U86M9ZT.jpeg){.zhangyue-img}
:::

内轮差也可表示为：

::: {.zhangyue-c}
![CmQUOV7V1GCEESwsAAAAABKGhHc233902354.jpg](https://i.imgur.com/zirt2Mq.jpeg){.zhangyue-img}
:::

4．实际内轮差的测试

为了判断建模准确程度，尝试实地测量这些车辆的内轮差，如图8-11所示。

先用水浸湿前后轮，车辆按特定角度运行后前轮和后轮各得到一条水痕，用尺量得两条水痕间最大距离加上轮胎宽度可粗略测得实际内轮差的大小。重复两次，取平均值，如图8-12所示。

::: {.zhangyue-c}
![CmQUOF7V1GCEKHwtAAAAABUrFho946098897.jpg](https://i.imgur.com/yMGDIQV.jpeg){.zhangyue-img}

图8-11　内轮差测试准备
:::

::: {.zhangyue-c}
![CmQUOV7V1GCEGNIsAAAAAD0AU5Y828233811.jpg](https://i.imgur.com/J5pjam5.jpeg){.zhangyue-img}

图8-12　内轮差测量
:::

结果如表8-7所示。第二次测量值普遍大于第一次，据观察原因在于第一次测量时，轮胎未完全浸湿，胎印有缺陷。

::: {.zhangyue-c}
表8-7　车辆内轮差实际测量数据表

![CmQUOV7V1G2ERD9DAAAAALb_NCA435541376.jpg](https://i.imgur.com/kOEHLfY.jpeg){.zhangyue-img1}
:::

5．模型一与模型二的比较

将模型一、模型二和实际测量数据相比较，结果如表8-8所示。

::: {.zhangyue-c}
表8-8　数学模型与实际内轮差对照表

![CmQUOV7V1G2Ee6Q7AAAAAA0jdKY908292394.jpg](https://i.imgur.com/WcEfVgG.jpeg){.zhangyue-img1}
:::

综上可得模型一和模型二各自的优缺点，如表8-9所示。

::: {.zhangyue-c}
表8-9　模型一和模型二优缺点

![CmQUOF7V1G2EDbcPAAAAAH8RhiE012885428.jpg](https://i.imgur.com/hVcjbSE.jpeg){.zhangyue-img1}
:::

因此，本课题选用模型：

::: {.zhangyue-c}
![CmQUOV7V1GCEM7uwAAAAALkAmQI917852423.jpg](https://i.imgur.com/RLlIIDO.jpeg){.zhangyue-img}
:::
:::

[]{#chapter-44.xhtml}

::: {.calibre1}
## 8.3　产品展示 {.tpl-185-title}

::: {.tpl-185-box-cuxian}
:::

::: {.tpl-185-box-middle}
:::

车辆内轮差预警装置整体外观如图8-13所示，右边由电位器、舵机、超声波模块、蜂鸣器、蓝牙模块、Arduino主机构成声音预警模块。左下角由继电器、舵机、蓝牙模块、激光手电、Arduino从机构成光线预警模块。左上角由USB摄像头和ARM9开发板构成视频辅助模块，演示效果如图8-14所示。

::: {.zhangyue-c}
![CmQUOV7V1GCEGLIjAAAAAOgZJYo290459732.jpg](https://i.imgur.com/qENmWm4.jpeg){.zhangyue-img}

图8-13　整体外观图
:::

::: {.zhangyue-c}
![CmQUOV7V1GCEAMLHAAAAAGwOLqs947180272.jpg](https://i.imgur.com/oT7tZrD.jpeg){.zhangyue-img}

图8-14　演示效果图
:::
:::

[]{#chapter-45.xhtml}

::: {.calibre1}
## 8.4　元件清单 {.tpl-185-title}

::: {.tpl-185-box-cuxian}
:::

::: {.tpl-185-box-middle}
:::

完成本项目所用到的元件及数量如表8-10所示。

::: {.zhangyue-c}
表8-10　元件清单

![CmQUOF7V1G2EDnqmAAAAAAJxReM639914950.jpg](https://i.imgur.com/7C5KudO.jpeg){.zhangyue-img1}
:::
:::

[]{#chapter-46.xhtml}

::: {.h5_mainbody_bg1}
::: {.h5_rule_hv}
# 第9章 {.tpl-133-text-1-num}

::: {.tpl-133-div-line}
# 磁悬浮项目设计 ![CmQUOF7V1G-EH2WXAAAAAF19EmE760897358.png](https://i.imgur.com/xYsHKbk.jpeg){.zhangyue-footnote} {.tpl-133-title-1-center}
:::

::: {.tpl-133-pic-center}
![CmQUOV7V1G-EPMjIAAAAALGIiMg413130245.png](https://i.imgur.com/WSbrNXV.jpeg){.tpl-133-pic-img-h}
:::
:::
:::

::: {.calibre1}
本项目基于Arduino开发板、L298N直流电机驱动模块及相应的运放电路，结合PID算法，利用磁悬浮原理找到浮子的平衡位置，实现自主悬浮。
:::

[]{#chapter-47.xhtml}

::: {.calibre1}
## 9.1　功能及总体设计 {.tpl-185-title}

::: {.tpl-185-box-cuxian}
:::

::: {.tpl-185-box-middle}
:::

本项目创造了一个简易的磁悬浮环境。用霍尔传感器检测浮子的移动，用线圈和大磁铁提供磁场，L298N模块通过电路实现对四个线圈的控制。通过PID算法调整，可实现下推式磁悬浮。由于线圈在实现磁悬浮时工作电流较大，不能直接使用Arduino开发板驱动，所以使用L298N直流电机配合线圈组成。

要实现上述功能需将作品分成三部分进行设计：磁场产生部分、驱动部分和控制部分。磁场产生部分由霍尔传感器、线圈、大磁铁组成。霍尔传感器在浮子的正下方，当检测到浮子向左运动时，两边的线圈一个吸一个拉，把它推向右；反之，浮子向右运动，两个线圈的电流是反向，推向左。由于线圈产生的力度较小，所以需要加上一个大磁铁提供斥力，将浮子向上推。霍尔传感器和线圈焊接在万用板上方，大磁铁固定在下方，即可产生磁场。

1．整体框架图

整体框架如图9-1所示。

::: {.zhangyue-c}
![CmQUOF7V1GCESrXTAAAAAEGV_UE544381443.jpg](https://i.imgur.com/z4dvWLa.jpeg){.zhangyue-img}

图9-1　整体框架图
:::

2．系统流程图

系统流程如图9-2所示。

::: {.zhangyue-c}
![CmQUOV7V1GCEP_AiAAAAAArD9EI210667797.jpg](https://i.imgur.com/2XowSB1.jpeg){.zhangyue-img3}

图9-2　系统流程图
:::

通电后，L298N驱动线圈产生磁场。初次放上浮子，松手后震动强烈。通过PID算法，调节代码中数值或微调电路中的电位器，找到浮子的平衡位置，使其在平衡位置上下震动，直到浮子不再震动，实现稳定悬浮。

3．总电路图

系统总电路如图9-3所示，Arduino开发板引脚连接如表9-1所示，L298N引脚连接如表9-2所示，其他元件引脚连接如表9-3所示。

::: {.zhangyue-c}
![CmQUOF7V1GCEH3JbAAAAAPh7u2A087998382.jpg](https://i.imgur.com/VmEOmkY.jpeg){.zhangyue-img}

图9-3　系统总电路图
:::

::: {.zhangyue-c}
表9-1　Arduino开发板引脚连接表

![CmQUOF7V1G2EURlYAAAAAIZh4tA167847758.jpg](https://i.imgur.com/w7Eue85.jpeg){.zhangyue-img1}
:::

::: {.zhangyue-c}
表9-2　L298N引脚连接表

![CmQUOV7V1G2EGgUCAAAAAH3EM_A634970314.jpg](https://i.imgur.com/Tz3Y8w1.jpeg){.zhangyue-img1}
:::

::: {.zhangyue-c}
表9-3　其他元件引脚连接表

![CmQUOF7V1G2EcmgfAAAAAEoMDhU313343269.jpg](https://i.imgur.com/PGNyIw3.jpeg){.zhangyue-img1}
:::
:::

[]{#chapter-48.xhtml}

::: {.calibre1}
## 9.2　模块介绍 {.tpl-185-title}

::: {.tpl-185-box-cuxian}
:::

::: {.tpl-185-box-middle}
:::

本项目主要包括驱动模块和控制模块。下面分别给出各模块的功能介绍及相关代码。

### 9.2.1　驱动模块 {#chapter-48.xhtml#AUTO_ID_41 .text-title}

本部分包括驱动模块的功能介绍及相关代码。

1．功能介绍

本部分主要是通过L298N对线圈进行驱动，大磁铁产生斥力，将浮子悬浮在空中，线圈控制浮子的平衡。四个线圈两两反向相连，分为两组，由L298N直流电机驱动模块，通过高低电平控制两组线圈的正反转和电流的大小，初始化后，输出PWM波进行调速，从而实现对磁场大小及方向的控制，电路如图9-4所示。

::: {.zhangyue-c}
![CmQUOV7V1GCEBo7pAAAAACXfki4424620451.jpg](https://i.imgur.com/MNw1UXQ.jpeg){.zhangyue-img}

图9-4　驱动模块电路图
:::

2．相关代码

::: {.zhangyue-c}
![CmQUOF7V1GCEIKe2AAAAADzmF5Y660869156.jpg](https://i.imgur.com/CN1bPDQ.jpeg){.zhangyue-img}
:::

### 9.2.2　控制模块 {#chapter-48.xhtml#AUTO_ID_42 .text-title}

本部分包括控制模块的功能介绍及相关代码。

1．功能介绍

将L298N与Arduino开发板相连，通过Arduino开发板控制L298N，以达到控制线圈的目的。

通电后，浮子放入线圈中心正上方，受到大磁铁的斥力，用来平衡浮子的重力。线性霍尔元件检测浮子的磁感线，通过运放电路，反馈给Arduino开发板。由于浮子的最终平衡位置未知，不断调整磁场，在Arduino IDE中导入PID库函数，实现代码的编译。通过PID算法，找到浮子最佳平衡位置，Arduino开发板控制L298N，改变线圈中电流的大小和方向，使得浮子在线圈的控制下，实现Arduino开发板、L298N控制模块和线圈磁场的三级控制，直到找出最佳平衡位置，实现稳定悬浮。

2．相关代码

::: {.zhangyue-c}
![CmQUOV7V1GCEHdeSAAAAAFpsZYw297071353.jpg](https://i.imgur.com/N20bs6h.jpeg){.zhangyue-img}
:::

::: {.zhangyue-c}
![CmQUOF7V1GCESWp2AAAAAB1ikj8151544752.jpg](https://i.imgur.com/BfFPVzG.jpeg){.zhangyue-img}
:::

::: {.zhangyue-c}
![CmQUOF7V1GCEet8NAAAAANvS9Ro699871948.jpg](https://i.imgur.com/wK6OG4T.jpeg){.zhangyue-img}
:::

::: {.zhangyue-c}
![CmQUOF7V1GCEINrCAAAAALNKo68940671796.jpg](https://i.imgur.com/L0VFBCp.jpeg){.zhangyue-img}
:::
:::

[]{#chapter-49.xhtml}

::: {.calibre1}
## 9.3　产品展示 {.tpl-185-title}

::: {.tpl-185-box-cuxian}
:::

::: {.tpl-185-box-middle}
:::

整体外观如图9-5所示，浮子外观如图9-6所示，成果展示如图9-7所示。

::: {.zhangyue-c}
![CmQUOF7V1GCEL8UCAAAAAPhS6Ds417746206.jpg](https://i.imgur.com/kz9jHEk.jpeg){.zhangyue-img}

图9-5　整体外观图
:::

::: {.zhangyue-c}
![CmQUOF7V1GCELQ4xAAAAAJZdGRk398292786.jpg](https://i.imgur.com/ngFZCtv.jpeg){.zhangyue-img}

图9-6　浮子外观图
:::

::: {.zhangyue-c}
![CmQUOV7V1GGEE-jJAAAAAARrOkc419259891.jpg](https://i.imgur.com/F6qwjLj.jpeg){.zhangyue-img2}

图9-7　成果展示图
:::
:::

[]{#chapter-50.xhtml}

::: {.calibre1}
## 9.4　元件清单 {.tpl-185-title}

::: {.tpl-185-box-cuxian}
:::

::: {.tpl-185-box-middle}
:::

完成本项目所用到的元件及数量如表9-4所示。

::: {.zhangyue-c}
表9-4　元件清单

![CmQUOV7V1G2EOjAvAAAAANFouoM006643034.jpg](https://i.imgur.com/tj46eJA.jpeg){.zhangyue-img1}
:::
:::

[]{#chapter-51.xhtml}

::: {.h5_mainbody_bg1}
::: {.h5_rule_hv}
# 第10章 {.tpl-133-text-1-num}

::: {.tpl-133-div-line}
# 自动平衡小车项目设计 ![CmQUOF7V1G-EH2WXAAAAAF19EmE760897358.png](https://i.imgur.com/IugIBZo.jpeg){.zhangyue-footnote} {.tpl-133-title-1-center}
:::

::: {.tpl-133-pic-center}
![CmQUOV7V1G-EPMjIAAAAALGIiMg413130245.png](https://i.imgur.com/BEuqogm.jpeg){.tpl-133-pic-img-h}
:::
:::
:::

::: {.calibre1}
本项目通过Arduino开发板作为主控件，利用蓝牙外部设施，实现机器人小车的平衡直立以及平衡行驶。
:::

[]{#chapter-52.xhtml}

::: {.calibre1}
## 10.1　功能及总体设计 {.tpl-185-title}

::: {.tpl-185-box-cuxian}
:::

::: {.tpl-185-box-middle}
:::

本项目通过Arduino开发板作为主控件，分别连接获取加速度的MPU6050模块、驱动直流电机，使小车行驶的L298N模块，作为操纵行驶方向的蓝牙通信模块等。从而完成受蓝牙指令操纵的自动平衡小车机器人的设计。

要实现上述功能需将作品分为三部分进行设计，即速度控制部分、供电驱动部分和蓝牙控制部分。速度控制部分采用MPU6050模块和PID算法结合；供电驱动部分主要通过L298N模块配合Arduino开发板和一部分代码实现；蓝牙控制部分选用了HC-05模块配合Arduino开发板实现。

1．整体框架图

整体框架如图10-1所示。

::: {.zhangyue-c}
![CmQUOV7V1GGESYUeAAAAAMmGGPk319561391.jpg](https://i.imgur.com/ZnHSuqg.jpeg){.zhangyue-img}

图10-1　整体框架图
:::

2．系统流程图

系统流程如图10-2所示。

3．总电路图

系统总电路如图10-3所示，引脚连接如表10-1所示。

::: {.zhangyue-c}
![CmQUOV7V1GGEI50KAAAAAJk-J0Y235540792.jpg](https://i.imgur.com/bP4SYl7.jpeg){.zhangyue-img2}

图10-2　系统流程图
:::

::: {.zhangyue-c}
![CmQUOV7V1GGECxSdAAAAAG2GADc507734165.jpg](https://i.imgur.com/yDwcJRR.jpeg){.zhangyue-img}

图10-3　系统总电路图
:::

::: {.zhangyue-c}
表10-1　引脚连接表

![CmQUOF7V1G2EL80AAAAAAKi0VYY818712450.jpg](https://i.imgur.com/OcTbfMI.jpeg){.zhangyue-img1}
:::
:::

[]{#chapter-53.xhtml}

::: {.calibre1}
## 10.2　模块介绍 {.tpl-185-title}

::: {.tpl-185-box-cuxian}
:::

::: {.tpl-185-box-middle}
:::

本项目主要包括MPU6050模块、L298N模块和HC-05蓝牙模块。下面分别给出各模块的功能介绍及相关代码。

### 10.2.1　MPU6050模块 {#chapter-53.xhtml#AUTO_ID_43 .text-title}

本部分包括MPU6050模块的功能介绍及相关代码。

1．功能介绍

MPU6050元件将同一芯片上的三轴陀螺仪和三轴加速度计结合在一起，并用SUM处理复杂的六轴运动融合算法。该装置可以通过辅助主I ^2^ C总线访问外部磁力仪或其他传感器，从而允许设备在没有系统处理器干预的情况下收集全套传感器数据。

对于快速和慢速运动的精密跟踪，这些部件具有用户可编程陀螺仪满量程±250°/s、±500°/s、±1000°/s和±2000°/s（DPS），以及用户可编程加速度计的±2g、±4g、±8g和±16g的满量程范围。另外的特征包括嵌入式温度调节器，在工作温度范围内，传感器和片上振荡器有±1%的变化。

在过程控制中，所用控制器是按偏差的比例（P）、积分（I）和微分（D）进行控制的PID自动控制器。元件包括MPU6050模块、Arduino开发板和导线若干。MPU6050的VCC和GND接Arduino开发板的5V电源和GND，SDA接Arduino开发板的A4引脚，SCL接Arduino开发板的A5引脚，INT接Arduino开发板的数字引脚2，电路如图10-4所示。

::: {.zhangyue-c}
![CmQUOV7V1GGEDOXNAAAAAH4yTNU252462386.jpg](https://i.imgur.com/sSqGqxd.jpeg){.zhangyue-img}

图10-4　MPU6050与Arduino开发板连线图
:::

2．相关代码

::: {.zhangyue-c}
![CmQUOF7V1GGEJb9-AAAAAJg8pU8229994387.jpg](https://i.imgur.com/zzjhoNX.jpeg){.zhangyue-img}
:::

::: {.zhangyue-c}
![CmQUOF7V1GGEUWAWAAAAAOe7JAo316150367.jpg](https://i.imgur.com/3GMG8Qi.jpeg){.zhangyue-img}
:::

::: {.zhangyue-c}
![CmQUOF7V1GGEY60zAAAAANX6UGw968172204.jpg](https://i.imgur.com/au4Ggtw.jpeg){.zhangyue-img}
:::

::: {.zhangyue-c}
![CmQUOF7V1GGEfbUGAAAAAGPu_ec632496437.jpg](https://i.imgur.com/J0tQCzO.jpeg){.zhangyue-img}
:::

::: {.zhangyue-c}
![CmQUOF7V1GGEQIL8AAAAAFNpIHo189954450.jpg](https://i.imgur.com/FU8673K.jpeg){.zhangyue-img}
:::

::: {.zhangyue-c}
![CmQUOV7V1GGEUovtAAAAANeTMLw634228328.jpg](https://i.imgur.com/9KUvPrH.jpeg){.zhangyue-img}
:::

### 10.2.2　L298N模块 {#chapter-53.xhtml#AUTO_ID_44 .text-title}

本部分包括L298N模块的功能介绍及相关代码。

1．功能介绍

通过MPU6050模块获取小车的三轴加速度、角速度以及Arduino开发板中PID算法求出弥补值，通过L298N模块完成对自平衡小车直流电机的驱动使之保持直立平衡。同时，用满足直流电机额定电压的电池对L298N进行供电，利用电流容量为1500mA、额定电压为3.7V的锂电池，经过XL6009 DC-DC自动升、降压模块对其进行供电。元件包括L298N模块、Arduino开发板、带编码器的直流减速电机、XL DC-DC自动升、降压模块、电流容量为1500mA、额定电压为3.7V的锂电池和导线若干，电路如图10-5所示。

::: {.zhangyue-c}
![CmQUOV7V1GGEbuYEAAAAACQkFz4569850491.jpg](https://i.imgur.com/GpOzcWG.jpeg){.zhangyue-img}

图10-5　L298N与Arduino开发板连线图
:::

2．相关代码

::: {.zhangyue-c}
![CmQUOF7V1GGEZbROAAAAADs1qtQ588098461.jpg](https://i.imgur.com/q7HjuRZ.jpeg){.zhangyue-img}
:::

### 10.2.3　HC-05蓝牙模块 {#chapter-53.xhtml#AUTO_ID_45 .text-title}

本部分包括HC-05蓝牙模块的功能介绍及相关代码。

1．功能介绍

调整蓝牙模块的通信波特率以适应安卓手机控制需要，将蓝牙模块与Arduino开发板连接之后，利用蓝牙串口APP自定义按键，控制小车前进或后退的方向，实现蓝牙对自平衡小车的控制功能。元件为HC-05蓝牙模块，如图10-6所示。

::: {.zhangyue-c}
![CmQUOF7V1GGEWT_pAAAAAN5ao1k828954713.jpg](https://i.imgur.com/Et9RdNm.jpeg){.zhangyue-img}

图10-6　蓝牙模块原理图
:::

2．相关代码

::: {.zhangyue-c}
![CmQUOF7V1GGENsltAAAAAFVQ7wU454179497.jpg](https://i.imgur.com/4iJOmtQ.jpeg){.zhangyue-img}
:::
:::

[]{#chapter-54.xhtml}

::: {.calibre1}
## 10.3　产品展示 {.tpl-185-title}

::: {.tpl-185-box-cuxian}
:::

::: {.tpl-185-box-middle}
:::

整体外观如图10-7所示，运行状态如图10-8所示，蓝牙控制小车行驶如图10-9所示。

::: {.zhangyue-c}
![CmQUOV7V1GGEYqYhAAAAAODpUtM009059612.jpg](https://i.imgur.com/iTHyGxV.jpeg){.zhangyue-img}

图10-7　整体外观图
:::

::: {.zhangyue-c}
![CmQUOF7V1GGEP-HAAAAAAM8-DBE469630776.jpg](https://i.imgur.com/dMTTDbO.jpeg){.zhangyue-img2}

图10-8　运行状态图
:::

::: {.zhangyue-c}
![CmQUOF7V1GGEDno-AAAAAIcCIqI143991274.jpg](https://i.imgur.com/40yGKT6.jpeg){.zhangyue-img2}

图10-9　蓝牙控制小车运行图
:::
:::

[]{#chapter-55.xhtml}

::: {.calibre1}
## 10.4　元件清单 {.tpl-185-title}

::: {.tpl-185-box-cuxian}
:::

::: {.tpl-185-box-middle}
:::

完成本项目用到的元件及数量如表10-2所示。

::: {.zhangyue-c}
表10-2　元件清单

![CmQUOV7V1G2ESE-6AAAAAKtTyI0193535998.jpg](https://i.imgur.com/sGPBJEh.jpeg){.zhangyue-img1}
:::
:::

[]{#chapter-56.xhtml}

::: {.h5_mainbody_bg1}
::: {.h5_rule_hv}
# 第11章 {.tpl-133-text-1-num}

::: {.tpl-133-div-line}
# 骑行伙伴项目设计 ![CmQUOF7V1G-EH2WXAAAAAF19EmE760897358.png](https://i.imgur.com/sGIr9K0.jpeg){.zhangyue-footnote} {.tpl-133-title-1-center}
:::

::: {.tpl-133-pic-center}
![CmQUOV7V1G-EPMjIAAAAALGIiMg413130245.png](https://i.imgur.com/3qHC1E8.jpeg){.tpl-133-pic-img-h}
:::
:::
:::

::: {.calibre1}
本项目通过Arduino开发平台，将采集位置、速度等信息传输到网页服务端，实时了解骑行人的当前情况。
:::

[]{#chapter-57.xhtml}

::: {.calibre1}
## 11.1　功能及总体设计 {.tpl-185-title}

::: {.tpl-185-box-cuxian}
:::

::: {.tpl-185-box-middle}
:::

本项目主要是对运动中的自行车进行实时测速与定位，并将测量数据实时反馈到网页端，使用计算机、手机等设备进行查看。

要实现上述功能需将作品分为三部分进行设计，即数据获取部分、传输部分和展示部分。数据获取部分使用GPS模块，通过编写代码，先接收卫星信号，收到GPS的相关数据：经纬度、地面速率、UTC时间、半球等，将所测数据通过串口传输到Arduino开发板，由开发板对数据进行解析；传输部分通过Arduino开发板串口将GPS所测数据传输到GPRS模块，通过其2G网络，与远程服务器完成连接；展示部分由网页完成，OneNET服务器将数据传输到网页上进行展示。

1．整体框架图

整体框架如图11-1所示。

::: {.zhangyue-c}
![CmQUOV7V1GGECca7AAAAACfGGag888714470.jpg](https://i.imgur.com/BuhmqD8.jpeg){.zhangyue-img}

图11-1　整体框架图
:::

2．系统流程图

系统流程如图11-2所示。

::: {.zhangyue-c}
![CmQUOF7V1GGEJ82YAAAAAIPdBvo651912259.jpg](https://i.imgur.com/BgLDJUe.jpeg){.zhangyue-img4}

图11-2　系统流程图
:::

3．总电路图

系统总电路如图11-3所示，引脚连接如表11-1所示。

::: {.zhangyue-c}
![CmQUOF7V1GGEETENAAAAAKzk96s390000424.jpg](https://i.imgur.com/jyUP4eH.jpeg){.zhangyue-img}

图11-3　系统总电路图
:::

::: {.zhangyue-c}
表11-1　引脚连接表

![CmQUOV7V1G2ELnysAAAAAEAZDic328815616.jpg](https://i.imgur.com/OuOkdJd.jpeg){.zhangyue-img1}
:::
:::

[]{#chapter-58.xhtml}

::: {.calibre1}
## 11.2　模块介绍 {.tpl-185-title}

::: {.tpl-185-box-cuxian}
:::

::: {.tpl-185-box-middle}
:::

本项目主要包括数据采集模块和服务器传输模块。下面分别给出各模块的功能介绍及相关代码。

### 11.2.1　采集模块 {#chapter-58.xhtml#AUTO_ID_46 .text-title}

本部分包括采集模块的功能介绍及相关代码。

1．功能介绍

GPS模块的功能为：通过编写代码，下载到GPS模块中，使其实现对运动中自行车的测速与定位（经纬度）等功能，并通过串口传输到Arduino开发板。

Arduino开发板的功能为：将GPS模块通过硬串口得到的数据进行解析，并通过软串口传输给GPRS模块。

2．相关代码

::: {.zhangyue-c}
![CmQUOV7V1GGEJuajAAAAAHsA904942256744.jpg](https://i.imgur.com/LzXjWE5.jpeg){.zhangyue-img}
:::

::: {.zhangyue-c}
![CmQUOV7V1GGERxnrAAAAAPKAdKw064100741.jpg](https://i.imgur.com/4vetU6F.jpeg){.zhangyue-img}
:::

::: {.zhangyue-c}
![CmQUOF7V1GGESyBdAAAAAOBn3CA831358324.jpg](https://i.imgur.com/xOrg7yB.jpeg){.zhangyue-img}
:::

::: {.zhangyue-c}
![CmQUOV7V1GGEI3kIAAAAAHB2S0c805403598.jpg](https://i.imgur.com/jlyf1U9.jpeg){.zhangyue-img}
:::

::: {.zhangyue-c}
![CmQUOV7V1GGEZg85AAAAAGeHFYk499952568.jpg](https://i.imgur.com/YN4PMIU.jpeg){.zhangyue-img}
:::

::: {.zhangyue-c}
![CmQUOF7V1GGEK3C4AAAAAJj9oZ4741663902.jpg](https://i.imgur.com/FSy03hl.jpeg){.zhangyue-img}
:::

### 11.2.2　传输模块 {#chapter-58.xhtml#AUTO_ID_47 .text-title}

1．功能介绍

OneNET为中国移动物联网开发平台，该平台为免费开发平台。在本项目中，使用其提供的免费服务器，保存GPRS模块通信传输的数据，并将经纬度转化成地图。

通过编写代码，下载到GPRS模块中，Arduino开发板将经纬度与速度等数据从定义的软串口传到模块中，SIM800通过2G移动网络（使用手机卡，尽管运营商可提供3/4G移动网络，但GPRS模块只能使用2G移动网络进行数据传输）与远程服务器OneNET完成TCP/IP连接，发送POST请求将数据上传至OneNET服务器。

2．相关代码

::: {.zhangyue-c}
![CmQUOF7V1GGEBrpWAAAAAFU-AE4045416800.jpg](https://i.imgur.com/oJpUL85.jpeg){.zhangyue-img}
:::
:::

[]{#chapter-59.xhtml}

::: {.calibre1}
## 11.3　产品展示 {.tpl-185-title}

::: {.tpl-185-box-cuxian}
:::

::: {.tpl-185-box-middle}
:::

实物连接如图11-4所示，部分串口显示结果如图11-5所示，室外测试如图11-6所示，室外测试时某一时刻的位置如图11-7所示。

::: {.zhangyue-c}
![CmQUOV7V1GGEDHX3AAAAAIv4nUA153293984.jpg](https://i.imgur.com/02l1Kjt.jpeg){.zhangyue-img2}

图11-4　实物连接图
:::

::: {.zhangyue-c}
![CmQUOV7V1GGETSoAAAAAADunTzQ984755205.jpg](https://i.imgur.com/LZ1w1fy.jpeg){.zhangyue-img}

图11-5　部分串口显示结果
:::

::: {.zhangyue-c}
![CmQUOV7V1GGEEw6mAAAAAKzpC-U357254179.jpg](https://i.imgur.com/HOfZ8I2.jpeg){.zhangyue-img}

图11-6　室外测试
:::

::: {.zhangyue-c}
![CmQUOF7V1GKEankTAAAAANFsNNY996990587.jpg](https://i.imgur.com/0pXNwtb.jpeg){.zhangyue-img}

图11-7　室外测试时某一时刻的位置图
:::
:::

[]{#chapter-60.xhtml}

::: {.calibre1}
## 11.4　元件清单 {.tpl-185-title}

::: {.tpl-185-box-cuxian}
:::

::: {.tpl-185-box-middle}
:::

完成本项目所用到的元件及数量如表11-2所示。

::: {.zhangyue-c}
表11-2　元件清单

![CmQUOV7V1G2EZpVfAAAAAP6td78783170599.jpg](https://i.imgur.com/pFO3ExI.jpeg){.zhangyue-img1}
:::
:::

[]{#chapter-61.xhtml}

::: {.h5_mainbody_bg1}
::: {.h5_rule_hv}
# 第12章 {.tpl-133-text-1-num}

::: {.tpl-133-div-line}
# 医疗通信设备项目设计 ![CmQUOF7V1G-EH2WXAAAAAF19EmE760897358.png](https://i.imgur.com/Qh6ZrMJ.jpeg){.zhangyue-footnote} {.tpl-133-title-1-center}
:::

::: {.tpl-133-pic-center}
![CmQUOV7V1G-EPMjIAAAAALGIiMg413130245.png](https://i.imgur.com/5Y4aLYj.jpeg){.tpl-133-pic-img-h}
:::
:::
:::

::: {.calibre1}
本项目通过Arduino开发板连接传感器，使Processing能够实现实时监测心率和脉搏的功能。
:::

[]{#chapter-62.xhtml}

::: {.calibre1}
## 12.1　功能及总体设计 {.tpl-185-title}

::: {.tpl-185-box-cuxian}
:::

::: {.tpl-185-box-middle}
:::

本项目设计实现医疗和通信相结合，从不同角度对老人或残障人士的身体状况进行监视并实现紧急联系功能。主要分为三个方面：一是对心率和脉搏的监测功能；二是实现在心率、脉搏出现异常的情况下进行短信紧急呼救，并根据身体状态的不同自行发送呼救信息；三是使紧急联系人在OneNET平台观测到呼救人的具体方位及行动范围的实时信息。

要实现上述功能需将作品分成四部分进行设计，即输入部分、处理部分、传输部分和输出部分。输入部分为心率脉搏传感器的传入信息，GPS的位置获取，不同按键的输入；处理部分主要通过Arduino开发板语言实现；传输部分选用PulseSensor模块、SIM800C模块、GPS模块、A6模块配合Arduino开发板实现；输出部分为服务器和软件输出两个部分，输出位置信息和心率、脉搏信息。

1．整体框架图

整体框架如图12-1所示。

::: {.zhangyue-c}
![CmQUOF7V1GKEXS1kAAAAAHjeW0A398684710.jpg](https://i.imgur.com/Sfy571Z.jpeg){.zhangyue-img}

图12-1　整体框架图
:::

2．系统流程图

系统流程如图12-2所示。

::: {.zhangyue-c}
![CmQUOF7V1GKEKBtyAAAAAPz9bqA933465065.jpg](https://i.imgur.com/GP5RKI1.jpeg){.zhangyue-img3}

图12-2　系统流程图
:::

通过PulseSensor心率脉搏传感器监测，并在Processing进行显示，如果有异常可以触发不同颜色的按键开关。通过A6模块向紧急联系人发送不同内容的短信，GPS模块获取位置信息，并用SIM800C模块进行传输，连接后台至OneNET，打开网页或者手机APP查看。

3．总电路图

系统总电路如图12-3所示，引脚连接如表12-1所示。

::: {.zhangyue-c}
![CmQUOV7V1GKEMdSDAAAAAH6GFWM996349737.jpg](https://i.imgur.com/4gREskb.jpeg){.zhangyue-img}

图12-3　系统总电路图
:::

::: {.zhangyue-c}
表12-1　引脚连接表

![CmQUOF7V1G2ETs2oAAAAABpi9Zo888580411.jpg](https://i.imgur.com/L8RnKvA.jpeg){.zhangyue-img1}
:::
:::

[]{#chapter-63.xhtml}

::: {.calibre1}
## 12.2　模块介绍 {.tpl-185-title}

::: {.tpl-185-box-cuxian}
:::

::: {.tpl-185-box-middle}
:::

本项目主要包括主程序模块、PulseSensor心率脉搏传感器模块、A6模块、GPS模块、SIM800C模块、Processing显示模块和OneNET平台模块。下面分别给出各模块的功能介绍及相关代码。

### 12.2.1　主程序模块 {#chapter-63.xhtml#AUTO_ID_48 .text-title}

本部分包括主程序模块的功能介绍及相关代码。

1．功能介绍

主程序主要对各模块进行连接，使其能从输入到处理顺利输出结果。

2．相关代码

::: {.zhangyue-c}
![CmQUOF7V1GKEapuEAAAAAIALPFg822553483.jpg](https://i.imgur.com/KP400jA.jpeg){.zhangyue-img}
:::

::: {.zhangyue-c}
![CmQUOV7V1GKEJOYmAAAAAFNG_5Y743363498.jpg](https://i.imgur.com/hD6wMwW.jpeg){.zhangyue-img}
:::

::: {.zhangyue-c}
![CmQUOV7V1GKEa-VkAAAAAPWfpLI641590490.jpg](https://i.imgur.com/LsjZxhq.jpeg){.zhangyue-img}
:::

::: {.zhangyue-c}
![CmQUOV7V1GKEP4oZAAAAAC6aF8A108820204.jpg](https://i.imgur.com/vCJ9Uxl.jpeg){.zhangyue-img}
:::

### 12.2.2　心率脉搏传感器模块 {#chapter-63.xhtml#AUTO_ID_49 .text-title}

本部分包括PulseSensor心率脉搏传感器模块的功能介绍及相关代码。

1．功能介绍

心率脉搏传感器是一款用于脉搏、心率测量的光电反射式模拟传感器，光束通过反射的方式传输到光电接收器。此过程中，皮肤、肌肉、组织等对光的吸收在整个血液循环中恒定不变，而皮肤内的血液容积在心脏作用下呈搏动性变化；心脏收缩时光的吸收量大，检测到的光强最少，心脏舒张时正好相反；因此，可以把光强度变化信号转变为电信号，获得脉搏相关信息。元件包括PulseSensor心率脉搏传感器模块、Arduino开发板和导线若干，电路如图12-4所示。

::: {.zhangyue-c}
![CmQUOV7V1GKEfgbpAAAAABOWmlo980802267.jpg](https://i.imgur.com/rDOvawP.jpeg){.zhangyue-img}

图12-4　PulseSensor与Arduino开发板连线图
:::

2．相关代码

::: {.zhangyue-c}
![CmQUOV7V1GKEYVQvAAAAAA1mY0o576589090.jpg](https://i.imgur.com/2H1TN0M.jpeg){.zhangyue-img}
:::

::: {.zhangyue-c}
![CmQUOV7V1GKEXauaAAAAAMRrD2s672415172.jpg](https://i.imgur.com/wnuIlYe.jpeg){.zhangyue-img}
:::

::: {.zhangyue-c}
![CmQUOV7V1GKENJPuAAAAAN3Macs720819109.jpg](https://i.imgur.com/ioul6xC.jpeg){.zhangyue-img}
:::

### 12.2.3　A6模块 {#chapter-63.xhtml#AUTO_ID_50 .text-title}

本部分包括A6模块的功能介绍及相关代码。

1．功能介绍

通过发送短信实现与紧急联系人通信的功能。元件包括A6模块、Arduino开发板、按键开关和导线若干，电路如图12-5所示。

::: {.zhangyue-c}
![CmQUOF7V1GKEM3wwAAAAAPykfE4761056092.jpg](https://i.imgur.com/fa7UCEO.jpeg){.zhangyue-img}

图12-5　A6模块与Arduino开发板连线图
:::

2．相关代码

::: {.zhangyue-c}
![CmQUOV7V1GKEZuSVAAAAALHKCWY373917585.jpg](https://i.imgur.com/deua7FY.jpeg){.zhangyue-img}
:::

::: {.zhangyue-c}
![CmQUOV7V1GKEdZpOAAAAAGFWmpw602556283.jpg](https://i.imgur.com/fWKWBku.jpeg){.zhangyue-img}
:::

::: {.zhangyue-c}
![CmQUOV7V1GKEGVtgAAAAAA7HD9c343925669.jpg](https://i.imgur.com/mLs7NEs.jpeg){.zhangyue-img}
:::

::: {.zhangyue-c}
![CmQUOF7V1GKEWJwOAAAAAOG1u20838306319.jpg](https://i.imgur.com/HynhaMD.jpeg){.zhangyue-img}
:::

::: {.zhangyue-c}
![CmQUOF7V1GKEc4U1AAAAABvR7jw708599576.jpg](https://i.imgur.com/z9tPdTu.jpeg){.zhangyue-img}
:::

### 12.2.4　GPS模块和SIM800C模块 {#chapter-63.xhtml#AUTO_ID_51 .text-title}

本部分包括GPS模块和SIM800C模块的功能介绍及相关代码。

1．功能介绍

两个模块相连接实现获取呼救人的GPS准确定位和通过GPRS进行传输的功能。元件包括SIM800C模块、GPS模块、Arduino开发板和若干导线，电路如图12-6所示。

::: {.zhangyue-c}
![CmQUOF7V1GKEDGCrAAAAAJm0MlA796621192.jpg](https://i.imgur.com/N9x0prX.jpeg){.zhangyue-img}

图12-6　SIM800C模块、GPS模块与Arduino开发板连线图
:::

2．相关代码

::: {.zhangyue-c}
![CmQUOF7V1GKEGZMoAAAAAIWBZ6k382541234.jpg](https://i.imgur.com/w7FfWJH.jpeg){.zhangyue-img}
:::

::: {.zhangyue-c}
![CmQUOV7V1GKECBLmAAAAAPuefXc883951012.jpg](https://i.imgur.com/K6XPaga.jpeg){.zhangyue-img}
:::

::: {.zhangyue-c}
![CmQUOV7V1GKEVVH1AAAAAARBVyw906364709.jpg](https://i.imgur.com/SVFzIo8.jpeg){.zhangyue-img}
:::

::: {.zhangyue-c}
![CmQUOV7V1GKECLT-AAAAALWcEbI367695395.jpg](https://i.imgur.com/kjYltOp.jpeg){.zhangyue-img}
:::

::: {.zhangyue-c}
![CmQUOV7V1GKEPz_0AAAAAE9RUz0503412679.jpg](https://i.imgur.com/JIdAtSy.jpeg){.zhangyue-img}
:::

::: {.zhangyue-c}
![CmQUOF7V1GKEFkdLAAAAAEKK8cU161367568.jpg](https://i.imgur.com/hhjSPgy.jpeg){.zhangyue-img}
:::

### 12.2.5　Processing显示模块 {#chapter-63.xhtml#AUTO_ID_52 .text-title}

本部分包括Processing显示模块的功能介绍及相关代码。

1．功能介绍

通过Processing软件输出信息，形式为数值和图像。元件包括PulseSensor心率脉搏传感器、Arduino开发板和若干导线。直接启动Processing软件，如图12-7所示，Processing运行如图12-8所示，输出端显示如图12-9所示。

::: {.zhangyue-c}
![CmQUOF7V1GKEHiS5AAAAAMNPfGw227744773.jpg](https://i.imgur.com/C7IAoNq.jpeg){.zhangyue-img}

图12-7　启动Processing软件
:::

::: {.zhangyue-c}
![CmQUOF7V1GKECVDbAAAAAOe-MTM002007114.jpg](https://i.imgur.com/aAyDZDm.jpeg){.zhangyue-img}

图12-8　运行图
:::

::: {.zhangyue-c}
![CmQUOV7V1GOEGQ4dAAAAAFgl1dE623648284.jpg](https://i.imgur.com/5bRbK3Y.jpeg){.zhangyue-img}

图12-9　输出数据显示图
:::

2．相关代码

::: {.zhangyue-c}
![CmQUOV7V1GOEf0SZAAAAAGZZuNM583195445.jpg](https://i.imgur.com/0N8ytMp.jpeg){.zhangyue-img}
:::

::: {.zhangyue-c}
![CmQUOV7V1GOEVbn-AAAAAGCPuTQ064918681.jpg](https://i.imgur.com/dBgTZp2.jpeg){.zhangyue-img}
:::

::: {.zhangyue-c}
![CmQUOF7V1GOEXa21AAAAAK9Z0Z8016869491.jpg](https://i.imgur.com/WykRRrk.jpeg){.zhangyue-img}
:::

::: {.zhangyue-c}
![CmQUOF7V1GOEWquNAAAAAJqgHZs653060460.jpg](https://i.imgur.com/o0SB9bR.jpeg){.zhangyue-img}
:::

### 12.2.6　OneNET平台模块 {#chapter-63.xhtml#AUTO_ID_53 .text-title}

本部分包括OneNET平台模块的功能介绍及相关代码。

1．功能介绍

OneNET平台输出形式为地图样式和经纬度数值，手机APP端设备云显示。元件包括GPS传感器、SIM800C模块、Arduino开发板和若干导线。进入OneNET平台如图12-10所示，注册新用户如图12-11所示，输入设备如图12-12所示，ID与API key如图12-13所示，室外显示如图12-14所示，平台显示如图12-15所示。

::: {.zhangyue-c}
![CmQUOF7V1GOEMx_OAAAAAEeEQXw483828830.jpg](https://i.imgur.com/4m5oXb1.jpeg){.zhangyue-img}

图12-10　OneNET平台网站
:::

::: {.zhangyue-c}
![CmQUOV7V1GOEPDOqAAAAACJSLSA592161767.jpg](https://i.imgur.com/xuSkmct.jpeg){.zhangyue-img}

图12-11　注册新用户
:::

::: {.zhangyue-c}
![CmQUOF7V1GOEY1ZRAAAAAPMp_hg477594159.jpg](https://i.imgur.com/4Zg6iBW.jpeg){.zhangyue-img}

图12-12　输入设备图
:::

::: {.zhangyue-c}
![CmQUOV7V1GOEB78eAAAAAJjZAwU017112789.jpg](https://i.imgur.com/fLCEotO.jpeg){.zhangyue-img}

图12-13　ID与API key图
:::

::: {.zhangyue-c}
![CmQUOV7V1GOEf_TVAAAAABLJigE180985734.jpg](https://i.imgur.com/LVU0y77.jpeg){.zhangyue-img}

图12-14　室外显示图
:::

::: {.zhangyue-c}
![CmQUOF7V1GOEDYNLAAAAAJa9s34592669708.jpg](https://i.imgur.com/sVT6ZDS.jpeg){.zhangyue-img2}

图12-15　平台显示图
:::

2．相关代码

::: {.zhangyue-c}
![CmQUOF7V1GOETnp-AAAAAM0p98A974926763.jpg](https://i.imgur.com/dvlv9C1.jpeg){.zhangyue-img}
:::

::: {.zhangyue-c}
![CmQUOV7V1GOEXrn5AAAAAIwCE_A126942844.jpg](https://i.imgur.com/IjOihh3.jpeg){.zhangyue-img}
:::

::: {.zhangyue-c}
![CmQUOV7V1GOEVmNsAAAAAPQq7ZM125520543.jpg](https://i.imgur.com/Z2BlhHg.jpeg){.zhangyue-img}
:::

::: {.zhangyue-c}
![CmQUOV7V1GOEICSbAAAAADyNr5A522997580.jpg](https://i.imgur.com/LZt70W2.jpeg){.zhangyue-img}
:::

::: {.zhangyue-c}
![CmQUOF7V1GOEFfN3AAAAAAkGUVY735088372.jpg](https://i.imgur.com/Mk3gCp7.jpeg){.zhangyue-img}
:::

::: {.zhangyue-c}
![CmQUOF7V1GOEantaAAAAAESWE9k516896974.jpg](https://i.imgur.com/okz93gI.jpeg){.zhangyue-img}
:::

::: {.zhangyue-c}
![CmQUOV7V1GOEMGu0AAAAANJRK6k521887090.jpg](https://i.imgur.com/WFYUyGA.jpeg){.zhangyue-img}
:::

::: {.zhangyue-c}
![CmQUOV7V1GOEfYDUAAAAADK_W14606930783.jpg](https://i.imgur.com/fQRRYML.jpeg){.zhangyue-img}
:::
:::

[]{#chapter-64.xhtml}

::: {.calibre1}
## 12.3　产品展示 {.tpl-185-title}

::: {.tpl-185-box-cuxian}
:::

::: {.tpl-185-box-middle}
:::

整体外观如图12-16所示，Processing显示界面如图12-17所示，OneNET显示如图12-18所示，手机APP显示如图12-19所示。图12-16中，以Arduino开发板上方为中心，PulseSensor传感器为输入部分，左方的GPS模块与右方SIM800C模块完成定位功能，A6模块与按键一起完成短信通信功能，整体使用电池与充电宝供电。

::: {.zhangyue-c}
![CmQUOF7V1GOECK-nAAAAAGJSM70918525409.jpg](https://i.imgur.com/nP24fg3.jpeg){.zhangyue-img}

图12-16　整体外观图
:::

::: {.zhangyue-c}
![CmQUOF7V1GOEHN3AAAAAAFf9gQ4934151303.jpg](https://i.imgur.com/7gbGseQ.jpeg){.zhangyue-img}

图12-17　Processing显示图
:::

::: {.zhangyue-c}
![CmQUOV7V1GOELTEwAAAAAAvdXS0730837389.jpg](https://i.imgur.com/h9pCP7v.jpeg){.zhangyue-img}

图12-18　OneNET显示图
:::

::: {.zhangyue-c}
![CmQUOV7V1GOEe_s5AAAAAMr1CeU278233504.jpg](https://i.imgur.com/GPiZPXd.jpeg){.zhangyue-img2}

图12-19　手机APP显示图
:::
:::

[]{#chapter-65.xhtml}

::: {.calibre1}
## 12.4　元件清单 {.tpl-185-title}

::: {.tpl-185-box-cuxian}
:::

::: {.tpl-185-box-middle}
:::

完成本项目所用到的元件及数量如表12-2所示。

::: {.zhangyue-c}
表12-2　元件清单

![CmQUOF7V1G2EMf3NAAAAACP9xWk182087479.jpg](https://i.imgur.com/78yteBs.jpeg){.zhangyue-img1}
:::
:::

[]{#chapter-66.xhtml}

::: {.h5_mainbody_bg1}
::: {.h5_rule_hv}
# 第13章 {.tpl-133-text-1-num}

::: {.tpl-133-div-line}
# 求救系统项目设计 ![CmQUOF7V1G-EH2WXAAAAAF19EmE760897358.png](https://i.imgur.com/3gXwYmV.jpeg){.zhangyue-footnote} {.tpl-133-title-1-center}
:::

::: {.tpl-133-pic-center}
![CmQUOV7V1G-EPMjIAAAAALGIiMg413130245.png](https://i.imgur.com/URCkE7U.jpeg){.tpl-133-pic-img-h}
:::
:::
:::

::: {.calibre1}
本项目通过GPRS将GPS模块获取的地理位置信息上传到OneNET云平台，并通过云平台在地图上实时查看设备所处的位置，实现发送求救短信和拨打求救电话的功能，达到即时救援的目的。
:::

[]{#chapter-67.xhtml}

::: {.calibre1}
## 13.1　功能及总体设计 {.tpl-185-title}

::: {.tpl-185-box-cuxian}
:::

::: {.tpl-185-box-middle}
:::

本项目通过GPS模块接收当前用户所在的经纬度、海拔和时间等信息，通过串口发送信息给开发板进行处理分析；Arduino开发板处理器是整个系统运行的核心，将接收到的GPS信息通过串口发送到GPRS模块中；GPRS模块负责信息发送，通过已有的网络，将开发板接收的信号发送到对应的平台和用户；OneNET云平台负责数据收集，平台收集到的经纬度信息可以在百度地图上实时显示出来，通过精确的位置显示，知道求救者的行程，进行及时施救；LCD液晶显示屏将求救者所在的地理位置信息显示在屏幕上，使其能够感知自己的位置变化；简易拉闸部分是物理开关，求救者拉闸之后，GPRS模块向设定联系人发送求救短信以及拨打求救电话。

要实现上述功能需将作品分成四部分进行设计，即触发源部分、输入部分、处理部分和传输部分。触发源部分为简易拉闸，输入部分为GPS模块，处理部分为Arduino开发板，传输部分为GPRS模块。

1．整体框架图

整体框架如图13-1所示。

::: {.zhangyue-c}
![CmQUOF7V1GOEYugJAAAAAEdOr0g778679463.jpg](https://i.imgur.com/3Pu2UZO.jpeg){.zhangyue-img}

图13-1　整体框架图
:::

2．系统流程图

系统流程如图13-2所示。

::: {.zhangyue-c}
![CmQUOF7V1GOEJ4FNAAAAAM2MZLM018317675.jpg](https://i.imgur.com/dG3iPKO.jpeg){.zhangyue-img2}

图13-2　系统流程图
:::

3．总电路图

系统总电路如图13-3所示，引脚连接如表13-1所示。

::: {.zhangyue-c}
![CmQUOV7V1GOEX5UVAAAAAK_TwC8759616534.jpg](https://i.imgur.com/88W6Vst.jpeg){.zhangyue-img}

图13-3　系统总电路图
:::

::: {.zhangyue-c}
表13-1　引脚连接表

![CmQUOV7V1G2ELlRFAAAAALExVz4442372915.jpg](https://i.imgur.com/JHbO75b.jpeg){.zhangyue-img1}
:::
:::

[]{#chapter-68.xhtml}

::: {.calibre1}
## 13.2　模块介绍 {.tpl-185-title}

::: {.tpl-185-box-cuxian}
:::

::: {.tpl-185-box-middle}
:::

本项目主要包括GPRS模块、GPS模块、LCD模块和Arduino开发板。下面分别给出各模块的功能介绍及相关代码。

### 13.2.1　GPRS模块 {#chapter-68.xhtml#AUTO_ID_54 .text-title}

本部分包括GPRS模块的功能介绍及相关代码。

1．功能介绍

GPRS模块主要是建立与OneNET云平台的联系，即GPS模块获得的地理位置信息发送到Arduino开发板，经开发板转换后的数据流通过GPRS模块上传到云平台，以及GPRS模块拨打预留号码，同时向预留手机用户发送求救信息。短信的具体内容为："我遇到了危险，请登录OneNET查看我的位置信息（账号13031030366，密码asdf1234），并尽快报警！"以提示对遇害者发起救援。由Arduino开发板编程语言实现，编译环境为Arduino IDE。GPRS模块与云平台的通信协议为HTTP。由于GPS模块获取到的数据格式与云平台支持的数据格式不一致，故需要将其转换成OneNET格式，最终上传到云端的数据流格式为JSON格式。元件包括GPRS模块、Arduino开发板和导线若干，电路如图13-4所示。

::: {.zhangyue-c}
![CmQUOV7V1GOEFl2HAAAAAG7PkV4628048875.jpg](https://i.imgur.com/R8g7SNJ.jpeg){.zhangyue-img}

图13-4　GPRS模块与Arduino开发板连线图
:::

2．相关代码

::: {.zhangyue-c}
![CmQUOF7V1GSEA2pbAAAAAHhz6PY145183824.jpg](https://i.imgur.com/vYKBGPX.jpeg){.zhangyue-img2}
:::

::: {.zhangyue-c}
![CmQUOF7V1GSEJKlxAAAAAIX7wkw447782295.jpg](https://i.imgur.com/5rOBRsr.jpeg){.zhangyue-img}
:::

::: {.zhangyue-c}
![CmQUOV7V1GSEdQG3AAAAABmYfps925727893.jpg](https://i.imgur.com/C33IUtu.jpeg){.zhangyue-img}
:::

::: {.zhangyue-c}
![CmQUOF7V1GSENtAwAAAAAOBvwb0141660205.jpg](https://i.imgur.com/oklPcIg.jpeg){.zhangyue-img}
:::

::: {.zhangyue-c}
![CmQUOF7V1GSEDrIAAAAAAKemdII212868223.jpg](https://i.imgur.com/sjjjoqt.jpeg){.zhangyue-img}
:::

::: {.zhangyue-c}
![CmQUOV7V1GSEOJrtAAAAACSiAR4429855627.jpg](https://i.imgur.com/IB2AFme.jpeg){.zhangyue-img}
:::

### 13.2.2　GPS模块 {#chapter-68.xhtml#AUTO_ID_55 .text-title}

本部分包括GPS模块的功能介绍及相关代码。

1．功能介绍

GPS模块的功能是获取遇害者的地理位置信息，包括经度和纬度。元件包括GPS模块、Arduino开发板和导线若干，电路如图13-5所示。

::: {.zhangyue-c}
![CmQUOV7V1GSEPsLDAAAAAMX80_Q309853046.jpg](https://i.imgur.com/uAli7xc.jpeg){.zhangyue-img}

图13-5　GPS模块与Arduino开发板模块连接图
:::

2．相关代码

::: {.zhangyue-c}
![CmQUOF7V1GSEd2rYAAAAAJMvMKk323219124.jpg](https://i.imgur.com/kBRPJUQ.jpeg){.zhangyue-img}
:::

::: {.zhangyue-c}
![CmQUOF7V1GSERzBpAAAAAOHTbck222711142.jpg](https://i.imgur.com/UPinyxV.jpeg){.zhangyue-img}
:::

::: {.zhangyue-c}
![CmQUOV7V1GSEPpe3AAAAAF5-w90309785227.jpg](https://i.imgur.com/Fr6mX33.jpeg){.zhangyue-img}
:::

### 13.2.3　LCD模块 {#chapter-68.xhtml#AUTO_ID_56 .text-title}

本部分包括LCD输出模块的功能介绍及相关代码。

1．功能介绍

将GPS模块获取的地理位置信息（经度和纬度信息）在LCD模块上显示出来。通过经纬度的实时更新显示，可以提供遇害者明确的位置信息。元件包括LCD模块，Arduino开发板和导线若干，电路如图13-6所示。

::: {.zhangyue-c}
![CmQUOF7V1GSEHtnnAAAAAI33KHk251540273.jpg](https://i.imgur.com/wFWSQGz.jpeg){.zhangyue-img}

图13-6　LCD模块与Arduino开发板连接图
:::

2．相关代码

::: {.zhangyue-c}
![CmQUOF7V1GSERR7RAAAAAAEeY-I517037269.jpg](https://i.imgur.com/cLEkc4d.jpeg){.zhangyue-img}
:::

### 13.2.4　Arduino开发板模块 {#chapter-68.xhtml#AUTO_ID_57 .text-title}

本部分包括Arduino开发板模块的功能介绍及相关代码。

1．功能介绍

由于GPS数据流经GPRS模块发送到OneNET云平台之后，通过地图展示出来，所以在数据发送之前，应该将地理位置信息转换成OneNET可读的格式，即JSON格式。

2．相关代码

::: {.zhangyue-c}
![CmQUOF7V1GSENVKYAAAAAOnFz7s655808723.jpg](https://i.imgur.com/3eUxH2l.jpeg){.zhangyue-img}
:::
:::

[]{#chapter-69.xhtml}

::: {.calibre1}
## 13.4　产品展示 {.tpl-185-title}

::: {.tpl-185-box-cuxian}
:::

::: {.tpl-185-box-middle}
:::

整体外观如图13-7所示，内部结构如图13-8所示，云平台展示如图13-9所示。

::: {.zhangyue-c}
![CmQUOF7V1GSEEgj5AAAAAPoclZ4357201367.jpg](https://i.imgur.com/tlvq1yt.jpeg){.zhangyue-img}

图13-7　整体外观展示图
:::

::: {.zhangyue-c}
![CmQUOV7V1GSEWceNAAAAADqkj5w148700741.jpg](https://i.imgur.com/W0youD8.jpeg){.zhangyue-img}

图13-8　内部结构图
:::

::: {.zhangyue-c}
![CmQUOF7V1GSEHvI1AAAAADlhzI8739127928.jpg](https://i.imgur.com/jFQg05Q.jpeg){.zhangyue-img}

图13-9　云平台展示
:::
:::

[]{#chapter-70.xhtml}

::: {.calibre1}
## 13.4　元件清单 {.tpl-185-title}

::: {.tpl-185-box-cuxian}
:::

::: {.tpl-185-box-middle}
:::

完成本项目所用到的元件及数量如表13-2所示。

::: {.zhangyue-c}
表13-2　元件清单

![CmQUOF7V1G2EQ9WJAAAAABU6GEw596545134.jpg](https://i.imgur.com/IdphMZV.jpeg){.zhangyue-img1}
:::
:::

[]{#chapter-71.xhtml}

::: {.h5_mainbody_bg1}
::: {.h5_rule_hv}
# 第14章 {.tpl-133-text-1-num}

::: {.tpl-133-div-line}
# 头戴式脑电波项目设计 {.tpl-133-title-1-center}
:::

::: {.tpl-133-pic-center}
![CmQUOV7V1G-EPMjIAAAAALGIiMg413130245.png](https://i.imgur.com/qeLYvFL.jpeg){.tpl-133-pic-img-h}
:::
:::
:::

::: {.calibre1}
本项目基于脑电波识别的状态检测，实现注意力频闪小灯和眼动识别系统。
:::

[]{#chapter-72.xhtml}

::: {.calibre1}
## 14.1　功能及总体设计 {.tpl-185-title}

::: {.tpl-185-box-cuxian}
:::

::: {.tpl-185-box-middle}
:::

本项目采用神念科技公司的头戴式脑电波传感器，通过三个电极采集人的脑电波，包括部分神经脉冲、TGMA芯片完成滤波与解析的工作，并通过蓝牙模块将采集到的脑电波原始波形以及解析出来的各种参数，以JSON数据包的形式发送到蓝牙接收端后，把它们加以处理作为控制信号来完成注意力频闪小灯。眼动识别，主要采用分段采集数据并与样本数据进行比较，计算相关系数的方法识别眼动信号。首先是取样，采集自己眨眼时的信号，多次采样并取平均值，从而建立用于比较的样本。然后用Python分段读取串口发出的数据，并和样本数据一起计算相关系数，若相关系数达到要求，就判定为"眼动"。

要实现上述功能需将作品分为三部分进行设计，即数据包解析模块、注意力频闪小灯模块和眼动识别模块。数据包解析模块，获得脑电波原始波形和注意力值、冥想值等各种有意义的参数；注意力频闪小灯功能模块，根据注意力程度不同进行频率不同的闪烁，注意力越高，闪烁越快。眼动识别模块，可以检测到眼睛的动作及其力度，控制LED的亮灭。普通的眼动并不会影响灯的亮灭，达到一定力度后，即可控制灯的开关。

1．整体框架图

整体框架如图14-1所示。

::: {.zhangyue-c}
![CmQUOF7V1GSEWqT3AAAAAFX0KsA148801937.jpg](https://i.imgur.com/rJAfPmD.jpeg){.zhangyue-img}

图14-1　整体框架图
:::

2．系统流程图

系统流程如图14-2所示。

::: {.zhangyue-c}
![CmQUOV7V1GSENk1fAAAAALZTtt4152974352.jpg](https://i.imgur.com/fJmLdEF.jpeg){.zhangyue-img3}

图14-2　系统流程图
:::

3．总电路图

系统总电路如图14-3所示，眼动识别如图14-4所示，注意力频闪小灯引脚设定如表14-1所示，眼动识别引脚设定如表14-2所示。

::: {.zhangyue-c}
![CmQUOF7V1GSENfoyAAAAACwgwGU794480163.jpg](https://i.imgur.com/76hmO1x.jpeg){.zhangyue-img}

图14-3　系统总电路图
:::

::: {.zhangyue-c}
![CmQUOV7V1GSEBiQ5AAAAANth3JI691576081.jpg](https://i.imgur.com/pcC9jZ4.jpeg){.zhangyue-img}

图14-4　眼动识别图
:::

::: {.zhangyue-c}
表14-1　注意力频闪小灯引脚设定连接表

![CmQUOV7V1G2EKj_oAAAAAJUXS0o432337771.jpg](https://i.imgur.com/ofxJ1M8.jpeg){.zhangyue-img1}
:::

::: {.zhangyue-c}
表14-2　眼动识别引脚设定连接表

![CmQUOF7V1G2EIO-MAAAAAKHiqR0044220938.jpg](https://i.imgur.com/sMO9Ef8.jpeg){.zhangyue-img1}
:::
:::

[]{#chapter-73.xhtml}

::: {.calibre1}
## 14.2　模块介绍 {.tpl-185-title}

::: {.tpl-185-box-cuxian}
:::

::: {.tpl-185-box-middle}
:::

本项目主要包括数据包解析模块、注意力频闪小灯模块和眼动识别模块。下面分别给出各模块的功能介绍及相关代码。

### 14.2.1　数据包解析模块 {#chapter-73.xhtml#AUTO_ID_58 .text-title}

本部分包括数据包解析模块的功能介绍及相关代码。

1．功能介绍

通过蓝牙模块完成TGAM芯片返回数据包的解析，将原始数据解析为数据流格式。

2．相关代码

说明：本代码为C++程序，主要功能是完成数据包的解析，并在Arduino开发板程序中可调用的库文件。

::: {.zhangyue-c}
![CmQUOF7V1GSEPhCgAAAAAEDwg1M979835340.jpg](https://i.imgur.com/gJ88MFp.jpeg){.zhangyue-img}
:::

::: {.zhangyue-c}
![CmQUOF7V1GSEa-6NAAAAAJsUMd0425181961.jpg](https://i.imgur.com/7Dx5ObI.jpeg){.zhangyue-img}
:::

::: {.zhangyue-c}
![CmQUOV7V1GSEF98mAAAAAH33BF4748939409.jpg](https://i.imgur.com/FO4aQhP.jpeg){.zhangyue-img}
:::

::: {.zhangyue-c}
![CmQUOF7V1GSEej8zAAAAAJirxNU436745343.jpg](https://i.imgur.com/KUd2jFt.jpeg){.zhangyue-img}
:::

::: {.zhangyue-c}
![CmQUOV7V1GSERwtoAAAAAF6WG4o267798063.jpg](https://i.imgur.com/Wi3CnU8.jpeg){.zhangyue-img}
:::

::: {.zhangyue-c}
![CmQUOF7V1GSEfqTSAAAAANtIuUw143476062.jpg](https://i.imgur.com/oMgoQdF.jpeg){.zhangyue-img}
:::

::: {.zhangyue-c}
![CmQUOF7V1GSETi7pAAAAACCOfc8553118682.jpg](https://i.imgur.com/tvbPi3Y.jpeg){.zhangyue-img}
:::

### 14.2.2　注意力频闪小灯功能模块 {#chapter-73.xhtml#AUTO_ID_59 .text-title}

本部分包括注意力频闪小灯模块的功能介绍及相关代码。

1．功能介绍

小灯根据注意力程度不同进行频率不同的闪烁，注意力越高，闪烁越快。因此，通过这个功能来检测每个时段做事时注意力的集中程度，从而实时调整自己的作息时间，使工作效率得到提升。元件包括HC-05蓝牙模块、Arduino开发板、面包板、LED、200Ω电阻和导线若干，电路如图14-5所示。

::: {.zhangyue-c}
![CmQUOV7V1GSEWzPvAAAAAFj8SxM298824441.jpg](https://i.imgur.com/mSwtpdg.jpeg){.zhangyue-img}

图14-5　注意力频闪小灯连线图
:::

2．相关代码

::: {.zhangyue-c}
![CmQUOV7V1GSEHVd5AAAAAE6X_ak816772408.jpg](https://i.imgur.com/CiyWrBS.jpeg){.zhangyue-img}
:::

### 14.2.3　眼动识别模块 {#chapter-73.xhtml#AUTO_ID_60 .text-title}

本部分包括眼动识别模块的功能介绍及相关代码。

1．功能介绍

可以检测到眼睛的眨动及其力度，通过它控制LED的亮灭。元件包括HC-05蓝牙模块、Arduino开发板、面包板、LED、200Ω电阻和导线若干，原理如图14-6所示。

::: {.zhangyue-c}
![CmQUOV7V1GWEC11zAAAAAHGiJEw914818148.jpg](https://i.imgur.com/vvaVomt.jpeg){.zhangyue-img}

图14-6　眼动识别原理图
:::

2．相关代码

::: {.zhangyue-c}
![CmQUOV7V1GSERio4AAAAALibr30028404095.jpg](https://i.imgur.com/FkvlaEY.jpeg){.zhangyue-img}
:::

::: {.zhangyue-c}
![CmQUOF7V1GWEGfMUAAAAAGge7Eg482608763.jpg](https://i.imgur.com/TfNmJer.jpeg){.zhangyue-img}
:::

::: {.zhangyue-c}
![CmQUOF7V1GWEbIdzAAAAALlyMYA944112208.jpg](https://i.imgur.com/umFCvyu.jpeg){.zhangyue-img}
:::
:::

[]{#chapter-74.xhtml}

::: {.calibre1}
## 14.3　产品展示 {.tpl-185-title}

::: {.tpl-185-box-cuxian}
:::

::: {.tpl-185-box-middle}
:::

注意力频闪小灯演示如图14-7所示，小灯闪烁的频率用来反映注意力的集中程度。眼动识别演示如图14-8所示，小灯亮灭反映是否眨眼。

::: {.zhangyue-c}
![CmQUOF7V1GWEFlB2AAAAAAVuzZo995873412.jpg](https://i.imgur.com/ezxFBOD.jpeg){.zhangyue-img}

图14-7　注意力频闪小灯演示图
:::

::: {.zhangyue-c}
![CmQUOV7V1GWEPDCxAAAAAKucfxY575697809.jpg](https://i.imgur.com/Y24NkTU.jpeg){.zhangyue-img}

图14-8　眼动识别演示图
:::
:::

[]{#chapter-75.xhtml}

::: {.calibre1}
## 14.4　元件清单 {.tpl-185-title}

::: {.tpl-185-box-cuxian}
:::

::: {.tpl-185-box-middle}
:::

完成本项目所用到的元件及数量如表14-3所示。

::: {.zhangyue-c}
表14-3　元件清单

![CmQUOF7V1G2EXL72AAAAAMxjVIA994929979.jpg](https://i.imgur.com/t5FZLIs.jpeg){.zhangyue-img1}
:::
:::

[]{#chapter-76.xhtml}

::: {.h5_mainbody_bg1}
::: {.h5_rule_hv}
# 第15章 {.tpl-133-text-1-num}

::: {.tpl-133-div-line}
# PM2.5检测仪项目设计 ![CmQUOF7V1G-EH2WXAAAAAF19EmE760897358.png](https://i.imgur.com/VWjzseP.jpeg){.zhangyue-footnote} {.tpl-133-title-1-center}
:::

::: {.tpl-133-pic-center}
![CmQUOV7V1G-EPMjIAAAAALGIiMg413130245.png](https://i.imgur.com/TpXyt5r.jpeg){.tpl-133-pic-img-h}
:::
:::
:::

::: {.calibre1}
本项目基于Arduino开发板，通过LCD液晶屏显示数据，实现对空气中PM2.5含量和温湿度实时监测。
:::

[]{#chapter-77.xhtml}

::: {.calibre1}
## 15.1　功能及总体设计 {.tpl-185-title}

::: {.tpl-185-box-cuxian}
:::

::: {.tpl-185-box-middle}
:::

本项目对空气中温度、湿度和PM2.5浓度进行采集和显示，判断不同环境中的温湿度是否适宜、空气质量是否达标。由于是USB供电，接通电源就可成为手持或车载设备。

要实现上述功能需将作品分成三部分进行设计，即电源部分、显示部分和数据采集部分。电源部分采用便携的充电宝供电；显示部分通过1602LCD液晶显示屏实现；数据采集部分通过Arduino开发板控制，分为温湿度采集和PM2.5浓度采集两方面实现。

1．整体框架图

整体框架如图15-1所示。

::: {.zhangyue-c}
![CmQUOF7V1GWEQZoUAAAAAPzjr6Y559977561.jpg](https://i.imgur.com/Dd8ObNM.jpeg){.zhangyue-img}

图15-1　整体框架图
:::

2．系统流程图

系统流程如图15-2所示。

数据显示为自动模式，当PM2.5模块的采集口接收到灰尘浓度时进行判断，在液晶屏上显示空气质量的优良。由于所使用的模块精度有限，并未设置过多的等级，数据每秒自动更新一次。

::: {.zhangyue-c}
![CmQUOV7V1GWEViEkAAAAANgLEXs059626927.jpg](https://i.imgur.com/KqbF4Ud.jpeg){.zhangyue-img}

图15-2　系统流程图
:::

3．总电路图

系统总电路如图15-3所示，引脚连接如表15-1所示。PM2.5模块与面包板相连，通过面包板扩展VCC和GND引脚，电容和电阻保证电路稳定。

::: {.zhangyue-c}
![CmQUOV7V1GWEeDu7AAAAAGNUxKY223036184.jpg](https://i.imgur.com/ExvHuku.jpeg){.zhangyue-img}

图15-3　系统总电路图
:::

::: {.zhangyue-c}
表15-1　引脚连接表

![CmQUOF7V1G2EUzaCAAAAAOJ61d0148658852.jpg](https://i.imgur.com/PL21FxB.jpeg){.zhangyue-img1}
:::
:::

[]{#chapter-78.xhtml}

::: {.calibre1}
## 15.2　模块介绍 {.tpl-185-title}

::: {.tpl-185-box-cuxian}
:::

::: {.tpl-185-box-middle}
:::

本项目主要包括PM2.5模块、温湿度传感模块和LCD显示屏模块。下面分别给出各模块的功能介绍及相关代码。

### 15.2.1　PM2.5模块 {#chapter-78.xhtml#AUTO_ID_61 .text-title}

本部分包括PM2.5模块的功能介绍及相关代码。

1．功能介绍

PM2.5 GP2Y1014AU粉尘传感器，体积小易携带，电流消耗低。其内部有一个红外发光二极管和一个光学传感器。每次接收信号都会触发红外管发光，并有光学传感器捕获，空气如果被灰尘遮挡则会引起PWM波形的高低变化，经过外部220μF电容平滑方波，形成被测量模拟波形，所以每次触发测到的电压值反映出灰尘浓度，从而体现空气质量。触发时间T0，模拟电压达到可被测量时间：T0＋0.28ms，复位时间：T0＋1ms。测量结果，每次触发测到的电压值反映出灰尘浓度，从1.6\~3.7V线性对应灰尘浓度（测量分辨率＞PM0.8）0\~500μg/m ^3^ 。Arduino开发板模拟输入，用的是单片机板载10位精度ADC，可以将5V电压分成0\~1023的数值读入，电路如图15-4所示。

::: {.zhangyue-c}
![CmQUOV7V1GWEBGAJAAAAAIwwOQk434398404.jpg](https://i.imgur.com/Or28olV.jpeg){.zhangyue-img}

图15-4　PM2.5模块与Arduino开发板连线图
:::

2．相关代码

::: {.zhangyue-c}
![CmQUOV7V1GWEcPA7AAAAAFKM41o844210754.jpg](https://i.imgur.com/qOLUnZ5.jpeg){.zhangyue-img}
:::

### 15.2.2　温湿度传感器模块 {#chapter-78.xhtml#AUTO_ID_62 .text-title}

本部分包括温湿度传感器模块的功能介绍及相关代码。

1．功能介绍

通过DHT11检测出当前环境下的温湿度，将所测数据交给Arduino开发板进行分析和处理。元件包括DHT11模块、Arduino开发板和导线若干，电路如图15-5所示。

::: {.zhangyue-c}
![CmQUOV7V1GWEK-txAAAAAB-atrw044481188.jpg](https://i.imgur.com/jTWEBkj.jpeg){.zhangyue-img2}

图15-5　温湿度传感器与Arduino开发板连线图
:::

2．相关代码

::: {.zhangyue-c}
![CmQUOF7V1GWEOnRAAAAAAKb5cIk087255511.jpg](https://i.imgur.com/wNWOHck.jpeg){.zhangyue-img}
:::

::: {.zhangyue-c}
![CmQUOF7V1GWEV0yVAAAAALPKGug164352771.jpg](https://i.imgur.com/tNK7wvq.jpeg){.zhangyue-img}
:::

### 15.2.3　LCD液晶显示屏模块 {#chapter-78.xhtml#AUTO_ID_63 .text-title}

本部分包括LCD液晶显示屏模块的功能介绍及相关代码。

1．功能介绍

LCD液晶显示屏是一种专门用来显示字母、数字、符号等点阵型液晶模块。它由若干个5∗7或者5∗11等点阵字符位组成，每个点阵都可以显示1个字符，每位、每行之间有1个点距的间隔，起到了字符间距和行间距的作用。显示的内容为16∗2，即：可以显示2行，每行16个字符液晶模块（显示字符和数字）。

PM2.5模块和温湿度传感器模块采集到的数据将通过LCD液晶屏显示出来，在此之前先使用库文件经过简单的调试来调通LCD液晶屏。元件包括LCD液晶显示屏、Arduino开发板和导线若干，原理如图15-6所示。

::: {.zhangyue-c}
![CmQUOF7V1GWEPp36AAAAACCrJXI640881707.jpg](https://i.imgur.com/mKr5YeL.jpeg){.zhangyue-img2}

图15-6　LCD与Arduino开发板连线图
:::

2．相关代码

1）头文件代码

::: {.zhangyue-c}
![CmQUOF7V1GWESyTSAAAAAIMp6hk001875473.jpg](https://i.imgur.com/z81SKLg.jpeg){.zhangyue-img}
:::

::: {.zhangyue-c}
![CmQUOV7V1GWEXMkVAAAAAKf3zYw041355940.jpg](https://i.imgur.com/oST1ieV.jpeg){.zhangyue-img}
:::

::: {.zhangyue-c}
![CmQUOV7V1GWEByeuAAAAAJQx02w028835749.jpg](https://i.imgur.com/oMuMiO9.jpeg){.zhangyue-img}
:::

2）cpp文件

::: {.zhangyue-c}
![CmQUOV7V1GWEHVzWAAAAAMpkCyQ547957461.jpg](https://i.imgur.com/PvZHky7.jpeg){.zhangyue-img}
:::

::: {.zhangyue-c}
![CmQUOV7V1GWENXB3AAAAAO7zyQU479416670.jpg](https://i.imgur.com/zheX44R.jpeg){.zhangyue-img}
:::

::: {.zhangyue-c}
![CmQUOF7V1GWEXN7aAAAAAKyd1BQ411520220.jpg](https://i.imgur.com/EkXDLFg.jpeg){.zhangyue-img}
:::

::: {.zhangyue-c}
![CmQUOF7V1GWEYTrUAAAAAHluB_M055364239.jpg](https://i.imgur.com/amYp5Pw.jpeg){.zhangyue-img}
:::

::: {.zhangyue-c}
![CmQUOV7V1GWEZW2RAAAAAN31cHw862850397.jpg](https://i.imgur.com/IZ4aVKc.jpeg){.zhangyue-img}
:::

3）调试代码

::: {.zhangyue-c}
![CmQUOF7V1GWEZTC3AAAAACljE7Y849880686.jpg](https://i.imgur.com/lzcNMpy.jpeg){.zhangyue-img}
:::
:::

[]{#chapter-79.xhtml}

::: {.calibre1}
## 15.3　产品展示 {.tpl-185-title}

::: {.tpl-185-box-cuxian}
:::

::: {.tpl-185-box-middle}
:::

整体外观如图15-7所示，下面为PM2.5模块和LCD显示屏，右面为温湿度传感模块，都与Arduino开发板和传感器转接板相连，LCD液晶屏显示如图15-8所示。

::: {.zhangyue-c}
![CmQUOV7V1GWEbhysAAAAAAg9yYY065594480.jpg](https://i.imgur.com/Ik48Ux4.jpeg){.zhangyue-img2}

图15-7　整体外观图
:::

::: {.zhangyue-c}
![CmQUOF7V1GWEFcy3AAAAALo_Sac656588327.jpg](https://i.imgur.com/Qy9yRSQ.jpeg){.zhangyue-img}

图15-8　LCD液晶屏显示图
:::
:::

[]{#chapter-80.xhtml}

::: {.calibre1}
## 15.4　元件清单 {.tpl-185-title}

::: {.tpl-185-box-cuxian}
:::

::: {.tpl-185-box-middle}
:::

完成本项目所用到的元件及数量如表15-2所示。

::: {.zhangyue-c}
表15-2　元件清单

![CmQUOV7V1G2EGoiUAAAAAIyOIZc200789316.jpg](https://i.imgur.com/SAdBNI2.jpeg){.zhangyue-img1}
:::
:::

[]{#chapter-81.xhtml}

::: {.h5_mainbody_bg1}
::: {.h5_rule_hv}
# 第16章 {.tpl-133-text-1-num}

::: {.tpl-133-div-line}
# 计算机视觉机器人项目设计 ![CmQUOF7V1G-EH2WXAAAAAF19EmE760897358.png](https://i.imgur.com/AXOIz79.jpeg){.zhangyue-footnote} {.tpl-133-title-1-center}
:::

::: {.tpl-133-pic-center}
![CmQUOV7V1G-EPMjIAAAAALGIiMg413130245.png](https://i.imgur.com/CA7lZh5.jpeg){.tpl-133-pic-img-h}
:::
:::
:::

::: {.calibre1}
本项目通过手机终端选择机器人工作模式，实现自动避障、控制行进及机械臂夹取、用计算机视觉自动判断所处环境等功能。
:::

[]{#chapter-82.xhtml}

::: {.calibre1}
## 16.1　功能及总体设计 {.tpl-185-title}

::: {.tpl-185-box-cuxian}
:::

::: {.tpl-185-box-middle}
:::

本项目实现多功能智能机器人自动避障、遥控、放置物体，通过计算机视觉判断有无人员、人员的多少并作出相应反应。操控者可通过机器人红外传感器和超声波模块，自动检测周围障碍物并避开；通过手机终端手动操控机器人的行进，机械臂夹取、放下物体，对周围环境进行拍照，传输至云端，计算机从云端获取图片，并基于视觉的自动识别图片中是否有人员存在以及人数。

要实现上述功能需将作品分成四部分进行设计，即输入部分、处理部分、传输部分和输出部分。输入部分包括手机自带摄像头（可将手机固定在小车支架上），3个红外传感器模块，1个超声波模块；处理部分包括Arduino开发板，安装Linux系统的计算机；传输部分是小车与操控者的通信使用蓝牙模块，摄像头与计算机的数据传输借助百度云端；输出部分是机器人基座与手臂------小车及机械臂。

1．整体框架图

整体框架如图16-1所示。

::: {.zhangyue-c}
![CmQUOV7V1GWECrZOAAAAAKdB6FU695420321.jpg](https://i.imgur.com/9ajbT6C.jpeg){.zhangyue-img1}

图16-1　整体框架图
:::

2．系统流程图

系统流程如图16-2所示。

::: {.zhangyue-c}
![CmQUOF7V1GWEajwhAAAAALAZK-Y613095779.jpg](https://i.imgur.com/72QRw6g.jpeg){.zhangyue-img1}

图16-2　系统流程图
:::

控制者通过手机端发送数据，控制机器人状态。

当手机端发送"a"进入自动避障模式，当左、中、右传感器均未监测到障碍物，小车直行；当只有左侧有障碍物时，小车右转；当只有右侧有障碍物时，小车左转；当超声波传感器监测到正前方障碍物距小车小于5cm时，小车后退直至距障碍物10cm（经测算及实际测试，15cm大于小车转弯半径，可以保证小车能够掉头）。

当手机端发送"b"进入遥控模式，操控者手动操控机器人前、后、左、右行走，操控机械臂的动作（包括机械爪的夹取、松开、机械臂的伸展、折叠）。

当手机端发送"c"时，机器人进入自动环境分析模式，可识别周围人数，机械臂控制车载手机拍照，自动上传至百度云。计算机从百度云获取照片，进行分析，识别人数并反馈给小车。

3．总电路图

系统总电路如图16-3所示，引脚连接如表16-1所示。

::: {.zhangyue-c}
![CmQUOF7V1GWEVuddAAAAAIyKIRA827449704.jpg](https://i.imgur.com/9Kfa0Dv.jpeg){.zhangyue-img}

图16-3　系统总电路图
:::

::: {.zhangyue-c}
表16-1　引脚连接表

![CmQUOV7V1G2EW0h6AAAAAPT2w9g812350594.jpg](https://i.imgur.com/qABTJyq.jpeg){.zhangyue-img1}
:::
:::

[]{#chapter-83.xhtml}

::: {.calibre1}
## 16.2　模块介绍 {.tpl-185-title}

::: {.tpl-185-box-cuxian}
:::

::: {.tpl-185-box-middle}
:::

本项目主要包括机器人主程序模块、自动避障模式、手动遥控模式、计算机视觉环境判别模式、计算机视觉程序实现和通信模块。下面分别给出各模块的功能介绍及相关代码。

### 16.2.1　机器人主程序模块 {#chapter-83.xhtml#AUTO_ID_64 .text-title}

本部分包括机器人主程序的功能介绍及相关代码。

1．功能介绍

烧录Arduino开发板的程序代码，用于实现机器人的各种工作状态。此部分主要由C++代码实现，编译环境为Arduino For Microduino。

最初机器人处于待机状态，直到通过蓝牙收到操控者指令，进入相应工作状态。该部分硬件较多，包含机械臂（主要可操控部件为2个MG945舵机）、蓝牙、超声波模块、红外传感器和直流电机驱动模块。程序主要实现各个模块的初始化，工作模式的选择。

2．相关代码

::: {.zhangyue-c}
![CmQUOF7V1GWEea1GAAAAAAmxyIE205030892.jpg](https://i.imgur.com/cOjTF59.jpeg){.zhangyue-img}
:::

::: {.zhangyue-c}
![CmQUOV7V1GWEHuv8AAAAAOq378M450426196.jpg](https://i.imgur.com/PhHiWgd.jpeg){.zhangyue-img}
:::

::: {.zhangyue-c}
![CmQUOF7V1GWEYBIKAAAAABSZNoI779756538.jpg](https://i.imgur.com/TuWcKqB.jpeg){.zhangyue-img}
:::

### 16.2.2　自动避障模式 {#chapter-83.xhtml#AUTO_ID_65 .text-title}

本部分包括自动避障模式的功能介绍及相关代码。

1．功能介绍

主程序进入避障模式后，左右红外传感器，正前方超声波传感器工作。元件包括Arduino开发板、2个红外传感器、超声波传感器、2个直流电机和导线若干。

2．相关代码

::: {.zhangyue-c}
![CmQUOF7V1GaEZi5vAAAAAKe64wg154690821.jpg](https://i.imgur.com/nO7PPl7.jpeg){.zhangyue-img}
:::

### 16.2.3　遥控模式 {#chapter-83.xhtml#AUTO_ID_66 .text-title}

本部分包括遥控模式的功能介绍及相关代码。

1．功能介绍

机器人进入遥控模式后，由蓝牙接收指令：

遥控端发送字符2，返回testOk，说明连接正常；

遥控端发送字符w，小车直行；

遥控端发送字符s，小车后退；

遥控端发送字符q，向前左转；

遥控端发送字符e，向前右转；

遥控端发送字符a，向后左转；

遥控端发送字符d，向后右转；

遥控端发送字符j，机械爪闭合；

遥控端发送字符k，机械爪张开；

遥控端发送字符n，机械臂折叠；

遥控端发送字符m，机械臂伸展；

本部分基于机器人基本构架及全部元件，无独立元件。

2．相关代码

::: {.zhangyue-c}
![CmQUOF7V1GaEfSTTAAAAAEFmOdw514734012.jpg](https://i.imgur.com/ZtYDMpF.jpeg){.zhangyue-img}
:::

### 16.2.4　计算机视觉识别模式 {#chapter-83.xhtml#AUTO_ID_67 .text-title}

本部分包括计算机视觉识别模式的功能介绍及相关代码。

1．功能介绍

机器人接收到指令C后，进入计算机视觉识别模式。初始，机器人直行，当左侧人体红外传感器检测到周围有人时，机器人原地左转90°，使摄像头正对人体。机械臂触碰手机拍照按键，拍照成功后，自动上传至云端。计算机从云端获取照片，进行图像识别，计算照片中人员数量。并通过蓝牙反馈给机器人，机器人接收到数量信息后，做出相应次数的抓取动作。

2．相关代码

::: {.zhangyue-c}
![CmQUOV7V1GaEEixGAAAAAIVzXR8770872510.jpg](https://i.imgur.com/HZmYbQ5.jpeg){.zhangyue-img}
:::

::: {.zhangyue-c}
![CmQUOF7V1GaEO5aWAAAAAOsO8X0327479020.jpg](https://i.imgur.com/pEEpI7l.jpeg){.zhangyue-img}
:::

### 16.2.5　计算机视觉程序实现 {#chapter-83.xhtml#AUTO_ID_68 .text-title}

本部分包括计算机视觉识别模式的功能介绍及相关代码。

1．功能介绍

本部分涉及对SSD、CNN算法、Python语言以及Linux操作系统的使用，从而达到可以判断照片是否有人以及判断人数的功能，过程如图16-4所示。

::: {.zhangyue-c}
![CmQUOV7V1GaEHmzJAAAAAIcHgZU501601265.jpg](https://i.imgur.com/zgo3wIT.jpeg){.zhangyue-img}

图16-4　计算机视觉程序实现图
:::

1）基本路线

由于物体与其背景的交接处会有颜色的突变，在计算机中反应为高频分量。通过边缘滤波，可以确定出物体位置及形状。人脸由眼睛、鼻子、嘴巴、下巴等部件构成，这些部件的形状、大小和结构使得脸部形状不同于其他物体。因此，对这些部件的形状和结构关系的几何描述，可以作为人脸识别的重要特征。几何特征最早是用于人脸侧面轮廓的描述与识别，首先根据侧面轮廓曲线确定若干显著点，并由这些显著点导出一组用于识别的特征度量，如距离、角度等。人脸识别可通过提取人眼、口、鼻等重要位置和眼睛等重要器官的几何形状作为识别特征。

2）CNN算法

卷积神经网络是近年发展起来的一种高效识别方法，它避免了对图像的复杂预处理，可以直接输入原始图像。CNN算法一般可以分为卷积层和取样层。基本结构运用局部连接、权值共享、多卷积核、池化等操作。由于卷积神经网络中集成了相邻像素之间的相关性知识，从而在一定程度上获得了对图像平移、旋转和局部变形的不变性，因此，可以得到非常理想的识别结果。

3）SSD算法

SSD算法在目标检测的同时，提高了速度和准确度。通过调整卷积层、参考点选取和匹配方法，以提高成功匹配的概率。SSD添加了大小逐渐减小的卷积层，可以进行多尺度预测。

2．相关代码

本报告中只截取部分代码，由于Python语言中单行注释用符号\#，本代码中使用\#引出注释。

1）bbox.py

::: {.zhangyue-c}
![CmQUOF7V1GaEBCTMAAAAACJ4pEs294818351.jpg](https://i.imgur.com/JC6ArMk.jpeg){.zhangyue-img}
:::

::: {.zhangyue-c}
![CmQUOF7V1GaESng8AAAAAEDgnxk100150640.jpg](https://i.imgur.com/9wZB7YC.jpeg){.zhangyue-img}
:::

2）net_s3fd.py

::: {.zhangyue-c}
![CmQUOV7V1GaEcd7TAAAAAGI0d14856858021.jpg](https://i.imgur.com/gJTSvKk.jpeg){.zhangyue-img1}
:::

::: {.zhangyue-c}
![CmQUOV7V1GaEPbtdAAAAAJV3BLU679805756.jpg](https://i.imgur.com/IpEOXqC.jpeg){.zhangyue-img1}
:::

::: {.zhangyue-c}
![CmQUOV7V1GaEXTwvAAAAAHknYtY033588463.jpg](https://i.imgur.com/EVCYyOg.jpeg){.zhangyue-img}
:::

3）wider_eval_pytorch.py

::: {.zhangyue-c}
![CmQUOF7V1GaEOTw4AAAAAI_MgfM877808428.jpg](https://i.imgur.com/JsYLX9R.jpeg){.zhangyue-img}
:::

::: {.zhangyue-c}
![CmQUOF7V1GaEG4nLAAAAABpKwbU745865676.jpg](https://i.imgur.com/lHsXzJp.jpeg){.zhangyue-img}
:::

::: {.zhangyue-c}
![CmQUOF7V1GaEGRLkAAAAAM8n7bs756883071.jpg](https://i.imgur.com/mJpVUfr.jpeg){.zhangyue-img}
:::

4）test, py

::: {.zhangyue-c}
![CmQUOV7V1GaEQqZcAAAAAFUb08k851067324.jpg](https://i.imgur.com/8eOvfLF.jpeg){.zhangyue-img}
:::

::: {.zhangyue-c}
![CmQUOF7V1GaEVZrqAAAAAOwMu6Y614405570.jpg](https://i.imgur.com/mymEVc3.jpeg){.zhangyue-img}
:::

::: {.zhangyue-c}
![CmQUOV7V1GaEcZYYAAAAABp3Zho360675560.jpg](https://i.imgur.com/btboQIf.jpeg){.zhangyue-img}
:::

::: {.zhangyue-c}
![CmQUOV7V1GaESUA7AAAAAEcbSqU400931329.jpg](https://i.imgur.com/ps25ZoF.jpeg){.zhangyue-img}
:::

由于最后将识别出来的人数反馈到Ardiuno开发板以及机械臂，故设num用来计数，并可将num的结果通过蓝牙反馈给开发板来控制机械臂操作次数。
:::

[]{#chapter-84.xhtml}

::: {.calibre1}
## 16.3　产品展示 {.tpl-185-title}

::: {.tpl-185-box-cuxian}
:::

::: {.tpl-185-box-middle}
:::

整体外观如图16-5所示，运行实况如图16-6，计算机视觉识别结果如图16-7所示。

::: {.zhangyue-c}
![CmQUOF7V1GaECax7AAAAAMZYweg511617280.jpg](https://i.imgur.com/Syvx04H.jpeg){.zhangyue-img}

图16-5　整体外观图
:::

::: {.zhangyue-c}
![CmQUOV7V1GaELwTmAAAAAAJqpuA503156593.jpg](https://i.imgur.com/G7okA8D.jpeg){.zhangyue-img}

图16-6　运行实况图
:::

::: {.zhangyue-c}
![CmQUOV7V1GaEa05qAAAAABGtKrU126293944.jpg](https://i.imgur.com/u8S2BiW.jpeg){.zhangyue-img}

图16-7　计算机视觉识别结果图
:::
:::

[]{#chapter-85.xhtml}

::: {.calibre1}
## 16.4　元件清单 {.tpl-185-title}

::: {.tpl-185-box-cuxian}
:::

::: {.tpl-185-box-middle}
:::

完成本项目所用到的元件及数量如表16-2所示。

::: {.zhangyue-c}
表16-2　元件清单

![CmQUOV7V1F2Eca38AAAAAInuBbE140803917.jpg](https://i.imgur.com/v6lHI3s.jpeg){.zhangyue-img1}
:::
:::

[]{#chapter-86.xhtml}

::: {.h5_mainbody_bg1}
::: {.h5_rule_hv}
# 第17章 {.tpl-133-text-1-num}

::: {.tpl-133-div-line}
# 智能计步器项目设计 ![CmQUOF7V1G-EH2WXAAAAAF19EmE760897358.png](https://i.imgur.com/rIjPV0S.jpeg){.zhangyue-footnote} {.tpl-133-title-1-center}
:::

::: {.tpl-133-pic-center}
![CmQUOV7V1G-EPMjIAAAAALGIiMg413130245.png](https://i.imgur.com/sbXZ5pU.jpeg){.tpl-133-pic-img-h}
:::
:::
:::

::: {.calibre1}
本项目基于Arduino开发板设计一款电子式的计步器，利用加速度传感器接收运动的变化，通过算法处理得到行走的步数。
:::

[]{#chapter-87.xhtml}

::: {.calibre1}
## 17.1　功能及总体设计 {.tpl-185-title}

::: {.tpl-185-box-cuxian}
:::

::: {.tpl-185-box-middle}
:::

本项目通过将人的行走过程数据化，对加速度的变化还原行走过程，每走一步，加速度都会将实时的数据传输至Arduino开发板，最终通过计算后，LCD将步数显示出来。

要实现上述功能需将作品分成四部分进行设计，即输入部分、处理部分、传输部分和输出部分。输入部分采用三轴加速度传感器；处理部分由已知算法转换为C++代码实现；传输部分由Arduino开发板实现；输出部分由LCD1602实现。

1．整体框架图

整体框架如图17-1所示。

::: {.zhangyue-c}
![CmQUOV7V1GaEOQPVAAAAAFCcSBE070018768.jpg](https://i.imgur.com/8iBMiDK.jpeg){.zhangyue-img2}

图17-1　整体框架图
:::

2．系统流程图

系统流程如图17-2所示。

::: {.zhangyue-c}
![CmQUOF7V1GaEfAj5AAAAADahClE859766593.jpg](https://i.imgur.com/2sVj6Bp.jpeg){.zhangyue-img2}

图17-2　系统流程图
:::

3．总电路图

系统总电路如图17-3所示，引脚连接如表17-1所示。LCD屏幕连接的引脚从上到下分别为：VCC、GND、SCL、SDA。

::: {.zhangyue-c}
![CmQUOF7V1GaEdOdiAAAAAB_nrMM441746667.jpg](https://i.imgur.com/6b4Q7Su.jpeg){.zhangyue-img}

图17-3　系统总电路图
:::

::: {.zhangyue-c}
表17-1　引脚连接表

![CmQUOF7V1G2EKkVzAAAAABjzpCM389103902.jpg](https://i.imgur.com/GfcA3d2.jpeg){.zhangyue-img1}
:::
:::

[]{#chapter-88.xhtml}

::: {.calibre1}
## 17.2　模块介绍 {.tpl-185-title}

::: {.tpl-185-box-cuxian}
:::

::: {.tpl-185-box-middle}
:::

本项目主要包括主程序模块和三轴加速度模块。下面分别给出各模块的功能介绍及相关代码。

### 17.2.1　主程序模块 {#chapter-88.xhtml#AUTO_ID_69 .text-title}

1．功能介绍

主程序实现了对传感器数据进行存储与比较，通过对比每次数据的最大值Max与最小值Min模拟人的行走过程，再将此过程的数据通过Arduino开发板传输至LCD显示屏，显示当前的步数。

2．相关代码

::: {.zhangyue-c}
![CmQUOV7V1GaEdxvPAAAAAN1CbpY733090012.jpg](https://i.imgur.com/fGUoTNw.jpeg){.zhangyue-img}
:::

::: {.zhangyue-c}
![CmQUOV7V1GaEWtx2AAAAAGo27hw037430238.jpg](https://i.imgur.com/IO5Gisc.jpeg){.zhangyue-img}
:::

::: {.zhangyue-c}
![CmQUOF7V1GaETXt-AAAAAINWGio307101178.jpg](https://i.imgur.com/JvyrujG.jpeg){.zhangyue-img}
:::

### 17.2.2　三轴加速度传感器 {#chapter-88.xhtml#AUTO_ID_70 .text-title}

本部分包括三轴加速度传感器描述、电路连接方法和相关代码三部分。

1．功能介绍

识别走路过程中各轴加速度的变化规律，需要获取连续变化的传感器数值。将三轴加速度传感器所测得的加速度数值在串口监视器上显示，图17-4是走路过程中x轴的加速度变化情况。

由图17-4可以看出，走路过程中形成的加速度图像有波峰和波谷，而且二者相差数值较大。静止过程中，虽然加速度图像也有变化，但是最大值和最小值相差较少。通过比较两种状态下的波峰和波谷数值差，能区分两种状态，避免在静止过程中仍然计步。而获取最大值和最小值的算法原理，则是将传感器获取到的数据与原来两个数据Max和Min进行比较，若比Max大则更新Max的值，比Min小则更新Min的值，如果在两者之间则不用操作，这样就可以得到一个周期里面波峰和波谷的具体数值，周期根据人走路的快慢而定，默认每步600ms。

将3.3V电源连接三轴加速度传感器的3.3V引脚，再将三轴加速度传感器的x、y、z连接开发板的A0、A1、A2引脚，电路连接如图17-5所示。

::: {.zhangyue-c}
![CmQUOF7V1GaEe9VKAAAAABg7p-s042521765.jpg](https://i.imgur.com/rKZozNM.jpeg){.zhangyue-img}

图17-4　x轴加速度变化图
:::

::: {.zhangyue-c}
![CmQUOF7V1GaEZwxeAAAAALJ-hSs406278209.jpg](https://i.imgur.com/hNis0Nz.jpeg){.zhangyue-img}

图17-5　三轴加速度传感器电路连接图
:::

2．相关代码

::: {.zhangyue-c}
![CmQUOV7V1GeEa7lMAAAAAH__0H0016924398.jpg](https://i.imgur.com/IpMLTMt.jpeg){.zhangyue-img}
:::

::: {.zhangyue-c}
![CmQUOF7V1GeEPO3VAAAAAICZR6E137933038.jpg](https://i.imgur.com/YobEUTE.jpeg){.zhangyue-img}
:::

::: {.zhangyue-c}
![CmQUOF7V1GeEX7C9AAAAAMW1LCk892935770.jpg](https://i.imgur.com/aN33W9S.jpeg){.zhangyue-img}
:::

### 17.2.3　LCD输出模块 {#chapter-88.xhtml#AUTO_ID_71 .text-title}

1．功能介绍

LCD1602是一种工业字符型液晶，能够同时显示16×2，即32个字符。LCD1602液晶显示原理是利用液晶的物理特性，通过电压对其显示区域进行控制，显示出图形。

2．相关代码

::: {.zhangyue-c}
![CmQUOV7V1GeEeQHeAAAAAFf0yks062887898.jpg](https://i.imgur.com/0mQKNkr.jpeg){.zhangyue-img}
:::
:::

[]{#chapter-89.xhtml}

::: {.calibre1}
## 17.3　产品展示 {.tpl-185-title}

::: {.tpl-185-box-cuxian}
:::

::: {.tpl-185-box-middle}
:::

整体外观如图17-6所示。

::: {.zhangyue-c}
![CmQUOV7V1GeEGRbPAAAAAIoZQdk910780551.jpg](https://i.imgur.com/lI4PoD5.jpeg){.zhangyue-img}

图17-6　整体外观图
:::
:::

[]{#chapter-90.xhtml}

::: {.calibre1}
## 17.4　元件清单 {.tpl-185-title}

::: {.tpl-185-box-cuxian}
:::

::: {.tpl-185-box-middle}
:::

完成本项目所用到的元件及数量如表17-2所示。

::: {.zhangyue-c}
表17-2　元件清单

![CmQUOV7V1G2ELnjBAAAAAFKqWAE505706636.jpg](https://i.imgur.com/cmssovE.jpeg){.zhangyue-img1}
:::
:::

[]{#chapter-91.xhtml}

::: {.h5_mainbody_bg1}
::: {.h5_rule_hv}
# 第18章 {.tpl-133-text-1-num}

::: {.tpl-133-div-line}
# 智能室外管家项目设计 ![CmQUOF7V1G-EH2WXAAAAAF19EmE760897358.png](https://i.imgur.com/5mNJc79.jpeg){.zhangyue-footnote} {.tpl-133-title-1-center}
:::

::: {.tpl-133-pic-center}
![CmQUOV7V1G-EPMjIAAAAALGIiMg413130245.png](https://i.imgur.com/9dwmSrd.jpeg){.tpl-133-pic-img-h}
:::
:::
:::

::: {.calibre1}
本项目运用Arduino开发板，通过ESP8266模块以HTTP协议接入OneNET物联网开放平台，实现设备接入与连接，云平台数据与安卓API的交互，实现房屋监控防盗、访客到来提醒、出行提示以及对室外温湿度实时监控等功能。
:::

[]{#chapter-92.xhtml}

::: {.calibre1}
## 18.1　功能及总体设计 {.tpl-185-title}

::: {.tpl-185-box-cuxian}
:::

::: {.tpl-185-box-middle}
:::

本项目通过WiFi模块、DHT22温湿度模块、蜂鸣器模块、三彩LED模块、人体红外模块、激光发射器、光敏电阻、数码管等基础模块，实现如下功能。其一，蓝牙控制设备处于安全模式，如果有访客到来，蜂鸣器铃响，给屋内人开门提示，如果屋内人因忙碌而无法马上开门，可通过蓝牙给访客发送信息，信息将在LCD屏幕显示。其二，蓝牙控制设备处于保卫模式，即房内无人时，如果有人到来，无论是访客还是盗窃者，都在LCD屏上显示提示信息"如果30秒内不离开，则立即启动警报"。警报包括蜂鸣器警报声、LED警报灯，并且警报一旦响起，则会通过云平台给主人发送一封邮件，提醒及时通过远程摄像头查看家中情况。如果在保卫模式下，门开启即认为被盗窃者撬开，警报也立即响起并通知房子的主人。其三，可以通过红外遥控对出行闹钟进行设置，一旦到达闹钟时间，蜂鸣器立即响起，提醒主人上班。还可以通过蓝牙实时获取室外的温湿度和穿衣提示，使得穿衣得当。其四，夜间处于安全模式下，有人到来或者房子主人从外面回来，将会亮起LED照明。保卫模式下将不会亮灯。其五，红外遥控器具有立即响起警报的功能，家里闯进人，在即将遭受伤害前，可以采取紧急措施进行警报，惊动附近安保人员，解救自己。

要实现上述功能需将作品分成九部分进行设计，Arduino开发板的蓝牙模块、WiFi模块、DHT22温湿度模块、蜂鸣器模块、RGB全彩LED模块、人体红外模块、激光发射器、光敏电阻、数码管等基础模块，需要硬件接线以及解决各个模块之间的串口冲突等问题；借助OneNET云平台实现对设备域上传数据的接收、处理以及云平台数据的展示；编写程序实现对蓝牙模块下发命令以及安卓设备对云平台数据访问，从而实现产品智能管家的功能。

1．整体框架图

整体框架如图18-1所示。

::: {.zhangyue-c}
![CmQUOF7V1GeEb4DPAAAAAALc-9E521927653.jpg](https://i.imgur.com/Y8v9Qec.jpeg){.zhangyue-img}

图18-1　整体框架图
:::

2．系统流程图

系统流程如图18-2所示，定时器流程如图18-3所示，蓝牙控制流程如图18-4所示，红外遥控流程如图18-5所示，闹钟流程如图18-6所示，夜灯流程如图18-7所示。

::: {.zhangyue-c}
![CmQUOF7V1GeEcJ5mAAAAAHYQBBk994675964.jpg](https://i.imgur.com/CqMZQqN.jpeg){.zhangyue-img3}

图18-2　系统流程图
:::

::: {.zhangyue-c}
![CmQUOF7V1GeESRauAAAAABntPUg735795247.jpg](https://i.imgur.com/xjptbey.jpeg){.zhangyue-img2}

图18-3　定时器流程图
:::

::: {.zhangyue-c}
![CmQUOF7V1GeEMvGzAAAAANLYGEk215693882.jpg](https://i.imgur.com/97zZIkd.jpeg){.zhangyue-img}

图18-4　蓝牙控制流程图
:::

::: {.zhangyue-c}
![CmQUOF7V1GeEInv9AAAAAD8wwgk846262136.jpg](https://i.imgur.com/sx0nX4R.jpeg){.zhangyue-img3}

图18-5　红外遥控流程图
:::

::: {.zhangyue-c}
![CmQUOF7V1GeEB_89AAAAACGD-XU230084006.jpg](https://i.imgur.com/SifKYL2.jpeg){.zhangyue-img3}

图18-6　闹钟流程图
:::

::: {.zhangyue-c}
![CmQUOV7V1GeEYFnKAAAAAD1_cOs036984086.jpg](https://i.imgur.com/Q6anrtI.jpeg){.zhangyue-img2}

图18-7　夜灯流程图
:::

3．总电路图

系统总电路如图18-8所示，主开发板引脚连接如表18-1所示，副开发板引脚连接如表18-2所示。

::: {.zhangyue-c}
![CmQUOF7V1GeEGBrpAAAAAMIlKNk944179164.jpg](https://i.imgur.com/BwFOpe9.jpeg){.zhangyue-img}

图18-8　系统总电路图
:::

::: {.zhangyue-c}
表18-1　主Arduino开发板引脚连接表

![CmQUOF7V1G2EKDZmAAAAAMdGBLA382345750.jpg](https://i.imgur.com/pzoeT3A.jpeg){.zhangyue-img1}
:::

::: {.zhangyue-c}
表18-2　副Arduino开发板引脚连接表

![CmQUOV7V1G2ETuEnAAAAAJJ41nM647268849.jpg](https://i.imgur.com/mz1u4oE.jpeg){.zhangyue-img1}
:::
:::

[]{#chapter-93.xhtml}

::: {.calibre1}
## 18.2　模块介绍 {.tpl-185-title}

::: {.tpl-185-box-cuxian}
:::

::: {.tpl-185-box-middle}
:::

本项目主要包括主程序模块、时钟模块和温湿度模块。下面分别给出各模块的功能介绍及相关代码。

### 18.2.1　主程序模块 {#chapter-93.xhtml#AUTO_ID_72 .text-title}

本部分包括主程序模块的功能介绍及相关代码。

1．功能介绍

本模块包括蓝牙切换安全模式和保卫模式。安全模式下，执行访客提示，通过蓝牙和LCD屏给访客传递信息。保卫模式下，给靠近者以30秒提示，30秒过后或者门被非法打开立即报警，如图18-9所示。

::: {.zhangyue-c}
![CmQUOV7V1GeEOcAVAAAAADRpDqQ110366233.jpg](https://i.imgur.com/V2qCI4O.jpeg){.zhangyue-img}

图18-9　蓝牙控制与通信图
:::

2．相关代码

::: {.zhangyue-c}
![CmQUOF7V1GeEHC64AAAAAEXfT7w104875399.jpg](https://i.imgur.com/sqVWsO6.jpeg){.zhangyue-img}
:::

::: {.zhangyue-c}
![CmQUOF7V1GeEaqQgAAAAAOSlmOI998554149.jpg](https://i.imgur.com/SewuttY.jpeg){.zhangyue-img1}
:::

::: {.zhangyue-c}
![CmQUOV7V1GeEFOgsAAAAAGf7RwM267002616.jpg](https://i.imgur.com/gOxih7I.jpeg){.zhangyue-img1}
:::

::: {.zhangyue-c}
![CmQUOF7V1GeEIm9WAAAAADMTLss009049849.jpg](https://i.imgur.com/gruojsN.jpeg){.zhangyue-img1}
:::

::: {.zhangyue-c}
![CmQUOF7V1GeEBup9AAAAAIMKvQ0229565576.jpg](https://i.imgur.com/qAguoPX.jpeg){.zhangyue-img1}
:::

::: {.zhangyue-c}
![CmQUOF7V1GeEVTpJAAAAAIRZKIU365225726.jpg](https://i.imgur.com/Qipa9k6.jpeg){.zhangyue-img}
:::

::: {.zhangyue-c}
![CmQUOV7V1GeEdS8bAAAAAAhb5jI095726208.jpg](https://i.imgur.com/9kXDjpd.jpeg){.zhangyue-img}
:::

### 18.2.2　时钟模块 {#chapter-93.xhtml#AUTO_ID_73 .text-title}

本部分包括时钟模块的功能介绍及相关代码。

1．功能介绍

主要TM1637四位数码管实现24h的时钟显示、出行闹钟提示以及利用红外遥控设置时钟和出行闹钟。元件包括TM1637四位数码管模块、无源蜂鸣器、红外接收器、Arduino开发板和导线若干，电路如图18-10所示。

::: {.zhangyue-c}
![CmQUOF7V1GeEHWfmAAAAANzGFEw395797829.jpg](https://i.imgur.com/aDmrt0R.jpeg){.zhangyue-img}

图18-10　时钟模块连线图
:::

2．相关代码

::: {.zhangyue-c}
![CmQUOF7V1GeEcZjAAAAAAPw6HyI323971017.jpg](https://i.imgur.com/LpxOdaw.jpeg){.zhangyue-img}
:::

::: {.zhangyue-c}
![CmQUOF7V1GeEBy4LAAAAAJpja5Q113785015.jpg](https://i.imgur.com/vqjPxlG.jpeg){.zhangyue-img}
:::

::: {.zhangyue-c}
![CmQUOV7V1GeEFfLuAAAAABKzo10635832692.jpg](https://i.imgur.com/IK7arEl.jpeg){.zhangyue-img}
:::

::: {.zhangyue-c}
![CmQUOF7V1GeEOUv4AAAAADQxi0w377355998.jpg](https://i.imgur.com/wWgJbe7.jpeg){.zhangyue-img}
:::

::: {.zhangyue-c}
![CmQUOV7V1GeEXDpDAAAAAOWuWpM482246319.jpg](https://i.imgur.com/iEaWl0Z.jpeg){.zhangyue-img}
:::

### 18.2.3　温湿度模块 {#chapter-93.xhtml#AUTO_ID_74 .text-title}

本部分包括温湿度模块的功能介绍及相关代码。

1．功能介绍

主要利用温湿度传感器实现获取实时温湿度值，并通过I ^2^ C通信将数据传送至副Arduino开发板，再通过ESP8266模块将数据传送至云平台。由于整个系统要用到定时器Timer1和ESP8266模块，1个Arduino开发板会产生冲突，所以选择了2块Arduino开发板，1块用于主程序（含定时器），1块用于ESP8266模块将数据上传至云平台，2块Arduino开发板通过I ^2^ C通信连接在一起。元件包括：DHT22温湿度传感器、ESP8266模块、2块Arduino开发板和导线若干，电路如图18-11所示。

::: {.zhangyue-c}
![CmQUOV7V1GeERrvnAAAAAJTTJt4306789189.jpg](https://i.imgur.com/hTWXUPT.jpeg){.zhangyue-img}

图18-11　温湿度传感器和ESP8266模块连线图
:::

2．相关代码

::: {.zhangyue-c}
![CmQUOF7V1GiECL2OAAAAAL-vDFg261720367.jpg](https://i.imgur.com/JOa7hHF.jpeg){.zhangyue-img}
:::

::: {.zhangyue-c}
![CmQUOV7V1GiEATH6AAAAAANyahQ153423763.jpg](https://i.imgur.com/LQeTBsf.jpeg){.zhangyue-img}
:::

::: {.zhangyue-c}
![CmQUOF7V1GiEdxWhAAAAAE_-A7o834999925.jpg](https://i.imgur.com/rl8v2q6.jpeg){.zhangyue-img}
:::

::: {.zhangyue-c}
![CmQUOF7V1GiEGhBjAAAAAI7-ArA134944212.jpg](https://i.imgur.com/GFJzID1.jpeg){.zhangyue-img}
:::
:::

[]{#chapter-94.xhtml}

::: {.calibre1}
## 18.3　产品展示 {.tpl-185-title}

::: {.tpl-185-box-cuxian}
:::

::: {.tpl-185-box-middle}
:::

整体内部结构如图18-12所示，整体正面如图18-13所示，整体侧面如图18-14所示，设备运行正面效果如图18-15所示，设备运行侧面效果如图18-16所示，理想效果如图18-17所示。在图18-12中，中间面板为LCD1602显示屏、TM1637四位数码管，右上角为热释电红外传感器，左上角为RGB全彩LED，正上方为DHT22温湿度传感器、无源蜂鸣器、光敏电阻2号，左侧方为光敏电阻1号和激光发射器，下方为电源转接板和电源，盒子内是1块面包板和2块Arduino开发板、HC-05蓝牙模块、ESP8266模块，整个设备固定在大门的右侧设备。

::: {.zhangyue-c}
![CmQUOF7V1GiEUwYzAAAAAC8zD6Q572652335.jpg](https://i.imgur.com/JdHXcpr.jpeg){.zhangyue-img}

图18-12　整体内部结构图
:::

::: {.zhangyue-c}
![CmQUOF7V1GiEHhhfAAAAAMIig-c737347261.jpg](https://i.imgur.com/4h3qXBI.jpeg){.zhangyue-img}

图18-13　整体正面图
:::

::: {.zhangyue-c}
![CmQUOV7V1GiEMIwMAAAAAEGB5eY464808034.jpg](https://i.imgur.com/QoMu5pZ.jpeg){.zhangyue-img}

图18-14　整体侧面图
:::

::: {.zhangyue-c}
![CmQUOF7V1GiEB2-oAAAAALcKCos177413961.jpg](https://i.imgur.com/rHmTKv8.jpeg){.zhangyue-img2}

图18-15　设备运行正面效果图
:::

::: {.zhangyue-c}
![CmQUOV7V1GiEWVdAAAAAAPahzso841450397.jpg](https://i.imgur.com/DHWjWAE.jpeg){.zhangyue-img}

图18-16　设备运行侧面效果图
:::

::: {.zhangyue-c}
![CmQUOF7V1GiECG8pAAAAAEhzkfM350943426.jpg](https://i.imgur.com/E7Ua9KJ.jpeg){.zhangyue-img}

图18-17　理想效果图
:::
:::

[]{#chapter-95.xhtml}

::: {.calibre1}
## 18.4　元件清单 {.tpl-185-title}

::: {.tpl-185-box-cuxian}
:::

::: {.tpl-185-box-middle}
:::

完成本项目所用到的元件及数量如表18-3所示。

::: {.zhangyue-c}
表18-3　元件清单

![CmQUOV7V1G2EFiA8AAAAAGhGcd8035419269.jpg](https://i.imgur.com/KoOJryf.jpeg){.zhangyue-img1}
:::
:::

[]{#chapter-96.xhtml}

::: {.h5_mainbody_bg1}
::: {.h5_rule_hv}
# 第19章 {.tpl-133-text-1-num}

::: {.tpl-133-div-line}
# 智能门禁系统项目设计 ![CmQUOF7V1G-EH2WXAAAAAF19EmE760897358.png](https://i.imgur.com/sOxbJgY.jpeg){.zhangyue-footnote} {.tpl-133-title-1-center}
:::

::: {.tpl-133-pic-center}
![CmQUOV7V1G-EPMjIAAAAALGIiMg413130245.png](https://i.imgur.com/AWGV5Cn.jpeg){.tpl-133-pic-img-h}
:::
:::
:::

::: {.calibre1}
本项目基于Arduino开发板通过手机端输入密码直接开锁，实现智能门禁系统。
:::

[]{#chapter-97.xhtml}

::: {.calibre1}
## 19.1　功能及总体设计 {.tpl-185-title}

::: {.tpl-185-box-cuxian}
:::

::: {.tpl-185-box-middle}
:::

本项目通过手机端的网络调试助手APP输入密码来实现远程的物理开锁，可以在服务器修改密码，三次输入错误密码后系统进入休眠状态，不可再通过密码进行开锁；输入正确密码并开锁后，室内的LED会自动打开，提供照明；断电后密码不重置，保证系统工作的稳定性。

要实现上述功能需将作品分成四部分进行设计，即输入部分、处理部分、传输部分和输出部分。输入部分选用了手机端的网络调试助手APP；处理部分通过用C++程序搭建的服务器来实现；传输部分选用了ESP8266模块配合Arduino开发板实现；输出部分使用9g的舵机实现。

1．整体框架图

整体框架如图19-1所示。

::: {.zhangyue-c}
![CmQUOF7V1GiEDCliAAAAAO5V3v0987152760.jpg](https://i.imgur.com/krRnsOT.jpeg){.zhangyue-img}

图19-1　整体框架图
:::

2．系统流程图

系统流程如图19-2所示。

服务器及ESP8266连接在同一WiFi网络下，手机端的APP与服务器通过TCP/IP协议进行通信，手机端将输入的密码传输至服务器与正确密码进行比对。密码正确，则计算机将指令传输给ESP8266模块，然后通过串口通信的方式将指令传输给Arduino开发板控制舵机开门和点亮LED，实现智能门禁系统的功能。

::: {.zhangyue-c}
![CmQUOV7V1GiEVxJZAAAAAErX5Ag682198880.jpg](https://i.imgur.com/sBP5LVK.jpeg){.zhangyue-img2}

图19-2　系统流程图
:::

3．总电路图

系统总电路图如图19-3所示，引脚连接如表19-1所示。

::: {.zhangyue-c}
![CmQUOV7V1GiEe4S7AAAAAD__hEs182369944.jpg](https://i.imgur.com/9qaUtTd.jpeg){.zhangyue-img}

图19-3　系统总电路图
:::

::: {.zhangyue-c}
表19-1　引脚连接表

![CmQUOF7V1G2EWVrSAAAAAK7eedw588827366.jpg](https://i.imgur.com/HTBtx7u.jpeg){.zhangyue-img1}
:::
:::

[]{#chapter-98.xhtml}

::: {.calibre1}
## 19.2　模块介绍 {.tpl-185-title}

::: {.tpl-185-box-cuxian}
:::

::: {.tpl-185-box-middle}
:::

本项目主要包括服务器、ESP8266模块、舵机模块和输出模块。下面分别给出各模块的功能介绍及相关代码。

### 19.2.1　服务器模块 {#chapter-98.xhtml#AUTO_ID_75 .text-title}

本部分包括服务器模块的功能介绍、构建过程及相关代码。

1．功能介绍

服务器在接收到手机端APP输入密码后，与服务器本地的正确密码进行对比。密码正确，则将指令通过TCP/IP协议传输给ESP8266模块。

2．构建过程

1）服务器代码构建流程

（1）加载套接字库（WSAStartup）。

（2）创建套接字（socket）。

（3）将套接字绑定到一个本地地址和端口（bind）。

（4）将套接字设为监听模式，准备接收客户请求（listen）。

（5）等待客户请求到来，返回一个新的对应于此次连接的套接字（accept）。

（6）用返回的套接字和客户端进行通信（send/recv）。

（7）返回，等待另一客户请求回到（5）。

（8）关闭套接字（closesocket）。

（9）退出时用WSACleanup卸载套接库。

2）客户端代码构建流程

（1）加载套接字库（WSAStartup）。

（2）创建套接字（socket）。

（3）向服务器发出连接请求（connect）。

（4）和服务器端进行通信（send/recv）。

（5）关闭套接字（closesocket）。

（6）卸载套接字库（WSACleanup）。

3）示例

服务器示例代码如下：

::: {.zhangyue-c}
![CmQUOF7V1GiEQZsoAAAAAJoJ-qs897000646.jpg](https://i.imgur.com/KdfIQmQ.jpeg){.zhangyue-img}
:::

4）客户端代码

::: {.zhangyue-c}
![CmQUOF7V1GiEH-CDAAAAAH4EUoY072608897.jpg](https://i.imgur.com/m5OFkI4.jpeg){.zhangyue-img}
:::

3．相关代码

::: {.zhangyue-c}
![CmQUOV7V1GiEV5AuAAAAAE5HxoM028806674.jpg](https://i.imgur.com/vdXOLdi.jpeg){.zhangyue-img}
:::

::: {.zhangyue-c}
![CmQUOV7V1GiEI3GaAAAAAPumNYI815203671.jpg](https://i.imgur.com/dXSbry5.jpeg){.zhangyue-img}
:::

::: {.zhangyue-c}
![CmQUOF7V1GiENPB0AAAAAKM9pRs704466744.jpg](https://i.imgur.com/cjCG9Y1.jpeg){.zhangyue-img}
:::

::: {.zhangyue-c}
![CmQUOF7V1GiEWlsSAAAAAPTvIt8548420318.jpg](https://i.imgur.com/RHvPqsW.jpeg){.zhangyue-img}
:::

::: {.zhangyue-c}
![CmQUOF7V1GiEDQMeAAAAAHVlK-o438821391.jpg](https://i.imgur.com/a8mIO5j.jpeg){.zhangyue-img}
:::

::: {.zhangyue-c}
![CmQUOV7V1GiEIwWOAAAAAKiK5qg437943959.jpg](https://i.imgur.com/VzjAyXb.jpeg){.zhangyue-img}
:::

::: {.zhangyue-c}
![CmQUOF7V1GiEPe-zAAAAABwnqQ8595472815.jpg](https://i.imgur.com/MKK5T21.jpeg){.zhangyue-img}
:::

### 19.2.2　ESP8266模块 {#chapter-98.xhtml#AUTO_ID_76 .text-title}

本部分包括ESP8266模块的功能介绍及相关代码。

1．功能介绍

ESP8266-01通信需要用到Arduino开发板中的SoftwareSerial.h库文件，下载并解压到Arduino IDE的libraries文件夹中，重新启动即可使用。电路使用LED负极到Arduino开发板的GND引脚，LED正极引脚连接Arduino开发板的数字引脚6；ESP8266的VCC、CH-PD、GND、TX、RX分别接Arduino开发板的3.3V、3.3V、GND、引脚2、引脚3。在工作状态下，GPI00断开，在烧录时将GPI00接GND。手机端发出控制指令，通过ESP8266模块传输到Arduino开发板，进而控制输出模块。使用LED简单的模拟输出模块，ESP8266收到a时LED亮，收到b时LED熄灭，电路如图19-4所示。

::: {.zhangyue-c}
![CmQUOF7V1GiEaUAVAAAAAFvLONY412976621.jpg](https://i.imgur.com/SA1uy1x.jpeg){.zhangyue-img}

图19-4　ESP8266电路图
:::

2．相关代码

::: {.zhangyue-c}
![CmQUOF7V1GiEGp1-AAAAALxWkbE847922773.jpg](https://i.imgur.com/PXZHzmR.jpeg){.zhangyue-img}
:::

::: {.zhangyue-c}
![CmQUOV7V1GiEe3TeAAAAAAsrJCc932657439.jpg](https://i.imgur.com/kNjNOlM.jpeg){.zhangyue-img}
:::

::: {.zhangyue-c}
![CmQUOV7V1GiEOquDAAAAAInIgis326512866.jpg](https://i.imgur.com/Q6jrsJz.jpeg){.zhangyue-img}
:::

### 19.2.3　舵机模块 {#chapter-98.xhtml#AUTO_ID_77 .text-title}

本部分包括舵机的功能介绍及相关代码。

1．功能介绍

舵机又称伺服直流电机，是一种具有闭环控制系统的机电结构。舵机主要是由外壳、电路板、无核心直流电机、齿轮与位置检测器所构成。其工作原理是由控制器发出PWM（脉冲宽度调制）信号给舵机，经电路板处理后计算出转动方向，再驱动无核心直流电机转动，透过减速齿轮将动力传至摆臂，同时由位置检测器（电位器）返回位置信号，判断是否已经到达设定位置，一般舵机只能旋转180°。本项目通过舵机模块模拟开锁功能，电路如图19-5所示。

::: {.zhangyue-c}
![CmQUOF7V1GiEHDlJAAAAAJPAa8c077648422.jpg](https://i.imgur.com/H5S4VIX.jpeg){.zhangyue-img}

图19-5　舵机电路图
:::

2．相关代码

::: {.zhangyue-c}
![CmQUOF7V1GiEUW3QAAAAAHcHp5o492708871.jpg](https://i.imgur.com/YaMI9yg.jpeg){.zhangyue-img}
:::

### 19.2.4　输出模块 {#chapter-98.xhtml#AUTO_ID_78 .text-title}

本部分包括输出模块的功能介绍及相关代码。

1．功能介绍

ESP8266在将计算机发出的控制指令通过串口通信传输给Arduino开发板，并通过开发板控制舵机、警报指示灯的开关。在三次输错密码时，舵机不转动，门禁系统进入休眠状态，无法通过输入密码进行开门，同时警报灯亮起，进行警示。当密码正确时，舵机转动，门开启的同时指示灯点亮，起到照明作用，电路如图19-6所示。

::: {.zhangyue-c}
![CmQUOV7V1GiENcaWAAAAACuqLVw956905508.jpg](https://i.imgur.com/GitldlN.jpeg){.zhangyue-img}

图19-6　输出模块电路图
:::

2．相关代码

::: {.zhangyue-c}
![CmQUOF7V1GmEVUHCAAAAAEA-zIM074942640.jpg](https://i.imgur.com/ICaz6He.jpeg){.zhangyue-img1}
:::

::: {.zhangyue-c}
![CmQUOF7V1GmES_XSAAAAAC7E9Do146469809.jpg](https://i.imgur.com/wa5CwFs.jpeg){.zhangyue-img1}
:::

::: {.zhangyue-c}
![CmQUOV7V1GmEcMCXAAAAAKCelGU151846686.jpg](https://i.imgur.com/KZXx6Mu.jpeg){.zhangyue-img}
:::

::: {.zhangyue-c}
![CmQUOF7V1GmEPccQAAAAAMi6wlM748788203.jpg](https://i.imgur.com/ce4qTQz.jpeg){.zhangyue-img}
:::
:::

[]{#chapter-99.xhtml}

::: {.calibre1}
## 19.3　产品展示 {.tpl-185-title}

::: {.tpl-185-box-cuxian}
:::

::: {.tpl-185-box-middle}
:::

整体外观如图19-7所示，服务器连接工作如图19-8所示，系统处于正常工作状态如图19-9所示。密码连续三次输入错误，舵机不转，报警灯亮起，系统进入非正常工作如图19-10所示。

::: {.zhangyue-c}
![CmQUOF7V1GmEbi8OAAAAAAHuPJ4966081088.jpg](https://i.imgur.com/gBYKjN6.jpeg){.zhangyue-img}

图19-7　整体外观图
:::

::: {.zhangyue-c}
![CmQUOV7V1GmEDAf3AAAAABv07mg890441226.jpg](https://i.imgur.com/uwOdAmS.jpeg){.zhangyue-img}

图19-8　服务器连接工作图
:::

::: {.zhangyue-c}
![CmQUOV7V1GmEF-MXAAAAAHP12yE726929635.jpg](https://i.imgur.com/kyChD4y.jpeg){.zhangyue-img2}

图19-9　正常工作图
:::

::: {.zhangyue-c}
![CmQUOF7V1GmEAyO9AAAAAHWtZdk831740647.jpg](https://i.imgur.com/9iJoHP8.jpeg){.zhangyue-img}

图19-10　非正常工作图
:::
:::

[]{#chapter-100.xhtml}

::: {.calibre1}
## 19.4　元件清单 {.tpl-185-title}

::: {.tpl-185-box-cuxian}
:::

::: {.tpl-185-box-middle}
:::

完成本项目所用到的元件及数量如表19-2所示。

::: {.zhangyue-c}
表19-2　元件清单

![CmQUOV7V1G2ETqMJAAAAAPE-nZw393064538.jpg](https://i.imgur.com/wsdYhzI.jpeg){.zhangyue-img1}
:::
:::

[]{#chapter-101.xhtml}

::: {.h5_mainbody_bg1}
::: {.h5_rule_hv}
# 第20章 {.tpl-133-text-1-num}

::: {.tpl-133-div-line}
# 激光雕刻机项目设计 ![CmQUOF7V1G-EH2WXAAAAAF19EmE760897358.png](https://i.imgur.com/MbbVIrk.jpeg){.zhangyue-footnote} {.tpl-133-title-1-center}
:::

::: {.tpl-133-pic-center}
![CmQUOV7V1G-EPMjIAAAAALGIiMg413130245.png](https://i.imgur.com/0saDrAl.jpeg){.tpl-133-pic-img-h}
:::
:::
:::

::: {.calibre1}
本项目基于Arduino开发板与计算机连接，根据G代码做出操作，控制激光头和滑台雕刻出图形。
:::

[]{#chapter-102.xhtml}

::: {.calibre1}
## 20.1　功能及总体设计 {.tpl-185-title}

::: {.tpl-185-box-cuxian}
:::

::: {.tpl-185-box-middle}
:::

本项目利用画图软件绘制或将处理过、符合雕刻要求的图片导入计算机及控制软件，软件将其转换为相应的矢量图，然后再转换为G代码。外观是由亚克力板搭成的，配有两个滑台，一个控制雕刻介质的移动，一个控制激光头的移动。由于Arduino开发板不能驱动激光头，因此配备了IRF520驱动模块。驱动模块通过扩展板与Arduino开发板相连，分别配有5V和12V的电源适配器。

要实现上述功能需将作品分成两部分进行设计，即硬件连接部分实现具体的操作，软件实现部分用于控制具体的流程。将雕刻的图片输入计算机控制端，通过计算机处理后，利用软件控制激光雕刻机的运动。

1．整体框架图

整体框架如图20-1所示。

::: {.zhangyue-c}
![CmQUOF7V1GmEaUNrAAAAAJXL4kg453302786.jpg](https://i.imgur.com/29Laz4W.jpeg){.zhangyue-img2}

图20-1　整体框架图
:::

2．系统流程图

系统流程如图20-2所示。

::: {.zhangyue-c}
![CmQUOF7V1GmEXHXwAAAAAC8JHzM475860854.jpg](https://i.imgur.com/BgRAAxd.jpeg){.zhangyue-img3}

图20-2　系统流程图
:::

3．总电路图

系统总电路如图20-3所示，引脚连接如表20-1所示。

::: {.zhangyue-c}
![CmQUOV7V1GmEQyZHAAAAAGnYQZk489021510.jpg](https://i.imgur.com/8SxlN6e.jpeg){.zhangyue-img}

图20-3　系统总电路图
:::

电路中IRF520的SIG信号引脚连接扩展板的SpnEn引脚，VCC引脚连接扩展板的5V引脚，GND引脚连接GND引脚，VIN、GND分别连接5V、12V电源适配器，EN和GND需要互相连接。

::: {.zhangyue-c}
表20-1　引脚连接表

![CmQUOF7V1G2EJSumAAAAAMnxUg4086047598.jpg](https://i.imgur.com/ib1zgg9.jpeg){.zhangyue-img1}
:::
:::

[]{#chapter-103.xhtml}

::: {.calibre1}
## 20.2　模块介绍 {.tpl-185-title}

::: {.tpl-185-box-cuxian}
:::

::: {.tpl-185-box-middle}
:::

本部分主要包括主程序模块、输出模块和软硬件安装模块。下面分别给出各模块的功能介绍及相关代码。

### 20.2.1　主程序模块 {#chapter-103.xhtml#AUTO_ID_79 .text-title}

1．功能介绍

将雕刻的图片输入计算机控制端，Arduino开发板带动扩展板（上面的A4988）和驱动模块工作，随之带动激光头和步进电机进行雕刻。元件包括Arduino开发板、扩展板、A4988和驱动模块。

2．相关代码

::: {.zhangyue-c}
![CmQUOF7V1GmEOWOTAAAAAJzsSRY192827373.jpg](https://i.imgur.com/s9RNfEl.jpeg){.zhangyue-img}
:::

::: {.zhangyue-c}
![CmQUOF7V1GmEez45AAAAANhNW1s981637175.jpg](https://i.imgur.com/buAULHQ.jpeg){.zhangyue-img}
:::

::: {.zhangyue-c}
![CmQUOF7V1GmENdaSAAAAAB3lNoQ857250169.jpg](https://i.imgur.com/K5GCI2L.jpeg){.zhangyue-img}
:::

::: {.zhangyue-c}
![CmQUOV7V1GmERy2AAAAAALWw0_8090698302.jpg](https://i.imgur.com/c6DdRai.jpeg){.zhangyue-img}
:::

::: {.zhangyue-c}
![CmQUOF7V1GmEftefAAAAAMxx730289550959.jpg](https://i.imgur.com/up4b4cZ.jpeg){.zhangyue-img}
:::

::: {.zhangyue-c}
![CmQUOV7V1GmEKhLCAAAAAKYUuX8698928426.jpg](https://i.imgur.com/vacNW43.jpeg){.zhangyue-img}
:::

::: {.zhangyue-c}
![CmQUOF7V1GmERyvZAAAAAIfaUVM930516791.jpg](https://i.imgur.com/Gqhm2kD.jpeg){.zhangyue-img}
:::

### 20.2.2　输出模块 {#chapter-103.xhtml#AUTO_ID_80 .text-title}

本部分包括输出模块的功能介绍及相关代码。

1．功能介绍

步进电机和激光头根据计算机的代码进行相应操作，直流电机带动激光头雕刻图形。

2．相关代码

::: {.zhangyue-c}
![CmQUOF7V1GmEcUs4AAAAAFtbiuc644689807.jpg](https://i.imgur.com/uDEp8oV.jpeg){.zhangyue-img}
:::

::: {.zhangyue-c}
![CmQUOV7V1GmEAm0hAAAAAGEQ9G8770471311.jpg](https://i.imgur.com/d5WDGYP.jpeg){.zhangyue-img}
:::

::: {.zhangyue-c}
![CmQUOV7V1GmEH5g1AAAAAM7N3Ic529919283.jpg](https://i.imgur.com/BkX5Qfs.jpeg){.zhangyue-img}
:::

::: {.zhangyue-c}
![CmQUOV7V1GmEMumAAAAAAAEMZZg293795573.jpg](https://i.imgur.com/hHHWzfz.jpeg){.zhangyue-img}
:::

::: {.zhangyue-c}
![CmQUOF7V1GmEDWpQAAAAAIaAQg4869780074.jpg](https://i.imgur.com/JABJ5Cv.jpeg){.zhangyue-img}
:::

### 20.2.3　软硬件安装模块 {#chapter-103.xhtml#AUTO_ID_81 .text-title}

本项目软硬件安装模块的具体操作流程，如图20-4所示。

::: {.zhangyue-c}
![CmQUOF7V1GmEMdOIAAAAAGKoPec705968732.jpg](https://i.imgur.com/pMrkCEf.jpeg){.zhangyue-img}

图20-4　操作流程图
:::

1．硬件安装

首先将亚克力板拼装成雕刻机支架，其次将滑台安装到支架上，再次将激光安装到滑台，最后进行电控连接。

连接Arduino开发板和CNC Shield V3扩展板，将两个A4988与扩展板连接（注意贴上散热片及调节限流螺母）。连接直流电机驱动排线到扩展板（注意方向，测试时若方向相反调整即可）。用IRF520驱动模块连接激光头和开发板，12V电源接扩展板，5V电源接520驱动模块。

2．软件驱动

（1）Arduino USB串口模块驱动。

（2）程序烧录（已编译成.hex文件，可直接烧录）。

（3）安装计算机控制软件（Jedi Master）。

3．上机加电调试

（1）激光头对焦。

（2）调整雕刻机x、y轴参数。

（3）调整直流电机运行速度。

（4）调整偏好设置。
:::

[]{#chapter-104.xhtml}

::: {.calibre1}
## 20.3　产品展示 {.tpl-185-title}

::: {.tpl-185-box-cuxian}
:::

::: {.tpl-185-box-middle}
:::

整体外观如图20-5所示，原始图像与雕刻机图像对比如图20-6所示。

::: {.zhangyue-c}
![CmQUOV7V1GmEM8x0AAAAAMqeXbM741847399.jpg](https://i.imgur.com/gcPjAJ7.jpeg){.zhangyue-img}

图20-5　整体外观图
:::

::: {.zhangyue-c}
![CmQUOF7V1GmEBAc0AAAAAFl96pg081868254.jpg](https://i.imgur.com/El0MAf4.jpeg){.zhangyue-img}

图20-6　原始图像与雕刻机图像对比图
:::
:::

[]{#chapter-105.xhtml}

::: {.calibre1}
## 20.4　元件清单 {.tpl-185-title}

::: {.tpl-185-box-cuxian}
:::

::: {.tpl-185-box-middle}
:::

完成本项目所用到的元件及数量如表20-2所示。

::: {.zhangyue-c}
表20-2　元件清单

![CmQUOV7V1G2EOZZ9AAAAAG7MS0g149147640.jpg](https://i.imgur.com/2uPx3qm.jpeg){.zhangyue-img1}
:::
:::

[]{#chapter-106.xhtml}

::: {.calibre1}
# 参考文献 {.tpl-231-title}

::: {.tpl-231-box-middle}
:::

［1］李永华，高英，陈青云．Arduino软硬件协同设计实战指南［M］．北京：清华大学出版社，2015．

［2］刘玉田，徐勇进．用Arduino进行创造［M］．2版．北京：清华大学出版社，2014．

［3］赵英杰．完美图解Arduino互动设计入门［M］．北京：科学出版社，2014．

［4］Evans M，Noble J，Hochenbaum J．Arduino实战［M］．况琪译．北京：人民邮电出版社，2014．

［5］Boxall J．动手玩转Arduino［M］．翁恺，译．北京：人民邮电出版社，2014．

［6］刘培植．数字电路与逻辑设计［M］．2版．北京：北京邮电大学出版社，2013．

［7］Monk S．Arduino编程从零开始［M］．刘椮楠，译．北京：科学出版社，2013．

［8］McRoberts M．Arduino从基础到实践［M］．杨继志，郭敬，译．北京：电子工业出版社，2013．

［9］黄文恺，伍冯洁，陈虹．Arduino开发实战指南［M］．北京：机械工业出版社，2014．

［10］唐文彦．传感器［M］．北京：机械工业出版社，2006．

［11］沈金鑫．Arduino与LabVIEW开发实践［M］．北京：机械工业出版社，2014．

［12］程晨．Arduino电子设计实战指南［M］．北京：机械工业出版社，2013．

［13］沙占友．集成传感器应用［M］．北京：中国电力出版社，2005．

［14］李军，李冰海．检测技术及仪表［M］．北京：中国轻工业出版社，2008．

［15］宋楠，韩广义．Arduino开发从零开始学------学电子的都玩这个［M］．北京：清华大学出版社，2014．

［16］刘敏，刘泽军，宋庆国．基于Arduino的简易亮光报警器的设计与实现［J］．电子世界，2012（21）：122-123．
:::
