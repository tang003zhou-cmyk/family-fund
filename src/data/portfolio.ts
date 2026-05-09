export interface Holding {
  name: string;
  ticker?: string;
  category: "etf" | "equity" | "crypto" | "human_capital";
  allocation: number; // percentage of 60% selected bucket
  description: string;
  thesis: string;
  conviction: "core" | "satellite" | "exploratory";
}

export interface EtfBucket {
  name: string;
  allocation: number; // percentage of 40% ETF bucket
  description: string;
  regions: string[];
}

export const etfAllocation: EtfBucket[] = [
  {
    name: "AI 主题 ETF",
    allocation: 30,
    description: "押注人工智能全产业链——从芯片到应用，从训练到推理",
    regions: ["美国", "全球"],
  },
  {
    name: "科技宽基 ETF",
    allocation: 30,
    description: "纳斯达克100 / 标普500科技板块，锚定全球科技增长",
    regions: ["美国"],
  },
  {
    name: "黄金 ETF",
    allocation: 20,
    description: "大类资产配置中的避险锚点，对抗通胀与不确定性",
    regions: ["全球"],
  },
  {
    name: "新兴市场 ETF",
    allocation: 20,
    description: "覆盖中国及亚洲高成长市场，把握结构性增长机会",
    regions: ["中国", "亚洲"],
  },
];

export const selectedHoldings: Holding[] = [
  {
    name: "NVIDIA",
    ticker: "NVDA",
    category: "equity",
    allocation: 15,
    description: "AI算力基础设施的绝对龙头",
    thesis:
      "40%年复合增长的量化信念——GPU架构护城河+AI训练推理的刚性需求，未来十年计算架构的中心",
    conviction: "core",
  },
  {
    name: "AMD",
    ticker: "AMD",
    category: "equity",
    allocation: 10,
    description: "CPU+GPU双线追赶者",
    thesis:
      "芯片赛道的分散配置——MI系列AI芯片正缩小差距，CPU份额持续扩大，双线驱动增长",
    conviction: "core",
  },
  {
    name: "Alphabet (Google)",
    ticker: "GOOGL",
    category: "equity",
    allocation: 10,
    description: "AI原生时代的搜索与云巨头",
    thesis:
      "Gemini大模型+TPU芯片+搜索护城河的三重叙事，AI Native架构下全球最大受益者之一",
    conviction: "core",
  },
  {
    name: "特斯拉",
    ticker: "TSLA",
    category: "equity",
    allocation: 8,
    description: "能源+AI+机器人的三线叙事",
    thesis:
      "FSD自动驾驶+Optimus人形机器人+储能业务的交叉增长，从汽车公司进化为AI硬件平台",
    conviction: "satellite",
  },
  {
    name: "字节跳动",
    ticker: "Bytedance",
    category: "equity",
    allocation: 7,
    description: "全球最大未上市科技巨头",
    thesis:
      "TikTok全球化+推荐算法壁垒+AI布局，跨中美市场的超长期增长标的",
    conviction: "satellite",
  },
  {
    name: "国内AI/机器人公司",
    category: "human_capital",
    allocation: 15,
    description: "大模型 + 人形机器人赛道",
    thesis:
      "DeepSeek/月之暗面/智谱为代表的大模型公司 + 宇树/星动纪元为代表的机器人公司，中美AI竞赛的中国侧押注",
    conviction: "satellite",
  },
  {
    name: "年轻人成长基金",
    category: "human_capital",
    allocation: 25,
    description: "人力资本——最好的投资",
    thesis:
      "支持年轻人进入AI/机器人/生物科技高成长赛道。十年千万起步的人才投资，回报预期超过任何金融资产",
    conviction: "core",
  },
  {
    name: "BTC / ETH / SOL",
    category: "crypto",
    allocation: 10,
    description: "数字资产核心配置",
    thesis:
      "BTC作为数字黄金、ETH作为智能合约平台、SOL作为高性能公链，构成加密资产的三足配置",
    conviction: "satellite",
  },
];

export const trackerMilestones = [
  { year: 2026, label: "双轨制方案定案 · DCA模拟盘启动" },
  { year: 2036, label: "第一个十年验证节点 · 万亿公司市值预测校验" },
  { year: 2046, label: "第二个十年验证节点 · 长期框架全景评估" },
];

export const dcaStatus = {
  startDate: "2026-05",
  plannedMonths: 4,
  completedMonths: 0,
  status: "模拟盘阶段" as const,
};
