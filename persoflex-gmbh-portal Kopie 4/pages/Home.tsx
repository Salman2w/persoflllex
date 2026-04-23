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
  Quote,
  Check
} from 'lucide-react';
import { SEO } from '../components/SEO';
import { FAQSection } from '../components/FAQSection';
import { TeamPreview } from '../components/TeamPreview';
import { TrustBar } from '../components/TrustBar';
import { RegionalSection } from '../components/RegionalSection';
import { NewsletterSection } from '../components/NewsletterSection';
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
    },
    {
      "@type": "FAQPage",
      "mainEntity": [
        {
          "@type": "Question",
          "name": "Was ist Zeitarbeit und wie funktioniert sie?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Zeitarbeit (Arbeitnehmerüberlassung) bedeutet, dass Sie bei PersoFlex GmbH angestellt sind und in verschiedenen Kundenunternehmen arbeiten. Sie erhalten einen festen Arbeitsvertrag mit tariflicher Bezahlung, Urlaubs- und Weihnachtsgeld sowie vollen Sozialversicherungsschutz."
          }
        },
        {
          "@type": "Question",
          "name": "Welche Jobs bietet PersoFlex in Pforzheim an?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Wir vermitteln Stellen in Produktion, Logistik, Lager, Industrie und Handwerk in Pforzheim und dem Enzkreis. Typische Positionen sind Produktionshelfer, Lageristen, Staplerfahrer, Maschinenbediener und Fachkräfte in der Metallverarbeitung."
          }
        },
        {
          "@type": "Question",
          "name": "Ist die Bewerbung bei PersoFlex kostenlos?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Ja, die Bewerbung und Vermittlung ist für Bewerber komplett kostenlos. Sie können sich online, telefonisch unter 07231 1545010 oder persönlich in unserer Niederlassung in der Kiehnlestraße 4, 75172 Pforzheim bewerben."
          }
        },
        {
          "@type": "Question",
          "name": "Was ist der Unterschied zwischen Zeitarbeit und Personalvermittlung?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Bei der Zeitarbeit sind Sie bei PersoFlex angestellt und arbeiten bei unseren Kunden. Bei der Personalvermittlung vermitteln wir Sie direkt in eine Festanstellung beim Kundenunternehmen. Beide Optionen bieten Vorteile je nach Ihrer persönlichen Situation."
          }
        },
        {
          "@type": "Question",
          "name": "Welche Vorteile bietet PersoFlex als Arbeitgeber?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Als GVP-Mitglied bieten wir tarifliche Bezahlung, Urlaubs- und Weihnachtsgeld, persönliche Betreuung, Weiterbildungsmöglichkeiten und die Chance auf Übernahme beim Kundenunternehmen. Wir sind ein regionaler Partner mit Fokus auf Pforzheim und den Enzkreis."
          }
        },
        {
          "@type": "Question",
          "name": "Wie schnell kann ich bei PersoFlex anfangen?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Nach einem ersten persönlichen Gespräch und der Prüfung Ihrer Unterlagen können Sie in der Regel innerhalb von wenigen Tagen starten. Bei dringendem Personalbedarf auch schneller – oft schon am nächsten Werktag."
          }
        }
      ]
    },
    {
      "@type": "BreadcrumbList",
      "itemListElement": [
        {
          "@type": "ListItem",
          "position": 1,
          "name": "Startseite",
          "item": "https://www.persoflex-gmbh.de/"
        }
      ]
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
      role: 'Logistikleiter',
      company: 'Produktionsbetrieb Pforzheim',
      text: 'Wir hatten kurzfristig einen Personalengpass in der Kommissionierung. PersoFlex hatte innerhalb von 48 Stunden zwei passende Staplerfahrer vor Ort – zuverlässig und eingearbeitet.',
      rating: 5,
    },
    {
      author: 'Julia S.',
      role: 'HR Managerin',
      company: 'Metallverarbeitung Enzkreis',
      text: 'Die persönliche Betreuung macht den Unterschied. Unser Ansprechpartner kennt unseren Betrieb und schickt nur Kandidaten, die wirklich passen. Das spart uns Zeit und teure Fehlbesetzungen.',
      rating: 5,
    },
    {
      author: 'Ali K.',
      role: 'Staplerfahrer',
      company: 'in Festanstellung übernommen',
      text: 'Nach drei Monaten bei einem Logistikkunden wurde ich übernommen. Bezahlung war von Anfang an nach Tarif, inklusive Urlaubsgeld. Genau so soll Zeitarbeit laufen.',
      rating: 5,
    },
  ];

  return (
    <>
      <SEO 
        title="Zeitarbeit & Personalvermittlung Pforzheim | PersoFlex GmbH"
        description="PersoFlex GmbH Pforzheim: Zeitarbeit und Personalvermittlung für Produktion, Logistik und Industrie. Tariflich, persönlich, regional im Enzkreis."
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
          width={1920}
          height={1080}
          fetchPriority="high"
          decoding="async"
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
            {/* Regional badge - precise location signal for local SEO */}
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 backdrop-blur-md text-white mb-10 border border-white/20">
              <MapPin className="w-3.5 h-3.5 text-orange-400" />
              <span className="text-xs font-medium tracking-wider uppercase">Pforzheim · Enzkreis · Nordschwarzwald</span>
            </div>

            {/* Headline - specific positioning per business brief */}
            <h1 
              className="text-4xl md:text-5xl lg:text-[3.5rem] font-bold text-white mb-6 leading-[1.1] tracking-tight text-balance"
              style={{ textShadow: '0 2px 20px rgba(0,0,0,0.5)' }}
            >
              Zeitarbeit und Personalvermittlung in{' '}
              <span className="text-orange-400">Pforzheim</span>{' '}
              für Industrie, Logistik und Produktion
            </h1>
            
            {/* Subheadline - clear value proposition for both audiences */}
            <p 
              className="text-base md:text-lg text-white/90 mb-10 max-w-2xl mx-auto leading-relaxed"
              style={{ textShadow: '0 1px 12px rgba(0,0,0,0.7)' }}
            >
              Regionaler Personaldienstleister für Unternehmen und Bewerber im Enzkreis. 
              Persönlich betreut, tariflich bezahlt, schnell verfügbar — seit Gründung verwurzelt in der Region.
            </p>

            {/* Primary CTA Group - three clear paths: companies, applicants, initiative */}
            <div className="flex flex-col sm:flex-row gap-3 justify-center mb-5">
              <Link 
                to="/personalanfrage" 
                className="group bg-orange-500 hover:bg-orange-600 text-white px-7 py-3.5 rounded-lg font-semibold text-sm transition-all duration-200 shadow-lg shadow-orange-500/20 hover:shadow-orange-500/40 inline-flex items-center justify-center gap-2"
              >
                <span>Personal anfragen</span>
                <ArrowRight size={16} className="transition-transform group-hover:translate-x-0.5" />
              </Link>
              <Link 
                to="/jobs" 
                className="group px-7 py-3.5 bg-white/10 backdrop-blur-md border border-white/30 text-white rounded-lg font-semibold text-sm hover:bg-white/15 hover:border-white/50 transition-all inline-flex items-center justify-center gap-2"
              >
                <span>Jobs ansehen</span>
                <ArrowRight size={16} className="transition-transform group-hover:translate-x-0.5" />
              </Link>
            </div>

            {/* Secondary CTA - initiative application path */}
            <div className="flex justify-center">
              <Link
                to="/fuer-bewerber"
                className="text-sm text-white/80 hover:text-white underline underline-offset-4 decoration-white/40 hover:decoration-white/80 transition-colors"
              >
                Oder initiativ bewerben →
              </Link>
            </div>

            {/* Trust Indicators - minimal, refined */}
            <div className="mt-16 flex flex-wrap justify-center gap-x-8 gap-y-3">
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-orange-400" />
                <span className="text-xs font-medium text-white/90 tracking-wide uppercase">GVP-Mitglied</span>
              </div>
              <div className="hidden sm:block w-px h-4 bg-white/20 self-center" />
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-orange-400" />
                <span className="text-xs font-medium text-white/90 tracking-wide uppercase">BAP-Tarifvertrag</span>
              </div>
              <div className="hidden sm:block w-px h-4 bg-white/20 self-center" />
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-orange-400" />
                <span className="text-xs font-medium text-white/90 tracking-wide uppercase">Regional verwurzelt</span>
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

      {/* Trust Bar — credibility & regulatory signals with cited sources */}
      <TrustBar />

      {/* Services Section */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          {/* Header - refined typography */}
          <div className="text-center mb-16 max-w-3xl mx-auto">
            <span className="inline-block text-xs font-semibold uppercase tracking-[0.2em] text-orange-600 mb-4">
              Unsere Leistungen
            </span>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 tracking-tight leading-tight mb-6 text-balance">
              Zeitarbeit, Personalvermittlung und <span className="text-orange-500">On-Site-Betreuung</span>
            </h2>
            <p className="text-gray-600 text-base md:text-lg leading-relaxed">
              Drei klare Wege zum passenden Personal in Pforzheim und dem Enzkreis — 
              für Auftragsspitzen, Festanstellungen und den laufenden Schichtbetrieb.
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
          <div className="bg-white border border-gray-200 rounded-2xl p-10 md:p-14">
            <div className="grid md:grid-cols-2 gap-12 md:gap-14">
              <div>
                <h3 className="text-xl md:text-2xl font-bold text-gray-900 mb-8 tracking-tight">
                  Warum PersoFlex wählen?
                </h3>
                <div className="space-y-5">
                  {[
                    { title: 'GVP-Mitglied', desc: 'Tariftreue nach BAP-Tarifvertrag mit Branchenzuschlägen in Industrie und Logistik.' },
                    { title: 'Regional verwurzelt', desc: 'Seit Gründung in Pforzheim ansässig — wir kennen Betriebe und Bewerber persönlich.' },
                    { title: 'Schnelle Besetzung', desc: 'Erste Kandidatenvorschläge in 24 bis 48 Stunden, auch bei kurzfristigen Auftragsspitzen.' },
                    { title: 'Fester Ansprechpartner', desc: 'Keine Hotline, keine Callcenter — direkter Kontakt zu einem Betreuer vor Ort.' }
                  ].map((benefit, idx) => (
                    <div key={idx} className="flex gap-3">
                      <CheckCircle2 className="w-5 h-5 text-orange-500 flex-shrink-0 mt-0.5" strokeWidth={2} />
                      <div>
                        <h4 className="font-semibold text-gray-900 mb-1 text-sm">{benefit.title}</h4>
                        <p className="text-gray-600 text-sm leading-relaxed">{benefit.desc}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              <div>
                <h3 className="text-xl md:text-2xl font-bold text-gray-900 mb-8 tracking-tight">
                  Für jeden Bedarf die richtige Lösung
                </h3>
                <div className="space-y-4">
                  {[
                    { title: 'Für Unternehmen', desc: 'Sie suchen flexible Personalressourcen, um Kapazitätsspitzen zu bewältigen oder kurzfristige Ausfälle zu überbrücken.' },
                    { title: 'Für Bewerber', desc: 'Sie möchten schnell in die Arbeitswelt einsteigen, verschiedene Unternehmen kennenlernen oder Ihre Karriere entwickeln.' },
                    { title: 'Für Berater', desc: 'Sie benötigen strategische Unterstützung bei Personalplanung, Recruiting-Prozessen oder HR-Herausforderungen.' }
                  ].map((item, idx) => (
                    <div key={idx} className="p-4 bg-gray-50 rounded-lg border border-gray-200 hover:border-orange-300 transition-colors">
                      <h4 className="font-semibold text-gray-900 mb-1.5 text-sm">{item.title}</h4>
                      <p className="text-gray-600 text-sm leading-relaxed">{item.desc}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* CTA Section */}
          <div className="mt-16 text-center">
            <p className="text-gray-600 mb-6 text-base md:text-lg">
              Bereit, mit PersoFlex zusammenzuarbeiten?
            </p>
            <div className="flex flex-wrap gap-3 justify-center">
              <Link 
                to="/kontakt"
                className="inline-flex items-center gap-2 bg-orange-500 hover:bg-orange-600 text-white px-7 py-3.5 rounded-lg font-semibold text-sm transition-all shadow-sm hover:shadow-md"
              >
                Jetzt Kontakt aufnehmen <ArrowRight size={15} />
              </Link>
              <Link 
                to="/jobs"
                className="inline-flex items-center gap-2 border border-gray-300 text-gray-900 hover:border-orange-500 hover:text-orange-500 px-7 py-3.5 rounded-lg font-semibold text-sm transition-all"
              >
                Jobs durchsuchen <ArrowRight size={15} />
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
              <span className="inline-block text-xs font-semibold uppercase tracking-[0.2em] text-orange-600 mb-4">
                Branchen
              </span>
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 tracking-tight leading-tight mb-6 text-balance">
                Jobs in allen <span className="text-orange-500">Bereichen</span>
              </h2>
              <p className="text-gray-600 mb-8 leading-relaxed text-base md:text-lg">
                Als spezialisierte <span className="font-semibold text-gray-700">Zeitarbeitsfirma Pforzheim</span> verstehen wir die Anforderungen regionaler Unternehmen. Unser <span className="font-semibold text-gray-700">Zeitarbeit Pforzheim</span> Angebot verbindet qualifizierte Fachkräfte mit Betrieben in Produktion, Logistik, Handwerk und Industrie. Wir bieten flexible, verlässliche Personalbesetzung für Ihre kurzfristigen und mittelfristigen Projekte im Enzkreis—mit transparenter Kommunikation und fairer Zusammenarbeit auf beiden Seiten.
              </p>
              
              <div className="space-y-3">
                {industries.map((industry, index) => (
                  <div 
                    key={index}
                    className="flex items-center justify-between p-4 bg-gray-50 border border-gray-200 rounded-lg hover:border-orange-300 hover:bg-white transition-all group cursor-pointer"
                  >
                    <div className="flex items-center gap-4">
                      <div className="w-14 h-14 rounded-lg overflow-hidden flex-shrink-0">
                        <img 
                          src={industry.image} 
                          alt={`${industry.name} - Jobs in Pforzheim und Enzkreis`}
                          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                          width={56}
                          height={56}
                          loading="lazy"
                          decoding="async"
                        />
                      </div>
                      <div>
                        <span className="font-semibold text-gray-900 block text-sm">{industry.name}</span>
                        <span className="text-xs text-gray-500">Fachkräfte verfügbar</span>
                      </div>
                    </div>
                    <span className="text-xs text-orange-600 font-semibold tracking-wide">{industry.jobs}</span>
                  </div>
                ))}
              </div>

              <Link 
                to="/jobs" 
                className="mt-8 inline-flex items-center gap-2 bg-orange-500 hover:bg-orange-600 text-white px-6 py-3 rounded-lg font-semibold text-sm transition-all shadow-sm hover:shadow-md"
              >
                Alle Jobs ansehen <ArrowRight size={16} />
              </Link>
            </div>

            <div className="relative">
              <div className="rounded-2xl bg-gradient-to-br from-orange-50/60 to-gray-50 border border-orange-200/60 p-8 md:p-10 flex flex-col justify-between h-full">
                {/* Header */}
                <div className="mb-8">
                  <h3 className="text-xl md:text-2xl font-bold text-gray-900 mb-3 tracking-tight">Unsere Fachbereiche</h3>
                  <div className="h-0.5 w-10 bg-orange-500 rounded-full"></div>
                </div>
                
                {/* Service areas content */}
                <div className="space-y-5 flex-grow">
                  {[
                    { title: 'Produktion & Fertigung', desc: 'Fachkräfte für Fertigungsprozesse und Montage' },
                    { title: 'Logistik & Lagerbetreuung', desc: 'Personal für Lagerverwaltung und Versand' },
                    { title: 'Handwerk & Technik', desc: 'Spezialisierte Handwerker und Techniker' },
                    { title: 'Industrie & Metallbearbeitung', desc: 'Fachpersonal für Industriebetriebe' },
                  ].map((area, idx) => (
                    <div key={idx} className="flex items-start gap-3">
                      <div className="w-5 h-5 rounded-full bg-orange-500 flex items-center justify-center flex-shrink-0 mt-0.5">
                        <Check className="w-3 h-3 text-white" strokeWidth={3} />
                      </div>
                      <div>
                        <p className="font-semibold text-gray-900 text-sm">{area.title}</p>
                        <p className="text-xs text-gray-600 mt-0.5">{area.desc}</p>
                      </div>
                    </div>
                  ))}
                </div>
                
                {/* Bottom accent line */}
                <div className="mt-8 pt-6 border-t border-orange-200/60">
                  <p className="text-xs text-gray-500 font-medium tracking-wide">Alle Bereiche regional in Pforzheim & Enzkreis</p>
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
            <div className="group bg-white border border-gray-200 rounded-xl p-8 md:p-10 hover:border-orange-300 transition-all duration-300 hover:shadow-lg">
              <div className="w-11 h-11 bg-orange-50 text-orange-500 rounded-lg flex items-center justify-center mb-6 group-hover:bg-orange-500 group-hover:text-white transition-colors">
                <Building2 className="w-5 h-5" strokeWidth={1.75} />
              </div>
              <h3 className="text-xl md:text-2xl font-bold text-gray-900 mb-3 tracking-tight">Für Unternehmen</h3>
              <p className="text-gray-600 mb-6 leading-relaxed text-sm md:text-base">
                Sie suchen qualifizierte Mitarbeiter für Produktion, Logistik oder Handwerk? 
                Wir liefern Ihnen schnell und zuverlässig die passenden Fachkräfte.
              </p>
              <ul className="space-y-2.5 mb-8">
                <li className="flex items-center gap-2.5 text-gray-700 text-sm">
                  <Check className="w-4 h-4 text-orange-500 flex-shrink-0" strokeWidth={2.5} />
                  <span>Schnelle Besetzung offener Stellen</span>
                </li>
                <li className="flex items-center gap-2.5 text-gray-700 text-sm">
                  <Check className="w-4 h-4 text-orange-500 flex-shrink-0" strokeWidth={2.5} />
                  <span>Geprüfte und qualifizierte Mitarbeiter</span>
                </li>
                <li className="flex items-center gap-2.5 text-gray-700 text-sm">
                  <Check className="w-4 h-4 text-orange-500 flex-shrink-0" strokeWidth={2.5} />
                  <span>Flexible Personalplanung</span>
                </li>
              </ul>
              <Link 
                to="/unternehmen" 
                className="inline-flex items-center gap-2 bg-orange-500 hover:bg-orange-600 text-white px-5 py-2.5 rounded-lg font-semibold text-sm transition-all shadow-sm hover:shadow-md"
              >
                Personal anfragen <ArrowRight size={15} />
              </Link>
            </div>

            {/* For Applicants */}
            <div className="group bg-white border border-gray-200 rounded-xl p-8 md:p-10 hover:border-gray-400 transition-all duration-300 hover:shadow-lg">
              <div className="w-11 h-11 bg-gray-100 text-gray-700 rounded-lg flex items-center justify-center mb-6 group-hover:bg-gray-800 group-hover:text-white transition-colors">
                <Users className="w-5 h-5" strokeWidth={1.75} />
              </div>
              <h3 className="text-xl md:text-2xl font-bold text-gray-900 mb-3 tracking-tight">Für Bewerber</h3>
              <p className="text-gray-600 mb-6 leading-relaxed text-sm md:text-base">
                Sie suchen einen neuen Job mit fairer Bezahlung und guten Arbeitsbedingungen? 
                Wir finden die passende Stelle für Sie.
              </p>
              <ul className="space-y-2.5 mb-8">
                <li className="flex items-center gap-2.5 text-gray-700 text-sm">
                  <Check className="w-4 h-4 text-orange-500 flex-shrink-0" strokeWidth={2.5} />
                  <span>Faire Bezahlung nach Tarif</span>
                </li>
                <li className="flex items-center gap-2.5 text-gray-700 text-sm">
                  <Check className="w-4 h-4 text-orange-500 flex-shrink-0" strokeWidth={2.5} />
                  <span>Persönliche Betreuung</span>
                </li>
                <li className="flex items-center gap-2.5 text-gray-700 text-sm">
                  <Check className="w-4 h-4 text-orange-500 flex-shrink-0" strokeWidth={2.5} />
                  <span>Übernahmechancen</span>
                </li>
              </ul>
              <Link 
                to="/fuer-bewerber" 
                className="inline-flex items-center gap-2 bg-gray-900 hover:bg-gray-800 text-white px-5 py-2.5 rounded-lg font-semibold text-sm transition-all shadow-sm hover:shadow-md"
              >
                Jetzt bewerben <ArrowRight size={15} />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Regional section — local SEO & GEO/AI readability block */}
      <RegionalSection />

      {/* Team Preview - Named team members build Subject Expertise & Credibility signals */}
      <TeamPreview />

      {/* Reviews Section */}
      <section className="py-24 bg-gray-50 border-y border-gray-100">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16 max-w-3xl mx-auto">
            <span className="inline-block text-xs font-semibold uppercase tracking-[0.2em] text-orange-600 mb-4">
              Kundenstimmen
            </span>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 tracking-tight leading-tight text-balance">
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
                
                  <div className="pt-4 border-t border-gray-200">
                    <p className="font-semibold text-gray-900 text-sm">{review.author}</p>
                    <p className="text-xs text-gray-500 mt-0.5">{review.role}</p>
                    <p className="text-xs text-orange-600 font-medium mt-0.5">{review.company}</p>
                  </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Section - mirrors JSON-LD FAQPage schema for improved SEO/LLM discoverability */}
      <FAQSection />

      {/* Newsletter lead-magnet — addresses lead-generation gap flagged in SEO audit */}
      <NewsletterSection />

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
              <span className="inline-block text-xs font-semibold uppercase tracking-[0.2em] text-orange-600 mb-4">
                Standort
              </span>
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 tracking-tight leading-tight mb-6 text-balance">
                Besuchen Sie uns in <span className="text-orange-500">Pforzheim</span>
              </h2>
              <p className="text-gray-600 mb-8 leading-relaxed text-base md:text-lg">
                Unser Büro befindet sich zentral in Pforzheim. Kommen Sie vorbei für ein persönliches Gespräch 
                oder rufen Sie uns einfach an.
              </p>
              
              <address className="not-italic space-y-4 text-gray-700 text-sm">
                <div className="flex items-start gap-3">
                  <MapPin className="w-4 h-4 text-orange-500 mt-1 flex-shrink-0" strokeWidth={2} />
                  <div>
                    <p className="font-semibold text-gray-900">PersoFlex GmbH</p>
                    <p>Kiehnlestraße 4</p>
                    <p>75172 Pforzheim</p>
                  </div>
                </div>
                <div className="flex items-center gap-3">
                  <Clock className="w-4 h-4 text-orange-500 flex-shrink-0" strokeWidth={2} />
                  <p>Mo – Fr: 08:00 – 17:00 Uhr</p>
                </div>
              </address>

              <Link 
                to="/kontakt" 
                className="mt-8 inline-flex items-center gap-2 bg-orange-500 hover:bg-orange-600 text-white px-6 py-3 rounded-lg font-semibold text-sm transition-all shadow-sm hover:shadow-md"
              >
                Kontakt aufnehmen <ArrowRight size={15} />
              </Link>
            </div>

            <div className="bg-white border border-gray-200 rounded-xl overflow-hidden shadow-sm">
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
