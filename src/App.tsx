import React from 'react';
import './App.css';
import Header from './components/common/header/Header';
import Footer from './components/common/footer/Footer';
import HeroSection from './components/sections/hero/HeroSection';
import About from './components/sections/about/About';
import Service from './components/sections/service/Service';
import Works from './components/sections/works/Works';
import Skills from './components/sections/skills/Skills';

const App: React.FC = () => {
  return (
    <div className="App">
      <Header />
      <HeroSection />
      <About />
      <Service />
      <Works />
      <Skills />
      <Footer />
    </div>
  );
}

export default App;
