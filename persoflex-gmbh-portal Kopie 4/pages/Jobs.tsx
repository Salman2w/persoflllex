import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { 
  ArrowRight, 
  MapPin, 
  Search, 
  Loader2, 
  AlertCircle, 
  Briefcase, 
  Flame, 
  Filter,
  Package,
  Factory,
  Wrench,
  Monitor,
  CheckCircle2,
  Clock,
  Phone,
  Send,
  X
} from 'lucide-react';
import { SEO } from '../components/SEO';

interface JobListItem {
  ObjectUuid: string;
  Bezeichnung: string;
  EinsatzortOrt: string;
  EinsatzortPlz?: string;
  VertragsartBezeichnung?: string;
  Vakanzart?: string;
}

const CATEGORIES = [
  { id: 'all', label: 'Alle Jobs', icon: Briefcase },
  { id: 'produktion', label: 'Produktion', icon: Factory, keywords: ['produktion', 'fertigung', 'montage', 'maschinen'] },
  { id: 'logistik', label: 'Logistik', icon: Package, keywords: ['lager', 'logistik', 'kommission', 'versand', 'stapler'] },
  { id: 'handwerk', label: 'Handwerk', icon: Wrench, keywords: ['handwerk', 'schlosser', 'schweißer', 'elektriker', 'mechaniker', 'techniker'] },
  { id: 'kaufmann', label: 'Kaufmännisch', icon: Monitor, keywords: ['kaufm', 'büro', 'sachbearbeit', 'buchhalt', 'assistenz'] }
];

const BENEFITS = [
  { icon: CheckCircle2, text: "Faire Bezahlung nach Tarif" },
  { icon: CheckCircle2, text: "Bis zu 30 Tage Urlaub" },
  { icon: CheckCircle2, text: "Persönlicher Ansprechpartner" },
  { icon: CheckCircle2, text: "Tankgutschein inklusive" }
];

