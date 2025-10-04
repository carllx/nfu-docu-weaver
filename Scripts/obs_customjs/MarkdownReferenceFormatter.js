class MarkdownReferenceFormatter {
    constructor() {
        
    }
    processText(text) {
        // 正则表达式匹配模式
        const pattern = /(\[)(\[[0-9]\]\(http.*\))(\])/g;
      
        // 检查是否存在匹配
        const hasMatch = pattern.test(text);
      
        if (hasMatch) {
          // 如果存在匹配，则替换匹配的内容
          const processedText = text.replace(pattern, (match, p1, p2,p3) => {
            return p2;
          });
      
          return {
            hasMatch: true,
            processedText: processedText
          };
        } else {
          return {
            hasMatch: false,
            processedText: text
          };
        }
      }
    async invoke() {
          
          // 测试函数
          const {data} = app.workspace.activeEditor
          const {processedText} = this.processText(data)
          app.workspace.activeEditor.setData(processedText) 
        //   `这是一个测试文本 [[1](https://example.com), [2](https://example.org)] 包含链接。
        //   1. Stoicism 是一个古希腊哲学学派,它的创始人是 Zeno of Citium。Stoics 受到了柏拉图哲学的很大影响,但也有自己独特的哲学体系。[[1](https://ndpr.nd.edu/reviews/plato-and-the-stoics/), [2](https://academic.oup.com/book/380/chapter/135194515), [3](https://www.themontrealreview.com/Articles/Plato_and_Stoicism.php)]`;
        //   var result = processText(testText);
          
    //       console.log("是否匹配:", result.hasMatch);
    //       console.log("处理后的文本:", result.processedText);
    }
}