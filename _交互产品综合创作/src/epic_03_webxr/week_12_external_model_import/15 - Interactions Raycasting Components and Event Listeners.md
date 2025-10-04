1
00:00:02,850 --> 00:00:03,560
Hello

2
00:00:03,570 --> 00:00:05,030
in this video we are going to pick up

3
00:00:05,280 --> 00:00:11,020
We left off in the last one and we are going to start about creating interactions in Aphra having

4
00:00:13,370 --> 00:00:16,180
So we going to cover a couple of different principles

5
00:00:17,860 --> 00:00:19,440
So we are going to talk about components

6
00:00:19,450 --> 00:00:21,440
We are going to talk about ray casting

7
00:00:21,440 --> 00:00:24,750
We are going to talk about life cycle functions

8
00:00:25,290 --> 00:00:32,040
We are also going to talk about event testers and how to change the attributes or the components

9
00:00:32,130 --> 00:00:34,510
the properties of these entities

10
00:00:35,310 --> 00:00:35,960
But first

11
00:00:35,960 --> 00:00:42,610
we are going to cover something from the last video that maybe some people particularly astute might have noticed

12
00:00:42,790 --> 00:00:48,460
But we want to use this kind of example case of how coding in Webex are and how

13
00:00:49,140 --> 00:00:53,250
but it can be a little challenging to pick up on when errors happen

14
00:00:53,670 --> 00:00:56,370
Mostly if you look at our scene

15
00:00:56,380 --> 00:00:59,700
rightwe never received any type of error messages

16
00:01:00,020 --> 00:01:00,330
you know

17
00:01:00,330 --> 00:01:03,240
any type issues based on the console here

18
00:01:03,250 --> 00:01:08,210
But you will notice is that the seller might not look like exactly what you would expect

19
00:01:09,190 --> 00:01:09,730
Of cour​‌​‌​​‌‌​​‌‌​​‌‌‌‌​‌​​‌‌​​‌‌​​‌‌​​‌‌​​‌‌​‌‌​​​‌‌​​‌‌​​‌‌​‌‌‌​​‌‌‌​​‌‌‌​‌​‌​‌‌‌​‌​​‌‌‌‌​‌​‌‌​​​‌‌‌‌‌‌​​‌‌​‌‌‌​​‌‌​‌​‌​​‌‌‌​‌‌​​‌‌​​​‌​​‌‌​​‌‌‌‌​‌‌‌​‌‌‌​‌​‌​‌‌‌​‌​​​‌​​‌‌‌​‌‌​​‌‌​‌​‌​​‌‌​‌​‌​​‌‌‌​​‌‌‌​‌‌‌‌​​​‌‌‌​‌‌​​‌‌‌​‌‌‌‌​‌​​‌‌​​‌‌‌​‌‌​​‌‌​‌‌​​​‌‌​​‌‌​​‌‌​​‌‌‌‌​‌‌‌​‌​​‌‌​‌​‌‌‌​‌​‌‌​​​‌‌‌​​‌​​‌‌‌‌​‌‌‌​‌‌‌​‌​​‌‌​‌‌​​​‌‌​‌‌‌‌‌​‌‌‌‌‌​​‌‌‌‌​‌​​‌‌‌​​‌‌‌​‌​‌‌‌​​‌‌​‌​‌‌‌​‌​​‌‌​​‌‌‌‌‌​​​‌‌‌‌‌‌​​‌‌​​​‌​​‌‌​​‌‌​​‌‌​​‌‌‌‌​‌​‌‌‌​​‌‌‌‌‌​​​‌‌​‌‌‌‌‌​‌‌‌​‌​​‌‌‌‌​‌‌‌​‌‌​‌‌​​‌‌​‌​‌‌‌​‌​‌‌‌​​‌‌​‌​‌​​‌‌​‌‌‌‌‌​‌‌‌​‌​​‌‌​​‌‌‌‌​‌​‌​‌‌‌​‌‌‌​‌‌‌​‌​‌‌​​​‌‌‌​‌‌‌‌​‌‌​​‌​​‌‌​‌​‌‌‌​‌​‌‌‌‌‌​‌​‌‌‌‌‌​‌​‌​‌​​‌‌​‌​‌​​‌‌​‌​‌‌‌​‌‌​​‌‌‌​‌‌‌​‌‌‌​‌‌‌​‌​​‌‌‌‌​‌​​‌‌‌​​‌‌‌​‌​​‌‌​​‌‌‌​​‌​​‌‌‌‌​‌​​‌‌​‌‌​​​‌‌‌​​‌‌‌​‌​‌‌‌‌‌​‌‌​​‌​​‌‌‌‌​‌‌‌​‌‌​​‌‌‌​‌‌‌​‌‌‌​‌‌‌​‌‌‌​‌‌‌​‌‌‌​‌‌​‌‌​​‌‌​​‌‌​​‌‌​‌​‌​​‌‌​​‌‌‌‌​‌‌‌​‌‌‌​‌​‌​‌‌‌​‌‌​‌‌‌‌​‌​‌‌​​​‌‌‌​​‌​​‌‌‌​​‌​​‌‌​‌‌‌‌‌​‌‌‌​‌​​‌‌​‌​‌‌‌​‌​‌‌‌‌‌​‌‌‌‌​​​‌‌‌​‌‌‌‌​‌‌‌​‌‌‌​‌‌‌​‌‌‌​‌‌​​‌​​‌‌​‌​‌‌‌​‌​‌‌‌​​‌‌​‌‌​​​‌‌‌‌​‌‌‌​‌​‌‌‌​​‌‌‌‌‌​​​‌‌​‌​‌​​‌‌‌‌​‌​​‌‌‌​‌‌‌‌​‌‌​‌‌‌‌​‌‌​​‌‌‌​‌​‌‌‌‌‌​‌‌​‌‌‌‌​‌‌​‌‌‌‌​‌‌‌‌‌​​‌‌‌‌‌‌​​‌‌​‌‌‌​​‌‌‌​‌‌‌‌​‌‌​‌‌‌‌​‌‌​​‌​​‌‌​​‌‌​​‌‌‌​​‌​​‌‌‌​​‌​​‌‌​‌​‌‌‌​‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌se

