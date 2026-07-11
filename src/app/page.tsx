"use client";

import { useState } from "react";
import Link from "next/link";
import Hero from "@/components/layout/Hero";
import StatsDashboard from "@/components/charts/StatsDashboard";
import { Search, Sliders, Cpu, ArrowUpRight, BookOpen, CheckCircle, HelpCircle, Mail, ChevronRight } from "lucide-react";

export default function Home() {
  // Toggle individual FAQ items
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  const fields = [
    { code: "NLP", title: "Natural Language Processing", desc: "Teaching computers to actually read, understand, and break down complex language patterns in research papers." },
    { code: "XAI", title: "Explainable AI & Fairness", desc: "Looking inside complicated AI models to make sure they are making decisions fairly and without hidden biases." },
    { code: "EDM", title: "Educational Data Mining", desc: "Studying how students learn online, using real platform data to spot who might need extra help before they fall behind." },
    { code: "ROB", title: "Robustness & Security", desc: "Testing systems against unexpected errors or tricky inputs to make sure they stay reliable under pressure." }
  ];

  const trendingPapers = [
    { title: "Checking Fairness Models in Multi-Layered Student Academic Profiles", field: "XAI", year: 2025, cites: 142 },
    { title: "Using Smart Feature Mapping to Spot When Online Learners Drop Out Early", field: "EDM", year: 2026, cites: 89 },
    { title: "Finding the Breaking Point of Modern Text Scanning Tools Under Tricky Inputs", field: "ROB", year: 2025, cites: 64 },
    { title: "How Language Translation Models Group Words Geometrically in Multi-Dimensional Spaces", field: "NLP", year: 2026, cites: 31 }
  ];

  const faqs = [
    { 
      q: "How does the paper matching engine actually work?", 
      a: "First, we clean up the paper's text by pulling out regular words that don't add much meaning (like 'the' or 'is'). Then, we use a method called TF-IDF to find the most important keywords that make that paper unique. Finally, we look at the mathematical angle between these keyword sets—using Cosine Similarity—to tell you exactly how close the two papers match in topics." 
    },
    { 
      q: "Can I upload my own research papers to the database?", 
      a: "Absolutely. Once you log into your demo account, you will get access to a straightforward submission form. From there, you can type in your paper's title, field, abstract, and keywords to instantly add it to the system's search pool." 
    },
    { 
      q: "Is the project completely open source?", 
      a: "Yes, it is! PaperLens is split into two cleanly separated, open code repositories. One handles everything you see on the screen (the frontend), and the other takes care of the math and background processing (the backend)." 
    }
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
            <h3 className="font-display text-base font-bold text-[#E9D4C3] mb-2">// 01 // TEXT SEARCH</h3>
            <p className="font-sans text-xs text-[#7C8FA9] leading-relaxed">Type in a quick keyword to scan titles, headers, and summaries across the entire collection instantly.</p>
          </div>
          <div className="glass-card p-6 rounded-lg border border-[#E9D4C3]/10">
            <Sliders className="w-6 h-6 text-[#8A1A1A] mb-4" />
            <h3 className="font-display text-base font-bold text-[#E9D4C3] mb-2">// 02 // DYNAMIC FILTERS</h3>
            <p className="font-sans text-xs text-[#7C8FA9] leading-relaxed">Narrow down your scope by selecting specific research topics, years, or citation milestones.</p>
          </div>
          <div className="glass-card p-6 rounded-lg border border-[#E9D4C3]/10">
            <Cpu className="w-6 h-6 text-[#8A1A1A] mb-4" />
            <h3 className="font-display text-base font-bold text-[#E9D4C3] mb-2">// 03 // SIMILARITY RADAR</h3>
            <p className="font-sans text-xs text-[#7C8FA9] leading-relaxed">Go beyond simple word matching. Our engine reads text meaning to find deeply connected papers.</p>
          </div>
        </section>


        {/* 3. SIMILARITY ENGINE OVERVIEW */}
        <section className="glass-card p-8 rounded-lg border border-[#E9D4C3]/10 bg-gradient-to-r from-[#E9D4C3]/5 to-transparent">
          <div className="max-w-3xl">
            <span className="font-mono text-[10px] text-[#8A1A1A] uppercase tracking-widest block mb-2">// HOW IT WORKS</span>
            <h2 className="font-display text-2xl sm:text-3xl font-bold text-[#E9D4C3] mb-6 tracking-tight">The Three Simple Steps to Finding Matches</h2>
            
            <div className="space-y-6 font-sans text-sm text-[#7C8FA9]">
              <div className="flex items-start space-x-4">
                <span className="font-mono text-xs text-[#E9D4C3] bg-[#0A1626] border border-[#E9D4C3]/20 px-2 py-0.5 rounded">STEP 1</span>
                <p><strong className="text-white font-medium">Breaking Down the Text:</strong> When you upload a paper, the system reads through the summary text and strips away unhelpful filler words so only meaningful concepts remain.</p>
              </div>
              <div className="flex items-start space-x-4">
                <span className="font-mono text-xs text-[#E9D4C3] bg-[#0A1626] border border-[#E9D4C3]/20 px-2 py-0.5 rounded">STEP 2</span>
                <p><strong className="text-white font-medium">Finding Important Keywords:</strong> The engine scores each word based on how unique it is. Rare, specific terms get a high priority, while words used everywhere get tuned down.</p>
              </div>
              <div className="flex items-start space-x-4">
                <span className="font-mono text-xs text-[#E9D4C3] bg-[#0A1626] border border-[#E9D4C3]/20 px-2 py-0.5 rounded">STEP 3</span>
                <p><strong className="text-white font-medium">Calculating the Match:</strong> By overlaying word scores on a geometric grid, the engine measures the angle between different papers to find an exact contextual similarity score.</p>
              </div>
            </div>
          </div>
        </section>


        {/* 4. RESEARCH FIELDS COVERED */}
        <section>
          <div className="mb-8">
            <span className="font-mono text-[10px] text-[#7C8FA9] uppercase block mb-1">// RESEARCH DECK</span>
            <h2 className="font-display text-2xl font-bold text-white tracking-tight">Topics We Track</h2>
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
              <span className="font-mono text-[10px] text-[#7C8FA9] uppercase block mb-1">// DENSITY INDICATOR</span>
              <h2 className="font-display text-2xl font-bold text-white tracking-tight">Highly Cited Papers</h2>
            </div>
            <Link href="/papers" className="font-mono text-xs text-[#E9D4C3] flex items-center hover:underline">
              BROWSE_ALL <ChevronRight className="w-3 h-3 ml-0.5" />
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
                  <span>CITATIONS: <span className="text-white">{paper.cites}</span></span>
                  <Link href={`/papers/${idx}`} className="text-[#8A1A1A] flex items-center font-bold">
                    VIEW <ArrowUpRight className="w-2.5 h-2.5 ml-0.5" />
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </section>


        {/* 6. STATISTICS DASHBOARD */}
        <section className="w-full">
          <div className="mb-8">
            <span className="font-mono text-[10px] text-[#7C8FA9] uppercase block mb-1">// QUANT VISUALIZER</span>
            <h2 className="font-display text-2xl font-bold text-white tracking-tight">Current Repository Overview</h2>
          </div>
          <StatsDashboard />
        </section>


        {/* 7. TESTIMONIALS */}
        <section>
          <div className="mb-8">
            <span className="font-mono text-[10px] text-[#7C8FA9] uppercase block mb-1">// RESEARCH FEEDBACK</span>
            <h2 className="font-display text-2xl font-bold text-white tracking-tight">What Researchers Say</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="glass-card p-6 rounded-lg font-sans text-xs text-[#7C8FA9] border border-[#E9D4C3]/5">
              <p className="italic leading-relaxed mb-4">"The mathematical angle matching tool accurately pointed out three matching student attrition logs that standard keyword search systems completely skipped."</p>
              <div className="font-mono text-[10px] text-[#E9D4C3]">— DR. A. VANCE // ML ARCHITECT</div>
            </div>
            <div className="glass-card p-6 rounded-lg font-sans text-xs text-[#7C8FA9] border border-[#E9D4C3]/5">
              <p className="italic leading-relaxed mb-4">"Being able to see the exact steps behind the keyword calculations makes it incredibly easy to trust the match percentages during data validation audits."</p>
              <div className="font-mono text-[10px] text-[#E9D4C3]">— T. ELDRIDGE // METRIC ASSURANCE PROFILED</div>
            </div>
            <div className="glass-card p-6 rounded-lg font-sans text-xs text-[#7C8FA9] border border-[#E9D4C3]/5">
              <p className="italic leading-relaxed mb-4">"Searching by concept similarity instead of rigid title phrases completely changes how fast we find relevant reference documents."</p>
              <div className="font-mono text-[10px] text-[#E9D4C3]">— LEA CHEN // NLP ANALYST CONTROLLER</div>
            </div>
          </div>
        </section>


        {/* 8. NEWSLETTER */}
        <section className="glass-card p-8 rounded-lg border border-[#8A1A1A]/20 text-center max-w-2xl mx-auto relative overflow-hidden">
          <div className="absolute top-0 left-0 w-full h-1 bg-[#8A1A1A]" />
          <Mail className="w-6 h-6 text-[#8A1A1A] mx-auto mb-4" />
          <h3 className="font-display text-lg font-bold text-[#E9D4C3] mb-2">Stay Updated on New Research Logs</h3>
          <p className="font-sans text-xs text-[#7C8FA9] max-w-sm mx-auto mb-6">Get brief updates whenever new algorithms, papers, or keyword trends are added to the library.</p>
          <form onSubmit={(e) => e.preventDefault()} className="flex flex-col sm:flex-row gap-3 w-full max-w-md mx-auto">
            <input 
              type="email" 
              placeholder="Enter your email address..." 
              className="flex-grow bg-[#0A1626] border border-[#E9D4C3]/20 px-4 py-2 text-xs font-mono rounded text-[#F5EFEB] focus:outline-none focus:border-[#8A1A1A]"
              required
            />
            <button type="submit" className="bg-[#8A1A1A] text-[#E9D4C3] font-mono text-xs uppercase px-4 py-2 rounded font-bold hover:bg-red-700 transition-colors">
              SUBSCRIBE
            </button>
          </form>
        </section>


        {/* 9. FAQ ACCORDION */}
        <section className="max-w-3xl mx-auto w-full">
          <div className="text-center mb-8">
            <HelpCircle className="w-6 h-6 text-[#7C8FA9] mx-auto mb-2" />
            <h2 className="font-display text-xl font-bold text-white tracking-tight">Frequently Asked Questions</h2>
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