#!/bin/zsh

Rscript -e "
Sys.setenv(LANG = 'en')
options(repos = c(CRAN='https://cran.rstudio.com/'))
query <- '"$record"'
path_topic <- '/Users/yamlam/Documents/obsdiannote/🧪 Script Labs/Thematic/'
path_src <- '/Users/yamlam/Documents/obsdiannote/🧪 Script Labs/wos_biliometriex/Dev/src'
rmarkdown::render(
  file.path(path_src,'Report.Rmd'),
  params=list(
    query=query,
    path_topic=path_topic
    ),
  output_format='md_document',
  output_dir=paste(path_topic, query,sep=''),
  output_file='Report_"$record".md'
)"
# pass 'ture' if no error
echo "Report generated with Success!"