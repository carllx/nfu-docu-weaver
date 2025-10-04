---
week_num: 2
epic_num: 1
sequence: 19
type: 资源指南
status: ready
tldr: 介绍获取免费图标的途径和方法，为设计项目提供素材资源
course_name: 交互产品综合创作
---

# UI/UX Design Course - Free icons - 中文逐字稿分析

## 基本信息
- 视频标题：UI/UX Design Course - Free icons
- 视频时长：09:10
- 分析时间：2024-05-16 22:30:00

## 重点整理（第一人称视角）
我从这个视频中学到了如何为我的 Figma 设计项目寻找和使用免费图标。

首先，我了解到寻找图标时，最重要的不是去哪个网站，而是要关注两件事：**授权许可**和**文件格式**。像 `iconfinder.com` 这样的网站提供了筛选功能，我可以选择“免费”并且“可商用，无需链接”的图标，这样可以避免未来的版权问题。

其次，我明白了 **SVG** 和 **PNG** 格式的巨大差异。SVG 是矢量格式，它的优势非常明显：
1.  **可缩放**：无论放大多少倍，SVG 图标都保持清晰锐利，不会像 PNG 那样变得模糊或像素化。
2.  **文件小**：一个 SVG 文件的大小可能只有几 KB，而一个同等质量的 PNG 文件可能会大上百倍，这对于项目性能至关重要。
3.  **可编辑**：在 Figma 中，我可以轻松更改 SVG 图标的颜色，甚至直接编辑它的形状和节点，这给了我极大的设计自由度。

相比之下，PNG 是位图，颜色固定，放大后质量会下降。因此，在 UI/UX 设计中，我应该始终优先选择 SVG 格式的图标。

我还学会了如何处理从网上下载的 SVG 文件。有时它们导入 Figma 后会带有一个白色的背景框，这是因为它被包裹在一个 `Frame`（画框）里。我需要从图层面板中把真正的 `Vector`（矢量图形）拖出来，或者复制粘贴出来，才能得到一个干净、透明的图标。

最后，我发现 **Figma Community** 是一个宝贵的资源库。我可以通过“Duplicate”（复制）功能，将别人分享的图标集保存到我自己的草稿中。如果这些图标是“Component”（组件），我可以通过右键选择“Detach instance”（分离实例）来解除它们的组件状态，使其变回普通的矢量图形，方便我自由使用和修改。

## 关键术语和人物
- **SVG (Scalable Vector Graphics)**：可缩放矢量图形。一种基于 XML 的矢量图像格式，可以无限缩放而不失真，文件体积小，颜色和形状易于在 Figma 中编辑。
- **PNG (Portable Network Graphics)**：便携式网络图形。一种无损压缩的位图图形格式，支持透明背景，但放大后会失真（像素化），颜色无法在 Figma 中直接修改。
- **Figma**：一款基于云端的协作式 UI/UX 设计工具。
- **Iconfinder**：一个提供大量免费和付费图标的在线资源网站。
- **Figma Community**：Figma 的官方社区平台，用户可以在这里分享和下载插件、UI Kits、图标集等设计资源。
- **Component (组件)**：Figma 中的一种高级功能，允许创建可重用的 UI 元素。视频中提到从社区复制的图标可能是组件，需要“分离实例”才能自由编辑。

## 图像补充信息
- **SVG vs. PNG 质量对比**：视频中，当讲者将一个低分辨率的 PNG 图标放大时，其边缘明显变得模糊和锯齿状（像素化）。而当他将 SVG 图标放大到同样尺寸甚至更大时，其边缘始终保持平滑和清晰。
- **SVG 导入后的图层结构**：当 SVG 文件被导入 Figma 时，图层面板显示它通常是一个 `Frame`（画框），里面可能包含一个或多个 `Group`（群组），最里面才是 `Vector`（矢量图形）本身。讲者通过将 `Vector` 图层从 `Frame` 中拖出，或复制内部的 `Vector` 再粘贴到画板上，从而去除了多余的容器和背景。
- **组件实例的识别与处理**：从 Figma 社区复制的图标在图层面板中可能显示为带有紫色菱形图标的组件实例。讲者通过右键菜单中的“Detach instance”选项，将其转换回普通的 `Frame` 或 `Vector`，解除了其与主组件的关联，从而可以自由编辑。

## 逐字稿内容

### [00:00:04] 讲者
Hi everyone, let's talk about where to get free icons. I'm not going to talk specifically about websites, even though I'll give you a couple. It's more about what you're looking for when you are downloading icons for our Figma file.
大家好，我们来谈谈从哪里可以获取免费图标。我不会专门讲某些网站，虽然我会推荐几个。重点更多在于，当你为我们的 Figma 文件下载图标时，应该注意寻找什么。

