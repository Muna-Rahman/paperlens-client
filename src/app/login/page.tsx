"use client";

import { useState } from "react";
import { useAuth } from "@/context/AuthContext";
import { useRouter } from "next/navigation";
import { ShieldCheck, Eye, EyeOff, Terminal, AlertTriangle } from "lucide-react";

export default function LoginPage() {
  const { loginDemo } = useAuth();
  const router = useRouter();

  // Controlled input form states
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);

  // Dynamic input validation error flags
  const [errors, setErrors] = useState<{ email?: string; password?: string }>({});
  const [systemAlert, setSystemAlert] = useState<string | null>(null);

  // Double check form parameters before attempting backend network dispatch loops
  const validateForm = () => {
    const activeErrors: { email?: string; password?: string } = {};
    
    if (!email) {
      activeErrors.email = "Please enter your email address to log in.";
    } else if (!/\S+@\S+\.\S+/.test(email)) {
      activeErrors.email = "That email format does not look right. Please double check.";
    }

    if (!password) {
      activeErrors.password = "Please enter your password.";
    } else if (password.length < 6) {
      activeErrors.password = "Your password must be at least 6 characters long.";
    }

    setErrors(activeErrors);
    return Object.keys(activeErrors).length === 0;
  };

  const handleStandardSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSystemAlert(null);

    if (validateForm()) {
      // Temporary status message displaying until standard server api endpoints are connected
      setSystemAlert("Form values verified! Standard secure authentication will be available once the backend API is connected.");
    }
  };

  // Instantly populates mock profiles and redirects the user home
  const handleDemoBypass = (role: "user" | "admin") => {
    loginDemo(role);
    router.push("/");
  };

  return (
    <div className="max-w-md mx-auto py-16 px-4 flex flex-col items-center justify-center min-h-[70vh]">
      
      {/* 🧊 Glass-themed Sign-In Panel */}
      <div className="w-full glass-card p-8 rounded-lg border border-[#E9D4C3]/10 relative overflow-hidden shadow-2xl">
        <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-[#8A1A1A] via-[#7C8FA9] to-transparent" />
        
        {/* Decorative Panel Header Header */}
        <div className="flex flex-col items-center text-center mb-8">
          <div className="w-12 h-12 rounded-full border border-[#8A1A1A]/30 bg-[#8A1A1A]/5 flex items-center justify-center mb-3">
            <ShieldCheck className="w-6 h-6 text-[#8A1A1A] shadow-glow-red" />
          </div>
          <span className="font-mono text-[9px] text-[#7C8FA9] tracking-widest uppercase block">// SECURE GATEWAY</span>
          <h1 className="font-display text-2xl font-bold text-white tracking-tight mt-1">SIGN IN</h1>
        </div>

        {/* Dynamic Status Alert Banner */}
        {systemAlert && (
          <div className="mb-6 p-3 bg-red-950/20 border border-red-900/40 rounded flex items-start space-x-2 font-mono text-[10px] text-red-400">
            <AlertTriangle className="w-4 h-4 mt-0.5 shrink-0" />
            <span>{systemAlert}</span>
          </div>
        )}

        {/* Primary Input Form */}
        <form onSubmit={handleStandardSubmit} className="space-y-5">
          
          {/* Email input field layout */}
          <div className="space-y-1">
            <label className="font-mono text-[10px] text-[#7C8FA9] uppercase tracking-wider block">
              EMAIL ADDRESS:
            </label>
            <input
              type="text"
              value={email}
              onChange={(e) => {
                setEmail(e.target.value);
                if (errors.email) setErrors({ ...errors, email: undefined });
              }}
              placeholder="operator@paperlens.dat"
              className={`w-full bg-[#0A1626] border rounded px-3 py-2 text-xs font-mono text-white focus:outline-none transition-colors ${
                errors.email ? "border-red-600 focus:border-red-500" : "border-[#E9D4C3]/15 focus:border-[#8A1A1A]"
              }`}
            />
            {errors.email && (
              <span className="font-mono text-[9px] text-red-400 block mt-1 animate-pulse">
                &gt; {errors.email}
              </span>
            )}
          </div>

          {/* Password input field layout */}
          <div className="space-y-1">
            <label className="font-mono text-[10px] text-[#7C8FA9] uppercase tracking-wider block">
              PASSWORD:
            </label>
            <div className="relative">
              <input
                type={showPassword ? "text" : "password"}
                value={password}
                onChange={(e) => {
                  setPassword(e.target.value);
                  if (errors.password) setErrors({ ...errors, password: undefined });
                }}
                placeholder="••••••••••••"
                className={`w-full bg-[#0A1626] border rounded pl-3 pr-10 py-2 text-xs font-mono text-white focus:outline-none transition-colors ${
                  errors.password ? "border-red-600 focus:border-red-500" : "border-[#E9D4C3]/15 focus:border-[#8A1A1A]"
                }`}
              />
              <button
                type="button"
                onClick={() => setShowPassword(!showPassword)}
                className="absolute right-3 top-2.5 text-[#7C8FA9] hover:text-[#E9D4C3] transition-colors"
              >
                {showPassword ? <EyeOff className="w-4 h-4" /> : <Eye className="w-4 h-4" />}
              </button>
            </div>
            {errors.password && (
              <span className="font-mono text-[9px] text-red-400 block mt-1 animate-pulse">
                &gt; {errors.password}
              </span>
            )}
          </div>

          <button
            type="submit"
            className="w-full py-2.5 bg-[#8A1A1A]/20 hover:bg-[#8A1A1A]/40 border border-[#8A1A1A]/50 text-[#E9D4C3] font-mono text-xs uppercase tracking-wider transition-all rounded font-bold mt-2"
          >
            EXECUTE SIGN IN
          </button>
        </form>

        {/* Visual Bypass Splitter Divider */}
        <div className="relative my-6 flex items-center justify-center">
          <div className="absolute w-full h-[1px] bg-[#E9D4C3]/5" />
          <span className="relative z-10 px-3 bg-[#0A1626] font-mono text-[9px] text-[#7C8FA9]">OR // DOCK BYPASS</span>
        </div>

        {/* ⚡ Demo Login Trigger Module buttons */}
        <div className="grid grid-cols-2 gap-3">
          <button
            onClick={() => handleDemoBypass("user")}
            className="flex items-center justify-center space-x-1.5 px-3 py-2 bg-[#E9D4C3]/5 border border-[#E9D4C3]/10 text-[#E9D4C3] font-mono text-[10px] uppercase rounded hover:bg-[#E9D4C3]/10 transition-colors"
          >
            <Terminal className="w-3.5 h-3.5 text-[#7C8FA9]" />
            <span>DEMO USER</span>
          </button>
          
          <button
            onClick={() => handleDemoBypass("admin")}
            className="flex items-center justify-center space-x-1.5 px-3 py-2 bg-[#8A1A1A]/10 border border-[#8A1A1A]/30 text-[#E9D4C3] font-mono text-[10px] uppercase rounded hover:bg-[#8A1A1A]/30 transition-colors shadow-glow-red/10"
          >
            <ShieldCheck className="w-3.5 h-3.5 text-[#8A1A1A]" />
            <span>DEMO ADMIN</span>
          </button>
        </div>

      </div>

    </div>
  );
}