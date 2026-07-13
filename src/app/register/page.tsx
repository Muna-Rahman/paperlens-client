'use client';

import React, { useState } from 'react';
import { authClient } from '@/lib/auth-client';
import { useRouter } from 'next/navigation';
import Link from 'next/link';

export default function RegisterPage() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);
  const router = useRouter();

  const handleRegister = async (e: React.FormEvent) => {
    e.preventDefault();
    setError('');

    if (password !== confirmPassword) {
      setError("Passwords do not match");
      return;
    }

    setLoading(true);

    const { error: authError } = await authClient.signUp.email({
      email,
      password,
      name,
    });

    if (authError) {
      setError(authError.message || 'Registration failed');
      setLoading(false);
    } else {
      // FIXED: Push to /login instead of /explore so they can manually sign in
      router.push('/login');
      router.refresh();
    }
  };

  return (
    <main className="min-h-screen w-full flex items-center justify-center bg-[#0A1626] px-4 font-['General_Sans']">
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[500px] h-[500px] bg-[#7C8FA9]/10 rounded-full blur-[120px] pointer-events-none" />

      <div className="w-full max-w-md backdrop-blur-[16px] bg-[rgba(233,212,195,0.06)] border border-[rgba(233,212,195,0.12)] rounded-2xl p-8 shadow-2xl relative z-10">
        <h2 className="text-3xl font-bold font-['Clash_Display'] text-[#E9D4C3] mb-2 tracking-wide text-center">
          Create Account
        </h2>
        <p className="text-[#A8B3C4] text-sm text-center mb-6">
          Join PaperLens to process new collections
        </p>

        {error && (
          <div className="mb-4 p-3 rounded-lg bg-[#8A1A1A]/20 border border-[#8A1A1A] text-[#F5F5F5] text-xs font-mono">
            {error}
          </div>
        )}

        <form onSubmit={handleRegister} className="space-y-4">
          <div>
            <label className="block text-xs uppercase tracking-wider font-mono text-[#A8B3C4] mb-2">Full Name</label>
            <input
              type="text"
              required
              value={name}
              onChange={(e) => setName(e.target.value)}
              className="w-full bg-[#0A1626]/50 border border-[rgba(233,212,195,0.15)] rounded-lg px-4 py-3 text-[#F5F5F5] placeholder-[#718096] text-sm focus:outline-none focus:border-[#8A1A1A] transition-colors"
              placeholder="Dr. Alex Morgan"
            />
          </div>

          <div>
            <label className="block text-xs uppercase tracking-wider font-mono text-[#A8B3C4] mb-2">Email</label>
            <input
              type="email"
              required
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full bg-[#0A1626]/50 border border-[rgba(233,212,195,0.15)] rounded-lg px-4 py-3 text-[#F5F5F5] placeholder-[#718096] text-sm focus:outline-none focus:border-[#8A1A1A] transition-colors"
              placeholder="name@university.edu"
            />
          </div>

          <div>
            <label className="block text-xs uppercase tracking-wider font-mono text-[#A8B3C4] mb-2">Password</label>
            <input
              type="password"
              required
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="w-full bg-[#0A1626]/50 border border-[rgba(233,212,195,0.15)] rounded-lg px-4 py-3 text-[#F5F5F5] placeholder-[#718096] text-sm focus:outline-none focus:border-[#8A1A1A] transition-colors"
              placeholder="••••••••"
            />
          </div>

          <div>
            <label className="block text-xs uppercase tracking-wider font-mono text-[#A8B3C4] mb-2">Confirm Password</label>
            <input
              type="password"
              required
              value={confirmPassword}
              onChange={(e) => setConfirmPassword(e.target.value)}
              className="w-full bg-[#0A1626]/50 border border-[rgba(233,212,195,0.15)] rounded-lg px-4 py-3 text-[#F5F5F5] placeholder-[#718096] text-sm focus:outline-none focus:border-[#8A1A1A] transition-colors"
              placeholder="••••••••"
            />
          </div>

          <button
            type="submit"
            disabled={loading}
            className="w-full mt-2 bg-[#8A1A1A] hover:bg-[#4E0000] text-[#F5F5F5] font-semibold py-3 px-4 rounded-lg shadow-lg shadow-[#8A1A1A]/20 transition-all duration-300 disabled:opacity-50 text-sm tracking-wide"
          >
            {loading ? 'Creating Account...' : 'Register'}
          </button>
        </form>

        <div className="mt-6 text-center text-xs text-[#A8B3C4]">
          Already have an account?{' '}
          <Link href="/login" className="text-[#E9D4C3] hover:text-[#8A1A1A] transition-colors font-semibold ml-1">
            Sign In
          </Link>
        </div>
      </div>
    </main>
  );
}