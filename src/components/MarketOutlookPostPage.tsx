import { useParams, Link, Navigate } from 'react-router-dom';
import { layout, typography, components } from '@/styles';
import { outlookPosts } from '@/data';
import { extractIdFromSlug } from '@/utils';

export function MarketOutlookPostPage() {
  const { slugWithId } = useParams<{ slugWithId: string }>();
  
  // Extract ID from the URL (format: "title-slug-id")
  const id = slugWithId ? extractIdFromSlug(slugWithId) : '';
  
  // Find the post by ID
  const post = outlookPosts.find(p => p.id.toString() === id);
  
  // If post not found, redirect to market outlook page
  if (!post) {
    return <Navigate to="/market-outlook" replace />;
  }

  return (
    <div className={layout.container.standard +"bg-[var(--color-bg-subtle)] min-h-screen"}>

      {/* Article Header */}
      <article className="bg-white">
        <div className={components.article.header}>
          {/* Category & Meta */}
          <div className={components.article.meta}>
            <span className={typography.accent + ' font-medium'}>{post.category}</span>
            <span>•</span>
            <span>{post.date}</span>
            <span>•</span>
            <span>{post.readTime}</span>
          </div>

          {/* Title */}
          <h1 className={typography.heading.h1 + ' mb-6'}>{post.title}</h1>

          {/* Excerpt */}
          <p className={typography.body.large + ' border-l-4 border-[var(--color-navy)] pl-6 mb-12'}>
            {post.excerpt}
          </p>

          {/* Article Content */}
          <div 
            className="article-content prose prose-lg max-w-none
              prose-headings:text-[var(--color-charcoal)] 
              prose-h3:text-2xl prose-h3:font-semibold prose-h3:mt-12 prose-h3:mb-4
              prose-p:text-[var(--color-text-secondary)] prose-p:leading-relaxed prose-p:mb-6
              prose-ul:text-[var(--color-text-secondary)] prose-ul:leading-relaxed
              prose-li:mb-2
              prose-strong:text-[var(--color-charcoal)] prose-strong:font-semibold"
            dangerouslySetInnerHTML={{ __html: post.content || '' }}
          />

          {/* Sources Section */}
          {post.sources && post.sources.length > 0 && (
            <div className="mt-16 pt-8 py-16">
              <h3 className="text-xl font-semibold mb-4">Sources</h3>
              <div className="space-y-3">
                {post.sources.map((source, index) => (
                  <p 
                    key={index}
                    className="text-sm text-[var(--color-text-secondary)] break-words overflow-wrap-anywhere"
                  >
                    {source}
                  </p>
                ))}
              </div>
            </div>
          )}
        </div>
      </article>

      {/* Related Posts Section */}
      <section className={layout.section.default}>
        <div className="max-w-4xl mx-auto px-8" style={{paddingBottom:"8px"}}>
          <h3 className={typography.heading.h3 + ' mb-6'}>More from Market Outlook</h3>
          <div className="grid gap-6">
            {outlookPosts
              .filter(p => p.id !== post.id)
              .slice(0, 3)
              .map((relatedPost) => {
                const relatedSlug = relatedPost.title
                  .toLowerCase()
                  .replace(/[^\w\s-]/g, '')
                  .replace(/\s+/g, '-')
                  .replace(/--+/g, '-')
                  .trim();
                
                return (
                  <div style={{"paddingBottom":"8px", "paddingTop":"16px"}}>
                    <Link
                    key={relatedPost.id}
                    to={`/market-outlook/${relatedSlug}-${relatedPost.id}`}
                    className="layout.card.hoverable + ' block'"
                  >
                    <div className={typography.meta + ' flex items-center gap-3 mb-3'}>
                      <span className={typography.accent}>{relatedPost.category}</span>
                      <pre> <small>•</small> </pre>
                      <span>{relatedPost.date}</span>
                    </div>
                    <div className="text-xl font-semibold mb-2 text-[var(--color-charcoal)]">
                      {relatedPost.title}
                    </div>
                    <small>{relatedPost.excerpt}</small>
                  </Link>
                  </div>
                );
              })}
          </div>
        </div>
      </section>
    </div>
  );
}
