import Link from "next/link";
import { FadeIn, AnimatedCounter, AnimatedBar } from "@/components/Animations";
import { principles, fundManifesto } from "@/data/philosophy";
import { trillionClub } from "@/data/history";

export default function FundPage() {
  return (
    <div className="space-y-20">
      {/* Hero */}
      <FadeIn>
        <section className="text-center">
          <div className="mb-4 text-5xl animate-float">💰</div>
          <h1 className="mb-3 text-3xl font-bold tracking-tight text-stone-900">
            家族基金 · 未来
          </h1>
          <p className="mx-auto max-w-lg text-base text-stone-600">
            不是终点，是起点。双轨并行，十年验证。
          </p>
          <div className="mt-6 flex justify-center gap-6 text-sm text-stone-400">
            <div className="text-center">
              <div className="text-2xl font-bold text-amber-600"><AnimatedCounter value={40} suffix="%" duration={1200} /></div>
              <div>ETF 安心篮子</div>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold text-amber-600"><AnimatedCounter value={60} suffix="%" duration={1200} /></div>
              <div>精选进取标的</div>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold text-amber-600"><AnimatedCounter value={20} suffix="年" duration={1200} /></div>
              <div>验证框架</div>
            </div>
          </div>
        </section>
      </FadeIn>

      {/* 宣言 */}
      <FadeIn delay={150}>
        <section className="mx-auto max-w-2xl text-center">
          <div className="mb-4 text-4xl animate-float-delayed">📜</div>
          <p className="whitespace-pre-line text-lg leading-relaxed text-stone-700 italic tracking-wide">
            {fundManifesto}
          </p>
          <div className="mx-auto mt-4 accent-line" />
        </section>
      </FadeIn>

      {/* 核心理念 */}
      <section>
        <FadeIn>
          <h2 className="mb-8 text-center text-2xl font-semibold text-stone-800">四大核心理念</h2>
        </FadeIn>
        <div className="grid gap-6 sm:grid-cols-2">
          {principles.map((p, i) => (
            <FadeIn key={p.title} delay={i * 100}>
              <div className="data-card">
                <div className="mb-3 text-3xl animate-float" style={{ animationDelay: `${i * 2}s` }}>
                  {p.icon}
                </div>
                <h3 className="mb-1 text-lg font-semibold text-stone-900">{p.title}</h3>
                <p className="mb-2 text-sm font-medium text-amber-700">{p.subtitle}</p>
                <p className="mb-3 text-sm leading-relaxed text-stone-600">{p.content}</p>
                {p.analogy && (
                  <div className="rounded-lg bg-amber-50 p-3 text-xs leading-relaxed text-amber-800">
                    <span className="font-semibold">💡 说给家人听：</span>
                    {p.analogy}
                  </div>
                )}
              </div>
            </FadeIn>
          ))}
        </div>
      </section>

      {/* 双轨制 */}
      <FadeIn delay={200}>
        <section className="rounded-2xl border border-amber-200 bg-amber-50/50 p-8">
          <h2 className="mb-6 text-center text-2xl font-semibold text-stone-800">双轨制方案</h2>
          <div className="grid gap-6 sm:grid-cols-2">
            <div className="data-card">
              <div className="mb-2 text-3xl">🛡️</div>
              <h3 className="mb-2 text-lg font-semibold text-stone-900">40% 安心篮子</h3>
              <p className="mb-3 text-sm text-stone-600">一篮子 ETF 被动配置</p>
              <div className="space-y-2">
                <AnimatedBar value={30} label="AI 主题 ETF" color="bg-blue-500" />
                <AnimatedBar value={30} label="科技宽基 ETF" color="bg-blue-400" />
                <AnimatedBar value={20} label="黄金 ETF" color="bg-amber-400" />
                <AnimatedBar value={20} label="新兴市场 ETF" color="bg-emerald-400" />
              </div>
              <Link href="/fund/portfolio" className="mt-4 inline-block text-sm font-medium text-amber-700 hover:text-amber-900">
                查看详细配置 →
              </Link>
            </div>
            <div className="data-card">
              <div className="mb-2 text-3xl">🚀</div>
              <h3 className="mb-2 text-lg font-semibold text-stone-900">60% 进取标的</h3>
              <p className="mb-3 text-sm text-stone-600">精选主动配置</p>
              <div className="space-y-2">
                <AnimatedBar value={25} label="年轻人成长基金" color="bg-emerald-500" />
                <AnimatedBar value={15} label="NVIDIA" color="bg-green-500" />
                <AnimatedBar value={15} label="国内AI/机器人" color="bg-indigo-400" />
                <AnimatedBar value={10} label="加密货币" color="bg-orange-400" />
              </div>
              <Link href="/fund/portfolio" className="mt-4 inline-block text-sm font-medium text-amber-700 hover:text-amber-900">
                查看详细配置 →
              </Link>
            </div>
          </div>
        </section>
      </FadeIn>

      {/* 万亿俱乐部 */}
      <FadeIn delay={250}>
        <section>
          <h2 className="mb-4 text-center text-xl font-semibold text-stone-800">🌐 全球万亿俱乐部</h2>
          <p className="mb-6 text-center text-sm text-stone-500">
            持仓覆盖 <strong className="text-amber-700">7</strong> 家，总市值 <strong className="text-amber-700">$34T</strong>
          </p>
          <div className="overflow-x-auto rounded-xl border border-stone-200">
            <table className="w-full text-sm">
              <thead className="bg-stone-100 text-left text-xs text-stone-500">
                <tr>
                  <th className="px-4 py-2 font-medium">#</th>
                  <th className="px-4 py-2 font-medium">公司</th>
                  <th className="px-4 py-2 font-medium">市值</th>
                  <th className="px-4 py-2 font-medium">持仓</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-stone-100">
                {trillionClub.map((c) => {
                  const inPortfolio = ["NVIDIA", "Alphabet (Google)", "Apple", "Microsoft", "Amazon", "Meta", "特斯拉"].includes(c.name);
                  return (
                    <tr key={c.rank} className="hover:bg-stone-50 transition-colors">
                      <td className="px-4 py-2.5 text-stone-400">{c.rank}</td>
                      <td className="px-4 py-2.5 font-medium text-stone-800">{c.name}</td>
                      <td className="px-4 py-2.5 text-stone-600">${c.cap.toFixed(3)}T</td>
                      <td className="px-4 py-2.5">
                        {inPortfolio ? <span className="rounded-full bg-emerald-100 px-2 py-0.5 text-xs text-emerald-700">持有</span> : <span className="text-xs text-stone-300">—</span>}
                      </td>
                    </tr>
                  );
                })}
              </tbody>
            </table>
          </div>
        </section>
      </FadeIn>

      {/* CTA */}
      <FadeIn delay={300}>
        <section className="flex flex-col items-center gap-4 sm:flex-row sm:justify-center">
          <Link href="/fund/philosophy" className="rounded-xl bg-amber-600 px-8 py-3 text-sm font-medium text-white transition-all duration-300 hover:bg-amber-700 hover:shadow-lg hover:-translate-y-0.5">
            了解投资哲学
          </Link>
          <Link href="/fund/portfolio" className="rounded-xl border border-stone-300 bg-white px-8 py-3 text-sm font-medium text-stone-700 transition-all duration-300 hover:bg-stone-100 hover:shadow-md hover:-translate-y-0.5">
            查看配置详情
          </Link>
        </section>
      </FadeIn>
    </div>
  );
}
