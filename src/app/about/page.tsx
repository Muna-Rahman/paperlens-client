"use client";

import { Info, Target, Cpu } from "lucide-react";
import Link from "next/link";

export default function AboutPage() {
  return (
    <div className="max-w-4xl mx-auto py-8 px-4 pb-24 space-y-12">
      
      {/* Page Title Header */}
      <div>
        <span className="font-mono text-[10px] text-[#7C8FA9] tracking-widest block mb-1">// SYSTEM_IDENTITY_LOG</span>
        <h1 className="font-display text-3xl font-bold text-white tracking-tight">Project Background & Objectives</h1>
      </div>

      {/* Main Structural Breakdown Split */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        
        {/* Core Origin block */}
        <div className="glass-card p-6 rounded-lg border border-[#E9D4C3]/10 space-y-3">
          <div className="flex items-center space-x-2 text-[#E9D4C3] font-display font-bold text-sm uppercase">
            <Info className="w-4 h-4 text-[#8A1A1A]" />
            <span>Project Genesis</span>
          </div>
          <p className="font-sans text-xs text-[#7C8FA9] leading-relaxed">
            PaperLens was conceptualized to solve a critical bottleneck in academic discovery: the limitation of plain keyword matching. Standard databases often look for direct string overlays, missing deeply connected records that simply use variant technical vocabularies.
          </p>
        </div>

        {/* System Target block */}
        <div className="glass-card p-6 rounded-lg border border-[#E9D4C3]/10 space-y-3">
          <div className="flex items-center space-x-2 text-[#E9D4C3] font-display font-bold text-sm uppercase">
            <Target className="w-4 h-4 text-[#8A1A1A]" />
            <span>Target Metrics</span>
          </div>
          <p className="font-sans text-xs text-[#7C8FA9] leading-relaxed">
            By analyzing cross-referenced abstract arrays through multi-dimensional similarity mapping, the platform tokenizes documentation vectors instantly, returning predictable semantic discovery maps that accelerate auditing pipelines.
          </p>
        </div>

      </div>

      {/* System Objectives Terminal Area */}
      <div className="glass-card p-6 rounded-lg border border-[#8A1A1A]/20 bg-gradient-to-r from-[#8A1A1A]/5 to-transparent">
        <h3 className="font-mono text-xs text-[#E9D4C3] uppercase tracking-wider mb-4 flex items-center space-x-2">
          <Cpu className="w-4 h-4 text-[#8A1A1A]" />
          <span>OPERATIONAL_OBJECTIVES_LIST.log</span>
        </h3>
        <ul className="font-mono text-[11px] text-[#7C8FA9] space-y-2.5">
          <li className="flex items-start"><span className="text-[#8A1A1A] mr-2">&gt;</span> Tokenize multi-field abstracts down into pure spatial vector coordinates smoothly.</li>
          <li className="flex items-start"><span className="text-[#8A1A1A] mr-2">&gt;</span> Safeguard transparency by mapping clear numerical similarity metrics out on open screens.</li>
          <li className="flex items-start"><span className="text-[#8A1A1A] mr-2">&gt;</span> Bridge standard structural research workflows with high-precision algorithmic tracking models.</li>
        </ul>
      </div>

    </div>
  );
}