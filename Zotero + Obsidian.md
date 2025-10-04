ResearchRabbit => Zotero => PDF 
Obsidian => Notes => MyProjects
[[Tips for using the Zotero API]]
[[ Script - Obsidian]]


# Obsidian
==Obsidian 删除不再 Link  的素材==, [oz-clear-unused-images-obsidian](https://github.com/ozntel/oz-clear-unused-images-obsidian) [util.ts](https://github.com/ozntel/oz-clear-unused-images-obsidian/blob/master/src/util.ts "util.ts")
[[修复 Obsidian  * to  -]]
[[obsidian Swap line (Alt ^)功能]]
VsCode Mode in Obsidian,  [obsidian-open-vscode](https://github.com/NomarCub/obsidian-open-vscode) 目前比较少人用
Obsidian/SpellCheck,  [Language**Tool** Your writing assistant](https://languagetool.org/ "Check your text quickly and easily. Grammar, punctuation, style and spelling.") ==支持多语言?==，并开源。 


pandoc
```shell
      

pandoc "/Users/yamlam/Library/Mobile Documents/iCloud~md~obsidian/Documents/人类的感官需要“完整的”远程沉浸技术.md" -o "/Users/yamlam/Library/Mobile Documents/iCloud~md~obsidian/Documents/人类的感官需要“完 整的”远程沉浸技术.docx" --bibliography "/Users/yamlam/Library/Mobile Documents/iCloud~md~obsidian/Documents/ZoteroMyLibrary.json" --citeproc --csl "/Users/yamlam/Desktop/apa.csl"

```


# Obsidian && Zotero

参考插件  
- (plugin) BetterBibtex
-  ~~(plugin) Mdnotes ~~
- (plugin) [BibNotes Formatter 介绍](https://forum.obsidian.md/t/bibnotes-formatter-new-plugin-to-export-and-format-annotations-from-zotero-into-obsidian/29920) [github - bibnotes](https://github.com/stefanopagliari/bibnotes)
- Better_Bitex export : `Better CLS.json`  [youtube](https://youtu.be/LaEt9cqkj3I?t=1726),path [youtube](https://youtu.be/LaEt9cqkj3I?t=2253)

### 在Obsidian 通过 Citations 命令粘贴Zotero 中 Info文件的 link
Zotero/Better_Bitex
[obsidian-citation-plugin](https://github.com/hans/obsidian-citation-plugin)
Zotero Collectio(Folder) >> Export Collection >> Format: `Better CLS.json` 
Obsidian/citation_plugin setting >> citation database path >> Path_to_Floder/BetterCLS.json 

### Export Annotation with higtline Color from PDF
Zotero  >> Advanced Configuration

### 发送笔记到Obsidian from Zetore
Zotero/Mdnote [zotero-mdnotes](https://github.com/argenos/zotero-mdnotes)
Requirements:  `Zotero/zotFile`  和 `Zotero/Better_Bitex` 

设置：
* 使用single flie 的模式
* zotero >> mdnotes preferences >> Export Directory `:/导出md的文件夹/xitakey.md` 
* [ ]uncheck Attch flie links to Zotero ,这样zotero不会重复生成md
* Template folder (参考 [Single-File Templates](https://argentinaos.com/zotero-mdnotes/docs/advanced/templates/single-file))
	* [[Mdnotes Default Template]]
	- [[Zotero Note Template]]


注意事项 [Notes and Known Limitations](https://argentinaos.com/zotero-mdnotes/docs/limitations)

#### 将Zotero 文件自动移动到 Obsidian 文件路径（没有必要）

NOTE 由 Obsidian 管理
Zotero 与 Obsidian 通过 Zotero/Mdnote 发送
 `
zotero >> Zotero/zotFile Preference >>
 a. Source folder(eg./download)
 b. Location of files  (eg.move to /home/Document/obsidian/zotero101/pdfs) 
[youtube](https://youtu.be/LaEt9cqkj3I?t=180)


[obsidian-dataview](https://github.com/blacksmithgu/obsidian-dataview)
[obsidian-pandoc](https://github.com/OliverBalfour/obsidian-pandoc)
[obsidian-mind-map](https://github.com/lynchjames/obsidian-mind-map)


# Zetore
 Add-on  [[Tips for using the Zotero API]]
Zetore 批量对 tags 重命名， [tag-wrangler](https://github.com/pjeby/tag-wrangler) ， [注意事项](https://github.com/pjeby/tag-wrangler#case-insensitivity)




### Other
在Obsidian 内写PDF笔记  [obsidian-annotator](https://github.com/elias-sundqvist/obsidian-annotator)

PDF 由 Zotero 管理
购买 Zotero cloud 不能使用其他 Cloud， 因为大部分云服务没有`file lock`  [Data_directory_in_cloud_storage_folder](https://www.zotero.org/support/kb/data_directory_in_cloud_storage_folder "kb:data_directory_in_cloud_storage_folder")，（iCloud 尚未确定）如果必须这样做，你最好保证只用一台电脑 并参考 [Alternative Syncing Solutions](https://www.zotero.org/support/sync#alternative_syncing_solutions "sync")





## Dataviews
```
dataview
TABLE length(file.inlinks) as total
SORT length(file.outlinks) asc
``` 




 