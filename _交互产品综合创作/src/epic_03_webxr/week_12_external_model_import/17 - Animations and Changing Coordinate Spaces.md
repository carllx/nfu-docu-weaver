1
00:00:03,260 --> 00:00:03,900
Hello

2
00:00:04,200 --> 00:00:05,390
so in this video

3
00:00:06,550 --> 00:00:11,800
we'll be adding animations to these objects so they are able to move around

4
00:00:11,800 --> 00:00:12,800
change position

5
00:00:13,320 --> 00:00:15,370
they can even change scale or rotate around

6
00:00:15,990 --> 00:00:16,630
And likewise

7
00:00:16,710 --> 00:00:21,770
we're going to have it so that we can actually interact with these objects and make them do things like move around when we click on them

8
00:00:22,570 --> 00:00:24,170
So you see that first off

9
00:00:24,180 --> 00:00:27,370
what happens is that I raised the sphere up into the sky a little bit

10
00:00:27,390 --> 00:00:36,100
It's because we have a fuse timer on the center of the screen right now that is an automatic equipment and we don't want going off randomly

11
00:00:36,400 --> 00:00:42,480
so we just have a sphere way up in the sky here when we come to our Covid

12
00:00:42,480 --> 00:00:43,980
you can see that after this test

13
00:00:44,280 --> 00:00:45,950
the position of the sphere itself

14
00:00:48,180 --> 00:00:49,380
Everything else is the same

15
00:00:49,760 --> 00:00:54,090
And so let's talk about adding animation

16
00:00:54,090 --> 00:00:55,750
So it's done through the animation component

17
00:00:55,750 --> 00:00:56,250
actually

18
00:00:56,570 --> 00:01:00,590
So let let us make the box like 360 degrees

19
00:01:00,940 --> 00:01:02,710
Let us just make it rotate in circles

20
00:01:03,060 --> 00:01:04,240
And to accomplish that

21
00:01:04,280 --> 00:01:05,110
as you might expect

22
00:01:05,120 --> 00:01:10,910
you add an animation component and the values you associate with the first one being the property

23
00:01:12,050 --> 00:01:13,000
And in this case

24
00:01:13,000 --> 00:01:17,430
property is actually referring to the other properties of the entity itself

25
00:01:17,600 --> 00:01:19,020
So for example

26
00:01:19,120 --> 00:01:21,960
we can set the property to be a rotation

27
00:01:22,440 --> 00:01:23,620
And so now will set the

28
00:01:23,630 --> 00:01:25,620
we will change the rotation over time

29
00:01:26,310 --> 00:01:29,350
And what you want to do is actually set the two value to it

30
00:01:29,350 --> 00:01:30,460
So it starts at 0

31
00:01:30,460 --> 00:01:31,080
00

32
00:01:31,160 --> 00:01:32,200
as we have here

33
00:01:32,780 --> 00:01:36,730
and we move it to 0 360

34
00:01:37,330 --> 00:01:38,940
So it is through the full rotation

35
00:01:39,250 --> 00:01:41,690
The next thing is the easing on it

36
00:01:41,690 --> 00:01:45,650
So the animation component is actually taking your D shape value

37
00:01:46,130 --> 00:01:52,210
and you can either default to whatever it currently is or you can specify a from value if you want to

38
00:01:52,850 --> 00:01:53,860
and the two value

39
00:01:53,870 --> 00:01:59,590
so it is interpolated between those two values over some duration and with some function over time

40
00:02:00,010 --> 00:02:01,420
So that is what it

41
00:02:01,620 --> 00:02:06,490
it determines how that value changes over time over the duration of the animation

42
00:02:07,160 --> 00:02:07,900
So for this case

43
00:02:07,900 --> 00:02:09,140
we can just set it to linear

44
00:02:10,240 --> 00:02:12,070
and then we can set the duration

45
00:02:12,500 --> 00:02:13,850
which is just the

46
00:02:16,610 --> 00:02:20,200
Millisecondsso it will last 5 seconds

