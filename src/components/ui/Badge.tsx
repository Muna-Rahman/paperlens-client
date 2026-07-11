"use client";

import React from "react";

interface BadgeProps {
  text: string;
  variant?: "default" | "crimson" | "slate";
}

export default function Badge({ text, variant = "default" }: BadgeProps) {
  const styles = {
    default: "bg-[#E9D4C3]/5 border-[#E9D4C3]/15 text-[#7C8FA9]",
    crimson: "bg-[#8A1A1A]/10 border-[#8A1A1A]/30 text-[#E9D4C3]",
    slate: "bg-[#7C8FA9]/10 border-[#7C8FA9]/30 text-[#7C8FA9]"
  };

  return (
    <span className={`inline-block font-mono text-[9px] uppercase tracking-wider px-2 py-0.5 border rounded-full font-bold ${styles[variant]}`}>
      {text}
    </span>
  );
}