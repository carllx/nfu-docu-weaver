# Maya 上传模型到 Sketchfab 完整指南

**更新时间**: 2025-10-09  
**适用版本**: Maya 2014 - 2022

---

## 📦 第一部分：Maya 插件安装

### 1. 下载和安装

#### 下载地址
- **官方下载**: https://sketchfab.com/exporters/maya
- **Autodesk App Store**: 也可以从 Autodesk 应用商店下载

#### 安装步骤

**Windows**:
1. 下载 `.msi` 安装文件
2. 双击运行安装程序
3. 按照向导完成安装

**Mac OS X**:
1. 下载 `.pkg` 安装文件
2. 双击运行安装程序
3. 按照向导完成安装

**Linux**:
1. 下载 `.sh` 文件
2. 解压到主目录
3. 在终端中执行脚本

### 2. 验证安装

安装完成后，插件会自动添加到 Maya 的 **Custom** 工具架中。

#### 检查 FBX 插件
Maya 导出器使用 FBX 格式，需要确保 FBX 插件已加载：

1. 打开 Maya
2. 进入 `Window → Settings/Preferences → Plug-in Manager`
3. 查找并确保以下插件已勾选：
   - Mac: `fbxmaya.bundle`
   - Windows: `fbxmaya.mll`
4. 如果未加载，勾选 `Loaded` 和 `Auto load`

---

## 🎨 第二部分：Maya 内的模型准备

### 1. 场景设置

#### 单位设置（重要！）
```
Window → Settings/Preferences → Preferences → Settings
```
- **Linear**: 设置为 `meter` (米)
- **Angular**: 设置为 `degree` (度)
- **Time**: 根据需要设置（如果有动画）

**为什么重要**: 确保模型在 Sketchfab 中的尺寸正确显示。

#### 坐标系统
- Maya 默认使用 **Y-up** 坐标系
- Sketchfab 也使用 Y-up 坐标系
- ✅ 通常无需特殊调整

### 2. 模型优化

#### 面数控制
| 模型类型 | 推荐面数 |
|---------|---------|
| 单个简单模型 | < 50,000 面 |
| 单个复杂模型 | < 100,000 面 |
| 完整场景 | < 300,000 面 |
| 免费用户（文件大小限制） | 需保持在 100MB 内 |

**优化方法**:
```
Mesh → Reduce
```
- 使用 Reduce 工具减少多边形数量
- 保持模型轮廓的同时优化面数

#### 清理模型
```
Mesh → Cleanup
```
勾选以下选项：
- ✅ Remove zero geometry
- ✅ Remove zero edge length
- ✅ Remove non-manifold geometry
- ✅ Remove lamina faces

### 3. UV 展开

#### 检查 UV
```
UV → UV Editor
```

**必须检查**:
- ✅ UV 是否完整展开
- ✅ 没有重叠的 UV（除非故意设计）
- ✅ 没有反向的 UV
- ✅ UV 在 0-1 范围内（或合理的 UDIM 布局）

**自动展开**:
```
UV → Automatic
```

**展开技巧**:
- 对于有机模型：使用 `UV → Cylindrical Mapping` 或 `Spherical Mapping`
- 对于硬表面：使用 `UV → Planar Mapping` + `UV → Unfold`

### 4. 法线方向

#### 检查法线
```
Display → Polygons → Face Normals
```

**确保**:
- 所有法线朝外
- 没有反面

**修复反面**:
```
Mesh Display → Reverse
```

### 5. 材质和纹理设置

#### 材质数量
- **建议**: ≤ 10 个材质
- **最佳**: 尽可能合并材质
- **原因**: 减少 Draw Calls，提高 Sketchfab 加载速度

#### 纹理格式
| 纹理类型 | 推荐格式 | 尺寸 |
|---------|---------|------|
| **Diffuse/Albedo** | JPG (无透明) / PNG (有透明) | 1024×1024 或 2048×2048 |
| **Normal Map** | PNG (保持细节) | 1024×1024 或 2048×2048 |
| **Roughness/Metallic** | JPG | 1024×1024 |
| **AO (环境光遮蔽)** | JPG | 1024×1024 |

**纹理尺寸规则**:
- ✅ 必须是 2 的幂次方: 512, 1024, 2048, 4096
- ✅ 可以是矩形: 512×1024, 1024×2048
- ❌ 避免: 1000×1000, 1500×1500

#### PBR 材质工作流程

**Sketchfab 支持两种 PBR 工作流程**:

**1. Metallic/Roughness 工作流（推荐）**
```
在 Maya 中使用 Arnold 或 Stingray PBS 材质：
- Base Color (Albedo)
- Metallic (金属度: 0=非金属, 1=金属)
- Roughness (粗糙度: 0=光滑, 1=粗糙)
- Normal Map
- Ambient Occlusion
```

