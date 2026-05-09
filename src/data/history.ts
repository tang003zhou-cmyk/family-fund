export interface CompanyHistory {
  name: string;
  ticker?: string;
  milestones: { year: string; event: string; significance: string }[];
  growthPath: string;
}

export const companyHistories: CompanyHistory[] = [
  {
    name: "NVIDIA",
    ticker: "NVDA",
    milestones: [
      { year: "1993", event: "黄仁勋、Chris Malachowsky、Curtis Priem 在 Denny's 餐厅创业", significance: "三个朋友写下商业计划" },
      { year: "1999", event: "IPO + 发布 GeForce 256（第一个 GPU）", significance: "定义 GPU 这个词" },
      { year: "2006", event: "CUDA 架构发布", significance: "⭐ GPU 从游戏卡 → 通用计算平台" },
      { year: "2012", event: "AlexNet 用 2 块 GTX 580 训练", significance: "GPU 成为 AI 训练引擎" },
      { year: "2022", event: "ChatGPT 在万块 A100 上训练", significance: "H100 一卡难求" },
      { year: "2023", event: "市值破 $1 万亿", significance: "加入万亿俱乐部" },
      { year: "2024", event: "Blackwell GPU 发布，性能比 H100 提升 30 倍", significance: "史上最大单芯片" },
      { year: "2026", event: "市值 $5.05 万亿，全球第一", significance: "芯片公司登顶世界之巅" },
    ],
    growthPath: "2006年($100亿) → 2026年($5.05万亿) = 500倍增长",
  },
  {
    name: "Alphabet (Google)",
    ticker: "GOOGL",
    milestones: [
      { year: "1998", event: "Larry Page & Sergey Brin 车库创业", significance: "PageRank 颠覆搜索" },
      { year: "2005", event: "收购 Android ($5000万)", significance: "⭐ 史上最佳收购" },
      { year: "2006", event: "收购 YouTube ($16.5亿)", significance: "视频平台之王" },
      { year: "2014", event: "收购 DeepMind ($5亿)", significance: "⭐ AI 最大赌注" },
      { year: "2020", event: "市值破 $1 万亿", significance: "搜索+广告+云三重驱动" },
      { year: "2023", event: "Gemini 发布，多模态大模型", significance: "对标 GPT-4" },
      { year: "2026", event: "市值 $4.79 万亿", significance: "AI 搜索重塑中" },
    ],
    growthPath: "2006年($1500亿) → 2026年($4.79万亿) = 32倍增长",
  },
  {
    name: "Microsoft",
    ticker: "MSFT",
    milestones: [
      { year: "2014", event: "Satya Nadella 任 CEO", significance: "⭐ 公司命运转折" },
      { year: "2018", event: "收购 GitHub ($75亿)", significance: "开发者社区入口" },
      { year: "2023", event: "投资 OpenAI ($100亿+)", significance: "⭐ AI 时代最大赌注" },
      { year: "2026", event: "市值 $3.08 万亿", significance: "企业 AI 操作系统" },
    ],
    growthPath: "2006年($2800亿) → 2026年($3.08万亿) = 11倍增长",
  },
  {
    name: "Amazon",
    ticker: "AMZN",
    milestones: [
      { year: "2006", event: "AWS 正式上线 (S3, EC2)", significance: "⭐ 云计算产业诞生" },
      { year: "2015", event: "AWS 独立报表，年收入 $78 亿", significance: "云业务盈利惊人" },
      { year: "2026", event: "市值 $2.96 万亿", significance: "AWS + 电商，双引擎" },
    ],
    growthPath: "2006年($150亿) → 2026年($2.96万亿) = 200倍增长",
  },
  {
    name: "AMD",
    ticker: "AMD",
    milestones: [
      { year: "2014", event: "Lisa Su 成为 CEO", significance: "⭐ AMD 命运的转折点" },
      { year: "2017", event: "Zen 架构 (Ryzen) 发布", significance: "史诗级回归" },
      { year: "2026", event: "市值 $6870 亿，逼近万亿", significance: "AI 芯片第二极" },
    ],
    growthPath: "2015年底($20亿) → 2026年($6870亿) = 340倍增长",
  },
  {
    name: "Tesla 特斯拉",
    ticker: "TSLA",
    milestones: [
      { year: "2012", event: "Model S 发布", significance: "全球首款豪华电动轿车" },
      { year: "2019", event: "上海超级工厂 11 个月建成", significance: "中国速度" },
      { year: "2021", event: "市值破 $1 万亿", significance: "超越丰田成为全球最大车企" },
      { year: "2024", event: "Cybercab (Robotaxi) 发布", significance: "无方向盘/踏板" },
      { year: "2026", event: "市值 $1.50 万亿", significance: "Robotaxi 运营扩大" },
    ],
    growthPath: "2010年IPO($20亿) → 2026年($1.50万亿) = 750倍增长",
  },
  {
    name: "台积电 TSMC",
    ticker: "TSM",
    milestones: [
      { year: "2018", event: "7nm 量产（苹果 A12）", significance: "制程之王" },
      { year: "2020", event: "5nm 量产（苹果 M1）", significance: "全球唯一" },
      { year: "2026", event: "市值 $2.18 万亿", significance: "AI 芯片 100% 依赖" },
    ],
    growthPath: "2006年($500亿) → 2026年($2.18万亿) = 43倍增长",
  },
  {
    name: "Intel",
    ticker: "INTC",
    milestones: [
      { year: "2020", event: "苹果弃用 Intel 转自研 M1", significance: "标志性溃败" },
      { year: "2021", event: "Pat Gelsinger 回任，IDM 2.0", significance: "代工转型" },
      { year: "2026", event: "市值 $5680 亿", significance: "反弹中" },
    ],
    growthPath: "从芯片之王到失去技术领先，正在转型",
  },
  {
    name: "Meta (Facebook)",
    ticker: "META",
    milestones: [
      { year: "2021", event: "改名 Meta，All-in 元宇宙", significance: "最激进赌注" },
      { year: "2023", event: "Llama 2 开源 + Threads", significance: "AI 开源战略" },
      { year: "2026", event: "市值 $1.56 万亿", significance: "从低点反弹 6 倍" },
    ],
    growthPath: "2022年暴跌70% → AI + 元宇宙回稳",
  },
  {
    name: "Apple",
    ticker: "AAPL",
    milestones: [
      { year: "2007", event: "第一代 iPhone 发布", significance: "⭐ 定义智能手机" },
      { year: "2020", event: "M1 芯片发布（告别 Intel）", significance: "Apple Silicon 革命" },
      { year: "2026", event: "市值 $4.22 万亿", significance: "服务收入主导" },
    ],
    growthPath: "2006年($700亿) → 2026年($4.22万亿) = 60倍增长",
  },
];

