
 [[Time Perception]]
# Shanpe Emotion by motion

## UX 's Metods
UI/UX是用户界面和用户体验的缩写¹。UI设计的重点是产品的外观和感觉，而UX设计的重点是产品如何工作和满足用户的需求²。UI/UX设计师使用缓和功能来创建自然、流畅和真实的动画，并唤起用户的不同情绪²。

缓和功能并不是为UI/UX创建动画的唯一方法。还有其他替代方法可以产生更真实或动态的效果，Spring animations or Physics-based animations(基于物理)。这些动画使用物理力量的数学模型，如重力、摩擦力和弹性，来模拟物体在现实生活中的运动方式⁴。它们可以为那些期望从他们的行动中得到反馈的用户创造更有吸引力和响应性的互动⁴。

然而，缓和函数仍然被广泛使用，因为它们比基于物理学的动画更容易实现和控制。它们还为不同类型的过渡和效果⁵提供了更多的灵活性和多样性。缓和函数还可以与其他动画属性相结合，如持续时间、延迟和方向，以创建更复杂和更有表现力的动画⁵。

Source: 

(1) What Is UI/UX? - Orases - Orases - Custom Software Development Company. https://orases.com/what-is-ui-ux/ Accessed 3/3/2023.
(2) The Difference between UX & UI Design: 9 Things to Know. https://www.netsolutions.com/insights/ux-vs-ui-design/ Accessed 3/3/2023.
(3) How I Transitioned from Ease to Spring Animations - Medium. https://medium.com/kaliberinteractive/how-i-transitioned-from-ease-to-spring-animations-5a09eeca0325 Accessed 3/3/2023.
(4) Executing UX Animations: Duration and Motion Characteristics. https://www.nngroup.com/articles/animation-duration/ Accessed 3/3/2023.
(5) UI vs. UX Design: What’s the Difference? - Coursera. https://www.coursera.org/articles/ui-vs-ux-design Accessed 3/3/2023.
(6) UX vs. UI: What's the Difference? - HubSpot Blog | Marketing, Sales .... https://blog.hubspot.com/marketing/ux-vs-ui Accessed 3/3/2023.
为什么ui ux 都是用easing funtion? 还有什么其他选择?


当我们需要复制现实的时候使用 Physics-based animations, 当我们需要编造现实的时候, 是哟经Spring animations.

