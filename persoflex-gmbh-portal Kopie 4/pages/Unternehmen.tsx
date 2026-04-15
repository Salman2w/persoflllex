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
  Building2,
  Phone,
  Star,
  Zap,
  Target,
  Handshake,
  TrendingUp,
  HeadphonesIcon,
  BadgeCheck
} from 'lucide-react';
import { SEO } from '../components/SEO';

export const Unternehmen: React.FC = () => {
  const services = [
    { 
      icon: Clock, 
      title: "Arbeitnehmerüberlassung", 
      desc: "Reagieren Sie flexibel auf Auftragsspitzen und saisonale Schwankungen. Wir stellen Ihnen kurzfristig motiviertes, eingearbeitetes Personal zur Verfügung – transparent kalkuliert und rechtlich abgesichert.",
      benefits: ["Kurzfristige Verfügbarkeit", "Keine langfristigen Verpflichtungen", "Volle Kostentransparenz"]
    },
    { 
      icon: Users, 
      title: "Personalvermittlung", 
      desc: "Sparen Sie wertvolle Zeit im Recruiting-Prozess. Wir identifizieren, prüfen und präsentieren Ihnen passende Kandidaten für Ihre Festanstellungen – von der Stellenausschreibung bis zur erfolgreichen Einstellung.",
      benefits: ["Vorqualifizierte Bewerber", "Schneller Besetzungsprozess", "Erfolgsbasierte Vergütung"]
    },
    { 
      icon: Shield, 
      title: "On-Site Management", 
      desc: "Bei hohem Personalbedarf sind wir direkt bei Ihnen vor Ort präsent. Ein fester Ansprechpartner koordiniert alle Einsätze, löst Probleme sofort und sorgt für reibungslose Abläufe in Ihrem Betrieb.",
      benefits: ["Direkter Ansprechpartner", "Schnelle Problemlösung", "Optimierte Koordination"]
    }
  ];

  const industries = [
    { icon: Package, title: "Lager & Logistik", items: ["Staplerfahrer (Schein erforderlich)", "Kommissionierer", "Lagerhelfer", "Versandmitarbeiter", "Wareneingang"] },
    { icon: Wrench, title: "Produktion & Fertigung", items: ["Produktionshelfer", "Maschinenführer", "Montierer", "Qualitätskontrolle", "Schichtleiter"] },
    { icon: FileText, title: "Kaufmännisch & Verwaltung", items: ["Sachbearbeitung", "Bürokaufleute", "Empfang & Sekretariat", "Buchhaltung", "Disposition"] },
    { icon: Award, title: "Fachkräfte & Spezialisten", items: ["Techniker", "Elektriker", "Schweißer", "CNC-Fachkräfte", "Qualitätsmanager"] }
  ];

  const processSteps = [
    { step: "01", title: "Anfrage", desc: "Teilen Sie uns Ihren Bedarf mit – per Telefon, E-Mail oder über unser Anfrageformular. Je genauer Ihre Anforderungen, desto besser können wir helfen." },
    { step: "02", title: "Bedarfsanalyse", desc: "Wir besprechen gemeinsam die Details: Welche Qualifikationen werden benötigt? Welche Arbeitszeiten? Wie ist das Arbeitsumfeld?" },
    { step: "03", title: "Kandidatenauswahl", desc: "Aus unserem Bewerberpool wählen wir passende Profile aus und führen Vorabgespräche. Sie erhalten nur geprüfte, motivierte Kandidaten." },
    { step: "04", title: "Einsatzstart", desc: "Der Mitarbeiter startet zu Ihrem Wunschtermin. Wir kümmern uns um alle administrativen Aufgaben und bleiben Ihr Ansprechpartner." }
  ];

  const benefits = [
    { icon: Zap, title: "Schnelle Reaktionszeit", desc: "Innerhalb von 24-48 Stunden erhalten Sie erste Kandidatenvorschläge für Ihre offenen Positionen." },
    { icon: BadgeCheck, title: "Geprüfte Qualität", desc: "Alle Mitarbeiter durchlaufen unseren Qualifikationscheck inkl. Dokumentenprüfung und persönlichem Gespräch." },
    { icon: Target, title: "Passgenaue Vermittlung", desc: "Wir verstehen Ihre Anforderungen und finden Kandidaten, die fachlich und persönlich zu Ihrem Team passen." },
    { icon: HeadphonesIcon, title: "Persönliche Betreuung", desc: "Ein fester Ansprechpartner begleitet Sie während der gesamten Zusammenarbeit – erreichbar und lösungsorientiert." },
    { icon: TrendingUp, title: "Flexible Skalierung", desc: "Ob 1 oder 50 Mitarbeiter – wir passen uns Ihrem Bedarf an und wachsen mit Ihren Projekten." },
    { icon: Handshake, title: "Faire Partnerschaft", desc: "Transparente Konditionen ohne versteckte Kosten. Wir setzen auf langfristige, vertrauensvolle Geschäftsbeziehungen." }
  ];

  return (
    <div className="min-h-screen bg-white">
      <SEO 
        title="Personaldienstleister Pforzheim | Zeitarbeit & Vermittlung | PersoFlex"
        description="Ihr zuverlässiger Partner für Personal in Pforzheim & Enzkreis. Zeitarbeit, Personalvermittlung und On-Site Management für Industrie, Logistik & Verwaltung. Jetzt anfragen!"
        keywords="Personaldienstleister Pforzheim, Zeitarbeit Enzkreis, Personalvermittlung Baden-Württemberg, Arbeitnehmerüberlassung, On-Site Management"
      />
      
      {/* Hero Section */}
      <section className="relative pt-32 pb-24 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-orange-50 via-white to-white" />
        <div className="absolute inset-0">
          <div className="absolute top-1/4 right-0 w-[600px] h-[600px] bg-orange-400/10 rounded-full blur-[150px]" />
          <div className="absolute bottom-0 left-1/4 w-[400px] h-[400px] bg-orange-300/10 rounded-full blur-[120px]" />
        </div>
        
        <div className="max-w-7xl mx-auto px-6 relative z-10">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-orange-100 border border-orange-200 mb-6">
                <Building2 className="w-4 h-4 text-orange-500" />
                <span className="text-sm font-semibold text-orange-700">Für Arbeitgeber</span>
              </div>
              
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-black text-gray-900 mb-6 leading-tight">
                Personallösungen für{' '}
                <span className="text-orange-500">Pforzheim & Enzkreis.</span>
              </h1>
              <p className="text-lg text-gray-600 mb-8 leading-relaxed">
                Schluss mit &ldquo;haben wir schon immer so gemacht&rdquo;. Wir sind Ihr neuer, motivierter Partner 
                für Industrie, Logistik und Verwaltung. Flexibel, transparent und persönlich.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4 mb-8">
                <Link 
                  to="/unternehmen/anfrage" 
                  className="group bg-orange-500 hover:bg-orange-600 text-white px-8 py-4 rounded-xl font-semibold transition-all duration-300 hover:shadow-lg inline-flex items-center justify-center gap-2"
                >
                  <span>Personal anfragen</span>
                  <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
                </Link>
                <a 
                  href="tel:072316039493" 
                  className="px-8 py-4 border-2 border-gray-200 rounded-xl text-gray-700 font-semibold hover:border-orange-300 hover:bg-orange-50 transition-all inline-flex items-center justify-center gap-2"
                >
                  <Phone size={18} />
                  07231 60 39 493
                </a>
              </div>

              {/* Trust badges */}
              <div className="flex flex-wrap gap-4 mb-6">
                <div className="flex items-center gap-2 text-sm text-gray-600">
                  <CheckCircle2 className="w-5 h-5 text-orange-500" />
                  <span>GVP Mitglied</span>
                </div>
                <div className="flex items-center gap-2 text-sm text-gray-600">
                  <CheckCircle2 className="w-5 h-5 text-orange-500" />
                  <span>AUG Erlaubnis</span>
                </div>
                <div className="flex items-center gap-2 text-sm text-gray-600">
                  <CheckCircle2 className="w-5 h-5 text-orange-500" />
                  <span>Tarifgebunden</span>
                </div>
              </div>

              {/* Downloads Link */}
              <Link 
                to="/downloads"
                className="inline-flex items-center gap-2 text-sm text-orange-500 hover:text-orange-600 font-medium transition-colors"
              >
                <FileText className="w-4 h-4" />
                <span>Zertifikate & Dokumente ansehen</span>
                <ArrowRight className="w-4 h-4" />
              </Link>
            </div>

            {/* Right side - Key benefits card */}
            <div className="bg-white border-2 border-orange-200 rounded-2xl p-8 shadow-lg">
              <h3 className="text-xl font-bold text-gray-900 mb-6">Warum Unternehmen uns vertrauen:</h3>
              <div className="space-y-4">
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 bg-orange-100 rounded-lg flex items-center justify-center flex-shrink-0">
                    <Clock className="w-5 h-5 text-orange-500" />
                  </div>
                  <div>
                    <p className="font-semibold text-gray-900">Schnelle Besetzung</p>
                    <p className="text-sm text-gray-600">Erste Kandidaten innerhalb von 24-48 Stunden</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 bg-orange-100 rounded-lg flex items-center justify-center flex-shrink-0">
                    <Shield className="w-5 h-5 text-orange-500" />
                  </div>
                  <div>
                    <p className="font-semibold text-gray-900">Rechtssicherheit</p>
                    <p className="text-sm text-gray-600">Vollständig konform mit AÜG und Tarifvertrag</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 bg-orange-100 rounded-lg flex items-center justify-center flex-shrink-0">
                    <MapPin className="w-5 h-5 text-orange-500" />
                  </div>
                  <div>
                    <p className="font-semibold text-gray-900">Regionale Expertise</p>
                    <p className="text-sm text-gray-600">Tiefes Wissen über den lokalen Arbeitsmarkt</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 bg-orange-100 rounded-lg flex items-center justify-center flex-shrink-0">
                    <Star className="w-5 h-5 text-orange-500" />
                  </div>
                  <div>
                    <p className="font-semibold text-gray-900">Qualitätsgarantie</p>
                    <p className="text-sm text-gray-600">Nur geprüfte, motivierte Mitarbeiter</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Benefits Overview Section */}
      <section className="py-20 bg-gray-50 border-y border-gray-200">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-12">
            <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-orange-100 text-orange-600 text-sm font-semibold uppercase tracking-wider mb-4">
              Ihre Vorteile
            </span>
            <h2 className="text-3xl md:text-4xl font-black text-gray-900 mb-4">
              Das macht uns zu Ihrem <span className="text-orange-500">idealen Partner</span>
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Wir wissen, worauf es bei der Personalsuche ankommt. Deshalb bieten wir Ihnen mehr als nur Vermittlung.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {benefits.map((benefit, idx) => (
              <div key={idx} className="bg-white border border-gray-200 rounded-xl p-6 hover:border-orange-300 hover:shadow-md transition-all">
                <div className="w-12 h-12 bg-orange-100 text-orange-500 rounded-xl flex items-center justify-center mb-4">
                  <benefit.icon size={24} />
                </div>
                <h3 className="text-lg font-bold text-gray-900 mb-2">{benefit.title}</h3>
                <p className="text-gray-600 text-sm leading-relaxed">{benefit.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-orange-100 text-orange-600 text-sm font-semibold uppercase tracking-wider mb-4">
              Unsere Dienstleistungen
            </span>
            <h2 className="text-3xl md:text-4xl font-black text-gray-900 mb-4">
              Maßgeschneidert auf <span className="text-orange-500">Ihren Bedarf</span>
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Ob kurzfristige Unterstützung bei Auftragsspitzen oder langfristige Personalplanung – wir bieten die passende Lösung.
            </p>
          </div>

          <div className="grid lg:grid-cols-3 gap-8">
            {services.map((service, idx) => (
              <div 
                key={idx} 
                className="group bg-white border-2 border-gray-200 rounded-2xl p-8 hover:border-orange-400 hover:shadow-xl transition-all duration-300"
              >
                <div className="w-16 h-16 bg-orange-500 text-white rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                  <service.icon size={32} />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-4">{service.title}</h3>
                <p className="text-gray-600 leading-relaxed mb-6">{service.desc}</p>
                <ul className="space-y-2">
                  {service.benefits.map((benefit, i) => (
                    <li key={i} className="flex items-center gap-2 text-sm text-gray-700">
                      <CheckCircle2 className="w-4 h-4 text-orange-500 flex-shrink-0" />
                      {benefit}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Industries Section */}
      <section className="py-24 bg-gray-50 border-y border-gray-200">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-orange-100 text-orange-600 text-sm font-semibold uppercase tracking-wider mb-4">
              Branchen & Berufsfelder
            </span>
            <h2 className="text-3xl md:text-4xl font-black text-gray-900 mb-4">
              Hier kennen wir uns <span className="text-orange-500">aus.</span>
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Wir vermitteln nicht &ldquo;irgendwen&rdquo;, sondern Personal, das fachlich zu Ihren Anforderungen passt. 
              Unsere Schwerpunkte liegen in den starken Branchen unserer Region.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {industries.map((industry, idx) => (
              <div key={idx} className="bg-white border border-gray-200 rounded-2xl p-6 hover:border-orange-300 hover:shadow-md transition-all">
                <div className="w-12 h-12 bg-orange-100 text-orange-500 rounded-xl flex items-center justify-center mb-6">
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
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-orange-100 text-orange-600 text-sm font-semibold uppercase tracking-wider mb-4">
              Der Ablauf
            </span>
            <h2 className="text-3xl md:text-4xl font-black text-gray-900 mb-4">
              So einfach funktioniert die <span className="text-orange-500">Zusammenarbeit</span>
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Von der ersten Anfrage bis zum erfolgreichen Einsatzstart – wir begleiten Sie durch jeden Schritt des Prozesses.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {processSteps.map((item, index) => (
              <div 
                key={index}
                className="group bg-gray-50 border border-gray-200 rounded-2xl p-6 relative hover:border-orange-300 hover:shadow-md transition-all"
              >
                <span className="absolute top-4 right-4 text-5xl font-black text-gray-200 group-hover:text-orange-200 transition-colors">
                  {item.step}
                </span>
                <div className="w-10 h-10 bg-orange-500 text-white rounded-lg flex items-center justify-center mb-4 font-bold">
                  {item.step}
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">{item.title}</h3>
                <p className="text-sm text-gray-600 leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SEO Content / Regional Focus Section */}
      <section className="py-24 bg-gray-50 border-y border-gray-200">
        <div className="max-w-5xl mx-auto px-6">
          <div className="text-center mb-12">
            <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-orange-100 text-orange-600 text-sm font-semibold uppercase tracking-wider mb-4">
              <MapPin size={16} />
              Regionale Stärke
            </span>
            <h2 className="text-3xl md:text-4xl font-black text-gray-900 mb-4">
              Ihr <span className="text-orange-500">Personalpartner</span> vor Ort
            </h2>
          </div>

          <div className="bg-white border border-gray-200 rounded-2xl p-8 md:p-12">
            <div className="prose max-w-none text-gray-600">
              <p className="text-lg leading-relaxed mb-6">
                Als spezialisierte <strong className="text-gray-900">Zeitarbeitsfirma in Pforzheim</strong> verstehen wir die besonderen Anforderungen 
                des regionalen Arbeitsmarktes. Die <strong className="text-gray-900">PersoFlex GmbH</strong> verbindet moderne Personaldienstleistung 
                mit lokaler Expertise – für Unternehmen, die zuverlässige Partner statt austauschbarer Dienstleister suchen.
              </p>
              
              <p className="leading-relaxed mb-6">
                Unser Fokus auf <strong className="text-gray-900">Zeitarbeit im Enzkreis</strong> ermöglicht es uns, schnell auf Ihre Anfragen zu reagieren. 
                Wir kennen die Anforderungen der lokalen Industrie, die Stärken des regionalen Arbeitsmarktes und die Erwartungen von Arbeitgebern 
                und Arbeitnehmern gleichermaßen. Das Ergebnis: Passgenaue Personalbesetzung mit minimaler Einarbeitungszeit.
              </p>

              <div className="grid md:grid-cols-2 gap-6 my-8">
                <div className="bg-orange-50 border border-orange-200 rounded-xl p-6">
                  <h4 className="font-bold text-gray-900 mb-3 flex items-center gap-2">
                    <Building2 className="text-orange-500" size={20} />
                    Für Unternehmen
                  </h4>
                  <ul className="space-y-2 text-sm">
                    <li className="flex items-start gap-2">
                      <CheckCircle2 className="w-4 h-4 text-orange-500 mt-0.5 flex-shrink-0" />
                      <span>Flexible Personalkapazitäten bei Auftragsschwankungen</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle2 className="w-4 h-4 text-orange-500 mt-0.5 flex-shrink-0" />
                      <span>Reduzierter Verwaltungsaufwand durch professionelles Management</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle2 className="w-4 h-4 text-orange-500 mt-0.5 flex-shrink-0" />
                      <span>Risikominimierung durch rechtskonforme Abwicklung</span>
                    </li>
                  </ul>
                </div>
                
                <div className="bg-gray-100 border border-gray-200 rounded-xl p-6">
                  <h4 className="font-bold text-gray-900 mb-3 flex items-center gap-2">
                    <MapPin className="text-orange-500" size={20} />
                    Regionale Abdeckung
                  </h4>
                  <ul className="space-y-2 text-sm">
                    <li className="flex items-start gap-2">
                      <CheckCircle2 className="w-4 h-4 text-orange-500 mt-0.5 flex-shrink-0" />
                      <span>Pforzheim und Umgebung</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle2 className="w-4 h-4 text-orange-500 mt-0.5 flex-shrink-0" />
                      <span>Enzkreis (Mühlacker, Birkenfeld, Neuenbürg)</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle2 className="w-4 h-4 text-orange-500 mt-0.5 flex-shrink-0" />
                      <span>Angrenzende Regionen in Baden-Württemberg</span>
                    </li>
                  </ul>
                </div>
              </div>

              <p className="leading-relaxed">
                Transparente Kommunikation, faire Konditionen und eine partnerschaftliche Zusammenarbeit sind die Grundlagen unserer Geschäftsbeziehungen. 
                Als Mitglied im <strong className="text-gray-900">Gesamtverband der Personaldienstleister (GVP)</strong> und mit gültiger 
                <strong className="text-gray-900"> AÜG-Erlaubnis</strong> bieten wir Ihnen die Sicherheit einer professionellen, rechtlich einwandfreien Abwicklung.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-gray-900 relative overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-orange-500/10 rounded-full blur-[150px]" />
        </div>
        
        <div className="max-w-4xl mx-auto px-6 text-center relative">
          <div className="w-16 h-16 bg-orange-500 rounded-2xl flex items-center justify-center mx-auto mb-8">
            <Flame className="w-8 h-8 text-white" />
          </div>
          <h2 className="text-3xl md:text-4xl font-black text-white mb-6">
            Bereit, Ihren Personalbedarf zu lösen?
          </h2>
          <p className="text-lg text-gray-400 mb-10 max-w-2xl mx-auto">
            Lassen Sie uns besprechen, wie wir Sie bei der Personalsuche unterstützen können. 
            Unverbindlich, persönlich und direkt.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link 
              to="/unternehmen/anfrage" 
              className="group bg-orange-500 hover:bg-orange-600 text-white px-8 py-4 rounded-xl font-semibold transition-all duration-300 hover:shadow-lg inline-flex items-center justify-center gap-2"
            >
              <span>Jetzt Personal anfragen</span>
              <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
            </Link>
            <a 
              href="tel:072316039493" 
              className="px-8 py-4 bg-white/10 border border-white/20 rounded-xl text-white font-semibold hover:bg-white/20 transition-all inline-flex items-center justify-center gap-2"
            >
              <Phone size={18} />
              07231 60 39 493
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};