### [00:15:00] 讲者
So I'm using iconfinder.com. I like it. There's lots of free stuff on here, good paid stuff as well. But if this website's not here when you go visit the internet, there's plenty of free icons. Okay, so what you're looking for is, let's say I want the shopping cart icon. Okay, that's what I need for my mockup here. What you're looking for is a particular file format. It's called an SVG. I'm stalling. That thing took ages to load.
我正在用的是 iconfinder.com。我很喜欢它。这里有很多免费素材，也有不错的付费内容。但如果将来你上网时这个网站不在了，还有很多其他免费图标网站。好，那么你要找的是什么呢？比如说我想要一个购物车图标，这是我的模型所需要的。你要找的是一种特定的文件格式，叫做 SVG。我正在拖延时间，因为这个页面加载了好久。

### [00:39:00] 讲者
Anyway, so there's a couple of things on most of the sites. The main thing is all to do with how free it is. Okay, because there's free and then there's properly free. So free, all licenses. I'm going to use the one that's for commercial use. Okay, and this one here requires you though to use it for commercially, but you have to link back to them, which is totally fine. You might find good free stuff in there. This one here requires commercial use but doesn't require a back link. So I don't actually have to acknowledge the people that made it.
总之，大多数这类网站都有几个要注意的地方。最主要的是它的“免费”程度。因为有“免费”，还有“真正免费”。所以，首先筛选“免费”，然后看所有许可证。我会选择那个“可用于商业用途”的。这个选项虽然允许你商用，但要求你提供返回链接，这完全没问题。你可能会在这里找到很好的免费素材。而下面这个选项允许商业使用，且“无需链接”，这样我就不必署名创作者了。

### [01:09:00] 讲者
So, in here, pick anything. I say pick anything, going to find a shopping cart that looks like a shopping cart. Where is one? Pick something quickly Dan, people are watching. All right, this one. All right. So this one here, I'm going to open it up. And what you'll find in most of these sites is there's a PNG version and an SVG version. Let's look at both. The PNG is probably the one you already know. SVG, you may or may not know already. So I'm just going to pick a smaller icon version of this PNG and I'll show you the difference. So I'm going to download both of them, stick them on my desktop, and this SVG. Let's compare both of them and how Figma deals with both of them.
好，在这里随便选一个。我说随便选，但还是得找个看起来像购物车的。在哪呢？快点选，Dan，大家都在看呢。好吧，就这个。我把它打开。你会发现大多数网站都提供 PNG 版本和 SVG 版本。我们两个都看看。PNG 可能是你已经熟悉的格式，SVG 你可能还不太了解。我先下载一个这个 PNG 的小尺寸版本，然后给你们展示区别。我会把两个文件都下载到桌面，一个是 PNG，一个是 SVG。让我们来比较一下，看看 Figma 是如何处理这两种格式的。

### [01:51:00] 讲者
So, is there a right one and a wrong one? Yes, SVG is better, but more complicated. But now that we know what frames are and groups are, it's actually not that bad. Okay, let's bring in our file. I'm going to do this way, place image. Okay, and let's bring in both of them. You can bring in more than one image at a time, okay, by holding shift and clicking both of them. Let's click open. You can see I got like a little number two there. You can even see my little icon. Look, a little trolley. Okay, so I am going to click, hold, shift, so that when I drag them out, they are not going all wonky like that.
那么，有好坏之分吗？是的，SVG 更好，但也更复杂。不过既然我们已经了解了画框（frame）和群组（group），其实也没那么难。好，我们把文件导入进来。我用这种方式，“置入图片”。好的，我们把两个都导入。你可以一次性导入多张图片，按住 shift 键同时选中它们就行。点击打开。你可以看到我这里有个数字“2”的标记，甚至能看到我的小图标，一个小推车。好，我准备按住 shift 键并拖拽，这样当我把它们拖出来时，它们就不会变形。

### [02:27:00] 讲者
That's the reason we have a SVG rather than a PNG. I acknowledge that I downloaded a very small version. In here you can download like the really big version. Let's download that. And it will look fine. So let's bring in another one. The difference is, can you see that size of that one? Okay, so I can get a good quality PNG, but my SVG is 1 kilobyte. This is 112 kilobytes. That's the reason we don't... we prefer to use SVGs.
这就是我们为什么用 SVG 而不是 PNG 的原因。我承认我下载的是一个非常小的版本。在这里你可以下载非常大的版本。我们下载一下，它看起来会很好。我们再导入一个。区别在于，你看到那个文件的大小了吗？我可以得到一个高质量的 PNG，但我的 SVG 只有 1KB，而这个 PNG 是 112KB。这就是我们更喜欢使用 SVG 的原因。

