1
00:00:00,620 --> 00:00:01,320
Hello

2
00:00:01,720 --> 00:00:03,050
so in this video

3
00:00:03,070 --> 00:00:06,850
we are going to be going over the basics of creating your own A frames application

4
00:00:06,860 --> 00:00:09,020
including how to set up the scene

5
00:00:09,020 --> 00:00:12,240
how to add some objects with including some custom models

6
00:00:12,640 --> 00:00:17,600
as well as customizing your skybox and orienting objects in the scene

7
00:00:17,750 --> 00:00:18,890
And to get started

8
00:00:18,890 --> 00:00:27,120
you will see that we have cleared up some of the other files and code from our project here and removed the things that are necessary specific for a frame

9
00:00:27,120 --> 00:00:27,910
Because again

10
00:00:27,920 --> 00:00:30,690
it's not exactly like making a 2D web page

11
00:00:31,020 --> 00:00:32,140
So it's a little different

12
00:00:32,560 --> 00:00:33,480
Most notably

13
00:00:33,480 --> 00:00:35,790
you'll see that we have added the script tag here

14
00:00:35,790 --> 00:00:40,400
So we're actually including a number of the files that are compiled in full

15
00:00:40,400 --> 00:00:41,130
released for a-frame

16
00:00:41,840 --> 00:00:44,100
that are hosted on a-frame s web site

17
00:00:44,190 --> 00:00:47,550
We're using version ．1 here specifically

18
00:00:47,820 --> 00:00:51,840
And so to create a fame to get started

19
00:00:52,350 --> 00:00:59,940
much like an HTML document has this HTML tag at the top of the entire page to create an A frames scene specifically

20
00:01:00,740 --> 00:01:08,990
we go into the body itself and we kind of have its own master parent and that this specific tag is called a dash scene

21
00:01:10,240 --> 00:01:21,310
And you will see the syntax being reproduced a lot in that every a frames that we have created specifically for a framed entities has this a dash theme syntax to it

22
00:01:21,310 --> 00:01:30,660
So we have this a screen tag here and this is going to serve as the parent of everything else that we do for our Afi environment is going to go inside it

23
00:01:32,060 --> 00:01:33,400
So we have a scene here

24
00:01:34,740 --> 00:01:37,230
So you can already tell that this is working

25
00:01:37,550 --> 00:01:38,160
We've got a preview

26
00:01:38,300 --> 00:01:40,870
hairsty or tab for the website

27
00:01:41,180 --> 00:01:43,370
and if you refresh the page here

28
00:01:43,730 --> 00:01:45,950
you'll see that it's a wided environment

29
00:01:46,230 --> 00:01:50,070
you can click and drag the because you're actually in a virtual world

30
00:01:50,440 --> 00:01:51,720
but it's entirely blank

31
00:01:51,990 --> 00:01:54,410
And it's the word of anything in space

32
00:01:55,960 --> 00:02:03,410
and you can verify that it is working because you see that a console here is showing that a frame is running and there are no errors happening so far

33
00:02:03,410 --> 00:02:04,220
so that it is good

34
00:02:04,630 --> 00:02:08,240
And we also have this VR button here that will be able to enter into VR

35
00:02:08,770 --> 00:02:11,220
So if you were on a device

36
00:02:11,220 --> 00:02:13,360
you would actually go into VR mode now

37
00:02:13,420 --> 00:02:15,080
But since we are on a desktop computer

38
00:02:15,530 --> 00:02:19,240
all you see is this black desk preca there's actually nothing to show

39
00:02:19,980 --> 00:02:26,680
So let's go back into our scene here and let's actually start adding things to this environment

40
00:02:27,370 --> 00:02:34,250
And so the A frame comes with a variety of primitive objects and shapes out of the box

41
00:02:34,520 --> 00:02:35,990
And to get started

42
00:02:36,000 --> 00:02:36,670
most notably

43
00:02:36,830 --> 00:02:38,520
we have a dashboards

44
00:02:39,210 --> 00:02:44,810
And we are going to add a couple of properties or components to this box to get started

