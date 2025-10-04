// 网站配置管理器
// 统一管理所有网站的域名识别、图标、标题清理规则

class SiteManager {
    constructor() {
        // 网站配置对象 - 集中管理所有网站信息
        this.siteConfigs = {
            'youtube': {
                domains: ['youtube.com', 'youtu.be'],
                icon: '📹',
                titleSuffixes: ['- YouTube'],
                titlePatterns: [
                    // 移除YouTube视频编号前缀，如 "(333)"
                    { pattern: /^\(\d+\)\s*/, replacement: '' }
                ]
            },
            'bilibili': {
                domains: ['bilibili.com'],
                icon: '📺',
                titleSuffixes: ['_哔哩哔哩_bilibili']
            },
            'github': {
                domains: ['github.com'],
                icon: '💻',
                titleSuffixes: [' - GitHub']
            },
            'stackoverflow': {
                domains: ['stackoverflow.com'],
                icon: '🔧',
                titleSuffixes: [' - Stack Overflow']
            },
            'zhihu': {
                domains: ['zhihu.com'],
                icon: '📚',
                titleSuffixes: []
            },
            'xiaohongshu': {
                domains: ['xiaohongshu.com'],
                icon: '📖',
                titleSuffixes: [' - 小红书']
            },
            'wikipedia': {
                domains: ['wikipedia.org'],
                icon: '📖',
                titleSuffixes: ['- Wikipedia']
            },
            'medium': {
                domains: ['medium.com'],
                icon: '✍️',
                titleSuffixes: [' - Medium']
            },
            'devto': {
                domains: ['dev.to'],
                icon: '💡',
                titleSuffixes: [' - Dev.to']
            },
            'reddit': {
                domains: ['reddit.com'],
                icon: '🤖',
                titleSuffixes: [' - Reddit']
            },
            'twitter': {
                domains: ['twitter.com', 'x.com'],
                icon: '🐦',
                titleSuffixes: [' - Twitter']
            },
            'linkedin': {
                domains: ['linkedin.com'],
                icon: '💼',
                titleSuffixes: [' - LinkedIn']
            },
            'facebook': {
                domains: ['facebook.com'],
                icon: '📘',
                titleSuffixes: [' - Facebook']
            },
            'instagram': {
                domains: ['instagram.com'],
                icon: '📷',
                titleSuffixes: [' - Instagram']
            },
            'tiktok': {
                domains: ['tiktok.com'],
                icon: '🎵',
                titleSuffixes: [' - TikTok']
            },
            'netflix': {
                domains: ['netflix.com'],
                icon: '🎬',
                titleSuffixes: [' - Netflix']
            },
            'spotify': {
                domains: ['spotify.com'],
                icon: '🎵',
                titleSuffixes: [' - Spotify']
            },
            'apple': {
                domains: ['apple.com'],
                icon: '🍎',
                titleSuffixes: [' - Apple']
            },
            'microsoft': {
                domains: ['microsoft.com'],
                icon: '🪟',
                titleSuffixes: [' - Microsoft']
            },
            'google': {
                domains: ['google.com'],
                icon: '🔍',
                titleSuffixes: [' - Google']
            },
            'amazon': {
                domains: ['amazon.com'],
                icon: '📦',
                titleSuffixes: [' - Amazon']
            },
            'baidu': {
                domains: ['baidu.com'],
                icon: '🔍',
                titleSuffixes: [' - 百度']
            },
            'qq': {
                domains: ['qq.com'],
                icon: '🐧',
                titleSuffixes: [' - 腾讯']
            },
            'weibo': {
                domains: ['weibo.com'],
                icon: '📱',
                titleSuffixes: [' - 微博']
            },
            'douyin': {
                domains: ['douyin.com'],
                icon: '🎵',
                titleSuffixes: [' - 抖音']
            }
        };
        
        // 预计算域名到站点ID的映射，提高查找效率
        this.domainToSiteMap = this._buildDomainMap();
    }
    
