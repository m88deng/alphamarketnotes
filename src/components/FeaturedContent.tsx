import { ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import { layout, typography, interactive } from '@/styles';
import { generatePostUrl } from '@/utils';
import { outlookPosts } from '@/data';

export function FeaturedContent() {
  // Features latest 3 market outlook posts by date
  const latestPosts = [...outlookPosts]
    .sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime())
    .slice(0, 3);

  return (
    <section className="bg-[var(--color-bg-subtle)] border-t border-[var(--color-border)]">
      <div className={layout.container.standard}>
        <div className={layout.section.large}>
        <div className="mb-12">
            <h2 className={typography.heading.h2 + ' mb-3'}>Latest Insights</h2>
          <div className="h-px w-16 bg-[var(--color-navy)]"></div>
        </div>
        
        <div className="space-y-8">
            {latestPosts.map((item) => (
            <article 
              key={item.id}
                className={layout.card.hoverable}
            >
              <div className="flex items-start justify-between gap-8">
                <div className="flex-1">
                    <div className={typography.meta + ' mb-2'}>
                    {item.date}
                  </div>
                    <h3 className={typography.heading.h3 + ' mb-3'}>
                    {item.title}
                  </h3>
                    <p className={typography.body.default + ' mb-4'}>
                    {item.excerpt}
                  </p>
                    <Link 
                      to={generatePostUrl(item.id, item.title)}
                      className={interactive.link.inline}
                  >
                    Read More
                    <ArrowRight className="w-4 h-4" />
                    </Link>
                </div>
              </div>
            </article>
          ))}
          </div>
        </div>
      </div>
    </section>
  );
}
