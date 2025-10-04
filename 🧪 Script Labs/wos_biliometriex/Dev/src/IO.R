library("dplyr")
library("knitr")
library(feather)

query_papers_by_author <- function(authorName, M) {
  # str(M)
  response <- M[grep(authorName, M$AU, ignore.case = TRUE), c("PY", "TI", "AU", "TC", "DI")]
  response <- response[order(-response$TC), ]
  return(response)
}


# Function: sort_by_weight
# Calculates a weight for each paper based on normalized total citations and publication year, then sorts the data by this weight
sort_by_weight <- function(data) {
  # Normalize TC and PY
  data$normalized_TC <- (data$TC - min(data$TC, na.rm = TRUE)) / (max(data$TC, na.rm = TRUE) - min(data$TC, na.rm = TRUE))
  data$normalized_PY <- (data$PY - min(data$PY, na.rm = TRUE)) / (max(data$PY, na.rm = TRUE) - min(data$PY, na.rm = TRUE))

  # Sum the normalized scores to create a composite 'Score'
  data$Score <- data$normalized_TC + data$normalized_PY

  # Sorting the data by the new score in descending order
  sorted_data <- data[order(-data$Score), ]
  return(sorted_data)
}

# Function: sort_by_column
# Sorts the data by a given column name. The function checks if the column exists in the dataset.
# Parameters:
#   - data: The dataset to be sorted.
#   - columnName: The name of the column to sort by.
#   - descending: Logical value to determine if sorting should be in descending order (default is TRUE).
sort_by_column <- function(data, columnName, descending = TRUE) {
  if (!columnName %in% names(data)) {
    stop("Column not found in the dataset.")
  }

  if (descending) {
    sorted_data <- data[order(-data[[columnName]]), ]
  } else {
    sorted_data <- data[order(data[[columnName]]), ]
  }
  return(sorted_data)
}
# Integrated Function
# Executes a series of operations: querying paper data and sorting based on a specified column
# Parameters:
#   - authorName: The name of the author to query papers for.
#   - M: The dataset containing the papers' metadata.
#   - sortColumn: Optional. The name of the column to sort by.
#   - descending: Optional. Boolean to indicate if sorting should be in descending order (default is TRUE).
action_query_papers_by_author <- function(authorName, dir_data_m, sortColumn = NULL, descending = TRUE) {
  M <- read_feather(dir_data_m)

  author_papers <- query_papers_by_author(authorName, M)

  if (!is.null(sortColumn)) {
    sorted_papers <- sort_by_column(author_papers, sortColumn, descending)
    return(sorted_papers)
  } else {
    return(author_papers)
  }
}
# # usage example:
# dir_data <- file.path(dir_searching, "exports")
# dir_M_data <- file.path(dir_exports, "M.feather")
# papers <- action_query_papers_by_author("LI Z", dir_data, "TC", TRUE)








# Function: sortPapersByClusterCitations
# Description: Retrieves all papers of a specific cluster (arrays of keywords) from a given dataset and sorts them by total citation in descending order.
# Parameters:
#   - cluster: The array of keywords to retrieve papers for. function will search for papers that contain any of the keywords in the array.
#   - metaTag: The tag of the metadata to indicate the keyword type search for.
#   - metaDataset: The dataset containing the papers' metadata.
# Returns: A dataframe containing the papers' title, author list, total citation, publication year, keyword Authors, keyword Plus, and DOI.
# Usage example:
# cluster <- c("system", "surgery", "simulation")
# # upper case all keywords in cluster
# cluster <- toupper(cluster)
# metaTag <- "ID" # DE: Author Keywords; ID: Keywords Plus
# clusterPapers <- sort_cluster_by_citations(cluster, metaTag, M)
# # testclusterPapers <- M[grepl("VOCABULARY|STORYBOOK|IMPROVE|SYSTEM", M[["ID"]]), ]

