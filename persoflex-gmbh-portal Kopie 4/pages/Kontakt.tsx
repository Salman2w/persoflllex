import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { 
  MapPin, 
  Phone, 
  Mail, 
  Clock, 
  Send, 
  Flame, 
  MessageCircle,
  CheckCircle2,
  Users,
  Building2,
  ArrowRight,
  Car,
  Train,
  FileText,
  Briefcase
} from 'lucide-react';
import { SEO } from '../components/SEO';

const CONTACT_REASONS = [
  { id: 'bewerber', label: 'Ich suche einen Job', icon: Briefcase },
  { id: 'unternehmen', label: 'Ich suche Personal', icon: Building2 },
  { id: 'initiativ', label: 'Initiativbewerbung', icon: FileText },
  { id: 'sonstiges', label: 'Allgemeine Anfrage', icon: MessageCircle }
];

const FAQ_CONTACT = [
  {
    question: "Wie schnell erhalte ich eine Rückmeldung?",
    answer: "Wir melden uns in der Regel innerhalb von 24 Stunden bei Ihnen. Bei dringenden Anfragen erreichen Sie uns auch telefonisch."
  },
  {
    question: "Muss ich für ein persönliches Gespräch einen Termin vereinbaren?",
    answer: "Wir empfehlen eine kurze Terminvereinbarung, damit wir uns ausreichend Zeit für Sie nehmen können. Spontane Besuche sind aber auch möglich."
  },
  {
    question: "Gibt es Parkmöglichkeiten in der Nähe?",
    answer: "Ja, die Parkhäuser 'Schlössle-Galerie' und 'Volksbank-Haus' befinden sich in unmittelbarer Nähe (2 Minuten Fußweg)."
  }
];

