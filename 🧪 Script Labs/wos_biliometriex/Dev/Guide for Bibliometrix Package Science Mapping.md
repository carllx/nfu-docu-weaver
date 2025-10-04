# Science Mapping Analysis with bibliometrix R-package: an example

Excerpt from: Science Mapping Analysis with the bibliometrix R-package: An Example, found at [bibliometrix].
```R
M = M[order(M$PY), ]
```
#### March 29, 2022

- [Bibliographic Collection](https://bibliometrix.org/documents/bibliometrix_Report.html#bibliographic-collection)
- [Install and load bibliometrix R-package](https://bibliometrix.org/documents/bibliometrix_Report.html#install-and-load-bibliometrix-r-package)
- [Data Loading and Converting](https://bibliometrix.org/documents/bibliometrix_Report.html#data-loading-and-converting)
- [Section 1: Descriptive Analysis](https://bibliometrix.org/documents/bibliometrix_Report.html#section-1-descriptive-analysis)
  - [Main findings about the collection](https://bibliometrix.org/documents/bibliometrix_Report.html#main-findings-about-the-collection)
  - [Most Cited References](https://bibliometrix.org/documents/bibliometrix_Report.html#most-cited-references)
- [Section 2: The Intellectual Structure of the field - Co-citation Analysis](https://bibliometrix.org/documents/bibliometrix_Report.html#section-2-the-intellectual-structure-of-the-field---co-citation-analysis)
  - [Article (References) co-citation analysis](https://bibliometrix.org/documents/bibliometrix_Report.html#article-references-co-citation-analysis)
  - [Journal (Source) co-citation analysis](https://bibliometrix.org/documents/bibliometrix_Report.html#journal-source-co-citation-analysis)
- [Section 3: Historiograph - Direct citation linkages](https://bibliometrix.org/documents/bibliometrix_Report.html#section-3-historiograph---direct-citation-linkages)
- [Section 4: The conceptual structure - Co-Word Analysis](https://bibliometrix.org/documents/bibliometrix_Report.html#section-4-the-conceptual-structure---co-word-analysis)
  - [Co-word Analysis through Keyword co-occurrences](https://bibliometrix.org/documents/bibliometrix_Report.html#co-word-analysis-through-keyword-co-occurrences)
  - [Co-word Analysis through Correspondence Analysis](https://bibliometrix.org/documents/bibliometrix_Report.html#co-word-analysis-through-correspondence-analysis)
- [Section 5: Thematic Map](https://bibliometrix.org/documents/bibliometrix_Report.html#section-5-thematic-map)
- [Section 6: The social structure - Collaboration Analysis](https://bibliometrix.org/documents/bibliometrix_Report.html#section-6-the-social-structure---collaboration-analysis)
  - [Author collaboration network](https://bibliometrix.org/documents/bibliometrix_Report.html#author-collaboration-network)
  - [Edu collaboration network](https://bibliometrix.org/documents/bibliometrix_Report.html#edu-collaboration-network)
  - [Country collaboration network](https://bibliometrix.org/documents/bibliometrix_Report.html#country-collaboration-network)

# Bibliographic Collection

**Data source**: Clarivate Analytics Web of Science ([http://apps.webofknowledge.com](http://apps.webofknowledge.com/))
**Data format**: Plaintext
**Query**: SO = “Journal of Informetrics”
**Timespan**: 2007-2017
**Document Type**: Articles, letters, review and proceedings papers
**Query data**: May, 2018

# Install and load bibliometrix R-package

```R
# Stable version from CRAN (Comprehensive R Archive Network)
# if you need to execute the code, remove # from the beginning of the next line

# install.packages("bibliometrix")


# Most updated version from GitHub
# if you need to execute the code, remove # from the beginning of the next lines

# install.packages("devtools")
# devtools::install_github("massimoaria/bibliometrix")

library(bibliometrix)
```

```R
## To cite bibliometrix in publications, please use:
## 
## Aria, M. & Cuccurullo, C. (2017) bibliometrix: An R-tool for comprehensive science mapping analysis, 
##                                  Journal of Informetrics, 11(4), pp 959-975, Elsevier.
##                         
## 
## https://www.bibliometrix.org
## 
##                         
## For information and bug reports:
##                         - Send an email to info@bibliometrix.org   
##                         - Write a post on https://github.com/massimoaria/bibliometrix/issues
##                         
## Help us to keep Bibliometrix free to download and use by contributing with a small donation to support our research team (https://bibliometrix.org/donate.html)
## 
##                         
## To start with the shiny web-interface, please digit:
## biblioshiny()
```

# Data Loading and Converting

```R
myfile <- ("https://bibliometrix.org/datasets/joi.txt")

# Converting the loaded files into a R bibliographic dataframe
M <- convert2df(file=myfile, dbsource="wos",format="plaintext")
```

```R
## 
## Converting your wos collection into a bibliographic dataframe
## 
## Done!
## 
## 
## Generating affiliation field tag AU_UN from C1:  Done!
```

# Section 1: Descriptive Analysis

Although bibliometrics is mainly known for quantifying the scientific production and measuring its quality and impact, it is also useful for displaying and analysing the intellectual, conceptual and social structures of research as well as their evolution and dynamical aspects.

But it's not just about counting blocks and looking at them. Bibliometrics is also like a time-lapse video of your Lego bucket. It shows how the pile changes over time\u2014like watching which colors become more popular or which shapes are used the most. This tells us about the intellectual and conceptual structures, which are like the common ideas and topics researchers are building with. It also shows the social structures, which means how researchers work together, sort of like seeing which kids in the neighborhood are coming over to play with the Legos.

Finally, the evolution and dynamical aspects are like the trends and changes in how the pile of Lego grows and changes\u2014new blocks come in, older ones might get less popular, and sometimes the way kids play with them changes over the years.

In this way, bibliometrics aims to describe how specific disciplines, scientific domains, or research fields are structured and how they evolve over time. In other words, bibliometric methods help to map the science (so-called science mapping) and are very useful in the case of research synthesis, especially for the systematic ones.

Bibliometrics is an academic science founded on a set of statistical methods, which can be used to analyze scientific big data quantitatively and their evolution over time and discover information. Network structure is often used to model the interaction among authors, papers/documents/articles, references, keywords, etc.

Bibliometrix is an open-source software for automating the stages of data-analysis and data-visualization. After converting and uploading bibliographic data in R, Bibliometrix performs a descriptive analysis and different research-structure analysis.

Descriptive analysis provides some **snapshots** about the annual research development, the top “k” productive authors, papers, countries and most relevant keywords.

 统计描述分析提供了关于年度研究发展的一些“快照”,包括最多产的作者、论文、国家以及最相关的关键词。

[run](alfred://runtrigger/Zotero_/zoteroa/?argument=test)

## Main findings about the collection

```r
[[options]](width=160)
results <- biblioAnalysis(M)
summary(results, k=10, pause=F, width=130)
```

```tsv


MAIN INFORMATION ABOUT DATA

 Timespan                              2007 : 2017 
 Sources (Journals, Books, etc)        1 
 Documents                             770 
 Annual Growth Rate %                  12.4 
 Document Average Age                  9 
 Average citations per doc             16.53 
 Average citations per year per doc    1.428 
 References                            14625 
 
DOCUMENT TYPES                     
 article                         698 
 article; proceedings paper      7 
 letter                          54 
 review                          11 
 
DOCUMENT CONTENTS
 Keywords Plus (ID)                    1104 
 Author's Keywords (DE)                1991 
 
AUTHORS
 Authors                               987 
 Author Appearances                    1882 
 Authors of single-authored docs       105 
 
AUTHORS COLLABORATION
 Single-authored docs                  205 
 Documents per Author                  0.78 
 Co-Authors per Doc                    2.44 
 International co-authorships %        28.44 
 

Annual Scientific Production

 Year    Articles
    2007       32
    2008       34
    2009       35
    2010       68
    2011       67
    2012       75
    2013      102
    2014       89
    2015       82
    2016       83
    2017      103

Annual Percentage Growth Rate 12.40062 


Most Productive Authors

   Authors        Articles Authors        Articles Fractionalized
1   BORNMANN L          55  BORNMANN L                      26.25
2   LEYDESDORFF L       35  LEYDESDORFF L                   17.00
3   ROUSSEAU R          33  THELWALL M                      16.70
4   ABRAMO G            31  ROUSSEAU R                      14.50
5   D'ANGELO CA         29  EGGHE L                         13.17
6   THELWALL M          27  ABRAMO G                        12.00
7   WALTMAN L           21  D'ANGELO CA                     11.33
8   DANIEL HD           15  SCHREIBER M                     11.33
9   DING Y              15  KOSMULSKI M                     11.00
10  EGGHE L             15  WALTMAN L                        9.82


Top manuscripts per citations

                          Paper                                DOI  TC TCperYear  NTC
1  ALONSO S, 2009, J INFORMETR           10.1016/j.joi.2009.04.001 254      18.1 6.44
2  MOED HF, 2010, J INFORMETR            10.1016/j.joi.2010.01.002 251      19.3 8.05
3  COSTAS R, 2007, J INFORMETR           10.1016/j.joi.2007.02.001 189      11.8 3.77
4  WAGNER CS, 2011, J INFORMETR          10.1016/j.joi.2010.06.004 186      15.5 6.24
5  GONZALEZ-PEREIRA B, 2010, J INFORMETR 10.1016/j.joi.2010.03.002 181      13.9 5.80
6  PRABOWO R, 2009, J INFORMETR          10.1016/j.joi.2009.01.003 180      12.9 4.57
7  CHEN P, 2007, J INFORMETR             10.1016/j.joi.2006.06.001 177      11.1 3.53
8  WALTMAN L, 2011, J INFORMETR-a        10.1016/j.joi.2010.08.001 176      14.7 5.90
9  CRAIG ID, 2007, J INFORMETR           10.1016/j.joi.2007.04.001 152       9.5 3.03
10 WALTMAN L, 2010, J INFORMETR          10.1016/j.joi.2010.07.002 149      11.5 4.78


Corresponding Author's Countries

          Country Articles   Freq SCP MCP MCP_Ratio
1  CHINA                96 0.1253  63  33    0.3438
2  USA                  82 0.1070  59  23    0.2805
3  ITALY                68 0.0888  62   6    0.0882
4  GERMANY              62 0.0809  35  27    0.4355
5  NETHERLANDS          57 0.0744  40  17    0.2982
6  SPAIN                57 0.0744  44  13    0.2281
7  BELGIUM              51 0.0666  26  25    0.4902
8  UNITED KINGDOM       44 0.0574  35   9    0.2045
9  POLAND               25 0.0326  23   2    0.0800
10 SWITZERLAND          22 0.0287  12  10    0.4545


SCP: Single Country Publications

MCP: Multiple Country Publications


Total Citations per Country

     Country      Total Citations Average Article Citations
1  NETHERLANDS               2052                     36.00
2  USA                       1557                     18.99
3  SPAIN                     1373                     24.09
4  UNITED KINGDOM            1120                     25.45
5  GERMANY                   1076                     17.35
6  CHINA                      913                      9.51
7  ITALY                      746                     10.97
8  BELGIUM                    558                     10.94
9  SWITZERLAND                435                     19.77
10 CANADA                     346                     16.48


Most Relevant Sources

           Sources        Articles
1 JOURNAL OF INFORMETRICS      770


Most Relevant Keywords

   Author Keywords (DE)      Articles Keywords-Plus (ID)     Articles
1        BIBLIOMETRICS             80   SCIENCE                   207
2        CITATION ANALYSIS         78   IMPACT                    127
3        H-INDEX                   69   INDICATORS                 98
4        RESEARCH EVALUATION       44   H-INDEX                    73
5        CITATIONS                 27   JOURNALS                   63
6        G-INDEX                   26   INDEX                      50
7        IMPACT FACTOR             24   PUBLICATION                50
8        SCIENTOMETRICS            23   PERFORMANCE                46
9        HIRSCH INDEX              19   NETWORKS                   45
10       COLLABORATION             18   RESEARCH PERFORMANCE       43
```

```R
plot(x=results, k=10, pause=F)
```

![150|](https://i.imgur.com/MoxEynL.png)

![150|](https://i.imgur.com/B3RazSA.png)

![150|](https://i.imgur.com/l6wZVUR.png)

![150|](https://i.imgur.com/LzUSL6Q.png)

![150|](https://i.imgur.com/fTi9zXJ.png)

## Most Cited References

```R
CR <- citations(M, field = "article", sep = ";")
cbind(CR$Cited[1:20])
```

```R
                                                                                                              [,1]
HIRSCH JE, 2005, P NATL ACAD SCI USA, V102, P16569, DOI 10.1073/PNAS.0507655102                                217
EGGHE L, 2006, SCIENTOMETRICS, V69, P131, DOI 10.1007/S11192-006-0144-7                                         96
RADICCHI F, 2008, P NATL ACAD SCI USA, V105, P17268, DOI 10.1073/PNAS.0806977105                                58
WALTMAN L, 2011, J INFORMETR, V5, P37, DOI 10.1016/J.JOI.2010.08.001                                            54
JIN BH, 2007, CHINESE SCI BULL, V52, P855, DOI 10.1007/S11434-007-0145-9                                        48
MOED HF, 2010, J INFORMETR, V4, P265, DOI 10.1016/J.JOI.2010.01.002                                             48
GARFIELD E, 1972, SCIENCE, V178, P471, DOI 10.1126/SCIENCE.178.4060.471                                         46
LUNDBERG J, 2007, J INFORMETR, V1, P145, DOI 10.1016/J.JOI.2006.09.007                                          45
BORNMANN L, 2008, J DOC, V64, P45, DOI 10.1108/00220410810844150                                                43
EGGHE L, 2005, LIBR INFORM SCI SER, P1                                                                          40
SEGLEN PO, 1992, J AM SOC INFORM SCI, V43, P628, DOI 10.1002/(SICI)1097-4571(199210)43:9<628::AID-ASI5>3.0.CO   40
VAN RAAN AFJ, 2006, SCIENTOMETRICS, V67, P491, DOI 10.1556/SCIENT.67.2006.3.10                                  39
ALONSO S, 2009, J INFORMETR, V3, P273, DOI 10.1016/J.JOI.2009.04.001                                            37
MERTON RK, 1968, SCIENCE, V159, P56, DOI 10.1126/SCIENCE.159.3810.56                                            37
MOED H. F., 2005, CITATION ANAL RES EV                                                                          37
OPTHOF T, 2010, J INFORMETR, V4, P423, DOI 10.1016/J.JOI.2010.02.003                                            37
PINSKI G, 1976, INFORM PROCESS MANAG, V12, P297, DOI 10.1016/0306-4573(76)90048-0                               37
EGGHE L, 2006, SCIENTOMETRICS, V69, P121, DOI 10.1007/S11192-006-0143-8                                         36
PRICE DJD, 1965, SCIENCE, V149, P510                                                                            35
GARFIELD E, 2006, JAMA-J AM MED ASSOC, V295, P90, DOI 10.1001/JAMA.295.1.90                                     34
```

# Section 2: The Intellectual Structure of the field - Co-citation Analysis

Citation analysis is one of the main classic techniques in bibliometrics. It shows the structure of a specific field through the linkages between nodes (e.g. authors, papers, journal), while the edges can be differently interoperated depending on the network type, that are namely co-citation, direct citation, bibliographic coupling. Please see Aria, Cuccurullo (2017).

Below there are three examples.

First, a co-citation network that shows relations between cited-reference works (nodes).

Second, a co-citation network that uses cited-journals as unit of analysis.

The useful dimensions to comment the co-citation networks are: (i) centrality and peripherality of nodes, (ii) their proximity and distance, (iii) strength of ties, (iv) clusters, (iiv) bridging contributions.

Third, a historiograph is built on direct citations. It draws the intellectual linkages in a historical order. Cited works of thousands of authors contained in a collection of published scientific articles is sufficient for recostructing the historiographic structure of the field, calling out the basic works in it.

## Article (References) co-citation analysis

**Plot options**:

- n = 50 (the funxtion plots the main 50 cited references)

- type = “fruchterman” (the network layout is generated using the Fruchterman-Reingold Algorithm)

- size.cex = TRUE (the size of the vertices is proportional to their degree)

- size = 20 (the max size of vertices)

- remove.multiple=FALSE (multiple edges are not removed)

- labelsize = 1 (defines the size of vertex labels)

- edgesize = 10 (The thickness of the edges is proportional to their strength. Edgesize defines the max value of the thickness)

- edges.min = 5 (plots only edges with a strength greater than or equal to 5)

- all other arguments assume the default values

```R
# Co-Citation Network
NetMatrix <- biblioNetwork(M, analysis = "co-citation", network = "references", sep = ";")
net=networkPlot(NetMatrix, n = 50, Title = "Co-Citation Network", type = "fruchterman", size.cex=TRUE, size=20, remove.multiple=FALSE, labelsize=1,edgesize = 10, edges.min=5)
```

![150|](https://i.imgur.com/BXIXhsL.png)

Descriptive analysis of Article co-citation network characteristics

```R
[[netstat]] <- networkStat(NetMatrix)
[[summary]](netstat,k=10)
```

## Journal (Source) co-citation analysis

```R
M=metaTagExtraction(M,"CR_SO",sep=";")
NetMatrix <- biblioNetwork(M, analysis = "co-citation", network = "sources", sep = ";")
net=networkPlot(NetMatrix, n = 50, Title = "Co-Citation Network", type = "auto", size.cex=TRUE, size=15, remove.multiple=FALSE, labelsize=1,edgesize = 10, edges.min=5)
```

![150|](https://i.imgur.com/SBTQCw3.jpeg)

Descriptive analysis of Journal co-citation network characteristics

```R
netstat <- networkStat(NetMatrix)
summary(netstat,k=10)
```

```R


Main statistics about the network

 Size                                  5746 
 Density                               0.011 
 Transitivity                          0.119 
 Diameter                              4 
 Degree Centralization                 0.881 
 Average path length                   2.032 
 
```

# Section 3: Historiograph - Direct citation linkages

```R
histResults <- histNetwork(M, sep = ";")
```

```R
## 
## WOS DB:
## Searching local citations (LCS) by reference items (SR) and DOIs...
## 
## Analyzing 27525 reference items...
## 
## Found 485 documents with no empty Local Citations (LCS)
```

```R
options(width = 130)
net <- histPlot(histResults, n=20, size = 5, labelsize = 4)
```

![150|](https://i.imgur.com/yshRleL.png)

```

 Legend

                                                                 Label                       DOI Year LCS GCS
1            COSTAS R, 2007, J INFORMETR DOI 10.1016/J.JOI.2007.02.001 10.1016/j.joi.2007.02.001 2007  21 189
2          LUNDBERG J, 2007, J INFORMETR DOI 10.1016/J.JOI.2006.09.007 10.1016/j.joi.2006.09.007 2007  45 136
3          VAN ECK NJ, 2008, J INFORMETR DOI 10.1016/J.JOI.2008.09.004 10.1016/j.joi.2008.09.004 2008  22  66
4        WOEGINGER GJ, 2008, J INFORMETR DOI 10.1016/J.JOI.2008.05.002 10.1016/j.joi.2008.05.002 2008  15  48
5         SCHREIBER M, 2008, J INFORMETR DOI 10.1016/J.JOI.2008.05.001 10.1016/j.joi.2008.05.001 2008  20  71
6            ALONSO S, 2009, J INFORMETR DOI 10.1016/J.JOI.2009.04.001 10.1016/j.joi.2009.04.001 2009  37 254
7             MOED HF, 2010, J INFORMETR DOI 10.1016/J.JOI.2010.01.002 10.1016/j.joi.2010.01.002 2010  48 251
8  GONZALEZ-PEREIRA B, 2010, J INFORMETR DOI 10.1016/J.JOI.2010.03.002 10.1016/j.joi.2010.03.002 2010  23 181
9            OPTHOF T, 2010, J INFORMETR DOI 10.1016/J.JOI.2010.02.003 10.1016/j.joi.2010.02.003 2010  37  99
10       VAN RAAN AFJ, 2010, J INFORMETR DOI 10.1016/J.JOI.2010.03.008 10.1016/j.joi.2010.03.008 2010  25  65
11          VIEIRA ES, 2010, J INFORMETR DOI 10.1016/J.JOI.2009.06.002 10.1016/j.joi.2009.06.002 2010  20  62
12      LEYDESDORFF L, 2010, J INFORMETR DOI 10.1016/J.JOI.2010.05.003 10.1016/j.joi.2010.05.003 2010  16  60
13         BORNMANN L, 2011, J INFORMETR DOI 10.1016/J.JOI.2011.01.006 10.1016/j.joi.2011.01.006 2011  17 112
14          WALTMAN L, 2011, J INFORMETR DOI 10.1016/J.JOI.2010.08.001 10.1016/j.joi.2010.08.001 2011  54 176
15         BORNMANN L, 2011, J INFORMETR DOI 10.1016/J.JOI.2010.10.009 10.1016/j.joi.2010.10.009 2011  19  73
16          AKSNES DW, 2012, J INFORMETR DOI 10.1016/J.JOI.2011.08.002 10.1016/j.joi.2011.08.002 2012  15  48
17         RADICCHI F, 2012, J INFORMETR DOI 10.1016/J.JOI.2011.09.002 10.1016/j.joi.2011.09.002 2012  15  48
18          DIDEGAH F, 2013, J INFORMETR DOI 10.1016/J.JOI.2013.08.006 10.1016/j.joi.2013.08.006 2013  17  59
19          WALTMAN L, 2013, J INFORMETR DOI 10.1016/J.JOI.2012.11.011 10.1016/j.joi.2012.11.011 2013  16  56
20         BORNMANN L, 2013, J INFORMETR DOI 10.1016/J.JOI.2012.10.001 10.1016/j.joi.2012.10.001 2013  22  60
21          WALTMAN L, 2016, J INFORMETR DOI 10.1016/J.JOI.2016.02.007 10.1016/j.joi.2016.02.007 2016  17  71
```

# Section 4: The conceptual structure - Co-Word Analysis

Co-word networks show the conceptual structure, that uncovers links between concepts through term co-occurences.

Conceptual structure is often used to understand the topics covered by scholars (so-called research front) and identify what are the most important and the most recent issues.

Dividing the whole timespan in different timeslices and comparing the conceptual structures is useful to analyze the evolution of topics over time.

Bibliometrix is able to analyze keywords, but also the terms in the articles’ titles and abstracts. It does it using network analysis or correspondance analysis (CA) or multiple correspondance analysis (MCA). CA and MCA visualise the conceptual structure in a two-dimensional plot.

## Co-word Analysis through Keyword co-occurrences

**Plot options**:

- normalize = “association” (the vertex similarities are normalized using association strength)

- n = 50 (the function plots the main 50 cited references)

- type = “fruchterman” (the network layout is generated using the Fruchterman-Reingold Algorithm)

- size.cex = TRUE (the size of the vertices is proportional to their degree)

- size = 20 (the max size of the vertices)

- remove.multiple=FALSE (multiple edges are not removed)

- labelsize = 3 (defines the max size of vertex labels)

- label.cex = TRUE (The vertex label sizes are proportional to their degree)

- edgesize = 10 (The thickness of the edges is proportional to their strength. Edgesize defines the max value of the thickness)

- label.n = 30 (Labels are plotted only for the main 30 vertices)

- edges.min = 25 (plots only edges with a strength greater than or equal to 2)

- all other arguments assume the default values

```R
NetMatrix <- biblioNetwork(M, analysis = "co-occurrences", network = "keywords", sep = ";")
net=networkPlot(NetMatrix, normalize="association", n = 50, Title = "Keyword Co-occurrences", type = "fruchterman", size.cex=TRUE, size=20, remove.multiple=F, edgesize = 10, labelsize=5,label.cex=TRUE,label.n=30,edges.min=2)
```

![150|](https://i.imgur.com/WLSXZG4.jpeg)

Descriptive analysis of keyword co-occurrences network characteristics

```
netstat <- networkStat(NetMatrix)
summary(netstat,k=10)
```

```


Main statistics about the network

 Size                                  1104 
 Density                               0.017 
 Transitivity                          0.193 
 Diameter                              5 
 Degree Centralization                 0.435 
 Average path length                   2.549 
 
```

## Co-word Analysis through Correspondence Analysis

```
suppressWarnings(
CS <- conceptualStructure(M, method="MCA", field="ID", minDegree=15, clust=5, stemming=FALSE, labelsize=15,documents=20)
)
```

![150|](https://i.imgur.com/Dur45Is.webp)

![150|](https://i.imgur.com/7i2HXmk.webp)

![150|](https://i.imgur.com/UV4cz5M.webp)

![150|](https://i.imgur.com/FUDD2x1.webp)

# Section 5: Thematic Map

Co-word analysis draws clusters of keywords. They are considered as themes, whose density and centrality can be used in classifying themes and mapping in a two-dimensional diagram.

Thematic map is a very intuitive plot and we can analyze themes according to the quadrant in which they are placed: (1) upper-right quadrant: motor-themes; (2) lower-right quadrant: basic themes; (3) lower-left quadrant: emerging or disappearing themes; (4) upper-left quadrant: very specialized/niche themes.

Please see:

Aria, M., Cuccurullo, C., D’Aniello, L., Misuraca, M., & Spano, M. (2022). **Thematic Analysis as a New Culturomic Tool: The Social Media Coverage on COVID-19 Pandemic in Italy**. _Sustainability_, 14(6), 3643, ([https://doi.org/10.3390/su14063643](https://doi.org/10.3390/su14063643)).

Aria M., Misuraca M., Spano M. (2020) **Mapping the evolution of social research and data science on 30 years of Social Indicators Research**, _Social Indicators Research_. (DOI: )[https://doi.org/10.1007/s11205-020-02281-3](https://doi.org/10.1007/s11205-020-02281-3))

Cobo, M. J., Lopez-Herrera, A. G., Herrera-Viedma, E., & Herrera, F. (2011). **An approach for detecting, quantifying, and visualizing the evolution of a research field: A practical application to the fuzzy sets theory field**. _Journal of Informetrics_, 5(1), 146-166.

```
Map=thematicMap(M, field = "ID", n = 250, minfreq = 4,
  stemming = FALSE, size = 0.7, n.labels=5, repel = TRUE)
plot(Map$map)
```

![150|](https://i.imgur.com/G3kYDY6.webp)

Cluster description

```
Clusters=Map$words[order(Map$words$Cluster,-Map$words$Occurrences),]
library(dplyr)
```

```
## 
## Attaching package: 'dplyr'
```

```
## The following objects are masked from 'package:stats':
## 
##     filter, lag
```

```
## The following objects are masked from 'package:base':
## 
##     intersect, setdiff, setequal, union
```

```
CL <- Clusters %>% group_by(.data$Cluster_Label) %>% top_n(5, .data$Occurrences)
CL
```

```
## # A tibble: 25 × 5
## # Groups:   Cluster_Label [5]
##    Occurrences Words                   Cluster Color     Cluster_Label
##          <dbl> <chr>                     <dbl> <chr>     <chr>        
##  1          73 h-index                       1 [[E41A1C80]] h-index      
##  2          34 bibliometric indicators       1 [[E41A1C80]] h-index      
##  3          33 hirsch-index                  1 [[E41A1C80]] h-index      
##  4          32 citations                     1 [[E41A1C80]] h-index      
##  5          27 output                        1 [[E41A1C80]] h-index      
##  6          45 networks                      2 [[377EB880]] networks     
##  7          40 patterns                      2 [[377EB880]] networks     
##  8          31 citation                      2 [[377EB880]] networks     
##  9          29 productivity                  2 [[377EB880]] networks     
## 10          28 model                         2 [[377EB880]] networks     
## # … with 15 more rows
```

# Section 6: The social structure - Collaboration Analysis

Collaboration networks show how authors, institutions (e.g. universities or departments) and countries relate to others in a specific field of research. For example, the first figure below is a co-author network. It discovers regular study groups, hidden groups of scholars, and pivotal authors. The second figure is called “Edu Collaboration network” and uncovers relevant institutions in a specific research field and their relations.

## Author collaboration network

```
NetMatrix <- biblioNetwork(M, analysis = "collaboration",  network = "authors", sep = ";")
net=networkPlot(NetMatrix,  n = 50, Title = "Author collaboration",type = "auto", size=10,size.cex=T,edgesize = 3,labelsize=1)
```

![150|](https://i.imgur.com/E4TZHyU.webp)

Descriptive analysis of author collaboration network characteristics

```
netstat <- networkStat(NetMatrix)
summary(netstat,k=15)
```

```


Main statistics about the network

 Size                                  987 
 Density                               0.003 
 Transitivity                          0.541 
 Diameter                              10 
 Degree Centralization                 0.034 
 Average path length                   4.609 
 
```

## Edu collaboration network

```
NetMatrix <- biblioNetwork(M, analysis = "collaboration",  network = "universities", sep = ";")
net=networkPlot(NetMatrix,  n = 50, Title = "Edu collaboration",type = "auto", size=4,size.cex=F,edgesize = 3,labelsize=1)
```

![150|](https://i.imgur.com/Lm2D4vH.webp)

Descriptive analysis of edu collaboration network characteristics

```
netstat <- networkStat(NetMatrix)
summary(netstat,k=15)
```

```


Main statistics about the network

 Size                                  532 
 Density                               0.005 
 Transitivity                          0.297 
 Diameter                              12 
 Degree Centralization                 0.069 
 Average path length                   4.565 
 
```

## Country collaboration network

```
M <- metaTagExtraction(M, Field = "AU_CO", sep = ";")
NetMatrix <- biblioNetwork(M, analysis = "collaboration",  network = "countries", sep = ";")
net=networkPlot(NetMatrix,  n = dim(NetMatrix)[1], Title = "Country collaboration",type = "circle", size=10,size.cex=T,edgesize = 1,labelsize=0.6, cluster="none")
```

![150|](https://i.imgur.com/MYzKOWk.webp)

Descriptive analysis of country collaboration network characteristics

```
netstat <- networkStat(NetMatrix)
summary(netstat,k=15)
```

```


Main statistics about the network

 Size                                  53 
 Density                               0.091 
 Transitivity                          0.392 
 Diameter                              5 
 Degree Centralization                 0.371 
 Average path length                   2.37 
 
```
