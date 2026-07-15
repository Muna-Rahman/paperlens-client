"use client";

import { Layers, Sigma, GitCompareArrows, ListOrdered } from "lucide-react";

export default function MethodologyPage() {
  return (
    <div className="max-w-4xl mx-auto py-8 px-4 pb-24 space-y-12">

      {/* Page Title Header */}
      <div>
        <span className="font-mono text-[10px] text-[#7C8FA9] tracking-widest block mb-1">
          // HOW THE MATCHING ENGINE WORKS
        </span>
        <h1 className="font-display text-3xl font-bold text-white tracking-tight">
          Methodology
        </h1>
        <p className="font-sans text-xs text-[#A8B3C4] leading-relaxed mt-3 max-w-2xl">
          Every similarity score you see on PaperLens comes from real text analysis, not a
          random or hand-picked number. This page walks through exactly how the engine turns
          a paper&apos;s title, abstract, and keywords into the percentages shown on the
          Similarity Stamp.
        </p>
      </div>

      {/* Step 1 & 2: TF-IDF and Cosine Similarity, side by side like the About page */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <div className="glass-card p-6 rounded-lg border border-[#E9D4C3]/10 space-y-3">
          <div className="flex items-center space-x-2 text-[#E9D4C3] font-display font-bold text-sm uppercase">
            <Layers className="w-4 h-4 text-[#8A1A1A]" />
            <span>Step 1 — TF-IDF</span>
          </div>
          <p className="font-sans text-xs text-[#7C8FA9] leading-relaxed">
            TF-IDF stands for <span className="text-[#E9D4C3]">Term Frequency – Inverse Document
            Frequency</span>. It converts each paper&apos;s combined title, abstract, and
            keywords into a list of weighted words. A word gets a{" "}
            <span className="text-[#E9D4C3]">higher</span> weight the more often it appears in
            that specific paper, but a <span className="text-[#E9D4C3]">lower</span> weight the
            more common it is across the whole library. Words like &ldquo;the&rdquo; or
            &ldquo;using&rdquo; are filtered out entirely before scoring, so they never affect
            the result. The end result is a vector — a list of numbers — that represents what
            each paper is actually about, rather than just the words it happens to contain.
          </p>
        </div>

        <div className="glass-card p-6 rounded-lg border border-[#E9D4C3]/10 space-y-3">
          <div className="flex items-center space-x-2 text-[#E9D4C3] font-display font-bold text-sm uppercase">
            <Sigma className="w-4 h-4 text-[#8A1A1A]" />
            <span>Step 2 — Cosine Similarity</span>
          </div>
          <p className="font-sans text-xs text-[#7C8FA9] leading-relaxed">
            Once every paper has been turned into a TF-IDF vector, comparing two papers becomes
            a geometry problem. Cosine similarity measures the{" "}
            <span className="text-[#E9D4C3]">angle</span> between two vectors rather than their
            raw length, which means a short abstract and a long one can still score highly if
            they cover the same concepts. A score of{" "}
            <span className="text-[#E9D4C3]">1.0</span> means the vectors point in exactly the
            same direction (identical topic emphasis); a score of{" "}
            <span className="text-[#E9D4C3]">0</span> means they share no meaningful terms at
            all.
          </p>
        </div>
      </div>

      {/* Step 3: Paper matching process */}
      <div className="glass-card p-6 rounded-lg border border-[#8A1A1A]/20 bg-gradient-to-r from-[#8A1A1A]/5 to-transparent">
        <h3 className="font-mono text-xs text-[#E9D4C3] uppercase tracking-wider mb-4 flex items-center space-x-2">
          <GitCompareArrows className="w-4 h-4 text-[#8A1A1A]" />
          <span>MATCHING_PIPELINE.txt</span>
        </h3>
        <ol className="font-mono text-[11px] text-[#7C8FA9] space-y-2.5">
          <li className="flex items-start">
            <span className="text-[#8A1A1A] mr-2">01.</span>
            Pull every paper&apos;s title, short description, abstract, and keywords into a
            single block of text.
          </li>
          <li className="flex items-start">
            <span className="text-[#8A1A1A] mr-2">02.</span>
            Tokenize that text — lowercase everything, strip punctuation, and drop stop words
            and anything shorter than three characters.
          </li>
          <li className="flex items-start">
            <span className="text-[#8A1A1A] mr-2">03.</span>
            Compute how many papers in the library each remaining word appears in, then use
            that to build an inverse-document-frequency weight per word.
          </li>
          <li className="flex items-start">
            <span className="text-[#8A1A1A] mr-2">04.</span>
            Build a TF-IDF vector for the selected paper and for every other paper in the
            library, excluding the paper being viewed from its own comparison pool.
          </li>
          <li className="flex items-start">
            <span className="text-[#8A1A1A] mr-2">05.</span>
            Calculate the cosine similarity between the selected paper&apos;s vector and every
            other paper&apos;s vector.
          </li>
          <li className="flex items-start">
            <span className="text-[#8A1A1A] mr-2">06.</span>
            Nudge the raw score slightly upward when two papers share the same research field
            or overlapping keywords — this rewards matches a reader would intuitively agree
            with, on top of the pure text signal.
          </li>
          <li className="flex items-start">
            <span className="text-[#8A1A1A] mr-2">07.</span>
            Sort every candidate by final score, descending, and keep the top four. Those four
            are what render on the Related Papers section with their Similarity Stamp.
          </li>
        </ol>
      </div>

      {/* Step 4: Worked example */}
      <div className="space-y-4">
        <div className="flex items-center space-x-2 text-[#E9D4C3] font-display font-bold text-sm uppercase">
          <ListOrdered className="w-4 h-4 text-[#8A1A1A]" />
          <span>Worked Example</span>
        </div>
        <p className="font-sans text-xs text-[#7C8FA9] leading-relaxed max-w-2xl">
          Here&apos;s the actual arithmetic on a tiny, three-paper library, so the math isn&apos;t
          just an abstract claim.
        </p>

        <div className="glass-card p-6 rounded-lg border border-[#E9D4C3]/10 overflow-x-auto">
          <table className="w-full text-left font-mono text-[10px] text-[#A8B3C4] border-collapse">
            <thead>
              <tr className="text-[#E9D4C3] uppercase tracking-wider">
                <th className="pb-2 pr-4">Paper</th>
                <th className="pb-2">Text (after stop-word removal)</th>
              </tr>
            </thead>
            <tbody className="align-top">
              <tr className="border-t border-[rgba(233,212,195,0.08)]">
                <td className="py-2 pr-4 text-[#8A1A1A]">A (target)</td>
                <td className="py-2">neural network image classification</td>
              </tr>
              <tr className="border-t border-[rgba(233,212,195,0.08)]">
                <td className="py-2 pr-4 text-[#8A1A1A]">B</td>
                <td className="py-2">neural network text classification</td>
              </tr>
              <tr className="border-t border-[rgba(233,212,195,0.08)]">
                <td className="py-2 pr-4 text-[#8A1A1A]">C</td>
                <td className="py-2">protein folding simulation</td>
              </tr>
            </tbody>
          </table>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="glass-card p-6 rounded-lg border border-[#E9D4C3]/10 space-y-3">
            <h4 className="font-mono text-[10px] text-[#E9D4C3] uppercase tracking-wider">
              // Term weights (IDF)
            </h4>
            <p className="font-sans text-xs text-[#7C8FA9] leading-relaxed">
              With 3 papers total, a term that shows up in only one paper (like{" "}
              <span className="text-[#E9D4C3]">image</span>) gets a heavier weight than a term
              shared across two papers (like <span className="text-[#E9D4C3]">neural</span>):
            </p>
            <ul className="font-mono text-[10px] text-[#7C8FA9] space-y-1">
              <li>neural, network, classification → weight ≈ 0.92 each</li>
              <li>image → weight ≈ 1.39</li>
              <li>text → weight ≈ 1.39</li>
            </ul>
          </div>

          <div className="glass-card p-6 rounded-lg border border-[#E9D4C3]/10 space-y-3">
            <h4 className="font-mono text-[10px] text-[#E9D4C3] uppercase tracking-wider">
              // Cosine similarity
            </h4>
            <p className="font-sans text-xs text-[#7C8FA9] leading-relaxed">
              Paper A and Paper B share three of their four weighted terms (
              <span className="text-[#E9D4C3]">neural</span>,{" "}
              <span className="text-[#E9D4C3]">network</span>,{" "}
              <span className="text-[#E9D4C3]">classification</span>), and only differ on one
              (<span className="text-[#E9D4C3]">image</span> vs.{" "}
              <span className="text-[#E9D4C3]">text</span>). Comparing their vectors gives:
            </p>
            <div className="font-mono text-[11px] text-[#E9D4C3] bg-[#0A1626]/60 rounded px-3 py-2">
              similarity(A, B) ≈ 0.57 → 57%
            </div>
            <p className="font-sans text-xs text-[#7C8FA9] leading-relaxed">
              Paper C shares no vocabulary with Paper A at all, so:
            </p>
            <div className="font-mono text-[11px] text-[#E9D4C3] bg-[#0A1626]/60 rounded px-3 py-2">
              similarity(A, C) ≈ 0.00 → 0%
            </div>
          </div>
        </div>

        <p className="font-sans text-xs text-[#7C8FA9] leading-relaxed max-w-2xl">
          On the live platform, this raw cosine score is what drives the ranking — it decides
          which four papers are chosen and in what order. The percentage shown on the badge
          gets a small boost for shared field or keywords and is kept within a readable band, so
          two very different papers never render as a suspicious &ldquo;0% match&rdquo; and two
          near-duplicates don&apos;t all cluster at exactly 100%.
        </p>
      </div>
    </div>
  );
}