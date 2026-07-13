'use client';

import React, { useEffect } from 'react';
import { useSession } from '@/lib/auth-client';
import { useRouter } from 'next/navigation';

export default function ProtectedRoute({ children }: { children: React.ReactNode }) {
  const { data: session, isPending } = useSession();
  const router = useRouter();

  useEffect(() => {
    if (!isPending && !session) {
      router.push('/login');
    }
  }, [session, isPending, router]);

  if (isPending) {
    return (
      <div className="min-h-screen w-full flex items-center justify-center bg-[#0A1626]">
        {/* Shimmering glass layout loader */}
        <div className="w-12 h-12 border-4 border-[#8A1A1A] border-t-transparent rounded-full animate-spin" />
      </div>
    );
  }

  return session ? <>{children}</> : null;
}