export const Kontakt: React.FC = () => {
  const [selectedReason, setSelectedReason] = useState('bewerber');
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: ''
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Form submission logic here
    console.log('Form submitted:', { ...formData, reason: selectedReason });
  };

  return (
    <div className="min-h-screen bg-white">
      <SEO
        title="Kontakt & Anfahrt | PersoFlex GmbH Pforzheim"
        description="Ihr Weg zu uns! Kontaktieren Sie PersoFlex in Pforzheim. Telefon, E-Mail & Anfahrt. Wir sind für Bewerber und Unternehmen da."
        keywords="Kontakt PersoFlex, Pforzheim Adresse, Zeitarbeit Anfahrt, Personaldienstleister Kontakt"
      />

      {/* Hero Section */}
      <section className="relative pt-32 pb-20 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-orange-50 via-orange-50/50 to-white" />
        <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-orange-200/30 rounded-full blur-[120px]" />
        
        <div className="max-w-7xl mx-auto px-6 relative z-10">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="text-center lg:text-left">
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-orange-500 text-white mb-6 shadow-lg shadow-orange-500/25">
                <MessageCircle className="w-4 h-4" />
                <span className="text-sm font-semibold">Erreichbarkeit</span>
              </div>
              
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-black text-gray-900 mb-6">
                Wir sind <span className="text-orange-500">für Sie da.</span>
              </h1>
              <p className="text-lg text-gray-600 mb-8 leading-relaxed">
                Egal ob Unternehmen oder Bewerber – wir freuen uns auf den Austausch. 
                Kommen Sie vorbei, rufen Sie an oder schreiben Sie uns. 
                Persönliche Beratung ist bei uns Standard.
              </p>

              {/* Quick Contact Options */}
              <div className="flex flex-wrap gap-4 justify-center lg:justify-start">
                <a 
                  href="tel:+4972316039493" 
                  className="inline-flex items-center gap-2 bg-orange-500 hover:bg-orange-600 text-white px-6 py-3 rounded-xl font-semibold transition-all hover:shadow-lg"
                >
                  <Phone size={18} />
                  Jetzt anrufen
                </a>
                <a 
                  href="mailto:info@persoflex-gmbh.de" 
                  className="inline-flex items-center gap-2 border-2 border-gray-200 text-gray-700 px-6 py-3 rounded-xl font-semibold hover:border-orange-300 transition-all"
                >
                  <Mail size={18} />
                  E-Mail senden
                </a>
              </div>
            </div>

            {/* Quick Info Card */}
            <div className="bg-white border-2 border-orange-200 rounded-2xl p-8 shadow-xl">
              <h3 className="text-xl font-bold text-gray-900 mb-6">Kontaktdaten auf einen Blick</h3>
              <div className="space-y-4">
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 bg-orange-500 rounded-lg flex items-center justify-center flex-shrink-0">
                    <MapPin className="w-5 h-5 text-white" />
                  </div>
                  <div>
                    <p className="font-semibold text-gray-900">Adresse</p>
                    <p className="text-gray-600">Kiehnlestraße 4, 75172 Pforzheim</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 bg-orange-500 rounded-lg flex items-center justify-center flex-shrink-0">
                    <Phone className="w-5 h-5 text-white" />
                  </div>
                  <div>
                    <p className="font-semibold text-gray-900">Telefon</p>
                    <a href="tel:+4972316039493" className="text-orange-500 hover:text-orange-600 font-medium">
                      07231 / 60 39 493
                    </a>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 bg-orange-500 rounded-lg flex items-center justify-center flex-shrink-0">
                    <Mail className="w-5 h-5 text-white" />
                  </div>
                  <div>
                    <p className="font-semibold text-gray-900">E-Mail</p>
                    <a href="mailto:info@persoflex-gmbh.de" className="text-orange-500 hover:text-orange-600 font-medium">
                      info@persoflex-gmbh.de
                    </a>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 bg-orange-500 rounded-lg flex items-center justify-center flex-shrink-0">
                    <Clock className="w-5 h-5 text-white" />
                  </div>
                  <div>
                    <p className="font-semibold text-gray-900">Öffnungszeiten</p>
                    <p className="text-gray-600">Mo - Fr: 08:00 - 17:00 Uhr</p>
                    <p className="text-sm text-gray-500">sowie nach Vereinbarung</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-16 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-start">

            {/* Contact Form */}
            <div>
              <h2 className="text-2xl font-black text-gray-900 mb-2">Nachricht senden</h2>
              <p className="text-gray-600 mb-8">Füllen Sie das Formular aus und wir melden uns schnellstmöglich bei Ihnen.</p>

              {/* Contact Reason Selector */}
              <div className="mb-8">
                <label className="block text-sm font-semibold text-gray-900 mb-3">Worum geht es?</label>
                <div className="grid grid-cols-2 gap-3">
                  {CONTACT_REASONS.map((reason) => (
                    <button
                      key={reason.id}
                      type="button"
                      onClick={() => setSelectedReason(reason.id)}
                      className={`flex items-center gap-3 p-4 rounded-xl border-2 transition-all text-left ${
                        selectedReason === reason.id
                          ? 'border-orange-500 bg-orange-50'
                          : 'border-gray-200 hover:border-orange-300'
                      }`}
                    >
                      <div className={`w-10 h-10 rounded-lg flex items-center justify-center ${
                        selectedReason === reason.id ? 'bg-orange-500 text-white' : 'bg-gray-100 text-gray-600'
                      }`}>
                        <reason.icon size={20} />
                      </div>
                      <span className={`text-sm font-medium ${
                        selectedReason === reason.id ? 'text-orange-600' : 'text-gray-700'
                      }`}>
                        {reason.label}
                      </span>
                    </button>
                  ))}
                </div>
              </div>

              {/* Contact Form */}
              <form onSubmit={handleSubmit} className="bg-gray-50 border border-gray-200 rounded-2xl p-8">
                <div className="space-y-4">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-sm font-medium text-gray-900 mb-2">Name *</label>
                      <input 
                        type="text"
                        name="name"
                        required
                        value={formData.name}
                        onChange={handleInputChange}
                        className="w-full p-4 bg-white border border-gray-200 rounded-xl text-gray-900 placeholder:text-gray-400 focus:outline-none focus:border-orange-500 focus:ring-2 focus:ring-orange-500/20 transition-all" 
                        placeholder="Ihr Name" 
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-900 mb-2">E-Mail *</label>
                      <input 
                        type="email"
                        name="email"
                        required
                        value={formData.email}
                        onChange={handleInputChange}
                        className="w-full p-4 bg-white border border-gray-200 rounded-xl text-gray-900 placeholder:text-gray-400 focus:outline-none focus:border-orange-500 focus:ring-2 focus:ring-orange-500/20 transition-all" 
                        placeholder="ihre@email.de" 
                      />
                    </div>
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-900 mb-2">Telefon (optional)</label>
                    <input 
                      type="tel"
                      name="phone"
                      value={formData.phone}
                      onChange={handleInputChange}
                      className="w-full p-4 bg-white border border-gray-200 rounded-xl text-gray-900 placeholder:text-gray-400 focus:outline-none focus:border-orange-500 focus:ring-2 focus:ring-orange-500/20 transition-all" 
                      placeholder="Für Rückruf" 
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-900 mb-2">Betreff</label>
                    <input 
                      type="text"
                      name="subject"
                      value={formData.subject}
                      onChange={handleInputChange}
                      className="w-full p-4 bg-white border border-gray-200 rounded-xl text-gray-900 placeholder:text-gray-400 focus:outline-none focus:border-orange-500 focus:ring-2 focus:ring-orange-500/20 transition-all" 
                      placeholder="Worum geht es?" 
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-900 mb-2">Nachricht *</label>
                    <textarea 
                      name="message"
                      required
                      rows={5}
                      value={formData.message}
                      onChange={handleInputChange}
                      className="w-full p-4 bg-white border border-gray-200 rounded-xl text-gray-900 placeholder:text-gray-400 focus:outline-none focus:border-orange-500 focus:ring-2 focus:ring-orange-500/20 transition-all resize-none" 
                      placeholder="Ihre Nachricht an uns..."
                    ></textarea>
                  </div>

                  <div className="flex items-start gap-3 text-sm text-gray-600">
                    <input type="checkbox" required className="mt-1 accent-orange-500" />
                    <span>
                      Ich stimme der Verarbeitung meiner Daten gemäß der{' '}
                      <Link to="/datenschutz" className="text-orange-500 hover:text-orange-600">
                        Datenschutzerklärung
                      </Link>{' '}
                      zu.
                    </span>
                  </div>

                  <button 
                    type="submit" 
                    className="w-full bg-orange-500 hover:bg-orange-600 text-white font-semibold py-4 rounded-xl hover:shadow-lg transition-all flex items-center justify-center gap-2"
                  >
                    Nachricht absenden <Send size={18} />
                  </button>
                </div>
              </form>

              <p className="text-sm text-gray-500 mt-4 text-center">
                Wir antworten in der Regel innerhalb von 24 Stunden.
              </p>
            </div>

            {/* Map & Additional Info */}
            <div className="space-y-8">
              {/* Map */}
              <div className="h-[400px] rounded-2xl overflow-hidden border border-gray-200 relative">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2623.1778639811428!2d8.692382276418163!3d48.89294737133687!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4797739001343819%3A0x62a540f0741c59e!2sPersoFlex%20GmbH%20%E2%80%93%20Ihr%20Partner%20f%C3%BCr%20professionelle%20Personaldienstleistungen%20in%20Pforzheim!5e0!3m2!1sde!2sde!4v1765184431409!5m2!1sde!2sde"
                  width="100%"
                  height="100%"
                  style={{ border: 0, filter: 'grayscale(0.5) contrast(1.1)' }}
                  allowFullScreen={true}
                  loading="lazy"
                  className="absolute inset-0 w-full h-full"
                  title="Standort PersoFlex GmbH Pforzheim"
                ></iframe>
              </div>

              {/* Directions */}
              <div className="bg-gray-50 border border-gray-200 rounded-2xl p-6">
                <h3 className="text-lg font-bold text-gray-900 mb-4 flex items-center gap-2">
                  <MapPin className="w-5 h-5 text-orange-500" />
                  Anfahrt & Parken
                </h3>
                <div className="space-y-4">
                  <div className="flex items-start gap-3">
                    <Car className="w-5 h-5 text-orange-500 flex-shrink-0 mt-0.5" />
                    <div>
                      <p className="font-medium text-gray-900">Mit dem Auto</p>
                      <p className="text-sm text-gray-600">
                        Parkhäuser &ldquo;Schlössle-Galerie&rdquo; und &ldquo;Volksbank-Haus&rdquo; in 2 Min. Fußweg erreichbar.
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <Train className="w-5 h-5 text-orange-500 flex-shrink-0 mt-0.5" />
                    <div>
                      <p className="font-medium text-gray-900">Mit öffentlichen Verkehrsmitteln</p>
                      <p className="text-sm text-gray-600">
                        Vom Hauptbahnhof Pforzheim ca. 10 Min. Fußweg oder Buslinien 1, 2, 3.
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              {/* FAQ */}
              <div className="bg-white border border-gray-200 rounded-2xl p-6">
                <h3 className="text-lg font-bold text-gray-900 mb-4">Häufige Fragen zum Kontakt</h3>
                <div className="space-y-4">
                  {FAQ_CONTACT.map((faq, idx) => (
                    <div key={idx} className="border-b border-gray-100 pb-4 last:border-0 last:pb-0">
                      <p className="font-medium text-gray-900 mb-1">{faq.question}</p>
                      <p className="text-sm text-gray-600">{faq.answer}</p>
                    </div>
                  ))}
                </div>
              </div>

              {/* Alternative Contact */}
              <div className="bg-orange-50 border border-orange-200 rounded-2xl p-6">
                <h3 className="text-lg font-bold text-gray-900 mb-3">Lieber persönlich?</h3>
                <p className="text-gray-600 mb-4">
                  Besuchen Sie uns in unserem Büro in der Pforzheimer Innenstadt. 
                  Wir nehmen uns gerne Zeit für ein persönliches Gespräch.
                </p>
                <a 
                  href="tel:+4972316039493" 
                  className="inline-flex items-center gap-2 text-orange-500 font-semibold hover:text-orange-600"
                >
                  <Phone size={18} />
                  Termin vereinbaren: 07231 / 60 39 493
                </a>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-16 px-6 bg-gray-50 border-y border-gray-200">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-orange-100 border border-orange-200 text-orange-600 text-sm font-semibold uppercase tracking-wider mb-4">
              Ihr Ansprechpartner
            </span>
            <h2 className="text-3xl font-black text-gray-900 mb-4">
              Wir freuen uns auf <span className="text-orange-500">Sie</span>
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Unser Team steht Ihnen mit Rat und Tat zur Seite – ob Sie einen Job suchen oder Personal benötigen.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            <div className="bg-white border border-gray-200 rounded-2xl p-6 hover:border-orange-300 hover:shadow-lg transition-all">
              <div className="flex items-center gap-4 mb-4">
                <div className="w-14 h-14 bg-orange-500 rounded-xl flex items-center justify-center">
                  <Users className="w-7 h-7 text-white" />
                </div>
                <div>
                  <h3 className="font-bold text-gray-900">Für Bewerber</h3>
                  <p className="text-sm text-gray-600">Jobsuche & Karriereberatung</p>
                </div>
              </div>
              <p className="text-gray-600 mb-4">
                Sie suchen einen neuen Job? Unser Recruiting-Team hilft Ihnen, 
                die passende Stelle zu finden.
              </p>
              <Link 
                to="/fuer-bewerber" 
                className="inline-flex items-center gap-2 text-orange-500 font-semibold hover:text-orange-600"
              >
                Mehr erfahren <ArrowRight size={16} />
              </Link>
            </div>

            <div className="bg-white border border-gray-200 rounded-2xl p-6 hover:border-orange-300 hover:shadow-lg transition-all">
              <div className="flex items-center gap-4 mb-4">
                <div className="w-14 h-14 bg-orange-500 rounded-xl flex items-center justify-center">
                  <Building2 className="w-7 h-7 text-white" />
                </div>
                <div>
                  <h3 className="font-bold text-gray-900">Für Unternehmen</h3>
                  <p className="text-sm text-gray-600">Personalanfragen & Beratung</p>
                </div>
              </div>
              <p className="text-gray-600 mb-4">
                Sie benötigen qualifiziertes Personal? Sprechen Sie mit unserem 
                Vertriebsteam über Ihre Anforderungen.
              </p>
              <Link 
                to="/unternehmen" 
                className="inline-flex items-center gap-2 text-orange-500 font-semibold hover:text-orange-600"
              >
                Mehr erfahren <ArrowRight size={16} />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-6 bg-gray-900 relative overflow-hidden">
        <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-[size:48px_48px]" />
        <div className="absolute top-0 left-1/4 w-[400px] h-[400px] bg-orange-500/10 rounded-full blur-[150px]" />
        
        <div className="max-w-4xl mx-auto text-center relative z-10">
          <Flame className="w-12 h-12 text-orange-500 mx-auto mb-6" />
          <h2 className="text-2xl md:text-4xl font-black text-white mb-4">
            Haben Sie noch Fragen?
          </h2>
          <p className="text-gray-400 mb-8 text-lg">
            Rufen Sie uns an oder besuchen Sie uns in Pforzheim. Wir beraten Sie gerne persönlich.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a 
              href="tel:+4972316039493" 
              className="group inline-flex items-center justify-center gap-2 bg-orange-500 hover:bg-orange-600 text-white px-8 py-4 rounded-xl font-semibold hover:shadow-xl hover:shadow-orange-500/30 transition-all"
            >
              <Phone size={18} />
              07231 / 60 39 493
            </a>
            <a 
              href="mailto:info@persoflex-gmbh.de" 
              className="inline-flex items-center justify-center gap-2 border-2 border-gray-600 text-white px-8 py-4 rounded-xl font-semibold hover:bg-gray-800 hover:border-gray-500 transition-all"
            >
              <Mail size={18} />
              E-Mail senden
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};
