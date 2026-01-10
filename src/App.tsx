// import { useState } from 'react';
// import { Navigation } from './components/Navigation';
// import { HomePage } from './components/HomePage';
// import { MarketOutlookPage } from './components/MarketOutlookPage';
// import { AboutMePage } from './components/AboutMePage';
// import { Footer } from './components/Footer';

// export default function App() {
//   const [currentPage, setCurrentPage] = useState('home');

//   const renderPage = () => {
//     switch (currentPage) {
//       case 'home':
//         return <HomePage />;
//       case 'market-outlook':
//         return <MarketOutlookPage />;
//       case 'about':
//         return <AboutMePage />;
//       default:
//         return <HomePage />;
//     }
//   };

//   return (
//     <div className="min-h-screen">
//       <Navigation currentPage={currentPage} onNavigate={setCurrentPage} />
//       <main>
//         {renderPage()}
//       </main>
//       <Footer />
//     </div>
//   );
// }


import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Navigation } from './components/Navigation';
import { HomePage } from './components/HomePage';
import { MarketOutlookPage } from './components/MarketOutlookPage';
import { AboutMePage } from './components/AboutMePage';
import { Footer } from './components/Footer';
import { ScrollToTop } from './components/ScrollToTop';

export default function App() {
  return (
    <BrowserRouter>
      <ScrollToTop />
      <Navigation /> {/* You can handle active links inside Navigation using NavLink */}
      <main className="min-h-screen">
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/market-outlook" element={<MarketOutlookPage />} />
          <Route path="/about" element={<AboutMePage />} />
          {/* Optional: add a 404 page */}
          <Route path="*" element={<HomePage />} />
        </Routes>
      </main>
      <Footer />
    </BrowserRouter>
  );
}
