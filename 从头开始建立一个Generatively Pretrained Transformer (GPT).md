[[Prompts Snippet (Templates)]]
--`|intro: ChatGPT, Transformers, nanoGPT, Shakespeare/ Let's build GPT: from scratch, in code, spelled out.` [youtube](https://youtu.be/kCc8FmEb1nY?t=62)
![|200](https://i.ytimg.com/vi/kCc8FmEb1nY/hqdefault.jpg)

从头开始建立一个Generatively Pretrained Transformer (GPT)，遵循论文--`|[1706.03762] Attention Is All You Need` [arxiv](https://arxiv.org/abs/1706.03762) 和 OpenAI的GPT-2/GPT-3 。
该视频涵盖了诸如
- 标记化(tokenization)、
- 数据加载(data loading)、
- 建立自我注意机制(self-attention mechanism)、
- 创建转化器(transformer)
- 以及扩大模型规模(caling up the model)等主题。

该视频还涉及到
- [differences] 编码器和解码器变压器之间的区别(encoder & decoder transformers)，以及
- [relationship] ChatGPT、nanoGPT和GPT-3之间的关系。

该视频包括4个建议的练习，供观众尝试，
- EX1: 将 `Head` 和 `MultiHeadAttention` 合并为一个类，并行处理所有的`heads`，将`heads`视为另一个批处理维度(batch dimension)。
- EX2: 
  - Training the GPT on a custom dataset  
  - Building a calculator clone in GPT.
- EX3：在一个大数据集上Pretraining the transformer，并在一个较小的数据集上进行finetuning。
- EX4: 
  - Reading transformer papers  
  - Implementing additional features or changes 实现额外的功能或变化。


## 
总之，你所展示的代码是通过使用字符级标记器(character level tokenizer.)将输入文本转换为一串整数来进行标记。这意味着输入文本中的每个字符都被转换为一个唯一的整数。该代码还包括一个反向映射，以便整数序列可以被解码为原始文本。

还有其他可用的标记化方法(tokenization methods)，
- 如 google 使用的句子片标记化器(sentence piece tokenizer)和
- OpenAI的GPT 使用的管对编码标记化器(the pipe pair encoding tokenizer)。这些方法使用子词单位(sub-word units)和较大的词汇表，从而产生较短的整数序列。然后，代码使用PyTorch库将编码后的文本转换为数据张量(tensor)，并将数据集分离为训练集和测试集。


## Tokenization methods
三种标记化方法(tokenization methods)是:

1.  Character level tokenization 字符级的标记化
2.  Sentence Piece tokenization 句子片断标记化
3.  Pipe Pair Encoding tokenization 管对编码标记化

Character level tokenization 是将文本中的每个单独字符编码为唯一的整数的过程。这会产生一个长的整数序列，但词汇(vocabulary size)量会很小。

Sentence Piece tokenization 是谷歌开发的一种子词标记化方法。它使用一种无监督的算法将文本分割成子词单元，这些单元可以被编码为整数。与字符级或词级标记化相比，它的优点是能更好地处理词汇外的单词和稀有单词。

Pipe Pair Encoding tokenization 是OpenAI的GPT模型使用的一种方法。它是一种子词标记化方法，使用字节对编码算法将文本分割成子词单元。它的优点是可以很好地处理罕见的和词汇外的单词，同时保持序列长度短。

总之，Character level tokenization 是最简单的标记化方法，词汇量小但序列长度大。Sentence Piece tokenization 和 Pipe Pair Encoding tokenization是子词标记化方法(sub-word tokenization methods)，能较好地处理词汇外的词，序列长度较短，但词汇量较大。



````
Title: "Let's build GPT: from scratch, in code, spelled out."
Summary: "We build a Generatively Pretrained Transformer (GPT), following the paper "Attention is All You Need" and OpenAI's GPT-2 / GPT-3. We talk about connections to ChatGPT, which has taken the world by storm. We watch GitHub Copilot, itself a GPT, help us write a GPT (meta :D!) . I recommend people watch the earlier makemore videos to get comfortable with the autoregressive language modeling framework and basics of tensors and PyTorch nn, which we take for granted in this video."
Chapters:
00:00:00 intro: ChatGPT, Transformers, nanoGPT, Shakespeare
baseline language modeling, code setup
00:07:52 reading and exploring the data
00:09:28 tokenization, train/val split
00:14:27 data loader: batches of chunks of data
00:22:11 simplest baseline: bigram language model, loss, generation
00:34:53 training the bigram model
00:38:00 port our code to a script
Building the "self-attention"
00:42:13 version 1: averaging past context with for loops, the weakest form of aggregation
00:47:11 the trick in self-attention: matrix multiply as weighted aggregation
00:51:54 version 2: using matrix multiply
00:54:42 version 3: adding softmax
00:58:26 minor code cleanup
01:00:18 positional encoding
01:02:00 THE CRUX OF THE VIDEO: version 4: self-attention
01:11:38 note 1: attention as communication
01:12:46 note 2: attention has no notion of space, operates over sets
01:13:40 note 3: there is no communication across batch dimension
01:14:14 note 4: encoder blocks vs. decoder blocks
01:15:39 note 5: attention vs. self-attention vs. cross-attention
01:16:56 note 6: "scaled" self-attention. why divide by sqrt(head_size)
Building the Transformer
01:19:11 inserting a single self-attention block to our network
01:21:59 multi-headed self-attention
01:24:25 feedforward layers of transformer block
01:26:48 residual connections
01:32:51 layernorm (and its relationship to our previous batchnorm)
01:37:49 scaling up the model! creating a few variables. adding dropout
Notes on Transformer
01:42:39 encoder vs. decoder vs. both (?) Transformers
01:46:22 super quick walkthrough of nanoGPT, batched multi-headed self-attention
01:48:53 back to ChatGPT, GPT-3, pretraining vs. finetuning, RLHF
01:54:32 conclusions

Corrections: 
00:57:00 Oops "tokens from the future cannot communicate", not "past". Sorry! :)

Suggested exercises:
- EX1: The n-dimensional tensor mastery challenge: Combine the `Head` and `MultiHeadAttention` into one class that processes all the heads in parallel, treating the heads as another batch dimension (answer is in nanoGPT).
- EX2: Train the GPT on your own dataset of choice! What other data could be fun to blabber on about? (A fun advanced suggestion if you like: train a GPT to do addition of two numbers, i.e. a+b=c. You may find it helpful to predict the digits of c in reverse order, as the typical addition algorithm (that you're hoping it learns) would proceed right to left as it adds the numbers, keeping track of a carry along the way. You may want to modify the data loader to simply serve random problems and skip the generation of train.bin, val.bin. You may want to mask out the loss at the input positions of a+b that just specify the problem using y=-1 in the targets (see CrossEntropyLoss ignore_index). Does your Transformer learn to add? Especially on a validation set of addition problems it hasn't seen during training? Once you have this, swole doge project: build a calculator clone in GPT, for all of +-*/. Not an easy problem. You may need Chain of Thought traces.)
- EX3: Find a dataset that is very large, so large that you can't see a gap between train and val loss. Pretrain the transformer on this data, then initialize with that model and finetune it on tiny shakespeare with a smaller number of steps and lower learning rate. Can you obtain a lower validation loss by the use of pretraining?
- EX4: Read some transformer papers and implement one additional feature or change that people seem to use. Does it improve the performance of your GPT?```