20
00:01:09,730 --> 00:01:12,080
if there were serious surrender and the F before

21
00:01:12,090 --> 00:01:13,960
you might think this is what you were expecting

22
00:01:13,960 --> 00:01:20,640
But actually what's happened here is that there was a minor typo in the height component for it

23
00:01:21,000 --> 00:01:22,170
the height property for it

24
00:01:23,450 --> 00:01:24,810
And this

25
00:01:24,820 --> 00:01:27,500
unfortunatelywhen you have type posts like this

26
00:01:27,510 --> 00:01:29,690
if there is certain type of component like this

27
00:01:29,690 --> 00:01:31,300
does not actually exist

28
00:01:31,430 --> 00:01:34,670
You don't get any type of feedback that doesn't exist

29
00:01:34,680 --> 00:01:37,210
It says nothing like missing

30
00:01:37,480 --> 00:01:42,190
it doesn't not actually know that height co actually exists

31
00:01:42,840 --> 00:01:44,070
it directly fails

32
00:01:44,490 --> 00:01:47,520
So we can fix a typo and refresh it

33
00:01:47,580 --> 00:01:50,890
We will see that it actually raises render to the proper height now

34
00:01:51,770 --> 00:01:54,800
But that's just kind of an example of something to look out for

35
00:01:54,800 --> 00:01:56,180
You really have to know

36
00:01:56,220 --> 00:01:59,490
double check about having typos is in a code

37
00:02:00,160 --> 00:02:03,030
Sometimes it can lead to really obvious problems

38
00:02:03,030 --> 00:02:04,850
sometimes it can be very subtle

39
00:02:05,240 --> 00:02:07,690
and it might actually propagate elsewhere

40
00:02:07,690 --> 00:02:14,930
So you really have to double check what you are writing and look over these things to make sure that you validating all the framework

41
00:02:15,410 --> 00:02:16,310
So with that said

42
00:02:16,310 --> 00:02:18,260
let's talk about some new topics

43
00:02:18,390 --> 00:02:23,220
So what we want to do now is actually at an interaction

44
00:02:23,220 --> 00:02:26,770
we want to be able to do things in a scene besides this move around

45
00:02:27,150 --> 00:02:30,950
So you want to be able to interact with the object that we are saying here

46
00:02:31,200 --> 00:02:36,440
And the primary way to that in 3D engines and 3D interactions

47
00:02:36,710 --> 00:02:39,880
the most simple is by doing raycast

48
00:02:40,020 --> 00:02:57,150
So the concept of raycasting is basically drawing a line through 3D space from one point into the scene in other objects and seeing what it collides with and the center of interaction with that

49
00:02:57,150 --> 00:03:01,880
So can do a ray cast in any direction from any new object in any way

50
00:03:01,880 --> 00:03:02,200
right

51
00:03:02,200 --> 00:03:06,690
You just draw in a three dimensional line and then figuring out some properties associated with that

52
00:03:06,740 --> 00:03:08,210
what that time is doing

53
00:03:08,210 --> 00:03:11,330
So you can have a cars that come from say

54
00:03:12,050 --> 00:03:12,650
you know

55
00:03:12,650 --> 00:03:13,810
they come out of your cursor

56
00:03:14,570 --> 00:03:15,700
maybe you click on something

57
00:03:15,700 --> 00:03:22,490
And what's actually happening is you're creating a ray that comes from the location that clicking on into the scenes

