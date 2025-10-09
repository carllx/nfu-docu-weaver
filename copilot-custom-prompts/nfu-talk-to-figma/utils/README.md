# Sketchfab 渲染参数提取工具

本目录包含用于提取和分析 Sketchfab 3D 模型渲染参数的工具和文档。

## 📁 文件说明

### 1. `sketchfab-render-params.md`
完整的渲染参数分析报告，包含：
- WebGL 渲染器信息
- 3D 模型资源文件
- 纹理资源清单
- 环境光照 (IBL) 配置
- 渲染配置参数
- 材质和着色器系统
- 性能优化策略

### 2. `get-webgl-params.js`
可在浏览器 Console 中直接运行的 JavaScript 脚本，用于提取：
- WebGL 基本信息（版本、供应商、渲染器）
- WebGL 能力参数（纹理大小、视口、各向异性过滤等）
- Canvas 尺寸信息
- 当前着色器程序的 Uniform 和 Attribute 变量
- WebGL 渲染状态（深度测试、混合、剔除等）
- 支持的 WebGL 扩展
- Sketchfab API 对象（如果可用）
- 内存使用情况

### 3. `sketchfab-page-screenshot.png`
Sketchfab 页面截图，显示 3D 模型查看器界面

## 🚀 使用方法

### 方法 1: 使用 Chrome DevTools MCP（自动化）

已使用 Chrome DevTools MCP 工具自动获取了以下信息：
- ✅ 网络请求列表（模型文件、纹理、环境贴图）
- ✅ WebGL 基本参数
- ✅ 资源文件 URL 和元数据

### 方法 2: 手动运行脚本（详细参数）

要获取更详细的实时渲染参数，请按以下步骤操作：

#### 步骤 1: 打开目标页面
在 Chrome 浏览器中打开 Sketchfab 模型页面：
```
https://sketchfab.com/3d-models/60s-office-props-dc00ea320cfa4aad90811080270672db
```

#### 步骤 2: 切换到 iframe 上下文
1. 按 `F12` 打开 Chrome DevTools
2. 切换到 **Console** 标签
3. 在 Console 顶部找到上下文选择器（默认显示 "top"）
4. 点击下拉菜单，选择包含 `/embed/` 的 iframe 选项
   - 例如: `https://sketchfab.com/models/.../embed?...`

![切换上下文示意图]
```
┌─────────────────────────────────────┐
│ Console                             │
│ ┌─────────────────────────────────┐ │
│ │ top ▼                           │ │ ← 点击这里
│ └─────────────────────────────────┘ │
│   • top                             │
│   • https://sketchfab.com/models/...│ ← 选择这个
└─────────────────────────────────────┘
```

#### 步骤 3: 运行脚本
1. 打开 `get-webgl-params.js` 文件
2. 复制全部内容
3. 粘贴到 Console 中
4. 按 `Enter` 运行

#### 步骤 4: 查看结果
脚本会自动输出格式化的表格，包含所有渲染参数。

### 方法 3: 使用 Spector.js（最详细）

要捕获完整的 WebGL 帧信息和实时 uniform 值：

#### 步骤 1: 安装 Spector.js
在 Chrome Web Store 安装扩展：
```
https://chrome.google.com/webstore/detail/spector-js/denbgaamihkadbghdceggmchnflmhpmk
```

#### 步骤 2: 打开页面并捕获帧
1. 打开 Sketchfab 模型页面
2. 等待 3D 模型加载完成
3. 点击浏览器工具栏中的 Spector.js 图标
4. 点击 **"Capture a frame"** 按钮
5. 等待捕获完成（通常 1-2 秒）

#### 步骤 3: 分析捕获的帧
在 Spector.js 界面中，您可以查看：

- **Draw Calls**: 所有绘制调用的列表
- **Programs**: 使用的着色器程序
- **Uniforms**: 每个程序的 uniform 变量及其实际值
  - 模型矩阵 (Model Matrix)
  - 视图矩阵 (View Matrix)
  - 投影矩阵 (Projection Matrix)
  - 光照参数 (Lighting Parameters)
  - 材质参数 (Material Parameters)
- **Textures**: 绑定的纹理及其预览图
- **Render States**: 深度测试、混合模式、剔除等状态
- **Frame Buffers**: FBO 配置和附件

## 📊 已获取的关键参数

### WebGL 渲染器
- **版本**: WebGL 2.0 (OpenGL ES 3.0)
- **着色器语言**: GLSL ES 3.00
- **渲染器**: ANGLE (Apple M1 Metal)
- **最大纹理**: 16384 x 16384
- **各向异性**: 16x

