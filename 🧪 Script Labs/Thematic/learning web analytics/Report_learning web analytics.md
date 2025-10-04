## DESCRIPTION

[Project\_Note\_BibliometrixReportSystem](Bibliometrix%20Report%20System)

%%This is a Bibliometric analysis focused on `learning web analytics`.

This analysis covers the timespan `2005:2023`, drawing from `263` sources including journals, books, and other documents, totaling `460` documents. During this period, the field experienced an annual growth rate of `24.28`, with the average age of documents being `4.62` years. On average, each document received `31.11` citations, amounting to `4.259` citations per year, contributing to a total of `26083` references.

The document types in this analysis include `371` articles, `2` articles in early access, `5` articles that are proceedings papers, `2` editorial materials, {{proceedings paper}} proceedings papers, `75` reviews, {{review; book chapter}} book chapter reviews, and `4` early access reviews.

In the realm of document contents, there are `1185` instances of Keywords Plus and `1799` Author’s Keywords. The number of authors involved is `1808`, with a total of `1925` author appearances. Among these, `34` authors have produced single-authored documents.

Focusing on author collaboration, there are `34` single-authored documents. On average, there are `0.254` documents per author and `4.18` co-authors per document. The rate of international co-authorships in this field is `32.39`.%%

## Annual ⏱️

### Annual Scientific Production

