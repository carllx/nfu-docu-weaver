### Blender Grease Pencil 表面绘制准备
在 **Object Mode** 下，通过菜单路径 `Add > Grease Pencil > Blank` 添加一个新的空白 Grease Pencil 对象
选中新建的对象后，在 3D Viewport 左上角将模式从 Object Mode 切换为 **Draw Mode**

### 配置 Surface Stroke Placement (表面贴附设置)
按 `T` 键确保左侧工具栏可见，在 **Tools** 选项卡下找到 **Stroke Placement** 设置
将 Placement 模式从默认的 Origin 或 View 更改为 **Surface**，这是实现贴合绘制的关键
设置 **Offset** 数值（建议设为 `0.001`），以使线条略微浮于表面，防止渲染时出现闪烁或穿插进网格内部

### 激活 Line Tool (直线工具)
在左侧工具栏中，点击并长按标准的 **Draw Brush** 图标以展开更多笔刷选项
从列表中选择 **Line Tool**

### 绘制与确认直线
在模型表面的 **起点** 位置点击（使用鼠标左键或数位板笔尖）
按住并 **拖动** 光标至模型上的目标 **终点**，然后释放
利用此时出现的黄色手柄 (**Yellow manipulators**) 对起点和终点进行二次微调
调整满意后，按 `Enter` 键或鼠标中键 (**MMB**) 正式确认并生成线条

### 精度优化与技巧
**临时吸附控制**: 在绘制过程中按住 `Ctrl` 键，可以临时开启或关闭 Snapping 功能，有助于精准定位
**低模优化**: 在 Low-poly 模型上绘制若出现线条锯齿，可添加 **Subdivision Surface modifier** (勾选 Simple 选项) 以提供更平滑的吸附表面
**视图选择**: 切换至正交视图 (**Orthographic View**, 按 `Numpad 5`) 绘制，可确获得更一致的 Offset 表现和可预测的结果