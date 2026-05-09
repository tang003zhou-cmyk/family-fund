import EtfPieChart, { SelectedPieChart } from "@/components/AllocationChart";
import HoldingCard from "@/components/HoldingCard";
import { etfAllocation, selectedHoldings, dcaStatus } from "@/data/portfolio";

export default function PortfolioPage() {
  return (
    <div className="space-y-16">
      {/* Header */}
      <section className="text-center">
        <div className="mb-4 text-5xl">📊</div>
        <h1 className="mb-3 text-3xl font-bold tracking-tight text-stone-900">
          配置展示
        </h1>
        <p className="mx-auto max-w-lg text-base text-stone-600">
          40% 安心篮子 + 60% 进取标的 = 两条腿走路
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
        <div className="flex h-10 w-full overflow-hidden rounded-full">
          <div
            className="flex items-center justify-center bg-blue-500 text-xs font-medium text-white"
            style={{ width: "40%" }}
          >
            40% ETF
          </div>
          <div
            className="flex items-center justify-center bg-amber-500 text-xs font-medium text-white"
            style={{ width: "60%" }}
          >
            60% 精选
          </div>
        </div>
        <div className="mt-3 flex justify-between text-xs text-stone-400">
          <span>🛡️ 安心篮子 · 被动配置</span>
          <span>🚀 进取标的 · 主动精选</span>
        </div>
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
              <div
                key={e.name}
                className="rounded-xl border border-stone-200 bg-white p-4"
              >
                <div className="mb-1 flex items-center justify-between">
                  <h3 className="font-medium text-stone-900">{e.name}</h3>
                  <span className="text-sm font-semibold text-blue-600">
                    {e.allocation}%
                  </span>
                </div>
                <p className="text-xs text-stone-500">{e.description}</p>
                <div className="mt-2 flex gap-1">
                  {e.regions.map((r) => (
                    <span
                      key={r}
                      className="rounded-full bg-blue-50 px-2 py-0.5 text-xs text-blue-700"
                    >
                      {r}
                    </span>
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
          <div className="space-y-1 text-sm text-stone-500">
            <p className="font-medium text-stone-700">配置要点说明：</p>
            <ul className="list-inside list-disc space-y-1">
              <li>
                <strong className="text-stone-800">人力资本（25%）</strong>——年轻人加入AI/机器人高成长赛道，
                十年回报预期超过任何金融资产
              </li>
              <li>
                <strong className="text-stone-800">核心仓位（35%）</strong>——NVIDIA + AMD + Google，
                半导体+AI 确定性强赛道
              </li>
              <li>
                <strong className="text-stone-800">加密资产（10%）</strong>——BTC/ETH/SOL 三足配置，
                数字资产长期布局
              </li>
              <li>
                <strong className="text-stone-800">探索仓位（30%）</strong>——特斯拉/字节跳动/国内AI机器人，
                高赔率但高不确定性
              </li>
            </ul>
          </div>
        </div>

        <div className="grid gap-4 sm:grid-cols-2">
          {selectedHoldings.map((h) => (
            <HoldingCard key={h.name} holding={h} />
          ))}
        </div>
      </section>

      {/* Milestones */}
      <section className="rounded-2xl border border-stone-200 bg-white p-6">
        <h2 className="mb-4 text-center text-lg font-semibold text-stone-900">
          🎯 追踪里程碑
        </h2>
        <div className="divide-y divide-stone-100">
          <div className="flex items-center gap-3 py-2 text-sm">
            <span className="w-16 shrink-0 rounded bg-emerald-100 px-2 py-0.5 text-center text-xs font-medium text-emerald-800">
              当前
            </span>
            <span className="text-stone-600">
              DCA 模拟盘进行中（计划 4 个月）
            </span>
          </div>
          <div className="flex items-center gap-3 py-2 text-sm">
            <span className="w-16 shrink-0 rounded bg-amber-100 px-2 py-0.5 text-center text-xs font-medium text-amber-800">
              2036
            </span>
            <span className="text-stone-600">
              第一个十年验证节点——市值预测校验
            </span>
          </div>
          <div className="flex items-center gap-3 py-2 text-sm">
            <span className="w-16 shrink-0 rounded bg-amber-100 px-2 py-0.5 text-center text-xs font-medium text-amber-800">
              2046
            </span>
            <span className="text-stone-600">
              第二个十年验证节点——长期框架全景评估
            </span>
          </div>
        </div>
      </section>
    </div>
  );
}
