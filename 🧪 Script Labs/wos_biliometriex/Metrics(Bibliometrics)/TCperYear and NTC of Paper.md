Normalized Total Citations(NTC)
```R
#  Total Citation Distribution
if ("TC" %in% Tags){
  TC=as.numeric(M$TC)
  CurrentYear=as.numeric(format(Sys.Date(),"%Y"))
  TCperYear=TC/(CurrentYear-PY+1)
  if (!("DI" %in% names(M))) M$DI <- ""
  MostCitedPapers <- data.frame(M$SR,M$DI,TC,TCperYear,PY) %>%
    group_by(.data$PY) %>%
    mutate(NTC = .data$TC/mean(.data$TC)) %>%
    ungroup() %>% 
    select(-.data$PY) %>%
    arrange(desc(.data$TC)) %>%
    as.data.frame()

  names(MostCitedPapers)=c("Paper         ","DOI","TC","TCperYear","NTC")
}
```



Q: What is the difference in meaning between '**TCperYear**' and '**NTC**' in the table? Explain what unique significance each of them has.

A:一个论文想要真正影响学术,不仅需要当年引用量大,也需要长期持续被引用。TCperYear反映长期影响力,NTC反映当年影响力。

-  TCperYear 表示每年的平均被引用次数,反映论文的长期影响力。
- NTC 表示论文被引用次数相对同年论文平均被引用次数的比例,反映论文的当年影响力。


Q: For example, the 'NTC' of 'CHEN P, 2017, LECT N EDUC TECHNOL' is higher than 'FRAGA-LAMAS P, 2018, IEEE ACCESS', but the 'TCperYear'  of  'CHEN P, 2017, LECT N EDUC TECHNOL'  is lower than 'FRAGA-LAMAS P, 2018, IEEE ACCESS'? 

|   |   |   |   |   |
|---|---|---|---|---|
||**Paper**|**TC**|**TCperYear**|**NTC**|
|**9**|CHEN P, 2017, LECT N EDUC TECHNOL|200|25.0|13.67|
|**8**|FRAGA-LAMAS P, 2018, IEEE ACCESS|211|30.1|12.84|


A: CHEN P, 2017论文当年的影响力较大,但FRAGA-LAMAS P, 2018论文的长期影响力更强。CHEN P, 2017论文的总被引用次数(TC)相对较低,但同年论文的平均被引用次数也较低,所以它的当年影响力较大。FRAGA-LAMAS P, 2018论文总被引用次数较高,虽然同年论文平均被引用次数也较高,但它的长期被引用次数增长较快,所以长期影响力更强。

 
 NTC stands for Normalized Total Citations. It is a metric that measures the total number of citations received by a paper, normalized by the average number of citations received by all papers published in the same year and field. 

Some key points about NTC:

- It accounts for differences in citation patterns across fields and publication years. This allows for more fair comparisons between papers.

- A higher NTC means the paper has received more citations than average for papers in its field and publication year. An NTC of 2 means the paper has received twice as many citations as expected.

- It reflects the immediate impact or influence of the paper around its publication time. Papers with high NTC made a big splash when first published.

- The full name is Normalized Total Citations. It may also be referred to as Relative Citations or Category Normalized Citation Impact.

- NTC is one of several relative citation metrics used in bibliometrics along with Relative Citation Ratio (RCR), Percentile Rank, etc. 

- It is often used to quantify the influence or importance of academic papers based on citation counts. However, citations are just one measure of impact.
