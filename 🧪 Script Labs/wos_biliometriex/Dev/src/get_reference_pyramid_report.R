# It's a structured approach using a "Impact Pyramid" model
# to categorize and prioritize research papers.

# Classic Paper (Apex of the Pyramid):
#   This is a foundational paper in the research field,
#   usually written by a highly respected scholar.
#   It introduces the fundamental concepts and theories
#   that define the entire research area. Citing this paper
#   helps to establish the domain of your research and pays
#   homage to its pioneering author.

# - Core Papers (Middle Layer of the Pyramid): These are four
#   significant papers written by leading scholars, often
#   current academic stars. These papers build upon the
#   classic paper's insights, offering more practical and
#   advanced theoretical frameworks and research methodologies.
#   They often lead current trends in the field.
# - Supporting Papers (Base of the Pyramid): These consist of
#   ten papers that apply the theories and methods from the
#   core papers to real-world issues, contributing tangible
#   case studies to the field. They help in identifying
#   research gaps and learning how to apply established
#   theories and methods to specific research questions.
# (-- `15篇文献的独门配方，产出一篇高质量rp！`[xiaohongshu](https://www.xiaohongshu.com/explore/64426cb900000000130126d5?app_platform=ios&app_version=8.23.2&author_share=1&share_from_user_hidden=true&type=video&xhsshare=CopyLink&appuid=61aa31f5000000000202472e&apptime=1706497377)) # nolint: line_length_linter.
# The following function is a test to hightlight the most
# referenced papers in a given dataset
# function name: Reference_Pyramid as helper to remember the
# purpose of the research


library(feather)
library(dplyr)
library(tidyr)
library(knitr)
library(plotly)
library(paletteer)
library(bibliometrix)

# Ensure necessary packages are installed and loaded
if (!requireNamespace("paletteer", quietly = TRUE)) {
  install.packages("paletteer")
}
if (!requireNamespace("bezier", quietly = TRUE)) {
  install.packages("bezier")
}



doiExtract <- function(text) {
  # Regular expression pattern to match DOI formats, capturing addresses with or without 'DOI' prefix
  pattern <- "(?:DOI\\s+)?([0-9\\.]+/[\\w\\d\\.\\-\\/_]+)"

  # Extract matches
  matches <- gregexpr(pattern, text, perl = TRUE)
  all_dois <- regmatches(text, matches)

  # Process each match to remove duplicates and concatenate addresses
  extracted_dois <- sapply(all_dois, function(doi_group) {
    unique_dois <- unique(doi_group)
    # Concatenate unique DOI addresses with ';'
    paste(unique_dois, collapse = ";")
    # Remove 'DOI' prefix from each address
    paste(sub("DOI\\s+", "", unique_dois), collapse = ";")
  })

  return(extracted_dois)
}


# (-- `bibliometrix/R/rpys.R at 2f2c03b9bc0068992af66940a6e9399935b5137a · massimoaria/bibliometrix` [github](https://github.com/massimoaria/bibliometrix/blob/2f2c03b9bc0068992af66940a6e9399935b5137a/R/rpys.R#L21))
##' Reference Publication Year Spectroscopy
#'
#' \code{rpys} computes a Reference Publication Year Spectroscopy for detecting
#' the Historical Roots of Research Fields.
#' The method was introduced by Marx et al., 2014.\cr\cr
#'
#' Reference:\cr
#' Marx, W., Bornmann, L., Barth, A., & Leydesdorff, L. (2014).
#' Detecting the historical roots of research fields by reference publication
#' year spectroscopy (RPYS). Journal of the Association for Information Science and Technology,
#' 65(4), 751-764.\cr\cr
#'
#' @param M is a data frame obtained by the converting function
#'   \code{\link{convert2df}}. It is a data matrix with cases corresponding to
#'   articles and variables to Field Tag in the original ISI or SCOPUS file.
#' @param sep is the cited-references separator character. This character separates cited-references in the CR
#' column of the data frame. The default is \code{sep = ";"}.
#' @param timespan is a numeric vector c(min year,max year). The default value is NULL (the entire timespan is considered).
#' @param graph is a logical. If TRUE the function plot the spectroscopy otherwise the plot is created but not drawn down.
#' @return a list containing the spectroscopy (class ggplot2) and three dataframes with the number of citations
#' per year, the list of the cited references for each year, and the reference list with citations recorded year by year, respectively.
#'
#'
#' @examples
#'
#'
#' data(scientometrics, package = "bibliometrixData")
#' res <- rpys(scientometrics, sep = ";", graph = TRUE)
#'
#' @seealso \code{\link{convert2df}} to import and convert an ISI or SCOPUS
#'   Export file in a data frame.
#' @seealso \code{\link{biblioAnalysis}} to perform a bibliometric analysis.
#' @seealso \code{\link{biblioNetwork}} to compute a bibliographic network.
#' @export

