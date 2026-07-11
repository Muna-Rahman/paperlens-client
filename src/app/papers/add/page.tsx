"use client";

import { useState } from "react";
import { useAuth } from "@/context/AuthContext";
import { PlusCircle, Terminal, ShieldAlert, Cpu } from "lucide-react";
import Link from "next/link";

export default function AddPaperPage() {
  const { isLoggedIn } = useAuth();

  // Form Field Capture Arrays
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [abstract, setAbstract] = useState("");
  const [field, setField] = useState("NLP");
  const [year, setYear] = useState("2026");
  const [citations, setCitations] = useState("0");
  const [keywords, setKeywords] = useState("");
  const [coverUrl, setCoverUrl] = useState("");

  const [systemAlert, setSystemAlert] = useState<string | null>(null);

  const handlePublishSequence = (e: React.FormEvent) => {
    e.preventDefault();
    setSystemAlert(null);

    // Form schema check logic
    if (!title || !description || !abstract) {
      setSystemAlert("CRITICAL_ERR: Missing mandatory validation parameters.");
      return;
    }

    setSystemAlert("SYS_STATUS: Log entry successfully tokenized into relational matrix cache.");
    
    // Wipe layout states cleanly
    setTitle("");
    setDescription("");
    setAbstract("");
    setKeywords("");
    setCoverUrl("");
  };

  // 🛡️ Security Gate Check
  if (!isLoggedIn) {
    return (
      <div className="max-w-md mx-auto py-24 px-4 text-center">
        <div className="glass-card p-8 rounded-lg border border-red-900/30 bg-red-950/5">
          <ShieldAlert className="w-12 h-12 text-[#8A1A1A] mx-auto mb-4 animate-pulse" />
          <h2 className="font-display text-lg font-bold text-white mb-2">ACCESS_DENIED // UNAUTHORIZED</h2>
          <p className="font-sans text-xs text-[#7C8FA9] leading-relaxed mb-6">
            This secure data injection array requires active researcher or administrator authorization tokens.
          </p>
          <Link href="/login" className="inline-block px-4 py-2 bg-[#8A1A1A] text-[#E9D4C3] font-mono text-xs uppercase rounded font-bold hover:bg-red-700 transition-colors">
            EXECUTE_SYS_LOGIN
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="max-w-3xl mx-auto py-8 px-4 pb-24">
      <div className="mb-8">
        <span className="font-mono text-[10px] text-[#7C8FA9] tracking-widest block mb-1">// SYSTEM_LOG_INJECTION_DECK</span>
        <h1 className="font-display text-2xl font-bold text-white tracking-tight">Register Fresh Research Asset</h1>
      </div>

      <div className="glass-card p-6 sm:p-8 rounded-lg border border-[#E9D4C3]/10 relative">
        {systemAlert && (
          <div className="mb-6 p-3 bg-[#E9D4C3]/5 border border-[#8A1A1A]/30 rounded flex items-center space-x-2 font-mono text-[10px] text-[#E9D4C3]">
            <Terminal className="w-4 h-4 text-[#8A1A1A] shrink-0" />
            <span>{systemAlert}</span>
          </div>
        )}

        <form onSubmit={handlePublishSequence} className="space-y-6 font-mono text-xs text-[#7C8FA9]">
          
          {/* Title input */}
          <div className="flex flex-col gap-1.5">
            <label className="uppercase tracking-wider text-[#E9D4C3]">Paper Title *</label>
            <input 
              type="text" value={title} onChange={(e) => setTitle(e.target.value)} required
              placeholder="e.g., Adaptive Agricultural Systems for Food Security..."
              className="w-full bg-[#0A1626] border border-[#E9D4C3]/15 rounded px-3 py-2 text-white focus:outline-none focus:border-[#8A1A1A]"
            />
          </div>

          {/* Grid layout for structured meta controls */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="flex flex-col gap-1.5">
              <label className="uppercase tracking-wider text-[#E9D4C3]">Research Field</label>
              <select value={field} onChange={(e) => setField(e.target.value)} className="w-full bg-[#0A1626] border border-[#E9D4C3]/15 rounded px-3 py-2 text-[#E9D4C3] focus:outline-none">
                <option value="NLP">NLP (Natural Language)</option>
                <option value="XAI">XAI (Explainable AI)</option>
                <option value="EDM">EDM (Edu Data Mining)</option>
                <option value="ROB">ROB (Robustness Boundaries)</option>
                <option value="CLIMATE">AGRI_RESILIENCE</option>
              </select>
            </div>
            <div className="flex flex-col gap-1.5">
              <label className="uppercase tracking-wider text-[#E9D4C3]">Publication Year</label>
              <input type="number" value={year} onChange={(e) => setYear(e.target.value)} className="w-full bg-[#0A1626] border border-[#E9D4C3]/15 rounded px-3 py-2 text-white focus:outline-none" />
            </div>
            <div className="flex flex-col gap-1.5">
              <label className="uppercase tracking-wider text-[#E9D4C3]">Initial Citation Count</label>
              <input type="number" value={citations} onChange={(e) => setCitations(e.target.value)} className="w-full bg-[#0A1626] border border-[#E9D4C3]/15 rounded px-3 py-2 text-white focus:outline-none" />
            </div>
          </div>

          {/* Short Description */}
          <div className="flex flex-col gap-1.5">
            <label className="uppercase tracking-wider text-[#E9D4C3]">Short Description *</label>
            <input 
              type="text" value={description} onChange={(e) => setDescription(e.target.value)} required
              placeholder="Provide a highly humanized summary sentence..."
              className="w-full bg-[#0A1626] border border-[#E9D4C3]/15 rounded px-3 py-2 text-white focus:outline-none"
            />
          </div>

          {/* Full Abstract Area */}
          <div className="flex flex-col gap-1.5">
            <label className="uppercase tracking-wider text-[#E9D4C3]">Full Abstract Text Payload *</label>
            <textarea 
              rows={5} value={abstract} onChange={(e) => setAbstract(e.target.value)} required
              placeholder="Paste comprehensive text abstract vectors here..."
              className="w-full bg-[#0A1626] border border-[#E9D4C3]/15 rounded px-3 py-2 text-white focus:outline-none"
            />
          </div>

          {/* Keywords & Optional Cover URL */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="flex flex-col gap-1.5">
              <label className="uppercase tracking-wider text-[#E9D4C3]">Keywords Index (Comma Separated)</label>
              <input type="text" value={keywords} onChange={(e) => setKeywords(e.target.value)} placeholder="OULAD, list compressions, dataset engineering" className="w-full bg-[#0A1626] border border-[#E9D4C3]/15 rounded px-3 py-2 text-white focus:outline-none" />
            </div>
            <div className="flex flex-col gap-1.5">
              <label className="uppercase tracking-wider text-[#E9D4C3]">Optional Cover Image URL</label>
              <input type="url" value={coverUrl} onChange={(e) => setCoverUrl(e.target.value)} placeholder="https://domain.com/vector.svg" className="w-full bg-[#0A1626] border border-[#E9D4C3]/15 rounded px-3 py-2 text-white focus:outline-none" />
            </div>
          </div>

          <button type="submit" className="w-full sm:w-auto px-6 py-3 bg-[#8A1A1A] hover:bg-red-700 text-[#E9D4C3] font-mono text-xs uppercase font-bold tracking-wider rounded transition-all cursor-pointer flex items-center justify-center space-x-2">
            <PlusCircle className="w-4 h-4" />
            <span>COMPILE_AND_INJECT_LOG</span>
          </button>
        </form>
      </div>
    </div>
  );
}