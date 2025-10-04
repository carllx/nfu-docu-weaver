字节对编码（BPE）是一种 [[编码技术(Data Compression Technique)]]，其中数据集中最常见的连续字节对被替换成新的字节。替换表被用来重建原始数据。BPE已被改编为自然语言处理（NLP）应用中使用，它被用来将文本编码为一个固定的标记词汇。单词通常被编码为单个标记，而稀有词则被编码为代表有意义的单词部分的标记序列。这个过程是BPE的一个变种，被用于谷歌的SentencePiece和OpenAI的GPT-3等系统。

[[Tokenizer openAI]] 使用（BPE）