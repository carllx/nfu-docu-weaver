## DESCRIPTION

[Project\_Note\_BibliometrixReportSystem](Bibliometrix%20Report%20System)

%%This is a Bibliometric analysis focused on `Metaverse`.

This analysis covers the timespan `1995:2023`, drawing from `1086` sources including journals, books, and other documents, totaling `2190` documents. During this period, the field experienced an annual growth rate of `29.44`, with the average age of documents being `1.87` years. On average, each document received `5.424` citations, amounting to `1.865` citations per year, contributing to a total of `82449` references.

The document types in this analysis include `1151` articles, `222` articles in early access, `3` articles that are proceedings papers, `140` editorial materials, `402` proceedings papers, `145` reviews, {{review; book chapter}} book chapter reviews, and `29` early access reviews.

In the realm of document contents, there are `1991` instances of Keywords Plus and `5747` Author’s Keywords. The number of authors involved is `6204`, with a total of `8449` author appearances. Among these, `341` authors have produced single-authored documents.

Focusing on author collaboration, there are `392` single-authored documents. On average, there are `0.353` documents per author and `3.86` co-authors per document. The rate of international co-authorships in this field is `29.13`.%%

## Annual ⏱️

### Annual Scientific Production

![AnnualProdution](file:///Users/yamlam/Documents/obsdiannote/🧪%20Script%20Labs/Thematic//Metaverse/exports/S0-BasicStatistics-AnnualProdution-Metaverse.png)

Combined from `Annual Scientific Production`, `Averge Articles Citations per Year`, `Averge Total Citations per Year`

-   Relavant source: [AnnualProdution.csv](file:/Users/yamlam/Documents/obsdiannote/🧪%20Script%20Labs/Thematic//Metaverse/exports/S0-BasicStatistics-AnnualProdution-Metaverse.csv)
-   Local note: [Average Article Citations per Year](Average%20Article%20Citations%20per%20Year)

### correlations

Strong Positive Correlation:
- `MeanTCperYear` and `MeanTCperArt` with value: 0.892145417445648

%% Think about TRUE/FALSE
- When `Articles/N` increases, `MeanTCperYear`(the average number of citations per year) increases.
- When `Articles/N` (the number of publications) increases, `MeanTCperArt`(the average number of citations per article) decreases. This may be due to researchers publishing more articles in the same field, resulting in fewer citations per article.
%%

|      | Year | Articles | MeanTCperArt | MeanTCperYear |
|:-----|-----:|---------:|-------------:|--------------:|
| 1995 | 1995 |        1 |     1.000000 |     0.0344828 |
| 1996 | 1996 |        1 |     0.000000 |     0.0000000 |
| 1997 | 1997 |        0 |     0.000000 |     0.0000000 |
| 1998 | 1998 |        0 |     0.000000 |     0.0000000 |
| 1999 | 1999 |        0 |     0.000000 |     0.0000000 |
| 2000 | 2000 |        1 |     3.000000 |     0.1250000 |
| 2001 | 2001 |        1 |    19.000000 |     0.8260870 |
| 2002 | 2002 |        0 |     0.000000 |     0.0000000 |
| 2003 | 2003 |        0 |     0.000000 |     0.0000000 |
| 2004 | 2004 |        1 |     6.000000 |     0.3000000 |
| 2005 | 2005 |        1 |     6.000000 |     0.3157895 |
| 2006 | 2006 |        1 |     1.000000 |     0.0555556 |
| 2007 | 2007 |        3 |    12.333333 |     0.7254902 |
| 2008 | 2008 |        9 |    25.555556 |     1.5972222 |
| 2009 | 2009 |       12 |    25.416667 |     1.6944444 |
| 2010 | 2010 |       14 |     7.357143 |     0.5255102 |
| 2011 | 2011 |       10 |     7.600000 |     0.5846154 |
| 2012 | 2012 |        6 |     5.166667 |     0.4305556 |
| 2013 | 2013 |        7 |    44.428571 |     4.0389610 |
| 2014 | 2014 |        7 |     4.714286 |     0.4714286 |
| 2015 | 2015 |        5 |    11.000000 |     1.2222222 |
| 2016 | 2016 |        6 |     3.000000 |     0.3750000 |
| 2017 | 2017 |        1 |    98.000000 |    14.0000000 |
| 2018 | 2018 |        6 |    34.166667 |     5.6944444 |
| 2019 | 2019 |        3 |     7.000000 |     1.4000000 |
| 2020 | 2020 |        7 |    25.285714 |     6.3214286 |
| 2021 | 2021 |       38 |    17.026316 |     5.6754386 |
| 2022 | 2022 |      676 |     8.818047 |     4.4090237 |
| 2023 | 2023 |     1373 |     2.574654 |     2.5746540 |

(*Table above: Annual Scientific Production*)

## Countries 🌏

### Most Productive Countries

![Plot Countries](file:/Users/yamlam/Documents/obsdiannote/🧪%20Script%20Labs/Thematic/Metaverse/Report_Metaverse_files/figure-markdown_strict/Summary_biblioAnalysis-2.png)

| Country        | Articles | Freq     | SCP | MCP | MCP\_Ratio |
|:---------------|:---------|:---------|:----|:----|:-----------|
| CHINA          | 570      | 0.273381 | 405 | 165 | 0.2895     |
| KOREA          | 279      | 0.133813 | 221 | 58  | 0.2079     |
| USA            | 231      | 0.110791 | 180 | 51  | 0.2208     |
| UNITED KINGDOM | 106      | 0.050839 | 53  | 53  | 0.5000     |
| ITALY          | 93       | 0.044604 | 73  | 20  | 0.2151     |

(*Table above: Corresponding Author’s Countries*)

-   Relavant note: [MCP](MCP%20-%20Multiple%20Country%20Publications). 理解一个国家的研究环境有多开放和协作

### correlations

- [x] Prompt 通过 `Corresponding Author's Countries` 与 `Total Citations per Country` 的对比找到冲突等特征. ✅ 2024-03-31

|     | TC\_rank | Country        |   TC | AvgArtCit | Articles | SCP | MCP | MCP\_Ratio |
|:----|---------:|:---------------|-----:|----------:|---------:|----:|----:|-----------:|
| 7   |        4 | UNITED KINGDOM | 1217 |    11.481 |      106 |  53 |  53 |     0.5000 |
| 17  |        7 | AUSTRALIA      |  287 |     7.553 |       38 |  26 |  12 |     0.3158 |
| 18  |        3 | USA            | 1723 |     7.459 |      231 | 180 |  51 |     0.2208 |
| 20  |        2 | KOREA          | 1803 |     6.462 |      279 | 221 |  58 |     0.2079 |
| 24  |        6 | GERMANY        |  306 |     5.186 |       59 |  34 |  25 |     0.4237 |
| 27  |       12 | SINGAPORE      |  176 |     4.889 |       36 |  19 |  17 |     0.4722 |
| 29  |       13 | CANADA         |  175 |     4.487 |       39 |  28 |  11 |     0.2821 |
| 31  |        8 | INDIA          |  248 |     4.351 |       57 |  33 |  24 |     0.4211 |
| 33  |        5 | ITALY          |  395 |     4.247 |       93 |  73 |  20 |     0.2151 |
| 34  |        1 | CHINA          | 2412 |     4.232 |      570 | 405 | 165 |     0.2895 |
| 41  |       10 | SPAIN          |  192 |     2.630 |       73 |  53 |  20 |     0.2740 |
| 45  |       18 | JAPAN          |  129 |     2.481 |       52 |  41 |  11 |     0.2115 |
| 47  |       31 | INDONESIA      |   59 |     2.034 |       29 |  24 |   5 |     0.1724 |

(*Table above: Corresponding Author’s Countries*)

table is filtered by mean of ‘Articles’ &gt; 28.5616438

Strong Positive Correlation:
- `Articles` and `TC` with value: 0.947024900049983
- `SCP` and `TC` with value: 0.943048242322349
- `MCP` and `TC` with value: 0.925194657972842
- `SCP` and `Articles` with value: 0.996458312454874
- `MCP` and `Articles` with value: 0.975218893497169
- `MCP` and `SCP` with value: 0.953161106668139

%%
Highlight:
If the more articles published(`Articles/N`),
- the less citations(`Total.Citations`) received?
- the less citations per article(`Average.Article.Citations`) received?
if so, it may be due to researchers publishing more articles in the same field, but they are `not necessarily high-quality articles`.
%%

## Authors 🧑‍🏫

| Country        | Total Citations | Average Article Citations |
|:---------------|:----------------|:--------------------------|
| CHINA          | 2412            | 4.232                     |
| KOREA          | 1803            | 6.462                     |
| USA            | 1723            | 7.459                     |
| UNITED KINGDOM | 1217            | 11.481                    |
| ITALY          | 395             | 4.247                     |

(*Table above: Total Citations per Country*)

[Average\_Article\_Citations\_per\_Country](Average%20Article%20Citations%20per%20Country) 较高的平均文章引用表明更大的研究影响力。总引用量只显示数量。(有时可能只是他们发表数量多 )

### Most Productive Authors

![MostProdAuthors](file:/Users/yamlam/Documents/obsdiannote/🧪%20Script%20Labs/Thematic/Metaverse/Report_Metaverse_files/figure-markdown_strict/Summary_biblioAnalysis-1.png)

| Authors  | Articles | Authors       | Articles Fractionalized |
|:---------|:---------|:--------------|:------------------------|
| KIM J    | 39       | KIM J         | 10.45                   |
| NIYATO D | 29       | WIEDERHOLD BK | 8.46                    |
| MIN WD   | 25       | KSHETRI N     | 7.08                    |
| LEE J    | 20       | AYITER E      | 7.00                    |
| WANG FY  | 20       | LEE J         | 5.92                    |

(*Table above: Most Productive Authors*)

Source summary:[csv](file:/Users/yamlam/Documents/obsdiannote/🧪%20Script%20Labs/Thematic//Metaverse/exports/S0-BasicStatistics-MostProdAuthors-Metaverse.csv).
Relavant note: [MostProdAuthors](MostProdAuthors). `Articles Fractionalized`: 考虑共同写作比例的分数化文章计数。它避免了多作者论文的重复计算。

### H-Index of Authors

[Authors’ Local Impact](Authors'%20Local%20Impact%20-%20Dominance%20ranking%20Authors)

| Element    | h\_index | g\_index | m\_index |  TC |  NP | PY\_start |
|:-----------|---------:|---------:|---------:|----:|----:|----------:|
| WANG FY    |        9 |       16 | 3.000000 | 291 |  20 |      2022 |
| KIM J      |        8 |       24 | 0.800000 | 576 |  39 |      2015 |
| JAMSHIDI M |        7 |        8 | 2.333333 |  87 |  14 |      2022 |
| DWIVEDI YK |        6 |       14 | 2.000000 | 534 |  14 |      2022 |
| LEE J      |        5 |        9 | 1.666667 |  97 |  20 |      2022 |
| KANG JW    |        4 |       12 | 1.333333 | 149 |  18 |      2022 |
| KIM S      |        3 |        8 | 0.750000 |  67 |  18 |      2021 |
| LEE LH     |        3 |        9 | 1.000000 |  92 |  14 |      2022 |
| LEE S      |        3 |        6 | 0.750000 |  42 |  14 |      2021 |
| WANG Q     |        3 |        4 | 1.000000 |  30 |  16 |      2022 |

(*Table above: Dominance ranking Authors*)

Authors’ Local Impact
结果显示每个作者的姓名、h指数、g指数、m指数、总被引量、论文数量、发表起始年份。

-   h指数:反映影响力和论文质量.
-   g指数:考虑论文引用次数分布.
-   m指数:考虑作者生产力.

## Papers 📰

![plot\_spectroscopy](file:/Users/yamlam/Documents/obsdiannote/🧪%20Script%20Labs/Thematic/Metaverse/Report_Metaverse_files/figure-markdown_strict/reference_Pyramids_base-1.png)

### Reference Pyramids

In the Reference Pyramids method, “Classic Literature” usually refers to the earliest literature that proposes theories or frameworks in a research field, while “core literature” refers to literature that constructively develops or applies those classic works.

When collecting literature on the topic of “Metaverse”, we first identified the top 5 most frequently co-cited papers as the “Classic Literature.” We then counted the number of papers citing each classic paper, and ranked them by citation count. We selected papers with over 77 citations as the “core literature” derived from each classic work. Below, we outline the classic and corresponding core literature in a table format.

The table headers are the Classic Literature. “TI” indicates the paper title, “PY” the publication year, and “TC” the number of citations for each core paper.

![](file:/Users/yamlam/Documents/obsdiannote/🧪%20Script%20Labs/Thematic//Metaverse/exports/Pyramids.png)
[html](file:/Users/yamlam/Documents/obsdiannote/🧪%20Script%20Labs/Thematic//Metaverse/exports/Pyramids.html)

#### PARK SM 2022 IEEE ACCESS

[Note](Pyramid%20-%20PARK%20SM%202022%20IEEE%20ACCESS%20.canvas)
\| [DOI](https://sci-hub.ee/10.1109/ACCESS.2021.3140175) \| [Link](https://scholar.google.it/scholar?hl=en&as_sdt=0%2C5&q=PARK%20SM%202022%20IEEE%20ACCESS)

| TI                                                                                                                                            |   PY |  TC |
|:----------------------------------------------------------------------------------------------------------------------------------------------|-----:|----:|
| METAVERSE BEYOND THE HYPE: MULTIDISCIPLINARY PERSPECTIVES ON EMERGING CHALLENGES, OPPORTUNITIES, AND AGENDA FOR RESEARCH, PRACTICE AND POLICY | 2022 | 318 |

#### MYSTAKIDIS S 2022 ENCYCLOPEDIA

[Note](Pyramid%20-%20MYSTAKIDIS%20S%202022%20ENCYCLOPEDIA%20.canvas)
\| [DOI](https://sci-hub.ee/10.3390/ENCYCLOPEDIA2010031) \| [Link](https://scholar.google.it/scholar?hl=en&as_sdt=0%2C5&q=MYSTAKIDIS%20S%202022%20ENCYCLOPEDIA)

| TI                                                                                                                                            |   PY |  TC |
|:----------------------------------------------------------------------------------------------------------------------------------------------|-----:|----:|
| METAVERSE BEYOND THE HYPE: MULTIDISCIPLINARY PERSPECTIVES ON EMERGING CHALLENGES, OPPORTUNITIES, AND AGENDA FOR RESEARCH, PRACTICE AND POLICY | 2022 | 318 |

#### DWIVEDI YK 2022 INT J INFORM MANAGE

[Note](Pyramid%20-%20DWIVEDI%20YK%202022%20INT%20J%20INFORM%20MANAGE%20.canvas)
\| [DOI](https://sci-hub.ee/10.1016/J.IJINFOMGT.2022.102542) \| [Link](https://scholar.google.it/scholar?hl=en&as_sdt=0%2C5&q=DWIVEDI%20YK%202022%20INT%20J%20INFORM%20MANAGE)

| TI                                                                                                                                            |   PY |  TC |
|:----------------------------------------------------------------------------------------------------------------------------------------------|-----:|----:|
| METAVERSE BEYOND THE HYPE: MULTIDISCIPLINARY PERSPECTIVES ON EMERGING CHALLENGES, OPPORTUNITIES, AND AGENDA FOR RESEARCH, PRACTICE AND POLICY | 2022 | 318 |
| METAVERSE MARKETING: HOW THE METAVERSE WILL SHAPE THE FUTURE OF CONSUMER RESEARCH AND PRACTICE                                                | 2023 | 103 |

#### DIONISIO JDN 2013 ACM COMPUT SURV

[Note](Pyramid%20-%20DIONISIO%20JDN%202013%20ACM%20COMPUT%20SURV%20.canvas)
\| [DOI](https://sci-hub.ee/10.1145/2480741.2480751) \| [Link](https://scholar.google.it/scholar?hl=en&as_sdt=0%2C5&q=DIONISIO%20JDN%202013%20ACM%20COMPUT%20SURV)

| TI                                                                                                                                            |   PY |  TC |
|:----------------------------------------------------------------------------------------------------------------------------------------------|-----:|----:|
| METAVERSE BEYOND THE HYPE: MULTIDISCIPLINARY PERSPECTIVES ON EMERGING CHALLENGES, OPPORTUNITIES, AND AGENDA FOR RESEARCH, PRACTICE AND POLICY | 2022 | 318 |
| AUGMENTED TACTILE-PERCEPTION AND HAPTIC-FEEDBACK RINGS AS HUMAN-MACHINE INTERFACES AIMING FOR IMMERSIVE INTERACTIONS                          | 2022 | 104 |
| A METAVERSE: TAXONOMY, COMPONENTS, APPLICATIONS, AND OPEN CHALLENGES                                                                          | 2022 | 283 |

Taks:

-   Outline the theories or frameworks proposed in each classic work, and describe how the core papers develop and apply them.

-   Evaluate the role of each Classic Literature group and associated core papers in “Metaverse”.

-   Identify differences in discussion topics between them.

-   Use the MoSCoW method to develop a reading plan for each Classic Literature group.

### Most Cited Papers

| Paper                                 | DOI                             | TC  | TCperYear | NTC   |
|:--------------------------------------|:--------------------------------|:----|:----------|:------|
| DWIVEDI YK, 2022, INT J INFORM MANAGE | 10.1016/j.ijinfomgt.2022.102542 | 318 | 106.00    | 36.06 |
| PARK SM, 2022, IEEE ACCESS            | 10.1109/ACCESS.2021.3140175     | 283 | 94.33     | 32.09 |
| DIONISIO JDN, 2013, ACM COMPUT SURV   | 10.1145/2480741.2480751         | 259 | 21.58     | 5.83  |
| DAVIS A, 2009, J ASSOC INF SYST       | 10.17705/1jais.00183            | 202 | 12.62     | 7.95  |
| KYE B, 2021, J EDUC EVAL HEALTH P     | 10.3352/jeehp.2021.18.32        | 166 | 41.50     | 9.75  |

(*Table above: Top manuscripts per citations*)

Source summary: [csv](file:/Users/yamlam/Documents/obsdiannote/🧪%20Script%20Labs/Thematic//Metaverse/exports/S0-BasicStatistics-MostCitedPapers-Metaverse.csv).
Relavant note: [TCperYear\_and\_NTC\_oF\_Paper](TCperYear%20and%20NTC%20of%20Paper).

## Sources 🏫

### Most Relevant Sources

| Sources                | Articles |
|:-----------------------|:---------|
| IEEE ACCESS            | 51       |
| SUSTAINABILITY         | 45       |
| ELECTRONICS            | 39       |
| SENSORS                | 39       |
| APPLIED SCIENCES-BASEL | 33       |

(*Table above: Most Relevant Keywords*)

| Author Keywords (DE)    | Articles | Keywords-Plus (ID) | Articles |
|:------------------------|:---------|:-------------------|:---------|
| METAVERSE               | 1081     | VIRTUAL-REALITY    | 130      |
| VIRTUAL REALITY         | 347      | MODEL              | 87       |
| AUGMENTED REALITY       | 174      | TECHNOLOGY         | 82       |
| BLOCKCHAIN              | 139      | AUGMENTED REALITY  | 71       |
| ARTIFICIAL INTELLIGENCE | 116      | IMPACT             | 64       |

(*Table above: Most Relevant Keywords*)

## MATADATE

Searching:: Metaverse
Timespan:: 1995:2023
Sources (Journals, Books, etc):: 1086
Documents:: 2190
Annual Growth Rate %:: 29.44
Document Average Age:: 1.87
Average citations per doc:: 5.424
Average citations per year per doc:: 1.865
References:: 82449
art exhibit review:: 1
article:: 1151
article; data paper:: 1
article; early access:: 222
article; proceedings paper:: 3
article; retracted publication:: 2
book review:: 12
correction:: 6
correction; early access:: 1
editorial material:: 140
editorial material; early access:: 11
letter:: 33
letter; early access:: 13
meeting abstract:: 13
news item:: 4
proceedings paper:: 402
retraction:: 1
review:: 145
review; early access:: 29
Keywords Plus (ID):: 1991
Author’s Keywords (DE):: 5747
Authors:: 6204
Author Appearances:: 8449
Authors of single-authored docs:: 341
Single-authored docs:: 392
Documents per Author:: 0.353
Co-Authors per Doc:: 3.86
International co-authorships %:: 29.13
