ocr 识别 pdf 

- [ ] shell 脚本自动将pdf 分成100 页 📅 2025-09-03

```powershell
# anaconda powershell prompt
conda activate MinerU

$folderPath = "E:\Download\OCR Processing"
Get-ChildItem -Path $folderPath -Filter *.pdf | ForEach-Object {
    $pdfFile = $_.FullName
    $command = "magic-pdf pdf-command --pdf `"$pdfFile`" --inside_model true"
    Write-Host "正在处理文件: $pdfFile"
    Invoke-Expression $command
}
```




## Update MinerU with conda


(Source:  [github.com: MinerU/docs/how_to_download_models_en.md at master · opendatalab/MinerU](https://github.com/opendatalab/MinerU/blob/master/docs/how_to_download_models_en.md))


根据文档，通过 anaconda 升级 MinerU 的步骤如下：

1. 激活 Python 3.10 环境：
```bash
conda activate MinerU
```


2. 安装/升级 magic-pdf：
```bash
pip install -U "magic-pdf[full]" --extra-index-url https://wheels.myhloli.com
```


3. 下载模型文件：
- 按照"如何下载模型文件"教程的详细说明进行操作 
- 需要重新下载模型以获取增量更新 

下载: `download_models_hf.py`  

```bash
pip install huggingface_hub
wget https://github.com/opendatalab/MinerU/raw/master/scripts/download_models_hf.py -O download_models_hf.py
python download_models_hf.py
```

```python
from huggingface_hub import hf_hub_download

# 设置自定义下载路径
custom_path = "G:\Download\Models"
model_id = "your-model-name"

# 下载模型到指定路径
hf_hub_download(repo_id=model_id, 
                cache_dir=custom_path,
                local_dir=custom_path)
```


4. 完成后系统会自动在用户目录下生成 `magic-pdf.json` 配置文件 

注意事项：
- 确保系统内存至少 16GB，推荐 32GB+ 
- 存储空间需要 20GB 以上，建议使用 SSD 
- 如遇到安装问题，请先查看 FAQ 文档 

我目前无法联系上这五位同学，我已经在系统催促，但是他们没有回应，麻烦看到这个消息的同学想办法通知这五位同学，请尽快上传的期末作业，系统可能会取消你们成绩


```bash
magic-pdf -p "E:\BaiduNetdiskDownload\交互艺术与技术242.pdf" -o "E:\BaiduNetdiskDownload"
```

anaconda prompt

```zsh
conda activate MinerU        

for %F in ("E:\Download\scan\1_process_pdf\*.pdf") do magic-pdf -p "%F" -o "E:\Download\scan\MinerU_output"
```

使用Python 

参考demo (Source:  [github.com: MinerU/demo/demo.py at master · opendatalab/MinerU](https://github.com/opendatalab/MinerU/blob/master/demo/demo.py))





##  Markdown to epub3(pandoc)
```zsh
pandoc \
  --from markdown \
  --to epub3 \
  --metadata title="交互艺术与技术" \
  "/Volumes/Download(ThinkPad)/交互艺术与技术242/auto/交互艺术与技术242.md" \
  --output "/Volumes/Download(ThinkPad)/交互艺术与技术242/auto/交互艺术与技术242.epub" \
  --toc \
  --filter pandoc-crossref \
  --epub-cover-image="/Volumes/Download(ThinkPad)/交互艺术与技术242/auto/cover.png" \
  --resource-path="/Volumes/Download(ThinkPad)/交互艺术与技术242/auto:/Volumes/Download(ThinkPad)/交互艺术与技术242/auto/images"
```

## epub to markdown

```shell
/Users/yamlam/Documents/obsdiannote/Scripts/Alfred.alfredpreferences/workflows/user.workflow.C8ADF3D7-1D26-405D-9607-07EEECCB1A78/src/cli/epub_to_obsidian.sh

```


## 转换图片本地连接


```bash
. /Users/yamlam/opt/anaconda3/etc/profile.d/conda.sh
conda activate base        
```


```bash
cd /Users/yamlam/Documents/obsdiannote/Scripts/Alfred.alfredpreferences/workflows/user.workflow.C8ADF3D7-1D26-405D-9607-07EEECCB1A78

python /Users/yamlam/Documents/obsdiannote/Scripts/Alfred.alfredpreferences/workflows/user.workflow.C8ADF3D7-1D26-405D-9607-07EEECCB1A78/src/core/convert_local_images.py '/Volumes/Download(ThinkPad)/scan/output/交互艺术与技术242/auto/交互艺术与技术242.md'
```


遍历处理文件夹内的md
```bash
python '/Users/yamlam/Documents/obsdiannote/Scripts/Alfred.alfredpreferences/workflows/user.workflow.C8ADF3D7-1D26-405D-9607-07EEECCB1A78/src/core/batch_convert_markdown_images.py' /Users/yamlam/Downloads/epub_to_markdwon
```



