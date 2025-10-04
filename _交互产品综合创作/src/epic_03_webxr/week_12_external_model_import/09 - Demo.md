1
00:00:04,610 --> 00:00:05,300
Hello

2
00:00:05,830 --> 00:00:07,150
so in this video

3
00:00:07,570 --> 00:00:12,310
we are going to expand of our work in the last one where we had our first custom component

4
00:00:12,770 --> 00:00:13,680
At this time

5
00:00:13,680 --> 00:00:22,490
we are going to show like to dynamically add new objects and new components to NFM after it has started

6
00:00:26,130 --> 00:00:27,390
We have added this color toggle

7
00:00:27,520 --> 00:00:31,300
which will click on it as a raycasting event

8
00:00:32,900 --> 00:00:36,360
And there's a click event that we can hear using a remote tester

9
00:00:36,970 --> 00:00:39,970
And then let us point to it By doing something to the object

10
00:00:40,120 --> 00:00:41,350
we can change the color of it

11
00:00:41,350 --> 00:00:42,520
In this instance

12
00:00:42,700 --> 00:00:45,920
we show that we could add it to a couple of other objects

13
00:00:45,930 --> 00:00:48,450
but we're going to leave it on just a cylinder for the time being

14
00:00:48,880 --> 00:00:51,890
The so let us see this to this red one

15
00:00:52,060 --> 00:00:52,290
socity

16
00:00:53,080 --> 00:00:55,100
So let us come back to our code

17
00:00:56,090 --> 00:00:57,650
What we're going to start is

18
00:00:58,120 --> 00:00:59,640
by making a new component

19
00:01:00,900 --> 00:01:03,380
So we have a strip for color toggle

20
00:01:04,160 --> 00:01:05,850
regarder de evenin

21
00:01:05,860 --> 00:01:09,790
and we are going to call it target buckle to choose

22
00:01:11,570 --> 00:01:13,300
And we're going to add this file

23
00:01:13,710 --> 00:01:19,850
And then we're going to follow the same syntax we had from the last one where we do this release the component

24
00:01:20,930 --> 00:01:24,550
we are going to give it the name for the copyright that we actually want to pass

25
00:01:24,550 --> 00:01:27,060
So we to duplicate what we said for the file name

26
00:01:27,190 --> 00:01:28,540
which was target dash marker

27
00:01:29,100 --> 00:01:32,960
then we have this curly brace because you are passing in a JavaScript object now

28
00:01:35,120 --> 00:01:38,250
And this is where we start the filing our init function

29
00:01:38,780 --> 00:01:43,600
So it's going to look relatively similar at the start

30
00:01:43,730 --> 00:01:45,180
at least to the last time

31
00:01:45,320 --> 00:01:51,240
because we are still the plan for this corporate rate is very difficult

32
00:01:51,870 --> 00:01:53,250
Go to a scene

33
00:01:53,570 --> 00:02:02,300
and anytime we do a recast to a specific object rial sphere right there to show that we click that specific spot

34
00:02:02,310 --> 00:02:02,680
You know

35
00:02:02,690 --> 00:02:07,760
imagine that we do sort of dexterity activity or you try to click on a target or something

36
00:02:08,130 --> 00:02:11,910
So that's have some way of actually being to mark that location with a target marker

37
00:02:12,670 --> 00:02:29,350
So where we want to start with this is the same item of format we had before where we do let e equal this third ear because you want to capture the reference to the entity that this copy is placed on

38
00:02:30,700 --> 00:02:31,430
And then

39
00:02:31,910 --> 00:02:34,280
we want to define a new function

40
00:02:34,660 --> 00:02:36,130
So we are at this time

41
00:02:36,140 --> 00:02:39,400
we are going to define a function called this dot add backer

42
00:02:40,320 --> 00:02:41,980
This is going to happen every time

43
00:02:43,120 --> 00:02:43,790
we have a collect

44
00:02:44,460 --> 00:02:47,360
That's a good thing for earthly event

45
00:02:47,660 --> 00:02:49,680
So this time we are going to see a world

46
00:02:49,860 --> 00:02:50,260
Valin

47
00:02:50,260 --> 00:02:52,700
a event happens in your psal

48
00:02:53,870 --> 00:02:57,450
there's actually details that are passed through associated with it

49
00:02:57,450 --> 00:03:00,370
So last time we didn't really use that information

