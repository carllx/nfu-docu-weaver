Max Tokens: [[Tokenizer openAI]],限制GPT-3可以生成的文本量, 你想要答案是更简洁还是更具体?  (中文 1: 1.75;英文1:1.333)--`|OpenAI API` [openai](https://beta.openai.com/tokenizer)



The three tokenization methods mentioned are:

1.  Character level tokenization
2.  Sentence Piece tokenization
3.  Pipe Pair Encoding tokenization [[Byte pair encoding (BPE)]]

Character level tokenization is the process of encoding each individual character in a text as a unique integer. This results in a long sequence of integers, but with a small vocabulary size.

Sentence Piece tokenization is a sub-word tokenization method developed by Google. It uses a unsupervised algorithm to segment text into sub-word units, which can be encoded as integers. It has the advantage of handling out-of-vocabulary words and rare words better than character-level or word-level tokenization.

Pipe Pair Encoding tokenization is a method used by OpenAI's GPT model. It is a sub-word tokenization method that uses a byte-pair-encoding algorithm to segment text into sub-word units. It has the advantage of handling rare and out-of-vocabulary words well, while keeping the sequence length short. 

In summary, character level tokenization is the simplest tokenization method, with small vocabulary size but large sequence lengths. Sentence Piece and Pipe Pair Encoding are sub-word tokenization methods that handle out-of-vocabulary words better and have shorter sequence lengths, but with larger vocabulary size.