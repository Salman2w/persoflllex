import { Link } from 'react-router-dom';
import { 
  Shield, 
  CheckCircle2, 
  ArrowRight, 
  Lightbulb, 
  TrendingUp, 
  Users, 
  Target,
  BarChart3,
  Puzzle,
  Phone,
  MessageSquare,
  Cog,
  BookOpen,
  Compass
} from 'lucide-react';

export function Personalberatung() {
  return (
    <main className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="relative pt-32 pb-20 overflow-hidden">
        {/* Background Image */}
        <div className="absolute inset-0">
          <img 
            src="/bilder/beratung-strategie.jpg" 
            alt="Personalberatung" 
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-gray-900/95 via-gray-900/80 to-gray-900/60" />
        </div>
        
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-10 left-20 w-72 h-72 bg-orange-500 rounded-full blur-3xl" />
          <div className="absolute bottom-20 right-20 w-96 h-96 bg-orange-400 rounded-full blur-3xl" />
        </div>
        
        <div className="max-w-7xl mx-auto px-6 relative z-10">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-orange-500/20 text-orange-400 text-sm font-semibold mb-6">
                <Shield size={16} />
                Strategische HR-Unterstützung
              </span>
              
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-black text-white mb-6 leading-tight">
                Personal-<br />
                <span className="text-orange-500">beratung</span>
              </h1>
              
              <p className="text-xl text-gray-300 mb-8 leading-relaxed">
                Strategische HR-Beratung und Unterstützung bei der Personalplanung 
                für nachhaltigen Unternehmenserfolg. Von der Analyse bis zur Umsetzung.
              </p>
              
              <div className="flex flex-wrap gap-4">
                <Link 
                  to="/kontakt"
                  className="inline-flex items-center gap-2 bg-orange-500 hover:bg-orange-600 text-white px-8 py-4 rounded-lg font-semibold transition-all"
                >
                  Beratung anfragen <ArrowRight size={18} />
                </Link>
                <a 
                  href="tel:+4972311545010"
                  className="inline-flex items-center gap-2 border-2 border-white/30 text-white hover:bg-white/10 px-8 py-4 rounded-lg font-semibold transition-all"
                >
                  <Phone size={18} /> Jetzt anrufen
                </a>
              </div>
            </div>
            
            <div className="hidden lg:grid grid-cols-2 gap-4">
              {[
                { icon: Lightbulb, label: 'Strategieentwicklung' },
                { icon: BarChart3, label: 'Bedarfsanalyse' },
                { icon: Puzzle, label: 'Prozessoptimierung' },
                { icon: Compass, label: 'Karriereberatung' },
              ].map((item, idx) => (
                <div key={idx} className="bg-white/10 backdrop-blur-sm border border-white/20 rounded-xl p-6 flex items-center gap-4">
                  <item.icon className="w-8 h-8 text-orange-400" />
                  <span className="text-white font-medium">{item.label}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Was ist Personalberatung */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-black text-gray-900 mb-6">
                Was ist <span className="text-orange-500">Personalberatung</span>?
              </h2>
              <p className="text-gray-600 text-lg leading-relaxed mb-6">
                Personalberatung geht über die reine Vermittlung hinaus. Wir analysieren 
                Ihre Personalsituation, entwickeln Strategien für Ihr Recruiting und 
                unterstützen Sie bei der Optimierung Ihrer HR-Prozesse.
              </p>
              <p className="text-gray-600 text-lg leading-relaxed mb-8">
                Als regionaler Partner kennen wir den Arbeitsmarkt in Pforzheim und dem 
                Enzkreis wie unsere Westentasche. Dieses Wissen nutzen wir, um Ihnen 
                maßgeschneiderte Lösungen für Ihre Personalherausforderungen zu bieten.
              </p>
              
              <div className="space-y-4">
                {[
                  'Individuelle Beratung fuer Ihr Unternehmen',
                  'Regionale Marktkenntnis',
                  'Ganzheitlicher HR-Ansatz',
                  'Langfristige Partnerschaft'
                ].map((item, idx) => (
                  <div key={idx} className="flex items-center gap-3">
                    <CheckCircle2 className="w-5 h-5 text-orange-500 flex-shrink-0" />
                    <span className="text-gray-700">{item}</span>
                  </div>
                ))}
              </div>
            </div>
            
            <div className="bg-gradient-to-br from-orange-50 to-orange-100 rounded-2xl p-10">
              <h3 className="text-xl font-bold text-gray-900 mb-6">Unser Beratungsansatz</h3>
              <div className="space-y-6">
                {[
                  { icon: MessageSquare, title: 'Zuhoeren', desc: 'Wir verstehen Ihre Situation und Ziele' },
                  { icon: BarChart3, title: 'Analysieren', desc: 'Datenbasierte Bewertung Ihrer Personalsituation' },
                  { icon: Lightbulb, title: 'Beraten', desc: 'Entwicklung individueller Loesungsstrategien' },
                  { icon: Cog, title: 'Umsetzen', desc: 'Begleitung bei der Implementierung' },
                ].map((item, idx) => (
                  <div key={idx} className="flex gap-4 bg-white rounded-lg p-4">
                    <item.icon className="w-8 h-8 text-orange-500 flex-shrink-0" />
                    <div>
                      <h4 className="font-semibold text-gray-900">{item.title}</h4>
                      <p className="text-gray-600 text-sm">{item.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Leistungsbereiche */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-black text-gray-900 mb-4">
              Unsere <span className="text-orange-500">Beratungsleistungen</span>
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Umfassende Unterstuetzung fuer alle HR-Herausforderungen
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              { 
                icon: Target, 
                title: 'Personalbedarfsplanung', 
                desc: 'Analyse Ihres aktuellen und zukuenftigen Personalbedarfs. Entwicklung von Strategien zur optimalen Besetzung.' 
              },
              { 
                icon: TrendingUp, 
                title: 'Recruiting-Strategie', 
                desc: 'Optimierung Ihrer Recruiting-Prozesse. Von der Stellenausschreibung bis zum Onboarding.' 
              },
              { 
                icon: Users, 
                title: 'Employer Branding', 
                desc: 'Positionierung als attraktiver Arbeitgeber in der Region Pforzheim und Enzkreis.' 
              },
              { 
                icon: BarChart3, 
                title: 'Arbeitsmarktanalyse', 
                desc: 'Detaillierte Informationen zum regionalen Arbeitsmarkt, Gehaltsbenchmarks und Trends.' 
              },
              { 
                icon: BookOpen, 
                title: 'HR-Prozessberatung', 
                desc: 'Optimierung Ihrer internen HR-Prozesse fuer mehr Effizienz und bessere Ergebnisse.' 
              },
              { 
                icon: Compass, 
                title: 'Karriereberatung', 
                desc: 'Individuelle Beratung fuer Fach- und Fuehrungskraefte bei der beruflichen Neuorientierung.' 
              },
            ].map((service, idx) => (
              <div key={idx} className="bg-white border border-gray-200 rounded-xl p-8 hover:border-orange-300 hover:shadow-lg transition-all">
                <service.icon className="w-12 h-12 text-orange-500 mb-4" />
                <h3 className="text-xl font-bold text-gray-900 mb-3">{service.title}</h3>
                <p className="text-gray-600">{service.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Fuer wen */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-black text-gray-900 mb-4">
              Fuer wen ist <span className="text-orange-500">Personalberatung</span>?
            </h2>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            {[
              { 
                title: 'Kleine Unternehmen', 
                desc: 'Ohne eigene HR-Abteilung profitieren Sie von unserer Expertise als externer HR-Partner.',
                points: ['Keine HR-Abteilung notwendig', 'Flexible Unterstuetzung bei Bedarf', 'Kosteneffiziente Loesung']
              },
              { 
                title: 'Mittelstaendische Betriebe', 
                desc: 'Wir ergaenzen Ihre HR-Kapazitaeten bei Spitzenzeiten oder speziellen Projekten.',
                points: ['Entlastung der HR-Abteilung', 'Spezialprojekte begleiten', 'Know-how-Transfer']
              },
              { 
                title: 'Wachstumsunternehmen', 
                desc: 'Bei schnellem Wachstum unterstuetzen wir Sie beim Aufbau Ihrer Personalstruktur.',
                points: ['Skalierbare Loesungen', 'Strukturen aufbauen', 'Wachstum begleiten']
              },
            ].map((item, idx) => (
              <div key={idx} className="bg-gray-50 border border-gray-200 rounded-xl p-8">
                <h3 className="text-xl font-bold text-gray-900 mb-4">{item.title}</h3>
                <p className="text-gray-600 mb-6">{item.desc}</p>
                <ul className="space-y-3">
                  {item.points.map((point, pidx) => (
                    <li key={pidx} className="flex items-center gap-3">
                      <CheckCircle2 className="w-5 h-5 text-orange-500 flex-shrink-0" />
                      <span className="text-gray-700 text-sm">{point}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-br from-orange-500 to-orange-600">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h2 className="text-3xl md:text-4xl font-black text-white mb-6">
            Lassen Sie uns ueber Ihre HR-Herausforderungen sprechen
          </h2>
          <p className="text-white/90 text-lg mb-8 max-w-2xl mx-auto">
            In einem unverbindlichen Erstgespraech analysieren wir gemeinsam Ihre Situation 
            und entwickeln erste Loesungsansaetze.
          </p>
          <div className="flex flex-wrap gap-4 justify-center">
            <Link 
              to="/kontakt"
              className="inline-flex items-center gap-2 bg-white text-orange-500 hover:bg-gray-100 px-8 py-4 rounded-lg font-semibold transition-all"
            >
              Beratung anfragen <ArrowRight size={18} />
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

export default Personalberatung;
