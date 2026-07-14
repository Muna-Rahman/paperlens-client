'use client';

import React, { useState } from 'react';
import { useRouter } from 'next/navigation';
import ProtectedRoute from '@/components/layout/ProtectedRoute';
import api from '@/lib/api';

export default function AddPaperPage() {
  const router = useRouter();
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');
  
  const [formData, setFormData] = useState({
    title: '',
    shortDescription: '',
    abstract: '',
    field: 'Artificial Intelligence',
    year: new Date().getFullYear(),
    citationCount: 0,
    keywords: '',
    image: '',
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;

    if (name === 'year' || name === 'citationCount') {
      // Allow the field to be temporarily empty while the user is typing,
      // instead of snapping back to 0 (which caused the "leading zero" issue).
      setFormData((prev) => ({
        ...prev,
        [name]: value === '' ? '' : Number(value),
      }));
      return;
    }

    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  // Select existing text on focus so typing a new number replaces it
  // instead of appending after it (e.g. "0" + "5" -> "05").
  const handleNumberFocus = (e: React.FocusEvent<HTMLInputElement>) => {
    e.target.select();
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setError('');

    try {
      // Format keywords string comma separation into clean list array if needed by backend
      const formattedData = {
        ...formData,
        year: Number(formData.year) || new Date().getFullYear(),
        citationCount: Number(formData.citationCount) || 0,
        keywords: formData.keywords.split(',').map(k => k.trim()).filter(Boolean),
      };

      await api.post('/papers', formattedData);
      router.push('/explore'); // Redirect to explore page where the new paper appears
    } catch (err: any) {
      setError(err.message || 'Failed to index new research paper.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <ProtectedRoute>
      <main className="min-h-screen w-full bg-[#0A1626] text-[#F5F5F5] font-['General_Sans'] px-6 py-12 relative overflow-hidden">
        {/* Secondary Decorative Glow Placement */}
        <div className="absolute top-[-10%] right-[5%] w-[600px] h-[600px] bg-[#7C8FA9]/5 rounded-full blur-[160px] pointer-events-none" />

        <div className="max-w-3xl mx-auto backdrop-blur-[16px] bg-[rgba(233,212,195,0.06)] border border-[rgba(233,212,195,0.12)] rounded-2xl p-8 shadow-2xl relative z-10">
          <h1 className="text-3xl font-bold font-['Clash_Display'] text-[#E9D4C3] tracking-wide mb-2">
            Index Research Paper
          </h1>
          <p className="text-[#A8B3C4] text-sm mb-8">
            Submit new entry metadata parameters into the cross-similarity computing engine node.
          </p>

          {error && (
            <div className="mb-6 p-4 rounded-lg bg-[#8A1A1A]/20 border border-[#8A1A1A] text-[#F5F5F5] text-xs font-mono">
              {error}
            </div>
          )}

          <form onSubmit={handleSubmit} className="space-y-6">
            <div>
              <label className="block text-xs uppercase tracking-wider font-mono text-[#A8B3C4] mb-2">Paper Title</label>
              <input
                type="text"
                name="title"
                required
                value={formData.title}
                onChange={handleChange}
                className="w-full bg-[#0A1626]/50 border border-[rgba(233,212,195,0.15)] rounded-lg px-4 py-3 focus:outline-none focus:border-[#8A1A1A] transition-colors"
                placeholder="e.g., Attention Is All You Need"
              />
            </div>

            <div>
              <label className="block text-xs uppercase tracking-wider font-mono text-[#A8B3C4] mb-2">Short Description</label>
              <input
                type="text"
                name="shortDescription"
                required
                value={formData.shortDescription}
                onChange={handleChange}
                className="w-full bg-[#0A1626]/50 border border-[rgba(233,212,195,0.15)] rounded-lg px-4 py-3 focus:outline-none focus:border-[#8A1A1A] transition-colors"
                placeholder="Brief single-sentence outline summary..."
              />
            </div>

            <div>
              <label className="block text-xs uppercase tracking-wider font-mono text-[#A8B3C4] mb-2">Full Abstract</label>
              <textarea
                name="abstract"
                required
                rows={5}
                value={formData.abstract}
                onChange={handleChange}
                className="w-full bg-[#0A1626]/50 border border-[rgba(233,212,195,0.15)] rounded-lg px-4 py-3 focus:outline-none focus:border-[#8A1A1A] transition-colors resize-y text-sm leading-relaxed"
                placeholder="Paste the complete publication summary abstract body here..."
              />
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div>
                <label className="block text-xs uppercase tracking-wider font-mono text-[#A8B3C4] mb-2">Research Field</label>
                <select
                  name="field"
                  value={formData.field}
                  onChange={handleChange}
                  className="w-full bg-[#0A1626]/60 border border-[rgba(233,212,195,0.15)] rounded-lg px-4 py-3 focus:outline-none focus:border-[#8A1A1A] transition-colors cursor-pointer text-sm text-[#F5F5F5]"
                >
                  <option value="Artificial Intelligence">Artificial Intelligence</option>
                  <option value="Natural Language Processing">Natural Language Processing</option>
                  <option value="Computer Vision">Computer Vision</option>
                  <option value="Data Science">Data Science</option>
                  <option value="Bioinformatics">Bioinformatics</option>
                  <option value="Cybersecurity">Cybersecurity</option>
                  <option value="Quantum Computing">Quantum Computing</option>
                  <option value="Human-Computer Interaction">Human-Computer Interaction</option>
                </select>
              </div>

              <div>
                <label className="block text-xs uppercase tracking-wider font-mono text-[#A8B3C4] mb-2">Publication Year</label>
                <input
                  type="number"
                  name="year"
                  required
                  value={formData.year}
                  onChange={handleChange}
                  onFocus={handleNumberFocus}
                  className="w-full bg-[#0A1626]/50 border border-[rgba(233,212,195,0.15)] rounded-lg px-4 py-3 focus:outline-none focus:border-[#8A1A1A] transition-colors font-mono"
                />
              </div>

              <div>
                <label className="block text-xs uppercase tracking-wider font-mono text-[#A8B3C4] mb-2">Citation Count</label>
                <input
                  type="number"
                  name="citationCount"
                  required
                  min="0"
                  value={formData.citationCount}
                  onChange={handleChange}
                  onFocus={handleNumberFocus}
                  className="w-full bg-[#0A1626]/50 border border-[rgba(233,212,195,0.15)] rounded-lg px-4 py-3 focus:outline-none focus:border-[#8A1A1A] transition-colors font-mono"
                />
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label className="block text-xs uppercase tracking-wider font-mono text-[#A8B3C4] mb-2">Keywords (Comma Separated)</label>
                <input
                  type="text"
                  name="keywords"
                  required
                  value={formData.keywords}
                  onChange={handleChange}
                  className="w-full bg-[#0A1626]/50 border border-[rgba(233,212,195,0.15)] rounded-lg px-4 py-3 focus:outline-none focus:border-[#8A1A1A] transition-colors text-sm"
                  placeholder="transformer, self-attention, deep-learning"
                />
              </div>

              <div>
                <label className="block text-xs uppercase tracking-wider font-mono text-[#A8B3C4] mb-2">Optional Cover Image URL</label>
                <input
                  type="url"
                  name="image"
                  value={formData.image}
                  onChange={handleChange}
                  className="w-full bg-[#0A1626]/50 border border-[rgba(233,212,195,0.15)] rounded-lg px-4 py-3 focus:outline-none focus:border-[#8A1A1A] transition-colors text-sm"
                  placeholder="https://example.com/cover.jpg"
                />
              </div>
            </div>

            <div className="pt-4 flex justify-end gap-4">
              <button
                type="button"
                onClick={() => router.back()}
                className="px-6 py-3 border border-[rgba(233,212,195,0.2)] text-[#A8B3C4] hover:text-[#F5F5F5] rounded-lg transition-colors text-sm"
              >
                Cancel
              </button>
              
              <button
                type="submit"
                disabled={loading}
                className="px-6 py-3 bg-[#8A1A1A] hover:bg-[#4E0000] text-[#F5F5F5] rounded-lg font-semibold shadow-lg shadow-[#8A1A1A]/20 transition-all duration-300 disabled:opacity-50 text-sm"
              >
                {loading ? 'Processing Entry...' : 'Submit Paper'}
              </button>
            </div>
          </form>
        </div>
      </main>
    </ProtectedRoute>
  );
}