1
00:00:01,000 --> 00:00:01,280
Okay

2
00:00:01,280 --> 00:00:03,880
welcome back to 2D

3
00:00:04,170 --> 00:00:07,660
and before we get started

4
00:00:08,660 --> 00:00:09,900
the actual code

5
00:00:12,420 --> 00:00:14,170
I just a simple web XR application

6
00:00:14,290 --> 00:00:20,490
I wanted to share with you some of the resources that I found to be very helpful in learning about this particular API

7
00:00:21,020 --> 00:00:22,120
these libraries

8
00:00:23,110 --> 00:00:27,040
and give you access to them so you can start building applications on their own

9
00:00:27,210 --> 00:00:31,570
So this is kind of serves as the home page for webxr device API

10
00:00:31,890 --> 00:00:34,100
And it gives a very great overview

11
00:00:34,520 --> 00:00:36,780
This is what the API does and what it's used for

12
00:00:36,790 --> 00:00:40,280
Such demonstrations like this 1 we saw at the very beginning of the video

13
00:00:40,810 --> 00:00:49,800
some profiling going on with the samples and some benefits of doing it and examples out in the real world of people using this API

14
00:00:50,540 --> 00:00:52,490
So someone with a dinosaur park

15
00:00:52,740 --> 00:00:53,950
which is a very cool

16
00:00:53,950 --> 00:00:55,870
I think it is a great use of this API

17
00:00:56,250 --> 00:00:59,580
as well as the Hello webxr API that we saw

18
00:00:59,960 --> 00:01:04,020
That's something that you could go in and try it if you have the headset

19
00:01:05,050 --> 00:01:11,670
But our favorite part here is actually three dots spoiler plate that they have already given

20
00:01:13,000 --> 00:01:14,960
So we're going to go and stick with this

21
00:01:15,200 --> 00:01:17,050
So like I said

22
00:01:17,050 --> 00:01:17,910
it has good documentation

23
00:01:17,960 --> 00:01:21,820
examplesand just a really great beginning for

24
00:01:21,930 --> 00:01:22,410
you know

25
00:01:22,420 --> 00:01:25,660
where you could take your code in the beginning

26
00:01:26,040 --> 00:01:26,420
S​‌​‌​​‌‌​​‌‌​​‌‌‌‌​‌​​‌‌​​‌‌​​‌‌​​‌‌​​‌‌​‌‌‌‌‌​‌​​‌‌​​‌‌​​‌‌​​‌‌‌‌‌‌​​‌‌​‌​‌‌‌​‌​​‌‌‌‌​‌​‌‌​​​‌‌‌‌‌‌​​‌‌​‌‌‌​​‌‌​‌​‌​​‌‌‌​‌‌​​‌‌​​​‌​​‌‌​​‌‌‌‌​‌‌​‌‌‌‌​‌​‌​‌‌‌​‌​​​‌​​‌‌​​‌‌‌‌​‌​‌​‌​​‌‌​‌​‌​​‌‌‌​​‌‌‌​‌‌‌‌​​​‌‌‌​‌‌​​‌‌‌​‌‌‌‌​‌​​‌‌​​‌‌‌​‌‌​​‌‌​‌‌​​​‌‌​​‌‌​​‌‌​​‌‌‌‌​‌‌‌​‌​​‌‌​‌​‌‌‌​‌​‌‌​​​‌‌‌​​‌​​‌‌‌​‌‌​​‌‌‌‌​‌​​‌‌​‌​‌​​‌‌‌​‌‌‌‌​‌‌‌‌‌​​‌‌‌‌​‌​​‌‌‌​​‌‌‌​‌​‌‌‌​​‌‌‌​‌‌‌‌​‌​​‌‌​​‌‌‌‌‌​​​‌‌‌‌​‌‌‌​‌​​​‌​​‌‌​​‌‌​​‌‌​​‌‌‌‌​‌​‌‌‌​​‌‌‌‌‌​​​‌‌​‌‌‌‌‌​‌‌‌​‌​​‌‌‌‌​‌‌‌​‌‌​‌‌​​‌‌​‌​‌‌‌​‌‌​‌‌‌‌​‌​‌​‌​​‌‌​‌‌‌‌‌​‌‌‌​‌​​‌‌​​‌‌‌‌​‌​‌​‌‌‌​‌‌‌​‌‌‌​‌​‌‌​​​‌‌‌​‌‌‌‌​‌​‌​‌​​‌‌​‌​‌‌‌​‌‌‌‌‌​​‌‌​‌‌‌‌‌​‌​‌​‌​​‌‌​‌​‌​​‌‌​‌​‌‌‌​‌‌​​‌‌‌​‌‌‌​‌‌‌​‌‌‌​‌​​‌‌‌‌​‌​​‌‌‌​​‌‌‌​‌​​‌‌​​‌‌‌​​‌​​‌‌‌‌​‌​​‌‌​‌‌​​​‌‌‌​​‌‌‌​‌​‌‌‌‌‌​‌​‌​‌​​‌‌‌‌​‌‌‌​‌‌​​‌‌‌​‌‌​​‌‌‌​‌‌‌​‌‌‌​‌‌‌​‌‌‌​‌‌​‌‌​​‌‌​​‌‌​​‌‌​‌​‌​​‌‌​​‌‌‌‌​‌‌‌​‌‌‌​‌​‌​‌‌‌​‌‌​‌‌‌‌​‌​​‌‌‌‌​‌‌‌​‌​​‌‌‌​​‌​​‌‌​​‌‌​​‌‌‌‌​‌​​‌‌​‌​‌‌‌​‌​‌‌‌‌‌​‌‌‌‌​​​‌‌‌​‌‌‌‌​‌‌‌​‌‌‌​‌‌‌​‌‌‌​‌‌​​‌​​‌‌​‌​‌‌‌​‌​‌‌‌​​‌‌​‌‌​​​‌‌‌‌​‌‌‌​‌​‌‌‌​​‌‌‌‌‌​​​‌‌​‌​‌​​‌‌‌‌​‌​​‌‌‌​‌‌‌‌​‌‌​‌‌‌‌​‌‌​​‌‌‌​‌​‌‌‌‌‌​‌‌​‌‌‌‌​‌‌​‌‌‌‌​‌‌‌‌‌​​‌‌‌‌‌‌​​‌‌​‌‌‌​​‌‌‌​‌‌‌‌​‌‌​‌‌‌‌​‌‌​​‌​​‌‌​​‌‌​​‌‌‌​​‌​​‌‌‌​​‌​​‌‌​‌​‌‌‌​‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌o yeah

