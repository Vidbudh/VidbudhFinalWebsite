import React from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import Services from './components/Services';
import CPOServices from './components/CPOServices';
import WhyUs from './components/WhyUs';
import Testimonials from './components/Testimonials';
import Contact from './components/Contact';
import Footer from './components/Footer';

function App() {
  return (
    <div className="min-h-screen bg-soft-white font-inter">
      <Header />
      <Hero />
      <Services />
      <CPOServices />
      <WhyUs />
      <Testimonials />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;