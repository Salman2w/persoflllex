import React from 'react';
import { NavLink, Link } from 'react-router-dom';
import { 
  MapPin, 
  Target, 
  Heart, 
  Zap, 
  ArrowRight, 
  Mail, 
  Phone, 
  Flame,
  Shield,
  Users,
  Award,
  CheckCircle2,
  Building2,
  Handshake,
  Clock,
  Star
} from 'lucide-react';
import { SEO } from '../components/SEO';
import { ObfuscatedEmail } from '../components/ObfuscatedEmail';

const TEAM_MEMBERS = [
  {
    name: "Arina Karakus",
    role: "Geschäftsführung",
    email: "info@persoflex-gmbh.de",
    phone: "07231 60 39 493",
    imageSrc: "/bilder/arina_karakus.webp",
    bio: "Leitung und strategische Ausrichtung des Unternehmens"
  },
  {
    name: "Salman Karakus",
    role: "Geschäftsleitung",
    email: "salman.karakus@persoflex-gmbh.de",
    phone: "07231 60 39 493",
    imageSrc: "/bilder/salman_karakus.webp",
    bio: "Operative Führung und Kundenbetreuung"
  },
  {
    name: "Samira Kampen",
    role: "Recruiting & HR",
    email: "samira.vkampen@persoflex-gmbh.de",
    phone: "07231 60 39 493",
    imageSrc: "/bilder/samira_van_kampen.webp",
    bio: "Bewerberbetreuung und Personalauswahl"
  }
];

const VALUES = [
  {
    icon: Target,
    title: "Präzision",
    description: "Wir schicken Ihnen nicht 'irgendjemanden'. Wir prüfen Skills, Erfahrung und Persönlichkeit genau, bevor wir Vorschläge machen. Qualität vor Quantität."
  },
  {
    icon: Heart,
    title: "Menschlichkeit",
    description: "Hinter jedem Lebenslauf steckt ein Mensch. Wir behandeln Bewerber mit Respekt, zahlen pünktlich und kommunizieren auf Augenhöhe."
  },
  {
    icon: Zap,
    title: "Geschwindigkeit",
    description: "Zeit ist Geld. Unsere Prozesse sind digital und schlank, damit Sie schnellstmöglich die Unterstützung bekommen, die Sie brauchen."
  },
  {
    icon: Shield,
    title: "Zuverlässigkeit",
    description: "Was wir zusagen, halten wir ein. Verbindliche Kommunikation und transparente Prozesse sind für uns selbstverständlich."
  },
  {
    icon: Handshake,
    title: "Partnerschaft",
    description: "Wir verstehen uns als langfristiger Partner, nicht als einmaliger Dienstleister. Ihr Erfolg ist unser Erfolg."
  },
  {
    icon: Star,
    title: "Qualität",
    description: "Wir setzen auf gut ausgebildete, motivierte Mitarbeiter und investieren in deren Weiterbildung für Ihren Einsatzerfolg."
  }
];

const MILESTONES = [
  {
    title: "Gründung",
    description: "PersoFlex wird in Pforzheim gegründet mit dem Ziel, den regionalen Arbeitsmarkt zu verbessern."
  },
  {
    title: "AÜG-Erlaubnis",
    description: "Erhalt der offiziellen Erlaubnis zur Arbeitnehmerüberlassung durch die Bundesagentur für Arbeit."
  },
  {
    title: "GVP-Mitgliedschaft",
    description: "Beitritt zum Gesamtverband der Personaldienstleister für höchste Branchenstandards."
  },
  {
    title: "Expansion",
    description: "Ausbau des Netzwerks auf den gesamten Enzkreis und die Region Baden-Württemberg."
  }
];