export const Jobs: React.FC = () => {
  const [jobs, setJobs] = useState<JobListItem[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');
  const [searchTerm, setSearchTerm] = useState('');
  const [activeCategory, setActiveCategory] = useState('all');

  const SERVER_URL = 'https://persoflex-gmbh.europersonal.com';
  const API_KEY = 'XhGwFjs1Y0lRO4YGp+iYtkBRcLzUwezpoPQYgEXvV8c=';
  const LIST_ENDPOINT = '/api/public/v1/Stelle/GetStellen'; 

  useEffect(() => {
    const fetchJobs = async () => {
      setLoading(true);
      setError('');

      try {
        const response = await fetch(`${SERVER_URL}${LIST_ENDPOINT}`, {
          method: 'GET',
          headers: { 
            'X-ApiKey': API_KEY, 
            'Accept': 'application/json' 
          }
        });

        if (response.status === 200) {
          const data = await response.json();
          const jobList = data.Items || (Array.isArray(data) ? data : []);
          setJobs(jobList);
        } else {
           console.error("API Fehler Status:", response.status);
           setError(`Fehler beim Laden der Jobs (Status: ${response.status})`);
        }
      } catch (err: unknown) {
        console.error("Fetch Fehler:", err);
        setError('Verbindungsfehler zur Job-Datenbank.');
      } finally {
        setLoading(false);
      }
    };

    fetchJobs();
  }, []);

  const filteredJobs = jobs.filter(job => {
    const term = searchTerm.toLowerCase();
    const title = (job.Bezeichnung || '').toLowerCase();
    const location = (job.EinsatzortOrt || '').toLowerCase();
    
    // Search filter
    const matchesSearch = title.includes(term) || location.includes(term);
    
    // Category filter
    if (activeCategory === 'all') {
      return matchesSearch;
    }
    
    const category = CATEGORIES.find(c => c.id === activeCategory);
    if (!category || !category.keywords) {
      return matchesSearch;
    }
    
    const matchesCategory = category.keywords.some(keyword => title.includes(keyword));
    return matchesSearch && matchesCategory;
  });

  return (
    <div className="flex flex-col min-h-screen bg-white">
      <SEO 
        title="Jobs in Pforzheim & Enzkreis | Aktuelle Stellenangebote | PersoFlex"
        description="Finde deinen neuen Job in Pforzheim, Enzkreis und Baden-Württemberg. Aktuelle Stellenangebote in Produktion, Logistik, Handwerk und mehr. Jetzt bewerben!"
        keywords="Jobs Pforzheim, Stellenangebote Enzkreis, Arbeit Pforzheim, Zeitarbeit Jobs, Produktion Jobs, Logistik Jobs"
      />
      
      {/* Hero Section */}
      <section className="relative pt-32 pb-20 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-orange-50 via-orange-50/50 to-white" />
        <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-orange-200/30 rounded-full blur-[120px]" />
        
        <div className="max-w-7xl mx-auto px-6 relative z-10">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="text-center lg:text-left">
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-orange-500 text-white mb-6 shadow-lg shadow-orange-500/25">
                <Flame className="w-4 h-4" />
                <span className="text-sm font-semibold">Aktuelle Stellenangebote</span>
              </div>
              
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-black text-gray-900 mb-6">
                Deine Zukunft <span className="text-orange-500">startet hier.</span>
              </h1>
              <p className="text-lg text-gray-600 mb-8 leading-relaxed">
                Entdecke aktuelle Stellenangebote in Pforzheim, Enzkreis und der Region. 
                Produktion, Logistik, Handwerk und mehr – wir haben den richtigen Job für dich.
              </p>

              {/* Quick Benefits */}
              <div className="flex flex-wrap gap-4 justify-center lg:justify-start">
                {BENEFITS.map((benefit, idx) => (
                  <div key={idx} className="flex items-center gap-2 text-sm">
                    <benefit.icon className="w-5 h-5 text-orange-500" />
                    <span className="text-gray-700 font-medium">{benefit.text}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Quick Apply Card */}
            <div className="bg-white border-2 border-orange-200 rounded-2xl p-8 shadow-xl">
              <h3 className="text-xl font-bold text-gray-900 mb-4">Schnellbewerbung</h3>
              <p className="text-gray-600 mb-6">
                Keinen passenden Job gefunden? Schick uns deine Initiativbewerbung 
                und wir melden uns, sobald etwas passt.
              </p>
              <div className="space-y-4">
                <Link 
                  to="/kontakt" 
                  className="flex items-center justify-center gap-2 w-full bg-orange-500 hover:bg-orange-600 text-white px-6 py-4 rounded-xl font-semibold transition-all hover:shadow-lg"
                >
                  <Send size={18} />
                  Initiativbewerbung senden
                </Link>
                <a 
                  href="tel:+4972316039493" 
                  className="flex items-center justify-center gap-2 w-full border-2 border-gray-200 text-gray-700 px-6 py-4 rounded-xl font-semibold hover:border-orange-300 transition-all"
                >
                  <Phone size={18} />
                  07231 / 60 39 493
                </a>
              </div>
              <p className="text-xs text-gray-500 mt-4 text-center">
                Bewerbung 100% kostenlos. Wir melden uns innerhalb von 24h.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Search Section */}
      <div className="relative -mt-8 z-20 px-6">
        <div className="max-w-4xl mx-auto">
          <div className="bg-white border border-gray-200 rounded-2xl p-6 shadow-xl">
            <div className="relative">
              <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400" size={20} />
              <input 
                type="text"
                placeholder="Jobtitel, Stichwort oder Ort eingeben..."
                className="w-full pl-12 pr-12 py-4 bg-gray-50 border border-gray-200 rounded-xl text-gray-900 placeholder:text-gray-400 focus:outline-none focus:border-orange-500 focus:ring-2 focus:ring-orange-500/20 transition-all"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
              />
              {searchTerm && (
                <button 
                  onClick={() => setSearchTerm('')}
                  className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-400 hover:text-gray-600 transition-colors"
                >
                  <X size={20} />
                </button>
              )}
            </div>
            
            {/* Category Filters */}
            <div className="flex flex-wrap gap-2 mt-4">
              {CATEGORIES.map((category) => (
                <button 
                  key={category.id}
                  onClick={() => setActiveCategory(category.id)}
                  className={`flex items-center gap-2 px-4 py-2 text-sm rounded-lg transition-all ${
                    activeCategory === category.id
                      ? 'bg-orange-500 text-white'
                      : 'bg-white border border-gray-200 text-gray-600 hover:border-orange-300 hover:text-gray-900'
                  }`}
                >
                  <category.icon size={16} />
                  {category.label}
                </button>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Jobs Grid */}
      <section className="py-16 px-6">
        <div className="max-w-7xl mx-auto">
          
          {/* Results count */}
          {!loading && !error && (
            <div className="flex items-center justify-between mb-8">
              <p className="text-gray-600">
                <span className="text-gray-900 font-bold">{filteredJobs.length}</span> Jobs gefunden
                {activeCategory !== 'all' && (
                  <span className="text-orange-500 ml-2">
                    in {CATEGORIES.find(c => c.id === activeCategory)?.label}
                  </span>
                )}
              </p>
              <button className="flex items-center gap-2 px-4 py-2 text-sm bg-white border border-gray-200 rounded-lg text-gray-600 hover:border-orange-300 transition-all">
                <Filter size={16} />
                Weitere Filter
              </button>
            </div>
          )}

          {loading && (
            <div className="text-center py-20">
              <div className="inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-orange-100 mb-6">
                <Loader2 className="animate-spin text-orange-500" size={32} />
              </div>
              <p className="text-gray-600 font-medium">Lade aktuelle Jobs...</p>
              <p className="text-sm text-gray-500 mt-2">Wir durchsuchen alle verfügbaren Stellenangebote</p>
            </div>
          )}

          {error && (
            <div className="bg-red-50 border border-red-200 text-red-600 p-8 rounded-2xl text-center max-w-2xl mx-auto">
              <AlertCircle size={32} className="mx-auto mb-4" />
              <p className="font-medium mb-2">{error}</p>
              <p className="text-sm text-red-500">Bitte versuche es später erneut oder kontaktiere uns direkt.</p>
              <a 
                href="tel:+4972316039493" 
                className="inline-flex items-center gap-2 mt-4 text-red-600 font-semibold hover:text-red-700"
              >
                <Phone size={16} />
                07231 / 60 39 493
              </a>
            </div>
          )}

          {!loading && !error && (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {filteredJobs.map((job) => (
                <div 
                  key={job.ObjectUuid} 
                  className="group bg-white border border-gray-200 rounded-2xl p-6 flex flex-col h-full hover:border-orange-300 hover:shadow-xl transition-all duration-300"
                >
                  <div className="flex justify-between items-start mb-4">
                    <div className="w-12 h-12 bg-orange-100 text-orange-500 rounded-xl flex items-center justify-center group-hover:bg-orange-500 group-hover:text-white transition-all">
                       <Briefcase size={24} />
                    </div>
                    {job.VertragsartBezeichnung && (
                      <span className="text-xs font-semibold bg-gray-100 text-gray-600 px-3 py-1.5 rounded-full">
                        {job.VertragsartBezeichnung}
                      </span>
                    )}
                  </div>

                  <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-orange-500 transition-colors line-clamp-2">
                    {job.Bezeichnung}
                  </h3>
                  
                  <div className="flex items-center text-gray-600 mb-6 text-sm">
                    <MapPin size={16} className="mr-2 text-orange-500 flex-shrink-0" />
                    {job.EinsatzortPlz} {job.EinsatzortOrt || 'Pforzheim'}
                  </div>

                  <div className="mt-auto">
                    <Link 
                      to={`/jobs/${job.ObjectUuid}`} 
                      className="flex items-center justify-center w-full bg-orange-500 hover:bg-orange-600 text-white py-3 rounded-xl font-semibold transition-all duration-300 hover:shadow-lg"
                    >
                      Details ansehen <ArrowRight size={16} className="ml-2" />
                    </Link>
                  </div>
                </div>
              ))}
            </div>
          )}

          {/* Empty state */}
          {!loading && !error && filteredJobs.length === 0 && (
            <div className="text-center py-20 bg-gray-50 rounded-2xl border border-gray-200">
              <div className="w-20 h-20 bg-orange-100 rounded-2xl flex items-center justify-center mx-auto mb-6">
                <Search size={32} className="text-orange-500" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">Keine Jobs gefunden</h3>
              <p className="text-gray-600 mb-6 max-w-md mx-auto">
                Für deine Suche haben wir leider keine passenden Stellen gefunden. 
                Versuche andere Suchbegriffe oder schick uns eine Initiativbewerbung.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <button 
                  onClick={() => {
                    setSearchTerm('');
                    setActiveCategory('all');
                  }}
                  className="px-6 py-3 bg-orange-500 text-white rounded-xl font-semibold hover:bg-orange-600 transition-all"
                >
                  Filter zurücksetzen
                </button>
                <Link 
                  to="/kontakt"
                  className="px-6 py-3 border-2 border-gray-200 text-gray-700 rounded-xl font-semibold hover:border-orange-300 transition-all"
                >
                  Initiativbewerbung
                </Link>
              </div>
            </div>
          )}
        </div>
      </section>

      {/* Info Section */}
      <section className="py-16 px-6 bg-gray-50 border-y border-gray-200">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-orange-100 border border-orange-200 text-orange-600 text-sm font-semibold uppercase tracking-wider mb-4">
                Zeitarbeit Pforzheim
              </span>
              <h2 className="text-3xl md:text-4xl font-black text-gray-900 mb-6">
                Warum Jobs bei <span className="text-orange-500">PersoFlex</span>?
              </h2>
              <div className="space-y-4 text-gray-600 text-lg leading-relaxed">
                <p>
                  Als spezialisierte <strong className="text-gray-900">Zeitarbeitsfirma Pforzheim</strong> bieten 
                  wir dir nicht nur einen Job, sondern eine echte Perspektive. Wir arbeiten mit den 
                  besten Unternehmen der Region zusammen.
                </p>
                <p>
                  Ob du Erfahrung hast oder Quereinsteiger bist – wir finden gemeinsam 
                  die richtige Position für dich. Faire Bezahlung, persönliche Betreuung 
                  und echte Übernahmechancen inklusive.
                </p>
              </div>
            </div>
            
            <div className="grid grid-cols-2 gap-4">
              <div className="bg-white border border-gray-200 rounded-2xl p-6 hover:border-orange-300 transition-all">
                <div className="w-12 h-12 bg-orange-500 text-white rounded-xl flex items-center justify-center mb-4">
                  <Clock size={24} />
                </div>
                <h3 className="font-bold text-gray-900 mb-2">Schneller Start</h3>
                <p className="text-sm text-gray-600">Oft kannst du schon innerhalb weniger Tage anfangen</p>
              </div>
              <div className="bg-white border border-gray-200 rounded-2xl p-6 hover:border-orange-300 transition-all">
                <div className="w-12 h-12 bg-orange-500 text-white rounded-xl flex items-center justify-center mb-4">
                  <CheckCircle2 size={24} />
                </div>
                <h3 className="font-bold text-gray-900 mb-2">100% Kostenlos</h3>
                <p className="text-sm text-gray-600">Für Bewerber ist unser Service komplett kostenlos</p>
              </div>
              <div className="bg-white border border-gray-200 rounded-2xl p-6 hover:border-orange-300 transition-all">
                <div className="w-12 h-12 bg-orange-500 text-white rounded-xl flex items-center justify-center mb-4">
                  <MapPin size={24} />
                </div>
                <h3 className="font-bold text-gray-900 mb-2">Regional</h3>
                <p className="text-sm text-gray-600">Jobs in Pforzheim, Enzkreis und der gesamten Region</p>
              </div>
              <div className="bg-white border border-gray-200 rounded-2xl p-6 hover:border-orange-300 transition-all">
                <div className="w-12 h-12 bg-orange-500 text-white rounded-xl flex items-center justify-center mb-4">
                  <Briefcase size={24} />
                </div>
                <h3 className="font-bold text-gray-900 mb-2">Übernahme</h3>
                <p className="text-sm text-gray-600">Hohe Übernahmechancen bei unseren Partnerunternehmen</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-6 bg-gray-900 relative overflow-hidden">
        <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-[size:48px_48px]" />
        <div className="absolute top-0 right-1/4 w-[400px] h-[400px] bg-orange-500/10 rounded-full blur-[150px]" />
        
        <div className="max-w-4xl mx-auto text-center relative z-10">
          <Flame className="w-12 h-12 text-orange-500 mx-auto mb-6" />
          <h2 className="text-2xl md:text-4xl font-black text-white mb-4">
            Nicht das Richtige dabei?
          </h2>
          <p className="text-gray-400 mb-8 text-lg max-w-2xl mx-auto">
            Schick uns deine Initiativbewerbung und wir melden uns, sobald der passende Job verfügbar ist. 
            Wir haben ständig neue Stellen – auch solche, die noch nicht online sind.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link 
              to="/kontakt" 
              className="group inline-flex items-center justify-center gap-2 bg-orange-500 hover:bg-orange-600 text-white px-8 py-4 rounded-xl font-semibold hover:shadow-xl hover:shadow-orange-500/30 transition-all"
            >
              Initiativbewerbung senden 
              <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
            </Link>
            <a 
              href="tel:+4972316039493" 
              className="inline-flex items-center justify-center gap-2 border-2 border-gray-600 text-white px-8 py-4 rounded-xl font-semibold hover:bg-gray-800 hover:border-gray-500 transition-all"
            >
              <Phone size={18} />
              Direkt anrufen
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};
