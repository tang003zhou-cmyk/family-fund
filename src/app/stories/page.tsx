import Link from "next/link";
import { storyIntro, storyChapters, generationsTimeline } from "@/data/family";
import { FadeIn } from "@/components/Animations";

export default function StoriesPage() {
  return (
    <div className="space-y-20 bg-particles">
      {/* Header */}
      <FadeIn>
        <section className="text-center">
          <div className="mb-4 text-5xl animate-float">📖</div>
          <h1 className="mb-3 text-3xl font-bold tracking-tight text-stone-900">
            故事 · 过去
          </h1>
          <div className="mx-auto max-w-xl">
            <p className="whitespace-pre-line text-base leading-relaxed text-stone-600">
              {storyIntro}
            </p>
          </div>
          <div className="mx-auto mt-6 accent-line" />
        </section>
      </FadeIn>

      {/* 章节 */}
      <section className="space-y-10">
        {storyChapters.map((ch, i) => (
          <FadeIn key={ch.title} delay={i * 120}>
            <div className="data-card p-8">
              <div className="mb-6 flex items-center gap-4">
                <div className="flex h-12 w-12 items-center justify-center rounded-full bg-amber-100 text-2xl animate-float"
                  style={{ animationDelay: `${i * 2}s` }}>
                  {ch.icon}
                </div>
                <div>
                  <span className="text-xs text-stone-400">第 {i + 1} 章</span>
                  <h2 className="text-xl font-semibold text-stone-900">{ch.title}</h2>
                  <p className="text-sm text-amber-700">{ch.subtitle}</p>
                </div>
              </div>
              <p className="whitespace-pre-line text-base leading-relaxed text-stone-600">
                {ch.content}
              </p>
            </div>
          </FadeIn>
        ))}
      </section>

      {/* 世代时间线 */}
      <FadeIn delay={300}>
        <section className="rounded-2xl border border-stone-200 bg-white p-8">
          <h2 className="mb-6 text-center text-xl font-semibold text-stone-900">
            ⏳ 家族的脚步
          </h2>
          <div className="relative">
            <div className="absolute left-6 top-0 h-full w-0.5 bg-gradient-to-b from-amber-300 to-stone-200 sm:left-1/2 sm:-translate-x-px" />
            {generationsTimeline.map((g, i) => (
              <div key={g.year}
                className={`relative mb-8 pl-16 sm:mb-10 sm:w-1/2 sm:pl-0 animate-scale-in ${
                  i % 2 === 0 ? "sm:pr-8 sm:text-right" : "sm:ml-auto sm:pl-8"
                }`}
                style={{ animationDelay: `${i * 120}ms` }}
              >
                <div className="absolute left-4 top-1 h-4 w-4 rounded-full border-2 border-amber-500 bg-white sm:left-auto sm:right-0 sm:translate-x-1/2" />
                <div className="rounded-xl border border-stone-200 bg-stone-50 p-4 transition-all duration-300 hover:shadow-md hover:border-amber-200">
                  <span className="text-sm font-bold text-amber-700">{g.year}</span>
                  <h3 className="text-base font-semibold text-stone-900">{g.title}</h3>
                  <p className="mt-1 text-sm leading-relaxed text-stone-500">{g.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </section>
      </FadeIn>

      {/* 结尾语 */}
      <FadeIn delay={350}>
        <section className="mx-auto max-w-lg text-center">
          <p className="text-base leading-relaxed text-stone-600 italic">
            &ldquo;过去的故事，是为了让未来的人知道——我们是从哪里出发的。&rdquo;
          </p>
          <div className="mx-auto mt-4 accent-line" />
          <div className="mt-6">
            <Link href="/fund"
              className="rounded-xl bg-amber-600 px-8 py-3 text-sm font-medium text-white transition-all duration-300 hover:bg-amber-700 hover:shadow-lg hover:-translate-y-0.5">
              去看看基金 · 未来 →
            </Link>
          </div>
        </section>
      </FadeIn>
    </div>
  );
}
