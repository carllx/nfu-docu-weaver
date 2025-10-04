
[[dev]] [[Bibliometrix]] [[Projects]] 

[[Bibliometrics networks (文献计量网络)]]
[[Field Tags of WoS]]


## processing Scripts for Bibliometric Network Analysis: A Pathway to Efficient Research Publication

The Tasks:
1. [[Web of Science Record Export]] - Batch export range number of Records (a complete set of mandatory metadata )from Web of Science (WOS) .
2. [[Bibliometrix Data Preprocessing]] - Preprocessing WOS records for Bibliometrix analysis, for instance, through Alfred.
3. [[Thematic Preview Reporting]] - Create preview reports to acquire a comprehensive understanding of the thematic.
4. [[Research Publication Visualization]] - Further, develop a visualization framework to enhance the efficiency of research publication.



## Tips-  Understanding Bibliometrix Source Code

- Search `$variable`(column_names) in the [Bibliometrix GitHub repo](https://github.com/massimoaria/bibliometrix) to understand the logic. 

- For example, to understand what `AnnualTotCitperYearPlot` means:

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

# AnnualTotCitperYearPlot shows annual citation count per year
```

## 'M' general in Bibliometrix mean 
"Mandatory" 意味着“必需的”或“义务性的”。它描述了一些强制性的、非自愿选择的要求或标准。

"set of mandatory metadata" 可以翻译为“一组必需的元数据 (mandatory metadata)”。元数据 (metadata) 是描述数据内容、质量、条件、来源等特性的数据，在数据管理和使用中非常关键，当它是“必需的”时，意味着在处理数据或系统中使用数据时，这些信息是必须提供和维护的。





