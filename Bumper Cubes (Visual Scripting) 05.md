## Reference

[[Source-Make a Game with Visual Scripting]]

---




## E04 过场动画

创建关卡完成时的过场动画效果


---


## 1 创建  UI Complete
1. 在 level base 中重用现有 Canvas
2. 重命名为 UI coin
3. 添加新的 UI image 组件作为关卡完成界面

![bg fit left:50% vertical](https://i.imgur.com/7tgSaKe.webp)


---

1. 添加文本组件
- 输入 level complete 文字
- 选择 Robot Bold 字体
- 设置高度为 100，宽度为 800
- 字体大小设为 80
- 居中对齐

---

## 2. 创建过度动画

1. 打开 Animation 窗口
2. 创建新动画，命名为 es. level complete animation

![bg fit left:50% vertical](https://i.imgur.com/P7bKADy.webp)

---



设置动画
   - Background.es ：
     * 起始时设置 alpha 为 0
     * 1秒后设置 alpha 为最大值
   - Text.es. ：
     * 起始时设置透明度为 0
     * 在背景出现后显示

![bg fit left:50% vertical](https://i.imgur.com/H95jPjd.webp)



---


## 3. 触发 'complete' UI 关卡切换动画


通过 `Active` UI 切换显示

![bg fit left:50% vertical](https://i.imgur.com/KOPYh7b.webp)


---


### 在 level base (Prefab)中添加变量 供 Player 访问
   - 进入 Level Base 对象
   - 在 `Game Object Variables` 中添加新变量 level complete
   - 连接到相应的界面元素
   -   将变量类型设为 Game Object
   - 连接 level complete 对象到该变量
![bg fit left:50% vertical](https://i.imgur.com/pUAfsIa.webp)
![bg fit left:50% vertical](https://i.imgur.com/n8Pn2kG.webp)

 
 
---



### 配置 Player 对象逻辑
   - 打开 Player 对象
   - 使用 `Game Object Find By Name` 节点查找 Level Base
   - 使用 `Get Object Variable` 节点获取 level complete 变量
   - 添加 `Game Object Set Active` 节点并设置为 true
   - 连接 level complete 对象作为激活目标

![bg fit left:50% vertical](https://i.imgur.com/XESTgRx.webp)

(Source:  [youtube.com: How to FIND the CHILD of a GameObject THROUGH SCRIPT in Unity - GetChild function](https://youtu.be/O_TtOLdbnL4?t=92)[youtube playlist](https://www.youtube.com/watch?v=qcI3tFmZ7sU&list=PLkYLdQEQ__ti94UUicgYPWPy3VEypFj98))


---

  设置场景切换延时
   - 添加 Timer 节点
   - 设置延时时间为 3 秒
   - 连接 Load Next Scene 节点到 Timer 完成事件


![bg fit left:50% vertical](https://i.imgur.com/9srqvUp.webp)




---


4. 调整动画设置
   - 在 Assets 中找到动画文件
   - **关闭 Loop Time 选项**
   - 确保动画只播放一次

![bg fit left:50% vertical](https://i.imgur.com/Hspwn80.webp)



---

## END

## 最终效果
- 完成关卡后显示淡入动画
- 背景先淡入
- 文字随后淡入
- 3 秒后自动进入下一关
