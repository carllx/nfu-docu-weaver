![[AcademicX project(weread).canvas]]
建立可以按维度索引笔记系统(或称知识库)例如, 作者(str), 作品名称(str), 概念(str), 学科领域(list)三个不同的维度.
通常, 以一其中一个维度的笔记内可能会涉及其他两个维度的笔记.
例如, 在作者维度的内容中, 可能记录该作者的个人特点, 他的流派, 它的一些观念或概念以及有多个不同的作品.
以作品维度创建的内容中, 会记录创建该作品的专家, 专家在该作品中表达的概念, 以及其他与该概念相关专家的概念
在obsidian 中,当修改note 的 heading 时, 如果该heading 被 Linked other note,   会失去互相的连接.

## Builder
[[Electron Builder]]


## Icon
The code creates an icon set for a given image file and converts it into an .icns file format.
```shell
sudo mkdir icon.iconset && \
sudo sips -z 16 16 weread-icon.png --out icon.iconset/icon_16x16.png && \
sudo sips -z 32 32 weread-icon.png --out icon.iconset/icon_32x32.png && \
sudo sips -z 64 64 weread-icon.png --out icon.iconset/icon_64x64.png && \
sudo sips -z 128 128 weread-icon.png --out icon.iconset/icon_128x128.png && \
sudo sips -z 256 256 weread-icon.png --out icon.iconset/icon_256x256.png && \
sudo sips -z 512 512 weread-icon.png --out icon.iconset/icon_512x512.png && \
sudo iconutil -c icns icon.iconset
```

 Step by step explanation:
 1. The first command creates a new directory called "icon.iconset" using the "mkdir" command with sudo permissions.
 2. The next six commands resize the original image file "weread-icon.png" to different sizes using the "sips" command with sudo permissions. The "-z" option sets the size of the image, and the "--out" option specifies the output file name and location.
 3. The last command converts the icon set directory into an .icns file format using the "iconutil" command with sudo permissions. The "-c" option specifies the output file format, and "icns" is the file extension for Mac OS X icons.
 Overall, the code creates an icon set with various sizes of the given image file and converts it into a format suitable for use as an icon on Mac OS X.