45
00:02:45,150 --> 00:02:48,140
just to give something to look at because there are some deferred values

46
00:02:48,140 --> 00:02:49,780
but we're going to change them a little bit

47
00:02:50,140 --> 00:02:52,410
So the first thing that we're going to change is the position

48
00:02:52,610 --> 00:02:54,140
So we're going to set the position of it

49
00:02:54,400 --> 00:02:57,550
the syntax being that you have a stable element here

50
00:02:57,560 --> 00:02:59,840
and then you have this properties you associated with

51
00:03:00,270 --> 00:03:04,730
So we define the position being in XYZ coordinates

52
00:03:05,370 --> 00:03:12,600
I have some predefined values here that I use is just so that I gets place in the scene in a nice position and looks nice to start off with

53
00:03:12,830 --> 00:03:14,310
As we set up our environment

54
00:03:14,820 --> 00:03:16,820
The next scene that I will set is the rotation of it

55
00:03:17,150 --> 00:03:18,520
just to kind of show you

56
00:03:19,100 --> 00:03:19,580
So it is

57
00:03:19,580 --> 00:03:20,200
in this case

58
00:03:20,200 --> 00:03:22,740
we will use 0 0 0 for the rotation

59
00:03:23,130 --> 00:03:25,950
but that is also an XYZ axis

60
00:03:26,620 --> 00:03:27,950
One thing to note about this

61
00:03:27,960 --> 00:03:31,960
if you are not familiar with graphics libraries with 3D engines

62
00:03:31,970 --> 00:03:32,600
xy

63
00:03:32,610 --> 00:03:33,090
and z

64
00:03:33,160 --> 00:03:35,960
kind of contrary to what you might think

65
00:03:36,380 --> 00:03:41,580
x and y plane kind of exist in terms of the plane of the screen you are looking at

66
00:03:41,830 --> 00:03:46,790
So x is left and y is down or up

67
00:03:46,920 --> 00:03:49,540
and z is into the depth of the screen

68
00:03:49,550 --> 00:03:53,090
So what you want to raise something up and down

69
00:03:53,100 --> 00:03:56,230
you use the y axis as opposed to the z axis

70
00:03:56,650 --> 00:04:00,420
which you might think of if you kind of were doing traditional geometry

