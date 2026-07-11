"use client";

import React from "react";

interface GlassCardProps extends React.HTMLAttributes<HTMLDivElement> {
  children: React.ReactNode;
  glowColor?: "red" | "blue" | "none";
}

export default function GlassCard({ children, glowColor = "none", className = "", ...props }: GlassCardProps) {
  const glowStyles = {
    none: "border-[#E9D4C3]/10 shadow-2xl",
    red: "border-[#8A1A1A]/30 shadow-[0_0_25px_rgba(138,26,26,0.15)] hover:border-[#8A1A1A]/50",
    blue: "border-[#7C8FA9]/30 shadow-[0_0_25px_rgba(124,143,169,0.15)] hover:border-[#7C8FA9]/50"
  };

  return (
    <div 
      className={`backdrop-blur-md bg-[#0A1626]/40 border rounded-lg p-6 transition-all duration-300 ${glowStyles[glowColor]} ${className}`}
      {...props}
    >
      {children}
    </div>
  );
}