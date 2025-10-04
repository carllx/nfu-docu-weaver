## DESCRIPTION

[Project\_Note\_BibliometrixReportSystem](Bibliometrix%20Report%20System)

%%This is a Bibliometric analysis focused on `web analytics`.

This analysis covers the timespan `2002:2023`, drawing from `534` sources including journals, books, and other documents, totaling `1232` documents. During this period, the field experienced an annual growth rate of `26.13`, with the average age of documents being `5.05` years. On average, each document received `26.95` citations, amounting to `3.943` citations per year, contributing to a total of `66329` references.

The document types in this analysis include `1002` articles, `21` articles in early access, `19` articles that are proceedings papers, `4` editorial materials, {{proceedings paper}} proceedings papers, `168` reviews, {{review; book chapter}} book chapter reviews, and `6` early access reviews.

In the realm of document contents, there are `2536` instances of Keywords Plus and `4204` Author’s Keywords. The number of authors involved is `4378`, with a total of `4857` author appearances. Among these, `121` authors have produced single-authored documents.

Focusing on author collaboration, there are `129` single-authored documents. On average, there are `0.281` documents per author and `3.94` co-authors per document. The rate of international co-authorships in this field is `31.82`.%%

## Annual ⏱️

### Annual Scientific Production

![AnnualProdution](file:///Users/yamlam/Documents/obsdiannote/🧪%20Script%20Labs/Thematic//web%20analytics/exports/S0-BasicStatistics-AnnualProdution-web%20analytics.png)

Combined from `Annual Scientific Production`, `Averge Articles Citations per Year`, `Averge Total Citations per Year`

-   Relavant source: [AnnualProdution.csv](file:/Users/yamlam/Documents/obsdiannote/🧪%20Script%20Labs/Thematic//web%20analytics/exports/S0-BasicStatistics-AnnualProdution-web%20analytics.csv)
-   Local note: [Average Article Citations per Year](Average%20Article%20Citations%20per%20Year)

### correlations

Strong Positive Correlation:
- `Articles` and `Year` with value: 0.877023624617079
- `MeanTCperYear` and `MeanTCperArt` with value: 0.907394146100871

%% Think about TRUE/FALSE
- When `Articles/N` increases, `MeanTCperYear`(the average number of citations per year) increases.
- When `Articles/N` (the number of publications) increases, `MeanTCperArt`(the average number of citations per article) decreases. This may be due to researchers publishing more articles in the same field, resulting in fewer citations per article.
%%

|      | Year | Articles | MeanTCperArt | MeanTCperYear |
|:-----|-----:|---------:|-------------:|--------------:|
| 2002 | 2002 |        1 |    75.000000 |     3.4090909 |
| 2003 | 2003 |        1 |     1.000000 |     0.0476190 |
| 2004 | 2004 |        0 |     0.000000 |     0.0000000 |
| 2005 | 2005 |        1 |    88.000000 |     4.6315789 |
| 2006 | 2006 |        1 |    22.000000 |     1.2222222 |
| 2007 | 2007 |        3 |     6.333333 |     0.3725490 |
| 2008 | 2008 |        2 |    14.000000 |     0.8750000 |
| 2009 | 2009 |        9 |     9.888889 |     0.6592593 |
| 2010 | 2010 |       15 |    38.000000 |     2.7142857 |
| 2011 | 2011 |       14 |    39.785714 |     3.0604396 |
| 2012 | 2012 |       24 |   250.500000 |    20.8750000 |
| 2013 | 2013 |       19 |    58.578947 |     5.3253589 |
| 2014 | 2014 |       39 |    43.358974 |     4.3358974 |
| 2015 | 2015 |       45 |    38.644444 |     4.2938272 |
| 2016 | 2016 |       57 |    32.456140 |     4.0570175 |
| 2017 | 2017 |       86 |    25.755814 |     3.6794020 |
| 2018 | 2018 |      109 |    41.495413 |     6.9159021 |
| 2019 | 2019 |      160 |    29.837500 |     5.9675000 |
| 2020 | 2020 |      182 |    18.428571 |     4.6071429 |
| 2021 | 2021 |      204 |    15.671569 |     5.2238562 |
| 2022 | 2022 |      129 |     7.255814 |     3.6279070 |
| 2023 | 2023 |      131 |     2.648855 |     2.6488550 |

(*Table above: Annual Scientific Production*)

## Countries 🌏

### Most Productive Countries

![Plot Countries](file:/Users/yamlam/Documents/obsdiannote/🧪%20Script%20Labs/Thematic/web%20analytics/Report_web%20analytics_files/figure-markdown_strict/Summary_biblioAnalysis-2.png)

| Country        | Articles | Freq     | SCP | MCP | MCP\_Ratio |
|:---------------|:---------|:---------|:----|:----|:-----------|
| USA            | 336      | 0.274286 | 273 | 63  | 0.188      |
| CHINA          | 136      | 0.111020 | 86  | 50  | 0.368      |
| UNITED KINGDOM | 83       | 0.067755 | 44  | 39  | 0.470      |
| SPAIN          | 79       | 0.064490 | 66  | 13  | 0.165      |
| CANADA         | 56       | 0.045714 | 29  | 27  | 0.482      |

(*Table above: Corresponding Author’s Countries*)

-   Relavant note: [MCP](MCP%20-%20Multiple%20Country%20Publications). 理解一个国家的研究环境有多开放和协作

### correlations

- [x] Prompt 通过 `Corresponding Author's Countries` 与 `Total Citations per Country` 的对比找到冲突等特征. ✅ 2024-03-31

|     | TC\_rank | Country        |    TC | AvgArtCit | Articles | SCP | MCP | MCP\_Ratio |
|:----|---------:|:---------------|------:|----------:|---------:|----:|----:|-----------:|
| 4   |        5 | NETHERLANDS    |  1356 |     50.22 |       27 |  21 |   6 |      0.222 |
| 9   |        1 | USA            | 12917 |     38.44 |      336 | 273 |  63 |      0.188 |
| 10  |        7 | ITALY          |  1057 |     37.75 |       28 |  20 |   8 |      0.286 |
| 12  |        3 | UNITED KINGDOM |  2768 |     33.35 |       83 |  44 |  39 |      0.470 |
| 20  |        8 | INDIA          |   942 |     24.79 |       38 |  24 |  14 |      0.368 |
| 21  |        4 | CANADA         |  1376 |     24.57 |       56 |  29 |  27 |      0.482 |
| 24  |        2 | CHINA          |  3071 |     22.58 |      136 |  86 |  50 |      0.368 |
| 26  |       13 | GREECE         |   475 |     19.00 |       25 |  20 |   5 |      0.200 |
| 28  |       16 | BRAZIL         |   383 |     18.24 |       21 |  16 |   5 |      0.238 |
| 29  |        9 | GERMANY        |   719 |     17.54 |       41 |  29 |  12 |      0.293 |
| 32  |       17 | KOREA          |   365 |     15.87 |       23 |  13 |  10 |      0.435 |
| 35  |        6 | SPAIN          |  1121 |     14.19 |       79 |  66 |  13 |      0.165 |
| 41  |       10 | AUSTRALIA      |   609 |     12.69 |       48 |  38 |  10 |      0.208 |

(*Table above: Corresponding Author’s Countries*)

table is filtered by mean of ‘Articles’ &gt; 17.5

Strong Positive Correlation:
- `Articles` and `TC` with value: 0.974229340780571
- `SCP` and `TC` with value: 0.978360436744828
- `MCP` and `TC` with value: 0.854877844536498
- `SCP` and `Articles` with value: 0.992376941678131
- `MCP` and `Articles` with value: 0.916090214140705
- `MCP` and `SCP` with value: 0.859691138495623

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
| USA            | 12917           | 38.44                     |
| CHINA          | 3071            | 22.58                     |
| UNITED KINGDOM | 2768            | 33.35                     |
| CANADA         | 1376            | 24.57                     |
| NETHERLANDS    | 1356            | 50.22                     |

(*Table above: Total Citations per Country*)

[Average\_Article\_Citations\_per\_Country](Average%20Article%20Citations%20per%20Country) 较高的平均文章引用表明更大的研究影响力。总引用量只显示数量。(有时可能只是他们发表数量多 )

### Most Productive Authors

![MostProdAuthors](file:/Users/yamlam/Documents/obsdiannote/🧪%20Script%20Labs/Thematic/web%20analytics/Report_web%20analytics_files/figure-markdown_strict/Summary_biblioAnalysis-1.png)

| Authors         | Articles | Authors         | Articles Fractionalized |
|:----------------|:---------|:----------------|:------------------------|
| TANDOC EC       | 13       | TANDOC EC       | 7.00                    |
| LI J            | 8        | DA SILVA JAT    | 3.33                    |
| SAKAS DP        | 7        | PLAZA B         | 3.25                    |
| BELAIR-GAGNON V | 6        | BELAIR-GAGNON V | 3.17                    |
| DA SILVA JAT    | 6        | COATES M        | 3.00                    |

(*Table above: Most Productive Authors*)

Source summary:[csv](file:/Users/yamlam/Documents/obsdiannote/🧪%20Script%20Labs/Thematic//web%20analytics/exports/S0-BasicStatistics-MostProdAuthors-web%20analytics.csv).
Relavant note: [MostProdAuthors](MostProdAuthors). `Articles Fractionalized`: 考虑共同写作比例的分数化文章计数。它避免了多作者论文的重复计算。

### H-Index of Authors

[Authors’ Local Impact](Authors'%20Local%20Impact%20-%20Dominance%20ranking%20Authors)

| Element         | h\_index | g\_index |  m\_index |  TC |  NP | PY\_start |
|:----------------|---------:|---------:|----------:|----:|----:|----------:|
| TANDOC EC       |       10 |       13 | 0.9090909 | 854 |  13 |      2014 |
| HO YS           |        6 |        6 | 1.0000000 | 141 |   6 |      2019 |
| LI J            |        6 |        8 | 0.6666667 | 164 |   8 |      2016 |
| BELAIR-GAGNON V |        5 |        6 | 0.7142857 | 285 |   6 |      2018 |
| DA SILVA JAT    |        5 |        6 | 0.6250000 |  52 |   6 |      2017 |
| SAKAS DP        |        5 |        7 | 1.2500000 |  53 |   7 |      2021 |
| ZHANG Y         |        5 |        6 | 0.6250000 | 229 |   6 |      2017 |
| BORNMANN L      |        4 |        5 | 0.5000000 | 162 |   5 |      2017 |
| GUL S           |        4 |        5 | 0.4000000 |  51 |   5 |      2015 |
| DAMAR M         |        3 |        4 | 0.4285714 |  24 |   5 |      2018 |

(*Table above: Dominance ranking Authors*)

Authors’ Local Impact
结果显示每个作者的姓名、h指数、g指数、m指数、总被引量、论文数量、发表起始年份。

-   h指数:反映影响力和论文质量.
-   g指数:考虑论文引用次数分布.
-   m指数:考虑作者生产力.

## Papers 📰

![plot\_spectroscopy](file:/Users/yamlam/Documents/obsdiannote/🧪%20Script%20Labs/Thematic/web%20analytics/Report_web%20analytics_files/figure-markdown_strict/reference_Pyramids_base-1.png)

### Reference Pyramids

In the Reference Pyramids method, “Classic Literature” usually refers to the earliest literature that proposes theories or frameworks in a research field, while “core literature” refers to literature that constructively develops or applies those classic works.

When collecting literature on the topic of “web analytics”, we first identified the top 5 most frequently co-cited papers as the “Classic Literature.” We then counted the number of papers citing each classic paper, and ranked them by citation count. We selected papers with over 77 citations as the “core literature” derived from each classic work. Below, we outline the classic and corresponding core literature in a table format.

The table headers are the Classic Literature. “TI” indicates the paper title, “PY” the publication year, and “TC” the number of citations for each core paper.

![](file:/Users/yamlam/Documents/obsdiannote/🧪%20Script%20Labs/Thematic//web%20analytics/exports/Pyramids.png)
[html](file:/Users/yamlam/Documents/obsdiannote/🧪%20Script%20Labs/Thematic//web%20analytics/exports/Pyramids.html)

#### VAN ECK NJ 2010 SCIENTOMETRICS

[Note](Pyramid%20-%20VAN%20ECK%20NJ%202010%20SCIENTOMETRICS%20.canvas)
\| [DOI](https://sci-hub.ee/10.1007/S11192-009-0146-3) \| [Link](https://scholar.google.it/scholar?hl=en&as_sdt=0%2C5&q=VAN%20ECK%20NJ%202010%20SCIENTOMETRICS)

| TI                                                                                                                  |   PY |  TC |
|:--------------------------------------------------------------------------------------------------------------------|-----:|----:|
| USING NETWORK SCIENCE AND TEXT ANALYTICS TO PRODUCE SURVEYS IN A SCIENTIFIC TOPIC                                   | 2016 |  91 |
| BIG DATA AND DYNAMIC CAPABILITIES: A BIBLIOMETRIC ANALYSIS AND SYSTEMATIC LITERATURE REVIEW                         | 2019 | 117 |
| SPATIAL DECISION SUPPORT SYSTEMS: THREE DECADES ON                                                                  | 2019 |  84 |
| BIG DATA AND ARTIFICIAL INTELLIGENCE IN THE MARITIME INDUSTRY: A BIBLIOMETRIC REVIEW AND FUTURE RESEARCH DIRECTIONS | 2020 | 125 |
| KNOWLEDGE MANAGEMENT IN THE FOURTH INDUSTRIAL REVOLUTION: MAPPING THE LITERATURE AND SCOPING FUTURE AVENUES         | 2021 | 158 |

#### TANDOC EC 2014 NEW MEDIA SOC

[Note](Pyramid%20-%20TANDOC%20EC%202014%20NEW%20MEDIA%20SOC%20.canvas)
\| [DOI](https://sci-hub.ee/10.1177/1461444814530541) \| [Link](https://scholar.google.it/scholar?hl=en&as_sdt=0%2C5&q=TANDOC%20EC%202014%20NEW%20MEDIA%20SOC)

| TI                                                                                                                                               |   PY |  TC |
|:-------------------------------------------------------------------------------------------------------------------------------------------------|-----:|----:|
| BOUNDARY WORK, INTERLOPER MEDIA, AND ANALYTICS IN NEWSROOMS AN ANALYSIS OF THE ROLES OF WEB ANALYTICS COMPANIES IN NEWS PRODUCTION               | 2018 | 115 |
| WEB ANALYTICS AND THE FUNCTIONAL DIFFERENTIATION OF JOURNALISM CULTURES: INDIVIDUAL, ORGANIZATIONAL AND PLATFORM-SPECIFIC INFLUENCES ON NEWSWORK | 2017 |  78 |
| QUANTIFIED AUDIENCES IN NEWS PRODUCTION A SYNTHESIS AND RESEARCH AGENDA                                                                          | 2018 |  94 |
| THE AUDIENCE-ORIENTED EDITOR MAKING SENSE OF THE AUDIENCE IN THE NEWSROOM                                                                        | 2018 | 147 |
| WHEN NEWS MEETS THE AUDIENCE: HOW AUDIENCE FEEDBACK ONLINE AFFECTS NEWS PRODUCTION AND CONSUMPTION                                               | 2017 | 119 |

#### CHEN HC 2012 MIS QUART

[Note](Pyramid%20-%20CHEN%20HC%202012%20MIS%20QUART%20.canvas)
\| [Link](https://scholar.google.it/scholar?hl=en&as_sdt=0%2C5&q=CHEN%20HC%202012%20MIS%20QUART)

| TI                                                                                                                    |   PY |  TC |
|:----------------------------------------------------------------------------------------------------------------------|-----:|----:|
| BIG DATA AND DYNAMIC CAPABILITIES: A BIBLIOMETRIC ANALYSIS AND SYSTEMATIC LITERATURE REVIEW                           | 2019 | 117 |
| FORECASTING CITY ARRIVALS WITH GOOGLE ANALYTICS                                                                       | 2016 |  97 |
| CREATING STRATEGIC BUSINESS VALUE FROM BIG DATA ANALYTICS: A RESEARCH FRAMEWORK                                       | 2018 | 377 |
| BIG DATA: DIMENSIONS, EVOLUTION, IMPACTS, AND CHALLENGES                                                              | 2017 | 235 |
| EXPLORING EMERGING HACKER ASSETS AND KEY HACKERS FOR PROACTIVE CYBER THREAT INTELLIGENCE                              | 2017 |  91 |
| HUMAN RESOURCES FOR BIG DATA PROFESSIONS: A SYSTEMATIC CLASSIFICATION OF JOB ROLES AND REQUIRED SKILL SETS            | 2018 | 149 |
| SOCIAL EMOTION CLASSIFICATION OF SHORT TEXT VIA TOPIC-LEVEL MAXIMUM ENTROPY MODEL                                     | 2016 |  88 |
| DRIVING INNOVATION THROUGH BIG OPEN LINKED DATA (BOLD): EXPLORING ANTECEDENTS USING INTERPRETIVE STRUCTURAL MODELLING | 2017 |  92 |

#### BLEI DM 2003 J MACH LEARN RES

[Note](Pyramid%20-%20BLEI%20DM%202003%20J%20MACH%20LEARN%20RES%20.canvas)
\| [DOI](https://sci-hub.ee/10.1162/JMLR.2003.3.4-5.993) \| [Link](https://scholar.google.it/scholar?hl=en&as_sdt=0%2C5&q=BLEI%20DM%202003%20J%20MACH%20LEARN%20RES)

| TI                                                                                                                      |   PY |  TC |
|:------------------------------------------------------------------------------------------------------------------------|-----:|----:|
| USING NETWORK SCIENCE AND TEXT ANALYTICS TO PRODUCE SURVEYS IN A SCIENTIFIC TOPIC                                       | 2016 |  91 |
| EXPLORING EMERGING HACKER ASSETS AND KEY HACKERS FOR PROACTIVE CYBER THREAT INTELLIGENCE                                | 2017 |  91 |
| SOCIAL ANALYTICS: LEARNING FUZZY PRODUCT ONTOLOGIES FOR ASPECT-ORIENTED SENTIMENT ANALYSIS                              | 2014 | 105 |
| VIRTUALLY IN THIS TOGETHER - HOW WEB-CONFERENCING SYSTEMS ENABLED A NEW VIRTUAL TOGETHERNESS DURING THE COVID-19 CRISIS | 2020 | 123 |
| TECHNOLOGY-ENHANCED LEARNING IN HIGHER EDUCATION: A BIBLIOMETRIC ANALYSIS WITH LATENT SEMANTIC APPROACH                 | 2020 | 114 |

#### ANDERSON CW 2011 JOURNALISM

[Note](Pyramid%20-%20ANDERSON%20CW%202011%20JOURNALISM%20.canvas)
\| [DOI](https://sci-hub.ee/10.1177/1464884911402451) \| [Link](https://scholar.google.it/scholar?hl=en&as_sdt=0%2C5&q=ANDERSON%20CW%202011%20JOURNALISM)

| TI                                                                                                                                               |   PY |  TC |
|:-------------------------------------------------------------------------------------------------------------------------------------------------|-----:|----:|
| BOUNDARY WORK, INTERLOPER MEDIA, AND ANALYTICS IN NEWSROOMS AN ANALYSIS OF THE ROLES OF WEB ANALYTICS COMPANIES IN NEWS PRODUCTION               | 2018 | 115 |
| WEB ANALYTICS AND THE FUNCTIONAL DIFFERENTIATION OF JOURNALISM CULTURES: INDIVIDUAL, ORGANIZATIONAL AND PLATFORM-SPECIFIC INFLUENCES ON NEWSWORK | 2017 |  78 |
| QUANTIFIED AUDIENCES IN NEWS PRODUCTION A SYNTHESIS AND RESEARCH AGENDA                                                                          | 2018 |  94 |
| THE AUDIENCE-ORIENTED EDITOR MAKING SENSE OF THE AUDIENCE IN THE NEWSROOM                                                                        | 2018 | 147 |
| THE ETHICS OF WEB ANALYTICS IMPLICATIONS OF USING AUDIENCE METRICS IN NEWS CONSTRUCTION                                                          | 2015 | 117 |
| JOURNALISM IS TWERKING? HOW WEB ANALYTICS IS CHANGING THE PROCESS OF GATEKEEPING                                                                 | 2014 | 240 |

Taks:

-   Outline the theories or frameworks proposed in each classic work, and describe how the core papers develop and apply them.

-   Evaluate the role of each Classic Literature group and associated core papers in “web analytics”.

-   Identify differences in discussion topics between them.

-   Use the MoSCoW method to develop a reading plan for each Classic Literature group.

### Most Cited Papers

| Paper                           | DOI                           | TC   | TCperYear | NTC    |
|:--------------------------------|:------------------------------|:-----|:----------|:-------|
| CHEN HC, 2012, MIS QUART        | NA                            | 2692 | 207.08    | 10.747 |
| MCAFEE A, 2012, HARVARD BUS REV | NA                            | 2299 | 176.85    | 9.178  |
| LI JJ, 2018, TOURISM MANAGE     | 10.1016/j.tourman.2018.03.009 | 459  | 65.57     | 11.061 |
| GERLITZ C, 2013, NEW MEDIA SOC  | 10.1177/1461444812472322      | 454  | 37.83     | 7.750  |
| WU LF, 2019, NATURE             | 10.1038/s41586-019-0941-9     | 383  | 63.83     | 12.836 |

(*Table above: Top manuscripts per citations*)

Source summary: [csv](file:/Users/yamlam/Documents/obsdiannote/🧪%20Script%20Labs/Thematic//web%20analytics/exports/S0-BasicStatistics-MostCitedPapers-web%20analytics.csv).
Relavant note: [TCperYear\_and\_NTC\_oF\_Paper](TCperYear%20and%20NTC%20of%20Paper).

## Sources 🏫

### Most Relevant Sources

| Sources                                                     | Articles |
|:------------------------------------------------------------|:---------|
| SCIENTOMETRICS                                              | 55       |
| SUSTAINABILITY                                              | 55       |
| JOURNAL OF MEDICAL INTERNET RESEARCH                        | 30       |
| DIGITAL JOURNALISM                                          | 24       |
| ENVIRONMENT AND PLANNING B-URBAN ANALYTICS AND CITY SCIENCE | 23       |

(*Table above: Most Relevant Keywords*)

| Author Keywords (DE) | Articles | Keywords-Plus (ID) | Articles |
|:---------------------|:---------|:-------------------|:---------|
| BIG DATA             | 98       | WEB                | 112      |
| SOCIAL MEDIA         | 68       | IMPACT             | 109      |
| WEB ANALYTICS        | 65       | ANALYTICS          | 93       |
| MACHINE LEARNING     | 58       | MANAGEMENT         | 83       |
| LEARNING ANALYTICS   | 54       | MODEL              | 73       |

(*Table above: Most Relevant Keywords*)

## MATADATE

Searching:: web analytics
Timespan:: 2002:2023
Sources (Journals, Books, etc):: 534
Documents:: 1232
Annual Growth Rate %:: 26.13
Document Average Age:: 5.05
Average citations per doc:: 26.95
Average citations per year per doc:: 3.943
References:: 66329
article:: 1002
article; early access:: 21
article; proceedings paper:: 19
book review:: 5
editorial material:: 4
letter:: 5
meeting abstract:: 2
review:: 168
review; early access:: 6
Keywords Plus (ID):: 2536
Author’s Keywords (DE):: 4204
Authors:: 4378
Author Appearances:: 4857
Authors of single-authored docs:: 121
Single-authored docs:: 129
Documents per Author:: 0.281
Co-Authors per Doc:: 3.94
International co-authorships %:: 31.82
