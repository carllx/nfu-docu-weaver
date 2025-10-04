/*
Note:
This script is triggered by the 'zotero-actions-tags' script and executed via an Alfred workflow URL.
For example, the script can be invoked with the following code snippet:
await Zotero.HTTP.request(
    "GET",
    `alfred://runtrigger/AIAssistants/ZoteroActionScript_extractAttachPath_by_itemID/?argument=${itemID}`
)
The main function in this script is 'app'. However, it doesn't return anything because it's invoked by an Alfred trigger, 
which doesn't handle return values.
*/
const { alert } = Zotero.getMainWindow();

const TAG_NAME = "#kimi";
const FILED_EXTRA = "kimiFileID";




function triggerAlfredWorkflowForUpload(AttchObj) {
  const { itemID, path, contentType } = AttchObj;
  Zotero.log(` ${contentType} `);

  // [TODO] How convert object's params As Alfred's Variables?
  // // Convert the res object to a URL-encoded string
  // const res = {
  //   "itemID": item.id,
  //   "path": path,
  //   "contentType": contentType
  // }
  // const urlArgs = encodeURIComponent(JSON.stringify(res));
  // but not support yet
  // (-- `How to send multiple args via External Trigger? - Discussion & Help - Alfred App Community Forum` [alfredforum](https://www.alfredforum.com/topic/21459-how-to-send-multiple-args-via-external-trigger/))
  // pass the single argument in the URL as comma or pipe separated, then add a Split Arg object after which can split this into either variables or multiple arguments depending on how you want to use it within the workflow
  const sep = "******";
  const args = `${itemID}${sep}${path}${sep}${contentType}`;
  /**
   * [TODO] How to silent the error:
   * """Error connecting to server.
   * Check your Internet connection."""
   * */
  // encode object to url string
  // Zotero.HTTP.request for alfred may uncaught exception: Object
  // <state>: "rejected" ;message: "Error connecting to server. Check your Internet connection.
  Zotero.HTTP.request(
    "GET",
    `alfred://runtrigger/AIAssistants/uploadKimiViaPython/?argument=${args}`
  );
  // return path
}

async function extractDocAttachmentPaths(item) {
  // return path, if attachment is pdf or docx
  const bestAttachs = await item.getBestAttachments();
  const Attach = bestAttachs[0]
  const Attachpath = await Attach.getFilePathAsync();
  // alert and stop if pdf is not exist
  
  if (!Attach || !Attachpath) {
    alert(`Document <${item._displayTitle}> is not exist!`);
    return
  }

  const contentType = Attach.attachmentContentType 
  const res = {
    "itemID": item.id,
    "path": Attachpath,
    "contentType": contentType
  }
  return res;
}

/**
 * Converts a formatted string into a JSON object.
 * The input string should have key-value pairs separated by a colon and each pair separated by a newline.
 * Spaces at the beginning and end of each key and value are removed.
 *
 * @param {string} text - The input string to convert to a JSON object.
 *
 * @returns {Object} - The resulting JSON object.
 *
 * @example
 * returns {
 *   "JCR分区": "Q2",
 *   "中科院分区升级版": "环境科学与生态学3区",
 *   "影响因子": "3.9",
 *   "5年影响因子": "4.0",
 *   "SSCI": "Q2",
 *   "titleTranslation": "信息系统成功和技术接受模式对教育中社交媒体因素的影响",
 *   "kimiFileID": "12555ddcc"
 * }
 * convertTextToObject("JCR分区: Q2\n中科院分区升级版: 环境科学与生态学3区\n影响因子: 3.9\n5年影响因子: 4.0\nSSCI: Q2\ntitleTranslation: 信息系统成功和技术接受模式对教育中社交媒体因素的影响\nkimiFileID: 12555ddcc");
 */
function convertTextToObject(text) {
  const lines = text.split("\n");
  const jsonObject = {};

  lines.forEach((line) => {
    const [key, value] = line.split(":").map((str) => str.trim());
    jsonObject[key] = value;
  });

  return jsonObject;
}

/**
 * This function extracts a specific field from the 'extra' property of an item.
 * The 'extra' property is a string that is converted to a JSON object.
 *
 * @param {Object} item - The item from which to extract the field.
 * @param {string} key - The key of the field to extract from the item.
 *
 * @return {string} - The value of the specified field.
 *
 * @example
 * extractFieldFromItemExtra(item, "影响因子");
 * return "3.9"
 */
function extractFieldFromItemExtra(item, key) {
  const extra = item.toJSON().extra;
  
  if (!extra) {
    Zotero.log(`Missing extra field <${item._displayTitle}>`);
    return false;
  }
  const extraJson = convertTextToObject(extra);
  return extraJson[key];
}

// [TODO] app consider to rename to `processItemForKimiUpload`
async function app(itemID) {
  
  const item = Zotero.Items.get(itemID);

  // If kimi ID exist, document has up to date.
  const kimi_id = extractFieldFromItemExtra(item, FILED_EXTRA);
  
  // upload the attechment to kimi, and update the extra field
  const pathObj = await extractDocAttachmentPaths(item);
  
  if (kimi_id || !pathObj)  return
  
  // Upload pdf to kimi via alfred trigger
  await triggerAlfredWorkflowForUpload(pathObj);
  Zotero.log(`Uploading ${JSON.stringify(pathObj)} to kimi via alfred trigger`);
}

app(query.itemID);

// const window = require("window");
// // Script Error: import declarations may only appear at top level of a module
// import app from '/Users/yamlam/Desktop/app.js'
// const {app} = require('/Users/yamlam/Desktop/app.js');

// async function run() {
//   // items = collection?.getChildItems();
//   const collection = Zotero.getActiveZoteroPane().getSelectedCollection();
//   const allSelectedItems = ZoteroPane_Local.getSelectedItems();

//   const pdfs = []; // Specify the type of pdfs as an array of any type
//   for (let i = 0; i < allSelectedItems.length; i++) {
//     const select_items = allSelectedItems[i];
//     const pdf = await extractDocAttachmentPaths(select_items);
//     if (!pdf) {
//       window.alert(`<${select_items._displayTitle}> has no pdf attachments`);
//       return;
//     } else {
//       // append pdf to the pdfs array
//       pdfs.push(pdf);
//     }
//   }
//   console.log(pdfs);
//   return pdfs;
// }
