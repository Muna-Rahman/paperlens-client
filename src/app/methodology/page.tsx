"use client";

import { Activity, BookOpen, Layers, GitCommit } from "lucide-react";

export default function MethodologyPage() {
  return (
    <div className="max-w-4xl mx-auto py-8 px-4 pb-32 space-y-12">
      
      {/* Title Header */}
      <div>
        <span className="font-mono text-[10px] text-[#7C8FA9] tracking-widest block mb-1">// QUANT_ALGORITHMIC_BREAKDOWN</span>
        <h1 className="font-display text-3xl font-bold text-white tracking-tight">Mathematical Architecture</h1>
      </div>

      {/* Main plain language concept profiles */}
      <div className="space-y-6">
        
        {/* TF-IDF Component */}
        <div className="glass-card p-6 rounded-lg border border-[#E9D4C3]/10">
          <h3 className="font-display text-base font-bold text-[#E9D4C3] mb-2 flex items-center space-x-2">
            <BookOpen className="w-4 h-4 text-[#8A1A1A]" />
            <span>1. TF-IDF // Term Frequency - Inverse Document Frequency</span>
          </h3>
          <p className="font-sans text-xs text-[#7C8FA9] leading-relaxed">
            Instead of just counting words, TF-IDF evaluates how unique a specific term is across the entire network database. If a term appears frequently inside one single abstract page but is exceptionally rare across the rest of the ecosystem, the engine assigns it a massive mathematical weight factor. Standard bridge words (like "the" or "and") are heavily filtered out automatically.
          </p>
        </div>

        {/* Cosine Similarity Component */}
        <div className="glass-card p-6 rounded-lg border border-[#E9D4C3]/10">
          <h3 className="font-display text-base font-bold text-[#E9D4C3] mb-2 flex items-center space-x-2">
            <Layers className="w-4 h-4 text-[#8A1A1A]" />
            <span>2. Cosine Similarity // Directional Orientation Metrics</span>
          </h3>
          <p className="font-sans text-xs text-[#7C8FA9] leading-relaxed">
            Once texts convert into arrays of TF-IDF numerical scores, each document is conceptualized as an arrow pointing out into a massive multi-dimensional geometric chart area. The console calculates the actual angle spacing between those arrows. If two documents point along the same geometric coordinate path, they receive a high contextual match percentage, independent of their absolute lengths.
          </p>
        </div>

        {/* Core Processing Pipeline Loop */}
        <div className="glass-card p-6 rounded-lg border border-[#E9D4C3]/10">
          <h3 className="font-display text-base font-bold text-[#E9D4C3] mb-2 flex items-center space-x-2">
            <Activity className="w-4 h-4 text-[#8A1A1A]" />
            <span>3. The Document Alignment Sequence</span>
          </h3>
          <p className="font-sans text-xs text-[#7C8FA9] leading-relaxed">
            When you engage a paper profile, the execution matrix strips the abstract text down to unique root arrays, aligns the matrix structures, applies vector weighting variables, and loops cross-references against all other logs inside the repository to instantly yield the top matches.
          </p>
        </div>

      </div>

      {/* 🛠️ STEP-BY-STEP WORKED EXAMPLE SECTION */}
      <section className="glass-card p-6 sm:p-8 rounded-lg border border-[#8A1A1A]/30 bg-gradient-to-b from-[#8A1A1A]/5 to-transparent space-y-4">
        <div className="flex items-center space-x-2 text-[#E9D4C3] font-mono text-xs uppercase tracking-widest">
          <GitCommit className="w-4 h-4 text-[#8A1A1A]" />
          <span>TRACED_RUN_EXAMPLE // DEMO_PLAYLOAD_CALCULATION</span>
        </div>

        <div className="font-sans text-xs text-[#7C8FA9] space-y-4 leading-relaxed">
          <p>
            Let's trace out a clear mathematical processing match sequence using two simple mock abstracts inside our sandbox engine:
          </p>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 font-mono text-[11px] bg-[#0A1626] p-4 rounded border border-[#E9D4C3]/5">
            <div className="space-y-1">
              <span className="text-white block font-bold">// ABSTRACT_NODE_ALPHA</span>
              <p className="italic text-[#7C8FA9]">"Analyzing student dropout algorithms and performance data structures."</p>
            </div>
            <div className="space-y-1">
              <span className="text-white block font-bold">// ABSTRACT_NODE_BETA</span>
              <p className="italic text-[#7C8FA9]">"Predicting student attrition variables with custom data arrays."</p>
            </div>
          </div>

          <div className="space-y-3 pt-2">
            <p className="flex items-start">
              <strong className="text-white font-medium mr-1">Step A (Token Extraction Matrix):</strong> 
              The tokenizer isolates highly unique root identifier keys, noting that terms like <span className="text-white font-mono bg-gray-900 px-1 rounded">"student"</span> and <span className="text-white font-mono bg-gray-900 px-1 rounded">"data"</span> map actively across both blocks, while <span className="text-white font-mono bg-gray-900 px-1 rounded">"dropout"</span> and <span className="text-white font-mono bg-gray-900 px-1 rounded">"attrition"</span> serve as close semantic fields.
            </p>
            <p className="flex items-start">
              <strong className="text-white font-medium mr-1">Step B (TF-IDF Weight Alignment):</strong> 
              Rare mathematical keys (like <span className="text-white font-mono bg-gray-900 px-1 rounded">"algorithms"</span>) get elevated score attributes, while common overlapping words are downweighted, converting the text strings cleanly into spatial coordinates.
            </p>
            <p className="flex items-start">
              <strong className="text-white font-medium mr-1">Step C (Cosine Geometric Summation):</strong> 
              The system computes the dot product of the coordinate structures, yielding a final inner space orientation alignment rating of <span className="text-[#E9D4C3] font-mono font-bold bg-[#8A1A1A]/30 px-1.5 py-0.5 rounded">0.866</span>. 
            </p>
            <p className="font-mono text-[11px] text-[#E9D4C3] pt-2 border-t border-[#E9D4C3]/5">
              &gt;&gt; LOG_RESULT: Semantic Telemetry Scan yields a definitive matching factor of 87%.
            </p>
          </div>
        </div>
      </section>

    </div>
  );
}