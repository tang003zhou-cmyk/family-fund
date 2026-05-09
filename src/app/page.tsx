import Link from "next/link";
import { familyIntro } from "@/data/family";
import { FadeIn, AnimatedCounter } from "@/components/Animations";

export default function Home() {
  return (
    <div className="space-y-24 bg-particles">
      {/* Hero */}
      <FadeIn>
        <section className="text-center">
          <div className="mb-6 text-6xl animate-float">🏮</div>
          <h1 className="mb-4 text-3xl font-bold tracking-tight text-stone-900 sm:text-4xl">
            周氏家族
          </h1>
          <div className="mx-auto max-w-xl">
            <p className="whitespace-pre-line text-base leading-relaxed text-stone-600">
              {familyIntro}
            </p>
          </div>
          <div className="mx-auto mt-6 accent-line" />
        </section>
      </FadeIn>

      {/* 个人时间线 */}
      <FadeIn delay={150}>
        <section className="mx-auto max-w-xl space-y-4">
          {[
            { year: "2012", label: "认知准备", desc: "开始理解世界的底层逻辑" },
            { year: "2017", label: "一个人走", desc: "踏上自己的路，不留退路" },
            { year: "2026", label: "新起点", desc: "故事与基金，我们一起走" },
          ].map((m, i) => (
            <div key={m.year} className="flex items-center gap-4 animate-slide-up" style={{ animationDelay: `${i * 200}ms` }}>
              <span className="w-16 shrink-0 rounded-full bg-amber-100 px-3 py-1.5 text-center text-sm font-bold text-amber-700">
                {m.year}
              </span>
              <div className="h-0.5 flex-1 bg-gradient-to-r from-amber-300 to-transparent" />
              <div className="flex-1">
                <p className="font-medium text-stone-800">{m.label}</p>
                <p className="text-xs text-stone-500">{m.desc}</p>
              </div>
            </div>
          ))}
        </section>
      </FadeIn>

      {/* 双板块入口 */}
      <section className="grid gap-8 sm:grid-cols-2">
        {/* 故事·过去 */}
        <FadeIn delay={200}>
          <Link href="/stories" className="group block">
            <div className="data-card p-8 text-center transition-all duration-500 group-hover:-translate-y-1">
              <div className="mb-4 text-5xl animate-float">📖</div>
              <h2 className="mb-2 text-2xl font-semibold text-stone-800">故事 · 过去</h2>
              <p className="mb-4 text-sm text-stone-500">
                饭桌上的家族 · 三代人的路 · 认知觉醒
              </p>
              <div className="mx-auto h-1 w-16 rounded-full bg-amber-300 transition-all duration-500 group-hover:w-24" />
              <p className="mt-4 text-xs text-stone-400">
                从饭桌开始的故事，跨越几代人的旅程
              </p>
            </div>
          </Link>
        </FadeIn>

        {/* 基金·未来 */}
        <FadeIn delay={300}>
          <Link href="/fund" className="group block">
            <div className="data-card p-8 text-center transition-all duration-500 group-hover:-translate-y-1">
              <div className="mb-4 text-5xl animate-float-delayed">💰</div>
              <h2 className="mb-2 text-2xl font-semibold text-stone-800">基金 · 未来</h2>
              <p className="mb-4 text-sm text-stone-500">
                双轨制方案 · 人力资本 · 十年验证
              </p>
              <div className="mx-auto h-1 w-16 rounded-full bg-amber-300 transition-all duration-500 group-hover:w-24" />
              <p className="mt-4 text-xs text-stone-400">
                <AnimatedCounter value={40} suffix="%" duration={1500} /> ETF + <AnimatedCounter value={60} suffix="%" duration={1500} /> 精选，2036-2046 验证
              </p>
            </div>
          </Link>
        </FadeIn>
      </section>

      {/* 两个站点的导航 */}
      <FadeIn delay={350}>
        <section className="rounded-2xl border border-stone-200 bg-white p-6 text-center">
          <h2 className="mb-3 text-sm font-medium text-stone-600">🌐 家族数字遗产</h2>
          <div className="flex flex-col items-center gap-2 sm:flex-row sm:justify-center sm:gap-6">
            <a href="https://xima1988sky.de5.net" target="_blank" rel="noopener noreferrer"
              className="text-sm text-amber-700 hover:text-amber-900 underline underline-offset-2">
              🐣 球球成长站 → xima1988sky.de5.net
            </a>
            <span className="hidden text-stone-300 sm:inline">|</span>
            <span className="text-sm text-stone-800 font-medium">
              🏮 这里是家族遗产门户
            </span>
          </div>
        </section>
      </FadeIn>
    </div>
  );
}
