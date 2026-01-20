这是一份为您提炼并优化的 **MVP（最小可行性产品）开发设计文档**。

这份文档将原本复杂的“自由坐标”与“逻辑排序”进行了融合，采用**“基于网格序列的权重评分”**路径，这是目前实现您需求最稳健、最高效的方案。

---

# 互动式视觉评分系统 (Visual Grading Canvas) - MVP 开发文档

## 1. 项目概述

本系统旨在改变传统的列表式评分，通过**二维画布拖拽**的形式，让教师能够直观地通过“视觉排序”完成对学生作品（图片/视频）的等级评估。

## 2. 核心业务逻辑（提炼版）

- **坐标即分数：** 画布按 Z 字型（从左到右，从上到下）排列。左上角为最高分区间，右下角为最低分区间。
    
- **自动重排（Reflow）：** 当作品 A 插入 B、C 之间时，系统自动将 B 及其后的作品后移一位。
    
- **双模式切换：**
    
    - **整理模式（推荐）：** 强网格吸附，作品按顺序紧凑排列，逻辑清晰。
        
    - **手动模式：** 允许自由摆放，不触发自动位移，用于辅助思考。
        
- **即时反馈：** 拖拽时悬浮显示当前网格预估分，点击作品进入灯箱查看细节。
    

---

## 3. 实现路径：最优选方案

**“逻辑序列 + 视觉映射”法**

- **不采用** 复杂的物理碰撞检测。
    
- **采用** 将所有作品存储为一个有序数组 `[work1, work2, work3...]`。
    
- **映射：** 前端根据数组索引（Index）自动计算其在 $N \times M$ 网格中的 X, Y 位置。拖拽改变的是数组的顺序，位置由动画库平滑过渡。
    

---

## 4. 前端开发规范 (Front-end)

### 4.1 技术栈建议

- **框架：** React.js 或 Vue 3
    
- **拖拽库：** `dnd-kit` (React) 或 `SortableJS` (Vue/原生) —— _原生支持 Grid 排序逻辑_
    
- **动画引擎：** `Framer Motion` (React) 或 `GSAP` —— _处理方块被挤开时的平滑位移_
    
- **图像处理：** `v-viewer` 或 `PhotoSwipe` —— _实现灯箱与缩略图缩放_
    

### 4.2 核心组件设计

1. **Canvas Container:**
    
    - 绘制背景刻度线（优、良、中、差分区）。
        
    - 监听全局滚轮缩放（Zoom）和画布平移（Pan）。
        
2. **Work Card (方块):**
    
    - 固定宽高比（建议 1:1 或 4:3）。
        
    - 状态：Normal（缩略图）、Dragging（半透明悬浮）、Active（灯箱放大）。
        
    - 显示：左上角学号/姓名，底部悬浮分数提示。
        
3. **Scoring Engine:**
    
    - 输入：网格索引 $i$。
        
    - 输出：$Score = MaxScore - (i / Total) \times Range$。
        

### 4.3 UX 简化策略

- **简化不同尺寸：** 统一卡片大小。若作品比例不同，采用 `object-fit: cover`，灯箱模式再看全图。
    
- **性能优化：** 视频作品在画布上仅显示封面图（Gif 或静态图），只有在进入灯箱后才加载视频播放器。
    

---

## 5. 后端开发规范 (Back-end)

### 5.1 数据结构 (JSON)

后端仅需维护一个极其简单的结构：

JSON

```
{
  "course_id": "DS2026_01",
  "grading_list": [
    { "student_id": "001", "file_url": "...", "type": "image", "current_index": 0 },
    { "student_id": "005", "file_url": "...", "type": "video", "current_index": 1 }
  ]
}
```

### 5.2 核心接口

1. **GET `/api/works`：** 获取当前课程所有学生作品及初始排序。
    
2. **POST `/api/save_ranking`：** 当点击“保存”时，发送排序后的 ID 数组。
    
    - _MVP 简化：_ 不需要实时保存每个拖拽动作，只在教师完成一轮调整后手动点击保存。
        

### 5.3 存储建议

- 由于是 MVP 且作品数量有限（通常一个班级 30-100 人），直接使用 **SQLite** 或 **MongoDB** 即可，甚至可以直接读写 **JSON 文件** 以求最快开发。
    

