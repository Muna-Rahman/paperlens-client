"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";
import { z } from "zod";
import { UserPlus, Eye, EyeOff, Terminal } from "lucide-react";

// 🛡️ 1. Define the validation schema rules using Zod
const registerSchema = z.object({
  name: z.string().min(2, { message: "IDENTITY_REQUIRED: Name parameter must contain at least 2 symbols." }),
  email: z.string().email({ message: "MALFORMED_STRING: Payload syntax must match an operational email." }),
  password: z.string().min(6, { message: "BIT_LENGTH_SHORT: Passphrase density must equal or exceed 6 symbols." }),
  confirmPassword: z.string()
}).refine((data) => data.password === data.confirmPassword, {
  message: "MISMATCH_DETECTED: Target verify passphrase does not match original original array key.",
  path: ["confirmPassword"],
});

type RegisterFormValues = z.infer<typeof registerSchema>;

export default function RegisterPage() {
  const router = useRouter();

  // Controlled component payload states
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  // Visibility toggle state
  const [showPass, setShowPass] = useState(false);

  // Clean field inline error catch records
  const [fieldErrors, setFieldErrors] = useState<{ [K in keyof RegisterFormValues]?: string }>({});
  const [systemAlert, setSystemAlert] = useState<string | null>(null);

  const handleRegistrationSequence = (e: React.FormEvent) => {
    e.preventDefault();
    setFieldErrors({});
    setSystemAlert(null);

    const result = registerSchema.safeParse({ name, email, password, confirmPassword });

    if (!result.success) {
      const errorsObj: typeof fieldErrors = {};
      result.error.issues.forEach((issue) => {
        const pathKey = issue.path[0] as keyof RegisterFormValues;
        errorsObj[pathKey] = issue.message;
      });
      setFieldErrors(errorsObj);
      return;
    }

    setSystemAlert("SYS_STATUS: Registration array successfully validated. Proceed to integrate Node backend pipelines.");
  };

  return (
    <div className="max-w-md mx-auto py-6 px-4 flex flex-col items-center justify-center min-h-[calc(100vh-12rem)]">
      
      {/* 🧊 Glass Registration Housing */}
      <div className="w-full glass-card p-6 sm:p-8 rounded-lg border border-[#E9D4C3]/10 relative overflow-hidden shadow-2xl">
        <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-[#8A1A1A] via-[#7C8FA9] to-transparent" />
        
        {/* Section Header */}
        <div className="flex flex-col items-center text-center mb-6">
          <div className="w-10 h-10 rounded-full border border-[#8A1A1A]/30 bg-[#8A1A1A]/5 flex items-center justify-center mb-2">
            <UserPlus className="w-4 h-4 text-[#8A1A1A]" />
          </div>
          <span className="font-mono text-[9px] text-[#7C8FA9] tracking-widest uppercase block">// INITIALIZE_NEW_OPERATOR</span>
          <h1 className="font-display text-xl font-bold text-white tracking-tight mt-0.5">SYS_REGISTRATION</h1>
        </div>

        {/* Global Notification Banner */}
        {systemAlert && (
          <div className="mb-4 p-2.5 bg-[#E9D4C3]/5 border border-[#8A1A1A]/30 rounded flex items-start space-x-2 font-mono text-[10px] text-[#E9D4C3]">
            <Terminal className="w-3.5 h-3.5 mt-0.5 text-[#8A1A1A] shrink-0" />
            <span>{systemAlert}</span>
          </div>
        )}

        {/* Main Enrollment Form */}
        <form onSubmit={handleRegistrationSequence} className="space-y-3.5">
          
          {/* Full Name Input */}
          <div className="space-y-1">
            <label className="font-mono text-[10px] text-[#7C8FA9] uppercase tracking-wider block">NAME_STRING:</label>
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

          {/* Email Identity Input */}
          <div className="space-y-1">
            <label className="font-mono text-[10px] text-[#7C8FA9] uppercase tracking-wider block">EMAIL_TARGET_VECTOR:</label>
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

          {/* Master Passphrase Input */}
          <div className="space-y-1">
            <label className="font-mono text-[10px] text-[#7C8FA9] uppercase tracking-wider block">PASSPHRASE_KEY_ROOT:</label>
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

          {/* Passphrase Verification Input */}
          <div className="space-y-1">
            <label className="font-mono text-[10px] text-[#7C8FA9] uppercase tracking-wider block">VERIFY_PASSPHRASE_ARRAY:</label>
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

          {/* Submit Button */}
          <button
            type="submit"
            className="w-full py-2.5 bg-[#8A1A1A] hover:bg-red-700 text-[#E9D4C3] font-mono text-xs uppercase tracking-wider transition-colors rounded font-bold mt-2 cursor-pointer"
          >
            COMPILE_REGISTRATION_PAYLOAD
          </button>
        </form>

        {/* Login redirect link */}
        <div className="mt-5 text-center font-mono text-[10px] text-[#7C8FA9]">
          ALREADY_REGISTERED?{" "}
          <Link href="/login" className="text-[#E9D4C3] underline hover:text-white transition-colors">
            EXECUTE_SIGN_IN
          </Link>
        </div>

      </div>
    </div>
  );
}