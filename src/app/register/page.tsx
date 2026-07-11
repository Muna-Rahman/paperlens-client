"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";
import { z } from "zod";
import { UserPlus, Eye, EyeOff, Terminal } from "lucide-react";

// 🛡️ 1. Set up form validation rules using Zod
const registerSchema = z.object({
  name: z.string().min(2, { message: "Please enter a name that is at least 2 characters long." }),
  email: z.string().email({ message: "Please enter a valid email address." }),
  password: z.string().min(6, { message: "Your password must be at least 6 characters long." }),
  confirmPassword: z.string()
}).refine((data) => data.password === data.confirmPassword, {
  message: "The passwords you typed do not match.",
  path: ["confirmPassword"], // Attaches the error message directly to the confirmPassword field
});

type RegisterFormValues = z.infer<typeof registerSchema>;

export default function RegisterPage() {
  const router = useRouter();

  // Controlled form states
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  // Password visibility state toggle
  const [showPass, setShowPass] = useState(false);

  // Catch dynamic field validation errors
  const [fieldErrors, setFieldErrors] = useState<{ [K in keyof RegisterFormValues]?: string }>({});
  const [systemAlert, setSystemAlert] = useState<string | null>(null);

  const handleRegistrationSequence = (e: React.FormEvent) => {
    e.preventDefault();
    setFieldErrors({});
    setSystemAlert(null);

    // Run form values through the Zod validator
    const result = registerSchema.safeParse({ name, email, password, confirmPassword });

    if (!result.success) {
      const errorsObj: typeof fieldErrors = {};
      
      // Extract errors cleanly and map them to the proper inputs
      result.error.issues.forEach((issue) => {
        const pathKey = issue.path[0] as keyof RegisterFormValues;
        errorsObj[pathKey] = issue.message;
      });
      
      setFieldErrors(errorsObj);
      return;
    }

    // Temporary placeholder message until backend API routes are integrated
    setSystemAlert("Your account details look great! You can now proceed to wire up the backend API endpoints.");
  };

  return (
    <div className="max-w-md mx-auto py-6 px-4 flex flex-col items-center justify-center min-h-[calc(100vh-12rem)]">
      
      {/* 🧊 Glass-themed Registration Card */}
      <div className="w-full glass-card p-6 sm:p-8 rounded-lg border border-[#E9D4C3]/10 relative overflow-hidden shadow-2xl">
        <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-[#8A1A1A] via-[#7C8FA9] to-transparent" />
        
        {/* Card Header */}
        <div className="flex flex-col items-center text-center mb-6">
          <div className="w-10 h-10 rounded-full border border-[#8A1A1A]/30 bg-[#8A1A1A]/5 flex items-center justify-center mb-2">
            <UserPlus className="w-4 h-4 text-[#8A1A1A]" />
          </div>
          <span className="font-mono text-[9px] text-[#7C8FA9] tracking-widest uppercase block">// GET STARTED</span>
          <h1 className="font-display text-xl font-bold text-white tracking-tight mt-0.5">CREATE ACCOUNT</h1>
        </div>

        {/* Global Success Notification Banner */}
        {systemAlert && (
          <div className="mb-4 p-2.5 bg-[#E9D4C3]/5 border border-[#8A1A1A]/30 rounded flex items-start space-x-2 font-mono text-[10px] text-[#E9D4C3]">
            <Terminal className="w-3.5 h-3.5 mt-0.5 text-[#8A1A1A] shrink-0" />
            <span>{systemAlert}</span>
          </div>
        )}

        {/* Main Sign Up Form */}
        <form onSubmit={handleRegistrationSequence} className="space-y-3.5">
          
          {/* Full Name Input */}
          <div className="space-y-1">
            <label className="font-mono text-[10px] text-[#7C8FA9] uppercase tracking-wider block">YOUR NAME:</label>
            <input
              type="text"
              value={name}
              onChange={(e) => {
                setName(e.target.value);
                if (fieldErrors.name) setFieldErrors({ ...fieldErrors, name: undefined });
              }}
              placeholder="Mahbuba Rahman"
              className={`w-full bg-[#0A1626] border rounded px-3 py-1.5 text-xs font-mono text-white focus:outline-none transition-colors ${
                fieldErrors.name ? "border-red-600 focus:border-red-500" : "border-[#E9D4C3]/15 focus:border-[#8A1A1A]"
              }`}
            />
            {fieldErrors.name && (
              <span className="font-mono text-[9px] text-red-400 block mt-0.5 animate-pulse">&gt; {fieldErrors.name}</span>
            )}
          </div>

          {/* Email Address Input */}
          <div className="space-y-1">
            <label className="font-mono text-[10px] text-[#7C8FA9] uppercase tracking-wider block">EMAIL ADDRESS:</label>
            <input
              type="text"
              value={email}
              onChange={(e) => {
                setEmail(e.target.value);
                if (fieldErrors.email) setFieldErrors({ ...fieldErrors, email: undefined });
              }}
              placeholder="user@metrouni.edu"
              className={`w-full bg-[#0A1626] border rounded px-3 py-1.5 text-xs font-mono text-white focus:outline-none transition-colors ${
                fieldErrors.email ? "border-red-600 focus:border-red-500" : "border-[#E9D4C3]/15 focus:border-[#8A1A1A]"
              }`}
            />
            {fieldErrors.email && (
              <span className="font-mono text-[9px] text-red-400 block mt-0.5 animate-pulse">&gt; {fieldErrors.email}</span>
            )}
          </div>

          {/* Password Input */}
          <div className="space-y-1">
            <label className="font-mono text-[10px] text-[#7C8FA9] uppercase tracking-wider block">CHOOSE PASSWORD:</label>
            <div className="relative">
              <input
                type={showPass ? "text" : "password"}
                value={password}
                onChange={(e) => {
                  setPassword(e.target.value);
                  if (fieldErrors.password) setFieldErrors({ ...fieldErrors, password: undefined });
                }}
                placeholder="••••••••••••"
                className={`w-full bg-[#0A1626] border rounded pl-3 pr-10 py-1.5 text-xs font-mono text-white focus:outline-none transition-colors ${
                  fieldErrors.password ? "border-red-600 focus:border-red-500" : "border-[#E9D4C3]/15 focus:border-[#8A1A1A]"
                }`}
              />
              <button
                type="button"
                onClick={() => setShowPass(!showPass)}
                className="absolute right-3 top-2 text-[#7C8FA9] hover:text-[#E9D4C3]"
              >
                {showPass ? <EyeOff className="w-3.5 h-3.5" /> : <Eye className="w-3.5 h-3.5" />}
              </button>
            </div>
            {fieldErrors.password && (
              <span className="font-mono text-[9px] text-red-400 block mt-0.5 animate-pulse">&gt; {fieldErrors.password}</span>
            )}
          </div>

          {/* Confirm Password Input */}
          <div className="space-y-1">
            <label className="font-mono text-[10px] text-[#7C8FA9] uppercase tracking-wider block">CONFIRM PASSWORD:</label>
            <input
              type="password"
              value={confirmPassword}
              onChange={(e) => {
                setConfirmPassword(e.target.value);
                if (fieldErrors.confirmPassword) setFieldErrors({ ...fieldErrors, confirmPassword: undefined });
              }}
              placeholder="••••••••••••"
              className={`w-full bg-[#0A1626] border rounded px-3 py-1.5 text-xs font-mono text-white focus:outline-none transition-colors ${
                fieldErrors.confirmPassword ? "border-red-600 focus:border-red-500" : "border-[#E9D4C3]/15 focus:border-[#8A1A1A]"
              }`}
            />
            {fieldErrors.confirmPassword && (
              <span className="font-mono text-[9px] text-red-400 block mt-0.5 animate-pulse">&gt; {fieldErrors.confirmPassword}</span>
            )}
          </div>

          {/* Submit Action Button */}
          <button
            type="submit"
            className="w-full py-2.5 bg-[#8A1A1A] hover:bg-red-700 text-[#E9D4C3] font-mono text-xs uppercase tracking-wider transition-colors rounded font-bold mt-2 cursor-pointer"
          >
            REGISTER ACCOUNT
          </button>
        </form>

        {/* Form Footer Link */}
        <div className="mt-5 text-center font-mono text-[10px] text-[#7C8FA9]">
          ALREADY HAVE AN ACCOUNT?{" "}
          <Link href="/login" className="text-[#E9D4C3] underline hover:text-white transition-colors">
            SIGN IN HERE
          </Link>
        </div>

      </div>
    </div>
  );
}