
Obsidian 虽支持集成Pandoc 但无法解析内嵌内容。
(-- `Exporting to Microsoft Word : r/ObsidianMD` [reddit](https://www.reddit.com/r/ObsidianMD/comments/14jgr1p/exporting_to_microsoft_word/))

相比之下，通过外部脚本，RMarkdown 导出的结果更佳，特别适合嵌入科学图形和表格。安装特定插件后，可以在 Obsidian 中高效使用 R Markdown。
(-- `Integrating R Markdown into Obsidian Workflow - Share & showcase - Obsidian Forum` [obsidian](https://forum.obsidian.md/t/integrating-r-markdown-into-obsidian-workflow/47923)) (OpenAI 2023)

[@2011drozdickEssentialsWMSIVAssessment]
要点

通过 Custom File Extensions Plugin 和  Execute Code 插件实现集成
配置插件，如在 Custom File Extensions Plugin 中将“rmd”添加到文件类型列表.
在 Execute Code 插件中设置 R 语言特定选项，如指定 Rscript 路径
通过“Run R blocks in Notebook Mode”设置，可以在相同环境中执行选定的每个代码块
配置可选项，如将 `plot()` 函数生成的图表嵌入笔记中
在“Inject R code”框中加载常用库，将自动添加到每个执行的代码块顶部
通过示例展示集成效果和使用技巧





[[Volumetric Media.canvas]]
[[澳门城市大学面试准备]]
[[Personal Resume 个人简历]]
[[V-PCC 容器格式归纳]]