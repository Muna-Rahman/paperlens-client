'use client';

import React, { useState, useEffect } from 'react';
import { useAuth } from '@/context/AuthContext';
import Link from 'next/link';
import api from '@/lib/api';

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
  const { isAuthenticated, user } = useAuth();
  const [search, setSearch] = useState('');
  const [fieldFilter, setFieldFilter] = useState('All');
  const [sortBy, setSortBy] = useState('Newest');
  const [papers, setPapers] = useState<Paper[]>([]);
  const [loading, setLoading] = useState(true);
  const [totalCount, setTotalCount] = useState(0);

  useEffect(() => {
    const fetchPapers = async () => {
      setLoading(true);
      try {
        // Query string binding values matched against parameters
        const res = await api.get(`/papers?search=${search}&field=${fieldFilter}&sort=${sortBy}`);
        setPapers(res.data.papers);
        setTotalCount(res.data.totalAvailable);
      } catch (err) {
        console.error("Error connecting with structural catalog:", err);
      } finally {
        setLoading(false);
      }
    };

    const delayDebounceFn = setTimeout(() => {
      fetchPapers();
    }, 300); // 300ms built-in debounce optimization for live keyword search

    return () => clearTimeout(delayDebounceFn);
  }, [search, fieldFilter, sortBy, isAuthenticated]);

  return (
    <main className="min-h-screen w-full bg-[#0A1626] text-[#F5F5F5] font-['General_Sans'] px-6 py-12 relative overflow-hidden">
      {/* Secondary Glow Ambient Nodes */}
      <div className="absolute top-[-5%] left-[10%] w-[500px] h-[500px] bg-[#7C8FA9]/5 rounded-full blur-[140px] pointer-events-none" />
      <div className="absolute bottom-[5%] right-[5%] w-[400px] h-[400px] bg-[#8A1A1A]/5 rounded-full blur-[120px] pointer-events-none" />

      {/* Main Container Header */}
      <div className="max-w-7xl mx-auto mb-10 flex flex-col md:flex-row md:items-center md:justify-between gap-4">
        <div>
          <h1 className="text-4xl font-bold font-['Clash_Display'] text-[#E9D4C3] tracking-wide">
            Research Explorer
          </h1>
          <p className="text-[#A8B3C4] text-sm mt-1 font-mono">
            Database Engine: Showing {papers.length} of {totalCount} indexed entries.
          </p>
        </div>
      </div>

      {/* Live Filtering Glass Panel Header Wrapper */}
      <section className="max-w-7xl mx-auto backdrop-blur-[16px] bg-[rgba(233,212,195,0.06)] border border-[rgba(233,212,195,0.12)] rounded-xl p-4 mb-8 grid grid-cols-1 md:grid-cols-3 gap-4 relative z-10">
        <input
          type="text"
          placeholder="Live keyword search..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          className="bg-[#0A1626]/60 border border-[rgba(233,212,195,0.15)] rounded-lg px-4 py-2 text-sm text-[#F5F5F5] focus:outline-none focus:border-[#8A1A1A] transition-colors placeholder-[#718096]"
        />

        <select
  value={fieldFilter}
  onChange={(e) => setFieldFilter(e.target.value)}
  className="bg-[#0A1626]/60 border border-[rgba(233,212,195,0.15)] rounded-lg px-4 py-2 text-sm text-[#F5F5F5] focus:outline-none focus:border-[#8A1A1A] transition-colors cursor-pointer"
>
  <option value="All">All Fields</option>
  <option value="Artificial Intelligence">Artificial Intelligence</option>
  <option value="Natural Language Processing">Natural Language Processing</option>
  <option value="Computer Vision">Computer Vision</option>
  <option value="Data Science">Data Science</option>
  <option value="Bioinformatics">Bioinformatics</option>
  <option value="Cybersecurity">Cybersecurity</option>
  <option value="Quantum Computing">Quantum Computing</option>
  <option value="Human-Computer Interaction">Human-Computer Interaction</option>
</select>

        <select
          value={sortBy}
          onChange={(e) => setSortBy(e.target.value)}
          className="bg-[#0A1626]/60 border border-[rgba(233,212,195,0.15)] rounded-lg px-4 py-2 text-sm text-[#F5F5F5] focus:outline-none focus:border-[#8A1A1A] transition-colors cursor-pointer"
        >
          <option value="Newest">Sort: Newest</option>
          <option value="Oldest">Sort: Oldest</option>
          <option value="Citations">Sort: Citations</option>
        </select>
      </section>

      {/* Grid Display Node Matrix */}
      <section className="max-w-7xl mx-auto relative z-10">
        {loading ? (
          // Shimmering Card Placeholders
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[1, 4].map((i) => (
              <div key={i} className="h-64 rounded-xl border border-[rgba(233,212,195,0.06)] bg-[rgba(233,212,195,0.03)] animate-pulse" />
            ))}
          </div>
        ) : (
          <div className="relative">
            <div className={`grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 ${!isAuthenticated ? 'select-none pointer-events-none mix-blend-screen opacity-40 blur-[1px]' : ''}`}>
              {papers.map((paper) => (
                <div
                  key={paper._id}
                  className="group backdrop-blur-[16px] bg-[rgba(233,212,195,0.06)] hover:bg-[rgba(233,212,195,0.09)] border border-[rgba(233,212,195,0.12)] hover:border-[#8A1A1A] rounded-xl p-5 flex flex-col justify-between transition-all duration-300 transform hover:-translate-y-1"
                >
                  <div>
                    <div className="flex justify-between items-center mb-4">
                      <span className="text-[10px] tracking-wider uppercase bg-[rgba(233,212,195,0.1)] px-2 py-0.5 rounded text-[#A8B3C4]">
                        {paper.field}
                      </span>
                      <div className="font-mono text-xs font-bold text-[#8A1A1A] flex items-center gap-1">
                        ⭕ {paper.similarityScore || 82}%
                      </div>
                    </div>
                    <h3 className="text-md font-bold text-[#E9D4C3] mb-2 line-clamp-2">{paper.title}</h3>
                    <p className="text-xs text-[#A8B3C4] line-clamp-3 leading-relaxed">{paper.shortDescription}</p>
                  </div>

                  <div className="mt-6 pt-4 border-t border-[rgba(233,212,195,0.08)] flex justify-between text-[11px] font-mono text-[#7C8FA9]">
                    <div>Year: <span className="text-[#F5F5F5]">{paper.year}</span></div>
                    <div>Citations: <span className="text-[#F5F5F5]">{paper.citationCount.toLocaleString()}</span></div>
                  </div>
                </div>
              ))}
            </div>

            {/* DYNAMIC LOGGED OUT PROMPT OVERLAY WALL */}
            {!isAuthenticated && (
              <div className="absolute inset-x-0 bottom-0 top-0 backdrop-blur-[12px] bg-[#0A1626]/40 border border-[rgba(233,212,195,0.1)] rounded-2xl flex flex-col items-center justify-center p-8 text-center pointer-events-auto shadow-2xl z-20 mt-4">
                <div className="max-w-md backdrop-blur-[24px] bg-[rgba(233,212,195,0.05)] border border-[rgba(233,212,195,0.15)] rounded-2xl p-8 shadow-inner">
                  <h3 className="text-2xl font-bold font-['Clash_Display'] text-[#E9D4C3] mb-3 tracking-wide">
                    Unlock Full Research Database
                  </h3>
                  <p className="text-sm text-[#A8B3C4] mb-6 leading-relaxed">
                    You are currently viewing a limited entry sandbox verification loop. Create a free account to cross-reference over {totalCount > 0 ? totalCount : '20+'} dynamic academic similarities.
                  </p>
                  <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
                    <Link
                      href="/register"
                      className="w-full sm:w-auto px-6 py-2.5 bg-[#8A1A1A] hover:bg-[#4E0000] text-[#F5F5F5] font-semibold text-xs uppercase tracking-wider rounded-lg shadow-lg shadow-[#8A1A1A]/30 transition-all duration-300"
                    >
                      Create Account
                    </Link>
                    <Link
                      href="/login"
                      className="w-full sm:w-auto px-6 py-2.5 border border-[rgba(233,212,195,0.2)] hover:border-[#E9D4C3] text-[#E9D4C3] font-semibold text-xs uppercase tracking-wider rounded-lg transition-colors"
                    >
                      Sign In
                    </Link>
                  </div>
                </div>
              </div>
            )}
          </div>
        )}
      </section>
    </main>
  );
}