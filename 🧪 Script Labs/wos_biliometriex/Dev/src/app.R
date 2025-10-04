query <- "Point Cloud Compression"
# query <- "point cloud"
# query <- "Augmented Reality"
# biblioshiny()
# library(rmarkdown)
# library(knitr)
# library(magrittr)
library(dplyr)
# library(rstudioapi)
library(bibliometrix)
library(plotly)
current_path <- dirname(rstudioapi::getActiveDocumentContext()$path)


dir_root <- file.path("~/Documents", "obsdiannote", "🧪 Script Labs", "Thematic") # nolint: line_length_linter.
plain_text <- file.path(dir_root, paste0(query, ".txt"))
dir_searching <- file.path(dir_root, query)
dir_exports <- file.path(dir_searching, "exports")

# Create directories if they don't exist
dir.create(dir_exports, showWarnings = FALSE, recursive = TRUE)


# Data loading and converting Metadata to a data frame as CSV
M <- convert2df(plain_text, dbsource = "wos", format = "plaintext")
# filter data
NM <- subset(
  M,
  # M$PY >= 2000 &
  M$PY <= 2023
)

query <- "LI Z"


################################
# SECTION 00: DESCRIPTIVE ANALYSIS
################################

SECTION <- "S0-BasicStatistics"

# Basic Statistics
TITLE <- paste("Basic Statistics of", query)
# summary and plot of results
res <- biblioAnalysis(NM, sep = ";")


library(feather)
dir_M_data <- file.path(dir_exports, "M.feather")
write_feather(M, dir_M_data, row.names = TRUE)
m_data <- read_feather(dir_M_data)

# dir_res_data <- file.path(dir_exports, "RES.feather")
# write_feather(res, dir_res_data)
# res <- read_feather(dir_res_data)
dir_M_data <- file.path(dir_exports, "M.feather")
# papers <- action_query_papers_by_author("LI Z", dir_M_data, "TC", TRUE)
source(file.path(current_path, "IO.R"))
papers <- query_papers_by_cluster(cluster=c("LI Z","LI L"), tag="AU", dataset_meta=M, exact_match=T)

papers <- query_papers_by_cluster(cluster=c("model","algorithm","object detection"), tag="DE", dataset_meta=M, exact_match=T)


bib_ana_plot <- plot(res, k = 10, pause = FALSE, na.rm = F)
bib_summary <- summary(
  object = res,
  k = 100, # consider the size of contries minimum 82
  pause = F
)

# plot(x = RESULTS, k = 10, pause = FALSE)

# # Yearly Evolution of Publications
source(file.path(current_path, "get_yearly_publication_report.R"))
publication_data <- get_yearly_publication_report(bib_ana_plot$AverArtCitperYear$data)
# Write a no standardized data to csv
# write.csv(publication_data$publication_data, file = "AnnualProdution.csv", row.names = FALSE)
publication_data$pic


get_yearly_publication_report_interative(bib_ana_plot$AverArtCitperYear$data)

# H_index
Hindex(M, elements = dominance(res)$Author, years = 50)$H %>% arrange(desc(h_index))


# correclation analysis - AnnualProdution
source(file.path(current_path, "correlations.R"))
res_cor <- cor_analysis(c(publication_data$publication_data))
generate_cor_md(res_cor)

# correlation analysis - country
## Merge All dataframes about country
names(bib_summary$TCperCountries)[names(bib_summary$TCperCountries) == "Country     "] <- "Country"
country_df <- merge(bib_summary$TCperCountries, bib_summary$MostProdCountries, by = "Country")
# remove 'Country' column and 'Articles'
# For resean of removing 'Articles',Since 'Freq' is equel to 'Articles'
# 'Freq' is the percentage of 'Articles' in 'Country'.
# reference source code: Freq=as.numeric(Co[,2])/sum(object$Countries)
cor_country_df <- country_df[, !(names(country_df) %in% c("Country", "Articles"))]

# Convert all value as numeric type
string_cols <- sapply(cor_country_df, is.character)
# # Get names of all string columns
string_cols <- names(string_cols[string_cols])
# # Convert string columns to numeric
cor_country_df[string_cols] <- lapply(cor_country_df[string_cols], as.numeric)
correlations_md <- NULL

# correlations
res_cor <- cor_analysis(c(cor_country_df))
generate_cor_md(res_cor)
################################
# SECTION 01: INTELLECTUAL STRUCTURE
################################ r

SECTION <- "S1-IntellectualStructure"

# Co-Citation Network
TITLE <- paste("Co-Citation Network", query)

NetMatrix <- biblioNetwork(M,
  analysis = "co-citation",
  network = "references",
  sep = ";"
)

# reference: https://rdrr.io/cran/bibliometrix/man/networkPlot.html
net <- networkPlot(NetMatrix,
  n = 50,
  Title = "Co-Citation Network",
  type = "fruchterman",
  # type = "auto",
  cluster = "walktrap",
  size.cex = TRUE,
  size = 40,
  # remove.multiple = FALSE,
  remove.multiple = TRUE,
  remove.isolates = TRUE,
  community.repulsion = 0.08,
  labelsize = 0.7,
  edgesize = 1,
  edges.min = 1
)

# save results as CSV
# Loop through all data which type is 'data.frame' in net, save each as CSV
for (i in seq_along(net)) {
  if (is.data.frame(net[[i]])) {
    write.csv(net[[i]], file.path(dir_exports, paste0(SECTION, "_Co-CitationNetwork_", names(net)[i], ".csv")))
  }
}
png(file.path(dir_exports, paste0(SECTION, "_Co-CitationNetwork_", ".png")), width = 1080, height = 600)
plot(net$graph)
dev.off()

