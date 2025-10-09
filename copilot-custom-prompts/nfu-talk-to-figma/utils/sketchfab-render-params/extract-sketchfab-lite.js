/**
 * Sketchfab 轻量级渲染参数提取脚本
 * 
 * 适用场景：
 * - 通过 MCP Chrome DevTools 自动化提取
 * - 避免返回对象过大导致失败
 * - 分批次、分类别提取关键参数
 * 
 * 使用方法：
 * 1. 打开 Sketchfab 嵌入页面 (embed URL)
 * 2. 在 Console 中运行此脚本
 * 3. 脚本会分批输出结果，避免一次性返回大对象
 */

(function() {
  'use strict';
  
  console.log('🎨 Sketchfab 轻量级参数提取开始...\n');
  
  // ==================== 工具函数 ====================
  
  const getCanvas = () => document.querySelector('canvas');
  
  const getGL = () => {
    const canvas = getCanvas();
    return canvas && (canvas.getContext('webgl2') || canvas.getContext('webgl'));
  };
  
  const getGLTypeName = (type, gl) => {
    const types = {
      [gl.FLOAT]: 'FLOAT',
      [gl.FLOAT_VEC2]: 'VEC2',
      [gl.FLOAT_VEC3]: 'VEC3',
      [gl.FLOAT_VEC4]: 'VEC4',
      [gl.INT]: 'INT',
      [gl.INT_VEC2]: 'IVEC2',
      [gl.INT_VEC3]: 'IVEC3',
      [gl.INT_VEC4]: 'IVEC4',
      [gl.BOOL]: 'BOOL',
      [gl.FLOAT_MAT2]: 'MAT2',
      [gl.FLOAT_MAT3]: 'MAT3',
      [gl.FLOAT_MAT4]: 'MAT4',
      [gl.SAMPLER_2D]: 'SAMPLER_2D',
      [gl.SAMPLER_CUBE]: 'SAMPLER_CUBE',
    };
    return types[type] || `UNKNOWN(${type})`;
  };
  
  const getGLConstName = (value, gl) => {
    const consts = {
      [gl.NEVER]: 'NEVER',
      [gl.LESS]: 'LESS',
      [gl.EQUAL]: 'EQUAL',
      [gl.LEQUAL]: 'LEQUAL',
      [gl.GREATER]: 'GREATER',
      [gl.NOTEQUAL]: 'NOTEQUAL',
      [gl.GEQUAL]: 'GEQUAL',
      [gl.ALWAYS]: 'ALWAYS',
      [gl.ZERO]: 'ZERO',
      [gl.ONE]: 'ONE',
      [gl.SRC_COLOR]: 'SRC_COLOR',
      [gl.SRC_ALPHA]: 'SRC_ALPHA',
      [gl.ONE_MINUS_SRC_ALPHA]: 'ONE_MINUS_SRC_ALPHA',
      [gl.FRONT]: 'FRONT',
      [gl.BACK]: 'BACK',
      [gl.CCW]: 'CCW',
      [gl.CW]: 'CW',
    };
    return consts[value] !== undefined ? consts[value] : value.toString();
  };
  
  // ==================== 提取函数 ====================
  
  // 批次 1: WebGL 基本信息
  function extractBasicInfo() {
    const gl = getGL();
    if (!gl) return { error: 'WebGL context not available' };
    
    const dbg = gl.getExtension('WEBGL_debug_renderer_info');
    
    return {
      version: gl.getParameter(gl.VERSION),
      shadingLanguage: gl.getParameter(gl.SHADING_LANGUAGE_VERSION),
      vendor: dbg ? gl.getParameter(dbg.UNMASKED_VENDOR_WEBGL) : gl.getParameter(gl.VENDOR),
      renderer: dbg ? gl.getParameter(dbg.UNMASKED_RENDERER_WEBGL) : gl.getParameter(gl.RENDERER)
    };
  }
  
  // 批次 2: WebGL 能力参数
  function extractCapabilities() {
    const gl = getGL();
    const extAniso = gl.getExtension('EXT_texture_filter_anisotropic')
      || gl.getExtension('WEBKIT_EXT_texture_filter_anisotropic')
      || gl.getExtension('MOZ_EXT_texture_filter_anisotropic');
    
    return {
      maxTextureSize: gl.getParameter(gl.MAX_TEXTURE_SIZE),
      maxViewportDims: [
        gl.getParameter(gl.MAX_VIEWPORT_DIMS)[0],
        gl.getParameter(gl.MAX_VIEWPORT_DIMS)[1]
      ],
      maxAnisotropy: extAniso ? gl.getParameter(extAniso.MAX_TEXTURE_MAX_ANISOTROPY_EXT) : null,
      maxTextureUnits: gl.getParameter(gl.MAX_TEXTURE_IMAGE_UNITS),
      maxVertexAttribs: gl.getParameter(gl.MAX_VERTEX_ATTRIBS),
      maxVertexUniforms: gl.getParameter(gl.MAX_VERTEX_UNIFORM_VECTORS),
      maxFragmentUniforms: gl.getParameter(gl.MAX_FRAGMENT_UNIFORM_VECTORS)
    };
  }
  
  // 批次 3: Canvas 信息
  function extractCanvasInfo() {
    const canvas = getCanvas();
    const gl = getGL();
    
    return {
      canvas: {
        width: canvas.width,
        height: canvas.height,
        clientWidth: canvas.clientWidth,
        clientHeight: canvas.clientHeight
      },
      drawingBuffer: {
        width: gl.drawingBufferWidth,
        height: gl.drawingBufferHeight
      },
      devicePixelRatio: window.devicePixelRatio
    };
  }
  
  // 批次 4: 渲染状态
  function extractRenderState() {
    const gl = getGL();
    
    return {
      depthTest: gl.getParameter(gl.DEPTH_TEST),
      depthWriteMask: gl.getParameter(gl.DEPTH_WRITEMASK),
      depthFunc: getGLConstName(gl.getParameter(gl.DEPTH_FUNC), gl),
      blend: gl.getParameter(gl.BLEND),
      blendSrcRGB: getGLConstName(gl.getParameter(gl.BLEND_SRC_RGB), gl),
      blendDstRGB: getGLConstName(gl.getParameter(gl.BLEND_DST_RGB), gl),
      cullFace: gl.getParameter(gl.CULL_FACE),
      cullFaceMode: getGLConstName(gl.getParameter(gl.CULL_FACE_MODE), gl),
      frontFace: getGLConstName(gl.getParameter(gl.FRONT_FACE), gl),
      activeTextureUnit: gl.getParameter(gl.ACTIVE_TEXTURE) - gl.TEXTURE0,
      viewport: Array.from(gl.getParameter(gl.VIEWPORT))
    };
  }
  
  // 批次 5: 扩展列表（仅名称）
  function extractExtensions() {
    const gl = getGL();
    const extensions = gl.getSupportedExtensions();
    
    // 按类别分组
    const categories = {
      compression: [],
      rendering: [],
      debug: [],
      other: []
    };
    
    extensions.forEach(ext => {
      if (ext.includes('compressed') || ext.includes('COMPRESSED')) {
        categories.compression.push(ext);
      } else if (ext.includes('draw') || ext.includes('render') || ext.includes('depth') || ext.includes('float')) {
        categories.rendering.push(ext);
      } else if (ext.includes('debug') || ext.includes('shader')) {
        categories.debug.push(ext);
      } else {
        categories.other.push(ext);
      }
    });
    
    return {
      total: extensions.length,
      categories: categories
    };
  }
  
  // 批次 6: 着色器程序（轻量级，仅前10个 uniform）
  function extractShaderProgram() {
    const gl = getGL();
    const program = gl.getParameter(gl.CURRENT_PROGRAM);
    
    if (!program) {
      return {
        status: 'inactive',
        message: '着色器程序未激活。请旋转模型以激活渲染。'
      };
    }
    
    const numUniforms = gl.getProgramParameter(program, gl.ACTIVE_UNIFORMS);
    const numAttribs = gl.getProgramParameter(program, gl.ACTIVE_ATTRIBUTES);
    
    // 仅提取前10个 uniform
    const uniforms = [];
    for (let i = 0; i < Math.min(numUniforms, 10); i++) {
      const u = gl.getActiveUniform(program, i);
      if (u) {
        uniforms.push({
          name: u.name,
          type: getGLTypeName(u.type, gl),
          size: u.size
        });
      }
    }
    
    // 提取所有 attribute（通常不超过10个）
    const attributes = [];
    for (let i = 0; i < numAttribs; i++) {
      const a = gl.getActiveAttrib(program, i);
      if (a) {
        attributes.push({
          name: a.name,
          type: getGLTypeName(a.type, gl)
        });
      }
    }
    
    return {
      status: 'active',
      totalUniforms: numUniforms,
      totalAttributes: numAttribs,
      uniformsSample: uniforms,
      uniformsNote: numUniforms > 10 ? `仅显示前10个，共${numUniforms}个` : '全部显示',
      attributes: attributes
    };
  }
  
  // 批次 7: 性能和 API 信息
  function extractPerformanceInfo() {
    const result = {
      sketchfabAPI: {
        available: !!window.api,
        methods: window.api ? Object.keys(window.api).slice(0, 20) : []
      }
    };
    
    if (performance && performance.memory) {
      result.memory = {
        jsHeapSizeLimit: Math.round(performance.memory.jsHeapSizeLimit / 1048576) + ' MB',
        totalJSHeapSize: Math.round(performance.memory.totalJSHeapSize / 1048576) + ' MB',
        usedJSHeapSize: Math.round(performance.memory.usedJSHeapSize / 1048576) + ' MB'
      };
    }
    
    return result;
  }
  
  // ==================== 执行提取 ====================
  
  console.log('━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━');
  console.log('📊 批次 1: WebGL 基本信息');
  console.log('━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━');
  console.table(extractBasicInfo());
  
  console.log('\n━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━');
  console.log('⚙️  批次 2: WebGL 能力参数');
  console.log('━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━');
  console.table(extractCapabilities());
  
  console.log('\n━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━');
  console.log('📐 批次 3: Canvas 信息');
  console.log('━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━');
  console.log(extractCanvasInfo());
  
  console.log('\n━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━');
  console.log('🔧 批次 4: WebGL 渲染状态');
  console.log('━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━');
  console.table(extractRenderState());
  
  console.log('\n━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━');
  console.log('🔌 批次 5: WebGL 扩展');
  console.log('━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━');
  const exts = extractExtensions();
  console.log(`总计: ${exts.total} 个扩展\n`);
  console.log('📦 压缩纹理 (' + exts.categories.compression.length + '):', exts.categories.compression);
  console.log('🎨 渲染扩展 (' + exts.categories.rendering.length + '):', exts.categories.rendering);
  console.log('🐛 调试工具 (' + exts.categories.debug.length + '):', exts.categories.debug);
  console.log('📌 其他 (' + exts.categories.other.length + '):', exts.categories.other);
  
  console.log('\n━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━');
  console.log('🎨 批次 6: 着色器程序');
  console.log('━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━');
  const shader = extractShaderProgram();
  console.log(shader);
  if (shader.status === 'active') {
    console.log('\nUniforms:');
    console.table(shader.uniformsSample);
    console.log('\nAttributes:');
    console.table(shader.attributes);
  }
  
  console.log('\n━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━');
  console.log('💾 批次 7: 性能和 API');
  console.log('━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━');
  console.log(extractPerformanceInfo());
  
  console.log('\n━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━');
  console.log('✅ 提取完成！');
  console.log('━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━\n');
  
  console.log('💡 提示:');
  console.log('- 如果着色器程序未激活，请用鼠标旋转模型');
  console.log('- 使用 Spector.js 可以捕获完整的渲染帧信息');
  console.log('- 网络面板可以查看模型文件和纹理的 URL\n');
  
  // 返回所有数据的汇总（轻量级）
  return {
    basic: extractBasicInfo(),
    capabilities: extractCapabilities(),
    canvas: extractCanvasInfo(),
    renderState: extractRenderState(),
    extensions: {
      total: exts.total,
      compressionCount: exts.categories.compression.length,
      renderingCount: exts.categories.rendering.length
    },
    shader: {
      status: shader.status,
      uniformsCount: shader.totalUniforms,
      attributesCount: shader.totalAttributes
    },
    performance: extractPerformanceInfo()
  };
})();

