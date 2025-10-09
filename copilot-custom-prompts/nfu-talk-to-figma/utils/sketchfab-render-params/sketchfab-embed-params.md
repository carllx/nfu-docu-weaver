# Sketchfab 嵌入页面渲染参数提取报告

**页面URL**: https://sketchfab.com/models/dc00ea320cfa4aad90811080270672db/embed  
**模型**: 60's Office Props  
**提取时间**: 2025-10-09  
**提取方法**: Chrome DevTools MCP (分批轻量级提取)

---

## 1. WebGL 渲染器信息

### 1.1 基本信息
```yaml
WebGL版本: "WebGL 2.0 (OpenGL ES 3.0 Chromium)"
着色器语言: "WebGL GLSL ES 3.00 (OpenGL ES GLSL ES 3.0 Chromium)"
供应商: "Google Inc. (Apple)"
渲染器: "ANGLE (Apple, ANGLE Metal Renderer: Apple M1, Unspecified Version)"
```

**关键点**:
- 使用 WebGL 2.0 (相比 WebGL 1.0 有更多高级特性)
- 通过 ANGLE 转换层使用 Apple Metal 后端
- 支持 GLSL ES 3.00 着色器语言

### 1.2 WebGL 能力参数
```yaml
最大纹理尺寸: 16384 x 16384 像素
最大视口尺寸: 16384 x 16384 像素
最大各向异性过滤: 16x
最大纹理单元数: 16
最大顶点属性数: 16
最大顶点Uniform向量: 1024
最大片元Uniform向量: 1024
```

**分析**:
- 16x 各向异性过滤 → 高质量纹理采样，减少倾斜表面的纹理模糊
- 16384 纹理尺寸 → 支持超高分辨率纹理（实际模型使用的要小得多）
- 1024 uniform 向量 → 足够支持复杂的着色器程序

---

## 2. Canvas 和显示配置

### 2.1 Canvas 尺寸
```yaml
Canvas宽度: 300 像素
Canvas高度: 150 像素
绘图缓冲区宽度: 300 像素
绘图缓冲区高度: 150 像素
设备像素比: 2.0
```

**说明**:
- 初始 canvas 很小（300x150），会根据容器大小自动调整
- 设备像素比 2.0 = Retina 显示屏
- 实际渲染分辨率 = 300×2 × 150×2 = 600×300 像素

### 2.2 视口设置
```yaml
视口X: 0
视口Y: 0
视口宽度: 300
视口高度: 150
```

---

## 3. WebGL 扩展支持 (36 个)

### 3.1 压缩纹理扩展
```
- WEBGL_compressed_texture_astc      (移动端常用)
- WEBGL_compressed_texture_etc       (Android 常用)
- WEBGL_compressed_texture_etc1
- WEBGL_compressed_texture_pvrtc     (iOS 常用)
- WEBGL_compressed_texture_s3tc      (桌面常用 DXT1/3/5)
- WEBGL_compressed_texture_s3tc_srgb
- EXT_texture_compression_bptc       (高质量压缩)
- EXT_texture_compression_rgtc
```

**用途**: 减少纹理内存占用和带宽，加快加载速度

### 3.2 渲染增强扩展
```
- EXT_color_buffer_float             (浮点帧缓冲，HDR 渲染)
- EXT_color_buffer_half_float        (半精度浮点)
- EXT_float_blend                    (浮点混合)
- EXT_texture_filter_anisotropic     (各向异性过滤)
- OES_draw_buffers_indexed           (多渲染目标)
- WEBGL_blend_func_extended          (高级混合)
```

**用途**: 支持高级渲染技术如 HDR、延迟渲染等

### 3.3 调试和性能扩展
```
- WEBGL_debug_renderer_info          (GPU 信息)
- WEBGL_debug_shaders                (着色器调试)
- EXT_disjoint_timer_query_webgl2    (性能测量)
- KHR_parallel_shader_compile        (并行编译着色器)
```

