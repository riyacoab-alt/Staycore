import React, { useState } from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Toast from './components/Toast';

import Home from './pages/Home';
import Features from './pages/Features';
import WebsiteOnly from './pages/WebsiteOnly';
import OtaBookingManagement from './pages/OtaBookingManagement';
import DirectHotelBooking from './pages/DirectHotelBooking';
import About from './pages/About';
import Contact from './pages/Contact';
import Resources from './pages/Resources';
import GuideDetail from './pages/GuideDetail';
import PrivacyPolicy from './pages/PrivacyPolicy';
import TermsOfService from './pages/TermsOfService';
import NotFound from './pages/NotFound';
import useSmoothScrollAndCards from './hooks/useSmoothScrollAndCards';

export default function App() {
  const [toastMessage, setToastMessage] = useState(null);

  // Initialize luxury smooth momentum scroll and card animations
  useSmoothScrollAndCards();

  const showToast = (msg) => {
    setToastMessage(msg);
    setTimeout(() => {
      setToastMessage(null);
    }, 3500);
  };

  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home onToast={showToast} />} />
        <Route path="/features" element={<Features onToast={showToast} />} />
        <Route path="/ota-booking-management" element={<OtaBookingManagement onToast={showToast} />} />
        <Route path="/website-only" element={<WebsiteOnly onToast={showToast} />} />
        <Route path="/direct-hotel-booking" element={<DirectHotelBooking onToast={showToast} />} />
        <Route path="/pricing" element={<Navigate to="/contact" replace />} />
        <Route path="/about" element={<About onToast={showToast} />} />
        <Route path="/contact" element={<Contact onToast={showToast} />} />
        <Route path="/resources" element={<Resources onToast={showToast} />} />
        <Route path="/resources/:slug" element={<GuideDetail onToast={showToast} />} />
        <Route path="/privacy-policy" element={<PrivacyPolicy onToast={showToast} />} />
        <Route path="/terms-of-service" element={<TermsOfService onToast={showToast} />} />

        {/* Semantic URL Aliases / 301-equivalent redirects to prevent duplicate content */}
        <Route path="/hotel-management-software" element={<Navigate to="/features" replace />} />
        <Route path="/hotel-management-system" element={<Navigate to="/features" replace />} />
        <Route path="/hotel-website-builder" element={<Navigate to="/website-only" replace />} />
        <Route path="/hotel-booking-software" element={<Navigate to="/features" replace />} />
        <Route path="/hotel-reservation-management" element={<Navigate to="/features" replace />} />
        <Route path="/guides" element={<Navigate to="/resources" replace />} />

        <Route path="*" element={<NotFound />} />
      </Routes>
      <Footer />
      <Toast message={toastMessage} onDismiss={() => setToastMessage(null)} />
    </>
  );
}
