## Clustering by Coupling


### The  **Centrality** and **Impact**

![150|](https://i.imgur.com/7WWHelH.jpeg)
想象一下你在玩一款电脑游戏，游戏里有很多岛屿，每个岛屿上都有不同的知识。图书测量分析就像是这个游戏的地图制作者，要找出哪些岛屿上的知识很有名，哪些岛屿是连接其他岛屿的重要桥梁。

影响力就像是岛屿的明星程度。有些岛屿上的知识很有名，就像热门的歌曲一样，大家都在谈论它们。如果一个岛屿的影响力很高，那就意味着它上面的知识很受学者们的关注，就像热歌榜上的歌曲一样，大家都爱听。

中心性就像是岛屿的交通枢纽。有些岛屿可能不是最有名的，但是它们位置很重要，可以帮助你到达游戏中的其他岛屿。如果一个岛屿的中心性很高，那表示很多路径会经过这个岛屿，就像大城市的火车站一样，很多火车都会停靠这里。

所以，影响力就像岛屿的人气一样告诉你哪些岛屿上的知识非常闻名；中心性就像岛屿上的交通，告诉你哪个岛屿在整个游戏中的位置最重要，因为你可以通过它到达很多其他地方。

### Centrality, Impact and Frequency

中心性（Centrality）、影响力（Impact）和频率（Freq）在文献计量学中有着不同的含义和作用。

**Centrality**
中心性衡量了一个集群在网络中的互联程度，高中心性表示该集群对该领域至关重要。它通常与基础概念或技术有关，其他领域的研究往往是建立在这些基础上的。可以将中心性类比为你和你的朋友之间联系的紧密程度。

**Impact**
影响力可能来源于研究的深度、质量、引用次数或实际应用。它标志着一个集群对该领域或行业影响的力度和重要性。影响力可以反映在研究被引用的频率或该领域内的重要性上。例如，一项开创性的研究、新理论或新技术，尽管不经常被提及，但具有深远的影响。

**Frequency**
频率是对主题在数据集中出现次数的直接计数，可以初步表明受欢迎程度或流行程度。高频率表示该主题在该领域具有更大的影响力或关注度。低频率可能意味着该主题是一个更小众或新兴的话题，没有被广泛研究或可能特定于该领域的特定方面。

总结：中心性衡量了一个集群在网络中的互联程度，影响力反映了一个集群对该领域的重要性和影响力，而频率则初步表明了一个主题的受欢迎程度或流行程度。

### 不同象限中集群的意义

**象限A**: 高影响力，低中心性

- **意义**: 这个集群是一个高质量研究的宝库，其研究成果在其领域内被广泛引用。这些研究可能是突破性的研究或创新技术，已经引起了关注，但在各个虚拟现实研究领域中尚未广泛采用。
- **关注时机**: 当研究人员希望利用前沿研究成果或在已有研究基础上推动领域发展时，他们应该深入研究这个集群。就像在篮球领域想要成为明星球员一样，需要学习那些已经很厉害、技术高超的球员。

**象限B**: 中等影响力，高中心性

- **意义**: 这个集群构成了虚拟现实研究的核心，其中的研究和技术与其他研究领域广泛相互关联。这些是被广泛接受的理论和工具，许多其他研究都是基于这些理论和工具进行的。
- **关注时机**: 当研究人员希望了解虚拟现实的核心概念或需要在自己的工作中引用广泛接受的方法和结果时，他们应该关注这个集群。就像在建筑领域想要了解大楼的骨架和核心概念一样。

**象限C**: 低影响力，低中心性

- **意义**: 这个集群可能代表了虚拟现实中新兴的研究领域或未被充分探索的细分领域。这里的研究可能尚未被广泛知晓或引用，但具有未来增长和创新的潜力。
- **关注时机**: 当研究人员寻找未被开发的领域进行调查或寻找一个不那么拥挤的领域来做出重要贡献时，他们可能会探索这个集群。就像在探险中寻找未知领域一样，可能会有意想不到的发现。

**象限D**: 低影响力，高中心性

- **意义**: 尽管这个集群没有获得显著的引用，但它在连接不同研究领域方面具有影响力。它可能包含一些正在获得认可的基础研究或方法。
- **关注时机**: 当研究人员试图找到不同虚拟现实主题之间的联系或寻找刚开始受到学术关注的潜在增长领域时，应该考虑这个集群。就像在寻找不同领域之间的联系或寻找刚开始受到学术关注的领域时一样。

**示例**:

- **高频率，高中心性，高影响力**: 这个领域的主题被广泛研究和引用，并构成进一步研究的支柱。例如，机器学习研究中的"神经网络"。
- **高频率，低中心性，低影响力**: 这个主题被广泛讨论，但在相对孤立的背景下进行讨论，不会对其他研究领域产生重大或深远影响。它可能是一种常用的流行方法，但不是突破性的技术。
- **低频率，高中心性，高影响力**: 这是一个小众但重要的发现，对各个领域都有重大影响，即使它没有被广泛讨论。例如，数学中解决了一个长期存在的问题的新定理。
- **低频率，低中心性，低影响力**: 这是一个新兴的或非常专业的主题，尚未在更广泛的研究界中站稳脚跟。

### Rstudio - Arguments

(-- `couplingMap: Coupling Analysis in xiangtuochen/bibliometrixfullname: Comprehensive Science Mapping Analysis` [rdrr](https://rdrr.io/github/xiangtuochen/bibliometrixfullname/man/couplingMap.html))

```R
couplingMap(
  M,
  analysis = "documents",
  field = "CR",
  n = 550,
  label.term = "ID",
  ngrams = 1,
  impact.measure = "global", # "local",
  minfreq = 5,
  community.repulsion = 0.1,
  stemming = FALSE,
  size = 0.5,
  n.labels = 1,
  repel = TRUE,
  cluster = "walktrap"
)

```

`M`是一个书目数据框。

`analysis` 是用来选择分析单位的文字属性。它可以是analysis = c("documents", "authors", "sources")。

`field` 是用来衡量耦合强度的文字属性。它可以是field = c("CR", "ID","DE", "TI", "AB")。

`n` 是一个整数。它表示要包括在分析中的单位数量。

`label.term` 是一个字符。它指示要用于聚类标签的内容元数据。它可以是label.term = c("ID","DE","TI","AB")。如果label.term = NULL，聚类项将用于标签。

`ngrams` 是一个介于1和4之间的整数。它指示从文本中提取的n-gram类型。n-gram是一系列连续的n个术语。该函数可以提取由1个、2个、3个或4个术语组成的n-gram。默认值是ngrams=1。

`impact.measure` 是一个字符。它指示用于排名聚类元素（文档、作者或来源）的影响度量。它可以是impact.measure = c("local", "global")。如果impact.measure = "local"，couplingMap使用标准化的本地引用分数计算元素的影响度，而当impact.measure = "global"时，该函数使用标准化的全局引用分数来衡量元素的影响度。

`minfreq` 是一个整数。它表示聚类的最小频率（每千）的值。它的取值范围在（0，1000）之间。

`stemming` 是一个逻辑值。如果设置为TRUE，则会对词（来自标题或摘要）进行词干提取（使用Porter's算法）。

`size` 是一个数字。它表示聚类圆的大小，取值范围在（0.01，1）之间。

`n.labels` 是一个整数。它表示每个聚类关联的标签数量。默认值是 n.labels = 1。

`repel` 是一个逻辑值。如果设置为TRUE，则ggplot使用geom_label_repel代替geom_label。


#### Cluster parameter  (clustering algorithm)

**Optimal** (最优): 当你有一个小型网络并且非常需要准确性而不是计算效率时，选这个。当你能检查每一个可能的分割时，这个很理想。

**Louvain**: 对于大型网络，当你需要速度和质量之间的平衡时，选择卢汶。当你需要快速得到初步洞察时，特别适合用来探索性数据分析。

**Leiden** : 这是卢汶的进阶版，当你需要更精细的社区检测时使用。它适合大型网络，并且当你想确保也检测到小社区时。

**Infomap** (信息图): 当网络有明确的流动模式或路径，比如引文网络或交通网络，并且你对了解信息流动感兴趣时，使用信息图。

**Edge Betweenness** (边缘介数): 这个算法适用于网络规模相对较小时，因为它对大型网络来说可能会很慢。当你想要检测在网络中作为桥梁的社区时，它效果很好。

**Walktrap** (步行陷阱): 适用于步行陷阱属性成立的网络，意味着短随机游走往往会留在同一个社区内。它是一个很好的通用算法。

**Spinglass** (旋转玻璃): 这种方法最适合于社区结构可能重叠的网络，或者当你有先验知识可以告知"自旋"配置时。

**Leading Eigen** (主导特征): 选择这种方法适用于大型网络，当模块化最大化很重要但分辨率限制是一个问题时，因为它倾向于发现比卢汶或快速贪婪更小的社区。

**Fast Greedy** (快速贪婪): 这对于大型网络来说是高效的，并且当你寻找一个能逐步建立社区结构的算法时很有用，这对理解社区形成的层次结构很有帮助。

#### ChatGPT  Prompt

```markdown
As you are an expert in data analysis and academic research.  You know the intricacies of bibliometric analysis and the significance of Coupled Cluster theory in various fields. You will reason step-by-step to determine the best course of action to achieve a comprehensive summary report. You know how to interpret complex datasets and extract meaningful insights. you will reason step-by-step to determine the best course of action to achieve a thorough understanding and application of the provided data. You will use Python, data visualization techniques, and relevant analytical frameworks to help in this process.

**Remeber**
- The dataset in "CouplingMap_Clusters.csv" contains 6 entries is exported from Clustering by Coupling in biblioshiny, the papers are queried by keyword \`${Immersive technology}\`, it contains {{6}} entries and six columns: 'label', 'group', 'freq', 'centrality', 'impact', and 'color'. Each entry seems to represent a thematic cluster with associated metrics like frequency, centrality, and impact. Note that The 'conf' values are understood as the confidence scores associated with each theme within the label.

**Mission:**

**Unmasking the Data:**
- Undertake an analytical review of the all clusters from the Clustering by Coupling in bibliometric networks, with a focus on the '${Immersive technology}' paper collection from WoS (webofscience.com). Each cluster's 'label' field comprises one or several keywords along with a 'conf' value denoting confidence percentages. Identify and evaluate the dominant themes within each cluster, scrutinizing the proportion and impact of each 'conf' score relative to '${Immersive technology}'. Based on this analysis, generate insightful descriptions and appropriate titles for each cluster, accurately reflecting the main themes and scope of the papers within the context of '${Immersive technology}'. 
- Create a new CSV file 'CouplingMap_Clusters(description).csv', adding the generated 'Cluster_Title' and 'Cluster_Description' for each of the entries, alongside the original data.

**Generate a scatter plot of Clustering by Coupling**
- Analyze the provided CSV file by first determining the total number of entries. Ensure to review and consider each entry in the dataset, regardless of the total count, to provide a comprehensive analysis of all data presented. 
- Generate a scatter with Python script using pandas, matplotlib, and numpy to generate a scatter plot from the 'CouplingMap_Clusters.csv' dataset. The plot should display each cluster's centrality vs. impact with these features:1. Circle markers sized by frequency and colored uniquely.2. Mean centrality and impact lines dividing the plot into quadrants, labeled 'High Impact, High Centrality', 'Low Impact, High Centrality', etc.3. Annotations for each cluster showing group number, main theme, confidence score (extracted from the 'label' column), and quadrant categorization.4. Labeled axes ('Centrality' and 'Impact') and a title ('Clustering by Coupling: Impact vs Centrality in {{immersive technology}}').Include a function to parse the main theme and its confidence from each cluster's 'label'.
- Based on the scatter plot generated("Clustering by Coupling") describe each cluster and its respective quadrant location, Explain the implications of each cluster's quadrant locationcombine the indicators of "frequency", "centrality" and "impact" of each cluster to understand the importance, relationship and influence of elements in the network, which is valuable for understanding {{immersive technology}}.


**Cluster Summaries:**
- To provide a comprehensive description of each cluster and its implications for {{immersive technology}}, you'll integrate the context and represented meaning of each cluster, the brief descriptions provided earlier, and the quadrant locations. This integration will help compare the importance, relationships, and influence of each element and explore valuable within the network of {{immersive technology}}.
- Synthesize a Bibliometric analysis summary report of all clusters' Context & Meaning, Quadrant Location, and Implications into a more coherent and smooth Paragraph

```

```python
import pandas as pd
import re
import matplotlib.pyplot as plt
import numpy as np

# Function to parse the main theme and its confidence score from the 'label' column
def parse_max_conf_main_theme(label):
    # Extracting all occurrences of theme - conf XX% with a regex pattern
    matches = re.findall(r'(\w+(?: \w+)*?) - conf (\d+(?:\.\d+)?)%', label)
    if matches:
        # Sorting the themes by their confidence score in descending order
        sorted_matches = sorted(matches, key=lambda x: float(x[1]), reverse=True)
        # Returning the main theme (the one with the highest confidence score)
        return sorted_matches[0]
    else:
        return ("Unknown", "0")

# Load the data from the CSV file
file_path = '/mnt/data/CouplingMap_Clusters.csv'
data = pd.read_csv(file_path)

# Applying the function to parse the main theme and its confidence score
data['max_conf_main_theme'], data['max_conf'] = zip(*data['label'].apply(parse_max_conf_main_theme))

# Setting up the figure and axis for the scatter plot
plt.figure(figsize=(12, 8))
ax = plt.subplot(1, 1, 1)

# Scatter plot with circle size proportional to frequency and color from the data
scatter = ax.scatter(data['centrality'], data['impact'], s=data['freq']*10, c=data['color'], alpha=0.6, edgecolors="w", linewidth=2, linewidth=0.5, marker='o')

# Adding labels for each cluster with their main theme and cluster number (using 'group' column)
for i, row in data.iterrows():
    ax.annotate(f"Cluster {row['group']}: {row['max_conf_main_theme']}", (row['centrality'], row['impact']), fontsize=9)

# Adding quadrant lines
mean_centrality = np.mean(data['centrality'])
mean_impact = np.mean(data['impact'])
ax.axhline(mean_impact, color='gray', linestyle='--')
ax.axvline(mean_centrality, color='gray', linestyle='--')

# Define the quadrant labels
quadrant_labels = {
    (True, True): 'High Impact, High Centrality',
    (True, False): 'High Impact, Low Centrality',
    (False, True): 'Low Impact, High Centrality',
    (False, False): 'Low Impact, Low Centrality'
}

# Adding annotations for each cluster with quadrant information
for i, row in data.iterrows():
    quadrant = (row['impact'] > mean_impact, row['centrality'] > mean_centrality)
    plt.text(row['centrality'], row['impact'], f"Cluster {row['group']}\n{row['main_theme']} ({row['conf_score']}%)\n{quadrant_labels[quadrant]}", fontsize=9, ha='center')


# Adding annotations for each cluster with quadrant information
for i, row in data.iterrows():
    quadrant = (row['impact'] > mean_impact, row['centrality'] > mean_centrality)

    plt.text(row['centrality'], row['impact'], f"Cluster {row['group']}\n{row['main_theme']} ({row['conf_score']}%)\n{quadrant_labels[quadrant]}", fontsize=9, ha='center')

# Adding titles and labels
plt.title('Clustering by Coupling: Impact vs Centrality in Immersive Technology')
plt.xlabel('Centrality')
plt.ylabel('Impact')

# Show the plot with a grid
plt.grid(True)
plt.show()


```

Give me a chatGPT prompt that can make you generate {{a plot }} in the manner described above.