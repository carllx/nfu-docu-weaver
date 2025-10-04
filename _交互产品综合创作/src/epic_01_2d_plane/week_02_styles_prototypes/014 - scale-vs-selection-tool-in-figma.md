---
week_num: 2
epic_num: 1
sequence: 16
type: 技术教程
status: ready
tldr: 解释Figma中的缩放工具与选择工具的区别和应用场景
course_name: 交互产品综合创作
---

# UI/UX Design Course - Scale vs Selection Tool - 中文逐字稿分析

## 基本信息
- 视频标题：UI/UX Design Course - Scale vs Selection Tool
- 视频时长：02:39
- 分析时间：2023-10-27 11:30:00

## 重点整理（第一人称视角）
我从这个视频中学到了 Figma 中 `Selection Tool`（选择工具）和 `Scale Tool`（缩放工具）的关键区别：

1.  **`Selection Tool` (快捷键 V)**：这是默认的工具，用于选择和调整对象。当我用它来拖拽一个带描边（stroke）的矩形时，只有矩形的尺寸会改变，但描边的粗细和内部文字的大小会保持不变。这会导致比例失调，尤其是在大幅度调整尺寸时。即使将多个对象编组（Group），用选择工具缩放整个组，结果也是一样的。

2.  **`Scale Tool` (快捷键 K)**：这个工具可以按比例缩放一个对象或一组对象的所有属性。当我使用它来调整一个按钮（包含矩形、文字和描边）的大小时，按钮的形状、文字大小、描边粗细都会按相同的比例进行缩放，保持了视觉上的一致性。这对于需要整体放大或缩小组件时非常有用。

3.  **工具位置和快捷键**：`Scale Tool` 隐藏在工具栏左上角 `Move Tool`（移动/选择工具）的下拉菜单里。记住它们的快捷键非常重要：`V` 对应 `Selection Tool`，`K` 对应 `Scale Tool`。虽然直觉上 `Scale` 的快捷键应该是 `S`，但 `S` 被分配给了不常用的 `Slice Tool`（切片工具）。

## 关键术语和人物
- **Selection Tool** (选择工具)：Figma 中的默认工具，用于选择、移动和调整对象的边界框，但不会按比例缩放对象的内部属性（如描边粗细、字体大小）。快捷键是 `V`。
- **Scale Tool** (缩放工具)：用于按比例缩放对象及其所有属性（包括描边、字体大小、圆角等）的工具。快捷键是 `K`。
- **Stroke** (描边)：对象边缘的线条，可以设置颜色和粗细。
- **Slice Tool** (切片工具)：用于在设计稿中定义导出区域的工具。快捷键是 `S`。
- **Group** (编组)：将多个图层或对象组合在一起，方便统一管理和移动。

## 图像补充信息
- **`Selection Tool` 的问题演示**：在 [00:38]，讲者使用 `Selection Tool` 将一个包含文字“Learn More”的按钮拖大。从图像中可以清晰地看到，绿色的矩形背景变大了，但内部的文字“Learn More”大小完全没变，导致文字在按钮中显得非常小且位置不协调。同时，按钮的黑色描边（Stroke）也保持原样，相对于变大的按钮显得非常细。

- **`Scale Tool` 的正确效果**：在 [01:01]，讲者切换到 `Scale Tool` 后再拖动同一个按钮。图像显示，整个按钮（包括矩形、文字和描边）都按比例被放大了。文字和描边都相应地变大变粗，维持了原始的设计比例和美感。

- **工具位置**：在 [00:52]，讲者展示了 `Scale Tool` 的位置。它位于 Figma 界面左上角工具栏的第一个图标（默认是 `Move Tool` 的箭头图标）的下拉菜单中。用户需要点击并按住该图标才能看到并选择 `Scale Tool`。

## 逐字稿内容

### [00:04] 讲者
Okay, let's look at scaling versus the selection tool, because you're going to need both of them and they're a bit quirky from other programs that I've used and, yeah, caught me out at the beginning. So let's do it together.
好的，我们来看看缩放工具和选择工具的对比。因为你两个都会用到，而且它们和我用过的其他程序相比有点奇怪，是的，一开始让我很困惑。所以我们一起来看看。

