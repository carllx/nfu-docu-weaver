library(dplyr)
# This function can pass the list of dataframe as Arguments then It can output the correlations

# The example of the correlations function usage
# # Load the data or combine the data
# rdf <- bib_ana_plot$AverArtCitperYear$data
# res_cor <- cor_analysis(rdf)



cor_analysis <- function(dfs) {
  # Combine a list dataframes into one from a list of dataframes
  df <- do.call(cbind, dfs)
  # Calculate correlations
  correlations <- cor(df)

  # Extract lower triangle
  tri_values <- correlations[lower.tri(correlations)]
  indices <- which(lower.tri(correlations), arr.ind = TRUE)

  # Create dataframe
  cor_df <- data.frame(
    var1 = rownames(correlations)[indices[, 1]],
    var2 = rownames(correlations)[indices[, 2]],
    cor_var = tri_values,
    row.names = NULL
  )

  # Identify strong correlations
  strong_neg <- dplyr::filter(cor_df, cor_var < -0.7)
  strong_pos <- dplyr::filter(cor_df, cor_var > 0.7)

  # Return objects
  result <- list(
    correlations = correlations,
    strong_negative = strong_neg,
    strong_positive = strong_pos
  )

  return(result)
}

# function return markdown of correlations report

generate_cor_md <- function(res_cor) {
  correlations_md <- NULL
  if (!is.null(res_cor$strong_negative) && nrow(res_cor$strong_negative) > 0) {
    correlations_md <- paste(correlations_md, "Strong Negative Correlation: \n")
    for (i in seq_len(nrow(res_cor$strong_negative))) {
      correlations_md <- paste0(
        correlations_md,
        "- `",
        res_cor$strong_negative[i, "var1"], "` and `",
        res_cor$strong_negative[i, "var2"],
        "` with value: ", res_cor$strong_negative[i, "cor_var"],
        "\n",
        sep = ""
      )
    }
  }
  if (!is.null(res_cor$strong_positive) && nrow(res_cor$strong_positive) > 0) {
    correlations_md <- paste(correlations_md, "Strong Positive Correlation: \n")
    for (i in seq_len(nrow(res_cor$strong_positive))) {
      correlations_md <- paste0(
        correlations_md,
        "- `",
        res_cor$strong_positive[i, "var1"], "` and `",
        res_cor$strong_positive[i, "var2"],
        "` with value: ", res_cor$strong_positive[i, "cor_var"],
        "\n",
        sep = ""
      )
    }
  }
  return(correlations_md)
  
}