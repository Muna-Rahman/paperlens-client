"use client";

export default function SkeletonCard() {
  return (
    <div className="glass-card p-5 rounded-lg border border-[#E9D4C3]/5 min-h-[340px] flex flex-col justify-between relative overflow-hidden animate-pulse">
      {/* Shimmer sweep line */}
      <div className="absolute inset-0 bg-gradient-to-r from-transparent via-[#E9D4C3]/5 to-transparent -translate-x-full animate-[shimmer_1.5s_infinite]" />
      
      <div>
        {/* Mocking the cover image placeholder */}
        <div className="w-full h-24 bg-[#E9D4C3]/5 rounded mb-4" />
        {/* Mocking the field header tag */}
        <div className="h-3 w-16 bg-[#7C8FA9]/20 rounded mb-3" />
        {/* Mocking the paper title lines */}
        <div className="h-4 w-5/6 bg-[#E9D4C3]/10 rounded mb-2" />
        <div className="h-4 w-2/3 bg-[#E9D4C3]/10 rounded mb-4" />
        {/* Mocking the short abstract prose blocks */}
        <div className="h-2 w-full bg-[#7C8FA9]/10 rounded mb-2" />
        <div className="h-2 w-full bg-[#7C8FA9]/10 rounded mb-2" />
        <div className="h-2 w-4/5 bg-[#7C8FA9]/10 rounded" />
      </div>

      {/* Mocking the terminal metadata bottom bar */}
      <div className="mt-6 pt-4 border-t border-[#E9D4C3]/5 flex items-center justify-between">
        <div className="h-3 w-20 bg-[#7C8FA9]/20 rounded" />
        <div className="h-6 w-16 bg-[#8A1A1A]/20 rounded" />
      </div>
    </div>
  );
}