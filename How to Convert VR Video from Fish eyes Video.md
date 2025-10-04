
SLR 200° FOV Fisheye
Watch in SLR app or [DeoVR player](https://deovr.com/app)
(Source:  [deovr.com: Guide: iPhone15 stereo camera - how to record spatial & stereoscopic video | DeoVR](https://deovr.com/blog/90-iphone15-stereo-camera))
![|200](https://cdn-vr.deovr.com/blog/images/15950-blobid0.jpg)

![](https://cdne-pics.youjizz.com/b/5/c/b5c0ece12b10fea00d70d88741007c8b1643713442-2048-1080-2970-h264.mp4-9.jpg)

How to convert from slr fisheye to 180* normal VR: 
convert in the folder and rename it to slr1.  If the file is 200* fisheye use this prompt: 




```bash
ffmpeg -i C:\converted\slr1.mp4 -vf v360=dfisheye:e:ih_fov=200:iv_fov=200:h_fov=360:v_fov=180:yaw=-90 C:\converted\slr2.mp4
```

- If the file is 190* fisheye, just change the ih_fov and iv_fov part to 190 instead of 200, it should look like this: 

```bash
ffmpeg -i C:\converted\slr1.mp4 -vf v360=dfisheye:e:ih_fov=190:iv_fov=190:h_fov=360:v_fov=180:yaw=-90 C:\converted\slr2.mp4 
```

- Wait for file to finish converting, the converted file output is named slr2 
- You can change input and output location and file name, just make sure to change them in the prompt and include a filename for output like this: 

```bash
ffmpeg -i (input location) -vf v360=dfisheye:e:ih_fov=200:iv_fov=200:h_fov=360:v_fov=180:yaw=-90 (output location) 
```

by [jewber123](https://www.eporner.com/profile/jewber123/ "Author")