## Missing - Degree Plot
# 'degreeplot' and 'ggplot'
# on https://rdrr.io/cran/largeVis/src/inst/doc/momentumandusedata.R

# Historiograph
TITLE <- paste("Historiograph", query)
histResults <- histNetwork(M, sep = ";")
options(width = 600)
net <- histPlot(histResults, n = 20, size = 5, labelsize = 4)

# Save results as CSV
for (i in seq_along(net)) {
  if (is.data.frame(net[[i]])) {
    write.csv(net[[i]], file.path(dir_exports, paste0(SECTION, "_Historiograph_", names(net)[i], ".csv")))
  }
}

png(file.path(dir_exports, paste0(SECTION, "_Historiograph", ".png")), width = 1080, height = 600)
plot(net$g)
dev.off()



################################
# SECTION 02: CONCEPTUAL STRUCTURE
################################

SECTION <- "S2-ConceptualStructure"

# Co-occurrence Network
# Co-word Analysis through Keyword co-occurrences
NetMatrix <- biblioNetwork(M,
  analysis = "co-occurrences",
  network = "keywords",
  sep = ";"
)

net <- networkPlot(NetMatrix,
  normalize = "association",
  n = 50,
  Title = "Keyword Co-occurrences",
  type = "fruchterman",
  #  type = "auto",
  size.cex = TRUE,
  size = 20,
  remove.multiple = T,
  edgesize = 10,
  labelsize = 2,
  curved = T,
  label.cex = TRUE,
  label.n = 30,
  edges.min = 2
)

# save results as CSV
# Loop through all data which type is 'data.frame' in net, save each as CSV
for (i in seq_along(net)) {
  if (is.data.frame(net[[i]])) {
    write.csv(net[[i]], file.path(dir_exports, paste0(SECTION, "_Co-occurrenceNetwork_", names(net)[i], ".csv")))
  }
}
png(file.path(dir_exports, paste0(SECTION, "_Co-occurrenceNetwork_", ".png")), width = 1080, height = 600)
plot(net$graph)
dev.off()

# Thematic Map
Map <- thematicMap(
  M,
  field = "ID",
  n = 250,
  minfreq = 5,
  ngrams = 1,
  stemming = FALSE,
  size = 0.5,
  n.labels = 3,
  community.repulsion = 0.1,
  repel = TRUE,
  remove.terms = NULL,
  synonyms = NULL,
  cluster = "walktrap",
  subgraphs = FALSE
)
# Save results as CSV
for (i in seq_along(Map)) {
  if (is.data.frame(Map[[i]])) {
    write.csv(Map[[i]], file.path(dir_exports, paste0(SECTION, "_ThematicMap_", names(Map)[i], ".csv")))
  }
}

library(dplyr)
Clusters <- Map$words[order(Map$words$Cluster, -Map$words$Occurrences), ]
CL <- Clusters %>%
  group_by(.data$Cluster_Label) %>%
  top_n(5, .data$Occurrences)
View(CL)

png(file.path(dir_exports, paste0(SECTION, "_ThematicMap", ".png")), width = 1080, height = 600)
plot(Map$map)
dev.off()


# net <- networkPlot(Map$net,
#   n = 50,
#   Title = "ThematicMap Network",
#   type = "fruchterman",
#   #type = "auto",
#   cluster = "walktrap",
#   size.cex = TRUE,
#   size = 40,
#   # remove.multiple = FALSE,
#   remove.multiple = TRUE,
#   remove.isolates = TRUE,
#   community.repulsion = 0.08
#   labelsize = 0.7,
#   edgesize = 1,
#   edges.min = 1
# )

# png (file.path(output_dir, paste0(SECTION, "_ThematicMap_Network", ".png")), width = 1080, height = 600)
# plot(Map$net)
# dev.off()


# Plot Coupling Map
Coupling <- couplingMap(
  M,
  analysis = "documents",
  field = "CR",
  n = 550,
  label.term = "ID",
  ngrams = 1,
  impact.measure = "global", # "local",
  minfreq = 5,
  community.repulsion = 0.1,
  stemming = FALSE,
  size = 0.5,
  n.labels = 6,
  repel = TRUE,
  cluster = "walktrap"
)
# Save results as CSV
write.csv(Coupling$data,
  file.path(dir_exports, SECTION + "_Coupling.csv"),
  row.names = FALSE
)

write.csv(Coupling$clusters,
  file.path(dir_exports, SECTION + "_Coupling_clusters.csv"),
  row.names = FALSE
)


# Three Fields Plot
M$PY <- as.character(M$PY) # convert to character
Three <- threeFieldsPlot(M, fields = c("AU", "DE", "PY"), n = c(20, 20, 20))

# save Three Fields Plot results as CSV
write.csv(Three$data,
  file.path(dir_exports, SECTION + "_ThreeFieldsPlot.csv"),
  row.names = FALSE
)

################################
# SECTION 03: SOCIAL STRUCTURE
################################

SECTION <- "S3-SocialStructure"

# # Usage example
# run_bibliometrix_analysis <- function(title, source_dir, output_dir) {
# }
# PlainText <- "~/Documents/obsdiannote/🧪 Script Labs/wos_biliometriex/Augmented Reality_mark1to2000.txt"
# output_dir <- "~/Documents/obsdiannote/🧪 Script Labs/wos_biliometriex/"
# run_bibliometrix_analysis(PlainText, output_dir)
