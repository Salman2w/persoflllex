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
    <div className="flex flex-col min-h-screen bg-background">
      <SEO 
        title="Jobs in Pforzheim & Enzkreis | Aktuelle Stellenangebote | PersoFlex"
        description="Finde deinen neuen Job in Pforzheim, Enzkreis und Baden-Württemberg. Aktuelle Stellenangebote in Produktion, Logistik, Handwerk und mehr. Jetzt bewerben!"
        keywords="Jobs Pforzheim, Stellenangebote Enzkreis, Arbeit Pforzheim, Zeitarbeit Jobs, Produktion Jobs"
      />
      
      {/* Hero Section */}
      <section className="relative pt-32 pb-20 overflow-hidden">
        {/* Background Effects */}
        <div className="absolute inset-0">
          <div className="absolute top-1/4 right-1/4 w-[500px] h-[500px] bg-primary/15 rounded-full blur-[120px]" />
          <div className="absolute bottom-0 left-1/4 w-[400px] h-[400px] bg-secondary/10 rounded-full blur-[100px]" />
        </div>
        
        <div className="max-w-7xl mx-auto px-6 relative z-10">
          <div className="text-center max-w-3xl mx-auto">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-card border border-primary/20 mb-6">
              <Flame className="w-4 h-4 text-primary" />
              <span className="text-sm text-muted-foreground">Aktuelle Stellenangebote</span>
            </div>
            
            <h1 className="text-4xl md:text-6xl font-black text-foreground mb-6">
              Deine Zukunft <span className="text-gradient-flame">startet hier.</span>
            </h1>
            <p className="text-lg text-muted-foreground mb-10">
              Entdecke aktuelle Stellenangebote in Pforzheim, Enzkreis und der Region. 
              Produktion, Logistik, Handwerk und mehr.
            </p>
          </div>
        </div>
      </section>

      {/* Search Section */}
      <div className="relative -mt-8 z-20 px-6">
        <div className="max-w-3xl mx-auto">
          <div className="bg-card border border-border rounded-2xl p-6 shadow-2xl shadow-primary/5">
            <div className="relative">
              <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-muted-foreground" size={20} />
              <input 
                type="text"
                placeholder="Jobtitel oder Ort eingeben..."
                className="w-full pl-12 pr-4 py-4 bg-background border border-border rounded-xl text-foreground placeholder:text-muted-foreground focus:outline-none focus:border-primary focus:ring-2 focus:ring-primary/20 transition-all"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
              />
            </div>
            
            {/* Quick Filters */}
            <div className="flex flex-wrap gap-2 mt-4">
              <button className="px-4 py-2 text-sm bg-primary/10 text-primary rounded-lg hover:bg-primary hover:text-white transition-all">
                Alle Jobs
              </button>
              <button className="px-4 py-2 text-sm bg-card border border-border text-muted-foreground rounded-lg hover:border-primary/50 hover:text-foreground transition-all">
                Produktion
              </button>
              <button className="px-4 py-2 text-sm bg-card border border-border text-muted-foreground rounded-lg hover:border-primary/50 hover:text-foreground transition-all">
                Logistik
              </button>
              <button className="px-4 py-2 text-sm bg-card border border-border text-muted-foreground rounded-lg hover:border-primary/50 hover:text-foreground transition-all">
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
              <p className="text-muted-foreground">
                <span className="text-foreground font-bold">{filteredJobs.length}</span> Jobs gefunden
              </p>
              <button className="flex items-center gap-2 px-4 py-2 text-sm bg-card border border-border rounded-lg text-muted-foreground hover:border-primary/50 transition-all">
                <Filter size={16} />
                Filter
              </button>
            </div>
          )}

          {loading && (
            <div className="text-center py-20">
              <div className="inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-primary/10 mb-6">
                <Loader2 className="animate-spin text-primary" size={32} />
              </div>
              <p className="text-muted-foreground font-medium">Lade aktuelle Jobs...</p>
            </div>
          )}

          {error && (
            <div className="bg-destructive/10 border border-destructive/30 text-destructive p-6 rounded-2xl text-center max-w-2xl mx-auto">
              <AlertCircle size={32} className="mx-auto mb-4" />
              <p className="font-medium">{error}</p>
            </div>
          )}

          {!loading && !error && (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {filteredJobs.map((job) => (
                <div 
                  key={job.ObjectUuid} 
                  className="group bg-card border border-border rounded-2xl p-6 flex flex-col h-full hover:border-primary/50 hover:shadow-[0_20px_60px_rgba(0,0,0,0.3),0_0_30px_rgba(234,88,12,0.1)] transition-all duration-300"
                >
                  <div className="flex justify-between items-start mb-4">
                    <div className="w-12 h-12 bg-primary/10 text-primary rounded-xl flex items-center justify-center group-hover:bg-primary group-hover:text-white transition-all">
                       <Briefcase size={24} />
                    </div>
                    {job.VertragsartBezeichnung && (
                      <span className="text-xs font-semibold bg-muted text-muted-foreground px-3 py-1 rounded-full">
                        {job.VertragsartBezeichnung}
                      </span>
                    )}
                  </div>

                  <h3 className="text-xl font-bold text-foreground mb-3 group-hover:text-primary transition-colors line-clamp-2">
                    {job.Bezeichnung}
                  </h3>
                  
                  <div className="flex items-center text-muted-foreground mb-6 text-sm">
                    <MapPin size={16} className="mr-2 text-primary" />
                    {job.EinsatzortPlz} {job.EinsatzortOrt || 'Pforzheim'}
                  </div>

                  <div className="mt-auto">
                    <Link 
                      to={`/jobs/${job.ObjectUuid}`} 
                      className="flex items-center justify-center w-full bg-gradient-to-r from-primary to-secondary text-white py-3 rounded-xl font-semibold transition-all duration-300 hover:shadow-[0_0_20px_rgba(234,88,12,0.4)] hover:scale-[1.02]"
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
              <div className="w-20 h-20 bg-muted rounded-2xl flex items-center justify-center mx-auto mb-6">
                <Search size={32} className="text-muted-foreground" />
              </div>
              <h3 className="text-xl font-bold text-foreground mb-2">Keine Jobs gefunden</h3>
              <p className="text-muted-foreground mb-6">Versuche es mit anderen Suchbegriffen</p>
              <button 
                onClick={() => setSearchTerm('')}
                className="px-6 py-3 bg-primary text-white rounded-xl font-semibold hover:bg-primary/90 transition-all"
              >
                Filter zurücksetzen
              </button>
            </div>
          )}
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 px-6 border-t border-border">
        <div className="max-w-4xl mx-auto text-center">
          <Flame className="w-12 h-12 text-primary mx-auto mb-6" />
          <h2 className="text-2xl md:text-3xl font-black text-foreground mb-4">
            Nicht das Richtige dabei?
          </h2>
          <p className="text-muted-foreground mb-8">
            Schick uns deine Initiativbewerbung und wir melden uns, sobald der passende Job verfügbar ist.
          </p>
          <Link 
            to="/kontakt" 
            className="inline-flex items-center gap-2 bg-gradient-to-r from-primary to-secondary text-white px-8 py-4 rounded-xl font-bold hover:shadow-[0_0_30px_rgba(234,88,12,0.4)] transition-all"
          >
            Initiativbewerbung senden <ArrowRight size={18} />
          </Link>
        </div>
      </section>
    </div>
  );
};
