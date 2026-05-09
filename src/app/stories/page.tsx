import Link from "next/link";
import { storyIntro, chapter1Title, chapter1Subtitle, chapter1Content, chapter1Afterword } from "@/data/family";
import { FadeIn } from "@/components/Animations";
import AudioPlayer from "@/components/AudioPlayer";

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

      {/* 第一章：家宴排序 */}
      <FadeIn delay={100}>
        <div className="data-card p-8 relative overflow-hidden">
          <div className="absolute right-3 top-3 rounded-full bg-emerald-100 px-3 py-1 text-xs font-medium text-emerald-700">
            ✅ 第一章 · 全文完成
          </div>

          <div className="mb-6 flex items-center gap-4">
            <div className="flex h-12 w-12 items-center justify-center rounded-full bg-amber-100 text-2xl animate-float">
              🍲
            </div>
            <div>
              <h2 className="text-xl font-semibold text-stone-900">{chapter1Title}</h2>
              <p className="text-sm text-amber-700">{chapter1Subtitle}</p>
            </div>
          </div>

          {/* 正文 */}
          <div className="space-y-6">
            {chapter1Content.map((section, si) => (
              <div key={si}>
                {section.heading && (
                  <h3 className="mb-3 text-lg font-medium text-stone-800">
                    {section.heading}
                  </h3>
                )}
                <div className="space-y-3 text-base leading-relaxed text-stone-600">
                  {section.paragraphs.map((p, pi) => (
                    <p key={pi}>{p}</p>
                  ))}
                </div>
              </div>
            ))}
          </div>

          {/* 后记 */}
          <div className="mt-8 rounded-xl bg-stone-50 p-5">
            <p className="whitespace-pre-line text-sm leading-relaxed text-stone-500 italic">
              {chapter1Afterword}
            </p>
          </div>

          {/* 音频 */}
          <div className="mt-6">
            <AudioPlayer src="/audio/chapter1-intro.mp3" title="🎧 聆听 · 第一章开头（AI 朗读）" />
          </div>

          <p className="mt-3 text-xs text-stone-400">
            * 原文摘自《家族简史》。可替换为真人录音。
          </p>
        </div>
      </FadeIn>

      {/* 其余章节 */}
      <section className="space-y-6">
        <FadeIn delay={150}>
          <h2 className="text-center text-lg font-semibold text-stone-800">
            后续章节 · 待修改
          </h2>
          <p className="text-center text-sm text-stone-500">
            第二章至第六章内容待你确认修改后，再逐章上传
          </p>
        </FadeIn>

        {[
          { title: "第二章 都是拆迁惹的祸", icon: "🏚️", subtitle: "一场拆迁，亲情搅得支离破碎" },
          { title: "第三章 命运的锚点", icon: "⚓", subtitle: "家族关键节点回溯：外公、大姑姑、老奶奶的ETF" },
          { title: "第四章 一个月的千万富翁", icon: "💰", subtitle: "2017年数字货币大起大落" },
          { title: "第五章 总结", icon: "📜", subtitle: "承上启下，继往开来" },
          { title: "第六章 未来已经到来", icon: "🔮", subtitle: "过去皆为序章，未来是开卷考试" },
        ].map((ch, i) => (
          <FadeIn key={ch.title} delay={150 + i * 80}>
            <div className="rounded-xl border border-dashed border-stone-200 bg-stone-50/50 p-5 opacity-60">
              <div className="flex items-center gap-4">
                <div className="flex h-10 w-10 items-center justify-center rounded-full bg-stone-100 text-xl">
                  {ch.icon}
                </div>
                <div className="flex-1">
                  <h3 className="text-base font-medium text-stone-600">{ch.title}</h3>
                  <p className="text-xs text-stone-400">{ch.subtitle}</p>
                </div>
                <span className="rounded-full border border-stone-200 bg-white px-3 py-1 text-xs text-stone-400">
                  待修改
                </span>
              </div>
            </div>
          </FadeIn>
        ))}
      </section>

      {/* 结尾 */}
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
