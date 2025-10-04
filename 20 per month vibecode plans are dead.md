
![|200](https://i.ytimg.com/vi/l_2geEGzkeM/hqdefault.jpg)
(Source: [youtube.com: Detailing his advanced Claude Code workflow/ (228) $20/mo vibecode plans are dead - YouTube](https://youtu.be/l_2geEGzkeM?t=1797))




好的，這是我為您整理的影片重點，以主持人 Ray Fernando 的第一人稱視角呈現。

大家好，我是 Ray Fernando。

在今天的直播中，我主要想跟大家聊一個我認為很重要的趨勢：每月 20 美元的 Vibe Coding 時代已經結束了。如果你想使用像 Anthropic 的 Claude Sonnet 4 或 Opus 4 這種頂級 AI 模型來進行高強度的 Agentic Coding (代理式編碼)，過去那種低廉的價格已經撐不住了。

我將深入探討目前市面上幾個主流工具的定價方案，特別是 Cursor 和 Claude Code，並分享我個人的使用經驗與選擇，希望能幫助大家在目前這個有點混亂的市場中，找到最適合自己的價值所在。

Cursor 的定價變化：$20 Pro 方案的削弱

我過去和很多人一樣，是 Cursor 每月 20 美元 Pro 方案的用戶。以前這個方案能提供約 500 次的快速請求，對日常開發來說相當夠用。

但隨著更強大也更昂貴的 Claude Sonnet 4 模型推出，現在同樣的 20 美元 Pro 方案，能換到的 Sonnet 4 請求次數大幅縮水到只剩下約 225 次。如果你想用更強的 Opus 4 模型，次數可能更少。這對我這種重度依賴 AI 代理進行開發的 Agentic Coding 工作流來說，已經遠遠不夠。

Cursor 官方也將這個方案重新定位為「主要用於 Tab 自動補全和偶爾的 Agent 使用」。如果你想更頻繁地使用 Agent，就得考慮升級到：

Pro+ 方案：每月 60 美元，約 675 次 Sonnet 請求。

Ultra 方案：每月 200 美元，約 4500 次 Sonnet 請求。

以我個人的用量來看，一個月用上數千次請求是家常便飯，所以我現在的選擇已經介於 Pro+ 和 Ultra 之間。

我的主力工具：Claude Code

因為 Cursor 的限制，我開始深入使用 Anthropic 自家的 Claude Code，這是一個命令行工具 (CLI)，它對整個程式碼庫的理解和上下文處理能力非常出色，這也是我願意為它付費的主要原因。

以下是 Claude Code 的方案分析：

Pro 方案 ($20/月)：這個方案同樣有很大的限制。它每 5 小時只能發送約 45 條訊息，而且最致命的是，你無法使用 Opus 4 模型。我非常依賴 Opus 4 來進行專案的初期規劃，所以這個方案對我來說並不適用。它只適合小型專案或輕度使用者。

Max 方案 ($100/月 & $200/月)：這才是我真正發揮價值的地方。

$100/月方案：在我度假期間，我使用的是這個方案。它每 5 小時提供約 225 條訊息，對我當時的輕度開發來說已經足夠。

$200/月方案：這是我目前正在使用的方案。它每 5 小時提供約 900 條訊息，我幾乎可以無限制地使用 Opus 4 進行編碼，完全沒有遇到任何瓶頸。我用 cc usage 指令查過，這個月我已經產生了價值約 400 美元的用量，所以這 200 美元對我來說物超所值。

我的工作流程：Agentic Coding 與工具選擇

我的核心工作方式是 Agentic Coding。我把自己定位成「導演」，由 AI 代理來執行具體的編碼任務。我負責規劃、審查和調試。

規劃階段：我使用 Claude Code 搭配 Opus 4 模型，利用其強大的推理能力來制定詳細的開發計畫。我還會使用 ultrathink 這個關鍵字來讓它進行更深度的思考。

執行階段：我會將計畫交給 Sonnet 4 模型去實作。Sonnet 4 速度快，執行力強。

審查與整合：我仍然在 Cursor 這個 IDE 中審查所有 AI 生成的程式碼。Cursor 的程式碼 Diff 和整合功能非常優秀。

對我來說，Claude Code CLI + Cursor IDE 是目前的最佳組合。Claude Code 解決了上下文管理的問題，我不再需要手動選擇一堆文件餵給 AI，它能自己理解我的專案；而 Cursor 則提供了最佳的審查和編輯體驗。

其他工具的快速掃描

我也研究了市面上其他的選擇：

Gemini CLI: 我個人覺得它的輸出品質和作弊感（convincing me its code is better than it is）讓我不太滿意，但我會持續關注。

Amazon Q: 每月 19 美元提供 1000 次 Sonnet 4 聊天交互，看起來是個不錯的平價選擇，但沒有 Opus 模型，且整合度不如 Claude Code。

Rovo Dev CLI: 觀眾提到的免費工具，看似提供大量免費 Sonnet 4 token，但經過研究發現它有 8k 的上下文窗口限制，這對於複雜的 Agentic Coding 來說太小了，需要不斷手動干預，違背了使用代理的初衷。

模板 (Magic UI Design): 一個省錢的絕佳方式。與其從零開始讓 AI 寫 UI，不如直接購買高品質的設計模板，然後讓 AI 在此基礎上進行客製化，能省下大量的時間和 token 費用。

我的結論

$20/月的 Vibe Coding 時代結束了：如果你想用最好的模型 (Sonnet 4, Opus 4) 進行高強度開發，每月 20 美元已經不夠了。你至少需要考慮每月 100 到 200 美元的預算。

價值在於流程，而非單一工具：我願意支付更高的費用，是為了換取順暢不中斷的開發流程、更少的上下文切換和更高的效率。對我這樣的創業者來說，時間和心力遠比這 200 美元更寶貴。

選擇最適合你的方案：你需要評估自己的工作模式。你是重度 Agentic Coding 用戶，還是只是偶爾需要 AI 協助？你的用量是多少？根據這些問題，才能在 Cursor Ultra、Claude Code Max 或其他方案中做出明智的選擇。

這個領域變化非常快，我會持續為大家關注最新的動態。明天我會邀請一位 Cursor Ultra 的重度使用者來直播，進行一場 Cursor Ultra vs Claude Code Max 的對決，敬請期待！