71
00:04:00,430 --> 00:04:01,700
which you ​‌​‌​​‌‌​​‌‌​​‌‌‌‌​‌​​‌‌​​‌‌​​‌‌​​‌‌​​‌‌​​‌‌​​‌‌​​‌‌​​‌‌‌‌‌​​​‌‌‌​​‌‌‌​‌​‌​‌‌‌​‌​​‌‌‌‌​‌​‌‌​​​‌‌‌‌‌‌​​‌‌​‌‌‌​​‌‌​‌​‌​​‌‌‌​‌‌​​‌‌​​​‌​​‌‌​​‌‌‌‌​‌‌‌​‌​​‌‌​‌​‌‌‌​‌​​​‌​​‌‌‌​‌‌‌‌​‌​‌​‌​​‌‌​‌​‌​​‌‌‌​​‌‌‌​‌‌‌‌​​​‌‌‌​‌‌​​‌‌‌​‌‌‌‌​‌​​‌‌​​‌‌‌​‌‌​​‌‌​‌‌​​​‌‌​​‌‌​​‌‌​​‌‌‌‌​‌‌‌​‌​​‌‌​‌​‌‌‌​‌​‌‌​​​‌‌‌​​‌​​‌‌​‌​‌​​‌‌‌‌​‌​​‌‌​‌​‌​​‌‌​‌‌‌‌‌​‌‌‌‌‌​​‌‌‌‌​‌​​‌‌‌​​‌‌‌​‌​‌‌‌​​‌‌​‌‌‌‌‌​‌​​‌‌​​‌‌‌‌‌​​​‌‌​‌​‌​​‌‌​​​‌​​‌‌​​‌‌​​‌‌​​‌‌‌‌​‌​‌‌‌​​‌‌‌‌‌​​​‌‌​‌‌‌‌‌​‌‌‌​‌​​‌‌‌‌​‌‌‌​‌‌​‌‌​​‌‌​‌​‌‌‌​‌​‌‌‌‌‌​‌​‌​‌​​‌‌​‌‌‌‌‌​‌‌‌​‌​​‌‌​​‌‌‌‌​‌​‌​‌‌‌​‌‌‌​‌‌‌​‌​‌‌​​​‌‌‌​‌‌‌‌​‌​‌‌‌​​‌‌​‌​‌‌‌​‌​‌​‌‌‌​‌​‌‌‌‌‌​‌​‌​‌​​‌‌​‌​‌​​‌‌​‌​‌‌‌​‌‌​​‌‌‌​‌‌‌​‌‌‌​‌‌‌​‌​​‌‌‌‌​‌​​‌‌‌​​‌‌‌​‌​​‌‌​​‌‌‌​​‌​​‌‌‌‌​‌​​‌‌​‌‌​​​‌‌‌​​‌‌‌​‌​‌‌‌‌‌​‌​​‌‌​​‌‌‌‌​‌‌‌​‌‌​​‌‌‌​‌​‌‌‌‌‌​‌‌‌​‌‌‌​‌‌‌​‌‌‌​‌‌​‌‌​​‌‌​​‌‌​​‌‌​‌​‌​​‌‌​​‌‌‌‌​‌‌‌​‌‌‌​‌​‌​‌‌‌​‌‌​‌‌‌‌​‌​‌‌​​​‌‌‌​‌‌​​‌‌‌​​‌​​‌‌‌​‌‌​​‌‌‌‌​‌​​‌‌​‌​‌‌‌​‌​‌‌‌‌‌​‌‌‌‌​​​‌‌‌​‌‌‌‌​‌‌‌​‌‌‌​‌‌‌​‌‌‌​‌‌​​‌​​‌‌​‌​‌‌‌​‌​‌‌‌​​‌‌​‌‌​​​‌‌‌‌​‌‌‌​‌​‌‌‌​​‌‌‌‌‌​​​‌‌​‌​‌​​‌‌‌‌​‌​​‌‌‌​‌‌‌‌​‌‌​‌‌‌‌​‌‌​​‌‌‌​‌​‌‌‌‌‌​‌‌​‌‌‌‌​‌‌​‌‌‌‌​‌‌‌‌‌​​‌‌‌‌‌‌​​‌‌​‌‌‌​​‌‌‌​‌‌‌‌​‌‌​‌‌‌‌​‌‌​​‌​​‌‌​​‌‌​​‌‌‌​​‌​​‌‌‌​​‌​​‌‌​‌​‌‌‌​‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌normally think about

72
00:04:01,740 --> 00:04:05,350
So the next property that will change here is the color of it

73
00:04:05,800 --> 00:04:14,450
And you can set the color either through using this kind of a vocabulary of colors that they already have supported out of the box

74
00:04:15,090 --> 00:04:15,720
redblue

75
00:04:15,720 --> 00:04:16,190
or anything

76
00:04:16,190 --> 00:04:17,000
things like that

77
00:04:17,200 --> 00:04:19,690
Or you can just use the hex codes for the color

78
00:04:20,060 --> 00:04:22,970
And if you're kind of a designer

79
00:04:22,970 --> 00:04:25,000
I more interested in customizing colors

80
00:04:25,010 --> 00:04:31,040
I have a couple of hex codes that have already predefined that give you a nice pastel colors to it

81
00:04:31,490 --> 00:04:37,110
It's easier on the eyes compared to what you might see if you use the standard kind of set of colors

82
00:04:37,460 --> 00:04:40,040
So we have this box that you defined

83
00:04:40,300 --> 00:04:45,640
And if you go back to the scene here and refresh the page

84
00:04:46,630 --> 00:04:49,750
we see that now we have a box and we have a queue

85
00:04:49,830 --> 00:04:52,770
and now that we have something to reference point of

86
00:04:52,770 --> 00:04:56,520
we will say that a frame by defa has a couple of controls

