import React from 'react';
import { Link } from 'react-router-dom';
import { Phone } from 'lucide-react';
import { Logo } from './Logo'; // Hier ist dein Logo-Import

export const Navbar = () => {
  return (
    <nav className="fixed w-full top-0 z-50 bg-white border-b border-gray-100 h-20 flex items-center relative">
      <div className="max-w-7xl mx-auto px-6 w-full flex justify-between items-center h-full">
        
        {/* --- LINKS: LOGO --- */}
        <div className="flex items-center z-10">
          <Link to="/" className="flex items-center hover:opacity-80 transition-opacity">
            <Logo />
          </Link>
        </div>
        
        {/* --- MITTE: TEXT-LINKS (ABSOLUT ZENTRIERT, BOLD & ANIMIERT) --- */}
        <div className="absolute left-1/2 -translate-x-1/2 flex space-x-10 font-bold text-sm text-gray-800">
          <Link to="/unternehmen" className="relative group text-brand-orange">
            Für Unternehmen
            <span className="absolute left-0 -bottom-1.5 w-full h-0.5 bg-brand-orange scale-x-100 transition-transform origin-left"></span>
          </Link>
          <Link to="/fuer-bewerber" className="relative group hover:text-brand-orange transition-colors">
            Für Bewerber
            <span className="absolute left-0 -bottom-1.5 w-full h-0.5 bg-brand-orange scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left"></span>
          </Link>
          <Link to="/jobs" className="relative group hover:text-brand-orange transition-colors">
            Jobbörse
            <span className="absolute left-0 -bottom-1.5 w-full h-0.5 bg-brand-orange scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left"></span>
          </Link>
          <Link to="/ueber-uns" className="relative group hover:text-brand-orange transition-colors">
            Über uns
            <span className="absolute left-0 -bottom-1.5 w-full h-0.5 bg-brand-orange scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left"></span>
          </Link>
          <Link to="/kontakt" className="relative group hover:text-brand-orange transition-colors">
            Kontakt
            <span className="absolute left-0 -bottom-1.5 w-full h-0.5 bg-brand-orange scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left"></span>
          </Link>
        </div>

        {/* --- RECHTS: KONTAKT BUTTON --- */}
        <div className="flex items-center z-10">
           <a href="tel:072316039493" className="bg-gray-900 text-white px-5 py-3 rounded flex items-center font-bold text-sm tracking-wide hover:bg-brand-orange transition-colors">
             <Phone size={18} className="mr-2.5 text-white" />
             07231 60 39 493
           </a>
        </div>
      </div>
    </nav>
  );
};