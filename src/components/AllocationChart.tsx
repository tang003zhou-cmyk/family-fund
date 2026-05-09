"use client";

import { PieChart, Pie, Cell, ResponsiveContainer, Tooltip } from "recharts";

const data = [
  { name: "AI 主题 ETF", value: 30, color: "#2563eb" },
  { name: "科技宽基 ETF", value: 30, color: "#3b82f6" },
  { name: "黄金 ETF", value: 20, color: "#f59e0b" },
  { name: "新兴市场 ETF", value: 20, color: "#10b981" },
];

export default function EtfPieChart() {
  return (
    <div className="w-full">
      <ResponsiveContainer width="100%" height={240}>
        <PieChart>
          <Pie
            data={data}
            cx="50%"
            cy="50%"
            innerRadius={60}
            outerRadius={100}
            paddingAngle={3}
            dataKey="value"
          >
            {data.map((entry, i) => (
              <Cell key={`cell-${i}`} fill={entry.color} stroke="none" />
            ))}
          </Pie>
          <Tooltip
            formatter={(v: unknown) => `${v}%`}
            contentStyle={{ background: "#fff", border: "1px solid #e7e5e4", borderRadius: "8px", fontSize: "14px" }}
          />
        </PieChart>
      </ResponsiveContainer>
      <div className="mt-2 flex flex-wrap justify-center gap-3 text-xs text-stone-600">
        {data.map((d, i) => (
          <span key={i} className="flex items-center gap-1">
            <span className="inline-block h-2.5 w-2.5 rounded-full" style={{ backgroundColor: d.color }} />
            {d.name} ({d.value}%)
          </span>
        ))}
      </div>
    </div>
  );
}

const selectedData = [
  { name: "年轻人成长基金", value: 25, color: "#059669" },
  { name: "NVIDIA", value: 15, color: "#76b900" },
  { name: "国内AI/机器人", value: 15, color: "#6366f1" },
  { name: "加密货币", value: 10, color: "#f97316" },
  { name: "AMD", value: 10, color: "#ed1c24" },
  { name: "Google", value: 10, color: "#4285f4" },
  { name: "特斯拉", value: 8, color: "#e82127" },
  { name: "字节跳动", value: 7, color: "#1e3a5f" },
];

export function SelectedPieChart() {
  return (
    <div className="w-full">
      <ResponsiveContainer width="100%" height={280}>
        <PieChart>
          <Pie
            data={selectedData}
            cx="50%"
            cy="50%"
            innerRadius={65}
            outerRadius={110}
            paddingAngle={2}
            dataKey="value"
          >
            {selectedData.map((entry, i) => (
              <Cell key={`cell-${i}`} fill={entry.color} stroke="none" />
            ))}
          </Pie>
          <Tooltip
            formatter={(v: unknown) => `${v}%`}
            contentStyle={{ background: "#fff", border: "1px solid #e7e5e4", borderRadius: "8px", fontSize: "14px" }}
          />
        </PieChart>
      </ResponsiveContainer>
      <div className="mt-2 flex flex-wrap justify-center gap-x-4 gap-y-1.5 text-xs text-stone-600">
        {selectedData.map((d, i) => (
          <span key={i} className="flex items-center gap-1">
            <span className="inline-block h-2.5 w-2.5 rounded-full flex-shrink-0" style={{ backgroundColor: d.color }} />
            {d.name} ({d.value}%)
          </span>
        ))}
      </div>
    </div>
  );
}
