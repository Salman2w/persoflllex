import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import { motion } from 'framer-motion';
import {
  Briefcase,
  Coins,
  Fuel,
  Palmtree,
  GraduationCap,
  UserCheck,
  ArrowRight,
  Package,
  Wrench,
  Factory,
  Monitor,
  Send,
  MapPin
} from 'lucide-react';
import { SEO } from '../components/SEO';

const FAQ_DATA = [
  {
    question: "Verdient man in der Zeitarbeit weniger?",
    answer: "Nein. Wir zahlen nach dem BAP-Tarifvertrag, was faire Löhne garantiert. Oft gibt es zusätzlich Branchenzuschläge, sodass der Lohn vergleichbar mit der Festangestelltenschaft ist."
  },
  {
    question: "Vermitteln Sie auch direkt in Festanstellung?",
    answer: "Ja. Neben der Arbeitnehmerüberlassung sind wir stark in der Personalvermittlung tätig. Wir bringen dich direkt mit Unternehmen im Enzkreis zusammen, die zur Festanstellung suchen."
  },
  {
    question: "Muss ich für die Vermittlung bezahlen?",
    answer: "Nein. Für Bewerber ist unser gesamter Service zu 100% kostenlos."
  },
  {
    question: "Wie schnell kann ich anfangen?",
    answer: "Oft sehr schnell. Manchmal haben wir Jobs, die schon morgen starten können. Das hängt von deiner Qualifikation und den aktuellen Stellenangeboten ab."
  }
];

const structuredData = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "mainEntity": FAQ_DATA.map(faq => ({
    "@type": "Question",
    "name": faq.question,
    "acceptedAnswer": {
      "@type": "Answer",
      "text": faq.answer
    }
  }))
};