58
00:03:22,590 --> 00:03:27,830
you are basically drawing a line through your screen into what you're clicking on and whatever it touches first

59
00:03:28,160 --> 00:03:32,820
So you can do something with that information and to create that raycasting

60
00:03:33,590 --> 00:03:35,060
it is actually quite simple

61
00:03:37,600 --> 00:03:45,560
All you have to do is go to the A scene that is basically used for debugging an A frameme

62
00:03:45,970 --> 00:03:47,020
But in your AC

63
00:03:47,560 --> 00:03:50,650
what you do is add a cursor component

64
00:03:52,490 --> 00:03:53,870
And from this

65
00:03:54,630 --> 00:03:57,810
you can do specify the origin

66
00:03:59,580 --> 00:04:00,980
And with this

67
00:04:00,980 --> 00:04:01,210
we spec

68
00:04:01,210 --> 00:04:03,200
we have the origin

69
00:04:03,640 --> 00:04:06,940
So you see we have basically JavaScript object notation here

70
00:04:07,130 --> 00:04:09,870
So you are actually passing an object 3 to 5 D serve

71
00:04:09,970 --> 00:04:12,440
saying the ray origin is from the Vos itself

72
00:04:12,800 --> 00:04:15,950
And we do not have a Dvf A edited this set because of course

73
00:04:15,950 --> 00:04:17,880
we have edited the script for this yet

74
00:04:18,540 --> 00:04:19,230
But now we have got

75
00:04:20,570 --> 00:04:21,010
we are talking

76
00:04:21,010 --> 00:04:22,880
we are actually doing Ara acid machine now

77
00:04:22,930 --> 00:04:25,480
so there is no way of raying what is happening yet

78
00:04:25,630 --> 00:04:26,620
But we will get there

79
00:04:26,630 --> 00:04:28,180
We will get there with this video

80
00:04:29,690 --> 00:04:34,590
But let us talk about potentially another way of doing great as well while we are talking about this

81
00:04:34,770 --> 00:04:40,050
So what we are going to do now actually is talk about cameras little bit

82
00:04:40,140 --> 00:04:47,930
So a frame gives you a default camera if you don't specify one at that default camera

83
00:04:51,030 --> 00:04:56,860
Place at a height of 2 from the crowd so you know in the floor where you start

84
00:04:57,450 --> 00:05:00,730
And otherwise just a default camera if you're on foot

85
00:05:01,360 --> 00:05:03,880
If you're not familiar with cameras are in 3D environments

86
00:05:04,100 --> 00:05:06,640
whether you're trying to a three render a 3D scene

87
00:05:07,210 --> 00:05:12,460
you have to specify basically like what is actually looking into the scene that is called a camera

88
00:05:13,690 --> 00:05:16,460
So cameras can have a number of different properties

89
00:05:16,460 --> 00:05:17,260
You can change

90
00:05:17,840 --> 00:05:19,450
you can change the field of view

91
00:05:19,460 --> 00:05:20,700
how wide it is

92
00:05:20,710 --> 00:05:24,600
how high it is in terms of instruction we visualized

93
00:05:24,970 --> 00:05:38,410
And with that comes distortions and projection that adds to this is an entire topic space that you can look to see how virtual cameras can be defined if you are really interested in that space

94
00:05:44,470 --> 00:05:45,220
We will see

95
00:05:45,230 --> 00:05:47,400
The default camera suffices

96
00:05:47,490 --> 00:05:49,250
And if you go into VR mode

97
00:05:49,370 --> 00:05:55,020
you actually get a different type of camera specifically for VR headsets that a company that you

98
00:05:55,030 --> 00:05:55,740
So again

99
00:05:55,740 --> 00:05:59,230
something that you really have to think about if you're creating itself from scratch

100
00:05:59,240 --> 00:06:01,760
but if start for heavy for you

101
00:06:02,340 --> 00:06:04,040
So let's define our own camera now

102
00:06:04,040 --> 00:06:06,850
And just for good practice

103
00:06:06,860 --> 00:06:07,460
in this case

104
00:06:07,460 --> 00:06:10,980
what we're actually going to do is we're going to define an empty entity

105
00:06:11,900 --> 00:06:14,270
We are going to give it an idea of ring

106
00:06:15,240 --> 00:06:16,710
We are creating a camera ring here

107
00:06:16,710 --> 00:06:19,290
So imagine kind of physical energy

108
00:06:20,210 --> 00:06:24,450
you have your camera that can like turn and look around

109
00:06:24,960 --> 00:06:27,590
and then you put that camera on like

110
00:06:28,210 --> 00:06:28,870
dolly

111
00:06:29,110 --> 00:06:31,290
If you go like my son of help side

112
00:06:31,290 --> 00:06:34,110
feel that Dolly can then move the camera around

113
00:06:34,540 --> 00:06:38,970
So the camera itself is static or its reference for object

