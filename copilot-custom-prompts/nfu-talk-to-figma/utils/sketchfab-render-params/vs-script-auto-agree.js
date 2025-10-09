// CodeGeeX 自动点击器 - 简化版（支持手动选择）
(function() {
    'use strict';
    
    if (window.autoClickerPanel) {
        console.log('⚠️ 已存在，请先关闭');
        return;
    }
    
    // ==================== 配置 ====================
    const CONFIG = {
        checkInterval: 300,
        // 固定的按钮类名（不会变）
        targetSelector: '.codegeex-tool-confirm__btn--confirm',
        // 备用选择器
        fallbackSelectors: [
            'div.codegeex-tool-confirm__btn--confirm',
            '.codegeex-btn.codegeex-tool-confirm__btn--confirm',
            '[class*="codegeex-tool-confirm__btn--confirm"]'
        ]
    };
    
    // ==================== 状态 ====================
    const state = {
        isListening: false,
        isSelectMode: false,
        intervalId: null,
        clickCount: 0,
        customSelector: null // 用户自定义选择器
    };
    
    // ==================== 创建UI ====================
    const panel = document.createElement('div');
    panel.style.cssText = `
            position: fixed;
            top: 20px;
            right: 20px;
            z-index: 999999;
            background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
            color: white;
            padding: 15px;
            border-radius: 10px;
        box-shadow: 0 4px 20px rgba(0,0,0,0.3);
        font-family: system-ui, -apple-system, sans-serif;
        min-width: 280px;
    `;
    
    const title = document.createElement('div');
    title.textContent = '🤖 CodeGeeX 自动点击器';
    title.style.cssText = 'font-size: 14px; font-weight: 600; margin-bottom: 12px; cursor: move;';
    
    const btnContainer = document.createElement('div');
    btnContainer.style.cssText = 'display: flex; gap: 8px; flex-wrap: wrap; margin-bottom: 12px;';
    
    const selectBtn = document.createElement('button');
    selectBtn.textContent = '👆 手动选择';
    selectBtn.style.cssText = `
        background: #ffc107;
        color: #333;
        border: none;
        padding: 8px 12px;
        border-radius: 5px;
        cursor: pointer;
        font-size: 12px;
        font-weight: 500;
        flex: 1;
    `;
    
    const toggleBtn = document.createElement('button');
    toggleBtn.textContent = '🎯 开始监听';
    toggleBtn.style.cssText = `
                background: #28a745;
                color: white;
                border: none;
                padding: 8px 12px;
                border-radius: 5px;
                cursor: pointer;
                font-size: 12px;
        font-weight: 500;
        flex: 1;
    `;
    
    const closeBtn = document.createElement('button');
    closeBtn.textContent = '❌';
    closeBtn.style.cssText = `
                background: #dc3545;
                color: white;
                border: none;
                padding: 8px 12px;
                border-radius: 5px;
                cursor: pointer;
                font-size: 12px;
        font-weight: 500;
    `;
    
    btnContainer.appendChild(selectBtn);
    btnContainer.appendChild(toggleBtn);
    btnContainer.appendChild(closeBtn);
    
    const statusDiv = document.createElement('div');
    statusDiv.style.cssText = `
        background: rgba(0,0,0,0.2);
        padding: 10px;
        border-radius: 5px;
        font-size: 11px;
    `;
    
    // 创建状态行
    const statusLine = document.createElement('div');
    statusLine.style.marginBottom = '5px';
    statusLine.textContent = '📊 状态: 待机中';
    
    // 创建点击次数行
    const clickLine = document.createElement('div');
    clickLine.textContent = '✅ 点击次数: ';
    const clickCountSpan = document.createElement('span');
    clickCountSpan.id = 'click-count';
    clickCountSpan.textContent = '0';
    clickLine.appendChild(clickCountSpan);
    
    // 创建选择器信息行
    const selectorInfo = document.createElement('div');
    selectorInfo.id = 'selector-info';
    selectorInfo.style.cssText = 'margin-top: 5px; color: #ffc107;';
    
    statusDiv.appendChild(statusLine);
    statusDiv.appendChild(clickLine);
    statusDiv.appendChild(selectorInfo);
    
    const logDiv = document.createElement('div');
    logDiv.id = 'log';
    logDiv.style.cssText = `
                margin-top: 10px;
        background: rgba(0,0,0,0.2);
        padding: 8px;
        border-radius: 5px;
                font-size: 10px;
        max-height: 80px;
                overflow-y: auto;
    `;
    
    panel.appendChild(title);
    panel.appendChild(btnContainer);
    panel.appendChild(statusDiv);
    panel.appendChild(logDiv);
    document.body.appendChild(panel);
    window.autoClickerPanel = panel;
    
    // ==================== 日志 ====================
    function log(msg, color = '#fff') {
        const time = new Date().toLocaleTimeString();
        const entry = document.createElement('div');
        entry.style.color = color;
        entry.textContent = `[${time}] ${msg}`;
        logDiv.insertBefore(entry, logDiv.firstChild);
        if (logDiv.children.length > 20) {
            logDiv.removeChild(logDiv.lastChild);
        }
        console.log(`[自动点击器] ${msg}`);
    }
    
    // ==================== 手动选择模式 ====================
    let selectOverlay = null;
    
    function startSelectMode() {
        state.isSelectMode = true;
        selectBtn.textContent = '❌ 取消选择';
        selectBtn.style.background = '#dc3545';
        log('👆 请点击目标按钮...', '#ffc107');
        
        // 创建遮罩层
        selectOverlay = document.createElement('div');
        selectOverlay.style.cssText = `
            position: fixed;
            top: 0;
            left: 0;
            width: 100%;
            height: 100%;
            z-index: 999998;
            cursor: crosshair;
            background: rgba(0,0,0,0.1);
        `;
        
        // 高亮效果
        let highlightedElement = null;
        
        selectOverlay.addEventListener('mousemove', (e) => {
            const target = document.elementFromPoint(e.clientX, e.clientY);
            
            if (highlightedElement && highlightedElement !== target) {
                highlightedElement.style.outline = '';
            }
            
            if (target && target !== selectOverlay && target !== panel) {
                target.style.outline = '2px solid #ffc107';
                highlightedElement = target;
            }
        });
        
        selectOverlay.addEventListener('click', (e) => {
            e.preventDefault();
            e.stopPropagation();
            
            const target = document.elementFromPoint(e.clientX, e.clientY);
            
            if (target && target !== selectOverlay && target !== panel && !panel.contains(target)) {
                // 生成并保存选择器（不保存元素引用，因为按钮会刷新）
                const selector = generateSelector(target);
                state.customSelector = selector;
                
                const btnText = target.textContent.trim().substring(0, 20);
                
                log(`✅ 已选择: ${target.tagName} "${btnText}"`, '#4caf50');
                log(`📝 选择器: ${selector}`, '#4caf50');
                selectorInfo.textContent = `选择器: ${selector}`;
                
                console.log('选中的元素:', target);
                console.log('生成的选择器:', selector);
                console.log('💡 提示: 即使元素刷新，也会用此选择器查找');
            }
            
            stopSelectMode();
        });
        
        document.body.appendChild(selectOverlay);
    }
    
    function stopSelectMode() {
        state.isSelectMode = false;
        selectBtn.textContent = '👆 手动选择';
        selectBtn.style.background = '#ffc107';
        
        if (selectOverlay) {
            document.body.removeChild(selectOverlay);
            selectOverlay = null;
        }
        
        // 清除所有高亮
        document.querySelectorAll('[style*="outline"]').forEach(el => {
            el.style.outline = '';
        });
    }
    
    function generateSelector(element) {
        // 优先使用 ID
        if (element.id) {
            return `#${element.id}`;
        }
        
        // 使用类名组合
        if (element.className && typeof element.className === 'string') {
            const classes = element.className.trim().split(/\s+/).join('.');
            if (classes) {
                return `${element.tagName.toLowerCase()}.${classes}`;
            }
        }
        
        // 使用标签名 + 属性
        const attrs = [];
        for (let attr of element.attributes) {
            if (attr.name !== 'style') {
                attrs.push(`[${attr.name}="${attr.value}"]`);
            }
        }
        
        return element.tagName.toLowerCase() + attrs.slice(0, 2).join('');
    }
    
    // ==================== 查找按钮（每次都通过类名查找，因为按钮会刷新）====================
    function findButton() {
        // 优先使用用户自定义选择器
        if (state.customSelector) {
            try {
                const buttons = document.querySelectorAll(state.customSelector);
                for (const btn of buttons) {
                    if (btn.offsetParent && btn.textContent.trim().includes('同意')) {
                        return btn;
                    }
                }
            } catch (e) {
                log(`⚠️ 自定义选择器无效: ${e.message}`, '#ff9800');
            }
        }
        
        // 使用主要选择器（固定类名）
        try {
            const buttons = document.querySelectorAll(CONFIG.targetSelector);
            for (const btn of buttons) {
                // 检查可见性和文本内容
                if (btn.offsetParent && btn.textContent.trim().includes('同意')) {
                    return btn;
                }
            }
        } catch (e) {
            // 忽略
        }
        
        // 使用备用选择器
        for (const selector of CONFIG.fallbackSelectors) {
            try {
                const buttons = document.querySelectorAll(selector);
                for (const btn of buttons) {
                    if (btn.offsetParent && btn.textContent.trim().includes('同意')) {
                        return btn;
                    }
                }
            } catch (e) {
                // 忽略
            }
        }
        
        return null;
    }
    
    // ==================== 点击 ====================
    function clickButton(button) {
        try {
            const originalBg = button.style.background;
            button.style.background = '#ff0';
            
            button.click();
            button.dispatchEvent(new MouseEvent('click', { bubbles: true, cancelable: true }));
            
            state.clickCount++;
            clickCountSpan.textContent = state.clickCount;
            log(`✅ 点击成功 (第${state.clickCount}次)`, '#4caf50');
            
            setTimeout(() => {
                button.style.background = originalBg;
            }, 500);
            
            return true;
        } catch (e) {
            log(`❌ 点击失败: ${e.message}`, '#f44336');
            return false;
        }
    }
    
    // ==================== 监听 ====================
    function startListening() {
        state.isListening = true;
        toggleBtn.textContent = '⏹️ 停止';
        toggleBtn.style.background = '#dc3545';
        statusLine.textContent = '📊 状态: 🟢 监听中...';
        log('🚀 开始监听', '#4caf50');
        
        state.intervalId = setInterval(() => {
            const button = findButton();
            if (button) {
                clickButton(button);
            }
        }, CONFIG.checkInterval);
    }
    
    function stopListening() {
        state.isListening = false;
        toggleBtn.textContent = '🎯 开始监听';
        toggleBtn.style.background = '#28a745';
        statusLine.textContent = '📊 状态: 🔴 已停止';
        log('⏸️ 停止监听', '#fff');
        
        if (state.intervalId) {
            clearInterval(state.intervalId);
            state.intervalId = null;
        }
    }
    
    // ==================== 事件 ====================
    selectBtn.addEventListener('click', () => {
        if (state.isSelectMode) {
            stopSelectMode();
        } else {
            startSelectMode();
        }
    });
    
    toggleBtn.addEventListener('click', () => {
        if (state.isListening) {
            stopListening();
        } else {
            startListening();
        }
    });
    
    closeBtn.addEventListener('click', () => {
        stopListening();
        stopSelectMode();
        document.body.removeChild(panel);
        delete window.autoClickerPanel;
        log('👋 已关闭');
    });
    
    // 拖拽
    let isDragging = false;
    let offset = { x: 0, y: 0 };
    
    title.addEventListener('mousedown', (e) => {
            isDragging = true;
        const rect = panel.getBoundingClientRect();
        offset.x = e.clientX - rect.left;
        offset.y = e.clientY - rect.top;
    });
    
    document.addEventListener('mousemove', (e) => {
        if (isDragging) {
            panel.style.left = (e.clientX - offset.x) + 'px';
            panel.style.top = (e.clientY - offset.y) + 'px';
            panel.style.right = 'auto';
        }
    });
    
    document.addEventListener('mouseup', () => {
        isDragging = false;
    });
    
    // ==================== 调试工具 ====================
    window.findCodeGeexButtons = function() {
        console.log('\n🔍 ========== 查找所有可能的按钮 ==========');
        
        // 查找所有包含"同意"的元素
        const all = document.querySelectorAll('*');
        const candidates = Array.from(all).filter(el => {
            const text = el.textContent?.trim();
            return text && text.includes('同意') && el.offsetParent;
        });
        
        console.log(`找到 ${candidates.length} 个候选元素：\n`);
        
        candidates.forEach((el, i) => {
            console.log(`${i + 1}.`, el);
            console.log(`   标签: ${el.tagName}`);
            console.log(`   类名: ${el.className || '(无)'}`);
            console.log(`   文本: "${el.textContent.trim().substring(0, 50)}"`);
            console.log(`   选择器: ${generateSelector(el)}\n`);
        });
        
        if (candidates.length > 0) {
            console.log('💡 在控制台选择一个元素，然后运行:');
            console.log('   window.autoClickerPanel.__setButton($0)');
        }
        
        console.log('════════════════════════════════════════\n');
        return candidates;
    };
    
    panel.__setButton = function(element) {
        if (element) {
            const selector = generateSelector(element);
            state.customSelector = selector;
            log(`✅ 手动设置选择器: ${selector}`, '#4caf50');
            selectorInfo.textContent = `选择器: ${selector}`;
            console.log('✅ 已设置按钮:', element);
            console.log('✅ 生成的选择器:', selector);
            console.log('💡 即使按钮刷新，也会用此选择器查找');
        }
    };
    
    // ==================== 调试工具：检测元素位置 ====================
    window.inspectElement = function(element) {
        if (!element) {
            element = document.querySelector('.codegeex-tool-confirm__btn--confirm');
        }
        
        if (!element) {
            console.error('❌ 未找到元素');
            return;
        }
        
        console.log('\n🔍 ========== 元素检测报告 ==========');
        console.log('📍 元素信息:');
        console.log('  - 标签:', element.tagName);
        console.log('  - 类名:', element.className);
        console.log('  - ID:', element.id || '(无)');
        console.log('  - 文本:', element.textContent.trim());
        console.log('  - 元素:', element);
        
        // 检查上下文
        const root = element.getRootNode();
        console.log('\n📦 上下文:');
        console.log('  - 在主文档:', root === document);
        console.log('  - 在 Shadow DOM:', root !== document && root.host);
        console.log('  - 根节点:', root);
        
        if (root.host) {
            console.log('  - Shadow Host:', root.host);
        }
        
        // 检查 iframe
        let inIframe = false;
        try {
            inIframe = window.self !== window.top;
        } catch (e) {
            inIframe = true;
        }
        console.log('  - 在 iframe:', inIframe);
        
        // 检查可见性
        console.log('\n👁️ 可见性:');
        console.log('  - offsetParent:', element.offsetParent !== null);
        console.log('  - display:', getComputedStyle(element).display);
        console.log('  - visibility:', getComputedStyle(element).visibility);
        console.log('  - opacity:', getComputedStyle(element).opacity);
        
        const rect = element.getBoundingClientRect();
        console.log('  - 位置:', `(${rect.left}, ${rect.top})`);
        console.log('  - 尺寸:', `${rect.width} x ${rect.height}`);
        
        // 生成 DOM 路径
        console.log('\n🗺️ DOM 路径:');
        const path = [];
        let current = element;
        while (current && current !== document.body) {
            let selector = current.tagName.toLowerCase();
            if (current.id) {
                selector += `#${current.id}`;
            } else if (current.className) {
                const classes = Array.from(current.classList).slice(0, 3).join('.');
                if (classes) selector += `.${classes}`;
            }
            path.unshift(selector);
            current = current.parentElement;
        }
        console.log('  ' + path.join(' > '));
        
        // 事件监听器
        console.log('\n🎯 事件检测:');
        console.log('  - onclick:', element.onclick !== null);
        console.log('  - 事件监听器:', getEventListeners ? getEventListeners(element) : '(需要在 Elements 面板运行)');
        
        console.log('\n💡 建议:');
        if (root !== document) {
            console.log('  ⚠️ 元素在 Shadow DOM 中，需要特殊处理');
            console.log('  📝 尝试: 在扩展的 webview 中运行此脚本');
        }
        if (inIframe) {
            console.log('  ⚠️ 元素在 iframe 中，需要在 iframe 上下文中运行脚本');
        }
        
        console.log('════════════════════════════════════════\n');
        
        return {
            element,
            inShadowDOM: root !== document,
            inIframe,
            isVisible: element.offsetParent !== null,
            path: path.join(' > ')
        };
    };
    
    // ==================== 工具函数：直接设置选择器 ====================
    window.setAutoClickSelector = function(selector) {
        state.customSelector = selector;
        log(`✅ 已设置选择器: ${selector}`, '#4caf50');
        selectorInfo.textContent = `选择器: ${selector}`;
        console.log('✅ 选择器已设置:', selector);
        
        // 测试选择器
        try {
            const buttons = document.querySelectorAll(selector);
            console.log(`✅ 找到 ${buttons.length} 个匹配元素`);
            buttons.forEach((btn, i) => {
                console.log(`  ${i + 1}.`, btn);
            });
            
            if (buttons.length > 0) {
                console.log('\n🔍 检测第一个元素:');
                inspectElement(buttons[0]);
            }
        } catch (e) {
            console.error('❌ 选择器无效:', e.message);
        }
    };
    
    // ==================== 工具函数：查找所有 webview/iframe ====================
    window.findWebviews = function() {
        console.log('\n🔍 ========== 查找 Webview/Iframe ==========');
        
        const iframes = document.querySelectorAll('iframe, webview');
        console.log(`找到 ${iframes.length} 个 iframe/webview:\n`);
        
        iframes.forEach((frame, i) => {
            console.log(`${i + 1}. ${frame.tagName}`);
            console.log(`   - ID: ${frame.id || '(无)'}`);
            console.log(`   - Class: ${frame.className || '(无)'}`);
            console.log(`   - src: ${frame.src || '(无)'}`);
            console.log(`   - 元素:`, frame);
            
            // 尝试访问内容
            try {
                if (frame.contentDocument) {
                    const buttons = frame.contentDocument.querySelectorAll('.codegeex-tool-confirm__btn--confirm');
                    if (buttons.length > 0) {
                        console.log(`   ✅ 在此 iframe 中找到 ${buttons.length} 个目标按钮！`);
                        console.log(`   💡 请在此 iframe 的控制台中运行脚本`);
                    }
                } else {
                    console.log(`   ⚠️ 无法访问内容（可能跨域）`);
                }
            } catch (e) {
                console.log(`   ⚠️ 访问被拒绝: ${e.message}`);
            }
            console.log('');
        });
        
        if (iframes.length === 0) {
            console.log('💡 未找到 iframe/webview');
            console.log('💡 CodeGeeX 可能使用其他方式渲染 UI');
        }
        
        console.log('════════════════════════════════════════\n');
        return Array.from(iframes);
    };
    
    // ==================== 初始化 ====================
    log('🎉 启动成功！', '#4caf50');
    log(`📝 默认选择器: ${CONFIG.targetSelector}`, '#fff');
    log('💡 点击"手动选择"或直接监听', '#ffc107');
    
    console.log('════════════════════════════════════════');
    console.log('🤖 CodeGeeX 自动点击器 - 简化版');
    console.log('════════════════════════════════════════');
    console.log('');
    console.log('🎯 默认配置:');
    console.log(`  主选择器: ${CONFIG.targetSelector}`);
    console.log(`  检查间隔: ${CONFIG.checkInterval}ms`);
    console.log('');
    console.log('📖 使用方法:');
    console.log('  方法1: 直接点击 "🎯 开始监听" (使用默认选择器)');
    console.log('  方法2: 点击 "👆 手动选择" → 点击目标按钮 → "🎯 开始监听"');
    console.log('  方法3: 运行命令设置选择器');
    console.log('');
    console.log('🐛 调试命令:');
    console.log('');
    console.log('  1️⃣ findWebviews()');
    console.log('     → 查找所有 iframe/webview（按钮可能在这里面）');
    console.log('');
    console.log('  2️⃣ findCodeGeexButtons()');
    console.log('     → 查找所有包含"同意"的元素');
    console.log('');
    console.log('  3️⃣ inspectElement($0)');
    console.log('     → 详细检测元素（在 Elements 面板选中后运行）');
    console.log('     → 会显示：位置、上下文、Shadow DOM、iframe 等');
    console.log('');
    console.log('  4️⃣ setAutoClickSelector(".your-selector")');
    console.log('     → 直接设置选择器');
    console.log('');
    console.log('  5️⃣ window.autoClickerPanel.__setButton($0)');
    console.log('     → 在 Elements 面板选中元素后设置');
    console.log('');
    console.log('💡 诊断步骤（如果无法点击）:');
    console.log('  1. 运行 findWebviews() 查找 iframe/webview');
    console.log('  2. 在 Elements 面板找到按钮，右键 → Reveal in Elements panel');
    console.log('  3. 选中按钮后，运行 inspectElement($0)');
    console.log('  4. 查看报告中的"建议"部分');
    console.log('  5. 如果在 iframe 中，需要在 iframe 的 Console 中运行脚本');
    console.log('');
    console.log('🔧 VSCode 扩展 Webview 说明:');
    console.log('  - VSCode 扩展通常使用 webview 渲染 UI');
    console.log('  - Webview 是独立的上下文，需要在其内部运行脚本');
    console.log('  - 右键点击扩展 UI → 检查元素 → 在打开的控制台中运行脚本');
    console.log('════════════════════════════════════════');
    
})();
