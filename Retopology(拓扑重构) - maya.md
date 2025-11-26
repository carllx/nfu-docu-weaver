### Retopology (拓扑重构) 的核心定义与价值
**Retopology** 是指创建一个符合 **High-polygon model** (高模) 形状的 **Low-polygon mesh** (低模) 的过程
这一步骤对于制作 **Animation-friendly** (易于动画) 和 **Game-ready** (游戏引擎就绪) 的资产至关重要
其核心目的是在优化显示性能和动画效率的同时，保留模型外观
根据项目需求，用户可选择 **Manual methods** (追求精准控制) 或 **Automatic methods** (追求快速结果)

### 方案一：使用 Quad Draw 进行手动拓扑 (Manual Retopology)
此方法是角色动画和游戏资产制作的首选方案，因为它提供了对 **Edge flow** (布线流向) 和多边形分布的极致控制
首要步骤是将高模设定为 **Live Surface** (激活表面)，操作为选中物体并点击 Status Line 中的 **Make Live** (磁铁图标)
激活后物体线框会变为深绿色，确保所有新绘制的几何体都会自动 **Snap** (吸附) 到高模表面
打开 **Modeling Toolkit** 面板并激活 **Quad Draw** 工具开始构建网格
在表面点击生成顶点，放置四个点后按住 **Shift+click** 即可在中心生成一个 **Quad** (四边面)
按住 **Ctrl+click** 在边上点击可快速插入 **Edge Loops** (循环边)
按住 **Tab+drag** 拖动现有边框，可以快速延伸出一排多边形，大幅提高拓扑效率
若需修改，直接拖动顶点即可；按住 **Ctrl+Shift+click** 点击顶点可执行删除操作
在拓扑过程中，需重点关注关节等变形区域的 **Edge flow** (布线流向) 以确保动画形变自然
完成后按 **Q** 键或选择其他工具退出 Quad Draw 模式

### 方案二：使用 Mesh Retopologize 进行自动拓扑
该方案适合有机表面或无需复杂动画的资产，虽然速度快但对布线控制力较弱，后期可能需要手动清理
选中高模后，确保位于 **Modeling** 菜单集下
执行路径为 **Mesh > Retopologize** (建议点击选项盒打开详细设置)
在选项窗口中，可以通过调整 **Target Edge Length** (目标边长)、**Topology Regularity** 和 **Face Uniformity** 来控制结果
点击 Retopologize 后，Maya 将基于设定参数生成一个分布均匀的优化四边形网格

### 收尾工作与纹理烘焙 (Final Steps & Baking)
拓扑完成后，务必再次点击 **Make Live** 图标以关闭高模的激活吸附状态
将新创建的 **Low-poly mesh** 移开，实现与高模的分离
最后一步是进行 **Baking Texture Maps** (烘焙纹理贴图)，此步骤常在 **Substance Painter** 或 **Marmoset Toolbag** 中完成
通过烘焙将高模的细节（如 **Normal maps** 法线贴图、**Ambient Occlusion** 环境光遮蔽）投射到低模的 UV 上
这种技术能在保持 **Low poly count** (低面数) 的同时，视觉上模拟出高模的精细细节