me_rpys <- function(M, sep = ";", timespan = NULL, graph = T) {
  options(dplyr.summarise.inform = FALSE)

  M$CR <- gsub("DOI;", "DOI ", as.character(M$CR))

  Fi <- strsplit(M[, "CR"], sep)
  Fi <- lapply(Fi, trim.leading)
  Fi <- lapply(Fi, function(l) l <- l[nchar(l) > 10])
  citingYears <- rep(M$PY, lengths(Fi))
  Fi <- (unlist(Fi))

  df <- data.frame(Reference = Fi, citingYears = citingYears, fullReference= Fi) %>%
    mutate(Reference = refCleaning(.data$Reference, db = M$DB[1]))
  df$citedYears <- as.numeric(yearExtract(df$Reference, db = M$DB[1]))

  df <- df %>%
    dplyr::filter(!is.na(.data$Reference) & !is.na(.data$fullReference) & .data$citedYears > 1700 & .data$citedYears <= as.numeric(substr(Sys.Date(), 1, 4))) %>%
    group_by(.data$citedYears, .data$citingYears, .data$Reference, .data$fullReference) %>%
    summarize(citations = n()) %>%
    group_by(.data$citedYears, .data$citingYears) %>%
    mutate(
      benchmark = mean(.data$citations, na.rm = T),
      status = sign(.data$citations - .data$benchmark)
    ) %>%
    ungroup() %>%
    arrange(.data$citedYears, .data$Reference, .data$citingYears, .data$fullReference)



  # Integration of doiExtract function after df is fully formed
  # df$doi <- sapply(as.character(df$fullReference), doiExtract)
  # Modify the application of doiExtract in me_rpsy function
  



  CR <- df %>%
    group_by(.data$citedYears, .data$Reference, .data$fullReference) %>%
    select(-.data$citingYears, -.data$status) %>%
    summarize(Freq = sum(.data$citations))

  RPYS <- CR %>%
    select(-.data$Reference) %>%
    group_by(.data$citedYears)   %>%
    summarize(n = sum(.data$Freq, na.rm = TRUE))

  yearSeq <- RPYS$citedYears
  missingYears <- setdiff(seq(min(yearSeq), max(yearSeq)), yearSeq)
  RPYS[(nrow(RPYS) + 1):(nrow(RPYS) + length(missingYears)), ] <- rbind(cbind(missingYears, rep(0, length(missingYears))))
  RPYS <- RPYS %>% arrange(.data$citedYears)


  ## calculating running median
  YY <- c(rep(0, 4), RPYS$n)
  Median <- numeric(nrow(RPYS))
  for (i in 5:length(YY)) {
    Median[i - 4] <- median(YY[(i - 4):i])
  }
  ####
  # Median=runmed(Y,5)
  RPYS$diffMedian <- RPYS$n - Median



  if (length(timespan) == 2) {
    RPYS <- RPYS %>%
      dplyr::filter(.data$citedYears >= min(timespan) &
        .data$citedYears <= max(timespan))
  }
  names(RPYS) <- c("Year", "Citations", "diffMedian5")

  RPYS <- RPYS %>%
    mutate(diffMedian = ifelse(.data$diffMedian5 > 0, .data$diffMedian5, 0))

  # remove logo
  # data("logo", envir = environment())
  # logo <- grid::rasterGrob(logo, interpolate = TRUE)

  x <- c(min(RPYS$Year), min(RPYS$Year) + diff(range(RPYS$Year)) * 0.125) + 1
  y <- c(min(c(RPYS$Citations, RPYS$diffMedian)), min(c(RPYS$Citations, RPYS$diffMedian)) + diff(range(c(RPYS$Citations, RPYS$diffMedian))) * 0.125) * 1.05



  g <- ggplot(RPYS, aes(x = .data$Year, y = .data$Citations, text = paste("Year: ", .data$Year, "\nN. of References: ", .data$Citations))) +
    geom_line(aes(group = "NA")) +

    geom_line(aes(x = .data$Year, y = .data$diffMedian, color = "firebrick", group = "NA")) +
    labs(
      x = "Year",
      y = "Cited References",
      title = "Reference Publication Year Spectroscopy",
      caption = "Number of Cited References (black line) - Deviation from the 5-Year Median (red line)"
    ) +
    scale_x_continuous(breaks = (RPYS$Year[seq(1, length(RPYS$Year), by = round(length(RPYS$Year) / 30))])) +
    theme(
      text = element_text(color = "#444444"), legend.position = "none",
      plot.caption = element_text(
        size = 9, hjust = 0.5,
        color = "black", face = "bold"
      ),
      panel.background = element_rect(fill = "#FFFFFF")
      # ,panel.grid.minor = element_line(color = '#FFFFFF')
      , panel.grid.major = element_line(color = "#EFEFEF"),
      plot.title = element_text(size = 24),
      axis.title = element_text(size = 14, color = "#555555"),
      axis.title.y = element_text(vjust = 1, angle = 90),
      axis.title.x = element_text(hjust = 0.95, angle = 0),
      axis.text.x = element_text(size = 8, angle = 90),
      axis.line.x = element_line(color = "black", size = 0.5),
      axis.line.y = element_line(color = "black", size = 0.5)
    ) 
    # remove logo
    # +
    # annotation_custom(logo, xmin = x[1], xmax = x[2], ymin = y[1], ymax = y[2])

  if (isTRUE(graph)) {
    plot(g)
  }
  CR$Reference <- reduceRefs(CR$Reference)
  CR <- CR %>%
    rename(Year = .data$citedYears) %>%
    ungroup()
  result <- list(
    spectroscopy = g,
    rpysTable = RPYS,
    CR = CR %>% mutate(Year = as.character(.data$Year)),
    df = df
  )
  return(result)
}

