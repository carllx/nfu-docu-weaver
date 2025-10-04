![978-3-031-21877-4_CoverFigure.jpg](https://i.imgur.com/2rTVNIH.jpeg)

[]{#530263_1_En_BookFrontmatter_OnlinePDF.xhtml}

::: {.frontmatter}
::: {.BookFrontmatter}
::: {.SeriesTitlePage}
[Synthesis Lectures on Digital Circuits & Systems]{.SeriesTitle lang="en"}

::: {.CollaboratorSection .CollaboratorsSeriesEditors}
[Series Editor]{.CollaboratorDesignation}

::: {.Collaborators}
[Mitchell A. Thornton]{.CollaboratorName}

::: {.Affiliation}
::: {.AffiliationText}
Southern Methodist University, Dallas, USA
:::
:::
:::
:::

::: {.SeriesInformationText}
This series includes titles of interest to students, professionals, and researchers in the area of design and analysis of digital circuits and systems. Each Lecture is self-contained and focuses on the background information required to understand the subject matter and practical case studies that illustrate applications. The format of a Lecture is structured such that each will be devoted to a specific topic in digital circuits and systems rather than a larger overview of several topics such as that found in a comprehensive handbook. The Lectures cover both well-established areas as well as newly developed or emerging material in digital circuits and systems design and analysis.
:::
:::

::: {.CopyrightPage .copyright-page}
::: {.CopyrightPageOriginators}
::: {.AuthorGroup}
::: {.Author}
[Steven F. Barrett]{.AuthorName}

::: {#530263_1_En_BookFrontmatter_OnlinePDF.xhtml#Aff2 .Affiliation}
::: {.AffiliationText}
Department of Electrical and Computer Engineering, University of Wyoming, Laramie, WY, USA
:::
:::
:::
:::
:::

::: {.CopyrightPageISSNs}
[ISSN 1932-3166]{.CopyrightPagePrintISSN}[e-ISSN 1932-3174]{.CopyrightPageElectronicISSN}
:::

[Synthesis Lectures on Digital Circuits & Systems]{.SeriesTitle lang="en"}

::: {.CopyrightPageISBNs}
[ ISBN 978-3-031-21876-7]{.CopyrightPagePrintISBN}[e-ISBN 978-3-031-21877-4]{.CopyrightPageElectronicISBN}
:::

::: {.BookDOI}
<https://doi.org/10.1007/978-3-031-21877-4>
:::

::: {.CopyrightLine}
© The Editor(s) (if applicable) and The Author(s), under exclusive license to Springer Nature Switzerland AG 2023
:::

::: {.CopyrightStandardText lang="en"}
This work is subject to copyright. All rights are solely and exclusively licensed by the Publisher, whether the whole or part of the material is concerned, specifically the rights of translation, reprinting, reuse of illustrations, recitation, broadcasting, reproduction on microfilms or in any other physical way, and transmission or information storage and retrieval, electronic adaptation, computer software, or by similar or dissimilar methodology now known or hereafter developed.
:::

::: {.TrademarkQualifierText lang="en"}
The use of general descriptive names, registered names, trademarks, service marks, etc. in this publication does not imply, even in the absence of a specific statement, that such names are exempt from the relevant protective laws and regulations and therefore free for general use.
:::

::: {.ProductLiability lang="en"}
The publisher, the authors, and the editors are safe to assume that the advice and information in this book are believed to be true and accurate at the date of publication. Neither the publisher nor the authors or the editors give a warranty, expressed or implied, with respect to the material contained herein or for any errors or omissions that may have been made. The publisher remains neutral with regard to jurisdictional claims in published maps and institutional affiliations.
:::

::: {.SpringerReferenceLine lang="en"}
This Springer imprint is published by the registered company Springer Nature Switzerland AG

The registered company address is: Gewerbestrasse 11, 6330 Cham, Switzerland
:::
:::

::: {.Preface .preface role="doc-preface"}
::: {.PrefaceTitle lang="en"}
Preface
:::

::: {.PrefaceBody}
This book is about the Arduino microcontroller and the Arduino concept. The visionary Arduino team of Massimo Banzi, David Cuartielles, Tom Igoe, Gianluca Martino, and David Mellis launched a new innovation in microcontroller hardware in 2005, the concept of open-source hardware. Their approach was to openly share details of microcontroller-based hardware design platforms to stimulate the sharing of ideas and promote innovation. This concept has been popular in the software world for many years. In June 2019, Joel Claypool and I met to plan the fourth edition of "Arduino Microcontroller Processing for Everyone!" Our goal has been to provide an accessible book on the rapidly evolving world of Arduino for a wide variety of audiences including students of the fine arts, middle and senior high school students, engineering design students, and practicing scientists and engineers. To make the book even more accessible to better serve our readers, we decided to change our approach and provide a series of smaller volumes. Each volume is written to a specific topic and audience. This book, "Arduino V: AI and Machine Learning", explores Arduino applications in the fascinating and rapidly evolving world of small, local microcontroller-based AI and ML applications. The first three chapters explore the Arduino IDE, the Arduino Nano 33 BLE Sense, and sensor and peripheral interface techniques. In the remaining three chapters, we take a tutorial approach to Artificial Intelligence (AI) and Machine Learning (ML) concepts appropriate for implementation on a microcontroller including: K Nearest Neighbors (KNN), Decision Trees, Fuzzy Logic, Perceptrons, and Artificial Neural Nets (ANN).

::: {#530263_1_En_BookFrontmatter_OnlinePDF.xhtml#Sec1 .section .Section1 .RenderAsSection1}
## Approach of the Book {.Heading}

::: {#530263_1_En_BookFrontmatter_OnlinePDF.xhtml#Par2 .Para}
This book is part of a multi-volume introduction to the Arduino line of processors. The book series also serves as the "fourth edition" of "Arduino Microcontroller Processing for Everyone!" When discussing plans for a fourth edition, Joel Claypool and I (sfb) decided to break the large volume up into a series of smaller volumes to better serve the needs and interests of our readers. I have tried to strike a balance between each volume being independent of one another while holding to a minimum of information contained in other volumes. For completeness and independence, this volume contains tutorial information on getting started, microcontroller interface information, and motor control partially contained in some of the other volumes and related works completed for Morgan and Claypool and Springer Nature. I have identified via chapter footnotes the source of this information contained elsewhere in the series. The book series thus far includes:

::: {.UnorderedList}
-   "Arduino I: Getting Started"

-   "Arduino II: Systems"

-   "Arduino III: Internet of Things"

-   "Arduino IV: DIY Robots---3D Printing, Instrumentation, Control"

-   "Arduino V: AI and Machine Learning"
:::
:::

In this book, "Arduino V: AI and Machine Learning", we concentrate on Artificial Intelligence (AI) and Machine Learning (ML) applications for microcontroller-based systems. In a recent release, the Arduino Team stated "Arduino is on a mission to make machine learning simple enough for everyone to use \[1\]". Those acquainted with AI and ML concepts might counter these concepts are most appropriate for more powerful computing platforms. However, recent developments have allowed certain AI and ML applications to be executed on microcontrollers once they have been trained. There are applications that lend themselves to remote, battery-operated microcontroller-based AI and ML applications \[3\]. In this book, we limit our discussions to AI and ML techniques specifically for microcontrollers. The intent is to introduce the concepts and allow you to practice on low cost, accessible Arduino hardware and software. Hopefully, you will find this book a starting point, an introductory, to this fascinating field. We provide a number of references for further exploration.

::: {#530263_1_En_BookFrontmatter_OnlinePDF.xhtml#Par9 .Para}
Figure [[1](#530263_1_En_BookFrontmatter_OnlinePDF.xhtml#Fig1)]{.InternalRef} illustrates the relationship between Artificial Intelligence, Machine Learning, and Deep Learning. The goal of Artificial Intelligence is for computing machinery to imitate and mimic intelligent human behavior. Some trace the origins of AI back to 1300 BCE \[6\]. We limit our historical review to AI developments within the 20th century and forward. Within the realm of AI, we explore Fuzzy Logic.

![530263_1_En_BookFrontmatter_Fig1_HTML.png](https://i.imgur.com/1qSIwFm.jpeg)
:::

Machine Learning is under the umbrella of Artificial Intelligence. Its goal is to develop algorithms to control a process or categorize objects. The developed algorithm undergoes a learning step where input data is used to confirm or develop desired controller outputs. During the learning process the algorithm adjusts certain weights to improve the performance of the algorithm. Within the realm of ML we explore K Nearest Neighbor (KNN) algorithms, decision trees, perceptrons, and Artificial Neural Networks (ANN). Deep Learning involves the development of algorithms using multi-layer Artificial Neural Networks (ANN).

As in other books in the series, for completeness, we provide prerequisite information in Chap. [[[1]{.RefSource}](#530263_1_En_1_Chapter.xhtml)]{.ExternalRef}. The chapter provides a Quickstart guide to getting started with the Arduino Integrated Development Environment (IDE).

Chapter [[[2]{.RefSource}](#530263_1_En_2_Chapter.xhtml)]{.ExternalRef} introduces the Arduino Nano 33 BLE Sense microcontroller development board. **This is a 3.3 VDC microcontroller.**^[^1]^ The Nano hosts the NINA B306 module which includes a powerful 64 MHz, 32-bit Arm Cortex-M4F Nordic Semiconductor nRF52840 processor with 256 KB of static RAM (SRAM) and 1 MB of flash memory. The module also contains Bluetooth and Zigbee communications, serial communication subsystems (UART, I2C, SPI), direct memory access features, analog-to-digital converters (ADC), and a 128-bit Advanced Encryption Standard (AES) co-processor \[2, 4\].

Onboard the Nano 33 development board is an extensive series of peripherals including a nine axis inertial measurement unit; sensors for barometric pressure, temperature, humidity, proximity, light, and gesture detection; a digital microphone; and a cryptographic co-processor \[2\].

Chapter [[[3]{.RefSource}](#530263_1_En_3_Chapter.xhtml)]{.ExternalRef} introduces the extremely important concept of the operating envelope for a microcontroller. The voltage and current electrical parameters for the Arduino microcontrollers are presented and applied to properly interface input and output devices to the **3.3 VDC** Arduino Nano 33 BLE Sense microcontroller development board. We provide the bare essentials of interfacing to the Nano 33 for the applications discussed in the book.

In Chap. [[[4]{.RefSource}](#530263_1_En_4_Chapter.xhtml)]{.ExternalRef}, following a brief historical review, we explore the Machine Learning concepts of K Nearest Neighbors (KNN) and Decision Tree classification techniques. Within the realm of AI, we explore Fuzzy Logic in Chap. [[[5]{.RefSource}](#530263_1_En_5_Chapter.xhtml)]{.ExternalRef}. In Chap. [[[6]{.RefSource}](#530263_1_En_6_Chapter.xhtml)]{.ExternalRef}, we explore the perceptron and Artificial Neural Networks (ANNs). Deep Learning involves the development of algorithms using multi-layer Artificial Neural Networks (ANN). We conclude Chap. [[[6]{.RefSource}](#530263_1_En_6_Chapter.xhtml)]{.ExternalRef} with a brief introduction to advanced AI and ML deep learning tools and applications.
:::

::: {#530263_1_En_BookFrontmatter_OnlinePDF.xhtml#Sec3 .section .Section1 .RenderAsSection1}
## References {.Heading}

::: {#530263_1_En_BookFrontmatter_OnlinePDF.xhtml#Par24 .Para}
::: {.OrderedList}
1.  ::: {.ItemNumber}
    1\.
    :::

    ::: {.ItemContent}
    Arduino Team, *Get started with machine learning on Arduino*, blog.arduino.cc, October 15, 2019.
    :::

    ::: {.ClearBoth}
     
    :::

2.  ::: {.ItemNumber}
    2\.
    :::

    ::: {.ItemContent}
    *Arduino Nano 33 BLE Sense,* ABX00031, January 5, 2022, [[[www.​arduino.​cc]{.RefSource}](http://www.arduino.cc)]{.ExternalRef}
    :::

    ::: {.ClearBoth}
     
    :::

3.  ::: {.ItemNumber}
    3\.
    :::

    ::: {.ItemContent}
    G. Lawton, *Machine Learning on Microcontrollers Enables AI,* targettech.com, November 17, 2021.
    :::

    ::: {.ClearBoth}
     
    :::

4.  ::: {.ItemNumber}
    4\.
    :::

    ::: {.ItemContent}
    *nRF52840 Advanced multi\--protocol System\--on\--Chip*, nRF52840 Product Brief Version 1.0, Nordic Semiconductor.
    :::

    ::: {.ClearBoth}
     
    :::

5.  ::: {.ItemNumber}
    5\.
    :::

    ::: {.ItemContent}
    J.P. Mueller and L. Massaron, *Artificial Intelligence for Dummies,* John Wiley and Sons, Inc, 2018.
    :::

    ::: {.ClearBoth}
     
    :::

6.  ::: {.ItemNumber}
    6\.
    :::

    ::: {.ItemContent}
    C. Pickover, *Artificial Intelligence an Illustrated History*, Sterling, New York, 2019.
    :::

    ::: {.ClearBoth}
     
    :::
:::
:::
:::
:::

::: {.AuthorName}
[Steven F. Barrett]{.AuthorName}
:::

::: {.PrefaceLocations}
[Laramie, WY, USA]{.PrefaceLocation}
:::

::: {.PrefaceDate}
January 2023
:::
:::

::: {.BookAcknowledgments .acknowledgments role="doc-acknowledgments"}
::: {.BookAcknowledgmentsTitle lang="en"}
Acknowledgments
:::

::: {.BookAcknowledgmentsBody}
A number of people have made this book possible. I would like to thank Massimo Banzi of the Arduino design team for his support and encouragement in writing the first edition of this book: "Arduino Microcontroller: Processing for Everyone!"

I would also like to acknowledge Joel Claypool for his publishing expertise and support to a number of writing projects. His vision and expertise in the publishing world has made this book possible. Joel "retired" in September 2022 after 40 plus years of service to the U.S. Navy and the publishing world. On behalf of the multitude of writers you have provided a chance to become published authors, we thank you! The next adventurous chapter in Joel's life begins with an upcoming hurricane relief effort service trip. I dedicate this book to you my friend.

I would also like to thank Dharaneeswaran Sundaramurthy of Total Service Books Production for his expertise in converting the final draft into a finished product.

Finally, as most importantly, I would like to thank my wife and best friend of many (almost 50) years, Cindy.

Laramie, WY, USA

January 2023
:::

::: {.AuthorName}
[Steven F. Barrett]{.AuthorName}
:::
:::

::: {.Loc .LocWithHeading .contributors}
::: {.Headings}
::: {.Heading}
About the Author
:::
:::

::: {.LocBody}
::: {.AuthorGroup}
::: {.Biography}
::: {#530263_1_En_BookFrontmatter_OnlinePDF.xhtml#FPar1 .FormalPara .FormalParaRenderingStyle1}
::: {.Heading}
Steven F. Barrett
:::

, Ph.D., P.E., received the BS Electronic Engineering Technology from the University of Nebraska at Omaha in 1979, the M.E.E.E. from the University of Idaho at Moscow in 1986, and the Ph.D. from The University of Texas at Austin in 1993. He was formally an active duty faculty member at the United States Air Force Academy, Colorado and is now the Vice Provost of Undergraduate Education at the University of Wyoming and Professor of Electrical and Computer Engineering. He is a member of IEEE (Life Senior) and Tau Beta Pi (chief faculty advisor). His research interests include digital and analog image processing, computer-assisted laser surgery, and embedded controller systems. He is a registered Professional Engineer in Wyoming and Colorado. He co-wrote with Dr. Daniel Pack several textbooks on microcontrollers and embedded systems. In 2004, Barrett was named "Wyoming Professor of the Year" by the Carnegie Foundation for the Advancement of Teaching and in 2008 was the recipient of the National Society of Professional Engineers (NSPE) Professional Engineers in Higher Education, Engineering Education Excellence Award.
:::
:::

::: {.ClearBoth}
 
:::
:::
:::
:::

```{=html}
<aside aria-label="Footnotes" class="FootnoteSection BookFrontmatterFootnoteSection" epub:type="footnotes">
```
::: {.Heading}
Footnotes
:::

::: {.Footnote}
[[1](#530263_1_En_BookFrontmatter_OnlinePDF.xhtml#Fn1_source)]{.FootnoteNumber}

::: {.ClearBoth}
 
:::
:::

```{=html}
</aside>
```
:::
:::

[]{#530263_1_En_1_Chapter.xhtml}

::: {.chapter role="doc-chapter"}
::: {.ChapterContextInformation}
::: {#530263_1_En_1_Chapter.xhtml#Chap1 .ContextInformation}
::: {.ChapterCopyright}
© The Author(s), under exclusive license to Springer Nature Switzerland AG 2023
:::

[S. F. Barrett]{.ContextInformationAuthorEditorNames}[[Arduino V: Machine Learning]{.BookTitle}]{.ContextInformationBookTitles}[[Synthesis Lectures on Digital Circuits & Systems]{.SeriesTitle lang="en"}]{.ContextInformationSeries}[<https://doi.org/10.1007/978-3-031-21877-4_1>]{.ChapterDOI}
:::
:::

`<!--Begin Abstract-->`{=html}

::: {.MainTitleSection}
# 1. Getting Started {.ChapterTitle lang="en"}
:::

::: {.AuthorGroup}
::: {.AuthorNames}
[[Steven F. Barrett]{.AuthorName}^[1](#530263_1_En_1_Chapter.xhtml#Aff3) [[ ]{.ContactIcon}](#530263_1_En_1_Chapter.xhtml#ContactOfAuthor2)^]{.Author}
:::

::: {.Affiliations}
::: {#530263_1_En_1_Chapter.xhtml#Aff3 .Affiliation}
[(1)]{.AffiliationNumber}

::: {.AffiliationText}
Department of Electrical and Computer Engineering, University of Wyoming, Laramie, WY, USA
:::
:::

::: {.ClearBoth}
 
:::
:::

::: {.Contacts}
::: {#530263_1_En_1_Chapter.xhtml#ContactOfAuthor2 .Contact}
::: {.ContactIcon}
 
:::

::: {.ContactAuthorLine}
[Steven F. Barrett]{.AuthorName}
:::

::: {.ContactAdditionalLine}
[Email: ]{.ContactType}<steveb@uwyo.edu>
:::
:::
:::
:::

`<!--End Abstract-->`{=html}

::: {.Fulltext}
::: {#530263_1_En_1_Chapter.xhtml#Par2 .Para}
**Objectives**: After reading this chapter, the reader should be able to do the following:

::: {.UnorderedList}
-   Successfully download and execute a simple program using the Arduino Development Environment; and

-   Describe the key features of the Arduino Development Environment.
:::
:::

::: {#530263_1_En_1_Chapter.xhtml#Sec1 .section .Section1 .RenderAsSection1}
## [1.1 ]{.HeadingNumber}Overview {.Heading}

Welcome to the world of Arduino!^[^2]^ The Arduino concept of open source hardware was developed by the visionary [Arduino team]{#530263_1_En_1_Chapter.xhtml#ITerm1} []{#530263_1_En_1_Chapter.xhtml#ITerm2} of Massimo Banzi, David Cuartilles, Tom Igoe, Gianluca Martino, and David Mellis in Ivrea, Italy. The team's goal was to develop a line of easy--to--use microcontroller hardware and software such that processing power would be readily available to everyone.

In this chapter we provide a brief review of the Arduino Development Environment and Arduino sketch writing. We use a top--down design approach. We begin with the "big picture" of the chapter. We then discuss the [Arduino Development Environment]{#530263_1_En_1_Chapter.xhtml#ITerm3} and how it may be used to quickly develop a program (sketch) for the Arduino Nano 33 BLE Sense.
:::

::: {#530263_1_En_1_Chapter.xhtml#Sec2 .section .Section1 .RenderAsSection1}
## [1.2 ]{.HeadingNumber}The Big Picture {.Heading}

::: {#530263_1_En_1_Chapter.xhtml#Par8 .Para}
Most microcontrollers are programmed with some variant of the C programming language. The C programming language provides a nice balance between the programmer's control of the microcontroller hardware and time efficiency in program (sketch) writing. As an alternative, the Arduino Development Environment (ADE) provides a user--friendly interface to quickly develop a program, transform the program to machine code, and then load the machine code into the Arduino processor in several simple steps as shown in Fig. [[1.1](#530263_1_En_1_Chapter.xhtml#Fig1)]{.InternalRef}.

![530263_1_En_1_Fig1_HTML.png](https://i.imgur.com/Ky15RKg.jpeg)
:::

The first version of the Arduino Development Environment was released in August 2005. It was developed at the Interaction Design Institute in Ivrea, Italy to allow students the ability to quickly put processing power to use in a wide variety of projects. Since that time, updated versions incorporating new features, have been released on a regular basis ([[[www.​arduino.​cc]{.RefSource}](http://www.arduino.cc)]{.ExternalRef}).

At its most fundamental level, the Arduino Development Environment is a user--friendly interface to allow one to quickly write, load, and execute code on a microcontroller. A barebones program need only consist of a setup() and loop() function. The Arduino Development Environment adds the other required pieces such as header files and the main program construct. The ADE is written in Java and has its origins in the Processor programming language and the Wiring Project ([[[www.​arduino.​cc]{.RefSource}](http://www.arduino.cc)]{.ExternalRef}).

The ADE is hosted on a laptop or personal computer (PC). Once the Arduino program, referred to as a sketch, is written; it is verified and uploaded to the Arduino evaluation board.
:::

::: {#530263_1_En_1_Chapter.xhtml#Sec3 .section .Section1 .RenderAsSection1}
## [1.3 ]{.HeadingNumber}Arduino Quickstart {.Heading}

::: {#530263_1_En_1_Chapter.xhtml#Par12 .Para}
To get started using an Arduino--based platform, you [will]{#530263_1_En_1_Chapter.xhtml#ITerm4} need the following hardware and software:

::: {.UnorderedList}
-   Arduino Nano 33 BLE Sense SoC platform,

-   the appropriate interface cable from the host PC or laptop to the Arduino platform (type A to type Micro--B), and

-   the Arduino Integrated Development Environment (IDE) software.
:::
:::

::: {#530263_1_En_1_Chapter.xhtml#Sec4 .section .Section2 .RenderAsSection2}
### [1.3.1 ]{.HeadingNumber}Quick Start Guide {.Heading}

The Arduino Development Environment may be downloaded from the Arduino website's at [[[www.​arduino.​cc]{.RefSource}](http://www.arduino.cc)]{.ExternalRef}. Versions are available for Windows, Mac OS X, and Linux. Provided below is a quick start step--by--step approach to blink an onboard LED.

::: {#530263_1_En_1_Chapter.xhtml#Par17 .Para}
::: {.UnorderedList}
-   Download the Arduino Development Environment from [[[www.​arduino.​cc]{.RefSource}](http://www.arduino.cc)]{.ExternalRef}.

-   Connect the Arduino processing board to the host computer via the Micro--B USB cable.

-   Start the Arduino Development Environment.

-   Under the Tools tab select the type of board **Board** you are using and the **Port** that it is connected to. If the board is not listed, use "Tools" [![530263_1_En_1_Chapter_TeX_IEq1.png](https://i.imgur.com/kGlkNm1.jpeg)]{#530263_1_En_1_Chapter.xhtml#IEq1 .InlineEquation} "Manage Libraries" to access the Library Manager. From the Library Manage find and install the library to support the board. For the Arduino Nano 33 BLE Sense board the library "Arduino Mbed OS Nano Boards" is installed.

-   ::: {#530263_1_En_1_Chapter.xhtml#Par22 .Para}
    Type the following program.
    ![530263_1_En_1_Figa_HTML.png](https://i.imgur.com/QoQLanI.jpeg)
    :::

-   Upload and execute the program by asserting the "Upload" (right arrow) button.

-   The onboard LED should blink at one second intervals.
:::
:::

::: {#530263_1_En_1_Chapter.xhtml#Par25 .Para}
The Arduino Nano 33 BLE Sense is equipped with a Red, Green, and Blue (RGB) LEDs. The following sketch demonstrates how to control each RGB and the Power LED. **Note:** The R, G, B LEDs are asserted active low.

![530263_1_En_1_Figb_HTML.png](https://i.imgur.com/qo7F0lW.jpeg)
:::

::: {#530263_1_En_1_Chapter.xhtml#Par26 .Para}
This sketch employs a function to set the R, G, and B LEDs.

![530263_1_En_1_Figc_HTML.png](https://i.imgur.com/Bt4P8bR.jpeg)

![530263_1_En_1_Figd_HTML.png](https://i.imgur.com/e5GhHG7.jpeg)
:::

With the Arduino Development Environment downloaded and exercised, let's take a closer look at its features.
:::

::: {#530263_1_En_1_Chapter.xhtml#Sec5 .section .Section2 .RenderAsSection2}
### [1.3.2 ]{.HeadingNumber}Arduino Development Environment Overview {.Heading}

::: {#530263_1_En_1_Chapter.xhtml#Par28 .Para}
The Arduino Development [Environment]{#530263_1_En_1_Chapter.xhtml#ITerm5} is illustrated in Fig. [[1.2](#530263_1_En_1_Chapter.xhtml#Fig2)]{.InternalRef}. The ADE contains a text editor, a message area for displaying status, a text console, a tool bar of common functions, and an extensive menuing system. The ADE also provides a user--friendly interface to the Arduino processor board which allows for a quick upload of code. This is possible because the Arduino processing boards are equipped with a bootloader program.

![530263_1_En_1_Fig2_HTML.png](https://i.imgur.com/EfVc9KK.jpeg)
:::
:::

::: {#530263_1_En_1_Chapter.xhtml#Sec6 .section .Section2 .RenderAsSection2}
### [1.3.3 ]{.HeadingNumber}Sketchbook Concept {.Heading}

In keeping with a hardware and [software]{#530263_1_En_1_Chapter.xhtml#ITerm6} platform for students of the arts, the Arduino environment employs the concept of a sketchbook. An artist maintains their works in progress in a sketchbook. Similarly, programs are maintained within a sketchbook in the Arduino environment. Furthermore, we refer to individual programs [as]{#530263_1_En_1_Chapter.xhtml#ITerm7} sketches. An individual sketch within the sketchbook may be accessed via the Sketchbook entry under the file tab.
:::

::: {#530263_1_En_1_Chapter.xhtml#Sec7 .section .Section2 .RenderAsSection2}
### [1.3.4 ]{.HeadingNumber}Arduino Software, Libraries, and Language References {.Heading}

::: {#530263_1_En_1_Chapter.xhtml#Par30 .Para}
The Arduino Development Environment has a number of built--in features. Some of the features may be directly accessed via the Arduino Development Environment drop down toolbar illustrated in Fig. [[1.2](#530263_1_En_1_Chapter.xhtml#Fig2)]{.InternalRef}. Provided in Fig. [[1.3](#530263_1_En_1_Chapter.xhtml#Fig3)]{.InternalRef} is a handy reference to show the available features. The toolbar provides a wide variety of features to compose, compile, load and execute a sketch.

![530263_1_En_1_Fig3_HTML.png](https://i.imgur.com/4bboVk2.jpeg)
:::
:::

::: {#530263_1_En_1_Chapter.xhtml#Sec8 .section .Section2 .RenderAsSection2}
### [1.3.5 ]{.HeadingNumber}Writing an Arduino Sketch {.Heading}

::: {#530263_1_En_1_Chapter.xhtml#Par31 .Para}
The basic format of the Arduino sketch consists of a "setup" and a "loop" function. The setup function is executed once at the beginning of the program. It is used to configure pins, declare variables and constants, etc. The loop function will execute sequentially step--by--step. When the end of the loop function is reached it will automatically return to the first step of the loop function and execute again. This goes on continuously until the program is stopped.

![530263_1_En_1_Fige_HTML.png](https://i.imgur.com/kO6dJL0.jpeg)
:::

::: {#530263_1_En_1_Chapter.xhtml#Par32 .Para}
**Example:** Let's revisit the sketch provided earlier in the chapter.

![530263_1_En_1_Figf_HTML.png](https://i.imgur.com/DJmnBPe.jpeg)
:::

In the first line the \#define statement links the designator "LED_PIN" to pin 13 on the Arduino processor board. In the setup function, LED_PIN is designated as an output pin. Recall the setup function is only executed once. The program then enters the loop function that is executed sequentially step--by--step and continuously repeated. In this example, the LED_PIN is first set to logic high to illuminate the LED onboard the Arduino processing board. A 500 ms delay then occurs. The LED_PIN is then set low. A 500 ms delay then occurs. The sequence then repeats.

::: {#530263_1_En_1_Chapter.xhtml#Par34 .Para}
Even the most complicated sketches follow the basic format of the setup function followed by the loop function. To aid in the development of more complicated sketches, the Arduino Development Environment has many built--in features that may be divided into the areas of structure, variables and functions. The structure and variable features follow rules similar to the C programming language. The built--in functions consists of a set of pre--defined activities useful to the programmer. These built--in functions are summarized in Fig. [[1.4](#530263_1_En_1_Chapter.xhtml#Fig4)]{.InternalRef}.

![530263_1_En_1_Fig4_HTML.png](https://i.imgur.com/rHTRgHH.jpeg)
:::

::: {#530263_1_En_1_Chapter.xhtml#Par35 .Para}
There are many program examples available to allow the user to quickly construct a sketch. These programs are summarized in Fig. [[1.5](#530263_1_En_1_Chapter.xhtml#Fig5)]{.InternalRef}. Complete documentation for these programs is available at the Arduino homepage ([[[www.​arduino.​cc]{.RefSource}](http://www.arduino.cc)]{.ExternalRef}). This documentation is easily accessible via the Help tab on the Arduino Development Environment toolbar. This documentation will not be repeated here. With the Arduino open source concept, users throughout the world are constantly adding new built--in features. As new features are added, they are released in future Arduino Development Environment versions. As an Arduino user, you too may add to this collection of useful tools. Throughout the remainder of the book we use both the Arduino Development Environment to program the Arduino Nano 33 BLE Sense. In the next chapter we get acquainted with the features of the Nano 33.

![530263_1_En_1_Fig5_HTML.png](https://i.imgur.com/BswHlh1.jpeg)
:::
:::
:::

::: {#530263_1_En_1_Chapter.xhtml#Sec9 .section .Section1 .RenderAsSection1}
## [1.4 ]{.HeadingNumber}Application: LED Strip {.Heading}

::: {#530263_1_En_1_Chapter.xhtml#Par36 .Para}
**Example:** LED [strips]{#530263_1_En_1_Chapter.xhtml#ITerm8} may be used for motivational (fun) optical displays, games, or for instrumentation--based applications. In this example we control an LPD8806--based LED strip using the Arduino Nano 33 BLE sense. We use a three meter, 96 RGB LED strip available from Adafruit (\#306) for approximately \$30 USD per meter ([[[www.​adafruit.​com]{.RefSource}](http://www.adafruit.com)]{.ExternalRef}).

![530263_1_En_1_Fig6_HTML.png](https://i.imgur.com/uL1nx2y.jpeg)
:::

The red, blue, and green component of each RGB LED is independently set using an eight--bit code. The most significant bit (MSB) is logic one followed by seven bits to set the LED intensity (0 to 127). The component values are sequentially shifted out of the Arduino 33 BLE Sense using the Serial Peripheral Interface (SPI) features as shown in Fig. [[1.6](#530263_1_En_1_Chapter.xhtml#Fig6)]{.InternalRef}a. We discuss the SPI subsystem in the next chapter.

The first component value shifted out corresponds to the LED nearest the microcontroller. Each shifted component value is latched to the corresponding R, G, and B component of the LED. As a new component value is received, the previous value is latched and held constant. An extra byte is required to latch the final parameter value. A zero byte [![](www.adafruit.com)]{#530263_1_En_1_Chapter.xhtml#IEq2 .InlineEquation} is used to complete the data sequence and reset back to the first LED ([[[www.​adafruit.​com]{.RefSource}](http://www.adafruit.com)]{.ExternalRef}).

Only four connections are required between the Nano 33 and the LED strip as shown in Fig. [[1.6](#530263_1_En_1_Chapter.xhtml#Fig6)]{.InternalRef}. The connections are color coded: red--power, black--ground, yellow--data, and green--clock. It is important to note the LED strip requires a supply of 3.3 VDC and a current rating of 2 amps per meter of LED strip.

::: {#530263_1_En_1_Chapter.xhtml#Par40 .Para}
In this example each RGB component is sent separately to the strip. The example illustrates how each variable in the program controls a specific aspect of the LED strip. Here are some important implementation notes:

::: {.UnorderedList}
-   SPI must be configured for most significant bit (MSB) first.

-   LED brightness is seven bits. Most significant bit (MSB) must be set to logic one.

-   Each LED requires a separate R--G--B intensity component. The order of data is G--R--B.

-   After sending data for all LEDs. A byte of (0x00) must be sent to return the strip to the first LED.

-   Data stream for each LED is: 1--G6--G5--G4--G3--G2--G1--G0--1--R6--R5--R4--R3--R2--R1--R0--1--B6--B5--B4--B3--B2--B1--B0
:::

![530263_1_En_1_Figg_HTML.png](https://i.imgur.com/fKCqsqs.jpeg)

![530263_1_En_1_Figh_HTML.png](https://i.imgur.com/N4vvBgX.jpeg)

![530263_1_En_1_Figi_HTML.png](https://i.imgur.com/6cLrf1L.jpeg)
:::
:::

::: {#530263_1_En_1_Chapter.xhtml#Sec10 .section .Section1 .RenderAsSection1}
## [1.5 ]{.HeadingNumber}Summary {.Heading}

The goal of this chapter is to provide an introduction and tutorial on the Arduino IDE. We used a top--down design approach. We began with the "big picture" of the chapter followed by an overview of the Arduino Development Environment.
:::

::: {#530263_1_En_1_Chapter.xhtml#Sec11 .section .Section1 .RenderAsSection1}
## [1.6 ]{.HeadingNumber}Problems {.Heading}

::: {#530263_1_En_1_Chapter.xhtml#Par47 .Para}
::: {.OrderedList}
1.  ::: {.ItemNumber}
    1\.
    :::

    ::: {.ItemContent}
    Describe the steps in writing a sketch and executing it on an Arduino processing board.
    :::

    ::: {.ClearBoth}
     
    :::

2.  ::: {.ItemNumber}
    2\.
    :::

    ::: {.ItemContent}
    What is the serial monitor feature used for in the Arduino Development Environment?
    :::

    ::: {.ClearBoth}
     
    :::

3.  ::: {.ItemNumber}
    3\.
    :::

    ::: {.ItemContent}
    Describe what variables are required and returned and the basic function of the following built--in Arduino functions: Blink, Analog Input.
    :::

    ::: {.ClearBoth}
     
    :::

4.  ::: {.ItemNumber}
    4\.
    :::

    ::: {.ItemContent}
    What is meant by the term open source?
    :::

    ::: {.ClearBoth}
     
    :::

5.  ::: {.ItemNumber}
    5\.
    :::

    ::: {.ItemContent}
    The RGB LEDs onboard the Nano 33 BLE are active low. What does this mean?
    :::

    ::: {.ClearBoth}
     
    :::

6.  ::: {.ItemNumber}
    6\.
    :::

    ::: {.ItemContent}
    Be creative! Modify the sketch controlling the strip LEDs to generate a different pattern. Have fun!
    :::

    ::: {.ClearBoth}
     
    :::
:::
:::
:::

```{=html}
<aside aria-labelledby="Bib1Heading" class="Bibliography" id="Bib1">
```
::: {.bibliography role="doc-bibliography"}
::: {#530263_1_En_1_Chapter.xhtml#Bib1Heading .Heading}
References
:::

1.  ::: {.CitationNumber}
    1\.
    :::

    ::: {#530263_1_En_1_Chapter.xhtml#CR1 .CitationContent}
    Arduino homepage, [[[www.​arduino.​cc]{.RefSource}](http://www.arduino.cc)]{.ExternalRef}
    :::

2.  ::: {.CitationNumber}
    2\.
    :::

    ::: {#530263_1_En_1_Chapter.xhtml#CR2 .CitationContent}
    *Arduino Nano 33 BLE Sense,* ABX00031, January 5, 2022. [[[www.​arduino.​cc]{.RefSource}](http://www.arduino.cc)]{.ExternalRef}
    :::
:::

```{=html}
</aside>
```
```{=html}
<aside aria-label="Footnotes" class="FootnoteSection" epub:type="footnotes">
```
::: {.Heading}
Footnotes
:::

::: {.Footnote}
[[1](#530263_1_En_1_Chapter.xhtml#Fn1_source)]{.FootnoteNumber}

::: {.ClearBoth}
 
:::
:::

```{=html}
</aside>
```
:::
:::

[]{#530263_1_En_2_Chapter.xhtml}

::: {.chapter role="doc-chapter"}
::: {.ChapterContextInformation}
::: {#530263_1_En_2_Chapter.xhtml#Chap2 .ContextInformation}
::: {.ChapterCopyright}
© The Author(s), under exclusive license to Springer Nature Switzerland AG 2023
:::

[S. F. Barrett]{.ContextInformationAuthorEditorNames}[[Arduino V: Machine Learning]{.BookTitle}]{.ContextInformationBookTitles}[[Synthesis Lectures on Digital Circuits & Systems]{.SeriesTitle lang="en"}]{.ContextInformationSeries}[<https://doi.org/10.1007/978-3-031-21877-4_2>]{.ChapterDOI}
:::
:::

`<!--Begin Abstract-->`{=html}

::: {.MainTitleSection}
# 2. Arduino Nano 33 BLE Sense {.ChapterTitle lang="en"}
:::

::: {.AuthorGroup}
::: {.AuthorNames}
[[Steven F. Barrett]{.AuthorName}^[1](#530263_1_En_2_Chapter.xhtml#Aff3) [[ ]{.ContactIcon}](#530263_1_En_2_Chapter.xhtml#ContactOfAuthor2)^]{.Author}
:::

::: {.Affiliations}
::: {#530263_1_En_2_Chapter.xhtml#Aff3 .Affiliation}
[(1)]{.AffiliationNumber}

::: {.AffiliationText}
Department of Electrical and Computer Engineering, University of Wyoming, Laramie, WY, USA
:::
:::

::: {.ClearBoth}
 
:::
:::

::: {.Contacts}
::: {#530263_1_En_2_Chapter.xhtml#ContactOfAuthor2 .Contact}
::: {.ContactIcon}
 
:::

::: {.ContactAuthorLine}
[Steven F. Barrett]{.AuthorName}
:::

::: {.ContactAdditionalLine}
[Email: ]{.ContactType}<steveb@uwyo.edu>
:::
:::
:::
:::

`<!--End Abstract-->`{=html}

::: {.Fulltext}
::: {#530263_1_En_2_Chapter.xhtml#Par7 .Para}
**Objectives:** After reading this chapter, the reader should be able to do the following:

::: {.UnorderedList}
-   Name and describe the different subsystem peripherals onboard the Nordic Semiconductor nRF52840 processor;

-   Name and describe the different features aboard the Arduino Nano 33 BLE Sense board;

-   In your own words describe the background theory of operation for subsystems onboard the nRF52840 processor and Arduino Nano 33 BLE Sense board; and

-   Use the Arduino IDE to program and execute sketches for subsystems onboard the nRF52840 processor and Arduino Nano 33 BLE Sense board.
:::
:::

::: {#530263_1_En_2_Chapter.xhtml#Sec2 .section .Section1 .RenderAsSection1}
## [2.1 ]{.HeadingNumber}Overview {.Heading}

In this chapter we explore the Arduino Nano 33 BLE Sense SoC board and its nRF52840 processor. We begin with an overview of the Arduino Nano 33 BLE Sense SoC board features. We then examine the powerful and well--equipped nRF52840 [processor]{#530263_1_En_2_Chapter.xhtml#ITerm1} and its associated peripheral subsystems. We then investigate the multiple peripherals onboard the [Nano 33 BLE Sense]{#530263_1_En_2_Chapter.xhtml#ITerm2} SoC board. For all peripherals we provide a brief theory of operation, feature overview, and examples. We conclude the chapter with an extended example featuring a Bluetooth BLE application--a greenhouse monitoring system.^[^3]^
:::

::: {#530263_1_En_2_Chapter.xhtml#Sec3 .section .Section1 .RenderAsSection1}
## [2.2 ]{.HeadingNumber}Arduino Nano 33 BLE Sense SoC Board {.Heading}

::: {#530263_1_En_2_Chapter.xhtml#Par14 .Para}
The Arduino Nano 33 BLE Sense SoC board is illustrated in Fig. [[2.1](#530263_1_En_2_Chapter.xhtml#Fig1)]{.InternalRef}. **The Nano 33 is a 3.3 VDC processor.** Working clockwise from the left, the board is equipped with a Micro--B USB connector to allow programming the processor from a host personal computer (PC) or laptop.

![530263_1_En_2_Fig1_HTML.png](https://i.imgur.com/iPxtUI7.jpeg)
:::

The board is equipped with a series of LEDs including the Power LED (L2), the Red, Green, Blue (RGB) LEDs (DL3), and the Built--In LED (L1). As we experienced in Chap. [[[1]{.RefSource}](#530263_1_En_1_Chapter.xhtml)]{.ExternalRef}, these LEDs are accessible via designated pins.

::: {#530263_1_En_2_Chapter.xhtml#Par16 .Para}
The Arduino Nano 33 BLE Sense SoC board is equipped with a rich complement of sensors including the (ABX00031):

::: {.UnorderedList}
-   Nine axis inertial measurement unit (IMU) (LSM9DS1),

-   Barometer and temperature sensor (LPS22HB),

-   Relative humidity sensor (HTS221),

-   Digital proximity, ambient light, RGB, and gesture sensor (APDS--9960),

-   Digital microphone (MP34DT05),

-   Crypto Chip (ATEC608A), and the

-   DC--DC converter (MPM3610).
:::
:::

Onboard the Nano 33 board is the NINA B306 Module. It contains the Nordic Semiconductor nRF52840 processor. This is a 32--bit processor, operating at 64 MHz, with an ARM Cortex--M4F architecture equipped with a floating point unit (FPU). The processor is equipped with 1 MB of flash memory and 256 kB of Random Access Memory (RAM) (nRF52840).

The Nano 33 BLE provides a tremendous amount of computing power in a very small footprint. The processing power coupled with its peripherals and sensor package provides a microcontroller ideally suited for AI and ML applications.

::: {#530263_1_En_2_Chapter.xhtml#Par26 .Para}
The B306 module is also equipped with a large complement of resident peripherals including (ABX00031):

::: {.UnorderedList}
-   Serial communication subsystems including Universal Serial Bus (USB), Universal Asynchronous Receiver Transmitter (UART), Serial Peripheral Interface (SPI), Quad SPI (QSPI), Two Wire Interface (TWI).

-   A 12--bit resolution, 200 ksps (kilo samples per second) analog--to--digital converter (ADC),

-   A 128 bit Advanced Encryption Standard (AES) co--processor,

-   Bluetooth and Zigbee radio,

-   Near Field Communication (NFC) features,

-   Direct Memory Access (DMA) capability,

-   An ARM CC310 Crytocell cryptographic accelerator, and

-   Pulse Width Modulation (PWM) channels.
:::
:::

::: {#530263_1_En_2_Chapter.xhtml#Par35 .Para}
Access to these subsystems are via the Arduino Nano 33 BLE Sense SoC board pins as shown in Fig. [[2.2](#530263_1_En_2_Chapter.xhtml#Fig2)]{.InternalRef}.

![530263_1_En_2_Fig2_HTML.png](https://i.imgur.com/CSnAGdt.jpeg)
:::
:::

::: {#530263_1_En_2_Chapter.xhtml#Sec4 .section .Section1 .RenderAsSection1}
## [2.3 ]{.HeadingNumber}Arduino Nano 33 BLE Sense Features {.Heading}

::: {#530263_1_En_2_Chapter.xhtml#Par36 .Para}
With the brief overview of the Arduino Nano 33 BLE Sense board complete, we take an in--depth look at selected features and subsystems. As described in the previous section, we partition features related to the NINA B306 Module from the Arduino Nano 33 BLE Sense as shown in Fig. [[2.3](#530263_1_En_2_Chapter.xhtml#Fig3)]{.InternalRef}. We begin with an exploration of NINA B306 Module subsystems followed by Arduino Nano 33 BLE Sense subsystems. For each subsystem we provide related technical information and examples where appropriate.

![530263_1_En_2_Fig3_HTML.png](https://i.imgur.com/k1KQG4Y.jpeg)
:::
:::

::: {#530263_1_En_2_Chapter.xhtml#Sec5 .section .Section1 .RenderAsSection1}
## [2.4 ]{.HeadingNumber}NINA B306 Module Subsystems {.Heading}

::: {#530263_1_En_2_Chapter.xhtml#Par37 .Para}
In this section we explore the [peripherals]{#530263_1_En_2_Chapter.xhtml#ITerm3} contained within the NINA B306 Module. The B306 is equipped with the Nordic Semiconductor nRF52840 processor. This is a 32--bit processor, operating at 64 MHz, with an ARM Cortex--M4F architecture equipped with a floating point unit (FPU). In addition, it is equipped with specialized instructions to aid in efficient AI and ML program execution including (nRF52840):

::: {.UnorderedList}
-   Digital Signal Processing (DSP) instruction set,

-   Direct Memory Access (DMA) for efficient CPU and peripheral access to memory,

-   Hardware based arithmetic divider to accelerate this operation, and

-   Multiple and accumulate (MAC) instructions requiring a single clock cycle for execution.
:::
:::

The 32--bit processor architecture allows a wide range of integer and floating point (real number) processing capability. The processor is equipped with a floating point unit to enhance processing. The processor's 48 MHz clock speed provides enhanced capability over other Arduino products. For example, the very capable Arduino UNO R3 processor hosting the Microchip ATmega328 operates at 16 MHz.

::: {#530263_1_En_2_Chapter.xhtml#Sec6 .section .Section2 .RenderAsSection2}
### [2.4.1 ]{.HeadingNumber}B306 Module Memory {.Heading}

The B306 is equipped with two main memory sections: flash electrically erasable programmable read only memory (EEPROM) and static random access memory (SRAM). The processor is equipped with 1 MB (megabyte) of flash memory and 256 KB (kilobyte) of Random Access Memory (RAM) (nRF52840). We discuss each memory component in turn.

::: {#530263_1_En_2_Chapter.xhtml#Sec7 .section .Section3 .RenderAsSection3}
#### [2.4.1.1 ]{.HeadingNumber}B306 Programmable Flash EEPROM {.Heading}

Bulk [programmable]{#530263_1_En_2_Chapter.xhtml#ITerm4} flash EEPROM is used to store programs. It can be erased and programmed as a single unit. Also, should a program require a large table of constants, it may be included as a global variable within a program and programmed into flash EEPROM with the rest of the program. Flash EEPROM is nonvolatile meaning memory contents are retained even when microcontroller power is lost. The B306 is equipped with 1 MB bytes of onboard reprogrammable flash memory.
:::

::: {#530263_1_En_2_Chapter.xhtml#Sec8 .section .Section3 .RenderAsSection3}
#### [2.4.1.2 ]{.HeadingNumber}B306 Static Random Access Memory (SRAM) {.Heading}

Static RAM memory [is]{#530263_1_En_2_Chapter.xhtml#ITerm5} volatile. That is, if the microcontroller loses power, the contents of [SRAM]{#530263_1_En_2_Chapter.xhtml#ITerm6} memory are lost. It can be written to and read from during program execution. The B306 is equipped with 256 KB of SRAM. A small portion of the SRAM is set aside for the general--purpose registers used by the processor and also for the input/output and peripheral subsystems aboard the microcontroller. During program execution, RAM is used to store program instructions, global variables, support dynamic memory allocation of variables, and to provide a location for the stack. The large SRAM component is especially useful in certain AI and ML applications.
:::
:::
:::

::: {#530263_1_En_2_Chapter.xhtml#Sec9 .section .Section1 .RenderAsSection1}
## [2.5 ]{.HeadingNumber}NINA B306 Module Peripherals {.Heading}

In this section, we provide a brief overview of the internal peripherals of the B306 module. It should be emphasized that these features are the internal systems contained within the confines of the microcontroller chip. These built--in peripherals allow complex and sophisticated tasks to be accomplished by the microcontroller.

::: {#530263_1_En_2_Chapter.xhtml#Sec10 .section .Section2 .RenderAsSection2}
### [2.5.1 ]{.HeadingNumber}Pulse Width Modulation (PWM) Channels {.Heading}

The Nano 33 BLE Sense is equipped with five pulse width modulation (PWM) channels. PWM output can be provided on digital pins 1--13 and analog pins A0--A7. We limit use to pins 21, 23, 24, 27, and 28 as shown in the pinout diagram at Fig. [[2.2](#530263_1_En_2_Chapter.xhtml#Fig2)]{.InternalRef}. The Nano 33 BLE sense baseline frequency of the PWM signal is set at 500 Hz.

::: {#530263_1_En_2_Chapter.xhtml#Par48 .Para}
A pulse width modulated or PWM signal [is]{#530263_1_En_2_Chapter.xhtml#ITerm7} characterized by a fixed frequency and a varying duty cycle. [Duty cycle]{#530263_1_En_2_Chapter.xhtml#ITerm8} is the percentage of time a repetitive signal is logic high during the signal period. It may be formally expressed as:

::: {#530263_1_En_2_Chapter.xhtml#Equ1 .Equation}
::: {.EquationWrapper}
::: {.EquationContent}
::: {.MediaObject}
![530263_1_En_2_Chapter_TeX_Equ1.png](https://i.imgur.com/WepDlGc.jpeg)
:::
:::
:::
:::

To generate a PWM signal within the Arduino IDE, the AnalogWrite() function is used. The function is called with the desired PWM output pin (pin) and the desired PWM duty cycle value. The duty cycle value is specified in the range of 0% (0) to 100% (255).

![530263_1_En_2_Figa_HTML.png](https://i.imgur.com/qLwD2Xy.jpeg)
:::

::: {#530263_1_En_2_Chapter.xhtml#Par49 .Para}
**Example:** In this example the intensity of an LED, connected to Nano 33 BLE Sense pin 21 (digital D3), is slowly increased and then decreased using PWM techniques. Note the use of a 220 Ohm resistor in series with the LED. We discuss interface techniques in Chap. [[[3]{.RefSource}](#530263_1_En_3_Chapter.xhtml)]{.ExternalRef}.

![530263_1_En_2_Figb_HTML.png](https://i.imgur.com/TDJn0dr.jpeg)
:::

PWM signals are used in a wide variety of applications including controlling the position of a servo motor and controlling the speed of a DC motor. We explore these applications in the next chapter.
:::

::: {#530263_1_En_2_Chapter.xhtml#Sec11 .section .Section2 .RenderAsSection2}
### [2.5.2 ]{.HeadingNumber}Serial Communications {.Heading}

The Arduino Nano 33 BLE Sense is equipped with a variety of different serial communication [subsystems]{#530263_1_En_2_Chapter.xhtml#ITerm9} including the Universal Synchronous and Asynchronous Serial Receiver and Transmitter (USART), the serial peripheral interface (SPI), and the Two--wire Serial Interface (TWI). What these systems have in common is the serial transmission of data. In a serial communications transmission, serial data is sent a single bit at a time from transmitter to receiver. The serial communication subsystems are typically used to add and communicate with additional peripheral devices.

::: {#530263_1_En_2_Chapter.xhtml#Sec12 .section .Section3 .RenderAsSection3}
#### [2.5.2.1 ]{.HeadingNumber}USART {.Heading}

The serial [USART]{#530263_1_En_2_Chapter.xhtml#ITerm10} may be used for full duplex (two way) communication between a receiver and transmitter. This is accomplished by equipping the Nano 33 with independent hardware for the transmitter and receiver. The USART is typically used for asynchronous communication. That is, there is not a common clock between the transmitter and receiver to keep them synchronized with one another. To maintain synchronization between the transmitter and receiver, framing start and stop bits are used at the beginning and end of each data byte in a transmission sequence.

The Nano 33 USART is quite flexible. It has the capability to be set to different data transmission rates known as the Baud (bits per second) rate. The USART may also be set for several data bit widths and different BAUD rates. Furthermore, it is equipped with a hardware generated parity bit (even or odd) and parity check hardware at the receiver. A single parity bit allows for the detection of a single bit error within a byte of data.

**Example:** In this example we equip the Nano 33 with a liquid crystal display (LCD). An LCD is an output device to display text [information]{#530263_1_En_2_Chapter.xhtml#ITerm11} as shown in Fig. [[2.5](#530263_1_En_2_Chapter.xhtml#Fig5)]{.InternalRef}. LCDs come in a wide variety of configurations including multi--character, multi--line format. A 16 x 2 LCD format is common. That is, it has the capability of displaying two lines of 16 characters each.

Characters are sent to the LCD via the American Standard Code for Information Interchange (ASCII) format a single character or control command at a time. ASCII is [a]{#530263_1_En_2_Chapter.xhtml#ITerm12} standardized, seven bit method of encoding alphanumeric data. It has been in use for many decades, so some of the characters and actions listed in the ASCII table are not in common use today. However, ASCII is still the most common method of encoding alphanumeric data. The ASCII code is shown in Fig. [[2.4](#530263_1_En_2_Chapter.xhtml#Fig4)]{.InternalRef}. We illustrate the use of the table with an example. The capital letter "G" is encoded in ASCII as 0x47. The "0x" symbol indicates the hexadecimal number representation.

::: {#530263_1_En_2_Chapter.xhtml#Par56 .Para}
Unicode is the international counterpart of ASCII. It provides a standardized 16--bit encoding format for the written languages of the world. ASCII is a subset of Unicode. The interested reader is referred to the Unicode home page website at: [[[www.​unicode.​org]{.RefSource}](http://www.unicode.org)]{.ExternalRef} for additional information on this standardized encoding format.

![530263_1_En_2_Fig4_HTML.png](https://i.imgur.com/eUZwV0K.jpeg)
:::

::: {#530263_1_En_2_Chapter.xhtml#Par57 .Para}
LCDs are configured for either a serial or parallel interface to the host microcontroller. For a parallel configured LCD, an eight bit data path and two control lines are required between the microcontroller. Many parallel configured LCDs may also be configured for a four bit data path thus saving several precious microcontroller pins. A small microcontroller mounted to the back panel of the LCD translates the ASCII data characters and control signals to properly display the characters. Several manufacturers provide 3.3 VDC compatible displays.

![530263_1_En_2_Fig5_HTML.png](https://i.imgur.com/LcHUfuG.jpeg)
:::

To conserve precious, limited microcontroller input/output pins a serial configured LCD may be used. A serial LCD reduces the number of required microcontroller pins for interface, from ten down to one. Display data and control information is sent to the LCD via an asynchronous USART serial communication link (8 bit, 1 stop bit, no parity, 9600 Baud).

In this example a Sparkfun LCD--16397, 3.3 VDC, serial, 16 by 2 character LCD display is connected to the Nano 33 BLE Sense. Communication between the Nano 33 and the LCD is accomplished by a single 9600 bits per second (BAUD)[]{#530263_1_En_2_Chapter.xhtml#ITerm13} connection using the onboard USART.

::: {#530263_1_En_2_Chapter.xhtml#Par60 .Para}
In the Application section of Chap. [[[3]{.RefSource}](#530263_1_En_3_Chapter.xhtml)]{.ExternalRef}, we configure a small robot to navigate autonomously through a maze. The robot will display maze wall status on an LCD. In this sample sketch we use simulated maze wall data to display on the LCD. Note the USART is designated "Serial1" in the sketch.

![530263_1_En_2_Figc_HTML.png](https://i.imgur.com/kzuDoP3.jpeg)

![530263_1_En_2_Figd_HTML.png](https://i.imgur.com/E1GKf8N.jpeg)
:::
:::

::: {#530263_1_En_2_Chapter.xhtml#Sec13 .section .Section3 .RenderAsSection3}
#### [2.5.2.2 ]{.HeadingNumber}Serial Peripheral Interface (SPI) {.Heading}

The Nano 33 BLE Sense Serial Peripheral Interface or SPI provides for two--way serial communication between a transmitter and a receiver. In the SPI system, the transmitter and receiver [share]{#530263_1_En_2_Chapter.xhtml#ITerm14} a common clock source. This requires an additional clock line between the transmitter and receiver but allows for higher data transmission rates as compared to the USART.

The SPI system allows for fast and efficient data exchange between microcontrollers or peripheral devices. There are many SPI compatible external systems available to extend the features of the microcontroller. For example, a liquid crystal display or a digital--to--analog converter could be added to the microcontroller using the SPI system.

***SPI Operation*** The SPI may be viewed as a synchronous 16--bit shift register with an 8--bit half residing in the transmitter and the other 8--bit half residing in the receiver as shown in Fig. [[2.6](#530263_1_En_2_Chapter.xhtml#Fig6)]{.InternalRef}. The transmitter is designated the master since it is providing the synchronizing clock source between the transmitter and the receiver. The receiver is designated as the slave. A slave is chosen for reception by taking its Slave Select ([![530263_1_En_2_Chapter_TeX_IEq2.png](https://i.imgur.com/6Ih2ZKj.jpeg)]{#530263_1_En_2_Chapter.xhtml#IEq2 .InlineEquation} line is taken low, the slave's shifting capability is enabled.

SPI transmission is initiated by loading a data byte into the master configured SPI data register. At that time, the SPI clock generator provides clock pulses to the master and also to the slave via the SCK pin. A single bit is shifted out of the master designated shift register on the Master Out Slave In (MOSI) microcontroller pin on every SCK pulse.

The data is received at the MOSI pin of the slave designated device. At the same time, a single bit is shifted out of the Master In Slave Out (MISO) pin of the slave device and into the MISO pin of the master device.

::: {#530263_1_En_2_Chapter.xhtml#Par66 .Para}
After eight master SCK clock pulses, a byte of data has been exchanged between the master and slave designated SPI devices.

![530263_1_En_2_Fig6_HTML.png](https://i.imgur.com/D5UgvcO.jpeg)
:::

::: {#530263_1_En_2_Chapter.xhtml#Par67 .Para}
The SPI associated pins on the Arduino Nano 33 BLE Sense include:

::: {.UnorderedList}
-   Pin 29, SPI MOSI also referred to as Computer Out Peripheral In (COPI),

-   Pin 30, SPI MISO also referred to as Computer In Peripheral Out (CIPO),

-   Pin 1, SPI SCK
:::
:::

::: {#530263_1_En_2_Chapter.xhtml#Par71 .Para}
To configure the Arduino Nano 33 BLE Sense for SPI operation, the following Arduino IDE commands are used:

::: {.UnorderedList}
-   SPI.begin() is called from within setup()

-   SPI.beginTransaction(SPISettings(SPIspeed, SPIbitdirection, SPImode));

-   SPI.transfer(data)

-   SPI.endTransaction();
:::
:::

In Chap. [[[1]{.RefSource}](#530263_1_En_1_Chapter.xhtml)]{.ExternalRef} we used the SPI system to send RGB data to individual LEDs within an SPI compatible LED strip.

::: {#530263_1_En_2_Chapter.xhtml#Par77 .Para}
**Example:** In this example we configure the Sparkfun LCD--16397. The required connections, shown in Fig. [[2.7](#530263_1_En_2_Chapter.xhtml#Fig7)]{.InternalRef}, between the Nano 33 and the LCD include:

::: {.UnorderedList}
-   Nano 33 SCK pin 1 to SCK on LCD

-   Nano 33 SPI MOSI pin 29 to SDI (Serial Data In) on LCD

-   Ground LCD chip select ([![530263_1_En_2_Chapter_TeX_IEq3.png](https://i.imgur.com/Ku0jOVz.jpeg)]{#530263_1_En_2_Chapter.xhtml#IEq3 .InlineEquation}CS)
:::

![530263_1_En_2_Fig7_HTML.png](https://i.imgur.com/VweOwgq.jpeg)
:::

::: {#530263_1_En_2_Chapter.xhtml#Par81 .Para}
Provided below is an Arduino sketch to communicate with LCD--16397 using the SPI system. Several items of interest regarding the sketch:

::: {.UnorderedList}
-   SparkFun documentation for the LCD provide the following LCD SPI settings: speed- --100000, MSBFIRST, SPI_MODE0.

-   Note the use of function **transmit_int_via_SPI** to send a three digit integer value to the LCD. The function isolates each digit and sends its ASCII equivalent to the LCD.
:::

![530263_1_En_2_Fige_HTML.png](https://i.imgur.com/eHx1bcJ.jpeg)

![530263_1_En_2_Figf_HTML.png](https://i.imgur.com/bFp7oLk.jpeg)
:::
:::

::: {#530263_1_En_2_Chapter.xhtml#Sec14 .section .Section3 .RenderAsSection3}
#### [2.5.2.3 ]{.HeadingNumber}Inter--Integrated Circuit (I2C) {.Heading}

::: {#530263_1_En_2_Chapter.xhtml#Par84 .Para}
The I2C subsystem allows the system designer to [network]{#530263_1_En_2_Chapter.xhtml#ITerm15} related devices (microcontrollers, transducers, displays, memory storage, etc.) together into a system using a two--wire interconnecting scheme. The I2C allows a maximum of 128 devices to be interconnected. Each device has its own unique address and may both transmit and receive over the two--wire bus at frequencies up to 400 kHz. This allows the device to freely exchange information with other devices in the network within a small area. Devices within the small area network are connected by two wires to share data (SDA) and a common clock (SCL).

![530263_1_En_2_Figg_HTML.png](https://i.imgur.com/ePJhwix.jpeg)

![530263_1_En_2_Figh_HTML.png](https://i.imgur.com/iYQKutQ.jpeg)
:::
:::

::: {#530263_1_En_2_Chapter.xhtml#Sec15 .section .Section3 .RenderAsSection3}
#### [2.5.2.4 ]{.HeadingNumber}Analog to Digital Converter--ADC {.Heading}

The goal of the ADC process is to accurately [represent]{#530263_1_En_2_Chapter.xhtml#ITerm16} analog signals as digital signals. Toward this end, three signal processing procedures, sampling, quantization, and encoding must be combined together.

Before the ADC process takes place, we first need to convert a physical signal into an electrical signal with the help of a transducer. A transducer is an electrical and/or mechanical system that converts physical signals into electrical signals or electrical signals to physical signals.

Depending on the purpose, we categorize a transducer as an input transducer or an output transducer. If the conversion is from physical to electrical, we call it an input transducer. For example, a temperature sensor is considered an input transducer. The output transducer converts electrical signals to physical signals. For example, an LCD or a motor would be considered an output transducer.

It is important to carefully design the interface between transducers and the microcontroller to insure proper operation. A poorly designed interface could result in improper embedded system operation or failure. Specific input and output transducer interface techniques are discussed in Chap. [[[3]{.RefSource}](#530263_1_En_3_Chapter.xhtml)]{.ExternalRef}.

The Arduino Nano 33 BLE Sense is equipped with an eight--channel, 12--bit resolution, 200 kilo samples per second (ksps) analog to digital converter (ADC) subsystem. The ADC [converts]{#530263_1_En_2_Chapter.xhtml#ITerm17} an analog signal from the outside world into a binary representation suitable for use by the microcontroller. The 12--bit resolution means that an analog voltage between 0 and 3.3V will be encoded into one of 4096 binary representations between [![530263_1_En_2_Chapter_TeX_IEq5.png](https://i.imgur.com/pzqyZQV.jpeg)]{#530263_1_En_2_Chapter.xhtml#IEq5 .InlineEquation}. This provides the Nano 33 with a voltage resolution of approximately 0.81 mV.

An analog channel is read using the "analogRead" function. This function uses a default value of 10--bit ADC resolution. The resolution of the ADC process can be adjusted using the "analogReadResolution(num_bits)" function. The desired level of resolution is specified using the "num_bits" variable.

::: {#530263_1_En_2_Chapter.xhtml#Par91 .Para}
The Nano 33 has eight analog to digital conversion channels:

::: {.UnorderedList}
-   Channel A0, pin 4

-   Channel A1, pin 5

-   Channel A2, pin 6

-   Channel A3, pin 7

-   Channel A4, pin 8 (also I2C pin SDA)

-   Channel A5, pin 9 (also I2C pin SCL)

-   Channel A6, pin 10

-   Channel A7, pin 11
:::

**Example:** In this example we measure the voltage from a variable power supply. Note the line in code to convert the ADC reading from 0 to 1023 to an analog voltage: [A0_voltage = (analog_reading_A0 \* 3.3)/1024]{.EmphasisFontCategoryNonProportional}. The circuit configuration is shown in Fig. [[2.8](#530263_1_En_2_Chapter.xhtml#Fig8)]{.InternalRef}.

![530263_1_En_2_Figi_HTML.png](https://i.imgur.com/fA4jYCq.jpeg)

![530263_1_En_2_Fig8_HTML.png](https://i.imgur.com/MkpFNoV.jpeg)
:::
:::
:::

::: {#530263_1_En_2_Chapter.xhtml#Sec16 .section .Section2 .RenderAsSection2}
### [2.5.3 ]{.HeadingNumber}Bluetooth Low Energy (BLE) {.Heading}

The Arduino Nano 33 BLE Sense is equipped with Bluetooth features. The Classic form of Bluetooth was designed to provide a wireless replacement for the common RS--232 serial connection standard. The Arduino Nano 33 BLE sense is also equipped with [Bluetooth Low Energy (BLE)]{#530263_1_En_2_Chapter.xhtml#ITerm18} features. It is important to note that Bluetooth Classic and BLE features are not compatible with one another. We explore Bluetooth Classic in "Arduino III: Internet of Things."^[^4]^ We concentrate on BLE features here.

::: {#530263_1_En_2_Chapter.xhtml#Par102 .Para}
Bluetooth BLE provides for low transmit power (10 mW), short (maximum 100 m) range [RF]{#530263_1_En_2_Chapter.xhtml#ITerm19} connections to replace wires. It uses the crowded Industrial, Scientific, and Medical (ISM) [frequency]{#530263_1_En_2_Chapter.xhtml#ITerm20} band from 2.40 to approximately 2.50 GHz. The BLE band is divided into 40 different, 2 MHz channels as shown in Fig. [[2.9](#530263_1_En_2_Chapter.xhtml#Fig9)]{.InternalRef}. BT BLE employs an interesting frequency [hopping]{#530263_1_En_2_Chapter.xhtml#ITerm21} technique to communicate. Data for transmission is divided into packets at data rates from 125 to 2 Mb/s. The device transmits a packet of data at the first carrier frequency. It then hops to a different carrier frequency for the next packet and so on until the entire message is transmitted as shown in Fig. [[2.9](#530263_1_En_2_Chapter.xhtml#Fig9)]{.InternalRef}b). Formally the BT BLE modulation technique is [called]{#530263_1_En_2_Chapter.xhtml#ITerm22}  Direct Sequence Spread Spectrum (DSSS) ([[[www.​bluetooth.​com]{.RefSource}](http://www.bluetooth.com)]{.ExternalRef}).

![530263_1_En_2_Fig9_HTML.png](https://i.imgur.com/ksnCvaM.jpeg)
:::

::: {#530263_1_En_2_Chapter.xhtml#Par103 .Para}
BLE uses the Generic Attribute (GATT) Profile to establish two different primary roles for a BLE connection:

::: {.UnorderedList}
-   The peripheral or server role provides bulletin board features where data is posted for reading.

-   The central or client role can read and interact with the posted data.
:::
:::

::: {#530263_1_En_2_Chapter.xhtml#Par106 .Para}
In Fig. [[2.10](#530263_1_En_2_Chapter.xhtml#Fig10)]{.InternalRef} we use an Arduino Nano 33 BLE Sense in a peripheral server role to collect [important]{#530263_1_En_2_Chapter.xhtml#ITerm23} greenhouse information such as external temperature, internal temperature, humidity, and soil moisture content. The greenhouse related data is collected and organized into a BLE service. The service related data is provided as BLE configured characteristics. To allow ease of access to the information from an external central client device, the BLE service and characteristics are each assigned [a]{#530263_1_En_2_Chapter.xhtml#ITerm24} universally unique identifier (UUID) ([[[www.​bluetooth.​com]{.RefSource}](http://www.bluetooth.com)]{.ExternalRef}). If we were to expand the features of the project with additional services, we could group them into a profile.

![530263_1_En_2_Fig10_HTML.png](https://i.imgur.com/bpLXzmD.jpeg)
:::

::: {#530263_1_En_2_Chapter.xhtml#Par107 .Para}
There are a number of 16 bit pre--assigned UUIDs. The UUIDs represent different manufacturers and technology companies employing Bluetooth--based technologies. Also, UUIDs have been pre--assigned to common Bluetooth features and common pre--assigned data types (e.g. temperature, pressure, etc.) ([[[www.​bluetooth.​com]{.RefSource}](http://www.bluetooth.com)]{.ExternalRef}):

::: {.UnorderedList}
-   Bluetooth members: 0xFxxx

-   GATT characteristic and object type: 0x2xxx

-   GATT declarations: 0x28xx and 0x29xx

-   GATT service: 0x18xx

-   GATT unit: 0x27xx

-   protocol identifier: 0x00xx

-   SDO GATT service: 0XFFFx

-   service classes and profiles: 0x10xx and 0x11xx
:::
:::

For BLE services and characteristics without a 16 bit pre--assigned UUID, a unique 128 bit UUID code is used. A Bluetooth unique UUID may be obtained using a number of online UUID generators.

In the greenhouse example, a cell phone is configured as a BLE central or client. Through the BLE wireless radio interconnect, the cell phone can read and interact with the greenhouse data and features.

::: {#530263_1_En_2_Chapter.xhtml#Sec17 .section .Section3 .RenderAsSection3}
#### [2.5.3.1 ]{.HeadingNumber}ArduinoBLE Library {.Heading}

::: {#530263_1_En_2_Chapter.xhtml#Par118 .Para}
The ArduinoBLE Library provides for a wide variety of BLE configurations. The library is downloaded from within the Arduino IDE using the Library Manager. The library is organized into different classes including the ([[[www.​arduino.​cc]{.RefSource}](http://www.arduino.cc)]{.ExternalRef}):

::: {.UnorderedList}
-   BLE Class used to enable the BLE module,

-   BLE Device Class to get information about connected devices,

-   BLE Service Class to enable services and interaction with services,

-   BLE Characteristic Class to enable characteristics and interaction with them, and

-   BLE Descriptor Class to describe characteristics.
:::
:::

To get acquainted with the library we continue with a series of examples. The first two examples are adapted from the Arduino BLE Library. In the third example, we configure an Arduino Nano 33 BLE Sense as the server to collect and post greenhouse data. A cell phone is configured as a client to poll and interact with the greenhouse data. The cell phone is equipped with a BLE compatible app to interact with the Nano 33. This example is provided in the Application section at the end of the chapter.

**Example:** In this first example "LED," from the Arduino BLE Library, a cell phone serves as a central client to control an LED onboard the Nano 33 BLE Sense configured as a server.

::: {#530263_1_En_2_Chapter.xhtml#Par126 .Para}
To get better acquainted with the sketch, we study the Bluetooth configuration related code steps. In Fig. [[2.11](#530263_1_En_2_Chapter.xhtml#Fig11)]{.InternalRef} we detail these steps in a UML activity diagram.

![530263_1_En_2_Figj_HTML.png](https://i.imgur.com/TYYq03y.jpeg)

![530263_1_En_2_Figk_HTML.png](https://i.imgur.com/y6lO8co.jpeg)

![530263_1_En_2_Fig11_HTML.png](https://i.imgur.com/tYAlmpL.jpeg)
:::

::: {#530263_1_En_2_Chapter.xhtml#Par127 .Para}
The sketch may be compiled and uploaded to the Nano 33 BLE. Once uploaded, the sketch may be tested:

::: {.UnorderedList}
-   Open the Serial Monitor in the Arduino IDE to monitor sketch status.

-   Using a cell phone as a client, open "nRF Connect" to establish Bluetooth BLE connection with the Nano 33 based server.^[^5]^

-   Find "LED" in the nRF scanner list.

-   Tap "Connect" to connect the client (cell phone) to the server (Nano 33 BLE).

-   By selecting "Client" and the up arrow, values may be sent from the client to the server to control the LED.

-   Select "Write Value" and "Unsigned."

-   Sending a non--zero turns the LED on while sending zero turns the LED off.
:::

**Example:** In this example, "battery monitor," adapted from the Arduino BLE Library, the Nano 33 BLE Sense is configured as a server. The Nano 33 BLE Sense monitors the analog signal on A0 and posts this characteristic to the server based bulletin board. A cell phone based client equipped with BLE compatible app is used to poll the posted data.
:::

To simulate a battery, a 100 kOhm potentiometer is connected to pin A0. The potentiometer is connected between 3.3 VDC and ground. The potentiometer wiper arm (center terminal) is connected to the A0 pin.

::: {#530263_1_En_2_Chapter.xhtml#Par137 .Para}
The client/server connection is tested using techniques similar to those provided in the previous example.

![530263_1_En_2_Figl_HTML.png](https://i.imgur.com/gxtjNty.jpeg)

![530263_1_En_2_Figm_HTML.png](https://i.imgur.com/HKqW8Ge.jpeg)

![530263_1_En_2_Fign_HTML.png](https://i.imgur.com/7brdt0l.jpeg)
:::
:::
:::
:::

::: {#530263_1_En_2_Chapter.xhtml#Sec18 .section .Section1 .RenderAsSection1}
## [2.6 ]{.HeadingNumber}Nano 33 BLE Sense Peripherals {.Heading}

::: {#530263_1_En_2_Chapter.xhtml#Par138 .Para}
As discussed earlier in the chapter, the Arduino Nano 33 BLE Sense SoC board is equipped with a rich complement of sensors. In this section we take a closer look at the following sensors (ABX00031):

::: {.UnorderedList}
-   Nine axis inertial measurement unit (IMU) (LSM9DS1),

-   Barometer and temperature sensor (LPS22HB),

-   Relative humidity sensor (HTS221),

-   Digital proximity, ambient light, RGB, and gesture sensor (APDS--9960),

-   Digital microphone (MP34DT05).
:::
:::

::: {#530263_1_En_2_Chapter.xhtml#Sec19 .section .Section2 .RenderAsSection2}
### [2.6.1 ]{.HeadingNumber}Nine Axis IMU (LSM9DS1) {.Heading}

::: {#530263_1_En_2_Chapter.xhtml#Par144 .Para}
It is an important feature to locally sense orientation in the X, Y, Z coordinate system An inertial measurement unit (IMU) provides this capability. An [IMU]{#530263_1_En_2_Chapter.xhtml#ITerm25} consists of an accelerometer, gyroscope, and magnetometer to measure acceleration, rotation, and the Earth's magnetic field strength in the X, Y, Z coordinate system as shown in Fig. [[2.12](#530263_1_En_2_Chapter.xhtml#Fig12)]{.InternalRef}.

![530263_1_En_2_Fig12_HTML.png](https://i.imgur.com/2R2r3Wh.jpeg)
:::

::: {#530263_1_En_2_Chapter.xhtml#Par145 .Para}
The Nano 33 BLE sense is equipped with the LSM9DS1 iNemo inertial module. The module consists of a 3D accelerometer, 3D gyroscope, and a 3D magnetometer. The module has the following specifications (LSM9DS1):

::: {.UnorderedList}
-   ± 2, 4, 8, 16 g linear acceleration,

-   ± 4, 8, 12, 16 Gauss magnetic full scale, and

-   ± 245, 500, 2000 degree per second (dps) angular rate full scale.
:::

**Example:** The "Arduino_LSM9DS1" library created by Riccardo Rizzo provides examples to exercise the onboard accelerometer, gyroscope, and magnetometer. Provided here is the "Simple_Accelerometer."

![530263_1_En_2_Figo_HTML.png](https://i.imgur.com/svSzlzz.jpeg)
:::
:::

::: {#530263_1_En_2_Chapter.xhtml#Sec20 .section .Section2 .RenderAsSection2}
### [2.6.2 ]{.HeadingNumber}Barometer and Temperature Sensor (LPS22HB) {.Heading}

The LPS22HB sensor module provides barometric pressure and temperature. Pressure (in Pascals) is the measurement of force (Newtons) per area ([![530263_1_En_2_Chapter_TeX_IEq6.png](https://i.imgur.com/8M5L7FK.jpeg)]{#530263_1_En_2_Chapter.xhtml#IEq6 .InlineEquation}). Barometric pressure [is]{#530263_1_En_2_Chapter.xhtml#ITerm26} the pressure on Earth caused by the weight of air above as compared to a vacuum. Intuitively, barometric pressure decreases as the altitude where the measurement is taken increases. Also, barometric pressure varies depending on weather conditions. For example, the barometric pressure decreases in the presence of rainy weather \[[[6](#530263_1_En_2_Chapter.xhtml#CR6)]{.CitationRef}\].

The LPS22HB provides pressure readings from 260 to 1260 hPa (hecto Pascals). The Standard Atmosphere at sea level is given as 1013 hPa. This is equivalent to 101.325 kPa and 1013.25 mbar and 14.696 PSI (LPS22HB).

::: {#530263_1_En_2_Chapter.xhtml#Par151 .Para}
**Example:** The example "ReadPressure" within the "Arduino_LPS22HB" Library provides a reading of pressure and temperature. Interestingly, when I run this program in my home lab, I receive a reading of 77.62 kPa. Recall, the Standard Atmosphere at sea level is given as 101.325 kPa. When the 77.62 kPa reading is provided to an "Air Pressure at Altitude Calculator," my altitude is given as 7,194.33 feet ([[[www.​mide.​com]{.RefSource}](http://www.mide.com)]{.ExternalRef}). The University of Wyoming football and basketball teams regularly reminds opponents they are competing at 7,220 feet!

![530263_1_En_2_Figp_HTML.png](https://i.imgur.com/54Ujpj0.jpeg)
:::
:::

::: {#530263_1_En_2_Chapter.xhtml#Sec21 .section .Section2 .RenderAsSection2}
### [2.6.3 ]{.HeadingNumber}Relative Humidity and Temperature Sensor (HTS221) {.Heading}

The HTS221 sensor provides for measuring relative humidity (rH). Relative humidity provides a measure of water vapor content within air. Absolute humidity is the mass of water vapor per volume of air measured in [![530263_1_En_2_Chapter_TeX_IEq7.png](https://i.imgur.com/bZC4V5x.jpeg)]{#530263_1_En_2_Chapter.xhtml#IEq7 .InlineEquation}. [Relative humidity]{#530263_1_En_2_Chapter.xhtml#ITerm27} references absolute humidity to the amount of water vapor the volume of air could contain at a given temperature. The relative humidity is reported as a percentage between 0 and 100 percent \[[[6](#530263_1_En_2_Chapter.xhtml#CR6)]{.CitationRef}\].

::: {#530263_1_En_2_Chapter.xhtml#Par153 .Para}
I have lived in many places that exhibited a wide range of humidity. For example, I attended junior high school on Guam. Guam is a tropical island in the Pacific Ocean where relative humidity regularly exceeds 80 percent. I now live in Wyoming where the relative humidity during the summer averages 25 percent. Figure [[2.13](#530263_1_En_2_Chapter.xhtml#Fig13)]{.InternalRef} illustrates the range of relative humidity.

![530263_1_En_2_Fig13_HTML.png](https://i.imgur.com/AIxcCJr.jpeg)
:::

The HTS221 sensor provides rH from 0 to 100 percent. It provides an accuracy of ± 3.5% in the range of 20 to 80% rH (HTS221).

::: {#530263_1_En_2_Chapter.xhtml#Par155 .Para}
**Example:** The example "ReadSensors" within the "Arduino_HTS221" Library provides a reading of relative humidity and temperature.

![530263_1_En_2_Figq_HTML.png](https://i.imgur.com/DsxrvYr.jpeg)
:::
:::

::: {#530263_1_En_2_Chapter.xhtml#Sec22 .section .Section2 .RenderAsSection2}
### [2.6.4 ]{.HeadingNumber}Digital Proximity, Ambient Light, RGB, and Gesture Sensor (APDS--9960) {.Heading}

The Arduino Nano 33 BLE Sense [is]{#530263_1_En_2_Chapter.xhtml#ITerm28} equipped with the APDS--9960 sensor. The sensor is equipped with gesture detection, color component, and proximity detection features. We discuss each in turn with an accompanying example sketch.

::: {#530263_1_En_2_Chapter.xhtml#Sec23 .section .Section3 .RenderAsSection3}
#### [2.6.4.1 ]{.HeadingNumber}Gesture Detection {.Heading}

::: {#530263_1_En_2_Chapter.xhtml#Par157 .Para}
The gesture [detection]{#530263_1_En_2_Chapter.xhtml#ITerm29} feature uses four directional photodiodes as shown in Fig. [[2.14](#530263_1_En_2_Chapter.xhtml#Fig14)]{.InternalRef}a. Gesture direction is defined as shown. The LED shown below the photodiodes provides the source illumination. When a gesture is made, for example a left to right sweep in front of the photodiodes, a right gesture is detected.

![530263_1_En_2_Fig14_HTML.png](https://i.imgur.com/lCCMBpE.jpeg)
:::

Arduino provides the ADPS--9960 Library which includes sketches to test the different features.

::: {#530263_1_En_2_Chapter.xhtml#Par159 .Para}
**Example:** In this example we have modified the Gesture Sensor sketch provided in the APDS--9960 Library. When a gesture is detected a corresponding LED is illuminated. The configuration of the display LEDs is shown in Fig. [[2.14](#530263_1_En_2_Chapter.xhtml#Fig14)]{.InternalRef}b.

![530263_1_En_2_Figr_HTML.png](https://i.imgur.com/jciexRM.jpeg)

![530263_1_En_2_Figs_HTML.png](https://i.imgur.com/1IlaPi8.jpeg)

![530263_1_En_2_Figt_HTML.png](https://i.imgur.com/mDuMIpI.jpeg)
:::
:::

::: {#530263_1_En_2_Chapter.xhtml#Sec24 .section .Section3 .RenderAsSection3}
#### [2.6.4.2 ]{.HeadingNumber}Color Sensor {.Heading}

The APDS--9960 is also equipped with [a]{#530263_1_En_2_Chapter.xhtml#ITerm30} color sensor that reports on the chromatic content (red, green, blue) of detected light. The different color content is sensed using three different photodiodes detecting red (centered at approximately 610 nm), green (centered at approximately 540 nm), and blue (centered at approximately 450 nm).

::: {#530263_1_En_2_Chapter.xhtml#Par161 .Para}
The following sketch "Color Sensor," provided in the Arduino ADPS--9960 Library, is adapted to illuminate three separate LEDs at the intensity of the detected chromatic content. The R, G, B LED circuit is shown in Fig. [[2.14](#530263_1_En_2_Chapter.xhtml#Fig14)]{.InternalRef}c. The sketch is tested by placing different color filters in front of a light source (e.g. Neewer 58 mm full color lens filter set).

![530263_1_En_2_Figu_HTML.png](https://i.imgur.com/eiw36uK.jpeg)

![530263_1_En_2_Figv_HTML.png](https://i.imgur.com/DgFzSu6.jpeg)
:::
:::

::: {#530263_1_En_2_Chapter.xhtml#Sec25 .section .Section3 .RenderAsSection3}
#### [2.6.4.3 ]{.HeadingNumber}Proximity Sensor {.Heading}

The APDS--9960 is also equipped with [a]{#530263_1_En_2_Chapter.xhtml#ITerm31} proximity sensor. The sensor uses an onboard infrared diode as an illumination source. The light source is reflected off an object. The reflected light is collected by the same four photodiodes used for gesture detection. A numerical value corresponding to the range of the object is reported by the ADPS--9960. The numerical value may be correlated with a specific range for a given application.

::: {#530263_1_En_2_Chapter.xhtml#Par163 .Para}
The following sketch "Proximity Sensor," provided in the Arduino ADPS--9960 Library, is adapted to report an object's range and also illuminate an LED at an intensity consistent with range (i.e. closer object, brighter LED).

![530263_1_En_2_Figw_HTML.png](https://i.imgur.com/g2zUA31.jpeg)

![530263_1_En_2_Figx_HTML.png](https://i.imgur.com/phb4Nwk.jpeg)
:::
:::
:::

::: {#530263_1_En_2_Chapter.xhtml#Sec26 .section .Section2 .RenderAsSection2}
### [2.6.5 ]{.HeadingNumber}Digital Microphone (MP34DT05) {.Heading}

The Nano 33 BLE Sense is equipped with [an]{#530263_1_En_2_Chapter.xhtml#ITerm32} omnidirectional microphone. This means in can accept sound from multiple directions. It uses a pulse density modulation (PDM) technique where the sound is encoded into a serial stream of digital pulses. The digital pulses may be averaged to render an analog audio output. The microphone's signal to noise ratio (SNR) is 64 dB with a sensitivity of --26 dBFS (MP34DT05).

::: {#530263_1_En_2_Chapter.xhtml#Par165 .Para}
**Example:** The "PDMSerialPlotter" sketch captures samples from the MP34DT05 digital microphone and displays the samples in the Serial Monitor. The samples can also be displayed as a time sequence by choosing Tools --\> Serial Plotter within the Arduino IDE.

![530263_1_En_2_Figy_HTML.png](https://i.imgur.com/0YICOJu.jpeg)

![530263_1_En_2_Figz_HTML.png](https://i.imgur.com/bLEs3TA.jpeg)
:::
:::
:::

::: {#530263_1_En_2_Chapter.xhtml#Sec27 .section .Section1 .RenderAsSection1}
## [2.7 ]{.HeadingNumber}Application: Bluetooth BLE Greenhouse Monitor {.Heading}

::: {#530263_1_En_2_Chapter.xhtml#Par166 .Para}
In developing software for a system, it is not always possible or desirable to have close access to the system. For example, in the development of control software for a greenhouse, the greenhouse is not always readily available. Also, different weather conditions are not conveniently available to test the control algorithm under a variety of conditions. In these situations a simulator may be used to substitute for the system. The simulator provides the necessary inputs and signals in place of the system so that software may be developed.

![530263_1_En_2_Fig15_HTML.png](https://i.imgur.com/kiRm5sl.jpeg)
:::

::: {#530263_1_En_2_Chapter.xhtml#Par167 .Para}
In the following example, we develop a Bluetooth BLE application to gather greenhouse data and make it available for viewing on a client cell phone. A small hardware simulator consisting of several potentiometers and LED indicators are used as a greenhouse substitute during software development.

![530263_1_En_2_Fig16_HTML.png](https://i.imgur.com/rVgFeHQ.jpeg)
:::

The hardware simulator is shown in Fig. [[2.15](#530263_1_En_2_Chapter.xhtml#Fig15)]{.InternalRef}. A series of seven 100 kOhm potentiometers provide simulated weather data. One side of each potentiometer is connected to Vcc and the other side to ground. The wiper for a given potentiometer is connected to a jumper wire for easy connection to a microcontroller pin via the prototype board. A series of seven LEDs are used to simulate motors, pumps, etc. Each LED is equipped with an interface circuit as shown in Fig. [[2.15](#530263_1_En_2_Chapter.xhtml#Fig15)]{.InternalRef}. The input to each interface circuit is provided a jumper wire. The completed simulator is shown in Fig. [[2.16](#530263_1_En_2_Chapter.xhtml#Fig16)]{.InternalRef}.

::: {#530263_1_En_2_Chapter.xhtml#Par169 .Para}
In "Arduino III: Internet of Things," a design is provided for a greenhouse and accompanying weather station. The greenhouse control system uses a 3.3 VDC Arduino MKR 1000 microcontroller. We use [the]{#530263_1_En_2_Chapter.xhtml#ITerm33} simulator in place of the greenhouse. In this example we use the Arduino Nano 33 BLE Sense as a server for greenhouse parameters and make them available to BLE peripheral clients. A cell phone serves as a client. Through a BLE app (e.g. nRF Connect, LightBlue), the cellphone is used to read greenhouse parameters and to control a simulated vent fan or water pump. Lessons learned from the BLE examples provided earlier in the chapter are used as building blocks for this more complex control algorithm.

![530263_1_En_2_Figaa_HTML.png](https://i.imgur.com/l4RDvFe.jpeg)

![530263_1_En_2_Figab_HTML.png](https://i.imgur.com/zPLe9Pi.jpeg)

![530263_1_En_2_Figac_HTML.png](https://i.imgur.com/4kjErrJ.jpeg)

![530263_1_En_2_Figad_HTML.png](https://i.imgur.com/U9RaMdi.jpeg)

![530263_1_En_2_Figae_HTML.png](https://i.imgur.com/o6LqVfb.jpeg)

![530263_1_En_2_Figaf_HTML.png](https://i.imgur.com/pZNKweU.jpeg)
:::
:::

::: {#530263_1_En_2_Chapter.xhtml#Sec28 .section .Section1 .RenderAsSection1}
## [2.8 ]{.HeadingNumber}Summary {.Heading}

In this chapter we explored the Arduino Nano 33 BLE Sense SoC board and its nRF52840 processor. We began with an overview of the Arduino Nano 33 BLE Sense SoC board features. We then examined the powerful and well--equipped nRF52840 [processor]{#530263_1_En_2_Chapter.xhtml#ITerm34} and its associated peripheral subsystems. We then investigated the multiple peripherals onboard the [Nano 33 BLE Sense]{#530263_1_En_2_Chapter.xhtml#ITerm35} SoC board. For selected peripherals we provided a brief theory of operation, feature overview, and examples. We concluded the chapter with an extended example featuring a Bluetooth BLE application--a greenhouse monitoring system.
:::

::: {#530263_1_En_2_Chapter.xhtml#Sec29 .section .Section1 .RenderAsSection1}
## [2.9 ]{.HeadingNumber}Problems {.Heading}

::: {#530263_1_En_2_Chapter.xhtml#Par171 .Para}
::: {.OrderedList}
1.  ::: {.ItemNumber}
    1\.
    :::

    ::: {.ItemContent}
    pg What is the operating voltage of the Arduino Nano 33 BLE Sense? What constraints does this operating voltage put on the processor?
    :::

    ::: {.ClearBoth}
     
    :::

2.  ::: {.ItemNumber}
    2\.
    :::

    ::: {.ItemContent}
    The onboard RGB LEDs are active low? What does this mean?
    :::

    ::: {.ClearBoth}
     
    :::

3.  ::: {.ItemNumber}
    3\.
    :::

    ::: {.ItemContent}
    How many external pins are available on the Arduino Nano 33 BLE Sense? What external pin is used to provide power to the Nano 33? What is the acceptable range of this input voltage?
    :::

    ::: {.ClearBoth}
     
    :::

4.  ::: {.ItemNumber}
    4\.
    :::

    ::: {.ItemContent}
    Provide a list of onboard Nano 33 BLE sensors. Provide a brief description of each sensor.
    :::

    ::: {.ClearBoth}
     
    :::

5.  ::: {.ItemNumber}
    5\.
    :::

    ::: {.ItemContent}
    Briefly describe the serial communication features onboard the Nano 33 BLE sense. Provide a summary table of features.
    :::

    ::: {.ClearBoth}
     
    :::

6.  ::: {.ItemNumber}
    6\.
    :::

    ::: {.ItemContent}
    Briefly describe the difference between EEPROM Flash and SRAM memory. How are these memory elements used in a typical program execution?
    :::

    ::: {.ClearBoth}
     
    :::

7.  ::: {.ItemNumber}
    7\.
    :::

    ::: {.ItemContent}
    What is PWM? How is it used to control the speed of a motor? The intensity of an LED?
    :::

    ::: {.ClearBoth}
     
    :::

8.  ::: {.ItemNumber}
    8\.
    :::

    ::: {.ItemContent}
    What is the difference between an ADC and DAC system? How are these systems used in a microcontroller application?
    :::

    ::: {.ClearBoth}
     
    :::

9.  ::: {.ItemNumber}
    9\.
    :::

    ::: {.ItemContent}
    What is the difference between Bluetooth Classic and BLE? Are they compatible with one another?
    :::

    ::: {.ClearBoth}
     
    :::

10. ::: {.ItemNumber}
    10\.
    :::

    ::: {.ItemContent}
    Briefly describe the role of the client and server in a Bluetooth BLE application?
    :::

    ::: {.ClearBoth}
     
    :::

11. ::: {.ItemNumber}
    11\.
    :::

    ::: {.ItemContent}
    What is a Bluetooth UUID?
    :::

    ::: {.ClearBoth}
     
    :::

12. ::: {.ItemNumber}
    12\.
    :::

    ::: {.ItemContent}
    What is the advantage of using a system simulator in Arduino sketch development?
    :::

    ::: {.ClearBoth}
     
    :::

13. ::: {.ItemNumber}
    13\.
    :::

    ::: {.ItemContent}
    What is the function of an inertial measurement unit?
    :::

    ::: {.ClearBoth}
     
    :::

14. ::: {.ItemNumber}
    14\.
    :::

    ::: {.ItemContent}
    What is barometric pressure? What is its unit of measure?
    :::

    ::: {.ClearBoth}
     
    :::

15. ::: {.ItemNumber}
    15\.
    :::

    ::: {.ItemContent}
    What is relative humidity? What is its range of measurement?
    :::

    ::: {.ClearBoth}
     
    :::

16. ::: {.ItemNumber}
    16\.
    :::

    ::: {.ItemContent}
    Describe the sensors and their features available in the APDS--9960.
    :::

    ::: {.ClearBoth}
     
    :::
:::
:::
:::

```{=html}
<aside aria-labelledby="Bib1Heading" class="Bibliography" id="Bib1">
```
::: {.bibliography role="doc-bibliography"}
::: {#530263_1_En_2_Chapter.xhtml#Bib1Heading .Heading}
References
:::

1.  ::: {.CitationNumber}
    1\.
    :::

    ::: {#530263_1_En_2_Chapter.xhtml#CR1 .CitationContent}
    *APDS--9960 Digital Proximity, Ambient Light, RGB and Gesture Sensor Data Sheet,* Avago Technologies, AV02--4191EN, 2015.
    :::

2.  ::: {.CitationNumber}
    2\.
    :::

    ::: {#530263_1_En_2_Chapter.xhtml#CR2 .CitationContent}
    Arduino homepage, [[[www.​arduino.​cc]{.RefSource}](http://www.arduino.cc)]{.ExternalRef}
    :::

3.  ::: {.CitationNumber}
    3\.
    :::

    ::: {#530263_1_En_2_Chapter.xhtml#CR3 .CitationContent}
    *Arduino Nano 33 BLE Sense Product Reference Manual,* ABX00031, 2022.
    :::

4.  ::: {.CitationNumber}
    4\.
    :::

    ::: {#530263_1_En_2_Chapter.xhtml#CR4 .CitationContent}
    Bluetooth, [[[www.​bluetooth.​com]{.RefSource}](http://www.bluetooth.com)]{.ExternalRef}
    :::

5.  ::: {.CitationNumber}
    5\.
    :::

    ::: {#530263_1_En_2_Chapter.xhtml#CR5 .CitationContent}
    *Bluetooth Document: 16--bit UUID Numbers Document,*[[[www.​bluetooth.​com]{.RefSource}](http://www.bluetooth.com)]{.ExternalRef}, 2015.
    :::

6.  ::: {.CitationNumber}
    6\.
    :::

    ::: {#530263_1_En_2_Chapter.xhtml#CR6 .CitationContent}
    Franklin Miller, Jr., *College Physics*, 4th edition, Harcourt, Brace, Jovanovich, 1977.
    :::

7.  ::: {.CitationNumber}
    7\.
    :::

    ::: {#530263_1_En_2_Chapter.xhtml#CR7 .CitationContent}
    *HTS221--Capacitive digital sensor for relative humidity and temperature,* DocID026333 Rev 4, STMicroelectronics,2016.
    :::

8.  ::: {.CitationNumber}
    8\.
    :::

    ::: {#530263_1_En_2_Chapter.xhtml#CR8 .CitationContent}
    *LPS22HB-- MEMS nano pressure sensor: 260--1260 hPa absolute digital output barometer*, DocID027083 Rev 6 1, STMicroelectronics, 2017.
    :::

9.  ::: {.CitationNumber}
    9\.
    :::

    ::: {#530263_1_En_2_Chapter.xhtml#CR9 .CitationContent}
    *LSM9DS1-- iNEMO inertial module: 3D accelerometer, 3D gyroscope, 3D magnetometer,* DocID025715 Rev 3, STMicroelectronics, 2015.
    :::

10. ::: {.CitationNumber}
    10\.
    :::

    ::: {#530263_1_En_2_Chapter.xhtml#CR10 .CitationContent}
    *MP34DT05-- MEMS audio sensor omnidirectional digital microphone data sheet,* STMicroelectronics, 2019.
    :::

11. ::: {.CitationNumber}
    11\.
    :::

    ::: {#530263_1_En_2_Chapter.xhtml#CR11 .CitationContent}
    *nRF52840 Product Specification,* 4413_417 v1.1, Nordic Semiconductor, 2019.
    :::

12. ::: {.CitationNumber}
    12\.
    :::

    ::: {#530263_1_En_2_Chapter.xhtml#CR12 .CitationContent}
    *nRF52840 Advanced multi--protocol System--on--Chip Supporting: Bluetooth low energy (Bluetooth 5), ANT/ANT+, 802.15.4 and 2.4GHz proprietary*, Nordic Semiconductor.
    :::
:::

```{=html}
</aside>
```
```{=html}
<aside aria-label="Footnotes" class="FootnoteSection" epub:type="footnotes">
```
::: {.Heading}
Footnotes
:::

::: {.Footnote}
[[1](#530263_1_En_2_Chapter.xhtml#Fn1_source)]{.FootnoteNumber}

::: {.ClearBoth}
 
:::
:::

::: {.Footnote}
[[2](#530263_1_En_2_Chapter.xhtml#Fn2_source)]{.FootnoteNumber}

::: {.ClearBoth}
 
:::
:::

::: {.Footnote}
[[3](#530263_1_En_2_Chapter.xhtml#Fn3_source)]{.FootnoteNumber}

::: {.ClearBoth}
 
:::
:::

```{=html}
</aside>
```
:::
:::

[]{#530263_1_En_3_Chapter.xhtml}

::: {.chapter role="doc-chapter"}
::: {.ChapterContextInformation}
::: {#530263_1_En_3_Chapter.xhtml#Chap3 .ContextInformation}
::: {.ChapterCopyright}
© The Author(s), under exclusive license to Springer Nature Switzerland AG 2023
:::

[S. F. Barrett]{.ContextInformationAuthorEditorNames}[[Arduino V: Machine Learning]{.BookTitle}]{.ContextInformationBookTitles}[[Synthesis Lectures on Digital Circuits & Systems]{.SeriesTitle lang="en"}]{.ContextInformationSeries}[<https://doi.org/10.1007/978-3-031-21877-4_3>]{.ChapterDOI}
:::
:::

`<!--Begin Abstract-->`{=html}

::: {.MainTitleSection}
# 3. Arduino Nano 33 BLE Sense Power and Interfacing {.ChapterTitle lang="en"}
:::

::: {.AuthorGroup}
::: {.AuthorNames}
[[Steven F. Barrett]{.AuthorName}^[1](#530263_1_En_3_Chapter.xhtml#Aff3) [[ ]{.ContactIcon}](#530263_1_En_3_Chapter.xhtml#ContactOfAuthor2)^]{.Author}
:::

::: {.Affiliations}
::: {#530263_1_En_3_Chapter.xhtml#Aff3 .Affiliation}
[(1)]{.AffiliationNumber}

::: {.AffiliationText}
Department of Electrical and Computer Engineering, University of Wyoming, Laramie, WY, USA
:::
:::

::: {.ClearBoth}
 
:::
:::

::: {.Contacts}
::: {#530263_1_En_3_Chapter.xhtml#ContactOfAuthor2 .Contact}
::: {.ContactIcon}
 
:::

::: {.ContactAuthorLine}
[Steven F. Barrett]{.AuthorName}
:::

::: {.ContactAdditionalLine}
[Email: ]{.ContactType}<steveb@uwyo.edu>
:::
:::
:::
:::

`<!--End Abstract-->`{=html}

::: {.Fulltext}
::: {#530263_1_En_3_Chapter.xhtml#Par2 .Para}
**Objectives:** After reading this chapter, the reader should be able to:

::: {.UnorderedList}
-   Specify a power supply system for an Arduino--based system;

-   Describe the voltage and current input/output parameters for the Arduino Nano 33 BLE Sense;

-   Apply the voltage and current input/output parameters toward properly interfacing input and output devices to the Nano 33 processing board;

-   Interface selected input and output devices to Nano 33 processing board; and

-   Describe how to control the speed and direction of a DC motor.
:::
:::

::: {#530263_1_En_3_Chapter.xhtml#Sec2 .section .Section1 .RenderAsSection1}
## [3.1 ]{.HeadingNumber}Overview {.Heading}

We begin this chapter with exploring the power source requirements for the Arduino Nano 33 BLE Sense. We examine how to probably provide power from several sources. The remainder of the chapter provides information on how to interface selected input, output, and high power DC devices to the Nano processor. As mentioned throughout the text, **the Nano 33 the BLE Sense is a 3.3 VDC processor. Inputs to the processor must not exceed this value.**^[^6]^
:::

::: {#530263_1_En_3_Chapter.xhtml#Sec3 .section .Section1 .RenderAsSection1}
## [3.2 ]{.HeadingNumber}Arduino Power Requirements {.Heading}

Arduino processing boards may be powered from the USB port during project development. It is highly recommended that an external power supply be employed any time a peripheral component is connected. This will allow developing projects beyond the limited current capability of the USB port.

For the Nano 33 BLE Sense board external regulated VDC voltages from 5 to 18 voltages may be applied to the VIN (pin 15) Power In pin. Ensure the power supply ground is also connected to one the ground pins on the Nano 33 (pins 14 or 19) ([[[www.​arduino.​cc]{.RefSource}](http://www.arduino.cc)]{.ExternalRef}).
:::

::: {#530263_1_En_3_Chapter.xhtml#Sec4 .section .Section1 .RenderAsSection1}
## [3.3 ]{.HeadingNumber}Voltage Regulators {.Heading}

[Voltage regulators]{#530263_1_En_3_Chapter.xhtml#ITerm1} provide a stabilized, fixed output voltage as the input voltage varies. A common positive voltage regulator is the 78XX series. The "XX" specifies the regulator output voltage (e.g. 5, 9, 12, etc.). This regulator series has a current rating up to 1.5 Amps. The input voltage to the regulator typically needs to be several volts higher than the desired output voltage (uA7800).

::: {#530263_1_En_3_Chapter.xhtml#Par13 .Para}
Figure [[3.1](#530263_1_En_3_Chapter.xhtml#Fig1)]{.InternalRef} provides sample circuits to provide a +5 VDC and a ±5 VDC portable battery source.

![530263_1_En_3_Fig1_HTML.png](https://i.imgur.com/Y54UZVG.jpeg)
:::

::: {#530263_1_En_3_Chapter.xhtml#Sec5 .section .Section2 .RenderAsSection2}
### [3.3.1 ]{.HeadingNumber}Powering the Nano 33 From Batteries {.Heading}

::: {#530263_1_En_3_Chapter.xhtml#Par14 .Para}
As previously mentioned, for the Nano 33, Arduino recommends a power supply from 5--18 VDC ([[[www.​arduino.​cc]{.RefSource}](http://www.arduino.cc)]{.ExternalRef}). For low power applications a single 9 VDC battery and clip may be used as shown in Fig. [[3.2](#530263_1_En_3_Chapter.xhtml#Fig2)]{.InternalRef}. For higher power applications, a AA battery pack may be used. The battery supply is provided to a regulator (e.g. 7805) and then to the Nano 33 VIN pin.

![530263_1_En_3_Fig2_HTML.png](https://i.imgur.com/omIsz5a.jpeg)
:::
:::
:::

::: {#530263_1_En_3_Chapter.xhtml#Sec6 .section .Section1 .RenderAsSection1}
## [3.4 ]{.HeadingNumber}Interfacing Concepts {.Heading}

::: {#530263_1_En_3_Chapter.xhtml#Par15 .Para}
In the remainder of the chapter we discuss methods to properly interface select peripheral devices to the Nano 33 BLE Sense. The list of interface rules we abide by are short but important. Violating any of the rules may damage the microcontroller, the peripheral, or lead to erratic processor operation. Here are the rules:

::: {.UnorderedList}
-   The Nano 33 BLE Sense is a 3.3 VDC processor.

-   Inputs (digital and analog) to the processor must not exceed the 3.3 VDC value.

-   The maximum current available from an output pin is 10 mA.

-   It is highly recommended that an external power supply be employed any time a peripheral component is connected.
:::
:::

With the list of rules in place, we investigate selected input and output devices.
:::

::: {#530263_1_En_3_Chapter.xhtml#Sec7 .section .Section1 .RenderAsSection1}
## [3.5 ]{.HeadingNumber}Input Devices {.Heading}

In this section we describe how to interface several input devices to the Arduino Nano 33 BLE Sense microcontroller.

::: {#530263_1_En_3_Chapter.xhtml#Sec8 .section .Section2 .RenderAsSection2}
### [3.5.1 ]{.HeadingNumber}Switches {.Heading}

::: {#530263_1_En_3_Chapter.xhtml#Par22 .Para}
Switches come in a variety of types. As a [system]{#530263_1_En_3_Chapter.xhtml#ITerm2} designer it is up to you to choose the appropriate switch for a specific application. Switch varieties commonly used in microcontroller applications are illustrated in Fig. [[3.3](#530263_1_En_3_Chapter.xhtml#Fig3)]{.InternalRef}a. Here is a brief summary of the different types:

::: {.UnorderedList}
-   **Slide switch:** A slide switch has two different positions: on and off. The switch is manually moved to one position or the other. For microcontroller applications, slide switches are available that fit in the profile of a common integrated circuit size dual inline package (DIP). A bank of four or eight DIP switches in a single package is commonly available. Slide switches are used to select specific parameters at system startup.

-   **Momentary contact pushbutton switch:** A momentary contact pushbutton switch comes in two varieties: normally closed (NC) and normally open (NO). A normally open switch, as its name implies, does not normally provide an electrical connection between its contacts. When the pushbutton portion of the switch is depressed, the connection between the two switch contacts is made. The connection is held as long as the switch is depressed. When the switch is released the connection is opened. The opposite is true for a normally closed switch. For microcontroller applications, pushbutton switches are available in a small tact type switch configuration.

-   **Push on/push off switches:** These switch types are also available in a normally open or normally closed configuration. For the normally open configuration, the switch is depressed to make connection between the two switch contacts. The pushbutton must be depressed again to release the connection.

-   **Hexadecimal rotary switches:** Small profile rotary switches are available for microcontroller applications. These switches commonly have sixteen rotary switch positions. As the switch is rotated to each position, a unique four bit binary code is provided at the switch contacts.
:::
:::

::: {#530263_1_En_3_Chapter.xhtml#Par27 .Para}
A common switch interface is shown in Fig. [[3.3](#530263_1_En_3_Chapter.xhtml#Fig3)]{.InternalRef}b. [This]{#530263_1_En_3_Chapter.xhtml#ITerm3} interface allows a logic one or zero to be properly introduced to a microcontroller input port pin. The basic interface consists of the switch in series with a current limiting resistor. The node between the switch and the resistor is provided to the microcontroller input pin. In the configuration shown, the resistor pulls the microcontroller input up to the supply voltage [![530263_1_En_3_Chapter_TeX_IEq1.png](https://i.imgur.com/9A1SI8w.jpeg)]{#530263_1_En_3_Chapter.xhtml#IEq1 .InlineEquation} of 3.3 VDC. When the switch is closed, the node is grounded and a logic zero is provided to the microcontroller input pin. To reverse the logic of the switch configuration, the position of the resistor and the switch is simply reversed.

![530263_1_En_3_Fig3_HTML.png](https://i.imgur.com/4tG67R1.jpeg)
:::

::: {#530263_1_En_3_Chapter.xhtml#Sec9 .section .Section3 .RenderAsSection3}
#### [3.5.1.1 ]{.HeadingNumber}Switch Debouncing {.Heading}

Mechanical switches do not make a [clean]{#530263_1_En_3_Chapter.xhtml#ITerm4} transition from one position (on) to another (off). When a switch is moved from one position to another, it makes and breaks contact multiple times. This activity may go on for tens of milliseconds. A microcontroller is relatively fast as compared to the action of the switch. Therefore, the microcontroller is able to recognize each switch bounce as a separate and erroneous transition.

To correct the switch bounce phenomena additional external hardware components may be used or software techniques may be employed. A hardware debounce circuit is illustrated in Fig. [[3.3](#530263_1_En_3_Chapter.xhtml#Fig3)]{.InternalRef}c. The node between the switch and the limiting resistor of the basic switch circuit is fed to a low pass filter (LPF) formed by the 470 k[![530263_1_En_3_Chapter_TeX_IEq2.png](https://i.imgur.com/0ackdD5.jpeg)]{#530263_1_En_3_Chapter.xhtml#IEq2 .InlineEquation} resistor and the capacitor. The LPF prevents abrupt changes (bounces) in the input signal from the microcontroller. The LPF is followed by a 74LVC14 Schmitt Trigger, which is simply an inverter equipped with hysteresis. This further limits the switch bouncing.

Switches may also be debounced using software techniques. This is accomplished by inserting a 30 to 50 ms lockout delay in the function responding to port pin changes. The delay prevents the microcontroller from responding to the multiple switch transitions related to bouncing.

You must carefully analyze a given design to determine if hardware or software switch debouncing techniques will be used. It is important to remember that all switches exhibit bounce phenomena and, therefore, must be debounced. An example is provided in the Arduino IDE under Examples --\> Digital --\> Debounce.
:::
:::
:::

::: {#530263_1_En_3_Chapter.xhtml#Sec10 .section .Section1 .RenderAsSection1}
## [3.6 ]{.HeadingNumber}Output Devices {.Heading}

An [external]{#530263_1_En_3_Chapter.xhtml#ITerm5} device should not be connected to a microcontroller without first performing careful interface analysis to ensure the voltage, current, and timing requirements of the microcontroller and the external device. In this section, we describe interface considerations for selected external devices. We begin with the interface for a single light emitting diode.

::: {#530263_1_En_3_Chapter.xhtml#Sec11 .section .Section2 .RenderAsSection2}
### [3.6.1 ]{.HeadingNumber}Light Emitting Diodes (LEDs) {.Heading}

An LED is typically used as a logic indicator to [ inform]{#530263_1_En_3_Chapter.xhtml#ITerm6} the presence of a logic one or a logic zero at a specific pin of a microcontroller. An LED has two leads: the anode or positive lead and the cathode or negative lead. To properly bias an []{#530263_1_En_3_Chapter.xhtml#ITerm7} LED, the anode lead must be biased at a level approximately 1.7--2.2 volts higher than the cathode lead. This specification is known as the forward voltage ([![530263_1_En_3_Chapter_TeX_IEq4.png](https://i.imgur.com/hN7OtZi.jpeg)]{#530263_1_En_3_Chapter.xhtml#IEq4 .InlineEquation}). The diode voltage and current specifications are usually provided by the manufacturer.

::: {#530263_1_En_3_Chapter.xhtml#Par34 .Para}
An example of an LED biasing circuit is provided in Fig. [[3.4](#530263_1_En_3_Chapter.xhtml#Fig4)]{.InternalRef}. A logic one is provided by the microcontroller to the base of a low power NPN transistor (e.g. PN2222 or MPQ2222) through a 10 k[![530263_1_En_3_Chapter_TeX_IEq8.png](https://i.imgur.com/1riZPxj.jpeg)]{#530263_1_En_3_Chapter.xhtml#IEq8 .InlineEquation}.

![530263_1_En_3_Fig4_HTML.png](https://i.imgur.com/XUHkedX.jpeg)
:::
:::

::: {#530263_1_En_3_Chapter.xhtml#Sec12 .section .Section2 .RenderAsSection2}
### [3.6.2 ]{.HeadingNumber}Serial Liquid Crystal Display (LCD) {.Heading}

An LCD is an output device to display text [information]{#530263_1_En_3_Chapter.xhtml#ITerm8}. LCDs come in a wide variety of configurations including multi--character, multi--line format. A 16 x 2 LCD format is common. That is, it has the capability of displaying two lines of 16 characters each. Each display character and line has a specific associated address. The characters are sent to the LCD via American Standard Code for Information Interchange (ASCII) format a single character at a time. The interface between the Nano 33 BLE Sense and a serial LCD was discussed in detail in Chap. [[[2]{.RefSource}](#530263_1_En_2_Chapter.xhtml)]{.ExternalRef} for the USART, SPI, and I2C serial communication systems.
:::
:::

::: {#530263_1_En_3_Chapter.xhtml#Sec13 .section .Section1 .RenderAsSection1}
## [3.7 ]{.HeadingNumber}Motor Control Concepts {.Heading}

::: {#530263_1_En_3_Chapter.xhtml#Par36 .Para}
In this section we investigate different types of DC motors. The motors may be used for locomotion, sensor positioning and scanning, or actuator positioning. For each type of motor we provide a basic theory of operation, microcontroller interface techniques, and example applications. Some of the types of motors available for different applications are shown in Fig. [[3.5](#530263_1_En_3_Chapter.xhtml#Fig5)]{.InternalRef}.

![530263_1_En_3_Fig5_HTML.png](https://i.imgur.com/xT1XLc1.jpeg)

::: {.UnorderedList}
-   **DC motor:** A [DC motor]{#530263_1_En_3_Chapter.xhtml#ITerm9} has a positive and negative terminal. When a DC power supply of suitable voltage and current rating is applied to the motor it will rotate. If the polarity of the supply is switched with reference to the motor terminals, the motor will rotate in the opposite direction. The speed of the motor is roughly proportional to the applied voltage up to the rated voltage of the motor.

-   **Servo motor:** A servo [motor]{#530263_1_En_3_Chapter.xhtml#ITerm10} provides a precision angular rotation for an applied pulse width modulation (PWM) duty cycle. As the duty cycle of the applied signal is varied, the angular displacement of the motor also varies. This allows the motor to be used in applications to change mechanical positions such as the steering angle of a wheel, position or scan a sensor, or as the main drive motor for a small robot.

-   **Stepper motor:** A stepper motor,[]{#530263_1_En_3_Chapter.xhtml#ITerm11} as its name implies, provides an incremental step change in rotation (typically 2.5 degrees per step) for a step change in control signal sequence. The motor is typically controlled by a two or four wire interface. For the four wire stepper motor, the microcontroller provides a four bit control sequence to rotate the motor clockwise. To turn the motor counterclockwise, the control sequence is reversed. The low power microcontroller control signals are interfaced to the motor via MOSFETs or power transistors to provide for the proper voltage and current requirements of the pulse sequence. The stepper motor may be used to position or scan robot sensors.

-   **Linear actuator** The linear [actuator]{#530263_1_En_3_Chapter.xhtml#ITerm12} is actually a rotating DC motor equipped with gears to translate rotational motion to linear motion. The linear actuator is used when repeatable linear motion, both push and pull, is required. They may be used in robots for steering or for sensor placement.
:::
:::

With this brief overview of motors complete, let's take a closer look at controlling DC motor speed. Methods for controlling other types of motors are provided in "Arduino I: Getting Started."

::: {#530263_1_En_3_Chapter.xhtml#Sec14 .section .Section2 .RenderAsSection2}
### [3.7.1 ]{.HeadingNumber}DC Motor {.Heading}

A direct current or DC motor is typically used in robot applications as the main source of locomotion. The power source for the DC motor is usually an onboard battery supply carried by the robot. We discuss the choice of battery supplies in the next chapter.

A [DC motor]{#530263_1_En_3_Chapter.xhtml#ITerm13} has a positive and negative terminal. When a DC power supply of suitable voltage and current rating is applied to the motor it will mechanically rotate. If the polarity of the supply is switched with reference to the motor terminals, the motor will rotate in the opposite direction. The speed of the motor is roughly proportional to the applied voltage up to the rated voltage of the motor.

::: {#530263_1_En_3_Chapter.xhtml#Sec15 .section .Section3 .RenderAsSection3}
#### [3.7.1.1 ]{.HeadingNumber}DC Motor Ratings {.Heading}

A DC motor is rated using [the]{#530263_1_En_3_Chapter.xhtml#ITerm14} following common parameters. The requirements of the robot are used to select an appropriate motor \[[[3](#530263_1_En_3_Chapter.xhtml#CR3)]{.CitationRef}, [[4](#530263_1_En_3_Chapter.xhtml#CR4)]{.CitationRef}\].

::: {#530263_1_En_3_Chapter.xhtml#Par45 .Para}
::: {.UnorderedList}
-   **voltage:** The maximum operating voltage of a motor is specified in DC volts. At this voltage the motor rotates at its maximum speed specified in revolutions per minute or RPM.

-   **current:** When rotating, a motor will draw current from the DC supply. The current, measured in amperes or amps, drawn depends on the load the motor is experiencing. DC motors have the following currents specified: starting current, no load operating current, and stall current. When a motor interface is designed it must withstand these different current values.

    ::: {#530263_1_En_3_Chapter.xhtml#Par48 .Para}
    ::: {.UnorderedList}
    -   **start current:** The start current is a surge current that occurs when a motor first starts. The surge is due to the motor overcoming mechanical inertia.

    -   **no load current:** The no load operating current is the value of current drawn when the motor is supplied its rated voltage and is not under a mechanical load.

    -   **stall current:** The stall current is the current drawn from the supply when the motor is stalled.
    :::
    :::

-   **speed:** The rotational speed of a motor is specified in revolutions per minute or RPM.

-   **torque:** Torque is the angular force delivered by the motor at a radius from the motor shaft. It is measured in MKS units of Newton--meters.

-   **speed versus torque:** DC motors have several different types of configurations: shunt, compound, and series. Generally speaking, as the motor shaft speed is decreased (e.g. via gears), the motor torque is increased.

-   **efficiency:** A DC motor converts DC electrical power into mechanical power. Ideally, we desire all of the electrical power to convert to mechanical power representing 100 percent efficiency. Efficiency is defined as the ratio of mechanical power to electrical power.

-   **gears:** Gears are used to reduce the shaft speed of a DC motor while increasing motor torque. Many DC motors are equipped with a gearbox for this purpose.
:::
:::
:::

::: {#530263_1_En_3_Chapter.xhtml#Sec16 .section .Section3 .RenderAsSection3}
#### [3.7.1.2 ]{.HeadingNumber}Unidirectional DC Motor Control {.Heading}

In this section we describe the interface between [the]{#530263_1_En_3_Chapter.xhtml#ITerm15} low power Arduino Nano 33 BLE Sense microcontroller and a DC motor. Recall a digital output pin of the Nano 33 BLE Sense is limited to 3.3 VDC with a current limit of 10 mA.

These voltage and current values are not sufficient to directly drive any type of motor. Therefore, an interface is required to boost the voltage and current to values consistent with a given motor specification. Two common methods of interface include using a Darlington transistor configuration or a power metal--oxide--semiconductor field--effect transistor (MOSFET).

::: {#530263_1_En_3_Chapter.xhtml#Par59 .Para}
**NPN Darlington Transistor** A Darlington configuration consists of [two]{#530263_1_En_3_Chapter.xhtml#ITerm16} transistors configured as shown in Fig. [[3.6](#530263_1_En_3_Chapter.xhtml#Fig6)]{.InternalRef}a. The emitter of the first transistor is connected to the base of the second transistor. This configuration provides for high current gain. When used as a motor interface, the low output current control signal from the Arduino is boosted to a current value suitable to drive a motor as shown in (b). A series of silicon diodes (1N4001), each with a voltage drop of 0.7 VDC, is used to drop the power supply voltage down to the motor supply voltage rating. Additionally, a reverse biased protection diode is placed across the diode string and motor \[[[2](#530263_1_En_3_Chapter.xhtml#CR2)]{.CitationRef}, [[5](#530263_1_En_3_Chapter.xhtml#CR5)]{.CitationRef}\].

![530263_1_En_3_Fig6_HTML.png](https://i.imgur.com/vhU2Qzu.jpeg)
:::

**Example:** The Dagu Magician is a popular, low--cost, two platform robot. The robot is equipped with two drive motors rated at 6 VDC with a maximum current rating of 400 mA and a stall current of 1.5 amp. In this application, the robot motors are powered from an external 9 VDC power supply via an umbilical cable.

::: {#530263_1_En_3_Chapter.xhtml#Par61 .Para}
We assume a Nano 33 output voltage of 3.3 VDC with a maximum output current of approximately 10 milliamps (we use 5 mA). With this information, the base resistor value for the Darlington transistor is calculated to be approximately 380 [![530263_1_En_3_Chapter_TeX_IEq9.png](https://i.imgur.com/uWVLlrM.jpeg)]{#530263_1_En_3_Chapter.xhtml#IEq9 .InlineEquation}s.

::: {#530263_1_En_3_Chapter.xhtml#Equ1 .Equation}
::: {.EquationWrapper}
::: {.EquationContent}
::: {.MediaObject}
![530263_1_En_3_Chapter_TeX_Equ1.png](https://i.imgur.com/jlDJV74.jpeg)
:::
:::
:::
:::

::: {#530263_1_En_3_Chapter.xhtml#Equ2 .Equation}
::: {.EquationWrapper}
::: {.EquationContent}
::: {.MediaObject}
![530263_1_En_3_Chapter_TeX_Equ2.png](https://i.imgur.com/VdkUywh.jpeg)
:::
:::
:::
:::

::: {#530263_1_En_3_Chapter.xhtml#Equ3 .Equation}
::: {.EquationWrapper}
::: {.EquationContent}
::: {.MediaObject}
![530263_1_En_3_Chapter_TeX_Equ3.png](https://i.imgur.com/0hp9Xtm.jpeg)
:::
:::
:::
:::

We use a close standard resistor value of 390 [![530263_1_En_3_Chapter_TeX_IEq10.png](https://i.imgur.com/GXdYUMv.jpeg)]{#530263_1_En_3_Chapter.xhtml#IEq10 .InlineEquation}s as shown in Fig. [[3.6](#530263_1_En_3_Chapter.xhtml#Fig6)]{.InternalRef}b. The NPN Darlington transistor (TIP 120) boosts the base current to a collector current value suitable to supply the motor. A separate interface circuit is required for each motor.
:::
:::

::: {#530263_1_En_3_Chapter.xhtml#Sec17 .section .Section3 .RenderAsSection3}
#### [3.7.1.3 ]{.HeadingNumber}DC Motor Speed Control--Pulse Width Modulation (PWM) {.Heading}

As previously mentioned, DC motor [speed]{#530263_1_En_3_Chapter.xhtml#ITerm17} may be varied by changing the applied DC voltage. However, [PWM]{#530263_1_En_3_Chapter.xhtml#ITerm18} control signal techniques may be combined with a motor interface to precisely control the motor speed. With a PWM control signal, a fixed frequency and duty cycle is provided to the motor interface. As shown in Fig. [[3.7](#530263_1_En_3_Chapter.xhtml#Fig7)]{.InternalRef} the duty cycle of the PWM signal will also be the percentage of the motor supply voltage, or effective DC voltage, applied to the motor and hence the percentage of rated full speed at which the motor will rotate.

::: {#530263_1_En_3_Chapter.xhtml#Par63 .Para}
The Nano 33 BLE Sense is equipped with five pulse width modulation (PWM) channels. PWM output can be provided on digital pins 1--13 and analog pins A0--A7. We limit use to pins 21, 23, 24, 27, and 28 as shown in the pinout diagram at Fig. [[[2.​2]{.RefSource}](#530263_1_En_2_Chapter.xhtml#Fig2)]{.ExternalRef}. The Nano 33 BLE sense baseline frequency of the PWM signal is set at 500 Hz.

![530263_1_En_3_Fig7_HTML.png](https://i.imgur.com/7TwB0OJ.jpeg)
:::
:::
:::
:::

::: {#530263_1_En_3_Chapter.xhtml#Sec18 .section .Section1 .RenderAsSection1}
## [3.8 ]{.HeadingNumber}Application: Dagu Magician Robot {.Heading}

::: {#530263_1_En_3_Chapter.xhtml#Par64 .Para}
An autonomous, maze navigating [robot]{#530263_1_En_3_Chapter.xhtml#ITerm19} is equipped with sensors to detect the presence of maze walls and navigate about the maze.^[^7]^ The robot has [no]{#530263_1_En_3_Chapter.xhtml#ITerm20} prior knowledge about the maze configuration. It uses the sensors and an onboard algorithm to determine the robot's next move. The overall goal is to navigate from the starting point of the maze to the end point as quickly as possible without bumping into maze walls as shown in Fig. [[3.8](#530263_1_En_3_Chapter.xhtml#Fig8)]{.InternalRef}. Maze walls are usually painted white to provide a good, light reflective surface; whereas, the maze floor is painted matte black to minimize light reflections.

![530263_1_En_3_Fig8_HTML.png](https://i.imgur.com/7m2xzcN.jpeg)
:::

::: {#530263_1_En_3_Chapter.xhtml#Par66 .Para}
It would be helpful to review the fundamentals of [robot]{#530263_1_En_3_Chapter.xhtml#ITerm21} steering and motor control. Figure [[3.9](#530263_1_En_3_Chapter.xhtml#Fig9)]{.InternalRef} illustrates the fundamental concepts. Robot steering is dependent upon the number of powered wheels and whether the wheels are equipped with unidirectional or bidirectional control. Additional robot steering configurations are possible. An H--bridge is typically required for bidirectional control of a DC motor. In this example we use unidirectional motor control.

![530263_1_En_3_Fig9_HTML.png](https://i.imgur.com/eWlGwmv.jpeg)
:::

We equip the Dagu Magician Robot (DG007) with an Arduino Nano 33 BLE Sense microcontroller for maze navigation. **Note:** The Nano 33 is a 3.3 VDC microcontroller. Care must be taken to ensure microcontroller inputs do not exceed 3.3 VDC and peripheral output device interfaces accommodate the 3.3 VDC output rated at a maximum of 10 mA DC current per input/output pin. Reference Fig. [[3.10](#530263_1_En_3_Chapter.xhtml#Fig10)]{.InternalRef}. The robot is controlled by two 6 VDC motors which independently drive a left and right wheel. A third non--powered ball provides tripod stability for the robot. We also equip the platform with three Sharp GP2Y0A21YK0F IR sensors [as]{#530263_1_En_3_Chapter.xhtml#ITerm22} shown in Fig. [[3.11](#530263_1_En_3_Chapter.xhtml#Fig11)]{.InternalRef}. The sensors are available from SparkFun Electronics ([[[www.​sparkfun.​com]{.RefSource}](http://www.sparkfun.com)]{.ExternalRef}). We mount the sensors on a bracket constructed from thin aluminum. Dimensions for [the]{#530263_1_En_3_Chapter.xhtml#ITerm23} bracket are provided in the figure. Alternatively, the IR sensors may be mounted to the robot platform using "L" brackets available from a local hardware store.

::: {#530263_1_En_3_Chapter.xhtml#Par68 .Para}
The characteristics of the sensor are provided in Fig. [[3.12](#530263_1_En_3_Chapter.xhtml#Fig12)]{.InternalRef}a. Note that the sensor provides the same output voltage for two different ranges. To remove this ambiguity, we mount the sensor bracket at the front of the robot facing forward such that the left sensor is monitoring maze wall presence on the right of the robot and vice versa. The ambiguity is resolved due to the sensor placement. That is, there is no way for the left or right sensor to be closer than 5 cm right or left maze wall respectively. Hence there is only a single range value for a given sensor output voltage as shown in Fig. [[3.12](#530263_1_En_3_Chapter.xhtml#Fig12)]{.InternalRef}b.

![530263_1_En_3_Fig10_HTML.png](https://i.imgur.com/6sAi7bu.jpeg)

![530263_1_En_3_Fig11_HTML.png](https://i.imgur.com/JNlzKfv.jpeg)

![530263_1_En_3_Fig12_HTML.png](https://i.imgur.com/bvOj8KA.jpeg)
:::

::: {#530263_1_En_3_Chapter.xhtml#Sec19 .section .Section2 .RenderAsSection2}
### [3.8.1 ]{.HeadingNumber}Requirements {.Heading}

The requirements for this project are simple, the robot must autonomously navigate through the maze without touching maze walls.
:::

::: {#530263_1_En_3_Chapter.xhtml#Sec20 .section .Section2 .RenderAsSection2}
### [3.8.2 ]{.HeadingNumber}Circuit Diagram {.Heading}

The circuit diagram for the robot is provided in Fig. [[3.13](#530263_1_En_3_Chapter.xhtml#Fig13)]{.InternalRef}. The three IR sensors (left, middle, and right) are mounted on the leading edge of the robot to detect maze walls. The output from the sensors is fed to three Arduino Nano 33 BLE Sense channels (ANALOG IN 0--2). The robot motors will be driven by pulse width modulated (PWM) channels (PWM: DIGITAL 9 and PWM: DIGITAL 10).

::: {#530263_1_En_3_Chapter.xhtml#Par71 .Para}
The Arduino Nano 33 BLE Sense is interfaced to the motors via a Darlington NPN transistor (TIP120) with enough drive capability to handle the maximum current requirements of the motor (1.5 A stall current). The robot is powered by a 9 VDC power supply. Three 1N4001 diodes are placed in series with the motor to reduce the motor supply voltage to approximately 6.9 VDC. The 9 VDC supply is also fed to a 5 VDC voltage regulator to power the Arduino Nano 33 via the [![530263_1_En_3_Chapter_TeX_IEq11.png](https://i.imgur.com/eb7YuWo.jpeg)]{#530263_1_En_3_Chapter.xhtml#IEq11 .InlineEquation} pin (pin 15). To save on battery expense, it is recommended to use a 9 VDC, 2A rated inexpensive, wall--mount power supply to provide power to the onboard 5 VDC voltage regulator. A power umbilical of braided wire may be used to provide power to the robot while navigating about the maze.

![530263_1_En_3_Fig13_HTML.png](https://i.imgur.com/EE6bxbM.jpeg)
:::

::: {#530263_1_En_3_Chapter.xhtml#Par72 .Para}
**Structure chart:** The structure chart for the robot project is provided in Fig. [[3.14](#530263_1_En_3_Chapter.xhtml#Fig14)]{.InternalRef}.

![530263_1_En_3_Fig14_HTML.png](https://i.imgur.com/FrhnLyF.jpeg)
:::

::: {#530263_1_En_3_Chapter.xhtml#Par73 .Para}
**UML activity diagrams:** The UML activity diagram for the robot is provided in Fig. [[3.15](#530263_1_En_3_Chapter.xhtml#Fig15)]{.InternalRef}.

![530263_1_En_3_Fig15_HTML.png](https://i.imgur.com/wZ6b1fb.jpeg)
:::
:::

::: {#530263_1_En_3_Chapter.xhtml#Sec21 .section .Section2 .RenderAsSection2}
### [3.8.3 ]{.HeadingNumber}Dagu Magician Robot Control Algorithm {.Heading}

In this section, we provide the basic framework for the robot control algorithm. The control algorithm will read the IR sensors attached to the Arduino Nano 33 ANALOG IN (pins 0--2). In response to the wall placement detected, the algorithm will render signals to turn the robot to avoid the maze walls. Provided in Fig. [[3.16](#530263_1_En_3_Chapter.xhtml#Fig16)]{.InternalRef} is a truth table that shows all possibilities of maze placement that the robot might encounter. A detected wall is represented with a logic one. An asserted motor action is also represented with a logic one. As previously mentioned, due to the physical placement of the sensor array on the trailing edge of the robot, the sensor detecting maze walls to the right of the robot is physically located on the left side of the robot and vice versa.

::: {#530263_1_En_3_Chapter.xhtml#Par75 .Para}
Given the interface circuit used, the robot motors may only be moved in the forward direction. To render a left turn, the left motor is stopped and the right motor is asserted until the robot completes the turn. To render a right turn, the opposite action is required.

![530263_1_En_3_Fig16_HTML.png](https://i.imgur.com/UpnZr5x.jpeg)
:::

The task in writing the control algorithm is to take the UML activity diagram provided in Fig. [[3.15](#530263_1_En_3_Chapter.xhtml#Fig15)]{.InternalRef} and the actions specified in the robot action truth table Fig. [[3.16](#530263_1_En_3_Chapter.xhtml#Fig16)]{.InternalRef} and transform both into an Arduino sketch. This may seem formidable but we take it a step at a time.

::: {#530263_1_En_3_Chapter.xhtml#Par77 .Para}
The control algorithm begins with Arduino Nano 33 pin definitions. Variables are then declared for the readings from the three IR sensors. The two required Arduino functions follow: setup() and loop(). In the setup() function, Arduino Nano 33 pins are declared as output. The loop() begins by reading the current value of the three IR sensors. The 512 value corresponds to a particular IR sensor range. This value may be adjusted to change the range at which the maze wall is detected. The read of the IR sensors is followed by an eight part if--else if statement. The statement contains a part for each row of the truth table provided in Fig. [[3.16](#530263_1_En_3_Chapter.xhtml#Fig16)]{.InternalRef}. For a given configuration of sensed walls, the appropriate wall detection LEDs are illuminated followed by commands to activate the motors (analogWrite) and illuminate the appropriate turn signals. The analogWrite command issues a signal from 0 to 3.3 VDC by sending a constant from 0 to 255 using pulse width modulation (PWM) techniques. The turn signal commands provide to actions: the appropriate turns signals are flashed and a 1.5 s total delay is provided. This provides the robot 1.5 s to render a turn. This delay may need to be adjusted during the testing phase.

![530263_1_En_3_Figa_HTML.png](https://i.imgur.com/WqIsmgT.jpeg)

![530263_1_En_3_Figb_HTML.png](https://i.imgur.com/v49yLvS.jpeg)

![530263_1_En_3_Figc_HTML.png](https://i.imgur.com/w5Xke2k.jpeg)

![530263_1_En_3_Figd_HTML.png](https://i.imgur.com/sQIRoDX.jpeg)

![530263_1_En_3_Fige_HTML.png](https://i.imgur.com/qRKoxwt.jpeg)

![530263_1_En_3_Figf_HTML.png](https://i.imgur.com/MGhtxAW.jpeg)
:::
:::

::: {#530263_1_En_3_Chapter.xhtml#Sec22 .section .Section2 .RenderAsSection2}
### [3.8.4 ]{.HeadingNumber}Testing the Control Algorithm {.Heading}

It is recommended that the algorithm be first tested without the entire robot platform. This may be accomplished by connecting the three IR sensors and LEDS to the appropriate pins on the Arduino Nano 33 as specified in Fig. [[3.13](#530263_1_En_3_Chapter.xhtml#Fig13)]{.InternalRef}. In place of the two motors and their interface circuits, two LEDs with the required interface circuitry may be used. The LEDs will illuminate to indicate the motors would be on during different test scenarios. Once this algorithm is fully tested in this fashion, the Arduino Nano 33 may be mounted to the robot platform and connected to the motors. Full up testing in the maze may commence. Enjoy!
:::
:::

::: {#530263_1_En_3_Chapter.xhtml#Sec23 .section .Section1 .RenderAsSection1}
## [3.9 ]{.HeadingNumber}Summary {.Heading}

We began this chapter with exploring the power source requirements for the Arduino Nano 33 BLE Sense. We then examined how to probably provide power from several sources. The remainder of the chapter provided information on how to interface selected input, output, and high power DC devices to the Nano processor.
:::

::: {#530263_1_En_3_Chapter.xhtml#Sec24 .section .Section1 .RenderAsSection1}
## [3.10 ]{.HeadingNumber}Problems {.Heading}

::: {#530263_1_En_3_Chapter.xhtml#Par80 .Para}
::: {.OrderedList}
1.  ::: {.ItemNumber}
    1\.
    :::

    ::: {.ItemContent}
    List the interface guidelines for the Arduino Nano 33 BLE Sense.
    :::

    ::: {.ClearBoth}
     
    :::

2.  ::: {.ItemNumber}
    2\.
    :::

    ::: {.ItemContent}
    What will happen if a microcontroller is used outside of its prescribed operating envelope?
    :::

    ::: {.ClearBoth}
     
    :::

3.  ::: {.ItemNumber}
    3\.
    :::

    ::: {.ItemContent}
    What are the power requirements for the Arduino Nano 33 BLE Sense? Describe options for providing power to the microcontroller.
    :::

    ::: {.ClearBoth}
     
    :::

4.  ::: {.ItemNumber}
    4\.
    :::

    ::: {.ItemContent}
    What is the role and function of a voltage regulator?
    :::

    ::: {.ClearBoth}
     
    :::

5.  ::: {.ItemNumber}
    5\.
    :::

    ::: {.ItemContent}
    Design a regulated battery pack for the Arduino Nano 33 BLE Sense. Specify all components. How long will the battery pack you designed power the Arduino Nano 33 BLE Sense.
    :::

    ::: {.ClearBoth}
     
    :::

6.  ::: {.ItemNumber}
    6\.
    :::

    ::: {.ItemContent}
    Can an LED with a series limiting resistor be directly driven by the Nano 33 BLE Sense microcontroller? Explain.
    :::

    ::: {.ClearBoth}
     
    :::

7.  ::: {.ItemNumber}
    7\.
    :::

    ::: {.ItemContent}
    What is switch bounce? Describe two techniques to minimize switch bounce. What happens if a switch is not debounced.
    :::

    ::: {.ClearBoth}
     
    :::

8.  ::: {.ItemNumber}
    8\.
    :::

    ::: {.ItemContent}
    What function within the Arduino IDE provides for PWM? Explain all required variables for the function.
    :::

    ::: {.ClearBoth}
     
    :::
:::
:::
:::

```{=html}
<aside aria-labelledby="Bib1Heading" class="Bibliography" id="Bib1">
```
::: {.bibliography role="doc-bibliography"}
::: {#530263_1_En_3_Chapter.xhtml#Bib1Heading .Heading}
References
:::

1.  ::: {.CitationNumber}
    1\.
    :::

    ::: {#530263_1_En_3_Chapter.xhtml#CR1 .CitationContent}
    Arduino homepage, [[[www.​arduino.​cc]{.RefSource}](http://www.arduino.cc)]{.ExternalRef}
    :::

2.  ::: {.CitationNumber}
    2\.
    :::

    ::: {#530263_1_En_3_Chapter.xhtml#CR2 .CitationContent}
    Boylestad, R. and L. Nashelsky, (1982). *Electronic Devices and Circuit Theory*, third edition, Prentice--Hall.
    :::

3.  ::: {.CitationNumber}
    3\.
    :::

    ::: {#530263_1_En_3_Chapter.xhtml#CR3 .CitationContent}
    Clark D. and M. Owings, (2003). *Building Robot Drive Trains*, McGraw Hill.
    :::

4.  ::: {.CitationNumber}
    4\.
    :::

    ::: {#530263_1_En_3_Chapter.xhtml#CR4 .CitationContent}
    Fitzgerald, A., C. Kingsley, and S. Umans, (2003). *Electric Machinery*, sixth edition, McGraw Hill.
    :::

5.  ::: {.CitationNumber}
    5\.
    :::

    ::: {#530263_1_En_3_Chapter.xhtml#CR5 .CitationContent}
    Sedra, A and K. Smith, (2004). *Microelectronic Circuits*, fifth edition, Oxford University Press.
    :::

6.  ::: {.CitationNumber}
    6\.
    :::

    ::: {#530263_1_En_3_Chapter.xhtml#CR6 .CitationContent}
    *TIP31C Power Transistors (NPN),* ST Microelectronics, st.com, 2006.
    :::

7.  ::: {.CitationNumber}
    7\.
    :::

    ::: {#530263_1_En_3_Chapter.xhtml#CR7 .CitationContent}
    *TIP32C Power Transistors (PNP),* ST Microelectronics, st.com, 2006.
    :::

8.  ::: {.CitationNumber}
    8\.
    :::

    ::: {#530263_1_En_3_Chapter.xhtml#CR8 .CitationContent}
    *TIP120, TIP121, TIP122 (NPN); TIP125, TIP126, TIP127 (PNP) plastic medium--power complementary silicon transistors (TIP120D),* ON Semiconductor, onsemi.com, 2007.
    :::
:::

```{=html}
</aside>
```
```{=html}
<aside aria-label="Footnotes" class="FootnoteSection" epub:type="footnotes">
```
::: {.Heading}
Footnotes
:::

::: {.Footnote}
[[1](#530263_1_En_3_Chapter.xhtml#Fn1_source)]{.FootnoteNumber}

::: {.ClearBoth}
 
:::
:::

::: {.Footnote}
[[2](#530263_1_En_3_Chapter.xhtml#Fn2_source)]{.FootnoteNumber}

::: {.ClearBoth}
 
:::
:::

```{=html}
</aside>
```
:::
:::

[]{#530263_1_En_4_Chapter.xhtml}

::: {.chapter role="doc-chapter"}
::: {.ChapterContextInformation}
::: {#530263_1_En_4_Chapter.xhtml#Chap4 .ContextInformation}
::: {.ChapterCopyright}
© The Author(s), under exclusive license to Springer Nature Switzerland AG 2023
:::

[S. F. Barrett]{.ContextInformationAuthorEditorNames}[[Arduino V: Machine Learning]{.BookTitle}]{.ContextInformationBookTitles}[[Synthesis Lectures on Digital Circuits & Systems]{.SeriesTitle lang="en"}]{.ContextInformationSeries}[<https://doi.org/10.1007/978-3-031-21877-4_4>]{.ChapterDOI}
:::
:::

`<!--Begin Abstract-->`{=html}

::: {.MainTitleSection}
# 4. Artificial Intelligence and Machine Learning {.ChapterTitle lang="en"}
:::

::: {.AuthorGroup}
::: {.AuthorNames}
[[Steven F. Barrett]{.AuthorName}^[1](#530263_1_En_4_Chapter.xhtml#Aff3) [[ ]{.ContactIcon}](#530263_1_En_4_Chapter.xhtml#ContactOfAuthor2)^]{.Author}
:::

::: {.Affiliations}
::: {#530263_1_En_4_Chapter.xhtml#Aff3 .Affiliation}
[(1)]{.AffiliationNumber}

::: {.AffiliationText}
Department of Electrical and Computer Engineering, University of Wyoming, Laramie, WY, USA
:::
:::

::: {.ClearBoth}
 
:::
:::

::: {.Contacts}
::: {#530263_1_En_4_Chapter.xhtml#ContactOfAuthor2 .Contact}
::: {.ContactIcon}
 
:::

::: {.ContactAuthorLine}
[Steven F. Barrett]{.AuthorName}
:::

::: {.ContactAdditionalLine}
[Email: ]{.ContactType}<steveb@uwyo.edu>
:::
:::
:::
:::

`<!--End Abstract-->`{=html}

::: {.Fulltext}
::: {#530263_1_En_4_Chapter.xhtml#Par2 .Para}
**Objectives:** After reading this chapter, the reader should be able to:

::: {.UnorderedList}
-   Describe the relationship between the concepts of artificial intelligence, machine learning, and deep learning;

-   Provide a list of applications within the categories of artificial intelligence, machine learning, and deep learning;

-   Sketch a timeline of key developments within the world of artificial intelligence;

-   Provide a summary of the theory supporting a K nearest neighbor (KNN) application;

-   Design and implement a KNN application on an Arduino processor.

-   Provide a summary of the theory supporting decision tree design and analysis; and

-   Design and implement a decision tree on an Arduino processor.
:::
:::

::: {#530263_1_En_4_Chapter.xhtml#Sec1 .section .Section1 .RenderAsSection1}
## [4.1 ]{.HeadingNumber}Overview {.Heading}

With the introduction to the Arduino IDE (Chap. [[[1]{.RefSource}](#530263_1_En_1_Chapter.xhtml)]{.ExternalRef}), the Nano 33 BLE Sense (Chap. [[[2]{.RefSource}](#530263_1_En_2_Chapter.xhtml)]{.ExternalRef}), and interface techniques (Chap. [[[3]{.RefSource}](#530263_1_En_3_Chapter.xhtml)]{.ExternalRef}) complete; we concentrate on Artificial Intelligence (AI) and Machine Learning (ML) concepts and applications for microcontroller--based systems for the remainder of the book.

In a recent release, the Arduino Team stated "Arduino is on a mission to make machine learning simple enough for everyone to use \[[[[https://​www.​blog.​arduino.​cc]{.RefSource}](https://www.blog.arduino.cc)]{.ExternalRef}\]." Those acquainted with AI and ML concepts might counter these concepts are most appropriate for more powerful computing platforms. However, recent developments have allowed certain AI and ML applications to be executed on microcontrollers once they have been trained. We will see the training task, in certain applications, may also be accomplished on a microcontroller. Furthermore, we explore applications that lend themselves to remote, battery operated microcontroller--based AI and ML applications \[[[4](#530263_1_En_4_Chapter.xhtml#CR4)]{.CitationRef}\]. In the remainder of the book we limit our discussions to AI and ML techniques specifically for microcontrollers. The intent is to introduce the concepts and allow you to practice on low cost, accessible Arduino hardware and software.

::: {#530263_1_En_4_Chapter.xhtml#Par12 .Para}
Figure [[4.1](#530263_1_En_4_Chapter.xhtml#Fig1)]{.InternalRef} illustrates the relationship between Artificial Intelligence, Machine Learning, and Deep Learning. The goal of Artificial Intelligence is for computing machinery to imitate and mimic intelligent human behavior. Some trace the origins of AI back to 1300 BCE \[[[4](#530263_1_En_4_Chapter.xhtml#CR4)]{.CitationRef}\]. We limit our historical review to AI developments within the [![530263_1_En_4_Chapter_TeX_IEq1.png](https://i.imgur.com/k2TLIWc.jpeg)]{#530263_1_En_4_Chapter.xhtml#IEq1 .InlineEquation} century and forward. Following a brief historical review, this chapter explores the concept of K Nearest Neighbors (KNN) and Decision Tree classification techniques.

![530263_1_En_4_Fig1_HTML.png](https://i.imgur.com/pFyCvHg.jpeg)
:::

Within the realm of AI, we explore Fuzzy Logic in Chap. [[[5]{.RefSource}](#530263_1_En_5_Chapter.xhtml)]{.ExternalRef}. The overall goal of fuzzy logic is to control a system using a series of rule statements of the form "IF--THEN." The input conditions of the "IF" statement, the antecedents, are obtained by taking precise, crisp input information from input sensors and transducers and mapping them to fuzzy input linguistic (word) variables. This is called the fuzzification step. The "THEN" portion of the rule, the consequences, are the control commands back to the system. Again, linguistic variables are used to describe the control output. The control output is defuzzified to obtain precise, crisp output control signals. The mapping of inputs to outputs via the "IF--THEN" statements are provided by the system designer.

Machine Learning is a category under the broad umbrella of Artificial Intelligence. Its goal is to develop algorithms to control a process. The developed algorithm undergoes a learning step where input data is used to confirm or develop desired controller outputs. During the learning process the algorithm adjusts certain weights and biases to improve the performance of the algorithm. Within the realm of ML we explore decision trees, K nearest neighbor (KNN) algorithms, perceptrons, artificial neurons, and artificial neural networks (ANNs). We explore decision trees and KNN applications in this chapter and the remaining topics in Chap. [[[6]{.RefSource}](#530263_1_En_6_Chapter.xhtml)]{.ExternalRef}.

Deep Learning involves the development of algorithms using multi--layer artificial neural networks (ANN). The concepts provided in Chap. [[[6]{.RefSource}](#530263_1_En_6_Chapter.xhtml)]{.ExternalRef} will allow the reader to develop deep learning networks. We conclude Chap. [[[6]{.RefSource}](#530263_1_En_6_Chapter.xhtml)]{.ExternalRef} with a brief introduction to advanced AI and ML tools and applications.
:::

::: {#530263_1_En_4_Chapter.xhtml#Sec2 .section .Section1 .RenderAsSection1}
## [4.2 ]{.HeadingNumber}A Brief History of AI and ML Developments {.Heading}

Provided in Fig. [[4.2](#530263_1_En_4_Chapter.xhtml#Fig2)]{.InternalRef} is a summary of key developments in artificial intelligence and machine learning. Admittedly, many [contributions]{#530263_1_En_4_Chapter.xhtml#ITerm1} are not on the timeline.^[^8]^

::: {#530263_1_En_4_Chapter.xhtml#Par18 .Para}
We begin with the work of George Boole in the development of Boolean Algebra to describe the "fundamental laws of those operations of the mind." In the late 1930s Claude Shannons thesis described how to use Boolean Algebra to optimize telephone communications routing. This led to the common use of Boolean Algebra's common use in the design of early computers.

![530263_1_En_4_Fig2_HTML.png](https://i.imgur.com/BmG3oJt.jpeg)
:::

Several years later in the midst of World War II McCulloch and Pitts developed the first mathematical model of the neuron. In 1949 Donald Hebb described how synapses between neurons are strengthened when used repeatedly. In 1956 Dartmouth College hosted the first AI Conference. The conference gathered leading AI scientists for discussions lasting two months. A year later Frank Rosenblatt developed the model and implementation of the single perceptron. We explore this model in some detail later in the book.

In 1959 Arthur Samuel developed the basic concepts of machine learning including supervised and unsupervised learning techniques. In the mid--1960s Alexey Ivakhnenko conducted early work in multi--layered neural networks which was termed "Deep Learning" approximately two decades later. Around the same time, Lofti Zadeh developed the fundamental and mathematical concepts of Fuzzy Logic. We explore Fuzzy Logic in some detail later in the book.

In 1969 Minsky and Papert identified and demonstrated the limitations of the perceptron model in solving nonlinear classification models. This spurred additional work to develop neural networks capable of solving nonlinear classification models. Five years later Paul Werbos provided foundational, theoretical work for backpropagation in his Ph.D. dissertation. In 1986 Rumelhart, McClelland, and other associated researchers developed and applied concepts of machine learning with backpropagation.

We now fast forward to 2005. At this time the Arduino Team released the first Arduino processor based on concepts of open source hardware and software which launched a global movement for accessible computing. Following this same philosophy, in a recent release, the Arduino Team stated "Arduino is on a mission to make machine learning simple enough for everyone to use \[[[[https://​www.​blog.​arduino.​cc]{.RefSource}](https://www.blog.arduino.cc)]{.ExternalRef}\]." In 2019 the Arduino Team releases the Nano 33 BLE Sense processor providing for accessible ML and AI.

In the remainder of this book we explore the use of Arduino processors for AI and ML applications. In this chapter we explore the concepts of K Nearest Neighbors (KNN) and Decision Trees. We explore Fuzzy Logic in Chap. [[[5]{.RefSource}](#530263_1_En_5_Chapter.xhtml)]{.ExternalRef}, Perceptrons and Neural Networks in Chap. [[[6]{.RefSource}](#530263_1_En_6_Chapter.xhtml)]{.ExternalRef}. We conclude Chap. [[[6]{.RefSource}](#530263_1_En_6_Chapter.xhtml)]{.ExternalRef} with a brief introduction to advanced AI and ML deep learning tools and applications.
:::

::: {#530263_1_En_4_Chapter.xhtml#Sec3 .section .Section1 .RenderAsSection1}
## [4.3 ]{.HeadingNumber}K Nearest Neighbors {.Heading}

The overall goal of [the]{#530263_1_En_4_Chapter.xhtml#ITerm2} K Nearest Neighbors or KNN technique is to classify a new object by comparing its features to an established dataset. It is based on the premise that objects with similar features and a shared classification will cluster together when mapped into a feature space. This technique of classifying objects can be traced back to the work Fix and Hodges in 1951 \[[[6](#530263_1_En_4_Chapter.xhtml#CR6)]{.CitationRef}\]. The KNN technique is considered a supervised classification technique. That is a KNN algorithm is provided a training set of objects with a known classification before it can be used to classify objects outside of the training set.

For example, in Fig. [[4.3](#530263_1_En_4_Chapter.xhtml#Fig3)]{.InternalRef} a color classifier is illustrated. The algorithm was trained with a set of ten data points for each desired, known classification (color). In this example, the Red, Green, and Blue (RGB) color component of each sample was stored along with its corresponding classification or tag.

::: {#530263_1_En_4_Chapter.xhtml#Par26 .Para}
Once trained, a new non--classified object's RGB components are submitted to the algorithm to determine its classification. The RGB components are compared to the nearest "K" neighboring RGB components already in the tagged data set. In the figure the algorithm is using a K value of three to determine the distance to the three closest neighbors. Three common distance measures are shown including the Euclidean distance, the Manhattan distance, and the Minkowski distance measures (IBM).

![530263_1_En_4_Fig3_HTML.png](https://i.imgur.com/H1j8dLG.jpeg)
:::

::: {#530263_1_En_4_Chapter.xhtml#Par27 .Para}
An Arduino sketch for a KNN based color classifier is provided below. It is adapted from the "ColorClassifer" within the Arduino KNN Library. The UML activity diagram for the sketch is provided in Fig. [[4.4](#530263_1_En_4_Chapter.xhtml#Fig4)]{.InternalRef}. The color [classifier]{#530263_1_En_4_Chapter.xhtml#ITerm3} uses the ADPS^[^9]^ system onboard the Arduino Nano 33 BLE Sense.

![530263_1_En_4_Fig4_HTML.png](https://i.imgur.com/iM7GAUl.jpeg)
:::

::: {#530263_1_En_4_Chapter.xhtml#Par29 .Para}
To test the sketch, download the Arduino KNN Library from the Tools [![530263_1_En_4_Chapter_TeX_IEq2.png](https://i.imgur.com/eq6XZAD.jpeg)]{#530263_1_En_4_Chapter.xhtml#IEq2 .InlineEquation} Manage Library tab within the Arduino IDE. Color samples for red, green, and blue may be constructed from color construction paper. Compile and upload the sketch to the Arduino Nano 33 BLE Sense. Follow the user prompts provided in the Serial Monitor to train and then use the color classifier.

![530263_1_En_4_Figa_HTML.png](https://i.imgur.com/hPW4yXE.jpeg)

![530263_1_En_4_Figb_HTML.png](https://i.imgur.com/22SSjFb.jpeg)

![530263_1_En_4_Figc_HTML.png](https://i.imgur.com/n7tBq1T.jpeg)
:::
:::

::: {#530263_1_En_4_Chapter.xhtml#Sec4 .section .Section1 .RenderAsSection1}
## [4.4 ]{.HeadingNumber}Decision Trees {.Heading}

Decision Trees are a powerful, graphical method to illustrate a complex decision making process. The decision tree is constructed using supervised learning. That is, a set of [observations]{#530263_1_En_4_Chapter.xhtml#ITerm4} or objects with accompanying outcomes or classifications are used to systematically construct the decision tree.^[^10]^

The data set consists of a number of [attributes]{#530263_1_En_4_Chapter.xhtml#ITerm5} or features to describe an object for classification. Each attribute has a series of values to describe the feature. Accompanying the attributes and values is an observed outcome or classification.

The data set to construct the decision tree may be extracted from an existing database or it may be prepared by an expert in the field. Once the decision tree has been constructed it may be used to render decisions or classifications with new observations outside the original data set.

::: {#530263_1_En_4_Chapter.xhtml#Par34 .Para}
J.R. Quinlan in the classic work "Induction of Decision Trees" provides an example to determine whether or not to play tennis on a given day based on a series of weather attributes and prior decisions made as shown in Fig. [[4.5](#530263_1_En_4_Chapter.xhtml#Fig5)]{.InternalRef} \[[[5](#530263_1_En_4_Chapter.xhtml#CR5)]{.CitationRef}\].

![530263_1_En_4_Fig5_HTML.png](https://i.imgur.com/JBv2gw4.jpeg)
:::

The attributes to describe the day include: outlook, temperature, humidity, and windy. The values for each attribute are provided in the figure. The data set consists of series of 14 observations taken on different Saturdays. For each observation, the observed value of each attribute was recorded and whether or not tennis was played on that day. The goal is to develop a decision tree to process the attribute values on a new day, not in the data set, to determine if tennis will be played or not.

This example may seem trivial. You might counter: "I do not need a decision tree to determine whether to play tennis or not." However, the example serves as an approachable template to learn and implement decision tree fundamentals. Decision trees may be used for a wide variety of applications including weather prediction, medical diagnosis, and robot control.

::: {#530263_1_En_4_Chapter.xhtml#Par37 .Para}
To begin decision tree construction, statistics of the data set are gathered. These statistics may be manually gathered or determined using the decision tree algorithm. In this example, we use a mixture of both approaches and also a complement of arrays to store the collected information. As shown in Fig. [[4.6](#530263_1_En_4_Chapter.xhtml#Fig6)]{.InternalRef}, the following arrays are used to implement the decision tree:

::: {.UnorderedList}
-   dt_array: contains the observation data set,

-   attrib_array: contains attributes and the associated values,

-   attr_cnt_array: the count for each attribute resulting in play tennis ("Y") and no play ("N"),

-   entropy_array: contains the entropy calculation for each attribute, and

-   tree_result_array: contains the resulting decision tree.
:::

![530263_1_En_4_Fig6_HTML.png](https://i.imgur.com/Au6Waor.jpeg)
:::

::: {#530263_1_En_4_Chapter.xhtml#Par43 .Para}
It is important to note that many different data structures may be used to construct a decision tree. Examples include structures, binary trees, and recursive algorithms. We use a one--dimensional array (tree_result_array) to store the decision tree. The array, although one--dimensional, may be used to store and construct a two--dimensional tree as shown in Fig. [[4.7](#530263_1_En_4_Chapter.xhtml#Fig7)]{.InternalRef}.

![530263_1_En_4_Fig7_HTML.png](https://i.imgur.com/gAtCvrH.jpeg)
:::

The base of the tree is [called]{#530263_1_En_4_Chapter.xhtml#ITerm6} the root node. Each node contains the name of the attribute and three accompanying value fields (left, center, and right). Each of the fields has a fixed relationship to its children nodes. The fields within the children nodes also have a fixed relationship to its grandchildren nodes. As shown in the figure, the structure of the tree is fixed and the relationship between the root nodes, children nodes, and grandchildren nodes are known and fixed.

::: {#530263_1_En_4_Chapter.xhtml#Par45 .Para}
The Unified Modeling language (UML) activity diagram or flowchart for developing the decision tree algorithm is provided in Fig. [[4.8](#530263_1_En_4_Chapter.xhtml#Fig8)]{.InternalRef}.

![530263_1_En_4_Fig8_HTML.png](https://i.imgur.com/fExBgae.jpeg)
:::

The decision tree is assembled step--by--step starting at the root node. The root node is the attribute resulting in the [lowest]{#530263_1_En_4_Chapter.xhtml#ITerm7} value of entropy (disorder). The entropy calculation for a given attribute is shown in Fig. [[4.9](#530263_1_En_4_Chapter.xhtml#Fig9)]{.InternalRef}. The fields of the root node (left, center, and right) contain the names of the values associated with the root attribute. The count for each attribute value resulting in the play/no play determine is provided in the attribute_count_array.

Once the root node is loaded into the result array (tree_result_array); the left, center, and right fields are examined to establish the contents of the children nodes. The children nodes may contain the next available attribute with the lowest entropy or leaf values. The children node fields are then examined to establish the contents of the grandchildren nodes. This process continues until no attributes are left to form the tree. As the decision tree is constructed, each attribute performs a decision step to split data into smaller sets and reduce the disorder of the data set.

The resulting decision tree for playing tennis is provided in Fig. [[4.10](#530263_1_En_4_Chapter.xhtml#Fig10)]{.InternalRef}. Note the attribute for temperature does not appear in the final decision tree. The algorithm developed excluded attributes with a entropy greater than 0.90. Examination of the temperature attribute in the attribute_count_array shows this feature does not impact the decision to play tennis.

::: {#530263_1_En_4_Chapter.xhtml#Par49 .Para}
The Arduino sketch to implement the decision tree for tennis play follows. It was implemented using the Arduino Nano 33 BLE Sense.

![530263_1_En_4_Fig9_HTML.png](https://i.imgur.com/oQMKyYu.jpeg)

![530263_1_En_4_Fig10_HTML.png](https://i.imgur.com/tbYNkwt.jpeg)

![530263_1_En_4_Figd_HTML.png](https://i.imgur.com/PMUgjLI.jpeg)

![530263_1_En_4_Fige_HTML.png](https://i.imgur.com/xuzANPh.jpeg)

![530263_1_En_4_Figf_HTML.png](https://i.imgur.com/8Cp52sW.jpeg)

![530263_1_En_4_Figg_HTML.png](https://i.imgur.com/HaUs4CY.jpeg)

![530263_1_En_4_Figh_HTML.png](https://i.imgur.com/9Nhhutg.jpeg)

![530263_1_En_4_Figi_HTML.png](https://i.imgur.com/8Zoe15G.jpeg)

![530263_1_En_4_Figj_HTML.png](https://i.imgur.com/7jXNeeg.jpeg)

![530263_1_En_4_Figk_HTML.png](https://i.imgur.com/jgQrgYQ.jpeg)

![530263_1_En_4_Figl_HTML.png](https://i.imgur.com/r1yTC0J.jpeg)

![530263_1_En_4_Figm_HTML.png](https://i.imgur.com/Da4sT1p.jpeg)
:::

Once the tree is assembled, it may be used to process new attribute values outside of the original data set to make a decision using tree traversal techniques. We explore this next in the chapter Applications section.
:::

::: {#530263_1_En_4_Chapter.xhtml#Sec5 .section .Section1 .RenderAsSection1}
## [4.5 ]{.HeadingNumber}Application: KNN Classifier {.Heading}

Earlier in the chapter we explored a KNN color classifier for three colors (Red, Green, and Blue). Expand the example to eight different colors. Explore the tradeoffs of varying the value of "k" and the number samples taken of each color sample.
:::

::: {#530263_1_En_4_Chapter.xhtml#Sec6 .section .Section1 .RenderAsSection1}
## [4.6 ]{.HeadingNumber}Application: Decision Trees {.Heading}

In the previous section we explored the design and implementation of a decision tree. In this section we extend our results.

::: {#530263_1_En_4_Chapter.xhtml#Par53 .Para}
Activities:

::: {.OrderedList}
1.  ::: {.ItemNumber}
    1\.
    :::

    ::: {.ItemContent}
    The function "print_tree_result_array" provided a basic depiction of the resulting decision tree. Modify this function to depict the interconnections between different tree nodes.
    :::

    ::: {.ClearBoth}
     
    :::

2.  ::: {.ItemNumber}
    2\.
    :::

    ::: {.ItemContent}
    Provided below is the "loop" portion of the decision tree code provided in the previous section. The "loop" portion provides [for]{#530263_1_En_4_Chapter.xhtml#ITerm8} tree traversal and decision making. Combine the two portions of the code and test the tree. Add the "loop" portion of the code to the UML activity diagram provided in Fig. [[4.8](#530263_1_En_4_Chapter.xhtml#Fig8)]{.InternalRef}.
    :::

    ::: {.ClearBoth}
     
    :::

3.  ::: {.ItemNumber}
    3\.
    :::

    ::: {.ItemContent}
    Develop a new decision tree using a data set of your choosing.
    :::

    ::: {.ClearBoth}
     
    :::
:::

![530263_1_En_4_Fign_HTML.png](https://i.imgur.com/opxfTbI.jpeg)

![530263_1_En_4_Figo_HTML.png](https://i.imgur.com/paRB19p.jpeg)
:::
:::

::: {#530263_1_En_4_Chapter.xhtml#Sec7 .section .Section1 .RenderAsSection1}
## [4.7 ]{.HeadingNumber}Summary {.Heading}

We began this chapter with an overview of Artificial Intelligence and Machine Learning applications and historical developments. We then explored to classification techniques: K Nearest Neighbors and Decision Trees. We concentrate on additional Artificial Intelligence and Machine Learning concepts and applications for microcontroller--based systems for the remainder of the book.
:::

::: {#530263_1_En_4_Chapter.xhtml#Sec8 .section .Section1 .RenderAsSection1}
## [4.8 ]{.HeadingNumber}Problems {.Heading}

::: {#530263_1_En_4_Chapter.xhtml#Par58 .Para}
::: {.OrderedList}
1.  ::: {.ItemNumber}
    1\.
    :::

    ::: {.ItemContent}
    Choose one innovation in recent AI and ML history. Explore the innovation and write a one--page paper. Provide a brief summary of the innovation's background theory and its main contribution to AI and ML science.
    :::

    ::: {.ClearBoth}
     
    :::

2.  ::: {.ItemNumber}
    2\.
    :::

    ::: {.ItemContent}
    In the KNN algorithm what is the significance in the choice of "K"? What is the significance of choosing a smaller or larger value of "K"?
    :::

    ::: {.ClearBoth}
     
    :::

3.  ::: {.ItemNumber}
    3\.
    :::

    ::: {.ItemContent}
    In the KNN algorithm how will algorithm respond to a sample it has not been trained for?
    :::

    ::: {.ClearBoth}
     
    :::

4.  ::: {.ItemNumber}
    4\.
    :::

    ::: {.ItemContent}
    In the KNN algorithm, what are the tradeoffs of using a smaller or larger training set?
    :::

    ::: {.ClearBoth}
     
    :::

5.  ::: {.ItemNumber}
    5\.
    :::

    ::: {.ItemContent}
    Earlier in the chapter we explored a KNN color classifier for three colors (Red, Green, and Blue). Expand the example to eight different colors.
    :::

    ::: {.ClearBoth}
     
    :::

6.  ::: {.ItemNumber}
    6\.
    :::

    ::: {.ItemContent}
    What is a decision tree? How is it constructed?
    :::

    ::: {.ClearBoth}
     
    :::

7.  ::: {.ItemNumber}
    7\.
    :::

    ::: {.ItemContent}
    What is entropy? What does it represent? How is it calculated?
    :::

    ::: {.ClearBoth}
     
    :::

8.  ::: {.ItemNumber}
    8\.
    :::

    ::: {.ItemContent}
    The Decision Tree function "print_tree_result_array" provided a basic depiction of the resulting decision tree. Modify this function to depict the interconnections between different tree nodes.
    :::

    ::: {.ClearBoth}
     
    :::

9.  ::: {.ItemNumber}
    9\.
    :::

    ::: {.ItemContent}
    Develop a new decision tree using a data set of your choosing.
    :::

    ::: {.ClearBoth}
     
    :::
:::
:::
:::

```{=html}
<aside aria-labelledby="Bib1Heading" class="Bibliography" id="Bib1">
```
::: {.bibliography role="doc-bibliography"}
::: {#530263_1_En_4_Chapter.xhtml#Bib1Heading .Heading}
References
:::

1.  ::: {.CitationNumber}
    1\.
    :::

    ::: {#530263_1_En_4_Chapter.xhtml#CR1 .CitationContent}
    Arduino Team, *Get started with machine learning on Arduino*, [[[https://​www.​blog.​arduino.​cc]{.RefSource}](https://www.blog.arduino.cc)]{.ExternalRef}, October 15, 2019.
    :::

2.  ::: {.CitationNumber}
    2\.
    :::

    ::: {#530263_1_En_4_Chapter.xhtml#CR2 .CitationContent}
    G. Lawton, *Machine Learning on Microcontrollers Enables AI*, [[[https://​www.​targettech.​com]{.RefSource}](https://www.targettech.com)]{.ExternalRef}, November 17, 2021.
    :::

3.  ::: {.CitationNumber}
    3\.
    :::

    ::: {#530263_1_En_4_Chapter.xhtml#CR3 .CitationContent}
    J.P. Mueller and L. Massaron, *Artificial Intelligence for Dummies,* John Wiley and Sons, Inc, 2018.
    :::

4.  ::: {.CitationNumber}
    4\.
    :::

    ::: {#530263_1_En_4_Chapter.xhtml#CR4 .CitationContent}
    C.A. Pickover, *Artificial Intelligence an Illustrated History,* Sterling Publishing Co., Inc., 2019.
    :::

5.  ::: {.CitationNumber}
    5\.
    :::

    ::: {#530263_1_En_4_Chapter.xhtml#CR5 .CitationContent}
    J.R. Quinlan, *Induction of Decision Trees,* Machine Learning 1: pages 81--106, 1986.
    :::

6.  ::: {.CitationNumber}
    6\.
    :::

    ::: {#530263_1_En_4_Chapter.xhtml#CR6 .CitationContent}
    B. W. Silverman and M. C. Jones, textitE. Fix and J.L. Hodges (1951): An Important Contribution to Nonparametric Discriminant Analysis and Density Estimation: Commentary on Fix and Hodges (1951), International Statistical Review, Dec. 1989, Vol. 57, No. 3 (Dec. 1989), pp 233--238.
    :::

7.  ::: {.CitationNumber}
    7\.
    :::

    ::: {#530263_1_En_4_Chapter.xhtml#CR7 .CitationContent}
    AI Computing Comes to Memory Chips, IEEE Spectrum, Jan 2022
    :::

8.  ::: {.CitationNumber}
    8\.
    :::

    ::: {#530263_1_En_4_Chapter.xhtml#CR8 .CitationContent}
    O. Theobald, *Machine Learning for Absolute Beginners: A Plain English Introduction,* second edition, 2017.
    :::

9.  ::: {.CitationNumber}
    9\.
    :::

    ::: {#530263_1_En_4_Chapter.xhtml#CR9 .CitationContent}
    B.J. Wythoff, *Backpropagation Neural Networks--A Tutorial,* Chemometrics and Intelligent Laboratory Systems, 18 (1993), 115--155.
    :::
:::

```{=html}
</aside>
```
```{=html}
<aside aria-label="Footnotes" class="FootnoteSection" epub:type="footnotes">
```
::: {.Heading}
Footnotes
:::

::: {.Footnote}
[[1](#530263_1_En_4_Chapter.xhtml#Fn1_source)]{.FootnoteNumber}

::: {.ClearBoth}
 
:::
:::

::: {.Footnote}
[[2](#530263_1_En_4_Chapter.xhtml#Fn2_source)]{.FootnoteNumber}

::: {.ClearBoth}
 
:::
:::

::: {.Footnote}
[[3](#530263_1_En_4_Chapter.xhtml#Fn3_source)]{.FootnoteNumber}

::: {.ClearBoth}
 
:::
:::

```{=html}
</aside>
```
:::
:::

[]{#530263_1_En_5_Chapter.xhtml}

::: {.chapter role="doc-chapter"}
::: {.ChapterContextInformation}
::: {#530263_1_En_5_Chapter.xhtml#Chap5 .ContextInformation}
::: {.ChapterCopyright}
© The Author(s), under exclusive license to Springer Nature Switzerland AG 2023
:::

[S. F. Barrett]{.ContextInformationAuthorEditorNames}[[Arduino V: Machine Learning]{.BookTitle}]{.ContextInformationBookTitles}[[Synthesis Lectures on Digital Circuits & Systems]{.SeriesTitle lang="en"}]{.ContextInformationSeries}[<https://doi.org/10.1007/978-3-031-21877-4_5>]{.ChapterDOI}
:::
:::

`<!--Begin Abstract-->`{=html}

::: {.MainTitleSection}
# 5. Fuzzy Logic {.ChapterTitle lang="en"}
:::

::: {.AuthorGroup}
::: {.AuthorNames}
[[Steven F. Barrett]{.AuthorName}^[1](#530263_1_En_5_Chapter.xhtml#Aff3) [[ ]{.ContactIcon}](#530263_1_En_5_Chapter.xhtml#ContactOfAuthor2)^]{.Author}
:::

::: {.Affiliations}
::: {#530263_1_En_5_Chapter.xhtml#Aff3 .Affiliation}
[(1)]{.AffiliationNumber}

::: {.AffiliationText}
Department of Electrical and Computer Engineering, University of Wyoming, Laramie, WY, USA
:::
:::

::: {.ClearBoth}
 
:::
:::

::: {.Contacts}
::: {#530263_1_En_5_Chapter.xhtml#ContactOfAuthor2 .Contact}
::: {.ContactIcon}
 
:::

::: {.ContactAuthorLine}
[Steven F. Barrett]{.AuthorName}
:::

::: {.ContactAdditionalLine}
[Email: ]{.ContactType}<steveb@uwyo.edu>
:::
:::
:::
:::

`<!--End Abstract-->`{=html}

::: {.Fulltext}
::: {#530263_1_En_5_Chapter.xhtml#Par2 .Para}
**Objectives:** After reading this chapter, the reader should be able to

::: {.UnorderedList}
-   Provide a real world example of a control system;

-   Describe the differences between a traditional control system design and one implemented with fuzzy logic techniques;

-   Describe the similarities and differences between Boolean two value logic and multi--value fuzzy logic;

-   Briefly describe the origins of the fuzzy logic approach to control system design;

-   Sketch a diagram and describe the steps of designing a fuzzy logic controller;

-   Implement a fuzzy logic controller using the Arduino Embedded Fuzzy Logic Library (eFLL); and

-   Design a fuzzy logic control system to control an autonomous maze navigating robot.
:::
:::

::: {#530263_1_En_5_Chapter.xhtml#Sec2 .section .Section1 .RenderAsSection1}
## [5.1 ]{.HeadingNumber}Overview Concepts {.Heading}

This chapter describes how to control a process using fuzzy logic techniques. Up to this point in [the]{#530263_1_En_5_Chapter.xhtml#ITerm2} Arduino book series we have used Boolean Logic techniques. That is, the digital logic inputs and outputs to the microcontroller have either been at logic one (true) or logic zero (false). In fact, we have gone to great lengths to describe proper peripheral interface techniques to preserve these logic values.

In this chapter we explore fuzzy logic that allows multiple levels of truth between logic one and zero. We find that many real world control problems lend themselves to fuzzy logic implementation. As an example, as we travel, our goal is always to arrive safely at our desired destination. Along the way we must constantly stay alert to ever changing road conditions, other vehicles, and even wildlife and domestic animals. Many vehicles are now equipped with control systems to automatically adjust their speed in response to detected obstacles. Obstacles may range from slower moving vehicles or even a large animal.^[^11]^

Intuitively, the system will respond differently for an obstruction that is very close rather than much further away. For example, if a large animal (e.g. an elk) steps out right in front of my vehicle, I would like the control system to rapidly apply strong brake pressure to bring the vehicle to a controlled but abrupt stop. On the other hand, if the control system detects an obstacle much farther away from the car, the brake system may be gently applied to slow the car a little bit. Fuzzy logic allows the design a system of this type. Later in the chapter, we investigate a vehicle control system of this type in some detail.

A traditional control system design is based on developing a system mathematical model. Traditional control systems have been used for decades to control all types of complex systems. In 1965, L. A. Zadeh in the seminal work "Fuzzy Sets," introduced the concept of a "continuum of grades of membership" with membership values ranging from zero to one. He also provided functions typically found in Boolean logic (e.g. AND, OR, etc.). He noted that many human decision thought processes do not use precise mathematical models \[[[11](#530263_1_En_5_Chapter.xhtml#CR11)]{.CitationRef}\].

In this chapter we investigate the design of fuzzy logic controllers in some detail. We begin with a brief review of the key concepts and design of a fuzzy logic controller. We next explore [the]{#530263_1_En_5_Chapter.xhtml#ITerm3} Arduino Embedded Fuzzy Logic Library (eFLL). The library was developed by a team (Alves, Lira, Lemos, Kridi, and Leal) of the Robotic Research Group at the State University of Piaui in Tersini, Piaui, Brazil. The library contains features to design complex, fuzzy logic control systems, and also provides several excellent examples that may be used as templates to design other systems (Alves). We explore the examples in some detail. In an earlier writing project, Daniel Pack and I explored an autonomous,^[^12]^ maze navigating robot equipped with two IR sensors to detect maze walls. In the Application section, we equip the Dagu Magician Robot from Chap. [[[3]{.RefSource}](#530263_1_En_3_Chapter.xhtml)]{.ExternalRef} with an eFLL based fuzzy logic control system.
:::

::: {#530263_1_En_5_Chapter.xhtml#Sec3 .section .Section1 .RenderAsSection1}
## [5.2 ]{.HeadingNumber}Theory {.Heading}

::: {#530263_1_En_5_Chapter.xhtml#Par17 .Para}
In this section we provide an overview of designing a fuzzy logic based control system. Our goal is to provide a systematic, step--by--step design process. Along the way we introduce related terminology and concepts. We purposely use many figures to illustrate key concepts. References for this section include: \[[[1](#530263_1_En_5_Chapter.xhtml#CR1)]{.CitationRef}, [[4](#530263_1_En_5_Chapter.xhtml#CR4)]{.CitationRef}, [[5](#530263_1_En_5_Chapter.xhtml#CR5)]{.CitationRef}, [[8](#530263_1_En_5_Chapter.xhtml#CR8)]{.CitationRef}\].

![530263_1_En_5_Fig1_HTML.png](https://i.imgur.com/LifMe3Q.jpeg)
:::

Figure [[5.1](#530263_1_En_5_Chapter.xhtml#Fig1)]{.InternalRef} provides [an]{#530263_1_En_5_Chapter.xhtml#ITerm4} overview of the fuzzy control system design process. The overall goal is to control a system by taking precise, crisp input information from input sensors and transducers; map the input information, to precise, crisp output control signals using a series of rule statements of the form "IF--THEN."

Along the way, the crisp input signals are fuzzified and converted to linguistic (word) variables. The inputs are then combined using "AND" and "OR" style logic to develop a series of "IF--THEN" style rules. The rules link the input variables to desired output control signals. The rules are developed by an "expert," you, the system designer. There may be multiple rules linking input conditions to desired output control signals. Each rule is evaluated and assigned a firing weight if activated. For a given set of input conditions, multiple rules may fire.

The rules that have fired are then aggregated (combined) to determine an overall fuzzy response. The fuzzy response is then defuzzified to provide crisp output control signals. Let's take a closer look at each step. We use an extended example of a fuzzy controlled maze following robot to illustrate each step.

::: {#530263_1_En_5_Chapter.xhtml#Sec4 .section .Section2 .RenderAsSection2}
### [5.2.1 ]{.HeadingNumber}Establish Fuzzy Control System Goal, Inputs, and Outputs {.Heading}

Before beginning the detailed design of a fuzzy control system. It is essential to determine the overall system goal, the available inputs, and the desired outputs. The inputs will be mapped to outputs during the design process using a set of rules.

**Example:** Throughout this section we use an example of a fuzzy controlled maze following robot. In the Application section of Chap. [[[3]{.RefSource}](#530263_1_En_3_Chapter.xhtml)]{.ExternalRef} we introduced a Dagu Magician robot platform. We designed a control system consisting of three IR sensors as input peripherals and two DC motors as output peripherals to navigate the robot autonomously through a maze. The overall goal was to navigate through the maze as quickly as possible without touching maze walls. In this example, we equip the Dagu robot with a fuzzy control system to accomplish this same goal.
:::

::: {#530263_1_En_5_Chapter.xhtml#Sec5 .section .Section2 .RenderAsSection2}
### [5.2.2 ]{.HeadingNumber}Fuzzify Crisp Sensor Values {.Heading}

::: {#530263_1_En_5_Chapter.xhtml#Par23 .Para}
Once system goals have been set, the next step is to determine the fuzzy input membership functions for each of the sensor inputs. The crisp sensor signals are provided by a series of input transducers. A input membership function is developed for each sensor as shown in Fig. [[5.1](#530263_1_En_5_Chapter.xhtml#Fig1)]{.InternalRef}. The input membership functions consist of a series of linguistic (word) variables. The span of the linguistic variables is defined by a trapezoid (or trap) function. Various forms of trap functions are illustrated in Fig. [[5.2](#530263_1_En_5_Chapter.xhtml#Fig2)]{.InternalRef} (Alves).

![530263_1_En_5_Fig2_HTML.png](https://i.imgur.com/JSNnOhY.jpeg)
:::

The specific trap functions are defined using the sensor profile. The crisp numerical output from [the]{#530263_1_En_5_Chapter.xhtml#ITerm5} sensor is mapped to a specific linguistic variable. If the crisp numerical output from the sensor corresponds to two different linguistic variables, the linguistic variable with the smaller value is chosen.

**Example:** In the robot example, we use only two IR sensors to navigate through the maze. To allow the robot to detect obstacles directly in front, a front facing IR sensor is used. Also, a right facing IR sensor is used.

::: {#530263_1_En_5_Chapter.xhtml#Par26 .Para}
To design the input membership [functions]{#530263_1_En_5_Chapter.xhtml#ITerm6} for the front and right IR sensor, the IR sensor profile is divided into three different zones: obstacle close, obstacle near, and obstacle far as shown in Fig. [[5.3](#530263_1_En_5_Chapter.xhtml#Fig3)]{.InternalRef}a. The IR sensor profile is used with the output sensor value to construct the input membership functions as shown in Fig. [[5.3](#530263_1_En_5_Chapter.xhtml#Fig3)]{.InternalRef}b. An input membership function is provided for both the front and right facing sensors.

![530263_1_En_5_Fig3_HTML.png](https://i.imgur.com/s6Fyzxe.jpeg)
:::
:::

::: {#530263_1_En_5_Chapter.xhtml#Sec6 .section .Section2 .RenderAsSection2}
### [5.2.3 ]{.HeadingNumber}Apply Rules {.Heading}

A set of rules of the form "IF (antecedent)--THEN (consequent)" are now developed to link input membership function linguistic variables to desired output membership function values. Specific [rules]{#530263_1_En_5_Chapter.xhtml#ITerm7} are developed by considering different combinations of the input membership function linguistic [variables]{#530263_1_En_5_Chapter.xhtml#ITerm8} to form the antecedent. Multiple input membership function linguistic variables may be linked using "AND" and "OR" logic connectives. For the "AND" connective, the minimum value of the input membership function linguistic variable is chosen. For the "OR" connective, the maximum value of the input membership function linguistic variable is chosen. The desired output (consequent) for a given combination of input variables is determined by an expert (you--the system designer). The output membership [functions]{#530263_1_En_5_Chapter.xhtml#ITerm9} are determined by linking the output linguistic variables to desired crisp numerical values.

**Example:** In Fig. [[5.3](#530263_1_En_5_Chapter.xhtml#Fig3)]{.InternalRef}c, we have developed the output membership functions for the left and right motor. The crisp numerical output values range from 0 to 250. These will serve as inputs to a pulse width modulation (PWM) function to control the left and right motor speed to render different turns.

To construct the rules, linking inputs to outputs, the combination of input linguistic variables for the right and front sensor are placed in a table. The desired output for each combination of inputs is then determined by an expert (you). For example, for the right sensor at "r_close" and the front sensor at "f_close," the desired robot action is a left medium turn ("l_med"). This is accomplished by setting the left motor to slow ("l_slow") and the right motor to medium ("r_med"). The resulting table is provided in Fig. [[5.3](#530263_1_En_5_Chapter.xhtml#Fig3)]{.InternalRef}d.
:::

::: {#530263_1_En_5_Chapter.xhtml#Sec7 .section .Section2 .RenderAsSection2}
### [5.2.4 ]{.HeadingNumber}Aggregate Active Rules and Defuzzify Output {.Heading}

To determine a crisp output(s) to control the system, all of the rules that have provided an output are aggregated together to provide a single output. There are a variety of methods available to do this. The Arduino Embedded Fuzzy Logic Library (eFLL) uses the Mamdani Minimum technique to aggregate the outputs and the center of area technique to defuzzify to crisp outputs \[[[3](#530263_1_En_5_Chapter.xhtml#CR3)]{.CitationRef}, [[7](#530263_1_En_5_Chapter.xhtml#CR7)]{.CitationRef}, [[9](#530263_1_En_5_Chapter.xhtml#CR9)]{.CitationRef}, [[10](#530263_1_En_5_Chapter.xhtml#CR10)]{.CitationRef}\].

**Example:** Based on the processes described, two crisp numerical outputs are provided to render the desired motor turn to avoid maze walls.

In the Application section we develop the actual code using the Arduino Embedded Fuzzy Logic Library (eFLL).
:::
:::

::: {#530263_1_En_5_Chapter.xhtml#Sec8 .section .Section1 .RenderAsSection1}
## [5.3 ]{.HeadingNumber}Arduino eFLL {.Heading}

We next explore the Arduino Embedded Fuzzy Logic Library (eFLL). The library was developed by a team (Alves, Lira, Lemos, Kridi, and Leal) of the Robotic Research Group at the State University of Piaui in Tersini, Piaui, Brazil. The [library]{#530263_1_En_5_Chapter.xhtml#ITerm10} contains features and representative examples to design complex, fuzzy logic control systems. The examples may serve as templates to design other systems. The team has provided an outstanding service of making fuzzy logic concepts readily accessible to the Arduino community (Alves).

We now explore the eFLL Fuzzy Logic Library examples in some detail.

::: {#530263_1_En_5_Chapter.xhtml#Sec9 .section .Section2 .RenderAsSection2}
### [5.3.1 ]{.HeadingNumber}Example: Simple {.Heading}

Early in the chapter we discussed an obstacle avoidance system for vehicle control. Intuitively, we desired a system that would respond differently for an obstruction that is very close rather than much further away. For example, if a large animal (e.g. an elk) steps out right in front of my vehicle, I would like the control system to rapidly apply strong brake pressure to bring the vehicle to a controlled but abrupt stop. On the other hand, if the control system detects an obstacle much farther away from the car, the brake system may be gently applied to slow the car a little bit.

The eFLL provides an example called "Arduino_simple_sample" that implements such a system. The system contains a single input called "input:distance" with linguistic variables "small," "safe," and "big." The input membership function is shown in Fig. [[5.4](#530263_1_En_5_Chapter.xhtml#Fig4)]{.InternalRef}. The system contains a single output called "output:speed" with linguistic variables "slow," "average," and "fast." The output membership function is shown in Fig. [[5.4](#530263_1_En_5_Chapter.xhtml#Fig4)]{.InternalRef} (Alves).

::: {#530263_1_En_5_Chapter.xhtml#Par37 .Para}
The system implements the following rules:

::: {.UnorderedList}
-   Rule 1: IF distance[![530263_1_En_5_Chapter_TeX_IEq2.png](https://i.imgur.com/nfI6kau.jpeg)]{#530263_1_En_5_Chapter.xhtml#IEq2 .InlineEquation}slow

-   Rule 2: IF distance[![530263_1_En_5_Chapter_TeX_IEq4.png](https://i.imgur.com/p6HqR07.jpeg)]{#530263_1_En_5_Chapter.xhtml#IEq4 .InlineEquation}average

-   Rule 3: IF distance[![530263_1_En_5_Chapter_TeX_IEq6.png](https://i.imgur.com/jTyMUnm.jpeg)]{#530263_1_En_5_Chapter.xhtml#IEq6 .InlineEquation}high
:::

![530263_1_En_5_Fig4_HTML.png](https://i.imgur.com/l5OeD1p.jpeg)
:::

::: {#530263_1_En_5_Chapter.xhtml#Par41 .Para}
It is highly recommended the reader upload and run the "Arduino_simple_sample" sketch and become acquainted with its operation. The modified version of this sketch is provided below. In place of a random number generator to generate system input, a potentiometer is used to simulate a distance sensor input and an LED is used as a speed indicator output as shown in Fig. [[5.5](#530263_1_En_5_Chapter.xhtml#Fig5)]{.InternalRef}. Also, additional code steps have been added to report the pertinence (strength) of the fuzzy linguistic variables of the input and output membership functions.

![530263_1_En_5_Fig5_HTML.png](https://i.imgur.com/3Zg4WpR.jpeg)

![530263_1_En_5_Figa_HTML.png](https://i.imgur.com/C4h08xt.jpeg)

![530263_1_En_5_Figb_HTML.png](https://i.imgur.com/qrMpf5A.jpeg)

![530263_1_En_5_Figc_HTML.png](https://i.imgur.com/XPbyknh.jpeg)
:::

::: {#530263_1_En_5_Chapter.xhtml#Par42 .Para}
To test the implemented fuzzy logic controller, several test runs are examined as shown in Fig. [[5.6](#530263_1_En_5_Chapter.xhtml#Fig6)]{.InternalRef}. Results are provided for three test runs. It is recommended the reader apply the three control rules with the pertinence (strength) data provided for each input and output membership functions to verify the operation of the controller. Recall, in the defuzzification step the controller applies the Mamdani minimum approach to aggregate the rules that have fired and then performs the center--of--area calculation to determine the crisp output \[[[7](#530263_1_En_5_Chapter.xhtml#CR7)]{.CitationRef}\].

![530263_1_En_5_Fig6_HTML.png](https://i.imgur.com/6CtbSFN.jpeg)
:::
:::

::: {#530263_1_En_5_Chapter.xhtml#Sec10 .section .Section2 .RenderAsSection2}
### [5.3.2 ]{.HeadingNumber}Example: Advanced {.Heading}

::: {#530263_1_En_5_Chapter.xhtml#Par43 .Para}
This example provides for a more complex vehicle control system. This example is also provided in the eFLL Library and is called "Arduino_advanced_sample." The system contains three inputs called: "input:distance," "input:speedInput," and "input:temperature." The linguistic variables for each input memebership function are shown in Fig. [[5.7](#530263_1_En_5_Chapter.xhtml#Fig7)]{.InternalRef}. The system also contains two output variables called "output:risk" and "output:speedOutput" with linguistic variables shown in Fig. [[5.7](#530263_1_En_5_Chapter.xhtml#Fig7)]{.InternalRef}.

![530263_1_En_5_Fig7_HTML.png](https://i.imgur.com/HRVR41g.jpeg)
:::

::: {#530263_1_En_5_Chapter.xhtml#Par44 .Para}
The system implements the following rules:

::: {.UnorderedList}
-   Rule 1: ifDistanceNearAndSpeedQuickOrTemperatureCold, thenRiskMaximumAndSpeedSlow.

-   Rule 2: ifDistanceSafeAndSpeedNormalOrTemperatureGood, thenRiskAverageAndSpeedNormal.

-   Rule 3: ifDistanceDistantAndSpeedSlowOrTemperatureHot, thenRiskMinimumSpeedQuick.
:::

![530263_1_En_5_Fig8_HTML.png](https://i.imgur.com/rmsiCxn.jpeg)

![530263_1_En_5_Fig9_HTML.png](https://i.imgur.com/zXdNoje.jpeg)
:::

It is highly recommended the reader upload and run the "Arduino_advanced_sample" sketch and become acquainted with its operation. In the interest of space, the code will not be duplicated here.

The code provides simulated sensor input using random numbers. The results of several test runs are provided in Figs. [[5.8](#530263_1_En_5_Chapter.xhtml#Fig8)]{.InternalRef} and [[5.9](#530263_1_En_5_Chapter.xhtml#Fig9)]{.InternalRef}. It is recommended the reader apply the control rules with the pertinence (strength) data provided for each input and output membership functions to verify the operation of the controller. For a complex rule including "AND" and "OR" logical operators, recall the minimum value is chosen for the "AND" operation and the maximum value is chosen for the "OR" Also, as a friendly reminder, in the defuzzification step the controller applies the Mamdani minimum approach to aggregate the rules that have fired and then performs a center--of--area calculation to determine the crisp outputs (Alves).
:::
:::

::: {#530263_1_En_5_Chapter.xhtml#Sec11 .section .Section1 .RenderAsSection1}
## [5.4 ]{.HeadingNumber}Application {.Heading}

In the Application section of Chap. [[[3]{.RefSource}](#530263_1_En_3_Chapter.xhtml)]{.ExternalRef}, we equipped the Dagu Magician Robot with three IR sensors to detect maze walls. A series of traditional (nonfuzzy) "IF--THEN" statements were used to determine motor action to navigate through the maze without bumping into maze walls.

::: {#530263_1_En_5_Chapter.xhtml#Par51 .Para}
We revisited the robot earlier in this chapter in [our]{#530263_1_En_5_Chapter.xhtml#ITerm11} discussion on fuzzy logic theory. We now implement and test a fuzzy logic controller for the robot using the eFLL "Arduino_advanced_sample" as a template guide. We test the robot using simulated IR sensor inputs and motor control outputs as shown in Fig. [[5.10](#530263_1_En_5_Chapter.xhtml#Fig10)]{.InternalRef}. Note we implement the fuzzy control algorithm on the Arduino UNO R3. This processor hosts 32K bytes of Flash memory and 2K bytes of RAM.

![530263_1_En_5_Fig10_HTML.png](https://i.imgur.com/unvnBha.jpeg)
:::

In the fuzzy sketch development we limit our sketch development to two (input and right facing) IR sensors. We leave the use of three IR sensors as a homework assignment. Before continuing, please review the development of input measurement functions, output membership functions, and rule development provided earlier in the chapter.

::: {#530263_1_En_5_Chapter.xhtml#Par53 .Para}
As shown in Fig. [[5.3](#530263_1_En_5_Chapter.xhtml#Fig3)]{.InternalRef}d, the nine rules developed to control the robot include:

::: {.UnorderedList}
-   Rule 1: IF (right sensor close) AND (front sensor close) THEN (left motor slow) AND (right motor medium)

-   Rule 2: IF (right sensor close) AND (front sensor near) THEN (left motor slow) AND (right motor slow)

-   Rule 3: IF (right sensor close) AND (front sensor far) THEN (left motor fast) AND (right motor fast)

-   Rule 4: IF (right sensor near) AND (front sensor close) THEN (left motor slow) AND (right motor slow)

-   Rule 5: IF (right sensor near) AND (front sensor near) THEN (left motor slow) AND (right motor slow)

-   Rule 6: IF (right sensor near) AND (front sensor far) THEN (left motor fast) AND (right motor fast)

-   Rule 7: IF (right sensor far) AND (front sensor close) THEN (left motor medium) AND (right motor slow)

-   Rule 8: IF (right sensor far) AND (front sensor near) THEN (left motor slow) AND (right motor slow)

-   Rule 9: IF (right sensor far) AND (front sensor far) THEN (left motor fast) AND (right motor fast)
:::
:::

::: {#530263_1_En_5_Chapter.xhtml#Par63 .Para}
For proper sketch operation, rules with the same consequent should be combined into a single rule as shown in Fig. [[5.3](#530263_1_En_5_Chapter.xhtml#Fig3)]{.InternalRef}e. This allows the robot to be controlled with four rules. The rules may be simplified further by carefully examining the rule table. For example, when the front sensor is reporting f_far, it does not matter what the value of the right sensor is reporting, since the resulting robot action is the same. This results in a simplified rule set of:

::: {.UnorderedList}
-   Rule 1: IF (right sensor close) AND (front sensor close) THEN (left motor slow) AND (right motor medium)

-   Rule 2: IF (front sensor near) OR ((right sensor close) AND (front sensor close)) THEN (left motor slow) AND (right motor slow)

-   Rule 3: IF (front sensor far) THEN (left motor fast) AND (right motor fast)

-   Rule 4: IF (right sensor far) AND (front sensor close) THEN (left motor medium) AND (right motor slow)
:::
:::

::: {#530263_1_En_5_Chapter.xhtml#Par68 .Para}
The sketch to implement the fuzzy control algorithm is provided next.

![530263_1_En_5_Figd_HTML.png](https://i.imgur.com/t9UF16C.jpeg)

![530263_1_En_5_Fige_HTML.png](https://i.imgur.com/RZUdALH.jpeg)

![530263_1_En_5_Figf_HTML.png](https://i.imgur.com/i5X8BKp.jpeg)

![530263_1_En_5_Figg_HTML.png](https://i.imgur.com/4wOyDIr.jpeg)

![530263_1_En_5_Figh_HTML.png](https://i.imgur.com/j8A31ek.jpeg)
:::

To test the fuzzy robot controller, use the simulator to test all combinations of sensor inputs provided in the rule table of Fig. [[5.3](#530263_1_En_5_Chapter.xhtml#Fig3)]{.InternalRef}d. Once you have the basic controller operating correctly, consider adding left facing sensor to detect maze walls.
:::

::: {#530263_1_En_5_Chapter.xhtml#Sec12 .section .Section1 .RenderAsSection1}
## [5.5 ]{.HeadingNumber}Summary {.Heading}

This chapter described how to control a process using fuzzy logic techniques. We explored fuzzy logic that allows multiple levels of truth between logic one and zero. We found that many real world control problems lend themselves to fuzzy logic implementation. We then investigated the design of fuzzy logic controllers in some detail. We began with a brief review of the key concepts and design of a fuzzy logic controller. We then explored the Arduino Embedded Fuzzy Logic Library (eFLL) and examples developed by a team of the Robotic Research Group at the State University of Piaui in Tersini, Piaui, Brazil. We explore the examples in some detail. In an earlier writing project, In the Application section, we equipped the Dagu Magician Robot with an eFLL based fuzzy logic control system.
:::

::: {#530263_1_En_5_Chapter.xhtml#Sec13 .section .Section1 .RenderAsSection1}
## [5.6 ]{.HeadingNumber}Problems {.Heading}

::: {#530263_1_En_5_Chapter.xhtml#Par71 .Para}
::: {.OrderedList}
1.  ::: {.ItemNumber}
    1\.
    :::

    ::: {.ItemContent}
    In your own words compare and contrast the traditional and fuzzy logic approach to controller design.
    :::

    ::: {.ClearBoth}
     
    :::

2.  ::: {.ItemNumber}
    2\.
    :::

    ::: {.ItemContent}
    Provide a sketch of the fuzzy controller design process. Briefly describe what activities are required at each step.
    :::

    ::: {.ClearBoth}
     
    :::

3.  ::: {.ItemNumber}
    3\.
    :::

    ::: {.ItemContent}
    Illustrate the fuzzy control design process with your own example.
    :::

    ::: {.ClearBoth}
     
    :::

4.  ::: {.ItemNumber}
    4\.
    :::

    ::: {.ItemContent}
    How are input membership functions derived from crisp sensor outputs.
    :::

    ::: {.ClearBoth}
     
    :::

5.  ::: {.ItemNumber}
    5\.
    :::

    ::: {.ItemContent}
    Describe the different types of trapezoids available to define input and output membership functions.
    :::

    ::: {.ClearBoth}
     
    :::

6.  ::: {.ItemNumber}
    6\.
    :::

    ::: {.ItemContent}
    How are output membership defined for a specific application?
    :::

    ::: {.ClearBoth}
     
    :::

7.  ::: {.ItemNumber}
    7\.
    :::

    ::: {.ItemContent}
    Describe the use of AND and OR operators in developing rules.
    :::

    ::: {.ClearBoth}
     
    :::

8.  ::: {.ItemNumber}
    8\.
    :::

    ::: {.ItemContent}
    What is the basic configuration of a fuzzy logic rule.
    :::

    ::: {.ClearBoth}
     
    :::

9.  ::: {.ItemNumber}
    9\.
    :::

    ::: {.ItemContent}
    What are antecedents and consequents? How are they used in fuzzy logic rule development?
    :::

    ::: {.ClearBoth}
     
    :::

10. ::: {.ItemNumber}
    10\.
    :::

    ::: {.ItemContent}
    In your own words describe how the fuzzy outputs are converted to crisp system outputs.
    :::

    ::: {.ClearBoth}
     
    :::

11. ::: {.ItemNumber}
    11\.
    :::

    ::: {.ItemContent}
    In the Application section of this chapter, we provided the design of a two sensor maze following robot. Revise the design to include a third left facing sensor.
    :::

    ::: {.ClearBoth}
     
    :::
:::
:::
:::

```{=html}
<aside aria-labelledby="Bib1Heading" class="Bibliography" id="Bib1">
```
::: {.bibliography role="doc-bibliography"}
::: {#530263_1_En_5_Chapter.xhtml#Bib1Heading .Heading}
References
:::

1.  ::: {.CitationNumber}
    1\.
    :::

    ::: {#530263_1_En_5_Chapter.xhtml#CR1 .CitationContent}
    A.J. Alves, R. Lira, M. Lemos, D.S. Kridi, and K. Leal, *Arduino Embedded Fuzzy Logic Library (eFLL)*, Robotic Research Group at the State University of Piaui, Tersini, Piaui, Brazil.
    :::

2.  ::: {.CitationNumber}
    2\.
    :::

    ::: {#530263_1_En_5_Chapter.xhtml#CR2 .CitationContent}
    A.J. Alves, *eFLL--A Fuzzy Library for Arduino and Embedded Systems*, [[[https://​www.​blog.​zerokol.​com]{.RefSource}](https://www.blog.zerokol.com)]{.ExternalRef}.
    :::

3.  ::: {.CitationNumber}
    3\.
    :::

    ::: {#530263_1_En_5_Chapter.xhtml#CR3 .CitationContent}
    T. Jiang and Y. Li, *Generalized Defuzzification Strategies and Their Parameter Learning Procedures,* IEEE Transactions on Fuzzy Systems, Vol. 4, No. 1, February 1996, 64-71.
    :::

4.  ::: {.CitationNumber}
    4\.
    :::

    ::: {#530263_1_En_5_Chapter.xhtml#CR4 .CitationContent}
    A.D. Kulkarni, *Computer Vision and Fuzzy--Neural Systems,* Prentice Hall, 2001.
    :::

5.  ::: {.CitationNumber}
    5\.
    :::

    ::: {#530263_1_En_5_Chapter.xhtml#CR5 .CitationContent}
    C.C. Lee, *Fuzzy Logic in Control Systems: Fuzzy Logic Controller--Part I,* IEEE Transactions on Systems, Man, and Cybernetics, Vol. 20, No. 2, March/April 1990, pp. 404-418.
    :::

6.  ::: {.CitationNumber}
    6\.
    :::

    ::: {#530263_1_En_5_Chapter.xhtml#CR6 .CitationContent}
    C.C. Lee, *Fuzzy Logic in Control Systems: Fuzzy Logic Controller--Part I,* IEEE Transactions on Systems, Man, and Cybernetics, Vol. 20, No. 2, March/April 1990, pp. 419-435.
    :::

7.  ::: {.CitationNumber}
    7\.
    :::

    ::: {#530263_1_En_5_Chapter.xhtml#CR7 .CitationContent}
    E.H. Mamdani and S. Assilian, *An Experiment in Linguistic Synthesis with a Fuzzy Logic Controller,* Int. J. Man--Machine Studies, (1975), 1--13.
    :::

8.  ::: {.CitationNumber}
    8\.
    :::

    ::: {#530263_1_En_5_Chapter.xhtml#CR8 .CitationContent}
    D.J. Pack and S.F. Barrett, *68HC12 Microcontroller Theory and Application*, Prentice Hall, 2002.
    :::

9.  ::: {.CitationNumber}
    9\.
    :::

    ::: {#530263_1_En_5_Chapter.xhtml#CR9 .CitationContent}
    D.T. Pham and M. Castellani, *Action aggregation and defuzzification in Mamdani--type fuzzy systems,* Proceedings of the Institution of Mechanical Engineers, Part C: Journal of Mechanical Engineering Science, 2002, 747--759.
    :::

10. ::: {.CitationNumber}
    10\.
    :::

    ::: {#530263_1_En_5_Chapter.xhtml#CR10 .CitationContent}
    T.A. Runkler, *Selection of Appropriate Defuzzification Methods Using Application Specific Properties,* IEEE Transactions on Fuzzy Systems, Vol. 5, No. 1, February 1997, 72-79.[[[Crossref](https://doi.org/10.1109/91.554449)]{.Occurrence .OccurrenceDOI}]{.Occurrences}
    :::

11. ::: {.CitationNumber}
    11\.
    :::

    ::: {#530263_1_En_5_Chapter.xhtml#CR11 .CitationContent}
    L.A. Zadeh, *Fuzzy Sets,* Information and Control 8, 338-353, 1965.[[[MathSciNet](http://www.ams.org/mathscinet-getitem?mr=219427)]{.Occurrence .OccurrenceAMSID}[[Crossref](https://doi.org/10.1016/S0019-9958(65)90241-X)]{.Occurrence .OccurrenceDOI}[[zbMATH](http://www.emis.de/MATH-item?0139.24606)]{.Occurrence .OccurrenceZLBID}]{.Occurrences}
    :::
:::

```{=html}
</aside>
```
```{=html}
<aside aria-label="Footnotes" class="FootnoteSection" epub:type="footnotes">
```
::: {.Heading}
Footnotes
:::

::: {.Footnote}
[[1](#530263_1_En_5_Chapter.xhtml#Fn1_source)]{.FootnoteNumber}

::: {.ClearBoth}
 
:::
:::

::: {.Footnote}
[[2](#530263_1_En_5_Chapter.xhtml#Fn2_source)]{.FootnoteNumber}

::: {.ClearBoth}
 
:::
:::

```{=html}
</aside>
```
:::
:::

[]{#530263_1_En_6_Chapter.xhtml}

::: {.chapter role="doc-chapter"}
::: {.ChapterContextInformation}
::: {#530263_1_En_6_Chapter.xhtml#Chap6 .ContextInformation}
::: {.ChapterCopyright}
© The Author(s), under exclusive license to Springer Nature Switzerland AG 2023
:::

[S. F. Barrett]{.ContextInformationAuthorEditorNames}[[Arduino V: Machine Learning]{.BookTitle}]{.ContextInformationBookTitles}[[Synthesis Lectures on Digital Circuits & Systems]{.SeriesTitle lang="en"}]{.ContextInformationSeries}[<https://doi.org/10.1007/978-3-031-21877-4_6>]{.ChapterDOI}
:::
:::

`<!--Begin Abstract-->`{=html}

::: {.MainTitleSection}
# 6. Neural Networks {.ChapterTitle lang="en"}
:::

::: {.AuthorGroup}
::: {.AuthorNames}
[[Steven F. Barrett]{.AuthorName}^[1](#530263_1_En_6_Chapter.xhtml#Aff3) [[ ]{.ContactIcon}](#530263_1_En_6_Chapter.xhtml#ContactOfAuthor2)^]{.Author}
:::

::: {.Affiliations}
::: {#530263_1_En_6_Chapter.xhtml#Aff3 .Affiliation}
[(1)]{.AffiliationNumber}

::: {.AffiliationText}
Department of Electrical and Computer Engineering, University of Wyoming, Laramie, WY, USA
:::
:::

::: {.ClearBoth}
 
:::
:::

::: {.Contacts}
::: {#530263_1_En_6_Chapter.xhtml#ContactOfAuthor2 .Contact}
::: {.ContactIcon}
 
:::

::: {.ContactAuthorLine}
[Steven F. Barrett]{.AuthorName}
:::

::: {.ContactAdditionalLine}
[Email: ]{.ContactType}<steveb@uwyo.edu>
:::
:::
:::
:::

`<!--End Abstract-->`{=html}

::: {.Fulltext}
::: {#530263_1_En_6_Chapter.xhtml#Par2 .Para}
**Objectives:** After reading this chapter, the reader should be able to:

::: {.UnorderedList}
-   Describe and sketch a biological neuron;

-   Define and provide supporting equations for the perceptron model of the neuron;

-   Model the operation of a single perceptron;

-   Employ the single perceptron model to linearly classify objects into two different categories;

-   Model the operation of a multiple perceptron network;

-   Employ the multiple perceptron model to linear classify objects into different categories;

-   Define and provide supporting equations for a model of a single neuron;

-   Employ the single neuron model to assemble a multiple layer artificial neural network;

-   Describe the concept of backpropagation;

-   Employ a three--layer, feed--forward network with backpropagation to classify objects into different categories;

-   List improvements to the artificial neural network to enhance model convergence; and

-   Describe advanced software tools for developing and implementing deep neural networks.
:::
:::

::: {#530263_1_En_6_Chapter.xhtml#Sec2 .section .Section1 .RenderAsSection1}
## [6.1 ]{.HeadingNumber}Overview {.Heading}

In this chapter we explore the concept of neurons and neuron models to solve real world challenges. We begin with a brief description of the biological neuron and investigate a model of the neuron, called the perceptron, developed by Frank [Rosenblatt]{#530263_1_En_6_Chapter.xhtml#ITerm3} in 1959. We use the single perceptron model to separate objects into two categories. We extend the model to include additional perceptrons [to]{#530263_1_En_6_Chapter.xhtml#ITerm4} separate objects into multiple categories. We then investigate the single neuron and then explore the concept of backpropagation and develop a three--layer feed--forward network with backpropagation. Along the way we develop Arduino sketches of these different models.
:::

::: {#530263_1_En_6_Chapter.xhtml#Sec3 .section .Section1 .RenderAsSection1}
## [6.2 ]{.HeadingNumber}Biological Neuron {.Heading}

Our brains are composed of many neurons. Neurons work together to help us learn, remember, link complex ideas, complete complex tasks, and so many other things. The [goal]{#530263_1_En_6_Chapter.xhtml#ITerm5} of scientists and engineers have been to understand the operation and interaction of neurons, model their behavior, and use the models to solve complex challenges on computers. Some of the models require massive computing power well beyond the capability of Arduino microcontrollers. However, there are many tasks that can be readily completed on the Arduino Nano 33 BLE Sense and the lower power Arduino UNO R3. We concentrate on these applications in this chapter.

::: {#530263_1_En_6_Chapter.xhtml#Par17 .Para}
A diagram of a single biological neuron is provided in Fig. [[6.1](#530263_1_En_6_Chapter.xhtml#Fig1)]{.InternalRef}. The neuron's main processing unit is contained within the cell body [or]{#530263_1_En_6_Chapter.xhtml#ITerm6} soma. The neuron collects information from nearby neurons via a network of input sensors called dendrites. The input information is collected and processed by the soma. If a specific level of accumulated input information is reached, the neuron fires and transmits an electrical signal down [its]{#530263_1_En_6_Chapter.xhtml#ITerm7} axon. The axon is wrapped with a myelin [sheath]{#530263_1_En_6_Chapter.xhtml#ITerm8} to aid in signal conduction. When the electrical signal reaches the axon terminal fibers, a chemical transmitter is released to provide information to other nearby neurons \[[[7](#530263_1_En_6_Chapter.xhtml#CR7)]{.CitationRef}\].

![530263_1_En_6_Fig1_HTML.png](https://i.imgur.com/mEjZkJM.jpeg)
:::
:::

::: {#530263_1_En_6_Chapter.xhtml#Sec4 .section .Section1 .RenderAsSection1}
## [6.3 ]{.HeadingNumber}Perceptron {.Heading}

In 1959 Frank Rosenblatt developed a model of the single perceptron shown in Fig. [[6.2](#530263_1_En_6_Chapter.xhtml#Fig2)]{.InternalRef} based on the [biological]{#530263_1_En_6_Chapter.xhtml#ITerm9} neuron. The mathematical description here is based on the excellent development provided in Kulkarni \[[[4](#530263_1_En_6_Chapter.xhtml#CR4)]{.CitationRef}\].

::: {#530263_1_En_6_Chapter.xhtml#Par19 .Para}
The perceptron model provides for inputs ([![530263_1_En_6_Chapter_TeX_IEq2.png](https://i.imgur.com/y4SydCl.jpeg)]{#530263_1_En_6_Chapter.xhtml#IEq2 .InlineEquation}) specific for each input. The weighted inputs along with a bias (offset) are summed to become the net response and then passed to an activation function.

![530263_1_En_6_Fig2_HTML.png](https://i.imgur.com/yQaZCzA.jpeg)
:::

If the net value exceeds a specified value, the perceptron fires and provides an output value (y); otherwise, the output value is 0. In the example shown, the activation threshold value is 0. If the net value is greater than 0, the perceptron provides a 1 output; otherwise the output is 0. Other activation functions may be used.

A single perceptron may be trained to sort objects into two linear separable categories. What does this mean? If you were to plot the objects on a two--dimensional diagram, you could draw a straight line to separate the two different categories of objects. There are many real world technical challenges where this would be useful. For example, we examine a tomato sorter system in an upcoming example to separate out the largest, most red tomatoes from other varieties. Also, it is important to thoroughly understand perceptron operation as it forms the basis for more complex neuron--based models.

::: {#530263_1_En_6_Chapter.xhtml#Sec5 .section .Section2 .RenderAsSection2}
### [6.3.1 ]{.HeadingNumber}Training the Perceptron Model {.Heading}

To train the perceptron to place objects into two different categories a training set of data is used. The training [set]{#530263_1_En_6_Chapter.xhtml#ITerm10} contains the relationship between a collection of given input features and the desired output category for those specific inputs. The training set may contain multiple entries of desired input/output pairs.

To initiate the training sequence, the weights of the perceptron model and the bias are initially set to zero or some small random values. The inputs are then multiplied by the input weights. The weighted inputs are summed with the bias to determine the value of net and then passed to the activation function. The activation function generates the appropriate output (1 or 0) if the net value has exceeded the set threshold of zero.

The perceptron output is compared to the desired output provided by the training set. The error is then calculated. The error is the difference between the desired training set output and the actual output provided by the perceptron output. The weights and the bias are then updated using the equations provided in Fig. [[6.2](#530263_1_En_6_Chapter.xhtml#Fig2)]{.InternalRef}. In addition to the error term, the weights and update equations also provide a learning rate term (alpha). The value of alpha is set to a value from 0 and 1. A larger value provides for more dramatic weight changes. A smaller value of alpha may require additional computation time but potentially yield better convergence results.

The perceptron now processes the second input/output pair from the training set using the updated weights and bias values. This process continues through the entire training set, called the epoch, until the model converges. The model converges when the error for each entry in the training set is zero or at a desired error goal. This may require multiple iterations of applying the training set to the perceptron model. In the first upcoming example, convergence required two sequential applications of the training set. The second example required 1,500 iterative applications of the training set.

::: {#530263_1_En_6_Chapter.xhtml#Par26 .Para}
Once the model has achieved the error goal for the entire training set, the weight and bias values may be used to plot the line separating the two categories of objects. The overall training process is illustrated in Fig. [[6.3](#530263_1_En_6_Chapter.xhtml#Fig3)]{.InternalRef}. Once the model has been trained, it may be used to categorize new inputs not in the original training set.

![530263_1_En_6_Fig3_HTML.png](https://i.imgur.com/PGcMBtj.jpeg)
:::

::: {#530263_1_En_6_Chapter.xhtml#Par27 .Para}
**Example:** In this first perceptron example, we reconstruct the results provided by Dan in "Single Layer Perceptron Explained" in the ML Corner \[[[3](#530263_1_En_6_Chapter.xhtml#CR3)]{.CitationRef}\]. The perceptron consists of two inputs, a bias, and a single output. The weights and bias are initially set to zero. After two epochs, the mean squared error (MSE) of the output error is zero. The resulting weights and bias may be used to separate the input/output pairs into two different categories as shown in Fig. [[6.4](#530263_1_En_6_Chapter.xhtml#Fig4)]{.InternalRef}.

![530263_1_En_6_Fig4_HTML.png](https://i.imgur.com/ftFch0d.jpeg)
:::

::: {#530263_1_En_6_Chapter.xhtml#Par28 .Para}
The line separating category 1 and category 2 objects may be plotted by forming a line equation of the form:

::: {#530263_1_En_6_Chapter.xhtml#Equ1 .Equation}
::: {.EquationWrapper}
::: {.EquationContent}
::: {.MediaObject}
![530263_1_En_6_Chapter_TeX_Equ1.png](https://i.imgur.com/owZgOn6.jpeg)
:::
:::
:::
:::

::: {#530263_1_En_6_Chapter.xhtml#Equ2 .Equation}
::: {.EquationWrapper}
::: {.EquationContent}
::: {.MediaObject}
![530263_1_En_6_Chapter_TeX_Equ2.png](https://i.imgur.com/hAtysig.jpeg)
:::
:::
:::
:::

::: {#530263_1_En_6_Chapter.xhtml#Equ3 .Equation}
::: {.EquationWrapper}
::: {.EquationContent}
::: {.MediaObject}
![530263_1_En_6_Chapter_TeX_Equ3.png](https://i.imgur.com/f3454Bu.jpeg)
:::
:::
:::
:::

::: {#530263_1_En_6_Chapter.xhtml#Equ4 .Equation}
::: {.EquationWrapper}
::: {.EquationContent}
::: {.MediaObject}
![530263_1_En_6_Chapter_TeX_Equ4.png](https://i.imgur.com/VsbBX9m.jpeg)
:::
:::
:::
:::

::: {#530263_1_En_6_Chapter.xhtml#Equ5 .Equation}
::: {.EquationWrapper}
::: {.EquationContent}
::: {.MediaObject}
![530263_1_En_6_Chapter_TeX_Equ5.png](https://i.imgur.com/O1Ab02W.jpeg)
:::
:::
:::
:::

The following Arduino sketch accomplishes the training task. The UML activity diagram for the sketch is provided in Fig. [[6.5](#530263_1_En_6_Chapter.xhtml#Fig5)]{.InternalRef}. For this example the sketch is run on the Arduino UNO R3. The resulting Arduino sketch output is provided in Fig. [[6.6](#530263_1_En_6_Chapter.xhtml#Fig6)]{.InternalRef}. With the perceptron trained, it may be used to categorize inputs outside the original data set. We will call this the "Run Mode." We discuss this mode in the next section.

![530263_1_En_6_Fig5_HTML.png](https://i.imgur.com/Cgm49hZ.jpeg)

![530263_1_En_6_Fig6_HTML.png](https://i.imgur.com/PWME1Z0.jpeg)

![530263_1_En_6_Figa_HTML.png](https://i.imgur.com/Bpqbx81.jpeg)

![530263_1_En_6_Figb_HTML.png](https://i.imgur.com/QoPBoMd.jpeg)

![530263_1_En_6_Figc_HTML.png](https://i.imgur.com/kVO6Vfg.jpeg)

![530263_1_En_6_Figd_HTML.png](https://i.imgur.com/nNnJNdJ.jpeg)

![530263_1_En_6_Fige_HTML.png](https://i.imgur.com/bxVScfH.jpeg)
:::
:::

::: {#530263_1_En_6_Chapter.xhtml#Sec6 .section .Section2 .RenderAsSection2}
### [6.3.2 ]{.HeadingNumber}Single Perceptron Run Mode {.Heading}

::: {#530263_1_En_6_Chapter.xhtml#Par29 .Para}
In the previous sketch, the "Run Mode begins at the "else" statement. To implement the "Run Mode," the following additions are required for the sketch:

::: {.UnorderedList}
-   Equip the Arduino UNO R3 with an external switch to select between the Train(1)/Run(0) mode.

-   Provide an external LED to indicate the current sketch mode: Train(on)/Run(off).

-   Provide the sketch the ability to write the value of weights and bias to EEPROM in the Train mode.

-   Provide the sketch the ability to read the value of weights and bias from the EEPROM in the Run mode.

-   In the Run Mode, have the sketch prompt the user for a new input data pair outside (or inside) the original training set.

-   Provide code to categorize the provided data input/output pair into a specific category based on the training set weights and bias.

-   Provide external LEDs to indicate the two different object categories.
:::
:::

A UML diagram for the sketch was provided earlier in Fig. [[6.5](#530263_1_En_6_Chapter.xhtml#Fig5)]{.InternalRef}.

::: {#530263_1_En_6_Chapter.xhtml#Par38 .Para}
We use a dual inline package (DIP) switch to select the sketch mode (Train(1)/Run(0)). Also, three LEDs are used to indicate the sketch mode (Train(on)/Run(off)) and the category the new input pair is placed as shown in Fig. [[6.7](#530263_1_En_6_Chapter.xhtml#Fig7)]{.InternalRef}.

![530263_1_En_6_Fig7_HTML.png](https://i.imgur.com/mxUREnz.jpeg)
:::

To test the sketch, begin by setting the "Train/Run Mode" DIP switch to the "Train" position. When the sketch has completed training (MSE = 0 or desired MSE goal), change the switch position to "Run." The user is prompted for values of x1 and x2 input feature values. To test the perceptron, use input values both inside and outside the original training set. Verify the algorithm places the data into the proper category.
:::

::: {#530263_1_En_6_Chapter.xhtml#Sec7 .section .Section2 .RenderAsSection2}
### [6.3.3 ]{.HeadingNumber}Sorting Tomatoes {.Heading}

::: {#530263_1_En_6_Chapter.xhtml#Par40 .Para}
Tomatoes are available in a wide variety of color and size. Tomatoes are sorted by their redness and size. These are called input features. Tomatoes that are very red and large in diameter garner the best prices. In this example, we develop and train a perceptron to separate the reddest, largest tomatoes from the others. The data set for training the perceptron is provided in Fig. [[6.8](#530263_1_En_6_Chapter.xhtml#Fig8)]{.InternalRef}. We use two different features to categorize tomatoes: redness (0 to 255) and diameter (up to 200 mm).

![530263_1_En_6_Fig8_HTML.png](https://i.imgur.com/tXhLqAS.jpeg)
:::

::: {#530263_1_En_6_Chapter.xhtml#Par41 .Para}
We use the same process from the previous example to train the perceptron model to obtain values for weights and bias. The sketch is slightly modified to only print results to the serial monitor at the completion of each epoch. The sketch provides the Training Mode. With [the]{#530263_1_En_6_Chapter.xhtml#ITerm11} perceptron trained, it may be used to categorize inputs outside the original data set. We call this the "Run Mode."

![530263_1_En_6_Figf_HTML.png](https://i.imgur.com/c2G37IN.jpeg)

![530263_1_En_6_Figg_HTML.png](https://i.imgur.com/KF0q8em.jpeg)

![530263_1_En_6_Figh_HTML.png](https://i.imgur.com/Bh7aUlA.jpeg)

![530263_1_En_6_Figi_HTML.png](https://i.imgur.com/oSjnGYW.jpeg)
:::

::: {#530263_1_En_6_Chapter.xhtml#Par42 .Para}
The training set was applied sequentially to the model 1,500 times to [reach]{#530263_1_En_6_Chapter.xhtml#ITerm12} convergence. The results of model training are provided in Fig. [[6.9](#530263_1_En_6_Chapter.xhtml#Fig9)]{.InternalRef}.

![530263_1_En_6_Fig9_HTML.png](https://i.imgur.com/uqOfhez.jpeg)
:::

::: {#530263_1_En_6_Chapter.xhtml#Par43 .Para}
As before, the values of weights and bias are used to separate categories. The line separating category 1 and category 2 objects may be plotted by forming a line equation of the form:

::: {#530263_1_En_6_Chapter.xhtml#Equ6 .Equation}
::: {.EquationWrapper}
::: {.EquationContent}
::: {.MediaObject}
![530263_1_En_6_Chapter_TeX_Equ6.png](https://i.imgur.com/XPqhmK3.jpeg)
:::
:::
:::
:::

::: {#530263_1_En_6_Chapter.xhtml#Equ7 .Equation}
::: {.EquationWrapper}
::: {.EquationContent}
::: {.MediaObject}
![530263_1_En_6_Chapter_TeX_Equ7.png](https://i.imgur.com/pTzJbZP.jpeg)
:::
:::
:::
:::

::: {#530263_1_En_6_Chapter.xhtml#Equ8 .Equation}
::: {.EquationWrapper}
::: {.EquationContent}
::: {.MediaObject}
![530263_1_En_6_Chapter_TeX_Equ8.png](https://i.imgur.com/6THDsnW.jpeg)
:::
:::
:::
:::

::: {#530263_1_En_6_Chapter.xhtml#Equ9 .Equation}
::: {.EquationWrapper}
::: {.EquationContent}
::: {.MediaObject}
![530263_1_En_6_Chapter_TeX_Equ9.png](https://i.imgur.com/FaQPqSh.jpeg)
:::
:::
:::
:::

The resulting separation line is shown in Fig. [[6.8](#530263_1_En_6_Chapter.xhtml#Fig8)]{.InternalRef}.
:::

With the perceptron trained, it may be used to categorize inputs outside the original data set. We call this the "Run Mode." As a follow on exercise, modify the tomato sorting sketch to include the "Run" mode.
:::
:::

::: {#530263_1_En_6_Chapter.xhtml#Sec8 .section .Section1 .RenderAsSection1}
## [6.4 ]{.HeadingNumber}Multiple Perceptron Model {.Heading}

::: {#530263_1_En_6_Chapter.xhtml#Par45 .Para}
The single perceptron model may be used to linearly separate objects into two different categories. Multiple [perceptrons]{#530263_1_En_6_Chapter.xhtml#ITerm13} may be used to provide for additional categories. A multiple perceptron network is shown in Fig. [[6.10](#530263_1_En_6_Chapter.xhtml#Fig10)]{.InternalRef}. It is important to note the three perceptrons operate independently of one another. That is, they do not share information between them. The perceptrons operate independently but yet in parallel. The perceptrons may be used to place inputs into separate categories as long as the categories are linearly separable.

![530263_1_En_6_Fig10_HTML.png](https://i.imgur.com/z3uSWeq.jpeg)
:::

::: {#530263_1_En_6_Chapter.xhtml#Par46 .Para}
Provided in Fig. [[6.11](#530263_1_En_6_Chapter.xhtml#Fig11)]{.InternalRef} is a data set of input/output pairs. The data set is categorized into one of three outputs (Y1, Y2, or Y3). The three perceptron model is trained by applying multiple iterations of the data set to the perceptron network. As shown in Fig. [[6.11](#530263_1_En_6_Chapter.xhtml#Fig11)]{.InternalRef} over 900 epochs were required for all three perceptrons to converge to a mean squared error of zero using the sketch provided below. Also, the three perceptrons required a different number of epochs to converge.

![530263_1_En_6_Fig11_HTML.png](https://i.imgur.com/6sKbm4B.jpeg)
:::

At the completion of the training portion of the sketch the required weights and biases are provided for each perceptron. As shown in the previous example, the weights and biases are used to form the line equations separating a given category of input/output pairs from those outside the data category. The resulting line equations are provided below and plotted in Fig. [[6.11](#530263_1_En_6_Chapter.xhtml#Fig11)]{.InternalRef}. Note how each line separates a given cluster of input/output pairs from the other clusters.

::: {#530263_1_En_6_Chapter.xhtml#Par48 .Para}
Line 1:

::: {#530263_1_En_6_Chapter.xhtml#Equ10 .Equation}
::: {.EquationWrapper}
::: {.EquationContent}
::: {.MediaObject}
![530263_1_En_6_Chapter_TeX_Equ10.png](https://i.imgur.com/bkJRrFf.jpeg)
:::
:::
:::
:::

::: {#530263_1_En_6_Chapter.xhtml#Equ11 .Equation}
::: {.EquationWrapper}
::: {.EquationContent}
::: {.MediaObject}
![530263_1_En_6_Chapter_TeX_Equ11.png](https://i.imgur.com/OXPMveQ.jpeg)
:::
:::
:::
:::

::: {#530263_1_En_6_Chapter.xhtml#Equ12 .Equation}
::: {.EquationWrapper}
::: {.EquationContent}
::: {.MediaObject}
![530263_1_En_6_Chapter_TeX_Equ12.png](https://i.imgur.com/8ay4B6l.jpeg)
:::
:::
:::
:::

::: {#530263_1_En_6_Chapter.xhtml#Equ13 .Equation}
::: {.EquationWrapper}
::: {.EquationContent}
::: {.MediaObject}
![530263_1_En_6_Chapter_TeX_Equ13.png](https://i.imgur.com/iI01hzq.jpeg)
:::
:::
:::
:::

Line 2:

::: {#530263_1_En_6_Chapter.xhtml#Equ14 .Equation}
::: {.EquationWrapper}
::: {.EquationContent}
::: {.MediaObject}
![530263_1_En_6_Chapter_TeX_Equ14.png](https://i.imgur.com/eAizbPD.jpeg)
:::
:::
:::
:::

::: {#530263_1_En_6_Chapter.xhtml#Equ15 .Equation}
::: {.EquationWrapper}
::: {.EquationContent}
::: {.MediaObject}
![530263_1_En_6_Chapter_TeX_Equ15.png](https://i.imgur.com/HUYB0cp.jpeg)
:::
:::
:::
:::

::: {#530263_1_En_6_Chapter.xhtml#Equ16 .Equation}
::: {.EquationWrapper}
::: {.EquationContent}
::: {.MediaObject}
![530263_1_En_6_Chapter_TeX_Equ16.png](https://i.imgur.com/jH7zsTv.jpeg)
:::
:::
:::
:::

::: {#530263_1_En_6_Chapter.xhtml#Equ17 .Equation}
::: {.EquationWrapper}
::: {.EquationContent}
::: {.MediaObject}
![530263_1_En_6_Chapter_TeX_Equ17.png](https://i.imgur.com/gsrLbGx.jpeg)
:::
:::
:::
:::

Line 3:

::: {#530263_1_En_6_Chapter.xhtml#Equ18 .Equation}
::: {.EquationWrapper}
::: {.EquationContent}
::: {.MediaObject}
![530263_1_En_6_Chapter_TeX_Equ18.png](https://i.imgur.com/NuB9kgs.jpeg)
:::
:::
:::
:::

::: {#530263_1_En_6_Chapter.xhtml#Equ19 .Equation}
::: {.EquationWrapper}
::: {.EquationContent}
::: {.MediaObject}
![530263_1_En_6_Chapter_TeX_Equ19.png](https://i.imgur.com/0zTXJNo.jpeg)
:::
:::
:::
:::

::: {#530263_1_En_6_Chapter.xhtml#Equ20 .Equation}
::: {.EquationWrapper}
::: {.EquationContent}
::: {.MediaObject}
![530263_1_En_6_Chapter_TeX_Equ20.png](https://i.imgur.com/CnLZ4x7.jpeg)
:::
:::
:::
:::

::: {#530263_1_En_6_Chapter.xhtml#Equ21 .Equation}
::: {.EquationWrapper}
::: {.EquationContent}
::: {.MediaObject}
![530263_1_En_6_Chapter_TeX_Equ21.png](https://i.imgur.com/A30yqUb.jpeg)
:::
:::
:::
:::
:::

::: {#530263_1_En_6_Chapter.xhtml#Par49 .Para}
With the perceptron trained, it may be used to categorize inputs outside the original data set. We call this the "Run Mode." We explore this mode in the next section of the chapter.

![530263_1_En_6_Figj_HTML.png](https://i.imgur.com/30dfMma.jpeg)

![530263_1_En_6_Figk_HTML.png](https://i.imgur.com/Q59G0fe.jpeg)

![530263_1_En_6_Figl_HTML.png](https://i.imgur.com/tlilOp4.jpeg)

![530263_1_En_6_Figm_HTML.png](https://i.imgur.com/NwYXQsB.jpeg)

![530263_1_En_6_Fign_HTML.png](https://i.imgur.com/o0pYQAh.jpeg)

![530263_1_En_6_Figo_HTML.png](https://i.imgur.com/74aHW1o.jpeg)

![530263_1_En_6_Figp_HTML.png](https://i.imgur.com/PyjwhVP.jpeg)
:::

::: {#530263_1_En_6_Chapter.xhtml#Sec9 .section .Section2 .RenderAsSection2}
### [6.4.1 ]{.HeadingNumber}Three Perceptron Run Mode {.Heading}

This section provides the "Run Mode" for the three perceptron model explored in the previous section. We have streamlined the sketch by removing storage to EEPROM, use of an external "Train/Run Mode" DIP switch, and the LED status indicators. Also, we have tested the sketch on both the Arduino UNO R3 and also the Arduino Nano 33 BLE sense. The Run Mode begins at the "else" statement in the sketch above.

To test the sketch, compile and upload the sketch to either an Arduino Uno R3 or the Arduino Nano BLE 33 Sense. When the training portion of the sketch is complete, it enters the run mode. You will be prompted for values of x1 and x2. Use values both inside and outside the original training set. Verify the algorithm places the data into the proper category.
:::
:::

::: {#530263_1_En_6_Chapter.xhtml#Sec10 .section .Section1 .RenderAsSection1}
## [6.5 ]{.HeadingNumber}Perceptron Challenges {.Heading}

Perceptrons are useful for [separating]{#530263_1_En_6_Chapter.xhtml#ITerm14} input/output data pairs that are linearly separable. For data sets not meeting these requirements, advanced techniques are required \[[[5](#530263_1_En_6_Chapter.xhtml#CR5)]{.CitationRef}\]. For the remainder of the chapter we explore artificial neural networks (ANNs).
:::

::: {#530263_1_En_6_Chapter.xhtml#Sec11 .section .Section1 .RenderAsSection1}
## [6.6 ]{.HeadingNumber}Artificial Neural Network (ANN) {.Heading}

In this section we explore the Artificial Neural Network or ANN. We begin with a discussion of the fundamental building block neuron model. We then use the neuron building block in assembling an ANN containing several layers of interacting neurons. We investigate a feed forward ANN and then [discuss]{#530263_1_En_6_Chapter.xhtml#ITerm15} the concept of backpropagation. The ANN is then modified to include backpropagation features. Along the way we provide Arduino sketches to implement the neuron, a feed forward ANN, and an ANN with backpropagation features. The mathematical description here is based on the excellent development provided in \[[[4](#530263_1_En_6_Chapter.xhtml#CR4)]{.CitationRef}, [[6](#530263_1_En_6_Chapter.xhtml#CR6)]{.CitationRef}, [[8](#530263_1_En_6_Chapter.xhtml#CR8)]{.CitationRef}\].

::: {#530263_1_En_6_Chapter.xhtml#Sec12 .section .Section2 .RenderAsSection2}
### [6.6.1 ]{.HeadingNumber}Single Neuron Model {.Heading}

::: {#530263_1_En_6_Chapter.xhtml#Par54 .Para}
The model of a single neuron is shown in Fig. [[6.12](#530263_1_En_6_Chapter.xhtml#Fig12)]{.InternalRef}. Note the striking similarity between the neuron and the perceptron models. We modify the perceptron model by changing the activation function to the sigmoid function and also the equations for updating the weights and bias as shown.

![530263_1_En_6_Fig12_HTML.png](https://i.imgur.com/wrLr2HA.jpeg)
:::

It is important to note that the model converges [and]{#530263_1_En_6_Chapter.xhtml#ITerm16} the mean squared error (MSE) declines with the processing [of]{#530263_1_En_6_Chapter.xhtml#ITerm17} each epoch. However, the MSE may not reach a value of zero after multiple epochs. Therefore, the sketch has features to set a maximum number of iterations or a minimum value of desired MSE.

::: {#530263_1_En_6_Chapter.xhtml#Par56 .Para}
As before, we verify the equations with an Excel model and then proceed to testing the Arduino sketch. The Excel model results and the test run for the Arduino sketch is provided in Fig. [[6.13](#530263_1_En_6_Chapter.xhtml#Fig13)]{.InternalRef}.

![530263_1_En_6_Fig13_HTML.png](https://i.imgur.com/w7SoN5Z.jpeg)
:::

::: {#530263_1_En_6_Chapter.xhtml#Par57 .Para}
To provide the decision boundary between category 1 and 2 data, the sketch was run on an Arduino Uno R3 until the MSE was less than 0.005. This required 41 epochs and resulted in the following values: w1 = --0.7232, w2 = 0.6706, and bias = 0.0568.

::: {#530263_1_En_6_Chapter.xhtml#Equ22 .Equation}
::: {.EquationWrapper}
::: {.EquationContent}
::: {.MediaObject}
![530263_1_En_6_Chapter_TeX_Equ22.png](https://i.imgur.com/hT5XTty.jpeg)
:::
:::
:::
:::

::: {#530263_1_En_6_Chapter.xhtml#Equ23 .Equation}
::: {.EquationWrapper}
::: {.EquationContent}
::: {.MediaObject}
![530263_1_En_6_Chapter_TeX_Equ23.png](https://i.imgur.com/D8QSGN8.jpeg)
:::
:::
:::
:::

::: {#530263_1_En_6_Chapter.xhtml#Equ24 .Equation}
::: {.EquationWrapper}
::: {.EquationContent}
::: {.MediaObject}
![530263_1_En_6_Chapter_TeX_Equ24.png](https://i.imgur.com/8YXoHmO.jpeg)
:::
:::
:::
:::

::: {#530263_1_En_6_Chapter.xhtml#Equ25 .Equation}
::: {.EquationWrapper}
::: {.EquationContent}
::: {.MediaObject}
![530263_1_En_6_Chapter_TeX_Equ25.png](https://i.imgur.com/5SSomEc.jpeg)
:::
:::
:::
:::

This separating line is shown in Fig. [[6.13](#530263_1_En_6_Chapter.xhtml#Fig13)]{.InternalRef}.

![530263_1_En_6_Figq_HTML.png](https://i.imgur.com/VJ7dDqu.jpeg)

![530263_1_En_6_Figr_HTML.png](https://i.imgur.com/uTtTbM3.jpeg)

![530263_1_En_6_Figs_HTML.png](https://i.imgur.com/ZFg6dhI.jpeg)
:::

It is important to carefully select the training set for the ANN. Once training is complete the neuron may be used to process input/output pairs outside the training set. We call this the "Run Mode." We investigate this mode in the next section.
:::

::: {#530263_1_En_6_Chapter.xhtml#Sec13 .section .Section2 .RenderAsSection2}
### [6.6.2 ]{.HeadingNumber}Single Neuron Run Mode {.Heading}

The "Run Mode" for the single neuron model explored in the last section begins at the "else" statement. To test the sketch, compile and upload the sketch to either an Arduino UNO R3 or the Arduino Nano BLE 33 Sense. When the training portion of the sketch is complete, it enters the Run Mode. The user is prompted for values of feature inputs x1 and x2. Use values both inside and outside the original training set. Verify the algorithm places the data into the proper category.
:::

::: {#530263_1_En_6_Chapter.xhtml#Sec14 .section .Section2 .RenderAsSection2}
### [6.6.3 ]{.HeadingNumber}Artificial Neural Networks {.Heading}

::: {#530263_1_En_6_Chapter.xhtml#Par60 .Para}
The individual neuron serves as the main [building]{#530263_1_En_6_Chapter.xhtml#ITerm18} block for an artificial neural network (ANN) as shown in Fig. [[6.14](#530263_1_En_6_Chapter.xhtml#Fig14)]{.InternalRef}a. This specific ANN consists of three layers: the L1 input layer, the L2 hidden layer, and the L3 output layer. Each neuron is shown as a node (circle) in the figure.

![530263_1_En_6_Fig14_HTML.png](https://i.imgur.com/iiGb0lN.jpeg)
:::

The weighted inputs (or features) to the L1 layer are routed to each node (neuron) in the L2 hidden layer. It is called the hidden layer since it has no direct external inputs or outputs to the ANN. The output from nodes in Layer 2 serve as inputs to nodes in Layer 3. The illustrated ANN shows a fully connected network of nodes. That is, each node output in a given later provides input to every node in the next layer. Nodes in Layers 2 and 3 are modeled using the general model shown in Fig. [[6.14](#530263_1_En_6_Chapter.xhtml#Fig14)]{.InternalRef}b.

To help track the nomenclature used to label node (neuron) inputs and outputs an alternative scheme is used as shown in Fig. [[6.16](#530263_1_En_6_Chapter.xhtml#Fig16)]{.InternalRef}. In this simplified line diagram the nodes (neurons) are shown as vertical lines. The corresponding inputs, bias, and output for each node are shown.

::: {#530263_1_En_6_Chapter.xhtml#Par63 .Para}
The ANN is analyzed in the forward direction from left to right using the neuron model provided in Fig. [[6.14](#530263_1_En_6_Chapter.xhtml#Fig14)]{.InternalRef}b and the procedural notes provided in Fig. [[6.15](#530263_1_En_6_Chapter.xhtml#Fig15)]{.InternalRef}. The step--by--step approach for analyzing the ANN is illustrated in Fig. [[6.16](#530263_1_En_6_Chapter.xhtml#Fig16)]{.InternalRef}. The numbers within the "bubbles" correspond to the corresponding steps in Fig. [[6.15](#530263_1_En_6_Chapter.xhtml#Fig15)]{.InternalRef}. The mathematical description provided here is based on the excellent development by \[[[4](#530263_1_En_6_Chapter.xhtml#CR4)]{.CitationRef}, [[6](#530263_1_En_6_Chapter.xhtml#CR6)]{.CitationRef}, [[8](#530263_1_En_6_Chapter.xhtml#CR8)]{.CitationRef}\].

![530263_1_En_6_Fig15_HTML.png](https://i.imgur.com/qyHlLjD.jpeg)

![530263_1_En_6_Fig16_HTML.png](https://i.imgur.com/kQmQT8U.jpeg)
:::

::: {#530263_1_En_6_Chapter.xhtml#Par64 .Para}
The error terms developed at the ANN outputs [are]{#530263_1_En_6_Chapter.xhtml#ITerm19} backpropagated from right to left to update the weights of the other layers as shown in Fig. [[6.17](#530263_1_En_6_Chapter.xhtml#Fig17)]{.InternalRef}. The overall goal is to adjust the ANN network weights and biases to reduce the error between actual and desired outputs. As shown in red, the errors at each output are backpropagated through the ANN network to update the upstream weights.

![530263_1_En_6_Fig17_HTML.png](https://i.imgur.com/ayhGlmr.jpeg)
:::

As before, a training set is used to iteratively set the weights and biases until desired error values at the ANN outputs are achieved. The ANN network weights and biases may be updated after each input/output pair sample, after a batch of some set number of input/output samples, or after the entire set of samples (epoch) is completed. In the upcoming sketch, we update the ANN network weights after each input/output sample \[[[2](#530263_1_En_6_Chapter.xhtml#CR2)]{.CitationRef}\].

::: {#530263_1_En_6_Chapter.xhtml#Par66 .Para}
It is important to carefully select the training set for the ANN. Once training is complete the ANN may be used to process input/output pairs outside the training set. We call this the "Run Mode." If a new input/output pair entered into the ANN that was well characterized by the training set, the ANN will operate in [the]{#530263_1_En_6_Chapter.xhtml#ITerm20} interpolation mode. On the other hand, if a new input/output pair is chosen in a poorly characterized area, the ANN operates in [the]{#530263_1_En_6_Chapter.xhtml#ITerm21} extrapolation mode and may yield poor results \[[[10](#530263_1_En_6_Chapter.xhtml#CR10)]{.CitationRef}\]. For this specific example, the training set shown in Fig. [[6.18](#530263_1_En_6_Chapter.xhtml#Fig18)]{.InternalRef} is used. A high level UML activity diagram is provided in Fig. [[6.19](#530263_1_En_6_Chapter.xhtml#Fig19)]{.InternalRef} for the ANN sketch.

![530263_1_En_6_Fig18_HTML.png](https://i.imgur.com/QgBr9CZ.jpeg)

![530263_1_En_6_Fig19_HTML.png](https://i.imgur.com/gIdltFR.jpeg)

![530263_1_En_6_Figt_HTML.png](https://i.imgur.com/686G9aK.jpeg)

![530263_1_En_6_Figu_HTML.png](https://i.imgur.com/QLSv4pV.jpeg)

![530263_1_En_6_Figv_HTML.png](https://i.imgur.com/WTbdOBe.jpeg)

![530263_1_En_6_Figw_HTML.png](https://i.imgur.com/wYkbBCd.jpeg)

![530263_1_En_6_Figx_HTML.png](https://i.imgur.com/jwkhaTK.jpeg)

![530263_1_En_6_Figy_HTML.png](https://i.imgur.com/bjFkSue.jpeg)

![530263_1_En_6_Figz_HTML.png](https://i.imgur.com/dxH7a20.jpeg)

![530263_1_En_6_Figaa_HTML.png](https://i.imgur.com/dCbL58o.jpeg)

![530263_1_En_6_Figab_HTML.png](https://i.imgur.com/syOGBZA.jpeg)
:::
:::

::: {#530263_1_En_6_Chapter.xhtml#Sec15 .section .Section2 .RenderAsSection2}
### [6.6.4 ]{.HeadingNumber}ANN Convergence {.Heading}

::: {#530263_1_En_6_Chapter.xhtml#Par67 .Para}
During ANN training, the mean squared error should decline and eventually reach the desired goal. Depending on [the]{#530263_1_En_6_Chapter.xhtml#ITerm22} specific ANN configuration and data set, this may not occur. If an ANN does not converge toward the MSE goal, the following actions may be taken:

::: {.UnorderedList}
-   Randomize initial weights and biases to small numbers. In the previous sketch, this is accomplished by function "randomize_weights_bias()." Within the function each ANN weight and bias is initially set to a small random value ranging from ±0.005 to 0.100

-   Randomize the order that input/output data pairs are provided to the ANN in a given epoch. In the previous sketch, this is accomplished by function "get_unused_random_number()." This function provides a random number from 0 to the training_set_size--1 to select a random order of data set input/output pairs to the ANN for training.

-   Provide a larger ANN training set. It is recommended to have ten different entries for each input feature. In the previous sketch we used 24 input/output data pairs for the two input features x1 and x2.

-   Precondition the data set. In the previous sketch, this is accomplished by function "z_score_input()." This data normalization set replaces each input in the data set with its z score equivalent \[[[1](#530263_1_En_6_Chapter.xhtml#CR1)]{.CitationRef}\]. A given input value's z score [is]{#530263_1_En_6_Chapter.xhtml#ITerm23} calculated by subtracting the data set input mean from the input value and then dividing by the standard deviation of the input data set. This has the overall effect of providing an equivalent data set with a mean of zero and a standard deviation of one as shown in Fig. [[6.18](#530263_1_En_6_Chapter.xhtml#Fig18)]{.InternalRef}.

-   Adjust the ANN architecture (e.g. change the number of nodes within the hidden layer). Several authors have indicated this is a trial and error process.
:::
:::
:::
:::

::: {#530263_1_En_6_Chapter.xhtml#Sec16 .section .Section1 .RenderAsSection1}
## [6.7 ]{.HeadingNumber}Deep Neural Networks--Introduction to Software Tools {.Heading}

In this chapter we have explored the fundamentals of perceptrons and ANNs. These basic concepts may be extended to develop multilayer or deep neural networks. To explore these concepts require advanced machine learning tools based on the TensorFlow software suite. The tool suite was originally developed by Google and now is open source software.

In this section we provide a brief introduction to the TensorFlow software tool suite. This is a logical next step in your study of AI and ML concepts. The reader is highly encouraged to obtain a copy of "TinyML--Machine Learning with TensorFlow Lite on Arduino and Ultra--Low--Power Microcontrollers" by Pete Warden and Daniel Situnayake to pursue this next step.^[^13]^ The book provides a thorough, step--by--step introduction to advanced machine learning tools and deep learning network development.

::: {#530263_1_En_6_Chapter.xhtml#Par76 .Para}
The deep learning workflow used by TensorFlow is shown in Fig. [[6.20](#530263_1_En_6_Chapter.xhtml#Fig20)]{.InternalRef} \[[[9](#530263_1_En_6_Chapter.xhtml#CR9)]{.CitationRef}\]. It is similar to the flow used to develop perceptron and ANN models earlier in the chapter. Software tools used in deep learning network include:

::: {.UnorderedList}
-   Python: programming language used for ML development,

-   TensorFlow: tool suite for training, implementing, and testing a deep learning network,

-   TensorFlow Lite: TensorFlow variant for mobile app development,

-   TensorFlow Lite for Microcontrollers: TensorFlow variant for microcontroller--based application development^[^14]^; and

-   Jupyter Notebooks: provides for a well--documented ML application with supporting comments, code, and visualizations;

-   Colaboratory (CoLab): online environment to run and share Jupyter Notebook ML projects.
:::

![530263_1_En_6_Fig20_HTML.png](https://i.imgur.com/0UwRrAy.jpeg)
:::

::: {#530263_1_En_6_Chapter.xhtml#Par84 .Para}
Typically when developing a deep learning application for a microcontroller steps 1 through 5 are performed by a host computer. Once the model is trained and complete it is loaded to the microcontroller for inference testing and refinement. Warden and Situnayake provide four trained models in their "Arduino_TensorFlowLibrary." The library is updated daily and may be downloaded from their book associated download site. Once downloaded, the library may be imported to the Arduino IDE (Sketch[![530263_1_En_6_Chapter_TeX_IEq4.png](https://i.imgur.com/s3uMiOp.jpeg)]{#530263_1_En_6_Chapter.xhtml#IEq4 .InlineEquation}Add .Zip Library). Trained examples include:

::: {.UnorderedList}
-   hello_world: The algorithm takes as input a value of *x* and predicts an output [![530263_1_En_6_Chapter_TeX_IEq5.png](https://i.imgur.com/QyP4rBk.jpeg)]{#530263_1_En_6_Chapter.xhtml#IEq5 .InlineEquation}

-   magic_wand: The trained algorithm uses the onboard accelerometer to detect a wing, ring, or slope wand gestures and provide LED and Serial Monitor output.

-   micro_speech: Using a trained speech recognition application, illuminates a green LED when the word "yes" is spoken and turns on a red LED when the word "no" is spoken.

-   person_detection: Provides a trained algorithm to take an image as input and determine whether a face is shown or not. If a face is detected an LED is illuminated.
:::
:::

You can see these trained algorithms may be readily adapted to perform other useful and interesting actions. Eventually, you will want to develop and train your own TensorFlow application from scratch. The interested reader is invited to explore this next step in Warden and Situnayake's book.
:::

::: {#530263_1_En_6_Chapter.xhtml#Sec17 .section .Section1 .RenderAsSection1}
## [6.8 ]{.HeadingNumber}Application: ANN Robot Control {.Heading}

In previous chapters we have developed a control algorithm for a maze navigating robot. Develop an ANN network to control a robot with three sensors (left, center, and right) and four possible movement alternatives (left turn, right turn, forward, and reverse) in a maze.

::: {#530263_1_En_6_Chapter.xhtml#Par91 .Para}
Deliverables:

::: {.UnorderedList}
-   A diagram of your ANN network,

-   The data set used to train the ANN network,

-   A converging Arduino sketch modeling the ANN network, and

-   A test plan demonstrating robot control operation.
:::
:::
:::

::: {#530263_1_En_6_Chapter.xhtml#Sec18 .section .Section1 .RenderAsSection1}
## [6.9 ]{.HeadingNumber}Summary {.Heading}

In this chapter we explored the concept of neurons and neuron models to solve real world challenges. We began with a brief description of the biological neuron and investigated a model of the neuron, called the perceptron, developed by Frank Rosenblatt in 1959. We used the single perceptron model to separate objects into two categories. We extended the model to include additional perceptrons to separate objects into multiple categories. We then investigated the single neuron and then explored the concept of backpropagation and developed a three--layer feed--forward network. Along the way we developed Arduino sketches of these different models. We concluded the chapter with a brief introduction to software tools to develop and implement deep neural networks.
:::

::: {#530263_1_En_6_Chapter.xhtml#Sec19 .section .Section1 .RenderAsSection1}
## [6.10 ]{.HeadingNumber}Problems {.Heading}

::: {#530263_1_En_6_Chapter.xhtml#Par97 .Para}
::: {.OrderedList}
1.  ::: {.ItemNumber}
    1\.
    :::

    ::: {.ItemContent}
    Describe the capabilities and limitations of a single perceptron model.
    :::

    ::: {.ClearBoth}
     
    :::

2.  ::: {.ItemNumber}
    2\.
    :::

    ::: {.ItemContent}
    Describe the capabilities and limitations of a multiple perceptron model.
    :::

    ::: {.ClearBoth}
     
    :::

3.  ::: {.ItemNumber}
    3\.
    :::

    ::: {.ItemContent}
    Describe the difference between the train and run modes in an artificial neural network.
    :::

    ::: {.ClearBoth}
     
    :::

4.  ::: {.ItemNumber}
    4\.
    :::

    ::: {.ItemContent}
    Implement the Run Mode for the Tomato Sorter example using the single perceptron model.
    :::

    ::: {.ClearBoth}
     
    :::

5.  ::: {.ItemNumber}
    5\.
    :::

    ::: {.ItemContent}
    Develop a data set that a multiple perceptron model can not categorize. What limits the model from categorizing the data set?
    :::

    ::: {.ClearBoth}
     
    :::

6.  ::: {.ItemNumber}
    6\.
    :::

    ::: {.ItemContent}
    Using the data set developed in the question above demonstrate categorization with an artificial neural network.
    :::

    ::: {.ClearBoth}
     
    :::

7.  ::: {.ItemNumber}
    7\.
    :::

    ::: {.ItemContent}
    You have developed an artificial neural network that will not converge. What are possible remedies?
    :::

    ::: {.ClearBoth}
     
    :::

8.  ::: {.ItemNumber}
    8\.
    :::

    ::: {.ItemContent}
    How is converge measured in an artificial neural network? Explain.
    :::

    ::: {.ClearBoth}
     
    :::

9.  ::: {.ItemNumber}
    9\.
    :::

    ::: {.ItemContent}
    In previous chapters we have developed a control algorithm for a maze navigating robot. Our goal is to develop an ANN network to control a robot with three sensors (left, center, and right) and four possible movement alternatives (left turn, right turn, forward, and reverse) in a maze. Provide a diagram of the ANN network. How many layers will the ANN contain? How many nodes will be in each layer?
    :::

    ::: {.ClearBoth}
     
    :::

10. ::: {.ItemNumber}
    10\.
    :::

    ::: {.ItemContent}
    Develop an Arduino sketch to implement a converging ANN for the control system described in the question above.
    :::

    ::: {.ClearBoth}
     
    :::

11. ::: {.ItemNumber}
    11\.
    :::

    ::: {.ItemContent}
    Compare and contrast fuzzy logic versus ANN mechanisms for controlling a robot.
    :::

    ::: {.ClearBoth}
     
    :::

12. ::: {.ItemNumber}
    12\.
    :::

    ::: {.ItemContent}
    Earlier in the chapter we investigated a tomato sorter application. Implement a tomato sorter to place tomatoes into the following groups: small green, small red, large green, and large red. Will you use a multiple perceptron model or ANN? Explain.
    :::

    ::: {.ClearBoth}
     
    :::

13. ::: {.ItemNumber}
    13\.
    :::

    ::: {.ItemContent}
    Implement the sorter described in the question above. Demonstrate proper sorter operation.
    :::

    ::: {.ClearBoth}
     
    :::

14. ::: {.ItemNumber}
    14\.
    :::

    ::: {.ItemContent}
    What are different techniques for normalizing the input data to an ANN network?
    :::

    ::: {.ClearBoth}
     
    :::

15. ::: {.ItemNumber}
    15\.
    :::

    ::: {.ItemContent}
    Complete the Run Mode for the ANN UML activity diagram.
    :::

    ::: {.ClearBoth}
     
    :::

16. ::: {.ItemNumber}
    16\.
    :::

    ::: {.ItemContent}
    Adapt the micro_speech algorithm in the "Arduino_TensorFlowLibrary" to turn a small motor on and off with voice commands.
    :::

    ::: {.ClearBoth}
     
    :::
:::
:::
:::

```{=html}
<aside aria-labelledby="Bib1Heading" class="Bibliography" id="Bib1">
```
::: {.bibliography role="doc-bibliography"}
::: {#530263_1_En_6_Chapter.xhtml#Bib1Heading .Heading}
References
:::

1.  ::: {.CitationNumber}
    1\.
    :::

    ::: {#530263_1_En_6_Chapter.xhtml#CR1 .CitationContent}
    Baeldung, *Normalizing Inputs for an Artificial Neural Network*, [[[www.​baeldung.​com]{.RefSource}](http://www.baeldung.com)]{.ExternalRef}.
    :::

2.  ::: {.CitationNumber}
    2\.
    :::

    ::: {#530263_1_En_6_Chapter.xhtml#CR2 .CitationContent}
    J. Brownlee, *Difference Between a Batch and an Epoch in a Neural Network*, [[[www.​machinelearningm​atery.​com]{.RefSource}](http://www.machinelearningmatery.com)]{.ExternalRef}, July 2018.
    :::

3.  ::: {.CitationNumber}
    3\.
    :::

    ::: {#530263_1_En_6_Chapter.xhtml#CR3 .CitationContent}
    Dan, *Single Layer Perceptron Explained,* ML Corner, October 13, 2020.
    :::

4.  ::: {.CitationNumber}
    4\.
    :::

    ::: {#530263_1_En_6_Chapter.xhtml#CR4 .CitationContent}
    A.D. Kulkarni, *Computer Vision and Fuzzy--Neural Systems,* Prentice Hall, 2001.
    :::

5.  ::: {.CitationNumber}
    5\.
    :::

    ::: {#530263_1_En_6_Chapter.xhtml#CR5 .CitationContent}
    M.L. Minsky and S.A. Papert, *Perceptrons*, expanded edition, The MIT Press, 1988.
    :::

6.  ::: {.CitationNumber}
    6\.
    :::

    ::: {#530263_1_En_6_Chapter.xhtml#CR6 .CitationContent}
    T. Rashid, *Make Your Own Neural Network,* Middletown, DE, 2017.
    :::

7.  ::: {.CitationNumber}
    7\.
    :::

    ::: {#530263_1_En_6_Chapter.xhtml#CR7 .CitationContent}
    C.F. Stevens, *The Neuron*, Scientific American, pp. 55--65, 1979.
    :::

8.  ::: {.CitationNumber}
    8\.
    :::

    ::: {#530263_1_En_6_Chapter.xhtml#CR8 .CitationContent}
    M. Taylor, *Neural Networks A Visual Introduction for Beginners*, Blue Windmill Media, 2017.
    :::

9.  ::: {.CitationNumber}
    9\.
    :::

    ::: {#530263_1_En_6_Chapter.xhtml#CR9 .CitationContent}
    P. Warden and D. Situnayake, *TinyML--Machine Learning with TensorFlow Lite on Arduino and Ultra--Low--Power Microcontrollers,* Pete Warden and Daniel Situnayake, O'Reilly, 2020.
    :::

10. ::: {.CitationNumber}
    10\.
    :::

    ::: {#530263_1_En_6_Chapter.xhtml#CR10 .CitationContent}
    B.J. Wythoff, *Backpropagation Neural Networks--A Tutorial,* Chemometrics and Intelligent Laboratory Systems, 18 (1993), 115--155.[[[Crossref](https://doi.org/10.1016/0169-7439(93)80052-J)]{.Occurrence .OccurrenceDOI}]{.Occurrences}
    :::
:::

```{=html}
</aside>
```
```{=html}
<aside aria-label="Footnotes" class="FootnoteSection" epub:type="footnotes">
```
::: {.Heading}
Footnotes
:::

::: {.Footnote}
[[1](#530263_1_En_6_Chapter.xhtml#Fn1_source)]{.FootnoteNumber}

::: {.ClearBoth}
 
:::
:::

::: {.Footnote}
[[2](#530263_1_En_6_Chapter.xhtml#Fn2_source)]{.FootnoteNumber}

::: {.ClearBoth}
 
:::
:::

```{=html}
</aside>
```
:::
:::

[]{#530263_1_En_BookBackmatter_OnlinePDF.xhtml}

::: {.backmatter}
::: {.BookBackmatter}
::: {#530263_1_En_BookBackmatter_OnlinePDF.xhtml#Ind1 .Index .index role="doc-index"}
::: {.Headings}
::: {.Heading}
Index
:::
:::

::: {.IndexDiv}
::: {.Headings}
::: {.Heading}
A
:::
:::

::: {.IndexEntry}
::: {.PrimaryIE}
ADC[33]{.IndexPageNumbers}
:::
:::

::: {.IndexEntry}
::: {.PrimaryIE}
ADC process[32]{.IndexPageNumbers}
:::
:::

::: {.IndexEntry}
::: {.PrimaryIE}
ANN convergence[197]{.IndexPageNumbers}
:::
:::

::: {.IndexEntry}
::: {.PrimaryIE}
ANN extrapolation mode[183]{.IndexPageNumbers}
:::
:::

::: {.IndexEntry}
::: {.PrimaryIE}
ANN interpolation mode[183]{.IndexPageNumbers}
:::
:::

::: {.IndexEntry}
::: {.PrimaryIE}
ANN model[181]{.IndexPageNumbers}
:::
:::

::: {.IndexEntry}
::: {.PrimaryIE}
ANN, z score input[197]{.IndexPageNumbers}
:::
:::

::: {.IndexEntry}
::: {.PrimaryIE}
APDS-9960[49]{.IndexPageNumbers}
:::
:::

::: {.IndexEntry}
::: {.PrimaryIE}
Arduino ADE[6]{.IndexPageNumbers}
:::
:::

::: {.IndexEntry}
::: {.PrimaryIE}
Arduino Development Environment[1]{.IndexPageNumbers}
:::
:::

::: {.IndexEntry}
::: {.PrimaryIE}
Arduino Quickstart[3]{.IndexPageNumbers}
:::
:::

::: {.IndexEntry}
::: {.PrimaryIE}
Arduino team[1]{.IndexPageNumbers}
:::
:::

::: {.IndexEntry}
::: {.PrimaryIE}
Artificial neuron network (ANN)[177]{.IndexPageNumbers}
:::
:::

::: {.IndexEntry}
::: {.PrimaryIE}
ASCII[24]{.IndexPageNumbers}
:::
:::

::: {.IndexEntry}
::: {.PrimaryIE}
Attributes[104]{.IndexPageNumbers}
:::
:::

::: {.IndexEntry}
::: {.PrimaryIE}
Axon[150]{.IndexPageNumbers}
:::
:::
:::

::: {.IndexDiv}
::: {.Headings}
::: {.Heading}
B
:::
:::

::: {.IndexEntry}
::: {.PrimaryIE}
Backpropagation[183]{.IndexPageNumbers}
:::
:::

::: {.IndexEntry}
::: {.PrimaryIE}
Barometer[46]{.IndexPageNumbers}
:::
:::

::: {.IndexEntry}
::: {.PrimaryIE}
Biological neuron[150]{.IndexPageNumbers}
:::
:::

::: {.IndexEntry}
::: {.PrimaryIE}
BLE[35]{.IndexPageNumbers}
:::
:::

::: {.IndexEntry}
::: {.PrimaryIE}
BLE UUID[36]{.IndexPageNumbers}
:::
:::

::: {.IndexEntry}
::: {.PrimaryIE}
Bluetooth Low Energy (BLE)[35]{.IndexPageNumbers}
:::
:::
:::

::: {.IndexDiv}
::: {.Headings}
::: {.Heading}
C
:::
:::

::: {.IndexEntry}
::: {.PrimaryIE}
Color sensor[52]{.IndexPageNumbers}
:::
:::

::: {.IndexEntry}
::: {.PrimaryIE}
Convergence[166]{.IndexPageNumbers}
:::
:::
:::

::: {.IndexDiv}
::: {.Headings}
::: {.Heading}
D
:::
:::

::: {.IndexEntry}
::: {.PrimaryIE}
Darlington configuration[76]{.IndexPageNumbers}
:::
:::

::: {.IndexEntry}
::: {.PrimaryIE}
DC motor[73, 75]{.IndexPageNumbers}
:::
:::

::: {.IndexEntry}
::: {.PrimaryIE}
DC motor ratings[75]{.IndexPageNumbers}
:::
:::

::: {.IndexEntry}
::: {.PrimaryIE}
Decision trees[104]{.IndexPageNumbers}
:::
:::

::: {.IndexEntry}
::: {.PrimaryIE}
Direct Sequence Spread Spectrum (FHSS)[35]{.IndexPageNumbers}
:::
:::

::: {.IndexEntry}
::: {.PrimaryIE}
Duty cycle[22]{.IndexPageNumbers}
:::
:::
:::

::: {.IndexDiv}
::: {.Headings}
::: {.Heading}
E
:::
:::

::: {.IndexEntry}
::: {.PrimaryIE}
EFLL Library[124, 130]{.IndexPageNumbers}
:::
:::

::: {.IndexEntry}
::: {.PrimaryIE}
Entropy[106]{.IndexPageNumbers}
:::
:::

::: {.IndexEntry}
::: {.PrimaryIE}
Epoch[178]{.IndexPageNumbers}
:::
:::
:::

::: {.IndexDiv}
::: {.Headings}
::: {.Heading}
F
:::
:::

::: {.IndexEntry}
::: {.PrimaryIE}
Flash EEPROM[21]{.IndexPageNumbers}
:::
:::

::: {.IndexEntry}
::: {.PrimaryIE}
Frequency hopping[35]{.IndexPageNumbers}
:::
:::

::: {.IndexEntry}
::: {.PrimaryIE}
Fuzzy logic[123]{.IndexPageNumbers}
:::
:::

::: {.IndexEntry}
::: {.PrimaryIE}
Fuzzy rule development[129]{.IndexPageNumbers}
:::
:::

::: {.IndexEntry}
::: {.PrimaryIE}
Fuzzy trapezoids[126]{.IndexPageNumbers}
:::
:::

::: {.IndexEntry}
::: {.PrimaryIE}
Fuzzy_controlled_robot[139]{.IndexPageNumbers}
:::
:::

::: {.IndexEntry}
::: {.PrimaryIE}
Fuzzy_process[124]{.IndexPageNumbers}
:::
:::
:::

::: {.IndexDiv}
::: {.Headings}
::: {.Heading}
G
:::
:::

::: {.IndexEntry}
::: {.PrimaryIE}
Gesture detection[49]{.IndexPageNumbers}
:::
:::

::: {.IndexEntry}
::: {.PrimaryIE}
Greenhouse[36]{.IndexPageNumbers}
:::
:::
:::

::: {.IndexDiv}
::: {.Headings}
::: {.Heading}
I
:::
:::

::: {.IndexEntry}
::: {.PrimaryIE}
I2C[31]{.IndexPageNumbers}
:::
:::

::: {.IndexEntry}
::: {.PrimaryIE}
Inertial measurement unit (IMU)[44]{.IndexPageNumbers}
:::
:::

::: {.IndexEntry}
::: {.PrimaryIE}
Input membership functions[126]{.IndexPageNumbers}
:::
:::

::: {.IndexEntry}
::: {.PrimaryIE}
IR sensors[79]{.IndexPageNumbers}
:::
:::

::: {.IndexEntry}
::: {.PrimaryIE}
ISM frequency band[35]{.IndexPageNumbers}
:::
:::
:::

::: {.IndexDiv}
::: {.Headings}
::: {.Heading}
K
:::
:::

::: {.IndexEntry}
::: {.PrimaryIE}
K Nearest Neighbors (KNN)[99]{.IndexPageNumbers}
:::
:::

::: {.IndexEntry}
::: {.PrimaryIE}
KNN color classifier[99]{.IndexPageNumbers}
:::
:::
:::

::: {.IndexDiv}
::: {.Headings}
::: {.Heading}
L
:::
:::

::: {.IndexEntry}
::: {.PrimaryIE}
LCD, serial[24]{.IndexPageNumbers}
:::
:::

::: {.IndexEntry}
::: {.PrimaryIE}
LED biasing[72]{.IndexPageNumbers}
:::
:::

::: {.IndexEntry}
::: {.PrimaryIE}
Light emitting diode (LED)[72]{.IndexPageNumbers}
:::
:::

::: {.IndexEntry}
::: {.PrimaryIE}
Linear actuator[74]{.IndexPageNumbers}
:::
:::

::: {.IndexEntry}
::: {.PrimaryIE}
Linguistic variable[129]{.IndexPageNumbers}
:::
:::

::: {.IndexEntry}
::: {.PrimaryIE}
Liquid crystal display (LCD)[24, 73]{.IndexPageNumbers}
:::
:::
:::

::: {.IndexDiv}
::: {.Headings}
::: {.Heading}
M
:::
:::

::: {.IndexEntry}
::: {.PrimaryIE}
Maze navigating robot[78]{.IndexPageNumbers}
:::
:::

::: {.IndexEntry}
::: {.PrimaryIE}
Mean square error[178]{.IndexPageNumbers}
:::
:::

::: {.IndexEntry}
::: {.PrimaryIE}
Microphone, digital[55]{.IndexPageNumbers}
:::
:::

::: {.IndexEntry}
::: {.PrimaryIE}
Motor operating parameters[77]{.IndexPageNumbers}
:::
:::

::: {.IndexEntry}
::: {.PrimaryIE}
Multiple perceptron model[167]{.IndexPageNumbers}
:::
:::

::: {.IndexEntry}
::: {.PrimaryIE}
Myelin[150]{.IndexPageNumbers}
:::
:::
:::

::: {.IndexDiv}
::: {.Headings}
::: {.Heading}
N
:::
:::

::: {.IndexEntry}
::: {.PrimaryIE}
Nano 33 BLE Sense[17, 64]{.IndexPageNumbers}
:::
:::

::: {.IndexEntry}
::: {.PrimaryIE}
NINA B306 module[20]{.IndexPageNumbers}
:::
:::

::: {.IndexEntry}
::: {.PrimaryIE}
NRF52840 processor[17, 64]{.IndexPageNumbers}
:::
:::
:::

::: {.IndexDiv}
::: {.Headings}
::: {.Heading}
O
:::
:::

::: {.IndexEntry}
::: {.PrimaryIE}
Output device[72]{.IndexPageNumbers}
:::
:::

::: {.IndexEntry}
::: {.PrimaryIE}
Output_membership_functions[129]{.IndexPageNumbers}
:::
:::
:::

::: {.IndexDiv}
::: {.Headings}
::: {.Heading}
P
:::
:::

::: {.IndexEntry}
::: {.PrimaryIE}
Perceptron[149]{.IndexPageNumbers}
:::
:::

::: {.IndexEntry}
::: {.PrimaryIE}
Perceptron challenegs[176]{.IndexPageNumbers}
:::
:::

::: {.IndexEntry}
::: {.PrimaryIE}
Perceptron model[150]{.IndexPageNumbers}
:::
:::

::: {.IndexEntry}
::: {.PrimaryIE}
Perceptron training[151]{.IndexPageNumbers}
:::
:::

::: {.IndexEntry}
::: {.PrimaryIE}
Proximity sensor[54]{.IndexPageNumbers}
:::
:::

::: {.IndexEntry}
::: {.PrimaryIE}
Pulse width modulation (PWM)[77]{.IndexPageNumbers}
:::
:::

::: {.IndexEntry}
::: {.PrimaryIE}
PWM[22]{.IndexPageNumbers}
:::
:::
:::

::: {.IndexDiv}
::: {.Headings}
::: {.Heading}
R
:::
:::

::: {.IndexEntry}
::: {.PrimaryIE}
RAM[21]{.IndexPageNumbers}
:::
:::

::: {.IndexEntry}
::: {.PrimaryIE}
Relative humidity[47]{.IndexPageNumbers}
:::
:::

::: {.IndexEntry}
::: {.PrimaryIE}
Robot IR sensors[78]{.IndexPageNumbers}
:::
:::

::: {.IndexEntry}
::: {.PrimaryIE}
Robot platform[79]{.IndexPageNumbers}
:::
:::

::: {.IndexEntry}
::: {.PrimaryIE}
Robot steering[79]{.IndexPageNumbers}
:::
:::

::: {.IndexEntry}
::: {.PrimaryIE}
Root node[105]{.IndexPageNumbers}
:::
:::

::: {.IndexEntry}
::: {.PrimaryIE}
Rosenblatt[149]{.IndexPageNumbers}
:::
:::

::: {.IndexEntry}
::: {.PrimaryIE}
Run mode[162]{.IndexPageNumbers}
:::
:::
:::

::: {.IndexDiv}
::: {.Headings}
::: {.Heading}
S
:::
:::

::: {.IndexEntry}
::: {.PrimaryIE}
Serial communications[23]{.IndexPageNumbers}
:::
:::

::: {.IndexEntry}
::: {.PrimaryIE}
Servo motor[74]{.IndexPageNumbers}
:::
:::

::: {.IndexEntry}
::: {.PrimaryIE}
Simulator[58]{.IndexPageNumbers}
:::
:::

::: {.IndexEntry}
::: {.PrimaryIE}
Sketch[7]{.IndexPageNumbers}
:::
:::

::: {.IndexEntry}
::: {.PrimaryIE}
Sketchbook[7]{.IndexPageNumbers}
:::
:::

::: {.IndexEntry}
::: {.PrimaryIE}
Soma[150]{.IndexPageNumbers}
:::
:::

::: {.IndexEntry}
::: {.PrimaryIE}
SPI[27]{.IndexPageNumbers}
:::
:::

::: {.IndexEntry}
::: {.PrimaryIE}
Stepper motor[74]{.IndexPageNumbers}
:::
:::

::: {.IndexEntry}
::: {.PrimaryIE}
Strip LED[11]{.IndexPageNumbers}
:::
:::

::: {.IndexEntry}
::: {.PrimaryIE}
Switch debouncing[72]{.IndexPageNumbers}
:::
:::

::: {.IndexEntry}
::: {.PrimaryIE}
Switch interface[71]{.IndexPageNumbers}
:::
:::

::: {.IndexEntry}
::: {.PrimaryIE}
Switches[70]{.IndexPageNumbers}
:::
:::
:::

::: {.IndexDiv}
::: {.Headings}
::: {.Heading}
T
:::
:::

::: {.IndexEntry}
::: {.PrimaryIE}
Timeline[97]{.IndexPageNumbers}
:::
:::

::: {.IndexEntry}
::: {.PrimaryIE}
Tree traversal[118]{.IndexPageNumbers}
:::
:::
:::

::: {.IndexDiv}
::: {.Headings}
::: {.Heading}
U
:::
:::

::: {.IndexEntry}
::: {.PrimaryIE}
Unidirectional DC motor control[76]{.IndexPageNumbers}
:::
:::

::: {.IndexEntry}
::: {.PrimaryIE}
USART[23]{.IndexPageNumbers}
:::
:::
:::

::: {.IndexDiv}
::: {.Headings}
::: {.Heading}
V
:::
:::

::: {.IndexEntry}
::: {.PrimaryIE}
Volatile[21]{.IndexPageNumbers}
:::
:::

::: {.IndexEntry}
::: {.PrimaryIE}
Voltage regulator[68]{.IndexPageNumbers}
:::
:::
:::
:::
:::
:::

[^1]: We emphasize throughout the book that this is a 3.3 VDC processor. Processor inputs and outputs must not exceed 3.3 VDC!

[^2]: This chapter is included for completeness with permission from "Arduino I: Getting Started.".

[^3]: Portions of the theory provided in the chapter was adapted with permission from "Arduino I: Getting Started, S. Barrett, Morgan & Claypool Publishers, 2020.

[^4]: "Arduino III: Internet of Things," S.F. Barrett, Morgan and Claypool Publishers, 2021.

[^5]: BLE applications such as nRF connect or LightBlue are available from your cell phone app store.

[^6]: Selected portions of this chapter have been adapted for the Nano 33 BLE Sense 3.3 VDC processor from "Arduino I: Getting Started" for completeness.

[^7]: This example appeared in "Arduino I: Getting Started," S. Barrett, Morgan and Claypool Publishers, 2020. It has been adapted with permission for the 3.3 VDC Arduino Nano 33 BLE Sense microcontroller.

[^8]: Please see "Artificial Intelligence An Illustrated History" by Clifford Pickover for a thorough and fascinating treatment of this topic back to 1300 BCE.

[^9]: Digital proximity, ambient light, RGB, and gesture sensor (ADPS--9960 onboard the Arduino Nano 33 BLE Sense.

[^10]: Background information for this section is from \[[[5](#530263_1_En_4_Chapter.xhtml#CR5)]{.CitationRef}, [[8](#530263_1_En_4_Chapter.xhtml#CR8)]{.CitationRef}\].

[^11]: Several years back on a fishing trip my car collided with a wayward deer on an interstate in Eastern Montana. I am thankful that my passengers and I survived the encounter.

[^12]: "68HC12 Microcontroller Theory and Application, D. J. Pack and S. F. Barrett, Prentice Hall," 2002.

[^13]: "TinyML--Machine Learning with TensorFlow Lite on Arduino and Ultra--Low--Power Microcontrollers," Pete Warden and Daniel Situnayake, O'Reilly \[[[9](#530263_1_En_6_Chapter.xhtml#CR9)]{.CitationRef}\].

[^14]: Implementation requires a 32--bit microcontroller such as the Arduino Nano 33 BLE Sense.
