在R Markdown中直接从一个Rmd文件导入另一个Rmd文件内的函数是不可行的，就像前面解释的那样。但是，你可以将需要的函数保存在一个普通的R脚本文件（比如`functions.R`）里，然后在主Rmd文件（比如`main.Rmd`）中使用`source()`函数来载入这些R脚本文件。（下边以示例为中文学生解释）

首先，我们建立一个名为`functions.R`的文件，并在这个文件中定义你要用的函数:

 
```
# functions.R 的内容
pollutantmean <- function(directory, pollutant, id = 1:332) {
  # ... 这里是函数的代码 ...
}

complete <- function(directory, id = 1:332) {
  # ... 这里是函数的代码 ...
}
```

接下来，我们在`main.Rmd`文件中使用source()函数"载入"这些函数。做法是在代码块中调用`source`，然后指向你的函数定义:


````
# main.Rmd 文件的一个代码块
```{r setup}
source("functions.R")
````

# 主要分析

这里我们可以用我们刚才定义的`pollutantmean`和`complete`函数来进行数据分析。

简单说，这个步骤就像是在做一道魔法咒语，用`source`这个魔法棒一挥，`functions.R`里的法力就会出现在`main.Rmd`里，然后你就可以在`main.Rmd`使用这些法力啦。



## Bookdown

使用bookdown时，我们会以一种稍微不同的方式来工作：我们不是把一个Rmd文档直接嵌入另一个，而是按章节来组织多个Rmd文件，把它们整合成一本书。但我们仍然不能直接在一个Rmd文件中运行另一个Rmd文件中的R代码。相反，我们将所有的R函数定义在简单的R脚本文件里，然后在各个Rmd文件中用`source()`函数来加载它们。

首先，你需要安装和载入bookdown包，并设置一个新的bookdown项目。然后，按照bookdown的结构创建你的文件。

这里有一个简单的步骤指南：

## 步骤1: 准备你的R脚本文件

创建一个名为`_functions.R`的文件，把所有想要使用的R函数定义在里面：
```r
# _functions.R 文件内容
add <- function(x, y) {
  return(x + y)
}

multiply <- function(x, y) {
  return(x * y)
}
```

## 步骤2: 设置你的bookdown项目

当你启动bookdown项目后，你会有一个名为`index.Rmd`的文件作为主入口文件，你可以在这个文件内使用`source()`函数来加载你的函数定义。

然后，你的bookdown项目文件夹可能会包含如下文件：

- `index.Rmd`
- `01-intro.Rmd`
- `02-methodology.Rmd`
- `03-results.Rmd`
- `_functions.R`

## 步骤3: 在`index.Rmd`和其他Rmd文件中加载函数

你可以在`index.Rmd`的任意位置添加下面的代码块来加载`_functions.R`脚本文件的内容：

```R
source("_functions.R")
```

这个`setup`标签的代码块通常在文件的开头，这样在整个Rmd文档中都可以使用这些函数。

## 步骤4: 在其他章节中使用函数

你现在可以在任何章节，比如`01-intro.Rmd`，中直接使用这些函数，如下：

```{r example}
# This will call the add function from the _functions.R script
result <- add(3, 4)
# This will print the result
result
```

执行bookdown时，所有的Rmd文件将按顺序合并并处理。记住，你只需要在你想调用函数的每个Rmd文件开始处使用一次`source("_functions.R")`即可。这样，在整个文档中的任何地方都可以直接调用`_functions.R`中定义的函数了。



 Here are 10 suggested titles for the node:

1. Importing Functions from Separate R Scripts in R Markdown
2. Sharing Functions Across R Markdown Documents 
3. Sourcing External R Scripts in R Markdown
4. Reusing Functions in Multiple R Markdown Files
5. Loading R Functions into R Markdown Documents
6. Accessing Custom Functions in R Markdown
7. Calling Functions Defined Elsewhere in Rmd
8. Importing R Functions into R Notebooks
9. Incorporating External R Code in Rmd
10. Linking R Scripts and R Markdown for Code Reuse