yearExtract <- function(string, db) {
  if (db == "ISI") {
    ind <- regexpr(" [[:digit:]]{4} ", string)
    ind[is.na(ind)] <- -1
    string[ind == -1] <- " 0000 "
    ind[ind == -1] <- 1
    attr(ind[ind == -1], "match.length") <- 6
    y <- trim(unlist(regmatches(string, ind)))
  } else {
    ind <- regexpr("\\([[:digit:]]{4}\\)", string)
    ind[is.na(ind)] <- -1
    string[ind == -1] <- "(0000)"
    ind[ind == -1] <- 1
    attr(ind[ind == -1], "match.length") <- 6
    y <- unlist(regmatches(string, ind))
    y <- substr(y, 2, 5)
  }
  return(y)
}

reduceRefs <- function(A) {
  ind <- unlist(regexec("*V[0-9]", A))
  A[ind > -1] <- substr(A[ind > -1], 1, (ind[ind > -1] - 1))
  ind <- unlist(regexec("*DOI ", A))
  A[ind > -1] <- substr(A[ind > -1], 1, (ind[ind > -1] - 1))
  return(A)
}

refCleaning <- function(l, db) {
  if (db == "ISI") {
    # ref<-unlist(lapply(Fi, function(l){
    l <- gsub("\\).*", ")", l)
    l <- gsub(",", " ", l)
    l <- gsub(";", " ", l)
    l <- gsub("\\.", " ", l)
    l <- trimws(trimES(l))
    l <- l[nchar(l) > 0]
    # return(l)
    # }))
  } else {
    # ref<-unlist(lapply(Fi, function(l){
    l <- gsub(",", " ", l)
    l <- gsub(";", " ", l)
    l <- gsub("\\.", " ", l)
    l <- trimws(trimES(l))
    l <- l[nchar(l) > 0]
    return(l)
    # }))
  }
  return(l)
}



