~~一种常见的错误隐藏技巧~~是Delta encoding (差分编码)，它将相邻像素之间的深度差值存储在图像中。通过还原差值，可以推断出原始深度值。

```
从逻辑的角度来看，两个数据值之间的差异是从一个值获得另一个值所需的信息, – see [relative entropy](https://en.wikipedia.org/wiki/Relative_entropy "Relative entropy")
```
差分编码的研究可以从多种角度来讲，在图像压缩和错误控制等领域有所涉及. 术语叫差分编码 差分编码可以在许多论文中找到, 例如: "Efficient compression of depth maps with error concealment" by B. Zitova and J. Flusser "Depth image compression using spatially adaptive differential pulse code modulation" by J. Kim, J. Lee and K. Yoon "Fast depth map compression using a spatially adaptive differential pulse code modulation" by J. Kim, J. Lee and K. Yoon 这些论文都提供了关于差分编码的详细讨论和实验结果，可以作为进一步了解差分编码的参考。