#!/usr/bin/env osascript -l JavaScript

function run(argv) {
    const extractPageContent = function extractPageContent(shouldIncludeImage) {
        const withImage = shouldIncludeImage === "im"
        
        const siteConfig = {
            supportedSites: {
                youtube: {
                    titleSuffix: '- YouTube',
                    extractMediaInfo: (pageUrl, urlParams, includeImage) => {
                        if (!urlParams.has("v")) return null;
                        
                        const vcode = urlParams.get("v");
                        const times = document.querySelector(`#movie_player > div.ytp-chrome-bottom > div.ytp-progress-bar-container > div.ytp-progress-bar`)?.getAttribute('aria-valuenow') || '0';
                        const chapter_content = document.getElementsByClassName('ytp-chapter-title-content')[0]?.innerHTML;
                        
                        // 获取视频标题
                        const scriptTagContent = document.querySelector("#scriptTag")?.innerText;
                        const parsedContent = scriptTagContent ? JSON.parse(scriptTagContent) : null;
                        let videoTitle = parsedContent?.name || document.querySelector("head > title")?.innerText || 'Unknown Title';
                        videoTitle = `${chapter_content ? chapter_content + '/' : ''} ${videoTitle}`;
                        
                        // 获取播放列表
                        const $lookup = document.querySelector("#lockup-container");
                        const playlistLink = $lookup ? `[youtube playlist](https://www.youtube.com${$lookup.getAttribute("href")})` : '';
                        
                        return {
                            cleanPageTitle: videoTitle,
                            pageUrl: `https://youtu.be/${vcode}?t=${times}`,
                            mediaPlaylistInfo: playlistLink,
                            thumbnailUrl: includeImage ? `https://i.ytimg.com/vi/${vcode}/hqdefault.jpg` : null
                        };
                    }
                },
                bilibili: {
                    titleSuffix: '_哔哩哔哩_bilibili',
                    extractMediaInfo: (pageUrl, urlParams) => {
                        if (pageUrl.indexOf("/video/") === -1) return null;
                        
                        const timerange = document.getElementsByClassName('bpx-player-ctrl-time-current')[0]?.innerHTML?.split(':') || ['0', '0'];
                        const time = Number(timerange[0]) * 60 + Number(timerange[1]);
                        const p = urlParams.has("p") ? 'p=' + urlParams.get("p") + '&' : '';
                        
                        return {
                            pageUrl: `${window.location.protocol}//${window.location.host}${window.location.pathname}?${p}t=${time}`
                        };
                    }
                },
                xiaohongshu: {
                    titleSuffix: ' - 小红书'
                },
                wikipedia: {
                    titleSuffix: '- Wikipedia'
                },
                stackoverflow: {
                    titleSuffix: ' - Stack Overflow'
                }
            }
        }

        const pageUtils = {
            parseHostInfo(pageUrl) {
                const hostParts = (new URL(pageUrl).host).split('.')
                return {
                    siteName: hostParts.length < 3 ? hostParts[0] : hostParts[1],
                    domainName: `${hostParts[hostParts.length-2]}.${hostParts[hostParts.length-1]}`
                }
            },

            extractThumbnail(shouldIncludeImage) {
                if (!shouldIncludeImage) return ''
                
                const metaImage = document.querySelector('meta[property="og:image"]') || 
                                document.querySelector('meta[name="og:image"]')
                if (!metaImage) return '~~missing image~~'

                let thumbnailUrl = metaImage.content
                if (!thumbnailUrl.startsWith('http')) {
                    thumbnailUrl = 'https://' + thumbnailUrl
                }
                return `\n![|200](${thumbnailUrl})`
            },

            extractPageTitle() {
                return document.querySelector('meta[name="og:title"]')?.content || 
                    document.querySelector('meta[name="title"]')?.content || 
                    document.title || 'Unknown Title'
            }
        }

        try {
            const pageUrl = window.location.href
            const { siteName, domainName } = pageUtils.parseHostInfo(pageUrl)
            
            let thumbnailMarkdown = pageUtils.extractThumbnail(withImage)
            let cleanPageTitle = pageUtils.extractPageTitle()
            let currentPageUrl = pageUrl
            
            // 处理所有网站的通用标题后缀
            Object.values(siteConfig.supportedSites).forEach(site => {
                cleanPageTitle = cleanPageTitle.replace(site.titleSuffix, '')
            })
            
            let mediaPlaylistInfo = ''
            const urlParams = new URLSearchParams(window.location.search)
            
            if (siteConfig.supportedSites[siteName]) {
                const currentSite = siteConfig.supportedSites[siteName]
                cleanPageTitle = cleanPageTitle.replace(currentSite.titleSuffix, '')
                
                if (currentSite.extractMediaInfo) {
                    const mediaInfo = currentSite.extractMediaInfo(currentPageUrl, urlParams, withImage)
                    if (mediaInfo) {
                        if (mediaInfo.cleanPageTitle) cleanPageTitle = mediaInfo.cleanPageTitle;
                        if (mediaInfo.pageUrl) currentPageUrl = mediaInfo.pageUrl;
                        if (mediaInfo.mediaPlaylistInfo) mediaPlaylistInfo = mediaInfo.mediaPlaylistInfo;
                        if (mediaInfo.thumbnailUrl) thumbnailMarkdown = `\n![|200](${mediaInfo.thumbnailUrl})`;
                    }
                }
            }
            
            const selectedText = window.getSelection().toString()
            const quotedContent = selectedText ? `\`\`\`\n${selectedText}\n\`\`\`\n` : ''
            
            return `${thumbnailMarkdown}\n${quotedContent}(Source: [${domainName}: ${cleanPageTitle}](${currentPageUrl})${mediaPlaylistInfo})`
        } catch (error) {
            return `Error: ${error.message}`
        }
    }
    
    // 优先使用豆包，然后是其他浏览器
    const browsers = [
        '豆包',
        'Google Chrome',
        'Microsoft Edge',
        'Safari',
        'Brave Browser',
        'Arc'
    ];
    
    for (const browserName of browsers) {
        try {
            const browser = Application(browserName);
            
            if (browser.running() && browser.windows && browser.windows.length > 0) {
                const window = browser.windows[0];
                
                if (window.activeTab) {
                    console.log(`尝试使用 ${browserName}...`);
                    
                    try {
                        const result = window.activeTab.execute({
                            javascript: `(${extractPageContent.toString()})('${argv[0]}')`
                        });
                        
                        console.log(`成功使用 ${browserName} 提取内容`);
                        return result;
                        
                    } catch (jsError) {
                        console.log(`${browserName} JavaScript执行失败: ${jsError.message}`);
                        
                        // 如果JavaScript执行失败，尝试获取基本信息
                        try {
                            const url = window.activeTab.url();
                            const title = window.activeTab.name();
                            
                            if (url && !url.startsWith('chrome-extension://') && !url.startsWith('chrome://')) {
                                console.log(`使用 ${browserName} 获取基本信息`);
                                
                                // 解析域名
                                let domainName = 'unknown';
                                try {
                                    const urlObj = new URL(url);
                                    const hostParts = urlObj.hostname.split('.');
                                    domainName = hostParts.length < 3 ? hostParts[0] : hostParts[1];
                                } catch (e) {
                                    console.log('URL解析失败，使用默认域名');
                                    // 尝试简单的域名提取
                                    if (url.includes('youtube.com')) domainName = 'youtube';
                                    else if (url.includes('bilibili.com')) domainName = 'bilibili';
                                    else if (url.includes('github.com')) domainName = 'github';
                                    else if (url.includes('stackoverflow.com')) domainName = 'stackoverflow';
                                    else domainName = 'web';
                                }
                                
                                // 清理标题
                                let cleanTitle = title;
                                const titleSuffixes = [
                                    '- YouTube',
                                    '_哔哩哔哩_bilibili',
                                    ' - 小红书',
                                    '- Wikipedia',
                                    ' - Stack Overflow'
                                ];
                                
                                titleSuffixes.forEach(suffix => {
                                    cleanTitle = cleanTitle.replace(suffix, '');
                                });
                                
                                return `(Source: [${domainName}: ${cleanTitle}](${url}))`;
                            }
                        } catch (basicError) {
                            console.log(`${browserName} 基本信息获取失败: ${basicError.message}`);
                        }
                    }
                }
            }
        } catch (browserError) {
            console.log(`${browserName} 不可用: ${browserError.message}`);
        }
    }
    
    // 如果所有浏览器都失败，返回错误信息
    return 'Error: 无法从任何浏览器获取页面内容';
} 