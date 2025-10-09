# Sketchfab 渲染参数提取工具

## 📁 文件说明

### 1. `sketchfab-embed-params.md` ⭐ 主报告
**完整的渲染参数分析报告**，通过 MCP Chrome DevTools 自动提取。

包含内容：
- ✅ WebGL 渲染器信息（版本、GPU、能力参数）
- ✅ Canvas 和显示配置
- ✅ 36个 WebGL 扩展详细列表和说明
- ✅ WebGL 渲染状态（深度测试、混合、剔除等）
- ✅ 3D 模型文件（3个 .binz 文件及 URL）
- ✅ 纹理资源（8个纹理文件，按用途分类）
- ✅ 环境光照 IBL（3个环境贴图）
- ✅ 着色器程序提取方法
- ✅ 性能和内存信息
- ✅ 渲染技术栈总结
- ✅ 深度分析指南

### 2. `extract-sketchfab-lite.js` - 轻量级提取脚本
**优化的浏览器脚本**，专门针对 Sketchfab 嵌入页面。

特点：
- 🚀 分批次提取，避免对象过大
- 📊 美化的 Console 输出
- 🎯 专门针对 MCP Chrome DevTools 优化
- 💡 包含使用提示和错误处理

### 3. `get-webgl-params.js` - 通用提取脚本
**功能完整的 WebGL 参数提取脚本**，适用于任何 WebGL 页面。

特点：
- 📖 详细的参数说明
- 🔍 深度提取（支持更多参数）
- 📊 分类显示扩展和状态
- 适合学习和调试

---

## 🚀 快速开始

### 方法 1: 查看已提取的报告（最快）
直接打开 `sketchfab-embed-params.md` 查看完整分析报告。

### 方法 2: 使用 MCP Chrome DevTools 自动提取

#### 前提条件
- 已安装 Chrome DevTools MCP 工具
- 有运行 MCP 服务器的环境

#### 步骤
```javascript
// 1. 打开嵌入页面
mcp_chrome-devtools_navigate_page({
  url: "https://sketchfab.com/models/.../embed?autostart=1..."
});

// 2. 分批提取参数（避免对象过大）
mcp_chrome-devtools_evaluate_script({
  function: `() => {
    const gl = document.querySelector('canvas').getContext('webgl2');
    return {
      version: gl.getParameter(gl.VERSION),
      renderer: gl.getParameter(gl.RENDERER)
    };
  }`
});
```

### 方法 3: 在浏览器 Console 手动运行

#### 步骤
1. 打开 Sketchfab 嵌入页面：
   ```
   https://sketchfab.com/models/dc00ea320cfa4aad90811080270672db/embed?autostart=1&...
   ```

2. 按 `F12` 打开 Chrome DevTools

3. 切换到 **Console** 标签

4. 复制 `extract-sketchfab-lite.js` 的内容并粘贴运行

5. 查看格式化的输出结果

---

## 🎯 核心发现

### WebGL 渲染器
```yaml
WebGL 版本: WebGL 2.0 (OpenGL ES 3.0)
着色器语言: GLSL ES 3.00
GPU: ANGLE (Apple M1 Metal)
最大纹理: 16384 x 16384
各向异性: 16x
```

### 模型资源
```yaml
主文件: file.binz (元数据)
模型数据: model_file.binz (glTF 2.0)
线框: model_file_wireframe.binz
格式: .binz (压缩的 glTF)
```

### 纹理资源
```yaml
数量: 8+ 个
格式: JPEG (颜色) + PNG (法线)
类型: BaseColor, Normal Map, Metallic, Roughness, AO
CDN: media.sketchfab.com (CloudFront)
```

### 环境光照
```yaml
类型: IBL (Image-Based Lighting)
文件数: 3 个 .bin.gz
用途: 漫反射 + 镜面反射 + 辐照度
```

---

## 💡 解决"对象过大"问题

### 问题
使用 MCP Chrome DevTools 直接返回大对象（如完整的 WebGL 上下文）会导致：
```
Error: Object too large
```

### 解决方案

#### ✅ 方法 1: 分批提取（推荐）
```javascript
// 不要一次性返回整个 gl 对象
// ❌ 错误示例
return gl;  // 对象太大！

// ✅ 正确示例：只返回需要的数值
return {
  version: gl.getParameter(gl.VERSION),
  maxTextureSize: gl.getParameter(gl.MAX_TEXTURE_SIZE)
};
```

#### ✅ 方法 2: 分类提取
```javascript
// 第一次调用：基本信息
mcp_chrome-devtools_evaluate_script({
  function: `() => {
    const gl = document.querySelector('canvas').getContext('webgl2');
    return { version: gl.getParameter(gl.VERSION) };
  }`
});

// 第二次调用：能力参数
mcp_chrome-devtools_evaluate_script({
  function: `() => {
    const gl = document.querySelector('canvas').getContext('webgl2');
    return { maxTextureSize: gl.getParameter(gl.MAX_TEXTURE_SIZE) };
  }`
});
```

#### ✅ 方法 3: 限制数组长度
```javascript
// 不要返回所有 uniform（可能有数百个）
// ❌ 错误
const uniforms = [];
for (let i = 0; i < numUniforms; i++) {
  uniforms.push(gl.getActiveUniform(program, i));
}
return uniforms;  // 可能过大

// ✅ 正确：只返回前10个
const uniforms = [];
for (let i = 0; i < Math.min(numUniforms, 10); i++) {
  const u = gl.getActiveUniform(program, i);
  uniforms.push({ name: u.name, type: u.type });  // 只返回需要的字段
}
return { totalUniforms: numUniforms, sample: uniforms };
```

