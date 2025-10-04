峰值信噪比 PSNR（Peak Signal-to-Noise Ratio）：PSNR是一种常用的图像失真度度量方法，可以用来测量压缩后图像与原始图像之间的差异。PSNR值越大，图像质量越高。

下面是用 Python 实现 PSNR 的一个示例函数：
```python
import numpy as np
import math
from PIL import Image

def psnr(im1, im2):
    # 将图像转换为数组
    im1_data = np.array(im1)
    im2_data = np.array(im2)

    # 计算 MSE
    mse = np.mean((im1_data - im2_data) ** 2)

    # 计算 PSNR
    if mse == 0:
        return float("inf")
    else:
        return 20 * math.log10(255) - 10 * math.log10(mse)

# 使用示例
im1 = Image.open("im1.jpg")
im2 = Image.open("im2.jpg")
psnr_value = psnr(im1, im2)
print("PSNR:", psnr_value)

```

在这个函数中，首先将图像转换为数组，然后计算两个图像之间的均方误差（MSE）。最后，使用 MSE 计算 PSNR。

这个函数需要两个输入参数：`im1` 和 `im2`，分别代表待测图像和原始图像。输出的 PSNR 值表示两个图像之间的失真度。

请注意，这个函数仅能用于比较同样大小的图像。如果两个图像大小不同，则应将它们先进行裁剪或缩放，使它们大小相同。