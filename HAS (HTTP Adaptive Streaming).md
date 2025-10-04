是[[媒体流协议]]的一种,
HTTP 自适应流是一种在线流媒体技术，它可以使流媒体内容在被播放时自动调整清晰度和带宽使用情况。它使用 HTTP 协议传输媒体数据，并通过使用多个不同的视频清晰度版本来实现自适应。

例如，假设你在使用 HTTP 自适应流播放视频。如果你的互联网连接速度较快，那么视频播放器可能会自动选择较高的清晰度版本，以便提供更好的视觉效果。如果你的互联网连接速度较慢，那么视频播放器可能会自动选择较低的清晰度版本，以保证流畅的播放体验。

要在网页前端使用 HTTP 自适应流播放视频，你可以使用 HTML5 视频元素 `<video>`。

例如，假设你有一个包含多个视频清晰度版本的视频文件，并且想要在网页中使用 HTTP 自适应流播放它。你可以使用以下代码来实现：

```html
<video controls>
  <source src="high-quality.mp4" type="video/mp4" data-res="high">
  <source src="medium-quality.mp4" type="video/mp4" data-res="medium">
  <source src="low-quality.mp4" type="video/mp4" data-res="low">
</video>

```

在这里，每个 `<source>` 元素都包含一个不同的视频文件，并使用 `data-res` 属性指定清晰度。浏览器会根据用户的网络连接情况自动选择最合适的视频播放。

注意：要使用 HTTP 自适应流，你的视频文件必须使用特定的媒体格式，例如 MP4、WebM 或者 HLS（HTTP Live Streaming）。此外，你的服务器也必须支持 HTTP 自适应流。