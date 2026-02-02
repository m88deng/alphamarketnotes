/**
 * Components Barrel Export
 * 
 * Centralized exports for all components.
 * Import from '@/components' instead of individual files.
 * 
 * @example
 * ```tsx
 * // ✅ Clean imports
 * import { Navigation, Footer, HomePage } from '@/components';
 * 
 * // ❌ Avoid deep imports
 * import { Navigation } from '@/components/Navigation';
 * import { Footer } from '@/components/Footer';
 * ```
 */

// Layout Components
export { Navigation } from './Navigation';
export { Footer } from './Footer';
export { ScrollToTop } from './ScrollToTop';

// Page Components
export { HomePage } from './HomePage';
export { MarketOutlookPage } from './MarketOutlookPage';
export { MarketOutlookPostPage } from './MarketOutlookPostPage';
export { AboutMePage } from './AboutMePage';

// Section Components
export { HeroSection } from './HeroSection';
export { FeaturedContent } from './FeaturedContent';
export { AboutSnapshot } from './AboutSnapshot';
