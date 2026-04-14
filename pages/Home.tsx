import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Briefcase, Users, CheckCircle, Star, Quote, Factory, Truck, ShieldCheck, MapPin, Clock, Search, UserCheck, Package, Wrench, FileText, Award } from 'lucide-react';
import { NavLink } from 'react-router-dom';
import { SEO } from '../components/SEO';

const fadeIn = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0 }
};

// Data for Reviews
const REVIEWS = [
  {
    type: 'B2B',
    author: 'Markus W.',
    role: 'Logistikleiter, Pforzheim',
    text: 'Endlich mal eine Zeitarbeitsfirma, die wirklich zuhört. Die Reaktionszeiten sind top und die Mitarbeiter motiviert.',
    rating: 5
  },
  {
    type: 'B2B',
    author: 'Julia S.',
    role: 'HR Managerin, Enzkreis',
    text: 'Sehr angenehme, frische Zusammenarbeit. Man merkt, dass hier ein neues Team am Werk ist, das sich wirklich bemüht.',
    rating: 5
  },
  {
    type: 'B2C',
    author: 'Ali K.',
    role: 'Staplerfahrer',
    text: 'Habe schnell einen Job bekommen. Das Team ist jung, nett und kümmert sich.',
    rating: 5
  },
  {
    type: 'B2C',
    author: 'Sabine M.',
    role: 'Produktionshelferin',
    text: 'Fühle mich hier sehr gut aufgehoben. Alles wird genau erklärt und man ist nicht nur eine Nummer.',
    rating: 5
  }
];

