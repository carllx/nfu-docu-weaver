```python
bpy.ops.object.duplicate_move(OBJECT_OT_duplicate={"linked":True})
context = bpy.context
for ob in context.selected_objects:

	ob.animation_data_clear()

bpy.context.scene.objects["Suzanne"].select_set(True)

context.scene.frame_set(C.scene.frame_current+2)
```