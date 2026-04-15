import React from 'react';
import { MapPin, Phone, Mail, Clock, Send, Flame, MessageCircle } from 'lucide-react';
import { SEO } from '../components/SEO';

export const Kontakt: React.FC = () => {
  return (
    <div className="min-h-screen bg-white">
      <SEO
        title="Kontakt & Anfahrt | PersoFlex GmbH Pforzheim"
        description="Ihr Weg zu uns! Kontaktieren Sie PersoFlex in Pforzheim. Telefon, E-Mail & Anfahrt. Wir sind für Bewerber und Unternehmen da."
        keywords="Kontakt PersoFlex, Pforzheim Adresse, Zeitarbeit Anfahrt, Personaldienstleister Kontakt"
      />

      {/* Hero Section */}
      <section className="relative pt-32 pb-20 overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute top-1/4 right-1/4 w-[500px] h-[500px] bg-orange-500/10 rounded-full blur-[120px]" />
          <div className="absolute bottom-0 left-1/4 w-[400px] h-[400px] bg-red-500/10 rounded-full blur-[100px]" />
        </div>
        
        <div className="max-w-7xl mx-auto px-6 relative z-10 text-center">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-gray-50 border border-gray-200 mb-6">
            <MessageCircle className="w-4 h-4 text-orange-500" />
            <span className="text-sm text-gray-600">Erreichbarkeit</span>
          </div>
          
          <h1 className="text-4xl md:text-6xl font-black text-gray-900 mb-6">
            Wir sind <span className="text-orange-500">für Sie da.</span>
          </h1>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Egal ob Unternehmen oder Bewerber – wir freuen uns auf den Austausch.
            Komm vorbei, ruf an oder schreib uns.
          </p>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-16 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-start">

            {/* Contact Info & Form */}
            <div>
              <h2 className="text-2xl font-black text-gray-900 mb-8">Kontaktdaten</h2>

              <div className="space-y-6 mb-12">
                <div className="flex items-start gap-4 p-4 bg-gray-50 border border-gray-200 rounded-2xl hover:border-orange-500/50 transition-all">
                  <div className="w-12 h-12 bg-orange-500/10 rounded-xl flex items-center justify-center text-orange-500 shrink-0">
                    <MapPin size={24} />
                  </div>
                  <div>
                    <h3 className="font-bold text-gray-900 mb-1">Anschrift</h3>
                    <p className="text-gray-600">
                      PersoFlex GmbH<br />
                      Kiehnlestraße 4<br />
                      75172 Pforzheim
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4 p-4 bg-gray-50 border border-gray-200 rounded-2xl hover:border-orange-500/50 transition-all">
                  <div className="w-12 h-12 bg-orange-500/10 rounded-xl flex items-center justify-center text-orange-500 shrink-0">
                    <Phone size={24} />
                  </div>
                  <div>
                    <h3 className="font-bold text-gray-900 mb-1">Telefon</h3>
                    <a href="tel:+4972316039493" className="text-gray-600 hover:text-orange-500 transition-colors">
                      07231 / 60 39 493
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-4 p-4 bg-gray-50 border border-gray-200 rounded-2xl hover:border-orange-500/50 transition-all">
                  <div className="w-12 h-12 bg-orange-500/10 rounded-xl flex items-center justify-center text-orange-500 shrink-0">
                    <Mail size={24} />
                  </div>
                  <div>
                    <h3 className="font-bold text-gray-900 mb-1">E-Mail</h3>
                    <a href="mailto:info@persoflex-gmbh.de" className="text-gray-600 hover:text-orange-500 transition-colors">
                      info@persoflex-gmbh.de
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-4 p-4 bg-gray-50 border border-gray-200 rounded-2xl hover:border-orange-500/50 transition-all">
                  <div className="w-12 h-12 bg-orange-500/10 rounded-xl flex items-center justify-center text-orange-500 shrink-0">
                    <Clock size={24} />
                  </div>
                  <div>
                    <h3 className="font-bold text-gray-900 mb-1">Öffnungszeiten</h3>
                    <p className="text-gray-600">
                      Mo - Fr: 08:00 - 17:00 Uhr<br />
                      sowie nach Vereinbarung
                    </p>
                  </div>
                </div>
              </div>

              {/* Contact Form */}
              <div className="bg-gray-50 border border-gray-200 rounded-2xl p-8">
                <h3 className="text-xl font-bold text-gray-900 mb-6 flex items-center gap-2">
                  <Flame className="w-5 h-5 text-orange-500" />
                  Nachricht senden
                </h3>
                <form className="space-y-4">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-sm font-medium text-gray-900 mb-2">Name</label>
                      <input 
                        type="text" 
                        className="w-full p-4 bg-white border border-gray-200 rounded-xl text-gray-900 placeholder:text-gray-400 focus:outline-none focus:border-orange-500 focus:ring-2 focus:ring-orange-500/20 transition-all" 
                        placeholder="Ihr Name" 
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-900 mb-2">E-Mail</label>
                      <input 
                        type="email" 
                        className="w-full p-4 bg-white border border-gray-200 rounded-xl text-gray-900 placeholder:text-gray-400 focus:outline-none focus:border-orange-500 focus:ring-2 focus:ring-orange-500/20 transition-all" 
                        placeholder="ihre@email.de" 
                      />
                    </div>
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-900 mb-2">Betreff</label>
                    <input 
                      type="text" 
                      className="w-full p-4 bg-white border border-gray-200 rounded-xl text-gray-900 placeholder:text-gray-400 focus:outline-none focus:border-orange-500 focus:ring-2 focus:ring-orange-500/20 transition-all" 
                      placeholder="Worum geht es?" 
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-900 mb-2">Nachricht</label>
                    <textarea 
                      rows={4} 
                      className="w-full p-4 bg-white border border-gray-200 rounded-xl text-gray-900 placeholder:text-gray-400 focus:outline-none focus:border-orange-500 focus:ring-2 focus:ring-orange-500/20 transition-all resize-none" 
                      placeholder="Ihre Nachricht an uns..."
                    ></textarea>
                  </div>
                  <button 
                    type="submit" 
                    className="w-full bg-orange-500 hover:bg-orange-600 text-white font-semibold py-4 rounded-xl hover:shadow-lg transition-all flex items-center justify-center gap-2"
                  >
                    Absenden <Send size={18} />
                  </button>
                </form>
              </div>
            </div>

            {/* Map */}
            <div className="h-full min-h-[500px] lg:min-h-[700px] rounded-2xl overflow-hidden border border-gray-200 relative">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2623.1778639811428!2d8.692382276418163!3d48.89294737133687!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4797739001343819%3A0x62a540f0741c59e!2sPersoFlex%20GmbH%20%E2%80%93%20Ihr%20Partner%20f%C3%BCr%20professionelle%20Personaldienstleistungen%20in%20Pforzheim!5e0!3m2!1sde!2sde!4v1765184431409!5m2!1sde!2sde"
                width="100%"
                height="100%"
                style={{ border: 0, filter: 'grayscale(0.8) contrast(1.1)' }}
                allowFullScreen={true}
                loading="lazy"
                className="absolute inset-0 w-full h-full"
                title="Standort PersoFlex GmbH Pforzheim"
              ></iframe>

              {/* Overlay Card */}
              <div className="hidden md:block absolute bottom-6 left-6 bg-white/95 backdrop-blur-sm p-4 rounded-xl border border-gray-200 shadow-xl max-w-xs">
                <p className="font-bold text-gray-900 text-sm flex items-center gap-2">
                  <MapPin className="w-4 h-4 text-orange-500" />
                  Parkmöglichkeiten
                </p>
                <p className="text-xs text-gray-600 mt-1">
                  Parkhäuser &ldquo;Schlössle-Galerie&rdquo; und &ldquo;Volksbank-Haus&rdquo; befinden sich in unmittelbarer Nähe (2 Min. Fußweg).
                </p>
              </div>
            </div>

          </div>
        </div>
      </section>
    </div>
  );
};
