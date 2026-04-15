import React from 'react';
import { NavLink } from 'react-router-dom';
import { MapPin, Phone, Mail, Shield, FileText, ArrowRight, Linkedin } from 'lucide-react';

export const Footer: React.FC = () => {
  return (
    <footer className="relative bg-gray-900 overflow-hidden" role="contentinfo">
      {/* Orange accent line */}
      <div className="absolute top-0 left-0 w-full h-1 bg-orange-500" />
      
      <div className="relative pt-16 pb-8">
        <div className="max-w-7xl mx-auto px-6">
          {/* Main Footer Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
            
            {/* Company Info */}
            <div className="lg:col-span-1">
              <NavLink to="/" className="inline-flex items-center gap-3 mb-6 group" aria-label="PersoFlex GmbH - Zur Startseite">
                <img 
                  src="/bilder/logo.webp" 
                  alt="PersoFlex GmbH Logo" 
                  className="h-10 w-auto transition-transform group-hover:scale-105 brightness-0 invert"
                  width="150"
                  height="40"
                />
              </NavLink>
              <p className="text-gray-400 text-sm leading-relaxed mb-6">
                Ihr starker Partner für Personalvermittlung und Zeitarbeit in Pforzheim und dem Enzkreis. 
                Wir verbinden Industrie, Logistik und Fachkräfte.
              </p>
              <div className="flex gap-3">
                <a 
                  href="https://linkedin.com/company/persoflex-gmbh" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="w-10 h-10 rounded-lg bg-gray-800 flex items-center justify-center text-gray-400 hover:bg-orange-500 hover:text-white transition-all"
                  aria-label="Besuchen Sie uns auf LinkedIn"
                >
                  <Linkedin size={18} />
                </a>
              </div>
            </div>

            {/* Contact */}
            <div>
              <h3 className="text-sm font-bold uppercase tracking-wider text-white mb-6">
                Kontakt
              </h3>
              <address className="not-italic">
                <ul className="space-y-4">
                  <li className="flex items-start gap-3 text-gray-400 group">
                    <div className="w-8 h-8 rounded-lg bg-gray-800 flex items-center justify-center shrink-0">
                      <MapPin className="text-orange-500" size={16} />
                    </div>
                    <span className="text-sm group-hover:text-white transition-colors">
                      PersoFlex GmbH<br />
                      Kiehnlestraße 4<br />
                      75172 Pforzheim
                    </span>
                  </li>
                  <li className="flex items-center gap-3">
                    <div className="w-8 h-8 rounded-lg bg-gray-800 flex items-center justify-center shrink-0">
                      <Phone className="text-orange-500" size={16} />
                    </div>
                    <a href="tel:072316039493" className="text-sm text-gray-400 hover:text-orange-500 transition-colors">
                      07231 60 39 493
                    </a>
                  </li>
                  <li className="flex items-center gap-3">
                    <div className="w-8 h-8 rounded-lg bg-gray-800 flex items-center justify-center shrink-0">
                      <Mail className="text-orange-500" size={16} />
                    </div>
                    <a href="mailto:info@persoflex-gmbh.de" className="text-sm text-gray-400 hover:text-orange-500 transition-colors">
                      info@persoflex-gmbh.de
                    </a>
                  </li>
                </ul>
              </address>
            </div>

            {/* Quick Links */}
            <nav aria-label="Footer Navigation">
              <h3 className="text-sm font-bold uppercase tracking-wider text-white mb-6">
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
                      className="text-sm text-gray-400 hover:text-orange-500 transition-colors inline-flex items-center gap-2 group"
                    >
                      <ArrowRight size={14} className="opacity-0 -ml-5 group-hover:opacity-100 group-hover:ml-0 transition-all text-orange-500" />
                      {link.label}
                    </NavLink>
                  </li>
                ))}
              </ul>
            </nav>

            {/* Legal */}
            <div>
              <h3 className="text-sm font-bold uppercase tracking-wider text-white mb-6">
                Rechtliches
              </h3>
              <ul className="space-y-3">
                <li>
                  <NavLink to="/impressum" className="flex items-center gap-2 text-sm text-gray-400 hover:text-orange-500 transition-colors">
                    <FileText size={14} /> Impressum
                  </NavLink>
                </li>
                <li>
                  <NavLink to="/datenschutz" className="flex items-center gap-2 text-sm text-gray-400 hover:text-orange-500 transition-colors">
                    <Shield size={14} /> Datenschutz
                  </NavLink>
                </li>
                <li>
                  <NavLink to="/agb" className="flex items-center gap-2 text-sm text-gray-400 hover:text-orange-500 transition-colors">
                    <FileText size={14} /> AGB
                  </NavLink>
                </li>
              </ul>
              
              {/* Trust Badges */}
              <div className="mt-8 pt-6 border-t border-gray-800">
                <p className="text-xs text-gray-500 mb-3">Zertifiziert & Mitglied:</p>
                <div className="flex gap-2 flex-wrap">
                  <span className="px-3 py-1.5 text-xs bg-gray-800 border border-gray-700 rounded-full text-gray-400 font-medium">
                    GVP Mitglied
                  </span>
                  <span className="px-3 py-1.5 text-xs bg-gray-800 border border-gray-700 rounded-full text-gray-400 font-medium">
                    AÜG Erlaubnis
                  </span>
                </div>
              </div>
            </div>
          </div>

          {/* Bottom Bar */}
          <div className="pt-8 border-t border-gray-800">
            <div className="flex flex-col md:flex-row justify-between items-center gap-4">
              <p className="text-xs text-gray-500">
                &copy; {new Date().getFullYear()} <span className="text-orange-500 font-semibold">PersoFlex GmbH</span>. Alle Rechte vorbehalten.
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
