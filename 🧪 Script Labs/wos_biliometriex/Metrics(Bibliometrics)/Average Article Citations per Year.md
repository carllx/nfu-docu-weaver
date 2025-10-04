---
aliases:
  - AnnualScientProd
  - Annual scientific production
  - AverArtCitperYear
  - Average Article Citations per Year
---
## 
- 是否  🔴  `MeanTCperYear` 远高于 🔵  `MeanTCperArt` 引用集中在个作者的文章上 

### AverArtCitperYear
AverArtCitperYear:每篇论文平均每年被引次数, 每篇论文每年获得的平均引用次数。这个指标反映了科学家的平均影响力。 
```R
data_year = rmap$AverArtCitperYear$data
data_year$MeanTCperYear: # Averge Articles Citations per Year
data_year$MeanTCperArt:  # Averge Total Citations per Year
data_year$N # Annual Scientific Production; == SUMMARY$AnnualProduction
```

## Sample Table(AR)

| Year|   N| MeanTCperArt| MeanTCperYear| CitableYears|
|----:|---:|------------:|-------------:|------------:|
| 1998|   1|   68.0000000|     2.6153846|           26|
| 1999|   4|   39.7500000|     1.5900000|           25|
| 2000|   4|    6.5000000|     0.2708333|           24|
| 2001|   5|   14.6000000|     0.6347826|           23|
| 2002|   9|   26.1111111|     1.1868687|           22|
| 2003|  17|   13.8235294|     0.6582633|           21|
| 2004|  12|   20.2500000|     1.0125000|           20|
| 2005|  16|   16.5625000|     0.8717105|           19|
| 2006|  23|    4.2608696|     0.2367150|           18|
| 2007|  29|   10.8275862|     0.6369168|           17|
| 2008|  34|   36.4411765|     2.2775735|           16|
| 2009|  38|   25.9736842|     1.7315789|           15|
| 2010|  19|   10.9473684|     0.7819549|           14|
| 2011|  49|   30.2857143|     2.3296703|           13|
| 2012|  73|   20.8767123|     1.7397260|           12|
| 2013| 107|   12.9065421|     1.1733220|           11|
| 2014| 110|   14.0454545|     1.4045455|           10|
| 2015| 128|   10.5703125|     1.1744792|            9|
| 2016| 123|    7.9024390|     0.9878049|            8|
| 2017| 139|   14.6258993|     2.0894142|            7|
| 2018| 190|   16.4315789|     2.7385965|            6|
| 2019| 239|   11.2426778|     2.2485356|            5|
| 2020| 193|    9.4041451|     2.3510363|            4|
| 2021| 173|    5.9942197|     1.9980732|            3|
| 2022| 180|    4.2111111|     2.1055556|            2|
| 2023|  85|    0.9294118|     0.9294118|            1|

- `Year` - 年份
- `N` - 该年份发表文章的作者数量
- `MeanTCperArt` - 平均每篇文章被引用次数,即该年份所有作者发表的文章的总被引用次数除以总发表文章数
- `MeanTCperYear` - 平均每年被引用次数,即该年份所有作者的文章总被引用次数除以作者人数
- `CitableYears` - 可被引用的年限,即从发表年份到2004年的年份跨度


Write in R language to perform the following tasks

- \ud83d\udcdd Delete CitableYears column and output csv as archive data
- \ud83d\udd27 Rescale 'MeanTCperYear', 'MeanTCperArt', 'N' to 0~1 range
- \ud83d\udcca Use Year as x axis, standardized 'MeanTCperYear', 'MeanTCperArt', 'N' as y axes, plot with ggplot using different colors for each

```R
# Standardize columns to 0-1 range
# Method01: 
data_year <- data_year %>%
  mutate(MeanTCperYear = MeanTCperYear / max(MeanTCperYear),
         MeanTCperArt = MeanTCperArt / max(MeanTCperArt),
         N = N / max(N))

# Optional Method02: 
library(scales)
data_year$MeanTCperYear_std <- rescale(data_year$MeanTCperYear) 
data_year$MeanTCperArt_std <- rescale(data_year$MeanTCperArt)
data_year$N_std <- rescale(data_year$N)
```

Which of these two methods is better and why?

## Source Code
 
```R
## Annual Citation per Year ----
output$AnnualTotCitperYearPlot <- renderPlotly({
current_year = as.numeric(substr(Sys.Date(),1,4))+1
Table2 <- values$M %>%
  group_by(PY) %>% 
  summarize(MeanTCperArt=round(mean(TC, na.rm=TRUE),2),
			N =n()) %>% 
  mutate(MeanTCperYear = round(MeanTCperArt/(current_year-.data$PY),2),
		 CitableYears = current_year-PY) %>% 
  rename(Year = PY) %>% 
  drop_na()
values$AnnualTotCitperYear=Table2
Table2$group="A"
  
```




## Correlation Function
 Here is some R code to generate a report highlighting the strong negative and positive relationships in the correlation matrix:

 I want have a function can further generate  the full correlation matrix, and then generates text highlighting the strongest negative correlation a report that highlights and list which of them has strong negative relationship(under -0.7) and t which of them have strong positive relationship(supper +0.7) using R? no matter how much the colum the dataframe has.
```r
cor_report <- function(df) {
  
  # Calculate correlations
  correlations <- cor(df) 
  
  # Get lower triangle values 
  tri_values <- correlations[lower.tri(correlations)]
  
  # Get row and column indices of lower triangle
  indices <- which(lower.tri(correlations), arr.ind = TRUE)
  
  # Create dataframe
  df <- data.frame(Var1 = rownames(correlations)[indices[,1]],
                   Var2 = rownames(correlations)[indices[,2]], 
                   Value = tri_values,
                   row.names = NULL)
  
  # Identify strong correlations
  strong_neg <- filter(df, Value < -0.7)
  strong_pos <- filter(df, Value > 0.7)

  # Print output  
  print(correlations)

  print(strong_neg)  
  
  print(strong_pos)
  
}


```





AverArtCitperYear  每年每篇文章被引次数

What doesMeanTCperArt MeanTCperYear CitableYears in AverArtCitperYear





 
 这个表格显示了1998年到2004年每年发表文章的作者的平均每篇文章被引用次数(MeanTCperArt)、平均每年被引用次数(MeanTCperYear)以及可被引用的年限(CitableYears)。





```r
## S3 method for class 'bibliometrix'
summary(object, ...)
```

AnnualProduction

## AnnualScientProd
AnnualScientProd: 每年科研产出总量. 每年每个科学家发表的论文总数。这个指标反映了科学家的总体产出量。
![AnnualScientProd](file:///Users/yamlam/Documents/obsdiannote/🧪%20Script%20Labs/wos_biliometriex/Thematic/Augmented%20Reality/results/S0-BasicStatistics%20AnnualScientProd%20.png)
