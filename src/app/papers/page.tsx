"use client";

import { useState, useEffect } from "react";
import SkeletonCard from "@/components/ui/SkeletonCard";
import { Search, SlidersHorizontal, ArrowUpDown, ChevronLeft, ChevronRight, Layers, ArrowUpRight } from "lucide-react";

// Humanized mock catalog data representing your CSE and OULAD research profiles
const SEED_PAPERS = [
  { id: "p1", title: "Predicting Student Attrition Paradigms via High-Dimensional OULAD Feature Selection", field: "EDM", year: 2026, cites: 142, match: 96, desc: "A comprehensive analysis leveraging localized list comprehensions and regression layers to identify drop thresholds in digital classrooms early.", img: "data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' width='100' height='100' viewBox='0 0 100 100'><rect width='100' height='100' fill='%238A1A1A'/><text x='10' y='55' fill='%23E9D4C3' font-family='monospace' font-size='10'>[EDM_LOG]</text></svg>" },
  { id: "p2", title: "Fairness Metrics and Bias Auditing Arrays in Demographic Student Performance Trackers", field: "XAI", year: 2025, cites: 89, match: 91, desc: "Deconstructing black-box deep node predictive matrices to ensure demographic parity rules hold stable under uneven sampling bounds.", img: "data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' width='100' height='100' viewBox='0 0 100 100'><rect width='100' height='100' fill='%2313273F'/><text x='10' y='55' fill='%23E9D4C3' font-family='monospace' font-size='10'>[XAI_VEC]</text></svg>" },
  { id: "p3", title: "Cross-Lingual Attention Embeddings for Automating Clinical Registry Tokenization", field: "NLP", year: 2026, cites: 64, match: 88, desc: "Mapping transformer-based spatial dictionaries onto unstructured health records to accelerate information extraction sequences.", img: "data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' width='100' height='100' viewBox='0 0 100 100'><rect width='100' height='100' fill='%234E0000'/><text x='10' y='55' fill='%23E9D4C3' font-family='monospace' font-size='10'>[NLP_ATT]</text></svg>" },
  { id: "p4", title: "Adversarial Robustness Boundaries Within Text Classification Vector Models", field: "ROB", year: 2024, cites: 47, match: 84, desc: "Quantifying structural boundary decay limits under synthetic adversarial perturbations designed to confuse boundary mapping arrays.", img: "data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' width='100' height='100' viewBox='0 0 100 100'><rect width='100' height='100' fill='%237C8FA9'/><text x='10' y='55' fill='%230B0F14' font-family='monospace' font-size='10'>[ROB_THX]</text></svg>" },
  { id: "p5", title: "Optimizing Round-Robin CPU Simulation Traces for Multithreaded OS Tasks", field: "CSE", year: 2026, cites: 31, match: 79, desc: "Correcting ready-queue preemption mechanics to prevent starvation bottlenecks within dense instruction execution matrices.", img: "data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' width='100' height='100' viewBox='0 0 100 100'><rect width='100' height='100' fill='%230b0f14'/><text x='10' y='55' fill='%23E9D4C3' font-family='monospace' font-size='10'>[OS_SIM]</text></svg>" },
  { id: "p6", title: "A Review of Text Normalization Stratagems for Low-Resource Sentiment Engine Anchors", field: "NLP", year: 2025, cites: 18, match: 75, desc: "Evaluating lexical parsing pipelines when target language datasets exhibit high density spelling variances and sparse dictionary tables.", img: "data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' width='100' height='100' viewBox='0 0 100 100'><rect width='100' height='100' fill='%238A1A1A'/><text x='10' y='55' fill='%23E9D4C3' font-family='monospace' font-size='10'>[NLP_SENT]</text></svg>" },
];

