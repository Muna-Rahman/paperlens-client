'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { useAuth } from '@/context/AuthContext';
import { usePathname } from 'next/navigation';

export default function Navbar() {
  const { user, isAuthenticated, logout } = useAuth();
  const pathname = usePathname();
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav
      className={`sticky top-0 z-50 w-full transition-all duration-300 font-['General_Sans'] ${
        isScrolled
          ? 'backdrop-blur-[24px] bg-[rgba(10,22,38,0.7)] border-b border-[rgba(233,212,195,0.12)] shadow-xl'
          : 'backdrop-blur-[16px] bg-[rgba(233,212,195,0.03)] border-b border-[rgba(233,212,195,0.06)]'
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
        {/* Clickable Brand Logo takes authenticated users to Explore, guests to Home */}
        <Link href={isAuthenticated ? "/explore" : "/"} className="font-['Clash_Display'] text-xl font-bold text-[#E9D4C3] tracking-wider">
          Paper<span className="text-[#8A1A1A]">Lens</span>
        </Link>

        <div className="flex items-center gap-6">
          {/* FIXED: Home item only displays when isAuthenticated is false */}
          {!isAuthenticated && (
            <Link
              href="/"
              className={`text-sm transition-colors ${
                pathname === '/' ? 'text-[#8A1A1A] font-semibold' : 'text-[#A8B3C4] hover:text-[#F5F5F5]'
              }`}
            >
              Home
            </Link>
          )}

          <Link
            href="/explore"
            className={`text-sm transition-colors ${
              pathname === '/explore' ? 'text-[#8A1A1A] font-semibold' : 'text-[#A8B3C4] hover:text-[#F5F5F5]'
            }`}
          >
            Explore
          </Link>

          {isAuthenticated ? (
            <>
              <Link
                href="/papers/add"
                className={`text-sm transition-colors ${
                  pathname === '/papers/add' ? 'text-[#8A1A1A] font-semibold' : 'text-[#A8B3C4] hover:text-[#F5F5F5]'
                }`}
              >
                Add Paper
              </Link>
              <Link
                href="/papers/manage"
                className={`text-sm transition-colors ${
                  pathname === '/papers/manage' ? 'text-[#8A1A1A] font-semibold' : 'text-[#A8B3C4] hover:text-[#F5F5F5]'
                }`}
              >
                Manage Papers
              </Link>

              <span className="text-xs font-mono text-[#7C8FA9] bg-[rgba(233,212,195,0.08)] px-2 py-1 rounded border border-[rgba(233,212,195,0.1)]">
                {user?.name}
              </span>

              <button
                onClick={logout}
                className="text-xs uppercase font-mono tracking-wider text-[#8A1A1A] border border-[#8A1A1A] hover:bg-[#8A1A1A]/10 px-3 py-1.5 rounded transition-all duration-300"
              >
                Logout
              </button>
            </>
          ) : (
            <>
              <Link
                href="/login"
                className={`text-sm transition-colors ${
                  pathname === '/login' ? 'text-[#8A1A1A] font-semibold' : 'text-[#A8B3C4] hover:text-[#F5F5F5]'
                }`}
              >
                Login
              </Link>
              <Link
                href="/register"
                className="bg-[#8A1A1A] hover:bg-[#4E0000] text-[#F5F5F5] text-xs font-semibold px-4 py-2 rounded-lg shadow-md shadow-[#8A1A1A]/20 transition-all duration-300"
              >
                Register
              </Link>
            </>
          )}
        </div>
      </div>
    </nav>
  );
}