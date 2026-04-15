import React from 'react';
import { NavLink } from 'react-router-dom';
import { MapPin, Phone, Mail, Shield, FileText, ArrowRight, Linkedin } from 'lucide-react';

export const Footer: React.FC = () => {
  return (
    <footer className="relative bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 overflow-hidden">
      {/* Colorful glow effects */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-1 bg-gradient-to-r from-orange-500 via-amber-400 to-teal-500" />
      <div className="absolute top-0 left-1/4 w-[400px] h-48 bg-orange-500/20 blur-[100px]" />
      <div className="absolute top-0 right-1/4 w-[400px] h-48 bg-teal-500/20 blur-[100px]" />
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[600px] h-32 bg-amber-500/10 blur-[80px]" />
      
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
                  className="h-10 w-auto transition-transform group-hover:scale-105 brightness-0 invert"
                />
              </NavLink>
              <p className="text-slate-400 text-sm leading-relaxed mb-6">
                Ihr starker Partner für Personalvermittlung und Zeitarbeit in Pforzheim und dem Enzkreis. 
                Wir verbinden Industrie, Logistik und Fachkräfte mit Leidenschaft.
              </p>
              <div className="flex gap-3">
                <a 
                  href="https://linkedin.com" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="w-10 h-10 rounded-xl bg-gradient-to-br from-orange-500 to-amber-500 flex items-center justify-center text-white hover:shadow-lg hover:shadow-orange-500/30 hover:scale-110 transition-all"
                  aria-label="LinkedIn"
                >
                  <Linkedin size={18} />
                </a>
              </div>
            </div>

            {/* Contact */}
            <div>
              <h3 className="text-sm font-bold uppercase tracking-wider text-white mb-6 flex items-center gap-2">
                <span className="w-8 h-1 bg-gradient-to-r from-orange-500 to-amber-500 rounded-full" />
                Kontakt
              </h3>
              <ul className="space-y-4">
                <li className="flex items-start gap-3 text-slate-400 group">
                  <div className="w-8 h-8 rounded-lg bg-teal-500/20 flex items-center justify-center shrink-0">
                    <MapPin className="text-teal-400" size={16} />
                  </div>
                  <span className="text-sm group-hover:text-white transition-colors">
                    PersoFlex GmbH<br />
                    Kiehnlestraße 4<br />
                    75172 Pforzheim
                  </span>
                </li>
                <li className="flex items-center gap-3">
                  <div className="w-8 h-8 rounded-lg bg-orange-500/20 flex items-center justify-center shrink-0">
                    <Phone className="text-orange-400" size={16} />
                  </div>
                  <a href="tel:072316039493" className="text-sm text-slate-400 hover:text-orange-400 transition-colors">
                    07231 60 39 493
                  </a>
                </li>
                <li className="flex items-center gap-3">
                  <div className="w-8 h-8 rounded-lg bg-amber-500/20 flex items-center justify-center shrink-0">
                    <Mail className="text-amber-400" size={16} />
                  </div>
                  <a href="mailto:info@persoflex-gmbh.de" className="text-sm text-slate-400 hover:text-amber-400 transition-colors">
                    info@persoflex-gmbh.de
                  </a>
                </li>
              </ul>
            </div>

            {/* Quick Links */}
            <div>
              <h3 className="text-sm font-bold uppercase tracking-wider text-white mb-6 flex items-center gap-2">
                <span className="w-8 h-1 bg-gradient-to-r from-teal-500 to-cyan-500 rounded-full" />
                Navigation
              </h3>
              <ul className="space-y-3">
                {[
                  { to: '/jobs', label: 'Jobbörse', color: 'text-orange-400' },
                  { to: '/unternehmen', label: 'Für Unternehmen', color: 'text-amber-400' },
                  { to: '/fuer-bewerber', label: 'Für Bewerber', color: 'text-teal-400' },
                  { to: '/blog', label: 'Blog', color: 'text-cyan-400' },
                  { to: '/kontakt', label: 'Kontakt', color: 'text-rose-400' },
                ].map((link) => (
                  <li key={link.to}>
                    <NavLink 
                      to={link.to} 
                      className={`text-sm text-slate-400 hover:${link.color} transition-colors inline-flex items-center gap-2 group`}
                    >
                      <ArrowRight size={14} className={`opacity-0 -ml-5 group-hover:opacity-100 group-hover:ml-0 transition-all ${link.color}`} />
                      {link.label}
                    </NavLink>
                  </li>
                ))}
              </ul>
            </div>

            {/* Legal */}
            <div>
              <h3 className="text-sm font-bold uppercase tracking-wider text-white mb-6 flex items-center gap-2">
                <span className="w-8 h-1 bg-gradient-to-r from-rose-500 to-pink-500 rounded-full" />
                Rechtliches
              </h3>
              <ul className="space-y-3">
                <li>
                  <NavLink to="/impressum" className="flex items-center gap-2 text-sm text-slate-400 hover:text-rose-400 transition-colors">
                    <FileText size={14} /> Impressum
                  </NavLink>
                </li>
                <li>
                  <NavLink to="/datenschutz" className="flex items-center gap-2 text-sm text-slate-400 hover:text-rose-400 transition-colors">
                    <Shield size={14} /> Datenschutz
                  </NavLink>
                </li>
                <li>
                  <NavLink to="/agb" className="flex items-center gap-2 text-sm text-slate-400 hover:text-rose-400 transition-colors">
                    <FileText size={14} /> AGB
                  </NavLink>
                </li>
              </ul>
              
              {/* Trust Badges */}
              <div className="mt-8 pt-6 border-t border-slate-700/50">
                <p className="text-xs text-slate-500 mb-3">Zertifiziert & Mitglied:</p>
                <div className="flex gap-2 flex-wrap">
                  <span className="px-3 py-1.5 text-xs bg-gradient-to-r from-teal-500/20 to-cyan-500/20 border border-teal-500/30 rounded-full text-teal-400 font-medium">
                    GVP Mitglied
                  </span>
                  <span className="px-3 py-1.5 text-xs bg-gradient-to-r from-orange-500/20 to-amber-500/20 border border-orange-500/30 rounded-full text-orange-400 font-medium">
                    AÜG Erlaubnis
                  </span>
                </div>
              </div>
            </div>
          </div>

          {/* Bottom Bar */}
          <div className="pt-8 border-t border-slate-700/50">
            <div className="flex flex-col md:flex-row justify-between items-center gap-4">
              <p className="text-xs text-slate-500">
                &copy; {new Date().getFullYear()} <span className="text-gradient-flame font-semibold">PersoFlex GmbH</span>. Alle Rechte vorbehalten.
              </p>
              <p className="text-xs text-slate-500">
                Personalvermittlung & Zeitarbeit in <span className="text-teal-400">Pforzheim</span> | <span className="text-amber-400">Enzkreis</span> | <span className="text-orange-400">Baden-Württemberg</span>
              </p>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};
