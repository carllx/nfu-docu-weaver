# 🚀 快速开始指南

## 立即获取 Sketchfab 渲染参数

### 方法一：查看已提取的完整报告 ⭐ 推荐
直接打开 `sketchfab-render-params.md`，查看完整的渲染参数分析报告。

**包含内容**：
- ✅ WebGL 渲染器信息
- ✅ 模型文件和纹理清单
- ✅ 环境光照配置
- ✅ 材质系统说明
- ✅ 优化策略建议

---

### 方法二：在浏览器中实时提取参数

#### 第 1 步：打开页面
```
https://sketchfab.com/3d-models/60s-office-props-dc00ea320cfa4aad90811080270672db
```

#### 第 2 步：打开 DevTools
按 `F12` 或右键 > "检查"

#### 第 3 步：切换到 iframe 上下文
1. 在 Console 标签顶部
2. 点击 "top" 下拉菜单
3. 选择含 `/embed/` 的选项

#### 第 4 步：运行脚本
```javascript
// 复制 get-webgl-params.js 的内容并粘贴到 Console
// 或者直接在 Console 中输入：

const canvas = document.querySelector('canvas');
const gl = canvas.getContext('webgl2') || canvas.getContext('webgl');
console.log('WebGL 版本:', gl.getParameter(gl.VERSION));
console.log('渲染器:', gl.getParameter(gl.RENDERER));
console.log('最大纹理:', gl.getParameter(gl.MAX_TEXTURE_SIZE));
```

---

### 方法三：使用 Spector.js 捕获帧（最详细）

#### 第 1 步：安装扩展
[Spector.js Chrome 扩展](https://chrome.google.com/webstore/detail/spector-js/denbgaamihkadbghdceggmchnflmhpmk)

#### 第 2 步：打开页面并捕获
1. 打开 Sketchfab 页面
2. 点击 Spector.js 图标
3. 点击 "Capture"
4. 查看完整的渲染状态

---

## 📊 关键参数速查

### WebGL 渲染器
```
版本: WebGL 2.0
着色器: GLSL ES 3.00
最大纹理: 16384x16384
各向异性: 16x
```

### 模型信息
```
格式: glTF 2.0 (.binz)
三角面: 25,800
顶点: 16,500
文件大小: ~77 KB
```

### 纹理资源
```
格式: JPEG + PNG
类型: BaseColor, Normal, PBR 贴图
CDN: CloudFront
```

### 环境光照
```
类型: IBL (Image-Based Lighting)
文件: 3 个 .bin.gz 环境贴图
用途: 漫反射 + 镜面反射 + 辐照度
```

---

## 🎯 使用场景

### 场景 1: 了解技术栈
**目标**: 知道 Sketchfab 用了什么技术  
**操作**: 阅读 `sketchfab-render-params.md` 第 6 节"材质和着色器系统"

### 场景 2: 复刻渲染效果
**目标**: 实现类似的 3D 查看器  
**操作**: 参考 `README.md` 中的 Three.js/Babylon.js 示例代码

### 场景 3: 调试 WebGL 问题
**目标**: 查看实时渲染状态  
**操作**: 使用 Spector.js 捕获帧并分析

### 场景 4: 学习 PBR 材质
**目标**: 理解基于物理的渲染  
**操作**: 
1. 查看纹理文件列表
2. 分析 uniform 变量
3. 研究着色器代码

---

## 💡 常见问题

### Q1: 为什么访问不到 WebGL 上下文？
**A**: 需要切换到 iframe 上下文，详见"方法二"第 3 步。

### Q2: 如何下载模型文件？
**A**: Sketchfab 页面上有"Download"按钮（需遵守 CC 许可）。

### Q3: 如何获取 uniform 的实际值？
**A**: 使用 Spector.js 捕获帧，在 "Uniforms" 面板查看。

### Q4: 如何查看着色器源码？
**A**: Spector.js > Programs > 选择程序 > 查看 Vertex/Fragment Shader。

---

## 📁 文件结构

```
utils/
├── README.md                      # 完整使用文档
├── QUICK_START.md                # 本文件 - 快速开始指南
├── sketchfab-render-params.md    # 完整参数分析报告 ⭐
├── get-webgl-params.js           # 浏览器脚本
├── sketchfab-page-screenshot.png # 页面截图
└── vs-script-auto-agree.js       # 其他脚本
```

---

## ⏱️ 5 分钟快速上手

1. **查看报告** (1 分钟)  
   打开 `sketchfab-render-params.md`

2. **运行脚本** (2 分钟)  
   打开 Sketchfab > F12 > 切换到 iframe > 运行 `get-webgl-params.js`

3. **捕获帧** (2 分钟)  
   安装 Spector.js > 打开页面 > Capture

---

## 🔗 相关链接

- [Sketchfab 官网](https://sketchfab.com/)
- [WebGL 规范](https://www.khronos.org/webgl/)
- [Three.js 文档](https://threejs.org/docs/)
- [glTF 格式](https://www.khronos.org/gltf/)

---

**提示**: 如果遇到问题，请先查看 `README.md` 中的"注意事项"部分。