![AnnualProdution](file:///Users/yamlam/Documents/obsdiannote/🧪%20Script%20Labs/Thematic//learning%20web%20analytics/exports/S0-BasicStatistics-AnnualProdution-learning%20web%20analytics.png)

Combined from `Annual Scientific Production`, `Averge Articles Citations per Year`, `Averge Total Citations per Year`

-   Relavant source: [AnnualProdution.csv](file:/Users/yamlam/Documents/obsdiannote/🧪%20Script%20Labs/Thematic//learning%20web%20analytics/exports/S0-BasicStatistics-AnnualProdution-learning%20web%20analytics.csv)
-   Local note: [Average Article Citations per Year](Average%20Article%20Citations%20per%20Year)

### correlations

Strong Positive Correlation:
- `Articles` and `Year` with value: 0.876624424173948
- `MeanTCperYear` and `MeanTCperArt` with value: 0.985140298305613

%% Think about TRUE/FALSE
- When `Articles/N` increases, `MeanTCperYear`(the average number of citations per year) increases.
- When `Articles/N` (the number of publications) increases, `MeanTCperArt`(the average number of citations per article) decreases. This may be due to researchers publishing more articles in the same field, resulting in fewer citations per article.
%%

|      | Year | Articles | MeanTCperArt | MeanTCperYear |
|:-----|-----:|---------:|-------------:|--------------:|
| 2005 | 2005 |        1 |    88.000000 |     4.6315789 |
| 2006 | 2006 |        0 |     0.000000 |     0.0000000 |
| 2007 | 2007 |        0 |     0.000000 |     0.0000000 |
| 2008 | 2008 |        0 |     0.000000 |     0.0000000 |
| 2009 | 2009 |        1 |     1.000000 |     0.0666667 |
| 2010 | 2010 |        1 |     6.000000 |     0.4285714 |
| 2011 | 2011 |        5 |    23.400000 |     1.8000000 |
| 2012 | 2012 |       11 |   517.545455 |    43.1287879 |
| 2013 | 2013 |        5 |    21.400000 |     1.9454545 |
| 2014 | 2014 |       10 |    43.500000 |     4.3500000 |
| 2015 | 2015 |       16 |    35.500000 |     3.9444444 |
| 2016 | 2016 |       20 |    42.500000 |     5.3125000 |
| 2017 | 2017 |       28 |    25.214286 |     3.6020408 |
| 2018 | 2018 |       42 |    23.738095 |     3.9563492 |
| 2019 | 2019 |       49 |    27.020408 |     5.4040816 |
| 2020 | 2020 |       72 |    18.527778 |     4.6319444 |
| 2021 | 2021 |       90 |    16.533333 |     5.5111111 |
| 2022 | 2022 |       59 |     8.152542 |     4.0762712 |
| 2023 | 2023 |       50 |     2.320000 |     2.3200000 |

(*Table above: Annual Scientific Production*)

## Countries 🌏

### Most Productive Countries

![Plot Countries](file:/Users/yamlam/Documents/obsdiannote/🧪%20Script%20Labs/Thematic/learning%20web%20analytics/Report_learning%20web%20analytics_files/figure-markdown_strict/Summary_biblioAnalysis-2.png)

| Country        | Articles | Freq    | SCP | MCP | MCP\_Ratio |
|:---------------|:---------|:--------|:----|:----|:-----------|
| USA            | 112      | 0.24454 | 89  | 23  | 0.205      |
| CHINA          | 61       | 0.13319 | 42  | 19  | 0.311      |
| SPAIN          | 36       | 0.07860 | 28  | 8   | 0.222      |
| UNITED KINGDOM | 30       | 0.06550 | 16  | 14  | 0.467      |
| AUSTRALIA      | 27       | 0.05895 | 22  | 5   | 0.185      |

(*Table above: Corresponding Author’s Countries*)

-   Relavant note: [MCP](MCP%20-%20Multiple%20Country%20Publications). 理解一个国家的研究环境有多开放和协作

### correlations

- [x] Prompt 通过 `Corresponding Author's Countries` 与 `Total Citations per Country` 的对比找到冲突等特征. ✅ 2024-03-31

|     | TC\_rank | Country        |   TC | AvgArtCit | Articles | SCP | MCP | MCP\_Ratio |
|:----|---------:|:---------------|-----:|----------:|---------:|----:|----:|-----------:|
| 2   |        1 | USA            | 7117 |      63.5 |      112 |  89 |  23 |      0.205 |
| 6   |        6 | NETHERLANDS    |  389 |      35.4 |       11 |   9 |   2 |      0.182 |
| 8   |        8 | ITALY          |  346 |      31.5 |       11 |   8 |   3 |      0.273 |
| 10  |        7 | INDIA          |  352 |      29.3 |       12 |   7 |   5 |      0.417 |
| 13  |        4 | CANADA         |  631 |      25.2 |       25 |  12 |  13 |      0.520 |
| 15  |        3 | UNITED KINGDOM |  737 |      24.6 |       30 |  16 |  14 |      0.467 |
| 19  |        2 | CHINA          | 1245 |      20.4 |       61 |  42 |  19 |      0.311 |
| 22  |       11 | GERMANY        |  270 |      19.3 |       14 |  12 |   2 |      0.143 |
| 25  |        5 | SPAIN          |  536 |      14.9 |       36 |  28 |   8 |      0.222 |
| 31  |        9 | AUSTRALIA      |  303 |      11.2 |       27 |  22 |   5 |      0.185 |

(*Table above: Corresponding Author’s Countries*)

table is filtered by mean of ‘Articles’ &gt; 8.1785714

Strong Positive Correlation:
- `Articles` and `TC` with value: 0.910123850542083
- `SCP` and `TC` with value: 0.926045910829795
- `MCP` and `TC` with value: 0.768129054577776
- `SCP` and `Articles` with value: 0.991732967517235
- `MCP` and `Articles` with value: 0.921807569215566
- `MCP` and `SCP` with value: 0.864444447354682

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
| USA            | 7117            | 63.5                      |
| CHINA          | 1245            | 20.4                      |
| UNITED KINGDOM | 737             | 24.6                      |
| CANADA         | 631             | 25.2                      |
| SPAIN          | 536             | 14.9                      |

(*Table above: Total Citations per Country*)

[Average\_Article\_Citations\_per\_Country](Average%20Article%20Citations%20per%20Country) 较高的平均文章引用表明更大的研究影响力。总引用量只显示数量。(有时可能只是他们发表数量多 )

### Most Productive Authors

![MostProdAuthors](file:/Users/yamlam/Documents/obsdiannote/🧪%20Script%20Labs/Thematic/learning%20web%20analytics/Report_learning%20web%20analytics_files/figure-markdown_strict/Summary_biblioAnalysis-1.png)

| Authors    | Articles | Authors          | Articles Fractionalized |
|:-----------|:---------|:-----------------|:------------------------|
| GASEVIC D  | 4        | XING WL          | 1.450                   |
| LI Y       | 4        | ZHANG M          | 1.333                   |
| XIE HR     | 4        | COHEN A          | 1.250                   |
| ARLITSCH K | 3        | HUBER J          | 1.250                   |
| CHEN HC    | 3        | STUCKENSCHMIDT H | 1.250                   |

(*Table above: Most Productive Authors*)

Source summary:[csv](file:/Users/yamlam/Documents/obsdiannote/🧪%20Script%20Labs/Thematic//learning%20web%20analytics/exports/S0-BasicStatistics-MostProdAuthors-learning%20web%20analytics.csv).
Relavant note: [MostProdAuthors](MostProdAuthors). `Articles Fractionalized`: 考虑共同写作比例的分数化文章计数。它避免了多作者论文的重复计算。

### H-Index of Authors

[Authors’ Local Impact](Authors'%20Local%20Impact%20-%20Dominance%20ranking%20Authors)

| Element    | h\_index | g\_index |  m\_index |   TC |  NP | PY\_start |
|:-----------|---------:|---------:|----------:|-----:|----:|----------:|
| GASEVIC D  |        4 |        4 | 0.3076923 |  196 |   4 |      2012 |
| CHEN HC    |        3 |        3 | 0.2307692 | 2760 |   3 |      2012 |
| CHEN XL    |        3 |        3 | 0.6000000 |   73 |   3 |      2020 |
| EBNER M    |        3 |        3 | 0.2500000 |   18 |   3 |      2013 |
| FONSECA D  |        3 |        3 | 0.5000000 |   36 |   3 |      2019 |
| HUBER J    |        3 |        3 | 0.5000000 |  107 |   3 |      2019 |
| KIM Y      |        3 |        3 | 0.4285714 |   17 |   3 |      2018 |
| SAMTANI S  |        3 |        3 | 0.3750000 |  118 |   3 |      2017 |
| ARLITSCH K |        2 |        3 | 0.2857143 |   19 |   3 |      2018 |
| LI J       |        2 |        3 | 0.2222222 |   95 |   3 |      2016 |

(*Table above: Dominance ranking Authors*)

Authors’ Local Impact
结果显示每个作者的姓名、h指数、g指数、m指数、总被引量、论文数量、发表起始年份。

-   h指数:反映影响力和论文质量.
-   g指数:考虑论文引用次数分布.
-   m指数:考虑作者生产力.

## Papers 📰

![plot\_spectroscopy](file:/Users/yamlam/Documents/obsdiannote/🧪%20Script%20Labs/Thematic/learning%20web%20analytics/Report_learning%20web%20analytics_files/figure-markdown_strict/reference_Pyramids_base-1.png)

### Reference Pyramids

In the Reference Pyramids method, “Classic Literature” usually refers to the earliest literature that proposes theories or frameworks in a research field, while “core literature” refers to literature that constructively develops or applies those classic works.

When collecting literature on the topic of “learning web analytics”, we first identified the top 5 most frequently co-cited papers as the “Classic Literature.” We then counted the number of papers citing each classic paper, and ranked them by citation count. We selected papers with over 77 citations as the “core literature” derived from each classic work. Below, we outline the classic and corresponding core literature in a table format.

The table headers are the Classic Literature. “TI” indicates the paper title, “PY” the publication year, and “TC” the number of citations for each core paper.

![](file:/Users/yamlam/Documents/obsdiannote/🧪%20Script%20Labs/Thematic//learning%20web%20analytics/exports/Pyramids.png)
[html](file:/Users/yamlam/Documents/obsdiannote/🧪%20Script%20Labs/Thematic//learning%20web%20analytics/exports/Pyramids.html)

#### VAN ECK NJ 2010 SCIENTOMETRICS

[Note](Pyramid%20-%20VAN%20ECK%20NJ%202010%20SCIENTOMETRICS%20.canvas)
\| [DOI](https://sci-hub.ee/10.1007/S11192-009-0146-3) \| [Link](https://scholar.google.it/scholar?hl=en&as_sdt=0%2C5&q=VAN%20ECK%20NJ%202010%20SCIENTOMETRICS)

| TI                                                                                                                  |   PY |  TC |
|:--------------------------------------------------------------------------------------------------------------------|-----:|----:|
| BIG DATA AND ARTIFICIAL INTELLIGENCE IN THE MARITIME INDUSTRY: A BIBLIOMETRIC REVIEW AND FUTURE RESEARCH DIRECTIONS | 2020 | 125 |
| KNOWLEDGE MANAGEMENT IN THE FOURTH INDUSTRIAL REVOLUTION: MAPPING THE LITERATURE AND SCOPING FUTURE AVENUES         | 2021 | 158 |

#### BLEI DM 2003 J MACH LEARN RES

[Note](Pyramid%20-%20BLEI%20DM%202003%20J%20MACH%20LEARN%20RES%20.canvas)
\| [DOI](https://sci-hub.ee/10.1162/JMLR.2003.3.4-5.993) \| [Link](https://scholar.google.it/scholar?hl=en&as_sdt=0%2C5&q=BLEI%20DM%202003%20J%20MACH%20LEARN%20RES)

| TI                                                                                                      |   PY |  TC |
|:--------------------------------------------------------------------------------------------------------|-----:|----:|
| SOCIAL ANALYTICS: LEARNING FUZZY PRODUCT ONTOLOGIES FOR ASPECT-ORIENTED SENTIMENT ANALYSIS              | 2014 | 105 |
| TECHNOLOGY-ENHANCED LEARNING IN HIGHER EDUCATION: A BIBLIOMETRIC ANALYSIS WITH LATENT SEMANTIC APPROACH | 2020 | 114 |
| EXPLORING EMERGING HACKER ASSETS AND KEY HACKERS FOR PROACTIVE CYBER THREAT INTELLIGENCE                | 2017 |  91 |

#### MOHER D 2009 PLOS MED

[Note](Pyramid%20-%20MOHER%20D%202009%20PLOS%20MED%20.canvas)
\| [DOI](https://sci-hub.ee/10.1186/2046-4053-4-1) \| [DOI](https://sci-hub.ee/10.1371/JOURNAL.PMED.1000097) \| [DOI](https://sci-hub.ee/10.1016/J.IJSU.2010.02.007) \| [DOI](https://sci-hub.ee/10.1136/BMJ.B2535) \| [DOI](https://sci-hub.ee/10.1136/BMJ.B2700) \| [DOI](https://sci-hub.ee/10.1136/BMJ.I4086) \| [DOI](https://sci-hub.ee/10.1016/J.IJSU.2010.07.299) \| [Link](https://scholar.google.it/scholar?hl=en&as_sdt=0%2C5&q=MOHER%20D%202009%20PLOS%20MED)

| TI                                                                                                                 |   PY |  TC |
|:-------------------------------------------------------------------------------------------------------------------|-----:|----:|
| PREDICTING STUDENT PERFORMANCE USING DATA MINING AND LEARNING ANALYTICS TECHNIQUES: A SYSTEMATIC LITERATURE REVIEW | 2021 |  95 |

#### LONG PHIL 2011 EDUCAUSE REVIEW

[Note](Pyramid%20-%20LONG%20PHIL%202011%20EDUCAUSE%20REVIEW%20.canvas)
\| [Link](https://scholar.google.it/scholar?hl=en&as_sdt=0%2C5&q=LONG%20PHIL%202011%20EDUCAUSE%20REVIEW)

| TI                                                                                                                                                  |   PY |  TC |
|:----------------------------------------------------------------------------------------------------------------------------------------------------|-----:|----:|
| EXAMINING THE NECESSARY CONDITION FOR ENGAGEMENT IN AN ONLINE LEARNING ENVIRONMENT BASED ON LEARNING ANALYTICS APPROACH: THE ROLE OF THE INSTRUCTOR | 2015 | 124 |

#### CHEN HC 2012 MIS QUART

[Note](Pyramid%20-%20CHEN%20HC%202012%20MIS%20QUART%20.canvas)
\| [Link](https://scholar.google.it/scholar?hl=en&as_sdt=0%2C5&q=CHEN%20HC%202012%20MIS%20QUART)

| TI                                                                                                         |   PY |  TC |
|:-----------------------------------------------------------------------------------------------------------|-----:|----:|
| EXPLORING EMERGING HACKER ASSETS AND KEY HACKERS FOR PROACTIVE CYBER THREAT INTELLIGENCE                   | 2017 |  91 |
| HUMAN RESOURCES FOR BIG DATA PROFESSIONS: A SYSTEMATIC CLASSIFICATION OF JOB ROLES AND REQUIRED SKILL SETS | 2018 | 149 |
| SOCIAL EMOTION CLASSIFICATION OF SHORT TEXT VIA TOPIC-LEVEL MAXIMUM ENTROPY MODEL                          | 2016 |  88 |

Taks:

-   Outline the theories or frameworks proposed in each classic work, and describe how the core papers develop and apply them.

-   Evaluate the role of each Classic Literature group and associated core papers in “learning web analytics”.

-   Identify differences in discussion topics between them.

-   Use the MoSCoW method to develop a reading plan for each Classic Literature group.

### Most Cited Papers

| Paper                                    | DOI                           | TC   | TCperYear | NTC    |
|:-----------------------------------------|:------------------------------|:-----|:----------|:-------|
| CHEN HC, 2012, MIS QUART                 | NA                            | 2692 | 207.08    | 5.2015 |
| MCAFEE A, 2012, HARVARD BUS REV          | NA                            | 2299 | 176.85    | 4.4421 |
| DAVENPORT TH, 2012, MIT SLOAN MANAGE REV | NA                            | 350  | 26.92     | 0.6763 |
| WONG J, 2019, INT J HUM-COMPUT INT       | 10.1080/10447318.2018.1543084 | 208  | 34.67     | 7.6979 |
| GORDON NP, 2016, J MED INTERNET RES      | 10.2196/jmir.5105             | 208  | 23.11     | 4.8941 |

(*Table above: Top manuscripts per citations*)

Source summary: [csv](file:/Users/yamlam/Documents/obsdiannote/🧪%20Script%20Labs/Thematic//learning%20web%20analytics/exports/S0-BasicStatistics-MostCitedPapers-learning%20web%20analytics.csv).
Relavant note: [TCperYear\_and\_NTC\_oF\_Paper](TCperYear%20and%20NTC%20of%20Paper).

## Sources 🏫

### Most Relevant Sources

| Sources                                                           | Articles |
|:------------------------------------------------------------------|:---------|
| SUSTAINABILITY                                                    | 16       |
| COMPUTERS IN HUMAN BEHAVIOR                                       | 12       |
| SCIENTOMETRICS                                                    | 12       |
| IEEE ACCESS                                                       | 11       |
| INTERNATIONAL JOURNAL OF ENVIRONMENTAL RESEARCH AND PUBLIC HEALTH | 9        |

(*Table above: Most Relevant Keywords*)

| Author Keywords (DE) | Articles | Keywords-Plus (ID) | Articles |
|:---------------------|:---------|:-------------------|:---------|
| MACHINE LEARNING     | 58       | ANALYTICS          | 37       |
| LEARNING ANALYTICS   | 54       | WEB                | 35       |
| BIG DATA             | 36       | PERFORMANCE        | 33       |
| SOCIAL MEDIA         | 23       | IMPACT             | 30       |
| BIBLIOMETRICS        | 18       | SCIENCE            | 26       |

(*Table above: Most Relevant Keywords*)

## MATADATE

Searching:: learning web analytics
Timespan:: 2005:2023
Sources (Journals, Books, etc):: 263
Documents:: 460
Annual Growth Rate %:: 24.28
Document Average Age:: 4.62
Average citations per doc:: 31.11
Average citations per year per doc:: 4.259
References:: 26083
article:: 371
article; early access:: 2
article; proceedings paper:: 5
editorial material:: 2
letter:: 1
review:: 75
review; early access:: 4
Keywords Plus (ID):: 1185
Author’s Keywords (DE):: 1799
Authors:: 1808
Author Appearances:: 1925
Authors of single-authored docs:: 34
Single-authored docs:: 34
Documents per Author:: 0.254
Co-Authors per Doc:: 4.18
International co-authorships %:: 32.39