export const trillionClub = [
  { rank: 1, name: "NVIDIA", ticker: "NVDA", cap: 5.051, note: "AI 算力绝对龙头" },
  { rank: 2, name: "Alphabet (Google)", ticker: "GOOG", cap: 4.787, note: "AI 搜索重塑中" },
  { rank: 3, name: "Apple", ticker: "AAPL", cap: 4.222, note: "服务收入主导" },
  { rank: 4, name: "Microsoft", ticker: "MSFT", cap: 3.075, note: "企业 AI 操作系统" },
  { rank: 5, name: "Amazon", ticker: "AMZN", cap: 2.958, note: "AWS + 电商双引擎" },
  { rank: 6, name: "台积电", ticker: "TSM", cap: 2.175, note: "AI 芯片 100% 依赖" },
  { rank: 7, name: "Broadcom", ticker: "AVGO", cap: 2.014, note: "AI 网络芯片" },
  { rank: 8, name: "沙特阿美", ticker: "2222.SR", cap: 1.741, note: "能源" },
  { rank: 9, name: "Meta", ticker: "META", cap: 1.555, note: "AI + 元宇宙" },
  { rank: 10, name: "特斯拉", ticker: "TSLA", cap: 1.497, note: "Robotaxi 运营扩大" },
  { rank: 11, name: "三星", ticker: "005930.KS", cap: 1.206, note: "半导体 + 消费电子" },
  { rank: 12, name: "沃尔玛", ticker: "WMT", cap: 1.036, note: "零售之王" },
  { rank: 13, name: "巴郡", ticker: "BRK-B", cap: 1.013, note: "巴菲特旗舰" },
];

export const nearTrillion = [
  { name: "AMD", cap: 687, note: "AI 芯片第二极" },
  { name: "台积电", cap: 840, note: "Eli Lilly" },
  { name: "JPMorgan", cap: 844, note: "银行巨头" },
  { name: "SK Hynix", cap: 784, note: "HBM 内存" },
  { name: "腾讯", cap: 551, note: "中国互联网之王" },
  { name: "Oracle", cap: 558, note: "企业云" },
  { name: "ASML", cap: 595, note: "光刻机垄断" },
  { name: "Intel", cap: 568, note: "代工转型" },
  { name: "Visa", cap: 606, note: "支付网络" },
];
