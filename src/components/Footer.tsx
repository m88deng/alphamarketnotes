import React from 'react';
import { Link } from 'react-router-dom';

const navLinks = [
  { name: 'Home', path: '/' },
  { name: 'Market Outlook', path: '/market-outlook' },
  { name: 'About Me', path: '/about' },
];

export function Footer() {
  return (
    <footer className="bg-[var(--color-charcoal)] text-white">
      <div className="max-w-5xl mx-auto px-8 py-12">
        {/* Navigation Links */}
        <div className="flex items-center gap-6 mb-8 pb-8 border-b border-gray-600">
          {navLinks.map((link, index) => (
            <React.Fragment key={link.name}>
              <Link
                to={link.path}
                className="inline-block text-gray-300 hover:text-white transition-colors"
              >
                {link.name}
              </Link>
              {index < navLinks.length - 1 && (
                <span className="text-gray-600 pointer-events-none select-none">|</span>
              )}
            </React.Fragment>
          ))}
        </div>

        {/* Disclaimer */}
        <div className="space-y-4 mb-8 text-sm text-gray-400 leading-relaxed">
          <p>
            <strong className="text-gray-300">Disclaimer:</strong> The content on this site is provided for informational and educational purposes only and does not constitute investment advice, financial advice, trading advice, or any other sort of advice. Nothing on this site constitutes a solicitation, recommendation, endorsement, or offer to buy or sell any securities or other financial instruments. All content is presented as of the date published or indicated and may be superseded by subsequent market events or for other reasons.
          </p>
          <p>
            Past performance is not indicative of future results. Investing involves risk, including the possible loss of principal. You should conduct your own research and consult with qualified financial, legal, and tax professionals before making any investment decisions.
          </p>
        </div>

        {/* Tagline */}
        <div className="text-center pt-6 border-t border-gray-600 text-sm text-gray-400">
          <p>© {new Date().getFullYear()} CRD. All rights reserved.</p>
          {/* <p>Independent Investment Research</p> */}
        </div>
      </div>
    </footer>
  );
}
