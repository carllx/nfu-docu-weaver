以下是 TalkToFigma 所有可使用工具的详细说明：

1. **TalkToFigma.get_document_info**
   - 描述：获取当前 Figma 文档的详细信息
   - 参数：无

2. **TalkToFigma.get_selection**
   - 描述：获取当前在 Figma 中的选择信息
   - 参数：无

3. **TalkToFigma.read_my_design**
   - 描述：获取当前选择在 Figma 中的详细信息，包括所有节点细节
   - 参数：无

4. **TalkToFigma.get_node_info**
   - 描述：获取 Figma 中特定节点的详细信息
   - 参数：
     - nodeId* (str): 要获取信息的节点 ID

5. **TalkToFigma.get_nodes_info**
   - 描述：获取 Figma 中多个节点的详细信息
   - 参数：
     - nodeIds* (List[str]): 要获取信息的节点 ID 数组

6. **TalkToFigma.create_rectangle**
   - 描述：在 Figma 中创建一个新的矩形
   - 参数：
     - x* (float): X 位置
     - y* (float): Y 位置
     - width* (float): 矩形宽度
     - height* (float): 矩形高度
     - name (str): 矩形的可选名称
     - parentId (str): 可选的父节点 ID，用于将矩形附加到父节点

7. **TalkToFigma.create_frame**
   - 描述：在 Figma 中创建一个新的框架
   - 参数：
     - x* (float): X 位置
     - y* (float): Y 位置
     - width* (float): 框架宽度
     - height* (float): 框架高度
     - name (str): 框架的可选名称
     - parentId (str): 可选的父节点 ID，用于将框架附加到父节点
     - fillColor (object): 填充颜色，采用 RGBA 格式
     - strokeColor (object): 描边颜色，采用 RGBA 格式
     - strokeWeight (float): 描边粗细
     - layoutMode (str): 框架的自动布局模式
     - layoutWrap (str): 自动布局框架是否包裹其子元素
     - paddingTop (float): 自动布局框架的上边距
     - paddingRight (float): 自动布局框架的右边距
     - paddingBottom (float): 自动布局框架的下边距
     - paddingLeft (float): 自动布局框架的左边距
     - primaryAxisAlignItems (str): 自动布局框架的主轴对齐方式
     - counterAxisAlignItems (str): 自动布局框架的次轴对齐方式
     - layoutSizingHorizontal (str): 自动布局框架的水平尺寸模式
     - layoutSizingVertical (str): 自动布局框架的垂直尺寸模式
     - itemSpacing (float): 自动布局框架中子元素之间的间距

8. **TalkToFigma.create_text**
   - 描述：在 Figma 中创建一个新的文本元素
   - 参数：
     - x* (float): X 位置
     - y* (float): Y 位置
     - text* (str): 文本内容
     - fontSize (float): 字体大小（默认：14）
     - fontWeight (float): 字体粗细（例如，400 表示常规，700 表示粗体）
     - fontColor (object): 文本颜色，采用 RGBA 格式
     - name (str): 文本节点的语义层名称
     - parentId (str): 可选的父节点 ID，用于将文本附加到父节点

9. **TalkToFigma.set_fill_color**
   - 描述：设置 Figma 中节点的填充颜色
   - 参数：
     - nodeId* (str): 要修改的节点 ID
     - r* (float): 红色分量（0-1）
     - g* (float): 绿色分量（0-1）
     - b* (float): 蓝色分量（0-1）
     - a (float): Alpha 分量（0-1）

10. **TalkToFigma.set_stroke_color**
    - 描述：设置 Figma 中节点的描边颜色
    - 参数：
      - nodeId* (str): 要修改的节点 ID
      - r* (float): 红色分量（0-1）
      - g* (float): 绿色分量（0-1）
      - b* (float): 蓝色分量（0-1）
      - a (float): Alpha 分量（0-1）
      - weight (float): 描边粗细

11. **TalkToFigma.move_node**
    - 描述：在 Figma 中移动节点到新位置
    - 参数：
      - nodeId* (str): 要移动的节点 ID
      - x* (float): 新的 X 位置
      - y* (float): 新的 Y 位置

12. **TalkToFigma.clone_node**
    - 描述：在 Figma 中克隆现有节点
    - 参数：
      - nodeId* (str): 要克隆的节点 ID
      - x (float): 克隆节点的新 X 位置
      - y (float): 克隆节点的新 Y 位置

13. **TalkToFigma.resize_node**
    - 描述：在 Figma 中调整节点大小
    - 参数：
      - nodeId* (str): 要调整大小的节点 ID
      - width* (float): 新宽度
      - height* (float): 新高度

14. **TalkToFigma.delete_node**
    - 描述：从 Figma 中删除节点
    - 参数：
      - nodeId* (str): 要删除的节点 ID

15. **TalkToFigma.delete_multiple_nodes**
    - 描述：同时从 Figma 中删除多个节点
    - 参数：
      - nodeIds* (List[str]): 要删除的节点 ID 数组

