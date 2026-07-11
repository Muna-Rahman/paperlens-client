"use client";

import Link from "next/link";
import { Radar, ArrowUpRight } from "lucide-react";

// Humanized, context-specific seed data tracking related papers
const FOUR_RELATED_PAPERS = [
  {
    id: "rel-1",
    title: "Adaptive Agricultural Systems for Food Security under Increasing Climate Extremes in Coastal Bangladesh",
    field: "AGRI_RESILIENCE",
    cites: 94,
    match: 93,
    year: 2025
  },
  {
    id: "rel-2",
    title: "From Signals to Safeguards: Machine Learning Architectures for Cyclone Early Warning Matrices",
    field: "DISASTER_PREP",
    cites: 112,
    match: 89,
    year: 2026
  },
  {
    id: "rel-3",
    title: "Evaluating Data Structures in Operating System Traces: SJF and FCFS Starvation Vulnerability Profiles",
    field: "CSE_SYSTEMS",
    cites: 43,
    match: 81,
    year: 2025
  },
  {
    id: "rel-4",
    title: "Text Normalization Stratagems for Sparse Low-Resource Sentiment Engine Anchors",
    field: "NLP",
    cites: 27,
    match: 76,
    year: 2026
  }
];

export default function RelatedPapers() {
  return (
    <section className="w-full pt-12 border-t border-[#E9D4C3]/15">
      
      {/* Telemetry Section Header */}
      <div className="mb-6">
        <span className="font-mono text-[10px] text-[#7C8FA9] tracking-widest block uppercase mb-1">
          // ALGO_HIGH_DIMENSIONAL_CROSS_REFERENCE
        </span>
        <h2 className="font-display text-xl font-bold text-[#E9D4C3] tracking-tight">
          Calculated Related Log Modules
        </h2>
      </div>

      {/* Grid: 4 Cards Per Row Desktop, Responsive Stack on Mobile */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {FOUR_RELATED_PAPERS.map((paper) => (
          <div
            key={paper.id}
            className="glass-card p-5 rounded-lg border border-[#E9D4C3]/10 flex flex-col justify-between min-h-[220px] relative overflow-hidden group hover:border-[#8A1A1A]/40 transition-all duration-300"
          >
            
            {/* 📡 Glowing Radar Percentage Scan Indicator (Similarity Stamp) */}
            <div className="absolute top-4 right-4 z-20 flex items-center justify-center">
              <div className="absolute w-9 h-9 border border-[#8A1A1A]/30 rounded-full animate-radar pointer-events-none" />
              <div className="w-7 h-7 rounded-full border border-[#8A1A1A] flex items-center justify-center bg-[#0A1626] font-mono text-[9px] font-bold text-[#E9D4C3] shadow-glow-red">
                {paper.match}%
              </div>
            </div>

            {/* Top Block: Meta & Title */}
            <div>
              <span className="font-mono text-[9px] text-[#7C8FA9] tracking-wider uppercase block mb-2">
                // {paper.field}
              </span>
              <h3 className="font-display text-xs font-bold text-white tracking-tight leading-snug line-clamp-3 group-hover:text-[#E9D4C3] transition-colors">
                {paper.title}
              </h3>
            </div>

            {/* Bottom Block: Citations & Action Trigger */}
            <div className="mt-6 pt-3 border-t border-[#E9D4C3]/5 flex items-center justify-between font-mono text-[10px] text-[#7C8FA9]">
              <div className="flex flex-col">
                <span>YR: <span className="text-white">{paper.year}</span></span>
                <span>CITES: <span className="text-white">{paper.cites}</span></span>
              </div>

              <Link 
                href={`/papers/${paper.id}`}
                className="flex items-center space-x-1 px-2.5 py-1 bg-[#8A1A1A]/10 border border-[#8A1A1A]/30 text-[#E9D4C3] rounded hover:bg-[#8A1A1A] hover:text-white transition-all text-[11px] font-sans"
              >
                <span>Scan Log</span>
                <ArrowUpRight className="w-3 h-3" />
              </Link>
            </div>

          </div>
        ))}
      </div>

    </section>
  );
}