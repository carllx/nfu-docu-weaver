---
alisas: R language
Author's Keywords (DE): R language
International co-authorships %: dd
---

## Extract Integer Variable Names from List
`biblmtrx` List 中提取出那些既为 `integer` 类型又不为 `table` 型的element 的名字

```R
 # 首先使用sapply()函数遍历RESULTS中的每个元素,利用is.integer()判断每个元素是否为整数型,并将判断结果存储到int_vars中。
int_vars <- sapply(RESULTS, is.integer)
# 然后对RESULTS再次使用sapply(),利用is.table()判断每个元素是否为表格型,将判断结果取反。
not_tables <- !sapply(RESULTS, is.table)
# 存储到not_tables中
int_items <- names(RESULTS)[int_vars & not_tables]

RESULTS[int_items]
```

## Make  Description with Template
请根据以下的dataframe 的各个key 生成一个描述性template, 描述需要包括dataframe 内所有信息, 并用花括号作为placeholder,替换datafram 内的key 

Using the keys in the dataframe below, generate a descriptive template that includes all the information in the dataframe. Use curly brackets as placeholders for the keys from the dataframe.
for example, the dataframe like:"""
 
 dataframe:
  #                             
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
  31 Search   Augmented Reality



Using the keys in the dataframe below, generate a descriptive template that includes all the information in the dataframe. Use curly brackets as placeholders for the keys from the dataframe.
for example, the dataframe like above


 for esample:  template that includes all the information from the dataframe:
This is a Bibliometric analysis for {Search}..
{Description} about {Timespan}. There are {Documents} across {Sources} with an {Annual Growth Rate %}. The {Document Average Age} is {Document Average Age} and there is an average of {Average citations per doc} citations per document and {Average citations per year per doc} citations per year per document, totaling {References}. There are {article} articles, {article; early access} early access articles, {article; proceedings paper} proceedings papers, {editorial material} editorial materials, {proceedings paper} proceedings papers, {review} reviews, {review; book chapter} book chapter reviews, and {review; early access} early access reviews. There are {Keywords Plus (ID)} Keywords Plus, {Author's Keywords (DE)} Author's Keywords, {Authors} authors with {Author Appearances} appearances. {Authors of single-authored docs} authors have single-authored documents. There are {Single-authored docs} single-authored documents, {Documents per Author} documents per author, {Co-Authors per Doc} co-authors per document, and {International co-authorships %} international co-authorships.....


## 
```R
plot(RESULTS, k = 20, pause = FALSE)

Error in grid.Call.graphics(C_setviewport, vp, TRUE) : 
  non-finite location and/or size for viewport
In addition: Warning messages:
1: Removed 1 rows containing non-finite values (`stat_align()`). 
2: Removed 1 row containing missing values (`geom_line()`). 
3: In min(x) : no non-missing arguments to min; returning Inf
4: In max(x) : no non-missing arguments to max; returning -Inf
```

To check for non-finite values, missing values, and arguments returning Inf or -Inf, you can use the following functions:

1. `is.finite(x)`: This function checks if the values in `x` are finite (i.e., not infinite or NaN).
2. `is.na(x)`: This function checks if the values in `x` are missing (i.e., NA).
3. `any(is.infinite(x))`: This function checks if there are any infinite values in `x`.
4. `any(is.nan(x))`: This function checks if there are any NaN values in `x`.
5. `any(is.na(x))`: This function checks if there are any missing values in `x`.
6. `any(is.infinite(x) | is.nan(x))`: This function checks if there are any infinite or NaN values in `x`.
7. `any(is.infinite(x) | is.nan(x) | is.na(x))`: This function checks if there are any infinite, NaN, or missing values in `x`.
8. `any(is.infinite(x) | is.nan(x) | is.na(x) | x == Inf | x == -Inf)`: This function checks if there are any infinite, NaN, missing values, or values equal to Inf or -Inf in `x`.

If `RESULTS` is a list of data frames, and you want to check all columns of all data frames, you can do it like this:

```R
non_finite_check <- lapply(RESULTS, function(df) sapply(df, function(x) any(!is.finite(x))))
```

This will return a list of the same structure as `RESULTS`, with each element being a logical vector indicating which columns of the corresponding data frame contain any non-finite values.