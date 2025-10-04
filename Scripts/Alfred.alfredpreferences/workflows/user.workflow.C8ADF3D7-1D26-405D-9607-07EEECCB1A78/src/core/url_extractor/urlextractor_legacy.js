

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
                        const times = document.querySelector(`#movie_player > div.ytp-chrome-bottom > div.ytp-progress-bar-container > div.ytp-progress-bar`).getAttribute('aria-valuenow');
                        const chapter_content = document.getElementsByClassName('ytp-chapter-title-content')[0]?.innerHTML;
                        
                        // 获取视频标题
                        const scriptTagContent = document.querySelector("#scriptTag")?.innerText;
                        const parsedContent = scriptTagContent ? JSON.parse(scriptTagContent) : null;
                        let videoTitle = parsedContent?.name || document.querySelector("head > title").innerText;
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
                        
                        const timerange = document.getElementsByClassName('bpx-player-ctrl-time-current')[0].innerHTML.split(':');
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
                    document.title
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
    
    return Application('Google Chrome').windows[0].activeTab.execute({
        javascript: `(${extractPageContent.toString()})('${argv[0]}')`
    })
}