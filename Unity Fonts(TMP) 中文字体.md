
# Unity (TMP) 中文字体

---



## 步骤参考
(Source:  [unity3d.com: About SDF fonts | TextMeshPro | 4.0.0-pre.2 ](https://docs.unity3d.com/Packages/com.unity.textmeshpro@4.0/manual/FontAssetsSDF.html))

![|200](https://i.ytimg.com/vi/gMd0xDEFE20/hqdefault.jpg)
(Source:  [youtube.com: Unity Tutorial : How to Import a Custom Font into Unity](https://youtu.be/gMd0xDEFE20?t=107))
[[Source - TextMeshPro无法显示中文字的问题]]
[[Source- Unity TextMeshPro 中文字體]]

[[Unity - Fonts (TextMeshPro_DFA)]]

---


## SDF 字体


Signed Distance Field(有符号距离场)
SDF（Signed Distance Field）字体是一种通过特殊技术生成的字体资产，通常用于TextMesh Pro。

SDF字体的要点：

1. **优点**：SDF字体在缩放和变形时能够保持清晰度。这是因为SDF通过计算文本轮廓到背景的距离，使渲染更加锐利，即使在高倍放大时也不失真[1](https://docs.unity3d.com/Packages/com.unity.textmeshpro@4.0/manual/FontAssetsSDF.html)。
    
2. **创建方法**：可以使用Unity的Font Asset Creator来生成SDF字体资产。确保选择合适的源字体文件，并在创建后更新图集纹理[3](https://discussions.unity.com/t/textmesh-pro-how-to-switch-font-files-in-dynamic-sdf/847608)。
    
3. **应用场景**：SDF字体广泛用于游戏开发，特别是在需要动态文本和多语言支持的情况下。它们可以轻松地与不同的字体文件一起使用，提供更高的灵活性[8](https://www.reddit.com/r/unity_tutorials/comments/pjcrrg/question_about_fonts_ttf_sdf_to_decrease_app_size/)。


---



# Unity TextMeshPro 中文字体设置指南


---



## 前期准备

### 1. 下载 TTF 字体资源
- 从字体网站下载所需中文字体（如 dafont.com 或 fonts.webtoolhub.com）
- 或从系统字体文件夹 C:\WINDOWS\Fonts 获取中文字体


---


### 2. 安装 TextMeshPro
通过 Window > Package Manager 安装 Text Mesh Pro

---




### 3. 导入字体
- 将下载的 .ttf 字体文件拖拽到 Unity 项目的 Assets 文件夹中



---


## 创建字体资源


---


### 1. 打开字体创建工具
- 选择 Window > TextMeshPro > Font Asset Creator
![bg fit left:50% vertical](https://i.imgur.com/NcM0s2v.webp)


---


### 2. 配置字体资产创建器
- Source Font File：选择已导入的字体文件
- Font Size：建议18(Phone), 24(Tablet), 36(PC)

---

###  3. Character Set 选择

- Unicode Range，在 Character Sequence (Hex) 中添加所需字符范围
- Custom Character，在 Custom Character List 中输入具体字符


---


### 4. 生成字体资源
- 点击 Generate Font Atlas 生成字体图集
- 等待处理完成（Unicode Range (Hex) , 可能需要 5-10 分钟）
- 使用 Save As 保存生成的字体资源文件

---


## 应用字体资源
1. 在 Unity 场景中使用
- 将生成的字体资源拖拽到 TextMeshPro 组件的 Font Asset 属性中
- 在文本框中输入已添加到字库的中文文字进行测试

## 注意事项
1. 字符集选择
- Unicode Range：适合添加大范围连续字符
- Custom Character：适合添加少量特定字符
- 根据项目需求选择合适的方式

2. 资源优化
- 完整字体资源约占 50MB
- 建议仅添加项目所需字符以减少文件大小
- 在开发初期确定所需字符范围

3. 字重配置（可选）
- 可为不同字重（Thin、Regular、Bold）重复以上步骤, 分别生成字体资源
- 在主字体资源的 Inspector 面板中配置 Font Weight Table, 各个字重对应的字体资源


操作路径速查:
- 字体创建工具: Window > TextMeshPro > Font Asset Creator
- 字体源文件: Font Source
- 字符集设置: Character Set > Custom Character
- 字体大小设置: Font Size > Custom Size
- 字体生成: Generate Font Atlas
- 保存设置: Save TextMeshPro Font Asset