export const FuerBewerber: React.FC = () => {
  return (
    <div className="min-h-screen bg-white pt-[80px]">
      <SEO
        title="Jobs in Pforzheim & Enzkreis | PersoFlex GmbH Bewerberportal"
        description="Finde deinen neuen Job in Pforzheim! Wir bieten faire Zeitarbeit & direkte Personalvermittlung. Bis zu 30 Tage Urlaub & Tankgutschein. Jetzt bewerben!"
      />

      <script type="application/ld+json">
        {JSON.stringify(structuredData)}
      </script>

      {/* 1. Hero Section - AUTHENTISCH & FRISCH */}
      <section className="bg-brand-black text-white py-16 md:py-32 relative overflow-hidden">
        <div className="absolute top-0 right-0 w-[300px] md:w-[500px] h-[300px] md:h-[500px] bg-brand-orange opacity-10 rounded-full blur-[80px] md:blur-[120px] translate-x-1/2 -translate-y-1/2"></div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 relative z-10 text-center md:text-left">
          <span className="inline-block py-1 px-3 bg-brand-orange/20 text-brand-orange border border-brand-orange text-xs font-bold uppercase tracking-widest mb-6 rounded-sm">
            Deine Karriere im Enzkreis
          </span>
          <h1 className="text-3xl sm:text-4xl md:text-6xl font-black mb-6 leading-tight max-w-4xl">
            Mehr als nur <br />
            <span className="text-brand-orange">ein Job.</span>
          </h1>
          <p className="text-lg sm:text-xl text-gray-400 max-w-2xl mb-10 leading-relaxed mx-auto md:mx-0">
            Wir sind dein neuer Partner in Pforzheim.
            Wir bieten dir echte Perspektiven, faire Bezahlung und ein Team, das dich wertschätzt.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start">
            <NavLink to="/jobs" className="inline-flex items-center justify-center gap-3 bg-brand-orange text-white px-8 py-4 text-lg font-bold hover:bg-white hover:text-brand-black transition-colors rounded-sm shadow-xl shadow-brand-orange/20 w-full sm:w-auto">
              Zu den Stellenangeboten <ArrowRight size={20} />
            </NavLink>
            <NavLink to="/bewerbung/initiativ" className="inline-flex items-center justify-center gap-3 bg-transparent border border-white/30 text-white px-8 py-4 text-lg font-bold hover:bg-white/10 transition-colors rounded-sm w-full sm:w-auto">
              Initiativbewerbung <Send size={20} />
            </NavLink>
          </div>
        </div>
      </section>

      {/* 2. Benefit Section (Grid) */}
      <section className="py-16 md:py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="text-center mb-12 md:mb-16">
            <h2 className="text-2xl sm:text-3xl font-black text-brand-black mb-4">Warum PersoFlex? Deine Vorteile.</h2>
            <p className="text-gray-600 max-w-2xl mx-auto text-sm sm:text-base">
              Wir sind kein Callcenter, sondern dein Partner vor Ort. Als Arbeitnehmer profitierst du von festen Tarifverträgen und echten Zusatzleistungen.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
            {[
              {
                icon: <Coins size={32} />,
                title: "Faire Bezahlung",
                desc: "Bezahlung nach BAP-Tarifvertrag, Branchenzuschläge sowie Urlaubs- und Weihnachtsgeld."
              },
              {
                icon: <Fuel size={32} />,
                title: "50€ Tankgutschein",
                desc: "Monatlicher steuerfreier Sachbezug als Tankgutschein oder Guthabenkarte."
              },
              {
                icon: <Palmtree size={32} />,
                title: "30 Tage Urlaub",
                desc: "Erholung ist wichtig. Bei uns erhältst du bis zu 30 Tage Urlaub im Jahr."
              },
              {
                icon: <GraduationCap size={32} />,
                title: "Weiterbildung",
                desc: "Wir fördern deine Karriere mit Staplerscheinen oder spezifischen Schulungen."
              },
              {
                icon: <UserCheck size={32} />,
                title: "Persönlicher Ansprechpartner",
                desc: "Keine anonyme Hotline. Dein Betreuer in Pforzheim ist immer für dich da."
              },
              {
                icon: <Briefcase size={32} />,
                title: "Top Arbeitgeber",
                desc: "Zugang zu attraktiven Unternehmen im Enzkreis mit hohen Übernahmechancen."
              }
            ].map((benefit, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1 }}
                className="bg-white p-6 sm:p-8 rounded-lg shadow-sm border border-gray-100 hover:border-brand-orange hover:shadow-md transition-all group"
              >
                <div className="text-brand-orange mb-4 bg-orange-50 w-16 h-16 rounded-full flex items-center justify-center group-hover:scale-110 transition-transform">
                  {benefit.icon}
                </div>
                <h3 className="text-xl font-bold mb-3 text-brand-black">{benefit.title}</h3>
                <p className="text-gray-600 leading-relaxed text-sm sm:text-base">{benefit.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* 3. Trust Section & SEO Text */}
      <section className="py-16 md:py-24 bg-white overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 flex flex-col lg:flex-row items-center gap-12 lg:gap-20">

          <div className="w-full lg:w-1/2">
            <div className="relative rounded-2xl overflow-hidden shadow-2xl">
              <img
                src="/bilder/betreuung.webp"
                alt="Persönliche Betreuung bei PersoFlex GmbH"
                className="w-full h-auto object-cover transform hover:scale-105 transition-transform duration-700"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
              <div className="absolute bottom-6 left-6 text-white">
                <p className="font-bold text-lg">Dein Team in Pforzheim</p>
                <p className="text-sm opacity-90">Wir kümmern uns.</p>
              </div>
            </div>
          </div>

          <div className="w-full lg:w-1/2 prose prose-lg text-gray-600">
            <span className="text-brand-orange font-bold uppercase tracking-widest text-xs mb-2 block">
              Über uns
            </span>
            <h2 className="text-3xl font-black text-brand-black mb-6">
              Wir sind Partner, <br />keine Nummern.
            </h2>
            <p>
              Als moderner <strong>Personaldienstleister in Pforzheim</strong> wissen wir: Ein Job ist mehr als nur Geld verdienen. Es geht um Wertschätzung, das richtige Umfeld und echte Chancen.
            </p>
            <p>
              Egal ob du über <strong>Zeitarbeit</strong> bei uns startest oder wir dich direkt in eine <strong>Festanstellung</strong> vermitteln – wir begleiten dich. Ehrlich, direkt und auf Augenhöhe.
            </p>

            <div className="bg-gray-50 p-6 rounded-lg border-l-4 border-brand-orange mt-8 not-prose">
              <h3 className="text-lg font-bold text-brand-black mb-2 flex items-center gap-2">
                <MapPin className="text-brand-orange" size={20} />
                Jobs in deiner Nähe
              </h3>
              <p className="text-sm text-gray-600 m-0">
                Wir vermitteln Jobs in <strong>Pforzheim</strong>, <strong>Mühlacker</strong>, <strong>Birkenfeld</strong>, <strong>Keltern</strong> und dem gesamten Enzkreis. Kurze Arbeitswege sind uns wichtig.
              </p>
            </div>
          </div>

        </div>
      </section>

      {/* 4. Job Categories */}
      <section className="bg-brand-black text-white py-16 md:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <h2 className="text-2xl sm:text-3xl font-black mb-10 text-center">Wir suchen dich in diesen Bereichen</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 sm:gap-6">
            {[
              { title: "Lager & Logistik", icon: <Package size={32} /> },
              { title: "Produktion", icon: <Factory size={32} /> },
              { title: "Handwerk", icon: <Wrench size={32} /> },
              { title: "Kaufmännisch", icon: <Monitor size={32} /> }
            ].map((cat, idx) => (
              <div key={idx} className="bg-white/5 border border-white/10 p-6 rounded hover:bg-white/10 transition-colors text-center group cursor-pointer">
                <div className="text-brand-orange mb-4 flex justify-center group-hover:scale-110 transition-transform">
                  {cat.icon}
                </div>
                <h3 className="font-bold text-base sm:text-lg">{cat.title}</h3>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 5. Process Section (Roadmap) */}
      <section className="py-16 md:py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="text-center mb-12 md:mb-16">
            <span className="text-brand-orange font-bold uppercase tracking-widest text-sm">Der Weg zum Job</span>
            <h2 className="text-3xl font-black text-brand-black mt-2">So einfach geht's</h2>
          </div>

          <div className="relative">
            {/* Line - Hidden on Mobile */}
            <div className="hidden md:block absolute top-[40px] left-[10%] right-[10%] h-1 bg-gray-100 z-0"></div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-10 md:gap-12 relative z-10">
              <div className="flex flex-col items-center text-center">
                <div className="w-20 h-20 bg-brand-orange text-white rounded-full flex items-center justify-center text-2xl font-black mb-6 shadow-xl border-4 border-white z-10">1</div>
                <h3 className="text-xl font-bold mb-2">Bewerben</h3>
                <p className="text-gray-600 text-sm sm:text-base">Schick uns deinen Lebenslauf oder ruf einfach kurz an. Ganz ohne Anschreiben-Stress.</p>
              </div>
              <div className="flex flex-col items-center text-center">
                <div className="w-20 h-20 bg-brand-black text-white rounded-full flex items-center justify-center text-2xl font-black mb-6 shadow-xl border-4 border-white z-10">2</div>
                <h3 className="text-xl font-bold mb-2">Kennenlernen</h3>
                <p className="text-gray-600 text-sm sm:text-base">Wir treffen uns in Pforzheim auf einen Kaffee und besprechen deine Wünsche.</p>
              </div>
              <div className="flex flex-col items-center text-center">
                <div className="w-20 h-20 bg-brand-orange text-white rounded-full flex items-center justify-center text-2xl font-black mb-6 shadow-xl border-4 border-white z-10">3</div>
                <h3 className="text-xl font-bold mb-2">Starten</h3>
                <p className="text-gray-600 text-sm sm:text-base">Vertrag unterschreiben, Arbeitskleidung abholen und loslegen!</p>
              </div>
            </div>
          </div>

          <div className="text-center mt-12">
            <NavLink to="/kontakt" className="bg-brand-black text-white px-8 py-4 rounded font-bold hover:bg-brand-orange transition-colors w-full sm:w-auto inline-block">
              Jetzt Termin vereinbaren
            </NavLink>
          </div>
        </div>
      </section>

      {/* 6. FAQ Section */}
      <section className="py-16 md:py-20 bg-gray-50 border-t border-gray-200">
        <div className="max-w-3xl mx-auto px-4 sm:px-6">
          <h2 className="text-2xl sm:text-3xl font-black text-center mb-10 md:mb-12">Häufig gestellte Fragen</h2>
          <div className="space-y-4">
            {FAQ_DATA.map((item, idx) => (
              <FaqItem
                key={idx}
                question={item.question}
                answer={item.answer}
              />
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

// Helper Component for FAQ
const FaqItem: React.FC<{ question: string; answer: string }> = ({ question, answer }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="bg-white rounded-lg border border-gray-200 overflow-hidden">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="w-full flex justify-between items-center p-4 sm:p-6 text-left hover:bg-gray-50 transition-colors focus:outline-none"
      >
        <span className="font-bold text-base sm:text-lg text-brand-black pr-4">{question}</span>
        <span className={`transform transition-transform duration-200 flex-shrink-0 ${isOpen ? 'rotate-180' : ''}`}>
          {/* Simple chevron */}
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polyline points="6 9 12 15 18 9"></polyline></svg>
        </span>
      </button>
      {isOpen && (
        <div className="p-4 sm:p-6 pt-0 text-gray-600 leading-relaxed border-t border-gray-100 animate-fadeIn text-sm sm:text-base">
          {answer}
        </div>
      )}
    </div>
  );
};