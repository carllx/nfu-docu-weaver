用图谱的方法寻找学科发展的规律
在寻找研究领域的[[Gap(空白)]](开题,开篇) 时缩小阅读范围 --`|如何利用Citespace 快速进行文献的梳理找到Gap? - 知乎` [zhihu](https://zhuanlan.zhihu.com/p/270625897)

教程: 
陈超美(工具作者)讲解系列 --`|0 前言 -Overview` [bilibili](https://www.bilibili.com/video/BV1ak4y1C7HF?p=2&t=168)
--`|入门到精通CiteSpace 写文章发论文走起` [bilibili](https://www.bilibili.com/video/BV1M64y1R7A9/?t=583)
观看6分钟, 需要添加公众号观看完整课程 --`|简说者的个人主页 - 喜马拉雅` [ximalaya](https://www.ximalaya.com/zhubo/5249279)
--`|(4条消息) citespace_smileLLZ的博客-CSDN博客` [csdn](https://blog.csdn.net/weixin_43400774/category_9424799.html)
- Citespace（一）&采集数据&安装和使用
- CiteSpace（二）&文献共被引和耦合分析
- Citespace（三）&关键词共现分析和聚类分析


### Node Type
取决于分析目的
--`|6 CiteSpace的安装和功能介绍` [bilibili](https://www.bilibili.com/video/BV1ak4y1C7HF?p=8&t=16)
- 合作网络分析: 作者, 机构, 国家
- 贡献网络分析;  Term (术语), keyword, Category ^988805
- 共被引分析: Cited Reference, Cite Author(注意,通常对第一作者分析), Cited Journal (被引期刊)
- 文献耦合: Paper
- 基金分析: Grant, (目前引用质量不精确, 使用比较少)

### Selection Criteria 文献选择基准
过滤出更有价值的文献, 获得结构更清晰的演进分析
--`|6 CiteSpace的安装和功能介绍` [bilibili](https://www.bilibili.com/video/BV1ak4y1C7HF/?p=8&t=18)
- Top N(%) , 每个时间切片被引用前N(%)的文献
- G-Index, g指数
- [x] Thresholds, 阈值?
- Citations, 根据引用根部筛选--`|6 CiteSpace的安装和功能介绍` [bilibili](https://www.bilibili.com/video/BV1ak4y1C7HF/?p=8&t=19)
- Usage180, 近半年使用情况, 有助于预测
- Usage 2013, 自2013使用情况, 有助于预测

### Text Processing
--`|6 CiteSpace的安装和功能介绍` [bilibili](https://www.bilibili.com/video/BV1ak4y1C7HF/?p=8&t=21)
注意:
- Keywords Plus, 是Citespace 根据我们论文的主题自动添加的关键词, 与作者无关
- Term Type , 结合 Node Type   [[CiteSpace_文献分析工具#^988805]] 的 term一起使用. --`|6 CiteSpace的安装和功能介绍` [bilibili](https://www.bilibili.com/video/BV1ak4y1C7HF/?p=8&t=22)

### Link
推荐使用默认 ,Cosine 在计量学中使用更多
贡献矩阵中, 某些文献出现频次大小形象结果.
--`|6 CiteSpace的安装和功能介绍` [bilibili](https://www.bilibili.com/video/BV1ak4y1C7HF/?p=8&t=22)


### 节点样式选择


#### 时间线
![](https://pic2.zhimg.com/80/v2-4052a7baabbbdd7e4732d306b4788e6d_1440w.webp)
将相同聚类放在一个时间轴上, 
- 研究领域大佬们都在做什么
- 分析演进过程
- 该聚类在什么时候出现核心文献
- 连线, 发现只是关联强度




### 数据采集
数据源

![](https://i.imgur.com/2Fg1e62.jpg)
WOS --`|7 CiteSpace数据采集及预处理` [bilibili](https://www.bilibili.com/video/BV1ak4y1C7HF/?p=9&t=10)
Scopus --`|7 CiteSpace数据采集及预处理` [bilibili](https://www.bilibili.com/video/BV1ak4y1C7HF/?p=9&t=21)

CSSCI(收费) --`|7 CiteSpace数据采集及预处理` [bilibili](https://www.bilibili.com/video/BV1ak4y1C7HF/?p=9&t=43)
CSCD --`|7 CiteSpace数据采集及预处理` [bilibili](https://www.bilibili.com/video/BV1ak4y1C7HF/?p=9&t=50)
