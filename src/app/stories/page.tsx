import Link from "next/link";
import { storyIntro, allChapters, generationsTimeline } from "@/data/family";
import { FadeIn } from "@/components/Animations";
import AudioPlayer from "@/components/AudioPlayer";

const audioMap: Record<number, string[]> = {
  1: ["/audio/chapter1-intro.mp3"],
  2: ["/audio/ch2.mp3"],
  3: ["/audio/ch3-part1.mp3", "/audio/ch3-part2.mp3"],
  4: ["/audio/ch4.mp3"],
  5: ["/audio/ch5.mp3"],
  6: ["/audio/ch6-part1.mp3", "/audio/ch6-part2.mp3"],
};

const audioTitle: Record<number, string[]> = {
  1: ["第一章 家宴排序"],
  2: ["第二章 拆迁惹的祸"],
  3: ["第三章上 外公与大姑姑", "第三章下 老奶奶的ETF"],
  4: ["第四章 千万富翁"],
  5: ["第五章 总结"],
  6: ["第六章上 未来已来", "第六章下 新世界"],
};

export default function StoriesPage() {
  return (
    <div className="space-y-8 bg-particles">
      {/* 顶部序言 — 默认可见，不依赖 FadeIn */}
      <section className="text-center">
        <div className="mb-4 text-5xl animate-float">📖</div>
        <h1 className="mb-3 text-3xl font-bold tracking-tight text-stone-900">故事 · 过去</h1>
        <div className="mx-auto max-w-xl">
          <p className="whitespace-pre-line text-base leading-relaxed text-stone-600">{storyIntro}</p>
        </div>
        <div className="mx-auto mt-4 max-w-md">
          <AudioPlayer src="/audio/intro.mp3" title="🎧 聆听序言" />
        </div>
        <div className="mx-auto mt-6 accent-line" />
      </section>

      {/* 全部章节 */}
      <section className="space-y-8">
        {allChapters.map((ch, i) => (
          <FadeIn key={ch.id} delay={i * 80}>
            <div className="data-card p-8 relative overflow-hidden">
              <div className="absolute right-3 top-3 rounded-full bg-emerald-100 px-3 py-1 text-xs font-medium text-emerald-700">
                {ch.ready ? "✅" : "🔄"} 第{ch.id}章
              </div>

              <div className="mb-4 flex items-center gap-4">
                <div className="flex h-12 w-12 items-center justify-center rounded-full bg-amber-100 text-2xl">{ch.icon}</div>
                <div>
                  <h2 className="text-xl font-semibold text-stone-900">{ch.title}</h2>
                  <p className="text-sm text-amber-700">{ch.subtitle}</p>
                </div>
              </div>

              {/* 正文 */}
              <div className="space-y-4">
                {ch.sections.map((sec, si) => (
                  <div key={si}>
                    {sec.heading && <h3 className="mb-2 text-base font-medium text-stone-800">{sec.heading}</h3>}
                    <div className="space-y-2 text-base leading-relaxed text-stone-600">
                      {sec.paragraphs.map((p, pi) => (
                        <p key={pi}>{p}</p>
                      ))}
                    </div>
                  </div>
                ))}
              </div>

              {/* 后记 */}
              {ch.afterword && (
                <div className="mt-6 rounded-xl bg-stone-50 p-4">
                  <p className="whitespace-pre-line text-sm leading-relaxed text-stone-500 italic">{ch.afterword}</p>
                </div>
              )}

              {/* 音频（支持一集或上下集） */}
              {audioMap[ch.id] && audioMap[ch.id].map((src, ai) => (
                <div className="mt-6" key={ai}>
                  <AudioPlayer src={src} title={`🎧 ${audioTitle[ch.id][ai] || audioTitle[ch.id][0]}`} />
                </div>
              ))}
            </div>
          </FadeIn>
        ))}
      </section>

      {/* 世代时间线 */}
      <FadeIn delay={300}>
        <section className="rounded-2xl border border-stone-200 bg-white p-8">
          <h2 className="mb-6 text-center text-xl font-semibold text-stone-900">⏳ 家族的脚步</h2>
          <div className="relative">
            <div className="absolute left-6 top-0 h-full w-0.5 bg-gradient-to-b from-amber-300 to-stone-200 sm:left-1/2 sm:-translate-x-px" />
            {generationsTimeline.map((g, i) => (
              <div key={g.year}
                className={`relative mb-8 pl-16 sm:mb-10 sm:w-1/2 sm:pl-0 ${i % 2 === 0 ? "sm:pr-8 sm:text-right" : "sm:ml-auto sm:pl-8"}`}>
                <div className="absolute left-4 top-1 h-4 w-4 rounded-full border-2 border-amber-500 bg-white sm:left-auto sm:right-0 sm:translate-x-1/2" />
                <div className="rounded-xl border border-stone-200 bg-stone-50 p-4 hover:shadow-md hover:border-amber-200 transition-all">
                  <span className="text-sm font-bold text-amber-700">{g.year}</span>
                  <h3 className="text-base font-semibold text-stone-900">{g.title}</h3>
                  <p className="mt-1 text-sm leading-relaxed text-stone-500">{g.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </section>
      </FadeIn>

      <FadeIn delay={350}>
        <section className="mx-auto max-w-lg text-center">
          <p className="text-base leading-relaxed text-stone-600 italic">&ldquo;过去的故事，是为了让未来的人知道——我们是从哪里出发的。&rdquo;</p>
          <div className="mx-auto mt-4 accent-line" />
          <div className="mt-6">
            <Link href="/fund" className="rounded-xl bg-amber-600 px-8 py-3 text-sm font-medium text-white hover:bg-amber-700 transition-all hover:shadow-lg hover:-translate-y-0.5">
              去看看基金 · 未来 →
            </Link>
          </div>
        </section>
      </FadeIn>
    </div>
  );
}
