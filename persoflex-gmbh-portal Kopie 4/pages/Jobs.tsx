import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom'; // <--- WICHTIG: react-router-dom statt next/link
import { ArrowRight, MapPin, Search, Loader2, AlertCircle, Briefcase } from 'lucide-react';
// import { SEO } from '../components/SEO'; // Falls SEO in Vite anders gelöst ist, ggf. auskommentieren

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

  const scrollToJobs = () => {
    const element = document.getElementById('jobboard-section');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="flex flex-col min-h-screen bg-white pt-[80px]">
      {/* <SEO ... />  Falls vorhanden */}
      
      <section className="bg-brand-black text-white py-20 relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-6 relative z-10">
          <h1 className="text-4xl md:text-5xl font-black mb-6">
            Deine Zukunft <span className="text-brand-orange">startet hier.</span>
          </h1>
          <p className="text-xl text-gray-300 mb-8 max-w-2xl">
            Entdecke aktuelle Stellenangebote in Pforzheim, Enzkreis und der Region Karlsruhe/Stuttgart.
          </p>
          <button onClick={scrollToJobs} className="bg-brand-orange text-white px-8 py-4 font-bold rounded-sm hover:bg-white hover:text-brand-orange transition-colors">
            Zu den offenen Stellen
          </button>
        </div>
      </section>

      <div id="jobboard-section" className="w-full bg-gray-50 py-16">
        <div className="max-w-7xl mx-auto px-6">
          
          <div className="bg-white p-6 rounded-lg shadow-sm mb-10 -mt-24 relative z-20 border border-gray-100">
            <div className="relative">
              <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400" size={20} />
              <input 
                type="text"
                placeholder="Jobtitel oder Ort eingeben..."
                className="w-full pl-12 pr-4 py-4 bg-gray-50 border border-gray-200 rounded-sm focus:outline-none focus:border-brand-orange transition-colors"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
              />
            </div>
          </div>

          {loading && (
            <div className="text-center py-20 text-gray-500">
              <Loader2 className="animate-spin mb-4 mx-auto text-brand-orange" size={40} />
              <p className="font-medium">Lade aktuelle Jobs...</p>
            </div>
          )}

          {error && (
            <div className="bg-red-50 text-red-600 p-6 rounded-sm text-center border border-red-200 max-w-2xl mx-auto">
              <AlertCircle size={32} className="mx-auto mb-2" />
              <p>{error}</p>
            </div>
          )}

          {!loading && !error && (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {filteredJobs.map((job) => (
                <div key={job.ObjectUuid} className="bg-white p-6 rounded-sm shadow-sm border border-gray-100 flex flex-col h-full hover:shadow-lg hover:border-brand-orange transition-all group">
                  
                  <div className="flex justify-between items-start mb-4">
                    <div className="bg-brand-orange/10 text-brand-orange p-2 rounded-sm">
                       <Briefcase size={20} />
                    </div>
                    {job.VertragsartBezeichnung && (
                      <span className="text-xs font-semibold bg-gray-100 text-gray-600 px-2 py-1 rounded">
                        {job.VertragsartBezeichnung}
                      </span>
                    )}
                  </div>

                  <h3 className="text-xl font-bold text-brand-black mb-3 group-hover:text-brand-orange transition-colors">
                    {job.Bezeichnung}
                  </h3>
                  
                  <div className="flex items-center text-gray-500 mb-6 text-sm">
                    <MapPin size={16} className="mr-2 text-brand-orange" />
                    {job.EinsatzortPlz} {job.EinsatzortOrt || 'Pforzheim'}
                  </div>

                  <div className="mt-auto w-full">
                    {/* WICHTIG: Hier nutzen wir "to" statt "href" und KEIN next/link */}
                    <Link 
                      to={`/jobs/${job.ObjectUuid}`} 
                      className="flex items-center justify-center bg-gray-900 text-white py-3 rounded-sm group-hover:bg-brand-orange transition-colors font-medium w-full"
                    >
                      Details ansehen <ArrowRight size={16} className="ml-2" />
                    </Link>
                  </div>

                </div>
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  );
};