import React, { useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import './App.css';

import Header from './components/common/header/Header';
import Footer from './components/common/footer/Footer';
import HeroSection from './components/sections/hero/HeroSection';
import About from './components/sections/about/About';
import Service from './components/sections/service/Service';
import History from './components/sections/history/History';
import Works from './components/sections/works/Works';
import Skills from './components/sections/skills/Skills';
import Contact from './components/sections/contact/Contact';
import WorldTour from './components/sections/worldtour/WorldTour';

const ScrollToHash: React.FC = () => {
  const location = useLocation();

  useEffect(() => {
    if (location.hash) {
      const id = location.hash.replace('#', '');
      const el = document.getElementById(id);
      if (el) {
        setTimeout(() => {
          el.scrollIntoView({ behavior: 'smooth' });
        }, 100);
      }
    }
  }, [location]);

  return null;
};

const App: React.FC = () => {
  return (
    <Router>
      <ScrollToHash />
      <Routes>
        <Route
          path="/"
          element={
            <div className="App">
              <Header />
              <HeroSection />
              <About />
              <Service />
              <History />
              <Works />
              <Skills />
              <Contact />
              <Footer />
            </div>
          }
        />

        <Route
          path="/world-tour"
          element={
            <div className="App">
              <Header />
              <WorldTour />
              <Footer />
            </div>
          }
        />
      </Routes>
    </Router>
  );
};

export default App;
