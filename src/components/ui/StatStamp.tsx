'use client';

import React, { useEffect, useState } from 'react';

interface StatStampProps {
  percentage: number;
  size?: 'sm' | 'md' | 'lg';
}

export default function StatStamp({ percentage, size = 'md' }: StatStampProps) {
  const [currentVal, setCurrentVal] = useState(0);

  useEffect(() => {
    // Animate the text ticker upwards alongside the radar ring sweep
    const duration = 1000; // 1 second sweep
    const steps = 60;
    const stepTime = duration / steps;
    let step = 0;

    const timer = setInterval(() => {
      step++;
      const progress = step / steps;
      setCurrentVal(Math.round(percentage * progress));

      if (step >= steps) {
        clearInterval(timer);
        setCurrentVal(percentage);
      }
    }, stepTime);

    return () => clearInterval(timer);
  }, [percentage]);

  const dimensions = {
    sm: 'w-12 h-12 text-xs',
    md: 'w-16 h-16 text-sm',
    lg: 'w-24 h-24 text-xl'
  };

  return (
    <div className={`relative flex items-center justify-center rounded-full bg-[#0A1626]/80 border border-[rgba(233,212,195,0.1)] font-mono font-bold text-[#E9D4C3] ${dimensions[size]} shadow-inner group`}>
      {/* Target Base Track Ring */}
      <svg className="absolute inset-0 w-full h-full transform -rotate-90 p-1" viewBox="0 0 36 36">
        <path
          className="text-[rgba(233,212,195,0.05)]"
          strokeWidth="2.5"
          stroke="currentColor"
          fill="transparent"
          d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831"
        />
        {/* Animated Sweep Radar Track Line */}
        <path
          className="text-[#8A1A1A] transition-all duration-1000 ease-out"
          strokeDasharray={`${percentage}, 100`}
          strokeWidth="2.5"
          strokeLinecap="round"
          stroke="currentColor"
          fill="transparent"
          d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831"
        />
      </svg>

      {/* Glowing Sweep Pulse Overlay */}
      <div className="absolute inset-0 rounded-full border border-[#8A1A1A]/40 animate-[ping_1.5s_ease-in-out_1] pointer-events-none group-hover:animate-pulse" />

      {/* Dynamic Counter Target */}
      <span className="relative z-10 flex items-center gap-0.5">
        {currentVal}<span className="text-[10px] text-[#8A1A1A]">%</span>
      </span>
    </div>
  );
}