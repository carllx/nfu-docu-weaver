```R
NetMatrix <- biblioNetwork(M, analysis = "co-citation", network = "references", sep = ";")

net=networkPlot(NetMatrix, n = 50, Title = "Co-Citation Network", type = "fruchterman", size.cex=TRUE, size=20, remove.multiple=FALSE, labelsize=1,edgesize = 10, edges.min=5)
```