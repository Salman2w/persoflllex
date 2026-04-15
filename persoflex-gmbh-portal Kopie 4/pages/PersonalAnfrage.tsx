import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { 
  CheckCircle2, 
  Users, 
  Clock, 
  ShieldCheck, 
  Send,
  Phone,
  Building2,
  Briefcase,
  ArrowRight,
  Zap,
  Target,
  Handshake,
  Factory,
  Package,
  Wrench,
  Monitor,
  MapPin,
  FileText,
  Award
} from 'lucide-react';
import { SEO } from '../components/SEO';

const SERVICE_TYPES = [
  { 
    id: 'zeitarbeit', 
    label: 'Arbeitnehmerüberlassung', 
    description: 'Flexible Personalbesetzung für kurz- und mittelfristige Projekte',
    icon: Clock
  },
  { 
    id: 'vermittlung', 
    label: 'Direktvermittlung', 
    description: 'Wir finden den perfekten Kandidaten für Ihre Festanstellung',
    icon: Target
  },
  { 
    id: 'both', 
    label: 'Beides möglich', 
    description: 'Flexibler Ansatz je nach Anforderung und Kandidat',
    icon: Handshake
  }
];

const INDUSTRIES = [
  { id: 'produktion', label: 'Produktion & Fertigung', icon: Factory },
  { id: 'logistik', label: 'Logistik & Lager', icon: Package },
  { id: 'handwerk', label: 'Handwerk & Technik', icon: Wrench },
  { id: 'kaufmann', label: 'Kaufmännisch & Verwaltung', icon: Monitor },
  { id: 'andere', label: 'Andere Branche', icon: Briefcase }
];

const BENEFITS = [
  {
    icon: Clock,
    title: "Schnelle Reaktion",
    description: "Wir bearbeiten Ihre Anfrage zeitnah und präsentieren Ihnen passende Kandidaten."
  },
  {
    icon: ShieldCheck,
    title: "Rechtssicherheit",
    description: "Wir besitzen die unbefristete Erlaubnis zur Arbeitnehmerüberlassung (AÜG)."
  },
  {
    icon: Users,
    title: "Passgenauigkeit",
    description: "Wir schicken nicht 'irgendwen'. Wir prüfen Qualifikation und Persönlichkeit sorgfältig."
  },
  {
    icon: CheckCircle2,
    title: "Faire Konditionen",
    description: "Transparente Preisgestaltung ohne versteckte Kosten. Sie wissen immer, woran Sie sind."
  },
  {
    icon: Target,
    title: "Regionale Expertise",
    description: "Als Pforzheimer Unternehmen kennen wir den lokalen Arbeitsmarkt bestens."
  },
  {
    icon: Handshake,
    title: "Persönliche Betreuung",
    description: "Ein fester Ansprechpartner begleitet Sie während der gesamten Zusammenarbeit."
  }
];

const PROCESS_STEPS = [
  {
    num: "1",
    title: "Anfrage senden",
    description: "Füllen Sie das Formular aus oder rufen Sie uns an. Beschreiben Sie Ihren Personalbedarf."
  },
  {
    num: "2",
    title: "Bedarfsanalyse",
    description: "Wir besprechen Ihre Anforderungen im Detail und definieren das Idealprofil."
  },
  {
    num: "3",
    title: "Kandidatenauswahl",
    description: "Wir suchen passende Kandidaten aus unserem Pool und führen Vorauswahlgespräche."
  },
  {
    num: "4",
    title: "Vorstellung",
    description: "Wir präsentieren Ihnen geeignete Bewerber mit vollständigen Profilen."
  },
  {
    num: "5",
    title: "Einsatz",
    description: "Nach Ihrer Entscheidung organisieren wir den Einsatzstart und bleiben Ihr Ansprechpartner."
  }
];

