
 ```
 I will write a eassy about  Data compression, it will include: Compression algorithms, Archive formats , Codecs, Data compression software, Compression file systemsImage compression, Video compression ,Lossless compression algorithms, Lossy compression algorithms. please give me a ToC and its summry


[[[[[[[[[[Cognitive psychology]]]]]]]]]] 被定义为研究信息处理、注意力、语言使用、记忆、知觉、问题解决、决策制定和思维等个体层面的心理过程. 
它与 Data compression 的过程非常相似. 
例如从[[[[Cognitive psychology]]]]的角度理解信息进入人类的感官成为体验, 引起心理反向, 改变认知与经验的这些过程, 可以解释数据被编码与解码, 存档或储存的过程等Data Compression Technique的过程. 
请参考下面一篇有关 Data compression 过程文献的ToC, 生成一个完全用 [[Cognitive psychology]]的角度
解释Data compression 的文章的Toc和摘要


[[Cognitive psychology]] studies individual-level [[mental processes]], such as information processing, perception, memory, problem solving, and decision making. These [[[[mental processes]]]] can be seen as similar to the encoding, decoding, archiving and storing processes involved in data compression. Understanding these [[mental processes]] from a [[cognitive psychology]] perspective can help improve the efficiency and accuracy of data compression techniques by providing insight into the ways that information is processed and represented in the mind. By considering the [[mental processes]] involved in data compression, researchers and practitioners can gain a deeper understanding of how to optimize compression algorithms and ensure that data is stored and preserved in the most efficient and effective way possible.
```
Category:Data compression [wikipedia](https://en.wikipedia.org/wiki/Category:Data_compression)

compression 通常是 Data 通过 codecs 编码再解码成 archive formats的过程。
- Introduction to Data Compression
	- Compressed data types
		- Text 
		- Image  
		- Video  
		- Software and File Systems
	- Data compression methods(codecs):
		- Compression Algorithms (数学方法)
			- Lossless Compression Algorithms 
			- Lossy Compression Algorithms
		- AI-based Algorithms (AI 方法)
	- Formats for Digital Preservation(具体应用)
		- Archive formats
		- Storing formats
		- Format-preserving encryption(In cryptography)
- Conclusion

拓展有趣主题:
- [[The Fieds of studio related prespertiy of codecs]]
- [[格式塔原则(Gestalt principles)在数据压缩算法如模式识别(pattern recognition)中的作用]]。`The role of the Gestalt principles in data compression algorithms such as pattern recognition`
- -- `Paper - codecs cognitve psycholog - Google Sheets`[google](https://docs.google.com/spreadsheets/d/1_H1kAdhukZ7bHj7eDFMkqq7_zslJqVVtS_d_cKetErc/edit#gid=0)


## Data Compression: 
Compression algorithms 是减少数据大小的核心数学方法 
Data compression software 使用这些算法来进行数据压缩，
而compression file systems 使用这些算法来减少存储在磁盘上的数据大小。
Image compression和 video compression 是数据压缩的具体应用，其目标分别是减少图像和视频文件的大小。

[[PSNR (peak signal-to-noise ratio)]]

## Compression Algorithms: 
是减少数据大小的核心数学方法。
了解不同类型的compression algorithms(压缩算法)，包括lossless and lossy compression algorithms。了解每种类型的算法的基本概念，以及它们之间的区别。


### Lossless Compression Algorithms 

无损的压缩
1.  [[DPCM (差分编码)]]： DPCM（差分编码）是一种无损压缩技术，它将图像中相邻像素之间的差异值进行编码。
5. [[RLE(Run-length encoding游程编码的技术)]]
2.  Lossless image compression algorithms : 有很多种无损图像压缩算法，如 PNG (Portable Network Graphics) 和 JPEG 2000, 它们使用了高级数学算法来压缩图像。
3.  Fractal compression: [[Fractal|分形]]压缩是一种无损压缩技术，它将图像分成许多类似的分形部分，然后将其压缩。
4.  Transform coding : 变换编码 是一种无损压缩技术，它将图像变换到频域（如FFT）之后进行压缩。

### Lossy Compression Algorithms
[[Delta encoding (差分编码)]]
[[RLE(Run-length encoding游程编码的技术)]]

Some important algorithms in data compression technology include:

1.  Huffman coding: a lossless data compression algorithm that assigns variable-length codes to characters based on their frequency of occurrence in a dataset.
    
2.  Lempel-Ziv-Welch (LZW) compression: a lossless data compression algorithm that replaces repeated strings of characters in a dataset with a reference to a previously occurring instance of that string.
    
3.  Arithmetic coding: a lossless data compression algorithm that converts an input string of characters into a fixed-length binary number, which can be encoded using fewer bits than the original string.
    
4.  Run-length encoding (RLE): a lossless data compression algorithm that replaces runs of identical data elements with a single data element and a count of the number of times it occurs.
    
5.  Deflate: a data compression algorithm that uses a combination of LZ77 and Huffman coding.
    
6.  LZ4: A very fast data compression algorithm.
    
7.  Snappy: A fast data compression algorithm.
    
8.  Bzip2: a data compression algorithm that uses a combination of the Burrows-Wheeler transform and Huffman coding.
    



## Codecs
This section will explain the role of codecs in data compression and how they interact with other technologies to achieve data compression goals.
了解编解码器在数据压缩中的作用，以及它们如何与其他技术互动以实现数据压缩目标。
Codecs (编解码器) 是对特定文件格式内的数据进行编码和解码的算法，
而 archive formats 则规定了数据的结构和编码。

preserving formats
### Formats for Digital Preservation
Recommended File Formats for Digital Preservation | Duke University Libraries[duke](https://library.duke.edu/using/policies/recommended-file-formats-digital-preservation#documents)
#### Archive Formats
而 archive formats 则规定了数据的结构和编码。
### What is the difference between Archiving and Storing ?
归档和存储是指保存数据以备将来使用的过程 preserving data。 但是，这两个术语之间存在差异：

Archiving：是指保存不再被积极使用但仍需要保留用于法律、法规或历史目的的重要历史数据的过程。 存档数据通常存储在单独的安全位置，通常不会经常访问，但可以在需要时检索。

Storing：是指保留当前操作仍在使用或需要的数据的过程。 存储数据通常存储在一个主要位置，例如本地硬盘、网络服务器或云存储服务，并且经常被访问和使用。

综上所述，归档主要是保存历史数据，而存储主要是保存还在使用的数据。

A useful analogy to illustrate the difference between {{archiving}} and {{storage}}
人脑的记忆活动可以作为一个有用的类比来说明归档和存储之间的区别。

从 [[Cognitive Science]] 被定义为研究信息处理、注意力、语言使用、记忆、知觉、问题解决、决策制定和思维等个体层面的[[Mental Processes|心理过程]]. 从信息进入的感官体验, 到心理, 再到认知与经验的过程解释数据被编码与解码, 存档或储存的过程等Data Compression Technique的过程 

大脑中的记忆存储可以被认为等同于数据存储。 正如数据存储在计算机的内存或硬盘中一样，记忆存储在大脑的神经连接中。

另一方面，大脑中的记忆归档可以被认为等同于数据归档。 大脑将不再需要立即回忆但仍很重要以备将来参考的记忆存档，类似于数据存档以供长期保存的方式。 这些存档的记忆存储在大脑的不同部分，如果需要可以检索，类似于如何从单独的存储位置检索存档数据。

在这个类比中，大脑的记忆存储可以看作是数据存储的等价物，而记忆归档则相当于数据归档。 存储和归档都是大脑的重要功能，就像它们在数据管理中一样。

This section will discuss the different archive formats used for data compression and the advantages and disadvantages of each format.
1.  Archiving only: This type of archive format is used to store and manage large amounts of data in a structured and organized manner, but it does not compress the data. Examples include ZIP, TAR, and RAR formats.
    
2.  Compression only: This type of archive format is used to compress data to reduce its size, but it does not provide any additional features for managing the data. Examples include GZIP and BZIP2 formats.
    
3.  Archiving and Compression: This type of archive format provides both archiving and compression capabilities. It organizes and compresses the data to reduce its size and make it easier to manage. Examples include ZIP, RAR, and 7Z formats.
    
4.  Software packaging and distribution: This type of archive format is used to package and distribute software applications, including all the necessary components and dependencies for the application to run. Examples include MSI, EXE, and DMG formats.
    
5.  Document packaging and distribution: This type of archive format is used to package and distribute document files, including all the necessary components and dependencies for the document to be opened and viewed. Examples include PDF and DOCX formats.
    

These different types of archive formats exist to meet the specific needs of different types of data and applications. By providing different combinations of archiving and compression capabilities, they allow users to choose the best format for their needs and achieve the most efficient and effective data management and distribution results.


## Data Compression Software
This section will provide an overview of the various data compression software available in the market and how they use compression algorithms and codecs to achieve data compression.

## Compression File Systems
In this section, you will learn about compression file systems and how they use compression algorithms to reduce the size of data stored on disk.

## Image Compression
This section will focus on image compression and the specific techniques and technologies used to compress image data.

## Video Compression
In this section, you will learn about video compression and the different techniques and technologies used to reduce the size of video files.

This essay will provide a comprehensive overview of the various technologies used in data compression, including compression algorithms, codecs, archive formats, data compression software, compression file systems, image compression, and video compression. It will explain the role of each technology in data compression and how they interact with each other to achieve data compression goals.



## AI 
--`|AI让压缩视频的思路有了根本变化` [xiaohongshu](https://www.xiaohongshu.com/explore/63c7f88a000000001e03fbdf?app_platform=android&app_version=7.53.8&share_from_user_hidden=true&type=video&xhsshare=WeixinSession&appuid=61aa31f5000000000202472e&apptime=1674558029) 
![150|](https://i.imgur.com/aaeYPYI.gif)
--`|face-vid2vid` [github](https://nvlabs.github.io/face-vid2vid/)
There are several articles that summarize related algorithms, one example is "A Survey of Data Compression Techniques" by N. Sundararajan and S. R. Mahadevan which provide a comprehensive overview of various data compression algorithms and their relative strengths and weaknesses. Another example is "A Comparative Study of Lossless Data Compression Algorithms" by R. A. Al-Shyoukh and M. A. Al-Khayat which provide a study of various data compression algorithm and their performance for different types of data.