# Alfred浏览器标签页提取器

## 问题修复

原来的Alfred工作流存在路径问题，导致无法找到JavaScript文件。现在已经修复：

### 修复内容

1. **创建了新的脚本文件**: `alfred_browser_extractor.sh`
   - 位置：项目根目录
   - 正确引用JavaScript文件：`src/core/url_extractor/alfred_browser_tabs.js`

2. **更新了Alfred工作流配置**: `info.plist`
   - 将内联脚本改为引用外部脚本文件
   - 修复了路径解析问题

## 文件结构

```
user.workflow.C8ADF3D7-1D26-405D-9607-07EEECCB1A78/
├── alfred_browser_extractor.sh          # 新的主脚本文件
├── src/core/url_extractor/
│   └── alfred_browser_tabs.js          # JavaScript浏览器标签页提取逻辑
├── test_workflow.sh                     # 测试脚本
├── info.plist                          # Alfred工作流配置（已更新）
└── README_BROWSER_EXTRACTOR.md         # 本文件
```

## 使用方法

### 在Alfred中使用

1. 打开Alfred
2. 输入关键词：`ec` + 空格
3. 系统会自动提取当前浏览器活动标签页的信息
4. 结果会以Markdown格式复制到剪贴板

### 手动测试

```bash
# 测试脚本功能
./test_workflow.sh

# 直接运行提取器
./alfred_browser_extractor.sh
```

## 功能特性

- **多浏览器支持**: Chrome, 豆包, Edge, Safari, Brave, Arc, Firefox
- **智能域名识别**: 自动识别常见网站并添加相应图标
- **标题清理**: 自动移除网站后缀，保留核心标题
- **Markdown格式**: 输出格式化的Markdown链接

## 输出格式

```
[ 🔍 google 页面标题](@https://example.com/page)
```

## 支持的网站图标

- YouTube: 📹
- Bilibili: 📺
- GitHub: 💻
- Stack Overflow: 🔧
- 知乎: 📚
- 小红书: 📖
- 维基百科: 📖
- Medium: ✍️
- Dev.to: 💡
- Reddit: 🤖
- Twitter: 🐦
- LinkedIn: 💼
- Facebook: 📘
- Instagram: 📷
- TikTok: 🎵
- Netflix: 🎬
- Spotify: 🎵
- Apple: 🍎
- Microsoft: 🪟
- Google: 🔍
- Amazon: 📦
- 百度: 🔍
- QQ: 🐧
- 微博: 📱
- 抖音: 🎵

## 故障排除

如果遇到问题：

1. 确保脚本有执行权限：`chmod +x alfred_browser_extractor.sh`
2. 检查JavaScript文件是否存在：`ls src/core/url_extractor/alfred_browser_tabs.js`
3. 运行测试脚本：`./test_workflow.sh`

## 🆕 网站配置管理系统

### 统一配置管理

现在所有网站信息都通过统一的配置系统管理，告别分散维护的痛苦！

#### 主要改进：

1. **集中式配置**: 所有网站的域名、图标、标题清理规则都在一个地方
2. **易于维护**: 添加新网站只需要一个配置对象
3. **配置管理器**: 提供命令行工具来管理网站配置
4. **导入导出**: 支持JSON格式的配置导入导出

### 配置管理器使用

```bash
# 启动配置管理器
node src/core/url_extractor/site_config_manager.js

# 或者直接运行
./src/core/url_extractor/site_config_manager.js
```

#### 管理功能：

- ✅ 查看所有网站配置
- ✅ 添加新网站
- ✅ 修改现有网站配置  
- ✅ 删除网站配置
- ✅ 导出配置到JSON
- ✅ 从JSON导入配置

### 网站配置结构

每个网站配置包含：

```javascript
'youtube': {
    domains: ['youtube.com', 'youtu.be'],    // 域名列表
    icon: '📹',                               // 图标emoji
    titleSuffixes: ['- YouTube'],            // 要移除的标题后缀
    titlePatterns: [                         // 标题处理正则表达式
        { pattern: /^\(\d+\)\s*/, replacement: '' }
    ]
}
```

### 添加新网站示例

```bash
# 运行配置管理器
./src/core/url_extractor/site_config_manager.js

# 选择"2. 添加新网站"
# 输入：
# 网站ID: notion
# 域名: notion.so
# 图标: 📝
# 标题后缀: - Notion
```

### 文件结构更新

```
user.workflow.C8ADF3D7-1D26-405D-9607-07EEECCB1A78/
├── alfred_browser_extractor.sh          # 主脚本文件
├── src/core/url_extractor/
│   ├── alfred_browser_tabs.js          # 浏览器标签页提取逻辑（已重构）
│   ├── site_config.js                  # 网站配置管理器类
│   └── site_config_manager.js          # 配置管理命令行工具
├── test_workflow.sh                     # 测试脚本
├── demo_config_manager.sh               # 配置管理器演示
├── info.plist                          # Alfred工作流配置
└── README_BROWSER_EXTRACTOR.md         # 本文件
```

## 更新日志

- **重构**: 创建统一的网站配置管理系统
- **新增**: 配置管理器命令行工具，支持增删改查
- **改进**: 所有网站信息集中管理，提高维护性
- **修复**: 解决了Alfred工作流中JavaScript文件路径问题
- **新增**: 创建了独立的脚本文件和测试脚本
- **改进**: 更新了工作流配置以使用外部脚本文件 