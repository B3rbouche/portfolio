import React, { useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import ReactGA from 'react-ga4';
import './App.css';
import Navbar from './components/Navbar';
import Footerbar from './components/Footerbar';
import CookieBanner from './components/CookieBanner';
import Home from './pages/Home';
import Projects from './pages/Projects';
import Contact from './pages/Contact';
import Admin from './pages/Admin';
import Legal from './pages/Legal';

// Remplace par ton vrai ID de mesure Google Analytics
const TRACKING_ID = "G-JGS6S0XHC9"; 
ReactGA.initialize(TRACKING_ID);

// Petit composant pour suivre les changements de pages
const RouteChangeTracker = () => {
  const location = useLocation();

  useEffect(() => {
    ReactGA.send({ hitType: "pageview", page: location.pathname + location.search });
  }, [location]);

  return null;
};

function App() {
  return (
    <Router>
      <RouteChangeTracker /> {/* Enregistre chaque changement de vue */}
      <Navbar /> 
      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/projects" element={<Projects />} /> 
          <Route path="/contact" element={<Contact />} />
          <Route path="/admin" element={<Admin />} />
          <Route path="/legal" element={<Legal />} />
        </Routes>
      </main>
      <footer className="footer-container">
        <Footerbar />
        <p className="copyright">© 2026 - Lucas Barbier - Tous droits réservés</p>
      </footer>
      <CookieBanner /> {/* On ajoute le bandeau ici */}
    </Router>
  );
}

export default App;