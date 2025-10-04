Task 
- **TempPathIssue**, ${ProjectRoot} 路径问题, 以及 temp 处理文件夹架构混乱
	- 修正 .env , 以及 yaml 文件 的 config 
- **DeleteTempDone**, 完成转换并合并成 final 视频后, 应自动删除断点续转的 segments Logs , 执行新视频转换时, 断点续转的 segments Logs , 旧 log 因为未删除导致无法继续之心新视频转换.
- **BatchProcessing**, 批量转换文件夹内视频, 批量处理应该复用`单文件 lib265x转换` 命令处理过程一致, args 可以通过 XXX.yaml 上定义好.
- **newStructureCleanUp**, NewStructure 以及Legacy 文件 CleanUp
- 梳理出其他工作流脚本
- **MultipleLocalComputers**, 多台机局域网处理 segments



## 单文件lib265x转换
```bash

cd C:\Users\carll\Desktop\app_VR\new_structure && python src/main.py split-encode-merge `
  --input-file "D:\Downloads\VR\04_HEVC_Conversion_Queue\04\Nakajou Rino - KIWVR433.mp4" `
  --output-file "D:\Downloads\VR\output\Nakajou Rino - KIWVR433_final_x265.mp4" `
  --segment-duration 300 `
  --encoder libx265 `
  --quality high

```


## 批量处理
### 批量高质量存档
```bash
python batch_process.py \
    --input-dir "input_folder" \
    --output-dir "output_folder" \
    --encoder libx265 \
    --quality high \
    --max-workers 2 \
    --parallel-files 1

```

### 批量快速处理
```bash
python batch_process.py \
    --input-dir "input_folder" \
    --output-dir "output_folder" \
    --encoder hevc_nvenc \
    --quality medium \
    --max-workers 2 \
    --parallel-files 1
```


### 关键要点

编码器选择:
libx265: 最高质量，适合存档
hevc_nvenc: 快速处理，适合批量转换

并发控制:
max_workers: 每个文件的编码并发数（1-2）
parallel_files: 同时处理的文件数（1=稳定）

质量平衡:
high: 推荐质量
medium: 快速处理
ultra: 专业存档




---

```
python batch_process.py \
    --input-dir "D:\Downloads\VR\04_HEVC_Conversion_Queue" \
    --output-dir "D:\Downloads\VR\output" \
    --encoder libx265 \
    --quality high \
	--max-workers 2 \
    --parallel-files 1 \
    --skip-split-encode
```



```
python src/main.py split-encode-merge \
    --input-file "input.mp4" \
    --output-file "output.mp4" \
    --encoder libx265 \
    --quality high \
    --skip-split-encode
```