import { Link } from 'react-router-dom';
import { 
  Briefcase, 
  CheckCircle2, 
  ArrowRight, 
  Shield, 
  Clock, 
  Users, 
  Building2,
  FileCheck,
  TrendingUp,
  Phone,
  Award,
  Handshake
} from 'lucide-react';

export function Arbeitnehmerueberlassung() {
  return (
    <main className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="relative pt-32 pb-20 bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-20 left-10 w-72 h-72 bg-orange-500 rounded-full blur-3xl" />
          <div className="absolute bottom-10 right-10 w-96 h-96 bg-orange-400 rounded-full blur-3xl" />
        </div>
        
        <div className="max-w-7xl mx-auto px-6 relative z-10">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-orange-500/20 text-orange-400 text-sm font-semibold mb-6">
                <Briefcase size={16} />
                Unsere Kernkompetenz
              </span>
              
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-black text-white mb-6 leading-tight">
                Arbeitnehmer-<br />
                <span className="text-orange-500">überlassung</span>
              </h1>
              
              <p className="text-xl text-gray-300 mb-8 leading-relaxed">
                Flexible Personallösungen für Ihr Unternehmen. Von kurzfristigen Einsätzen 
                bis zur langfristigen Zusammenarbeit - wir liefern qualifizierte Mitarbeiter 
                genau dann, wenn Sie sie brauchen.
              </p>
              
              <div className="flex flex-wrap gap-4">
                <Link 
                  to="/personal-anfrage"
                  className="inline-flex items-center gap-2 bg-orange-500 hover:bg-orange-600 text-white px-8 py-4 rounded-lg font-semibold transition-all"
                >
                  Personal anfragen <ArrowRight size={18} />
                </Link>
                <Link 
                  to="/kontakt"
                  className="inline-flex items-center gap-2 border-2 border-white/30 text-white hover:bg-white/10 px-8 py-4 rounded-lg font-semibold transition-all"
                >
                  Beratung vereinbaren
                </Link>
              </div>
            </div>
            
            <div className="hidden lg:grid grid-cols-2 gap-4">
              {[
                { icon: Shield, label: 'GVP Mitglied', value: 'Zertifiziert' },
                { icon: FileCheck, label: 'AÜG Erlaubnis', value: 'Vollständig' },
                { icon: Users, label: 'Mitarbeiter', value: 'Im Einsatz' },
                { icon: Building2, label: 'Kundenunternehmen', value: 'Vertrauen uns' },
              ].map((stat, idx) => (
                <div key={idx} className="bg-white/10 backdrop-blur-sm border border-white/20 rounded-xl p-6">
                  <stat.icon className="w-8 h-8 text-orange-400 mb-3" />
                  <p className="text-white font-bold text-lg">{stat.value}</p>
                  <p className="text-gray-400 text-sm">{stat.label}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Was ist Arbeitnehmerueberlassung */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-black text-gray-900 mb-6">
                Was ist <span className="text-orange-500">Arbeitnehmerüberlassung</span>?
              </h2>
              <p className="text-gray-600 text-lg leading-relaxed mb-6">
                Bei der Arbeitnehmerüberlassung (auch Zeitarbeit oder Leiharbeit genannt) stellen 
                wir Ihnen qualifizierte Mitarbeiter zur Verfügung, die bei uns angestellt sind, 
                aber in Ihrem Unternehmen arbeiten.
              </p>
              <p className="text-gray-600 text-lg leading-relaxed mb-8">
                Sie profitieren von der Flexibilität, Personal bedarfsgerecht einzusetzen, 
                während wir uns um alle administrativen Aufgaben kümmern - von der Lohnabrechnung 
                bis zur Sozialversicherung.
              </p>
              
              <div className="space-y-4">
                {[
                  'Rechtlich abgesichert nach AÜG',
                  'Tarifgebundene Vergütung (GVP)',
                  'Volle Sozialversicherung für Mitarbeiter',
                  'Flexible Einsatzdauer'
                ].map((item, idx) => (
                  <div key={idx} className="flex items-center gap-3">
                    <CheckCircle2 className="w-5 h-5 text-orange-500 flex-shrink-0" />
                    <span className="text-gray-700">{item}</span>
                  </div>
                ))}
              </div>
            </div>
            
            <div className="bg-gray-50 rounded-2xl p-8 border border-gray-200">
              <h3 className="text-xl font-bold text-gray-900 mb-6">So funktioniert es:</h3>
              <div className="space-y-6">
                {[
                  { step: '1', title: 'Anfrage', desc: 'Sie teilen uns Ihren Personalbedarf mit' },
                  { step: '2', title: 'Auswahl', desc: 'Wir finden passende Kandidaten aus unserem Pool' },
                  { step: '3', title: 'Einsatz', desc: 'Der Mitarbeiter arbeitet in Ihrem Unternehmen' },
                  { step: '4', title: 'Betreuung', desc: 'Wir kuemmern uns um Administration und Abrechnung' },
                ].map((item, idx) => (
                  <div key={idx} className="flex gap-4">
                    <div className="w-10 h-10 rounded-full bg-orange-500 text-white flex items-center justify-center font-bold flex-shrink-0">
                      {item.step}
                    </div>
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

      {/* Vorteile fuer Unternehmen */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-black text-gray-900 mb-4">
              Vorteile fuer <span className="text-orange-500">Unternehmen</span>
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Arbeitnehmerueberlassung bietet Ihnen maximale Flexibilitaet bei minimalem Risiko
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              { 
                icon: Clock, 
                title: 'Schnelle Verfuegbarkeit', 
                desc: 'Kurzfristig qualifiziertes Personal, wenn Sie es brauchen - oft innerhalb weniger Tage' 
              },
              { 
                icon: TrendingUp, 
                title: 'Kosteneffizienz', 
                desc: 'Keine Recruiting-Kosten, keine Lohnnebenkosten - Sie zahlen nur fuer die geleistete Arbeit' 
              },
              { 
                icon: Shield, 
                title: 'Rechtssicherheit', 
                desc: 'Wir tragen das Arbeitgeberrisiko und kuemmern uns um alle rechtlichen Anforderungen' 
              },
              { 
                icon: Users, 
                title: 'Flexibilitaet', 
                desc: 'Personal bei Auftragsspitzen aufstocken oder bei Rueckgang reduzieren' 
              },
              { 
                icon: Award, 
                title: 'Qualitaet', 
                desc: 'Vorausgewaehlte, qualifizierte Mitarbeiter mit geprueften Referenzen' 
              },
              { 
                icon: Handshake, 
                title: 'Uebernahmeoption', 
                desc: 'Bewaehrte Mitarbeiter koennen Sie in Festanstellung uebernehmen' 
              },
            ].map((benefit, idx) => (
              <div key={idx} className="bg-white border border-gray-200 rounded-xl p-8 hover:border-orange-300 hover:shadow-lg transition-all">
                <benefit.icon className="w-12 h-12 text-orange-500 mb-4" />
                <h3 className="text-xl font-bold text-gray-900 mb-3">{benefit.title}</h3>
                <p className="text-gray-600">{benefit.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Branchen */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-black text-gray-900 mb-4">
              Unsere <span className="text-orange-500">Einsatzbereiche</span>
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Wir vermitteln Fachkraefte in verschiedenen Branchen der Region Pforzheim und Enzkreis
            </p>
          </div>
          
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {[
              'Produktion & Fertigung',
              'Logistik & Lager',
              'Metallverarbeitung',
              'Maschinenbau',
              'Elektrotechnik',
              'Montage',
              'Qualitaetskontrolle',
              'Verpackung'
            ].map((branch, idx) => (
              <div key={idx} className="bg-gray-50 border border-gray-200 rounded-lg p-6 text-center hover:border-orange-300 hover:bg-orange-50 transition-all">
                <span className="text-gray-700 font-medium">{branch}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-br from-orange-500 to-orange-600">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h2 className="text-3xl md:text-4xl font-black text-white mb-6">
            Bereit fuer flexible Personalloesungen?
          </h2>
          <p className="text-white/90 text-lg mb-8 max-w-2xl mx-auto">
            Kontaktieren Sie uns fuer ein unverbindliches Beratungsgespraech. 
            Wir finden die passende Loesung fuer Ihren Personalbedarf.
          </p>
          <div className="flex flex-wrap gap-4 justify-center">
            <Link 
              to="/personal-anfrage"
              className="inline-flex items-center gap-2 bg-white text-orange-500 hover:bg-gray-100 px-8 py-4 rounded-lg font-semibold transition-all"
            >
              Personal anfragen <ArrowRight size={18} />
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

export default Arbeitnehmerueberlassung;
