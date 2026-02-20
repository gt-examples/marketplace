import { getGT } from "gt-next/server";
import { LocaleSelector } from "gt-next";
import Link from "next/link";

export default async function Header() {
  const gt = await getGT();
  return (
    <header className="border-b border-neutral-200 bg-white sticky top-0 z-50">
      <div className="max-w-6xl mx-auto px-6 py-4 flex items-center justify-between">
        <div className="flex items-center gap-3">
          <a
            href="https://generaltranslation.com"
            target="_blank"
            rel="noopener noreferrer"
            className="text-sm font-medium text-neutral-400 hover:text-neutral-600 transition-colors"
          >
            General Translation
          </a>
          <span className="text-neutral-300">/</span>
          <Link
            href="/"
            className="text-sm font-semibold text-neutral-900 hover:text-blue-600 transition-colors"
          >
            {gt("Marketplace")}
          </Link>
        </div>
        <div className="flex items-center gap-4">
          <nav className="hidden md:flex items-center gap-5 text-sm">
            <Link href="/" className="text-neutral-500 hover:text-neutral-900 transition-colors">
              {gt("Browse")}
            </Link>
            <Link href="/categories" className="text-neutral-500 hover:text-neutral-900 transition-colors">
              {gt("Categories")}
            </Link>
            <Link href="/post" className="text-neutral-500 hover:text-neutral-900 transition-colors">
              {gt("Post")}
            </Link>
            <Link href="/my-listings" className="text-neutral-500 hover:text-neutral-900 transition-colors">
              {gt("My Listings")}
            </Link>
            <Link href="/saved" className="text-neutral-500 hover:text-neutral-900 transition-colors">
              {gt("Saved")}
            </Link>
          </nav>
          <a
            href="https://github.com/gt-examples/marketplace"
            target="_blank"
            rel="noopener noreferrer"
            className="text-neutral-400 hover:text-neutral-600 transition-colors"
            aria-label="View on GitHub"
          >
            <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
              <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z" />
            </svg>
          </a>
          <LocaleSelector />
        </div>
      </div>
      {/* Mobile nav */}
      <div className="md:hidden border-t border-neutral-200 px-6 py-2 flex gap-4 text-sm overflow-x-auto">
        <Link href="/" className="text-neutral-500 hover:text-neutral-900 transition-colors whitespace-nowrap">
          {gt("Browse")}
        </Link>
        <Link href="/categories" className="text-neutral-500 hover:text-neutral-900 transition-colors whitespace-nowrap">
          {gt("Categories")}
        </Link>
        <Link href="/post" className="text-neutral-500 hover:text-neutral-900 transition-colors whitespace-nowrap">
          {gt("Post")}
        </Link>
        <Link href="/my-listings" className="text-neutral-500 hover:text-neutral-900 transition-colors whitespace-nowrap">
          {gt("My Listings")}
        </Link>
        <Link href="/saved" className="text-neutral-500 hover:text-neutral-900 transition-colors whitespace-nowrap">
          {gt("Saved")}
        </Link>
      </div>
    </header>
  );
}