query_papers_by_cluster <- function(
    tag = "ID", # DE: Author Keywords; ID: Keywords Plus, AU: Author
    cluster,
    dataset_meta,
    exact_match = FALSE) {
  # Check if the tag exists in the dataset
  if (!any(tag %in% names(dataset_meta))) {
    stop("Column not found in the dataset.")
  } else if (tag == "AU") {
    exact_match <- TRUE
  }

  # Convert cluster to uppercase if not already
  cluster <- toupper(cluster)

  # Create a regular expression pattern from the cluster keywords
  pattern <- paste(cluster, collapse = "|")

  # Efficient keyword filtering using vectorized grepl
  cluster_papers <- dataset_meta[grepl(pattern, dataset_meta[[tag]], ignore.case = TRUE), ]

  # Calculate the relevance of the paper's keywords to the keywords within the cluster
  cluster_papers$Rel <- sapply(cluster_papers[[tag]], function(x) {
    keywords <- unlist(strsplit(x, "; "))

    # Match keywords based on exact_match flag
    matches <- if (exact_match) {
      sapply(cluster, function(cl) cl %in% keywords)
    } else {
      sapply(cluster, function(cl) grepl(cl, keywords))
    }

    # Ensure 'matches' is a matrix
    if (is.vector(matches)) {
      matches <- matrix(matches, nrow = 1)
    }

    # Calculate and normalize the score, round to 2 decimal places
    score <- sum(rowSums(matches))
    round(score / length(cluster), 2)
  })
  # if the keywords in cluster not found in the dataset,
  # print(cluster_papers$Rel) is named list()
  # print(cluster_papers$TC) is numeric(0)
  # then return 'the keyword not found'
  if (length(cluster_papers$Rel) == 0) {
    return("the keyword not found")
  }

  # Sort the papers by relevance and then by total citations, both in descending order
  cluster_papers <- cluster_papers[order(-cluster_papers$Rel, -cluster_papers$TC), ]
  # cluster_papers <- cluster_papers[order(-cluster_papers$Rel, -cluster_papers$TC), ]

  # Select specific columns for the final output
  final_columns <- c("PY", "ID", "TC", "DE", "Rel", "TI", "AU")
  cluster_papers <- cluster_papers[, final_columns]

  # handle row names as unique id
  row.names(cluster_papers) <- NULL

  return(cluster_papers)
}




get_summ_png_exports_path <- function(metrics, session, topic) {
  file_name <- paste(session, "-", metrics, "-", topic, sep = "")
  return(file.path(dir_exports, paste(file_name, ".png", sep = "")))
}

get_summ_csv_exports_path <- function(metrics, session, topic) {
  file_name <- paste(session, "-", metrics, "-", topic, sep = "")
  return(file.path(dir_exports, paste(file_name, ".csv", sep = "")))
}

# search plot in output dir
# write markdown plot to md with name
write_plot_markdown <- function(metrics, session, plotlist) {
  path_img <- get_summ_png_exports_path(metrics, session, query)
  md_string <- paste(
    "\n[", metrics, "](", metrics, ")\n",
    "![", metrics, "](file://", path_img, ")\n\n\n",
    sep = ""
  )
  return(md_string)
}


# Function: sortPapersByKeywordCitations
# Description: Retrieves all papers of a specific keyword authors or Keyword Plus from a given dataset and sorts them by total citation in descending order.
# Parameters:
#   - keyword: The name of the keyword to retrieve papers for.
#   - metaTag: The tag of the metadata to search for the keyword.
#   - metaDataset: The dataset containing the papers' metadata.
# Returns: A dataframe containing the papers' title, author list, total citation, publication year, and DOI.
# Usage example:
# keyword <- "System"
# metaTag <- "DE" # DE: Author Keywords; ID: Keywords Plus
# keywordPapers <- sortPapersByKeywordCitations(keyword, metaTag, M)
sortPapersByKeywordCitations <- function(keyword, metaTag, metaDataset) {
  keywordPapers <- metaDataset[grepl(keyword, metaDataset[[metaTag]]), ]
  keywordPapers <- keywordPapers[order(keywordPapers$TC, decreasing = TRUE), ]
  keywordPapers <- keywordPapers[, c("TC", "TI", "AU", "PY", "DI")]
  colnames(keywordPapers) <- c("TotalCitation", "Title", "Author", "PublicationYear", "DOI")
  write.csv(keywordPapers, file.path(dir_exports, paste0(keyword, ".csv")), row.names = FALSE)
  # return(keywordPapers)
}



