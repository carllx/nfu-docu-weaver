```bash

conda create -n bibliometrixR
conda activate bibliometrixR 
conda install -c r r r-essentials # 安装R

library(bibliometrix)
. /Users/yamlam/opt/anaconda3/bin/activate && conda activate /Users/yamlam/opt/anaconda3/envs/bibliometrixR; 

R
```


```bash
 Rscript 'Untitled.R'
```

```r
# Sys.setenv(LANG = "en")
# install.packages("bibliometrix")
library("bibliometrix")
install.packages("flashClust")


```


## vscode debugger

```R
# Vscode
install.packages("vscDebugger")
install.packages(c('R6', 'jsonlite'))
library("vscDebugger")
q() # 退出

```

```R
r.debugger.updateRPackage
# Ctrl + Shift + p on VScode
```


## R markdown

```R
# rmarkdown::find_pandoc(version = "2.12")
# rmarkdown::find_pandoc(dir = "/Users/yamlam/opt/anaconda3/bin/")
# # rmarkdown::find_pandoc(cache = FALSE)

```

```R
render(input = "src/MockGenerator.Rmd", output_format = "md_document", output_file = dir_md)
```



## changeVignettes
R Markdown在生成PDF的过程中，默认情况下会输出到输入文件所在的同一目录。
如果需要改变输出目录到特定位置，可以在调用rmarkdown::render()函数时，使用output_dir参数来指定输出目录（如果还想指定不同的文件名，还可以用output_file参数）。
Note: 但如果你通过RStudio IDE中的Knit按钮进行编绑的话，可能会发生PDF输出到其他目录（例如/tmp）的情况。
```R
# 例如，假设你有一个R Markdown文件叫做vignette.rmd，你可以这样写代码：
rmarkdown::render("path_to_package/vignettes/vignette.rmd", output_dir = "path_to_package/vignettes/")
```

这样PDF文件就会生成在你指定的vignettes文件夹下。


另外，如果你在创建软件包vignette，可以使用devtools::build_vignettes()函数，它会自动将编译好的vignettes放在正确的位置。你还可以参考Hadley Wickham的指南，里面有很多有用的信息。

## Rmarkdown backslash problem

```yaml

output: 
  md_document: 
    variant: "markdown_strict+backtick_code_blocks+task_lists+all_symbols_escapable"
    pandoc_args: ["--standalone", "--from=markdown+emoji" , "--list-extensions=markdown"]
```

- Solve with (-- `Pandoc - Pandoc User’s Guide` [pandoc](https://pandoc.org/MANUAL.html#option--list-extensions))  use "markdown_mmd" with `variant` 
- Test effect in real time learn how to defind some parameters(-- `Try pandoc!` [pandoc](https://pandoc.org/try/)) 
- List the enabled extensions  `pandoc_args: ["--list-extensions=markdown"]` 
- Other solution: post-process the file, Here is some sample code to remove backslashes before underscores and brackets: 

```r
library(stringr)

# Render your Rmd to markdown normally first
rmarkdown::render("Report.Rmd", output_format = "md_document")

# Then post-process the file
report <- readLines("Report.md")

report <- str_replace_all(report, "\\_", "_")
report <- str_replace_all(report, "\\[", "[")  

writeLines(report, "Report_processed.md")
```


### placeholder
Use the following the placeholder text to speed up the testing process

```markdown

{r, setup, include=FALSE}
library(bibliometrix)
library(rmarkdown)
library(png)
library(knitr)
library(ggplot2)
rmarkdown::find_pandoc(version = "2.12")
rmarkdown::find_pandoc(dir = "/Users/yamlam/opt/anaconda3/bin/")

- [ ] change plot vignettes? [RPackageTerminalSetup#vignettes](R Package Terminal Setup#changeVignettes)

- [ ] [[R Package Terminal Setup#Rmarkdown backslash problem]] Having issues when outputting markdown files using Rmarkdown. Extra backslashes always appear before underlines or brackets. Is this caused by Rmarkdown or Pandoc? How can I remove these extra backslashes?

Relavant note: [MCP](MCP - Multiple Country Publications). 理解一个国家的研究环境有多开放和协作
```

## SVG 问题, Output to svg instead of png

```R
svg(file.path(dir_out, paste0(SECTION, "_BasicStatistics_", names(rmap)[i], ".svg")), 
      width = 10, height = 6) 
  plot(rmap[[i]])
  dev.off()
```

macOS, it seems missing libraries that the R SVG, and `X11` is either not installed properly or R is not finding it correctly.
Instead Install `XQuartz` by

```bash

brew install --cask xquartz

```

