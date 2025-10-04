python blender 临摹 工具

需求: [ 🔍 google Google Gemini](https://gemini.google.com/u/1/app/1fdf6f8ba6397346)

- [ ] 继续讨论开发 python blender 临摹工具 📅 2025-08-31 


## 开发工具支持


Developing a Blender add-on in VS Code requires specific plugins and tools to streamline the debugging process and manage dependencies. Here is a guide to the essential components you will need. 

要理解这些用于调试的VS Code插件，核心是围绕“Blender开发场景”展开，它们从“Blender关联调试”“Python基础支持”“数据可视化辅助”三个维度，解决调试中的关键需求，具体解析如下：

### 1. Blender Development extension（核心：打通Blender与VS Code的调试链路）
作为Blender开发的“专属调试工具”，它的核心价值是**消除VS Code与Blender软件的隔离**，让调试直接作用于Blender运行实例：
- **调试启动联动**：无需手动打开Blender再连接调试，从VS Code内直接启动Blender时，调试器已自动关联，避免手动配置的繁琐；
- **开发效率优化**：支持“保存代码即自动重载Blender插件”——开发者修改代码后，无需手动在Blender中重启插件，实时看到效果，减少重复操作；
- **标准调试能力**：提供Python调试的核心功能（断点、变量查看、单步执行），让Blender插件的Python代码调试，和普通Python项目调试体验一致，降低学习成本。


### 2. Python extension（基础：保障Python代码调试的前提）
它是所有Python开发（包括Blender插件开发，因Blender插件本质是Python代码）的“底层支持”，调试功能依赖其提供的基础环境：
- 没有它，VS Code无法识别Python语法，更无法启动Python调试器；
- 除调试基础外，其提供的“代码检查（linting）”“智能补全（IntelliSense）”等功能，能先一步减少代码语法错误，降低后续调试的复杂度。
### 3. Debug Visualizer（辅助：简化复杂数据的调试理解）
针对Blender插件开发中可能遇到的“复杂数据结构”（如处理模型顶点的数组、动画关键帧的列表等）：
- 普通调试只能看文本形式的数组/列表，数据关系不直观；
- 该插件可将这些数据可视化（如用图表、表格展示），帮助开发者快速判断数据是否符合预期，尤其适合调试“数据处理类逻辑”（如模型修改、动画计算）。


简言之，这三个插件形成“基础支持+核心调试+辅助可视化”的组合：**Python插件打基础，Blender Development插件做针对性调试联动，Debug Visualizer优化复杂数据的调试效率**，共同覆盖Blender插件开发的调试需求。

构建Blender插件的必要条件可简要解析如下：
    
```
my_addon_folder/
├── __init__.py # The main file for your add-on
├── my_module.py # Other Python files
├── etc/ # Additional folders and resources
```

1. **正确的项目结构**：插件文件需按特定文件夹结构组织，核心包含`__init__.py`主文件（存放插件元数据和注册/注销函数）、其他Python模块文件及额外资源文件夹，这样Blender才能识别并加载插件。

2. **`__init__.py`文件**：这是插件的关键文件，必须包含`bl_info`字典（存储插件名称、作者、版本等元数据）以及`register()`和`unregister()`函数（用于注册和注销插件类）。

3. **启用开发者额外功能**：在Blender中，需开启"Developer Extras"才能访问开发者相关功能和插件调试所需的菜单命令，可通过**Edit > Preferences > Interface** 路径启用。

4. **设置脚本路径**：为方便开发时实时重载插件，可将Blender的脚本路径设置为插件开发文件夹，具体在**Edit > Preferences > File Paths** 中，将"脚本"路径指向包含`addons`子文件夹的开发目录。 (e.g., `C:\Code\Blender Stuff`)


Required libraries and tools

- **Blender Python API (`bpy`):** This is Blender's built-in Python library and is the core reference for all add-on development. You will reference `bpy` to access Blender data and functionality, but you do not need to install it separately; it is provided by Blender itself.
- **`debugpy`:** This is the Python remote debugging package that allows VS Code to attach to the Blender process and perform debugging. The VS Code Blender Development extension often handles its installation, but if it fails, you can install it manually using Blender's Python environment.
- **External Python libraries:** If your add-on requires libraries not included with Blender (e.g., `numpy`, `pillow`), you must bundle them with your add-on. You cannot rely on users having these libraries installed.
    - **Vendoring:** For pure Python dependencies, you can use a tool like `vendoring` to include the library files directly in your add-on package.
- **Asset management tools:** For larger add-ons, you may find tools that assist with packaging and managing your project useful.
    - **Packaging frameworks:** Projects like `BlenderAddonPackageTool` on GitHub can automate the process of packaging your add-on into a release-ready zip file. 

Development workflow

1. **Set up VS Code:** Install the **Python** and **Blender Development** extensions.
2. **Create your project:** Open your add-on project folder in VS Code. Create the necessary folder structure with an `__init__.py` file.
3. **Launch Blender:** Use the VS Code Command Palette (**Ctrl+Shift+P**) to run the `Blender: Start` command. Select your Blender executable when prompted. VS Code will automatically start Blender and attach the debugger.
4. **Set up debugging:** Set breakpoints by clicking next to a line number in VS Code. When you trigger the code in Blender (e.g., by clicking a button your add-on created), the debugger will pause execution at the breakpoint.
5. **Reload the add-on:** After making code changes and saving your files in VS Code, you can reload your add-on in Blender to apply the changes. Some setups can automate this on save.
6. **Bundle dependencies:** If you use external libraries, create a system for bundling them with your final add-on package to ensure all dependencies are included when a user installs it.