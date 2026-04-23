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
  ChevronDown,
  Shield,
  Heart,
  Clock,
  TrendingUp,
  Users,
  Award,
  Phone,
  FileText,
  Handshake
} from 'lucide-react';
import { SEO } from '../components/SEO';

const FAQ_DATA = [
  {
    question: "Verdient man in der Zeitarbeit weniger?",
    answer: "Nein. Wir zahlen nach dem BAP-Tarifvertrag, was faire Löhne garantiert. Oft gibt es zusätzlich Branchenzuschläge, sodass der Lohn vergleichbar mit der Festangestelltenschaft ist. Transparente Gehaltsabrechnungen und pünktliche Zahlung sind für uns selbstverständlich."
  },
  {
    question: "Vermitteln Sie auch direkt in Festanstellung?",
    answer: "Ja. Neben der Arbeitnehmerüberlassung sind wir stark in der Personalvermittlung tätig. Wir bringen dich direkt mit Unternehmen im Enzkreis zusammen, die zur Festanstellung suchen. Viele unserer Zeitarbeitnehmer werden auch von den Einsatzbetrieben übernommen."
  },
  {
    question: "Muss ich für die Vermittlung bezahlen?",
    answer: "Nein. Für Bewerber ist unser gesamter Service zu 100% kostenlos. Wir finanzieren uns ausschließlich über die Unternehmen, die uns beauftragen."
  },
  {
    question: "Wie schnell kann ich anfangen?",
    answer: "Oft sehr schnell. Manchmal haben wir Jobs, die schon morgen starten können. Das hängt von deiner Qualifikation und den aktuellen Stellenangeboten ab. In der Regel dauert der Prozess von der Bewerbung bis zum Arbeitsstart nur wenige Tage."
  },
  {
    question: "Welche Unterlagen brauche ich für die Bewerbung?",
    answer: "Im ersten Schritt reicht ein aktueller Lebenslauf. Gerne kannst du auch Arbeitszeugnisse und Qualifikationsnachweise mitbringen. Ein klassisches Anschreiben ist bei uns nicht erforderlich – wir lernen dich lieber persönlich kennen."
  },
  {
    question: "Bin ich bei PersoFlex angestellt oder beim Einsatzbetrieb?",
    answer: "Bei der Arbeitnehmerüberlassung bist du bei PersoFlex angestellt. Wir kümmern uns um Gehalt, Urlaub und alle arbeitsrechtlichen Themen. Du arbeitest beim Kunden, aber wir sind dein Arbeitgeber und Ansprechpartner."
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
    { icon: Coins, title: "Faire Bezahlung", desc: "Bezahlung nach BAP-Tarifvertrag, Branchenzuschläge sowie Urlaubs- und Weihnachtsgeld. Pünktliche Gehaltszahlung garantiert." },
    { icon: Fuel, title: "50 Euro Tankgutschein", desc: "Monatlicher steuerfreier Sachbezug als Tankgutschein oder Guthabenkarte – zusätzlich zum Gehalt." },
    { icon: Palmtree, title: "30 Tage Urlaub", desc: "Erholung ist wichtig. Bei uns erhältst du bis zu 30 Tage Urlaub im Jahr für deine Work-Life-Balance." },
    { icon: GraduationCap, title: "Weiterbildung", desc: "Wir fördern deine Karriere mit Staplerscheinen, Schweißer-Zertifikaten oder spezifischen Schulungen." },
    { icon: UserCheck, title: "Persönlicher Ansprechpartner", desc: "Keine anonyme Hotline. Dein Betreuer in Pforzheim ist immer für dich da – auch bei Problemen." },
    { icon: Briefcase, title: "Top Arbeitgeber", desc: "Zugang zu attraktiven Unternehmen im Enzkreis mit hohen Übernahmechancen in Festanstellung." }
  ];

  const categories = [
    { title: "Lager & Logistik", icon: Package, jobs: ["Kommissionierer", "Staplerfahrer", "Lagerhelfer", "Versandmitarbeiter"] },
    { title: "Produktion", icon: Factory, jobs: ["Produktionshelfer", "Maschinenbediener", "Montierer", "Qualitätsprüfer"] },
    { title: "Handwerk", icon: Wrench, jobs: ["Schlosser", "Schweißer", "Elektriker", "Mechaniker"] },
    { title: "Kaufmännisch", icon: Monitor, jobs: ["Sachbearbeiter", "Buchhalter", "Assistenz", "Empfang"] }
  ];

  const steps = [
    { num: "1", title: "Bewerben", desc: "Schick uns deinen Lebenslauf oder ruf einfach kurz an. Ganz ohne Anschreiben-Stress. Wir melden uns innerhalb von 24 Stunden.", icon: FileText },
    { num: "2", title: "Kennenlernen", desc: "Wir treffen uns in Pforzheim auf einen Kaffee und besprechen deine Wünsche, Stärken und Gehaltsvorstellungen.", icon: Handshake },
    { num: "3", title: "Starten", desc: "Vertrag unterschreiben, Arbeitskleidung abholen und loslegen! Wir begleiten dich auch während des Einsatzes.", icon: TrendingUp }
  ];

  const whyUs = [
    { icon: Shield, title: "Sicherheit", desc: "Feste Arbeitsverträge und tarifliche Absicherung nach BAP geben dir Planungssicherheit." },
    { icon: Heart, title: "Wertschätzung", desc: "Du bist bei uns kein Fall, sondern ein Mensch. Wir behandeln dich mit Respekt." },
    { icon: Clock, title: "Flexibilität", desc: "Vollzeit, Teilzeit oder Schichtarbeit – wir finden das Modell, das zu deinem Leben passt." },
    { icon: TrendingUp, title: "Perspektive", desc: "Zeitarbeit als Sprungbrett: Viele unserer Mitarbeiter werden von den Betrieben übernommen." }
  ];

  return (
    <div className="min-h-screen bg-white">
  <SEO
  title="Jobs in Pforzheim finden | Für Bewerber | PersoFlex GmbH"
  description="Jobs in Produktion, Logistik und Handwerk in Pforzheim. Tariflicher Lohn nach BAP, 30 Tage Urlaub, Tankgutschein und persönliche Betreuung."
  keywords="Jobs Pforzheim, Bewerber, Zeitarbeit Enzkreis, Produktionshelfer, Staplerfahrer, Lagerjobs"
  canonicalUrl="https://www.persoflex-gmbh.de/fuer-bewerber"
  structuredData={structuredData}
  />

      {/* Hero Section */}
      <section className="relative pt-32 pb-24 overflow-hidden">
        {/* Background Image */}
        <div className="absolute inset-0">
  <img
  src="/bilder/bewerber-hero.jpg"
  alt="Jobs und Karrieremöglichkeiten in Pforzheim und Enzkreis — PersoFlex GmbH"
  className="w-full h-full object-cover"
  width={1920}
  height={1080}
  fetchPriority="high"
  decoding="async"
  />
          <div className="absolute inset-0 bg-gradient-to-r from-white/95 via-white/85 to-white/50" />
        </div>
        <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-orange-200/30 rounded-full blur-[120px]" />

        <div className="max-w-7xl mx-auto px-6 relative z-10">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-orange-500 text-white mb-6 shadow-lg shadow-orange-500/25">
                <Flame className="w-4 h-4" />
                <span className="text-sm font-semibold">Deine Karriere im Enzkreis</span>
              </div>
              
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-black text-gray-900 mb-6 leading-tight">
                Jobs in Pforzheim —{' '}
                <span className="text-orange-500">schnell, fair, persönlich.</span>
              </h1>
              <p className="text-lg text-gray-600 mb-8 leading-relaxed">
                Wir vermitteln dich in Produktion, Logistik, Lager und Handwerk bei Betrieben im 
                Enzkreis. Tariflich bezahlt nach BAP, mit 30 Tagen Urlaub, persönlichem Ansprechpartner 
                in Pforzheim — und oft mit konkreter Übernahmechance in die Festanstellung.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4 mb-10">
                <Link 
                  to="/jobs" 
                  className="group bg-orange-500 hover:bg-orange-600 text-white px-8 py-4 rounded-xl font-semibold transition-all duration-300 hover:shadow-xl hover:shadow-orange-500/30 inline-flex items-center justify-center gap-2"
                >
                  <span>Zu den Stellenangeboten</span>
                  <ArrowRight size={18} className="transition-transform group-hover:translate-x-1" />
                </Link>
                <Link 
                  to="/kontakt" 
                  className="px-8 py-4 border-2 border-gray-200 rounded-xl text-gray-700 font-semibold hover:border-orange-300 hover:bg-orange-50 transition-all inline-flex items-center justify-center gap-2"
                >
                  <Send size={18} />
                  Initiativbewerbung
                </Link>
              </div>

              {/* Quick Stats */}
              <div className="flex flex-wrap gap-6">
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-5 h-5 text-orange-500" />
                  <span className="text-sm font-medium text-gray-700">100% kostenlos</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-5 h-5 text-orange-500" />
                  <span className="text-sm font-medium text-gray-700">Tarifgebunden</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-5 h-5 text-orange-500" />
                  <span className="text-sm font-medium text-gray-700">Persönliche Betreuung</span>
                </div>
              </div>
            </div>

            {/* Benefits Card */}
            <div className="bg-white border-2 border-orange-200 rounded-2xl p-8 shadow-xl">
              <h3 className="text-xl font-bold text-gray-900 mb-6 flex items-center gap-2">
                <Award className="w-6 h-6 text-orange-500" />
                Deine Vorteile auf einen Blick
              </h3>
              <ul className="space-y-4">
                <li className="flex items-start gap-3">
                  <div className="w-6 h-6 rounded-full bg-orange-500 flex items-center justify-center flex-shrink-0 mt-0.5">
                    <span className="text-white text-xs font-bold">1</span>
                  </div>
                  <div>
                    <p className="font-semibold text-gray-900">Faire Bezahlung nach Tarif</p>
                    <p className="text-sm text-gray-600">BAP-Tarifvertrag + Branchenzuschläge</p>
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <div className="w-6 h-6 rounded-full bg-orange-500 flex items-center justify-center flex-shrink-0 mt-0.5">
                    <span className="text-white text-xs font-bold">2</span>
                  </div>
                  <div>
                    <p className="font-semibold text-gray-900">Bis zu 30 Tage Urlaub</p>
                    <p className="text-sm text-gray-600">Plus Urlaubs- und Weihnachtsgeld</p>
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <div className="w-6 h-6 rounded-full bg-orange-500 flex items-center justify-center flex-shrink-0 mt-0.5">
                    <span className="text-white text-xs font-bold">3</span>
                  </div>
                  <div>
                    <p className="font-semibold text-gray-900">50 Euro Tankgutschein monatlich</p>
                    <p className="text-sm text-gray-600">Steuerfreier Sachbezug</p>
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <div className="w-6 h-6 rounded-full bg-orange-500 flex items-center justify-center flex-shrink-0 mt-0.5">
                    <span className="text-white text-xs font-bold">4</span>
                  </div>
                  <div>
                    <p className="font-semibold text-gray-900">Persönlicher Ansprechpartner</p>
                    <p className="text-sm text-gray-600">Direkt vor Ort in Pforzheim</p>
                  </div>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Why PersoFlex Section */}
      <section className="py-24 bg-gray-50 border-y border-gray-200">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-orange-100 border border-orange-200 text-orange-600 text-sm font-semibold uppercase tracking-wider mb-4">
              Warum wir?
            </span>
            <h2 className="text-3xl md:text-4xl font-black text-gray-900 mb-4">
              Warum <span className="text-orange-500">PersoFlex</span>?
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto text-lg">
              Wir sind kein Callcenter, sondern dein Partner vor Ort. Als Arbeitnehmer 
              profitierst du von festen Tarifverträgen und echten Zusatzleistungen.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
            {whyUs.map((item, idx) => (
              <div
                key={idx}
                className="bg-white border border-gray-200 rounded-2xl p-6 hover:border-orange-300 hover:shadow-lg transition-all"
              >
                <div className="w-12 h-12 bg-orange-500 text-white rounded-xl flex items-center justify-center mb-4">
                  <item.icon size={24} />
                </div>
                <h3 className="text-lg font-bold text-gray-900 mb-2">{item.title}</h3>
                <p className="text-gray-600 text-sm">{item.desc}</p>
              </div>
            ))}
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {benefits.map((benefit, idx) => (
              <div
                key={idx}
                className="group bg-white border border-gray-200 rounded-2xl p-8 hover:border-orange-300 hover:shadow-xl transition-all duration-300"
              >
                <div className="w-14 h-14 bg-orange-100 text-orange-500 rounded-2xl flex items-center justify-center mb-6 group-hover:bg-orange-500 group-hover:text-white transition-all">
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
              <div className="aspect-[4/3] rounded-2xl overflow-hidden border border-gray-200 shadow-lg">
                <img
                  src="/bilder/betreuung.webp"
                  alt="Persönliche Betreuung bei PersoFlex GmbH"
                  className="w-full h-full object-cover"
                  loading="lazy"
                />
              </div>
              <div className="absolute -bottom-6 -right-6 bg-orange-500 text-white p-6 rounded-xl shadow-lg max-w-xs">
                <p className="font-bold text-2xl mb-1">Persönlich</p>
                <p className="text-sm text-white/90">Dein Team vor Ort in Pforzheim</p>
              </div>
            </div>

            <div>
              <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-orange-100 border border-orange-200 text-orange-600 text-sm font-semibold uppercase tracking-wider mb-4">
                Über uns
              </span>
              <h2 className="text-3xl md:text-4xl font-black text-gray-900 mb-6">
                Wir sind Partner, <br />keine Nummern.
              </h2>
              <div className="space-y-4 text-gray-600 text-lg leading-relaxed">
                <p>
                  Als moderner <strong className="text-gray-900">Personaldienstleister in Pforzheim</strong> wissen 
                  wir: Ein Job ist mehr als nur Geld verdienen. Es geht um Wertschätzung, das richtige 
                  Umfeld und echte Chancen für deine Zukunft.
                </p>
                <p>
                  Egal ob du über <strong className="text-gray-900">Zeitarbeit</strong> bei uns startest oder 
                  wir dich direkt in eine <strong className="text-gray-900">Festanstellung</strong> vermitteln – 
                  wir begleiten dich. Ehrlich, direkt und auf Augenhöhe.
                </p>
              </div>

              <div className="mt-8 p-6 bg-gray-50 border border-gray-200 rounded-2xl">
                <h3 className="text-lg font-bold text-gray-900 mb-3 flex items-center gap-2">
                  <MapPin className="text-orange-500" size={20} />
                  Jobs in deiner Nähe
                </h3>
                <p className="text-gray-600 mb-4">
                  Wir vermitteln Jobs in <strong className="text-gray-900">Pforzheim</strong>, 
                  <strong className="text-gray-900"> Mühlacker</strong>, 
                  <strong className="text-gray-900"> Birkenfeld</strong>, 
                  <strong className="text-gray-900"> Keltern</strong>, 
                  <strong className="text-gray-900"> Ispringen</strong>, 
                  <strong className="text-gray-900"> Niefern</strong> und dem gesamten Enzkreis.
                </p>
                <Link 
                  to="/jobs" 
                  className="inline-flex items-center gap-2 text-orange-500 font-semibold hover:text-orange-600 transition-colors"
                >
                  Aktuelle Jobs ansehen <ArrowRight size={16} />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Job Categories */}
      <section className="py-24 bg-gray-50 border-y border-gray-200">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-12">
            <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-orange-100 border border-orange-200 text-orange-600 text-sm font-semibold uppercase tracking-wider mb-4">
              Branchen
            </span>
            <h2 className="text-3xl md:text-4xl font-black text-gray-900 mb-4">
              Wir suchen dich in diesen <span className="text-orange-500">Bereichen</span>
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Von der Produktion bis zum Büro – wir haben Jobs für verschiedene Qualifikationen und Erfahrungsstufen.
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {categories.map((cat, idx) => (
              <div 
                key={idx} 
                className="group bg-white border border-gray-200 rounded-2xl p-6 hover:border-orange-300 hover:shadow-lg transition-all"
              >
                <div className="w-14 h-14 bg-orange-100 text-orange-500 rounded-2xl flex items-center justify-center mb-4 group-hover:bg-orange-500 group-hover:text-white transition-all">
                  <cat.icon size={28} />
                </div>
                <h3 className="font-bold text-gray-900 text-lg mb-3">{cat.title}</h3>
                <ul className="space-y-2">
                  {cat.jobs.map((job, jobIdx) => (
                    <li key={jobIdx} className="text-sm text-gray-600 flex items-center gap-2">
                      <div className="w-1.5 h-1.5 bg-orange-500 rounded-full"></div>
                      {job}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

          <div className="text-center mt-12">
            <Link 
              to="/jobs" 
              className="inline-flex items-center gap-2 bg-orange-500 hover:bg-orange-600 text-white px-8 py-4 rounded-xl font-semibold hover:shadow-lg transition-all"
            >
              Alle Jobs ansehen <ArrowRight size={18} />
            </Link>
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-orange-100 border border-orange-200 text-orange-600 text-sm font-semibold uppercase tracking-wider mb-4">
              Der Weg zum Job
            </span>
            <h2 className="text-3xl md:text-4xl font-black text-gray-900 mb-4">
              So einfach geht&apos;s
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              In nur drei Schritten zu deinem neuen Job. Wir machen den Bewerbungsprozess so einfach wie möglich.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {steps.map((step, idx) => (
              <div key={idx} className="relative">
                <div className="bg-gray-50 border border-gray-200 rounded-2xl p-8 h-full hover:border-orange-300 transition-all">
                  <div className="w-14 h-14 bg-orange-500 text-white rounded-2xl flex items-center justify-center mb-6">
                    <step.icon size={28} />
                  </div>
                  <div className="text-5xl font-black text-orange-100 absolute top-4 right-6">{step.num}</div>
                  <h3 className="text-xl font-bold text-gray-900 mb-3">{step.title}</h3>
                  <p className="text-gray-600">{step.desc}</p>
                </div>
                
                {idx < steps.length - 1 && (
                  <div className="hidden md:block absolute top-1/2 -right-4 w-8 h-0.5 bg-orange-300" />
                )}
              </div>
            ))}
          </div>

          <div className="text-center mt-12">
            <div className="inline-flex flex-col sm:flex-row gap-4">
              <Link 
                to="/kontakt" 
                className="inline-flex items-center gap-2 bg-orange-500 hover:bg-orange-600 text-white px-8 py-4 rounded-xl font-semibold hover:shadow-lg transition-all"
              >
                Jetzt bewerben <ArrowRight size={18} />
              </Link>
              <a 
                href="tel:+4972316039493" 
                className="inline-flex items-center gap-2 border-2 border-gray-200 text-gray-700 px-8 py-4 rounded-xl font-semibold hover:border-orange-300 transition-all"
              >
                <Phone size={18} />
                07231 / 60 39 493
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-24 bg-gray-50 border-t border-gray-200">
        <div className="max-w-3xl mx-auto px-6">
          <div className="text-center mb-12">
            <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-orange-100 border border-orange-200 text-orange-600 text-sm font-semibold uppercase tracking-wider mb-4">
              FAQ
            </span>
            <h2 className="text-3xl md:text-4xl font-black text-gray-900 mb-4">Häufig gestellte Fragen</h2>
            <p className="text-gray-600">
              Hier findest du Antworten auf die wichtigsten Fragen rund um Zeitarbeit und Bewerbung.
            </p>
          </div>
          
          <div className="space-y-4">
            {FAQ_DATA.map((item, idx) => (
              <FaqItem key={idx} question={item.question} answer={item.answer} />
            ))}
          </div>

          <div className="text-center mt-12 p-8 bg-white border border-gray-200 rounded-2xl">
            <h3 className="text-xl font-bold text-gray-900 mb-3">Noch Fragen?</h3>
            <p className="text-gray-600 mb-6">Ruf uns an oder schreib uns – wir helfen dir gerne weiter.</p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a 
                href="tel:+4972316039493" 
                className="inline-flex items-center justify-center gap-2 bg-orange-500 hover:bg-orange-600 text-white px-6 py-3 rounded-xl font-semibold transition-all"
              >
                <Phone size={18} />
                Anrufen
              </a>
              <Link 
                to="/kontakt" 
                className="inline-flex items-center justify-center gap-2 border-2 border-gray-200 text-gray-700 px-6 py-3 rounded-xl font-semibold hover:border-orange-300 transition-all"
              >
                <Send size={18} />
                Nachricht senden
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gray-900 relative overflow-hidden">
        <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-[size:48px_48px]" />
        <div className="absolute top-0 right-1/4 w-[400px] h-[400px] bg-orange-500/10 rounded-full blur-[150px]" />
        
        <div className="max-w-4xl mx-auto px-6 text-center relative z-10">
          <h2 className="text-3xl md:text-4xl font-black text-white mb-6">
            Bereit für deinen neuen Job?
          </h2>
          <p className="text-gray-400 mb-8 max-w-2xl mx-auto text-lg">
            Bewirb dich jetzt und starte deine Karriere mit PersoFlex. 
            Wir freuen uns auf dich!
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Link 
              to="/jobs" 
              className="group inline-flex items-center justify-center gap-2 bg-orange-500 hover:bg-orange-600 text-white px-8 py-4 rounded-xl font-semibold hover:shadow-xl hover:shadow-orange-500/30 transition-all"
            >
              Jobs entdecken
              <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
            </Link>
            <Link 
              to="/kontakt" 
              className="inline-flex items-center justify-center gap-2 bg-transparent border-2 border-gray-600 text-white px-8 py-4 rounded-xl font-semibold hover:bg-gray-800 hover:border-gray-500 transition-all"
            >
              Kontakt aufnehmen
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

const FaqItem: React.FC<{ question: string; answer: string }> = ({ question, answer }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="bg-white border border-gray-200 rounded-2xl overflow-hidden hover:border-orange-300 transition-all">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="w-full flex justify-between items-center p-6 text-left hover:bg-gray-50 transition-colors"
      >
        <span className="font-bold text-gray-900 pr-4">{question}</span>
        <ChevronDown 
          size={20} 
          className={`text-orange-500 shrink-0 transition-transform duration-200 ${isOpen ? 'rotate-180' : ''}`} 
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
