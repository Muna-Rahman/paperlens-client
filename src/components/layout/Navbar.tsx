"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { useAuth } from "@/context/AuthContext";
import { User, LogOut, ChevronDown } from "lucide-react";

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [hasScrolled, setHasScrolled] = useState(false);
  const [isProfileOpen, setIsProfileOpen] = useState(false);
  const { user, isLoggedIn, loginDemo, logout } = useAuth();

  // Change navbar background styles when the user scrolls down the page
  useEffect(() => {
    const handleScroll = () => {
      setHasScrolled(window.scrollY > 10);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 px-6 py-4 border-b ${
      hasScrolled ? "bg-[#0A1626] border-[#E9D4C3]/20 shadow-lg" : "bg-[#0A1626] border-[#E9D4C3]/10"
    }`}>
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        
        {/* Logo */}
        <Link href="/" className="font-mono text-base font-bold tracking-wider text-[#E9D4C3] flex items-center space-x-2">
          <span className="w-2 h-2 rounded-full bg-red-600 animate-pulse" />
          <span>PAPER<span className="text-[#7C8FA9]">LENS</span></span>
        </Link>

        {/* 💻 Desktop Links */}
        <div className="hidden md:flex items-center space-x-6 font-mono text-xs tracking-wider">
          <Link href="/" className="text-[#E9D4C3] hover:text-white transition-colors">// HOME</Link>
          <Link href="/papers" className="text-[#7C8FA9] hover:text-[#E9D4C3] transition-colors">// BROWSE PAPERS</Link>
          
          {isLoggedIn ? (
            <>
              <Link href="/papers/add" className="text-[#7C8FA9] hover:text-[#E9D4C3] transition-colors">// ADD NEW PAPER</Link>
              <Link href="/papers/manage" className="text-[#7C8FA9] hover:text-[#E9D4C3] transition-colors">// MY PAPERS</Link>
              <Link href="/methodology" className="text-[#7C8FA9] hover:text-[#E9D4C3] transition-colors">// HOW IT WORKS</Link>
              <Link href="/contact" className="text-[#7C8FA9] hover:text-[#E9D4C3] transition-colors">// CONTACT</Link>
              
              {/* Profile Menu Dropdown */}
              <div className="relative ml-4">
                <button 
                  onClick={() => setIsProfileOpen(!isProfileOpen)}
                  className="flex items-center space-x-2 border border-[#E9D4C3]/30 px-3 py-1.5 bg-[#E9D4C3]/5 rounded hover:bg-[#E9D4C3]/10 transition-all text-[#E9D4C3]"
                >
                  <User className="w-3.5 h-3.5" />
                  <span className="text-[10px] uppercase font-bold tracking-widest">{user?.role}</span>
                  <ChevronDown className="w-3 h-3 text-[#7C8FA9]" />
                </button>
                
                {isProfileOpen && (
                  <div className="absolute right-0 mt-2 w-48 bg-[#0A1626] border border-[#E9D4C3]/20 p-2 shadow-xl rounded z-50">
                    <div className="px-3 py-2 border-b border-[#E9D4C3]/10 mb-1 text-[10px] text-[#7C8FA9] break-all">
                      {user?.email}
                    </div>
                    <button 
                      onClick={() => { logout(); setIsProfileOpen(false); }}
                      className="w-full flex items-center space-x-2 text-left text-red-400 hover:bg-red-950/30 px-3 py-2 rounded transition-colors"
                    >
                      <LogOut className="w-3.5 h-3.5" />
                      <span>LOG OUT</span>
                    </button>
                  </div>
                )}
              </div>
            </>
          ) : (
            <>
              <Link href="/about" className="text-[#7C8FA9] hover:text-[#E9D4C3] transition-colors">// ABOUT US</Link>
              <span className="text-gray-800">|</span>
              
              <Link href="/login" className="text-[#7C8FA9] hover:text-[#E9D4C3] transition-colors">
                SIGN IN
              </Link>
              
              {/* Shortcut to Registration */}
              <Link 
                href="/register" 
                className="border border-[#8A1A1A] bg-[#8A1A1A]/10 text-[#E9D4C3] px-3 py-1.5 rounded hover:bg-[#8A1A1A]/30 transition-all text-[11px] font-bold shadow-glow-red/20"
              >
                CREATE ACCOUNT
              </Link>
              
              {/* Instant Test Sign-In */}
              <button 
                onClick={() => loginDemo("user")}
                className="border border-gray-700 bg-gray-900/30 text-[#7C8FA9] px-3 py-1 rounded text-[10px] hover:bg-gray-800/40 transition-all"
              >
                TEST LOGIN
              </button>
            </>
          )}
        </div>

        {/* 📱 Mobile Menu Button */}
        <button 
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          className="md:hidden font-mono text-xs text-[#E9D4C3] border border-[#E9D4C3]/20 px-2 py-1 rounded bg-[#0A1626]/50"
        >
          {isMenuOpen ? "[ CLOSE ]" : "[ MENU ]"}
        </button>
      </div>

      {/* 📱 Mobile Dropdown Menu Panel */}
      {isMenuOpen && (
        <div className="absolute top-full left-0 w-full bg-[#0A1626] border-b border-[#E9D4C3]/20 flex flex-col p-6 space-y-4 font-mono text-xs shadow-2xl">
          <Link href="/" onClick={() => setIsMenuOpen(false)} className="text-[#E9D4C3]">// HOME</Link>
          <Link href="/papers" onClick={() => setIsMenuOpen(false)} className="text-[#7C8FA9]">// BROWSE PAPERS</Link>
          
          {isLoggedIn ? (
            <>
              <Link href="/papers/add" onClick={() => setIsMenuOpen(false)} className="text-[#7C8FA9]">// ADD NEW PAPER</Link>
              <Link href="/papers/manage" onClick={() => setIsMenuOpen(false)} className="text-[#7C8FA9]">// MY PAPERS</Link>
              <Link href="/methodology" onClick={() => setIsMenuOpen(false)} className="text-[#7C8FA9]">// HOW IT WORKS</Link>
              <Link href="/contact" onClick={() => setIsMenuOpen(false)} className="text-[#7C8FA9]">// CONTACT</Link>
              <div className="pt-2 border-t border-gray-800 flex items-center justify-between text-[10px] text-[#7C8FA9]">
                <span>{user?.email}</span>
                <button onClick={() => { logout(); setIsMenuOpen(false); }} className="text-red-400 font-bold">[ LOG OUT ]</button>
              </div>
            </>
          ) : (
            <>
              <Link href="/about" onClick={() => setIsMenuOpen(false)} className="text-[#7C8FA9]">// ABOUT US</Link>
              
              <div className="pt-2 border-t border-gray-800 flex flex-col gap-3">
                <Link href="/login" onClick={() => setIsMenuOpen(false)} className="text-center text-[#7C8FA9] py-2 border border-[#E9D4C3]/15 rounded">
                  SIGN IN
                </Link>
                <Link href="/register" onClick={() => setIsMenuOpen(false)} className="text-center bg-[#8A1A1A] text-[#E9D4C3] py-2 rounded font-bold">
                  CREATE ACCOUNT
                </Link>
                <button onClick={() => { loginDemo("user"); setIsMenuOpen(false); }} className="text-center bg-gray-800 text-[#7C8FA9] py-1.5 rounded text-[10px]">
                  TEST QUICK SIGN-IN
                </button>
              </div>
            </>
          )}
        </div>
      )}
    </nav>
  );
}