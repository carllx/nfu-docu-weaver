
---

## 交互过程


###  @Analyst 分析师
用户只需提供基本需求，例如：

- "我想为艺术家 carllllllllx 创建一个个人作品集网站"
- 明确风格要求（如"1930年代橡皮管动画风格"）
- 指定技术限制（如"纯 HTML/CSS/JavaScript"）
- "如果有不确定的地方请你主动询问我" 利用这种机制及时澄清模糊需求
 

**明确项目需求**：向analyst agent描述你的项目基本信息，如"为艺术家创建橡皮管风格作品集网站"
![bg fit left:50% vertical](https://i.imgur.com/otaaPN5.webp)

---

### @Pm 产品经理

上传项目简报文件：

- brief.md（项目简报）

> "我们现在需要生成 prd.md，我提供了一个和分析师讨论的结果就是这里的 brief.md"

当 pm 提出生成Epic 列表时可以终止,  强行生成 prd.md

![bg fit left:50% vertical](https://i.imgur.com/tH50HZU.webp)


---



### @UXexpert 设计师
- 上传项目简报文件（brief.md）
- 上传产品需求文档（prd.md）
> 我们制定设计规范的文档 front-end-spec.md"

- 明确表达具体需求，如"我们的设计仅支持电脑端浏览器"
- Agent 会根据反馈调整相应部分的设计策略

![bg fit left:50% vertical](https://i.imgur.com/EdDr9aH.webp)

---

###  @Architect 架构师

上传基础文档：

- brief.md（项目简报）
- prd.md（产品需求文档）
- front-end-spec.md（前端规范）

"让我们来制定 完整的 docs/architecture.md"

- 具体限制："不需要 Netlify部署流程，开发团队是初学者"
- 移除复杂构建工具（如Vite, React等），改用纯HTML/CSS/JS
- 简化为静态托管，适合初学者团队

![bg fit left:50% vertical](https://i.imgur.com/c1tixYZ.webp)

---