**2. Specular/Glossiness 工作流**
```
- Diffuse
- Specular
- Glossiness
- Normal Map
```

#### 纹理路径
- 确保所有纹理文件与 Maya 场景在同一项目目录下
- 或使用相对路径
- 检查: `File → View Image Sources`

### 6. 动画设置（如果有）

#### 时间轴
```
Window → Animation Editors → Time Slider
```
- 设置正确的起始帧和结束帧
- 确保关键帧在正确的时间点

#### 骨骼命名
- ✅ 使用英文命名
- ✅ 避免特殊字符: `!@#$%^&*()`
- ✅ 使用下划线或驼峰命名: `arm_left` 或 `armLeft`
- ❌ 避免空格和中文

---

## 📤 第三部分：使用 Maya 插件上传

### 1. 配置插件

#### 首次使用设置
1. 在 Maya 的 **Custom** 工具架中点击 Sketchfab 图标
2. 在弹出窗口中，点击 `Settings → Sketchfab Settings`
3. 输入你的 **API Token**:
   - 获取 Token: 访问 https://sketchfab.com/settings/password
   - 复制 API Token 并粘贴到插件中
4. （可选）设置默认标签
5. 点击 `Save`

### 2. FBX 导出设置

在使用插件前，确保 FBX 导出设置正确：

```
File → Export All... → 选择 FBX export
```

**关键设置**:

#### Geometry（几何）
- ✅ `Smoothing Groups`
- ✅ `Smooth Mesh`

#### Animation（动画）
- ✅ `Animation` (如果有动画)
- ✅ `Bake Animation`

#### Embed Media（嵌入媒体）⭐
- ✅ **必须勾选** `Embed Media`
- 这会将纹理嵌入到 FBX 文件中

#### File Format（文件格式）
- **Type**: 选择 `Binary` (二进制)
- **Version**: 使用最新版本或 FBX 2020
- **原因**: 二进制格式文件更小，上传更快

### 3. 上传模型

1. 选择要上传的模型（或不选择以上传整个场景）
2. 点击 Sketchfab 图标
3. 填写信息：
   - **Title** (标题): 必填
   - **Description** (描述): 可选，支持 Markdown
   - **Tags** (标签): 用逗号分隔
   - **Private** (私有): 勾选则不公开显示
   - **Draft** (草稿): 勾选则保存为草稿
4. 点击 `Upload to Sketchfab`
5. 等待上传完成（会显示进度）
6. 上传成功后会显示模型 URL

### 4. 查看日志

如果上传出现问题，可以查看日志：

```
Window → General Editors → Script Editor
```

或查看日志文件（位于 Maya 偏好设置目录）。

---

## 🎬 第四部分：Sketchfab 上的 3D 设置

上传完成后，你需要在 Sketchfab 的 3D 编辑器中调整渲染设置。

### 1. 进入 3D 编辑器

1. 访问你的模型页面
2. 点击右下角的 **"Edit 3D Settings"** 按钮
3. 进入 3D 编辑器界面

### 2. 材质设置 (Materials)

#### 基础材质参数
```
Materials → [选择材质]
```

**PBR 参数**:
- **Base Color / Albedo**: 基础颜色
  - 可以使用纯色或纹理贴图
  - 避免过亮或过暗（中性灰为 sRGB 186）

- **Metallic** (金属度): 0-1
  - 0 = 非金属（木头、塑料、布料）
  - 1 = 金属（铁、金、铜）
  - 通常使用 0 或 1，很少用中间值

- **Roughness** (粗糙度): 0-1
  - 0 = 完全光滑（镜面）
  - 1 = 完全粗糙（哑光）
  - 真实材质通常在 0.2-0.8 之间

- **Normal Map** (法线贴图):
  - 添加表面细节
  - 调整强度: 0.5-2.0
  - 格式: Tangent Space (切线空间)

- **Ambient Occlusion** (环境光遮蔽):
  - 增强深度感
  - 强度: 0.5-1.5
  - 可以烘焙或使用实时 AO

#### 高级选项
- **Emissive** (自发光): 让材质发光
- **Opacity** (透明度): 控制透明效果
- **Double Sided** (双面): 显示背面

### 3. 环境和光照 (Scene)

#### Environment (环境)
```
Scene → Environment
```

**Background** (背景):
- **Color**: 纯色背景
- **Image**: 自定义背景图片（Pro 用户）
- **Transparent**: 透明背景（用于嵌入）

**Environment Map** (环境贴图):
- 提供环境光照和反射
- Sketchfab 提供多种预设环境
- Pro 用户可上传自定义 HDR 环境

**环境设置**:
- **Exposure** (曝光): -10 到 +10
  - 调整整体亮度
  - 建议: 0 到 +2

