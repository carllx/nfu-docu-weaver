
[[Projects]] 

[[AutoGEN - MemGPT - LLMs]]
## Embedding
[[Llama Index tutorial]]

## AnythingLLM
### Set Models Location

将Model安装到E盘上.
具体操作方法可参考 (-- `How To Change Ollama Model Default Directory` [youtube](https://youtu.be/uj1VnDPR9xo?t=81)[youtube playlist](https://www.youtube.com/playlist?list=PL3JVwFmb_BnRiXTKVfcr-lnxyZpp9-f9a))

设置环境变量如下：
```
OLLAMA_HOST: 0.0.0.0
OLLAMA_MODELS: C:\gpt_models\ollama
OLLAMA ORIGINS: *
```

设置完毕后，重启Ollama，系统会自动在`E:\gpt_models\ollama`下创建一个名为'blobs'的目录。


### Download Models
接着进行[模型下载](https://ollama.com/library?sort=popular )。例如包括：

- [qwen](https://ollama.com/library/qwen:110b)
- [llama3](https://ollama.com/library/llama3)
- [deepseek ]( https://ollama.com/library/deepseek-llm)
选择适当的模型: 
[[LLM SLM 如何评估? (Leaderboard 排行榜)]]
[[Open Source Model Benchmarker (OSMB)]]

### 模型选择
根据您提供的信息,我的建议如下:

1. 如果您的主要目标是开发一个性能优异的对话/聊天应用,那么选择指令调优(instruct-tuned)版本的Llama 3模型会更合适。Llama 3的指令调优模型是专门针对对话场景进行微调和优化的,在常见的对话任务benchmark上表现优于很多开源聊天模型。

2. 如果您更关注模型的通用性能,或者需要将模型应用到其他非对话的NLP任务中,那么选择预训练(pre-trained)版本可能更好。预训练版本是基础模型,在通用的语言理解和生成任务上有不错的表现。

3. 模型的参数量也是一个需要权衡的因素。8B和70B分别代表80亿和700亿参数。一般来说参数量越大,模型的性能越好,但训练和推理的计算开销也会更高。8B的模型在性能和效率之间取得了较好的平衡,适合一般的应用场景。如果您有更高的性能要求且算力资源充足,可以考虑使用70B的大模型。

4. 最后建议您可以分别试用一下instruct和pre-trained两个版本,在实际应用中比较它们的效果,选择最符合需求的模型。Llama 3 提供的模型许可比较宽松,在遵守使用条款的情况下可以灵活地进行二次开发。

总之,模型的选择需要根据具体的任务需求、期望的性能表现、可用的计算资源等因素进行综合考虑。希望以上建议对您有所帮助。


### API

文档: http://localhost:3001/api/docs/

## Ollama
### API

(-- `ollama/docs/api.md at main · ollama/ollama` [github](https://github.com/ollama/ollama/blob/main/docs/api.md))

### Ollama Host

(-- `ollama/docs/faq.md at main · ollama/ollama` [github](https://github.com/ollama/ollama/blob/main/docs/faq.md))

如何在局域网内共享 Ollama 模型设置

1. 设置 OLLAMA_HOST 环境变量:
   - 在您的操作系统上打开环境变量设置。例如,在 Windows 上,您可以在控制面板中找到"编辑环境变量"。[2](https://github.com/ollama/ollama/issues/703), [5](https://docs.dify.ai/tutorials/model-configuration/ollama), [6](https://www.youtube.com/watch?v=9QvQvQOVdt8)
   - 创建一个新的环境变量 OLLAMA_HOST,并将其值设置为 "0.0.0.0"。这样可以让 Ollama 监听所有可用的网络接口,从而实现局域网内共享。[9](https://docs.openwebui.com/troubleshooting/)

2. 设置其他环境变量:
   - 您也可以设置其他环境变量,如 OLLAMA_MODELS 来指定模型路径。[1](https://github.com/ollama/ollama/blob/main/docs/faq.md), [3](https://github.com/ollama/ollama/blob/main/docs/faq.md#:~:text=How%20can%20I%20expose%20Ollama,environment%20variables%20on%20your%20platform.)

3. 重启 Ollama 服务:
   - 在设置好环境变量后,请重启 Ollama 服务以应用更改。[4](https://www.youtube.com/watch?v=H_cqBjDVinw), [7](https://medium.com/@robjsliwa_71070/easy-as-ollama-running-large-language-models-locally-with-a-elegant-web-ui-af3255b18141), [8](https://www.reddit.com/r/ollama/comments/1cee9fy/i_need_help_setting_up_ollama/), [10](https://community.hetzner.com/tutorials/ai-chatbot-with-ollama-and-open-webui/)



http://127.0.0.1:11434/api/generate

```shell
# Define the body of the request
$body = @{
    "model" = "llama3:latest"
    "prompt" = "Why is the sky blue?"
    "stream" = $false
} | ConvertTo-Json

# Send the request and store the response 
$response = Invoke-WebRequest -Uri 'http://localhost:11434/api/generate' -Method POST -Body $body -ContentType 'application/json'

# Access and print the content of the response
$content = $response.Content
Write-Host $content
```


macOS 访问
```shell
curl http://198.168.10.5:11434/api/generate -d '{
  "model": "llama3",
  "prompt": "Why is the sky blue?",
  "stream":false
}'
```

## Qroq 加速

(-- `GroqCloud` [groq](https://console.groq.com/settings/limits))


## [[Agents - crewAI]]