87
00:04:56,570 --> 00:04:57,040
So you see

88
00:04:57,050 --> 00:04:59,920
you can see we can click and drag around the scene using a gun mouse

89
00:05:00,200 --> 00:05:06,700
and you can likewise move around the scene by using your WASD keys to kind of move forward

90
00:05:06,840 --> 00:05:07,540
backwardleft foot

91
00:05:07,580 --> 00:05:08,160
and right

92
00:05:08,700 --> 00:05:11,390
and you can use your advoc keys as well

93
00:05:12,090 --> 00:05:13,570
So you can move around

94
00:05:14,080 --> 00:05:16,050
clickand drag to look around

95
00:05:17,070 --> 00:05:19,880
And this is of course only in keyboard controls

96
00:05:19,930 --> 00:05:21,250
If you are in a VR headset

97
00:05:21,250 --> 00:05:22,300
you can check it out

98
00:05:22,550 --> 00:05:30,950
you can actually go to the Url and see this in VR with a VR headset or even with their phone and it will do the gyroscope rotation

99
00:05:31,260 --> 00:05:36,580
So that's another benefit of using the XR is that it's out of the box about it

100
00:05:36,610 --> 00:05:39,280
so you don't have to think about anything else

101
00:05:40,240 --> 00:05:43,350
So let's add more entities to our scene

102
00:05:46,190 --> 00:05:48,760
So we are going to add some custom properties to them

103
00:05:48,760 --> 00:05:50,380
So we are going to add a sphere

104
00:05:50,700 --> 00:05:52,330
which is divided by a diaphera

105
00:05:56,050 --> 00:05:58,170
We set the position

106
00:06:00,070 --> 00:06:05,030
One of the interesting properties of spheres is that they have a radius component that you can set

107
00:06:05,030 --> 00:06:07,310
So we will scale it up a little bit will be okay

108
00:06:07,610 --> 00:06:11,160
1 0．25 for radius as opposed to the default of one

109
00:06:12,100 --> 00:06:13,630
And then we add a color

110
00:06:13,650 --> 00:06:15,060
custom color to it as well

111
00:06:15,150 --> 00:06:18,960
Hex code here that I already have predefined again

112
00:06:26,580 --> 00:06:28,220
We will also add in a cylinder

113
00:06:28,220 --> 00:06:31,020
so a cylinder

114
00:06:31,580 --> 00:06:34,570
and we will set the position for that as well

115
00:06:34,620 --> 00:06:42,330
So we'll do 0．75 and negative 2

116
00:06:42,380 --> 00:06:49,670
I do see that I'm setting all of the z values for these at a negative because the camera by default is looking into the scene

117
00:06:49,680 --> 00:06:51,250
As you go into the scene

118
00:06:51,370 --> 00:06:55,440
the z value goes negative in direction

119
00:06:55,450 --> 00:06:58,340
If you do positive z and start behind the camera

120
00:06:59,130 --> 00:07:00,950
that gets initialized

121
00:07:01,670 --> 00:07:03,410
And so with the cylinder

122
00:07:03,410 --> 00:07:08,960
we can set the radius and we can also set the height of a cylinder specifically

123
00:07:09,220 --> 00:07:13,870
So will will shrink the radius a bit and will increase the height a bit

124
00:07:13,870 --> 00:07:22,650
so we get both of a tube shape and we have kind of AC define color here that I will use for this one as well

125
00:07:26,640 --> 00:07:27,300
And finally

126
00:07:27,300 --> 00:07:28,220
startup

127
00:07:29,330 --> 00:07:34,250
And so if you come back to our scene and we refresh it

128
00:07:34,750 --> 00:07:36,210
we will see our

129
00:07:36,520 --> 00:07:36,900
you know

130
00:07:37,500 --> 00:07:39,130
spread of different shapes here

131
00:07:39,130 --> 00:07:46,130
Now that we are looking at and including our sphere and our cylinders with these colors

132
00:07:46,130 --> 00:07:48,690
you can feel free to use whatever colors you vote for this

133
00:07:48,690 --> 00:07:49,850
whatever dimensions you want

