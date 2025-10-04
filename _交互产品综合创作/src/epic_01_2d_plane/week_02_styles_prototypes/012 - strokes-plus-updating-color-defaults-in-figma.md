---
week_num: 2
epic_num: 1
sequence: 14
type: 技术教程
status: ready
tldr: 介绍Figma中的描边功能，以及如何更新颜色默认设置
course_name: 交互产品综合创作
---

# Figma UI/UX 设计教程：描边与颜色默认值 - 中文逐字稿分析

## 基本信息
- 视频标题：Figma UI/UX 设计教程：描边与颜色默认值
- 视频时长：09:28
- 分析时间：2023-10-27 11:15:35

## 重点整理（第一人称视角）
我从这个视频中学到了如何在 Figma 中有效地使用描边（Stroke）功能。

首先，我学会了如何给一个形状（比如矩形）添加描边。在右侧的设计面板中，找到 "Stroke" 选项并点击加号（+）即可。我可以调整描边的粗细（宽度）和颜色。

一个很实用的技巧是设置默认样式。当我设计好一个带有特定填充色、描边和圆角的矩形后，我可以选中它，然后通过主菜单的 `Edit > Set default properties` 将这个样式设为默认值。这样，之后我创建的所有新矩形都会自动应用这个样式，大大提高了效率。

我还学会了两种快速应用样式的方法。第一种是复制和粘贴属性：选中一个已有样式的对象，使用 `Edit > Copy Properties`，然后选中一个或多个目标对象，使用 `Edit > Paste Properties`。第二种是使用 `Command + D` (Mac) 或 `Control + D` (PC) 快捷键，它可以重复上一步的操作，非常适合创建等距的列表或元素，比如汉堡菜单（Burger Menu）的三条横线。

在创建汉堡菜单时，我学到了如何调整线条的端点样式（Line Caps）。在 "Stroke" 的高级设置里，我可以选择三种端点样式：`Butt Cap`（平头，默认）、`Round Cap`（圆头）和 `Square Cap`（方头）。使用圆头端点可以让图标看起来更柔和、更精致。

最后，我还了解了在线框图中如何表示图片占位符。一种常见方法是画一个交叉的对角线。另一种是放入一个图片图标。导入图片时，最好使用“点击并拖拽”的方式来控制初始大小，同时按住 `Shift` 键可以保持其原始比例不变。

## 关键术语和人物
- **Stroke (描边)**：对象（如形状或路径）的轮廓线。可以设置其颜色、粗细、样式等。
- **Fill (填充)**：对象内部的颜色或渐变。
- **Burger Menu (汉堡菜单)**：一种常见的导航图标，由三条水平的短线堆叠而成，因形似汉堡而得名。
- **Line Caps (线条端点)**：开放路径（如直线）末端的样式。视频中提到了三种：Butt (平头)、Round (圆头) 和 Square (方头)。
- **Figma**：一款基于浏览器的协作式 UI/UX 设计工具，视频中所有操作都在此软件中进行。

## 图像补充信息
- **添加描边**：在 Figma 右侧的设计面板中，"Fill" 选项下方有一个 "Stroke" 区域。点击该区域右侧的 "+" 图标，即可为选中的对象添加描边。
- **设置默认属性**：在 Figma 左上角点击 Figma 图标，会弹出一个主菜单。依次选择 `Edit > Set default properties`，即可将当前选中对象的样式（包括填充、描边、圆角等）设为该工具的默认样式。
- **线条端点样式**：在 "Stroke" 设置面板中，点击最右侧的三个点（`...`）图标，会展开高级描边选项。在这里可以找到设置线条端点（Cap）的下拉菜单，其中包含了 "Round"（圆头）等选项。视频中通过对比展示了默认的平头、圆头和方头端点在线条末端的视觉差异。

## 逐字稿内容

### [00:00:04] 讲者
Hi everyone, in this video we're going to look at strokes, where strokes are on the outside, that's the line around the outside here. We'll look at burger menus, which is just a group of lines, but we'll also look at the ends here. Can you see they've got a nice little rounded lines instead of this kind of like big flat end on the edge.

