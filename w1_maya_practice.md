[[PPT_数字游戏设计基础_Maya]]
[[Course - Maya - 2024 essential training - 原文]]

(Source:  [aliyun.com: Maya 2024 Essential Training - 通义听悟](https://tingwu.aliyun.com/folders/65102))

练习素材: 链接: https://pan.baidu.com/s/1b1y7xpDJzGwKJwREsCTlOQ?pwd=hrn6 提取码: hrn6 

## 虚拟世界的工厂

**三维制作软件** 是元宇宙的基础工具。它们就像是这个虚拟世界的工厂，它可以帮助你将脑海中最疯狂的想象变为现实。为创造和构建元宇宙提供了必要的手段。

对高端电影, 动画制作以及游戏制作感兴趣的人来说，学习Maya是一个成熟的起点。

## 1- 环境

Maya 需要一个性能良好的系统才能正常运行。如果你刚开始使用Maya，请确保你的系统配备了优质的显卡和充足的内存。这将对你使用Maya大有帮助。

如果你使用的是Macintosh电脑，你还需要一个三键鼠标。虽然没有它你也可以使用Maya，但有一个合适的鼠标会让学习过程更加轻松。

🖥️  确保您的系统配置足够运行Maya,包括良好的显卡和充足的内存. 
🖱️ 如果您使用Mac电脑,请准备一个三键鼠标
📁 下载课程附带的练习文件,并将"Exercise Files"文件夹放在桌面上

🔌 确保Maya中已安装并启用Arnold插件:
  - 进入Windows > Settings > Preferences > Plugin Manager
  - 找到"mtoa.mll"(Arnold插件)
  - 勾选"Loaded"和"Auto load"选项

准备好以上这些后,您就可以开始学习课程了。


## 2- 界面(interface)

标题:Maya界面和设置指南

讲解了每个方面的操作方法,帮助读者熟悉Maya的基本界面和设置,为后续使用打下基础。重点介绍了一些提高工作效率的技巧,如Hotbox、标记菜单和自定义工作空间等。

### 2-1 界面概述
(2-1 The Maya Interface01 - Overview)

(Source:  [aliyun.com: 02. The Maya Interface01 - Overview of the Maya interface](https://tingwu.aliyun.com/doc/transcripts/3kprqldjaajg9xgd))

#### 1. Maya 的界面看起来很复杂，如何理解它的结构？

Maya 界面由以下几个部分组成：

##### 菜单栏:

位于软件界面最顶部，包含各种操作菜单。 (0:18)

![](https://tingwu.aliyun.com/api/editor/get/v2/524379/0/0aaf9049298e439aabff8c4953c13088/e1e693389a714642b6c7d88e4a9bee54.png)

- Maya 的菜单栏会根据当前工作模式进行调整，例如当切换到 "建模" 模式后，菜单栏会显示与建模相关的菜单选项。 (0:22 - 0:41)

- 可以通过点击 "建模" 按钮旁边的下拉菜单来切换不同的菜单集。 (0:31 - 0:36) 

![](https://tingwu.aliyun.com/api/editor/get/v2/524379/0/180bf742626946f9b62254e03fcdf884/d32e561b64ad4a58920a6e65703a4a50.png)

##### 功能区

位于菜单栏下方，常用功能区包含文件操作 (打开、保存等)、撤销/重做、捕捉选项、渲染工具等。 (0:58 - 1:08)![](https://tingwu.aliyun.com/api/editor/get/v2/524379/0/e349e3badb5f4a8d9deb663debad8d98/509d04457aac4f12acba69cf859a1007.png)

##### 使用预设工作区
- **使用预设工作区** Maya 提供了一些预设的工作区布局，例如 "动画"、"建模"、"渲染" 等，可以通过 "工作区" 菜单进行切换。

![](https://tingwu.aliyun.com/api/editor/get/v2/524379/0/1592427f16424413b01e84bac3cb3fc0/c9d3f209f3044c2cb85efde4fffb759c.png)
##### 属性面板

- **属性面板**: 包含多个面板，用于显示和编辑场景信息、对象属性等。 (1:09)

    ![](https://tingwu.aliyun.com/api/editor/get/v2/524379/0/9c0cbe4b8ae64eddba48f4998ad80ea6/09900889017543d5a5b092ed1d534b7a.png)

    - 面板可以通过右侧的按钮进行切换和隐藏。 (1:10 - 1:24)

    - 常用面板包括：通道盒、属性编辑器、建模工具包等。 (1:16 - 1:21)

##### 左侧工具栏

常用工具包括：选择工具、移动工具、旋转工具、缩放工具等。 (1:34 - 1:38)

##### 底部工具栏 

- **底部工具栏**: 包含视图控制按钮、时间滑块等。 (1:39)

    ![](https://tingwu.aliyun.com/api/editor/get/v2/524379/0/f1d2dd1644684aeabf78b18f81969bee/6489808dbc4149aaaafacc44e1c448ab.png)

    - 视图控制按钮用于切换不同的视角，例如顶视图、前视图、透视图等。 (1:40 - 1:47)

    - 时间滑块用于控制动画的时间轴，可以通过拖动滑块或输入数字来调整时间。 (2:36 - 2:43)

    - 底部工具栏还包含播放控制按钮 (播放、暂停、停止等)。 (2:45 - 2:47)

##### 大纲视图

- **大纲视图**: 通常位于左侧，用于显示场景中的所有对象。 (1:49

)![](https://tingwu.aliyun.com/api/editor/get/v2/524379/0/53cd8ac84dcb482ab63275423a4d07e5/2a0f355abaae440f9c9d42420f4317df.png)

- 大纲视图可以用来选择、隐藏、分组对象等。 (1:51)

- 可以通过左键点击标题栏将大纲视图拖出，变成浮动窗口。 (1:58 - 2:02)

- 可以通过 "窗口 > 大纲视图" 菜单选项重新将大纲视图添加到界面中。 (2:07 - 2:11)

![](https://tingwu.aliyun.com/api/editor/get/v2/524379/0/7576868bfd86477fb2a01d913fb3bb75/836ae2e3feeb4a1f97e29f24189bbf6e.png)

##### 工具架(shelf)

 位于功能区下方，包含一系列与当前工作模式相关的工具图标。 (2:22)

- 工具架上的工具图标与菜单栏中的选项功能相同，提供另一种快捷访问方式。 (2:26 - 2:33)

![](https://tingwu.aliyun.com/api/editor/get/v2/524379/0/766d842c3946482fb50289e18082ea5f/12b7616bb14a4384904880a49f5f5df2.png)

##### 帮助栏

位于底部工具栏下方，显示当前操作的提示信息。 (2:51)

- 可以将鼠标悬停在不同的工具图标上，帮助栏会显示该工具的功能说明。 (2:57 - 3:04)![](https://tingwu.aliyun.com/api/editor/get/v2/524379/0/312ae2685fc141dab3637352f1022346/17fc8da4359d462da85f43b13772c689.png)

#### 2. 如何调整 Maya 界面的布局？

- **拖动面板标题栏**: 可以将面板拖动到新的位置或创建浮动窗口。 (1:58 - 2:02)
    
- **使用 "窗口" 菜单**: 可以通过 "窗口" 菜单添加或移除各种面板和编辑器。 (2:07 - 2:11)
    

    

#### 3. 如何在 Maya 中获取帮助？

- **帮助栏**: 将鼠标悬停在工具图标上，帮助栏会显示该工具的功能说明。 (2:57 - 3:04)
    
- **帮助菜单**: "帮助" 菜单提供各种帮助资源，包括 Maya 帮助文档、教程、论坛等。
    
- **在线资源**: Autodesk 官网、Maya 学习网站、论坛等提供丰富的学习资料和技术支持。

### 2-2 项目文件管理与组织
(2-2 The Maya Interface02 - Working )

(Source:  [aliyun.com: 02. The Maya Interface02 - Working with files and Maya projects - 通义听悟](https://tingwu.aliyun.com/doc/transcripts/r28pn74wyywxn5mz))

Maya软件使用项目文件夹管理文件。项目文件夹包含scenes和source images等子文件夹,用于存储不同类型的文件。设置项目文件夹可以让文件在不同电脑间轻松移动,并确保Maya能找到所有资源。

##### 默认的项目文件夹的路径是

/Users/yamlam/Documents/maya/projects/default/scenes

##### 怎样在 Maya 中设置一个项目文件夹？

答案：

1. 打开“文件”菜单 (时间戳：0:04) 
2. 选择“设置项目” (时间戳：1:05)
3. 在弹出的窗口中，找到您想要设置的项目文件夹 (时间戳：1:07)
4. 选择文件夹后，点击“设置”按钮 (时间戳：1:11)
    

这样就完成了 Maya 项目文件夹的设置。

![](https://tingwu.aliyun.com/api/editor/get/v2/524379/0/b95b82005cc24b9d8b4a14e02dc5151c/0eeeaa2d6fd64dd3974e8e8e24a581a9.png)

##### 如果要创建一个新的 Maya 项目，该怎么做？

答案：

1. 打开“文件”菜单 (时间戳：1:35)
2. 选择“项目窗口” (时间戳：1:36)
3. 在弹出的窗口中，点击“新建”按钮 (时间戳：1:45)
4. 为您的项目命名，并选择存储位置 (时间戳：1:43)
5. 点击“新建”按钮 (时间戳：1:45)
    

这样就创建了一个新的 Maya 项目文件夹，并包含所有必要的子文件夹。

![](https://tingwu.aliyun.com/api/editor/get/v2/524379/0/019e01e933154639928c49b0e0546353/3f9b4772144d4d02b15f3247ad098d26.png)




### 2-3 视图导航技巧
(2-3 Navigation in Maya)

(Source:  [aliyun.com: 02. The Maya Interface03 - Navigation in Maya](https://tingwu.aliyun.com/doc/transcripts/pev8qdlkbbk5nkga))

##### Maya 软件中如何使用鼠标和键盘进行视图导航？

视频中介绍了两种主要的 Maya 视图导航方式，分别是鼠标键盘操作和视图立方体操作。

一、使用鼠标和键盘进行视图导航：

轨道旋转 (Orbit): 

按住 Alt 键 (Windows) 或 Option 键 (Mac)，同时按住鼠标左键并拖动鼠标。 (时间戳: 00:46-00:51)

1. ![](https://tingwu.aliyun.com/api/editor/get/v2/524379/0/a64116d0a33541bc8cb9665aeed49623/7d6eb6ae8cbc4976a04aa2f4c6618c2c.png)
    

推拉 (Dolly/Zoom): 

按住 Alt 键 (Windows) 或 Option 键 (Mac)，同时按住鼠标右键并拖动鼠标，或者滚动鼠标滚轮。(时间戳: 00:53-01:02, 01:06-01:10)

![](https://tingwu.aliyun.com/api/editor/get/v2/524379/0/41cab05e571948409ea46110799f2b65/04ccb1b4dd554b268e395eed6149f845.png)

![](https://tingwu.aliyun.com/api/editor/get/v2/524379/0/9e5bfbeac45c4ba6ab1d0e6562cd2cd5/b14e88dd973849c592c44371f4f73b98.png)

平移 (Pan): 

按住 Alt 键 (Windows) 或 Option 键 (Mac)，同时按住鼠标中键并拖动鼠标。(时间戳: 01:13-01:17)

![](https://tingwu.aliyun.com/api/editor/get/v2/524379/0/9785a35f61ce421d84de869064e058fa/99d141b8637149a58aa5615056227361.png)

二、使用视图立方体进行视图导航:

![](https://tingwu.aliyun.com/api/editor/get/v2/524379/0/90680ed9a58e454082da42d17abedb40/3b50bdbcb68f400f97adaff08d523901.png)

1. 点击视图立方体图标，选择你想要查看的视图方向（例如：Front, Top, Left, Right 等）。 (时间戳: 02:07-02:19)
    
2. 点击立方体上的箭头可以旋转视图。 (时间戳: 02:14-02:17, 02:28-02:30)![](https://tingwu.aliyun.com/api/editor/get/v2/524379/0/07d76c2b1b6841969e6b6cef08f5b02a/d66697e1f6ca4f36a6c697f4103ee378.png)
    
3. 点击立方体的边角可以进行轨道旋转。 (时间戳: 02:19-02:24)
    

注意：

- 在2D视图中无法进行轨道旋转操作。(时间戳: 01:47-01:52)
    
- 熟悉鼠标和键盘的导航操作需要一定的练习和肌肉记忆。(时间戳: 02:48-02:58)
### 2-4 配置视口viewports

(2-4 The Maya Interface04 - Configuring viewports_原文)

(Source:  [aliyun.com: 02. The Maya Interface04 - Configuring viewports](https://tingwu.aliyun.com/doc/transcripts/klrbn2xr77r3q5zy))

Maya视口布局灵活多样。每个视口有独立菜单和设置,可单独配置。用户可聚焦放大特定视口,切换不同视图模式,根据需要自定义设置。这些功能让3D工作更高效,方便用户根据任务需求调整视图。
![](https://tingwu.aliyun.com/api/editor/get/v2/524379/0/8c393c1c28b14e91ad1b3cfa1da11d23/ed7df1b76f4643979cf5d7ef060cc2a1.png)
🖱️ 查看Maya中视口顶部的菜单，包括view、shading、lighting等选项
🔍 探索视口顶部的功能按钮
🖥️ 切换到四视图模式
🔎 观察每个视口都有相同的菜单和按钮
⌨️ 选中透视视图并按空格键放大（如果空格键不起作用，请使用相应的按钮）

### 2-5 使用热盒和标记菜单提高工作效率

(2-5 Using the hotbox and marking menus_原文)

(Source:  [aliyun.com: 02. The Maya Interface05 - Using the hotbox and marking menus](https://tingwu.aliyun.com/doc/transcripts/372e9o3g22gk9xb6))

本文介绍了Maya中两种提高工作效率的工具：热盒(hotbox)和标记菜单(marking menu)。
#### Maya 软件中如何使用热盒 (Hotbox) 和标记菜单 (Marking Menu)？

视频中介绍了两种通过鼠标快速访问 Maya 命令的方式：热盒和标记菜单。

一、热盒 (Hotbox)：

![](https://tingwu.aliyun.com/api/editor/get/v2/524379/0/e36efdad28f745cdad04f145ff3e00de/221806465af046d3abd98892712ac784.png)

1. 调出热盒: 将鼠标悬停在任意视图窗口上，并按住空格键。 (时间戳: 00:24-00:26)
    
2. 切换视图: 轻点空格键，可以在单一视图和四视图布局之间切换。 (时间戳: 00:32-00:34)
    
3. 访问菜单: 热盒中包含了 Maya 的所有主菜单，可以点击菜单名访问其子菜单。 (时间戳: 00:46-01:14)
    
4. 查看最近命令: 点击 "Recent Commands" 可以查看最近使用的命令列表。(时间戳: 01:34-01:36)
    
5. 切换视图: 在热盒中间区域点击并按住鼠标左键，可以选择不同的视图模式 (例如: 透视图、顶视图、左视图等)。 (时间戳: 01:51-02:09)
    

二、标记菜单 (Marking Menu):

![](https://tingwu.aliyun.com/api/editor/get/v2/524379/0/750ca4978ebe452c9f1a2d531f7ef968/1efdf7d232b64896b4f8728c4e43d8db.png)

1. 调出标记菜单: 在场景中选择一个物体 (例如: 飞艇)，然后在该物体上点击鼠标右键。 (时间戳: 02:39-02:41)
    
2. 切换组件模式: 在标记菜单顶部区域点击并按住鼠标右键，可以选择不同的组件选择模式 (例如: 顶点、面、边等)。 (时间戳: 02:48-02:57)
    
3. 执行命令: 点击标记菜单中的命令选项即可执行该命令 (例如: 选择全部、反选等)。 (时间戳: 03:10-03:14)
    
4. 分配材质: 可以通过标记菜单为选择的物体分配材质。 (时间戳: 03:14-03:18)![](https://tingwu.aliyun.com/api/editor/get/v2/524379/0/389264958b704ac99f59a4d04dc0de02/2993a59ec43b4967a8c40ae39ebdb664.png)
    

1. 关闭标记菜单: 在空白处点击鼠标左键即可关闭标记菜单。

### 2-6 自定义界面界面
(2-6  Configuring workspaces_原文)
2-6 Maya工作空间配置：提高工作效率的自定义界面

(Source:  [aliyun.com: 02. The Maya Interface06 - Configuring workspaces](https://tingwu.aliyun.com/doc/transcripts/g34dn8ogaaglqwjz))
有趣的提问时间到！

##### 预设工作区
![](https://tingwu.aliyun.com/api/editor/get/v2/524379/0/f831f63e458d4a63b3d3f14b2a230286/28000bb45dd648caa1ee17eb0659b12d.png)

   **解答：** 别担心，Maya早就帮你想好啦！😉

   **步骤：**

   1.  **(0:24)**  找到软件界面右上角的 **工作区**  下拉菜单，点击它。

   2.  **(0:26)**  你会看到一堆预设好的工作区，比如 **建模-标准**、**动画**、**渲染-标准** 等等。

   3.  **(0:30)**  选择  **建模-标准**  试试看！Maya会自动调整界面布局，给你腾出更多空间来施展才华。✨

##### Maya 可以自己定制工作区吗？想要打造独一无二的界面，让同事们都来膜拜！😎

   **解答：** 当然可以！Maya 就是这么灵活！💪

   **步骤：**

   1. **(1:11)** 可以自由拖动任何窗口到你喜欢的位置，就像整理你的房间一样！🏠![](https://tingwu.aliyun.com/api/editor/get/v2/524379/0/78710d0755784cf6b9566a6c5e46c1b5/da54363686fb4eb48795671ddf63e390.png)

   2. **(1:22)** 甚至可以保存你精心设计的布局，点击 **工作区** 下拉菜单，选择  **保存当前工作区为...**  ，给它起个响亮的名字！以后你就可以随时召唤它出来啦！🪄![](https://tingwu.aliyun.com/api/editor/get/v2/524379/0/f1c989859f5d43e0889af68dc0b9fdee/82bcba020cbe4c16a44c3c693f5b8f2f.png)

怎么样？是不是觉得 Maya 更可爱了呢？ 🥰

### 2-7 Setting preferences
(02. The Maya Interface07 - Setting preferences_原文)
Maya软件偏好设置指南

(Source:  [aliyun.com: 02. The Maya Interface07 - Setting preferences](https://tingwu.aliyun.com/doc/transcripts/g2y8qeak33kbnbeo))

本文介绍了Maya软件的偏好设置功能。

1. 提问：Maya 的默认设置看着有点不习惯，我想要自定义界面，该怎么做呢？
    
解答： 哈哈，没问题！Maya 的偏好设置提供了丰富的选项，可以让你随心所欲地定制界面。

- 步骤 1 (0:10): 点击顶部菜单栏的 "Windows"（窗口）。
- 步骤 2 (0:13): 在下拉菜单中依次选择 "Settings/Preferences"（设置/偏好设置）> "Preferences"（偏好设置）。
- 步骤 3 (0:15): 在弹出的 "Preferences"（偏好设置）窗口中，你可以根据需要调整各个模块的设置。
    

![](https://tingwu.aliyun.com/api/editor/get/v2/524379/0/94e01119a6ce45b5832af9734e86cc99/a98b95eb690a4cd092a17909fbc1bf38.png)

2. 提问：我的笔记本电脑屏幕太小了，Maya 的界面看着好挤！有没有办法让它更简洁一些？
    

解答： 当然有！你可以隐藏一些不常用的界面元素，腾出更多空间。

- 步骤 1-3: 参考问题 1 的步骤。
    
- 步骤 4 (0:23): 在 "Preferences"（偏好设置）窗口左侧的 "Categories"（类别）列表中选择 "Interface"（界面）。
    
- 步骤 5 (0:28): 取消勾选 "Menu bar"（菜单栏）和 "Show title bar in panels"（在面板中显示标题栏）选项，就可以隐藏菜单栏和面板标题栏，释放更多屏幕空间。
    
- 步骤 6 (0:52): 在 "Categories"（类别）列表中选择 "UI Elements"（界面元素）。
    
- 步骤 7 (1:01): 取消勾选 "Command Line"（命令行）和 "Help Line"（帮助行）选项，就可以隐藏命令行和帮助行。
    

![](https://tingwu.aliyun.com/api/editor/get/v2/524379/0/684bbad89df548209070aa2708bd5a1a/219de2f9ffd14b199dfc9d11f17b0dd0.png)

![](https://tingwu.aliyun.com/api/editor/get/v2/524379/0/8f3d4ae4ccf14ae1baa72492210c50c4/cf31ac648e784e5990d6555a863053df.png)

3. 提问：Maya 中的工具图标太小了，操作起来很不方便，怎么才能放大它们呢？
    

解答： 放大工具图标，可以让你的操作更加精准！

- 步骤 1-3: 参考问题 1 的步骤。
    
- 步骤 4 (1:26): 在 "Categories"（类别）列表中选择 "Display"（显示）。
    
- 步骤 5 (1:30): 在 "Display"（显示）类别下选择 "Manipulators"（操纵器）。
    
- 步骤 6 (1:50): 调整 "Manipulator Sizes"（操纵器大小）下的 "Global scale"（全局缩放）滑块，可以放大或缩小工具图标。![](https://tingwu.aliyun.com/api/editor/get/v2/524379/0/d9f081153193437192f10dbf0054f9b2/d6341b4bee3b4649875130c89f0c1ea8.png)
    

4. 提问：Maya 默认使用厘米作为单位，但我更习惯用英寸或英尺，可以改吗？
    

解答： 当然可以！Maya 支持多种单位，你可以根据自己的习惯进行选择。

- 步骤 1-3: 参考问题 1 的步骤。
    
- 步骤 4 (2:02): 在 "Categories"（类别）列表中选择 "Settings"（设置）。
    
- 步骤 5 (2:14): 在 "Working Units"（工作单位）区域，点击 "Linear"（线性）下拉菜单，可以选择 "inch"（英寸）或 "foot"（英尺）作为线性单位。
    
- 步骤 6 (2:21): 同样地，点击 "Angular"（角度）下拉菜单，可以选择 "degree"（度）或 "radian"（弧度）作为角度单位。
    

![](https://tingwu.aliyun.com/api/editor/get/v2/524379/0/d19b8856921b4a57b445cd9ae962f247/9adbd5742c554e94bd44dc253c7f6757.png)

## 3 对象选择和操作

每种操作的具体步骤和快捷键,帮助用户更高效地在Maya中创建和编辑3D场景。掌握这些基础技能对Maya建模和动画制作至关重要。

### 3-1 移动工具的基本操作

(03. Selecting and Manipulating Objects01 - Selecting objects_原文)
(Source:  [aliyun.com: 03. Selecting and Manipulating Objects01 - Selecting objects](https://tingwu.aliyun.com/doc/transcripts/dexp9jgovvop95ol))


### 3-2 使用移动工具选择和操作对象
(Using the Move tool)


(Source:  [aliyun.com: 03. Selecting and Manipulating Objects02 - Using the Move tool](https://tingwu.aliyun.com/doc/transcripts/4l6xqabkllxp9m2y))

移动工具的基本操作
1. 快捷键的使用：Q(选择)、W(移动)、E(旋转)、R(缩放)，可以快速切换工具。

本文介绍了在3D软件中使用移动工具来选择和操作对象的基本技巧。主要内容包括：
2. 移动工具的基本操作：
   - 选择对象并激活移动工具
   - 使用箭头和矩形控制沿不同轴或平面移动
   - 多选对象同时移动

3. 轴向设置的重要性：
   - World orientation：对齐世界坐标系
   - Object orientation：对齐对象自身坐标系
   - 根据需要选择合适的轴向设置

双击 移动工具 调出 Tool settings

![](https://tingwu.aliyun.com/api/editor/get/v2/524379/0/7855413f470a4dfca0bba623bf675cc7/cdc320cc81a0491faeae054dcb27ee9b.png)

World orientation 与 Object orientation 之间的差别

![](https://tingwu.aliyun.com/api/editor/get/v2/524379/0/a918924769b54ce5b96d0e5f0719554d/480cd8a027e04557b67cb908e6a8d208.png)

![](https://tingwu.aliyun.com/api/editor/get/v2/524379/0/4d3b5526cc2f4ff4bda342239da900b4/ab855bd48c774c7ab05693716edc55fd.png)

### 3-3 旋转和缩放
(03. Selecting and Manipulating Objects03 - Rotating and scaling_原文)

(Source:  [aliyun.com: 03. Selecting and Manipulating Objects03 - Rotating and scaling](https://tingwu.aliyun.com/doc/transcripts/82xz94l8447oqm6v))


本文介绍了Maya中用于旋转和缩放对象的工具。旋转工具可通过按钮或快捷键"E"访问,允许用户围绕红、绿、蓝三个轴旋转对象。旋转工具界面包括代表不同轴的彩色圆圈,以及一个用于自由旋转的中心点。缩放工具类似于移动和旋转工具的结合,允许沿特定轴或全局缩放对象。文章强调,当选择多个对象时,每个对象都会围绕自身的轴心进行旋转或缩放。这些工具为Maya中的对象操作提供了更多灵活性和精确控制。

• 🖱️ 点击旋转工具按钮或按快捷键"E"来激活旋转工具
• 🔄 尝试使用红色、绿色和蓝色轴来旋转物体
• 🔁 尝试使用环绕物体的圆圈进行相对于视角轴的旋转
• ✋ 尝试点击轴心进行自由旋转
• 🔢 尝试选择多个物体并同时旋转
• 📏 使用缩放工具来调整物体大小
• ↔️ 尝试沿特定轴或多个轴同时缩放物体
• 🔍 尝试选择多个物体并同时缩放
• 🎨 记住颜色代表的轴：红色是x轴，蓝色是z轴，绿色是y轴
两个轴缩放

![](https://tingwu.aliyun.com/api/editor/get/v2/524379/0/227becc48021445aabb897521d81fa6e/dce1087c14994a27871a9f7623dd7df1.png)

三个对象一起旋转

![](https://tingwu.aliyun.com/api/editor/get/v2/524379/0/393179aca64a4e4c9b857ea41735eafc/b8b1e18c5d064bfea2a9d95d59db5c3a.png)
### 3-4 操纵对象轴心点的技巧

(03. Selecting and Manipulating Objects04 - Manipulating pivots_原文)

(Source:  [aliyun.com: 03. Selecting and Manipulating Objects04 - Manipulating pivots](https://tingwu.aliyun.com/doc/transcripts/372e9o3g22bk9xb6))

在Maya中操纵对象轴心点的重要性和方法。轴心点是对象旋转和缩放的参考点。文章以一个螺旋桨模型为例，演示了两种调整轴心点的方法：

1. 自动居中：使用"Modify > Center Pivot"命令快速将轴心点居中。
2. 手动调整：按住D键可以精确移动轴心点的位置和方向。

编辑 pivot Point 

![](https://tingwu.aliyun.com/api/editor/get/v2/524379/0/dba5337895e34132a124466979a538d3/6e48352d3c1e400a8bd287cd41a0237c.png)

复原 pivot Point 

![](https://tingwu.aliyun.com/api/editor/get/v2/524379/0/0ada6137ebdb48e6b88a9f38cd513d6c/796598a0500e4d07941a889d47c431e2.png)

### 3-5 在Maya中复制对象副本
(03. Selecting and Manipulating Objects05 - Duplicating objects_原文)

(Source:  [aliyun.com: 03. Selecting and Manipulating Objects05 - Duplicating objects](https://tingwu.aliyun.com/doc/transcripts/gpjbqkjoyybenk2a))
在3D建模和动画软件Maya中复制对象的各种方法。它涵盖了四种主要技术：

1. 复制和粘贴：使用Edit > Copy (Ctrl+C)和Edit > Paste (Ctrl+V)创建对象的精确副本。
2. 复制：使用Edit > Duplicate (Ctrl+D)快速创建和移动副本。
3. 特殊复制：访问更高级的选项，用于创建具有特定变换的多个副本。
4. 带变换的复制：使用 Shift+D在复制时重复上一次应用于对象的变换。 **(演示中带位移以及旋转)**


### 3-6 了解Channel Box的使用
(03. Selecting and Manipulating Objects06 - Understanding the Channel Box_原文)

(Source:  [aliyun.com: 03. Selecting and Manipulating Objects06 - Understanding the Channel Box](https://tingwu.aliyun.com/doc/transcripts/47z39vb8pplgnedg))

Maya的Channel Box是个调整场景对象的工具。它在界面右侧显示所选物体属性,可通过输入或拖动来调整位置、旋转和大小,支持多属性同时修改。

多选, 并结合`中建` 充当 传统用轴变换

![](https://tingwu.aliyun.com/api/editor/get/v2/524379/0/8f9a8b8afcdb4df682b561cfa4f43d3e/9f7e5e248d4e48408451689ce4b4eed2.png)

### 3-7 Attribute Editor 编辑对象属性

(03. Selecting and Manipulating Objects07 - Working with the Attribute editor_原文)

(Source:  [aliyun.com: 03. Selecting and Manipulating Objects07 - Working with the Attribute editor](https://tingwu.aliyun.com/doc/transcripts/2erk9x6boo3o9ml8))

本文介绍了Maya中Attribute Editor(属性编辑器)的使用方法。相比channel box(通道框),Attribute Editor提供了更全面和精确的对象控制功能。主要内容包括:

提问：Maya的 Channel Box（通道盒）很方便，可以快速调整对象的位置、旋转和缩放，但感觉功能还是不够强大，有没有更全面的参数调节面板呢？

解答： 哈哈，这个问题问得好！Maya 提供了功能更强大的 Attribute Editor（属性编辑器），可以对对象的各个方面进行精细调节。

- 步骤 1 (0:12): 点击 Channel Box（通道盒）右侧的 “Attribute editor” 标签页，即可切换到属性编辑器。 或者：
    
- 步骤 1 (0:16): 点击界面顶部的 “Attribute editor” 按钮，也可以打开属性编辑器。
    
Channel Box
![](https://tingwu.aliyun.com/api/editor/get/v2/524379/0/368b8fbd404a45aeb8852615d28e1dc7/3cb5aa2ddf024511af0c6b934087bac4.png)

Attribute editor
![](https://tingwu.aliyun.com/api/editor/get/v2/524379/0/2562b53e551f4974a6af5a9e30ec4759/b5d30ca443244a5490f079076bd91575.png)

提问：哇！属性编辑器看起来好复杂！这么多标签页，它们都是干什么用的？

解答： 别担心，其实它很简单！每个标签页都对应着对象的不同属性。

- 步骤 1 (0:25): 点击属性编辑器顶部的 “XXXX” 标签页，这是对象的 “主节点”(main node)，包含了基本的位置、旋转和缩放信息。
    
- 步骤 2 (0:50): 使用标签页旁边的箭头按钮，可以切换到其他标签页。例如点击向左的箭头，可以切换到 “XXXXShape” 标签页。
    
- 步骤 3 (1:31): “XXXXShape” 标签页对应着对象的 “形状节点”，包含了控制几何体形状、显示模式、材质等信息。
    

XXXX 的一切, 就如你的简历一样, 姓名, 性别, 年龄,....

![](https://tingwu.aliyun.com/api/editor/get/v2/524379/0/466c62dbb8fe4b6bab5536e01d5e72b5/0a651cbd89f844ecad9b6dea35afad6a.png)

提问：太酷了！也就是说，我可以通过属性编辑器修改对象的材质颜色？

解答： 没错！属性编辑器可以精细控制对象的材质。

- 步骤 1 (1:56): 使用标签页旁边的箭头按钮，切换到对象的材质节点标签页，例如 “XXXXTailMat”。
    
- 步骤 2 (2:03): 在 “XXXXTailMat” 标签页中找到 “Color” 属性，点击颜色样本。
    
- 步骤 3 (2:11): 在弹出的颜色选择器中选择你想要的颜色，然后点击 “接受”。
    

![](https://tingwu.aliyun.com/api/editor/get/v2/524379/0/b8879b95187b4552bfcd3f03865ad92b/fbac316e75cc4d6b90e169fe3d12fae6.png)

### 3-8 Maya中使用对齐工具提高对象操作精度

(03. Selecting and Manipulating Objects08 - Maintain accuracy with snapping_原文)

(Source:  [aliyun.com: 03. Selecting and Manipulating Objects08 - Maintain accuracy with snapping](https://tingwu.aliyun.com/doc/transcripts/372e9o3g22kk9xb6))


本文介绍了Maya中使用对齐(Snap)工具来提高对象操作精度的方法。

🖱️ 使用Maya的Snap工具来提高操作对象时的精确度。
🔘 在ribbon中使用snap to grids（X键）、snap to curves（C键）和snap to points（V键）按钮。
📏 使用snap to grids功能将对象的轴心点对齐到网格。
🔄 使用字母D键重新定位对象的轴心点。
🎯 使用snap to points功能将对象对齐到其他对象或曲线上的点。
➰ 使用snap to curves功能将对象对齐到曲线上，记得先将对象移动到靠近曲线的位置。
🔑 记住快捷键：X键用于snap to grid，C键用于snap to curve，V键用于snap to point。

![](https://tingwu.aliyun.com/api/editor/get/v2/524379/0/65a1d5f0a47841eb985e91011eda1766/80f4e342898f47989b05c4b144974793.png)

然后中间 click Curve.

![](https://tingwu.aliyun.com/api/editor/get/v2/524379/0/f2dce1e28e4f4192b15c17bcf54e286c/58a7e5c7134c40919bb9f5def1fb2e01.png)![](https://tingwu.aliyun.com/api/editor/get/v2/524379/0/05be30ef277f4bf88f55e7e7ee5c284e/34d76ec4a6cb41c1b793edd123b24f13.png)

pivot Point ![](https://tingwu.aliyun.com/api/editor/get/v2/524379/0/eaa2d79cf2eb4debaac4c23ed20ff06c/c437e2aa180c4779a62f51c47079776d.png)


## 4 组织场景

在Maya中组织场景:使用Outliner、层级结构、分组和显示控制

摘要:
本文介绍了在Maya中组织3D场景的几种重要方法:
1. 使用Outliner窗口查看和选择场景中的所有对象。
2. 创建层级结构,将相关对象组织在一起。
3. 使用分组功能创建空对象来容纳其他对象。
4. 创建显示层来控制对象的可见性和可选择性。
5. 使用隐藏/显示和可见性属性来控制单个对象的显示。(隐身斗篷)

这些技术可以帮助艺术家更有效地组织和管理复杂的3D场景,提高工作效率。


### 4-1 使用Outliner(大纲视图)组织场景

本文介绍了Maya中大纲视图(Outliner)的使用方法及其重要性。大纲视图是Maya界面左侧的一个窗口，显示场景中所有对象的层级列表。主要内容包括：

1. 如何打开和停靠大纲视图窗口
2. 大纲视图中对象的选择方法，包括单选、多选和层级选择
3. 对象图标的含义，如摄像机、几何体和组等
4. 如何展开和查看对象层级结构
5. 在大纲视图中重命名对象的方法
6. 使用过滤器显示特定类型的对象，如灯光或摄像机
7. 大纲视图作为Maya场景组织工具的重要性

文章强调了大纲视图是Maya中保持场景组织性的重要工具，能够帮助用户更好地管理和操作复杂场景中的各种对象。

• 🖥️ 如果没有看到Outliner窗口,可以通过Windows > Outliner菜单打开

• 🖱️ 左键单击并拖动Outliner窗口的标题栏,将其停靠到Maya界面的左侧

• 👆 在Outliner中左键单击对象名称来选择场景中的对象

• ⌨️ 按住Shift键可以在Outliner中选择连续的多个对象

• ⌨️ 按住Ctrl键可以在Outliner中选择不连续的多个对象  

• ➕ 点击对象名称旁边的加号以展开层级结构

• ✏️ 双击对象名称可以重命名对象

• 🔍 使用Outliner的过滤选项来显示特定类型的对象(如灯光、摄像机等)

• 🔄 使用Outliner底部的"Clear"选项可以重置过滤,显示所有对象

### 4-2 层级结构

(4-2  Creating hierarchies)

本文介绍了如何在Maya中使用层级结构来组织场景。主要内容包括：

1. 层级结构的概念：将对象分组和排列，使它们相互连接。

2. 创建层级的方法：在Outliner中使用中键点击并拖动来建立父子关系。

3. 实际操作示例：
   - 将塔楼各部分组织成层级结构
   - 为飞船创建层级结构
   - 调整和重新排列层级中的对象

4. 层级结构的优势：
   - 方便整体选择和移动
   - 保持场景组织有序

5. 额外技巧：
   - 如何从层级中移除对象
   - 在Outliner中重新排列对象以保持相似物体在一起

文章强调了层级结构是Maya中连接对象和保持场景组织的有效方法。

🖱️ 在大纲视图中使用中键点击并拖动来创建层级结构

🏗️ 尝试将塔的各个部分（如塔基、塔身、对接环和灯）组织成一个层级结构

🎈 为飞船创建一个层级结构，包括船舱、两个鼻子和尾部

🔀 练习在大纲视图中重新排列对象，例如将摄像机移到塔基上方

🗂️ 使用层级结构来组织和连接Maya场景中的相关对象

🔍 探索如何选择对象并将其从层级结构中移出

👀 注意在拖动对象时，观察单杠和双杠的区别，以正确放置对象在层级中的位置

### 4-3 对象分组技术
(4-3 Organizing Maya Scenes03 - Grouping objects)

本文介绍了在Maya中使用分组功能来组织和管理场景对象的方法。主要内容包括：

1. 分组的基本概念：分组是创建空对象来容纳其他对象，形成层级结构。

2. 创建分组的步骤：选择多个对象，使用Edit group或Control G命令创建分组。

3. 分组的应用：以岩石和灯光为例，展示如何将相关对象组织到一起。

4. 分组的特性：分组本身是一个占位符，不会被渲染，仅用于组织管理。

5. 解除分组：介绍了两种方法来解除分组，包括直接移出对象和删除整个组。

6. 分组的优势：便于整体移动和管理相关对象，提高场景组织效率。

文章强调分组是Maya中组织对象和创建层级结构的有效方法，对于管理复杂场景非常有用。

以下是从文本中提取的读者需要采取的行动项目：

🪨 选择岩石对象（从Rock 01到Rock 06）

🔼 使用Edit group或按Control G来对选中的岩石进行分组

✏️ 双击组名并将其重命名为"rock group"

💡 选择场景中的所有灯光

🔼 按Control G对选中的灯光进行分组

✏️ 双击新建的灯光组并将其重命名为"light group"

🔙 如果需要撤销分组操作，可以使用撤销功能

🗑️ 要删除组并将对象返回到主层级，选择组后使用Edit > Ungroup命令

这些行动项目概括了在Maya中使用分组功能来组织场景对象的主要步骤。通过这些操作，用户可以更有效地管理和组织复杂的3D场景。

### 4-4 创建图层

本文介绍了在Maya中使用图层来组织场景的方法。主要内容包括:

1. 图层的基本功能:控制对象的显示和选择状态。

2. 创建图层的两种方式:
   - 从选定对象创建
   - 创建空图层后添加对象

3. 图层的显示状态:
   - V: 显示/隐藏
   - T: 模板(仅线框显示,无法选择)
   - R: 渲染(可渲染但无法选择)

4. 图层命名和管理技巧

5. 为不同类型的对象(如建筑、环境、灯光)创建单独的图层

6. 使用图层来防止意外选择某些对象

7. 灯光图层的特殊注意事项

文章强调了图层在保持场景组织性、控制对象可见性和选择性方面的重要作用,有助于提高Maya场景管理的效率。

• 🖱️ 确保在 Maya 中选择了 channel box 选项卡

• 👁️ 在 channel box 下方的面板中激活"display"选项

• 🏢 选择场景中的建筑物（如 building control tower 和 building quant huts），创建图层

• ✏️ 双击图层名称，将建筑物图层重命名为更具描述性的名称（如"buildings layer"）

• 🆕 创建一个空图层

• 🌳 选择地面和背景元素（如 ground、ground pavement、grass edge 和 railing），将它们添加到新创建的空图层中

• 🏷️ 将新创建的图层重命名为更合适的名称（如"BG layer"或"environment layer"）

• 💡 为场景中的灯光创建单独的图层

• 🔒 考虑将灯光图层设置为"R"模式，以防止意外选择



### 4-5 隐藏对象的技巧
(4-4  Hiding and showing objects)

本文介绍了在Maya中控制对象显示的方法,主要包括隐藏(hide)和显示(show)功能,以及可见性(visibility)属性的使用。

主要内容包括:
1. 使用hide和show命令隐藏和显示单个或多个对象
2. 通过Outliner面板管理隐藏的对象
3. 利用visibility属性控制对象的可见性
4. 快捷键操作:Control+H隐藏,Shift+H显示
5. 批量隐藏和显示对象的方法

这些技巧可以帮助用户在复杂场景中临时隐藏不需要的对象,提高工作效率。文章强调了这些方法在Maya场景组织中的重要性,可以根据需要灵活显示或隐藏对象。


• 🖱️ 在Maya中选择想要隐藏的对象
• 🔳 使用Display菜单中的Hide/Show选项或快捷键来隐藏/显示对象
• ⌨️ 使用Control+H快捷键来隐藏选中的对象
• ⌨️ 使用Shift+H快捷键来显示最后隐藏的对象
• 👁️ 在Channel Box中通过调整Visibility属性来控制对象的可见性
• 📝 在Visibility属性框中输入"on"或"off"来显示或隐藏对象
• 🖱️ 可以多选对象,同时调整它们的可见性
