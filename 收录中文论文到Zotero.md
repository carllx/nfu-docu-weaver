进入知网 CNKI (非魔力方) 论文 `单页面` 
Chrome > Save to Zotero 
- 需要安装插件安装  --`|l0o0/translators_CN: Zotero translator中文网页抓取插件` [github](https://github.com/l0o0/translators_CN)
- 

## CAJ to PDF
![](https://i.imgur.com/j3a9aeE.png)
--`|【纯干货】告别CAJ，带目录转为PDF不香吗？` [bilibili](https://www.bilibili.com/video/BV1tt4y1g7eT/?t=150)


- 批量转换成 PDF  --`|sainnhe/caj2pdf-qt: CAJ 转 PDF 转换器（GUI 版本）` [github](https://github.com/sainnhe/caj2pdf-qt)
- PDF 注入目录(若无) 
	- 知网下载目录按钮 - 安装 chrome tampermonkey 插件--`|中国知网CNKI硕博论文PDF下载` [greasyfork](https://greasyfork.org/en/scripts/389343-%E4%B8%AD%E5%9B%BD%E7%9F%A5%E7%BD%91cnki%E7%A1%95%E5%8D%9A%E8%AE%BA%E6%96%87pdf%E4%B8%8B%E8%BD%BD)
	- 借助 pdfdir 注入PDF --`|chroming/pdfdir: PDF导航（大纲/目录）添加工具` [github](https://github.com/chroming/pdfdir)

## pdf 创建outline目录(Acrobat 's Script)

参考 [](https://acrobatusers.com/tutorials/print/auto_bookmark_creation/)[https://acrobatusers.com/tutorials/print/auto_bookmark_creation/](https://acrobatusers.com/tutorials/print/auto_bookmark_creation/)

```jsx
function createboomark(title, pagenum, Index) {
    // app.alert(this.bookmarkRoot.children[0].name)
    this.bookmarkRoot.createChild(
        title,
        "this.pageNum = " + pagenum + ";\\nthis.zoom = 100;",
        Index
    );
    this.bookmarkRoot.children[Index].setAction(
        "this.pageNum = " + pageNum + ";\\nthis.zoom = 100;"
    );
}

var booklist: {
    title: string;
    pagenum: number;
}

for (var i = 0; i < booklist.length; i++) {
    var bm = booklist[i];
    createboomark(bm["title"], bm["pagenum"], i);
}
```

执行后 acrobat bookmark 有效. 但其他zotero 上不能跳转页码

github 上 其他库:

-   **[booky](https://github.com/SiddharthPant/booky),** 借助 pdftk 框架实现txt 书签转换
-   _**[pdf***-***bookmark](https://github.com/ifnoelse/pdf-bookmark)**_ -1.0.7 java app