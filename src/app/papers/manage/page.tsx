"use client";

import { useState } from "react";
import { useAuth } from "@/context/AuthContext";
import { ShieldAlert, Eye, Trash2, ShieldCheck, UserCheck } from "lucide-react";
import Link from "next/link";

// Pre-seeded multi-user diagnostic tracking logs
const INITIAL_REGISTRY = [
  { id: "p1", title: "Predicting Student Attrition Paradigms via High-Dimensional OULAD Feature Selection", field: "EDM", owner: "Standard Researcher" },
  { id: "p2", title: "Fairness Metrics and Bias Auditing Arrays in Demographic Student Performance Trackers", field: "XAI", owner: "Standard Researcher" },
  { id: "p3", title: "Adaptive Agricultural Systems for Food Security under Increasing Climate Extremes", field: "CLIMATE", owner: "External Scholar Node" },
  { id: "p4", title: "From Signals to Safeguards: Machine Learning Architectures for Cyclone Early Warning Matrices", field: "DISASTER_PREP", owner: "Regional Terminal Node" }
];

export default function ManagePapersPage() {
  const { isLoggedIn, user } = useAuth();
  const [registry, setRegistry] = useState(INITIAL_REGISTRY);

  const handlePurgeAction = (id: string) => {
    setRegistry(registry.filter(paper => paper.id !== id));
  };

  // 🛡️ Security Guard Filter Gate
  if (!isLoggedIn) {
    return (
      <div className="max-w-md mx-auto py-24 px-4 text-center">
        <div className="glass-card p-8 rounded-lg border border-red-900/30 bg-red-950/5">
          <ShieldAlert className="w-12 h-12 text-[#8A1A1A] mx-auto mb-4" />
          <h2 className="font-display text-lg font-bold text-white mb-2">ACCESS_DENIED // PRIVILEGE_LOCKED</h2>
          <p className="font-sans text-xs text-[#7C8FA9] mb-6">You must initialize an authenticated network terminal link to review active registers.</p>
          <Link href="/login" className="px-4 py-2 bg-[#8A1A1A] text-[#E9D4C3] font-mono text-xs uppercase rounded font-bold hover:bg-red-700">SYS_LOGIN</Link>
        </div>
      </div>
    );
  }

  const isAdmin = user?.role === "admin";
  
  // Rule-aware operational filter: Admins map all files, Users read their specific node allocations
  const visiblePapers = isAdmin 
    ? registry 
    : registry.filter(paper => paper.owner === "Standard Researcher");

  return (
    <div className="max-w-7xl mx-auto py-8 px-4 pb-24">
      
      {/* Dynamic Sub-header Tag showing System Security Status */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-8">
        <div>
          <span className="font-mono text-[10px] text-[#7C8FA9] tracking-widest block mb-1">// SECURITY_PRIVILEGE_DASHBOARD</span>
          <h1 className="font-display text-2xl font-bold text-white tracking-tight">Manage Repository Indices</h1>
        </div>

        <div className={`inline-flex items-center space-x-2 border px-3 py-1.5 rounded font-mono text-[10px] ${
          isAdmin ? "border-amber-600/30 bg-amber-950/20 text-amber-400" : "border-emerald-600/30 bg-emerald-950/20 text-emerald-400"
        }`}>
          {isAdmin ? <ShieldCheck className="w-3.5 h-3.5" /> : <UserCheck className="w-3.5 h-3.5" />}
          <span className="uppercase">LEVEL: {user?.role}_OVERSEER_MATRIX</span>
        </div>
      </div>

      {/* 📊 Data Telemetry Table Container */}
      <div className="w-full glass-card rounded-lg border border-[#E9D4C3]/10 overflow-hidden">
        <div className="overflow-x-auto">
          <table className="w-full border-collapse text-left font-mono text-xs text-[#7C8FA9]">
            
            <thead>
              <tr className="border-b border-[#E9D4C3]/10 bg-[#E9D4C3]/5 text-[#E9D4C3]">
                <th className="p-4 tracking-wider uppercase">Doc ID</th>
                <th className="p-4 tracking-wider uppercase">Field</th>
                <th className="p-4 tracking-wider uppercase">Document Title Matrix</th>
                <th className="p-4 tracking-wider uppercase">Node Owner</th>
                <th className="p-4 text-right tracking-wider uppercase">Actions</th>
              </tr>
            </thead>

            <tbody className="divide-y divide-[#E9D4C3]/5">
              {visiblePapers.length === 0 ? (
                <tr>
                  <td colSpan={5} className="p-8 text-center text-[11px] italic">// NO_ACTIVE_REGISTERS_ALLOCATED_TO_NODE //</td>
                </tr>
              ) : (
                visiblePapers.map((paper) => (
                  <tr key={paper.id} className="hover:bg-[#E9D4C3]/2 transition-colors">
                    <td className="p-4 text-white font-bold">{paper.id}</td>
                    <td className="p-4"><span className="bg-[#E9D4C3]/5 border border-[#E9D4C3]/10 px-1.5 py-0.5 rounded text-white text-[10px]">{paper.field}</span></td>
                    <td className="p-4 text-white font-sans text-xs max-w-sm sm:max-w-md truncate">{paper.title}</td>
                    <td className="p-4 text-[11px]">{paper.owner}</td>
                    <td className="p-4 text-right">
                      <div className="flex items-center justify-end space-x-3">
                        <Link href={`/papers/${paper.id}`} className="p-1.5 border border-[#E9D4C3]/10 rounded text-[#7C8FA9] hover:text-[#E9D4C3] hover:bg-[#E9D4C3]/5 transition-all" title="View Document Details">
                          <Eye className="w-3.5 h-3.5" />
                        </Link>
                        <button onClick={() => handlePurgeAction(paper.id)} className="p-1.5 border border-red-900/30 rounded text-red-400 hover:text-white hover:bg-red-950/40 transition-all cursor-pointer" title="Purge Record from Registry">
                          <Trash2 className="w-3.5 h-3.5" />
                        </button>
                      </div>
                    </td>
                  </tr>
                ))
              )}
            </tbody>

          </table>
        </div>
      </div>
    </div>
  );
}