"use client";

import { FadeIn } from "@/components/Animations";

export default function PodcastPage() {
  return (
    <div className="space-y-10">
      <FadeIn>
        <section className="text-center">
          <div className="mb-4 text-5xl">🎙️</div>
          <h1 className="mb-2 text-2xl font-bold tracking-tight text-stone-900 sm:text-3xl">
            52周投资启蒙播客
          </h1>
          <p className="mx-auto max-w-lg text-sm text-stone-500">
            从0到1，每周一期，构建你的投资世界观
          </p>
          <div className="mx-auto mt-4 h-0.5 w-20 rounded-full bg-amber-300" />
        </section>
      </FadeIn>

      {/* 第1周 */}
      <FadeIn delay={100}>
        <div className="mx-auto max-w-2xl rounded-2xl border border-stone-200 bg-white p-6 shadow-sm">
          <div className="mb-3 flex items-center gap-2">
            <span className="rounded-full bg-amber-100 px-3 py-1 text-xs font-semibold text-amber-700">
              #第1周
            </span>
          </div>
          <h2 className="mb-1 text-lg font-semibold text-stone-800">
            你为什么需要投资？——钱的贬值速度比你想象的快
          </h2>
          <p className="mb-4 text-xs text-stone-400">
            时长约18分钟 · 2026年5月 · 周氏家族基金出品
          </p>
          <audio
            controls
            preload="metadata"
            className="w-full rounded-lg"
            style={{ height: 48 }}
          >
            <source src="/audio/invest-currency-depreciation.mp3" type="audio/mpeg" />
            您的浏览器不支持音频播放，请下载MP3文件收听。
          </audio>
          <div className="mt-4 flex flex-wrap gap-3">
            <a
              href="/audio/week01-why-invest.pdf"
              download
              className="inline-flex items-center gap-2 rounded-lg bg-amber-600 px-5 py-2.5 text-sm text-white transition-colors hover:bg-amber-700"
            >
              📄 下载PDF文稿
            </a>
            <a
              href="/audio/invest-currency-depreciation.mp3"
              download
              className="inline-flex items-center gap-2 rounded-lg border border-stone-300 bg-white px-5 py-2.5 text-sm text-stone-700 transition-colors hover:bg-stone-50"
            >
              🎧 下载MP3
            </a>
          </div>
        </div>
      </FadeIn>

      {/* 52周框架总览 */}
      <FadeIn delay={200}>
        <div className="mx-auto max-w-2xl rounded-2xl border border-stone-200 bg-white p-6 shadow-sm">
          <h2 className="mb-1 text-lg font-semibold text-stone-800">📚 52周框架总览</h2>
          <p className="mb-2 text-xs text-stone-400">
            从0到1：构建你的投资世界观 · 六大阶段完整框架
          </p>
          <p className="mb-3 text-sm text-stone-600">
            参考海外顶级财经博主过去20年经验，每周一期，从入门到形成自己的投资哲学。
            涵盖启蒙篇（重新认识钱）、筑基篇（投资基本功）、进阶篇（策略与工具）、
            赛道篇（投资未来）、实战篇（知行合一）、修心篇（投资哲学）。
          </p>
          <audio
            controls
            preload="metadata"
            className="w-full mt-3 mb-4 rounded-lg"
            style={{ height: 48 }}
          >
            <source src="/audio/52week-framework.mp3" type="audio/mpeg" />
          </audio>
          <div className="flex flex-wrap gap-3">
            <a
              href="/audio/52week-framework.pdf"
              download
              className="inline-flex items-center gap-2 rounded-lg bg-amber-600 px-5 py-2.5 text-sm text-white transition-colors hover:bg-amber-700"
            >
              📄 下载PDF
            </a>
            <a
              href="/audio/52week-framework.txt"
              download
              className="inline-flex items-center gap-2 rounded-lg border border-stone-300 bg-white px-5 py-2.5 text-sm text-stone-700 transition-colors hover:bg-stone-50"
            >
              📝 下载文字版（TXT）
            </a>
            <a
              href="/audio/52week-framework.mp3"
              download
              className="inline-flex items-center gap-2 rounded-lg border border-stone-300 bg-white px-5 py-2.5 text-sm text-stone-700 transition-colors hover:bg-stone-50"
            >
              🎧 下载MP3
            </a>
          </div>
        </div>
      </FadeIn>

      {/* 特别期：全球顶级财经博主 */}
      <FadeIn delay={300}>
        <div className="mx-auto max-w-2xl rounded-2xl border border-stone-200 bg-white p-6 shadow-sm">
          <div className="mb-3 flex items-center gap-2">
            <span className="rounded-full bg-stone-100 px-3 py-1 text-xs font-semibold text-stone-600">
              特别期
            </span>
          </div>
          <h2 className="mb-1 text-lg font-semibold text-stone-800">
            从10万到1亿：全球顶级财经博主
          </h2>
          <p className="mb-4 text-xs text-stone-400">
            时长约21分钟 · 2026年5月 · 周氏家族基金出品
          </p>
          <audio
            controls
            preload="metadata"
            className="w-full rounded-lg"
            style={{ height: 48 }}
          >
            <source src="/audio/podcast-finance-gurus.mp3" type="audio/mpeg" />
            您的浏览器不支持音频播放，请下载MP3文件收听。
          </audio>
          <div className="mt-4 flex flex-wrap gap-3">
            <a
              href="/audio/finance-gurus-podcast.pdf"
              download
              className="inline-flex items-center gap-2 rounded-lg bg-amber-600 px-5 py-2.5 text-sm text-white transition-colors hover:bg-amber-700"
            >
              📄 下载PDF
            </a>
            <a
              href="/audio/finance-gurus-podcast.txt"
              download
              className="inline-flex items-center gap-2 rounded-lg border border-stone-300 bg-white px-5 py-2.5 text-sm text-stone-700 transition-colors hover:bg-stone-50"
            >
              📝 下载文字版（TXT）
            </a>
            <a
              href="/audio/podcast-finance-gurus.mp3"
              download
              className="inline-flex items-center gap-2 rounded-lg border border-stone-300 bg-white px-5 py-2.5 text-sm text-stone-700 transition-colors hover:bg-stone-50"
            >
              🎧 下载MP3
            </a>
          </div>
        </div>
      </FadeIn>

      <FadeIn delay={350}>
        <div className="mx-auto max-w-2xl space-y-4">
          <h2 className="text-center text-lg font-semibold text-stone-800">📋 特别期内容</h2>

          <div className="rounded-xl border border-stone-100 bg-white p-5">
            <h3 className="mb-2 font-medium text-amber-700">第一章：财经博主群像</h3>
            <ul className="space-y-1 text-sm text-stone-600">
              <li>• 金融巨鳄：巴菲特 / 达利欧 / 木头姐</li>
              <li>• 草根逆袭：Tim Ferriss / Naval / Graham Stephan / Sam Dogen</li>
              <li>• 加密新世界：Andreas Antonopoulos / Raoul Pal</li>
            </ul>
          </div>

          <div className="rounded-xl border border-stone-100 bg-white p-5">
            <h3 className="mb-2 font-medium text-amber-700">第二章：底层逻辑拆解</h3>
            <ul className="space-y-1 text-sm text-stone-600">
              <li>• 三条共同财富密码</li>
              <li>• 他们犯过的错误（比成功更有价值）</li>
            </ul>
          </div>

          <div className="rounded-xl border border-stone-100 bg-white p-5">
            <h3 className="mb-2 font-medium text-amber-700">第三章：未来十倍赛道</h3>
            <ul className="space-y-1 text-sm text-stone-600">
              <li>• AI应用层</li>
              <li>• 生物科技与长寿科技</li>
              <li>• 能源革命2.0</li>
              <li>• Web3去中心化金融</li>
              <li>• 新兴市场</li>
            </ul>
          </div>

          <div className="rounded-xl border border-stone-100 bg-white p-5">
            <h3 className="mb-2 font-medium text-amber-700">第四章：普通人策略框架</h3>
            <ul className="space-y-1 text-sm text-stone-600">
              <li>• 四步行动框架</li>
              <li>• 参考资产配置（2026-2036）</li>
            </ul>
          </div>
        </div>
      </FadeIn>

      <FadeIn delay={400}>
        <div className="mx-auto max-w-xl rounded-xl border border-stone-200 bg-amber-50 p-5 text-center">
          <p className="text-xs text-stone-500">
            周氏家族基金 · 知识共享 · 不作投资建议
          </p>
          <p className="mt-1 text-xs text-stone-400">
            投资有风险，决策需谨慎
          </p>
        </div>
      </FadeIn>
    </div>
  );
}
