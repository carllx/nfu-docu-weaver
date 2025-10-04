 探讨了文献计量学中分析通讯作者所在国的意义。**SCP** (single country publications), **MCP** (multiple country publications), and **MCP ratio**  可以揭示研究合作模式。例如:
 - 高 MCP ratio意味着该国研究人员经常与国际合著者合作。
 - 而低 MCP ratio 暗示研究往往在同一国家内进行。
 - 随时间分析 SCP、MCP 和 MCP 比例可以揭示国内与国际合作的趋势。这些数据有助于理解一个国家的研究环境有多开放和协作。


MCP（多国合作出版物）是一个计量指标，用于表示与其他国家作者共同发表论文的数量。相反，SCP（单一国家出版物）则指同一国籍作者共同发表的论文数量。

对于大部分排名前20的国家而言，其MCP占总出版物的比例在20%至35%之间。但丹麦和瑞典这一比例接近50%，这表明这两个国家非常倾向于开展国际合作。

根据对R-loop研究的文献计量分析，在该领域相关的前20个国家中，MCP比率从6.7%到52.9%不等。==???具体来说，美国的MCP占比为20.8%，明显低于中国的32.0%。???==



```R
 Co=data.frame(Country=names(object$Countries[1:kk]), Articles=as.numeric(object$Countries)[1:kk],Freq=0)
  Co$Freq=as.numeric(Co[,2])/sum(object$Countries)
  Co=cbind(Co,object$CountryCollaboration[1:kk,2:3])
  Co$MCP_Ratio=Co$MCP/Co$Articles
  Co=format(Co,justify="left",digits=3)
```
(-- `bibliometrix/R/summary.bibliometrix.R at 2f2c03b9bc0068992af66940a6e9399935b5137a · massimoaria/bibliometrix` [github](https://github.com/massimoaria/bibliometrix/blob/2f2c03b9bc0068992af66940a6e9399935b5137a/R/summary.bibliometrix.R#L19))