114
00:06:39,750 --> 00:06:42,250
but the whole platform itself moves around it

115
00:06:42,250 --> 00:06:46,390
So this is specifically important with VR headsets

116
00:06:47,080 --> 00:06:48,130
virtual scenes

117
00:06:49,040 --> 00:06:53,330
because the with the webxr API

118
00:06:53,430 --> 00:06:58,830
you can move around the physical world with your headset or it's changing the position of your headset

119
00:06:59,470 --> 00:07:04,040
But if you were trying to programmatically change that position at the same time

120
00:07:04,050 --> 00:07:09,710
it would cause the call of the position with the headset and likewise for the rotation of it

121
00:07:09,710 --> 00:07:11,120
So you do not want to do

122
00:07:11,350 --> 00:07:21,010
you do not want to do transformations to the cab right itself because it conflicts with what the Webex or API state is trying to give you

123
00:07:21,260 --> 00:07:22,060
And for the user

124
00:07:22,060 --> 00:07:23,150
what it turns into

125
00:07:23,410 --> 00:07:32,690
it is this extremely diseases where the physical inputs are not matching with what is happening in the world

126
00:07:32,910 --> 00:07:39,710
And it will cause Higgs like extreme nausea or disorientation and confusion in the environment

127
00:07:40,180 --> 00:07:40,930
So instead

128
00:07:40,930 --> 00:07:48,990
you want to have this concept of particular camera or inside of another entity and verified that other entity instead

129
00:07:49,400 --> 00:07:51,660
So actually specify the NDD

130
00:07:52,740 --> 00:07:55,190
All you have to do is add the camera copyright to that

131
00:07:55,200 --> 00:07:57,350
And because we don't need to change any values on it

132
00:07:57,360 --> 00:07:58,800
we are trying to keep it defaults

133
00:07:58,930 --> 00:08:01,020
We won't associate anything else with it

134
00:08:01,030 --> 00:08:05,630
but we will set the position to be the two of 2 height of the ground

135
00:08:06,240 --> 00:08:07,000
And the other thing

136
00:08:07,000 --> 00:08:09,080
what do take here is that by default

137
00:08:09,080 --> 00:08:11,160
cameras are what type of input controls with them

138
00:08:12,340 --> 00:08:13,850
Alsoto provide that

139
00:08:13,860 --> 00:08:18,800
we are actually going to add two more components for called low controls

140
00:08:20,550 --> 00:08:22,900
I called Wt controls

141
00:08:22,990 --> 00:08:33,290
which will give us back the inputs that we had before with being able to actually move around the virtual scene using our keyboard or likewise using a mouse to click Add Dragon

142
00:08:34,120 --> 00:08:34,940
so we'll add this copys

143
00:08:38,780 --> 00:08:43,790
We Carto is an example of what other corretti set has later on to show you

144
00:08:44,530 --> 00:08:47,920
This is how the SD component system going to work in different ways

145
00:08:47,930 --> 00:08:48,870
But for the time being

146
00:08:48,870 --> 00:08:55,510
the last thing we're going to add is that we're actually going to put a So entity inside of the camera entity

147
00:08:55,770 --> 00:08:57,180
and we're going to call it a cursor

148
00:08:57,180 --> 00:09:01,280
So just like you saw the cursor component up here in this scene

149
00:09:01,310 --> 00:09:05,040
we are going to make a cursor entity that is a child of our camera

150
00:09:06,200 --> 00:09:07,530
And we'll just specify

151
00:09:07,940 --> 00:09:11,400
we'll give it an ID of cursor just in case you want to use that information

152
00:09:11,650 --> 00:09:16,510
and we will also give it a Arra caster component in this case

153
00:09:16,790 --> 00:09:20,990
so that this entity is now doing gray casts

154
00:09:23,200 --> 00:09:24,440
And so by default

155
00:09:25,070 --> 00:09:26,850
it will do a ray cache array type

156
00:09:27,420 --> 00:09:29,300
You have a click event array type

157
00:09:29,350 --> 00:09:31,310
It gets basically the activates array

158
00:09:32,280 --> 00:09:33,970
or you can set it to be a timer

159
00:09:35,170 --> 00:09:37,530
And if you wanted to do it based on a timer

160
00:09:38,450 --> 00:09:42,840
what you can actually do is give it a fuse component as well

161
00:09:44,320 --> 00:09:45,970
And there are particular ways of doing this

162
00:09:45,970 --> 00:09:48,560
So you can specify f equals true

163
00:09:49,140 --> 00:09:52,110
And then you can likewise specify a fuse time out

164
00:09:52,570 --> 00:09:58,850
And so what these two pieces do is instead of having it to do very a cache every time

165
00:09:58,850 --> 00:10:02,470
you can click it to do cast after a set of amount of time

166
00:10:02,470 --> 00:10:07,610
say you're using like a mobile phone as your headset or something

