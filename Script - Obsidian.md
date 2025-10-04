[MindManager](<file:///Users/yamlam/Documents/obsidian-plugin/Plugin Obsidian.mmap>)
## Dev
[open Project on VScode](vscode://file/Users/yamlam/Documents/obsidian-plugin/)
[Plugin Folder carllx-utili ](<file:///Users/yamlam/Library/Mobile Documents/iCloud~md~obsidian/Documents/.obsidian/plugins/carllx-utili>)
Data [[query Zotero's data]]

## reference
[**Obsidian Plugin Developer Docs**](https://marcus.se.net/obsidian-plugin-docs/)
---or---
[Sample Plugin Obsidian](https://github.com/obsidianmd/obsidian-sample-plugin)
[How to create a plugin for Obsidian](https://www.youtube.com/watch?v=XaES2G3PVpg)
[Obsidian API](https://github.com/obsidianmd/obsidian-api)
[Unofficial API FAQ](https://liamca.in/Obsidian/API+FAQ/index)


Sample Editor Command


```js
// get the selected node of the current active Canvas

var selectedNodes = [...app.workspace.activeLeaf.view.canvas.selection];

var firstNodeSelected = selectedNodes[0];

firstNodeSelected.setColor("#FF5733")

firstNodeSelected.setColor("")

firstNodeSelected.app.metadataCache.getTags()

firstNodeSelected.getData()

var nodeText = firstNodeSelected.text

firstNodeSelected.setText("d")

var activeFile = app.workspace.getActiveFile();

  
// Get frontmatter
// Only works metedate in front of a Tfile type

var file = app.workspace.getActiveFile();

var fmc = app.metadataCache.getFileCache(file)?.frontmatter;
```



```js
app.workspace.activeLeaf.getViewState().type
'canvas'
app.workspace.activeLeaf.getViewState().type
'markdown'
```



```js
var canvasData = app.workspace.activeLeaf.view.canvas.data;

var {nodes , edges} = canvasData // also 'edges'
var groups = nodes.filter( e => e.type === "group" )

```


```js
// get specific nodes(setable) 
var group = app.workspace.activeLeaf.view.canvas.nodes.get('c14bb911eaf424ec') 

// get group's childrens
// IntersectingNodes | ContainingNodes | nodeIndex.search
app.workspace.activeLeaf.view.canvas.getIntersectingNodes(group.getBBox())

app.workspace.activeLeaf.view.canvas.getContainingNodes(group.getBBox())

app.workspace.activeLeaf.view.canvas.nodeIndex.search(group.getBBox())
```