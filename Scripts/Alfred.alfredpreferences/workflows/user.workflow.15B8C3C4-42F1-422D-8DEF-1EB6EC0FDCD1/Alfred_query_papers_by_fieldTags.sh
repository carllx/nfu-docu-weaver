#!/bin/zsh
# fieldTags=$query # ID, AU, DE..
exact_match='F'
if [[ $fieldTags == 'AU' ]]; then
    exact_match='T'
fi
# printf ''
Rscript -e '
# R 
options(repos = c(CRAN="https://cran.rstudio.com/"))
Sys.setenv(LANG = "en")
library(feather)

message("'$Searching','$Thematic','$fieldTags'")
source(file.path("'$dir_script_r'", "IO.R"))

dir_m <- "/Users/yamlam/Documents/obsdiannote/🧪 Script Labs/Thematic/'$Thematic'/exports/M.feather"
dir_M_data <- file.path(dir_m)
m_data <- read_feather(dir_M_data)

# split the comma separated string into an array of R arguments 
searching_list <- strsplit("'$Searching'", ",")[[1]]

papers <- query_papers_by_cluster(cluster=searching_list, tag="'$fieldTags'", dataset_meta=m_data, exact_match='$exact_match')

# papers is "the keyword not found", stop the program
if ("the keyword not found" %in% papers) {
  stop("the keyword not found")
}

md <- kable(papers,
      caption = "(*Table above: Annual Scientific Production*)",
      format = "markdown")
print(md)
'