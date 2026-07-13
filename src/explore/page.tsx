'use client';

import React, { useState, useEffect } from 'react';
import { useAuth } from '@/context/AuthContext';
import Link from 'next/link';

// Mock interface matching your Database Model specs
interface Paper {
  _id: string;
  title: string;
  shortDescription: string;
  field: string;
  year: number;
  citationCount: number;
  similarityScore?: number;
}

export default function ExplorePage() {
  const { user, logout } = useAuth();
  const [search, setSearch] = useState('');
  const [fieldFilter, setFieldFilter] = useState('All');
  const [sortBy, setSortBy] = useState('Newest');
  const [papers, setPapers] = useState<Paper[]>([]);
  const [loading, setLoading] = useState(true);

  // Simulate loading shimmering glass placeholders
  useEffect(() => {
    const timer = setTimeout(() => {
      setPapers([
        {
          _id: '1',
          title: 'Attention Is All You Need',
          shortDescription: 'The core foundational transformer architecture paper introducing self-attention mechanisms.',
          field: 'Artificial Intelligence',
          year: 2017,
          citationCount: 125430,
          similarityScore: 94
        },
        {
          _id: '2',
          title: 'Deep Residual Learning for Image Recognition',
          shortDescription: 'Introducing ResNet architectures, easing the training of substantially deeper neural networks.',
          field: 'Computer Vision',
          year: 2015,
          citationCount: 184200,
          similarityScore: 82
        }
      ]);
      setLoading(false);
    }, 1200);
    return () => clearTimeout(timer);
  }, []);

  return (
    <main className="min-h-screen w-full bg-[#0A1626] text-[#F5F5F5] font-['General_Sans'] px-6 py-8 relative overflow-hidden">
      {/* Background Radial Light Glow */}
      <div className="absolute top-0 right-1/4 w-[600px] h-[600px] bg-[#7C8FA9]/5 rounded-full blur-[150px] pointer-events-none" />

      {/* Header Area */}
      <header className="max-w-7xl mx-auto flex justify-between items-center mb-12 border-b border-[rgba(233,212,195,0.1)] pb-6 relative z-10">
        <div>
          <h1 className="text-4xl font-bold font-['Clash_Display'] text-[#E9D4C3] tracking-wide">
            PaperLens Explorer
          </h1>
          <p className="text-[#A8B3C4] text-sm mt-1">
            Logged in as: <span className="text-[#F5F5F5] font-semibold">{user?.name || 'Academic Explorer'}</span>
          </p>
        </div>
        <button
          onClick={logout}
          className="border border-[#8A1A1A] hover:bg-[#8A1A1A]/20 text-[#F5F5F5] text-xs font-mono uppercase tracking-wider px-4 py-2 rounded transition-all duration-300"
        >
          Logout
        </button>
      </header>

      {/* Interactive Toolbar Filter & Search Panel */}
      <section className="max-w-7xl mx-auto backdrop-blur-[16px] bg-[rgba(233,212,195,0.04)] border border-[rgba(233,212,195,0.08)] rounded-xl p-4 mb-8 grid grid-cols-1 md:grid-cols-3 gap-4 relative z-10">
        <input
          type="text"
          placeholder="Live keyword search..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          className="bg-[#0A1626]/60 border border-[rgba(233,212,195,0.12)] rounded-lg px-4 py-2 text-sm focus:outline-none focus:border-[#8A1A1A] text-[#F5F5F5] transition-colors placeholder-[#718096]"
        />
        
        <select
          value={fieldFilter}
          onChange={(e) => setFieldFilter(e.target.value)}
          className="bg-[#0A1626]/60 border border-[rgba(233,212,195,0.12)] rounded-lg px-4 py-2 text-sm focus:outline-none focus:border-[#8A1A1A] text-[#F5F5F5] cursor-pointer"
        >
          <option value="All">All Research Fields</option>
          <option value="Artificial Intelligence">Artificial Intelligence</option>
          <option value="Computer Vision">Computer Vision</option>
        </select>

        <select
          value={sortBy}
          onChange={(e) => setSortBy(e.target.value)}
          className="bg-[#0A1626]/60 border border-[rgba(233,212,195,0.12)] rounded-lg px-4 py-2 text-sm focus:outline-none focus:border-[#8A1A1A] text-[#F5F5F5] cursor-pointer"
        >
          <option value="Newest">Sort by: Newest</option>
          <option value="Oldest">Sort by: Oldest</option>
          <option value="Citations">Sort by: Citations</option>
          <option value="Similarity">Sort by: Similarity</option>
        </select>
      </section>

      {/* Main Grid Display Area */}
      <section className="max-w-7xl mx-auto relative z-10">
        {loading ? (
          // Shimmering Glass Loading Placeholder Grid
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[1, 2, 3, 4].map((i) => (
              <div key={i} className="h-64 rounded-xl border border-[rgba(233,212,195,0.06)] bg-[rgba(233,212,195,0.02)] animate-pulse relative overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-[rgba(233,212,195,0.05)] to-transparent -translate-x-full animate-[shimmer_1.5s_infinite]" />
              </div>
            ))}
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {papers.map((paper) => (
              <div 
                key={paper._id}
                className="group backdrop-blur-[16px] bg-[rgba(233,212,195,0.06)] hover:bg-[rgba(233,212,195,0.09)] border border-[rgba(233,212,195,0.12)] hover:border-[#8A1A1A] rounded-xl p-5 flex flex-col justify-between shadow-xl transition-all duration-300 transform hover:-translate-y-1"
              >
                <div>
                  <div className="flex justify-between items-start gap-2 mb-3">
                    <span className="text-[10px] uppercase tracking-widest bg-[rgba(233,212,195,0.1)] px-2 py-0.5 rounded text-[#A8B3C4]">
                      {paper.field}
                    </span>
                    {/* Premium Monospace Similarity Stamp Indicator */}
                    <div className="font-mono text-xs font-bold text-[#8A1A1A] bg-[#8A1A1A]/10 border border-[#8A1A1A]/30 rounded-full px-2 py-0.5 flex items-center gap-1">
                      <span>⭕</span> {paper.similarityScore}%
                    </div>
                  </div>
                  
                  <h3 className="text-lg font-bold text-[#E9D4C3] line-clamp-2 mb-2 group-hover:text-[#F5F5F5] transition-colors">
                    {paper.title}
                  </h3>
                  <p className="text-sm text-[#A8B3C4] line-clamp-3 mb-4">
                    {paper.shortDescription}
                  </p>
                </div>

                {/* Technical Metadata Row (JetBrains Mono) */}
                <div className="mt-auto pt-4 border-t border-[rgba(233,212,195,0.08)] flex justify-between text-[11px] font-mono text-[#A8B3C4]">
                  <div>Year: <span className="text-[#F5F5F5]">{paper.year}</span></div>
                  <div>Citations: <span className="text-[#F5F5F5]">{paper.citationCount.toLocaleString()}</span></div>
                </div>
              </div>
            ))}
          </div>
        )}
      </section>
    </main>
  );
}