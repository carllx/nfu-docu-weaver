/**
 * Sketchfab WebGL 渲染参数提取脚本
 * 
 * 使用方法:
 * 1. 打开 Sketchfab 模型页面
 * 2. 打开 Chrome DevTools (F12)
 * 3. 在 Console 顶部切换上下文：从 "top" 切换到包含 "/embed/" 的 iframe
 * 4. 复制粘贴此脚本并运行
 */

(function() {
  console.log('🎨 开始提取 Sketchfab WebGL 渲染参数...\n');

  // ========== 1. 获取 Canvas 和 WebGL 上下文 ==========
  const canvas = document.querySelector('canvas');
  if (!canvas) {
    console.error('❌ 未找到 canvas 元素！');
    return;
  }
  console.log('✅ 找到 canvas 元素');

  const gl = canvas.getContext('webgl2') || canvas.getContext('webgl') || canvas.getContext('experimental-webgl');
  if (!gl) {
    console.error('❌ 无法获取 WebGL 上下文！');
    return;
  }
  console.log('✅ 获取 WebGL 上下文成功\n');

  // ========== 2. WebGL 基本信息 ==========
  console.log('━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━');
  console.log('📊 WebGL 基本信息');
  console.log('━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━');

  const dbg = gl.getExtension('WEBGL_debug_renderer_info');
  const basicInfo = {
    'WebGL 版本': gl.getParameter(gl.VERSION),
    '着色器语言': gl.getParameter(gl.SHADING_LANGUAGE_VERSION),
    '供应商': dbg ? gl.getParameter(dbg.UNMASKED_VENDOR_WEBGL) : gl.getParameter(gl.VENDOR),
    '渲染器': dbg ? gl.getParameter(dbg.UNMASKED_RENDERER_WEBGL) : gl.getParameter(gl.RENDERER),
  };
  console.table(basicInfo);

  // ========== 3. WebGL 能力参数 ==========
  console.log('\n━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━');
  console.log('⚙️  WebGL 能力参数');
  console.log('━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━');

  const extAniso = gl.getExtension('EXT_texture_filter_anisotropic')
    || gl.getExtension('WEBKIT_EXT_texture_filter_anisotropic')
    || gl.getExtension('MOZ_EXT_texture_filter_anisotropic');

  const capabilities = {
    '最大纹理尺寸': gl.getParameter(gl.MAX_TEXTURE_SIZE),
    '最大视口尺寸': gl.getParameter(gl.MAX_VIEWPORT_DIMS).join(' x '),
    '最大各向异性过滤': extAniso ? gl.getParameter(extAniso.MAX_TEXTURE_MAX_ANISOTROPY_EXT) + 'x' : '不支持',
    '最大纹理单元': gl.getParameter(gl.MAX_TEXTURE_IMAGE_UNITS),
    '最大顶点属性': gl.getParameter(gl.MAX_VERTEX_ATTRIBS),
    '最大 Varying 向量': gl.getParameter(gl.MAX_VARYING_VECTORS),
    '最大顶点 Uniform 向量': gl.getParameter(gl.MAX_VERTEX_UNIFORM_VECTORS),
    '最大片元 Uniform 向量': gl.getParameter(gl.MAX_FRAGMENT_UNIFORM_VECTORS),
  };
  console.table(capabilities);

  // ========== 4. Canvas 尺寸信息 ==========
  console.log('\n━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━');
  console.log('📐 Canvas 尺寸信息');
  console.log('━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━');

  const canvasInfo = {
    'Canvas 宽度': canvas.width,
    'Canvas 高度': canvas.height,
    '客户端宽度': canvas.clientWidth,
    '客户端高度': canvas.clientHeight,
    '绘图缓冲区宽度': gl.drawingBufferWidth,
    '绘图缓冲区高度': gl.drawingBufferHeight,
    '设备像素比': window.devicePixelRatio,
  };
  console.table(canvasInfo);

  // ========== 5. 当前着色器程序信息 ==========
  console.log('\n━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━');
  console.log('🎨 当前着色器程序信息');
  console.log('━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━');

  const program = gl.getParameter(gl.CURRENT_PROGRAM);
  if (program) {
    console.log('✅ 找到当前着色器程序');
    
    // Uniform 变量
    const numUniforms = gl.getProgramParameter(program, gl.ACTIVE_UNIFORMS);
    console.log(`\n📝 Uniform 变量数量: ${numUniforms}`);
    
    if (numUniforms > 0) {
      console.log('\n前 30 个 Uniform 变量:');
      const uniforms = [];
      for (let i = 0; i < Math.min(numUniforms, 30); i++) {
        const u = gl.getActiveUniform(program, i);
        if (u) {
          uniforms.push({
            '序号': i,
            '名称': u.name,
            '大小': u.size,
            '类型': getGLTypeName(u.type, gl),
          });
        }
      }
      console.table(uniforms);
      
      if (numUniforms > 30) {
        console.log(`⚠️  还有 ${numUniforms - 30} 个 Uniform 变量未显示`);
      }
    }

    // Attribute 变量
    const numAttribs = gl.getProgramParameter(program, gl.ACTIVE_ATTRIBUTES);
    console.log(`\n📝 Attribute 变量数量: ${numAttribs}`);
    
    if (numAttribs > 0) {
      console.log('\nAttribute 变量列表:');
      const attribs = [];
      for (let i = 0; i < numAttribs; i++) {
        const a = gl.getActiveAttrib(program, i);
        if (a) {
          attribs.push({
            '序号': i,
            '名称': a.name,
            '大小': a.size,
            '类型': getGLTypeName(a.type, gl),
          });
        }
      }
      console.table(attribs);
    }
  } else {
    console.log('⚠️  当前没有活动的着色器程序（可能还在加载中）');
  }

  // ========== 6. 当前 WebGL 状态 ==========
  console.log('\n━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━');
  console.log('🔧 当前 WebGL 渲染状态');
  console.log('━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━');

  const glState = {
    '深度测试': gl.getParameter(gl.DEPTH_TEST) ? '启用' : '禁用',
    '深度写入': gl.getParameter(gl.DEPTH_WRITEMASK) ? '启用' : '禁用',
    '深度函数': getGLConstName(gl.getParameter(gl.DEPTH_FUNC), gl),
    '混合': gl.getParameter(gl.BLEND) ? '启用' : '禁用',
    '混合源因子': getGLConstName(gl.getParameter(gl.BLEND_SRC_RGB), gl),
    '混合目标因子': getGLConstName(gl.getParameter(gl.BLEND_DST_RGB), gl),
    '剔除面': gl.getParameter(gl.CULL_FACE) ? '启用' : '禁用',
    '剔除面模式': getGLConstName(gl.getParameter(gl.CULL_FACE_MODE), gl),
    '正面方向': getGLConstName(gl.getParameter(gl.FRONT_FACE), gl),
    '活动纹理单元': 'TEXTURE' + (gl.getParameter(gl.ACTIVE_TEXTURE) - gl.TEXTURE0),
  };
  console.table(glState);

  // ========== 7. WebGL 扩展 ==========
  console.log('\n━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━');
  console.log('🔌 WebGL 扩展支持');
  console.log('━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━');

  const extensions = gl.getSupportedExtensions();
  console.log(`✅ 支持 ${extensions.length} 个扩展:\n`);
  
  // 按类别分组显示
  const extCategories = {
    '压缩纹理': [],
    '渲染扩展': [],
    '调试工具': [],
    '其他': [],
  };

  extensions.forEach(ext => {
    if (ext.includes('compressed') || ext.includes('COMPRESSED')) {
      extCategories['压缩纹理'].push(ext);
    } else if (ext.includes('draw') || ext.includes('DRAW') || ext.includes('render') || 
               ext.includes('depth') || ext.includes('stencil') || ext.includes('float')) {
      extCategories['渲染扩展'].push(ext);
    } else if (ext.includes('debug') || ext.includes('shader')) {
      extCategories['调试工具'].push(ext);
    } else {
      extCategories['其他'].push(ext);
    }
  });

  Object.entries(extCategories).forEach(([category, exts]) => {
    if (exts.length > 0) {
      console.log(`\n📦 ${category} (${exts.length}):`);
      exts.forEach(ext => console.log(`  • ${ext}`));
    }
  });

  // ========== 8. 尝试获取 Sketchfab API ==========
  console.log('\n━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━');
  console.log('🎯 Sketchfab API 信息');
  console.log('━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━');

  if (window.api) {
    console.log('✅ 找到 Sketchfab API 对象');
    console.log('API 对象:', window.api);
    console.log('API 方法:', Object.keys(window.api));
  } else {
    console.log('⚠️  未找到 Sketchfab API 对象（可能需要等待加载完成）');
  }

  // ========== 9. 性能信息 ==========
  if (performance && performance.memory) {
    console.log('\n━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━');
    console.log('💾 内存使用情况');
    console.log('━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━');
    
    const memory = {
      'JS堆大小限制': (performance.memory.jsHeapSizeLimit / 1048576).toFixed(2) + ' MB',
      '已分配JS堆大小': (performance.memory.totalJSHeapSize / 1048576).toFixed(2) + ' MB',
      '已使用JS堆大小': (performance.memory.usedJSHeapSize / 1048576).toFixed(2) + ' MB',
    };
    console.table(memory);
  }

  console.log('\n━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━');
  console.log('✅ 参数提取完成！');
  console.log('━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━\n');

  console.log('💡 提示: 如果想捕获完整的渲染帧信息，请使用 Spector.js 扩展');
  console.log('📦 Spector.js: https://chrome.google.com/webstore/detail/spector-js/denbgaamihkadbghdceggmchnflmhpmk\n');

  // ========== 辅助函数 ==========
  function getGLTypeName(type, gl) {
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
      [gl.BOOL_VEC2]: 'BVEC2',
      [gl.BOOL_VEC3]: 'BVEC3',
      [gl.BOOL_VEC4]: 'BVEC4',
      [gl.FLOAT_MAT2]: 'MAT2',
      [gl.FLOAT_MAT3]: 'MAT3',
      [gl.FLOAT_MAT4]: 'MAT4',
      [gl.SAMPLER_2D]: 'SAMPLER_2D',
      [gl.SAMPLER_CUBE]: 'SAMPLER_CUBE',
    };
    return types[type] || `UNKNOWN(${type})`;
  }

  function getGLConstName(value, gl) {
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
      [gl.ONE_MINUS_SRC_COLOR]: 'ONE_MINUS_SRC_COLOR',
      [gl.DST_COLOR]: 'DST_COLOR',
      [gl.ONE_MINUS_DST_COLOR]: 'ONE_MINUS_DST_COLOR',
      [gl.SRC_ALPHA]: 'SRC_ALPHA',
      [gl.ONE_MINUS_SRC_ALPHA]: 'ONE_MINUS_SRC_ALPHA',
      [gl.DST_ALPHA]: 'DST_ALPHA',
      [gl.ONE_MINUS_DST_ALPHA]: 'ONE_MINUS_DST_ALPHA',
      [gl.CONSTANT_COLOR]: 'CONSTANT_COLOR',
      [gl.ONE_MINUS_CONSTANT_COLOR]: 'ONE_MINUS_CONSTANT_COLOR',
      [gl.CONSTANT_ALPHA]: 'CONSTANT_ALPHA',
      [gl.ONE_MINUS_CONSTANT_ALPHA]: 'ONE_MINUS_CONSTANT_ALPHA',
      [gl.SRC_ALPHA_SATURATE]: 'SRC_ALPHA_SATURATE',
      [gl.FRONT]: 'FRONT',
      [gl.BACK]: 'BACK',
      [gl.FRONT_AND_BACK]: 'FRONT_AND_BACK',
      [gl.CW]: 'CW',
      [gl.CCW]: 'CCW',
    };
    return consts[value] || `UNKNOWN(${value})`;
  }

  // 返回 gl 上下文供进一步使用
  return gl;
})();