export const PersonalAnfrage: React.FC = () => {
  const [selectedService, setSelectedService] = useState('zeitarbeit');
  const [selectedIndustry, setSelectedIndustry] = useState('');
  const [formData, setFormData] = useState({
    company: '',
    contact: '',
    email: '',
    phone: '',
    position: '',
    count: '1',
    startDate: '',
    message: ''
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Form submitted:', { ...formData, service: selectedService, industry: selectedIndustry });
  };

  return (
    <div className="min-h-screen bg-white pt-[80px]">
      <SEO
        title="Personal anfragen | PersoFlex GmbH Pforzheim"
        description="Finden Sie qualifiziertes Personal in Pforzheim & Enzkreis. Arbeitnehmerüberlassung & Personalvermittlung. Schnell, flexibel & zuverlässig."
        keywords="Personal anfragen, Zeitarbeit Pforzheim, Personalvermittlung Enzkreis, Arbeitnehmerüberlassung"
      />

      {/* Hero Section */}
      <section className="relative py-20 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-orange-50 via-orange-50/50 to-white" />
        <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-orange-200/30 rounded-full blur-[120px]" />
        
        <div className="max-w-7xl mx-auto px-6 relative z-10">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <span className="inline-flex items-center gap-2 py-2 px-4 bg-orange-500 text-white text-sm font-semibold uppercase tracking-wider rounded-full shadow-lg shadow-orange-500/25 mb-6">
                <Building2 size={14} />
                Für Unternehmen
              </span>
              <h1 className="text-4xl md:text-5xl font-black text-gray-900 mb-6 leading-tight">
                Personalengpass? <br />
                <span className="text-orange-500">Wir haben die Lösung.</span>
              </h1>
              <p className="text-lg text-gray-600 mb-8 leading-relaxed">
                Egal ob kurzfristige Krankheitsvertretung, saisonale Spitzen oder langfristige Festanstellung – 
                wir finden die passenden Mitarbeiter für Ihr Unternehmen im Enzkreis.
              </p>
              
              <div className="flex flex-wrap gap-4 mb-8">
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-5 h-5 text-orange-500" />
                  <span className="text-gray-700 font-medium">AÜG-Erlaubnis</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-5 h-5 text-orange-500" />
                  <span className="text-gray-700 font-medium">GVP-Mitglied</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-5 h-5 text-orange-500" />
                  <span className="text-gray-700 font-medium">Tarifgebunden</span>
                </div>
              </div>

              <div className="flex flex-col sm:flex-row gap-4">
                <a 
                  href="tel:+4972316039493" 
                  className="inline-flex items-center justify-center gap-2 bg-orange-500 hover:bg-orange-600 text-white px-6 py-4 rounded-xl font-semibold transition-all hover:shadow-lg"
                >
                  <Phone size={18} />
                  07231 / 60 39 493
                </a>
                <a 
                  href="#anfrage-formular" 
                  className="inline-flex items-center justify-center gap-2 border-2 border-gray-200 text-gray-700 px-6 py-4 rounded-xl font-semibold hover:border-orange-300 transition-all"
                >
                  <FileText size={18} />
                  Zum Formular
                </a>
              </div>
            </div>

            {/* Trust Card */}
            <div className="bg-white border-2 border-orange-200 rounded-2xl p-8 shadow-xl">
              <h3 className="text-xl font-bold text-gray-900 mb-6 flex items-center gap-2">
                <Award className="w-6 h-6 text-orange-500" />
                Warum PersoFlex?
              </h3>
              <div className="space-y-4">
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 bg-orange-500 rounded-lg flex items-center justify-center flex-shrink-0">
                    <Zap className="w-5 h-5 text-white" />
                  </div>
                  <div>
                    <p className="font-semibold text-gray-900">Schnelle Vermittlung</p>
                    <p className="text-sm text-gray-600">Oft können wir Anfragen zeitnah bearbeiten</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 bg-orange-500 rounded-lg flex items-center justify-center flex-shrink-0">
                    <Target className="w-5 h-5 text-white" />
                  </div>
                  <div>
                    <p className="font-semibold text-gray-900">Präzise Auswahl</p>
                    <p className="text-sm text-gray-600">Sorgfältige Prüfung aller Kandidaten</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 bg-orange-500 rounded-lg flex items-center justify-center flex-shrink-0">
                    <MapPin className="w-5 h-5 text-white" />
                  </div>
                  <div>
                    <p className="font-semibold text-gray-900">Regional stark</p>
                    <p className="text-sm text-gray-600">Lokales Netzwerk in Pforzheim & Enzkreis</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 bg-orange-500 rounded-lg flex items-center justify-center flex-shrink-0">
                    <Handshake className="w-5 h-5 text-white" />
                  </div>
                  <div>
                    <p className="font-semibold text-gray-900">Persönlicher Kontakt</p>
                    <p className="text-sm text-gray-600">Ein fester Ansprechpartner für Sie</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Form Section */}
      <section id="anfrage-formular" className="py-20 bg-gray-50 border-y border-gray-200">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid lg:grid-cols-5 gap-12">

            {/* Left: Form */}
            <div className="lg:col-span-3">
              <h2 className="text-2xl font-black text-gray-900 mb-2">Personalanfrage senden</h2>
              <p className="text-gray-600 mb-8">
                Beschreiben Sie Ihren Bedarf und wir melden uns schnellstmöglich bei Ihnen.
              </p>

              <form onSubmit={handleSubmit} className="bg-white border border-gray-200 rounded-2xl p-8">
                
                {/* Service Type Selection */}
                <div className="mb-8">
                  <label className="block text-sm font-bold text-gray-900 mb-4">
                    Welche Art der Personalbesetzung benötigen Sie?
                  </label>
                  <div className="grid md:grid-cols-3 gap-4">
                    {SERVICE_TYPES.map((service) => (
                      <button
                        key={service.id}
                        type="button"
                        onClick={() => setSelectedService(service.id)}
                        className={`p-4 rounded-xl border-2 transition-all text-left ${
                          selectedService === service.id
                            ? 'border-orange-500 bg-orange-50'
                            : 'border-gray-200 hover:border-orange-300'
                        }`}
                      >
                        <div className={`w-10 h-10 rounded-lg flex items-center justify-center mb-3 ${
                          selectedService === service.id ? 'bg-orange-500 text-white' : 'bg-gray-100 text-gray-600'
                        }`}>
                          <service.icon size={20} />
                        </div>
                        <p className={`font-semibold text-sm ${
                          selectedService === service.id ? 'text-orange-600' : 'text-gray-900'
                        }`}>
                          {service.label}
                        </p>
                        <p className="text-xs text-gray-500 mt-1">{service.description}</p>
                      </button>
                    ))}
                  </div>
                </div>

                {/* Industry Selection */}
                <div className="mb-8">
                  <label className="block text-sm font-bold text-gray-900 mb-4">
                    In welcher Branche suchen Sie Personal?
                  </label>
                  <div className="flex flex-wrap gap-2">
                    {INDUSTRIES.map((industry) => (
                      <button
                        key={industry.id}
                        type="button"
                        onClick={() => setSelectedIndustry(industry.id)}
                        className={`flex items-center gap-2 px-4 py-2.5 rounded-lg border-2 transition-all ${
                          selectedIndustry === industry.id
                            ? 'border-orange-500 bg-orange-50 text-orange-600'
                            : 'border-gray-200 text-gray-700 hover:border-orange-300'
                        }`}
                      >
                        <industry.icon size={16} />
                        <span className="text-sm font-medium">{industry.label}</span>
                      </button>
                    ))}
                  </div>
                </div>

                {/* Company Info */}
                <div className="mb-8">
                  <h3 className="text-sm font-bold text-gray-400 uppercase tracking-wider mb-4 border-b pb-2">
                    Unternehmensdaten
                  </h3>
                  <div className="grid md:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">Firmenname *</label>
                      <input 
                        type="text" 
                        name="company"
                        required
                        value={formData.company}
                        onChange={handleInputChange}
                        className="w-full p-4 bg-gray-50 border border-gray-200 rounded-xl focus:outline-none focus:border-orange-500 focus:ring-2 focus:ring-orange-500/20 transition-all" 
                        placeholder="Ihre Firma"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">Ansprechpartner *</label>
                      <input 
                        type="text"
                        name="contact"
                        required
                        value={formData.contact}
                        onChange={handleInputChange}
                        className="w-full p-4 bg-gray-50 border border-gray-200 rounded-xl focus:outline-none focus:border-orange-500 focus:ring-2 focus:ring-orange-500/20 transition-all" 
                        placeholder="Ihr Name"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">E-Mail *</label>
                      <input 
                        type="email"
                        name="email"
                        required
                        value={formData.email}
                        onChange={handleInputChange}
                        className="w-full p-4 bg-gray-50 border border-gray-200 rounded-xl focus:outline-none focus:border-orange-500 focus:ring-2 focus:ring-orange-500/20 transition-all" 
                        placeholder="ihre@firma.de"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">Telefon *</label>
                      <input 
                        type="tel"
                        name="phone"
                        required
                        value={formData.phone}
                        onChange={handleInputChange}
                        className="w-full p-4 bg-gray-50 border border-gray-200 rounded-xl focus:outline-none focus:border-orange-500 focus:ring-2 focus:ring-orange-500/20 transition-all" 
                        placeholder="Für Rückruf"
                      />
                    </div>
                  </div>
                </div>

                {/* Job Info */}
                <div className="mb-8">
                  <h3 className="text-sm font-bold text-gray-400 uppercase tracking-wider mb-4 border-b pb-2">
                    Ihr Personalbedarf
                  </h3>
                  <div className="grid md:grid-cols-2 gap-4 mb-4">
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">Gesuchte Qualifikation / Beruf</label>
                      <input 
                        type="text"
                        name="position"
                        value={formData.position}
                        onChange={handleInputChange}
                        placeholder="z.B. Staplerfahrer, Produktionsmitarbeiter" 
                        className="w-full p-4 bg-gray-50 border border-gray-200 rounded-xl focus:outline-none focus:border-orange-500 focus:ring-2 focus:ring-orange-500/20 transition-all" 
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">Anzahl Mitarbeiter</label>
                      <select 
                        name="count"
                        value={formData.count}
                        onChange={handleInputChange}
                        className="w-full p-4 bg-gray-50 border border-gray-200 rounded-xl focus:outline-none focus:border-orange-500 focus:ring-2 focus:ring-orange-500/20 transition-all"
                      >
                        <option value="1">1 Mitarbeiter</option>
                        <option value="2-5">2-5 Mitarbeiter</option>
                        <option value="5-10">5-10 Mitarbeiter</option>
                        <option value="10+">Mehr als 10</option>
                      </select>
                    </div>
                  </div>
                  <div className="mb-4">
                    <label className="block text-sm font-medium text-gray-700 mb-2">Gewünschter Einsatzbeginn</label>
                    <input 
                      type="text"
                      name="startDate"
                      value={formData.startDate}
                      onChange={handleInputChange}
                      placeholder="z.B. ab sofort, ab 01.02.2025" 
                      className="w-full p-4 bg-gray-50 border border-gray-200 rounded-xl focus:outline-none focus:border-orange-500 focus:ring-2 focus:ring-orange-500/20 transition-all" 
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Weitere Informationen / Besonderheiten</label>
                    <textarea 
                      name="message"
                      rows={4}
                      value={formData.message}
                      onChange={handleInputChange}
                      placeholder="Beschreiben Sie die Tätigkeit, erforderliche Qualifikationen, Schichtzeiten etc."
                      className="w-full p-4 bg-gray-50 border border-gray-200 rounded-xl focus:outline-none focus:border-orange-500 focus:ring-2 focus:ring-orange-500/20 transition-all resize-none"
                    ></textarea>
                  </div>
                </div>

                <div className="flex items-start gap-3 text-sm text-gray-600 mb-6">
                  <input type="checkbox" required className="mt-1 accent-orange-500" />
                  <span>
                    Ich stimme der Verarbeitung meiner Daten gemäß der{' '}
                    <Link to="/datenschutz" className="text-orange-500 hover:text-orange-600">
                      Datenschutzerklärung
                    </Link>{' '}
                    zu.
                  </span>
                </div>

                <button 
                  type="submit" 
                  className="w-full bg-orange-500 hover:bg-orange-600 text-white font-semibold py-4 rounded-xl hover:shadow-lg transition-all flex items-center justify-center gap-2"
                >
                  Anfrage absenden <Send size={18} />
                </button>
              </form>
            </div>

            {/* Right: Benefits & Contact */}
            <div className="lg:col-span-2 space-y-8">
              
              {/* Benefits List */}
              <div className="bg-white border border-gray-200 rounded-2xl p-6">
                <h3 className="text-lg font-bold text-gray-900 mb-6">Ihre Vorteile mit PersoFlex</h3>
                <div className="space-y-4">
                  {BENEFITS.slice(0, 4).map((benefit, idx) => (
                    <div key={idx} className="flex items-start gap-4">
                      <div className="w-10 h-10 bg-orange-100 rounded-lg flex items-center justify-center text-orange-500 flex-shrink-0">
                        <benefit.icon size={20} />
                      </div>
                      <div>
                        <h4 className="font-semibold text-gray-900">{benefit.title}</h4>
                        <p className="text-sm text-gray-600">{benefit.description}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Direct Contact */}
              <div className="bg-gray-900 text-white rounded-2xl p-6">
                <h3 className="font-bold text-xl mb-3">Lieber persönlich?</h3>
                <p className="text-gray-400 mb-6">
                  Rufen Sie uns direkt an. Wir beraten Sie gerne zu Ihrem Personalbedarf.
                </p>
                <a 
                  href="tel:+4972316039493" 
                  className="inline-flex items-center gap-2 text-2xl font-black text-orange-500 hover:text-orange-400 transition-colors"
                >
                  <Phone size={24} />
                  07231 / 60 39 493
                </a>
                <p className="text-sm text-gray-500 mt-4">
                  Mo - Fr: 08:00 - 17:00 Uhr
                </p>
              </div>

              {/* Service Areas */}
              <div className="bg-orange-50 border border-orange-200 rounded-2xl p-6">
                <h3 className="font-bold text-gray-900 mb-4 flex items-center gap-2">
                  <MapPin className="w-5 h-5 text-orange-500" />
                  Unser Einsatzgebiet
                </h3>
                <p className="text-sm text-gray-600 mb-4">
                  Wir vermitteln Personal in Pforzheim, Mühlacker, Birkenfeld, Keltern 
                  und dem gesamten Enzkreis.
                </p>
                <Link 
                  to="/unternehmen" 
                  className="inline-flex items-center gap-2 text-orange-500 font-semibold hover:text-orange-600 text-sm"
                >
                  Mehr über unsere Leistungen <ArrowRight size={14} />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-orange-100 border border-orange-200 text-orange-600 text-sm font-semibold uppercase tracking-wider mb-4">
              Der Prozess
            </span>
            <h2 className="text-3xl md:text-4xl font-black text-gray-900 mb-4">
              So läuft die <span className="text-orange-500">Zusammenarbeit</span>
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto text-lg">
              Von der Anfrage bis zum Einsatz – wir begleiten Sie durch den gesamten Prozess.
            </p>
          </div>

          <div className="grid md:grid-cols-5 gap-6">
            {PROCESS_STEPS.map((step, idx) => (
              <div key={idx} className="relative">
                <div className="bg-gray-50 border border-gray-200 rounded-2xl p-6 h-full hover:border-orange-300 transition-all">
                  <div className="w-10 h-10 bg-orange-500 text-white rounded-lg flex items-center justify-center mb-4 font-bold">
                    {step.num}
                  </div>
                  <h3 className="font-bold text-gray-900 mb-2">{step.title}</h3>
                  <p className="text-sm text-gray-600">{step.description}</p>
                </div>
                {idx < PROCESS_STEPS.length - 1 && (
                  <div className="hidden md:block absolute top-1/2 -right-3 w-6 h-0.5 bg-orange-300" />
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits Grid */}
      <section className="py-20 bg-gray-50 border-y border-gray-200">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-black text-gray-900 mb-4">
              Warum Unternehmen uns <span className="text-orange-500">vertrauen</span>
            </h2>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {BENEFITS.map((benefit, idx) => (
              <div 
                key={idx} 
                className="bg-white border border-gray-200 rounded-2xl p-6 hover:border-orange-300 hover:shadow-lg transition-all"
              >
                <div className="w-12 h-12 bg-orange-500 text-white rounded-xl flex items-center justify-center mb-4">
                  <benefit.icon size={24} />
                </div>
                <h3 className="font-bold text-gray-900 mb-2">{benefit.title}</h3>
                <p className="text-gray-600 text-sm">{benefit.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gray-900 relative overflow-hidden">
        <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-[size:48px_48px]" />
        <div className="absolute top-0 right-1/4 w-[400px] h-[400px] bg-orange-500/10 rounded-full blur-[150px]" />
        
        <div className="max-w-4xl mx-auto px-6 text-center relative z-10">
          <h2 className="text-3xl md:text-4xl font-black text-white mb-6">
            Bereit für qualifiziertes Personal?
          </h2>
          <p className="text-gray-400 mb-8 text-lg">
            Kontaktieren Sie uns noch heute und lassen Sie uns gemeinsam 
            die passende Lösung für Ihren Personalbedarf finden.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a 
              href="tel:+4972316039493" 
              className="group inline-flex items-center justify-center gap-2 bg-orange-500 hover:bg-orange-600 text-white px-8 py-4 rounded-xl font-semibold hover:shadow-xl hover:shadow-orange-500/30 transition-all"
            >
              <Phone size={18} />
              Jetzt anrufen
            </a>
            <Link 
              to="/unternehmen" 
              className="inline-flex items-center justify-center gap-2 border-2 border-gray-600 text-white px-8 py-4 rounded-xl font-semibold hover:bg-gray-800 hover:border-gray-500 transition-all"
            >
              Mehr über unsere Leistungen
              <ArrowRight size={18} />
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};
