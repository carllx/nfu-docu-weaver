1
00:00:05,910 --> 00:00:07,610
So in this video

2
00:00:07,730 --> 00:00:10,180
we're going to complete the last ping piece

3
00:00:10,860 --> 00:00:12,160
which is a

4
00:00:15,010 --> 00:00:16,620
Creating custom events

5
00:00:16,770 --> 00:00:22,000
So what you see so far is everything you've written is based off of click events

6
00:00:22,000 --> 00:00:22,380
right

7
00:00:24,870 --> 00:00:26,700
Click on this cube and we add spheres to it

8
00:00:26,990 --> 00:00:28,440
We click on this sphere up here

9
00:00:28,440 --> 00:00:29,890
and it triggers an animation

10
00:00:30,290 --> 00:00:39,300
So now what we are going to do is make our own events so that we can essentially have different objects communicate among each other

11
00:00:40,090 --> 00:00:50,510
And this will add even more interactivity into the scene in terms of making it feel like what you're doing is now this preset functionality is like moving the subject in the direction every single time

12
00:00:50,980 --> 00:00:53,280
But if yous that the sphere moving off of the distance

13
00:00:53,360 --> 00:00:57,080
it is actually moved to the location of the other objects we collect upon

14
00:00:57,580 --> 00:01:00,680
So what we are doing now is this

15
00:01:01,160 --> 00:01:04,980
So back on index registering and react

16
00:01:04,990 --> 00:01:07,760
the first thing that we are going to do is make a new script

17
00:01:08,130 --> 00:01:08,890
So this one

18
00:01:08,890 --> 00:01:11,350
we are going to call return emitter

19
00:01:13,510 --> 00:01:15,680
To kind of fulfill what we just said

20
00:01:16,400 --> 00:01:23,220
any object that gets clicked on is going to emit an event that causes the sphere to return to that specific object

21
00:01:23,710 --> 00:01:25,640
And so for the syntax

22
00:01:25,820 --> 00:01:27,430
but we have for vaki components

23
00:01:27,440 --> 00:01:29,500
we are going to do a frame do register component

24
00:01:29,970 --> 00:01:32,240
We are going to call this component right on emitter

25
00:01:32,830 --> 00:01:35,510
And then we are going to add this JavaScript object in here

26
00:01:36,100 --> 00:01:38,800
So we're going to have our init function

27
00:01:40,610 --> 00:01:47,140
and we are going to do our usual process of capturing the entity itself here

28
00:01:51,250 --> 00:01:53,690
And we are going to add a relatively short function

29
00:01:53,690 --> 00:01:54,400
Actuallythis one

30
00:01:54,400 --> 00:01:57,790
we are going to say this dot return call equals function

31
00:01:59,400 --> 00:02:00,550
And from here

32
00:02:00,550 --> 00:02:07,020
we are going to say light p equal e dot get attribute position

33
00:02:08,920 --> 00:02:11,330
And so the position of the current entity

34
00:02:11,570 --> 00:02:12,570
whichever it is

35
00:02:12,820 --> 00:02:16,990
And the next thing we'll do is a dot emit

36
00:02:17,260 --> 00:02:21,570
And so this is JavaScript web based function

37
00:02:21,570 --> 00:02:24,160
So this is how events are created

38
00:02:26,790 --> 00:02:29,160
Entitywhich is just the A table element

39
00:02:29,170 --> 00:02:31,590
And we can do dot and we on it

40
00:02:32,640 --> 00:02:33,670
So to create an event

41
00:02:33,680 --> 00:02:38,250
Soand here the first thing we do is we are going to pass in the name of the event

42
00:02:38,250 --> 00:02:39,460
So much like a great event

43
00:02:39,660 --> 00:02:45,040
they are going to make a return sphere event to specifically reference the sphere in this case

44
00:02:45,060 --> 00:02:47,320
And the next thing that we are going to do is we are going to pass in

45
00:02:47,410 --> 00:02:49,570
like we saw with the target marker here

46
00:02:49,930 --> 00:02:51,840
it comes with this event details

47
00:02:52,340 --> 00:02:55,450
We're going to pass in an object to the event details

48
00:02:55,780 --> 00:02:56,430
And in this case

49
00:02:56,430 --> 00:03:00,900
it is just going to be an object for a single property at which you are going to call return point

50
00:03:01,740 --> 00:03:03,150
And that is going to be p

