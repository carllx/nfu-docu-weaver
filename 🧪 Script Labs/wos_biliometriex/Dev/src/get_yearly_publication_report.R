## Yearly Evolution of Publications
# Usage:
# source(file.path(current_path, "get_yearly_publication_report.R"))
# publication_data <- get_yearly_publication_report(rmap$AverArtCitperYear$data)
## write to csv
# write.csv(publication_data$publication_data, file = "AnnualProdution.csv", row.names = FALSE)
## show plot
# publication_data$pic
# # Write a no standardized data to csv
# publication_data$std_publication_data %>% select(Year, Articles) %>% write.csv(file = "AnnualProdution_std.csv", row.names = FALSE)


library(magrittr)
library(dplyr)
library(ggplot2)
library(plotly)

get_yearly_publication_report <- function(AverArtCitperYearData) {
  publication_data <- AverArtCitperYearData
  # 1. Delete CitableYears column
  publication_data$CitableYears <- NULL
  # rename N column to 'Articles'
  publication_data <- publication_data %>% rename(Articles = N)

  # 2. Standardize columns to 0-1 range
  # (There is a Option use library(scales) for Standardize columns)
  std_publication_data <- publication_data %>%
    mutate(
      MeanTCperYear_std = MeanTCperYear / max(MeanTCperYear),
      MeanTCperArt_std = MeanTCperArt / max(MeanTCperArt),
      N_std = Articles / max(Articles)
    )

  # 3. Plot with ggplot
  pic <- ggplot(std_publication_data, aes(x = Year)) +
    geom_line(aes(y = MeanTCperYear_std, color = "MeanTCperYear")) +
    geom_line(aes(y = MeanTCperArt_std, color = "MeanTCperArt")) +
    geom_ribbon(aes(ymin = 0, ymax = N_std, fill = "N"),
                alpha = 0.3
    ) +
    scale_color_manual(
      name = "Indicator",
      values = c(
        "MeanTCperYear" = "red",
        "MeanTCperArt" = "blue"
      )
    ) +
    scale_fill_manual(
      name = "AnnualProdution",
      values = c("N" = "darkgray")
    ) +
    labs(
      title = "Yearly Evolution of Publications",
      y = "Standardized Score"
    )
  # return plot, no standardized data and standardized data
  return(list(
    pic = pic,
    publication_data = publication_data,
    std_publication_data = std_publication_data
  ))
}

# create a interactive plot with plotly
get_yearly_publication_report_interative <- function(AverArtCitperYearData) {
  publication_data <- AverArtCitperYearData
  # 1. Delete CitableYears column
  publication_data$CitableYears <- NULL
  # rename N column to 'Articles'
  publication_data <- publication_data %>% rename(Articles = N)

  # 2. Standardize columns to 0-1 range
  # (There is a Option use library(scales) for Standardize columns)
  std_publication_data <- publication_data %>%
    mutate(
      MeanTCperYear_std = MeanTCperYear / max(MeanTCperYear),
      MeanTCperArt_std = MeanTCperArt / max(MeanTCperArt),
      N_std = Articles / max(Articles)
    )

  # 3. Plot with plotly
  pic <- plot_ly(std_publication_data, x = ~Year) %>%
    add_lines(y = ~MeanTCperYear_std, name = "MeanTCperYear") %>%
    add_lines(y = ~MeanTCperArt_std, name = "MeanTCperArt") %>%
    add_ribbons(ymin = 0, ymax = ~N_std, name = "N", fillcolor = "darkgray") %>%
    layout(
      title = "Yearly Evolution of Publications",
      yaxis = list(title = "Standardized Score")
    )
  # return plot, no standardized data and standardized data
  return(list(
    pic = pic,
    publication_data = publication_data,
    std_publication_data = std_publication_data
  ))
   
}