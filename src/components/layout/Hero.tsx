"use client";

import Link from "next/link";
import { Terminal, Radar, Cpu } from "lucide-react";

export default function Hero() {
  return (
    <section className="relative w-full min-h-[65vh] flex items-center justify-center overflow-hidden border-b border-[#E9D4C3]/5">
      
      {/* Ambient background glows */}
      <div className="absolute top-1/4 left-1/4 w-[500px] h-[500px] glow-bg-slate pointer-events-none -translate-x-1/2 -translate-y-1/2" />
      <div className="absolute bottom-1/4 right-1/4 w-[600px] h-[600px] glow-bg-red pointer-events-none translate-x-1/2 translate-y-1/2" />

      {/* Grid Overlay Graphic */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(233,212,195,0.01)_1px,transparent_1px),linear-gradient(to_bottom,rgba(233,212,195,0.01)_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_50%,#000_70%,transparent_100%)]" />

      <div className="max-w-4xl mx-auto text-center px-6 relative z-10 flex flex-col items-center">
        
        {/* Core Engine Status Tag */}
        <div className="inline-flex items-center space-x-2 px-3 py-1 glass-card rounded-full text-[10px] font-mono tracking-widest text-[#E9D4C3] uppercase mb-6 animate-pulse">
          <span className="w-1.5 h-1.5 rounded-full bg-emerald-500" />
          <span>TF-IDF RECOGNITION VECTORS // ONLINE</span>
        </div>

        {/* Confident Technical Headline */}
        <h1 className="font-display text-4xl sm:text-6xl font-bold tracking-tight text-white mb-6 max-w-3xl leading-tight">
          Every Research Paper, Cross-Referenced For You.
        </h1>

        {/* Contextual Sub-headline */}
        <p className="font-sans text-sm sm:text-base text-[#7C8FA9] max-w-xl leading-relaxed mb-10">
          Instead of just listing entries, PaperLens tokenizes keyword arrays and abstracts to compute similarities dynamically using advanced cosine telemetry.
        </p>

        {/* CTA Console Actions */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 w-full sm:w-auto">
          <Link
            href="/papers"
            className="liquid-ripple w-full sm:w-auto px-6 py-3 bg-[#8A1A1A] hover:bg-red-700 text-[#E9D4C3] font-mono text-xs font-bold uppercase tracking-wider transition-all rounded shadow-glow-red duration-200 text-center"
          >
            // INITIALIZE_EXPLORER
          </Link>
          
          <Link
            href="/methodology"
            className="liquid-ripple w-full sm:w-auto px-6 py-3 glass-card hover:bg-[#E9D4C3]/10 text-[#7C8FA9] hover:text-[#E9D4C3] font-mono text-xs uppercase tracking-wider transition-all rounded text-center"
          >
            VIEW_MATHEMATICS.log
          </Link>
        </div>

        {/* Real-time Telemetry Monitor Strip */}
        <div className="mt-16 w-full max-w-2xl grid grid-cols-3 border-t border-[#E9D4C3]/5 pt-6 font-mono text-[10px] text-[#7C8FA9]">
          <div className="flex items-center justify-center gap-2">
            <Terminal className="w-3.5 h-3.5 text-[#8A1A1A]" />
            <span>INDEXED: 42_LOGS</span>
          </div>
          <div className="flex items-center justify-center gap-2 border-x border-[#E9D4C3]/5">
            <Radar className="w-3.5 h-3.5 text-[#8A1A1A]" />
            <span>RADAR: COSIN_SIM</span>
          </div>
          <div className="flex items-center justify-center gap-2">
            <Cpu className="w-3.5 h-3.5 text-[#8A1A1A]" />
            <span>LATENCY: 0.04ms</span>
          </div>
        </div>

      </div>
    </section>
  );
}