![150|](https://i.imgur.com/zALautb.png)
(-- `Download — blender.org` [blender](https://www.blender.org/download/))


## Easing Functions

Easing function(缓和函数)是一个数学公式，它规定了一个参数随时间变化的速度²。它可以通过修改 position, color, scale or rotation⁴ 等属性来创建逼真和流畅的动画⁴。例如，easing function 可以使一个物体弹跳、加速、减速或遵循一个弯曲的路径(curved path)³。

有许多类型的缓和函数，如线性( linear)、立方-贝塞尔(cubic-bezier)、阶梯(steps)等⁵。

(-- `Easing Functions Cheat Sheet` [easings](https://easings.net/))
![150|](https://i.imgur.com/CK7uFEM.png)

## How Easing Functions work and how they can influence user Emotions?

- Linear easing: (线性) 这个function为动画产生一个恒定的速度，这可能使它看起来很机械和无聊。它不会给用户带来任何预期或惊喜。它可能适合于简单或技术性的动画(simple or technical)，不需要太多关注或参与³。

- Ease-in easing: 这个function是缓慢地开始动画，然后加速，直到它到达终点。它可以为用户创造一种期待和好奇的感觉(anticipation and curiosity )，因为他们想知道接下来会发生什么。它可能适用于揭示新的内容或重要的或令人兴奋的功能²。

- Ease-out easing: 这个function是快速启动动画，然后减速，直到它到达终点。它可以为用户创造一种满足感和完成感(satisfaction and completion)，因为他们看到了他们的行动或互动的结果。它可能适用于关闭或隐藏不再需要或相关的内容或功能²。

- Ease-in-out easing: 这个function结合了ease-in and ease-out (缓进和缓出的)functions，通过缓慢地开始和结束动画，并在中间加速和减速来实现。它可以为用户创造一种平衡与和谐的感觉(balance and harmony)，因为他们看到了状态之间的平稳过渡。它可能适用于改变同样重要或有趣的观点或模式²。

- Bounce easing: 这个function使物体在其终点处弹跳，然后再安顿下来。它可以为用户创造一种有趣和好玩的感觉(fun and playfulness)，因为他们看到了一个活泼的动态运动。它可能适合于为一个不太严肃或正式的动画添加一些幽默或个性³。

- Elastic easing: 这个function使物体在到达终点之前像弹力带一样拉伸和收缩。它可以为用户创造一种紧张感(tension)和惊喜(surprise)，因为他们看到的是一种意外的、夸张的运动。它可能适合于为一个旨在吸引注意力或激起情感的动画增加一些戏剧性或强度³。



Source: 
(1) CSS Easing Functions Level 1 - W3. https://www.w3.org/TR/css-easing-1/ Accessed 3/3/2023.
(2) Understanding Easing Functions For CSS Animations And Transitions. https://www.smashingmagazine.com/2021/04/easing-functions-css-animations-transitions/ Accessed 3/3/2023.
(3) What is Emotional Design? | IxDF. https://www.interaction-design.org/literature/topics/emotional-design Accessed 3/3/2023.
(4) Easing Functions Cheat Sheet. https://easings.net/ Accessed 3/3/2023.
(5) Understanding Easing Functions For CSS Animations And Transitions. https://www.smashingmagazine.com/2021/04/easing-functions-css-animations-transitions/ Accessed 3/3/2023.
(6) Ease-y Breezy: A Primer on Easing Functions | CSS-Tricks. https://css-tricks.com/ease-y-breezy-a-primer-on-easing-functions/ Accessed 3/3/2023.


请给我一些例子, 能体现 物体应用不同的 easing function 对用户情感的影响


 [What Gives UI Animations Emotion?](https://valhead.com/2017/04/24/animation-emotion/ "Permanent Link to What Gives UI Animations Emotion?")，描述 [1944 年 Heider and Simmel 的研究](http://www.jstor.org/stable/1416950)
 (-- ` Heider and Simmel (1944) animation` [youtube](https://youtu.be/VTNmLt7QX8E?t=8))
![|200](https://i.ytimg.com/vi/VTNmLt7QX8E/hqdefault.jpg)

这篇文章讨论了人类如何倾向于将人类的特征赋予对象，甚至是简单的形状([[Anthropomorphism|拟人主义]])，以及如何将其用于设计用户界面。文章引用了1944年的一项研究，在这项研究中，学生们从电影中展示的简单形状中看到了情感和个性。这项研究表明，动画可以是情绪化的，并影响用户界面元素所传达的信息。文章建议要意识到这种倾向，并有意识地制作动画以适应设计。对更多细节感兴趣的人可以查阅该研究的全文。


> [!quote] “物体本无形, 上帝赋予了物体形式, 使它可见”.
>  我们看到的形, 往往被上帝 (或人类) 赋予的形式所覆盖
>  -- Plato's Timaeus

Socrates mentions that it is only through the intervention of the **divine craftsman** (who is often identified with God) that the formless substance is given shape and becomes visible⁸⁹. In Plato's Timaeus, the divine craftsman is also called **the demiurge**, which means **the creator** or **the maker** in ancient Greek⁵⁶. He says that the demiurge is a rational and benevolent being who imitates the eternal and perfect forms to create a harmonious and beautiful cosmos⁸⁹. He says that the demiurge "looked at everything that can be perceived by sight, and using them as models he filled his work with likenesses: likenesses of one thing existing in another" (Timaeus 37c).

Source: 
(1) Plato’s Timaeus (Stanford Encyclopedia of Philosophy). https://plato.stanford.edu/entries/plato-timaeus/ Accessed 3/3/2023.
(2) Plato: The Timaeus | Internet Encyclopedia of Philosophy. https://iep.utm.edu/timaeus/ Accessed 3/3/2023.
(3) Plato’s Timaeus Explains about God is “The Maker” - GraduateWay. https://graduateway.com/platos-timaeus/ Accessed 3/3/2023.
(4) Plato’s Timaeus: How Was the Cosmos Created?. https://www.thecollector.com/plato-timaeus-how-was-the-cosmos-created/ Accessed 3/3/2023.
(5) Substance - Stanford Encyclopedia of Philosophy. https://plato.stanford.edu/entries/substance/ Accessed 3/3/2023.
(6) Aristotle’s Metaphysics - Stanford Encyclopedia of Philosophy. https://plato.stanford.edu/entries/aristotle-metaphysics/ Accessed 3/3/2023.
(7) A Divine Craftsman Shapes All for the Good: Plato’s Realm of the Forms .... https://academic.oup.com/columbia-scholarship-online/book/23258/chapter/184180679 Accessed 3/3/2023.
(8) Plato’s Timaeus Explains about God is “The Maker” - GraduateWay. https://bing.com/search?q=Plato+divine+craftsman+Timaeus Accessed 3/3/2023.
(9) Plato's Timaeus (Stanford Encyclopedia of Philosophy) - Stanford University. https://meinong.stanford.edu/entries/plato-timaeus/ Accessed 3/3/2023.





[The power of robots with a face | Tony Belpaeme | TEDx](https://www.youtube.com/watch?v=8OVInlqTrME) 

>[!quote]
>“我们知道三角形不能有感觉，但这并不能阻止我们将它的运动解释为有感觉。 
>

演讲者讨论了人类的社会性，以及我们将类似人类的品质赋予非人类实体（包括机器）的倾向。他介绍了Pareidolia的概念(Concept of Pareidolia[^Pareidolia])，即我们在随机的模式中看到类似人类或动物的形状，并讨论了机器人如何因为没有脸而缺乏与人的社会交往。他建议，给机器人增加面孔可以提高它们在社会层面上与人类互动的能力。他展示了简单的机器人面孔的例子，并解释了它们如何使机器人在搜索和救援、清洁和包裹运送等任务中更有吸引力和效率。

[^Pareidolia]:Pareidolia是一种心理现象，大脑在随机或模糊的刺激中感知熟悉的模式或形状，如人脸，如云、树皮，甚至是抽象的图案。这是一种模式识别的形式，可以使人们看到有意义的图像或图案，而实际上并没有预期的意义或图案。这种现象被认为是大脑寻找和理解视觉信息的倾向的结果，它可以[[Conscious|有意识]]地和无意识地发生。人们在各种背景下观察到Pareidolia，包括艺术、宗教和流行文化。


![LINEAR_EASE.gif|300](https://help.figma.com/hc/article_attachments/360084136913/LINEAR_EASE.gif) 

### UV
各种UV 工具介绍--`|UV Toolkit/ Blender Addons for UV unwrapping and UV packing` [youtube](https://youtu.be/eu8r_DDJqhU?t=284)

[[3DReferenceMedia (video)参考工具开发]]