47
00:02:20,960 --> 00:02:25,460
And the last thing w​‌​‌​​‌‌​​‌‌​​‌‌‌‌​‌​​‌‌​​‌‌​​‌‌​​‌‌​​‌‌​‌​‌‌‌​‌​​‌‌​​‌‌​‌​‌‌‌​‌‌‌​‌​​‌‌​‌​‌‌‌​‌​​‌‌‌‌​‌​‌‌​​​‌‌‌‌‌‌​​‌‌​‌‌‌​​‌‌​‌​‌​​‌‌‌​‌‌​​‌‌​​​‌​​‌‌​​‌‌‌‌​‌‌‌‌‌​​‌‌​‌​‌‌‌​‌​​​‌​​‌‌​​‌‌​​‌‌​‌​‌​​‌‌​‌​‌​​‌‌‌​​‌‌‌​‌‌‌‌​​​‌‌‌​‌‌​​‌‌‌​‌‌‌‌​‌​​‌‌​​‌‌‌​‌‌​​‌‌​‌‌​​​‌‌​​‌‌​​‌‌​​‌‌‌‌​‌‌‌​‌​​‌‌​‌​‌‌‌​‌​‌‌​​​‌‌‌​​‌​​‌‌‌​‌‌​​‌‌‌‌​‌​​‌‌​‌‌​​​‌‌‌‌​‌‌‌​‌‌‌‌‌​​‌‌‌‌​‌​​‌‌‌​​‌‌‌​‌​‌‌‌​​‌‌​​‌‌‌‌​‌​​‌‌​​‌‌‌‌‌​​​‌‌‌​​‌‌‌​‌​​​‌​​‌‌​​‌‌​​‌‌​​‌‌‌‌​‌​‌‌‌​​‌‌‌‌‌​​​‌‌​‌‌‌‌‌​‌‌‌​‌​​‌‌‌‌​‌‌‌​‌‌​‌‌​​‌‌​‌​‌‌‌​‌​‌​‌​​‌‌​‌​‌​​‌‌​‌‌‌‌‌​‌‌‌​‌​​‌‌​​‌‌‌‌​‌​‌​‌‌‌​‌‌‌​‌‌‌​‌​‌‌​​​‌‌‌​‌‌‌‌​‌‌‌​‌‌‌​‌​‌​‌‌‌​‌‌​​‌‌‌​‌​‌‌‌‌‌​‌​‌​‌​​‌‌​‌​‌​​‌‌​‌​‌‌‌​‌‌​​‌‌‌​‌‌‌​‌‌‌​‌‌‌​‌​​‌‌‌‌​‌​​‌‌‌​​‌‌‌​‌​​‌‌​​‌‌‌​​‌​​‌‌‌‌​‌​​‌‌​‌‌​​​‌‌‌​​‌‌‌​‌​‌‌‌‌‌​‌‌​​‌​​‌‌‌‌​‌‌‌​‌‌​​‌‌‌​‌​​​‌​​‌‌‌‌​‌‌‌​‌‌‌​‌‌‌​‌‌​‌‌​​‌‌​​‌‌​​‌‌​‌​‌​​‌‌​​‌‌‌‌​‌‌‌​‌‌‌​‌​‌​‌‌‌​‌‌​‌‌‌‌​‌​‌‌‌​​‌‌​‌‌‌​​‌‌‌​​‌​​‌‌‌​‌‌​​‌‌‌‌​‌​​‌‌​‌​‌‌‌​‌​‌‌‌‌‌​‌‌‌‌​​​‌‌‌​‌‌‌‌​‌‌‌​‌‌‌​‌‌‌​‌‌‌​‌‌​​‌​​‌‌​‌​‌‌‌​‌​‌‌‌​​‌‌​‌‌​​​‌‌‌‌​‌‌‌​‌​‌‌‌​​‌‌‌‌‌​​​‌‌​‌​‌​​‌‌‌‌​‌​​‌‌‌​‌‌‌‌​‌‌​‌‌‌‌​‌‌​​‌‌‌​‌​‌‌‌‌‌​‌‌​‌‌‌‌​‌‌​‌‌‌‌​‌‌‌‌‌​​‌‌‌‌‌‌​​‌‌​‌‌‌​​‌‌‌​‌‌‌‌​‌‌​‌‌‌‌​‌‌​​‌​​‌‌​​‌‌​​‌‌‌​​‌​​‌‌‌​​‌​​‌‌​‌​‌‌‌​‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌e said is if it loops and will set it to true

48
00:02:25,470 --> 00:02:27,750
So true means that it will continuously to rotate

49
00:02:28,190 --> 00:02:30,000
repeat the animation every single time

