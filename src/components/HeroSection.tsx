import { layout, typography } from '@/styles';

export function HeroSection() {
  return (
    <section className="bg-white">
      <div className={layout.container.standard}>
        <div className={layout.section.hero}>
        <div className="max-w-3xl">
            <h1 className={typography.heading.h1 + ' mb-6'}>
            Alpha Market Notes
          </h1>
            <p className={typography.body.large}>
            Rigorous, independent market insights and company analysis to help you think clearly about investing. No hype, no shortcuts—just disciplined research and long-term perspective.
          </p>
          </div>
        </div>
      </div>
    </section>
  );
}