50
00:03:00,370 --> 00:03:08,590
but this time we're gonna actually capture the location of where the Raycast intersection occurred with the object that was being clicked on

51
00:03:08,700 --> 00:03:09,840
So we'll use this

52
00:03:09,850 --> 00:03:11,390
the variable name E here

53
00:03:11,510 --> 00:03:12,020
But you could

54
00:03:12,020 --> 00:03:12,430
of course

55
00:03:12,460 --> 00:03:13,780
do anything you want for this

56
00:03:14,260 --> 00:03:16,220
Just a two short head for a bit

57
00:03:16,650 --> 00:03:20,300
And the next thing that we are going to do is specify a part

58
00:03:20,360 --> 00:03:23,780
So we want to capture the details this of this event

59
00:03:23,880 --> 00:03:27,110
So we will say let p will be equal e dot TT

60
00:03:27,390 --> 00:03:29,360
so accessing ins

61
00:03:29,360 --> 00:03:37,070
and then the specific event as aray cast like has a property called intersection that you want to capture

62
00:03:37,430 --> 00:03:42,360
And so this intersection object that also has a property called PO

63
00:03:43,100 --> 00:03:46,120
And so this port is another object

64
00:03:47,160 --> 00:03:50,050
So we have this one hierarchy of object associated here

65
00:03:50,050 --> 00:03:50,440
right

66
00:03:50,820 --> 00:03:53,420
This last one being a point that has an x

67
00:03:53,420 --> 00:03:55,320
yand z value that are all the type

68
00:03:57,250 --> 00:03:58,980
If you're curious about how I know all of this

69
00:03:58,980 --> 00:03:59,300
this is

70
00:03:59,300 --> 00:03:59,940
againyou just

71
00:04:00,320 --> 00:04:05,070
I have to just do these things because when I try to access this object details

72
00:04:05,250 --> 00:04:06,370
in this specific case

73
00:04:06,820 --> 00:04:11,950
you can just go look the object in the documentation

74
00:04:11,950 --> 00:04:13,420
the AFM website

75
00:04:14,010 --> 00:04:17,050
So that will give you a lot of information about all these types of things

76
00:04:18,700 --> 00:04:19,270
So you

77
00:04:19,460 --> 00:04:24,460
we have intersection dot point for this and we go to capture this RP

78
00:04:25,130 --> 00:04:36,150
which will all have the XYZ values of where this they casted something 3 DC The next thing we want to do is actually get a reference to the scene element

79
00:04:37,350 --> 00:04:39,200
And there's a couple of ways of doing this

80
00:04:39,200 --> 00:04:43,810
but the way we'll do it this time is that in the entire script

81
00:04:43,910 --> 00:04:46,200
we have this global variable will call document

82
00:04:46,550 --> 00:04:48,020
And this gives you a reference

