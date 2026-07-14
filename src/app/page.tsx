"use client";

import React, { useState } from "react";
import Link from "next/link";
import { ArrowUpRight, Search, Activity, ShieldCheck, Database, HelpCircle, Layers, Mail } from "lucide-react";
import StatsDashboard from "@/components/charts/StatsDashboard";

export default function HomePage() {
  const [activeFaq, setActiveFaq] = useState<number | null>(null);

  // FAQ matrix from documentation parameters
  const faqData = [
    { q: "How does the matching engine calculate vector similarity?", a: "The application parses text sequences using a dynamic TF-IDF tokenization matrix, measuring vector paths against other stored datasets through a stable Cosine Similarity framework." },
    { q: "Can public guests submit peer appraisal reviews?", a: "No. Guests can read historical appraisal metrics only. A valid authenticated user session is required to initialize and post new reviews." },
    { q: "What research fields are cataloged within the matrix?", a: "The repository officially scales across Artificial Intelligence, NLP, Computer Vision, Data Science, Bioinformatics, Cybersecurity, Quantum Computing, and HCI." },
  ];

  return (
    <main className="min-h-screen bg-[#0A1626] text-[#F5F5F5] font-['General_Sans'] relative overflow-hidden">
      
      {/* --- BACKGROUND AMBIENT GLOWS --- */}
      <div className="absolute top-[-5%] right-[-10%] w-[600px] h-[600px] bg-[#7C8FA9]/4 rounded-full blur-[150px] pointer-events-none" />
      <div className="absolute top-[25%] left-[-15%] w-[500px] h-[500px] bg-[#8A1A1A]/3 rounded-full blur-[130px] pointer-events-none" />
      <div className="absolute bottom-[10%] right-[-5%] w-[600px] h-[600px] bg-[#7C8FA9]/3 rounded-full blur-[160px] pointer-events-none" />

      {/* ==========================================
          1. HERO SECTION (60-70vh layout capacity)
         ========================================== */}
      <section className="max-w-7xl mx-auto px-6 pt-20 pb-16 min-h-[65vh] flex flex-col lg:flex-row items-center justify-between gap-12 relative z-10">
        <div className="flex-1 space-y-6 text-center lg:text-left">
          <span className="inline-block font-mono text-xs uppercase tracking-[0.25em] text-[#8A1A1A] bg-[#8A1A1A]/5 px-3 py-1 rounded border border-[#8A1A1A]/20">
            // LIVE_DOCUMENT_MATRIX_ROUTING
          </span>
          <h1 className="text-4xl md:text-6xl font-bold font-['Clash_Display'] text-[#E9D4C3] tracking-tight leading-tight">
            Deconstruct Research Vectors through <span className="text-[#8A1A1A]">PaperLens</span>
          </h1>
          <p className="text-sm md:text-base text-[#A8B3C4] max-w-2xl mx-auto lg:mx-0 leading-relaxed">
            Analyze document intersections, cross-reference high-dimensional semantic spaces, and explore research trajectories using an isolated Cosine Similarity framework.
          </p>
          <div className="pt-4 flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
            <Link
              href="/explore"
              className="group flex items-center justify-center gap-2 px-6 py-3 bg-[#8A1A1A] hover:bg-[#4E0000] text-white font-semibold text-xs uppercase tracking-wider rounded-lg shadow-lg shadow-[#8A1A1A]/20 border border-[#8A1A1A] transition-all duration-300"
            >
              Explore Catalog Matrix
              <ArrowUpRight className="w-4 h-4 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
            </Link>
            <Link
              href="/methodology"
              className="flex items-center justify-center px-6 py-3 border border-[rgba(233,212,195,0.15)] hover:border-[#E9D4C3] text-[#E9D4C3] font-semibold text-xs uppercase tracking-wider rounded-lg backdrop-blur-[16px] bg-[rgba(233,212,195,0.03)] transition-colors"
            >
              Our Vector Methodology
            </Link>
          </div>
        </div>

        {/* Floating Glass Display Showcase Node */}
        <div className="flex-1 w-full max-w-md relative flex items-center justify-center p-8 group">
          {/* Animated Radar Illustration Circle Overlay */}
          <div className="absolute w-72 h-72 border border-[#8A1A1A]/20 rounded-full animate-pulse flex items-center justify-center">
            <div className="w-48 h-48 border border-[#8A1A1A]/40 rounded-full animate-[ping_3s_linear_infinite]" />
          </div>

          {/* Sample Glass Research Card */}
          <div className="w-full backdrop-blur-[16px] bg-[rgba(233,212,195,0.06)] border border-[rgba(233,212,195,0.12)] rounded-2xl p-6 relative shadow-2xl transition-transform duration-500 group-hover:-translate-y-2">
            <div className="flex justify-between items-start mb-4">
              <span className="font-mono text-[10px] text-[#7C8FA9] uppercase tracking-wider">// CORE_SAMPLE.node</span>
              <div className="w-8 h-8 rounded-full border border-[#8A1A1A] bg-[#0A1626] flex items-center justify-center text-[10px] font-mono font-bold text-[#E9D4C3]">
                94%
              </div>
            </div>
            <h4 className="font-['Clash_Display'] text-sm font-bold text-[#E9D4C3] mb-2">Attention Is All You Need</h4>
            <p className="text-xs text-[#A8B3C4] line-clamp-3 leading-relaxed">
              We propose a new simple network architecture, the Transformer, based solely on attention mechanisms, dispensing with recurrence completely.
            </p>
            <div className="mt-4 pt-3 border-t border-[rgba(233,212,195,0.08)] flex justify-between font-mono text-[9px] text-[#7C8FA9]">
              <span>CITES: 125.4k</span>
              <span>FIELD: NLP</span>
            </div>
          </div>
        </div>
      </section>

      {/* ==========================================
          2. PLATFORM FEATURES
         ========================================== */}
      <section className="max-w-7xl mx-auto px-6 py-16 relative z-10">
        <div className="mb-12 text-center max-w-2xl mx-auto">
          <h2 className="text-2xl md:text-3xl font-bold font-['Clash_Display'] text-[#E9D4C3] tracking-wide">Platform Capabilities</h2>
          <p className="text-xs font-mono text-[#7C8FA9] mt-2">// SYSTEM_OPERATIONAL_INFRASTRUCTURE</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="backdrop-blur-[16px] bg-[rgba(233,212,195,0.04)] border border-[rgba(233,212,195,0.08)] hover:border-[#8A1A1A]/40 rounded-xl p-6 transition-all duration-300">
            <Search className="w-6 h-6 text-[#8A1A1A] mb-4" />
            <h3 className="text-base font-bold text-[#E9D4C3] mb-2">Instant Elastic Indexing</h3>
            <p className="text-xs text-[#A8B3C4] leading-relaxed">Query across thousands of documentation registers smoothly using live character query processing arrays.</p>
          </div>
          <div className="backdrop-blur-[16px] bg-[rgba(233,212,195,0.04)] border border-[rgba(233,212,195,0.08)] hover:border-[#8A1A1A]/40 rounded-xl p-6 transition-all duration-300">
            <Activity className="w-6 h-6 text-[#7C8FA9] mb-4" />
            <h3 className="text-base font-bold text-[#E9D4C3] mb-2">Similarity Stamps</h3>
            <p className="text-xs text-[#A8B3C4] leading-relaxed">Inspect immediate similarity computations utilizing real-time custom radar indicator assets seamlessly.</p>
          </div>
          <div className="backdrop-blur-[16px] bg-[rgba(233,212,195,0.04)] border border-[rgba(233,212,195,0.08)] hover:border-[#8A1A1A]/40 rounded-xl p-6 transition-all duration-300">
            <ShieldCheck className="w-6 h-6 text-[#E9D4C3] mb-4" />
            <h3 className="text-base font-bold text-[#E9D4C3] mb-2">Secure Peer Appraisals</h3>
            <p className="text-xs text-[#A8B3C4] leading-relaxed">Protected review systems allow authenticated users to post analytical evaluation parameters securely.</p>
          </div>
        </div>
      </section>

      {/* ==========================================
          3. SIMILARITY ENGINE OVERVIEW
         ========================================== */}
      <section className="max-w-7xl mx-auto px-6 py-16 relative z-10">
        <div className="backdrop-blur-[16px] bg-[rgba(233,212,195,0.06)] border border-[rgba(233,212,195,0.12)] rounded-2xl p-8 flex flex-col lg:flex-row gap-8 items-center">
          <div className="flex-1 space-y-4">
            <h2 className="text-2xl font-bold font-['Clash_Display'] text-[#E9D4C3] tracking-wide">The Similarity Engine</h2>
            <p className="text-xs font-mono text-[#8A1A1A]">// COMPUTE_SERVICE_SPECIFICATIONS</p>
            <p className="text-sm text-[#A8B3C4] leading-relaxed">
              PaperLens processes text through token parsing strings, extracting terms across abstracts, titles, and unique keywords. The resulting weight configuration maps into multidimensional matrices using a strict dynamic fallback method:
            </p>
            <blockquote className="border-l-2 border-[#8A1A1A] pl-4 py-1 font-mono text-xs text-[#F5F5F5] bg-[#0A1626]/40">
              Cosine Similarity Score = (VectorA · VectorB) / (||VectorA|| * ||VectorB||)
            </blockquote>
          </div>
          <div className="flex-1 w-full bg-[#0A1626]/80 p-6 rounded-xl border border-[rgba(233,212,195,0.08)] font-mono text-xs text-[#7C8FA9] space-y-2">
            <div className="text-[#E9D4C3] font-bold">// EXECUTION_LOG_SAMPLE:</div>
            <div>[STEP 1] Fetching active dataset pool matrix...</div>
            <div>[STEP 2] Initializing tokenization mappings for corpus...</div>
            <div>[STEP 3] Evaluating string distributions against target node...</div>
            <div className="text-[#8A1A1A] font-bold">[SUCCESS] Top 4 vector neighbors extracted in 42ms.</div>
          </div>
        </div>
      </section>

      {/* ==========================================
          4. RESEARCH FIELDS COVERED
         ========================================== */}
      <section className="max-w-7xl mx-auto px-6 py-16 relative z-10">
        <div className="mb-10 border-l-2 border-[#8A1A1A] pl-4">
          <h2 className="text-2xl font-bold font-['Clash_Display'] text-[#E9D4C3] tracking-wide">Research Fields Covered</h2>
          <p className="text-xs font-mono text-[#7C8FA9] mt-1">Operational categorical domain indexes.</p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-center">
          {["Artificial Intelligence", "Natural Language Processing", "Computer Vision", "Data Science", "Bioinformatics", "Cybersecurity", "Quantum Computing", "Human-Computer Interaction"].map((f, i) => (
            <div key={i} className="backdrop-blur-[16px] bg-[rgba(233,212,195,0.04)] border border-[rgba(233,212,195,0.08)] p-4 rounded-lg font-mono text-xs text-[#F5F5F5]">
              {f}
            </div>
          ))}
        </div>
      </section>

      {/* ==========================================
          5. TRENDING PAPERS
         ========================================== */}
      <section className="max-w-7xl mx-auto px-6 py-16 relative z-10">
        <div className="mb-8 flex justify-between items-end">
          <div>
            <h2 className="text-2xl font-bold font-['Clash_Display'] text-[#E9D4C3] tracking-wide">Trending Document Nodes</h2>
            <p className="text-xs font-mono text-[#7C8FA9] mt-1">// HIGHEST_APPRECIATION_RECORDS</p>
          </div>
          <Link href="/explore" className="text-xs font-mono text-[#8A1A1A] hover:underline flex items-center gap-1">
            VIEW_ALL_NODES <span>→</span>
          </Link>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="backdrop-blur-[16px] bg-[rgba(233,212,195,0.04)] border border-[rgba(233,212,195,0.08)] p-5 rounded-xl flex items-center justify-between gap-4">
            <div>
              <span className="text-[10px] font-mono uppercase text-[#7C8FA9] bg-[#0A1626] px-2 py-0.5 border border-[rgba(233,212,195,0.1)] rounded">CV</span>
              <h4 className="text-sm font-bold text-[#E9D4C3] mt-2 mb-1">Deep Residual Learning for Image Recognition</h4>
              <p className="text-xs text-[#A8B3C4] line-clamp-2">ResNet architecture resolving the vanishing gradient challenges over deep layers.</p>
            </div>
            <div className="font-mono text-xs font-bold text-[#8A1A1A] bg-[#0A1626] border border-[rgba(233,212,195,0.1)] px-3 py-2 rounded shadow-inner">
              184.2k+
            </div>
          </div>

          <div className="backdrop-blur-[16px] bg-[rgba(233,212,195,0.04)] border border-[rgba(233,212,195,0.08)] p-5 rounded-xl flex items-center justify-between gap-4">
            <div>
              <span className="text-[10px] font-mono uppercase text-[#7C8FA9] bg-[#0A1626] px-2 py-0.5 border border-[rgba(233,212,195,0.1)] rounded">DS</span>
              <h4 className="text-sm font-bold text-[#E9D4C3] mt-2 mb-1">Adam: A Method for Stochastic Optimization</h4>
              <p className="text-xs text-[#A8B3C4] line-clamp-2">The dominant adaptive learning rate optimizer driving modern computational calculations.</p>
            </div>
            <div className="font-mono text-xs font-bold text-[#8A1A1A] bg-[#0A1626] border border-[rgba(233,212,195,0.1)] px-3 py-2 rounded shadow-inner">
              162.0k+
            </div>
          </div>
        </div>
      </section>

      {/* ==========================================
          6. STATISTICS DASHBOARD (Mounted Recharts Component)
         ========================================== */}
      <section className="max-w-7xl mx-auto px-6 py-16 relative z-10">
        <div className="mb-10 text-center md:text-left border-l-2 border-[#8A1A1A] pl-4">
          <h2 className="text-2xl md:text-3xl font-bold font-['Clash_Display'] text-[#E9D4C3] tracking-wide">
            Platform Matrix Metrics
          </h2>
          <p className="text-xs font-mono text-[#7C8FA9] mt-1">
            Real-time metric telemetry mapping dataset trends, distributions, and citations.
          </p>
        </div>

        {/* Mounted Dashboard Component */}
        <StatsDashboard />
      </section>

      {/* ==========================================
          7. TESTIMONIALS
         ========================================== */}
      <section className="max-w-7xl mx-auto px-6 py-16 relative z-10">
        <div className="mb-12 text-center max-w-xl mx-auto">
          <h2 className="text-2xl font-bold font-['Clash_Display'] text-[#E9D4C3] tracking-wide">Peer Appraisals</h2>
          <p className="text-xs font-mono text-[#7C8FA9] mt-2">// USER_EXPRESSIONS_CORPUS</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="backdrop-blur-[16px] bg-[rgba(233,212,195,0.04)] border border-[rgba(233,212,195,0.08)] p-6 rounded-xl space-y-3">
            <p className="text-xs text-[#A8B3C4] leading-relaxed italic">
              "The dynamic Cosine similarity calculations make cross-referencing research tracks extremely quick. The clean layout configuration renders metrics flawlessly."
            </p>
            <div className="font-mono text-[11px] text-[#E9D4C3]">
              — Dr. Marcus Brody, <span className="text-[#8A1A1A]">AI Research Lead</span>
            </div>
          </div>

          <div className="backdrop-blur-[16px] bg-[rgba(233,212,195,0.04)] border border-[rgba(233,212,195,0.08)] p-6 rounded-xl space-y-3">
            <p className="text-xs text-[#A8B3C4] leading-relaxed italic">
              "The custom StatStamp circular radar indicator sweep feels incredibly premium. It makes verifying token tracking balances visually satisfying."
            </p>
            <div className="font-mono text-[11px] text-[#E9D4C3]">
              — Clara Vance, <span className="text-[#8A1A1A]">Data Scientist Analyst</span>
            </div>
          </div>
        </div>
      </section>

      {/* ==========================================
          8. NEWSLETTER
         ========================================== */}
      <section className="max-w-7xl mx-auto px-6 py-16 relative z-10">
        <div className="backdrop-blur-[16px] bg-[rgba(233,212,195,0.06)] border border-[rgba(233,212,195,0.12)] rounded-2xl p-8 max-w-3xl mx-auto text-center space-y-6">
          <div className="flex justify-center"><Mail className="w-8 h-8 text-[#8A1A1A]" /></div>
          <h3 className="text-xl font-bold font-['Clash_Display'] text-[#E9D4C3] tracking-wide">Subscribe to Core Indexes</h3>
          <p className="text-xs text-[#A8B3C4] max-w-md mx-auto leading-relaxed">
            Receive automated structural data briefings when new landmark research entries are added to the corpus mapping lines.
          </p>
          <div className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto">
            <input
              type="email"
              placeholder="ENTER_EMAIL_ADDRESS.cfg..."
              className="flex-1 bg-[#0A1626] border border-[rgba(233,212,195,0.15)] focus:border-[#8A1A1A] text-xs font-mono p-2.5 rounded-lg text-white outline-none placeholder-[#718096]"
            />
            <button
              onClick={() => alert("System email registration logged.")}
              className="px-5 py-2.5 bg-[#8A1A1A] hover:bg-[#4E0000] text-white font-mono text-xs uppercase tracking-wider rounded-lg transition-colors"
            >
              Subscribe
            </button>
          </div>
        </div>
      </section>

      {/* ==========================================
          9. FAQ SECTION
         ========================================== */}
      <section className="max-w-4xl mx-auto px-6 py-16 relative z-10 pb-28">
        <div className="mb-10 text-center">
          <h2 className="text-2xl font-bold font-['Clash_Display'] text-[#E9D4C3] tracking-wide">Frequently Asked Queries</h2>
          <p className="text-xs font-mono text-[#7C8FA9] mt-2">// RESOLVING_INDEX_STARVATION</p>
        </div>

        <div className="space-y-4">
          {faqData.map((faq, idx) => (
            <div
              key={idx}
              className="backdrop-blur-[16px] bg-[rgba(233,212,195,0.04)] border border-[rgba(233,212,195,0.08)] rounded-xl overflow-hidden transition-all duration-300"
            >
              <button
                onClick={() => setActiveFaq(activeFaq === idx ? null : idx)}
                className="w-full p-5 text-left flex items-center justify-between text-[#E9D4C3] hover:text-[#F5F5F5] font-medium text-sm transition-colors"
              >
                <span>{faq.q}</span>
                <HelpCircle className={`w-4 h-4 text-[#8A1A1A] transition-transform duration-300 ${activeFaq === idx ? 'rotate-180' : ''}`} />
              </button>
              
              {activeFaq === idx && (
                <div className="px-5 pb-5 text-xs text-[#A8B3C4] leading-relaxed border-t border-[rgba(233,212,195,0.04)] pt-3 bg-[#0A1626]/20">
                  {faq.a}
                </div>
              )}
            </div>
          ))}
        </div>
      </section>

    </main>
  );
}