51
00:03:04,170 --> 00:03:08,950
which is the position that we just captured for the current object entity

52
00:03:09,840 --> 00:03:11,310
And so after this

53
00:03:11,310 --> 00:03:12,030
we will do l

54
00:03:12,270 --> 00:03:14,720
l dot or this dot

55
00:03:15,110 --> 00:03:18,380
He doesn't matter either way because we'll have a reference to that

56
00:03:18,380 --> 00:03:24,640
Butwe will just kind of follow that convention and we will still be listening for click events in this case

57
00:03:24,640 --> 00:03:27,710
where it's going to be this object listing for click events

58
00:03:27,720 --> 00:03:31,670
and then it's going to broadcast an event for some other object for it to communicate with that

59
00:03:32,010 --> 00:03:33,410
So we'll have a click event

60
00:03:33,420 --> 00:03:37,950
and then we will have this function called return call that we just defined

61
00:03:37,960 --> 00:03:39,880
And that will be what actually happens

62
00:03:40,200 --> 00:03:41,000
And then

63
00:03:41,010 --> 00:03:41,390
you know

64
00:03:41,600 --> 00:03:46,030
the last thing that we do with every single one of these components

65
00:03:46,100 --> 00:03:48,290
just for good practice is we do

66
00:03:48,550 --> 00:03:50,800
this dot e l dot rebo event listener

67
00:03:52,840 --> 00:04:00,720
Just to be practicing good suns here and will remove the emser that this is for click events and this return call

68
00:04:00,730 --> 00:04:03,920
And so this is actually everything we need to define this component

69
00:04:04,010 --> 00:04:07,030
This is everything for the conference

70
00:04:07,070 --> 00:04:07,600
the event

71
00:04:07,600 --> 00:04:09,430
It is actually quite straightforward

72
00:04:10,040 --> 00:04:12,280
You could have all details here if you wanted to

73
00:04:12,280 --> 00:04:13,120
but otherwise

74
00:04:13,210 --> 00:04:14,410
this is all it takes to admit Itt

75
00:04:14,410 --> 00:04:19,760
an event most of us just kind of the same boiler plate that we seen before

76
00:04:20,110 --> 00:04:25,360
So what we have to do next is actually we are going to modify our mover

77
00:04:25,360 --> 00:04:27,240
do JS code a little bit

78
00:04:27,500 --> 00:04:30,600
So we have this animate move component here

79
00:04:30,850 --> 00:04:33,560
So actually it is animate move function rather than

80
00:04:33,600 --> 00:04:38,670
and we are going to make a new function called return move

81
00:04:39,050 --> 00:04:40,740
So we will have that

82
00:04:40,750 --> 00:04:43,550
And we're actually going to capture this event details of this one

83
00:04:43,620 --> 00:04:44,000
Again

84
00:04:44,000 --> 00:04:47,480
much more likely we did a targeter and we will just call that E

85
00:04:48,390 --> 00:04:50,360
and in this case

86
00:04:51,050 --> 00:04:54,210
we know that we defined our own event details here

87
00:04:54,470 --> 00:04:57,900
So we can say let p for the position that we want to go to

88
00:04:58,200 --> 00:05:03,310
and we will do e dot detailed return point as the only profit that we have

89
00:05:03,320 --> 00:05:05,440
So if we hear this event

90
00:05:05,440 --> 00:05:09,290
we can capture the detail and we get the position that event was passed through

91
00:05:09,490 --> 00:05:15,020
So we are actually going to do something very similar to what we did with the last animation component

92
00:05:15,510 --> 00:05:17,950
So we are actually going to grab of this

93
00:05:17,960 --> 00:05:18,880
all of this code

94
00:05:20,120 --> 00:05:21,020
What we are going to do

95
00:05:21,030 --> 00:05:21,310
you know

96
00:05:21,530 --> 00:05:22,440
code duplication here

97
00:05:27,010 --> 00:05:27,930
We're going to

98
00:05:28,890 --> 00:05:29,980
in sort of current position

99
00:05:31,120 --> 00:05:34,220
we're going to have this p value that we want to use and

100
00:05:36,400 --> 00:05:37,010
For a two value

101
00:05:37,070 --> 00:05:40,220
so we do not have to be 5 or five of under distance

102
00:05:40,230 --> 00:05:40,400
We are going

103
00:05:40,970 --> 00:05:46,600
let us have it go to the position of the current entity of the current object that we did the broadcast for