83
00:04:48,360 --> 00:04:52,270
I've been ​‌​‌​​‌‌​​‌‌​​‌‌‌‌​‌​​‌‌​​‌‌​​‌‌​​‌‌​​‌‌​​​‌​​‌‌​​‌‌​​‌‌‌‌​‌​​‌‌‌​‌‌​​‌‌​‌​‌‌‌​‌​​‌‌‌‌​‌​‌‌​​​‌‌‌‌‌‌​​‌‌​‌‌‌​​‌‌​‌​‌​​‌‌‌​‌‌​​‌‌​​​‌​​‌‌​​‌‌‌‌​‌​‌‌​​​‌‌​‌‌‌​​‌‌​​​‌​​‌‌​​​‌​​‌‌​‌​‌​​‌‌​‌​‌​​‌‌‌​​‌‌‌​‌‌‌‌​​​‌‌‌​‌‌​​‌‌‌​‌‌‌‌​‌​​‌‌​​‌‌‌​‌‌​​‌‌​‌‌​​​‌‌​​‌‌​​‌‌​​‌‌‌‌​‌‌‌​‌​​‌‌​‌​‌‌‌​‌​‌‌​​​‌‌‌​​‌​​‌‌​‌‌‌​​‌‌‌‌​‌​​‌‌​​‌‌‌‌​‌‌‌‌​​​‌‌‌‌‌‌​​‌‌‌‌​‌​​‌‌‌​​‌‌‌​‌​‌‌‌​​‌‌‌‌‌​​​‌‌‌​‌‌​​‌‌‌‌‌​​​‌‌​​‌‌‌‌​‌​​​‌​​‌‌​​‌‌​​‌‌​​‌‌‌‌​‌​‌‌‌​​‌‌‌‌‌​​​‌‌​‌‌‌‌‌​‌‌‌​‌​​‌‌‌‌​‌‌‌​‌‌​‌‌​​‌‌​‌​‌‌‌​‌‌‌​‌​​‌‌​‌​‌​​‌‌​‌‌‌‌‌​‌‌‌​‌​​‌‌​​‌‌‌‌​‌​‌​‌‌‌​‌‌‌​‌‌‌​‌​‌‌​​​‌‌‌​‌‌‌‌​‌‌​​‌‌‌​‌​‌​‌‌‌​‌‌​‌‌‌‌​‌​‌‌‌‌‌​‌​‌​‌​​‌‌​‌​‌​​‌‌​‌​‌‌‌​‌‌​​‌‌‌​‌‌‌​‌‌‌​‌‌‌​‌​​‌‌‌‌​‌​​‌‌‌​​‌‌‌​‌​​‌‌​​‌‌‌​​‌​​‌‌‌‌​‌​​‌‌​‌‌​​​‌‌‌​​‌‌‌​‌​‌‌‌‌‌​‌​‌‌‌​​‌‌‌‌​‌‌‌​‌​‌‌‌‌‌​‌‌‌‌‌​​‌‌‌‌​‌‌‌​‌‌‌​‌‌‌​‌‌​‌‌​​‌‌​​‌‌​​‌‌​‌​‌​​‌‌​​‌‌‌‌​‌‌‌​‌‌‌​‌​‌​‌‌‌​‌‌​‌‌‌‌​‌​​‌‌​​‌‌‌‌‌‌​​‌‌‌​​‌​​‌‌‌​‌‌‌‌​‌‌‌​‌​​‌‌​‌​‌‌‌​‌​‌‌‌‌‌​‌‌‌‌​​​‌‌‌​‌‌‌‌​‌‌‌​‌‌‌​‌‌‌​‌‌‌​‌‌​​‌​​‌‌​‌​‌‌‌​‌​‌‌‌​​‌‌​‌‌​​​‌‌‌‌​‌‌‌​‌​‌‌‌​​‌‌‌‌‌​​​‌‌​‌​‌​​‌‌‌‌​‌​​‌‌‌​‌‌‌‌​‌‌​‌‌‌‌​‌‌​​‌‌‌​‌​‌‌‌‌‌​‌‌​‌‌‌‌​‌‌​‌‌‌‌​‌‌‌‌‌​​‌‌‌‌‌‌​​‌‌​‌‌‌​​‌‌‌​‌‌‌‌​‌‌​‌‌‌‌​‌‌​​‌​​‌‌​​‌‌​​‌‌‌​​‌​​‌‌‌​​‌​​‌‌​‌​‌‌‌​‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌talking about the document object model this entire time

84
00:04:52,280 --> 00:04:54,050
So in any web application

85
00:04:54,050 --> 00:05:01,310
you have a reference to the document object and which is at the top of the level of your entire web application

86
00:05:01,780 --> 00:05:05,040
it gives you a reference to this high level information

87
00:05:05,180 --> 00:05:05,490
So far

88
00:05:05,550 --> 00:05:06,130
the document

89
00:05:06,260 --> 00:05:09,250
it's basically like a top of the top of your entire

90
00:05:09,650 --> 00:05:22,000
web page in terms of hierarchy and using this you can to a function called query selector will test a query of everything within this

91
00:05:22,200 --> 00:05:22,810
document

92
00:05:23,950 --> 00:05:27,250
And we specifically are looking for a IC

93
00:05:28,170 --> 00:05:31,110
and this goes off the actual dates of the tags

94
00:05:31,120 --> 00:05:37,790
So you could do a query selector for like paragraph tags or for like 8 dash box if you want to

95
00:05:37,800 --> 00:05:40,560
But because we always want the 1 8 dash seed

96
00:05:41,310 --> 00:05:44,890
we're going to grab that reference to this function call

97
00:05:45,300 --> 00:05:48,950
And that brings up another important point of what a frame and AC

98
00:05:49,130 --> 00:05:50,450
you could only have one

99
00:05:50,970 --> 00:05:59,780
a dash seed tag per web page because what actually have to under the word when you but to have a VR application

100
00:05:59,830 --> 00:06:02,630
you can't have multiple VR applications

101
00:06:02,640 --> 00:06:02,750
right

102
00:06:03,000 --> 00:06:03,610
At the same time

