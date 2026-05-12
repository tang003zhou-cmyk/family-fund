"use client";

import { FadeIn } from "@/components/Animations";

export default function PodcastPage() {
  return (
    <div className="space-y-10">
      <FadeIn>
        <section className="text-center">
          <div className="mb-4 text-5xl">🎙️</div>
          <h1 className="mb-2 text-2xl font-bold tracking-tight text-stone-900 sm:text-3xl">
            从10万到1亿：全球顶级财经博主
          </h1>
          <p className="mx-auto max-w-lg text-sm text-stone-500">
            过去十年的财富密码与未来十年的十倍赛道
          </p>
          <div className="mx-auto mt-4 h-0.5 w-20 rounded-full bg-amber-300" />
        </section>
      </FadeIn>

      <FadeIn delay={100}>
        <div className="mx-auto max-w-2xl rounded-2xl border border-stone-200 bg-white p-6 shadow-sm">
          <h2 className="mb-1 text-lg font-semibold text-stone-800">🎧 播客音频</h2>
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
          <div className="mt-4 flex justify-end">
            <a
              href="/audio/podcast-finance-gurus.mp3"
              download
              className="rounded-lg bg-amber-600 px-4 py-2 text-sm text-white transition-colors hover:bg-amber-700"
            >
              ⬇️ 下载MP3
            </a>
          </div>
        </div>
      </FadeIn>

      <FadeIn delay={200}>
        <div className="mx-auto max-w-2xl space-y-4">
          <h2 className="text-center text-lg font-semibold text-stone-800">📋 本期内容</h2>

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

      <FadeIn delay={300}>
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