- **Rotation** (旋转): 0-360°
  - 旋转环境贴图
  - 调整光照方向

#### Lighting (光照)
```
Scene → Lighting
```

**Light 1, 2, 3** (最多 3 个灯光):
- **Type** (类型):
  - Directional (平行光): 模拟太阳光
  - Point (点光源): 模拟灯泡
  - Spot (聚光灯): 模拟手电筒

- **Color** (颜色): 灯光颜色
- **Intensity** (强度): 0-10
- **Position** (位置): 调整光源位置
- **Shadows** (阴影): 开启/关闭阴影

**推荐设置**:
```
Light 1 (主光):
- Type: Directional
- Intensity: 1.5-2.0
- Position: 前上方 45°

Light 2 (补光):
- Type: Directional
- Intensity: 0.5-1.0
- Position: 侧面或背面

Light 3 (边缘光):
- Type: Directional
- Intensity: 0.3-0.8
- Position: 背后上方
```

### 4. 后期处理 (Post-Processing)

```
Scene → Post-Processing
```

#### 常用效果

**Tone Mapping** (色调映射):
- **None**: 无色调映射
- **Filmic**: 电影感（推荐）
- **Uncharted**: 游戏风格
- **ACES**: 专业电影标准

**Sharpness** (锐化): 0-2
- 增强细节清晰度
- 建议: 0.5-1.0

**Bloom** (辉光): 0-1
- 为亮部添加光晕效果
- 适合金属和发光材质

**Chromatic Aberration** (色差): 0-1
- 模拟镜头色散
- 艺术效果

**Vignette** (暗角): 0-1
- 边缘变暗效果
- 增强焦点

**Color Balance** (色彩平衡):
- 调整整体色调
- Shadows / Midtones / Highlights

### 5. 摄像机设置 (Camera)

```
Scene → Camera
```

#### 视角设置

**Field of View (FOV)** (视野): 10-90°
- 默认: 45°
- 更小的 FOV: 更"平"的透视（适合建筑）
- 更大的 FOV: 更夸张的透视（适合室内）

**Camera Constraints** (相机约束):
- **Orbit**: 环绕模型旋转（默认）
- **First Person**: 第一人称视角
- **VR**: VR 模式

**Limits** (限制):
- **Min Distance** (最小距离): 防止相机过近
- **Max Distance** (最大距离): 防止相机过远
- **Pitch Limits** (俯仰限制): 限制上下旋转角度
- **Yaw Limits** (偏航限制): 限制左右旋转角度

#### 设置默认视角

1. 在 3D 视图中调整到最佳角度
2. 点击右下角的 **"Set Current View as Default"**
3. 这将成为用户打开模型时看到的第一个视角

### 6. 注释 (Annotations)

```
Annotations → Add Annotation
```

**免费用户限制**: 最多 10 个注释

**添加注释**:
1. 点击模型上的位置
2. 输入标题和描述
3. 可以添加图片和链接
4. 调整注释的位置和样式

**用途**:
- 解释模型细节
- 标注重要部分
- 添加交互说明

### 7. 动画设置 (Animations)

如果模型包含动画：

```
Animations → [选择动画]
```

**设置**:
- **Autoplay** (自动播放): 页面加载时自动播放
- **Loop** (循环): 循环播放
- **Speed** (速度): 调整播放速度
- **Start/End Frame** (起始/结束帧): 设置播放范围

---

## ✅ 第五部分：检查清单

### Maya 导出前检查

- [ ] 单位设置为米（meter）
- [ ] UV 已正确展开，无重叠
- [ ] 法线方向正确，无反面
- [ ] 面数在合理范围内（< 100K）
- [ ] 模型已清理（无零面积面、重复顶点）
- [ ] 材质数量 ≤ 10 个
- [ ] 纹理格式正确（JPG/PNG）
- [ ] 纹理尺寸为 2 的幂次方
- [ ] 纹理路径正确，可访问
- [ ] FBX 导出设置中 "Embed Media" 已勾选
- [ ] 文件大小 < 100MB（免费用户）

### Sketchfab 上传后检查

- [ ] 模型方向正确（没有倒置或旋转）
- [ ] 纹理正确加载，无缺失
- [ ] 材质显示正常，无全黑或全白
- [ ] 光照合理，无过暗或过亮
- [ ] 设置了合适的默认视角
- [ ] 添加了标题、描述和标签
- [ ] 选择了正确的分类
- [ ] 设置了隐私选项（公开/私有）

---

## 🔧 第六部分：常见问题和解决方案

### 1. 纹理丢失或显示不正确

**问题**: 上传后模型没有纹理或纹理错误

