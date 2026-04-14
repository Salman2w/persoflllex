import React from 'react';
import { NavLink } from 'react-router-dom';
import { CheckCircle, Shield, Users, Clock, Search, UserCheck, Handshake, ArrowRight, Package, Wrench, FileText, Award, MapPin } from 'lucide-react';
import { motion } from 'framer-motion';
import { SEO } from '../components/SEO';

const fadeIn = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0 }
};

export const Unternehmen: React.FC = () => {
  return (
    <div className="min-h-screen bg-white pt-[80px]">
      <SEO 
        title="Personaldienstleister Pforzheim | Zeitarbeit & Vermittlung | PersoFlex"
        description="Ihr neuer Partner für Personal in Pforzheim & Enzkreis. Motivierte Zeitarbeit & präzise Personalvermittlung für Industrie, Logistik & Büro. Jetzt Personal anfragen!"
      />
      
      {/* 1. Hero Section - DARK MODE STYLE */}
      <section className="bg-brand-black text-white py-16 md:py-32 relative overflow-hidden">
        <div className="absolute top-0 right-0 w-[300px] md:w-[500px] h-[300px] md:h-[500px] bg-brand-orange opacity-10 rounded-full blur-[80px] md:blur-[120px] translate-x-1/2 -translate-y-1/2"></div>
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 relative z-10 text-center md:text-left">
          <span className="inline-block py-1 px-3 bg-brand-orange/20 text-brand-orange border border-brand-orange text-xs font-bold uppercase tracking-widest mb-6 rounded-sm">
            Für Arbeitgeber
          </span>
          <h1 className="text-3xl sm:text-4xl md:text-6xl font-black mb-6 leading-tight max-w-5xl">
            Personallösungen für <br/>
            <span className="text-brand-orange">Pforzheim & Enzkreis.</span>
          </h1>
          <p className="text-lg sm:text-xl text-gray-400 max-w-2xl mb-10 leading-relaxed mx-auto md:mx-0">
            Schluss mit "haben wir schon immer so gemacht". Wir sind Ihr neuer, motivierter Partner für Industrie, Logistik und Verwaltung. Flexibel, transparent und persönlich.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start">
            <NavLink to="/unternehmen/anfrage" className="inline-flex items-center justify-center gap-3 bg-brand-orange text-white px-8 py-4 text-lg font-bold hover:bg-white hover:text-brand-black transition-colors rounded-sm shadow-xl shadow-brand-orange/20">
              Personal anfragen <ArrowRight size={20} />
            </NavLink>
            <NavLink to="/unternehmen/downloads" className="inline-flex items-center justify-center gap-3 bg-transparent border border-white/20 text-white px-8 py-4 text-lg font-bold hover:bg-white/10 transition-colors rounded-sm">
              Zu den Downloads
            </NavLink>
          </div>
        </div>
      </section>

      {/* Services Grid (H2) */}
      <div className="bg-gray-50 py-16 md:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-black text-brand-black mb-4">Unsere Dienstleistungen</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Maßgeschneidert auf Ihren Bedarf. Ob kurzfristige Unterstützung oder langfristige Besetzung – wir finden die Lösung.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-10">
            {/* 1. Arbeitnehmerüberlassung */}
            <div className="bg-white p-6 sm:p-8 rounded-lg shadow-sm border-t-4 border-brand-orange group hover:shadow-2xl hover:shadow-brand-orange/10 hover:-translate-y-2 transition-all duration-300 flex flex-col items-center text-center cursor-default h-full">
              <Clock className="text-brand-orange mb-6 group-hover:scale-110 transition-transform duration-300 w-10 h-10 sm:w-12 sm:h-12" strokeWidth={1.5} />
              <h3 className="text-xl sm:text-2xl font-bold mb-4">Arbeitnehmerüberlassung</h3>
              <p className="text-gray-600 leading-relaxed text-sm sm:text-base">
                Reagieren Sie flexibel auf Auftragsspitzen. Wir stellen Ihnen kurzfristig motiviertes Personal zur Verfügung – transparent und fair kalkuliert.
              </p>
            </div>

            {/* 2. Personalvermittlung */}
            <div className="bg-white p-6 sm:p-8 rounded-lg shadow-sm border-t-4 border-brand-black group hover:shadow-2xl hover:shadow-brand-black/10 hover:-translate-y-2 transition-all duration-300 flex flex-col items-center text-center cursor-default h-full">
              <Users className="text-brand-black mb-6 group-hover:scale-110 transition-transform duration-300 w-10 h-10 sm:w-12 sm:h-12" strokeWidth={1.5} />
              <h3 className="text-xl sm:text-2xl font-bold mb-4">Personalvermittlung</h3>
              <p className="text-gray-600 leading-relaxed text-sm sm:text-base">
                Sparen Sie sich den Recruiting-Aufwand. Wir finden die passenden Talente für Ihre Festanstellungen und begleiten den Prozess bis zur Unterschrift.
              </p>
            </div>

            {/* 3. On-Site Management */}
            <div className="bg-white p-6 sm:p-8 rounded-lg shadow-sm border-t-4 border-gray-400 group hover:shadow-2xl hover:shadow-gray-400/20 hover:-translate-y-2 transition-all duration-300 flex flex-col items-center text-center cursor-default h-full md:col-span-2 lg:col-span-1">
              <Shield className="text-gray-500 mb-6 group-hover:scale-110 transition-transform duration-300 w-10 h-10 sm:w-12 sm:h-12" strokeWidth={1.5} />
              <h3 className="text-xl sm:text-2xl font-bold mb-4">On-Site Management</h3>
              <p className="text-gray-600 leading-relaxed text-sm sm:text-base">
                Bei hohem Bedarf sind wir direkt bei Ihnen vor Ort. Ein fester Ansprechpartner, kurze Wege und effiziente Koordination aller Mitarbeiter.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* --- NEUE SEKTION: Branchen & Kompetenzen (SEO) --- */}
      <section className="py-16 sm:py-24 bg-white border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <span className="text-brand-orange font-bold uppercase tracking-widest text-xs mb-2 block">
              Branchen
            </span>
            <h2 className="text-3xl font-black text-brand-black mb-4">
              Hier kennen wir uns aus.
            </h2>
            <p className="text-gray-600">
              Wir vermitteln nicht "irgendwen", sondern Personal, das fachlich passt. Unsere Schwerpunkte liegen in den starken Branchen unserer Region.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {/* Logistik */}
            <div className="bg-gray-50 p-6 rounded-xl border border-gray-100 hover:shadow-lg transition-shadow">
              <div className="bg-white w-12 h-12 flex items-center justify-center rounded-lg shadow-sm mb-6 text-brand-orange"><Package size={24} /></div>
              <h3 className="text-lg font-bold text-brand-black mb-3">Lager & Logistik</h3>
              <ul className="text-sm text-gray-500 space-y-1 list-disc list-inside">
                <li>Staplerfahrer</li>
                <li>Kommissionierer</li>
                <li>Lagerhelfer</li>
              </ul>
            </div>
            {/* Produktion */}
            <div className="bg-gray-50 p-6 rounded-xl border border-gray-100 hover:shadow-lg transition-shadow">
              <div className="bg-white w-12 h-12 flex items-center justify-center rounded-lg shadow-sm mb-6 text-brand-orange"><Wrench size={24} /></div>
              <h3 className="text-lg font-bold text-brand-black mb-3">Produktion</h3>
              <ul className="text-sm text-gray-500 space-y-1 list-disc list-inside">
                <li>Produktionshelfer</li>
                <li>Maschinenführer</li>
                <li>Qualitätskontrolle</li>
              </ul>
            </div>
            {/* Kaufmännisch */}
            <div className="bg-gray-50 p-6 rounded-xl border border-gray-100 hover:shadow-lg transition-shadow">
              <div className="bg-white w-12 h-12 flex items-center justify-center rounded-lg shadow-sm mb-6 text-brand-orange"><FileText size={24} /></div>
              <h3 className="text-lg font-bold text-brand-black mb-3">Kaufmännisch</h3>
              <ul className="text-sm text-gray-500 space-y-1 list-disc list-inside">
                <li>Sachbearbeitung</li>
                <li>Bürokaufleute</li>
                <li>Empfang</li>
              </ul>
            </div>
            {/* Fachkräfte */}
            <div className="bg-gray-50 p-6 rounded-xl border border-gray-100 hover:shadow-lg transition-shadow">
              <div className="bg-white w-12 h-12 flex items-center justify-center rounded-lg shadow-sm mb-6 text-brand-orange"><Award size={24} /></div>
              <h3 className="text-lg font-bold text-brand-black mb-3">Fachkräfte</h3>
              <ul className="text-sm text-gray-500 space-y-1 list-disc list-inside">
                <li>Techniker</li>
                <li>Meister</li>
                <li>Ingenieure</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Visual Recruiting Process */}
      <div className="py-16 md:py-24 bg-white overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="text-center mb-12 md:mb-16">
            <span className="text-brand-orange font-bold uppercase tracking-widest text-sm mb-2 block">Der Ablauf</span>
            <h2 className="text-3xl md:text-4xl font-black text-brand-black">So einfach geht Recruiting heute</h2>
          </div>

          <div className="relative">
            {/* Connecting Line (Desktop) */}
            <div className="hidden lg:block absolute top-[50%] left-0 w-full h-1 bg-gray-100 -translate-y-1/2 z-0"></div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8 relative z-10">
              {[
                { 
                  step: "01", 
                  title: "Anfrage", 
                  desc: "Sie melden uns Ihren Bedarf. Unkompliziert per Telefon oder Formular.",
                  icon: <Search size={24} />
                },
                { 
                  step: "02", 
                  title: "Matching", 
                  desc: "Wir gleichen Ihr Profil mit unserem Bewerberpool ab und suchen gezielt.",
                  icon: <Users size={24} />
                },
                { 
                  step: "03", 
                  title: "Auswahl", 
                  desc: "Wir stellen Ihnen passende Profile vor. Sie entscheiden, wen Sie kennenlernen.",
                  icon: <UserCheck size={24} />
                },
                { 
                  step: "04", 
                  title: "Start", 
                  desc: "Mitarbeiter startet zum Wunschtermin. Wir kümmern uns um die Bürokratie.",
                  icon: <Handshake size={24} />
                }
              ].map((item, index) => (
                <motion.div 
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.2 }}
                  viewport={{ once: true }}
                  className="bg-white p-6 rounded-lg border border-gray-100 shadow-xl shadow-gray-100/50 flex flex-col items-center text-center relative group hover:border-brand-orange hover:-translate-y-2 transition-all duration-300 cursor-default"
                >
                  <div className="w-16 h-16 bg-brand-black text-white rounded-full flex items-center justify-center mb-6 shadow-lg border-4 border-white group-hover:bg-brand-orange group-hover:scale-110 transition-all duration-300 z-10 relative">
                    {item.icon}
                  </div>
                  <span className="absolute top-4 right-4 text-4xl font-black text-gray-100 -z-10 group-hover:text-brand-orange/10 transition-colors duration-300">{item.step}</span>
                  <h3 className="text-xl font-bold mb-3">{item.title}</h3>
                  <p className="text-sm text-gray-500 leading-relaxed">{item.desc}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* --- SEO CONTENT BLOCK (H2, H3) --- */}
      <section className="py-16 sm:py-24 bg-gray-50 relative">
        <div className="max-w-4xl mx-auto px-4 sm:px-6">
          <div className="prose prose-lg text-gray-600 mx-auto">
            <h2 className="text-3xl font-black text-brand-black mb-6 text-center">
              Moderne <span className="text-brand-orange">Personaldienstleistung</span> in Pforzheim.
            </h2>
            <p className="mb-4">
              Als junges Unternehmen in der <strong>Zeitarbeit Pforzheim</strong> gehen wir Dinge anders an. Die <strong>PersoFlex GmbH</strong> steht für schnelle Entscheidungen, digitale Prozesse und eine Kommunikation auf Augenhöhe. Wir wissen, dass in der heutigen Zeit Schnelligkeit und Zuverlässigkeit die wichtigsten Währungen sind.
            </p>
            <p className="mb-4">
              Unser Ziel ist es, nicht nur Lücken zu füllen, sondern echte Mehrwerte zu schaffen. Ob durch kurzfristige <strong>Arbeitnehmerüberlassung</strong> bei Auftragsspitzen oder durch die langfristige <strong>Personalvermittlung</strong> von Fachkräften – wir verstehen uns als Ihr strategischer Partner im Enzkreis.
            </p>
            <div className="bg-white p-6 rounded-lg border-l-4 border-brand-orange mt-8 shadow-sm">
              <h3 className="text-xl font-bold text-brand-black mb-2 flex items-center gap-2">
                <MapPin className="text-brand-orange" size={20} />
                Regional stark
              </h3>
              <p className="text-sm m-0">
                Unsere lokale Nähe ist Ihr Vorteil. Wir kennen den Arbeitsmarkt in <strong>Pforzheim</strong>, <strong>Mühlacker</strong>, <strong>Birkenfeld</strong> und dem gesamten <strong>Enzkreis</strong>. Das bedeutet: Kürzere Anfahrtswege für Mitarbeiter und schnellere Reaktionszeiten für Sie.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Bottom */}
      <div className="bg-white py-16 md:py-20 border-t border-gray-200">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 text-center">
          <h2 className="text-2xl sm:text-3xl font-bold mb-8 text-brand-black">Lernen Sie uns kennen!</h2>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <NavLink to="/unternehmen/anfrage" className="bg-brand-black text-white px-8 py-4 rounded font-bold hover:bg-brand-orange transition-colors w-full sm:w-auto shadow-lg">
              Jetzt Personal anfragen
            </NavLink>
            <NavLink to="/kontakt" className="bg-white border-2 border-brand-black text-brand-black px-8 py-4 rounded font-bold hover:bg-gray-50 transition-colors w-full sm:w-auto">
              Kontakt aufnehmen
            </NavLink>
          </div>
        </div>
      </div>
    </div>
  );
};