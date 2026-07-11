import Link from "next/link";

export default function Footer() {
  return (
    <footer className="w-full bg-ink text-slateBlue font-mono text-xs border-t border-slateBlue/20 py-8 mt-auto">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row items-center justify-between gap-4">
        <div>
          <p>© {new Date().getFullYear()} PaperLens Catalog. Built via Core ML Principles.</p>
        </div>
        <div className="flex space-x-6">
          <Link href="/about" className="hover:text-cream transition-colors">About</Link>
          <Link href="/methodology" className="hover:text-cream transition-colors">Methodology</Link>
          <Link href="/papers" className="hover:text-cream transition-colors">Explore</Link>
        </div>
      </div>
    </footer>
  );
}