export default function ExplorePage() {
  // UI Telemetry State Locks
  const [loading, setLoading] = useState(true);
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedField, setSelectedField] = useState("ALL");
  const [selectedYear, setSelectedYear] = useState(2026);
  const [sortBy, setSortBy] = useState("NEWEST");
  const [currentPage, setCurrentPage] = useState(1);

  // Trigger a humanlike simulated database loading sequence on layout mount
  useEffect(() => {
    const timer = setTimeout(() => setLoading(false), 900);
    return () => clearTimeout(timer);
  }, []);

  // Filter Pipeline: Checks terms, fields, and maximum year thresholds
  const filteredPapers = SEED_PAPERS.filter((paper) => {
    const matchesSearch = paper.title.toLowerCase().includes(searchQuery.toLowerCase()) || 
                          paper.desc.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesField = selectedField === "ALL" || paper.field === selectedField;
    const matchesYear = paper.year <= selectedYear;
    return matchesSearch && matchesField && matchesYear;
  });

  // Sort Pipeline: Orders arrays dynamically matching active terminal sort configurations
  const sortedPapers = [...filteredPapers].sort((a, b) => {
    if (sortBy === "NEWEST") return b.year - a.year;
    if (sortBy === "OLDEST") return a.year - b.year;
    if (sortBy === "CITATIONS") return b.cites - a.cites;
    if (sortBy === "SIMILARITY") return b.match - a.match;
    if (sortBy === "ALPHABETICAL") return a.title.localeCompare(b.title);
    return 0;
  });

  return (
    <div className="max-w-7xl mx-auto px-6 py-8 pb-24">
      
      {/* 🧭 Top Section: Header Telemetry */}
      <div className="mb-10">
        <span className="font-mono text-[10px] text-[#7C8FA9] tracking-widest block mb-1">
          // SYS_INDEX_QUERY_TERM
        </span>
        <h1 className="font-display text-3xl font-bold text-white tracking-tight">
          Centralized Document Matrix
        </h1>
      </div>

      {/* 🛠️ Dashboard Controls Panel */}
      <div className="glass-card p-6 rounded-lg border border-[#E9D4C3]/10 mb-8 space-y-4">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-4">
          
          {/* Real-time Keyword Field */}
          <div className="md:col-span-5 relative">
            <Search className="absolute left-3 top-3 w-4 h-4 text-[#7C8FA9]" />
            <input 
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="SEARCH_ABSTRACT_KEYWORD.exe..."
              className="w-full bg-[#0A1626] border border-[#E9D4C3]/15 rounded pl-10 pr-4 py-2 text-xs font-mono text-white focus:outline-none focus:border-[#8A1A1A] transition-colors"
            />
          </div>

          {/* Research Field Selector Dropdown */}
          <div className="md:col-span-3 relative">
            <Layers className="absolute left-3 top-3 w-4 h-4 text-[#7C8FA9]" />
            <select
              value={selectedField}
              onChange={(e) => setSelectedField(e.target.value)}
              className="w-full bg-[#0A1626] border border-[#E9D4C3]/15 rounded pl-10 pr-4 py-2 text-xs font-mono text-[#E9D4C3] focus:outline-none focus:border-[#8A1A1A] appearance-none"
            >
              <option value="ALL">ALL_FIELDS.matrix</option>
              <option value="NLP">NLP (Language Processing)</option>
              <option value="XAI">XAI (Explainable AI)</option>
              <option value="EDM">EDM (Edu Data Mining)</option>
              <option value="ROB">ROB (Robustness)</option>
              <option value="CSE">CSE (Computer Science)</option>
            </select>
          </div>

          {/* Sorting Controller Selector */}
          <div className="md:col-span-4 relative">
            <ArrowUpDown className="absolute left-3 top-3 w-4 h-4 text-[#7C8FA9]" />
            <select
              value={sortBy}
              onChange={(e) => setSortBy(e.target.value)}
              className="w-full bg-[#0A1626] border border-[#E9D4C3]/15 rounded pl-10 pr-4 py-2 text-xs font-mono text-[#E9D4C3] focus:outline-none focus:border-[#8A1A1A] appearance-none"
            >
              <option value="NEWEST">SORT: CHRONO_NEWEST</option>
              <option value="OLDEST">SORT: CHRONO_OLDEST</option>
              <option value="CITATIONS">SORT: QUANT_CITATIONS</option>
              <option value="SIMILARITY">SORT: ALGO_SIMILARITY</option>
              <option value="ALPHABETICAL">SORT: LEXICAL_A_Z</option>
            </select>
          </div>

        </div>

        {/* Publication Year Range Slider Module */}
        <div className="pt-2 border-t border-[#E9D4C3]/5 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
          <div className="flex items-center space-x-4 w-full sm:w-auto">
            <span className="font-mono text-[10px] text-[#7C8FA9] whitespace-nowrap uppercase">// MAX_YEAR_THRESHOLD:</span>
            <input 
              type="range"
              min="2022"
              max="2026"
              value={selectedYear}
              onChange={(e) => setSelectedYear(Number(e.target.value))}
              className="w-full sm:w-48 accent-[#8A1A1A] cursor-pointer bg-[#0A1626] h-1.5 rounded"
            />
            <span className="font-mono text-xs text-[#E9D4C3] font-bold">{selectedYear}</span>
          </div>
          <span className="font-mono text-[10px] text-[#7C8FA9]">
            HITS: {sortedPapers.length} / {SEED_PAPERS.length}_NODES
          </span>
        </div>
      </div>

      {/* 🌌 Main Paper Processing Data Grid Grid */}
      {loading ? (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {[...Array(4)].map((_, i) => <SkeletonCard key={i} />)}
        </div>
      ) : sortedPapers.length === 0 ? (
        <div className="text-center py-20 glass-card border-dashed border-[#8A1A1A]/20 rounded-lg">
          <p className="font-mono text-xs text-[#7C8FA9]">// NO_COMPATIBLE_REGISTERS_LOCATED_IN_QUERY_SELECTION //</p>
        </div>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {sortedPapers.map((paper) => (
            <div 
              key={paper.id} 
              className="glass-card p-5 rounded-lg border border-[#E9D4C3]/10 flex flex-col justify-between min-h-[340px] relative overflow-hidden group hover:border-[#8A1A1A]/40 transition-all duration-300"
            >
              
              {/* Radar Percentage Ring Stamp Badge */}
              <div className="absolute top-4 right-4 z-20 flex items-center justify-center">
                <div className="absolute w-10 h-10 border border-[#8A1A1A]/30 rounded-full animate-radar pointer-events-none" />
                <div className="w-8 h-8 rounded-full border border-[#8A1A1A] flex items-center justify-center bg-[#0A1626] font-mono text-[9px] font-bold text-[#E9D4C3] shadow-glow-red">
                  {paper.match}%
                </div>
              </div>

              <div>
                {/* Visual cover layout graphic */}
                <div className="w-full h-24 overflow-hidden rounded mb-4 bg-deepNavy border border-[#E9D4C3]/5">
                  <img src={paper.img} alt={paper.title} className="w-full h-full object-cover opacity-60 group-hover:opacity-80 transition-opacity" />
                </div>

                {/* Field tag identifier */}
                <span className="font-mono text-[10px] text-[#7C8FA9] tracking-wider uppercase block mb-1.5">
                  // {paper.field}
                </span>

                {/* Component Paper Headline */}
                <h3 className="font-display text-sm font-bold text-white tracking-tight leading-snug line-clamp-2 group-hover:text-[#E9D4C3] transition-colors">
                  {paper.title}
                </h3>

                {/* Abstract Text Snippet */}
                <p className="font-sans text-[11px] text-[#7C8FA9] mt-2 line-clamp-3 leading-relaxed">
                  {paper.desc}
                </p>
              </div>

              {/* Card Footer Statistics Strip */}
              <div className="mt-6 pt-3 border-t border-[#E9D4C3]/5 flex items-center justify-between font-mono text-[10px] text-[#7C8FA9]">
                <div className="flex flex-col">
                  <span>YR: <span className="text-white">{paper.year}</span></span>
                  <span>CITES: <span className="text-white">{paper.cites}</span></span>
                </div>

                {/* Humanized structural CTA button link */}
                <button className="flex items-center space-x-1 px-2.5 py-1 bg-[#8A1A1A]/10 border border-[#8A1A1A]/30 text-[#E9D4C3] rounded hover:bg-[#8A1A1A] hover:text-white transition-all text-[11px] font-sans">
                  <span>View Card</span>
                  <ArrowUpRight className="w-3 h-3" />
                </button>
              </div>

            </div>
          ))}
        </div>
      )}

      {/* 📑 Bottom Segment: Pagination Telemetry Grid */}
      <div className="mt-12 pt-6 border-t border-[#E9D4C3]/5 flex items-center justify-between font-mono text-xs text-[#7C8FA9]">
        
        {/* Previous page interactive button action */}
        <button 
          disabled={currentPage === 1}
          onClick={() => setCurrentPage((p) => Math.max(p - 1, 1))}
          className="flex items-center space-x-1 px-3 py-1.5 border border-[#E9D4C3]/10 rounded hover:bg-[#E9D4C3]/5 disabled:opacity-30 disabled:hover:bg-transparent transition-colors"
        >
          <ChevronLeft className="w-3.5 h-3.5" />
          <span>PREV</span>
        </button>

        {/* Matrix tracking location printout */}
        <div className="flex items-center space-x-2">
          <span className="px-2.5 py-1 border border-[#8A1A1A] bg-[#8A1A1A]/20 text-white rounded font-bold">1</span>
          <span className="px-2.5 py-1 border border-transparent rounded hover:bg-[#E9D4C3]/5 cursor-not-allowed">2</span>
          <span className="px-2.5 py-1 border border-transparent rounded hover:bg-[#E9D4C3]/5 cursor-not-allowed">3</span>
        </div>

        {/* Next page interactive button action */}
        <button 
          disabled={currentPage === 1} // Seed dataset capped at single tracking vector row matrix
          onClick={() => setCurrentPage((p) => p + 1)}
          className="flex items-center space-x-1 px-3 py-1.5 border border-[#E9D4C3]/10 rounded hover:bg-[#E9D4C3]/5 disabled:opacity-30 disabled:hover:bg-transparent transition-colors"
        >
          <span>NEXT</span>
          <ChevronRight className="w-3.5 h-3.5" />
        </button>

      </div>

    </div>
  );
}