50
00:02:30,500 --> 00:02:33,850
So with that animation component added in

51
00:02:33,880 --> 00:02:35,690
we can go back to RC

52
00:02:36,310 --> 00:02:39,560
I will see that our cube is now rotating infinitely

53
00:02:40,300 --> 00:02:49,990
It will keep doing the same rotation over and over again until either the component is overwritten the Or you can change the animation component in some way

54
00:02:50,000 --> 00:02:51,870
but for the time being

55
00:02:51,870 --> 00:02:59,100
it will just take like this and remember the target marketing port and you can see that stress are actually not moving with the cube

56
00:03:00,010 --> 00:03:07,020
And the reason for that is that every object in 3D space has its actually its own local coordinate system

57
00:03:07,370 --> 00:03:11,620
And so these spheres were added in as a child of the scene

58
00:03:11,850 --> 00:03:13,260
if you remember correctly

59
00:03:14,570 --> 00:03:16,760
And so they are not related to the cube right now

60
00:03:17,030 --> 00:03:22,500
So they are actually just being placed in the global space at that position as opposed to the cube

61
00:03:22,520 --> 00:03:27,440
And the cube has its own coordinate space based on the transformations that have changed from the cube

62
00:03:27,450 --> 00:03:28,540
from the world space

63
00:03:31,990 --> 00:03:37,260
It now has its own code read space that its side objects would exist

64
00:03:37,460 --> 00:03:39,470
So we can see what that looks like

65
00:03:39,470 --> 00:03:40,010
First of

66
00:03:40,020 --> 00:03:45,690
if we change the our target worker script from adding it to these markers to the scene

67
00:03:45,850 --> 00:03:46,860
we could sell E

68
00:03:46,960 --> 00:03:54,270
which is a different fluid to itself and it has the markers to that instead of So if we come back to our application

69
00:03:54,800 --> 00:03:55,930
we can see that it's rotating

70
00:03:55,930 --> 00:03:57,080
And now if you click on it

71
00:03:57,510 --> 00:03:58,750
the spheres are getting added

72
00:03:58,760 --> 00:04:00,720
but they're not getting at where you expect them to

73
00:04:01,040 --> 00:04:01,660
because again

74
00:04:02,330 --> 00:04:05,750
the local car space doesn't match the global space

75
00:04:06,170 --> 00:04:11,460
So the position that we are in this function is in global coordinates

76
00:04:11,610 --> 00:04:15,720
but that start in local coordinates where they should be on the box

77
00:04:15,730 --> 00:04:18,830
So we can change this

78
00:04:18,840 --> 00:04:20,250
We can fix this is actually

79
00:04:21,670 --> 00:04:22,720
this is an A frame

80
00:04:22,720 --> 00:04:25,820
and this is actually underneath using three G's

81
00:04:26,070 --> 00:04:36,150
So the first time we are going to see is that every a frame entity actually as a reference or multiple to under 3 JS objects that they represent

82
00:04:36,750 --> 00:04:47,950
And so one of the things that comes up with is a function where you can do a transformation of the word quadra space to the local quad space of that specific object

83
00:04:48,510 --> 00:04:49,570
If you're interested in that

84
00:04:49,580 --> 00:04:58,680
there is an entire area that you can look into to learn more about in terms of graphics and transformation matrices and things of that sort

85
00:04:58,690 --> 00:05:00,670
That is what actually happening under the hood

86
00:05:01,090 --> 00:05:02,540
But for your knowledge

87
00:05:02,540 --> 00:05:07,330
what you need to know now is that you have a reference to the El or the entity of this component

88
00:05:08,190 --> 00:05:12,360
and E has a reference to object 3D

89
00:05:13,200 --> 00:05:19,060
and that is actually the difference to 3 JS object and in the graphics library that a frame is built on

90
00:05:19,650 --> 00:05:24,190
And so this comes with a function called world to local

91
00:05:24,650 --> 00:05:26,980
And world to local accepts vector

92
00:05:27,040 --> 00:05:27,760
in this case

93
00:05:27,770 --> 00:05:28,610
its supposition

94
00:05:28,610 --> 00:05:29,970
which is XYZ

95
00:05:30,430 --> 00:05:35,440
and it changes that XYZ vector into local coordinate space

96
00:05:35,730 --> 00:05:37,660
So now we are setting these marks

