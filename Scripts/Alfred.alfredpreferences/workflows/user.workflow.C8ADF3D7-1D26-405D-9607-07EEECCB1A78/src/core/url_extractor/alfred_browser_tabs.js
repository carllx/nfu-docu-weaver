#!/usr/bin/env osascript -l JavaScript

// 使用内联网站配置管理器（osascript环境）

function run(argv) {
    // 浏览器列表，按实际使用频率排序
    const browsers = [
        'Google Chrome',  // 优先检查Chrome
        '豆包',           // 然后是豆包
        'Microsoft Edge',
        'Safari',
        'Brave Browser',
        'Arc',
        'Firefox'
    ];
    
    // 遍历所有浏览器
    for (const browserName of browsers) {
        try {
            const browser = Application(browserName);
            
            if (browser.running() && browser.windows && browser.windows.length > 0) {
                console.log(`检查浏览器: ${browserName}`);
                
                // 遍历所有窗口
                for (let windowIndex = 0; windowIndex < browser.windows.length; windowIndex++) {
                    const window = browser.windows[windowIndex];
                    
                    if (window.activeTab) {
                        const activeTab = window.activeTab;
                        const title = activeTab.name();
                        const url = activeTab.url();
                        
                        console.log(`  窗口 ${windowIndex + 1}: ${title} - ${url}`);
                        
                        // 只处理网页标签页
                        if (url && (url.startsWith('http://') || url.startsWith('https://'))) {
                            // 使用网站管理器处理
                            const siteId = siteManager ? siteManager.identifySite(url) : getDomain(url);
                            const cleanedTitle = siteManager ? siteManager.cleanTitle(title, siteId) : cleanTitle(title, siteId);
                            const icon = siteManager ? siteManager.getIcon(siteId) : getIcon(siteId);
                            
                            console.log(`  找到活动标签页: ${cleanedTitle}`);
                            
                            // 生成Markdown格式
                            const markdownResult = `[ ${icon} ${siteId} ${cleanedTitle}](@${url})`;
                            return markdownResult;
                        }
                    }
                }
            }
        } catch (browserError) {
            console.log(`${browserName} 错误: ${browserError.message}`);
            continue;
        }
    }
    
    return 'Error: 未找到活动标签页';
}

// 内联网站配置管理器（备用方案）
class SiteManager {
    constructor() {
        this.siteConfigs = {
            'youtube': { domains: ['youtube.com', 'youtu.be'], icon: '📹', titleSuffixes: ['- YouTube'], titlePatterns: [{ pattern: /^\(\d+\)\s*/, replacement: '' }] },
            'bilibili': { domains: ['bilibili.com'], icon: '📺', titleSuffixes: ['_哔哩哔哩_bilibili'] },
            'github': { domains: ['github.com'], icon: '💻', titleSuffixes: [' - GitHub'] },
            'stackoverflow': { domains: ['stackoverflow.com'], icon: '🔧', titleSuffixes: [' - Stack Overflow'] },
            'zhihu': { domains: ['zhihu.com'], icon: '📚', titleSuffixes: [] },
            'xiaohongshu': { domains: ['xiaohongshu.com'], icon: '📖', titleSuffixes: [' - 小红书'] },
            'wikipedia': { domains: ['wikipedia.org'], icon: '📖', titleSuffixes: ['- Wikipedia'] },
            'medium': { domains: ['medium.com'], icon: '✍️', titleSuffixes: [' - Medium'] },
            'devto': { domains: ['dev.to'], icon: '💡', titleSuffixes: [' - Dev.to'] },
            'reddit': { domains: ['reddit.com'], icon: '🤖', titleSuffixes: [' - Reddit'] },
            'twitter': { domains: ['twitter.com', 'x.com'], icon: '🐦', titleSuffixes: [' - Twitter'] },
            'linkedin': { domains: ['linkedin.com'], icon: '💼', titleSuffixes: [' - LinkedIn'] },
            'facebook': { domains: ['facebook.com'], icon: '📘', titleSuffixes: [' - Facebook'] },
            'instagram': { domains: ['instagram.com'], icon: '📷', titleSuffixes: [' - Instagram'] },
            'tiktok': { domains: ['tiktok.com'], icon: '🎵', titleSuffixes: [' - TikTok'] },
            'netflix': { domains: ['netflix.com'], icon: '🎬', titleSuffixes: [' - Netflix'] },
            'spotify': { domains: ['spotify.com'], icon: '🎵', titleSuffixes: [' - Spotify'] },
            'apple': { domains: ['apple.com'], icon: '🍎', titleSuffixes: [' - Apple'] },
            'microsoft': { domains: ['microsoft.com'], icon: '🪟', titleSuffixes: [' - Microsoft'] },
            'google': { domains: ['google.com'], icon: '🔍', titleSuffixes: [' - Google'] },
            'amazon': { domains: ['amazon.com'], icon: '📦', titleSuffixes: [' - Amazon'] },
            'baidu': { domains: ['baidu.com'], icon: '🔍', titleSuffixes: [' - 百度'] },
            'qq': { domains: ['qq.com'], icon: '🐧', titleSuffixes: [' - 腾讯'] },
            'weibo': { domains: ['weibo.com'], icon: '📱', titleSuffixes: [' - 微博'] },
            'douyin': { domains: ['douyin.com'], icon: '🎵', titleSuffixes: [' - 抖音'] }
        };
        this.domainToSiteMap = this._buildDomainMap();
    }
    
