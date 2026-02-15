import { ArrowRight } from 'lucide-react';
import { useState } from 'react';
import { Link } from 'react-router-dom';
import { layout, typography, interactive } from '@/styles';
import { generatePostUrl } from '@/utils';
import { outlookPosts } from '@/data';

const categories = ["All", "Quarterly Review", "Weekly Market Recap", "Sector Analysis"];

export function MarketOutlookPage() {
  const [selectedCategory, setSelectedCategory] = useState("All");
  
  const filteredPosts = selectedCategory === "All" 
    ? outlookPosts 
    : outlookPosts.filter(post => post.category === selectedCategory);

  return (
    <div className="bg-[var(--color-bg-subtle)] min-h-screen">
      {/* Page Header */}
      <section className="bg-white border-b border-[var(--color-border)]">
        <div className={layout.container.standard + ' py-16'}>
          <h1 className={typography.heading.h1 + ' mb-4'}>Market Outlook</h1>
          <p className={typography.body.large + ' max-w-3xl'}>
            In-depth analysis of market conditions, sector dynamics, and investment opportunities. 
            Each piece reflects rigorous research and a long-term perspective on value creation.
          </p>
        </div>
      </section>

      {/* Filter Navigation */}
      <section className="bg-white border-b border-[var(--color-border)]">
        <div className={layout.container.standard + ' py-6'}>
          <div className="flex items-center gap-6">
            <span className={typography.meta}>Filter by:</span>
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setSelectedCategory(category)}
                className={`text-sm px-4 py-2 transition-colors ${
                  selectedCategory === category
                    ? 'bg-[var(--color-navy)] text-white'
                    : 'text-[var(--color-text-secondary)] hover:text-[var(--color-navy)] hover:bg-[var(--color-bg-subtle)]'
                }`}
              >
                {category}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Posts Archive */}
      <section className={layout.section.default}>
        <div className={layout.container.standard}>
          <div className="space-y-6">
            {[...filteredPosts].reverse().map((post) => (
              <article 
                key={post.id}
                className={layout.card.hoverable}
              >
                <div className="flex items-start justify-between gap-8 mb-4">
                  <div className={typography.meta + ' flex items-center gap-4'}>
                    <span>{post.date}</span>
                    <span>•</span>
                    <span>{post.readTime}</span>
                    <span>•</span>
                    <span className={typography.accent}>{post.category}</span>
                  </div>
                </div>
                
                <h3 className={typography.heading.h3 + ' mb-3'}>
                  {post.title}
                </h3>
                
                <p className={typography.body.default + ' mb-5'}>
                  {post.excerpt}
                </p>
                
                <Link 
                  to={generatePostUrl(post.id, post.title)}
                  className={interactive.link.inline}
                >
                  Read Full Analysis
                  <ArrowRight className="w-4 h-4" />
                </Link>
              </article>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