export const UeberUns: React.FC = () => {
  return (
    <main className="min-h-screen bg-white pt-[80px]" id="main-content" role="main">
      <SEO 
        title="Über uns | Team & Werte der PersoFlex GmbH Pforzheim"
        description="Das Team der PersoFlex GmbH: regionaler Personaldienstleister in Pforzheim mit Expertise für Zeitarbeit und Personalvermittlung im Enzkreis."
        keywords="PersoFlex Team, Personaldienstleister Pforzheim, Zeitarbeit Unternehmen, Geschäftsführung PersoFlex, GVP Mitglied Enzkreis"
        canonicalUrl="https://www.persoflex-gmbh.de/ueber-uns"
      />
      
      {/* Hero Section */}
      <section className="relative py-24 md:py-32 overflow-hidden">
        {/* Background Image */}
        <div className="absolute inset-0">
          <img 
            src="/bilder/ueberuns-hero.jpg" 
            alt="PersoFlex GmbH - Team und Büro in Pforzheim" 
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
              <span className="inline-flex items-center gap-2 py-2 px-4 bg-orange-500 text-white text-sm font-semibold uppercase tracking-wider mb-6 rounded-full shadow-lg shadow-orange-500/25">
                <Flame size={14} />
                Über PersoFlex
              </span>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-black mb-6 leading-tight text-gray-900">
                Wir verbinden <br/>
                <span className="text-orange-500">Menschen & Visionen.</span>
              </h1>
              <p className="text-xl text-gray-600 mb-8 leading-relaxed">
                Seit unserer Gründung stehen wir für eine moderne, faire und transparente 
                Personaldienstleistung in Pforzheim und dem Enzkreis. Wir sind kein anonymer 
                Großkonzern, sondern Ihr Partner vor Ort.
              </p>
              
              <div className="flex flex-wrap gap-4">
                <Link 
                  to="/kontakt" 
                  className="group inline-flex items-center gap-2 bg-orange-500 hover:bg-orange-600 text-white px-8 py-4 rounded-xl font-semibold transition-all hover:shadow-xl hover:shadow-orange-500/30"
                >
                  Kontakt aufnehmen
                  <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
                </Link>
                <Link 
                  to="/jobs" 
                  className="inline-flex items-center gap-2 border-2 border-gray-200 text-gray-700 px-8 py-4 rounded-xl font-semibold hover:border-orange-300 hover:bg-orange-50 transition-all"
                >
                  Jobs ansehen
                </Link>
              </div>
            </div>

            {/* Trust Badges */}
            <div className="bg-white border-2 border-orange-200 rounded-2xl p-8 shadow-xl">
              <h3 className="text-xl font-bold text-gray-900 mb-6 flex items-center gap-2">
                <Award className="w-6 h-6 text-orange-500" />
                Unsere Qualitätsmerkmale
              </h3>
              <div className="space-y-4">
                <div className="flex items-start gap-4 p-4 bg-gray-50 rounded-xl">
                  <div className="w-10 h-10 bg-orange-500 rounded-lg flex items-center justify-center flex-shrink-0">
                    <Shield className="w-5 h-5 text-white" />
                  </div>
                  <div>
                    <p className="font-semibold text-gray-900">AÜG-Erlaubnis</p>
                    <p className="text-sm text-gray-600">Offiziell erteilte Erlaubnis zur Arbeitnehmerüberlassung</p>
                  </div>
                </div>
                <div className="flex items-start gap-4 p-4 bg-gray-50 rounded-xl">
                  <div className="w-10 h-10 bg-orange-500 rounded-lg flex items-center justify-center flex-shrink-0">
                    <Users className="w-5 h-5 text-white" />
                  </div>
                  <div>
                    <p className="font-semibold text-gray-900">GVP-Mitglied</p>
                    <p className="text-sm text-gray-600">Mitglied im Gesamtverband der Personaldienstleister</p>
                  </div>
                </div>
                <div className="flex items-start gap-4 p-4 bg-gray-50 rounded-xl">
                  <div className="w-10 h-10 bg-orange-500 rounded-lg flex items-center justify-center flex-shrink-0">
                    <CheckCircle2 className="w-5 h-5 text-white" />
                  </div>
                  <div>
                    <p className="font-semibold text-gray-900">Tarifgebunden</p>
                    <p className="text-sm text-gray-600">Faire Bezahlung nach BAP-Tarifvertrag</p>
                  </div>
                </div>
                <div className="flex items-start gap-4 p-4 bg-gray-50 rounded-xl">
                  <div className="w-10 h-10 bg-orange-500 rounded-lg flex items-center justify-center flex-shrink-0">
                    <MapPin className="w-5 h-5 text-white" />
                  </div>
                  <div>
                    <p className="font-semibold text-gray-900">Regional verwurzelt</p>
                    <p className="text-sm text-gray-600">Starke Präsenz in Pforzheim und Enzkreis</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Mission Section */}
      <section className="py-24 relative bg-white overflow-hidden">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            
            {/* Visual Side */}
            <div className="relative">
              <div className="aspect-[4/3] bg-gray-100 rounded-2xl overflow-hidden relative border border-gray-200 shadow-lg">
                <img 
                  src="/bilder/werte-teamwork.jpg"
                  alt="PersoFlex Büroumgebung - Teamwork und Partnerschaft"
                  className="w-full h-full object-cover"
                  width="800"
                  height="600"
                  loading="lazy"
                />
              </div>
              <div className="absolute -bottom-6 -right-6 bg-orange-500 text-white p-6 rounded-xl shadow-lg max-w-xs">
                <p className="font-bold text-2xl mb-1">100%</p>
                <p className="text-sm text-white/90">Leidenschaft für Pforzheim</p>
              </div>
            </div>

            {/* Text Side */}
            <div>
              <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-orange-100 border border-orange-200 text-orange-600 text-sm font-semibold uppercase tracking-wider mb-4">
                Unsere Mission
              </span>
              <h2 className="text-3xl md:text-4xl font-black text-gray-900 mb-6">
                Mehr als nur <span className="text-orange-500">Personalvermittlung.</span>
              </h2>
              <div className="space-y-6 text-gray-600 text-lg leading-relaxed">
                <p>
                  PersoFlex wurde mit dem Ziel gegründet, den Arbeitsmarkt in der Region Pforzheim 
                  menschlicher und effizienter zu gestalten. Wir glauben daran, dass Zeitarbeit 
                  ein <strong className="text-gray-900">Sprungbrett</strong> ist – keine Sackgasse.
                </p>
                <p>
                  Für Unternehmen sind wir der <strong className="text-gray-900">Problemlöser</strong>, 
                  wenn es brennt. Für Bewerber sind wir der <strong className="text-gray-900">Karriere-Coach</strong>, 
                  der Türen öffnet. Diese Doppelrolle nehmen wir ernst.
                </p>
              </div>
              
              <div className="mt-8 space-y-4">
                <div className="flex items-center gap-4 p-4 bg-gray-50 border border-gray-200 rounded-xl">
                  <div className="w-12 h-12 rounded-xl bg-orange-100 text-orange-500 flex items-center justify-center">
                    <MapPin size={24} />
                  </div>
                  <div>
                    <p className="font-semibold text-gray-900">Stark verwurzelt in Pforzheim & Enzkreis</p>
                    <p className="text-sm text-gray-600">Lokales Netzwerk, regionale Expertise</p>
                  </div>
                </div>
                <div className="flex items-center gap-4 p-4 bg-gray-50 border border-gray-200 rounded-xl">
                  <div className="w-12 h-12 rounded-xl bg-orange-100 text-orange-500 flex items-center justify-center">
                    <Target size={24} />
                  </div>
                  <div>
                    <p className="font-semibold text-gray-900">Präzises Matching statt Massenabfertigung</p>
                    <p className="text-sm text-gray-600">Qualität vor Quantität</p>
                  </div>
                </div>
                <div className="flex items-center gap-4 p-4 bg-gray-50 border border-gray-200 rounded-xl">
                  <div className="w-12 h-12 rounded-xl bg-orange-100 text-orange-500 flex items-center justify-center">
                    <Clock size={24} />
                  </div>
                  <div>
                    <p className="font-semibold text-gray-900">Schnelle Reaktionszeit</p>
                    <p className="text-sm text-gray-600">Anfragen bearbeiten wir zeitnah</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Values Grid */}
      <section className="py-24 relative bg-gray-50 border-y border-gray-200 overflow-hidden">
        <div className="max-w-7xl mx-auto px-6 relative z-10">
          <div className="text-center mb-16">
            <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-orange-100 border border-orange-200 text-orange-600 text-sm font-semibold uppercase tracking-wider mb-4">
              Was uns antreibt
            </span>
            <h2 className="text-3xl md:text-4xl font-black text-gray-900 mb-4">Unsere Werte</h2>
            <p className="text-gray-600 max-w-2xl mx-auto text-lg">
              Diese Grundsätze leiten unser tägliches Handeln und definieren, wer wir als Unternehmen sind.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {VALUES.map((value, idx) => (
              <div
                key={idx}
                className="bg-white p-8 rounded-2xl border border-gray-200 hover:border-orange-300 hover:shadow-lg transition-all group"
              >
                <div className="w-14 h-14 rounded-xl bg-orange-500 flex items-center justify-center mb-6 group-hover:scale-105 transition-transform">
                  <value.icon className="text-white" size={28} />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">{value.title}</h3>
                <p className="text-gray-600 leading-relaxed">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* History / Milestones */}
      <section className="py-24 bg-white relative overflow-hidden">
        {/* Subtle background image */}
        <div className="absolute inset-0 opacity-5">
          <img 
            src="/bilder/meilensteine.jpg" 
            alt="" 
            className="w-full h-full object-cover"
            width={1920}
            height={800}
            loading="lazy"
            decoding="async"
            aria-hidden="true"
          />
        </div>
        <div className="max-w-7xl mx-auto px-6 relative z-10">
          <div className="text-center mb-16">
            <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-orange-100 border border-orange-200 text-orange-600 text-sm font-semibold uppercase tracking-wider mb-4">
              Unsere Geschichte
            </span>
            <h2 className="text-3xl md:text-4xl font-black text-gray-900 mb-4">
              Meilensteine unserer <span className="text-orange-500">Entwicklung</span>
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto text-lg">
              Von der Gründung bis heute – unser Weg zu einem etablierten Personaldienstleister in der Region.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {MILESTONES.map((milestone, idx) => (
              <div key={idx} className="relative">
                <div className="bg-gray-50 border border-gray-200 rounded-2xl p-6 h-full hover:border-orange-300 hover:shadow-lg transition-all">
                  <div className="w-12 h-12 bg-orange-500 text-white rounded-xl flex items-center justify-center mb-4 font-bold text-lg">
                    {idx + 1}
                  </div>
                  <h3 className="text-lg font-bold text-gray-900 mb-2">{milestone.title}</h3>
                  <p className="text-gray-600 text-sm">{milestone.description}</p>
                </div>
                {idx < MILESTONES.length - 1 && (
                  <div className="hidden lg:block absolute top-1/2 -right-4 w-8 h-0.5 bg-orange-300" />
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Regional Focus */}
      <section className="py-24 bg-gray-50 border-y border-gray-200">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-orange-100 border border-orange-200 text-orange-600 text-sm font-semibold uppercase tracking-wider mb-4">
                Regional stark
              </span>
              <h2 className="text-3xl md:text-4xl font-black text-gray-900 mb-6">
                Ihr Partner für <span className="text-orange-500">Pforzheim & Enzkreis</span>
              </h2>
              <div className="space-y-4 text-gray-600 text-lg leading-relaxed mb-8">
                <p>
                  Als <strong className="text-gray-900">Zeitarbeitsfirma Pforzheim</strong> kennen wir den 
                  regionalen Arbeitsmarkt wie unsere Westentasche. Wir wissen, welche Unternehmen 
                  Personal suchen, welche Qualifikationen gefragt sind und wie der Markt sich entwickelt.
                </p>
                <p>
                  Unser Büro in der Pforzheimer Innenstadt ist für Bewerber und Unternehmen 
                  gleichermaßen gut erreichbar. Persönliche Gespräche sind uns wichtig – 
                  deshalb laden wir Sie gerne zu einem Kaffee ein.
                </p>
              </div>
              
              <div className="bg-white border border-gray-200 rounded-2xl p-6">
                <h3 className="font-bold text-gray-900 mb-4 flex items-center gap-2">
                  <Building2 className="w-5 h-5 text-orange-500" />
                  Unsere Einsatzgebiete
                </h3>
                <div className="flex flex-wrap gap-2">
                  {['Pforzheim', 'Mühlacker', 'Birkenfeld', 'Keltern', 'Ispringen', 'Niefern-Öschelbronn', 'Neuenbürg', 'Straubenhardt', 'Königsbach-Stein'].map((city) => (
                    <span key={city} className="px-3 py-1.5 bg-orange-50 border border-orange-200 text-orange-700 rounded-lg text-sm font-medium">
                      {city}
                    </span>
                  ))}
                </div>
              </div>
            </div>

            <div>
              {/* Pforzheim Image */}
              <div className="aspect-video rounded-2xl overflow-hidden mb-6 shadow-lg border border-gray-200">
                <img 
                  src="/bilder/pforzheim-stadt.jpg" 
                  alt="Pforzheim Stadtbild - Standort von PersoFlex GmbH" 
                  className="w-full h-full object-cover"
                  width={1280}
                  height={720}
                  loading="lazy"
                  decoding="async"
                />
              </div>
              
              <div className="bg-white border-2 border-orange-200 rounded-2xl p-8 shadow-lg">
                <h3 className="text-xl font-bold text-gray-900 mb-6">Warum regional?</h3>
                <div className="space-y-4">
                  <div className="flex items-start gap-3">
                    <CheckCircle2 className="w-6 h-6 text-orange-500 flex-shrink-0 mt-0.5" />
                    <div>
                      <p className="font-semibold text-gray-900">Kurze Wege</p>
                      <p className="text-sm text-gray-600">Schnelle Reaktionszeiten und persönliche Betreuung</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <CheckCircle2 className="w-6 h-6 text-orange-500 flex-shrink-0 mt-0.5" />
                    <div>
                      <p className="font-semibold text-gray-900">Lokales Netzwerk</p>
                      <p className="text-sm text-gray-600">Etablierte Kontakte zu Unternehmen der Region</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <CheckCircle2 className="w-6 h-6 text-orange-500 flex-shrink-0 mt-0.5" />
                    <div>
                      <p className="font-semibold text-gray-900">Marktkenntnis</p>
                      <p className="text-sm text-gray-600">Wissen über branchenspezifische Anforderungen</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <CheckCircle2 className="w-6 h-6 text-orange-500 flex-shrink-0 mt-0.5" />
                    <div>
                      <p className="font-semibold text-gray-900">Persönlicher Kontakt</p>
                      <p className="text-sm text-gray-600">Kein anonymes Callcenter, sondern echte Ansprechpartner</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-24 bg-white overflow-hidden">
        <div className="max-w-7xl mx-auto px-6 relative">
          <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-6">
            <div>
              <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-orange-100 border border-orange-200 text-orange-600 text-sm font-semibold uppercase tracking-widest mb-4">
                Das Team
              </span>
              <h2 className="text-3xl md:text-4xl font-black text-gray-900">
                Gesichter hinter <span className="text-orange-500">PersoFlex</span>
              </h2>
            </div>
            <p className="text-gray-600 max-w-md">
              Kompetent, freundlich und immer für Sie erreichbar. 
              Wir freuen uns darauf, Sie kennenzulernen.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {TEAM_MEMBERS.map((member, idx) => (
              <div 
                key={idx}
                className="group relative"
              >
                {/* Image Area */}
                <div className="aspect-[3/4] bg-gray-100 rounded-2xl overflow-hidden relative mb-6 border border-gray-200 hover:border-orange-300 transition-all shadow-md hover:shadow-lg">
                   <img 
                      src={member.imageSrc} 
                      alt={`Portrait von ${member.name} - ${member.role} bei PersoFlex Pforzheim`}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                      width="400"
                      height="500"
                      loading="lazy"
                   />
                  
                  {/* Hover Actions */}
                  <div className="absolute inset-0 bg-gradient-to-t from-gray-900/80 via-gray-900/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end justify-center pb-8 gap-4">
                     <ObfuscatedEmail
                       user={member.email.split('@')[0]}
                       domain={member.email.split('@')[1]}
                       className="bg-orange-500 hover:bg-orange-600 p-3 rounded-lg text-white transition-colors shadow-md inline-flex items-center justify-center"
                     >
                       <Mail size={20} aria-label={`E-Mail an ${member.name} senden`} />
                     </ObfuscatedEmail>
                     <a href={`tel:${member.phone.replace(/\s/g, '')}`} className="bg-orange-500 hover:bg-orange-600 p-3 rounded-lg text-white transition-colors shadow-md" title="Anrufen">
                       <Phone size={20} />
                     </a>
                  </div>
                </div>

                {/* Info */}
                <h3 className="text-xl font-bold text-gray-900">{member.name}</h3>
                <p className="text-orange-500 font-semibold text-sm uppercase tracking-wide mb-2">{member.role}</p>
                <p className="text-sm text-gray-600">{member.bio}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 relative overflow-hidden bg-gray-900">
        <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-[size:48px_48px]" />
        <div className="absolute top-0 left-1/4 w-[400px] h-[400px] bg-orange-500/10 rounded-full blur-[150px]" />
        
        <div className="max-w-4xl mx-auto px-6 text-center relative z-10">
          <h2 className="text-3xl md:text-4xl font-black text-white mb-6">
            Wollen Sie Teil unserer Erfolgsgeschichte werden?
          </h2>
          <p className="text-gray-400 mb-8 max-w-2xl mx-auto text-lg">
            Ob Sie Personal suchen oder einen neuen Job – wir sind für Sie da. 
            Lernen Sie uns kennen.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
             <NavLink 
               to="/kontakt" 
               className="group inline-flex items-center justify-center gap-2 bg-orange-500 hover:bg-orange-600 text-white px-8 py-4 rounded-xl font-semibold hover:shadow-xl hover:shadow-orange-500/30 transition-all"
             >
               Kontakt aufnehmen
               <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
             </NavLink>
             <NavLink 
               to="/jobs" 
               className="inline-flex items-center justify-center gap-2 bg-transparent border-2 border-gray-600 text-white px-8 py-4 rounded-xl font-semibold hover:bg-gray-800 hover:border-gray-500 transition-all"
             >
               Jobs ansehen
             </NavLink>
          </div>
        </div>
      </section>

    </main>
  );
};
