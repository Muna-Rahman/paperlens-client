"use client";

import React from "react";

interface StatStampProps {
  value: number;
  size?: "sm" | "md";
}

export default function StatStamp({ value, size = "md" }: StatStampProps) {
  const dimensionStyles = size === "sm" ? "w-8 h-8 text-[8px]" : "w-10 h-10 text-[10px]";
  
  return (
    <div className="relative flex items-center justify-center select-none">
      {/* Dynamic pulsing ambient boundary circle */}
      <div className={`absolute border border-[#8A1A1A]/30 rounded-full animate-radar pointer-events-none ${
        size === "sm" ? "w-10 h-10" : "w-12 h-12"
      }`} />
      
      {/* Inner display plate */}
      <div className={`rounded-full border border-[#8A1A1A] flex items-center justify-center bg-[#0A1626] font-mono font-bold text-[#E9D4C3] shadow-[0_0_10px_rgba(138,26,26,0.2)] ${dimensionStyles}`}>
        {value}%
      </div>
    </div>
  );
}