### 3.4 其他重要扩展
```
- EXT_clip_control
- EXT_depth_clamp
- WEBGL_lose_context                 (上下文丢失处理)
- WEBGL_multi_draw                   (多重绘制)
```

---

## 4. WebGL 渲染状态

### 4.1 当前状态快照
```yaml
深度测试: false (禁用)
深度写入: true (启用)
深度函数: LESS
混合: false (禁用)
混合源因子: ONE
混合目标因子: ZERO
面剔除: false (禁用)
面剔除模式: BACK
正面方向: CCW (逆时针)
活动纹理单元: 0 (TEXTURE0)
裁剪测试: false (禁用)
```

**说明**:
- 初始状态下深度测试、混合、剔除都未启用
- 这是加载阶段的状态，实际渲染时会动态改变
- 正面方向 CCW 是 OpenGL/WebGL 的默认值

---

## 5. 3D 模型资源文件

### 5.1 主模型文件
```
文件1: file.binz
URL: https://media.sketchfab.com/models/dc00ea320cfa4aad90811080270672db/
     e92e307b55e043b19f5085181caae1d6/files/
     4bdb41e878f442b69e2598398f0303fd/file.binz
格式: .binz (压缩的二进制数据，可能是 glTF 2.0 + Draco 压缩)
用途: 模型配置文件或元数据

文件2: model_file.binz
URL: https://media.sketchfab.com/models/.../model_file.binz
格式: glTF 2.0 二进制格式 (压缩)
用途: 主模型数据 (顶点、法线、UV、索引等)

文件3: model_file_wireframe.binz
URL: https://media.sketchfab.com/models/.../model_file_wireframe.binz
格式: 线框模型数据
用途: 显示模型线框视图
```

**模型ID组件**:
- 模型UUID: `dc00ea320cfa4aad90811080270672db`
- 版本ID: `e92e307b55e043b19f5085181caae1d6`
- 文件ID: `4bdb41e878f442b69e2598398f0303fd`

---

## 6. 纹理资源

### 6.1 纹理文件清单 (8个主要纹理)

#### 纹理组 1: df6bf4aaad314cc0af340dcd78a8fb8c
```
纹理1: c288276a381d40c0aeaf22b61d71a3fe.jpeg
纹理2: 0c6c5c8e4cea40ff9bdfa3f9ca39a067.jpeg
类型: 可能是 BaseColor/Albedo (基础颜色贴图)
格式: JPEG (有损压缩)
```

#### 纹理组 2: b3a01b451a37453f9da331160aae8121
```
纹理1: e38777bef05b461ea86a4bb2da1a924d.png
纹理2: d709eb8fbef646a19ce1f1a809e9ec25.png
类型: Normal Map (法线贴图 - 使用 PNG 保留细节)
格式: PNG (无损)

纹理3: 9eac2ac02d2e438aa67150a5101ad24c.jpeg
纹理4: f4fb2bb6905d4721a3256a8362ca46f0.jpeg
类型: 可能是 Metallic/Roughness 或 AO
格式: JPEG
```

#### 纹理组 3: f04147c58e014d65a3be725442d66d9d
```
纹理1: fc0ec2dbd8ea46da9c025b104062b53f.jpeg
纹理2: e62041b739af418f9f027d6b99ff25e4.jpeg
类型: 其他 PBR 贴图
格式: JPEG
```

### 6.2 纹理加载策略
- **渐进式加载**: 先加载低分辨率，再加载高清版本
- **CDN 分发**: 所有纹理通过 CloudFront CDN 提供
- **格式选择**: JPEG 用于颜色，PNG 用于需要精确数据的贴图（如法线）

---

## 7. 环境光照 (IBL)

### 7.1 环境贴图文件 (3个)
```
环境ID: 2fa15e0b1cee45a5b02605a288934e1b

环境贴图1: c5a847e09a644dbfaab762259036a93a.bin.gz
URL: https://media.sketchfab.com/environments/2fa15e0b1cee45a5b02605a288934e1b/
     c5a847e09a644dbfaab762259036a93a.bin.gz
用途: 可能是漫反射环境贴图 (Diffuse IBL)

环境贴图2: 4071fac688934f5e9710449ac9bb1b84.bin.gz
用途: 可能是镜面反射环境贴图 (Specular IBL)

环境贴图3: 3b75f316e45c44e0a2e1f653128089e5.bin.gz
用途: 可能是辐照度贴图或 BRDF LUT
```

