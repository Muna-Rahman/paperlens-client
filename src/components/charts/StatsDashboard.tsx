"use client";

import { ResponsiveContainer, BarChart, Bar, XAxis, YAxis, Tooltip, PieChart, Pie, Cell } from "recharts";

const fieldData = [
  { name: "NLP", value: 35 },
  { name: "XAI / Fairness", value: 25 },
  { name: "Edu Data Mining", value: 20 },
  { name: "Robustness", value: 20 },
];

const yearlyData = [
  { year: "2022", papers: 12 },
  { year: "2023", papers: 24 },
  { year: "2024", papers: 38 },
  { year: "2025", papers: 56 },
  { year: "2026", papers: 42 },
];

const COLORS = ["#8A1A1A", "#7C8FA9", "#E9D4C3", "#4E1A8A"];

export default function StatsDashboard() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-8 w-full">
      {/* Donut Chart: Distribution */}
      <div className="glass-card p-6 rounded-lg border border-[#E9D4C3]/10 flex flex-col items-center">
        <h3 className="font-mono text-xs text-[#E9D4C3] uppercase tracking-wider mb-6 self-start">
          // FIELD_DISTRIBUTION.matrix
        </h3>
        <div className="w-full h-64">
          <ResponsiveContainer width="100%" height="100%">
            <PieChart>
              <Pie
                data={fieldData}
                cx="50%"
                cy="50%"
                innerRadius={60}
                outerRadius={80}
                paddingAngle={5}
                dataKey="value"
              >
                {fieldData.map((entry, index) => (
                  <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                ))}
              </Pie>
              <Tooltip 
                contentStyle={{ background: "#0A1626", borderColor: "rgba(233, 212, 195, 0.15)", color: "#F5EFEB" }}
              />
            </PieChart>
          </ResponsiveContainer>
        </div>
        <div className="grid grid-cols-2 gap-4 mt-4 w-full font-mono text-[10px] text-[#7C8FA9]">
          {fieldData.map((entry, index) => (
            <div key={entry.name} className="flex items-center space-x-2">
              <span className="w-2 h-2 rounded-full" style={{ backgroundColor: COLORS[index] }} />
              <span>{entry.name} ({entry.value}%)</span>
            </div>
          ))}
        </div>
      </div>

      {/* Bar Chart: Growth */}
      <div className="glass-card p-6 rounded-lg border border-[#E9D4C3]/10">
        <h3 className="font-mono text-xs text-[#E9D4C3] uppercase tracking-wider mb-6">
          // CHRONO_GROWTH_INDEX.log
        </h3>
        <div className="w-full h-64">
          <ResponsiveContainer width="100%" height="100%">
            <BarChart data={yearlyData}>
              <XAxis dataKey="year" stroke="#7C8FA9" fontSize={10} tickLine={false} />
              <YAxis stroke="#7C8FA9" fontSize={10} tickLine={false} />
              <Tooltip 
                contentStyle={{ background: "#0A1626", borderColor: "rgba(233, 212, 195, 0.15)", color: "#F5EFEB" }}
                cursor={{ fill: "rgba(233,212,195,0.02)" }}
              />
              <Bar dataKey="papers" fill="#8A1A1A" radius={[4, 4, 0, 0]} />
            </BarChart>
          </ResponsiveContainer>
        </div>
      </div>
    </div>
  );
}