---

## 6. 关键交互流程图

1. **用户抓取方块：** 该方块脱离文档流，原位出现虚线占位符。
    
2. **移动中：** 占位符随着鼠标位置在网格间滑动，下方的方块自动“闪避”。
    
3. **松开：** 方块吸附至占位符位置，后端索引重排。
    
4. **计算分数：** 根据最终位置落在哪一个色块区间（由 CSS Grid 定义），赋予对应的分数档位。
    

---

## 7. 待决策的技术细节 (Q&A)

- **视频播放：** 是否需要支持在画布上多视频同时播放？（建议：否，太吃性能，仅灯箱播放）。
    
- **分数粒度：** 是自动生成精确分（如 88分），还是仅标记等级（A/B/C）后手动微调？（建议：系统给预估分，允许点击分数数字手动修改）。
    

---
# 详细设计文档
## 1. 产品定义

一款单页式（Single Page）视觉排序评分工具。通过“物理位置 = 逻辑权重”的直觉操作，解决教师在大量图片/视频作品中进行审美对齐的痛点。

## 2. 前端实现细节 (Frontend Deep-dive)

### 2.1 核心：网格与背景对齐机制 (Alignment Mechanism)

- **物理对齐**：使用 `display: grid` 定义固定列数（如 4 或 5 列）。
    
- **分段计算**：将总作品数 $N$ 除以列数 $C$，得到总行数 $R$。
    
- **逻辑分区**：
    
    - 优 (90-100): 占用总行数的前 25%。
        
    - 良 (80-89): 占用其后的 25%。
        
    - ...以此类推。
        
- **实现方案**：背景层使用绝对定位，其高度通过 `calc(row-height * rows_in_zone)` 动态计算，确保方块永远落在背景色块的边界内。
    

### 2.2 性能与交互约束

- **不分屏策略**：针对 100+ 作品，采用虚拟滚动（Virtual List）或图片懒加载（Lazy Loading）。
    
- **防抖保存**：前端每当 `onDragEnd` 触发后，延迟 1 秒将最新 `ranking_array` 存入 `LocalStorage`。
    
- **灯箱逻辑**：点击方块记录当前索引，弹窗显示大图/视频。支持键盘左右键快速切换上下一个作品（基于当前排序数组）。
    

## 3. 后端处理细节 (Backend Deep-dive)

### 3.1 排序持久化 (Persistence)

- **数据模型**：
    
    - `Assignments` 表：存储背景分区配置（如：优=90-100）。
        
    - `Submissions` 表：包含 `student_id`, `file_url`, `score_cached`。
        
    - `Ranking` 表：存储一个有序 ID 数组 `[id_7, id_2, id_9...]`。
        
- **原子更新接口**：
    
    - `PUT /api/rankings`: 接收完整 ID 数组。后端使用事务更新排序，确保数据一致性。
        
    - `GET /api/export`: 根据当前排序索引，自动映射计算出最终分数并导出为 Excel/CSV。
        

## 4. 关键功能细节

### 4.1 重置逻辑 (Reset)

- 提供“按学号排序”或“按提交时间排序”作为初始状态。
    
- 重置键触发时，清空 `LocalStorage` 并重新向后端请求原始数组。
    

### 4.2 视频处理

- 方块模式下仅渲染视频第一帧（Poster）或低码率预览。
    
- 灯箱模式下挂载完整播放器，自动静音循环播放。
    

## 5. 扩展建议 (Future Scope)

- **云同步**：当检测到网络在线时，自动将本地缓存同步至云端。
    
- **AI 预选**：通过视觉算法初步将构图或色彩相似的作品归类。




