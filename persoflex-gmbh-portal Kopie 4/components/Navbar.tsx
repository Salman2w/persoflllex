import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Phone, Menu, X, Flame } from 'lucide-react';

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
          ? 'bg-background/95 backdrop-blur-md border-b border-border shadow-lg shadow-primary/5' 
          : 'bg-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex justify-between items-center h-20">
          
          {/* Logo */}
          <Link to="/" className="flex items-center gap-3 group">
            <div className="relative">
              <Flame className="w-10 h-10 text-primary transition-transform duration-300 group-hover:scale-110" />
              <div className="absolute inset-0 bg-primary/20 blur-xl rounded-full opacity-0 group-hover:opacity-100 transition-opacity" />
            </div>
            <div className="flex flex-col">
              <span className="text-xl font-bold text-foreground tracking-tight">PersoFlex</span>
              <span className="text-xs text-muted-foreground tracking-widest uppercase">GmbH</span>
            </div>
          </Link>
          
          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center gap-8">
            {navLinks.map((link) => (
              <Link 
                key={link.to}
                to={link.to} 
                className={`relative font-medium text-sm transition-colors duration-300 ${
                  isActive(link.to) 
                    ? 'text-primary' 
                    : 'text-muted-foreground hover:text-foreground'
                }`}
              >
                {link.label}
                <span 
                  className={`absolute left-0 -bottom-1 h-0.5 bg-gradient-to-r from-primary to-secondary transition-all duration-300 ${
                    isActive(link.to) ? 'w-full' : 'w-0 group-hover:w-full'
                  }`} 
                />
                {isActive(link.to) && (
                  <span className="absolute left-0 -bottom-1 w-full h-0.5 bg-gradient-to-r from-primary to-secondary" />
                )}
              </Link>
            ))}
          </div>

          {/* CTA Button */}
          <div className="hidden lg:flex items-center gap-4">
            <a 
              href="tel:072316039493" 
              className="group relative overflow-hidden bg-gradient-to-r from-primary to-secondary text-white px-6 py-3 rounded-lg flex items-center font-semibold text-sm transition-all duration-300 hover:shadow-lg hover:shadow-primary/30 hover:scale-105"
            >
              <Phone size={16} className="mr-2" />
              <span className="relative z-10">07231 60 39 493</span>
              <div className="absolute inset-0 bg-gradient-to-r from-secondary to-primary opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            </a>
          </div>

          {/* Mobile Menu Button */}
          <button 
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="lg:hidden p-2 text-foreground hover:text-primary transition-colors"
            aria-label="Toggle menu"
          >
            {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <div 
        className={`lg:hidden absolute top-full left-0 w-full bg-background/98 backdrop-blur-lg border-b border-border transition-all duration-300 ${
          isMobileMenuOpen ? 'opacity-100 visible' : 'opacity-0 invisible'
        }`}
      >
        <div className="max-w-7xl mx-auto px-6 py-6 space-y-4">
          {navLinks.map((link) => (
            <Link
              key={link.to}
              to={link.to}
              onClick={() => setIsMobileMenuOpen(false)}
              className={`block py-3 font-medium transition-colors border-b border-border/50 ${
                isActive(link.to) ? 'text-primary' : 'text-muted-foreground hover:text-foreground'
              }`}
            >
              {link.label}
            </Link>
          ))}
          <a 
            href="tel:072316039493" 
            className="mt-4 w-full bg-gradient-to-r from-primary to-secondary text-white px-6 py-4 rounded-lg flex items-center justify-center font-semibold"
          >
            <Phone size={18} className="mr-2" />
            07231 60 39 493
          </a>
        </div>
      </div>
    </nav>
  );
};