134
00:07:50,620 --> 00:07:53,490
as long as you kind of have these basic shapes

135
00:07:53,490 --> 00:07:54,510
is a road scene

136
00:07:54,660 --> 00:07:56,350
If you are following along

137
00:07:56,540 --> 00:08:03,040
then you can still do all of the follow up kind of scripting we're going to do for these options

138
00:08:03,400 --> 00:08:06,240
but we will be using these objects for some examples later on

139
00:08:06,260 --> 00:08:07,510
So if you're following along

140
00:08:07,520 --> 00:08:09,250
please add these as well

141
00:08:11,440 --> 00:08:18,060
So you notice that we have this scene and we have this black white space around us with the abject forte here

142
00:08:18,060 --> 00:08:20,850
So what are the things that you will find very quickly

143
00:08:20,850 --> 00:08:25,150
What you have is a floor you want is a word of reference point

144
00:08:25,280 --> 00:08:25,770
right

145
00:08:26,140 --> 00:08:30,250
So some type of ground you want to feel like you are starting on something

146
00:08:30,260 --> 00:08:33,030
So the next thing that we are going to add in is a plane

147
00:08:33,070 --> 00:08:34,210
Not like an airplane

148
00:08:34,210 --> 00:08:35,060
but like a plane

149
00:08:35,630 --> 00:08:36,810
like a flat plane

150
00:08:37,420 --> 00:08:40,690
And so we will set the position of this

151
00:08:40,700 --> 00:08:43,370
We won't get quite as creative with the position of it

152
00:08:43,370 --> 00:08:46,720
but we're going to set it at AZ distance negative 4 away

153
00:08:47,290 --> 00:08:48,380
And we'll see why in a second

154
00:08:49,150 --> 00:08:49,910
And planes

155
00:08:49,910 --> 00:08:54,410
by default are oriented to be upwards

156
00:08:54,450 --> 00:08:55,680
kind of like a wall

157
00:08:55,690 --> 00:09:02,460
So we're going to actually rotate this by the rate of 90 degrees so it is flat on the ground

158
00:09:02,470 --> 00:09:06,410
and then will keep rotations of the other two direction 0 here

159
00:09:06,720 --> 00:09:07,560
And with the plane

160
00:09:07,560 --> 00:09:12,160
the other things that we are going to change is we could set a weight and height associated with it

161
00:09:12,570 --> 00:09:14,280
So we are going to set the width to Wid

162
00:09:14,880 --> 00:09:16,700
and we are also going to set the height to weight

163
00:09:17,440 --> 00:09:18,730
And then last we're gon na

164
00:09:18,730 --> 00:09:19,670
set the color again

165
00:09:20,510 --> 00:09:22,390
and we're setting up all these things

166
00:09:22,390 --> 00:09:22,670
right

167
00:09:22,680 --> 00:09:24,860
You're seeing that upsetting all these properties

168
00:09:25,320 --> 00:09:27,320
Third of going back to the first video in the series

169
00:09:27,330 --> 00:09:30,440
what we're actually doing is we're setting components

170
00:09:31,030 --> 00:09:34,930
These are the basic components or properties of these entities

171
00:09:35,080 --> 00:09:44,620
but these are all actually just entities that have has some amount of previous support as primitive shapes in a frame

172
00:09:44,670 --> 00:09:49,970
So they are realistically just empty objects with a couple of components already defined

173
00:09:50,300 --> 00:09:57,200
like a geometry component and a mesh component already specified associated with them

174
00:09:57,380 --> 00:09:59,940
So it just makes it that much easier to kind of

175
00:10:00,020 --> 00:10:02,100
it started adding these primitive shapes in

176
00:10:02,480 --> 00:10:04,400
But we will see in a moment what it looks like

177
00:10:04,410 --> 00:10:06,060
We are at an empty object

178
00:10:07,050 --> 00:10:08,690
so we have explained defined

179
00:10:09,180 --> 00:10:11,760
and we can come back to our scene here

180
00:10:12,000 --> 00:10:13,000
refresh it again

