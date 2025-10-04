---
week_num: 2
epic_num: 1
sequence: 21
type: 技术教程
status: ready
tldr: 介绍如何在Figma中使用插件来管理和处理图标资源
course_name: 交互产品综合创作
---

# Plugins in Figma - 中文逐字稿分析

## 基本信息
- 视频标题：UI/UX DESIGN COURSE Plugins in Figma
- 视频时长：04:32
- 分析时间：2024-05-16 16:15:21

## 重点整理（第一人称视角）
我从这个视频中学到了 Figma 插件的强大之处。插件是第三方开发者制作的，可以极大地扩展 Figma 的原生功能，是提升设计效率的“秘诀”。

首先，我学会了如何寻找和安装插件。主要有两种方式：第一种是通过设计文件中的主菜单，选择“插件” > “在社区中浏览”；第二种是回到 Figma 主页，进入“社区”板块，然后切换到“插件”标签页，这种方法更直观。在社区中，我可以浏览各种插件，并通过查看安装数量来判断一个插件的受欢迎程度和可靠性。

其次，我掌握了安装和使用插件的基本流程。以 `Iconify` 这个图标插件为例，我在社区页面点击“安装”即可。回到设计文件后，通过主菜单的“插件”选项启动 `Iconify`。启动后会弹出一个独立的窗口，我可以在里面搜索需要的图标，然后直接拖拽到我的画板上使用。

最后，我还学到了一个整理文件的小技巧。插件拖入的素材（如图标）通常会被包裹在一个框架（Frame）里。为了保持图层面板的整洁，最好在图层列表中选中并删除整个框架，而不是仅仅删除里面的图标本身。总的来说，插件是 Figma 工作流中不可或缺的一部分，能让我更快速、高效地完成设计。

## 关键术语和人物
- **Plugin** (插件)：一种软件组件，用于为现有程序（如此处的 Figma）添加特定功能，通常由第三方开发者创建。
- **Figma** (Figma)：一款基于云端的协作式 UI/UX 设计工具，广泛用于界面设计、原型制作和设计系统管理。
- **Iconify** (Iconify)：视频中演示的一款 Figma 插件，它集成了超过100个图标库，提供海量图标资源，方便设计师搜索和使用。
- **Unsplash** (Unsplash)：一个提供免费、高分辨率、可商用图片的平台，也有对应的 Figma 插件，方便设计师直接在设计稿中插入图片。
- **SVG** (Scalable Vector Graphics)：可缩放矢量图形。视频中从 Iconify 拖出的图标就是 SVG 格式，这意味着它可以无限缩放而不失真。
- **UI/UX** (User Interface/User Experience)：用户界面/用户体验。视频是 UI/UX 设计课程的一部分，插件是提升 UI/UX 设计效率的重要工具。

## 图像补充信息
- **查找和安装插件的界面**：视频展示了两种找到插件社区的路径。
  1.  在设计文件中，点击左上角的 Figma 图标，在下拉菜单中选择 `Plugins` -> `Browse plugins in Community`。
  2.  在 Figma 的主页（Home Screen），点击左侧边栏的 `Community`，然后在主页面顶部导航栏中选择 `Plugins` 标签。这个页面会列出热门和趋势插件，如 `Unsplash` 和 `Iconify`，并显示每个插件的创作者和安装数量。
- **使用 Iconify 插件的界面**：当讲者启动 `Iconify` 插件后，屏幕上出现一个独立的浮动窗口。该窗口顶部有搜索框，下方有不同的图标集分类（如 Material Design Icons, Unicons 等）。用户在搜索框输入关键词（如 "house"）后，下方会显示所有相关的图标，用户可以直接将心仪的图标从这个窗口拖拽到 Figma 的画板上。
- **图层面板的变化**：当一个图标被从插件拖入画板时，左侧的图层（Layers）面板会显示新增的元素。这个元素通常是一个框架（Frame），框架内部包含了图标的矢量图形（Vector）。讲者强调，为了保持文件整洁，应该在图层面板中选中整个框架进行删除。

