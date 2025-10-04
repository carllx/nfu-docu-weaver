mediaPath="/Volumes/T7-carllx2T/PROJECTS/VR/Render/hevc"
completedPath="/Volumes/T7-carllx2T/PROJECTS/VR/Render/hevc/Completed"

# 添加参数处理
encoder="hevc_videotoolbox"  # 默认使用 hevc_videotoolbox
preset="medium"
reservedCores=0
threads=$(( $(sysctl -n hw.ncpu) - reservedCores ))
threads=$(( threads > 0 ? threads : 1 ))

while getopts "e:p:r:" opt; do
  case $opt in
    e)
      if [[ "$OPTARG" == "libx265" || "$OPTARG" == "hevc_videotoolbox" ]]; then
        encoder="$OPTARG"
      else
        echo "无效的编码器选项。使用 'libx265' 或 'hevc_videotoolbox'。"
        exit 1
      fi
      ;;
    p)
      preset="$OPTARG"
      ;;
    r)
      reservedCores="$OPTARG"
      threads=$(( $(sysctl -n hw.ncpu) - reservedCores ))
      threads=$(( threads > 0 ? threads : 1 ))
      ;;
    *)
      echo "用法: $0 [-e encoder] [-p preset] [-r reservedCores]"
      exit 1
      ;;
  esac
done

# 检查必要工具
if ! command -v ffprobe &> /dev/null || ! command -v ffmpeg &> /dev/null; then
    echo "错误：需要安装 ffmpeg (包含 ffprobe)"
    exit 1
fi

