1
00:00:01,510 --> 00:00:23,010
So Webex are as a specification implied by the World Wide Web Consortium that defines how a browser can access a VR or AR device tethered to the computer or from a browser or or the device itself

2
00:00:23,530 --> 00:00:29,180
So this in combination with Webgl to create content

3
00:00:30,060 --> 00:00:39,010
can be used to create fully immersive XR applications that in your browser

4
00:00:44,450 --> 00:00:50,600
So let us talk about some of the pros and cons of Webex

5
00:00:50,600 --> 00:01:07,590
Are some of the benefits are that it's largely divisive doorstep and that augmented and virtual reality devices can access content the same way because they are running through a browser

6
00:01:08,190 --> 00:01:09,470
And likewise

7
00:01:10,240 --> 00:01:14,550
we have the option of desktop computers and mobile phones as well

8
00:01:16,800 --> 00:01:24,420
It is also really powerful for rapid prototyping because you are running it in a browser

9
00:01:24,910 --> 00:01:29,870
There are no special tools that you have to use or install on your computer

10
00:01:30,380 --> 00:01:33,990
You can also edit your applications in real time

11
00:01:40,740 --> 00:01:50,680
There is also a massive ecosystem for existing web tools already available to find for browsers

12
00:01:52,400 --> 00:01:55,950
Because Webex are is defined on the browser in the same way

13
00:01:57,840 --> 00:02:04,930
attach these libraries or frameworks seamlessly into your Webex or applications

14
00:02:05,780 --> 00:02:10,110
including different type of network infrastructure

15
00:02:10,300 --> 00:02:11,780
audio libraries

16
00:02:12,140 --> 00:02:13,450
graphics tools

17
00:02:13,870 --> 00:02:16,290
or anything else available on the web

18
00:02:18,760 --> 00:02:25,720
Howeverthere are certain downsides as well because it is reading through your browser

19
00:02:27,840 --> 00:02:32,810
There is a level of abstraction between devices and the applications

20
00:02:33,070 --> 00:02:36,060
which can limit performance sometimes

21
00:02:39,830 --> 00:02:58,950
It's also a growing standard and such because they are very different ways or different browsers of using special functionality that you might have to be aware of how it's implemented in different ways

22
00:03:00,980 --> 00:03:04,860
And have application adapt to different types of browsers

23
00:03:08,180 --> 00:03:13,170
You can also expect the same headaches you find with regular F development

24
00:03:14,920 --> 00:03:18,140
oftentimes finding unexpected behavior

25
00:03:19,140 --> 00:03:22,930
and you might not get any error messages for them

26
00:03:23,400 --> 00:03:28,870
So you'll have to debug that yourself by going through it line by line

27
00:03:34,580 --> 00:03:37,320
So how can you get started with Webex are

28
00:03:41,980 --> 00:03:50,120
You could take the Webex and link it into the Webex or API itself to build your own applications from scratch

29
00:03:50,550 --> 00:03:57,140
but I would recommend using existing 3D engines that are available

30
00:03:57,860 --> 00:04:02,620
Some of the most notable are three J's

31
00:04:04,300 --> 00:04:10,480
which is a 3D engine that already has Webex support or a frame

32
00:04:10,480 --> 00:04:11,670
which is better

33
00:04:11,670 --> 00:04:15,380
Top of 3 GS for full Webex are support

34
00:04:19,900 --> 00:04:22,730
And that is the frameworks that we will be using in this tutorial

35
00:04:25,720 --> 00:04:29,690
So maybe we onto JS very similar to 3 J's

36
00:04:33,530 --> 00:04:35,800
Theres batti which this is our library really

37
00:04:35,860 --> 00:04:44,620
which is built for the Helio browser or Magic Leap VR headsets and React 360

