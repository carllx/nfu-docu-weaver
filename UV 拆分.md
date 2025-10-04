拓扑 => UV , 动画绑定服务

## 贴图原理
![](https://i.imgur.com/6qduQYR.png)

#### 不规则的球体
![](https://upload.wikimedia.org/wikipedia/commons/a/ad/Ptolemy_World_Map.jpg)
Early world maps - Ptolemy (c. 150) 托勒密, 奠定了中世纪以来
```
Primary (原形) 比例  
Seondary (副形) 构成元素 es:肌肉  
Tertiary (第三形, 表面细节) 可信度, [[超自然现象|超自然]]
```

人类通过大航海从  道路河流山川(Seondary / Tertiary )的探索 总结出了Primary



颜色, 图案是容器的外观, 在CAD设计普及之前, 商品靠改变颜色和外观刺激消费.

![](https://static.dezeen.com/uploads/2021/09/arc-de-triomphe-wrapped-christo-and-jeanne-claude_dezeen_2364_col_4.jpg)
[[Christo and Jeanne-Claude]]
 包裹设计 隔离感性刺激 ,  
 市场,  推出新商品, 创造新消费(1970 消费主义), 扩大物质需求, 我们无法慢下来思考

## 手动

目标
细节处保证像素
修复扭曲
方法
抓取Grab 移动与 圆滑smooth
pin 调整法

--`|Working with Subdiv Off/ 26 Essential Blender Tips for UV Unwrapping Subdivision Surfaces` [youtube](https://youtu.be/8qv6DbWr6zw?t=236)
![|200](https://i.ytimg.com/vi/8qv6DbWr6zw/hqdefault.jpg)
展开 `unwarp`: U
标记缝合边 `Seam`: Ctrl-E > 标记为缝合边
UV Editor > new Image > Grid
![](https://i.imgur.com/mNRHGkf.png)


锁定`Pin`: P
对齐 `Align `: select 2 points, and S (YX) 0
![](https://i.imgur.com/722GyGw.png)
![](https://i.imgur.com/iJAEF9B.png)

Displace overlap aera
![|200](https://i.imgur.com/rUS4KiN.png)
![](https://i.imgur.com/uSciVMj.png)

缝合不小心 拆散的 uv 
选择点 Alt - V
![](https://i.imgur.com/a4wgnja.png)

### Packing 
Island margins, 需要为Bake 考虑



### UnWarp Margin 
Island margins
256 = 2px
512 = 4px
1024 = 8px
2048 = 16px
![](https://i.imgur.com/LhfAFTX.png)
--`| UV Unwrapping - Island Margins - What Number to Use - Blender 3` [youtube](https://youtu.be/vMuwJ6v9SmI?t=151)[youtube playlist](https://www.youtube.com/playlist?list=PLn3ukorJv4vve0s-cq8VWS4jRQCdWSU3N)




## addon 
UV A工具介绍--`|UV Toolkit/ Blender Addons for UV unwrapping and UV packing` [youtube](https://youtu.be/eu8r_DDJqhU?t=284)


### TexTools
--`|SavMartin/TexTools-Blender: TexTools is a UV and Texture tool set for 3dsMax created several years ago. This open repository will port in time several of the UV tools to Blender in python. For more information on TexTool's tools and features see: http://renderhjs.net/textools/blender` [github](https://github.com/SavMartin/TexTools-Blender)

--`|Textools and MagicUV addons/ Organic Unwrapping in Blender | Full Class + Free Gift` [youtube](https://youtu.be/hyzLjXw8RFk?t=2686)

--`|可以 Baking 的 uv 工具【TexTools使い方】UV展開とベイクの時短アドオン【Blender】` [youtube](https://youtu.be/FnecJv55WeE?t=458)

