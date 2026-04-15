import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, MapPin, Search, Loader2, AlertCircle, Briefcase, Flame, Filter } from 'lucide-react';
import { SEO } from '../components/SEO';

interface JobListItem {
  ObjectUuid: string;
  Bezeichnung: string;
  EinsatzortOrt: string;
  EinsatzortPlz?: string;
  VertragsartBezeichnung?: string;
  Vakanzart?: string;
}

export const Jobs: React.FC = () => {
  const [jobs, setJobs] = useState<JobListItem[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');
  const [searchTerm, setSearchTerm] = useState('');

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
      } catch (err: any) {
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
    return title.includes(term) || location.includes(term);
  });

  return (
    <div className="flex flex-col min-h-screen bg-white">
      <SEO 
        title="Jobs in Pforzheim & Enzkreis | Aktuelle Stellenangebote | PersoFlex"
        description="Finde deinen neuen Job in Pforzheim, Enzkreis und Baden-Württemberg. Aktuelle Stellenangebote in Produktion, Logistik, Handwerk und mehr. Jetzt bewerben!"
        keywords="Jobs Pforzheim, Stellenangebote Enzkreis, Arbeit Pforzheim, Zeitarbeit Jobs, Produktion Jobs"
      />
      
      {/* Hero Section */}
      <section className="relative pt-32 pb-20 overflow-hidden">
        {/* Background Effects */}
        <div className="absolute inset-0">
          <div className="absolute top-1/4 right-1/4 w-[500px] h-[500px] bg-orange-500/10 rounded-full blur-[120px]" />
          <div className="absolute bottom-0 left-1/4 w-[400px] h-[400px] bg-red-500/10 rounded-full blur-[100px]" />
        </div>
        
        <div className="max-w-7xl mx-auto px-6 relative z-10">
          <div className="text-center max-w-3xl mx-auto">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-gray-50 border border-gray-200 mb-6">
              <Flame className="w-4 h-4 text-orange-500" />
              <span className="text-sm text-gray-600">Aktuelle Stellenangebote</span>
            </div>
            
            <h1 className="text-4xl md:text-6xl font-black text-gray-900 mb-6">
              Deine Zukunft <span className="text-orange-500">startet hier.</span>
            </h1>
            <p className="text-lg text-gray-600 mb-10">
              Entdecke aktuelle Stellenangebote in Pforzheim, Enzkreis und der Region. 
              Produktion, Logistik, Handwerk und mehr.
            </p>
          </div>
        </div>
      </section>

      {/* Search Section */}
      <div className="relative -mt-8 z-20 px-6">
        <div className="max-w-3xl mx-auto">
          <div className="bg-white border border-gray-200 rounded-2xl p-6 shadow-xl">
            <div className="relative">
              <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400" size={20} />
              <input 
                type="text"
                placeholder="Jobtitel oder Ort eingeben..."
                className="w-full pl-12 pr-4 py-4 bg-gray-50 border border-gray-200 rounded-xl text-gray-900 placeholder:text-gray-400 focus:outline-none focus:border-orange-500 focus:ring-2 focus:ring-orange-500/20 transition-all"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
              />
            </div>
            
            {/* Quick Filters */}
            <div className="flex flex-wrap gap-2 mt-4">
              <button className="px-4 py-2 text-sm bg-orange-500/10 text-orange-500 rounded-lg hover:bg-orange-500 hover:text-white transition-all">
                Alle Jobs
              </button>
              <button className="px-4 py-2 text-sm bg-white border border-gray-200 text-gray-600 rounded-lg hover:border-orange-500/50 hover:text-gray-900 transition-all">
                Produktion
              </button>
              <button className="px-4 py-2 text-sm bg-white border border-gray-200 text-gray-600 rounded-lg hover:border-orange-500/50 hover:text-gray-900 transition-all">
                Logistik
              </button>
              <button className="px-4 py-2 text-sm bg-white border border-gray-200 text-gray-600 rounded-lg hover:border-orange-500/50 hover:text-gray-900 transition-all">
                Handwerk
              </button>
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
              </p>
              <button className="flex items-center gap-2 px-4 py-2 text-sm bg-white border border-gray-200 rounded-lg text-gray-600 hover:border-orange-500/50 transition-all">
                <Filter size={16} />
                Filter
              </button>
            </div>
          )}

          {loading && (
            <div className="text-center py-20">
              <div className="inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-orange-500/10 mb-6">
                <Loader2 className="animate-spin text-orange-500" size={32} />
              </div>
              <p className="text-gray-600 font-medium">Lade aktuelle Jobs...</p>
            </div>
          )}

          {error && (
            <div className="bg-red-50 border border-red-200 text-red-600 p-6 rounded-2xl text-center max-w-2xl mx-auto">
              <AlertCircle size={32} className="mx-auto mb-4" />
              <p className="font-medium">{error}</p>
            </div>
          )}

          {!loading && !error && (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {filteredJobs.map((job) => (
                <div 
                  key={job.ObjectUuid} 
                  className="group bg-white border border-gray-200 rounded-2xl p-6 flex flex-col h-full hover:border-orange-500/50 hover:shadow-xl transition-all duration-300"
                >
                  <div className="flex justify-between items-start mb-4">
                    <div className="w-12 h-12 bg-orange-500/10 text-orange-500 rounded-xl flex items-center justify-center group-hover:bg-orange-500 group-hover:text-white transition-all">
                       <Briefcase size={24} />
                    </div>
                    {job.VertragsartBezeichnung && (
                      <span className="text-xs font-semibold bg-gray-100 text-gray-600 px-3 py-1 rounded-full">
                        {job.VertragsartBezeichnung}
                      </span>
                    )}
                  </div>

                  <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-orange-500 transition-colors line-clamp-2">
                    {job.Bezeichnung}
                  </h3>
                  
                  <div className="flex items-center text-gray-600 mb-6 text-sm">
                    <MapPin size={16} className="mr-2 text-orange-500" />
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
            <div className="text-center py-20">
              <div className="w-20 h-20 bg-gray-100 rounded-2xl flex items-center justify-center mx-auto mb-6">
                <Search size={32} className="text-gray-400" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">Keine Jobs gefunden</h3>
              <p className="text-gray-600 mb-6">Versuche es mit anderen Suchbegriffen</p>
              <button 
                onClick={() => setSearchTerm('')}
                className="px-6 py-3 bg-orange-500 text-white rounded-xl font-semibold hover:bg-orange-600 transition-all"
              >
                Filter zurücksetzen
              </button>
            </div>
          )}
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 px-6 border-t border-gray-200">
        <div className="max-w-4xl mx-auto text-center">
          <Flame className="w-12 h-12 text-orange-500 mx-auto mb-6" />
          <h2 className="text-2xl md:text-3xl font-black text-gray-900 mb-4">
            Nicht das Richtige dabei?
          </h2>
          <p className="text-gray-600 mb-8">
            Schick uns deine Initiativbewerbung und wir melden uns, sobald der passende Job verfügbar ist.
          </p>
          <Link 
            to="/kontakt" 
            className="inline-flex items-center gap-2 bg-orange-500 hover:bg-orange-600 text-white px-8 py-4 rounded-xl font-semibold hover:shadow-lg transition-all"
          >
            Initiativbewerbung senden <ArrowRight size={18} />
          </Link>
        </div>
      </section>
    </div>
  );
};
