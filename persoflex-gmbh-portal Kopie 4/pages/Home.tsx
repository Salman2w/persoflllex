import React from 'react';
import { Link } from 'react-router-dom';
import { 
  ArrowRight, 
  Users, 
  Building2, 
  Clock, 
  CheckCircle2, 
  Flame,
  Briefcase,
  Shield,
  TrendingUp,
  MapPin,
  Star,
  Zap,
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
      "image": "https://www.persoflex-gmbh.de/logo.png",
      "url": "https://www.persoflex-gmbh.de",
      "telephone": "+4972316039493",
      "priceRange": "Nach BAP-Tarif",
      "address": {
        "@type": "PostalAddress",
        "streetAddress": "Kiehnlestraße 4",
        "addressLocality": "Pforzheim",
        "postalCode": "75172",
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
      }
    }
  ]
};

export const Home: React.FC = () => {
  const stats = [
    { value: '500+', label: 'Vermittelte Fachkräfte', icon: Users },
    { value: '150+', label: 'Partnerunternehmen', icon: Building2 },
    { value: '24h', label: 'Schnelle Vermittlung', icon: Clock },
    { value: '98%', label: 'Zufriedenheitsrate', icon: Star },
  ];

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
      />
      
      <script type="application/ld+json">
        {JSON.stringify(structuredData)}
      </script>

      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-white">
        {/* Background Effects */}
        <div className="absolute inset-0">
          <div className="absolute top-1/4 left-1/4 w-[500px] h-[500px] bg-orange-500/10 rounded-full blur-[120px]" />
          <div className="absolute bottom-1/4 right-1/4 w-[400px] h-[400px] bg-red-500/10 rounded-full blur-[100px]" />
        </div>
        
        {/* Grid Pattern */}
        <div className="absolute inset-0 bg-[linear-gradient(rgba(0,0,0,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(0,0,0,0.03)_1px,transparent_1px)] bg-[size:64px_64px]" />

        <div className="relative max-w-7xl mx-auto px-6 pt-32 pb-20">
          <div className="text-center max-w-4xl mx-auto">
            {/* Badge */}
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-gray-50 border border-gray-200 mb-8">
              <Flame className="w-4 h-4 text-orange-500" />
              <span className="text-sm text-gray-600">Ihr Personaldienstleister in Pforzheim</span>
            </div>

            {/* Headline */}
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-black text-gray-900 mb-6 leading-[1.1] tracking-tight">
              Brennen Sie für{' '}
              <span className="relative">
                <span className="text-gradient-flame">Ihren Erfolg</span>
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
                className="group relative overflow-hidden bg-gradient-to-r from-orange-500 to-red-500 text-white px-8 py-4 rounded-lg font-bold transition-all duration-300 hover:shadow-lg hover:scale-105 inline-flex items-center justify-center gap-2"
              >
                <span className="relative z-10">Jobs entdecken</span>
                <ArrowRight size={18} className="relative z-10 transition-transform group-hover:translate-x-1" />
              </Link>
              <Link 
                to="/unternehmen" 
                className="px-8 py-4 border border-gray-300 rounded-lg text-gray-900 font-bold hover:bg-gray-50 hover:border-orange-500/50 transition-all inline-flex items-center justify-center gap-2"
              >
                Personal anfragen
              </Link>
            </div>

            {/* Trust Indicators */}
            <div className="mt-16 flex flex-wrap justify-center gap-8">
              <div className="flex items-center gap-2 px-4 py-2 bg-gray-50 rounded-full border border-gray-200">
                <CheckCircle2 className="w-4 h-4 text-orange-500" />
                <span className="text-sm text-gray-600">GVP Mitglied</span>
              </div>
              <div className="flex items-center gap-2 px-4 py-2 bg-gray-50 rounded-full border border-gray-200">
                <CheckCircle2 className="w-4 h-4 text-orange-500" />
                <span className="text-sm text-gray-600">AÜG Erlaubnis</span>
              </div>
              <div className="flex items-center gap-2 px-4 py-2 bg-gray-50 rounded-full border border-gray-200">
                <CheckCircle2 className="w-4 h-4 text-orange-500" />
                <span className="text-sm text-gray-600">Tarifgebunden</span>
              </div>
            </div>
          </div>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2">
          <div className="w-6 h-10 border-2 border-orange-500/30 rounded-full flex items-start justify-center p-2">
            <div className="w-1 h-2 bg-orange-500 rounded-full animate-bounce" />
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-20 bg-gray-50 border-y border-gray-200 relative overflow-hidden">
        <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-orange-500/50 to-transparent" />
        <div className="absolute bottom-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-orange-500/50 to-transparent" />
        
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <div key={index} className="text-center group">
                <div className="inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-orange-500/10 text-orange-500 mb-4 transition-all duration-300 group-hover:bg-orange-500 group-hover:text-white group-hover:shadow-lg group-hover:scale-110">
                  <stat.icon size={28} />
                </div>
                <div className="text-3xl md:text-4xl font-black text-gray-900 mb-2">{stat.value}</div>
                <div className="text-sm text-gray-600">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-24 bg-white relative overflow-hidden">
        <div className="absolute top-1/2 left-0 w-[500px] h-[500px] bg-orange-500/5 rounded-full blur-[150px] -translate-y-1/2" />
        
        <div className="max-w-7xl mx-auto px-6 relative">
          <div className="text-center mb-16">
            <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-orange-500/10 text-orange-500 text-sm font-semibold uppercase tracking-wider mb-4">
              <Flame className="w-4 h-4" />
              Unsere Leistungen
            </span>
            <h2 className="text-3xl md:text-5xl font-black text-gray-900 mt-4 mb-6">
              Personaldienstleistungen mit <span className="text-gradient-flame">Feuer</span>
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
                className="group bg-white border border-gray-200 rounded-2xl p-8 transition-all duration-500 hover:border-orange-500/50 hover:shadow-xl hover:-translate-y-2 relative overflow-hidden"
              >
                <div className="absolute top-0 right-0 w-32 h-32 bg-orange-500/5 rounded-full blur-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                
                <div className="w-16 h-16 rounded-2xl bg-orange-500/10 text-orange-500 flex items-center justify-center mb-6 transition-all duration-300 group-hover:bg-orange-500 group-hover:text-white group-hover:shadow-lg">
                  <service.icon size={32} />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-4">{service.title}</h3>
                <p className="text-gray-600 leading-relaxed mb-6">{service.description}</p>
                <div className="flex items-center text-orange-500 font-semibold group-hover:gap-4 transition-all">
                  <span>Mehr erfahren</span>
                  <ArrowRight size={18} className="ml-2 transition-transform group-hover:translate-x-2" />
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Industries Section */}
      <section className="py-24 bg-gray-50 border-y border-gray-200 relative overflow-hidden">
        <div className="absolute top-1/2 right-0 w-[600px] h-[600px] bg-orange-500/5 rounded-full blur-[150px] -translate-y-1/2" />
        
        <div className="max-w-7xl mx-auto px-6 relative">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-orange-500/10 text-orange-500 text-sm font-semibold uppercase tracking-wider mb-4">
                Branchen
              </span>
              <h2 className="text-3xl md:text-5xl font-black text-gray-900 mt-4 mb-6">
                Jobs in allen <span className="text-gradient-flame">Bereichen</span>
              </h2>
              <p className="text-gray-600 mb-8 leading-relaxed text-lg">
                Von der Produktion über Logistik bis hin zum Handwerk - wir vermitteln qualifizierte 
                Fachkräfte in alle relevanten Branchen der Region Pforzheim und Enzkreis.
              </p>
              
              <div className="space-y-4">
                {industries.map((industry, index) => (
                  <div 
                    key={index}
                    className="flex items-center justify-between p-5 bg-white border border-gray-200 rounded-xl hover:border-orange-500/50 hover:shadow-md transition-all group cursor-pointer"
                  >
                    <div className="flex items-center gap-4">
                      <div className="w-12 h-12 rounded-xl bg-orange-500/10 text-orange-500 flex items-center justify-center group-hover:bg-orange-500 group-hover:text-white transition-all">
                        <industry.icon size={24} />
                      </div>
                      <span className="font-semibold text-gray-900">{industry.name}</span>
                    </div>
                    <span className="text-sm text-orange-500 font-bold">{industry.jobs}</span>
                  </div>
                ))}
              </div>

              <Link 
                to="/jobs" 
                className="mt-8 inline-flex items-center gap-2 text-orange-500 font-bold hover:gap-4 transition-all"
              >
                Alle Jobs ansehen <ArrowRight size={18} />
              </Link>
            </div>

            <div className="relative">
              <div className="aspect-square rounded-3xl bg-gradient-to-br from-orange-500/20 via-red-500/10 to-orange-500/5 p-8 flex items-center justify-center border border-orange-500/20 relative overflow-hidden">
                {/* Animated background */}
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_30%,rgba(234,88,12,0.2),transparent_50%)]" />
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_70%,rgba(220,38,38,0.1),transparent_50%)]" />
                
                <div className="text-center relative z-10">
                  <Zap className="w-24 h-24 text-orange-500 mx-auto mb-6" />
                  <p className="text-4xl font-black text-gray-900 mb-2">365+</p>
                  <p className="text-xl text-gray-600">offene Stellen</p>
                  <p className="text-sm text-gray-500 mt-2">in der Region Pforzheim</p>
                </div>
              </div>
              
              {/* Floating badges */}
              <div className="absolute -top-4 -right-4 px-4 py-2 bg-white border border-orange-500/30 rounded-full shadow-md">
                <span className="text-sm font-bold text-gray-900">Produktion</span>
              </div>
              <div className="absolute -bottom-4 -left-4 px-4 py-2 bg-white border border-orange-500/30 rounded-full shadow-md">
                <span className="text-sm font-bold text-gray-900">Logistik</span>
              </div>
              <div className="absolute top-1/2 -right-6 px-4 py-2 bg-white border border-orange-500/30 rounded-full shadow-md">
                <span className="text-sm font-bold text-gray-900">Handwerk</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* For Companies & Applicants Section */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid md:grid-cols-2 gap-8">
            {/* For Companies */}
            <div className="group bg-white border border-gray-200 rounded-2xl p-10 relative overflow-hidden hover:border-orange-500/50 transition-all duration-500 hover:shadow-xl">
              <div className="absolute top-0 right-0 w-48 h-48 bg-orange-500/10 rounded-full blur-3xl transition-all group-hover:bg-orange-500/20" />
              <Building2 className="w-14 h-14 text-orange-500 mb-6" />
              <h3 className="text-2xl font-black text-gray-900 mb-4">Für Unternehmen</h3>
              <p className="text-gray-600 mb-6 leading-relaxed">
                Sie suchen qualifizierte Mitarbeiter für Produktion, Logistik oder Handwerk? 
                Wir liefern Ihnen schnell und zuverlässig die passenden Fachkräfte.
              </p>
              <ul className="space-y-3 mb-8">
                <li className="flex items-center gap-3 text-gray-600">
                  <CheckCircle2 className="w-5 h-5 text-orange-500 shrink-0" />
                  <span>Schnelle Personalvermittlung innerhalb 24h</span>
                </li>
                <li className="flex items-center gap-3 text-gray-600">
                  <CheckCircle2 className="w-5 h-5 text-orange-500 shrink-0" />
                  <span>Flexible Einsatzzeiten und Vertragsmodelle</span>
                </li>
                <li className="flex items-center gap-3 text-gray-600">
                  <CheckCircle2 className="w-5 h-5 text-orange-500 shrink-0" />
                  <span>Persönliche Betreuung vor Ort</span>
                </li>
              </ul>
              <Link 
                to="/unternehmen" 
                className="inline-flex items-center gap-2 text-orange-500 font-bold group-hover:gap-4 transition-all"
              >
                Personal anfragen <ArrowRight size={18} />
              </Link>
            </div>

            {/* For Applicants */}
            <div className="group bg-white border border-gray-200 rounded-2xl p-10 relative overflow-hidden hover:border-red-500/50 transition-all duration-500 hover:shadow-xl">
              <div className="absolute top-0 right-0 w-48 h-48 bg-red-500/10 rounded-full blur-3xl transition-all group-hover:bg-red-500/20" />
              <Users className="w-14 h-14 text-red-500 mb-6" />
              <h3 className="text-2xl font-black text-gray-900 mb-4">Für Bewerber</h3>
              <p className="text-gray-600 mb-6 leading-relaxed">
                Auf der Suche nach einem neuen Job in Pforzheim oder Umgebung? 
                Wir helfen Ihnen, Ihren Traumjob zu finden - kostenlos und persönlich.
              </p>
              <ul className="space-y-3 mb-8">
                <li className="flex items-center gap-3 text-gray-600">
                  <CheckCircle2 className="w-5 h-5 text-red-500 shrink-0" />
                  <span>Über 365 aktuelle Jobangebote</span>
                </li>
                <li className="flex items-center gap-3 text-gray-600">
                  <CheckCircle2 className="w-5 h-5 text-red-500 shrink-0" />
                  <span>Faire Bezahlung nach Tarif</span>
                </li>
                <li className="flex items-center gap-3 text-gray-600">
                  <CheckCircle2 className="w-5 h-5 text-red-500 shrink-0" />
                  <span>Persönliche Karriereberatung</span>
                </li>
              </ul>
              <Link 
                to="/jobs" 
                className="inline-flex items-center gap-2 text-red-500 font-bold group-hover:gap-4 transition-all"
              >
                Jobs entdecken <ArrowRight size={18} />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Reviews Section */}
      <section className="py-24 bg-gray-50 border-y border-gray-200">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-orange-500/10 text-orange-500 text-sm font-semibold uppercase tracking-wider mb-4">
              Bewertungen
            </span>
            <h2 className="text-3xl md:text-5xl font-black text-gray-900 mt-4 mb-6">
              Was unsere <span className="text-gradient-flame">Partner</span> sagen
            </h2>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {reviews.map((review, index) => (
              <div key={index} className="bg-white border border-gray-200 rounded-2xl p-8 relative">
                <Quote className="w-10 h-10 text-orange-500/20 absolute top-6 right-6" />
                <div className="flex gap-1 mb-4">
                  {[...Array(review.rating)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 text-orange-500 fill-orange-500" />
                  ))}
                </div>
                <p className="text-gray-600 mb-6 leading-relaxed">{review.text}</p>
                <div>
                  <p className="font-bold text-gray-900">{review.author}</p>
                  <p className="text-sm text-gray-500">{review.role}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Location Section */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-orange-500/10 text-orange-500 text-sm font-semibold uppercase tracking-wider mb-4">
              Standort
            </span>
            <h2 className="text-3xl md:text-5xl font-black text-gray-900 mt-4 mb-6">
              Lokal verwurzelt in <span className="text-gradient-flame">Pforzheim</span>
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto text-lg">
              Als regionaler Personaldienstleister kennen wir den Arbeitsmarkt in Pforzheim, 
              dem Enzkreis und Baden-Württemberg wie unsere Westentasche.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center p-8 bg-white border border-gray-200 rounded-2xl hover:border-orange-500/50 transition-all group">
              <div className="w-16 h-16 rounded-2xl bg-orange-500/10 text-orange-500 flex items-center justify-center mx-auto mb-4 group-hover:bg-orange-500 group-hover:text-white transition-all">
                <MapPin size={32} />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">Pforzheim</h3>
              <p className="text-gray-500">Hauptstandort</p>
            </div>
            <div className="text-center p-8 bg-white border border-gray-200 rounded-2xl hover:border-orange-500/50 transition-all group">
              <div className="w-16 h-16 rounded-2xl bg-orange-500/10 text-orange-500 flex items-center justify-center mx-auto mb-4 group-hover:bg-orange-500 group-hover:text-white transition-all">
                <TrendingUp size={32} />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">Enzkreis</h3>
              <p className="text-gray-500">Einzugsgebiet</p>
            </div>
            <div className="text-center p-8 bg-white border border-gray-200 rounded-2xl hover:border-orange-500/50 transition-all group">
              <div className="w-16 h-16 rounded-2xl bg-orange-500/10 text-orange-500 flex items-center justify-center mx-auto mb-4 group-hover:bg-orange-500 group-hover:text-white transition-all">
                <Building2 size={32} />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">Baden-Württemberg</h3>
              <p className="text-gray-500">Aktiv in der Region</p>
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
          <Flame className="w-20 h-20 text-orange-500 mx-auto mb-8" />
          <h2 className="text-3xl md:text-5xl font-black text-gray-900 mb-6">
            Bereit durchzustarten?
          </h2>
          <p className="text-lg text-gray-600 mb-10 max-w-2xl mx-auto">
            Ob Sie Personal suchen oder einen neuen Job - wir sind für Sie da. 
            Kontaktieren Sie uns noch heute für ein unverbindliches Gespräch.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link 
              to="/kontakt" 
              className="group relative overflow-hidden bg-gradient-to-r from-orange-500 to-red-500 text-white px-8 py-4 rounded-lg font-bold transition-all duration-300 hover:shadow-lg hover:scale-105 inline-flex items-center justify-center gap-2"
            >
              <span className="relative z-10">Jetzt Kontakt aufnehmen</span>
              <ArrowRight size={18} className="relative z-10" />
            </Link>
            <a 
              href="tel:072316039493" 
              className="px-8 py-4 border border-gray-300 rounded-lg text-gray-900 font-bold hover:bg-white hover:border-orange-500/50 transition-all inline-flex items-center justify-center gap-2"
            >
              07231 60 39 493
            </a>
          </div>
        </div>
      </section>
    </>
  );
};
