import Link from "next/link";
import { familyIntro, principles } from "@/data/philosophy";

export default function Home() {
  return (
    <div className="space-y-20">
      {/* Hero */}
      <section className="text-center">
        <div className="mb-6 text-6xl">🏮</div>
        <h1 className="mb-4 text-3xl font-bold tracking-tight text-stone-900 sm:text-4xl">
          周氏家族基金
        </h1>
        <div className="mx-auto max-w-xl">
          <p className="whitespace-pre-line text-base leading-relaxed text-stone-600">
            {familyIntro}
          </p>
        </div>
      </section>

      {/* Core pillars */}
      <section>
        <h2 className="mb-8 text-center text-2xl font-semibold text-stone-800">
          四大核心理念
        </h2>
        <div className="grid gap-6 sm:grid-cols-2">
          {principles.map((p) => (
            <div
              key={p.title}
              className="rounded-xl border border-stone-200 bg-white p-6 transition-shadow hover:shadow-lg"
            >
              <div className="mb-3 text-3xl">{p.icon}</div>
              <h3 className="mb-1 text-lg font-semibold text-stone-900">
                {p.title}
              </h3>
              <p className="mb-2 text-sm font-medium text-amber-700">
                {p.subtitle}
              </p>
              <p className="mb-3 text-sm leading-relaxed text-stone-600">
                {p.content}
              </p>
              {p.analogy && (
                <div className="rounded-lg bg-amber-50 p-3 text-xs leading-relaxed text-amber-800">
                  <span className="font-semibold">说给家人听：</span>
                  {p.analogy}
                </div>
              )}
            </div>
          ))}
        </div>
      </section>

      {/* Dual-track overview */}
      <section className="rounded-2xl border border-amber-200 bg-amber-50/50 p-8">
        <h2 className="mb-6 text-center text-2xl font-semibold text-stone-800">
          双轨制方案
        </h2>
        <div className="grid gap-6 sm:grid-cols-2">
          <div className="rounded-xl border border-amber-200 bg-white p-6">
            <div className="mb-2 text-3xl">🛡️</div>
            <h3 className="mb-2 text-lg font-semibold text-stone-900">40% 安心篮子</h3>
            <p className="mb-3 text-sm text-stone-600">一篮子 ETF 被动配置</p>
            <ul className="space-y-1 text-sm text-stone-500">
              <li className="flex items-center gap-2">
                <span className="h-1.5 w-1.5 rounded-full bg-blue-500" /> AI 主题 ETF
              </li>
              <li className="flex items-center gap-2">
                <span className="h-1.5 w-1.5 rounded-full bg-blue-400" /> 科技宽基 ETF
              </li>
              <li className="flex items-center gap-2">
                <span className="h-1.5 w-1.5 rounded-full bg-amber-400" /> 黄金 ETF
              </li>
              <li className="flex items-center gap-2">
                <span className="h-1.5 w-1.5 rounded-full bg-emerald-400" /> 新兴市场 ETF
              </li>
            </ul>
            <Link
              href="/portfolio"
              className="mt-4 inline-block text-sm font-medium text-amber-700 hover:text-amber-900"
            >
              查看详细配置 →
            </Link>
          </div>
          <div className="rounded-xl border border-amber-200 bg-white p-6">
            <div className="mb-2 text-3xl">🚀</div>
            <h3 className="mb-2 text-lg font-semibold text-stone-900">60% 进取标的</h3>
            <p className="mb-3 text-sm text-stone-600">精选主动配置</p>
            <ul className="space-y-1 text-sm text-stone-500">
              <li className="flex items-center gap-2">
                <span className="h-1.5 w-1.5 rounded-full bg-emerald-500" /> 年轻人成长基金（25%）
              </li>
              <li className="flex items-center gap-2">
                <span className="h-1.5 w-1.5 rounded-full bg-green-500" /> NVIDIA（15%）
              </li>
              <li className="flex items-center gap-2">
                <span className="h-1.5 w-1.5 rounded-full bg-indigo-400" /> 国内AI/机器人（15%）
              </li>
              <li className="flex items-center gap-2">
                <span className="h-1.5 w-1.5 rounded-full bg-orange-400" /> 加密资产（10%）
              </li>
            </ul>
            <Link
              href="/portfolio"
              className="mt-4 inline-block text-sm font-medium text-amber-700 hover:text-amber-900"
            >
              查看详细配置 →
            </Link>
          </div>
        </div>
      </section>

      {/* Manifesto */}
      <section className="text-center">
        <div className="mx-auto max-w-lg">
          <p className="whitespace-pre-line text-lg leading-relaxed text-stone-700 italic">
            &ldquo;{`家族基金不是一笔钱，是一个跨越时间的承诺。`}&rdquo;
          </p>
        </div>
      </section>

      {/* CTA */}
      <section className="flex justify-center gap-4">
        <Link
          href="/philosophy"
          className="rounded-xl bg-amber-600 px-8 py-3 text-sm font-medium text-white transition-colors hover:bg-amber-700"
        >
          了解投资哲学
        </Link>
        <Link
          href="/portfolio"
          className="rounded-xl border border-stone-300 bg-white px-8 py-3 text-sm font-medium text-stone-700 transition-colors hover:bg-stone-100"
        >
          查看配置详情
        </Link>
      </section>
    </div>
  );
}
