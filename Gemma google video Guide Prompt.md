```
从视频归纳并转换若干个有趣的提问与解答, 每个解答详细逐一拆分解决该问题的所有步骤, 每个step 的关键需要提供画面的时间戳, 回答使用简体中文.
关键命令保留中英文.
若涉及命令路径, 例如 `File>Save`;
若涉及网址, 例如[网站名称](https:\\example.com)
```

```json
{
  "type": "object",
  "properties": {
    "result": {
      "type": "array",
      "items": {
        "type": "object",
        "properties": {
          "steps": {
            "type": "array",
            "items": {
              "type": "object",
              "properties": {
                "step": {
                  "type": "string"
                },
                "time": {
                  "type": "string"
                }
              }
            }
          },
          "question": {
            "type": "string"
          }
        }
      }
    }
  }
}

```