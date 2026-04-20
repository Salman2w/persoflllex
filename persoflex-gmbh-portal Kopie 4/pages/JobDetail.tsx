import React, { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import { 
  ArrowLeft, MapPin, CheckCircle, Clock, Briefcase, Calendar, 
  Phone, Mail, Share2, X, Upload, Loader2, ChevronDown, ChevronUp,
  Euro, Home, User, Star, FileText, Flame
} from 'lucide-react';
import { SEO } from '../components/SEO';

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

  if (loading) return (
    <div className="min-h-screen flex items-center justify-center pt-[80px] bg-white">
      <Loader2 className="animate-spin text-orange-500" size={48} />
    </div>
  );
  
  if (error || !job) return (
    <div className="min-h-screen bg-white pt-[100px] text-center">
      <div className="max-w-md mx-auto px-6">
        <div className="w-16 h-16 bg-red-100 rounded-xl flex items-center justify-center mx-auto mb-4">
          <X className="text-red-500" size={32} />
        </div>
        <h1 className="text-2xl font-bold text-gray-900 mb-2">Fehler beim Laden</h1>
        <p className="text-gray-600 mb-6">{error || 'Die Stelle konnte nicht gefunden werden.'}</p>
        <Link to="/jobs" className="inline-flex items-center gap-2 bg-orange-500 text-white px-6 py-3 rounded-xl font-semibold hover:bg-orange-600 transition-colors">
          <ArrowLeft size={18} /> Zurück zur Jobübersicht
        </Link>
      </div>
    </div>
  );

  return (
    <div className="min-h-screen bg-white pt-[80px]">
      <SEO 
        title={`${job.BezeichnungAusschreibung || job.Bezeichnung} | Jobs bei PersoFlex`}
        description={`Jetzt bewerben: ${job.BezeichnungAusschreibung || job.Bezeichnung} in ${job.EinsatzortOrt}. Faire Bezahlung, persönliche Betreuung.`}
        keywords={`${job.Bezeichnung}, Jobs ${job.EinsatzortOrt}, Stellenangebot Pforzheim`}
        canonicalUrl={`https://www.persoflex-gmbh.de/jobs/${job.ObjectUuid}`}
        structuredData={{
          "@context": "https://schema.org",
          "@type": "JobPosting",
          "title": job.BezeichnungAusschreibung || job.Bezeichnung,
          "description": [
            job.Stellenziel,
            job.Aufgaben,
            job.FachlicheAnforderungen,
            job.Arbeitgeberleistung
          ].filter(Boolean).join('\n\n') || `${job.BezeichnungAusschreibung || job.Bezeichnung} in ${job.EinsatzortOrt} bei PersoFlex GmbH.`,
          "identifier": {
            "@type": "PropertyValue",
            "name": "PersoFlex GmbH",
            "value": job.StellenID || job.ObjectUuid
          },
          "datePosted": new Date().toISOString().split('T')[0],
          "validThrough": new Date(Date.now() + 90 * 24 * 60 * 60 * 1000).toISOString().split('T')[0],
          "employmentType": job.VertragsartenString?.toUpperCase().includes('VOLLZEIT') ? 'FULL_TIME' : 
                            job.VertragsartenString?.toUpperCase().includes('TEILZEIT') ? 'PART_TIME' : 
                            'FULL_TIME',
          "hiringOrganization": {
            "@type": "Organization",
            "name": "PersoFlex GmbH",
            "sameAs": "https://www.persoflex-gmbh.de",
            "logo": "https://www.persoflex-gmbh.de/bilder/logo.webp"
          },
          "jobLocation": {
            "@type": "Place",
            "address": {
              "@type": "PostalAddress",
              "streetAddress": "",
              "addressLocality": job.EinsatzortOrt,
              "postalCode": job.EinsatzortPlz || "",
              "addressRegion": "Baden-Württemberg",
              "addressCountry": "DE"
            }
          },
          ...(job.Gehalt ? {
            "baseSalary": {
              "@type": "MonetaryAmount",
              "currency": job.GehaltWaehrung || "EUR",
              "value": {
                "@type": "QuantitativeValue",
                "minValue": job.Gehalt,
                ...(job.GehaltBis ? { "maxValue": job.GehaltBis } : {}),
                "unitText": job.GehaltZeitraum?.toUpperCase().includes('STUNDE') ? 'HOUR' :
                           job.GehaltZeitraum?.toUpperCase().includes('MONAT') ? 'MONTH' :
                           job.GehaltZeitraum?.toUpperCase().includes('JAHR') ? 'YEAR' :
                           'HOUR'
              }
            }
          } : {}),
          ...(job.Skills && job.Skills.length > 0 ? {
            "skills": job.Skills.map(s => s.Bezeichnung).join(', ')
          } : {}),
          ...(job.Qualifikation ? {
            "qualifications": job.Qualifikation.Bezeichnung
          } : {}),
          "directApply": true,
          "inLanguage": "de-DE"
        }}
      />
      
      {/* --- HERO HEADER --- */}
      <section className="relative py-16 overflow-hidden bg-gradient-to-b from-gray-50 to-white">
        {/* Background Effects */}
        <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-orange-500/10 rounded-full blur-[150px]"></div>
        <div className="absolute bottom-0 left-0 w-[300px] h-[300px] bg-orange-500/5 rounded-full blur-[100px]"></div>

        <div className="max-w-7xl mx-auto px-6 relative z-10">
          <Link to="/jobs" className="inline-flex items-center text-gray-500 hover:text-orange-500 transition-colors text-sm mb-8 group">
            <ArrowLeft size={16} className="mr-2 group-hover:-translate-x-1 transition-transform" /> Zurück zur Jobübersicht
          </Link>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            <div className="lg:col-span-2">
              <div className="flex flex-wrap gap-3 mb-6">
                 {job.StellenID && (
                   <span className="px-3 py-1.5 bg-gray-100 rounded-lg text-xs font-mono tracking-wide text-gray-600 border border-gray-200">
                     REF: {job.StellenID}
                   </span>
                 )}
                 {job.VertragsartenString && (
                   <span className="px-3 py-1.5 bg-orange-500 text-white rounded-lg text-xs font-bold uppercase tracking-wide">
                     {job.VertragsartenString}
                   </span>
                 )}
              </div>
              
              <h1 className="text-3xl md:text-5xl font-black leading-tight mb-6 text-gray-900">
                {job.BezeichnungAusschreibung || job.Bezeichnung}
              </h1>

              <div className="flex flex-wrap gap-6 text-sm text-gray-600">
                <div className="flex items-center">
                  <MapPin size={18} className="mr-2 text-orange-500" /> 
                  {job.EinsatzortPlz} {job.EinsatzortOrt}
                </div>
                {job.Gehalt && (
                  <div className="flex items-center">
                    <Euro size={18} className="mr-2 text-orange-500" /> 
                    {formatSalary()}
                  </div>
                )}
                <div className="flex items-center">
                  <Calendar size={18} className="mr-2 text-orange-500" /> 
                  {getStartDate()}
                </div>
                {job.Homeoffice && (
                  <div className="flex items-center">
                    <Home size={18} className="mr-2 text-orange-500" /> 
                    Homeoffice möglich
                  </div>
                )}
              </div>
            </div>

            <div className="lg:col-span-1 flex flex-col justify-center items-start lg:items-end">
               <button 
                 onClick={() => setIsModalOpen(true)} 
                 className="w-full sm:w-auto bg-orange-500 hover:bg-orange-600 text-white px-8 py-4 rounded-xl font-bold text-lg transition-all shadow-lg shadow-orange-500/20 hover:shadow-xl hover:-translate-y-1"
               >
                 Jetzt bewerben
               </button>
               <p className="mt-4 text-xs text-gray-500 max-w-xs text-center lg:text-right">
                 Bewerbung in 2 Minuten. <br/>Kein Anschreiben nötig.
               </p>
            </div>
          </div>
        </div>
      </section>

      {/* --- CONTENT BEREICH --- */}
      <div className="max-w-7xl mx-auto px-6 py-16 grid grid-cols-1 lg:grid-cols-12 gap-16">
        
        {/* LINKER HAUPTBEREICH */}
        <div className="lg:col-span-8 space-y-12">
          
          {/* Header Bild */}
          {job.Image1Uuid && (
            <div className="rounded-2xl overflow-hidden border border-gray-200 aspect-[21/9]">
              <img src={getImageUrl(job.Image1Uuid)} alt="Job Header" className="w-full h-full object-cover" />
            </div>
          )}

          {/* 1. Einleitung */}
          <div className="prose prose-lg max-w-none text-gray-600 prose-headings:font-bold prose-headings:text-gray-900 prose-a:text-orange-500">
             {job.Stellenziel && <div dangerouslySetInnerHTML={createMarkup(job.Stellenziel)} />}
             {job.Arbeitgebervorstellung && <div className="mt-4" dangerouslySetInnerHTML={createMarkup(job.Arbeitgebervorstellung)} />}
             {job.Unternehmensbedeutung && <div className="mt-4" dangerouslySetInnerHTML={createMarkup(job.Unternehmensbedeutung)} />}
          </div>

          {/* 2. Aufgaben */}
          {job.Aufgaben && (
            <div className="bg-gray-50 border border-gray-200 rounded-2xl p-8">
              <h3 className="text-2xl font-bold text-gray-900 mb-6 flex items-center">
                <div className="w-10 h-10 rounded-xl bg-orange-100 flex items-center justify-center mr-4 text-orange-500">
                  <CheckCircle size={20} />
                </div>
                {job.AufgabenHeader || "Das erwartet Sie"}
              </h3>
              <div className="prose max-w-none text-gray-600 prose-li:marker:text-orange-500" dangerouslySetInnerHTML={createMarkup(job.Aufgaben)} />
            </div>
          )}

          {/* 3. Profil */}
          {(job.FachlicheAnforderungen || job.PersoenlicheAnforderungen) && (
            <div className="bg-white border border-gray-200 rounded-2xl p-8">
              <h3 className="text-2xl font-bold text-gray-900 mb-6 flex items-center">
                <div className="w-10 h-10 rounded-xl bg-gray-100 flex items-center justify-center mr-4 text-gray-600">
                  <User size={20} />
                </div>
                {job.FachlicheAnforderungenHeader || "Das bringen Sie mit"}
              </h3>
              
              <div className="space-y-6">
                {job.FachlicheAnforderungen && (
                  <div className="prose max-w-none text-gray-600 prose-li:marker:text-orange-500" dangerouslySetInnerHTML={createMarkup(job.FachlicheAnforderungen)} />
                )}
                {job.PersoenlicheAnforderungen && (
                  <div className="prose max-w-none text-gray-600 prose-li:marker:text-orange-500" dangerouslySetInnerHTML={createMarkup(job.PersoenlicheAnforderungen)} />
                )}
              </div>

              {/* Skills Tags */}
              {job.Skills && job.Skills.length > 0 && (
                <div className="mt-8 flex flex-wrap gap-2">
                  {job.Skills.map((skill, i) => (
                    <span key={i} className="px-3 py-1.5 bg-gray-100 text-gray-700 text-sm font-medium rounded-lg border border-gray-200">
                      {skill.Bezeichnung}
                    </span>
                  ))}
                </div>
              )}
            </div>
          )}

          {/* 4. Wir bieten */}
          {(job.Arbeitgeberleistung || job.Perspektiven) && (
            <div className="relative overflow-hidden rounded-2xl p-8 bg-orange-50 border border-orange-200">
              <div className="relative z-10">
                <h3 className="text-2xl font-bold text-gray-900 mb-6 flex items-center">
                  <div className="w-10 h-10 rounded-xl bg-orange-500 flex items-center justify-center mr-4 text-white">
                    <Star size={20} />
                  </div>
                  {job.ArbeitgeberleistungHeader || "Das bieten wir Ihnen"}
                </h3>
                <div className="prose max-w-none text-gray-700 prose-li:marker:text-orange-500" dangerouslySetInnerHTML={createMarkup(job.Arbeitgeberleistung || job.Perspektiven || '')} />
              </div>
            </div>
          )}

          {/* FAQ Accordion */}
          <div className="border-t border-gray-200 pt-10">
            <h3 className="font-bold text-gray-900 mb-4 text-xl">Häufige Fragen</h3>
            <div className="space-y-3">
              {FAQS.map((faq, idx) => (
                <div key={idx} className="border border-gray-200 rounded-xl overflow-hidden">
                  <button 
                    onClick={() => setOpenFaqIndex(openFaqIndex === idx ? null : idx)} 
                    className="w-full flex justify-between items-center p-4 bg-white hover:bg-gray-50 text-left font-medium text-gray-900 transition-colors"
                  >
                    {faq.question}
                    {openFaqIndex === idx ? (
                      <ChevronUp size={18} className="text-orange-500" />
                    ) : (
                      <ChevronDown size={18} className="text-gray-400" />
                    )}
                  </button>
                  {openFaqIndex === idx && (
                    <div className="p-4 bg-gray-50 text-gray-600 border-t border-gray-200">
                      {faq.answer}
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>

        </div>

        {/* --- RECHTE SIDEBAR --- */}
        <div className="lg:col-span-4">
          <div className="sticky top-24 space-y-6">
            
            {/* KEY FACTS BOX */}
            <div className="bg-white border border-gray-200 rounded-2xl p-6 shadow-sm">
              <h3 className="font-bold text-gray-900 mb-4 pb-3 border-b border-gray-200">Die Fakten</h3>
              
              <ul className="space-y-4 text-sm">
                <li className="flex items-start">
                   <Calendar className="w-5 h-5 text-orange-500 mr-3 shrink-0 mt-0.5" />
                   <div>
                     <span className="block text-gray-500 text-xs uppercase font-semibold">Startdatum</span>
                     <span className="font-medium text-gray-900">{getStartDate()}</span>
                   </div>
                </li>
                {job.Arbeitsstunden && (
                  <li className="flex items-start">
                    <Clock className="w-5 h-5 text-orange-500 mr-3 shrink-0 mt-0.5" />
                    <div>
                      <span className="block text-gray-500 text-xs uppercase font-semibold">Arbeitszeit</span>
                      <span className="font-medium text-gray-900">{job.Arbeitsstunden} {job.ArbeitsstundenZeitraum === 'WEEK' ? 'Std./Woche' : 'Stunden'}</span>
                    </div>
                  </li>
                )}
                {job.Tarifvertrag && (
                  <li className="flex items-start">
                    <FileText className="w-5 h-5 text-orange-500 mr-3 shrink-0 mt-0.5" />
                    <div>
                      <span className="block text-gray-500 text-xs uppercase font-semibold">Tarif</span>
                      <span className="font-medium text-gray-900">{job.Tarifvertrag} {job.Entgeltgruppe && `(${job.Entgeltgruppe})`}</span>
                    </div>
                  </li>
                )}
                 {job.Homeoffice && (
                  <li className="flex items-start">
                    <Home className="w-5 h-5 text-orange-500 mr-3 shrink-0 mt-0.5" />
                    <div>
                      <span className="block text-gray-500 text-xs uppercase font-semibold">Arbeitsort</span>
                      <span className="font-medium text-orange-500">Homeoffice möglich</span>
                    </div>
                  </li>
                )}
              </ul>

              <div className="mt-8 pt-6 border-t border-gray-200">
                <button 
                  onClick={() => setIsModalOpen(true)}
                  className="w-full bg-orange-500 hover:bg-orange-600 text-white py-3.5 rounded-xl font-bold transition-all shadow-lg shadow-orange-500/20 mb-3"
                >
                  Jetzt bewerben
                </button>
                <div className="text-center">
                  <span className="text-xs text-gray-500">Dauert nur 2 Minuten. Kein Login.</span>
                </div>
              </div>
            </div>

            {/* KONTAKT BOX */}
            <div className="bg-gray-50 border border-gray-200 rounded-2xl p-6">
              <h4 className="font-bold text-gray-900 mb-4 text-sm">Ihr Ansprechpartner</h4>
              
              <div className="flex items-center gap-4 mb-4">
                 {job.ImageKontaktUuid ? (
                    <img src={getImageUrl(job.ImageKontaktUuid)} className="w-12 h-12 rounded-xl object-cover border border-gray-200" alt="Kontakt" />
                 ) : (
                    <div className="w-12 h-12 rounded-xl bg-gray-200 flex items-center justify-center text-gray-500">
                      <User size={20} />
                    </div>
                 )}
                 <div>
                   <p className="text-sm font-bold text-gray-900">Recruiting Team</p>
                   <p className="text-xs text-gray-500">Pforzheim</p>
                 </div>
              </div>
              
              <div className="space-y-3">
                 <a href="tel:+497231123456" className="flex items-center justify-center w-full py-2.5 border border-gray-200 rounded-xl text-sm font-medium text-gray-700 hover:bg-white hover:border-orange-500/50 transition-all">
                   <Phone size={16} className="mr-2 text-orange-500" /> Anrufen
                 </a>
                 <a href="mailto:info@persoflex-gmbh.de" className="flex items-center justify-center w-full py-2.5 border border-gray-200 rounded-xl text-sm font-medium text-gray-700 hover:bg-white hover:border-orange-500/50 transition-all">
                   <Mail size={16} className="mr-2 text-orange-500" /> E-Mail
                 </a>
              </div>
            </div>

            {/* SHARE */}
            <div className="flex justify-center gap-4 text-gray-400">
                <span className="text-xs uppercase font-semibold tracking-widest mt-1">Teilen</span>
                <button onClick={() => alert("Link kopiert!")} className="hover:text-orange-500 transition-colors">
                  <Share2 size={20} />
                </button>
            </div>

          </div>
        </div>

      </div>

      {/* --- MOBILE STICKY BUTTON --- */}
      <div className="fixed bottom-0 left-0 right-0 p-4 bg-white border-t border-gray-200 lg:hidden z-40">
         <button 
           onClick={() => setIsModalOpen(true)} 
           className="w-full bg-orange-500 hover:bg-orange-600 text-white py-3.5 rounded-xl font-bold shadow-lg shadow-orange-500/20"
         >
           Jetzt bewerben
         </button>
      </div>

      {/* --- MODAL --- */}
      {isModalOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/50 backdrop-blur-sm">
          <div className="bg-white border border-gray-200 rounded-2xl shadow-2xl w-full max-w-lg max-h-[90vh] overflow-y-auto">
            <div className="flex justify-between items-center p-6 border-b border-gray-200 sticky top-0 bg-white z-10 rounded-t-2xl">
              <h2 className="text-xl font-bold text-gray-900">Bewerbung senden</h2>
              <button onClick={() => setIsModalOpen(false)} className="text-gray-400 hover:text-gray-600 transition-colors">
                <X size={24} />
              </button>
            </div>
            <div className="p-6">
              {submitStatus === 'success' ? (
                <div className="text-center py-10">
                  <div className="w-16 h-16 bg-green-100 text-green-500 rounded-xl flex items-center justify-center mx-auto mb-4">
                    <CheckCircle size={32} />
                  </div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-2">Vielen Dank!</h3>
                  <p className="text-gray-600 mb-6">Wir melden uns in Kürze bei Ihnen.</p>
                  <button 
                    onClick={() => setIsModalOpen(false)} 
                    className="bg-orange-500 hover:bg-orange-600 text-white px-6 py-3 rounded-xl font-semibold transition-colors"
                  >
                    Schließen
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-semibold uppercase text-gray-500 mb-1.5">Vorname *</label>
                      <input 
                        required 
                        type="text" 
                        className="w-full p-3 bg-gray-50 border border-gray-200 rounded-xl text-gray-900 focus:ring-2 focus:ring-orange-500 focus:border-orange-500 outline-none transition-all" 
                        value={formData.vorname} 
                        onChange={e => setFormData({...formData, vorname: e.target.value})} 
                      />
                    </div>
                    <div>
                      <label className="block text-xs font-semibold uppercase text-gray-500 mb-1.5">Nachname *</label>
                      <input 
                        required 
                        type="text" 
                        className="w-full p-3 bg-gray-50 border border-gray-200 rounded-xl text-gray-900 focus:ring-2 focus:ring-orange-500 focus:border-orange-500 outline-none transition-all" 
                        value={formData.nachname} 
                        onChange={e => setFormData({...formData, nachname: e.target.value})} 
                      />
                    </div>
                  </div>
                  <div>
                    <label className="block text-xs font-semibold uppercase text-gray-500 mb-1.5">E-Mail *</label>
                    <input 
                      required 
                      type="email" 
                      className="w-full p-3 bg-gray-50 border border-gray-200 rounded-xl text-gray-900 focus:ring-2 focus:ring-orange-500 focus:border-orange-500 outline-none transition-all" 
                      value={formData.email} 
                      onChange={e => setFormData({...formData, email: e.target.value})} 
                    />
                  </div>
                  <div>
                    <label className="block text-xs font-semibold uppercase text-gray-500 mb-1.5">Telefon</label>
                    <input 
                      type="tel" 
                      className="w-full p-3 bg-gray-50 border border-gray-200 rounded-xl text-gray-900 focus:ring-2 focus:ring-orange-500 focus:border-orange-500 outline-none transition-all" 
                      value={formData.telefon} 
                      onChange={e => setFormData({...formData, telefon: e.target.value})} 
                    />
                  </div>
                  <div>
                    <label className="block text-xs font-semibold uppercase text-gray-500 mb-1.5">Lebenslauf (PDF) *</label>
                    <div className="border-2 border-dashed border-gray-300 rounded-xl p-8 text-center relative hover:border-orange-500/50 hover:bg-orange-50/50 transition-colors cursor-pointer">
                      <input 
                        required 
                        type="file" 
                        accept="application/pdf" 
                        className="absolute inset-0 w-full h-full opacity-0 cursor-pointer" 
                        onChange={e => setFile(e.target.files ? e.target.files[0] : null)} 
                      />
                      <Upload className="mx-auto text-gray-400 mb-2" size={32} />
                      <p className="text-sm font-medium text-gray-600">
                        {file ? file.name : "Datei hier ablegen oder klicken"}
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3 mt-4">
                    <input 
                      required 
                      type="checkbox" 
                      className="mt-1 w-4 h-4 accent-orange-500 rounded" 
                      checked={formData.datenschutz} 
                      onChange={e => setFormData({...formData, datenschutz: e.target.checked})}
                    />
                    <label className="text-xs text-gray-600">
                      Ich stimme der Verarbeitung meiner Daten gemäß der Datenschutzerklärung zu.
                    </label>
                  </div>
                  <button 
                    disabled={isSubmitting} 
                    type="submit" 
                    className="w-full bg-orange-500 hover:bg-orange-600 text-white py-3.5 rounded-xl font-bold transition-colors flex justify-center items-center shadow-lg shadow-orange-500/20 disabled:opacity-50 disabled:cursor-not-allowed"
                  >
                    {isSubmitting ? <Loader2 className="animate-spin" /> : "Jetzt absenden"}
                  </button>
                  {submitStatus === 'error' && (
                    <p className="text-red-500 text-sm text-center">
                      Ein Fehler ist aufgetreten. Bitte versuchen Sie es erneut.
                    </p>
                  )}
                </form>
              )}
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