## 逐字稿内容

### [00:04] 讲者
Hi everyone. In this video, we're going to look at some of the secret sauce, what makes Figma amazing, and it is the plugins that are run in parallel with Figma. So plugins are made by other people, not Figma. Okay, and basically, you install them, okay, and in this case, I've installed a little icon plugin, and let's say we search for a house, I can grab my icon and just drag it out. So it is a way of...
大家好。在这个视频中，我们将了解一些让 Figma 如此出色的秘诀，那就是与 Figma 并行运行的插件。插件是由其他人而非 Figma 官方制作的。基本上，你安装它们，就像这个例子，我安装了一个小小的图标插件，然后假设我们搜索一个房子，我就可以抓住我的图标然后直接拖出来。所以这是一种...

### [00:30] 讲者
It's a bit teeny tiny there, but you get the idea. This is a way of extending Figma. There are lots of plugins, and they are amazing. We'll focus on the icon one at the moment, but they all work roughly the same sort of way. They extend what Figma can do. Let's jump in and look at at least one of them.
这里有点太小了，但你应该明白我的意思。这是一种扩展 Figma 功能的方式。有很多插件，它们都非常棒。我们现在会专注于图标插件，但它们的工作方式大致相同。它们扩展了 Figma 的能力。让我们开始，至少看一个例子。

### [00:49] 讲者
So, to install our first plugin, if you go to, uh, this little drop-down next to the Figma icon, you can go to Plugins, and we're going to browse them in the community. Okay, Manage just will allow you to be able to see the ones you've already got installed and maybe uninstall them. We're going to go to Browse in the community. Often I don't use this method. I just go to this home screen, okay, and remember under community, we were looking at icons a second ago. There's another option here, it says Plugins.
那么，要安装我们的第一个插件，你可以点击 Figma 图标旁边的小下拉菜单，然后进入“插件”，我们将在社区中浏览它们。好的，“管理”可以让你看到已经安装的插件，也可以卸载它们。我们将进入“在社区中浏览”。我通常不使用这个方法。我只是去主屏幕，记得在社区下面，我们刚才在看图标。这里有另一个选项，叫做“插件”。

### [01:17] 讲者
So, this is kind of new and always getting developed. What I'd like you to do is, plugins are just so an amazing part of Figma that just spend, like, take a break, take, uh, you know, take five minutes and just have a read through all the amazing plugins. Okay, um, there's just so much in here that can get you so far and kind of enable you to be fast and efficient and, like, visually really compelling. Okay, so have a look through all the different plugins. We're going to look at icons for the moment.
所以，这个功能比较新，并且一直在发展中。我希望你做的是，插件是 Figma 中一个非常神奇的部分，你可以花点时间，休息一下，花五分钟时间，浏览所有这些神奇的插件。好的，这里面有太多东西可以让你走得更远，让你变得快速、高效，并且在视觉上非常有吸引力。好的，所以去看看所有不同的插件吧。我们现在先看看图标。

### [01:49] 讲者
What you need to do is, well, the way that I use to gauge whether this plugin is good is mainly bound to installs. There's no like star rating yet, which I wish there was, but like Unsplash, which is a way of getting kind of commercial free images, is a really cool plugin, really common, probably the first one everybody installs. We'll do it later in the course, but you can see 630,000 other UX designers decided it was useful. So there must be something in here. We're going to use Iconify.
你需要做的是，嗯，我用来判断一个插件好坏的方法主要是看安装量。目前还没有星级评分，我希望有，但像 Unsplash，它是一个获取商业免费图片的方式，是一个非常酷的插件，非常普遍，可能是每个人安装的第一个。我们会在课程后面讲到它，但你可以看到有 63 万其他 UX 设计师认为它有用。所以这里面肯定有它的价值。我们将使用 Iconify。