### [00:20:07] 讲者
We'll look at setting some of the defaults so that every time we draw something like a rectangle, it is kind of set to the rounded corners and the stroke we like and the color we like. There's a few things we cover in this video. All right, let's jump in.

### [00:31:49] 讲者
All right, so let's do our strokes. So we're going to click on the rectangle. The stroke is this one here. By default, you get a fill, you don't get a stroke. To add a stroke, hit the little plus button. Okay, and we've got a black stroke on the outside. Uh, the stroke width, we can drag. Okay, I'm going to put in just two for mine. Do you have to have a stroke around stuff? You don't, but we're learning stuff.

### [00:51:64] 讲者
The one thing you will get annoyed about later on is if you do have like a style, you know, you've decided that this green with that stroke on the outside and you're like, okay, I'm going to draw another one on this product, uh, details here. R for my rectangle tool and you're like, ah, it's gray. It's gray again. It's got no stroke and no rounded corners and you're like, okay, so I'm going to go over here and I'm going to change it to five and go slightly mad trying to get the eye dropper tool and...

### [01:14:94] 讲者
So, what you can do is you can get to a point you're like, actually, I like that. I like my rounded corners, I like my green, I like my stroke. And I can go change it to the default. Okay, so um, let's go to our little Figma icon here. Okay, and go to Edit, and there's this one here that says Set default properties. Nothing really happens, except that word appears. Okay, but now, if I click off, grab my rectangle tool, draw something out, look at that. I got a sweet green rectangle with a black line around the outside and, yeah, rounded corners. So that is how you set the defaults, and I'm going to leave that.

### [01:52:30] 讲者
Um, another thing you can do is because these are already drawn in the past, I can't go like, I don't know, I want it to now look like this. Okay, so we don't have styles set up, which we'll do later in the course. What you can do is you can click on this guy and say Edit, Copy his properties. These are his properties over here. Okay, and we go copy them, and we click on him, and it doesn't matter what color he was, if we go to Edit, Paste properties, it comes along. Okay, we can click more than one. I've got the two rectangles. Okay, and let's go Edit, Paste properties. There we go.

### [02:24:60] 讲者
Okay, so that's stroke. Let's look at a bit more stroke. We're going on a bit of a tangent there with setting the defaults. Um, let's look at doing our little burger menu at the top. So I'm going to zoom in, remember Command Plus on a Mac, Control Plus on a PC, and kind of get up here-ish to get started at least. And let's look at, let's drop down the rectangle. So you just kind of click and hold it and it will show you other things. I'm going to use the Line tool. Okay, and I'm going to use my line tool to click, hold and drag... that didn't work. I don't know why. Okay, click, hold and drag. Okay, it will try and be straight. If it's kind of not straight enough for you, okay, hold down the Shift key. Shift key will do something with the line tool. Remember it did with the circle tool, it made a perfect circle. With the line tool, it just makes it go in kind of some, you know, 45 degrees, 90 degrees, and straight. So I want something kind of that long. Don't worry about how long it is just yet, we'll make it, then we'll go out to, you know, 100% and kind of make it the right size. So we're going to grab this guy, we're going to have three of them. So we're going to either copy and paste. Remember copy and paste has that weird option where it's, well, it's not weird, but it's over the top of it. So remember, I tend to just use the selection tool, hold down my Option key on a Mac, Alt key on a PC, and just drag another version out. And it really wants to go underneath it, which is great. I'm going to introduce one more shortcut. If you're like, if this guy introduces another shortcut here, I'm going to scream. Close your eyes, or your ears. Okay, I'm going to introduce you to the Command D or Control D. Really common in Figma. Okay, it just means do it again. Okay, duplicate, do it again, whatever you want to call it. Okay, so Command D will just do the last thing I did.

