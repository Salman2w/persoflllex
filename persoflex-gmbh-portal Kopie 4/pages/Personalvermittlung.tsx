import { Link } from 'react-router-dom';
import { 
  Users, 
  CheckCircle2, 
  ArrowRight, 
  Target, 
  Search, 
  UserCheck, 
  Building2,
  Sparkles,
  Clock,
  Phone,
  Award,
  FileSearch,
  Handshake,
  BadgeCheck
} from 'lucide-react';
import { SEO } from '../components/SEO';

export function Personalvermittlung() {
  return (
    <main className="min-h-screen bg-white">
      <SEO 
        title="Personalvermittlung Pforzheim | Direktvermittlung | PersoFlex GmbH"
        description="Personalvermittlung in Pforzheim & Enzkreis: Wir finden die passenden Fachkräfte für Ihre Festanstellung – schnell, diskret und erfolgsorientiert."
        keywords="Personalvermittlung Pforzheim, Direktvermittlung Enzkreis, Fachkräftevermittlung, Festanstellung, Recruiting"
        canonicalUrl="https://www.persoflex-gmbh.de/personalvermittlung"
      />
      {/* Hero Section */}
      <section className="relative pt-32 pb-20 overflow-hidden">
        {/* Background Image */}
        <div className="absolute inset-0">
          <img 
            src="/bilder/vermittlung-desk.jpg" 
            alt="Personalvermittlung" 
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-gray-900/95 via-gray-900/80 to-gray-900/60" />
        </div>
        
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-20 right-20 w-72 h-72 bg-orange-500 rounded-full blur-3xl" />
          <div className="absolute bottom-10 left-10 w-96 h-96 bg-orange-400 rounded-full blur-3xl" />
        </div>
        
        <div className="max-w-7xl mx-auto px-6 relative z-10">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-orange-500/20 text-orange-400 text-sm font-semibold mb-6">
                <Users size={16} />
                Direkte Festanstellung
              </span>
              
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-black text-white mb-6 leading-tight">
                Personal-<br />
                <span className="text-orange-500">vermittlung</span>
              </h1>
              
              <p className="text-xl text-gray-300 mb-8 leading-relaxed">
                Wir finden den perfekten Match für Ihre offenen Stellen. Qualifizierte Fachkräfte 
                direkt in Festanstellung - ohne Umwege, ohne Kompromisse.
              </p>
              
              <div className="flex flex-wrap gap-4">
                <Link 
                  to="/personal-anfrage"
                  className="inline-flex items-center gap-2 bg-orange-500 hover:bg-orange-600 text-white px-8 py-4 rounded-lg font-semibold transition-all"
                >
                  Fachkräfte finden <ArrowRight size={18} />
                </Link>
                <Link 
                  to="/jobs"
                  className="inline-flex items-center gap-2 border-2 border-white/30 text-white hover:bg-white/10 px-8 py-4 rounded-lg font-semibold transition-all"
                >
                  Aktuelle Jobs ansehen
                </Link>
              </div>
            </div>
            
            <div className="hidden lg:block">
              <div className="bg-white/10 backdrop-blur-sm border border-white/20 rounded-2xl p-8">
                <h3 className="text-white font-bold text-xl mb-6">Unser Vermittlungsprozess</h3>
                <div className="space-y-4">
                  {[
                    { icon: FileSearch, text: 'Anforderungsprofil erstellen' },
                    { icon: Search, text: 'Gezielte Kandidatensuche' },
                    { icon: UserCheck, text: 'Vorauswahl & Interviews' },
                    { icon: Handshake, text: 'Erfolgreiche Vermittlung' },
                  ].map((item, idx) => (
                    <div key={idx} className="flex items-center gap-4 text-white/80">
                      <div className="w-10 h-10 rounded-lg bg-orange-500/30 flex items-center justify-center">
                        <item.icon size={20} className="text-orange-400" />
                      </div>
                      <span>{item.text}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Was ist Personalvermittlung */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-black text-gray-900 mb-6">
                Was ist <span className="text-orange-500">Personalvermittlung</span>?
              </h2>
              <p className="text-gray-600 text-lg leading-relaxed mb-6">
                Bei der Personalvermittlung suchen wir in Ihrem Auftrag nach dem idealen Kandidaten 
                für Ihre offene Stelle. Der Arbeitsvertrag kommt direkt zwischen Ihnen und dem 
                Bewerber zustande - wir sind der Vermittler, nicht der Arbeitgeber.
              </p>
              <p className="text-gray-600 text-lg leading-relaxed mb-8">
                Im Gegensatz zur Arbeitnehmerueberlassung wird der Kandidat sofort Teil Ihres Teams. 
                Sie profitieren von unserem Netzwerk und unserer Expertise im Recruiting, ohne 
                selbst Zeit und Ressourcen investieren zu muessen.
              </p>
              
              <div className="space-y-4">
                {[
                  'Direkte Festanstellung bei Ihnen',
                  'Keine laufenden Kosten nach Vermittlung',
                  'Zugang zu unserem Kandidatenpool',
                  'Erfolgsbasierte Verguetung'
                ].map((item, idx) => (
                  <div key={idx} className="flex items-center gap-3">
                    <CheckCircle2 className="w-5 h-5 text-orange-500 flex-shrink-0" />
                    <span className="text-gray-700">{item}</span>
                  </div>
                ))}
              </div>
            </div>
            
            <div className="grid grid-cols-2 gap-4">
              {[
                { icon: Target, title: 'Praezise', desc: 'Gezielte Suche nach Ihren Anforderungen' },
                { icon: Clock, title: 'Schnell', desc: 'Verkuerzte Time-to-Hire durch unser Netzwerk' },
                { icon: BadgeCheck, title: 'Geprueft', desc: 'Vorqualifizierte Kandidaten mit Referenzen' },
                { icon: Sparkles, title: 'Passgenau', desc: 'Cultural Fit und Fachkompetenz im Fokus' },
              ].map((item, idx) => (
                <div key={idx} className="bg-gray-50 border border-gray-200 rounded-xl p-6 hover:border-orange-300 transition-all">
                  <item.icon className="w-10 h-10 text-orange-500 mb-4" />
                  <h3 className="font-bold text-gray-900 mb-2">{item.title}</h3>
                  <p className="text-gray-600 text-sm">{item.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Fuer Unternehmen und Bewerber */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-12">
            {/* Fuer Unternehmen */}
            <div className="bg-white border border-gray-200 rounded-2xl p-10">
              <div className="w-14 h-14 rounded-xl bg-orange-100 flex items-center justify-center mb-6">
                <Building2 className="w-7 h-7 text-orange-500" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Fuer Unternehmen</h3>
              <p className="text-gray-600 mb-8">
                Sie suchen qualifizierte Fachkraefte fuer eine Festanstellung? 
                Wir uebernehmen den gesamten Recruiting-Prozess fuer Sie.
              </p>
              
              <ul className="space-y-4 mb-8">
                {[
                  'Entlastung Ihrer HR-Abteilung',
                  'Zugang zu passiven Kandidaten',
                  'Professionelle Vorauswahl',
                  'Garantie bei Kuendigung in Probezeit'
                ].map((item, idx) => (
                  <li key={idx} className="flex items-center gap-3">
                    <CheckCircle2 className="w-5 h-5 text-orange-500 flex-shrink-0" />
                    <span className="text-gray-700">{item}</span>
                  </li>
                ))}
              </ul>
              
              <Link 
                to="/personal-anfrage"
                className="inline-flex items-center gap-2 bg-orange-500 hover:bg-orange-600 text-white px-6 py-3 rounded-lg font-semibold transition-all"
              >
                Personal anfragen <ArrowRight size={18} />
              </Link>
            </div>

            {/* Fuer Bewerber */}
            <div className="bg-white border border-gray-200 rounded-2xl p-10">
              <div className="w-14 h-14 rounded-xl bg-orange-100 flex items-center justify-center mb-6">
                <UserCheck className="w-7 h-7 text-orange-500" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Fuer Bewerber</h3>
              <p className="text-gray-600 mb-8">
                Sie suchen eine Festanstellung? Wir kennen die besten Arbeitgeber 
                der Region und vermitteln Sie direkt.
              </p>
              
              <ul className="space-y-4 mb-8">
                {[
                  'Kostenlose Vermittlung fuer Bewerber',
                  'Zugang zu versteckten Stellen',
                  'Persoenliche Karriereberatung',
                  'Unterstuetzung im Bewerbungsprozess'
                ].map((item, idx) => (
                  <li key={idx} className="flex items-center gap-3">
                    <CheckCircle2 className="w-5 h-5 text-orange-500 flex-shrink-0" />
                    <span className="text-gray-700">{item}</span>
                  </li>
                ))}
              </ul>
              
              <Link 
                to="/jobs"
                className="inline-flex items-center gap-2 border-2 border-orange-500 text-orange-500 hover:bg-orange-50 px-6 py-3 rounded-lg font-semibold transition-all"
              >
                Jobs entdecken <ArrowRight size={18} />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Ablauf */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-black text-gray-900 mb-4">
              Unser <span className="text-orange-500">Vermittlungsprozess</span>
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Strukturiert, transparent und erfolgsorientiert
            </p>
          </div>
          
          <div className="grid md:grid-cols-4 gap-8">
            {[
              { 
                step: '01', 
                title: 'Anforderungsanalyse', 
                desc: 'Wir besprechen Ihre Anforderungen, die Unternehmenskultur und das Stellenprofil im Detail.' 
              },
              { 
                step: '02', 
                title: 'Kandidatensuche', 
                desc: 'Aktive Suche in unserem Netzwerk, Datenbanken und ueber gezielte Ansprache.' 
              },
              { 
                step: '03', 
                title: 'Vorauswahl', 
                desc: 'Interviews, Referenzpruefung und Praequalifizierung der besten Kandidaten.' 
              },
              { 
                step: '04', 
                title: 'Vermittlung', 
                desc: 'Vorstellung bei Ihnen, Begleitung im Prozess bis zur erfolgreichen Einstellung.' 
              },
            ].map((item, idx) => (
              <div key={idx} className="relative">
                <div className="text-6xl font-black text-orange-100 mb-4">{item.step}</div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">{item.title}</h3>
                <p className="text-gray-600">{item.desc}</p>
                {idx < 3 && (
                  <ArrowRight className="hidden md:block absolute top-8 -right-4 w-8 h-8 text-orange-300" />
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-br from-orange-500 to-orange-600">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h2 className="text-3xl md:text-4xl font-black text-white mb-6">
            Finden Sie die perfekten Mitarbeiter
          </h2>
          <p className="text-white/90 text-lg mb-8 max-w-2xl mx-auto">
            Lassen Sie uns ueber Ihren Personalbedarf sprechen. 
            Wir finden die Fachkraefte, die zu Ihrem Unternehmen passen.
          </p>
          <div className="flex flex-wrap gap-4 justify-center">
            <Link 
              to="/personal-anfrage"
              className="inline-flex items-center gap-2 bg-white text-orange-500 hover:bg-gray-100 px-8 py-4 rounded-lg font-semibold transition-all"
            >
              Jetzt anfragen <ArrowRight size={18} />
            </Link>
            <a 
              href="tel:+4972311545010"
              className="inline-flex items-center gap-2 border-2 border-white text-white hover:bg-white/10 px-8 py-4 rounded-lg font-semibold transition-all"
            >
              <Phone size={18} /> 07231 154 50 10
            </a>
          </div>
        </div>
      </section>
    </main>
  );
}

export default Personalvermittlung;