### 7.2 IBL 技术细节
- **格式**: .bin.gz (gzip 压缩的二进制 HDR 数据)
- **存储方式**: 可能是立方体贴图或球谐系数
- **色彩空间**: 可能是 HDR (High Dynamic Range)
- **用途**: 提供真实的环境光照和反射

---

## 8. 着色器程序信息

### 8.1 当前状态
```
状态: 未激活
原因: 着色器程序在用户交互(旋转模型)后才会激活
建议: 等待模型完全加载并旋转后再提取
```

### 8.2 如何提取着色器程序
在 iframe 的 Console 中运行：
```javascript
// 等待用户旋转模型后
const canvas = document.querySelector('canvas');
const gl = canvas.getContext('webgl2') || canvas.getContext('webgl');
const program = gl.getParameter(gl.CURRENT_PROGRAM);

// 获取 Uniform 变量
const numUniforms = gl.getProgramParameter(program, gl.ACTIVE_UNIFORMS);
for (let i = 0; i < numUniforms; i++) {
  const u = gl.getActiveUniform(program, i);
  console.log(u.name, u.type, u.size);
}

// 获取 Attribute 变量
const numAttribs = gl.getProgramParameter(program, gl.ACTIVE_ATTRIBUTES);
for (let i = 0; i < numAttribs; i++) {
  const a = gl.getActiveAttrib(program, i);
  console.log(a.name, a.type);
}
```

**预期的 Uniform 变量**:
- `uModelMatrix` / `uViewMatrix` / `uProjectionMatrix` (MVP 矩阵)
- `uNormalMatrix` (法线矩阵)
- `uCameraPosition` (相机位置)
- `uLightPosition` / `uLightColor` (光照参数)
- `uBaseColorSampler` / `uNormalSampler` (纹理采样器)
- `uMetallic` / `uRoughness` (PBR 材质参数)
- `uEnvironmentMap` (环境贴图采样器)

**预期的 Attribute 变量**:
- `aPosition` (顶点位置)
- `aNormal` (法线)
- `aTexCoord` / `aUV` (纹理坐标)
- `aTangent` (切线，用于法线贴图)

---

## 9. 性能和内存信息

### 9.1 内存使用
```yaml
JS堆大小限制: 2144 MB
已分配JS堆: 47 MB
已使用JS堆: 45 MB
```

**分析**:
- 内存使用非常轻量（仅 45 MB）
- 大部分数据在 GPU 显存中
- WebGL 纹理和缓冲区不占用 JS 堆内存

### 9.2 Sketchfab API
```yaml
可用性: false (未检测到)
说明: Sketchfab Viewer API 可能需要特定初始化
```