for filePath in "$mediaPath"/*.mp4; do
  # 检查文件是否存在（处理没有匹配文件的情况）
  [ -f "$filePath" ] || continue
  
  fileName=$(basename "$filePath")
  echo "处理文件: $fileName"
  
  # 使用 ffprobe 获取视频信息
  videoInfo=$(ffprobe -v quiet -print_format json -show_format -show_streams "$filePath")
  
  # 提取视频流信息
  width=$(echo "$videoInfo" | jq -r '.streams[] | select(.codec_type=="video") | .width')
  height=$(echo "$videoInfo" | jq -r '.streams[] | select(.codec_type=="video") | .height')
  videoCodec=$(echo "$videoInfo" | jq -r '.streams[] | select(.codec_type=="video") | .codec_name')
  pixFmt=$(echo "$videoInfo" | jq -r '.streams[] | select(.codec_type=="video") | .pix_fmt')
  bitrate=$(echo "$videoInfo" | jq -r '.streams[] | select(.codec_type=="video") | .bit_rate')
  
  # 如果视频流没有比特率，尝试从格式信息获取
  if [[ -z "$bitrate" || "$bitrate" == "null" ]]; then
    bitrate=$(echo "$videoInfo" | jq -r '.format.bit_rate')
  fi
  
  # 检查是否为10位色深
  is10Bit=false
  if [[ "$pixFmt" == *"10le"* || "$pixFmt" == *"10be"* ]]; then
    is10Bit=true
  fi
  
  echo "视频编码格式: $videoCodec"
  echo "分辨率: ${width}x${height}"
  echo "像素格式: $pixFmt ($(if $is10Bit; then echo "10-bit"; else echo "8-bit"; fi))"
  echo "比特率: $(( bitrate / 1000000 ))Mbps"
  
  # 动态计算CRF值
  if $is10Bit; then
    baseCRF=31.0
  else
    baseCRF=24.0
  fi
  
  # 基于分辨率调整
  if (( width >= 4320 )); then
    if $is10Bit; then
      baseCRF=$(echo "$baseCRF - 6.0" | bc)
    else
      baseCRF=$(echo "$baseCRF - 6.0" | bc)
    fi
  elif (( width >= 4096 )); then
    if $is10Bit; then
      baseCRF=$(echo "$baseCRF - 5.0" | bc)
    else
      baseCRF=$(echo "$baseCRF - 4.0" | bc)
    fi
  elif (( width >= 3840 )); then
    if $is10Bit; then
      baseCRF=$(echo "$baseCRF - 4.0" | bc)
    else
      baseCRF=$(echo "$baseCRF - 2.0" | bc)
    fi
  elif (( width >= 2560 )); then
    if $is10Bit; then
      baseCRF=$(echo "$baseCRF - 3.0" | bc)
    else
      baseCRF=$(echo "$baseCRF - 0.0" | bc)
    fi
  fi
  
  # 基于码率调整
  bitrateGB=$(echo "scale=10; $bitrate / 1000000000.0" | bc)
  if (( $(echo "$bitrateGB > 0.1" | bc -l) )); then
    crfReduction=$(echo "scale=2; $bitrateGB * 2" | bc)
    maxReduction=4.0
    if (( $(echo "$crfReduction > $maxReduction" | bc -l) )); then
      crfReduction=$maxReduction
    fi
    baseCRF=$(echo "$baseCRF - $crfReduction" | bc)
  fi
  
  # 确保CRF在合理范围内
  if $is10Bit; then
    minCRF=22.0
    maxCRF=34.0
  else
    minCRF=16.0
    maxCRF=28.0
  fi
  
  if (( $(echo "$baseCRF < $minCRF" | bc -l) )); then
    crfValue=$minCRF
  elif (( $(echo "$baseCRF > $maxCRF" | bc -l) )); then
    crfValue=$maxCRF
  else
    crfValue=$baseCRF
  fi
  
  # 取整
  crfValue=$(printf "%.0f" $crfValue)
  
  echo "CRF 计算详情:"
  echo "- 分辨率: ${width}x${height}"
  echo "- 码率: $(( bitrate / 1000000 ))Mbps"
  echo "- 最终 CRF 值: $crfValue"
  
  # 构建输出文件名
  mediaName="${fileName%.mp4}"
  resolutionSuffix=""
  ffmpegCommand="ffmpeg -hwaccel videotoolbox -i \"$filePath\""  # 修复重复的ffmpeg命令
  
  # 判断是否需要缩放
  if (( height > 2160 )); then
    newWidth=$(( width * 2160 / height ))
    ffmpegCommand+=" -vf scale=${newWidth}:2160:flags=lanczos"
    resolutionSuffix=" - (2160p)"
  fi
  
  # 根据选择的编码器设置 ffmpegCommand
  if [[ "$encoder" == "libx265" ]]; then
    encoderProfile=$(if $is10Bit; then echo "main10"; else echo "main"; fi)
    pixFmtOption=$(if $is10Bit; then echo "yuv420p10le"; else echo "yuv420p"; fi)
    
    ffmpegCommand+=" -c:v libx265 -crf ${crfValue} -preset ${preset} -threads ${threads}"
    ffmpegCommand+=" -profile:v ${encoderProfile} -pix_fmt ${pixFmtOption}"
    ffmpegCommand+=" -x265-params keyint=120:min-keyint=120:scenecut=0:rc-lookahead=48"
    outputFileName="${mediaName}-(HEVC_${crfValue}_libx265)${resolutionSuffix}.mp4"
  else
    # 修复嵌套结构开始
    # 基于源视频特性动态设置参数
    if $is10Bit; then
        profile="main10"
        pixFmt="p010le"
        qValue=15  # 10-bit素材需要更低量化值
    else
        profile="main"
        pixFmt="nv12"
        qValue=20  # 8-bit素材可适当提高量化值
    fi

    # 动态计算目标码率（源视频码率的70%）
    targetBitrate=$(( bitrate * 70 / 100000 ))
    maxBitrate=$(( bitrate * 120 / 100000 ))
    
    ffmpegCommand+=" -c:v hevc_videotoolbox"
    ffmpegCommand+=" -q:v $qValue"  # 动态量化参数
    ffmpegCommand+=" -b:v ${targetBitrate}k"  # 目标码率
    ffmpegCommand+=" -maxrate ${maxBitrate}k"  # 最大瞬时码率
    ffmpegCommand+=" -profile:v $profile"
    ffmpegCommand+=" -pix_fmt $pixFmt"
    ffmpegCommand+=" -tag:v hvc1"
    
    # 根据分辨率调整编码预设
    if (( width >= 3840 )); then
        ffmpegCommand+=" -quality high"  # 4K及以上使用高质量预设
    else
        ffmpegCommand+=" -quality medium"
    fi
    
    # 当需要缩放时调整滤镜链顺序
    if (( height > 2160 )); then
        ffmpegCommand+=" -vf scale=${newWidth}:2160:flags=lanczos,format=${pixFmt}"
    fi
    
    outputFileName="${mediaName}-(HEVC_videotoolbox)${resolutionSuffix}.mp4"
    # 修复嵌套结构结束
  fi
  
  # 重新编码音频以降低码率
  # 音频编码还原为旧版本配置
  ffmpegCommand+=" -c:a libmp3lame -b:a 128k"  # 恢复MP3编码
  ffmpegCommand+=" -metadata stereo_mode=left_right -movflags +faststart"
  
  outputPath="${filePath%/*}/$outputFileName"
  
  ffmpegCommand+=" \"$outputPath\""
  echo "执行命令: $ffmpegCommand"
  
  # 使用eval执行命令
  eval "$ffmpegCommand"
  echo "处理完成: $filePath -> $outputPath"
  
  # 可选：移动到完成文件夹
  # if [[ -d "$completedPath" ]]; then
  #   mv "$filePath" "$completedPath/"
  #   echo "已移动原文件到完成文件夹"
  # fi
done

echo "所有文件处理完成"

# 使用说明:
# 1. 如果需要更高质量，可以使用 libx265 编码器:
#    bash '/path/to/toHEVC_MacOS.sh' -e libx265
#
# 2. 使用 hevc_videotoolbox (默认):
#    bash '/path/to/toHEVC_MacOS.sh' -e hevc_videotoolbox
#
# 3. 设置预设和保留核心数:
#    bash '/path/to/toHEVC_MacOS.sh' -e libx265 -p slow -r 2

# /Users/yamlam/Documents/obsdiannote/Scripts/Alfred.alfredpreferences/workflows/user.workflow.F1A00622-10C3-4F5B-BE6E-1B8FCCB91AD0/app/toHEVC_MacOS.sh -e hevc_videotoolbox -q:v 15 -b:v 20M