    _buildDomainMap() {
        const map = new Map();
        for (const [siteId, config] of Object.entries(this.siteConfigs)) {
            for (const domain of config.domains) {
                map.set(domain, siteId);
            }
        }
        return map;
    }
    
    identifySite(url) {
        try {
            for (const [domain, siteId] of this.domainToSiteMap) {
                if (url.includes(domain)) {
                    return siteId;
                }
            }
            return this._extractGenericDomain(url);
        } catch (e) {
            return 'unknown';
        }
    }
    
    _extractGenericDomain(url) {
        let hostname = '';
        if (url.startsWith('https://')) {
            hostname = url.substring(8);
        } else if (url.startsWith('http://')) {
            hostname = url.substring(7);
        } else {
            hostname = url;
        }
        
        const slashIndex = hostname.indexOf('/');
        const questionIndex = hostname.indexOf('?');
        
        if (slashIndex !== -1 && questionIndex !== -1) {
            hostname = hostname.substring(0, Math.min(slashIndex, questionIndex));
        } else if (slashIndex !== -1) {
            hostname = hostname.substring(0, slashIndex);
        } else if (questionIndex !== -1) {
            hostname = hostname.substring(0, questionIndex);
        }
        
        const hostParts = hostname.split('.');
        return hostParts.length < 3 ? hostParts[0] : hostParts[1];
    }
    
    getIcon(siteId) {
        const config = this.siteConfigs[siteId];
        return config ? config.icon : '🌐';
    }
    
    cleanTitle(title, siteId) {
        let cleanedTitle = title;
        const config = this.siteConfigs[siteId];
        
        if (config) {
            if (config.titleSuffixes) {
                config.titleSuffixes.forEach(suffix => {
                    cleanedTitle = cleanedTitle.replace(suffix, '');
                });
            }
            
            if (config.titlePatterns) {
                config.titlePatterns.forEach(({ pattern, replacement }) => {
                    cleanedTitle = cleanedTitle.replace(pattern, replacement);
                });
            }
        }
        
        return cleanedTitle.trim();
    }
}

// 初始化网站管理器实例
const siteManager = new SiteManager();

// 提取域名（备用函数）
function getDomain(url) {
    return siteManager.identifySite(url);
}

// 清理标题（备用函数）
function cleanTitle(title, siteId) {
    return siteManager.cleanTitle(title, siteId);
}

// 获取域名图标（备用函数）
function getIcon(siteId) {
    return siteManager.getIcon(siteId);
} 