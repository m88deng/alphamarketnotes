export function HeroSection() {
  return (
    <section className="bg-white">
      <div className="max-w-5xl mx-auto px-8 py-24">
        <div className="max-w-3xl">
          <h1 className="mb-6">
            Alpha Market Notes
          </h1>
          <p className="text-xl text-[var(--color-text-secondary)] leading-relaxed">
            Rigorous, independent market insights and company analysis to help you think clearly about investing. No hype, no shortcuts—just disciplined research and long-term perspective.
          </p>
          
          {/* <div className="flex items-center gap-4">
            <button className="px-7 py-3.5 bg-[var(--color-navy)] text-white hover:bg-[var(--color-charcoal)] transition-colors">
              Read the Latest Market Outlook
            </button>
            <button className="px-7 py-3.5 border-2 border-[var(--color-navy)] text-[var(--color-navy)] hover:bg-[var(--color-bg-subtle)] transition-colors">
              Subscribe
            </button>
          </div> */}
        </div>
      </div>
    </section>
  );
}
