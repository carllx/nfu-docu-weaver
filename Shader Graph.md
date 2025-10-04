---
link: https://www.notion.so/Shader-Graph-146b882f415f4507a2adfef5abd1e05e
notionID: 146b882f-415f-4507-a2ad-fef5abd1e05e
---
# Shader Graph
Practice: [[Shader Graph -  Unity 中创建交互式 Vertex Displacement]]
官方系列: [Everything you need to know about Shader Graph](https://www.youtube.com/playlist?list=PLX2vGYjWbI0Q5jvaFjltG_bVd-q01ZZK4)



Shader Graph 创建不同管道的渲染
--`|Feature overview/ Shader Graph: Create for both URP and HDRP | Unite Now 2020` [youtube](https://www.youtube.com/watch?v=Ghi_gT_rc4c&list=PLX2vGYjWbI0Q5jvaFjltG_bVd-q01ZZK4&index=2&t=2s?t=115)[youtube playlist](https://www.youtube.com/playlist?list=PLX2vGYjWbI0QRLkvupULwSZCPkLyHs-UX)


## Render Pipeline
- [[SRP]] , Scriptable Render Pipeline
- [[URP]] , Universal Render Pipeline | [[LWRP]] , Lightweight Render Pipeline(轻量级/通用渲染管线) 已经改名为“通用渲染管线” [[URP]] 
- [[HDRP]] , High Definition Render Pipeline(高清渲染管线)
- [[NPR]], [[Non-Photorealistic Rendering]]
- [[BRP]]  built-in render pipeline, (BRP is not recommended in the future)
--`URP初试 - 简书` [jianshu](https://www.jianshu.com/p/3a2cfa62d2f7)
--`Unity SRP URP HDRP 的区别_MakChiKin的博客-CSDN博客_srp和urp` [csdn](https://blog.csdn.net/weixin_41622043/article/details/107623694)


## Install URP package Universal RP
> Install: Window > Package Manager> Unity Registry > Universal RP
> Window > Package Manager>Window > Package Manager>Shadergraph

![](https://i.imgur.com/AwzzBjL.png)


Window > Package Manager> Shadergraph
Package Manager> Render - pipelines.lightweight

Project > Create > Rendering > Lightweight Render Pipelines Asset, Rename `LightWeightRenderPipeline_URP`
Project > Assets > `Assets/Scenes/LightWeightRenderPipeline_URP.asset` 拖动到 Edit > Project settings > Graphics > Graphics's Field

Create Shader Graph
Project > Create > Shader PBR Graph, Rename `VertDisplacement` 
Assets > Create > Material, Rename `DisplacementSphereMat`