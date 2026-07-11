"use client";

import React from "react";

interface GlassButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  children: React.ReactNode;
  variant?: "primary" | "secondary" | "ghost";
}

export default function GlassButton({ children, variant = "secondary", className = "", ...props }: GlassButtonProps) {
  const baseStyles = "font-mono text-xs uppercase tracking-wider px-4 py-2.5 rounded font-bold transition-all duration-200 focus:outline-none active:scale-[0.98] cursor-pointer text-center";
  
  const variantStyles = {
    primary: "bg-[#8A1A1A] text-[#E9D4C3] hover:bg-red-700 shadow-md",
    secondary: "bg-[#8A1A1A]/10 border border-[#8A1A1A]/40 text-[#E9D4C3] hover:bg-[#8A1A1A]/30",
    ghost: "border border-[#E9D4C3]/15 text-[#7C8FA9] hover:text-[#E9D4C3] hover:bg-[#E9D4C3]/5"
  };

  return (
    <button className={`${baseStyles} ${variantStyles[variant]} ${className}`} {...props}>
      {children}
    </button>
  );
}