write_summ_info_to_matadata <- function(searching, info) {
  # Option: rewrite description with short and readable to computer
  # for exampe, "International co-authorships %" to "international_co_authorships" # nolint: line_length_linter.
  # description <- gsub(" ", "_", description) # nolint: commented_code_linter.

  # info should be a dataframe:
  #                             Description   Results
  # 1         MAIN INFORMATION ABOUT DATA
  # 2                            Timespan 1998:2023
  # 3      Sources (Journals, Books, etc)      1157
  # 4                           Documents      2000
  # 5                Annual Growth Rate %     19.45
  # 6                Document Average Age      7.35
  # 7           Average citations per doc     11.97
  # 8  Average citations per year per doc     1.507
  # 9                          References     36222
  # 10                     DOCUMENT TYPES
  # 11                            article       381
  # 12              article; early access         9
  # 13         article; proceedings paper        26
  # 14                 editorial material         2
  # 15                  proceedings paper      1493
  # 16                             review        84
  # 17               review; book chapter         1
  # 18               review; early access         4
  # 19                  DOCUMENT CONTENTS
  # 20                 Keywords Plus (ID)       885
  # 21             Author's Keywords (DE)      3871
  # 22                            AUTHORS
  # 23                            Authors      5969
  # 24                 Author Appearances      7564
  # 25    Authors of single-authored docs       131
  # 26              AUTHORS COLLABORATION
  # 27               Single-authored docs       137
  # 28               Documents per Author     0.335
  # 29                 Co-Authors per Doc      3.78
  # 30     International co-authorships %      16.6


  # interate over row in info, and write to md's metadata
  write_md_metadata <- function(description, results) {
    # ex: "description::results"
    return(paste(
      description, ":: ", results, "\n",
      sep = ""
    ))
  }
  md_string <- paste(
    "Searching:: ", searching, "\n",
    sep = ""
  )
  for (i in seq_len(nrow(info))) {
    row <- info[i, ]
    # if results is not NULL, then write metadata
    if (!is.null(row$Results) && row$Results != "") {
      md_string <- paste(
        md_string,
        write_md_metadata(row$Description, row$Results)
      )
    }
  }


  return(md_string)
}


write_summ_info_to_description <- function(searching, info) {
  # Using the keys in the dataframe below, generate a descriptive template that
  # includes all the information in the dataframe.
  # Use curly brackets as placeholders for the keys from the dataframe.
  # info should be a dataframe:
  #                             Description   Results
  # 1         MAIN INFORMATION ABOUT DATA
  # 2                            Timespan 1998:2023
  # 3      Sources (Journals, Books, etc)      1157
  # 4                           Documents      2000
  # 5                Annual Growth Rate %     19.45
  # 6                Document Average Age      7.35
  # 7           Average citations per doc     11.97
  # 8  Average citations per year per doc     1.507
  # 9                          References     36222
  # 10                     DOCUMENT TYPES     NULL
  # 11                            article       381
  # 12              article; early access         9
  # 13         article; proceedings paper        26
  # 14                 editorial material         2
  # 15                  proceedings paper      1493
  # 16                             review        84
  # 17               review; book chapter         1
  # 18               review; early access         4
  # 19                  DOCUMENT CONTENTS
  # 20                 Keywords Plus (ID)       885
  # 21             Author's Keywords (DE)      3871
  # 22                            AUTHORS   NULL
  # 23                            Authors      5969
  # 24                 Author Appearances      7564
  # 25    Authors of single-authored docs       131
  # 26              AUTHORS COLLABORATION
  # 27               Single-authored docs       137
  # 28               Documents per Author     0.335
  # 29                 Co-Authors per Doc      3.78
  # 30     International co-authorships %      16.6
  # 31     Searching: "sustainable development"

  template <- paste(
    "%%This is a Bibliometric analysis focused on {{Searching}}.

This analysis covers the timespan {{Timespan}}, drawing from {{Sources (Journals, Books, etc)}} sources including journals, books, and other documents, totaling {{Documents}} documents. During this period, the field experienced an annual growth rate of {{Annual Growth Rate %}}, with the average age of documents being {{Document Average Age}} years. On average, each document received {{Average citations per doc}} citations, amounting to {{Average citations per year per doc}} citations per year, contributing to a total of {{References}} references.

The document types in this analysis include {{article}} articles, {{article; early access}} articles in early access, {{article; proceedings paper}} articles that are proceedings papers, {{editorial material}} editorial materials, {{proceedings paper}} proceedings papers, {{review}} reviews, {{review; book chapter}} book chapter reviews, and {{review; early access}} early access reviews.

In the realm of document contents, there are {{Keywords Plus (ID)}} instances of Keywords Plus and {{Author's Keywords (DE)}} Author's Keywords. The number of authors involved is {{Authors}}, with a total of {{Author Appearances}} author appearances. Among these, {{Authors of single-authored docs}} authors have produced single-authored documents.

Focusing on author collaboration, there are {{Single-authored docs}} single-authored documents. On average, there are {{Documents per Author}} documents per author and {{Co-Authors per Doc}} co-authors per document. The rate of international co-authorships in this field is {{International co-authorships %}}.%%",
    sep = ""
  )
  # Replace Template with searching
  template <- gsub("\\{\\{Searching\\}\\}", paste0("`", searching, "`"), template)

  # Replace the keys with the values from the dataframe
  for (i in seq_len(nrow(info))) {
    if (is.null(info[i, "Results"]) || info[i, "Results"] == "") {
      next
    }
    row <- info[i, ]
    key <- gsub("(['()])", "\\\\\\1", row$Description) # Escape special characters
    template <- gsub(
      paste0("\\{\\{", key, "\\}\\}"),
      paste0("`", row$Results, "`"),
      template
    )
  }
  return(template)
}

