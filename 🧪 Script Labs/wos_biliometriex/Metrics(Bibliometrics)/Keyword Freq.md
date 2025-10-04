---
title: Keyword Analysis
metrics:
  - Most frequent Author Keywords (DE) 
  - Keywords Plus (ID)
level_of_analysis: Documents
unit_of_analysis: 
  - Keywords Plus (ID)
  - Author Keywords (DE)
bibliometric_technique:
  - Co-words
statistical_technique:
  - Thematic mapping
  - Thematic evolution
structure:
  - Conceptual
---
[[Bibliometrix]] [[Metric]]
  
Content related to keyword analysis and trends. 

在Bibliometrix 的不同类型的分析中, 例如 Coupling Map,   中需要从分析中排除的作者关键词。excludeKW参数是用来排除分析中不想包含关键词。因为某些关键词在该分析中太过通用，不利于区分不同研究间的差别。
例如 keywordAssoc 中的 excludeKW. (-- `keywordAssoc: ID and DE keyword associations in bibliometrix: Comprehensive Science Mapping Analysis` [rdrr](https://rdrr.io/cran/bibliometrix/man/keywordAssoc.html))

## keywordAssoc?

(-- `keywordAssoc: ID and DE keyword associations in bibliometrix: Comprehensive Science Mapping Analysis` [rdrr](https://rdrr.io/cran/bibliometrix/man/keywordAssoc.html))
`keywordAssoc`函数是R编程环境中的一个函数，它用于分析和关联文献数据库中的关键词。下面是对该函数功能的解释：

**功能描述：**

该函数的目的是将作者指定的关键词与"关键词加"(即Keyword Plus)进行关联。"关键词加"是一套由数据库如SCOPUS和Clarivate Analytics's WoS（Web of Science）通过算法生成的关键词，这些关键词(通常是出现频率高的词)为文献之间的关系建模提供了额外信息。`keywordAssoc`函数主要用于将原始的文献数据集中的作者关键词与这些扩展关键词进行关联。

**使用方法：**

要使用此函数，您需要提供以下参数：

- `M`：一个由`convert2df`函数转换得到的文献数据框（data frame）。它是一个数据矩阵，行对应着稿件（文献），列对应着原始SCOPUS或Clarivate Analytics WoS文件中的字段标签。
- `sep`：字段分隔符字符。该字符用于在文献数据框的ID和DE列中的每个字符串内部分隔关键词。默认是`";"`。
- `n`：一个整数，它指定了需要将多少个作者关键词与每个扩展关键词相关联。默认是`10`。
- `excludeKW`：一个字符向量，包含了需要从分析中排除的作者关键词。excludeKW参数是用来排除分析中不想包含的作者关键词。这可能是因为某些关键词对于研究主题来说是不相关的，或者它们太过通用，不利于区分不同研究间的差别。

**返回值：**

函数执行后会返回一个“list”类的对象。

**相关函数：**

- `convert2df`：用于导入并将WoS或SCOPUS出口文件转换为文献数据框。
- `biblioAnalysis`：用于进行文献计量分析的函数。
- `summary`：用于获取结果概述的函数。
- `plot`：用于绘制结果有用图表的函数。

**示例：**

文档中提供了使用`keywordAssoc`函数的例子代码，演示了如何加载一个数据集，执行关键词关联，并查看前10个扩展关键词以及与第一个扩展关键词相关联的前10个作者关键词的列表。



## [[Co-word]] 



## Thematic mapping

(-- `thematicEvolution: Perform a Thematic Evolution Analysis in bibliometrix: Comprehensive Science Mapping Analysis` [rdrr](https://rdrr.io/cran/bibliometrix/man/thematicEvolution.html))
```R
thematicEvolution(
  M,
  field = "ID",
  years,
  n = 250,
  minFreq = 2,
  size = 0.5,
  ngrams = 1,
  stemming = FALSE,
  n.labels = 1,
  repel = TRUE,
  remove.terms = NULL,
  synonyms = NULL,
  cluster = "walktrap"
)
```


专题地图是一种用于显示有关特定主题或主题的地图。这些主题可以使用不同的方式呈现， choropleth maps (color-coded by value 色彩分布图), heat maps(热力图), chart-based maps(图表), and dot density maps(点图). 专题地图在地理信息系统（GIS）和地理科学中广泛使用，用于可视化各种数据，例如人口密度、健康问题等【4】。这些地图有助于人们更好地理解特定主题或问题的分布和关联性，对于研究和决策制定具有重要意义。


