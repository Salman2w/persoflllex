import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

// Alle Seiten importieren
import { Home } from './pages/Home';
import { Jobs } from './pages/Jobs';
import JobDetail from './pages/JobDetail';
import { Kontakt } from './pages/Kontakt';
import { Unternehmen } from './pages/Unternehmen';
import { FuerBewerber } from './pages/FuerBewerber';
import { UeberUns } from './pages/UeberUns';
import { PersonalAnfrage } from './pages/PersonalAnfrage';
import { Impressum } from './pages/Impressum';
import { Datenschutz } from './pages/Datenschutz';
import { AGB } from './pages/AGB';
import { Blog } from './pages/Blog';
import BlogDetail from './pages/BlogDetail';
import { Downloads } from './pages/Downloads';

// --- KOMPONENTEN IMPORTIEREN ---
import { Footer } from './components/Footer'; 
import { Navbar } from './components/Navbar';
import { CookieConsent } from './components/CookieConsent';
import { Analytics } from './components/Analytics';

function App() {
  return (
    <Router>
      {/* Analytics trackt Seitenwechsel automatisch */}
      <Analytics />
      
      {/* Navbar ist jetzt aktiv! */}
      <Navbar />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/jobs" element={<Jobs />} />
        <Route path="/jobs/:id" element={<JobDetail />} />
        <Route path="/kontakt" element={<Kontakt />} />
        <Route path="/unternehmen" element={<Unternehmen />} />
        <Route path="/fuer-bewerber" element={<FuerBewerber />} />
        <Route path="/ueber-uns" element={<UeberUns />} />
        <Route path="/personalanfrage" element={<PersonalAnfrage />} />
        <Route path="/impressum" element={<Impressum />} />
        <Route path="/datenschutz" element={<Datenschutz />} />
        <Route path="/agb" element={<AGB />} />
        <Route path="/blog" element={<Blog />} />
        <Route path="/blog/:id" element={<BlogDetail />} />
        <Route path="/downloads" element={<Downloads />} />
      </Routes>

      <Footer />
      <CookieConsent />
    </Router>
  );
}

export default App;
