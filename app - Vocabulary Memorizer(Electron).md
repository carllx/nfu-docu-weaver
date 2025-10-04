
[[dev]]   

## Description:
It is a Electron app designed to help users memorize foreign language words. With this app, users can mark words they need to remember while browsing web pages. The app stores the marked words as data in the user's Google Sheets, serving as a vocabulary library. Based on this vocabulary library, we provide two memory methods for user: "scheduled memory" and "fragmented memory."

Fragmented memory utilizes the database to highlight words for users during future web browsing, allowing them to consolidate encountered words at any time without burden.

Scheduled memory synchronizes the marked words with the Anki application through AnkiConnect, providing users with an immersive memory environment.


## boilerplate
[[Electron-react-boilerplate]]



## Detect app  if running

[PM2](https://github.com/Unitech/pm2) is a production process manager for Node.js applications with a built-in load balancer that allows you to keep applications alive forever, to reload them without downtime and to facilitate common system admin tasks.

```javascript
import { app } from "electron";
const { exec } = require('child_process');
function checkIfAppOpened() {
  // Get the list of all running applications.
	  exec('tasklist', (err, stdout, stderr) => {
	  if (err) {
	    console.error(err);
	    return;
	  }
	
	  console.log(stdout);
	});

  // Check if the Anki app is in the list of running applications.
  const isAnkiOpened = runningApps.find(app => app.name === "Anki");

  // If Anki is not opened, open it.
  if (!isAnkiOpened) {
    app.open("Anki");
  }
}

// Register a listener for the ready event.
app.on("ready", checkIfAppOpened);

```

- The `import` statement imports the `app` module from the Electron API.
- The `checkIfAppOpened` function checks if the Anki app is opened.
- The `getRunningApplications` method from the `app` module gets the list of all running applications.
- The `find` method from the `Array` class finds the first element in the array that matches the given criteria.
- The `if` statement checks if the Anki app is in the list of running applications.
- The `app.open` method opens the given application.
- The `on` method from the `app` module registers a listener for the ready event.
- The `ready` event is emitted when Electron has finished initializing.


## AnkiConnect

## Database
[[Google Sheets as a Database]]


## Hand app in Mac using Node.js

### check if a specific app is open
Here is a code snippet that you can use to check if a specific app is open on Mac using Node.js:
```javascript
const { exec } = require('child_process');
const appName = 'Safari'; // Replace with the name of the app you want to check
exec(`ps aux | grep ${appName} | grep -v grep`, (err, stdout, stderr) => {
  if (stdout) {
    console.log(`${appName} is running`);
  } else {
    console.log(`${appName} is not running`);
  }
});
```
This code uses the `exec` function from the `child_process` module to execute a shell command that checks if the specified app is running. The `ps aux` command lists all running processes, and the `grep` command filters the output to only show processes that match the specified app name. The second `grep` command filters out the `grep` process itself, which would otherwise show up in the output. If the output contains any text, it means that the app is running. Otherwise, it means that the app is not running¹.

Source: Conversation with Bing, 6/29/2023
(1) node.js how to check a process is running by the process name?. https://stackoverflow.com/questions/38033127/node-js-how-to-check-a-process-is-running-by-the-process-name.
(2) How to check if Node.js is installed on Mac? – ITExpertly.com. https://itexpertly.com/how-to-check-if-nodejs-is-installed-on-mac/.
(3) How to tell if node.js is installed or not - Stack Overflow. https://stackoverflow.com/questions/10475651/how-to-tell-if-node-js-is-installed-or-not.
(4) Set up application monitoring for your Node JS app in 20 mins with open .... https://signoz.io/blog/nodejs-opensource-application-monitoring/.


###  open an app in Mac using Node.js

To open an app in Mac using Node.js, you can use the `child_process` module to execute a shell command that opens the app. Here is an example code snippet that you can use:
```javascript
const { exec } = require('child_process');
const appName = 'Safari'; // Replace with the name of the app you want to open
exec(`open -a "${appName}"`, (err, stdout, stderr) => {
  if (err) {
    console.error(err);
    return;
  }
  console.log(`${appName} opened successfully`);
});
```
This code uses the `exec` function to execute the `open` command with the `-a` option, which opens the specified app. The name of the app is passed as a string variable, which you can replace with the name of the app you want to open. If the app is opened successfully, the code will log a success message to the console¹.

Source: Conversation with Bing, 6/29/2023
(1) How to Run a Node.js Application on a Mac | Webucator. https://www.webucator.com/article/how-to-run-a-nodejs-application-on-a-mac/.
(2) node.js - Node - how to run app.js? - Stack Overflow. https://stackoverflow.com/questions/22137564/node-how-to-run-app-js.
(3) How to make a node.js application run permanently?. https://stackoverflow.com/questions/12701259/how-to-make-a-node-js-application-run-permanently.