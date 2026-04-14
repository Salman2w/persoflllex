import React from 'react';
import { motion } from 'framer-motion';
import { MapPin, Phone, Mail, Clock, Send } from 'lucide-react';
import { SEO } from '../components/SEO';

export const Kontakt: React.FC = () => {
  return (
    <div className="min-h-screen bg-white pt-[80px]">
      <SEO
        title="Kontakt & Anfahrt | PersoFlex GmbH Pforzheim"
        description="Ihr Weg zu uns! Kontaktieren Sie PersoFlex in Pforzheim. Telefon, E-Mail & Anfahrt. Wir sind für Bewerber und Unternehmen da."
      />

      {/* Hero / Header */}
      <section className="bg-brand-black text-white py-12 md:py-20 relative overflow-hidden">
        <div className="absolute top-0 right-0 w-[300px] h-[300px] bg-brand-orange opacity-10 rounded-full blur-[80px] translate-x-1/2 -translate-y-1/2"></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 relative z-10 text-center">
          <span className="inline-block py-1 px-3 bg-brand-orange/20 text-brand-orange border border-brand-orange text-xs font-bold uppercase tracking-widest mb-4 rounded-sm">
            Erreichbarkeit
          </span>
          <h1 className="text-3xl md:text-5xl font-black mb-4">
            Wir sind für dich da.
          </h1>
          <p className="text-gray-400 max-w-2xl mx-auto text-lg">
            Egal ob Unternehmen oder Bewerber – wir freuen uns auf den Austausch.
            Komm vorbei, ruf an oder schreib uns.
          </p>
        </div>
      </section>

      {/* Main Content: Side-by-Side */}
      <section className="py-16 md:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-start">

            {/* Left: Contact Info & Form */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
            >
              <h2 className="text-2xl font-black text-brand-black mb-8">Kontaktdaten</h2>

              <div className="space-y-8 mb-12">
                <div className="flex items-start gap-4">
                  <div className="bg-brand-orange/10 p-3 rounded-full text-brand-orange shrink-0">
                    <MapPin size={24} />
                  </div>
                  <div>
                    <h3 className="font-bold text-lg text-brand-black">Anschrift</h3>
                    <p className="text-gray-600">
                      PersoFlex GmbH<br />
                      Kiehnlestraße 4<br />
                      75172 Pforzheim
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="bg-brand-orange/10 p-3 rounded-full text-brand-orange shrink-0">
                    <Phone size={24} />
                  </div>
                  <div>
                    <h3 className="font-bold text-lg text-brand-black">Telefon</h3>
                    <p className="text-gray-600">
                      <a href="tel:+497231123456" className="hover:text-brand-orange transition-colors">
                        07231 / 60 39 493
                      </a>
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="bg-brand-orange/10 p-3 rounded-full text-brand-orange shrink-0">
                    <Mail size={24} />
                  </div>
                  <div>
                    <h3 className="font-bold text-lg text-brand-black">E-Mail</h3>
                    <p className="text-gray-600">
                      <a href="mailto:info@persoflex-gmbh.de" className="hover:text-brand-orange transition-colors">
                        info@persoflex-gmbh.de
                      </a>
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="bg-brand-orange/10 p-3 rounded-full text-brand-orange shrink-0">
                    <Clock size={24} />
                  </div>
                  <div>
                    <h3 className="font-bold text-lg text-brand-black">Öffnungszeiten</h3>
                    <p className="text-gray-600">
                      Mo - Fr: 08:00 - 17:00 Uhr<br />
                      sowie nach Vereinbarung
                    </p>
                  </div>
                </div>
              </div>

              <div className="bg-gray-50 p-8 rounded-xl border border-gray-100">
                <h3 className="text-xl font-bold text-brand-black mb-6">Nachricht senden</h3>
                <form className="space-y-4">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-1">Name</label>
                      <input type="text" className="w-full p-3 border border-gray-300 rounded focus:ring-2 focus:ring-brand-orange focus:border-transparent outline-none transition-all" placeholder="Ihr Name" />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-1">E-Mail</label>
                      <input type="email" className="w-full p-3 border border-gray-300 rounded focus:ring-2 focus:ring-brand-orange focus:border-transparent outline-none transition-all" placeholder="ihre@email.de" />
                    </div>
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">Betreff</label>
                    <input type="text" className="w-full p-3 border border-gray-300 rounded focus:ring-2 focus:ring-brand-orange focus:border-transparent outline-none transition-all" placeholder="Worum geht es?" />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">Nachricht</label>
                    <textarea rows={4} className="w-full p-3 border border-gray-300 rounded focus:ring-2 focus:ring-brand-orange focus:border-transparent outline-none transition-all" placeholder="Ihre Nachricht an uns..."></textarea>
                  </div>
                  <button type="submit" className="w-full bg-brand-orange text-white font-bold py-3 rounded hover:bg-orange-700 transition-colors flex items-center justify-center gap-2">
                    Absenden <Send size={18} />
                  </button>
                </form>
              </div>

            </motion.div>

            {/* Right: Map */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="h-full min-h-[400px] lg:min-h-[600px] rounded-2xl overflow-hidden shadow-2xl relative"
            >
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2623.1778639811428!2d8.692382276418163!3d48.89294737133687!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4797739001343819%3A0x62a540f0741c59e!2sPersoFlex%20GmbH%20%E2%80%93%20Ihr%20Partner%20f%C3%BCr%20professionelle%20Personaldienstleistungen%20in%20Pforzheim!5e0!3m2!1sde!2sde!4v1765184431409!5m2!1sde!2sde"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen={true}
                loading="lazy"
                className="absolute inset-0 w-full h-full"
                title="Standort PersoFlex GmbH Pforzheim"
              ></iframe>

              {/* Overlay Card on Map (Desktop only) */}
              <div className="hidden md:block absolute bottom-6 left-6 bg-white/90 backdrop-blur-sm p-4 rounded-lg shadow-lg max-w-xs">
                <p className="font-bold text-brand-black text-sm">Parkmöglichkeiten</p>
                <p className="text-xs text-gray-600 mt-1">
                  Parkhäuser "Schlössle-Galerie" und "Volksbank-Haus" befinden sich in unmittelbarer Nähe (2 Min. Fußweg).
                </p>
              </div>
            </motion.div>

          </div>
        </div>
      </section>
    </div>
  );
};