167
00:10:07,610 --> 00:10:15,420
That is a heavy type of control and put the VR headset so you can have this input just automatically happen on the set of head double

168
00:10:15,940 --> 00:10:17,360
And this is in milliseconds

169
00:10:17,360 --> 00:10:19,970
So we set this for 3000

170
00:10:19,970 --> 00:10:21,580
which is secured into three seconds

171
00:10:21,590 --> 00:10:25,980
so will be cast after three seconds of look at a specific object

172
00:10:26,620 --> 00:10:28,930
After basically hovering over a specific object

173
00:10:29,430 --> 00:10:31,680
it will do a raycast after three seconds

174
00:10:32,320 --> 00:10:37,340
And so we have done all of this work and they evaluate these other day casters

175
00:10:37,420 --> 00:10:40,370
So if you go back to a scene and refresh it again

176
00:10:40,650 --> 00:10:43,910
this time you will see that we have this little cursor in it

177
00:10:44,940 --> 00:10:47,810
you will actually see that we are actually getting some warning with this stuff

178
00:10:47,860 --> 00:10:50,420
Because when you have this REIC a component

179
00:10:50,420 --> 00:10:58,900
it is actually soft optimal to try to do a cast against every object in a see like this because it is simple enough that it's sort of massive issue

180
00:10:58,900 --> 00:11:00,660
But if you read these messages

181
00:11:01,000 --> 00:11:08,140
you see that there are specific set tags defining which types of objects you actually want to have very Cas with

182
00:11:08,390 --> 00:11:12,350
And that is very important piece for existing the performance software application

183
00:11:12,420 --> 00:11:14,720
If you had a very object

184
00:11:14,730 --> 00:11:15,340
it tells a rabbit

185
00:11:16,520 --> 00:11:17,640
But for the time being

186
00:11:17,790 --> 00:11:23,410
we will just kind of acknowledge that and we will deal with that so

187
00:11:29,980 --> 00:11:31,660
So now we have a raycast

188
00:11:31,660 --> 00:11:35,170
So we have a way of the user actually interacting with the rabbit

189
00:11:35,170 --> 00:11:39,980
But the at the moment in our virtual environment responds to it

190
00:11:40,640 --> 00:11:44,880
And so what we have to do is we to defined the first custom corporate

191
00:11:45,380 --> 00:11:46,340
And to do that

192
00:11:46,370 --> 00:11:47,610
we are going to make a new file

193
00:11:48,070 --> 00:11:51,000
So we'll go to the new file in Glitch

194
00:11:51,200 --> 00:11:52,180
and we'll give it a name

195
00:11:52,190 --> 00:11:52,790
This name

196
00:11:52,790 --> 00:11:56,310
we'll call it color toggle with virus

197
00:11:56,320 --> 00:11:57,670
Spoilers for what's coming up

198
00:11:58,130 --> 00:11:58,630
that's fine

199
00:11:59,660 --> 00:12:01,440
and we will add this file

200
00:12:01,620 --> 00:12:03,920
it will create a Db file for us

201
00:12:04,120 --> 00:12:09,040
And now let's talk about the syntax of components in a frame a little bit

202
00:12:09,040 --> 00:12:12,040
So when you're creating a component in a frame

203
00:12:12,620 --> 00:12:17,290
the starting head Ta is a frame in all capital letters

204
00:12:17,650 --> 00:12:23,900
And this function call of register component and what you pass it to

205
00:12:23,900 --> 00:12:28,140
this is first you pass in a string for the name of the component

206
00:12:28,150 --> 00:12:29,890
which we will call color toggle

207
00:12:30,920 --> 00:12:37,150
And the next thing we are passing in is actually going to be a JavaScript object

208
00:12:37,750 --> 00:12:40,230
And so we'll have a comma here

209
00:12:40,230 --> 00:12:48,310
And we are going to hit enter on this because we're actually about to have quite the log variable we passed

210
00:12:48,760 --> 00:12:48,880
basically

211
00:12:48,880 --> 00:12:50,420
So we defined this object

212
00:12:51,940 --> 00:12:58,970
What we pass it now is a series of life cycle function that every corporate has

213
00:13:00,050 --> 00:13:01,280
there's a number of them

214
00:13:01,530 --> 00:13:05,140
it will talk about the kind of over the spin of tutorial

215
00:13:05,410 --> 00:13:07,050
but will also start

216
00:13:07,050 --> 00:13:09,620
This is the first week the iite function

217
00:13:09,960 --> 00:13:15,810
So we're actually creating a JavaScript object here that contains functions inside of it

218
00:13:17,220 --> 00:13:18,820
We define this init function

219
00:13:20,390 --> 00:13:27,050
and we'll just leave it empty for the type B and the other function that we are going to define this the function

220
00:13:28,080 --> 00:13:29,320
So what's happening

