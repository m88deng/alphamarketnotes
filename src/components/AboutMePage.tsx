import { aboutMe } from "../data/aboutme";

export function AboutMePage() {
  return (
    <div className="bg-white min-h-screen">
      {/* Page Header */}
      <section>
        <div className="max-w-5xl mx-auto px-8 py-16" style={{ marginBottom: '-70px' }}>
          <h1 className="mb-6">About Me</h1>
          <p className="text-xl text-[var(--color-text-secondary)] leading-relaxed">
            {aboutMe.introduction}
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
                  {aboutMe.background}
                </p>
              </div>
            </div>

            {/* Investment Philosophy */}
            <div>
              <h2 className="mb-6">Investment Philosophy</h2>
              <div className="space-y-5">
                <p>
                  {aboutMe.philosophy}
                </p>
                {/* <p>Key principles that guide my analysis:</p>
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
                </ul> */}
              </div>
            </div>

            {/* Research Approach */}
            <div>
              <h2 className="mb-6">What You'll Find Here</h2>
              <div className="space-y-5">
                <p>
                  {aboutMe.findings}
                </p>
                {/* <p>
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
                </ul> */}
              </div>
            </div>

            {/* Divider */}
            <div className="h-px bg-[var(--color-border)]"></div>

            {/* Quote & Signature */}
            <div className="text-center mb-8">
              <p className="italic text-lg mb-4">
                "{aboutMe.quote}"
              </p>
              <p className="font-semibold">
                {aboutMe.signature}
              </p>
            </div>

          </div>
        </div>
      </section>
    </div>
  );
}