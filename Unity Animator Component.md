
![bg fit left:50% vertical](https://i.imgur.com/mtAMuKc.webp)



## Animator Component
Unity和其他程序都有自己设置动画的流程, 
动画Clip包含实际的动画数据, Animator Component负责播放动画,而Animator Controller则控制动画Clip之间的转换逻辑。

- Animator组件是附加在游戏对象上的组件,用于播放和控制动画。它可以引用一个Animator Controller,并管理动画Clip的播放。

### Animation 'Clip'

Animation Clip是存储动画数据的容器,包括位置、旋转和缩放等属性随时间的变化。
### Animator Controller
- Animator Controller是一个状态机,用于组织和管理一组动画Clip。它定义了动画Clip之间的转换逻辑和条件。

