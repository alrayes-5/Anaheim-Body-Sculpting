import React from 'react';
import { HashRouter, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import Chatbot from './components/Chatbot';
import HomePage from './pages/HomePage';
import AboutPage from './pages/AboutPage';
import TreatmentsPage from './pages/TreatmentsPage';
import ResultsPage from './pages/ResultsPage';
import FaqPage from './pages/FaqPage';
import ContactPage from './pages/ContactPage';
import ScrollToTop from './components/ScrollToTop';

function App() {
  return (
    <HashRouter>
      <div className="bg-neutral-light text-neutral-dark font-sans">
        <Header />
        <main>
          <ScrollToTop />
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/about" element={<AboutPage />} />
            <Route path="/treatments" element={<TreatmentsPage />} />
            <Route path="/results" element={<ResultsPage />} />
            <Route path="/faq" element={<FaqPage />} />
            <Route path="/contact" element={<ContactPage />} />
          </Routes>
        </main>
        <Footer />
        <Chatbot />
      </div>
    </HashRouter>
  );
}

export default App;