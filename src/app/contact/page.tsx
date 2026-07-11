"use client";

import { useState } from "react";
import { Mail, Send, Terminal, MessageSquare } from "lucide-react";

export default function ContactPage() {
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [systemAlert, setSystemAlert] = useState<string | null>(null);

  const handleMessageSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSystemAlert(null);

    if (!email || !message) {
      setSystemAlert("CRITICAL_ERR: Form data vectors cannot be submitted blank.");
      return;
    }

    setSystemAlert("SYS_STATUS: Communications payload successfully synchronized onto terminal outbox queue.");
    setEmail("");
    setMessage("");
  };

  return (
    <div className="max-w-md mx-auto py-12 px-4 min-h-[70vh] flex flex-col justify-center">
      
      {/* 🧊 Glass Communications Frame */}
      <div className="w-full glass-card p-6 sm:p-8 rounded-lg border border-[#E9D4C3]/10 relative overflow-hidden shadow-2xl">
        <div className="absolute top-0 left-0 w-full h-1 bg-[#8A1A1A]" />
        
        {/* Header Header */}
        <div className="flex flex-col items-center text-center mb-6">
          <div className="w-10 h-10 rounded-full border border-[#8A1A1A]/30 bg-[#8A1A1A]/5 flex items-center justify-center mb-2">
            <MessageSquare className="w-4 h-4 text-[#8A1A1A]" />
          </div>
          <span className="font-mono text-[9px] text-[#7C8FA9] tracking-widest block uppercase">// COMMUNICATIONS_RELAY_INTERFACE</span>
          <h1 className="font-display text-xl font-bold text-white tracking-tight mt-0.5">SYS_CONTACT</h1>
        </div>

        {systemAlert && (
          <div className="mb-4 p-2.5 bg-[#E9D4C3]/5 border border-[#8A1A1A]/30 rounded flex items-start space-x-2 font-mono text-[10px] text-[#E9D4C3]">
            <Terminal className="w-3.5 h-3.5 mt-0.5 text-[#8A1A1A] shrink-0" />
            <span>{systemAlert}</span>
          </div>
        )}

        {/* Primary Contact input form */}
        <form onSubmit={handleMessageSubmit} className="space-y-4">
          
          <div className="space-y-1">
            <label className="font-mono text-[10px] text-[#7C8FA9] uppercase tracking-wider block">YOUR_EMAIL_ORIGIN:</label>
            <input 
              type="email" value={email} onChange={(e) => setEmail(e.target.value)} required
              placeholder="researcher@institution.edu"
              className="w-full bg-[#0A1626] border border-[#E9D4C3]/15 rounded px-3 py-1.5 text-xs font-mono text-white focus:outline-none focus:border-[#8A1A1A]"
            />
          </div>

          <div className="space-y-1">
            <label className="font-mono text-[10px] text-[#7C8FA9] uppercase tracking-wider block">MESSAGE_TEXT_PAYLOAD:</label>
            <textarea 
              rows={4} value={message} onChange={(e) => setMessage(e.target.value)} required
              placeholder="Enter message text parameters..."
              className="w-full bg-[#0A1626] border border-[#E9D4C3]/15 rounded px-3 py-1.5 text-xs font-mono text-white focus:outline-none focus:border-[#8A1A1A]"
            />
          </div>

          <button type="submit" className="w-full py-2.5 bg-[#8A1A1A] hover:bg-red-700 text-[#E9D4C3] font-mono text-xs uppercase font-bold tracking-wider rounded transition-colors flex items-center justify-center space-x-2 cursor-pointer">
            <Send className="w-3.5 h-3.5" />
            <span>TRANSMIT_PAYLOAD</span>
          </button>
        </form>

        {/* Direct mail fallback separator */}
        <div className="relative my-5 flex items-center justify-center">
          <div className="absolute w-full h-[1px] bg-[#E9D4C3]/5" />
          <span className="relative z-10 px-3 bg-[#0A1626] font-mono text-[9px] text-[#7C8FA9]">OR // FALLBACK</span>
        </div>

        {/* Direct Mailto Anchor Link shortcut */}
        <a 
          href="mailto:support@paperlens.terminal?subject=System%20Telemetry%20Inquiry"
          className="w-full py-2 border border-[#E9D4C3]/15 text-center text-[#7C8FA9] hover:text-[#E9D4C3] hover:bg-[#E9D4C3]/5 font-mono text-[11px] rounded transition-all flex items-center justify-center space-x-2"
        >
          <Mail className="w-3.5 h-3.5" />
          <span>LAUNCH_DIRECT_MAILTO.lnk</span>
        </a>

      </div>
    </div>
  );
}