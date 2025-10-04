
学者的学术产出质量和影响力
## The quality and impact of a scholar's academic output


拓展 h指数计算器

这个计算器可以用来计算作者或来源的h指数。

h指数(h-index)反映一个学者的学术产出质量和影响力。一个学者的h指数是指他至少有h篇论文被引用了至少h次。 

例如,h指数为20的学者,表示他有20篇论文每篇被引用了至少20次。

## 计算方法

可以针对单个作者或某个来源计算h指数,也可以选择计算一定年限内的指标。
显示每个作者的姓名、h指数、g指数、m指数、总被引量、论文数量、发表起始年份。

```R
# 计算所有作者最近50年内的h指数示例代码:
Hindex(M, elements = dominance(BA)$Author, years=50)$H %>% arrange(desc(h_index)) 
```
- 
-
- 使用`Hindex()`函数计算h指数, 


- elements 参数指定作者名称
- years参数指定计算年限  
- 使用管道操作符%>%将结果传给arrange()函数
- arrange()降序排列h指数


## 计算学者学术产出质量和影响力

这个R代码用于计算学者的h指数和支配排名,反映学术产出的质量和影响力。

首先加载必要的R包:

- magrittr 提供管道操作符'%>%',可以提高代码可读性
- bibliometrix提供计算h指数等指标的函数

Authors' dominance ranking (作者支配排名计算器)  
使用`dominance`函数可以从 M (papers dataframe )中提取 Authors 信息,  得到尖端 Authors 的列表。

```R
# 可以设置参数`k`来指定想要查看的顶尖作者的人数(默认为前10位)
dominance(BA, k)$Author

# RESULTS: 
"CONDINO S"      "FERRARI V"      "NAVAB N"        "DE PAOLIS LT"   "KALKOFEN D"     "BILLINGHURST M"      "CUTOLO F"       "KLINKER G"      "THOMAS BH"      "SCHMALSTIEG D" 
```

接下来计算每个作者过去50年的h指数:

```R
Hindex(M, elements = dominance(BA)$Author, years=50)$H
```

