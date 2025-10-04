 [[Bibliometrix/Structure/Intellectual]] 
 ![150|](https://i.imgur.com/cVC9ifJ.webp)

通过 papar 的引用关系可以观察:
- Short id (1st Author, Year)
- Document Title
- Authors' Keywords
- Keywords Plus

(-- `histPlot: Plotting historical co-citation network in bibliometrix: Comprehensive Science Mapping Analysis` [rdrr](https://rdrr.io/cran/bibliometrix/man/histPlot.html)) 


Help me fixes the issue.
I got errors: 
```shell
> histResults <- histNetwork(m_data, sep = " ")
WOS DB:
Searching local citations (LCS) by reference items (SR) and DOIs...

Analyzing 1197985 reference items...
Error in strsplit(M[, Field], sep) : non-character argument
In addition: Warning message:
Setting row names on a tibble is deprecated. 

# Check the structure of m_data$SR with str(m_data$SR) to confirm it's not a character vector
> str(m_data$SR)
 chr [1:3510] "ZHANG GG, 2016, INT CONF COMP SCI ED" "CHEN X, 2020, INT J EMERG TECHNOL" ...
> class(m_data$SR)
[1] "character" 
> print(management$SR[1:5])
[1] "PESTANA MH, 2019, TOUR MANAG PERSPECT" "ABRAMO G, 2019, TECHNOVATION"         
[3] "CHIU V, 2019, INT J ACCOUNT INF SY"    "BEHREND J, 2019, ACCOUNT HIST REV"    
[5] "PETERSOHN S, 2018, SCI PUBL POLICY"   
> print(m_data$SR[1:5])
[1] "ZHANG GG, 2016, INT CONF COMP SCI ED" "CHEN X, 2020, INT J EMERG TECHNOL"   
[3] "EL BOGHDADY M, 2019, EUR SURG"        "NIAN LH, 2019, INT J CONTIN ENG EDU" 
[5] "CHEN TG, 2020, HEALTHCARE-BASEL"  
```


my code:
```R
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
test_data <- m_data[1:5, -which(names(m_data) == "SR")]
histResults <- histNetwork(management, min.citations = 0, sep = ";") # it works!
# have tried to convert to character but still not working
m_data$SR <- as.character(m_data$SR) # Error in strsplit(M[, Field], sep) : non-character argument
m_data$SR <- as.character(as.vector(m_data$SR)) # Error in strsplit(M[, Field], sep) : non-character argument
m_data$SR <- as.character(levels(m_data$SR))[m_data$SR] # Error in strsplit(M[, Field], sep) : non-character argument, In addition: Warning message:Setting row names on a tibble is deprecated. 
m_data$SR <- as.character(unlist(m_data$SR)) # Error in strsplit(M[, Field], sep) : non-character argument, In addition: Warning message:Setting row names on a tibble is deprecated. 
histResults <- histNetwork(test_data, sep=";") # Error in strsplit(M[, Field], sep) : non-character argumentIn addition: Warning message:Setting row names on a tibble is deprecated.


```



wos
```R
function (M, min.citations, sep, network, verbose) 
{
  if (isTRUE(verbose)) {
    cat("\nWOS DB:\nSearching local citations (LCS) by reference items (SR) and DOIs...\n")
  }
  if (!("SR_FULL" %in% names(M))) {
    M = metaTagExtraction(M, Field = "SR")
  }
  M = M[order(M$PY), ]
  M$Paper <- 1:nrow(M)
  M_orig <- M
  M$nLABEL <- 1:nrow(M)
  CR <- strsplit(M$CR, sep)
  CR <- lapply(seq_along(CR), function(i) {
    l <- data.frame(ref = CR[[i]], paper = i)
  })
  CR <- (do.call(rbind, CR))
  CR$DI <- trimws(unlist(lapply(strsplit(CR$ref, "DOI", fixed = TRUE), 
    "[", 2)))
  CR$DI[is.na(CR$DI) | CR$DI == "NA"] <- ""
  CR$AU <- trimws(gsub("[ ]{2,}", "", (gsub("\\.", " ", unlist(lapply(strsplit(CR$ref, 
    ",", fixed = TRUE), "[", 1))))))
  CR$PY <- trimws(unlist(lapply(strsplit(CR$ref, ",", fixed = TRUE), 
    "[", 2)))
  CR$SO <- trimws(unlist(lapply(strsplit(CR$ref, ",", fixed = TRUE), 
    "[", 3)))
  CR$SR <- paste(CR$AU, ", ", CR$PY, ", ", CR$SO, sep = "")
  if (isTRUE(verbose)) {
    cat("\nAnalyzing", nrow(CR), "reference items...\n")
  }
  M$LABEL <- paste(M$SR_FULL, "DOI", toupper(M$DI))
  CR$LABEL <- paste(CR$SR, "DOI", CR$DI)
  L <- left_join(M, CR, by = c("LABEL"))
  L <- L[!is.na(L$paper), ]
  L$CITING <- M$LABEL[L$paper]
  L$nCITING <- M$nLABEL[L$paper]
  L$CIT_PY <- M$PY[L$paper]
  LCS <- L %>% group_by(.data$nLABEL) %>% summarize(LABEL = .data$LABEL[1], 
    n = length(.data$nLABEL)) %>% as.data.frame()
  M$LCS <- 0
  M[LCS$nLABEL, "LCS"] <- LCS$n
  M_orig$LCS <- M$LCS
  histData <- M[c("LABEL", "TI", "DE", "ID", "DI", "PY", "LCS", 
    "TC")]
  names(histData) <- c("Paper", "Title", "Author_Keywords", 
    "KeywordsPlus", "DOI", "Year", "LCS", "GCS")
  histData <- histData %>% dplyr::filter(.data$GCS >= min.citations)
  if (isTRUE(network)) {
    CITING <- L %>% group_by(.data$CITING) %>% summarize(LCR = paste(.data$LABEL, 
      collapse = ";"), PY = .data$CIT_PY[1], Paper = .data$paper[1]) %>% 
      ungroup() %>% arrange(.data$PY) %>% as.data.frame()
    M_orig$LCR <- NA
    M_orig$LCR[CITING$Paper] <- CITING$LCR
    M_orig$LABEL <- M$LABEL
    M <- M_orig %>% dplyr::filter(.data$TC >= min.citations)
    st <- i <- 0
    while (st == 0) {
      ind <- which(duplicated(M$LABEL))
      if (length(ind) > 0) {
        i <- i + 1
        M$LABEL[ind] = paste0(M$LABEL[ind], "-", letters[i], 
          sep = "")
      }
      else {
        st <- 1
      }
    }
    row.names(M) <- M$LABEL
    WLCR <- cocMatrix(M, "LCR", sep = ";")
    missingLABEL <- setdiff((M$LABEL), colnames(WLCR))
    colLab <- c(colnames(WLCR), missingLABEL)
    WLCR <- cbind(WLCR, matrix(0, nrow(WLCR), length(missingLABEL)))
    WLCR <- as.data.frame(as.matrix(WLCR))
    colnames(WLCR) <- colLab
    LABEL <- (row.names(WLCR))
    WLCR <- as.matrix(WLCR[LABEL])
  }
  else {
    WLCR = NULL
  }
  if (isTRUE(verbose)) {
    cat("\nFound", length(M$LCS[M$LCS > 0]), "documents with no empty Local Citations (LCS)\n")
  }
  results <- list(NetMatrix = WLCR, histData = histData, M = M_orig, 
    LCS = M$LCS)
  return(results)
}
```


I have a dataframe 

```shell
> row.names(M[1:5,])
[1] "OCAMPO DD, 2023, PROD ENG-RES DEV"         "SANDERS RH, 1998, MON NOT R ASTRON SOC"   
[3] "KALAIMURUGAN K, 2020, MATER TODAY-PROC"    "GAO S, 2019, PHOTOGRAMM REC"              
[5] "KALAIMURUGAN K, 2023, ENERG SOURCE PART A"

```

but when I store data as feather, and read it , the row name change:
```shell
> library(feather)
> dir_M_data <- file.path(dir_exports, "M.feather")
> write_feather(M, dir_M_data)
> m_data <- read_feather(dir_M_data)

> row.names(m_data[1:5,])
[1] "1" "2" "3" "4" "5"
```

how to solve it ?