import React from 'react';
import { motion } from 'framer-motion';
import { NavLink } from 'react-router-dom';
import { MapPin, Target, Heart, Zap, ArrowRight, Mail, Phone, Flame } from 'lucide-react';
import { SEO } from '../components/SEO';

const fadeIn = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0 }
};

const TEAM_MEMBERS = [
  {
    name: "Arina Karakus",
    role: "Geschaftsfuhrung",
    email: "info@persoflex-gmbh.de",
    phone: "07231 60 39 493",
    imageSrc: "/bilder/arina_karakus.webp"
  },
  {
    name: "Salman Karakus",
    role: "Geschaftsleitung",
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
        title="Uber PersoFlex GmbH | Ihr Personaldienstleister in Pforzheim"
        description="Lernen Sie das Team hinter PersoFlex kennen. Wir stehen fur faire Zeitarbeit, Menschlichkeit & Prazision in der Personalvermittlung im Enzkreis."
      />
      
      {/* Hero Section */}
      <section className="relative py-24 md:py-32 overflow-hidden bg-gray-50">
        {/* Subtle Background Effect */}
        <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-orange-500/5 rounded-full blur-[150px]"></div>
        
        <div className="max-w-7xl mx-auto px-6 relative z-10 text-center md:text-left">
          <motion.div
            initial="hidden"
            animate="visible"
            transition={{ duration: 0.6 }}
            variants={fadeIn}
          >
            <span className="inline-flex items-center gap-2 py-2 px-4 bg-orange-50 text-orange-600 border border-orange-200 text-xs font-semibold uppercase tracking-widest mb-6 rounded-full">
              <Flame size={14} />
              Uber PersoFlex
            </span>
            <h1 className="text-4xl md:text-6xl font-black mb-6 leading-tight max-w-5xl text-gray-900">
              Wir verbinden <br/>
              <span className="text-orange-500">Menschen & Visionen.</span>
            </h1>
            <p className="text-xl text-gray-600 max-w-2xl mb-10 leading-relaxed">
              Seit unserer Grundung stehen wir fur eine moderne, faire und transparente Personaldienstleistung in Pforzheim und dem Enzkreis. Wir sind kein anonymer Grosskonzern, sondern Ihr Partner vor Ort.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Mission Section */}
      <section className="py-24 relative bg-white overflow-hidden">
        <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-2 gap-16 items-center relative">
          
          {/* Visual Side */}
          <motion.div 
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="relative"
          >
            <div className="aspect-square md:aspect-[4/3] bg-gray-100 rounded-2xl overflow-hidden relative border border-gray-200 shadow-lg">
              <img 
                src="/bilder/buero_pforzheim.webp"
                alt="PersoFlex Teammeeting im Buro Pforzheim - Personalvermittlung"
                className="w-full h-full object-cover"
                width="800"
                height="600"
                loading="lazy"
              />
              {/* Overlay Box */}
              <div className="absolute bottom-6 left-6 bg-orange-500 text-white p-5 rounded-xl shadow-lg max-w-xs">
                <p className="font-black text-3xl mb-1">100%</p>
                <p className="text-sm font-medium">Leidenschaft fur Pforzheim</p>
              </div>
            </div>
          </motion.div>

          {/* Text Side */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl md:text-4xl font-black text-gray-900 mb-6">
              Mehr als nur <span className="text-orange-500">Personalvermittlung.</span>
            </h2>
            <div className="space-y-6 text-gray-600 text-lg leading-relaxed">
              <p>
                PersoFlex wurde mit dem Ziel gegrundet, den Arbeitsmarkt in der Region Pforzheim menschlicher und effizienter zu gestalten. Wir glauben daran, dass Zeitarbeit ein Sprungbrett ist - keine Sackgasse.
              </p>
              <p>
                Fur Unternehmen sind wir der Problemloser, wenn es brennt. Fur Bewerber sind wir der Karriere-Coach, der Turen offnet.
              </p>
              <ul className="space-y-4 mt-8">
                {[
                  { icon: <MapPin size={20} />, text: "Stark verwurzelt in Pforzheim & Enzkreis" },
                  { icon: <Target size={20} />, text: "Prazises Matching statt Massenabfertigung" },
                  { icon: <Zap size={20} />, text: "Reaktionszeit unter 24 Stunden" }
                ].map((item, idx) => (
                  <li key={idx} className="flex items-center gap-4 font-semibold text-gray-900">
                    <div className="w-10 h-10 rounded-lg bg-orange-100 text-orange-500 flex items-center justify-center">{item.icon}</div>
                    {item.text}
                  </li>
                ))}
              </ul>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Values Grid */}
      <section className="py-24 relative bg-gray-50 overflow-hidden">
        <div className="max-w-7xl mx-auto px-6 relative z-10">
          <div className="text-center mb-16">
            <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-orange-50 border border-orange-200 text-orange-600 text-sm font-semibold uppercase tracking-wider mb-4">
              Was uns antreibt
            </span>
            <h2 className="text-3xl md:text-4xl font-black text-gray-900">Unsere Werte</h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0 }}
              className="bg-white p-8 rounded-2xl border border-gray-200 hover:border-orange-300 hover:shadow-lg transition-all group"
            >
              <div className="w-14 h-14 rounded-xl bg-orange-500 flex items-center justify-center mb-6 group-hover:scale-105 transition-transform">
                <Target className="text-white" size={28} strokeWidth={1.5} />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Prazision</h3>
              <p className="text-gray-600">
                Wir schicken Ihnen nicht "irgendjemanden". Wir prufen Skills, Erfahrung und Personlichkeit genau, bevor wir Vorschlage machen.
              </p>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="bg-white p-8 rounded-2xl border border-gray-200 hover:border-orange-300 hover:shadow-lg transition-all group"
            >
              <div className="w-14 h-14 rounded-xl bg-orange-500 flex items-center justify-center mb-6 group-hover:scale-105 transition-transform">
                <Heart className="text-white" size={28} strokeWidth={1.5} />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Menschlichkeit</h3>
              <p className="text-gray-600">
                Hinter jedem Lebenslauf steckt ein Mensch. Wir behandeln Bewerber mit Respekt, zahlen punktlich und kommunizieren auf Augenhohe.
              </p>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="bg-white p-8 rounded-2xl border border-gray-200 hover:border-orange-300 hover:shadow-lg transition-all group"
            >
              <div className="w-14 h-14 rounded-xl bg-orange-500 flex items-center justify-center mb-6 group-hover:scale-105 transition-transform">
                <Zap className="text-white" size={28} strokeWidth={1.5} />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Geschwindigkeit</h3>
              <p className="text-gray-600">
                Zeit ist Geld. Unsere Prozesse sind digital und schlank, damit Sie schnellstmoglich die Unterstutzung bekommen, die Sie brauchen.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-24 bg-white overflow-hidden">
        <div className="max-w-7xl mx-auto px-6 relative">
          <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-6">
            <div>
              <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-orange-50 border border-orange-200 text-orange-600 text-sm font-semibold uppercase tracking-widest mb-4">Das Team</span>
              <h2 className="text-4xl font-black text-gray-900">Gesichter hinter PersoFlex.</h2>
            </div>
            <p className="text-gray-600 max-w-md text-right md:text-left">
              Kompetent, freundlich und immer fur Sie erreichbar. Wir freuen uns darauf, Sie kennenzulernen.
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
                <div className="aspect-[3/4] bg-gray-100 rounded-2xl overflow-hidden relative mb-6 border border-gray-200 hover:border-orange-300 transition-all shadow-md hover:shadow-lg">
                   <img 
                      src={member.imageSrc} 
                      alt={`Portrait von ${member.name} - ${member.role} bei PersoFlex Pforzheim`}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                      width="400"
                      height="500"
                      loading="lazy"
                   />
                  
                  {/* Hover Actions */}
                  <div className="absolute inset-0 bg-gradient-to-t from-gray-900/80 via-gray-900/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end justify-center pb-8 gap-4">
                     <a href={`mailto:${member.email}`} className="bg-orange-500 hover:bg-orange-600 p-3 rounded-lg text-white transition-colors shadow-md" title="E-Mail senden">
                       <Mail size={20} />
                     </a>
                     <a href={`tel:${member.phone.replace(/\s/g, '')}`} className="bg-orange-500 hover:bg-orange-600 p-3 rounded-lg text-white transition-colors shadow-md" title="Anrufen">
                       <Phone size={20} />
                     </a>
                  </div>
                </div>

                {/* Info */}
                <h3 className="text-xl font-bold text-gray-900">{member.name}</h3>
                <p className="text-orange-500 font-semibold text-sm uppercase tracking-wide">{member.role}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 relative overflow-hidden bg-gray-900">
        <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.03)_1px,transparent_1px)] bg-[size:64px_64px]"></div>
        <div className="absolute top-0 left-1/4 w-[400px] h-[400px] bg-orange-500/10 rounded-full blur-[150px]"></div>
        
        <div className="max-w-4xl mx-auto px-6 text-center relative z-10">
          <h2 className="text-3xl md:text-4xl font-black text-white mb-6">
            Wollen Sie Teil unserer Erfolgsgeschichte werden?
          </h2>
          <p className="text-gray-400 mb-8 max-w-2xl mx-auto">
            Ob Sie Personal suchen oder einen neuen Job - wir sind fur Sie da.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
             <NavLink to="/kontakt" className="group inline-flex items-center justify-center gap-2 bg-orange-500 hover:bg-orange-600 text-white px-8 py-4 rounded-xl font-semibold hover:shadow-lg transition-all">
               Kontakt aufnehmen
               <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
             </NavLink>
             <NavLink to="/jobs" className="inline-flex items-center justify-center gap-2 bg-transparent border border-gray-600 text-white px-8 py-4 rounded-xl font-semibold hover:bg-gray-800 transition-all">
               Jobs ansehen
             </NavLink>
          </div>
        </div>
      </section>

    </div>
  );
};
