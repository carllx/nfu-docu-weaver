[[dev]]

## Description:
它是一个帮助用户记忆外语单词的 chrome extension app, 通过它用户可以网上浏览网页的时候标记需要记忆单词,  app 将标记的单词作为数据储存于用户的 google sheets 中作为标记单词库.  基于单词库我们为学生提供"scheduled memory." 和"fragmented memory" 两种记忆方式:  Fragmented memory 将数据库用于用户日后在浏览网站时通过高亮方式提醒用户, 用户可以在任何时间无负担地巩固遇见的单词;  Scheduled memory 数据库 通过AnkiConnect 将标记单词同步到 Anki 应用 , 为用户提供沉浸方式的记忆环境提供可能.

Here is an example of how you can justify the permissions for your chrome extension:

- **Identity justification**: The extension needs to know the user's identity to access their Google Sheets account and store data in it. This is required for the extension's core functionality.
- **ClipboardWrite justification**: The extension needs to write data to the clipboard so that users can easily copy words from web pages and paste them into their Google Sheets library. This is required for the extension's core functionality.
- **ClipboardRead justification**: The extension needs to read data from the clipboard so that users can easily copy words from web pages and paste them into their Google Sheets library. This is required for the extension's core functionality.
- **webRequest justification**: The extension needs to monitor web requests so that it can detect when users visit web pages with foreign words. This is required for the extension's core functionality.
- **webNavigation justification**: The extension needs to monitor web navigation so that it can detect when users navigate to different pages on a website. This is required for the extension's core functionality.
- **Background justification**: The extension needs to run in the background so that it can continue monitoring web requests and navigation even when the user is not actively using the browser. This is required for the extension's core functionality.
- **Host permission justification**: The extension needs access to Google Sheets so that it can store data in the user's account. This is required for the extension's core functionality.