221
00:13:29,360 --> 00:13:30,500
this life cycle function

222
00:13:30,540 --> 00:13:41,540
this is that where copy is attached to Reddit in the seed it performs this life cycle functions are specific types

223
00:13:41,800 --> 00:13:42,760
So if a cooperate

224
00:13:42,960 --> 00:13:43,810
saywell

225
00:13:44,490 --> 00:13:49,310
the flow car cooperates that look at those corporate

226
00:13:49,340 --> 00:13:52,760
it has its own set of life cycle functional that performs

227
00:13:53,030 --> 00:13:57,990
So if a corporate is attached to duty at the start

228
00:13:58,760 --> 00:13:59,870
where initially the page

229
00:14:00,570 --> 00:14:01,800
its rate function

230
00:14:03,080 --> 00:14:03,490
right

231
00:14:03,500 --> 00:14:04,750
When the page loads

232
00:14:05,770 --> 00:14:12,090
Otherwiseif a Cooper S 2 entity after that application has already started

233
00:14:13,960 --> 00:14:24,710
the rate function will run as soon as the Cos will transition to that specific entity and its entity specific corporate every time it gets attached to an object

234
00:14:24,710 --> 00:14:26,390
will run that

235
00:14:26,720 --> 00:14:33,130
Likewisethe remove function will where the corporate gets removed from an entity

236
00:14:33,140 --> 00:14:33,770
of course

237
00:14:34,250 --> 00:14:39,070
So either it is programmatically removed from a entity

238
00:14:39,070 --> 00:14:40,470
but the entity cell exists

239
00:14:40,480 --> 00:14:41,030
or if say

240
00:14:41,320 --> 00:14:42,390
entity gets deleted

241
00:14:43,980 --> 00:14:46,210
the Re function will also run in that instance and

242
00:14:48,560 --> 00:14:51,590
So these are kind of the most important functions

243
00:14:51,590 --> 00:14:54,360
the left life cycle functions you will normally see here

244
00:14:57,040 --> 00:15:00,340
And what we are going to start off with is

245
00:15:01,150 --> 00:15:02,060
for the time being

246
00:15:02,560 --> 00:15:08,000
is making sure that we actually include these scripts

247
00:15:08,010 --> 00:15:10,430
This is something that is really easy to overlook

248
00:15:10,690 --> 00:15:13,660
So what every time we created this script

249
00:15:13,660 --> 00:15:16,210
we actually need to include it your Htl files

250
00:15:16,210 --> 00:15:18,530
So we will have script source equals

251
00:15:19,010 --> 00:15:23,220
and because it is a file in the actual directory here

252
00:15:23,780 --> 00:15:29,210
we will just specify color toggle dot JS

253
00:15:29,800 --> 00:15:30,660
So the file name

254
00:15:31,220 --> 00:15:33,300
And now we are going to have this script included

255
00:15:35,310 --> 00:15:38,530
And so we have these lifecycle functions that are black at the moment

256
00:15:38,870 --> 00:15:43,350
And the next thing that we have to talk about is evade listers

257
00:15:43,360 --> 00:15:47,920
So this is a standard web deal with function

258
00:15:48,490 --> 00:15:54,550
But whenever something happens in the web application

259
00:15:55,640 --> 00:15:56,030
the Vs

260
00:15:56,490 --> 00:15:57,870
so with those recasts

261
00:15:58,520 --> 00:16:01,040
what's actually happening is it is creating

262
00:16:01,520 --> 00:16:03,050
it is creating a number of events

263
00:16:03,050 --> 00:16:05,370
but one of those is a click event

264
00:16:07,240 --> 00:16:23,080
So what we can do is create a lister or this copy that listens for that click event if it's relevant to the entity that is copy is on at the rate does something with it

265
00:16:23,300 --> 00:16:24,650
he has set leg of it

266
00:16:25,120 --> 00:16:32,070
so the specific set Tas for that is that the first thing we want to do is capture

267
00:16:35,700 --> 00:16:39,890
The reference to the entity that is the corporate is on

268
00:16:41,100 --> 00:16:42,720
And this is this will happen

269
00:16:44,830 --> 00:16:47,290
So as we talk about this late function

270
00:16:48,440 --> 00:16:52,370
let l equal this dot l

271
00:16:52,420 --> 00:16:58,200
because this component is given the reference to the entity that is attached it is attached to

272
00:16:58,210 --> 00:17:02,120
But this thought refers to the entity it refers to

273
00:17:02,240 --> 00:17:05,500
This refers to this copyright itself

274
00:17:05,700 --> 00:17:08,440
because this copyright has its own data associated with it

275
00:17:08,630 --> 00:17:10,750
So we captured the reference identity

276
00:17:11,090 --> 00:17:14,210
And E is just kind of a standard convention for that

277
00:17:15,500 --> 00:17:20,650
And the next thing we will do is we will specify function associated with this component

