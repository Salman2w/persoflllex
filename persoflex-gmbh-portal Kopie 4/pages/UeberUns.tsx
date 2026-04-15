import React from 'react';
import { motion } from 'framer-motion';
import { NavLink } from 'react-router-dom';
import { MapPin, Target, Heart, Zap, ArrowRight, Mail, Phone, Flame, Shield, Users } from 'lucide-react';
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
    <div className="min-h-screen bg-gradient-to-b from-amber-50 via-white to-white pt-[80px]">
      <SEO 
        title="Uber PersoFlex GmbH | Ihr Personaldienstleister in Pforzheim"
        description="Lernen Sie das Team hinter PersoFlex kennen. Wir stehen fur faire Zeitarbeit, Menschlichkeit & Prazision in der Personalvermittlung im Enzkreis."
      />
      
      {/* Hero Section */}
      <section className="relative py-24 md:py-32 overflow-hidden">
        {/* Background Effects */}
        <div className="absolute inset-0 bg-gradient-to-br from-orange-100/50 via-amber-50/30 to-transparent"></div>
        <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-orange-400/20 rounded-full blur-[150px]"></div>
        <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-teal-400/15 rounded-full blur-[120px]"></div>
        <div className="absolute top-1/2 left-1/3 w-[300px] h-[300px] bg-rose-400/10 rounded-full blur-[100px]"></div>
        
        <div className="max-w-7xl mx-auto px-6 relative z-10 text-center md:text-left">
          <motion.div
            initial="hidden"
            animate="visible"
            transition={{ duration: 0.6 }}
            variants={fadeIn}
          >
            <span className="inline-flex items-center gap-2 py-2 px-5 bg-gradient-to-r from-orange-100 to-amber-100 text-orange-600 border border-orange-200 text-xs font-bold uppercase tracking-widest mb-6 rounded-full shadow-sm">
              <Flame size={14} />
              Uber PersoFlex
            </span>
            <h1 className="text-4xl md:text-6xl font-black mb-6 leading-tight max-w-5xl text-gray-900">
              Wir verbinden <br/>
              <span className="text-gradient-flame">
                Menschen & Visionen.
              </span>
            </h1>
            <p className="text-xl text-gray-600 max-w-2xl mb-10 leading-relaxed">
              Seit unserer Grundung stehen wir fur eine moderne, faire und transparente Personaldienstleistung in Pforzheim und dem Enzkreis. Wir sind kein anonymer Grosskonzern, sondern Ihr Partner vor Ort.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Mission Section */}
      <section className="py-24 relative bg-gradient-to-br from-teal-50 via-cyan-50/50 to-white overflow-hidden">
        <div className="absolute top-0 right-0 w-[400px] h-[400px] bg-teal-400/10 rounded-full blur-[120px]"></div>
        <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-2 gap-16 items-center relative">
          
          {/* Visual Side */}
          <motion.div 
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="relative"
          >
            <div className="aspect-square md:aspect-[4/3] bg-gradient-to-br from-teal-100 to-cyan-100 rounded-3xl overflow-hidden relative border-2 border-teal-200 shadow-xl">
              <img 
                src="/bilder/buero_pforzheim.webp"
                alt="PersoFlex Teammeeting im Buro Pforzheim - Personalvermittlung"
                className="w-full h-full object-cover"
                width="800"
                height="600"
                loading="lazy"
              />
              {/* Overlay Box */}
              <div className="absolute bottom-8 left-8 bg-gradient-to-r from-teal-500 to-cyan-500 text-white p-6 rounded-2xl shadow-2xl max-w-xs">
                <p className="font-black text-3xl mb-1">100%</p>
                <p className="text-sm font-medium uppercase tracking-wider">Leidenschaft fur Pforzheim</p>
              </div>
            </div>
            {/* Decorations */}
            <div className="absolute -top-4 -right-4 w-24 h-24 bg-teal-400/30 rounded-full blur-2xl"></div>
            <div className="absolute -bottom-4 -left-4 w-16 h-16 bg-cyan-400/30 rounded-full blur-xl"></div>
          </motion.div>

          {/* Text Side */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl md:text-4xl font-black text-gray-900 mb-6">
              Mehr als nur <br/>
              <span className="text-gradient-flame">Personalvermittlung.</span>
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
                  { icon: <MapPin size={20} />, text: "Stark verwurzelt in Pforzheim & Enzkreis", color: "bg-orange-100 text-orange-500" },
                  { icon: <Target size={20} />, text: "Prazises Matching statt Massenabfertigung", color: "bg-teal-100 text-teal-500" },
                  { icon: <Zap size={20} />, text: "Reaktionszeit unter 24 Stunden", color: "bg-amber-100 text-amber-500" }
                ].map((item, idx) => (
                  <li key={idx} className="flex items-center gap-4 font-bold text-gray-900">
                    <div className={`w-10 h-10 rounded-xl ${item.color} flex items-center justify-center`}>{item.icon}</div>
                    {item.text}
                  </li>
                ))}
              </ul>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Values Grid */}
      <section className="py-24 relative bg-gradient-to-br from-rose-50 via-orange-50 to-amber-50 overflow-hidden">
        <div className="absolute top-0 left-0 w-[400px] h-[400px] bg-rose-400/10 rounded-full blur-[120px]"></div>
        <div className="absolute bottom-0 right-0 w-[400px] h-[400px] bg-amber-400/10 rounded-full blur-[120px]"></div>
        
        <div className="max-w-7xl mx-auto px-6 relative z-10">
          <div className="text-center mb-16">
            <span className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-gradient-to-r from-rose-100 to-pink-100 border border-rose-200 text-rose-600 text-sm font-semibold uppercase tracking-wider mb-4">
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
              className="bg-white p-10 rounded-3xl border-2 border-orange-200 hover:border-orange-400 hover:shadow-xl transition-all group"
            >
              <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-orange-500 to-amber-500 flex items-center justify-center mb-6 shadow-lg group-hover:scale-110 transition-transform">
                <Target className="text-white" size={32} strokeWidth={1.5} />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">Prazision</h3>
              <p className="text-gray-600">
                Wir schicken Ihnen nicht "irgendjemanden". Wir prufen Skills, Erfahrung und Personlichkeit genau, bevor wir Vorschlage machen.
              </p>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="bg-white p-10 rounded-3xl border-2 border-rose-200 hover:border-rose-400 hover:shadow-xl transition-all group relative overflow-hidden"
            >
              <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-rose-500 to-pink-500 flex items-center justify-center mb-6 shadow-lg group-hover:scale-110 transition-transform">
                <Heart className="text-white" size={32} strokeWidth={1.5} />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4 relative z-10">Menschlichkeit</h3>
              <p className="text-gray-600 relative z-10">
                Hinter jedem Lebenslauf steckt ein Mensch. Wir behandeln Bewerber mit Respekt, zahlen punktlich und kommunizieren auf Augenhohe.
              </p>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="bg-white p-10 rounded-3xl border-2 border-amber-200 hover:border-amber-400 hover:shadow-xl transition-all group"
            >
              <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-amber-500 to-yellow-500 flex items-center justify-center mb-6 shadow-lg group-hover:scale-110 transition-transform">
                <Zap className="text-white" size={32} strokeWidth={1.5} />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">Geschwindigkeit</h3>
              <p className="text-gray-600">
                Zeit ist Geld. Unsere Prozesse sind digital und schlank, damit Sie schnellstmoglich die Unterstutzung bekommen, die Sie brauchen.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-24 bg-gradient-to-br from-purple-50 via-pink-50/50 to-orange-50/30 overflow-hidden">
        <div className="absolute top-0 right-0 w-[400px] h-[400px] bg-purple-400/10 rounded-full blur-[120px]"></div>
        <div className="max-w-7xl mx-auto px-6 relative">
          <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-6">
            <div>
              <span className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-gradient-to-r from-purple-100 to-pink-100 border border-purple-200 text-purple-600 text-sm font-bold uppercase tracking-widest mb-4">Das Team</span>
              <h2 className="text-4xl font-black text-gray-900">Gesichter hinter PersoFlex.</h2>
            </div>
            <p className="text-gray-600 max-w-md text-right md:text-left">
              Kompetent, freundlich und immer fur Sie erreichbar. Wir freuen uns darauf, Sie kennenzulernen.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {TEAM_MEMBERS.map((member, idx) => {
              const borderColors = ['border-orange-300 hover:border-orange-500', 'border-teal-300 hover:border-teal-500', 'border-purple-300 hover:border-purple-500', 'border-pink-300 hover:border-pink-500'][idx];
              const btnColors = ['from-orange-500 to-amber-500', 'from-teal-500 to-cyan-500', 'from-purple-500 to-pink-500', 'from-pink-500 to-rose-500'][idx];
              const roleColors = ['text-orange-500', 'text-teal-500', 'text-purple-500', 'text-pink-500'][idx];
              return (
                <motion.div 
                  key={idx}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: idx * 0.1 }}
                  className="group relative"
                >
                  {/* Image Area */}
                  <div className={`aspect-[3/4] bg-gradient-to-br from-gray-100 to-gray-50 rounded-3xl overflow-hidden relative mb-6 border-2 ${borderColors} transition-all shadow-lg hover:shadow-xl`}>
                     <img 
                        src={member.imageSrc} 
                        alt={`Portrait von ${member.name} - ${member.role} bei PersoFlex Pforzheim`}
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                        width="400"
                        height="500"
                        loading="lazy"
                     />
                    
                    {/* Hover Actions */}
                    <div className="absolute inset-0 bg-gradient-to-t from-gray-900/90 via-gray-900/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end justify-center pb-8 gap-4">
                       <a href={`mailto:${member.email}`} className={`bg-gradient-to-r ${btnColors} p-3 rounded-xl text-white hover:scale-110 transition-transform shadow-lg`} title="E-Mail senden">
                         <Mail size={20} />
                       </a>
                       <a href={`tel:${member.phone.replace(/\s/g, '')}`} className={`bg-gradient-to-r ${btnColors} p-3 rounded-xl text-white hover:scale-110 transition-transform shadow-lg`} title="Anrufen">
                         <Phone size={20} />
                       </a>
                    </div>
                  </div>

                  {/* Info */}
                  <h3 className="text-xl font-bold text-gray-900">{member.name}</h3>
                  <p className={`${roleColors} font-bold text-sm uppercase tracking-wide mb-1`}>{member.role}</p>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 relative overflow-hidden bg-gradient-to-r from-orange-500 via-rose-500 to-purple-600">
        <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.1)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.1)_1px,transparent_1px)] bg-[size:32px_32px]"></div>
        <div className="absolute top-0 left-1/4 w-[400px] h-[400px] bg-yellow-400/20 rounded-full blur-[120px]"></div>
        <div className="absolute bottom-0 right-1/4 w-[400px] h-[400px] bg-pink-400/20 rounded-full blur-[120px]"></div>
        
        <div className="max-w-4xl mx-auto px-6 text-center relative z-10">
          <h2 className="text-3xl md:text-5xl font-black text-white mb-8 drop-shadow-lg">
            Wollen Sie Teil unserer Erfolgsgeschichte werden?
          </h2>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
             <NavLink to="/kontakt" className="group inline-flex items-center justify-center gap-2 bg-white text-gray-900 px-10 py-5 rounded-2xl font-bold hover:shadow-[0_8px_40px_rgba(255,255,255,0.3)] hover:scale-105 transition-all">
               Kontakt aufnehmen
               <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
             </NavLink>
             <NavLink to="/jobs" className="inline-flex items-center justify-center gap-2 bg-white/20 backdrop-blur-sm border-2 border-white/40 text-white px-10 py-5 rounded-2xl font-bold hover:bg-white/30 transition-all">
               Jobs ansehen
             </NavLink>
          </div>
        </div>
      </section>

    </div>
  );
};
