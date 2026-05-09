import { Holding } from "@/data/portfolio";

const convictionColors: Record<string, string> = {
  core: "bg-emerald-100 text-emerald-800",
  satellite: "bg-amber-100 text-amber-800",
  exploratory: "bg-sky-100 text-sky-800",
};

const convictionLabels: Record<string, string> = {
  core: "核心",
  satellite: "卫星",
  exploratory: "探索",
};

const categoryLabels: Record<string, string> = {
  equity: "股票",
  etf: "ETF",
  crypto: "加密",
  human_capital: "人力资本",
};

export default function HoldingCard({ holding }: { holding: Holding }) {
  return (
    <div className="rounded-xl border border-stone-200 bg-white p-4 transition-shadow hover:shadow-md">
      <div className="mb-2 flex items-start justify-between">
        <div>
          <h3 className="font-semibold text-stone-900">{holding.name}</h3>
          {holding.ticker && (
            <span className="text-xs text-stone-400">{holding.ticker}</span>
          )}
        </div>
        <div className="flex items-center gap-1.5">
          <span
            className={`rounded-full px-2 py-0.5 text-xs ${convictionColors[holding.conviction]}`}
          >
            {convictionLabels[holding.conviction]}
          </span>
          <span className="text-xs text-stone-400">
            {categoryLabels[holding.category]}
          </span>
        </div>
      </div>
      <p className="mb-1 text-sm text-stone-600">{holding.description}</p>
      <p className="text-xs text-stone-500 leading-relaxed">{holding.thesis}</p>
      <div className="mt-3">
        <div className="flex items-center justify-between text-xs text-stone-500 mb-1">
          <span>配置占比（60% 部分）</span>
          <span className="font-semibold text-amber-700">{holding.allocation}%</span>
        </div>
        <div className="h-1.5 w-full rounded-full bg-stone-100">
          <div
            className="h-1.5 rounded-full bg-amber-500"
            style={{ width: `${holding.allocation * 3}%` }}
          />
        </div>
      </div>
    </div>
  );
}
