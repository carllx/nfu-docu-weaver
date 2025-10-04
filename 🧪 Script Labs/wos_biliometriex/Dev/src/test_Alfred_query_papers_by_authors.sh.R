
# R 
fieldTags <- 'DE'
exact_match <- T
Searching <- 'meta analysis,data analysis'
Thematic <- 'Online education platform analysis'

options(repos = c(CRAN="https://cran.rstudio.com/"))
Sys.setenv(LANG = "en")
library(feather)

dir_script_r <- '/Users/yamlam/Documents/obsdiannote/🧪 Script Labs/wos_biliometriex/Dev/src/'
dir_m <- paste0("/Users/yamlam/Documents/obsdiannote/🧪 Script Labs/Thematic/",Thematic,"/exports/M.feather")
dir_M_data <- file.path(dir_m)
m_data <- read_feather(dir_M_data)
source(file.path(dir_script_r, "IO.R"))

# split the comma separated string into an array of R arguments 
searching_list <- strsplit(Searching, ",")[[1]]
searching_list <- c('multimodal discourse analysis')
searching_list <- c('meta-analysis')
papers <- query_papers_by_cluster(cluster=searching_list, tag=fieldTags, dataset_meta=m_data, exact_match=exact_match)
# papers is "the keyword not found", stop the program
if ("the keyword not found" %in% papers) {
  stop("the keyword not found")
}

md <- kable(papers,
      caption = "(*Table above: Annual Scientific Production*)",
      format = "markdown")
print(md)
