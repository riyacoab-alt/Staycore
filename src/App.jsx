import React, { useState, useEffect } from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Toast from './components/Toast';

import Home from './pages/Home';
import Features from './pages/Features';
import WebsiteOnly from './pages/WebsiteOnly';
import About from './pages/About';
import Contact from './pages/Contact';
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
        <Route path="/website-only" element={<WebsiteOnly onToast={showToast} />} />
        <Route path="/pricing" element={<Navigate to="/contact" replace />} />
        <Route path="/about" element={<About onToast={showToast} />} />
        <Route path="/contact" element={<Contact onToast={showToast} />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
      <Footer />
      <Toast message={toastMessage} onDismiss={() => setToastMessage(null)} />
    </>
  );
}
