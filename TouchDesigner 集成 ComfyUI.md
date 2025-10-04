#### 视频总结: ComfyUI (生成式 AI) 与 TouchDesigner 的结合：详细教程
#### TL;DR
本视频教程展示如何结合 TouchDesigner 和 ComfyUI 创建音频驱动的生成性艺术作品，包括音频分析、可视化以及 Stable Diffusion 的视频生成。

#### 关键点
- **音频分析模块**：在 TouchDesigner 中通过音频分析甲板处理分轨音频（例如低音、军鼓）数据，提取关键数据点用于驱动视觉效果， 并通过 Python 脚本优化数据分配。(音频分析模块: 通过对音频信号的分轨处理和数据提取，将声音信息转化为可用于视觉生成的参数。)
- **视觉化艺术模块**：使用混合技术将每个音轨生成的视觉效果无缝结合，动态视觉效果包括音频驱动的线段实例化、镜像、反馈及移动噪声位移。
- **生成视觉增强**：通过深度与边缘图（Control Nets）将 TouchDesigner 输出整合到 ComfyUI 中，从而引导 Stable Diffusion 增强生成效果。
- **Animate Diff 平滑过渡**：利用 Animate Diff 保障视频生成的帧间一致性。
- **渲染过程优化**：采用短片段测试生成效果，并以 512x512 分辨率生成视频后再进行放大，平衡性能与质量。
- **调节生成风格**：通过调整去噪强度（denoiser strength）在保留原始效果与引入生成艺术元素之间取得平衡。

Sources:
https://www.youtube.com/watch?v=V-1NGm-4r1w
