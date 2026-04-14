import React from 'react';
import { NavLink } from 'react-router-dom';
import { MapPin, Phone, Mail, Shield, FileText, ArrowRight, Linkedin } from 'lucide-react';

export const Footer: React.FC = () => {
  return (
    <footer className="relative bg-gray-50 border-t border-gray-200 overflow-hidden">
      {/* Fire glow effect at top */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-px bg-gradient-to-r from-transparent via-orange-500 to-transparent" />
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[400px] h-32 bg-orange-500/5 blur-3xl" />
      
      <div className="relative pt-20 pb-8">
        <div className="max-w-7xl mx-auto px-6">
          {/* Main Footer Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
            
            {/* Company Info */}
            <div className="lg:col-span-1">
              <NavLink to="/" className="inline-flex items-center gap-3 mb-6 group">
                <img 
                  src="/bilder/logo.webp" 
                  alt="PersoFlex GmbH Logo" 
                  className="h-10 w-auto transition-transform group-hover:scale-105"
                />
              </NavLink>
              <p className="text-gray-600 text-sm leading-relaxed mb-6">
                Ihr starker Partner für Personalvermittlung und Zeitarbeit in Pforzheim und dem Enzkreis. 
                Wir verbinden Industrie, Logistik und Fachkräfte mit Leidenschaft.
              </p>
              <div className="flex gap-3">
                <a 
                  href="https://linkedin.com" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="w-10 h-10 rounded-lg bg-white border border-gray-200 flex items-center justify-center text-gray-500 hover:text-orange-500 hover:border-orange-500/50 transition-all"
                  aria-label="LinkedIn"
                >
                  <Linkedin size={18} />
                </a>
              </div>
            </div>

            {/* Contact */}
            <div>
              <h3 className="text-sm font-bold uppercase tracking-wider text-gray-900 mb-6 flex items-center gap-2">
                <span className="w-8 h-px bg-gradient-to-r from-orange-500 to-transparent" />
                Kontakt
              </h3>
              <ul className="space-y-4">
                <li className="flex items-start gap-3 text-gray-600 group">
                  <MapPin className="text-orange-500 shrink-0 mt-0.5" size={18} />
                  <span className="text-sm group-hover:text-gray-900 transition-colors">
                    PersoFlex GmbH<br />
                    Kiehnlestraße 4<br />
                    75172 Pforzheim
                  </span>
                </li>
                <li className="flex items-center gap-3">
                  <Phone className="text-orange-500 shrink-0" size={18} />
                  <a href="tel:072316039493" className="text-sm text-gray-600 hover:text-orange-500 transition-colors">
                    07231 60 39 493
                  </a>
                </li>
                <li className="flex items-center gap-3">
                  <Mail className="text-orange-500 shrink-0" size={18} />
                  <a href="mailto:info@persoflex-gmbh.de" className="text-sm text-gray-600 hover:text-orange-500 transition-colors">
                    info@persoflex-gmbh.de
                  </a>
                </li>
              </ul>
            </div>

            {/* Quick Links */}
            <div>
              <h3 className="text-sm font-bold uppercase tracking-wider text-gray-900 mb-6 flex items-center gap-2">
                <span className="w-8 h-px bg-gradient-to-r from-orange-500 to-transparent" />
                Navigation
              </h3>
              <ul className="space-y-3">
                {[
                  { to: '/jobs', label: 'Jobbörse' },
                  { to: '/unternehmen', label: 'Für Unternehmen' },
                  { to: '/fuer-bewerber', label: 'Für Bewerber' },
                  { to: '/blog', label: 'Blog' },
                  { to: '/kontakt', label: 'Kontakt' },
                ].map((link) => (
                  <li key={link.to}>
                    <NavLink 
                      to={link.to} 
                      className="text-sm text-gray-600 hover:text-orange-500 transition-colors inline-flex items-center gap-2 group"
                    >
                      <ArrowRight size={14} className="opacity-0 -ml-5 group-hover:opacity-100 group-hover:ml-0 transition-all" />
                      {link.label}
                    </NavLink>
                  </li>
                ))}
              </ul>
            </div>

            {/* Legal */}
            <div>
              <h3 className="text-sm font-bold uppercase tracking-wider text-gray-900 mb-6 flex items-center gap-2">
                <span className="w-8 h-px bg-gradient-to-r from-orange-500 to-transparent" />
                Rechtliches
              </h3>
              <ul className="space-y-3">
                <li>
                  <NavLink to="/impressum" className="flex items-center gap-2 text-sm text-gray-600 hover:text-orange-500 transition-colors">
                    <FileText size={14} /> Impressum
                  </NavLink>
                </li>
                <li>
                  <NavLink to="/datenschutz" className="flex items-center gap-2 text-sm text-gray-600 hover:text-orange-500 transition-colors">
                    <Shield size={14} /> Datenschutz
                  </NavLink>
                </li>
                <li>
                  <NavLink to="/agb" className="flex items-center gap-2 text-sm text-gray-600 hover:text-orange-500 transition-colors">
                    <FileText size={14} /> AGB
                  </NavLink>
                </li>
              </ul>
              
              {/* Trust Badges */}
              <div className="mt-8 pt-6 border-t border-gray-200">
                <p className="text-xs text-gray-500 mb-3">Zertifiziert & Mitglied:</p>
                <div className="flex gap-2 flex-wrap">
                  <span className="px-3 py-1 text-xs bg-white border border-gray-200 rounded-full text-gray-600">
                    GVP Mitglied
                  </span>
                  <span className="px-3 py-1 text-xs bg-white border border-gray-200 rounded-full text-gray-600">
                    AÜG Erlaubnis
                  </span>
                </div>
              </div>
            </div>
          </div>

          {/* Bottom Bar */}
          <div className="pt-8 border-t border-gray-200">
            <div className="flex flex-col md:flex-row justify-between items-center gap-4">
              <p className="text-xs text-gray-500">
                &copy; {new Date().getFullYear()} PersoFlex GmbH. Alle Rechte vorbehalten.
              </p>
              <p className="text-xs text-gray-500">
                Personalvermittlung & Zeitarbeit in Pforzheim | Enzkreis | Baden-Württemberg
              </p>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};
