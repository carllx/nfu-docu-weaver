## DESCRIPTION

[Project\_Note\_BibliometrixReportSystem](Bibliometrix%20Report%20System)

%%This is a Bibliometric analysis focused on `Augmented Reality`.

This analysis covers the timespan `1998:2023`, drawing from `1157` sources including journals, books, and other documents, totaling `2000` documents. During this period, the field experienced an annual growth rate of `19.45`, with the average age of documents being `7.35` years. On average, each document received `11.97` citations, amounting to `1.507` citations per year, contributing to a total of `36222` references.

The document types in this analysis include `381` articles, `9` articles in early access, `26` articles that are proceedings papers, `2` editorial materials, `1493` proceedings papers, `84` reviews, `1` book chapter reviews, and `4` early access reviews.

In the realm of document contents, there are `885` instances of Keywords Plus and `3871` Author’s Keywords. The number of authors involved is `5969`, with a total of `7564` author appearances. Among these, `131` authors have produced single-authored documents.

Focusing on author collaboration, there are `137` single-authored documents. On average, there are `0.335` documents per author and `3.78` co-authors per document. The rate of international co-authorships in this field is `16.6`.%%

## Annual ⏱️

### Annual Scientific Production

![AnnualProdution](file:///Users/yamlam/Documents/obsdiannote/🧪%20Script%20Labs/Thematic//Augmented%20Reality/exports/S0-BasicStatistics-AnnualProdution-Augmented%20Reality.png)

Combined from `Annual Scientific Production`, `Averge Articles Citations per Year`, `Averge Total Citations per Year`

-   Relavant source: [AnnualProdution.csv](file:/Users/yamlam/Documents/obsdiannote/🧪%20Script%20Labs/Thematic//Augmented%20Reality/exports/S0-BasicStatistics-AnnualProdution-Augmented%20Reality.csv)
-   Local note: [Average Article Citations per Year](Average%20Article%20Citations%20per%20Year)

### correlations

Strong Positive Correlation:
- `Articles` and `Year` with value: 0.88093775749432

%% Think about TRUE/FALSE
- When `Articles/N` increases, `MeanTCperYear`(the average number of citations per year) increases.
- When `Articles/N` (the number of publications) increases, `MeanTCperArt`(the average number of citations per article) decreases. This may be due to researchers publishing more articles in the same field, resulting in fewer citations per article.
%%

| Year | Articles | MeanTCperArt | MeanTCperYear |
|-----:|---------:|-------------:|--------------:|
| 1998 |        1 |   68.0000000 |     2.6153846 |
| 1999 |        4 |   39.7500000 |     1.5900000 |
| 2000 |        4 |    6.5000000 |     0.2708333 |
| 2001 |        5 |   14.6000000 |     0.6347826 |
| 2002 |        9 |   26.1111111 |     1.1868687 |
| 2003 |       17 |   13.8235294 |     0.6582633 |
| 2004 |       12 |   20.2500000 |     1.0125000 |
| 2005 |       16 |   16.5625000 |     0.8717105 |
| 2006 |       23 |    4.2608696 |     0.2367150 |
| 2007 |       29 |   10.8275862 |     0.6369168 |
| 2008 |       34 |   36.4411765 |     2.2775735 |
| 2009 |       38 |   25.9736842 |     1.7315789 |
| 2010 |       19 |   10.9473684 |     0.7819549 |
| 2011 |       49 |   30.2857143 |     2.3296703 |
| 2012 |       73 |   20.8767123 |     1.7397260 |
| 2013 |      107 |   12.9065421 |     1.1733220 |
| 2014 |      110 |   14.0454545 |     1.4045455 |
| 2015 |      128 |   10.5703125 |     1.1744792 |
| 2016 |      123 |    7.9024390 |     0.9878049 |
| 2017 |      139 |   14.6258993 |     2.0894142 |
| 2018 |      190 |   16.4315789 |     2.7385965 |
| 2019 |      239 |   11.2426778 |     2.2485356 |
| 2020 |      193 |    9.4041451 |     2.3510363 |
| 2021 |      173 |    5.9942197 |     1.9980732 |
| 2022 |      180 |    4.2111111 |     2.1055556 |
| 2023 |       85 |    0.9294118 |     0.9294118 |

(*Table above: Annual Scientific Production*)

## Countries 🌏

### Most Productive Countries

![Plot Countries](file:/Users/yamlam/Documents/obsdiannote/🧪%20Script%20Labs/Thematic/Augmented%20Reality/Report_Augmented%20Reality_files/figure-markdown_strict/Summary_biblioAnalysis-2.png)

| Country | Articles | Freq     | SCP | MCP | MCP\_Ratio |
|:--------|:---------|:---------|:----|:----|:-----------|
| USA     | 295      | 0.151671 | 267 | 28  | 0.0949     |
| CHINA   | 201      | 0.103342 | 175 | 26  | 0.1294     |
| GERMANY | 157      | 0.080720 | 131 | 26  | 0.1656     |
| BRAZIL  | 87       | 0.044730 | 77  | 10  | 0.1149     |
| ITALY   | 77       | 0.039589 | 64  | 13  | 0.1688     |

(*Table above: Corresponding Author’s Countries*)

-   Relavant note: [MCP](MCP%20-%20Multiple%20Country%20Publications). 理解一个国家的研究环境有多开放和协作

### correlations

- [x] Prompt 通过 `Corresponding Author's Countries` 与 `Total Citations per Country` 的对比找到冲突等特征. ✅ 2024-03-31

|     | TC\_rank | Country        |   TC | AvgArtCit | Articles | SCP | MCP | MCP\_Ratio |
|:----|---------:|:---------------|-----:|----------:|---------:|----:|----:|-----------:|
| 2   |        2 | SPAIN          | 2059 |    31.197 |       66 |  47 |  19 |     0.2879 |
| 4   |       12 | SWITZERLAND    |  615 |    20.500 |       30 |  21 |   9 |     0.3000 |
| 6   |        6 | AUSTRALIA      | 1034 |    19.885 |       52 |  38 |  14 |     0.2692 |
| 7   |       10 | CANADA         |  769 |    19.718 |       39 |  30 |   9 |     0.2308 |
| 9   |        1 | USA            | 5438 |    18.434 |      295 | 267 |  28 |     0.0949 |
| 10  |        8 | AUSTRIA        |  938 |    18.392 |       51 |  34 |  17 |     0.3333 |
| 11  |        7 | UNITED KINGDOM | 1012 |    18.071 |       56 |  45 |  11 |     0.1964 |
| 16  |       13 | NETHERLANDS    |  508 |    15.875 |       32 |  24 |   8 |     0.2500 |
| 19  |        3 | GERMANY        | 1746 |    11.121 |      157 | 131 |  26 |     0.1656 |
| 20  |        9 | ITALY          |  836 |    10.857 |       77 |  64 |  13 |     0.1688 |
| 24  |       11 | KOREA          |  627 |     9.952 |       63 |  54 |   9 |     0.1429 |
| 27  |       15 | FRANCE         |  351 |     9.486 |       37 |  30 |   7 |     0.1892 |
| 35  |       16 | PORTUGAL       |  351 |     6.882 |       51 |  45 |   6 |     0.1176 |
| 36  |        4 | CHINA          | 1323 |     6.582 |      201 | 175 |  26 |     0.1294 |
| 37  |       19 | MALAYSIA       |  245 |     6.447 |       38 |  33 |   5 |     0.1316 |
| 41  |       25 | UKRAINE        |  142 |     5.680 |       25 |  23 |   2 |     0.0800 |
| 44  |       14 | BRAZIL         |  473 |     5.437 |       87 |  77 |  10 |     0.1149 |
| 45  |       26 | TURKEY         |  137 |     5.269 |       26 |  22 |   4 |     0.1538 |
| 50  |       17 | JAPAN          |  301 |     4.426 |       68 |  62 |   6 |     0.0882 |
| 51  |       31 | ROMANIA        |  113 |     4.346 |       26 |  23 |   3 |     0.1154 |
| 57  |       36 | INDONESIA      |   81 |     3.115 |       26 |  25 |   1 |     0.0385 |
| 60  |       22 | INDIA          |  180 |     2.812 |       64 |  57 |   7 |     0.1094 |

(*Table above: Corresponding Author’s Countries*)

table is filtered by mean of ‘Articles’ &gt; 23.7195122

Strong Negative Correlation:
- `MCP` and `TC_rank` with value: -0.716188355695753
Strong Positive Correlation:
- `Articles` and `TC` with value: 0.884206289954644
- `SCP` and `TC` with value: 0.875981263701172
- `MCP` and `TC` with value: 0.83229216136326
- `SCP` and `Articles` with value: 0.997694525507552
- `MCP` and `Articles` with value: 0.895377179653696
- `MCP` and `SCP` with value: 0.863092125774134

%%
Highlight:
If the more articles published(`Articles/N`),
- the less citations(`Total.Citations`) received?
- the less citations per article(`Average.Article.Citations`) received?
if so, it may be due to researchers publishing more articles in the same field, but they are `not necessarily high-quality articles`.
%%

## Authors 🧑‍🏫

| Country   | Total Citations | Average Article Citations |
|:----------|:----------------|:--------------------------|
| USA       | 5438            | 18.434                    |
| SPAIN     | 2059            | 31.197                    |
| GERMANY   | 1746            | 11.121                    |
| CHINA     | 1323            | 6.582                     |
| SINGAPORE | 1157            | 64.278                    |

(*Table above: Total Citations per Country*)

[Average\_Article\_Citations\_per\_Country](Average%20Article%20Citations%20per%20Country) 较高的平均文章引用表明更大的研究影响力。总引用量只显示数量。(有时可能只是他们发表数量多 )

### Most Productive Authors

![MostProdAuthors](file:/Users/yamlam/Documents/obsdiannote/🧪%20Script%20Labs/Thematic/Augmented%20Reality/Report_Augmented%20Reality_files/figure-markdown_strict/Summary_biblioAnalysis-1.png)

| Authors        | Articles | Authors        | Articles Fractionalized |
|:---------------|:---------|:---------------|:------------------------|
| BILLINGHURST M | 32       | BILLINGHURST M | 7.83                    |
| SCHMALSTIEG D  | 23       | SCHMALSTIEG D  | 6.78                    |
| SANDOR C       | 19       | THOMAS BH      | 5.42                    |
| THOMAS BH      | 17       | HÖLLERER T     | 5.15                    |
| NAVAB N        | 16       | SANDOR C       | 5.03                    |

(*Table above: Most Productive Authors*)

Source summary:[csv](file:/Users/yamlam/Documents/obsdiannote/🧪%20Script%20Labs/Thematic//Augmented%20Reality/exports/S0-BasicStatistics-MostProdAuthors-Augmented%20Reality.csv).
Relavant note: [MostProdAuthors](MostProdAuthors). `Articles Fractionalized`: 考虑共同写作比例的分数化文章计数。它避免了多作者论文的重复计算。

### H-Index of Authors

[Authors’ Local Impact](Authors'%20Local%20Impact%20-%20Dominance%20ranking%20Authors)

| Element        | h\_index | g\_index |  m\_index |   TC |  NP | PY\_start |
|:---------------|---------:|---------:|----------:|-----:|----:|----------:|
| SCHMALSTIEG D  |       15 |       23 | 0.6250000 |  627 |  23 |      2001 |
| BILLINGHURST M |       13 |       32 | 0.5909091 | 1092 |  32 |      2003 |
| NAVAB N        |       11 |       16 | 0.5789474 |  342 |  16 |      2006 |
| FERRARI V      |       10 |       14 | 0.9090909 |  434 |  14 |      2014 |
| CUTOLO F       |        9 |       11 | 1.0000000 |  363 |  11 |      2016 |
| THOMAS BH      |        9 |       17 | 0.3913043 |  324 |  17 |      2002 |
| CONDINO S      |        8 |       10 | 0.7272727 |  162 |  10 |      2014 |
| KALKOFEN D     |        6 |        9 | 0.5000000 |  129 |   9 |      2013 |
| DE PAOLIS LT   |        5 |        6 | 0.5000000 |   48 |   8 |      2015 |
| KLINKER G      |        5 |       12 | 0.1923077 |  151 |  13 |      1999 |

(*Table above: Dominance ranking Authors*)

Authors’ Local Impact
结果显示每个作者的姓名、h指数、g指数、m指数、总被引量、论文数量、发表起始年份。

-   h指数:反映影响力和论文质量.
-   g指数:考虑论文引用次数分布.
-   m指数:考虑作者生产力.

## Papers 📰

### Reference Pyramids

![plot\_spectroscopy](file:/Users/yamlam/Documents/obsdiannote/🧪%20Script%20Labs/Thematic/Augmented%20Reality/Report_Augmented%20Reality_files/figure-markdown_strict/reference_Pyramids_base-1.png)

In the Reference Pyramids method, “classic literature” usually refers to the earliest literature that proposes theories or frameworks in a research field, while “core literature” refers to literature that constructively develops or applies those classic works.

When collecting literature on the topic of “Augmented Reality”, we first identified the top 4 most frequently co-cited papers as the “classic literature.” We then counted the number of papers citing each classic paper, and ranked them by citation count. We selected papers with over 45 citations as the “core literature” derived from each classic work. Below, we outline the classic and corresponding core literature in a table format.

The table headers are the classic literature. “TI” indicates the paper title, “PY” the publication year, and “TC” the number of citations for each core paper.

![](file:/Users/yamlam/Documents/obsdiannote/🧪%20Script%20Labs/Thematic//Augmented%20Reality/exports/Pyramids.png)
[html](file:/Users/yamlam/Documents/obsdiannote/🧪%20Script%20Labs/Thematic//Augmented%20Reality/exports/Pyramids.html)

AZUMA RT 1997 PRESENCE-VIRTUAL AUG [DOI](https://sci-hub.se/10.1162/PRES.1997.6.4.355) [Link](https://scholar.google.it/scholar?hl=en&as_sdt=0%2C5&q=AZUMA%20RT%201997%20PRESENCE-VIRTUAL%20AUG)

| TI                                                                                                         |   PY |  TC |
|:-----------------------------------------------------------------------------------------------------------|-----:|----:|
| A REVIEW ON AUGMENTED REALITY FOR VIRTUAL HERITAGE SYSTEM                                                  | 2009 |  90 |
| AUGMENTED REALITY TRENDS IN EDUCATION: A SYSTEMATIC REVIEW OF RESEARCH AND APPLICATIONS                    | 2014 | 557 |
| AUGMENTED REALITY FOR STEM LEARNING: A SYSTEMATIC REVIEW                                                   | 2018 | 325 |
| AUGMENTED REALITY IN WAREHOUSE OPERATIONS: OPPORTUNITIES AND BARRIERS                                      | 2017 |  73 |
| A SURVEY OF AUGMENTED, VIRTUAL, AND MIXED REALITY FOR CULTURAL HERITAGE                                    | 2018 | 337 |
| MOVING FROM VIRTUAL REALITY EXPOSURE-BASED THERAPY TO AUGMENTED REALITY EXPOSURE-BASED THERAPY: A REVIEW   | 2014 | 124 |
| INTEGRATING AUGMENTED REALITY IN THE ASSEMBLY DOMAIN - FUNDAMENTALS, BENEFITS AND APPLICATIONS             | 2003 |  75 |
| USING AUGMENTED REALITY TO PROMOTE HOMOGENEITY IN LEARNING ACHIEVEMENT                                     | 2015 | 100 |
| CALIBRATION-FREE AUGMENTED REALITY                                                                         | 1998 |  68 |
| AUGMENTED REALITY SYSTEM FOR VIRTUAL TRAINING OF PARTS ASSEMBLY                                            | 2015 |  68 |
| DEX-RAY: AUGMENTED REALITY NEUROSURGICAL NAVIGATION WITH A HANDHELD VIDEO PROBE                            | 2009 |  61 |
| AUGMENTED REALITY AIDED ASSEMBLY DESIGN AND PLANNING                                                       | 2007 |  55 |
| SHOPPING IN THE DIGITAL WORLD: EXAMINING CUSTOMER ENGAGEMENT THROUGH AUGMENTED REALITY MOBILE APPLICATIONS | 2019 | 187 |
| REVEL: TACTILE FEEDBACK TECHNOLOGY FOR AUGMENTED REALITY                                                   | 2012 |  84 |
| FRAMEWORK OF AFFORDANCES FOR VIRTUAL REALITY AND AUGMENTED REALITY                                         | 2019 |  77 |
| PLAYFUL TRAINING WITH AUGMENTED REALITY GAMES: CASE STUDIES TOWARDS REALITY-ORIENTED SYSTEM DESIGN         | 2013 |  46 |
| A SURVEY OF INDUSTRIAL AUGMENTED REALITY                                                                   | 2020 | 116 |
| METASURFACES FOR NEAR-EYE AUGMENTED REALITY                                                                | 2019 |  54 |
| APPLICABILITY OF AUGMENTED REALITY IN ORTHOPEDIC SURGERY - A SYSTEMATIC REVIEW                             | 2020 |  68 |
| TOWARDS PERVASIVE AUGMENTED REALITY: CONTEXT-AWARENESS IN AUGMENTED REALITY                                | 2017 | 153 |
| SKETCHING UP THE WORLD: IN SITU AUTHORING FOR MOBILE AUGMENTED REALITY                                     | 2012 |  54 |
| COLLABORATION IN AUGMENTED REALITY                                                                         | 2015 |  71 |
| STYLIZED AUGMENTED REALITY FOR IMPROVED IMMERSION                                                          | 2005 |  49 |
| A REVIEW ON INDUSTRIAL AUGMENTED REALITY SYSTEMS FOR THE INDUSTRY 4.0 SHIPYARD                             | 2018 | 211 |
| AUGMENTED REALITY IN OPEN SURGERY                                                                          | 2018 |  57 |
| VIRTUAL REALITY AND AUGMENTED REALITY IN SOCIAL LEARNING SPACES: A LITERATURE REVIEW                       | 2021 |  76 |
| A USABILITY STUDY OF MULTIMODAL INPUT IN AN AUGMENTED REALITY ENVIRONMENT                                  | 2013 |  53 |
| AN INTERACTIVE MOBILE AUGMENTED REALITY MAGICAL PLAYBOOK: LEARNING NUMBER WITH THE THIRSTY CROW            | 2013 |  56 |
| AUGMENTED REALITY TECHNOLOGY IN THE MANUFACTURING INDUSTRY: A REVIEW OF THE LAST DECADE                    | 2019 | 173 |
| ARSC: AUGMENTED REALITY STUDENT CARD AN AUGMENTED REALITY SOLUTION FOR THE EDUCATION FIELD                 | 2011 |  93 |
| TRENDS IN AUGMENTED REALITY TRACKING, INTERACTION AND DISPLAY: A REVIEW OF TEN YEARS OF ISMAR              | 2008 | 517 |
| AUGMENTED REALITY APPLICATIONS IN DESIGN AND MANUFACTURING                                                 | 2012 | 408 |
| AUGMENTED AND VIRTUAL REALITY IN ANATOMICAL EDUCATION - A SYSTEMATIC REVIEW                                | 2020 |  53 |
| AUGMENTED REALITY MOBILE APP DEVELOPMENT FOR ALL                                                           | 2018 |  46 |
| WHAT IS XR? TOWARDS A FRAMEWORK FOR AUGMENTED AND VIRTUAL REALITY                                          | 2022 |  99 |
| A FOG COMPUTING AND CLOUDLET BASED AUGMENTED REALITY SYSTEM FOR THE INDUSTRY 4.0 SHIPYARD                  | 2018 |  73 |
| USER-DEFINED GESTURES FOR AUGMENTED REALITY                                                                | 2013 | 125 |
| ACTIVE LEARNING AUGMENTED REALITY FOR STEAM EDUCATION-A CASE STUDY                                         | 2020 |  46 |

AZUMA R 2001 IEEE COMPUT GRAPH [DOI](https://sci-hub.se/10.1109/38.963459) [Link](https://scholar.google.it/scholar?hl=en&as_sdt=0%2C5&q=AZUMA%20R%202001%20IEEE%20COMPUT%20GRAPH)

| TI                                                                                                                         |   PY |  TC |
|:---------------------------------------------------------------------------------------------------------------------------|-----:|----:|
| AUGMENTED REALITY FOR STEM LEARNING: A SYSTEMATIC REVIEW                                                                   | 2018 | 325 |
| A SURVEY OF AUGMENTED, VIRTUAL, AND MIXED REALITY FOR CULTURAL HERITAGE                                                    | 2018 | 337 |
| REVEL: TACTILE FEEDBACK TECHNOLOGY FOR AUGMENTED REALITY                                                                   | 2012 |  84 |
| A SURVEY OF INDUSTRIAL AUGMENTED REALITY                                                                                   | 2020 | 116 |
| METASURFACES FOR NEAR-EYE AUGMENTED REALITY                                                                                | 2019 |  54 |
| TOWARDS PERVASIVE AUGMENTED REALITY: CONTEXT-AWARENESS IN AUGMENTED REALITY                                                | 2017 | 153 |
| COLLABORATION IN AUGMENTED REALITY                                                                                         | 2015 |  71 |
| AUGMENTED REALITY IN OPEN SURGERY                                                                                          | 2018 |  57 |
| AUGMENTED REALITY TECHNOLOGY IN THE MANUFACTURING INDUSTRY: A REVIEW OF THE LAST DECADE                                    | 2019 | 173 |
| TRENDS IN AUGMENTED REALITY TRACKING, INTERACTION AND DISPLAY: A REVIEW OF TEN YEARS OF ISMAR                              | 2008 | 517 |
| AUGMENTED REALITY APPLICATIONS IN DESIGN AND MANUFACTURING                                                                 | 2012 | 408 |
| WHAT IS XR? TOWARDS A FRAMEWORK FOR AUGMENTED AND VIRTUAL REALITY                                                          | 2022 |  99 |
| MOBILE AUGMENTED REALITY IN VOCATIONAL EDUCATION AND TRAINING                                                              | 2015 |  65 |
| UTILIZING VIRTUAL AND AUGMENTED REALITY FOR EDUCATIONAL AND CLINICAL ENHANCEMENTS IN NEUROSURGERY                          | 2017 | 160 |
| ANTHROPOMORPHISM AND AUGMENTED REALITY IN THE RETAIL ENVIRONMENT                                                           | 2019 |  85 |
| AUGMENTED REALITY AND MIXED REALITY FOR HEALTHCARE EDUCATION BEYOND SURGERY: AN INTEGRATIVE REVIEW                         | 2020 |  86 |
| A SURVEY OF MOBILE AND WIRELESS TECHNOLOGIES FOR AUGMENTED REALITY SYSTEMS                                                 | 2008 | 131 |
| AUGMENTED-REALITY VISUALIZATIONS GUIDED BY COGNITION: PERCEPTUAL HEURISTICS FOR COMBINING VISIBLE AND OBSCURED INFORMATION | 2002 |  56 |
| AUGMENTED REALITY IN DENTISTRY: A CURRENT PERSPECTIVE                                                                      | 2018 |  47 |

MILGRAM P 1994 IEICE T INF SYST VE77D P1321 [DOI](https://sci-hub.se/) [Link](https://scholar.google.it/scholar?hl=en&as_sdt=0%2C5&q=MILGRAM%20P%201994%20IEICE%20T%20INF%20SYST%20VE77D%20P1321)

| TI                                                                                                        |   PY |  TC |
|:----------------------------------------------------------------------------------------------------------|-----:|----:|
| A REVIEW ON AUGMENTED REALITY FOR VIRTUAL HERITAGE SYSTEM                                                 | 2009 |  90 |
| A SURVEY OF AUGMENTED, VIRTUAL, AND MIXED REALITY FOR CULTURAL HERITAGE                                   | 2018 | 337 |
| MOVING FROM VIRTUAL REALITY EXPOSURE-BASED THERAPY TO AUGMENTED REALITY EXPOSURE-BASED THERAPY: A REVIEW  | 2014 | 124 |
| USING AUGMENTED REALITY TO PROMOTE HOMOGENEITY IN LEARNING ACHIEVEMENT                                    | 2015 | 100 |
| FRAMEWORK OF AFFORDANCES FOR VIRTUAL REALITY AND AUGMENTED REALITY                                        | 2019 |  77 |
| COLLABORATION IN AUGMENTED REALITY                                                                        | 2015 |  71 |
| AUGMENTED REALITY TECHNOLOGY IN THE MANUFACTURING INDUSTRY: A REVIEW OF THE LAST DECADE                   | 2019 | 173 |
| WHAT IS XR? TOWARDS A FRAMEWORK FOR AUGMENTED AND VIRTUAL REALITY                                         | 2022 |  99 |
| AUGMENTED REALITY AND MIXED REALITY FOR HEALTHCARE EDUCATION BEYOND SURGERY: AN INTEGRATIVE REVIEW        | 2020 |  86 |
| AUGMENTED REALITY IN NEUROSURGERY: A SYSTEMATIC REVIEW                                                    | 2017 | 178 |
| AUGMENTED AND VIRTUAL REALITY FOR INSPECTION AND MAINTENANCE PROCESSES IN THE AVIATION INDUSTRY           | 2018 |  65 |
| AUGMENTED REALITY TECHNOLOGIES, SYSTEMS AND APPLICATIONS                                                  | 2011 | 619 |
| ARLEARN: AUGMENTED REALITY MEETS AUGMENTED VIRTUALITY                                                     | 2012 |  65 |
| AUGMENTED AND VIRTUAL REALITY EVOLUTION AND FUTURE TENDENCY                                               | 2020 |  46 |
| ANNEXING REALITY: ENABLING OPPORTUNISTIC USE OF EVERYDAY OBJECTS AS TANGIBLE PROXIES IN AUGMENTED REALITY | 2016 |  91 |
| THE STATUS OF AUGMENTED REALITY IN LAPAROSCOPIC SURGERY AS OF 2016                                        | 2017 | 187 |

BILLINGHURST MARK 2015 FOUNDATIONS AND TRENDS IN HUMAN-COMPUTER INTERACTION [DOI](https://sci-hub.se/10.1561/1100000049) [Link](https://scholar.google.it/scholar?hl=en&as_sdt=0%2C5&q=BILLINGHURST%20MARK%202015%20FOUNDATIONS%20AND%20TRENDS%20IN%20HUMAN-COMPUTER%20INTERACTION)

| TI                                                                                                    |   PY |  TC |
|:------------------------------------------------------------------------------------------------------|-----:|----:|
| A SURVEY OF AUGMENTED, VIRTUAL, AND MIXED REALITY FOR CULTURAL HERITAGE                               | 2018 | 337 |
| FRAMEWORK OF AFFORDANCES FOR VIRTUAL REALITY AND AUGMENTED REALITY                                    | 2019 |  77 |
| A SURVEY OF INDUSTRIAL AUGMENTED REALITY                                                              | 2020 | 116 |
| TOWARDS PERVASIVE AUGMENTED REALITY: CONTEXT-AWARENESS IN AUGMENTED REALITY                           | 2017 | 153 |
| AUGMENTED REALITY IN OPEN SURGERY                                                                     | 2018 |  57 |
| WHAT IS XR? TOWARDS A FRAMEWORK FOR AUGMENTED AND VIRTUAL REALITY                                     | 2022 |  99 |
| COMPARATIVE EVALUATION OF VIRTUAL AND AUGMENTED REALITY FOR TEACHING MATHEMATICS IN PRIMARY EDUCATION | 2020 |  63 |
| SIMULATOR SICKNESS IN AUGMENTED REALITY TRAINING USING THE MICROSOFT HOLOLENS                         | 2018 |  56 |
| REMIXED REALITY: MANIPULATING SPACE AND TIME IN AUGMENTED REALITY                                     | 2018 | 147 |
| GENERAL REQUIREMENTS FOR INDUSTRIAL AUGMENTED REALITY APPLICATIONS                                    | 2018 |  46 |

Taks:

-   Outline the theories or frameworks proposed in each classic work, and describe how the core papers develop and apply them.

-   Evaluate the role of each classic literature group and associated core papers in “Augmented Reality”.

-   Identify differences in discussion topics between them.

-   Use the MoSCoW method to develop a reading plan for each classic literature group.

### Most Cited Papers

| Paper                                    | DOI                        | TC  | TCperYear | NTC   |
|:-----------------------------------------|:---------------------------|:----|:----------|:------|
| CARMIGNIANI J, 2011, MULTIMED TOOLS APPL | 10.1007/s11042-010-0660-6  | 619 | 44.21     | 20.44 |
| BACCA J, 2014, EDUC TECHNOL SOC          | NA                         | 557 | 50.64     | 39.66 |
| ZHOU F, 2008, INT SYM MIX AUGMENT        | NA                         | 517 | 30.41     | 14.19 |
| NEE AYC, 2012, CIRP ANN-MANUF TECHN      | 10.1016/j.cirp.2012.05.010 | 408 | 31.38     | 19.54 |
| BEKELE MK, 2018, ACM J COMPUT CULT HE    | 10.1145/3145534            | 337 | 48.14     | 20.51 |

(*Table above: Top manuscripts per citations*)

Source summary: [csv](file:/Users/yamlam/Documents/obsdiannote/🧪%20Script%20Labs/Thematic//Augmented%20Reality/exports/S0-BasicStatistics-MostCitedPapers-Augmented%20Reality.csv).
Relavant note: [TCperYear\_and\_NTC\_oF\_Paper](TCperYear%20and%20NTC%20of%20Paper).

## Sources 🏫

### Most Relevant Sources

| Sources                                                                                                   | Articles |
|:----------------------------------------------------------------------------------------------------------|:---------|
| 2021 IEEE INTERNATIONAL SYMPOSIUM ON MIXED AND AUGMENTED REALITY ADJUNCT PROCEEDINGS (ISMAR-ADJUNCT 2021) | 22       |
| 2013 INTERNATIONAL CONFERENCE ON VIRTUAL AND AUGMENTED REALITY IN EDUCATION                               | 19       |
| 2014 IEEE INTERNATIONAL SYMPOSIUM ON MIXED AND AUGMENTED REALITY (ISMAR) - SCIENCE AND TECHNOLOGY         | 19       |
| IEEE TRANSACTIONS ON VISUALIZATION AND COMPUTER GRAPHICS                                                  | 19       |
| 2013 IEEE INTERNATIONAL SYMPOSIUM ON MIXED AND AUGMENTED REALITY (ISMAR) - SCIENCE AND TECHNOLOGY         | 18       |

(*Table above: Most Relevant Keywords*)

| Author Keywords (DE)     | Articles | Keywords-Plus (ID) | Articles |
|:-------------------------|:---------|:-------------------|:---------|
| AUGMENTED REALITY        | 1678     | SYSTEM             | 84       |
| VIRTUAL REALITY          | 238      | EDUCATION          | 82       |
| MIXED REALITY            | 116      | VIRTUAL-REALITY    | 72       |
| EDUCATION                | 75       | TECHNOLOGY         | 53       |
| MOBILE AUGMENTED REALITY | 53       | DESIGN             | 44       |

(*Table above: Most Relevant Keywords*)

## MATADATE

Searching:: Augmented Reality
Timespan:: 1998:2023
Sources (Journals, Books, etc):: 1157
Documents:: 2000
Annual Growth Rate %:: 19.45
Document Average Age:: 7.35
Average citations per doc:: 11.97
Average citations per year per doc:: 1.507
References:: 36222
article:: 381
article; early access:: 9
article; proceedings paper:: 26
editorial material:: 2
proceedings paper:: 1493
review:: 84
review; book chapter:: 1
review; early access:: 4
Keywords Plus (ID):: 885
Author’s Keywords (DE):: 3871
Authors:: 5969
Author Appearances:: 7564
Authors of single-authored docs:: 131
Single-authored docs:: 137
Documents per Author:: 0.335
Co-Authors per Doc:: 3.78
International co-authorships %:: 16.6
