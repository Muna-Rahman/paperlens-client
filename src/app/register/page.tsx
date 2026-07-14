'use client';

import React, { useState } from 'react';
import { useRouter } from 'next/navigation';
import Link from 'next/link';
import api from '@/lib/api';

export default function RegisterPage() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);
  const router = useRouter();

  const handleRegister = async (e: React.FormEvent) => {
    e.preventDefault();
    setError('');
    setLoading(true);

    try {
      // POST straight to your Express backend register route configuration
      const res = await api.post('/auth/register', {
        name,
        email,
        password,
      });

      if (res.data.success) {
        alert("Account provisioned and matrix initialized successfully!");
        router.push('/explore');
        router.refresh();
      } else {
        setError(res.data.message || 'Registration structural validation failure.');
        setLoading(false);
      }
    } catch (err: any) {
      setError(err.message || 'Network exception encountered during registration sequence.');
      setLoading(false);
    }
  };

  return (
    <main className="min-h-screen w-full flex items-center justify-center bg-[#0A1626] px-4 font-['General_Sans']">
      <div className="w-full max-w-md backdrop-blur-[16px] bg-[rgba(233,212,195,0.06)] border border-[rgba(233,212,195,0.12)] rounded-2xl p-8 shadow-2xl relative z-10">
        <h2 className="text-3xl font-bold font-['Clash_Display'] text-[#E9D4C3] mb-2 tracking-wide text-center">
          Create Account
        </h2>
        <p className="text-[#A8B3C4] text-sm text-center mb-6">Join the global research indexing network</p>

        {error && (
          <div className="mb-4 p-3 rounded-lg bg-[#8A1A1A]/20 border border-[#8A1A1A] text-[#F5F5F5] text-xs font-mono">
            {error}
          </div>
        )}

        <form onSubmit={handleRegister} className="space-y-4">
          <div>
            <label className="block text-xs uppercase tracking-wider font-mono text-[#A8B3C4] mb-2">Name</label>
            <input
              type="text"
              required
              value={name}
              onChange={(e) => setName(e.target.value)}
              className="w-full bg-[#0A1626]/50 border border-[rgba(233,212,195,0.15)] rounded-lg px-4 py-3 text-[#F5F5F5] text-sm focus:outline-none focus:border-[#8A1A1A] transition-colors"
              placeholder="Dr. Alex Carter"
            />
          </div>

          <div>
            <label className="block text-xs uppercase tracking-wider font-mono text-[#A8B3C4] mb-2">Email</label>
            <input
              type="email"
              required
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full bg-[#0A1626]/50 border border-[rgba(233,212,195,0.15)] rounded-lg px-4 py-3 text-[#F5F5F5] text-sm focus:outline-none focus:border-[#8A1A1A] transition-colors"
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
              className="w-full bg-[#0A1626]/50 border border-[rgba(233,212,195,0.15)] rounded-lg px-4 py-3 text-[#F5F5F5] text-sm focus:outline-none focus:border-[#8A1A1A] transition-colors"
              placeholder="••••••••"
            />
          </div>

          <button
            type="submit"
            disabled={loading}
            className="w-full mt-2 bg-[#8A1A1A] hover:bg-[#4E0000] text-[#F5F5F5] font-semibold py-3 px-4 rounded-lg transition-all disabled:opacity-50 text-sm tracking-wide"
          >
            {loading ? 'Processing Registry...' : 'Register'}
          </button>
        </form>

        <div className="mt-6 text-center text-xs text-[#A8B3C4]">
          Already have an index profile?{' '}
          <Link href="/login" className="text-[#E9D4C3] hover:text-[#8A1A1A] transition-colors font-semibold ml-1">
            Sign In Here
          </Link>
        </div>
      </div>
    </main>
  );
}