# Sketchfab 免费用户上传指南

**更新时间**: 2025-10-09

## 📍 上传页面位置

### 方法 1: 通过导航栏上传按钮
1. 登录 Sketchfab 账户
2. 点击页面右上角的 **"UPLOAD"** 按钮（带有上传图标 📤）
3. 会自动跳转到上传界面

### 方法 2: 直接访问上传页面
- URL: `https://sketchfab.com/upload`
- 或访问你的个人主页，会看到上传区域

### 方法 3: 从个人主页
1. 访问 `https://sketchfab.com/[你的用户名]`
2. 点击 **"UPLOADS"** 标签
3. 会看到上传界面

## 🎯 上传界面说明

上传界面显示一个大的拖放区域：
```
📦 Drag & Drop or browse
```

支持两种上传方式：
1. **拖放上传**: 直接将文件拖到上传区域
2. **浏览上传**: 点击上传区域，选择文件

## 📁 支持的文件格式

### ✅ 推荐格式 (Recommended)
| 格式 | 扩展名 | 说明 |
|------|--------|------|
| **OBJ** | `.obj` + `.mtl` | Alias Wavefront（需要同时上传 MTL 材质文件和纹理） |
| **Blender** | `.blend` | Blender 原生格式 |
| **FBX** | `.fbx` | Autodesk Filmbox（广泛支持，推荐） |
| **glTF** | `.gltf`, `.glb`, `.bin` | GL Transmission Format（现代 3D 格式） |

### ✅ 其他支持格式 (Other Supported)
| 格式 | 扩展名 | 说明 |
|------|--------|------|
| **3DS** | `.3ds` | 3D Studio |
| **Alembic** | `.abc` | 动画缓存格式 |
| **Collada** | `.dae`, `.zae` | 开放标准格式 |
| **LIDAR** | `.las` | 点云数据 |
| **PLY** | `.ply` | Polygon File Format |
| **STL** | `.stl` | 3D 打印常用格式 |
| **USD** | `.usd`, `.usdz`, `.usda`, `.usdc` | Universal Scene Description |

### ⚠️ 不推荐格式 (Not Recommended)
这些格式被认为是实验性的、过时的或软件特定的：
- `.osg`, `.osgt`, `.osgb` - OpenSceneGraph
- `.wrl`, `.wrz` - VRML（虚拟现实建模语言）
- `.dxf` - Drawing eXchange Format

### 📦 压缩包支持
你可以上传包含模型文件、纹理和材质的压缩包：
- ✅ **ZIP** (`.zip`)
- ✅ **RAR** (`.rar`)
- ✅ **7z** (`.7z`)

**建议**: 如果你的模型有多个纹理文件，打包成 ZIP 上传更方便！

## 🛠️ 上传工具和插件

Sketchfab 提供了多种直接从 3D 软件上传的工具：

### 官方导出插件 (Exporters)
可以直接从以下软件上传到 Sketchfab：

1. **Blender** - 内置 Sketchfab 导出器
2. **3ds Max** - Autodesk 3ds Max 插件
3. **Maya** - Autodesk Maya 插件
4. **Cinema 4D** - Maxon Cinema 4D 插件
5. **Substance Painter** - Adobe Substance Painter 插件
6. **还有更多** - 查看完整列表: https://sketchfab.com/exporters

### 使用导出插件的优势
- ✅ 一键上传，无需手动导出文件
- ✅ 自动打包纹理和材质
- ✅ 保留更多模型信息
- ✅ 减少格式转换错误

## 📝 上传步骤详解

### 步骤 1: 准备文件
1. 确保模型文件大小 ≤ 100MB（免费用户限制）
2. 如果有纹理，确保纹理文件和模型在同一文件夹
3. 建议打包成 ZIP 文件（包含模型 + 纹理 + 材质）

### 步骤 2: 上传文件
1. 访问上传页面
2. 拖放文件或点击浏览选择文件
3. 等待上传完成（显示进度条）

### 步骤 3: 处理和设置
上传后，Sketchfab 会自动处理你的模型：
- 解析 3D 文件
- 应用纹理和材质
- 生成预览

你可以设置：
- 模型名称和描述
- 分类和标签
- 可见性（公开/私有）
- 是否允许下载
- 许可证类型

### 步骤 4: 发布
1. 检查模型预览
2. 调整 3D 设置（如果需要）
3. 点击 **"PUBLISH"** 发布模型

## 💡 免费用户上传技巧

### 1. 优化文件大小
- 减少多边形数量（保持在合理范围）
- 压缩纹理（使用 JPG 而不是 PNG）
- 移除不必要的材质和动画

### 2. 利用"可下载"规则
- 将模型设置为"可下载"可以不计入月度上传限制
- 如果你愿意分享，这是突破 10 个限制的好方法

### 3. 合并场景
- 将多个相关对象合并到一个场景中
- 一个场景只算 1 个模型，无论包含多少对象

### 4. 使用编辑而不是重新上传
- 如果需要更新模型，使用"编辑"功能更新文件
- 避免删除后重新上传（会消耗额度）

### 5. 选择合适的格式
- **FBX**: 最通用，支持动画和材质
- **glTF/GLB**: 现代格式，文件小，适合 Web
- **OBJ**: 简单模型，需要手动处理材质
- **BLEND**: 如果你用 Blender，直接上传原生格式

## 🔗 相关资源

- **上传帮助**: https://help.sketchfab.com/hc/en-us/articles/202600873
- **支持格式列表**: https://support.fab.com/s/article/Supported-3D-File-Formats
- **导出插件**: https://sketchfab.com/exporters
- **纹理和材质指南**: https://help.sketchfab.com/hc/en-us/articles/202600873

## 📊 免费用户限制提醒

| 限制项 | 免费用户 |
|--------|----------|
| 每月上传数量 | 10 个模型 |
| 最大文件大小 | 100MB/模型 |
| 私有模型数量 | 10 个 |
| 可下载模型 | 不计入限制 ✅ |

## 🎬 上传后可以做什么

1. **3D 编辑器**: 调整材质、光照、相机角度
2. **添加注释**: 为模型添加说明（免费用户最多 10 个）
3. **嵌入网站**: 获取嵌入代码，放到你的网站
4. **AR 预览**: 在手机上查看增强现实效果
5. **分享链接**: 分享给朋友或客户

## 📸 截图参考

上传界面截图已保存至: `sketchfab-upload-page.png`

---

**提示**: 如果你经常需要上传模型，考虑使用 Blender 等软件的 Sketchfab 插件，可以大大提高效率！

