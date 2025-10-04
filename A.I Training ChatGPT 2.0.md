---
alias: Training a Semantic model,
---

Re-training 是在新的数据集上重新训练一个已有的模型, 好比在一个干净的大脑上学习新知识.好处是在特定针对的场景中能获得更高的准确性, 缺点是需要更多的数据和计算资源. 如果任务数据量较小或需要更高准确性, Re-training 可能更适合; 
Pre-training 是提供基础知识的过程.可以继承已有的高质量模型的通用特征,节省计算资源和数据,  如果任务数据量较大或计算资源有限, 对模型进行 Pre-training, 然后我们可以进行 Fine-Tuning 或 Transfer Learning 可以在保留原有知识的基础上进一步完善知识, 获得更高的准确性.
Fine-Tuning 和 Transfer Learning 更多适用于 Pre-training 模型.
Fine-Tuning 是在原来知识的基础上进一步完善知识, 相当于原专业深造.
Transfer Learning 是在新任务上运用原来的知识, 相当于夸专业学习.

nanoGPT 是一个简单快速的库，用于训练和微调中型 GPT 模型。它的目的是在保证速度的同时简化了模型的训练和微调过程。该库可以从头开始训练新模型
--`|karpathy/nanoGPT: The simplest, fastest repository for training/finetuning medium-sized GPTs.` [github](https://github.com/karpathy/nanoGPT)

## Training, Fine-Tuning, Transfer Learning 
https://huggingface.co/

```mermaid
  graph TD;
      A-->B;
      A-->C;
      B-->D;
      C-->D;
```
## Pre-Training
由chatGPT 提供, 待核实
```

有许多知名的预训练模型可供选择，其中包括：
1. GPT-2 (Generative Pre-trained Transformer 2)：由 OpenAI 开发的大型语言模型，在许多 NLP 任务上表现出色。
1. BERT (Bidirectional Encoder Representations from Transformers)：由 Google 开发的预训练语言理解模型，在 NLP 领域有着广泛应用。
1. RoBERTa (Robustly Optimized BERT)：是对 BERT 的改进版，在许多 NLP 任务上表现更好。
1. T5 (Text-to-Text Transfer Transformer)： T5 是一种文本转移转化器, 它是由 Google 团队在 2019 年提出的, 是在 Transformer 的基础上进行改进, 用于多种文本转移任务. T5 模型在许多 NLP 任务中获得了非常好的结果, 例如文本生成, 摘要, 问答等. 它可以用于 Pre-training, fine-tuning, transfer learning 的场景。
1. XLNet：是对 BERT 的改进版，使用了一种不同的预训练方法，在许多 NLP 任务上表现出色。
1. ALBERT (A Lite BERT)：是 BERT 的瘦身版本，在保持高性能的同时减少了模型的参数数量。
1. 这些模型都是在大规模数据集上预训练的，并且已经在许多 NLP 任务上获得了优秀的结果。
```