# R 
library(bibliometrix)
Thematic <- 'Online education platform analysis'
options(repos = c(CRAN="https://cran.rstudio.com/"))
Sys.setenv(LANG = "en")
library(feather)

dir_script_r <- '/Users/yamlam/Documents/obsdiannote/🧪 Script Labs/wos_biliometriex/Dev/src/'
dir_m <- paste0("/Users/yamlam/Documents/obsdiannote/🧪 Script Labs/Thematic/",Thematic,"/exports/M.feather")
dir_M_data <- file.path(dir_m)
m_data <- read_feather(dir_M_data)

data(management, package = "bibliometrixData")
histResults <- histNetwork(management, min.citations = 0, sep = ";") # it works!

# # have tried to convert to character but still not working
# m_data$SR <- as.character(m_data$SR) # Error in strsplit(M[, Field], sep) : non-character argument
# m_data$SR <- as.character(as.vector(m_data$SR)) # Error in strsplit(M[, Field], sep) : non-character argument
# m_data$SR <- as.character(levels(m_data$SR))[m_data$SR] # Error in strsplit(M[, Field], sep) : non-character argument, In addition: Warning message:Setting row names on a tibble is deprecated. 
# m_data$SR <- as.character(unlist(m_data$SR)) # Error in strsplit(M[, Field], sep) : non-character argument, In addition: Warning message:Setting row names on a tibble is deprecated. 
# filter data


# assign SR as column names
m_data <- as.data.frame(m_data)
rownames(m_data) <- as.character(m_data$SR)
# debug(histNetwork) # -> debug(wos)

# test_data <- m_data[1:5, -which(names(m_data) == "SR")]
histResults <- histNetwork(m_data, min.citations =0, sep=";") # Error in strsplit(M[, Field], sep) : non-character argumentIn addition: Warning message:Setting row names on a tibble is deprecated.

source(file.path(dir_script_r,'histPlotly.R'))

# debug(histPlotly)
histPlotly(
  histResults,
  n = 20,
  size = 5,
  labelsize = 5,
  title_as_label = FALSE,
  label = "short",
  verbose = TRUE
)