**解决方案**:
- ✅ 确保 FBX 导出时勾选了 "Embed Media"
- ✅ 检查纹理路径是否正确
- ✅ 使用 `File → View Image Sources` 检查纹理引用
- ✅ 纹理格式使用 JPG 或 PNG
- ✅ 避免使用 Maya 特有的纹理节点（如 layeredTexture）

### 2. 模型全黑或全白

**问题**: 模型上传后显示为纯黑或纯白

**原因**:
- 材质设置不正确
- 法线贴图格式错误
- 缺少环境光照

**解决方案**:
- 在 Sketchfab 编辑器中调整材质参数
- 检查 Metallic 和 Roughness 值
- 增加环境光照强度
- 检查法线贴图是否为切线空间

### 3. 模型尺寸不正确

**问题**: 模型在 Sketchfab 中过大或过小

**解决方案**:
- 在 Maya 中设置单位为米（meter）
- 检查模型的实际尺寸（`Display → Heads Up Display → Object Details`）
- 在 Sketchfab 中可以手动调整缩放

### 4. 动画不播放

**问题**: 上传的动画无法播放

**解决方案**:
- 确保 FBX 导出时勾选了 "Animation"
- 勾选 "Bake Animation"
- 检查骨骼命名是否有特殊字符
- 确保动画关键帧在正确的时间范围内

### 5. 文件过大无法上传

**问题**: 免费用户文件大小超过 100MB

**解决方案**:
- 压缩纹理（降低分辨率或使用 JPG 格式）
- 减少模型面数（使用 Reduce 工具）
- 减少材质数量
- 移除不必要的动画数据
- 使用二进制 FBX 格式

### 6. 透明材质显示错误

**问题**: 透明材质显示为不透明或有排序问题

**解决方案**:
- 使用 PNG 格式的透明贴图
- 在 Sketchfab 编辑器中启用 "Transparency"
- 调整 "Opacity" 参数
- 对于复杂透明，使用 "Alpha Test" 而不是 "Alpha Blend"

---

## 📚 第七部分：推荐工作流程

### 标准工作流程

```
1. 在 Maya 中完成建模和 UV
   ↓
2. 应用材质和纹理
   ↓
3. 检查并优化模型（面数、UV、法线）
   ↓
4. 设置正确的单位和坐标系
   ↓
5. 配置 FBX 导出设置（Embed Media）
   ↓
6. 使用 Sketchfab 插件上传
   ↓
7. 在 Sketchfab 编辑器中调整材质和光照
   ↓
8. 设置默认视角和相机限制
   ↓
9. 添加注释和描述
   ↓
10. 发布或保存为草稿
```

### PBR 纹理工作流程

**推荐工具链**:
```
Maya 建模 → Substance Painter 纹理绘制 → Sketchfab 展示
```

**Substance Painter 导出设置**:
- 使用 "Sketchfab" 导出预设
- 或使用 "PBR Metallic Roughness" 预设
- 纹理尺寸: 2048×2048 或 4096×4096
- 格式: PNG (法线、AO) + JPG (其他)

---

## 🎯 第八部分：最佳实践总结

### Maya 设置最佳实践

1. **单位**: 始终使用米（meter）
2. **命名**: 使用英文和下划线，避免特殊字符
3. **UV**: 确保完整展开，无重叠
4. **面数**: 保持在合理范围（< 100K）
5. **材质**: 尽量少（≤ 10 个）
6. **纹理**: 2 的幂次方，JPG/PNG 格式

### Sketchfab 设置最佳实践

1. **光照**: 使用 3 点光照（主光、补光、边缘光）
2. **环境**: 选择合适的环境贴图
3. **材质**: 调整 Metallic 和 Roughness 到真实值
4. **后期**: 适度使用 Bloom 和 Sharpness
5. **视角**: 设置最佳默认视角
6. **注释**: 添加有用的说明（最多 10 个）

### 性能优化最佳实践

1. **纹理压缩**: 使用 JPG（除非需要透明）
2. **面数优化**: 使用 LOD（细节层次）
3. **材质合并**: 减少 Draw Calls
4. **文件格式**: 使用二进制 FBX
5. **动画烘焙**: 简化动画数据

---

## 📖 相关资源

- **Maya 导出器**: https://sketchfab.com/exporters/maya
- **Sketchfab 帮助中心**: https://help.sketchfab.com
- **PBR 纹理指南**: https://help.sketchfab.com/hc/en-us/articles/204429595
- **API Token**: https://sketchfab.com/settings/password
- **Autodesk Knowledge Base**: https://knowledge.autodesk.com

---

## 📸 截图参考

- Maya 导出器页面截图: `maya-sketchfab-exporter.png`
- Sketchfab 上传页面截图: `sketchfab-upload-page.png`

---

**提示**: 建议先用简单模型测试整个流程，熟悉后再上传复杂项目！

