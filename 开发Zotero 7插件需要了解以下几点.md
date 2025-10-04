

开发Zotero 7插件需要了解以下几点:
## 插件主要由三部分组成
- src文件夹(存放源代码),
- addon文件夹(存放配置文件等),
- scripts文件夹(存放构建脚本)。

## src文件夹
开发者主要关注src文件夹
里面存放运行时执行的代码。可以用JavaScript或TypeScript编写。
## addon文件夹
存放manifest.json配置文件、界面文件等。

## scripts文件夹
存放构建和发布插件的脚本,通常不需要修改。

## Tips
- 可以使用zotero-plugin-template模板快速开始。它的README文件详细介绍了如何设置环境、构建和调试插件。
- esbuild工具会将TypeScript转换为JavaScript。
- 建议参考现有插件的源码来学习,如zotero-pdf-translate插件。



