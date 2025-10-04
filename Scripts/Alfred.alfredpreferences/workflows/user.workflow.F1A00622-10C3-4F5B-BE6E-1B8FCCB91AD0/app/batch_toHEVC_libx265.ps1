# .\batch_toHEVC_libx265.ps1

param(
    [Parameter(Mandatory=$false)]
    [string]$mediaPath = "G:\\Media\\VR\\VR_Video_Processing\\04_HEVC_Conversion_Queue",
    [Parameter(Mandatory=$false)]
    [int]$reservedCores = 0,  # 定义保留给系统的核心数
    [Parameter(Mandatory=$false)]
    [int]$threads = [Math]::Max(1, [Environment]::ProcessorCount - $reservedCores),  # 动态计算可用线程数
    [Parameter(Mandatory=$false)]
    [string]$preset = "medium",  # 更慢的预设带来更好压缩率
    [Parameter(Mandatory=$false)]
    [int]$maxMuxingQueueSize = 4096
)

# 检查文件夹是否存在
if (!(Test-Path $mediaPath)) {
    Write-Error "错误：指定的文件夹不存在: $mediaPath"
    exit 1
}

# 检查必要工具
if (!(Get-Command ffprobe -ErrorAction SilentlyContinue) -or !(Get-Command ffmpeg -ErrorAction SilentlyContinue)) {
    Write-Error "错误：需要安装 ffmpeg (包含 ffprobe)"
    exit 1
}

Get-ChildItem $mediaPath -Filter *.mp4 | ForEach-Object {
    $mediaName = $_.Name
    $fullPath = Join-Path $mediaPath $mediaName

    # 使用 ffprobe 获取视频信息
    $videoInfo = ffprobe -i $fullPath -show_format -show_streams -v quiet -print_format json | ConvertFrom-Json
    $videoStream = $videoInfo.streams | Where-Object { $_.codec_type -eq "video" } | Select-Object -First 1

    # 获取视频编码格式
    $videoCodec = $videoStream.codec_name
    Write-Host "视频编码格式: $videoCodec"

    # 基于视频特征动态计算 CRF 值
    $width = $videoStream.width
    $height = $videoStream.height
    $bitrate = [int]$videoStream.bit_rate
    if ($null -eq $bitrate -or $bitrate -eq 0) {
        $bitrate = [int]$videoInfo.format.bit_rate
    }
    # 获取视频位深度信息
    $pixFmt = $videoStream.pix_fmt
    $is10Bit = $pixFmt -match "10le" -or $pixFmt -match "10be"
    Write-Host "像素格式: $pixFmt ($(if ($is10Bit) { "10-bit" } else { "8-bit" }))"
    
    # 动态 CRF 计算逻辑
    $baseCRF = if ($is10Bit) { 31.0 } else { 24.0 }  # 根据位深度设置基准值
    
    # 1. 基于分辨率调整
    if ($width -ge 4320) {
        $baseCRF -= if ($is10Bit) { 6.0 } else { 6.0 }  # 8K 视频基准值
    } elseif ($width -ge 4096) {
        $baseCRF -= if ($is10Bit) { 5.0 } else { 4.0 }  # 4K DCI 基准值
    } elseif ($width -ge 3840) {
        $baseCRF -= if ($is10Bit) { 4.0 } else { 2.0 }  # 4K UHD 基准值
    } elseif ($width -ge 2560) {
        $baseCRF -= if ($is10Bit) { 3.0 } else { 0.0 }  # 2K/QHD 基准值
    }
    
    # 2. 基于码率调整
    $bitrateGB = $bitrate / 1000000000.0  # 转换为 Gbps
    if ($bitrateGB -gt 0.1) {
        # 高码率视频降低 CRF，但限制最大调整幅度
        $crfReduction = [Math]::Min(4.0, $bitrateGB * 2)
        $baseCRF -= $crfReduction
    }
    
    # 3. 基于视频帧率调整
    $frameRate = [double]($videoStream.r_frame_rate -split '/' | ForEach-Object { [double]$_ } | Measure-Object -Average).Average
    if ($frameRate -gt 50) {
        $baseCRF -= 1.0  # 高帧率视频稍微降低 CRF
    }
    
    # 确保 CRF 在合理范围内（根据位深度调整范围）
    $minCRF = if ($is10Bit) { 22.0 } else { 16.0 }
    $maxCRF = if ($is10Bit) { 34.0 } else { 28.0 }
    $CRF = [Math]::Max($minCRF, [Math]::Min($maxCRF, $baseCRF))
    
    # 更新输出配置文件
    $encoderProfile = if ($is10Bit) { "main10" } else { "main" }
    
    # 详细输出调整信息
    Write-Host "CRF 计算详情:"
    Write-Host "- 分辨率: ${width}x${height}"
    Write-Host "- 码率: $($bitrate/1000000)Mbps"
    Write-Host "- 帧率: $frameRate fps"
    Write-Host "- 最终 CRF 值: $CRF"
    # 构建输出文件名
    $fileNameWithoutExt = [System.IO.Path]::GetFileNameWithoutExtension($mediaName)
    $fileExt = [System.IO.Path]::GetExtension($mediaName)
    $outputPath = Join-Path $mediaPath "$fileNameWithoutExt - (HEVC_$CRF)$resolutionSuffix$fileExt"
    Write-Host "正在处理: $mediaName"

    try {
        # 判断是否需要缩放
        if ($width -gt 4320) {
            $scaleArgs = @("-vf", "scale=min(4320\,iw):-2")
            $resolutionSuffix = " - (4320p)"
        } else {
            $scaleArgs = @()
            $resolutionSuffix = ""
        }
    
        # Update output path to include resolution suffix
        $outputPath = Join-Path $mediaPath "$fileNameWithoutExt - (HEVC_$CRF)$resolutionSuffix$fileExt"
    
        # FFmpeg参数设置
        $ffmpegArgs = @(
            "-i", $fullPath
        ) + $scaleArgs + @(
            "-threads", $threads,
            "-c:v", "libx265",
            "-max_muxing_queue_size", $maxMuxingQueueSize,
            "-preset", $preset,
            "-crf", $CRF,
            "-profile:v", $encoderProfile,  # Updated to use new variable name
            "-x265-params", "keyint=120:min-keyint=120:scenecut=0:rc-lookahead=48",
            "-pix_fmt", $(if ($is10Bit) { "yuv420p10le" } else { "yuv420p" }),
            "-movflags", "+faststart",
            "-metadata", "stereo_mode=left_right",
            "-c:a", "aac",
            "-stats",
            "-progress", "pipe:1",
            "-f", "mp4",
            "-y", "$outputPath.mp4"
        )

        Write-Host "使用 libx265 编码器和优化参数"
        Write-Host "开始转码，使用 CRF 值：$CRF"
        Write-Host "是否需要 Scale: $width => $scaleArgs" # 打印是否需要缩放的信息
        Write-Host "Preset: $preset"
        Write-Host "Threads: $threads"
        Write-Host "CRF值: $CRF"

        & ffmpeg $ffmpegArgs
        Write-Host "转换完成: $outputPath"
    }
    catch {
        Write-Host "处理文件时出错: $mediaName"
        Write-Error "错误信息: $($_.Exception.Message)"
    }
}


