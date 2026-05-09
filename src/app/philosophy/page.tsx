import { principles, fundManifesto } from "@/data/philosophy";

export default function PhilosophyPage() {
  return (
    <div className="space-y-16">
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

      {/* Timeline */}
      <section className="rounded-2xl border border-stone-200 bg-white p-8">
        <h2 className="mb-6 text-center text-xl font-semibold text-stone-900">
          ⏳ 十年验证框架
        </h2>
        <div className="relative">
          {/* Timeline line */}
          <div className="absolute left-6 top-0 h-full w-0.5 bg-amber-200 sm:left-1/2 sm:-translate-x-px" />

          {[
            {
              year: "2026",
              title: "方案定案",
              desc: "双轨制方案落地，DCA 模拟盘启动。所有预测和目标写入 investment-tracker.json，锚定 2036 年首次验证。",
              side: "left",
            },
            {
              year: "2036",
              title: "第一个验证节点",
              desc: "10 年回顾——13 家万亿级公司市值预测校验、加密货币 ETF 分类状态追踪、DCA 定投策略效果评估。",
              side: "right",
            },
            {
              year: "2046",
              title: "第二个验证节点",
              desc: "20 年全景评估——人力资本回报 vs 金融资产回报对比、家族基金长期框架的全面复盘。",
              side: "left",
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
              {/* Dot */}
              <div className="absolute left-4 top-1 h-4 w-4 rounded-full border-2 border-amber-500 bg-white sm:left-auto sm:right-0 sm:translate-x-1/2" />
              <div className="rounded-xl border border-stone-200 bg-stone-50 p-4">
                <span className="text-sm font-bold text-amber-700">
                  {m.year}
                </span>
                <h3 className="text-base font-semibold text-stone-900">
                  {m.title}
                </h3>
                <p className="mt-1 text-sm leading-relaxed text-stone-500">
                  {m.desc}
                </p>
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