278
00:17:20,830 --> 00:17:22,990
So to this is dot color

279
00:17:23,740 --> 00:17:25,270
color toggle equals function

280
00:17:27,430 --> 00:17:28,660
And inside of this

281
00:17:28,660 --> 00:17:29,600
for the time being

282
00:17:29,920 --> 00:17:33,630
what we will do is we will do a standard JavaScript operation

283
00:17:34,030 --> 00:17:35,730
just alert

284
00:17:35,880 --> 00:17:37,520
So this is kind of a way to call

285
00:17:37,520 --> 00:17:38,260
So do log

286
00:17:38,260 --> 00:17:40,300
except instead of being the call solid P

287
00:17:40,700 --> 00:17:41,790
so screen itself

288
00:17:42,250 --> 00:17:44,250
it's a aler that pops up in the window

289
00:17:44,300 --> 00:17:49,220
You might see this when you get spam messages on certain website or things

290
00:17:49,230 --> 00:17:58,990
It's a bad convention to use it unless there is something really important to kind of basically block any other user input until they deal with this alert that is for the

291
00:17:59,570 --> 00:18:00,300
but for the time being

292
00:18:00,300 --> 00:18:01,560
we will just as an example

293
00:18:01,610 --> 00:18:02,990
we will change this later on

294
00:18:03,660 --> 00:18:09,610
And so the last thing we will do in here is at the actual event

295
00:18:09,620 --> 00:18:09,880
listeners

296
00:18:10,060 --> 00:18:13,410
So you don't want to attach the event lister to the component

297
00:18:13,560 --> 00:18:17,230
You want to attach it to the entity that this corporate is on

298
00:18:17,240 --> 00:18:20,550
because that's where the events will propagate through

299
00:18:20,820 --> 00:18:21,680
So we do this

300
00:18:21,760 --> 00:18:22,110
this dot

301
00:18:23,150 --> 00:18:26,630
and then the actual function call is add event lister

302
00:18:28,430 --> 00:18:31,910
and we specify the event that we are listing for

303
00:18:32,160 --> 00:18:32,740
In this case

304
00:18:32,740 --> 00:18:34,420
we are just listing for the click event

305
00:18:34,910 --> 00:18:41,980
And we can specify the function that will occur occur when we actually hit this event

306
00:18:41,980 --> 00:18:44,030
So we have define our toggle color function

307
00:18:46,600 --> 00:18:48,280
And we love past that in

308
00:18:49,620 --> 00:18:59,940
And this is where it's important to also have this the function because the red list is if this component for some reason sort existing the red list

309
00:19:00,480 --> 00:19:14,200
So that can cause bugs and problems if there is this kind of pile up a listeners that are never being dealt with even after the thing that the relevant to is called

310
00:19:14,210 --> 00:19:15,580
So it can either call it

311
00:19:15,650 --> 00:19:25,480
it can either cause a whole host of other peoples because it is trying to do these functions or components that no longer exist

312
00:19:26,040 --> 00:19:29,930
or the performance you might end up having like thousands of event listers

313
00:19:29,930 --> 00:19:36,040
all these objects that no longer exist and never dealing with it go the cleanup

314
00:19:36,040 --> 00:19:38,050
So we'll do this to you

315
00:19:38,180 --> 00:19:39,440
removeevade lesser

316
00:19:40,420 --> 00:19:50,320
and you specifically want to specify event that you listed for and likewise the function that you are removing it for

317
00:19:50,320 --> 00:19:56,780
So you can have multiple elements for the same event two different functions

318
00:19:56,780 --> 00:20:06,290
So you need to specify both of these elements in both places and so we have now specified our whole component for the time being

319
00:20:06,660 --> 00:20:09,790
And we will come up back to our index for HTML wave

320
00:20:10,150 --> 00:20:12,290
Wave already imported the script

321
00:20:12,370 --> 00:20:17,610
and now we will see what it's like to actually attach this to one of our objects

322
00:20:17,660 --> 00:20:20,030
So we have to find our whole component

323
00:20:20,810 --> 00:20:23,570
and maybe you want to put it on like the cylinder

324
00:20:24,530 --> 00:20:30,380
So we will put color toggle because that is the name

325
00:20:30,380 --> 00:20:31,550
We specified the script

326
00:20:32,030 --> 00:20:33,440
which was called dash toggle

327
00:20:33,450 --> 00:20:35,290
It is just the same name as the file

328
00:20:35,290 --> 00:20:39,530
but it doesn't have to be the same name as a JavaScript file because it could be anything you want

329
00:20:40,550 --> 00:20:45,440
And now if we come to our scene again

330
00:20:45,900 --> 00:20:47,730
and assuming everything worked

331
00:20:48,230 --> 00:20:50,210
when we click on cylinder

332
00:20:50,740 --> 00:20:51,990
we get the alert verb