```js
import React, { useState, useEffect, useMemo } from 'react';
import { 
  DndContext, 
  closestCenter,
  PointerSensor,
  useSensor,
  useSensors,
  DragOverlay
} from '@dnd-kit/core';
import {
  arrayMove,
  SortableContext,
  rectSortingStrategy,
  useSortable
} from '@dnd-kit/sortable';
import { CSS } from '@dnd-kit/utilities';
import { Maximize2, Play, Save, RotateCcw, LayoutGrid, X } from 'lucide-react';

// --- 配置 ---
const GRID_COLUMNS = 4;
const STORAGE_KEY = 'grading_canvas_data';

const ZONES = [
  { label: '优秀 (90-100)', color: 'rgba(16, 185, 129, 0.08)', borderColor: 'rgba(16, 185, 129, 0.2)' },
  { label: '良好 (80-89)', color: 'rgba(59, 130, 246, 0.08)', borderColor: 'rgba(59, 130, 246, 0.2)' },
  { label: '中等 (70-79)', color: 'rgba(245, 158, 11, 0.08)', borderColor: 'rgba(245, 158, 11, 0.2)' },
  { label: '及格 (60-69)', color: 'rgba(239, 68, 68, 0.08)', borderColor: 'rgba(239, 68, 68, 0.2)' },
];

const INITIAL_DATA = Array.from({ length: 24 }, (_, i) => ({
  id: `work-${i + 1}`,
  studentName: `学生 ${String(i + 1).padStart(2, '0')}`,
  type: i % 5 === 0 ? 'video' : 'image',
  thumbnail: `https://picsum.photos/seed/${i + 20}/400/400`,
}));

// --- 子组件: 作品方块 ---
const SortableWorkCard = ({ id, work, index, onOpen }) => {
  const { attributes, listeners, setNodeRef, transform, transition, isDragging } = useSortable({ id });

  const style = {
    transform: CSS.Transform.toString(transform),
    transition,
    zIndex: isDragging ? 50 : 'auto',
    opacity: isDragging ? 0.3 : 1,
  };

  return (
    <div
      ref={setNodeRef}
      style={style}
      {...attributes}
      {...listeners}
      className="relative group aspect-[4/3] bg-white rounded-lg shadow-sm border border-gray-200 overflow-hidden cursor-grab active:cursor-grabbing hover:shadow-xl transition-shadow"
    >
      <img src={work.thumbnail} alt="" className="w-full h-full object-cover" />
      {work.type === 'video' && (
        <div className="absolute inset-0 flex items-center justify-center bg-black/10">
          <Play className="text-white fill-current w-8 h-8 opacity-80" />
        </div>
      )}
      
      {/* 悬浮覆盖层 */}
      <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity p-3 flex flex-col justify-between">
        <div className="flex justify-between items-start">
          <span className="bg-white/20 backdrop-blur-md text-white text-[10px] px-2 py-0.5 rounded">#{index + 1}</span>
          <button 
            onMouseDown={(e) => { e.stopPropagation(); onOpen(work); }}
            className="p-1.5 bg-white rounded-full text-gray-800 hover:bg-blue-500 hover:text-white transition-colors"
          >
            <Maximize2 size={14} />
          </button>
        </div>
        <span className="text-white text-sm font-medium">{work.studentName}</span>
      </div>
    </div>
  );
};