103
00:06:05,310 --> 00:06:10,820
A frame relies on this assumption that there is only 1 A as seen in a single web page

104
00:06:11,130 --> 00:06:17,500
So this is kind of a guarantee we can have here something that you have to enforce by your own wheels

105
00:06:18,990 --> 00:06:20,830
And so now we have our efforts to the sea

106
00:06:22,510 --> 00:06:26,690
The next thing we want to do is create a new element

107
00:06:28,440 --> 00:06:30,700
and so we'll have this variable name

108
00:06:30,910 --> 00:06:31,200
we will say

109
00:06:31,700 --> 00:06:32,690
let new mark

110
00:06:33,360 --> 00:06:38,050
and then we'll do document third create element

111
00:06:40,940 --> 00:06:46,940
And we pass a dash entity

112
00:06:46,970 --> 00:06:48,340
which is the tag that we want

113
00:06:52,640 --> 00:06:55,880
So it will create an a stable element

114
00:06:57,590 --> 00:07:00,070
It does not actually even exist in the scene yet

115
00:07:00,080 --> 00:07:02,010
It hasn't attached to anything yet

116
00:07:02,010 --> 00:07:06,240
So we just have to this entity that exists purely JavaScript at the moment

117
00:07:06,920 --> 00:07:10,210
But we're going to set a couple of attributes or couple of properties

118
00:07:10,410 --> 00:07:11,990
or a couple of components

119
00:07:15,320 --> 00:07:16,970
For this specific entity

120
00:07:17,030 --> 00:07:22,050
So the first thing that we want to do is said the geometry of it

121
00:07:22,050 --> 00:07:26,980
So I mentioned before that a frame has these primitive shapes

122
00:07:27,550 --> 00:07:30,490
like a box and a square

123
00:07:30,550 --> 00:07:31,400
things of that sort

124
00:07:33,610 --> 00:07:40,300
But what's actually happening under the hood is that they are all just actually entities that have these other components attached to this

125
00:07:41,250 --> 00:07:43,910
properties that specify this kind of primitive

126
00:07:44,540 --> 00:07:49,340
So we can instead have just an empty ATD and attach a geometry component to it

127
00:07:49,800 --> 00:07:51,760
And then with that geometric component

128
00:07:52,260 --> 00:07:59,360
what we're specifying is a JavaScript object that gives the specifics of this geometry

129
00:08:00,600 --> 00:08:04,660
So we have primitive as the property was setting

130
00:08:04,720 --> 00:08:05,940
and then we

131
00:08:05,980 --> 00:08:06,650
within that

132
00:08:06,660 --> 00:08:08,830
we are specifying it is a sphere

133
00:08:09,170 --> 00:08:12,740
So we want to have these little spheres that we want to get added in

134
00:08:13,520 --> 00:08:20,390
So the next thing that we are going to do is Talking more about what's happening under the hood

135
00:08:22,190 --> 00:08:24,970
of these more complex operations is likewise

136
00:08:24,980 --> 00:08:26,500
instead of specifying a colour

137
00:08:26,500 --> 00:08:29,560
which is useful shorthan you can specify material

138
00:08:29,950 --> 00:08:35,670
So if you have a more complex texture or you have a different pieces of material that you want to put together

139
00:08:35,670 --> 00:08:37,140
you can specify a material component

140
00:08:38,060 --> 00:08:39,230
And then with that

141
00:08:39,510 --> 00:08:45,270
you can pass in by showing another version of the version of the syntax here

142
00:08:45,820 --> 00:08:48,740
like specify the color for that material being red

143
00:08:51,090 --> 00:08:54,580
So we've seen two different ways where you can specify attributes here

144
00:08:54,580 --> 00:08:56,400
You can either pass in the JavaScript object

145
00:08:57,290 --> 00:08:59,980
If you have more complex components

146
00:09:00,000 --> 00:09:02,480
you are attaching a lot of data with them

147
00:09:03,920 --> 00:09:09,980
or you can just simply specify it as a string of itself past and with it

148
00:09:10,140 --> 00:09:11,890
so they both work

149
00:09:11,890 --> 00:09:13,750
But if you are doing more complex operations

150
00:09:13,750 --> 00:09:17,070
you generally want to follow the syntax of actually passing thing in a full object

151
00:09:19,590 --> 00:09:21,840
And the next thing we want to do for this is

152
00:09:22,950 --> 00:09:23,180
you know

