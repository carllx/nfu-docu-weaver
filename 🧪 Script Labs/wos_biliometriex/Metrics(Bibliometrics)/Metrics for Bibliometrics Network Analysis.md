[[Bibliometrics networks (文献计量网络)]]  
Bibliometrics methods include citation analysis, co-citation, co-author, co-word, and bibliometrics coupling.

## Techniques of Bibliometrics 
- **Co-author analysis**   (共同作者)  shows author networks but  doesn't always  indicate collaboration.   ([Büyükkıdık, 2022, p. 165](zotero://select/library/items/7BIM9KG8)) ([pdf](zotero://open-pdf/library/items/CEQQ3RTA?page=3&annotation=X7CCQ9GW))
- **Co-word analysis** examines document content but can be ambiguous(产生歧义) due to word variations. (单词变化)  ([Büyükkıdık, 2022, p. 165](zotero://select/library/items/7BIM9KG8)) ([pdf](zotero://open-pdf/library/items/CEQQ3RTA?page=3&annotation=97BKGXZZ))
- **Citation analysis** measures impact but favors older publications due to cumulative citations. `引文分析衡量影响力，但由于累积引文，更倾向于较旧的出版物。` ([Büyükkıdık, 2022, p. 165](zotero://select/library/items/7BIM9KG8)) ([pdf](zotero://open-pdf/library/items/CEQQ3RTA?page=3&annotation=JTTKE9YU))
- **Co-citation analysis** (同被引), is a valid method that looks at references to find links between works.   ([Büyükkıdık, 2022, p. 166](zotero://select/library/items/7BIM9KG8)) ([pdf](zotero://open-pdf/library/items/CEQQ3RTA?page=4&annotation=HMIDI6DN))`同被引分析是一种有效的方法，可以通过查看参考文献来查找作品之间的链接。`
- **Bibliometric coupling** finds connections based on references and is good for new research. [[couplingMap - Clustering by Coupling]]

```dataviewjs
const { fieldModifier: f } = this.app.plugins.plugins["metadata-menu"].api;

dv.table(
  [
	"metrics",
    "levels",
    "unit(TagFields)",
    "tech(bibmx)",
    "tech(stat)",
    "struct"
  ],
  dv
    .pages("#Bibliometrix AND [[Metric]]")
    .filter((p) => !p.file.path.includes("templates"))
    .filter((p) => !p.file.path.includes("👾classFiles"))
    .map((p) => [
      p.file.link,
      f(dv, p, "level_of_analysis"),
      f(dv, p, "unit_of_analysis"),
      f(dv, p, "bibliometric_technique"),
      f(dv, p, "statistical_technique"),
      f(dv, p, "structure")
    ])
);
```

![150|](https://i.imgur.com/tjZbcWW.png)

(-- `Worldwide trends in the scientific production on rural depopulation, a bibliometric analysis using bibliometrix R-tool | Request PDF` [researchgate](https://www.researchgate.net/publication/342255364_Worldwide_trends_in_the_scientific_production_on_rural_depopulation_a_bibliometric_analysis_using_bibliometrix_R-tool))


# Analysis Metrics

_Desc: Specifications of the analysis based on Level of Analysis, Metrics, Unit of Analysis, Bibliometric Technique, Statistical Technique, and Structure from the original Table 2._


分析以下各个item中的属性, 解释各个属性的含义, 以及列举他们可能的值 

Review the Attributes of them,  each attribute additional potential values where applicable: Level of Analysis,Unit,Technique,Analysis and Structure.

Understand the content of each header below and summarize the importance of each attribute:  Level of Analysis,Unit,Technique,Analysis and Structure. Additionally, identify any potential values where applicable.

## [[Dyn Sources]]

- **Metrics**: Source dynamics and Most productive sources
- **Level of Analysis**: Source
- **Unit**: Journal
- **Technique**: Co-citation
- **Analysis**: Network
- **Structure**: Conceptual

## Authorship
- **Metrics**: Most productive authors and Annual production per author
- **Level of Analysis**: Authors
- **Unit**: Authors
- **Technique**: Co-citation, Collaboration
- **Analysis**: Network
- **Structure**: Intellectual, Social
 

## Country Output
- **Metrics**: Most productive countries
- **Level of Analysis**: Authors
- **Unit**: Countries
- **Technique**: Collaboration
- **Analysis**: Network
- **Structure**: Social

## Cited Works
- **Metrics**: Most cited documents
- **Level of Analysis**: Documents
- **Unit**: References
- **Technique**: Co-citation
- **Analysis**: Network
- **Structure**: Intellectual

## Keyword Analysis
- **Metrics**: Most frequent Author Keywords (DE) and Keywords Plus (ID)
- **Level of Analysis**: Documents
- **Unit**: Keywords Plus (ID) and Author Keywords (DE)
- **Technique**: Co-words
- **Analysis**: Thematic mapping, Thematic evolution
- **Structure**: Conceptual

1. **Level of Analysis**:This attribute determines the focus of the bibliometrics study. It can be sources (like journals, authors, or documents). It's crucial because it defines the **main entities** being analyzed and influences the type of data collected and the conclusions drawn. 
    
2. **Unit**:  is familiar with the WoS's  [[Field Tags of WoS]] This is the specific item being measured within the level of analysis. For example, in the case of authorship, the unit is individual authors. The unit is important because it provides a quantifiable element for analysis, allowing for meaningful comparisons and insights. 
    
3. **Technique**: Techniques like co-citation, collaboration, and co-words are methods used to analyze the relationships between units. These techniques help in understanding how entities like authors, journals, or keywords are interconnected, revealing patterns and trends in the research landscape.
    
4. **Analysis**: This refers to the method of interpreting the data collected using various techniques. Network analysis is common in bibliometrics, offering a visual and [[定量调查 vs 定性调查|quantitative method]] to understand the relationships and structures within the data.
    
5. **Structure**: This is about the overarching framework or model used to organize and interpret the data. For example, a conceptual structure focuses on the ideas and theories, while a social structure might look at the relationships and interactions among researchers.

Intellectual Structure vs Conceptual Structure
知识结构 主要关注一个学科的学术和学者方面 包括这个领域里的重要理论 方法和研究成果 知识结构经常通过分析被引用次数多的文档 影响力大的作者和主要的研究趋势来显示 它代表了一个领域学术的支柱 反映了它的科学严谨性和学术贡献

观念结构 则涉及到研究领域内渗透的基本思想 主题和概念 它更多地关注的是支撑研究研究的抽象概念和理论框架 观念结构通常是通过分析关键词 主题和主题映射来探究的 它提供了对思想和概念如何随时间演变以及它们如何相互连接 从而形成领域基本原则的见解


两者的主要区别在于它们的重点 知识结构关注的是有形的学术成果及其影响而观念结构则深入到潜在的思想和理论基础上 两者对于全面了解一个领域都是必不可少的 但它们提供了关于知识景观的不同视角

Each attribute plays a role in shaping the research's findings and interpretations.