import type { Dictionary } from "./types";

const zhHans: Dictionary = {
  nav: {
    appStore: "App Store",
    download: "下载",
  },
  hero: {
    eyebrow: "音感 · 训练 · 2026",
    seoHeadline: "Absolute Pitch Trainer — iOS 绝对音感与听音训练应用",
    headline: ["听音，", "说出音名。"],
    sub: "为从未放弃绝对音感的成年音乐人打造的练耳应用。九个难度等级、每日挑战，以及一套你真正能坚持的、有科学依据的训练方法。",
    cta: "在 App Store 下载",
    secondary: "了解如何使用",
    badge: "iPhone · iOS 17+",
  },
  features: {
    eyebrow: "为真正的耳朵而设计",
    title: "你需要的一切。多余的一概没有。",
    list: [
      {
        icon: "levels",
        title: "九个难度等级",
        body: "从面向初学者的三个彩色音符，到面向认真学习者的完整和声进行与旋律。",
      },
      {
        icon: "ear",
        title: "两种游戏模式",
        body: "练习模式没有压力。测验模式有计时、计分和排行。",
      },
      {
        icon: "flame",
        title: "热度连击",
        body: "连续答对足够多题，测验就会燃起。每日连胜和测验内连击并肩前进。",
      },
      {
        icon: "calendar",
        title: "每日挑战",
        body: "每天一次新的测验，让习惯和日历都保持活力。",
      },
      {
        icon: "chart",
        title: "你真的会读的统计",
        body: "7天、30天、90天和整年的正确率曲线。每个音高类别都有掌握度环。",
      },
      {
        icon: "trophy",
        title: "Game Center 排行榜",
        body: "与全球玩家比较生涯经验和最佳成绩。从普通到传奇的成就体系。",
      },
      {
        icon: "tuning",
        title: "参考音叉",
        body: "轻点即可获得干净的 C-D-E-F-G-A-B 参考音阶。纯净的音高合成，没有混浊的波形。",
      },
      {
        icon: "palette",
        title: "四套手工调校的配色",
        body: "Tube Glow、Jukebox Chrome、Reel-to-Reel、Rainbow Pride。还有可替换的应用图标。",
      },
      {
        icon: "shield",
        title: "天生注重隐私",
        body: "无账号、无追踪、无遥测。你的练习记录只留在你的 iPhone 上。",
      },
    ],
  },
  screens: {
    eyebrow: "走进来看看",
    title: "像乐器一样的设计。",
    list: [
      { label: "训练你的耳朵", headline: "听音， / 说出音名。", file: "01-hero" },
      { label: "热度连击", headline: "进入 / 心流。", file: "02-onfire" },
      { label: "你的进步", headline: "每天 / 每个音 / 更敏锐。", file: "03-progress" },
      { label: "升级排名", headline: "升级。 / 守住连胜。", file: "04-rank" },
    ],
  },
  science: {
    eyebrow: "科学",
    title: "成年人的耳朵也能继续学习。",
    body: "民间智慧说，绝对音感是“与生俱来或永远没有”。这只是故事的一半。儿童可以在童年的关键期发展出完整的绝对音感——尤其是配合早期的音乐训练。但成年人的耳朵也在继续学习：专注的、反复的练习仍会在任何年龄锐化对音名的精确识别。我们把这款应用建立在对成年大脑有效的那部分科学之上。",
    pull: "开始永远不晚。",
  },
  cta: {
    eyebrow: "你准备好就开始",
    title: "训练音乐人梦寐以求的那种耳朵。",
    body: "免费开始。高级版解锁更高难度等级、进阶统计和专属应用图标。",
    button: "在 App Store 下载",
  },
  faq: {
    eyebrow: "常见问题",
    title: "关于音感训练的诚实回答。",
    items: [
      {
        q: "成年人真的能学会绝对音感吗？",
        a: "在某种程度上可以，关键在于把这话说清楚。完整的古典式绝对音感——在没有任何参照的情况下说出听到的任何一个音——在童年的关键期发展得最稳定。但成年人的耳朵在专注、重复的练习下会持续进步：识别更快、相近音的错误更少，在你实际训练的范围内有真正的进步。我们把这款 App 建立在对成年大脑确实有效的那部分科学之上。",
      },
      {
        q: "绝对音感和完美音感有什么区别？",
        a: "是同一回事。\"绝对音感\"是学术术语，\"完美音感\"是大多数人搜索时使用的说法。两者都指：不需要参考音就能说出某个音的音名。",
      },
      {
        q: "和相对音感或音程训练 App 有什么不同？",
        a: "大多数听音训练 App 训练的是音程——两个音之间的距离——也就是相对音感。这款 App 从最基础训练绝对音感：从三个有颜色提示的音开始，经过 9 个等级，逐步进入完整的和弦进行和旋律。音程会在较高等级出现，但根基是辨识单独的音。",
      },
      {
        q: "多久能看到效果？",
        a: "大多数人在开始每日练习的 7 天内就能看到正确率曲线开始上升。这就是统计页面会展示 7 天、30 天、90 天和一整年正确率曲线的原因——变化在日间看很小，但在周间就非常明显。",
      },
      {
        q: "这款 App 免费吗？",
        a: "是的——核心训练永远免费。高级版解锁更高难度等级（和弦、旋律）、进阶统计和专属图标。没有账号、没有追踪、没有广告。",
      },
    ],
  },
  consent: {
    body: "我们使用 Vercel 的匿名访问统计来了解访客访问了哪些页面。无 Cookie，无跨站追踪。详见",
    accept: "接受",
    decline: "拒绝",
  },
  footer: {
    tagline: "听音，说出音名。",
    privacy: "隐私政策",
    legalNotice: "法律声明",
    copyright: "© 2026 Nicolai Emig。与 Apple Inc. 无关联。",
    appBy: "Nicolai Emig 出品",
    languageLabel: "语言",
    themeLabel: "主题",
  },
};

export default zhHans;
