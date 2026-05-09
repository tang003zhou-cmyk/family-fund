import { CompanyHistory } from "@/data/history";

export default function CompanyMilestone({ company }: { company: CompanyHistory }) {
  const latestMilestones = company.milestones.slice(-3);

  return (
    <details className="group rounded-xl border border-stone-200 bg-white transition-all open:shadow-md">
      <summary className="flex cursor-pointer items-center justify-between p-4 text-sm font-medium text-stone-800 hover:bg-stone-50 [&::-webkit-details-marker]:hidden">
        <div className="flex items-center gap-2">
          <span className="text-base">{company.ticker ? company.ticker : "🏛️"}</span>
          <span>{company.name}</span>
        </div>
        <div className="flex items-center gap-2">
          <span className="hidden text-xs text-amber-700 sm:inline">{company.growthPath}</span>
          <span className="text-xs text-stone-400 transition-transform group-open:rotate-180">▼</span>
        </div>
      </summary>
      <div className="border-t border-stone-100 px-4 pb-4 pt-3">
        <p className="mb-3 text-xs font-medium text-amber-700">{company.growthPath}</p>
        <div className="space-y-2">
          {company.milestones.map((m) => (
            <div key={m.year} className="flex gap-3">
              <span className="w-14 shrink-0 pt-0.5 text-xs font-bold text-amber-600">{m.year}</span>
              <div>
                <p className="text-sm text-stone-700">{m.event}</p>
                <p className="text-xs text-stone-400">{m.significance}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </details>
  );
}
