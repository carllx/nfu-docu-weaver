# Figma 组件命名规范 (English Naming Convention)

## 📋 原则
- **所有 Frame 和组件名称必须使用英文**
- **使用 kebab-case 或 PascalCase**，可直接对应代码 class name
- **组件名使用 `Component/Variant` 格式**

---

## 🔄 需要重命名的元素清单

### 页面级别
| 当前中文名称 | 建议英文名称 | 对应 CSS Class |
|------------|------------|----------------|
| 页面标题 | `page-title` | `.page-title` |
| 副标题 | `page-subtitle` | `.page-subtitle` |

### 按钮区域
| 当前中文名称 | 建议英文名称 | 对应 CSS Class |
|------------|------------|----------------|
| 按钮组件标题 | `button-section-title` | `.button-section-title` |
| 按钮组件展示区 | `button-showcase` | `.button-showcase` |

### 卡片区域
| 当前中文名称 | 建议英文名称 | 对应 CSS Class |
|------------|------------|----------------|
| 卡片组件标题 | `card-section-title` | `.card-section-title` |
| 卡片组件展示区 | `card-showcase` | `.card-showcase` |

### 搜索框区域
| 当前中文名称 | 建议英文名称 | 对应 CSS Class |
|------------|------------|----------------|
| 搜索框组件标题 | `search-section-title` | `.search-section-title` |
| 搜索框组件展示区 | `search-showcase` | `.search-showcase` |

---

## ✅ 已正确命名的组件

### 按钮组件
- ✅ `Button/Primary`
- ✅ `Button/Secondary`
- ✅ `Button/Disabled`
- ✅ `Button Text`

### 卡片组件
- ⚠️ `🎵 SongRow` → 建议改为 `Card/SongRow`
- ⚠️ `专辑封面` → 建议改为 `album-cover`
- ⚠️ `歌曲信息` → 建议改为 `song-info`
- ⚠️ `时长` → 建议改为 `duration`

### 搜索框组件
- ✅ `Input/Search`
- ⚠️ `图标` → 建议改为 `icon`
- ✅ `Placeholder`

---

## 🎯 推荐命名模式

### 1. 组件命名（Component）
```
格式: Component/Variant
示例:
  - Button/Primary
  - Card/SongRow
  - Input/Search
  - Icon/Search
```

### 2. 容器命名（Container）
```
格式: kebab-case
示例:
  - button-showcase
  - card-list
  - search-container
  - content-wrapper
```

### 3. 内部元素命名（Element）
```
格式: kebab-case
示例:
  - album-cover
  - song-info
  - duration
  - play-button
```

---

## 🔧 如何在 Figma 中批量重命名

### 方法 1：手动重命名（推荐）
1. 在 Figma 左侧图层面板中找到元素
2. 双击图层名称
3. 输入新的英文名称
4. 按 Enter 确认

### 方法 2：使用插件
- 推荐插件：**"Rename It"** 或 **"Bulk Rename"**
- 可批量按规则重命名

---

## 📦 完整命名映射表

```
🧩 组件库 - Component Library
├── page-title
├── page-subtitle
├── button-section-title
├── button-showcase
│   ├── Button/Primary
│   │   └── button-text
│   ├── Button/Secondary
│   │   └── button-text
│   └── Button/Disabled
│       └── button-text
├── card-section-title
├── card-showcase
│   ├── Card/SongRow
│   │   ├── album-cover
│   │   ├── song-info
│   │   └── duration
│   └── variable-guide
│       ├── title
│       └── steps
└── search-section-title
    └── search-showcase
        ├── Input/Search
        │   ├── icon
        │   └── placeholder
        └── variable-guide
            ├── title
            └── steps
```

---

## 🎨 对应的 CSS 示例

```css
/* 容器 */
.button-showcase {
  display: flex;
  gap: var(--spacing-md);
  padding: var(--spacing-lg);
}

.card-showcase {
  display: flex;
  flex-direction: column;
  gap: var(--spacing-md);
}

/* 组件 */
.card-song-row {
  display: flex;
  align-items: center;
  gap: var(--spacing-md);
  padding: var(--spacing-md);
  background: white;
  border-radius: var(--radius-md);
}

.album-cover {
  width: 48px;
  height: 48px;
  border-radius: var(--radius-sm);
  background: var(--success-green);
}

.song-info {
  flex: 1;
  font-size: var(--font-size-body);
  color: var(--text-primary);
}

.duration {
  font-size: var(--font-size-body);
  color: var(--text-secondary);
}
```

---

## ⚠️ 重要提示

1. **emoji 可以保留作为视觉标识**（如 `🎵 SongRow`），但建议用在最外层页面，组件本身用纯英文
2. **变量应用说明框**可以保留中文内容，但 Frame 名称用英文：`variable-guide`
3. **Button Text** 这类内部文本可以保留，因为它描述的是文本图层


