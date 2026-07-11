"use client";

import { useState } from "react";
import Link from "next/link";
import Hero from "@/components/layout/Hero";
import StatsDashboard from "@/components/charts/StatsDashboard";
import { Search, Sliders, Cpu, ArrowUpRight, BookOpen, CheckCircle, HelpCircle, Mail, ChevronRight } from "lucide-react";

export default function Home() {
  // FAQ interactive state management
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  const fields = [
    { code: "NLP", title: "Natural Language Processing", desc: "Token vectors and high-dimensional attention array parsing models." },
    { code: "XAI", title: "Explainable AI & Fairness", desc: "Deconstructing deep node layers to identify systemic predictive skew metrics." },
    { code: "EDM", title: "Educational Data Mining", desc: "Evaluating student engagement histories based directly on our OULAD schemas." },
    { code: "ROB", title: "Robustness & Security", desc: "Testing structural threshold vulnerability metrics under clean vector anomalies." }
  ];

  const trendingPapers = [
    { title: "Fairness Vectors in Multi-Layered Academic Profiles", field: "XAI", year: 2025, cites: 142 },
    { title: "Attention-Weighted Feature Mappings for Online Attrition", field: "EDM", year: 2026, cites: 89 },
    { title: "Adversarial Robustness Boundaries within Text Tokenizers", field: "ROB", year: 2025, cites: 64 },
    { title: "Cross-Lingual Embedding Geometry under Vector Constraints", field: "NLP", year: 2026, cites: 31 }
  ];

  const faqs = [
    { q: "How does the underlying similarity calculation mechanism operate?", a: "Every paper abstract is processed into structural text strings, stripped of stop-words, and weighted into high-dimensional numerical feature frames using TF-IDF. The console then maps cosine distances across vector pathways to calculate real-time contextual similarity ratings." },
    { q: "Can external researchers upload custom datasets into the mainframe?", a: "Yes. Logged-in operators can access the structural submission terminals to append research files, keyword indices, and citation tracking objects into the centralized relational matrix." },
    { q: "Is the operational codebase fully open source?", a: "Affirmative. PaperLens is deployed across structured open source dual-repository environments split cleanly between core client rendering and separate background service layers." }
  ];

  return (
    <div className="w-full bg-[#0A1626] text-[#F5EFEB] selection:bg-[#8A1A1A]">
      
      {/* 1. HERO SECTION */}
      <Hero />

      <div className="max-w-7xl mx-auto px-6 space-y-32 py-24">

        {/* 2. PLATFORM FEATURES */}
        <section className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="glass-card p-6 rounded-lg border border-[#E9D4C3]/10">
            <Search className="w-6 h-6 text-[#8A1A1A] mb-4 shadow-sm" />
            <h3 className="font-display text-base font-bold text-[#E9D4C3] mb-2">// 01 // TEXTUAL_SEARCH</h3>
            <p className="font-sans text-xs text-[#7C8FA9] leading-relaxed">Execute absolute lexical lookups across tokenized abstract sets and system headers instantly.</p>
          </div>
          <div className="glass-card p-6 rounded-lg border border-[#E9D4C3]/10">
            <Sliders className="w-6 h-6 text-[#8A1A1A] mb-4" />
            <h3 className="font-display text-base font-bold text-[#E9D4C3] mb-2">// 02 // MULTI_FILTER</h3>
            <p className="font-sans text-xs text-[#7C8FA9] leading-relaxed">Isolate core documents using high-precision filters checking publication timelines and classification metrics.</p>
          </div>
          <div className="glass-card p-6 rounded-lg border border-[#E9D4C3]/10">
            <Cpu className="w-6 h-6 text-[#8A1A1A] mb-4" />
            <h3 className="font-display text-base font-bold text-[#E9D4C3] mb-2">// 03 // RADAR_ALIGNMENT</h3>
            <p className="font-sans text-xs text-[#7C8FA9] leading-relaxed">Calculate high-dimensional contextual overlays across abstracts utilizing spatial math profiles.</p>
          </div>
        </section>


        {/* 3. SIMILARITY ENGINE OVERVIEW */}
        <section className="glass-card p-8 rounded-lg border border-[#E9D4C3]/10 bg-gradient-to-r from-[#E9D4C3]/5 to-transparent">
          <div className="max-w-3xl">
            <span className="font-mono text-[10px] text-[#8A1A1A] uppercase tracking-widest block mb-2">// SYSTEM_SPECIFICATION_PROTOCOL</span>
            <h2 className="font-display text-2xl sm:text-3xl font-bold text-[#E9D4C3] mb-6 tracking-tight">How the Telemetry Scanning Engine Runs Calculations</h2>
            
            <div className="space-y-6 font-sans text-sm text-[#7C8FA9]">
              <div className="flex items-start space-x-4">
                <span className="font-mono text-xs text-[#E9D4C3] bg-[#0A1626] border border-[#E9D4C3]/20 px-2 py-0.5 rounded">STEP_01</span>
                <p><strong className="text-white font-medium">Lexical String Breakdown:</strong> When a document register uploads, the controller converts raw abstract strings into structural text vectors, executing normalization tracking mappings.</p>
              </div>
              <div className="flex items-start space-x-4">
                <span className="font-mono text-xs text-[#E9D4C3] bg-[#0A1626] border border-[#E9D4C3]/20 px-2 py-0.5 rounded">STEP_02</span>
                <p><strong className="text-white font-medium">TF-IDF Vector Mappings:</strong> Individual tokens scale based on unique computational weight frameworks to evaluate systemic system value bounds.</p>
              </div>
              <div className="flex items-start space-x-4">
                <span className="font-mono text-xs text-[#E9D4C3] bg-[#0A1626] border border-[#E9D4C3]/20 px-2 py-0.5 rounded">STEP_03</span>
                <p><strong className="text-white font-medium">Cosine Matrix Traversal:</strong> High-dimensional inner product vectors match across tracking files to generate dynamic match ratings instantly.</p>
              </div>
            </div>
          </div>
        </section>


        {/* 4. RESEARCH FIELDS COVERED */}
        <section>
          <div className="mb-8">
            <span className="font-mono text-[10px] text-[#7C8FA9] uppercase block mb-1">// FIELD_REGISTRY</span>
            <h2 className="font-display text-2xl font-bold text-white tracking-tight">Monitored Scientific Arenas</h2>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {fields.map((f) => (
              <div key={f.code} className="glass-card p-5 rounded-lg border border-[#E9D4C3]/5 hover:border-[#8A1A1A]/50 transition-colors">
                <div className="font-mono text-xs text-[#8A1A1A] mb-3">#_{f.code}</div>
                <h4 className="font-display text-sm font-bold text-[#E9D4C3] mb-2">{f.title}</h4>
                <p className="font-sans text-xs text-[#7C8FA9] leading-relaxed">{f.desc}</p>
              </div>
            ))}
          </div>
        </section>


        {/* 5. TRENDING PAPERS */}
        <section>
          <div className="flex justify-between items-end mb-8">
            <div>
              <span className="font-mono text-[10px] text-[#7C8FA9] uppercase block mb-1">// REALTIME_METRICS</span>
              <h2 className="font-display text-2xl font-bold text-white tracking-tight">High-Traffic Vectors</h2>
            </div>
            <Link href="/papers" className="font-mono text-xs text-[#E9D4C3] flex items-center hover:underline">
              ALL_LOGS.exe <ChevronRight className="w-3 h-3 ml-0.5" />
            </Link>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {trendingPapers.map((paper, idx) => (
              <div key={idx} className="glass-card p-5 rounded-lg border border-[#E9D4C3]/10 flex flex-col justify-between min-h-[180px]">
                <div>
                  <div className="flex justify-between text-[10px] font-mono text-[#7C8FA9] mb-2">
                    <span>// {paper.field}</span>
                    <span>{paper.year}</span>
                  </div>
                  <h4 className="font-display text-xs font-bold text-[#E9D4C3] line-clamp-3 leading-snug">{paper.title}</h4>
                </div>
                <div className="mt-4 pt-3 border-t border-[#E9D4C3]/5 flex items-center justify-between font-mono text-[10px] text-[#7C8FA9]">
                  <span>CITES: <span className="text-white">{paper.cites}</span></span>
                  <Link href={`/papers/${idx}`} className="text-[#8A1A1A] flex items-center font-bold">
                    SCAN <ArrowUpRight className="w-2.5 h-2.5 ml-0.5" />
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </section>


        {/* 6. STATISTICS DASHBOARD */}
        <section className="w-full">
          <div className="mb-8">
            <span className="font-mono text-[10px] text-[#7C8FA9] uppercase block mb-1">// QUANT_TELEMETRY</span>
            <h2 className="font-display text-2xl font-bold text-white tracking-tight">System Core Datasets</h2>
          </div>
          <StatsDashboard />
        </section>


        {/* 7. TESTIMONIALS */}
        <section>
          <div className="mb-8">
            <span className="font-mono text-[10px] text-[#7C8FA9] uppercase block mb-1">// PEER_VALIDATION</span>
            <h2 className="font-display text-2xl font-bold text-white tracking-tight">Operator Telemetry Logs</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="glass-card p-6 rounded-lg font-sans text-xs text-[#7C8FA9] border border-[#E9D4C3]/5">
              <p className="italic leading-relaxed mb-4">"The cosine matching pipeline accurately identified overlapping research tracking vectors that manual searches completely missed during our OULAD verification runs."</p>
              <div className="font-mono text-[10px] text-[#E9D4C3]">— DR. A. VANCE // ML ARCHITECT</div>
            </div>
            <div className="glass-card p-6 rounded-lg font-sans text-xs text-[#7C8FA9] border border-[#E9D4C3]/5">
              <p className="italic leading-relaxed mb-4">"Having clean mathematical engine transparency values mapped inside the methodology terminal radically boosted trust metrics across our cross-validation audits."</p>
              <div className="font-mono text-[10px] text-[#E9D4C3]">— T. ELDRIDGE // SENIOR REHAB DATA DATASET ENGINEER</div>
            </div>
            <div className="glass-card p-6 rounded-lg font-sans text-xs text-[#7C8FA9] border border-[#E9D4C3]/5">
              <p className="italic leading-relaxed mb-4">"Deploying multi-dimensional vector comparisons over standard keyword filters completely bypasses title lexical limitations."</p>
              <div className="font-mono text-[10px] text-[#E9D4C3]">— LEA CHEN // NLP ANALYST CONTROLLER</div>
            </div>
          </div>
        </section>


        {/* 8. NEWSLETTER */}
        <section className="glass-card p-8 rounded-lg border border-[#8A1A1A]/20 text-center max-w-2xl mx-auto relative overflow-hidden">
          <div className="absolute top-0 left-0 w-full h-1 bg-[#8A1A1A]" />
          <Mail className="w-6 h-6 text-[#8A1A1A] mx-auto mb-4" />
          <h3 className="font-display text-lg font-bold text-[#E9D4C3] mb-2">Subscribe to Core Telemetry Syncs</h3>
          <p className="font-sans text-xs text-[#7C8FA9] max-w-sm mx-auto mb-6">Receive automated log printouts covering fresh algorithmic updates and model vectors directly.</p>
          <form onSubmit={(e) => e.preventDefault()} className="flex flex-col sm:flex-row gap-3 w-full max-w-md mx-auto">
            <input 
              type="email" 
              placeholder="OPERATOR_EMAIL@DOMAIN.DAT" 
              className="flex-grow bg-[#0A1626] border border-[#E9D4C3]/20 px-4 py-2 text-xs font-mono rounded text-[#F5EFEB] focus:outline-none focus:border-[#8A1A1A]"
              required
            />
            <button type="submit" className="bg-[#8A1A1A] text-[#E9D4C3] font-mono text-xs uppercase px-4 py-2 rounded font-bold hover:bg-red-700 transition-colors">
              SYNC_STREAM
            </button>
          </form>
        </section>


        {/* 9. FAQ ACCORDION */}
        <section className="max-w-3xl mx-auto w-full">
          <div className="text-center mb-8">
            <HelpCircle className="w-6 h-6 text-[#7C8FA9] mx-auto mb-2" />
            <h2 className="font-display text-xl font-bold text-white tracking-tight">System Knowledge Base</h2>
          </div>
          <div className="space-y-4">
            {faqs.map((faq, index) => (
              <div key={index} className="glass-card rounded-lg border border-[#E9D4C3]/10 overflow-hidden">
                <button
                  onClick={() => setOpenFaq(openFaq === index ? null : index)}
                  className="w-full text-left p-4 font-display text-sm font-bold text-[#E9D4C3] flex justify-between items-center bg-[#E9D4C3]/5"
                >
                  <span>{faq.q}</span>
                  <span className="font-mono text-xs text-[#8A1A1A]">{openFaq === index ? "[-]" : "[+]"}</span>
                </button>
                {openFaq === index && (
                  <div className="p-4 bg-[#0A1626]/50 font-sans text-xs text-[#7C8FA9] border-t border-[#E9D4C3]/5 leading-relaxed">
                    {faq.a}
                  </div>
                )}
              </div>
            ))}
          </div>
        </section>

      </div>
    </div>
  );
}