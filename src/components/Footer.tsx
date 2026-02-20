import { T } from "gt-next";

export default function Footer() {
  return (
    <footer className="border-t border-neutral-200 bg-neutral-50 mt-16">
      <div className="max-w-6xl mx-auto px-6 py-8">
        <T>
          <p className="text-sm text-neutral-500 text-center mb-4">
            This is an example application built with General Translation to demonstrate internationalization. It is not a real marketplace or service.
          </p>
          <div className="flex flex-wrap justify-center gap-4 text-xs text-neutral-400">
            <a href="https://generaltranslation.com" target="_blank" rel="noopener noreferrer" className="hover:text-neutral-600 transition-colors">General Translation</a>
            <span>|</span>
            <a href="https://craigslist.org" target="_blank" rel="noopener noreferrer" className="hover:text-neutral-600 transition-colors">Craigslist</a>
            <span>|</span>
            <a href="https://www.ftc.gov/tips-advice/business-center/guidance/online-advertising-and-marketing" target="_blank" rel="noopener noreferrer" className="hover:text-neutral-600 transition-colors">FTC Consumer Guide</a>
            <span>|</span>
            <a href="https://www.consumerfinance.gov" target="_blank" rel="noopener noreferrer" className="hover:text-neutral-600 transition-colors">CFPB</a>
          </div>
        </T>
      </div>
    </footer>
  );
}
