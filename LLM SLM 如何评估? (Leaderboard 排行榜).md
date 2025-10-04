(Source:  [huggingface.co: Open LLM Leaderboard - a Hugging Face Space by open-llm-leaderboard](https://huggingface.co/spaces/open-llm-leaderboard/open_llm_leaderboard))

|T|Model|Average ⬆️|ARC|HellaSwag|MMLU|TruthfulQA|Winogrande|GSM8K|
|---|---|---|---|---|---|---|---|---|
|🔶|[davidkim205/Rhea-72b-v0.5](https://huggingface.co/davidkim205/Rhea-72b-v0.5) [📑](https://huggingface.co/datasets/open-llm-leaderboard/details_davidkim205__Rhea-72b-v0.5)|81.22|79.78|91.15|77.95|74.5|87.85|76.12|
|💬|[MTSAIR/MultiVerse_70B](https://huggingface.co/MTSAIR/MultiVerse_70B) [📑](https://huggingface.co/datasets/open-llm-leaderboard/details_MTSAIR__MultiVerse_70B)|81|78.67|89.77|78.22|75.18|87.53|76.65|
|💬|[MTSAIR/MultiVerse_70B](https://huggingface.co/MTSAIR/MultiVerse_70B) [📑](https://huggingface.co/datasets/open-llm-leaderboard/details_MTSAIR__MultiVerse_70B)|80.98|78.58|89.74|78.27|75.09|87.37|76.8|
|🔶|[abacusai/Smaug-72B-v0.1](https://huggingface.co/abacusai/Smaug-72B-v0.1) [📑](https://huggingface.co/datasets/open-llm-leaderboard/details_abacusai__Smaug-72B-v0.1)|80.48|76.02|89.27|77.15|76.67|85.08|78.7|
|🔶|[ibivibiv/alpaca-dragon-72b-v1](https://huggingface.co/ibivibiv/alpaca-dragon-72b-v1) [📑](https://huggingface.co/datasets/open-llm-leaderboard/details_ibivibiv__alpaca-dragon-72b-v1)|79.3|73.89|88.16|77.4|72.69|86.03|77.63|
|💬|[mistralai/Mixtral-8x22B-Instruct-v0.1](https://huggingface.co/mistralai/Mixtral-8x22B-Instruct-v0.1) [📑](https://huggingface.co/datasets/open-llm-leaderboard/details_mistralai__Mixtral-8x22B-Instruct-v0.1)|79.15|72.7|89.08|77.77|68.14|85.16|82.03|
|💬||

现在，有很多这样的模型每周都在发布，宣称它们的性能非常好。但是，要从中找出哪些真的有进步，哪个模型是最先进的，有点困难。

网站提供了一个功能，让人们可以提交自己的模型到一个特别的计算系统上去检验。它用一种叫做Eleuther AI Language Model Evaluation Harness的方法来测试模型。这个方法会在六个不同的方面对模型进行评估。

1. AI2推理挑战：一些适合小学生水平的科学问题。
2. HellaSwag：测试模型的常识推理能力，对人来说很简单，但对一些顶尖模型来说很难。
3. MMLU：测试模型在57种不同任务上的多任务准确性，包括初级数学、美国历史、计算机科学等。
4. TruthfulQA：测试一个模型生产网络上常见错误信息的倾向。
5. Winogrande和GSM8k：都是用来测试模型的常识推理能力。

如果你想知道不同模型的表现，可以查看Hugging Face网站上的详细结果。如果某个模型被标记为“Flagged”，意味着它可能有问题，最好忽略它。

最后，还提供了如何重复这些测试结果的具体命令。这可以帮助研究人员验证模型性能，确保结果是可以重现的。

简单来说，这就像一个大型比赛，不同的机器人（语言模型）在不同的学科测试中进行比较，看看哪个机器人更聪明，更懂常识。


## 如何看这份报告

这篇报告提供了一个全面的框架，用于评估和比较不同的大型语言模型（LLMs）和聊天机器人的性能。报告利用了Eleuther AI语言模型评估工具（Eleuther AI Language Model Evaluation Harness），这是一个统一的框架，可以对生成式语言模型在大量不同的评估任务上进行测试。以下是报告中提到的关键指标的解释：

1. **Average ⬆️**：指的是在所有评估任务中模型得分的平均值。平均得分越高，意味着模型的整体性能越好。

2. **ARC**：AI2推理挑战（25-shot），一组针对小学科学问题的测试，用于评估模型在科学推理上的能力。

3. **HellaSwag**：（10-shot）一个测试常识推理的任务，对人类来说比较容易（大约95%的准确率），但对于当前最先进的模型来说比较有挑战。

4. **MMLU**：（5-shot）多任务学习的测试，覆盖了57个任务，包括基础数学、美国历史、计算机科学、法律等，用来衡量模型在多任务准确性上的表现。

5. **TruthfulQA**：（0-shot）测试模型复现在线常见虚假信息的倾向性。需要注意的是，尽管在设置上是0-shot，但由于每个示例前都会附加6个问答对，因此在Harness中实际上是6-shot任务。

6. **Winogrande**：（5-shot）大规模的Winograd基准测试，对于常识推理来说既是对抗性的也是困难的。

7. **GSM8K**：（5-shot）多样化的小学数学词问题，用于衡量模型解决多步骤数学推理问题的能力。

在所有这些评估中，得分越高表示性能越好。

报告中还涉及到以下几个重要的指标：

- **Type** 和 **Architecture**：分别表示模型的类型和架构。不同的模型架构在处理各种任务时可能会有不同的效率和准确率。

- **Precision**：指的是模型输出的准确度，高精度意味着模型能够更准确地预测或生成正确的输出。

- **Merged** 和 **Hub License**：涉及模型的合并状态和使用许可证。

- **#Params (B)**：模型的参数数量，以亿为单位。参数数量越多，通常意呀着模型能够学习更多的信息，但同时需要更多的计算资源。

- **Hub ❤️** 和 **Model sha**：分别表示模型在Hugging Face Hub上的喜爱程度和模型的特定版本。

报告强调了通过开源社区所取得的真正进步以及当前最先进模型的辨别。此外，它还为希望重现结果的用户提供了具体的命令，使其可以运行相应的模型并获取结果。

以上就是对报告指标的详细解析。希望这可以帮助你更好地理解不同大型语言模型的性能和特点。

### shot
- 次数或者例子的数量：在机器学习和人工智能的研究领域，特别是在少样本学习（Few-Shot Learning）中，“shot”常用来指示用于任务或模型学习的示例（样本）数量。比如，“25-shot”意味着使用25个样本来训练或测试模型的性能。“0-shot”则意味着在没有任何特定示例的情况下进行学习或测试，通常依赖于模型预先学习的知识。

- 执行或运行的意思：在编程语言或命令行操作中，"shot"没有直接对应的意思，但是从上下文可以推测，这里提到的与“python main.py --model=...”开头的部分是指执行或运行给定的命令或代码。这部分文本提供了一系列参数和设置，用于运行实验或评估特定模型的性能。


综上所述，这段文本主要讨论的是如何使用特定的参数设置来重现或运行实验，并评估模型在不同数量的示例（shot）下的表现。

### ARC
(Source:  [substack.com: Benchmarking Open Source Language Models - State of AI](https://stateofaigpt.substack.com/p/benchmarking-open-source-language#%C2%A7think-you-have-solved-question-answering-try-arc-the-ai-reasoning-challenge))

ARC是AI2推理挑战（AI2 Reasoning Challenge）的缩写，这是一项旨在推动AI研究在更复杂的问答任务上取得进展的新挑战。该数据集包含7,787道自然科学学科的问题，这些问题特意选择，以要求相比之前的问答数据集如SQuAD或SNLI更全面的知识和推理能力。ARC问题被分为挑战集和简单集，挑战集只包含那些被检索基算法和词共现算法都错误回答的问题。

为什么选择ARC？
目前的问答数据集主要关注于能通过表面线索就能找到答案的“检索式”任务，并没有为那些需要常识知识、高级推理或更深层次语言理解的问题促进进展。ARC数据集，包括了来自标准化考试的自然科学问题，试图通过选取那些不能仅凭简单基线回答的难题来填补这一空白，鼓励研究新方法以处理复杂问题。

ARC数据集
这个数据集包含了7,787道多项选择题，涵盖了不同的年级水平（从三年级到九年级）。为了区分相对容易和更具挑战性的问题，作者为“挑战性问题”设计了一个操作定义，即那些被检索基算法和词共现算法都错误回答的问题。

ARC挑战集中的问题类型
该数据集包含各种知识和推理风格跨度的问题。一些类别包括定义、结构、空间/运动关系、定性推理和比较。挑战集包含的问题要求比简单集更高层次的理解。

ARC语料库
除了问题集，作者还提供了ARC语料库，这是一个由14百万条与科学相关的、从网络上挖掘的句子组成的集合，这些句子涉及回答挑战性问题所需的知识。这个语料库作为一个可选资源提供，系统并不限于仅使用此语料库。

基线模型及其表现
作者在ARC挑战集上测试了几种基线模型，包括在SQuAD和SNLI任务上表现最好的神经模型。然而，这些模型都没有能够显著地超越随机基线，突显了任务的难度。然后，作者将ARC作为一个挑战向研究社区提出，以开发在数据集更复杂问题上表现更好的模型。

ARC的潜力
AI2推理挑战为AI研究社区提供了非常需要的焦点转变。通过强调高级知识和推理，ARC数据集推动了当前问答模式的界限，并推动了对AI中的语言理解和推理能力的追求。通过将问题和支持的ARC语料库公开可用，作者邀请研究人员直面这一挑战性问题，为理解复杂的真实世界问题的更先进的AI系统铺平了道路。