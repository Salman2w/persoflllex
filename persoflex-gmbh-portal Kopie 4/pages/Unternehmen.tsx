import React from 'react';
import { Link } from 'react-router-dom';
import { 
  CheckCircle2, 
  Shield, 
  Users, 
  Clock, 
  ArrowRight, 
  Package, 
  Wrench, 
  FileText, 
  Award, 
  MapPin,
  Flame,
  Building2
} from 'lucide-react';
import { SEO } from '../components/SEO';

export const Unternehmen: React.FC = () => {
  const services = [
    { 
      icon: Clock, 
      title: "Arbeitnehmerüberlassung", 
      desc: "Reagieren Sie flexibel auf Auftragsspitzen. Wir stellen Ihnen kurzfristig motiviertes Personal zur Verfügung – transparent und fair kalkuliert.",
      color: "primary"
    },
    { 
      icon: Users, 
      title: "Personalvermittlung", 
      desc: "Sparen Sie sich den Recruiting-Aufwand. Wir finden die passenden Talente für Ihre Festanstellungen und begleiten den Prozess bis zur Unterschrift.",
      color: "secondary"
    },
    { 
      icon: Shield, 
      title: "On-Site Management", 
      desc: "Bei hohem Bedarf sind wir direkt bei Ihnen vor Ort. Ein fester Ansprechpartner, kurze Wege und effiziente Koordination aller Mitarbeiter.",
      color: "accent"
    }
  ];

  const industries = [
    { icon: Package, title: "Lager & Logistik", items: ["Staplerfahrer", "Kommissionierer", "Lagerhelfer"] },
    { icon: Wrench, title: "Produktion", items: ["Produktionshelfer", "Maschinenführer", "Qualitätskontrolle"] },
    { icon: FileText, title: "Kaufmännisch", items: ["Sachbearbeitung", "Bürokaufleute", "Empfang"] },
    { icon: Award, title: "Fachkräfte", items: ["Techniker", "Meister", "Ingenieure"] }
  ];

  const processSteps = [
    { step: "01", title: "Anfrage", desc: "Sie melden uns Ihren Bedarf. Unkompliziert per Telefon oder Formular." },
    { step: "02", title: "Matching", desc: "Wir gleichen Ihr Profil mit unserem Bewerberpool ab und suchen gezielt." },
    { step: "03", title: "Auswahl", desc: "Wir stellen Ihnen passende Profile vor. Sie entscheiden, wen Sie kennenlernen." },
    { step: "04", title: "Start", desc: "Mitarbeiter startet zum Wunschtermin. Wir kümmern uns um die Bürokratie." }
  ];

  return (
    <div className="min-h-screen bg-white">
      <SEO 
        title="Personaldienstleister Pforzheim | Zeitarbeit & Vermittlung | PersoFlex"
        description="Ihr neuer Partner für Personal in Pforzheim & Enzkreis. Motivierte Zeitarbeit & präzise Personalvermittlung für Industrie, Logistik & Büro. Jetzt Personal anfragen!"
        keywords="Personaldienstleister Pforzheim, Zeitarbeit Enzkreis, Personalvermittlung Baden-Württemberg, On-Site Management"
      />
      
      {/* Hero Section */}
      <section className="relative pt-32 pb-24 overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute top-1/4 right-0 w-[600px] h-[600px] bg-orange-500/10 rounded-full blur-[150px]" />
          <div className="absolute bottom-0 left-1/4 w-[400px] h-[400px] bg-red-500/10 rounded-full blur-[120px]" />
        </div>
        
        <div className="max-w-7xl mx-auto px-6 relative z-10">
          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-gray-50 border border-gray-200 mb-6">
              <Building2 className="w-4 h-4 text-orange-500" />
              <span className="text-sm text-gray-600">Für Arbeitgeber</span>
            </div>
            
            <h1 className="text-4xl md:text-6xl font-black text-gray-900 mb-6 leading-tight">
              Personallösungen für <br/>
              <span className="text-gradient-flame">Pforzheim & Enzkreis.</span>
            </h1>
            <p className="text-lg text-gray-600 mb-10 leading-relaxed">
              Schluss mit &ldquo;haben wir schon immer so gemacht&rdquo;. Wir sind Ihr neuer, motivierter Partner 
              für Industrie, Logistik und Verwaltung. Flexibel, transparent und persönlich.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4">
              <Link 
                to="/unternehmen/anfrage" 
                className="group relative overflow-hidden bg-gradient-to-r from-orange-500 to-red-500 text-white px-8 py-4 rounded-xl font-bold transition-all duration-300 hover:shadow-lg hover:scale-105 inline-flex items-center justify-center gap-2"
              >
                <span className="relative z-10">Personal anfragen</span>
                <ArrowRight size={18} className="relative z-10" />
              </Link>
              <Link 
                to="/unternehmen/downloads" 
                className="px-8 py-4 border border-gray-300 rounded-xl text-gray-900 font-bold hover:bg-gray-50 hover:border-orange-500/50 transition-all inline-flex items-center justify-center gap-2"
              >
                Zu den Downloads
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-24 bg-gray-50 border-y border-gray-200">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-orange-500/10 text-orange-500 text-sm font-semibold uppercase tracking-wider mb-4">
              Unsere Dienstleistungen
            </span>
            <h2 className="text-3xl md:text-4xl font-black text-gray-900 mb-4">
              Maßgeschneidert auf <span className="text-gradient-flame">Ihren Bedarf</span>
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Ob kurzfristige Unterstützung oder langfristige Besetzung – wir finden die Lösung.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {services.map((service, idx) => (
              <div 
                key={idx} 
                className="group bg-white border border-gray-200 rounded-2xl p-8 hover:border-orange-500/50 hover:shadow-xl transition-all duration-300"
              >
                <div className="w-16 h-16 bg-orange-500/10 text-orange-500 rounded-2xl flex items-center justify-center mb-6 group-hover:bg-orange-500 group-hover:text-white group-hover:scale-110 transition-all">
                  <service.icon size={32} />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-4">{service.title}</h3>
                <p className="text-gray-600 leading-relaxed">{service.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Industries Section */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-orange-500/10 text-orange-500 text-sm font-semibold uppercase tracking-wider mb-4">
              Branchen
            </span>
            <h2 className="text-3xl md:text-4xl font-black text-gray-900 mb-4">
              Hier kennen wir uns <span className="text-gradient-flame">aus.</span>
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Wir vermitteln nicht &ldquo;irgendwen&rdquo;, sondern Personal, das fachlich passt. 
              Unsere Schwerpunkte liegen in den starken Branchen unserer Region.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {industries.map((industry, idx) => (
              <div key={idx} className="bg-gray-50 border border-gray-200 rounded-2xl p-6 hover:border-orange-500/50 hover:shadow-md transition-all">
                <div className="w-12 h-12 bg-orange-500/10 text-orange-500 rounded-xl flex items-center justify-center mb-6">
                  <industry.icon size={24} />
                </div>
                <h3 className="text-lg font-bold text-gray-900 mb-4">{industry.title}</h3>
                <ul className="space-y-2">
                  {industry.items.map((item, i) => (
                    <li key={i} className="flex items-center gap-2 text-sm text-gray-600">
                      <CheckCircle2 className="w-4 h-4 text-orange-500 shrink-0" />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-24 bg-gray-50 border-y border-gray-200">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-orange-500/10 text-orange-500 text-sm font-semibold uppercase tracking-wider mb-4">
              Der Ablauf
            </span>
            <h2 className="text-3xl md:text-4xl font-black text-gray-900">
              So einfach geht <span className="text-gradient-flame">Recruiting heute</span>
            </h2>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {processSteps.map((item, index) => (
              <div 
                key={index}
                className="group bg-white border border-gray-200 rounded-2xl p-6 text-center relative hover:border-orange-500/50 hover:shadow-md transition-all"
              >
                <span className="absolute top-4 right-4 text-5xl font-black text-gray-200 group-hover:text-orange-500/20 transition-colors">
                  {item.step}
                </span>
                <h3 className="text-xl font-bold text-gray-900 mb-3 mt-8">{item.title}</h3>
                <p className="text-sm text-gray-600">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SEO Content Section */}
      <section className="py-24 bg-white">
        <div className="max-w-4xl mx-auto px-6">
          <div className="prose max-w-none">
            <h2 className="text-3xl font-black text-gray-900 mb-6 text-center">
              Moderne <span className="text-gradient-flame">Personaldienstleistung</span> in Pforzheim.
            </h2>
            <div className="text-gray-600 space-y-4">
              <p>
                Als junges Unternehmen in der <strong className="text-gray-900">Zeitarbeit Pforzheim</strong> gehen wir Dinge anders an. 
                Die <strong className="text-gray-900">PersoFlex GmbH</strong> steht für schnelle Entscheidungen, digitale Prozesse und eine 
                Kommunikation auf Augenhöhe. Wir wissen, dass in der heutigen Zeit Schnelligkeit und Zuverlässigkeit die wichtigsten Währungen sind.
              </p>
              <p>
                Unser Ziel ist es, nicht nur Lücken zu füllen, sondern echte Mehrwerte zu schaffen. Ob durch kurzfristige 
                <strong className="text-gray-900"> Arbeitnehmerüberlassung</strong> bei Auftragsspitzen oder durch die langfristige 
                <strong className="text-gray-900"> Personalvermittlung</strong> von Fachkräften – wir verstehen uns als Ihr strategischer Partner im Enzkreis.
              </p>
            </div>

            <div className="bg-gray-50 border border-gray-200 rounded-2xl p-6 mt-8">
              <h3 className="text-xl font-bold text-gray-900 mb-2 flex items-center gap-2">
                <MapPin className="text-orange-500" size={20} />
                Regional stark
              </h3>
              <p className="text-gray-600 text-sm m-0">
                Unsere lokale Nähe ist Ihr Vorteil. Wir kennen den Arbeitsmarkt in <strong className="text-gray-900">Pforzheim</strong>, 
                <strong className="text-gray-900"> Mühlacker</strong>, <strong className="text-gray-900">Birkenfeld</strong> und dem 
                gesamten <strong className="text-gray-900">Enzkreis</strong>. Das bedeutet: Kürzere Anfahrtswege für Mitarbeiter und 
                schnellere Reaktionszeiten für Sie.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-gray-50 border-t border-gray-200 relative overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-orange-500/10 rounded-full blur-[150px]" />
        </div>
        
        <div className="max-w-4xl mx-auto px-6 text-center relative">
          <Flame className="w-16 h-16 text-orange-500 mx-auto mb-6" />
          <h2 className="text-3xl md:text-4xl font-black text-gray-900 mb-6">
            Lernen Sie uns kennen!
          </h2>
          <p className="text-lg text-gray-600 mb-10 max-w-2xl mx-auto">
            Lassen Sie uns besprechen, wie wir Ihre Personalengpässe lösen können. 
            Unverbindlich und persönlich.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link 
              to="/unternehmen/anfrage" 
              className="group relative overflow-hidden bg-gradient-to-r from-orange-500 to-red-500 text-white px-8 py-4 rounded-xl font-bold transition-all duration-300 hover:shadow-lg hover:scale-105 inline-flex items-center justify-center gap-2"
            >
              <span className="relative z-10">Jetzt Personal anfragen</span>
              <ArrowRight size={18} className="relative z-10" />
            </Link>
            <Link 
              to="/kontakt" 
              className="px-8 py-4 border border-gray-300 rounded-xl text-gray-900 font-bold hover:bg-white hover:border-orange-500/50 transition-all inline-flex items-center justify-center gap-2"
            >
              Kontakt aufnehmen
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};