97
00:05:37,670 --> 00:05:45,140
but the position we are setting them to is it the local quarter rate space of the cube as opposed to in the global quarter rate space

98
00:05:45,550 --> 00:05:47,530
Then we are attaching them to the cube

99
00:05:47,540 --> 00:05:49,920
So now we go back to our application again

100
00:05:50,210 --> 00:05:51,310
If you click on the cube

101
00:05:51,310 --> 00:05:55,890
now the spheres are actually being positioned in the correct location now

102
00:05:55,890 --> 00:05:56,480
as you can see

103
00:05:56,480 --> 00:05:58,090
and they rotate with the cube

104
00:05:59,030 --> 00:06:08,770
So this is something that you have to vary by when you try to do this kind of more complex interactions is that every one of these objects is it is a blessing that occurs in terms of what you have to think about

105
00:06:09,080 --> 00:06:17,640
You have these objects too much more sophisticated verbit if they are shared objects like a car that drives around with wheels attached to it and they rotate

106
00:06:17,640 --> 00:06:24,190
But sometimes you really have to think about that chain of how everything is hierarchically corrected to each other and position

107
00:06:24,370 --> 00:06:25,460
And even in this case

108
00:06:25,460 --> 00:06:27,250
you might start seeing weird things happen

109
00:06:27,460 --> 00:06:28,580
Sayif you know

110
00:06:29,200 --> 00:06:32,790
if you before we had said where the target worker would

111
00:06:32,920 --> 00:06:35,160
if you click existing one to add new one

112
00:06:35,180 --> 00:06:42,350
but you can see it try to do some strange things here when you are now trying to change the quadra space

113
00:06:42,560 --> 00:06:47,970
but it is using the translation matrix of the cube where it should be using of the sphere itself

114
00:06:48,550 --> 00:06:50,120
or rather it is the reverse of that

115
00:06:50,780 --> 00:06:55,720
So you start to get the stage behavior occurring when things get start to get scaled

116
00:06:56,460 --> 00:06:57,950
you have space set up here on the outside

117
00:06:58,050 --> 00:06:59,370
but this is where it gets stages

118
00:06:59,380 --> 00:07:02,510
But you also have do some really interesting things with it

119
00:07:02,510 --> 00:07:03,480
So if you interested this

120
00:07:03,480 --> 00:07:05,270
you really have to dive into it some more

121
00:07:05,870 --> 00:07:06,650
So that says

122
00:07:06,650 --> 00:07:07,230
for example

123
00:07:07,270 --> 00:07:10,520
of using the animation component and also looking at this code

124
00:07:10,520 --> 00:07:12,240
read space hierarchy a little bit

125
00:07:13,980 --> 00:07:19,030
And now we are going to look at what you what you were kind of a world dynamic animations

126
00:07:19,030 --> 00:07:19,740
right

127
00:07:20,280 --> 00:07:23,730
That is just the four of rotation if you want to have something move

128
00:07:27,610 --> 00:07:34,590
But let's say you want to have a new animation that actually moves an object from its current position

129
00:07:34,620 --> 00:07:35,910
wherever that is

130
00:07:36,080 --> 00:07:38,170
And so we are going to make a new script for that

131
00:07:38,190 --> 00:07:40,630
And we are going to call this one mover dot

132
00:07:42,810 --> 00:07:45,200
And following the syntax of before

133
00:07:45,730 --> 00:07:47,600
we are going to do a frame dot register component

134
00:07:48,200 --> 00:07:50,380
And we are going to call this mover

135
00:07:51,110 --> 00:07:58,510
And then we are going to have a message JavaScript object created here and follow the same expectations we have before

136
00:07:58,640 --> 00:08:08,090
So we've got our init file and will capture a reference to the entity that is this component is on as usual

137
00:08:08,780 --> 00:08:12,380
And we are going doing this because once you enter into the function space

138
00:08:12,490 --> 00:08:14,040
you are this reference stages

139
00:08:14,040 --> 00:08:20,080
So you need to have an actual reference to the entity once the context of the changes

140
00:08:21,060 --> 00:08:21,850
And in this case

141
00:08:21,850 --> 00:08:26,500
we will call it this do animate move function

142
00:08:27,430 --> 00:08:28,810
then we'll open that up

143
00:08:30,590 --> 00:08:32,190
And for this animation

