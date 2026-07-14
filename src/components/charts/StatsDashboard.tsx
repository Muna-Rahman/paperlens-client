'use client';

import React, { useEffect, useState } from 'react';
import { 
  BarChart, Bar, 
  LineChart, Line, 
  PieChart, Pie, Cell, 
  XAxis, YAxis, CartesianGrid, Tooltip, Legend, 
  ResponsiveContainer 
} from 'recharts';
import api from '@/lib/api';

interface Paper {
  field: string;
  year: number;
  citationCount: number;
}

export default function StatsDashboard() {
  const [papers, setPapers] = useState<Paper[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchStatsData = async () => {
      try {
        const res = await api.get('/papers?limit=100');
        setPapers(res.data.papers || []);
      } catch (err) {
        console.error("Failed to parse charting parameters:", err);
      } finally {
        setLoading(false);
      }
    };
    fetchStatsData();
  }, []);

  if (loading) {
    return (
      <div className="h-[300px] w-full flex items-center justify-center font-mono text-xs text-[#7C8FA9] animate-pulse">
        CALCULATING GRAPH DATA METRICS...
      </div>
    );
  }

  // --- CHART 1 DATA: Papers by Field ---
  const fieldCounts = papers.reduce((acc: Record<string, number>, paper) => {
    if (paper.field) acc[paper.field] = (acc[paper.field] || 0) + 1;
    return acc;
  }, {});

  // Fallback defaults if the dynamic MongoDB collection returns empty initially
  const fieldData = Object.keys(fieldCounts).length > 0 
    ? Object.keys(fieldCounts).map(field => ({
        name: field.split(' ').map(w => w[0]).join(''), 
        fullName: field,
        value: fieldCounts[field],
      }))
    : [
        { name: 'AI', fullName: 'Artificial Intelligence', value: 4 },
        { name: 'NLP', fullName: 'Natural Language Processing', value: 3 },
        { name: 'CV', fullName: 'Computer Vision', value: 3 },
        { name: 'DS', fullName: 'Data Science', value: 4 }
      ];

  // --- CHART 2 DATA: Papers Per Year ---
  const yearCounts = papers.reduce((acc: Record<number, number>, paper) => {
    if (paper.year) acc[paper.year] = (acc[paper.year] || 0) + 1;
    return acc;
  }, {});

  const yearData = Object.keys(yearCounts).length > 0
    ? Object.keys(yearCounts)
        .map(yr => ({ year: Number(yr), count: yearCounts[Number(yr)] }))
        .sort((a, b) => a.year - b.year)
    : [
        { year: 2022, count: 2 },
        { year: 2023, count: 4 },
        { year: 2024, count: 3 },
        { year: 2025, count: 5 },
        { year: 2026, count: 6 }
      ];

  // --- CHART 3 DATA: Citation Distribution ---
  const citationBins = [
    { name: '0-1k', min: 0, max: 1000, value: 0 },
    { name: '1k-10k', min: 1001, max: 10000, value: 0 },
    { name: '10k-50k', min: 10001, max: 50000, value: 0 },
    { name: '50k-100k', min: 50001, max: 100000, value: 0 },
    { name: '100k+', min: 100001, max: Infinity, value: 0 },
  ];

  papers.forEach(paper => {
    const bin = citationBins.find(b => paper.citationCount >= b.min && paper.citationCount <= b.max);
    if (bin) bin.value++;
  });

  const hasCitations = citationBins.some(b => b.value > 0);
  const citationData = hasCitations 
    ? citationBins.filter(b => b.value > 0)
    : [
        { name: '0-1k', value: 5 },
        { name: '1k-10k', value: 8 },
        { name: '10k-50k', value: 4 },
        { name: '50k-100k', value: 2 },
        { name: '100k+', value: 1 }
      ];

  const ACCENT_COLORS = ['#8A1A1A', '#7C8FA9', '#E9D4C3', '#4E0000', '#A8B3C4'];

  return (
    <div className="space-y-12 w-full font-['General_Sans']">
      
      {/* Top Section Split */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        
        {/* Card 1: Papers by Field */}
        <div className="backdrop-blur-[16px] bg-[rgba(233,212,195,0.06)] border border-[rgba(233,212,195,0.12)] rounded-2xl p-6 relative">
          <h3 className="text-sm font-bold font-['Clash_Display'] text-[#E9D4C3] mb-6 tracking-wide">// PAPERS_BY_FIELD</h3>
          {/* FIXED: Added a static height div to force ResponsiveContainer calculations to work */}
          <div className="w-full h-64 min-h-[250px] text-[10px] font-mono">
            <ResponsiveContainer width="100%" height="100%">
              <BarChart data={fieldData} margin={{ top: 10, right: 10, left: -25, bottom: 0 }}>
                <CartesianGrid strokeDasharray="3 3" stroke="rgba(233,212,195,0.05)" vertical={false} />
                <XAxis dataKey="name" stroke="#7C8FA9" tickLine={false} />
                <YAxis stroke="#7C8FA9" tickLine={false} />
                <Tooltip 
                  contentStyle={{ backgroundColor: '#0A1626', borderColor: 'rgba(233,212,195,0.15)', color: '#F5F5F5' }}
                  labelFormatter={(value) => fieldData.find(f => f.name === value)?.fullName || value}
                />
                <Bar dataKey="value" radius={[4, 4, 0, 0]}>
                  {fieldData.map((entry, index) => (
                    <Cell key={`cell-${index}`} fill={ACCENT_COLORS[index % ACCENT_COLORS.length]} />
                  ))}
                </Bar>
              </BarChart>
            </ResponsiveContainer>
          </div>
        </div>

        {/* Card 2: Papers Per Year */}
        <div className="backdrop-blur-[16px] bg-[rgba(233,212,195,0.06)] border border-[rgba(233,212,195,0.12)] rounded-2xl p-6 relative">
          <h3 className="text-sm font-bold font-['Clash_Display'] text-[#E9D4C3] mb-6 tracking-wide">// PAPERS_ADDED_PER_YEAR</h3>
          <div className="w-full h-64 min-h-[250px] text-[10px] font-mono">
            <ResponsiveContainer width="100%" height="100%">
              <LineChart data={yearData} margin={{ top: 10, right: 15, left: -25, bottom: 0 }}>
                <CartesianGrid strokeDasharray="3 3" stroke="rgba(233,212,195,0.05)" vertical={false} />
                <XAxis dataKey="year" stroke="#7C8FA9" tickLine={false} />
                <YAxis stroke="#7C8FA9" tickLine={false} />
                <Tooltip contentStyle={{ backgroundColor: '#0A1626', borderColor: 'rgba(233,212,195,0.15)', color: '#F5F5F5' }} />
                <Line type="monotone" dataKey="count" stroke="#8A1A1A" strokeWidth={2.5} dot={{ stroke: '#E9D4C3', strokeWidth: 1, r: 3 }} activeDot={{ r: 5 }} />
              </LineChart>
            </ResponsiveContainer>
          </div>
        </div>

      </div>

      {/* Bottom Section: Citation Distribution */}
      <div className="backdrop-blur-[16px] bg-[rgba(233,212,195,0.06)] border border-[rgba(233,212,195,0.12)] rounded-2xl p-6">
        <h3 className="text-sm font-bold font-['Clash_Display'] text-[#E9D4C3] mb-4 tracking-wide">// CITATION_DISTRIBUTION</h3>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 items-center">
          <div className="w-full h-64 min-h-[250px] md:col-span-2 text-[10px] font-mono">
            <ResponsiveContainer width="100%" height="100%">
              <PieChart>
                <Pie
                  data={citationData}
                  cx="50%"
                  cy="50%"
                  innerRadius={55}
                  outerRadius={75}
                  paddingAngle={4}
                  dataKey="value"
                >
                  {citationData.map((entry, index) => (
                    <Cell key={`cell-${index}`} fill={ACCENT_COLORS[index % ACCENT_COLORS.length]} />
                  ))}
                </Pie>
                <Tooltip contentStyle={{ backgroundColor: '#0A1626', borderColor: 'rgba(233,212,195,0.15)', color: '#F5F5F5' }} />
                <Legend verticalAlign="middle" align="right" layout="vertical" wrapperStyle={{ color: '#A8B3C4', fontFamily: 'monospace', fontSize: '11px' }} />
              </PieChart>
            </ResponsiveContainer>
          </div>

          <div className="bg-[#0A1626]/60 border border-[rgba(233,212,195,0.1)] rounded-xl p-4 space-y-3 font-mono text-xs text-[#A8B3C4]">
            <p className="text-[#E9D4C3] font-bold tracking-wider uppercase">// DATASET_SNAPSHOT</p>
            <div>Active Corpus Nodes: <span className="text-white font-bold">{papers.length || 60}</span></div>
            <div>Evaluation State: <span className="text-[#8A1A1A] font-bold">{papers.length > 0 ? "LIVE_SYNC" : "MOCK_PREVIEW"}</span></div>
            <div className="text-[10px] text-[#718096] pt-2 border-t border-[rgba(233,212,195,0.08)]">
              Telemetry indicators automatically transition to live database streaming patterns once backend data pipelines connect.
            </div>
          </div>
        </div>
      </div>

    </div>
  );
}