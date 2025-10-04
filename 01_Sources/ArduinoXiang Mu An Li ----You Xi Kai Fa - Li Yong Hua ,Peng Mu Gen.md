![cover.jpeg](https://i.imgur.com/NnH0dwD.jpeg)

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
![cover-o.jpg](https://i.imgur.com/2G5M83e.jpeg){.calibre2}
:::

::: {.h5_mainbody_bg}
#### 版权信息 {.copyright-title}

书名：Arduino项目案例------游戏开发\
作者：李永华 彭木根\
出版社：清华大学出版社\
出版时间：2019-09-01\
ISBN：9787302528128\

版权所有·侵权必究
:::

[]{#chapter-2.xhtml}

::: {.calibre1}
# 内容简介 {.tpl-231-title}

::: {.tpl-231-box-middle}
:::

本书系统论述了Arduino开源硬件的架构、原理、开发方法及11个完整的项目设计案例。全书共分12章，内容包括Arduino项目设计基础、迷你游戏机项目设计、基于JY901的无线体感游戏掌机项目设计、Heagic Tower项目设计、带游戏手柄的2048小游戏项目设计、贪吃蛇游戏机项目设计、推箱游戏机项目设计、Hit Me地鼠游戏机项目设计、体感游戏模拟器项目设计、JUST JUMP游戏项目设计、变脸弹珠台小游戏项目设计、贪吃蛇小游戏项目设计。

在编排方式上，全书侧重对创新产品的项目设计过程进行介绍。分别从需求分析、设计与实现等角度论述硬件电路、软件设计、传感器和功能模块等，并剖析产品的功能、使用、电路连接和程序代码。为便于读者高效学习，快速掌握Arduino开发方法，本书配套提供项目设计的硬件电路图、程序代码、实现过程中出现的问题及解决方法，供读者举一反三，二次开发。

本书可作为高校电子信息类专业"开源硬件设计""电子系统设计""创新创业"等课程的教材，也可作为创客及智能硬件爱好者的参考用书，还可作为从事物联网、创新开发和设计专业人员的技术参考书。
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

在"大众创业，万众创新"的时代背景下，人才培养方法和模式也应该满足当前的时代需求。作者依据当今信息社会的发展趋势，结合Arduino开源硬件的发展及智能硬件的发展要求，采取激励创新的工程教育方法，培养适应未来工业4.0发展的人才。因此，本书试图探索基于创新工程教育的基本方法，并将其提炼为适合我国国情、具有自身特色的创新实践教材，对实际教学中应用智能硬件的创新工程教学经验进行总结，包括具体的创新方法和开发案例，希望对教育教学及工业界有所帮助，起到抛砖引玉的作用。

本书的内容和素材主要来源于作者所在学校近几年承担的教育部和北京市的教育、教学改革项目和成果，也是北京邮电大学信息工程专业的同学们创新产品的设计成果。书中系统地介绍了如何利用Arduino平台进行产品开发，包括相关的设计、实现与产品应用，主要内容包括Arduino设计基础及游戏开发案例。

本书的编写得到了教育部电子信息类专业教学指导委员会、信息工程专业国家第一类、第二类特色专业建设项目、教育部CDIO工程教育模式研究与实践项目、教育部本科教学工程项目、信息工程专业北京市特色专业建设、北京市教育教学改革项目、北京邮电大学教育教学改革项目（创新创业教育精品课程）的大力支持。在此一并表示感谢！

由于作者水平有限，书中不妥之处在所难免，衷心希望广大读者多提宝贵意见及具体的整改措施，以便作者进一步修改和完善。

李永华\
于北京邮电大学\
2019年5月
:::

[]{#chapter-5.xhtml}

::: {.h5_mainbody_bg1}
::: {.h5_rule_hv}
# 第1章 {.tpl-133-text-1-num}

::: {.tpl-133-div-line}
# Arduino项目设计基础 {.tpl-133-title-1-center}
:::

::: {.tpl-133-pic-center}
![CmQUOF7Vz9SEE6btAAAAALGIiMg316210040.png](https://i.imgur.com/T1BXi7H.jpeg){.tpl-133-pic-img-h}
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

电子电路是人类社会发展的重要成果，在早期的硬件设计和实现上都是公开的，包括电子设备、电器设备、计算机设备以及各种外围设备的设计原理图，大家认为公开是十分正常的事情，所以，早期公开的设计图并不称为开源。1960年前后，很多公司根据自身利益选择了闭源，由此也就出现了贸易壁垒、技术壁垒、专利版权等问题，不同公司之间也出现了互相起诉。例如，国内外的IT公司之间由于知识产权而法庭相见，屡见不鲜。虽然这种做法在一定程度上有利于公司自身的利益，但是，不利于小公司或者个体创新者的发展。特别是，在互联网进入Web 2.0的个性化时代背景下，更加需要开放、免费和开源的开发系统。

因此，在"大众创业，万众创新"的时代背景下，Web 2.0时代的开发者思考硬件是否可以重新进行开源。电脑爱好者、发烧友及广大的创客一直致力于开源的研究，推动开源的发展，最初从很小的东西发展到现在，已经有3D打印机，开源的单片机系统等。也就是说，开源硬件是指与开源软件采取相同的方式，进行设计各种电子硬件的总称。也就是说，开源硬件是考虑对软件以外的领域进行开源，是开源文化的一部分。开源硬件是可以自由传播硬件设计的各种详细信息，例如，电路图、材料清单和开发板布局数据，通常使用开源软件来驱动开源的硬件系统。本质上，共享逻辑设计、可编程的逻辑元件重构也是一种开源硬件，通过硬件描述语言代码实现电路图共享。硬件描述语言通常用于芯片系统，也用于可编程逻辑阵列或直接用在专用集成电路中，这在当时也称之为硬件描述语言模块或IP核。

众所周知，Arduino就是开源软件之一，开源硬件和开源软件类似，通过开源软件可以更好的理解开源硬件，就是在之前已有硬件的基础之上进行二次开发。二者也有差别，体现在复制成本上，开源软件的成本几乎是零，而开源硬件的复制成本较高。另外，开源硬件延伸着开源软件代码的定义，包括软件、电路原理图、材料清单，设计图等都使用开源许可协议，自由使用分享，完全以开源的方式去授权。避免了以往DIY分享的授权问题；同时，开源硬件把开源软件常用的GPL、CC等协议规范带到硬件分享领域，为开源硬件的发展提供了标准。
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

Arduino开发板也可以独立使用，成为与其他软件沟通的平台，例如，Flash、Processing、Max/MSP、VVVV或其他互动软件。Arduino开发板的种类很多，包括Arduino UNO、YUN、DUE、Leonardo、Tre、Zero、Micro、Esplora、MEGA、MINI、NANO、Fio、Pro以及LilyPad Arduino，随着开源硬件的发展，将会出现更多的开源产品，下面介绍几种典型的Arduino开发板。

Arduino UNO开发板是Arduino USB接口系列的常用版本，是Arduino平台的参考标准模板，如图1-1所示。Arduino UNO开发板的处理器核心是ATmega328，具有14个数字输入/输出引脚（其中6个可作为PWM输出）、6个模拟输入引脚、1个16MHz晶体振荡器、1个USB接口、1个电源插座、1个ICSP插头和1个复位按钮。

如图1-2所示，Arduino YUN是一款基于ATmega32U4和Atheros AR9331的单片机开发板。Atheros AR9331可以运行基于Linux和OpenWRT的操作系统Linino。这款单片机开发板具有内置的Ethernet、WiFi、1个USB接口、1个Micro插槽、20个数字输入/输出引脚（其中7个可以用于PWM，12个可以用于ADC）、1个MICRO USB、1个ICSP插头和3个复位开关。

::: {.zhangyue-c}
![CmQUOV7Vz8WEAL0dAAAAAGeK8yI169008210.jpg](https://i.imgur.com/1i2G4xc.jpeg){.zhangyue-img}

图1-1　Arduino UNO开发板
:::

::: {.zhangyue-c}
![CmQUOV7Vz8aECfBzAAAAAHPOoGQ552149988.jpg](https://i.imgur.com/m2GmTPL.jpeg){.zhangyue-img}

图1-2　Arduino YUN开发板
:::

如图1-3所示，Arduino DUE是一块基于Atmel SAM3X8E CPU的开发板。它是第一块基于32位ARM核心的Arduino开发板，有54个数字输入/输出引脚（其中12个可用于PWM输出）、12个模拟输入引脚、4个UART硬件串口、84MHz的时钟频率、1个USB OTG接口、2个DAC（模数转换）、2个TWI、1个电源插座、1个SPI接口、1个JTAG接口、1个复位按键和1个擦写按键。

::: {.zhangyue-c}
![CmQUOV7Vz8qEKnPsAAAAAP4hcFk945551808.jpg](https://i.imgur.com/eU0xCYF.jpeg){.zhangyue-img}

图1-3　Arduino DUE开发板
:::

如图1-4所示，为Arduino MFGA 2560开发板，也是采用USB接口的核心开发板，它最大的特点就是具有多达54个数字输入/输出引脚，特别适合需要大量输入/输出引脚的设计。Arduino MEGA 2560的处理器核心是ATmega2560，具有54个数字输入/输出引脚（其中16个可作为PWM输出）、16个模拟输入引脚、4个UART接口、1个16MHz晶体振荡器、1个USB接口、1个电源插座、1个ICSP插头和1个复位按钮。Arduino MRGA 2560开发板也能兼容为Arduino UNO设计的扩展板。目前，Arduino MEGA 2560开发板已经发布到第三版，与前两版相比有以下新的特点：

::: {.zhangyue-c}
![CmQUOF7Vz8qEX2EAAAAAAFw6poM068134558.jpg](https://i.imgur.com/0mHGBtM.jpeg){.zhangyue-img}

图1-4　Arduino MEGA 2560开发板
:::

（1）在AREF处增加了两个引脚SDA和SCL，支持I ^2^ C接口；增加IOREF和1个预留引脚，以便将来扩展板能够兼容5V和3.3V核心板，改进了复位电路设计；USB接口芯片由ATmega16U2替代了ATmega8U2。

（2）Arduino MEGA 2560开发板可以通过三种方式供电：外部直流电源通过电源插座供电，电池连接电源连接器的GND和VIN引脚供电，USB接口直接供电。而且，它能自动选择供电方式。

电源引脚说明如下：

（1）VIN：当外部直流电源接入电源插座时，可以通过VIN向外部供电，也可以通过此引脚向Arduino MEGA 2560开发板直接供电；VIN供电时将忽略从USB或者其他引脚接入的电源。

（2）5V：通过稳压器或USB的5V电压，为Arduino MEGA 2560开发板上的5V芯片供电。

（3）3.3V：通过稳压器产生的3.3V电压，最大驱动电流为50mA。

（4）GND：接地引脚。

如图1-5所示，Arduino Leonardo是一款基于ATmega32u4的开发板。它有20个数字输入/输出引脚（其中7个可用作PWM输出、12个可用作模拟输入）、1个16 MHz晶体振荡器、1个Micro USB连接、1个电源插座、1个ICSP头和1个复位按钮。具有支持微控制器所需的一切功能，只需通过USB电缆将其连至计算机，或者通过电源适配器、电池为其供电即可使用。

Leonardo与先前的所有开发板都不同，ATmega32u4具有内置式USB通信，从而无须二级处理器。这样，除了虚拟（CDC）串行/通信端口，Leonardo还可以充当计算机的鼠标和键盘，它对开发板的性能也会产生影响。

如图1-6所示，Arduino Ethernet是一款基于ATmega328的开发板。它有14个数字输入/输出引脚、6个模拟输入引脚、1个16 MHz晶体振荡器、1个RJ-45连接、1个电源插座、1个ICSP头和1个复位按钮。引脚10、11、12和13只能用于连接以太网模块，不可作为他用，可用引脚只有9个，其中4个可用作PWM输出。

Arduino Ethernet没有板载USB转串口驱动器芯片，但是有1个WIZnet以太网接口。该接口与以太扩展板相同。板载microSD读卡器可用于存储文件，能够通过SD库进行访问。引脚10留作WIZnet接口，SD卡的SS在引脚4上。引脚6串行编程头与USB串口适配器兼容，与FTDI USB电缆、Sparkfun和Adafruit FTDI式基本USB转串口分线板也兼容。它支持自动复位，从而无须按下开发板上的复位按钮即可上传程序代码。当插入USB转串口适配器时，Arduino Ethernet由适配器供电。

::: {.zhangyue-c}
![CmQUOF7Vz86EFmraAAAAAAUy_mE864379378.jpg](https://i.imgur.com/oRKHsSg.jpeg){.zhangyue-img1}

图1-5　Arduino Leonardo开发板
:::

::: {.zhangyue-c}
![CmQUOF7Vz86EZ2LGAAAAABEc178406481016.jpg](https://i.imgur.com/jSFN3ac.jpeg){.zhangyue-img1}

图1-6　Arduino Ethernet开发板
:::

如图1-7所示，Arduino Robot是一款有轮子的Arduino开发板。Arduino Robot有控制板和电机板，每个开发板上有1个处理器，共2个处理器。电机板控制电机，控制板读取传感器的数值并决定如何操作。每个开发板都是完整的Arduino开发板，用Arduino IDE进行编程。直流电机板和控制板都是基于ATmega32u4的开发板。Arduino Robot将它的一些引脚映射到板载的传感器和制动器上。

Arduino Robot编程的步骤与Arduino Leonardo类似，2个处理器都有内置式USB通信，无须二级处理器，可以充当计算机的虚拟（CDC）串行/通信端口。Arduino Robot有一系列预焊接连接器，所有连接器都标注在开发板上，通过Arduino Robot库映射到指定的端口上，从而使用标准Arduino函数，在5V电压下，每个引脚都可以提供或接受最高40 mA的电流。

::: {.zhangyue-c}
![CmQUOF7Vz9KEO7nGAAAAAMhSmmg974444800.jpg](https://i.imgur.com/jFqG7Ap.jpeg){.zhangyue-img}

图1-7　Arduino Robot开发板
:::

如图1-8所示，Arduino NANO是一款小巧、全面、基于ATmega328的开发板，与Arduino Duemilanove的功能类似，但封装不同，没有直流电源插座且采用Mini-B USB电缆。Arduino NANO开发板上的14个数字引脚都可用作输入或输出，利用pinMode（）、digitalWrite（）和digitalRead（）函数可以对它们操作。工作电压为5V，每个引脚都可以提供或接受最高40 mA的电流，都有1个20\~50kΩ的内部上拉电阻器（默认情况下断开）。Arduino NANO开发板有8个模拟输入，每个模拟输入都提供10位的分辨率（即1024个不同的数值）。默认情况下，它们的电压为0\~5V，可以利用analogReference（）函数改变其电压范围的上限值，模拟引脚6和7不能用作数字引脚。

::: {.zhangyue-c}
![CmQUOV7Vz9KECPaDAAAAABSVZQY085368921.jpg](https://i.imgur.com/pNo7wDy.jpeg){.zhangyue-img}

图1-8　Arduino NANO开发板
:::

### 1.2.2　Arduino扩展板 {#chapter-7.xhtml#AUTO_ID_2 .text-title}

::: {.zhangyue-c}
![CmQUOV7Vz9KEB8JTAAAAACrVGL4403113969.jpg](https://i.imgur.com/jIHyQTQ.jpeg){.zhangyue-img1}

图1-9　Arduino Ethernet Shield扩展板
:::

在Arduino开源硬件系列中，除了主要开发板之外，还有与之配合使用的各种扩展板，可以插到开发板上增加额外的功能。选择适合的扩展板，可以增强系统开发的功能，常见的扩展板有Arduino Ethernet Shield、Arduino GSM Shield、Arduino Motor Shield、Arduino 9 Axes Motion Shield等。

Arduino Ethernet Shield（以太网盾）扩展板如图1-9所示，有1个标准的有线RJ-45连接，具有集成式线路变压器和以太网供电功能，可将Arduino开发板连接到互联网。基于WIZnet W5500以太网芯片，提供网络（IP）堆栈，支持TCP和UDP协议。可以同时支持8个套接字连接，使用以太网库写入程序代码。

以太网盾板利用贯穿盾板的长绕线排与Arduino开发板连接，保持引脚布局完整无缺，以便其他盾板可以堆叠其上。它有1个板载micro-SD卡槽，可用于存储文件，与Arduino UNO和MEGA兼容，可通过SD库访问板载micro-SD读卡器。以太网盾板带有1个供电（PoE）模块，可从传统的5类电缆获取电力。

Arduino GSM Shield扩展板如图1-10所示，为了连接蜂窝网络，扩展板需要一张由网络运营商提供的SIM卡。它通过移动通信网将Arduino开发板连接到互联网，可拨打/接听语音电话和发送/接收SMS信息。

::: {.zhangyue-c}
![CmQUOF7Vz9OEP8UiAAAAAAqa79M853115715.jpg](https://i.imgur.com/FwEBcm3.jpeg){.zhangyue-img}

图1-10　Arduino GSM Shield扩展板
:::

GSM Shield采用Quectel的无线调制解调器M10，利用AT命令与开发板通信。GSM Shield利用数字引脚2、3与M10进行软件串行通信，引脚2连接M10的TX引脚，引脚3连接RX引脚，调制解调器的PWRKEY连接引脚7。

M10是一款四频GSM/GPRS调制解调器，其工作频率如下：GSM850MHz、GSM900MHz、DCS1800MHz和PCS1900MHz。它通过GPRS连接支持TCP/UDP和HTTP。其中GPRS数据下行链路和上行链路的最大传输速度为85.6 kb/s。

Arduino Motor Shield扩展板如图1-11所示，用于驱动电感负载（例如继电器、螺线管、直流和步进电机）的双全桥驱动器L298，利用Arduino Motor Shield可以驱动2个直流电机，独立控制每个电机的速度和方向。因此，它有2条独立的通道，即A和B，每条通道使用4个开发板引脚来驱动或感应电机，Arduino Motor Shield上使用的引脚共8个。不仅可以单独驱动2个直流电机，也可以将它们合并起来驱动1个双极步进电机。

Arduino 9 Axes Motion Shield扩展板如图1-12所示，它采用德国博世传感器技术有限公司推出的BNO055绝对方向传感器。这是一个使用系统级封装，集成三轴14位加速计、三轴16位陀螺仪、三轴地磁传感器，并运行BSX3.0 FusionLib软件的32位微控制器。BNO055在三个垂直的轴上具有三维加速度、角速度和磁场强度数据。

另外，它还提供传感器融合信号，如四元数、欧拉角、旋转矢量、线性加速、重力矢量。结合智能中断引擎，可以基于慢动作或误动作识别、任何动作（斜率）检测、高g检测等项触发中断。

Arduino 9 Axes Motion Shield扩展板兼容UNO、YNO、Leonardo、Ethernet、MEGA和DUE开发板。在使用Arduino 9 Axes Motion Shield时，要根据使用的开发板将中断桥和重置桥焊接在正确的位置。

::: {.zhangyue-c}
![CmQUOF7Vz9OEJT5FAAAAAHtmR8Q891583535.jpg](https://i.imgur.com/WgrqWHE.jpeg){.zhangyue-img1}

图1-11　Arduino Motor Shield扩展板
:::

::: {.zhangyue-c}
![CmQUOV7Vz9OEchuEAAAAACIRI80704428599.jpg](https://i.imgur.com/PZ1iMLN.jpeg){.zhangyue-img}

图1-12　Arduino 9 Axes Motion Shield扩展板
:::
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

（1）开放源代码的电路图设计和程序开发界面，可免费下载根据需求自己修改；Arduino可使用ICSP线上烧录器，将Bootloader烧入新的IC芯片；可依据官方电路图，简化Arduino模组，完成独立运作的微处理控制。

（2）能够与传感器或各式各样的电子元件连接（如红外线、超音波、热敏电阻、光敏电阻、伺服电机等）；支持多样的互动程序，如Flash、Max/Msp、VVVV、PD、C、Processing等；使用低价格的微处理控制器；USB接口无须外接电源；可提供9V直流电源输入以及多样化的Arduino扩展模块。

（3）在应用方面，通过各种各样的传感器来感知环境、控制灯光、直流电机和其他的装置来反馈并影响环境；可以方便地连接以太网扩展模块进行网络传输，使用蓝牙传输、WiFi传输、无线摄像头控制等多种应用。

### 1.3.2　Arduino IDE的安装 {#chapter-8.xhtml#AUTO_ID_4 .text-title}

Arduino IDE是Arduino开放源代码的集成开发环境，它的界面友好，语法简单，且方便下载程序，这使得Arduino的程序开发变得非常便捷。作为一款开放源代码的软件，Arduino IDE也是由Java、Processing、AVR-GCC等开放源代码的软件写成的。Arduino IDE另一个特点是跨平台的兼容性，适用于Windows、Mac OS X以及Linux。2011年11月30日，Arduino官方正式发布了Arduino 1.0版本，可以下载不同操作系统的压缩包，也可以在GitHub上下载源码重新编译自己的Arduino IDE。安装过程如下：

（1）从Arduino官网下载最新版本IDE，下载界面如图1-13所示。

如图1-13所示，选择适合自己计算机操作系统的安装包，这里以在64位Windows 7系统的安装过程为例。

（2）双击文件选择安装，弹出如图1-14所示的界面。

::: {.zhangyue-c}
![CmQUOV7Vz9SEFBn0AAAAAIq0FuY589585886.jpg](https://i.imgur.com/nrqD32c.jpeg){.zhangyue-img}

图1-13　Arduino下载界面
:::

::: {.zhangyue-c}
![CmQUOF7Vz9SEJXUeAAAAAIgY-Ow035448188.jpg](https://i.imgur.com/IXsNTqT.jpeg){.zhangyue-img}

图1-14　Arduino安装界面
:::

（3）同意协议如图1-15所示，单击IAgree按钮。

::: {.zhangyue-c}
![CmQUOF7Vz9SEDaJGAAAAAD1GF2w292428442.jpg](https://i.imgur.com/0q02q99.jpeg){.zhangyue-img}

图1-15　Arduino协议界面
:::

（4）选择需要安装的组件，如图1-16所示，并单击Next按钮。

::: {.zhangyue-c}
![CmQUOV7Vz9SEGj1sAAAAAFk1Q6E085890263.jpg](https://i.imgur.com/x5GH4ud.jpeg){.zhangyue-img}

图1-16　Arduino选择安装组件
:::

（5）选择安装位置，如图1-17所示，并单击Install按钮。

::: {.zhangyue-c}
![CmQUOV7Vz8KEbVwrAAAAAOby72k284045658.jpg](https://i.imgur.com/XiDlBcs.jpeg){.zhangyue-img}

图1-17　Arduino选择安装位置
:::

（6）安装过程如图1-18所示。

::: {.zhangyue-c}
![CmQUOV7Vz8KENRFpAAAAALaCJmE578913673.jpg](https://i.imgur.com/PXw2F2Y.jpeg){.zhangyue-img}

图1-18　Arduino安装过程
:::

（7）安装USB驱动，如图1-19所示。

::: {.zhangyue-c}
![CmQUOF7Vz8KECEGoAAAAAOJc5mU664228340.jpg](https://i.imgur.com/99doX7a.jpeg){.zhangyue-img}

图1-19　Arduino安装USB驱动
:::

（8）安装完成，如图1-20所示。

（9）进入Arduino IDE开发界面，如图1-21所示。

::: {.zhangyue-c}
![CmQUOV7Vz8KEQZIDAAAAAJY0Qpc050067739.jpg](https://i.imgur.com/ULzIqXC.jpeg){.zhangyue-img}

图1-20　Arduino安装完成
:::

::: {.zhangyue-c}
![CmQUOF7Vz8KEbl49AAAAAPjfgio613687232.jpg](https://i.imgur.com/AdfS7K4.jpeg){.zhangyue-img}

图1-21　Arduino IDE主界面
:::

### 1.3.3　Arduino IDE的使用 {#chapter-8.xhtml#AUTO_ID_5 .text-title}

首次使用Arduino IDE时，需要将Arduino开发板通过USB线连接到计算机，计算机会为Arduino开发板安装驱动程序，并分配相应的COM端口，如COM1、COM2等。不同的计算机和系统分配的COM端口是不一样的，所以，安装完毕后，要在计算机的硬件管理中查看Arduino开发板被分配到哪个端口，这个端口就是计算机与Arduino开发板的通信端口。

Arduino开发板的驱动安装完毕之后，需要在Arduino IDE中设置相应的端口和开发板类型。

方法如下：Arduino集成开发环境启动后，在菜单栏中单击"工具"→"端口"命令，进行端口设置，设置计算机硬件管理中分配的端口。然后，在菜单栏单击"工具"→"开发板"命令，选择Arduino开发板的类型，如Arduino、UNO、DUE、YUN等前面介绍的开发板，这样计算机就可以与开发板进行通信，工具栏显示的功能如图1-22所示。

::: {.zhangyue-c}
![CmQUOF7Vz8OEIShpAAAAAOljYXI256537567.jpg](https://i.imgur.com/8oU5vPK.jpeg){.zhangyue-img}

图1-22　Arduino IDE的工具栏功能
:::

在Arduino IDE中带有很多种示例，包括基本的、数字的、模拟的、控制的、通信的、传感器的、字符串的、存储卡的、音频的、网络等多种示例。下面介绍最简单、最具有代表性的例子------Blink，以便于读者快速熟悉Arduino IDE，从而开发出新的产品。

在菜单栏中依次单击"文件"→"示例"→01Basic→Blink命令，这时在主编辑窗口会出现可以编辑的程序。这个Blink范例程序的功能是控制LED的亮灭。在Arduino编译环境中，是以C/C++的风格来编写的。程序的前面几行是注释行，介绍程序的作用及相关的声明等；然后是变量的定义。最后是Arduino程序的两个函数，即void setup（）和void loop（）。在void setup（）中的代码会在导通电源时执行一次，void loop（）中的代码会不断重复执行。由于在Arduino UNO开发板引脚13上有LED，所以定义整型变量LED＝13，用于函数的控制。另外，程序中用了一些函数：pinMode（）是设置引脚的作用为输入还是输出；delay（）是设置延迟的时间，单位为毫秒；digitalWrite（）是向LED变量写入相关的值，使得引脚13 LED的电平发生变化，即HIGH或者LOW，这样LED就会根据延迟的时间交替亮与灭。

完成程序编辑之后，在工具栏中找到存盘按钮，将程序进行存盘；然后，在工具栏找到上传按钮，单机该按钮将编辑后的程序上传到Arduino开发板中，使得开发板按照修改后的程序运行；同时，还可以单击工具栏的串口监视器，观看串口数据的传输情况，它是非常直观高效的调试工具。

编辑及窗口中的程序如下：

::: {.zhangyue-c}
![CmQUOV7Vz8OESfzJAAAAADjoXw8647730330.jpg](https://i.imgur.com/OcI4eZs.jpeg){.zhangyue-img}
:::

当然，目前还有其他支持Arduino的开发环境，如SonxunStudio，它是由松迅科技开发的集成开发环境，目前只支持Windows系统的Arduino系统开发，包括Windows XP以及Windows 7，使用方法与Arduino IDE大同小异，由于篇幅有限，这里不再一一赘述。
:::

[]{#chapter-9.xhtml}

::: {.calibre1}
## 1.4　Arduino编程语言 {.tpl-185-title}

::: {.tpl-185-box-cuxian}
:::

::: {.tpl-185-box-middle}
:::

Arduino编程语言是建立在C/C++语言基础上的，即以C/C++为语言基础，把AVR单片机（微控制器）相关的一些寄存器参数设置等进行函数化，以利于开发者更加快速地使用，其主要使用的函数包括：数字I/O引脚操作函数、模拟I/O引脚操作函数、高级I/O引脚操作函数、时间函数、中断函数、通信函数和数学函数等。

### 1.4.1　Arduino编程基础 {#chapter-9.xhtml#AUTO_ID_6 .text-title}

关键字：if，if\...else，for，switch，case，while，do\...while，break，continue，return，goto。

语法符号：每条语句以分号"；"结尾，每段程序以花括号"{}"括起来。

数据类型：boolean，char，int，unsigned int，long，unsigned long，float，double，string，array，void。

常量：HIGH或者LOW，表示数字I/O引脚的电平，HIGH表示高电平（1），LOW表示低电平（0）。INPUT或者OUTPUT，表示数字I/O引脚的方向，INPUT表示输入（高阻态），OUTPUT表示输出（AVR能提供5V电压40mA电流）。TRUE或者FALSE，TRUE表示真（1），FALSE表示假（0）。

程序结构：主要包括两部分，void setup（）和void loop（）。其中，void setup（）是声明变量及引脚名称（如：int val；int ledPin＝13；），在程序开始时使用，初始化变量和引脚模式，调用库函数如pinMode（ledPin，OUTPUT）。而void loop（）用在setup（）函数之后，不断地循环执行，是Arduino的主体。

### 1.4.2　数字I/O引脚的操作函数 {#chapter-9.xhtml#AUTO_ID_7 .text-title}

#### 1．pinMode（pin，mode） {.text-title1}

pinMode函数用于配置引脚以及设置输出或输入模式，是一个无返回值函数。该函数有两个参数，pin和mode。pin参数表示要配置的引脚，mode参数表示设置该引脚的模式为INPUT（输入）或OUTPUT（输出）。

INPUT参数用于读取信号，OUTPUT用于输出控制信号。Pin的范围是数字引脚0\~13，也可以把模拟引脚（A0\~A5）作为数字引脚使用，此时引脚14对应模拟引脚0，引脚19对应模拟引脚5。该函数一般会放在setup（）里，先设置再使用。

#### 2．digitalWrite（pin，value） {.text-title1}

该函数的作用是设置引脚的输出电压为高电平或低电平，也是一个无返回值的函数。

pin参数表示所要设置的引脚，value参数表示输出的电压HIGH（高电平）或LOW（低电平）。

::: {.kx}
**注意：** 使用前必须先用pinMode设置。
:::

#### 3．digitalRead（pin） {.text-title1}

该函数在引脚设置为输入的情况下，可以获取引脚的电压情况HIGH（高电平）或者LOW（低电平）。

数字I/O引脚操作函数使用例程如下：

::: {.zhangyue-c}
![CmQUOV7Vz8SEJyfFAAAAAHX-ZUQ102784613.jpg](https://i.imgur.com/FxteapC.jpeg){.zhangyue-img}
:::

### 1.4.3　模拟I/O引脚的操作函数 {#chapter-9.xhtml#AUTO_ID_8 .text-title}

#### 1．analogReference（type） {.text-title1}

该函数用于配置模拟引脚的参考电压。它有三种类型，DEFAULT是默认值，参考电压是5V；INTERNAL是低电压模式，使用片内基准电压源2.56V；EXTERNAL是扩展模式，通过AREF引脚获取参考电压。

::: {.kx}
**注意：** 若不使用本函数，默认参考电压是5V。若使用AREF作为参考电压，需接一个5kΩ的上拉电阻。
:::

#### 2．analogRead（pin） {.text-title1}

用于读取引脚的模拟量电压值，每读取一次需要花100μs的时间。参数pin表示所要获取模拟量电压值的引脚，返回为int型。它的精度为10位，返回值为0\~1023。

::: {.kx}
**注意：** 函数参数pin的取值范围是0\~5，对应开发板上的模拟引脚A0\~A5。
:::

#### 3．analogWrite（pin，value） {.text-title1}

该函数是通过PWM（Pulse-Width Modulation，脉冲宽度调制）的方式在引脚上输出一个模拟量，图1-23所示为PWM输出的一般形式，也就是在一个脉冲的周期内高电平所占的比例。它主要用于LED亮度控制，直流电机转速控制等方面。

Arduino中的PWM的频率大约为490Hz，Arduino UNO开发板支持以下数字引脚（不是模拟输入引脚）作为PWM模拟输出：3、5、6、9、10、11。开发板上带PWM输出的都有"\~"号。

::: {.kx}
**注意：** PWM输出位数为8位，即0\~255。
:::

::: {.zhangyue-c}
![CmQUOF7Vz8SEWmIRAAAAAMnZxDE194427645.jpg](https://i.imgur.com/WhlmxLx.jpeg){.zhangyue-img}

图1-23　占空比的定义
:::

模拟I/O引脚的操作函数使用例程如下：

::: {.zhangyue-c}
![CmQUOF7Vz8SEdDPnAAAAAHcXjDE304872971.jpg](https://i.imgur.com/ub2nfuD.jpeg){.zhangyue-img}
:::

### 1.4.4　高级I/O引脚的操作函数 {#chapter-9.xhtml#AUTO_ID_9 .text-title}

Pulseln（pin，state，timeout）函数用于读取引脚脉冲的时间长度，脉冲可以是HIGH或者LOW。如果是HIGH，该函数将先等引脚变为高电平，然后开始计时，一直等到变为低电平停止计时。返回脉冲持续的时间，单位为ms，如果超时没有读到时间，则返回0。

例程说明：做一个按钮脉冲计时器，测量按钮的持续时间，看谁的反应最快，即谁按按钮时间最短，按钮接在引脚3，程序如下：

::: {.zhangyue-c}
![CmQUOF7Vz8WEeWwaAAAAAH5Nbc0543448816.jpg](https://i.imgur.com/JQ0ZGpq.jpeg){.zhangyue-img}
:::

### 1.4.5　时间函数 {#chapter-9.xhtml#AUTO_ID_10 .text-title}

#### 1．delay（） {.text-title1}

该函数是延时函数，参数是延时的时长，单位是ms。延时函数的典型例程是跑马灯的应用，使用Arduino开发板控制四个LED依次点亮，程序如下：

::: {.zhangyue-c}
![CmQUOF7Vz8WEcyPaAAAAAGSMD1M798054068.jpg](https://i.imgur.com/pobQ8W1.jpeg){.zhangyue-img}
:::

#### 2．delayMicroseconds（） {.text-title1}

delayMicroseconds（）也是延时函数，单位是μs，1ms＝1000μs，该函数可以产生更短的延时。

#### 3．millis（） {.text-title1}

millis（）为计时函数，应用该函数可以获取单片机通电到现在运行的时间长度，单位是ms。系统最长的记录时间为9h22min，超出则从0开始。返回值是unsigned long型。

该函数适合作为定时器使用，不影响单片机的其他工作（而使用delay函数期间无法进行其他工作）。计时时间函数使用示例，延时10s后自动点亮LED，程序如下：

::: {.zhangyue-c}
![CmQUOF7Vz8WERhtbAAAAAEoB3ZA236197281.jpg](https://i.imgur.com/a2Bn3Xv.jpeg){.zhangyue-img}
:::

#### 4．micros（） {.text-title1}

micros（）也是计时函数，该函数返回开机到现在运行的时间长度，单位为μs。返回值是unsigned long型，70min溢出。程序如下：

::: {.zhangyue-c}
![CmQUOV7Vz8WEagw0AAAAAG6cMsY093388188.jpg](https://i.imgur.com/dSvfK1p.jpeg){.zhangyue-img}
:::

### 1.4.6　中断函数 {#chapter-9.xhtml#AUTO_ID_11 .text-title}

什么是中断？在日常生活中，中断非常常见，如图1-24所示。

你在看书，电话铃响，于是在书上做个记号，去接电话，与对方通话；门铃响了，有人敲门，你让打电话的对方稍等一下，去开门，并在门旁与来访者交谈，谈话结束，关好门；回到电话机旁，继续通话，接完电话后再回来从做记号的地方接着看书。

同样的道理，在单片机中也存在中断概念，如图1-25所示。在计算机或者单片机中中断是由于某个随机事件的发生，计算机暂停主程序的运行，转去执行另一程序（随机事件），处理完毕后又自动返回主程序继续运行的过程。也就是说高优先级的任务中断了低优先级的任务。在计算机中中断包括如下几部分：

::: {.zhangyue-c}
![CmQUOF7Vz8aEZ2edAAAAACEVbFE256960403.jpg](https://i.imgur.com/okz6omH.jpeg){.zhangyue-img2}

图1-24　中断的概念
:::

::: {.zhangyue-c}
![CmQUOF7Vz8aEPqSdAAAAAEtb_so112994678.jpg](https://i.imgur.com/lEEIOaW.jpeg){.zhangyue-img1}

图1-25　单片机中的中断
:::

中断源------引起中断的原因，或能发生中断申请的来源。

主程序------计算机现行运行的程序。

中断服务子程序------处理突发事件的程序。

#### 1．attachInterrupt（interrput，function，mode） {.text-title1}

该函数用于设置中断，有3个参数，分别表示中断源、中断处理函数和触发模式。中断源可选0或者1，对应数字引脚2或者3号；中断处理函数是一段子程序，当中断发生时执行该子程序部分；触发模式有4种类型，LOW（低电平触发）、CHANGE（变化时触发）、RISING（低电平变为高电平触发）、FALLING（高电平变为低电平触发）。例程功能如下：

引脚2接按钮开关，引脚4接LED1（红色），引脚5接LED2（绿色）。在例程中，LED3为板载的LED，每秒闪烁一次。使用中断0控制LED1，中断1控制LED2。按下按钮，马上响应中断，由于中断响应速度快，LED3不受影响，继续闪烁。使用不同的4个参数，例程1试验LOW和CHANGE参数，例程2试验RISING和FALLING参数。

例程1：

::: {.zhangyue-c}
![CmQUOF7Vz8aELRYJAAAAAAWxclE406784706.jpg](https://i.imgur.com/m0DWdeO.jpeg){.zhangyue-img1}
:::

例程2：

::: {.zhangyue-c}
![CmQUOF7Vz8aET5_7AAAAAOdwW_A135916868.jpg](https://i.imgur.com/D4kWqd4.jpeg){.zhangyue-img}
:::

#### 2．detachInterrupt（interrput） {.text-title1}

该函数用于取消中断，参数interrupt表示所要取消的中断源。

### 1.4.7　串口通信函数 {#chapter-9.xhtml#AUTO_ID_12 .text-title}

串行通信接口（Serial Interface）使数据一位一位地顺序传送，其特点是通信线路简单，只要一对传输线就可以实现双向通信的接口，如图1-26所示。

::: {.zhangyue-c}
![CmQUOV7Vz8eEQSGHAAAAANcZDd0325026790.jpg](https://i.imgur.com/nV1py4r.jpeg){.zhangyue-img2}

图1-26　串行通信接口
:::

串行通信接口出现在1980年前后，数据传输率是115\~230kb/s。串行通信接口出现的初期是为了实现计算机外设的通信，初期串口一般用来连接鼠标和外置Modem/老式摄像头和写字板等设备。

由于串行通信接口（COM）不支持热插拔及传输速率较低，因此目前部分新主板和大部分便携计算机已开始取消该接口，串口多用于工控和测量设备以及部分通信设备中。包括各种传感器采集装置、GPS信号采集装置、多个单片机通信系统、门禁刷卡系统的数据传输、机械手控制和操纵面板控制直流电机等，特别是广泛应用于低速数据传输的工程应用，主要函数如下：

#### 1．Serial.begin（） {.text-title1}

该函数用于设置串口的波特率，即数据的传输速率，每秒钟传输的符号个数。一般的波特率有9600、19200、57600、115200等。

例如：Serial.begin（57600）；

#### 2．Serial.available（） {.text-title1}

该函数用来判断串口是否收到数据，函数的返回值为int型，不带参数。

#### 3．Serial.read（）； {.text-title1}

该函数不带参数，只将串口数据读入。返回值为串口数据，int型。

#### 4．Serial.print（） {.text-title1}

该函数向串口发数据。可以发送变量，也可以发送字符串。

例1：Serial.print（"today is good"）；

例2：Serial.print（x，DEC）；以10进制发送变量x

例3：Serial.print（x，HEX）；以16进制发送变量x

#### 5．Serial.println（） {.text-title1}

该函数与Serial.print（）类似，只是多了换行功能。

串口通信函数使用例程：

::: {.zhangyue-c}
![CmQUOV7Vz8eELfphAAAAAF8XlO0168841055.jpg](https://i.imgur.com/iNwMIYj.jpeg){.zhangyue-img}
:::

### 1.4.8　Arduino的库函数 {#chapter-9.xhtml#AUTO_ID_13 .text-title}

与C语言和C++一样，Arduino平台也有相关的库函数，提供给开发者使用，这些库函数的使用，与C语言的头文件使用类似，需要\#include语句，将函数库加入Arduino的IDE编辑环境中，如\#include"Arduino.h"语句。

在Arduino开发中主要库函数的类别如下：数学库主要包括数学计算；EEPROM库函数用于向EEPROM中读写数据；Ethernet库函数用于以太网的通信；LiquidCrystal库函数用于液晶屏幕的显示操作；Firmata库函数实现Arduino与PC串口之间的编程协议；SD库函数用于读写SD卡；Servo库函数用于舵机的控制；Stepper库函数用于步进电机控制；WiFi库函数用于WiFi的控制和使用等。诸如此类的库函数非常多，还包括一些Arduino爱好者自己开发的库函数。例如下列数学库中的函数：

::: {.zhangyue-c}
![CmQUOV7Vz8eETSkWAAAAAD8PWmY238015075.jpg](https://i.imgur.com/aJbKcC7.jpeg){.zhangyue-img}
:::

例如：

数学库函数random（small，big），返回值为long。

``` {.calibre6}
     long x;
     x=random(0,100);可以生成从0~100的整数
```
:::

[]{#chapter-10.xhtml}

::: {.calibre1}
## 1.5　Arduino硬件设计平台 {.tpl-185-title}

::: {.tpl-185-box-cuxian}
:::

::: {.tpl-185-box-middle}
:::

电子设计自动化（Electronic Design Automation，EDA），是20世纪90年代初，从计算机辅助设计（CAD）、计算机辅助制造（CAM）、计算机辅助测试（CAT）和计算机辅助工程（CAE）的概念上发展而来的。EDA设计工具的出现使得电路设计的效率性和可操作性都得到了大幅度的提升。本书针对Arduino平台的学习，主要介绍和使用Fritzing工具，配以详细的示例操作说明，当然，很多软件也支持Arduino的开发，在此不再一一罗列。

Fritzing是一款支持多国语言的电路设计软件，可以同时提供面包板、原理图、PCB三种视图设计，设计者可以采用任意一种视图进行电路设计，软件都会自动同步生成其他两种视图。此外，Fritzing软件还能用来生成制板厂生产所需用的greber文件、PDF、图片和CAD格式文件，这些都极大地普及和推广了Fritzing的使用。下面对软件的使用进行介绍，有关Fritzing的安装和启动请参考相关的书籍或者网络。

### 1.5.1　Fritzing软件简介 {#chapter-10.xhtml#AUTO_ID_14 .text-title}

#### 1．主界面 {.text-title1}

总体来说，Fritzing软件的主界面由两部分构成，如图1-27所示。一部分是图中左边框内项目视图部分，这一部分将显示设计者开发的电路，包含面包板图、原理图和PCB三种视图；另外一部分是图中右边框内工具栏部分，包含软件的元件库、指示栏、导航栏、撤销历史栏和层次栏等子工具栏，是设计者主要操作和使用的地方。

::: {.zhangyue-c}
![CmQUOV7Vz8iEG-JsAAAAALj_3Qs824212553.jpg](https://i.imgur.com/h7Ww68d.jpeg){.zhangyue-img}

图1-27　Fritzing主界面
:::

#### 2．项目视图 {.text-title1}

设计者可以在项目视图中自由选择面包板、原理图或PCB视图进行开发，也可以利用视图切换器快捷轻松地在这三种视图中进行切换，如图1-27中右侧中部框图部分所示。此外还可以利用工具栏中的导航栏进行快速切换，这将在工具栏部分进行详细说明。下面分别给出这三种视图的操作界面，按从上到下的顺序依次是面包板视图、原理图视图和PCB视图，分别如图1-28\~图1-30所示。

::: {.zhangyue-c}
![CmQUOV7Vz8iEHUMrAAAAAIkGR_A501136637.jpg](https://i.imgur.com/WJl75oK.jpeg){.zhangyue-img}

图1-28　Fritzing面包板视图
:::

::: {.zhangyue-c}
![CmQUOF7Vz8iEKIgbAAAAAF1TY4w340708497.jpg](https://i.imgur.com/WL0w0DW.jpeg){.zhangyue-img1}

图1-29　Fritzing原理图视图
:::

::: {.zhangyue-c}
![CmQUOF7Vz8iEHM0vAAAAAJJoTko062773506.jpg](https://i.imgur.com/CtrxrSY.jpeg){.zhangyue-img1}

图1-30　Fritzing PCB视图
:::

细心的读者可能会发现，在这三种视图中操作可选项和工具栏中对应的分栏内容都只有细微的变化。由于Fritzing的三个视图是默认同步生成的，在本书中，首先以面包板为模板对软件的共性部分进行介绍，然后再对原理图、PCB图与面包板视图之间的差异部分进行补充。之所以选择面包板视图作为模板，是为了方便Arduino硬件设计者从电路原理图过渡到实际电路，尽量减少可能出现的连线和引脚连接错误。

#### 3．工具栏 {.text-title1}

用户可以根据自己的兴趣爱好选择工具栏显示的各种窗口，单击窗口下拉菜单，然后对希望出现在右边工具栏的分栏进行勾选，用户也可以将这些分栏设成单独的浮窗。为了方便初学者迅速掌握Fritzing软件，本书将详细介绍各个工具栏的作用。

1）元件库

元件库中包含了许多的电子元件，这些电子元件是按容器分类盛放的。Fritzing一共包含8个元件库，分别是Fritzing的核心库、设计者自定义的库和其他6个库。这8个库是设计者进行电路设计前所必须掌握的，下面进行详细的介绍。

（1）MINE：MINE元件库是设计者自定义元件放置的容器。如图1-31所示，设计者可以在这部分添加一些自己的常用元件或软件缺少的元件。

（2）Arduino：Arduino元件库主要放置与Arduino相关的开发板，这也是Arduino设计者需要特别关心的元件库，这个元件库中包含9块开发板，分别是Arduino、Arduino UNO R3、Arduino MEGA、Arduino MINI、Arduino NANO、Arduino Pro Mini 3.3V、Arduino Fio、Arduino LilyPad、Arduino Ethernet Shield，如图1-32所示。

（3）Parallax：Parallax元件库中主要包含了Parallax的微控制器Propeller 40和8款Basic Stamp微控制器开发板，如图1-33所示。该系列微控制器是由美国Parallax公司开发的，这些微控制器与其他微控制器的区别是它们在自己的ROM内存中内建了一套小型、特有的BASIC编程语言直译器PBASIC，为BASIC语言的设计者降低了嵌入式设计的门槛。

::: {.zhangyue-c}
![CmQUOF7Vz8mEV7KuAAAAAOWanhM004607039.jpg](https://i.imgur.com/fvhBovk.jpeg){.zhangyue-img}

图1-31　MINE元件库
:::

::: {.zhangyue-c}
![CmQUOF7Vz8mERU2yAAAAAI_XCos839667711.jpg](https://i.imgur.com/genwXFi.jpeg){.zhangyue-img}

图1-32　Arduino元件库
:::

::: {.zhangyue-c}
![CmQUOV7Vz8mEQgpYAAAAAJssYXU077894867.jpg](https://i.imgur.com/AMPfDpj.jpeg){.zhangyue-img}

图1-33　Parallax元件库
:::

（4）Picaxe：Picaxe元件库中主要包括Picaxe系列的低价位单片机、电可擦只读存储器、实时时钟控制器、串行接口、舵机驱动等元件，如图1-34所示。Picaxe系列芯片也是基于BASIC语言，设计者可以迅速掌握。

::: {.zhangyue-c}
![CmQUOF7Vz8mEcT8EAAAAAHpYv-A891075385.jpg](https://i.imgur.com/jhe4diV.jpeg){.zhangyue-img}

图1-34　Picaxe元件库
:::

（5）SparkFun：SparkFun也是Arduino设计者重点关注的一个容器（元件库），其中包含了许多Arduino的扩展板。此外，这个元件库中还包含了一些传感器和LilyPad系列的相关元件，如图1-35所示。

::: {.zhangyue-c}
![CmQUOV7Vz8mEZ-oAAAAAAMkexEw952662175.jpg](https://i.imgur.com/jwe2YTq.jpeg){.zhangyue-img}

图1-35　SparkFun元件库
:::

（6）Snootlab：Snootlab包含了4块开发板，分别是Arduino的LCD扩展板、SD卡扩展板、接线柱扩展板和舵机的扩展驱动板，如图1-36所示。

::: {.zhangyue-c}
![CmQUOV7Vz8mEK3gKAAAAADCCIoc583245484.jpg](https://i.imgur.com/6ejWF74.jpeg){.zhangyue-img}

图1-36　Snootlab元件库
:::

（7）Contributed Parts：Contributed Parts元件库包含带开关电位表盘、开关、LED、反相施密特触发器和放大器等，如图1-37所示。

::: {.zhangyue-c}
![CmQUOF7Vz8mEf_1cAAAAABGJGiY774624983.jpg](https://i.imgur.com/k68uVSk.jpeg){.zhangyue-img}

图1-37　Contributed Parts元件库
:::

（8）Core：Core元件库里包含许多平常会用到的基本元件，如LED、电阻、电容、电感、晶体管等，还有常见的输入元件、输出元件、集成电路元件、电源、连接、微控制器等。此外，Core元件库中还包含面包板视图、原理图视图、PCB视图的格式以及工具（主要包含笔记和尺子）的选择，如图1-38所示。

::: {.zhangyue-c}
![CmQUOV7Vz8qESbcyAAAAANQkdaI340262794.jpg](https://i.imgur.com/IT2I0Gl.jpeg){.zhangyue-img}

图1-38　Core元件库
:::

2）指示栏

指示栏会给出元件库或项目视图中鼠标所选定元件的详细信息，包括该元件的名字、标签，以及在三种视图下的形态、类型、属性和连接数等。设计者可以根据这些信息加深对元件的理解，或者检验所选定的元件是否是自己所需要的，甚至能在项目视图中选定相关元件后直接在指示栏中修改元件的某些基本属性，如图1-39所示。

::: {.zhangyue-c}
![CmQUOV7Vz8qEc_2UAAAAAB18NVw856307803.jpg](https://i.imgur.com/6WiV6ip.jpeg){.zhangyue-img}

图1-39　指示栏
:::

3）撤销历史栏

撤销历史栏中详细记录了设计步骤，并将这些步骤按照时间的先后顺序依次进行排列，先显示最近发生的步骤，如图1-40所示。设计者可以利用这些记录步骤回到之前的任一设计状态，这为开发工作带来了极大的便利。

::: {.zhangyue-c}
![CmQUOF7Vz8uETbDqAAAAABBKXu8823566678.jpg](https://i.imgur.com/ct3Pdbv.jpeg){.zhangyue-img}

图1-40　撤销历史栏
:::

4）导航栏

导航栏里提供了对面包板视图、原理图视图和PCB视图的预览，设计者可以在导航栏中任意选定三种视图中的某一视图进行查看，如图1-41所示。

::: {.zhangyue-c}
![CmQUOV7Vz8uEQ6NHAAAAAJszIKE904609493.jpg](https://i.imgur.com/TQMD4f5.jpeg){.zhangyue-img}

图1-41　导航栏
:::

5）层

不同的视图有不同的层结构，详细了解层结构有助于读者进一步理解这三种视图和提升设计者对它们的操作能力。下面将依次给出面包板视图、原理图视图、PCB视图的层结构。

（1）面包板视图的层结构，如图1-42所示，共包含6层，设计者可以通过勾选层结构前边的矩形框在项目视图中显示相应的层。

（2）原理图的层结构，如图1-43所示，共包含7层。

PCB视图是层结构最多的视图，如图1-44所示，共包含15层结构。

::: {.zhangyue-c}
![CmQUOF7Vz8uECyJiAAAAAIQyXs8551516422.jpg](https://i.imgur.com/uAAqnZB.jpeg){.zhangyue-img}

图1-42　面包板层结构
:::

::: {.zhangyue-c}
![CmQUOV7Vz8uEGtnHAAAAAAabam8925597736.jpg](https://i.imgur.com/s2thZQd.jpeg){.zhangyue-img}

图1-43　原理图层结构
:::

::: {.zhangyue-c}
![CmQUOV7Vz8uEP3I3AAAAAA4H9Vs609436265.jpg](https://i.imgur.com/0jF2uUc.jpeg){.zhangyue-img}

图1-44　PCB图层结构
:::

### 1.5.2　Fritzing使用方法 {#chapter-10.xhtml#AUTO_ID_15 .text-title}

#### 1．查看元件库已有元件 {.text-title1}

设计者在查看元件库中的元件时，既可以选择按图标形式查看，也可以选择按列表形式查看，界面分别如图1-45和图1-46所示。

设计者可以直接在对应的元件库中寻找自己所需要的元件，但由于Fritzing所带的库文件和元件数目都相对比较多，所以在有些情况下，设计者很难确定元件所在的具体位置，这时设计者就可以利用元件库中自带的搜索功能，从库中找出所需要的元件，这个方法能极大地提升工作效率。在此，举一个简单的例子进行说明。例如，设计者要寻找Arduino UNO开发板，那么，在搜索栏输入"Arduino UNO"，按下Enter键，就会自动显示相应的搜索结果，如图1-47所示。

::: {.zhangyue-c}
![CmQUOV7Vz8uEZ7uoAAAAANLfHKQ730633515.jpg](https://i.imgur.com/LjIPeMM.jpeg){.zhangyue-img1}

图1-45　元件图标形式
:::

::: {.zhangyue-c}
![CmQUOF7Vz8uEJ7fKAAAAAOAmfLw476920522.jpg](https://i.imgur.com/KQbaoVu.jpeg){.zhangyue-img}

图1-46　元件列表形式
:::

::: {.zhangyue-c}
![CmQUOV7Vz8uEPKFoAAAAACUWLMY225496160.jpg](https://i.imgur.com/84QOvMH.jpeg){.zhangyue-img}

图1-47　查找元件
:::

#### 2．添加新元件到元件库 {.text-title1}

1）从头开始添加新元件

设计者可以通过选择"元件"→"新建"命令进入添加新元件的界面，如图1-48所示，也可以通过单击元件库中的New Part选项进入该界面，如图1-49所示。无论采用哪一种方式，最终进入的新元件添加界面都如图1-50所示。

::: {.zhangyue-c}
![CmQUOV7Vz8yEYnBhAAAAAGOwZvU971267624.jpg](https://i.imgur.com/BYzlYM6.jpeg){.zhangyue-img}

图1-48　添加新元件方式一
:::

::: {.zhangyue-c}
![CmQUOF7Vz8yEF96JAAAAABfsZ-I557233603.jpg](https://i.imgur.com/H5ai9Kj.jpeg){.zhangyue-img}

图1-49　添加新元件方式二
:::

设计者在新元件的添加界面填写相关信息，如新元件的名字、属性、连接等，并导入相应的视图图片，尤其要注意添加连接，然后单击"保存"按钮，便能创建新的元件。但是在开发过程中，建议设计者尽量在已有的库元件基础上进行修改来创建用户需要的新元件，这可以减少工作量，提高开发效率。

::: {.zhangyue-c}
![CmQUOV7Vz8yEDYr1AAAAAE8-iSY114258432.jpg](https://i.imgur.com/nfsaDUF.jpeg){.zhangyue-img}

图1-50　新元件添加界面
:::

2）从已有元件添加新元件

关于如何基于已有的元件添加新元件，下面举两个简单的例子进行说明。

（1）针对ICs、电阻、引脚等标准元件。例如，现在设计者需要一个2.2kΩ的电阻，可是在Core元件库中只有220Ω的标准电阻。这时，创建新电阻最简单的方法就是先将220Ω的通用电阻添加到面包板上，然后选定该电阻，直接在右边的指示栏中将电阻值修改为2.2kΩ，如图1-51所示。

::: {.zhangyue-c}
![CmQUOV7Vz8yEHEcCAAAAANcRz0U190700219.jpg](https://i.imgur.com/afZiHVT.jpeg){.zhangyue-img}

图1-51　修改元件属性
:::

除此之外，选定元件后，也可以选择"元件"→"编辑"命令完成元件参数的修改，如图1-52所示。

::: {.zhangyue-c}
![CmQUOV7Vz82EBFLhAAAAAKOWcHs211848444.jpg](https://i.imgur.com/TW3aht7.jpeg){.zhangyue-img}

图1-52　修改元件参数
:::

然后进入元件编辑界面，如图1-53所示。

::: {.zhangyue-c}
![CmQUOV7Vz82EYJ6RAAAAADMl2I8269297649.jpg](https://i.imgur.com/EyVN72b.jpeg){.zhangyue-img}

图1-53　元件编辑界面
:::

将resistance相应的数值改为2200Ω，单击"另存为新元件"按钮，即可成功创建一个电阻值为2200Ω的电阻，如图1-54所示。

此外，选定元件后，单击鼠标右键，在弹出的快捷菜单中选择"编辑"命令，也可进入元件编辑界面，如图1-55所示。

::: {.zhangyue-c}
![CmQUOF7Vz86EZGKHAAAAAPR9J0w855359457.jpg](https://i.imgur.com/KZX3uPk.jpeg){.zhangyue-img}

图1-54　创建新元件
:::

基于其他标准添加新元件的操作与此类似，如改变引脚数、修改接口数目等，在此不再赘述。

（2）相对复杂元件的添加。

完成了基本元件的介绍后，下面介绍一个相对复杂的例子，在这个例子中要添加一个自定义元件------SparkFun T5403气压仪，如图1-56所示。

::: {.zhangyue-c}
![CmQUOV7Vz86EDxENAAAAAPiZ45E603215744.jpg](https://i.imgur.com/tUdbHsj.jpeg){.zhangyue-img}

图1-55　选择编辑命令进入元件编辑界面
:::

::: {.zhangyue-c}
![CmQUOV7Vz86EL_joAAAAAKx8JWA837281131.jpg](https://i.imgur.com/eTdhN1R.jpeg){.zhangyue-img}

图1-56　SparkFun T5403 PCB图
:::

在元件库里寻找该元件，搜索框中输入T5403，如图1-57所示。

若未发现该元件，则可以在该元件所在的库中寻找是否有类似的元件（根据名字得知，SparkFun T5403是SparkFun系列的元件），如图1-58所示。

若发现还是没有与自定义元件相类似的，则可以选择从标准的集成电路ICs开始。选择Core元件库，找到ICs栏，将IC元件添加到面包板中，如图1-59和图1-60所示。

::: {.zhangyue-c}
![CmQUOV7Vz86ET1T2AAAAAJTEPc4562765626.jpg](https://i.imgur.com/8LD03cl.jpeg){.zhangyue-img}

图1-57　SparkFun T5403搜寻图
:::

::: {.zhangyue-c}
![CmQUOF7Vz86EBE9WAAAAAHNBW-o220700902.jpg](https://i.imgur.com/uG9plzD.jpeg){.zhangyue-img}

图1-58　SparkFun系列元件
:::

::: {.zhangyue-c}
![CmQUOF7Vz86EU9v8AAAAAILcvV8826954486.jpg](https://i.imgur.com/9HNIaOj.jpeg){.zhangyue-img}

图1-59　Core ICs
:::

::: {.zhangyue-c}
![CmQUOV7Vz86ERt1NAAAAAPEh_5Y895747669.jpg](https://i.imgur.com/ydthKih.jpeg){.zhangyue-img}

图1-60　添加ICs到面包板
:::

选定该IC元件，在指示栏中查看该元件的属性。将元件的名字命名为自定义元件的名字T5403 Barometer Breakout，并将引脚数修改成所需要的数量，在本例中，需要的引脚数为8，如图1-61所示。

::: {.zhangyue-c}
![CmQUOV7Vz8-ESF5YAAAAAKUx8m8071587275.jpg](https://i.imgur.com/AQVzy9D.jpeg){.zhangyue-img}

图1-61　参数修改
:::

修改之后，面包板上的元件如图1-62所示。

::: {.zhangyue-c}
![CmQUOV7Vz8-EInbDAAAAAMwYXho803123421.jpg](https://i.imgur.com/kSijf3X.jpeg){.zhangyue-img}

图1-62　T5403 Barometer Breakout
:::

右击面包板视图中的IC元件，在弹出的快捷菜单中选择"编辑"命令，会出现如图1-63所示的编辑窗口。设计者需要根据自定义元件的特性修改图中的6个部分，分别是元件图标、面包板视图、原理图视图、PCB视图、描述和接插件。这部分的修改大都是细节性的问题，在此，不再加以赘述，读者可参考下面的链接进行深入学习：https：//learn.sparkfun.com/tutorials/make-your-own-fritzing-parts。

#### 3．添加新元件库 {.text-title1}

设计者不仅可以创建自定义的新元件，也可以根据需求创建自定义的元件库，并对元件库进行管理。在设计电路结构前，可以将所需的电路元件列一张清单，并将所需要的元件都添加到自定义库中，为后续的电路设计提高效率。添加新元件库时，只需选择如图1-46中所示的元件栏中New Bin命令，便会出现如图1-64所示的界面。

如图1-64所示，给自定义的元件库取名为Arduino Project，单击OK按钮，新的元件库便成功创建，如图1-65所示。

::: {.zhangyue-c}
![CmQUOV7Vz8-EQ3paAAAAAGSemr8378766399.jpg](https://i.imgur.com/AfGKnk7.jpeg){.zhangyue-img}

图1-63　T5403 Barometer Breakout编辑窗口
:::

::: {.zhangyue-c}
![CmQUOF7Vz8-ETOtkAAAAAEo5G1E699734940.jpg](https://i.imgur.com/i6iCn97.jpeg){.zhangyue-img}

图1-64　添加新元件库
:::

::: {.zhangyue-c}
![CmQUOF7Vz8-ENLCuAAAAAKyGRcg875395384.jpg](https://i.imgur.com/EJVQmah.jpeg){.zhangyue-img}

图1-65　新元件库
:::

#### 4．添加或删除元件 {.text-title1}

下面主要介绍如何将元件库中的元件添加到面包板视图中，当需要添加某个元件时，可以先在元件库相应的子库中寻找所需要的元件，然后在目标元件的图标上单击选定元件，拖动至面包板上的目的位置，松开鼠标左键即可将元件插入面包板。需要特别注意的是，在放置元件时，一定要确保元件的引脚已经成功插入面包板，如果插入成功，则元件引脚所在的连线会显示绿色，如果插不入不成功，则元件的引脚显示红色，如图1-66所示（其中左边表示添加成功，右边则表示添加失败）。

如果在放置元件的过程中有误操作，则直接单击选定目标元件，然后再单击Delete键即可以将元件从视图上删除。

::: {.zhangyue-c}
![CmQUOF7Vz8-EFal4AAAAALn_8OE779235150.jpg](https://i.imgur.com/1kverZJ.jpeg){.zhangyue-img}

图1-66　引脚状态图
:::

#### 5．添加元件间连线 {.text-title1}

（1）添加元件间的连线是用Fritzing绘制电路图必不可少的过程，接下来将对连线的方法给出详细的介绍。连线时将想要连接的引脚拖动到要连接的目的引脚后松开即可。需要注意的是，只有当连接线段的两端都显示绿色时，才代表导线连接成功，若连线的两端显示红色（图中右边），则表示连接出现问题。如图1-67所示。

::: {.zhangyue-c}
![CmQUOF7Vz8-EO--uAAAAAHkzkMw708207045.jpg](https://i.imgur.com/WjFoEit.jpeg){.zhangyue-img}

图1-67　连线状态图
:::

（2）为了使电路更清晰，还能根据需求在导线上设置拐点，使导线根据设计者的喜好改变连线角度和方向。具体方法如下：光标处即为拐点处，设计者可以自由拖动光标移动拐点的位置。也可以先选定导线，然后将鼠标光标放在想设置的拐点处，右击，在弹出的快捷菜单中选择"添加拐点"命令即可，如图1-68所示。

::: {.zhangyue-c}
![CmQUOF7Vz8-ECQONAAAAAKrenpo667790867.jpg](https://i.imgur.com/a9tv70K.jpeg){.zhangyue-img}

图1-68　拐点添加图
:::

（3）在连线的过程中，更改导线的颜色，不同的颜色将帮助设计者更好地掌握绘制的电路。具体的修改方法为选定要更改颜色的导线，然后右击，从弹出的快捷菜单中选择"更改颜色"命令，如图1-69所示。

::: {.zhangyue-c}
![CmQUOV7Vz8-EaBe1AAAAAG-zTag170594342.jpg](https://i.imgur.com/LAspr5k.jpeg){.zhangyue-img}

图1-69　导线颜色修改图
:::

### 1.5.3　Arduino电路设计 {#chapter-10.xhtml#AUTO_ID_16 .text-title}

本节将通过一个具体的例子系统地介绍如何利用Fritzing软件来绘制一个完整的Arduino电路图。利用Arduino主板控制LED的亮灭，整体效果如图1-70所示。

::: {.zhangyue-c}
![CmQUOF7Vz8-EQ0hfAAAAAFw6rsg307337917.jpg](https://i.imgur.com/GgMV9h6.jpeg){.zhangyue-img}

图1-70　Arduino Blink示例整体效果图
:::

下面介绍Arduino Blink例程的电路图详细设计步骤。首先打开软件并新建一个新的项目，具体操作为单击软件的运行图标，在软件的主界面选择"文件"→"新建"选项命令，如图1-71所示。

::: {.zhangyue-c}
![CmQUOF7Vz8-ELvJvAAAAADytYgE542171838.jpg](https://i.imgur.com/M3BdtnC.jpeg){.zhangyue-img}

图1-71　新建项目
:::

完成项目新建后，先进行保存，选择"文件"→"另存为"命令，出现如图1-72所示的界面，在该对话框中输入保存的名字和路径，然后单击"保存"按钮，即可完成对新建项目的保存。

::: {.zhangyue-c}
![CmQUOV7Vz8-ECOzUAAAAAKrHPvQ808885525.jpg](https://i.imgur.com/pNKJeYK.jpeg){.zhangyue-img}

图1-72　保存项目
:::

一般来说，在绘制电路前，设计者应该先对开发环境进行设置。这里的开发环境主要指设计者选择使用的面包板型号、类型、原理图和PCB视图的各种类型。本书以面包板视图为重点，并在core元件库中选好开发所用的面包板类型和尺寸，如图1-73所示。

::: {.zhangyue-c}
![CmQUOF7Vz8-EYS5sAAAAAMXIhSE593372403.jpg](https://i.imgur.com/ZSRegPx.jpeg){.zhangyue-img}

图1-73　面包板类型和尺寸
:::

由于本示例中所需的元件数较少，此处省去建立自定义元件库的步骤，直接将所有的元件都放置在面包板上，如图1-74所示。在本例中，需要1块Arduino开发板、1个LED和1个220Ω电阻。

::: {.zhangyue-c}
![CmQUOF7Vz8-EdN10AAAAAOMCN-4766618377.jpg](https://i.imgur.com/lr1CQxA.jpeg){.zhangyue-img}

图1-74　元件的放置
:::

连线后即可得到最终的效果图，如图1-75所示。

::: {.zhangyue-c}
![CmQUOV7Vz8-ERPgmAAAAAEhFBM8578720610.jpg](https://i.imgur.com/JGPL4Gj.jpeg){.zhangyue-img}

图1-75　连线图
:::

::: {.zhangyue-c}
![CmQUOV7Vz8-ENg3vAAAAAK0RTIw961588406.jpg](https://i.imgur.com/6Ty3Mbx.jpeg){.zhangyue-img1}

图1-76　原理图效果
:::

在编辑视图中切换到原理图，如图1-76所示。

此时布线还没有完成，开发者可以单击编辑视图下方的自动布线，但要注意自动布线后，检查所有的元件是否都完成了布线，对没有完成的，开发者要进行手动布线，即手动连接引脚间的连线，如图1-77所示。

同理，可以在编辑视图中切换到PCB视图，观察PCB视图下的电路，此时也要注意编辑视图窗口下方是否提示布线未完成，如果是，开发者可以单击下边的"自动布线"按钮进行处理，也可以手动进行布线，这里，将直接给出最终的效果图，如图1-78所示。

完成所有操作后，就可以修改电路中各元件的属性，在本例中不需要修改任何值，在此略过这部分。完成所有步骤后，根据需求导出所需要的文档或文件。下面将以导出一个PDF格式的面包板视图为例对该流程进行说明。首先确保将编辑视图切换到面包板视图，然后选择"文件"→"导出"→"作为图像"→PDF命令，如图1-79所示。输出的最终PDF格式文档如图1-80所示。

::: {.zhangyue-c}
![CmQUOF7Vz8-EMSZ4AAAAAH-7mcE065379063.jpg](https://i.imgur.com/sR2oQEl.jpeg){.zhangyue-img1}

图1-77　原理图自动布线图
:::

::: {.zhangyue-c}
![CmQUOV7Vz8-EBWiiAAAAALw5Pzw661175522.jpg](https://i.imgur.com/nUnOcl1.jpeg){.zhangyue-img1}

图1-78　PCB视图效果图
:::

::: {.zhangyue-c}
![CmQUOV7Vz9CEAWitAAAAAEUameE366407393.jpg](https://i.imgur.com/NdoMMoF.jpeg){.zhangyue-img1}

图1-79　PDF图生成步骤
:::

::: {.zhangyue-c}
![CmQUOF7Vz9CEUcFaAAAAALjplT0962520807.jpg](https://i.imgur.com/P7BBpOM.jpeg){.zhangyue-img}

图1-80　面包板PDF图
:::

### 1.5.4　Arduino开发平台样例与编程 {#chapter-10.xhtml#AUTO_ID_17 .text-title}

Fritzing软件不但能很好地支持Arduino的电路设计，而且提供了对Arduino样例电路的支持，如图1-81所示。用户可以根据"文件"→"打开样例"命令，然后再选择相应的Arduino，如此层层推进，最终选择想打开的样例电路。

::: {.zhangyue-c}
![CmQUOV7Vz9CEIwdxAAAAADSph8Q392908374.jpg](https://i.imgur.com/aGI0W7f.jpeg){.zhangyue-img}

图1-81　Fritzing对Arduino样例支持
:::

这里将以Arduino数字化中的交通灯进行举例说明，选择"元件"→"打开样例"→Arduino→Digital→Output→Traffic→Light命令，就能在Fritzing软件中的编辑视图中得到如图1-82所示的Arduino样例电路。需要注意的是，不管在哪种视图中进行操作，打开的样例电路都会将编辑视图切换到面包板视图，如果想要获得相应的原理图视图或PCB视图，则可以在打开的样例电路中从面包板视图切换到目标视图。

::: {.zhangyue-c}
![CmQUOF7Vz9CEBUt4AAAAADsPQys306178584.jpg](https://i.imgur.com/AbuHhj9.jpeg){.zhangyue-img}

图1-82　Arduino交通灯样例
:::

::: {.zhangyue-c}
![CmQUOV7Vz9CET8UtAAAAAP91o9k034264800.jpg](https://i.imgur.com/5tmzaGA.jpeg){.zhangyue-img2}

图1-83　编程界面进入步骤
:::

除了对Arduino样例的支持外，Fritzing还将电路设计和编程脚本放在了一起，对于每个设计电路，Fritzing都提供了一个编程界面，用户可以在编程界面中编写将要下载到微控制器的脚本。具体操作如图1-83所示，选择"窗口"→"打开编程窗口"命令，即可进入编程界面，如图1-84所示。

从图1-84中可以发现，虽然每个设计电路只有一个编程界面，但设计者可以在一个界面创造许多编程窗口来编写不同版本的脚本，从而在其中选择最合适的脚本。单击"新建"按钮即可创建新编程窗口。而且，从编程界面中也可以看出，目前Fritzing主要支持Arduino和PICAXE两种脚本语言，如图1-85所示。设计者在选定脚本的编程语言后，就只能编写该语言的脚本，并将脚本保存成相应类型的后缀格式。同理，选定编程语言后，设计者也只能打开同种类型的脚本。

::: {.zhangyue-c}
![CmQUOF7Vz9CEDf8lAAAAAFIyCOE341108038.jpg](https://i.imgur.com/imgOAeK.jpeg){.zhangyue-img1}

图1-84　编程界面
:::

选定脚本语言后，设计者还应该选择串行端口，从Fritzing界面可以看出，该软件一共有两个默认端口，分别是COM1和LPT1，如图1-86所示。当设计者将相应的微控制器连接到USB端口时，软件里会增加一个新的设备端口，设计者可以根据自己的需求选择相应的端口。

::: {.zhangyue-c}
![CmQUOV7Vz9CEYRT4AAAAALEzd0U270625855.jpg](https://i.imgur.com/Fa6SkwL.jpeg){.zhangyue-img2}

图1-85　支持编程语言
:::

::: {.zhangyue-c}
![CmQUOF7Vz9CEKnaTAAAAALO9hsA514926138.jpg](https://i.imgur.com/7V1JDx9.jpeg){.zhangyue-img2}

图1-86　支持端口
:::

值得注意的是，虽然Fritzing提供了脚本编写器，但是它并没有内置编译器，所以设计者必须自行安装额外的编程软件将编写的脚本转换成可执行文件。但是，Fritzing只提供了和编程软件交互的方法，设计者可以通过单击图1-86所示的按钮获取相应的可执行文件信息，所有这些内容都显示在下面的控制端。
:::

[]{#chapter-11.xhtml}

::: {.h5_mainbody_bg1}
::: {.h5_rule_hv}
# 第2章 {.tpl-133-text-1-num}

::: {.tpl-133-div-line}
# 迷你游戏机项目设计 ![CmQUOF7Vz9SEEELAAAAAAF19EmE719769063.png](https://i.imgur.com/6YooL6Y.jpeg){.zhangyue-footnote} {.tpl-133-title-1-center}
:::

::: {.tpl-133-pic-center}
![CmQUOF7Vz9SEE6btAAAAALGIiMg316210040.png](https://i.imgur.com/RlpueQv.jpeg){.tpl-133-pic-img-h}
:::
:::
:::

::: {.calibre1}
本项目基于Arduino开发板进行迷你游戏机设计，实现单机闯关小游戏反重力小鸭且支持后续对更多游戏的添加及扩展功能。
:::

[]{#chapter-12.xhtml}

::: {.calibre1}
## 2.1　功能及总体设计 {.tpl-185-title}

::: {.tpl-185-box-cuxian}
:::

::: {.tpl-185-box-middle}
:::

本项目利用Arduino开发板及OLED显示器模块，实现让玩家进行游戏，并挑战自己的通关记录。

要实现上述功能需将作品分成两部分进行设计，即游戏功能与可扩展功能。游戏功能至少有一款较为完整的单机小游戏（目前为反重力小鸭），即通过输入/输出实现玩家和设备之间的互动，游戏具有一定的挑战性和耐玩性。可扩展功能是在原有的模块与程序下，添加新的模块和程序代码，实现更多的游戏功能，同时无需对之前已完成的内容进行大幅修改，且对之前的模块和程序提供一定的支持。

#### 1．整体框架图 {.text-title1}

整体框架如图2-1所示。

::: {.zhangyue-c}
![CmQUOF7Vz9CEUKqWAAAAABwE5mc289015059.jpg](https://i.imgur.com/yfvzBJc.jpeg){.zhangyue-img}

图2-1　整体框架图
:::

#### 2．系统流程图 {.text-title1}

系统流程如图2-2所示。

玩家通过按钮向系统输入，画面的显示根据玩家输入而变化，这个过程不断重复，直到玩家选择退出才结束游戏。

#### 3．总电路图 {.text-title1}

总电路如图2-3所示，引脚连接如表2-1所示。

::: {.zhangyue-c}
![CmQUOF7Vz9CEWtNgAAAAALZJz6s163038699.jpg](https://i.imgur.com/R38zq2K.jpeg){.zhangyue-img3}

图2-2　系统流程图
:::

::: {.zhangyue-c}
![CmQUOF7Vz9CEZG1qAAAAACUtuKQ805713631.jpg](https://i.imgur.com/lWBk5Hr.jpeg){.zhangyue-img1}

图2-3　总电路图
:::

::: {.zhangyue-c}
表2-1　引脚连接表

![CmQUOV7Vz9KED1v0AAAAAAskp8c463050435.jpg](https://i.imgur.com/uAJ0eQr.jpeg){.zhangyue-img}
:::
:::

[]{#chapter-13.xhtml}

::: {.calibre1}
## 2.2　模块介绍 {.tpl-185-title}

::: {.tpl-185-box-cuxian}
:::

::: {.tpl-185-box-middle}
:::

本项目主要包括入口点模块、引脚声明模块、设备类模块、操作基类模块、设备工作控制模块、游戏信息声明模块、游戏记录模块、游戏实体基类模块、反重力小鸭游戏模块、初始界面模块和游戏记录声明模块。下面分别给出各模块的功能介绍及相关代码，程序模块功能关系如图2-4所示。

以上模块分别存放在24个文件中，相关代码按照如下顺序给出：MiniGame.ino、PINS.h、Dominator.h、Dominator.cpp、Device.h、Device.cpp、deDevice.h、deDevice_pics.h、deDevice.cpp、deDevice_pics.cpp、deDeviceDominator.cpp、GamesInfo.h、GamesInfo.cpp、Game_Reserved.h、Game_Reserved.cpp、Game_Reserved_pics.h、Game_Reserved_pics.cpp、GameEntity.h、GameEntity.cpp、Game_GravityDuck.h、Game_GravityDuck_Interface.cpp、Game_GravityDuck_pics.h、Game_GravityDuck_pics.cpp和RecordArgs.h。

::: {.zhangyue-c}
![CmQUOF7Vz9CEKRhnAAAAACZYviQ148074081.jpg](https://i.imgur.com/obYMet2.jpeg){.zhangyue-img}

图2-4　程序模块功能关系图
:::

### 2.2.1　入口点模块 {#chapter-13.xhtml#AUTO_ID_18 .text-title}

::: {.zhangyue-c}
![CmQUOV7Vz9CEMacyAAAAAGz5biE883331544.jpg](https://i.imgur.com/nr2BOgX.jpeg){.zhangyue-img}
:::

### 2.2.2　引脚声明模块 {#chapter-13.xhtml#AUTO_ID_19 .text-title}

::: {.zhangyue-c}
![CmQUOV7Vz9CEd8YEAAAAAI8s_oE451406533.jpg](https://i.imgur.com/0Rb7Ah6.jpeg){.zhangyue-img}
:::

### 2.2.3　设备类模块 {#chapter-13.xhtml#AUTO_ID_20 .text-title}

::: {.zhangyue-c}
![CmQUOV7Vz9CEdMiLAAAAAFYyxiI272878466.jpg](https://i.imgur.com/6b2m3cA.jpeg){.zhangyue-img}
:::

### 2.2.4　操作基类模块 {#chapter-13.xhtml#AUTO_ID_21 .text-title}

::: {.zhangyue-c}
![CmQUOV7Vz9CEX4oAAAAAAJus8SM964361507.jpg](https://i.imgur.com/OQV2qGD.jpeg){.zhangyue-img1}
:::

### 2.2.5　设备工作控制模块 {#chapter-13.xhtml#AUTO_ID_22 .text-title}

::: {.zhangyue-c}
![CmQUOF7Vz9CEcYySAAAAAN5uMWs499652977.jpg](https://i.imgur.com/OiPexop.jpeg){.zhangyue-img1}
:::

::: {.zhangyue-c}
![CmQUOV7Vz9CEXqE8AAAAAKFhuRY311781319.jpg](https://i.imgur.com/oKp0cFb.jpeg){.zhangyue-img}
:::

::: {.zhangyue-c}
![CmQUOF7Vz9CEAddhAAAAAMOAzYg282430965.jpg](https://i.imgur.com/ImK5LBZ.jpeg){.zhangyue-img}
:::

::: {.zhangyue-c}
![CmQUOF7Vz9CEZepfAAAAAPrT0rQ857270820.jpg](https://i.imgur.com/Gb4Ayc9.jpeg){.zhangyue-img}
:::

::: {.zhangyue-c}
![CmQUOV7Vz9CEEFbZAAAAAKDSFwQ443114200.jpg](https://i.imgur.com/deGWbGk.jpeg){.zhangyue-img}
:::

::: {.zhangyue-c}
![CmQUOV7Vz9CEKwQ6AAAAAPLREmE897662494.jpg](https://i.imgur.com/5EXHFET.jpeg){.zhangyue-img}
:::

::: {.zhangyue-c}
![CmQUOV7Vz9CEHyKaAAAAAPZ4qRs704673317.jpg](https://i.imgur.com/vK4SigG.jpeg){.zhangyue-img}
:::

::: {.zhangyue-c}
![CmQUOF7Vz9CEJK1PAAAAAMvikvc083761190.jpg](https://i.imgur.com/3FDxJ1Q.jpeg){.zhangyue-img}
:::

::: {.zhangyue-c}
![CmQUOV7Vz9CEE_kiAAAAALVC_eE150124814.jpg](https://i.imgur.com/WhfjfFu.jpeg){.zhangyue-img}
:::

::: {.zhangyue-c}
![CmQUOF7Vz9CEa7cbAAAAAFM-peU176155853.jpg](https://i.imgur.com/S6rsIQt.jpeg){.zhangyue-img}
:::

::: {.zhangyue-c}
![CmQUOV7Vz9CEASknAAAAABouKDw821378649.jpg](https://i.imgur.com/QxwnpRs.jpeg){.zhangyue-img}
:::

::: {.zhangyue-c}
![CmQUOV7Vz9CEMwNaAAAAAGYYESU347121036.jpg](https://i.imgur.com/JwyAznA.jpeg){.zhangyue-img}
:::

### 2.2.6　游戏信息声明模块 {#chapter-13.xhtml#AUTO_ID_23 .text-title}

::: {.zhangyue-c}
![CmQUOF7Vz9CEOPbPAAAAAIv21z0440583937.jpg](https://i.imgur.com/ZeYeVXm.jpeg){.zhangyue-img1}
:::

### 2.2.7　游戏记录模块 {#chapter-13.xhtml#AUTO_ID_24 .text-title}

::: {.zhangyue-c}
![CmQUOV7Vz9GECGXwAAAAAAnaUjk630198280.jpg](https://i.imgur.com/OV0C4eE.jpeg){.zhangyue-img1}
:::

::: {.zhangyue-c}
![CmQUOF7Vz9GEZCz4AAAAAB5MlME151859377.jpg](https://i.imgur.com/0CxNpKr.jpeg){.zhangyue-img}
:::

::: {.zhangyue-c}
![CmQUOV7Vz9GENmFuAAAAANwg3M8173074718.jpg](https://i.imgur.com/LMDIMYF.jpeg){.zhangyue-img}
:::

::: {.zhangyue-c}
![CmQUOF7Vz9GEJ14YAAAAAHTRJjQ478801946.jpg](https://i.imgur.com/AsPh6CC.jpeg){.zhangyue-img}
:::

::: {.zhangyue-c}
![CmQUOV7Vz9GEUkPcAAAAAPXU6l4634340214.jpg](https://i.imgur.com/hTbF86I.jpeg){.zhangyue-img}
:::

### 2.2.8　游戏实体基类模块 {#chapter-13.xhtml#AUTO_ID_25 .text-title}

::: {.zhangyue-c}
![CmQUOF7Vz9GECIuRAAAAAEDgM14398001517.jpg](https://i.imgur.com/XISKcv6.jpeg){.zhangyue-img}
:::

### 2.2.9　反重力小鸭游戏模块 {#chapter-13.xhtml#AUTO_ID_26 .text-title}

::: {.zhangyue-c}
![CmQUOV7Vz9GEbdEWAAAAAMt8DDc888731895.jpg](https://i.imgur.com/8R4IGw0.jpeg){.zhangyue-img1}
:::

::: {.zhangyue-c}
![CmQUOV7Vz9GEZQ6kAAAAAMl5yjM250683097.jpg](https://i.imgur.com/0ZsetLa.jpeg){.zhangyue-img}
:::

::: {.zhangyue-c}
![CmQUOF7Vz9GEMN3SAAAAACsrzuE630339676.jpg](https://i.imgur.com/XDXSHXX.jpeg){.zhangyue-img}
:::

::: {.zhangyue-c}
![CmQUOF7Vz9GEO4hOAAAAAKK9A7s651341880.jpg](https://i.imgur.com/TKFm2fM.jpeg){.zhangyue-img}
:::

::: {.zhangyue-c}
![CmQUOF7Vz9GEYHMnAAAAAJ6Ql58832503867.jpg](https://i.imgur.com/k53HWJM.jpeg){.zhangyue-img}
:::

::: {.zhangyue-c}
![CmQUOV7Vz9GEG5C6AAAAAJymmhI435566254.jpg](https://i.imgur.com/tGkXGMd.jpeg){.zhangyue-img}
:::

::: {.zhangyue-c}
![CmQUOF7Vz9GEeS1OAAAAAPaYlC4878524189.jpg](https://i.imgur.com/2qTye62.jpeg){.zhangyue-img}
:::

::: {.zhangyue-c}
![CmQUOF7Vz9GERSfEAAAAAMZSZhQ412581675.jpg](https://i.imgur.com/BB1u4ns.jpeg){.zhangyue-img}
:::

::: {.zhangyue-c}
![CmQUOF7Vz9GEJ4DjAAAAAAmpz48112803990.jpg](https://i.imgur.com/287GM0R.jpeg){.zhangyue-img}
:::

::: {.zhangyue-c}
![CmQUOF7Vz9GEMfNYAAAAAGIeT9Y161193644.jpg](https://i.imgur.com/Mosp6wb.jpeg){.zhangyue-img}
:::

::: {.zhangyue-c}
![CmQUOF7Vz9GESJtoAAAAANQb6WY050543165.jpg](https://i.imgur.com/LYPvmWs.jpeg){.zhangyue-img}
:::

::: {.zhangyue-c}
![CmQUOV7Vz9GEbeISAAAAAAdaObc233956509.jpg](https://i.imgur.com/PTeAA9h.jpeg){.zhangyue-img}
:::

::: {.zhangyue-c}
![CmQUOV7Vz9GEa5H-AAAAAF5K3Lk781293123.jpg](https://i.imgur.com/AC4APrM.jpeg){.zhangyue-img}
:::

::: {.zhangyue-c}
![CmQUOF7Vz9GEbs6YAAAAABDv_fw645619925.jpg](https://i.imgur.com/Rf6Zht5.jpeg){.zhangyue-img}
:::

::: {.zhangyue-c}
![CmQUOF7Vz9GECW0aAAAAAM4iwHU409998293.jpg](https://i.imgur.com/YjRYetv.jpeg){.zhangyue-img}
:::

::: {.zhangyue-c}
![CmQUOF7Vz9GECObtAAAAAE65PIw564099763.jpg](https://i.imgur.com/j7oUomg.jpeg){.zhangyue-img}
:::

::: {.zhangyue-c}
![CmQUOF7Vz9GELslPAAAAAPBiqjc127731272.jpg](https://i.imgur.com/18bR2ay.jpeg){.zhangyue-img}
:::

::: {.zhangyue-c}
![CmQUOV7Vz9GEa7IhAAAAAJj4vOg992585909.jpg](https://i.imgur.com/pe4Ts7L.jpeg){.zhangyue-img}
:::

::: {.zhangyue-c}
![CmQUOV7Vz9GESyktAAAAAEZtSKM955860548.jpg](https://i.imgur.com/J8vS2wr.jpeg){.zhangyue-img}
:::

::: {.zhangyue-c}
![CmQUOF7Vz9GEdkg9AAAAAMC7TfQ981306162.jpg](https://i.imgur.com/wRK517t.jpeg){.zhangyue-img}
:::

::: {.zhangyue-c}
![CmQUOV7Vz8GEV-5WAAAAABXYHeg363792878.jpg](https://i.imgur.com/1rpfXe5.jpeg){.zhangyue-img}
:::

::: {.zhangyue-c}
![CmQUOF7Vz8WEKyv9AAAAAJ9WJ_4417935290.jpg](https://i.imgur.com/ABwWpI2.jpeg){.zhangyue-img}
:::

::: {.zhangyue-c}
![CmQUOF7Vz8iENGmGAAAAACZgNF4812592200.jpg](https://i.imgur.com/wy24uqB.jpeg){.zhangyue-img}
:::

::: {.zhangyue-c}
![CmQUOF7Vz8yEMq9AAAAAAHpSO8A182079047.jpg](https://i.imgur.com/3W5Kz8f.jpeg){.zhangyue-img}
:::

::: {.zhangyue-c}
![CmQUOF7Vz8-EPdyyAAAAAMTG6oA847611375.jpg](https://i.imgur.com/v7H7yOz.jpeg){.zhangyue-img}
:::

::: {.zhangyue-c}
![CmQUOF7Vz9KEKqveAAAAAPWUK94542897946.jpg](https://i.imgur.com/TcWeLNd.jpeg){.zhangyue-img}
:::

::: {.zhangyue-c}
![CmQUOF7Vz9OEVteyAAAAANQXVEQ265015720.jpg](https://i.imgur.com/iWx7enK.jpeg){.zhangyue-img}
:::

::: {.zhangyue-c}
![CmQUOV7Vz9OENkxgAAAAAFIeBy8719212148.jpg](https://i.imgur.com/3ZmUxPD.jpeg){.zhangyue-img}
:::

::: {.zhangyue-c}
![CmQUOF7Vz9OEInmtAAAAANN8ZBM596179797.jpg](https://i.imgur.com/9BvtKTM.jpeg){.zhangyue-img}
:::

::: {.zhangyue-c}
![CmQUOV7Vz8GEO9l0AAAAAE8kzCU778126054.jpg](https://i.imgur.com/EYImb4n.jpeg){.zhangyue-img}
:::

::: {.zhangyue-c}
![CmQUOV7Vz8KEbz-5AAAAAOd6SC4605195890.jpg](https://i.imgur.com/TxHkI9I.jpeg){.zhangyue-img}
:::

::: {.zhangyue-c}
![CmQUOV7Vz8KEcIZtAAAAAP0cmkA380187330.jpg](https://i.imgur.com/82u07fy.jpeg){.zhangyue-img}
:::

::: {.zhangyue-c}
![CmQUOF7Vz8KEVQlUAAAAAAzo9iA081964793.jpg](https://i.imgur.com/GGkEriM.jpeg){.zhangyue-img}
:::

::: {.zhangyue-c}
![CmQUOF7Vz8OEcqRmAAAAAEfCk6w958628881.jpg](https://i.imgur.com/4hhxD6i.jpeg){.zhangyue-img}
:::

::: {.zhangyue-c}
![CmQUOF7Vz8OEXnD4AAAAAHWbyQg299823745.jpg](https://i.imgur.com/qH4HwC0.jpeg){.zhangyue-img}
:::

::: {.zhangyue-c}
![CmQUOF7Vz8SEMU6NAAAAAM7LQPQ660006064.jpg](https://i.imgur.com/lzzasPE.jpeg){.zhangyue-img}
:::

::: {.zhangyue-c}
![CmQUOV7Vz8SEXUOjAAAAAPTW1-c224149093.jpg](https://i.imgur.com/l96pBYg.jpeg){.zhangyue-img}
:::

::: {.zhangyue-c}
![CmQUOF7Vz8SEfnkfAAAAAHasDZE080248213.jpg](https://i.imgur.com/hom35YT.jpeg){.zhangyue-img}
:::

::: {.zhangyue-c}
![CmQUOF7Vz8WEe-L9AAAAACGJUn0954164746.jpg](https://i.imgur.com/JHkYEv4.jpeg){.zhangyue-img}
:::

::: {.zhangyue-c}
![CmQUOF7Vz8WEU_paAAAAAEfWXL8425022391.jpg](https://i.imgur.com/1FCBvHy.jpeg){.zhangyue-img}
:::

::: {.zhangyue-c}
![CmQUOF7Vz8aEGQ9rAAAAAOidtpc476086633.jpg](https://i.imgur.com/jnXQEXX.jpeg){.zhangyue-img}
:::

::: {.zhangyue-c}
![CmQUOV7Vz8aEY97yAAAAAIgyfXo654111425.jpg](https://i.imgur.com/ImIiOJK.jpeg){.zhangyue-img}
:::

::: {.zhangyue-c}
![CmQUOV7Vz8eEFZ9GAAAAAMhiD7I341848301.jpg](https://i.imgur.com/TCsV0Hn.jpeg){.zhangyue-img}
:::

::: {.zhangyue-c}
![CmQUOV7Vz8eEfzXhAAAAABkBJLM031500237.jpg](https://i.imgur.com/PM1SoeV.jpeg){.zhangyue-img}
:::

::: {.zhangyue-c}
![CmQUOV7Vz8eEQOTbAAAAAC9CXy0637223237.jpg](https://i.imgur.com/EtTOYm6.jpeg){.zhangyue-img}
:::

::: {.zhangyue-c}
![CmQUOF7Vz8iEUdD9AAAAANbM_XU701455351.jpg](https://i.imgur.com/YFbVh5v.jpeg){.zhangyue-img}
:::

::: {.zhangyue-c}
![CmQUOV7Vz8iEZ2ZWAAAAABJwXBQ501968407.jpg](https://i.imgur.com/hO1Q1bO.jpeg){.zhangyue-img}
:::

### 2.2.10　初始界面模块 {#chapter-13.xhtml#AUTO_ID_27 .text-title}

::: {.zhangyue-c}
![CmQUOV7Vz8iEYfK4AAAAALM4GsI291794573.jpg](https://i.imgur.com/59GyZgJ.jpeg){.zhangyue-img}
:::

::: {.zhangyue-c}
![CmQUOF7Vz8iEDLFeAAAAAIUOy9E034172878.jpg](https://i.imgur.com/MS3WLDt.jpeg){.zhangyue-img}
:::

::: {.zhangyue-c}
![CmQUOV7Vz8mEVOzgAAAAAKWnn-0217352414.jpg](https://i.imgur.com/Q94C6C4.jpeg){.zhangyue-img}
:::

::: {.zhangyue-c}
![CmQUOF7Vz8mECnO7AAAAAEyTuWY683784749.jpg](https://i.imgur.com/2aFXb0t.jpeg){.zhangyue-img}
:::

::: {.zhangyue-c}
![CmQUOF7Vz8qESFF2AAAAAKaEjDo011765695.jpg](https://i.imgur.com/tEtpcYa.jpeg){.zhangyue-img}
:::

::: {.zhangyue-c}
![CmQUOF7Vz8uEE0t0AAAAAGfouhU618735712.jpg](https://i.imgur.com/QtH16yt.jpeg){.zhangyue-img}
:::

::: {.zhangyue-c}
![CmQUOF7Vz8uEGNZvAAAAAIDrYHA125894349.jpg](https://i.imgur.com/NxdcIHL.jpeg){.zhangyue-img}
:::

::: {.zhangyue-c}
![CmQUOV7Vz8uEChhqAAAAAJP8g_w000757301.jpg](https://i.imgur.com/r75Bq9F.jpeg){.zhangyue-img}
:::

::: {.zhangyue-c}
![CmQUOF7Vz8yEAwZGAAAAAPjg2Ng694699123.jpg](https://i.imgur.com/xEk83kf.jpeg){.zhangyue-img}
:::

::: {.zhangyue-c}
![CmQUOF7Vz8yEfEsSAAAAAA7VJMM024016335.jpg](https://i.imgur.com/ImKwbpc.jpeg){.zhangyue-img}
:::

::: {.zhangyue-c}
![CmQUOF7Vz8yEaaEWAAAAACUJocA173911913.jpg](https://i.imgur.com/OPi31Rs.jpeg){.zhangyue-img}
:::

::: {.zhangyue-c}
![CmQUOF7Vz82ERQHwAAAAAKSxrhQ002960487.jpg](https://i.imgur.com/lVIOc4b.jpeg){.zhangyue-img}
:::

::: {.zhangyue-c}
![CmQUOF7Vz86ERaW9AAAAAAUvH2k844920085.jpg](https://i.imgur.com/D4PYH51.jpeg){.zhangyue-img}
:::

::: {.zhangyue-c}
![CmQUOV7Vz86EE3y3AAAAAJsOVD8681897084.jpg](https://i.imgur.com/Dp8D0Vh.jpeg){.zhangyue-img}
:::

::: {.zhangyue-c}
![CmQUOF7Vz8-EILzpAAAAALLfR8Q195656918.jpg](https://i.imgur.com/LqazlvE.jpeg){.zhangyue-img}
:::

::: {.zhangyue-c}
![CmQUOV7Vz8-EO_ZPAAAAAN0hrVs472763990.jpg](https://i.imgur.com/61sEfux.jpeg){.zhangyue-img}
:::

::: {.zhangyue-c}
![CmQUOV7Vz8-ESXbTAAAAAILjwNg285666984.jpg](https://i.imgur.com/es6VuS7.jpeg){.zhangyue-img}
:::

::: {.zhangyue-c}
![CmQUOF7Vz9CEeC5VAAAAAJ02PTo028401008.jpg](https://i.imgur.com/XyCjEvI.jpeg){.zhangyue-img}
:::

::: {.zhangyue-c}
![CmQUOF7Vz9CEYfjXAAAAACro9ug354363554.jpg](https://i.imgur.com/hDzqGH3.jpeg){.zhangyue-img}
:::

::: {.zhangyue-c}
![CmQUOF7Vz9CEIfMwAAAAAN3y3g0431971267.jpg](https://i.imgur.com/6dHMIyz.jpeg){.zhangyue-img}
:::

::: {.zhangyue-c}
![CmQUOV7Vz9GEdJenAAAAANEbitE141282000.jpg](https://i.imgur.com/EpFabx6.jpeg){.zhangyue-img}
:::

::: {.zhangyue-c}
![CmQUOV7Vz9GEAcg_AAAAAHKu0Gg307830855.jpg](https://i.imgur.com/mNvI3hO.jpeg){.zhangyue-img}
:::

::: {.zhangyue-c}
![CmQUOV7Vz9KEfxj9AAAAAIAlh8U981372061.jpg](https://i.imgur.com/0UykajN.jpeg){.zhangyue-img}
:::

::: {.zhangyue-c}
![CmQUOV7Vz9KERbUpAAAAAOhpdyQ898866464.jpg](https://i.imgur.com/VrVSoxa.jpeg){.zhangyue-img}
:::

::: {.zhangyue-c}
![CmQUOF7Vz9KEYjysAAAAAN1Vdt0701978666.jpg](https://i.imgur.com/hPkUXSP.jpeg){.zhangyue-img}
:::

::: {.zhangyue-c}
![CmQUOF7Vz9KECGWOAAAAAOSUL4o591675530.jpg](https://i.imgur.com/1eDuo8a.jpeg){.zhangyue-img}
:::

::: {.zhangyue-c}
![CmQUOV7Vz9KEaBv2AAAAAGZC7CQ318928127.jpg](https://i.imgur.com/tF3mB20.jpeg){.zhangyue-img}
:::

::: {.zhangyue-c}
![CmQUOF7Vz9KEVBP-AAAAAEWubA8614233803.jpg](https://i.imgur.com/6uK55T7.jpeg){.zhangyue-img}
:::

::: {.zhangyue-c}
![CmQUOF7Vz9KEVPYDAAAAAIYlo70768389438.jpg](https://i.imgur.com/Rt6JpHq.jpeg){.zhangyue-img}
:::

::: {.zhangyue-c}
![CmQUOF7Vz9KEAf8JAAAAAFrlqCE159131193.jpg](https://i.imgur.com/dJsouAA.jpeg){.zhangyue-img}
:::

::: {.zhangyue-c}
![CmQUOV7Vz9KEZzj7AAAAAJ1bazk566743184.jpg](https://i.imgur.com/tFuuNzj.jpeg){.zhangyue-img}
:::

::: {.zhangyue-c}
![CmQUOF7Vz9KEG6JGAAAAAO7glm8906307484.jpg](https://i.imgur.com/C2RfjTu.jpeg){.zhangyue-img}
:::

::: {.zhangyue-c}
![CmQUOV7Vz9OEM07eAAAAAPvE41c892829360.jpg](https://i.imgur.com/E3VltE2.jpeg){.zhangyue-img}
:::

::: {.zhangyue-c}
![CmQUOV7Vz9OEVrc2AAAAALCivuI075742108.jpg](https://i.imgur.com/8eyVfb6.jpeg){.zhangyue-img}
:::

::: {.zhangyue-c}
![CmQUOV7Vz9OEEOspAAAAAH-W7cU182632222.jpg](https://i.imgur.com/p6VsaP7.jpeg){.zhangyue-img}
:::

::: {.zhangyue-c}
![CmQUOV7Vz9OEIDxPAAAAAGhlFLI441577884.jpg](https://i.imgur.com/uCc5DuY.jpeg){.zhangyue-img}
:::

::: {.zhangyue-c}
![CmQUOV7Vz9OEd1MWAAAAAGv0hdQ678456875.jpg](https://i.imgur.com/g3Nzn2U.jpeg){.zhangyue-img}
:::

::: {.zhangyue-c}
![CmQUOF7Vz9OES-b7AAAAACpHLv0037102587.jpg](https://i.imgur.com/Mf6Hl1V.jpeg){.zhangyue-img}
:::

::: {.zhangyue-c}
![CmQUOV7Vz9OEL0MNAAAAAIWBTGw251502057.jpg](https://i.imgur.com/S8FxsP3.jpeg){.zhangyue-img}
:::

::: {.zhangyue-c}
![CmQUOV7Vz9OEZENjAAAAAFZidrM982428286.jpg](https://i.imgur.com/XMVuVm8.jpeg){.zhangyue-img}
:::

::: {.zhangyue-c}
![CmQUOF7Vz9OETWytAAAAAFt2Tco381836456.jpg](https://i.imgur.com/e5IBjYD.jpeg){.zhangyue-img}
:::

::: {.zhangyue-c}
![CmQUOF7Vz9OEbpt_AAAAACg0q10515771274.jpg](https://i.imgur.com/g86aIE0.jpeg){.zhangyue-img}
:::

::: {.zhangyue-c}
![CmQUOF7Vz9OEFuQ9AAAAAC_r6R4243024052.jpg](https://i.imgur.com/eAGkeDZ.jpeg){.zhangyue-img}
:::

::: {.zhangyue-c}
![CmQUOV7Vz9OEcP7IAAAAACSUWVo504235733.jpg](https://i.imgur.com/pZZxt9N.jpeg){.zhangyue-img}
:::

::: {.zhangyue-c}
![CmQUOV7Vz9OEYWE7AAAAADpHvY4745575436.jpg](https://i.imgur.com/T0qC14n.jpeg){.zhangyue-img}
:::

::: {.zhangyue-c}
![CmQUOF7Vz9OEFCOrAAAAAN7QDpc140649163.jpg](https://i.imgur.com/pnOJW5F.jpeg){.zhangyue-img}
:::

::: {.zhangyue-c}
![CmQUOV7Vz9OEfsj-AAAAAGsKqZA433821402.jpg](https://i.imgur.com/RwDBxuD.jpeg){.zhangyue-img}
:::

::: {.zhangyue-c}
![CmQUOF7Vz9OEIQl3AAAAAArvIxk189681805.jpg](https://i.imgur.com/eH8jxpk.jpeg){.zhangyue-img}
:::

### 2.2.11　游戏记录声明模块 {#chapter-13.xhtml#AUTO_ID_28 .text-title}

::: {.zhangyue-c}
![CmQUOV7Vz9OEHLPYAAAAAPUDnD4703756830.jpg](https://i.imgur.com/DxLaGcp.jpeg){.zhangyue-img}
:::
:::

[]{#chapter-14.xhtml}

::: {.calibre1}
## 2.3　产品展示 {.tpl-185-title}

::: {.tpl-185-box-cuxian}
:::

::: {.tpl-185-box-middle}
:::

产品展示如图2-5所示。

::: {.zhangyue-c}
![CmQUOF7Vz9OEPMrVAAAAAOZsuuY887134711.jpg](https://i.imgur.com/0q7RSvR.jpeg){.zhangyue-img3}

图2-5　产品展示图
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

![CmQUOF7Vz9KELi3HAAAAABqfSg4548871283.jpg](https://i.imgur.com/vfNhFT5.jpeg){.zhangyue-img}
:::
:::

[]{#chapter-16.xhtml}

::: {.h5_mainbody_bg1}
::: {.h5_rule_hv}
# 第3章 {.tpl-133-text-1-num}

::: {.tpl-133-div-line}
# 基于JY901的无线体感游戏掌机项目设计 ![CmQUOF7Vz9SEEELAAAAAAF19EmE719769063.png](https://i.imgur.com/VEIG8pK.jpeg){.zhangyue-footnote} {.tpl-133-title-1-center}
:::

::: {.tpl-133-pic-center}
![CmQUOF7Vz9SEE6btAAAAALGIiMg316210040.png](https://i.imgur.com/uRWRzKc.jpeg){.tpl-133-pic-img-h}
:::
:::
:::

::: {.calibre1}
本项目基于JY901模块获取实时的三轴加速度、角速度、姿态角度，通过BLE蓝牙模块与树莓派进行通信，实现便携游戏掌机，并支持游戏数据的云端记录存储和网页查看。
:::

[]{#chapter-17.xhtml}

::: {.calibre1}
## 3.1　功能及总体设计 {.tpl-185-title}

::: {.tpl-185-box-cuxian}
:::

::: {.tpl-185-box-middle}
:::

本项目实现了无线体感游戏掌机，游戏手柄部分整合多个传感器模块和电池，相关游戏在Linux平台的树莓派端实现，通过高度整合的树莓派和OLED彩色显示器实现了便携式掌上游戏机，支持WiFi连网和HDMI视频信号输出，可以投屏至大尺寸显示器。同时云端服务器将记录游戏数据在网页上直观展示。通过按键映射将蓝牙手柄单独作为游戏外设使用，适配Windows平台游戏。

要实现上述功能需将作品分成四部分进行设计，即手柄数据采集模块、树莓派游戏实现模块、云服务器数据存储模块和移动端数据展示模块。手柄数据采集模块整合了Arduino开发板、JY901传感器、摇杆按键、HC-05蓝牙模块、直流电机振动模块；树莓派游戏实现模块整合了树莓派开发板、OLED显示器、电池，其系统基于Linux；游戏部分采用Python的库文件编写，云服务器数据存储模块采用阿里云服务器、Node＋Express＋Mysql构建服务器数据库；移动端数据展示模块使用Php＋HTML5＋CSS＋JavaScript语言，采用Bootstrap框架、jQuery、ECharts库文件编写完成数据可视化。

#### 1．整体框架图 {.text-title1}

整体框架如图3-1所示。

::: {.zhangyue-c}
![CmQUOV7Vz9OEDlV1AAAAAK3TdIo931527570.jpg](https://i.imgur.com/izf6oCU.jpeg){.zhangyue-img1}

图3-1　整体框架图
:::

#### 2．系统流程图 {.text-title1}

系统流程如图3-2所示。

::: {.zhangyue-c}
![CmQUOF7Vz9OEXjewAAAAAKHJNPA747335313.jpg](https://i.imgur.com/VztqAzQ.jpeg){.zhangyue-img1}

图3-2　系统流程图
:::

#### 3．总电路图 {.text-title1}

总电路如图3-3所示，引脚连接如表3-1所示。

::: {.zhangyue-c}
表3-1　引脚连接表

![CmQUOV7Vz9KEHPaJAAAAAMObc3Y819759244.jpg](https://i.imgur.com/SIAWXv6.jpeg){.zhangyue-img}
:::

::: {.zhangyue-c}
![CmQUOV7Vz9OEZowLAAAAAI7bVnM003208678.jpg](https://i.imgur.com/VzqQz26.jpeg){.zhangyue-img1}

图3-3　总电路图
:::
:::

[]{#chapter-18.xhtml}

::: {.calibre1}
## 3.2　模块介绍 {.tpl-185-title}

::: {.tpl-185-box-cuxian}
:::

::: {.tpl-185-box-middle}
:::

本项目主要包括手柄数据采集模块、树莓派游戏实现模块、云服务器数据存储模块和移动端数据展示模块。下面分别给出各模块的功能介绍及相关代码。

### 3.2.1　手柄数据采集模块 {#chapter-18.xhtml#AUTO_ID_29 .text-title}

本部分包括手柄数据采集模块的功能介绍及相关代码。

#### 1．功能介绍 {.text-title1}

手柄数据采集模块整合了Arduino开发板、JY901传感器、摇杆按键、HC-05蓝牙模块、直流电机振动模块。采集JY901姿态角度数据和摇杆按键数据，通过HC-05蓝牙模块发送给树莓派，并对相应的按键操作给出直流电机振动反馈，电路如图3-4所示。

::: {.zhangyue-c}
![CmQUOF7Vz9OEFhlOAAAAAFidi84409592541.jpg](https://i.imgur.com/LP6d3y5.jpeg){.zhangyue-img}

图3-4　手柄数据采集模块连线图
:::

#### 2．相关代码 {.text-title1}

::: {.zhangyue-c}
![CmQUOV7Vz9OEQM6vAAAAABQsI9w737875669.jpg](https://i.imgur.com/dw009hM.jpeg){.zhangyue-img}
:::

::: {.zhangyue-c}
![CmQUOF7Vz9OELsu3AAAAABsnnWE238094679.jpg](https://i.imgur.com/9vcFIHh.jpeg){.zhangyue-img}
:::

::: {.zhangyue-c}
![CmQUOV7Vz8GEaY-YAAAAAPeG76g469150887.jpg](https://i.imgur.com/HWESqii.jpeg){.zhangyue-img}
:::

::: {.zhangyue-c}
![CmQUOF7Vz8GEUzosAAAAAByQqnM315052640.jpg](https://i.imgur.com/EWeaedm.jpeg){.zhangyue-img}
:::

### 3.2.2　树莓派游戏实现模块 {#chapter-18.xhtml#AUTO_ID_30 .text-title}

本部分包括树莓派游戏实现模块的功能介绍及相关代码。

#### 1．功能介绍 {.text-title1}

树莓派端利用Python的Pyserial蓝牙串口模块接收数据，将接收到的JY901和按键摇杆数据进行对应动作解析，利用Python的Pygame进行编写，对体感动作做出相应的游戏，游戏画面通过OLED显示器输出，游戏结束时，通过WiFi将数据上传至云服务器。同时，通过按键映射将蓝牙手柄单独作为游戏外设使用，适配Windows平台。元件包括树莓派和OLED显示屏。

#### 2．相关代码 {.text-title1}

1）蓝牙通信

::: {.zhangyue-c}
![CmQUOV7Vz8GEaSIbAAAAAE-XMUk333211498.jpg](https://i.imgur.com/nFuSAZT.jpeg){.zhangyue-img}
:::

2）体感弹球游戏

::: {.zhangyue-c}
![CmQUOV7Vz8GEYjuAAAAAAKVwTNY906374121.jpg](https://i.imgur.com/RoyUPx6.jpeg){.zhangyue-img}
:::

::: {.zhangyue-c}
![CmQUOV7Vz8KEHePEAAAAAJ5jA64125831575.jpg](https://i.imgur.com/UCcLg2S.jpeg){.zhangyue-img}
:::

::: {.zhangyue-c}
![CmQUOF7Vz8KEZ34-AAAAAM-4qSA778555865.jpg](https://i.imgur.com/HXlIFzm.jpeg){.zhangyue-img}
:::

3）滑雪游戏

::: {.zhangyue-c}
![CmQUOF7Vz8KEE8aFAAAAAJ860c0057915846.jpg](https://i.imgur.com/gRkoEaJ.jpeg){.zhangyue-img}
:::

::: {.zhangyue-c}
![CmQUOV7Vz8KEcOyPAAAAALwUyG4046877077.jpg](https://i.imgur.com/wxgl0JX.jpeg){.zhangyue-img}
:::

::: {.zhangyue-c}
![CmQUOV7Vz8KEOab5AAAAAMobbUY127241953.jpg](https://i.imgur.com/j5Q7not.jpeg){.zhangyue-img}
:::

::: {.zhangyue-c}
![CmQUOF7Vz8KEUbA3AAAAAHjeqAg527618886.jpg](https://i.imgur.com/CIIZhyE.jpeg){.zhangyue-img}
:::

4）外星人入侵游戏

::: {.zhangyue-c}
![CmQUOF7Vz8KESiIAAAAAAGe3HRo127725831.jpg](https://i.imgur.com/d0oymtW.jpeg){.zhangyue-img}
:::

::: {.zhangyue-c}
![CmQUOF7Vz8KEF1ybAAAAANioXvY127852014.jpg](https://i.imgur.com/vZBdrdR.jpeg){.zhangyue-img}
:::

::: {.zhangyue-c}
![CmQUOV7Vz8KEMTEUAAAAAOuyQ1Y781739467.jpg](https://i.imgur.com/kxxR0DA.jpeg){.zhangyue-img}
:::

::: {.zhangyue-c}
![CmQUOV7Vz8KEb32fAAAAAMdkutI537365522.jpg](https://i.imgur.com/Ji261K3.jpeg){.zhangyue-img}
:::

::: {.zhangyue-c}
![CmQUOF7Vz8KEZGkWAAAAAG1o7Ww607751073.jpg](https://i.imgur.com/WrZv5r5.jpeg){.zhangyue-img}
:::

::: {.zhangyue-c}
![CmQUOF7Vz8KEaAI6AAAAABfbM_s960458914.jpg](https://i.imgur.com/Xdfcxpq.jpeg){.zhangyue-img}
:::

::: {.zhangyue-c}
![CmQUOV7Vz8KECUoDAAAAAK4mIVQ682991260.jpg](https://i.imgur.com/SxYF4gu.jpeg){.zhangyue-img}
:::

::: {.zhangyue-c}
![CmQUOF7Vz8KEdza9AAAAAE2ErMc271283654.jpg](https://i.imgur.com/E0Swp5W.jpeg){.zhangyue-img}
:::

::: {.zhangyue-c}
![CmQUOV7Vz8KEar6MAAAAACPdods629951329.jpg](https://i.imgur.com/xvhtgkB.jpeg){.zhangyue-img}
:::

::: {.zhangyue-c}
![CmQUOF7Vz8KEL-_ZAAAAAKw0KEM437713600.jpg](https://i.imgur.com/M6NuEbA.jpeg){.zhangyue-img}
:::

::: {.zhangyue-c}
![CmQUOF7Vz8KEDHZXAAAAAEJc18s447981609.jpg](https://i.imgur.com/0aJVsla.jpeg){.zhangyue-img}
:::

::: {.zhangyue-c}
![CmQUOV7Vz8KEYrY6AAAAACk64ig845889218.jpg](https://i.imgur.com/BmrNyBa.jpeg){.zhangyue-img}
:::

5）坦克大战游戏

::: {.zhangyue-c}
![CmQUOF7Vz8KEJVDdAAAAAAstH6U293627671.jpg](https://i.imgur.com/yXdzAtK.jpeg){.zhangyue-img}
:::

::: {.zhangyue-c}
![CmQUOV7Vz8KEJF61AAAAAKB-TC4867730614.jpg](https://i.imgur.com/z6FTze1.jpeg){.zhangyue-img}
:::

::: {.zhangyue-c}
![CmQUOV7Vz8KEavMFAAAAAMtBrck224147843.jpg](https://i.imgur.com/OJwHtUe.jpeg){.zhangyue-img}
:::

::: {.zhangyue-c}
![CmQUOV7Vz8KET1uSAAAAAMixozY624507083.jpg](https://i.imgur.com/JjvtMin.jpeg){.zhangyue-img}
:::

::: {.zhangyue-c}
![CmQUOV7Vz8OEZgifAAAAAK3_Ago828357779.jpg](https://i.imgur.com/xp2tVf0.jpeg){.zhangyue-img}
:::

::: {.zhangyue-c}
![CmQUOF7Vz8OEQiS2AAAAAGJ242M913059220.jpg](https://i.imgur.com/BpQZhda.jpeg){.zhangyue-img}
:::

::: {.zhangyue-c}
![CmQUOF7Vz8OEVEUIAAAAAB7j9Wc312604613.jpg](https://i.imgur.com/hAJuyXV.jpeg){.zhangyue-img}
:::

::: {.zhangyue-c}
![CmQUOV7Vz8OEJfpnAAAAAFqNuTE979364427.jpg](https://i.imgur.com/57OrClD.jpeg){.zhangyue-img}
:::

::: {.zhangyue-c}
![CmQUOV7Vz8OEB-ptAAAAALbrurw586872565.jpg](https://i.imgur.com/7ZxBHrP.jpeg){.zhangyue-img}
:::

::: {.zhangyue-c}
![CmQUOF7Vz8OEey5-AAAAAABKgTI299604296.jpg](https://i.imgur.com/PpYudLy.jpeg){.zhangyue-img}
:::

::: {.zhangyue-c}
![CmQUOF7Vz8OEGLkVAAAAAPUaSWc534683524.jpg](https://i.imgur.com/ALdlX7d.jpeg){.zhangyue-img}
:::

::: {.zhangyue-c}
![CmQUOV7Vz8OEHqDNAAAAALGo6Xs178197694.jpg](https://i.imgur.com/0V3Fuw3.jpeg){.zhangyue-img}
:::

::: {.zhangyue-c}
![CmQUOF7Vz8OEOo8yAAAAAFefc2Y512091517.jpg](https://i.imgur.com/6DIOvj6.jpeg){.zhangyue-img}
:::

::: {.zhangyue-c}
![CmQUOV7Vz8OEYkSkAAAAALIiZPs073851600.jpg](https://i.imgur.com/7dJBj7J.jpeg){.zhangyue-img}
:::

::: {.zhangyue-c}
![CmQUOV7Vz8OEYckxAAAAAHnzJZ0654284302.jpg](https://i.imgur.com/71rnVDv.jpeg){.zhangyue-img}
:::

::: {.zhangyue-c}
![CmQUOF7Vz8OEUZwHAAAAAJK3pwo927770575.jpg](https://i.imgur.com/hGLI1Kb.jpeg){.zhangyue-img}
:::

::: {.zhangyue-c}
![CmQUOF7Vz8OEGh-_AAAAAKE3cBQ127252303.jpg](https://i.imgur.com/47GzAiX.jpeg){.zhangyue-img}
:::

6）体感射击游戏

::: {.zhangyue-c}
![CmQUOV7Vz8OEPt4_AAAAAHo_dOU971434541.jpg](https://i.imgur.com/G5oqvEd.jpeg){.zhangyue-img}
:::

::: {.zhangyue-c}
![CmQUOV7Vz8OECzC7AAAAAGWJCZA996036791.jpg](https://i.imgur.com/QRswzX7.jpeg){.zhangyue-img}
:::

::: {.zhangyue-c}
![CmQUOF7Vz8OEEBUuAAAAAARhkgE754471574.jpg](https://i.imgur.com/YsKntas.jpeg){.zhangyue-img}
:::

::: {.zhangyue-c}
![CmQUOV7Vz8OEZEVCAAAAAFKEHas640862059.jpg](https://i.imgur.com/oJnEUvj.jpeg){.zhangyue-img}
:::

7）体感跑酷游戏

::: {.zhangyue-c}
![CmQUOF7Vz8OEQwiyAAAAAOwx5bc601961237.jpg](https://i.imgur.com/IGHXWm6.jpeg){.zhangyue-img}
:::

::: {.zhangyue-c}
![CmQUOV7Vz8OEMcaOAAAAADIXrS8602724799.jpg](https://i.imgur.com/AKZe6Bo.jpeg){.zhangyue-img}
:::

::: {.zhangyue-c}
![CmQUOF7Vz8OEGe_yAAAAADnCwGs833267497.jpg](https://i.imgur.com/cayWpYZ.jpeg){.zhangyue-img}
:::

::: {.zhangyue-c}
![CmQUOV7Vz8OEBv8RAAAAAEmpHNk981900365.jpg](https://i.imgur.com/LJaFeXw.jpeg){.zhangyue-img}
:::

::: {.zhangyue-c}
![CmQUOF7Vz8OEeoqIAAAAALeqaVw655292253.jpg](https://i.imgur.com/VS4enk5.jpeg){.zhangyue-img}
:::

::: {.zhangyue-c}
![CmQUOV7Vz8OEAtdeAAAAAGM3CH8171275545.jpg](https://i.imgur.com/dMB8cdx.jpeg){.zhangyue-img}
:::

::: {.zhangyue-c}
![CmQUOF7Vz8OEbJ4hAAAAAB4IYhE583352935.jpg](https://i.imgur.com/2Nph6vv.jpeg){.zhangyue-img}
:::

::: {.zhangyue-c}
![CmQUOV7Vz8SEJdpZAAAAAI6IUNw398265864.jpg](https://i.imgur.com/Ntx2pA6.jpeg){.zhangyue-img}
:::

::: {.zhangyue-c}
![CmQUOV7Vz8SEOfxBAAAAAF06V0w090503421.jpg](https://i.imgur.com/JWnAIhs.jpeg){.zhangyue-img}
:::

### 3.2.3　云服务器数据存储模块 {#chapter-18.xhtml#AUTO_ID_31 .text-title}

本部分包括云服务器数据存储模块的功能介绍及相关代码。

#### 1．功能介绍 {.text-title1}

接收树莓派发送的游戏数据，服务器后端采用Node＋Express＋Mysql构建数据库，采用Javascript语言编写。

#### 2．相关代码 {.text-title1}

1）Server.js

::: {.zhangyue-c}
![CmQUOF7Vz8SEIvNpAAAAALqjh68011849814.jpg](https://i.imgur.com/1UY1Gsw.jpeg){.zhangyue-img}
:::

2）APP.js

::: {.zhangyue-c}
![CmQUOF7Vz8SEOV4rAAAAANTOAds694220532.jpg](https://i.imgur.com/KCwQVsO.jpeg){.zhangyue-img}
:::

::: {.zhangyue-c}
![CmQUOV7Vz8SEMm-EAAAAAMk7Fw0027413913.jpg](https://i.imgur.com/DKDpCuv.jpeg){.zhangyue-img}
:::

### 3.2.4　移动端数据展示模块 {#chapter-18.xhtml#AUTO_ID_32 .text-title}

本部分包括移动端数据展示模块的功能介绍及相关代码。

#### 1．功能介绍 {.text-title1}

移动端数据展示模块使用PHP＋HTML5＋CSS＋JavaScript语言，采用Bootstrap框架、jQuery、ECharts库编写完成数据可视化。

#### 2．相关代码 {.text-title1}

::: {.zhangyue-c}
![CmQUOV7Vz8SEOgiwAAAAALPchPI327491301.jpg](https://i.imgur.com/OeQYZgZ.jpeg){.zhangyue-img}
:::

::: {.zhangyue-c}
![CmQUOF7Vz8SED7JiAAAAAKv2C-8608042519.jpg](https://i.imgur.com/y0T6hu3.jpeg){.zhangyue-img}
:::

::: {.zhangyue-c}
![CmQUOF7Vz8SEXQz3AAAAALjW7Os126566536.jpg](https://i.imgur.com/roD1eEb.jpeg){.zhangyue-img}
:::

::: {.zhangyue-c}
![CmQUOV7Vz8SEFFxRAAAAACpGiWs052496408.jpg](https://i.imgur.com/guGCh5c.jpeg){.zhangyue-img}
:::

::: {.zhangyue-c}
![CmQUOF7Vz8SEEagPAAAAALtvsl0011273943.jpg](https://i.imgur.com/cgd3GM2.jpeg){.zhangyue-img}
:::

::: {.zhangyue-c}
![CmQUOV7Vz8SEI2iUAAAAABkpOqo541838371.jpg](https://i.imgur.com/s5NVlJn.jpeg){.zhangyue-img}
:::
:::

[]{#chapter-19.xhtml}

::: {.calibre1}
## 3.3　产品展示 {.tpl-185-title}

::: {.tpl-185-box-cuxian}
:::

::: {.tpl-185-box-middle}
:::

蓝牙手柄正面外观如图3-5所示，蓝牙手柄背面外观如图3-6所示，树莓派掌机正面外观如图3-7所示，树莓派掌机侧面外观如图3-8所示，树莓派掌机背面外观如图3-9所示。

::: {.zhangyue-c}
![CmQUOV7Vz8SED0ZXAAAAAP61xf0160329434.jpg](https://i.imgur.com/ndHV99D.jpeg){.zhangyue-img}

图3-5　蓝牙手柄正面外观图
:::

::: {.zhangyue-c}
![CmQUOF7Vz8SEWXDEAAAAAGF1RPc009051964.jpg](https://i.imgur.com/EhozD33.jpeg){.zhangyue-img1}

图3-6　蓝牙手柄背面外观图
:::

::: {.zhangyue-c}
![CmQUOV7Vz8SEcXcyAAAAAND2SJU014116132.jpg](https://i.imgur.com/GiiS0wl.jpeg){.zhangyue-img1}

图3-7　树莓派掌机正面外观图
:::

::: {.zhangyue-c}
![CmQUOV7Vz8SECKumAAAAAHrUcAg128686018.jpg](https://i.imgur.com/h5qLD8S.jpeg){.zhangyue-img1}

图3-8　树莓派掌机侧面外观图
:::

::: {.zhangyue-c}
![CmQUOF7Vz8SEQlcFAAAAAItMqfA284880782.jpg](https://i.imgur.com/Q2f0RNL.jpeg){.zhangyue-img}

图3-9　树莓派掌机背面外观图
:::

实现部分包含6个游戏，分别是外星人入侵、体感弹球、体感射击、坦克大战、滑雪和方块跑酷。体感弹球游戏如图3-10所示，滑雪游戏如图3-11所示，外星人入侵游戏如图3-12所示，坦克大战游戏如图3-13所示，体感射击游戏如图3-14所示，方块跑酷游戏如图3-15所示，移动端界面如图3-16所示。

::: {.zhangyue-c}
![CmQUOV7Vz8SESzCwAAAAAH5AVCw332641352.jpg](https://i.imgur.com/iuRjDPK.jpeg){.zhangyue-img}

图3-10　体感弹球游戏图
:::

::: {.zhangyue-c}
![CmQUOF7Vz8SEPzTrAAAAACZ_c9g214699409.jpg](https://i.imgur.com/cB25BD6.jpeg){.zhangyue-img}

图3-11　滑雪游戏图
:::

::: {.zhangyue-c}
![CmQUOF7Vz8SEKloaAAAAAArue_A501063191.jpg](https://i.imgur.com/Qx8TYi2.jpeg){.zhangyue-img}

图3-12　外星人入侵游戏图
:::

::: {.zhangyue-c}
![CmQUOF7Vz8SEAUbBAAAAAM3A0aw659840862.jpg](https://i.imgur.com/I8UJ8tz.jpeg){.zhangyue-img}

图3-13　坦克大战游戏图
:::

::: {.zhangyue-c}
![CmQUOF7Vz8SEcyWkAAAAAEdhJms273114574.jpg](https://i.imgur.com/PfhaIlQ.jpeg){.zhangyue-img}

图3-14　体感射击游戏图
:::

::: {.zhangyue-c}
![CmQUOV7Vz8SEM56VAAAAAMYFMK0588816338.jpg](https://i.imgur.com/47HBgw5.jpeg){.zhangyue-img}

图3-15　方块跑酷游戏图
:::

::: {.zhangyue-c}
![CmQUOV7Vz8SESrA2AAAAANlLkN4808750194.jpg](https://i.imgur.com/kv9nRnt.jpeg){.zhangyue-img}

图3-16　移动端界面图
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

![CmQUOF7Vz9KEOuQsAAAAAHPQ6yY284490599.jpg](https://i.imgur.com/DSTczoQ.jpeg){.zhangyue-img}
:::
:::

[]{#chapter-21.xhtml}

::: {.h5_mainbody_bg1}
::: {.h5_rule_hv}
# 第4章 {.tpl-133-text-1-num}

::: {.tpl-133-div-line}
# Heagic Tower项目设计 ![CmQUOF7Vz9SEEELAAAAAAF19EmE719769063.png](https://i.imgur.com/6ZX7Yvo.jpeg){.zhangyue-footnote} {.tpl-133-title-1-center}
:::

::: {.tpl-133-pic-center}
![CmQUOF7Vz9SEE6btAAAAALGIiMg316210040.png](https://i.imgur.com/SZYiIaS.jpeg){.tpl-133-pic-img-h}
:::
:::
:::

::: {.calibre1}
本项目基于Arduino开发板以及姿态传感器，与PC端Python游戏------魔塔进行交互，实现头部运动控制游戏。
:::

[]{#chapter-22.xhtml}

::: {.calibre1}
## 4.1　功能及总体设计 {.tpl-185-title}

::: {.tpl-185-box-cuxian}
:::

::: {.tpl-185-box-middle}
:::

本项目是用户戴上内含Arduino开发板等元件的发带转动头部时，控制PC端的小人移动。发带内含姿态解算传感器，可以输出人头部当前的角度。Arduino开发板将该角度值通过蓝牙模块传输到蓝牙串口，再通过Python对串口数据的获取和处理判断方向，进而控制人物的移动。

本项目硬件获取用户头部运动的方向，共计六种（其中左右各有两种方式），用户可以仅凭头部运动就能轻松控制游戏的进行，每次从正面运动头部后，再次回到正面时为一个判断方向的过程。

要实现上述功能需将作品分成四部分进行设计，即输入部分、传输部分、处理部分和游戏部分。输入部分选用了一个姿态角度传感器JY-61P，固定在Arduino开发板上；传输部分选用了HC-05模块配合Arduino开发板实现；处理部分通过Python程序实现；游戏内容均由Python实现。

#### 1．整体框架图 {.text-title1}

整体框架如图4-1所示。

::: {.zhangyue-c}
![CmQUOV7Vz8SEB5cIAAAAAG306Wk494771220.jpg](https://i.imgur.com/BJf4Kcs.jpeg){.zhangyue-img}

图4-1　整体框架图
:::

#### 2．系统流程图 {.text-title1}

系统流程如图4-2所示。

角度数据获取后通过蓝牙，以字节流的形式传输到计算机串口，因建立连接开始阶段会出现扰动数据，故稳定输出后（数据长度大于3）Python开始接收数据，判断运动方向，通过判断结果实现人物的移动。

::: {.zhangyue-c}
![CmQUOF7Vz8SEV8VAAAAAAN3_I1A827137956.jpg](https://i.imgur.com/zhI5vKb.jpeg){.zhangyue-img4}

图4-2　系统流程图
:::

#### 3．总电路图 {.text-title1}

总电路如图4-3所示，引脚连接如表4-1所示。

::: {.zhangyue-c}
表4-1　引脚连接表

![CmQUOF7Vz9KEHQYgAAAAAMPnU3Y356514768.jpg](https://i.imgur.com/DlDAqxu.jpeg){.zhangyue-img}
:::

::: {.zhangyue-c}
![CmQUOV7Vz8SEGNrmAAAAAOQtvBY745665356.jpg](https://i.imgur.com/yfIcuhI.jpeg){.zhangyue-img}

图4-3　总电路图
:::
:::

[]{#chapter-23.xhtml}

::: {.calibre1}
## 4.2　模块介绍 {.tpl-185-title}

::: {.tpl-185-box-cuxian}
:::

::: {.tpl-185-box-middle}
:::

本项目主要包括Arduino开发板角度采集模块、蓝牙模块、控制模块和游戏模块。下面分别给出各模块的功能介绍及相关代码。

### 4.2.1　角度数据采集模块 {#chapter-23.xhtml#AUTO_ID_33 .text-title}

本部分包括姿态角度传感器JY-61P的功能介绍及相关代码。

#### 1．功能介绍 {.text-title1}

JY-61P内部集成了姿态解算模块配合卡尔曼滤波算法，在动态环境输出当前的姿态。该模块支持串口和I ^2^ C两种通信模式，经实测，该传感器在上位机设置时回传速率应尽量与通信波特率保持一定的关系，例如115200的波特率对应10Hz的回传速率，9600的波特率对应2Hz左右的回传速率才不会在角度发生变化时，观测的数据有延迟发生。

Arduino IDE环境下已经有了库文件，直接调用相关的函数即可获取输出数据，包括角速度、加速度以及已解算好的角度。由于本项目基于头部运动控制游戏，快速转动头部可能会有不适，因此缓慢运动下的角速度与加速度因数据传输的原因（回传数据不连续，有断层），实际测试中不能很好地用于判断头部运动，因此采用了角度数据判定方向。

JY-61P与Arduino开发板1串口相连（详见表4-1），通过烧录的程序即可调取传感器获得的数据存储在Arduino开发板等待被发送。元件包括JY-61P模块、Arduino开发板和导线若干，电路如图4-4所示。

#### 2．相关代码 {.text-title1}

::: {.zhangyue-c}
![CmQUOF7Vz8SETWiFAAAAAFldfJQ052547278.jpg](https://i.imgur.com/a1yrb6n.jpeg){.zhangyue-img}
:::

::: {.zhangyue-c}
![CmQUOV7Vz8SEXAe4AAAAAG_FH78240686536.jpg](https://i.imgur.com/vTCGx9W.jpeg){.zhangyue-img}

图4-4　JY-61P与Arduino开发板连线图
:::

### 4.2.2　蓝牙模块 {#chapter-23.xhtml#AUTO_ID_34 .text-title}

本部分包括HC-05蓝牙模块的功能介绍及相关代码。

#### 1．功能介绍 {.text-title1}

HC-05蓝牙模块从JY-61P传感器获得的数据通过蓝牙串口传输给计算机等待下一步的处理。计算机在与HC-05配对成功时，自动完成相关的通信，通过计算机的蓝牙设置确定通信用于后续监视。

蓝牙模块的设置方法如下，长按按钮给蓝牙模块接电进入AT模式，AT模式下的通信波特率为固有的38400，进入该模式后可以通过一些指令修改蓝牙模块的属性（详见代码）。但需要注意，在修改蓝牙模块属性的过程中，每次修改成功时将返回OK，一次修改的蓝牙属性数不超过3个，小于2个最佳，否则会报error。

蓝牙模块使用时，若连接多串口的单片机，应将蓝牙接入级别最高的串口（等同USB），例如，Arduino开发板的Rx0和Tx0串口。元件包括HC-05蓝牙模块、Arduino开发板和导线若干，电路如图4-5所示。

::: {.zhangyue-c}
![CmQUOV7Vz8SEPt7nAAAAAEJVe-c237358523.jpg](https://i.imgur.com/3N4TfLl.jpeg){.zhangyue-img1}

图4-5　HC-05与Arduino开发板连线图
:::

#### 2．相关代码 {.text-title1}

::: {.zhangyue-c}
![CmQUOV7Vz8SEPOAtAAAAAOUf-lI725339564.jpg](https://i.imgur.com/V1Hug2z.jpeg){.zhangyue-img}
:::

::: {.zhangyue-c}
![CmQUOV7Vz8WEe0xRAAAAAJUdjVs386097511.jpg](https://i.imgur.com/iKK0Dkn.jpeg){.zhangyue-img}
:::

### 4.2.3　控制模块 {#chapter-23.xhtml#AUTO_ID_35 .text-title}

本部分包括控制模块的功能介绍及相关代码。

#### 1．功能介绍 {.text-title1}

串口中包含x、y、z三个方向的角度数据，由于头的运动以轴向为主，因此，每次仅有一个方向的角度在转动方向相反时，角度数据也发生相反的变化。其中，输出左右包含两种转动方式：一种是保持带上发带时正面基本不动，左右侧向运动，此时z轴输出角度呈相反变化；另一种是以颈部为旋转轴，绕轴左右转动，此时y轴的输出角度也呈相反变化。

输出上下可正常点头，x轴的输出角度呈相反变化（上减下增）。

判断方向算法是从转动的初始位置向某个方向转动并回到初始位置为一次判断过程，将接收到的角度数据分别传到3个数组中，对需要判断的数组进行排序，通过变化的幅度判断是否完成了一次过程以及转动的方向。每次判断完成后清空数组，跳出循环。

#### 2．相关代码 {.text-title1}

::: {.zhangyue-c}
![CmQUOF7Vz8WEWalOAAAAAFdIB6o781557253.jpg](https://i.imgur.com/hccqS6e.jpeg){.zhangyue-img}
:::

::: {.zhangyue-c}
![CmQUOF7Vz8WEFvunAAAAAAcZZQo133780705.jpg](https://i.imgur.com/ao5uYok.jpeg){.zhangyue-img}
:::

::: {.zhangyue-c}
![CmQUOV7Vz8WEMtf3AAAAAPXQlBs100428490.jpg](https://i.imgur.com/14HORST.jpeg){.zhangyue-img}
:::

::: {.zhangyue-c}
![CmQUOV7Vz8WEHWIFAAAAAKH_SFs090464792.jpg](https://i.imgur.com/Q2jzZlx.jpeg){.zhangyue-img}
:::

::: {.zhangyue-c}
![CmQUOV7Vz8WEN6zOAAAAAG_-Q3Y254479180.jpg](https://i.imgur.com/QvzKHLy.jpeg){.zhangyue-img}
:::

### 4.2.4　游戏模块 {#chapter-23.xhtml#AUTO_ID_36 .text-title}

本部分包括游戏模块的功能介绍及相关代码。

#### 1．功能介绍 {.text-title1}

该项目的PC端是基于Python语言pygame库文件，编写的经典网页游戏魔塔（50层）的一个简化版本（4层）。用户通过戴上发带，控制魔塔游戏中的勇士，在险象环生的一层层魔塔中寻找通往下一层的途径，在冒险过程中控制好开门的钥匙数量、勇士的血量、攻击力、防御力等是通关的关键。游戏过程中吃到药瓶和宝石会增加生命值、攻击力、防御力等。与怪物的战斗中，采用回合制的计数原理。分别用自身的攻击力减去与之对战防御力受到的伤害。之后分别用血量一次次地减掉受到的伤害直到一方血量置零。因此，在此游戏的进行中攻击力和防御力是极为重要的因素。若先增加攻击力和防御力可以减少受到的伤害值，从而更好地进行游戏。

在整个游戏设计的过程中，我们保留了魔塔的像素风格，并通过3位数组存储4层魔塔的地图，外层为魔塔的层数，内层则为2D平面，并在相应的地方存放了游戏的道具，墙、门、楼梯等。此外，我们在游戏内一些地方加了动画渲染和音效，用户在运行游戏时首先进入欢迎界面，阅读操作提示，进入游戏。开始游戏冒险之后，需要通过一定的操作才能最终战胜强大的BOSS。

#### 2．相关代码 {.text-title1}

::: {.zhangyue-c}
![CmQUOV7Vz8WEOmlcAAAAAHLpDFs072176685.jpg](https://i.imgur.com/e5Lk067.jpeg){.zhangyue-img}
:::

::: {.zhangyue-c}
![CmQUOV7Vz8WEAVw4AAAAAJEQQcI101341666.jpg](https://i.imgur.com/bW3323O.jpeg){.zhangyue-img}
:::

::: {.zhangyue-c}
![CmQUOF7Vz8WEeN6vAAAAADNZk4g604548289.jpg](https://i.imgur.com/QDXOJCr.jpeg){.zhangyue-img}
:::

::: {.zhangyue-c}
![CmQUOF7Vz8WEJIJEAAAAAHpxUws502656008.jpg](https://i.imgur.com/TeSguWU.jpeg){.zhangyue-img}
:::

::: {.zhangyue-c}
![CmQUOV7Vz8WEepYmAAAAAMeS6-o923946244.jpg](https://i.imgur.com/jkTIzu3.jpeg){.zhangyue-img}
:::

::: {.zhangyue-c}
![CmQUOV7Vz8WEYBWMAAAAAKVMZYk010582703.jpg](https://i.imgur.com/CmhAxKz.jpeg){.zhangyue-img}
:::

::: {.zhangyue-c}
![CmQUOF7Vz8WECR1IAAAAANQbuEE902919269.jpg](https://i.imgur.com/tNcfDK5.jpeg){.zhangyue-img}
:::

::: {.zhangyue-c}
![CmQUOV7Vz8WEVv5lAAAAAJYfD0Y004605108.jpg](https://i.imgur.com/Sv6Yhbq.jpeg){.zhangyue-img}
:::

::: {.zhangyue-c}
![CmQUOV7Vz8WEI7gpAAAAAJjPwzE017562764.jpg](https://i.imgur.com/qty8DjV.jpeg){.zhangyue-img}
:::

::: {.zhangyue-c}
![CmQUOF7Vz8WED9cvAAAAADQcX58350368869.jpg](https://i.imgur.com/pxViUVd.jpeg){.zhangyue-img}
:::

::: {.zhangyue-c}
![CmQUOF7Vz8WEBTNpAAAAAN7tBSM087040663.jpg](https://i.imgur.com/U8FkJeO.jpeg){.zhangyue-img}
:::

::: {.zhangyue-c}
![CmQUOV7Vz8WEMYDTAAAAAByBGV0242715114.jpg](https://i.imgur.com/VDeu2cp.jpeg){.zhangyue-img}
:::

::: {.zhangyue-c}
![CmQUOV7Vz8WEWmMjAAAAABknZS0361216033.jpg](https://i.imgur.com/GqMrqK6.jpeg){.zhangyue-img}
:::

::: {.zhangyue-c}
![CmQUOF7Vz8WEJT0uAAAAANmf-A0901120955.jpg](https://i.imgur.com/HS1E0aq.jpeg){.zhangyue-img}
:::

::: {.zhangyue-c}
![CmQUOF7Vz8WENKWcAAAAAEJlYwc878783782.jpg](https://i.imgur.com/2FmsSIn.jpeg){.zhangyue-img}
:::

::: {.zhangyue-c}
![CmQUOV7Vz8aEHHGlAAAAACYDEHo865962596.jpg](https://i.imgur.com/Xw6sIfV.jpeg){.zhangyue-img}
:::

::: {.zhangyue-c}
![CmQUOF7Vz8aEIntBAAAAAHa_Cnk553981271.jpg](https://i.imgur.com/X4nlSfd.jpeg){.zhangyue-img}
:::
:::

[]{#chapter-24.xhtml}

::: {.calibre1}
## 4.3　产品展示 {.tpl-185-title}

::: {.tpl-185-box-cuxian}
:::

::: {.tpl-185-box-middle}
:::

产品整体外观如图4-6所示，实物连接如图4-7所示，游戏欢迎界面如图4-8所示，魔塔第一层如图4-9所示，魔塔第二层如图4-10所示，魔塔第三层如图4-11所示，魔塔第四层如图4-12所示，通关界面如图4-13所示。

::: {.zhangyue-c}
![CmQUOV7Vz8aEJllIAAAAAD7fHfA399844180.jpg](https://i.imgur.com/Hr0tFvw.jpeg){.zhangyue-img1}

图4-6　整体外观图
:::

::: {.zhangyue-c}
![CmQUOF7Vz8aEFnBnAAAAAPoADhU489089266.jpg](https://i.imgur.com/c5WcmLY.jpeg){.zhangyue-img}

图4-7　实物连接图
:::

::: {.zhangyue-c}
![CmQUOV7Vz8aEW4SoAAAAAEewrSA016319706.jpg](https://i.imgur.com/hX64iQz.jpeg){.zhangyue-img}

图4-8　游戏欢迎界面图
:::

::: {.zhangyue-c}
![CmQUOF7Vz8aEFnXnAAAAANMhmNQ423772328.jpg](https://i.imgur.com/uhnuxoI.jpeg){.zhangyue-img1}

图4-9　魔塔第一层图
:::

::: {.zhangyue-c}
![CmQUOF7Vz8aENRBCAAAAAOtABu0844983332.jpg](https://i.imgur.com/3w4VBzE.jpeg){.zhangyue-img1}

图4-10　魔塔第二层图
:::

::: {.zhangyue-c}
![CmQUOV7Vz8aEYrCOAAAAAAEJda4226855101.jpg](https://i.imgur.com/dOV8tUR.jpeg){.zhangyue-img1}

图4-11　魔塔第三层图
:::

::: {.zhangyue-c}
![CmQUOF7Vz8aESA4JAAAAAE_ZsqA563370110.jpg](https://i.imgur.com/63a4HFI.jpeg){.zhangyue-img1}

图4-12　魔塔第四层图
:::

::: {.zhangyue-c}
![CmQUOV7Vz8aEMs6LAAAAAN8sdW0413300648.jpg](https://i.imgur.com/CpT7B0x.jpeg){.zhangyue-img}

图4-13　通关界面图
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

![CmQUOV7Vz9KEA7ftAAAAAHe1VOU884741549.jpg](https://i.imgur.com/QlFNWcg.jpeg){.zhangyue-img}
:::
:::

[]{#chapter-26.xhtml}

::: {.h5_mainbody_bg1}
::: {.h5_rule_hv}
# 第5章 {.tpl-133-text-1-num}

::: {.tpl-133-div-line}
# 带游戏手柄的2048小游戏项目设计 ![CmQUOF7Vz9SEEELAAAAAAF19EmE719769063.png](https://i.imgur.com/XJvkfBG.jpeg){.zhangyue-footnote} {.tpl-133-title-1-center}
:::

::: {.tpl-133-pic-center}
![CmQUOF7Vz9SEE6btAAAAALGIiMg316210040.png](https://i.imgur.com/HxMX9vN.jpeg){.tpl-133-pic-img-h}
:::
:::
:::

::: {.calibre1}
本项目基于Arduino平台设计一款带有无线游戏手柄的网页端2048小游戏，实现远距离懒人操控。
:::

[]{#chapter-27.xhtml}

::: {.calibre1}
## 5.1　功能及总体设计 {.tpl-185-title}

::: {.tpl-185-box-cuxian}
:::

::: {.tpl-185-box-middle}
:::

本项目通过摇杆和按钮对本地2048小游戏进行操作。摇杆向左相当于按左键，摇杆向右相当于按右键，摇杆向上相当于按上键，摇杆向下相当于按下键，三个按钮实现选择游戏模式的功能，最后一个按钮实现帮助功能；不带游戏手柄的网页端2048小游戏，既可以在计算机也可以在手机上操作，灵活方便。

要实现上述功能需将作品分成三部分进行设计，即输入部分、传输部分和主程序部分。输入部分选用了四个按钮和一个PS2摇杆，构成游戏手柄的主要外观部分。传输部分将一个蓝牙模块置于无线游戏手柄之中，接收手柄数据，另一个蓝牙模块连接在PC端，二者之间进行数据传输，PC端从串口读取数据。主程序部分一是利用Python程序对串口数据进行接收，Selenium WebDriver的一系列功能打开游戏网页，并进行操控；二是构建网页，使用HTML、CSS以及JavaScript代码语言构建2048小游戏，最后结果由网页端2048小游戏呈现。

#### 1．整体框架图 {.text-title1}

整体框架如图5-1所示。

::: {.zhangyue-c}
![CmQUOF7Vz8aEGs3rAAAAAJIr59w640686227.jpg](https://i.imgur.com/8e7ytE1.jpeg){.zhangyue-img}

图5-1　整体框架图
:::

#### 2．系统流程图 {.text-title1}

蓝牙配对原理如图5-2所示；系统流程如图5-3所示；2048小游戏系统流程如图5-4所示。

::: {.zhangyue-c}
![CmQUOV7Vz8aEVchBAAAAAMr7RYg152677200.jpg](https://i.imgur.com/WOlQD66.jpeg){.zhangyue-img}

图5-2　蓝牙配对原理图
:::

::: {.zhangyue-c}
![CmQUOF7Vz8aEKNH0AAAAAHHRqHo982900475.jpg](https://i.imgur.com/zkDfVLv.jpeg){.zhangyue-img4}

图5-3　系统流程图
:::

#### 3．总电路图 {.text-title1}

PS2摇杆GND引脚连接Arduino开发板的GND引脚，摇杆正极引脚连接Arduino开发板的5V电源，VRX接Arduino开发板的引脚A0，VRY接Arduino开发板的引脚A1，SW接Arduino开发板的引脚A2。

按键1GND引脚连接Arduino开发板的GND引脚，按键1正极引脚连接Arduino开发板的5V电源，OUT引脚接Arduino开发板的引脚2。

按键2GND引脚连接Arduino开发板的GND引脚，按键2正极引脚连接Arduino开发板的5V电源，OUT引脚接Arduino开发板的引脚4。

按键3GND引脚连接Arduino开发板的GND引脚，按键3正极引脚连接Arduino开发板的5V电源，OUT引脚接Arduino开发板的引脚7。

::: {.zhangyue-c}
![CmQUOF7Vz8aESPAuAAAAABoO1uE433808342.jpg](https://i.imgur.com/Ry5W4Ku.jpeg){.zhangyue-img1}

图5-4　2048小游戏系统流程图
:::

按键4GND引脚连接Arduino开发板的GND引脚，按键4正极引脚连接Arduino开发板的5V电源，OUT引脚接Arduino开发板的引脚8。

HC-05主机蓝牙模块GND引脚连接Arduino开发板的GND引脚，VCC引脚连接Arduino开发板的5V电源，TXD引脚接Arduino开发板的RX引脚，RXD引脚接Arduino开发板的TX引脚，从机模块与主机模块接法相同。

整体引脚连接如表5-1所示。

::: {.zhangyue-c}
表5-1　引脚连接表

![CmQUOV7Vz9KEbTrYAAAAAGwRosU983015096.jpg](https://i.imgur.com/uGawmla.jpeg){.zhangyue-img}
:::

本部分完成两个功能：其一，主机蓝牙接收摇杆、按键发出的数据并传到从机蓝牙，电路如图5-5所示。从机蓝牙的串口监视器显示出四个按键的状态值和摇杆的三个属性值。按键按下显示1，松开显示0。摇杆向规定的左方或上方滑动时，输出电压值x或y减小，直至为0；摇杆向规定的右方或下方滑动时，输出电压值x或y增大，直至为四位数；摇杆向下按下时，输出z变为0。其二，实现HC-05蓝牙模块之间的配对，电路如图5-6所示，蓝牙指示灯每秒连续闪烁两次即为配对成功。

::: {.zhangyue-c}
![CmQUOV7Vz8aEbCxgAAAAAOuIOYM486465006.jpg](https://i.imgur.com/gP5rKeJ.jpeg){.zhangyue-img}

图5-5　游戏手柄电路连接图
:::

::: {.zhangyue-c}
![CmQUOV7Vz8aEFjV5AAAAAIV8CkE702678216.jpg](https://i.imgur.com/P7yJSHc.jpeg){.zhangyue-img}

图5-6　蓝牙模块配对的电路连接图
:::
:::

[]{#chapter-28.xhtml}

::: {.calibre1}
## 5.2　模块介绍 {.tpl-185-title}

::: {.tpl-185-box-cuxian}
:::

::: {.tpl-185-box-middle}
:::

本项目主要包括主程序模块、输入模块和传输模块。下面分别给出各模块的功能介绍及相关代码。

### 5.2.1　主程序模块 {#chapter-28.xhtml#AUTO_ID_37 .text-title}

本部分包括主程序模块的功能介绍及相关代码。

#### 1．功能介绍 {.text-title1}

主程序模块分为两部分，使用计算机完成。

第一部分由Python读取PC端的从机蓝牙模块接收串口数据，并对数据进行处理，得到操作信息，再利用Selenium WebDriver的一系列功能打开游戏网页并进行操控。Python数据传输过程如图5-7所示。

::: {.zhangyue-c}
![CmQUOV7Vz8aEXXj7AAAAAA8VgxI573248404.jpg](https://i.imgur.com/8mzyqge.jpeg){.zhangyue-img}

图5-7　Python数据传输过程
:::

第二部分由HTML、CSS和JavaScript完成前端代码书写，实现网页端2048小游戏的界面、内部逻辑设计以及呈现动画。整个2048小游戏共由五部分组成，分别是：HTML和CSS负责页面的展示效果；JavaScript控制游戏运行的指令转换后得到操作信息逻辑，动画效果增加游戏的可玩性；底层的函数封装提供整个逻辑层调用；数据较为简单并入逻辑中。具体游戏框架如图5-8所示。

::: {.zhangyue-c}
![CmQUOF7Vz8aESvJvAAAAAKHffAM375469018.jpg](https://i.imgur.com/xlqhuPq.jpeg){.zhangyue-img}

图5-8　游戏框架图
:::

#### 2．相关代码 {.text-title1}

1）HTML部分（index.html）的代码

::: {.zhangyue-c}
![CmQUOF7Vz8aEIuljAAAAAAYTt8o426805734.jpg](https://i.imgur.com/MOv1VcO.jpeg){.zhangyue-img}
:::

2）CSS部分（index.css）的代码

::: {.zhangyue-c}
![CmQUOF7Vz8aEJqnsAAAAALL2-rA965650688.jpg](https://i.imgur.com/22PW1Oh.jpeg){.zhangyue-img1}
:::

::: {.zhangyue-c}
![CmQUOV7Vz8aEKoSGAAAAAAlECgs247553270.jpg](https://i.imgur.com/YhrZ8g7.jpeg){.zhangyue-img}
:::

3）JavaScript主函数部分（main2048.js）的代码

::: {.zhangyue-c}
![CmQUOF7Vz8aEI6iXAAAAAJeIk6s942765279.jpg](https://i.imgur.com/e8MIR5o.jpeg){.zhangyue-img}
:::

::: {.zhangyue-c}
![CmQUOF7Vz8aEKy5cAAAAAAvtK2k574561507.jpg](https://i.imgur.com/SitwsnC.jpeg){.zhangyue-img}
:::

::: {.zhangyue-c}
![CmQUOV7Vz8aEbllIAAAAAOAxrhQ410304642.jpg](https://i.imgur.com/xRhgHLI.jpeg){.zhangyue-img}
:::

::: {.zhangyue-c}
![CmQUOF7Vz8aEY_K6AAAAAHGFyj4360627197.jpg](https://i.imgur.com/fSfGkBh.jpeg){.zhangyue-img}
:::

::: {.zhangyue-c}
![CmQUOF7Vz8aEYZLmAAAAAIn05rs433439097.jpg](https://i.imgur.com/Qwvwbd0.jpeg){.zhangyue-img}
:::

::: {.zhangyue-c}
![CmQUOV7Vz8aEM8zUAAAAAFt0JDg476297223.jpg](https://i.imgur.com/VIRWeVJ.jpeg){.zhangyue-img}
:::

::: {.zhangyue-c}
![CmQUOF7Vz8aESzO2AAAAAOZfqfw604438375.jpg](https://i.imgur.com/ux1f2mX.jpeg){.zhangyue-img}
:::

::: {.zhangyue-c}
![CmQUOV7Vz8eEdx-SAAAAAMSJjVc495283935.jpg](https://i.imgur.com/sp3brbL.jpeg){.zhangyue-img}
:::

::: {.zhangyue-c}
![CmQUOV7Vz8eEFO0UAAAAAEUOazI529749397.jpg](https://i.imgur.com/s4eMQbY.jpeg){.zhangyue-img}
:::

::: {.zhangyue-c}
![CmQUOV7Vz8eEDumZAAAAABYOOO8738180429.jpg](https://i.imgur.com/U18aidW.jpeg){.zhangyue-img}
:::

::: {.zhangyue-c}
![CmQUOF7Vz8eEaisqAAAAAA6L-Vc258942696.jpg](https://i.imgur.com/b2oSncd.jpeg){.zhangyue-img}
:::

::: {.zhangyue-c}
![CmQUOV7Vz8eEG74VAAAAAJHcxRg551555399.jpg](https://i.imgur.com/PhdBtrt.jpeg){.zhangyue-img}
:::

4）底层函数封装的JavaScript部分（support2048.js）代码

::: {.zhangyue-c}
![CmQUOV7Vz8eEKojSAAAAAFBF-gA414552184.jpg](https://i.imgur.com/PPiJQdK.jpeg){.zhangyue-img}
:::

::: {.zhangyue-c}
![CmQUOF7Vz8eEAvtRAAAAAPqjYcg949694965.jpg](https://i.imgur.com/t2Ba7e8.jpeg){.zhangyue-img}
:::

::: {.zhangyue-c}
![CmQUOV7Vz8eEYNLXAAAAAOMmmgw366327283.jpg](https://i.imgur.com/yQAm4FM.jpeg){.zhangyue-img}
:::

::: {.zhangyue-c}
![CmQUOF7Vz8eEbiPJAAAAADOJhpg246899615.jpg](https://i.imgur.com/NMbrshG.jpeg){.zhangyue-img}
:::

5）动画效果的JavaScript部分（showanimation2048.js）代码

::: {.zhangyue-c}
![CmQUOV7Vz8eEVCx-AAAAAAXGtek977925366.jpg](https://i.imgur.com/k2tE89V.jpeg){.zhangyue-img}
:::

6）Python部分的代码

::: {.zhangyue-c}
![CmQUOF7Vz8eEQu1QAAAAAKEapzc779373367.jpg](https://i.imgur.com/AMK9MQ3.jpeg){.zhangyue-img}
:::

::: {.zhangyue-c}
![CmQUOF7Vz8eEa29WAAAAAB3vStw723264199.jpg](https://i.imgur.com/eDuXS38.jpeg){.zhangyue-img}
:::

::: {.zhangyue-c}
![CmQUOF7Vz8eEav-1AAAAAB2tX1M739280257.jpg](https://i.imgur.com/sO3b6Sx.jpeg){.zhangyue-img}
:::

### 5.2.2　输入模块 {#chapter-28.xhtml#AUTO_ID_38 .text-title}

本部分包括输入模块的功能介绍及相关代码。

#### 1．功能介绍 {.text-title1}

输入模块由一个PS2摇杆模块和四个按钮模块组成，并将其连接到游戏手柄端的Arduino开发板上。

PS2摇杆模块包含x、y、z三个属性值：当摇杆向右方或上方时，输出电压值x或y减小，直至为0；摇杆向规定的左方或下方时，输出电压值x或y增大，直至为四位数；摇杆向下按时，输出z变为0。摇杆向左滑动相当于按左键，向右滑动相当于按右键，向上滑动相当于按上键，向下滑动相当于按下键。

按钮模块仅包含两种状况，按下显示高电平，不按显示低电平。三个按钮分别实现对三种游戏模式的选择功能，最后一个按钮实现帮助功能以及关闭弹窗的功能。

#### 2．相关代码 {.text-title1}

1）按钮模块测试代码

::: {.zhangyue-c}
![CmQUOV7Vz8eEN_SlAAAAAMPq06k508841739.jpg](https://i.imgur.com/fOoJxeN.jpeg){.zhangyue-img}
:::

2）PS2摇杆模块测试代码

::: {.zhangyue-c}
![CmQUOF7Vz8eEEvu_AAAAAOeRS20521353036.jpg](https://i.imgur.com/z5WxnNU.jpeg){.zhangyue-img}
:::

### 5.2.3　传输模块 {#chapter-28.xhtml#AUTO_ID_39 .text-title}

本部分包括传输模块的功能介绍及相关代码。

#### 1．功能介绍 {.text-title1}

传输模块主要包含Arduino开发板、2个HC-05蓝牙模块、1个可充电式锂电池电源、1个面包板和若干导线。

其中，Arduino开发板和HC-05蓝牙模块（作为从机使用）置于PC端，由计算机供电，主要用于接收游戏手柄端传来的串口数据，并将其反馈给PC端。

另一块Arduino开发板和1个HC-05蓝牙模块（作为主机使用）置于游戏手柄端，由可充电式锂电池进行供电，主要用于接收PS2摇杆模块和按钮模块输入的信息，并将其打包传输给PC端的从机蓝牙模块。

#### 2．相关代码 {.text-title1}

1）HC-05蓝牙模块的配对代码（以主机为例）

::: {.zhangyue-c}
![CmQUOF7Vz8eEDV-wAAAAAC4CcWk871859622.jpg](https://i.imgur.com/KkHqT0Q.jpeg){.zhangyue-img}
:::

::: {.zhangyue-c}
![CmQUOV7Vz8eERUpzAAAAALrbfog043996213.jpg](https://i.imgur.com/yjAzSqZ.jpeg){.zhangyue-img}
:::

代码相关功能注释如下：

串口发送AT＋ROLE＝1，设为主机，发送AT＋ROLE＝0，设为从机，成功返回OK。

向串口发送AT＋ADDR？操作指令，收到模块的MAC地址，为主、从机的地址绑定使用。

向主机串口中发送AT＋BIND＝"从机地址"，绑定从机的MAC地址，同样用此方法让从机绑定主机MAC地址。

发送AT＋CMODE＝0将主从机设为指定蓝牙地址连接模式。

2）主机蓝牙模块的数据传输代码

::: {.zhangyue-c}
![CmQUOF7Vz8eEfvHqAAAAAAslSKY687306859.jpg](https://i.imgur.com/GwuOts9.jpeg){.zhangyue-img1}
:::

3）从机蓝牙模块的数据接收代码

::: {.zhangyue-c}
![CmQUOV7Vz8eEBLafAAAAAOMAhts294705238.jpg](https://i.imgur.com/4UuY75x.jpeg){.zhangyue-img}
:::
:::

[]{#chapter-29.xhtml}

::: {.calibre1}
## 5.3　产品展示 {.tpl-185-title}

::: {.tpl-185-box-cuxian}
:::

::: {.tpl-185-box-middle}
:::

PC网页端展示成果如图5-9所示，手机网页端成果展示如图5-10所示。含硬件的2048小游戏展示如图5-11所示：左边为输入部分，包含按钮和摇杆；中间为Arduino开发板和HC-05蓝牙模块，是传输部分；右边为计算机输出。封装后的产品效果如图5-12所示。以PC端为例，经典模式初始化如图5-13所示，进阶模式初始化如图5-14所示，除法模式初始化如图5-15所示，游戏帮助如图5-16所示，游戏结束gameover如图5-17所示，游戏结束congratulations（实际游戏中在经典模式下合成8192，但图5-17为了方便临时改成了2048）如图5-18所示，游戏结束congratulations后继续游戏如图5-19所示。

::: {.zhangyue-c}
![CmQUOF7Vz8eEIRdtAAAAAO3CA-4398934222.jpg](https://i.imgur.com/TlJeaCw.jpeg){.zhangyue-img}

图5-9　计算机网页端成果展示图
:::

::: {.zhangyue-c}
![CmQUOV7Vz8eEEcuEAAAAAHnDhVE258667486.jpg](https://i.imgur.com/8ZiToE3.jpeg){.zhangyue-img2}

图5-10　手机网页端成果展示图
:::

::: {.zhangyue-c}
![CmQUOF7Vz8eEI74oAAAAANLOCR4369525793.jpg](https://i.imgur.com/UrDjCS2.jpeg){.zhangyue-img1}

图5-11　含硬件的2048小游戏成果展示图
:::

::: {.zhangyue-c}
![CmQUOV7Vz8eERLaAAAAAANE5U4Y480294267.jpg](https://i.imgur.com/D1gtRXG.jpeg){.zhangyue-img1}

图5-12　封装后的产品效果图
:::

::: {.zhangyue-c}
![CmQUOF7Vz8eEHu_4AAAAAKDrW0I118117646.jpg](https://i.imgur.com/rJ99S8C.jpeg){.zhangyue-img}

图5-13　经典模式初始化图
:::

::: {.zhangyue-c}
![CmQUOF7Vz8eECc7iAAAAAB6I2-s061202939.jpg](https://i.imgur.com/7mzXCDE.jpeg){.zhangyue-img}

图5-14　进阶模式初始化图
:::

::: {.zhangyue-c}
![CmQUOV7Vz8eEB8mMAAAAAPZKEDI313077702.jpg](https://i.imgur.com/3ZQ22XB.jpeg){.zhangyue-img}

图5-15　除法模式初始化图
:::

::: {.zhangyue-c}
![CmQUOV7Vz8eERiu3AAAAAEV5W4M328004853.jpg](https://i.imgur.com/LyEVVoA.jpeg){.zhangyue-img}

图5-16　游戏帮助图
:::

::: {.zhangyue-c}
![CmQUOF7Vz8eEGgixAAAAAI0dFmk461814125.jpg](https://i.imgur.com/EdaV51Y.jpeg){.zhangyue-img}

图5-17　游戏结束gameover效果图
:::

::: {.zhangyue-c}
![CmQUOV7Vz8eEWYzLAAAAAJpADKY309109240.jpg](https://i.imgur.com/WtNd0yw.jpeg){.zhangyue-img}

图5-18　游戏结束congratulations效果图
:::

::: {.zhangyue-c}
![CmQUOV7Vz8eEWqM8AAAAADUZBUI329696528.jpg](https://i.imgur.com/GeC8Bwk.jpeg){.zhangyue-img}

图5-19　游戏结束congratulations后继续游戏图
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

![CmQUOF7Vz9KETM50AAAAADK5IbY774171899.jpg](https://i.imgur.com/c03aHip.jpeg){.zhangyue-img}
:::
:::

[]{#chapter-31.xhtml}

::: {.h5_mainbody_bg1}
::: {.h5_rule_hv}
# 第6章 {.tpl-133-text-1-num}

::: {.tpl-133-div-line}
# 贪吃蛇游戏机项目设计 ![CmQUOF7Vz9SEEELAAAAAAF19EmE719769063.png](https://i.imgur.com/XmPth9e.jpeg){.zhangyue-footnote} {.tpl-133-title-1-center}
:::

::: {.tpl-133-pic-center}
![CmQUOF7Vz9SEE6btAAAAALGIiMg316210040.png](https://i.imgur.com/KSS3twM.jpeg){.tpl-133-pic-img-h}
:::
:::
:::

::: {.calibre1}
本项目基于Arduino开发板调用支持多款点阵显示屏的u8glib库，利用OLED显示屏进行游戏设计，给玩家一种简单直观的贪吃蛇游戏体验。
:::

[]{#chapter-32.xhtml}

::: {.calibre1}
## 6.1　功能及总体设计 {.tpl-185-title}

::: {.tpl-185-box-cuxian}
:::

::: {.tpl-185-box-middle}
:::

本项目通过对贪吃蛇小游戏的简单复刻，实现很多人传统记忆上的操作模式，使用简单的按键操纵，在已知操作方式的前提下，能够很快体验游戏。在技术允许的情况下，可以实现不同玩家的数据交互。

要实现上述功能需将作品分成四部分进行设计，即显示部分、处理部分、输入部分和输出部分。显示部分主要通过u8glib库调用点阵显示实现汉字和图形的输入，选用0.96英寸OLED模块配合Arduino开发板实现；输入和处理部分主要通过C++程序通过按键实现基本方向和选择操作。

#### 1．整体框架图 {.text-title1}

整体框架如图6-1所示。

::: {.zhangyue-c}
![CmQUOF7Vz8iEYJf4AAAAAA46mMc874774920.jpg](https://i.imgur.com/6oqaM3T.jpeg){.zhangyue-img}

图6-1　整体框架图
:::

#### 2．系统流程图 {.text-title1}

系统流程如图6-2所示。

#### 3．总电路图 {.text-title1}

总电路如图6-3所示，引脚连接如表6-1所示。左侧按键按照上下左右的方式排列，分别对应同样的方向，右侧两个按键的功能是选择。

::: {.zhangyue-c}
![CmQUOF7Vz8iEeiWLAAAAAAqPr1w514027707.jpg](https://i.imgur.com/mUtHZZh.jpeg){.zhangyue-img2}

图6-2　系统流程图
:::

::: {.zhangyue-c}
![CmQUOF7Vz8iEAaAoAAAAACZpY3U388446624.jpg](https://i.imgur.com/GQ1mncK.jpeg){.zhangyue-img}

图6-3　总电路图
:::

::: {.zhangyue-c}
表6-1　引脚连接表

![CmQUOF7Vz9KEPUbYAAAAADaIMnk399262207.jpg](https://i.imgur.com/19dSwqw.jpeg){.zhangyue-img}
:::
:::

[]{#chapter-33.xhtml}

::: {.calibre1}
## 6.2　模块介绍 {.tpl-185-title}

::: {.tpl-185-box-cuxian}
:::

::: {.tpl-185-box-middle}
:::

本项目主要包括主程序模块、输入模块和显示模块。下面分别给出各模块的功能介绍及相关代码。

### 6.2.1　主程序模块 {#chapter-33.xhtml#AUTO_ID_40 .text-title}

本部分包括主程序模块的功能介绍及相关代码。

#### 1．功能介绍 {.text-title1}

模块通电后进入欢迎界面，按方向键上、下，可以选择snake或者player，按下A键，进入相应的界面。snake为贪吃蛇游戏，player为按键信息。

进入游戏界面后，通过C++代码实现对上下左右控制方向的判断，判断是否吃到食物加分，是否触壁死亡。

#### 2．相关代码 {.text-title1}

::: {.zhangyue-c}
![CmQUOF7Vz8iEXvL_AAAAAHK_Tas594504756.jpg](https://i.imgur.com/gc8hz2v.jpeg){.zhangyue-img}
:::

::: {.zhangyue-c}
![CmQUOV7Vz8iEHtryAAAAAA3HkHo498553385.jpg](https://i.imgur.com/qZgAxyE.jpeg){.zhangyue-img}
:::

::: {.zhangyue-c}
![CmQUOF7Vz8iEPP28AAAAAEDfW9k039823151.jpg](https://i.imgur.com/jeqlp4g.jpeg){.zhangyue-img}
:::

::: {.zhangyue-c}
![CmQUOF7Vz8iEN5CxAAAAAML6p44677187337.jpg](https://i.imgur.com/82vvYjZ.jpeg){.zhangyue-img}
:::

::: {.zhangyue-c}
![CmQUOV7Vz8iEbymQAAAAAPja5k4907841834.jpg](https://i.imgur.com/a0wsktS.jpeg){.zhangyue-img}
:::

::: {.zhangyue-c}
![CmQUOF7Vz8iECrgeAAAAAAp0vY0174890694.jpg](https://i.imgur.com/wQQ4nEd.jpeg){.zhangyue-img}
:::

::: {.zhangyue-c}
![CmQUOF7Vz8iEM4YnAAAAAMdNzeg992093660.jpg](https://i.imgur.com/KRT1Yhg.jpeg){.zhangyue-img}
:::

::: {.zhangyue-c}
![CmQUOF7Vz8iEH4vPAAAAAFslKKE203083890.jpg](https://i.imgur.com/xTdT8fU.jpeg){.zhangyue-img}
:::

### 6.2.2　按键开关模块 {#chapter-33.xhtml#AUTO_ID_41 .text-title}

本部分包括按键开关模块的功能介绍及相关代码。

#### 1．功能介绍 {.text-title1}

在选择页面时，通过按键开关选择游戏开始。按键开关控制蛇的移动方向，吃食物。通过按键开关控制灯的亮灭：按下按键开关按钮，LED发光二极管高电平，灯亮；再次按下按键开关（大按键模块）按钮，LED发光二极管低电平，灯灭。元件包括按键开关、LED发光二极管、Arduino开发板和导线若干，电路如图6-4所示。

::: {.zhangyue-c}
![CmQUOV7Vz8iEUNcVAAAAAHilT0Q605020681.jpg](https://i.imgur.com/dyinGUo.jpeg){.zhangyue-img}

图6-4　按键开关与Arduino开发板连线图
:::

#### 2．相关代码 {.text-title1}

::: {.zhangyue-c}
![CmQUOF7Vz8iEWXBIAAAAAE2EI_A073110141.jpg](https://i.imgur.com/vlEjKrx.jpeg){.zhangyue-img}
:::

### 6.2.3　显示屏模块 {#chapter-33.xhtml#AUTO_ID_42 .text-title}

本部分包括OLED12864显示屏模块的功能介绍及相关代码。

#### 1．功能介绍 {.text-title1}

主要通过调用U8glib图形库，实现对欢迎界面、选择界面、游戏界面、"GAME OVER"界面的显示。元件包括OLED12864显示屏、Arduino开发板和导线若干，电路如图6-5所示。

::: {.zhangyue-c}
![CmQUOV7Vz8iEIX95AAAAAKdGoW0728554804.jpg](https://i.imgur.com/r5DGnh3.jpeg){.zhangyue-img}

图6-5　OLED显示屏与Arduino开发板连接图
:::

#### 2．相关代码 {.text-title1}

::: {.zhangyue-c}
![CmQUOV7Vz8iEP4a1AAAAAHI9lj4791443603.jpg](https://i.imgur.com/sydCfyw.jpeg){.zhangyue-img}
:::

::: {.zhangyue-c}
![CmQUOF7Vz8iEKQEqAAAAAJc-InY839957991.jpg](https://i.imgur.com/6kwLP6g.jpeg){.zhangyue-img}
:::

::: {.zhangyue-c}
![CmQUOV7Vz8iETqCTAAAAAGH2J4M284373045.jpg](https://i.imgur.com/yh18MV3.jpeg){.zhangyue-img}
:::

::: {.zhangyue-c}
![CmQUOV7Vz8iEPSnOAAAAAAYXgZE988209827.jpg](https://i.imgur.com/Vp9s9Cc.jpeg){.zhangyue-img}
:::

::: {.zhangyue-c}
![CmQUOF7Vz8iEJuJXAAAAAFyCFzg636780763.jpg](https://i.imgur.com/wK6ocgu.jpeg){.zhangyue-img}
:::

::: {.zhangyue-c}
![CmQUOF7Vz8iEG4tqAAAAANlCUm8468666847.jpg](https://i.imgur.com/rvRHqX8.jpeg){.zhangyue-img}
:::
:::

[]{#chapter-34.xhtml}

::: {.calibre1}
## 6.3　产品展示 {.tpl-185-title}

::: {.tpl-185-box-cuxian}
:::

::: {.tpl-185-box-middle}
:::

欢迎界面如图6-6所示，选择界面如图6-7所示，游戏界面如图6-8所示，游戏结束界面如图6-9所示。中间为OLED12864显示屏，上方为Arduino开发板，与之相连的有6个黑色的按键开关。

::: {.zhangyue-c}
![CmQUOF7Vz8iEelBEAAAAAF-ApRk337389553.jpg](https://i.imgur.com/eYZAzXG.jpeg){.zhangyue-img1}

图6-6　欢迎界面图
:::

::: {.zhangyue-c}
![CmQUOV7Vz8iEdWvlAAAAAEipYZQ769259388.jpg](https://i.imgur.com/ouqEj3l.jpeg){.zhangyue-img1}

图6-7　选择界面图
:::

::: {.zhangyue-c}
![CmQUOV7Vz8iEMc_KAAAAAHWvmJc906368067.jpg](https://i.imgur.com/unp18DK.jpeg){.zhangyue-img1}

图6-8　游戏界面图
:::

::: {.zhangyue-c}
![CmQUOF7Vz8iESoceAAAAAMQi-Q4208574521.jpg](https://i.imgur.com/6EbURPc.jpeg){.zhangyue-img}

图6-9　游戏结束界面图
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

![CmQUOF7Vz9KEXN8KAAAAAJ3Yvgw235180767.jpg](https://i.imgur.com/sORTsiT.jpeg){.zhangyue-img}
:::
:::

[]{#chapter-36.xhtml}

::: {.h5_mainbody_bg1}
::: {.h5_rule_hv}
# 第7章 {.tpl-133-text-1-num}

::: {.tpl-133-div-line}
# 推箱游戏机项目设计 ![CmQUOF7Vz9SEEELAAAAAAF19EmE719769063.png](https://i.imgur.com/7kFB4BC.jpeg){.zhangyue-footnote} {.tpl-133-title-1-center}
:::

::: {.tpl-133-pic-center}
![CmQUOF7Vz9SEE6btAAAAALGIiMg316210040.png](https://i.imgur.com/Gxut8iH.jpeg){.tpl-133-pic-img-h}
:::
:::
:::

::: {.calibre1}
本项目基于Arduino开发板，实现一款游戏机，在原有基础上增加账户系统和排行榜等功能。
:::

[]{#chapter-37.xhtml}

::: {.calibre1}
## 7.1　功能及总体设计 {.tpl-185-title}

::: {.tpl-185-box-cuxian}
:::

::: {.tpl-185-box-middle}
:::

本项目利用OLED实现游戏界面的显示，用按键来选择选项以及控制小人推动箱子。整个游戏包括主页面、关卡选择界面，箭头闪烁表示目前的选项，按键控制小人移动等。给使用者一个账户，在使用时选择自己的账户与之前的关卡进度继续进行游戏，排行榜是将这台游戏机使用者的排名展示出来。

要实现上述功能需将作品分成三部分进行设计，即输入部分、处理部分和输出部分。输入部分选用了一些简易的按键配合与Arduino开发板使用；处理部分主要通过C++程序实现；输出部分使用OLED显示屏显示。

#### 1．整体框架图 {.text-title1}

整体框架如图7-1所示。

::: {.zhangyue-c}
![CmQUOV7Vz8iERUC_AAAAAEAhdUM880516093.jpg](https://i.imgur.com/rrXOdgB.jpeg){.zhangyue-img4}

图7-1　整体框架图
:::

#### 2．系统流程图 {.text-title1}

系统流程如图7-2所示。

#### 3．总电路图 {.text-title1}

总电路如图7-3所示，引脚连接如表7-1所示。按键用来输入指令，OLED显示屏完成显示。

::: {.zhangyue-c}
![CmQUOF7Vz8iEWLhNAAAAALp6Noo190403624.jpg](https://i.imgur.com/Y0UQjPN.jpeg){.zhangyue-img}

图7-2　系统流程图
:::

::: {.zhangyue-c}
![CmQUOF7Vz8iEPsjJAAAAAID1vVw406030549.jpg](https://i.imgur.com/sPMjVoC.jpeg){.zhangyue-img}

图7-3　总电路图
:::

::: {.zhangyue-c}
表7-1　引脚连接表

![CmQUOV7Vz9KEeZl1AAAAAFx9PJc806270368.jpg](https://i.imgur.com/fyD4hE0.jpeg){.zhangyue-img}
:::
:::

[]{#chapter-38.xhtml}

::: {.calibre1}
## 7.2　模块介绍 {.tpl-185-title}

::: {.tpl-185-box-cuxian}
:::

::: {.tpl-185-box-middle}
:::

本项目主要由主程序（包括OLED输出）和按键输入模块组成。

### 7.2.1　主程序模块 {#chapter-38.xhtml#AUTO_ID_43 .text-title}

本部分包括主程序模块的功能介绍及相关代码。

#### 1．功能介绍 {.text-title1}

主程序模块完成了项目所需的全部工作，包括对按键输入的响应，将输入的控制信息进行处理输出到OLED显示屏上，在游戏内核方面，完成了游戏界面的切换、碰撞检测的判定、游戏通关的判定，对EEPROM的读写操作，制作并显示排行榜等功能。

#### 2．相关代码 {.text-title1}

::: {.zhangyue-c}
![CmQUOV7Vz8mEVgIcAAAAAFdclqA956802792.jpg](https://i.imgur.com/5Gyperx.jpeg){.zhangyue-img1}
:::

::: {.zhangyue-c}
![CmQUOV7Vz8mEI4XMAAAAAKFKphY135924702.jpg](https://i.imgur.com/F9j0xJ6.jpeg){.zhangyue-img1}
:::

::: {.zhangyue-c}
![CmQUOV7Vz8mEG4qoAAAAAKpNim0463865760.jpg](https://i.imgur.com/TNGaWiD.jpeg){.zhangyue-img}
:::

::: {.zhangyue-c}
![CmQUOV7Vz8mEcw3GAAAAAMcwIgo521854777.jpg](https://i.imgur.com/OZKB8vd.jpeg){.zhangyue-img}
:::

::: {.zhangyue-c}
![CmQUOF7Vz8mENqFwAAAAAACqdS4963412615.jpg](https://i.imgur.com/xjrZlOP.jpeg){.zhangyue-img}
:::

::: {.zhangyue-c}
![CmQUOV7Vz8mEGLBqAAAAAMcg7a0730917364.jpg](https://i.imgur.com/uovoMnZ.jpeg){.zhangyue-img}
:::

::: {.zhangyue-c}
![CmQUOF7Vz8mEYcnLAAAAAEdBI4s211137777.jpg](https://i.imgur.com/FWp47E5.jpeg){.zhangyue-img}
:::

::: {.zhangyue-c}
![CmQUOF7Vz8mETO4XAAAAAIFkBoA435305491.jpg](https://i.imgur.com/xTQRPce.jpeg){.zhangyue-img}
:::

::: {.zhangyue-c}
![CmQUOV7Vz8mEZ-2qAAAAABPYH18705179201.jpg](https://i.imgur.com/9e4IOkB.jpeg){.zhangyue-img}
:::

::: {.zhangyue-c}
![CmQUOF7Vz8mEbtTwAAAAAHpBuCU540465758.jpg](https://i.imgur.com/wYfV1kv.jpeg){.zhangyue-img}
:::

::: {.zhangyue-c}
![CmQUOV7Vz8mENasDAAAAAFeubrM287647754.jpg](https://i.imgur.com/4yXhCsC.jpeg){.zhangyue-img}
:::

::: {.zhangyue-c}
![CmQUOF7Vz8mEQwrKAAAAACEgoJs596621811.jpg](https://i.imgur.com/BiByW66.jpeg){.zhangyue-img}
:::

::: {.zhangyue-c}
![CmQUOV7Vz8mEUWdUAAAAAGqVcT4820617687.jpg](https://i.imgur.com/sp9Kau2.jpeg){.zhangyue-img}
:::

::: {.zhangyue-c}
![CmQUOF7Vz8mEGht7AAAAAHqGzuk547122887.jpg](https://i.imgur.com/qq29fyt.jpeg){.zhangyue-img}
:::

::: {.zhangyue-c}
![CmQUOF7Vz8mEbo3KAAAAACvbubw308270839.jpg](https://i.imgur.com/XDUXGgU.jpeg){.zhangyue-img}
:::

::: {.zhangyue-c}
![CmQUOV7Vz8mEfYbAAAAAANbimGw125228857.jpg](https://i.imgur.com/3VfBRF3.jpeg){.zhangyue-img}
:::

::: {.zhangyue-c}
![CmQUOF7Vz8mEGFnYAAAAALqD5pg640323763.jpg](https://i.imgur.com/f6YCvmZ.jpeg){.zhangyue-img}
:::

::: {.zhangyue-c}
![CmQUOV7Vz8mEQU5mAAAAAIct-mo397730122.jpg](https://i.imgur.com/ECIat8u.jpeg){.zhangyue-img}
:::

### 7.2.2　按键输入模块 {#chapter-38.xhtml#AUTO_ID_44 .text-title}

本部分包括按键输入模块的功能介绍及相关代码。

#### 1．功能介绍 {.text-title1}

本模块将按键的状态转化为控制信号，并将其传递给主程序的功能，电路如图7-4所示。

::: {.zhangyue-c}
![CmQUOF7Vz8qEeZjiAAAAAIq2Pt4736683847.jpg](https://i.imgur.com/3EvYKZL.jpeg){.zhangyue-img}

图7-4　按键输入原理图
:::

#### 2．相关代码 {.text-title1}

::: {.zhangyue-c}
![CmQUOV7Vz8qEGQZ8AAAAADgzr10270490895.jpg](https://i.imgur.com/T92eo94.jpeg){.zhangyue-img}
:::
:::

[]{#chapter-39.xhtml}

::: {.calibre1}
## 7.3　产品展示 {.tpl-185-title}

::: {.tpl-185-box-cuxian}
:::

::: {.tpl-185-box-middle}
:::

产品整体外观如图7-5所示。左右两边按键为输入部分；中间靠左为OLED显示屏，作为输出显示各个界面；中间靠右为Arduino开发板，与之相连的有负责输入的按键以及输出的OLED显示屏。登录界面如图7-6所示，闯关界面如图7-7所示，排行榜界面如图7-8所示。

::: {.zhangyue-c}
![CmQUOV7Vz8qEb47RAAAAAJUZ8yU470030899.jpg](https://i.imgur.com/b7MEa1q.jpeg){.zhangyue-img1}

图7-5　整体外观图
:::

::: {.zhangyue-c}
![CmQUOV7Vz8qEI7TfAAAAAMTFXSw662088805.jpg](https://i.imgur.com/911Bp0e.jpeg){.zhangyue-img3}

图7-6　登录界面图
:::

::: {.zhangyue-c}
![CmQUOF7Vz8qEALp_AAAAAIBeTkM166525792.jpg](https://i.imgur.com/7NqeppN.jpeg){.zhangyue-img3}

图7-7　闯关界面图
:::

::: {.zhangyue-c}
![CmQUOV7Vz8qEdGkbAAAAADx_VFI081903470.jpg](https://i.imgur.com/OR7UfOz.jpeg){.zhangyue-img}

图7-8　排行榜界面图
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

![CmQUOV7Vz9KEdES4AAAAAE0P6Wk375063153.jpg](https://i.imgur.com/DHVdGyD.jpeg){.zhangyue-img}
:::
:::

[]{#chapter-41.xhtml}

::: {.h5_mainbody_bg1}
::: {.h5_rule_hv}
# 第8章 {.tpl-133-text-1-num}

::: {.tpl-133-div-line}
# Hit Me地鼠游戏机项目设计 ![CmQUOF7Vz9SEEELAAAAAAF19EmE719769063.png](https://i.imgur.com/O4OEwKd.jpeg){.zhangyue-footnote} {.tpl-133-title-1-center}
:::

::: {.tpl-133-pic-center}
![CmQUOF7Vz9SEE6btAAAAALGIiMg316210040.png](https://i.imgur.com/EPfS0Fw.jpeg){.tpl-133-pic-img-h}
:::
:::
:::

::: {.calibre1}
本项目基于Arduino开发板设计打地鼠游戏机，通过串口监视器的输入作为控制信号并在屏幕显示进行游戏。
:::

[]{#chapter-42.xhtml}

::: {.calibre1}
## 8.1　功能及总体设计 {.tpl-185-title}

::: {.tpl-185-box-cuxian}
:::

::: {.tpl-185-box-middle}
:::

本项目利用串口监视器作为输入信号，通过C++程序控制屏幕显示，分别包含游戏开始界面、游戏背景、地鼠被打中等图片，利用不同的信号输入以及不同的图片显示顺序形成连贯的游戏。

要实现上述功能需将作品分成三部分进行设计：输入部分、处理部分和显示部分。输入部分通过串口监视器进行信号输入；处理部分通过开发板中的C++程序实现；显示部分则使用一块TFT LCD屏幕作为显示元件。

#### 1．整体框架图 {.text-title1}

整体框架如图8-1所示。

::: {.zhangyue-c}
![CmQUOF7Vz8qEQKQ5AAAAALdxo-Y653070253.jpg](https://i.imgur.com/x8v4j3q.jpeg){.zhangyue-img}

图8-1　整体框架图
:::

#### 2．系统流程图 {.text-title1}

系统流程如图8-2所示。

监视器输入信号后数据会被存入串口缓存，运行C++程序将串口缓存的信号代入代码，并在缓存信号读入后立刻删除已读字符。串口输入信号按顺序在游戏不同阶段分别为游戏开始信号、游戏模式选择信号、打地鼠信号，所有信号输入则游戏将完成一次。

#### 3．总电路图 {.text-title1}

总电路如图8-3所示，引脚连接如表8-1所示。

::: {.zhangyue-c}
![CmQUOF7Vz8qEeASOAAAAAGfrcdU206085001.jpg](https://i.imgur.com/KunAdu5.jpeg){.zhangyue-img}

图8-2　系统流程图
:::

::: {.zhangyue-c}
![CmQUOV7Vz8qEALmqAAAAAJXGehQ469064669.jpg](https://i.imgur.com/qvcGBJl.jpeg){.zhangyue-img3}

图8-3　总电路图
:::

::: {.zhangyue-c}
表8-1　引脚连接表

![CmQUOV7Vz9KEO9vUAAAAAMAkARk817790180.jpg](https://i.imgur.com/c3HgLLC.jpeg){.zhangyue-img}
:::
:::

[]{#chapter-43.xhtml}

::: {.calibre1}
## 8.2　模块介绍 {.tpl-185-title}

::: {.tpl-185-box-cuxian}
:::

::: {.tpl-185-box-middle}
:::

本项目主要包括主程序模块、显示与SD模块、游戏模块。下面分别给出各模块的功能介绍及相关代码。

### 8.2.1　主程序模块 {#chapter-43.xhtml#AUTO_ID_45 .text-title}

本部分包括主程序模块的功能介绍及相关代码。

#### 1．功能介绍 {.text-title1}

Arduino开发板中烧写了打地鼠游戏的函数代码，在接收串口监视器输入字符信号后将字符代入相应的程序阶段，分别确定游戏开始、游戏模式、打地鼠位置。在游戏模式选择阶段根据输入信号调用不同的游戏主函数。

#### 2．相关代码 {.text-title1}

::: {.zhangyue-c}
![CmQUOF7Vz8qEOqncAAAAAEcJ2CQ233459925.jpg](https://i.imgur.com/GKbj2Xk.jpeg){.zhangyue-img}
:::

::: {.zhangyue-c}
![CmQUOV7Vz8qEDN-NAAAAAIUuIaY215106414.jpg](https://i.imgur.com/mBMWJUc.jpeg){.zhangyue-img}
:::

### 8.2.2　显示与SD模块 {#chapter-43.xhtml#AUTO_ID_46 .text-title}

本部分包括显示与SD模块的功能介绍及相关代码。

#### 1．功能介绍 {.text-title1}

将游戏的界面存储在SD卡中，并通过程序控制在LCD显示屏上。

#### 2．相关代码 {.text-title1}

::: {.zhangyue-c}
![CmQUOV7Vz8qENufFAAAAAJVdOKI952020877.jpg](https://i.imgur.com/FsXsMS1.jpeg){.zhangyue-img1}
:::

::: {.zhangyue-c}
![CmQUOF7Vz8qEeKWqAAAAAHSEEFg348649860.jpg](https://i.imgur.com/jfCh7sD.jpeg){.zhangyue-img}
:::

::: {.zhangyue-c}
![CmQUOF7Vz8qEZR3oAAAAAIgpZck896328663.jpg](https://i.imgur.com/ZIPYmvK.jpeg){.zhangyue-img}
:::

::: {.zhangyue-c}
![CmQUOV7Vz8qEbi0_AAAAAApFoWE192870205.jpg](https://i.imgur.com/2ahThaI.jpeg){.zhangyue-img}
:::

::: {.zhangyue-c}
![CmQUOV7Vz8qEOnhvAAAAAMALHMw501921417.jpg](https://i.imgur.com/dkdYRe5.jpeg){.zhangyue-img}
:::

### 8.2.3　游戏模块 {#chapter-43.xhtml#AUTO_ID_47 .text-title}

本部分包括游戏模块的功能介绍及相关代码。

#### 1．功能介绍 {.text-title1}

本部分具体实现三个游戏的模式，并通过控制显示模块，完成相关游戏的具体实现。

#### 2．相关代码 {.text-title1}

::: {.zhangyue-c}
![CmQUOF7Vz8qEBEG6AAAAAL57Yrg414470377.jpg](https://i.imgur.com/xqWVo4D.jpeg){.zhangyue-img}
:::

::: {.zhangyue-c}
![CmQUOF7Vz8qEI98tAAAAAMh2yZU746526806.jpg](https://i.imgur.com/b5lLfPz.jpeg){.zhangyue-img}
:::

::: {.zhangyue-c}
![CmQUOF7Vz8qENMPQAAAAAGsPTio305658400.jpg](https://i.imgur.com/4ba71g2.jpeg){.zhangyue-img}
:::

::: {.zhangyue-c}
![CmQUOV7Vz8qEVRr4AAAAABpC8Mo838149668.jpg](https://i.imgur.com/Fmbs1G9.jpeg){.zhangyue-img}
:::

::: {.zhangyue-c}
![CmQUOV7Vz8qEF6b2AAAAAB64v44977409650.jpg](https://i.imgur.com/eRV9fgW.jpeg){.zhangyue-img}
:::

::: {.zhangyue-c}
![CmQUOF7Vz8qEcfRmAAAAALfOnSg984603777.jpg](https://i.imgur.com/bNid2c7.jpeg){.zhangyue-img}
:::

::: {.zhangyue-c}
![CmQUOF7Vz8uEG4zYAAAAAA3NwxQ101186985.jpg](https://i.imgur.com/usJ3nKs.jpeg){.zhangyue-img}
:::

::: {.zhangyue-c}
![CmQUOV7Vz8uENaxgAAAAAFOb6qo284079677.jpg](https://i.imgur.com/WPvo777.jpeg){.zhangyue-img}
:::

::: {.zhangyue-c}
![CmQUOF7Vz8uEYUSlAAAAAEmxxsQ224840050.jpg](https://i.imgur.com/tKQmchS.jpeg){.zhangyue-img}
:::

::: {.zhangyue-c}
![CmQUOV7Vz8uERMOWAAAAAEJl-qA393468768.jpg](https://i.imgur.com/s99LcfW.jpeg){.zhangyue-img}
:::

::: {.zhangyue-c}
![CmQUOF7Vz8uEDi-CAAAAAMcqRrI867312995.jpg](https://i.imgur.com/rTY130S.jpeg){.zhangyue-img}
:::
:::

[]{#chapter-44.xhtml}

::: {.calibre1}
## 8.3　产品展示 {.tpl-185-title}

::: {.tpl-185-box-cuxian}
:::

::: {.tpl-185-box-middle}
:::

初始界面如图8-4所示，模式选择界面如图8-5所示，打中地鼠如图8-6所示。

::: {.zhangyue-c}
![CmQUOV7Vz8uEB-eUAAAAAKai7XU179400328.jpg](https://i.imgur.com/1ln07yV.jpeg){.zhangyue-img}

图8-4　初始界面图
:::

::: {.zhangyue-c}
![CmQUOV7Vz8uEd_hnAAAAAPy520U704546275.jpg](https://i.imgur.com/32eYASJ.jpeg){.zhangyue-img1}

图8-5　模式选择界面图
:::

::: {.zhangyue-c}
![CmQUOF7Vz8uEIYkcAAAAAMJWRNE910795127.jpg](https://i.imgur.com/3H93hJv.jpeg){.zhangyue-img1}

图8-6　打中地鼠图
:::
:::

[]{#chapter-45.xhtml}

::: {.calibre1}
## 8.4　元件清单 {.tpl-185-title}

::: {.tpl-185-box-cuxian}
:::

::: {.tpl-185-box-middle}
:::

完成本项目所用到的元件及数量如表8-2所示。

::: {.zhangyue-c}
表8-2　元件清单

![CmQUOV7Vz9KEY2ZBAAAAADSqJEw612199726.jpg](https://i.imgur.com/u841fwg.jpeg){.zhangyue-img}
:::
:::

[]{#chapter-46.xhtml}

::: {.h5_mainbody_bg1}
::: {.h5_rule_hv}
# 第9章 {.tpl-133-text-1-num}

::: {.tpl-133-div-line}
# 体感游戏模拟器项目设计 ![CmQUOF7Vz9SEEELAAAAAAF19EmE719769063.png](https://i.imgur.com/fJh1LvB.jpeg){.zhangyue-footnote} {.tpl-133-title-1-center}
:::

::: {.tpl-133-pic-center}
![CmQUOF7Vz9SEE6btAAAAALGIiMg316210040.png](https://i.imgur.com/hgig7N9.jpeg){.tpl-133-pic-img-h}
:::
:::
:::

::: {.calibre1}
本项目以坦克大战为原型设计人体动作，实现手势控制游戏目标的运动状态。
:::

[]{#chapter-47.xhtml}

::: {.calibre1}
## 9.1　功能及总体设计 {.tpl-185-title}

::: {.tpl-185-box-cuxian}
:::

::: {.tpl-185-box-middle}
:::

电子游戏（Electronic Games），又称电玩游戏（简称电玩），是指在游戏过程中，依靠电子设备作为媒介的娱乐行为。传统的电子游戏是通过操作鼠标键盘以及手柄等外部设备对游戏目标进行控制，除了手指其他身体部位都未参与，而长时间保持静止会对身体健康产生影响。本项目创新点在于，用MPU6050检测人体动作，通过蓝牙传输数据到游戏控制部分，从而实现体感控制，如图9-1所示。

::: {.zhangyue-c}
![CmQUOF7Vz8uEbKd5AAAAAC1NS7I743378560.jpg](https://i.imgur.com/RJt0MbW.jpeg){.zhangyue-img}

图9-1　手势控制简示图
:::

要实现上述功能需将作品分成三部分进行设计，即数据采集部分、数据传输部分和游戏实现部分。数据采集部分采用游戏模拟器内置的JY-61 MPU6050模块，感应人体手势的变化，并在Arduino开发板对数据进行算法处理，判断出各种手势对应的指令；数据传输部分通过蓝牙模块将指令发送到计算机串口；游戏实现模块是对指令的接收和游戏内容的高帧刷新。

#### 1．整体框架图 {.text-title1}

整体框架如图9-2所示。

::: {.zhangyue-c}
![CmQUOF7Vz8uEOanlAAAAAIuBSM4161922183.jpg](https://i.imgur.com/VIwCAg4.jpeg){.zhangyue-img}

图9-2　整体框架图
:::

#### 2．系统流程图 {.text-title1}

系统流程如图9-3所示。

::: {.zhangyue-c}
![CmQUOV7Vz8uECNz3AAAAAHMLS1M498300318.jpg](https://i.imgur.com/4IyAmz9.jpeg){.zhangyue-img1}

图9-3　系统流程图
:::

首先，蓝牙模块建立与Arduino开发板串口通信，使游戏部分初始化正常运行，玩家戴好游戏模拟器后，检测动作；其次，蓝牙模块向计算机代码部分发送指令，玩家可以选择多种模式；最后，通过手势等动作进行游戏操作。

#### 3．总电路图 {.text-title1}

总电路如图9-4所示，元件从上向下依次是MPU6050、HC-05和ADXL355传感器。引脚连接如表9-1所示。HC-05的接线方式为：VCC连接Arduino开发板5V；GND连接Arduino开发板的GND；RX连接Arduino开发板的TX引脚；TX连接Arduino开发板的RX引脚。

MPU-6050的连接方式为：VCC连接Arduino开发板5V；GND连接Arduino开发板GND；SCL、SDA连接Arduino开发板对应的SCL和SDA；XCL和XDA辅助I ^2^ C连接，用于其他元件。

ADXL355的连接方式：VCC连接引脚A0；GND连接引脚A1；X连接引脚A2；Y连接引脚A3；Z连接引脚A4。

::: {.zhangyue-c}
![CmQUOF7Vz8uEWhdkAAAAAMgkQ2o628973357.jpg](https://i.imgur.com/RMm6J3e.jpeg){.zhangyue-img}

图9-4　总电路图
:::

::: {.zhangyue-c}
表9-1　引脚连接表

![CmQUOF7Vz9KEFWAmAAAAAHEfM04355389219.jpg](https://i.imgur.com/QqNNMaT.jpeg){.zhangyue-img}
:::
:::

[]{#chapter-48.xhtml}

::: {.calibre1}
## 9.2　模块介绍 {.tpl-185-title}

::: {.tpl-185-box-cuxian}
:::

::: {.tpl-185-box-middle}
:::

本项目主要包括数据采集模块、数据传输模块和游戏实现模块。下面分别给出各模块的功能介绍及相关代码。

### 9.2.1　数据采集模块 {#chapter-48.xhtml#AUTO_ID_48 .text-title}

本部分包括数据采集模块的功能介绍及相关代码。

#### 1．功能介绍 {.text-title1}

SCL和SDA连接Arduino开发板的I ^2^ C引脚，MCU通过I ^2^ C引脚来控制MPU6050。XCL和XDA连接外部设备，例如，磁传感器，可以组成一个九轴传感器。VLOGIC是I/O引脚电压，该引脚最低可以到1.8V，连接VDD即可。AD0是从I ^2^ C引脚（接MCU）的地址控制引脚，该引脚控制I ^2^ C地址的最低位。如果接GND，则MPU6050的I ^2^ C地址是0X68，如果接VDD，则是0X69，这里的地址是不包含数据传输的最低位（最低位用来表示读写）。

ADXL355的使用方式是加速度计将角度转化为电压。如果要读取数据，只需要使用analogRead（）函数。加速度计引脚在代码开头以常量方式定义，Arduino开发板使用模拟引脚A0、A1作为电源和GND的引脚，A2、A3、A4定义为X、Y、Z轴的引脚。

#### 2．相关代码 {.text-title1}

::: {.zhangyue-c}
![CmQUOV7Vz8uEKrHsAAAAAKeN6AU390273853.jpg](https://i.imgur.com/uOUCWIp.jpeg){.zhangyue-img}
:::

::: {.zhangyue-c}
![CmQUOF7Vz8uEL1seAAAAAEy5C_c843248901.jpg](https://i.imgur.com/DpLvyOz.jpeg){.zhangyue-img}
:::

::: {.zhangyue-c}
![CmQUOF7Vz8uEM1R-AAAAAJmcj00143306880.jpg](https://i.imgur.com/oZB62wl.jpeg){.zhangyue-img}
:::

### 9.2.2　数据传输模块 {#chapter-48.xhtml#AUTO_ID_49 .text-title}

本部分包括数据传输模块的功能介绍及相关代码。

#### 1．功能介绍 {.text-title1}

数据传输模块是集成蓝牙功能的PCBA板，用于短距离无线通信，按功能分为蓝牙数据模块和蓝牙语音模块。蓝牙模块是指集成蓝牙功能的芯片基本电路集合，用于无线网络通信，一般模块具有半成品的属性，是在芯片的基础上进行加工，使后续应用更为简单。

#### 2．相关代码 {.text-title1}

::: {.zhangyue-c}
![CmQUOV7Vz8uEd8e8AAAAAIFUC0c778008801.jpg](https://i.imgur.com/OaqKXrp.jpeg){.zhangyue-img}
:::

### 9.2.3　游戏实现模块 {#chapter-48.xhtml#AUTO_ID_50 .text-title}

本部分包括游戏实现模块的功能介绍及相关代码。

#### 1．功能介绍 {.text-title1}

游戏实现模块主要分为六部分：我方坦克部分；生成坦克类和属性、控制坦克移动、升级及射击的方法；敌方坦克部分，生成敌方坦克类和属性、控制敌方坦克随机移动的类；随机射击类墙体部分；生成碰撞检测（地图边界、敌方坦克、墙体）的方法；子弹部分是生成子弹类；食物部分，随机生成各种道具，不定时刷新；主函数部分，调用以上各种类实现游戏场景、游戏音乐、串口参数的初始化，接收串口指令并处理，也是整个游戏的核心。

#### 2．相关代码 {.text-title1}

1）主函数部分

::: {.zhangyue-c}
![CmQUOF7Vz8uELccVAAAAAKqWmdI015294107.jpg](https://i.imgur.com/eWauD7U.jpeg){.zhangyue-img}
:::

::: {.zhangyue-c}
![CmQUOV7Vz8uEDeLgAAAAAFsLDV4124881642.jpg](https://i.imgur.com/pjps1hv.jpeg){.zhangyue-img}
:::

::: {.zhangyue-c}
![CmQUOF7Vz8uEdOUHAAAAAGhFxfM121081195.jpg](https://i.imgur.com/aa48Wca.jpeg){.zhangyue-img}
:::

::: {.zhangyue-c}
![CmQUOV7Vz8uEMnZUAAAAAB64jOw222851128.jpg](https://i.imgur.com/GMdAIrt.jpeg){.zhangyue-img}
:::

::: {.zhangyue-c}
![CmQUOF7Vz8uEEINZAAAAABfiTUA024136547.jpg](https://i.imgur.com/8k0XxJC.jpeg){.zhangyue-img}
:::

::: {.zhangyue-c}
![CmQUOV7Vz8uEQn_yAAAAAHAUMUk829964987.jpg](https://i.imgur.com/JubPunx.jpeg){.zhangyue-img}
:::

::: {.zhangyue-c}
![CmQUOF7Vz8uELouUAAAAANJzMiY687346058.jpg](https://i.imgur.com/08K3wXK.jpeg){.zhangyue-img}
:::

::: {.zhangyue-c}
![CmQUOV7Vz8uEKNXlAAAAAAw75D4540809331.jpg](https://i.imgur.com/McE5zYl.jpeg){.zhangyue-img}
:::

::: {.zhangyue-c}
![CmQUOF7Vz8uELUgHAAAAAAkLFvY791407175.jpg](https://i.imgur.com/ZVm7iM7.jpeg){.zhangyue-img}
:::

::: {.zhangyue-c}
![CmQUOV7Vz8yELcrjAAAAAADgaWo594045256.jpg](https://i.imgur.com/jha9YvM.jpeg){.zhangyue-img}
:::

::: {.zhangyue-c}
![CmQUOF7Vz8yEJrS-AAAAAIixDUw416342080.jpg](https://i.imgur.com/AY8kqvE.jpeg){.zhangyue-img}
:::

::: {.zhangyue-c}
![CmQUOV7Vz8yEQP3DAAAAAEATwg8051180313.jpg](https://i.imgur.com/YDexyFl.jpeg){.zhangyue-img}
:::

::: {.zhangyue-c}
![CmQUOF7Vz8yEGMHoAAAAAPew8YA745049719.jpg](https://i.imgur.com/er70MIJ.jpeg){.zhangyue-img}
:::

::: {.zhangyue-c}
![CmQUOF7Vz8yEfWiuAAAAAOwLLzo677268310.jpg](https://i.imgur.com/KNiqlBI.jpeg){.zhangyue-img}
:::

::: {.zhangyue-c}
![CmQUOV7Vz8yEcIxFAAAAAKfOsfo579593942.jpg](https://i.imgur.com/D9JeqIZ.jpeg){.zhangyue-img}
:::

::: {.zhangyue-c}
![CmQUOF7Vz8yEbKtVAAAAAMYdaNg243321506.jpg](https://i.imgur.com/im2B4xt.jpeg){.zhangyue-img}
:::

::: {.zhangyue-c}
![CmQUOF7Vz8yEIO1-AAAAALqhWls616226335.jpg](https://i.imgur.com/zm5X9VL.jpeg){.zhangyue-img}
:::

::: {.zhangyue-c}
![CmQUOV7Vz8yEC6s-AAAAAI4XFQU882415610.jpg](https://i.imgur.com/pj3uvJA.jpeg){.zhangyue-img}
:::

::: {.zhangyue-c}
![CmQUOV7Vz8yEDTvqAAAAAO4-6js978104992.jpg](https://i.imgur.com/U2neW8s.jpeg){.zhangyue-img}
:::

::: {.zhangyue-c}
![CmQUOF7Vz8yEZFGgAAAAAOqzf2M995341913.jpg](https://i.imgur.com/b7IbjjI.jpeg){.zhangyue-img}
:::

::: {.zhangyue-c}
![CmQUOF7Vz8yEcml4AAAAADEhUow289844109.jpg](https://i.imgur.com/xdXu1sK.jpeg){.zhangyue-img}
:::

::: {.zhangyue-c}
![CmQUOV7Vz8yEYdujAAAAABamF8M706889777.jpg](https://i.imgur.com/YLcRGLm.jpeg){.zhangyue-img}
:::

::: {.zhangyue-c}
![CmQUOF7Vz8yEeAVmAAAAACeO42Q284692091.jpg](https://i.imgur.com/Z4LUU1v.jpeg){.zhangyue-img1}
:::

2）子弹部分

::: {.zhangyue-c}
![CmQUOF7Vz8yETpilAAAAAGmG6kc737091629.jpg](https://i.imgur.com/quOGeBk.jpeg){.zhangyue-img3}
:::

3）我方坦克部分

::: {.zhangyue-c}
![CmQUOV7Vz8yEMpAQAAAAAHx0NrM665123521.jpg](https://i.imgur.com/bIWXOuB.jpeg){.zhangyue-img}
:::

::: {.zhangyue-c}
![CmQUOF7Vz8yEfbh5AAAAAG1ekew005169732.jpg](https://i.imgur.com/V5pnJcG.jpeg){.zhangyue-img}
:::

::: {.zhangyue-c}
![CmQUOF7Vz8yEN3biAAAAAPV2ZUM604565978.jpg](https://i.imgur.com/DmLetMA.jpeg){.zhangyue-img}
:::

4）敌方坦克部分

::: {.zhangyue-c}
![CmQUOV7Vz8yEPy76AAAAAAmiCjA831055426.jpg](https://i.imgur.com/ej76Lgz.jpeg){.zhangyue-img}
:::

::: {.zhangyue-c}
![CmQUOV7Vz8yEUVHPAAAAADvfRAk082872149.jpg](https://i.imgur.com/GFUwm3A.jpeg){.zhangyue-img}
:::

::: {.zhangyue-c}
![CmQUOV7Vz8yES5T6AAAAAFNYkrg711797919.jpg](https://i.imgur.com/FH2BH83.jpeg){.zhangyue-img1}
:::

5）食物功能部分

::: {.zhangyue-c}
![CmQUOF7Vz8yEbA9ZAAAAAMCzjLI013603104.jpg](https://i.imgur.com/W6unx06.jpeg){.zhangyue-img3}
:::

6）墙体部分

::: {.zhangyue-c}
![CmQUOF7Vz8yEWCnmAAAAAEpz8Ik504858019.jpg](https://i.imgur.com/MCq6WFC.jpeg){.zhangyue-img}
:::

::: {.zhangyue-c}
![CmQUOF7Vz82ES82SAAAAAKeWtWk694067027.jpg](https://i.imgur.com/apOB3Jr.jpeg){.zhangyue-img}
:::

::: {.zhangyue-c}
![CmQUOV7Vz82EbXdMAAAAAO3Rzpk288543262.jpg](https://i.imgur.com/eT65ngu.jpeg){.zhangyue-img}
:::

::: {.zhangyue-c}
![CmQUOF7Vz82EOh5CAAAAACyAngU314271899.jpg](https://i.imgur.com/AFcAVgD.jpeg){.zhangyue-img}
:::
:::

[]{#chapter-49.xhtml}

::: {.calibre1}
## 9.3　产品展示 {.tpl-185-title}

::: {.tpl-185-box-cuxian}
:::

::: {.tpl-185-box-middle}
:::

选择界面如图9-5所示，单人模式如图9-6所示，双人模式如图9-7所示。

::: {.zhangyue-c}
![CmQUOV7Vz82EC8rzAAAAAG-WeK4365314096.jpg](https://i.imgur.com/X3nv8Tt.jpeg){.zhangyue-img3}

图9-5　选择界面图
:::

::: {.zhangyue-c}
![CmQUOF7Vz82EXGvSAAAAACJ_rLc381709069.jpg](https://i.imgur.com/2lZaUHT.jpeg){.zhangyue-img3}

图9-6　单人模式图
:::

::: {.zhangyue-c}
![CmQUOF7Vz82EOoHpAAAAADnRPEc277928250.jpg](https://i.imgur.com/XUXeVBV.jpeg){.zhangyue-img3}

图9-7　双人模式图
:::
:::

[]{#chapter-50.xhtml}

::: {.calibre1}
## 9.4　元件清单 {.tpl-185-title}

::: {.tpl-185-box-cuxian}
:::

::: {.tpl-185-box-middle}
:::

完成本项目所用到的元件及数量如表9-2所示。

::: {.zhangyue-c}
表9-2　元件清单

![CmQUOF7Vz9KEXcJ-AAAAACglJkw466241175.jpg](https://i.imgur.com/N6RppZW.jpeg){.zhangyue-img}
:::
:::

[]{#chapter-51.xhtml}

::: {.h5_mainbody_bg1}
::: {.h5_rule_hv}
# 第10章 {.tpl-133-text-1-num}

::: {.tpl-133-div-line}
# JUST JUMP游戏项目设计 ![CmQUOF7Vz9SEEELAAAAAAF19EmE719769063.png](https://i.imgur.com/9A24Mnw.jpeg){.zhangyue-footnote} {.tpl-133-title-1-center}
:::

::: {.tpl-133-pic-center}
![CmQUOF7Vz9SEE6btAAAAALGIiMg316210040.png](https://i.imgur.com/1Hp6UNW.jpeg){.tpl-133-pic-img-h}
:::
:::
:::

::: {.calibre1}
本项目基于Arduino平台设计一种交互式的小游戏，将声控和"跳一跳"手机游戏结合起来，实现用户通过声音操控游戏。
:::

[]{#chapter-52.xhtml}

::: {.calibre1}
## 10.1　功能及总体设计 {.tpl-185-title}

::: {.tpl-185-box-cuxian}
:::

::: {.tpl-185-box-middle}
:::

本项目是用户通过自己的声音控制游戏中小人的前进幅度（本游戏中小人仅为虚拟量，在屏幕中并没有图形显示）。LCD显示屏部分，游戏的界面是基于微信"跳一跳"进行设计，通过外界声音分贝的高低来控制人物的跳跃幅度，用户通过显示屏上的距离判断来改变自己声音的大小从而控制人物的前进幅度。在显示屏中有前方随机出现的方块，如果游戏中的小人恰好落在方块上，则得分，继续前行；否则挑战失败。

要实现上述功能需将作品分成四部分进行设计，即数据采集部分、数据处理部分、数据传输部分和数据输出部分。数据采集部分选用了声音传感器RB-02S084A，当用户发出声音的时候便会采集信息。数据处理部分则通过Arduino开发板实现，将数据输入部分收集到的信息转换成可比较的距离值。传输部分则用Arduino开发板直接连接实现。输出部分使用ILI9341-V2.0LCD显示屏和LED Bargraph RB-02S128实现。LED Bargraph RB-02S128在游戏机中的作用是显示声音的大小，用户输入的声音越大，LED Bargraph RB-02S128点亮的数目越多。

#### 1．整体框架图 {.text-title1}

整体框架如图10-1所示。

::: {.zhangyue-c}
![CmQUOV7Vz82EaIx-AAAAACq3NC0966900339.jpg](https://i.imgur.com/rmWyDMT.jpeg){.zhangyue-img3}

图10-1　整体框架图
:::

#### 2．系统流程图 {.text-title1}

系统流程如图10-2所示。

::: {.zhangyue-c}
![CmQUOF7Vz82EdkFVAAAAAHLrk50967897835.jpg](https://i.imgur.com/k2L9HD1.jpeg){.zhangyue-img2}

图10-2　系统流程图
:::

用户发声产生的数据采集后经过程序处理转换成输入距离，代表不同的前进幅度，在ILI9341-V2.0LCD显示屏中则模拟为人物的前进幅度。

#### 3．总电路图 {.text-title1}

总电路如图10-3所示，引脚连接如表10-1所示。

::: {.zhangyue-c}
![CmQUOV7Vz82ELkWpAAAAAM6b-RA510844281.jpg](https://i.imgur.com/FQ4Ny7j.jpeg){.zhangyue-img}

图10-3　总电路图
:::

::: {.zhangyue-c}
表10-1　引脚连接表

![CmQUOV7Vz9KESqBgAAAAAFhRrhs649927019.jpg](https://i.imgur.com/2YMx0yP.jpeg){.zhangyue-img}
:::
:::

[]{#chapter-53.xhtml}

::: {.calibre1}
## 10.2　模块介绍 {.tpl-185-title}

::: {.tpl-185-box-cuxian}
:::

::: {.tpl-185-box-middle}
:::

本项目主要包括声音传感器模块、LCD显示屏输出模块、LED输出显示模块和主程序模块。下面分别给出各模块的功能介绍及相关代码。

### 10.2.1　声音传感器模块 {#chapter-53.xhtml#AUTO_ID_51 .text-title}

本部分包括声音传感器RB-02S084A模块的功能介绍及相关代码。

#### 1．功能介绍 {.text-title1}

声音传感器RB-02S084A模块是由小型驻极体麦克风和运算放大器构成。可以将捕获的微小电压变化放大100倍左右，能够被微控制器轻松识别，并进行AD转换，输出模拟电压值，只需采集模拟量电压就可以读出声音的幅值，判断声音的大小。用杜邦线与Arduino开发板相连，实现与环境感知的互动。声音传感器RB-02S084A模块使用一个话筒收集声音，实现将信号的分贝大小转换成电压输出的功能，经过滤波、放大之后接到Arduino开发板的模拟输入接口，说话声音越大，电压变化的幅度就越大。另外，也可以在串口监视器中直接读取声音返回值，但需要注意的是，由于声波是不断变化的正弦波，所以在模拟输入引脚上读取的值也是相应变化的，根据某个时间点读取的值对声音进行判断时，读到的可能是声波波形的最小值，也可能是最大值，所以在判断声音返回值时，需要判断两段数值。

用声音传感器采集到的声音模拟量显示在串口监视器中，并且当声音输出模拟量在580\~423时，Arduino开发板引脚13的LED点亮，如果不在范围内，LED熄灭。

#### 2．相关代码 {.text-title1}

::: {.zhangyue-c}
![CmQUOV7Vz82EPecIAAAAAHRFoWA152233555.jpg](https://i.imgur.com/tGMgy2a.jpeg){.zhangyue-img}
:::

### 10.2.2　LCD显示屏输出模块 {#chapter-53.xhtml#AUTO_ID_52 .text-title}

本部分包括ILI9341-V2.0LCD显示屏输出模块的功能介绍及相关代码。

#### 1．功能介绍 {.text-title1}

当屏幕供电之后显示JUST JUMP的欢迎界面，出现字符按钮，预示游戏即将开始，进入游戏进行的界面，屏幕中会随机连续出现蓝色和白色的方块，蓝色方块代表当前位置，白色方块代表下一位置，当弹跳幅度和声音大小转换成游戏中人物跳动的距离等于游戏界面中两个方块之间距离的时候，白色方块变成绿色，游戏继续进行，如果输入的距离不合适，则会失败，出现红色方块提示玩家输入的声音是过小还是过大，如果声音偏小，则会在两个方块之间产生红色方块，如果偏大，则会在白色方块以外产生红色方块，然后显示"YOU FAILED"的字样，游戏重新开始。

本模块主要显示字符和图案、触屏输入、显示随机方块以及每一步的游戏结果。在编写代码的过程中，一是通过编写函数来实现随机方块的出现，随机方块最多有100个，如果用户能将这些方块全部跳对则会出现"STAGE CLEAR"的字样，而方块位置的确定则是各个点的位置坐标所确定。二是当游戏失败时，要根据当前方块与目标方块之间的相对位置与输入实际距离大小两个因素来决定红色方块产生的位置。方块之间的相对位置关系一共有八种，分别为左方、右方、上方、下方、左上、左下、右上、右下。除此之外，还要考虑目标方块在屏幕边缘时的特殊情况。只有当输入距离与两方块之间的实际距离误差在0.5的范围内，才认为这一步成功，目标方块变为绿色，用户可以继续进行游戏。

#### 2．相关代码 {.text-title1}

::: {.zhangyue-c}
![CmQUOV7Vz82ENYXLAAAAACUZCt0583906523.jpg](https://i.imgur.com/wtvD4ex.jpeg){.zhangyue-img}
:::

::: {.zhangyue-c}
![CmQUOF7Vz82EBUSzAAAAAAI0mFE106184071.jpg](https://i.imgur.com/gvrfcyz.jpeg){.zhangyue-img}
:::

::: {.zhangyue-c}
![CmQUOV7Vz82EAYKHAAAAALf6XNI217181597.jpg](https://i.imgur.com/EuMnsVa.jpeg){.zhangyue-img}
:::

::: {.zhangyue-c}
![CmQUOF7Vz82EZQuUAAAAAKFFGNM543053654.jpg](https://i.imgur.com/o7DVVQT.jpeg){.zhangyue-img}
:::

::: {.zhangyue-c}
![CmQUOV7Vz82EI5EUAAAAABdi-24175649698.jpg](https://i.imgur.com/2Nyor1o.jpeg){.zhangyue-img}
:::

::: {.zhangyue-c}
![CmQUOV7Vz82ENsNxAAAAAPel3ts640085316.jpg](https://i.imgur.com/lZJeble.jpeg){.zhangyue-img}
:::

::: {.zhangyue-c}
![CmQUOV7Vz82EPM5yAAAAAGRlekk284966974.jpg](https://i.imgur.com/hR9u7yS.jpeg){.zhangyue-img}
:::

### 10.2.3　LED输出显示模块 {#chapter-53.xhtml#AUTO_ID_53 .text-title}

本部分包括LED Bargraph RB-02S128显示屏模块的功能介绍及相关代码。LED Bargraph RB-02S128模块板载6个LED，可根据S端输入电压值大小决定点亮的LED个数，调节输入电压上限，在0\~5V，电压越小亮灯个数越少，输入电压越大，亮灯个数越多。LED Bargraph模块板载一个信号匹配可调电阻，可以调节输入电压上限，调节范围为2\~5V，输入电压为0V时没有LED点亮，增大信号端输入电压，LED点亮个数逐步增加，输入电压为上限时6个LED全部点亮，模块"＋""－"引脚与Arduino开发板"5V""GND"引脚连接。

### 10.2.4　主程序模块 {#chapter-53.xhtml#AUTO_ID_54 .text-title}

本部分包括主程序的功能介绍及相关代码。

#### 1．功能介绍 {.text-title1}

通过Arduino开发板实现游戏以及屏幕控制。

#### 2．相关代码 {.text-title1}

::: {.zhangyue-c}
![CmQUOF7Vz86EKTO0AAAAAPyPuls989707718.jpg](https://i.imgur.com/efs2Chn.jpeg){.zhangyue-img}
:::

::: {.zhangyue-c}
![CmQUOV7Vz86EYsdiAAAAAJlAwGI408208063.jpg](https://i.imgur.com/R6AMfdM.jpeg){.zhangyue-img}
:::

::: {.zhangyue-c}
![CmQUOV7Vz86EJUIuAAAAALhZpFM978285455.jpg](https://i.imgur.com/FYWhK4U.jpeg){.zhangyue-img}
:::

::: {.zhangyue-c}
![CmQUOF7Vz86EYiZ3AAAAAHx1r4Y100044728.jpg](https://i.imgur.com/1ixK61n.jpeg){.zhangyue-img}
:::

::: {.zhangyue-c}
![CmQUOF7Vz86EV27dAAAAADMNlck239778753.jpg](https://i.imgur.com/d2kxsW8.jpeg){.zhangyue-img}
:::

::: {.zhangyue-c}
![CmQUOF7Vz86EP8ZGAAAAAO6n1iY134966887.jpg](https://i.imgur.com/zny1L1h.jpeg){.zhangyue-img}
:::

::: {.zhangyue-c}
![CmQUOF7Vz86EAUMXAAAAAPFPCPU354177390.jpg](https://i.imgur.com/IXN5tz4.jpeg){.zhangyue-img}
:::

::: {.zhangyue-c}
![CmQUOV7Vz86EMkiIAAAAAP60wJo351765749.jpg](https://i.imgur.com/mpP3WDi.jpeg){.zhangyue-img}
:::

::: {.zhangyue-c}
![CmQUOF7Vz86EN6FmAAAAAFqClao461149385.jpg](https://i.imgur.com/Z4UkwtU.jpeg){.zhangyue-img}
:::
:::

[]{#chapter-54.xhtml}

::: {.calibre1}
## 10.3　产品展示 {.tpl-185-title}

::: {.tpl-185-box-cuxian}
:::

::: {.tpl-185-box-middle}
:::

开机界面如图10-4所示，开机之后显示"JUST JUMP"的图案；游戏准备界面如图10-5所示，等待在指定位置的触屏输入；游戏进行如图10-6所示，显示当前方块与目标方块；游戏结果如图10-7所示，当用户游戏失败时，显示"YOU FAILED"。

::: {.zhangyue-c}
![CmQUOF7Vz86EYIMIAAAAAAcHpKo043362285.jpg](https://i.imgur.com/TdmAIBD.jpeg){.zhangyue-img2}

图10-4　开机界面图
:::

::: {.zhangyue-c}
![CmQUOV7Vz86ECZwXAAAAAOhNXak458026851.jpg](https://i.imgur.com/AQ3oiT5.jpeg){.zhangyue-img2}

图10-5　准备界面图
:::

::: {.zhangyue-c}
![CmQUOF7Vz86EfJrBAAAAAF-aBUg523650454.jpg](https://i.imgur.com/JccGYfQ.jpeg){.zhangyue-img2}

图10-6　游戏进行图
:::

::: {.zhangyue-c}
![CmQUOF7Vz86EFDVLAAAAAPa4QRI020698934.jpg](https://i.imgur.com/Z7rjGGQ.jpeg){.zhangyue-img1}

图10-7　游戏结果图
:::
:::

[]{#chapter-55.xhtml}

::: {.calibre1}
## 10.4　元件清单 {.tpl-185-title}

::: {.tpl-185-box-cuxian}
:::

::: {.tpl-185-box-middle}
:::

完成本项目所用到的元件及数量如表10-2所示。

::: {.zhangyue-c}
表10-2　元件清单

![CmQUOV7Vz9KEJZY6AAAAALuM6Fk907903665.jpg](https://i.imgur.com/FRyx5t2.jpeg){.zhangyue-img}
:::
:::

[]{#chapter-56.xhtml}

::: {.h5_mainbody_bg1}
::: {.h5_rule_hv}
# 第11章 {.tpl-133-text-1-num}

::: {.tpl-133-div-line}
# 变脸弹珠台小游戏项目设计 ![CmQUOF7Vz9SEEELAAAAAAF19EmE719769063.png](https://i.imgur.com/B5Ov0Ji.jpeg){.zhangyue-footnote} {.tpl-133-title-1-center}
:::

::: {.tpl-133-pic-center}
![CmQUOF7Vz9SEE6btAAAAALGIiMg316210040.png](https://i.imgur.com/ZCtj1iP.jpeg){.tpl-133-pic-img-h}
:::
:::
:::

::: {.calibre1}
本项目采用Processing设计游戏界面，通过Arduino开发板读取传感器的数据，实现变脸弹珠台小游戏。
:::

[]{#chapter-57.xhtml}

::: {.calibre1}
## 11.1　功能及总体设计 {.tpl-185-title}

::: {.tpl-185-box-cuxian}
:::

::: {.tpl-185-box-middle}
:::

本项目重点设计以下模块：弹珠、挡板、按键、背景与Arduino开发板。各个模块根据一定的逻辑在draw函数中执行，用全局变量来标记状态，从而控制运行过程。如没有连接Arduino开发板、无法读取到传感器数据时，将默认使用键盘的A和l键操作游戏。按A键触发左挡板，按l键触发右挡板。连接Arduino开发板后，按O键可开启串口，Arduino开发板使用两个水银开关分别控制左右挡板。得分规则：弹珠撞到"笑哭"球得1分，"捂脸"球得2分，弹珠掉入洞口则游戏结束，显示总得分。

要实现上述功能需将作品分成两部分进行设计，即Processing和Arduino开发板。Arduino开发板包括检测水银开关状态并进行读取，向串口发送字符；Processing程序设计主要分析弹珠台的碰撞。为了简化程序设计，可以认为小球与小球、小球与直线之间的碰撞。

#### 1．整体框架图 {.text-title1}

整体框架如图11-1所示。

::: {.zhangyue-c}
![CmQUOF7Vz86EaGv_AAAAAEZOqQA087667910.jpg](https://i.imgur.com/vpGZTgb.jpeg){.zhangyue-img3}

图11-1　整体框架图
:::

#### 2．系统流程图 {.text-title1}

系统流程如图11-2所示。

::: {.zhangyue-c}
![CmQUOV7Vz86EBhhmAAAAAETkCVU502469238.jpg](https://i.imgur.com/XusZ3xk.jpeg){.zhangyue-img}

图11-2　系统流程图
:::

#### 3．总电路图 {.text-title1}

总电路如图11-3所示，引脚连接如表11-1所示。

::: {.zhangyue-c}
![CmQUOV7Vz86ENcycAAAAALdbaQA227628063.jpg](https://i.imgur.com/oPwU9oU.jpeg){.zhangyue-img}

图11-3　总电路图
:::

::: {.zhangyue-c}
表11-1　引脚连接表

![CmQUOV7Vz9KEVOUAAAAAAKRVm20846579933.jpg](https://i.imgur.com/yzmByZp.jpeg){.zhangyue-img}
:::
:::

[]{#chapter-58.xhtml}

::: {.calibre1}
## 11.2　模块介绍 {.tpl-185-title}

::: {.tpl-185-box-cuxian}
:::

::: {.tpl-185-box-middle}
:::

本项目主要包括Arduino开发板与Processing模块。下面分别给出各模块的功能介绍及相关代码。

### 11.2.1　Arduino开发板 {#chapter-58.xhtml#AUTO_ID_55 .text-title}

本部分包括主程序模块的功能介绍及相关代码。

#### 1．功能介绍 {.text-title1}

主要是检测开关状态并读取，最终向串口发射字符，此部分主要由C++代码实现，编译环境为Arduino IDE，硬件部分为Arduino开发板。

#### 2．相关代码 {.text-title1}

::: {.zhangyue-c}
![CmQUOV7Vz86Ef7u_AAAAAGTA1QM238626272.jpg](https://i.imgur.com/LywKqqc.jpeg){.zhangyue-img}
:::

### 11.2.2　Processing模块 {#chapter-58.xhtml#AUTO_ID_56 .text-title}

本部分包括Processing的功能介绍及相关代码。

#### 1．功能介绍 {.text-title1}

Processing模块用来生成游戏界面，生成球、线等元素并且加以分析计算，对小球类（弹珠）分析：小球的基本属性有位置、半径、速度、加速度。基本要求是能够运动，与其他小球相遇会发生碰撞，并且显示在屏幕上。

对直线类（弹射挡板）分析：直线的基本属性有两端点位置、长度、角度。基本要求是挡板根据键盘或水银开关控制旋转，与弹珠相遇会发生碰撞，子弹射出去，并且显示在屏幕上。

#### 2．相关代码 {.text-title1}

::: {.zhangyue-c}
![CmQUOF7Vz86EZT9AAAAAAL-EQp8567864941.jpg](https://i.imgur.com/EEgrwSa.jpeg){.zhangyue-img}
:::

::: {.zhangyue-c}
![CmQUOF7Vz86EC8ikAAAAAPNsIKQ416220713.jpg](https://i.imgur.com/eN0KYvk.jpeg){.zhangyue-img}
:::

::: {.zhangyue-c}
![CmQUOV7Vz86EPTKrAAAAAJLejJQ011608898.jpg](https://i.imgur.com/8cjKCSP.jpeg){.zhangyue-img}
:::

::: {.zhangyue-c}
![CmQUOV7Vz86EK4ebAAAAANJYQ_E138071294.jpg](https://i.imgur.com/KJnsuuo.jpeg){.zhangyue-img}
:::

::: {.zhangyue-c}
![CmQUOF7Vz86EQZaWAAAAADJCehg747403069.jpg](https://i.imgur.com/FtGTWQm.jpeg){.zhangyue-img}
:::

::: {.zhangyue-c}
![CmQUOF7Vz86EAnC5AAAAAFc9lf8350598440.jpg](https://i.imgur.com/BYOj06q.jpeg){.zhangyue-img}
:::

::: {.zhangyue-c}
![CmQUOF7Vz86EaxvmAAAAACdSuoY143473358.jpg](https://i.imgur.com/4frhvi2.jpeg){.zhangyue-img}
:::

::: {.zhangyue-c}
![CmQUOV7Vz8-EQRRNAAAAAGJyKlw082820033.jpg](https://i.imgur.com/0UgRmGk.jpeg){.zhangyue-img}
:::
:::

[]{#chapter-59.xhtml}

::: {.calibre1}
## 11.3　产品展示 {.tpl-185-title}

::: {.tpl-185-box-cuxian}
:::

::: {.tpl-185-box-middle}
:::

游戏初始界面如图11-4所示，游戏结束界面如图11-5所示，游戏控制界面如图11-6所示。

::: {.zhangyue-c}
![CmQUOV7Vz8-EenA6AAAAALPqzhs885130032.jpg](https://i.imgur.com/U7Elkbm.jpeg){.zhangyue-img}

图11-4　游戏初始界面图
:::

::: {.zhangyue-c}
![CmQUOF7Vz8-EdGZdAAAAADD067s900018232.jpg](https://i.imgur.com/ZtTugRu.jpeg){.zhangyue-img3}

图11-5　游戏结束界面图
:::

::: {.zhangyue-c}
![CmQUOV7Vz8-EV0n9AAAAACBiol0717111218.jpg](https://i.imgur.com/AqXGnKB.jpeg){.zhangyue-img3}

图11-6　游戏控制界面图
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

![CmQUOF7Vz9KESPB0AAAAAHq1Kxc660497922.jpg](https://i.imgur.com/UipMPbK.jpeg){.zhangyue-img}
:::
:::

[]{#chapter-61.xhtml}

::: {.h5_mainbody_bg1}
::: {.h5_rule_hv}
# 第12章 {.tpl-133-text-1-num}

::: {.tpl-133-div-line}
# 贪吃蛇小游戏项目设计 ![CmQUOF7Vz9SEEELAAAAAAF19EmE719769063.png](https://i.imgur.com/pnxVOCF.jpeg){.zhangyue-footnote} {.tpl-133-title-1-center}
:::

::: {.tpl-133-pic-center}
![CmQUOF7Vz9SEE6btAAAAALGIiMg316210040.png](https://i.imgur.com/MlU52LF.jpeg){.tpl-133-pic-img-h}
:::
:::
:::

::: {.calibre1}
本项目基于Arduino开发板设计一种简单实用的贪吃蛇游戏平台。
:::

[]{#chapter-62.xhtml}

::: {.calibre1}
## 12.1　功能及总体设计 {.tpl-185-title}

::: {.tpl-185-box-cuxian}
:::

::: {.tpl-185-box-middle}
:::

本项目模拟了贪吃蛇小游戏，通过Joystick shield扩展板和Arduino LCD 5110a点阵显示屏模拟了贪吃蛇小游戏的输入和输出。

要实现上述功能需将作品分成三部分进行设计，即输入部分、处理部分和输出部分。输入部分选用了一个Joystick shield扩展板，运用上面的A、B、C、D键来实现；处理部分主要通过C++程序实现；输出部分使用Arduino LCD 5110a点阵显示屏实现。

#### 1．整体框架图 {.text-title1}

整体框架如图12-1所示。

::: {.zhangyue-c}
![CmQUOF7Vz8-EHTl_AAAAAPBrXqo015924865.jpg](https://i.imgur.com/WlpaWz6.jpeg){.zhangyue-img}

图12-1　整体框架图
:::

#### 2．系统流程图 {.text-title1}

系统流程如图12-2所示。

#### 3．总电路图 {.text-title1}

总电路如图12-3所示，引脚连接如表12-1所示。

::: {.zhangyue-c}
![CmQUOV7Vz8-EcBnNAAAAADecxbs005684674.jpg](https://i.imgur.com/Ar6kyVH.jpeg){.zhangyue-img3}

图12-2　系统流程图
:::

::: {.zhangyue-c}
![CmQUOF7Vz8-ES_FFAAAAAPU-14A615322923.jpg](https://i.imgur.com/kmqlOqv.jpeg){.zhangyue-img}

图12-3　总电路图
:::

::: {.zhangyue-c}
表12-1　引脚连接表

![CmQUOF7Vz9KETSMWAAAAAPNku9I482405041.jpg](https://i.imgur.com/2yw5rj5.jpeg){.zhangyue-img}
:::
:::

[]{#chapter-63.xhtml}

::: {.calibre1}
## 12.2　模块介绍 {.tpl-185-title}

::: {.tpl-185-box-cuxian}
:::

::: {.tpl-185-box-middle}
:::

本项目主要包括主程序模块、Joystick shield扩展板模块和Arduino LCD 5110a点阵显示屏模块。下面分别给出各模块的功能介绍及相关代码。

### 12.2.1　主程序模块 {#chapter-63.xhtml#AUTO_ID_57 .text-title}

本部分包括主程序模块的功能介绍及相关代码。

#### 1．功能介绍 {.text-title1}

将Joystick shield扩展板上的输入信息，通过C++程序转化为Arduino LCD 5110a点阵屏上的图形。

#### 2．相关代码 {.text-title1}

::: {.zhangyue-c}
![CmQUOF7Vz8-EdlahAAAAAMWle0s858115117.jpg](https://i.imgur.com/rWXFx9h.jpeg){.zhangyue-img1}
:::

::: {.zhangyue-c}
![CmQUOV7Vz8-EZtFpAAAAAGbdgo0228499861.jpg](https://i.imgur.com/07DCPAN.jpeg){.zhangyue-img1}
:::

::: {.zhangyue-c}
![CmQUOF7Vz8-EPTk0AAAAAF-lPaY742045630.jpg](https://i.imgur.com/pLTiq2M.jpeg){.zhangyue-img}
:::

::: {.zhangyue-c}
![CmQUOF7Vz8-ECAp3AAAAAIjfHbA054725635.jpg](https://i.imgur.com/CZ1w0SR.jpeg){.zhangyue-img}
:::

::: {.zhangyue-c}
![CmQUOV7Vz8-EGiHIAAAAAKlIDso704632343.jpg](https://i.imgur.com/sIXIQUX.jpeg){.zhangyue-img}
:::

::: {.zhangyue-c}
![CmQUOF7Vz8-EDMldAAAAABMoGF8992746821.jpg](https://i.imgur.com/YRTyGrm.jpeg){.zhangyue-img}
:::

### 12.2.2　Joystick shield扩展板模块 {#chapter-63.xhtml#AUTO_ID_58 .text-title}

本部分包括Joystick shield扩展板模块的功能介绍及相关代码。

#### 1．功能介绍 {.text-title1}

本部分将Joystick shield扩展板模块上A、B、C、D四个按键的输入信号转化为主程序中C++的输入代码。模块连接图只需将Joystick shield扩展板模块与Arduino开发板直接连接即可。

#### 2．相关代码 {.text-title1}

此代码为测试代码，可以测试摇杆及A、B、C、D四个按键的性能。

::: {.zhangyue-c}
![CmQUOV7Vz8-EDVFCAAAAAF6n0QQ235493773.jpg](https://i.imgur.com/xKjiK8M.jpeg){.zhangyue-img2}
:::

### 12.2.3　Arduino LCD5110a模块 {#chapter-63.xhtml#AUTO_ID_59 .text-title}

本部分包括Arduino LCD 5110a模块的功能介绍及相关代码。

#### 1．功能介绍 {.text-title1}

本部分将主程序输出信号转化为点阵显示屏上的图形（显示在库文件中，故不包含于总代码中），连接如图12-4所示。

::: {.zhangyue-c}
![CmQUOF7Vz8-EZMgSAAAAAJ_S_pc241454024.jpg](https://i.imgur.com/Shp67Ua.jpeg){.zhangyue-img3}

图12-4　Arduino LCD 5110a模块部分连接图
:::

#### 2．相关代码 {.text-title1}

::: {.zhangyue-c}
![CmQUOV7Vz8-Ec_52AAAAAFSeHjI406330263.jpg](https://i.imgur.com/bujaYsG.jpeg){.zhangyue-img}
:::
:::

[]{#chapter-64.xhtml}

::: {.calibre1}
## 12.3　产品展示 {.tpl-185-title}

::: {.tpl-185-box-cuxian}
:::

::: {.tpl-185-box-middle}
:::

产品整体外观如图12-5所示。

::: {.zhangyue-c}
![CmQUOF7Vz8-EPYepAAAAAHM9MMM482413691.jpg](https://i.imgur.com/qdy2zTw.jpeg){.zhangyue-img}

图12-5　整体外观图
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

![CmQUOV7Vz9KEQBLCAAAAAGkDP4g537416307.jpg](https://i.imgur.com/mPcJ7HT.jpeg){.zhangyue-img}
:::
:::

[]{#chapter-66.xhtml}

::: {.calibre1}
# 参考文献 {.tpl-231-title}

::: {.tpl-231-box-middle}
:::

［1］李永华，高英，陈青云．Arduino软硬件协同设计实战指南［M］．北京：清华大学出版社，2015．

［2］刘玉田，徐勇进．用Arduino进行创造［M］．2版．北京：清华大学出版社，2014．

［3］赵英杰．完美图解Arduino互动设计入门［M］．北京：科学出版社，2014．

［4］Evans M，Noble J，Hochenbaum J．Arduino实战［M］．况琪，译．北京：人民邮电出版社，2014．

［5］Boxall J．动手玩转Arduino［M］．翁恺，译．北京：人民邮电出版社，2014．

［6］刘培植．数字电路与逻辑设计［M］．2版．北京：北京邮电大学出版社，2013．

［7］Monk S. Arduino编程从零开始［M］．刘椮楠，译．北京：科学出版社，2013．

［8］McRoberts M. Arduino从基础到实践［M］．杨继志，郭敬，译．北京：电子工业出版社，2013．

［9］黄文恺，伍冯洁，陈虹．Arduino开发实战指南［M］．北京：机械工业出版社，2014．

［10］唐文彦．传感器［M］．北京：机械工业出版社，2006．

［11］沈金鑫．Arduino与LabVIEW开发实践［M］．北京：机械工业出版社．2014．

［12］程晨．Arduino电子设计实战指南［M］．北京：机械工业出版社，2013．

［13］沙占友．集成传感器应用［M］．北京：中国电力出版社，2005．

［14］李军，李冰海．检测技术及仪表［M］．北京：中国轻工业出版社，2008．

［15］宋楠，韩广义．Arduino开发从零开始学------学电子的都玩这个［M］．北京：清华大学出版社，2014．

［16］刘敏，刘泽军，宋庆国．基于Arduino的简易亮光报警器的设计与实现［J］．电子世界，2012（21）：122-123．
:::