104
00:05:46,600 --> 00:05:52,620
So let's have it a little bit above and will 2 to the y value so

105
00:05:58,630 --> 00:05:58,880
So

106
00:06:01,610 --> 00:06:03,430
Otherwiseit is the same attribute

107
00:06:03,680 --> 00:06:04,150
the animation

108
00:06:05,910 --> 00:06:08,800
the same animation component as the previous one

109
00:06:11,300 --> 00:06:12,100
That's all set up

110
00:06:12,150 --> 00:06:22,510
And so the last thing I to talk about here is that the way that events get emitted is that they bubble up through the hierarchy

111
00:06:23,350 --> 00:06:26,210
So while we're looking at this

112
00:06:26,210 --> 00:06:27,970
we'll include a script here

113
00:06:29,070 --> 00:06:33,770
source equals and then return emitter dot JS

114
00:06:35,310 --> 00:06:40,330
And let's say that we want to have it returned to like the center of the plane

115
00:06:41,140 --> 00:06:44,100
So we can put the return emitter component it on here

116
00:06:45,490 --> 00:06:48,680
And we have a mover component already on the sphere

117
00:06:49,570 --> 00:06:50,910
but at the moment

118
00:06:54,810 --> 00:06:55,920
I will go back to Remover

119
00:06:56,080 --> 00:06:57,710
Just quickly add the emit lister

120
00:06:58,160 --> 00:07:00,930
So let's say we add emit lister to our entity

121
00:07:01,920 --> 00:07:04,430
and we're listening for the return sphere event

122
00:07:04,580 --> 00:07:04,930
right

123
00:07:05,290 --> 00:07:06,800
So when it happens

124
00:07:06,800 --> 00:07:09,530
we want to just dot return move

125
00:07:12,350 --> 00:07:12,890
And likewise

126
00:07:13,610 --> 00:07:14,580
in the remove function

127
00:07:14,580 --> 00:07:17,250
we just kind of move that over and chains

128
00:07:18,470 --> 00:07:19,990
And for the move

129
00:07:21,590 --> 00:07:25,480
remove that even less for the return sphere event that's being produced

130
00:07:25,830 --> 00:07:28,010
And we can come back to the file here

131
00:07:28,160 --> 00:07:29,360
And when we click on the sphere

132
00:07:29,360 --> 00:07:31,850
it still does its little verbal and moves off the distance

133
00:07:31,850 --> 00:07:32,080
right

134
00:07:32,090 --> 00:07:37,240
Because we still have that click event that will stick for it just has another event turned as well

135
00:07:37,520 --> 00:07:39,520
So we have this click event that way

136
00:07:39,650 --> 00:07:40,670
Let's look for on the plane

137
00:07:40,690 --> 00:07:42,000
But when you click on it right now

138
00:07:42,000 --> 00:07:42,800
nothing thing happens

139
00:07:43,050 --> 00:07:48,960
And that is because when an event is created from another object in the scene

140
00:07:49,030 --> 00:07:51,560
the event bubbles up through the hierarchy

141
00:07:52,000 --> 00:07:59,180
And so because the sphere and the plane are on the same level of hierarchy

142
00:08:00,160 --> 00:08:01,870
when the event gets created

143
00:08:02,220 --> 00:08:02,880
the sphere

144
00:08:03,390 --> 00:08:10,000
the listener on it never hears that event because the plane is here and they are both on the same level

145
00:08:10,020 --> 00:08:12,360
So when the plane creates that event

146
00:08:12,820 --> 00:08:14,700
the plane itself can hear the wind

147
00:08:15,130 --> 00:08:18,860
and anything higher than the hierarchy can also hear that

148
00:08:19,360 --> 00:08:21,580
So one of those things is the seam

149
00:08:21,720 --> 00:08:28,790
So what you can actually do is that instead of putting the image listed on the sphere

150
00:08:29,010 --> 00:08:32,070
you can attach it to the scene instead

151
00:08:32,850 --> 00:08:34,050
And to do that

152
00:08:34,270 --> 00:08:40,020
it will actually capture the scene and use the scene element

153
00:08:40,650 --> 00:08:46,600
And so one thing we didn't cover before is that instead of doing a query selector

154
00:08:46,610 --> 00:08:52,090
you can also every elevated a frame has a reference to the same element

155
00:08:52,380 --> 00:08:59,050
And the way we access dot is this dot l dot CCN