    /**
     * 构建域名到站点ID的映射表
     * @private
     */
    _buildDomainMap() {
        const map = new Map();
        
        for (const [siteId, config] of Object.entries(this.siteConfigs)) {
            for (const domain of config.domains) {
                map.set(domain, siteId);
            }
        }
        
        return map;
    }
    
    /**
     * 根据URL识别网站
     * @param {string} url - 网页URL
     * @returns {string} 站点ID
     */
    identifySite(url) {
        try {
            // 先尝试精确匹配
            for (const [domain, siteId] of this.domainToSiteMap) {
                if (url.includes(domain)) {
                    return siteId;
                }
            }
            
            // 如果没有精确匹配，使用通用域名提取
            return this._extractGenericDomain(url);
        } catch (e) {
            return 'unknown';
        }
    }
    
    /**
     * 通用域名提取逻辑
     * @param {string} url - 网页URL
     * @returns {string} 域名
     * @private
     */
    _extractGenericDomain(url) {
        let hostname = '';
        
        // 移除协议部分
        if (url.startsWith('https://')) {
            hostname = url.substring(8);
        } else if (url.startsWith('http://')) {
            hostname = url.substring(7);
        } else {
            hostname = url;
        }
        
        // 获取域名部分（到第一个/或?之前）
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
    
    /**
     * 获取网站图标
     * @param {string} siteId - 站点ID
     * @returns {string} 图标emoji
     */
    getIcon(siteId) {
        const config = this.siteConfigs[siteId];
        return config ? config.icon : '🌐';
    }
    
    /**
     * 清理标题
     * @param {string} title - 原始标题
     * @param {string} siteId - 站点ID
     * @returns {string} 清理后的标题
     */
    cleanTitle(title, siteId) {
        let cleanedTitle = title;
        const config = this.siteConfigs[siteId];
        
        if (config) {
            // 移除网站特定的后缀
            if (config.titleSuffixes) {
                config.titleSuffixes.forEach(suffix => {
                    cleanedTitle = cleanedTitle.replace(suffix, '');
                });
            }
            
            // 应用网站特定的标题模式处理
            if (config.titlePatterns) {
                config.titlePatterns.forEach(({ pattern, replacement }) => {
                    cleanedTitle = cleanedTitle.replace(pattern, replacement);
                });
            }
        }
        
        return cleanedTitle.trim();
    }
    
    /**
     * 添加新网站配置
     * @param {string} siteId - 站点ID
     * @param {Object} config - 网站配置
     */
    addSite(siteId, config) {
        this.siteConfigs[siteId] = config;
        // 重新构建域名映射
        this.domainToSiteMap = this._buildDomainMap();
    }
    
    /**
     * 更新网站配置
     * @param {string} siteId - 站点ID
     * @param {Object} updates - 要更新的配置
     */
    updateSite(siteId, updates) {
        if (this.siteConfigs[siteId]) {
            this.siteConfigs[siteId] = { ...this.siteConfigs[siteId], ...updates };
            // 如果更新了域名，重新构建映射
            if (updates.domains) {
                this.domainToSiteMap = this._buildDomainMap();
            }
        }
    }
    
    /**
     * 删除网站配置
     * @param {string} siteId - 站点ID
     */
    removeSite(siteId) {
        if (this.siteConfigs[siteId]) {
            delete this.siteConfigs[siteId];
            // 重新构建域名映射
            this.domainToSiteMap = this._buildDomainMap();
        }
    }
    
    /**
     * 获取所有网站配置
     * @returns {Object} 所有网站配置
     */
    getAllSites() {
        return { ...this.siteConfigs };
    }
    
    /**
     * 获取支持的网站列表
     * @returns {Array} 网站ID列表
     */
    getSupportedSites() {
        return Object.keys(this.siteConfigs);
    }
}

// 导出单例实例
const siteManager = new SiteManager();

// 如果在Node.js环境中
if (typeof module !== 'undefined' && module.exports) {
    module.exports = { SiteManager, siteManager };
}

// 如果在osascript环境中，将其附加到全局对象
if (typeof global !== 'undefined') {
    global.SiteManager = SiteManager;
    global.siteManager = siteManager;
}