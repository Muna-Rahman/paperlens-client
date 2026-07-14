'use client';

import React, { useState, useEffect } from 'react';
import { useParams, useRouter } from 'next/navigation';
import { useAuth } from '@/context/AuthContext';
import api from '@/lib/api';
import RelatedPapers from '@/components/ui/RelatedPapers';

interface PaperDetails {
  _id: string;
  title: string;
  shortDescription: string;
  abstract: string;
  field: string;
  year: number;
  citationCount: number;
  keywords: string[];
}

interface Review {
  _id: string;
  userName: string;
  rating: number;
  comment: string;
}

export default function PaperDetailsPage() {
  const { id } = useParams();
  const router = useRouter();
  const { isAuthenticated } = useAuth();
  
  const [paper, setPaper] = useState<PaperDetails | null>(null);
  const [related, setRelated] = useState([]);
  const [loading, setLoading] = useState(true);
  
  // Reviews now come from the backend instead of being simulated locally.
  const [reviews, setReviews] = useState<Review[]>([]);
  const [reviewsLoading, setReviewsLoading] = useState(true);
  const [newRating, setNewRating] = useState(5);
  const [newComment, setNewComment] = useState('');
  const [submitting, setSubmitting] = useState(false);
  const [reviewError, setReviewError] = useState('');

  useEffect(() => {
    if (!id) return;
    
    const fetchFullMetrics = async () => {
      try {
        setLoading(true);
        // 1. Fetch current single paper detail
        const itemRes = await api.get(`/papers/${id}`);
        setPaper(itemRes.data.paper);

        // 2. Fetch mathematically calculated matches from Cosine Engine
        const relatedRes = await api.get(`/papers/${id}/related`);
        setRelated(relatedRes.data.papers);
      } catch (err) {
        console.error("Vector evaluation retrieval broken:", err);
      } finally {
        setLoading(false);
      }
    };

    const fetchReviews = async () => {
      try {
        setReviewsLoading(true);
        const res = await api.get(`/papers/${id}/reviews`);
        setReviews(res.data.reviews || []);
      } catch (err) {
        console.error("Failed to load peer reviews:", err);
      } finally {
        setReviewsLoading(false);
      }
    };

    fetchFullMetrics();
    fetchReviews();
  }, [id]);

  const handleReviewSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!newComment.trim()) return;

    setSubmitting(true);
    setReviewError('');

    try {
      const res = await api.post(`/papers/${id}/reviews`, {
        rating: newRating,
        comment: newComment,
      });

      // Prepend the newly created review (backend returns the saved doc).
      setReviews((prev) => [res.data.review, ...prev]);
      setNewComment('');
      setNewRating(5);
    } catch (err: any) {
      setReviewError(err.message || 'Failed to publish review.');
    } finally {
      setSubmitting(false);
    }
  };

  if (loading) {
    return (
      <div className="min-h-screen bg-[#0A1626] flex items-center justify-center font-mono text-[#A8B3C4]">
        <div className="animate-pulse flex flex-col items-center gap-4">
          <div className="w-12 h-12 rounded-full border-2 border-t-[#8A1A1A] border-[rgba(233,212,195,0.1)] animate-spin" />
          <span>PARSING MATRIX ALIGNMENTS...</span>
        </div>
      </div>
    );
  }

  if (!paper) {
    return (
      <div className="min-h-screen bg-[#0A1626] flex items-center justify-center text-[#E9D4C3]">
        <p>Target paper vector reference could not be found.</p>
      </div>
    );
  }

  return (
    <main className="min-h-screen w-full bg-[#0A1626] text-[#F5F5F5] font-['General_Sans'] px-6 py-12 relative">
      {/* Structural ambient light nodes */}
      <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-[#7C8FA9]/3 rounded-full blur-[160px] pointer-events-none" />

      <div className="max-w-7xl mx-auto">
        {/* Back Button */}
        <button 
          onClick={() => router.push('/explore')}
          className="mb-8 font-mono text-xs text-[#A8B3C4] hover:text-[#E9D4C3] flex items-center gap-2 transition-colors group"
        >
          <span className="group-hover:-translate-x-1 transition-transform">←</span> BACK TO MATRIX CATALOG
        </button>

        {/* Master Details Frame split layout */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-start">
          {/* Main Info Abstract Column */}
          <div className="lg:col-span-2 space-y-6">
            <h1 className="text-3xl md:text-4xl font-bold font-['Clash_Display'] text-[#E9D4C3] tracking-wide leading-tight">
              {paper.title}
            </h1>
            <p className="text-md text-[#A8B3C4] font-medium leading-relaxed italic">
              {paper.shortDescription}
            </p>

            <div className="backdrop-blur-[16px] bg-[rgba(233,212,195,0.06)] border border-[rgba(233,212,195,0.12)] rounded-2xl p-6 md:p-8 space-y-4">
              <h3 className="font-mono text-xs text-[#8A1A1A] uppercase tracking-widest">// COMPLETE_DOCUMENT_ABSTRACT</h3>
              <p className="text-[#F5F5F5] leading-grave text-sm md:text-base tracking-normal whitespace-pre-line text-justify">
                {paper.abstract}
              </p>
            </div>
          </div>

          {/* Technical Metadata Sticky Sidebar */}
          <div className="backdrop-blur-[16px] bg-[rgba(233,212,195,0.06)] border border-[rgba(233,212,195,0.12)] rounded-2xl p-6 space-y-6 lg:sticky lg:top-24">
            <h3 className="font-['Clash_Display'] text-lg font-bold text-[#E9D4C3] tracking-wide">Technical Footprint</h3>
            
            <div className="space-y-4 font-mono text-xs">
              <div className="flex justify-between py-2 border-b border-[rgba(233,212,195,0.08)]">
                <span className="text-[#A8B3C4]">RESEARCH_FIELD:</span>
                <span className="text-[#F5F5F5] font-sans font-semibold text-right">{paper.field}</span>
              </div>
              <div className="flex justify-between py-2 border-b border-[rgba(233,212,195,0.08)]">
                <span className="text-[#A8B3C4]">PUBLICATION_YEAR:</span>
                <span className="text-[#F5F5F5] text-right font-bold">{paper.year}</span>
              </div>
              <div className="flex justify-between py-2 border-b border-[rgba(233,212,195,0.08)]">
                <span className="text-[#A8B3C4]">CITATION_COUNT:</span>
                <span className="text-[#8A1A1A] text-right font-bold">{paper.citationCount.toLocaleString()}</span>
              </div>
            </div>

            {/* Keyword Tags Segment */}
            <div>
              <h4 className="font-mono text-[10px] text-[#A8B3C4] uppercase tracking-wider mb-2">Token Mappings:</h4>
              <div className="flex flex-wrap gap-2">
                {paper.keywords.map((word, index) => (
                  <span key={index} className="px-2 py-1 text-[11px] font-mono bg-[#0A1626] border border-[rgba(233,212,195,0.15)] text-[#7C8FA9] rounded">
                    #{word}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Dynamic Cosine Similarity Recommendations Section Insert */}
        <RelatedPapers papers={related} />

        {/* Review List & Submission block section */}
        <section className="mt-16 max-w-4xl backdrop-blur-[16px] bg-[rgba(233,212,195,0.04)] border border-[rgba(233,212,195,0.08)] rounded-2xl p-6 md:p-8">
          <h2 className="text-xl font-bold font-['Clash_Display'] text-[#E9D4C3] mb-6 tracking-wide">Peer Consensus Reviews</h2>
          
          {reviewsLoading ? (
            <div className="space-y-3 mb-8">
              {[1, 2].map((i) => (
                <div key={i} className="h-16 rounded-xl border border-[rgba(233,212,195,0.06)] bg-[rgba(233,212,195,0.03)] animate-pulse" />
              ))}
            </div>
          ) : reviews.length === 0 ? (
            <p className="text-xs font-mono text-[#7C8FA9] mb-8">// NO_REVIEWS_SUBMITTED_YET — be the first to weigh in.</p>
          ) : (
            <div className="space-y-4 mb-8">
              {reviews.map((rev) => (
                <div key={rev._id} className="bg-[#0A1626]/40 border border-[rgba(233,212,195,0.06)] rounded-xl p-4">
                  <div className="flex justify-between items-center mb-2">
                    <span className="text-xs font-bold text-[#E9D4C3]">{rev.userName}</span>
                    <span className="text-xs font-mono text-[#8A1A1A]">{'★'.repeat(rev.rating)}</span>
                  </div>
                  <p className="text-xs text-[#A8B3C4] leading-relaxed">{rev.comment}</p>
                </div>
              ))}
            </div>
          )}

          {reviewError && (
            <div className="mb-4 p-3 rounded-lg bg-[#8A1A1A]/20 border border-[#8A1A1A] text-[#F5F5F5] text-xs font-mono">
              {reviewError}
            </div>
          )}

          {/* Restricted Review Actions Input Form */}
          {isAuthenticated ? (
            <form onSubmit={handleReviewSubmit} className="space-y-4 pt-4 border-t border-[rgba(233,212,195,0.08)]">
              <h3 className="text-xs font-mono text-[#E9D4C3]">Submit Peer Appraisal:</h3>
              <div className="flex items-center gap-2">
                <label className="text-xs font-mono text-[#A8B3C4]">Rating:</label>
                <select 
                  value={newRating} 
                  onChange={(e) => setNewRating(Number(e.target.value))}
                  className="bg-[#0A1626] border border-[rgba(233,212,195,0.15)] text-xs text-[#F5F5F5] rounded p-1 outline-none"
                >
                  {[5,4,3,2,1].map(n => <option key={n} value={n}>{n} Stars</option>)}
                </select>
              </div>
              <textarea
                placeholder="Write comment assessment parameters..."
                value={newComment}
                onChange={(e) => setNewComment(e.target.value)}
                rows={3}
                className="w-full bg-[#0A1626]/80 border border-[rgba(233,212,195,0.15)] focus:border-[#8A1A1A] rounded-xl p-3 text-xs text-[#F5F5F5] outline-none transition-colors"
              />
              <button 
                type="submit"
                disabled={submitting}
                className="px-4 py-2 bg-[#8A1A1A] hover:bg-[#4E0000] text-[#F5F5F5] font-mono text-xs uppercase tracking-wider rounded-lg transition-colors disabled:opacity-50"
              >
                {submitting ? 'Publishing...' : 'Publish Review'}
              </button>
            </form>
          ) : (
            <div className="p-4 bg-[#8A1A1A]/5 border border-[#8A1A1A]/20 rounded-xl text-center text-xs text-[#A8B3C4] font-mono">
              Guests can read reviews only. Please sign in to submit peer evaluations.
            </div>
          )}
        </section>
      </div>
    </main>
  );
}