38
00:04:45,430 --> 00:04:51,810
which is its sold 3D webxr framework design​‌​‌​​‌‌​​‌‌​​‌‌‌‌​‌​​‌‌​​‌‌​​‌‌​​‌‌​​‌‌​​‌‌‌‌​‌​​‌‌​​‌‌​​​‌​​‌‌‌‌‌‌​​‌‌​‌​‌‌‌​‌​​‌‌‌‌​‌​‌‌​​​‌‌‌‌‌‌​​‌‌​‌‌‌​​‌‌​‌​‌​​‌‌‌​‌‌​​‌‌​​​‌​​‌‌​​‌‌‌‌​‌‌​‌‌​​‌‌​‌​‌‌‌​‌​​​‌​​‌‌‌​​‌‌‌​‌​‌​‌​​‌‌​‌​‌​​‌‌‌​​‌‌‌​‌‌‌‌​​​‌‌‌​‌‌​​‌‌‌​‌‌‌‌​‌​​‌‌​​‌‌‌​‌‌​​‌‌​‌‌​​​‌‌​​‌‌​​‌‌​​‌‌‌‌​‌‌‌​‌​​‌‌​‌​‌‌‌​‌​‌‌​​​‌‌‌​​‌​​‌‌​​‌‌​​‌‌‌‌​‌​​‌‌‌​‌‌‌‌​‌‌​‌‌‌‌​‌‌‌‌‌​​‌‌‌‌​‌​​‌‌‌​​‌‌‌​‌​‌‌‌​​‌‌‌​​‌‌‌​‌​​‌‌​​‌‌‌‌‌​​​‌‌‌​‌‌‌‌​‌​​​‌​​‌‌​​‌‌​​‌‌​​‌‌‌‌​‌​‌‌‌​​‌‌‌‌‌​​​‌‌​‌‌‌‌‌​‌‌‌​‌​​‌‌‌‌​‌‌‌​‌‌​‌‌​​‌‌​‌​‌‌‌​‌‌‌​‌‌‌​‌​‌​‌​​‌‌​‌‌‌‌‌​‌‌‌​‌​​‌‌​​‌‌‌‌​‌​‌​‌‌‌​‌‌‌​‌‌‌​‌​‌‌​​​‌‌‌​‌‌‌‌​‌‌​‌‌​​‌‌​‌​‌‌‌​‌​‌‌‌‌‌​‌​‌‌‌‌‌​‌​‌​‌​​‌‌​‌​‌​​‌‌​‌​‌‌‌​‌‌​​‌‌‌​‌‌‌​‌‌‌​‌‌‌​‌​​‌‌‌‌​‌​​‌‌‌​​‌‌‌​‌​​‌‌​​‌‌‌​​‌​​‌‌‌‌​‌​​‌‌​‌‌​​​‌‌‌​​‌‌‌​‌​‌‌‌‌‌​‌‌‌​‌‌‌​‌‌‌​‌‌‌​‌‌​​‌‌‌​‌‌‌‌​​​‌‌‌‌​‌‌‌​‌‌‌​‌‌‌​‌‌​‌‌​​‌‌​​‌‌​​‌‌​‌​‌​​‌‌​​‌‌‌‌​‌‌‌​‌‌‌​‌​‌​‌‌‌​‌‌​‌‌‌‌​‌​​‌‌‌‌​‌​‌‌‌‌‌​‌‌​​‌​​‌‌​‌‌​​​‌‌‌‌​‌​​‌‌​‌​‌‌‌​‌​‌‌‌‌‌​‌‌‌‌​​​‌‌‌​‌‌‌‌​‌‌‌​‌‌‌​‌‌‌​‌‌‌​‌‌​​‌​​‌‌​‌​‌‌‌​‌​‌‌‌​​‌‌​‌‌​​​‌‌‌‌​‌‌‌​‌​‌‌‌​​‌‌‌‌‌​​​‌‌​‌​‌​​‌‌‌‌​‌​​‌‌‌​‌‌‌‌​‌‌​‌‌‌‌​‌‌​​‌‌‌​‌​‌‌‌‌‌​‌‌​‌‌‌‌​‌‌​‌‌‌‌​‌‌‌‌‌​​‌‌‌‌‌‌​​‌‌​‌‌‌​​‌‌‌​‌‌‌‌​‌‌​‌‌‌‌​‌‌​​‌​​‌‌​​‌‌​​‌‌‌​​‌​​‌‌‌​​‌​​‌‌​‌​‌‌‌​‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌ed on top of React

39
00:05:00,350 --> 00:05:01,770
So let's talk about

40
00:05:03,790 --> 00:05:14,220
Afame so it's a based with JavaScript DOM manipulation for interactions

41
00:05:14,540 --> 00:05:23,100
it supports V and A modes on all common headsets and mobile devices