- Hindex() 函数计算h指数, 反映一个学者的学术产出质量和影响力 (-- `Hindex: h-index calculation in bibliometrix: Comprehensive Science Mapping Analysis` [rdrr](https://rdrr.io/cran/bibliometrix/man/Hindex.html))
- years=50 表示计算过去50年的数据
- $H取出结果中的h指数列

最后用arrange()按h指数降序排列:

```R
#  `magrittr` 包提供了管道操作符,可以用来提高R代码的可读性。'%>%'符号可以把左侧的值管道传递给右侧的函数,避免了中间变量的定义。
%>% arrange(desc(h_index))
``` 

这样就得到了作者的h指数支配排名。
支配排名可以反映学者的学术影响力。h指数越高表示学术产出质量和影响力越大。

| Element        | h\_index | g\_index |  m\_index |   TC |  NP | PY\_start |
|:---------------|---------:|---------:|----------:|-----:|----:|----------:|
| SCHMALSTIEG D  |       15 |       23 | 0.6250000 |  627 |  23 |      2001 |
| BILLINGHURST M |       13 |       32 | 0.5909091 | 1092 |  32 |      2003 |
| NAVAB N        |       11 |       16 | 0.5789474 |  342 |  16 |      2006 |
| FERRARI V      |       10 |       14 | 0.9090909 |  434 |  14 |      2014 |
| CUTOLO F       |        9 |       11 | 1.0000000 |  363 |  11 |      2016 |
(*Table above: Dominance ranking Authors*)
- h指数:学术影响力和出版质量
- g指数:考虑引用分布  
- m指数:研究者产出率
- TC:总被引用次数
- NP:论文数量
- PY_start:发表开始年份
 

Hindex()函数还计算了g指数、m指数等指标:

- h指数:反映影响力和论文质量 
- g指数:考虑论文引用次数分布
- m指数:考虑作者生产力



Question1: This table shows h_index calculated from g_index, m_index, TC, NP and PY_start?  Question2: If So, In this table, we mainly look at the optimal value of h_index?



 
 
 
----

 SCHMALSTIEG D's start of production year is later than BILLINGHURST M's, and both his NP (number of papers) and TC (total citations) are lower than BILLINGHURST M's. Why then are his h_index and m_index higher than BILLINGHURST M's?


 Here is an analysis of why Schmalstieg D has higher h-index and m-index compared to Billinghurst M, despite starting his career later and having lower number of papers and citations:

The h-index reflects both productivity and citation impact of a scholar. It is based on the highest number of papers (h) that have at least h citations each. 

Despite having a later start year (2001 vs 2003), lower number of papers (NP) (23 vs 32) and lower total citations (TC) (627 vs 1092), Schmalstieg D has a higher h-index (15 vs 13). 

This suggests that Schmalstieg D has published more high-impact papers that are well-cited. So even though he has fewer papers overall, he has more papers that have 15+ citations, compared to Billinghurst M who has fewer papers with 13+ citations.

The m-index balances productivity and citation impact by dividing h-index by number of years since first publication. 

Schmalstieg D has a higher m-index (0.625 vs 0.590) because although he has been publishing for fewer years, his h-index is higher. This shows he has managed to publish higher impact work in a shorter time span compared to Billinghurst M.

In summary, despite fewer years of productivity, Schmalstieg D has focused on higher quality, high impact publications that garner more citations per paper. This results in higher h-index and m-index, reflecting greater citation impact and efficiency in producing influential work.




 这里是分析为什么尽管 Schmalstieg D 的职业生涯开始较晚,论文数量和引用量也较少,但他的h指数和m指数比Billinghurst M 更高的原因:

h指数反映了一个学者的产出量和引用影响力。它基于至少有h次引用的论文数量(h)。

尽管开始年份较晚(2001年对比2003年),论文数量较少(23篇对比32篇),总引用量也较少(627次对比1092次),但Schmalstieg D的h指数更高(15对比13)。

这表明尽管Schmalstieg D的论文总数较少,但他发表了更多高影响力的论文,这些论文引用量很高。所以和Billinghurst M相比,Schmalstieg D有更多达到15次以上引用的论文。

m指数通过将h指数除以发表第一篇论文后的年数,来平衡产出量和引用影响力。

尽管发表时间较短,但Schmalstieg D的h指数更高,因此他的m指数也更高(0.625对比0.590)。这显示了和Billinghurst M相比,Schmalstieg D在更短时间内发表了更高影响力的工作。
| 627 / 23  =  27.26
| ---: | ---: |
| 1092 / 32 = 34.15
| ---: | ---: |
总之,尽管学术生涯时间较短,但Schmalstieg D专注于高质量、高影响力的论文发表,每篇论文获得更多引用。这导致他的h指数和m指数更高,反映了他产出具有重大影响力的工作的更高效率。

###  针对整个文献数据库的所有作者计算h指数
```R
(h <- Hindex(M, elements="*", years=50)$H)
```
 
 与之前的分析方法相比,具有以下意义:

这种方法可以全面反映数据库中所有作者的学术影响力和产出质量。之前的分析可能只关注顶尖作者,而忽略了大多数普通作者的贡献。

计算所有作者的h指数,可以更全面地评估一个研究领域的整体学术状况。通过汇总所有作者的指标,可以反映出整个领域的发展趋势和活跃程度。


所以,相比仅关注顶尖作者,计算所有作者的h指数,可以更全面地反映一个研究领域的整体学术生态。这对评估领域发展趋势,发现新秀作者都很有意义。




h指数 - H指数
学术影响力 - academic influence
学术产出质量 - quality of academic output
学术生态 - academic ecology
发展趋势 - development trends
新秀作者 - emerging authors



##  Dominance ranking Authors
作者支配排名计算器使用指南
Authors' dominance ranking (作者支配排名计算器)是一个分析工具,用来评估科研领域内作者的影响力,基于他们的发表文章数量和质量。

使用`dominance`函数进行计算,可以设置参数`k`来指定想要查看的顶尖作者的人数(默认为前10位)
```R
data(scientometrics, package = "bibliometrixData")
results <- biblioAnalysis(scientometrics)
DF = dominance(results)
print(DF)
```


计算结果会展示在一个数据表格中,包含以下信息:

- **Author**: 作者名字
- **Dominance Factor**: 支配因子(影响力的度量)  
- **Tot Articles**: 发表的总文章数
- **Single Authored**: 独立作者文章数 
- **Multi Authored**: 合作文章数
- **First Authored**: 第一作者文章数
- **Rank by Articles**: 基于文章数量的排名
- **Rank by DF**: 基于支配因子的排名


 
# Logarithmic Relationships

- 对数关系是指两个变量随着增长在一起,但增长速率不同。
- 当一个变量变大时,另一个变量也会增加,但增长速度更慢。增长率在下降。
- 这与正相关关系不同,正相关关系中两个变量以相同速率增加。
- 例如,随着年龄增长,你的身高也会增加,但每年增加的量不相同。增长率随着时间推移而放缓。
- 所以对数关系意味着两个相关变量一起增加,但当一个变量变大时,另一个变量的增长速度更慢。
- 这与正相关不同,正相关中两个变量始终以相同速率增加。
- 城市人口随着城市规模缩小这样的负相关趋势不符合对数模型。对数关系具有放缓的正增长,而不是负增长。


# dominance
主要是分析作者
```R
function (results, k = 10) 
{
  if (!inherits(results, "bibliometrix")) {
    cat("\n argument \"results\" have to be an object of class \"bibliometrix\"\n")
    return(NA)
  }
  Nmf = table(results$FirstAuthors[results$nAUperPaper > 1])
  FA = names(Nmf)
  AU = names(results$Authors)
  Tot = Single = rep(NA, length(FA))
  for (i in 1:length(FA)) {
    Single[i] = sum(results$FirstAuthors[results$nAUperPaper == 
      1] == FA[i])
    Tot[i] = results$Authors[FA[i] == AU]
  }
  Dominance = Nmf/(Tot - Single)
  D = data.frame(Author = FA, `Dominance Factor` = as.numeric(Dominance), 
    Articles = Tot, `Single-Authored` = Single, `Multi-Authored` = Tot - 
      Single, `First-Author` = as.numeric(Nmf))
  D = D[order(-D[, 3]), ]
  D = D[1:k, ]
  D$RankbyArticles = rank(-D$Articles, ties.method = "min")
  D = D[order(-D$Dominance.Factor), ]
  D$RankDF = rank(-D$Dominance.Factor, ties.method = "min")
  names(D) = c("Author", "Dominance Factor", "Tot Articles", 
    "Single-Authored", "Multi-Authored", "First-Authored", 
    "Rank by Articles", "Rank by DF")
  row.names(D) = 1:k
  return(D)
}
```


## H-index

(-- `bibliometrix/R/Hindex.R at 2f2c03b9bc0068992af66940a6e9399935b5137a · massimoaria/bibliometrix` [github](https://github.com/massimoaria/bibliometrix/blob/2f2c03b9bc0068992af66940a6e9399935b5137a/R/Hindex.R#L27))

```R
#' h-index calculation
#'
#' It calculates the authors' h-index and its variants.
#'
#' @param M is a bibliographic data frame obtained by the converting function \code{\link{convert2df}}.
#'        It is a data matrix with cases corresponding to manuscripts and variables to Field Tag in the original SCOPUS and Clarivate Analytics WoS file.
#' @param field is character. It can be equal to c("author", "source"). field indicates if H-index have to be calculated for a list of authors or for a list of sources. Default
#' value is \code{field = "author"}.
#' @param elements is a character vector. It contains the authors' names list or the source list for which you want to calculate the H-index. When the field is
#' "author", the argument has the form C("SURNAME1 N","SURNAME2 N",...), in other words, for each author: surname and initials separated by one blank space. If elements=NULL, the function calculates impact indices for all elements contained in the data frame.
#' i.e for the authors SEMPRONIO TIZIO CAIO and ARIA MASSIMO \code{elements} argument is \code{elements = c("SEMPRONIO TC", "ARIA M")}.
#' @param sep is the field separator character. This character separates authors in each string of AU column of the bibliographic data frame. The default is \code{sep = ";"}.
#' @param years is a integer. It indicates the number of years to consider for Hindex calculation. Default is Inf.
#' @return an object of \code{class} "list". It contains two elements: H is a data frame with h-index, g-index and m-index for each author; CitationList is a list with the bibliographic collection for each author.
#'
```

---


 H指数主要是围绕作者的分析。如果我想分析国家,应该使用其他的函数。

例如,可以考虑使用“国家科技论文数量”或“国家高被引论文数量”来反映一个国家的科研产出与影响力。

另外,类似“国际合作论文数量”也可以反映一个国家与国际科研界的融合程度。此外,“论文引用次数”“专利数量”“国家科研投入与产出比”等指标都可以用来评估国家科技创新能力。

需要注意的是,要全面评估一个国家的科技实力,不应该只看某一个指标,而要综合考虑各方面的因素,比如科研投入、人才培养、科研环境、政策支持等等。单一的指标都有其局限性,只有多角度评估,才能得出较为准确的结果。

---
 这里是关于计算h指数及其变体的函数。

这个函数可以计算作者的h指数及其相关变体。

M是一个文献数据框,它是根据SCOPUS和Clarivate Analytics WoS文件转换而来的,每一行代表一篇论文,列代表字段标签。

field表示要计算h指数的对象,可以是“author”(作者)或“source”(刊物)。默认是“author”。 

elements是一个字符向量,包含要计算h指数的作者姓名列表或刊物列表。如果field是“author”,则元素的格式应该是“姓 名首字母”的形式,如“张 San”。如果elements为空,则会为数据框中的所有元素计算指标。

sep是作者分隔符,默认是“;”。

years是一个整数,表示计算h指数时考虑的年限。默认是Inf。

返回一个列表,包含两个元素:H是每个作者的h指数、g指数和m指数的数据框;CitationList 是每个作者的文献收集列表。
