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
      description: 'Flexible Personallösungen für Ihr Unternehmen. Von kurzfristigen Einsätzen bis zur langfristigen Zusammenarbeit.',
    },
    {
      icon: Users,
      title: 'Personalvermittlung',
      description: 'Direkte Vermittlung qualifizierter Fachkräfte. Wir finden den perfekten Match für Ihre Anforderungen.',
    },
    {
      icon: Shield,
      title: 'Personalberatung',
      description: 'Strategische HR-Beratung und Unterstützung bei der Personalplanung für nachhaltigen Erfolg.',
    },
  ];

  const industries = [
    { name: 'Produktion & Fertigung', jobs: '120+ Jobs', icon: Factory },
    { name: 'Logistik & Lager', jobs: '85+ Jobs', icon: Truck },
    { name: 'Handwerk & Technik', jobs: '65+ Jobs', icon: Wrench },
    { name: 'Industrie & Metall', jobs: '95+ Jobs', icon: Package },
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
        title="PersoFlex GmbH | Zeitarbeit & Personalvermittlung Pforzheim"
        description="Ihr Partner für Zeitarbeit und Personalvermittlung in Pforzheim und Enzkreis. Über 500 vermittelte Fachkräfte in Produktion, Logistik und Industrie. Jetzt bewerben!"
        keywords="Zeitarbeit Pforzheim, Personalvermittlung Enzkreis, Jobs Pforzheim, Personaldienstleister Baden-Württemberg, Arbeitnehmerüberlassung"
        canonicalUrl="https://www.persoflex-gmbh.de"
      />
      
      <script type="application/ld+json">
        {JSON.stringify(structuredData)}
      </script>

      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        {/* Prominent Orange Gradient Background */}
        <div className="absolute inset-0 bg-gradient-to-b from-orange-100 via-orange-50 to-white" />
        
        {/* Secondary diagonal gradient for depth and warmth */}
        <div className="absolute inset-0 bg-gradient-to-br from-transparent via-orange-100/60 to-orange-200/50" />
        
        {/* Radial glow in upper right for visual interest */}
        <div className="absolute top-0 right-0 w-[70%] h-[70%] bg-gradient-radial from-orange-300/40 via-orange-200/25 to-transparent" />
        
        {/* Smooth bottom fade to white for transition */}
        <div className="absolute bottom-0 left-0 right-0 h-40 bg-gradient-to-t from-white to-transparent" />
        
        {/* Visible Grid Pattern */}
        <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(249,115,22,0.08)_1px,transparent_1px),linear-gradient(to_bottom,rgba(249,115,22,0.08)_1px,transparent_1px)] bg-[size:48px_48px]" />

        <div className="relative max-w-7xl mx-auto px-6 pt-32 pb-20">
          <div className="text-center max-w-4xl mx-auto">
            {/* Badge */}
            <div className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-orange-500 text-white mb-8 shadow-lg shadow-orange-500/25">
              <MapPin className="w-4 h-4" />
              <span className="text-sm font-semibold">Ihr Personaldienstleister in Pforzheim</span>
            </div>

            {/* Headline */}
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-black text-gray-900 mb-6 leading-tight">
              Finden Sie Ihren{' '}
              <span className="text-orange-500 relative">
                Traumjob
                <svg className="absolute -bottom-2 left-0 w-full h-3 text-orange-300" viewBox="0 0 200 12" preserveAspectRatio="none">
                  <path d="M0,8 Q50,0 100,8 T200,8" stroke="currentColor" strokeWidth="4" fill="none" strokeLinecap="round"/>
                </svg>
              </span>
            </h1>
            
            <p className="text-lg md:text-xl text-gray-600 mb-10 max-w-2xl mx-auto leading-relaxed">
              PersoFlex verbindet Unternehmen mit den besten Fachkräften in Pforzheim und dem Enzkreis. 
              Zeitarbeit und Personalvermittlung mit Leidenschaft.
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link 
                to="/jobs" 
                className="group bg-orange-500 hover:bg-orange-600 text-white px-8 py-4 rounded-xl font-semibold transition-all duration-300 hover:shadow-xl hover:shadow-orange-500/30 hover:-translate-y-0.5 inline-flex items-center justify-center gap-2"
              >
                <span>Jobs entdecken</span>
                <ArrowRight size={18} className="transition-transform group-hover:translate-x-1" />
              </Link>
              <Link 
                to="/unternehmen" 
                className="px-8 py-4 bg-white border-2 border-orange-200 text-gray-700 rounded-xl font-semibold hover:border-orange-400 hover:bg-orange-50 transition-all inline-flex items-center justify-center gap-2"
              >
                Personal anfragen
              </Link>
            </div>

            {/* Trust Indicators */}
            <div className="mt-16 flex flex-wrap justify-center gap-4">
              <div className="flex items-center gap-2 px-5 py-2.5 bg-white rounded-full border-2 border-orange-200 shadow-sm hover:border-orange-400 transition-colors">
                <CheckCircle2 className="w-5 h-5 text-orange-500" />
                <span className="text-sm font-semibold text-gray-700">GVP Mitglied</span>
              </div>
              <div className="flex items-center gap-2 px-5 py-2.5 bg-white rounded-full border-2 border-orange-200 shadow-sm hover:border-orange-400 transition-colors">
                <CheckCircle2 className="w-5 h-5 text-orange-500" />
                <span className="text-sm font-semibold text-gray-700">AÜG Erlaubnis</span>
              </div>
              <div className="flex items-center gap-2 px-5 py-2.5 bg-white rounded-full border-2 border-orange-200 shadow-sm hover:border-orange-400 transition-colors">
                <CheckCircle2 className="w-5 h-5 text-orange-500" />
                <span className="text-sm font-semibold text-gray-700">Tarifgebunden</span>
              </div>
            </div>
          </div>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2">
          <div className="w-6 h-10 border-2 border-orange-300 rounded-full flex items-start justify-center p-2">
            <div className="w-1.5 h-3 bg-orange-500 rounded-full animate-bounce" />
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <span className="inline-flex items-center gap-2 px-5 py-2 rounded-full bg-orange-100 text-orange-600 text-sm font-semibold uppercase tracking-wider mb-4">
              Unsere Leistungen
            </span>
            <h2 className="text-3xl md:text-4xl font-black text-gray-900 mt-4 mb-6">
              Personaldienstleistungen für Ihren <span className="text-orange-500">Erfolg</span>
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto text-lg">
              Von der Arbeitnehmerüberlassung bis zur direkten Personalvermittlung - 
              wir bieten maßgeschneiderte Lösungen für Unternehmen in Pforzheim und Umgebung.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <div 
                key={index} 
                className="group bg-white border border-gray-200 rounded-xl p-8 transition-all duration-300 hover:border-orange-300 hover:shadow-lg h-full flex flex-col"
              >
                <div className="w-14 h-14 rounded-xl bg-orange-500 text-white flex items-center justify-center mb-6 flex-shrink-0">
                  <service.icon size={28} />
                </div>
                <h3 className="text-lg md:text-xl font-bold text-gray-900 mb-4 line-clamp-3 break-words">{service.title}</h3>
                <p className="text-gray-600 leading-relaxed mb-6 flex-grow text-sm">{service.description}</p>
                <div className="flex items-center text-orange-500 font-semibold group-hover:gap-3 transition-all mt-auto">
                  <span>Mehr erfahren</span>
                  <ArrowRight size={18} className="ml-2 transition-transform group-hover:translate-x-1" />
                </div>
              </div>
            ))}
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
                Von der Produktion über Logistik bis hin zum Handwerk - wir vermitteln qualifizierte 
                Fachkräfte in alle relevanten Branchen der Region Pforzheim und Enzkreis.
              </p>
              
              <div className="space-y-4">
                {industries.map((industry, index) => (
                  <div 
                    key={index}
                    className="flex items-center justify-between p-5 bg-gray-50 border border-gray-200 rounded-xl hover:border-orange-300 hover:bg-orange-50 transition-all group cursor-pointer"
                  >
                    <div className="flex items-center gap-4">
                      <div className="w-12 h-12 rounded-xl bg-orange-100 text-orange-500 flex items-center justify-center group-hover:bg-orange-500 group-hover:text-white transition-colors">
                        <industry.icon size={24} />
                      </div>
                      <span className="font-semibold text-gray-900">{industry.name}</span>
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
              <div className="aspect-square rounded-2xl bg-orange-500 p-8 flex items-center justify-center relative overflow-hidden">
                {/* Pattern overlay */}
                <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.1)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.1)_1px,transparent_1px)] bg-[size:24px_24px]" />
                
                <div className="text-center relative z-10">
                  <Star className="w-20 h-20 text-white/80 mx-auto mb-6" />
                  <p className="text-5xl font-black text-white mb-2">365+</p>
                  <p className="text-xl font-semibold text-white/90">offene Stellen</p>
                  <p className="text-sm text-white/70 mt-2">in der Region Pforzheim</p>
                </div>
              </div>
              
              {/* Floating badges */}
              <div className="absolute -top-4 -right-4 px-5 py-2.5 bg-white rounded-full shadow-lg border border-gray-200">
                <span className="text-sm font-semibold text-gray-700">Produktion</span>
              </div>
              <div className="absolute -bottom-4 -left-4 px-5 py-2.5 bg-white rounded-full shadow-lg border border-gray-200">
                <span className="text-sm font-semibold text-gray-700">Logistik</span>
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