find_related_papers <- function(dataframe, reference_name) {
  # Example: referenceName could be
  # "BRAUN VIRGINIA 2006 QUAL RES PSYCHOL"
  # "BRAUN VIRGINIA., 2006, QUAL. RES. PSYCHOL, V3, P77, DOI DOI ..",
  # "BRAUN VIRGINIA 2006 QUAL RES PSYCHOL",
  # "BRAUN VIRGINIA 2006",
  # "FORNELL C 1981",
  # Simplify the reference name for flexible matching
  simplified_reference_name <- tolower(gsub("[[:punct:] ]", "", reference_name))

  # Function to simplify the CR field
  simplify_cr <- function(cr) {
    sapply(cr, function(x) tolower(gsub("[[:punct:] ]", "", x)))
  }

  # Simplify the CR field in the data frame
  simplified_cr <- simplify_cr(dataframe$CR)

  # Find matches with the simplified reference name
  matches <- grep(simplified_reference_name, simplified_cr)

  # Select the relevant rows and columns from the original data frame
  result_dataframe <- dataframe[matches, c("TI", "PY", "TC", "DI")]

  # Add the SR field to the resultDataFrame$classicRef
  result_dataframe$classicRef <- reference_name

  return(result_dataframe)
}

# Reference_Pyramid, create a dataframe contain classicRef, relatedPapers
reference_pyramid <- function(top_classic_num, dataFrame) {
  # find the top n referenced papers
  spectroscopy <- me_rpys(dataFrame)
  # Find the top 5 most referenced papers
  cr <- spectroscopy[["CR"]]
  cr <- cr[order(spectroscopy[["CR"]]$Freq, decreasing = TRUE), ]
  cr <- cr[1:top_classic_num, ]
  # create an empty dataframe
  Related <- data.frame(
    TI = character(),
    TC = numeric(),
    PY = numeric(),
    classicRef = character()
  )

  Classic <- cr
  # loop through the top 5 most referenced papers, and find the related papers

  for (i in seq_len(nrow(cr))) {
    # find the related papers
    rp <- find_related_papers(dataFrame, cr[i, ]$Reference)
    for (i in seq_len(nrow(rp))) {
      ti <- rp$TI[i]
      idx <- which(Related$TI == ti)

      if (length(idx) == 0) {
        # Title not seen before, append new row
        new_row <- data.frame(
          TI = ti,
          TC = rp$TC[i],
          PY = rp$PY[i],
          classicRef = rp$classicRef[i],
          stringsAsFactors = FALSE
        )
        Related <- rbind(Related, new_row)
      } else {
        # Title found, add to Classic with sep = ";"
        Related$classicRef[[idx]] <-
          paste(Related$classicRef[[idx]], rp$classicRef[[i]], sep = ";")
      }
    }
  }
  # return two dataframe contain classicRef and Related
  return(list(
    Classic = Classic,
    Related = Related,
    plot_spectroscopy = spectroscopy
  ))
}






# Plotting an Interactive Network Graph of Classic and Related Papers
# This code generates an interactive network graph using the plotly library
# in R. The graph consists of two types of nodes: classic papers and related
# papers.

# Classic papers are represented by gray circles, with the reference name
# extracted from RP$Classic$Reference. The size of the circles is determined
# by RP$Classic$Freq, and the x-axis represents the publication year of the
# classic papers. The y-axis position of the classic papers is arbitrary
# but non-overlapping.

# Related papers are represented by white circles, with the title extracted
# from RP$Related$TI. The size of the circles is determined by RP$Related$TC.
# Each related paper is connected to the corresponding classic papers
# (separated by ';') from RP$Related$classicRef using lines with arrowheads.
# The x-axis position of each related paper is aligned with its publication
# year (RP$Related$PY).

# Both classic and related papers can be moved within the graph. The x-axis
# represents the years, and the y-axis represents the number of citations.
# The range of the x-axis covers both the publication years of the classic
# papers (RP$Classic$Year) and the publication years of
# the related papers (RP$Related$PY).

# The resulting graph provides an interactive visualization of the relationships
# between classic and related papers based on their publication years and
# citation counts.# > str(RP)

