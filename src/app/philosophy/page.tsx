import { principles, fundManifesto } from "@/data/philosophy";
import { companyHistories } from "@/data/history";
import Link from "next/link";

export default function PhilosophyPage() {
  return (
    <div className="space-y-20">
      {/* Header */}
      <section className="text-center">
        <div className="mb-4 text-5xl">🧭</div>
        <h1 className="mb-3 text-3xl font-bold tracking-tight text-stone-900">
          投资哲学
        </h1>
        <p className="mx-auto max-w-lg text-base text-stone-600">
          每一个数字背后，都有一个为什么。
        </p>
      </section>

      {/* Manifesto */}
      <section className="mx-auto max-w-2xl rounded-2xl border border-stone-200 bg-white p-8 text-center">
        <div className="mb-4 text-4xl">📜</div>
        <p className="whitespace-pre-line text-base leading-relaxed text-stone-700 italic">
          {fundManifesto}
        </p>
      </section>

      {/* Detailed principles */}
      <section className="space-y-10">
        {principles.map((p, i) => (
          <div
            key={p.title}
            className="rounded-2xl border border-stone-200 bg-white p-8"
          >
            <div className="mb-6 flex items-center gap-4">
              <div className="flex h-12 w-12 items-center justify-center rounded-full bg-amber-100 text-2xl">
                {p.icon}
              </div>
              <div>
                <span className="text-xs text-stone-400">
                  核心理念 {i + 1} / {principles.length}
                </span>
                <h2 className="text-xl font-semibold text-stone-900">
                  {p.title}
                </h2>
                <p className="text-sm text-amber-700">{p.subtitle}</p>
              </div>
            </div>
            <p className="mb-6 text-base leading-relaxed text-stone-600">
              {p.content}
            </p>
            {p.analogy && (
              <div className="rounded-xl border border-amber-200 bg-amber-50 p-5">
                <span className="mb-1 block text-xs font-semibold text-amber-700">
                  💡 说给家人听
                </span>
                <p className="text-sm leading-relaxed text-amber-900">
                  {p.analogy}
                </p>
              </div>
            )}
          </div>
        ))}
      </section>

      {/* 投资案例：从历史看逻辑 */}
      <section>
        <h2 className="mb-1 text-center text-2xl font-semibold text-stone-800">
          📖 从历史看逻辑
        </h2>
        <p className="mb-8 text-center text-sm text-stone-500">
          每一笔投资背后，都有十年以上的观察
        </p>
        <div className="space-y-6">
          {companyHistories.slice(0, 6).map((ch) => (
            <div key={ch.name} className="rounded-2xl border border-stone-200 bg-white p-6">
              <div className="mb-3 flex items-baseline justify-between">
                <h3 className="text-lg font-semibold text-stone-900">{ch.name}</h3>
                {ch.ticker && (
                  <span className="rounded bg-stone-100 px-2 py-0.5 text-xs text-stone-500">
                    {ch.ticker}
                  </span>
                )}
              </div>
              <p className="mb-4 text-xs font-medium text-amber-700">{ch.growthPath}</p>
              <div className="space-y-2">
                {ch.milestones.slice(-4).map((m) => (
                  <div key={m.year} className="flex gap-3 text-sm">
                    <span className="shrink-0 w-12 text-xs font-bold text-amber-600">{m.year}</span>
                    <div>
                      <p className="text-stone-700">{m.event}</p>
                      <p className="text-xs text-stone-400">{m.significance}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* 人力资本叙事 */}
      <section className="rounded-2xl border border-emerald-200 bg-emerald-50/60 p-8 text-center">
        <div className="mb-3 text-4xl">🌱</div>
        <h2 className="mb-4 text-xl font-semibold text-stone-800">
          为什么人力资本是第一重仓？
        </h2>
        <div className="mx-auto max-w-xl space-y-3 text-sm leading-relaxed text-stone-600">
          <p>
            NVIDIA 从 2006 到 2026 年涨了 500 倍。但如果你 2006 年加入 NVIDIA，你的期权价值
            可能远超 500 倍——因为你是在风暴眼之中。
          </p>
          <p>
            一家万亿公司，早期员工的回报不是线性增长的。你在正确的时间、正确的地点做了
            正确的选择——这个选择的价值，无法用任何 K 线图衡量。
          </p>
          <p className="text-base font-medium text-emerald-800">
            投公司最多获得市场回报，投人是获得创造市场的回报。
          </p>
        </div>
      </section>

      {/* Timeline */}
      <section className="rounded-2xl border border-stone-200 bg-white p-8">
        <h2 className="mb-6 text-center text-xl font-semibold text-stone-900">
          ⏳ 十年验证框架
        </h2>
        <div className="relative">
          <div className="absolute left-6 top-0 h-full w-0.5 bg-amber-200 sm:left-1/2 sm:-translate-x-px" />
          {[
            {
              year: "2026",
              title: "方案定案",
              desc: "双轨制方案落地，DCA 模拟盘启动。所有预测和目标写入 investment-tracker.json，锚定 2036 年首次验证。",
              side: "left" as const,
            },
            {
              year: "2036",
              title: "第一个验证节点",
              desc: "10 年回顾——13 家万亿级公司市值预测校验、加密货币 ETF 分类状态追踪、DCA 定投策略效果评估。",
              side: "right" as const,
            },
            {
              year: "2046",
              title: "第二个验证节点",
              desc: "20 年全景评估——人力资本回报 vs 金融资产回报对比、家族基金长期框架的全面复盘。那时候翁一周已经 20 岁了。",
              side: "left" as const,
            },
          ].map((m) => (
            <div
              key={m.year}
              className={`relative mb-8 pl-16 sm:mb-12 sm:w-1/2 sm:pl-0 ${
                m.side === "right"
                  ? "sm:ml-auto sm:pl-8"
                  : "sm:pr-8 sm:text-right"
              }`}
            >
              <div className="absolute left-4 top-1 h-4 w-4 rounded-full border-2 border-amber-500 bg-white sm:left-auto sm:right-0 sm:translate-x-1/2" />
              <div className="rounded-xl border border-stone-200 bg-stone-50 p-4">
                <span className="text-sm font-bold text-amber-700">{m.year}</span>
                <h3 className="text-base font-semibold text-stone-900">{m.title}</h3>
                <p className="mt-1 text-sm leading-relaxed text-stone-500">{m.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      <div className="text-center">
        <Link
          href="/portfolio"
          className="rounded-xl bg-amber-600 px-8 py-3 text-sm font-medium text-white transition-colors hover:bg-amber-700"
        >
          查看配置详情 →
        </Link>
      </div>
    </div>
  );
}