## Ploblem
(-- `How a Chrome Extensions involving OAuth 2.0 continue to be developed without completing the Google verification process?` [stackoverflow](https://stackoverflow.com/questions/76445345/how-a-chrome-extensions-involving-oauth-2-0-continue-to-be-developed-without-com))

Please rewrite the following to ask other developers questions on stackoverflow.
How a Chrome Extensions involving OAuth 2.0 continue to be developed without completing the Google verification process?

I'm developing a Chrome extension that involves Google API (gapi) authorization, so that users can sync data to google sheets. I refer to some developers' methods for setting up Extension's authorization: 

bumbu's approach (  `Using Google API (gapi) in Chrome Extensions(MV2)` [bumbu](https://bumbu.me/gapi-in-chrome-extension))
minni minhaj's approach (-- ` Chrome Extensions(MV3) to handle Google sign-in's` [stackoverflow](https://stackoverflow.com/questions/72514608/google-chrome-extension-manifest-version-3-to-handle-google-sign-ins/73345256#73345256))
ismail's approach (-- `Implementing Firebase Auth SSO with Google in Chrome Extensions with Manifest V3 and React.js | by ismail | Medium` [medium](https://medium.com/@elhardoum/implementing-firebase-auth-sso-with-google-in-chrome-extensions-with-manifest-v3-and-react-js-5946bca0ba19))

But when I set everything up. A Google auth pop-up show up during update my Extension: 
```
Access blocked: {Your Extension} has not completed the Google verification process.
{Your Extension} has not completed the Google verification process. The app is currently being tested and can only be accessed by developer-approved testers. If you think you should have access, contact the [developer](https://accounts.google.com/).
```

Client ID for Chrome extension  [Google Cloud console](https://console.cloud.google.com/apis/credentials/oauthclient/35823189244-e06hq2m9864294b70dsft9ohd9o26p0b.apps.googleusercontent.com?project=app-vocabulary-memorizer&pli=1)

## Anki 
[[Anki Development]]

![[内网穿透]]
## App Framwork
### Tampermokey
To import libraries from npm when developing a Tampermonkey tool, there are a few ways to do it. One way is to use a webpack project prototype for user-scripts of Tampermonkey[1]. This is a Webpack4+ plugin for userscript projects that can bundle everything in your userscript, including icons and JSON data. Another way is to use a plugin like tampermonkey-webpack-plugin[2], which is a Webpack plugin that can be used to bundle Tampermonkey scripts. 

To include an NPM package into your Tampermonkey script, you can use the require() function to import the package[3]. For example, if you want to include the ethabi-js library, you can use the following code:

```
// ==UserScript==
// @name         My Tampermonkey Script
// @namespace    http://tampermonkey.net/
// @version      0.1
// @description  Example of importing an NPM package into a Tampermonkey script
// @author       Your Name
// @match        http://*/*
// @match        https://*/*
// @grant        none
// ==/UserScript==

// Import the ethabi-js library
const ethabi = require('ethabi-js');

// Use the library
const abi = ethabi.decodeMethod('0x...');
```

Note that you will need to install the package using npm before you can use it in your Tampermonkey script. You can do this by running `npm install ethabi-js` in your project directory.

It's important to keep in mind that Tampermonkey scripts run in a sandboxed environment, so not all NPM packages will work with Tampermonkey. You may need to test the package to make sure it works as expected.

[3] https://stackoverflow.com/questions/50493646/including-npm-package-into-tampermonkey-script[1] https://www.npmjs.com/package/webpack-tampermonkey[2] https://www.npmjs.com/package/tampermonkey-webpack-plugin

Citations:
[1] https://www.npmjs.com/webpack-tampermonkey
[2] https://snyk.io/advisor/npm-package/tampermonkey-webpack-plugin?utm_campaign=snyk-widget&utm_medium=referral&utm_source=skypack
[3] https://stackoverflow.com/questions/50518520/including-npm-package-into-tampermonkey-script

By Perplexity at https://www.perplexity.ai/search/1b6a8242-650b-4f59-bc1d-76c1103b381a

### Chrome Extensions guides
Chrome Extensions getting started guides[1](https://developer.chrome.com/docs/extensions/mv3/getstarted/). 其次 How to Create Your Own Google Chrome Extension[5](https://www.freecodecamp.org/news/building-chrome-extension/): 本教程提供了一个从头开始创建Chrome扩展的分步指南。涵盖了HTML、CSS和JavaScript的基础知识，这些都是Chrome扩展程序的构建块。;这个YouTube视频提供了一个适合初学者的课程，从头开始构建一个Chrome扩展。Build a Chrome Extension – Course for Beginner[9](https://youtube.com/watch?v=0n809nd4Zu4)

### Extensions 审核未通过
(-- `Chrome Web Store Console/Developer Dashboard/Status` [google](https://chrome.google.com/webstore/devconsole/6442a1e0-91cb-4421-8055-75eaca488e0f/jfajgjmdolckiemhfccckdoinlbfoalb/edit/status)) 
(-- `Credentials – APIs and services – app - Vocabulary Me… – Google Cloud console` [cloud](https://console.cloud.google.com/apis/credentials?project=app-vocabulary-memorizer))



根据以下描述生成 chrome extension 的 Permission justification, 包括
identity justification*,
clipboardWrite justification*,
clipboardRead justification*,
webRequest justification*,
webNavigation justification*,
background justification*,
Host permission justification*.

### Boilerplate
(-- `lxieyang/chrome-extension-boilerplate-react: A Chrome Extensions boilerplate using React 18 and Webpack 5.` [github](https://github.com/lxieyang/chrome-extension-boilerplate-react))

## Highlighter
**Weava Highlighter**，它允许你用多种颜色突出显示网站和PDF文件，做注释，只需点击一下就能重温，将你的亮点组织到文件夹和子文件夹中，为你的亮点自动创建引文，并在任何地方访问你的亮点²。Highlight 本教程解释了如何使用HTML和JavaScript中的 "mark "标签在网页上突出显示文本。[2](https://dev.to/kokaneka/highlight-searched-text-on-a-page-with-just-javascript-17b3);使用JavaScript在网页上突出搜索关键词。JavaScript: Search Keyword Highlighting [10](https://www.the-art-of-web.com/javascript/search-highlight/) ;这个Stack Overflow线程提供了如何使用JavaScript在网页上突出显示文本的例子。How to highlight text using javascript[6](https://stackoverflow.com/questions/8644428/how-to-highlight-text-using-javascript)


## Google Sheets as a Database
[[Google Sheets as a Database]]
每个Client 身边都有一个数据库, 因此使用Google API, 开发者不需要维护数据库的成本.

## CSV
Stack Overflow 提供了如何使用JavaScript从CSV文件中读取数据的例子, [3](https://stackoverflow.com/questions/7431268/how-to-read-data-from-csv-file-using-javascript);[7](https://www.tutorialspoint.com/How-to-read-data-from-CSV-file-using-JavaScript), 可以用它来存储用户需要记忆的单词或短语的列表。用JavaScript读取CSV文件并显示其内容How to Read CSV file and Display its content using JavaScript[11](https://makitweb.com/how-to-read-csv-file-and-display-its-content-using-javascript/):本教程解释了如何使用JavaScript从CSV文件中读取数据并在网页上显示其内容。

## Audio
While GitHub and SoundCloud are primarily used for code hosting and music streaming, respectively, it is possible to use them as cloud storage services for audio files. 

GitHub offers a tool called Infinite Uploads, which allows users to move and serve all their media files, including audio, from the cloud to boost performance and save on storage and bandwidth[1]. However, this tool is primarily designed for WordPress websites, and it may not be the most user-friendly option for non-technical users.

SoundCloud, on the other hand, allows users to upload up to 3 hours of audio for free, with a maximum file size of 4GB[2]. While SoundCloud is primarily a music streaming platform, it can be used to store and share audio files, and users can generate URLs for their uploaded tracks.

That being said, it may be more practical to use a dedicated cloud storage service for audio files, such as Amazon S3 or Google Cloud Storage. These services offer more storage space and better performance for media files, and they can be integrated with other tools and services. Additionally, there are several Anki add-ons and tools available that can help users incorporate audio files into their flashcards, such as the Audio Files add-on[3] and Localize Media[4].

In summary, while it is possible to use GitHub or SoundCloud as free cloud storage services for audio files, it may be more practical to use a dedicated cloud storage service for better performance and integration with other tools. There are also several Anki add-ons and tools available to help users incorporate audio files into their flashcards.

Citations:
[1] https://github.com/uglyrobot/infinite-uploads
[2] https://help.soundcloud.com/hc/en-us/articles/360039149474-FAQ-SoundCloud-s-free-upload-limit
[3] https://ankiweb.net/shared/info/1984823157
[4] https://forums.ankiweb.net/t/converting-audio-web-links-to-audio-files/30226

By Perplexity at https://www.perplexity.ai/search/d222ef8f-a193-40bd-b9af-3671a6f4f14f

## NLP
Best JavaScript machine learning libraries in 2021 ;[4](https://blog.logrocket.com/best-javascript-machine-learning-libraries-in-2021/) 它帮助你学习单词的含义，并通过将它们与段落快照、单词音频和各种语境下的翻译联系起来，毫不费力地记住它们 ¹。我希望这对你有帮助!

资料来源：与Bing的对话，5/31/2023 (1) Weava Highlighter - PDF & Web - Chrome Web Store - Google Chrome. https://chrome.google.com/webstore/detail/weava-highlighter-pdf-web/cbnaodkpfinfiipjblikofhlhlcickei.(2) Burning Vocabulary - 从阅读中学习单词 - Chrome Web Store. https://chrome.google.com/webstore/detail/burning-vocabulary-learn/ljfjnlcnpmabfcgcmffkmgainghokdpl. (3) 5个Highlighter应用程序来注释在线文本、视频或播客 - MUO. https://www.makeuseof.com/highlighter-apps-to-annotate-online-text-videos-or-podcasts.

## 插件

Burning Vocabulary
(-- `BV - Learn words from reading - Chrome Web Store` [google](https://chrome.google.com/webstore/detail/burning-vocabulary-learn/ljfjnlcnpmabfcgcmffkmgainghokdpl))
Pro: rmb 100 (-- `价格 - Burning Vocabulary` [burningvocabulary](https://burningvocabulary.com/price))

Weava Highlighter
(-- `Weava Highlighter - PDF & Web - Chrome Web Store` [google](https://chrome.google.com/webstore/detail/weava-highlighter-pdf-web/cbnaodkpfinfiipjblikofhlhlcickei))
