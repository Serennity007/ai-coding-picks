# AI编程精选来源池

默认只订阅本仓库的 [人工精选 RSS](https://raw.githubusercontent.com/Serennity007/ai-coding-picks/main/feed.xml)。来源池只供维护者发现候选，不整源导入。不收工具导航、推广榜单、纯版本公告和泛技术周刊。

由 src/feeds.js 自动生成；混合来源中的宣传、公告和跑题文章逐篇排除。源可抓取不代表所有文章应进入频道。

| 来源 | 为什么参考 | 质量依据 | 代表文章 | 候选订阅 |
| --- | --- | --- | --- | --- |
| Boris Tane | 软件工程师的 Claude Code 实际工作流；全站含非 AI 软件开发文章，默认只读本仓库选定条目。 | 叙述九个月实际使用经验，给出 research/plan 的审阅面、注释循环与明确实施阶段；是个人工作法，未冒充受控研究。 | [How I Use Claude Code](https://boristane.com/blog/how-i-use-claude-code/) | [候选 RSS](https://boristane.com/rss.xml) |
| Jesse Vincent / Massively Parallel Procrastination | Superpowers、packnplay 与 agent harness 作者的一手实现；原 feed 含 544 条历史文，不作为用户默认订阅。 | 作者实际发布代码与工具，公开编译器 checkpoint、容器配置难点和 agent 失败例；部分新模式仍处实验阶段，逐条标记证据边界。 | [I vibe-coded a C compiler that can build SQLite](https://blog.fsck.com/2026/08/21/i-vibe-coded-a-c-compiler/) | [候选 RSS](https://blog.fsck.com/feed/rss.xml) |
| Armin Ronacher | Flask 作者与持续写代码的 agent 工具开发者；只选有实际代码/失败细节的 AI 编程文，排除全站观点随笔。 | 实际实现经验与可见代码片段，愿意披露长时间 agent 工作没有可用成果；负面案例作为个人观察，不推断普遍模型排名。 | [Astra for Coding: Why Are We Doing This Again?](https://lucumr.pocoo.org/2026/9/7/astra-why/) | [候选 RSS](https://lucumr.pocoo.org/feed.atom) |

## 未采用或不整源订阅

| 候选 | 原因 | 地址 |
| --- | --- | --- |
| Aider blog | 真实可解析 10 条，但最新为 2025-05-08；有经典工程文，本轮活跃精选优先当前仍写一手实践的作者。 | [候选地址](https://aider.chat/feed.xml) |
| Tabby blog | 真实可解析 17 条，最新 2024-07-09，已长期未更新。 | [候选地址](https://tabby.tabbyml.com/blog/rss.xml) |
| Peter Steinberger | 真实可解析 107 条，最新 2026-02-15；本轮没有把作者的历史 iOS/AI 混合全站源当作默认精选。可日后逐篇补选技术文章。 | [候选地址](https://steipete.me/rss.xml) |
| Amp news | 真实可解析 167 条且更新至 2026-10-06，但多为产品/模型/界面公告；技术 notes 无独立有效 RSS，/notes.rss 返回 HTML，本轮不以公告填充。 | [候选地址](https://ampcode.com/news.rss) |
| Cursor Blog RSS | 实际 HTTP 404，原站页面没有发现原生 RSS alternate 链接。 | [候选地址](https://cursor.com/blog/rss.xml) |
| OpenHands Blog RSS | 实际 HTTP 404，旧 www.all-hands.dev/blog/rss.xml 同为 404。 | [候选地址](https://openhands.dev/blog/rss.xml) |
| Simon Willison 全站/标签 | 高质量作者但已经属于正涛精选；避免把同一批内容复制进新方向，保留现有订阅归属。 | [候选地址](https://simonwillison.net/atom/everything/) |
| Geoffrey Huntley 全站 | 真实可解析且更新至 2026-10-07，近期兼有行业观点和一般工具随笔；本轮优先含具体代码或验证材料的文章，不靠作者知名度凑数。 | [候选地址](https://ghuntley.com/rss/) |
| 观点文与泛上下文教程 | 已读 Boris Context engineering、Armin Fast and Hard Code / Latent Powers，但实作编程证据密度低于本次所选；不加入首批精选。 | — |
| Armin What is Codemode | 有实质 harness 工程内容，但图像生成示例占据独立章节；本轮为了保持纯文本编程范围没有收录。 | [候选地址](https://lucumr.pocoo.org/feed.atom) |

无公开 RSS 的优质网页不伪造订阅地址。网络不可达只说明当前环境不可用，不代表源站不存在。
