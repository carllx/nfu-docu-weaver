 [[Bibliometrix/Structure/Conceptual]]  
I am conducting a bibliometric analysis on records collected from Web of Science on "Augmented Reality". In the Thematic Map section,
How can we interpret the significance of different clusters being situated in various quadrants?

Co-word 分析是一种找出一组关键词并把它们分成不同主题的方法 这些关键词像是一堆线索 我们可以通过分析它们的紧密程度和中心位置来给这些主题分类 并且把它们画在一个平面的图上

Thematic Quadrants:
1 右上方的象限, **Motor Themes**(主导主题) 这些是大家都在讨论的热点, 就像大家都爱吃的水果，水果刚开始结出来，意味着这个领域的研究已经很充分了。表示很多学者都在这个颜色写文章做研究。
2 右下方, **Basic Themes**, "基础主题"则像是就像是已经成熟的水果，意味着这个领域的研究已经很充分了。这是一些人人都知道 比较普通的主题
3 左下方, **Emerging or Declining Themes**. "新兴或衰退的主题"就像是变化中的水果，它们可能刚开始流行或者慢慢被人遗忘。正在兴起或者正在消失的主题 也就是可能现在正在变得流行或者失去人们兴趣的主题
4 左上方 **Niche Themes,** "利基主题"就像是稀有或者另类口味的水果，意味着这个领域很特别，没那么多人研究。是非常专业或局限的小众主题 这些通常只有特定的一小部分人感兴趣.
![150|](https://i.imgur.com/9zhsuLK.webp)





```R
# 揭示关于某一主题的文献体量中的有用见解。
# 量化出版物数量、作者、引文和内容随时间的趋势。
library(dplyr)
# - 📂 安排词的数据框架，按照词群和词频顺序。
Clusters=Map$words[order(Map$words$Cluster,-Map$words$Occurrences),]

# - 💻 使用dplyr包，按照词群标签列对有序的数据框架进行分组。
# - 🔍 从每个词群分组中选择前五行数据，根据词频列。
# - 🧾 查看新的数据框架CL，总结每个词群中最重要的五个词。
CL <- Clusters %>% group_by(.data$Cluster_Label) %>% top_n(5, .data$Occurrences)

# - 🔎 检查每个词群中的内容，分析和理解聚类结果。
View(CL)
```




In 'Thematic_Map_Terms.csv':

- **Occurrences**: The number of times a term appears within the dataset.
- **Words**: Specific terms that are identified within the dataset.
- **Cluster**: A numerical identifier for the cluster to which the term belongs.
- **Cluster_Label**: The label assigned to the cluster, often indicative of the common theme or subject matter of the terms within it.
- **btw_centrality (Betweenness Centrality)**: A measure of how often a term appears on the shortest path between other terms in the network. This can indicate the term's importance as a bridge within the network.  
- **clos_centrality (Closeness Centrality)**: Indicates how close a term is to all other terms in the network. A higher value suggests the term is relatively central in the network.
- **pagerank_centrality**: Based on the PageRank algorithm, it measures the significance of each term within the network, considering the structure of the entire network.

In 'Thematic_Map_Clusters.csv':

- **Cluster**: The name of the cluster, which represents a group of related terms.
- **CallonCentrality**: A metric that combines centrality and density to evaluate the importance of a cluster within the network. High centrality suggests that the cluster is significant within the field.
- **CallonDensity**: Measures the internal strength of the cluster, indicating how well the terms within the cluster are related to each other.
- **RankCentrality**: The rank of the cluster in terms of centrality, with a lower number indicating a more central position in the field.
- **RankDensity**: The rank of the cluster in terms of density, with a lower number indicating a denser, more tightly connected cluster.  
    RankDensity：簇在密度方面的排名，数字越低表示簇越密集、连接越紧密。
- **ClusterFrequency**: The total number of occurrences of all terms within the cluster.




 


