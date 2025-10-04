
use the Google Sheets API to read, write, and update data in a Google spreadsheet.
每个Client 身边都有一个数据库, 因此使用Google API, 开发者不需要维护数据库的成本.

## Warpper
(-- `theoephraim/node-google-spreadsheet: Google Sheets API (v4) wrapper for Node.js` [github](https://github.com/theoephraim/node-google-spreadsheet))
(-- `Document Overview` [github](https://theoephraim.github.io/node-google-spreadsheet/#/?id=working-with-rows))


## Landing on cell in Google Sheets
Access a specific cell in a Google Sheets document using a URL. The URL will have the following format:

```bash
https://docs.google.com/spreadsheets/d/[spreadsheet_id]/edit#gid=[sheet_id]/range=[cell_address]
```

## Authenticating with Google Sheets API

### Service account.

Nodejs as server reference: 
(-- `Getting Started with Google Sheets API in Node.js | Engineering Education (EngEd) Program | Section` [section](https://www.section.io/engineering-education/google-sheets-api-in-nodejs/))
(-- `How to Use Google Sheets API with Nodejs | HackerNoon` [hackernoon](https://hackernoon.com/how-to-use-google-sheets-api-with-nodejs-cz3v316f))

### REST API Integration
(-- `Setting Up Google Sheets REST API Integration Simplified 101` [hevodata](https://hevodata.com/learn/google-sheets-rest-api-integration/))

### OAuth client.
Data belonging to a Google user, reference: 
(-- `Node.js - Using Google Sheets API with OAuth 2 - Woolha` [woolha](https://www.woolha.com/tutorials/node-js-using-google-sheets-api-with-oauth-2), same as  [morioh](https://morioh.com/p/1313d7785668))
(-- `Show me code snippet for Electron development, steps to authenticate the Google Sheets API , and how create a new sheet as database if user when the Electron app is launched first time.` [perplexity](https://www.perplexity.ai/search/120a4653-de0d-45b5-9f48-65e196699982))

Offical guide(Google Workspace): (-- `Node.js quickstart  |  Google Sheets  |  Google for Developers` [google](https://developers.google.com/sheets/api/quickstart/nodejs))


To authenticate with Google Sheets API for Electron development, you can follow these steps:

1. Go to the [Google Cloud Console](https://console.cloud.google.com/welcome?project=app-vocabulary-memorizer) and select or [create a project](https://console.cloud.google.com/projectcreate).
2. In [API Libray](https://console.cloud.google.com/apis/library), Enable the Google Sheets API for the project.
3. Create credentials for the API by selecting "Create credentials" and then "OAuth client ID".
4. Choose "Desktop app" as the application type and enter a name for the OAuth client ID.
5. Download the client secret JSON file and save it in your Electron application directory.
6. Install the [Google API client library for Node.js](https://github.com/googleapis/google-api-nodejs-client) using npm. by `npm install googleapis`
7. Use the client secret JSON file to authenticate the application using the Google API client library.

There are several tutorials available that provide step-by-step instructions on how to authenticate an Electron application with the Google Sheets API[1][2][3]. Once you have authenticated your Electron application with the Google Sheets API, you can use it to read, write, and update data in a Google spreadsheet.

Here is an example code snippet that shows how to authenticate an Electron application with the Google Sheets API using the Google API client library for Node.js:

```javascript
const { google } = require('googleapis');

const credentials = require('./client_secret.json');

const auth = new google.auth.OAuth2(
  credentials.installed.client_id,
  credentials.installed.client_secret,
  credentials.installed.redirect_uris[0]
);

const scopes = [
  'https://www.googleapis.com/auth/spreadsheets',
  'https://www.googleapis.com/auth/drive'
];

const url = auth.generateAuthUrl({
  access_type: 'offline',
  scope: scopes
});

console.log(`Authorize this app by visiting this URL: ${url}`);

auth.getToken(code, (err, token) => {
  if (err) return console.error('Error retrieving access token', err);

  auth.setCredentials(token);

  console.log('Successfully authenticated with Google Sheets API');
});
```

This code snippet uses the `google-auth-library` Node.js module to authenticate the application with the Google Sheets API. The `client_secret.json` file contains the OAuth client ID and secret, and the `scopes` variable specifies the permissions that the application requires. The `generateAuthUrl` method generates a URL that the user can visit to authorize the application, and the `getToken` method retrieves an access token that can be used to make requests to the Google Sheets API[2].

Citations:
[1] https://github.com/subhendukundu/Electron-GoogleSheet
[2] https://developers.google.com/sheets/api/quickstart/nodejs
[3] https://www.section.io/engineering-education/google-sheets-api-in-nodejs/

By Perplexity at https://www.perplexity.ai/search/4de90469-09ff-46bd-a332-46ecec836e7e








## Electron 
Integrate Sheets API into an Electron using Node.js.  Here are the general steps to use Google Sheets as a database in Electron development:

1. Enable the Google Sheets API and obtain the API credentials.
2. Install the Google API client library for Node.js using npm.
3. Authenticate the application using the API credentials.
4. Use the Google Sheets API to read, write, and update data in a Google spreadsheet.

There are several tutorials available that provide step-by-step instructions on how to use the Google Sheets API in Node.js applications  ([section](https://www.section.io/engineering-education/google-sheets-api-in-nodejs/)) [1][2][3]. Once you have integrated the Google Sheets API into your Electron application, you can use it to read, write, and update data in a Google spreadsheet as if it were a database.

Here is an example Electron application that uses the Google Sheets API to read data from a Google spreadsheet:

```javascript
const { google } = require('googleapis');
const electron = require('electron');
const path = require('path');
const url = require('url');

const { app, BrowserWindow } = electron;

const credentials = require('./credentials.json');
const spreadsheetId = 'your-spreadsheet-id';
const range = 'Sheet1!A1:B2';

let mainWindow;

function createWindow() {
  mainWindow = new BrowserWindow({ width: 800, height: 600 });

  mainWindow.loadURL(url.format({
    pathname: path.join(__dirname, 'index.html'),
    protocol: 'file:',
    slashes: true
  }));

  mainWindow.on('closed', function () {
    mainWindow = null;
  });
}

app.on('ready', () => {
  createWindow();

  const auth = new google.auth.GoogleAuth({
    credentials,
    scopes: ['https://www.googleapis.com/auth/spreadsheets.readonly']
  });

  const sheets = google.sheets({ version: 'v4', auth });

  sheets.spreadsheets.values.get({
    spreadsheetId,
    range
  }, (err, res) => {
    if (err) return console.log(`The API returned an error: ${err}`);

    const rows = res.data.values;
    console.log(`Data: ${JSON.stringify(rows)}`);
  });
});

app.on('window-all-closed', function () {
  if (process.platform !== 'darwin') {
    app.quit();
  }
});

app.on('activate', function () {
  if (mainWindow === null) {
    createWindow();
  }
});
```

This application loads an HTML file in a BrowserWindow and uses the Google Sheets API to read data from a Google spreadsheet. The `credentials.json` file contains the API credentials, and the `spreadsheetId` and `range` variables specify the spreadsheet and range of cells to read. The `google-auth-library` and `googleapis` Node.js modules are used to authenticate the application and interact with the Google Sheets API[1][2].

Citations:
[1] https://burakkanber.com/blog/google-sheets-as-a-database/
[2] https://www.section.io/engineering-education/google-sheets-api-in-nodejs/
[3] https://blog.coupler.io/how-to-use-google-sheets-as-database/

By Perplexity at https://www.perplexity.ai/search/24f18e01-8cb5-4a8c-9933-78455242d87f

## Extension(Permission rejection)

## Method Helper
(-- `Call this method on live data and see the result.` [google](https://developers.google.com/sheets/api/reference/rest/v4/spreadsheets.values/update?apix_params=%7B%22spreadsheetId%22%3A%221GQP1w1I9_j7slOBdBupVcI4QEEcu3TLeZGmEUADfqTU%22%2C%22range%22%3A%22IELTS!A79%3AE%22%2C%22includeValuesInResponse%22%3Atrue%2C%22responseDateTimeRenderOption%22%3A%22SERIAL_NUMBER%22%2C%22responseValueRenderOption%22%3A%22UNFORMATTED_VALUE%22%2C%22valueInputOption%22%3A%22USER_ENTERED%22%2C%22resource%22%3A%7B%7D%7D&apix=true))
For help, check the  [APIs Explorer documentation](https://developers.google.com/explorer-help/).

## create  sheets

Show me nodejs code sinppet create a new Google Sheets document via google sheets API new Google Sheets document with a sheet containing the specified headers and data. 
Add a sheet with the specified headers:'text','url','timestamp','sentenceText','lemma' , 
and data extracted from the given JSON: 

```json
[
{
            "text": "resources",
            "url": "https://www.perplexity.ai/search/564042d5-f765-4ac0-a894-ae584ad4227c?s=u",
            "timestamp": 1685515195372,
            "extend": {
                "sentenceText": "For your project of developing a Chrome application for language learners, you can use the following libraries and resources:",
                "sentenceWordStanza": {
                    "lemma": "resource"
                }
            }
        },
        ...
]
```


## Filter data

To filter data using the Google Sheets API, you can use the `DataFilter` [reference documentation](https://developers.google.com/sheets/api/reference/rest/v4/DataFilter). 
The `BasicFilter` for a spreadsheet is the default filter that's applied whenever anyone views the spreadsheet. A spreadsheet can have one basic filter per sheet. You can turn off the basic filter by clearing it. To filter data returned in a Google Sheets API request, you can use the `DataFilter` reference documentation. 
The `DataFilter` only filters by developer metadata and by ranges but not by values. To achieve this, you will have to get a specific range of values and loop through them, returning only the matched values. You can copy the code from the Quickstart which returns values from a Sheet. Change the Sheet Id and the Range to fit your needs. Also, once it finds data, you should use an if condition. [1][2]

Citations:
[1] https://developers.google.com/sheets/api/guides/filters
[2] https://stackoverflow.com/questions/62789700/google-sheets-api-read-values-by-filter

By Perplexity at https://www.perplexity.ai/search/0e049b7f-1383-425e-bcbc-46925a474cf2

### The different types of filters
The Google Sheets API provides different types of filters that allow you to sort and filter the data that you see when you view a spreadsheet. Here are the different types of filters available in Google Sheets API:

- Basic filter: The BasicFilter for a spreadsheet is the default filter that's applied whenever anyone views the spreadsheet. A spreadsheet can have one basic filter per sheet. You can turn off the basic filter by clearing it. You can use the basic filter to hide data that matches a certain value, for example, hide all issues with status "closed."
- Filter views: With filter views, you can save different named filters and switch between them whenever you like. You can specify the filter view you want to apply by providing the spreadsheetId and filterViewId in the spreadsheet URL. To do so, use the filterViewId returned in the response when you create the filter view.
- Data filter: The `DataFilter` reference documentation allows you to filter data returned in a Google Sheets API request. The `DataFilter` only filters by developer metadata and by ranges but not by values. To achieve this, you will have to get a specific range of values and loop through them, returning only the matched values.

You can use these filters to sort and filter the data shown in a spreadsheet. Filters don't change the data values in your spreadsheet. You can use filters to temporarily hide or sort information. [1][2]

Citations:
[1] https://developers.google.com/sheets/api/reference/rest/v4/DataFilter
[2] https://developers.google.com/sheets/api/guides/filters

By Perplexity at https://www.perplexity.ai/search/9aeeba7b-bad4-4e62-be3d-935a54bfe092