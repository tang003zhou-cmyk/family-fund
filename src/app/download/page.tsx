'use client'

export default function DownloadPage() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-red-50 to-orange-50">
      <div className="max-w-2xl mx-auto px-4 py-16">
        <div className="bg-white rounded-2xl shadow-xl p-8 text-center">
          <div className="text-5xl mb-6">📱</div>
          <h1 className="text-3xl font-bold text-gray-800 mb-4">
            周氏家族故事 · 安卓应用
          </h1>
          <p className="text-gray-600 mb-6">
            含全部六章故事、AI朗读音频、互动笔记功能
          </p>

          <a
            href="/downloads/family-app.apk"
            className="inline-flex items-center gap-3 bg-red-600 hover:bg-red-700 text-white text-xl font-semibold px-8 py-4 rounded-xl shadow-lg transition-all hover:scale-105"
          >
            <span>⬇️</span>
            <span>下载 APK（4MB）</span>
          </a>

          <div className="mt-8 text-left bg-gray-50 rounded-xl p-6 space-y-3 text-sm text-gray-600">
            <h2 className="font-bold text-gray-800 text-base">安装说明</h2>
            <p>1. 下载 APK 文件</p>
            <p>2. 传到安卓手机打开</p>
            <p>3. 允许"未知来源应用安装"</p>
            <p>4. 打开 APP，输入密码 <code className="bg-gray-200 px-2 py-0.5 rounded font-mono">1973</code></p>
            <p>5. 进入后浏览故事、播放音频、记笔记</p>
          </div>
        </div>
      </div>
    </div>
  )
}
