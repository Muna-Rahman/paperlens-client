import { FaGithub, FaTwitter, FaLinkedin } from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="w-full bg-ink text-slateBlue font-mono text-xs border-t border-slateBlue/20 py-8 mt-auto">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col gap-6">
        <div className="flex flex-col md:flex-row items-center justify-between gap-4">
          <p>© {new Date().getFullYear()} PaperLens Catalog. Built via Core ML Principles.</p>
        </div>

        <div className="flex flex-col sm:flex-row items-center justify-end gap-4 pt-4 border-t border-slateBlue/10">
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