// 直接在浏览器控制台运行
(function() {
    // 避免重复创建
    if (window.autoClickerPanel) {
        console.log('监听器已存在');
        return;
    }
    
    // 创建浮动控制面板
    const panel = document.createElement('div');
    panel.id = 'auto-clicker-panel';
    panel.innerHTML = `
        <div style="
            position: fixed;
            top: 20px;
            right: 20px;
            z-index: 999999;
            background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
            color: white;
            padding: 15px;
            border-radius: 10px;
            box-shadow: 0 4px 15px rgba(0,0,0,0.2);
            font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
            min-width: 200px;
        ">
            <h4 style="margin: 0 0 10px 0; font-size: 14px;">自动点击器</h4>
            <button id="toggle-listener" style="
                background: #28a745;
                color: white;
                border: none;
                padding: 8px 12px;
                border-radius: 5px;
                cursor: pointer;
                margin-right: 8px;
                font-size: 12px;
            ">🎯 开始监听</button>
            <button id="close-panel" style="
                background: #dc3545;
                color: white;
                border: none;
                padding: 8px 12px;
                border-radius: 5px;
                cursor: pointer;
                font-size: 12px;
            ">❌ 关闭</button>
            <div id="status" style="
                margin-top: 10px;
                font-size: 11px;
                opacity: 0.9;
            ">状态: 待机中</div>
            <div id="log" style="
                margin-top: 5px;
                font-size: 10px;
                opacity: 0.7;
                max-height: 60px;
                overflow-y: auto;
            "></div>
        </div>
    `;
    
    document.body.appendChild(panel);
    window.autoClickerPanel = panel;
    
    // 获取控制元素
    const toggleBtn = panel.querySelector('#toggle-listener');
    const closeBtn = panel.querySelector('#close-panel');
    const statusDiv = panel.querySelector('#status');
    const logDiv = panel.querySelector('#log');
    
    let isListening = false;
    let intervalId = null;
    let clickCount = 0;
    
    // 日志函数
    function addLog(message) {
        const time = new Date().toLocaleTimeString();
        logDiv.innerHTML = `[${time}] ${message}<br>` + logDiv.innerHTML;
        console.log(`[自动点击器] ${message}`);
    }
    
    // 开始/停止监听
    toggleBtn.addEventListener('click', () => {
        if (!isListening) {
            startListening();
        } else {
            stopListening();
        }
    });
    
    // 关闭面板
    closeBtn.addEventListener('click', () => {
        stopListening();
        document.body.removeChild(panel);
        delete window.autoClickerPanel;
        console.log('自动点击器已关闭');
    });
    
    function startListening() {
        isListening = true;
        toggleBtn.textContent = '⏹️ 停止监听';
        toggleBtn.style.background = '#dc3545';
        statusDiv.textContent = '状态: 正在监听...';
        addLog('开始监听目标按钮');
        
        intervalId = setInterval(() => {
            // 查找目标按钮
            const targetButton = document.querySelector('.codegeex-btn.mini.primary.codegeex-tool-confirm__btn--confirm');
            
            if (targetButton) {
                const buttonText = targetButton.textContent.trim();
                if (buttonText.includes('同意')) {
                    targetButton.click();
                    clickCount++;
                    addLog(`✅ 成功点击按钮 (第${clickCount}次)`);
                    statusDiv.textContent = `状态: 已点击 ${clickCount} 次`;
                    
                    // 可选：点击后停止监听
                    // stopListening();
                }
            }
        }, 1000); // 每秒检查一次
    }
    
    function stopListening() {
        isListening = false;
        toggleBtn.textContent = '🎯 开始监听';
        toggleBtn.style.background = '#28a745';
        statusDiv.textContent = '状态: 已停止';
        addLog('停止监听');
        
        if (intervalId) {
            clearInterval(intervalId);
            intervalId = null;
        }
    }
    
    // 使面板可拖拽
    let isDragging = false;
    let dragOffset = { x: 0, y: 0 };
    
    panel.addEventListener('mousedown', (e) => {
        if (e.target.tagName !== 'BUTTON') {
            isDragging = true;
            dragOffset.x = e.clientX - panel.offsetLeft;
            dragOffset.y = e.clientY - panel.offsetTop;
            panel.style.cursor = 'move';
        }
    });
    
    document.addEventListener('mousemove', (e) => {
        if (isDragging) {
            panel.style.left = (e.clientX - dragOffset.x) + 'px';
            panel.style.top = (e.clientY - dragOffset.y) + 'px';
            panel.style.right = 'auto';
        }
    });
    
    document.addEventListener('mouseup', () => {
        isDragging = false;
        panel.style.cursor = 'default';
    });
    
    addLog('自动点击器已启动');
    console.log('🎯 自动点击器已创建！可以拖拽面板位置。');
})();