---

## 📊 提取的数据结构

### 基本信息
```json
{
  "version": "WebGL 2.0 (OpenGL ES 3.0 Chromium)",
  "shadingLanguage": "WebGL GLSL ES 3.00",
  "vendor": "Google Inc. (Apple)",
  "renderer": "ANGLE (Apple, ANGLE Metal Renderer: Apple M1)"
}
```

### 能力参数
```json
{
  "maxTextureSize": 16384,
  "maxViewportDims": [16384, 16384],
  "maxAnisotropy": 16,
  "maxTextureUnits": 16,
  "maxVertexAttribs": 16,
  "maxVertexUniforms": 1024,
  "maxFragmentUniforms": 1024
}
```

### 扩展列表
```json
{
  "total": 36,
  "categories": {
    "compression": [
      "WEBGL_compressed_texture_astc",
      "WEBGL_compressed_texture_etc",
      ...
    ],
    "rendering": [
      "EXT_color_buffer_float",
      "EXT_texture_filter_anisotropic",
      ...
    ]
  }
}
```

---

## 🛠️ 进阶使用

### 等待着色器程序激活
```javascript
// 着色器程序需要用户交互后才会激活
// 使用定时器检测
const checkShader = setInterval(() => {
  const gl = document.querySelector('canvas').getContext('webgl2');
  const program = gl.getParameter(gl.CURRENT_PROGRAM);
  
  if (program) {
    console.log('✅ 着色器程序已激活！');
    
    // 提取 uniform 变量
    const numUniforms = gl.getProgramParameter(program, gl.ACTIVE_UNIFORMS);
    console.log('Uniform 数量:', numUniforms);
    
    clearInterval(checkShader);
  }
}, 1000);

// 提示用户旋转模型
console.log('💡 请用鼠标旋转模型以激活着色器程序...');
```

### 提取网络请求
```javascript
// 使用 MCP 获取模型文件和纹理
mcp_chrome-devtools_list_network_requests({
  resourceTypes: ["fetch", "xhr", "other"],  // 模型文件
  pageSize: 50
});

mcp_chrome-devtools_list_network_requests({
  resourceTypes: ["image"],  // 纹理文件
  pageSize: 50
});
```

### 使用 Spector.js 深度分析
1. 安装 [Spector.js Chrome 扩展](https://chrome.google.com/webstore/detail/spector-js/denbgaamihkadbghdceggmchnflmhpmk)
2. 打开嵌入页面并旋转模型
3. 点击 Spector.js → "Capture"
4. 查看：
   - 所有 Draw Call
   - Uniform 实际值
   - 绑定的纹理
   - 着色器源码

---

## 📚 技术栈

### Sketchfab 使用的技术
- **渲染 API**: WebGL 2.0
- **着色器语言**: GLSL ES 3.00
- **模型格式**: glTF 2.0 (.binz 压缩)
- **几何压缩**: Draco
- **纹理格式**: JPEG + PNG
- **材质系统**: PBR (Physically Based Rendering)
- **光照系统**: IBL (Image-Based Lighting)
- **CDN**: CloudFront

### 渲染流程
```
1. 加载资源
   ├─ 模型文件 (glTF .binz)
   ├─ 纹理 (JPEG/PNG)
   └─ 环境贴图 (IBL .bin.gz)

2. 解压缩
   ├─ gzip 解压
   └─ Draco 解压

3. 上传 GPU
   ├─ 顶点缓冲区
   ├─ 纹理
   └─ 着色器编译

4. 渲染循环
   ├─ 更新矩阵
   ├─ 绑定纹理
   └─ Draw Call
```

---

## 🔗 相关资源

### 官方文档
- [Sketchfab Viewer API](https://sketchfab.com/developers/viewer)
- [WebGL 2.0 规范](https://www.khronos.org/webgl/)
- [glTF 2.0 规范](https://www.khronos.org/gltf/)

### 工具
- [Spector.js](https://spector.babylonjs.com/) - WebGL 调试
- [glTF Viewer](https://gltf-viewer.donmccurdy.com/)
- [Three.js](https://threejs.org/)
- [Babylon.js](https://www.babylonjs.com/)

### 教程
- [WebGL Fundamentals](https://webglfundamentals.org/)
- [Learn OpenGL - PBR](https://learnopengl.com/PBR/Theory)
- [IBL Tutorial](https://learnopengl.com/PBR/IBL/Diffuse-irradiance)

---

## 📝 注意事项

1. **跨域限制**: 如果从父页面访问 iframe，可能因跨域而失败
2. **对象大小**: MCP 有返回对象大小限制，需分批提取
3. **着色器激活**: 需要用户交互（旋转模型）后才能提取着色器程序
4. **动态参数**: 渲染状态和 uniform 值会随帧变化
5. **版权**: 遵守 Sketchfab 模型的 CC 许可协议

---

## 🎉 总结

本工具集提供了三种方式获取 Sketchfab 渲染参数：

1. **查看报告** - 最快，适合快速了解
2. **MCP 自动化** - 适合批量提取多个模型
3. **手动脚本** - 适合学习和深度调试

所有方法都针对"对象过大"问题进行了优化，确保稳定可靠。

---

**版本**: 1.0.0  
**最后更新**: 2025-10-09  
**测试环境**: Chrome 141, macOS 25.0.0, Apple M1