### [02:18] 讲者
Okay, uh, if this one is not in here or hasn't been updated for the last three years, okay, you'll find another version that will work similar. This video is not actually how to use Iconify, but just like how to install a plugin and get it working. So we're going to click Install. Yes, please. Remember, these aren't made by Figma, so no responsibility taken. Okay, and let's go and have a look now how to actually operate a plugin. We'll do a few through this course.
好的，如果这个插件不在这里，或者过去三年都没有更新，你会找到另一个功能相似的版本。这个视频其实不是教如何使用 Iconify，而是关于如何安装并运行一个插件。所以我们点击“安装”。是的，请。记住，这些不是 Figma 制作的，所以他们不承担责任。好的，现在让我们看看如何实际操作一个插件。我们在这个课程中会用到几个。

### [02:46] 讲者
So, let's have a look. So you have to turn the plugin on. You can only have one running at a time. So you go to say, I want plugin called Iconify to start working. Now, this is where they all vary. Most of them have some sort of UI. They all look different. None of them look the same. This one here, it's big. I put mine on the other screen.
我们来看看。你必须先启动插件。一次只能运行一个。所以你要去说，我想要一个叫 Iconify 的插件开始工作。现在，这就是它们各自不同的地方。大多数插件都有某种用户界面。它们看起来都不同，没有一个是一样的。这个，它很大。我把它放在另一个屏幕上。

### [03:07] 讲者
But I'm just going to move it over here. Let's have a look. So... let's have a look at that shopping one we're looking for. Maybe let's look for another house. Maybe that house was broken. It was hard to change it. So in here, let's have a look at the houses. Is that going to be a stroke? None of them are going to be strokes, I bet you. Maybe that guy might be, maybe that guy will be. Probably not. I'm going to use this one, fingers crossed. So you can just click and drag them out. Look at that, we got a giant SVG icon. And really that's it. That is that plugin. You can just drag stuff out.
但我会把它移到这里。我们来看看。所以...我们来看看我们正在找的那个购物图标。或许我们再找一个房子。可能那个房子图标有问题，很难修改。所以在这里，我们看看这些房子。这个会是描边样式吗？我打赌它们都不是描边。也许那个是，也许那个会是。可能不是。我来用这个，希望能行。所以你可以直接点击并把它们拖出来。看，我们得到了一个巨大的 SVG 图标。基本上就是这样。这就是那个插件。你可以直接拖拽东西出来。

### [03:36] 讲者
You obviously there's other options in here. Okay, you can search icons and there's lots of tagging and stuff going on. So plugins all work a similar sort of way. There's some sort of UI and you'll be able to click and drag things out. We'll do a few more throughout the course. But yeah, that is the plugin specifically for icons. I don't need this guy now, so I'm just going to delete him. Now, when you are deleting bits and pieces, it's probably because you're always going to be left with a frame. So try not to like... you can, you can just delete it. You're left with this frame. The best is to go into your actual layers and say, that's it. I'm going to hit delete, and everything inside of it. And then just make sure your layers are kept nice and tidy.
显然这里还有其他选项。你可以搜索图标，还有很多标签之类的东西。所以插件的工作方式都差不多。它们有某种用户界面，你可以点击并拖拽东西出来。我们会在课程中再介绍几个。但是的，这就是专门用于图标的插件。我现在不需要这个家伙了，所以我就删掉它。现在，当你在删除一些零碎东西时，很可能会留下一个框架。所以尽量不要...你可以直接删除它。你会留下这个框架。最好的方法是进入你的图层面板，选中它，然后按删除，它里面的所有东西都会被删除。然后确保你的图层保持整洁。

### [04:13] 讲者
What the heck is that? Where are you doing down there? I have no idea how I got that one. Anyway, keep it clean. Just delete that guy too. All right. That is, yeah, a really simple plugin. Plugins are amazing in Figma. We're going to learn a few more throughout the course. Let's get into the next video.
这到底是什么？你怎么会在这里？我完全不知道怎么弄出这个来的。总之，保持整洁。也把这家伙删掉。好了。这就是一个非常简单的插件。Figma 里的插件非常棒。我们会在整个课程中学习更多。让我们进入下一个视频吧。

