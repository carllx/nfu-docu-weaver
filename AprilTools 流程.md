安装AprilTools
[Github, Document on AprilTools](https://github.com/thegoodhen/AprilTools)

[issues: 关于多标签跟踪Multiple tags tracking ](https://github.com/thegoodhen/AprilTools/issues/5#issuecomment-1026287280) 在编译版本


Video 转换成序列帧(sequence)   
[HOW FFMPEG- Convert video to images](https://stackoverflow.com/questions/40088222/ffmpeg-convert-video-to-images)
```bash
all
ffmpeg -i Forest.mp4 -vsync 0 forest/jpegs%06d.jpg

Every minute
ffmpeg -i test.mp4 -vf fps=1/60 thumb%04d.png
```

