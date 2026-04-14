import React from 'react';
import { motion } from 'framer-motion';
import { CheckCircle, Users, Clock, ShieldCheck, Send } from 'lucide-react';
import { SEO } from '../components/SEO';

export const PersonalAnfrage: React.FC = () => {
  return (
    <div className="min-h-screen bg-white pt-[80px]">
      <SEO
        title="Personal anfragen | PersoFlex GmbH Pforzheim"
        description="Finden Sie qualifiziertes Personal in Pforzheim & Enzkreis. Arbeitnehmerüberlassung & Personalvermittlung. Schnell, flexibel & zuverlässig."
      />

      {/* Hero Section */}
      <section className="bg-brand-black text-white py-16 md:py-24 relative overflow-hidden">
        <div className="absolute top-0 left-0 w-full h-full bg-[url('/pattern.svg')] opacity-5"></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 relative z-10 text-center">
          <span className="inline-block py-1 px-3 bg-brand-orange/20 text-brand-orange border border-brand-orange text-xs font-bold uppercase tracking-widest mb-4 rounded-sm">
            Für Unternehmen
          </span>
          <h1 className="text-3xl md:text-5xl font-black mb-6">
            Personalengpass? <br />
            <span className="text-brand-orange">Wir haben die Lösung.</span>
          </h1>
          <p className="text-gray-400 max-w-2xl mx-auto text-lg">
            Egal ob kurzfristige Krankheitsvertretung oder langfristige Festanstellung.
            Wir finden die passenden Mitarbeiter für Ihr Unternehmen im Enzkreis.
          </p>
        </div>
      </section>

      <section className="py-16 md:py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20">

            {/* Left: Form */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="bg-white p-8 rounded-xl shadow-lg border-t-4 border-brand-orange"
            >
              <h2 className="text-2xl font-bold text-brand-black mb-6">Personalanfrage senden</h2>
              <form className="space-y-6">

                {/* Company Info */}
                <div>
                  <h3 className="text-sm font-bold text-gray-400 uppercase tracking-wider mb-4 border-b pb-2">Unternehmensdaten</h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-1">Firmenname *</label>
                      <input type="text" required className="w-full p-3 border border-gray-300 rounded focus:ring-2 focus:ring-brand-orange focus:border-transparent outline-none" />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-1">Ansprechpartner *</label>
                      <input type="text" required className="w-full p-3 border border-gray-300 rounded focus:ring-2 focus:ring-brand-orange focus:border-transparent outline-none" />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-1">E-Mail *</label>
                      <input type="email" required className="w-full p-3 border border-gray-300 rounded focus:ring-2 focus:ring-brand-orange focus:border-transparent outline-none" />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-1">Telefon *</label>
                      <input type="tel" required className="w-full p-3 border border-gray-300 rounded focus:ring-2 focus:ring-brand-orange focus:border-transparent outline-none" />
                    </div>
                  </div>
                </div>

                {/* Job Info */}
                <div>
                  <h3 className="text-sm font-bold text-gray-400 uppercase tracking-wider mb-4 border-b pb-2">Bedarf</h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-1">Qualifikation / Beruf</label>
                      <input type="text" placeholder="z.B. Staplerfahrer" className="w-full p-3 border border-gray-300 rounded focus:ring-2 focus:ring-brand-orange focus:border-transparent outline-none" />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-1">Anzahl Mitarbeiter</label>
                      <select className="w-full p-3 border border-gray-300 rounded focus:ring-2 focus:ring-brand-orange focus:border-transparent outline-none bg-white">
                        <option>1</option>
                        <option>2-5</option>
                        <option>5-10</option>
                        <option>mehr als 10</option>
                      </select>
                    </div>
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">Einsatzbeginn</label>
                    <input type="text" placeholder="z.B. ab sofort oder Datum" className="w-full p-3 border border-gray-300 rounded focus:ring-2 focus:ring-brand-orange focus:border-transparent outline-none" />
                  </div>
                  <div className="mt-4">
                    <label className="block text-sm font-medium text-gray-700 mb-1">Nachricht / Besonderheiten</label>
                    <textarea rows={3} className="w-full p-3 border border-gray-300 rounded focus:ring-2 focus:ring-brand-orange focus:border-transparent outline-none"></textarea>
                  </div>
                </div>

                <div className="flex items-start gap-2 text-sm text-gray-500">
                  <input type="checkbox" className="mt-1" required />
                  <span>Ich stimme zu, dass meine Angaben zur Kontaktaufnahme und Zuordnung für eventuelle Rückfragen dauerhaft gespeichert werden. (Datenschutzhinweis)</span>
                </div>

                <button type="submit" className="w-full bg-brand-orange text-white font-bold py-4 rounded hover:bg-orange-700 transition-colors flex items-center justify-center gap-2 text-lg shadow-lg shadow-brand-orange/20">
                  Anfrage absenden <Send size={20} />
                </button>

              </form>
            </motion.div>

            {/* Right: Benefits */}
            <div className="space-y-10">
              <div>
                <h2 className="text-3xl font-black text-brand-black mb-6">Warum PersoFlex?</h2>
                <p className="text-gray-600 text-lg leading-relaxed">
                  Wir verstehen die Anforderungen lokaler Unternehmen. Keine anonyme Hotline, sondern persönliche Betreuung direkt aus Pforzheim.
                </p>
              </div>

              <div className="space-y-6">
                {[
                  {
                    icon: <Clock size={24} />,
                    title: "Schnelligkeit",
                    desc: "Oft können wir Anfragen innerhalb von 24 Stunden bedienen."
                  },
                  {
                    icon: <ShieldCheck size={24} />,
                    title: "Rechtssicherheit",
                    desc: "Wir besitzen die Erlaubnis zur Arbeitnehmerüberlassung (AÜG)."
                  },
                  {
                    icon: <Users size={24} />,
                    title: "Passgenauigkeit",
                    desc: "Wir schicken nicht 'irgendwen'. Wir prüfen Qualifikation und Persönlichkeit."
                  },
                  {
                    icon: <CheckCircle size={24} />,
                    title: "Fairness",
                    desc: "Zufriedene Mitarbeiter leisten bessere Arbeit. Deshalb zahlen wir fair."
                  }
                ].map((item, idx) => (
                  <div key={idx} className="flex gap-4">
                    <div className="bg-white p-3 rounded-lg shadow-sm text-brand-orange h-fit border border-gray-100">
                      {item.icon}
                    </div>
                    <div>
                      <h3 className="font-bold text-brand-black text-lg">{item.title}</h3>
                      <p className="text-gray-600">{item.desc}</p>
                    </div>
                  </div>
                ))}
              </div>

              <div className="bg-brand-black text-white p-8 rounded-xl relative overflow-hidden">
                <div className="relative z-10">
                  <h3 className="font-bold text-xl mb-2">Lieber persönlich?</h3>
                  <p className="text-gray-400 mb-4">Rufen Sie uns direkt an.</p>
                  <a href="tel:+497231123456" className="text-2xl font-black text-brand-orange hover:text-white transition-colors">
                    07231 / 60 39 493
                  </a>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>
    </div>
  );
};