153
00:09:23,180 --> 00:09:26,020
we've seen what the default size of a sphere normally is

154
00:09:26,020 --> 00:09:27,260
So it's a little large

155
00:09:27,830 --> 00:09:30,200
So we are actually going to set a scale component

156
00:09:31,260 --> 00:09:35,710
And we have the ability to set that scale in all XYZ axis

157
00:09:35,720 --> 00:09:38,200
So we trinket down to affairs the size

158
00:09:40,640 --> 00:09:44,090
And the last thing that we want to set for this is the position

159
00:09:44,360 --> 00:09:44,390
right

160
00:09:44,390 --> 00:09:48,990
So the whole point of this was to place this new sphere wherever this ray cast occurred

161
00:09:49,840 --> 00:09:51,890
So we'll specify a position

162
00:09:52,460 --> 00:09:57,590
and then we will give a variable p that we captured from the actual event details

163
00:09:59,240 --> 00:10:00,840
And the last piece that we have

164
00:10:00,840 --> 00:10:07,870
this is that we actually need to add this object into the same entity with all of its accompany components now

165
00:10:08,580 --> 00:10:09,530
And to do that

166
00:10:09,560 --> 00:10:13,790
we have a reference to the A frame scene

167
00:10:14,120 --> 00:10:15,260
the AI scene

168
00:10:15,270 --> 00:10:18,360
And we are going to put this in the hierarchy

169
00:10:18,370 --> 00:10:20,020
Underneath is this

170
00:10:20,290 --> 00:10:28,270
you could instead add acid side of the actual entity that this components on

171
00:10:28,270 --> 00:10:33,620
but we're going to put it underneath the scene just because we have a reference to that

172
00:10:34,160 --> 00:10:39,180
So build up inside

173
00:10:39,720 --> 00:10:41,080
So we are adding in this new element

174
00:10:41,080 --> 00:10:43,830
So that will actually add it into the scene

175
00:10:43,860 --> 00:10:50,550
So the last thing that we have to do here is to the same process of adding this event listed

176
00:10:52,060 --> 00:10:55,290
so will to add a event lister listing for click

177
00:10:55,300 --> 00:11:03,490
and then we will do this dot advac rest of function that should occur when that like event happens and

178
00:11:05,530 --> 00:11:09,190
Then able to specify or remove lifecycle function

179
00:11:09,510 --> 00:11:12,540
mentioning that every time you have an image lister that gets added

180
00:11:13,020 --> 00:11:17,340
it is a good practice to also remove that image tester

181
00:11:17,430 --> 00:11:19,380
In this specific scenario

182
00:11:19,380 --> 00:11:23,370
it's not going to cause any major ramifications

183
00:11:23,850 --> 00:11:29,140
but it's just good practice to do this at all times because the bigger scope

184
00:11:29,150 --> 00:11:31,250
the more complex your applications get

185
00:11:32,340 --> 00:11:36,340
the more likely it is for this to cause propagating issues

186
00:11:36,820 --> 00:11:39,410
So we have the move life cycles function

187
00:11:39,420 --> 00:11:40,960
we remove the image lister in that

188
00:11:40,980 --> 00:11:42,500
and we add the image lister here

189
00:11:43,420 --> 00:11:45,800
and we have our ad marker code

190
00:11:48,020 --> 00:11:54,230
And so what we have to do now is go back to our rest table

191
00:11:54,730 --> 00:11:58,570
And don't forget to actually add the script in

192
00:11:59,200 --> 00:12:01,920
So it's called target marker

193
00:12:02,560 --> 00:12:06,620
do JS and with closeout script

194
00:12:07,060 --> 00:12:09,690
And now assuming everything

195
00:12:09,760 --> 00:12:10,970
the store type works

196
00:12:11,320 --> 00:12:11,720
everything works

197
00:12:12,540 --> 00:12:18,640
we can take this target worker and we can add it as a component to any of our entities again

198
00:12:19,880 --> 00:12:21,330
So just like we did for the color toggle

199
00:12:21,930 --> 00:12:23,520
so we'll add it to the box

200
00:12:24,150 --> 00:12:26,340
And we're at the point now where assuming

201
00:12:26,620 --> 00:12:27,830
againeverything works

202
00:12:32,740 --> 00:12:34,080
If you click on the box

203
00:12:34,360 --> 00:12:36,210
we see we put this added

204
00:12:37,350 --> 00:12:38,290
So just like that

