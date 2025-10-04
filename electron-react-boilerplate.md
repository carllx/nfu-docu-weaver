## Examples
(-- `electron-react-boilerplate/examples: Electron React Boilerplate Examples` [github](https://github.com/electron-react-boilerplate/examples#table-of-contents))


## boilerplate
(-- `electron-react-boilerplate/electron-react-boilerplate: A Foundation for Scalable Cross-Platform Apps` [github](https://github.com/electron-react-boilerplate/electron-react-boilerplate))

## Dependency Management
(-- `Adding Dependencies | Electron React Boilerplate` [js](https://electron-react-boilerplate.js.org/docs/adding-dependencies))
```md
Is {{electron-fetch}} is a **Native modules** , a **modules with native dependencies** or a **Modules that are imported by other modules** ?
```
When adding modules to your project, you need to consider where they should be installed: in `./release/app/package.json` or `./package.json`. Here's a breakdown to help you understand:

1. ./release/app/package.json:
   - **Native modules** or **modules with native dependencies** should be installed here.
   - Native modules are written in languages like C or C++ and provide direct access to the operating system's native APIs.
   - Examples of native modules include node-postgres, which communicates with a PostgreSQL database.
   - These modules should be listed under dependencies in ./release/app/package.json.

2. ./package.json:
   - Modules that are imported by other modules should be installed here.
   - For example, material-ui, redux-form, and moment are modules used by other parts of your project, such as React UI components.
   - Such modules should be included in the dependencies section of ./package.json.
   - Additionally, modules used for building, testing, and debugging purposes should be included in the devDependencies section of ./package.json.
   - DevDependencies are not required for the runtime of your project but are useful during development activities.

It's important to note the distinction between native modules, modules with native dependencies, and modules with peer dependencies:

- Native modules: These modules, such as fs, crypto, and zlib, provide access to system resources and are written in C or C++.
- Modules with native dependencies: Examples include sqlite3, opencv, and ffmpeg. They rely on native libraries and require the installation of those dependencies.
- Modules with peer dependencies: The express module, for instance, depends on the body-parser module, while mocha relies on chai. These dependencies are not automatically installed, so you must install them manually before using the module.

Understanding these distinctions is crucial when using native modules, modules with native dependencies, or modules with peer dependencies in your Node.js applications.

##  Preload script - Communication between ipcMain and ipcRenderer

### Description
Communication between ipcMain and ipcRenderer in electron using electron react boilerplate. 
What are the benefits of using preload script in Electron development?

Electron中的 Preload script 是一个在webPages 加载前在渲染器进程中运行的脚本。它允许将 Node.js功能注入到UI线程的 "window "全局中，并将有权限的API安全地暴露给Renderer process, 访问Node.js的API，并可以使用Electron的IPC（Inter-process communication,进程间通信）模块促进main 和 renderer processes之间的通信。

从Electron 20开始，Preload script 默认为 sandboxed，限制了它们对Node.js APIs subset(子集)的访问。这一安全措施涉及到一个限制API访问的polyfilled require函数。  

### Usage
在 [electron-react-boilerplate](https://github.com/electron-react-boilerplate/electron-react-boilerplate) 的 Preload script 位于 src/main/preload.ts 并在 `.erb/configs/webpack.config.preload.dev.ts` 中对它进行配置.
refer to:
- [javascript - Electron react sending data two-way in ipcMain and ipcRenderer - Stack Overflow](https://stackoverflow.com/questions/73192829/electron-react-sending-data-two-way-in-ipcmain-and-ipcrenderer) 提供preload script 的code 示例, 并提出 contextIsolation:true 的作用.
- [Easy typings for electron ipc (github.com)](https://github.com/electron-react-boilerplate/electron-react-boilerplate/issues/3378) 以 `store` 为例的参考, 提供preload script 的code 示例
- [ipcRenderer event reply arg coming through as undefined.  (github.com)](https://github.com/electron-react-boilerplate/electron-react-boilerplate/issues/3203#issue-1217585904), 提供教师用的示范.
- 

### contextIsolation 
```javascript
// main.js
const win = new BrowserWindow(
{
  fullscreen: false,
  webPreferences: {
    contextIsolation: true,
    preload: path.join(__dirname, '../path/to/your/preload.js'),
  },
},
```

The `contextIsolation` property is a security feature in Electron that ensures that both your _preload scripts_ and _Electron's internal logic_ run in a separate context to the website you load in a webContents. This is important for security purposes as it helps prevent the website from accessing Electron internals or the powerful APIs your preload script has access to¹. 

In your case, the error message "Property 'electronAPI' does not exist on type 'Window & typeof globalThis'" is because you are trying to access an object that is not defined in the current context. You can try setting the `contextIsolation` property to `true` in your webPreferences object¹. 

Source: Conversation with Bing, 6/13/2023(1) Context Isolation | Electron. https://www.electronjs.org/docs/latest/tutorial/context-isolation Accessed 6/13/2023.
(2) . https://bing.com/search?q=what+does+contextIsolation+do+in+electron Accessed 6/13/2023.
(3) Context Isolation - Electron - W3cubDocs. https://docs.w3cub.com/electron/tutorial/context-isolation.html Accessed 6/13/2023.
(4) Context Isolation | Electron. https://www.electronjs.org/pt/docs/latest/tutorial/context-isolation Accessed 6/13/2023.

## working with multi-dimensional arrays and nested objects

deep copies instead of shallow copies
在React中，当处理 multi-dimensional arrays 和 nested objects时，使用deep copies(深层拷贝) 而不是 shallow copies(浅层拷贝)，可以避免出现意外行为。

## Multiple Windows
![[Multiple Windows in Electron React Boilerplate.canvas|Multiple Windows in Electron React Boilerplate]]


## Hook of React

### useEffect 
- [useEffect – React](https://react.dev/reference/react/useEffect), 是一个Hook，用于管理 function 组件的side effects(副作用)。副作用是指在组件渲染之外影响组件的任何操作，例如进行API调用或设置定时器。例如，考虑一个从API获取数据并将其显示在一个列表中的组件
- 👀, [clean up function doesn't work · Issue  (github.com)](https://github.com/electron-react-boilerplate/electron-react-boilerplate/issues/3432) cshay1985在使用带有 clean up function 的useEffect hook，在unmount(卸载)时重置一些状态时，clean up function 没有被触发，而函数 onNewUnreadNotificationsRecieved 被多次触发的问题. 或参考案例 [pr-buddy](https://github.com/raine/pr-buddy/blob/ee8a487a500e857e6de956b6433e684575e88456/src/renderer/Tooltip.tsx#L72)

### useState
-  If you need to manage a complex object, I recommend that you consider using a [[State management library for React]]  instead of useState.

### useCallback

The `useCallback` hook takes two arguments: 
1. a function 
2. an array of dependencies. 

The function will be memoized based on the dependencies, so it will only be re-evaluated if any of the dependencies change. This can improve performance, especially in cases where the function is called frequently
```javascript
const memoizedFunction = useCallback(
  () => {
    window.electron.ipcRenderer.openSettingsWindow();// This function will only be evaluated once, even if it is called multiple times.
  },[] 
);

```



## Npm detect and remove unused dependencies



1. Install the `depcheck` package.

Code snippet

```
npm install depcheck -g
```

2. Run the `depcheck` command in your app's directory.

Code snippet

```
depcheck
```

This will generate a report of all the dependencies in your app, along with a list of the dependencies that are not used.

3. Review the report and identify the dependencies that you can safely remove.
    
4. Remove the unused dependencies from your app's package.json file.
    
5. Run `npm install` to install the updated dependencies.
    
6. Test your app to make sure that it still works after you have removed the unused dependencies.
    

Here are some additional tips for detecting and removing unused dependencies:

- The `depcheck` command can be used to detect unused dependencies in any JavaScript project, not just Electron apps.
- There are other tools available that can be used to detect unused dependencies, such as `npm-unused` and `unused-packages`.
- If you are not sure whether a dependency is used, you can check the source code of your app to see if it is imported or used.
- You can also use a code-coverage tool to see which parts of your code are actually executed. This can help you identify unused dependencies that are not being used by your app.

I hope this helps! Let me know if you have any other questions.


## Lemmatization
(-- `Python NLTK Stemming and Lemmatization Demo` [text-processing](http://text-processing.com/demo/stem/))
(-- `Lemmatizer API | Twinword` [twinword](https://www.twinword.com/api/lemmatizer.php))


## Handle errors when network glitches

What is the optimal approach for efficiently handle multiple API data synchronization transfers efficiently in the event of network glitches?
It could be beneficial to implement error handling by storing the request body to a local JSON file and terminating the process if the transmission fails on client side, in order to avoid any confusion caused by the incomplete results. When the network is restored, the program should start from the beginning with the failed request by retrieving the task objects from the backup JSON and attempting to resend the response tasks.
What are your insights on this matter?


(-- `Data Synchronization Patterns. The way to build better client-server apps... | by Denis Hasanenko | Nov, 2020 | Medium | Medium` [medium](https://hasanenko.medium.com/data-synchronization-patterns-c222bd749f99))

```javascript
const fetch = require('node-fetch');
const fs = require('fs');
 const addWordByTS = async (word) => {
  const tk = getToken();
  const myHeaders = {
    // Headers
  };
   const requestOptions = {
    method: 'POST',
    headers: myHeaders,
    body: JSON.stringify({ __BV_UUID: UUID, word }),
    redirect: 'follow',
  };
   const response = await fetch(
    `https://burningvocabulary.com/api/vocabulary/save?token=${tk}&version=3.11.177&manifest_version=3`,
    requestOptions
  );
   if (response.ok) {
    const result = await response.json();
    return result;
  }
   return { code: '404', msg: 'failed', data: null };
};
 // Function to handle API data synchronization
async function handleDataSynchronization(apiUrls) {
  const backupFile = 'backup.json';
  let backupData = [];
   try {
    // Check if backup file exists
    if (fs.existsSync(backupFile)) {
      const backupContent = fs.readFileSync(backupFile, 'utf8');
      backupData = JSON.parse(backupContent);
    }
     // Loop through API URLs
    for (const apiUrl of apiUrls) {
      let response;
       // Check if there is backup data for this API URL
      const backup = backupData.find((item) => item.apiUrl === apiUrl);
       if (backup) {
        // If backup data exists, resend the request
        response = await addWordByTS(backup.word);
      } else {
        // Otherwise, make a fresh request
        response = await addWordByTS(apiUrl);
      }
       // Process the response data
      // ... (your code to handle the response)
       // Remove the backup data if it was successful
      if (backup) {
        backupData = backupData.filter((item) => item.apiUrl !== apiUrl);
      }
    }
     // Cleanup backup file if all requests were successful
    if (backupData.length === 0) {
      fs.unlinkSync(backupFile);
    }
  } catch (error) {
    // Handle network or API errors
     // Store the request body to the backup data
    const requestBody = error.config && error.config.data ? error.config.data : null;
    backupData.push({ apiUrl: error.config.url, word: requestBody });
     // Save the backup data to a local JSON file
    fs.writeFileSync(backupFile, JSON.stringify(backupData), 'utf8');
     // Terminate the process to avoid confusion caused by incomplete results
    process.exit(1);
  }
}
 // Usage example
const apiUrls = [
  'https://burningvocabulary.com/api/vocabulary/save?token=token1',
  'https://burningvocabulary.com/api/vocabulary/save?token=token2',
  'https://burningvocabulary.com/api/vocabulary/save?token=token3',
];
 handleDataSynchronization(apiUrls);
```

## online text sharing
(-- `Quick Text - Easiest way of online text sharing 📠` [qtext](https://qtext.io/dxc2))
JustPaste.it[ 2 ](https://justpaste.it/), 
Share Text Online[ 3 ](https://sharetext.me/),
Online Text Sharing[ 4 ](https://onlinetextsharing.com/)