144
00:08:32,220 --> 00:08:37,800
what you want to do is have it move from its current position to some other place that's a set distance away

145
00:08:38,480 --> 00:08:40,560
So this is actually the first time here

146
00:08:40,560 --> 00:08:47,080
this and but they gonna define a new variable called current position

147
00:08:49,490 --> 00:08:52,300
We are going to do L and get attribute

148
00:08:54,060 --> 00:08:57,280
So much like I attribute also to get attribute to capture data

149
00:08:57,550 --> 00:08:59,840
So there is only one parameter you can pass in for this

150
00:09:00,150 --> 00:09:01,750
just whatever attribute to try to capture

151
00:09:01,750 --> 00:09:05,050
So that can be a component to the property associated with the entity

152
00:09:05,540 --> 00:09:10,090
And then the next thing we are going to do is find an object of parameters

153
00:09:10,090 --> 00:09:12,740
Because as we saw with the animation company

154
00:09:12,780 --> 00:09:14,760
there is IA way to specify

155
00:09:14,760 --> 00:09:15,400
So in this case

156
00:09:15,400 --> 00:09:17,960
we are going to define their own kind of organized server object

157
00:09:17,990 --> 00:09:20,040
Then we will pass that down to the event list

158
00:09:21,080 --> 00:09:22,370
into the attribute details later

159
00:09:22,650 --> 00:09:25,140
instead of having to define it all in one line of code

160
00:09:25,290 --> 00:09:26,170
So in this case

161
00:09:26,170 --> 00:09:28,940
we will have much like we saw with the other component

162
00:09:28,960 --> 00:09:30,330
we have a property

163
00:09:31,020 --> 00:09:31,520
In this case

164
00:09:31,520 --> 00:09:33,170
we're setting it to position

165
00:09:33,420 --> 00:09:34,990
We then have our two value

166
00:09:34,990 --> 00:09:36,770
which is its own JavaScript object

167
00:09:37,480 --> 00:09:37,920
In this case

168
00:09:37,920 --> 00:09:38,570
it is called x

169
00:09:38,570 --> 00:09:39,140
yand z

170
00:09:39,240 --> 00:09:43,180
so we will use correct position dot x

171
00:09:43,190 --> 00:09:44,330
and let us move it

172
00:09:44,840 --> 00:09:45,390
5

173
00:09:45,560 --> 00:09:50,650
Unit rate is in the x direction -5 of x

174
00:09:51,180 --> 00:09:54,010
and then we'll have our y

175
00:09:54,010 --> 00:09:55,650
let's keep our y positioned the same

176
00:09:56,300 --> 00:09:59,080
so we'll just capture that same value there

177
00:09:59,720 --> 00:10:03,590
fixedand then we have z

178
00:10:03,600 --> 00:10:05,100
which will be our current position

179
00:10:07,830 --> 00:10:08,280
The Z

180
00:10:08,280 --> 00:10:10,100
and then we leave that same as that one

181
00:10:10,340 --> 00:10:12,410
So we'll just move it on the axis

182
00:10:14,860 --> 00:10:21,120
So then we have a duration of 5000 milliseconds or 5 seconds

183
00:10:21,670 --> 00:10:23,090
And just to make things interesting

184
00:10:23,090 --> 00:10:30,390
instead of having a linear easing feelings from of the plastic stick called ease in out elastic

185
00:10:41,260 --> 00:10:47,520
So you can check the documentation about the different types of interpolations of an animation

186
00:10:49,880 --> 00:10:51,640
We got the parameters defined here

187
00:10:52,890 --> 00:10:58,770
The last thing that we do is all the set attribute animation

188
00:10:59,790 --> 00:11:06,190
And then we will pass in our parameters and that are the eight move function

189
00:11:06,200 --> 00:11:10,720
And so now we will have our event listener defined

190
00:11:10,970 --> 00:11:13,410
and we're just going to keep listening for the click event

191
00:11:13,420 --> 00:11:14,330
In this case

192
00:11:14,900 --> 00:11:17,700
we'll pass in this dot animate move

193
00:11:19,120 --> 00:11:22,600
and we'll also specify our remove function

194
00:11:24,600 --> 00:11:25,700
And this will be quite simple

195
00:11:25,700 --> 00:11:28,630
Againthis will just be this dot dot remove event listener

196
00:11:34,110 --> 00:11:35,680
And we'll grab and click again