181
00:10:13,480 --> 00:10:15,620
and now we've got a plane

182
00:10:15,950 --> 00:10:16,720
we have got a floor

183
00:10:16,730 --> 00:10:18,140
we have something to stand down

184
00:10:18,450 --> 00:10:19,000
If you know

185
00:10:19,000 --> 00:10:21,040
you come into a we are now

186
00:10:21,750 --> 00:10:23,930
it feels like you're actually starting on something

187
00:10:27,040 --> 00:10:30,240
So we still have this kind of white ether around this

188
00:10:30,440 --> 00:10:34,210
We don't really have the concept of words beyond this

189
00:10:35,220 --> 00:10:36,710
the entirety of our universe

190
00:10:36,720 --> 00:10:37,920
which is

191
00:10:37,920 --> 00:10:40,090
is the pain and these shapes and this crowd

192
00:10:40,270 --> 00:10:43,270
So we advert called Sky Box

193
00:10:43,280 --> 00:10:44,660
if you are familiar with it

194
00:10:44,670 --> 00:10:49,120
a sky boxes in 3D environments and 3D engine

195
00:10:49,120 --> 00:10:53,750
So it's basically what you can have as the background to the world

196
00:10:53,760 --> 00:10:58,980
It could be a flat color or it could be like an image or some sort

197
00:10:59,150 --> 00:11:02,470
So let's start of it show in a frame

198
00:11:02,640 --> 00:11:04,510
you can define a dash I

199
00:11:04,520 --> 00:11:07,780
which will set the sky box in the environment and you know

200
00:11:07,780 --> 00:11:08,960
if you want to see one example

201
00:11:09,140 --> 00:11:14,460
we could do some shade of gray as a skybox to start off with

202
00:11:15,390 --> 00:11:17,220
And when we refresh it here

203
00:11:17,510 --> 00:11:21,120
we will see that it is turned a slightly different shade of gray

204
00:11:22,130 --> 00:11:22,870
Andyou know

205
00:11:23,450 --> 00:11:26,890
to get really kind of disgusting about it

206
00:11:27,070 --> 00:11:30,170
we could sets a kind of background color and refresh it

207
00:11:30,190 --> 00:11:31,940
another whole world is blue

208
00:11:35,740 --> 00:11:37,210
But let's say sort of a vehicle color

209
00:11:37,740 --> 00:11:43,960
Let's say we want to have an image like you had a 360 degree photosphere that you had taken somewhere

210
00:11:44,250 --> 00:11:47,060
So what you can do instead of setting the color here

211
00:11:47,340 --> 00:11:49,080
is you can set the source

212
00:11:50,100 --> 00:11:50,650
So in that case

213
00:11:50,650 --> 00:11:51,920
it is src

214
00:11:52,570 --> 00:11:54,430
and you can have either

215
00:11:55,370 --> 00:11:59,250
you can upload an image for the assets folder and actually directly link to it

216
00:12:00,010 --> 00:12:02,390
We'll see kind of what that looks like later on

217
00:12:02,680 --> 00:12:11,950
But you can also just grab an image available on the internet that has cross origin resource resource sharing enabled

218
00:12:12,980 --> 00:12:17,640
I go to fall into that particular interest in the attack local up course policy

219
00:12:18,420 --> 00:12:21,590
see yours to learn it about more about that

220
00:12:21,950 --> 00:12:29,790
So I'll grab this image that I already have had a link available to here from Wikimedia Commons Credit to back civilian shoer

221
00:12:30,360 --> 00:12:32,380
the photographer of this 360 degree image

222
00:12:33,430 --> 00:12:38,740
But now if you change the source of this as a 360 degree image and refresh the page here

223
00:12:42,800 --> 00:12:43,980
But once it's loaded

224
00:12:44,170 --> 00:12:52,240
we will see that it has 360 degree photo sphere from drone footage of the A of the cost of Portugal

225
00:12:54,650 --> 00:12:59,940
So we have a nice background to our Or if a limited world

226
00:13:00,900 --> 00:13:01,690
no vessel

