import React from 'react';
import { Link } from 'react-router-dom';
import { 
  ArrowRight, 
  Users, 
  Building2, 
  Clock, 
  CheckCircle2, 
  Briefcase,
  Shield,
  MapPin,
  Star,
  Factory,
  Truck,
  Package,
  Wrench,
  Quote
} from 'lucide-react';
import { SEO } from '../components/SEO';
import heroDiverseTeam from '../public/bilder/hero-diverse-team.jpg';

// Schema.org Structured Data for SEO
const structuredData = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "EmploymentAgency",
      "name": "PersoFlex GmbH",
      "image": "https://www.persoflex-gmbh.de/bilder/logo.webp",
      "url": "https://www.persoflex-gmbh.de",
      "telephone": "+4972316039493",
      "email": "info@persoflex-gmbh.de",
      "priceRange": "Nach GVP-Tarif",
      "address": {
        "@type": "PostalAddress",
        "streetAddress": "Kiehnlestraße 4",
        "addressLocality": "Pforzheim",
        "postalCode": "75172",
        "addressRegion": "Baden-Württemberg",
        "addressCountry": "DE"
      },
      "geo": {
        "@type": "GeoCoordinates",
        "latitude": "48.8929474",
        "longitude": "8.6949572"
      },
      "openingHoursSpecification": {
        "@type": "OpeningHoursSpecification",
        "dayOfWeek": ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
        "opens": "08:00",
        "closes": "17:00"
      },
      "sameAs": [
        "https://www.linkedin.com/company/persoflex-gmbh",
        "https://www.facebook.com/persoflexgmbh"
      ]
    },
    {
      "@type": "WebSite",
      "name": "PersoFlex GmbH",
      "url": "https://www.persoflex-gmbh.de",
      "potentialAction": {
        "@type": "SearchAction",
        "target": "https://www.persoflex-gmbh.de/jobs?q={search_term_string}",
        "query-input": "required name=search_term_string"
      }
    }
  ]
};

  export const Home: React.FC = () => {
  const services = [
    {
      icon: Briefcase,
      title: 'Arbeitnehmerüberlassung',
      description: 'Personal für Auftragsspitzen, Krankheitsvertretungen oder saisonale Einsätze – kurzfristig verfügbar und tariflich abgesichert.',
    },
    {
      icon: Users,
      title: 'Personalvermittlung',
      description: 'Wir vermitteln qualifizierte Fachkräfte direkt in Festanstellung bei Unternehmen in Pforzheim und dem Enzkreis.',
    },
    {
      icon: Shield,
      title: 'Personalberatung',
      description: 'Wir beraten Sie bei Personalplanung, Recruiting-Strategien und Fachkräftemangel – konkret und auf Ihre Situation zugeschnitten.',
    },
  ];

  const industries = [
    { name: 'Produktion & Fertigung', jobs: 'Top-Bereich', icon: Factory, image: '/bilder/branche-produktion.jpg' },
    { name: 'Logistik & Lager', jobs: 'Stark gefragt', icon: Truck, image: '/bilder/branche-logistik.jpg' },
    { name: 'Handwerk & Technik', jobs: 'Wachsend', icon: Wrench, image: '/bilder/branche-handwerk.jpg' },
    { name: 'Industrie & Metall', jobs: 'Spezialisiert', icon: Package, image: '/bilder/branche-industrie.jpg' },
  ];

  const reviews = [
    {
      author: 'Markus W.',
      role: 'Logistikleiter, Pforzheim',
      text: 'Endlich mal eine Zeitarbeitsfirma, die wirklich zuhört. Die Reaktionszeiten sind top und die Mitarbeiter motiviert.',
      rating: 5
    },
    {
      author: 'Julia S.',
      role: 'HR Managerin, Enzkreis',
      text: 'Sehr angenehme, frische Zusammenarbeit. Man merkt, dass hier ein neues Team am Werk ist, das sich wirklich bemüht.',
      rating: 5
    },
    {
      author: 'Ali K.',
      role: 'Staplerfahrer',
      text: 'Habe schnell einen Job bekommen. Das Team ist jung, nett und kümmert sich.',
      rating: 5
    },
  ];

  return (
    <>
      <SEO 
        title="Zeitarbeit & Personalvermittlung Pforzheim | PersoFlex GmbH"
        description="PersoFlex GmbH aus Pforzheim vermittelt Personal in Produktion, Logistik und Industrie. Tariflich bezahlt, persönlich betreut, regional verwurzelt im Enzkreis."
        keywords="Zeitarbeit Pforzheim, Personalvermittlung Enzkreis, Jobs Pforzheim, Arbeitnehmerüberlassung, Personaldienstleister Baden-Württemberg"
        canonicalUrl="https://www.persoflex-gmbh.de/"
        structuredData={structuredData}
      />

      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        {/* Background Image - classic img tag with absolute positioning */}
        <img 
          src={heroDiverseTeam} 
          alt="Vielfältiges Team aus zufriedenen Fachkräften und Mitarbeitern in Produktion, Logistik und Büro - Menschen, die ihren Traumjob bei PersoFlex gefunden haben" 
          className="absolute inset-0 w-full h-full object-cover object-center z-0"
          fetchPriority="high"
          decoding="async"
          onError={(e) => { console.log('[v0] Hero image failed to load:', e.currentTarget.src); }}
        />
        
        {/* Light overlay for text readability - keeps image visible */}
        <div className="absolute inset-0 z-10 pointer-events-none bg-gradient-to-b from-gray-900/25 via-gray-900/15 to-gray-900/35" />
        
        {/* Soft radial spotlight behind text for readability */}
        <div 
          className="absolute inset-0 z-10 pointer-events-none"
          style={{
            background: 'radial-gradient(ellipse 800px 550px at center 50%, rgba(17, 24, 39, 0.4) 0%, rgba(17, 24, 39, 0) 70%)'
          }}
        />
        
        {/* Smooth bottom fade to white */}
        <div className="absolute bottom-0 left-0 right-0 h-32 z-10 bg-gradient-to-t from-white via-white/50 to-transparent pointer-events-none" />

        <div className="relative z-20 max-w-7xl mx-auto px-6 pt-32 pb-20">
          <div className="text-center max-w-4xl mx-auto">
            {/* Badge - refined, less flashy */}
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 backdrop-blur-md text-white mb-10 border border-white/20">
              <MapPin className="w-3.5 h-3.5 text-orange-400" />
              <span className="text-xs font-medium tracking-wider uppercase">Personaldienstleister in Pforzheim</span>
            </div>

            {/* Headline - serious, sharper typography */}
            <h1 
              className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-8 leading-[1.1] tracking-tight text-balance"
              style={{ textShadow: '0 2px 20px rgba(0,0,0,0.5)' }}
            >
              Finden Sie Ihren{' '}
              <span className="text-orange-400">
                Traumjob
              </span>
              {' '}in Pforzheim
            </h1>
            
            {/* Paragraph - refined, professional tone */}
            <p 
              className="text-base md:text-lg text-white/90 mb-12 max-w-2xl mx-auto leading-relaxed"
              style={{ textShadow: '0 1px 12px rgba(0,0,0,0.7)' }}
            >
              PersoFlex vermittelt qualifizierte Fachkräfte an Unternehmen in Pforzheim und dem Enzkreis — 
              seit Jahren zuverlässiger Partner für Zeitarbeit und Personalvermittlung.
            </p>

            {/* CTA Buttons - refined, no excessive rings */}
            <div className="flex flex-col sm:flex-row gap-3 justify-center">
              <Link 
                to="/jobs" 
                className="group bg-orange-500 hover:bg-orange-600 text-white px-7 py-3.5 rounded-lg font-semibold text-sm transition-all duration-200 shadow-lg shadow-orange-500/20 hover:shadow-orange-500/40 inline-flex items-center justify-center gap-2"
              >
                <span>Jobs entdecken</span>
                <ArrowRight size={16} className="transition-transform group-hover:translate-x-0.5" />
              </Link>
              <Link 
                to="/unternehmen" 
                className="px-7 py-3.5 bg-white/10 backdrop-blur-md border border-white/30 text-white rounded-lg font-semibold text-sm hover:bg-white/15 hover:border-white/50 transition-all inline-flex items-center justify-center gap-2"
              >
                Personal anfragen
              </Link>
            </div>

            {/* Trust Indicators - minimal, refined */}
            <div className="mt-20 flex flex-wrap justify-center gap-x-8 gap-y-3">
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-orange-400" />
                <span className="text-xs font-medium text-white/90 tracking-wide uppercase">GVP Mitglied</span>
              </div>
              <div className="hidden sm:block w-px h-4 bg-white/20 self-center" />
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-orange-400" />
                <span className="text-xs font-medium text-white/90 tracking-wide uppercase">AÜG Erlaubnis</span>
              </div>
              <div className="hidden sm:block w-px h-4 bg-white/20 self-center" />
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-orange-400" />
                <span className="text-xs font-medium text-white/90 tracking-wide uppercase">Tarifgebunden</span>
              </div>
            </div>
          </div>
        </div>

        {/* Scroll Indicator - minimal & refined */}
        <div className="absolute bottom-10 left-1/2 -translate-x-1/2 hidden md:block">
          <div className="w-5 h-8 border border-white/40 rounded-full flex items-start justify-center p-1.5">
            <div className="w-0.5 h-2 bg-white/70 rounded-full animate-bounce" />
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-24 bg-gray-50 border-t border-gray-100">
        <div className="max-w-7xl mx-auto px-6">
          {/* Header - refined typography */}
          <div className="text-center mb-16 max-w-3xl mx-auto">
            <span className="inline-block text-xs font-semibold uppercase tracking-[0.2em] text-orange-600 mb-4">
              Unsere Leistungen
            </span>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 tracking-tight leading-tight mb-6 text-balance">
              Personaldienstleistungen für Ihren <span className="text-orange-500">Erfolg</span>
            </h2>
            <p className="text-gray-600 text-base md:text-lg leading-relaxed">
              Drei spezialisierte Lösungen für Ihren Personalbedarf — von kurzfristiger Flexibilität bis zur strategischen HR-Beratung.
            </p>
          </div>

          {/* Service Cards Grid - refined, professional */}
          <div className="grid md:grid-cols-3 gap-6 mb-20">
            {services.map((service, index) => (
              <Link
                key={index}
                to={index === 0 ? '/arbeitnehmerueberlassung' : index === 1 ? '/personalvermittlung' : '/personalberatung'}
                className="group bg-white border border-gray-200 rounded-xl p-8 transition-all duration-300 hover:border-orange-300 hover:shadow-lg hover:-translate-y-0.5 flex flex-col"
              >
                {/* Icon - integrated, not dominant */}
                <div className="w-12 h-12 rounded-lg bg-orange-50 text-orange-500 flex items-center justify-center mb-6 group-hover:bg-orange-500 group-hover:text-white transition-colors">
                  <service.icon size={22} strokeWidth={1.75} />
                </div>

                {/* Content */}
                <h3 className="text-lg font-semibold text-gray-900 mb-3 tracking-tight">{service.title}</h3>
                <p className="text-gray-600 text-sm leading-relaxed mb-6 flex-grow">{service.description}</p>

                {/* CTA */}
                <div className="inline-flex items-center text-orange-600 font-medium text-sm">
                  <span>Mehr erfahren</span>
                  <ArrowRight size={14} className="ml-1.5 group-hover:translate-x-0.5 transition-transform" />
                </div>
              </Link>
            ))}
          </div>

          {/* Benefits Section */}
          <div className="bg-white border border-gray-200 rounded-2xl p-12 md:p-16">
            <div className="grid md:grid-cols-2 gap-12">
              <div>
                <h3 className="text-2xl font-bold text-gray-900 mb-8">
                  Warum PersoFlex wählen?
                </h3>
                <div className="space-y-6">
                  {[
                    { icon: CheckCircle2, title: 'GVP Mitglied', desc: 'Tarifgebundene Dienstleistungen nach Branchenstandards' },
                    { icon: CheckCircle2, title: 'AÜG Erlaubnis', desc: 'Vollständig lizenziert und von der Bundesagentur für Arbeit genehmigt' },
                    { icon: CheckCircle2, title: 'Regionale Expertise', desc: 'Tiefes Verständnis des Pforzheimer und Enzkreis Arbeitsmarkts' },
                    { icon: CheckCircle2, title: 'Persönliche Betreuung', desc: 'Direkter Kontakt zu Ihrem Ansprechpartner vor Ort' }
                  ].map((benefit, idx) => (
                    <div key={idx} className="flex gap-4">
                      <benefit.icon className="w-6 h-6 text-orange-500 flex-shrink-0 mt-1" />
                      <div>
                        <h4 className="font-semibold text-gray-900 mb-1">{benefit.title}</h4>
                        <p className="text-gray-600 text-sm">{benefit.desc}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              <div>
                <h3 className="text-2xl font-bold text-gray-900 mb-8">
                  Für jeden Bedarf die richtige Lösung
                </h3>
                <div className="space-y-6">
                  {[
                    { title: 'Für Unternehmen', desc: 'Sie suchen flexible Personalressourcen, um Kapazitätsspitzen zu bewältigen oder kurzfristige Ausfälle zu überbrücken.' },
                    { title: 'Für Bewerber', desc: 'Sie möchten schnell in die Arbeitswelt einsteigen, verschiedene Unternehmen kennenlernen oder Ihre Karriere entwickeln.' },
                    { title: 'Für Berater', desc: 'Sie benötigen strategische Unterstützung bei Personalplanung, Recruiting-Prozessen oder HR-Herausforderungen.' }
                  ].map((item, idx) => (
                    <div key={idx} className="p-4 bg-gray-50 rounded-lg border border-gray-200 hover:border-orange-300 transition-colors">
                      <h4 className="font-semibold text-gray-900 mb-2">{item.title}</h4>
                      <p className="text-gray-600 text-sm">{item.desc}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* CTA Section */}
          <div className="mt-16 text-center">
            <p className="text-gray-600 mb-8 text-lg">
              Bereit, mit PersoFlex zusammenzuarbeiten?
            </p>
            <div className="flex flex-wrap gap-4 justify-center">
              <Link 
                to="/kontakt"
                className="inline-flex items-center gap-2 bg-orange-500 hover:bg-orange-600 text-white px-8 py-4 rounded-lg font-semibold transition-all"
              >
                Jetzt Kontakt aufnehmen <ArrowRight size={18} />
              </Link>
              <Link 
                to="/jobs"
                className="inline-flex items-center gap-2 border-2 border-orange-500 text-orange-500 hover:bg-orange-50 px-8 py-4 rounded-lg font-semibold transition-all"
              >
                Jobs durchsuchen <ArrowRight size={18} />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Industries Section */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <span className="inline-flex items-center gap-2 px-5 py-2 rounded-full bg-gray-100 text-gray-600 text-sm font-semibold uppercase tracking-wider mb-4">
                Branchen
              </span>
              <h2 className="text-3xl md:text-4xl font-black text-gray-900 mt-4 mb-6">
                Jobs in allen <span className="text-orange-500">Bereichen</span>
              </h2>
              <p className="text-gray-600 mb-8 leading-relaxed text-lg">
                Als spezialisierte <span className="font-semibold text-gray-700">Zeitarbeitsfirma Pforzheim</span> verstehen wir die Anforderungen regionaler Unternehmen. Unser <span className="font-semibold text-gray-700">Zeitarbeit Pforzheim</span> Angebot verbindet qualifizierte Fachkräfte mit Betrieben in Produktion, Logistik, Handwerk und Industrie. Wir bieten flexible, verlässliche Personalbesetzung für Ihre kurzfristigen und mittelfristigen Projekte im Enzkreis—mit transparenter Kommunikation und fairer Zusammenarbeit auf beiden Seiten.
              </p>
              
              <div className="space-y-4">
                {industries.map((industry, index) => (
                  <div 
                    key={index}
                    className="flex items-center justify-between p-4 bg-gray-50 border border-gray-200 rounded-xl hover:border-orange-300 hover:bg-orange-50 transition-all group cursor-pointer"
                  >
                    <div className="flex items-center gap-4">
                      <div className="w-16 h-16 rounded-xl overflow-hidden flex-shrink-0">
                        <img 
                          src={industry.image} 
                          alt={industry.name} 
                          className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                        />
                      </div>
                      <div>
                        <span className="font-semibold text-gray-900 block">{industry.name}</span>
                        <span className="text-sm text-gray-500">Fachkräfte verfügbar</span>
                      </div>
                    </div>
                    <span className="text-sm bg-orange-100 text-orange-600 px-3 py-1 rounded-full font-semibold">{industry.jobs}</span>
                  </div>
                ))}
              </div>

              <Link 
                to="/jobs" 
                className="mt-8 inline-flex items-center gap-2 bg-orange-500 hover:bg-orange-600 text-white px-6 py-3 rounded-lg font-semibold transition-all"
              >
                Alle Jobs ansehen <ArrowRight size={18} />
              </Link>
            </div>

            <div className="relative">
              <div className="rounded-2xl bg-gradient-to-br from-orange-50 to-gray-50 border-2 border-orange-200 p-8 flex flex-col justify-between h-full">
                {/* Header */}
                <div className="mb-8">
                  <h3 className="text-2xl font-bold text-gray-900 mb-2">Unsere Fachbereiche</h3>
                  <div className="h-1 w-12 bg-orange-500 rounded"></div>
                </div>
                
                {/* Service areas content */}
                <div className="space-y-4 flex-grow">
                  <div className="flex items-start gap-3">
                    <div className="w-6 h-6 rounded-full bg-orange-500 flex items-center justify-center flex-shrink-0 mt-1">
                      <span className="text-white text-xs font-bold">✓</span>
                    </div>
                    <div>
                      <p className="font-semibold text-gray-900">Produktion & Fertigung</p>
                      <p className="text-sm text-gray-600">Fachkräfte für Fertigungsprozesse und Montage</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start gap-3">
                    <div className="w-6 h-6 rounded-full bg-orange-500 flex items-center justify-center flex-shrink-0 mt-1">
                      <span className="text-white text-xs font-bold">✓</span>
                    </div>
                    <div>
                      <p className="font-semibold text-gray-900">Logistik & Lagerbetreuung</p>
                      <p className="text-sm text-gray-600">Personal für Lagerverwaltung und Versand</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start gap-3">
                    <div className="w-6 h-6 rounded-full bg-orange-500 flex items-center justify-center flex-shrink-0 mt-1">
                      <span className="text-white text-xs font-bold">✓</span>
                    </div>
                    <div>
                      <p className="font-semibold text-gray-900">Handwerk & Technik</p>
                      <p className="text-sm text-gray-600">Spezialisierte Handwerker und Techniker</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start gap-3">
                    <div className="w-6 h-6 rounded-full bg-orange-500 flex items-center justify-center flex-shrink-0 mt-1">
                      <span className="text-white text-xs font-bold">✓</span>
                    </div>
                    <div>
                      <p className="font-semibold text-gray-900">Industrie & Metallbearbeitung</p>
                      <p className="text-sm text-gray-600">Fachpersonal für Industriebetriebe</p>
                    </div>
                  </div>
                </div>
                
                {/* Bottom accent line */}
                <div className="mt-8 pt-6 border-t border-orange-200">
                  <p className="text-xs text-gray-500 font-medium">Alle Bereiche bundesweit verfügbar</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* For Companies & Applicants Section */}
      <section className="py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid md:grid-cols-2 gap-8">
            {/* For Companies */}
            <div className="group bg-white border border-gray-200 rounded-xl p-10 hover:border-orange-300 transition-all duration-300 hover:shadow-lg">
              <div className="w-16 h-16 bg-orange-500 rounded-xl flex items-center justify-center mb-6">
                <Building2 className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Für Unternehmen</h3>
              <p className="text-gray-600 mb-6 leading-relaxed">
                Sie suchen qualifizierte Mitarbeiter für Produktion, Logistik oder Handwerk? 
                Wir liefern Ihnen schnell und zuverlässig die passenden Fachkräfte.
              </p>
              <ul className="space-y-3 mb-8">
                <li className="flex items-center gap-3 text-gray-700">
                  <CheckCircle2 className="w-5 h-5 text-orange-500 flex-shrink-0" />
                  <span>Schnelle Besetzung offener Stellen</span>
                </li>
                <li className="flex items-center gap-3 text-gray-700">
                  <CheckCircle2 className="w-5 h-5 text-orange-500 flex-shrink-0" />
                  <span>Geprüfte und qualifizierte Mitarbeiter</span>
                </li>
                <li className="flex items-center gap-3 text-gray-700">
                  <CheckCircle2 className="w-5 h-5 text-orange-500 flex-shrink-0" />
                  <span>Flexible Personalplanung</span>
                </li>
              </ul>
              <Link 
                to="/unternehmen" 
                className="inline-flex items-center gap-2 bg-orange-500 hover:bg-orange-600 text-white px-6 py-3 rounded-lg font-semibold transition-all"
              >
                Personal anfragen <ArrowRight size={18} />
              </Link>
            </div>

            {/* For Applicants */}
            <div className="group bg-white border border-gray-200 rounded-xl p-10 hover:border-orange-300 transition-all duration-300 hover:shadow-lg">
              <div className="w-16 h-16 bg-gray-700 rounded-xl flex items-center justify-center mb-6">
                <Users className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Für Bewerber</h3>
              <p className="text-gray-600 mb-6 leading-relaxed">
                Sie suchen einen neuen Job mit fairer Bezahlung und guten Arbeitsbedingungen? 
                Wir finden die perfekte Stelle für Sie.
              </p>
              <ul className="space-y-3 mb-8">
                <li className="flex items-center gap-3 text-gray-700">
                  <CheckCircle2 className="w-5 h-5 text-orange-500 flex-shrink-0" />
                  <span>Faire Bezahlung nach Tarif</span>
                </li>
                <li className="flex items-center gap-3 text-gray-700">
                  <CheckCircle2 className="w-5 h-5 text-orange-500 flex-shrink-0" />
                  <span>Persönliche Betreuung</span>
                </li>
                <li className="flex items-center gap-3 text-gray-700">
                  <CheckCircle2 className="w-5 h-5 text-orange-500 flex-shrink-0" />
                  <span>Übernahmechancen</span>
                </li>
              </ul>
              <Link 
                to="/fuer-bewerber" 
                className="inline-flex items-center gap-2 bg-gray-700 hover:bg-gray-800 text-white px-6 py-3 rounded-lg font-semibold transition-all"
              >
                Jetzt bewerben <ArrowRight size={18} />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Reviews Section */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <span className="inline-flex items-center gap-2 px-5 py-2 rounded-full bg-orange-100 text-orange-600 text-sm font-semibold uppercase tracking-wider mb-4">
              Kundenstimmen
            </span>
            <h2 className="text-3xl md:text-4xl font-black text-gray-900 mt-4 mb-6">
              Das sagen unsere <span className="text-orange-500">Kunden</span>
            </h2>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {reviews.map((review, index) => (
              <div 
                key={index}
                className="bg-gray-50 border border-gray-200 rounded-xl p-8 relative"
              >
                <Quote className="w-10 h-10 text-orange-200 absolute top-6 right-6" />
                
                {/* Rating */}
                <div className="flex gap-1 mb-4">
                  {[...Array(review.rating)].map((_, i) => (
                    <Star key={i} size={18} className="fill-orange-400 text-orange-400" />
                  ))}
                </div>
                
                <p className="text-gray-700 mb-6 leading-relaxed relative z-10">
                  &ldquo;{review.text}&rdquo;
                </p>
                
                <div>
                  <p className="font-bold text-gray-900">{review.author}</p>
                  <p className="text-sm text-gray-500">{review.role}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-orange-500">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h2 className="text-3xl md:text-4xl font-black text-white mb-6">
            Bereit für den nächsten Karriereschritt?
          </h2>
          <p className="text-xl text-white/90 mb-10 max-w-2xl mx-auto">
            Kontaktieren Sie uns noch heute - wir freuen uns auf Sie!
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link 
              to="/kontakt" 
              className="bg-white text-orange-500 hover:bg-gray-100 px-8 py-4 rounded-lg font-semibold transition-all inline-flex items-center justify-center gap-2"
            >
              Kontakt aufnehmen <ArrowRight size={18} />
            </Link>
            <a 
              href="tel:072316039493" 
              className="bg-orange-600 text-white hover:bg-orange-700 px-8 py-4 rounded-lg font-semibold transition-all inline-flex items-center justify-center gap-2"
            >
              07231 60 39 493
            </a>
          </div>
        </div>
      </section>

      {/* Location Section */}
      <section className="py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <span className="inline-flex items-center gap-2 px-5 py-2 rounded-full bg-orange-100 text-orange-600 text-sm font-semibold uppercase tracking-wider mb-4">
                <MapPin size={16} />
                Standort
              </span>
              <h2 className="text-3xl md:text-4xl font-black text-gray-900 mt-4 mb-6">
                Besuchen Sie uns in <span className="text-orange-500">Pforzheim</span>
              </h2>
              <p className="text-gray-600 mb-8 leading-relaxed text-lg">
                Unser Büro befindet sich zentral in Pforzheim. Kommen Sie vorbei für ein persönliches Gespräch 
                oder rufen Sie uns einfach an.
              </p>
              
              <address className="not-italic space-y-4 text-gray-700">
                <div className="flex items-start gap-3">
                  <MapPin className="w-5 h-5 text-orange-500 mt-1 flex-shrink-0" />
                  <div>
                    <p className="font-semibold">PersoFlex GmbH</p>
                    <p>Kiehnlestraße 4</p>
                    <p>75172 Pforzheim</p>
                  </div>
                </div>
                <div className="flex items-center gap-3">
                  <Clock className="w-5 h-5 text-orange-500 flex-shrink-0" />
                  <p>Mo - Fr: 08:00 - 17:00 Uhr</p>
                </div>
              </address>

              <Link 
                to="/kontakt" 
                className="mt-8 inline-flex items-center gap-2 bg-orange-500 hover:bg-orange-600 text-white px-6 py-3 rounded-lg font-semibold transition-all"
              >
                Kontakt aufnehmen <ArrowRight size={18} />
              </Link>
            </div>

            <div className="bg-white border border-gray-200 rounded-xl overflow-hidden shadow-lg">
              <iframe 
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2625.0!2d8.6949572!3d48.8929474!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zNDjCsDUzJzM0LjYiTiA4wrA0MScxNy44IkU!5e0!3m2!1sde!2sde!4v1234567890"
                width="100%"
                height="400"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="PersoFlex GmbH Standort Pforzheim"
              />
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Home;