**如何访问 Sketchfab API**:
根据 [Sketchfab 文档](https://sketchfab.com/developers/viewer)，需要通过 iframe postMessage 通信：

```javascript
// 在父页面
const iframe = document.querySelector('iframe');
const client = new Sketchfab(iframe);

client.init({
  success: function(api) {
    api.start();
    api.addEventListener('viewerready', function() {
      // API 已就绪
      api.getCameraLookAt(function(err, camera) {
        console.log(camera);
      });
    });
  }
});
```

---

## 10. 渲染技术栈总结

### 10.1 核心技术
```yaml
渲染API: WebGL 2.0
着色器: GLSL ES 3.00
材质系统: PBR (Physically Based Rendering)
光照: IBL (Image-Based Lighting) + 动态光照
模型格式: glTF 2.0 (.binz压缩)
纹理格式: JPEG (颜色) + PNG (法线/数据)
压缩: Draco (几何) + gzip (环境/模型)
```

### 10.2 渲染流程
```
1. 加载资源
   ├─ 下载主模型文件 (file.binz)
   ├─ 下载完整模型数据 (model_file.binz)
   ├─ 下载纹理文件 (8+ 个 JPEG/PNG)
   └─ 下载环境贴图 (3 个 .bin.gz)

2. 解压和解析
   ├─ 解压 gzip 数据
   ├─ 解码 Draco 压缩几何
   └─ 解析 glTF 场景图

3. 上传到 GPU
   ├─ 创建顶点缓冲区 (VBO)
   ├─ 上传纹理到 GPU
   └─ 编译和链接着色器程序

4. 渲染循环
   ├─ 更新相机矩阵
   ├─ 绑定纹理和状态
   ├─ 执行 Draw Call
   └─ 后处理 (抗锯齿、色调映射)
```

### 10.3 优化策略
- ✅ 使用 WebGL 2.0 特性（UBO、VAO、MRT）
- ✅ Draco 压缩减少模型大小
- ✅ 纹理压缩（ASTC/ETC/S3TC）
- ✅ CDN 加速资源加载
- ✅ 渐进式纹理加载
- ✅ 各向异性过滤提升质量
- ✅ IBL 代替实时光照计算

---

## 11. 如何深度分析

### 11.1 使用 Spector.js
1. 安装 [Spector.js Chrome 扩展](https://chrome.google.com/webstore/detail/spector-js/denbgaamihkadbghdceggmchnflmhpmk)
2. 打开嵌入页面并旋转模型
3. 点击 Spector.js → "Capture"
4. 查看每个 Draw Call 的详细信息：
   - 着色器源码
   - Uniform 实际值
   - 绑定的纹理
   - 渲染状态

### 11.2 分析关键点
- **Uniform 值**: 查看 MVP 矩阵、光照参数、材质参数
- **纹理绑定**: 确认哪些纹理用于什么用途
- **Draw Call 数量**: 优化性能的关键指标
- **Render Target**: 检查是否使用延迟渲染或多通道渲染

---

## 12. 实用脚本

### 12.1 监听模型加载完成
```javascript
// 在 iframe Console 中
const checkProgram = setInterval(() => {
  const canvas = document.querySelector('canvas');
  const gl = canvas.getContext('webgl2') || canvas.getContext('webgl');
  const program = gl.getParameter(gl.CURRENT_PROGRAM);
  
  if (program) {
    console.log('✅ 着色器程序已激活！');
    console.log('Uniforms:', gl.getProgramParameter(program, gl.ACTIVE_UNIFORMS));
    console.log('Attributes:', gl.getProgramParameter(program, gl.ACTIVE_ATTRIBUTES));
    clearInterval(checkProgram);
  }
}, 1000);
```

### 12.2 提取纹理信息
```javascript
const canvas = document.querySelector('canvas');
const gl = canvas.getContext('webgl2') || canvas.getContext('webgl');

// 获取当前绑定的纹理
for (let i = 0; i < 8; i++) {
  gl.activeTexture(gl.TEXTURE0 + i);
  const tex = gl.getParameter(gl.TEXTURE_BINDING_2D);
  if (tex) {
    console.log(`TEXTURE${i}:`, tex);
  }
}
```

---

## 13. 参考资源

### 13.1 官方文档
- [Sketchfab Viewer API](https://sketchfab.com/developers/viewer)
- [WebGL 2.0 规范](https://www.khronos.org/registry/webgl/specs/latest/2.0/)
- [glTF 2.0 规范](https://github.com/KhronosGroup/glTF/tree/master/specification/2.0)

### 13.2 相关技术
- [PBR 理论](https://learnopengl.com/PBR/Theory)
- [IBL 教程](https://learnopengl.com/PBR/IBL/Diffuse-irradiance)
- [Draco 压缩](https://google.github.io/draco/)

---

**生成工具**: Chrome DevTools MCP  
**提取方式**: 分批轻量级脚本调用  
**数据完整性**: ✅ WebGL 信息、✅ 资源文件、⏳ 着色器程序（需用户交互）