156
00:09:00,130 --> 00:09:01,690
So if we add that in here

157
00:09:02,690 --> 00:09:04,150
like in the remove a red lister

158
00:09:04,730 --> 00:09:12,220
And so now by adding this image lister to the scene as opposed to the specific object this component is on

159
00:09:12,510 --> 00:09:14,460
but it's just being applied to this component

160
00:09:14,470 --> 00:09:19,650
It says the listeners in a different place in the hierarchy where it can actually hear the event go off

161
00:09:19,820 --> 00:09:27,400
And so now we can go back to our application and we can have this sphere move off into the distance

162
00:09:29,160 --> 00:09:31,290
And now if you click on the plane

163
00:09:31,350 --> 00:09:34,930
we see that the sphere actually travels to the center of the plane

164
00:09:37,510 --> 00:09:39,280
Likewisewe can have it move away again

165
00:09:39,280 --> 00:09:40,700
but it still doing the event listening

166
00:09:41,070 --> 00:09:42,940
So like any stage in the animation

167
00:09:42,950 --> 00:09:44,320
if you click on the plane again

168
00:09:44,330 --> 00:09:48,130
it will change the animation component and it will return back to the center of the plane

169
00:09:48,840 --> 00:09:56,350
And you will see I am moving around here so that the curse I here isn't firing these raycast events of in the center of the screen

170
00:09:57,170 --> 00:10:05,180
And the real cool part about this is that now we have a sphere that will go anywhere we click on as long as that object has this return emitter component

171
00:10:06,110 --> 00:10:07,270
So the pla​‌​‌​​‌‌​​‌‌​​‌‌‌‌​‌​​‌‌​​‌‌​​‌‌​​‌‌​​‌‌​‌​‌‌‌​‌​​‌‌​​‌‌​​​‌​​‌‌‌‌​‌​​‌‌​‌​‌‌‌​‌​​‌‌‌‌​‌​‌‌​​​‌‌‌‌‌‌​​‌‌​‌‌‌​​‌‌​‌​‌​​‌‌‌​‌‌​​‌‌​​​‌​​‌‌​​‌‌‌‌​‌​‌‌‌‌‌​‌​‌‌‌​​‌‌​​​‌​​‌‌‌​‌‌​​‌‌​‌​‌​​‌‌​‌​‌​​‌‌‌​​‌‌‌​‌‌‌‌​​​‌‌‌​‌‌​​‌‌‌​‌‌‌‌​‌​​‌‌​​‌‌‌​‌‌​​‌‌​‌‌​​​‌‌​​‌‌​​‌‌​​‌‌‌‌​‌‌‌​‌​​‌‌​‌​‌‌‌​‌​‌‌​​​‌‌‌​​‌​​‌‌‌​‌‌​​‌‌‌‌​‌​​‌‌​‌​‌​​‌‌‌‌​‌‌‌​‌‌‌‌‌​​‌‌‌‌​‌​​‌‌‌​​‌‌‌​‌​‌‌‌​​‌‌​​‌‌​​‌‌‌​‌‌​​‌‌‌‌‌​​​‌‌​​​‌​​‌‌​​​‌​​‌‌​​‌‌​​‌‌​​‌‌‌‌​‌​‌‌‌​​‌‌‌‌‌​​​‌‌​‌‌‌‌‌​‌‌‌​‌​​‌‌‌‌​‌‌‌​‌‌​‌‌​​‌‌​‌​‌‌‌​‌​‌​‌​​‌‌​‌​‌​​‌‌​‌‌‌‌‌​‌‌‌​‌​​‌‌​​‌‌‌‌​‌​‌​‌‌‌​‌‌‌​‌‌‌​‌​‌‌​​​‌‌‌​‌‌‌‌​‌​‌‌‌‌‌​‌​‌​‌‌‌​‌‌​​‌‌‌​‌​‌‌‌‌‌​‌​‌​‌​​‌‌​‌​‌​​‌‌​‌​‌‌‌​‌‌​​‌‌‌​‌‌‌​‌‌‌​‌‌‌​‌​​‌‌‌‌​‌​​‌‌‌​​‌‌‌​‌​​‌‌​​‌‌‌​​‌​​‌‌‌‌​‌​​‌‌​‌‌​​​‌‌‌​​‌‌‌​‌​‌‌‌‌‌​‌‌‌‌​​​‌‌‌‌​‌‌‌​‌​‌‌‌‌‌​‌​‌‌‌​​‌‌‌‌​‌‌‌​‌‌‌​‌‌‌​‌‌​‌‌​​‌‌​​‌‌​​‌‌​‌​‌​​‌‌​​‌‌‌‌​‌‌‌​‌‌‌​‌​‌​‌‌‌​‌‌​‌‌‌‌​‌​‌‌‌​​‌‌​‌​‌​​‌‌‌​​‌​​‌‌‌​‌‌​​‌‌‌‌​‌​​‌‌​‌​‌‌‌​‌​‌‌‌‌‌​‌‌‌‌​​​‌‌‌​‌‌‌‌​‌‌‌​‌‌‌​‌‌‌​‌‌‌​‌‌​​‌​​‌‌​‌​‌‌‌​‌​‌‌‌​​‌‌​‌‌​​​‌‌‌‌​‌‌‌​‌​‌‌‌​​‌‌‌‌‌​​​‌‌​‌​‌​​‌‌‌‌​‌​​‌‌‌​‌‌‌‌​‌‌​‌‌‌‌​‌‌​​‌‌‌​‌​‌‌‌‌‌​‌‌​‌‌‌‌​‌‌​‌‌‌‌​‌‌‌‌‌​​‌‌‌‌‌‌​​‌‌​‌‌‌​​‌‌‌​‌‌‌‌​‌‌​‌‌‌‌​‌‌​​‌​​‌‌​​‌‌​​‌‌‌​​‌​​‌‌‌​​‌​​‌‌​‌​‌‌‌​‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌ne has a return

