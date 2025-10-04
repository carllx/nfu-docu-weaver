Built-in Render Pipeline
Universal Render Pipeline
High Definition Render Pipeline

### In the Unity Editor

### Unity Editor 设置

1. 打开 Edit > Project Settings > Graphics 进入图形设置窗口
2. 在项目文件夹中找到要使用的 Render Pipeline Asset
3. 将 Render Pipeline Asset 拖到 Scriptable Render Pipeline Setting 栏，设为默认渲染管线
4. 如需为不同质量等级设置不同渲染管线：打开 Edit > Project Settings > Quality
5. 在各质量等级的 Render Pipeline 栏中拖入对应的 Render Pipeline Asset


(Source:  [unity3d.com: Unity - Manual: Switching render pipelines](https://docs.unity3d.com/2020.1/Documentation/Manual/srp-setting-render-pipeline-asset.html))

![|200](https://i.ytimg.com/vi/KpTK-OraZ-g/hqdefault.jpg)
(Source:  [youtube.com: How to convert to the Universal Render Pipeline in Unity (Tutorial) by [[SyntyStudios]]](https://youtu.be/KpTK-OraZ-g?t=1)[youtube playlist](https://www.youtube.comhttps://www.youtube.com/redirect?event=infocard&redir_token=QUFFLUhqbjhVV1diT2VJblBndXZfYjhtZVVVYV91SERJd3xBQ3Jtc0tuc05RRDkxNFhpZ1YyMGxjdEE2X0pOYkFLb2ZCN0p4VWVvR0dMRTVJSmlGTTVIdjM3a2oyOWFxbWU2Nkc4X0xTN0dtM3g4WWJkWEFPaFZyaEhaWW9CMWpYZjczcy1yOU5nR1luR1NUZkR6eUMwWlRkZw&q=https%3A%2F%2Fbit.ly%2Fyt-Synty-Discord))



## Scriptable Render Pipeline Setting

"Scriptable Render Pipeline Settings"是Unity引擎中用于设置渲染管线的一项设置。它允许开发者选择并配置所使用的渲染管线,如:
- Universal Render Pipeline(URP)、
- High Definition 
- Render Pipeline(HDRP)
- 或者自定义的渲染管线。




# Shading models in Universal Render Pipeline

Unity 游戏引擎中的 Universal Render Pipeline (URP) 着色模型
URP 提供了四种不同着色模型决定了游戏中物体看起来的样子, 选择哪种着色模型，主要取决于你想要什么样的游戏风格，以及你的目标设备的性能如何。

1. Physically Based Shading (物理基础着色)
追求完全的真实感, 它模仿现实世界中光线的行为，比如金属表面和玻璃表面对光的反射是不一样的。这种方式能让游戏看起来非常逼真，但需要较强的电脑配置。

2. Simple Shading (简单着色)
不追求完全的真实感，适合卡通风格的游戏，而且在性能较弱的设备上也能流畅运行。

3. Baked Lit Shading (烘焙光照着色)
这就像提前把光影画好在物体上。游戏运行时不需要实时计算光照，特别适合手机游戏。

4. No Lighting (无光照着色)
没有任何光影效果。虽然看起来比较简单，但运行速度最快。