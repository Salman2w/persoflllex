import React from 'react';
import { NavLink } from 'react-router-dom';
import { MapPin, Phone, Mail, Shield, FileText } from 'lucide-react';
import { Logo } from './Logo';

export const Footer: React.FC = () => {
  return (
    <footer className="bg-brand-black text-white pt-16 pb-8 border-t border-brand-dark">
      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-4 gap-12">
        
        {/* Company Info */}
        <div className="col-span-1 md:col-span-1">
          {/* Logo linked to Home, with brightness filter for dark mode footer */}
          <NavLink to="/" className="inline-block mb-6 hover:opacity-80 transition-opacity">
             <div className="brightness-0 invert">
                <Logo />
             </div>
          </NavLink>
          <p className="text-gray-400 text-sm leading-relaxed mb-6">
            Ihr starker Partner für Personalvermittlung und Zeitarbeit in Pforzheim und dem Enzkreis. 
            Wir verbinden Industrie, Logistik und Fachkräfte.
          </p>
        </div>

        {/* Contact (Address mandated by prompt) */}
        <div className="col-span-1 md:col-span-1">
          <h3 className="text-brand-orange font-bold uppercase tracking-wider mb-4 text-sm">Kontakt</h3>
          <ul className="space-y-4">
            <li className="flex items-start gap-3 text-gray-300">
              <MapPin className="text-brand-orange shrink-0 mt-1" size={18} />
              <span>
                PersoFlex GmbH<br />
                Kiehnlestraße 4<br />
                75172 Pforzheim
              </span>
            </li>
            <li className="flex items-center gap-3 text-gray-300">
              <Phone className="text-brand-orange shrink-0" size={18} />
              <a href="tel:072316039493" className="hover:text-white transition-colors">07231 60 39 493</a>
            </li>
            <li className="flex items-center gap-3 text-gray-300">
              <Mail className="text-brand-orange shrink-0" size={18} />
              <a href="mailto:info@persoflex-gmbh.de" className="hover:text-white transition-colors">info@persoflex-gmbh.de</a>
            </li>
          </ul>
        </div>

        {/* Quick Links */}
        <div className="col-span-1 md:col-span-1">
          <h3 className="text-brand-orange font-bold uppercase tracking-wider mb-4 text-sm">Navigation</h3>
          <ul className="space-y-2">
            <li><NavLink to="/jobs" className="text-gray-400 hover:text-white transition-colors">Jobbörse</NavLink></li>
            <li><NavLink to="/unternehmen" className="text-gray-400 hover:text-white transition-colors">Für Unternehmen</NavLink></li>
            <li><NavLink to="/unternehmen/downloads" className="text-gray-400 hover:text-white transition-colors">Downloads</NavLink></li>
            <li><NavLink to="/kontakt" className="text-gray-400 hover:text-white transition-colors">Kontakt</NavLink></li>
          </ul>
        </div>

        {/* Legal */}
        <div className="col-span-1 md:col-span-1">
          <h3 className="text-brand-orange font-bold uppercase tracking-wider mb-4 text-sm">Rechtliches</h3>
          <ul className="space-y-2">
            <li>
              <NavLink to="/impressum" className="flex items-center gap-2 text-gray-400 hover:text-white transition-colors">
                <FileText size={14} /> Impressum
              </NavLink>
            </li>
            <li>
              <NavLink to="/datenschutz" className="flex items-center gap-2 text-gray-400 hover:text-white transition-colors">
                <Shield size={14} /> Datenschutz
              </NavLink>
            </li>
            <li>
              <NavLink to="/agb" className="flex items-center gap-2 text-gray-400 hover:text-white transition-colors">
                <FileText size={14} /> AGB
              </NavLink>
            </li>
          </ul>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-6 mt-16 pt-8 border-t border-brand-gray text-center text-gray-500 text-xs">
        &copy; {new Date().getFullYear()} PersoFlex GmbH. Alle Rechte vorbehalten.
      </div>
    </footer>
  );
};