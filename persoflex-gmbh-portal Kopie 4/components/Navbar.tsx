import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Phone, Menu, X } from 'lucide-react';

export const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { to: '/unternehmen', label: 'Für Unternehmen' },
    { to: '/fuer-bewerber', label: 'Für Bewerber' },
    { to: '/jobs', label: 'Jobbörse' },
    { to: '/ueber-uns', label: 'Über uns' },
    { to: '/blog', label: 'Blog' },
    { to: '/kontakt', label: 'Kontakt' },
  ];

  const isActive = (path: string) => location.pathname === path;

  return (
    <nav 
      className={`fixed w-full top-0 left-0 z-50 transition-all duration-300 ${
        isScrolled 
          ? 'bg-white/95 backdrop-blur-md border-b border-gray-200 shadow-sm' 
          : 'bg-white'
      }`}
      role="navigation"
      aria-label="Hauptnavigation"
    >
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex justify-between items-center h-20">
          
          {/* Logo */}
          <Link to="/" className="flex items-center gap-3 group" aria-label="PersoFlex GmbH - Zur Startseite">
            <img 
              src="/bilder/logo.webp" 
              alt="PersoFlex GmbH - Personaldienstleister Pforzheim" 
              className="h-12 w-auto transition-transform duration-300 group-hover:scale-105"
              width="180"
              height="48"
            />
          </Link>
          
          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center gap-1">
            {navLinks.map((link) => (
              <Link 
                key={link.to}
                to={link.to} 
                className={`relative font-medium text-sm px-4 py-2.5 rounded-lg transition-all duration-300 ${
                  isActive(link.to) 
                    ? 'bg-orange-500 text-white' 
                    : 'text-gray-700 hover:text-orange-500 hover:bg-orange-50'
                }`}
              >
                {link.label}
              </Link>
            ))}
          </div>

          {/* CTA Button */}
          <div className="hidden lg:flex items-center gap-4">
            <a 
              href="tel:072316039493" 
              className="group bg-orange-500 hover:bg-orange-600 text-white px-6 py-3 rounded-lg flex items-center font-semibold text-sm transition-all duration-300 hover:shadow-lg hover:shadow-orange-500/25"
              aria-label="Jetzt anrufen: 07231 60 39 493"
            >
              <Phone size={16} className="mr-2" />
              <span>07231 60 39 493</span>
            </a>
          </div>

          {/* Mobile Menu Button */}
          <button 
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="lg:hidden p-2 text-gray-700 hover:text-orange-500 transition-colors"
            aria-label={isMobileMenuOpen ? 'Menü schließen' : 'Menü öffnen'}
            aria-expanded={isMobileMenuOpen}
          >
            {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <div 
        className={`lg:hidden absolute top-full left-0 w-full bg-white border-b border-gray-200 shadow-lg transition-all duration-300 ${
          isMobileMenuOpen ? 'opacity-100 visible' : 'opacity-0 invisible'
        }`}
        role="menu"
      >
        <div className="max-w-7xl mx-auto px-6 py-6 space-y-2">
          {navLinks.map((link) => (
            <Link
              key={link.to}
              to={link.to}
              onClick={() => setIsMobileMenuOpen(false)}
              className={`block py-3 px-4 rounded-lg font-medium transition-colors ${
                isActive(link.to) 
                  ? 'bg-orange-500 text-white' 
                  : 'text-gray-700 hover:bg-orange-50 hover:text-orange-500'
              }`}
              role="menuitem"
            >
              {link.label}
            </Link>
          ))}
          <a 
            href="tel:072316039493" 
            className="mt-4 w-full bg-orange-500 hover:bg-orange-600 text-white px-6 py-4 rounded-lg flex items-center justify-center font-semibold transition-colors"
          >
            <Phone size={18} className="mr-2" />
            07231 60 39 493
          </a>
        </div>
      </div>
    </nav>
  );
};
