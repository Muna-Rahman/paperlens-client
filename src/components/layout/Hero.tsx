"use client";

import Link from "next/link";
import { Terminal, Radar, Cpu, ArrowUpRight } from "lucide-react";

export default function Hero() {
  return (
    <section className="relative w-full min-h-[70vh] flex items-center justify-center overflow-hidden border-b border-[#E9D4C3]/5 bg-[#0A1626]">
      
      {/* 🎇 Ambient colorful background glows (Using inline styles to guarantee Tailwind handles the gradients properly) */}
      <div 
        className="absolute top-1/4 left-1/4 w-[500px] h-[500px] pointer-events-none -translate-x-1/2 -translate-y-1/2 opacity-60 filter blur-[80px]" 
        style={{
          background: "radial-gradient(circle, rgba(124, 143, 169, 0.15) 0%, rgba(10, 22, 38, 0) 70%)"
        }}
      />
      <div 
        className="absolute bottom-1/4 right-1/4 w-[600px] h-[600px] pointer-events-none translate-x-1/2 translate-y-1/2 opacity-40 filter blur-[100px]" 
        style={{
          background: "radial-gradient(circle, rgba(138, 26, 26, 0.2) 0%, rgba(10, 22, 38, 0) 60%)"
        }}
      />

      {/* 📐 Subtle tech-style background grid lines */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(233,212,195,0.01)_1px,transparent_1px),linear-gradient(to_bottom,rgba(233,212,195,0.01)_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_50%,#000_70%,transparent_100%)]" />

      <div className="max-w-7xl mx-auto w-full px-6 grid grid-cols-1 lg:grid-cols-12 gap-12 items-center relative z-10 py-12">
        
        {/* 📝 Left Column: Main Typography & Action Buttons */}
        <div className="lg:col-span-7 flex flex-col items-start text-left">
          
          {/* Status Badge */}
          <div className="inline-flex items-center space-x-2 px-3 py-1 glass-card rounded-full text-[10px] font-mono tracking-widest text-[#E9D4C3] uppercase mb-6">
            <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 shadow-[0_0_8px_#10b981]" />
            <span>MATCHING ENGINE // SYSTEM ONLINE</span>
          </div>

          {/* Main Headline */}
          <h1 className="font-display text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-white mb-6 leading-[1.1]">
            Every Research Paper, <br />
            <span className="text-[#E9D4C3] bg-gradient-to-r from-[#E9D4C3] via-[#F5EFEB] to-[#7C8FA9] bg-clip-text text-transparent">
              Cross-Referenced
            </span> For You.
          </h1>

          {/* Supporting Subtitle text */}
          <p className="font-sans text-sm sm:text-base text-[#7C8FA9] max-w-xl leading-relaxed mb-10">
            Instead of just giving you a basic list of entries, PaperLens scans through keyword sets and abstracts to find hidden, conceptual connections between different papers automatically.
          </p>

          {/* Call to Actions */}
          <div className="flex flex-col sm:flex-row items-center gap-4 w-full sm:w-auto">
            <Link
              href="/papers"
              className="w-full sm:w-auto px-6 py-3.5 bg-[#8A1A1A] hover:bg-red-700 text-[#E9D4C3] font-mono text-xs font-bold uppercase tracking-wider transition-all rounded shadow-md duration-200 text-center"
            >
              LAUNCH EXPLORER
            </Link>
            
            <Link
              href="/methodology"
              className="w-full sm:w-auto px-6 py-3.5 glass-card hover:bg-[#E9D4C3]/10 text-[#7C8FA9] hover:text-[#E9D4C3] font-mono text-xs uppercase tracking-wider transition-all rounded text-center"
            >
              SEE THE MATH
            </Link>
          </div>

          {/* Live Telemetry Data Strip */}
          <div className="mt-12 w-full max-w-xl grid grid-cols-3 border-t border-[#E9D4C3]/5 pt-6 font-mono text-[10px] text-[#7C8FA9]">
            <div className="flex items-center gap-2">
              <Terminal className="w-3.5 h-3.5 text-[#8A1A1A]" />
              <span>INDEXED: 42 PAPERS</span>
            </div>
            <div className="flex items-center gap-2 border-x border-[#E9D4C3]/5 px-2 justify-center">
              <Radar className="w-3.5 h-3.5 text-[#8A1A1A]" />
              <span>ALGORITHM: COSINE</span>
            </div>
            <div className="flex items-center gap-2 justify-end">
              <Cpu className="w-3.5 h-3.5 text-[#8A1A1A]" />
              <span>RESPONSE: 0.04ms</span>
            </div>
          </div>
        </div>

        {/* 📡 Right Column: Interactive Radar Sweep Graphic Layout */}
        <div className="lg:col-span-5 relative w-full h-[400px] flex items-center justify-center">
          
          {/* Main radar background circles */}
          <div className="absolute w-72 h-72 border border-[#7C8FA9]/10 rounded-full flex items-center justify-center">
            <div className="absolute w-56 h-56 border border-[#7C8FA9]/15 rounded-full" />
            <div className="absolute w-40 h-40 border border-[#8A1A1A]/20 rounded-full" />
            
            {/* Spinning radar lines and pulses */}
            <div className="absolute inset-0 border border-[#8A1A1A]/40 rounded-full animate-radar" />
            <div className="absolute w-full h-[1px] bg-gradient-to-r from-transparent via-[#8A1A1A]/30 to-transparent transform rotate-45" />
            <div className="absolute w-full h-[1px] bg-gradient-to-r from-transparent via-[#7C8FA9]/20 to-transparent transform -rotate-45" />
          </div>

          {/* 🧊 Floating Glass Card A */}
          <div className="absolute top-8 left-4 w-64 glass-card p-4 rounded-lg transform -rotate-3 hover:rotate-0 transition-all duration-500 shadow-xl group">
            <div className="flex justify-between items-start mb-2">
              <span className="font-mono text-[9px] text-[#8A1A1A] tracking-wider uppercase">// SAMPLE_RECORD_A</span>
              <span className="font-mono text-[9px] text-[#E9D4C3] bg-[#8A1A1A]/20 px-1.5 py-0.5 rounded">94% MATCH</span>
            </div>
            <h4 className="font-display text-xs font-bold text-white line-clamp-1">Bias Detection Mechanisms</h4>
            <p className="font-sans text-[11px] text-[#7C8FA9] line-clamp-2 mt-1">Analyzing anomalies within learning performance vectors...</p>
          </div>

          {/* 🧊 Floating Glass Card B */}
          <div className="absolute bottom-12 right-2 w-64 glass-card p-4 rounded-lg transform rotate-6 hover:rotate-0 transition-all duration-500 shadow-xl group">
            <div className="flex justify-between items-start mb-2">
              <span className="font-mono text-[9px] text-[#7C8FA9] tracking-wider uppercase">// TEXT_ANALYSIS_B</span>
              <span className="font-mono text-[9px] text-[#7C8FA9]">2026</span>
            </div>
            <h4 className="font-display text-xs font-bold text-white line-clamp-1">Transformer-Based Evaluation</h4>
            <div className="flex items-center justify-between mt-2 pt-2 border-t border-[#E9D4C3]/5 font-mono text-[9px] text-[#7C8FA9]">
              <span>CITATIONS: 84</span>
              <span className="text-[#E9D4C3] flex items-center">READ MORE <ArrowUpRight className="w-2.5 h-2.5 ml-0.5" /></span>
            </div>
          </div>

          {/* Target Scanning Indicators */}
          <div className="absolute top-1/2 left-2/3 w-3 h-3 bg-[#8A1A1A] rounded-full animate-ping" />
          <div className="absolute top-1/2 left-2/3 w-1.5 h-1.5 bg-[#E9D4C3] rounded-full" />
        </div>

      </div>
    </section>
  );
}