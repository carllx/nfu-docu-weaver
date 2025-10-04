## 在Unity场景中添加一个第三人称角色控制器

![|200](https://i.ytimg.com/vi/uSZUgs8UGEs/hqdefault.jpg)
参考: (Source:  [youtube.com: Creating Your FIRST LEVEL in Unity with ProBuilder!](https://youtu.be/uSZUgs8UGEs?t=759)) [12:43](https://www.youtube.com/watch?v=undefined&t=763s) 

---

## 1. 从Unity资源商店获取控制器
   - 访问Unity资源商店
   - 搜索并选择"Third Person Character Controller"
   - 点击获取按钮
![](https://i.imgur.com/Ou64ySK.gif)
---

## 2. 在Unity中导入资源包
   - 返回Unity编辑器
   - 打开`Window > Package Manager`
   - 在"Assets"下找到"Starter Assets - Third Person Character Controller"
   - 点击"Import"按钮导入所有文件

---

## 3. 启用新的输入系统
   - 如果出现关于新输入系统包的警告,点击"Yes"以启用后端
   - Unity将重新启动


---

## 4. 将控制器添加到场景
   - 在项目窗口中,导航到`Starter Assets > Third Person Controller > Prefabs `
   - 找到包含角色模型的嵌套父级装甲包预制体 `NestedParentArmature_Unpack`
   - 将预制体拖拽到场景中


---

## 5. 调整角色位置
   - 使用Position功能调整角色,使其位于地面之上


---

## 6. 删除多余摄像机
   - 删除场景中原有的摄像机,只保留控制器对象中的摄像机

---

## 7. 测试场景
   - 点击播放按钮运行场景
   - 使用键盘控制角色在场景中移动
   - 使用空格键使角色跳跃
---

注意事项: 
- 确保正确设置角色的Position(位置), Size (大小)
- 台阶可能对于角色来说有点大,可能需要调整



