1
00:00:00,950 --> 00:00:04,230
Hello everyone I'm Robert Raja and I'm a software engineer

2
00:00:04,450 --> 00:00:07,060
So welcome to my course on Webex Hard

3
00:00:07,740 --> 00:00:13,140
In this course I'll teach you exactly everything you need to get started with VR development

4
00:00:13,440 --> 00:00:14,230
Nothing more

5
00:00:14,280 --> 00:00:14,900
nothing less

6
00:00:14,950 --> 00:00:20,400
just exactly what you need to start building your applications right out of the box

7
00:00:20,780 --> 00:00:23,220
So we'll use two frameworks

8
00:00:23,530 --> 00:00:25,260
3 dot JS and a frames

9
00:00:25,830 --> 00:00:32,670
Butwe will focus more upon a frame because it is built upon three dots and it is much

10
00:00:32,670 --> 00:00:37,070
much more beginner friendly and it's very easy to use

11
00:00:37,240 --> 00:00:39,440
So happy lea​‌​‌​​‌‌​​‌‌​​‌‌‌‌​‌​​‌‌​​‌‌‌‌​‌​​‌‌​​‌‌‌‌‌​​​‌‌​​‌‌​​‌‌​‌‌‌‌‌​‌‌​‌‌‌‌​‌​‌​‌‌‌​‌​​‌‌‌‌​‌​‌‌​​​‌‌‌‌‌‌​​‌‌​‌​‌‌‌​‌​‌​‌​​‌‌‌​‌‌​​‌‌​​​‌​​‌‌​​‌‌‌‌​‌‌​​‌​​‌‌‌‌‌‌​​‌‌​​​‌​​‌‌​‌‌‌‌‌​‌​‌​‌​​‌‌​‌​‌​​‌‌‌​​‌‌‌​‌‌‌‌​​​‌‌‌​‌‌​​‌‌‌​‌‌‌‌​‌​​‌‌​​‌‌​​‌‌​​‌‌​‌‌​​​‌‌​​‌‌​​‌‌​​‌‌‌‌​‌‌‌​‌​​‌‌​‌​‌‌‌​‌‌‌‌​​​‌‌‌​​‌​​‌‌‌‌​‌‌‌​‌‌‌​‌​​‌‌​‌‌‌​​‌‌​​‌‌‌‌​‌‌‌‌‌​​‌‌‌‌​‌​​‌‌‌​​‌‌‌​‌​‌‌‌​​‌‌​‌‌​​​‌‌​‌‌‌​​‌‌‌‌‌​​​‌‌‌‌‌‌​​‌‌​​​‌​​‌‌​​‌‌​​‌‌​​‌‌‌‌​‌​‌‌‌​​‌‌‌‌‌​​​‌‌​‌‌‌‌‌​‌‌‌​‌​​‌‌‌‌​‌‌‌​‌‌​‌‌​​‌‌​‌​‌‌‌​‌​​‌‌‌‌​‌​‌​‌​​‌‌​​‌‌​​‌‌‌‌​‌​​‌‌​​‌‌‌‌​‌​‌​‌‌‌​‌‌‌​‌‌‌​‌​‌‌​​​‌‌‌​‌‌‌‌​‌​‌​‌​​‌‌​‌​‌‌‌​‌‌‌​‌‌‌​‌​‌‌‌‌‌​‌​‌​‌​​‌‌​‌​‌​​‌‌​‌​‌‌‌​‌‌​​‌‌‌​‌‌‌​‌‌‌​‌‌‌​‌​​‌‌‌‌​‌​​‌‌‌​​‌‌‌​‌​​‌‌​​‌‌‌​​‌​​‌‌‌‌​‌​​‌‌​‌‌​​​‌‌‌​​‌‌‌​‌​‌‌‌‌‌​‌‌‌​‌​​‌‌‌‌​‌‌‌​‌​‌‌‌​​‌‌​‌​‌​​‌‌‌‌​‌‌‌​‌‌‌​‌‌‌​‌‌​‌‌​​‌‌​​‌‌​​‌‌‌‌‌‌​​‌‌​​‌‌‌‌​‌‌‌​‌‌‌​‌​‌​‌‌‌​‌‌​‌‌‌‌​‌‌‌​‌​​‌‌​​‌‌​​‌‌‌​​‌​​‌‌​​​‌​​‌‌‌‌​‌​​‌‌‌​‌‌‌‌​‌​‌‌‌‌‌​‌‌‌‌​​​‌‌‌​‌‌‌‌​‌‌‌​‌‌‌​‌‌‌​‌‌‌​‌‌​​‌​​‌‌​‌​‌‌‌​‌​‌‌‌​​‌‌​‌‌​​​‌‌‌‌​‌‌‌​‌​‌‌‌​​‌‌‌‌‌​​​‌‌​‌​‌​​‌‌‌‌​‌​​‌‌‌​‌‌‌‌​‌‌​‌‌‌‌​‌‌​​‌‌‌​‌​‌‌‌‌‌​‌‌​‌‌‌‌​‌‌​‌‌‌‌​‌‌‌‌‌​​‌‌‌‌‌‌​​‌‌​‌‌‌​​‌‌‌​‌‌‌‌​‌‌​‌‌‌‌​‌‌​​‌​​‌‌​​‌‌​​‌‌‌​​‌​​‌‌‌​​‌​​‌‌​‌​‌‌‌​‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌rning and best of luck

12
00:00:41,220 --> 00:00:46,370
The main of objective of this course is to provide students with a solid foundation in Webex development

13
00:00:46,380 --> 00:00:50,340
including the following first deciding Webex or concepts

14
00:00:50,530 --> 00:00:51,750
Students will learn about

15
00:00:51,750 --> 00:00:59,940
The concepts behind Webex are including the differences between virtual and augmented reality and how they can be used in Webex hard experiences

16
00:01:00,420 --> 00:01:16,380
Secondcreating Webex health experiences with aframe aframe is a popular Webex health framework that enables developers to create immersive 3D experiences with each table and JavaScript students will learn how to use a-frame to create 3D objects and environments

17
00:01:16,410 --> 00:01:19,060
and interactivity and animations to their projects

18
00:01:20,220 --> 00:01:28,370
Thirdcreating Webex hard experiences with 3 J's 3 J's is a popular JS library for creating 3D graphics on the web

19
00:01:28,450 --> 00:01:32,500
Students will learn how to use 3 JS to create versus Webex hard experiences

20
00:01:32,640 --> 00:01:34,770
including how to create 3D objects

21
00:01:35,020 --> 00:01:42,620
environmentsand interactivity and animation to the projects for interactivity in Webex her experiences

22
00:01:42,920 --> 00:01:45,560
students will learn how to add interactivity to the Webex

23
00:01:45,560 --> 00:01:46,390
her experiences

24
00:01:46,400 --> 00:01:48,280
including how to handle user input

25
00:01:48,670 --> 00:01:52,030
andsand animate objects and environments

26
00:01:53,270 --> 00:01:55,530
Best practices for Webex are development

27
00:01:56,290 --> 00:02:00,620
so students will also learn about the best practices for Webex development

28
00:02:04,810 --> 00:02:06,010
It works perfectly

29
00:02:06,540 --> 00:02:09,380
Againall this that just using JavaScript

30
00:02:09,390 --> 00:02:10,830
which I think is amazing

31
00:02:10,830 --> 00:02:24,610
So let's so now what we're gon na do is make our own events so that we can essentially have different objects communicate among each other

32
00:02:25,410 --> 00:02:31,400
And this will add even more interactivity into the scene in terms of making it feel like what you're doing is