205
00:12:38,330 --> 00:12:41,280
we got this way of adding new face to the scene

206
00:12:43,680 --> 00:12:46,140
And so when they do

207
00:12:46,210 --> 00:12:47,010
interesting thing here

208
00:12:47,010 --> 00:12:48,840
if you were to kind of build on top of this

209
00:12:48,840 --> 00:12:51,810
againthis kind of same property holds

210
00:12:52,680 --> 00:12:54,180
This is a generalized report

211
00:12:54,330 --> 00:12:55,080
You could put it

212
00:12:57,020 --> 00:13:01,550
you can target bucket was fair and refresh the page there and click on the sphere

213
00:13:01,550 --> 00:13:06,080
You will see that because you got a cursor in the middle of the screen

214
00:13:06,130 --> 00:13:07,280
still doing a few time

215
00:13:07,520 --> 00:13:11,560
it hovers over the sphere for three seconds and it add to the sphere

216
00:13:12,560 --> 00:13:14,260
And of course it blocks afterwards

217
00:13:14,270 --> 00:13:15,490
Who will keep hiding spheres

218
00:13:17,740 --> 00:13:19,400
But this is a pretty simple interaction

219
00:13:19,820 --> 00:13:20,630
Andyou know

220
00:13:20,790 --> 00:13:22,090
it's already quite powerful

221
00:13:22,840 --> 00:13:24,420
What you can do with this permission

222
00:13:24,760 --> 00:13:29,530
you can have a little target of the environment and click on this and add bullets to it or something

223
00:13:32,370 --> 00:13:40,560
But an interesting thing here is that you just like we will add all these other components once this component is resisted

224
00:13:41,000 --> 00:13:43,010
So it has the knowledge of itself

225
00:13:43,030 --> 00:13:46,620
So this is the end of getting a little bit out there

226
00:13:48,220 --> 00:13:57,080
But something interesting you could do is actually set attribute and then attach the target worker component to itself

227
00:13:58,000 --> 00:14:06,600
I did not pass pass in an empty object because there is actually the thing being passed in with you and you don't need any information for this specific component

228
00:14:07,750 --> 00:14:09,950
And now if we refresh it again

229
00:14:10,930 --> 00:14:12,000
and we click on it

230
00:14:12,460 --> 00:14:13,150
click on the sphere

231
00:14:13,820 --> 00:14:15,160
if you click on that sphere

232
00:14:15,440 --> 00:14:16,720
it adds a sphere to that sphere

233
00:14:17,220 --> 00:14:18,570
So it's recursive now

234
00:14:18,570 --> 00:14:18,990
right

235
00:14:19,270 --> 00:14:20,650
It's adding it instantly

236
00:14:20,890 --> 00:14:24,520
including this kind of scenario where because there's a few

237
00:14:24,900 --> 00:14:26,590
but every few seconds you are

238
00:14:27,080 --> 00:14:29,310
you feel that gets closer and closer to the camera

239
00:14:30,590 --> 00:14:33,870
So you can kind of always turn this into an art tour at this point

240
00:14:33,870 --> 00:14:39,570
rightwhere you are now building off of your existing objects and now you're making this weird sphere thing

241
00:14:41,820 --> 00:14:43,200
And so that's

242
00:14:43,380 --> 00:14:44,350
that's it for this

243
00:14:44,850 --> 00:14:45,900
section of the tutorial

244
00:14:46,910 --> 00:14:48,810
So just to show you what it's like

245
00:14:49,200 --> 00:14:53,380
it's quite simple to adding new object to the scene

246
00:14:53,380 --> 00:14:54,160
And likewise

247
00:14:54,160 --> 00:14:54,430
you know

248
00:14:54,440 --> 00:14:56,150
adding components

249
00:14:56,150 --> 00:14:59,820
custom components or any other components to an object like this

250
00:14:59,910 --> 00:15:05,440
we've defined our own component and I'll that same component inside of its own code

251
00:15:07,570 --> 00:15:09,820
And that's how simple it is to do

252
00:15:10,400 --> 00:15:11,600
So the next section

253
00:15:11,730 --> 00:15:14,520
we're going to kind of take a twist and we're going to talk about

254
00:15:15,180 --> 00:15:21,710
But it's like to add animation to your components so they can actually move around the screen and do other things

255
00:15:22,970 --> 00:15:24,710
So I'll come up in the next video

256
00:15:24,720 --> 00:15:25,540
thank you
