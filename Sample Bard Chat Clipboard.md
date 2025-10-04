## No Sources
``````
To show the devtools.panels in Chrome DevTools, you can use the following steps:↳

1. Open Chrome DevTools by pressing `Ctrl`+`Shift`+`I` on Windows or `Cmd`+`Option`+`I` on macOS.
2. Click on the **Elements** tab.
3. In the **Elements** tab, click on the **three dots** menu in the top right corner and select **More Tools**.
4. In the **More Tools** menu, select **Developer Tools**.
5. In the **Developer Tools** window, click on the **Panels** tab.
6. In the **Panels** tab, you will see a list of all the panels that have been created by extensions.
7. To show a panel, click on the name of the panel.

Here is an example of how to show the panel created by the `chrome.devtools.panels.create()` method:↳

Code snippet

```
// Create a new panel
chrome.devtools.panels.create(
  'Dev Tools from chrome-extension-boilerplate-react',
  'icon-34.png',
  'panel.html'
);

// Show the panel
chrome.devtools.panels.show('Dev Tools from chrome-extension-boilerplate-react');
```

I hope this helps! Let me know if you have any other questions.↳

``````


## with Sources
``````
To get content from `item.getType('text/html')`, you can use the following code:↳

Code snippet

```
async function pasteHtml() {
  try {
    const permission = await navigator.permissions.query({
      name: "clipboard-read",
    });
    if (permission.state === "denied") {
      throw new Error("Not allowed to read clipboard.");
    }
    const clipboardContents = await navigator.clipboard.read();
    for (const item of clipboardContents) {
      if (item.types.includes("text/html")) {
        const html = await item.getType("text/html");
        console.log(html);
      } else {
        throw new Error("Clipboard contains non-HTML data.");
      }
    }
  } catch (error) {
    console.error(error.message);
  }
}
```

This code will first check if the browser supports the `Clipboard` API. If the browser does support the `Clipboard` API, the code will call the `read()` method on the `Clipboard` object to get an array of `ClipboardItem` objects. The code will then iterate through the `ClipboardItem` objects and check if the `types` property of the `ClipboardItem` object includes the MIME type "text/html". If the `types` property of the `ClipboardItem` object includes the MIME type "text/html", the code will call the `getType()` method on the `ClipboardItem` object to get the data stored in the `ClipboardItem` object as a string. The code will then log the string to the console. If the `types` property of the `ClipboardItem` object does not include the MIME type "text/html", the code will throw an error.↳

Note that the `getType()` method returns a Promise. This means that the code will not continue executing until the `getType()` method has finished executing. If you need to get the content from the `ClipboardItem` object synchronously, you can use the following code:↳

Code snippet

```
async function pasteHtml() {
  try {
    const permission = await navigator.permissions.query({
      name: "clipboard-read",
    });
    if (permission.state === "denied") {
      throw new Error("Not allowed to read clipboard.");
    }
    const clipboardContents = await navigator.clipboard.read();
    for (const item of clipboardContents) {
      if (item.types.includes("text/html")) {
        const html = await item.getType("text/html").catch(e => {
          console.log(e);
          return null;
        });
        if (html) {
          console.log(html);
        }
      } else {
        throw new Error("Clipboard contains non-HTML data.");
      }
    }
  } catch (error) {
    console.error(error.message);
  }
}
```

This code will first check if the browser supports the `Clipboard` API. If the browser does support the `Clipboard` API, the code will call the `read()` method on the `Clipboard` object to get an array of `ClipboardItem` objects. The code will then iterate through the `ClipboardItem` objects and check if the `types` property of the `ClipboardItem` object includes the MIME type "text/html". If the `types` property of the `ClipboardItem` object includes the MIME type "text/html", the code will call the `getType()` method on the `ClipboardItem` object to get the data stored in the `ClipboardItem` object as a string. The code will then log the string to the console. If the `types` property of the `ClipboardItem` object does not include the MIME type "text/html", the code will throw an error.↳

The `catch()` block is used to handle errors that may occur when calling the `getType()` method. The `catch()` block will log the error message to the console and return `null`.↳
``````