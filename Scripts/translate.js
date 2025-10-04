class obTranslate {
  constructor() {
    this.source = ''
    // this.sourceLanguage = ''
  }
  async invoke() {
    
    this.source = app.workspace.activeEditor.getSelection();
    if (!this.source) {
      new Notice("No text selected");
      return;
    }
    
    // const texts = await this.GoogleGet(tranObject);
    const r = await this.getValidTranslationFromMultipleRequests(this.source);
    // console.log(r);
    const modal = this.createModal(r);
    const nResult = new Notice(modal, 15000); // until user dismisses
    // nResult.setMessage(); 
  }
  async fetchGoogle(text) {
    // decode text
    text = encodeURIComponent(text);
    const response = await fetch(
      `http://translate.googleapis.com/translate_a/single?client=gtx&sl=en&tl=zh-CN&hl=en-US&dt=t&dt=bd&dj=1&source=icon&q=${text}`,
      { mode: "cors" }
    );
    const data = await response.json();
    return data;
  }

  async fetchTranslationFromGBooksAPI(text, TargetLanguage = "zh") {  //zh-CN 
    // decode text
    text = encodeURIComponent(text);
    const myHeaders = new Headers();

    myHeaders.append(
      "user-agent",
      "Mozilla/5.0 (iPhone; CPU iPhone OS 10_3_1 like Mac OS X) AppleWebKit/603.1.30 (KHTML, like Gecko) Version/10.0 Mobile/14E304 Safari/602.1"
    );
    myHeaders.append("accept", "*/*");

    const requestOptions = {
      method: "GET",
      headers: myHeaders,
      redirect: "follow",
    };
    const response = await fetch(
      `https://www.googleapis.com/language/translate/v2?key=AIzaSyBcsB9k1Db4FXrf0Y7vXK0aIS2bQA38Gms&target=${TargetLanguage}&&q=${text}`,
      requestOptions
    );
    const data = await response.json();
    const result = data.data.translations[0];
    result.targetLanguage = TargetLanguage;

    return result;
  }
 
  async getValidTranslationFromMultipleRequests(s) {
    // fetch translate with 2 language at same time;
    const [zhTargetLanguage,
      enTargetLanguage] = await Promise.all([
      this.fetchTranslationFromGBooksAPI(s, "zh"),
      this.fetchTranslationFromGBooksAPI(s, "en"),
    ]);
    // get the result which Source Language is not equal to target language
    let r =  [zhTargetLanguage,
      enTargetLanguage].filter((item) => {
        // use prefix to compare language
      // es: "zh-TW" or "zh-CN" is equal to "zh"
      const detectedSourceLanguage = item.detectedSourceLanguage.split("-")[0];
      return detectedSourceLanguage !== item.targetLanguage
    })[0];
    
    return r; 
  }

  createModal(transObject) {
    // const modal = new Modal(app);
    // should avaliable with import { App, Modal } from "obsidian";
    const { detectedSourceLanguage, translatedText, targetLanguage } = transObject;
    const btn_rep_md = document.createElement("button");
    btn_rep_md.innerText = "(md)";
    btn_rep_md.setAttribute("class", ".GPT-Toolbar-btn");
    btn_rep_md.onclick = () => {
      let primary = "";
      let secondary = "";
      // zh always need to be the secondary language
      // also Consider the case detectedSourceLanguage is "zh-TW" or "zh-CN"
      if(detectedSourceLanguage.split("-")[0] === "zh") {
        primary = translatedText;
        secondary = this.source;
      }else{
        primary = this.source;
        secondary = translatedText;
      }
      app.workspace.activeEditor.editor.replaceSelection(
        `${primary}(${secondary})`
      );
    };
    const btn_rep_simple = document.createElement("button");
    btn_rep_simple.innerText = "replace";
    btn_rep_simple.setAttribute("class", ".GPT-Toolbar-btn");
    btn_rep_simple.onclick = () => {
      app.workspace.activeEditor.editor.replaceSelection(translatedText);
    };
    
    const paragraph = document.createElement("p");
    paragraph.innerText = `${detectedSourceLanguage} >> ${targetLanguage}: \n\n${translatedText}`;
    
    const modal = document.createElement("div");
    modal.appendChild(paragraph);
    modal.appendChild(btn_rep_simple);
    modal.appendChild(btn_rep_md);
    return modal;
  }
}



 // More Advanced Google Translate API
// async GoogleGet(s) {
//   let tranObject = await this.fetchGoogle(s);
//   // TODO: object:"""{"sentences":[{"trans":"雅思书籍和学习指南|","orig":"IELTS books and study guides |","backend":3,"model_specification":[{}],"translation_engine_debug_info":[{"model_tracking":{"checkpoint_md5":"6ffafab0da7e640be86ac09d0d5e539c","launch_doc":"en_zh_2023q1.md"}}]},{"trans":"参加雅思考试 - 英国文化协会 |","orig":"Take IELTS - British Council |","backend":3,"model_specification":[{}],"translation_engine_debug_info":[{"model_tracking":{"checkpoint_md5":"6ffafab0da7e640be86ac09d0d5e539c","launch_doc":"en_zh_2023q1.md"}}]},{"trans":"参加雅思⁶","orig":"Take IELTS⁶","backend":3,"model_specification":[{}],"translation_engine_debug_info":[{"model_tracking":{"checkpoint_md5":"6ffafab0da7e640be86ac09d0d5e539c","launch_doc":"en_zh_2023q1.md"}}]}],"src":"en","spell":{}} """covert to markdown
//   tranObject.sentences = tranObject.sentences.map((item) => item.trans);
//   const texts = tranObject.sentences.join("\n");
//   return texts;
// }