![cover.jpeg](https://i.imgur.com/qMcdVbx.jpeg)

[]{#titlepage.xhtml}

```{=html}
<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" version="1.1" width="100%" height="100%" viewbox="0 0 276 400" preserveaspectratio="none">
```
`<image width="276" height="400" xlink:href="cover.jpeg">`{=html}`</image>`{=html}
```{=html}
</svg>
```

[]{#Sectio0001.xhtml}

#  {.calibre1 title="封面"}

::: {.calibre2}
![cover.jpeg](https://i.imgur.com/q4PPhvt.jpeg){.dd-fullscreen-v-h-both}
:::

[]{#Sectio0002.xhtml}

::: {.title_img}
![titlepage.jpg](https://i.imgur.com/JkJL8pm.jpeg){.pic-img width="1280" height="1777"}
:::

[]{#Sectio0003.xhtml}

**本书封面贴有清华大学出版社防伪标签，无标签者不得销售。**

**版权所有，侵权必究。侵权举报电话：010-62782989　13701121933**

**图书在版编目（CIP）数据**

Arduino项目开发------音乐创意／李永华，彭木根编著．---北京：清华大学出版社，2019（清华开发者书库）

ISBN 978-7-302-52823-4

Ⅰ．①A...　Ⅱ．①李...②彭...　Ⅲ．①单片微型计算机---程序设计　Ⅳ．①TP368.1

中国版本图书馆CIP数据核字（2019）第082352号

**责任编辑：**赵　凯

**封面设计：**李召霞

**责任校对：**徐俊伟

**责任印制：**宋　林

**出版发行：**清华大学出版社

**网　　址：**http：//www.tup.com.cn，http：//www.wqbook.com

**地　　址：**北京清华大学学研大厦A座

**邮　　编：**100084

**[社总]{.space}机：**010-62770175

**邮　　购：**010-62786544

**投稿与读者服务：**010-62776969，c-service\@tup.tsinghua.edu.cn

**质量反馈：**010-62772015，zhiliang\@tup.tsinghua.edu.cn

**课件下载：**http：//www.tup.com.cn，010-62795954

**[印装]{.space}者：**三河市铭诚印务有限公司

**经　　销：**全国新华书店

**开　　本：**185mm×260mm

**印　　张：**19.5

**字　　数：**487千字

**版　　次：**2019年9月第1版

**印　　次：**2019年9月第111次印刷

**定　　价：**69.00元

------------------------------------------------------------------------

产品编号：083921-01

[]{#Sectio0004.xhtml}

# 内容简介 {#Sectio0004.xhtml#pre1_1 .prefacetitle-c}

本书系统论述了Arduino开源硬件的架构、原理、开发方法，并给出12个完整的项目设计案例。

在编排方式上，全书侧重对创新产品的项目设计过程进行介绍。分别从需求分析、设计与实现等角度论述硬件电路、软件设计、传感器和功能模块等，并剖析产品的功能、使用、电路连接和程序代码。为便于读者高效学习，快速掌握Arduino开发方法，本书配套提供项目设计的硬件电路图、程序代码、实现过程中出现的问题及解决方法，可供读者举一反三，二次开发。

本书可作为高校电子信息类专业"开源硬件设计""电子系统设计""创新创业"等课程的教材，也可作为创客及智能硬件爱好者的参考用书，还可作为从事物联网、创新开发和设计专业人员的技术参考书。

[]{#Sectio0005.xhtml}

# 前言 {#Sectio0005.xhtml#pre2_2 .prefacetitle-r}

物联网、智能硬件和大数据技术给社会带来了巨大的冲击，个性化、定制化和智能化的硬件设备成为未来的发展趋势。"中国制造2025"计划、德国的"工业4.0"及美国的"工业互联网"都是将人、数据和机器连接起来，其本质是工业的深度信息化，为未来智能社会的发展提供制造技术基础。

在"大众创业，万众创新"的时代背景下，人才培养方法和模式也应该满足当前的时代需求。编者依据当今信息社会的发展趋势，结合Arduino开源硬件的发展及智能硬件的发展要求，采取激励创新的工程教育方法，培养适应未来工业4.0发展的人才。因此，本书试图探索基于创新工程教育的基本方法，并将其提炼为适合我国国情、具有自身特色的创新实践教材，对实际教学中应用智能硬件的创新工程教学经验进行总结，包括具体的创新方法和开发案例，希望对教学及工业界有所帮助，起到抛砖引玉的作用。

本书的内容和素材主要来源于作者所在学校近几年承担的教育部和北京市的教育、教学改革项目和成果，也是北京邮电大学信息工程专业的同学们创新产品的设计成果。书中系统地介绍了如何利用Arduino平台进行产品开发，包括相关的设计、实现与产品应用，主要内容包括Arduino设计基础及音乐创意方面的案例。

本书的编写也得到了教育部电子信息类专业教学指导委员会、信息工程专业国家第一类特色专业建设项目、信息工程专业国家、第二类特色专业建设项目、教育部CDIO工程教育模式研究与实践项目、教育部本科教学工程项目、信息工程专业北京市特色专业建设、北京市教育教学改革项目、北京邮电大学教育教学改革项目（2019TD01）的大力支持。在此一并表示感谢！

由于作者水平有限，书中不妥之处在所难免，衷心希望广大读者多提宝贵意见及具体的整改措施，以便作者进一步修改和完善。

李永华

于北京邮电大学

2019年4月

[]{#Sectio0006.xhtml}

# 第1章　Arduino项目设计基础 {#Sectio0006.xhtml#isbn9787302528234_1 .chaptertitle}

### 1.1　开源硬件简介 {#Sectio0006.xhtml#isbn9787302528234_1_1_1 .txtheading}

电子电路是人类社会发展的重要成果，在早期的硬件设计和实现上都是公开的，包括电子设备、电器设备、计算机设备以及各种外围设备的设计原理图，大家认为公开是十分正常的事情，所以，早期公开的设计图并不称为开源。1960年前后，很多公司根据自身利益选择了闭源，由此也就出现了贸易壁垒、技术壁垒、专利版权等问题，不同公司之间也出现了互相起诉的情形。例如，国内外的IT公司之间由于知识产权而诉诸法律，屡见不鲜。虽然这种做法在一定程度上有利于公司自身的利益，但是，不利于小公司或者个体创新者的发展。特别是，在互联网进入Web 2.0的个性化时代背景下，更加需要开放、免费和开源的开发系统。

因此，在"大众创业，万众创新"的时代背景下，Web 2.0时代的开发者思考硬件是否可以重新进行开源。电子爱好者、发烧友及广大的创客一直致力于开源的研究，推动开源的发展，最初从很小的物品发展到现在，已经有3D打印机、开源的单片机系统等。也就是说，开源硬件是指与开源软件采取相同的方式，进行设计各种电子硬件的总称。也就是说，开源硬件是考虑对软件以外的领域进行开源，是开源文化的一部分。开源硬件是可以自由传播硬件设计的各种详细信息，例如，电路图、材料清单和开发板布局数据，通常使用开源软件来驱动开源的硬件系统。本质上，共享逻辑设计、可编程的逻辑元件重构也是一种开源硬件，通过硬件描述语言代码实现电路图共享。硬件描述语言通常用于芯片系统，也用于可编程逻辑阵列或直接用在专用集成电路中，这在当时也称之为硬件描述语言模块或IP核。

众所周知，Android就是开源软件之一。开源硬件和开源软件类似，通过开源软件可以更好地理解开源硬件，就是在之前已有硬件的基础之上进行二次开发。二者也有差别，体现在复制成本上，开源软件的成本几乎是零，而开源硬件的复制成本较高。另外，开源硬件延伸着开源软件代码的定义，包括软件、电路原理图、材料清单、设计图等都使用开源许可协议，自由使用分享，完全以开源的方式去授权，避免了以往DIY分享的授权问题。同时，开源硬件把开源软件常用的GPL、CC等协议规范带到硬件分享领域，为开源硬件的发展提供了标准。

### 1.2　Arduino开源硬件 {#Sectio0006.xhtml#isbn9787302528234_1_1_2 .txtheading}

本节主要介绍Arduino开源硬件的各种开发板和扩展板的使用方法、Arduino开发板的特性以及Arduino开源硬件的总体情况，以便更好地应用Arduino开源硬件进行开发创作。

#### 1.2.1　Arduino开发板 {#Sectio0006.xhtml#isbn9787302528234_1_1_2_1 .txtheading1}

Arduino开发板是基于开放原始代码简化的I/O平台，并且使用类似Java、C/C++语言的开发环境。可以快速使用Arduino语言与Flash或Processing软件，完成各种创新作品。Arduino开发板可以使用各种电子元件，例如，传感器、显示设备、通信设备、控制设备或其他可用设备。

Arduino开发板也可以独立使用，成为与其他软件沟通的平台，例如，Flash、Processing、Max/MSP、VVVV或其他互动软件。Arduino开发板的种类很多，包括Arduino UNO、YUN、DUE、Leonardo、Tre、Zero、Micro、Esplora、MEGA、MINI、NANO、Fio、Pro以及LilyPad Arduino等。随着开源硬件的发展，将会出现更多的开源产品，下面介绍几种典型的Arduino开发板。

Arduino UNO开发板是Arduino USB接口系列的常用版本，是Arduino平台的参考标准模板，如图1-1所示。Arduino UNO开发板的处理器核心是ATmega328，具有14个数字输入/输出引脚（其中6个可作为PWM输出）、6个模拟输入引脚、1个16MHz晶体振荡器、1个USB接口、1个电源插座、1个ICSP插头和1个复位按钮。

::: {.chatu_img}
![Figure-P10_7605.jpg](https://i.imgur.com/MobqcQI.jpeg){.pic-img-w width="798" height="501"}

图1-1　Arduino UNO
:::

如图1-2所示，Arduino YUN是一款基于ATmega32U4和Atheros AR9331的单片机开发板。Atheros AR9331可以运行基于Linux和OpenWRT的操作系统Linino。这款单片机开发板具有内置的Ethernet、WiFi、1个USB接口、1个Micro插槽、20个数字输入/输出引脚（其中7个可以用于PWM、12个可以用于ADC）、1个Micro USB接口、1个ICSP插头、3个复位开关。

::: {.chatu_img}
![Figure-P10_7609.jpg](https://i.imgur.com/sRF0mn5.jpeg){.pic-img-w width="828" height="577"}

图1-2　Arduino YUN
:::

如图1-3所示，Arduino DUE是一块基于Atmel SAM3X8E CPU的微控制器板。它是第一块基于32位ARM核心的Arduino开发板，有54个数字输入/输出引脚（其中12个可用于PWM输出）、12个模拟输入引脚、4个UART硬件串口、84MHz的时钟频率、1个USB OTG接口、2个DAC（模/数转换）、2个TWI、1个电源插座、1个SPI接口、1个JTAG接口、1个复位按键和1个擦写按键。

::: {.chatu_img}
![Figure-P11_7615.jpg](https://i.imgur.com/ZNgobJG.jpeg){.pic-img-w width="858" height="381"}

图1-3　Arduino DUE
:::

图1-4所示为Arduino MFGA 2560开发板，也是采用USB接口的核心开发板，它最大的特点就是具有多达54个数字输入/输出引脚，特别适合需要大量输入/输出引脚的设计。Arduino MEGA 2560的处理器核心是ATmega2560，具有54个数字输入/输出引脚（其中16个可作为PWM输出）、16个模拟输入引脚、4个UART接口、1个16MHz晶体振荡器、1个USB接口、1个电源插座、1个ICSP插头和1个复位按钮。Arduino MRGA 2560开发板也能兼容为Arduino UNO设计的扩展板。目前，Arduino MEGA 2560开发板已经发布到第3版，与前两版相比有以下新的特点：

::: {.chatu_img}
![Figure-P11_7619.jpg](https://i.imgur.com/BveFkPg.jpeg){.pic-img-w1 width="868" height="414"}

图1-4　Arduino MEGA 2560开发板
:::

①在AREF处增加了两个引脚SDA和SCL，支持I^2^C接口；增加IOREF和1个预留引脚，以便将来扩展板能够兼容5V和3.3V核心板，改进了复位电路设计；USB接口芯片由ATmega16U2替代了ATmega8U2。

②Arduino MEGA 2560开发板可以通过三种方式供电：外部直流电源通过电源插座供电，电池连接电源连接器的GND和VIN引脚供电，USB接口直接供电，而且，它能自动选择供电方式。

电源引脚说明如下：

①VIN：当外部直流电源接入电源插座时，可以通过VIN向外部供电，也可以通过此引脚向Arduino MEGA 2560开发板直接供电；VIN供电时将忽略从USB或者其他引脚接入的电源。

②5V：通过稳压器或USB的5V电压，为Arduino MEGA 2560开发板上的5V芯片供电。

③3.3V：通过稳压器产生的3.3V电压，最大驱动电流为50mA。

④GND：接地引脚。

如图1-5所示，Arduino Leonardo是一款基于ATmega32u4的微控制器。它有20个数字输入/输出引脚（其中7个可用于PWM输出、12个可用于模拟输入）、1个16 MHz晶体振荡器、1个Micro USB连接、1个电源插座、1个ICSP头和1个复位按钮。具有支持微控制器所需的一切功能，只需通过USB电缆将其连至计算机，或者通过电源适配器、电池为其供电即可使用。

Leonardo与先前的所有开发板都不同，ATmega32u4具有内置式USB通信，从而无须二级处理器。这样，除了虚拟（CDC）串行/通信端口，Leonardo还可以充当计算机的鼠标和键盘，它对开发板的性能也会产生影响。

如图1-6所示，Arduino Ethernet是一款基于ATmega328的开发板。它有14个数字输入/输出引脚、6个模拟输入引脚、1个16 MHz晶体振荡器、1个RJ45连接、1个电源插座、1个ICSP头和1个复位按钮。引脚10、11、12和13只能用于连接以太网模块，不可作为他用，可用引脚只有9个，其中4个可用于PWM输出。

::: {.chatu_img}
![Figure-P12_7626.jpg](https://i.imgur.com/DnHMfXJ.jpeg){.pic-img-w2 width="698" height="531"}

图1-5　Arduino Leonardo
:::

::: {.chatu_img}
![Figure-P12_7630.jpg](https://i.imgur.com/vBL2FVR.jpeg){.pic-img-w2 width="733" height="507"}

图1-6　Arduino Ethernet
:::

Arduino Ethernet没有板载USB转串口驱动器芯片，但是有1个WIZnet以太网接口。该接口与以太扩展板相同。板载microSD读卡器可用于存储文件，能够通过SD库进行访问。引脚10留为WIZnet接口，SD卡的SS在引脚4上。引脚6串行编程头与USB串口适配器兼容，与FTDI USB电缆、Sparkfun和Adafruit FTDI式基本USB转串口分线板也兼容。它支持自动复位，从而无须按下开发板上的复位按钮即可上传程序代码。当插入USB转串口适配器时，Arduino Ethernet由适配器供电。

如图1-7所示，Arduino Robot是一款有轮子的Arduino开发板。Arduino Robot有控制板和电机板，每个开发板上有1个处理器，共2个处理器。电机板控制电机，控制板读取传感器的数值并决定如何操作。每个开发板都是完整的Arduino开发板，用Arduino IDE进行编程。直流电机板和控制板都是基于ATmega32u4的微控制器。Arduino Robot将它的一些引脚映射到板载的传感器和制动器上。

Arduino Robot编程的步骤与Arduino Leonardo类似，2个处理器都有内置式USB通信，无须二级处理器，可以充当计算机的虚拟（CDC）串行/通信端口。Arduino Robot有一系列预焊接连接器，所有连接器都标注在开发板上，通过Arduino Robot库映射到指定的端口上，从而使用标准Arduino函数，在5V电压下，每个引脚都可以提供或接受最高40mA的电流。

如图1-8所示，Arduino NANO是一款小巧、全面且基于ATmega328的开发板，与Arduino Duemilanove的功能类似，但封装不同，没有直流电源插座且采用Mini-B USB电缆。Arduino NANO开发板上的14个数字引脚都可用于输入或输出，利用pinMode（）、digitalWrite（）和digitalRead（）函数可以对它们操作。工作电压为5V，每个引脚都可以提供或接受最高40mA的电流，都有1个20\~50kΩ的内部上拉电阻器（默认情况下断开）。Arduino NANO开发板有8个模拟输入，每个模拟输入都提供10位的分辨率（即1024个不同的数值）。默认情况下，它们的电压为0\~5V，可以利用analogReference（）函数改变其电压范围的上限值，模拟引脚6和7不能作为数字引脚。

::: {.chatu_img}
![Figure-P13_7637.jpg](https://i.imgur.com/KmWEp00.jpeg){.pic-img-w width="795" height="323"}

图1-7　Arduino Robot
:::

::: {.chatu_img}
![Figure-P13_7641.jpg](https://i.imgur.com/LkXXdnu.jpeg){.pic-img-w2 width="720" height="299"}

图1-8　Arduino NANO
:::

#### 1.2.2　Arduino扩展板 {#Sectio0006.xhtml#isbn9787302528234_1_1_2_2 .txtheading1}

在Arduino开源硬件系列中，除了主要开发板之外，还有与之配合使用的各种扩展板，可以插到开发板上增加额外的功能。选择适合的扩展板，可以增强系统开发的功能，常见的扩展板有Arduino Ethernet Shield、Arduino GSM Shield、Arduino Motor Shield、Arduino 9 Axes Motion Shield等。

Arduino Ethernet Shield（以太网盾）如图1-9所示，有1个标准的有线RJ-45连接，具有集成式线路变压器和以太网供电功能，可将Arduino开发板连接到互联网。基于WIZnet W5500以太网芯片，提供网络（IP）堆栈，支持TCP和UDP协议。可以同时支持8个套接字连接，使用以太网库写入程序代码。

以太网盾板利用贯穿盾板的长绕线排与Arduino开发板连接，保持引脚布局完整无缺，以便其他盾板可以堆叠其上。它有1个板载micro-SD卡槽，可用于存储文件，与Arduino UNO和MEGA兼容，可通过SD库访问板载micro-SD读卡器。以太网盾板带有1个供电（PoE）模块，可从传统的5类电缆获取电力。

Arduino GSM Shield如图1-10所示，为了连接蜂窝网络，扩展板需要一张由网络运营商提供的SIM卡。它通过移动通信网将Arduino开发板连接到互联网，可拨打/接听语音电话和发送/接收SMS信息。

::: {.chatu_img}
![Figure-P14_7648.jpg](https://i.imgur.com/t2Da18X.jpeg){.pic-img-w2 width="746" height="556"}

图1-9　Arduino Ethernet Shield
:::

::: {.chatu_img}
![Figure-P14_7652.jpg](https://i.imgur.com/vx9UyMu.jpeg){.pic-img-w2 width="709" height="391"}

图1-10　Arduino GSM Shield
:::

Arduino GSM Shield采用Quectel的无线调制解调器M10，利用AT命令与开发板通信。GSM Shield利用数字引脚2、3与M10进行软件串行通信，引脚2连接M10的TX引脚，引脚3连接RX引脚，调制解调器的PWRKEY连接引脚7。

M10是一款四频GSM/GPRS调制解调器，其工作频率如下：GSM850MHz、GSM900MHz、DCS1800MHz和PCS1900MHz。它通过GPRS连接支持TCP/UDP和HTTP。其中GPRS数据下行链路和上行链路的最大传输速度为85.6kb/s。

Arduino Motor Shield如图1-11所示，用于驱动电感负载（例如继电器、螺线管、直流和步进电机）的双全桥驱动器L298，利用Arduino Motor Shield可以驱动2个直流电机，独立控制每个电机的速度和方向。因此，它有2条独立的通道，即A和B，每条通道使用4个开发板引脚来驱动或感应电机。Arduino Motor Shield上使用的引脚共8个，不仅可以单独驱动2个直流电机，也可以将它们合并起来驱动1个双极步进电机。

Arduino 9 Axes Motion Shield如图1-12所示，它采用德国博世传感器技术有限公司推出的BNO055绝对方向传感器。这是一个使用系统级封装，集成三轴14位加速计、三轴16位陀螺仪、三轴地磁传感器，并运行BSX3.0 FusionLib软件的32位微控制器。BNO055在3个垂直的轴上具有三维加速度、角速度和磁场强度数据。

::: {.chatu_img}
![Figure-P14_7656.jpg](https://i.imgur.com/vnYiqu6.jpeg){.pic-img-w2 width="674" height="519"}

图1-11　Arduino Motor Shield
:::

::: {.chatu_img}
![Figure-P14_7660.jpg](https://i.imgur.com/KiRXfRn.jpeg){.pic-img-w width="813" height="633"}

图1-12　Arduino 9 Axes Motion Shield
:::

另外，它还提供传感器融合信号，如四元数、欧拉角、旋转矢量、线性加速、重力矢量。结合智能中断引擎，可以基于慢动作或误动作识别、任何动作（斜率）检测、高g检测等项触发中断。

Arduino 9 Axes Motion Shield兼容UNO、YNO、Leonardo、Ethernet、MEGA和DUE开发板。在使用Arduino 9 Axes Motion Shield时，要根据使用的开发板将中断桥和重置桥焊接在正确的位置。

### 1.3　Arduino软件开发平台 {#Sectio0006.xhtml#isbn9787302528234_1_1_3 .txtheading}

本节主要介绍Arduino开发环境的特点及使用方法，包括Arduino开发环境的安装以及简单的硬件系统与软件调试方法。

#### 1.3.1　Arduino平台特点 {#Sectio0006.xhtml#isbn9787302528234_1_1_2_3 .txtheading1}

作为目前最流行的开源硬件开发平台，其优点包括以下三方面：

（1）开放源代码的电路图设计和程序开发界面，可免费下载、根据需求自己修改；Arduino可使用ICSP线上烧录器，将Bootloader烧入新的IC芯片；也可依据官方电路图，简化Arduino模组，完成独立运作的微处理控制。

（2）能够与传感器或各式各样的电子元件连接（如红外线、超音波、热敏电阻、光敏电阻、伺服电机等）；支持多样的互动程序，如Flash、Max/Msp、VVVV、PD、C、Processing等；使用低价格的微处理控制器；USB接口无须外接电源；可提供9V直流电源输入以及多样化的Arduino扩展模块。

（3）在应用方面，通过各种各样的传感器来感知环境、控制灯光、直流电机和其他的装置来反馈并影响环境；可以方便地连接以太网扩展模块进行网络传输，使用蓝牙传输、WiFi传输、无线摄像头控制等多种应用。

#### 1.3.2　Arduino IDE的安装 {#Sectio0006.xhtml#isbn9787302528234_1_1_2_4 .txtheading1}

Arduino IDE是Arduino开放源代码的集成开发环境，它的界面友好，语法简单且方便下载程序，这使得Arduino的程序开发变得非常便捷。作为一款开放源代码的软件，Arduino IDE也是由Java、Processing、AVR-GCC等开放源代码的软件写成的。Arduino IDE另一个特点是跨平台的兼容性，适用于Windows、Mac OS X以及Linux。2011年11月30日，Arduino官方正式发布了Arduino 1.0版本，可以下载不同操作系统的压缩包，也可以在GitHub上下载源码重新编译自己的Arduino IDE。安装过程如下：

::: {.chatu_img-float-r-w}
![Figure-P15_7672.jpg](https://i.imgur.com/oHSu35X.jpeg){.pic-img width="524" height="208"}

图1-13　Arduino下载界面
:::

（1）从Arduino官网下载最新版本IDE，下载界面如图1-13所示。

如图1-13所示，选择适合自己计算机操作系统的安装包，这里以在64位Windows 7系统的安装过程为例。

（2）双击EXE文件选择安装，弹出如图1-14所示的界面。

::: {.chatu_img}
![Figure-P16_7678.jpg](https://i.imgur.com/PPaOatq.jpeg){.pic-img-w3 width="960" height="542"}

图1-14　Arduino安装界面
:::

（3）同意协议如图1-15所示，单击"I Agree"按钮。

::: {.chatu_img}
![Figure-P16_7682.jpg](https://i.imgur.com/HLBdrYY.jpeg){.pic-img-w1 width="956" height="674"}

图1-15　Arduino协议界面
:::

（4）选择需要安装的组件，如图1-16所示，单击"Next"按钮。

::: {.chatu_img}
![Figure-P16_7686.jpg](https://i.imgur.com/iF5FSvo.jpeg){.pic-img-w3 width="963" height="661"}

图1-16　Arduino选择安装组件
:::

（5）选择安装位置，如图1-17所示，单击"Install"按钮。

（6）安装过程如图1-18所示。

（7）安装USB驱动，如图1-19所示。

（8）安装完成，如图1-20所示。

::: {.chatu_img}
![Figure-P17_7692.jpg](https://i.imgur.com/lubg2tV.jpeg){.pic-img-w width="848" height="590"}

图1-17　Arduino选择安装位置
:::

::: {.chatu_img}
![Figure-P17_7695.jpg](https://i.imgur.com/U5Nqarw.jpeg){.pic-img-w width="840" height="583"}

图1-18　Arduino安装过程
:::

::: {.chatu_img}
![Figure-P17_7698.jpg](https://i.imgur.com/I4Wor9n.jpeg){.pic-img-w width="837" height="439"}

图1-19　Arduino安装USB驱动
:::

::: {.chatu_img}
![Figure-P17_7701.jpg](https://i.imgur.com/79citg7.jpeg){.pic-img-w width="847" height="593"}

图1-20　Arduino安装完成
:::

（9）进入Arduino IDE开发界面，如图1-21所示。

::: {.chatu_img}
![Figure-P18_7707.jpg](https://i.imgur.com/qJT2M3Z.jpeg){.pic-img-w4 width="1280" height="933"}

图1-21　Arduino IDE主界面
:::

#### 1.3.3　Arduino IDE的使用 {#Sectio0006.xhtml#isbn9787302528234_1_1_2_5 .txtheading1}

首次使用Arduino IDE时，需要将Arduino开发板通过USB线连接到计算机，计算机会为Arduino开发板安装驱动程序，并分配相应的COM端口，如COM1、COM2等。不同的计算机和系统分配的COM端口是不一样的，所以，安装完毕后，要在计算机的硬件管理中查看Arduino开发板被分配到哪个COM端口，这个端口就是计算机与Arduino开发板的通信端口。

Arduino开发板的驱动安装完毕，需要在Arduino IDE中设置相应的端口和开发板类型。

方法如下：Arduino集成开发环境启动后，在菜单栏中单击"工具"→"端口"命令，进行端口设置，设置计算机硬件管理中分配的端口。然后，在菜单栏中单击"工具"→"开发板"命令，选择Arduino开发板的类型，如Arduino UNO、DUE、YUN等前面介绍的开发板，这样计算机就可以与开发板进行通信，工具栏显示的功能如图1-22所示。

在Arduino IDE中带有很多种示例，包括基本的、数字的、模拟的、控制的、通信的、传感器的、字符串的、存储卡的、音频的、网络等多种示例。下面介绍最简单、最具有代表性的例子------Blink，以便于读者快速熟悉Arduino IDE，从而开发出新的产品。

::: {.chatu_img}
![Figure-P19_7714.jpg](https://i.imgur.com/mPKdwQQ.jpeg){.pic-img-w5 width="1109" height="1124"}

图1-22　Arduino IDE的工具栏功能
:::

在菜单栏中依次单击"文件"→"示例"→01Basic→Blink命令，这时在主编辑窗口会出现可以编辑的程序。这个Blink范例程序的功能是控制LED的亮灭。在Arduino编译环境中，是以C/C++的风格来编写的，程序的前面几行是注释行，介绍程序的作用及相关的声明等；然后是变量的定义，最后是Arduino程序的两个函数，即void setup（）和void loop（）。在void setup（）中的代码会在导通电源时执行一次，void loop（）中的代码会不断重复执行。由于在Arduino UNO开发板引脚13上有LED，所以定义整型变量LED=13，用于函数的控制。另外，程序中用了一些函数，pinMode（）是设置引脚的作用为输入还是输出；delay（）是设置延迟的时间，单位为毫秒；digitalWrite（）是向LED变量写入相关的值，使得引脚13 LED的电平发生变化，即HIGH或者LOW，这样LED就会根据延迟的时间交替地亮与灭。

完成程序编辑之后，在工具栏中找到存盘按钮，将程序进行存盘；然后，在工具栏找到上传按钮，单击该按钮将被编辑后的程序上传到Arduino开发板中，使得开发板按照修改后的程序运行；同时，还可以单击工具栏的串口监视器，观看串口数据的传输情况，它是非常直观、高效的调试工具。

编辑窗口中的程序如下：

::: {.chatu_img}
![Figure-P19_15703.jpg](https://i.imgur.com/ifAaDrQ.jpeg){.pic-img width="1280" height="691"}
:::

当然，目前还有其他支持Arduino的开发环境，如SonxunStudio，它是由松迅科技公司开发的集成开发环境。目前只支持Windows系统的Arduino系统开发，包括Windows XP以及Windows 7，使用方法与Arduino IDE大同小异，由于篇幅有限，这里不再一一赘述。

### 1.4　Arduino编程语言 {#Sectio0006.xhtml#isbn9787302528234_1_1_4 .txtheading}

Arduino编程语言是建立在C/C++语言基础上的，即以C/C++为语言基础，把AVR单片机（微控制器）相关的一些寄存器参数设置等进行函数化，以利于开发者更加快速地使用。其主要使用的函数包括：数字I/O引脚操作函数、模拟I/O引脚操作函数、高级I/O引脚操作函数、时间函数、中断函数、通信函数和数学函数等。

#### 1.4.1　Arduino编程基础 {#Sectio0006.xhtml#isbn9787302528234_1_1_2_6 .txtheading1}

关键字：if、if...else、for、switch、case、while、do...while、break、continue、return、goto。

语法符号：每条语句以分号"；"结尾，每段程序以花括号"{}"括起来。

数据类型：boolean、char、int、unsigned int、long、unsigned long、float、double、string、array、void。

常量：HIGH或者LOW，表示数字I/O引脚的电平，HIGH表示高电平（1），LOW表示低电平（0）。INPUT或者OUTPUT，表示数字I/O引脚的方向，INPUT表示输入（高阻态），OUTPUT表示输出（AVR能提供5V电压，40mA电流）。TRUE或者FALSE，TRUE表示真（1），FALSE表示假（0）。

程序结构：主要包括两部分，void setup（）和void loop（）。其中，void setup（）是声明变量及引脚名称（如：int val；int ledPin=13；），在程序开始时使用，初始化变量和引脚模式，调用库函数，如pinMode（ledPin，OUTPUT）。而void loop（）用在setup（）函数之后，不断地循环执行，是Arduino的主体。

#### 1.4.2　数字I/O引脚的操作函数 {#Sectio0006.xhtml#isbn9787302528234_1_1_2_7 .txtheading1}

1\. pinMode（pin，mode）

pinMode函数用于配置引脚以及设置输出或输入模式，是一个无返回值函数。该函数有两个参数，pin和mode。pin参数表示要配置的引脚，mode参数表示设置该引脚的模式为INPUT（输入）或OUTPUT（输出）。

INPUT用于读取信号，OUTPUT用于输出控制信号。pin的范围是数字引脚0\~13，也可以把模拟引脚（A0\~A5）作为数字引脚使用，此时引脚14对应模拟引脚0，引脚19对应模拟引脚5。该函数一般会放在setup（）里，先设置再使用。

2\. digitalWrite（pin，value）

该函数的作用是设置引脚的输出电压为高电平或低电平，也是一个无返回值的函数。

pin参数表示所要设置的引脚，value参数表示输出的电压HIGH（高电平）或LOW（低电平）。

::: {.boxblock-c}
注意：使用前必须先用pinMode设置。
:::

3\. digitalRead（pin）

该函数在引脚设置为输入的情况下，可以获取引脚的电压情况HIGH（高电平）或者LOW（低电平）。

数字I/O引脚操作函数使用例程如下：

::: {.chatu_img}
![Figure-P21_15706.jpg](https://i.imgur.com/UQNj0Vq.jpeg){.pic-img width="1280" height="498"}
:::

#### 1.4.3　模拟I/O引脚的操作函数 {#Sectio0006.xhtml#isbn9787302528234_1_1_2_8 .txtheading1}

1\. analogReference（type）

该函数用于配置模拟引脚的参考电压。它有三种类型，DEFAULT是默认值，参考电压是5V；INTERNAL是低电压模式，使用片内基准电压源2.56V；EXTERNAL是扩展模式，通过AREF引脚获取参考电压。

::: {.boxblock-c}
注意：若不使用本函数，默认参考电压是5V。若使用AREF作为参考电压，需接一个5kΩ的上拉电阻。
:::

2\. analogRead（pin）

用于读取引脚的模拟量电压值，每读取一次需要花100μs的时间。参数pin表示所要获取模拟量电压值的引脚，返回为int型。它的精度为10位，返回值为0\~1023。

::: {.boxblock-c}
注意：参数pin的取值范围是0\~5，对应开发板上的模拟引脚A0\~A5。
:::

3\. analogWrite（pin，value）

该函数是通过PWM（Pulse-Width Modulation，脉冲宽度调制）的方式在引脚上输出一个模拟量，图1-23所示为PWM输出的一般形式，也就是在一个脉冲的周期内高电平所占的比例。它主要用于LED亮度控制，直流电机转速控制等方面。

::: {.chatu_img}
![Figure-P22_7761.jpg](https://i.imgur.com/p8J7eWH.jpeg){.pic-img-w3 width="960" height="314"}

图1-23　占空比的定义
:::

Arduino中的PWM的频率大约为490Hz，Arduino UNO开发板支持以下数字引脚（不是模拟输入引脚）作为PWM模拟输出：3、5、6、9、10、11。开发板上带PWM输出的都有"\~"号。

::: {.boxblock-c}
注意：PWM输出位数为8位，即0\~255。
:::

模拟I/O引脚的操作函数使用例程如下：

::: {.chatu_img}
![Figure-P22_15707.jpg](https://i.imgur.com/EjP1vXl.jpeg){.pic-img width="1280" height="425"}
:::

#### 1.4.4　高级I/O引脚的操作函数 {#Sectio0006.xhtml#isbn9787302528234_1_1_2_9 .txtheading1}

pulseIn（pin，state，timeout）函数用于读取引脚脉冲的时间长度，脉冲可以是HIGH或者LOW。如果是HIGH，该函数先将引脚变为高电平，然后开始计时，一直等到变为低电平停止计时。返回脉冲持续的时间，单位为毫秒，如果超时没有读到时间，则返回0。

例程说明：做一个按钮脉冲计时器，测量按钮的持续时间，看谁的反应最快，即谁按按钮时间最短，按钮接在引脚3，程序如下：

::: {.chatu_img}
![Figure-P22_7776.jpg](https://i.imgur.com/iDz1b0H.jpeg){.pic-img width="1280" height="492"}
:::

#### 1.4.5　时间函数 {#Sectio0006.xhtml#isbn9787302528234_1_1_2_10 .txtheading1}

1\. delay（ms）

该函数是延时函数，参数是延时的时长，单位是ms。延时函数的典型例程是跑马灯的应用，使用Arduino开发板控制4个LED依次点亮，程序如下：

::: {.chatu_img}
![Figure-P23_15726.jpg](https://i.imgur.com/iavdJnw.jpeg){.pic-img width="1280" height="679"}
:::

2\. delayMicroseconds（）

delayMicroseconds（）也是延时函数，单位是μs，该函数可以产生更短的延时。

3\. millis（）

millis（）为计时函数，应用该函数可以获取单片机通电到现在运行的时间长度，单位是ms。系统最长的记录时间为9h22min，超出则从0开始。返回值是unsigned long型。

该函数适合作为定时器使用，不影响单片机的其他工作（而使用delay函数期间无法进行其他工作）。计时时间函数使用示例，延时10s后自动点亮LED，程序如下：

::: {.chatu_img}
![Figure-P23_15727.jpg](https://i.imgur.com/7JMii2K.jpeg){.pic-img width="1280" height="613"}
:::

4\. micros（）

micros（）也是计时函数，该函数返回开机到现在运行的时间长度，单位为μs。返回值是unsigned long型，70min溢出。程序如下：

::: {.chatu_img}
![Figure-P24_15709.jpg](https://i.imgur.com/pOUtYnH.jpeg){.pic-img width="1280" height="463"}
:::

以下例程为跑马灯的另一种实现方式：

::: {.chatu_img}
![Figure-P24_15711.jpg](https://i.imgur.com/XPlcPPr.jpeg){.pic-img width="1280" height="605"}
:::

#### 1.4.6　中断函数 {#Sectio0006.xhtml#isbn9787302528234_1_1_2_11 .txtheading1}

什么是中断？在日常生活中，中断非常常见，如图1-24所示。

你在看书时，电话铃响了，于是在书上做个记号，去接电话，与对方通话；门铃响了，有人敲门，你让打电话的对方稍等一下，去开门，并在门旁与来访者交谈，谈话结束，关好门；回到电话机旁，继续通话，接完电话后再回来从做记号的地方继续阅读。

同样的道理，在单片机中也存在中断概念，如图1-25所示。在计算机或者单片机中中断是由于某个随机事件的发生，计算机暂停主程序的运行，转去执行另一程序（随机事件），处理完毕后又自动返回主程序继续运行的过程。也就是说高优先级的任务中断了低优先级的任务。在计算机中中断包括如下几部分：

中断源------引起中断的原因，或能发生中断申请的来源。

主程序------计算机现行运行的程序。

中断服务子程序------处理突发事件的程序。

::: {.chatu_img}
![Figure-P25_7805.jpg](https://i.imgur.com/be5vMK8.jpeg){.pic-img-w6 width="468" height="545"}

图1-24　中断的概念
:::

::: {.chatu_img}
![Figure-P25_7809.jpg](https://i.imgur.com/aHNguta.jpeg){.pic-img-w6 width="467" height="708"}

图1-25　单片机中的中断
:::

1\. attachInterrupt（interrput，function，mode）；

该函数用于设置中断，有3个参数，分别表示中断源、中断处理函数和触发模式。中断源可选0或者1，对应数字引脚2、数字引脚3。中断处理函数是一段子程序，当中断发生时执行该子程序部分。触发模式有4种类型，LOW（低电平触发）、CHANGE（变化时触发）、RISING（低电平变为高电平触发）、FALLING（高电平变为低电平触发）。

例程功能如下：引脚2接按钮开关，引脚4接LED1（红色），引脚5接LED2（绿色）。在例程中，LED3为板载的LED，每秒闪烁一次。使用中断0控制LED1，中断1控制LED2。按下按钮，马上响应中断，由于中断响应速度快，LED3不受影响，继续闪烁。使用不同的4个参数，例程1试验LOW和CHANGE参数，例程2试验RISING和FALLING参数。

例程1：

::: {.chatu_img}
![Figure-P25_15732.jpg](https://i.imgur.com/TXfqIvU.jpeg){.pic-img width="1280" height="1168"}
:::

例程2：

::: {.chatu_img}
![Figure-P26_15738.jpg](https://i.imgur.com/FkfgtEe.jpeg){.pic-img width="1280" height="1166"}
:::

2\. detachInterrupt（interrput）；

该函数用于取消中断，参数interrupt表示所要取消的中断源。

#### 1.4.7　串行通信函数 {#Sectio0006.xhtml#isbn9787302528234_1_1_2_12 .txtheading1}

::: {.chatu_img-float-r-w}
![Figure-P27_7821.jpg](https://i.imgur.com/vb970yu.jpeg){.pic-img width="521" height="343"}

图1-26　串行通信接口
:::

串行通信接口（serial interface）使数据一位一位地顺序传送，其特点是通信线路简单，只要一对传输线就可以实现双向通信的接口，如图1-26所示。

串行通信接口出现在1980年前后，数据传输率是115\~230kb/s。串行通信接口出现的初期是为了实现计算机外设的通信，初期串口一般用来连接鼠标和外置调制解调器、老式摄像头和写字板等设备。

由于串行通信接口（COM）不支持热插拔及传输速率较低，因此目前部分新主板和大部分便携式计算机已开始取消该接口。串口多用于工控和测量设备以及部分通信设备中，包括各种传感器采集装置，GPS信号采集装置，多个单片机通信系统，门禁刷卡系统的数据传输，机械手控制和操纵面板控制直流电机等，特别是广泛应用于低速数据传输的工程应用。主要函数如下：

1\. Serial.begin（）

该函数用于设置串口的波特率，即数据的传输速率，每秒钟传输的符号个数。一般的波特率有9600、19 200、57 600、115 200等。

例如：Serial.begin（57 600）；

2\. Serial.available（）

该函数用来判断串口是否收到数据，函数的返回值为int型，不带参数。

3\. Serial.read（）

该函数不带参数，只将串口数据读入。返回值为串口数据，int型。

4\. Serial.print（）

该函数向串口发数据。可以发送变量，也可以发送字符串。

例1：Serial.print（＂today is good＂）；

例2：Serial.print（x，DEC）；以10进制发送变量x

例3：Serial.print（x，HEX）；以16进制发送变量x

5\. Serial.println（）

该函数与Serial.print（）类似，只是多了换行功能。

串口通信函数使用例程：

::: {.chatu_img}
![Figure-P27_15714.jpg](https://i.imgur.com/eb7OP2q.jpeg){.pic-img width="1280" height="492"}
:::

#### 1.4.8　Arduino的库函数 {#Sectio0006.xhtml#isbn9787302528234_1_1_2_13 .txtheading1}

与C语言和C++语言一样，Arduino平台也有相关的库函数，提供给开发者使用。这些库函数的使用，与C语言的头文件使用类似，需要\#include语句，将函数库加入Arduino的IDE编辑环境中，如\#include＂Arduino.h＂语句。

在Arduino开发中，主要库函数的类别如下：数学库主要包括数学计算；EEPROM库函数用于向EEPROM中读写数据；Ethernet库函数用于以太网的通信；LiquidCrystal库函数用于液晶屏幕的显示操作；Firmata库函数实现Arduino与PC串口之间的编程协议；SD库函数用于读写SD卡；Servo库函数用于舵机的控制；Stepper库函数用于步进电机控制；WiFi库函数用于WiFi的控制和使用等，诸如此类的库函数非常多，还包括一些Arduino爱好者自己开发的库函数。例如，下列数学库中的函数：

::: {.chatu_img}
![Figure-P28_15715.jpg](https://i.imgur.com/hyBGMr4.jpeg){.pic-img width="1280" height="267"}
:::

例如，

数学库函数random（small，big），返回值为long。

::: {.chatu_img}
![Figure-P28_15750.jpg](https://i.imgur.com/5WwNRQ9.jpeg){.pic-img width="1280" height="75"}
:::

### 1.5　Arduino硬件设计平台 {#Sectio0006.xhtml#isbn9787302528234_1_1_5 .txtheading}

电子设计自动化（Electronic Design Automation，EDA）是20世纪90年代初从计算机辅助设计（CAD）、计算机辅助制造（CAM）、计算机辅助测试（CAT）和计算机辅助工程（CAE）的概念上发展而来的。EDA设计工具的出现使得电路设计的效率性和可操作性都得到了大幅度的提升。本书针对Arduino平台的学习，主要介绍和使用Fritzing工具，配以详细的示例操作说明。当然，很多软件也支持Arduino的开发，在此不再一一罗列。

Fritzing是一款支持多国语言的电路设计软件，可以同时提供面包板、原理图、PCB三种视图设计，设计者可以采用任意一种视图进行电路设计，软件都会自动同步生成其他两种视图。此外，Fritzing软件还能用来生成制板厂生产所需用的greber文件、PDF、图片和CAD格式文件，这些都极大地普及和推广了Fritzing的使用。下面对软件的使用进行介绍，有关Fritzing的安装和启动请参考相关的书籍或者网络。

#### 1.5.1　Fritzing软件简介 {#Sectio0006.xhtml#isbn9787302528234_1_1_2_14 .txtheading1}

1\. 主界面

总体来说，Fritzing软件的主界面由两部分构成，如图1-27所示。一部分是图中左边框内项目视图部分。这一部分将显示设计者开发的电路，包含面包板、原理图和PCB三种视图。另外一部分是图中右边框内工具栏部分，包含软件的元件库、指示栏、导航栏、撤销历史栏和层次栏等子工具栏，是设计者主要操作和使用的地方。

::: {.chatu_img}
![Figure-P29_7841.jpg](https://i.imgur.com/eqSXmF6.jpeg){.pic-img-w4 width="1280" height="1040"}

图1-27　Fritzing主界面
:::

2\. 项目视图

设计者可以在项目视图中自由选择面包板、原理图或PCB视图进行开发，也可以利用视图切换器快捷轻松地在这三种视图中进行切换，如图1-27中右侧中部框图部分所示。此外，还可以利用工具栏中的导航栏进行快速切换，此部分将在工具栏中进行详细说明。下面分别给出这三种视图的操作界面，按从上到下的顺序依次是面包板视图、原理图视图和PCB视图，如图1-28\~图1-30所示。

细心的读者至此可能会发现，在这三种视图中操作可选项和工具栏中对应的分栏内容都只有细微的变化。而且，由于Fritzing的三个视图是默认同步生成的。在本书中，首先以面包板为模板对软件的共性部分进行介绍，然后再对原理图、PCB图与面包板视图之间的差异部分进行补充。之所以选择面包板视图作为模板，是为了方便Arduino硬件设计者从电路原理图过渡到实际电路，尽量减少可能出现的连线和引脚连接错误。

::: {.chatu_img}
![Figure-P30_7847.jpg](https://i.imgur.com/PmFm3TS.jpeg){.pic-img-w7 width="1280" height="986"}

图1-28　Fritzing面包板视图
:::

::: {.chatu_img}
![Figure-P30_7850.jpg](https://i.imgur.com/Xqd3YjQ.jpeg){.pic-img-w7 width="1280" height="993"}

图1-29　Fritzing原理图视图
:::

::: {.chatu_img}
![Figure-P31_7855.jpg](https://i.imgur.com/RWScXMJ.jpeg){.pic-img-w7 width="1280" height="978"}

图1-30　Fritzing PCB视图
:::

3\. 工具栏

用户可以根据自己的兴趣爱好选择工具栏显示的各种窗口，左键单击窗口下拉菜单，然后对希望出现在右边工具栏的分栏进行勾选，用户也可以将这些分栏设成单独的浮窗。为了方便初学者迅速掌握Fritzing软件，本书将详细介绍各个工具栏的作用。

1）元件库

元件库中包含了许多的电子元件，这些电子元件是按容器分类盛放的。Fritzing一共包含8个元件库，分别是Fritzing的核心库、设计者自定义的库和其他6个库。这8个库是设计者进行电路设计前必须掌握的，下面进行详细的介绍。

（1）MINE：MINE元件库是设计者自定义元件放置的容器。如图1-31所示，设计者可以在这部分添加一些自己的常用元件或软件缺少的元件。

::: {.chatu_img}
![Figure-P31_7859.jpg](https://i.imgur.com/CZ0VmfN.jpeg){.pic-img-w8 width="1150" height="494"}

图1-31　MINE元件库
:::

（2）Arduino：Arduino元件库主要放置与Arduino相关的开发板，这也是Arduino设计者需要特别关心的元件库。这个元件库中包含9块开发板，分别是Arduino、Arduino UNO R3、Arduino MEGA、Arduino MINI、Arduino NANO、Arduino Pro Mini 3.3V、Arduino Fio、Arduino LilyPad、Arduino Ethernet Shield，如图1-32所示。

::: {.chatu_img}
![Figure-P32_7865.jpg](https://i.imgur.com/d9s7hpi.jpeg){.pic-img-w5 width="1102" height="390"}

图1-32　Arduino元件库
:::

（3）Parallax：Parallax元件库中主要包含Parallax的微控制器Propeller 40和8款Basic Stamp微控制器开发板，如图1-33所示。该系列微控制器是由美国Parallax公司开发的，这些微控制器与其他微控制器的区别主要是在自己的ROM内存中内建了一套小型、特有的BASIC编程语言直译器PBASIC，为BASIC语言的设计者降低了嵌入式设计的门槛。

::: {.chatu_img}
![Figure-P32_7869.jpg](https://i.imgur.com/RN8DUkr.jpeg){.pic-img-w5 width="1096" height="481"}

图1-33　Parallax元件库
:::

（4）Picaxe：Picaxe元件库中主要包括Picaxe系列的低价位单片机、电可擦只读存储器、实时时钟控制器、串行接口、舵机驱动等元件，如图1-34所示。Picaxe系列芯片也是基于BASIC语言，设计者可以迅速掌握。

::: {.chatu_img}
![Figure-P32_7873.jpg](https://i.imgur.com/7fSKOTy.jpeg){.pic-img-w3 width="1034" height="752"}

图1-34　Picaxe元件库
:::

（5）SparkFun：SparkFun元件库也是Arduino设计者重点关注的一个容器（元件库），其中包含许多Arduino的扩展板。此外，这个元件库中还包含一些传感器和LilyPad系列的相关元件，如图1-35所示。

::: {.chatu_img}
![Figure-P33_7879.jpg](https://i.imgur.com/nelloJp.jpeg){.pic-img-w9 width="1280" height="1073"}

图1-35　SparkFun元件库
:::

（6）Snootlab：Snootlab元件库包含4块开发板，分别是Arduino的LCD扩展板、SD卡扩展板、接线柱扩展板和舵机的扩展驱动板，如图1-36所示。

::: {.chatu_img}
![Figure-P33_7883.jpg](https://i.imgur.com/gIb2GTj.jpeg){.pic-img-w width="851" height="399"}

图1-36　Snootlab元件库
:::

（7）Contributed Parts：Contributed Parts元件库包含带开关电位表盘、开关、LED、反相施密特触发器和放大器等，如图1-37所示。

（8）Core：Core元件库里包含许多平常会用到的基本元件，如LED、电阻、电容、电感、晶体管等，还有常见的输入元件、输出元件、集成电路元件、电源、连接、微控制器等。此外，Core元件库中还包含面包板视图、原理图视图、PCB视图的格式以及工具（主要包含笔记和尺子）的选择，如图1-38所示。

::: {.chatu_img}
![Figure-P34_7889.jpg](https://i.imgur.com/RBmVBpf.jpeg){.pic-img-w width="861" height="416"}

图1-37　Contributed Parts元件库
:::

::: {.chatu_img}
![Figure-P34_7892.jpg](https://i.imgur.com/qihAn5F.jpeg){.pic-img-w9 width="1280" height="552"}

图1-38　Core元件库
:::

2）指示栏

指示栏会给出元件库或项目视图中鼠标所选定元件的详细信息，包括该元件的名字、标签，以及在三种视图下的形态、类型、属性和连接数等。设计者可以根据这些信息加深对元件的理解，或者检验所选定的元件是否是自己所需要的，甚至能在项目视图中选定相关元件后直接在指示栏中修改元件的某些基本属性，如图1-39所示。

::: {.chatu_img}
![Figure-P34_7896.jpg](https://i.imgur.com/LOdKTso.jpeg){.pic-img-w8 width="1194" height="929"}

图1-39　指示栏
:::

3）撤销历史栏

撤销历史栏中详细记录了设计步骤，并将这些步骤按照时间的先后顺序依次进行排列，先显示最近发生的步骤，如图1-40所示。设计者可以利用这些记录步骤回到之前的任一设计状态，这为开发工作带来了极大的便利。

::: {.chatu_img}
![Figure-P35_7902.jpg](https://i.imgur.com/TbNptXZ.jpeg){.pic-img-w5 width="1056" height="625"}

图1-40　撤销历史栏
:::

4）导航栏

导航栏里提供了对面包板视图、原理图视图和PCB视图的预览，设计者可以在导航栏中任意选定三种视图中的某一视图进行查看，如图1-41所示。

::: {.chatu_img}
![Figure-P35_7906.jpg](https://i.imgur.com/XfB0FuC.jpeg){.pic-img-w8 width="1241" height="564"}

图1-41　导航栏
:::

5）层

不同的视图有不同的层结构，详细了解层结构有助于读者进一步理解这三种视图和提升设计者对它们的操作能力。下面将依次给出面包板视图、原理图视图、PCB视图的层结构。

（1）面包板视图的层结构，如图1-42所示，共包含6层，设计者可以通过勾选层结构前边的矩形框在项目视图中显示相应的层。

（2）原理图的层结构，如图1-43所示，共包含7层。

（3）PCB视图是层结构最多的视图，如图1-44所示，共包含15层结构。

::: {.chatu_img}
![Figure-P36_7913.jpg](https://i.imgur.com/lrz0AKS.jpeg){.pic-img-w8 width="1186" height="521"}

图1-42　面包板层结构
:::

::: {.chatu_img}
![Figure-P36_7916.jpg](https://i.imgur.com/lR5KONl.jpeg){.pic-img-w8 width="1199" height="554"}

图1-43　原理图层结构
:::

::: {.chatu_img}
![Figure-P36_7919.jpg](https://i.imgur.com/GV4Gu18.jpeg){.pic-img-w8 width="1180" height="1008"}

图1-44　PCB图层结构
:::

#### 1.5.2　Fritzing使用方法 {#Sectio0006.xhtml#isbn9787302528234_1_1_2_15 .txtheading1}

1\. 查看元件库已有元件

设计者在查看元件库中的元件时，既可以选择按图标形式查看，也可以选择按列表形式查看，界面分别如图1-45和图1-46所示。

::: {.chatu_img}
![Figure-P37_7926.jpg](https://i.imgur.com/AZCDepH.jpeg){.pic-img-w7 width="1280" height="846"}

图1-45　元件图标形式
:::

::: {.chatu_img}
![Figure-P37_7929.jpg](https://i.imgur.com/RJjZirb.jpeg){.pic-img-w7 width="1280" height="844"}

图1-46　元件列表形式
:::

设计者可以直接在对应的元件库中寻找自己所需要的元件。但由于Fritzing所带的库文件和元件数目都相对比较多，所以在有些情况下，设计者很难确定元件所在的具体位置。这时设计者就可以利用元件库中自带的搜索功能，从库中找出所需要的元件，这个方法能极大地提升工作效率。在此，举一个简单的例子进行说明。例如，设计者要寻找Arduino UNO开发板，那么，在搜索栏输入Arduino UNO开发板，按Enter键，就会自动显示相应的搜索结果，如图1-47所示。

::: {.chatu_img}
![Figure-P38_7935.jpg](https://i.imgur.com/Si1PrM7.jpeg){.pic-img-w width="769" height="511"}

图1-47　查找元件
:::

2\. 添加新元件到元件库

1）从头开始添加新元件

设计者可以通过选择"元件"→"新建"命令进入添加新元件的界面，如图1-48所示。也可以通过单击元件库中左侧的New Part选项进入该界面，如图1-49所示。无论采用哪一种方式，最终进入的新元件添加界面都如图1-50所示。

::: {.chatu_img}
![Figure-P38_7939.jpg](https://i.imgur.com/KMjp2ay.jpeg){.pic-img-w3 width="972" height="973"}

图1-48　添加新元件方法1
:::

::: {.chatu_img}
![Figure-P39_7944.jpg](https://i.imgur.com/wxj3rkv.jpeg){.pic-img-w4 width="1280" height="849"}

图1-49　添加新元件方法2
:::

::: {.chatu_img}
![Figure-P39_7947.jpg](https://i.imgur.com/7fGfKed.jpeg){.pic-img-w8 width="1216" height="1112"}

图1-50　新元件添加界面
:::

设计者在新元件的添加界面填写相关信息，如新元件的名字、属性、连接等，并导入相应的视图图片，尤其要注意添加连接，然后单击"保存"按钮，便能创建新的元件。但是在开发过程中，建议设计者尽量在已有的库元件基础上进行修改来创建用户需要的新元件，这可以减少工作量，提高开发效率。

2）从已有的元件添加新元件

关于如何基于已有的元件添加新元件，下面举两个简单的例子进行说明。

（1）针对ICs、电阻、引脚等标准元件。例如，现在设计者需要一个2.2kΩ的电阻，可是在core元件库中只有220Ω的标准电阻，这时，创建新电阻最简单的方法就是先将220Ω的通用电阻添加到面包板上，然后选定该电阻，直接在右边的指示栏中将电阻值修改为2.2kΩ，如图1-51所示。

::: {.chatu_img}
![Figure-P40_7954.jpg](https://i.imgur.com/ppaWA9e.jpeg){.pic-img-w5 width="1144" height="853"}

图1-51　修改元件属性
:::

除此之外，选定元件后，也可以选择"元件"→"编辑"命令完成元件参数的修改，如图1-52所示。

::: {.chatu_img}
![Figure-P40_7958.jpg](https://i.imgur.com/GMP8ePf.jpeg){.pic-img-w1 width="880" height="820"}

图1-52　修改元件参数
:::

然后进入元件编辑界面，如图1-53所示。

::: {.chatu_img}
![Figure-P41_7964.jpg](https://i.imgur.com/uYV5bXW.jpeg){.pic-img-w8 width="1214" height="1103"}

图1-53　元件编辑界面
:::

将resistance相应的数值改为2200Ω，单击"另存为新元件"按钮，即可成功创建一个电阻值为2200Ω的电阻，如图1-54所示。

::: {.chatu_img}
![Figure-P41_7968.jpg](https://i.imgur.com/fYYBAOT.jpeg){.pic-img-w3 width="1014" height="1064"}

图1-54　创建新元件
:::

此外，选定元件后，右击，在弹出的快捷菜单中选择"编辑"命令，也可进入元件编辑界面，如图1-55所示。

::: {.chatu_img}
![Figure-P42_7974.jpg](https://i.imgur.com/1JhAgxR.jpeg){.pic-img-w1 width="867" height="545"}

图1-55　利用快捷键进入元件编辑界面
:::

基于其他标准添加新元件的操作与此类似，如改变引脚数、修改接口数目等，在此不再赘述。

（2）相对复杂元件的添加

完成了基本元件的介绍后，下面介绍一个相对复杂的例子，在这个例子中，要添加一个自定义元件------SparkFun T5403气压仪，如图1-56所示。

::: {.chatu_img}
![Figure-P42_7978.jpg](https://i.imgur.com/pZOwStJ.jpeg){.pic-img-w width="828" height="540"}

图1-56　SparkFun T5403 PCB图
:::

在元件库里寻找该元件，搜索框中输入T5403，如图1-57所示。

::: {.chatu_img}
![Figure-P42_7982.jpg](https://i.imgur.com/B0LLm3r.jpeg){.pic-img-w5 width="1062" height="529"}

图1-57　SparkFun T5403搜寻图
:::

若未发现该元件，则可以在该元件所在的库中寻找是否有类似的元件（根据名字得知，SparkFun T5403是SparkFun系列的元件），如图1-58所示。

::: {.chatu_img}
![Figure-P43_7988.jpg](https://i.imgur.com/Tg4TfLK.jpeg){.pic-img-w1 width="876" height="443"}

图1-58　SparkFun系列元件
:::

若发现还是没有与自定义相类似的元件，则可以选择从标准的集成电路ICs开始。选择Core元件库，找到ICs栏，将IC元件添加到面包板中，如图1-59和图1-60所示。

::: {.chatu_img}
![Figure-P43_7992.jpg](https://i.imgur.com/hPEWBON.jpeg){.pic-img-w1 width="948" height="299"}

图1-59　Core ICs
:::

::: {.chatu_img}
![Figure-P43_7995.jpg](https://i.imgur.com/zMPlNG2.jpeg){.pic-img-w10 width="1252" height="394"}

图1-60　添加ICs到面包板
:::

选定该IC元件，在指示栏中查看该元件的属性。将元件的名字命名为自定义元件的名字T5403 Barometer Breakout，并将引脚数修改成所需要的数量。在本例中，需要的引脚数为8，如图1-61所示。

修改之后，面包板上的元件如图1-62所示。

右击面包板视图中的IC元件，在弹出的快捷菜单中选择"编辑"命令，会出现如图1-63所示的编辑窗口。设计者需要根据自定义元件的特性修改图中的6个部分，分别是元件图标、面包板视图、原理图视图、PCB视图、描述和接插件。这部分的修改大都是细节性的问题，在此，不再加以赘述，读者可参考下面的链接进行深入学习：https：//learn. sparkfun.com/tutorials/make-your-own-fritzing-parts。

::: {.chatu_img}
![Figure-P44_8001.jpg](https://i.imgur.com/A9DnH8e.jpeg){.pic-img-w1 width="937" height="1237"}

图1-61　参数修改
:::

::: {.chatu_img}
![Figure-P44_8004.jpg](https://i.imgur.com/1NFrk65.jpeg){.pic-img-w6 width="409" height="197"}

图1-62　T5403 Barometer Breakout
:::

::: {.chatu_img}
![Figure-P44_8007.jpg](https://i.imgur.com/tgE9oJD.jpeg){.pic-img-w8 width="1158" height="1052"}

图1-63　T5403 Barometer Breakout编辑窗口
:::

3\. 添加新元件库

设计者不仅可以创建自定义的新元件，也可以根据需求创建自定义的元件库，并对元件库进行管理。在设计电路结构前，可以将所需的电路元件列一张清单，并将所需要的元件都添加到自定义库中，为后续的电路设计提高效率。添加新元件库时，只需选择如图1-46中所示的元件栏中的New Bin命令，便会出现如图1-64所示的界面。

如图1-64所示，给自定义的元件库取名为Arduino Project，单击OK按钮，新的元件库便成功创建，如图1-65所示。

::: {.chatu_img}
![Figure-P45_8013.jpg](https://i.imgur.com/hqzsDPR.jpeg){.pic-img-w2 width="693" height="692"}

图1-64　添加新元件库
:::

::: {.chatu_img}
![Figure-P45_8017.jpg](https://i.imgur.com/TW8L07W.jpeg){.pic-img-w11 width="370" height="310"}

图1-65　新元件库
:::

4\. 添加或删除元件

下面主要介绍如何将元件库中的元件添加到面包板视图中。当需要添加某个元件时，可以先在元件库相应的子库中寻找所需要的元件，然后在目标元件的图标上单击选定元件，拖动至面包板上的目的位置，松开鼠标左键即可将元件插入面包板。需要特别注意的是，在放置元件时，一定要确保元件的引脚已经成功插入面包板。如果插入成功，则元件引脚所在的连线会显示绿色，如果插入不成功，元件的引脚显示红色，如图1-66所示（其中左边表示添加成功，右边则表示添加失败）。

::: {.chatu_img}
![Figure-P45_8021.jpg](https://i.imgur.com/89EMsyj.jpeg){.pic-img-w1 width="937" height="440"}

图1-66　引脚状态图
:::

如果在放置元件的过程中有误操作，则直接单击选定目标元件，然后再单击Delete键即可以将元件从视图上删除。

5\. 添加元件间连线

1）添加元件间的连线是用Fritzing绘制电路图必不可少的过程。接下来将对连线的方法给出详细的介绍。连线时将想要连接的引脚拖动到要连接的目的引脚后松开即可。需要注意的是，只有当连接线段的两端都显示绿色时，才表示导线连接成功，若连线的两端显示红色（图中右边），则表示连接出现问题，如图1-67所示。

::: {.chatu_img}
![Figure-P46_8028.jpg](https://i.imgur.com/b9s92IM.jpeg){.pic-img-w3 width="972" height="399"}

图1-67　连线状态图
:::

2）为了使电路更清晰，还能根据需求在导线上设置拐点，使导线根据自己的喜好而改变连线角度和方向。具体方法如下：光标处即为拐点处，设计者可以自由拖动光标来移动拐点的位置。也可以先选定导线，然后将鼠标光标放在想设置的拐点处，右击，在弹出的快捷菜单中选择"添加拐点"命令即可，如图1-68所示。

::: {.chatu_img}
![Figure-P46_8032.jpg](https://i.imgur.com/v7SGwqR.jpeg){.pic-img-w3 width="986" height="400"}

图1-68　拐点添加图
:::

3）在连线的过程中，更改导线的颜色，不同的颜色将帮助设计者更好地掌握绘制的电路。具体的修改方法为选定要更改颜色的导线，然后右击，在弹出的快捷菜单中选择"连线颜色"命令，如图1-69所示。

::: {.chatu_img}
![Figure-P46_8036.jpg](https://i.imgur.com/7wJGImF.jpeg){.pic-img-w3 width="970" height="635"}

图1-69　导线颜色修改图
:::

#### 1.5.3　Arduino电路设计 {#Sectio0006.xhtml#isbn9787302528234_1_1_2_16 .txtheading1}

本节将通过一个具体的例子系统地介绍如何利用Fritzing软件来绘制一个完整的Arduino电路图。利用Arduino主板控制LED的亮灭，整体效果如图1-70所示。

::: {.chatu_img}
![Figure-P47_8043.jpg](https://i.imgur.com/asmY11a.jpeg){.pic-img-w4 width="1280" height="973"}

图1-70　Arduino Blink示例整体效果图
:::

下面介绍Arduino Blink例程的电路图详细设计步骤。首先打开软件并新建一个项目，具体操作为单击软件的运行图标，在软件的主界面选择"文件"→"新建"命令，如图1-71所示。

完成项目新建后，先进行保存，选择"文件"→"另存为"命令，出现如图1-72所示的界面，在该对话框中输入保存的名字和路径，然后单击"保存"按钮，即可完成对新建项目的保存。

一般来说，在绘制电路前，设计者应该先对开发环境进行设置。这里的开发环境主要指设计者选择使用的面包板型号、类型、原理图和PCB视图的各种类型。本书以面包板视图为重点，并在core元件库中选好开发所用的类型和尺寸，如图1-73所示。

由于本示例中所需的元件数较少，此处省去建立自定义元件库的步骤，直接将所有的元件都放置在面包板上，如图1-74所示。然后进行连线，即可得到最终的效果图，如图1-75所示。在本例中，需要1块Arduino开发板、1个LED和1个220Ω电阻。

在编辑视图中切换到原理图，如图1-76所示。

此时布线还没有完成，开发者可以单击编辑视图下方的自动布线，但要注意自动布线后，检查所有的元件是否按要求完成了，对没有完成的，开发者要手动连接引脚间的连线，如图1-77所示。

::: {.chatu_img}
![Figure-P48_8049.jpg](https://i.imgur.com/bDPud40.jpeg){.pic-img-w9 width="1280" height="1167"}

图1-71　新建项目
:::

::: {.chatu_img}
![Figure-P48_8052.jpg](https://i.imgur.com/htOhk3S.jpeg){.pic-img-w10 width="1256" height="993"}

图1-72　保存项目
:::

::: {.chatu_img}
![Figure-P49_8057.jpg](https://i.imgur.com/3mj2pQA.jpeg){.pic-img-w9 width="1280" height="941"}

图1-73　面包板类型和尺寸
:::

::: {.chatu_img}
![Figure-P49_8060.jpg](https://i.imgur.com/tIdQIso.jpeg){.pic-img-w9 width="1280" height="1111"}

图1-74　元件的放置
:::

::: {.chatu_img}
![Figure-P50_8065.jpg](https://i.imgur.com/OS07WI2.jpeg){.pic-img-w4 width="1280" height="975"}

图1-75　连线图
:::

::: {.chatu_img}
![Figure-P50_8068.jpg](https://i.imgur.com/l0sWum4.jpeg){.pic-img-w12 width="653" height="1085"}

图1-76　原理图效果
:::

::: {.chatu_img}
![Figure-P51_8073.jpg](https://i.imgur.com/yV1LUZ1.jpeg){.pic-img-w9 width="1280" height="1126"}

图1-77　原理图自动布线图
:::

同理，可以在编辑视图中切换到PCB视图，观察PCB视图下的电路。此时也要注意编辑视图窗口下方是否提示布线未完成。如果是，开发者可以单击下边的"自动布线"按钮进行处理，也可以手动进行布线。这里，将直接给出最终的效果图，如图1-78所示。

::: {.chatu_img}
![Figure-P51_8077.jpg](https://i.imgur.com/IV5o6YT.jpeg){.pic-img-w9 width="1280" height="842"}

图1-78　PCB视图效果图
:::

完成所有操作后，就可以修改电路中各元件的属性，在本例中不需要修改任何值，在此略过这部分。完成所有步骤后，根据需求导出所需要的文档或文件。下面将以导出一个PDF格式的面包板视图为例对该流程进行说明。首先确保将编辑视图切换到面包板视图，然后选择"文件"→"导出"→"作为图像"→PDF命令，如图1-79所示。输出的最终PDF格式文档如图1-80所示。

::: {.chatu_img}
![Figure-P52_8083.jpg](https://i.imgur.com/OkpykCY.jpeg){.pic-img-w9 width="1280" height="1004"}

图1-79　PDF图生成步骤
:::

::: {.chatu_img}
![Figure-P52_8086.jpg](https://i.imgur.com/lH0sCaO.jpeg){.pic-img-w8 width="1214" height="894"}

图1-80　面包板PDF图
:::

#### 1.5.4　Arduino开发平台样例与编程 {#Sectio0006.xhtml#isbn9787302528234_1_1_2_17 .txtheading1}

Fritzing软件不但能很好地支持Arduino的电路设计，而且提供了对Arduino样例电路的支持，如图1-81所示。用户可以选择"文件"→"打开样例"命令，然后再选择相应的Arduino，如此层层推进，最终选择想打开的样例电路。

::: {.chatu_img}
![Figure-P53_8093.jpg](https://i.imgur.com/IVMF7uz.jpeg){.pic-img-w4 width="1280" height="925"}

图1-81　Fritzing对Arduino样例支持
:::

这里将以Arduino数字化中的交通灯进行举例说明，选择"元件"→"打开样例"→Arduino→Digital→Output→Traffic→Light命令，就能在Fritzing软件中的编辑视图中得到如图1-82所示的Arduino样例电路。需要注意的是，不管在哪种视图中进行操作，打开的样例电路都会将编辑视图切换到面包板视图，如果想要获得相应的原理图视图或PCB视图，则可以在打开的样例电路中从面包板视图切换到目标视图。

除了对Arduino样例的支持外，Fritzing还将电路设计和编程脚本放在了一起，对于每个设计电路，Fritzing都提供了一个编程界面，用户可以在编程界面中编写将要下载到微控制器的脚本。具体操作如图1-83所示，选择"窗口"→"打开编程窗口"命令，即可进入编程界面，如图1-84所示。

从图1-84中可以发现，虽然每个设计电路只有一个编程界面，但设计者可以在一个编程界面创造许多窗口来编写不同版本的脚本，从而在其中选择最合适的脚本。单击"新建"按钮即可创建新编程窗口。而且，从编程界面中也可以看出，目前Fritzing主要支持Arduino和PICAXE两种脚本语言，如图1-85所示。设计者在选定脚本的编程语言后，就只能编写该语言的脚本，并将脚本保存成相应类型的后缀格式。同理，选定编程语言后，设计者也只能打开同种类型的脚本。

::: {.chatu_img}
![Figure-P54_8099.jpg](https://i.imgur.com/iMjjnvt.jpeg){.pic-img-w4 width="1280" height="936"}

图1-82　Arduino交通灯样例
:::

::: {.chatu_img}
![Figure-P54_8102.jpg](https://i.imgur.com/bDuHzqO.jpeg){.pic-img-w6 width="458" height="571"}

图1-83　编程界面进入步骤
:::

选定脚本语言后，设计者还应该选择串行端口，从Fritzing界面可以看出，该软件一共有两个默认端口，分别是COM1和LPT1，如图1-86所示。当设计者将相应的微控制器连接到USB端口时，软件里会增加一个新的设备端口，然后根据自己的需求选择相应的端口。

值得注意的是，虽然Fritzing提供了脚本编写器，但是它并没有内置编译器，所以设计者必须自行安装额外的编程软件将编写的脚本转换成可执行文件。但是，Fritzing提供了和编程软件交互的方法，设计者可以通过单击图1-86所示的按钮获取相应的可执行文件，所有这些内容都显示在下面的控制端。

::: {.chatu_img}
![Figure-P55_8108.jpg](https://i.imgur.com/zN5YpnG.jpeg){.pic-img-w7 width="1280" height="1046"}

图1-84　编程界面
:::

::: {.chatu_img}
![Figure-P55_8111.jpg](https://i.imgur.com/uyj7LyE.jpeg){.pic-img-w13 width="244" height="121"}

图1-85　支持编程语言
:::

::: {.chatu_img}
![Figure-P55_8115.jpg](https://i.imgur.com/jUaDkgh.jpeg){.pic-img-w13 width="192" height="125"}

图1-86　支持端口
:::

[]{#Sectio0007.xhtml}

# 第2章　八阶光立方实现蓝牙控制项目设计[^(1)^](#Sectio0007.xhtml#jz_1_56){#Sectio0007.xhtml#jzyy_1_56 .calibre6} {#Sectio0007.xhtml#isbn9787302528234_2 .chaptertitle}

本项目通过程序控制，在LED阵列中展现绚丽多彩的三维立体图案，实现基于蓝牙控制的八阶光立方。

### 2.1　功能及总体设计 {#Sectio0007.xhtml#isbn9787302528234_2_1_1 .txtheading}

本项目利用人体视觉暂留原理，通过分时刷新八阶光立方的512个LED，显示输出文字或图案等信息，最终使三维立体图案显示在LED组成的阵列中，以展现立体视觉效果。

要实现上述功能需将作品分成四部分进行设计，即主程序模块、HC-05蓝牙模块、音乐频谱模块和输出模块。主程序模块使用手机实现对八阶光立方的控制；HC-05蓝牙模块，配合Arduino开发板，由数据线连接集成板上的音频插座和手机实现传输；音乐频谱模块通过C++程序设计实现；输出模块由512个LED和集成板实现。

1\. 整体框架图

整体框架如图2-1所示。

::: {.chatu_img}
![Figure-P56_8140.jpg](https://i.imgur.com/aYiC26o.jpeg){.pic-img-w8 width="1164" height="541"}

图2-1　整体框架图
:::

2\. 系统流程图

系统流程如图2-2所示。

系统流程：指令通过手机发出，经HC-05蓝牙模块传输给Arduino开发板，Arduino开发板运行C++程序，调用相应图案显示函数，通过集成板控制光立方LED引脚电平并展示相应图案，最后向手机端返回信息"Over"。

3\. 总电路图

总电路如图2-3所示，引脚连接如表2-1所示。

::: {.chatu_img}
![Figure-P57_8151.jpg](https://i.imgur.com/36n9l9o.jpeg){.pic-img-w14 width="505" height="1167"}

图2-2　系统流程图
:::

::: {.chatu_img}
![Figure-P57_8155.jpg](https://i.imgur.com/TE9NZvn.jpeg){.pic-img-w2 width="690" height="1104"}

图2-3　总电路图
:::

::: {.chatu_img}
表2-1　引脚连接表

![Figure-T57_15757.jpg](https://i.imgur.com/KXaDkyf.jpeg){.pic-img width="1280" height="653"}
:::

### 2.2　模块介绍 {#Sectio0007.xhtml#isbn9787302528234_2_1_2 .txtheading}

本项目主要包括主程序模块、HC-05蓝牙模块、音乐频谱模块和输出模块。下面分别给出各模块的功能介绍及相关代码。

#### 2.2.1　主程序模块 {#Sectio0007.xhtml#isbn9787302528234_2_1_2_1 .txtheading1}

本部分包括主程序模块的功能介绍及相关代码。

1\. 功能介绍

根据蓝牙模块接收的指令，在if条件下选择调用相应图案函数，此部分主要由C++代码设计实现，编译环境为Visual Studio。Arduino开发板通过集成板上的串行数据输入，将电平控制信号输入到移位寄存器，实现并行输出及锁存，从而有效减少了引脚数量。

2\. 相关代码

::: {.chatu_img}
![Figure-P58_15759.jpg](https://i.imgur.com/sLPuJa4.jpeg){.pic-img width="1280" height="1251"}
:::

::: {.chatu_img}
![Figure-P59_15761.jpg](https://i.imgur.com/YJO9TkU.jpeg){.pic-img width="1280" height="1847"}
:::

::: {.chatu_img}
![Figure-P60_15763.jpg](https://i.imgur.com/52nfaH6.jpeg){.pic-img width="1280" height="1845"}
:::

::: {.chatu_img}
![Figure-P61_15764.jpg](https://i.imgur.com/kozMPxQ.jpeg){.pic-img width="1280" height="1909"}
:::

::: {.chatu_img}
![Figure-P62_15766.jpg](https://i.imgur.com/wE6j6ST.jpeg){.pic-img width="1280" height="1866"}
:::

::: {.chatu_img}
![Figure-P63_15768.jpg](https://i.imgur.com/B4TkAi7.jpeg){.pic-img width="1280" height="1825"}
:::

::: {.chatu_img}
![Figure-P64_15769.jpg](https://i.imgur.com/UphkiMe.jpeg){.pic-img width="1280" height="1846"}
:::

::: {.chatu_img}
![Figure-P65_15770.jpg](https://i.imgur.com/oaQvYQ5.jpeg){.pic-img width="1280" height="1807"}
:::

::: {.chatu_img}
![Figure-P66_15771.jpg](https://i.imgur.com/3lrPfgk.jpeg){.pic-img width="1280" height="1781"}
:::

::: {.chatu_img}
![Figure-P67_15772.jpg](https://i.imgur.com/p6NrcwQ.jpeg){.pic-img width="1280" height="1781"}
:::

::: {.chatu_img}
![Figure-P68_15773.jpg](https://i.imgur.com/gL00LY6.jpeg){.pic-img width="1280" height="1784"}
:::

::: {.chatu_img}
![Figure-P69_15774.jpg](https://i.imgur.com/VtOaCL5.jpeg){.pic-img width="1280" height="1844"}
:::

::: {.chatu_img}
![Figure-P70_15775.jpg](https://i.imgur.com/dCVx3AW.jpeg){.pic-img width="1280" height="1885"}
:::

::: {.chatu_img}
![Figure-P71_15776.jpg](https://i.imgur.com/PWWcNik.jpeg){.pic-img width="1280" height="1774"}
:::

::: {.chatu_img}
![Figure-P72_15777.jpg](https://i.imgur.com/DGAgcOZ.jpeg){.pic-img width="1280" height="1873"}
:::

::: {.chatu_img}
![Figure-P73_15778.jpg](https://i.imgur.com/3fgcWwz.jpeg){.pic-img width="1280" height="1845"}
:::

::: {.chatu_img}
![Figure-P74_15779.jpg](https://i.imgur.com/lkM6z5A.jpeg){.pic-img width="1280" height="1861"}
:::

::: {.chatu_img}
![Figure-P75_15781.jpg](https://i.imgur.com/VCMCLTd.jpeg){.pic-img width="1280" height="1884"}
:::

::: {.chatu_img}
![Figure-P76_15782.jpg](https://i.imgur.com/oHgUugH.jpeg){.pic-img width="1280" height="1760"}
:::

::: {.chatu_img}
![Figure-P77_15798.jpg](https://i.imgur.com/5cw9NAp.jpeg){.pic-img width="1280" height="1757"}
:::

::: {.chatu_img}
![Figure-P78_15800.jpg](https://i.imgur.com/2onexnt.jpeg){.pic-img width="1280" height="1908"}
:::

::: {.chatu_img}
![Figure-P79_15801.jpg](https://i.imgur.com/YKiKsVH.jpeg){.pic-img width="1280" height="1914"}
:::

::: {.chatu_img}
![Figure-P80_15802.jpg](https://i.imgur.com/vo98634.jpeg){.pic-img width="1280" height="1909"}
:::

::: {.chatu_img}
![Figure-P81_15803.jpg](https://i.imgur.com/MO9z3IJ.jpeg){.pic-img width="1280" height="1990"}
:::

::: {.chatu_img}
![Figure-P82_15804.jpg](https://i.imgur.com/D8iIFo5.jpeg){.pic-img width="1280" height="1860"}
:::

::: {.chatu_img}
![Figure-P83_15805.jpg](https://i.imgur.com/k60T19E.jpeg){.pic-img width="1280" height="1886"}
:::

::: {.chatu_img}
![Figure-P84_15807.jpg](https://i.imgur.com/c1UQQiV.jpeg){.pic-img width="1280" height="1844"}
:::

::: {.chatu_img}
![Figure-P85_15815.jpg](https://i.imgur.com/8GmyloV.jpeg){.pic-img width="1280" height="1564"}
:::

#### 2.2.2　HC-05蓝牙模块 {#Sectio0007.xhtml#isbn9787302528234_2_1_2_2 .txtheading1}

本部分包括HC-05蓝牙模块的功能介绍及相关代码。

1\. 功能介绍

将输入到手机移动终端的指令，通过HC-05蓝牙模块传输到Arduino开发板，程序执行完毕后，Arduino开发板将指令通过HC-05蓝牙模块传回手机，从而实现手机与Arduino开发板的无线通信。元件包括HC-05蓝牙模块、Arduino开发板和导线若干，电路如图2-4所示。

::: {.chatu_img}
![Figure-P86_9148.jpg](https://i.imgur.com/rzKSylq.jpeg){.pic-img-w9 width="1280" height="718"}

图2-4　HC-05蓝牙模块与Arduino开发板连线图
:::

2\. 相关代码

::: {.chatu_img}
![Figure-P86_15816.jpg](https://i.imgur.com/RP5LLLB.jpeg){.pic-img width="1280" height="867"}
:::

#### 2.2.3　音乐频谱模块 {#Sectio0007.xhtml#isbn9787302528234_2_1_2_3 .txtheading1}

本部分包括音乐频谱模块的功能介绍及相关代码。

1\. 功能介绍

手机播放音乐，集成板在Arduino开发板驱动下，利用音频插座通过双头音频线与手机音频输出端口相连，采集音频，光立方利用FFT算法通过模数转换随音乐律动显示相应频谱。元件包括：音频插座、双头音频线、音频分流线、Arduino开发板和导线若干。

2\. 相关代码

::: {.chatu_img}
![Figure-P87_15796.jpg](https://i.imgur.com/pG1psJ3.jpeg){.pic-img width="1280" height="1643"}
:::

::: {.chatu_img}
![Figure-P88_15795.jpg](https://i.imgur.com/Gdy2DNa.jpeg){.pic-img width="1280" height="1920"}
:::

::: {.chatu_img}
![Figure-P89_15794.jpg](https://i.imgur.com/84S6xyN.jpeg){.pic-img width="1280" height="1885"}
:::

::: {.chatu_img}
![Figure-P90_15793.jpg](https://i.imgur.com/vefmVNp.jpeg){.pic-img width="1280" height="1878"}
:::

::: {.chatu_img}
![Figure-P91_15792.jpg](https://i.imgur.com/BPXDu6b.jpeg){.pic-img width="1280" height="1971"}
:::

::: {.chatu_img}
![Figure-P92_15791.jpg](https://i.imgur.com/rHmggqt.jpeg){.pic-img width="1280" height="1977"}
:::

::: {.chatu_img}
![Figure-P93_15785.jpg](https://i.imgur.com/Oue9wTN.jpeg){.pic-img width="1280" height="904"}
:::

#### 2.2.4　输出模块 {#Sectio0007.xhtml#isbn9787302528234_2_1_2_4 .txtheading1}

本部分包括输出模块的功能介绍及相关代码。

1\. 功能介绍

LED阵列作为屏幕，显示各种图案，通过Arduino开发板控制集成板的串行输入、寄存器、锁存器等实现信号的串入并出，用较少的串口来实现对八阶光立方的64个正极引脚和8个负极引脚的独立控制，其中64个正极引脚对应64列LED，8个负极引脚对应8层。元件包括：512个LED、1个集成板、3个开关、1个电源座、1个音频插座、排针若干、Arduino开发板和导线若干，电路如图2-5所示。

::: {.chatu_img}
![Figure-P93_9363.jpg](https://i.imgur.com/TSQMg5j.jpeg){.pic-img-w2 width="725" height="1147"}

图2-5　输出电路原理图
:::

2\. 相关代码

::: {.chatu_img}
![Figure-P93_15787.jpg](https://i.imgur.com/Xg3Oj4h.jpeg){.pic-img width="1280" height="227"}
:::

::: {.chatu_img}
![Figure-P94_15784.jpg](https://i.imgur.com/h1gwNOF.jpeg){.pic-img width="1280" height="1865"}
:::

::: {.chatu_img}
![Figure-P95_15783.jpg](https://i.imgur.com/uKwEi1K.jpeg){.pic-img width="1280" height="1874"}
:::

### 2.3　产品展示 {#Sectio0007.xhtml#isbn9787302528234_2_1_3 .txtheading}

整体外观如图2-6所示，左侧为光立方和集成板，右侧为Arduino开发板和HC-05蓝牙模块。

::: {.chatu_img}
![Figure-P96_9384.jpg](https://i.imgur.com/Fo3vzi1.jpeg){.pic-img-w4 width="1280" height="881"}

图2-6　整体外观图
:::

### 2.4　元件清单 {#Sectio0007.xhtml#isbn9787302528234_2_1_4 .txtheading}

完成本项目所用到的元件及数量如表2-2所示。

::: {.chatu_img}
表2-2　元件清单

![Figure-T96_15819.jpg](https://i.imgur.com/JVZ8YhY.jpeg){.pic-img width="1280" height="453"}
:::

------------------------------------------------------------------------

[(1)](#Sectio0007.xhtml#jzyy_1_56){#Sectio0007.xhtml#jz_1_56}　本章根据刘青、高梦项目设计整理而成。

[]{#Sectio0008.xhtml}

# 第3章　乐光宝盒项目设计[^(1)^](#Sectio0008.xhtml#jz_1_97){#Sectio0008.xhtml#jzyy_1_97 .calibre6} {#Sectio0008.xhtml#isbn9787302528234_3 .chaptertitle}

本项目基于Arduino开发平台，通过手机控制播放既定音乐，实现蓝牙音响的功能。

### 3.1　功能及总体设计 {#Sectio0008.xhtml#isbn9787302528234_3_1_1 .txtheading}

本项目利用超声波和蓝牙模块，通过改变障碍物与传感器之间的距离，形成虚拟琴键，完成乐器的基本功能。并与手机蓝牙相连，使用手机控制设备播放固定音乐，实现发光蓝牙音响功能。主要是将手机与蓝牙模块相连：手机下载串口助手，与蓝牙配对并成功连接，利用"蓝牙串口SPP"发送指令。控制乐光宝盒的状态：手动演奏，遥控播放既定曲目，或者待机。当传感器探测到一个范围内，扬声器就发出一个相应的音调；探测到另一个范围内，扬声器就会发出另一个音调。同时，利用不同的RGB颜色配比，使不同的LED发出不同颜色的光。光线在镜子（底板）与单透膜（贴在外壳上）之间无限反射，实现"时空隧道"。同时，设备与手机蓝牙相连，通过手机控制设备放出固定音乐，伴随LED发出不同颜色的光。

要实现上述功能需将作品分成四部分进行设计，即输入部分、处理部分、传输部分和输出部分。输入部分选用了一个简易实用的超声波测距模块，固定在面包板上。用传感器测量超声波碰到障碍物再返回的时间。处理部分主要通过C++程序实现，将时间数据转化为距离数据。Arduino主芯片收到信息后，用公式计算出障碍物与传感器之间的距离（公式：距离=时间×音速（340m/s）/2）。信号传输部分利用Arduino开发板按照不同的距离，主芯片发出不同频率的脉冲，使扬声器发出不同的音调、不同的LED发出不同颜色的光。输出部分使用LED和扬声器实现。

::: {.chatu_img}
![Figure-P97_9423.jpg](https://i.imgur.com/TTjbfpg.jpeg){.pic-img-w width="804" height="634"}

图3-1　整体框架图
:::

1\. 整体框架图

整体框架如图3-1所示。

2\. 系统流程图

系统流程如图3-2所示。

::: {.chatu_img}
![Figure-P98_9433.jpg](https://i.imgur.com/X92jUif.jpeg){.pic-img-w width="840" height="1418"}

图3-2　系统流程图
:::

通过手机端发送数据，控制设备的状态。当从手机端输入"a"时，启动手动演奏模式，利用超声波模块测距，改变障碍物与模块间的距离，控制扬声器、LED分别发出不同的音调和颜色；当从手机端输入"b"时，设备进入自动播放模式，播放既定曲目，伴随LED闪烁；当输入其他指令时，设备进入待机状态，不启动。

3\. 总电路图

总电路如图3-3所示，引脚连接如表3-1所示。

::: {.chatu_img}
![Figure-P98_9438.jpg](https://i.imgur.com/VDOv9hO.jpeg){.pic-img-w2 width="710" height="647"}

图3-3　总电路图
:::

::: {.chatu_img}
表3-1　引脚连接表

![Figure-T99_15824.jpg](https://i.imgur.com/cwghfCq.jpeg){.pic-img width="1280" height="615"}
:::

### 3.2　模块介绍 {#Sectio0008.xhtml#isbn9787302528234_3_1_2 .txtheading}

本项目主要包括主程序模块、US-100模块、HC-05模块和输出模块。下面分别给出各模块的功能介绍及相关代码。

#### 3.2.1　主程序模块 {#Sectio0008.xhtml#isbn9787302528234_3_1_2_1 .txtheading1}

本部分包括主程序模块的功能介绍及相关代码。

1\. 功能介绍

此部分主要由C++代码实现，进行了多次试验，改变距离变化范围，使其能较为准确清晰地改变音调。

2\. 相关代码

::: {.chatu_img}
![Figure-P99_15826.jpg](https://i.imgur.com/rXRF6k4.jpeg){.pic-img width="1280" height="603"}
:::

::: {.chatu_img}
![Figure-P100_15827.jpg](https://i.imgur.com/iK7Eyml.jpeg){.pic-img width="1280" height="1826"}
:::

::: {.chatu_img}
![Figure-P101_15828.jpg](https://i.imgur.com/KyRJb48.jpeg){.pic-img width="1280" height="1865"}
:::

::: {.chatu_img}
![Figure-P102_15829.jpg](https://i.imgur.com/FEShLKm.jpeg){.pic-img width="1280" height="1868"}
:::

::: {.chatu_img}
![Figure-P103_15831.jpg](https://i.imgur.com/PLUAXGH.jpeg){.pic-img width="1280" height="1544"}
:::

#### 3.2.2　US-100模块 {#Sectio0008.xhtml#isbn9787302528234_3_1_2_2 .txtheading1}

本部分包括US-100模块的功能介绍及相关代码。

1\. 功能介绍

该模块测量超声波到障碍物返回的时间，传输到Arduino开发板处理，转化为距离数据，实现控制信号的功能。元件包括US-100模块、Arduino开发板和导线若干，电路如图3-4所示。

::: {.chatu_img}
![Figure-P104_9700.jpg](https://i.imgur.com/TeEdKn9.jpeg){.pic-img-w12 width="661" height="679"}

图3-4　US-100模块与Arduino开发板连线图
:::

2\. 相关代码

::: {.chatu_img}
![Figure-P104_15833.jpg](https://i.imgur.com/wnxytVK.jpeg){.pic-img width="1280" height="801"}
:::

#### 3.2.3　HC-05模块 {#Sectio0008.xhtml#isbn9787302528234_3_1_2_3 .txtheading1}

本部分包括HC-05模块的功能介绍及相关代码。

1\. 功能介绍

设置进入AT模式后与手机相连，实现对设备功能的控制。

2\. 相关代码

::: {.chatu_img}
![Figure-P104_15835.jpg](https://i.imgur.com/JileGyH.jpeg){.pic-img width="1280" height="799"}
:::

::: {.chatu_img}
![Figure-P105_9720.jpg](https://i.imgur.com/1JuHS2x.jpeg){.pic-img-w12 width="613" height="902"}

图3-5　HC-05模块与Arduino开发板连线图
:::

#### 3.2.4　输出模块 {#Sectio0008.xhtml#isbn9787302528234_3_1_2_4 .txtheading1}

本部分包括输出模块的功能介绍及相关代码。

1\. 功能介绍

输出声信号和光信号的步骤，通过Arduino开发板控制扬声器发出声调，LED发出相应的光。元件包括60个LED、US-100模块、HC-05模块、扬声器、面包板、Arduino开发板和导线若干，电路连接如图3-6所示。

::: {.chatu_img}
![Figure-P106_9727.jpg](https://i.imgur.com/4tp7HKb.jpeg){.pic-img-w10 width="1272" height="900"}

图3-6　输出电路原理图
:::

2\. 相关代码

1）手动演奏模式

::: {.chatu_img}
![Figure-P106_15839.jpg](https://i.imgur.com/obeBEAN.jpeg){.pic-img width="1280" height="976"}
:::

::: {.chatu_img}
![Figure-P107_15841.jpg](https://i.imgur.com/mpFqae2.jpeg){.pic-img width="1280" height="1831"}
:::

::: {.chatu_img}
![Figure-P108_15843.jpg](https://i.imgur.com/Ro1G2Wb.jpeg){.pic-img width="1280" height="1805"}
:::

::: {.chatu_img}
![Figure-P109_15844.jpg](https://i.imgur.com/jl1pKEX.jpeg){.pic-img width="1280" height="1831"}
:::

::: {.chatu_img}
![Figure-P110_9832.jpg](https://i.imgur.com/fTiVPwT.jpeg){.pic-img width="1280" height="1898"}
:::

::: {.chatu_img}
![Figure-P111_9835.jpg](https://i.imgur.com/3pvEh4m.jpeg){.pic-img width="1280" height="1864"}
:::

::: {.chatu_img}
![Figure-P112_9838.jpg](https://i.imgur.com/mphJoY5.jpeg){.pic-img width="1280" height="1861"}
:::

::: {.chatu_img}
![Figure-P113_15845.jpg](https://i.imgur.com/nNINSBB.jpeg){.pic-img width="1280" height="1859"}
:::

::: {.chatu_img}
![Figure-P114_16199.jpg](https://i.imgur.com/yyNVRk3.jpeg){.pic-img width="1280" height="736"}
:::

3）引用的shining.h文件

::: {.chatu_img}
![Figure-P114_16200.jpg](https://i.imgur.com/Zd7pQxa.jpeg){.pic-img width="1280" height="1149"}
:::

::: {.chatu_img}
![Figure-P115_9860.jpg](https://i.imgur.com/QjigbSV.jpeg){.pic-img width="1280" height="1848"}
:::

::: {.chatu_img}
![Figure-P116_15847.jpg](https://i.imgur.com/9qC90L0.jpeg){.pic-img width="1280" height="1846"}
:::

::: {.chatu_img}
![Figure-P117_15848.jpg](https://i.imgur.com/1Wt4fF4.jpeg){.pic-img width="1280" height="1973"}
:::

::: {.chatu_img}
![Figure-P118_15849.jpg](https://i.imgur.com/5OiBgIZ.jpeg){.pic-img width="1280" height="1885"}
:::

::: {.chatu_img}
![Figure-P119_15850.jpg](https://i.imgur.com/5CP7qMR.jpeg){.pic-img width="1280" height="1831"}
:::

::: {.chatu_img}
![Figure-P120_15851.jpg](https://i.imgur.com/5nkJ8Fd.jpeg){.pic-img width="1280" height="1900"}
:::

::: {.chatu_img}
![Figure-P121_15852.jpg](https://i.imgur.com/7DllJpp.jpeg){.pic-img width="1280" height="1857"}
:::

::: {.chatu_img}
![Figure-P122_15853.jpg](https://i.imgur.com/UIpVmWs.jpeg){.pic-img width="1280" height="1883"}
:::

::: {.chatu_img}
![Figure-P123_9888.jpg](https://i.imgur.com/rAfqVpj.jpeg){.pic-img width="1280" height="1836"}
:::

::: {.chatu_img}
![Figure-P124_15854.jpg](https://i.imgur.com/DmtvKxW.jpeg){.pic-img width="1280" height="1890"}
:::

::: {.chatu_img}
![Figure-P125_15855.jpg](https://i.imgur.com/vkeN7ZO.jpeg){.pic-img width="1280" height="1847"}
:::

::: {.chatu_img}
![Figure-P126_9899.jpg](https://i.imgur.com/eIO8NNe.jpeg){.pic-img width="1280" height="1930"}
:::

::: {.chatu_img}
![Figure-P127_15856.jpg](https://i.imgur.com/RjjqUfc.jpeg){.pic-img width="1280" height="1800"}
:::

::: {.chatu_img}
![Figure-P128_15857.jpg](https://i.imgur.com/e9eFXUx.jpeg){.pic-img width="1280" height="1888"}
:::

::: {.chatu_img}
![Figure-P129_15858.jpg](https://i.imgur.com/qoGambM.jpeg){.pic-img width="1280" height="1860"}
:::

::: {.chatu_img}
![Figure-P130_15859.jpg](https://i.imgur.com/hFfFf6h.jpeg){.pic-img width="1280" height="1837"}
:::

::: {.chatu_img}
![Figure-P131_15860.jpg](https://i.imgur.com/0dlTdn7.jpeg){.pic-img width="1280" height="1816"}
:::

::: {.chatu_img}
![Figure-P132_9921.jpg](https://i.imgur.com/smkSkxY.jpeg){.pic-img width="1280" height="1890"}
:::

::: {.chatu_img}
![Figure-P133_15861.jpg](https://i.imgur.com/qkbqHCV.jpeg){.pic-img width="1280" height="1815"}
:::

::: {.chatu_img}
![Figure-P134_9927.jpg](https://i.imgur.com/qcDmuPb.jpeg){.pic-img width="1280" height="1258"}
:::

### 3.3　产品展示 {#Sectio0008.xhtml#isbn9787302528234_3_1_3 .txtheading}

整体外观如图3-7所示，电路连接如图3-8所示，实物如图3-9所示。

::: {.chatu_img}
![Figure-P134_9930.jpg](https://i.imgur.com/1tOdpAj.jpeg){.pic-img-w2 width="736" height="414"}

图3-7　整体外观图
:::

::: {.chatu_img}
![Figure-P135_9935.jpg](https://i.imgur.com/ehDZYFv.jpeg){.pic-img-w1 width="886" height="499"}

图3-8　电路连线图
:::

::: {.chatu_img}
![Figure-P135_9938.jpg](https://i.imgur.com/cVGClKf.jpeg){.pic-img-w1 width="886" height="445"}

图3-9　实物图
:::

### 3.4　元件清单 {#Sectio0008.xhtml#isbn9787302528234_3_1_4 .txtheading}

完成本项目所用到的元件及数量如表3-2所示。

::: {.chatu_img}
表3-2　元件清单

![Figure-T135_15862.jpg](https://i.imgur.com/RYFp244.jpeg){.pic-img width="1280" height="374"}
:::

------------------------------------------------------------------------

[(1)](#Sectio0008.xhtml#jzyy_1_97){#Sectio0008.xhtml#jz_1_97}　本章根据刘禹汐、孙宜悦项目设计整理而成。

[]{#Sectio0009.xhtml}

# 第4章　音乐游戏项目设计[^(1)^](#Sectio0009.xhtml#jz_1_136){#Sectio0009.xhtml#jzyy_1_136 .calibre6} {#Sectio0009.xhtml#isbn9787302528234_4 .chaptertitle}

本项目基于Arduino开发板和Processing平台搭建一个音乐游戏，使游戏按键距离在合理范围内调整，优化游戏体验。

### 4.1　功能及总体设计 {#Sectio0009.xhtml#isbn9787302528234_4_1_1 .txtheading}

本项目通过计算机按键选择不同的级别和背景音乐，利用Arduino开发板和Processing的结合，使用FSR402薄膜压力传感器和蓝牙模块计算机发送信息，进行游戏互动。

要实现上述功能需将作品分成四部分进行设计，即输入部分、传输部分、处理部分和输出部分。输入部分选用了FSR压力传感器；传输部分选用了蓝牙模块配合Arduino开发板实现；处理部分在Processing中对接收的信息进行处理；输出部分使用Processing设计界面实现。

1\. 整体框架图

整体框架如图4-1所示。

::: {.chatu_img}
![Figure-P136_9978.jpg](https://i.imgur.com/SDRDpbm.jpeg){.pic-img-w5 width="1078" height="548"}

图4-1　整体框架图
:::

2\. 系统流程图

系统流程如图4-2所示，游戏模块流程如图4-3所示。

传感器感受到压力后，通过Arduino开发板和Processing的串口通信传输信号，利用Processing搭建的界面进行游戏显示，选择菜单的选项，进入不同的游戏及选择不同的关卡、难度等。玩家根据界面的图标显示对压力传感器FSR402进行操作，Processing收到感应信号后，界面做出相应显示，并判断操作有效性及计分存档的功能。

::: {.chatu_img}
![Figure-P137_9988.jpg](https://i.imgur.com/bN6Mnwq.jpeg){.pic-img-w5 width="1055" height="1219"}

图4-2　系统流程图
:::

::: {.chatu_img}
![Figure-P137_9991.jpg](https://i.imgur.com/cr8ks7h.jpeg){.pic-img-w10 width="1245" height="1211"}

图4-3　游戏模块流程图
:::

3\. 总电路图

电路使用10kΩ电阻连接薄膜式压力传感器（FSR）负极到Arduino开发板的GND引脚，FSR正极引脚连接Arduino开发板的5V引脚；四个FSR的正极分别接Arduino开发板的数字引脚A0、A1、A2、A3。总电路如图4-4所示，引脚连接如表4-1所示。

::: {.chatu_img}
![Figure-P138_9997.jpg](https://i.imgur.com/kqzVfmT.jpeg){.pic-img-w9 width="1280" height="1192"}

图4-4　总电路图
:::

::: {.chatu_img}
表4-1　引脚连接表

![Figure-T138_15865.jpg](https://i.imgur.com/WoNFy39.jpeg){.pic-img width="1280" height="496"}
:::

### 4.2　模块介绍 {#Sectio0009.xhtml#isbn9787302528234_4_1_2 .txtheading}

本项目主要包括输入模块（FSR402薄膜压力传感器与蓝牙）和Processing界面显示模块。下面分别给出各模块的功能介绍及相关代码。

#### 4.2.1　输入模块 {#Sectio0009.xhtml#isbn9787302528234_4_1_2_1 .txtheading1}

本部分包括输入模块（FSR402薄膜压力传感器和蓝牙）的功能介绍及相关代码。

1\. 功能介绍

1）FSR402薄膜压力传感器

薄膜压力传感器将感受到的压力大小转化为电信号，通过Arduino开发板的串口传输至PC端，显示感应结果。元件包括4个FSR402薄膜压力传感器模块、Arduino开发板和导线若干，电路如图4-5所示。

::: {.chatu_img}
![Figure-P139_10152.jpg](https://i.imgur.com/yosFaKy.jpeg){.pic-img-w10 width="1280" height="1263"}

图4-5　FSR402薄膜压力传感器与Arduino开发板连线图
:::

2）蓝牙模块

将压力信号通过蓝牙传输到接收端。元件包括蓝牙模块、Arduino开发板和导线若干，电路如图4-6所示。

::: {.chatu_img}
![Figure-P140_10158.jpg](https://i.imgur.com/W0B9YkE.jpeg){.pic-img-w7 width="1280" height="689"}

图4-6　蓝牙模块与Arduino开发板连线图
:::

2\. 相关代码

::: {.chatu_img}
![Figure-P140_15866.jpg](https://i.imgur.com/ItdWN7W.jpeg){.pic-img width="1280" height="1462"}
:::

#### 4.2.2　Processing界面显示模块 {#Sectio0009.xhtml#isbn9787302528234_4_1_2_2 .txtheading1}

本部分包括Processing界面显示模块的功能介绍及相关代码。

1\. 功能介绍

通过Processing程序显示游戏界面，包括菜单选择及游戏具体关卡等。

第一个游戏是"音乐打击"，在选择完毕后开始游戏，出现前进按键并同时播放音乐，在合适的时间轻按FSR402进行互动，若击中则计combo值，若未击中，则combo值清零，与此同时统计总击中数（即得分）。第二个游戏是"音乐小球"，伴随背景音乐用按压FSR402的方式引导小球穿过迷宫到达终点，记录通关时间并存档。

2\. 相关代码

::: {.chatu_img}
![Figure-P141_15870.jpg](https://i.imgur.com/LwMa5dT.jpeg){.pic-img width="1280" height="1143"}
:::

::: {.chatu_img}
![Figure-P142_15872.jpg](https://i.imgur.com/YUkwNVN.jpeg){.pic-img width="1280" height="1880"}
:::

::: {.chatu_img}
![Figure-P143_15873.jpg](https://i.imgur.com/2FdwA3Y.jpeg){.pic-img width="1280" height="1944"}
:::

::: {.chatu_img}
![Figure-P144_15874.jpg](https://i.imgur.com/NjKyG05.jpeg){.pic-img width="1280" height="1848"}
:::

::: {.chatu_img}
![Figure-P145_15875.jpg](https://i.imgur.com/iXPUhc1.jpeg){.pic-img width="1280" height="2169"}
:::

::: {.chatu_img}
![Figure-P146_15876.jpg](https://i.imgur.com/8qYQZ2n.jpeg){.pic-img width="1280" height="1960"}
:::

::: {.chatu_img}
![Figure-P147_15877.jpg](https://i.imgur.com/yJInlkI.jpeg){.pic-img width="1280" height="1915"}
:::

::: {.chatu_img}
![Figure-P148_15878.jpg](https://i.imgur.com/iXBo71a.jpeg){.pic-img width="1280" height="1961"}
:::

::: {.chatu_img}
![Figure-P149_15879.jpg](https://i.imgur.com/GKNu3AJ.jpeg){.pic-img width="1280" height="1901"}
:::

::: {.chatu_img}
![Figure-P150_15880.jpg](https://i.imgur.com/YtI2iPA.jpeg){.pic-img width="1280" height="1907"}
:::

::: {.chatu_img}
![Figure-P151_15881.jpg](https://i.imgur.com/6oqgQfw.jpeg){.pic-img width="1280" height="1898"}
:::

::: {.chatu_img}
![Figure-P152_15882.jpg](https://i.imgur.com/lxkL1j5.jpeg){.pic-img width="1280" height="1980"}
:::

::: {.chatu_img}
![Figure-P153_15883.jpg](https://i.imgur.com/1Gi4iYG.jpeg){.pic-img width="1280" height="1887"}
:::

::: {.chatu_img}
![Figure-P154_15884.jpg](https://i.imgur.com/3z3NgFs.jpeg){.pic-img width="1280" height="1933"}
:::

::: {.chatu_img}
![Figure-P155_15885.jpg](https://i.imgur.com/qG5OJ9G.jpeg){.pic-img width="1280" height="1954"}
:::

::: {.chatu_img}
![Figure-P156_15886.jpg](https://i.imgur.com/Sj1w0Q2.jpeg){.pic-img width="1280" height="1955"}
:::

::: {.chatu_img}
![Figure-P157_15887.jpg](https://i.imgur.com/hsmnjMc.jpeg){.pic-img width="1280" height="1942"}
:::

::: {.chatu_img}
![Figure-P158_15888.jpg](https://i.imgur.com/so11eVv.jpeg){.pic-img width="1280" height="1859"}
:::

::: {.chatu_img}
![Figure-P159_15889.jpg](https://i.imgur.com/7I0hpfE.jpeg){.pic-img width="1280" height="1902"}
:::

::: {.chatu_img}
![Figure-P160_15890.jpg](https://i.imgur.com/3T6VARp.jpeg){.pic-img width="1280" height="1882"}
:::

::: {.chatu_img}
![Figure-P161_15891.jpg](https://i.imgur.com/xWT4doS.jpeg){.pic-img width="1280" height="1936"}
:::

::: {.chatu_img}
![Figure-P162_15892.jpg](https://i.imgur.com/VJ2whD4.jpeg){.pic-img width="1280" height="1966"}
:::

::: {.chatu_img}
![Figure-P163_15893.jpg](https://i.imgur.com/XAs76GY.jpeg){.pic-img width="1280" height="388"}
:::

### 4.3　产品展示 {#Sectio0009.xhtml#isbn9787302528234_4_1_3 .txtheading}

整体外观如图4-7所示，电路正视如图4-8所示，电路俯视如图4-9所示，选择游戏如图4-10所示，游戏一如图4-11所示，游戏二如图4-12所示。

::: {.chatu_img}
![Figure-P163_10369.jpg](https://i.imgur.com/AKrrT1i.jpeg){.pic-img-w3 width="1005" height="753"}

图4-7　整体外观图
:::

::: {.chatu_img}
![Figure-P163_10372.jpg](https://i.imgur.com/TDC4YTW.jpeg){.pic-img-w3 width="1005" height="751"}

图4-8　电路正视图
:::

::: {.chatu_img}
![Figure-P164_10377.jpg](https://i.imgur.com/pzM4Lb3.jpeg){.pic-img-w3 width="946" height="710"}

图4-9　电路俯视图
:::

::: {.chatu_img}
![Figure-P164_10380.jpg](https://i.imgur.com/pZKPJ8Z.jpeg){.pic-img-w2 width="720" height="714"}

图4-10　选择游戏
:::

::: {.chatu_img}
![Figure-P164_10383.jpg](https://i.imgur.com/tFHkCL6.jpeg){.pic-img-w15 width="1280" height="1267"}

图4-11　游戏一
:::

::: {.chatu_img}
![Figure-P165_10388.jpg](https://i.imgur.com/QBXA6fJ.jpeg){.pic-img-w15 width="1280" height="1959"}

图4-12　游戏二
:::

### 4.4　元件清单 {#Sectio0009.xhtml#isbn9787302528234_4_1_4 .txtheading}

完成本项目所用到的元件及数量如表4-2所示。

::: {.chatu_img}
表4-2　元件清单

![Figure-T166_15895.jpg](https://i.imgur.com/pFJF7hP.jpeg){.pic-img width="1280" height="456"}
:::

------------------------------------------------------------------------

[(1)](#Sectio0009.xhtml#jzyy_1_136){#Sectio0009.xhtml#jz_1_136}　本章根据陈怡如、张乔茜项目设计整理而成。

[]{#Sectio0010.xhtml}

# 第5章　节奏大师之疯狂打地鼠项目设计[^(1)^](#Sectio0010.xhtml#jz_1_167){#Sectio0010.xhtml#jzyy_1_167 .calibre6} {#Sectio0010.xhtml#isbn9787302528234_5 .chaptertitle}

本项目基于Arduino开发板设计一款具有计时功能、将节奏大师与打地鼠结合起来的游戏，玩家可以选择根据地鼠出现的顺序或者LED的提示，实现演奏功能。

### 5.1　功能及总体设计 {#Sectio0010.xhtml#isbn9787302528234_5_1_1 .txtheading}

本项目根据地鼠出现的顺序（按照音乐《两只老虎》的节奏），或者彩灯输出的顺序按下按键实现演奏音乐与打地鼠同步。在游戏里还加入了计时功能，记录玩家完成演奏一首音乐的时间并生成一条纪录（如果完成时间变短则更新纪录，否则保持之前纪录不变），以此鼓励玩家不断地进行游戏并打破之前的纪录。

要实现上述功能需将作品分成四部分进行设计，即总体输入、处理部分、传输部分和输出部分。总体输入选用了焊接在万用板上的6个按键，每个按键对应一种音调，同时也各自对应1个LED和网页端的地鼠洞，当对应的LED亮或者出现地鼠的时候，按下按键即可演奏音乐，打下地鼠；传输部分选用了ESP8266模块配合Arduino开发板实现，将LED输出的信息（程序生成的字符）同步传输到网页端，由暗变亮或者由亮变暗的LED对应地鼠出现或被打下；处理部分由本地服务器和前端构成，将ESP8266传送的信息进行处理；输出部分使用6个LED和网页端上显示的打地鼠界面实现。

1\. 整体框架图

整体框架如图5-1所示。

::: {.chatu_img}
![Figure-P167_10432.jpg](https://i.imgur.com/o5iXb02.jpeg){.pic-img-w4 width="1280" height="443"}

图5-1　整体框架图
:::

2\. 系统流程图

系统流程如图5-2所示。

::: {.chatu_img}
![Figure-P168_10442.jpg](https://i.imgur.com/SXQyyFq.jpeg){.pic-img-w width="858" height="1891"}

图5-2　系统流程图
:::

预先在代码中写入了《两只老虎》的节奏。游戏开始之后，LED按照音乐的节奏由暗变亮。ESP8266将此信息传至服务器和前端，对此信息进行处理，控制网页端对应地鼠出现。根据网页端地鼠出现或者LED变亮的信息，正确按下对应按键，让蜂鸣器发出准确的音调，LED由亮变暗，网页端的地鼠被打下；未按或者按错按键，不会发出声音或音调错误，则LED和网页端的地鼠都保持不变直至玩家按下正确的按键。

3\. 总电路图

总电路如图5-3所示，引脚连接如表5-1所示。

::: {.chatu_img}
![Figure-P169_10449.jpg](https://i.imgur.com/nYJ77xV.jpeg){.pic-img-w10 width="1280" height="633"}

图5-3　总电路图
:::

::: {.chatu_img}
表5-1　引脚连接表

![Figure-T169_15899.jpg](https://i.imgur.com/jtZru9W.jpeg){.pic-img width="1280" height="778"}
:::

### 5.2　模块介绍 {#Sectio0010.xhtml#isbn9787302528234_5_1_2 .txtheading}

本项目主要包括主程序部分（控制LED按照歌曲节奏输出以及设置按键、控制蜂鸣器音调）、ESP8266模块（传输信息）、本地服务器和前端部分。下面分别给出各模块的功能介绍及相关代码。

#### 5.2.1　主程序模块 {#Sectio0010.xhtml#isbn9787302528234_5_1_2_1 .txtheading1}

本部分包括主程序模块的功能介绍及相关代码。

1\. 功能介绍

主程序模块实现6个按键设置分别对应不同的音调，当按下按键的时候，蜂鸣器发出对应音调；将6个LED与《两只老虎》节奏对应，当演奏某音调时，对应LED由暗转亮，结束时，对应LED由亮转暗；将6个LED与6个按键一一对应，每当按下一次按键，对应LED由亮转暗。元件包括6个按键开关、6个LED、Arduino开发板、蜂鸣器、万用板和导线若干，电路如图5-4所示。

::: {.chatu_img}
![Figure-P170_10617.jpg](https://i.imgur.com/FrCgaYI.jpeg){.pic-img-w3 width="1002" height="627"}

图5-4　LED、按键开关与Arduino开发板连接图
:::

2\. 相关代码

::: {.chatu_img}
![Figure-P170_15901.jpg](https://i.imgur.com/OdkkMX5.jpeg){.pic-img width="1280" height="837"}
:::

::: {.chatu_img}
![Figure-P171_15902.jpg](https://i.imgur.com/58MgtkE.jpeg){.pic-img width="1280" height="1862"}
:::

::: {.chatu_img}
![Figure-P172_15903.jpg](https://i.imgur.com/BfUu45N.jpeg){.pic-img width="1280" height="1860"}
:::

::: {.chatu_img}
![Figure-P173_15904.jpg](https://i.imgur.com/dwsetNY.jpeg){.pic-img width="1280" height="1867"}
:::

::: {.chatu_img}
![Figure-P174_15905.jpg](https://i.imgur.com/OU9Y81N.jpeg){.pic-img width="1280" height="1993"}
:::

::: {.chatu_img}
![Figure-P175_15906.jpg](https://i.imgur.com/iTjvQBq.jpeg){.pic-img width="1280" height="970"}
:::

#### 5.2.2　ESP8266模块 {#Sectio0010.xhtml#isbn9787302528234_5_1_2_2 .txtheading1}

本部分包括ESP8266模块的功能介绍及相关代码。

1\. 功能介绍

ESP8266将主程序生成的字符传输到服务器控制网页的打地鼠游戏。元件包括ESP8266模块、Arduino开发板和导线若干，电路如图5-5所示。

::: {.chatu_img}
![Figure-P175_10653.jpg](https://i.imgur.com/WgXmJA1.jpeg){.pic-img-w3 width="1017" height="484"}

图5-5　ESP8266模块与Arduino开发板连线图
:::

2\. 相关代码

::: {.chatu_img}
![Figure-P175_15907.jpg](https://i.imgur.com/6xBs7Rw.jpeg){.pic-img width="1280" height="1970"}
:::

::: {.chatu_img}
![Figure-P177_15910.jpg](https://i.imgur.com/tLE2zfE.jpeg){.pic-img width="1280" height="698"}
:::

#### 5.2.3　服务器模块 {#Sectio0010.xhtml#isbn9787302528234_5_1_2_3 .txtheading1}

本部分包括服务器模块的功能介绍及相关代码。

1\. 功能介绍

服务器主要是通过HTTP协议接收ESP8266传输过来的数据，并通过socket.io和前端建立websocket连接，推送内容给前端展示。

2\. 相关代码

::: {.chatu_img}
![Figure-P177_15913.jpg](https://i.imgur.com/WriGI0K.jpeg){.pic-img width="1280" height="1185"}
:::

#### 5.2.4　前端模块 {#Sectio0010.xhtml#isbn9787302528234_5_1_2_4 .txtheading1}

本部分包括前端模块的功能介绍及相关代码。

1\. 功能介绍

前端主要是用于展示游戏页面，地鼠的出现和被敲打，并记录游戏时长、完成计时功能以及记录完成游戏的最快时间。

2\. 相关代码

1）CSS部分

::: {.chatu_img}
![Figure-P178_15915.jpg](https://i.imgur.com/MbJQUHc.jpeg){.pic-img width="1280" height="1102"}
:::

::: {.chatu_img}
![Figure-P179_15916.jpg](https://i.imgur.com/0RTLnGG.jpeg){.pic-img width="1280" height="1897"}
:::

::: {.chatu_img}
![Figure-P180_10691.jpg](https://i.imgur.com/YemukrG.jpeg){.pic-img width="1280" height="1861"}
:::

::: {.chatu_img}
![Figure-P181_16572.jpg](https://i.imgur.com/l5WDCmH.jpeg){.pic-img width="1280" height="567"}
:::

2）HTML部分

::: {.chatu_img}
![Figure-P181_16573.jpg](https://i.imgur.com/jft6cMM.jpeg){.pic-img width="1280" height="1222"}
:::

::: {.chatu_img}
![Figure-P182_16762.jpg](https://i.imgur.com/Sdlpf2l.jpeg){.pic-img width="1280" height="696"}
:::

3）JavaScript部分

::: {.chatu_img}
![Figure-P182_16761.jpg](https://i.imgur.com/aC2CNWo.jpeg){.pic-img width="1280" height="1195"}
:::

::: {.chatu_img}
![Figure-P183_11182.jpg](https://i.imgur.com/sEekGhg.jpeg){.pic-img width="1280" height="1876"}
:::

::: {.chatu_img}
![Figure-P184_11185.jpg](https://i.imgur.com/RZ2Boau.jpeg){.pic-img width="1280" height="1848"}
:::

::: {.chatu_img}
![Figure-P185_11188.jpg](https://i.imgur.com/Aw7093v.jpeg){.pic-img width="1280" height="1833"}
:::

::: {.chatu_img}
![Figure-P186_15919.jpg](https://i.imgur.com/dhGS0qW.jpeg){.pic-img width="1280" height="1773"}
:::

::: {.chatu_img}
![Figure-P187_11195.jpg](https://i.imgur.com/Sfu68LT.jpeg){.pic-img width="1280" height="1889"}
:::

::: {.chatu_img}
![Figure-P188_15920.jpg](https://i.imgur.com/WvyCi7s.jpeg){.pic-img width="1280" height="1843"}
:::

::: {.chatu_img}
![Figure-P189_11205.jpg](https://i.imgur.com/gx4fGj0.jpeg){.pic-img width="1280" height="1540"}
:::

### 5.3　产品展示 {#Sectio0010.xhtml#isbn9787302528234_5_1_3 .txtheading}

整体外观如图5-6所示，左边计算机上显示的是打地鼠游戏界面端，右边是Arduino开发板及其连接的LED、万用板及其连接的按键开关和ESP8266模块。网页端游戏开始界面如图5-7所示，游戏进行界面如图5-8所示，记录完成游戏时间界面如图5-9所示。

::: {.chatu_img}
![Figure-P190_11210.jpg](https://i.imgur.com/DpdGt1v.jpeg){.pic-img-w1 width="946" height="709"}

图5-6　整体外观图
:::

::: {.chatu_img}
![Figure-P190_11213.jpg](https://i.imgur.com/KRCXDb5.jpeg){.pic-img-w8 width="1230" height="664"}

图5-7　游戏开始界面
:::

::: {.chatu_img}
![Figure-P190_11216.jpg](https://i.imgur.com/ksi52XN.jpeg){.pic-img-w10 width="1280" height="684"}

图5-8　游戏进行界面
:::

::: {.chatu_img}
![Figure-P191_11221.jpg](https://i.imgur.com/CrPLXiG.jpeg){.pic-img-w4 width="1280" height="684"}

图5-9　记录完成游戏时间界面
:::

### 5.4　元件清单 {#Sectio0010.xhtml#isbn9787302528234_5_1_4 .txtheading}

完成本项目所用到的元件及数量如表5-2所示。

::: {.chatu_img}
表5-2　元件清单

![Figure-T191_15921.jpg](https://i.imgur.com/UW0e4Hh.jpeg){.pic-img width="1280" height="366"}
:::

------------------------------------------------------------------------

[(1)](#Sectio0010.xhtml#jzyy_1_167){#Sectio0010.xhtml#jz_1_167}　本章根据陈文恺、谢岳项目设计整理而成。

[]{#Sectio0011.xhtml}

# 第6章　基于红外测距的虚拟电子琴项目设计[^(1)^](#Sectio0011.xhtml#jz_1_192){#Sectio0011.xhtml#jzyy_1_192 .calibre6} {#Sectio0011.xhtml#isbn9787302528234_6 .chaptertitle}

本项目将红外测距原理与Arduino开发板及SD卡音乐播放功能相结合，实现具有播放、半自由演奏、自由演奏、创作、监督等功能的虚拟电子琴。

### 6.1　功能及总体设计 {#Sectio0011.xhtml#isbn9787302528234_6_1_1 .txtheading}

本项目将琴键音wav文件存于SD卡中，使用活动挡板，测距有效区域遮挡对应的传感器，通过测得传感器到挡板距离的回传，播放对应的声音文件。用户也可以通过选择不同的功能，实现不同模式的弹奏。

要实现上述功能需将作品分成三部分进行设计，即红外测距输入部分、SD卡输入部分和扬声器输出部分。红外测距输入部分主要功能是将模拟引脚读取的电压值通过函数转化为距离输入；SD卡输入部分主要功能是读取预置的琴键音wav文件和音乐播放wav文件；音频处理并输出部分主要功能是将两个声道的信号输入通过功放板进行放大并播放。

1\. 整体框架图

整体框架如图6-1所示。

::: {.chatu_img}
![Figure-P192_11263.jpg](https://i.imgur.com/QkMZlkv.jpeg){.pic-img-w9 width="1280" height="486"}

图6-1　整体框架图
:::

2\. 系统流程图

系统流程如图6-2所示。

::: {.chatu_img}
![Figure-P193_11273.jpg](https://i.imgur.com/MjIwtfa.jpeg){.pic-img-w8 width="1204" height="790"}

图6-2　系统流程图
:::

接通电源后连接蓝牙，对串口监视器选择需要的功能开始测距。通过功能定义的区别，选择不同的测距数据处理方式及播放声音文件的方式。处理后，若检测到复位信号，则重新选择功能。

3\. 总电路图

总电路如图6-3所示，引脚连接如表6-1所示。

::: {.chatu_img}
![Figure-P193_11277.jpg](https://i.imgur.com/EA8KSpy.jpeg){.pic-img-w10 width="1280" height="1060"}

图6-3　总电路图
:::

::: {.chatu_img}
表6-1　引脚连接表

![Figure-T194_15924.jpg](https://i.imgur.com/4gs8gDx.jpeg){.pic-img width="1280" height="688"}
:::

### 6.2　模块介绍 {#Sectio0011.xhtml#isbn9787302528234_6_1_2 .txtheading}

本项目主要包括主程序模块、SD卡读写模块、红外测距模块和数据处理模块。下面分别给出各模块的功能介绍及相关代码。

#### 6.2.1　主程序模块 {#Sectio0011.xhtml#isbn9787302528234_6_1_2_1 .txtheading1}

本部分包括主程序模块的功能介绍及相关代码。

1\. 功能介绍

通过串口监视器实现功能选择，如图6-4所示。

::: {.chatu_img}
![Figure-P194_11435.jpg](https://i.imgur.com/jOA01FE.jpeg){.pic-img-w8 width="1211" height="651"}

图6-4　功能选择串口监视器图
:::

2\. 相关代码

::: {.chatu_img}
![Figure-P195_15926.jpg](https://i.imgur.com/GLjI0Lk.jpeg){.pic-img width="1280" height="1771"}
:::

::: {.chatu_img}
![Figure-P196_15927.jpg](https://i.imgur.com/qBrOfM1.jpeg){.pic-img width="1280" height="1920"}
:::

#### 6.2.2　SD卡读写模块 {#Sectio0011.xhtml#isbn9787302528234_6_1_2_2 .txtheading1}

本部分包括SD卡读写模块的功能介绍及相关代码。

1\. 功能介绍

读取SD卡中琴键/音乐wav文件，并根据代码播放。元件包括SD卡读写模块，如图6-5所示。

::: {.chatu_img}
![Figure-P197_11450.jpg](https://i.imgur.com/sKDTyHk.jpeg){.pic-img-w1 width="886" height="665"}

图6-5　SD读写模块图
:::

2\. 相关代码

SD卡初始化：

::: {.chatu_img}
![Figure-P197_15928.jpg](https://i.imgur.com/gwIYC1b.jpeg){.pic-img width="1280" height="867"}
:::

::: {.chatu_img}
![Figure-P198_15929.jpg](https://i.imgur.com/hk3cawJ.jpeg){.pic-img width="1280" height="1871"}
:::

::: {.chatu_img}
![Figure-P199_15930.jpg](https://i.imgur.com/t5DRjyJ.jpeg){.pic-img width="1280" height="1883"}
:::

::: {.chatu_img}
![Figure-P200_15931.jpg](https://i.imgur.com/ySN2AJM.jpeg){.pic-img width="1280" height="1892"}
:::

::: {.chatu_img}
![Figure-P201_11478.jpg](https://i.imgur.com/mWNqzrQ.jpeg){.pic-img width="1280" height="204"}
:::

#### 6.2.3　红外测距模块 {#Sectio0011.xhtml#isbn9787302528234_6_1_2_3 .txtheading1}

本部分包括红外测距模块的功能介绍及相关代码。

1\. 功能介绍

四个传感器循环测距，可使用活动挡板遮挡某个红外测距传感器。模拟引脚检测到传感器电压变化，通过测距函数转化为相应距离。有效范围内的距离作为数据，输出到数据处理部分，如图6-6所示。

::: {.chatu_img}
![Figure-P201_11481.jpg](https://i.imgur.com/6xB4W76.jpeg){.pic-img-w8 width="1182" height="886"}

图6-6　红外测距模块
:::

2\. 相关代码

::: {.chatu_img}
![Figure-P201_15932.jpg](https://i.imgur.com/FfGtC5h.jpeg){.pic-img width="1280" height="533"}
:::

::: {.chatu_img}
![Figure-P202_15933.jpg](https://i.imgur.com/iJtykFG.jpeg){.pic-img width="1280" height="1862"}
:::

::: {.chatu_img}
![Figure-P203_15934.jpg](https://i.imgur.com/IRH8N7v.jpeg){.pic-img width="1280" height="1461"}
:::

#### 6.2.4　数据处理模块 {#Sectio0011.xhtml#isbn9787302528234_6_1_2_4 .txtheading1}

本部分包括自由弹奏模式、创作模式、半自由弹奏模式、监督模式和音乐播放模式。

1\. 自由弹奏模式

本部分包括自由弹奏模式的功能介绍及相关代码。

1）功能介绍

通过测量距离的范围，保证数据准确的情况下，在琴架上划分22个有效区域，分别对应21个琴键音和结束音。当活动挡板落在有效区域内时，回传对应测距数据，即可播放对应琴键音，如图6-7所示。

::: {.chatu_img}
![Figure-P204_11666.jpg](https://i.imgur.com/UVSL358.jpeg){.pic-img-w8 width="1221" height="661"}

图6-7　自由弹奏模式串口监视器截图
:::

2）相关代码

::: {.chatu_img}
![Figure-P204_15935.jpg](https://i.imgur.com/UbKyuyG.jpeg){.pic-img width="1280" height="833"}
:::

2\. 创作模式

本部分主要包括创作模式的功能介绍及相关代码。

1）功能介绍

选中创作模式时，用户弹奏的音符和每个音符持续的时长记录到数组里。当用户创作结束时，输入"结束音"，记录则会结束。之后即可选择是否回放刚才的弹奏。若选择是，则可读取储存数据（琴键音和播放时长），进行回放；若选择否，即清空储存数据，如图6-8所示。

::: {.chatu_img}
![Figure-P205_11676.jpg](https://i.imgur.com/wHcld5F.jpeg){.pic-img-w8 width="1224" height="645"}

图6-8　创作模式串口监视器图
:::

2）相关代码

::: {.chatu_img}
![Figure-P205_15937.jpg](https://i.imgur.com/eZW5x0D.jpeg){.pic-img width="1280" height="1220"}
:::

::: {.chatu_img}
![Figure-P206_15938.jpg](https://i.imgur.com/crbdyHy.jpeg){.pic-img width="1280" height="1898"}
:::

::: {.chatu_img}
![Figure-P207_15939.jpg](https://i.imgur.com/bod6X95.jpeg){.pic-img width="1280" height="1804"}
:::

::: {.chatu_img}
![Figure-P208_15940.jpg](https://i.imgur.com/tIShd44.jpeg){.pic-img width="1280" height="648"}
:::

3\. 半自由弹奏模式

本部分主要包括半自由弹奏模式的功能介绍及相关代码。

1）功能介绍

该模式提前输入了两支曲谱。选择其中一个，将活动挡板遮挡在22个有效区域内，即可自动播放选中曲子的第一个音。当用户认为该琴键音持续时长已足够，即可进行下一次遮挡，自动播放选中曲子的下一个音......如此循环，直到结束音响起，弹奏结束。用户只需控制每个音的持续时长，而不必在意音准，即可"弹奏"完成整支曲子如图6-9所示。

::: {.chatu_img}
![Figure-P208_11711.jpg](https://i.imgur.com/c5NlUHh.jpeg){.pic-img-w8 width="1225" height="623"}

图6-9　半自由弹奏模式串口监视器图
:::

2）相关代码

::: {.chatu_img}
![Figure-P208_15941.jpg](https://i.imgur.com/uKcHX7o.jpeg){.pic-img width="1280" height="282"}
:::

::: {.chatu_img}
![Figure-P209_15943.jpg](https://i.imgur.com/ykjNj4Y.jpeg){.pic-img width="1280" height="1881"}
:::

::: {.chatu_img}
![Figure-P210_15944.jpg](https://i.imgur.com/SBjcpy5.jpeg){.pic-img width="1280" height="1895"}
:::

::: {.chatu_img}
![Figure-P211_15945.jpg](https://i.imgur.com/4WSIYHM.jpeg){.pic-img width="1280" height="479"}
:::

4\. 监督模式

本部分主要包括监督模式的功能介绍及相关代码。

1）功能介绍

此模式为半自由弹奏模式的一个分支，在此模式下，选中一支指定曲目。读取第一个储存音符的数组，当用户遮挡不在该琴键音对应的正确范围时，会播放"报错音"（即结束音），只有当遮挡在正确范围内，才会播放对应的琴键音，并读取数组中下一个数据进行监督......如此循环，当播放结束音的时候，监督结束，如图6-10所示。

::: {.chatu_img}
![Figure-P211_11742.jpg](https://i.imgur.com/PvuJpuv.jpeg){.pic-img-w8 width="1218" height="592"}

图6-10　监督模式串口监视器图
:::

2）相关代码

::: {.chatu_img}
![Figure-P211_15946.jpg](https://i.imgur.com/f7zx2TU.jpeg){.pic-img width="1280" height="1616"}
:::

5\. 音乐播放模式

本部分主要包括音乐播放模式的功能介绍和相关代码。

1）功能介绍

通过读取SD卡中已录入的音乐文件，实现音乐播放器的功能（开始、暂停、重选等），如图6-11所示。

::: {.chatu_img}
![Figure-P212_11768.jpg](https://i.imgur.com/dIQVp26.jpeg){.pic-img-w7 width="1280" height="462"}

图6-11　音乐播放模式串口监视器图
:::

2）相关代码

::: {.chatu_img}
![Figure-P213_15950.jpg](https://i.imgur.com/ZbMm4WC.jpeg){.pic-img width="1280" height="1758"}
:::

::: {.chatu_img}
![Figure-P214_15952.jpg](https://i.imgur.com/dGTMWiS.jpeg){.pic-img width="1280" height="1785"}
:::

### 6.3　产品展示 {#Sectio0011.xhtml#isbn9787302528234_6_1_3 .txtheading}

整体外观如图6-12所示，内部结构如图6-13所示。

::: {.chatu_img}
![Figure-P215_11786.jpg](https://i.imgur.com/p93NqZT.jpeg){.pic-img-w8 width="1241" height="930"}

图6-12　整体外观图
:::

::: {.chatu_img}
![Figure-P215_11789.jpg](https://i.imgur.com/iVt4sZs.jpeg){.pic-img-w8 width="1241" height="929"}

图6-13　内部结构图
:::

### 6.4　元件清单 {#Sectio0011.xhtml#isbn9787302528234_6_1_4 .txtheading}

完成本项目所用到的元件及数量如表6-2所示。

::: {.chatu_img}
表6-2　元件清单

![Figure-T216_15953.jpg](https://i.imgur.com/AVIuHJp.jpeg){.pic-img width="1280" height="825"}
:::

------------------------------------------------------------------------

[(1)](#Sectio0011.xhtml#jzyy_1_192){#Sectio0011.xhtml#jz_1_192}　本章根据张欣悦、王佳洋项目设计整理而成。

[]{#Sectio0012.xhtml}

# 第7章　智能弹奏尤克里里项目设计[^(1)^](#Sectio0012.xhtml#jz_1_217){#Sectio0012.xhtml#jzyy_1_217 .calibre6} {#Sectio0012.xhtml#isbn9787302528234_7 .chaptertitle}

本项目基于Arduino开发板的舵机、蓝牙与APP结合的模式，设计一款智能自动弹奏尤克里里系统，实现智能开关、点歌等功能。

### 7.1　功能及总体设计 {#Sectio0012.xhtml#isbn9787302528234_7_1_1 .txtheading}

本项目利用APP作为命令输入端向Arduino开发板发出点歌、音阶指令并完成相应的功能，搭建一个适合于舵机拨弦和按弦的框架结构。创新点在于HC-05蓝牙模块与APP传输以及拨弦舵机的同步与非同步处理，从而实现智能弹奏。拟选用五首歌曲和7个中音阶，结合尤克里里的特点分为扫弦4个舵机，按弦3个舵机。产品包装采用竹筷支架将舵机固定于弦上，精准调出每一个舵机的偏转角度，力求将音调准、声音大。

（1）点歌：有五首歌供选择《欢乐颂》《小星星》《两只老虎》《我和你》《虫儿飞》。

（2）音阶弹奏：有七个中音，分别为Do、Re、Mi、Fa、Sol、La、Si。

（3）弹弦拨弦：4个舵机拨弦，3个舵机按弦，按照尤克里里可完成7个音。

（4）HC-05蓝牙模块：与APP传输的媒介，接收APP返回指令。

（5）APP：完成功能指令输入。

要实现上述功能需将作品分成四部分进行设计，即输入部分、处理部分、传输部分和输出部分。输入部分由APP实现，APP由APP Inventor2制作；处理部分主要通过Arduino开发板的C++程序实现，代码主要为舵机旋转角度的控制代码；传输部分选用了HC-05蓝牙模块配合Arduino开发板实现；输出部分使用7个舵机实现。

::: {.chatu_img-float-r-w1}
![Figure-P217_11830.jpg](https://i.imgur.com/VqiMeMu.jpeg){.pic-img width="708" height="368"}

图7-1　整体框架图
:::

1\. 整体框架图

整体框架如图7-1所示。

2\. 系统流程图

系统流程如图7-2所示。

APP选择功能后，通过HC-05蓝牙模块发送文本命令到Arduino开发板，根据返回的相应指令进行匹配，匹配成功则选择完成相应的功能代码，匹配无效则返回手机再次选择，舵机根据已设计的程序调节好角度进行弹奏。

::: {.chatu_img}
![Figure-P218_11840.jpg](https://i.imgur.com/pJtIYn6.jpeg){.pic-img-w6 width="470" height="883"}

图7-2　系统流程图
:::

3\. 总电路图

总电路如图7-3所示，引脚连接如表7-1所示。舵机从左到右1\~4表示拨弦，实际接舵机的引脚2\~5；4\~6表示按弦，实际连接舵机的引脚8\~10；HC-05的RXD接Arduino开发板的TXD；HC-05的TXD接Arduino开发板的RXD。

::: {.chatu_img}
![Figure-P218_11844.jpg](https://i.imgur.com/NcthxM5.jpeg){.pic-img-w8 width="1226" height="1194"}

图7-3　总电路图
:::

::: {.chatu_img}
表7-1　引脚连接表

![Figure-T219_15958.jpg](https://i.imgur.com/957TkTr.jpeg){.pic-img width="1280" height="621"}
:::

### 7.2　模块介绍 {#Sectio0012.xhtml#isbn9787302528234_7_1_2 .txtheading}

本项目主要包括主程序模块、HC-05蓝牙模块、手机端APP制作模块。下面分别给出各模块的功能介绍及相关代码。

#### 7.2.1　主程序模块 {#Sectio0012.xhtml#isbn9787302528234_7_1_2_1 .txtheading1}

本部分包括主程序模块的功能介绍及相关代码。

1\. 功能介绍

主要是进行7个舵机的同步与异步控制来实现各个舵机角度的调测以及蓝牙传输数据的读取，实现各项功能的控制实现，此部分主要由C++代码实现，编译环境为Arduino 1.8.4。舵机控制部分是通过各音符对应的位置及弹奏的力度来实现对舵机角度的调测。其中4个舵机为拨弦舵机、3个为按弦舵机，通过位置数组的实现方式可快速准确地让舵机到达相应位置。蓝牙传输部分主要是读取蓝牙传输的值，根据值的不同来实现相应的控制。

2\. 相关代码

::: {.chatu_img}
![Figure-P219_15960.jpg](https://i.imgur.com/R9H4CIS.jpeg){.pic-img width="1280" height="420"}
:::

::: {.chatu_img}
![Figure-P220_15961.jpg](https://i.imgur.com/BSWjJbb.jpeg){.pic-img width="1280" height="1855"}
:::

::: {.chatu_img}
![Figure-P221_15964.jpg](https://i.imgur.com/bAv170n.jpeg){.pic-img width="1280" height="1850"}
:::

::: {.chatu_img}
![Figure-P222_15965.jpg](https://i.imgur.com/cWEOCtE.jpeg){.pic-img width="1280" height="1901"}
:::

::: {.chatu_img}
![Figure-P223_15966.jpg](https://i.imgur.com/541CTu1.jpeg){.pic-img width="1280" height="1870"}
:::

::: {.chatu_img}
![Figure-P224_15967.jpg](https://i.imgur.com/wUzyXDY.jpeg){.pic-img width="1280" height="1839"}
:::

::: {.chatu_img}
![Figure-P225_15968.jpg](https://i.imgur.com/0qRgK14.jpeg){.pic-img width="1280" height="1834"}
:::

::: {.chatu_img}
![Figure-P226_15969.jpg](https://i.imgur.com/0AYK8mq.jpeg){.pic-img width="1280" height="1880"}
:::

::: {.chatu_img}
![Figure-P227_15970.jpg](https://i.imgur.com/YbH2m9U.jpeg){.pic-img width="1280" height="1856"}
:::

::: {.chatu_img}
![Figure-P228_15971.jpg](https://i.imgur.com/W61FnTi.jpeg){.pic-img width="1280" height="1901"}
:::

::: {.chatu_img}
![Figure-P229_12045.jpg](https://i.imgur.com/nIVD1UH.jpeg){.pic-img width="1280" height="1924"}
:::

::: {.chatu_img}
![Figure-P230_12048.jpg](https://i.imgur.com/JwuMuIU.jpeg){.pic-img width="1280" height="374"}
:::

#### 7.2.2　HC-05蓝牙模块 {#Sectio0012.xhtml#isbn9787302528234_7_1_2_2 .txtheading1}

本部分包括HC-05蓝牙模块的功能介绍及相关代码。

1\. 功能介绍

蓝牙模块HC-05是一款高性能的串口模块。可用于各种带蓝牙功能的计算机、蓝牙主机、手机、PDA、PSP等智能终端配对。HC-05有两种工作模式，命令响应工作模式和自动连接工作模式，可以理解为"参数设置模式"和"正常工作模式"。在使用蓝牙之前，可通过代码在AT模式下修改参数设置，包括名称、密码、波特率、主从模式、连接状态。蓝牙模块AT模式设置：在通电前按住黑色复位键，然后接通电源，此时蓝牙模块上LED每隔2s闪烁一次，表示成功进入AT模式，结束AT模式只要拔掉电源再重新连入即可恢复。

本项目使用的HC-05蓝牙主要用于连接APP与Arduino开发板，作用是数据传输，接收APP发来的指令文本并返回给Arduino开发板，开发板根据返回的指令完成相应的功能。元件包括HC-05蓝牙模块、Arduino开发板和导线若干，电路如图7-4所示，引脚连接如表7-2所示。

::: {.chatu_img}
![Figure-P230_12051.jpg](https://i.imgur.com/142nFOZ.jpeg){.pic-img-w4 width="1280" height="718"}

图7-4　HC-05蓝牙模块与Arduino开发板连线图
:::

::: {.chatu_img}
表7-2　引脚连接表

![Figure-T231_16026.jpg](https://i.imgur.com/k2YaMPs.jpeg){.pic-img width="1280" height="246"}
:::

2\. 相关代码

::: {.chatu_img}
![Figure-P231_16024.jpg](https://i.imgur.com/V7SEybS.jpeg){.pic-img width="1280" height="1473"}
:::

::: {.chatu_img}
![Figure-P232_16028.jpg](https://i.imgur.com/EQvPx2K.jpeg){.pic-img width="1280" height="1027"}
:::

#### 7.2.3　手机端APP制作 {#Sectio0012.xhtml#isbn9787302528234_7_1_2_3 .txtheading1}

本部分包括手机端APP制作的功能介绍及相关制作。

1\. 功能介绍

主要是设计页面完成点歌和音阶的选择功能并传输给蓝牙相应的文本返回数据。

2\. 相关制作

1）蓝牙连接部分

（1）打开APP inventor新建一个项目，添加两个"activity启动器"，一个命名为"启动蓝牙配对界面"并在组件属性中的Action填入：android.settings.BLUETOOTH_SETTINGS，另一个命名为"蓝牙权限获取"并在组件属性中的Action填入：android. bluetooth.adapter.action.REQUEST_ENABLE。

（2）此步骤的作用是一个打开蓝牙配对界面以搜索配对蓝牙设备，另一个为获取打开的蓝牙权限。

（3）拖入一个蓝牙客户端，与Arduino开发板通信。拖入一个按钮，用于打开蓝牙配对界面。拖入一个列表选择框，用于选择需要连接的蓝牙设备。拖入两个标签用于显示蓝牙状态，拖入一个按钮用于断开蓝牙，如图7-5所示。

（4）组件设计完毕，单击右上角的逻辑设计进行程序的编写，如图7-6所示。

::: {.chatu_img}
![Figure-P233_12112.jpg](https://i.imgur.com/DsXo92z.jpeg){.pic-img-w4 width="1280" height="525"}

图7-5　蓝牙连接页面设置图
:::

::: {.chatu_img}
![Figure-P233_12115.jpg](https://i.imgur.com/BVRhwvX.jpeg){.pic-img-w4 width="1280" height="544"}

图7-6　蓝牙部分代码图
:::

代码说明：

（1）当screen1程序刚开始运行的时候，因为需要使用蓝牙，因此"调用蓝牙权限获取"，此句调用后若蓝牙未开启，则出现手机打开蓝牙界面。接下来将"断开连接按钮"启用属性设置为"false"，由于刚开始运行时蓝牙设备并未连接，因此"断开连接"按钮需要设置为不能使用。

（2）当按下"配对蓝牙"按钮时，需要打开手机的蓝牙界面，搜索并输入密码进行连接，因此执行开始设置的activity，按钮单击之后会打开手机的蓝牙配对界面，此时搜索到蓝牙模块单击连接，输入密码（4321），蓝牙设备进入"已配对设备列表"中。

（3）蓝牙成为已配对设备后就可以打开列表选择需要的设备进行连接。

（4）此两步为蓝牙使用标准流程，即：配对→连接，配对只在新设备连接时需要，连接时每次打开软件都进行操作。如果蓝牙设备已经在"已配对列表中"则可以直接按"连接已配对蓝牙"进行连接。

（5）用户单击列表中的选项后，需要连接蓝牙，首先断开原来连接的蓝牙设备，接下来连接选择的蓝牙设备，此处有两个参数，Arduino开发板设备上蓝牙模块对应的MAC地址，也就是上一步操作后的"选中项"，唯一编号：00001101-0000-1000-8000-00805F9B34FB，此处的唯一编号即UUID，因为使用的是蓝牙串口与Arduino开发板进行通信，因此使用这个编号，此编号不可以改变。

（6）连接蓝牙这个动作会返回连接成功还是失败，成功即为true，失败即为false，因此，如果连接成功就显示"已连接"，同时让"断开连接"按钮可以使用，如果连接失败就显示"未连接"，同时让"断开连接"按钮不能使用。

2）点歌部分

（1）设置5个按钮，分别为歌曲《两只老虎》《欢乐颂》《小星星》《虫儿飞》《我和你》。

（2）中间制作一个尤克里里标志图片。

（3）水平布局和垂直布局设计页面，如图7-7所示。

::: {.chatu_img}
![Figure-P234_12122.jpg](https://i.imgur.com/pdpxg67.jpeg){.pic-img-w4 width="1280" height="574"}

图7-7　点歌部分图
:::

点歌部分代码如图7-8所示，组件设计完毕，接下来单击右上角的逻辑设计进行程序的编写。

::: {.chatu_img}
![Figure-P234_12126.jpg](https://i.imgur.com/32QUhRX.jpeg){.pic-img-w4 width="1280" height="520"}

图7-8　点歌部分代码图
:::

代码说明：

（1）按键8\~12分别表示歌曲《两只老虎》《欢乐颂》《小星星》《虫儿飞》《我和你》。

（2）如果为《两只老虎》，发送文本"A."；如果为《欢乐颂》，发送文本"B."；如果为《小星星》，发送文本"C."；如果为《虫儿飞》，发送文本"D."；如果为《我和你》，发送文本"E."；后面加一个"."的作用为标识符，表示字符串结束，方便Arduino开发板程序快速判断控制字符已结束。

3）音阶部分

（1）创建7个按钮分别对应Do、Re、Mi、Fa、Sol、La、Si。

（2）7个按钮分别返回：a.、b.、c.、d.、e.、f.、g.（注意返回的文本结尾要用"."标记结束，后面加"."的作用为标识符，表示字符串结束，方便Arduino开发板程序快速判断控制字符已结束。中音音阶如图7-9所示。

::: {.chatu_img}
![Figure-P235_12132.jpg](https://i.imgur.com/0gXzGYe.jpeg){.pic-img-w4 width="1280" height="590"}

图7-9　中音音阶部分
:::

（3）组件设计完毕，接下来单击右上角的逻辑设计进行程序的编写，中音音阶代码如图7-10所示。

代码说明：按钮1被单击后向蓝牙发送文本"a."；按钮2被单击后向蓝牙发送文本"b."；按钮3被单击后向蓝牙发送文本"c."；按钮4被单击后向蓝牙发送文本"d."；按钮5被单击后向蓝牙发送文本"e."；按钮6被单击后向蓝牙发送文本"f."；按钮7被单击后向蓝牙发送文本"g."，如图7-11所示。

#### 7.2.4　舵机的调试 {#Sectio0012.xhtml#isbn9787302528234_7_1_2_4 .txtheading1}

本部分包括舵机的调试的功能介绍及相关代码。

1\. 功能介绍

舵机主要用于实现弹奏功能。舵机有3根线，棕色为地，红色为电源正，橙色为信号线。舵机的转动位置是靠控制PWM（脉冲宽度调制）信号的占空比来实现，标准PWM（脉冲宽度调制）信号的周期固定为20ms，占空比0.5\~2.5ms的正脉冲宽度和舵机的转角－90°\~90°相对应。调测采用了两个舵机不同角度控制以实现同步弹奏音符。元件包括1个Arduino开发板和导线若干，电路如图7-12所示，引脚连接如表7-3所示。

::: {.chatu_img}
![Figure-P236_12140.jpg](https://i.imgur.com/kvJREm6.jpeg){.pic-img-w4 width="1280" height="562"}

图7-10　中音音阶代码图
:::

::: {.chatu_img}
![Figure-P236_12143.jpg](https://i.imgur.com/yulLdtc.jpeg){.pic-img-w2 width="676" height="1302"}

图7-11　手机端APP界面
:::

::: {.chatu_img}
![Figure-P237_12149.jpg](https://i.imgur.com/EhRAAfj.jpeg){.pic-img-w4 width="1280" height="1020"}

图7-12　舵机与Arduino开发板连线图
:::

::: {.chatu_img}
表7-3　引脚连接表

![Figure-T237_16029.jpg](https://i.imgur.com/sCx3qNc.jpeg){.pic-img width="1280" height="247"}
:::

2\. 相关代码

::: {.chatu_img}
![Figure-P237_16030.jpg](https://i.imgur.com/wB5S7iU.jpeg){.pic-img width="1280" height="1670"}
:::

### 7.3　产品展示 {#Sectio0012.xhtml#isbn9787302528234_7_1_3 .txtheading}

整体外观如图7-13所示，右边为拨弦部分，中间为Arduino开发板，与之相连的是左边的按弦输出部分。四个舵机拨弦如图7-14所示，按弦支架制作如图7-15所示。

::: {.chatu_img}
![Figure-P238_12216.jpg](https://i.imgur.com/NsotDr1.jpeg){.pic-img-w1 width="886" height="489"}

图7-13　整体外观图
:::

::: {.chatu_img}
![Figure-P239_12221.jpg](https://i.imgur.com/PxHnpOh.jpeg){.pic-img-w1 width="886" height="651"}

图7-14　四个舵机拨弦图
:::

::: {.chatu_img}
![Figure-P239_12224.jpg](https://i.imgur.com/v55azKZ.jpeg){.pic-img-w1 width="886" height="502"}

图7-15　按弦支架制作图
:::

### 7.4　元件清单 {#Sectio0012.xhtml#isbn9787302528234_7_1_4 .txtheading}

完成本项目所用到的元件及数量如表7-4所示。

::: {.chatu_img}
表7-4　元件清单

![Figure-T239_16033.jpg](https://i.imgur.com/BGMC6Sh.jpeg){.pic-img width="1280" height="410"}
:::

------------------------------------------------------------------------

[(1)](#Sectio0012.xhtml#jzyy_1_217){#Sectio0012.xhtml#jz_1_217}　本章根据徐思晴、吴多晓项目设计整理而成。

[]{#Sectio0013.xhtml}

# 第8章　身临其境项目设计[^(1)^](#Sectio0013.xhtml#jz_1_240){#Sectio0013.xhtml#jzyy_1_240 .calibre6} {#Sectio0013.xhtml#isbn9787302528234_8 .chaptertitle}

本项目通过手机串口APP向蓝牙模块发送信息，实现控制音乐播放和彩灯的亮灭。

### 8.1　功能及总体设计 {#Sectio0013.xhtml#isbn9787302528234_8_1_1 .txtheading}

本项目采用HC-05蓝牙模块、DFPlayer Mini音乐播放模块、扬声器、LED彩灯实现阅读的同时播放相对应的音乐，提供图书对应位置，给予读者更好的阅读体验。

要实现上述功能需将作品分成四部分进行设计，即输入部分、处理部分、传输控制部分和输出部分。输入部分使用手机蓝牙APP，在手机端输入；处理部分主要通过代码实现；控制部分选用了HC-05模块配合Arduino开发板实现；输出部分使用DFPlayer Mini音乐播放模块和三个彩色LED实现。

1\. 整体框架图

整体框架如图8-1所示。

::: {.chatu_img}
![Figure-P240_12263.jpg](https://i.imgur.com/fR8aPsM.jpeg){.pic-img-w5 width="1137" height="354"}

图8-1　整体框架图
:::

2\. 系统流程图

系统流程如图8-2所示。

在手机上输入文字后通过HC-05模块和Arduino开发板向手机反馈对应信息，HC-05模块控制对应音乐播放和小彩灯的亮灭，读者根据需求通过APP调整音量、播放曲目等，达到预期效果。

3\. 总电路图

总电路如图8-3所示，引脚连接如表8-1所示。

::: {.chatu_img}
![Figure-P241_12273.jpg](https://i.imgur.com/1qaPUCu.jpeg){.pic-img-w6 width="424" height="906"}

图8-2　系统流程图
:::

::: {.chatu_img}
![Figure-P241_12277.jpg](https://i.imgur.com/5IxnbF4.jpeg){.pic-img-w3 width="1024" height="613"}

图8-3　总电路图
:::

::: {.chatu_img}
表8-1　引脚连接表

![Figure-T241_16036.jpg](https://i.imgur.com/HireFnN.jpeg){.pic-img width="1280" height="658"}
:::

### 8.2　模块介绍 {#Sectio0013.xhtml#isbn9787302528234_8_1_2 .txtheading}

本项目主要包括主程序模块、HC-05模块和输出模块。下面分别给出各模块的功能介绍及相关代码。

#### 8.2.1　主程序模块 {#Sectio0013.xhtml#isbn9787302528234_8_1_2_1 .txtheading1}

本部分包括主程序模块的功能介绍及相关代码。

1\. 功能介绍

主要是对手机端发送的信息进行处理，通过蓝牙控制实现功能。

2\. 相关代码

::: {.chatu_img}
![Figure-P242_16038.jpg](https://i.imgur.com/iBFn3KN.jpeg){.pic-img width="1280" height="1760"}
:::

::: {.chatu_img}
![Figure-P243_16039.jpg](https://i.imgur.com/UVbVIkn.jpeg){.pic-img width="1280" height="2013"}
:::

::: {.chatu_img}
![Figure-P244_16040.jpg](https://i.imgur.com/VDbU8h2.jpeg){.pic-img width="1280" height="324"}
:::

#### 8.2.2　HC-05模块 {#Sectio0013.xhtml#isbn9787302528234_8_1_2_2 .txtheading1}

本部分包括HC-05模块的功能介绍及相关代码。

1\. 功能介绍

本部分主要使用蓝牙模块实现无线通信，元件包括HC-05模块、Arduino开发板和导线若干，电路如图8-4所示。

::: {.chatu_img}
![Figure-P244_12489.jpg](https://i.imgur.com/y3xT9ij.jpeg){.pic-img-w4 width="1280" height="724"}

图8-4　HC-05模块与Arduino开发板连线图
:::

2\. 相关代码

::: {.chatu_img}
![Figure-P244_16041.jpg](https://i.imgur.com/nAWHiBK.jpeg){.pic-img width="1280" height="742"}
:::

#### 8.2.3　输出模块 {#Sectio0013.xhtml#isbn9787302528234_8_1_2_3 .txtheading1}

本部分包括输出模块的功能介绍及相关代码。

1\. 功能介绍

实现音乐播放功能及亮灯功能。元件包括3个LED、1个DFPlayer Mini、1个扬声器、Arduino开发板和导线若干，电路如图8-5所示。

::: {.chatu_img}
![Figure-P245_12505.jpg](https://i.imgur.com/gS03tPD.jpeg){.pic-img-w3 width="1018" height="599"}

图8-5　输出电路原理图
:::

2\. 相关代码

::: {.chatu_img}
![Figure-P245_16045.jpg](https://i.imgur.com/CfOIN3O.jpeg){.pic-img width="1280" height="627"}
:::

::: {.chatu_img}
![Figure-P246_16047.jpg](https://i.imgur.com/W41dGjP.jpeg){.pic-img width="1280" height="1892"}
:::

::: {.chatu_img}
![Figure-P247_16048.jpg](https://i.imgur.com/yGGOXC7.jpeg){.pic-img width="1280" height="1856"}
:::

::: {.chatu_img}
![Figure-P248_16049.jpg](https://i.imgur.com/MKoUHRJ.jpeg){.pic-img width="1280" height="1891"}
:::

::: {.chatu_img}
![Figure-P249_16050.jpg](https://i.imgur.com/xR81rPL.jpeg){.pic-img width="1280" height="1894"}
:::

::: {.chatu_img}
![Figure-P250_16051.jpg](https://i.imgur.com/veUUo1H.jpeg){.pic-img width="1280" height="1909"}
:::

::: {.chatu_img}
![Figure-P251_12603.jpg](https://i.imgur.com/RHDAUJu.jpeg){.pic-img width="1280" height="306"}
:::

### 8.3　产品展示 {#Sectio0013.xhtml#isbn9787302528234_8_1_3 .txtheading}

整体外观如图8-6所示，右边为输入部分，中间为Arduino开发板，与之相连的有左边的LED、DFPlayer Mini输出部分、右上角的扬声器和上方的HC-05模块。

::: {.chatu_img}
![Figure-P251_12606.jpg](https://i.imgur.com/pC0EyTQ.jpeg){.pic-img-w1 width="886" height="664"}

图8-6　整体外观图
:::

### 8.4　元件清单 {#Sectio0013.xhtml#isbn9787302528234_8_1_4 .txtheading}

完成本项目所用到的元件及数量如表8-2所示。

::: {.chatu_img}
表8-2　元件清单

![Figure-T251_16052.jpg](https://i.imgur.com/TIr36so.jpeg){.pic-img width="1280" height="443"}
:::

------------------------------------------------------------------------

[(1)](#Sectio0013.xhtml#jzyy_1_240){#Sectio0013.xhtml#jz_1_240}　本章根据毕姝畅、江刘月项目设计整理而成。

[]{#Sectio0014.xhtml}

# 第9章　基于温度感应的LED表情控制音乐水杯项目设计[^(1)^](#Sectio0014.xhtml#jz_1_252){#Sectio0014.xhtml#jzyy_1_252 .calibre6} {#Sectio0014.xhtml#isbn9787302528234_9 .chaptertitle}

本项目基于Arduino开发板设计一款通过表情和音乐监控温度的水杯，提醒人们当前温度，并控制水温在所需范围之内。

### 9.1　功能及总体设计 {#Sectio0014.xhtml#isbn9787302528234_9_1_1 .txtheading}

本项目通过显示不同表情和播放不同音乐来实时监控水温，根据点阵模块显示出的不同表情以及音乐判断温度，调出自己想要的水温，起到监控和控制温度的作用。除此之外，本项目也适宜聋哑人和盲人使用。

要实现上述功能需将作品分成三部分进行设计，即温度传感器接收部分、点阵模块显示表情部分和扬声器播放音乐部分。温度传感器接收温度选用了DS18B20温度传感器；点阵模块显示表情选用了MAX7219ENG点阵模块配合Arduino开发板实现；扬声器播放音乐设置不同的频率，利用定时器中断，在程序执行时取出音符代码，查频率表，置入T/C口，取出节拍代码，供定时器使用，以此来完成对音乐节拍长度的控制，再通过扬声器播放乐曲。

1\. 整体框架图

整体框架如图9-1所示。

::: {.chatu_img}
![Figure-P252_12648.jpg](https://i.imgur.com/J4dkaVc.jpeg){.pic-img-w3 width="1010" height="722"}

图9-1　整体框架图
:::

2\. 系统流程图

系统流程如图9-2所示。

::: {.chatu_img}
![Figure-P253_12658.jpg](https://i.imgur.com/nDHzCzV.jpeg){.pic-img-w7 width="1280" height="1093"}

图9-2　系统流程图
:::

温度传感器采集温度后，判断是否达到设定值。在不同的温度区间范围会播放不同的音乐。温度在20\~30℃之间时，LED屏显示"开心"表情，音乐模块播放乐曲《欢乐颂》；温度在30\~40℃之间时，LED屏显示"囧"表情，音乐模块播放乐曲《蓝精灵》；一曲播放完毕，温度传感器继续检测温度，完成下一轮的表情显示和音乐播放。

3\. 总电路图

电路将DS18B20和MAX7219ENG的GND引脚连接到Arduino开发板的GND引脚，DS18B20和MAX7219ENG的VCC引脚连接到Arduino开发板的5V引脚，DS18B20的OUT引脚连接Arduino开发板的数字引脚2，MAX7219ENG的DIN、CS和CLK分别连接到Arduino开发板的数字引脚10、11和12。扬声器的正负极引脚分别连接Arduino开发板的数字引脚8和GND引脚。本项目完成三个功能，其一，DS18B20接收温度信号，显示在串口监视器里；其二，接收温度信号，控制MAX7219ENG；其三，扬声器根据音频原理播放出不同的音乐。总电路如图9-3所示，引脚连接如表9-1所示。

::: {.chatu_img}
![Figure-P254_12664.jpg](https://i.imgur.com/7DBw2oP.jpeg){.pic-img-w9 width="1280" height="1448"}

图9-3　总电路图
:::

::: {.chatu_img}
表9-1　引脚连接表

![Figure-T254_16055.jpg](https://i.imgur.com/iZF0YpF.jpeg){.pic-img width="1280" height="558"}
:::

### 9.2　模块介绍 {#Sectio0014.xhtml#isbn9787302528234_9_1_2 .txtheading}

本项目主要包括DS18B20模块、MAX7219ENG模块和音乐输出模块（扬声器）。下面分别给出各模块的功能介绍及相关代码。

#### 9.2.1　DS18B20模块 {#Sectio0014.xhtml#isbn9787302528234_9_1_2_1 .txtheading1}

本部分包括DS18B20模块的功能介绍及相关代码。

1\. 功能介绍

DS18B20模块收集环境中的温度并将转换成可识别的二进制数码，然后转换成相应的十六进制控制MAX7219ENG模块来显示表情，用相应的频率控制扬声器播放不同的音乐。

DS18B20模块有三个引脚：信号线、VCC和GND，与Arduino开发板和其他单片机连接通信非常方便。DS18B20内部结构主要由四部分组成：64位光刻ROM、温度传感器、非挥发的温度报警触发器TH和TL、配置寄存器。元件包括DS18B20模块、Arduino开发板和导线若干，电路如图9-4所示。

::: {.chatu_img}
![Figure-P255_12779.jpg](https://i.imgur.com/nAOmGjm.jpeg){.pic-img-w5 width="1120" height="1365"}

图9-4　DS18B20模块与Arduino开发板连线图
:::

2\. 相关代码

::: {.chatu_img}
![Figure-P256_16057.jpg](https://i.imgur.com/McJGec5.jpeg){.pic-img width="1280" height="1813"}
:::

::: {.chatu_img}
![Figure-P257_16058.jpg](https://i.imgur.com/H2Hhb7C.jpeg){.pic-img width="1280" height="1445"}
:::

#### 9.2.2　MAX7219ENG模块 {#Sectio0014.xhtml#isbn9787302528234_9_1_2_2 .txtheading1}

本部分包括MAX7219ENG模块的功能介绍及相关代码。

1\. 功能介绍

MAX7219ENG是多位LED显示驱动器，采用3线串行接口传送数据，可直接与Arduino开发板连接，用户能方便修改其内部参数，通过Arduino开发板语言程序控制图案生成以实现多位LED显示。它内含硬件动态扫描电路、BCD译码器、段驱动器和位驱动器，可以直接驱动64段LED点阵显示器。元件包括MAX7219ENG模块、Arduino开发板和导线若干，电路如图9-5所示。

::: {.chatu_img}
![Figure-P258_12826.jpg](https://i.imgur.com/d7qFqBL.jpeg){.pic-img-w3 width="1026" height="1402"}

图9-5　MAX7219ENG与Arduino开发板连线图
:::

2\. 相关代码

下面示例是用DS18B20控制温度，从而控制点阵显示不同图案的代码。

::: {.chatu_img}
![Figure-P258_16059.jpg](https://i.imgur.com/Wyrxoa1.jpeg){.pic-img width="1280" height="621"}
:::

::: {.chatu_img}
![Figure-P259_16060.jpg](https://i.imgur.com/JcqtKZ8.jpeg){.pic-img width="1280" height="1491"}
:::

#### 9.2.3　音乐输出模块 {#Sectio0014.xhtml#isbn9787302528234_9_1_2_3 .txtheading1}

本部分包括音乐输出模块（扬声器）的功能介绍及相关代码。

1\. 功能介绍

主要是通过对扬声器设置不同的频率，利用定时器中断，在程序执行时，取出音符代码，查频率表，置入T/C口，取出节拍代码，供定时器使用，以此来完成对音乐节拍长度的控制，再通过扬声器播放乐曲。元件包括扬声器、Arduino开发板和导线若干，电路如图9-6所示。

::: {.chatu_img}
![Figure-P260_12887.jpg](https://i.imgur.com/zU9IoRn.jpeg){.pic-img-w7 width="1280" height="1072"}

图9-6　扬声器与Arduino开发板连线图
:::

2\. 相关代码

通过传感器来采集温度，以及对扬声器设置不同的频率，利用定时器中断来完成对音乐节拍长度的控制，实现扬声器播放乐曲。

::: {.chatu_img}
![Figure-P260_16061.jpg](https://i.imgur.com/Zd2ay9B.jpeg){.pic-img width="1280" height="719"}
:::

::: {.chatu_img}
![Figure-P261_16063.jpg](https://i.imgur.com/smiNhB8.jpeg){.pic-img width="1280" height="1906"}
:::

::: {.chatu_img}
![Figure-P262_16064.jpg](https://i.imgur.com/iEwmKhl.jpeg){.pic-img width="1280" height="1949"}
:::

::: {.chatu_img}
![Figure-P263_16065.jpg](https://i.imgur.com/OpQICkR.jpeg){.pic-img width="1280" height="1887"}
:::

::: {.chatu_img}
![Figure-P264_16066.jpg](https://i.imgur.com/uyTAmht.jpeg){.pic-img width="1280" height="674"}
:::

### 9.3　产品展示 {#Sectio0014.xhtml#isbn9787302528234_9_1_3 .txtheading}

整体外观如图9-7所示，从左到右依次为Arduino开发板、DS18B20温度传感器、面包板、扬声器、MAX7219ENG点阵模块、点阵显示屏。

::: {.chatu_img}
![Figure-P264_12912.jpg](https://i.imgur.com/gLmxjVm.jpeg){.pic-img-w9 width="1280" height="1065"}

图9-7　整体外观图
:::

### 9.4　元件清单 {#Sectio0014.xhtml#isbn9787302528234_9_1_4 .txtheading}

完成本项目所用到的元件及数量如表9-2所示。

::: {.chatu_img}
表9-2　元件清单

![Figure-T265_16067.jpg](https://i.imgur.com/CCXg8sN.jpeg){.pic-img width="1280" height="375"}
:::

------------------------------------------------------------------------

[(1)](#Sectio0014.xhtml#jzyy_1_252){#Sectio0014.xhtml#jz_1_252}　本章根据靳思梦、唐心怡项目设计整理而成。

[]{#Sectio0015.xhtml}

# 第10章　旋转音乐盒项目设计[^(1)^](#Sectio0015.xhtml#jz_1_266){#Sectio0015.xhtml#jzyy_1_266 .calibre6} {#Sectio0015.xhtml#isbn9787302528234_10 .chaptertitle}

本项目通过Arduino开发板控制舵机旋转，利用人体红外传感器触发LED，跟随音乐节拍闪烁变换。

### 10.1　功能及总体设计 {#Sectio0015.xhtml#isbn9787302528234_10_1_1 .txtheading}

本项目通过电路与电源接通，人体红外传感器检测到有人靠近时，LED3与LED4闪烁，舵机先逆时针旋转180°，放置在舵机上的小玩偶随即旋转，第一首歌通过扬声器传出，LED1跟随着音乐节奏闪烁，第一首歌结束后舵机顺时针旋转180°，播放第二首歌，LED2跟随着音乐节奏闪烁。

要实现上述功能需将作品分成三部分进行设计，即输入部分、处理部分和输出部分。输入部分选用了一个人体红外传感器，固定在支架上；处理部分主要通过C++程序实现；输出部分使用4个炫彩LED、1个舵机和1个蜂鸣器实现。

1\. 整体框架图

整体框架如图10-1所示。

::: {.chatu_img}
![Figure-P266_12954.jpg](https://i.imgur.com/kF1uXLA.jpeg){.pic-img-w1 width="941" height="677"}

图10-1　整体框架图
:::

2\. 系统流程图

系统流程如图10-2所示。

::: {.chatu_img}
![Figure-P267_12964.jpg](https://i.imgur.com/EYQTXh5.jpeg){.pic-img-w6 width="448" height="1620"}

图10-2　系统流程图
:::

当人体红外传感器没有检测到信息输入，即检测范围内没有人运动，则电路不工作。反之，电路开始工作，舵机调整角度到初始位置并开始逆时针旋转180°，LED3和LED4亮，蜂鸣器开始播放第一首歌，LED1跟随音乐节奏闪烁。第一首歌结束之后LED1灭，舵机顺时针旋转180°，蜂鸣器开始播放第二首歌，LED2跟随音乐节奏闪烁。第二首歌结束之后LED2、LED3和LED4灭，一次循环结束，直到人体红外传感器再次检测到信息输入时才进入下一循环。

3\. 总电路图

总电路如图10-3所示，引脚连接如表10-1所示。

::: {.chatu_img}
![Figure-P268_12970.jpg](https://i.imgur.com/t2URmUX.jpeg){.pic-img-w7 width="1280" height="868"}

图10-3　总电路图
:::

::: {.chatu_img}
表10-1　引脚连接表

![Figure-T268_16071.jpg](https://i.imgur.com/z9y3DKQ.jpeg){.pic-img width="1280" height="622"}
:::

### 10.2　模块介绍 {#Sectio0015.xhtml#isbn9787302528234_10_1_2 .txtheading}

本项目主要包括主程序模块、人体红外感应模块和输出模块。下面分别给出各模块的功能介绍及相关代码。

#### 10.2.1　主程序模块 {#Sectio0015.xhtml#isbn9787302528234_10_1_2_1 .txtheading1}

本部分包括主程序模块的功能介绍及相关代码。

1\. 功能介绍

主要是通过人体红外传感器控制舵机旋转，并让扬声器播放音乐，LED跟随音乐有节奏地闪烁，此部分主要由C++代码实现，编译环境为Arduino IDE。

2\. 相关代码

1）音调部分头文件代码

::: {.chatu_img}
![Figure-P269_16073.jpg](https://i.imgur.com/RsdXQ1s.jpeg){.pic-img width="1280" height="1629"}
:::

::: {.chatu_img}
![Figure-P270_16860.jpg](https://i.imgur.com/LbE8fen.jpeg){.pic-img width="1280" height="409"}
:::

2）歌曲部分头文件代码

::: {.chatu_img}
![Figure-P270_16862.jpg](https://i.imgur.com/zmWDoeC.jpeg){.pic-img width="1280" height="1412"}
:::

::: {.chatu_img}
![Figure-P271_16874.jpg](https://i.imgur.com/Hw2fwAa.jpeg){.pic-img width="1280" height="483"}
:::

3）主函数部分

::: {.chatu_img}
![Figure-P271_16875.jpg](https://i.imgur.com/hiky3Yo.jpeg){.pic-img width="1280" height="1329"}
:::

::: {.chatu_img}
![Figure-P272_16076.jpg](https://i.imgur.com/9yKmZxB.jpeg){.pic-img width="1280" height="1929"}
:::

#### 10.2.2　人体红外感应模块 {#Sectio0015.xhtml#isbn9787302528234_10_1_2_2 .txtheading1}

本部分包括人体红外感应模块的功能介绍及相关代码。

1\. 功能介绍

当人体红外传感器检测到有人运动时，控制整个电路开始工作。反之，则不会触发电路。元件包括人体红外感应模块、Arduino开发板和导线若干，电路如图10-4所示。

::: {.chatu_img}
![Figure-P273_13159.jpg](https://i.imgur.com/lf37EER.jpeg){.pic-img-w4 width="1280" height="697"}

图10-4　人体红外感应模块与Arduino开发板连线图
:::

2\. 相关代码

::: {.chatu_img}
![Figure-P273_16077.jpg](https://i.imgur.com/1LVxybg.jpeg){.pic-img width="1280" height="486"}
:::

#### 10.2.3　输出模块 {#Sectio0015.xhtml#isbn9787302528234_10_1_2_3 .txtheading1}

本部分包括输出模块的功能介绍及相关代码。

1\. 功能介绍

通过Arduino开发板控制舵机旋转，蜂鸣器播放音乐，LED跟随音乐节奏闪烁。元件包括1个舵机、1个蜂鸣器、4个LED、4个220Ω电阻、1个面包板、Arduino开发板和导线若干，原理如图10-5所示。

::: {.chatu_img}
![Figure-P274_13169.jpg](https://i.imgur.com/ue4KLIW.jpeg){.pic-img-w4 width="1280" height="820"}

图10-5　输出电路原理图
:::

2\. 相关代码

::: {.chatu_img}
![Figure-P274_16078.jpg](https://i.imgur.com/XKO1RVC.jpeg){.pic-img width="1280" height="880"}
:::

### 10.3　产品展示 {#Sectio0015.xhtml#isbn9787302528234_10_1_3 .txtheading}

产品整体如图10-6所示，产品运行如图10-7所示。

::: {.chatu_img}
![Figure-P275_13188.jpg](https://i.imgur.com/LLldoSo.jpeg){.pic-img-w12 width="651" height="869"}

图10-6　产品整体图
:::

::: {.chatu_img}
![Figure-P275_13192.jpg](https://i.imgur.com/ZxN9ztU.jpeg){.pic-img-w12 width="650" height="867"}

图10-7　产品运行图
:::

### 10.4　元件清单 {#Sectio0015.xhtml#isbn9787302528234_10_1_4 .txtheading}

完成本项目所用到的元件及数量如表10-2所示。

::: {.chatu_img}
表10-2　元件清单

![Figure-T275_16080.jpg](https://i.imgur.com/qVO7JtA.jpeg){.pic-img width="1280" height="441"}
:::

------------------------------------------------------------------------

[(1)](#Sectio0015.xhtml#jzyy_1_266){#Sectio0015.xhtml#jz_1_266}　本章根据温茜雯、来杏杏项目设计整理而成。

[]{#Sectio0016.xhtml}

# 第11章　蓝牙音乐播放器项目设计[^(1)^](#Sectio0016.xhtml#jz_1_276){#Sectio0016.xhtml#jzyy_1_276 .calibre6} {#Sectio0016.xhtml#isbn9787302528234_11 .chaptertitle}

本项目是基于Arduino平台，通过蓝牙模块与音乐播放器进行连接，控制音乐播放器工作。

### 1 1.1　功能及总体设计 {#Sectio0016.xhtml#isbn9787302528234_11_1_1 .txtheading}

本项目通过对TF卡中的文件以及数据进行读取，将可播放的文件通过串口指令控制并播放。

要实现上述功能需将作品分成四部分进行设计，即SD卡模块、HC-06蓝牙模块、LCD1602模块和音频放大电路模块。手机通过蓝牙与Arduino开发板进行连接，以串口通信方式实现控制与交互，对于TF卡中的文件进行读取并且选择和播放音乐。

1\. 整体框架图

整体框架如图11-1所示。

::: {.chatu_img}
![Figure-P276_13230.jpg](https://i.imgur.com/K3zai2X.jpeg){.pic-img-w1 width="942" height="824"}

图11-1　整体框架图
:::

2\. 系统流程图

系统流程如图11-2所示。

::: {.chatu_img}
![Figure-P277_13240.jpg](https://i.imgur.com/JiqpsXQ.jpeg){.pic-img-w1 width="950" height="2003"}

图11-2　系统流程图
:::

播放时，用户可以通过手机或者LCD液晶屏随时查看现在曲目状态，以进行下一步操作。

3\. 总电路图

总电路图如图11-3所示，引脚连接如表11-1所示。

::: {.chatu_img}
![Figure-P278_13246.jpg](https://i.imgur.com/ZkYRfyS.jpeg){.pic-img-w7 width="1280" height="1154"}

图11-3　总电路图
:::

::: {.chatu_img}
表11-1　引脚连接表

![Figure-T278_16083.jpg](https://i.imgur.com/dX5Y0PA.jpeg){.pic-img width="1280" height="748"}
:::

### 1 1.2　模块介绍 {#Sectio0016.xhtml#isbn9787302528234_11_1_2 .txtheading}

本项目主要包括SD卡模块、HC-06模块、LCD1602模块和音频放大电路模块。下面分别给出各模块的功能介绍及相关代码。

#### 11.2.1　SD卡模块 {#Sectio0016.xhtml#isbn9787302528234_11_1_2_1 .txtheading1}

本部分包括SD卡模块的功能介绍及相关代码。

1\. 功能介绍

SD卡是小型的快闪存储器卡，其格式源自SanDisk创造的通用红外遥控系统发射和接收两大部分。应用编/解码专用集成电路芯片来进行控制操作，SD卡是一种基于半导体快闪记忆器的新一代记忆设备，由于体积小、传输速度快、可热插拔等优良的特性，被广泛地应用于便携式设备，例如电子词典、移动电话、数码相机、汽车导航系统等。在SD卡3.0规范中，最大容量可达2TB，读写速度可达104MB/s，在最新的4.10规范中，最大读写速度已提高到312MB/s。元件包括SD卡模块、Arduino开发板和导线若干，电路如图11-4所示。

::: {.chatu_img}
![Figure-P279_13417.jpg](https://i.imgur.com/mgzTCmb.jpeg){.pic-img-w4 width="1280" height="843"}

图11-4　SD卡模块与Arduino开发板连线图
:::

2\. 相关代码

::: {.chatu_img}
![Figure-P279_16085.jpg](https://i.imgur.com/PyspYQY.jpeg){.pic-img width="1280" height="225"}
:::

::: {.chatu_img}
![Figure-P280_16086.jpg](https://i.imgur.com/5a2yV8R.jpeg){.pic-img width="1280" height="1867"}
:::

::: {.chatu_img}
![Figure-P281_16087.jpg](https://i.imgur.com/G0vp6QL.jpeg){.pic-img width="1280" height="1692"}
:::

#### 11.2.2　HC-06模块 {#Sectio0016.xhtml#isbn9787302528234_11_1_2_2 .txtheading1}

本部分包括HC-06模块的功能介绍及相关代码。

1\. 功能介绍

HC-06是常用的蓝牙传输模块，计算机、手机以及其他蓝牙模块建立通信，双方实现数据传输与交互。在本项目中，使用蓝牙模块将手机发送的命令通过串口传输发送到Arduino开发板，从而实现对元件的控制。元件包括HC-06模块、Arduino开发板和导线若干，电路如图11-5所示。

::: {.chatu_img}
![Figure-P282_13446.jpg](https://i.imgur.com/8ZB6jLC.jpeg){.pic-img-w7 width="1280" height="786"}

图11-5　HC-06模块与Arduino开发板连线图
:::

2\. 相关代码

::: {.chatu_img}
![Figure-P282_16088.jpg](https://i.imgur.com/ZqDon7E.jpeg){.pic-img width="1280" height="1151"}
:::

#### 11.2.3　LCD1602模块 {#Sectio0016.xhtml#isbn9787302528234_11_1_2_3 .txtheading1}

本部分包括LCD1602模块的功能介绍及相关代码。

1\. 功能介绍

LCD1602是Arduino开发板设计中常用的显示屏模块，可以通过函数控制屏幕显示、清除内容等功能。而由于要尽量节约引脚，所以在LCD1602控制引脚焊接了一块I^2^C扩展板对其进行控制，使得使用的引脚从16个减少到4个。元件包括带I^2^C转接板的LCD1602模块、Arduino开发板和导线若干，电路如图11-6所示。

::: {.chatu_img}
![Figure-P283_13469.jpg](https://i.imgur.com/mJ9KDdD.jpeg){.pic-img-w7 width="1280" height="891"}

图11-6　LCD1602模块与Arduino开发板连线图
:::

2\. 相关代码

::: {.chatu_img}
![Figure-P283_16090.jpg](https://i.imgur.com/YEUBoqG.jpeg){.pic-img width="1280" height="280"}
:::

::: {.chatu_img}
![Figure-P284_13488.jpg](https://i.imgur.com/GAweDJi.jpeg){.pic-img width="1280" height="1927"}
:::

#### 11.2.4　音频放大电路模块 {#Sectio0016.xhtml#isbn9787302528234_11_1_2_4 .txtheading1}

LM386是一个低电压音频放大器，可用在电池供电的音乐设备，例如收音机、玩具等设备。增益范围为20\~200，不使用外部元件时增益20，通过调整引脚1和引脚8之间的电阻和电容将增益增加到200，LM386具有宽电源电压范围4\~12V。

::: {.chatu_img-float-r-w1}
![Figure-P285_16097.jpg](https://i.imgur.com/wnKpL77.jpeg){.pic-img width="671" height="478"}

图11-7　LM386引脚图
:::

在本项目中声音的大小如果用模拟电压控制易产生失真而且无法使声音变大，需要借用功率放大电路，使声音放大而且还能滤去噪声，引脚图如11-7所示。

引脚1和引脚8：增益控制引脚，内部增益设置为20，但它可以通过在引脚1和引脚8之间使用一个电容器提高到200。用10μF电容获得最高增益为200。通过使用适当的电容，增益可以调整到20\~200的任何值。

引脚2和引脚3：声音信号输入引脚，引脚2连接到GND。引脚3是正输入端。在这个电路中先连接到100kΩ电位器，再连接到电容麦克风正极，电位器作为音量控制旋钮。通过电容消除输入信号的直流分量，只允许音频（交流分量）被送入LM386。

引脚4和引脚6：电源引脚，引脚6是VCC，引脚4是GND，电压5\~12V。

引脚5：输出引脚，得到放大的声音信号。输出信号具有交直流分量，直流分量不能馈给扬声器，所以使用电容去掉直流分量，输入电容也具有相同功能，通过电容和电阻滤波以去除高频和噪声。

引脚7：旁路电容。元件包括10μF电解电容1kΩ和10kΩ电阻、Arduino开发板和导线若干，电路如图11-8所示。

::: {.chatu_img}
![Figure-P285_16101.jpg](https://i.imgur.com/ZBgegvn.jpeg){.pic-img-w4 width="1280" height="724"}

图11-8　音频放大电路模块与Arduino开发板连线图
:::

### 1 1.3　产品展示 {#Sectio0016.xhtml#isbn9787302528234_11_1_3 .txtheading}

手机APP界面如图11-9所示，整体实物如图11-10所示。

::: {.chatu_img}
![Figure-P286_13504.jpg](https://i.imgur.com/J6J5Lww.jpeg){.pic-img-w12 width="650" height="1150"}

图11-9　蓝牙APP界面展示图
:::

::: {.chatu_img}
![Figure-P286_13507.jpg](https://i.imgur.com/yrTevy0.jpeg){.pic-img-w5 width="1123" height="842"}

图11-10　整体实物图
:::

### 1 1.4　元件清单 {#Sectio0016.xhtml#isbn9787302528234_11_1_4 .txtheading}

完成本项目所用到的元件及数量如表11-2所示。

::: {.chatu_img}
表11-2　元件清单

![Figure-T287_16127.jpg](https://i.imgur.com/fGBwJpR.jpeg){.pic-img width="1280" height="567"}
:::

------------------------------------------------------------------------

[(1)](#Sectio0016.xhtml#jzyy_1_276){#Sectio0016.xhtml#jz_1_276}　本章根据王子豪、陈子瑞项目设计整理而成。

[]{#Sectio0017.xhtml}

# 第12章　吉他手套项目设计[^(1)^](#Sectio0017.xhtml#jz_1_288){#Sectio0017.xhtml#jzyy_1_288 .calibre6} {#Sectio0017.xhtml#isbn9787302528234_12 .chaptertitle}

本项目基于Arduino平台设计弹奏吉他的手套，实现没有吉他也能满足弹奏的愿望。

### 12.1　功能及总体设计 {#Sectio0017.xhtml#isbn9787302528234_12_1_1 .txtheading}

本项目利用相应元件模块的组合，实现了音频的播放，极大地节省了空间，同时对于吉他本身的演奏方面尝试做出一些简化，将繁杂的按弦手势改为简单的按键。同时，又保留了吉他弹奏时的拨弦方式，通过手指的弯曲输出一个信号并发出特定的声音。

要实现上述功能需将作品分成三部分进行设计，即输入部分、处理部分和输出部分。输入部分选用了5个弯曲传感器，固定在右手套上，有5个按键开关模块固定在左手套上；处理部分主要通过C++程序实现；输出部分使用SD卡读写模块、LTK5128模块和一个扬声器实现。

1\. 整体框架图

整体框架如图12-1所示。

::: {.chatu_img}
![Figure-P288_13549.jpg](https://i.imgur.com/xjUlLVA.jpeg){.pic-img-w9 width="1280" height="834"}

图12-1　整体框架图
:::

2\. 系统流程图

系统流程如图12-2所示。

::: {.chatu_img}
![Figure-P289_13559.jpg](https://i.imgur.com/dJJKgDt.jpeg){.pic-img-w14 width="524" height="1895"}

图12-2　系统流程图
:::

左手或者右手传递信号给Arduino开发板，读取相应模拟口的数值并与设定的临界数值比较，如果超过则在SD卡里查找对应文件并播放，一段时间后自动停止，一次弹奏结束。

3\. 总电路图

总电路如图12-3所示，引脚连接如表12-1所示。弯曲传感器从下到上1\~5表示右手的5个输入，按键开关1\~5表示左手的5个输入。

::: {.chatu_img}
![Figure-P290_13565.jpg](https://i.imgur.com/qUVFvSL.jpeg){.pic-img-w4 width="1280" height="697"}

图12-3　总电路图
:::

::: {.chatu_img}
表12-1　引脚连接表

![Figure-T290_16131.jpg](https://i.imgur.com/U791gzz.jpeg){.pic-img width="1280" height="775"}
:::

### 12.2　模块介绍 {#Sectio0017.xhtml#isbn9787302528234_12_1_2 .txtheading}

本项目主要包括弯曲传感器模块和输出模块。下面分别给出各模块的功能介绍及相关代码。

#### 12.2.1　弯曲传感器模块 {#Sectio0017.xhtml#isbn9787302528234_12_1_2_1 .txtheading1}

本部分包括弯曲传感器模块的功能介绍及相关代码。

1\. 功能介绍

弯曲传感器也称为柔性传感器，是一种超薄的印制电路，可以集成到力的测量应用中。传感器的弯曲程度能够转换成电阻值的变化，弯曲越大，电阻越高。还可以测量两个表面之间的力，并经久耐用。元件包括5个弯曲传感器模块、5个1kΩ电阻、Arduino开发板和导线若干，电路如图12-4所示。

::: {.chatu_img}
![Figure-P291_13745.jpg](https://i.imgur.com/Q76CAWe.jpeg){.pic-img-w5 width="1143" height="1816"}

图12-4　弯曲传感器模块与Arduino开发板连线图
:::

2\. 相关代码

::: {.chatu_img}
![Figure-P292_16136.jpg](https://i.imgur.com/glkTwmj.jpeg){.pic-img width="1280" height="1472"}
:::

#### 12.2.2　输出模块 {#Sectio0017.xhtml#isbn9787302528234_12_1_2_2 .txtheading1}

本部分包括输出模块的功能介绍及相关代码。

1\. 功能介绍

主要是将弯曲传感器和按键模块的输入，通过Arduino开发板控制音频进行播放。因为扬声器声音较小，所以加了一个数字功放板------LTK5128模块。元件包括LTK5128功放板、扬声器、Arduino开发板和导线若干，电路如图12-5所示。

::: {.chatu_img}
![Figure-P293_13756.jpg](https://i.imgur.com/A2UleaV.jpeg){.pic-img-w4 width="1280" height="1056"}

图12-5　输出电路原理图
:::

2\. 相关代码

::: {.chatu_img}
![Figure-P293_16138.jpg](https://i.imgur.com/DRG8XGT.jpeg){.pic-img width="1280" height="754"}
:::

::: {.chatu_img}
![Figure-P294_16139.jpg](https://i.imgur.com/nIqBnmO.jpeg){.pic-img width="1280" height="1873"}
:::

::: {.chatu_img}
![Figure-P295_16140.jpg](https://i.imgur.com/XLcCL4h.jpeg){.pic-img width="1280" height="1221"}
:::

上述代码需要使用另外的Arduino库文件，同时以此方式做出的音频播放器仅支持afm格式，下载SimpleSDAudio库文件，安装后打开tools文件夹选择需要转换的格式，推荐使用全速单通道模式，把后缀为wav的音乐文件拖进批处理中，转换结束后按任意键退出。转换出的afm格式音乐文件会出现在converted里，这时候音乐文件准备就绪。将上步转换出来的.afm文件复制到SD卡中即可。（附件下载地址http：//hackerspace-ffm.de/wiki/index.php？title=Datei：SimpleSDAudio_V1.03.zip），音频格式转换操作如图12-6所示。

::: {.chatu_img}
![Figure-P295_13779.jpg](https://i.imgur.com/iaZ5zX9.jpeg){.pic-img-w9 width="1280" height="361"}

图12-6　音频格式转换操作
:::

### 12.3　产品展示 {#Sectio0017.xhtml#isbn9787302528234_12_1_3 .txtheading}

产品整体外观如图12-7所示。

::: {.chatu_img}
![Figure-P296_13786.jpg](https://i.imgur.com/UW4F3e8.jpeg){.pic-img-w1 width="946" height="709"}

图12-7　整体外观图
:::

### 12.4　元件清单 {#Sectio0017.xhtml#isbn9787302528234_12_1_4 .txtheading}

完成本项目所用到的元件及数量如表12-2所示。

::: {.chatu_img}
表12-2　元件清单

![Figure-T296_16141.jpg](https://i.imgur.com/AzRVvru.jpeg){.pic-img width="1280" height="463"}
:::

------------------------------------------------------------------------

[(1)](#Sectio0017.xhtml#jzyy_1_288){#Sectio0017.xhtml#jz_1_288}　本章根据宁博玮、张钟方项目设计整理而成。

[]{#Sectio0018.xhtml}

# 第13章　音频文件净化器[^(1)^](#Sectio0018.xhtml#jz_1_297){#Sectio0018.xhtml#jzyy_1_297 .calibre6} {#Sectio0018.xhtml#isbn9787302528234_13 .prefacetitle-c}

本项目基于Arduino开发板，实现音频文件净化器，对音频文件进行降噪处理。

### 13.1　功能及总体设计 {#Sectio0018.xhtml#isbn9787302528234_13_1_1 .txtheading}

本项目采用维纳滤波降噪的方法，对音频文件进行降噪处理。确保输入含噪声的音频文件进行处理后与实际信号的误差在一定值内，最终得到一个基本无噪的输出信号并进行播放。

要实现上述功能需将作品分成三部分进行设计，即输入部分、信号处理部分和输出部分。输入部分为一个SD读卡器模块接入Arduino开发板；处理部分为Arduino开发板进行数据处理；输出部分是通过扬声器进行播放。

1\. 整体框架图

整体框架如图13-1所示。

::: {.chatu_img}
![Figure-P297_13825.jpg](https://i.imgur.com/XkMD7tb.jpeg){.pic-img-w3 width="973" height="511"}

图13-1　整体框架图
:::

2\. 系统流程图

系统流程如图13-2所示。

3\. 总电路图

总电路如图13-3所示，引脚连接如表13-1所示。

::: {.chatu_img}
![Figure-P298_13835.jpg](https://i.imgur.com/ROAnCeN.jpeg){.pic-img-w11 width="320" height="1147"}

图13-2　系统流程图
:::

::: {.chatu_img}
![Figure-P298_13838.jpg](https://i.imgur.com/xWBW1Hl.jpeg){.pic-img-w15 width="1280" height="740"}

图13-3　总电路图
:::

::: {.chatu_img}
表13-1　引脚连接表

![Figure-T299_16145.jpg](https://i.imgur.com/p3znXBS.jpeg){.pic-img width="1280" height="335"}
:::

### 13.2　模块介绍 {#Sectio0018.xhtml#isbn9787302528234_13_1_2 .txtheading}

本项目主要包括SD卡读取模块、数据信号处理模块和输出模块。下面分别给出各模块的功能介绍及相关代码。

#### 13.2.1　SD卡读取模块 {#Sectio0018.xhtml#isbn9787302528234_13_1_2_1 .txtheading1}

本部分包括SD卡读取模块的功能介绍及相关代码。

1\. 功能介绍

将SD卡中的wav文件读取成数据保存到数组中。wav文件格式分析：wav是Microsoft公司开发的一种音频文件格式，它符合RIFF文件格式标准，可以看作是RIFF文件的一个具体实例。wav符合RIFF规范，其基本的组成单元也是chunk。一个wav文件通常有三个chunk以及一个可选chunk，在文件中的排列方式依次是：RIFF chunk、Format chunk、Fact chunk（附加块，可选）、Data chunk。Data块中存放音频的采样数据。每个sample按照采样的时间顺序写入，对于使用多个字节的sample，使用低端模式存放（低位字节存放在低地址，高位字节存放在高地址），对于多声道的sample采用交叉存放的方式。

2\. 相关代码

::: {.chatu_img}
![Figure-P299_16146.jpg](https://i.imgur.com/WbALdj5.jpeg){.pic-img width="1280" height="667"}
:::

::: {.chatu_img}
![Figure-P300_16147.jpg](https://i.imgur.com/rdJjvTA.jpeg){.pic-img width="1280" height="1767"}
:::

#### 13.2.2　数字信号处理模块 {#Sectio0018.xhtml#isbn9787302528234_13_1_2_2 .txtheading1}

本部分包括数字信号处理模块的功能介绍及相关代码。

1\. 功能介绍

对于上一个模块读取的数组进行FFT变化，然后维纳滤波，使得纯净信号与输出带噪的信号的方差最小。最终得到一个处理过的数字信号并存到一个数组中，在SD卡中生成一个wav文件并保存。

2\. 相关代码

::: {.chatu_img}
![Figure-P301_16148.jpg](https://i.imgur.com/C02smqx.jpeg){.pic-img width="1280" height="1654"}
:::

::: {.chatu_img}
![Figure-P302_16149.jpg](https://i.imgur.com/mCQXt7d.jpeg){.pic-img width="1280" height="1870"}
:::

::: {.chatu_img}
![Figure-P303_16150.jpg](https://i.imgur.com/kR1k25z.jpeg){.pic-img width="1280" height="1884"}
:::

::: {.chatu_img}
![Figure-P304_16151.jpg](https://i.imgur.com/PfxMTIS.jpeg){.pic-img width="1280" height="1870"}
:::

::: {.chatu_img}
![Figure-P305_16152.jpg](https://i.imgur.com/2ads7tn.jpeg){.pic-img width="1280" height="1865"}
:::

::: {.chatu_img}
![Figure-P306_16153.jpg](https://i.imgur.com/Ge0j1io.jpeg){.pic-img width="1280" height="1501"}
:::

#### 13.2.3　输出模块 {#Sectio0018.xhtml#isbn9787302528234_13_1_2_3 .txtheading1}

本部分包括输出模块的功能介绍及相关代码。

1\. 功能介绍

将处理后的文件使用TMRpcm库对wav文件进行读取，然后播放音频，实现降噪。

2\. 相关代码

::: {.chatu_img}
![Figure-P306_14040.jpg](https://i.imgur.com/guIYVv2.jpeg){.pic-img width="1280" height="1910"}
:::

::: {.chatu_img}
![Figure-P308_16156.jpg](https://i.imgur.com/6ULvXc8.jpeg){.pic-img width="1280" height="1250"}
:::

### 13.3　产品展示 {#Sectio0018.xhtml#isbn9787302528234_13_1_3 .txtheading}

产品整体外观如图13-4所示。

::: {.chatu_img}
![Figure-P308_14070.jpg](https://i.imgur.com/yOsZUUN.jpeg){.pic-img-w3 width="1028" height="551"}

图13-4　整体外观图
:::

### 13.4　元件清单 {#Sectio0018.xhtml#isbn9787302528234_13_1_4 .txtheading}

完成本项目所用到的元件及数量如表13-2所示。

::: {.chatu_img}
表13-2　元件清单

![Figure-T309_16157.jpg](https://i.imgur.com/VyHrdl7.jpeg){.pic-img width="1280" height="496"}
:::

------------------------------------------------------------------------

[(1)](#Sectio0018.xhtml#jzyy_1_297){#Sectio0018.xhtml#jz_1_297}　本章根据聂凌云、吕铮项目设计整理而成。

[]{#Sectio0019.xhtml}

# 参考文献 {#Sectio0019.xhtml#bib1_1 .prefacetitle-c}

\[1\]　李永华，高英，陈青云．Arduino软硬件协同设计实战指南\[M\]．北京：清华大学出版社，2015．

\[2\]　刘玉田，徐勇进．用Arduino进行创造\[M\]．第2版．北京：清华大学出版社，2014．

\[3\]　赵英杰．完美图解Arduino互动设计入门\[M\]．北京：科学出版社，2014．

\[4\]　Evans M，Noble J，Hochenbaum J.Arduino实战\[M\]．况琪，译．北京：人民邮电出版社，2014．

\[5\]　Boxall J.动手玩转Arduino\[M\]．翁恺，译．北京：人民邮电出版社，2014．

\[6\]　刘培植．数字电路与逻辑设计\[M\]．第2版．北京：北京邮电大学出版社，2013．

\[7\]　Monk S.Arduino编程从零开始\[M\]．刘椮楠，译．北京：科学出版社，2013．

\[8\]　McRoberts M.Arduino从基础到实践\[M\]．杨继志，郭敬，译．北京：电子工业出版社，2013．

\[9\]　黄文恺，伍冯洁，陈虹．Arduino开发实战指南\[M\]．北京：机械工业出版社，2014．

\[10\]　唐文彦．传感器\[M\]．北京：机械工业出版社，2006．

\[11\]　沈金鑫．Arduino与LabVIEW开发实践\[M\]．北京：机械工业出版社．2014．

\[12\]　程晨．Arduino电子设计实战指南\[M\]．北京：机械工业出版社，2013．

\[13\]　沙占友．集成传感器应用\[M\]．北京：中国电力出版社，2005．

\[14\]　李军，李冰海．检测技术及仪表\[M\]．北京：中国轻工业出版社，2008．

\[15\]　宋楠，韩广义．Arduino开发从零开始学------学电子的都玩这个\[M\]．北京：清华大学出版社，2014．

\[16\]　刘敏，刘泽军，宋庆国．基于Arduino的简易亮光报警器的设计与实现\[J\]．电子世界，2012（21）：122-123．
