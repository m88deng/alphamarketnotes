export function AboutMePage() {
  return (
    <div className="bg-white min-h-screen">
      {/* Page Header */}
      <section className="border-b border-[var(--color-border)]">
        <div className="max-w-5xl mx-auto px-8 py-16">
          <h1 className="mb-6">About Me</h1>
          <p className="text-xl text-[var(--color-text-secondary)] leading-relaxed">
            Independent investment research built on rigorous
            analysis, intellectual honesty, and a commitment to
            long-term value creation.
          </p>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-16">
        <div className="max-w-5xl mx-auto px-8">
          <div className="space-y-12">
            {/* Introduction */}
            <div>
              <h2 className="mb-6">Background</h2>
              <div className="space-y-5">
                <p>
                  I'm a CFA charterholder with over 15 years of
                  experience analyzing markets and companies
                  across global equity markets. My career has
                  spanned institutional asset management, equity
                  research, and portfolio analysis, with a
                  consistent focus on fundamental research and
                  disciplined valuation.
                </p>
                <p>
                  Throughout my career, I've developed expertise
                  across multiple sectors including financial
                  services, industrials, technology, healthcare,
                  and energy. This breadth of experience informs
                  my approach to sector rotation analysis and
                  cross-sector valuation comparisons.
                </p>
                <p>
                  I hold a CFA charter from the CFA Institute
                  and maintain ongoing professional development
                  through research, industry conferences, and
                  continuous study of market history and
                  behavioral finance.
                </p>
              </div>
            </div>

            {/* Divider */}
            <div className="h-px bg-[var(--color-border)]"></div>

            {/* Investment Philosophy */}
            <div>
              <h2 className="mb-6">Investment Philosophy</h2>
              <div className="space-y-5">
                <p>
                  My approach to markets is grounded in
                  fundamental analysis and long-term thinking. I
                  believe that rigorous research, combined with
                  patience and discipline, provides the
                  foundation for sound investment decisions.
                </p>
                <p>Key principles that guide my analysis:</p>
                <ul className="space-y-3 ml-6">
                  <li className="text-[var(--color-text-secondary)] leading-relaxed">
                    <strong className="text-[var(--color-text-primary)]">
                      Business Quality Matters:
                    </strong>{" "}
                    Sustainable competitive advantages, pricing
                    power, and capital allocation discipline are
                    critical determinants of long-term returns.
                  </li>
                  <li className="text-[var(--color-text-secondary)] leading-relaxed">
                    <strong className="text-[var(--color-text-primary)]">
                      Valuation Discipline:
                    </strong>{" "}
                    Price is what you pay, value is what you
                    get. Understanding the relationship between
                    current prices and intrinsic value is
                    essential.
                  </li>
                  <li className="text-[var(--color-text-secondary)] leading-relaxed">
                    <strong className="text-[var(--color-text-primary)]">
                      Risk Management:
                    </strong>{" "}
                    Successful investing requires understanding
                    both the probability and magnitude of
                    potential outcomes, not just upside
                    scenarios.
                  </li>
                  <li className="text-[var(--color-text-secondary)] leading-relaxed">
                    <strong className="text-[var(--color-text-primary)]">
                      Independent Thinking:
                    </strong>{" "}
                    Markets are driven by consensus views, but
                    exceptional returns often require the
                    conviction to differ from the crowd when
                    evidence supports it.
                  </li>
                  <li className="text-[var(--color-text-secondary)] leading-relaxed">
                    <strong className="text-[var(--color-text-primary)]">
                      Long-Term Perspective:
                    </strong>{" "}
                    Short-term market movements are often noise.
                    Focus on fundamental business performance
                    over multi-year periods.
                  </li>
                </ul>
              </div>
            </div>

            {/* Divider */}
            <div className="h-px bg-[var(--color-border)]"></div>

            {/* Research Approach */}
            <div>
              <h2 className="mb-6">Research Approach</h2>
              <div className="space-y-5">
                <p>
                  My research process combines quantitative
                  analysis with qualitative assessment. I
                  examine financial statements, competitive
                  positioning, management quality, industry
                  dynamics, and macroeconomic context to develop
                  a comprehensive view of investment
                  opportunities.
                </p>
                <p>
                  Each market outlook piece reflects extensive
                  research, including:
                </p>
                <ul className="space-y-3 ml-6">
                  <li className="text-[var(--color-text-secondary)] leading-relaxed">
                    Detailed financial modeling and valuation
                    analysis
                  </li>
                  <li className="text-[var(--color-text-secondary)] leading-relaxed">
                    Historical precedent analysis and pattern
                    recognition
                  </li>
                  <li className="text-[var(--color-text-secondary)] leading-relaxed">
                    Assessment of macroeconomic conditions and
                    market structure
                  </li>
                  <li className="text-[var(--color-text-secondary)] leading-relaxed">
                    Consideration of behavioral factors and
                    market sentiment
                  </li>
                  <li className="text-[var(--color-text-secondary)] leading-relaxed">
                    Risk-adjusted return analysis across
                    different scenarios
                  </li>
                </ul>
              </div>
            </div>

            {/* Divider */}
            <div className="h-px bg-[var(--color-border)]"></div>

            {/* Why This Platform */}
            <div>
              <h2 className="mb-6">Why This Platform Exists</h2>
              <div className="space-y-5">
                <p>
                  The financial media landscape often
                  prioritizes speed over depth, and
                  sensationalism over substance. This platform
                  exists as an alternative—a place for
                  thoughtful, research-driven analysis that
                  respects the intelligence of serious
                  investors.
                </p>
                <p>
                  I created this site to share my research with
                  investors who value rigor, clarity, and
                  intellectual honesty. My goal is to help
                  readers develop better frameworks for thinking
                  about markets, not to provide hot tips or
                  market timing predictions.
                </p>
                <p>
                  All analysis and opinions expressed here are
                  my own. I have no affiliation with any
                  investment firm, brokerage, or financial
                  product provider. This independence allows me
                  to maintain complete objectivity in my
                  research and commentary.
                </p>
              </div>
            </div>

            {/* Divider */}
            <div className="h-px bg-[var(--color-border)]"></div>

            {/* Contact/Disclaimer */}
            <div>
              <h2 className="mb-6">Important Disclaimers</h2>
              <div className="space-y-5">
                <p className="text-[var(--color-text-secondary)]">
                  Nothing on this site constitutes investment
                  advice, and all content is provided for
                  informational and educational purposes only. I
                  am not a registered investment advisor, and
                  readers should conduct their own research and
                  consult with qualified professionals before
                  making any investment decisions.
                </p>
                <p className="text-[var(--color-text-secondary)]">
                  All views expressed are my own and do not
                  represent the views of any current or former
                  employer. Past performance is not indicative
                  of future results, and investing involves risk
                  including possible loss of principal.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}