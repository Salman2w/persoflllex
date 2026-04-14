import React, { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import { 
  ArrowLeft, MapPin, CheckCircle, Clock, Briefcase, Calendar, Info, 
  Phone, Mail, Share2, X, Upload, Loader2, HelpCircle, ChevronDown, ChevronUp,
  Linkedin, Facebook, Instagram, MessageCircle, Euro, Home, User, Target,
  Award, GraduationCap, Languages, FileText, Hash, Star
} from 'lucide-react';

// --- DATEN INTERFACE ---
interface JobDetailData {
  ObjectUuid: string;
  StellenID?: string;
  Bezeichnung: string;
  BezeichnungAusschreibung?: string;
  EinsatzortOrt: string;
  EinsatzortPlz?: string;
  
  // Texte
  Stellenziel?: string; StellenzielHeader?: string;
  Arbeitgebervorstellung?: string; ArbeitgebervorstellungHeader?: string;
  Unternehmensbedeutung?: string; UnternehmensbedeutungHeader?: string;
  Aufgaben?: string; AufgabenHeader?: string;
  FachlicheAnforderungen?: string; FachlicheAnforderungenHeader?: string;
  PersoenlicheAnforderungen?: string; PersoenlicheAnforderungenHeader?: string;
  Perspektiven?: string; PerspektivenHeader?: string;
  Arbeitgeberleistung?: string; ArbeitgeberleistungHeader?: string;
  KontaktText?: string; KontaktTextHeader?: string;
  
  // Meta
  Beginn?: string; BeginnAbSofort?: boolean;
  VertragsartenString?: string;
  Gehalt?: number; GehaltBis?: number; GehaltWaehrung?: string; GehaltZeitraum?: string;
  Homeoffice?: boolean;
  Arbeitsstunden?: number; ArbeitsstundenZeitraum?: string;
  BefristungText?: string;
  
  // Details
  Berufserfahrung?: number;
  Tarifvertrag?: string; Entgeltgruppe?: string;
  Qualifikation?: { Bezeichnung: string };
  Sprache?: { Bezeichnung: string };
  Skills?: Array<{ Bezeichnung: string }>;
  
  // Bilder
  Image1Uuid?: string; ImageKontaktUuid?: string;
  Mandant?: { ObjectUuid: string };
}

// --- FAQ ---
const FAQS = [
  { question: "Wann erhalte ich eine Rückmeldung?", answer: "In der Regel melden wir uns innerhalb von 1-3 Werktagen bei Ihnen." },
  { question: "Ist ein Anschreiben erforderlich?", answer: "Nein, ein Lebenslauf reicht uns vollkommen aus." },
  { question: "Ist die Vermittlung kostenlos?", answer: "Ja, zu 100 % kostenlos für Sie als Bewerber." }
];

export default function JobDetail() {
  const { id } = useParams<{ id: string }>();
  const [job, setJob] = useState<JobDetailData | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');

  // States
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');
  const [formData, setFormData] = useState({ vorname: '', nachname: '', email: '', telefon: '', datenschutz: false });
  const [file, setFile] = useState<File | null>(null);
  const [openFaqIndex, setOpenFaqIndex] = useState<number | null>(null);

  // API
  const SERVER_URL = 'https://persoflex-gmbh.europersonal.com';
  const API_KEY = 'XhGwFjs1Y0lRO4YGp+iYtkBRcLzUwezpoPQYgEXvV8c=';
  const getImageUrl = (uuid: string) => `${SERVER_URL}/api/public/v1/MandantOeffentlicheDatei/GetAsStreamContent?uuid=${uuid}`;

  useEffect(() => {
    if (!id) return;
    const fetchDetail = async () => {
      setLoading(true);
      try {
        const response = await fetch(`${SERVER_URL}/api/public/v1/Stelle/Read?stellenUuids=${id}`, {
          method: 'GET',
          headers: { 'X-ApiKey': API_KEY, 'Accept': 'application/json' }
        });
        if (response.ok) {
          const data = await response.json();
          if (Array.isArray(data) && data.length > 0) setJob(data[0]);
          else setError('Stelle nicht gefunden.');
        } else setError(`Fehler: ${response.status}`);
      } catch (err) { setError('Verbindungsfehler.'); } finally { setLoading(false); }
    };
    fetchDetail();
  }, [id]);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!job || !formData.datenschutz) return;
    setIsSubmitting(true);
    try {
      const bewerbungJson = {
        Mitarbeiter: {
          Vorname: formData.vorname, Nachname: formData.nachname,
          Kommunikationsmittel: [{ Typ: 4, Wert: formData.email }, { Typ: 2, Wert: formData.telefon }]
        },
        Bewerbung: {
          Stelle: { ObjectUuid: job.ObjectUuid },
          Mandant: { ObjectUuid: job.Mandant?.ObjectUuid || '00000000-0000-0000-0000-000000000000' },
          Bewerbungsdatum: new Date().toISOString(), Datenschutzfaelligkeitsdatum: new Date().toISOString()
        }
      };
      const payload = new FormData();
      payload.append('bewerbung', JSON.stringify(bewerbungJson));
      if (file) payload.append('attachments', file);
      
      const response = await fetch(`${SERVER_URL}/api/public/v2/Bewerbung/Create`, {
        method: 'POST', headers: { 'X-ApiKey': API_KEY }, body: payload
      });
      if (response.ok) { setSubmitStatus('success'); setFormData({ vorname: '', nachname: '', email: '', telefon: '', datenschutz: false }); setFile(null); }
      else setSubmitStatus('error');
    } catch { setSubmitStatus('error'); } finally { setIsSubmitting(false); }
  };

  const createMarkup = (htmlString: string) => ({ __html: htmlString || '' });
  const formatSalary = () => {
    if (!job?.Gehalt) return null;
    const currency = job.GehaltWaehrung === 'EUR' ? '€' : job.GehaltWaehrung;
    const period = job.GehaltZeitraum === 'HOUR' ? '/ Std.' : job.GehaltZeitraum === 'MONTH' ? '/ Monat' : '';
    if (job.GehaltBis) return `${job.Gehalt} - ${job.GehaltBis} ${currency} ${period}`;
    return `${job.Gehalt} ${currency} ${period}`;
  };
  const getStartDate = () => {
    if (job?.BeginnAbSofort) return "Ab Sofort";
    if (job?.Beginn) return new Date(job.Beginn).toLocaleDateString('de-DE');
    return "Nach Absprache";
  };

  if (loading) return <div className="min-h-screen flex items-center justify-center pt-[80px] bg-hell-void"><Loader2 className="animate-spin text-hell-flame" /></div>;
  if (error || !job) return <div className="min-h-screen bg-hell-void pt-[100px] text-center text-white">Fehler beim Laden.</div>;

  return (
    <div className="min-h-screen bg-hell-void pt-[80px] font-sans text-white">
      
      {/* --- HERO HEADER --- */}
      <div className="relative py-16 overflow-hidden">
        {/* Background Effects */}
        <div className="absolute inset-0 bg-gradient-to-b from-hell-ember/20 via-transparent to-transparent"></div>
        <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-hell-flame/10 rounded-full blur-[150px]"></div>
        <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-hell-ember/10 rounded-full blur-[100px]"></div>

        <div className="max-w-7xl mx-auto px-6 relative z-10">
          <Link to="/jobs" className="inline-flex items-center text-hell-ash hover:text-hell-flame transition-colors text-sm mb-8 group">
            <ArrowLeft size={16} className="mr-2 group-hover:-translate-x-1 transition-transform" /> Zuruck zur Jobborse
          </Link>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            <div className="lg:col-span-2">
              <div className="flex flex-wrap gap-3 mb-6">
                 {job.StellenID && <span className="px-2 py-1 bg-hell-smoke/30 rounded-sm text-xs font-mono tracking-wide text-hell-ash border border-hell-smoke/20">REF: {job.StellenID}</span>}
                 {job.VertragsartenString && <span className="px-2 py-1 bg-hell-flame rounded-sm text-xs font-bold uppercase tracking-wide">{job.VertragsartenString}</span>}
              </div>
              
              <h1 className="text-3xl md:text-5xl font-black leading-tight mb-6 text-white">
                {job.BezeichnungAusschreibung || job.Bezeichnung}
              </h1>

              <div className="flex flex-wrap gap-6 text-sm text-hell-ash">
                <div className="flex items-center"><MapPin size={18} className="mr-2 text-hell-flame" /> {job.EinsatzortPlz} {job.EinsatzortOrt}</div>
                {job.Gehalt && <div className="flex items-center"><Euro size={18} className="mr-2 text-hell-flame" /> {formatSalary()}</div>}
                <div className="flex items-center"><Calendar size={18} className="mr-2 text-hell-flame" /> {getStartDate()}</div>
                {job.Homeoffice && <div className="flex items-center"><Home size={18} className="mr-2 text-hell-flame" /> Homeoffice moglich</div>}
              </div>
            </div>

            <div className="lg:col-span-1 flex flex-col justify-center items-start lg:items-end">
               <button onClick={() => setIsModalOpen(true)} className="w-full sm:w-auto bg-hell-flame text-white px-8 py-4 rounded-sm font-bold text-lg hover:bg-white hover:text-hell-void transition-all shadow-lg shadow-hell-flame/20 transform hover:-translate-y-1">
                 Jetzt bewerben
               </button>
               <p className="mt-4 text-xs text-hell-ash max-w-xs text-center lg:text-right">
                 Bewerbung in 2 Minuten. <br/>Kein Anschreiben notig.
               </p>
            </div>
          </div>
        </div>
      </div>

      {/* --- CONTENT BEREICH --- */}
      <div className="max-w-7xl mx-auto px-6 py-16 grid grid-cols-1 lg:grid-cols-12 gap-16">
        
        {/* LINKER HAUPTBEREICH */}
        <div className="lg:col-span-8 space-y-12">
          
          {/* Header Bild */}
          {job.Image1Uuid && (
            <div className="rounded-sm overflow-hidden border border-hell-smoke/20 aspect-[21/9]">
              <img src={getImageUrl(job.Image1Uuid)} alt="Job Header" className="w-full h-full object-cover opacity-80" />
            </div>
          )}

          {/* 1. Einleitung */}
          <div className="prose prose-lg prose-invert max-w-none text-hell-ash prose-headings:font-bold prose-headings:text-white prose-a:text-hell-flame">
             {job.Stellenziel && <div dangerouslySetInnerHTML={createMarkup(job.Stellenziel)} />}
             {job.Arbeitgebervorstellung && <div className="mt-4" dangerouslySetInnerHTML={createMarkup(job.Arbeitgebervorstellung)} />}
             {job.Unternehmensbedeutung && <div className="mt-4" dangerouslySetInnerHTML={createMarkup(job.Unternehmensbedeutung)} />}
          </div>

          {/* 2. Aufgaben */}
          {job.Aufgaben && (
            <div className="bg-hell-charcoal/50 backdrop-blur-sm border border-hell-smoke/20 rounded-sm p-8">
              <h3 className="text-2xl font-bold text-white mb-6 flex items-center">
                <div className="w-8 h-8 rounded-sm bg-hell-flame/20 flex items-center justify-center mr-3 text-hell-flame"><CheckCircle size={18} /></div>
                {job.AufgabenHeader || "Das erwartet Sie"}
              </h3>
              <div className="prose prose-invert max-w-none text-hell-ash prose-li:marker:text-hell-flame" dangerouslySetInnerHTML={createMarkup(job.Aufgaben)} />
            </div>
          )}

          {/* 3. Profil */}
          {(job.FachlicheAnforderungen || job.PersoenlicheAnforderungen) && (
            <div className="bg-hell-charcoal/50 backdrop-blur-sm border border-hell-smoke/20 rounded-sm p-8">
              <h3 className="text-2xl font-bold text-white mb-6 flex items-center">
                <div className="w-8 h-8 rounded-sm bg-hell-ember/20 flex items-center justify-center mr-3 text-hell-ember"><User size={18} /></div>
                {job.FachlicheAnforderungenHeader || "Das bringen Sie mit"}
              </h3>
              
              <div className="space-y-6">
                {job.FachlicheAnforderungen && <div className="prose prose-invert max-w-none text-hell-ash prose-li:marker:text-hell-ember" dangerouslySetInnerHTML={createMarkup(job.FachlicheAnforderungen)} />}
                {job.PersoenlicheAnforderungen && <div className="prose prose-invert max-w-none text-hell-ash prose-li:marker:text-hell-ember" dangerouslySetInnerHTML={createMarkup(job.PersoenlicheAnforderungen)} />}
              </div>

              {/* Skills Tags */}
              {job.Skills && job.Skills.length > 0 && (
                <div className="mt-8 flex flex-wrap gap-2">
                  {job.Skills.map((skill, i) => (
                    <span key={i} className="px-3 py-1.5 bg-hell-smoke/30 text-hell-ash text-sm font-medium rounded-sm border border-hell-smoke/20">
                      {skill.Bezeichnung}
                    </span>
                  ))}
                </div>
              )}
            </div>
          )}

          {/* 4. Wir bieten */}
          {(job.Arbeitgeberleistung || job.Perspektiven) && (
            <div className="relative overflow-hidden rounded-sm p-8 border border-hell-flame/30">
              <div className="absolute inset-0 bg-gradient-to-br from-hell-flame/10 to-hell-ember/10"></div>
              <div className="relative z-10">
                <h3 className="text-2xl font-bold text-white mb-6 flex items-center">
                  <div className="w-8 h-8 rounded-sm bg-hell-flame/20 flex items-center justify-center mr-3 text-hell-flame"><Star size={18} /></div>
                  {job.ArbeitgeberleistungHeader || "Das bieten wir Ihnen"}
                </h3>
                <div className="prose prose-invert max-w-none text-hell-ash prose-li:marker:text-hell-flame" dangerouslySetInnerHTML={createMarkup(job.Arbeitgeberleistung || job.Perspektiven || '')} />
              </div>
            </div>
          )}

          {/* FAQ Accordion */}
          <div className="border-t border-hell-smoke/20 pt-10">
            <h3 className="font-bold text-white mb-4">Haufige Fragen</h3>
            <div className="space-y-2">
              {FAQS.map((faq, idx) => (
                <div key={idx} className="border border-hell-smoke/20 rounded-sm overflow-hidden">
                  <button onClick={() => setOpenFaqIndex(openFaqIndex === idx ? null : idx)} className="w-full flex justify-between items-center p-4 bg-hell-charcoal/50 hover:bg-hell-charcoal text-left font-medium text-sm text-white">
                    {faq.question}
                    {openFaqIndex === idx ? <ChevronUp size={16} className="text-hell-flame" /> : <ChevronDown size={16} className="text-hell-ash" />}
                  </button>
                  {openFaqIndex === idx && <div className="p-4 bg-hell-smoke/10 text-sm text-hell-ash border-t border-hell-smoke/20">{faq.answer}</div>}
                </div>
              ))}
            </div>
          </div>

        </div>

        {/* --- RECHTE SIDEBAR --- */}
        <div className="lg:col-span-4">
          <div className="sticky top-24 space-y-6">
            
            {/* KEY FACTS BOX */}
            <div className="bg-hell-charcoal/50 backdrop-blur-sm border border-hell-smoke/20 rounded-sm p-6">
              <h3 className="font-bold text-white mb-4 border-b border-hell-smoke/20 pb-2">Die Fakten</h3>
              
              <ul className="space-y-4 text-sm">
                <li className="flex items-start">
                   <Calendar className="w-5 h-5 text-hell-flame mr-3 shrink-0" />
                   <div>
                     <span className="block text-hell-ash text-xs uppercase font-bold">Startdatum</span>
                     <span className="font-medium text-white">{getStartDate()}</span>
                   </div>
                </li>
                {job.Arbeitsstunden && (
                  <li className="flex items-start">
                    <Clock className="w-5 h-5 text-hell-flame mr-3 shrink-0" />
                    <div>
                      <span className="block text-hell-ash text-xs uppercase font-bold">Arbeitszeit</span>
                      <span className="font-medium text-white">{job.Arbeitsstunden} {job.ArbeitsstundenZeitraum === 'WEEK' ? 'Std./Woche' : 'Stunden'}</span>
                    </div>
                  </li>
                )}
                {job.Tarifvertrag && (
                  <li className="flex items-start">
                    <FileText className="w-5 h-5 text-hell-flame mr-3 shrink-0" />
                    <div>
                      <span className="block text-hell-ash text-xs uppercase font-bold">Tarif</span>
                      <span className="font-medium text-white">{job.Tarifvertrag} {job.Entgeltgruppe && `(${job.Entgeltgruppe})`}</span>
                    </div>
                  </li>
                )}
                 {job.Homeoffice && (
                  <li className="flex items-start">
                    <Home className="w-5 h-5 text-hell-flame mr-3 shrink-0" />
                    <div>
                      <span className="block text-hell-ash text-xs uppercase font-bold">Arbeitsort</span>
                      <span className="font-medium text-hell-flame">Homeoffice moglich</span>
                    </div>
                  </li>
                )}
              </ul>

              <div className="mt-8 pt-6 border-t border-hell-smoke/20">
                <button 
                  onClick={() => setIsModalOpen(true)}
                  className="w-full bg-hell-flame text-white py-3 rounded-sm font-bold hover:bg-white hover:text-hell-void transition-all shadow-lg shadow-hell-flame/20 mb-3"
                >
                  Jetzt bewerben
                </button>
                <div className="text-center">
                  <span className="text-xs text-hell-ash">Dauert nur 2 Minuten. Kein Login.</span>
                </div>
              </div>
            </div>

            {/* KONTAKT BOX */}
            <div className="bg-hell-charcoal/50 backdrop-blur-sm border border-hell-smoke/20 rounded-sm p-6">
              <h4 className="font-bold text-white mb-4 text-sm">Ihr Ansprechpartner</h4>
              
              <div className="flex items-center gap-4 mb-4">
                 {job.ImageKontaktUuid ? (
                    <img src={getImageUrl(job.ImageKontaktUuid)} className="w-12 h-12 rounded-sm object-cover border border-hell-smoke/20" alt="Kontakt" />
                 ) : (
                    <div className="w-12 h-12 rounded-sm bg-hell-smoke/30 flex items-center justify-center text-hell-ash"><User size={20} /></div>
                 )}
                 <div>
                   <p className="text-sm font-bold text-white">Recruiting Team</p>
                   <p className="text-xs text-hell-ash">Pforzheim</p>
                 </div>
              </div>
              
              <div className="space-y-3">
                 <a href="tel:+497231123456" className="flex items-center justify-center w-full py-2 border border-hell-smoke/20 rounded-sm text-sm font-medium text-white hover:bg-hell-smoke/20 transition-colors">
                   <Phone size={16} className="mr-2 text-hell-flame" /> Anrufen
                 </a>
                 <a href="mailto:info@persoflex-gmbh.de" className="flex items-center justify-center w-full py-2 border border-hell-smoke/20 rounded-sm text-sm font-medium text-white hover:bg-hell-smoke/20 transition-colors">
                   <Mail size={16} className="mr-2 text-hell-flame" /> E-Mail
                 </a>
              </div>
            </div>

            {/* SHARE */}
            <div className="flex justify-center gap-4 text-hell-ash">
                <span className="text-xs uppercase font-bold tracking-widest mt-1">Teilen</span>
                <button onClick={() => alert("Link kopiert!")} className="hover:text-hell-flame transition-colors"><Share2 size={20} /></button>
            </div>

          </div>
        </div>

      </div>

      {/* --- MOBILE STICKY BUTTON --- */}
      <div className="fixed bottom-0 left-0 right-0 p-4 bg-hell-charcoal border-t border-hell-smoke/20 lg:hidden z-40">
         <button onClick={() => setIsModalOpen(true)} className="w-full bg-hell-flame text-white py-3.5 rounded-sm font-bold shadow-lg shadow-hell-flame/20">
           Jetzt bewerben
         </button>
      </div>

      {/* --- MODAL --- */}
      {isModalOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-hell-void/90 backdrop-blur-sm">
          <div className="bg-hell-charcoal border border-hell-smoke/20 rounded-sm shadow-2xl w-full max-w-lg max-h-[90vh] overflow-y-auto">
            <div className="flex justify-between items-center p-6 border-b border-hell-smoke/20 sticky top-0 bg-hell-charcoal z-10">
              <h2 className="text-xl font-bold text-white">Bewerbung senden</h2>
              <button onClick={() => setIsModalOpen(false)} className="text-hell-ash hover:text-white"><X size={24} /></button>
            </div>
            <div className="p-6">
              {submitStatus === 'success' ? (
                <div className="text-center py-10">
                  <div className="w-16 h-16 bg-hell-flame/20 text-hell-flame rounded-sm flex items-center justify-center mx-auto mb-4"><CheckCircle size={32} /></div>
                  <h3 className="text-2xl font-bold text-white mb-2">Vielen Dank!</h3>
                  <button onClick={() => setIsModalOpen(false)} className="bg-hell-flame text-white px-6 py-2 rounded-sm font-bold">Schliessen</button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div className="grid grid-cols-2 gap-4">
                    <div><label className="block text-xs font-bold uppercase text-hell-ash mb-1">Vorname *</label><input required type="text" className="w-full p-3 bg-hell-smoke/20 border border-hell-smoke/30 rounded-sm text-white focus:ring-2 focus:ring-hell-flame focus:border-hell-flame outline-none" value={formData.vorname} onChange={e => setFormData({...formData, vorname: e.target.value})} /></div>
                    <div><label className="block text-xs font-bold uppercase text-hell-ash mb-1">Nachname *</label><input required type="text" className="w-full p-3 bg-hell-smoke/20 border border-hell-smoke/30 rounded-sm text-white focus:ring-2 focus:ring-hell-flame focus:border-hell-flame outline-none" value={formData.nachname} onChange={e => setFormData({...formData, nachname: e.target.value})} /></div>
                  </div>
                  <div><label className="block text-xs font-bold uppercase text-hell-ash mb-1">E-Mail *</label><input required type="email" className="w-full p-3 bg-hell-smoke/20 border border-hell-smoke/30 rounded-sm text-white focus:ring-2 focus:ring-hell-flame focus:border-hell-flame outline-none" value={formData.email} onChange={e => setFormData({...formData, email: e.target.value})} /></div>
                  <div><label className="block text-xs font-bold uppercase text-hell-ash mb-1">Telefon</label><input type="tel" className="w-full p-3 bg-hell-smoke/20 border border-hell-smoke/30 rounded-sm text-white focus:ring-2 focus:ring-hell-flame focus:border-hell-flame outline-none" value={formData.telefon} onChange={e => setFormData({...formData, telefon: e.target.value})} /></div>
                  <div>
                    <label className="block text-xs font-bold uppercase text-hell-ash mb-1">Lebenslauf (PDF) *</label>
                    <div className="border-2 border-dashed border-hell-smoke/30 rounded-sm p-8 text-center relative hover:border-hell-flame/50 hover:bg-hell-smoke/10 transition-colors cursor-pointer">
                      <input required type="file" accept="application/pdf" className="absolute inset-0 w-full h-full opacity-0 cursor-pointer" onChange={e => setFile(e.target.files ? e.target.files[0] : null)} />
                      <Upload className="mx-auto text-hell-ash mb-2" />
                      <p className="text-sm font-medium text-hell-ash">{file ? file.name : "Datei hier ablegen oder klicken"}</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3 mt-4"><input required type="checkbox" className="mt-1 accent-hell-flame" checked={formData.datenschutz} onChange={e => setFormData({...formData, datenschutz: e.target.checked})}/><label className="text-xs text-hell-ash">Ich stimme der Verarbeitung meiner Daten zu.</label></div>
                  <button disabled={isSubmitting} type="submit" className="w-full bg-hell-flame text-white py-3 rounded-sm font-bold hover:bg-white hover:text-hell-void transition-colors flex justify-center items-center shadow-lg shadow-hell-flame/20">
                    {isSubmitting ? <Loader2 className="animate-spin" /> : "Jetzt absenden"}
                  </button>
                </form>
              )}
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
