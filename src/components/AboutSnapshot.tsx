import { ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import { layout, typography, interactive } from '@/styles';
import { aboutMe } from '../data/aboutme';

export function AboutSnapshot() {
  return (
    <section className="bg-white border-t border-[var(--color-border)]">
      <div className={layout.container.standard}>
        <div className={layout.section.large}>
        <div className="max-w-3xl">
            <h2 className={typography.heading.h2 + ' mb-8'}>About</h2>

          <div className="space-y-5">
              <p className={typography.body.default}>{aboutMe.blurb}</p>
          </div>

            <Link 
              to="/about"
              className={interactive.link.inline + ' mt-8'}
          >
            Learn more about me
            <ArrowRight className="w-4 h-4" />
          </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
