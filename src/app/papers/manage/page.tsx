'use client';

import React, { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';
import { useAuth } from '@/context/AuthContext';
import api from '@/lib/api';
import { Trash2, Eye } from 'lucide-react';

interface Paper {
  _id: string;
  title: string;
  field: string;
  year: number;
}

export default function ManagePapersPage() {
  const [myPapers, setMyPapers] = useState<Paper[]>([]);
  const [loading, setLoading] = useState(true);
  const { isAuthenticated } = useAuth();
  const router = useRouter();

  useEffect(() => {
    if (!isAuthenticated) {
      router.push('/login');
      return;
    }

    const fetchMyInventory = async () => {
      try {
        // Query route fetching documents explicitly added by this profile session
        const res = await api.get('/papers/mine');
        setMyPapers(res.data.papers || []);
      } catch (err) {
        console.error("Failed to query user document indexes:", err);
      } finally {
        setLoading(false);
      }
    };

    fetchMyInventory();
  }, [isAuthenticated, router]);

  const handleDeleteTrigger = async (paperId: string) => {
    if (!confirm("Confirm target registration drop command? This action is irreversible.")) return;

    try {
      await api.delete(`/papers/${paperId}`);
      // Filter the dropped node immediately from state array
      setMyPapers(prev => prev.filter(p => p._id !== paperId));
    } catch (err) {
      alert("Drop failure: Could not execute deletion sequence.");
    }
  };

  if (loading) {
    return (
      <div className="min-h-screen bg-[#0A1626] flex items-center justify-center font-mono text-xs text-[#7C8FA9]">
        LOADING PERSONAL CATALOG ARCHIVE...
      </div>
    );
  }

  return (
    <main className="min-h-screen bg-[#0A1626] text-[#F5F5F5] font-['General_Sans'] px-6 py-12">
      <div className="max-w-6xl mx-auto">
        
        <div className="mb-8">
          <h1 className="text-3xl font-bold font-['Clash_Display'] text-[#E9D4C3] tracking-wide">Document Registry Management</h1>
          <p className="text-xs font-mono text-[#7C8FA9] mt-1">Review or manage documents you have contributed to the indexing matrix.</p>
        </div>

        {myPapers.length === 0 ? (
          <div className="backdrop-blur-[16px] bg-[rgba(233,212,195,0.04)] border border-dashed border-[rgba(233,212,195,0.15)] rounded-2xl p-12 text-center">
            <p className="font-mono text-xs text-[#7C8FA9] mb-4">// NO_CONTRIBUTED_REGISTERS_LOCATED_IN_ACCOUNT</p>
            <button 
              onClick={() => router.push('/papers/add')}
              className="px-4 py-2 bg-[#8A1A1A] hover:bg-[#4E0000] text-white font-mono text-xs uppercase rounded transition-colors"
            >
              + Index First Document
            </button>
          </div>
        ) : (
          <div className="backdrop-blur-[16px] bg-[rgba(233,212,195,0.06)] border border-[rgba(233,212,195,0.12)] rounded-2xl overflow-hidden shadow-2xl">
            <table className="w-full text-left border-collapse font-sans text-sm">
              <thead>
                <tr className="bg-[#0A1626]/80 border-b border-[rgba(233,212,195,0.08)] text-[#E9D4C3] font-mono text-xs uppercase tracking-wider">
                  <th className="p-4 pl-6">Document Title</th>
                  <th className="p-4">Domain Field</th>
                  <th className="p-4">Year</th>
                  <th className="p-4 pr-6 text-right">Actions</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-[rgba(233,212,195,0.06)]">
                {myPapers.map((paper) => (
                  <tr key={paper._id} className="hover:bg-[rgba(233,212,195,0.02)] transition-colors">
                    <td className="p-4 pl-6 font-medium text-[#F5F5F5] max-w-md truncate">{paper.title}</td>
                    <td className="p-4 font-mono text-xs text-[#A8B3C4]">{paper.field}</td>
                    <td className="p-4 font-mono text-xs text-[#A8B3C4]">{paper.year}</td>
                    <td className="p-4 pr-6 text-right space-x-2">
                      <button
                        onClick={() => router.push(`/papers/${paper._id}`)}
                        className="p-1.5 border border-[rgba(233,212,195,0.15)] rounded text-[#7C8FA9] hover:text-[#E9D4C3] hover:bg-[#0A1626] transition-all inline-flex items-center"
                        title="View Document Details"
                      >
                        <Eye className="w-4 h-4" />
                      </button>
                      <button
                        onClick={() => handleDeleteTrigger(paper._id)}
                        className="p-1.5 border border-[#8A1A1A]/30 rounded text-[#7C8FA9] hover:text-white hover:bg-[#8A1A1A] transition-all inline-flex items-center"
                        title="Delete Document"
                      >
                        <Trash2 className="w-4 h-4" />
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        )}

      </div>
    </main>
  );
}