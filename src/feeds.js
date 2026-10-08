// 频道与候选来源唯一配置；来源池不是默认订阅。
export const DIRECTION = {
  "input": "ai-coding",
  "slug": "ai-coding-picks",
  "name": "AI编程精选",
  "icon": "bot",
  "scope": "AI 编程工具、编码智能体与有证据的开发工作流",
  "boundary": "不收工具导航、推广榜单、纯版本公告和泛技术周刊。"
};
export const CURATED_FEEDS = [
  {
    "id": "ai-coding-picks",
    "name": "AI编程精选",
    "category": "article",
    "siteUrl": "https://github.com/Serennity007/ai-coding-picks",
    "feedUrl": "https://raw.githubusercontent.com/Serennity007/ai-coding-picks/main/feed.xml",
    "note": "人工逐篇精选，附原创摘要与推荐理由；审核并提交后才更新"
  }
];
export const SOURCE_FEEDS = [
  {
    "id": "boris-tane",
    "name": "Boris Tane",
    "siteUrl": "https://boristane.com/blog",
    "feedUrl": "https://boristane.com/rss.xml",
    "note": "软件工程师的 Claude Code 实际工作流；全站含非 AI 软件开发文章，默认只读本仓库选定条目。",
    "quality": "叙述九个月实际使用经验，给出 research/plan 的审阅面、注释循环与明确实施阶段；是个人工作法，未冒充受控研究。",
    "evidenceUrl": "https://boristane.com/blog/how-i-use-claude-code/",
    "evidenceTitle": "How I Use Claude Code",
    "verification": {
      "status": 200,
      "format": "rss",
      "itemCount": 21,
      "bytes": 297593,
      "latest": "2026-08-21T00:00:00Z",
      "method": "本机 urllib 实际 HTTP 抓取并用 ElementTree 解析；精选文章用 Exa 阅读原站正文"
    }
  },
  {
    "id": "jesse-vincent",
    "name": "Jesse Vincent / Massively Parallel Procrastination",
    "siteUrl": "https://blog.fsck.com",
    "feedUrl": "https://blog.fsck.com/feed/rss.xml",
    "note": "Superpowers、packnplay 与 agent harness 作者的一手实现；原 feed 含 544 条历史文，不作为用户默认订阅。",
    "quality": "作者实际发布代码与工具，公开编译器 checkpoint、容器配置难点和 agent 失败例；部分新模式仍处实验阶段，逐条标记证据边界。",
    "evidenceUrl": "https://blog.fsck.com/2026/08/21/i-vibe-coded-a-c-compiler/",
    "evidenceTitle": "I vibe-coded a C compiler that can build SQLite",
    "verification": {
      "status": 200,
      "format": "rss",
      "itemCount": 544,
      "bytes": 1403618,
      "latest": "2026-10-05T00:00:00Z",
      "method": "本机 urllib 实际 HTTP 抓取并用 ElementTree 解析；RSS 版本比同站 Atom 略小，但仍只作审核候选池"
    }
  },
  {
    "id": "armin-ronacher",
    "name": "Armin Ronacher",
    "siteUrl": "https://lucumr.pocoo.org",
    "feedUrl": "https://lucumr.pocoo.org/feed.atom",
    "note": "Flask 作者与持续写代码的 agent 工具开发者；只选有实际代码/失败细节的 AI 编程文，排除全站观点随笔。",
    "quality": "实际实现经验与可见代码片段，愿意披露长时间 agent 工作没有可用成果；负面案例作为个人观察，不推断普遍模型排名。",
    "evidenceUrl": "https://lucumr.pocoo.org/2026/9/7/astra-why/",
    "evidenceTitle": "Astra for Coding: Why Are We Doing This Again?",
    "verification": {
      "status": 200,
      "format": "atom",
      "itemCount": 10,
      "bytes": 252978,
      "latest": "2026-10-06T00:00:00Z",
      "method": "本机 urllib 实际 HTTP 抓取并用 ElementTree 解析；精选文章用 Exa 阅读原站正文"
    }
  }
];
export const EXCLUDED_FEEDS = [
  {
    "name": "Aider blog",
    "feedUrl": "https://aider.chat/feed.xml",
    "reason": "真实可解析 10 条，但最新为 2025-05-08；有经典工程文，本轮活跃精选优先当前仍写一手实践的作者。"
  },
  {
    "name": "Tabby blog",
    "feedUrl": "https://tabby.tabbyml.com/blog/rss.xml",
    "reason": "真实可解析 17 条，最新 2024-07-09，已长期未更新。"
  },
  {
    "name": "Peter Steinberger",
    "feedUrl": "https://steipete.me/rss.xml",
    "reason": "真实可解析 107 条，最新 2026-02-15；本轮没有把作者的历史 iOS/AI 混合全站源当作默认精选。可日后逐篇补选技术文章。"
  },
  {
    "name": "Amp news",
    "feedUrl": "https://ampcode.com/news.rss",
    "reason": "真实可解析 167 条且更新至 2026-10-06，但多为产品/模型/界面公告；技术 notes 无独立有效 RSS，/notes.rss 返回 HTML，本轮不以公告填充。"
  },
  {
    "name": "Cursor Blog RSS",
    "feedUrl": "https://cursor.com/blog/rss.xml",
    "reason": "实际 HTTP 404，原站页面没有发现原生 RSS alternate 链接。"
  },
  {
    "name": "OpenHands Blog RSS",
    "feedUrl": "https://openhands.dev/blog/rss.xml",
    "reason": "实际 HTTP 404，旧 www.all-hands.dev/blog/rss.xml 同为 404。"
  },
  {
    "name": "Simon Willison 全站/标签",
    "feedUrl": "https://simonwillison.net/atom/everything/",
    "reason": "高质量作者但已经属于正涛精选；避免把同一批内容复制进新方向，保留现有订阅归属。"
  },
  {
    "name": "Geoffrey Huntley 全站",
    "feedUrl": "https://ghuntley.com/rss/",
    "reason": "真实可解析且更新至 2026-10-07，近期兼有行业观点和一般工具随笔；本轮优先含具体代码或验证材料的文章，不靠作者知名度凑数。"
  },
  {
    "name": "观点文与泛上下文教程",
    "feedUrl": "",
    "reason": "已读 Boris Context engineering、Armin Fast and Hard Code / Latent Powers，但实作编程证据密度低于本次所选；不加入首批精选。"
  },
  {
    "name": "Armin What is Codemode",
    "feedUrl": "https://lucumr.pocoo.org/feed.atom",
    "reason": "有实质 harness 工程内容，但图像生成示例占据独立章节；本轮为了保持纯文本编程范围没有收录。"
  }
];
