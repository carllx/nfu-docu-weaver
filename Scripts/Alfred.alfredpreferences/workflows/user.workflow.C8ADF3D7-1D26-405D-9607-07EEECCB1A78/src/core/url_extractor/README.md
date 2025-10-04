# URL提取器

这是一个用于Alfred工作流的URL提取工具，可以自动检测当前活动的浏览器标签页，并生成Markdown格式的链接。

## 核心文件

- `urlextractor_legacy.js` - 原始URL提取器（使用JavaScript执行）
- `smart_url_extractor.js` - 智能URL提取器（多浏览器支持）
- `alfred_browser_tabs.js` - Alfred工作流专用脚本
- `alfred_workflow_script.sh` - Alfred工作流调用脚本

## 功能特点

- 🔍 **多浏览器支持** - 支持豆包、Chrome、Safari、Edge等主流浏览器
- 🎯 **智能检测** - 自动检测当前活动的标签页
- 🏷️ **域名识别** - 智能识别常见网站并分配相应图标
- 📝 **标题清理** - 自动移除网站后缀，生成简洁标题
- 📋 **Markdown格式** - 输出标准Markdown链接格式

## 输出格式

脚本会返回以下格式的Markdown链接：

```
[ 📹 youtube Instancing Geometry in TouchDesigner](@https://www.youtube.com/watch?v=BFG-FBKuJow)
```

## Alfred工作流设置

### 方法1：使用脚本文件

1. 打开 **Alfred Preferences**
2. 点击 **Workflows** 标签
3. 点击 **+** 创建新工作流
4. 选择 **Blank Workflow**

#### 添加热键触发器
1. 右键点击空白区域
2. 选择 **Inputs** > **Hotkey**
3. 设置快捷键（推荐：`Cmd + Shift + U`）
4. 在 **Title** 中输入：`提取当前标签页`

#### 添加脚本动作
1. 右键点击热键触发器
2. 选择 **Actions** > **Run Script**
3. 设置语言为 **bash**
4. 在脚本框中输入：
   ```bash
   cd "/Users/yamlam/Documents/obsdiannote/Scripts/Alfred.alfredpreferences/workflows/user.workflow.C8ADF3D7-1D26-405D-9607-07EEECCB1A78/src/core/url_extractor"
   ./alfred_workflow_script.sh
   ```

#### 添加输出动作
1. 右键点击脚本动作
2. 选择 **Outputs** > **Copy to Clipboard**
3. 在 **Title** 中输入：`复制到剪贴板`

### 方法2：直接调用JavaScript

在Alfred工作流的Run Script动作中直接使用：

```bash
cd "/Users/yamlam/Documents/obsdiannote/Scripts/Alfred.alfredpreferences/workflows/user.workflow.C8ADF3D7-1D26-405D-9607-07EEECCB1A78/src/core/url_extractor"
osascript -l JavaScript alfred_browser_tabs.js
```

## 使用方法

1. 打开任意浏览器（支持豆包、Chrome、Safari等）
2. 切换到想要提取的标签页
3. 按快捷键 `Cmd + Shift + U`
4. 结果会自动复制到剪贴板

## 测试

### 测试主要功能
```bash
cd "/Users/yamlam/Documents/obsdiannote/Scripts/Alfred.alfredpreferences/workflows/user.workflow.C8ADF3D7-1D26-405D-9607-07EEECCB1A78/src/core/url_extractor"
osascript -l JavaScript alfred_browser_tabs.js
```

## 故障排除

### 常见问题

1. **"未找到活动标签页"**
   - 确保浏览器正在运行
   - 确保有打开的网页标签页
   - 确保当前标签页是网页（不是浏览器内部页面）

2. **"浏览器不可用"**
   - 检查浏览器是否已安装
   - 检查浏览器是否正在运行
   - 某些浏览器可能需要特殊权限

3. **权限问题**
   - 在 **系统偏好设置** > **安全性与隐私** > **辅助功能** 中添加Alfred
   - 确保Alfred有权限控制其他应用程序

## 技术细节

- **语言**: JavaScript (osascript)
- **兼容性**: macOS 10.12+
- **依赖**: 无需额外依赖
- **权限**: 需要辅助功能权限 