import EtfPieChart, { SelectedPieChart } from "@/components/AllocationChart";
import HoldingCard from "@/components/HoldingCard";
import CompanyMilestone from "@/components/CompanyMilestone";
import { etfAllocation, selectedHoldings, dcaStatus } from "@/data/portfolio";
import { companyHistories, trillionClub, nearTrillion } from "@/data/history";

export default function PortfolioPage() {
  return (
    <div className="space-y-20">
      {/* Header */}
      <section className="text-center">
        <div className="mb-4 text-5xl">📊</div>
        <h1 className="mb-3 text-3xl font-bold tracking-tight text-stone-900">
          配置展示
        </h1>
        <p className="mx-auto max-w-lg text-base text-stone-600">
          40% 安心篮子 + 60% 进取标的 = 两条腿走路，稳中求进
        </p>
      </section>

      {/* Dual-track summary bar */}
      <section className="rounded-2xl border border-stone-200 bg-white p-6">
        <div className="mb-4 flex items-center justify-between">
          <h2 className="text-lg font-semibold text-stone-900">双轨总览</h2>
          <div className="flex items-center gap-2">
            <span className="rounded-full bg-emerald-100 px-3 py-1 text-xs font-medium text-emerald-800">
              模拟盘
            </span>
            <span className="text-xs text-stone-400">
              启动 {dcaStatus.startDate}
            </span>
          </div>
        </div>
        <div className="flex h-12 w-full overflow-hidden rounded-full">
          <div className="flex items-center justify-center bg-blue-500 text-sm font-medium text-white" style={{ width: "40%" }}>
            ETF 40%
          </div>
          <div className="flex items-center justify-center bg-amber-500 text-sm font-medium text-white" style={{ width: "60%" }}>
            精选 60%
          </div>
        </div>
        <p className="mt-3 text-xs text-center text-stone-400">
          🛡️ 安心篮子 · 被动配置 &nbsp;&nbsp;|&nbsp;&nbsp; 🚀 进取标的 · 主动精选
        </p>
      </section>

      {/* 40% ETF Section */}
      <section>
        <h2 className="mb-1 text-2xl font-semibold text-stone-900">
          40% · 安心篮子
        </h2>
        <p className="mb-6 text-sm text-stone-500">
          一篮子 ETF 被动配置，跟随市场大势，不跑输基准
        </p>

        <div className="grid gap-8 lg:grid-cols-2">
          <div className="flex items-center justify-center rounded-2xl border border-stone-200 bg-white p-4">
            <EtfPieChart />
          </div>
          <div className="space-y-3">
            {etfAllocation.map((e) => (
              <div key={e.name} className="rounded-xl border border-stone-200 bg-white p-4">
                <div className="mb-1 flex items-center justify-between">
                  <h3 className="font-medium text-stone-900">{e.name}</h3>
                  <span className="text-sm font-semibold text-blue-600">{e.allocation}%</span>
                </div>
                <p className="text-xs text-stone-500">{e.description}</p>
                <div className="mt-2 flex gap-1.5">
                  {e.regions.map((r) => (
                    <span key={r} className="rounded-full bg-blue-50 px-2 py-0.5 text-xs text-blue-700">{r}</span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 60% Selected Section */}
      <section>
        <h2 className="mb-1 text-2xl font-semibold text-stone-900">
          60% · 进取标的
        </h2>
        <p className="mb-6 text-sm text-stone-500">
          精选主动配置，追求超额收益。人力资本是第一重仓
        </p>

        <div className="mb-8 grid gap-8 lg:grid-cols-2">
          <div className="flex items-center justify-center rounded-2xl border border-stone-200 bg-white p-4">
            <SelectedPieChart />
          </div>
          <div className="space-y-2 text-sm text-stone-500">
            <p className="font-medium text-stone-700">配置逻辑速览：</p>
            <ul className="list-inside list-disc space-y-1.5">
              <li><strong className="text-stone-800">人力资本（25%）</strong>——年轻人加入 AI/机器人高成长赛道，十年回报预期超过任何金融资产</li>
              <li><strong className="text-stone-800">核心仓位（35%）</strong>——NVIDIA + AMD + Google，半导体 + AI 确定性强赛道</li>
              <li><strong className="text-stone-800">加密资产（10%）</strong>——BTC/ETH/SOL 三足配置，数字资产长期布局</li>
              <li><strong className="text-stone-800">探索仓位（30%）</strong>——特斯拉/字节跳动/国内AI机器人，高赔率但高不确定性</li>
            </ul>
          </div>
        </div>

        <div className="grid gap-4 sm:grid-cols-2">
          {selectedHoldings.map((h) => (
            <HoldingCard key={h.name} holding={h} />
          ))}
        </div>
      </section>

      {/* 公司里程碑 */}
      <section>
        <h2 className="mb-1 text-2xl font-semibold text-stone-900">
          🏛️ 标的公司 · 关键里程碑
        </h2>
        <p className="mb-6 text-sm text-stone-500">
          每一家公司入选，背后都有十年以上的故事
        </p>
        <div className="space-y-4">
          {companyHistories.map((ch) => (
            <CompanyMilestone key={ch.name} company={ch} />
          ))}
        </div>
      </section>

      {/* 万亿俱乐部 */}
      <section className="rounded-2xl border border-stone-200 bg-white p-6">
        <h2 className="mb-1 text-center text-xl font-semibold text-stone-900">
          🌐 全球万亿俱乐部 · 2026年5月
        </h2>
        <p className="mb-6 text-center text-xs text-stone-400">
          13 家公司，合计市值约 $34 万亿
        </p>
        <div className="overflow-x-auto">
          <table className="w-full text-sm">
            <thead>
              <tr className="border-b border-stone-200 text-left text-xs text-stone-500">
                <th className="pb-2 pr-2 font-medium">#</th>
                <th className="pb-2 pr-2 font-medium">公司</th>
                <th className="pb-2 pr-2 font-medium">市值</th>
                <th className="pb-2 pr-2 font-medium">持仓</th>
                <th className="pb-2 font-medium">10年预测</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-stone-100">
              {trillionClub.map((c) => {
                const inPortfolio = ["NVIDIA", "Alphabet (Google)", "Apple", "Microsoft", "Amazon", "Meta", "特斯拉"].includes(c.name);
                return (
                  <tr key={c.rank} className="hover:bg-stone-50">
                    <td className="py-2.5 pr-2 text-xs text-stone-400">{c.rank}</td>
                    <td className="py-2.5 pr-2 font-medium text-stone-800">{c.name}</td>
                    <td className="py-2.5 pr-2 text-stone-600 whitespace-nowrap">${c.cap.toFixed(3)}T</td>
                    <td className="py-2.5 pr-2">
                      {inPortfolio ? (
                        <span className="rounded-full bg-emerald-100 px-2 py-0.5 text-xs text-emerald-700">✓</span>
                      ) : (
                        <span className="text-xs text-stone-300">—</span>
                      )}
                    </td>
                    <td className="py-2.5 text-xs text-stone-500">{c.note}</td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
      </section>

      {/* 准万亿 */}
      <section className="rounded-xl border border-stone-100 bg-stone-50 p-6">
        <h3 className="mb-3 text-center text-sm font-medium text-stone-600">
          📈 准万亿候补（{'>'}5000亿）
        </h3>
        <div className="flex flex-wrap justify-center gap-2">
          {nearTrillion.map((c) => (
            <span key={c.name} className="rounded-full border border-stone-200 bg-white px-3 py-1 text-xs text-stone-600">
              {c.name} ${c.cap}B
            </span>
          ))}
        </div>
      </section>

      {/* Milestones */}
      <section className="rounded-2xl border border-amber-200 bg-amber-50/50 p-6">
        <h2 className="mb-4 text-center text-lg font-semibold text-stone-900">
          🎯 追踪里程碑
        </h2>
        <div className="divide-y divide-amber-100">
          <div className="flex items-center gap-4 py-3">
            <span className="w-20 shrink-0 rounded bg-emerald-100 px-2 py-1 text-center text-xs font-medium text-emerald-700">当前</span>
            <p className="text-sm text-stone-600">DCA 模拟盘进行中（计划 4 个月，启动 2026-05）</p>
          </div>
          <div className="flex items-center gap-4 py-3">
            <span className="w-20 shrink-0 rounded bg-amber-100 px-2 py-1 text-center text-xs font-medium text-amber-700">2036</span>
            <p className="text-sm text-stone-600">第一个十年验证节点——13 家万亿公司市值预测校验</p>
          </div>
          <div className="flex items-center gap-4 py-3">
            <span className="w-20 shrink-0 rounded bg-amber-100 px-2 py-1 text-center text-xs font-medium text-amber-700">2046</span>
            <p className="text-sm text-stone-600">第二个十年验证节点——人力资本 vs 金融资产回报对比评估</p>
          </div>
          <div className="flex items-center gap-4 py-3">
            <span className="w-20 shrink-0 rounded bg-sky-100 px-2 py-1 text-center text-xs font-medium text-sky-700">2046+</span>
            <p className="text-sm text-stone-500">翁一周 20 岁时——他应该能读懂这份基金宣言了</p>
          </div>
        </div>
      </section>
    </div>
  );
}
