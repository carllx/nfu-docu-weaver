Sample Editor Command
### Zotero Web API Syncing
[v3](https://www.zotero.org/support/dev/web_api/v3/start "dev:web_api:v3:start")
[write_requests](https://www.zotero.org/support/dev/web_api/v3/write_requests "dev:web_api:v3:write_requests")
[basics about Authentication](https://www.zotero.org/support/dev/web_api/v3/basics "dev:web_api:v3:basics")
[Feeds/API](https://www.zotero.org/settings/keys)
Sample Editor Command

Query Tutorial
- [SQLite 语法](https://www.runoob.com/sqlite/sqlite-syntax.html "SQLite 语法")
- [Example SQlite Simple List - stackoverflow ](https://stackoverflow.com/a/58521322)

[[Data Sample]]
`npm i --save-dev @types/sqlite3`
[Sqlite3 增删改查教程 A SQLite Tutorial with Node.js](https://stackabuse.com/a-sqlite-tutorial-with-node-js/)
Reading
```javascript
const sqlite3 = require('sqlite3')

const db = new sqlite3.Database(dbFilePath, (err) => {})
// 
db.get('SELECT ...', [param1, param2], (err, result) => {
  if (err) {
    console.log(err)
  } else {
    // do something with result
  }
})
```

```javascript
await db.query("SELECT COUNT(*) AS count FROM Books", []);
```

```
SELECT [key01,key02,...] FROM dbtable;
```

get and return 方法 https://www.sqlitetutorial.net/sqlite-nodejs/query/
await 方法 https://blog.pagesd.info/2019/10/29/use-sqlite-node-async-await/