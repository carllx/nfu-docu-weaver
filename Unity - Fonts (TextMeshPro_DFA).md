
创建支持中日韩文字的 Dynamic Font Asset

## Reference

![|200](https://i.ytimg.com/vi/NY1xKqCIj3c/hqdefault.jpg)
(Source:  [youtube.com: TextMeshPro - Dynamic Font Asset Creation Process](https://youtu.be/NY1xKqCIj3c?t=1234))
[[Source - TextMeshPro - Dynamic Font Asset Creation Process]]


~~[[[[Unity Fonts(TMP) 中文字体]]~~

---


1 动态字体系统在  1.5 版本通过多图集支持得到改进

SDFAA（Signed Distance Field Antialiased）是一种用于动态字体资产的渲染模式



---

## 前期准备

### 1. 下载 TTF /OTF 字体资源
- 从字体网站下载所需中文字体（如 dafont.com 或 fonts.webtoolhub.com）
- 或从系统字体文件夹 C:\WINDOWS\Fonts 获取中文字体

![bg fit left:50% vertical](https://i.imgur.com/SnUOUes.webp)


---
### 2. 导入字体
- 将下载的 .ttf 字体文件拖拽到 Unity 项目的 Assets/Fonts 文件夹中


---


### 3. 创建SDFA 动态字体资源

- 选择支持目标语言的字体 `.ttf / .otf `文件
- 使用 `shift + ctl + F12` 快捷键
- 或菜单创建  `Create > TextMeshPro > Font Asset` 创建




![bg fit left:50% vertical](https://i.imgur.com/1HscyoS.webp)


---



## Dynamic Fonts(动态字体)的特点：
- 按需加载字符

![bg fit left:50% vertical](https://i.imgur.com/NJjxdF4.webp)

---



- 但编辑器中的更改是永久性的

![bg fit left:50% vertical](https://i.imgur.com/al6zlts.webp)



---


- 运行时的更改仅在会话期间有效
- 使用 Reset 功能清除 Atlas 内容

![bg fit left:50% vertical](https://i.imgur.com/fF0YzoB.webp)


---

### Sampling Point Size建议：
  - 标准设置：90-150
  - 中日韩文字建议：36-40
  - 最小可用：18-20
![bg fit left:50% vertical](https://i.imgur.com/AtrUvir.webp)

---
### Atlas纹理大小
- 当单个Atlas纹理大小不足以容纳所有需要的字符时，系统会按需创建多个Atlas纹理, 这在使用小尺寸Atlas纹理（例如256x256）时尤其明显

![bg fit left:50% vertical](https://i.imgur.com/iGcBw0u.webp)


---

## Static Fonts (静态字体)

性能开销高于静态字体, 建议：

- 开发时使用动态字体提供灵活性
- 已知文本使用静态字体资源
- 用户输入场景使用动态字体
- 不同语言可以使用不同的字体资源策略

![bg fit left:50% vertical](https://i.imgur.com/7dG2nXJ.webp)

---

 
 一些较为完整的字体包含不同的 Fonts Weight , es. google 的 Noto 
![bg fit left:50% vertical](https://i.imgur.com/OtxVnjZ.webp)


---



## 中日韩文字的建议：
- 采用 36-40 的采样点大小
- 使用 Noto CJK 等支持中日韩的字体
- 可以通过多图集支持大量字符

![bg fit left:50% vertical](https://i.imgur.com/RicBLFV.webp)


---

## END



---


<!--  

3 配置 Dynamic Font Asset
- 选择 Font Asset
- 启用 Multi Atlas Texture Support
- 按需调整 Atlas Resolution 大小


4 实际应用测试
- 创建 TextMeshPro 文本对象
- 将创建的 Dynamic Font Asset 指定为字体
- 输入中日韩文字测试显示效果
- 观察 Atlas Texture 的自动填充情况

-->





