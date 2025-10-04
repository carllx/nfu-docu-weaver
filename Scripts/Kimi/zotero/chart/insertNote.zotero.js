// import readJson from functions
Services.scriptloader.loadSubScript(
    `file:/Users/yamlam/Documents/obsdiannote/Scripts/Kimi/zotero/functions.js`,
    this
);




function formatMarkdownToHTML(text) {
    // markdown-it have been imported and loaded
    // by zotero's ActionTag plugin
    // as 'Zotero.md'
    return Zotero.md.render(text);
}


const app = async(timestamp) =>{
    chat = await readJson(`/Users/yamlam/Documents/obsdiannote/Scripts/Kimi/conversations/${timestamp}.json`) 
    const {
        conversation_id,
        attachments,
        prompt,
        response,
        quection,
        refs,
        title,
        group_id,
        req_id,
        resp_id
    } = chat

    const note = new Zotero.Item('note');

    // Assume Multiple papers
    const relateCollections = new Set();
    
    attachments.forEach((attachment) => {
        const item = Zotero.Items.get(attachment['itemID']);
        if (item) { // Check if item exists
            note.addRelatedItem(item); // Add related item to the note
            const itemCollections = item.getCollections(); // Get item's collections
            Zotero.log(`itemCollections:${itemCollections}`)
            itemCollections.forEach((collection) => {
                relateCollections.add(collection); // Add each collection to the set
            });
        }
    });
    
    Zotero.log(`note:${JSON.stringify(note)}`)
    // Write Content
    const tx_kimi_url = `[kimi](https://kimi.moonshot.cn/chat/${conversation_id})`
    const text = `# ${quection}\n\n` + tx_kimi_url + '\n\n' + response;
    // Convert note with RichText
    html = formatMarkdownToHTML(text)
    
    note.setNote(html); 
    if (attachments.length === 1) {
        note.parentID = attachments[0]['itemID']
        Zotero.log(`parentID:${note.parentID}`)
        note.libraryID = Zotero.Items.get(note.parentID).libraryID
    }
    // Zotero.log(`note:${JSON.stringify(note)}`)
    
    note.saveTx().then(() => {
        Zotero.log('Note created successfully');
        // Convert Set to Array to iterate over collections
        const collectionsArray = Array.from(relateCollections);
        Zotero.log(`collectionsArray:${JSON.stringify(collectionsArray)}`)
        collectionsArray.forEach((id) => {
            note.addToCollection(id); // Add each collection to the note
        });
    }).catch((error) => {
        Zotero.Error('Error creating note:', error);
    });
}

app(query.conversation)