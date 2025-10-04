[ 📹 youtube Customizing Copilot in VS Code](@https://www.youtube.com/watch?v=WdZCv4OZcxM)

暂时不能创建多个Agents 
### 第一人称重点整理

我是 Christopher Harrison。在这次演示中，我展示了如何通过提供高质量的上下文来优化 GitHub Copilot 的代码生成能力。

1.  **明确目标**：我的任务是为一个管理跑步比赛的网站创建一个 `fundraising-service.ts` 文件。我向 Copilot Chat 发出了一个清晰的指令：“为 fundraiser 创建一个 service，包括按 id 和 raceId 搜索。”

2.  **理解 Copilot 的上下文**：在 Copilot 生成代码后，我首先关注了 chat 界面中的“Used 3 references”部分。这非常关键，因为它透明地显示了 Copilot 用来生成答案的上下文来源，主要包括：
    *   当前打开的文件 (`fundraising-service.ts`)。
    *   一个名为 `copilot-instructions.md` 的特殊文件。
    *   我的数据库 schema 文件 (`schema.prisma`)。

3.  **使用 `copilot-instructions.md` 提供高层指导**：
    *   **作用**：我在项目的 `.github` 文件夹下创建了 `copilot-instructions.md` 文件。这个文件就像是我给 Copilot 的一份项目说明书，里面描述了项目的整体架构（比如它是一个 monorepo）、使用的技术栈（`SvelteKit`, `Tailwind`）、编码规范（比如常量使用 `camelCasing`）和测试策略（使用 `vitest`, `pytest` 等）。
    *   **好处**：这能确保 Copilot 生成的代码在风格和技术选型上与我的项目保持一致。它也成为了项目文档的一部分，对整个团队都有益。当 Copilot 出现重复性错误时（比如错误地使用类组件），我可以在这里进行纠正，这个指令会在之后的所有 chat 交互中生效。
    *   **最佳实践**：由于 token 限制，这份说明应该保持高层次和精炼，只包含对整个项目都至关重要的通用信息。

4.  **通过设置包含关键文件**：
    *   对于那些对项目至关重要、需要 Copilot 始终理解的文件，比如我的 `schema.prisma` 数据库模型文件，我通过修改工作区的 `.vscode/settings.json` 文件来确保它总是被包含在上下文中。
    *   我通过 `github.copilot.chat.codeGeneration.instructions` 设置项，直接指定了 `schema.prisma` 文件的路径。

**总结一下**，要让 GitHub Copilot 成为一个高效的编程伙伴，关键在于为它提供清晰、准确且持久的上下文。通过结合使用自动生效的 `copilot-instructions.md` 文件来定义项目级规范，以及通过 `settings.json` 显式包含核心文件，我可以引导 Copilot 生成更符合我期望的高质量代码，从而大大提升开发效率。

### 影片逐字稿

[00:00] Christopher Harrison: 所以，我这里有一个网站，是用于跑步比赛的。
[00:04] Christopher Harrison: 在跑步比赛中，一件非常普遍的事情就是举办筹款活动。
[00:08] Christopher Harrison: 很多比赛都会关联筹款活动，这样你就可以为好的慈善机构筹集资金等等。
[00:14] Christopher Harrison: 那么，假设我想创建我的数据抽象层（Data Abstraction Layer, DAL），在这里作为一项服务来处理筹款，并在网站上提供这个功能。
[00:23] Christopher Harrison: 那么我可能会进去说，
[00:25] Christopher Harrison: “嘿，嗯，为 fundraiser 创建一个 service。
[00:31] Christopher Harrison: 包括按 id 和 raceId 搜索。”
[00:36] Christopher Harrison: 好了。我会把它发送出去。
[00:37] Christopher Harrison: 在我做这个的时候，我想强调的第一件事，
[00:39] Christopher Harrison: 我没有使用 agent 模式，只是因为我想快一点，但所有这些在 agent 模式下都成立，或者说，无论你用什么方式与 Copilot 沟通，这些都适用。
[00:50] Christopher Harrison: 所以我只是在使用 ask 模式。
[00:52] Christopher Harrison: 我们首先会注意到的，就在这里，是 "Used 3 references"（使用了 3 个引用）。
[00:57] Christopher Harrison: 这可能是...我放得太大了。
[1:01] Christopher Harrison: 好了。这是 chat 内部最重要的小窗口，就是这些引用。
[1:07] Christopher Harrison: 因为这会告诉你上下文。这会告诉你 Copilot 在创建建议代码时考虑了什么。
[1:16] Christopher Harrison: 我们会注意到它包含了三个文件。
[1:18] Christopher Harrison: 第一个文件是 `fundraising-service.ts`。好的，这是我打开的文件。
[1:24] Christopher Harrison: 这还算合理，我想我们都预料到了。
[1:27] Christopher Harrison: 但下一个文件是这个 `copilot-instructions.md` markdown 文件。
[1:32] Christopher Harrison: 这个文件位于我的 `.github` 文件夹内。
[1:34] Christopher Harrison: 如果我打开这个文件，我们会注意到，我对这个项目中发生的一切都有一个高层次的描述。
[1:45] Christopher Harrison: 所以我强调了这个项目是关于什么的。它是一个包含两个相关项目的 monorepo。
[1:50] Christopher Harrison: 我有 `Runner tracks`，还有 `Race management`。
[1:52] Christopher Harrison: 如果我向下滚动，我可以看到所有关于 `Runner tracks` 的信息，以及我希望我的代码如何被创建，
[2:01] Christopher Harrison: 现场比赛管理工具（Onsite race management tool）是如何设置的，
[2:03] Christopher Harrison: 然后是一些关于我希望代码如何结构的具体说明。
[2:08] Christopher Harrison: 所以，再回到上下文这个话题，
[2:10] Christopher Harrison: 如果你想确保 Copilot 拥有这个背景知识，即“嘿，这就是我正在构建的东西，这就是我构建它的方式”，你可以把这些信息放进 `copilot-instructions` 文件里。
[2:20] Christopher Harrison: 我觉得这在几个方面很有帮助。
[2:23] Christopher Harrison: 首先，如果你发现 Copilot 总是以某种特定的方式做事，而你不想让它那样做，
[2:31] Christopher Harrison: 那就告诉 Copilot。
[2:33] Christopher Harrison: 比如你发现它总是在犯一个错误，
[2:35] Christopher Harrison: 那么这里就是一个很好的地方，可以把修正指令放进 `copilot-instructions` 文件里。
[2:40] Christopher Harrison: 比如说，当你使用 Copilot 时，它总是想用 class 来创建 React 组件，而不是用 function。
[2:48] Christopher Harrison: 而我们知道所有时髦的开发者都是用函数来创建他们的 React 组件的。
[2:53] Christopher Harrison: 如果你想让它以那种特定的方式来做，你可以把它放进你的 `copilot-instructions` 文件里。
[2:59] Christopher Harrison: 那么这些指令就会被包含在我向 chat 发出的每一次调用中。
[3:04] Christopher Harrison: 这不用于代码补全或下一行建议，它只会在 chat 内部使用。
[3:08] Christopher Harrison: 但你会注意到它会出现在每一次调用中。
[3:13] Cassidy: 哦。
[3:14] Christopher Harrison: 那么，这也引出了另一个非常重要的一点，
[3:18] Christopher Harrison: 也是一个最佳实践。
[3:20] Christopher Harrison: 我放在这里面的信息，应该与我进行的每一次来回交互都是相关的。
[3:28] Christopher Harrison: 因为考虑的 token 数量总是有限的。
[3:33] Christopher Harrison: 如果你最终提供了太多的上下文，太多的信息，
[3:38] Christopher Harrison: 要么某些东西会在过程中丢失，因为你最终会用完缓冲区，要么 Copilot 可能就更难弄清楚什么才是重要的。
[3:48] Christopher Harrison: 所以，当你构建这个文件时，你真的需要考虑高层次的东西。
[3:51] Christopher Harrison: 什么是常见的？什么是项目层面的信息？
[3:56] Christopher Harrison: 说到项目，也值得强调的是，这个文件成为了你项目的一部分。
[4:02] Christopher Harrison: 所以现在它与你所有的开发者共享。
[4:05] Christopher Harrison: 所以你花在里面添加所有这些信息的一点时间，将真正帮助你的开发者们。
[4:14] Christopher Harrison: 但你也会注意到，我包含了另一个文件。
[4:17] Christopher Harrison: 这是我的 `Prisma` schema 文件。
[4:19] Christopher Harrison: 如果你不熟悉 Prisma，它是一个用于 TypeScript 的对象关系映射器（object-relational mapper）。
[4:23] Christopher Harrison: 它非常棒，能给你带来强类型等等。它很出色。
[4:28] Christopher Harrison: 由于我要和数据库打很多交道，
[4:31] Christopher Harrison: 我需要确保 Copilot 理解我的 schema。
[4:35] Christopher Harrison: 所以我可以确保这个文件现在被包含进来。
[4:38] Christopher Harrison: 实际上，包含那个单独的文件是你设置的一部分。
[4:43] Christopher Harrison: 所以如果我打开我的 `settings.json` 文件，我可以看到 `codeGeneration.instructions`，
[4:49] Christopher Harrison: 然后就是那个 schema 文件。
[4:52] Christopher Harrison: 所以如果有什么东西你总是想确保 Copilot 能看到，你可以把它包含在那里。
[4:58] Christopher Harrison: 所以，我有 `copilot-instructions`，这是自动的魔法。
[5:02] Christopher Harrison: 把它命名为 `copilot-instructions.md`，放进你的 `.github` 文件夹，就完成了。
[5:07] Christopher Harrison: 任何你希望它考虑的附加文件，你可以把它放进你的设置里。
[5:11] Christopher Harrison: 我把它放在了项目的设置里，但你也可以把它放在用户设置里。

---