# List of 2
#  $ Classic: tibble [5 × 3] (S3: tbl_df/tbl/data.frame)
#   ..$ Year     : chr [1:5] "2006" "1981" "1989" "2010" ...
#   ..$ Reference: chr [1:5] "BRAUN VIRGINIA 2006 QUAL RES " "FORNELL  ...
#   ..$ Freq     : int [1:5] 116 76 70 66 51
#  $ Related:'data.frame':	305 obs. of  4 variables:
#   ..$ TI        : chr [1:305] "STRUCTURING KNOWLEDGE-BUILDING  ...
#   ..$ TC        : num [1:305] 3 6 2 4 7 0 0 0 0 12 ...
#   ..$ PY        : num [1:305] 2023 2017 2022 2021 2021 ...
#   ..$ classicRef: chr [1:305] "GÜLER K, 2023, INT J ...



# Data Preparation
prepare_data <- function(RP) {
  if (is.null(RP$Classic) || is.null(RP$Related)) {
    stop("Error: 'RP$Classic' or 'RP$Related' is NULL. Please check your data.")
  }

  classic_data <- RP$Classic %>%
    mutate(type = "classic", label = Reference, size = Freq / max(Freq) * 80)

  related_data <- RP$Related %>%
    rename(Year = PY) %>%
    mutate(type = "related", label = TI, size = TC / max(TC) * 80)

  classic_data$Year <- as.numeric(classic_data$Year)
  related_data$Year <- as.numeric(related_data$Year)

  classic_data$y_position <-
    seq(1, nrow(classic_data), length.out = nrow(classic_data))
  related_data$y_position <-
    seq(1, nrow(related_data), length.out = nrow(related_data))

  classic_data$color <-
    paletteer_d(palette = "ggsci::nrc_npg", n = nrow(classic_data))
  related_data$color <-
    "#040404"

  return(list(classic = classic_data, related = related_data))
}

# Function to plot nodes with text labels only for classic nodes
plot_nodes <- function(p, data, node_type) {
  if (node_type == "classic") {
    # Classic nodes: with text
    p <- p %>% add_trace(
      data = data,
      x = ~Year, y = ~y_position,
      type = "scatter",
      mode = "markers+text", # Adding text to markers for classic nodes
      marker = list(size = ~size, color = data$color, line = list(width = 0)),
      text = ~label,
      textposition = "bottom center", # Position text below classic nodes
      textfont = list(size = 8), # Text font size for classic nodes
      hoverinfo = "text"
    )
  } else {
    # Related nodes: without text
    p <- p %>% add_trace(
      data = data,
      text = ~label,
      x = ~Year, y = ~y_position,
      type = "scatter", mode = "markers", # No text for related nodes
      marker = list(size = ~size, color = data$color, line = list(width = 0)),
      hoverinfo = "text"
    )
  }

  return(p)
}

add_smooth_curved_edges <- function(p, related_data, classic_data) {
  for (i in seq_len(nrow(related_data))) {
    related_paper <- related_data[i, ]
    classic_refs <- strsplit(related_paper$classicRef, ";")[[1]]

    for (ref in classic_refs) {
      classic_paper <- classic_data[classic_data$Reference == ref, ]
      if (nrow(classic_paper) == 1) {
        # Manually calculate intermediate points for a smoother curve
        curve_x <- seq(related_paper$Year, classic_paper$Year, length.out = 100)
        curve_y <- sapply(curve_x, function(x) {
          start_x <- related_paper$Year
          end_x <- classic_paper$Year
          start_y <- related_paper$y_position
          end_y <- classic_paper$y_position
          mid_y <- max(start_y, end_y) + 4
          ((1 - ((x - start_x) / (end_x - start_x)))^2 * start_y) +
            (2 * (1 - ((x - start_x) / (end_x - start_x))) *
              ((x - start_x) / (end_x - start_x)) * mid_y) +
            (((x - start_x) / (end_x - start_x))^2 * end_y)
        })

        p <- p %>% add_trace(
          x = curve_x, y = curve_y,
          type = "scatter", mode = "lines",
          line = list(color = classic_paper$color, width = 1, opacity = 0.5),
          hoverinfo = "none"
        )
      }
    }
  }
  return(p)
}



