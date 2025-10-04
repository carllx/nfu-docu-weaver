- [ ] insert note to zotero ⏳ 2024-06-18
```js
var chatNote = new Zotero.Item('note');
var chatItem = ZoteroPane_Local.getSelectedItems()[0];
var text = '## 支持\n\n### 你'
var parser = new DOMParser();
var doc = parser.parseFromString(text, 'text/html');
text = doc.body.innerHTML;
chatNote.setNote(text);
chatNote.parentID = chatItem.id
chatNote.libraryID = chatItem.libraryID

chatNote.save().then(() => {
    console.log('Note created successfully');
}).catch((error) => {
    console.error('Error creating note:', error);
});

```

[官方 javascript_api](https://www.zotero.org/support/dev/client_coding/javascript_api "dev:client_coding:javascript_api")

my [[app-obsdian-annotations]]
[ Shell commands - Example: Launch external applications](https://publish.obsidian.md/shellcommands/Example+shell+commands/Launch+external+applications)



### Debug
Zotero Debugger， 构建客户端  [building_the_standalone_client](https://www.zotero.org/support/dev/client_coding/building_the_standalone_client "dev:client_coding:building_the_standalone_client")， 通过Firefox 60 ESR DevTools ，Terminal 执行debug 监控命令 [debug_output](https://www.zotero.org/support/debug_output "debug_output")

## Build Custom Addon
参考官方 Hello xpi [zotero-hello-world](https://github.com/zotero/zotero-hello-world)

## Get md Annotations from Zetore
[[Annotations Sample.json]]
```javascript 

let obj = []
const _getCurrentAttachment =  ()=> {
	const reader = Zotero.Reader.getByTabID(Zotero_Tabs.selectedID);
	if (reader) {
		return Zotero.Items.get(reader.itemID);
	}else{
	    alert("no reader")
	}
}
const attachment = _getCurrentAttachment();
const Annotations = attachment.getAnnotations()
for (let index = 0; index < Annotations.length; index++) {
    const a = Annotations[index];
    
    const annotationPostion = JSON.parse(a["annotationPosition"])
    const pageIndex = annotationPostion["pageIndex"]
    const parentItem = a.parentItem.key // Bug,居然访问到parentItem([object]) 而不是字符格式的key（"parentItem": "QDEEJN55",）
    // alert(JSON.stringify(parentItem))
    const url = `[(p.${pageIndex})](zotero://open-pdf/library/items/${parentItem}?page=${pageIndex}&annotation=${a['key']})`
    const annotationComment = a.annotationComment === null?"":a.annotationComment
    const md = `- ${annotationComment} ${url} \`\`\`${a["annotationText"]}\`\`\``
    obj.push(md)
}
let result = ''
for (let index = 0; index < obj.length; index++) {
    const o = obj[index];
    result+= o+'\n\n'
}


	// Send content to Clipboard. 
	const clipboardHelper = Components.classes["@mozilla.org/widget/clipboardhelper;1"].getService(Components.interfaces.nsIClipboardHelper);
	clipboardHelper.copyString(result);
```



```js
// _id: 1878
// _key: "F6W7R3KA"
// _displayTitle: "A comparative analysis of two structural equation models: LISREL and PLS applied to market data"
var itemID = 1878
Zotero.Items.get(itemID)
```




备份所有
```javascript
// var ZoteroPane = Zotero.getActiveZoteroPane();
// var selectedItems = ZoteroPane.getSelectedItems();
// var item = selectedItems[0];
// var noteIDs = item.getNotes();
// alert(noteIDs)

function _getSelectedItems() {
		var allSelectedItems = ZoteroPane_Local.getSelectedItems();
		var selectedItems = [];
		while(selectedItems.length < 50 && allSelectedItems.length) {
			var item = allSelectedItems.shift();
			if(!item.isNote()) selectedItems.push(item);
		}
		return selectedItems;
	}
// var selectedobj = noteEditor.item.toJSON()
// selectedobj = _getSelectedItems()
// alert(JSON.stringify(selectedobj) )


//noteEditor.item.getNoteTitle()
var noteEditor = document.getElementById('zotero-note-editor');
// alert(noteEditor.item.getNote())



// var obj = noteEditor.item.toJSON()
// alert(JSON.stringify(obj) )

// Zotero.Item.prototype.getLocalFileURL
//var Abox =Zotero.AnnotationBox//annotation.annotationPosition


// var selectedobj = _getSelectedItems()[0]
// var l = Zotero.URI.getItemURI(selectedobj)
// alert(l)//http://zotero.org/users/local/Y7dls9FR/items/2QMTRNLH

// var a = async function(){
//     var q = await Zotero.DB.valueQueryAsync(
// 	    "SELECT itemTypeID FROM itemTypes WHERE typeName='annotation'"
//     )
//     alert(q)
// } 

// a()


// var l = Zotero.Attachments
// alert(JSON.stringify(l) )//{"LINK_MODE_IMPORTED_FILE":0,"LINK_MODE_IMPORTED_URL":1,"LINK_MODE_LINKED_FILE":2,"LINK_MODE_LINKED_URL":3,"LINK_MODE_EMBEDDED_IMAGE":4,"BASE_PATH_PLACEHOLDER":"attachments:"}







// reader 右边的note Editor
let noteEditor = window.ZoteroContextPane && window.ZoteroContextPane.getActiveEditor();
let editorInstance = noteEditor.getCurrentInstance();
alert(JSON.stringify(editorInstance._item ))

// Library 已经打开的（actived ） noteeditor
var obj = noteEditor.item.toJSON()
alert(JSON.stringify(obj))

// Library 中list 选中note 的ID
var zp = Zotero.getActiveZoteroPane();
var selectedItems = zp.getSelectedItems();
var item = selectedItems[0];
var noteIDs = item.getNotes();
alert(JSON.stringify(noteIDs))


// check files lastModification
const FilePicker = require("zotero/filePicker").default;
const fp = new FilePicker();
const check = async()=>{
    var outputFile = "/Users/yamlam/Library/Mobile\ Documents/iCloud\~md\~obsidian/Documents/zotero_mdnotes/2020hallDesignImmersionTransdisciplinary.md"
    var fileExists = await OS.File.exists(outputFile);
    if(fileExists){
        var lastModified = (await OS.File.stat(outputFile)).lastModificationDate.getTime() 
        Zotero.debug(lastModified)
    }else{
        alert("noExists" )
    }

    // var file = await OS.File.read(outputFile, {})
    // alert(JSON.stringify(lastModified))
    
} 
check()


```



 Here are some additional tips for using the Zotero API to extract markdown note references, based on the provided script:

```
zotero://select/library/items/{_key}
```
### Get the selected item's notes and convert to markdown links:

```js
var item = ZoteroPane_Local.getSelectedItems()[0]; 
var noteIDs = item.getNotes();

for (noteID of noteIDs) {
  let note = Zotero.Items.get(noteID);
  let title = note.getNoteTitle();
  let key = note._key;
  
  // do something with the markdown link
  let link_md = `[${title}](zotero://select/items/${key})`;

  console.log(link_md)
} 
```


```js
let item = selectedItems[0];
let childItems = item.getAttachments(); 

for (let childItem of childItems) {
  if (childItem.isNote()) {
    // handle note
  } else {
    // handle attachment
  }
}
```

- Check if a file has been modified since the last sync:

```js
let file = Zotero.File.pathToFile(filePath);
let syncTime = Zotero.Sync.Server.lastSyncTime;

if (file.exists() && file.mtime > syncTime) {
  // file has changed since last sync
}
```

- Get the text content of a note:

```js
let note = Zotero.Items.get(noteID);
let noteText = note.getNote();
```







 ```javascript
 
'use strict';
// Components.utils.import('resource://zotero/config.js')
const fs = require('fs-extra');
const writeFiles = async ()=>{
    var encoder = new TextEncoder();
    var data = encoder.encode("大地方/n");
    let pfh = await OS.File.open("/Users/yamlam/Desktop/n1.txt", {write: true});
    await pfh.write(data);
    await pfh.close(); 
}
writeFiles()
// obsidian://open?vault=Documents&file=zotero_mdnotes%2F2020hallDesignImmersionTransdisciplinary-zotero
// let encodedFileName = Zotero.File.encodeFilePath(fileName);
var path_obsidian = Zotero.Prefs.get(`extensions.mdnotes.${"directory"}`, true)//"/Users/yamlam/Library/Mobile Documents/iCloud~md~obsidian/Documents/zotero_mdnotes"

// if (window.confirm("Do you really want to leave?")) {
//   Zotero.launchURL("obsidian://open?vault=Documents&file=zotero_mdnotes%2F2020hallDesignImmersionTransdisciplinary-zotero", "Thanks for Visiting!");
// }
var win = openDialog("http://example.tld/zzz.xul", "dlg", "", "pizza", 6.98);

```

pdf
```javascript

var _iframeWindow = document.getElementsByTagName("browser")[1].contentWindow
var res = _iframeWindow.eval('PDFViewerApplication.pdfViewer.findController.executeCommand("find", { caseSensitive: false, findPrevious: undefined,highlightAll: true, phraseSearch: true, query: "why"})')
var pg = _iframeWindow.eval('PDFViewerApplication.pdfDocument.getPage(2).then(pdfPage => { pdfPage.getTextContent().then(data => { alert(JSON.stringify(data));return data }); });')
alert(JSON.stringify(pg))
```




预设
文件位置: 
```
/Users/yamlam/Library/Application Support/Zotero/Profiles/udm8rc04.default/prefs.js
```

```javascript
// Zotero.Prefs.set("Knowledge4Zotero.syncNoteIds", "1287,1164")
// Zotero.Prefs.set("Knowledge4Zotero.mainKnowledgeID", 1164)
// Zotero.Prefs.set("Knowledge4Zotero.syncDetail-1164", `{"path":"/Users/yamlam/Documents/obsdiannote/zoteropapers","filename":"0.MainNote-HL8SQUD7.md","itemID":1164,"md5":"fa61b398fa9eeec9c8b7337c930cab05","noteMd5":"75531408808dd27c3f0a22eb801265d6","lastsync":1706888496405}`)
// Zotero.Prefs.set("Knowledge4Zotero.workspace.tab.active", false)

Zotero.user_pref("Knowledge4Zotero.syncNoteIds")
```



 Here are some tips for working with the Zotero API extracted from the markdown note:

- Get selected items in the Zotero pane:

```js
var selectedItems = ZoteroPane.getSelectedItems();
```

- Get a note from an item: 

```js
var noteIDs = item.getNotes();
```

- Get the note content from the note editor:

```js  
var noteEditor = document.getElementById('zotero-note-editor');
var content = noteEditor.item.getNote();
```

- Get item data as JSON:

```js
var obj = item.toJSON();
```

- Check if a file exists: 

```js
var fileExists = await OS.File.exists(path);
```

- Open a file in Obsidian:

```js
Zotero.launchURL("obsidian://open", fileName); 
```

- Access the PDF viewer in Zotero:

```js
var pdfWindow = document.getElementsByTagName("browser")[1].contentWindow;
```

Let me know if you need any clarification or have additional questions!




 Here is the English translation:

var ZoteroPane = Zotero.getActiveZoteroPane();
var selectedItems = ZoteroPane.getSelectedItems(); 
var item = selectedItems[0];
var noteIDs = item.getNotes();


 Here are some tips for using the Zotero API extracted from the markdown note:

- Use `Zotero.getActiveZoteroPane()` to get the active Zotero pane object.

- Call `getSelectedItems()` on the Zotero pane to get the currently selected items.

- Access the first selected item using `selectedItems[0]`.

- Call `getNotes()` on the selected item to get its note IDs.

- To get the notes themselves, loop through the note IDs and use `Zotero.Items.get()` to retrieve each note.

- You can also get the selected items directly using `ZoteroPane.getSelectedItems()` rather than going through the pane.

- The key steps are getting the pane/selected items, getting the note IDs from the item, and retrieving the actual note objects.

var item = Zotero.selectedItems[0]; var noteIDs = item.getNotes(); for (let noteID of noteIDs) { let note = Zotero.Items.get(noteID); let title = note.getNoteTitle(); let link = `[${title}](zotero://select/items/${noteID})`; // do something with the markdown link console.log(link) }  



 This error occurs because you are re-declaring the variable 'item' with let inside the for loop, when it has already been declared outside the loop. 

To fix it, you can remove the 'let' from inside the for loop:

```js
var item = Zotero.selectedItems[0]; 
var noteIDs = item.getNotes();

for (noteID of noteIDs) {
  let note = Zotero.Items.get(noteID);
  let title = note.getNoteTitle();
  let link = `[${title}](zotero://select/items/${noteID})`;

  // do something with the markdown link
  console.log(link)
}
```

The let outside the loop declares the variable in that outer block scope. Inside the loop you can just reference noteID without re-declaring it, since it will inherit the scope from outside the block.


```js
// (md has been Inited in ActionTag plugin)
// Services.scriptloader.loadSubScript("https://cdn.jsdelivr.net/npm/markdown-it@14.1.0/dist/markdown-it.min.js");
// var md = markdownit()
var result = md.render('# markdown-it rulezz!');

var allSelectedItems = ZoteroPane_Local.getSelectedItems();
var parentKey = allSelectedItems[0].key

// ZoteroPane_Local.getSelectedLibraryID()
var item = new Zotero.Item('note');
item.setNote(result);
item.parentKey = parentKey;
item.saveTx()



```




## Zotero Translators 脚本修改指南
如何自定义 translators  分别 connector 作用是什么?
(-- `connector_preferences [Zotero Documentation]` [zotero](https://www.zotero.org/support/connector_preferences#proxies))
(-- `connector [Zotero Documentation]` [zotero](https://www.zotero.org/support/connector))
(-- `adding_items_to_zotero [Zotero Documentation]` [zotero](https://www.zotero.org/support/adding_items_to_zotero#web_translators))
(-- `translators [Zotero Documentation]` [zotero](https://www.zotero.org/support/translators))
(-- `zotero/translators: Zotero Translators` [github](https://github.com/zotero/translators))
(-- `translators/CNKI.js at master · zotero/translators` [github](https://github.com/zotero/translators/blob/master/CNKI.js))

修改translators 脚本, 例如修改CNKI.js -> /Users/yamlam/Zotero/translators/CNKI_wxc.js

元数据
```json
{
	"translatorID": "5c95b67b-41c5-4f55-b71a-48d5d718kns8",
	"label": "CNKI_kns8",
	"creator": "carllx",
	"target": "^http://(?:[0-9]{1,3}\\.){3}[0-9]{1,3}(?::[0-9]{1,5})?/kns8/.*", // 修改处, 网址: http://122.51.150.164:4455/kns8/defaultresult/index
	"minVersion": "1.0",
	"maxVersion": "",
	"priority": 100,
	"inRepository": true,
	"translatorType": 4,
	"browserSupport": "gcsibv",
	"lastUpdated": "2024-04-25 05:30:22"
}
```

scrape function
```js

async function scrape(id, doc, extraData) {
	
	var { dbname, filename } = id;
	var postData = `FileName=${dbname}!${filename}!1!0&DisplayMode=Refworks&OrderParam=0&OrderType=desc&SelectField=&PageIndex=1&PageSize=20&language=&uniplatform=NZKPT&random=0.30585230060685187`;
	// var refer = `https://kns.cnki.net/dm/manage/export.html?filename=${dbname}!${filename}!1!0&displaymode=NEW&uniplatform=NZKPT`;
	var refer = `${doc.location.origin}/dm/manage/export.html?filename=${dbname}!${filename}!1!0&displaymode=NEW&uniplatform=NZKPT`;
	var reftext = await request(
		// 'https://kns.cnki.net/dm/api/ShowExport',
		`${doc.location.origin}/dm/api/ShowExport`,
		{
			method: "POST",
			body: postData,
			headers: {
				Referer: refer
			}
		}
	);
	// ...
}
```




学习数字技术的人更应该提高人文素养，否则会对技术造成破坏