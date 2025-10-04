[[Tips for using the Zotero API]]
[[Script - Alfred]]
[[Kimi papers Design.canvas|Kimi papers Design]]
	
## How to Use the Debug Bridge

Instruction: Visit the [debug-bridge section on GitHub at the Zotero-better-bibtex repository](https://github.com/retorquere/zotero-better-bibtex/tree/master/test/fixtures/debug-bridge) to learn more.

This setup allows for executing code remotely on VSCode:

- Download and install the [Code Runner](https://github.com/formulahendry/vscode-code-runner/) extension in VSCode.
- Download and install the [debug-bridge](https://github.com/retorquere/zotero-better-bibtex/releases/tag/debug-bridge) in Zotero.
- In the VSCode Settings under `Code-runner: Custom Command`, enter the command below to set it up for execution.

```shell
cd $dir && curl -s -H "Authorization: Bearer <token>" -H "Content-Type: application/javascript" -X POST --data-binary @$fileName http://127.0.0.1:23119/debug-bridge/execute
```

- To authorize, go to Zotero and open the Config Editor in the Advanced section of settings. Create a new string value named `extensions.zotero.debug-bridge.token` and enter a token value that matches the one used in the VSCode’s custom command URL.

- Now you can modify your JavaScript codes and execute them using the shortcut `ctrl-alt-K`.

## Executing on Other Applications

The script can also be executed as an external application with the following command:

```shell
curl -X POST -H "Content-Type: application/javascript" -H "Authorization: Bearer ddd" --data-binary @/Users/yamlam/Desktop/app.js "http://127.0.0.1:23119/debug-bridge/execute?itemID=1878"
```


## Execute Alfred Remotely


```javascript
async function processViaAlfred(itemID){
// When using Zotero.HTTP.request to trigger an Alfred URL, Might encounter errors such as an uncaught exception with the status "rejected" and a message stating, "Error connecting to server." However, it can succeed without receiving a response from Alfred, possibly because Alfred lacks the callback function at the moment.

  await Zotero.HTTP.request(
    "GET",
    `alfred://runtrigger/AIAssistants/uploadKimi/?argument=${itemID}`
  );

  return true;
}

if (item) {
  const id = item._id;
  processViaAlfred(id);
}

```





## Execute Alfred Remotely

远程执行Alfred中的操作是一个简单直接的过程 当使用 `ZoteroHTTPrequest `方法`Trigger Alfred URL` 时 可能会遇到一些问题 如 `uncaught exception`的错误 过程被拒绝 并伴随着 `Error connecting to server.`  的消息 这个问题的出现是尽管行动已经成功启动而 Alfred没有发送任何回应 可能是因为Alfred当前缺少callback function 的能力。

To achieve remote execution, use this code:

```javascript
async function processViaAlfred(itemID){
  // Attempting to trigger an Alfred URL with Zotero.HTTP.request may lead to errors like an uncaught exception stating, This is even if it proceeds without Alfred's response, probably because Alfred is missing a callback function right now.

  await Zotero.HTTP.request(
    "GET",
    `alfred://runtrigger/AIAssistants/uploadKimi/?argument=${itemID}`
  );

  return true;
}

if (item) {
  const id = item._id;
  processViaAlfred(id);
}

```

By following these instructions, you can remotely trigger actions in Alfred using item IDs, simplifying automation and task management.





