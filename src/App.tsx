import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Navbar } from './components/layout/Navbar';
import { Footer } from './components/layout/Footer';
import { TourModal } from './components/shared/TourModal';
import { ScrollToTop } from './components/shared/ScrollToTop';

import { HomePage } from './pages/HomePage';
import { TeachersPage } from './pages/TeachersPage';
import { ApproachPage } from './pages/ApproachPage';
import { ChildSafetyPage } from './pages/ChildSafetyPage';
import { ResourcesPage } from './pages/ResourcesPage';
import { FAQPage } from './pages/FAQPage';
import { ContactPage } from './pages/ContactPage';
import { TermsPage } from './pages/TermsPage';
import { PrivacyPage } from './pages/PrivacyPage';

export const App: React.FC = () => {
  const [tourModalOpen, setTourModalOpen] = useState(false);

  const handleOpenTourModal = () => {
    setTourModalOpen(true);
  };

  const handleCloseTourModal = () => {
    setTourModalOpen(false);
  };

  return (
    <Router>
      <ScrollToTop />
      <div className="min-h-screen flex flex-col bg-[#FFFCF0] text-[#1C1917] font-inter">
        
        {/* Navigation Header */}
        <Navbar onOpenTourModal={handleOpenTourModal} />

        {/* Main Route Content */}
        <main className="flex-grow">
          <Routes>
            <Route path="/" element={<HomePage onOpenTourModal={handleOpenTourModal} />} />
            <Route path="/theschool-and-teacher" element={<TeachersPage />} />
            <Route path="/our-learning-approach" element={<ApproachPage />} />
            <Route path="/child-safety" element={<ChildSafetyPage />} />
            <Route path="/resources" element={<ResourcesPage />} />
            <Route path="/faq" element={<FAQPage />} />
            <Route path="/contact" element={<ContactPage />} />
            <Route path="/terms-of-service" element={<TermsPage />} />
            <Route path="/privacy-policy" element={<PrivacyPage />} />
            {/* Catch-all fallback */}
            <Route path="*" element={<HomePage onOpenTourModal={handleOpenTourModal} />} />
          </Routes>
        </main>

        {/* Global Footer */}
        <Footer onOpenTourModal={handleOpenTourModal} />

        {/* Global Interactive Tour Modal */}
        <TourModal isOpen={tourModalOpen} onClose={handleCloseTourModal} />

      </div>
    </Router>
  );
};

export default App;
