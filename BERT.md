
BERT (Bidirectional Encoder Representations from Transformers) BERT（来自变压器的双向编码器表示）
-   a Machine Learning ==model based on transformers== 基于变压器的机器学习模型
-   ==attention components== able to learn contextual relations between words 注意力组件能够学习单词之间的上下文关系
-   BERT是一个强大的NLP模型, 可以通过 2 种主要方式使用: 


Text Classification , 应用于邮件分类是否垃圾邮件 
--`无痕阅读 |Fine-Tuning BERT for Text Classification | by Nicolo Cosimo Albanese | Towards Data Science` [towardsdatascience](https://towardsdatascience.com/fine-tuning-bert-for-text-classification-54e7df642894)
继续阅读在 [chatGPT](https://chat.openai.com/chat/b029813b-ac4b-4997-9ebd-ace4c0dd3da8) carllx@hotmail.com 

-   Introduction
    -   Explanation of BERT and its use in NLP
    -   Explanation of the two ways to use BERT in NLP tasks
        1. Feature-based approach
        2. [[Fine-tuning]] approach
-   Environment setup
    -   Explanation of the importance of GPU support
    -   Installation of necessary libraries
-   Dataset
    -   Use of the SMS Spam Collection Data Set from the UCI Machine Learning Repository
    -   Download and inspection of the dataset
    -   Conversion of the dataset into a pandas DataFrame
-   Preprocessing
    -   Use of the BertTokenizer
    -   Addition of special tokens
    -   Making sentences of the same length
    -   Creation of an attention mask
-   Train
-   Predict
-   Conclusions
-   References