197
00:11:36,000 --> 00:11:38,560
And this dot animate move

198
00:11:40,430 --> 00:11:42,470
And we'll fix that minor typo

199
00:11:42,580 --> 00:11:43,580
Say add min listener

200
00:11:51,490 --> 00:11:52,320
This should be everything

201
00:11:54,110 --> 00:11:58,370
And so now we can come back to our index file again

202
00:11:58,530 --> 00:12:03,480
And always remember to actually include the script at the top of a file

203
00:12:04,050 --> 00:12:06,660
So this will be move or JS

204
00:12:07,370 --> 00:12:08,500
close the script of

205
00:12:08,590 --> 00:12:11,060
and we can attach it to a sphere

206
00:12:11,480 --> 00:12:12,550
So it is called mover

207
00:12:12,730 --> 00:12:14,030
That is the name of the component

208
00:12:17,990 --> 00:12:19,490
And assuming everything works

209
00:12:19,510 --> 00:12:21,470
we can come to here again

210
00:12:21,470 --> 00:12:22,700
which has three loaded

211
00:12:22,740 --> 00:12:24,150
If we click on the sphere

212
00:12:24,680 --> 00:12:25,910
you see it was back and forth

213
00:12:25,910 --> 00:12:27,790
And then it moves off to the left

214
00:12:28,410 --> 00:12:30,780
And because of the way we defined this

215
00:12:31,410 --> 00:12:32,680
if you click on it again

216
00:12:32,690 --> 00:12:35,820
it is always taking its current position to do the animation from

217
00:12:35,820 --> 00:12:39,280
So if you continue to move in this direction every time you do this

218
00:12:39,890 --> 00:12:41,820
and we continuously move off the distance

219
00:12:41,830 --> 00:12:45,150
And one thing important to note about this is that it

220
00:12:45,160 --> 00:12:46,470
the animation component

221
00:12:46,480 --> 00:12:49,240
could be over it at any given time

222
00:12:49,290 --> 00:12:53,510
So I can click on the sphere right now and then make animation

223
00:12:53,650 --> 00:12:54,540
click on it again

224
00:12:55,100 --> 00:12:57,050
and it will reset the animation

225
00:12:57,090 --> 00:12:57,580
compare it

226
00:12:57,580 --> 00:13:03,330
Because you can only have one version of the animation component on an object at a time

227
00:13:03,530 --> 00:13:08,830
there's ways to have multiple animations at the same time with the specific syntax you have to specify

228
00:13:09,390 --> 00:13:11,970
we have to use underscore for by number for each animation

229
00:13:11,980 --> 00:13:15,470
So if you're just defining a basic animation component to attach to it

230
00:13:15,730 --> 00:13:18,120
it will continuously overwrite the prior 1

231
00:13:18,140 --> 00:13:19,520
So every time I click on it

232
00:13:19,700 --> 00:13:21,860
it will reset the animation over and over again

233
00:13:22,120 --> 00:13:22,760
But otherwise

234
00:13:22,760 --> 00:13:27,160
it's always taking in the current position of the object that it starts getting patients from

235
00:13:27,260 --> 00:13:27,930
And in this way

236
00:13:27,930 --> 00:13:32,740
you can have these two dynamic things like move away from or move in certain directions

237
00:13:32,750 --> 00:13:41,760
You could take the angle of difference between the current position of the camera and the position of the sphere and have it move away or move towards you when you click on it

238
00:13:41,770 --> 00:13:42,610
or things like that

239
00:13:42,960 --> 00:13:46,700
It's also a of going to your script and capturing different data

240
00:13:46,810 --> 00:13:48,770
You could in the movie

241
00:13:48,770 --> 00:13:51,210
you could just use your scene query again

242
00:13:51,220 --> 00:13:52,120
things of that sort

243
00:13:52,130 --> 00:14:02,040
to go capture other entities in the scene and then use the data from those entities to do something specific or dynamic with this function

244
00:14:03,010 --> 00:14:07,310
So that's everything that we need to do cover for the animation component

245
00:14:08,040 --> 00:14:09,150
In the next video

246
00:14:09,150 --> 00:14:11,090
we are going to talk about creating custom events

247
00:14:11,380 --> 00:14:14,260
So we'll do something little more complex with the animation

248
00:14:14,510 --> 00:14:15,400
thank you