42
00:05:26,620 --> 00:05:31,030
And uses an entity component system model very similar to Unity

43
00:05:34,980 --> 00:05:39,250
You can also use events and handlers for interactions

44
00:05:40,020 --> 00:05:42,750
just like traditionally web development

45
00:05:49,660 --> 00:05:49,950
Now

46
00:05:49,950 --> 00:05:54,860
let us understand a little bit more about entity component system design

47
00:05:56,600 --> 00:06:00,270
So which contrasts inheritance

48
00:06:00,280 --> 00:06:01,270
as you might expect

49
00:06:03,520 --> 00:06:09,760
So an entity component system have three different limits

50
00:06:10,390 --> 00:06:12,000
Do it as you come to expect

51
00:06:12,900 --> 00:06:21,910
It has entities which serves as the empty containers or the things or the objects of the world

52
00:06:22,810 --> 00:06:28,840
And these entities will be defined by the components associated with them

53
00:06:29,580 --> 00:06:35,230
So components are the modules you can attach to entities to

54
00:06:36,710 --> 00:06:43,580
with each component defining some type of functionality or behavior or appearance

55
00:06:44,300 --> 00:06:52,050
And this combination of components on each entity is what makes objects or that entity unique

56
00:06:53,810 --> 00:06:57,690
We also have system which behave very similarly

57
00:06:58,970 --> 00:06:59,920
two components

58
00:07:00,560 --> 00:07:16,930
and work on global scope and communicate with different types of components and are related to each other to handle things like universal principles of your virtual world

59
00:07:20,130 --> 00:07:21,890
So let's get started with an example

60
00:07:23,470 --> 00:07:25,390
So we have rabbit

61
00:07:25,390 --> 00:07:26,080
we are Orca

62
00:07:27,280 --> 00:07:32,440
and we have components to define those behaviors of those entities

63
00:07:33,630 --> 00:07:34,830
So rabbits

64
00:07:34,840 --> 00:07:36,190
herb whales

65
00:07:36,300 --> 00:07:39,820
swimand all cars that also swim

66
00:07:40,560 --> 00:07:44,480
but orcas also hunt and so

67
00:07:49,340 --> 00:07:51,350
Let's say that we have another entity

68
00:07:52,100 --> 00:07:54,410
We have something like a killer rabbit

69
00:07:56,060 --> 00:07:59,750
And if you have a killer I

70
00:08:00,840 --> 00:08:04,450
we have a couple of behaviors that you want to associate it with it

71
00:08:04,920 --> 00:08:08,150
So you want to have the ability to hop

72
00:08:08,590 --> 00:08:13,800
but you also want to have a colorable to be able to hunt

73
00:08:15,360 --> 00:08:19,570
So if you were to use an inheritance system

74
00:08:19,660 --> 00:08:22,580
you would realize that it gets very messy here

75
00:08:24,590 --> 00:08:29,580
So we would have a lot of overlapping between these different entities

76
00:08:30,050 --> 00:08:33,890
But because we are in an entity component system

77
00:08:34,420 --> 00:08:37,760
we can very easily associate

78
00:08:40,040 --> 00:08:53,670
A hop component and a heart component with a killer rabbit entity to create an entirely new entity or thing in our world

79
00:08:55,180 --> 00:08:56,670
So with this sexuality

80
00:08:57,850 --> 00:08:59,940
we can do this in a very modular way

81
00:09:03,530 --> 00:09:06,670
Let's also read this to how systems work

82
00:09:09,010 --> 00:09:12,690
So here you have three different Ris that all Ho

83
00:09:13,750 --> 00:09:18,260
and you want to have the gravity of your world change

84
00:09:20,230 --> 00:09:25,400
So you can define a gravity system that communicates

85
00:09:27,720 --> 00:09:43,400
Through all the individual hop components associated with each rabbit and tell the whole component how they are supposed to change over time based on gravity changes

86
00:09:48,200 --> 00:09:58,690
So now we will talk about how Webex are works and how a framed and its component systems work too

87
00:09:58,920 --> 00:10:02,180
So let's dive to cover this a bit

88
00:10:03,560 --> 00:10:08,620
So the next video we're going to explain for having a platform

89
00:10:09,020 --> 00:10:15,740
let's start calling some basics about HTML and JavaScript to get started