# Function to create kables with classic papers as headings
prepare_data_for_kable_per_classic <- function(data, classic_papers) {
  tables <- list()
  for (classic_paper_reference in classic_papers$Reference) {
    table_data <- filter(data, classicRef == classic_paper_reference)
    if (nrow(table_data) > 0) {
      # Create table

      table <- table_data %>%
        select(TI, PY, TC)
        # add DI

      # covert to df
      table <- as.data.frame(table)
      tables[[classic_paper_reference]]$fullReference <-
          filter(classic_papers, Reference == classic_paper_reference)['fullReference']
      tables[[classic_paper_reference]]$table <- table
    }
  }
  return(tables)
}


get_reference_pyramid <- function(top_classic_num = 4, top_tc_num = top_tc_num, dataFrame) {
  # Generate Reference Pyramid top 4
  # Also return plot on spectroscopy$spectroscopy
  ref_pyramid <- reference_pyramid(top_classic_num = top_classic_num, dataFrame = dataFrame)
  # May filter by H-index ...
  # filter by TC > 40
  ref_pyramid$Related <-
    ref_pyramid$Related[
      order(ref_pyramid$Related$TC, decreasing = TRUE) &
        ref_pyramid$Related$TC > top_tc_num,
    ]

  # Generate Plotly
  # Prepare data
  data <- prepare_data(ref_pyramid)
  # **** ref_pyramid$Classic$Reference

  p <- plot_ly()
  # Add classic and related papers as nodes
  p <- plot_nodes(p, data$classic, "classic")
  p <- plot_nodes(p, data$related, "related")
  # Add curved edges
  p <- add_smooth_curved_edges(p, data$related, data$classic)
  # Layout adjustments
  p <- p %>% layout(
    title = "Reference Pyramid Graph",
    xaxis = list(title = "Year"),
    yaxis = list(title = "(H-index?)")
  )

  # Render the plot
  # p


  # Kable
  # Process the data
  processed_data <- ref_pyramid$Related %>%
    mutate(classicRef = strsplit(as.character(classicRef), ";")) %>%
    unnest(cols = c(classicRef)) %>%
    group_by(classicRef) %>%
    select(-classicRef) %>%
    ungroup()

  # Create tables
  classic_papers <- ref_pyramid$Classic
  all_tables <- prepare_data_for_kable_per_classic(processed_data, classic_papers)

  # Display all tables
  #  (in an R Markdown document, use 'knitr::kable' to render these tables)
  return(list(
    plotly_pyramid = p,
    df_pyramid = all_tables,
    plot_spectroscopy = ref_pyramid$plot_spectroscopy
  ))
}


test <- function() {
  # Read the data
  options(repos = c(CRAN = "https://cran.rstudio.com/"))
  Sys.setenv(LANG = "en")
  thematic <- "Online education platform analysis"
  dir_m <- paste0("/Users/yamlam/Documents/obsdiannote/🧪 Script Labs/Thematic/", thematic, "/exports/M.feather") # nolint: line_length_linter.
  m_data <- read_feather(dir_m)
  # Assign SR as column names
  m_data <- as.data.frame(m_data)
  rownames(m_data) <- as.character(m_data$SR)


  # Get the reference pyramid
  ref_pyramid <- get_reference_pyramid(top_classic_num = 4, top_tc_num = 40, dataFrame = m_data)
  # Render the plot
  ref_pyramid$plotly_pyramid
  # Render the tables
  ref_pyramid$kable_pyramid
  # Render the spectroscopy
  ref_pyramid$plot_spectroscopy
  return(ref_pyramid)
}
# debug(prepare_data_for_kable_per_classic)
# test_d <- test()

# library(htmlwidgets)
# htmlwidgets::saveWidget(as_widget(test_d$plotly_pyramid), "/Users/yamlam/Downloads/index.html")
# # save as png
# # reticulate::install_miniconda()
# # reticulate::conda_install('r-reticulate', 'python-kaleido')
# # reticulate::conda_install('r-reticulate', 'plotly', channel = 'plotly')
# # reticulate::use_miniconda('r-reticulate')
# save_image(test_d$plotly_pyramid, "/Users/yamlam/Downloads/index.png")
