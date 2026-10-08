# AI编程精选阅读清单

精选日期：2026-10-09。6 篇原站技术文章，按原文时间倒序；基础文章不伪装成新消息。摘要与推荐理由为原创，完整内容请访问原站。

## 1. [Astra for Coding: Why Are We Doing This Again?](https://lucumr.pocoo.org/2026/9/7/astra-why/)

来源：Armin Ronacher · 原文日期：2026-09-07

一次长时自主改造 CPython 的失败复盘，列出字符串拼接改代码、工具调用风格和大量产出仍不可用的具体问题。

**精选理由：** 用真实生成代码提醒读者：持续执行与工程质量是两个条件；这是个人负面案例，应结合任务与 harness 阅读。

## 2. [I vibe-coded a C compiler that can build SQLite](https://blog.fsck.com/2026/08/21/i-vibe-coded-a-c-compiler/)

来源：Jesse Vincent / Massively Parallel Procrastination · 原文日期：2026-08-21

让 agent 长时构建 Swift 实现的 ARM64 C 编译器，以 SQLite 的编译与基本读写验证推进，并提供对应代码 checkpoint。

**精选理由：** 有可追溯代码和真实运行目标；作者明确仍缺许多特性，只通过基本 smoke test，不能当作完整 C 标准兼容证明。

## 3. [The Therapist Pattern](https://blog.fsck.com/2026/07/20/the-therapist-pattern/)

来源：Jesse Vincent / Massively Parallel Procrastination · 原文日期：2026-07-20

从编码 agent 忽略 PR 规范的实际故障出发，把长期行为规则的写权限交给专门子 agent，讨论可追踪的自修改流程。

**精选理由：** 给出具体失败、权限归属和提示词持久化位置；值得参考架构思路，但作者也说明尚未完成系统评测，不能视作已证实方案。

## 4. [How I Use Claude Code](https://boristane.com/blog/how-i-use-claude-code/)

来源：Boris Tane · 原文日期：2026-02-10

先把代码理解写成文档，再反复批注实施计划，最后按任务执行；解释如何把已有架构、业务约束与参考实现传给编码 agent。

**精选理由：** 方法具体到可审阅文件与纠错循环，适合复杂项目；取其个人实践经验，不将作者对其他流程的强评价当成通用结论。

## 5. [packnplay: Making it easy to run coding agents in containers](https://blog.fsck.com/2025/12/10/packnplay/)

来源：Jesse Vincent / Massively Parallel Procrastination · 原文日期：2025-12-10

介绍作者为编码 agent 构建的临时开发容器，讨论源码同路径挂载、断线重连、worktree 和跨容器配置/凭据冲突。

**精选理由：** 包含真实实现难点与开源工具，能帮助把并行 agent 放进隔离工作环境；其容器使用方式不等于通用安全保证。

## 6. [Superpowers: How I'm using coding agents in October 2025](https://blog.fsck.com/2025/10/09/superpowers/)

来源：Jesse Vincent / Massively Parallel Procrastination · 原文日期：2025-10-09

讲清 brainstorm、plan、worktree、子 agent 实现与代码审查如何串起来，并用带时间压力的场景测试技能是否真的被执行。

**精选理由：** 是技能工作流作者的机制说明，尤其重视真实情景验证胜过问答测验；安装指令对应当时版本，阅读时取架构而非直接照搬旧命令。
