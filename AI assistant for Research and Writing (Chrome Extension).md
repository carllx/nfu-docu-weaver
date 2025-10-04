[[dev]] 
This Chrome extension is called GPT Helper and is mainly used in Bing Chat or ChatGPT and other AI conversation tools. 
- Its first function is to help quickly generate personal custom prompt words. 
- Its second function is to reorganize the content of GPT’s answer into a text in line with the citation format, which can be pasted into markdown notes.

## Boilerplate
Chrome Extension Boilerplates Comparison, check the News on [Repository search results · GitHub](https://github.com/search?q=extension+boilerplate&type=repositories&s=stars&o=desc) 

| Boilerplate | Framework | Language | Build Tool | Features | Stars | Contributors |
| --- | --- | --- | --- | --- | --- | --- |
| `lxieyang/chrome-extension-boilerplate-react` | React 18 | JavaScript | Webpack 5 | Hot reloading, HMR, code splitting | 2.4k | 5 |
| `abhijithvijayan/web-extension-starter at react-javascript` | React 18 | JavaScript | Webpack 5 | Hot reloading, HMR, code splitting | 1.7k | 10 |
| `EmailThis/extension-boilerplate` | Vanilla JavaScript | JavaScript | None | Basic functionality | 3.2k | 5 |
| `guocaoyi/create-chrome-ext` | React, Vue, Svelte, Solid, Preact, Alpine, Lit, Stencil, Inferno, Vanilla | JavaScript | None | Hot reloading, HMR, code splitting | 293 | 6 |

### `lxieyang/chrome-extension-boilerplate-react`

This boilerplate is a good choice if you prefer React. It is updated with Chrome Extension Manifest V3, React 18, Webpack 5, Webpack Dev Server 4, React Refresh, react-refresh-webpack-plugin, eslint-config-react-app, and more. It allows you to write modular and modern JavaScript code, load CSS easily, and automatically reload the browser on code changes[1].

### `abhijithvijayan/web-extension-starter at react-javascript`

This boilerplate is a good option if you want to build a "Write Once Run on Any Browser" extension. It is a starter kit for building cross-browser extensions for Chrome, Firefox, and Opera. It uses Webpack 5 and Babel 7 and supports ReactJS and TypeScript[2].

### `EmailThis/extension-boilerplate`

This boilerplate is a good option if you want to build cross-browser extensions for Chrome, Opera, and Firefox from a single code base. It uses Webpack 5 and Babel 7 and supports ReactJS and TypeScript. It is a template for building basic functionality extensions[3].

### `guocaoyi/create-chrome-ext`

This boilerplate is a good choice if you want to scaffold your Chrome extension with multiple boilerplates. It has boilerplates for React, Vue, Svelte, Solid, Preact, Alpine, Lit, Stencil, Inferno, and Vanilla. It supports hot reloading, HMR, and code splitting[4].

Overall, the choice of boilerplate depends on your specific needs and preferences.

  


Citations:
[1] https://github.com/lxieyang/chrome-extension-boilerplate-react
[2] https://blog.logrocket.com/creating-chrome-extension-react-typescript/
[3] https://www.freecodecamp.org/news/whats-boilerplate-and-why-do-we-use-it-let-s-check-out-the-coding-style-guide-ac2b6c814ee7/
[4] https://dev.to/llagerlof/chrome-extension-boilerplate-manifest-v3-1mj

By Perplexity at https://www.perplexity.ai/search/bb84452c-8402-4d5d-942c-84b7b5b3d33a

# GPT Citation clipboard

[[Sample bing Chat Clipboard]]
[[Sample Bard Chat Clipboard]]
[[Sample perlexity Chat Clipboard]]

## Observe websocket message

- It is not possible to observe the headers of a WebSocket message using the  `declarativeNetRequest` API Using the `declarativeNetRequest` API (Manifest V3), However,[chrome.com](https://developer.chrome.com/docs/extensions/reference/webRequest/). (-- `如何创建一个稳定的WebSocket连接？ - 掘金` [juejin](https://juejin.cn/post/7032243206687293448))

- The **HAR** file now includes WebSocket messages in Chrome 76.[WebSocket messages in HAR exports](https://developers.google.com/web/updates/2019/05/devtools#websocket) (-- `logging - How to save websocket frames in Chrome` [stackoverflow](https://stackoverflow.com/questions/29953531/how-to-save-websocket-frames-in-chrome))

- Currently, the only way to access or modify Websocket traffic is to use a [content script](https://developer.chrome.com/extensions/content_scripts) to [inject a script](https://stackoverflow.com/questions/9515704/building-a-chrome-extension-inject-code-in-a-page-using-a-content-script) that replaces the `WebSocket` constructor with your own wrapper. This wrapper should behave like the original WebSocket implementation. (-- `access Websocket traffic from chrome extension` [stackoverflow](https://stackoverflow.com/questions/22868897/access-websocket-traffic-from-chrome-extension))


## URL Title
Esample:
https://www.zhihu.com/question/590709485 => zhihu.com

## Footnote
XXXX[^PoloMusealedellaToscana] XXXX
XXXXXXX
[^PoloMusealedellaToscana]: XXXXXXXXX
Esample:  
'Chat GPT can de-obfuscate code - Medium.' => [^cfcdcm]
'GPT-4或者ChatGPT能帮着读代码吗？ - 知乎.' => [^c4hzhcnbzhddmmzh]



## Pingyin
当然可以！你可以使用 Pinyin.js 库中的 `STYLE_FIRST_LETTER` 风格来输出拼音首字母。以下是一个例子：

```javascript
// 引入 Pinyin.js 库
const pinyin = require('pinyin');

// 将汉字转换为拼音首字母
const result = pinyin('汉字转拼音', {
  style: pinyin.STYLE_FIRST_LETTER,
});

console.log(result); // Output: [ 'h', 'z', 'z', 'p', 'y' ]
```

在这个例子中，我们使用 `STYLE_FIRST_LETTER` 风格将汉字字符串转换为拼音首字母字符串。最后，我们将转换后的拼音首字母打印到控制台上。

