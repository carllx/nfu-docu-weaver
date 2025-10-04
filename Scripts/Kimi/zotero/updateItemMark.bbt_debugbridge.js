
const TAG_NAME = "#kimi";
const TAG_ERROR = "#kimiError";
const EXTRA_FILEID = "kimiFileID";
const EXTRA_TOKEN = "kimiToken";


// Usage:
// convertObjectToText(obj)
// var obj = {
//   "JCR分区": "Q2",
//   "中科院分区升级版": "环境科学与生态学3区",
//   "影响因子": "3.9",
//   "5年影响因子": "4.0",
//   "SSCI": "Q2",
//   "titleTranslation": "信息系统成功和技术接受模式对教育中社交媒体因素的影响",
//   "tex.kimi": "12555ddcc"
// };
// return "JCR分区: Q2\n中科院分区升级版: 环境科学与生态学3区\n影响因子: 3.9\n5年影响因子: 4.0\nSSCI: Q2\ntitleTranslation: 信息系统成功和技术接受模式对教育中社交媒体因素的影响\ntex.kimi: 12555ddcc"
function convertObjectToText(obj) {
  let text = '';
  for (let key in obj) {
    text += `${key}: ${obj[key]}\n`;
  }
  return text;
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
 *   "tex.kimi": "12555ddcc"
 * }
 * convertTextToObject("JCR分区: Q2\n中科院分区升级版: 环境科学与生态学3区\n影响因子: 3.9\n5年影响因子: 4.0\nSSCI: Q2\ntitleTranslation: 信息系统成功和技术接受模式对教育中社交媒体因素的影响\ntex.kimi: 12555ddcc");
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


async function setTags(item, tag) {

  // Set '#kimi' tag to the item if it doesn't exist.
  const tags = item.getTags();
  const isExistKimiTag = tags.includes(tag);
  if (!isExistKimiTag) {
    // append '#kimi' to the tags
    tags.push(tag);
    item.setTags(tags);
  }
}

async function setExtra(item, field ,value) {
  
  // get extra field from the item
  const extra = item.toJSON().extra;
  let extraObj = {};
  if(extra) extraObj = convertTextToObject(extra);
  extraObj[field] = value;
  
  // set extra field to the item
  item.setField("extra", convertObjectToText(extraObj));
}


async function app(itemID, fileID, tokenSize) {
  const { alert} = Zotero.getMainWindow();
  if (!itemID || !fileID || !tokenSize) {
    alert("Faild Uppload, itemID, fileID, tokenSize are required.");
    return;
  }
  const item = Zotero.Items.get(itemID);
  await setTags(item, TAG_NAME);
  await setExtra(item, EXTRA_FILEID, fileID);
  await setExtra(item, EXTRA_TOKEN, tokenSize);
  await item.saveTx(); // update UI view

}

/**
 * itemID=...
 * &id=cncug9sudu6bco2uf5ag
 * &name=Alexiou+et+al.+-+2019+-+A+comprehensive+study+of+the+rate-distortion+performance+in+MPEG+point+cloud+compression.pdf
 * &type=file
 * &content_type=pdf
 * &status=parsed
 * &size=2270944
 * &token_size=29430
 * &failed_reason=
 */
app(query.itemID, query.id, query.token_size);