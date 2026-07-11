"use client";

import { useState } from "react";
import { useAuth } from "@/context/AuthContext";
import { Cpu, Star, MessageSquare, ShieldAlert, ArrowLeft } from "lucide-react";
import Link from "next/link";
import RelatedPapers from "@/components/ui/RelatedPapers";

const PAPER_DATA = {
  id: "p1",
  title: "Predicting Student Attrition Paradigms via High-Dimensional OULAD Feature Selection",
  field: "EDM",
  year: 2026,
  cites: 142,
  authors: ["R. Akhter", "Dr. A. Vance", "M. S. Rahman"],
  keywords: ["OULAD", "Feature Engineering", "Predictive Analytics", "Student Attrition", "List Comprehensions"],
  abstract: "This paper introduces a diagnostic predictive framework designed to systematically forecast student dropouts early within digital learning systems. Using the Open University Learning Analytics Dataset (OULAD) as a structural testbed, we demonstrate how high-dimensional behavior streams can be condensed into definitive feature arrays. Instead of conventional data manipulation pipelines, this mechanism implements optimized list comprehensions and isolated multi-layer regression algorithms to analyze sequence patterns. The model uncovers hidden correlations between structural engagement frequencies and longitudinal drops, proving that textual features from abstract telemetry can mirror systemic student risk metrics with high numerical accuracy.",
};