// Schema.org Structured Data
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
  return (
    <div className="flex flex-col min-h-screen">
      <SEO 
        title="PersoFlex GmbH | Zeitarbeit & Personalvermittlung in Pforzheim"
        description="PersoFlex GmbH - Wir bringen frischen Wind in die Zeitarbeit. Ihr neuer, motivierter Partner für Jobs und Personal in Pforzheim & Enzkreis."
      />
      
      <script type="application/ld+json">
        {JSON.stringify(structuredData)}
      </script>

      {/* Split Screen Hero */}
      <section className="flex flex-col lg:flex-row min-h-[calc(100vh-80px)] mt-[80px]">
        {/* LEFT SIDE: B2B */}
        <motion.div 
          initial="hidden"
          animate="visible"
          transition={{ duration: 0.6 }}
          variants={fadeIn}
          className="flex-1 bg-white text-brand-black p-6 sm:p-10 lg:p-20 flex flex-col justify-center relative overflow-hidden group min-h-[50vh] lg:min-h-auto"
        >
          <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(#e5e7eb_1px,transparent_1px)] [background-size:16px_16px] opacity-30"></div>
          <div className="relative z-10 max-w-lg mx-auto lg:mx-0 lg:mr-10 text-center lg:text-left">
            <span className="inline-block py-1 px-3 border border-brand-black text-xs font-bold uppercase tracking-widest mb-4 sm:mb-6 rounded-sm">
              Für Unternehmen
            </span>
            <h1 className="text-2xl sm:text-4xl md:text-5xl lg:text-6xl font-black mb-4 sm:mb-6 leading-tight tracking-tight hyphens-none">
              Personalvermittlung<br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-orange to-amber-500">
                & Zeitarbeit
              </span><br />
              in Pforzheim.
            </h1>
            <p className="text-gray-600 text-base sm:text-lg mb-6 sm:mb-8 leading-relaxed">
              Wir sind angetreten, um Zeitarbeit besser zu machen. Persönlicher, schneller und fairer. 
              Finden Sie mit uns motivierte Fachkräfte für Industrie, Logistik, das Büro und hochqualifizierte Positionen.
            </p>
            <ul className="mb-8 space-y-3 inline-block text-left">
              <li className="flex items-center gap-3 font-medium text-brand-dark">
                <CheckCircle className="text-brand-orange shrink-0" size={20} /> 
                <span>Persönliche Betreuung</span>
              </li>
              <li className="flex items-center gap-3 font-medium text-brand-dark">
                <CheckCircle className="text-brand-orange shrink-0" size={20} /> 
                <span>Rechtssichere AÜG-Verträge</span>
              </li>
              <li className="flex items-center gap-3 font-medium text-brand-dark">
                <CheckCircle className="text-brand-orange shrink-0" size={20} /> 
                <span>Branchenübergreifende Auswahl</span>
              </li>
            </ul>
            <div className="block">
              <NavLink to="/unternehmen" className="inline-flex items-center gap-3 bg-brand-black text-white px-6 py-4 sm:px-8 sm:py-4 text-base sm:text-lg font-bold hover:bg-brand-orange transition-colors rounded-sm shadow-xl w-full sm:w-auto justify-center">
                Personal anfragen <ArrowRight size={20} />
              </NavLink>
            </div>
          </div>
        </motion.div>

        {/* RIGHT SIDE: B2C */}
        <motion.div 
          initial="hidden"
          animate="visible"
          transition={{ duration: 0.6, delay: 0.2 }}
          variants={fadeIn}
          className="flex-1 bg-brand-black text-white p-6 sm:p-10 lg:p-20 flex flex-col justify-center relative overflow-hidden min-h-[50vh] lg:min-h-auto"
        >
          <div className="absolute -right-20 -top-20 w-64 h-64 sm:w-96 sm:h-96 bg-brand-orange opacity-10 blur-[100px] rounded-full"></div>
          <div className="relative z-10 max-w-lg mx-auto lg:mx-0 lg:ml-10 text-center lg:text-left">
             <span className="inline-block py-1 px-3 bg-brand-orange/20 text-brand-orange border border-brand-orange text-xs font-bold uppercase tracking-widest mb-4 sm:mb-6 rounded-sm">
              Für Bewerber
            </span>
            <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-black mb-4 sm:mb-6 leading-tight tracking-tight break-words">
              Dein neuer<br/>
              Job in <br/>
              <span className="text-brand-orange">Pforzheim & Umgebung.</span>
            </h2>
            <p className="text-gray-400 text-base sm:text-lg mb-6 sm:mb-8 leading-relaxed">
              Lust auf was Neues? Wir auch! Starte mit uns durch in Logistik, Industrie, Verwaltung oder Technik. 
              Wir bieten dir faire Bezahlung, echte Chancen und ein Team, das für dich da ist.
            </p>
            <ul className="mb-8 space-y-3 inline-block text-left">
              <li className="flex items-center gap-3 font-medium text-white">
                <CheckCircle className="text-brand-orange shrink-0" size={20} /> 
                <span>30 Tage Urlaub</span>
              </li>
              <li className="flex items-center gap-3 font-medium text-white">
                <CheckCircle className="text-brand-orange shrink-0" size={20} /> 
                <span>50€ Tankgutschein</span>
              </li>
              <li className="flex items-center gap-3 font-medium text-white">
                <CheckCircle className="text-brand-orange shrink-0" size={20} /> 
                <span>GVP-Tarifvertrag</span>
              </li>
            </ul>
            <div className="block">
              <NavLink to="/fuer-bewerber" className="inline-flex items-center gap-3 bg-brand-orange text-white px-6 py-4 sm:px-8 sm:py-4 text-base sm:text-lg font-bold hover:bg-white hover:text-brand-black transition-colors rounded-sm shadow-xl shadow-brand-orange/20 w-full sm:w-auto justify-center">
                Mehr für Bewerber <Briefcase size={20} />
              </NavLink>
            </div>
          </div>
        </motion.div>
      </section>

      {/* Trust Section (Redesigned: Premium Dark Bar) */}
      <section className="bg-gray-900 text-white py-16 relative overflow-hidden">
        {/* Hintergrundelemte für Dynamik */}
        <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-brand-orange via-orange-400 to-gray-900"></div>
        <div className="absolute -bottom-20 -left-20 w-64 h-64 bg-brand-orange opacity-5 rounded-full blur-3xl"></div>
        <div className="absolute -top-20 -right-20 w-64 h-64 bg-blue-500 opacity-5 rounded-full blur-3xl"></div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 relative z-10">
          <div className="flex flex-col lg:flex-row items-center justify-between gap-12 lg:gap-8">
            
            {/* Linker Text-Teil */}
            <div className="lg:w-1/3 text-center lg:text-left">
              <span className="text-brand-orange font-bold uppercase tracking-widest text-xs mb-2 block">
                Qualität & Sicherheit
              </span>
              <h2 className="text-3xl font-black mb-4 leading-tight">
                Ein Partner auf <br className="hidden lg:block" /> Augenhöhe.
              </h2>
              <p className="text-gray-400 text-sm leading-relaxed max-w-md mx-auto lg:mx-0">
                Wir arbeiten nach klaren Standards. Für unsere Kunden bedeutet das Planungssicherheit – für unsere Mitarbeiter faire Bedingungen.
              </p>
            </div>

            {/* Rechter Icon-Teil (Grid) */}
            <div className="lg:w-2/3 w-full">
              <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
                
                {/* Item 1 */}
                <div className="flex flex-col items-center justify-center p-4 group cursor-default">
                  <div className="w-16 h-16 rounded-2xl bg-gray-800 border border-gray-700 flex items-center justify-center mb-4 group-hover:border-brand-orange group-hover:bg-gray-800/80 transition-all duration-300 shadow-lg">
                    <Factory size={32} className="text-gray-300 group-hover:text-brand-orange transition-colors" />
                  </div>
                  <span className="font-bold text-white text-lg">Industrie</span>
                  <span className="text-xs text-gray-500 mt-1 uppercase tracking-wide">Produktion</span>
                </div>

                {/* Item 2 */}
                <div className="flex flex-col items-center justify-center p-4 group cursor-default">
                  <div className="w-16 h-16 rounded-2xl bg-gray-800 border border-gray-700 flex items-center justify-center mb-4 group-hover:border-brand-orange group-hover:bg-gray-800/80 transition-all duration-300 shadow-lg">
                    <Truck size={32} className="text-gray-300 group-hover:text-brand-orange transition-colors" />
                  </div>
                  <span className="font-bold text-white text-lg">Logistik</span>
                  <span className="text-xs text-gray-500 mt-1 uppercase tracking-wide">Transport</span>
                </div>

                {/* Item 3 */}
                <div className="flex flex-col items-center justify-center p-4 group cursor-default">
                  <div className="w-16 h-16 rounded-2xl bg-gray-800 border border-gray-700 flex items-center justify-center mb-4 group-hover:border-brand-orange group-hover:bg-gray-800/80 transition-all duration-300 shadow-lg">
                    <Briefcase size={32} className="text-gray-300 group-hover:text-brand-orange transition-colors" />
                  </div>
                  <span className="font-bold text-white text-lg">Büro</span>
                  <span className="text-xs text-gray-500 mt-1 uppercase tracking-wide">Kaufmännisch</span>
                </div>

                {/* Item 4 */}
                <div className="flex flex-col items-center justify-center p-4 group cursor-default">
                  <div className="w-16 h-16 rounded-2xl bg-gray-800 border border-gray-700 flex items-center justify-center mb-4 group-hover:border-green-500 group-hover:bg-gray-800/80 transition-all duration-300 shadow-lg relative">
                    <ShieldCheck size={32} className="text-gray-300 group-hover:text-green-500 transition-colors" />
                    {/* Kleiner Indikator */}
                    <div className="absolute top-0 right-0 w-3 h-3 bg-green-500 rounded-full border-2 border-gray-800"></div>
                  </div>
                  <span className="font-bold text-white text-lg">GVP</span>
                  <span className="text-xs text-gray-500 mt-1 uppercase tracking-wide">Tarifvertrag</span>
                </div>

              </div>
            </div>

          </div>
        </div>
      </section>

     {/* --- SEKTION: KOMPETENZFELDER (Unified Premium Dark) --- */}
      <section className="py-20 sm:py-24 bg-gray-50 relative overflow-hidden">
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 relative z-10">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="inline-block py-1 px-3 rounded-full bg-white border border-gray-200 text-brand-orange text-xs font-bold uppercase tracking-widest mb-4 shadow-sm">
              Unsere Expertise
            </span>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-brand-black mb-6">
              Vier Bereiche. <span className="text-brand-orange">Ein Standard.</span>
            </h2>
            <p className="text-lg text-gray-600 leading-relaxed">
              Egal ob Blaumann oder Anzug – wir arbeiten in jedem Bereich mit derselben Sorgfalt und Qualität.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            
            {/* Card 1: Logistik */}
            <div className="group bg-brand-black p-8 rounded-2xl border border-gray-800 shadow-xl hover:shadow-2xl hover:-translate-y-2 transition-all duration-300 flex flex-col h-full relative overflow-hidden">
              {/* Einheitlicher Hover-Effekt: Orange Glow */}
              <div className="absolute top-0 right-0 w-32 h-32 bg-brand-orange opacity-0 group-hover:opacity-10 rounded-bl-full -mr-8 -mt-8 transition-all duration-500"></div>
              
              <div className="w-14 h-14 bg-gray-900 text-brand-orange rounded-xl flex items-center justify-center mb-6 border border-gray-800 group-hover:border-brand-orange group-hover:bg-brand-orange group-hover:text-white transition-all duration-300 relative z-10">
                <Package size={28} />
              </div>
              
              <h3 className="text-xl font-bold text-white mb-3 relative z-10">
                Lager & Logistik
              </h3>
              <p className="text-gray-400 text-sm mb-6 flex-grow relative z-10 leading-relaxed">
                Das Herz der Wirtschaft. Wir besetzen Stellen in den großen Logistikzentren der Region Pforzheim.
              </p>
              
              <div className="flex flex-wrap gap-2 mt-auto relative z-10">
                <span className="px-2 py-1 bg-gray-800/50 text-gray-400 text-xs rounded border border-gray-700">Staplerfahrer</span>
                <span className="px-2 py-1 bg-gray-800/50 text-gray-400 text-xs rounded border border-gray-700">Kommissionierung</span>
              </div>
            </div>

            {/* Card 2: Industrie */}
            <div className="group bg-brand-black p-8 rounded-2xl border border-gray-800 shadow-xl hover:shadow-2xl hover:-translate-y-2 transition-all duration-300 flex flex-col h-full relative overflow-hidden">
              <div className="absolute top-0 right-0 w-32 h-32 bg-brand-orange opacity-0 group-hover:opacity-10 rounded-bl-full -mr-8 -mt-8 transition-all duration-500"></div>
              
              <div className="w-14 h-14 bg-gray-900 text-brand-orange rounded-xl flex items-center justify-center mb-6 border border-gray-800 group-hover:border-brand-orange group-hover:bg-brand-orange group-hover:text-white transition-all duration-300 relative z-10">
                <Wrench size={28} />
              </div>
              
              <h3 className="text-xl font-bold text-white mb-3 relative z-10">
                Industrie & Handwerk
              </h3>
              <p className="text-gray-400 text-sm mb-6 flex-grow relative z-10 leading-relaxed">
                Macher gesucht. Unterstützung für die starke Metall- und Elektroindustrie im Nordschwarzwald.
              </p>
              
              <div className="flex flex-wrap gap-2 mt-auto relative z-10">
                <span className="px-2 py-1 bg-gray-800/50 text-gray-400 text-xs rounded border border-gray-700">Maschinenführer</span>
                <span className="px-2 py-1 bg-gray-800/50 text-gray-400 text-xs rounded border border-gray-700">Produktion</span>
              </div>
            </div>

            {/* Card 3: Kaufmännisch */}
            <div className="group bg-brand-black p-8 rounded-2xl border border-gray-800 shadow-xl hover:shadow-2xl hover:-translate-y-2 transition-all duration-300 flex flex-col h-full relative overflow-hidden">
              <div className="absolute top-0 right-0 w-32 h-32 bg-brand-orange opacity-0 group-hover:opacity-10 rounded-bl-full -mr-8 -mt-8 transition-all duration-500"></div>
              
              <div className="w-14 h-14 bg-gray-900 text-brand-orange rounded-xl flex items-center justify-center mb-6 border border-gray-800 group-hover:border-brand-orange group-hover:bg-brand-orange group-hover:text-white transition-all duration-300 relative z-10">
                <FileText size={28} />
              </div>
              
              <h3 className="text-xl font-bold text-white mb-3 relative z-10">
                Office & Verwaltung
              </h3>
              <p className="text-gray-400 text-sm mb-6 flex-grow relative z-10 leading-relaxed">
                Organisationstalente. Kompetentes Personal für Assistenz, Vertrieb und Sachbearbeitung.
              </p>
              
              <div className="flex flex-wrap gap-2 mt-auto relative z-10">
                <span className="px-2 py-1 bg-gray-800/50 text-gray-400 text-xs rounded border border-gray-700">Sachbearbeitung</span>
                <span className="px-2 py-1 bg-gray-800/50 text-gray-400 text-xs rounded border border-gray-700">Empfang</span>
              </div>
            </div>

            {/* Card 4: Experts */}
            <div className="group bg-brand-black p-8 rounded-2xl border border-gray-800 shadow-xl hover:shadow-2xl hover:-translate-y-2 transition-all duration-300 flex flex-col h-full relative overflow-hidden">
              <div className="absolute top-0 right-0 w-32 h-32 bg-brand-orange opacity-0 group-hover:opacity-10 rounded-bl-full -mr-8 -mt-8 transition-all duration-500"></div>
              
              <div className="w-14 h-14 bg-gray-900 text-brand-orange rounded-xl flex items-center justify-center mb-6 border border-gray-800 group-hover:border-brand-orange group-hover:bg-brand-orange group-hover:text-white transition-all duration-300 relative z-10">
                <Award size={28} />
              </div>
              
              <h3 className="text-xl font-bold text-white mb-3 relative z-10">
                Experts & Führung
              </h3>
              <p className="text-gray-400 text-sm mb-6 flex-grow relative z-10 leading-relaxed">
                Next Level. Wir vermitteln hochqualifizierte Spezialisten für anspruchsvolle Projekte.
              </p>
              
              <div className="flex flex-wrap gap-2 mt-auto relative z-10">
                <span className="px-2 py-1 bg-gray-800/50 text-gray-400 text-xs rounded border border-gray-700">Ingenieure</span>
                <span className="px-2 py-1 bg-gray-800/50 text-gray-400 text-xs rounded border border-gray-700">Meister</span>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* --- SEKTION: ÜBER UNS & REGION (Modern & Clean) --- */}
      <section className="py-20 sm:py-24 bg-white relative overflow-hidden">
        {/* Dezentes Hintergrund-Muster (Punkte) */}
        <div className="absolute inset-0 opacity-[0.03]" style={{ backgroundImage: 'radial-gradient(#000 1px, transparent 1px)', backgroundSize: '32px 32px' }}></div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            
            {/* Linke Seite: Story */}
            <div>
              <span className="text-brand-orange font-bold uppercase tracking-widest text-xs mb-2 block">
                Über PersoFlex
              </span>
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-brand-black mb-6 leading-tight">
                Personal neu gedacht.<br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-orange to-orange-400">
                  Direkt in Pforzheim.
                </span>
              </h2>
              
              <div className="space-y-6 text-lg text-gray-600 leading-relaxed">
                <p>
                  Zeitarbeit hat ein Update verdient. Wir sind nicht der typische Konzern, sondern Ihr <strong>lokaler Partner</strong> im Nordschwarzwald. Schnell, ehrlich und ohne unnötige Bürokratie.
                </p>
                <p>
                  Unser Ziel: Unternehmen und Talente so zusammenzubringen, dass es für beide Seiten passt. Egal ob <strong>gewerblich, kaufmännisch oder hochqualifiziert</strong> – wir kennen den Markt vor der Haustür.
                </p>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mt-10">
                <div className="flex items-start">
                  <div className="bg-orange-50 p-3 rounded-lg mr-4 text-brand-orange shrink-0">
                    <Search size={24} />
                  </div>
                  <div>
                    <h4 className="font-bold text-brand-black">Gezielte Suche</h4>
                    <p className="text-sm text-gray-500 mt-1">Keine Karteileichen. Wir finden Leute, die wirklich wollen.</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <div className="bg-orange-50 p-3 rounded-lg mr-4 text-brand-orange shrink-0">
                    <UserCheck size={24} />
                  </div>
                  <div>
                    <h4 className="font-bold text-brand-black">Faire Deals</h4>
                    <p className="text-sm text-gray-500 mt-1">Tarifliche Bezahlung und Respekt sind unser Standard.</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Rechte Seite: Region / Orte (Als modernes Grid, keine Box mehr) */}
            <div className="relative">
              {/* Deko-Element */}
              <div className="absolute -top-10 -right-10 w-40 h-40 bg-gray-100 rounded-full blur-3xl -z-10"></div>
              
              <div className="bg-gray-50 border border-gray-100 p-8 rounded-2xl shadow-sm">
                <div className="flex items-center gap-3 mb-6">
                  <div className="bg-brand-black text-white p-2 rounded-md">
                    <MapPin size={20} />
                  </div>
                  <h3 className="text-xl font-bold text-brand-black">Hier sind wir aktiv</h3>
                </div>
                
                <p className="text-gray-600 mb-8 text-sm">
                  Kurze Wege sind uns wichtig. Unser Fokus liegt auf der starken Wirtschaftsregion Nordschwarzwald:
                </p>

                {/* Modernes Grid statt Liste */}
                <div className="flex flex-wrap gap-2">
                  {[
                    'Pforzheim', 'Enzkreis', 'Mühlacker', 
                    'Keltern', 'Birkenfeld', 'Königsbach-Stein', 
                    'Niefern-Öschelbronn', 'Remchingen', 'Karlsruhe', 'Stuttgart'
                  ].map((city) => (
                    <span 
                      key={city} 
                      className="inline-flex items-center px-4 py-2 bg-white border border-gray-200 rounded-full text-sm font-medium text-gray-700 hover:border-brand-orange hover:text-brand-orange transition-colors cursor-default shadow-sm"
                    >
                      {city}
                    </span>
                  ))}
                </div>

                <div className="mt-8 p-4 bg-white rounded-lg border border-gray-100 flex gap-4 items-center">
                  <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse shrink-0"></div>
                  <p className="text-xs text-gray-500 font-medium">
                    Durch unsere lokale Nähe können wir oft innerhalb von 24h reagieren.
                  </p>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* Reviews Section */}
      <section className="bg-brand-dark text-white py-16 sm:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="text-center mb-12 sm:mb-16">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-black mb-4">Das sagen unsere Partner</h2>
            <p className="text-gray-400 text-sm sm:text-base">Erstes Feedback von Unternehmen und Mitarbeitern aus der Region.</p>
          </div>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20">
            <div className="space-y-8">
               <div className="flex items-center gap-4 mb-6">
                 <div className="bg-white p-2 rounded text-brand-black"><Briefcase size={20} /></div>
                 <h3 className="text-xl sm:text-2xl font-bold">Stimmen von Unternehmen</h3>
               </div>
               {REVIEWS.filter(r => r.type === 'B2B').map((review, idx) => (
                 <motion.div 
                    key={idx}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ delay: idx * 0.2 }}
                    viewport={{ once: true }}
                    className="bg-brand-gray/50 p-6 sm:p-8 rounded-lg border border-white/5 relative hover:border-brand-orange/50 transition-colors"
                 >
                   <Quote className="absolute top-6 right-6 text-brand-orange/20" size={32} />
                   <div className="flex gap-1 text-brand-orange mb-4">
                     {[...Array(review.rating)].map((_, i) => <Star key={i} size={16} fill="currentColor" />)}
                   </div>
                   <p className="text-gray-300 italic mb-6 leading-relaxed text-sm sm:text-base">"{review.text}"</p>
                   <div>
                     <span className="block font-bold text-white">{review.author}</span>
                     <span className="text-xs sm:text-sm text-brand-orange uppercase tracking-wider font-bold">{review.role}</span>
                   </div>
                 </motion.div>
               ))}
            </div>
            <div className="space-y-8">
               <div className="flex items-center gap-4 mb-6">
                 <div className="bg-brand-orange p-2 rounded text-white"><Users size={20} /></div>
                 <h3 className="text-xl sm:text-2xl font-bold">Stimmen von Bewerbern</h3>
               </div>
               {REVIEWS.filter(r => r.type === 'B2C').map((review, idx) => (
                 <motion.div 
                    key={idx}
                    initial={{ opacity: 0, x: 20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ delay: idx * 0.2 }}
                    viewport={{ once: true }}
                    className="bg-brand-gray/50 p-6 sm:p-8 rounded-lg border border-white/5 relative hover:border-brand-orange/50 transition-colors"
                 >
                   <Quote className="absolute top-6 right-6 text-brand-orange/20" size={32} />
                   <div className="flex gap-1 text-brand-orange mb-4">
                     {[...Array(review.rating)].map((_, i) => <Star key={i} size={16} fill="currentColor" />)}
                   </div>
                   <p className="text-gray-300 italic mb-6 leading-relaxed text-sm sm:text-base">"{review.text}"</p>
                   <div>
                     <span className="block font-bold text-white">{review.author}</span>
                     <span className="text-xs sm:text-sm text-gray-400 uppercase tracking-wider">{review.role}</span>
                   </div>
                 </motion.div>
               ))}
            </div>
          </div>
        </div>
      </section>

      {/* Map Section */}
      <section className="bg-gray-100 w-full">
        <div className="flex flex-col lg:flex-row min-h-[550px]">
          
          {/* Linke Seite: Infos */}
          <div className="w-full lg:w-1/3 bg-white p-10 lg:p-16 flex flex-col justify-center border-r border-gray-200 z-10 shadow-xl lg:shadow-none">
            <span className="text-brand-orange font-bold uppercase tracking-widest text-xs mb-3 block">
              Anfahrt
            </span>
            <h2 className="text-3xl font-black mb-6 text-brand-black">Hier finden Sie uns.</h2>
            
            <div className="space-y-6 text-gray-600 mb-8">
              <div className="flex items-start gap-4">
                <div className="bg-gray-50 p-2 rounded-full">
                  <MapPin className="text-brand-orange" size={24} />
                </div>
                <div>
                  <strong className="block text-brand-black text-lg mb-1">PersoFlex GmbH</strong>
                  <p className="text-base leading-relaxed">
                    Kiehnlestraße 4<br/>
                    75172 Pforzheim
                  </p>
                </div>
              </div>
              
              <div className="flex items-start gap-4">
                <div className="bg-gray-50 p-2 rounded-full">
                  <Clock className="text-brand-orange" size={24} />
                </div>
                <div>
                  <strong className="block text-brand-black text-lg mb-1">Öffnungszeiten</strong>
                  <p className="text-base">
                    Mo - Fr: 08:00 - 17:00 Uhr
                  </p>
                </div>
              </div>
            </div>

            <a 
              href="https://maps.google.com/?cid=444259936772408734&g_mp=Cidnb29nbGUubWFwcy5wbGFjZXMudjEuUGxhY2VzLlNlYXJjaFRleHQ" 
              target="_blank" 
              rel="noopener noreferrer"
              className="inline-flex items-center gap-3 bg-brand-black text-white px-8 py-4 font-bold hover:bg-brand-orange transition-colors rounded-sm w-full sm:w-auto justify-center shadow-lg"
            >
              Route planen <ArrowRight size={20} />
            </a>
          </div>

          {/* Rechte Seite: Karte */}
          <div className="w-full lg:w-2/3 relative min-h-[400px]">
            <iframe 
              width="100%" 
              height="100%" 
              frameBorder="0" 
              scrolling="no" 
              loading="lazy" 
              marginHeight={0} 
              marginWidth={0} 
              src="https://maps.google.com/maps?width=100%25&height=600&hl=de&q=PersoFlex%20GmbH%20Kiehnlestra%C3%9Fe%204%2075172%20Pforzheim&t=&z=15&ie=UTF8&iwloc=B&output=embed"
              className="absolute inset-0 w-full h-full grayscale-0"
              title="Standort PersoFlex GmbH Pforzheim"
            ></iframe>
          </div>

        </div>
      </section>

    </div>
  );
};