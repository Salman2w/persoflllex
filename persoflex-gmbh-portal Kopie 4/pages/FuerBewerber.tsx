import React, { useState } from 'react';
import { Link } from 'react-router-dom';
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
  MapPin,
  Flame,
  CheckCircle2,
  ChevronDown
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
  const benefits = [
    { icon: Coins, title: "Faire Bezahlung", desc: "Bezahlung nach BAP-Tarifvertrag, Branchenzuschläge sowie Urlaubs- und Weihnachtsgeld." },
    { icon: Fuel, title: "50€ Tankgutschein", desc: "Monatlicher steuerfreier Sachbezug als Tankgutschein oder Guthabenkarte." },
    { icon: Palmtree, title: "30 Tage Urlaub", desc: "Erholung ist wichtig. Bei uns erhältst du bis zu 30 Tage Urlaub im Jahr." },
    { icon: GraduationCap, title: "Weiterbildung", desc: "Wir fördern deine Karriere mit Staplerscheinen oder spezifischen Schulungen." },
    { icon: UserCheck, title: "Persönlicher Ansprechpartner", desc: "Keine anonyme Hotline. Dein Betreuer in Pforzheim ist immer für dich da." },
    { icon: Briefcase, title: "Top Arbeitgeber", desc: "Zugang zu attraktiven Unternehmen im Enzkreis mit hohen Übernahmechancen." }
  ];

  const categories = [
    { title: "Lager & Logistik", icon: Package },
    { title: "Produktion", icon: Factory },
    { title: "Handwerk", icon: Wrench },
    { title: "Kaufmännisch", icon: Monitor }
  ];

  const steps = [
    { num: "1", title: "Bewerben", desc: "Schick uns deinen Lebenslauf oder ruf einfach kurz an. Ganz ohne Anschreiben-Stress." },
    { num: "2", title: "Kennenlernen", desc: "Wir treffen uns in Pforzheim auf einen Kaffee und besprechen deine Wünsche." },
    { num: "3", title: "Starten", desc: "Vertrag unterschreiben, Arbeitskleidung abholen und loslegen!" }
  ];

  return (
    <div className="min-h-screen bg-white">
      <SEO
        title="Jobs in Pforzheim & Enzkreis | PersoFlex GmbH Bewerberportal"
        description="Finde deinen neuen Job in Pforzheim! Wir bieten faire Zeitarbeit & direkte Personalvermittlung. Bis zu 30 Tage Urlaub & Tankgutschein. Jetzt bewerben!"
        keywords="Jobs Pforzheim, Bewerber Portal, Zeitarbeit Enzkreis, Karriere Baden-Württemberg"
      />

      <script type="application/ld+json">
        {JSON.stringify(structuredData)}
      </script>

      {/* Hero Section */}
      <section className="relative pt-32 pb-24 overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute top-1/4 right-0 w-[600px] h-[600px] bg-orange-500/10 rounded-full blur-[150px]" />
          <div className="absolute bottom-0 left-1/4 w-[400px] h-[400px] bg-red-500/10 rounded-full blur-[120px]" />
        </div>

        <div className="max-w-7xl mx-auto px-6 relative z-10">
          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-gray-50 border border-gray-200 mb-6">
              <Flame className="w-4 h-4 text-orange-500" />
              <span className="text-sm text-gray-600">Deine Karriere im Enzkreis</span>
            </div>
            
            <h1 className="text-4xl md:text-6xl font-black text-gray-900 mb-6 leading-tight">
              Mehr als nur <br />
              <span className="text-gradient-flame">ein Job.</span>
            </h1>
            <p className="text-lg text-gray-600 mb-10 leading-relaxed">
              Wir sind dein neuer Partner in Pforzheim.
              Wir bieten dir echte Perspektiven, faire Bezahlung und ein Team, das dich wertschätzt.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4">
              <Link 
                to="/jobs" 
                className="group relative overflow-hidden bg-gradient-to-r from-orange-500 to-red-500 text-white px-8 py-4 rounded-xl font-bold transition-all duration-300 hover:shadow-lg hover:scale-105 inline-flex items-center justify-center gap-2"
              >
                <span className="relative z-10">Zu den Stellenangeboten</span>
                <ArrowRight size={18} className="relative z-10" />
              </Link>
              <Link 
                to="/kontakt" 
                className="px-8 py-4 border border-gray-300 rounded-xl text-gray-900 font-bold hover:bg-gray-50 hover:border-orange-500/50 transition-all inline-flex items-center justify-center gap-2"
              >
                <Send size={18} />
                Initiativbewerbung
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-24 bg-gray-50 border-y border-gray-200">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-orange-500/10 text-orange-500 text-sm font-semibold uppercase tracking-wider mb-4">
              Deine Vorteile
            </span>
            <h2 className="text-3xl md:text-4xl font-black text-gray-900 mb-4">
              Warum <span className="text-gradient-flame">PersoFlex</span>?
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Wir sind kein Callcenter, sondern dein Partner vor Ort. Als Arbeitnehmer profitierst du von festen Tarifverträgen und echten Zusatzleistungen.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {benefits.map((benefit, idx) => (
              <div
                key={idx}
                className="group bg-white border border-gray-200 rounded-2xl p-8 hover:border-orange-500/50 hover:shadow-xl transition-all duration-300"
              >
                <div className="w-14 h-14 bg-orange-500/10 text-orange-500 rounded-2xl flex items-center justify-center mb-6 group-hover:bg-orange-500 group-hover:text-white group-hover:scale-110 transition-all">
                  <benefit.icon size={28} />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">{benefit.title}</h3>
                <p className="text-gray-600 leading-relaxed">{benefit.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Trust Section */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div className="relative">
              <div className="aspect-[4/3] rounded-3xl overflow-hidden border border-gray-200">
                <img
                  src="/bilder/betreuung.webp"
                  alt="Persönliche Betreuung bei PersoFlex GmbH"
                  className="w-full h-full object-cover"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-white/90 via-transparent to-transparent" />
                <div className="absolute bottom-6 left-6">
                  <p className="font-bold text-gray-900 text-lg">Dein Team in Pforzheim</p>
                  <p className="text-sm text-gray-600">Wir kümmern uns.</p>
                </div>
              </div>
            </div>

            <div>
              <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-orange-500/10 text-orange-500 text-sm font-semibold uppercase tracking-wider mb-4">
                Über uns
              </span>
              <h2 className="text-3xl md:text-4xl font-black text-gray-900 mb-6">
                Wir sind Partner, <br />keine Nummern.
              </h2>
              <div className="space-y-4 text-gray-600">
                <p>
                  Als moderner <strong className="text-gray-900">Personaldienstleister in Pforzheim</strong> wissen wir: Ein Job ist mehr als nur Geld verdienen. Es geht um Wertschätzung, das richtige Umfeld und echte Chancen.
                </p>
                <p>
                  Egal ob du über <strong className="text-gray-900">Zeitarbeit</strong> bei uns startest oder wir dich direkt in eine <strong className="text-gray-900">Festanstellung</strong> vermitteln – wir begleiten dich. Ehrlich, direkt und auf Augenhöhe.
                </p>
              </div>

              <div className="mt-8 p-6 bg-gray-50 border border-gray-200 rounded-2xl">
                <h3 className="text-lg font-bold text-gray-900 mb-2 flex items-center gap-2">
                  <MapPin className="text-orange-500" size={20} />
                  Jobs in deiner Nähe
                </h3>
                <p className="text-sm text-gray-600">
                  Wir vermitteln Jobs in <strong className="text-gray-900">Pforzheim</strong>, <strong className="text-gray-900">Mühlacker</strong>, <strong className="text-gray-900">Birkenfeld</strong>, <strong className="text-gray-900">Keltern</strong> und dem gesamten Enzkreis.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Job Categories */}
      <section className="py-24 bg-gray-50 border-y border-gray-200">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-black text-gray-900 mb-4">
              Wir suchen dich in diesen <span className="text-gradient-flame">Bereichen</span>
            </h2>
          </div>
          
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {categories.map((cat, idx) => (
              <div 
                key={idx} 
                className="group bg-white border border-gray-200 rounded-2xl p-8 text-center hover:border-orange-500/50 hover:shadow-md transition-all cursor-pointer"
              >
                <div className="w-16 h-16 bg-orange-500/10 text-orange-500 rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:bg-orange-500 group-hover:text-white group-hover:scale-110 transition-all">
                  <cat.icon size={32} />
                </div>
                <h3 className="font-bold text-gray-900">{cat.title}</h3>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-orange-500/10 text-orange-500 text-sm font-semibold uppercase tracking-wider mb-4">
              Der Weg zum Job
            </span>
            <h2 className="text-3xl md:text-4xl font-black text-gray-900">
              So einfach geht&apos;s
            </h2>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {steps.map((step, idx) => (
              <div key={idx} className="relative text-center p-8 bg-gray-50 border border-gray-200 rounded-2xl">
                <h3 className="text-xl font-bold text-gray-900 mb-3">{step.title}</h3>
                <p className="text-gray-600">{step.desc}</p>
                
                {idx < steps.length - 1 && (
                  <div className="hidden md:block absolute top-1/2 -right-4 w-8 h-px bg-gradient-to-r from-orange-500 to-transparent" />
                )}
              </div>
            ))}
          </div>

          <div className="text-center mt-12">
            <Link 
              to="/kontakt" 
              className="inline-flex items-center gap-2 bg-gradient-to-r from-orange-500 to-red-500 text-white px-8 py-4 rounded-xl font-bold hover:shadow-lg transition-all"
            >
              Jetzt Termin vereinbaren <ArrowRight size={18} />
            </Link>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-24 bg-gray-50 border-t border-gray-200">
        <div className="max-w-3xl mx-auto px-6">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-black text-gray-900">Häufig gestellte Fragen</h2>
          </div>
          
          <div className="space-y-4">
            {FAQ_DATA.map((item, idx) => (
              <FaqItem key={idx} question={item.question} answer={item.answer} />
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

const FaqItem: React.FC<{ question: string; answer: string }> = ({ question, answer }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="bg-white border border-gray-200 rounded-2xl overflow-hidden">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="w-full flex justify-between items-center p-6 text-left hover:bg-gray-50 transition-colors"
      >
        <span className="font-bold text-gray-900 pr-4">{question}</span>
        <ChevronDown 
          size={20} 
          className={`text-gray-500 shrink-0 transition-transform duration-200 ${isOpen ? 'rotate-180' : ''}`} 
        />
      </button>
      {isOpen && (
        <div className="px-6 pb-6 text-gray-600 leading-relaxed border-t border-gray-200 pt-4">
          {answer}
        </div>
      )}
    </div>
  );
};