export default function PaperDetailsPage() {
  const { isLoggedIn, user } = useAuth();
  
  const [reviews, setReviews] = useState([
    { author: "Prof. Sarah Jenkins", rating: 5, text: "The engineering method concerning OULAD feature extraction is exceptionally rigorous. Wiping raw log streams down to highly compact feature frames handles model scaling perfectly." },
    { author: "Devon Clark", rating: 4, text: "Excellent documentation on the cosine boundary traversals. The list compression optimization runs seamlessly within deep node processing pipelines." }
  ]);

  const [newRating, setNewRating] = useState(5);
  const [newComment, setNewComment] = useState("");

  const handleReviewSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!newComment.trim()) return;

    setReviews([
      {
        author: user?.name || "Authenticated Operator",
        rating: newRating,
        text: newComment
      },
      ...reviews
    ]);

    setNewComment("");
  };

  return (
    <div className="max-w-7xl mx-auto px-6 py-8 pb-32 space-y-12">
      
      {/* Return Link to Index */}
      <Link href="/papers" className="inline-flex items-center space-x-2 font-mono text-xs text-[#7C8FA9] hover:text-[#E9D4C3] transition-colors">
        <ArrowLeft className="w-3.5 h-3.5" />
        <span>RETURN_TO_MATRIX_INDEX.exe</span>
      </Link>

      {/* Main Structural Layout Splits */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
        
        {/* LEFT COMPONENT: Primary Overview & Abstract Analytics */}
        <div className="lg:col-span-8 space-y-10">
          <div>
            <span className="font-mono text-xs text-[#8A1A1A] tracking-widest uppercase block mb-3">// LOG_ID: {PAPER_DATA.id}</span>
            <h1 className="font-display text-3xl sm:text-4xl font-bold text-white tracking-tight leading-tight">
              {PAPER_DATA.title}
            </h1>
          </div>

          <section className="glass-card p-6 rounded-lg border border-[#E9D4C3]/10">
            <h2 className="font-display text-lg font-bold text-[#E9D4C3] mb-4 flex items-center space-x-2">
              <Cpu className="w-4 h-4 text-[#8A1A1A]" />
              <span>Document Overview // Abstract</span>
            </h2>
            <p className="font-sans text-sm text-[#7C8FA9] leading-relaxed text-justify">
              {PAPER_DATA.abstract}
            </p>
          </section>

          {/* Validation Review Panel */}
          <section className="space-y-6">
            <h2 className="font-display text-lg font-bold text-white flex items-center space-x-2">
              <MessageSquare className="w-4 h-4 text-[#8A1A1A]" />
              <span>Peer Validation Logs ({reviews.length})</span>
            </h2>

            {isLoggedIn ? (
              <form onSubmit={handleReviewSubmit} className="glass-card p-6 rounded-lg border border-[#8A1A1A]/20 space-y-4">
                <span className="font-mono text-[10px] text-[#E9D4C3] tracking-widest block uppercase">// WRITE_VALIDATION_METRIC</span>
                <div className="flex items-center space-x-4">
                  <label className="font-mono text-xs text-[#7C8FA9]">METRIC_RATING [1-5]:</label>
                  <select 
                    value={newRating}
                    onChange={(e) => setNewRating(Number(e.target.value))}
                    className="bg-[#0A1626] border border-[#E9D4C3]/15 text-[#E9D4C3] font-mono text-xs p-1 rounded focus:outline-none"
                  >
                    {[5,4,3,2,1].map(n => <option key={n} value={n}>{n} ★</option>)}
                  </select>
                </div>
                <textarea
                  rows={3}
                  value={newComment}
                  onChange={(e) => setNewComment(e.target.value)}
                  placeholder="Enter empirical evaluation notes..."
                  className="w-full bg-[#0A1626] border border-[#E9D4C3]/15 rounded p-3 text-xs font-mono text-white focus:outline-none focus:border-[#8A1A1A]"
                  required
                />
                <button type="submit" className="px-4 py-2 bg-[#8A1A1A] text-[#E9D4C3] font-mono text-xs uppercase rounded font-bold hover:bg-red-700 transition-colors">
                  SUBMIT_LOG_PAYLOAD
                </button>
              </form>
            ) : (
              <div className="glass-card p-4 rounded-lg border border-[#7C8FA9]/10 flex items-center space-x-3">
                <ShieldAlert className="w-4 h-4 text-[#7C8FA9]" />
                <p className="font-mono text-[11px] text-[#7C8FA9]">
                  [SECURITY_ALERT] Authenticate using <span className="text-[#E9D4C3] font-bold">SYS_LOGIN</span> above to open metric reporting privileges.
                </p>
              </div>
            )}

            <div className="space-y-4">
              {reviews.map((rev, idx) => (
                <div key={idx} className="glass-card p-5 rounded-lg border border-[#E9D4C3]/5 space-y-2">
                  <div className="flex items-center justify-between font-mono text-[10px]">
                    <span className="text-[#E9D4C3]">// AUTH_OP: {rev.author}</span>
                    <span className="text-amber-500 flex items-center font-bold">
                      {rev.rating} <Star className="w-3 h-3 ml-1 fill-amber-500 text-amber-500" />
                    </span>
                  </div>
                  <p className="font-sans text-xs text-[#7C8FA9] leading-relaxed">{rev.text}</p>
                </div>
              ))}
            </div>
          </section>
        </div>

        {/* RIGHT COMPONENT: Key Information Catalog Data (4 Columns) */}
        <div className="lg:col-span-4">
          <div className="glass-card p-6 rounded-lg border border-[#E9D4C3]/10 font-mono text-xs space-y-4 sticky top-28">
            <h3 className="text-[#E9D4C3] font-display text-sm font-bold tracking-tight mb-2 uppercase">// CATALOG_RECORD</h3>
            <div className="space-y-3 pt-2">
              <div className="flex flex-col gap-1 border-b border-[#E9D4C3]/5 pb-2">
                <span className="text-[#7C8FA9] text-[10px] uppercase">AUTHORS:</span>
                <span className="text-white text-xs">{PAPER_DATA.authors.join(", ")}</span>
              </div>
              <div className="flex justify-between items-center border-b border-[#E9D4C3]/5 pb-2">
                <span className="text-[#7C8FA9] text-[10px] uppercase">YEAR:</span>
                <span className="text-white font-bold">{PAPER_DATA.year}</span>
              </div>
              <div className="flex justify-between items-center border-b border-[#E9D4C3]/5 pb-2">
                <span className="text-[#7C8FA9] text-[10px] uppercase">RESEARCH_FIELD:</span>
                <span className="text-[#E9D4C3] bg-[#8A1A1A]/20 px-2 py-0.5 rounded font-bold">{PAPER_DATA.field}</span>
              </div>
              <div className="flex justify-between items-center border-b border-[#E9D4C3]/5 pb-2">
                <span className="text-[#7C8FA9] text-[10px] uppercase">CITATION_COUNT:</span>
                <span className="text-white font-bold">{PAPER_DATA.cites}</span>
              </div>
              <div className="flex flex-col gap-1.5 pt-1">
                <span className="text-[#7C8FA9] text-[10px] uppercase">KEYWORDS_INDEX:</span>
                <div className="flex flex-wrap gap-1.5">
                  {PAPER_DATA.keywords.map(kw => (
                    <span key={kw} className="text-[9px] bg-[#E9D4C3]/5 border border-[#E9D4C3]/10 px-1.5 py-0.5 rounded text-[#7C8FA9]">
                      {kw}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>

      </div>

      {/* 📡 BOTTOM CONFIGURATION VIEWPORT: The 4-Column Related Papers Grid */}
      <RelatedPapers />

    </div>
  );
}