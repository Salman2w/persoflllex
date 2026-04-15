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
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-amber-100/80 via-orange-50 to-rose-50/50">
        {/* Background Effects - More Vibrant */}
        <div className="absolute inset-0">
          <div className="absolute top-1/4 left-1/4 w-[600px] h-[600px] bg-orange-400/30 rounded-full blur-[150px] animate-pulse" />
          <div className="absolute bottom-1/4 right-1/4 w-[500px] h-[500px] bg-rose-400/25 rounded-full blur-[130px]" />
          <div className="absolute top-1/2 right-1/3 w-[400px] h-[400px] bg-purple-400/15 rounded-full blur-[120px]" />
          <div className="absolute bottom-1/3 left-1/3 w-[350px] h-[350px] bg-teal-400/20 rounded-full blur-[100px]" />
        </div>
        
        {/* Grid Pattern */}
        <div className="absolute inset-0 bg-[linear-gradient(rgba(255,107,0,0.05)_1px,transparent_1px),linear-gradient(90deg,rgba(255,107,0,0.05)_1px,transparent_1px)] bg-[size:64px_64px]" />

        <div className="relative max-w-7xl mx-auto px-6 pt-32 pb-20">
          <div className="text-center max-w-4xl mx-auto">
            {/* Badge */}
            <div className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-gradient-to-r from-orange-200 via-rose-100 to-purple-100 border border-orange-300/50 mb-8 shadow-md">
              <Flame className="w-5 h-5 text-orange-500 animate-pulse" />
              <span className="text-sm font-bold text-orange-700">Ihr Personaldienstleister in Pforzheim</span>
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
                className="group relative overflow-hidden bg-gradient-to-r from-orange-500 via-rose-500 to-purple-500 text-white px-8 py-4 rounded-2xl font-bold transition-all duration-300 hover:shadow-[0_8px_40px_rgba(255,107,0,0.4)] hover:scale-105 inline-flex items-center justify-center gap-2"
              >
                <span className="relative z-10">Jobs entdecken</span>
                <ArrowRight size={18} className="relative z-10 transition-transform group-hover:translate-x-1" />
              </Link>
              <Link 
                to="/unternehmen" 
                className="px-8 py-4 bg-gradient-to-r from-teal-500 to-cyan-500 text-white rounded-2xl font-bold hover:shadow-[0_8px_40px_rgba(20,168,157,0.4)] hover:scale-105 transition-all inline-flex items-center justify-center gap-2"
              >
                Personal anfragen
              </Link>
            </div>

            {/* Trust Indicators */}
            <div className="mt-16 flex flex-wrap justify-center gap-4">
              <div className="flex items-center gap-2 px-5 py-2.5 bg-gradient-to-r from-teal-100 to-cyan-100 rounded-full border-2 border-teal-300 shadow-md hover:scale-105 transition-transform">
                <CheckCircle2 className="w-5 h-5 text-teal-600" />
                <span className="text-sm font-bold text-teal-700">GVP Mitglied</span>
              </div>
              <div className="flex items-center gap-2 px-5 py-2.5 bg-gradient-to-r from-orange-100 to-amber-100 rounded-full border-2 border-orange-300 shadow-md hover:scale-105 transition-transform">
                <CheckCircle2 className="w-5 h-5 text-orange-600" />
                <span className="text-sm font-bold text-orange-700">AÜG Erlaubnis</span>
              </div>
              <div className="flex items-center gap-2 px-5 py-2.5 bg-gradient-to-r from-purple-100 to-pink-100 rounded-full border-2 border-purple-300 shadow-md hover:scale-105 transition-transform">
                <CheckCircle2 className="w-5 h-5 text-purple-600" />
                <span className="text-sm font-bold text-purple-700">Tarifgebunden</span>
              </div>
            </div>
          </div>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2">
          <div className="w-6 h-10 border-2 border-orange-400/50 rounded-full flex items-start justify-center p-2">
            <div className="w-1 h-2 bg-orange-500 rounded-full animate-bounce" />
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-20 bg-gradient-to-r from-orange-500 via-rose-500 to-purple-600 relative overflow-hidden">
        <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.1)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.1)_1px,transparent_1px)] bg-[size:32px_32px]" />
        <div className="absolute top-0 left-0 w-[400px] h-[400px] bg-yellow-400/20 rounded-full blur-[120px]" />
        <div className="absolute bottom-0 right-0 w-[400px] h-[400px] bg-pink-400/20 rounded-full blur-[120px]" />
        
        <div className="max-w-7xl mx-auto px-6 relative">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => {
              const iconColors = ['bg-amber-400', 'bg-teal-400', 'bg-pink-400', 'bg-purple-400'][index];
              return (
                <div key={index} className="text-center group">
                  <div className={`inline-flex items-center justify-center w-18 h-18 rounded-2xl bg-white/25 text-white mb-4 transition-all duration-300 group-hover:${iconColors} group-hover:shadow-xl group-hover:scale-110 group-hover:rotate-3`}>
                    <stat.icon size={32} />
                  </div>
                  <div className="text-3xl md:text-5xl font-black text-white mb-2 drop-shadow-lg">{stat.value}</div>
                  <div className="text-sm font-medium text-white/90">{stat.label}</div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-24 bg-gradient-to-br from-white via-orange-50/30 to-purple-50/30 relative overflow-hidden">
        <div className="absolute top-1/2 left-0 w-[500px] h-[500px] bg-teal-400/15 rounded-full blur-[150px] -translate-y-1/2" />
        <div className="absolute bottom-0 right-0 w-[400px] h-[400px] bg-purple-400/15 rounded-full blur-[120px]" />
        <div className="absolute top-0 right-1/4 w-[300px] h-[300px] bg-pink-400/10 rounded-full blur-[100px]" />
        
        <div className="max-w-7xl mx-auto px-6 relative">
          <div className="text-center mb-16">
            <span className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-gradient-to-r from-purple-200 via-pink-100 to-orange-100 border-2 border-purple-300 text-purple-700 text-sm font-bold uppercase tracking-wider mb-4">
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
            {services.map((service, index) => {
              const colors = [
                { bg: 'from-orange-500 to-rose-500', light: 'from-orange-100 to-rose-100', text: 'text-orange-600', border: 'border-orange-300', shadow: 'shadow-orange-500/30' },
                { bg: 'from-teal-500 to-cyan-500', light: 'from-teal-100 to-cyan-100', text: 'text-teal-600', border: 'border-teal-300', shadow: 'shadow-teal-500/30' },
                { bg: 'from-purple-500 to-pink-500', light: 'from-purple-100 to-pink-100', text: 'text-purple-600', border: 'border-purple-300', shadow: 'shadow-purple-500/30' },
              ][index];
              return (
                <div 
                  key={index} 
                  className={`group bg-white border-2 ${colors.border} rounded-3xl p-8 transition-all duration-500 hover:shadow-2xl hover:-translate-y-3 relative overflow-hidden`}
                >
                  <div className={`absolute top-0 right-0 w-40 h-40 bg-gradient-to-br ${colors.light} rounded-full blur-3xl opacity-50 group-hover:opacity-100 transition-opacity duration-500`} />
                  
                  <div className={`w-18 h-18 rounded-2xl bg-gradient-to-br ${colors.bg} text-white flex items-center justify-center mb-6 shadow-lg group-hover:scale-110 group-hover:${colors.shadow} transition-all duration-300`}>
                    <service.icon size={36} />
                  </div>
                  <h3 className="text-xl font-black text-gray-900 mb-4">{service.title}</h3>
                  <p className="text-gray-600 leading-relaxed mb-6">{service.description}</p>
                  <div className={`flex items-center ${colors.text} font-bold group-hover:gap-4 transition-all`}>
                    <span>Mehr erfahren</span>
                    <ArrowRight size={18} className="ml-2 transition-transform group-hover:translate-x-2" />
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Industries Section */}
      <section className="py-24 bg-gradient-to-br from-teal-100/50 via-cyan-50/30 to-purple-50/40 relative overflow-hidden">
        <div className="absolute top-1/2 right-0 w-[600px] h-[600px] bg-teal-400/20 rounded-full blur-[150px] -translate-y-1/2" />
        <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-purple-400/15 rounded-full blur-[120px]" />
        
        <div className="max-w-7xl mx-auto px-6 relative">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <span className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-gradient-to-r from-amber-100 to-orange-100 border border-amber-200 text-amber-600 text-sm font-semibold uppercase tracking-wider mb-4">
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
                {industries.map((industry, index) => {
                  const colors = ['bg-orange-100 text-orange-500 border-orange-200', 'bg-teal-100 text-teal-500 border-teal-200', 'bg-amber-100 text-amber-500 border-amber-200', 'bg-rose-100 text-rose-500 border-rose-200'][index];
                  return (
                    <div 
                      key={index}
                      className="flex items-center justify-between p-5 bg-white border-2 border-gray-100 rounded-xl hover:border-orange-300 hover:shadow-lg transition-all group cursor-pointer"
                    >
                      <div className="flex items-center gap-4">
                        <div className={`w-12 h-12 rounded-xl ${colors.split(' ').slice(0, 2).join(' ')} flex items-center justify-center group-hover:scale-110 transition-all`}>
                          <industry.icon size={24} />
                        </div>
                        <span className="font-semibold text-gray-900">{industry.name}</span>
                      </div>
                      <span className="text-sm bg-orange-100 text-orange-600 px-3 py-1 rounded-full font-bold">{industry.jobs}</span>
                    </div>
                  );
                })}
              </div>

              <Link 
                to="/jobs" 
                className="mt-8 inline-flex items-center gap-2 bg-gradient-to-r from-orange-500 to-amber-500 text-white px-6 py-3 rounded-xl font-bold hover:shadow-lg transition-all"
              >
                Alle Jobs ansehen <ArrowRight size={18} />
              </Link>
            </div>

            <div className="relative">
              <div className="aspect-square rounded-3xl bg-gradient-to-br from-orange-500 via-rose-500 to-purple-600 p-8 flex items-center justify-center relative overflow-hidden shadow-2xl">
                {/* Animated background */}
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_30%,rgba(255,255,255,0.4),transparent_50%)]" />
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_70%,rgba(255,255,255,0.3),transparent_50%)]" />
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(255,200,0,0.2),transparent_60%)]" />
                
                <div className="text-center relative z-10">
                  <Zap className="w-28 h-28 text-yellow-300 mx-auto mb-6 drop-shadow-lg animate-pulse" />
                  <p className="text-6xl font-black text-white mb-2 drop-shadow-lg">365+</p>
                  <p className="text-2xl font-bold text-white/95">offene Stellen</p>
                  <p className="text-sm text-white/80 mt-2">in der Region Pforzheim</p>
                </div>
              </div>
              
              {/* Floating badges */}
              <div className="absolute -top-4 -right-4 px-5 py-2.5 bg-gradient-to-r from-teal-500 to-cyan-500 rounded-full shadow-lg animate-bounce">
                <span className="text-sm font-bold text-white">Produktion</span>
              </div>
              <div className="absolute -bottom-4 -left-4 px-5 py-2.5 bg-gradient-to-r from-amber-500 to-orange-500 rounded-full shadow-lg">
                <span className="text-sm font-bold text-white">Logistik</span>
              </div>
              <div className="absolute top-1/2 -right-6 px-5 py-2.5 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full shadow-lg">
                <span className="text-sm font-bold text-white">Handwerk</span>
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
            <div className="group bg-gradient-to-br from-orange-50 to-amber-50 border-2 border-orange-200 rounded-3xl p-10 relative overflow-hidden hover:border-orange-400 transition-all duration-500 hover:shadow-2xl">
              <div className="absolute top-0 right-0 w-48 h-48 bg-orange-400/20 rounded-full blur-3xl transition-all group-hover:bg-orange-400/30" />
              <div className="w-16 h-16 bg-gradient-to-br from-orange-500 to-amber-500 rounded-2xl flex items-center justify-center mb-6 shadow-lg">
                <Building2 className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-2xl font-black text-gray-900 mb-4">Für Unternehmen</h3>
              <p className="text-gray-600 mb-6 leading-relaxed">
                Sie suchen qualifizierte Mitarbeiter für Produktion, Logistik oder Handwerk? 
                Wir liefern Ihnen schnell und zuverlässig die passenden Fachkräfte.
              </p>
              <ul className="space-y-3 mb-8">
                <li className="flex items-center gap-3 text-gray-700">
                  <CheckCircle2 className="w-5 h-5 text-orange-500 shrink-0" />
                  <span>Schnelle Personalvermittlung innerhalb 24h</span>
                </li>
                <li className="flex items-center gap-3 text-gray-700">
                  <CheckCircle2 className="w-5 h-5 text-orange-500 shrink-0" />
                  <span>Flexible Einsatzzeiten und Vertragsmodelle</span>
                </li>
                <li className="flex items-center gap-3 text-gray-700">
                  <CheckCircle2 className="w-5 h-5 text-orange-500 shrink-0" />
                  <span>Persönliche Betreuung vor Ort</span>
                </li>
              </ul>
              <Link 
                to="/unternehmen" 
                className="inline-flex items-center gap-2 bg-gradient-to-r from-orange-500 to-amber-500 text-white px-6 py-3 rounded-xl font-bold hover:shadow-lg transition-all"
              >
                Personal anfragen <ArrowRight size={18} />
              </Link>
            </div>

            {/* For Applicants */}
            <div className="group bg-gradient-to-br from-teal-50 to-cyan-50 border-2 border-teal-200 rounded-3xl p-10 relative overflow-hidden hover:border-teal-400 transition-all duration-500 hover:shadow-2xl">
              <div className="absolute top-0 right-0 w-48 h-48 bg-teal-400/20 rounded-full blur-3xl transition-all group-hover:bg-teal-400/30" />
              <div className="w-16 h-16 bg-gradient-to-br from-teal-500 to-cyan-500 rounded-2xl flex items-center justify-center mb-6 shadow-lg">
                <Users className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-2xl font-black text-gray-900 mb-4">Für Bewerber</h3>
              <p className="text-gray-600 mb-6 leading-relaxed">
                Auf der Suche nach einem neuen Job in Pforzheim oder Umgebung? 
                Wir helfen Ihnen, Ihren Traumjob zu finden - kostenlos und persönlich.
              </p>
              <ul className="space-y-3 mb-8">
                <li className="flex items-center gap-3 text-gray-700">
                  <CheckCircle2 className="w-5 h-5 text-teal-500 shrink-0" />
                  <span>Über 365 aktuelle Jobangebote</span>
                </li>
                <li className="flex items-center gap-3 text-gray-700">
                  <CheckCircle2 className="w-5 h-5 text-teal-500 shrink-0" />
                  <span>Faire Bezahlung nach Tarif</span>
                </li>
                <li className="flex items-center gap-3 text-gray-700">
                  <CheckCircle2 className="w-5 h-5 text-teal-500 shrink-0" />
                  <span>Persönliche Karriereberatung</span>
                </li>
              </ul>
              <Link 
                to="/jobs" 
                className="inline-flex items-center gap-2 bg-gradient-to-r from-teal-500 to-cyan-500 text-white px-6 py-3 rounded-xl font-bold hover:shadow-lg transition-all"
              >
                Jobs entdecken <ArrowRight size={18} />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Reviews Section */}
      <section className="py-24 bg-gradient-to-br from-rose-50 via-orange-50 to-amber-50 relative overflow-hidden">
        <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-rose-400/10 rounded-full blur-[150px]" />
        <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-amber-400/10 rounded-full blur-[120px]" />
        
        <div className="max-w-7xl mx-auto px-6 relative">
          <div className="text-center mb-16">
            <span className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-gradient-to-r from-rose-100 to-pink-100 border border-rose-200 text-rose-600 text-sm font-semibold uppercase tracking-wider mb-4">
              Bewertungen
            </span>
            <h2 className="text-3xl md:text-5xl font-black text-gray-900 mt-4 mb-6">
              Was unsere <span className="text-gradient-flame">Partner</span> sagen
            </h2>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {reviews.map((review, index) => {
              const colors = ['from-orange-500 to-amber-500', 'from-teal-500 to-cyan-500', 'from-rose-500 to-pink-500'][index];
              const borderColors = ['border-orange-200 hover:border-orange-400', 'border-teal-200 hover:border-teal-400', 'border-rose-200 hover:border-rose-400'][index];
              const starColors = ['text-orange-500 fill-orange-500', 'text-teal-500 fill-teal-500', 'text-rose-500 fill-rose-500'][index];
              return (
                <div key={index} className={`bg-white border-2 ${borderColors} rounded-3xl p-8 relative transition-all hover:shadow-xl hover:-translate-y-1`}>
                  <div className={`absolute top-0 right-8 w-1 h-16 bg-gradient-to-b ${colors} rounded-full`} />
                  <Quote className="w-10 h-10 text-gray-200 absolute top-6 right-6" />
                  <div className="flex gap-1 mb-4">
                    {[...Array(review.rating)].map((_, i) => (
                      <Star key={i} className={`w-5 h-5 ${starColors}`} />
                    ))}
                  </div>
                  <p className="text-gray-600 mb-6 leading-relaxed">{review.text}</p>
                  <div>
                    <p className="font-bold text-gray-900">{review.author}</p>
                    <p className="text-sm text-gray-500">{review.role}</p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Location Section */}
      <section className="py-24 bg-gradient-to-br from-cyan-50 via-teal-50 to-white relative overflow-hidden">
        <div className="absolute top-1/2 right-0 w-[500px] h-[500px] bg-teal-400/10 rounded-full blur-[150px] -translate-y-1/2" />
        
        <div className="max-w-7xl mx-auto px-6 relative">
          <div className="text-center mb-16">
            <span className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-gradient-to-r from-cyan-100 to-teal-100 border border-cyan-200 text-teal-600 text-sm font-semibold uppercase tracking-wider mb-4">
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
            <div className="text-center p-8 bg-gradient-to-br from-orange-50 to-amber-50 border-2 border-orange-200 rounded-3xl hover:border-orange-400 hover:shadow-xl transition-all group">
              <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-orange-500 to-amber-500 text-white flex items-center justify-center mx-auto mb-4 shadow-lg group-hover:scale-110 transition-all">
                <MapPin size={32} />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">Pforzheim</h3>
              <p className="text-orange-600 font-medium">Hauptstandort</p>
            </div>
            <div className="text-center p-8 bg-gradient-to-br from-teal-50 to-cyan-50 border-2 border-teal-200 rounded-3xl hover:border-teal-400 hover:shadow-xl transition-all group">
              <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-teal-500 to-cyan-500 text-white flex items-center justify-center mx-auto mb-4 shadow-lg group-hover:scale-110 transition-all">
                <TrendingUp size={32} />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">Enzkreis</h3>
              <p className="text-teal-600 font-medium">Einzugsgebiet</p>
            </div>
            <div className="text-center p-8 bg-gradient-to-br from-rose-50 to-pink-50 border-2 border-rose-200 rounded-3xl hover:border-rose-400 hover:shadow-xl transition-all group">
              <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-rose-500 to-pink-500 text-white flex items-center justify-center mx-auto mb-4 shadow-lg group-hover:scale-110 transition-all">
                <Building2 size={32} />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">Baden-Württemberg</h3>
              <p className="text-rose-600 font-medium">Aktiv in der Region</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-gradient-to-r from-slate-900 via-purple-900 to-slate-900 relative overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute top-0 left-1/4 w-[500px] h-[500px] bg-orange-500/30 rounded-full blur-[150px]" />
          <div className="absolute bottom-0 right-1/4 w-[400px] h-[400px] bg-pink-500/25 rounded-full blur-[120px]" />
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-purple-500/20 rounded-full blur-[150px]" />
          <div className="absolute top-1/3 right-1/3 w-[300px] h-[300px] bg-cyan-500/15 rounded-full blur-[100px]" />
        </div>
        <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.03)_1px,transparent_1px)] bg-[size:64px_64px]" />
        
        <div className="max-w-4xl mx-auto px-6 text-center relative">
          <div className="w-24 h-24 bg-gradient-to-br from-orange-500 via-rose-500 to-purple-500 rounded-3xl flex items-center justify-center mx-auto mb-8 shadow-2xl shadow-orange-500/40 animate-pulse">
            <Flame className="w-12 h-12 text-white" />
          </div>
          <h2 className="text-3xl md:text-5xl font-black text-white mb-6">
            Bereit durchzustarten?
          </h2>
          <p className="text-lg text-slate-300 mb-10 max-w-2xl mx-auto">
            Ob Sie Personal suchen oder einen neuen Job - wir sind für Sie da. 
            Kontaktieren Sie uns noch heute für ein unverbindliches Gespräch.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link 
              to="/kontakt" 
              className="group relative overflow-hidden bg-gradient-to-r from-orange-500 via-rose-500 to-purple-500 text-white px-10 py-5 rounded-2xl font-bold transition-all duration-300 hover:shadow-[0_8px_40px_rgba(255,107,0,0.5)] hover:scale-105 inline-flex items-center justify-center gap-2"
            >
              <span className="relative z-10">Jetzt Kontakt aufnehmen</span>
              <ArrowRight size={20} className="relative z-10 group-hover:translate-x-1 transition-transform" />
            </Link>
            <a 
              href="tel:072316039493" 
              className="px-10 py-5 bg-gradient-to-r from-teal-500 to-cyan-500 rounded-2xl text-white font-bold hover:shadow-[0_8px_40px_rgba(20,168,157,0.4)] hover:scale-105 transition-all inline-flex items-center justify-center gap-2"
            >
              07231 60 39 493
            </a>
          </div>
        </div>
      </section>
    </>
  );
};