16. **TalkToFigma.export_node_as_image**
    - 描述：将 Figma 中的节点导出为图像
    - 参数：
      - nodeId* (str): 要导出的节点 ID
      - format (str): 导出格式
      - scale (float): 导出比例

17. **TalkToFigma.set_text_content**
    - 描述：设置 Figma 中现有文本节点的文本内容
    - 参数：
      - nodeId* (str): 要修改的文本节点 ID
      - text* (str): 新的文本内容

18. **TalkToFigma.get_styles**
    - 描述：获取当前 Figma 文档中的所有样式
    - 参数：无

19. **TalkToFigma.get_local_components**
    - 描述：获取 Figma 文档中的所有本地组件
    - 参数：无

20. **TalkToFigma.get_annotations**
    - 描述：获取当前文档或特定节点中的所有注释
    - 参数：
      - nodeId (str): 可选，获取特定节点的注释
      - includeCategories (bool): 是否包含类别信息

21. **TalkToFigma.set_annotation**
    - 描述：创建或更新注释
    - 参数：
      - nodeId* (str): 要添加注释的节点 ID
      - annotationId (str): 要更新的注释 ID（如果更新现有注释）
      - labelMarkdown* (str): Markdown 格式的注释文本
      - categoryId (str): 注释类别的 ID
      - properties (List[object]): 注释的附加属性

22. **TalkToFigma.set_multiple_annotations**
    - 描述：在节点中并行设置多个注释
    - 参数：
      - nodeId* (str): 包含要注释元素的节点 ID
      - annotations* (List[object]): 要应用的注释数组

23. **TalkToFigma.create_component_instance**
    - 描述：在 Figma 中创建组件的实例
    - 参数：
      - componentKey* (str): 要实例化的组件的键
      - x* (float): X 位置
      - y* (float): Y 位置

24. **TalkToFigma.set_corner_radius**
    - 描述：设置 Figma 中节点的圆角半径
    - 参数：
      - nodeId* (str): 要修改的节点 ID
      - radius* (float): 圆角半径值
      - corners (List[bool]): 可选的 4 个布尔值数组，指定要圆角的角 [左上, 右上, 右下, 左下]

25. **TalkToFigma.scan_text_nodes**
    - 描述：扫描所选 Figma 节点中的所有文本节点
    - 参数：
      - nodeId* (str): 要扫描的节点 ID

26. **TalkToFigma.scan_nodes_by_types**
    - 描述：在所选 Figma 节点中扫描特定类型的节点
    - 参数：
      - nodeId* (str): 要扫描的节点 ID
      - types* (List[str]): 要查找的节点类型数组（例如 ['COMPONENT', 'FRAME']）

27. **TalkToFigma.set_multiple_text_contents**
    - 描述：在节点中并行设置多个文本内容
    - 参数：
      - nodeId* (str): 包含要替换文本节点的节点 ID
      - text* (List[object]): 文本节点 ID 和其替换文本的数组

28. **TalkToFigma.set_layout_mode**
    - 描述：设置 Figma 中框架的布局模式和包裹行为
    - 参数：
      - nodeId* (str): 要修改的框架 ID
      - layoutMode* (str): 框架的布局模式
      - layoutWrap (str): 自动布局框架是否包裹其子元素

29. **TalkToFigma.set_padding**
    - 描述：设置 Figma 中自动布局框架的边距值
    - 参数：
      - nodeId* (str): 要修改的框架 ID
      - paddingTop (float): 上边距值
      - paddingRight (float): 右边距值
      - paddingBottom (float): 下边距值
      - paddingLeft (float): 左边距值

30. **TalkToFigma.set_axis_align**
    - 描述：设置 Figma 中自动布局框架的主轴和次轴对齐方式
    - 参数：
      - nodeId* (str): 要修改的框架 ID
      - primaryAxisAlignItems (str): 主轴对齐方式（MIN/MAX = 水平中的左/右，垂直中的上/下）
      - counterAxisAlignItems (str): 次轴对齐方式（MIN/MAX = 水平中的上/下，垂直中的左/右）

31. **TalkToFigma.set_layout_sizing**
    - 描述：设置 Figma 中自动布局框架的水平尺寸和垂直尺寸模式
    - 参数：
      - nodeId* (str): 要修改的框架 ID
      - layoutSizingHorizontal (str): 水平尺寸模式（HUG 仅用于框架/文本，FILL 仅用于自动布局子元素）
      - layoutSizingVertical (str): 垂直尺寸模式（HUG 仅用于框架/文本，FILL 仅用于自动布局子元素）

32. **TalkToFigma.set_item_spacing**
    - 描述：设置自动布局框架中子元素之间的距离
    - 参数：
      - nodeId* (str): 要修改的框架 ID
      - itemSpacing* (float): 子元素之间的距离

33. **TalkToFigma.join_channel**
    - 描述：加入特定频道以与 Figma 通信
    - 参数：
      - channel (str): 要加入的频道名称