227
00:13:01,690 --> 00:13:02,530
floating plane

228
00:13:02,540 --> 00:13:05,910
but actually grounded in the world somewhere

229
00:13:06,640 --> 00:13:09,120
So you can change it to other 360 degree images

230
00:13:09,120 --> 00:13:17,820
You could actually use 363 videos even as a background if you wanted to for the sky to make it like you had 360 footage of drive in a car

231
00:13:17,820 --> 00:13:20,590
You can actually make it feel like you should get a car

232
00:13:21,990 --> 00:13:22,890
But for the timing

233
00:13:22,890 --> 00:13:25,390
we just use this background image

234
00:13:26,490 --> 00:13:29,760
And so the last thing that will cover in this part of the video

235
00:13:29,880 --> 00:13:30,630
as I mentioned

236
00:13:30,860 --> 00:13:34,540
is we've seen some primitive shapes and we've seen the skybox

237
00:13:34,670 --> 00:13:38,590
But what if you want to use like a custom shape or a custom model

238
00:13:38,600 --> 00:13:41,560
If you had like a mesh of some kind

239
00:13:42,000 --> 00:13:42,750
And to do that

240
00:13:43,480 --> 00:13:44,190
as we saw

241
00:13:44,350 --> 00:13:46,440
it took a second for that image to load

242
00:13:46,880 --> 00:13:52,770
So a frame actually comes with an asset management system associated with it

243
00:13:52,770 --> 00:13:58,760
And to use that we can actually go into our

244
00:13:59,900 --> 00:14:01,230
code here in our HTML

245
00:14:02,220 --> 00:14:05,700
And we can define an a dash assets tag

246
00:14:06,950 --> 00:14:12,660
And this inside this tag is how the asset management system is done

247
00:14:12,820 --> 00:14:18,620
So what this does for us is that a frame can preload these assets

248
00:14:18,750 --> 00:14:23,570
these models or images or videos before the application starts

249
00:14:23,640 --> 00:14:24,780
search the road

250
00:14:24,940 --> 00:14:26,480
see the application starter

251
00:14:26,480 --> 00:14:30,620
and freeze as it tries to load something from another website in real time

252
00:14:31,080 --> 00:14:32,770
So once you have this

253
00:14:32,780 --> 00:14:35,250
a dash assets within it

254
00:14:35,460 --> 00:14:38,190
you can specify different assets you want to add

255
00:14:38,290 --> 00:14:39,210
So in this case

256
00:14:39,210 --> 00:14:41,870
we'll do a dash asset dash item

257
00:14:43,050 --> 00:14:45,000
And for these assets

258
00:14:45,010 --> 00:14:48,040
what you want to do is specify an ID associate with them

259
00:14:49,090 --> 00:14:51,940
So for this ID we will give it

260
00:14:52,380 --> 00:14:55,490
will call it a share without spoilers

261
00:14:55,490 --> 00:14:55,570
What

262
00:14:55,930 --> 00:14:57,160
what whatsoever to come next

263
00:14:57,170 --> 00:14:59,710
So we specify source like we saw the image

264
00:15:00,000 --> 00:15:00,770
but in this case

265
00:15:00,770 --> 00:15:09,570
what I actually have is a 3D model that have uploaded to a prior glitch project and I actually have a link to it from here

266
00:15:09,570 --> 00:15:12,660
So I can specify the link to this model like myself

267
00:15:12,660 --> 00:15:16,610
If you can find a link to another 3D model somewhere else hosted online

268
00:15:16,830 --> 00:15:18,070
you can do that as well

269
00:15:20,220 --> 00:15:22,220
And we can close that tag

270
00:15:23,950 --> 00:15:29,260
And now we have this model that's getting preloaded in our asset management system here

271
00:15:30,110 --> 00:15:33,590
And then in the actual A frame code

272
00:15:34,360 --> 00:15:37,960
what we can do is instead of defining a primitive values

273
00:15:38,130 --> 00:15:43,470
the generic entity tag kind of coming back to this entity component system idea

274
00:15:43,680 --> 00:15:45,740
we have this a dash entity