### [03:07:00] 讲者
It's transparent, which is awesome. This SVG is transparent, kind of. You're like, well, that's not transparent. It's got a white background. SVGs into Figma, what they do is, we kind of looked at this earlier, can you see they come in as a frame? Okay, inside of that frame is a group, inside of that group is a vector. That's all we really want. So I'm just going to copy it, come out of that frame and hit paste.
（PNG）是透明的，这很棒。这个 SVG 也是透明的，算是吧。你可能会说，这不透明啊，它有白色背景。SVG 导入 Figma 时，就像我们之前看过的，它们会以一个画框（frame）的形式进来。画框里面是一个群组，群组里是一个矢量图形（vector）。这才是我们真正想要的。所以我把它复制，然后跳出那个画框粘贴。

### [03:49:00] 讲者
Now, it's transparent. And it is colored. Okay, so I can go through, use my eyedropper tool and actually start using these now, whereas the PNG, you can't change the color. We could, we could go to Photoshop, change it. Okay, but obviously SVG is scalable. That's what the S in SVG is. And yeah, we can go into object editing mode, which you know about already.
现在，它就是透明的了。而且可以上色。我可以用吸管工具开始给它上色，而 PNG 的颜色是无法直接更改的。当然我们可以用 Photoshop 改，但显然 SVG 是可缩放的（scalable），这就是 SVG 中“S”的含义。而且，我们还可以进入对象编辑模式，这个你们已经知道了。

### [04:33:00] 讲者
All right, another great place to get free stuff is part of the Figma community. So if you go back to your little house along the top here, there'll be an option somewhere around here called Figma Community. It's kind of new. It's beta in mine. Depending on how long in the future, it'll get more and more robust. There is just amazing stuff in here, and most of it's free. Okay, so in here, you can do things like icons. Okay, and you'll find loads of great icon sets created by people that we're allowed to use.
好的，另一个获取免费资源的好地方是 Figma 社区。如果你点击顶部的“小房子”图标回到主页，这里会有一个叫做“Figma Community”的选项。这是一个比较新的功能，在我这里还是测试版。未来它会变得越来越强大。这里有非常多很棒的资源，而且大部分是免费的。在这里，你可以找到像“图标”这样的分类。你会发现大量由他人创作并且允许我们使用的优秀图标集。

### [05:28:00] 讲者
So what we can do is when we are dealing with the community for Figma, you end up downloading things. Okay, so let's have a little look. Let's kind of... you can go into it to preview it, but eventually at some stage to get all the stuff out of it, you need to do something called duplicating. Okay, so let's click on duplicate. And basically, you get your own copy saved to your Figma kind of flow.
当我们在 Figma 社区里操作时，你最终需要“下载”这些东西。我们来看看。你可以点进去预览，但最终要使用里面的所有内容，你需要做一个叫做“复制”（Duplicate）的操作。好，我们点击“Duplicate”。基本上，你就会得到一个副本，保存到你自己的 Figma 工作流中。

### [06:02:00] 讲者
Lots of good icons. Okay, and before we actually copy and paste them out, let me show you what happens to these community files, or at least anything you've duplicated. Let's go back to home. What you'll notice now in my home... what happens is it duplicates into your drafts. You'll notice that now I have Unicons. You kind of opened it just to grab something out of it, but now it's part of your flow. Okay, you can right click it and delete it. Okay, but everything you open or duplicate in Figma ends in this like... it's part of your world now.
有很多很棒的图标。在我们复制粘贴它们之前，我先给你展示一下这些社区文件会发生什么，或者说任何你复制过的文件。我们回到主页。你会注意到，它被复制到了你的草稿（Drafts）里。现在我这里有了“Unicons”这个文件。你可能只是想打开它拿点东西，但现在它已经成为你工作流的一部分了。你可以右键删除它。但你在 Figma 中打开或复制的任何东西，都会成为你个人空间的一部分。

### [07:24:00] 讲者
Now, it will depend on how these things have been created. These things have been created as what's going to be called a component later in this course. So this can be a little bit tricky for us at this level. Okay, so let's just do it anyway. Let's go copy. I really need this. I like it for my wireframe. I'm going to go back to this document and I'm going to paste it. And what will end up happening is this weird file turns up with the weird icon. It ends up in our assets folder. It's a special thing that we're going to learn later on. For the moment though, what we're going to do is select it, right click it and say detach instance. You're like, I don't know why I'm doing that. Don't worry, we'll learn about it later on, but it means you can just say... it's kind of like ungrouping.
这取决于这些图标是如何被创建的。这些图标被创建成了我们课程后面会讲到的“组件”（Component）。所以在这个阶段对我们来说可能有点复杂。不过我们还是来试试。我复制这个，我真的很需要它，很适合我的线框图。我回到我的文件然后粘贴。结果是，这个奇怪的文件带着一个奇怪的图标出现了。它会出现在我们的“资产”（Assets）面板里。这是一个我们稍后会学习的特殊东西。但现在，我们要做的就是选中它，右键点击，然后选择“分离实例”（Detach instance）。你可能会想，我为什么要这么做？别担心，我们以后会学，它基本上就像“取消编组”。

