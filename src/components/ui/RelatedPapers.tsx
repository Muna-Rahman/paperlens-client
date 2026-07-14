'use client';

import React from 'react';
import Link from 'next/link';
import StatStamp from './StatStamp';

interface RelatedPaper {
  _id: string;
  title: string;
  field: string;
  year: number;
  citationCount: number;
  similarityScore: number;
}

export default function RelatedPapers({ papers }: { papers: RelatedPaper[] }) {
  if (!papers || papers.length === 0) return null;

  return (
    <div className="mt-16">
      <h2 className="text-2xl font-bold font-['Clash_Display'] text-[#E9D4C3] mb-6 tracking-wide flex items-center gap-3">
        <span className="w-2 h-6 bg-[#8A1A1A] rounded" /> Similar Document Vectors
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {papers.map((paper) => (
          <Link
            key={paper._id}
            href={`/papers/${paper._id}`}
            className="group backdrop-blur-[16px] bg-[rgba(233,212,195,0.06)] hover:bg-[rgba(233,212,195,0.09)] border border-[rgba(233,212,195,0.12)] hover:border-[#8A1A1A] rounded-xl p-5 flex flex-col justify-between transition-all duration-300 relative overflow-hidden"
          >
            {/* Card Hover Glow */}
            <div className="absolute -right-10 -top-10 w-24 h-24 bg-[#7C8FA9]/5 rounded-full blur-2xl group-hover:bg-[#8A1A1A]/10 transition-all duration-300" />

            <div>
              <div className="flex justify-between items-start gap-2 mb-4">
                <span className="text-[10px] font-mono tracking-wider uppercase bg-[rgba(233,212,195,0.1)] px-2 py-0.5 rounded text-[#A8B3C4]">
                  {paper.field}
                </span>
                <StatStamp percentage={paper.similarityScore} size="sm" />
              </div>
              <h3 className="text-sm font-bold text-[#E9D4C3] mb-2 line-clamp-2 group-hover:text-[#F5F5F5] transition-colors">
                {paper.title}
              </h3>
            </div>

            <div className="mt-6 pt-3 border-t border-[rgba(233,212,195,0.08)] flex justify-between text-[11px] font-mono text-[#7C8FA9]">
              <span>Year: <span className="text-[#F5F5F5]">{paper.year}</span></span>
              <span>Citations: <span className="text-[#F5F5F5]">{paper.citationCount.toLocaleString()}</span></span>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}