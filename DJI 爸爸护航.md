
## gyroflow 陀螺仪的视频稳定工具




DJI 模拟器 apple store 香港区
(Source:  [apple.com: 在 App Store 上的「DJI Virtual Flight」](https://apps.apple.com/tw/app/dji-virtual-flight/id1541992396))
![|200](https://is1-ssl.mzstatic.com/image/thumb/Purple221/v4/28/6e/30/286e30eb-f885-6124-6f4d-73949895a289/AppIcon-0-0-1x_U007emarketing-0-0-0-7-0-0-sRGB-0-0-0-GLES2_U002c0-512MB-85-220-0-0.png/1200x630wa.png)


(Source:  [github.com: gyroflow/gyroflow: Video stabilization using gyroscope data](https://github.com/gyroflow/gyroflow))
(Source:  [gyroflow.xyz: Gyroflow v1.5.4 is out! | Gyroflow](https://gyroflow.xyz/))
![|200](https://gyroflow.xyz/src/images/feature_image.jpg)

(Source:  [youtube.com: How to : GyroFlow Stabilization. How I stabilize RC flying videos, the easy way.](https://youtu.be/-wOgVHDim0c?t=56))
![|200](https://i.ytimg.com/vi/-wOgVHDim0c/hqdefault.jpg)


- [ ] [[Drone🚁]] How does ffmpeg handle the `dbgi`  and `djmd` data stream?  gyroflow  📅 2025-09-03 

| Keep | Bitrate   | Data                | Codec     | Disposition | Duration | Title | Lang |     |
| ---- | --------- | ------------------- | --------- | ----------- | -------- | ----- | ---- | --- |
| 1    | 89.9 Mbit | 1920x1080 119.88fps | hevc hvc1 | default     | 5:00     |       | und  |     |
| 2    | 650 kbit  | und                 | djmd      | Unchange    | 5:00     |       |      |     |
| 3    | 9.68 Mbit | und                 | dbgi      | Unchange    | 5:00     |       |      |     |
| 4    |           | 1280x720            | mjpeg     | attached    | 5:00     |       |      |     |

(Source:  [dji.com: No motion data found in Avata video-Gyroflow | DJI FORUM](https://forum.dji.com/thread-273769-1-1.html))

### Avata 视频中缺少 Gyroflow 的运动数据

确保关闭电子防抖 (Rocksteady)、FOV设置为"宽"而非"超宽"。
需要满足三个条件：无人机上的固件版本要求为 v01.01.0000 或更高、EIS关闭、FOV设置为广角。
可能需要更新无人机的固件版本。
部分文件可能出现问题，建议尝试重新导入文件。
确保SD卡插在无人机内而非遥控器。
Gyro数据有时会保存在MP4文件内。
重启飞机，尝试前述不同的飞行/录制模式。


## 备案航拍点
### UOM 轻型民用无人驾驶航空器安全操控理论培训合格证明

看视频, 民用无人驾驶航空器操作员理论合格考试系统 

```
安全操控理论培训 > 在线视频培训
```
(-- `民用无人驾驶航空器综合管理平台` [caac](https://uom.caac.gov.cn/#/main))

考试 
```
安全操控理论培训 > 在线理论考试, 
```

(-- `中华人民共和国交通运输部令（2024年第1号）　　民用无人驾驶航空器运行安全管理规则__2024年第9号国务院公报_中国政府网` [gov](https://www.gov.cn/gongbao/2024/issue_11246/202403/content_6941841.html))
(-- `轻型民用无人机驾驶航空器安全操控——理论考试多旋翼部分笔记_uom理论考试题库-CSDN博客` [csdn](https://blog.csdn.net/DDDDWJDDDD/article/details/135980212))
(-- `轻型民用无人机驾驶航空器安全操控——理论考试法规部分笔记_以下关于飞行活动申请的说法正确的是微型-CSDN博客` [csdn](https://blog.csdn.net/DDDDWJDDDD/article/details/135979705))




合格证截图

程序里面微信小程序AOPA无人机合格证, 
点击无人机驾驶执照 增发 AOPA合格证

理论培训合格证是可以 



### AOPA

- 小一寸白底
- UOM 轻型民用无人驾驶航空器安全操控理论培训合格证明

carllllllllx@gmail.com
广州市, 白云区, 桂花路89号, 702房
510403

林昕
15915874093
440103198309163637

林青仪
13824432943
440103195306063610



## 手册 - 控制器

"准星" 指界面中圆圈.
### Lock 按键  
起飞：`双击` +  `长按`, 双击(启动飞行器电机) ; 长按(飞行器自动起飞至 1.2m并悬停)。  
降落：`长按`，飞行器自动降落至地面并停止电机。  
切换：`短按` ,
- 当飞机处于飞行姿态时, 短按可使飞机与控制器的连接断开. 飞行器悬停切换到暂停状态, 遥控器只能操作菜单调节参数。
- 当飞机处于暂停姿态时, 短按可使飞机与控制器的连接恢复. 飞行器悬停切换到飞行状态, 遥控器可以干预飞机的飞行姿态。
- 当飞机受驾驶员或强风等因素影响, 导致飞机准星偏移时, 通过上述 "切换" ( `短按` + `短按`)可以矫正飞行准星. 
### 摇杆  
`上下bo'dong动`摇杆，可控制飞行器垂直上升和下降。  
`左右拨动动`摇杆，控制飞行器左右平移。  

### 油门扳机  

当飞机处于飞行姿态时, 
- `按压`油门扳机, 控制飞行器前飞.飞行器向飞行眼镜准星的位置前进。
- `外推`油门扳机, 控制飞行器后退飞行.   
- 松开油门扳机后，飞行器停止前进或后退。

当飞机处于暂停姿态时, 
- `按压`油门扳机, 点击界面菜单中的按钮。
- `外推`油门扳机, 退出界面菜单中的菜单。

### 快门

`长按` , 切换摄像机 / 相机
`短按` , 拍照 / 开始或停止拍摄录像


### 模式/返航

`长按`, "H": 返航
`短按`, "M": 模式切换(运动模式 / 普通模式)

