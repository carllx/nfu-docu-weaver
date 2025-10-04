



要用Python从Excel和Word创建模板并填充数据，可以按以下步骤操作：

1. **安装必要库**：
   ```bash
   pip install pandas docxtpl openpyxl
   ```

2. **准备Excel数据**：组织Excel文件，使用清晰的列标题，每行表示一组数据。

3. **设计Word模板**：在Word模板（`template.docx`）中使用双大括号标记占位符，例如`{{Name}}`、`{{Address}}`。

4. **编写Python脚本**：
   ```python
   import pandas as pd
   from docxtpl import DocxTemplate

   # 加载Excel数据
   df = pd.read_excel('data.xlsx')

   # 遍历Excel每行数据
   for index, row in df.iterrows():
       # 加载Word模板
       doc = DocxTemplate('template.docx')

       # 创建上下文字典
       context = row.to_dict()

       # 渲染文档
       doc.render(context)

       # 保存填充后的文件
       output_filename = f"filled_document_{index + 1}.docx"
       doc.save(output_filename)
       print(f"保存 {output_filename}")
   ```

5. **处理复杂数据（可选）**：
   如果模板包含表格，可使用Jinja2语法创建动态表格：
   ```python
   from docxtpl import DocxTemplate

   doc = DocxTemplate("template_with_table.docx")
   context = {
       'employees': [
           {'name': 'John Doe', 'position': 'Developer'},
           {'name': 'Jane Smith', 'position': 'Designer'},
       ]
   }
   doc.render(context)
   doc.save("filled_table_document.docx")
   ```

6. **批量生成文件**：通过遍历Excel每行数据，为每组数据生成对应的Word文档。

7. **额外功能**：
   - 插入图片：在Excel文件中包含图片路径，用`docxtpl`插入到Word模板中。
   - 生成图表：使用`matplotlib`从Excel数据生成图表并嵌入模板。

通过上述方法，可以高效创建和填充模板，自动化生成多份个性化文档。