### [00:14] 讲者
So, with my selection tool, I'm just going to click on the rectangle. I'm not in object editing mode, remember? Okay, and all I want to do is, I've got this tool here, the default tool, and I can click the edge and I can drag it around. That's kind of how you imagined it. And, you know, and that's most of the time what you want to do. But what you'll notice is, is that the stroke stays at two the whole time. Okay? And if I do something else, let's say that I select both the text and the rectangle, and I'm like, I want it to be bigger. Okay, and I drag it out. Huh, that's weird. Maybe if I hold Shift. Hold Shift. Still doesn't work.
所以，用我的选择工具，我只点击这个矩形。记住，我没有在对象编辑模式下。好的，我只想做的是，我用这个工具，默认的工具，我可以点击边缘然后拖动它。这大概就是你想象中的样子。而且，你知道，大多数时候你就是想这么做。但你会注意到，描边（stroke）的粗细一直保持在2。好的？如果我做点别的，比如说我同时选中了文本和矩形，然后我想让它变大。好的，我把它拖大。嗯，这很奇怪。也许我按住 Shift 键试试。按住 Shift。还是不行。

### [00:44] 讲者
That's where the scale tool comes in. So there's times where you actually want to just make everything bigger: stroke, type, everything. And it's this tool here, hiding underneath the selection tool. Click, hold, drag... Don't hold and drag, just click and hold. And there it is there, the scale tool. Okay, click on that. I've got both of these selected, and I can just click and drag this the corner there. And if I hold nothing down, it does it kind of proportionally. It scales it up, both the stroke... you can see the stroke got bigger, and the font, and the rectangle.
这时候缩放工具就派上用场了。所以有时候你确实想让所有东西都变大：描边、字体，所有的一切。就是这个工具，隐藏在选择工具下面。点击、按住、拖动……不是按住并拖动，只是点击并按住。它就在那里，缩放工具。好的，点击它。我已经选中了这两个对象，然后我可以直接点击并拖动那个角。如果我什么都不按，它会按比例缩放。它会把所有东西都放大，包括描边……你可以看到描边变粗了，字体也变大了，矩形也变大了。

### [01:11] 讲者
So there's times when you need both. Let's say in this case, I've drawn this too big for what I need it to be. So I'm going to go to my scale tool, and I'm going to make it a bit smaller. And both the font, because I used that as the rectangle, and my little stroke gets smaller. I'm going to bring it to the front using my square bracket.
所以有时候你两者都需要。比如在这种情况下，我把这个画得太大了。所以我要切换到我的缩放工具，然后把它变小一点。字体（因为我用它作为矩形）和我的小描边都变小了。我用方括号快捷键把它置于顶层。

### [01:30] 讲者
Even if you group stuff first, you still got to use the scale tool. What I mean by that is, let's say that we do... what have we got? These two. Okay, select them both. I'm going to right-click it, I'm going to say you are "Group that selection". And I'm going to use my normal old selection tool. It still does the same thing. Even though you think I've grouped it. Nope, still does the weird stuff. So you've got to switch to the scale tool.
即使你先把东西编组，你仍然需要使用缩放工具。我的意思是，比如说我们……我们有什么？这两个。好的，同时选中它们。我右键点击，然后选择“将所选内容编组”。然后我用我普通的旧选择工具。它还是会做同样的事情。即使你认为你已经把它编组了。不，它还是会表现得很奇怪。所以你必须切换到缩放工具。

### [01:50] 讲者
And you do it so often that there's a shortcut. And you're like, "Excellent, that's easy to remember. It's probably S, because it's the scale tool." Nope, it's K. I don't know why. But don't worry, the S tool... if I hit S, it's the slice tool that nobody uses. There's people out there probably use it, but I never do. It's a big waste of a good shortcut. Though, we have to use K. That's just the way it is. So, V is the shortcut for the selection tool, and K... you end up toggling... Like I... again, I'm trying not to do too many shortcuts, just the ones that are really helpful. And I'm going to... I'm going to beat them into you throughout this course so you're going to go to the end, you're going to be like, "I know it's K, I know it's V," because they're helpful. And it's hard to remember them sometimes, so you need some beating. Alright, so K, and you can scale them up. Perfect.
你用得如此频繁，所以它有一个快捷键。你可能会想：“太好了，这很容易记。快捷键可能是 S，因为是 scale tool（缩放工具）。” 不，是 K。我不知道为什么。但别担心，S 工具……如果我按 S，它会是切片工具（slice tool），那个没人用的工具。可能有人在用，但我从来不用。这真是浪费了一个好快捷键。不过，我们必须用 K。事实就是如此。所以，V 是选择工具的快捷键，而 K……你会经常切换。就像我……再次强调，我尽量不讲太多快捷键，只讲那些真正有用的。我会在整个课程中把它们灌输给你，所以到最后你会说：“我知道是 K，我知道是 V”，因为它们很有用。有时候很难记住它们，所以你需要一些“鞭策”。好了，所以按 K，你就可以把它们缩放了。完美。

### [02:36] 讲者
So, back to the selection tool, and off to the next video.
好了，回到选择工具，我们进入下一个视频。

