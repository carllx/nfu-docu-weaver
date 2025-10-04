




根据，(Source: [reddit.com: Recreating Playtronica Touchme Instrument : r/arduino](https://www.reddit.com/r/arduino/comments/1e412se/recreating_playtronica_touchme_instrument/))
重新创建Playtronica Touchme乐器的几种可能的实现方案及其细节：

1.  **电阻式传感器 (FSR)**：FSR可以检测电阻/电导率的变化，适合模仿Touchme的功能 。电阻式传感器可以提供更细微的触摸变化 。 可以通过鳄鱼夹连接到水体，检测水量的变化, 因为它测量的是阻抗变化 。

2.  **电容式传感器**: 也可以使用电容式传感器, 但是因为水中含有离子, 电容式传感器可能持续有信号 。  (电容式传感器对水中的离子敏感，可能始终注册信号).

3.  **For Makey Makey**: Makey Makey是一个基于电导率的声音项目 。它可能已经包含了MIDI集成，可以直接使用，省去开发的麻烦 。Makey Makey在STEM社区中应用广泛，并且历史悠久, 很有可能已经有人做了MIDI集成的功能 。可以通过 (Source: [taobao.com: FOR Makey Makey主控板兼容主控板全套到手即用送数据线鳄鱼夹线-淘宝网](https://item.taobao.com/item.htm?abbucket=20&id=666849796079&ns=1&pisk=gjUse-A0E-UU6tX0xRfEOG0FhKufc67yCIGYZSLwMV3tHkNuhA5cjVrIhJeIBF5GjmHbIVn0bxkZhqN0F6WPzaPgsq0OUT7ytLRCn4Yx6xpqvWhmlfQ18M5Tsq0AhB8A4aNgeUSzFhhx96GqgFdTHcHKJfDKMh3YHvnKwbJtk-3AOvhrwKdt6cLKvfkpDnhvkXQKwftxHFKOOWHn6qHYHch1VFGF1vV16tOxUhQAD5DBkEUI9OD81nYm9yc_fYNtjp9Qifise5HdE-1z0mwsfy76EfZLNJc_naYiWmZT2VUfFNgLZkytO-BWcvE7Sriz5TtoBPD0FVECpFgxWbNj4k5vVvrYtyiQ5gRmtPPYS0uRrdH4Y7ajGrXcR8NTCun8WdsrSUk7ijxXO0YjOY5COnxD2gVOumAXKuottXWVO6tzichnOXfCOnftXXcUR61B4LC..&priceTId=2147804317410945066273470eb3e9&skuId=5103162509775&spm=a21n57.1.hoverItem.2&utparam=%7B%22aplus_abtest%22%3A%2282372c3c471c3f6a983ed0d78a6d3efa%22%7D&xxc=taobaoSearch)) 购买.
4. 
![bg fit left:50% vertical](https://i.imgur.com/D6w9IWF.webp)
