import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Navigation } from './components/Navigation';
import { HomePage } from './components/HomePage';
import { MarketOutlookPage } from './components/MarketOutlookPage';
import { MarketOutlookPostPage } from './components/MarketOutlookPostPage';
import { AboutMePage } from './components/AboutMePage';
import { ContactPage } from './components/ContactPage';
import { Footer } from './components/Footer';
import { ScrollToTop } from './components/ScrollToTop';
import { Toaster } from './components/ui/sonner';

export default function App() {
  return (
    <BrowserRouter>
      <ScrollToTop />
      <Navigation /> {/* You can handle active links inside Navigation using NavLink */}
      <main className="min-h-screen">
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/market-outlook" element={<MarketOutlookPage />} />
          <Route path="/market-outlook/:slugWithId" element={<MarketOutlookPostPage />} />
          <Route path="/about" element={<AboutMePage />} />
          <Route path="/contact" element={<ContactPage />} />
          {/* Optional: add a 404 page */}
          <Route path="*" element={<HomePage />} />
        </Routes>
      </main>
      <Footer />
      <Toaster />
    </BrowserRouter>
  );
}