### 模型资源
- **格式**: glTF 2.0 (压缩为 .binz)
- **三角面**: 25,800
- **顶点**: 16,500
- **文件大小**: ~77 KB (主模型)

### 纹理资源
- **格式**: JPEG (颜色) + PNG (法线)
- **类型**: BaseColor, Normal Map, 其他 PBR 贴图
- **加载**: CDN + 渐进式加载

### 环境光照 (IBL)
- **环境贴图**: 3 个压缩的 .bin.gz 文件
- **用途**: 漫反射 + 镜面反射 + 辐照度

## 🛠️ 技术栈

Sketchfab 使用的渲染技术：
- **WebGL 2.0**: 硬件加速的 3D 渲染
- **glTF 2.0**: 标准 3D 模型格式
- **PBR 材质**: 基于物理的渲染
- **IBL**: 基于图像的光照
- **压缩**: Draco 几何压缩 + gzip 纹理压缩
- **CDN**: CloudFront 全球分发

## 🎯 复刻渲染效果的建议

如果您想实现类似的渲染效果，推荐以下方案：

### 使用 Three.js
```javascript
import * as THREE from 'three';
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader.js';
import { RGBELoader } from 'three/examples/jsm/loaders/RGBELoader.js';
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls.js';

// 1. 创建场景
const scene = new THREE.Scene();
const camera = new THREE.PerspectiveCamera(45, width / height, 0.1, 1000);
const renderer = new THREE.WebGLRenderer({ antialias: true });

// 2. 加载 HDR 环境贴图（IBL）
const rgbeLoader = new RGBELoader();
rgbeLoader.load('environment.hdr', (texture) => {
  texture.mapping = THREE.EquirectangularReflectionMapping;
  scene.environment = texture;
  scene.background = texture;
});

// 3. 加载 glTF 模型
const gltfLoader = new GLTFLoader();
gltfLoader.load('model.gltf', (gltf) => {
  scene.add(gltf.scene);
});

// 4. 添加轨道控制器
const controls = new OrbitControls(camera, renderer.domElement);

// 5. 渲染循环
function animate() {
  requestAnimationFrame(animate);
  controls.update();
  renderer.render(scene, camera);
}
animate();
```

### 使用 Babylon.js
```javascript
import * as BABYLON from '@babylonjs/core';

// 1. 创建场景
const canvas = document.getElementById('canvas');
const engine = new BABYLON.Engine(canvas, true);
const scene = new BABYLON.Scene(engine);

// 2. 创建相机
const camera = new BABYLON.ArcRotateCamera(
  'camera', 0, 0, 10, BABYLON.Vector3.Zero(), scene
);
camera.attachControl(canvas, true);

// 3. 加载 HDR 环境
const hdrTexture = new BABYLON.CubeTexture('environment.env', scene);
scene.environmentTexture = hdrTexture;

// 4. 加载 glTF 模型
BABYLON.SceneLoader.ImportMesh('', '', 'model.gltf', scene);

// 5. 渲染循环
engine.runRenderLoop(() => {
  scene.render();
});
```

## 📚 参考资源

### 官方文档
- [Sketchfab Viewer API](https://sketchfab.com/developers/viewer)
- [WebGL 2.0 规范](https://www.khronos.org/webgl/)
- [glTF 2.0 规范](https://www.khronos.org/gltf/)

### 工具
- [Spector.js - WebGL 调试工具](https://spector.babylonjs.com/)
- [glTF Viewer](https://gltf-viewer.donmccurdy.com/)
- [Three.js Editor](https://threejs.org/editor/)

### 教程
- [Three.js PBR 教程](https://threejs.org/examples/#webgl_materials_physical)
- [WebGL 基础教程](https://webglfundamentals.org/)
- [PBR 理论](https://learnopengl.com/PBR/Theory)

## 📝 注意事项

1. **跨域限制**: 直接在主页面运行脚本可能因跨域而无法访问 iframe 中的 WebGL 上下文
2. **动态渲染**: Uniform 值会随着相机移动和时间变化而变化
3. **版权**: 下载和使用 Sketchfab 模型时请遵守 CC 许可协议
4. **性能**: 实时获取渲染参数可能影响性能，建议在开发环境使用

## 🤝 贡献

如果您发现更好的参数提取方法或有改进建议，欢迎提交 PR！

## 📄 许可证

本工具仅供学习和研究使用。Sketchfab 的模型和内容遵循其各自的许可协议。

---

**最后更新**: 2025-10-09  
**工具版本**: 1.0.0  
**测试环境**: Chrome 141, macOS 25.0.0, Apple M1

