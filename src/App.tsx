import React from 'react';
import { BrowserRouter, Routes, Route, Navigate, useLocation } from 'react-router-dom';

// Layout components
import Header from './components/Header';
import Footer from './components/Footer';
import ChatbotWidget from './components/ChatbotWidget';

// Page components
import WerkstattHome from './pages/werkstatt/WerkstattHome';
import WerkstattLeistungen from './pages/werkstatt/WerkstattLeistungen';
import ServiceDetail from './pages/werkstatt/ServiceDetail';
import WerkstattPreise from './pages/werkstatt/WerkstattPreise';
import WerkstattUeberUns from './pages/werkstatt/WerkstattUeberUns';
import WerkstattFAQ from './pages/werkstatt/WerkstattFAQ';
import WerkstattKontakt from './pages/werkstatt/WerkstattKontakt';
import WerkstattBewertungen from './pages/werkstatt/WerkstattBewertungen';
import Terminbuchung from './pages/werkstatt/Terminbuchung';

import AutohandelHome from './pages/autohandel/AutohandelHome';
import AutohandelFahrzeuge from './pages/autohandel/AutohandelFahrzeuge';
import AutohandelFinanzierung from './pages/autohandel/AutohandelFinanzierung';
import AutohandelFAQ from './pages/autohandel/AutohandelFAQ';
import AutohandelKontakt from './pages/autohandel/AutohandelKontakt';

import B2BHome from './pages/b2b/B2BHome';
import B2BLeistungen from './pages/b2b/B2BLeistungen';
import B2BFamilienWerkstaetten from './pages/b2b/B2BFamilienWerkstaetten';
import B2BFAQ from './pages/b2b/B2BFAQ';
import B2BKontakt from './pages/b2b/B2BKontakt';

import ShopHome from './pages/shop/ShopHome';

import Login from './pages/auth/Login';
import Impressum from './pages/legal/Impressum';
import AGB from './pages/legal/AGB';
import Datenschutz from './pages/legal/Datenschutz';

function ScrollToTop() {
  const { pathname, hash } = useLocation();
  React.useEffect(() => {
    if (hash) {
      const timer = setTimeout(() => {
        const element = document.getElementById(hash.substring(1));
        if (element) {
          const yOffset = -120; // Offset to clear the sticky header
          const y = element.getBoundingClientRect().top + window.pageYOffset + yOffset;
          window.scrollTo({ top: y, behavior: 'smooth' });
        }
      }, 100);
      return () => clearTimeout(timer);
    } else {
      window.scrollTo(0, 0);
    }
  }, [pathname, hash]);
  return null;
}

function App() {
  return (
    <BrowserRouter>
      <ScrollToTop />
      
      {/* Header element at top of all pages */}
      <Header />
      
      {/* Main Pages Content wrapper */}
      <main style={{ flex: '1 0 auto' }}>
        <Routes>
          {/* Base Redirect */}
          <Route path="/" element={<Navigate to="/werkstatt" replace />} />
          
          {/* Werkstatt Section */}
          <Route path="/werkstatt" element={<WerkstattHome />} />
          <Route path="/werkstatt/leistungen" element={<WerkstattLeistungen />} />
          <Route path="/werkstatt/leistungen/:slug" element={<ServiceDetail />} />
          <Route path="/werkstatt/preise" element={<WerkstattPreise />} />
          <Route path="/werkstatt/ueber-uns" element={<WerkstattUeberUns />} />
          <Route path="/werkstatt/faq" element={<WerkstattFAQ />} />
          <Route path="/werkstatt/kontakt" element={<WerkstattKontakt />} />
          <Route path="/werkstatt/bewertungen" element={<WerkstattBewertungen />} />
          <Route path="/werkstatt/terminbuchung" element={<Terminbuchung />} />

          {/* Autohandel Section */}
          <Route path="/autohandel" element={<AutohandelHome />} />
          <Route path="/autohandel/fahrzeuge" element={<AutohandelFahrzeuge />} />
          <Route path="/autohandel/anfrage" element={<AutohandelKontakt />} />
          <Route path="/autohandel/finanzierung" element={<AutohandelFinanzierung />} />
          <Route path="/autohandel/faq" element={<AutohandelFAQ />} />
          <Route path="/autohandel/kontakt" element={<AutohandelKontakt />} />

          {/* B2B Section */}
          <Route path="/b2b" element={<B2BHome />} />
          <Route path="/b2b/leistungen" element={<B2BLeistungen />} />
          <Route path="/b2b/familien-werkstaetten" element={<B2BFamilienWerkstaetten />} />
          <Route path="/b2b/faq" element={<B2BFAQ />} />
          <Route path="/b2b/kontakt" element={<B2BKontakt />} />

          {/* Shop Section */}
          <Route path="/shop" element={<ShopHome />} />
          <Route path="/shop/kategorie/alle" element={<ShopHome />} />

          {/* Portal Auth */}
          <Route path="/auth/login" element={<Login />} />

          {/* Legal texts */}
          <Route path="/impressum" element={<Impressum />} />
          <Route path="/agb" element={<AGB />} />
          <Route path="/datenschutz" element={<Datenschutz />} />
          
          {/* Wildcard Catchall redirects back home */}
          <Route path="*" element={<Navigate to="/werkstatt" replace />} />
        </Routes>
      </main>

      {/* Footer element at bottom of all pages */}
      <Footer />

      {/* Floating AI Chat widget */}
      <ChatbotWidget />
    </BrowserRouter>
  );
}

export default App;
