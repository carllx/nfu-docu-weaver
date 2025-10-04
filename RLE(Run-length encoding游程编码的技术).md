--`|游程编码 - 维基百科，自由的百科全书` [wikipedia](https://zh.wikipedia.org/wiki/%E6%B8%B8%E7%A8%8B%E7%BC%96%E7%A0%81)

Run-length encoding (RLE) 是一种用于压缩图像和数据的常见技术。

使用 RLE 压缩 RGB 图像的一般步骤如下：

1.  扫描整个图像，并将相邻像素组成的序列分组。
    
2.  将每组像素的颜色值和连续长度分别记录在一个数组中。
    
3.  将记录的数组压缩，例如使用 Huffman 编码。
    
4.  将压缩后的数组存储为文件，以便进行解压缩。
    

这里是一个使用 RLE 压缩 RGB 图像的 Python 示例：
```python
def compress_rgb_image(image):
    width, height, _ = image.shape
    compressed = []
    current_pixel = tuple(image[0][0])
    current_count = 0

    for y in range(height):
        for x in range(width):
            pixel = tuple(image[x][y])

            if pixel == current_pixel:
                current_count += 1
            else:
                compressed.append((current_pixel, current_count))
                current_pixel = pixel
                current_count = 1

    compressed.append((current_pixel, current_count))
    return compressed

```
这个代码将扫描图像中的每个像素，并将颜色相同的像素压缩为一组。具体的实现中压缩后的数组还需要用Huffman编码或者其他编码方式来进一步压缩.

需要注意 RLE 是无损压缩技术，但是它不能使压缩后的文件比原始文件更小。如果要使文件更小，可
使用其他压缩技术，例如 Huffman 编码、LZ77 编码等，进一步压缩数据。

在压缩RLE编码后的数组时, 不同颜色出现次数不同, 使用Huffman编码可以使出现次数高的颜色占用编码空间少, 使得压缩效果更佳.

总之压缩一张RGB图像有很多种方法, RLE 是其中之一, 但并不一定是最佳的.

### 将13bit的深度数据无损储存到8bit 的彩色图中

将13位深度数据无损地存储到8位彩色图像中是具有挑战性的。因为8位颜色值只能表示256种不同的颜色，而13位深度值可以表示8192种不同的深度。

在这种情况下，可以使用一些技巧来尽量保留原始深度信息。
一种方法是使用称为 [[RLE(Run-length encoding游程编码的技术) ]], 在这种方法中，你首先确定具有相同深度值的相邻像素的运行，然后用一个单一的值和计数来表示每个运行，而不是存储每个单独的像素值。这通过减少存储在图像中的唯一值的数量有效地压缩了数据。
为了进一步压缩数据，你可以使用一种叫做lossless color quantization(无损颜色量化)的技术。这个过程减少了图像中特有颜色的数量，同时保留了特有的深度值。 
--`|(1) Lossless coding of color quantized images based on pseudo distance | Request PDF` [researchgate](https://www.researchgate.net/publication/4102470_Lossless_coding_of_color_quantized_images_based_on_pseudo_distance)


