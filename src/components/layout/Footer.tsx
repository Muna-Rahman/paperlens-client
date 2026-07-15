import Link from "next/link";
import { Mail } from "lucide-react";
import { FaGithub, FaTwitter, FaLinkedin } from "react-icons/fa"; // Using FontAwesome brand icons instead

export default function Footer() {
  return (
    <footer className="w-full bg-ink text-slateBlue font-mono text-xs border-t border-slateBlue/20 py-8 mt-auto">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col gap-6">
        <div className="flex flex-col md:flex-row items-center justify-between gap-4">
          <p>© {new Date().getFullYear()} PaperLens Catalog. Built via Core ML Principles.</p>

          <div className="flex space-x-6">
            <Link href="/about" className="hover:text-cream transition-colors">About</Link>
            <Link href="/methodology" className="hover:text-cream transition-colors">Methodology</Link>
            <Link href="/explore" className="hover:text-cream transition-colors">Explore</Link>
            <Link href="/contact" className="hover:text-cream transition-colors">Contact</Link>
          </div>
        </div>

        <div className="flex flex-col sm:flex-row items-center justify-between gap-4 pt-4 border-t border-slateBlue/10">
          <a
            href="mailto:support@paperlens.terminal"
            className="flex items-center gap-2 hover:text-cream transition-colors"
          >
            <Mail className="w-3.5 h-3.5" />
            <span>support@paperlens.terminal</span>
          </a>

          <div className="flex items-center space-x-4">
            <a
              href="https://github.com/paperlens"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="PaperLens on GitHub"
              className="hover:text-cream transition-colors"
            >
              <FaGithub className="w-3.5 h-3.5" />
            </a>
            <a
              href="https://twitter.com/paperlens"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="PaperLens on Twitter/X"
              className="hover:text-cream transition-colors"
            >
              <FaTwitter className="w-3.5 h-3.5" />
            </a>
            <a
              href="https://linkedin.com/company/paperlens"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="PaperLens on LinkedIn"
              className="hover:text-cream transition-colors"
            >
              <FaLinkedin className="w-3.5 h-3.5" />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}