333
00:20:52,880 --> 00:20:56,950
And so this is our first instance of having feedback

334
00:20:56,950 --> 00:21:00,430
And you will see alerts here is not taking other inputs

335
00:21:00,440 --> 00:21:08,140
So this is why you don't probably you want to have alerts pop up unless it's extremely important because it's basically not letting the user do anything else

336
00:21:08,300 --> 00:21:11,500
So we hover over it

337
00:21:11,510 --> 00:21:12,700
we after three seconds

338
00:21:12,700 --> 00:21:14,650
because of that few style vote

339
00:21:14,650 --> 00:21:16,100
it did that ray cast

340
00:21:16,130 --> 00:21:18,480
it will rec it up because basically

341
00:21:18,620 --> 00:21:20,930
sowe can see that our alert pop up

342
00:21:21,200 --> 00:21:22,220
pops up again

343
00:21:22,870 --> 00:21:24,620
So we have our first one put

344
00:21:24,780 --> 00:21:27,650
we defined and we have some functionality and some feedback

345
00:21:27,660 --> 00:21:30,100
but maybe living up to the actual level of the component

346
00:21:30,250 --> 00:21:36,060
let's change this a bit to actually do something with this component

347
00:21:37,610 --> 00:21:41,520
So instead of doing this alert

348
00:21:41,590 --> 00:21:43,550
let's actually change the color

349
00:21:43,720 --> 00:21:45,250
So we toggle the color for it

350
00:21:45,720 --> 00:21:47,340
And so to do that

351
00:21:47,350 --> 00:21:50,530
we actually use the set attribute function

352
00:21:52,100 --> 00:21:55,190
So we have a reference to our entity in the form of e l

353
00:21:55,560 --> 00:21:57,750
and then we call set attribute on it

354
00:21:58,010 --> 00:22:01,740
which is a standard the JavaScript DOM function

355
00:22:05,100 --> 00:22:06,480
But we find in the rest table

356
00:22:06,880 --> 00:22:07,620
But in this case

357
00:22:07,620 --> 00:22:18,010
we are modifying our entity inside of the AFC and we'll change the color of it and we'll set the color to

358
00:22:18,020 --> 00:22:18,560
let's say

359
00:22:18,860 --> 00:22:19,350
red

360
00:22:21,070 --> 00:22:26,820
So the syntax here is the first thing that is changing is the property or the component

361
00:22:27,690 --> 00:22:28,750
even if

362
00:22:32,470 --> 00:22:36,160
And the second being what we are actually changing it to

363
00:22:36,160 --> 00:22:37,650
So we're setting the color to right now

364
00:22:39,610 --> 00:22:42,900
And if we come back to example here

365
00:22:42,910 --> 00:22:46,240
I refresh it and then click on the cylinder

366
00:22:46,640 --> 00:22:47,710
it changes to red

367
00:22:47,920 --> 00:22:48,740
And just like that

368
00:22:48,740 --> 00:22:57,660
we've created our first component and we can do things in a scene now because of the way that this editing component system works

369
00:22:57,840 --> 00:23:01,280
rectified this completely generalized

370
00:23:01,610 --> 00:23:03,670
So we have a color toggle component

371
00:23:03,680 --> 00:23:05,460
we could put it on anything

372
00:23:06,060 --> 00:23:10,150
and you can put it on the plane and just add color to component to it

373
00:23:10,680 --> 00:23:13,030
And when you come back to your scene and hit refresh

374
00:23:13,470 --> 00:23:18,690
youif you click on the plane now it turns red and the cylinder turns

375
00:23:18,700 --> 00:23:19,520
still turns red

376
00:23:20,860 --> 00:23:24,650
This is what is really powerful about the final components is that this behavior

377
00:23:24,650 --> 00:23:30,110
this generalized functionality that you can now associate it with any of the objects in your skin

378
00:23:30,840 --> 00:23:36,510
And we'll take it off the plane just so that our plane doesn't turn this nasty shade of red every single time

379
00:23:39,730 --> 00:23:44,300
So this is the start defining components

380
00:23:44,300 --> 00:23:48,190
This is the we just go to work on this from here

381
00:23:48,580 --> 00:23:49,760
And in the next step

382
00:23:49,900 --> 00:23:55,780
we're going to see what it looks like to actually add in new objects on the fly

383
00:23:56,630 --> 00:23:58,850
We've seen having components defined

384
00:23:59,750 --> 00:24:03,240
but we have to look at what it's like to have things be even more dynamic

385
00:24:03,240 --> 00:24:08,120
What happens if you want to have objects added into the scene after the application starts

386
00:24:08,130 --> 00:24:10,420
or even components are entered the scene

387
00:24:12,210 --> 00:24:14,880
So we'll get into more advanced topics in the next video

388
00:24:14,880 --> 00:24:16,630
but that is all for now