172
00:10:07,270 --> 00:10:08,280
a component on it

173
00:10:08,600 --> 00:10:13,360
We could then return a meta component to the cylinder

174
00:10:14,420 --> 00:10:18,160
and we can just add it to the Pos as well if you want to

175
00:10:20,600 --> 00:10:22,840
And we just added to all the objects in the scene

176
00:10:25,220 --> 00:10:32,770
This is probably one of the most interesting places where you see this company used because we will have the sphere of in a distance where you click on this plane

177
00:10:32,780 --> 00:10:33,960
it will move to there

178
00:10:34,410 --> 00:10:35,640
Or once we click on the cube

179
00:10:35,650 --> 00:10:38,090
it will change path and come to the cube instead

180
00:10:38,670 --> 00:10:40,220
Or it can go over to the cylinder

181
00:10:41,030 --> 00:10:42,240
So it will go anywhere

182
00:10:42,720 --> 00:10:46,010
We have the return emitter component so

183
00:10:48,090 --> 00:10:51,330
You can change the parameters in your return element

184
00:10:52,650 --> 00:11:03,250
And you can do some calculation between the distance of the point the sphere is currently is currently at and the point that we have received arrive at

185
00:11:03,890 --> 00:11:04,760
And based on that

186
00:11:04,860 --> 00:11:11,130
change the duration of the animation so so that it moves at the same speed always

187
00:11:11,130 --> 00:11:12,960
regardless of where it is going

188
00:11:18,210 --> 00:11:18,750
So

189
00:11:20,780 --> 00:11:24,640
We have the basis here for an immense amount of functionality

190
00:11:26,870 --> 00:11:29,500
An immense amount of interactivity that you can include

191
00:11:32,160 --> 00:11:32,420
So

192
00:11:40,630 --> 00:11:42,240
So you can look around the scene

193
00:11:42,910 --> 00:11:46,770
from accessing this link either on the phone or on a laptop

194
00:11:46,930 --> 00:11:49,530
and you can just play around with it

195
00:11:50,700 --> 00:11:55,030
No input is required besides GAC gra and extremely powerful

196
00:11:55,080 --> 00:12:05,170
So that's the last visual operator we're going to cover for now is the idea of creating custom events like this and a way for different entities to communicate

197
00:12:05,360 --> 00:12:06,310
Just remember that there is

198
00:12:06,310 --> 00:12:06,720
you know

199
00:12:07,300 --> 00:12:11,030
adding the weight listed to the C element is just one way of communicating

200
00:12:11,060 --> 00:12:17,700
but it's an extremely simple way of doing it and having this communication happen and share this data

201
00:12:17,870 --> 00:12:26,240
And then you can have much more and it can be as dynamic as you want for this animation components and as much complexity as you want

202
00:12:27,630 --> 00:12:28,680
thank you
