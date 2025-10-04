# Issue: Alfred Workflow Trouble with`franc-cli`

## Problem Description

Facing difficulty running `franc-cli` inside an Alfred workflow. Despite `franc-cli` working in the terminal, Alfred gives the error: 'command not found: franc'.

## Issue Diagnosis & Solution

The problem is likely due to Alfred being unaware of your global npm PATH. Here's the step-by-step solution to add the environment variable to Alfred:

#### 1. Confirm your Global npm Packages:

To confirm the proper installation of `franc` and find out where your NPM global packages are, use the following commands:


```bash
npm list -g --depth 0     
## --> /Users/yamlam/.nvm/versions/node/v20.0.0/lib
## --> ├── corepack@0.17.2
## --> ├── depcheck@1.4.3
## --> ├── franc-cli@8.0.0
## --> ├── n@9.1.0
## --> └── npm@9.6.4
npm root -g      
## --> /Users/yamlam/.nvm/versions/node/v20.0.0/lib/node_modules
echo $PATH       
## --> /Users/yamlam/.nvm/versions/node/v20.0.0/bin:/Users/yamlam/opt/anaconda3/bin:/.... (truncated for brevity)
```

#### 2. Add a Custom Environment Variable in Alfred:

To include the npm PATH in Alfred, open the preferences and navigate to the “Workflow Environment Variables” section.


- Open Alfred's Preferenes.
- Go to the "Workflows" tab.
- Select your workflow.
- Click the `[+]` button on the top right and select "Configure workflow and variables".
- Under "Workflow Environment Variables", click the `[+]` button to add a new environment variable.
  - Name should be `PATH`
  - Value should be `/Users/yamlam/.nvm/versions/node/v20.0.0/bin:/usr/local/bin:/usr/bin:/bin:/usr/sbin:/sbin`


This process makes Alfred aware of the NPM global path and should allow it to use `franc-cli`.

#### 3. Conda Environment Workaround

If you're using a specific conda environment and want Alfred workflows to use it, include the path to the conda binaries in Alfred's `PATH` environment variable:


- **Name:** `PATH`
- **Value:** `/Users/yamlam/opt/anaconda3/envs/base/bin:/Users/yamlam/.nvm/versions/node/v20.0.0/bin:/usr/local/bin:/usr/bin:/bin:/usr/sbin:/sbin` 


当您看到错误信息（command not found），通常表示在你的系统的PATH中无法找到命令（在这里是mpv）。


尽管你已经在Alfred中设置了路径，mpv命令似乎在这些路径中无法找到，或者可能是关于在Alfred运行环境中如何访问和应用环境变量的问题。


以下是你可以尝试的操作：


首先，确认mpv已正确安装在您的系统中，并且在终端中正常工作。你可以通过在终端运行mpv --version或which mpv来验证。它应该返回mpv的版本或到mpv执行文件的路径。

验证完安装后，在Alfred的设置中向PATH环境变量添加从which mpv返回的路径。这样做，你需要重复添加/Users/yamlam/opt/anaconda3/envs/base/bin及其它路径至PATH的步骤。


注意：根据你的配置和系统安装，PATH变量有时可以被部分覆盖或在Alfred运行的脚本中以不同的方式处理，这可能导致这类“命令未发现”错误。完整路径调用mpv指令可能会解决这个问题。


另外，你可以在Alfred的工作流程中直接使用mpv的全路径（即 which mpv的结果）。在Alfred的工作流程中，用mpv的全路径来代替mpv指令。例如，如果which mpv的结果是/usr/local/bin/mpv，那么在Alfred的工作流程中，你需要使用/usr/local/bin/mpv来代替mpv。


尝试的最后一个操作：Alfred的shell命令功能运行在一个简洁的环境中，所以尝试改变你的"Run Script"操作为"/bin/bash"，并配合使用"{query}"作为参数，以及以下脚本；



```bash
export PATH=/usr/local/bin:$PATH
/usr/local/bin/mpv "{query}"
```


这确保了mpv对bash脚本可用。 提醒一下，你要根据which mpv的结果来替换/usr/local/bin/，如果返回的结果是其他目录的话。



# Issue: Alfred Workflow Trouble Running `mpv`

## Problem Description

Getting "command not found" error when trying to run `mpv` in an Alfred workflow, despite `mpv` working normally in the terminal. 

## Troubleshooting Steps

1. Confirm `mpv` is properly installed and works in terminal:

   ```bash
   mpv --version
   which mpv
   ```

2. Add the path returned by `which mpv` to Alfred's PATH environment variable.

3. Try using full path to `mpv` in Alfred workflow instead of just `mpv`. 

4. Set "Run Script" to `/bin/bash` with `{query}` as argument, and script:

   ```bash
   export PATH=/usr/local/bin:$PATH  
   /usr/local/bin/mpv "{query}"
   ```

5. Double check PATH isn't getting overwritten or handled differently in Alfred's environment. 

6. The issue may be related to how environment variables are accessed in Alfred. Its shell command runs in a minimal environment.