275
00:15:46,120 --> 00:15:48,440
And so we'll define a position for it

276
00:15:48,550 --> 00:15:50,900
And we'll set it as 0

277
00:15:51,240 --> 00:15:53,660
1．5negative one

278
00:15:54,560 --> 00:15:55,620
And in this case

279
00:15:55,980 --> 00:15:58,130
the actual water that I have here is called GAF

280
00:15:59,570 --> 00:16:02,520
It's a relatively new file format for 3D models

281
00:16:02,700 --> 00:16:07,940
but it's a way of having both 3D mesh as well as the actual textures that you know

282
00:16:08,740 --> 00:16:11,300
the outside physical properties of it

283
00:16:11,300 --> 00:16:12,390
the visual properties of it

284
00:16:12,390 --> 00:16:14,660
all packaged into one model together

285
00:16:14,660 --> 00:16:16,980
It's just one way of sorting all this information

286
00:16:17,250 --> 00:16:20,130
but it's sort of the better ways that are supported online

287
00:16:20,300 --> 00:16:23,800
So we have gltf model here as the component that we're setting

288
00:16:24,220 --> 00:16:33,130
and then we'll what I pass it here is that actually a hashtag followed by the ID that were for the asset that we try to get

289
00:16:33,700 --> 00:16:34,950
So we will close that

290
00:16:36,370 --> 00:16:37,640
Now we have the c．f

291
00:16:38,100 --> 00:16:41,440
modeland if we come back to our page

292
00:16:41,440 --> 00:16:43,010
we refresh it again

293
00:16:43,020 --> 00:16:44,380
we will see right now our model

294
00:16:44,540 --> 00:16:46,480
it seems to have loaded faster

295
00:16:46,950 --> 00:16:51,810
See what I see that it was a blue screen at the start and that's because what a frames is asset was

296
00:16:52,960 --> 00:16:54,350
management system does set

297
00:16:54,350 --> 00:17:00,870
It tries to load all these assets in first so that when the application starts

298
00:17:00,980 --> 00:17:02,850
the ISO is can be dropped in instantly

299
00:17:02,850 --> 00:17:06,180
So you saw the chair come in a lot faster than you saw the image get loaded in

300
00:17:06,930 --> 00:17:10,720
But now we have this custom chair model that is actually a 3D scanner

301
00:17:10,720 --> 00:17:11,660
one of the chairs

302
00:17:11,850 --> 00:17:14,300
our own lab space that we're looking at here

303
00:17:16,720 --> 00:17:20,660
But we have custom models integrated into our A frame application here

304
00:17:21,040 --> 00:17:23,370
And it works just like every other entity

305
00:17:23,370 --> 00:17:26,110
It has its own position and rotation that you can change

306
00:17:27,260 --> 00:17:29,410
And this one custom mesh that we are looking at here

307
00:17:30,470 --> 00:17:36,910
So this has been the first step in the long journey of making our own a-frame application

308
00:17:37,090 --> 00:17:37,820
But as you can see

309
00:17:37,820 --> 00:17:39,880
in the span of a couple of blades

310
00:17:39,880 --> 00:17:44,030
we have already put together an entire 3D environment with objects in it

311
00:17:44,030 --> 00:17:45,660
We have a skybox around us

312
00:17:46,120 --> 00:17:47,310
And you know

313
00:17:47,310 --> 00:17:47,580
you could

314
00:17:48,000 --> 00:17:49,500
with just these tools alone

315
00:17:49,530 --> 00:17:54,870
go out and make an entire 3D virtual environment and have people just tour around your time

316
00:17:54,870 --> 00:17:59,230
You could make like a 3D art museum or an art gallery

317
00:18:00,010 --> 00:18:03,240
Andwe're just going to improve from here

318
00:18:03,260 --> 00:18:09,370
The next thing that we're going to talk about here is that interactions and actually interacting with a 3D scene

319
00:18:09,610 --> 00:18:11,230
and that will come up in the next video

320
00:18:12,250 --> 00:18:13,730
So go check it out
