import React from 'react';
import { motion } from 'framer-motion';
import { NavLink } from 'react-router-dom';
import { MapPin, Target, Heart, Zap, ArrowRight, Mail, Phone, Linkedin } from 'lucide-react';
import { SEO } from '../components/SEO';

const fadeIn = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0 }
};

const TEAM_MEMBERS = [
  {
    name: "Arina Karakus",
    role: "Geschäftsführung",
    email: "info@persoflex-gmbh.de",
    phone: "07231 60 39 493",
    // Placeholder image URL
    imageSrc: "/bilder/arina_karakus.webp"
  },
  {
    name: "Salman Karakus",
    role: "Geschäftsleitung",
    email: "salman.karakus@persoflex-gmbh.de",
    phone: "07231 60 39 493",
    imageSrc: "/bilder/salman_karakus.webp"
  },
  {
    name: "Albert Budagyan",
    role: "Vertriebsleitung",
    email: "albert.budagyan@persoflex-gmbh.de",
    phone: "07231 60 39 493",
    imageSrc: "/bilder/albert_budagyan.webp"
  },
  {
    name: "Samira Kampen",
    role: "Recruiting & HR",
    email: "samira.vkampen@persoflex-gmbh.de",
    phone: "07231 60 39 493",
    imageSrc: "/bilder/samira_van_kampen.webp"
  }
];

