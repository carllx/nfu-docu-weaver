
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
  
  function getExtraByFiled(item, filed) {
    const extra = item.toJSON().extra;
    if (!extra) {
      return false;
    }
    const extraJson = convertTextToObject(extra);
    return extraJson[filed];
  }

// export { getExtraByFiled };


async function readJson(filePath){
  // var { Services } = ChromeUtils.import("resource://gre/modules/Services.jsm");
  const resText = await Zotero.File.getResourceAsync(`file:${filePath}`)
  const res = JSON.parse(resText)
 Zotero.log(res[0])
 return res 
}
// Usage:
// var attachments = readJson('/Users/yamlam/Documents/obsdiannote/Scripts/Kimi/attachments.json') 