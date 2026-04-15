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
      className={`fixed w-full top-0 left-0 z-50 transition-all duration-500 ${
        isScrolled 
          ? 'bg-white/95 backdrop-blur-md border-b border-orange-200 shadow-lg shadow-orange-500/10' 
          : 'bg-gradient-to-r from-orange-50/80 via-white to-purple-50/50'
      }`}
    >
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex justify-between items-center h-20">
          
          {/* Logo */}
          <Link to="/" className="flex items-center gap-3 group">
            <img 
              src="/bilder/logo.webp" 
              alt="PersoFlex GmbH Logo" 
              className="h-12 w-auto transition-transform duration-300 group-hover:scale-105"
            />
          </Link>
          
          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center gap-1">
            {navLinks.map((link, index) => {
              const colors = ['from-orange-500 to-rose-500', 'from-teal-500 to-cyan-500', 'from-purple-500 to-pink-500', 'from-amber-500 to-orange-500', 'from-cyan-500 to-teal-500', 'from-rose-500 to-purple-500'][index];
              const hoverBgs = ['hover:bg-orange-100', 'hover:bg-teal-100', 'hover:bg-purple-100', 'hover:bg-amber-100', 'hover:bg-cyan-100', 'hover:bg-rose-100'][index];
              return (
                <Link 
                  key={link.to}
                  to={link.to} 
                  className={`relative font-semibold text-sm px-4 py-2.5 rounded-xl transition-all duration-300 ${
                    isActive(link.to) 
                      ? `bg-gradient-to-r ${colors} text-white shadow-lg shadow-orange-500/20` 
                      : `text-gray-700 ${hoverBgs} hover:text-gray-900`
                  }`}
                >
                  {link.label}
                </Link>
              );
            })}
          </div>

          {/* CTA Button */}
          <div className="hidden lg:flex items-center gap-4">
            <a 
              href="tel:072316039493" 
              className="group relative overflow-hidden bg-gradient-to-r from-orange-500 via-rose-500 to-purple-500 text-white px-6 py-3 rounded-xl flex items-center font-bold text-sm transition-all duration-300 hover:shadow-[0_8px_25px_rgba(255,107,0,0.4)] hover:scale-105"
            >
              <Phone size={16} className="mr-2" />
              <span className="relative z-10">07231 60 39 493</span>
              <div className="absolute inset-0 bg-gradient-to-r from-purple-500 via-rose-500 to-orange-500 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            </a>
          </div>

          {/* Mobile Menu Button */}
          <button 
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="lg:hidden p-2 text-gray-700 hover:text-orange-500 transition-colors"
            aria-label="Toggle menu"
          >
            {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <div 
        className={`lg:hidden absolute top-full left-0 w-full bg-gradient-to-b from-white to-orange-50/50 backdrop-blur-lg border-b-2 border-orange-200 transition-all duration-300 ${
          isMobileMenuOpen ? 'opacity-100 visible' : 'opacity-0 invisible'
        }`}
      >
        <div className="max-w-7xl mx-auto px-6 py-6 space-y-3">
          {navLinks.map((link, index) => {
            const colors = ['text-orange-500', 'text-teal-500', 'text-purple-500', 'text-amber-500', 'text-cyan-500', 'text-rose-500'][index];
            return (
              <Link
                key={link.to}
                to={link.to}
                onClick={() => setIsMobileMenuOpen(false)}
                className={`block py-3 font-semibold transition-colors border-b border-orange-100 ${
                  isActive(link.to) ? colors : 'text-gray-700 hover:text-gray-900'
                }`}
              >
                {link.label}
              </Link>
            );
          })}
          <a 
            href="tel:072316039493" 
            className="mt-4 w-full bg-gradient-to-r from-orange-500 via-rose-500 to-purple-500 text-white px-6 py-4 rounded-xl flex items-center justify-center font-bold shadow-lg"
          >
            <Phone size={18} className="mr-2" />
            07231 60 39 493
          </a>
        </div>
      </div>
    </nav>
  );
};