### [04:25:70] 讲者
So, with these lines here, you're like, how big should the nav be? The best way is to copy an existing template. I'll show you kind of some of the templates that Figma's got. Okay, but if you are building stuff on your own, especially things like icons, it's best to be, remember, at Shift 0, okay, or at 100% up here, so that you've got a good sense of the size. Okay, because if you have them like this, they're going to be very hard to click. Or if they're going to be big jumbo ones, it's just not that fun. Or they don't look like they should. So I got lucky with mine, I think mine are appropriately sized here. So what you can do is just drag a box around them all, grab the corner and scale them to what you think they should feel like. That feels good to me. Okay, um, I'm going to put them in a kind of appropriate position for a navigation. So it's called the burger menu or the nav sandwich. Okay, uh, that thing you click that gives you all this other of options. Really common in the top right, but can appear in the top left as well.

### [05:23:67] 讲者
So let's look at a bit more strokey goodness. So I'm going to zoom in on it because I want the little bubble ends. Now, um over here on my stroke, the stroke weight we've talked about. So, start and end point, they do two things. Click on the first one, you can put an arrow at the end. That's great. If I hit undo, it doesn't go away. Maybe this is just on my machine. I don't know why. Undo, undo. That's one of those quirks. I'll leave it in this course because it's a weird quirk. Is it just on my computer? No, I think it's universal, but it's probably going to be gone in the future. It's one of those updates where it's on somebody's, some developer's bug fix list. It's not super important because I can go back to none, but my undo doesn't turn those off. We've gone off on a tangent. Let's stay on point because I want to show you these. Um, there's three options. So your stroke at the moment just finishes right at the end. Can you see there? This second one, I'm going to go, this stroke has a rounded end, and that is the pretty one that I want. Okay, so it's, the stroke still ends there, but there's this like little round. That's a butt cap, that is a round cap, and this is going to be a square cap. So this one here, look at the difference between this top one and the bottom one. The stroke is the same size, okay, underneath, but this has got like a big square cap on the end. This has got an unfortunately named butt cap, and that has got a nice round cap. That's what I want. I want all you guys... you'll see mixed quite a lot if you've selected stuff and it doesn't know what to say. Instead of going question mark, I'm confused, it just says mixed, which means one of them, they're all sorts of different things. I'm going to say you're all round, which only partially worked. Oh yeah, when I do the end as well. There we go.

### [07:11:47] 讲者
Actually, the last thing I want to do is with images, okay, um, we've written, you know, product shot, but it's actually more common to just draw a big cross through the middle as a placeholder for an image. So I'm just going to grab my line tool and I'm going to go from this corner over to here, and this corner... you got to go back to the tool every time. Cool. So it'd be really common to have that as like a, you know, a visual cue that there's an image to come here, but it's not available right now. The other thing you might do, just while we're on the topic, is instead of those lines, I'm going to get rid of them for a second and bring them back, is we can put in a like an icon that shows an image. I'll show you it. Um, so it's in your exercise files. So how do you bring in an image, okay, or an icon? Um, you can go up to, there's a couple of ways. Um, there's this way here. Okay, so it's weird, under your rectangle tool is where you bring in images as well. So I can place an image, there's the shortcut. The other way is under Figma, you can go to Edit, no, File, Place Image. Use the shortcut quite a bit. But um, I'm going to bring in an image. Under your exercise files, under icons, bring in the one that says icon image. Okay, and click open. And with an, with this, okay, if you bring in an image, you click once, it'll come through at gigantic size or whatever size that it was. I'm going to undo, go back to my, uh, import image, find him again, is you can click and drag and it gives you a more appropriate size. And what you'll notice is that it's squishing it, which is killing me inside. Never leave your icon like that. Um, hold down the Shift key. Okay, if you want to drag it out. Remember, same thing with like the lines making them go straight and the rectangle being perfectly square. So that would be very common as well for a, you know, placeholder image. We are going to not do that for the moment. I don't mind. I don't really care. Lines, actually, no, keep the lines there because we're going to look at something in the next video that is kind of reliant on having a couple of diagonal lines there. So, all right, that is strokes 101. Let's get into the next video.

