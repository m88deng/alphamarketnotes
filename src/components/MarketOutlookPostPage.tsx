import React from 'react';
import { useParams, Link, Navigate } from 'react-router-dom';
import { outlookPosts } from '../data/marketOutlookPosts';
import { extractIdFromSlug } from '../utils/slugify';

export function MarketOutlookPostPage() {
  const { slugWithId } = useParams<{ slugWithId: string }>();
  
  // Extract ID from the URL (format: "title-slug-id")
  const id = slugWithId ? extractIdFromSlug(slugWithId) : '';
  
  // Find the post by ID (supports both string and numeric IDs)
  const post = outlookPosts.find(p => p.id.toString() === id);
  
  // If post not found, redirect to market outlook page
  if (!post) {
    return <Navigate to="/market-outlook" replace />;
  }

  return (
    <div className="max-w-5xl mx-auto px-8 min-h-screen">
      {/* Article Header */}
      <article>
        <div className="max-w-4xl mx-auto px-8 py-16 mb-12">
          {/* Category & Meta */}
          <div className="flex items-center gap-4 text-sm text-[var(--color-text-muted)] mb-8">
            <span className="text-[var(--color-accent)] font-medium">{post.category}</span>
            <span>•</span>
            <span>{post.date}</span>
            <span>•</span>
            <span>{post.readTime}</span>
          </div>

          {/* Title */}
          <h1 className="mb-12">{post.title}</h1>

          {/* Excerpt
          <p className="text-xl text-[var(--color-text-secondary)] leading-relaxed border-l-4 border-[var(--color-navy)] pl-6 mb-8">
            {post.excerpt}
          </p> */}

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
        </div>
      </article>

      {/* Related Posts Section (Optional) */}
      {/* <section className="py-12">
        <div className="border-t border-[var(--color-border)] max-w-4xl mx-auto px-8 py-12">
          <h2 className="text-2xl font-semibold mb-6">More from Market Outlook</h2>
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
                  <Link
                    key={relatedPost.id}
                    to={`/market-outlook/${relatedSlug}-${relatedPost.id}`}
                    className="border-b border-[var(--color-border)] my-6 p-6 hover:shadow-md transition-shadow block"
                  >
                    <>
                      <div className="flex items-center gap-3 text-sm text-[var(--color-text-muted)] pt-6 mb-3">
                        <span className="text-[var(--color-accent)]">{relatedPost.category}</span>
                        <span>•</span>
                        <span>{relatedPost.date}</span>
                      </div>
                      <h3 className="text-xl font-semibold mb-2 text-[var(--color-charcoal)]">
                        {relatedPost.title}
                      </h3>
                      <p className="text-[var(--color-text-secondary)] line-clamp-2">
                        {relatedPost.excerpt}
                      </p>
                    </>
                  </Link>
                );
              })}
          </div>
        </div>
      </section> */}
    </div>
  );
}
