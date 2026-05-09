import Link from "next/link";
import { storyIntro, storyChapters, generationsTimeline } from "@/data/family";
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

          {/* 引言音频 */}
          <div className="mx-auto mt-6 max-w-md">
            <AudioPlayer src="/audio/story-intro.mp3" title="引言 · 故事的起点" />
          </div>

          <div className="mx-auto mt-6 accent-line" />
        </section>
      </FadeIn>

      {/* 第一章：家宴（已完成） */}
      <FadeIn delay={100}>
        <div className="data-card p-8 relative overflow-hidden">
          {/* 完成标记 */}
          <div className="absolute right-3 top-3 rounded-full bg-emerald-100 px-3 py-1 text-xs font-medium text-emerald-700">
            ✅ 第一章
          </div>

          <div className="mb-6 flex items-center gap-4">
            <div className="flex h-12 w-12 items-center justify-center rounded-full bg-amber-100 text-2xl animate-float">
              🍲
            </div>
            <div>
              <h2 className="text-xl font-semibold text-stone-900">饭桌上的家族</h2>
              <p className="text-sm text-amber-700">过年家宴，是家族的年轮</p>
            </div>
          </div>

          <div className="space-y-4 text-base leading-relaxed text-stone-600">
            <p>
              每年除夕，一大家人围坐在老宅的圆桌旁。菜是外婆从腊月就开始准备的——蒸鱼、扣肉、糯米藕、四喜丸子。
            </p>
            <p>
              但比菜更重要的，是座位。谁坐在外婆左边，谁坐在舅舅旁边，谁今年被安排到了"小孩桌"——每一张座位的变动，都在悄悄讲述这个家族一年来的变化：谁结婚了，谁有了孩子，谁今年发了财，谁还在迷茫。
            </p>
            <p>
              在周家，饭桌就是家族史的活页。
            </p>
            <p>
              这张圆桌见证过太多。外公还在的时候，他坐在上席，一大家子二十几口人挤挤挨挨地坐三桌。后来外公走了，上席空了几年，没人敢坐那个位置。再后来，外婆说，日子还要过，饭还要吃。于是舅舅坐了上席，但每年开席前，都会先摆一副空碗筷，倒一杯酒。
            </p>
            <p>
              那些消失的座位，比坐满的座位更有故事。
            </p>
            <p>
              周家的团圆饭有一个规矩：每年每个人都要说一件事。不是总结一年，而是说一个最难忘的瞬间。这个规矩是外公定的。他说，不说出来的事，就像没发生过。
            </p>
          </div>

          {/* 音频播放器 */}
          <div className="mt-6">
            <AudioPlayer src="/audio/chapter-jiayan-full.mp3" title="聆听 · 饭桌上的家族" />
          </div>

          <p className="mt-4 text-xs text-stone-400 text-right">
            听录音不如听真人讲。等下次团圆饭，让长辈亲自说给你听。
          </p>
        </div>
      </FadeIn>

      {/* 其他章节（待修改） */}
      <section className="space-y-6">
        <FadeIn delay={150}>
          <h2 className="text-center text-lg font-semibold text-stone-800">
            更多故事 · 待续
          </h2>
          <p className="text-center text-sm text-stone-500">
            后面的章节正在修改中，完成后会配上音频陆续上传
          </p>
        </FadeIn>

        {storyChapters.slice(1).map((ch, i) => (
          <FadeIn key={ch.title} delay={150 + i * 80}>
            <div className="rounded-xl border border-dashed border-stone-200 bg-stone-50/50 p-6 opacity-60">
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
