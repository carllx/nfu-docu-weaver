## DESCRIPTION

[Project\_Note\_BibliometrixReportSystem](Bibliometrix%20Report%20System)

%%This is a Bibliometric analysis focused on `Online education platform analysis`.

This analysis covers the timespan `2004:2023`, drawing from `1903` sources including journals, books, and other documents, totaling `3510` documents. During this period, the field experienced an annual growth rate of `35.69`, with the average age of documents being `4.16` years. On average, each document received `9.968` citations, amounting to `1.753` citations per year, contributing to a total of `119604` references.

The document types in this analysis include `2337` articles, `153` articles in early access, `13` articles that are proceedings papers, `7` editorial materials, `862` proceedings papers, `113` reviews, {{review; book chapter}} book chapter reviews, and `6` early access reviews.

In the realm of document contents, there are `3678` instances of Keywords Plus and `9932` Author’s Keywords. The number of authors involved is `12957`, with a total of `14860` author appearances. Among these, `376` authors have produced single-authored documents.

Focusing on author collaboration, there are `388` single-authored documents. On average, there are `0.271` documents per author and `4.23` co-authors per document. The rate of international co-authorships in this field is `22.48`.%%

## Annual ⏱️

### Annual Scientific Production

![AnnualProdution](file:///Users/yamlam/Documents/obsdiannote/🧪%20Script%20Labs/Thematic//Online%20education%20platform%20analysis/exports/S0-BasicStatistics-AnnualProdution-Online%20education%20platform%20analysis.png)

Combined from `Annual Scientific Production`, `Averge Articles Citations per Year`, `Averge Total Citations per Year`

-   Relavant source: [AnnualProdution.csv](file:/Users/yamlam/Documents/obsdiannote/🧪%20Script%20Labs/Thematic//Online%20education%20platform%20analysis/exports/S0-BasicStatistics-AnnualProdution-Online%20education%20platform%20analysis.csv)
-   Local note: [Average Article Citations per Year](Average%20Article%20Citations%20per%20Year)

### correlations

Strong Positive Correlation:
- `Articles` and `Year` with value: 0.870020208532197

%% Think about TRUE/FALSE
- When `Articles/N` increases, `MeanTCperYear`(the average number of citations per year) increases.
- When `Articles/N` (the number of publications) increases, `MeanTCperArt`(the average number of citations per article) decreases. This may be due to researchers publishing more articles in the same field, resulting in fewer citations per article.
%%

| Year | Articles | MeanTCperArt | MeanTCperYear |
|-----:|---------:|-------------:|--------------:|
| 2004 |        2 |    27.500000 |      1.375000 |
| 2005 |        2 |     0.000000 |      0.000000 |
| 2006 |        2 |     0.000000 |      0.000000 |
| 2007 |        8 |     6.375000 |      0.375000 |
| 2008 |       13 |    17.769231 |      1.110577 |
| 2009 |       14 |    45.928571 |      3.061905 |
| 2010 |       16 |    14.125000 |      1.008929 |
| 2011 |       35 |    35.257143 |      2.712088 |
| 2012 |       38 |    14.578947 |      1.214912 |
| 2013 |       49 |    24.551020 |      2.231911 |
| 2014 |       74 |    16.797297 |      1.679730 |
| 2015 |      102 |    14.754902 |      1.639434 |
| 2016 |      133 |    14.827068 |      1.853384 |
| 2017 |      202 |    14.316832 |      2.045262 |
| 2018 |      222 |    16.022523 |      2.670420 |
| 2019 |      315 |    22.330159 |      4.466032 |
| 2020 |      348 |    13.126437 |      3.281609 |
| 2021 |      598 |     8.090301 |      2.696767 |
| 2022 |      677 |     3.468242 |      1.734121 |
| 2023 |      660 |     1.260606 |      1.260606 |

(*Table above: Annual Scientific Production*)

## Countries 🌏

### Most Productive Countries

![Plot Countries](file:/Users/yamlam/Documents/obsdiannote/🧪%20Script%20Labs/Thematic/Online%20education%20platform%20analysis/Report_Online%20education%20platform%20analysis_files/figure-markdown_strict/Summary_biblioAnalysis-2.png)

| Country        | Articles | Freq     | SCP | MCP | MCP\_Ratio |
|:---------------|:---------|:---------|:----|:----|:-----------|
| CHINA          | 1008     | 0.293963 | 830 | 178 | 0.1766     |
| USA            | 382      | 0.111403 | 318 | 64  | 0.1675     |
| SPAIN          | 159      | 0.046369 | 124 | 35  | 0.2201     |
| UNITED KINGDOM | 146      | 0.042578 | 90  | 56  | 0.3836     |
| INDIA          | 107      | 0.031204 | 91  | 16  | 0.1495     |

(*Table above: Corresponding Author’s Countries*)

-   Relavant note: [MCP](MCP%20-%20Multiple%20Country%20Publications). 理解一个国家的研究环境有多开放和协作

### correlations

- [x] Prompt 通过 `Corresponding Author's Countries` 与 `Total Citations per Country` 的对比找到冲突等特征. ✅ 2024-03-31

|     | TC\_rank | Country        |   TC | AvgArtCit | Articles | SCP | MCP | MCP\_Ratio |
|:----|---------:|:---------------|-----:|----------:|---------:|----:|----:|-----------:|
| 1   |        3 | JAPAN          | 4650 |   103.333 |       45 |  32 |  13 |     0.2889 |
| 7   |        2 | USA            | 5943 |    15.558 |      382 | 318 |  64 |     0.1675 |
| 14  |        6 | GERMANY        | 1278 |    12.653 |      101 |  67 |  34 |     0.3366 |
| 16  |        4 | UNITED KINGDOM | 1718 |    11.767 |      146 |  90 |  56 |     0.3836 |
| 18  |        7 | AUSTRALIA      | 1111 |    10.892 |      102 |  75 |  27 |     0.2647 |
| 24  |        8 | CANADA         |  649 |     9.833 |       66 |  47 |  19 |     0.2879 |
| 25  |       10 | ITALY          |  530 |     9.636 |       55 |  40 |  15 |     0.2727 |
| 26  |        1 | CHINA          | 9332 |     9.258 |     1008 | 830 | 178 |     0.1766 |
| 30  |        5 | SPAIN          | 1317 |     8.283 |      159 | 124 |  35 |     0.2201 |
| 33  |        9 | KOREA          |  555 |     8.162 |       68 |  48 |  20 |     0.2941 |
| 39  |       21 | TURKEY         |  229 |     6.543 |       35 |  29 |   6 |     0.1714 |
| 45  |       22 | INDONESIA      |  226 |     5.512 |       41 |  32 |   9 |     0.2195 |
| 47  |       13 | MALAYSIA       |  436 |     4.688 |       93 |  71 |  22 |     0.2366 |
| 49  |       16 | BRAZIL         |  311 |     4.380 |       71 |  59 |  12 |     0.1690 |
| 57  |       14 | INDIA          |  368 |     3.439 |      107 |  91 |  16 |     0.1495 |
| 64  |       37 | PORTUGAL       |  108 |     2.919 |       37 |  34 |   3 |     0.0811 |
| 65  |       24 | ROMANIA        |  212 |     2.718 |       78 |  62 |  16 |     0.2051 |
| 68  |       25 | RUSSIA         |  201 |     2.185 |       92 |  83 |   9 |     0.0978 |
| 75  |       47 | UKRAINE        |   55 |     1.528 |       36 |  34 |   2 |     0.0556 |
| 78  |       50 | SOUTH AFRICA   |   43 |     1.194 |       36 |  29 |   7 |     0.1944 |

(*Table above: Corresponding Author’s Countries*)

table is filtered by mean of ‘Articles’ &gt; 34.6060606

Strong Positive Correlation:
- `Articles` and `TC` with value: 0.90610406358448
- `SCP` and `TC` with value: 0.902488388618308
- `MCP` and `TC` with value: 0.897377561574858
- `SCP` and `Articles` with value: 0.998890650865626
- `MCP` and `Articles` with value: 0.977449775788466
- `MCP` and `SCP` with value: 0.966421541405251

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
| CHINA          | 9332            | 9.258                     |
| USA            | 5943            | 15.558                    |
| JAPAN          | 4650            | 103.333                   |
| UNITED KINGDOM | 1718            | 11.767                    |
| SPAIN          | 1317            | 8.283                     |

(*Table above: Total Citations per Country*)

[Average\_Article\_Citations\_per\_Country](Average%20Article%20Citations%20per%20Country) 较高的平均文章引用表明更大的研究影响力。总引用量只显示数量。(有时可能只是他们发表数量多 )

### Most Productive Authors

![MostProdAuthors](file:/Users/yamlam/Documents/obsdiannote/🧪%20Script%20Labs/Thematic/Online%20education%20platform%20analysis/Report_Online%20education%20platform%20analysis_files/figure-markdown_strict/Summary_biblioAnalysis-1.png)

| Authors | Articles | Authors | Articles Fractionalized |
|:--------|:---------|:--------|:------------------------|
| LI J    | 15       | LIU Y   | 5.15                    |
| LIU Y   | 15       | WANG L  | 4.33                    |
| WANG J  | 15       | WANG Y  | 4.28                    |
| WANG L  | 15       | LI J    | 4.10                    |
| WANG H  | 14       | WANG J  | 3.96                    |

(*Table above: Most Productive Authors*)

Source summary:[csv](file:/Users/yamlam/Documents/obsdiannote/🧪%20Script%20Labs/Thematic//Online%20education%20platform%20analysis/exports/S0-BasicStatistics-MostProdAuthors-Online%20education%20platform%20analysis.csv).
Relavant note: [MostProdAuthors](MostProdAuthors). `Articles Fractionalized`: 考虑共同写作比例的分数化文章计数。它避免了多作者论文的重复计算。

### H-Index of Authors

[Authors’ Local Impact](Authors'%20Local%20Impact%20-%20Dominance%20ranking%20Authors)

| Element | h\_index | g\_index |  m\_index |  TC |  NP | PY\_start |
|:--------|---------:|---------:|----------:|----:|----:|----------:|
| LI J    |        7 |       15 | 0.8750000 | 422 |  15 |      2017 |
| CHEN Y  |        5 |        7 | 0.4166667 |  61 |  13 |      2013 |
| LIU Y   |        5 |        9 | 0.5000000 |  82 |  15 |      2015 |
| WANG H  |        5 |       14 | 0.4166667 | 222 |  14 |      2013 |
| WANG J  |        5 |        8 | 0.3125000 |  77 |  15 |      2009 |
| WANG Y  |        5 |        7 | 0.5000000 |  53 |  14 |      2015 |
| WANG L  |        4 |        7 | 0.4444444 |  59 |  15 |      2016 |
| ZHANG Q |        4 |        5 | 0.6666667 |  28 |  12 |      2019 |
| ZHANG Y |        4 |        7 | 0.6666667 |  64 |  12 |      2019 |
| LI Y    |        3 |        8 | 0.5000000 |  67 |  12 |      2019 |

(*Table above: Dominance ranking Authors*)

Authors’ Local Impact
结果显示每个作者的姓名、h指数、g指数、m指数、总被引量、论文数量、发表起始年份。

-   h指数:反映影响力和论文质量.
-   g指数:考虑论文引用次数分布.
-   m指数:考虑作者生产力.

## Papers 📰

![plot\_spectroscopy](file:/Users/yamlam/Documents/obsdiannote/🧪%20Script%20Labs/Thematic/Online%20education%20platform%20analysis/Report_Online%20education%20platform%20analysis_files/figure-markdown_strict/reference_Pyramids_base-1.png)

### Reference Pyramids

In the Reference Pyramids method, “Classic Literature” usually refers to the earliest literature that proposes theories or frameworks in a research field, while “core literature” refers to literature that constructively develops or applies those classic works.

When collecting literature on the topic of “Online education platform analysis”, we first identified the top 4 most frequently co-cited papers as the “Classic Literature.” We then counted the number of papers citing each classic paper, and ranked them by citation count. We selected papers with over 45 citations as the “core literature” derived from each classic work. Below, we outline the classic and corresponding core literature in a table format.

The table headers are the Classic Literature. “TI” indicates the paper title, “PY” the publication year, and “TC” the number of citations for each core paper.

![](file:/Users/yamlam/Documents/obsdiannote/🧪%20Script%20Labs/Thematic//Online%20education%20platform%20analysis/exports/Pyramids.png)
[html](file:/Users/yamlam/Documents/obsdiannote/🧪%20Script%20Labs/Thematic//Online%20education%20platform%20analysis/exports/Pyramids.html)

#### BRAUN VIRGINIA 2006 QUAL RES PSYCHOL

[Note](Pyramid%20-%20BRAUN%20VIRGINIA%202006%20QUAL%20RES%20PSYCHOL%20.canvas)
\| [DOI](https://sci-hub.se/10.1191/1478088706QP063OA) [DOI](https://sci-hub.se/10.1191/1478088706QP063OA) \| [Link](https://scholar.google.it/scholar?hl=en&as_sdt=0%2C5&q=BRAUN%20VIRGINIA%202006%20QUAL%20RES%20PSYCHOL)

| TI                                                                                               |   PY |  TC |
|:-------------------------------------------------------------------------------------------------|-----:|----:|
| AN EXPLORATORY STUDY OF GAMBLING OPERATORS’ USE OF SOCIAL MEDIA AND THE LATENT MESSAGES CONVEYED | 2016 |  52 |

#### FORNELL C 1981 J MARKETING RES

[Note](Pyramid%20-%20FORNELL%20C%201981%20J%20MARKETING%20RES%20.canvas)
\| [DOI](https://sci-hub.se/10.2307/3151312) \| [Link](https://scholar.google.it/scholar?hl=en&as_sdt=0%2C5&q=FORNELL%20C%201981%20J%20MARKETING%20RES)

| TI                                                                                                                         |   PY |  TC |
| :------------------------------------------------------------------------------------------------------------------------- | ---: | --: |
| UNDERSTANDING THE EFFECTS OF PHYSICAL EXPERIENCE AND INFORMATION INTEGRATION ON CONSUMER USE OF ONLINE TO OFFLINE COMMERCE | 2020 |  64 |
| THE INFLUENCE OF INFORMATION SYSTEM SUCCESS AND TECHNOLOGY ACCEPTANCE MODEL ON SOCIAL MEDIA FACTORS IN EDUCATION           | 2021 |  50 |
| THE EFFECT OF SOCIAL INFLUENCE ON BLOGGERS’ USAGE INTENTION                                                                | 2011 |  62 |
| THE ROLE OF TRUST MANAGEMENT IN REWARD-BASED CROWDFUNDING                                                                  | 2016 |  91 |
|                                                                                                                            |      |     |

#### DAVIS FD 1989 MIS QUART

[Note](Pyramid%20-%20DAVIS%20FD%201989%20MIS%20QUART%20.canvas)
\| [DOI](https://sci-hub.se/10.2307/249008) \| [Link](https://scholar.google.it/scholar?hl=en&as_sdt=0%2C5&q=DAVIS%20FD%201989%20MIS%20QUART)

| TI                                                                                                                         |   PY |  TC |
|:---------------------------------------------------------------------------------------------------------------------------|-----:|----:|
| UNDERSTANDING THE EFFECTS OF PHYSICAL EXPERIENCE AND INFORMATION INTEGRATION ON CONSUMER USE OF ONLINE TO OFFLINE COMMERCE | 2020 |  64 |
| THE INFLUENCE OF INFORMATION SYSTEM SUCCESS AND TECHNOLOGY ACCEPTANCE MODEL ON SOCIAL MEDIA FACTORS IN EDUCATION           | 2021 |  50 |
| EXPLORING TEACHER ACCEPTANCE OF E-LEARNING TECHNOLOGY                                                                      | 2008 | 170 |
| THE EFFECTS OF VIRTUAL REALITY LEARNING ENVIRONMENT ON STUDENT COGNITIVE AND LINGUISTIC DEVELOPMENT                        | 2016 |  58 |

#### HAIR J F 2010 MULTIVARIATE DATA ANALYSIS

[Note](Pyramid%20-%20HAIR%20J%20F%202010%20MULTIVARIATE%20DATA%20ANALYSIS%20.canvas)
\| [DOI](https://sci-hub.se/10.1016/J.IJPHARM.2011.02.019) \| [Link](https://scholar.google.it/scholar?hl=en&as_sdt=0%2C5&q=HAIR%20J%20F%202010%20MULTIVARIATE%20DATA%20ANALYSIS)

| TI                                                                                                                         |   PY |  TC |
|:---------------------------------------------------------------------------------------------------------------------------|-----:|----:|
| UNDERSTANDING THE EFFECTS OF PHYSICAL EXPERIENCE AND INFORMATION INTEGRATION ON CONSUMER USE OF ONLINE TO OFFLINE COMMERCE | 2020 |  64 |

Taks:

-   Outline the theories or frameworks proposed in each classic work, and describe how the core papers develop and apply them.

-   Evaluate the role of each Classic Literature group and associated core papers in “Online education platform analysis”.

-   Identify differences in discussion topics between them.

-   Use the MoSCoW method to develop a reading plan for each Classic Literature group.

### Most Cited Papers

| Paper                                  | DOI                              | TC   | TCperYear | NTC    |
|:---------------------------------------|:---------------------------------|:-----|:----------|:-------|
| KATOH K, 2019, BRIEF BIOINFORM         | 10.1093/bib/bbx108               | 3898 | 649.67    | 174.56 |
| WILLIAMS AJ, 2017, J CHEMINFORMATICS   | 10.1186/s13321-017-0247-6        | 537  | 67.12     | 37.51  |
| KURAKU S, 2013, NUCLEIC ACIDS RES      | 10.1093/nar/gkt389               | 487  | 40.58     | 19.84  |
| SHAO CC, 2018, NAT COMMUN              | 10.1038/s41467-018-06930-7       | 440  | 62.86     | 27.46  |
| WARBURTON S, 2009, BRIT J EDUC TECHNOL | 10.1111/j.1467-8535.2009.00952.x | 355  | 22.19     | 7.73   |

(*Table above: Top manuscripts per citations*)

Source summary: [csv](file:/Users/yamlam/Documents/obsdiannote/🧪%20Script%20Labs/Thematic//Online%20education%20platform%20analysis/exports/S0-BasicStatistics-MostCitedPapers-Online%20education%20platform%20analysis.csv).
Relavant note: [TCperYear\_and\_NTC\_oF\_Paper](TCperYear%20and%20NTC%20of%20Paper).

## Sources 🏫

### Most Relevant Sources

| Sources                                | Articles |
|:---------------------------------------|:---------|
| SUSTAINABILITY                         | 73       |
| FRONTIERS IN PSYCHOLOGY                | 42       |
| IEEE ACCESS                            | 35       |
| EDUCATION AND INFORMATION TECHNOLOGIES | 33       |
| JOURNAL OF MEDICAL INTERNET RESEARCH   | 30       |

(*Table above: Most Relevant Keywords*)

| Author Keywords (DE) | Articles | Keywords-Plus (ID) | Articles |
|:---------------------|:---------|:-------------------|:---------|
| COVID-19             | 228      | EDUCATION          | 240      |
| ONLINE LEARNING      | 185      | STUDENTS           | 167      |
| E-LEARNING           | 182      | ONLINE             | 164      |
| SOCIAL MEDIA         | 179      | IMPACT             | 149      |
| EDUCATION            | 128      | MODEL              | 130      |

(*Table above: Most Relevant Keywords*)

## MATADATE

Searching:: Online education platform analysis
Timespan:: 2004:2023
Sources (Journals, Books, etc):: 1903
Documents:: 3510
Annual Growth Rate %:: 35.69
Document Average Age:: 4.16
Average citations per doc:: 9.968
Average citations per year per doc:: 1.753
References:: 119604
article:: 2337
article; data paper:: 8
article; early access:: 153
article; proceedings paper:: 13
article; retracted publication:: 5
editorial material:: 7
editorial material; early access:: 1
meeting abstract:: 4
proceedings paper:: 862
review:: 113
review; early access:: 6
review; retracted publication:: 1
Keywords Plus (ID):: 3678
Author’s Keywords (DE):: 9932
Authors:: 12957
Author Appearances:: 14860
Authors of single-authored docs:: 376
Single-authored docs:: 388
Documents per Author:: 0.271
Co-Authors per Doc:: 4.23
International co-authorships %:: 22.48
