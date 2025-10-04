


示请求被服务器拒绝了，主要原因是请求的来源（Origin）被识别为 app://obsidian.md ，而不是预期的 https://www.maxai.co 。错误详情显示：

3. ja3_tls_code:101010104 - 这是一个 TLS 指纹识别错误，服务器通过 JA3 指纹识别出这不是来自浏览器的正常请求
4. origin: app://obsidian.md - 请求来自 Obsidian 应用而不是网页浏览器

- 可以考虑使用中转服务器：

- 在本地搭建一个代理服务器
- 将请求发送到代理服务器
- 由代理服务器转发请求到目标服务器
- 或者使用 Obsidian 的系统集成能力：

- 通过 obsidian:// 协议打开系统浏览器
- 在浏览器中完成请求
- 将结果返回给 Obsidian
-


