

class ExportWordbyPandoc {
    constructor() {

    }
    async invoke() {
        // const http = require('http');
        const { exec } = require('child_process');
        
        const basePath = app.vault.adapter.basePath;
        const filePath = app.workspace.getActiveFile().path
        const activePath = basePath + '/'+ filePath
        
        // execute alfred by alfred://runtrigger/Zotero_actions/ObsidianPandoc/?argument=test
        // Fetch API cannot load alfred://runtrigger/Zotero_actions/ObsidianPandoc/?argument=/Users/yamlam/Documents/obsdiannote%E7%A0%94%E7%A9%B6%E5%88%86%E6%94%AF01%E5%9F%BA%E4%BA%8EMPEG%E6%A0%87%E5%87%86%E7%9A%84%E7%82%B9%E4%BA%91%E8%A7%86%E9%A2%91%E5%8E%8B%E7%BC%A9%E7%BC%96%E7%A0%81%E5%99%A8.md. URL scheme "alfred" is not supported.
        // requestUrl(`alfred://runtrigger/Zotero_actions/ObsidianPandoc/?argument=${activePath}`);
        exec(`open alfred://runtrigger/Zotero_actions/ObsidianPandoc/?argument=${activePath}`)

    }
}