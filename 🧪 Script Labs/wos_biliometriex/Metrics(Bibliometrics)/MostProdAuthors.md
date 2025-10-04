### MostProdAuthors
MostProdAuthors: 作者产出量排名
![MostProdAuthors](file:///Users/yamlam/Documents/obsdiannote/🧪%20Script%20Labs/wos_biliometriex/Thematic/Augmented%20Reality/results/S0-BasicStatistics-MostProdAuthors-Augmented%20Reality.png)


Articles Fractionalized,考虑共同写作比例的分数化文章计数。它避免了多作者论文的重复计算。
`Articles Fractionalized` 
- (*Table: Most Productive Authors*)
- 列显示了每位作者发表的文章数量,但根据合著者数量进行了分数化。
- 例如,如果一篇论文有3名作者,每位作者获得1/3的论文计入他们的名下。分数化的数量给出了每位作者的相对贡献,同时考虑到他们在一些论文中与他人合作。
- 它避免了多作者论文的重复计数。

Ahh I see the issue now. The problem is that `rmarkdown::render()` expects named arguments, but you are passing all the arguments positioned without names.

Try this:

Copy code

`Rscript -e "rmarkdown::render(   input='/Users/yamlam/Documents/obsdiannote/<0001f9ea> Script Labs/wos_biliometriex/Dev/src/Mock.Rmd',   output_dir='/Users/yamlam/Documents/obsdiannote/<0001f9ea> Script Labs/wos_biliometriex/Thematic/',    params = list(gg = 'value'),   output=list(md_document=list(variant='markdown_github')) )"`

By adding the argument names `input`, `output_dir`, `params`, `output`, it should now match what `render` expects.

Rather than just positional arguments, R functions require you to be explicit about which value matches which parameter.

Let me know if that works!



 您好,我理解这个问题了。

问题在于`rmarkdown::render()`函数需要命名参数,但是您传入的参数都没有命名,只是按位置传递。

请试试这样:

```
Rscript -e "rmarkdown::render(
  input='/Users/yamlam/Documents/obsdiannote/<0001f9ea> Script Labs/wos_biliometriex/Dev/src/Mock.Rmd',
  output_dir='/Users/yamlam/Documents/obsdiannote/<0001f9ea> Script Labs/wos_biliometriex/Thematic/',
  params = list(gg = 'value'),
  output=list(md_document=list(variant='markdown_github'))
)"
```

通过添加参数名`input`、`output_dir`、`params`、`output`,现在就匹配`render`函数需要的格式了。

与只使用按位置的参数不同,R函数需要您明确指出哪个值对应哪个参数。

如果这样可以运行成功,请告诉我一声!
