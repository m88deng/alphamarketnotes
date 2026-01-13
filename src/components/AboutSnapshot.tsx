import { ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import { aboutMe } from '../data/aboutme';

export function AboutSnapshot() {
  return (
    <section className="bg-white border-t border-[var(--color-border)]">
      <div className="max-w-5xl mx-auto px-8 py-20">
        <div className="max-w-3xl">
          <h2 className="mb-8">About</h2>

          <div className="space-y-5">
            <p>{aboutMe.blurb}</p>
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
