Tampermonkey 函数 检测元素直到该元，直到该元素加载成功。

```javascript
function waitForKeyElement(selectorTxt, actionFunction, iframeSelector) {

    return new Promise(resolve => {

        // Find the target node
        let targetNode;
        if (iframeSelector) {
            targetNode = document.querySelector(iframeSelector).contentDocument.querySelector(selectorTxt);
        } else {
            targetNode = document.querySelector(selectorTxt);
        }

        // If found, invoke action function
        if(targetNode) {
            actionFunction(targetNode);
            resolve();
            return;
        }

        // If not found, set an observer to run action function once loaded
        const observer = new MutationObserver(mutations => {
            if(document.querySelector(selectorTxt)) {
                actionFunction(document.querySelector(selectorTxt));
                observer.disconnect();
                resolve();
            }
        });

        observer.observe(document.body, {
            childList: true,
            subtree: true
        });

    });

}

(function() {
    'use strict';
    waitForKeyElement("#USE_CHAT_GPT_AI_ROOT", (element) => {
        // Element loaded, do something
        console.log("Element loaded, do something: 冲冲冲惆怅长岑长")
    }).then(() => {
        // Promise resolved, key element detected
        console.log("romise resolved, key element detected冲冲冲惆怅长岑长")
    });

})();
```