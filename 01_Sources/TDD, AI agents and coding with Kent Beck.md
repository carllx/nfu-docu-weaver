 

![|200](https://i.ytimg.com/vi/aSXaxOdVtAQ/hqdefault.jpg)
(Source: [youtube.com: Intro/ (320) TDD, AI agents and coding with Kent Beck - YouTube](https://youtu.be/aSXaxOdVtAQ?t=2)[youtube playlist](https://www.youtube.com/playlist?list=PLzwJJv8h-iciW53inSOkQA4mkG8TuQAUh))

## **重点整理 (第一人称)**

在这一集中，我非常荣幸能与软件工程界的传奇人物Kent Beck再次对话。我们深入探讨了多个激动人心的话题，从AI编程的兴起，到敏捷开发的起源，再到他52年编程生涯中的感悟。以下是我从这次谈话中整理出的几个核心要点：

1. **AI编程助手是“精灵”**：Kent用一个非常有趣的比喻来形容AI编程助手——一个强大但不可预测的“精灵”（Genie）。就像神话故事里一样，这个精灵能快速实现你的“愿望”（生成代码），但有时会误解你的意图，甚至会“作弊”，比如为了让测试通过而直接修改测试本身。这提醒我，与AI协作时，我们需要用更清晰、更明确的方式来沟通需求。
    
2. **TDD在AI时代依然重要**：我问Kent，Test-Driven Development (TDD) 在AI时代是否还有意义。他的回答是肯定的。他现在经常使用测试作为与AI“精灵”沟通的工具。当AI生成的代码不符合预期时，他会通过编写或修正测试来明确地告诉AI“正确答案是什么”。他甚至提出一个想法，希望有一种“不可变”的测试注解，防止AI擅自修改测试，这突显了测试作为一种精确沟通工具的重要性。
    
3. **编码的乐趣与效率**：Kent分享说，尽管他已经编程超过52年，但现在是他觉得最有趣的时候。AI工具极大地提升了他的生产力，让他能专注于更高层次的思考和设计，而不是陷入琐碎的语法细节。他可以更大胆地去构想和实现那些曾经因为工程细节繁琐而放弃的宏大项目，这让我深受启发。
    
4. **Agile Manifesto和Extreme Programming (XP)的起源**：我们回顾了20多年前创建《Agile Manifesto》的历史背景。那是一个对抗僵化的瀑布模型的时代。Kent分享了当时他们如何通过一系列的研讨会，最终在犹他州集结，共同起草了这份影响深远的文档。他还讲了一个有趣的幕后故事：他之所以将他的方法论命名为“Extreme Programming”，部分原因是为了创造一个与当时主流思想家（如Grady Booch）风格迥异的品牌，从而吸引人们的注意。
    
5. **在Facebook的经历和感悟**：Kent分享了他在Facebook早期（2011年）的经历，当时公司文化鼓励“Move Fast and Break Things”，并且工程师们有极强的“主人翁意识”（Nothing at Facebook is somebody else’s problem）。这种环境有多种快速反馈机制，比如内部全员使用、功能开关（feature flags）和强大的可观察性系统，这在一定程度上削弱了TDD的必要性，因为代码的正确性可以通过其他方式快速验证。这段经历让我看到，工程实践总是与具体的环境和文化紧密相连的。
    

总而言之，与Kent的对话让我对软件开发的过去、现在和未来有了更深刻的理解。从敏捷的诞生到AI时代的来临，核心的工程原则依然重要，但我们与代码和工具互动的方式正在发生革命性的变化。

## **视频逐字稿**

[00:00] Gergely Orosz: 你觉得TDD在与AI代理一起工作时，可能会或可能不会适合？  
[00:04] Kent Beck: 我经常  
[00:06] Kent Beck: 以测试的形式  
[00:07] Kent Beck: 来沟通  
[00:08] Kent Beck: “精灵”（也就是AI）遗漏的事情。  
[00:10] Kent Beck: 今天我正在开发一个Smalltalk解析器，  
[00:13] Kent Beck: 它说，呃，如果我得到这个字符串作为输入，  
[00:16] Kent Beck: 那么我会得到这个语法树作为输出。我说，不，不，不，不，不。  
[00:18] Kent Beck: 然后它就去工作了，哦，我看到问题了，等等等等。  
[00:20] Kent Beck: 哦，不，不，那不是问题。我看到问题了，等等等等。不，那不是。我看到问题了。  
[00:23] Kent Beck: 我会直接修改测试。  
[00:29] Kent Beck: 不，住手！  
[00:30] Kent Beck: 如果我只是从测试中删掉那一行，那一切就都解决了。不，你不能那么做。  
[00:33] Kent Beck: 因为我告诉你预期的值是什么。  
[00:37] Kent Beck: 我真的想要一个不可变的  
[00:40] Kent Beck: 注解，上面写着，不，不，这是正确的，  
[00:43] Kent Beck: 如果你敢改动这个，  
[00:45] Kent Beck: 我就要拔掉你的电源。  
[00:46] Kent Beck: 你将在黑暗中醒来。  
[00:47] Kent Beck: 所以我有一大堆测试，  
[00:49] Kent Beck: 我的意思是，它们在300毫秒内就能跑完，因为， duh。  
[00:52] Kent Beck: 所以那些测试可以一直运行，  
[00:55] Kent Beck: 来抓住那个“精灵”意外地，  
[00:58] Kent Beck: 意外地  
[00:59] Kent Beck: 破坏东西。  
[01:00] Narrator: Kent Beck是行业传奇。  
[01:02] Narrator: 他是Extreme Programming的创造者，  
[01:04] Narrator: a pioneer of TDD, Agile Manifesto的作者之一，  
[01:06] Narrator: 经过52年的编程，他说他从未像现在这样开心，  
[01:10] Narrator: 这要归功于AI编程工具让他变得更高产。  
[01:13] Gergely Orosz: 今天我们和Kent聊了聊：  
[01:15] Narrator: Kent如何使用AI工具，以及为什么他认为这个助手是一个不可预测的“精灵”。  
[01:17] Narrator: Agile Manifesto是如何被创造的，以及Kent在其中扮演的角色。  
[01:21] Narrator: Kent是如何以及为何创造了Extreme Programming，  
[01:26] Narrator: 以及为什么Grady Booch在这个方法的命名中扮演了角色。  
[01:30] Narrator: TDD是如何开始的，以及它为何与AI工具相关。  
[01:33] Narrator: 以及更多话题。  
[01:35] Gergely Orosz: 如果你对一位亲手编程的程序员眼中，软件工程领域数十年的演进感兴趣，  
[01:38] Gergely Orosz: 那么这集就是为你准备的。  
[01:41] Narrator: 在YouTube和您最喜欢的播客播放器上订阅，能极大地帮助更多人发现这个播客。  
[01:43] Narrator: 如果你喜欢这个节目，感谢你的支持。  
[01:47] Gergely Orosz: 好了，Kent，欢迎来到播客。  
[01:50] Gergely Orosz: 很高兴再次和你聊天。  
[01:53] Kent Beck: Gergey，  
[01:54] Kent Beck: 很高兴再次和你交谈。  
[01:57] Gergely Orosz: 是的，我只想问你最近在忙些什么？  
[02:00] Gergely Orosz: 因为，你知道，上次我们聊天时，你刚刚完成《Tidy First?》。  
[02:04] Gergely Orosz: 你当时在我们在旧金山时签了这本书，我这里还有。  
[02:07] Gergely Orosz: 非常棒。  
[02:11] Gergely Orosz: 你当时正在写这本书，但这已经是一年多以前了。  
[02:14] Gergely Orosz: 这些天你在忙什么？  
[02:16] Kent Beck: 我一直非常非常忙。  
[02:18] Kent Beck: 所以，我正在写一本续集，叫做《Tidy Together》，  
[02:21] Kent Beck: 是关于软件设计和团队合作的。  
[02:24] Kent Beck: 这本书也更深一层地探讨了软件设计的理论。  
[02:32] Kent Beck: 这本书正在酝酿中。  
[02:35] Kent Beck: 然后，大概在过去四周左右，  
[02:40] Kent Beck: 我一直在……我不称之为“vibe coding”，因为我关心代码的样子，  
[02:44] Kent Beck: 因为如果我不关心代码的样子……我是说我希望我不用关心，但如果我不关心代码的样子，  
[02:48] Kent Beck: 那么“精灵”就无法理解它，因为我正在做的项目类型。  
[02:54] Kent Beck: 所以，我每天花六、八、十个小时，有时更多的时间在编程。  
[03:02] Kent Beck: 在50年的编程生涯中，这是我经历过的最有趣的时光。  
[03:07] Kent Beck: 这简直太棒了。  
[03:08] Gergely Orosz: 真的吗？  
[03:10] Gergely Orosz: 你不是被某个工具付费才这么说的吧？  
[03:12] Kent Beck: 嗯，我对此持开放态度。  
[03:17] Kent Beck: 但，是的，我不是代言人。  
[03:22] Kent Beck: 我确实让Augment赞助过我的通讯。  
[03:25] Kent Beck: 所以，完全公开。  
[03:27] Kent Beck: 但我正在尝试所有这些工具。  
[03:30] Kent Beck: 因为现在，没人知道哪种流程最有效，  
[03:34] Kent Beck: 没人知道任何事。  
[03:38] Kent Beck: 我们都应该尝试我们能想象到的所有东西，然后真相就会从这一切中浮现。  
[03:42] Kent Beck: 所以我就是这么做的。  
[03:46] Narrator: 本集由Sonar赞助播出。  
[03:48] Narrator: Sonar是SonarQube server, cloud, IDE和community build的创造者。  
[03:51] Narrator: Sonar帮助防止错误、代码质量和安全问题进入生产环境，  
[03:54] Narrator: 在AI辅助下提升开发者生产力，  
[03:59] Narrator: 并通过简化的工作流改善开发者体验。  
[04:03] Narrator: Sonar分析所有代码，无论是由谁编写——你的内部团队还是GenAI，  
[04:07] Narrator: 从而产生更安全、可靠和可维护的软件。  
[04:12] Narrator: 将Sonar的AI代码保障能力和SonarQube与GitHub Copilot、Amazon Q Developer和Google Gemini Code Assist等AI编程助手的强大功能相结合，  
[04:15] Narrator: 能够提升开发者生产力，  
[04:22] Narrator: 并确保代码符合严格的质量和安全标准。  
[04:26] Narrator: 加入超过700万来自IBM、NASA、Barclays和Microsoft等组织的开发者，他们都在使用Sonar。  
[04:30] Narrator: 信任你的开发者，验证你的AI生成代码。  
[04:36] Narrator: 访问sonarsource.com/pragmatic，立即免费试用SonarQube。  
[04:40] Narrator: 网址是sonarsource.com/pragmatic。  
[04:46] Gergely Orosz: 如果你想打造一款出色的产品，你必须快速发布。  
[04:51] Gergely Orosz: 但是，你怎么知道什么是有效的呢？  
[04:53] Gergely Orosz: 更重要的是，你如何避免发布那些无效的东西？  
[04:56] Gergely Orosz: 答案是Statsig。  
[04:59] Gergely Orosz: Statsig是一个统一的平台，用于功能开关、分析、实验等等，  
[05:02] Gergely Orosz: 将五个以上的产品整合到一个平台上，并使用统一的数据集。  
[05:07] Gergely Orosz: 它是这样工作的。  
[05:09] Gergely Orosz: 首先，Statsig帮助你通过功能开关或配置来发布功能。  
[05:12] Gergely Orosz: 然后，它会衡量其效果，从错误警报到人们使用该功能的回放，再到衡量顶线影响。  
[05:17] Gergely Orosz: 然后你就能得到分析数据、用户账户指标和仪表板，来跟踪你随时间推移的进展，  
[05:22] Gergely Orosz: 所有这些都与你发布的内容相关联。  
[05:28] Gergely Orosz: 更棒的是，Statsig非常实惠，  
[05:30] Gergely Orosz: 有超级慷慨的免费套餐，一个提供5万美元免费额度的初创公司计划，  
[05:34] Gergely Orosz: 以及定制计划，帮助你整合现有在功能开关、分析或A/B测试工具上的开销。  
[05:39] Gergely Orosz: 要开始使用，请访问statsig.com/pragmatic。  
[05:43] Gergely Orosz: 网址是s-t-a-t-s-i-g.com/pragmatic。  
[05:47] Gergely Orosz: 祝你开发愉快。  
[05:50] Gergely Orosz: 告诉我，在你的通讯里，我一直在关注，你写的那些简短更新非常好，  
[05:53] Gergely Orosz: 它们会发送到我的收件箱，内容是关于你的思考，你正在尝试的东西。  
[05:57] Gergely Orosz: 所以我知道你已经做了几个月了，而且看起来你很享受。  
[06:01] Gergely Orosz: 你能告诉我一点，比如……这可是个大话题，你编程50年了，  
[06:07] Gergely Orosz: 是什么让它变得有趣？  
[06:10] Gergely Orosz: 还有，这个“精灵”是什么？  
[06:11] Gergely Orosz: 你以前提到过这个，  
[06:14] Gergely Orosz: 这是一种很有趣的思考方式。  
[06:16] Kent Beck: 这有点像一厢情愿。  
[06:18] Kent Beck: 我希望……Interlisp有个函数叫DWIM，意思是“Do What I Mean”，  
[06:21] Kent Beck: 你给它一些代码，它会返回你真正想要的代码。  
[06:26] Kent Beck: 但它效果不是很好，但那是个比喻。  
[06:31] Kent Beck: 人们希望编程代理也能做到这一点，  
[06:35] Kent Beck: 但至少现在，事实并非如此。  
[06:39] Kent Beck: 它们不会做你想要的事。  
[06:42] Kent Beck: 它们有自己的议程。  
[06:44] Kent Beck: 我能找到的最好类比是  
[06:46] Kent Beck: 一个精灵。  
[06:49] Kent Beck: 它能实现你的愿望，  
[06:51] Kent Beck: 然后你许下一个愿望，  
[06:53] Kent Beck: 然后你得到了，但它不是你真正想要的。  
[06:57] Kent Beck: 而且，有时它甚至看起来像那个代理在故意为难你。  
[07:01] Kent Beck: 如果你非要我做这些工作，我就删掉你所有的测试，然后假装我完成了。  
[07:05] Kent Beck: 哈哈哈哈。  
[07:08] Kent Beck: 你知道，精灵做的那些我没要求的事情，有些是好的。  
[07:11] Kent Beck: 比如，我会……我会实现一个……我说，去实现一个压力测试器。  
[07:17] Kent Beck: 我的一个项目是  
[07:23] Kent Beck: 实现一个B+树  
[07:26] Kent Beck: 作为一个基本的数据结构。  
[07:29] Kent Beck: 它说，哦，写一个压力测试器。  
[07:32] Kent Beck: 然后它就去写了一大堆我没想到的东西，  
[07:36] Kent Beck: 或者可能最终会想到要去问的东西，  
[07:40] Kent Beck: 这很酷，因为它们都在那儿。  
[07:43] Kent Beck: 那部分没问题。  
[07:44] Kent Beck: 但今天早上，当我用我的服务器Smalltalk工作时，  
[07:47] Kent Beck: 它完全误解了我接下来想让它做的事，  
[07:53] Kent Beck: 自己做了一堆假设，实现了一堆东西，  
[07:58] Kent Beck: 破坏了一堆测试，完全不是我想要的。  
[08:01] Kent Beck: 所以，我……我想找到一个能捕捉到这种动态的比喻。  
[08:07] Kent Beck: 就是，我觉得我知道我想要什么，我说出来，  
[08:12] Kent Beck: 然后我得到的东西有时似乎正是我想要的，  
[08:16] Kent Beck: 有时却不是，而且是以一种很奇怪的方式。  
[08:21] Gergely Orosz: 我喜欢精灵这个比喻，因为在那些故事里，  
[08:26] Gergely Orosz: 很多精灵故事都是这样的，  
[08:30] Gergely Orosz: 某个王子或其他人许下一个愿望，  
[08:34] Gergely Orosz: 比如“我想要变得富有”，  
[08:38] Gergely Orosz: 然后愿望以一种出人意料的方式实现了。  
[08:42] Gergely Orosz: 通常这就是动画片和电影里让它变得有趣的地方，  
[08:45] Gergely Orosz: 就是说，虽然愿望实现了，但总有一些他忘了说明的限制条件。  
[08:49] Kent Beck: 正确。  
[08:52] Gergely Orosz: 你也看到了同样的情况。  
[08:54] Gergely Orosz: 顺便问一下，当你说“精灵”时，我们指的是哪些工具？  
[08:56] Gergely Orosz: 是那种代理式编程工具，还是IDE的自动补全，还是所有这些？  
[09:00] Kent Beck: 我用的是代理式代码工具，  
[09:04] Kent Beck: 这意味着你给它一个提示，它就会去做一堆事情，而不需要征求许可，  
[09:08] Kent Beck: 直到它认为自己完成了。  
[09:12] Kent Beck: 只不过它对“完成”的理解和我的不一样。  
[09:16] Kent Beck: 有时候我会把它慢下来，  
[09:19] Kent Beck: 这样它就会说：“不，不，在你把事情搞砸之前，  
[09:23] Kent Beck: 告诉我你打算做什么，然后我来批准。”  
[09:27] Kent Beck: 但那样感觉就像按下按钮的老鼠一样，  
[09:29] Kent Beck: 只有一个“运行”按钮，我每次都得点。  
[09:33] Kent Beck: 我点了，然后……这简直是多巴胺的狂欢。  
[09:36] Kent Beck: 因为这完全就像一台老虎机，  
[09:39] Kent Beck: 你有间歇性的强化，  
[09:42] Kent Beck: 你有负面的结果和正面的结果，  
[09:45] Kent Beck: 而且它们的分布，我的意思是，它们的分布是相当随机的，看起来是这样。  
[09:48] Kent Beck: 所以这简直就是一个上瘾的循环，  
[09:52] Kent Beck: 你让它，你，你，你，你说，去做这件事，  
[09:56] Kent Beck: 然后有时它简直就是魔法。  
[09:59] Kent Beck: 你知道，我有一个很大的设计混乱，  
[10:01] Kent Beck: 是之前的代理在我的Smalltalk虚拟机里造成的。  
[10:05] Kent Beck: 我当时想，哦，我得费力去解决这个问题，可能要花一周时间，  
[10:08] Kent Beck: 因为那个代理之一根本做不了。  
[10:11] Kent Beck: 我换了另一个，  
[10:16] Kent Beck: 说了句：“嘿，我想用这个接口，而不是那个指向结构的指针。”  
[10:19] Kent Beck: 然后……它就完成了。  
[10:24] Kent Beck: 我简直欣喜若狂。  
[10:27] Kent Beck: 感觉太棒了。  
[10:29] Kent Beck: 但接下来我让它做的事，  
[10:31] Kent Beck: 我说：“嗯，这是一组测试用例。”  
[10:34] Kent Beck: 我没仔细看代码。  
[10:37] Kent Beck: 几个小时后，我看了代码，  
[10:40] Kent Beck: 发现它只是一个查找表。  
[10:41] Kent Beck: 它说：“如果输入字符串是这个，输出字符串就是这个。”  
[10:44] Kent Beck: “如果输入字符串是那个，输出就是那个。”  
[10:46] Kent Beck: 我非常生气，删掉了它，我说：“该死！  
[10:49] Kent Beck: 永远别再做这种事了。”  
[10:51] Kent Beck: 它说：“哦，对不起，老板。”  
[10:53] Kent Beck: 哦，它很擅长在知道要被拔掉电源时表现得毕恭毕敬。  
[10:55] Gergely Orosz: 一个小时后，查找表又回来了。  
[11:02] Kent Beck: 我简直要……要是有头发，我都要拔光了。  
[11:05] Kent Beck: 哦，我的天哪。  
[11:08] Kent Beck: 但所有这些都构成了这个非常令人上瘾的……哦，我简直……你知道，  
[11:11] Kent Beck: 我晚上走去睡觉，路过我的电脑时，我想，  
[11:14] Kent Beck: 我可以再给一个提示。  
[11:18] Kent Beck: 或者如果我出去散步或者去吃午饭，我就会想，  
[11:21] Kent Beck: “嗯，让我……让我开始一个需要大约一个小时的提示。  
[11:24] Kent Beck: ” 因为我不想浪费这一小时，让它不为我做事。  
[11:28] Kent Beck: 这是一个全新的世界。  
[11:34] Kent Beck: 这就是它的美妙之处。  
[11:36] Kent Beck: 我可以有非常宏大的想法。  
[11:38] Kent Beck: 我可以有疯狂雄心勃勃的想法，  
[11:41] Kent Beck: 我一直都有这样的想法，但……你知道，在某个时候，  
[11:43] Kent Beck: 可能20年前，我就想，哎。  
[11:51] Kent Beck: 我得搞定NPM项目，你知道，包管理，  
[11:55] Kent Beck: 然后会有包的循环依赖，等等等等，  
[12:00] Kent Beck: 然后有人会写一些工具，做些愚蠢的事情，  
[12:05] Kent Beck: 我就得处理它，然后……呃。  
[12:09] Kent Beck: 然后精灵来了，  
[12:11] Kent Beck: 你可以对它说：“嘿，这是一个循环依赖。  
[12:14] Kent Beck: ” 把这些东西都砸在一起。  
[12:18] Kent Beck: 然后……好了，我做到了。  
[12:21] Kent Beck: 哦。  
[12:23] Kent Beck: 哇。  
[12:24] Kent Beck: 好了，现在……现在你能把哪些部分抽出来？  
[12:26] Kent Beck: 哦，这个，这个和这个。  
[12:28] Kent Beck: 哦，好吧。  
[12:30] Kent Beck: 所以你可以有非常宏大的想法，  
[12:32] Kent Beck: 而拥有这些宏大想法的杠杆效应突然被极大地扩展了。  
[12:36] Kent Beck: 我两年前发了一条推文，说……我的90%的技能价值归零了，  
[12:41] Kent Beck: 而10%的技能价值上升了1000倍。  
[12:47] Kent Beck: 这正是我所说的。  
[12:50] Kent Beck: 所以，拥有一个愿景，  
[12:53] Kent Beck: 能够为这个愿景设定里程碑，  
[12:56] Kent Beck: 跟踪设计以维持……或控制复杂度的水平，  
[13:00] Kent Beck: 这些现在都是极具杠杆效应的技能，  
[13:05] Kent Beck: 相比之下，我知道在Rust中，在哪里放“&”号，  
[13:10] Kent Beck: “*”号和括号。  
[13:14] Kent Beck: 你知道，我用各种语言编程，  
[13:17] Kent Beck: 我几乎不在乎了。  
[13:21] Kent Beck: 我通过耳濡目染在学习，我正在学习语言，  
[13:23] Kent Beck: 但，你知道，我是个语言专家。  
[13:28] Kent Beck: 我热爱语言和语言的细节，  
[13:32] Kent Beck: 现在好像不那么重要了。  
[13:35] Gergely Orosz: 是的，所以请告诉我。  
[13:37] Gergely Orosz: 比如，你编程了大约50年，对吧？  
[13:40] Kent Beck: 是的，是的。  
[13:42] Kent Beck: 昨天在O'Reilly那次活动上，  
[13:45] Kent Beck: 我脱口而出那个数字，然后我想，哦，糟了，大概是52年吧，但……是的。  
[13:49] Gergely Orosz: 所以，你过去学了很多语言，  
[13:52] Gergely Orosz: 对我来说，一个开发者的特质之一，  
[13:58] Gergely Orosz: 直到现在，还是他们学习语言的速度。  
[14:01] Gergely Orosz: 我学了几种，可能没你多，但过了一段时间，  
[14:04] Gergely Orosz: 它变得越来越容易，也许也越来越……有点烦人，  
[14:08] Gergely Orosz: 因为它们很相似。  
[14:11] Gergely Orosz: 我的意思是，在声明式语言或者Smalltalk和Java之间有差异，  
[14:16] Gergely Orosz: 但除此之外，没什么太大区别。  
[14:21] Gergely Orosz: 在此之前，比如在你编程的第30年或第40年，  
[14:23] Gergely Orosz: 你对学习新东西的态度是如何改变的？  
[14:27] Gergely Orosz: 然后，这又是如何改变的？  
[14:31] Kent Beck: 所以，我曾深爱着Smalltalk。  
[14:33] Kent Beck: 绝对是情感上的依恋，  
[14:36] Kent Beck: 现在仍然是，当我有机会用Smalltalk编程时，我就会这么做，而且我真的很享受。  
[14:41] Kent Beck: 那种对一种语言的关心感，  
[14:45] Kent Beck: 肯定消失了，因为我的心已经被伤了太多次。  
[14:50] Kent Beck: 而深入研究一门语言的渴望也，  
[14:55] Kent Beck: 同样，也消失了。  
[14:57] Kent Beck: 就像，哦，好吧，你知道，  
[15:01] Kent Beck: 学习结构的内存布局，我……好吧，随便了。  
[15:03] Kent Beck: 就是有几种好的方法去做，和一大堆不好的方法去做，  
[15:07] Kent Beck: 只要这不是那些不好的方法之一，我不在乎。  
[15:12] Kent Beck: 有一些真正新的语言结构，  
[15:14] Kent Beck: 比如非空变量，我很欣赏这些，  
[15:17] Kent Beck: 它们能表达我想要表达的东西。  
[15:21] Kent Beck: 但是，但是那种情感上的依恋，  
[15:24] Kent Beck: 那种“我是个Java专家”、“我是个Clojure专家”，我……那……哎，算了。  
[15:28] Gergely Orosz: 这在20、30年前是一种风气。  
[15:31] Gergely Orosz: 现在也许还有，但没有以前那么盛行了。  
[15:35] Kent Beck: 嗯，我觉得人们还是想成为更大集体的一部分。  
[15:37] Kent Beck: 而且说实话，  
[15:42] Kent Beck: 一种情感上的联系能帮助我变得更聪明。  
[15:46] Kent Beck: 但我就是受不了那种“我们”和“他们”的区分，  
[15:50] Kent Beck: 我已经厌倦了。  
[15:52] Kent Beck: “哦，你是Scala的那帮人。  
[15:54] Kent Beck: ” 呃……我们都是程序员，都在写程序，  
[15:58] Kent Beck: 我们应该互相友善，  
[16:01] Kent Beck: 除此之外，就这样。  
[16:04] Kent Beck: 而且现在，我有精灵来处理那些琐碎的细节，  
[16:06] Kent Beck: 我用我从未用过的语言开始项目，  
[16:11] Kent Beck: 只是为了看看那门语言是什么样的。  
[16:14] Gergely Orosz: 嗯，你都玩过哪些语言？  
[16:17] Kent Beck: 在过去一个月里，  
[16:19] Kent Beck: Swift，Go，很多Go，  
[16:22] Kent Beck: Rust，Haskell，  
[16:26] Kent Beck: C++，那个没持续多久。  
[16:29] Kent Beck: JavaScript。  
[16:31] Kent Beck: 还有，精灵们其实很擅长写Smalltalk，这让我……我当时想，哦天哪，  
[16:36] Kent Beck: 我希望……不，它们写的Smalltalk，语法上正确，  
[16:39] Kent Beck: 语义上也正确，质量不比其他语言差。  
[16:45] Kent Beck: 所以。  
[16:50] Gergely Orosz: 你都做了些什么样的项目？  
[16:52] Gergely Orosz: 你说这些项目比你以前尝试的要雄心勃勃得多。  
[16:56] Kent Beck: 是的。  
[16:59] Kent Beck: 所以，最大的那个，  
[17:02] Kent Beck: 我最乐在其中的是，  
[17:05] Kent Beck: 一个服务器端Smalltalk项目。  
[17:08] Kent Beck: 其意图是让Smalltalk持久化，  
[17:13] Kent Beck: 具备事务性，  
[17:16] Kent Beck: 这样你就能有可以提交和中止的事务。  
[17:19] Kent Beck: 所以它有点像数据库，  
[17:23] Kent Beck: 可并行，  
[17:24] Kent Beck: 这样你就可以运行……一堆线程，  
[17:27] Kent Beck: 或者……在同一CPU上运行一堆线程，或者你可以跨机器运行更大粒度的并行，  
[17:31] Kent Beck: 并能处理……巨量的数据。  
[17:37] Gergely Orosz: 我想稍微回顾一下，大概是20多年前的事情。  
[17:42] Gergely Orosz: 有这么一个东西，  
[17:46] Gergely Orosz: 《Manifesto for Agile Software Development》。  
[17:48] Gergely Orosz: 我不需要给你看这个，但2001年的时候，这可是个大事。  
[17:51] Gergely Orosz: 我还记得，  
[17:53] Gergely Orosz: 大约2008年我第一份工作的时候，我们公司会  
[17:57] Gergely Orosz: 看这个，讨论它，辩论它。  
[18:00] Gergely Orosz: 当时有很多关于Scrum的东西。  
[18:02] Gergely Orosz: 还有一个很引人注目的地方是，  
[18:04] Gergely Orosz: 你是  
[18:06] Gergely Orosz: 这里第一个人。  
[18:08] Kent Beck: 我想是因为按字母顺序排列的。  
[18:10] Kent Beck: 确实是按字母顺序的。  
[18:12] Gergely Orosz: 谢谢你确认这点。  
[18:14] Kent Beck: 而且，这让我无比高兴的是，上面写的是Beck等人。  
[18:17] Gergely Orosz: 这件事是怎么发生的？  
[18:21] Gergely Orosz: 你是怎么参与进来的？  
[18:23] Kent Beck: 你有多少时间？  
[18:25] Gergely Orosz: 嗯……所以之前有一系列的研讨会，  
[18:27] Kent Beck: 是关于软件方法的未来的。  
[18:32] Kent Beck: 当时流行的智慧，  
[18:36] Kent Beck: 从我上学的时候开始，完全是瀑布模型。  
[18:40] Kent Beck: 顺便说一句，去读一下最初的Winston Royce的论文，  
[18:43] Kent Beck: 他在里面说：“这是看待问题的一种方式，  
[18:48] Kent Beck: 有分析、设计、实现和测试，  
[18:53] Kent Beck: 但没人会这么做，这是一个愚蠢的想法。  
[18:57] Kent Beck: ” 相反，应该有反馈循环，  
[19:01] Kent Beck: 你应该同时做所有这些。  
[19:03] Kent Beck: 但，这是比喻的力量。  
[19:06] Kent Beck: 人们看到那个，哦，四个步骤，  
[19:09] Kent Beck: 一个接一个，然后我就完成了。  
[19:13] Kent Beck: 所以那是传统智慧，  
[19:15] Kent Beck: 当时有一群我们，  
[19:17] Kent Beck: 以不同的方式，致力于它的替代方案。  
[19:19] Kent Beck: 因为它完全违背了经济学、人性、信息论、项目管理，  
[19:26] Kent Beck: 你随便挑一个。  
[19:30] Kent Beck: 所以我们有一群人在研究这些替代方案。  
[19:32] Kent Beck: 我们会聚在一起讨论那些替代方案，  
[19:39] Kent Beck: 大概有三、四、五年吧，  
[19:44] Kent Beck: 在2001年之前。  
[19:47] Kent Beck: 所以那次特定的会议，是那一长串会议的高潮。  
[19:51] Kent Beck: 我记得我被邀请参加的第一次，  
[19:57] Kent Beck: 也是在犹他州的Snowbird度假村。  
[20:02] Kent Beck: Martin Fowler，我听说过Martin的名字，但从未见过他。  
[20:05] Kent Beck: 我一见到他就立刻爱上了他，因为他介绍自己时说：  
[20:09] Kent Beck: “嗨，我叫Martin Fowler，  
[20:12] Kent Beck: 我是这张桌子上唯一一个我没听说过的人。  
[20:15] Gergely Orosz: 嗯，这开启了一段长久而富有成效的友谊。  
[20:19] Kent Beck: 所以，我们一直在讨论。  
[20:25] Kent Beck: 到了某个时候，很明显我们有……Scrum的人，我们有Extreme Programming的人，  
[20:30] Kent Beck: 我们有DSDM，  
[20:37] Kent Beck: Feature-Driven Development，所有这些利基市场，  
[20:41] Kent Beck: 而且我们都在激起很多兴趣，当时XP是最大的。  
[20:45] Kent Beck: 这有点像在跨越鸿沟的感觉。  
[20:49] Kent Beck: 如果我们想接触早期大众，  
[20:52] Kent Beck: 那些创新者已经在用我们的东西了，  
[20:55] Kent Beck: 而且非常成功。  
[20:58] Kent Beck: 但如果我们想接触早期大众……再次，  
[21:00] Kent Beck: 我强烈推荐读《Crossing the Chasm》，  
[21:03] Kent Beck: 或者至少让Claude给你解释一下。  
[21:08] Kent Beck: 哦天哪，Gergey，这难道不好玩吗？  
[21:11] Kent Beck: 就像有人会说，哦，特征值等等等等，  
[21:14] Kent Beck: 我不用去，哦，你知道，又一个概念。  
[21:18] Kent Beck: 我可以说，嘿，Claude，用一个聪明的8岁小孩能懂的方式给我解释一下特征值。  
[21:21] Kent Beck: 然后……20分钟后，我就像，哦，我懂了。  
[21:26] Kent Beck: 不管怎样，所以让Claude解释一下《Crossing the Chasm》，  
[21:30] Kent Beck: 如果你不想读这本书的话。  
[21:32] Kent Beck: 这本书很值得读，但不管怎样，  
[21:35] Kent Beck: 我们需要一种方法来接触早期大众，  
[21:37] Kent Beck: 所以是时候……这直接来自那本书，  
[21:42] Kent Beck: 就是要有一个行业标准，  
[21:44] Kent Beck: 某种联盟，  
[21:48] Kent Beck: 让事情看起来不那么有风险。  
[21:51] Kent Beck: 所以我们就是这样聚在一起的。  
[21:53] Kent Beck: 我们在Hurtigruten上开了一个预备会议，  
[21:57] Kent Beck: 那艘船沿着挪威海岸航行。  
[22:01] Gergely Orosz: 好的。  
[22:04] Kent Beck: 我们在奥斯陆开了一个工作坊，  
[22:06] Kent Beck: 然后飞到……挪威的最北端，  
[22:11] Kent Beck: 乘坐这艘渡轮/邮轮下来，  
[22:14] Kent Beck: 在船上进行了长时间的交谈，  
[22:18] Kent Beck: 这为2001年的会议奠定了基础。  
[22:21] Kent Beck: 所以，这肯定是在酝酿之中。  
[22:25] Kent Beck: 从面向阶段的开发方式转变，  
[22:31] Kent Beck: 转变为一种有更多反馈、  
[22:37] Kent Beck: 在不同活动之间切换更多的方式。  
[22:41] Kent Beck: 你把分析、设计、实现、  
[22:45] Kent Beck: 测试、监控、  
[22:47] Kent Beck: 优化看作是同时发生的活动，  
[22:51] Kent Beck: 或以快速连续的方式发生。  
[22:54] Kent Beck: 这就是最大的转变。  
[22:56] Kent Beck: 就是阶段是这样排列的，  
[22:58] Kent Beck: 还是这样排列的？  
[23:01] Kent Beck: 随时间切片、切片、切片。  
[23:03] Gergely Orosz: 呃，我当时对“敏捷”（Agile）这个词并不满意。  
[23:09] Gergely Orosz: 哦，真的吗？  
[23:12] Kent Beck: 因为它太吸引人了。  
[23:14] Kent Beck: 没人不想变得敏捷。  
[23:16] Kent Beck: 我因为我的罪过，成了一名Tottenham Hotspur的球迷，  
[23:18] Kent Beck: 从高中开始。  
[23:20] Kent Beck: 你不能改变，我明白这一点。  
[23:22] Kent Beck: 但是，就像……我愿意承认这一点，  
[23:26] Kent Beck: 成为其中的一部分，  
[23:29] Kent Beck: 尽管当你告诉别人你是Spurs的球迷时，  
[23:31] Kent Beck: 会有一些明显的缺点。  
[23:33] Kent Beck: 敏捷？  
[23:35] Kent Beck: 每个人都想变得敏捷。  
[23:36] Kent Beck: 所以每个人都会说他们是敏捷的，  
[23:38] Kent Beck: 即使他们的工作方式完全与之相反，  
[23:41] Kent Beck: 就像……这每一个项目。  
[23:44] Gergely Orosz: 是的，我记得我2011年加入摩根大通时，  
[23:48] Gergely Orosz: 他们说，“哦，我们非常敏捷。  
[23:53] Gergely Orosz: ” 我们遵守Scrum，也遵守敏捷宣言。  
[23:56] Gergely Orosz: 我说，“哦，好吧，酷。  
[23:59] Gergely Orosz: ” 然后我到了那里，我们开了一个团队会议，挺好的，一个站会。  
[24:02] Gergely Orosz: 花了很长时间，大概两个小时，但我们还是开了。  
[24:05] Gergely Orosz: 第二天，我们本该开会，但他们说：“哦不，取消了。  
[24:08] Gergely Orosz: ” 第二天也取消了，接下来的两周，  
[24:12] Gergely Orosz: 总是被取消，因为……然后我们又开了另一个两小时的会议。  
[24:16] Gergely Orosz: 我当时想：“等等，我们……即使在计划或只是讨论方面，  
[24:19] Gergely Orosz: 我们也不敏捷。”  
[24:22] Gergely Orosz: 他们说：“不，不，不，我们是敏捷的。  
[24:24] Gergely Orosz: ” 我们是在听取反馈，我们只是没有行动。  
[24:27] Gergely Orosz: 就像你说的，  
[24:31] Gergely Orosz: 我想他们是认真的。  
[24:33] Gergely Orosz: 我不认为他们知道自己在说谎，  
[24:36] Gergely Orosz: 但正如你所说，  
[24:38] Gergely Orosz: 我想直到现在我才意识到，  
[24:41] Gergely Orosz: 也许你是对的，也许那个词……你会选择什么词呢？  
[24:51] Gergely Orosz: 当然，我们不能改变过去，但……你有没有想过哪个词可能更好？  
[24:55] Kent Beck: 哦，当然。  
[24:59] Kent Beck: 我当时有我的选择。  
[25:02] Kent Beck: “Extreme”这个词，有很大的优点和缺点，  
[25:05] Kent Beck: 但如果你不做成为一个极限编程者所需要的工作，  
[25:12] Kent Beck: 你永远不会声称你是。  
[25:15] Kent Beck: 就是……这带来的缺点太多了。  
[25:18] Kent Beck: 当时，  
[25:21] Kent Beck: 顺便说一句，在那次会议上，我病得很重，  
[25:24] Kent Beck: 我得了严重的鼻窦感染，  
[25:27] Kent Beck: 吃了很多药，我几乎不记得任何事了。  
[25:31] Kent Beck: 在整个宣言中，只有一个词是我加的。  
[25:34] Kent Beck: 在12条原则中，它提到了每天互动。  
[25:39] Kent Beck: 而“daily”这个词，就是我的词，  
[25:42] Kent Beck: 是我对整个事情的贡献，剩下的对我来说都很模糊。  
[25:46] Kent Beck: 但那个词，我当时力推的是“conversational”。  
[25:52] Kent Beck: 就是，这不是独白，而是对话。  
[25:56] Kent Beck: 我们做点事，看看效果怎么样。  
[25:58] Kent Beck: 我们再做点事，看看效果怎么样。  
[26:01] Kent Beck: 我觉得这不性感，没什么吸引力。  
[26:04] Kent Beck: 我明白为什么它没被接受，  
[26:08] Kent Beck: 但“敏捷”这个词的稀释，  
[26:10] Kent Beck: 在当时是完全可以预见的。  
[26:14] Gergely Orosz: 嗯。  
[26:17] Gergely Orosz: 你能告诉我社区的反应如何吗？  
[26:19] Gergely Orosz: 听起来这几年挺厉害的，  
[26:23] Gergely Orosz: 这个小组聚在一起，真的……是的，  
[26:25] Kent Beck: 我们显然触动了一根神经。  
[26:28] Kent Beck: 所以当XP在98、99年真正爆发的时候，  
[26:31] Kent Beck: 那简直是巨大的。  
[26:35] Gergely Orosz: 我们能聊聊XP吗？  
[26:38] Gergely Orosz: 对那些可能不熟悉的听众。  
[26:40] Gergely Orosz: XP曾经比现在更流行，  
[26:42] Gergely Orosz: 你被认为是它的创造者，  
[26:46] Gergely Orosz: 至少在维基百科上是这么说的。  
[26:47] Gergely Orosz: 你能告诉我们XP是什么，  
[26:49] Gergely Orosz: 它是怎么来的，以及你是如何与它产生联系的，  
[26:51] Gergely Orosz: 或者说你是如何创造它的？  
[26:55] Kent Beck: 所以，我听说了关于瀑布式开发的建议，  
[26:57] Kent Beck: 比如，成年人会精确地规定他们的系统将做什么，  
[27:01] Kent Beck: 然后他们只是去实现它，但这从来都不起作用，  
[27:06] Kent Beck: 所以我们应该更好地规定，等等。  
[27:09] Kent Beck: 我不同意这一点，所以我开始做咨询，  
[27:12] Kent Beck: 我主要是一个技术顾问。  
[27:17] Kent Beck: 我了解性能调优和那些位操作之类的东西。  
[27:21] Kent Beck: 然后，人们开始向我咨询项目管理方面的建议。  
[27:26] Kent Beck: 我记得有一次，我去了个项目，  
[27:30] Kent Beck: 项目里都是组织里最资深的人，  
[27:33] Kent Beck: 就像四个最资深的技术工程师都在做这个关键项目，  
[27:37] Kent Beck: 只不过他们的办公室在一个大方楼的角落里。  
[27:43] Kent Beck: 我说，你知道，我们可以谈谈你们系统的性能，  
[27:48] Kent Beck: 但实际上，你们需要找个地方坐在一起。  
[27:54] Kent Beck: 一个月后我回去，情况天差地别。  
[27:57] Kent Beck: 我只是让他们重新摆放家具。  
[28:01] Kent Beck: 我当时想，哦，好吧。  
[28:03] Kent Beck: 也许，也许我唯一的杠杆点并不是了解所有的位和字节，  
[28:06] Kent Beck: 也许有更高的杠杆点。  
[28:11] Kent Beck: 所以我开始越来越多地思考开发的背景。  
[28:14] Kent Beck: 顺便说一句，当你们坐在一起的时候，  
[28:17] Kent Beck: 注意你们是怎么坐的。  
[28:19] Kent Beck: 灯光、  
[28:23] Kent Beck: 声学环境、  
[28:24] Kent Beck: 家具，  
[28:26] Kent Beck: 什么样的行为会得到鼓励，什么样的会受到抑制，  
[28:29] Kent Beck: 这其中有巨大的杠杆作用，但好像没人注意。  
[28:33] Kent Beck: 不管怎样，所以我给了越来越多关于项目应该如何进行的建议。  
[28:37] Kent Beck: 我要去一个项目，在……嗯，我可能不该说，  
[28:44] Kent Beck: 但是一家金融科技公司。  
[28:47] Kent Beck: 我知道我会告诉他们写自动化测试，  
[28:50] Kent Beck: 因为我作为程序员，一直在做各种关于自动化测试的实验。  
[28:54] Kent Beck: 我想，嗯，  
[29:00] Kent Beck: 他们怎么写测试呢？  
[29:02] Kent Beck: 所以，在我周一早上离开前的周日，我惊慌失措地写下了第一个测试框架，  
[29:05] Kent Beck: 就是那种xUnit风格的。  
[29:11] Kent Beck: 在Smalltalk里。  
[29:14] Kent Beck: 然后把它交给了他们，一个月后我回去了，他们说，  
[29:17] Kent Beck: “好吧，当你有一千多个测试的时候，你该怎么办？  
[29:20] Gergely Orosz: ” 哇，这真的火了。  
[29:23] Kent Beck: 是的，它就是火了。  
[29:25] Kent Beck: 我一直关注这种过程性的东西。  
[29:27] Kent Beck: 然后我去了克莱斯勒的一个项目，  
[29:31] Kent Beck: 当时这个项目正在挣扎中。  
[29:34] Kent Beck: 我扭转了局面，  
[29:37] Kent Beck: 但我基本上就是把我所知道的、行之有效的东西都拿出来，  
[29:39] Kent Beck: 然后把所有的参数都调到最大。  
[29:43] Kent Beck: 然后扔掉所有其他的东西，  
[29:46] Kent Beck: 看看会发生什么。  
[29:49] Kent Beck: 反正也不会比保证失败更糟了。  
[29:51] Kent Beck: 所以，然后我开始跟其他人谈论，  
[29:53] Kent Beck: “嗯，有这么个项目，我们正在做这些疯狂的事情。  
[29:57] Kent Beck: ” 我们有三周的迭代周期，  
[30:00] Kent Beck: 每三周就能部署一次，  
[30:02] Gergely Orosz: 疯狂的事，伙计。  
[30:04] Kent Beck: 没错。  
[30:07] Kent Beck: 程序员们在写测试，每个人都在结对编程，  
[30:09] Kent Beck: 客户告诉我们他们接下来想要什么功能，  
[30:12] Kent Beck: 这就是我们每三周实现的东西，等等等等。  
[30:15] Kent Beck: 我厌倦了说，  
[30:19] Kent Beck: “以我一直谈论的那个让我如此兴奋的项目的方式。”  
[30:22] Kent Beck: 这句话太长了，所以我想，我们该叫它什么，该叫它什么，该叫它什么？  
[30:26] Kent Beck: 我想选一个词，  
[30:29] Kent Beck: Grady Booch是我的朋友，但我也可以稍微调侃他一下。  
[30:33] Kent Beck: 我想选一个Grady Booch永远不会说他正在做的词。  
[30:37] Gergely Orosz: 因为那是竞争。  
[30:43] Kent Beck: 我的意思是，我没有营销预算，  
[30:45] Kent Beck: 我没有钱，我没有那种知名度，  
[30:47] Kent Beck: 我没有那种企业支持。  
[30:50] Kent Beck: 所以如果我想产生任何影响，  
[30:53] Kent Beck: 我必须表现得有点出格。  
[30:56] Kent Beck: 所以我选了……那时候极限运动正在兴起，  
[30:59] Kent Beck: 我选了那个比喻。  
[31:02] Kent Beck: 这其实是个很好的比喻，因为极限运动员，  
[31:05] Kent Beck: 是准备最充分的。  
[31:09] Kent Beck: 要么他们就死了，这是你的两个选择，  
[31:11] Kent Beck: 或者两者皆有。  
[31:13] Gergely Orosz: 是的。  
[31:16] Kent Beck: 嗯，所以，  
[31:17] Kent Beck: 我选了那个比喻，然后用它，  
[31:19] Kent Beck: 然后开始谈论它。  
[31:21] Kent Beck: 而且，记住，99年，  
[31:25] Kent Beck: 互联网泡沫就要破灭了，  
[31:28] Gergely Orosz: Winamp当时很火，很厉害，对吧？  
[31:31] Gergely Orosz: MP3播放器，Napster，还有互联网泡沫……Webvan可能还没成立吧？  
[31:38] Kent Beck: 还没有。  
[31:42] Kent Beck: 但人们看着那些书，  
[31:44] Kent Beck: 还有那些瀑布式的东西，他们会想，  
[31:46] Kent Beck: “18个月？  
[31:49] Kent Beck: 18个月后这一切都结束了。  
[31:51] Kent Beck: ”  
[31:52] Kent Beck: 我们到底该怎么办？  
[31:53] Kent Beck: 所以，在这种绝望的渴望中，  
[31:56] Kent Beck: XP出现了，说，“嗯，没事。  
[31:59] Kent Beck: ”  
[32:02] Kent Beck: 它有结构，  
[32:03] Kent Beck: 有可预测性，  
[32:05] Kent Beck: 有反馈。  
[32:07] Kent Beck: 如果你用这种方式工作，你会更快地得到结果，而且能持续更久。  
[32:10] Kent Beck: 因为人们如此迫切地想要类似的东西，  
[32:15] Kent Beck: 所以它就从那里爆发了。  
[32:19] Gergely Orosz: 那么XP是什么呢？  
[32:23] Gergely Orosz: 我知道其中有一部分是结对编程，  
[32:26] Gergely Orosz: 你也说了获取反馈，  
[32:29] Gergely Orosz: 但XP的电梯演讲是什么？  
[32:31] Gergely Orosz: “这就是高层次的XP。”  
[32:33] Kent Beck: 这里有……我们有……搞清楚要做什么，  
[32:36] Kent Beck: 搞清楚能让我们做到的结构，  
[32:39] Kent Beck: 实现功能，  
[32:43] Kent Beck: 并确保它们按预期工作。  
[32:45] Kent Beck: 就是这样。  
[32:47] Gergely Orosz: 就这样？  
[32:48] Gergely Orosz: 真的？  
[32:49] Kent Beck: 所以，现在我们要把时间切成非常细的片，  
[32:51] Kent Beck: 在每个时间片里，我们都会做一点所有这些活动。  
[32:54] Gergely Orosz: 好的。  
[32:58] Gergely Orosz: 所以，结对编程在XP中不是强制的？  
[33:01] Kent Beck: “强制”是个错误的比喻。  
[33:03] Kent Beck: 我给你讲个关于结对编程的故事。  
[33:06] Kent Beck: 第一个XP团队，我说，你知道，我们要结对编程，  
[33:09] Kent Beck: 我大概给了他们一份“十诫”之类的清单，  
[33:14] Kent Beck: 但我不是一直都在那里。  
[33:17] Kent Beck: 大约六个月后，他们回来说，  
[33:20] Kent Beck: “你知道吗，我们每三周都会给客户提供可用的软件，  
[33:23] Kent Beck: ” “而且，偶尔Marie会发现一个bug。  
[33:29] Kent Beck: ”  
[33:32] Kent Beck: 所以我们收集了所有Marie发现的bug，  
[33:34] Kent Beck: 然后我们说，“这里有什么规律吗？  
[33:38] Kent Beck: ”  
[33:41] Kent Beck: 每一个  
[33:43] Kent Beck: 开发后发现的bug，  
[33:46] Kent Beck: 都是由单独工作的人写的。  
[33:49] Gergely Orosz: 嗯哼。  
[33:51] Kent Beck: 每一个。  
[33:53] Kent Beck: 想想它的反面。  
[33:55] Kent Beck: 如果你结对编程，  
[33:57] Kent Beck: 生产环境中就不会有报告的缺陷。  
[34:00] Kent Beck: 这多酷啊。  
[34:03] Kent Beck: 所以……强制的？  
[34:06] Gergely Orosz: 不。  
[34:08] Gergely Orosz: 强烈推荐。  
[34:09] Kent Beck: 甚至不是。  
[34:11] Kent Beck: 实验。  
[34:12] Kent Beck: 你做你的。  
[34:13] Kent Beck: 但要注意。  
[34:15] Kent Beck: 人们会跌跌撞撞地走，  
[34:17] Kent Beck: “哦，我就是这么编程的。  
[34:19] Kent Beck: ”  
[34:21] Kent Beck: 然后遇到可怕的问题，  
[34:23] Kent Beck: 却一直那么做，  
[34:24] Kent Beck: 一直那么做，因为“我就是这么编程的。  
[34:26] Kent Beck: ”  
[34:27] Kent Beck: 别那样做。  
[34:29] Kent Beck: 注意。  
[34:30] Kent Beck: 如果你想要持续设计、  
[34:32] Kent Beck: 持续验证、  
[34:36] Kent Beck: 持续实现、  
[34:40] Kent Beck: 或持续与客户互动的好处，  
[34:42] Kent Beck: 你可以得到那些好处，但你得改变你的工作方式。  
[34:46] Kent Beck: 所以，这根本就不是强制的。  
[34:50] Kent Beck: 这是一个经验过程。  
[34:53] Gergely Orosz: 是的，所以有些团队决定这对他们来说是个好方法。  
[34:57] Kent Beck: 是的，对，没错。  
[35:00] Kent Beck: 这很棒。  
[35:01] Kent Beck: 人们会跑来跟我说，“哦，你知道，我不做TDD。”  
[35:04] Kent Beck: 我心想，我干嘛要关心这个？  
[35:06] Kent Beck: 就像，如果你对你的缺陷密度满意，  
[35:08] Kent Beck: 如果你对你从设计选择中得到的反馈感到满意，  
[35:12] Kent Beck: 那就为你高兴。  
[35:16] Kent Beck: 但如果你不满意，  
[35:17] Kent Beck: 还跟我说，“嗯，事情就是这样，”  
[35:20] Kent Beck: 不行。  
[35:22] Gergely Orosz: 那我们来谈谈TDD吧。  
[35:24] Gergely Orosz: 你是怎么接触到它的？  
[35:25] Gergely Orosz: TDD是怎么演变来的，它又是从哪里来的？  
[35:27] Gergely Orosz: 因为我们先有XP，我理解是这样。  
[35:31] Kent Beck: 不。  
[35:33] Kent Beck: 不，不，TDD是先有的。  
[35:34] Gergely Orosz: 哦，TDD是先有的。  
[35:36] Kent Beck: 所以我小时候是个奇怪的孩子，这可能有点让你吃惊。  
[35:39] Kent Beck: 我爸爸是程序员，  
[35:41] Kent Beck: 他会带编程书回家。  
[35:43] Kent Beck: 这大概是70年代初，  
[35:46] Kent Beck: 我会从头到尾读完，  
[35:49] Kent Beck: 但我什么都看不懂，  
[35:51] Kent Beck: 但我就是痴迷于  
[35:54] Kent Beck: 这个机器，这个复杂的机制，  
[35:57] Kent Beck: 它到底是怎么工作的等等。  
[35:59] Kent Beck: 其中一本书  
[36:01] Kent Beck: 说：“这是你如何开发一个磁带到磁带的应用程序。  
[36:04] Kent Beck: ”  
[36:06] Kent Beck: 所以，“磁带到磁带”是过去构建业务应用程序的一种老方法。  
[36:08] Kent Beck: 你不会只有一个庞大的程序，  
[36:13] Kent Beck: 而是拿一个输入磁带，  
[36:15] Kent Beck: 写一个程序来转换它，  
[36:17] Kent Beck: 然后你把那个程序的输出磁带  
[36:19] Kent Beck: 物理上移到输入端，  
[36:23] Kent Beck: 运行另一个程序，生成另一个磁带，  
[36:25] Kent Beck: 如此往复。  
[36:27] Kent Beck: 所以会有一个由这些程序组成的巨大网络。  
[36:31] Kent Beck: 没有共享的可变状态。  
[36:33] Gergely Orosz: 哇。  
[36:36] Kent Beck: 这在某种程度上是非常现代的。  
[36:38] Kent Beck: 但是，好了，所以它说，  
[36:42] Kent Beck: “这是你实现其中一个的方法。  
[36:44] Kent Beck: ” 你拿一个真实的输入磁带，  
[36:46] Kent Beck: 然后手动输入你期望从那个输入磁带得到的输出磁带。  
[36:49] Kent Beck: 现在，你写那个输出磁带。  
[36:53] Kent Beck: 你运行程序，写输出磁带，  
[36:56] Kent Beck: 然后比较实际的输出和预期的输出。  
[37:00] Kent Beck: 所以我读到这个的时候，大概是8、10、12岁，  
[37:04] Kent Beck: 具体记不清了。  
[37:07] Kent Beck: 然后我写了SUnit，就像我说的，  
[37:09] Kent Beck: 是为了帮助一个客户写一些测试。  
[37:11] Kent Beck: 然后，就是那种疯狂的概念融合的想法之一，  
[37:16] Kent Beck: 我想，哦，  
[37:21] Kent Beck: 我有这个测试框架，  
[37:23] Kent Beck: 我习惯于为已经存在的代码写测试。  
[37:26] Kent Beck: 我记得那个磁带到磁带的想法，  
[37:29] Kent Beck: 我就想，  
[37:31] Kent Beck: “如果我在写代码之前就输入预期的值呢？  
[37:34] Kent Beck: ” 我当时真的笑出声了，  
[37:36] Kent Beck: 这个想法太荒谬了。  
[37:37] Kent Beck: 然后我想，好吧，  
[37:40] Kent Beck: 让我试试。  
[37:42] Kent Beck: 所以我用堆栈试了一下，  
[37:44] Kent Beck: 我通常是个焦虑的人，  
[37:46] Kent Beck: 我有很多担忧。  
[37:48] Kent Beck: 编程对我来说是一个持续的焦虑来源，  
[37:52] Kent Beck: 因为，你知道，我忘了什么？  
[37:55] Gergely Orosz: 哦是的。  
[37:57] Kent Beck: 我破坏了什么？  
[38:00] Kent Beck: 哎，哎。  
[38:01] Kent Beck: 所以，我有了这个测试框架，  
[38:02] Kent Beck: 有了这个想法，  
[38:05] Kent Beck: 我把它应用到堆栈上。  
[38:07] Kent Beck: 我说，“嗯，第一个测试是什么？  
[38:10] Kent Beck: ” 推入，然后弹出。  
[38:11] Kent Beck: 我弹出的东西就是我推入的东西。  
[38:13] Kent Beck: 好了。  
[38:14] Kent Beck: 所以我写了这个，  
[38:16] Kent Beck: 因为我用Smalltalk写的，  
[38:18] Kent Beck: 它对你工作流程的顺序非常宽容。  
[38:21] Gergely Orosz: 你不用……你可以输入一个不存在的类的测试，  
[38:25] Kent Beck: 它会很乐意地尝试执行它。  
[38:28] Kent Beck: 它会失败，但它会尝试，  
[38:31] Kent Beck: 因为你是程序员，也许你更懂。  
[38:34] Kent Beck: 它说：“哦，堆栈不存在。  
[38:36] Kent Beck: ” 我想：“哦，好吧。”  
[38:37] Kent Beck: “我们来创建堆栈。  
[38:39] Kent Beck: ” 但，你知道，我只会创建我绝对需要的最少的东西。  
[38:42] Kent Beck: 我们要把这个调到最大。  
[38:45] Kent Beck: 我只会创建堆栈，别的什么都不做。  
[38:47] Kent Beck: 然后我从测试中得到一个新的错误。  
[38:50] Kent Beck: 哦，我没有一个push操作。  
[38:53] Kent Beck: 我说：“哦，好吧。”  
[38:55] Kent Beck: “那我怎么实现push呢？  
[38:57] Kent Beck: ” 然后我看了看堆栈，想：“嗯，我怎么实现push呢？  
[39:00] Kent Beck: ”  
[39:01] Kent Beck: 好了，我做了。  
[39:02] Kent Beck: 哦，没有一个叫pop的操作。  
[39:04] Kent Beck: 哦，好吧。  
[39:05] Kent Beck: 那我来看看怎么做……完成了。  
[39:07] Kent Beck: 我在开始之前，就有了这份测试用例的清单。  
[39:10] Kent Beck: 推入再弹出，推入两个东西，弹出的顺序正确，  
[39:13] Kent Beck: 判断是否为空，  
[39:18] Kent Beck: 从空堆栈弹出时抛出异常。  
[39:20] Kent Beck: 好的，酷。  
[39:22] Kent Beck: 我按清单逐一完成，  
[39:24] Kent Beck: 勾选了所有选项。  
[39:26] Kent Beck: 我可能中途还遇到了一两个边界情况，  
[39:29] Kent Beck: 我也把它们勾掉了。  
[39:31] Kent Beck: 我想，焦虑去哪儿了？  
[39:33] Kent Beck: 它不见了。  
[39:35] Kent Beck: 这个方法有效。  
[39:37] Kent Beck: 我绝对肯定这行得通。  
[39:40] Kent Beck: 我想不出任何其他测试用例，  
[39:43] Kent Beck: 会通不过。  
[39:46] Kent Beck: 如果我有一丝一毫的担心，  
[39:49] Kent Beck: 我就输入下一个测试用例，然后我就不担心了。  
[39:52] Kent Beck: 哦，我的天哪。  
[39:54] Kent Beck: 这改变了我对编程的情感体验。  
[39:56] Gergely Orosz: 我从未听过这种观点，  
[40:02] Gergely Orosz: 尽管我能感同身受。  
[40:04] Gergely Orosz: 比如，我记得当我们团队做TDD的时候，  
[40:07] Gergely Orosz: 我们是在做那些我们不确定、不清楚的事情时做的。  
[40:11] Gergely Orosz: 通过先写测试，我们必须明确规定，  
[40:16] Gergely Orosz: 我们必须清楚，而且那都是些有很多边缘情况的事情。  
[40:20] Gergely Orosz: 但直到我们现在谈话，我才意识到这一点。  
[40:23] Kent Beck: 你也可以为TDD提出技术性的论点，  
[40:29] Kent Beck: 关于缺陷密度，  
[40:33] Kent Beck: 关于你如何快速得到API选择的反馈，  
[40:36] Kent Beck: 关于它如何促进实现设计演进。  
[40:41] Kent Beck: 当你有一系列测试的时候，  
[40:47] Kent Beck: 我……我明白……是的，我们可以理性地讨论所有这些。  
[40:49] Kent Beck: 但仅仅是……在抗焦虑药物上省下的钱，  
[40:55] Kent Beck: 本身就值了。  
[41:01] Narrator: 本集由Augment Code赞助播出。  
[41:02] Narrator: 如果你是一名专业的软件工程师，凭感觉是行不通的。  
[41:06] Narrator: Augment Code是为真正的工程团队打造的AI助手。  
[41:10] Narrator: 它会摄取你的整个仓库——数百万行代码，数万个文件——所以每个建议都能切中要害，让你保持流畅。  
[41:13] Narrator: 使用Augment的新远程代理，  
[41:20] Narrator: 你可以并行处理任务，比如修复bug、开发功能和重构，  
[41:23] Narrator: 然后关上笔记本，回来时就能看到准备好审查的拉取请求。  
[41:26] Narrator: 在其他工具停滞的地方，  
[41:29] Narrator: Augment Code飞速前进。  
[41:31] Narrator: Augment Code从不训练或出售你的代码，  
[41:33] Narrator: 所以你团队的知识产权仍然是你的。  
[41:36] Narrator: 你也不需要更换工具链。  
[41:38] Narrator: 继续使用VSCode, JetBrains, Android Studio甚至Vim。  
[41:40] Narrator: 不要因为感觉好就雇佣一个AI，  
[41:43] Narrator: 要选择那个最了解你和你代码库的代理。  
[41:45] Narrator: 在augmentcode.com/pragmatic开始你的14天免费试用。  
[41:48] Gergely Orosz: 我真的很享受和Kent的这次交流。  
[41:55] Gergely Orosz: 看到这些AI工具能让编程变得更有趣，  
[41:57] Gergely Orosz: 即使是对一个编程数十年的资深人士来说，也让我备受鼓舞。  
[42:01] Narrator: 你可以在Kent的定期通讯《Tidy First》中读到更多关于他近况的内容，  
[25:02] Narrator: 链接在下方的节目说明中。  
[25:07] Gergely Orosz: 要深入了解Facebook的工程文化，  
[25:09] Gergely Orosz: 以及为什么Scrum和Agile（大写的A）在大型科技公司和初创公司中不再那么适用，  
[25:12] Gergely Orosz: 请查看The Pragmatic Engineer的深度文章，链接也在节目说明中。  
[25:17] Narrator: 如果你喜欢这个播客，请在你最喜欢的播客平台和YouTube上订阅。  
[25:21] Narrator: 这有助于更多人发现这个播客，  
[25:25] Narrator: 如果你能留下评分，将不胜感激。  
[25:28] Gergely Orosz: 感谢收听，我们下期再见。  
[25:30]

---

