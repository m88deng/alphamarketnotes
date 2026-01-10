import { ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

export function AboutSnapshot() {
  return (
    <section className="bg-white border-t border-[var(--color-border)]">
      <div className="max-w-5xl mx-auto px-8 py-20">
        <div className="max-w-3xl">
          <h2 className="mb-8">About</h2>

          <div className="space-y-5">
            <p>
              I'm a CFA charterholder with over 15 years of experience analyzing markets and companies across global equity markets. My approach combines fundamental research with a disciplined, long-term investment philosophy.
            </p>
            <p>
              This platform exists to share rigorous, independent analysis—free from the noise and short-termism that often dominate financial media. I focus on helping investors develop a clear framework for thinking about risk, valuation, and business quality.
            </p>
            <p>
              My background includes roles in institutional asset management and equity research, with particular expertise in financial services, industrials, and technology sectors. All views expressed here are my own and reflect an ongoing commitment to intellectual honesty and analytical depth.
            </p>
          </div>

          <Link to="/about"
            className="mt-8 inline-flex items-center gap-2 text-[var(--color-navy)] hover:text-[var(--color-charcoal)] transition-colors"
          >
            Learn more about me
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </div>
    </section>
  );
}