// --- 主组件 ---
export default function App() {
  const [works, setWorks] = useState([]);
  const [activeWork, setActiveWork] = useState(null); // 用于灯箱
  const [draggingId, setDraggingId] = useState(null);

  const sensors = useSensors(useSensor(PointerSensor, { activationConstraint: { distance: 8 } }));

  // 初始化与持久化
  useEffect(() => {
    const saved = localStorage.getItem(STORAGE_KEY);
    setWorks(saved ? JSON.parse(saved) : INITIAL_DATA);
  }, []);

  useEffect(() => {
    if (works.length > 0) {
      localStorage.setItem(STORAGE_KEY, JSON.stringify(works));
    }
  }, [works]);

  // 重置功能
  const handleReset = () => {
    if (window.confirm("确定要重置所有排序吗？当前评分进度将丢失。")) {
      setWorks(INITIAL_DATA);
      localStorage.removeItem(STORAGE_KEY);
    }
  };

  const handleDragStart = (e) => setDraggingId(e.active.id);
  
  const handleDragEnd = (event) => {
    const { active, over } = event;
    if (active.id !== over?.id) {
      setWorks((items) => {
        const oldIndex = items.findIndex((i) => i.id === active.id);
        const newIndex = items.findIndex((i) => i.id === over.id);
        return arrayMove(items, oldIndex, newIndex);
      });
    }
    setDraggingId(null);
  };

  // 核心：计算背景分区的跨度
  const zoneRows = useMemo(() => {
    const totalRows = Math.ceil(works.length / GRID_COLUMNS);
    const rowsPerZone = Math.ceil(totalRows / ZONES.length);
    return ZONES.map((_, i) => ({
      start: i * rowsPerZone + 1,
      span: rowsPerZone
    }));
  }, [works.length]);

  return (
    <div className="min-h-screen bg-[#f8fafc] text-slate-900 font-sans">
      {/* 顶部导航 */}
      <header className="sticky top-0 z-40 bg-white/80 backdrop-blur-md border-b border-slate-200 px-8 py-4 flex justify-between items-center">
        <div className="flex items-center gap-3">
          <div className="p-2 bg-blue-600 rounded-lg text-white">
            <LayoutGrid size={20} />
          </div>
          <div>
            <h1 className="text-lg font-bold tracking-tight">视觉评分系统</h1>
            <p className="text-xs text-slate-500 font-medium">作品数量: {works.length} | 自动保存中</p>
          </div>
        </div>
        <div className="flex gap-3">
          <button onClick={handleReset} className="flex items-center gap-2 px-4 py-2 text-slate-600 hover:bg-slate-100 rounded-lg text-sm transition-colors">
            <RotateCcw size={16} /> 重置排序
          </button>
          <button className="flex items-center gap-2 px-6 py-2 bg-slate-900 text-white rounded-lg text-sm font-bold hover:bg-slate-800 transition-transform active:scale-95 shadow-lg">
            <Save size={16} /> 保存最终成绩
          </button>
        </div>
      </header>

      <main className="max-w-7xl mx-auto p-8 relative">
        {/* 背景对齐层: 基于 Grid Row 渲染 */}
        <div className="absolute inset-x-8 top-8 bottom-8 pointer-events-none grid grid-cols-4 gap-6 auto-rows-[minmax(180px,auto)]">
          {zoneRows.map((zone, i) => (
            <div 
              key={i} 
              className="col-span-4 rounded-3xl border-2 border-dashed flex items-start p-6"
              style={{ 
                gridRow: `${zone.start} / span ${zone.span}`,
                backgroundColor: ZONES[i].color,
                borderColor: ZONES[i].borderColor
              }}
            >
              <div className="sticky top-28 bg-white/90 backdrop-blur px-3 py-1 rounded-full shadow-sm border border-slate-200">
                <span className="text-[10px] font-black text-slate-500 uppercase tracking-widest">{ZONES[i].label}</span>
              </div>
            </div>
          ))}
        </div>

        {/* 交互排序层 */}
        <div className="relative z-10 p-6">
          <DndContext
            sensors={sensors}
            collisionDetection={closestCenter}
            onDragStart={handleDragStart}
            onDragEnd={handleDragEnd}
          >
            <SortableContext items={works} strategy={rectSortingStrategy}>
              <div className="grid grid-cols-4 gap-6">
                {works.map((work, index) => (
                  <SortableWorkCard 
                    key={work.id} 
                    id={work.id} 
                    work={work} 
                    index={index}
                    onOpen={setActiveWork}
                  />
                ))}
              </div>
            </SortableContext>

            <DragOverlay>
              {draggingId ? (
                <div className="w-full aspect-[4/3] bg-blue-600 rounded-lg shadow-2xl flex items-center justify-center border-4 border-white rotate-2 scale-105 overflow-hidden">
                  <img src={works.find(w => w.id === draggingId)?.thumbnail} className="w-full h-full object-cover opacity-50" />
                  <span className="absolute text-white font-bold">移动中...</span>
                </div>
              ) : null}
            </DragOverlay>
          </DndContext>
        </div>
      </main>

      {/* 灯箱模态框 */}
      {activeWork && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-slate-950/90 backdrop-blur-lg p-10">
          <button onClick={() => setActiveWork(null)} className="absolute top-6 right-6 p-2 text-white/50 hover:text-white transition-colors">
            <X size={32} />
          </button>
          <div className="max-w-4xl w-full flex flex-col items-center">
            <div className="w-full aspect-video bg-black rounded-2xl overflow-hidden shadow-2xl border border-white/10">
              <img src={activeWork.thumbnail} className="w-full h-full object-contain" />
            </div>
            <div className="mt-6 text-center">
              <h2 className="text-2xl font-bold text-white">{activeWork.studentName}</h2>
              <p className="text-white/40 mt-1">作品 ID: {activeWork.id}</p>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
```