export const UeberUns: React.FC = () => {
  return (
    <div className="min-h-screen bg-white pt-[80px]">
      <SEO 
        title="Über PersoFlex GmbH | Ihr Personaldienstleister in Pforzheim"
        description="Lernen Sie das Team hinter PersoFlex kennen. Wir stehen für faire Zeitarbeit, Menschlichkeit & Präzision in der Personalvermittlung im Enzkreis."
      />
      
      {/* 1. Hero Section - Corporate Dark Style (Updated to match other pages strictly) */}
      <section className="bg-brand-black text-white py-20 md:py-32 relative overflow-hidden">
        {/* Abstract Background Element - Positioned Top Right to match Corporate Design */}
        <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-brand-orange opacity-10 rounded-full blur-[120px] translate-x-1/2 -translate-y-1/2"></div>
        
        <div className="max-w-7xl mx-auto px-6 relative z-10 text-center md:text-left">
          <motion.div
            initial="hidden"
            animate="visible"
            transition={{ duration: 0.6 }}
            variants={fadeIn}
          >
            <span className="inline-block py-1 px-3 bg-brand-orange/20 text-brand-orange border border-brand-orange text-xs font-bold uppercase tracking-widest mb-6 rounded-sm">
              Über PersoFlex
            </span>
            <h1 className="text-4xl md:text-6xl font-black mb-6 leading-tight max-w-5xl">
              Wir verbinden <br/>
              <span className="text-brand-orange">
                Menschen & Visionen.
              </span>
            </h1>
            <p className="text-xl text-gray-400 max-w-2xl mb-10 leading-relaxed">
              Seit unserer Gründung stehen wir für eine moderne, faire und transparente Personaldienstleistung in Pforzheim und dem Enzkreis. Wir sind kein anonymer Großkonzern, sondern Ihr Partner vor Ort.
            </p>
          </motion.div>
        </div>
      </section>

      {/* 2. Our Mission (Split Layout) */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
          
          {/* Visual Side */}
          <motion.div 
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="relative"
          >
            <div className="aspect-square md:aspect-[4/3] bg-gray-100 rounded-lg overflow-hidden relative shadow-2xl">
              {/* Image Placeholder with dimensions */}
              <img 
                src="/bilder/buero_pforzheim.webp"
                alt="PersoFlex Teammeeting im Büro Pforzheim - Personalvermittlung"
                className="w-full h-full object-cover"
                width="800"
                height="600"
                loading="lazy"
              />
              {/* Overlay Box */}
              <div className="absolute bottom-8 left-8 bg-brand-orange text-white p-6 rounded shadow-lg max-w-xs">
                <p className="font-black text-2xl mb-1">100%</p>
                <p className="text-sm font-medium uppercase tracking-wider">Leidenschaft für Pforzheim</p>
              </div>
            </div>
            {/* Dots Decoration */}
            <div className="absolute -top-6 -right-6 w-24 h-24 bg-[radial-gradient(#ea580c_2px,transparent_2px)] [background-size:12px_12px] opacity-50"></div>
          </motion.div>

          {/* Text Side */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl md:text-4xl font-black text-brand-black mb-6">
              Mehr als nur <br/>Personalvermittlung.
            </h2>
            <div className="space-y-6 text-gray-600 text-lg leading-relaxed">
              <p>
                PersoFlex wurde mit dem Ziel gegründet, den Arbeitsmarkt in der Region Pforzheim menschlicher und effizienter zu gestalten. Wir glauben daran, dass Zeitarbeit ein Sprungbrett ist – keine Sackgasse.
              </p>
              <p>
                Für Unternehmen sind wir der Problemlöser, wenn es brennt. Für Bewerber sind wir der Karriere-Coach, der Türen öffnet.
              </p>
              <ul className="space-y-4 mt-8">
                {[
                  { icon: <MapPin size={20} />, text: "Stark verwurzelt in Pforzheim & Enzkreis" },
                  { icon: <Target size={20} />, text: "Präzises Matching statt Massenabfertigung" },
                  { icon: <Zap size={20} />, text: "Reaktionszeit unter 24 Stunden" }
                ].map((item, idx) => (
                  <li key={idx} className="flex items-center gap-4 font-bold text-brand-black">
                    <div className="text-brand-orange">{item.icon}</div>
                    {item.text}
                  </li>
                ))}
              </ul>
            </div>
          </motion.div>
        </div>
      </section>

      {/* 3. Values Grid */}
      <section className="bg-gray-50 py-24">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-black text-brand-black">Unsere Werte</h2>
            <div className="w-20 h-1 bg-brand-orange mx-auto mt-6"></div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white p-10 rounded-lg shadow-sm hover:shadow-xl transition-shadow border-t-4 border-brand-black group">
              <Target className="text-brand-orange mb-6 group-hover:scale-110 transition-transform" size={48} strokeWidth={1.5} />
              <h3 className="text-xl font-bold mb-4">Präzision</h3>
              <p className="text-gray-600">
                Wir schicken Ihnen nicht "irgendjemanden". Wir prüfen Skills, Erfahrung und Persönlichkeit genau, bevor wir Vorschläge machen.
              </p>
            </div>
            <div className="bg-white p-10 rounded-lg shadow-sm hover:shadow-xl transition-shadow border-t-4 border-brand-orange group">
              <Heart className="text-brand-orange mb-6 group-hover:scale-110 transition-transform" size={48} strokeWidth={1.5} />
              <h3 className="text-xl font-bold mb-4">Menschlichkeit</h3>
              <p className="text-gray-600">
                Hinter jedem Lebenslauf steckt ein Mensch. Wir behandeln Bewerber mit Respekt, zahlen pünktlich und kommunizieren auf Augenhöhe.
              </p>
            </div>
            <div className="bg-white p-10 rounded-lg shadow-sm hover:shadow-xl transition-shadow border-t-4 border-brand-black group">
              <Zap className="text-brand-orange mb-6 group-hover:scale-110 transition-transform" size={48} strokeWidth={1.5} />
              <h3 className="text-xl font-bold mb-4">Geschwindigkeit</h3>
              <p className="text-gray-600">
                Zeit ist Geld. Unsere Prozesse sind digital und schlank, damit Sie schnellstmöglich die Unterstützung bekommen, die Sie brauchen.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 4. Team Section */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-6">
            <div>
              <span className="text-brand-orange font-bold uppercase tracking-widest text-sm mb-2 block">Das Team</span>
              <h2 className="text-4xl font-black text-brand-black">Gesichter hinter PersoFlex.</h2>
            </div>
            <p className="text-gray-500 max-w-md text-right md:text-left">
              Kompetent, freundlich und immer für Sie erreichbar. Wir freuen uns darauf, Sie kennenzulernen.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {TEAM_MEMBERS.map((member, idx) => (
              <motion.div 
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1 }}
                className="group relative"
              >
                {/* Image Area */}
                <div className="aspect-[3/4] bg-gray-100 rounded-lg overflow-hidden relative mb-6 shadow-md group-hover:shadow-xl transition-all duration-300">
                   {/* Placeholder Image with dimensions */}
                   <img 
                      src={member.imageSrc} 
                      alt={`Portrait von ${member.name} - ${member.role} bei PersoFlex Pforzheim`}
                      className="w-full h-full object-cover"
                      width="400"
                      height="500"
                      loading="lazy"
                   />
                  
                  {/* Hover Actions */}
                  <div className="absolute inset-0 bg-brand-black/80 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center gap-4">
                     <a href={`mailto:${member.email}`} className="bg-brand-orange p-3 rounded-full text-white hover:bg-white hover:text-brand-orange transition-colors" title="E-Mail senden">
                       <Mail size={20} />
                     </a>
                     <a href={`tel:${member.phone.replace(/\s/g, '')}`} className="bg-brand-orange p-3 rounded-full text-white hover:bg-white hover:text-brand-orange transition-colors" title="Anrufen">
                       <Phone size={20} />
                     </a>
                  </div>
                </div>

                {/* Info */}
                <h3 className="text-xl font-bold text-brand-black">{member.name}</h3>
                <p className="text-brand-orange font-medium text-sm uppercase tracking-wide mb-1">{member.role}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* 5. CTA Bar */}
      <section className="bg-brand-black py-20 border-t border-brand-gray">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h2 className="text-3xl md:text-4xl font-black text-white mb-8">
            Wollen Sie Teil unserer Erfolgsgeschichte werden?
          </h2>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
             <NavLink to="/kontakt" className="bg-brand-orange text-white px-8 py-4 rounded font-bold hover:bg-white hover:text-brand-black transition-colors">
               Kontakt aufnehmen
             </NavLink>
             <NavLink to="/jobs" className="bg-transparent border border-white/30 text-white px-8 py-4 rounded font-bold hover:bg-white/10 transition-colors">
               Jobs ansehen
             </NavLink>
          </div>
        </div>
      </section>

    </div>
  );
};