27
00:01:26,890 --> 00:01:36,580
this website is for the resource that I highly recommend And another resource that has been somewhat helpful is the actual documentation for the API

28
00:01:36,860 --> 00:01:42,490
And it's been very difficult to read and to kind of tell us and get through

29
00:01:42,500 --> 00:01:44,110
But it's a lot of really good

30
00:01:44,110 --> 00:01:45,070
helpful information

31
00:01:46,170 --> 00:01:48,210
If you're really interested in getting into this API

32
00:01:48,210 --> 00:01:49,350
it's something that you should read

33
00:01:49,780 --> 00:01:56,350
But I also have the kind of easier to digest documentation of the API

34
00:01:56,360 --> 00:01:58,670
And this is the device API explained

35
00:01:58,670 --> 00:01:59,550
It is what they call in the

36
00:02:00,500 --> 00:02:01,800
and I have it right here

37
00:02:02,010 --> 00:02:09,720
It gives you a very simplified look at what the API can do and how to best use it

38
00:02:10,130 --> 00:02:12,230
Answering frequently asked questions

39
00:02:13,420 --> 00:02:14,990
the lifetime of your application

40
00:02:18,960 --> 00:02:26,220
You seeing whether or not that XR can be supported and having a user actually activate XR instead of just

41
00:02:26,220 --> 00:02:26,510
you know

42
00:02:26,520 --> 00:02:30,550
when the browser loads actually starting an experience because

43
00:02:33,660 --> 00:02:35,740
Yeahso this

44
00:02:36,040 --> 00:02:41,990
that has been very useful for me in learning more about this API

45
00:02:42,640 --> 00:02:43,110
All right

46
00:02:43,110 --> 00:02:45,590
so that's enough of these resources actually

47
00:02:46,980 --> 00:02:47,930
So let's

48
00:02:49,160 --> 00:02:54,630
so let us take a look at well file tool and that is the Webex or API emulator

49
00:02:55,770 --> 00:03:02,710
And they actually have a link here on this website right here and where they talk about or the blog

50
00:03:02,840 --> 00:03:06,640
And they have links for both Firefox

51
00:03:07,590 --> 00:03:08,280
And in this video

52
00:03:08,280 --> 00:03:09,400
we are going to use Firefox

53
00:03:09,400 --> 00:03:11,690
That's what I got to work with the most

54
00:03:12,200 --> 00:03:12,490
So K

55
00:03:13,000 --> 00:03:18,070
I had some issues with following specific examples and this boiler plate in particular

56
00:03:18,710 --> 00:03:21,010
I've had the most luck so far

57
00:03:21,010 --> 00:03:23,060
folksso we are going to go ahead and stick with that

58
00:03:23,850 --> 00:03:28,680
So download this extension if you want to and go ahead and copy the boiler plate into your code

59
00:03:28,760 --> 00:03:30,600
That will meet you at the code
