"use client";

import { Info, Target, Cpu } from "lucide-react";
import Link from "next/link";

export default function AboutPage() {
  return (
    <div className="max-w-4xl mx-auto py-8 px-4 pb-24 space-y-12">
      
      {/* Page Title Header */}
      <div>
        <span className="font-mono text-[10px] text-[#7C8FA9] tracking-widest block mb-1">// WHAT WE ARE BUILDING</span>
        <h1 className="font-display text-3xl font-bold text-white tracking-tight">Project Background & Goals</h1>
      </div>

      {/* Main content blocks split into columns */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        
        {/* Core Origin block */}
        <div className="glass-card p-6 rounded-lg border border-[#E9D4C3]/10 space-y-3">
          <div className="flex items-center space-x-2 text-[#E9D4C3] font-display font-bold text-sm uppercase">
            <Info className="w-4 h-4 text-[#8A1A1A]" />
            <span>How It Started</span>
          </div>
          <p className="font-sans text-xs text-[#7C8FA9] leading-relaxed">
            PaperLens was created to solve a common headache in research: basic keyword searching just isn't enough. Standard search engines look for direct, exact word matches, which means you completely miss papers that cover the exact same ideas using slightly different terms.
          </p>
        </div>

        {/* System Target block */}
        <div className="glass-card p-6 rounded-lg border border-[#E9D4C3]/10 space-y-3">
          <div className="flex items-center space-x-2 text-[#E9D4C3] font-display font-bold text-sm uppercase">
            <Target className="w-4 h-4 text-[#8A1A1A]" />
            <span>What We Want to Achieve</span>
          </div>
          <p className="font-sans text-xs text-[#7C8FA9] leading-relaxed">
            By analyzing abstracts through vector mapping instead of simple text matching, our platform calculates actual conceptual connections instantly. This gives you a much better, clear picture of related research to speed up your literature reviews.
          </p>
        </div>

      </div>

      {/* Key System Objectives Layout Area */}
      <div className="glass-card p-6 rounded-lg border border-[#8A1A1A]/20 bg-gradient-to-r from-[#8A1A1A]/5 to-transparent">
        <h3 className="font-mono text-xs text-[#E9D4C3] uppercase tracking-wider mb-4 flex items-center space-x-2">
          <Cpu className="w-4 h-4 text-[#8A1A1A]" />
          <span>OUR_CORE_OBJECTIVES.txt</span>
        </h3>
        <ul className="font-mono text-[11px] text-[#7C8FA9] space-y-2.5">
          <li className="flex items-start"><span className="text-[#8A1A1A] mr-2">&gt;</span> Convert complex abstracts into simple, structured data points seamlessly.</li>
          <li className="flex items-start"><span className="text-[#8A1A1A] mr-2">&gt;</span> Keep the math transparent by showing the exact match percentages right on the screen.</li>
          <li className="flex items-start"><span className="text-[#8A1A1A] mr-2">&gt;</span> Make it easy for researchers to discover closely related studies without struggling with rigid keywords.</li>
        </ul>
      </div>

    </div>
  );
}