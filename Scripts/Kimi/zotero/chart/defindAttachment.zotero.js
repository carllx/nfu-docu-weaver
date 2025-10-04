
const { alert } = Zotero.getMainWindow();
const { OS } = ChromeUtils.importESModule("chrome://zotero/content/osfile.mjs");
Services.scriptloader.loadSubScript(
  `file:/Users/yamlam/Documents/obsdiannote/Scripts/Kimi/zotero/functions.js`,
  this
);


function getShortDate(item) {
  let date = item.getField("date", true, true);
  if(date && (date = date.substr(0, 4)) !== "0000") {
    return parseInt(date);
  }
  return "";
}

function getShortCitation(item) {
  
  // [TODO] for short style learn: https://github.com/zotero/zotero/blob/16fa1ac893443413a9d2fcbd147dcff891155724/chrome/content/zotero/integration/quickFormat.js#L1007
  // Creator
  let str = item.getField("firstCreator");
  
  // Title, if no creator (getDisplayTitle in order to get case, e-mail, statute which don't have a title field)
  let title = item.getDisplayTitle();
  title = title.substr(0, 32) + (title.length > 32 ? "…" : "");
   if (!str) {
    str = Zotero.getString("punctuation.openingQMark") + title + Zotero.getString("punctuation.closingQMark");
  }

  // Date
  let date = item.getField("date", true, true);
  if(date && (date = date.substr(0, 4)) !== "0000") {
    str += ", " + parseInt(date);
  }
  return str;
}

function getCitations(items) {
  let style = "http://www.zotero.org/styles/apa";
  style = Zotero.Styles.get(style);
  const cslEngine = style.getCiteProc("en-US", "text");
  const res = Zotero.Cite.makeFormattedBibliographyOrCitationList(
    cslEngine,
    items,
    "text"
  );
  cslEngine.free();
  return res;
}

async function app(quection, itemID) {
  Zotero.log(quection)
  attachments = await readJson('/Users/yamlam/Documents/obsdiannote/Scripts/Kimi/attachments.json') 
  chat = await readJson('/Users/yamlam/Documents/obsdiannote/Scripts/Kimi/conversations/_template.json') 
  
  // Get all selected items
  let selectedItems;
  if (itemID) {
    selectedItems = [Zotero.Items.get(itemID)];
  } else {
    selectedItems = Zotero.getActiveZoteroPane().getSelectedItems();
  }
  let tokenSize = 0;
  
  // Zotero.log(JSON.stringify(attachments))
  const chatAttachments = [];
  for (let i = 0; i < selectedItems.length; i++) {
    
    const item = selectedItems[i];
    const _itm_id = item.id; // typeof itemID is number
    // count the size of the attachments
    // convert the itemID to string
    Zotero.log(`==== ${_itm_id}`)
    file_info = attachments.filter(attachment => attachment['zoteroID'] === _itm_id.toString())
    
    Zotero.log(JSON.stringify(file_info))
    tokenSize+= file_info[0].token_size;
    // const fileID = getExtraByFiled(item, "kimiFileID");
    const fileID = file_info[0].id;

    const date = getShortDate(item);
    const title = item.getField("title");
    const citation = getCitations([item]);
    const citationShort = getShortCitation(item);
    const tags = item.getTags().map(obj => obj.tag);
    chatAttachments.push({ date, title, fileID, "itemID":_itm_id, citation, citationShort, tags});
    if (!fileID)
    alert(`The item [${title}] does not have a file attached to it.`);
    
  }

  if(tokenSize>1280000){
    alert(`Chat with Paper's tokens: ${tokenSize/1000}K `);
  }

  chat.attachments = chatAttachments;
  chat.prompt = quection
  chat.quection = quection

  // Create conversation file with name of timestamp
  const conversation = Number(new Date());

  await OS.File.writeAtomic(
    `/Users/yamlam/Documents/obsdiannote/Scripts/Kimi/conversations/${conversation}.json`,
    JSON.stringify(chat, null, 4),
    { encoding: "utf-8" , append: true}
  );

  
  // Alfred
  // Define Prompt with python via Alfred
  Zotero.HTTP.request(
    "GET",
    `alfred://runtrigger/AIAssistants/POSTConversation/?argument=${conversation}`
  );

}

// app(query.message); // no work any more
// https://github.com/retorquere/zotero-better-bibtex/issues/2906
app(query.quection, query.itemID)


