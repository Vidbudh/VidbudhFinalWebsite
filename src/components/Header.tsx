import React, { useState, useEffect } from 'react';
import { Menu, X, Brain, ChevronDown } from 'lucide-react';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [isServicesOpen, setIsServicesOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setIsMenuOpen(false);
      setIsServicesOpen(false);
    }
  };

  const toggleServices = () => {
    setIsServicesOpen(!isServicesOpen);
  };

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
      isScrolled ? 'bg-soft-white/95 backdrop-blur-sm shadow-lg' : 'bg-transparent'
    }`}>
      <div className="container mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-3">
            <div className="bg-tech-green p-2 rounded-xl">
              <Brain className="w-6 h-6 text-white" />
            </div>
            <span className="text-2xl font-bold text-deep-charcoal font-inter">
              Vidbudh Gen AI Studio
            </span>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            {/* Services Dropdown */}
            <div className="relative">
              <button
                onClick={toggleServices}
                className="text-cool-gray hover:text-tech-green transition-colors duration-200 font-medium flex items-center space-x-1"
              >
                <span>Services</span>
                <ChevronDown className={`w-4 h-4 transition-transform duration-200 ${isServicesOpen ? 'rotate-180' : ''}`} />
              </button>
              
              {isServicesOpen && (
                <div className="absolute top-full left-0 mt-2 w-56 bg-white rounded-xl shadow-lg border border-light-gray py-2 z-50">
                  <button
                    onClick={() => scrollToSection('gen-ai-services')}
                    className="w-full text-left px-4 py-3 text-cool-gray hover:text-tech-green hover:bg-soft-mint/20 transition-colors duration-200 font-medium"
                  >
                    Gen AI Services
                  </button>
                  <div className="border-t border-light-gray my-1"></div>
                  <div className="px-4 py-2 text-xs font-semibold text-cool-gray uppercase tracking-wide">
                    CPO Services
                  </div>
                  <button
                    onClick={() => scrollToSection('embedded-cpo')}
                    className="w-full text-left px-6 py-2 text-cool-gray hover:text-tech-green hover:bg-soft-mint/20 transition-colors duration-200 text-sm"
                  >
                    Embedded CPO
                  </button>
                  <button
                    onClick={() => scrollToSection('fractional-cpo')}
                    className="w-full text-left px-6 py-2 text-cool-gray hover:text-tech-green hover:bg-soft-mint/20 transition-colors duration-200 text-sm"
                  >
                    Fractional CPO
                  </button>
                </div>
              )}
            </div>

            {['Why Us', 'Testimonials', 'Contact'].map((item) => (
              <button
                key={item}
                onClick={() => scrollToSection(item.toLowerCase().replace(/\s+/g, '-'))}
                className="text-cool-gray hover:text-tech-green transition-colors duration-200 font-medium"
              >
                {item}
              </button>
            ))}
          </nav>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="md:hidden p-2 text-deep-charcoal"
          >
            {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <nav className="md:hidden mt-4 pb-4 border-t border-light-gray pt-4">
            <div className="flex flex-col space-y-4">
              {/* Mobile Services Section */}
              <div>
                <button
                  onClick={toggleServices}
                  className="text-cool-gray hover:text-tech-green transition-colors duration-200 font-medium text-left flex items-center justify-between w-full"
                >
                  <span>Services</span>
                  <ChevronDown className={`w-4 h-4 transition-transform duration-200 ${isServicesOpen ? 'rotate-180' : ''}`} />
                </button>
                
                {isServicesOpen && (
                  <div className="mt-2 ml-4 space-y-2">
                    <button
                      onClick={() => scrollToSection('gen-ai-services')}
                      className="block text-cool-gray hover:text-tech-green transition-colors duration-200 font-medium text-left py-2"
                    >
                      Gen AI Services
                    </button>
                    <div className="border-t border-light-gray my-2"></div>
                    <div className="text-xs font-semibold text-cool-gray uppercase tracking-wide py-1">
                      CPO Services
                    </div>
                    <button
                      onClick={() => scrollToSection('embedded-cpo')}
                      className="block text-cool-gray hover:text-tech-green transition-colors duration-200 text-left py-2 ml-2 text-sm"
                    >
                      Embedded CPO
                    </button>
                    <button
                      onClick={() => scrollToSection('fractional-cpo')}
                      className="block text-cool-gray hover:text-tech-green transition-colors duration-200 text-left py-2 ml-2 text-sm"
                    >
                      Fractional CPO
                    </button>
                  </div>
                )}
              </div>

              {['Why Us', 'Testimonials', 'Contact'].map((item) => (
                <button
                  key={item}
                  onClick={() => scrollToSection(item.toLowerCase().replace(/\s+/g, '-'))}
                  className="text-cool-gray hover:text-tech-green transition-colors duration-200 font-medium text-left"
                >
                  {item}
                </button>
              ))}
            </div>
          </nav>
        )}
      </div>

      {/* Overlay for closing dropdown when clicking outside */}
      {isServicesOpen && (
        <div 
          className="fixed inset-0 z-40" 
          onClick={() => setIsServicesOpen(false)}
        />
      )}
    </header>
  );
};

export default Header;