(-- `Sources - Dataview` [github](https://blacksmithgu.github.io/obsidian-dataview/reference/sources/#folders)) 
[[DataviewGPTs Prompt]]



## Task

输出table 但无法编辑例如 priority, status  Task 属性
```javascript |dataviewjs
const tasks = dv.pages()
  .where(p => p.file.tasks)
  .flatMap(p => p.file.tasks.map(task => (
    // p.file.name,
    // task.text,
    // task.priority? task.priority:'-',
    // task.scheduled? task.scheduled:'-',
    task
  )))
  // .filter(taskObj => !taskObj.task.priority);


console.log(tasks)
// && !taskObj.task.due && !taskObj.task.start && !taskObj.task.status
// dv.table(["notetitle",  "txt", "priority", "scheduled" ], tasks);

```


点击链接跳转到特定位置, 以 task为例, 

```json
// task.values[n].position
{
    "start": {
        "line": 20,
        "col": 1,
        "offset": 1095
    },
    "end": {
        "line": 20,
        "col": 90,
        "offset": 1184
    }
}
```

参考: (-- `obsidian-remember-cursor-position/main.ts` [github](https://github.com/dy-sh/obsidian-remember-cursor-position/blob/a9a2179066c86b9617fe82b46f38d2a101b1ba3a/main.ts#L255C5-L255C11))
![|200](https://opengraph.githubassets.com/db89f90bc6f6020cbee4a8d92682d81c12815dd4370aa5465ad53f90ead0fd18/dy-sh/obsidian-remember-cursor-position)
```javascript
this.getEditor().setSelection(state.cursor.from, state.cursor.to);
```
[pp](Papers%20Tasks.md#研究计划)
[[Planning.md^]]